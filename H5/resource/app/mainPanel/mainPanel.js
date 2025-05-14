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
mainPanel; !
function(e) {
    var t = function(e) {
        function t() {
            return e.call(this) || this
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.initData(),
            this.addEvents()
        },
        t.prototype.initData = function() {},
        t.prototype.addEvents = function() {},
        t.prototype.removeEvents = function() {},
        t.prototype.updateData = function() {
            this._updateView()
        },
        t.prototype._updateView = function() {},
        t.prototype.destroy = function() {
            this.removeEvents(),
            e.prototype.destroy.call(this)
        },
        t
    } (BaseModule);
    e.BaseView = t,
    __reflect(t.prototype, "mainPanel.BaseView")
} (mainPanel || (mainPanel = {}));
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
mainPanel; !
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.skinName = KanBanNiangPetHeadSkin,
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
                this.selctedFlag.visible = e,
                egret.superSetter(t, this, "selected", e)
            },
            enumerable: !0,
            configurable: !0
        }),
        t.prototype.dataChanged = function() {
            var e = this.data;
            this.icon.source = ClientConfig.getPetHeadPath(e);
            var t = PetXMLInfo.getName(e);
            this.txtName.text = t.length > 6 ? t.substring(0, 5) + "...": t,
            this.txtID.text = e,
            this.cacheAsBitmap = !0,
            1 == core.controller.MainShowStyleCtrl.Instance.GetMode() ? this.tag.visible = !1 : this.tag.visible = core.controller.MainShowStyleCtrl.Instance.GetPetId() == e
        },
        t
    } (BaseItemRenderer);
    e.KanBanNiangHeadRender = t,
    __reflect(t.prototype, "mainPanel.KanBanNiangHeadRender")
} (mainPanel || (mainPanel = {}));
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
    return new(i || (i = Promise))(function(a, s) {
        function r(e) {
            try {
                h(n.next(e))
            } catch(t) {
                s(t)
            }
        }
        function o(e) {
            try {
                h(n["throw"](e))
            } catch(t) {
                s(t)
            }
        }
        function h(e) {
            e.done ? a(e.value) : new i(function(t) {
                t(e.value)
            }).then(r, o)
        }
        h((n = n.apply(e, t || [])).next())
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
        for (; h;) try {
            if (a = 1, s && (r = s[2 & i[0] ? "return": i[0] ? "throw": "next"]) && !(r = r.call(s, i[1])).done) return r;
            switch (s = 0, r && (i = [0, r.value]), i[0]) {
            case 0:
            case 1:
                r = i;
                break;
            case 4:
                return h.label++,
                {
                    value: i[1],
                    done: !1
                };
            case 5:
                h.label++,
                s = i[1],
                i = [0];
                continue;
            case 7:
                i = h.ops.pop(),
                h.trys.pop();
                continue;
            default:
                if (r = h.trys, !(r = r.length > 0 && r[r.length - 1]) && (6 === i[0] || 2 === i[0])) {
                    h = 0;
                    continue
                }
                if (3 === i[0] && (!r || i[1] > r[0] && i[1] < r[3])) {
                    h.label = i[1];
                    break
                }
                if (6 === i[0] && h.label < r[1]) {
                    h.label = r[1],
                    r = i;
                    break
                }
                if (r && h.label < r[2]) {
                    h.label = r[2],
                    h.ops.push(i);
                    break
                }
                r[2] && h.ops.pop(),
                h.trys.pop();
                continue
            }
            i = t.call(e, h)
        } catch(n) {
            i = [6, n],
            s = 0
        } finally {
            a = r = 0
        }
        if (5 & i[0]) throw i[1];
        return {
            value: i[0] ? i[1] : void 0,
            done: !0
        }
    }
    var a, s, r, o, h = {
        label: 0,
        sent: function() {
            if (1 & r[0]) throw r[1];
            return r[1]
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
mainPanel; !
function(e) {
    var t = function(t) {
        function i() {
            var i = t.call(this) || this;
            return i.tl = null,
            i.skinName = e.KanBanNiangSkin,
            i
        }
        return __extends(i, t),
        i.prototype.resetSkin = function() {
            this.txt_search.removeEventListener(egret.Event.CHANGE, this.doSearch, this),
            this.groupMode.removeEventListener(egret.Event.CHANGE, this._onChangeMode, this),
            this.customGroup.removeEventListener(egret.Event.CHANGE, this._onChangeCustom, this),
            ImageButtonUtil.removeAll(this),
            EventManager.removeAll(this),
            this.childrenCreated()
        },
        i.prototype.addEvent = function() {
            var e = this;
            this.list_head.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.onTouchTapItem, this),
            this.list_skin.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.onTouchTapItem, this),
            ImageButtonUtil.add(this.btnClose,
            function() {
                e._checkIsChange() ? Alert.show("展示发生了改变，是否保存当前展示？",
                function() {
                    e.btnSave.touchEnabled = !1,
                    core.controller.MainShowStyleCtrl.Instance.SaveMode(e._mode, e._selectedPetId).then(function() {
                        switch (BubblerManager.getInstance().showText("保存成功"), e._mode) {
                        case 1:
                            StatLogger.log("20221014版本系统功能", "看板人物自定义优化", "退出界面时保存展示为首发精灵或皮肤");
                            break;
                        case 2:
                            e._petIds.indexOf(e._selectedPetId) > -1 ? StatLogger.log("20221014版本系统功能", "看板人物自定义优化", "退出界面时保存展示为自定义精灵") : StatLogger.log("20221014版本系统功能", "看板人物自定义优化", "退出界面时保存展示为自定义皮肤");
                            break;
                        case 3:
                            StatLogger.log("20221014版本系统功能", "看板人物自定义优化", "退出界面时保存展示为赛尔装扮")
                        }
                        e.btnSave.touchEnabled = !0,
                        e._onClose()
                    })
                },
                function() {
                    if (e._mode = core.controller.MainShowStyleCtrl.Instance.GetMode(), e._selectedPetId = core.controller.MainShowStyleCtrl.Instance.GetPetId(), 0 === e._mode) {
                        var t = PetManager.getPetInfo(PetManager.defaultTime);
                        if (t) {
                            var n = t.id;
                            t.skinId > 0 && (n = PetSkinXMLInfo.getSkinInfo(t.skinId).skinPetId),
                            e._selectedPetId = n,
                            e._mode = core.controller.MainShowStyleCtrl.MODE_FIRST_PET
                        } else e._selectedPetId = 0,
                        e._mode = core.controller.MainShowStyleCtrl.MODE_CLOTHES
                    }
                    e.dispatchEventWith(i.EVENT_SHOW_TEMP_MODE, !1, {
                        mode: e._mode,
                        id: e._selectedPetId
                    }),
                    e._onClose()
                }) : e._onClose()
            },
            this),
            ImageButtonUtil.add(this.btnSave,
            function() {
                e._checkIsChange() && (e.btnSave.touchEnabled = !1, core.controller.MainShowStyleCtrl.Instance.SaveMode(e._mode, e._selectedPetId).then(function() {
                    BubblerManager.getInstance().showText("保存成功"),
                    e.btnSave.touchEnabled = !0
                }))
            },
            this),
            ImageButtonUtil.add(this.btnCheck,
            function() {
                var t = e.btnCheck.localToGlobal();
                t.x += e.btnCheck.width,
                t.y += e.btnCheck.height;
                var i = {
                    callBack: e.onChangeAttributeIdHandler,
                    caller: e,
                    selectId: e._currentAttrId,
                    unAutoClose: !1,
                    relativeSet: {
                        srcWorldPos: e.btnCheck.localToGlobal(),
                        dir: "right-top",
                        rx: 0,
                        ry: 0
                    }
                };
                ModuleManager.showModuleByID(config.ModuleConst.PET_CHOOSE_ATTRIBUTE_PANEL, i, AppDoStyle.NULL)
            },
            this),
            ImageButtonUtil.add(this.btnSearch,
            function() {
                var t = e.txt_search.text.trim();
                e._currentSearchStr = t,
                e._onChangeCustom()
            },
            this),
            this.groupMode.addEventListener(egret.Event.CHANGE, this._onChangeMode, this),
            this.customGroup.addEventListener(egret.Event.CHANGE, this._onChangeCustom, this),
            this.txt_search.addEventListener(egret.Event.CHANGE, this.doSearch, this),
            this._onChangeMode(),
            this._onChangeCustom()
        },
        i.prototype.childrenCreated = function() {
            var n = this;
            t.prototype.childrenCreated.call(this),
            this.rb2.touchEnabled = !1,
            this.list_head.itemRenderer = e.KanBanNiangHeadRender,
            this._petList = new eui.ArrayCollection,
            this.list_skin.itemRenderer = e.KanBanNiangSkinRender,
            this._skinList = new eui.ArrayCollection,
            this.list_skin.name = "list_skin",
            this.groupSet.alpha = 0,
            this.groupTop.alpha = 0,
            this.showGroup.alpha = 0,
            this.adaptLeftContent(this.showGroup),
            this.initGrpCustomPet().then(function() {
                n.list_skin.dataProvider = n._skinList,
                n.list_head.dataProvider = n._petList;
                var e = core.controller.MainShowStyleCtrl.Instance.GetMode();
                0 === e && (e = core.controller.MainShowStyleCtrl.MODE_CLOTHES, n.dispatchEventWith(i.EVENT_SHOW_TEMP_MODE, !1, {
                    mode: e,
                    id: 0
                })),
                n._mode = e,
                n._selectedPetId = core.controller.MainShowStyleCtrl.Instance.GetPetId() || 0,
                n.checkTextName(e),
                n.groupMode = n["rb" + e].group,
                n.groupMode.selectedValue = n["rb" + e].value,
                n.customGroup = n.tabPet.group,
                n.customGroup.selectedValue = n.tabPet.value,
                n.addEvent(),
                n.groupSet.alpha = 1,
                n.groupTop.alpha = 1,
                n.showGroup.alpha = 1,
                n.tl ? n.tl.restart() : (n.tl = new gsap.core.Timeline, n.tl.from(n.groupSet, {
                    alpha: 0,
                    right: -1e3,
                    duration: .5
                },
                "<"), n.tl.from(n.groupTop, {
                    alpha: 0,
                    top: -100,
                    duration: .3
                },
                "<"), n.tl.from(n.showGroup, {
                    alpha: 0,
                    left: n.showGroup.left - 200,
                    duration: .3
                },
                "<"))
            })
        },
        i.prototype.onTouchTapItem = function(e) {
            var t = e.item,
            n = "";
            "list_skin" === e.currentTarget.name ? (PetSkinXMLInfo.getSkinInfo(t - 14e5) && (n = PetSkinXMLInfo.getSkinInfo(t - 14e5).name), t = PetXMLInfo.getRealId(t)) : n = PetXMLInfo.getName(t),
            this.modeIcon.source = "select_show_mode_nameicon2_png",
            this._selectedPetId = t,
            this.groupMode.selectedValue = this.rb2.value,
            this._mode = core.controller.MainShowStyleCtrl.MODE_CUSTOM_PET,
            this.txtName.text = n,
            StatLogger.log("20221014版本系统功能", "看板人物自定义优化", "进入看板人物自定义主界面"),
            this.dispatchEventWith(i.EVENT_SHOW_TEMP_MODE, !1, {
                mode: this._mode,
                id: t
            })
        },
        i.prototype.initGrpCustomPet = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var e;
                return __generator(this,
                function(t) {
                    switch (t.label) {
                    case 0:
                        return e = this,
                        [4, PetManager.GetHavePets()];
                    case 1:
                        return e._petIds = t.sent(),
                        this._skinIds = PetSkinController.instance.getAllPetSkinIDs(),
                        [2, Promise.resolve()]
                    }
                })
            })
        },
        i.prototype._checkIsChange = function() {
            var e = this._mode,
            t = this._selectedPetId,
            i = core.controller.MainShowStyleCtrl.Instance.GetMode();
            return e !== i ? !0 : e === core.controller.MainShowStyleCtrl.MODE_CUSTOM_PET && 0 !== t && t !== core.controller.MainShowStyleCtrl.Instance.GetPetId() ? !0 : !1
        },
        i.prototype.onChangeAttributeIdHandler = function(e, t) {
            this._currentAttrId = +t,
            this._onChangeCustom()
        },
        i.prototype._onChangeMode = function() {
            var e = ~~this.groupMode.selectedValue;
            this._mode = e,
            this._currentSearchStr = "",
            this.txt_search.text = "",
            2 != e && (this.modeIcon.source = "select_show_mode_nameicon" + e + "_png", this.checkTextName(e)),
            1 == e ? (this.list_head.selectedItem = null, this.list_skin.selectedItem = null, StatLogger.log("20221014版本系统功能", "看板人物自定义优化", "点击【首发】按钮")) : 3 == e && (this.list_head.selectedItem = null, this.list_skin.selectedItem = null, StatLogger.log("20221014版本系统功能", "看板人物自定义优化", "点击【赛尔】按钮"), this._selectedPetId = 0),
            2 != e && this.dispatchEventWith(i.EVENT_SHOW_TEMP_MODE, !1, {
                mode: e,
                id: this._selectedPetId
            })
        },
        i.prototype._onChangeCustom = function() {
            var e = this.customGroup.selectedValue || 1;
            if (this.btnCheck.visible = 1 == e, this.txt_search.prompt = 1 == e ? "输入精灵名或ID": "输入精灵皮肤名称", 1 == e) {
                this.petGroup.visible = !0,
                this.skinGroup.visible = !1,
                this._petList.removeAll(),
                this.scr_head.stopAnimation(),
                this.scr_head.viewport.scrollV = 0;
                for (var t = this._currentAttrId || 0,
                i = 0; i < this._petIds.length; i++) {
                    var n = this._petIds[i],
                    a = +PetXMLInfo.getType(n),
                    s = PetXMLInfo.getName(n); (0 >= t || t > 0 && a === t) && ("" === this._currentSearchStr || "" !== this._currentSearchStr && (SearchUtil.isMatch(this._currentSearchStr, s) || n.toString() == this._currentSearchStr)) && this._petList.addItem(this._petIds[i])
                }
                this.imgEmpty.source = "select_show_mode_empty_tip_png",
                this.imgEmpty.visible = this._petList.length <= 0
            } else {
                this.petGroup.visible = !1,
                this.skinGroup.visible = !0,
                this._skinList.removeAll(),
                this.scr_skin.stopAnimation(),
                this.scr_skin.viewport.scrollV = 0;
                for (var i = 0; i < this._skinIds.length; i++) {
                    var n = 14e5 + this._skinIds[i],
                    r = PetSkinXMLInfo.getSkinInfo(this._skinIds[i]).name; ("" === this._currentSearchStr || "" !== this._currentSearchStr && SearchUtil.isMatch(this._currentSearchStr, r)) && this._skinList.addItem(n)
                }
                this.imgEmpty.source = "select_show_mode_empty_tip1_png",
                this.imgEmpty.visible = this._skinList.length <= 0
            }
        },
        i.prototype._onClose = function() {
            this.destroy()
        },
        i.prototype.checkTextName = function(e) {
            if (1 == e) {
                var t = PetManager.getPetInfo(PetManager.defaultTime);
                if (t) {
                    var i = t.id;
                    t.skinId > 0 && (i = PetSkinXMLInfo.getSkinInfo(t.skinId).skinPetId),
                    this._selectedPetId = i,
                    this.txtName.text = t.name
                } else this.txtName.text = "无"
            } else if (2 == e) {
                var n = "";
                if (this._petIds.indexOf(this._selectedPetId) > -1) n = PetXMLInfo.getName(this._selectedPetId);
                else {
                    var a = PetXMLInfo.getRealId(this._selectedPetId),
                    s = [],
                    r = PetSkinXMLInfo.getSkinInfo(a - 14e5);
                    r || (s = PetXMLInfo.dataList.filter(function(e) {
                        return~~e.RealId == a
                    })),
                    n = r ? r.name: s.length > 0 ? s[0].DefName: "无"
                }
                this.txtName.text = n
            } else {
                var o = MainManager.actorInfo.clothIDs,
                h = SuitXMLInfo.getSuitIDs(o);
                if (h.length > 0) {
                    var _ = h[0];
                    this.txtName.text = SuitXMLInfo.getName(_) || "无"
                } else this.txtName.text = "无"
            }
        },
        i.prototype.doSearch = function() {
            var e = this.txt_search.text.trim();
            this._currentSearchStr = e,
            this._onChangeCustom()
        },
        i.prototype.destroy = function() {
            var e = this;
            this.txt_search.removeEventListener(egret.Event.CHANGE, this.doSearch, this),
            this.customGroup.removeEventListener(egret.Event.CHANGE, this._onChangeCustom, this),
            this.groupMode.removeEventListener(egret.Event.CHANGE, this._onChangeMode, this),
            this.tl ? this.tl.reverse().then(function() {
                e.tl.clear(),
                t.prototype.destroy.call(e),
                EventManager.dispatchEventWith(i.EVENT_CLOSED_KanBan)
            }) : (t.prototype.destroy.call(this), EventManager.dispatchEventWith(i.EVENT_CLOSED_KanBan))
        },
        i.EVENT_SHOW_TEMP_MODE = "event_show_temp_mode",
        i.EVENT_CLOSED_KanBan = "event_closed_kanBan",
        i
    } (BaseModule);
    e.KanBanNiang = t,
    __reflect(t.prototype, "mainPanel.KanBanNiang")
} (mainPanel || (mainPanel = {}));
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
mainPanel; !
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.skinName = MainPanelPageSkin,
            t
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this)
        },
        t.prototype.setPageNum = function(e) {
            this.currentState = e + ""
        },
        t.prototype.setCurPage = function(e) {
            for (var t = 1; 5 > t; t++) this["page_" + t].visible = t == e
        },
        t.prototype.destroy = function() {
            this.removeChildren()
        },
        t
    } (eui.Component);
    e.MainPanelPage = t,
    __reflect(t.prototype, "mainPanel.MainPanelPage")
} (mainPanel || (mainPanel = {}));
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
mainPanel; !
function(e) {
    e.mainPanelPageActCenter_scroller_width = 0,
    e.mainPanelPageActCenter_scroller_length = 0;
    var t = function(t) {
        function i() {
            var e = t.call(this) || this;
            return e._curPage = 0,
            e.originState = {
                x: 0,
                y: 0,
                scale: 1,
                width: 292,
                height: 116,
                init: function(e) {
                    e.x = this.x,
                    e.y = this.y,
                    e.width = this.width,
                    e.height = this.height,
                    e.scaleX = e.scaleY = this.scale
                }
            },
            e.frontState = {
                x: -257,
                y: 18,
                scale: .88,
                width: 292,
                height: 116,
                init: function(e) {
                    e.x = this.x,
                    e.y = this.y,
                    e.width = this.width,
                    e.height = this.height,
                    e.scaleX = e.scaleY = this.scale
                }
            },
            e.behindState = {
                x: 292,
                y: -22,
                scale: 1.15,
                width: 292,
                height: 116,
                init: function(e) {
                    e.x = this.x,
                    e.y = this.y,
                    e.width = this.width,
                    e.height = this.height,
                    e.scaleX = e.scaleY = this.scale
                }
            },
            e.skinName = MainPanelPageActCenterSkin,
            e
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this)
        },
        i.prototype.initPage = function() {
            this.initFocusList(),
            this.focus_group.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onFocusTouchBegin, this)
        },
        i.prototype.initFocusList = function() {
            var t = this;
            if (!config.Main_banner.hasLoader) return void config.Main_banner.load(this.initFocusList, this);
            var i = SystemTimerManager.sysBJDate.getTime();
            this._focusData = config.Main_banner.getItems().filter(function(e) {
                var t = new Date(e.starttime.replace(/_/g, "/")).getTime(),
                n = new Date(e.finishtime.replace(/_/g, "/")).getTime();
                return e.isshow && i >= t && n >= i
            }).sort(function(e, t) {
                return e.sort - t.sort
            }),
            GameInfo.isChecking && (this._focusData = [config.Main_banner.getItem(1)]),
            e.mainPanelPageActCenter_scroller_width = this._scroller.width,
            e.mainPanelPageActCenter_scroller_length = this._focusData.length,
            this._listPro.itemRenderer = e.MainPanelPageActCenterProgress,
            this._listPro.dataProvider = new eui.ArrayCollection(this._focusData),
            this._curPage = 0;
            var n = null;
            n = this._focusData.length ? new e.MainPanelPageActCenterPage(this._focusData[this._curPage]) : new e.MainPanelPageActCenterPage(null),
            this.originState.init(n),
            this.focus_group.addChild(n),
            this._focusData.length > 1 && (egret.clearInterval(this._focusInterval), this._focusInterval = egret.setInterval(function() {
                t.moveItem(1)
            },
            this, 5e3))
        },
        i.prototype.onFocusTouchBegin = function(e) {
            this._startX = e.stageX,
            this.focus_group.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onFocusTouchMove, this),
            this.focus_group.addEventListener(egret.TouchEvent.TOUCH_END, this.onFocusTouchEnd, this),
            this.focus_group.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.onFocusTouchEnd, this),
            this.stage.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.onFocusTouchEnd, this)
        },
        i.prototype.onFocusTouchMove = function(e) {
            var t = e.stageX,
            i = t - this._startX;
            Math.abs(i) >= 20 && (this.onFocusTouchEnd(), i > 0 ? this.moveItem( - 1) : this.moveItem(1))
        },
        i.prototype.onFocusTouchEnd = function(e) {
            this.focus_group.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.onFocusTouchMove, this),
            this.focus_group.removeEventListener(egret.TouchEvent.TOUCH_END, this.onFocusTouchEnd, this),
            this.focus_group.removeEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.onFocusTouchEnd, this),
            this.stage.removeEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.onFocusTouchEnd, this)
        },
        i.prototype.moveItem = function(t) {
            var i = this;
            if (! (this._focusData.length < 2) && this._focusData && 1 == Math.abs(t)) {
                this._curPage += t,
                this._curPage >= this._focusData.length ? this._curPage = 0 : this._curPage < 0 && (this._curPage = this._focusData.length - 1);
                var n = this.focus_group.getChildAt(0);
                n.removeEventListener(egret.TouchEvent.TOUCH_TAP, arguments.callee, this);
                var a = new e.MainPanelPageActCenterPage(this._focusData[this._curPage]);
                this.focus_group.addChild(a),
                this.focus_group.touchEnabled = this.focus_group.touchChildren = !1,
                egret.clearInterval(this._focusInterval),
                t > 0 ? (this.behindState.init(a), egret.Tween.get(n).to({
                    x: this.frontState.x,
                    y: this.frontState.y,
                    scaleX: this.frontState.scale,
                    scaleY: this.frontState.scale
                },
                500, egret.Ease.quadInOut).call(function() {
                    i.focus_group.removeChild(n)
                }), egret.Tween.get(a).to({
                    x: this.originState.x,
                    y: this.originState.y,
                    scaleX: this.originState.scale,
                    scaleY: this.originState.scale
                },
                500, egret.Ease.quadInOut).call(function() {
                    i.focus_group.touchEnabled = i.focus_group.touchChildren = !0,
                    i.dispatch(),
                    i._focusInterval = egret.setInterval(function() {
                        i.moveItem(1)
                    },
                    i, 5e3)
                })) : (this.frontState.init(a), egret.Tween.get(n).to({
                    x: this.behindState.x,
                    y: this.behindState.y,
                    scaleX: this.behindState.scale,
                    scaleY: this.behindState.scale
                },
                500, egret.Ease.quadInOut).call(function() {
                    i.focus_group.removeChild(n)
                }), egret.Tween.get(a).to({
                    x: this.originState.x,
                    y: this.originState.y,
                    scaleX: this.originState.scale,
                    scaleY: this.originState.scale
                },
                500, egret.Ease.quadInOut).call(function() {
                    i.focus_group.touchEnabled = i.focus_group.touchChildren = !0,
                    i.dispatch(),
                    i._focusInterval = egret.setInterval(function() {
                        i.moveItem(1)
                    },
                    i, 5e3)
                }))
            }
        },
        i.prototype.dispatch = function() {
            EventManager.dispatchEventWith("MainPanelPageActCenterPage_update", !1, {
                ind: this._curPage
            })
        },
        i.prototype.destroy = function() {
            t.prototype.destroy.call(this),
            this.focus_group.removeChildren(),
            egret.clearInterval(this._focusInterval),
            this.focus_group.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onFocusTouchBegin, this)
        },
        i
    } (BaseModule);
    e.MainPanelPageActCenter = t,
    __reflect(t.prototype, "mainPanel.MainPanelPageActCenter")
} (mainPanel || (mainPanel = {}));
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
mainPanel; !
function(e) {
    var t = function(t) {
        function i() {
            var e = t.call(this) || this;
            return e.tl = null,
            e.skinName = NewkanpanSkin,
            e
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            var e = this;
            t.prototype.childrenCreated.call(this),
            this.initBtnClose("select_show_mode_btnclose_png", this,
            function() {
                e.closeMouldle()
            },
            this),
            this.initData()
        },
        i.prototype.closeMouldle = function() {
            var t = this;
            this._checkIsChange() ? Alert.show("展示发生了改变，是否保存当前展示？",
            function() {
                t.btnSave.touchEnabled = !1,
                core.controller.MainShowStyleCtrl.Instance.SaveMode(t._mode, t._selectedPetId).then(function() {
                    switch (BubblerManager.getInstance().showText("保存成功"), t._mode) {
                    case 1:
                        StatLogger.log("20221014版本系统功能", "看板人物自定义优化", "退出界面时保存展示为首发精灵或皮肤");
                        break;
                    case 2:
                        t._selectedPetId <= 5e3 ? StatLogger.log("20221014版本系统功能", "看板人物自定义优化", "退出界面时保存展示为自定义精灵") : StatLogger.log("20221014版本系统功能", "看板人物自定义优化", "退出界面时保存展示为自定义皮肤");
                        break;
                    case 3:
                        StatLogger.log("20221014版本系统功能", "看板人物自定义优化", "退出界面时保存展示为赛尔装扮");
                        break;
                    case 4:
                        t._sceneView.curShowID = t._selectedPetId,
                        SoundManager.loadSound().then(function() {
                            SoundManager.playMusic()
                        })
                    }
                    t.btnSave.touchEnabled = !0,
                    t._onClose()
                })
            },
            function() {
                if (t._sceneView.curShowID != t._sceneView.showID ? (t._mode = 4, t._selectedPetId = core.controller.MainShowStyleCtrl.Instance.GetBgId()) : (t._mode = core.controller.MainShowStyleCtrl.Instance.GetMode(), t._selectedPetId = core.controller.MainShowStyleCtrl.Instance.GetPetId()), 0 === t._mode) {
                    var i = PetManager.getPetInfo(PetManager.defaultTime);
                    if (i) {
                        var n = i.id;
                        i.skinId > 0 && (n = PetSkinXMLInfo.getSkinInfo(i.skinId).skinPetId),
                        t._selectedPetId = n,
                        t._mode = core.controller.MainShowStyleCtrl.MODE_FIRST_PET
                    } else t._selectedPetId = 0,
                    t._mode = core.controller.MainShowStyleCtrl.MODE_CLOTHES
                }
                EventManager.dispatchEventWith(e.KanBanNiang.EVENT_SHOW_TEMP_MODE, !1, {
                    mode: t._mode,
                    id: t._selectedPetId
                }),
                t._onClose()
            }) : this._onClose()
        },
        i.prototype.initData = function() {
            var t = this;
            this.btnAnim = SpineUtil.createAnimate("select_show_scene-640"),
            this.showGroup.addChild(this.btnAnim),
            this.btnAnim.touchChildren = this.btnAnim.touchEnabled = !1,
            this.btnAnim.visible = !1,
            this.rbgroup = this.rb1.group,
            this.rbgroup.selectedValue = 1;
            var i = core.controller.MainShowStyleCtrl.Instance.GetMode();
            0 === i && (i = core.controller.MainShowStyleCtrl.MODE_CLOTHES, EventManager.dispatchEventWith(e.KanBanNiang.EVENT_SHOW_TEMP_MODE, !1, {
                mode: i,
                id: 0
            })),
            this._mode = i,
            this.customGroup = this.tabPet.group,
            0 == PetManager.infos.length && 1 == this._mode ? (this._mode = 3, this._petView.visible = !1, this._seerView.visible = !0, this._selectedPetId = 0, this.customGroup.selectedValue = 2, Alarm.show("背包内没有首发精灵,已改为赛尔形象",
            function() {
                core.controller.MainShowStyleCtrl.Instance.SaveMode(t._mode, t._selectedPetId).then(function() {
                    t._petView.initData()
                })
            })) : (this._petView.visible = !0, this._seerView.visible = !1, this._selectedPetId = core.controller.MainShowStyleCtrl.Instance.GetPetId() || 0, this.customGroup.selectedValue = 1),
            this.rb1.img_icon.source = "newkanpan_btnzaoxingdown_png",
            this.rb1.img_icon.x = -17,
            this.rb1.img_icon.y = -9,
            this.addEvents(),
            this.animPlay(),
            this.checkTextName(null)
        },
        i.prototype.animPlay = function() {
            this.tl ? this.tl.restart() : (this.tl = new gsap.core.Timeline, this.tl.from(this.grp_rightInfo, {
                alpha: 0,
                right: -1e3,
                duration: .5
            },
            "<"), this.tl.from(this.grpBack, {
                alpha: 0,
                top: -100,
                duration: .3
            },
            "<"), this.tl.from(this.nameGroup, {
                alpha: 0,
                bottom: -100,
                duration: .3
            },
            "<"), this.tl.from(this.showGroup, {
                alpha: 0,
                left: -200,
                duration: .3
            },
            "<"))
        },
        i.prototype.addEvents = function() {
            var e = this;
            EventManager.addEventListener("onPetChaged", this.checkTextName, this),
            ImageButtonUtil.add(this.btnSave,
            function() {
                e._checkIsChange() && (e.btnSave.touchEnabled = !1, PetManager.isDefaultPet(e._selectedPetId) ? e.checkDefalut.selected = !0 : e.checkDefalut.selected = !1, core.controller.MainShowStyleCtrl.Instance.SaveMode(e._mode, e._selectedPetId).then(function() {
                    BubblerManager.getInstance().showText("保存成功"),
                    e.btnSave.touchEnabled = !0,
                    e._petView.updateData()
                }))
            },
            this),
            this.customGroup.addEventListener(egret.Event.CHANGE, this.onChangeView, this),
            this.rbgroup.addEventListener(egret.Event.CHANGE, this.onChangeType, this),
            EventManager.addEventListener("hideBG",
            function() {
                e.grpBack.visible = !1,
                e.showGroup.visible = !1,
                e.nameGroup.visible = !1
            },
            this),
            EventManager.addEventListener("showBG",
            function() {
                e.grpBack.visible = !0,
                e.showGroup.visible = !0,
                e.nameGroup.visible = !0
            },
            this)
        },
        i.prototype.onChangeType = function() {
            var t = this,
            i = this.rbgroup.selectedValue,
            n = 1 == i ? "change_a": "change_b";
            if (this["rb" + i].img_icon.visible = !1, this.btnAnim.visible = !0, this.btnAnim.x = 1 == i ? 69.5 : 63.5, this.btnAnim.y = 1 == i ? 62.5 : 135, this.rb1.touchEnabled = this.rb2.touchEnabled = !1, this.animRbSet(), this.rb1.img_icon.source = 1 == this.rbgroup.selectedValue ? "newkanpan_btnzaoxingdown_png": "newkanpan_btnzaoxingup_png", this.rb2.img_icon.source = 2 == this.rbgroup.selectedValue ? "newkanpan_btnbeijingdown_png": "newkanpan_btnbeijingup_png", this.btnAnim.play(n, 1, 0, {
                playEnd: function() {
                    t.btnAnim.visible = !1,
                    t.animRbSet(),
                    t.rb1.img_icon.visible = !0,
                    t.rb2.img_icon.visible = !0,
                    t.rb1.touchEnabled = t.rb2.touchEnabled = !0
                }
            }), this._sceneView.visible = 2 == this.rbgroup.selectedValue, this.grp_zaoxing.visible = 1 == this.rbgroup.selectedValue, this._checkIsChange()) {
                if (this._mode = core.controller.MainShowStyleCtrl.Instance.GetMode(), this._selectedPetId = core.controller.MainShowStyleCtrl.Instance.GetPetId(), 0 === this._mode) {
                    var a = PetManager.getPetInfo(PetManager.defaultTime);
                    if (a) {
                        var s = a.id;
                        a.skinId > 0 && (s = PetSkinXMLInfo.getSkinInfo(a.skinId).skinPetId),
                        this._selectedPetId = s,
                        this._mode = core.controller.MainShowStyleCtrl.MODE_FIRST_PET
                    } else this._selectedPetId = 0,
                    this._mode = core.controller.MainShowStyleCtrl.MODE_CLOTHES
                }
                this._petView.updateData(),
                EventManager.dispatchEventWith(e.KanBanNiang.EVENT_SHOW_TEMP_MODE, !1, {
                    mode: this._mode,
                    id: this._selectedPetId
                }),
                this.checkTextName(null)
            }
        },
        i.prototype.animRbSet = function() {
            this.rb1.img_icon.x = 1 == this.rbgroup.selectedValue ? -17 : 0,
            this.rb2.img_icon.x = 2 == this.rbgroup.selectedValue ? -17 : 0,
            this.rb1.img_icon.y = 1 == this.rbgroup.selectedValue ? -9 : 0,
            this.rb2.img_icon.y = 2 == this.rbgroup.selectedValue ? -9 : 0
        },
        i.prototype.onChangeView = function() {
            this._petView.visible = 1 == this.customGroup.selectedValue,
            this._seerView.visible = 2 == this.customGroup.selectedValue
        },
        i.prototype.checkTextName = function(e) {
            var t;
            if (null != e) {
                var i = e.data;
                t = i.mode,
                this._mode = i.mode,
                this._selectedPetId = i.id
            } else t = this._mode;
            if (1 == t) {
                var n = PetManager.getPetInfo(PetManager.defaultTime);
                if (n) {
                    var a = n.id;
                    n.skinId > 0 && (a = PetSkinXMLInfo.getSkinInfo(n.skinId).skinPetId),
                    this._selectedPetId = a,
                    this.txtName.text = n.name
                } else this.txtName.text = "无"
            } else if (2 == t) {
                var s = "";
                if (this._selectedPetId < 6e3) s = PetXMLInfo.getName(this._selectedPetId);
                else {
                    var r = PetXMLInfo.getRealId(this._selectedPetId),
                    o = [],
                    h = PetSkinXMLInfo.getSkinInfo(r - 14e5);
                    h || (o = PetXMLInfo.dataList.filter(function(e) {
                        return~~e.RealId == r
                    })),
                    s = h ? h.name: o.length > 0 ? o[o.length - 1].DefName: "无"
                }
                this.txtName.text = s
            } else if (3 == t) {
                var _ = MainManager.actorInfo.clothIDs,
                u = SuitXMLInfo.getSuitIDs(_);
                if (u.length > 0) {
                    var l = u[0];
                    this.txtName.text = SuitXMLInfo.getName(l) || "无"
                } else this.txtName.text = "无"
            }
        },
        i.prototype._checkIsChange = function() {
            var e = this._mode,
            t = this._selectedPetId,
            i = (PetXMLInfo.getRealId(core.controller.MainShowStyleCtrl.Instance.GetPetId()), core.controller.MainShowStyleCtrl.Instance.GetMode());
            return i != e && 4 != e ? !0 : e === core.controller.MainShowStyleCtrl.MODE_CUSTOM_PET && 0 !== t && t !== core.controller.MainShowStyleCtrl.Instance.GetPetId() ? !0 : this._sceneView.curShowID != this._sceneView.showID && 0 != this._sceneView.showID && this._sceneView.canShow ? !0 : !1
        },
        i.prototype._onClose = function() {
            this.destroy()
        },
        i.prototype.destroy = function() {
            var i = this;
            this._sceneView.destroy(),
            this._seerView.destroy(),
            this.customGroup.removeEventListener(egret.Event.CHANGE, this.onChangeView, this),
            this.tl ? this.tl.reverse().then(function() {
                i.tl.clear(),
                t.prototype.destroy.call(i),
                EventManager.dispatchEventWith(e.KanBanNiang.EVENT_CLOSED_KanBan)
            }) : (t.prototype.destroy.call(this), EventManager.dispatchEventWith(e.KanBanNiang.EVENT_CLOSED_KanBan))
        },
        i.EVENT_SHOW_TEMP_MODE = "event_show_temp_mode",
        i.EVENT_CLOSED_KanBan = "event_closed_kanBan",
        i
    } (BaseModule);
    e.NewKanBan = t,
    __reflect(t.prototype, "mainPanel.NewKanBan")
} (mainPanel || (mainPanel = {}));
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
mainPanel; !
function(e) {
    var t = function() {
        function e() {}
        return e.EVENT_TOUCHTAP_CLOTH_ITEM = "event_touchtap_cloth_item",
        e
    } ();
    e.EventKeys = t,
    __reflect(t.prototype, "mainPanel.EventKeys");
    var i = function(e) {
        function i() {
            return null !== e && e.apply(this, arguments) || this
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.initEvents()
        },
        i.prototype.initEvents = function() {
            this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this),
            this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchItemHandler, this)
        },
        i.prototype.removeEvents = function() {
            this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this),
            this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchItemHandler, this)
        },
        i.prototype.setEquipData = function(e) {
            this._equipVo = e,
            this.updateView()
        },
        i.prototype.updateView = function() {
            var e = this._equipVo;
            this.txt_pos_name.text = e.typeName,
            this.icon_equip.visible = e.equipId > 0,
            e.equipId > 0 ? (this.txt_clothName.text = StringUtil.parseStrLimitLen(e.clothData.name, 6), this.icon_equip.source = ItemXMLInfo.getIconURL(e.equipId)) : this.txt_clothName.text = "无",
            this.txt_clothName.size = this.txt_clothName.text.length > 6 ? 16 : 20
        },
        i.prototype.onTouchItemHandler = function(e) {
            this.dispatchEventWith(t.EVENT_TOUCHTAP_CLOTH_ITEM, !1, this._equipVo)
        },
        i.prototype.getEquipData = function() {
            return this._equipVo
        },
        i.prototype.destroy = function() {
            e.prototype.destroy.call(this),
            this.removeEvents()
        },
        i
    } (BaseModule);
    e.PlayerInfoEquipItem = i,
    __reflect(i.prototype, "mainPanel.PlayerInfoEquipItem")
} (mainPanel || (mainPanel = {}));
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
mainPanel; !
function(e) {
    var t = function(e) {
        function t() {
            return e.call(this) || this
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.width = 367,
            this.height = 165
        },
        t.prototype.dataChanged = function() {
            if (e.prototype.dataChanged.call(this), 1 == this.data) {
                this.removeChildren();
                var t = new eui.Image("main_panel_btnNewAct_png");
                t.width = 367,
                t.height = 165,
                t.verticalCenter = 0,
                this.addChild(t)
            } else {
                this.removeChildren();
                var t = new eui.Image("main_panel_btnMainTask_png");
                t.width = 367,
                t.height = 165,
                t.verticalCenter = 0,
                this.addChild(t)
            }
        },
        t.prototype.destroy = function() {
            this.removeChildren()
        },
        t
    } (eui.ItemRenderer);
    e.FocusListItem = t,
    __reflect(t.prototype, "mainPanel.FocusListItem")
} (mainPanel || (mainPanel = {}));
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
mainPanel; !
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t._lastShowTm = 0,
            t.skinName = "mainPanel.CompPetBubbleSkin",
            t
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            var e = this;
            this.touchEnabled = !1,
            this.visible = !1,
            this.initEvents(),
            config.Signboard.hasLoader ? this.init() : config.Signboard.load(this.init, this),
            egret.setTimeout(function() {
                e.onceShow = !0
            },
            null, 2e3)
        },
        t.prototype.init = function() {
            var e = core.controller.MainShowStyleCtrl.Instance.GetMode(),
            t = core.controller.MainShowStyleCtrl.Instance.GetPetId();
            if (e == core.controller.MainShowStyleCtrl.MODE_FIRST_PET) {
                var i = PetManager.getPetInfo(PetManager.defaultTime);
                if (i) {
                    var n = i.id;
                    i.skinId > 0 && (n = PetXMLInfo.getRealId(14e5 + i.skinId)),
                    t = n
                } else e = core.controller.MainShowStyleCtrl.MODE_CLOTHES
            }
            this.setPetData(e, t),
            this.onStartInterVal(),
            this._isInitFlag = !0
        },
        t.prototype.initEvents = function() {
            core.controller.MainShowStyleCtrl.Instance.addEventListener(core.controller.MainShowStyleCtrl.EVENT_CHANGE_MODE, this.onChangeModeHandler, this),
            PetManager.addEventListener(PetEvent.EQUIP_SKIN, this.onChangeDefaultPetSkin, this)
        },
        t.prototype.removeEvents = function() {
            core.controller.MainShowStyleCtrl.Instance.removeEventListener(core.controller.MainShowStyleCtrl.EVENT_CHANGE_MODE, this.onChangeModeHandler, this),
            PetManager.removeEventListener(PetEvent.EQUIP_SKIN, this.onChangeDefaultPetSkin, this)
        },
        t.prototype.onChangeDefaultPetSkin = function(e) {
            if (this._isInitFlag) {
                var t = core.controller.MainShowStyleCtrl.Instance.GetMode();
                if (t === core.controller.MainShowStyleCtrl.MODE_FIRST_PET) {
                    var i = PetManager.getPetInfo(e.catchTime()),
                    n = 0;
                    i && (n = i.id, i.skinId > 0 && (n = PetSkinXMLInfo.getSkinInfo(i.skinId).skinPetId)),
                    this.setPetData(t, n)
                }
            }
        },
        t.prototype.onChangeModeHandler = function(e) {
            if (this._isInitFlag) {
                var t = e.data && e.data.mode,
                i = e.data && parseInt(e.data.petid);
                this.setPetData(t, i)
            }
        },
        t.prototype.setPetData = function(e, t) {
            e !== core.controller.MainShowStyleCtrl.MODE_CLOTHES && t !== this._currentPetId && (this._currentPetId = t, this._bubbleArray = config.Signboard.getItems().filter(function(e) {
                return e.monid === t
            }), this._lastShowTm = 0)
        },
        t.prototype.setLock = function() {
            this._lockFlag = !0,
            egret.Tween.removeTweens(this),
            this.visible = !1,
            this._isShowFlag = !1,
            this._lastShowTm = 0,
            this.cdChangeOnceShow = !1
        },
        t.prototype.setUnLock = function() {
            var e = this;
            this._lockFlag = !1,
            this.cdChangeOnceShow || (this.onceShow = !0, this.cdChangeOnceShow = !0, egret.setTimeout(function() {
                e.cdChangeOnceShow = !1
            },
            null, 6e3))
        },
        t.prototype.onStartInterVal = function() {
            this._setInterValFlag = egret.setInterval(this.onTime, this, 1e3)
        },
        t.prototype.onClick = function() {
            var e = Date.now() - (this.lastClickTime || 0);
            if (e > 300) if (this.lastClickTime = Date.now(), this._isShowFlag) {
                this.timeout && egret.clearTimeout(this.timeout),
                this.timeout = egret.setTimeout(this.hideBubble, this, 5e3);
                var t, i, n = Math.floor(SystemTimerManager.sysBJDate.getTime() / 1e3),
                a = this._bubbleArray.filter(function(e) {
                    var t, i = "" === e.month ? [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] : e.month.split("_").map(function(e) {
                        return parseInt(e)
                    }),
                    a = SystemTimerManager.sysBJDate.getMonth() + 1,
                    s = i.indexOf(a) > -1;
                    if ("" === e.starttime && "" === e.endtime) t = !0;
                    else {
                        var r = SystemTimerManager.getTimeByDate(SystemTimerManager.sysBJDate.getFullYear(), SystemTimerManager.sysBJDate.getMonth() + 1, SystemTimerManager.sysBJDate.getDate(), +e.starttime.split(":")[0], +e.starttime.split(":")[1]),
                        o = SystemTimerManager.getTimeByDate(SystemTimerManager.sysBJDate.getFullYear(), SystemTimerManager.sysBJDate.getMonth() + 1, SystemTimerManager.sysBJDate.getDate(), +e.endtime.split(":")[0], +e.endtime.split(":")[1]);
                        t = n > r && o > n
                    }
                    return s && t
                }),
                s = function() {
                    t = MathUtil.RandomRoundInt(0, a.length, !1),
                    i = a[t]
                };
                for (s(); a.length > 1 && i.content == this.txtContent.text;) s();
                this.setContext(i.content)
            } else this.onceShow = !0,
            this.onTime(!0)
        },
        t.prototype.onTime = function(e) {
            if (void 0 === e && (e = !1), !(core.controller.MainShowStyleCtrl.Instance.GetMode() === core.controller.MainShowStyleCtrl.MODE_CLOTHES || this._lockFlag || this._isShowFlag && !e) && this._bubbleArray && 0 !== this._bubbleArray.length) {
                var t = Math.floor(SystemTimerManager.sysBJDate.getTime() / 1e3),
                i = this._bubbleArray[0].interval;
                if (0 === this._lastShowTm && (this._lastShowTm = t), t - this._lastShowTm >= i || this.onceShow) {
                    var n = this._bubbleArray.filter(function(e) {
                        var i, n = "" === e.month ? [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] : e.month.split("_").map(function(e) {
                            return parseInt(e)
                        }),
                        a = SystemTimerManager.sysBJDate.getMonth() + 1,
                        s = n.indexOf(a) > -1;
                        if ("" === e.starttime && "" === e.endtime) i = !0;
                        else {
                            var r = SystemTimerManager.getTimeByDate(SystemTimerManager.sysBJDate.getFullYear(), SystemTimerManager.sysBJDate.getMonth() + 1, SystemTimerManager.sysBJDate.getDate(), +e.starttime.split(":")[0], +e.starttime.split(":")[1]),
                            o = SystemTimerManager.getTimeByDate(SystemTimerManager.sysBJDate.getFullYear(), SystemTimerManager.sysBJDate.getMonth() + 1, SystemTimerManager.sysBJDate.getDate(), +e.endtime.split(":")[0], +e.endtime.split(":")[1]);
                            i = t > r && o > t
                        }
                        return s && i
                    });
                    n.length > 0 ? this._onShowBubble(n, e) : this._lastShowTm = t
                }
            }
        },
        t.prototype._onShowBubble = function(e, t) {
            var i, n, a = this,
            s = function() {
                i = MathUtil.RandomRoundInt(0, e.length, !1),
                n = e[i]
            };
            for (s(); t && e.length > 1 && n.content == this.txtContent.text;) s();
            this.setContext(n.content),
            this.alpha = 0,
            this.visible = !0,
            this._isShowFlag = !0,
            this.x = n.x,
            this.y = n.y,
            this.timeout && egret.clearTimeout(this.timeout),
            egret.Tween.get(this).to({
                alpha: 1
            },
            300, egret.Ease.quadOut).call(function() {
                a.timeout = egret.setTimeout(a.hideBubble, a, 4700)
            },
            this)
        },
        t.prototype.hideBubble = function() {
            var e = this;
            egret.Tween.get(this).to({
                alpha: 0
            },
            300, egret.Ease.quintIn).call(function() {
                e.visible = !1,
                e.onceShow = !1,
                e._isShowFlag = !1,
                e._lastShowTm = Math.floor(SystemTimerManager.sysBJDate.getTime() / 1e3)
            },
            this)
        },
        t.prototype.removeInterVal = function() {
            egret.clearInterval(this._setInterValFlag)
        },
        t.prototype.showBubble = function(e, t, i) {
            var n = this;
            if (!IS_RELEASE) {
                this.x = e,
                this.y = t,
                i && this.setContext(i),
                this.visible = !0;
                var a = egret.setTimeout(function() {
                    n.visible = !1,
                    egret.clearTimeout(a)
                },
                this, 5e3)
            }
        },
        t.prototype.setContext = function(e) {
            this.txtContent.text = e,
            this.bg.height = this.txtContent.height + 20
        },
        t.prototype.destroy = function() {
            egret.Tween.removeTweens(this),
            this.removeInterVal(),
            this.removeEvents(),
            e.prototype.destroy.call(this)
        },
        t
    } (BaseModule);
    e.CompPetBubble = t,
    __reflect(t.prototype, "mainPanel.CompPetBubble")
} (mainPanel || (mainPanel = {}));
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
mainPanel; !
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.skinName = KanBanNiangSceneSKin,
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
                this.selctedFlag.visible = e,
                egret.superSetter(t, this, "selected", e)
            },
            enumerable: !0,
            configurable: !0
        }),
        t.prototype.dataChanged = function() {
            this.info = this.data.info,
            this.senceBg.source = ClientConfig.getMainBgCard("bgCard" + this.info.icon),
            this.grp_lock.visible = !core.AvatarDataMgr.GetInstance().GetSceneLockStateById(this.info.id),
            this.txt_desc.text = this.info.desc,
            this.curEq.visible = this.info.id == this.data.curID,
            this.scentName.text = this.info.name.split("_")[0]
        },
        t
    } (BaseItemRenderer);
    e.KanBanNiangSceneRender = t,
    __reflect(t.prototype, "mainPanel.KanBanNiangSceneRender")
} (mainPanel || (mainPanel = {}));
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
mainPanel; !
function(e) {
    var t = function(t) {
        function i() {
            var e = t.call(this) || this;
            return e.skinName = KanBanNiangPetSKinSkin,
            e
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this)
        },
        Object.defineProperty(i.prototype, "selected", {
            get: function() {
                return egret.superGetter(e.KanBanNiangHeadRender, this, "selected")
            },
            set: function(t) {
                this.selctedFlag.visible = t,
                egret.superSetter(e.KanBanNiangHeadRender, this, "selected", t)
            },
            enumerable: !0,
            configurable: !0
        }),
        i.prototype.dataChanged = function() {
            var e = this.data;
            this.icon.source = ClientConfig.getPetHalfIcon(e);
            var t = PetSkinXMLInfo.getSkinInfo(e - 14e5);
            if (null == t) console.log(e);
            else {
                var i = t.name;
                this.txtName.text = i
            }
            this.cacheAsBitmap = !0,
            this.tag.visible = core.controller.MainShowStyleCtrl.Instance.GetPetId() == e && 1 != core.controller.MainShowStyleCtrl.Instance.GetMode()
        },
        i
    } (BaseItemRenderer);
    e.KanBanNiangSkinRender = t,
    __reflect(t.prototype, "mainPanel.KanBanNiangSkinRender")
} (mainPanel || (mainPanel = {}));
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
mainPanel; !
function(e) {
    var t = function(e) {
        function t(t) {
            var i = e.call(this) || this;
            return i.data = t,
            i.skinName = MainPanelPageActCenterPageSkin,
            i
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            var t = this;
            e.prototype.childrenCreated.call(this),
            this.data ? ImageButtonUtil.add(this.imgAct,
            function() {
                if (t.data.dest) {
                    if ("" != t.data.statLog) {
                        var e = t.data.statLog.split(",");
                        e.length > 1 && StatLogger.log(e[0], e[1], e[2])
                    }
                    var i = KTool.evalPram(t.data.param || "{}");
                    "战队Boss" != t.data.name || MainManager.actorInfo.teamInfo && 0 != MainManager.actorInfo.teamInfo.id ? ModuleManager.showModuleByID(t.data.dest, i) : Alarm.show("需要先加入一个战队才能参与本活动！",
                    function() {
                        ModuleManager.showModuleByID(73)
                    })
                } else Alarm.show("敬请期待最新活动！")
            },
            this) : ImageButtonUtil.add(this.imgAct,
            function() {
                Alarm.show("敬请期待最新活动！")
            },
            this),
            this.data ? (this.imgAct.source = ClientConfig.getMainBanner(this.data.image), this.day = this.data.finishtime) : (this.imgAct.source = ClientConfig.getMainBanner("null"), this.imgLast.visible = !1)
        },
        Object.defineProperty(t.prototype, "day", {
            set: function(e) {
                var t = SystemTimerManager.sysBJDate.getTime(),
                i = new Date(e.replace(/_/g, "/")).getTime(),
                n = (i - t) / 1e3,
                a = n / 86400;
                this.imgLast.visible = !1,
                this.data.showTag && (1 > a ? (this.imgLast.visible = !0, this.imgLast.source = "main_panel_page_act_center_imglastday_png") : 7 > a && (this.imgLast.visible = !0, this.imgLast.source = "main_panel_page_act_center_imglastweek_png"))
            },
            enumerable: !0,
            configurable: !0
        }),
        t.prototype.destroy = function() {
            e.prototype.destroy.call(this)
        },
        t
    } (BaseItemRenderer);
    e.MainPanelPageActCenterPage = t,
    __reflect(t.prototype, "mainPanel.MainPanelPageActCenterPage");
    var i = function(t) {
        function i() {
            var i = t.call(this) || this;
            return i.skinName = MainPanelPageActCenterProgressSkin,
            i.width = (e.mainPanelPageActCenter_scroller_width - 2 * e.mainPanelPageActCenter_scroller_length) / e.mainPanelPageActCenter_scroller_length,
            i
        }
        return __extends(i, t),
        i.prototype.dataChanged = function() {
            var e = this;
            t.prototype.dataChanged.call(this),
            EventManager.addEventListener("MainPanelPageActCenterPage_update",
            function(t) {
                var i = ~~t.data.ind;
                e.progress.visible = e.itemIndex == i
            },
            this),
            0 == this.itemIndex && (this.progress.visible = !0)
        },
        i
    } (BaseItemRenderer);
    e.MainPanelPageActCenterProgress = i,
    __reflect(i.prototype, "mainPanel.MainPanelPageActCenterProgress")
} (mainPanel || (mainPanel = {}));
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
    return new(i || (i = Promise))(function(a, s) {
        function r(e) {
            try {
                h(n.next(e))
            } catch(t) {
                s(t)
            }
        }
        function o(e) {
            try {
                h(n["throw"](e))
            } catch(t) {
                s(t)
            }
        }
        function h(e) {
            e.done ? a(e.value) : new i(function(t) {
                t(e.value)
            }).then(r, o)
        }
        h((n = n.apply(e, t || [])).next())
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
        for (; h;) try {
            if (a = 1, s && (r = s[2 & i[0] ? "return": i[0] ? "throw": "next"]) && !(r = r.call(s, i[1])).done) return r;
            switch (s = 0, r && (i = [0, r.value]), i[0]) {
            case 0:
            case 1:
                r = i;
                break;
            case 4:
                return h.label++,
                {
                    value: i[1],
                    done: !1
                };
            case 5:
                h.label++,
                s = i[1],
                i = [0];
                continue;
            case 7:
                i = h.ops.pop(),
                h.trys.pop();
                continue;
            default:
                if (r = h.trys, !(r = r.length > 0 && r[r.length - 1]) && (6 === i[0] || 2 === i[0])) {
                    h = 0;
                    continue
                }
                if (3 === i[0] && (!r || i[1] > r[0] && i[1] < r[3])) {
                    h.label = i[1];
                    break
                }
                if (6 === i[0] && h.label < r[1]) {
                    h.label = r[1],
                    r = i;
                    break
                }
                if (r && h.label < r[2]) {
                    h.label = r[2],
                    h.ops.push(i);
                    break
                }
                r[2] && h.ops.pop(),
                h.trys.pop();
                continue
            }
            i = t.call(e, h)
        } catch(n) {
            i = [6, n],
            s = 0
        } finally {
            a = r = 0
        }
        if (5 & i[0]) throw i[1];
        return {
            value: i[0] ? i[1] : void 0,
            done: !0
        }
    }
    var a, s, r, o, h = {
        label: 0,
        sent: function() {
            if (1 & r[0]) throw r[1];
            return r[1]
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
mainPanel; !
function(e) {
    var t = function(t) {
        function i() {
            var e = t.call(this) || this;
            return e._isFirstLoaderPetFlag = !1,
            e._canPlayAniFlag = !1,
            e.curShowSceneId = 0,
            e.currPetId = 0,
            e.skinName = "MainSkin",
            e
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            this.width = LevelManager.stage.stageWidth,
            this.height = LevelManager.stage.stageHeight,
            t.prototype.childrenCreated.call(this),
            egret.Capabilities.isMobile && (this.group_right.right = DeviceInfoManager.adapterOffSetX),
            this.addEvent(),
            this.btnMainTask.source = "resource/assets/mainLine/mainPanel.png",
            GameInfo.isChecking && (this.btnMainTask.source = "resource/assets/mainLine/mainPanel_ios_examine.png"),
            this.pageActCenter.initPage(),
            this.group_right.visible = !1,
            this.group_kanBanNiang.visible = !1,
            this.Group_KanBan.touchEnabled = !1,
            this.group_bg.anchorOffsetX = .5 * this.group_bg.width,
            this.group_bg.anchorOffsetY = .5 * this.group_bg.height,
            this.group_bg.x = .5 * egret.lifecycle.stage.stageWidth,
            this.group_bg.y = .5 * egret.lifecycle.stage.stageHeight,
            this.group_bg.scaleX = this.group_bg.scaleY = .835,
            this._createAni(),
            this.showPetAnimate(),
            this.updateRightRedDot(),
            PetManager.getLovePetList(),
            PetStorage2015InfoManager.getTotalInfo(function() {})
        },
        i.prototype.getBgAnim = function(e) {
            return __awaiter(this, void 0, void 0,
            function() {
                var t, i, n;
                return __generator(this,
                function(a) {
                    switch (a.label) {
                    case 0:
                        return this.group_ani.removeChildren(),
                        this.group_ani.visible = !1,
                        e = e || 43,
                        core.AvatarDataMgr.GetInstance().GetSceneLockStateById(e) || (e = 32),
                        this.curShowSceneId = e,
                        t = config.Profilephoto.getItem(e),
                        i = t.name.split("_")[1],
                        n = this,
                        [4, SpineUtil.createAnimateByPromise("resource/assets/mainIcon/background/", i)];
                    case 1:
                        return n._ani = a.sent(),
                        this._ani.play("animation", 0),
                        this.group_ani.addChild(this._ani),
                        this.group_ani.visible = !0,
                        [2]
                    }
                })
            })
        },
        i.prototype._createAni = function() {
            this.getBgAnim(core.controller.MainShowStyleCtrl.Instance.GetBgId()),
            this._btnAni_pet = SpineUtil.createAnimate("jingling"),
            this._btnAni_level = DragonbonesUtil.createAnimate("fuben_ske_json", "fuben_tex_json", "fuben_tex_png", "fuben"),
            this._btnAni_peak = DragonbonesUtil.createAnimate("dianfeng_ske_json", "dianfeng_tex_json", "dianfeng_tex_png", "dianfeng"),
            this.btnLevel_icon.addChild(this._btnAni_level),
            this.btnPet_icon.addChild(this._btnAni_pet),
            this.btnPeak_icon.addChild(this._btnAni_peak),
            this._btnAni_peak.animation.play("ianfengshengzhan", 0),
            this._btnAni_pet.play("jinglingguanka"),
            this._btnAni_level.animation.play("fubentiaozhan", 0),
            this.pet.touchEnabled = !1
        },
        i.prototype._onFirstOpenAni = function(e) {
            var t = this;
            if (this._canPlayAniFlag = !0, this._firstAniTm = e.data, this._isFirstLoaderPetFlag) {
                LoadingManager.setProgress(100),
                LoadingManager.hideProgressBar(),
                this.group_right.visible = !1,
                this.grp_petBase.visible = !1,
                this.group_bg.anchorOffsetX = .5 * this.group_bg.width,
                this.group_bg.anchorOffsetY = .5 * this.group_bg.height,
                this.group_bg.x = .5 * egret.lifecycle.stage.stageWidth,
                this.group_bg.y = .5 * egret.lifecycle.stage.stageHeight,
                this.group_bg.scaleX = this.group_bg.scaleY = .835,
                ToolBarManager.HideToolBar(),
                ChatManager.getInstance().hideChat(!1);
                var i = function(e) {
                    return function(t) {
                        return 1 - Math.pow(1 - t, e)
                    }
                };
                egret.Tween.get(this.group_bg).to({
                    scaleX: 1,
                    scaleY: 1
                },
                1750, i(2.5)).call(function() {
                    t.group_bg.horizontalCenter = 0,
                    t.group_bg.verticalCenter = 0
                }),
                egret.setTimeout(function() {
                    var i = new egret.Event(GameEvent.FIRST_SHOW_MAIN_PANEL),
                    n = 300;
                    i.data = n,
                    EventManager.dispatchEvent(i),
                    t.showFirstOpenEff(e.data).then(function() {
                        t._ani && (t.group_ani.visible = !0, t._ani.play("animation", 0))
                    })
                },
                this, 1250)
            }
        },
        i.prototype.updateRightRedDot = function() {
            this.flag_up.visible = !1,
            this.imgMallRedDot.visible = !1
        },
        i.prototype.show = function() {
            this.visible || (t.prototype.show.call(this), this._ani.play("animation", 0), this.showPetAnimate(), this.compBubble.setUnLock(), this.updateRightRedDot())
        },
        i.prototype.hide = function() {
            this.visible !== !1 && (this.compBubble.setLock(), t.prototype.hide.call(this), this._ani && this._ani.stop(0), CjsUtil.stop(), CjsUtil.removeAllAni(), this.currPetId = 0, this.pet.removeChildren())
        },
        i.prototype.reShow = function() {
            CjsUtil.resume(),
            this.show()
        },
        i.prototype.showPetAnimate = function() {
            var e = this,
            t = core.controller.MainShowStyleCtrl.Instance.GetMode();
            if (t === core.controller.MainShowStyleCtrl.MODE_CLOTHES) {
                this.pet.removeChildren(),
                this.currPetId = 0;
                var i = new ClothPreview;
                i.show(MainManager.actorInfo.clothes),
                i.scaleX = i.scaleY = 1,
                i.y = 140,
                i.x = -10,
                this.pet.addChild(i),
                this._setFirstLoadedPetFlag()
            } else if (t === core.controller.MainShowStyleCtrl.MODE_CUSTOM_PET) {
                var n = core.controller.MainShowStyleCtrl.Instance.GetPetId();
                this.pet.removeChildren(),
                CjsUtil.disposePetCls(this.currPetId),
                this.currPetId = n;
                var a = 6e3 >= n ? n: PetXMLInfo.getRealId(n);
                CjsUtil.init(),
                CjsUtil.setContainer(this.pet),
                CjsUtil.GetShowPetMovieClip(a).then(function(t) {
                    CjsUtil.showAnimate(t);
                    var i = PetXMLInfo.getPetOffset(a);
                    t && (t.regX = i.x, t.regY = i.y),
                    e._setFirstLoadedPetFlag()
                })
            } else {
                var s = PetManager.getPetInfo(PetManager.defaultTime);
                if (this.pet.removeChildren(), CjsUtil.setContainer(this.pet), s) {
                    CjsUtil.disposePetCls(this.currPetId),
                    this.currPetId = s.id,
                    CjsUtil.init(),
                    CjsUtil.setContainer(this.pet);
                    var r = s.id;
                    s.skinId > 0 && (r = PetSkinXMLInfo.getSkinInfo(s.skinId).skinPetId),
                    this.currPetId = r,
                    CjsUtil.GetShowPetMovieClip(r).then(function(t) {
                        CjsUtil.showAnimate(t);
                        var i = PetXMLInfo.getPetOffset(r);
                        t && (t.regX = i.x, t.regY = i.y),
                        e._setFirstLoadedPetFlag()
                    })
                } else {
                    this.currPetId = 0;
                    var i = new ClothPreview;
                    i.show(MainManager.actorInfo.clothes),
                    i.scaleX = i.scaleY = 1,
                    i.y = 140,
                    i.x = -10,
                    this.pet.addChild(i),
                    this._setFirstLoadedPetFlag()
                }
            }
        },
        i.prototype._setFirstLoadedPetFlag = function() {
            this._isFirstLoaderPetFlag || (this._isFirstLoaderPetFlag = !0, this._canPlayAniFlag && this._onFirstOpenAni({
                data: this._firstAniTm
            }))
        },
        i.prototype.addEvent = function() {
            var e = this;
            EventManager.addEventListener("event_first_open_main_panel", this._onFirstOpenAni, this),
            ImageButtonUtil.add(this.btnPeak,
            function() {
                StatLogger.log("20210930版本系统功能", "主界面优化", "点击【巅峰圣战】按钮"),
                StatLogger.log("1023版本系统功能", "主界面", "进入【巅峰圣战】对应界面"),
                PeakJihad2016Controller.getIsTimeOutNum(function() {
                    ModuleManager.showModule("peakJihadFirstPage", ["peakJihadFirstPage"])
                })
            },
            this),
            ImageButtonUtil.add(this.gotoBtn,
            function() {
                core.gameUtil.OpenUrl("https://seerm.61.com/")
            },
            this),
            ImageButtonUtil.add(this.btnPet,
            function() {
                StatLogger.log("20210930版本系统功能", "主界面优化", "点击【精灵关卡】按钮"),
                ModuleManager.showModuleByID(124)
            },
            this),
            ImageButtonUtil.add(this.btnLevel,
            function() {
                StatLogger.log("20210930版本系统功能", "主界面优化", "点击【副本挑战】按钮"),
                ModuleManager.showModuleByID(18)
            },
            this),
            ImageButtonUtil.add(this.btnShop,
            function() {
                StatLogger.log("20210930版本系统功能", "主界面优化", "点击【商城】按钮"),
                PayManager.canPay() ? ModuleManager.showModule("mall", ["mall"]) : Alarm.show("暂未开放，敬请期待！")
            },
            this),
            ImageButtonUtil.add(this.btnLookBanNiang,
            function() {
                e._showLookBanNiang()
            },
            this),
            ImageButtonUtil.add(this.btnRefresh,
            function() {
                StatLogger.log("20210930版本系统功能", "主界面优化", "点击【切换看板】按钮"),
                e._showLookBanNiang(),
                e.rectPet.touchEnabled = e.btnRefresh.touchEnabled = !1,
                egret.setTimeout(function() {
                    e.rectPet.touchEnabled = e.btnRefresh.touchEnabled = !0
                },
                e, 1e3)
            },
            this),
            ImageButtonUtil.add(this.btnMainTask,
            function() {
                StatLogger.log("20210930版本系统功能", "主界面优化", "点击【主线任务】按钮"),
                ModuleManager.showModuleByID(108)
            },
            this),
            ImageButtonUtil.add(this.btnToken,
            function() {
                StatLogger.log("20210930版本系统功能", "主界面优化", "点击【刻印之轮】按钮"),
                HotRedManager.getInstance().clickIcon(29),
                ModuleManager.showModuleByID(148)
            },
            this),
            ImageButtonUtil.add(this.btnRecruit,
            function() {
                StatLogger.log("20210930版本系统功能", "主界面优化", "点击【精灵招募】按钮"),
                ModuleManager.showModuleByID(144)
            },
            this),
            this.Group_KanBan.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this._onTouchBegin, this),
            EventManager.addEventListener(GuideEvent.GET_BUTTON_CENTER,
            function(t) {
                var i = t.data,
                n = e[i.btnName];
                if (n) {
                    var a = n.localToGlobal(n.width / 2, n.height / 2);
                    i.center.x = a.x,
                    i.center.y = a.y,
                    t.preventDefault()
                }
            },
            this);
            var t;
            ImageButtonUtil.add(this.rectPet,
            function() {
                e.compBubble.onClick(),
                e.btnRefresh.visible = !0,
                egret.Tween.get(e.btnRefresh).to({
                    alpha: 1
                },
                300, egret.Ease.quadOut),
                t && egret.clearTimeout(t),
                t = egret.setTimeout(function() {
                    egret.Tween.get(e.btnRefresh).to({
                        alpha: 0
                    },
                    300, egret.Ease.quintIn).call(function() {
                        e.btnRefresh.visible = !1
                    })
                },
                e, 5e3)
            },
            this, !1, !1),
            EventManager.addEventListener("changeMainPanelBg", this.changeManPanelBg, this)
        },
        i.prototype.changeManPanelBg = function(e) {
            return __awaiter(this, void 0, void 0,
            function() {
                var t, i, n, a;
                return __generator(this,
                function(s) {
                    switch (s.label) {
                    case 0:
                        return t = e.data,
                        this.curShowSceneId == t.info.id ? [2] : (this.curShowSceneId = t.info.id, i = config.Profilephoto.getItem(t.info.id), this.group_ani.removeChildren(), n = i.name.split("_")[1], a = this, [4, SpineUtil.createAnimateByPromise("resource/assets/mainIcon/background/", n)]);
                    case 1:
                        return a._ani = s.sent(),
                        this._ani.play("animation", 0),
                        this.group_ani.addChild(this._ani),
                        [2]
                    }
                })
            })
        },
        i.prototype._onTouchBegin = function(e) {
            var t = this;
            this.Group_KanBan.addEventListener(egret.TouchEvent.TOUCH_END, this._cancle, this),
            this.Group_KanBan.addEventListener(egret.TouchEvent.TOUCH_MOVE, this._onTouchMove, this),
            this.Group_KanBan.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this._cancle, this),
            this.stage.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this._cancle, this),
            this._initPos = new egret.Point(e.stageX, e.stageY),
            this._flagtimerOut = egret.setTimeout(function() {
                t._flagtimerOut = 0,
                t._showLookBanNiang()
            },
            this, 1e3)
        },
        i.prototype._onTouchMove = function(e) {
            var t = e.stageX,
            i = e.stageY,
            n = Math.pow(t - this._initPos.x, 2) + Math.pow(i - this._initPos.y, 2);
            n > 2500 && this._cancle(null)
        },
        i.prototype._cancle = function(e) {
            this._cancleKanBanNiang()
        },
        i.prototype._cancleKanBanNiang = function() {
            this._flagtimerOut > 0 && egret.clearTimeout(this._flagtimerOut),
            this.Group_KanBan.removeEventListener(egret.TouchEvent.TOUCH_END, this._cancle, this),
            this.Group_KanBan.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this._onTouchMove, this),
            this.Group_KanBan.removeEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this._cancle, this),
            this.stage.removeEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this._cancle, this)
        },
        i.prototype._showLookBanNiang = function() {
            var t = this;
            RES.loadGroup("main_panel_group_kanbanniang").then(function() {
                t.group_right.visible = t.Group_KanBan.visible = t.btnRefresh.visible = !1,
                ChatManager.getInstance().chat.visible = !1,
                ToolBarManager.toolBar.visible = !1,
                t.compBubble.setLock(),
                t._kanBanNiangView || (t._kanBanNiangView = new e.NewKanBan, EventManager.addEventListener(e.NewKanBan.EVENT_SHOW_TEMP_MODE, t._showTempMode, t)),
                EventManager.once(e.NewKanBan.EVENT_CLOSED_KanBan, t.destroyKanBanNiang, t),
                t.addChild(t._kanBanNiangView)
            })
        },
        i.prototype.destroyKanBanNiang = function() {
            this._kanBanNiangView = null,
            RES.destroyRes("main_panel_group_kanbanniang"),
            CjsUtil.removeAllAni(),
            this.showPetAnimate(),
            this.group_right.visible = this.Group_KanBan.visible = !0,
            GameInfo.isChecking || (ChatManager.getInstance().chat.visible = !0),
            ToolBarManager.toolBar.visible = !0,
            this.compBubble.setUnLock()
        },
        i.prototype._showTempMode = function(e) {
            var t = e.data,
            i = t.mode,
            n = t.id;
            if (this.pet.removeChildren(), i === core.controller.MainShowStyleCtrl.MODE_CLOTHES) {
                CjsUtil.stop(),
                CjsUtil.removeAllAni(),
                this.currPetId = 0;
                var a = new ClothPreview;
                a.show(MainManager.actorInfo.clothes),
                a.scaleX = a.scaleY = 1,
                a.y = 140,
                a.x = -10,
                this.pet.addChild(a)
            } else i === core.controller.MainShowStyleCtrl.MODE_SENCEBG ? this.getBgAnim(n) : (CjsUtil.removeAllAni(), CjsUtil.disposePetCls(this.currPetId), this.currPetId = n, CjsUtil.init(), CjsUtil.start(), CjsUtil.setContainer(this.pet), CjsUtil.GetShowPetMovieClip(n).then(function(e) {
                CjsUtil.showAnimate(e);
                var t = PetXMLInfo.getPetOffset(n);
                e && (e.regX = t.x, e.regY = t.y)
            }))
        },
        i.prototype.showFirstOpenEff = function(e) {
            return __awaiter(this, void 0, void 0,
            function() {
                var e = this;
                return __generator(this,
                function(t) {
                    return this.grp_petBase.alpha = 1,
                    this.grp_petBase.visible = !0,
                    gsap.from(this.grp_petBase, {
                        alpha: 0,
                        duration: 1,
                        ease: Quad.easeOut
                    }),
                    this.group_right.visible = !0,
                    gsap.from(this.group_right.$children, {
                        x: 500,
                        alpha: 0,
                        stagger: .05,
                        ease: Quad.easeOut
                    }).then(function() {
                        gsap.killTweensOf(e.group_right.$children)
                    }),
                    this.group_kanBanNiang.touchEnabled = !0,
                    [2, Promise.resolve()]
                })
            })
        },
        i.prototype.showBubble = function(e, t, i) {
            IS_RELEASE || this.compBubble.showBubble(e, t, i)
        },
        i.prototype.destroy = function() {
            ImageButtonUtil.removeAll(this),
            EventManager.removeAll(this),
            this._btnAni_level.dispose(),
            this._btnAni_peak.dispose(),
            this._kanBanNiangView.destroy(),
            this.compBubble.destroy(),
            t.prototype.destroy.call(this)
        },
        i
    } (BaseModule);
    e.MainPanel = t,
    __reflect(t.prototype, "mainPanel.MainPanel")
} (mainPanel || (mainPanel = {}));
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
    return new(i || (i = Promise))(function(a, s) {
        function r(e) {
            try {
                h(n.next(e))
            } catch(t) {
                s(t)
            }
        }
        function o(e) {
            try {
                h(n["throw"](e))
            } catch(t) {
                s(t)
            }
        }
        function h(e) {
            e.done ? a(e.value) : new i(function(t) {
                t(e.value)
            }).then(r, o)
        }
        h((n = n.apply(e, t || [])).next())
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
        for (; h;) try {
            if (a = 1, s && (r = s[2 & i[0] ? "return": i[0] ? "throw": "next"]) && !(r = r.call(s, i[1])).done) return r;
            switch (s = 0, r && (i = [0, r.value]), i[0]) {
            case 0:
            case 1:
                r = i;
                break;
            case 4:
                return h.label++,
                {
                    value: i[1],
                    done: !1
                };
            case 5:
                h.label++,
                s = i[1],
                i = [0];
                continue;
            case 7:
                i = h.ops.pop(),
                h.trys.pop();
                continue;
            default:
                if (r = h.trys, !(r = r.length > 0 && r[r.length - 1]) && (6 === i[0] || 2 === i[0])) {
                    h = 0;
                    continue
                }
                if (3 === i[0] && (!r || i[1] > r[0] && i[1] < r[3])) {
                    h.label = i[1];
                    break
                }
                if (6 === i[0] && h.label < r[1]) {
                    h.label = r[1],
                    r = i;
                    break
                }
                if (r && h.label < r[2]) {
                    h.label = r[2],
                    h.ops.push(i);
                    break
                }
                r[2] && h.ops.pop(),
                h.trys.pop();
                continue
            }
            i = t.call(e, h)
        } catch(n) {
            i = [6, n],
            s = 0
        } finally {
            a = r = 0
        }
        if (5 & i[0]) throw i[1];
        return {
            value: i[0] ? i[1] : void 0,
            done: !0
        }
    }
    var a, s, r, o, h = {
        label: 0,
        sent: function() {
            if (1 & r[0]) throw r[1];
            return r[1]
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
mainPanel; !
function(e) {
    var t = function(t) {
        function i() {
            var e = t.call(this) || this;
            return e._petList = new eui.ArrayCollection,
            e._skinList = new eui.ArrayCollection,
            e._isOrder = !0,
            e.curSeindex = 0,
            e.isShowPet = !0,
            e.skinName = MainPanelPetViewSkin,
            e
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this)
        },
        i.prototype.initGrpCustomPet = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var e;
                return __generator(this,
                function(t) {
                    switch (t.label) {
                    case 0:
                        return e = this,
                        [4, PetManager.GetHavePets()];
                    case 1:
                        return e._petIds = t.sent(),
                        this._skinIds = PetSkinController.instance.getAllPetSkinIDs(),
                        [2, Promise.resolve()]
                    }
                })
            })
        },
        i.prototype.initData = function() {
            var t = this;
            this.list_skin.name = "list_skin",
            this.list_head.itemRenderer = e.KanBanNiangHeadRender,
            this.list_skin.itemRenderer = e.KanBanNiangSkinRender,
            this.initGrpCustomPet().then(function() {
                t.list_skin.dataProvider = t._skinList,
                t.list_head.dataProvider = t._petList,
                t.initShow()
            })
        },
        i.prototype.initShow = function() {
            var t = core.controller.MainShowStyleCtrl.Instance.GetMode();
            if (0 === t && (t = core.controller.MainShowStyleCtrl.MODE_CLOTHES, EventManager.dispatchEventWith(e.KanBanNiang.EVENT_SHOW_TEMP_MODE, !1, {
                mode: t,
                id: 0
            })), this._mode = t, this._selectedPetId = core.controller.MainShowStyleCtrl.Instance.GetPetId() || 0, this.checkDefalut.selected = 1 == this._mode, this._currentSearchStr = "", this.txt_search.text = "", 1 == this._mode) PetManager.infos.length > 0 ? (0 != PetManager.infos[0].skinId ? this._selectedPetId = PetXMLInfo.getRealId(PetManager.infos[0].skinId + 14e5) : this._selectedPetId = PetManager.infos[0].id, EventManager.dispatchEventWith(e.KanBanNiang.EVENT_SHOW_TEMP_MODE, !1, {
                mode: 1,
                id: this._selectedPetId
            })) : (this._selectedPetId = 0, EventManager.dispatchEventWith(e.KanBanNiang.EVENT_SHOW_TEMP_MODE, !1, {
                mode: 3,
                id: this._selectedPetId
            }));
            else if (0 != this._selectedPetId) {
                this.isShowPet = this._selectedPetId <= 6e3;
                var i = this._selectedPetId <= 6e3 ? this._selectedPetId: PetXMLInfo.getRealId(this._selectedPetId);
                EventManager.dispatchEventWith(e.KanBanNiang.EVENT_SHOW_TEMP_MODE, !1, {
                    mode: 2,
                    id: i
                })
            } else EventManager.dispatchEventWith(e.KanBanNiang.EVENT_SHOW_TEMP_MODE, !1, {
                mode: 3,
                id: this._selectedPetId
            });
            this._onChangeCustom()
        },
        i.prototype.addEvents = function() {
            var e = this;
            this.checkDefalut.addEventListener(egret.Event.CHANGE, this.showDefault, this),
            this.list_head.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.onTouchTapItem, this),
            this.list_skin.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.onTouchTapItem, this),
            ImageButtonUtil.add(this.btnchange,
            function() {
                e._isOrder = !e._isOrder,
                e.curSeindex = e._petIds.length - e.curSeindex,
                e.btnchange.source = e._isOrder ? "select_show_mode_btnchangeup_png": "select_show_mode_btnchangedown_png",
                e.showPetList()
            },
            this),
            ImageButtonUtil.add(this.btnSearch,
            function() {
                var t = e.txt_search.text.trim();
                e._currentSearchStr = t,
                e.petGroup.visible ? e.showPetList() : e.skinGroup.visible && e.showSkinList()
            },
            this),
            ImageButtonUtil.add(this.btnpet,
            function() {
                e.btnCheck.visible = !0,
                e.txt_search.text = e._currentSearchStr = "",
                e.showPetList()
            },
            this),
            ImageButtonUtil.add(this.btnskin,
            function() {
                e.btnCheck.visible = !1,
                e.btnskin.visible = !1,
                e.btnpet.visible = !0,
                e.txt_search.text = e._currentSearchStr = "",
                e.showSkinList()
            },
            this),
            ImageButtonUtil.add(this.btnCheck,
            function() {
                var t = e.btnCheck.localToGlobal();
                e.isShowPet = !0,
                t.x += e.btnCheck.width,
                t.y += e.btnCheck.height;
                var i = {
                    callBack: e.onChangeAttributeIdHandler,
                    caller: e,
                    selectId: e._currentAttrId,
                    unAutoClose: !1,
                    relativeSet: {
                        srcWorldPos: e.btnCheck.localToGlobal(),
                        dir: "right-top",
                        rx: 0,
                        ry: 0
                    }
                };
                ModuleManager.showModuleByID(config.ModuleConst.PET_CHOOSE_ATTRIBUTE_PANEL, i, AppDoStyle.NULL)
            },
            this)
        },
        i.prototype.showDefault = function() {
            if (this.checkDefalut.selected) {
                if (0 == PetManager.getlength()) return BubblerManager.getInstance().showText("背包内没有首发精灵，已取消展示首发精灵"),
                void(this.checkDefalut.selected = !1);
                this.list_head.selectedItem = null,
                this.list_skin.selectedItem = null,
                0 != PetManager.infos[0].skinId ? this._selectedPetId = PetXMLInfo.getRealId(PetManager.infos[0].skinId + 14e5) : this._selectedPetId = PetManager.infos[0].id,
                StatLogger.log("20221014版本系统功能", "看板人物自定义优化", "点击【首发】按钮"),
                this._mode = 1,
                EventManager.dispatchEventWith(e.KanBanNiang.EVENT_SHOW_TEMP_MODE, !1, {
                    mode: 1,
                    id: this._selectedPetId
                })
            } else BubblerManager.getInstance().showText("已取消展示首发精灵"),
            this._selectedPetId = core.controller.MainShowStyleCtrl.Instance.GetPetId() || 0,
            this._mode = core.controller.MainShowStyleCtrl.Instance.GetMode(),
            EventManager.dispatchEventWith(e.KanBanNiang.EVENT_SHOW_TEMP_MODE, !1, {
                mode: this._mode,
                id: this._selectedPetId
            });
            EventManager.dispatchEventWith("onPetChaged", !1, {
                mode: this._mode,
                id: this._selectedPetId
            })
        },
        i.prototype.onTouchTapItem = function(t) {
            var i = t.item,
            n = "";
            "list_skin" === t.currentTarget.name ? (PetSkinXMLInfo.getSkinInfo(i - 14e5) && (n = PetSkinXMLInfo.getSkinInfo(i - 14e5).name), i = PetXMLInfo.getRealId(i)) : n = PetXMLInfo.getName(i),
            this.curSeindex = t.itemIndex,
            this._selectedPetId = i,
            this._mode = core.controller.MainShowStyleCtrl.MODE_CUSTOM_PET,
            StatLogger.log("20221014版本系统功能", "看板人物自定义优化", "进入看板人物自定义主界面"),
            "list_skin" === t.currentTarget.name ? (EventManager.dispatchEventWith(e.KanBanNiang.EVENT_SHOW_TEMP_MODE, !1, {
                mode: this._mode,
                id: i
            }), EventManager.dispatchEventWith("onPetChaged", !1, {
                mode: this._mode,
                id: t.item
            })) : (EventManager.dispatchEventWith(e.KanBanNiang.EVENT_SHOW_TEMP_MODE, !1, {
                mode: this._mode,
                id: i
            }), EventManager.dispatchEventWith("onPetChaged", !1, {
                mode: this._mode,
                id: this._selectedPetId
            }))
        },
        i.prototype.showPetList = function() {
            this.txt_search.prompt = "输入精灵名或ID",
            this.grp_petCheck.visible = !0,
            this.btnskin.visible = !0,
            this.btnpet.visible = !1,
            this.petGroup.visible = !0,
            this.skinGroup.visible = !1,
            this._petList.removeAll(),
            this.scr_head.stopAnimation(),
            this.scr_head.viewport.scrollV = 0;
            var e = this._currentAttrId || 0;
            this.btnCheck.source = 0 == e ? "select_show_mode_btnshuxing_up_png": "select_show_mode_btnshuxing_down_png";
            var t = 0;
            if (t = PetManager.infos.length > 0 ? 1 == this._mode ? PetManager.infos[0].id: core.controller.MainShowStyleCtrl.Instance.GetPetId() : this._selectedPetId, this._isOrder) for (var i = this._petIds.length - 1; i >= 0; i--) {
                var n = this._petIds[i],
                a = +PetXMLInfo.getType(n),
                s = PetXMLInfo.getName(n); (0 == e || e > 0 && a == e) && n == t && 1 != this._mode ? (this._petList.addItemAt(this._petIds[i], 0), this.list_head.selectedIndex = this.curSeindex) : (0 >= e || e > 0 && a === e) && ("" === this._currentSearchStr || "" !== this._currentSearchStr && (SearchUtil.isMatch(this._currentSearchStr, s) || n.toString() == this._currentSearchStr)) && this._petList.addItem(this._petIds[i])
            } else for (var i = 0; i < this._petIds.length; i++) {
                var n = this._petIds[i],
                a = +PetXMLInfo.getType(n),
                r = PetXMLInfo.getName(n); (0 == e || e > 0 && a == e) && n == t && 1 != this._mode ? (this._petList.addItemAt(this._petIds[i], 0), this._selectedPetId == t && (this.list_head.selectedIndex = this.curSeindex)) : (0 >= e || e > 0 && a === e) && ("" === this._currentSearchStr || "" !== this._currentSearchStr && (SearchUtil.isMatch(this._currentSearchStr, r) || n.toString() == this._currentSearchStr)) && this._petList.addItem(this._petIds[i])
            }
            this.imgEmpty.source = "select_show_mode_empty_tip_png",
            this.imgEmpty.visible = this._petList.length <= 0
        },
        i.prototype.showSkinList = function() {
            this.txt_search.prompt = "输入精灵皮肤名称",
            this.grp_petCheck.visible = !1,
            this.btnpet.visible = !0,
            this.btnskin.visible = !1,
            this.petGroup.visible = !1,
            this.skinGroup.visible = !0,
            this._skinList.removeAll(),
            this.scr_skin.stopAnimation(),
            this.scr_skin.viewport.scrollV = 0;
            for (var e = 0; e < this._skinIds.length; e++) {
                var t = 14e5 + this._skinIds[e];
                if (t != core.controller.MainShowStyleCtrl.Instance.GetPetId() || 1 == this._mode) {
                    var i = "";
                    null != PetSkinXMLInfo.getSkinInfo(this._skinIds[e]) ? i = PetSkinXMLInfo.getSkinInfo(this._skinIds[e]).name: console.log(this._skinIds[e]),
                    ("" === this._currentSearchStr || "" !== this._currentSearchStr && SearchUtil.isMatch(this._currentSearchStr, i)) && this._skinList.addItem(t)
                } else this._skinList.addItemAt(t, 0)
            }
            this.imgEmpty.source = "select_show_mode_empty_tip1_png",
            this.imgEmpty.visible = this._skinList.length <= 0
        },
        i.prototype.doSearch = function() {
            var e = this.txt_search.text.trim();
            this._currentSearchStr = e,
            this._onChangeCustom()
        },
        i.prototype.onChangeAttributeIdHandler = function(e, t) {
            this._currentAttrId = +t,
            this._onChangeCustom()
        },
        i.prototype._onChangeCustom = function() {
            this.txt_search.prompt = this.btnCheck.visible ? "输入精灵名或ID": "输入精灵皮肤名称",
            this.isShowPet ? this.showPetList() : this.showSkinList()
        },
        i.prototype.updateData = function() {
            this.curSeindex = 0,
            this.initShow()
        },
        i.prototype.destroy = function() {
            this.checkDefalut.removeEventListener(egret.Event.CHANGE, this.showDefault, this),
            this.list_head.removeEventListener(eui.ItemTapEvent.ITEM_TAP, this.onTouchTapItem, this),
            this.list_skin.removeEventListener(eui.ItemTapEvent.ITEM_TAP, this.onTouchTapItem, this),
            ImageButtonUtil.removeAll(this),
            EventManager.removeAll(this)
        },
        i
    } (e.BaseView);
    e.MainPanelPetView = t,
    __reflect(t.prototype, "mainPanel.MainPanelPetView")
} (mainPanel || (mainPanel = {}));
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
mainPanel; !
function(e) {
    var t = function(t) {
        function i() {
            var e = t.call(this) || this;
            return e.showID = 0,
            e.isShow = !0,
            e.canShow = !1,
            e.curShowID = 0,
            e.infos = [],
            e.ids = [],
            e.skinName = MainPanelSceneViewSkin,
            e
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this)
        },
        i.prototype.initData = function() {
            this._list.itemRenderer = e.KanBanNiangSceneRender,
            this.curShowID = core.controller.MainShowStyleCtrl.Instance.GetBgId() || 32,
            this.showID = this.curShowID,
            this.getSceneList(),
            this.btnCancel.visible = !0,
            this.btnShow.visible = !1
        },
        i.prototype.addEvents = function() {
            var e = this;
            this._list.addEventListener(egret.Event.CHANGE, this.onSelectChange, this),
            ImageButtonUtil.add(this.btnShow,
            function() {
                e.isShow = !0,
                e.btnShow.visible = !1,
                e.btnCancel.visible = !0,
                e.grp_bg.visible = !0,
                EventManager.dispatchEventWith("changeMainPanelBg", !1, e._list.selectedItem),
                EventManager.dispatchEventWith("showBG")
            },
            this),
            ImageButtonUtil.add(this.btnCancel,
            function() {
                e.isShow = !1,
                e.btnShow.visible = !0,
                e.btnCancel.visible = !1,
                e.grp_bg.visible = !1;
                0 == e.curShowID ? 0 : e.ids.indexOf(e.curShowID);
                EventManager.dispatchEventWith("changeMainPanelBg", !1, e._list.selectedItem),
                EventManager.dispatchEventWith("hideBG")
            },
            this),
            ImageButtonUtil.add(this.btnSave,
            function() {
                e.isShow && e.curShowID != e.showID && core.controller.MainShowStyleCtrl.Instance.SaveMode(4, e.showID).then(function() {
                    BubblerManager.getInstance().showText("保存成功"),
                    SoundManager.loadSound().then(function() {
                        SoundManager.playMusic()
                    }),
                    e.curShowID = e.showID,
                    e.getSceneList()
                })
            },
            this)
        },
        i.prototype.onSelectChange = function() {
            this.showID = this._list.selectedItem.info.id,
            this.isShow && EventManager.dispatchEventWith("changeMainPanelBg", !1, this._list.selectedItem),
            this.btnSave.visible = core.AvatarDataMgr.GetInstance().GetSceneLockStateById(this._list.selectedItem.info.id) && this._list.selectedItem.info.icon != this.curShowID,
            this.canShow = core.AvatarDataMgr.GetInstance().GetSceneLockStateById(this._list.selectedItem.info.id),
            this.canShow && EventManager.dispatchEventWith("onPetChaged", !1, {
                mode: 4,
                id: this._list.selectedItem.info.id
            })
        },
        i.prototype.getSceneList = function() {
            var e = this,
            t = config.Profilephoto.getItems().filter(function(e) {
                return 4 == e.type
            });
            this.infos = [],
            this.ids = [],
            t.forEach(function(t) {
                var i = {};
                i.info = t,
                i.curID = 0 == e.curShowID ? 32 : e.curShowID,
                e.infos.push(i),
                e.ids.push(t.id)
            }),
            this._list.dataProvider = new eui.ArrayCollection(this.infos),
            this._list.selectedIndex = 0 == this.curShowID ? 0 : this.ids.indexOf(this.curShowID),
            this.btnSave.visible = core.AvatarDataMgr.GetInstance().GetSceneLockStateById(this._list.selectedItem.info.id) && this._list.selectedItem.info.icon != this.curShowID,
            this.canShow = core.AvatarDataMgr.GetInstance().GetSceneLockStateById(this._list.selectedItem.info.id)
        },
        i.prototype.destroy = function() {
            t.prototype.destroy.call(this),
            this._list.removeEventListener(egret.Event.CHANGE, this.onSelectChange, this),
            EventManager.removeAll(this),
            ImageButtonUtil.removeAll(this);
            var e = 0 == this.curShowID ? 0 : this.ids.indexOf(this.curShowID);
            EventManager.dispatchEventWith("changeMainPanelBg", !1, this._list.dataProvider._source[e])
        },
        i
    } (e.BaseView);
    e.MainPanelSceneView = t,
    __reflect(t.prototype, "mainPanel.MainPanelSceneView")
} (mainPanel || (mainPanel = {}));
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
mainPanel; !
function(e) {
    var t; !
    function(e) {
        e.HEAD = "head",
        e.FACE = "eye",
        e.HAND = "hand",
        e.WAIST = "waist",
        e.Foot = "foot"
    } (t = e.CLOTH_TYPE || (e.CLOTH_TYPE = {}));
    var i = function(i) {
        function n() {
            var e = i.call(this) || this;
            return e._equipTypeChList = ["头部", "面部", "手部", "腰部", "脚部"],
            e.skinName = MainPanelSeerViewSkin,
            e
        }
        return __extends(n, i),
        n.prototype.childrenCreated = function() {
            i.prototype.childrenCreated.call(this)
        },
        n.prototype.initData = function() {
            this._playerView = new ClothPreview,
            this.addChild(this._playerView),
            this._playerView.setPosition(240, 350);
            var e = this,
            t = function() {
                e._playerView.removeEventListener(ClothPreview.EVENT_UPDATE_SIZE_AND_POS, t, e);
                var i = 1;
                e._playerView.alpha = 0,
                egret.Tween.get(this._playerView).to({
                    alpha: i
                },
                500)
            };
            this._playerView.addEventListener(ClothPreview.EVENT_UPDATE_SIZE_AND_POS, t, this),
            this._playerView.show(MainManager.actorInfo.clothes),
            this._updateViewByNavBar()
        },
        n.prototype.addEvents = function() {
            for (var t = 0; 5 > t; t++) this["equip_" + t].addEventListener(e.EventKeys.EVENT_TOUCHTAP_CLOTH_ITEM, this.onTouchClothItemHandler, this);
            MainManager.actorInfo.addEventListener(UserInfoEvent.EVENT_CHANGE_CLOTHERS, this.onChangedClothersEventHanlder, this),
            ImageButtonUtil.add(this.btnUse,
            function() {
                EventManager.dispatchEventWith(e.KanBanNiang.EVENT_SHOW_TEMP_MODE, !1, {
                    mode: 3,
                    id: 0
                }),
                EventManager.dispatchEventWith("onPetChaged", !1, {
                    mode: 3,
                    id: 0
                })
            },
            this)
        },
        n.prototype.onChangedClothersEventHanlder = function() {
            this._playerView.show(MainManager.actorInfo.clothes),
            EventManager.dispatchEventWith(e.KanBanNiang.EVENT_SHOW_TEMP_MODE, !1, {
                mode: 3,
                id: 0
            }),
            EventManager.dispatchEventWith("onPetChaged", !1, {
                mode: 3,
                id: 0
            }),
            this._updateViewByNavBar()
        },
        n.prototype._updateViewByNavBar = function() {
            this._updateEquipItem()
        },
        n.prototype._updateEquipItem = function() {
            for (var e = this._equipTypeChList.length,
            i = MainManager.actorInfo.clothIDs,
            n = [t.HEAD, t.FACE, t.HAND, t.WAIST, t.Foot], a = 0; e > a; a++) {
                var s = {};
                s.type = String(n[a]),
                s.typeName = this._equipTypeChList[a],
                s.equipId = 0,
                s.clothData = null;
                for (var r = 0; r < i.length; r++) {
                    var o = ClothXMLInfo.getItemInfo(i[r]);
                    o.type === String(n[a]) && (s.equipId = i[r], s.clothData = o)
                }
                var h = this["equip_" + a];
                h.setEquipData(s)
            }
        },
        n.prototype.onTouchClothItemHandler = function(e) {
            var t = e.data;
            try {
                var i = t.type,
                n = t.equipId ? t.equipId: 0;
                if (StatLogger.log("20211022版本系统功能", "个人信息优化", "点击" + i + "添加按钮"), !(n > 0)) return void BubblerManager.getInstance().showText("该部位没有装备套装");
                var a = {
                    clothesId: n,
                    onDisboardFun: this.onDisboardCallBackHandler,
                    changeFun: this.openClothesWareHouse,
                    caller: this
                };
                tipsPop.TipsPop.openClothesPop(a, null, !1, null, !0)
            } catch(s) {
                console.error("再处理点击装扮部位时候发生错误", s)
            }
        },
        n.prototype.onDisboardCallBackHandler = function(e) {
            MainManager.actorInfo.requestChangeClothes(e, 0,
            function() {
                BubblerManager.getInstance().showText("脱下装扮成功")
            },
            null, this)
        },
        n.prototype.openClothesWareHouse = function(e, t) {
            void 0 === t && (t = !0);
            var i = this.getHoldColthesIds(e);
            if (i.length > 0) {
                var n = {};
                n.caller = this,
                n.clothesIds = i,
                n.isEquit = t,
                n.type = e,
                n.getClothesIDsHanlder = this._onGetClothesIDsHanlder,
                n.onDressAllClothesHanlder = this._onDressAllClothesHanlder,
                n.onDressOneClothesHanlder = this._onDressOneClothesHanlder,
                ModuleManager.showModuleByID(54, n)
            } else BubblerManager.getInstance().showText("当前部位还没有任何装扮");
            this._onGetClothesIDsHanlder
        },
        n.prototype._onDressOneClothesHanlder = function(e, t) {
            var i = this;
            return new Promise(function(n, a) {
                MainManager.actorInfo.requestChangeClothes(e, t,
                function() {
                    return n()
                },
                null, i)
            })
        },
        n.prototype._onDressAllClothesHanlder = function(e) {
            var t = this;
            return new Promise(function(i, n) {
                MainManager.actorInfo.requestChangeClotherBySuit(e,
                function() {
                    return i()
                },
                null, t)
            })
        },
        n.prototype._onGetClothesIDsHanlder = function() {
            return MainManager.actorInfo.clothIDs
        },
        n.prototype.getHoldColthesIds = function(e) {
            var t = ItemManager.getClothIDs(),
            i = [];
            return t.forEach(function(t) {
                var n = ClothXMLInfo.getItemInfo(~~t).type;
                n === e && i.push(~~t)
            }),
            i
        },
        n.prototype.destroy = function() {
            egret.Tween.removeTweens(this._playerView),
            this._playerView.destroy();
            for (var t = 0; 5 > t; t++) this["equip_" + t].removeEventListener(e.EventKeys.EVENT_TOUCHTAP_CLOTH_ITEM, this.onTouchClothItemHandler, this);
            MainManager.actorInfo.removeEventListener(UserInfoEvent.EVENT_CHANGE_CLOTHERS, this.onChangedClothersEventHanlder, this)
        },
        n
    } (e.BaseView);
    e.MainPanelSeerView = i,
    __reflect(i.prototype, "mainPanel.MainPanelSeerView")
} (mainPanel || (mainPanel = {})),
window.mainPanel = window.mainPanel || {};
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
generateEUI.paths["resource/eui_skins/CompPetBubbleSkin.exml"] = window.mainPanel.CompPetBubbleSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["bg", "txtContent"],
        this.height = 63,
        this.width = 237,
        this.elementsContent = [this.bg_i(), this.txtContent_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i.bg_i = function() {
        var e = new eui.Image;
        return this.bg = e,
        e.height = 63,
        e.scale9Grid = new egret.Rectangle(57, 24, 136, 17),
        e.source = "kan_ban_niang_s9_group_chat_bg_png",
        e.width = 237,
        e
    },
    i.txtContent_i = function() {
        var e = new eui.Label;
        return this.txtContent = e,
        e.fontFamily = "MFShangHei",
        e.lineSpacing = 11,
        e.size = 16,
        e.text = "你好，异世界来的勇士！你好，异世界来的勇士！",
        e.textColor = 15135739,
        e.width = 208,
        e.x = 16,
        e.y = 10,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/KanBanNiangSkin.exml"] = window.mainPanel.KanBanNiangSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["bottomMask", "modeIcon", "txtName", "nameGroup", "btnSave", "imgEmpty", "btnCheck", "btnSearch", "txt_search", "Search", "tabPet", "tabSkin", "list_head", "scr_head", "petGroup", "list_skin", "scr_skin", "skinGroup", "groupSet", "btnClose", "groupTop", "rb1", "rb2", "rb3", "showGroup"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bottomMask_i(), this.groupSet_i(), this.groupTop_i(), this.showGroup_i()]
    }
    __extends(t, e);
    var i = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["labelDisplay"],
            this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "select_show_modepet_up_png")]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.percentHeight = 100,
            e.source = "select_show_modepet_down_png",
            e.percentWidth = 100,
            e
        },
        i.labelDisplay_i = function() {
            var e = new eui.Label;
            return this.labelDisplay = e,
            e.horizontalCenter = 0,
            e.verticalCenter = 0,
            e
        },
        t
    } (eui.Skin),
    n = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["labelDisplay"],
            this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "select_show_modeskin_up_png")]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.percentHeight = 100,
            e.source = "select_show_modeskin_down_png",
            e.percentWidth = 100,
            e
        },
        i.labelDisplay_i = function() {
            var e = new eui.Label;
            return this.labelDisplay = e,
            e.horizontalCenter = 0,
            e.verticalCenter = 0,
            e
        },
        t
    } (eui.Skin),
    a = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["labelDisplay"],
            this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "select_show_mode_tab2_down_png")]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.percentHeight = 100,
            e.source = "select_show_mode_tab2_up_png",
            e.percentWidth = 100,
            e
        },
        i.labelDisplay_i = function() {
            var e = new eui.Label;
            return this.labelDisplay = e,
            e.horizontalCenter = 0,
            e.verticalCenter = 0,
            e
        },
        t
    } (eui.Skin),
    s = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["labelDisplay"],
            this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "select_show_mode_tab1_down_png")]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.percentHeight = 100,
            e.source = "select_show_mode_tab1_up_png",
            e.percentWidth = 100,
            e
        },
        i.labelDisplay_i = function() {
            var e = new eui.Label;
            return this.labelDisplay = e,
            e.horizontalCenter = 0,
            e.verticalCenter = 0,
            e
        },
        t
    } (eui.Skin),
    r = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["labelDisplay"],
            this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "select_show_mode_tab3_down_png")]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.percentHeight = 100,
            e.source = "select_show_mode_tab3_up_png",
            e.percentWidth = 100,
            e
        },
        i.labelDisplay_i = function() {
            var e = new eui.Label;
            return this.labelDisplay = e,
            e.horizontalCenter = 0,
            e.verticalCenter = 0,
            e
        },
        t
    } (eui.Skin),
    o = t.prototype;
    return o.bottomMask_i = function() {
        var e = new eui.Image;
        return this.bottomMask = e,
        e.bottom = 0,
        e.height = 125,
        e.left = 0,
        e.right = 0,
        e.scale9Grid = new egret.Rectangle(4, 0, 3, 125),
        e.source = "kan_ban_niang_bottomMask_png",
        e
    },
    o.groupSet_i = function() {
        var e = new eui.Group;
        return this.groupSet = e,
        e.bottom = 0,
        e.height = 640,
        e.right = 0,
        e.top = 0,
        e.visible = !0,
        e.width = 1136,
        e.elementsContent = [this._Image1_i(), this._Image2_i(), this.nameGroup_i(), this.btnSave_i(), this.imgEmpty_i(), this.btnCheck_i(), this.Search_i(), this.tabPet_i(), this.tabSkin_i(), this.petGroup_i(), this.skinGroup_i()],
        e
    },
    o._Image1_i = function() {
        var e = new eui.Image;
        return e.height = 640,
        e.scale9Grid = new egret.Rectangle(17, 57, 7, 7),
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "select_show_mode_imgsetbg_png",
        e.width = 496,
        e.x = 640,
        e.y = 0,
        e
    },
    o._Image2_i = function() {
        var e = new eui.Image;
        return e.scaleX = 1,
        e.scaleY = 1,
        e.source = "select_show_mode_settitle_png",
        e.x = 824,
        e.y = 17,
        e
    },
    o.nameGroup_i = function() {
        var e = new eui.Group;
        return this.nameGroup = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.x = 290.389,
        e.y = 515.083,
        e.elementsContent = [this._Image3_i(), this.modeIcon_i(), this.txtName_i()],
        e
    },
    o._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "select_show_mode_namebg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    o.modeIcon_i = function() {
        var e = new eui.Image;
        return this.modeIcon = e,
        e.source = "select_show_mode_nameicon1_png",
        e.x = 18,
        e.y = 4,
        e
    },
    o.txtName_i = function() {
        var e = new eui.Label;
        return this.txtName = e,
        e.fontFamily = "MFShangHei",
        e.horizontalCenter = 11.5,
        e.size = 28,
        e.text = "精灵名字预留九个字",
        e.textColor = 16777215,
        e.y = 14,
        e
    },
    o.btnSave_i = function() {
        var e = new eui.Image;
        return this.btnSave = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "select_show_mode_btnsave_png",
        e.x = 490.286,
        e.y = 578,
        e
    },
    o.imgEmpty_i = function() {
        var e = new eui.Image;
        return this.imgEmpty = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "select_show_mode_empty_tip_png",
        e.visible = !1,
        e.x = 775,
        e.y = 252,
        e
    },
    o.btnCheck_i = function() {
        var e = new eui.Image;
        return this.btnCheck = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "select_show_mode_btncheck_png",
        e.x = 652,
        e.y = 58,
        e
    },
    o.Search_i = function() {
        var e = new eui.Group;
        return this.Search = e,
        e.height = 29,
        e.scaleX = 1,
        e.scaleY = 1,
        e.width = 160,
        e.x = 964,
        e.y = 62,
        e.elementsContent = [this._Image4_i(), this.btnSearch_i(), this.txt_search_i()],
        e
    },
    o._Image4_i = function() {
        var e = new eui.Image;
        return e.height = 29,
        e.source = "select_show_mode_Searchbg_png",
        e.width = 160,
        e.x = 0,
        e.y = 0,
        e
    },
    o.btnSearch_i = function() {
        var e = new eui.Image;
        return this.btnSearch = e,
        e.height = 29,
        e.source = "select_show_mode_btnSearch_png",
        e.width = 29,
        e.x = 131,
        e.y = 0,
        e
    },
    o.txt_search_i = function() {
        var e = new eui.EditableText;
        return this.txt_search = e,
        e.fontFamily = "MFShangHei",
        e.height = 16,
        e.prompt = "输入精灵名或ID",
        e.size = 16,
        e.text = "",
        e.textColor = 16777215,
        e.verticalCenter = "1.5",
        e.width = 114,
        e.x = 10,
        e
    },
    o.tabPet_i = function() {
        var e = new eui.RadioButton;
        return this.tabPet = e,
        e.groupName = "signGroup",
        e.scaleX = 1,
        e.scaleY = 1,
        e.value = "1",
        e.x = 720,
        e.y = 578,
        e.skinName = i,
        e
    },
    o.tabSkin_i = function() {
        var e = new eui.RadioButton;
        return this.tabSkin = e,
        e.groupName = "signGroup",
        e.scaleX = 1,
        e.scaleY = 1,
        e.value = "2",
        e.x = 888,
        e.y = 578,
        e.skinName = n,
        e
    },
    o.petGroup_i = function() {
        var e = new eui.Group;
        return this.petGroup = e,
        e.x = 647,
        e.y = 103,
        e.elementsContent = [this.scr_head_i()],
        e
    },
    o.scr_head_i = function() {
        var e = new eui.Scroller;
        return this.scr_head = e,
        e.height = 458,
        e.width = 482,
        e.viewport = this.list_head_i(),
        e
    },
    o.list_head_i = function() {
        var e = new eui.List;
        return this.list_head = e,
        e.layout = this._TileLayout1_i(),
        e
    },
    o._TileLayout1_i = function() {
        var e = new eui.TileLayout;
        return e.paddingBottom = 10,
        e.paddingLeft = 10,
        e.paddingTop = 10,
        e
    },
    o.skinGroup_i = function() {
        var e = new eui.Group;
        return this.skinGroup = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.x = 690,
        e.y = 103,
        e.elementsContent = [this.scr_skin_i()],
        e
    },
    o.scr_skin_i = function() {
        var e = new eui.Scroller;
        return this.scr_skin = e,
        e.height = 460,
        e.width = 394,
        e.x = 0,
        e.y = 0,
        e.viewport = this.list_skin_i(),
        e
    },
    o.list_skin_i = function() {
        var e = new eui.List;
        return this.list_skin = e,
        e.layout = this._TileLayout2_i(),
        e
    },
    o._TileLayout2_i = function() {
        var e = new eui.TileLayout;
        return e.horizontalGap = 32,
        e.verticalGap = 10,
        e
    },
    o.groupTop_i = function() {
        var e = new eui.Group;
        return this.groupTop = e,
        e.left = 0,
        e.top = 0,
        e.visible = !0,
        e.elementsContent = [this._Image5_i(), this.btnClose_i()],
        e
    },
    o._Image5_i = function() {
        var e = new eui.Image;
        return e.source = "select_show_mode_imgtop_png",
        e.x = 0,
        e.y = 0,
        e
    },
    o.btnClose_i = function() {
        var e = new eui.Image;
        return this.btnClose = e,
        e.source = "select_show_mode_btnclose_png",
        e.x = 14,
        e.y = 5,
        e
    },
    o.showGroup_i = function() {
        var e = new eui.Group;
        return this.showGroup = e,
        e.height = 246,
        e.left = 29,
        e.scaleX = 1,
        e.scaleY = 1,
        e.visible = !0,
        e.width = 80,
        e.y = 379,
        e.elementsContent = [this._Image6_i(), this.rb1_i(), this.rb2_i(), this.rb3_i()],
        e
    },
    o._Image6_i = function() {
        var e = new eui.Image;
        return e.source = "select_show_mode_showbg_png",
        e.width = 80,
        e.x = 0,
        e.y = 0,
        e
    },
    o.rb1_i = function() {
        var e = new eui.RadioButton;
        return this.rb1 = e,
        e.groupName = "groupMode",
        e.horizontalCenter = 2.5,
        e.value = "1",
        e.y = 107,
        e.skinName = a,
        e
    },
    o.rb2_i = function() {
        var e = new eui.RadioButton;
        return this.rb2 = e,
        e.groupName = "groupMode",
        e.horizontalCenter = 2.5,
        e.value = "2",
        e.y = 36,
        e.skinName = s,
        e
    },
    o.rb3_i = function() {
        var e = new eui.RadioButton;
        return this.rb3 = e,
        e.groupName = "groupMode",
        e.horizontalCenter = 2.5,
        e.value = "3",
        e.y = 178,
        e.skinName = r,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/MainPanelPageActCenterSkin.exml"] = window.MainPanelPageActCenterSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["_pageList", "_pageScroller", "focus_group", "_listPro", "_scroller"],
        this.height = 127,
        this.width = 303,
        this.elementsContent = [this._Group1_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Group1_i = function() {
        var e = new eui.Group;
        return e.y = 0,
        e.elementsContent = [this._Image1_i(), this._pageScroller_i(), this.focus_group_i(), this._scroller_i()],
        e
    },
    i._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "main_panel_page_act_center_bg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i._pageScroller_i = function() {
        var e = new eui.Scroller;
        return this._pageScroller = e,
        e.bounces = !1,
        e.height = 121,
        e.throwSpeed = 0,
        e.visible = !1,
        e.width = 292,
        e.x = 6,
        e.y = 0,
        e.viewport = this._pageList_i(),
        e
    },
    i._pageList_i = function() {
        var e = new eui.Group;
        return this._pageList = e,
        e.layout = this._HorizontalLayout1_i(),
        e
    },
    i._HorizontalLayout1_i = function() {
        var e = new eui.HorizontalLayout;
        return e.gap = 0,
        e
    },
    i.focus_group_i = function() {
        var e = new eui.Group;
        return this.focus_group = e,
        e.height = 121,
        e.scrollEnabled = !0,
        e.visible = !0,
        e.width = 292,
        e.x = 6,
        e.y = 0,
        e
    },
    i._scroller_i = function() {
        var e = new eui.Scroller;
        return this._scroller = e,
        e.height = 7,
        e.skewY = -.8,
        e.touchChildren = !1,
        e.touchEnabled = !1,
        e.width = 290,
        e.x = 6.181,
        e.y = 115,
        e.viewport = this._listPro_i(),
        e
    },
    i._listPro_i = function() {
        var e = new eui.List;
        return this._listPro = e,
        e.itemRendererSkinName = MainPanelPageActCenterProgressSkin,
        e.layout = this._HorizontalLayout2_i(),
        e
    },
    i._HorizontalLayout2_i = function() {
        var e = new eui.HorizontalLayout;
        return e.gap = 2,
        e.horizontalAlign = "left",
        e.verticalAlign = "top",
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/MainPanelPageSkin.exml"] = window.MainPanelPageSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["pageBg4", "pageBg3", "pageBg2", "page_1", "page_2", "page_3", "page_4"],
        this.height = 12,
        this.width = 285,
        this.elementsContent = [],
        this.pageBg4_i(),
        this.pageBg3_i(),
        this.pageBg2_i(),
        this.page_1_i(),
        this.page_2_i(),
        this.page_3_i(),
        this.page_4_i(),
        this.states = [new eui.State("2", [new eui.AddItems("pageBg2", "", 1, ""), new eui.AddItems("page_1", "", 1, ""), new eui.AddItems("page_2", "", 1, ""), new eui.SetProperty("page_1", "source", "main_panel_page_page2_1_png"), new eui.SetProperty("page_1", "width", 133), new eui.SetProperty("page_1", "height", 10), new eui.SetProperty("page_1", "x", 1), new eui.SetProperty("page_1", "y", 2), new eui.SetProperty("page_2", "source", "main_panel_page_page2_2_png"), new eui.SetProperty("page_2", "width", 151), new eui.SetProperty("page_2", "height", 11), new eui.SetProperty("page_2", "x", 134), new eui.SetProperty("page_2", "y", 0)]), new eui.State("3", [new eui.AddItems("pageBg3", "", 1, ""), new eui.AddItems("page_1", "", 1, ""), new eui.AddItems("page_2", "", 1, ""), new eui.AddItems("page_3", "", 1, ""), new eui.SetProperty("page_1", "source", "main_panel_page_page3_1_png"), new eui.SetProperty("page_1", "width", 88), new eui.SetProperty("page_1", "height", 9), new eui.SetProperty("page_1", "x", 0), new eui.SetProperty("page_1", "y", 3), new eui.SetProperty("page_2", "source", "main_panel_page_page3_2_png"), new eui.SetProperty("page_2", "width", 95), new eui.SetProperty("page_2", "height", 11), new eui.SetProperty("page_2", "x", 87), new eui.SetProperty("page_2", "y", 1), new eui.SetProperty("page_3", "source", "main_panel_page_page3_3_png"), new eui.SetProperty("page_3", "width", 103), new eui.SetProperty("page_3", "height", 10), new eui.SetProperty("page_3", "x", 182), new eui.SetProperty("page_3", "y", 0)]), new eui.State("4", [new eui.AddItems("pageBg4", "", 0, ""), new eui.AddItems("page_1", "", 1, ""), new eui.AddItems("page_2", "", 1, ""), new eui.AddItems("page_3", "", 1, ""), new eui.AddItems("page_4", "", 1, ""), new eui.SetProperty("page_1", "source", "main_panel_page_page4_1_png"), new eui.SetProperty("page_1", "width", 67), new eui.SetProperty("page_1", "height", 9), new eui.SetProperty("page_1", "x", 0), new eui.SetProperty("page_1", "y", 3), new eui.SetProperty("page_2", "source", "main_panel_page_page4_2_png"), new eui.SetProperty("page_2", "width", 71), new eui.SetProperty("page_2", "height", 10), new eui.SetProperty("page_2", "x", 64), new eui.SetProperty("page_2", "y", 2), new eui.SetProperty("page_3", "source", "main_panel_page_page4_4_png"), new eui.SetProperty("page_3", "width", 75), new eui.SetProperty("page_3", "height", 10), new eui.SetProperty("page_3", "x", 133), new eui.SetProperty("page_3", "y", 1)])]
    }
    __extends(t, e);
    var i = t.prototype;
    return i.pageBg4_i = function() {
        var e = new eui.Image;
        return this.pageBg4 = e,
        e.height = 7,
        e.source = "main_panel_page_pageBg4_png",
        e.width = 279,
        e.x = 3,
        e.y = 3,
        e
    },
    i.pageBg3_i = function() {
        var e = new eui.Image;
        return this.pageBg3 = e,
        e.height = 7,
        e.source = "main_panel_page_pageBg3_png",
        e.width = 279,
        e.x = 3,
        e.y = 3,
        e
    },
    i.pageBg2_i = function() {
        var e = new eui.Image;
        return this.pageBg2 = e,
        e.height = 7,
        e.source = "main_panel_page_pageBg2_png",
        e.width = 279,
        e.x = 3,
        e.y = 3,
        e
    },
    i.page_1_i = function() {
        var e = new eui.Image;
        return this.page_1 = e,
        e.visible = !0,
        e
    },
    i.page_2_i = function() {
        var e = new eui.Image;
        return this.page_2 = e,
        e.visible = !0,
        e
    },
    i.page_3_i = function() {
        var e = new eui.Image;
        return this.page_3 = e,
        e.visible = !0,
        e
    },
    i.page_4_i = function() {
        var e = new eui.Image;
        return this.page_4 = e,
        e.height = 10,
        e.source = "main_panel_page_page4_4_png",
        e.visible = !0,
        e.width = 80,
        e.x = 205,
        e.y = 0,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/MainSkin.exml"] = window.MainSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["group_ani", "group_bg", "bg_mask", "pet", "rectPet", "btnLookBanNiang", "xian", "group_kanBanNiang", "btnRefresh", "grp_petBase", "pageActCenter", "grp_main", "btnMainTask", "flag_new", "btnPet_icon", "btnPet", "btnLevel_icon", "btnLevel", "flag_newChallenge", "btnShop", "imgMallRedDot", "btnToken", "flag_up", "btnRecruit", "btnPeak_icon", "flag_newSeason", "btnPeak", "flag_petRecruit", "rightbg", "activity_lock", "tipSp", "gotoBtn", "group_right", "Group_KanBan", "compBubble", "grpBubble"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this._Image1_i(), this.group_bg_i(), this.bg_mask_i(), this.grp_petBase_i(), this.group_right_i(), this.Group_KanBan_i(), this.grpBubble_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Image1_i = function() {
        var e = new eui.Image;
        return e.percentHeight = 100,
        e.source = "blurry_base_bg_jpg",
        e.percentWidth = 100,
        e.x = 0,
        e.y = 0,
        e
    },
    i.group_bg_i = function() {
        var e = new eui.Group;
        return this.group_bg = e,
        e.height = 768,
        e.visible = !0,
        e.width = 1662,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this.group_ani_i()],
        e
    },
    i.group_ani_i = function() {
        var e = new eui.Group;
        return this.group_ani = e,
        e.height = 0,
        e.horizontalCenter = 0,
        e.verticalCenter = 0,
        e.visible = !0,
        e.width = 0,
        e
    },
    i.bg_mask_i = function() {
        var e = new eui.Image;
        return this.bg_mask = e,
        e.percentHeight = 100,
        e.source = "main_bg_mask_png",
        e.percentWidth = 100,
        e.x = 0,
        e.y = 0,
        e
    },
    i.grp_petBase_i = function() {
        var e = new eui.Group;
        return this.grp_petBase = e,
        e.height = 640,
        e.horizontalCenter = -188,
        e.verticalCenter = 0,
        e.visible = !0,
        e.width = 760,
        e.elementsContent = [this.pet_i(), this.rectPet_i(), this.group_kanBanNiang_i(), this.btnRefresh_i()],
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
        e.visible = !0,
        e.width = 0,
        e.x = 365,
        e.y = 346,
        e
    },
    i.rectPet_i = function() {
        var e = new eui.Group;
        return this.rectPet = e,
        e.anchorOffsetX = 0,
        e.anchorOffsetY = 0,
        e.height = 346,
        e.horizontalCenter = 0,
        e.scaleX = 1,
        e.scaleY = 1,
        e.verticalCenter = 9,
        e.visible = !0,
        e.width = 423,
        e
    },
    i.group_kanBanNiang_i = function() {
        var e = new eui.Group;
        return this.group_kanBanNiang = e,
        e.anchorOffsetX = -1.33,
        e.anchorOffsetY = 66.67,
        e.height = 66,
        e.visible = !1,
        e.width = 102,
        e.x = 502.67,
        e.y = 224.67000000000002,
        e.elementsContent = [this.btnLookBanNiang_i(), this.xian_i()],
        e
    },
    i.btnLookBanNiang_i = function() {
        var e = new eui.Image;
        return this.btnLookBanNiang = e,
        e.height = 51,
        e.source = "main_btnKanBanNiang_png",
        e.width = 61,
        e.x = 39,
        e.y = 0,
        e
    },
    i.xian_i = function() {
        var e = new eui.Image;
        return this.xian = e,
        e.height = 21,
        e.source = "main_KanBangNiangLine_png",
        e.width = 102,
        e.x = 0,
        e.y = 45,
        e
    },
    i.btnRefresh_i = function() {
        var e = new eui.Image;
        return this.btnRefresh = e,
        e.alpha = 0,
        e.height = 44,
        e.source = "main_btnRefresh_png",
        e.visible = !1,
        e.width = 44,
        e.x = 168,
        e.y = 458,
        e
    },
    i.group_right_i = function() {
        var e = new eui.Group;
        return this.group_right = e,
        e.height = 475,
        e.right = 0,
        e.visible = !0,
        e.width = 446,
        e.y = 90,
        e.elementsContent = [this.grp_main_i(), this.btnMainTask_i(), this.flag_new_i(), this.btnPet_i(), this.btnLevel_i(), this.flag_newChallenge_i(), this.btnShop_i(), this.imgMallRedDot_i(), this.btnToken_i(), this.flag_up_i(), this.btnRecruit_i(), this.btnPeak_i(), this.flag_petRecruit_i(), this.rightbg_i(), this.activity_lock_i(), this.tipSp_i(), this.gotoBtn_i()],
        e
    },
    i.grp_main_i = function() {
        var e = new eui.Group;
        return this.grp_main = e,
        e.height = 127,
        e.visible = !1,
        e.width = 303,
        e.x = 0,
        e.y = 11,
        e.elementsContent = [this.pageActCenter_i()],
        e
    },
    i.pageActCenter_i = function() {
        var e = new mainPanel.MainPanelPageActCenter;
        return this.pageActCenter = e,
        e.height = 127,
        e.skinName = "MainPanelPageActCenterSkin",
        e.width = 303,
        e.x = 0,
        e.y = 0,
        e
    },
    i.btnMainTask_i = function() {
        var e = new eui.Image;
        return this.btnMainTask = e,
        e.height = 132,
        e.visible = !1,
        e.width = 126,
        e.x = 307,
        e.y = 3,
        e
    },
    i.flag_new_i = function() {
        var e = new eui.Image;
        return this.flag_new = e,
        e.height = 19,
        e.source = "main_panel_flag_new_png",
        e.visible = !1,
        e.width = 51,
        e.x = 379,
        e.y = 0,
        e
    },
    i.btnPet_i = function() {
        var e = new eui.Group;
        return this.btnPet = e,
        e.height = 100,
        e.visible = !1,
        e.width = 182,
        e.x = 23,
        e.y = 138,
        e.elementsContent = [this._Image2_i(), this._Image3_i(), this.btnPet_icon_i(), this._Image4_i()],
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.height = 100,
        e.source = "main_panel_btnPet_di_png",
        e.width = 181,
        e.x = 0,
        e.y = 0,
        e
    },
    i._Image3_i = function() {
        var e = new eui.Image;
        return e.height = 80,
        e.source = "main_panel_btnPet_icon_png",
        e.visible = !1,
        e.width = 93,
        e.x = 77,
        e.y = 11,
        e
    },
    i.btnPet_icon_i = function() {
        var e = new eui.Group;
        return this.btnPet_icon = e,
        e.visible = !0,
        e.x = 112,
        e.y = 58,
        e
    },
    i._Image4_i = function() {
        var e = new eui.Image;
        return e.height = 32,
        e.source = "main_panel_btnPet_title_png",
        e.width = 96,
        e.x = 5,
        e.y = 6,
        e
    },
    i.btnLevel_i = function() {
        var e = new eui.Group;
        return this.btnLevel = e,
        e.height = 110,
        e.visible = !1,
        e.width = 218,
        e.x = 209,
        e.y = 136,
        e.elementsContent = [this._Image5_i(), this._Image6_i(), this.btnLevel_icon_i(), this._Image7_i()],
        e
    },
    i._Image5_i = function() {
        var e = new eui.Image;
        return e.height = 109,
        e.source = "main_panel_btnLevel_di_png",
        e.width = 218,
        e.x = 0,
        e.y = 0,
        e
    },
    i._Image6_i = function() {
        var e = new eui.Image;
        return e.height = 88,
        e.source = "main_panel_btnLevel_icon_png",
        e.visible = !1,
        e.width = 109,
        e.x = 89,
        e.y = 7,
        e
    },
    i.btnLevel_icon_i = function() {
        var e = new eui.Group;
        return this.btnLevel_icon = e,
        e.visible = !0,
        e.x = 106,
        e.y = 106,
        e
    },
    i._Image7_i = function() {
        var e = new eui.Image;
        return e.height = 35,
        e.source = "main_panel_btnLevel_title_png",
        e.width = 114,
        e.x = 7,
        e.y = 6,
        e
    },
    i.flag_newChallenge_i = function() {
        var e = new eui.Image;
        return this.flag_newChallenge = e,
        e.height = 33,
        e.source = "main_panel_flag_newChallenge_png",
        e.visible = !1,
        e.width = 85,
        e.x = 342,
        e.y = 213,
        e
    },
    i.btnShop_i = function() {
        var e = new eui.Image;
        return this.btnShop = e,
        e.height = 91,
        e.source = "main_panel_btnShop_png",
        e.visible = !1,
        e.width = 137,
        e.x = 6,
        e.y = 233,
        e
    },
    i.imgMallRedDot_i = function() {
        var e = new eui.Image;
        return this.imgMallRedDot = e,
        e.source = "main_act_button_redPoint_png",
        e.visible = !1,
        e.x = 125,
        e.y = 230,
        e
    },
    i.btnToken_i = function() {
        var e = new eui.Image;
        return this.btnToken = e,
        e.height = 96,
        e.source = "main_panel_btnToken_png",
        e.visible = !1,
        e.width = 162,
        e.x = 145,
        e.y = 238,
        e
    },
    i.flag_up_i = function() {
        var e = new eui.Image;
        return this.flag_up = e,
        e.height = 16,
        e.source = "main_panel_flag_up_png",
        e.visible = !1,
        e.width = 30,
        e.x = 272,
        e.y = 240,
        e
    },
    i.btnRecruit_i = function() {
        var e = new eui.Image;
        return this.btnRecruit = e,
        e.height = 102,
        e.source = "main_panel_btnRecruit_png",
        e.visible = !1,
        e.width = 170,
        e.x = 269,
        e.y = 244,
        e
    },
    i.btnPeak_i = function() {
        var e = new eui.Group;
        return this.btnPeak = e,
        e.height = 153,
        e.visible = !1,
        e.width = 325,
        e.x = 56,
        e.y = 319,
        e.elementsContent = [this._Image8_i(), this._Image9_i(), this.btnPeak_icon_i(), this._Image10_i(), this.flag_newSeason_i()],
        e
    },
    i._Image8_i = function() {
        var e = new eui.Image;
        return e.height = 153,
        e.source = "main_panel_btnPeak_di_png",
        e.width = 324,
        e.x = 0,
        e.y = 0,
        e
    },
    i._Image9_i = function() {
        var e = new eui.Image;
        return e.height = 98,
        e.source = "main_panel_btnPeak_icon_png",
        e.visible = !1,
        e.width = 135,
        e.x = 120,
        e.y = 23,
        e
    },
    i.btnPeak_icon_i = function() {
        var e = new eui.Group;
        return this.btnPeak_icon = e,
        e.x = 116,
        e.y = 59,
        e
    },
    i._Image10_i = function() {
        var e = new eui.Image;
        return e.height = 41,
        e.source = "main_panel_btnPeak_title_png",
        e.width = 107,
        e.x = 10,
        e.y = 8,
        e
    },
    i.flag_newSeason_i = function() {
        var e = new eui.Image;
        return this.flag_newSeason = e,
        e.source = "main_panel_flag_newSeason_png",
        e.touchEnabled = !1,
        e.visible = !0,
        e.x = 167.134,
        e.y = 75.932,
        e
    },
    i.flag_petRecruit_i = function() {
        var e = new eui.Image;
        return this.flag_petRecruit = e,
        e.height = 38,
        e.source = "main_panel_flag_petRecruit_png",
        e.visible = !1,
        e.width = 97,
        e.x = 285,
        e.y = 432,
        e
    },
    i.rightbg_i = function() {
        var e = new eui.Image;
        return this.rightbg = e,
        e.height = 338,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "main_panel_rightbg_png",
        e.touchEnabled = !1,
        e.visible = !1,
        e.width = 65,
        e.x = 381,
        e.y = 137,
        e
    },
    i.activity_lock_i = function() {
        var e = new eui.Image;
        return this.activity_lock = e,
        e.source = "mainpanel_groupgrpright_png",
        e.x = 0,
        e.y = 4,
        e
    },
    i.tipSp_i = function() {
        var e = new eui.Image;
        return this.tipSp = e,
        e.source = "mainpanel_imgtips_png",
        e.x = -203,
        e.y = -89,
        e
    },
    i.gotoBtn_i = function() {
        var e = new eui.Image;
        return this.gotoBtn = e,
        e.source = "mainpanel_imggotobtn_png",
        e.x = 143,
        e.y = 203,
        e
    },
    i.Group_KanBan_i = function() {
        var e = new eui.Group;
        return this.Group_KanBan = e,
        e.height = 300,
        e.visible = !1,
        e.width = 300,
        e.x = 220,
        e.y = 160,
        e
    },
    i.grpBubble_i = function() {
        var e = new eui.Group;
        return this.grpBubble = e,
        e.height = 640,
        e.horizontalCenter = -188,
        e.touchEnabled = !1,
        e.verticalCenter = 0,
        e.visible = !0,
        e.width = 760,
        e.elementsContent = [this.compBubble_i()],
        e
    },
    i.compBubble_i = function() {
        var e = new mainPanel.CompPetBubble;
        return this.compBubble = e,
        e.skinName = "mainPanel.CompPetBubbleSkin",
        e.visible = !1,
        e.x = 202,
        e.y = 121,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/render/PlayerInfoEquipItem.exml"] = window.PlayerinfoClothspositionItemSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["img_add", "icon_equip", "txt_clothName", "txt_pos_name"],
        this.height = 143,
        this.width = 167,
        this.elementsContent = [this._Group2_i()],
        this.states = [new eui.State("onleft", []), new eui.State("onright", [new eui.SetProperty("_Image2", "x", 79), new eui.SetProperty("img_add", "x", 98), new eui.SetProperty("img_add", "y", 35), new eui.SetProperty("icon_equip", "x", 87), new eui.SetProperty("icon_equip", "y", 25), new eui.SetProperty("txt_clothName", "x", 10), new eui.SetProperty("txt_clothName", "textAlign", "right"), new eui.SetProperty("txt_pos_name", "x", 100), new eui.SetProperty("_Image3", "scaleX", 1), new eui.SetProperty("_Image3", "x", 146), new eui.SetProperty("_Image3", "y", 3)])]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Group2_i = function() {
        var e = new eui.Group;
        return e.x = 1,
        e.y = 0,
        e.elementsContent = [this._Image1_i(), this._Image2_i(), this.img_add_i(), this.icon_equip_i(), this._Group1_i(), this._Image3_i()],
        e
    },
    i._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "s___seer_suiticonbigbg_0_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return this._Image2 = e,
        e.source = "s___seer_juxing_32_png",
        e.x = 17,
        e.y = 16,
        e
    },
    i.img_add_i = function() {
        var e = new eui.Image;
        return this.img_add = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "newkanpan_addBtn_0_png",
        e.visible = !1,
        e.x = 35,
        e.y = 35,
        e
    },
    i.icon_equip_i = function() {
        var e = new eui.Image;
        return this.icon_equip = e,
        e.height = 55,
        e.scaleX = 1,
        e.scaleY = 1,
        e.visible = !0,
        e.width = 55,
        e.x = 25,
        e.y = 25,
        e
    },
    i._Group1_i = function() {
        var e = new eui.Group;
        return e.x = 17,
        e.y = 90,
        e.elementsContent = [this.txt_clothName_i(), this.txt_pos_name_i()],
        e
    },
    i.txt_clothName_i = function() {
        var e = new eui.Label;
        return this.txt_clothName = e,
        e.fontFamily = "MFShangHei",
        e.size = 17.94915046041,
        e.textAlign = "left",
        e.textColor = 16773461,
        e.width = 120,
        e.x = 0,
        e.y = 17,
        e
    },
    i.txt_pos_name_i = function() {
        var e = new eui.Label;
        return this.txt_pos_name = e,
        e.size = 15.9548013616759,
        e.text = "脚部",
        e.textColor = 10343423,
        e.x = 0,
        e.y = 0,
        e
    },
    i._Image3_i = function() {
        var e = new eui.Image;
        return this._Image3 = e,
        e.scaleX = -1,
        e.source = "s___seer_jialaimg_png",
        e.visible = !0,
        e.x = 25,
        e.y = 5,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/view/MainPanelSeerViewSkin.exml"] = window.MainPanelSeerViewSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["btnUse", "equip_0", "equip_1", "equip_2", "equip_3", "equip_4"],
        this.height = 496,
        this.width = 489,
        this.elementsContent = [this.btnUse_i(), this._Image1_i(), this._Image2_i(), this._Image3_i(), this._Image4_i(), this._Image5_i(), this.equip_0_i(), this.equip_1_i(), this.equip_2_i(), this.equip_3_i(), this.equip_4_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i.btnUse_i = function() {
        var e = new eui.Image;
        return this.btnUse = e,
        e.source = "s___seer_btnuse_png",
        e.x = 184,
        e.y = 462,
        e
    },
    i._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "s___seer_tuoyuan5_png",
        e.x = 0,
        e.y = 120,
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "s___seer_tuoyuan4_png",
        e.visible = !0,
        e.x = 0,
        e.y = 253,
        e
    },
    i._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "s___seer_tuoyuan3_png",
        e.visible = !0,
        e.x = 0,
        e.y = 375,
        e
    },
    i._Image4_i = function() {
        var e = new eui.Image;
        return e.source = "s___seer_tuoyuan2_png",
        e.visible = !0,
        e.x = 301,
        e.y = 310,
        e
    },
    i._Image5_i = function() {
        var e = new eui.Image;
        return e.source = "s___seer_tuoyuan1_png",
        e.x = 342,
        e.y = 172,
        e
    },
    i.equip_0_i = function() {
        var e = new mainPanel.PlayerInfoEquipItem;
        return this.equip_0 = e,
        e.anchorOffsetX = 0,
        e.anchorOffsetY = 0,
        e.scaleX = 1,
        e.scaleY = 1,
        e.skinName = "PlayerinfoClothspositionItemSkin",
        e.visible = !0,
        e.x = 0,
        e.y = 0,
        e
    },
    i.equip_1_i = function() {
        var e = new mainPanel.PlayerInfoEquipItem;
        return this.equip_1 = e,
        e.anchorOffsetX = 0,
        e.anchorOffsetY = 0,
        e.scaleX = 1,
        e.scaleY = 1,
        e.skinName = "PlayerinfoClothspositionItemSkin",
        e.x = 0,
        e.y = 141,
        e
    },
    i.equip_2_i = function() {
        var e = new mainPanel.PlayerInfoEquipItem;
        return this.equip_2 = e,
        e.anchorOffsetX = 0,
        e.anchorOffsetY = 0,
        e.scaleX = 1,
        e.scaleY = 1,
        e.skinName = "PlayerinfoClothspositionItemSkin",
        e.x = 0,
        e.y = 281,
        e
    },
    i.equip_3_i = function() {
        var e = new mainPanel.PlayerInfoEquipItem;
        return this.equip_3 = e,
        e.anchorOffsetX = 0,
        e.anchorOffsetY = 0,
        e.currentState = "onright",
        e.scaleX = 1,
        e.scaleY = 1,
        e.skinName = "PlayerinfoClothspositionItemSkin",
        e.x = 320,
        e.y = 51,
        e
    },
    i.equip_4_i = function() {
        var e = new mainPanel.PlayerInfoEquipItem;
        return this.equip_4 = e,
        e.anchorOffsetX = 0,
        e.anchorOffsetY = 0,
        e.currentState = "onright",
        e.scaleX = 1,
        e.scaleY = 1,
        e.skinName = "PlayerinfoClothspositionItemSkin",
        e.visible = !0,
        e.x = 320,
        e.y = 259,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/view/MainPanelPetViewSkin.exml"] = window.MainPanelPetViewSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["imgEmpty", "checkDefalut", "btnskin", "btnpet", "btnchange", "btnCheck", "grp_petCheck", "btnSearch", "txt_search", "Search", "btns", "list_head", "scr_head", "petGroup", "list_skin", "scr_skin", "skinGroup"],
        this.height = 501,
        this.width = 496,
        this.elementsContent = [this.imgEmpty_i(), this.btns_i(), this.petGroup_i(), this.skinGroup_i()]
    }
    __extends(t, e);
    var i = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["labelDisplay"],
            this.elementsContent = [this._Image1_i(), this._Image2_i(), this.labelDisplay_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image2", "visible", !1), new eui.SetProperty("labelDisplay", "visible", !0)]), new eui.State("down", [new eui.SetProperty("_Image2", "source", "select_show_mode_gou5_png")]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return e.source = "select_show_mode_searchbg_kb_png",
            e
        },
        i._Image2_i = function() {
            var e = new eui.Image;
            return this._Image2 = e,
            e.source = "select_show_mode_gou5_png",
            e.x = 4,
            e.y = 5,
            e
        },
        i.labelDisplay_i = function() {
            var e = new eui.Label;
            return this.labelDisplay = e,
            e.horizontalCenter = 0,
            e.verticalCenter = 0,
            e
        },
        t
    } (eui.Skin),
    n = t.prototype;
    return n.imgEmpty_i = function() {
        var e = new eui.Image;
        return this.imgEmpty = e,
        e.source = "select_show_mode_empty_tip_png",
        e.x = 156,
        e.y = 195,
        e
    },
    n.btns_i = function() {
        var e = new eui.Group;
        return this.btns = e,
        e.visible = !0,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this._Group1_i(), this.grp_petCheck_i(), this.Search_i()],
        e
    },
    n._Group1_i = function() {
        var e = new eui.Group;
        return e.visible = !0,
        e.x = 0,
        e.y = 466,
        e.elementsContent = [this._Image1_i(), this._Image2_i(), this._Image3_i(), this._Label1_i(), this.checkDefalut_i(), this.btnskin_i(), this.btnpet_i()],
        e
    },
    n._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "select_show_mode_juxing_25_png",
        e.visible = !0,
        e.x = 0,
        e.y = 0,
        e
    },
    n._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "select_show_mode_searchbg_kb_png",
        e.visible = !1,
        e.x = 21,
        e.y = 6,
        e
    },
    n._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "select_show_mode_gou5_png",
        e.visible = !1,
        e.x = 24,
        e.y = 12,
        e
    },
    n._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "展示首发精灵造型",
        e.textColor = 8631282,
        e.visible = !0,
        e.x = 50,
        e.y = 9,
        e
    },
    n.checkDefalut_i = function() {
        var e = new eui.CheckBox;
        return this.checkDefalut = e,
        e.visible = !0,
        e.x = 21,
        e.y = 6,
        e.skinName = i,
        e
    },
    n.btnskin_i = function() {
        var e = new eui.Image;
        return this.btnskin = e,
        e.source = "select_show_mode_btnskin_png",
        e.visible = !0,
        e.x = 386,
        e.y = 3,
        e
    },
    n.btnpet_i = function() {
        var e = new eui.Image;
        return this.btnpet = e,
        e.source = "select_show_mode_btnpet_png",
        e.visible = !1,
        e.x = 386,
        e.y = 3,
        e
    },
    n.grp_petCheck_i = function() {
        var e = new eui.Group;
        return this.grp_petCheck = e,
        e.x = 12,
        e.y = 0,
        e.elementsContent = [this.btnchange_i(), this.btnCheck_i()],
        e
    },
    n.btnchange_i = function() {
        var e = new eui.Image;
        return this.btnchange = e,
        e.source = "select_show_mode_btnchangeup_png",
        e.visible = !0,
        e.x = 112,
        e.y = 0,
        e
    },
    n.btnCheck_i = function() {
        var e = new eui.Image;
        return this.btnCheck = e,
        e.source = "select_show_mode_btnshuxing_up_png",
        e.visible = !0,
        e.x = 0,
        e.y = 0,
        e
    },
    n.Search_i = function() {
        var e = new eui.Group;
        return this.Search = e,
        e.height = 29,
        e.scaleX = 1,
        e.scaleY = 1,
        e.width = 160,
        e.x = 324,
        e.y = 4,
        e.elementsContent = [this._Image4_i(), this.btnSearch_i(), this.txt_search_i()],
        e
    },
    n._Image4_i = function() {
        var e = new eui.Image;
        return e.height = 29,
        e.source = "select_show_mode_Searchbg_png",
        e.width = 160,
        e.x = 0,
        e.y = 0,
        e
    },
    n.btnSearch_i = function() {
        var e = new eui.Image;
        return this.btnSearch = e,
        e.height = 29,
        e.source = "select_show_mode_btnSearch_png",
        e.width = 29,
        e.x = 131,
        e.y = 0,
        e
    },
    n.txt_search_i = function() {
        var e = new eui.EditableText;
        return this.txt_search = e,
        e.fontFamily = "MFShangHei",
        e.height = 16,
        e.prompt = "输入精灵名或ID",
        e.size = 16,
        e.text = "",
        e.textColor = 16777215,
        e.verticalCenter = "1.5",
        e.width = 114,
        e.x = 10,
        e
    },
    n.petGroup_i = function() {
        var e = new eui.Group;
        return this.petGroup = e,
        e.x = 7,
        e.y = 39,
        e.elementsContent = [this.scr_head_i()],
        e
    },
    n.scr_head_i = function() {
        var e = new eui.Scroller;
        return this.scr_head = e,
        e.height = 411,
        e.width = 482,
        e.viewport = this.list_head_i(),
        e
    },
    n.list_head_i = function() {
        var e = new eui.List;
        return this.list_head = e,
        e.layout = this._TileLayout1_i(),
        e
    },
    n._TileLayout1_i = function() {
        var e = new eui.TileLayout;
        return e.paddingBottom = 10,
        e.paddingLeft = 10,
        e.paddingTop = 10,
        e
    },
    n.skinGroup_i = function() {
        var e = new eui.Group;
        return this.skinGroup = e,
        e.height = 411,
        e.scaleX = 1,
        e.scaleY = 1,
        e.x = 60,
        e.y = 39,
        e.elementsContent = [this.scr_skin_i()],
        e
    },
    n.scr_skin_i = function() {
        var e = new eui.Scroller;
        return this.scr_skin = e,
        e.height = 420,
        e.width = 394,
        e.x = 0,
        e.y = 0,
        e.viewport = this.list_skin_i(),
        e
    },
    n.list_skin_i = function() {
        var e = new eui.List;
        return this.list_skin = e,
        e.layout = this._TileLayout2_i(),
        e
    },
    n._TileLayout2_i = function() {
        var e = new eui.TileLayout;
        return e.horizontalGap = 32,
        e.verticalGap = 10,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/view/MainPanelSceneViewSkin.exml"] = window.MainPanelSceneViewSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["btnSave", "_list", "_scor", "grp_bg", "btnShow", "btnCancel", "grp_sence"],
        this.height = 640,
        this.width = 496,
        this.elementsContent = [this.grp_sence_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i.grp_sence_i = function() {
        var e = new eui.Group;
        return this.grp_sence = e,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this.grp_bg_i(), this.btnShow_i(), this.btnCancel_i()],
        e
    },
    i.grp_bg_i = function() {
        var e = new eui.Group;
        return this.grp_bg = e,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this._Image1_i(), this._Image2_i(), this._Image3_i(), this.btnSave_i(), this._scor_i()],
        e
    },
    i._Image1_i = function() {
        var e = new eui.Image;
        return e.height = 640,
        e.source = "select_show_scene_seclectbg_png",
        e.width = 496,
        e.x = 0,
        e.y = 0,
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "select_show_scene_seclectbg_kb_png",
        e.x = 12,
        e.y = 53,
        e
    },
    i._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "select_show_scene_xzbj_png",
        e.x = 194,
        e.y = 15,
        e
    },
    i.btnSave_i = function() {
        var e = new eui.Image;
        return this.btnSave = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "select_show_scene_btnsave_png",
        e.x = 181,
        e.y = 572,
        e
    },
    i._scor_i = function() {
        var e = new eui.Scroller;
        return this._scor = e,
        e.height = 510,
        e.width = 430,
        e.x = 34,
        e.y = 52,
        e.viewport = this._list_i(),
        e
    },
    i._list_i = function() {
        var e = new eui.List;
        return this._list = e,
        e.height = 200,
        e.scaleX = 1,
        e.scaleY = 1,
        e.width = 200,
        e.x = 46,
        e.y = 81,
        e.layout = this._VerticalLayout1_i(),
        e
    },
    i._VerticalLayout1_i = function() {
        var e = new eui.VerticalLayout;
        return e
    },
    i.btnShow_i = function() {
        var e = new eui.Image;
        return this.btnShow = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "select_show_scene_quxiao_png",
        e.x = 410.9999999999999,
        e.y = 560,
        e
    },
    i.btnCancel_i = function() {
        var e = new eui.Image;
        return this.btnCancel = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "select_show_scene_yulan_png",
        e.x = 411.0000000000001,
        e.y = 560.0000000000001,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/NewkanpanSkin.exml"] = window.NewkanpanSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["btnSaveaa", "groupSet", "imgEmpty", "checkDefalut", "btnskin", "btnpet", "btnchange", "btnCheck", "grp_petCheck", "btnSearch", "txt_search", "Search", "btns", "list_head", "scr_head", "petGroup", "list_skin", "scr_skin", "skinGroup", "grp_pets", "btnUse", "equip_0", "equip_1", "equip_2", "equip_3", "equip_4", "txt_name1", "head", "txt_name3", "face", "txt_name5", "foot", "txt_name4", "waist", "txt_name2", "hand", "grp_seer", "tabPet", "tabEquipt", "_seerView", "_petView", "btnSave", "grp_zaoxing", "_sceneView", "grp_rightInfo", "rb2", "rb1", "showGroup", "modeIcon", "txtName", "nameGroup"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.groupSet_i(), this.grp_rightInfo_i(), this.showGroup_i(), this.nameGroup_i()]
    }
    __extends(t, e);
    var i = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["labelDisplay"],
            this.elementsContent = [this._Image1_i(), this._Image2_i(), this.labelDisplay_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image2", "visible", !1), new eui.SetProperty("labelDisplay", "visible", !0)]), new eui.State("down", [new eui.SetProperty("_Image2", "source", "select_show_mode_gou5_png")]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return e.source = "select_show_mode_searchbg_kb_png",
            e
        },
        i._Image2_i = function() {
            var e = new eui.Image;
            return this._Image2 = e,
            e.source = "select_show_mode_gou5_png",
            e.x = 4,
            e.y = 5,
            e
        },
        i.labelDisplay_i = function() {
            var e = new eui.Label;
            return this.labelDisplay = e,
            e.horizontalCenter = 0,
            e.verticalCenter = 0,
            e
        },
        t
    } (eui.Skin),
    n = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["labelDisplay"],
            this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "newkanpan_btnjingling_down_png"), new eui.SetProperty("_Image1", "x", -4), new eui.SetProperty("_Image1", "y", 1)]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.source = "newkanpan_btnjingling_up_png",
            e
        },
        i.labelDisplay_i = function() {
            var e = new eui.Label;
            return this.labelDisplay = e,
            e.horizontalCenter = 0,
            e.verticalCenter = 0,
            e
        },
        t
    } (eui.Skin),
    a = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["labelDisplay"],
            this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "x", -4), new eui.SetProperty("_Image1", "y", 1), new eui.SetProperty("_Image1", "source", "newkanpan_btnsaier_down_png")]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.percentHeight = 100,
            e.source = "newkanpan_btnsaier_up_png",
            e.percentWidth = 100,
            e
        },
        i.labelDisplay_i = function() {
            var e = new eui.Label;
            return this.labelDisplay = e,
            e.horizontalCenter = 0,
            e.verticalCenter = 0,
            e
        },
        t
    } (eui.Skin),
    s = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["img_icon", "labelDisplay"],
            this.elementsContent = [this.img_icon_i(), this.labelDisplay_i()],
            this.states = [new eui.State("up", []), new eui.State("down", []), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i.img_icon_i = function() {
            var e = new eui.Image;
            return this.img_icon = e,
            e.source = "newkanpan_btnbeijingup_png",
            e
        },
        i.labelDisplay_i = function() {
            var e = new eui.Label;
            return this.labelDisplay = e,
            e.horizontalCenter = 0,
            e.verticalCenter = 0,
            e
        },
        t
    } (eui.Skin),
    r = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["img_icon", "labelDisplay"],
            this.elementsContent = [this.img_icon_i(), this.labelDisplay_i()],
            this.states = [new eui.State("up", []), new eui.State("down", []), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i.img_icon_i = function() {
            var e = new eui.Image;
            return this.img_icon = e,
            e.source = "newkanpan_btnzaoxingup_png",
            e
        },
        i.labelDisplay_i = function() {
            var e = new eui.Label;
            return this.labelDisplay = e,
            e.horizontalCenter = 0,
            e.verticalCenter = 0,
            e
        },
        t
    } (eui.Skin),
    o = t.prototype;
    return o.groupSet_i = function() {
        var e = new eui.Group;
        return this.groupSet = e,
        e.horizontalCenter = -.5,
        e.visible = !0,
        e.y = 0,
        e.elementsContent = [this._Image1_i(), this._Image2_i(), this.btnSaveaa_i()],
        e
    },
    o._Image1_i = function() {
        var e = new eui.Image;
        return e.height = 125,
        e.source = "newkanpan_bottommask_png",
        e.width = 1135,
        e.x = 0,
        e.y = 515,
        e
    },
    o._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "newkanpan_hszz_png",
        e.visible = !0,
        e.x = 0,
        e.y = 0,
        e
    },
    o.btnSaveaa_i = function() {
        var e = new eui.Image;
        return this.btnSaveaa = e,
        e.source = "newkanpan_zu_33_png",
        e.visible = !1,
        e.x = 321,
        e.y = 572,
        e
    },
    o.grp_rightInfo_i = function() {
        var e = new eui.Group;
        return this.grp_rightInfo = e,
        e.visible = !0,
        e.x = 639,
        e.y = 0,
        e.elementsContent = [this.grp_pets_i(), this.grp_seer_i(), this.grp_zaoxing_i(), this._sceneView_i()],
        e
    },
    o.grp_pets_i = function() {
        var e = new eui.Group;
        return this.grp_pets = e,
        e.visible = !1,
        e.x = 1,
        e.y = 58,
        e.elementsContent = [this.imgEmpty_i(), this.btns_i(), this.petGroup_i(), this.skinGroup_i()],
        e
    },
    o.imgEmpty_i = function() {
        var e = new eui.Image;
        return this.imgEmpty = e,
        e.source = "select_show_mode_empty_tip_png",
        e.x = 156,
        e.y = 195,
        e
    },
    o.btns_i = function() {
        var e = new eui.Group;
        return this.btns = e,
        e.visible = !0,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this._Group1_i(), this.grp_petCheck_i(), this.Search_i()],
        e
    },
    o._Group1_i = function() {
        var e = new eui.Group;
        return e.visible = !0,
        e.x = 0,
        e.y = 466,
        e.elementsContent = [this._Image3_i(), this._Image4_i(), this._Image5_i(), this._Label1_i(), this.checkDefalut_i(), this.btnskin_i(), this.btnpet_i()],
        e
    },
    o._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "select_show_mode_juxing_25_png",
        e.visible = !0,
        e.x = 0,
        e.y = 0,
        e
    },
    o._Image4_i = function() {
        var e = new eui.Image;
        return e.source = "select_show_mode_searchbg_kb_png",
        e.visible = !1,
        e.x = 21,
        e.y = 6,
        e
    },
    o._Image5_i = function() {
        var e = new eui.Image;
        return e.source = "select_show_mode_gou5_png",
        e.visible = !1,
        e.x = 24,
        e.y = 12,
        e
    },
    o._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "展示首发精灵造型",
        e.textColor = 8631282,
        e.visible = !0,
        e.x = 50,
        e.y = 9,
        e
    },
    o.checkDefalut_i = function() {
        var e = new eui.CheckBox;
        return this.checkDefalut = e,
        e.visible = !0,
        e.x = 21,
        e.y = 6,
        e.skinName = i,
        e
    },
    o.btnskin_i = function() {
        var e = new eui.Image;
        return this.btnskin = e,
        e.source = "select_show_mode_btnskin_png",
        e.visible = !0,
        e.x = 386,
        e.y = 3,
        e
    },
    o.btnpet_i = function() {
        var e = new eui.Image;
        return this.btnpet = e,
        e.source = "select_show_mode_btnpet_png",
        e.visible = !1,
        e.x = 386,
        e.y = 3,
        e
    },
    o.grp_petCheck_i = function() {
        var e = new eui.Group;
        return this.grp_petCheck = e,
        e.x = 12,
        e.y = 0,
        e.elementsContent = [this.btnchange_i(), this.btnCheck_i()],
        e
    },
    o.btnchange_i = function() {
        var e = new eui.Image;
        return this.btnchange = e,
        e.source = "select_show_mode_btnchangeup_png",
        e.visible = !0,
        e.x = 112,
        e.y = 0,
        e
    },
    o.btnCheck_i = function() {
        var e = new eui.Image;
        return this.btnCheck = e,
        e.source = "select_show_mode_btnshuxing_up_png",
        e.visible = !0,
        e.x = 0,
        e.y = 0,
        e
    },
    o.Search_i = function() {
        var e = new eui.Group;
        return this.Search = e,
        e.height = 29,
        e.scaleX = 1,
        e.scaleY = 1,
        e.width = 160,
        e.x = 324,
        e.y = 4,
        e.elementsContent = [this._Image6_i(), this.btnSearch_i(), this.txt_search_i()],
        e
    },
    o._Image6_i = function() {
        var e = new eui.Image;
        return e.height = 29,
        e.source = "select_show_mode_Searchbg_png",
        e.width = 160,
        e.x = 0,
        e.y = 0,
        e
    },
    o.btnSearch_i = function() {
        var e = new eui.Image;
        return this.btnSearch = e,
        e.height = 29,
        e.source = "select_show_mode_btnSearch_png",
        e.width = 29,
        e.x = 131,
        e.y = 0,
        e
    },
    o.txt_search_i = function() {
        var e = new eui.EditableText;
        return this.txt_search = e,
        e.fontFamily = "MFShangHei",
        e.height = 16,
        e.prompt = "输入精灵名或ID",
        e.size = 16,
        e.text = "",
        e.textColor = 16777215,
        e.verticalCenter = "1.5",
        e.width = 114,
        e.x = 10,
        e
    },
    o.petGroup_i = function() {
        var e = new eui.Group;
        return this.petGroup = e,
        e.x = 7,
        e.y = 39,
        e.elementsContent = [this.scr_head_i()],
        e
    },
    o.scr_head_i = function() {
        var e = new eui.Scroller;
        return this.scr_head = e,
        e.height = 411,
        e.width = 482,
        e.viewport = this.list_head_i(),
        e
    },
    o.list_head_i = function() {
        var e = new eui.List;
        return this.list_head = e,
        e.layout = this._TileLayout1_i(),
        e
    },
    o._TileLayout1_i = function() {
        var e = new eui.TileLayout;
        return e.paddingBottom = 10,
        e.paddingLeft = 10,
        e.paddingTop = 10,
        e
    },
    o.skinGroup_i = function() {
        var e = new eui.Group;
        return this.skinGroup = e,
        e.height = 411,
        e.scaleX = 1,
        e.scaleY = 1,
        e.visible = !0,
        e.x = 60,
        e.y = 39,
        e.elementsContent = [this.scr_skin_i()],
        e
    },
    o.scr_skin_i = function() {
        var e = new eui.Scroller;
        return this.scr_skin = e,
        e.height = 420,
        e.width = 394,
        e.x = 0,
        e.y = 0,
        e.viewport = this.list_skin_i(),
        e
    },
    o.list_skin_i = function() {
        var e = new eui.List;
        return this.list_skin = e,
        e.layout = this._TileLayout2_i(),
        e
    },
    o._TileLayout2_i = function() {
        var e = new eui.TileLayout;
        return e.horizontalGap = 32,
        e.verticalGap = 10,
        e
    },
    o.grp_seer_i = function() {
        var e = new eui.Group;
        return this.grp_seer = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.visible = !1,
        e.x = 5.999999999999929,
        e.y = 63,
        e.elementsContent = [this.btnUse_i(), this.equip_0_i(), this.equip_1_i(), this.equip_2_i(), this.equip_3_i(), this.equip_4_i(), this.head_i(), this.face_i(), this.foot_i(), this.waist_i(), this.hand_i()],
        e
    },
    o.btnUse_i = function() {
        var e = new eui.Image;
        return this.btnUse = e,
        e.source = "s___seer_btnuse_png",
        e.x = 184,
        e.y = 462,
        e
    },
    o.equip_0_i = function() {
        var e = new mainPanel.PlayerInfoEquipItem;
        return this.equip_0 = e,
        e.anchorOffsetX = 0,
        e.anchorOffsetY = 0,
        e.scaleX = 1,
        e.scaleY = 1,
        e.skinName = "PlayerinfoClothspositionItemSkin",
        e.visible = !0,
        e.x = 0,
        e.y = 0,
        e
    },
    o.equip_1_i = function() {
        var e = new mainPanel.PlayerInfoEquipItem;
        return this.equip_1 = e,
        e.anchorOffsetX = 0,
        e.anchorOffsetY = 0,
        e.scaleX = 1,
        e.scaleY = 1,
        e.skinName = "PlayerinfoClothspositionItemSkin",
        e.x = 0,
        e.y = 141,
        e
    },
    o.equip_2_i = function() {
        var e = new mainPanel.PlayerInfoEquipItem;
        return this.equip_2 = e,
        e.anchorOffsetX = 0,
        e.anchorOffsetY = 0,
        e.scaleX = 1,
        e.scaleY = 1,
        e.skinName = "PlayerinfoClothspositionItemSkin",
        e.x = 0,
        e.y = 281,
        e
    },
    o.equip_3_i = function() {
        var e = new mainPanel.PlayerInfoEquipItem;
        return this.equip_3 = e,
        e.anchorOffsetX = 0,
        e.anchorOffsetY = 0,
        e.currentState = "onright",
        e.scaleX = 1,
        e.scaleY = 1,
        e.skinName = "PlayerinfoClothspositionItemSkin",
        e.x = 320,
        e.y = 51,
        e
    },
    o.equip_4_i = function() {
        var e = new mainPanel.PlayerInfoEquipItem;
        return this.equip_4 = e,
        e.anchorOffsetX = 0,
        e.anchorOffsetY = 0,
        e.currentState = "onright",
        e.scaleX = 1,
        e.scaleY = 1,
        e.skinName = "PlayerinfoClothspositionItemSkin",
        e.x = 320,
        e.y = 259,
        e
    },
    o.head_i = function() {
        var e = new eui.Group;
        return this.head = e,
        e.visible = !1,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this._Image7_i(), this._Image8_i(), this._Image9_i(), this.txt_name1_i(), this._Label2_i(), this._Image10_i()],
        e
    },
    o._Image7_i = function() {
        var e = new eui.Image;
        return e.source = "s___seer_suiticonbigbg_0_png",
        e.x = 1,
        e.y = 0,
        e
    },
    o._Image8_i = function() {
        var e = new eui.Image;
        return e.source = "s___seer_juxing_32_png",
        e.x = 18,
        e.y = 16,
        e
    },
    o._Image9_i = function() {
        var e = new eui.Image;
        return e.source = "s___seer_tuoyuan5_png",
        e.x = 0,
        e.y = 120,
        e
    },
    o.txt_name1_i = function() {
        var e = new eui.Label;
        return this.txt_name1 = e,
        e.fontFamily = "MFShangHei",
        e.size = 17.94915046041,
        e.text = "名称处名称处",
        e.textColor = 16773461,
        e.x = 18,
        e.y = 107,
        e
    },
    o._Label2_i = function() {
        var e = new eui.Label;
        return e.size = 15.9548013616759,
        e.text = "头部",
        e.textColor = 10343423,
        e.x = 18,
        e.y = 90,
        e
    },
    o._Image10_i = function() {
        var e = new eui.Image;
        return e.scaleX = -1,
        e.source = "s___seer_jialaimg_png",
        e.x = 26,
        e.y = 5,
        e
    },
    o.face_i = function() {
        var e = new eui.Group;
        return this.face = e,
        e.visible = !1,
        e.x = 0,
        e.y = 141,
        e.elementsContent = [this._Image11_i(), this._Image12_i(), this._Image13_i(), this.txt_name3_i(), this._Label3_i(), this._Image14_i()],
        e
    },
    o._Image11_i = function() {
        var e = new eui.Image;
        return e.source = "s___seer_suiticonbigbg_0_png",
        e.x = 1,
        e.y = 0,
        e
    },
    o._Image12_i = function() {
        var e = new eui.Image;
        return e.source = "s___seer_juxing_32_png",
        e.x = 18,
        e.y = 16,
        e
    },
    o._Image13_i = function() {
        var e = new eui.Image;
        return e.source = "s___seer_tuoyuan4_png",
        e.visible = !0,
        e.x = 0,
        e.y = 112,
        e
    },
    o.txt_name3_i = function() {
        var e = new eui.Label;
        return this.txt_name3 = e,
        e.fontFamily = "MFShangHei",
        e.size = 17.94915046041,
        e.text = "名称处名称处",
        e.textColor = 16773461,
        e.x = 18,
        e.y = 107,
        e
    },
    o._Label3_i = function() {
        var e = new eui.Label;
        return e.size = 15.9548013616759,
        e.text = "面部",
        e.textColor = 10343423,
        e.x = 18,
        e.y = 90,
        e
    },
    o._Image14_i = function() {
        var e = new eui.Image;
        return e.scaleX = -1,
        e.source = "s___seer_jialaimg_png",
        e.x = 26,
        e.y = 5,
        e
    },
    o.foot_i = function() {
        var e = new eui.Group;
        return this.foot = e,
        e.visible = !1,
        e.x = 0,
        e.y = 281,
        e.elementsContent = [this._Image15_i(), this._Image16_i(), this._Image17_i(), this.txt_name5_i(), this._Label4_i(), this._Image18_i()],
        e
    },
    o._Image15_i = function() {
        var e = new eui.Image;
        return e.source = "s___seer_suiticonbigbg_0_png",
        e.x = 1,
        e.y = 0,
        e
    },
    o._Image16_i = function() {
        var e = new eui.Image;
        return e.source = "s___seer_juxing_32_png",
        e.x = 18,
        e.y = 16,
        e
    },
    o._Image17_i = function() {
        var e = new eui.Image;
        return e.source = "s___seer_tuoyuan3_png",
        e.visible = !1,
        e.x = 0,
        e.y = 94,
        e
    },
    o.txt_name5_i = function() {
        var e = new eui.Label;
        return this.txt_name5 = e,
        e.fontFamily = "MFShangHei",
        e.size = 17.94915046041,
        e.text = "名称处名称处",
        e.textColor = 16773461,
        e.x = 18,
        e.y = 107,
        e
    },
    o._Label4_i = function() {
        var e = new eui.Label;
        return e.size = 15.9548013616759,
        e.text = "脚部",
        e.textColor = 10343423,
        e.x = 18,
        e.y = 90,
        e
    },
    o._Image18_i = function() {
        var e = new eui.Image;
        return e.scaleX = -1,
        e.source = "s___seer_jialaimg_png",
        e.visible = !0,
        e.x = 26,
        e.y = 5,
        e
    },
    o.waist_i = function() {
        var e = new eui.Group;
        return this.waist = e,
        e.visible = !1,
        e.x = 301,
        e.y = 259,
        e.elementsContent = [this._Image19_i(), this._Image20_i(), this._Image21_i(), this._Image22_i(), this.txt_name4_i(), this._Label5_i()],
        e
    },
    o._Image19_i = function() {
        var e = new eui.Image;
        return e.source = "s___seer_suiticonbigbg_0_png",
        e.x = 18,
        e.y = 0,
        e
    },
    o._Image20_i = function() {
        var e = new eui.Image;
        return e.source = "s___seer_juxing_32_png",
        e.x = 98,
        e.y = 16,
        e
    },
    o._Image21_i = function() {
        var e = new eui.Image;
        return e.source = "s___seer_tuoyuan2_png",
        e.x = 0,
        e.y = 51,
        e
    },
    o._Image22_i = function() {
        var e = new eui.Image;
        return e.source = "s___seer_jialaimg_png",
        e.x = 165,
        e.y = 3,
        e
    },
    o.txt_name4_i = function() {
        var e = new eui.Label;
        return this.txt_name4 = e,
        e.fontFamily = "MFShangHei",
        e.size = 17.94915046041,
        e.text = "名称处名称处",
        e.textColor = 16773461,
        e.x = 63,
        e.y = 107,
        e
    },
    o._Label5_i = function() {
        var e = new eui.Label;
        return e.size = 15.9548013616759,
        e.text = "腰部",
        e.textColor = 10343423,
        e.x = 139,
        e.y = 90,
        e
    },
    o.hand_i = function() {
        var e = new eui.Group;
        return this.hand = e,
        e.visible = !1,
        e.x = 320,
        e.y = 51,
        e.elementsContent = [this._Image23_i(), this._Image24_i(), this._Image25_i(), this.txt_name2_i(), this._Label6_i(), this._Image26_i()],
        e
    },
    o._Image23_i = function() {
        var e = new eui.Image;
        return e.source = "s___seer_suiticonbigbg_0_png",
        e.visible = !0,
        e.x = 0,
        e.y = 0,
        e
    },
    o._Image24_i = function() {
        var e = new eui.Image;
        return e.source = "s___seer_juxing_32_png",
        e.x = 79,
        e.y = 16,
        e
    },
    o._Image25_i = function() {
        var e = new eui.Image;
        return e.source = "s___seer_tuoyuan1_png",
        e.x = 22,
        e.y = 121,
        e
    },
    o.txt_name2_i = function() {
        var e = new eui.Label;
        return this.txt_name2 = e,
        e.fontFamily = "MFShangHei",
        e.size = 17.94915046041,
        e.text = "名称处名称处",
        e.textColor = 16773461,
        e.x = 44,
        e.y = 107,
        e
    },
    o._Label6_i = function() {
        var e = new eui.Label;
        return e.size = 15.9548013616759,
        e.text = "手部",
        e.textColor = 10343423,
        e.x = 119,
        e.y = 90,
        e
    },
    o._Image26_i = function() {
        var e = new eui.Image;
        return e.source = "s___seer_jialaimg_png",
        e.x = 146,
        e.y = 3,
        e
    },
    o.grp_zaoxing_i = function() {
        var e = new eui.Group;
        return this.grp_zaoxing = e,
        e.visible = !0,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this._Group2_i(), this._seerView_i(), this._petView_i(), this._Image29_i(), this.btnSave_i()],
        e
    },
    o._Group2_i = function() {
        var e = new eui.Group;
        return e.x = 1,
        e.y = 0,
        e.elementsContent = [this._Image27_i(), this._Image28_i(), this._Label7_i(), this.tabPet_i(), this.tabEquipt_i()],
        e
    },
    o._Image27_i = function() {
        var e = new eui.Image;
        return e.height = 640,
        e.source = "newkanpan_seclectbg_png",
        e.visible = !0,
        e.width = 496,
        e.x = 0,
        e.y = 0,
        e
    },
    o._Image28_i = function() {
        var e = new eui.Image;
        return e.source = "newkanpan_seclectbg_kb_png",
        e.x = 12,
        e.y = 53,
        e
    },
    o._Label7_i = function() {
        var e = new eui.Label;
        return e.size = 26,
        e.text = "自定义设置",
        e.textColor = 8757203,
        e.visible = !1,
        e.x = 182,
        e.y = 14,
        e
    },
    o.tabPet_i = function() {
        var e = new eui.RadioButton;
        return this.tabPet = e,
        e.groupName = "signGroup",
        e.scaleX = 1,
        e.scaleY = 1,
        e.value = "1",
        e.x = 8,
        e.y = 11,
        e.skinName = n,
        e
    },
    o.tabEquipt_i = function() {
        var e = new eui.RadioButton;
        return this.tabEquipt = e,
        e.groupName = "signGroup",
        e.scaleX = 1,
        e.scaleY = 1,
        e.value = "2",
        e.x = 244,
        e.y = 11,
        e.skinName = a,
        e
    },
    o._seerView_i = function() {
        var e = new mainPanel.MainPanelSeerView;
        return this._seerView = e,
        e.skinName = "MainPanelSeerViewSkin",
        e.visible = !0,
        e.x = 6,
        e.y = 63,
        e
    },
    o._petView_i = function() {
        var e = new mainPanel.MainPanelPetView;
        return this._petView = e,
        e.skinName = "MainPanelPetViewSkin",
        e.visible = !0,
        e.x = 6,
        e.y = 63,
        e
    },
    o._Image29_i = function() {
        var e = new eui.Image;
        return e.source = "newkanpan_jx_22_kb_2_png",
        e.visible = !0,
        e.x = 0,
        e.y = 558,
        e
    },
    o.btnSave_i = function() {
        var e = new eui.Image;
        return this.btnSave = e,
        e.source = "newkanpan_btnsave_png",
        e.x = 182,
        e.y = 572,
        e
    },
    o._sceneView_i = function() {
        var e = new mainPanel.MainPanelSceneView;
        return this._sceneView = e,
        e.skinName = "MainPanelSceneViewSkin",
        e.visible = !1,
        e.x = 0,
        e.y = 0,
        e
    },
    o.showGroup_i = function() {
        var e = new eui.Group;
        return this.showGroup = e,
        e.left = 13,
        e.visible = !0,
        e.y = 401,
        e.elementsContent = [this.rb2_i(), this.rb1_i()],
        e
    },
    o.rb2_i = function() {
        var e = new eui.RadioButton;
        return this.rb2 = e,
        e.groupName = "groupMode",
        e.value = "2",
        e.x = 17,
        e.y = 87,
        e.skinName = s,
        e
    },
    o.rb1_i = function() {
        var e = new eui.RadioButton;
        return this.rb1 = e,
        e.groupName = "groupMode",
        e.value = "1",
        e.x = 17,
        e.y = 9,
        e.skinName = r,
        e
    },
    o.nameGroup_i = function() {
        var e = new eui.Group;
        return this.nameGroup = e,
        e.bottom = 81,
        e.horizontalCenter = -185.5,
        e.scaleX = 1,
        e.scaleY = 1,
        e.visible = !0,
        e.elementsContent = [this._Image30_i(), this.modeIcon_i(), this.txtName_i()],
        e
    },
    o._Image30_i = function() {
        var e = new eui.Image;
        return e.source = "select_show_mode_namebg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    o.modeIcon_i = function() {
        var e = new eui.Image;
        return this.modeIcon = e,
        e.source = "select_show_mode_nameicon1_png",
        e.x = 18,
        e.y = 4,
        e
    },
    o.txtName_i = function() {
        var e = new eui.Label;
        return this.txtName = e,
        e.fontFamily = "MFShangHei",
        e.horizontalCenter = 11.5,
        e.size = 28,
        e.text = "精灵名字预留九个字",
        e.textColor = 16777215,
        e.y = 14,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/render/KanBanNiangPetHeadSkin.exml"] = window.KanBanNiangPetHeadSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["icon", "selctedFlag", "txtName", "txtID", "tag"],
        this.height = 136,
        this.width = 112,
        this.elementsContent = [this._Image1_i(), this.icon_i(), this.selctedFlag_i(), this.txtName_i(), this.txtID_i(), this.tag_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Image1_i = function() {
        var e = new eui.Image;
        return e.height = 122,
        e.source = "common_pet_head_bg_png",
        e.visible = !0,
        e.width = 100,
        e.x = 6,
        e.y = 5,
        e
    },
    i.icon_i = function() {
        var e = new eui.Image;
        return this.icon = e,
        e.height = 92,
        e.source = "",
        e.width = 95,
        e.x = 8,
        e.y = 6.536,
        e
    },
    i.selctedFlag_i = function() {
        var e = new eui.Image;
        return this.selctedFlag = e,
        e.height = 152,
        e.scale9Grid = new egret.Rectangle(40, 36, 20, 24),
        e.source = "newkanpan_xzk_kb_png",
        e.visible = !0,
        e.width = 132,
        e.x = -11,
        e.y = -10,
        e
    },
    i.txtName_i = function() {
        var e = new eui.Label;
        return this.txtName = e,
        e.fontFamily = "MFShangHei",
        e.horizontalCenter = 0,
        e.size = 16,
        e.text = "精灵名字最多",
        e.textAlign = "center",
        e.textColor = 10539775,
        e.y = 103,
        e
    },
    i.txtID_i = function() {
        var e = new eui.Label;
        return this.txtID = e,
        e.fontFamily = "MFShangHei",
        e.size = 20,
        e.stroke = 1,
        e.strokeColor = 1973795,
        e.text = "3211",
        e.textColor = 10539775,
        e.x = 10,
        e.y = 9,
        e
    },
    i.tag_i = function() {
        var e = new eui.Image;
        return this.tag = e,
        e.source = "newkanpan_zsz_png",
        e.x = 8,
        e.y = 8,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/render/KanBanNiangPetSKinSkin.exml"] = window.KanBanNiangPetSKinSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["icon", "selctedFlag", "txtName", "tag"],
        this.height = 286,
        this.width = 176,
        this.elementsContent = [this._Image1_i(), this.icon_i(), this._Image2_i(), this.selctedFlag_i(), this.txtName_i(), this.tag_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "select_show_mode_skinItemBg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.icon_i = function() {
        var e = new eui.Image;
        return this.icon = e,
        e.height = 277,
        e.horizontalCenter = 0,
        e.source = "",
        e.verticalCenter = 0,
        e.width = 168,
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.height = 29,
        e.horizontalCenter = 0,
        e.source = "select_show_modeskin_itembg_png",
        e.visible = !0,
        e.width = 168,
        e.y = 252.83,
        e
    },
    i.selctedFlag_i = function() {
        var e = new eui.Image;
        return this.selctedFlag = e,
        e.height = 286,
        e.scale9Grid = new egret.Rectangle(12, 12, 1, 1),
        e.source = "select_show_mode_head_select_png",
        e.visible = !0,
        e.width = 176,
        e.x = 0,
        e.y = 0,
        e
    },
    i.txtName_i = function() {
        var e = new eui.Label;
        return this.txtName = e,
        e.fontFamily = "MFShangHei",
        e.horizontalCenter = .5,
        e.size = 18,
        e.stroke = 1,
        e.strokeColor = 0,
        e.text = "漆墨白羽·米瑞斯",
        e.textAlign = "center",
        e.textColor = 10539775,
        e.y = 258.214,
        e
    },
    i.tag_i = function() {
        var e = new eui.Image;
        return this.tag = e,
        e.source = "newkanpan_zsz_png",
        e.x = 8,
        e.y = 8,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/render/KanBanNiangSceneSKinSkin.exml"] = window.KanBanNiangSceneSKin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["senceBg", "curEq", "txt_desc", "grp_lock", "scentName", "selctedFlag", "bgItem"],
        this.height = 252,
        this.width = 430,
        this.elementsContent = [this.bgItem_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i.bgItem_i = function() {
        var e = new eui.Group;
        return this.bgItem = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.elementsContent = [this._Image1_i(), this.senceBg_i(), this.curEq_i(), this._Image2_i(), this.grp_lock_i(), this.scentName_i(), this.selctedFlag_i()],
        e
    },
    i._Image1_i = function() {
        var e = new eui.Image;
        return e.height = 232,
        e.scale9Grid = new egret.Rectangle(4, 3, 5, 5),
        e.source = "select_show_scene_juxing_899_png",
        e.visible = !0,
        e.width = 410,
        e.x = 9,
        e.y = 9,
        e
    },
    i.senceBg_i = function() {
        var e = new eui.Image;
        return this.senceBg = e,
        e.visible = !0,
        e.x = 10,
        e.y = 10,
        e
    },
    i.curEq_i = function() {
        var e = new eui.Image;
        return this.curEq = e,
        e.source = "select_show_scene_zbz_png",
        e.x = 11,
        e.y = 11,
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "select_show_scene_juxing_897_png",
        e.visible = !0,
        e.x = 11,
        e.y = 210,
        e
    },
    i.grp_lock_i = function() {
        var e = new eui.Group;
        return this.grp_lock = e,
        e.visible = !0,
        e.x = 10,
        e.y = 10,
        e.elementsContent = [this._Image3_i(), this._Image4_i(), this.txt_desc_i(), this._Image5_i()],
        e
    },
    i._Image3_i = function() {
        var e = new eui.Image;
        return e.height = 230,
        e.scale9Grid = new egret.Rectangle(4, 4, 4, 4),
        e.source = "select_show_scene_juxing_898_png",
        e.width = 408,
        e.x = 0,
        e.y = 0,
        e
    },
    i._Image4_i = function() {
        var e = new eui.Image;
        return e.source = "select_show_scene_jx_898_kb_png",
        e.x = 0,
        e.y = 86,
        e
    },
    i.txt_desc_i = function() {
        var e = new eui.Label;
        return this.txt_desc = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "参与“活动具体名称名称”活动获得",
        e.textAlign = "center",
        e.textColor = 12834813,
        e.width = 350,
        e.x = 30,
        e.y = 92,
        e
    },
    i._Image5_i = function() {
        var e = new eui.Image;
        return e.source = "select_show_scene_jiantou1_png",
        e.x = 387,
        e.y = 89,
        e
    },
    i.scentName_i = function() {
        var e = new eui.Label;
        return this.scentName = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "基础背景",
        e.textColor = 9025023,
        e.x = 178,
        e.y = 216,
        e
    },
    i.selctedFlag_i = function() {
        var e = new eui.Image;
        return this.selctedFlag = e,
        e.height = 252,
        e.scale9Grid = new egret.Rectangle(14, 14, 13, 13),
        e.source = "select_show_scene_xzk_kb_png",
        e.visible = !0,
        e.width = 430,
        e.x = 0,
        e.y = 0,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/render/MainPanelPageActCenterPageSkin.exml"] = window.MainPanelPageActCenterPageSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["imgAct", "imgLast", "scaleGroup"],
        this.height = 121,
        this.width = 291,
        this.elementsContent = [this.scaleGroup_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i.scaleGroup_i = function() {
        var e = new eui.Group;
        return this.scaleGroup = e,
        e.height = 121,
        e.scaleX = 1,
        e.scaleY = 1,
        e.width = 291,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this.imgAct_i(), this.imgLast_i()],
        e
    },
    i.imgAct_i = function() {
        var e = new eui.Image;
        return this.imgAct = e,
        e.height = 121,
        e.scaleX = 1,
        e.scaleY = 1,
        e.width = 291,
        e.x = 0,
        e.y = 0,
        e
    },
    i.imgLast_i = function() {
        var e = new eui.Image;
        return this.imgLast = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "main_panel_page_act_center_imglastday_png",
        e.visible = !1,
        e.x = 180,
        e.y = 89,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/render/MainPanelPageActCenterProgressSkin.exml"] = window.MainPanelPageActCenterProgressSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["progress"],
        this.height = 7,
        this.elementsContent = [this._Image1_i(), this.progress_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Image1_i = function() {
        var e = new eui.Image;
        return e.height = 3,
        e.left = 0,
        e.right = 0,
        e.scale9Grid = new egret.Rectangle(0, 0, 50, 3),
        e.source = "main_panel_page_act_center_probg_png",
        e.verticalCenter = 0,
        e
    },
    i.progress_i = function() {
        var e = new eui.Image;
        return this.progress = e,
        e.left = 0,
        e.right = 0,
        e.scale9Grid = new egret.Rectangle(2, 4, 46, 2),
        e.source = "main_panel_page_act_center_progress_png",
        e.verticalCenter = 0,
        e.visible = !1,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/SelectShowSceneSkin.exml"] = window.SelectShowSceneSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["bg", "btnSave", "yulan", "quxiao", "bgItem2", "juxing_899", "zu_38", "zbz", "juxing_897_2", "jcbj", "xzk_kb", "bgItem", "_list", "_scor", "grp_sence"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this.grp_sence_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i.bg_i = function() {
        var e = new eui.Image;
        return this.bg = e,
        e.source = "select_show_scene_bg_jpg",
        e.x = 0,
        e.y = 0,
        e
    },
    i.grp_sence_i = function() {
        var e = new eui.Group;
        return this.grp_sence = e,
        e.visible = !0,
        e.x = 640,
        e.y = 0,
        e.elementsContent = [this._Image1_i(), this._Image2_i(), this._Image3_i(), this.btnSave_i(), this.yulan_i(), this.quxiao_i(), this._Group1_i(), this._scor_i()],
        e
    },
    i._Image1_i = function() {
        var e = new eui.Image;
        return e.height = 640,
        e.source = "select_show_scene_seclectbg_png",
        e.width = 496,
        e.x = 0,
        e.y = 0,
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "select_show_scene_seclectbg_kb_png",
        e.x = 12,
        e.y = 53,
        e
    },
    i._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "select_show_scene_xzbj_png",
        e.x = 194,
        e.y = 15,
        e
    },
    i.btnSave_i = function() {
        var e = new eui.Image;
        return this.btnSave = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "select_show_scene_btnsave_png",
        e.x = 181,
        e.y = 572,
        e
    },
    i.yulan_i = function() {
        var e = new eui.Image;
        return this.yulan = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "select_show_scene_yulan_png",
        e.x = 410.9999999999999,
        e.y = 560,
        e
    },
    i.quxiao_i = function() {
        var e = new eui.Image;
        return this.quxiao = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "select_show_scene_quxiao_png",
        e.x = 410.9999999999999,
        e.y = 560,
        e
    },
    i._Group1_i = function() {
        var e = new eui.Group;
        return e.x = 34,
        e.y = 52,
        e.elementsContent = [this.bgItem2_i(), this.bgItem_i()],
        e
    },
    i.bgItem2_i = function() {
        var e = new eui.Group;
        return this.bgItem2 = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.visible = !0,
        e.x = 10,
        e.y = 252,
        e.elementsContent = [this._Image4_i(), this._Image5_i(), this._Image6_i(), this._Label1_i(), this._Image7_i(), this._Image8_i(), this._Label2_i()],
        e
    },
    i._Image4_i = function() {
        var e = new eui.Image;
        return e.source = "select_show_scene_lqlpjx32hsipgpjnakjnbmiwm0vb2emrtawd8jmv7ab_aa_1224_584_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i._Image5_i = function() {
        var e = new eui.Image;
        return e.height = 230,
        e.scale9Grid = new egret.Rectangle(4, 4, 4, 4),
        e.source = "select_show_scene_juxing_898_png",
        e.width = 408,
        e.x = 0,
        e.y = 0,
        e
    },
    i._Image6_i = function() {
        var e = new eui.Image;
        return e.source = "select_show_scene_jx_898_kb_png",
        e.x = 0,
        e.y = 86,
        e
    },
    i._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "参与“活动具体名称名称”活动获得",
        e.textColor = 12834813,
        e.x = 70,
        e.y = 92,
        e
    },
    i._Image7_i = function() {
        var e = new eui.Image;
        return e.source = "select_show_scene_jiantou1_png",
        e.x = 387,
        e.y = 89,
        e
    },
    i._Image8_i = function() {
        var e = new eui.Image;
        return e.source = "select_show_scene_juxing_897_png",
        e.x = 1,
        e.y = 200,
        e
    },
    i._Label2_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "荧光绿背景",
        e.textColor = 9025023,
        e.x = 157,
        e.y = 205,
        e
    },
    i.bgItem_i = function() {
        var e = new eui.Group;
        return this.bgItem = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.visible = !0,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this.juxing_899_i(), this.zu_38_i(), this.zbz_i(), this.juxing_897_2_i(), this.jcbj_i(), this.xzk_kb_i()],
        e
    },
    i.juxing_899_i = function() {
        var e = new eui.Image;
        return this.juxing_899 = e,
        e.height = 232,
        e.scale9Grid = new egret.Rectangle(4, 3, 5, 5),
        e.source = "select_show_scene_juxing_899_png",
        e.width = 410,
        e.x = 9,
        e.y = 9,
        e
    },
    i.zu_38_i = function() {
        var e = new eui.Image;
        return this.zu_38 = e,
        e.source = "select_show_scene_zu_38_png",
        e.x = 10,
        e.y = 10,
        e
    },
    i.zbz_i = function() {
        var e = new eui.Image;
        return this.zbz = e,
        e.source = "select_show_scene_zbz_png",
        e.x = 11,
        e.y = 11,
        e
    },
    i.juxing_897_2_i = function() {
        var e = new eui.Image;
        return this.juxing_897_2 = e,
        e.source = "select_show_scene_juxing_897_png",
        e.x = 11,
        e.y = 210,
        e
    },
    i.jcbj_i = function() {
        var e = new eui.Label;
        return this.jcbj = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "基础背景",
        e.textColor = 9025023,
        e.x = 178,
        e.y = 216,
        e
    },
    i.xzk_kb_i = function() {
        var e = new eui.Image;
        return this.xzk_kb = e,
        e.height = 252,
        e.scale9Grid = new egret.Rectangle(14, 14, 13, 13),
        e.source = "select_show_scene_xzk_kb_png",
        e.visible = !0,
        e.width = 430,
        e.x = 0,
        e.y = 0,
        e
    },
    i._scor_i = function() {
        var e = new eui.Scroller;
        return this._scor = e,
        e.height = 510,
        e.width = 430,
        e.x = 34,
        e.y = 52,
        e.viewport = this._list_i(),
        e
    },
    i._list_i = function() {
        var e = new eui.List;
        return this._list = e,
        e.height = 200,
        e.scaleX = 1,
        e.scaleY = 1,
        e.width = 200,
        e.x = 46,
        e.y = 81,
        e
    },
    t
} (eui.Skin);