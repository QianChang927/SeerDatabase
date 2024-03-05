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
personalInformation; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t.skinName = SelectCarPopSkin,
            t
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            var i = this;
            e.prototype.childrenCreated.call(this),
            this._list.itemRenderer = t.SelectCarPopItem,
            this.txtSearch.addEventListener(egret.Event.CHANGE, this.onSearchChanged, this),
            ImageButtonUtil.add(this.close, this.hide, this),
            ImageButtonUtil.add(this.btnSearch, this.onSearchChanged, this),
            ImageButtonUtil.add(this.dress,
            function() {
                var t = MainManager.actorInfo.mountId,
                e = ~~i._list.selectedItem;
                MountManager.changeMount(t != e ? e: 0, i.updateView, i)
            },
            this),
            EventManager.addEventListener("SelectCarPopItem_carIcon", this.updateDesc, this),
            this.updateView()
        },
        i.prototype.updateView = function() {
            this.updateData(),
            this.updateDesc()
        },
        i.prototype.updateDesc = function() {
            var t = ~~this._list.selectedItem;
            if (t > 0) {
                var e = ItemXMLInfo.getName(t);
                this.curCarName.text = e,
                this.curSelectCar.source = ClientConfig.getMountIcon(t);
                var i = ItemTipXMLInfo.getItemDes(t);
                this.curCarDesc.text = i ? i: "无";
                var n = MainManager.actorInfo.mountId;
                this.dress.source = n != t ? "select_car_pop_dress_png": "select_car_pop_unDress_png"
            } else this.curCarName.text = "",
            this.curSelectCar.source = "",
            this.curCarDesc.text = "",
            this.dress.source = ""
        },
        i.prototype.onSearchChanged = function(t) {
            var e = this.txtSearch.text.trim();
            this.scroller.viewport.scrollV = 0;
            var i = ItemXMLInfo.getAllMount().map(Number);
            i.sort(function(t, e) {
                return e - t
            });
            var n = ItemManager.GetHoldClothesIDs("mount");
            if (e.length > 0) {
                for (var r = [], o = 0; o < i.length; o++) {
                    var a = ItemXMLInfo.getName(~~i[o]);
                    SearchUtil.isMatch(e, a) && n.indexOf(i[o]) > -1 && r.push(i[o])
                }
                this._list.dataProvider = new eui.ArrayCollection(r),
                this.none.visible = r.length <= 0,
                r.length > 0 && this._list.setSelectedIndex(0)
            } else this.updateData()
        },
        i.prototype.updateData = function() {
            var t = [];
            this.scroller.stopAnimation(),
            this.scroller.viewport.scrollV = 0;
            var e = ItemXMLInfo.getAllMount().map(Number);
            e.sort(function(t, e) {
                return e - t
            });
            var i = ItemManager.GetHoldClothesIDs("mount"),
            n = MainManager.actorInfo.mountId;
            n > 0 && t.push(n);
            for (var r = 0; r < e.length; r++) i.indexOf(e[r]) > -1 && e[r] != n && t.push(e[r]);
            this._list.dataProvider = new eui.ArrayCollection(t),
            this.none.visible = t.length <= 0,
            t.length > 0 && this._list.setSelectedIndex(0)
        },
        i.prototype.destroy = function() {
            e.prototype.destroy.call(this),
            this.txtSearch.removeEventListener(egret.Event.CHANGE, this.onSearchChanged, this)
        },
        i
    } (PopView);
    t.SelectCarPop = e,
    __reflect(e.prototype, "personalInformation.SelectCarPop")
} (personalInformation || (personalInformation = {}));
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
        function a(t) {
            try {
                h(n.next(t))
            } catch(e) {
                o(e)
            }
        }
        function s(t) {
            try {
                h(n["throw"](t))
            } catch(e) {
                o(e)
            }
        }
        function h(t) {
            t.done ? r(t.value) : new i(function(e) {
                e(t.value)
            }).then(a, s)
        }
        h((n = n.apply(t, e || [])).next())
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
        for (; h;) try {
            if (r = 1, o && (a = o[2 & i[0] ? "return": i[0] ? "throw": "next"]) && !(a = a.call(o, i[1])).done) return a;
            switch (o = 0, a && (i = [0, a.value]), i[0]) {
            case 0:
            case 1:
                a = i;
                break;
            case 4:
                return h.label++,
                {
                    value: i[1],
                    done: !1
                };
            case 5:
                h.label++,
                o = i[1],
                i = [0];
                continue;
            case 7:
                i = h.ops.pop(),
                h.trys.pop();
                continue;
            default:
                if (a = h.trys, !(a = a.length > 0 && a[a.length - 1]) && (6 === i[0] || 2 === i[0])) {
                    h = 0;
                    continue
                }
                if (3 === i[0] && (!a || i[1] > a[0] && i[1] < a[3])) {
                    h.label = i[1];
                    break
                }
                if (6 === i[0] && h.label < a[1]) {
                    h.label = a[1],
                    a = i;
                    break
                }
                if (a && h.label < a[2]) {
                    h.label = a[2],
                    h.ops.push(i);
                    break
                }
                a[2] && h.ops.pop(),
                h.trys.pop();
                continue
            }
            i = e.call(t, h)
        } catch(n) {
            i = [6, n],
            o = 0
        } finally {
            r = a = 0
        }
        if (5 & i[0]) throw i[1];
        return {
            value: i[0] ? i[1] : void 0,
            done: !0
        }
    }
    var r, o, a, s, h = {
        label: 0,
        sent: function() {
            if (1 & a[0]) throw a[1];
            return a[1]
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
personalInformation; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e._pageMap = [108162, 108163, 108164, 108165, 108166, 108167, 108168, 108169, 108170, 108171, 108172, 108173, 108174, 108175, 108176],
            e._SuitMap = {},
            e
        }
        return __extends(e, t),
        e.GetInstance = function() {
            return e._instance || (e._instance = new e),
            e._instance
        },
        e.destroy = function() {
            e._instance = null
        },
        e.prototype.InitData = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var t;
                return __generator(this,
                function(e) {
                    switch (e.label) {
                    case 0:
                        return [4, KTool.getMultiValueAsync(this._pageMap)];
                    case 1:
                        return t = e.sent(),
                        this._setSuitData(t),
                        [2, Promise.resolve()]
                    }
                })
            })
        },
        e.prototype._setSuitData = function(t) {
            this._SuitMap = {};
            for (var e = 0; e < t.length; e++) {
                var i = "page_" + (Math.floor(e / 5) + 1);
                this._SuitMap[i] || (this._SuitMap[i] = []),
                this._SuitMap[i].push(t[e])
            }
            for (var n in this._SuitMap) this._SuitMap[n] = this._SuitMap[n].filter(function(t) {
                return t > 0
            })
        },
        e.prototype.SaveSuit = function(t, e) {
            return __awaiter(this, void 0, void 0,
            function() {
                var i, n;
                return __generator(this,
                function(r) {
                    switch (r.label) {
                    case 0:
                        for (i = new egret.ByteArray, i.writeUnsignedInt(t), i.writeUnsignedInt(e.length), n = 0; n < e.length; n++) i.writeUnsignedInt(e[n]);
                        return [4, SocketConnection.sendWithPromise(42410, [i])];
                    case 1:
                        return r.sent(),
                        this._updateSuit(t, e),
                        [2, Promise.resolve()]
                    }
                })
            })
        },
        e.prototype.ChangeSaveSuit = function(t) {
            return __awaiter(this, void 0, void 0,
            function() {
                var e;
                return __generator(this,
                function(i) {
                    switch (i.label) {
                    case 0:
                        return e = this.GetSuit(t),
                        [4, MainManager.actorInfo.ChangeClothes(e)];
                    case 1:
                        return i.sent(),
                        [2, Promise.resolve()]
                    }
                })
            })
        },
        e.prototype._updateSuit = function(t, e) {
            this._SuitMap["page_" + t] = e
        },
        e.prototype.GetSuit = function(t) {
            return this._SuitMap["page_" + t]
        },
        e._instance = null,
        e
    } (egret.EventDispatcher);
    t.DataMgr = e,
    __reflect(e.prototype, "personalInformation.DataMgr")
} (personalInformation || (personalInformation = {}));
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
personalInformation; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.skinName = OtherEquitItemSkin,
            e
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this),
            this.initEvents()
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
            this._vo = this.data;
            var t = this._vo;
            t.equipId > 0 ? (this.partsName.text = "", this.partsIcon.source = ItemXMLInfo.getIconURL(t.equipId), this.partsIcon.visible = !0) : (this.partsName.text = "无", this.partsIcon.visible = !1)
        },
        e.prototype.getVo = function() {
            return this._vo
        },
        e.prototype.destroy = function() {
            this.removeEvents()
        },
        e
    } (eui.ItemRenderer);
    t.OterPlayerInfoEquipItem = e,
    __reflect(e.prototype, "personalInformation.OterPlayerInfoEquipItem")
} (personalInformation || (personalInformation = {}));
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
        function a(t) {
            try {
                h(n.next(t))
            } catch(e) {
                o(e)
            }
        }
        function s(t) {
            try {
                h(n["throw"](t))
            } catch(e) {
                o(e)
            }
        }
        function h(t) {
            t.done ? r(t.value) : new i(function(e) {
                e(t.value)
            }).then(a, s)
        }
        h((n = n.apply(t, e || [])).next())
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
        for (; h;) try {
            if (r = 1, o && (a = o[2 & i[0] ? "return": i[0] ? "throw": "next"]) && !(a = a.call(o, i[1])).done) return a;
            switch (o = 0, a && (i = [0, a.value]), i[0]) {
            case 0:
            case 1:
                a = i;
                break;
            case 4:
                return h.label++,
                {
                    value: i[1],
                    done: !1
                };
            case 5:
                h.label++,
                o = i[1],
                i = [0];
                continue;
            case 7:
                i = h.ops.pop(),
                h.trys.pop();
                continue;
            default:
                if (a = h.trys, !(a = a.length > 0 && a[a.length - 1]) && (6 === i[0] || 2 === i[0])) {
                    h = 0;
                    continue
                }
                if (3 === i[0] && (!a || i[1] > a[0] && i[1] < a[3])) {
                    h.label = i[1];
                    break
                }
                if (6 === i[0] && h.label < a[1]) {
                    h.label = a[1],
                    a = i;
                    break
                }
                if (a && h.label < a[2]) {
                    h.label = a[2],
                    h.ops.push(i);
                    break
                }
                a[2] && h.ops.pop(),
                h.trys.pop();
                continue
            }
            i = e.call(t, h)
        } catch(n) {
            i = [6, n],
            o = 0
        } finally {
            r = a = 0
        }
        if (5 & i[0]) throw i[1];
        return {
            value: i[0] ? i[1] : void 0,
            done: !0
        }
    }
    var r, o, a, s, h = {
        label: 0,
        sent: function() {
            if (1 & a[0]) throw a[1];
            return a[1]
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
personalInformation; !
function(t) {
    var e; !
    function(t) {
        t[t.PLAYER_INFO = 1] = "PLAYER_INFO",
        t[t.EQUIP_INFO = 2] = "EQUIP_INFO"
    } (e = t.NavBarType || (t.NavBarType = {}));
    var i; !
    function(t) {
        t.HEAD = "head",
        t.FACE = "eye",
        t.HAND = "hand",
        t.WAIST = "waist",
        t.Foot = "foot"
    } (i = t.CLOTH_TYPE || (t.CLOTH_TYPE = {}));
    var n = function(n) {
        function r(t) {
            var e = n.call(this) || this;
            return e.tl = null,
            e._equipTypeChList = ["头部", "面部", "手部", "腰部", "脚部"],
            e._showLeftPageAniTm = 300,
            e._hideLeftAniTm = 200,
            e._initMaskWidthList = [],
            void 0 != t && (e.data = t, e._currentOpenWindow = e.data.type),
            e.skinName = PersonalinformationmeSkin,
            e
        }
        return __extends(r, n),
        r.prototype.checkCar = function() {
            var t = MainManager.actorInfo.mountId;
            GameInfo.isChecking || (t > 0 ? (this.carIcon.source = ClientConfig.getMountIcon(t), this.carGroup.visible = !0, this.addCar.visible = !1) : (this.carIcon.source = "", 1 == this._currentSelectNavBarType && (this.carGroup.visible = !1), this.addCar.visible = !0))
        },
        r.prototype.openFire = function() {
            if (null != this.data) switch (this._currentOpenWindow) {
            case 1:
                ModuleManager.showModule("battleFirePanel", ["battleFirePanel"], null, null, AppDoStyle.NULL);
                break;
            case 2:
                this.openChangeView();
                break;
            case 3:
                this._currentSelectNavBarType = e.EQUIP_INFO,
                this.fireGroup.visible = !1
            }
        },
        r.prototype.childrenCreated = function() {
            var i = this;
            n.prototype.childrenCreated.call(this),
            this.adaptLeftContent(this.grp_left),
            this.adaptRightContent(this.grp_right),
            this.adaptLeftContent(this.grpPolicy),
            StatLogger.log("20221028版本系统功能", "个人信息面板整理", "进入个人信息面板"),
            this.dotRe.visible = !!HotRedManager.getInstance().getHotRedState(1004),
            GuideManager.isNewSeer() && (this.dotRe.visible = !1);
            var r = e.PLAYER_INFO;
            this._currentSelectNavBarType = r,
            this._playerView = new ClothPreview,
            this.grp_playerStyle.addChild(this._playerView),
            this._playerView.setPosition(0, 0);
            for (var o = 0; 5 > o; o++) this["lineIcon_" + o].mask = this["lineMask_" + o],
            this._initMaskWidthList.push(this["lineMask_" + o].width);
            t.DataMgr.GetInstance().InitData().then(function() {
                i._onChangeHead(),
                i.initEvents(),
                i.initView(),
                i.updateBattleFire(),
                i.xiafangdi.mask = i._mask,
                i.resize()
            }),
            this.gotoSuitBtn.name = "btnSuit",
            this.btnClose.name = "btnClose",
            this.img_btn_allDress.name = "btnAllDressUp",
            this.ground_back.width < egret.lifecycle.stage.stageWidth && (this.ground_back.width = egret.lifecycle.stage.stageWidth)
        },
        r.prototype.resize = function() {
            var t = this;
            this.grp_PolicyBtns.layout.gap = egret.lifecycle.stage.stageWidth / 1136 * 30,
            egret.setTimeout(function() {
                t.line1.x = t.grp_PolicyBtns.x + (t.grp_PolicyBtns.getChildAt(0).x + t.grp_PolicyBtns.getChildAt(1).x) / 2,
                t.line2.x = t.grp_PolicyBtns.x + (t.grp_PolicyBtns.getChildAt(2).x + t.grp_PolicyBtns.getChildAt(1).x) / 2
            },
            this, 500)
        },
        r.prototype.reShow = function() {
            var t = this;
            this.txt_military.text = AchieveManager.getAchieveTitle(),
            this.militaryname.text = AchieveManager.getAchieveTitle(),
            this.militarypoint.text = MainManager.actorInfo.totalAchieve + "";
            var e = AchieveManager.getCurAchieveInfo();
            this.military_icon.source = ClientConfig.getAchieveRankIcon(e.id),
            AchieveManager.getOutsideRedState().then(function(e) {
                t.imgAchieveRedDot.visible = e
            })
        },
        r.prototype.initView = function() {
            var i = this;
            this.redPoint = new eui.Image("main_act_button_redPoint_png"),
            this.redPoint.right = -10,
            this.redPoint.y = -10,
            this.redPoint.width = this.redPoint.height = 20,
            this.headContainer.addChild(this.redPoint),
            this.redDotEvent(),
            this.redDotCardEvent(),
            AchieveManager.getOutsideRedState().then(function(t) {
                i.imgAchieveRedDot.visible = t
            }),
            this.txt_nickName.text = MainManager.actorInfo.nick;
            var n = config.Profilephoto.getItem(MainManager.actorInfo.nickBg);
            this.nameBg.source = ClientConfig.getTitleBg(n.icon),
            this.txt_Id.text = MainManager.actorInfo.userID + "";
            var r = new Date(1e3 * MainManager.actorInfo.regTime),
            o = r.getFullYear().toString() + "/" + (r.getMonth() + 1).toString() + "/" + r.getDate().toString();
            this.txt_Time.text = o,
            this.txt_military.text = AchieveManager.getAchieveTitle();
            var a = this,
            s = function() {
                a._playerView.removeEventListener(ClothPreview.EVENT_UPDATE_SIZE_AND_POS, s, a);
                var t = 1;
                a._playerView.alpha = 0,
                egret.Tween.get(this._playerView).to({
                    alpha: t
                },
                500)
            };
            this._playerView.addEventListener(ClothPreview.EVENT_UPDATE_SIZE_AND_POS, s, this),
            this._playerView.show(MainManager.actorInfo.clothes),
            this.txt_title.text = AchieveXMLInfo.getTitle(MainManager.actorInfo.curTitle),
            this.vip.visible = MainManager.actorInfo.isVip,
            this.noVip.visible = !MainManager.actorInfo.isVip,
            this.vipLv.text = String(MainManager.actorInfo.vipLevel),
            0 == MainManager.actorInfo.teamInfo.id ? (this.teamNameTx.text = "暂未加入", this.joinTeamBtn.visible = !0, this.LookTeamBtn.visible = !1) : TeamInfoManager.getSimpleTeamInfo(MainManager.actorInfo.teamInfo.id,
            function(t) {
                i.teamNameTx.text = "" + t.name,
                i.joinTeamBtn.visible = !1,
                i.LookTeamBtn.visible = !0
            }),
            this.militaryname.text = AchieveManager.getAchieveTitle(),
            this.militarypoint.text = MainManager.actorInfo.totalAchieve + "";
            var h = AchieveManager.getCurAchieveInfo();
            this.military_icon.source = ClientConfig.getAchieveRankIcon(h.id),
            this.group_equip.visible = !1,
            this.Grp_SuitBtn.visible = !1,
            this.SuitInfo.visible = !1,
            this.suit_left.visible = !1,
            this.info_left.visible = !1,
            this.btnResource.visible = !1,
            this.ownerInfoBtn.visible = !1,
            this.gotoSuitBtn.visible = !1,
            this.doneWearBtn.visible = !1,
            this.img_btn_allDisboard.visible = !1,
            this.img_btn_allDress.visible = !1,
            this.list_suitPage.itemRenderer = t.SuitPageItem,
            this.list_suitPage.dataProvider = new eui.ArrayCollection([1, 2, 3]),
            this.openFire(),
            this.checkCar(),
            this._updateViewByNavBar(),
            this._currentSelectNavBarType === e.PLAYER_INFO ? this._playShowInfoNavBarEffs() : this._playShowEquipNavBarEffs(),
            GameInfo.isChecking && (this.vipinfo.visible = this.CombatTeam.visible = this.MilitaryRank.visible = !1, this.grpPolicy.visible = !1, this.ownerInfoBtn.visible = !1, this.fireGroup.visible = !1, this.carGroup.visible = !1)
        },
        r.prototype.initEvents = function() {
            MainManager.actorInfo.addEventListener(UserInfoEvent.EVENT_CHANGE_NICKNAME, this.updatePlayerNickName, this),
            MainManager.actorInfo.addEventListener(UserInfoEvent.EVENT_CHANGE_CLOTHERS, this.onChangedClothersEventHanlder, this),
            MainManager.actorInfo.addEventListener(UserInfoEvent.EVENT_CHANGE_TITLE, this.updateTitle, this);
            for (var e = 0; 5 > e; e++) this["equip_" + e].addEventListener(t.EventKeys.EVENT_TOUCHTAP_CLOTH_ITEM, this.onTouchClothItemHandler, this);
            ImageButtonUtil.add(this.LookTeamBtn, this.onTouchImageButtonHandler, this),
            ImageButtonUtil.add(this.btnClose, this.onTouchImageButtonHandler, this),
            ImageButtonUtil.add(this.img_btn_changeName, this.onTouchImageButtonHandler, this),
            ImageButtonUtil.add(this.img_btn_changeTitle, this.onTouchImageButtonHandler, this),
            ImageButtonUtil.add(this.vipBtn, this.onTouchImageButtonHandler, this),
            ImageButtonUtil.add(this.joinTeamBtn, this.onTouchImageButtonHandler, this),
            ImageButtonUtil.add(this.detailsBtn, this.onTouchImageButtonHandler, this),
            ImageButtonUtil.add(this.TitleInfo, this.onTouchImageButtonHandler, this),
            ImageButtonUtil.add(this.vipinfo, this.onTouchImageButtonHandler, this),
            ImageButtonUtil.add(this.CombatTeam, this.onTouchImageButtonHandler, this),
            ImageButtonUtil.add(this.MilitaryRank, this.onTouchImageButtonHandler, this),
            ImageButtonUtil.add(this.gotoSuitBtn, this.onTouchImageButtonHandler, this),
            ImageButtonUtil.add(this.ownerInfoBtn, this.onTouchImageButtonHandler, this),
            ImageButtonUtil.add(this.img_btn_allDisboard, this.onTouchImageButtonHandler, this),
            ImageButtonUtil.add(this.img_btn_allDress, this.onTouchImageButtonHandler, this),
            ImageButtonUtil.add(this.doneWearBtn, this.onTouchImageButtonHandler, this),
            ImageButtonUtil.add(this.txt_changeHead, this.onTouchImageButtonHandler, this, !1, !1),
            ImageButtonUtil.add(this.btnUse, this.onTouchImageButtonHandler, this, !1, !1),
            ImageButtonUtil.add(this.btnSave, this.onTouchImageButtonHandler, this, !1, !1),
            ImageButtonUtil.add(this.img_btn_exchangeCode, this.onTouchImageButtonHandler, this, !1, !1),
            ImageButtonUtil.add(this.btnPrivacyPolicy, this.onPriviePolicy, this),
            ImageButtonUtil.add(this.btnResource, this.onResource, this),
            ImageButtonUtil.add(this.btnAccountCenter, this.onAccountCenter, this),
            ImageButtonUtil.add(this.btnCustomer, this.onCustomer, this),
            ImageButtonUtil.add(this.carPop, this.onCarPop, this, !1, !1),
            this.avatar_icon.addEventListener(egret.TouchEvent.TOUCH_TAP, this._onOpenHeadView, this),
            MainManager.actorInfo.addEventListener(UserInfoEvent.EVENT_CHANGE_HEAD_ID, this._onChangeHead, this),
            MainManager.actorInfo.addEventListener(UserInfoEvent.EVENT_CHANGE_HEAD_FRAME_ID, this._onChangeHead, this),
            ImageButtonUtil.add(this.btnfire, this.onTouchImageButtonHandler, this),
            EventManager.addEventListener("battleFireUpdateInfo", this.updateBattleFire, this),
            this.list_suitPage.addEventListener(eui.ItemTapEvent.ITEM_TAP, this._onChangeSuit, this),
            EventManager.addEventListener("RedPointEvent", this.redDotEvent, this),
            EventManager.addEventListener("RedPointCardEvent", this.redDotCardEvent, this),
            EventManager.addEventListener(MountManager.CHANGE_MOUNT_UPDATE, this.checkCar, this),
            EventManager.addEventListener(UserInfoEvent.EVENT_CHANGE_NICKNAME_FRAME_ID, this.updatePlayerNickName, this),
            egret.lifecycle.stage.addEventListener(egret.Event.RESIZE, this.resize, this)
        },
        r.prototype.removeEvents = function() {
            MainManager.actorInfo.removeEventListener(UserInfoEvent.EVENT_CHANGE_NICKNAME, this.updatePlayerNickName, this),
            MainManager.actorInfo.removeEventListener(UserInfoEvent.EVENT_CHANGE_CLOTHERS, this.onChangedClothersEventHanlder, this),
            MainManager.actorInfo.removeEventListener(UserInfoEvent.EVENT_CHANGE_TITLE, this.updateTitle, this),
            MainManager.actorInfo.removeEventListener(UserInfoEvent.EVENT_CHANGE_HEAD_ID, this._onChangeHead, this),
            MainManager.actorInfo.removeEventListener(UserInfoEvent.EVENT_CHANGE_HEAD_FRAME_ID, this._onChangeHead, this),
            this.avatar_icon.removeEventListener(egret.TouchEvent.TOUCH_TAP, this._onOpenHeadView, this);
            for (var e = 0; 5 > e; e++) this["equip_" + e].removeEventListener(t.EventKeys.EVENT_TOUCHTAP_CLOTH_ITEM, this.onTouchClothItemHandler, this);
            EventManager.removeAll(this),
            ImageButtonUtil.removeAll(this),
            this.list_suitPage.removeEventListener(eui.ItemTapEvent.ITEM_TAP, this._onChangeSuit, this),
            egret.lifecycle.stage.removeEventListener(egret.Event.RESIZE, this.resize, this)
        },
        r.prototype.onResource = function() {
            var e = this;
            StatLogger.log("20221028版本系统功能", "个人信息面板整理", "点击【资源中心】按钮"),
            this.dotRe.visible && SocketConnection.sendByQueue(45800, [1004],
            function(t) {
                e.dotRe.visible = !1
            });
            var i = PopViewManager.createDefaultStyleObject();
            PopViewManager.getInstance().openView(new t.ResourceCenterAct, i)
        },
        r.prototype.onPriviePolicy = function() {
            StatLogger.log("20221028版本系统功能", "个人信息面板整理", "点击【隐私保护】按钮"),
            PopViewManager.getInstance().openView(new t.PersonalinformationPolicyPop)
        },
        r.prototype.onAccountCenter = function() {
            StatLogger.log("20221028版本系统功能", "个人信息面板整理", "点击【账户中心】按钮"),
            TaomeeSDKManager.personal()
        },
        r.prototype.onCustomer = function() {
            StatLogger.log("20221028版本系统功能", "个人信息面板整理", "点击【客服平台】按钮"),
            TaomeeSDKManager.customer()
        },
        r.prototype.onCarPop = function() {
            PopViewManager.getInstance().openView(new t.SelectCarPop)
        },
        r.prototype.redDotEvent = function() {
            for (var t = config.Profilephoto.getItems().filter(function(t) {
                return 3 != t.type
            }), e = 0, i = t; e < i.length; e++) {
                var n = i[e];
                if (core.AvatarDataMgr.GetInstance().GetIsNewFlag(n.id)) return void(this.redPoint.visible = !0)
            }
            this.redPoint.visible = !1
        },
        r.prototype.redDotCardEvent = function() {
            for (var t = config.Profilephoto.getItems().filter(function(t) {
                return 3 == t.type
            }), e = 0, i = t; e < i.length; e++) {
                var n = i[e];
                if (core.AvatarDataMgr.GetInstance().GetIsNewFlag(n.id)) return void(this.reddotCard.visible = !0)
            }
            this.reddotCard.visible = !1
        },
        r.prototype._onChangeSuit = function(t) {
            var e = this,
            i = t.itemRenderer.selected;
            i ? (this._currentSelctedPage = 0, this._closeSuitPage(), this.list_suitPage.selectedItem = null, this._currentSelctedClothes = null) : (this._currentSelctedPage = t.item, this.Grp_SuitBtn.visible ? this._updateSuitBtns() : this._updateSuitBtns().then(function() {
                e._openSuitPage()
            }))
        },
        r.prototype._updateSuitBtns = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                return __generator(this,
                function(e) {
                    return this._currentSelctedClothes = t.DataMgr.GetInstance().GetSuit(this._currentSelctedPage),
                    DisplayUtil.setEnabled(this.btnUse, this._currentSelctedClothes.length > 0, !(this._currentSelctedClothes.length > 0)),
                    [2, Promise.resolve()]
                })
            })
        },
        r.prototype._openSuitPage = function() {
            this.Grp_SuitBtn.alpha = 0,
            this.Grp_SuitBtn.y = 50,
            this.Grp_SuitBtn.visible = !0,
            egret.Tween.get(this.Grp_SuitBtn).to({
                alpha: 1,
                y: -50
            },
            200)
        },
        r.prototype._closeSuitPage = function() {
            var t = this;
            egret.Tween.get(this.Grp_SuitBtn).to({
                alpha: 0,
                y: 50
            },
            100).call(function() {
                t.Grp_SuitBtn.visible = !1
            })
        },
        r.prototype._onChangeHead = function(t) {
            this.avatar_icon.setData({
                headId: MainManager.actorInfo.head_id,
                headFrameId: MainManager.actorInfo.head_frame_id
            })
        },
        r.prototype._onOpenHeadView = function(t) {
            ModuleManager.showModuleByID(35)
        },
        r.prototype.updateBattleFire = function(t) {
            var e = this;
            void 0 === t && (t = null),
            this.closeTimer(),
            BattleFireManager.getInstatnce().getBattleFireInfo().then(function(t) {
                var i = t[1],
                n = t[0],
                r = 0 == i || i > 0 && SystemTimerManager.time > i;
                r && (n = 0),
                e.btnfire.source = RES.getRes("personalInformation_btnfire" + n + "_png"),
                e.img.source = RES.getRes("personalInformation_img" + n + "_png"),
                e.img.visible = r,
                e.timebg.visible = !r,
                e.txt.visible = !r,
                e.leftTime = i - SystemTimerManager.time,
                e.txt.text = SystemTimerManager.getTimeClockString(e.leftTime, !1),
                r || e.startTimer()
            })
        },
        r.prototype.startTimer = function() {
            null == this.timer && (this.timer = new egret.Timer(1e3), this.timer.addEventListener(egret.TimerEvent.TIMER, this.timerHandle, this)),
            this.timer.start()
        },
        r.prototype.timerHandle = function(t) {
            this.leftTime > 0 && (this.leftTime--, this.txt.text = SystemTimerManager.getTimeClockString(this.leftTime, !1), this.leftTime <= 0 && (this.closeTimer(), this.updateBattleFire()))
        },
        r.prototype.closeTimer = function() {
            this.timer && (this.timer.stop(), this.timer.removeEventListener(egret.TimerEvent.TIMER, this.timerHandle, this), this.timer = null)
        },
        r.prototype.updateNavBarStyle = function() {
            this._updateViewByNavBar(),
            this._showChangeNavBarAni()
        },
        r.prototype._showChangeNavBarAni = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var t;
                return __generator(this,
                function(i) {
                    switch (i.label) {
                    case 0:
                        switch (this.clearAllTweens(), this.checkCar(), t = this._currentSelectNavBarType) {
                        case e.EQUIP_INFO:
                            return [3, 1];
                        case e.PLAYER_INFO:
                            return [3, 4]
                        }
                        return [3, 7];
                    case 1:
                        return [4, this._playHideInfoNavBarEffs()];
                    case 2:
                        return i.sent(),
                        [4, this._playShowEquipNavBarEffs()];
                    case 3:
                        return i.sent(),
                        [3, 7];
                    case 4:
                        return [4, this._playHideEquipNavBarEffs()];
                    case 5:
                        return i.sent(),
                        [4, this._playShowInfoNavBarEffs()];
                    case 6:
                        return i.sent(),
                        [3, 7];
                    case 7:
                        return [2, Promise.resolve()]
                    }
                })
            })
        },
        r.prototype._playShowInfoNavBarEffs = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var t;
                return __generator(this,
                function(e) {
                    switch (e.label) {
                    case 0:
                        return this.info_left.x = -this.info_left.width - 35,
                        this.info_left.visible = !0,
                        this.grp_curSuit.right = -this.grp_curSuit.width - 60,
                        this.grp_curSuit.visible = !0,
                        this.fireGroup.right = -this.fireGroup.width - 60,
                        this.fireGroup.visible = !0,
                        this.gotoSuitBtn.right = -this.gotoSuitBtn.width - 60,
                        this.gotoSuitBtn.visible = !0,
                        this.ownerInfoBtn.right = -this.ownerInfoBtn.width - 60,
                        this.ownerInfoBtn.visible = !0,
                        this.btnResource.right = -this.btnResource.width - 60,
                        this.btnResource.visible = !0,
                        this.grpPolicy.alpha = 0,
                        this.grpPolicy.visible = !0,
                        t = [],
                        t.push(common.TweenUtil.TweenToPromise(egret.Tween.get(this.info_left).to({
                            x: 19
                        },
                        this._showLeftPageAniTm))),
                        t.push(common.TweenUtil.TweenToPromise(egret.Tween.get(this.grp_curSuit).to({
                            right: 36
                        },
                        this._showLeftPageAniTm))),
                        t.push(common.TweenUtil.TweenToPromise(egret.Tween.get(this.fireGroup).to({
                            right: 32
                        },
                        this._showLeftPageAniTm))),
                        t.push(common.TweenUtil.TweenToPromise(egret.Tween.get(this.gotoSuitBtn).to({
                            right: 31
                        },
                        this._showLeftPageAniTm))),
                        t.push(common.TweenUtil.TweenToPromise(egret.Tween.get(this.ownerInfoBtn).to({
                            right: 31
                        },
                        this._showLeftPageAniTm))),
                        t.push(common.TweenUtil.TweenToPromise(egret.Tween.get(this.btnResource).to({
                            right: 31
                        },
                        this._showLeftPageAniTm))),
                        [4, Promise.all(t)];
                    case 1:
                        return e.sent(),
                        GameInfo.isChecking || (this.grpPolicy.visible = !0, egret.Tween.get(this.grpPolicy).to({
                            alpha: 1
                        },
                        200)),
                        [2, Promise.resolve()]
                    }
                })
            })
        },
        r.prototype._playHideInfoNavBarEffs = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var t;
                return __generator(this,
                function(e) {
                    switch (e.label) {
                    case 0:
                        return t = [],
                        t.push(common.TweenUtil.TweenToPromise(egret.Tween.get(this.info_left).to({
                            x: -this.info_left.width - 35
                        },
                        this._hideLeftAniTm))),
                        t.push(common.TweenUtil.TweenToPromise(egret.Tween.get(this.grp_curSuit).to({
                            right: -this.grp_curSuit.width - 60
                        },
                        this._hideLeftAniTm))),
                        t.push(common.TweenUtil.TweenToPromise(egret.Tween.get(this.fireGroup).to({
                            right: -this.fireGroup.width - 60
                        },
                        this._hideLeftAniTm))),
                        t.push(common.TweenUtil.TweenToPromise(egret.Tween.get(this.gotoSuitBtn).to({
                            right: -this.gotoSuitBtn.width - 60
                        },
                        this._hideLeftAniTm))),
                        t.push(common.TweenUtil.TweenToPromise(egret.Tween.get(this.ownerInfoBtn).to({
                            right: -this.ownerInfoBtn.width - 60
                        },
                        this._hideLeftAniTm))),
                        t.push(common.TweenUtil.TweenToPromise(egret.Tween.get(this.btnResource).to({
                            right: -this.btnResource.width - 60
                        },
                        this._hideLeftAniTm))),
                        t.push(common.TweenUtil.TweenToPromise(egret.Tween.get(this.grpPolicy).to({
                            alpha: 0
                        },
                        this._hideLeftAniTm))),
                        [4, Promise.all(t)];
                    case 1:
                        return e.sent(),
                        this.info_left.visible = !1,
                        this.gotoSuitBtn.visible = !1,
                        this.btnResource.visible = !1,
                        this.ownerInfoBtn.visible = !1,
                        this.fireGroup.visible = !1,
                        this.grp_curSuit.visible = !1,
                        this.grpPolicy.visible = !1,
                        [2, Promise.resolve()]
                    }
                })
            })
        },
        r.prototype._playShowEquipNavBarEffs = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var t, e, i, n, e;
                return __generator(this,
                function(r) {
                    switch (r.label) {
                    case 0:
                        for (this.suit_left.x = -this.suit_left.width - 35, this.suit_left.visible = !0, this.SuitInfo.left = -this.SuitInfo.width, this.SuitInfo.visible = !0, this.doneWearBtn.right = -this.doneWearBtn.width - 60, this.doneWearBtn.visible = !0, this.img_btn_allDisboard.alpha = 0, this.img_btn_allDress.alpha = 0, this.img_btn_allDisboard.visible = this.img_btn_allDress.visible = !0, t = [], this.group_equip.visible = !0, e = 0; 5 > e; e++) this["equip_" + e].alpha = 0,
                        this["lineMask_" + e].width = 18,
                        t.push(common.TweenUtil.TweenToPromise(egret.Tween.get(this["lineMask_" + e]).to({
                            width: this._initMaskWidthList[e]
                        },
                        400)));
                        return egret.Tween.get(this.suit_left).to({
                            x: 27
                        },
                        this._showLeftPageAniTm),
                        egret.Tween.get(this.SuitInfo).to({
                            left: 0
                        },
                        this._showLeftPageAniTm),
                        egret.Tween.get(this.doneWearBtn).to({
                            right: 31
                        },
                        this._showLeftPageAniTm),
                        [4, Promise.all(t)];
                    case 1:
                        for (r.sent(), i = MainManager.actorInfo.mountId, 0 >= i && !GameInfo.isChecking && (this.carGroup.visible = !0, this.tl ? this.tl.isActive || this.tl.restart() : (this.tl = new gsap.core.Timeline, this.tl.from(this.carGroup, {
                            y: 600,
                            alpha: 0,
                            duration: .3
                        }))), n = [], e = 0; 5 > e; e++) n.push(common.TweenUtil.TweenToPromise(egret.Tween.get(this["equip_" + e]).to({
                            alpha: 1
                        },
                        200)));
                        return n.push(common.TweenUtil.TweenToPromise(egret.Tween.get(this.img_btn_allDisboard).to({
                            alpha: 1
                        },
                        300))),
                        n.push(common.TweenUtil.TweenToPromise(egret.Tween.get(this.img_btn_allDress).to({
                            alpha: 1
                        },
                        300))),
                        [4, Promise.all(n)];
                    case 2:
                        return r.sent(),
                        this._currentSelctedPage = 0,
                        this.list_suitPage.selectedItem = null,
                        this._currentSelctedClothes = null,
                        this.Grp_SuitBtn.visible = !1,
                        [2, Promise.resolve()]
                    }
                })
            })
        },
        r.prototype._playHideEquipNavBarEffs = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var t;
                return __generator(this,
                function(e) {
                    switch (e.label) {
                    case 0:
                        return this.img_btn_allDisboard.visible = this.img_btn_allDress.visible = !1,
                        this.group_equip.visible = !1,
                        t = [],
                        t.push(common.TweenUtil.TweenToPromise(egret.Tween.get(this.suit_left).to({
                            x: -this.suit_left.width - 35
                        },
                        this._hideLeftAniTm))),
                        t.push(common.TweenUtil.TweenToPromise(egret.Tween.get(this.doneWearBtn).to({
                            right: -this.doneWearBtn.width - 60
                        },
                        this._hideLeftAniTm))),
                        t.push(common.TweenUtil.TweenToPromise(egret.Tween.get(this.SuitInfo).to({
                            left: -this.SuitInfo.width
                        },
                        this._hideLeftAniTm))),
                        [4, Promise.all(t)];
                    case 1:
                        return e.sent(),
                        this.suit_left.visible = !1,
                        this.doneWearBtn.visible = this.SuitInfo.visible = !1,
                        [2, Promise.resolve()]
                    }
                })
            })
        },
        r.prototype.clearAllTweens = function() {
            egret.Tween.removeTweens(this.info_left),
            egret.Tween.removeTweens(this.suit_left),
            egret.Tween.removeTweens(this.img_btn_allDress),
            egret.Tween.removeTweens(this.img_btn_allDisboard);
            for (var t = 0; 5 > t; t++) egret.Tween.removeTweens(this["lineMask_" + t]),
            egret.Tween.removeTweens(this["equip_" + t])
        },
        r.prototype.onChangedClothersEventHanlder = function() {
            this._playerView.show(MainManager.actorInfo.clothes),
            this._updateViewByNavBar(),
            this._updateSuitPageState()
        },
        r.prototype.updatePlayerNickName = function() {
            this.txt_nickName.text = MainManager.actorInfo.nick;
            var t = config.Profilephoto.getItem(MainManager.actorInfo.nickBg);
            this.nameBg.source = ClientConfig.getTitleBg(t.icon)
        },
        r.prototype.updateTitle = function() {
            this.txt_title.text = AchieveXMLInfo.getTitle(MainManager.actorInfo.curTitle)
        },
        r.prototype._updateViewByNavBar = function() {
            this._updateEquipItem();
            var t = MainManager.actorInfo.clothIDs,
            e = SuitXMLInfo.getSuitIDs(t);
            if (this.txt_None.visible = !0, this.grp_showEff.visible = !1, e.length > 0) {
                var i = e[0],
                n = ItemSeXMLInfo.getSuitEff(i);
                this.txt_suitName.text = SuitXMLInfo.getName(i),
                this.txt_curSuit.text = SuitXMLInfo.getName(i) || "无",
                this.taozhuangbg.width = Math.max(187, this.txt_curSuit.width + 55),
                this.txt_suitDesc.text = n,
                this.grp_showEff.visible = !0,
                n ? (this.txt_None.visible = !1, this.txt_suitTag.visible = !0) : this.txt_suitTag.visible = !1
            } else this.txt_suitDesc.text = "",
            this.txt_curSuit.text = "无",
            this.taozhuangbg.width = Math.max(187, this.txt_curSuit.width + 55)
        },
        r.prototype._updateEquipItem = function() {
            for (var t = this._equipTypeChList.length,
            e = MainManager.actorInfo.clothIDs,
            n = [i.HEAD, i.FACE, i.HAND, i.WAIST, i.Foot], r = 0; t > r; r++) {
                var o = {};
                o.type = String(n[r]),
                o.typeName = this._equipTypeChList[r],
                o.equipId = 0,
                o.clothData = null;
                for (var a = 0; a < e.length; a++) {
                    var s = ClothXMLInfo.getItemInfo(e[a]);
                    s.type === String(n[r]) && (o.equipId = e[a], o.clothData = s)
                }
                var h = this["equip_" + r];
                h.setEquipData(o)
            }
        },
        r.prototype.onTouchClothItemHandler = function(t) {
            var e = t.data;
            try {
                var i = e.type,
                n = e.equipId ? e.equipId: 0;
                if (StatLogger.log("20211022版本系统功能", "个人信息优化", "点击" + i + "添加按钮"), n > 0) {
                    var r = {
                        clothesId: n,
                        onDisboardFun: this.onDisboardCallBackHandler,
                        changeFun: this.openClothesWareHouse,
                        caller: this
                    };
                    tipsPop.TipsPop.openClothesPop(r, null, !0)
                } else this.openClothesWareHouse(i, !1)
            } catch(o) {
                console.error("再处理点击装扮部位时候发生错误", o)
            }
        },
        r.prototype.onDisboardCallBackHandler = function(t) {
            MainManager.actorInfo.requestChangeClothes(t, 0,
            function() {
                BubblerManager.getInstance().showText("脱下装扮成功")
            },
            null, this)
        },
        r.prototype.openClothesWareHouse = function(t, e) {
            void 0 === e && (e = !0);
            var i = this.getHoldColthesIds(t);
            if (i.length > 0) {
                var n = {};
                n.caller = this,
                n.clothesIds = i,
                n.isEquit = e,
                n.type = t,
                n.getClothesIDsHanlder = this._onGetClothesIDsHanlder,
                n.onDressAllClothesHanlder = this._onDressAllClothesHanlder,
                n.onDressOneClothesHanlder = this._onDressOneClothesHanlder,
                ModuleManager.showModuleByID(54, n)
            } else BubblerManager.getInstance().showText("当前部位还没有任何装扮");
            this._onGetClothesIDsHanlder
        },
        r.prototype._onDressOneClothesHanlder = function(t, e) {
            var i = this;
            return new Promise(function(n, r) {
                MainManager.actorInfo.requestChangeClothes(t, e,
                function() {
                    return n()
                },
                null, i)
            })
        },
        r.prototype._onDressAllClothesHanlder = function(t) {
            var e = this;
            return new Promise(function(i, n) {
                MainManager.actorInfo.requestChangeClotherBySuit(t,
                function() {
                    return i()
                },
                null, e)
            })
        },
        r.prototype._onSetTempClothes = function(t) {
            this._playerView.show(MainManager.actorInfo.clothes)
        },
        r.prototype.onTouchImageButtonHandler = function(t) {
            switch (t.currentTarget) {
            case this.btnSave:
                this._savePage();
                break;
            case this.btnUse:
                this._usePage();
                break;
            case this.txt_changeHead:
                StatLogger.log("1023版本系统功能", "个人界面", "点击【更换头像】按钮"),
                this._onOpenHeadView();
                break;
            case this.btnClose:
                this.onClose();
                break;
            case this.img_btn_changeName:
                if (GameInfo.isSpecialTime) return void BubblerManager.getInstance().showText("功能维护中");
                StatLogger.log("1023版本系统功能", "个人界面", "点击【笔头】修改昵称"),
                StatLogger.log("20211022版本系统功能", "个人信息优化", "点击改名按钮"),
                this.openChangeNameView();
                break;
            case this.TitleInfo:
            case this.img_btn_changeTitle:
                StatLogger.log("1023版本系统功能", "个人界面", "点击【更换称号】按钮"),
                StatLogger.log("20211022版本系统功能", "个人信息优化", "点击称号入口"),
                this.openChangeView();
                break;
            case this.vipinfo:
            case this.vipBtn:
                StatLogger.log("20211022版本系统功能", "个人信息优化", "点击VIP入口"),
                ModuleManager.showModuleByID(config.ModuleConst.VIP);
                break;
            case this.CombatTeam:
                StatLogger.log("20211022版本系统功能", "个人信息优化", "点击战队入口"),
                0 == MainManager.actorInfo.teamInfo.id ? ModuleManager.showModuleByID(73) : ModuleManager.showModuleByID(74);
                break;
            case this.joinTeamBtn:
                StatLogger.log("20211022版本系统功能", "个人信息优化", "点击战队入口"),
                ModuleManager.showModuleByID(73);
                break;
            case this.LookTeamBtn:
                StatLogger.log("20211022版本系统功能", "个人信息优化", "点击战队入口"),
                ModuleManager.showModuleByID(74);
                break;
            case this.MilitaryRank:
            case this.detailsBtn:
                StatLogger.log("1023版本系统功能", "个人界面", "点击【成就详情】按钮"),
                StatLogger.log("1030版本系统功能", "军衔成就", "点击【成就详情】"),
                StatLogger.log("20211022版本系统功能", "个人信息优化", "点击成就详细"),
                ModuleManager.showModule("achieve", ["achieve"], null, null, 2);
                break;
            case this.gotoSuitBtn:
                StatLogger.log("1023版本系统功能", "个人界面", "点击【编辑装扮】按钮"),
                StatLogger.log("20211022版本系统功能", "个人信息优化", "点击编辑装扮按钮"),
                this._currentSelectNavBarType = e.EQUIP_INFO,
                this.updateNavBarStyle();
                break;
            case this.img_btn_allDisboard:
                StatLogger.log("20211022版本系统功能", "个人信息优化", "点击一键卸下按钮"),
                this.allDisboard();
                break;
            case this.img_btn_allDress:
                StatLogger.log("20211022版本系统功能", "个人信息优化", "点击一件穿戴按钮"),
                this.openSuitView();
                break;
            case this.doneWearBtn:
                StatLogger.log("20211022版本系统功能", "个人信息优化", "点击基础信息按钮"),
                this._currentSelectNavBarType = e.PLAYER_INFO,
                this.updateNavBarStyle();
                break;
            case this.btnfire:
                StatLogger.log("1113版本系统功能", "个人信息", "点击【战斗火焰】按钮"),
                StatLogger.log("20211022版本系统功能", "个人信息优化", "点击火焰按钮"),
                ModuleManager.showModule("battleFirePanel", ["battleFirePanel"], null, null, AppDoStyle.NULL);
                break;
            case this.img_btn_exchangeCode:
                this.openExchangeCodeView();
                break;
            case this.ownerInfoBtn:
                StatLogger.log("20221028版本系统功能", "个人信息面板整理", "点击【信息展示】按钮"),
                ModuleManager.showModuleByID(12, MainManager.actorInfo.userID)
            }
        },
        r.prototype._savePage = function() {
            var e = this,
            i = MainManager.actorInfo.clothIDs;
            this._currentSelctedClothes.length > 0 ? Alert.show("是否覆盖原先的套装方案",
            function() {
                t.DataMgr.GetInstance().SaveSuit(e._currentSelctedPage, i).then(function() {
                    e._updateSuitBtns(),
                    e._updateSuitPageState(),
                    BubblerManager.getInstance().showText("套装方案记录成功")
                })
            }) : t.DataMgr.GetInstance().SaveSuit(this._currentSelctedPage, i).then(function() {
                e._updateSuitBtns(),
                e._updateSuitPageState(),
                BubblerManager.getInstance().showText("套装方案记录成功")
            })
        },
        r.prototype._usePage = function() {
            var e = this;
            t.DataMgr.GetInstance().ChangeSaveSuit(this._currentSelctedPage).then(function() {
                var t = ["一", "二", "三"];
                BubblerManager.getInstance().showText("方案" + t[e._currentSelctedPage - 1] + "替换成功")
            })
        },
        r.prototype.openChangeNameView = function() {
            PopViewManager.getInstance().openView(new t.PersonalinformationNameFramePop)
        },
        r.prototype.openChangeView = function() {
            var t = {};
            t.caller = this,
            t.getCurrentTitleIdFunc = this._getMyTitleId,
            t.onChangeHandler = this.onChangeTitleHanlder,
            ModuleManager.showModuleByID(51, t)
        },
        r.prototype.openExchangeCodeView = function() {
            var e = PopViewManager.createDefaultStyleObject();
            e.effStyle = null,
            PopViewManager.getInstance().openView(new t.ExchangeCodePopView)
        },
        r.prototype._getMyTitleId = function() {
            return MainManager.actorInfo.curTitle
        },
        r.prototype.onChangeTitleHanlder = function(t) {
            var e = this;
            return new Promise(function(i, n) {
                MainManager.actorInfo.requestChangeTitle(t.titleId,
                function() {
                    return i()
                },
                null, e)
            })
        },
        r.prototype.allDisboard = function() {
            var t = this;
            return MainManager.actorInfo.clothIDs.length <= 0 ? void BubblerManager.getInstance().showText("当前赛尔已经没有装扮") : void Alert.show("点击确认将卸下当前穿戴的所有装扮!",
            function() {
                MainManager.actorInfo.requestChangeClotherBySuit(0,
                function() {
                    BubblerManager.getInstance().showText("装扮已经全部卸下")
                },
                null, t)
            })
        },
        r.prototype.openSuitView = function() {
            var t = ItemManager.GetMySuitIds();
            if (0 === t.length) BubblerManager.getInstance().showText("你还没有获得任何套装哦！");
            else {
                var e = {};
                e.suitList = t,
                e.caller = this,
                e.onDressClothesHandler = this._onDressClothesHanlder,
                e.onGetclothIDsHandler = this._onGetClothesIDsHanlder,
                ModuleManager.showModuleByID(52, e)
            }
        },
        r.prototype._onGetClothesIDsHanlder = function() {
            return MainManager.actorInfo.clothIDs
        },
        r.prototype._onDressClothesHanlder = function(t) {
            var e = this;
            return new Promise(function(i, n) {
                MainManager.actorInfo.requestChangeClotherBySuit(t.suitId,
                function() {
                    return i()
                },
                null, e)
            })
        },
        r.prototype._updateSuitPageState = function() {
            for (var t = this.list_suitPage.dataProvider,
            e = t.source,
            i = 0; i < e.length; i++) t.itemUpdated(e[i])
        },
        r.prototype.destroy = function() {
            this.closeTimer(),
            this.removeEvents(),
            this.clearAllTweens(),
            this.tl && this.tl.clear(),
            egret.Tween.removeTweens(this._playerView),
            EventManager.dispatchEventWith("RedPointChangeEvent"),
            this._playerView.destroy(),
            n.prototype.destroy.call(this)
        },
        r.prototype.getHoldColthesIds = function(t) {
            var e = ItemManager.getClothIDs(),
            i = [];
            return e.forEach(function(e) {
                var n = ClothXMLInfo.getItemInfo(~~e).type;
                n === t && i.push(~~e)
            }),
            i
        },
        r
    } (BaseModule);
    t.PersonalInformation = n,
    __reflect(n.prototype, "personalInformation.PersonalInformation")
} (personalInformation || (personalInformation = {}));
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
        function a(t) {
            try {
                h(n.next(t))
            } catch(e) {
                o(e)
            }
        }
        function s(t) {
            try {
                h(n["throw"](t))
            } catch(e) {
                o(e)
            }
        }
        function h(t) {
            t.done ? r(t.value) : new i(function(e) {
                e(t.value)
            }).then(a, s)
        }
        h((n = n.apply(t, e || [])).next())
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
        for (; h;) try {
            if (r = 1, o && (a = o[2 & i[0] ? "return": i[0] ? "throw": "next"]) && !(a = a.call(o, i[1])).done) return a;
            switch (o = 0, a && (i = [0, a.value]), i[0]) {
            case 0:
            case 1:
                a = i;
                break;
            case 4:
                return h.label++,
                {
                    value: i[1],
                    done: !1
                };
            case 5:
                h.label++,
                o = i[1],
                i = [0];
                continue;
            case 7:
                i = h.ops.pop(),
                h.trys.pop();
                continue;
            default:
                if (a = h.trys, !(a = a.length > 0 && a[a.length - 1]) && (6 === i[0] || 2 === i[0])) {
                    h = 0;
                    continue
                }
                if (3 === i[0] && (!a || i[1] > a[0] && i[1] < a[3])) {
                    h.label = i[1];
                    break
                }
                if (6 === i[0] && h.label < a[1]) {
                    h.label = a[1],
                    a = i;
                    break
                }
                if (a && h.label < a[2]) {
                    h.label = a[2],
                    h.ops.push(i);
                    break
                }
                a[2] && h.ops.pop(),
                h.trys.pop();
                continue
            }
            i = e.call(t, h)
        } catch(n) {
            i = [6, n],
            o = 0
        } finally {
            r = a = 0
        }
        if (5 & i[0]) throw i[1];
        return {
            value: i[0] ? i[1] : void 0,
            done: !0
        }
    }
    var r, o, a, s, h = {
        label: 0,
        sent: function() {
            if (1 & a[0]) throw a[1];
            return a[1]
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
personalInformation; !
function(t) {
    var e = function(e) {
        function i(t) {
            void 0 === t && (t = null);
            var i = e.call(this, t) || this;
            return i._hideBtn = !1,
            i._equipTypeChList = ["头部", "面部", "手部", "腰部", "脚部"],
            "number" == typeof i.data ? i._uid = i.data: (i._uid = i.data.userId, i._hideBtn = !0),
            i.skinName = PersonalinformationotherSkin,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            FriendManager.isInit() || FriendManager.setup(),
            this.avatar.setScale(.85),
            this.initEvents(),
            this.initInfo(),
            this._ary = new eui.ArrayCollection,
            this.scroller_equit.viewport = this.viewEquit_list,
            this.viewEquit_list.itemRenderer = t.OterPlayerInfoEquipItem,
            this.viewEquit_list.dataProvider = this._ary
        },
        i.prototype._openview = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var t;
                return __generator(this,
                function(e) {
                    return t = setTimeout(function() {},
                    200),
                    [2, Promise.resolve()]
                })
            })
        },
        i.prototype.hide = function() {
            e.prototype.hide.call(this)
        },
        i.prototype.initInfo = function() {
            this._info = new UserInfo,
            this._info.userID = this._uid,
            this.getUserInfo()
        },
        i.prototype.initEvents = function() {
            ImageButtonUtil.add(this.close_Btn, this.onTouchIamgeButtonHandler, this),
            ImageButtonUtil.add(this.add_btn, this.onTouchIamgeButtonHandler, this),
            ImageButtonUtil.add(this.delete_btn, this.onTouchIamgeButtonHandler, this),
            ImageButtonUtil.add(this.block_btn, this.onTouchIamgeButtonHandler, this),
            ImageButtonUtil.add(this.report_btn, this.onTouchIamgeButtonHandler, this),
            ImageButtonUtil.add(this.fight_Btn, this.onTouchIamgeButtonHandler, this),
            ImageButtonUtil.add(this.visit_btn, this.onTouchIamgeButtonHandler, this),
            ImageButtonUtil.add(this.invitation_btn, this.onTouchIamgeButtonHandler, this),
            ImageButtonUtil.add(this.organizeTeamBtn, this.onTouchIamgeButtonHandler, this),
            ImageButtonUtil.add(this.applyjoinBtn, this.onTouchIamgeButtonHandler, this),
            ImageButtonUtil.add(this.combatTeamBtn, this.onTouchIamgeButtonHandler, this),
            ImageButtonUtil.add(this.chat_btn, this.onTouchIamgeButtonHandler, this),
            this.viewEquit_list.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.onTouchTapItemRenderHandle, this)
        },
        i.prototype.removeEvents = function() {
            ImageButtonUtil.removeAll(this),
            this.viewEquit_list.removeEventListener(eui.ItemTapEvent.ITEM_TAP, this.onTouchTapItemRenderHandle, this)
        },
        i.prototype.getUserInfo = function() {
            var t = this;
            this.touchChildren = this.touchEnabled = !1,
            UserInfoManager.upDateSimpleInfo(this._info,
            function() {
                UserInfoManager.upDateMoreInfo(t._info,
                function() {
                    t.touchChildren = t.touchEnabled = !0,
                    t.updatePanel()
                })
            },
            function() {
                e.prototype.onClose.call(t)
            })
        },
        i.prototype.showTeamInfo = function() {
            var t = this;
            0 == this._info.teamID ? this.teamNameTx.text = "暂未加入": TeamInfoManager.getSimpleTeamInfo(this._info.teamID,
            function(e) {
                t._teamInfo = e,
                t.teamNameTx.text = "" + e.name
            })
        },
        i.prototype.showPetBook = function() {
            var t = this;
            this.petNumTx.text = "精灵总数:" + this._info.petAllNum.toString(),
            SocketConnection.send(CommandID.SEEROL_GET_MON_CLASS_CNT, this._info.userID),
            SocketConnection.sendWithCallback(CommandID.SEEROL_GET_MON_CLASS_CNT,
            function(e) {
                var i = e.data.readUnsignedInt();
                t.petTypeNumTx.text = "精灵种类:" + i.toString()
            },
            this._info.userID)
        },
        i.prototype.showAvatar = function() {
            this._playerView = new ClothPreview,
            this.grp_playerStyle.addChild(this._playerView),
            this._playerView.setPosition(0, 0),
            this._playerView.show(this._info.clothes)
        },
        i.prototype.showFire = function() {
            this._info.fireBuff > 0
        },
        i.prototype.updatePanel = function() {
            this.avatar.setData({
                headId: this._info.head_id,
                headFrameId: this._info.head_frame_id
            }),
            this.fight_Btn.visible = this.visit_btn.visible = this.invitation_btn.visible = !this._hideBtn,
            this.txt_Id.text = String(this._info.userID),
            this.txt_nickName.text = this._info.nick;
            var t = new Date(1e3 * this._info.regTime),
            e = t.getFullYear().toString() + "-" + (t.getMonth() + 1).toString() + "-" + t.getDate().toString();
            this.txt_Time.text = e,
            this.titleNameTx.text = AchieveXMLInfo.getTitle(this._info.curTitle),
            this._info.isVip ? (this.vipIcon.visible = !0, this.nonoVipIcon.visible = !0, this.vipLv.visible = !0, this.vipLv.text = String(this._info.vipLevel)) : (this.vipIcon.visible = !1, this.nonoVipIcon.visible = !1, this.vipLv.visible = !1),
            this.showTeamInfo(),
            this.militaryName.text = AchieveManager.getAchieveTitleByInfo(this._info),
            this.showPetBook(),
            this.showAvatar(),
            this.showFire(),
            this._info.isFriend ? (this.add_btn.visible = !1, this.delete_btn.visible = !0) : (this.add_btn.visible = !0, this.delete_btn.visible = !1),
            this._info.isBlack ? this.block_btn.source = "personalInformationOther_remove_black_png": this.block_btn.source = "personalInformationOther_block_btn_png",
            this.updateRenderList();
            var i = this._info.clothIDs,
            n = SuitXMLInfo.getSuitIDs(i);
            if (this.txt_None.visible = !0, n.length > 0) {
                var r = n[0],
                o = ItemSeXMLInfo.getSuitEff(r);
                this.txt_suitDesc.text = o,
                o && (this.txt_None.visible = !1)
            } else this.txt_suitDesc.text = "";
            this.Invitation.visible = !1
        },
        i.prototype.onTouchIamgeButtonHandler = function(t) {
            switch (t.target) {
            case this.close_Btn:
                ModuleManager.hideModule(this, ChatManager.getInstance().showBig);
                break;
            case this.add_btn:
                this.onClickAddFriend();
                break;
            case this.delete_btn:
                this.onClickDelFriend();
                break;
            case this.block_btn:
                this.onBlack();
                break;
            case this.report_btn:
                this.onComplain();
                break;
            case this.fight_Btn:
                ModuleManager.hideModule(this),
                FightManager.fightWithPlayer(this._info);
                break;
            case this.visit_btn:
                Alarm.show("敬请期待！");
                break;
            case this.invitation_btn:
                this.onClickSelectGroup();
                break;
            case this.organizeTeamBtn:
                Alarm.show("敬请期待！");
                break;
            case this.applyjoinBtn:
                Alarm.show("敬请期待！");
                break;
            case this.combatTeamBtn:
                Alarm.show("敬请期待！");
                break;
            case this.chat_btn:
                ChatManager.getInstance().showPchat(this._info.userID, this._info.nick)
            }
        },
        i.prototype.onClickAddFriend = function() {
            var t = this;
            FriendManager.isBlack(this._info.userID) ? Alarm.show("黑名单用户不能相互添加好友") : Alert.show("你想和" + this._info.nick + "(" + this._info.userID + ")\r成为好友吗？",
            function() {
                FriendManager.addFriend(t._info.userID).then(function() {
                    t._info.isFriend = !0,
                    t.add_btn.visible = !1,
                    t.delete_btn.visible = !0
                },
                function() {})
            })
        },
        i.prototype.onClickDelFriend = function() {
            var t = this;
            Alert.show("你要删除好友" + this._info.nick + "(" + this._info.userID + ")吗？",
            function() {
                FriendManager.removeFriend(t._info.userID).then(function() {
                    t.add_btn.visible = !0,
                    t.delete_btn.visible = !1,
                    t._info.isFriend = !1
                })
            })
        },
        i.prototype.onBlack = function() {
            var t = this;
            if (this._info.isBlack) Alert.show("你确定要将" + this._info.nick + "(" + this._info.userID + ")从黑名单删除吗？",
            function() {
                FriendManager.removeBlack(t._info.userID).then(function(e) {
                    t.block_btn.source = "personalInformationOther_block_btn_png",
                    t._info.isBlack = !1
                })
            });
            else {
                var e = "你确定要把" + this._info.nick + "(" + this._info.userID + ")加入黑名单吗？";
                FriendManager.isFriend(this._info.userID) && (e = this._info.nick + "(" + this._info.userID + ")是您的好友确定要将TA加入黑名单吗？"),
                Alert.show(e,
                function() {
                    FriendManager.addBlack(t._info.userID).then(function(e) {
                        t.block_btn.source = "personalInformationOther_remove_black_png",
                        t.add_btn.visible = !0,
                        t.delete_btn.visible = !1,
                        t._info.isBlack = !0
                    })
                })
            }
        },
        i.prototype.onComplain = function() {
            var t = this,
            e = "你确定要举报<font color='#ff0000'$>" + this._info.nick + "(" + this._info.userID + ")</font>的不良行为吗？";
            Alert.show(e,
            function() {
                ModuleManager.showModuleByID(154, t._info)
            })
        },
        i.prototype.onClickSelectGroup = function() {
            0 == this.Invitation.visible ? (this.Invitation.visible = !0, !GroupManager.isInGroup && !this._info.groupInfo || MainManager.actorInfo.groupInfo && GroupManager.isInGroup ? (this.organizeTeamBtn.visible = !0, this.applyjoinBtn.visible = !1) : GroupManager.isInGroup || (this.organizeTeamBtn.visible = !1, this.applyjoinBtn.visible = !0)) : this.Invitation.visible = !1
        },
        i.prototype.onInviteJoinGroup = function() {
            var t = this;
            ModuleManager.hideModule(this),
            RelationManager.isFriend(this._info.userID) ? (RelationManager.addEventListener(RelationEvent.FRIEND_UPDATE_ONLINE, this.onCheckOnline), RelationManager.setOnLineFriend()) : MainManager.actorInfo.groupInfo || GroupManager.isInGroup ? GroupController.inviteJoin(this._info) : GroupController.setGroupStatus(function() {
                GroupController.inviteJoin(t._info)
            })
        },
        i.prototype.onCheckOnline = function(t) {
            RelationManager.removeEventListener(RelationEvent.FRIEND_UPDATE_ONLINE, this.onCheckOnline);
            var e;
            e = RelationManager.getFriendInfo(this._info.userID);
            RelationManager.friendOnLineIDs;
            return e && e.serverID != MainManager.actorInfo.serverID ? void(0 == e.serverID ? Alarm.show("该好友当前不在线！") : Alarm.show("该好友当前在" + TextFormatUtil.getRedTxt(e.serverID.toString()) + "号服务器，没有和你在一个服务器哦。")) : (SocketConnection.addCmdListener(CommandID.SEE_ONLINE, this.onSeeOnline, this), void SocketConnection.send(CommandID.SEE_ONLINE, 1, e.userID))
        },
        i.prototype.onSeeOnline = function(t) {
            var e = this;
            SocketConnection.removeCmdListener(CommandID.SEE_ONLINE, this.onSeeOnline, this);
            var i = t.data;
            i.readUnsignedInt();
            i.readUnsignedInt(),
            i.readUnsignedInt(),
            i.readUnsignedInt();
            i.readUnsignedInt();
            GroupManager.isInGroup ? GroupController.inviteJoin(this._info) : GroupController.setGroupStatus(function() {
                GroupController.inviteJoin(e._info)
            })
        },
        i.prototype.updateRenderList = function() {
            this.updateRender(),
            this.viewEquit_list.selectedIndex = 0
        },
        i.prototype.updateRender = function() {
            var t = this._parseTileRenderData();
            this._ary.replaceAll(t),
            this._ary.refresh(),
            this.viewEquit_list.validateNow()
        },
        i.prototype.onTouchTapItemRenderHandle = function(t) {
            var e = t.item;
            try {
                var i = (e.type, e.equipId ? e.equipId: 0);
                if (i > 0) {
                    var n = {
                        clothesId: i,
                        onDisboardFun: null,
                        changeFun: null,
                        caller: this
                    };
                    tipsPop.TipsPop.openClothesPop(n)
                }
            } catch(r) {
                console.error("再处理点击装扮部位时候发生错误", r)
            }
        },
        i.prototype.currentSelectTitleInfo = function() {},
        i.prototype._parseTileRenderData = function() {
            for (var e = [], i = (this._equipTypeChList.length, this._info.clothIDs), n = [t.CLOTH_TYPE.HEAD, t.CLOTH_TYPE.FACE, t.CLOTH_TYPE.HAND, t.CLOTH_TYPE.WAIST, t.CLOTH_TYPE.Foot], r = (this._info.clothIDs, 0); 5 > r; r++) {
                var o = {};
                o.type = String(n[r]),
                o.typeName = this._equipTypeChList[r],
                o.equipId = 0,
                o.clothData = null;
                for (var a = 0; a < i.length; a++) {
                    var s = ClothXMLInfo.getItemInfo(i[a]);
                    s.type == String(n[r]) && (o.equipId = i[a], o.clothData = s)
                }
                e.push(o)
            }
            return e
        },
        i.prototype.destroy = function() {
            this.removeEvents(),
            this.avatar.Destroy(),
            e.prototype.destroy.call(this)
        },
        i
    } (BaseModule);
    t.PersonalInformationOther = e,
    __reflect(e.prototype, "personalInformation.PersonalInformationOther")
} (personalInformation || (personalInformation = {}));
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
personalInformation; !
function(t) {
    var e = function(e) {
        function i() {
            return null !== e && e.apply(this, arguments) || this
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.initEvents(),
            this.cacheAsBitmap = !0
        },
        i.prototype.initEvents = function() {
            this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this),
            this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchItemHandler, this)
        },
        i.prototype.removeEvents = function() {
            this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this),
            this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchItemHandler, this)
        },
        i.prototype.setEquipData = function(t) {
            this._equipVo = t,
            this.updateView()
        },
        i.prototype.updateView = function() {
            var t = this._equipVo;
            this.txt_pos_name.text = t.typeName,
            this.icon_equip.visible = t.equipId > 0,
            this.img_add.visible = !(t.equipId > 0),
            t.equipId > 0 ? (this.txt_clothName.text = t.clothData.name, this.icon_equip.source = ItemXMLInfo.getIconURL(t.equipId)) : this.txt_clothName.text = "无",
            this.txt_clothName.size = this.txt_clothName.text.length > 6 ? 16 : 20
        },
        i.prototype.onTouchItemHandler = function(e) {
            this.dispatchEventWith(t.EventKeys.EVENT_TOUCHTAP_CLOTH_ITEM, !1, this._equipVo)
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
    t.PlayerInfoEquipItem = e,
    __reflect(e.prototype, "personalInformation.PlayerInfoEquipItem")
} (personalInformation || (personalInformation = {}));
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
personalInformation; !
function(t) {
    var e = function(e) {
        function i() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.curPetSelectIndex = 0,
            t.curAchieveSelectIndex = 0,
            t.curAchieveSelectId = 0,
            t.petShowArr = [],
            t.achieveShowArr = [],
            t.curCardShowId = 0,
            t.isSelf = !1,
            t.addAchieveFromEmpty = !0,
            t.isExchangingPet = !1,
            t.isShowCardPet = !1,
            t.info = null,
            t
        }
        return __extends(i, e),
        i.GetInstance = function() {
            return i._instance || (i._instance = new i),
            i._instance
        },
        i.prototype.CreateCardPetShow = function(e) {
            return this.cardPetShowCls ? (this.cardPetShowCls.show(), this.cardPetShowCls.initData(e)) : this.cardPetShowCls = new t.PersonalinformationIdCardPetshow(e),
            this.cardPetShowCls
        },
        i.prototype.GetUserInfo = function(t) {
            var e = this;
            return new Promise(function(i, n) {
                UserInfoManager.upDateSimpleInfo(t,
                function() {
                    UserInfoManager.upDateMoreInfo(t,
                    function() {
                        UserInfoManager.updateIDCardUserInfo(t,
                        function() {
                            e.info = null,
                            e.petShowArr = [],
                            e.achieveShowArr = [],
                            e.info = t,
                            e.petShowArr = t.showPetinfosArr,
                            e.achieveShowArr = t.showAchieveArr,
                            e.curCardShowId = t.cardId,
                            i(e.info)
                        })
                    })
                },
                function() {
                    n()
                })
            })
        },
        i.prototype.GetOtherPetsInfo = function(t) {
            var e = this;
            return new Promise(function(i, n) {
                SocketConnection.sendByQueue(CommandID.GET_IDCARD_USERINFO, [5, t.userID, 0, 0],
                function(t) {
                    var n = t.data;
                    e.petShowArr = [];
                    var r = (n.readUnsignedInt(), n.readUnsignedInt());
                    r /= 34;
                    for (var o = 0; r > o; o++) {
                        var a = [];
                        a.catchTime = n.readUnsignedInt(),
                        a.petId = n.readUnsignedInt(),
                        a.skinId = n.readUnsignedInt(),
                        a.lv = n.readUnsignedInt(),
                        a.tool_add_hp = n.readUnsignedInt(),
                        a.dv = n.readUnsignedInt(),
                        a.nature = n.readUnsignedInt(),
                        a.new_se = n.readUnsignedInt(),
                        a.ev_hp = n.readUnsignedInt(),
                        a.ev_attack = n.readUnsignedInt(),
                        a.ev_defence = n.readUnsignedInt(),
                        a.ev_sa = n.readUnsignedInt(),
                        a.ev_sd = n.readUnsignedInt(),
                        a.ev_sp = n.readUnsignedInt(),
                        a.marksInfo = [];
                        for (var s = 0; 3 > s; s++) a.marksInfo[s] = {},
                        a.marksInfo[s].markid = n.readUnsignedInt(),
                        a.marksInfo[s].markLv = n.readUnsignedInt(),
                        a.marksInfo[s].gemid = n.readUnsignedInt();
                        var h;
                        h = n.readUnsignedInt(),
                        a.cirt = KTool.subByte(h, 16, 16),
                        a.cirt_adj = KTool.subByte(h, 0, 16),
                        h = n.readUnsignedInt(),
                        a.regular = KTool.subByte(h, 16, 16),
                        a.regular_adj = KTool.subByte(h, 0, 16),
                        h = n.readUnsignedInt(),
                        a.precent = KTool.subByte(h, 16, 16),
                        a.precent_adj = KTool.subByte(h, 0, 16);
                        var _;
                        for (_ = 1; 4 > _; _++) h = n.readUnsignedInt(),
                        a["ctl_" + _ + "_idx"] = KTool.subByte(h, 16, 8),
                        a["ctl_" + _] = KTool.subByte(h, 8, 8),
                        a["ctl_" + _ + "_adj"] = KTool.subByte(h, 0, 8);
                        for (_ = 1; 4 > _; _++) h = n.readUnsignedInt(),
                        a["weak_" + _ + "_idx"] = KTool.subByte(h, 16, 8),
                        a["weak_" + _] = KTool.subByte(h, 8, 8),
                        a["weak_" + _ + "_adj"] = KTool.subByte(h, 0, 8);
                        a.resist_all = n.readUnsignedInt(),
                        a.resist_state = n.readUnsignedInt(),
                        e.info.ohterPetShowArr.push(a)
                    }
                    i(e.info)
                })
            })
        },
        i.prototype.ChangeCardBg = function(t, e, i) {
            var n = this;
            SocketConnection.sendByQueue(CommandID.GET_IDCARD_USERINFO, [2, 0, 0, t],
            function(r) {
                n.curCardShowId = t,
                EventManager.dispatchEventWith("cardbgChanged", !1, t),
                e && e.apply(i)
            })
        },
        i.prototype.destroy = function() {
            this.info = null,
            this.petShowArr = null,
            this.achieveShowArr = null,
            null != this.cardPetShowCls && (this.cardPetShowCls.destroy(), this.cardPetShowCls = null)
        },
        i._instance = null,
        i
    } (egret.EventDispatcher);
    t.CardDataManaer = e,
    __reflect(e.prototype, "personalInformation.CardDataManaer")
} (personalInformation || (personalInformation = {}));
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
        function a(t) {
            try {
                h(n.next(t))
            } catch(e) {
                o(e)
            }
        }
        function s(t) {
            try {
                h(n["throw"](t))
            } catch(e) {
                o(e)
            }
        }
        function h(t) {
            t.done ? r(t.value) : new i(function(e) {
                e(t.value)
            }).then(a, s)
        }
        h((n = n.apply(t, e || [])).next())
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
        for (; h;) try {
            if (r = 1, o && (a = o[2 & i[0] ? "return": i[0] ? "throw": "next"]) && !(a = a.call(o, i[1])).done) return a;
            switch (o = 0, a && (i = [0, a.value]), i[0]) {
            case 0:
            case 1:
                a = i;
                break;
            case 4:
                return h.label++,
                {
                    value: i[1],
                    done: !1
                };
            case 5:
                h.label++,
                o = i[1],
                i = [0];
                continue;
            case 7:
                i = h.ops.pop(),
                h.trys.pop();
                continue;
            default:
                if (a = h.trys, !(a = a.length > 0 && a[a.length - 1]) && (6 === i[0] || 2 === i[0])) {
                    h = 0;
                    continue
                }
                if (3 === i[0] && (!a || i[1] > a[0] && i[1] < a[3])) {
                    h.label = i[1];
                    break
                }
                if (6 === i[0] && h.label < a[1]) {
                    h.label = a[1],
                    a = i;
                    break
                }
                if (a && h.label < a[2]) {
                    h.label = a[2],
                    h.ops.push(i);
                    break
                }
                a[2] && h.ops.pop(),
                h.trys.pop();
                continue
            }
            i = e.call(t, h)
        } catch(n) {
            i = [6, n],
            o = 0
        } finally {
            r = a = 0
        }
        if (5 & i[0]) throw i[1];
        return {
            value: i[0] ? i[1] : void 0,
            done: !0
        }
    }
    var r, o, a, s, h = {
        label: 0,
        sent: function() {
            if (1 & a[0]) throw a[1];
            return a[1]
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
personalInformation; !
function(t) {
    var e = function(e) {
        function i(t) {
            void 0 === t && (t = null);
            var i = e.call(this, t) || this;
            return i.ease = egret.Ease.quadOut,
            i.curLevel = 0,
            i.curScore = 0,
            i.curMaxLevel = 0,
            i.curMaxScore = 0,
            "number" == typeof t ? i._uid = t: i._uid = t.userId,
            i.skinName = PersonalinformationIdCardpopSkin,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.initialized(),
            GameInfo.isChecking && (this.btnInvite.visible = !1, this.btnReplace.visible = !1, this.grp_vipInfo.visible = !1),
            this.initEvents(),
            this.redDotCardEvent(),
            this.resize()
        },
        i.prototype.resize = function() {
            this.isSelf ? this.IDCard.x += 20 * (egret.lifecycle.stage.width / 1136) : this.IDCard.x += 5 * (egret.lifecycle.stage.width / 1136)
        },
        i.prototype.initEvents = function() {
            var t = this;
            ImageButtonUtil.add(this.btnClose, this.onTouchBtnHandle, this),
            ImageButtonUtil.add(this.btnReplace, this.onTouchBtnHandle, this),
            ImageButtonUtil.add(this.btnDelete, this.onTouchBtnHandle, this),
            ImageButtonUtil.add(this.btnBlock, this.onTouchBtnHandle, this),
            ImageButtonUtil.add(this.btnInvite, this.onTouchBtnHandle, this),
            ImageButtonUtil.add(this.btnAdd, this.onTouchBtnHandle, this),
            ImageButtonUtil.add(this.btnReport, this.onTouchBtnHandle, this),
            ImageButtonUtil.add(this.btnChangeName, this.onTouchBtnHandle, this),
            ImageButtonUtil.add(this.btnCopy, this.onTouchBtnHandle, this),
            ImageButtonUtil.add(this.btnGrpInvite, this.onTouchBtnHandle, this),
            ImageButtonUtil.add(this.btnTeamInvite, this.onTouchBtnHandle, this),
            this._listAchieve.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.onTapAchieve, this),
            this._listPetShow.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.onTapPet, this),
            EventManager.addEventListener("updateCardInfo", this.getUserInfo, this),
            EventManager.addEventListener("cardbgChanged", this.onCardBgchanged, this),
            EventManager.addEventListener("RedPointCardEvent", this.redDotCardEvent, this),
            EventManager.addEventListener(UserInfoEvent.EVENT_CHANGE_NICKNAME_FRAME_ID,
            function() {
                var e = config.Profilephoto.getItem(MainManager.actorInfo.nickBg);
                t.nameBg.source = ClientConfig.getTitleBg(e.icon)
            },
            this)
        },
        i.prototype.redDotCardEvent = function() {
            for (var t = config.Profilephoto.getItems().filter(function(t) {
                return 3 == t.type
            }), e = 0, i = t; e < i.length; e++) {
                var n = i[e];
                if (core.AvatarDataMgr.GetInstance().GetIsNewFlag(n.id)) return void(this.reddotCard.visible = !0)
            }
            this.reddotCard.visible = !1
        },
        i.prototype.onCardBgchanged = function(t) {
            var e = t.data,
            i = config.Profilephoto.getItem(e);
            this.cardbg.source = ClientConfig.getCardBg(i.icon)
        },
        i.prototype.initialized = function() {
            FriendManager.isInit() || FriendManager.setup(),
            this._listAchieve.itemRenderer = t.personalAchieveItem,
            this._listPetShow.itemRenderer = t.personalPetShowItem,
            this._info = new UserInfo,
            this._info.userID = this._uid,
            t.CardDataManaer.GetInstance().isSelf = this._info.userID == MainManager.actorInfo.userID,
            this.isSelf = t.CardDataManaer.GetInstance().isSelf,
            this.isSelf ? StatLogger.log("20221104版本系统功能", "个人信息面板", "点击打开自己的信息展示面板") : StatLogger.log("20221104版本系统功能", "个人信息面板", "通过任意途径打开过其他玩家信息面板"),
            this.ohter.visible = !this.isSelf,
            this.btnReplace.visible = this.isSelf,
            this.btnChangeName.visible = this.isSelf,
            this.getUserInfo()
        },
        i.prototype.getUserInfo = function(e) {
            return __awaiter(this, void 0, void 0,
            function() {
                var i, n, r, o;
                return __generator(this,
                function(a) {
                    switch (a.label) {
                    case 0:
                        return e && console.log("getUserInfo :", e.data),
                        null != e && (i = e.data),
                        this.touchChildren = this.touchEnabled = !1,
                        n = this,
                        [4, t.CardDataManaer.GetInstance().GetUserInfo(this._info)];
                    case 1:
                        return n._info = a.sent(),
                        this.isSelf ? [3, 3] : (r = this, [4, t.CardDataManaer.GetInstance().GetOtherPetsInfo(this._info)]);
                    case 2:
                        r._info = a.sent(),
                        a.label = 3;
                    case 3:
                        return 0 == t.CardDataManaer.GetInstance().curCardShowId ? this.cardbg.source = ClientConfig.getCardBg(1) : (o = config.Profilephoto.getItem(t.CardDataManaer.GetInstance().curCardShowId), this.cardbg.source = ClientConfig.getCardBg(o.icon)),
                        null != i && (1 == i.type ? EventManager.dispatchEventWith("updateChooseInfo") : 2 == i.type && EventManager.dispatchEventWith("updateAchieveInfo")),
                        this.initInfo(),
                        [2]
                    }
                })
            })
        },
        i.prototype.initInfo = function() {
            this._info = null,
            this._info = t.CardDataManaer.GetInstance().info,
            this.touchChildren = this.touchEnabled = !0;
            for (var e = [], i = [], n = 0; n < this._info.showAchieveArr.length; n++) {
                var r = {};
                r.info = this._info.showAchieveArr[n],
                r.id = n + 1,
                e.push(r)
            }
            for (var o = this.isSelf ? this._info.showPetinfosArr: this._info.ohterPetShowArr, n = 0; 4 > n; n++) {
                var r = {},
                a = o[n];
                r.info = a ? a: null,
                r.id = n + 1,
                i.push(r)
            }
            this._listPetShow.dataProvider = new eui.ArrayCollection(i),
            this._listAchieve.dataProvider = new eui.ArrayCollection(e),
            this.updatePanel()
        },
        i.prototype.onTouchBtnHandle = function(e) {
            switch (e.target) {
            case this.btnClose:
                this.onClose();
                break;
            case this.btnReplace:
                var i = new t.PersonalinformationCardpop;
                PopViewManager.getInstance().openView(i);
                break;
            case this.btnDelete:
                this.onClickDelFriend();
                break;
            case this.btnAdd:
                this.onClickAddFriend();
                break;
            case this.btnBlock:
                this.onBlack();
                break;
            case this.btnInvite:
                this.openGrpinviting();
                break;
            case this.btnReport:
                this.onComplain();
                break;
            case this.btnChangeName:
                if (GameInfo.isSpecialTime) return void BubblerManager.getInstance().showText("功能维护中");
                StatLogger.log("1023版本系统功能", "个人界面", "点击【笔头】修改昵称"),
                StatLogger.log("20211022版本系统功能", "个人信息优化", "点击改名按钮"),
                this.openChangeNameView();
                break;
            case this.btnCopy:
                this.isSelf ? StatLogger.log("20221104版本系统功能", "个人信息面板", "自己信息面板-复制自己ID") : StatLogger.log("20221104版本系统功能", "个人信息面板", "其他玩家信息面板-点击复制ID");
                var n = document.createElement("input");
                n.value = this._info.userID + "",
                document.body.appendChild(n),
                n.select(),
                n.setSelectionRange(0, n.value.length),
                document.execCommand("Copy"),
                document.body.removeChild(n),
                n.setAttribute("readOnly", "readOnly"),
                BubblerManager.getInstance().showText("Id已经复制到剪切板中了！");
                break;
            case this.btnGrpInvite:
                Alarm.show("敬请期待！");
                break;
            case this.btnTeamInvite:
                Alarm.show("敬请期待！")
            }
        },
        i.prototype.onTapAchieve = function(t) {
            if (this.isSelf);
            else {
                if (0 == t.item.info) return;
                StatLogger.log("20221104版本系统功能", "个人信息面板", "其他玩家信息面板-点击查看任意称号");
                var e = {};
                e.SpeNameBonus = t.item.info,
                tipsPop.TipsPop.openTitleInfoPop(e.SpeNameBonus)
            }
        },
        i.prototype._getMyTitleId = function() {
            return MainManager.actorInfo.curTitle
        },
        i.prototype.onTapPet = function(e) {
            if (e.item) if (this.isSelf) if (t.CardDataManaer.GetInstance().curPetSelectIndex = e.item.id, e.item.info) t.CardDataManaer.GetInstance().isShowCardPet = !0,
            ModuleManager.showModuleByID(267, e.item.info);
            else {
                var i = new t.PersonalinformationIdChoosepetpop;
                PopViewManager.getInstance().openView(i)
            } else e.item.info && (StatLogger.log("20221104版本系统功能", "个人信息面板", "其他玩家信息面板-点击查看任意精灵"), t.CardDataManaer.GetInstance().isShowCardPet = !0, ModuleManager.showModuleByID(267, e.item.info))
        },
        i.prototype.onInviteJoinGroup = function() {
            var t = this;
            ModuleManager.hideModule(this),
            RelationManager.isFriend(this._info.userID) ? (RelationManager.addEventListener(RelationEvent.FRIEND_UPDATE_ONLINE, this.onCheckOnline), RelationManager.setOnLineFriend()) : MainManager.actorInfo.groupInfo || GroupManager.isInGroup ? GroupController.inviteJoin(this._info) : GroupController.setGroupStatus(function() {
                GroupController.inviteJoin(t._info)
            })
        },
        i.prototype.onCheckOnline = function(t) {
            RelationManager.removeEventListener(RelationEvent.FRIEND_UPDATE_ONLINE, this.onCheckOnline);
            var e;
            e = RelationManager.getFriendInfo(this._info.userID);
            RelationManager.friendOnLineIDs;
            return e && e.serverID != MainManager.actorInfo.serverID ? void(0 == e.serverID ? Alarm.show("该好友当前不在线！") : Alarm.show("该好友当前在" + TextFormatUtil.getRedTxt(e.serverID.toString()) + "号服务器，没有和你在一个服务器哦。")) : (SocketConnection.addCmdListener(CommandID.SEE_ONLINE, this.onSeeOnline, this), void SocketConnection.send(CommandID.SEE_ONLINE, 1, e.userID))
        },
        i.prototype.onSeeOnline = function(t) {
            var e = this;
            SocketConnection.removeCmdListener(CommandID.SEE_ONLINE, this.onSeeOnline, this);
            var i = t.data;
            i.readUnsignedInt();
            i.readUnsignedInt(),
            i.readUnsignedInt(),
            i.readUnsignedInt();
            i.readUnsignedInt();
            GroupManager.isInGroup ? GroupController.inviteJoin(this._info) : GroupController.setGroupStatus(function() {
                GroupController.inviteJoin(e._info)
            })
        },
        i.prototype.openGrpinviting = function() {
            var t = this;
            this.grp_inviting.touchChildren = this.grp_inviting.touchEnabled = !1,
            1 == this.grp_inviting.visible ? egret.Tween.get(this.grp_inviting).to({
                alpha: 0
            },
            500, this.ease).call(function() {
                t.grp_inviting.visible = !1,
                t.grp_inviting.touchChildren = t.grp_inviting.touchEnabled = !0
            }) : (this.grp_inviting.visible = !0, this.grp_inviting.alpha = 0, egret.Tween.get(this.grp_inviting).to({
                alpha: 1
            },
            500, this.ease).call(function() {
                t.grp_inviting.touchChildren = t.grp_inviting.touchEnabled = !0
            }))
        },
        i.prototype.openChangeNameView = function() {
            PopViewManager.getInstance().openView(new t.PersonalinformationNameFramePop)
        },
        i.prototype.onComplain = function() {
            var t = this,
            e = "你确定要举报<font color='#ff0000'$>" + this._info.nick + "(" + this._info.userID + ")</font>的不良行为吗？";
            Alert.show(e,
            function() {
                ModuleManager.showModuleByID(154, t._info)
            })
        },
        i.prototype.onBlack = function() {
            var t = this;
            if (this._info.isBlack) Alert.show("你确定要将" + this._info.nick + "(" + this._info.userID + ")从黑名单删除吗？",
            function() {
                FriendManager.removeBlack(t._info.userID).then(function(e) {
                    t.btnBlock.source = "personalInformationOther_block_btn_png",
                    t._info.isBlack = !1
                })
            });
            else {
                var e = "你确定要把" + this._info.nick + "(" + this._info.userID + ")加入黑名单吗？";
                FriendManager.isFriend(this._info.userID) && (e = this._info.nick + "(" + this._info.userID + ")是您的好友确定要将TA加入黑名单吗？"),
                Alert.show(e,
                function() {
                    FriendManager.addBlack(t._info.userID).then(function(e) {
                        t.btnBlock.source = "personalInformationOther_remove_black_png",
                        t.btnAdd.visible = !0,
                        t.btnDelete.visible = !1,
                        t._info.isBlack = !0
                    })
                })
            }
        },
        i.prototype.onClickAddFriend = function() {
            var t = this;
            FriendManager.isBlack(this._info.userID) ? Alarm.show("黑名单用户不能相互添加好友") : Alert.show("你想和" + this._info.nick + "(" + this._info.userID + ")\r成为好友吗？",
            function() {
                FriendManager.addFriend(t._info.userID).then(function() {
                    t._info.isFriend = !0,
                    t.btnAdd.visible = !1,
                    t.btnDelete.visible = !0
                },
                function() {})
            })
        },
        i.prototype.onClickDelFriend = function() {
            var t = this;
            Alert.show("你要删除好友" + this._info.nick + "(" + this._info.userID + ")吗？",
            function() {
                FriendManager.removeFriend(t._info.userID).then(function() {
                    t.btnAdd.visible = !0,
                    t.btnDelete.visible = !1,
                    t._info.isFriend = !1
                })
            })
        },
        i.prototype.updatePanel = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var t, e, i, n, r, o, a, s, h = this;
                return __generator(this,
                function(_) {
                    for (this.avatar.setData({
                        headId: this._info.head_id,
                        headFrameId: this._info.head_frame_id
                    }), this.txt_nick.text = this._info.nick, this.txt_userId.text = this._info.userID + "", t = config.Profilephoto.getItem(this._info.nickBg), this.nameBg.source = ClientConfig.getTitleBg(t.icon), e = 0, i = this._info.achieRank, n = 0; 32 > n; n++) if (0 == BitUtil.getBit(i, n)) {
                        e = n + 4;
                        break
                    }
                    return r = AchieveManager.achieveList[e],
                    this.military_icon.source = ClientConfig.getAchieveRankIcon(r.id),
                    this.txt_militaryName.text = AchieveManager.getAchieveTitleByInfo(this._info),
                    o = new Date(1e3 * this._info.regTime),
                    a = o.getFullYear().toString() + "-" + (o.getMonth() + 1).toString() + "-" + o.getDate().toString(),
                    this.txt_registerTime.text = a,
                    0 == this._info.teamID ? this.txt_teamName.text = "暂未加入": TeamInfoManager.getSimpleTeamInfo(this._info.teamID,
                    function(t) {
                        h._teamInfo = t,
                        h.txt_teamName.text = "" + t.name
                    }),
                    this._info.isVip ? this.txt_vipLevel.text = "VIP" + String(this._info.vipLevel) : this.txt_vipLevel.textFlow = [{
                        text: "非VIP",
                        style: {
                            textColor: 16777215
                        }
                    }],
                    s = PetSkinXMLInfo.getAllSkin(),
                    this.skinAllNum.text = s.length + "",
                    this.skinHasNum.text = this._info.skinAllHasNumber + "",
                    this.petsAllNum.text = PetBook.PetBookXMLInfo.idList.length + "",
                    this.petsHasNum.text = this._info.petAllHasNumber + "",
                    this.achieveAllNum.text = AchieveManager.totalAchieveNum + "",
                    this.achieveHasNum.text = this._info.achieveHasNumber + "",
                    this._info.isFriend ? (this.btnAdd.visible = !1, this.btnDelete.visible = !0) : (this.btnAdd.visible = !0, this.btnDelete.visible = !1),
                    KTool.getOnlineUsersForeverOrDailyVal([this._info.userID, PeakJihadController.levelForever],
                    function(t) {
                        h.curLevel = t & Math.pow(2, 16) - 1,
                        h.curScore = t >> 16 & Math.pow(2, 16) - 1,
                        h.imgCurrPeakLevel.source = ClientConfig.GetPeakjihadMiniLevelPath(h.curLevel + 1),
                        h.txtCurLevelName.text = PeakJihadController.getRatingsNameByScore(t),
                        KTool.getOnlineUsersForeverOrDailyVal([h._info.userID, 124800],
                        function(e) {
                            e > 0 ? (h.curMaxLevel = e & Math.pow(2, 16) - 1, h.curMaxScore = e >> 16 & Math.pow(2, 16) - 1, h.imgMaxPeakLevel.source = ClientConfig.GetPeakjihadMiniLevelPath(h.curMaxLevel + 1), h.txtMaxLevelName.text = PeakJihadController.getRatingsNameByScore(e)) : (h.imgMaxPeakLevel.source = ClientConfig.GetPeakjihadMiniLevelPath(h.curLevel + 1), h.txtMaxLevelName.text = PeakJihadController.getRatingsNameByScore(t))
                        }),
                        KTool.getOnlineUsersForeverOrDailyVal([h._info.userID, 124804],
                        function(t) {
                            KTool.getOnlineUsersForeverOrDailyVal([h._info.userID, 124805],
                            function(e) {
                                0 >= e ? h.txtWinRate.text = "0%": h.txtWinRate.text = Math.round(t / e * 100) + "%"
                            })
                        })
                    }),
                    [2]
                })
            })
        },
        i.prototype.destroy = function() {
            e.prototype.destroy.call(this),
            this.avatar.Destroy(),
            this._listAchieve.removeEventListener(eui.ItemTapEvent.ITEM_TAP, this.onTapAchieve, this),
            this._listPetShow.removeEventListener(eui.ItemTapEvent.ITEM_TAP, this.onTapPet, this),
            EventManager.removeAll(this),
            ImageButtonUtil.removeAll(this),
            t.CardDataManaer.GetInstance().destroy()
        },
        i
    } (BaseModule);
    t.PersonalinformationIdCardPopView = e,
    __reflect(e.prototype, "personalInformation.PersonalinformationIdCardPopView")
} (personalInformation || (personalInformation = {}));
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
personalInformation; !
function(t) {
    var e = function(t) {
        function e(e, i) {
            var n = t.call(this) || this;
            return n.skinName = OtherMarkTipsSkin,
            n.markId = e,
            n.gemId = i,
            n
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            var t = this.markId;
            this.txtMarkName.textFlow = tipsPop.getCounterMaekNameHtml(t),
            this.txtTypeName.text = CountermarkXMLInfo.getTypeName(t);
            var e = [],
            i = [],
            n = CountermarkXMLInfo.getType(t);
            if (n == CountermarkType.MARK_IS_COMMON_ABLITY) for (var r = CountermarkXMLInfo.getArg(t), o = 0; 6 > o; o++) e[o] = "+" + r[o];
            else if (n == CountermarkType.MARK_IS_UNIVERSAL) {
                for (var r = (CountermarkXMLInfo.getBaseAttriValue(t), CountermarkXMLInfo.getMaxAttriValue(t)), o = 0; 6 > o; o++) e[o] = "+" + r[o] + "/" + r[o];
                var a = CountermarkXMLInfo.getExtraAttriValue(t);
                if (a && a.length > 0) for (var o = 0; 6 > o; o++) i[o] = "+" + a[o]
            } else console.error('当前刻印类型："' + CountermarkXMLInfo.getTypeName(t) + '" 不支持tips显示');
            for (var o = 0; 6 > o; o++) this["txtBaseAttr" + (o + 1)].text = e[o];
            var s = i.length > 0;
            if (this.txtNoExtraAttr.visible = !s, this.txtHasExtraAttr.visible = this.groupExtraAttr.visible = s, s) for (var o = 0; 6 > o; o++) this["txtExtraAttr" + (o + 1)].text = i[o];
            0 != this.gemId ? (this.txtStone.text = GemsXMLInfo.getName(this.gemId) + "Lv." + GemsXMLInfo.getLv(this.gemId), this.imgStone.source = ItemXMLInfo.getIconURL(this.gemId), this.txtStoneDesc.text = GemsXMLInfo.getEffect(this.gemId)) : (this.height = 230, this.txtStone.visible = !1, this.imgStone.visible = !1, this.txtStoneDesc.visible = !1)
        },
        e
    } (PopView);
    t.OtherMarkTips = e,
    __reflect(e.prototype, "personalInformation.OtherMarkTips")
} (personalInformation || (personalInformation = {}));
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
personalInformation; !
function(t) {
    var e = function(e) {
        function i(t) {
            var i = e.call(this) || this;
            return i.curShowAchieveIndex = 0,
            i.isCancleLast = !1,
            i._custumData = t,
            i.skinName = "AchieveTitlePopSkin",
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            var i = this;
            e.prototype.childrenCreated.call(this),
            this.curShowAchieveIndex = t.CardDataManaer.GetInstance().curAchieveSelectIndex,
            this._ary = new eui.ArrayCollection,
            this.viewport_list.itemRenderer = t.AchieveTitleItem,
            this.viewport_list.dataProvider = this._ary,
            this.Grp_noFind.visible = !1,
            this.requestTitleInfo(function(t) {
                i._initRenderList(t),
                i.initEvents()
            },
            this)
        },
        i.prototype.initEvents = function() {
            var t = this;
            this.viewport_list.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.onTouchTapItemRenderHandle, this),
            ImageButtonUtil.add(this.btnClose, this.onTouchIamgeButtonHandler, this),
            ImageButtonUtil.add(this.img_btn_qxzs, this.onTouchIamgeButtonHandler, this),
            ImageButtonUtil.add(this.img_btn_zs, this.onTouchIamgeButtonHandler, this),
            ImageButtonUtil.add(this.imgBtnExchange, this.onTouchIamgeButtonHandler, this),
            this.editable_search.addEventListener(egret.Event.CHANGE, this._onEditableChangeHandler, this),
            ImageButtonUtil.add(this.noUpTitleUp,
            function() {
                t.noUpTitleUp.visible = t.hasUpTitleDown.visible = !1,
                t.noUpTitleDown.visible = t.hasUpTitleUp.visible = !0;
                var e = t._parseTileRenderData().filter(function(t) {
                    return ! t.isAbility
                });
                t.afterFilter(e)
            },
            this),
            ImageButtonUtil.add(this.hasUpTitleUp,
            function() {
                t.noUpTitleDown.visible = t.hasUpTitleUp.visible = !1,
                t.noUpTitleUp.visible = t.hasUpTitleDown.visible = !0;
                var e = t._parseTileRenderData().filter(function(t) {
                    return t.isAbility
                });
                t.afterFilter(e)
            },
            this),
            EventManager.addEventListener("updateAchieveInfo", this.updateRender, this)
        },
        i.prototype.afterFilter = function(t) {
            this._ary.replaceAll(t),
            this._ary.refresh(),
            this.viewport_list.selectedItem = this._ary.source[0],
            this._selectVo = this.viewport_list.selectedItem,
            this.editable_search.text = null,
            this.Grp_noFind.visible = !t.length,
            this.ahieveInfo.visible = !this.Grp_noFind.visible,
            this.currentSelectTitleInfo()
        },
        i.prototype.onTouchTapItemRenderHandle = function(t) {
            this._selectVo = t.item,
            this.currentSelectTitleInfo()
        },
        i.prototype.onTouchIamgeButtonHandler = function(t) {
            switch (t.currentTarget) {
            case this.btnClose:
                this.hide();
                break;
            case this.img_btn_qxzs:
                StatLogger.log("20221104版本系统功能", "个人信息面板", "称号选择界面-点击称号的取消展示按钮"),
                this._cancelShowTitle();
                break;
            case this.imgBtnExchange:
                this._exchangeTitle();
                break;
            case this.img_btn_zs:
                StatLogger.log("20221104版本系统功能", "个人信息面板", "称号选择界面-点击称号的展示按钮"),
                this._changeTitle()
            }
        },
        i.prototype._changeTitle = function() {
            var e = this,
            i = [];
            i = t.CardDataManaer.GetInstance().achieveShowArr.filter(function(t) {
                return 0 != t
            });
            var n = i.length + 1;
            n = n > 4 ? t.CardDataManaer.GetInstance().curAchieveSelectIndex: n,
            SocketConnection.sendByQueue(CommandID.GET_IDCARD_USERINFO, [3, 0, n, this._selectVo.titleId],
            function(t) {
                EventManager.dispatchEventWith("updateCardInfo"),
                e.hide()
            })
        },
        i.prototype._exchangeTitle = function() {
            var e = this,
            i = [];
            i = t.CardDataManaer.GetInstance().achieveShowArr.filter(function(t) {
                return 0 != t
            });
            var n = t.CardDataManaer.GetInstance().curAchieveSelectIndex;
            SocketConnection.sendByQueue(CommandID.GET_IDCARD_USERINFO, [3, 0, n, this._selectVo.titleId],
            function(t) {
                EventManager.dispatchEventWith("updateCardInfo"),
                e.hide()
            })
        },
        i.prototype._cancelShowTitle = function() {
            var e = this,
            i = [];
            i = t.CardDataManaer.GetInstance().achieveShowArr.filter(function(t) {
                return 0 != t
            });
            var n = i.indexOf(this._selectVo.titleId) + 1;
            SocketConnection.sendByQueue(CommandID.GET_IDCARD_USERINFO, [3, 0, n, 0],
            function(n) {
                t.CardDataManaer.GetInstance().curAchieveSelectIndex >= i.length && (e.isCancleLast = !0),
                EventManager.dispatchEventWith("updateCardInfo", !1, {
                    type: 2
                }),
                e.hide()
            })
        },
        i.prototype._onSearCh = function() {
            this.updateRender(),
            this.noUpTitleDown.visible = this.hasUpTitleDown.visible = !1,
            this.noUpTitleUp.visible = this.hasUpTitleUp.visible = !0
        },
        i.prototype._onEditableChangeHandler = function(t) {
            "" === this.editable_search.text ? (this.updateRender(), this.Grp_noFind.visible = !1) : this._onSearCh()
        },
        i.prototype.requestTitleInfo = function(t, e) {
            SocketConnection.sendWithCallback(CommandID.ACHIEVETITLELIST,
            function(i) {
                var n = new AchieveTitleInfo(i.data),
                r = n.titleArr;
                t.apply(e, [r])
            })
        },
        i.prototype._initRenderList = function(t) {
            if (this._cecheTileIds = t, 0 == t.length && (this.ahieveInfo.visible = !1), this.updateRender(), this.viewport_list.selectedIndex = this.curShowAchieveIndex - 1, this._selectVo = this._ary.getItemAt(this.curShowAchieveIndex - 1), !(this._ary.source.length <= 0)) {
                void 0 == this._selectVo && 0 != this._ary.length && (this._selectVo = this._ary.getItemAt(0));
                var e = AchieveXMLInfo.getTitleEffDesc(this._selectVo.titleId);
                if (e && "无称号特效" != e) {
                    this.noUpTitleDown.visible = this.hasUpTitleUp.visible = !1,
                    this.noUpTitleUp.visible = this.hasUpTitleDown.visible = !0;
                    var i = this._parseTileRenderData().filter(function(t) {
                        return t.isAbility
                    });
                    this.afterFilter(i)
                }
                this.currentSelectTitleInfo()
            }
        },
        i.prototype.updateRender = function() {
            var e = this,
            i = this._parseTileRenderData();
            if ("" !== this.editable_search.text) {
                var n = this.editable_search.text.trim();
                i = i.filter(function(t) {
                    return 0 !== t.titleId && SearchUtil.isMatch(n, t.titileName) ? !0 : !1
                }),
                this.Grp_noFind.visible = 0 === i.length,
                this.ahieveInfo.visible = !this.Grp_noFind.visible
            }
            this._ary.replaceAll(i),
            this._ary.refresh(),
            egret.setTimeout(function() {
                var i = e.isDressingHide || 0 == t.CardDataManaer.GetInstance().achieveShowArr[e.curShowAchieveIndex - 1];
                e.viewport_list.selectedIndex = i ? 0 : e.curShowAchieveIndex - 1,
                e._selectVo = e.viewport_list.selectedItem,
                t.CardDataManaer.GetInstance().addAchieveFromEmpty || e.isCancleLast ? t.CardDataManaer.GetInstance().curAchieveSelectId = 0 : t.CardDataManaer.GetInstance().curAchieveSelectId = e._selectVo.titleId,
                e.isCancleLast = !1,
                e.currentSelectTitleInfo()
            },
            this, 0)
        },
        i.prototype._parseTileRenderData = function() {
            for (var e = [], i = t.CardDataManaer.GetInstance().achieveShowArr, n = 0, r = 0, o = i; r < o.length; r++) {
                var a = o[r];
                n += a
            }
            this.isDressingHide = 0 >= n;
            for (var s = 0; s < i.length; s++) if (i[s] > 0 && this._cecheTileIds.indexOf(i[s]) > -1) {
                var h = {};
                h.titleId = i[s],
                h.isActivate = !0,
                h.isAbility = AchieveXMLInfo.isAbilityTitle(i[s]),
                h.titileName = AchieveXMLInfo.getTitle(i[s]),
                e.push(h)
            }
            for (var s = 0; s < this._cecheTileIds.length; s++) if (! (i.indexOf(this._cecheTileIds[s]) > -1)) {
                var _ = {};
                _.titleId = this._cecheTileIds[s],
                _.isActivate = !1,
                _.isAbility = AchieveXMLInfo.isAbilityTitle(this._cecheTileIds[s]),
                _.titileName = AchieveXMLInfo.getTitle(this._cecheTileIds[s]),
                e.push(_)
            }
            return e.sort(function(t, e) {
                return Number(e.isActivate) - Number(t.isActivate)
            }),
            e
        },
        i.prototype.currentSelectTitleInfo = function() {
            if (this._selectVo) {
                this.grp_titleInfo.visible = this._selectVo.titleId > 0,
                this.grp_yc.visible = this._selectVo.titleId <= 0,
                this.img_btn_qxzs.visible = this._selectVo.isActivate;
                var e = [];
                e = t.CardDataManaer.GetInstance().achieveShowArr.filter(function(t) {
                    return 0 != t
                });
                var i = t.CardDataManaer.GetInstance().achieveShowArr[t.CardDataManaer.GetInstance().curAchieveSelectIndex - 1] > 0;
                if (this.imgBtnExchange.visible = !this._selectVo.isActivate && i, this.img_btn_zs.visible = !this._selectVo.isActivate && !i, this._selectVo.titleId > 0) {
                    this.txtName.text = this._selectVo.titileName,
                    this.txtAchieve.text = AchieveXMLInfo.getTitleDesc(this._selectVo.titleId);
                    var n = AchieveXMLInfo.getTitleEffDesc(this._selectVo.titleId);
                    n && "无称号特效" != n ? (this.txtEff.visible = !0, this.txtNoEff.visible = !1) : (n = "", this.txtEff.visible = !1, this.txtNoEff.visible = !0),
                    this.txtEffect.text = n;
                    var r = AchieveXMLInfo.getTitleColor(this._selectVo.titleId);
                    this.imgIcon.source = 0 != r ? ClientConfig.getAchieveTitleIcon(this._selectVo.titleId) : ClientConfig.getAchieveIcon(AchieveXMLInfo.getTitleIconId(this._selectVo.titleId))
                }
            }
        },
        i.prototype.removeEvents = function() {
            this.editable_search.removeEventListener(egret.Event.CHANGE, this._onEditableChangeHandler, this),
            this.viewport_list.removeEventListener(eui.ItemTapEvent.ITEM_TAP, this.onTouchTapItemRenderHandle, this),
            ImageButtonUtil.removeAll(this),
            EventManager.removeEventListener("updateAchieveInfo", this.updateRender, this)
        },
        i.prototype.destroy = function() {
            this.removeEvents(),
            e.prototype.destroy.call(this)
        },
        i
    } (PopView);
    t.PersonalinformationAchieveShowPop = e,
    __reflect(e.prototype, "personalInformation.PersonalinformationAchieveShowPop")
} (personalInformation || (personalInformation = {}));
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
personalInformation; !
function(t) {
    var e = function(t) {
        function e(e) {
            var i = t.call(this) || this;
            return i.skinName = PersonalinformationCardGetPopSkin,
            i.target = e,
            i
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this),
            this.initialized(),
            this.addEvents()
        },
        e.prototype.initialized = function() {
            this.card.source = ClientConfig.getSmallCard(this.target.id),
            this.cardName.text = this.target.name
        },
        e.prototype.addEvents = function() {
            var t = this;
            ImageButtonUtil.add(this.btnclose,
            function() {
                t.hide()
            },
            this),
            ImageButtonUtil.add(this.btnExchange,
            function() {},
            this)
        },
        e.prototype.destroy = function() {
            t.prototype.destroy.call(this)
        },
        e
    } (PopView);
    t.PersonalinformationCardGetPop = e,
    __reflect(e.prototype, "personalInformation.PersonalinformationCardGetPop")
} (personalInformation || (personalInformation = {}));
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
personalInformation; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t.cards = [],
            t.arrayColletion = new eui.ArrayCollection([]),
            t.skinName = PersonalinformationIdCardCardpopSkin,
            t
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this._list.itemRenderer = t.PersonalCardItem,
            this._list.dataProvider = new eui.ArrayCollection([]),
            this.initialized(),
            this.addEvents()
        },
        i.prototype.initialized = function() {
            this.cards = config.Profilephoto.getItems().filter(function(t) {
                return 3 == t.type
            }),
            this.arrayColletion.removeAll(),
            this.arrayColletion = this._list.dataProvider,
            this.arrayColletion.replaceAll(this.cards);
            for (var e = 0; e < this.cards.length; e++) if (this.cards[e].id == t.CardDataManaer.GetInstance().curCardShowId) {
                this.curSelectInfo = this.cards[e];
                break
            }
            null == this.curSelectInfo && (this.curSelectInfo = this.cards[0]),
            this._list.selectedItem = this.curSelectInfo,
            this.btnUpdate()
        },
        i.prototype.addEvents = function() {
            var e = this;
            this._list.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.onTapCard, this),
            ImageButtonUtil.add(this.btnClose,
            function() {
                e.hide()
            },
            this),
            ImageButtonUtil.add(this.btnExchange,
            function() {
                t.CardDataManaer.GetInstance().ChangeCardBg(e.curSelectInfo.id,
                function() {
                    e.arrayColletion.replaceAll(e.cards),
                    e.btnUpdate()
                },
                e)
            },
            this)
        },
        i.prototype.onTapCard = function(t) {
            t.item && (this.curSelectInfo = t.item, this.btnUpdate(), core.AvatarDataMgr.GetInstance().GetIsNewFlag(this.curSelectInfo.id) && (core.AvatarDataMgr.GetInstance().onRemoveCacheNewAvatar(this.curSelectInfo.type, this.curSelectInfo.tab, this.curSelectInfo.id), this.arrayColletion.itemUpdated(this.curSelectInfo), EventManager.dispatchEventWith("RedPointCardEvent")))
        },
        i.prototype.btnUpdate = function() {
            this.txt_cardName.text = this.curSelectInfo.name,
            this.txt_cardInfo.text = this.curSelectInfo.desc,
            0 == t.CardDataManaer.GetInstance().curCardShowId && 1 == this.curSelectInfo.icon ? this.hasEquip.visible = !0 : this.hasEquip.visible = t.CardDataManaer.GetInstance().curCardShowId == this.curSelectInfo.id;
            var e = null != core.AvatarDataMgr.GetInstance().GetCardDataById(this.curSelectInfo.id);
            this.btnExchange.visible = e && t.CardDataManaer.GetInstance().curCardShowId != this.curSelectInfo.id,
            e ? this.btnGo.visible = !1 : this.btnGo.visible = !(1 === this.curSelectInfo.unavailable) && "" != this.curSelectInfo["goto"]
        },
        i.prototype.destroy = function() {
            e.prototype.destroy.call(this),
            ImageButtonUtil.removeAll(this),
            this._list.removeEventListener(eui.ItemTapEvent.ITEM_TAP, this.onTapCard, this)
        },
        i
    } (PopView);
    t.PersonalinformationCardpop = e,
    __reflect(e.prototype, "personalInformation.PersonalinformationCardpop")
} (personalInformation || (personalInformation = {}));
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
personalInformation; !
function(t) {
    var e = function(e) {
        function i(t) {
            var i = e.call(this, t) || this;
            return i._counterMarks = [0, 0, 0],
            i.isAttrState = !0,
            i.hasResist = !1,
            i.petInfoCatchtime = t,
            i.skinName = PersonalinformationPetshowSkin,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.damageResistList.itemRenderer = t.PersonalResistanceItem,
            this.debuffResistList.itemRenderer = t.PersonalResistanceItem,
            this.arrayCollection1 = new eui.ArrayCollection,
            this.arrayCollection2 = new eui.ArrayCollection,
            this.damageResistList.dataProvider = this.arrayCollection1,
            this.debuffResistList.dataProvider = this.arrayCollection2,
            this.petModel.SetInitComp(core.component.pet.PetModel.DYNAMIC_MODEL, !1, !1),
            this.petModel.SetCacheMax(10),
            this.petModel.offsetX = 100,
            e.prototype.childrenCreated.call(this),
            this.adaptLeftContent(this.grp_leftShow),
            this.adaptLeftContent(this.petModel),
            this.adaptRightContent(this.grp_rightShow),
            this.initData(this.petInfoCatchtime)
        },
        i.prototype.addEvent = function() {
            var e = this;
            ImageButtonUtil.add(this.btnClose,
            function() {
                e.onClose()
            },
            this),
            ImageButtonUtil.add(this.btnZhanShi,
            function() {
                var i = [];
                i = t.CardDataManaer.GetInstance().petShowArr.filter(function(t) {
                    return 0 != t
                });
                var n = i.length + 1;
                return n > 4 ? void BubblerManager.getInstance().showText("展示的精灵已达上限！") : (StatLogger.log("20221104版本系统功能", "个人信息面板", "自己的精灵详情-点击精灵的展示按钮"), SocketConnection.sendByQueue(CommandID.GET_IDCARD_USERINFO, [4, 0, n, e.petInfoCatchtime],
                function(t) {
                    EventManager.dispatchEventWith("updateCardInfo", !1, {
                        type: 1
                    }),
                    EventManager.dispatchEventWith("closeChoosePop")
                }), t.CardDataManaer.GetInstance().isExchangingPet = !1, void e.onClose())
            },
            this),
            ImageButtonUtil.add(this.btnCancel,
            function() {
                StatLogger.log("20221104版本系统功能", "个人信息面板", "自己的精灵详情-点击精灵的取消展示按钮");
                var i;
                i = t.CardDataManaer.GetInstance().petShowArr.indexOf(e.petInfoCatchtime) + 1,
                SocketConnection.sendByQueue(CommandID.GET_IDCARD_USERINFO, [4, 0, i, 0],
                function(t) {
                    EventManager.dispatchEventWith("updateCardInfo", !1, {
                        type: 1
                    })
                }),
                t.CardDataManaer.GetInstance().isExchangingPet = !1,
                e.onClose()
            },
            this),
            ImageButtonUtil.add(this.btnSwitch,
            function() {
                e.isAttrState = !e.isAttrState,
                e.currentState = e.isAttrState ? "attr": "resist",
                e.isAttrState ? e.imgNoShow.visible = !1 : (e.Te.visible = e.hasResist, e.imgNoShow.visible = !e.hasResist)
            },
            this),
            ImageButtonUtil.add(this.btnExchange,
            function() {
                var e = new t.PersonalinformationIdChoosepetpop;
                PopViewManager.getInstance().openView(e)
            },
            this),
            ImageButtonUtil.add(this.btnChange,
            function() {
                var i = [];
                i = t.CardDataManaer.GetInstance().petShowArr.filter(function(t) {
                    return 0 != t
                });
                var n = t.CardDataManaer.GetInstance().curPetSelectIndex;
                SocketConnection.sendByQueue(CommandID.GET_IDCARD_USERINFO, [4, 0, n, e.petInfoCatchtime],
                function(t) {
                    EventManager.dispatchEventWith("updateCardInfo", !1, {
                        type: 1
                    }),
                    EventManager.dispatchEventWith("closeChoosePop")
                }),
                t.CardDataManaer.GetInstance().isExchangingPet = !1,
                e.onClose()
            },
            this),
            this.petModel.addEventListener(core.component.pet.PetModel.EVENT_LOAD_COMPLETE, this.animPlay, this),
            EventManager.addEventListener(ModuleEvent.CLOSE_MODULE,
            function() {
                "personalInformation" == ModuleManager.currModule.moduleName && e.show()
            },
            this)
        },
        i.prototype.hide = function() {
            this.visible = !1,
            this.petModel.x = -100,
            this.grp_leftShow.x = -400,
            this.grp_rightShow.right = -345
        },
        i.prototype.hideWithoutMove = function() {
            this.visible = !1
        },
        i.prototype.initData = function(e) {
            var i = this;
            ImageButtonUtil.removeAll(this),
            this.addEvent();
            var n = null != e ? e: this.petInfoCatchtime;
            this.petInfoCatchtime = n;
            var r = "number" != typeof n;
            if (t.CardDataManaer.GetInstance().isSelf) {
                this.btnExchange.visible = -1 != t.CardDataManaer.GetInstance().petShowArr.indexOf(n),
                this.btnZhanShi.visible = -1 == t.CardDataManaer.GetInstance().petShowArr.indexOf(n),
                this.btnCancel.visible = -1 != t.CardDataManaer.GetInstance().petShowArr.indexOf(n);
                var o = t.CardDataManaer.GetInstance().curPetSelectIndex - 1;
                this.btnChange.visible = -1 == t.CardDataManaer.GetInstance().petShowArr.indexOf(n) && t.CardDataManaer.GetInstance().petShowArr[o] > 0
            } else this.btnCancel.visible = this.btnZhanShi.visible = !1,
            this.btnExchange.visible = this.btnChange.visible = !1;
            if (this.currentState = "attr", this.isAttrState = !0, r) {
                var a = n.petId;
                this.petName.text = PetXMLInfo.getName(a),
                this.icon_type.source = ClientConfig.getpettypeticon(PetXMLInfo.getType(a) + ""),
                0 != n.skinId ? this.petModel.SetPetData(PetSkinXMLInfo.getSkinInfo(n.skinId).skinPetId) : this.petModel.SetPetData(a),
                this.txtLevel.text = n.lv + "",
                this.txtHP.text = n.tool_add_hp + "/20",
                this.txtNature.text = n.dv + "",
                this.txtEffect.text = NatureXMLInfo.getName(n.nature),
                this.txtEffectInfo.text = "(" + NatureXMLInfo.getDes2(n.nature) + ")",
                this.txtStudy.text = n.ev_attack + n.ev_defence + n.ev_sa + n.ev_sd + n.ev_sp + n.ev_hp + "",
                this.txtAttack.text = n.ev_attack + "",
                this.txtSAttack.text = n.ev_sa + "",
                this.txtDefence.text = n.ev_defence + "",
                this.txtSDefence.text = n.ev_sd + "",
                this.txtSpeed.text = n.ev_sp + "",
                this.txtHealth.text = n.ev_hp + "";
                var s = PetEffectXMLInfo.getEffctInfoByIdx(n.new_se);
                if (s) {
                    this.txtSEffectInfo.visible = !0,
                    this.txtSEffectInfo.text = "(" + s.Intro + ")",
                    this.txtSEffect.text = s.Desc;
                    for (var h = 1; 5 >= h; h++) this["icon_star_" + h].source = s.StarLevel >= h ? "personalinformationidcardpetshow_icon_star_png": "personalinformationidcardpetshow_icon_star_bg_png"
                } else {
                    this.txtSEffect.text = "无",
                    this.txtSEffectInfo.visible = !1;
                    for (var h = 1; 5 >= h; h++) this["icon_star_" + h].source = "personalinformationidcardpetshow_icon_star_bg_png"
                }
                for (var _ = function(e) {
                    if (u["mark" + (e + 1)].visible = u["hasStoneBg" + (e + 1)].visible = u["imgStone" + (e + 1)].visible = u["txt_markLevel" + (e + 1)].visible = u["txt_markName" + (e + 1)].visible = 0 != n.marksInfo[e].markid, u["img_null_" + (e + 1)].visible = !u["mark" + (e + 1)].visible, 0 != n.marksInfo[e].markid) {
                        u["mark" + (e + 1)].source = CountermarkXMLInfo.getIconURL(n.marksInfo[e].markid),
                        ImageButtonUtil.add(u["minimark" + (e + 1)],
                        function() {
                            var i = new t.OtherMarkTips(n.marksInfo[e].markid, n.marksInfo[e].gemid);
                            PopViewManager.getInstance().openView(i)
                        },
                        u, !1, !1);
                        var i = 0 != n.marksInfo[e].gemid;
                        u["hasStoneBg" + (e + 1)].visible = i,
                        u["noStoneBg" + (e + 1)].visible = !i,
                        u["imgStone" + (e + 1)].source = i ? ItemXMLInfo.getIconURL(n.marksInfo[e].gemid) : "",
                        u["txt_markLevel" + (e + 1)].visible = 3 == CountermarkXMLInfo.getType(n.marksInfo[e].markid),
                        u["txt_markLevel" + (e + 1)].text = "LV." + n.marksInfo[e].markLv;
                        var r = CountermarkXMLInfo.getDes(n.marksInfo[e].markid);
                        r.length > 5 && (r = r.slice(0, 5), r += ".."),
                        u["txt_markName" + (e + 1)].text = r
                    }
                },
                u = this, h = 0; 3 > h; h++) _(h);
                if (2 == n.resist_state) {
                    this.hasResist = !0;
                    var l = [[1, "personalinformationidcardpetshow_icon_sh_0_png", "致命伤害减免", ResistanceSysController.getResistanceByLevel(0, n.cirt).present + n.cirt_adj + "%"], [1, "personalinformationidcardpetshow_icon_sh_1_png", "固定伤害减免", ResistanceSysController.getResistanceByLevel(0, n.regular).present + n.regular_adj + "%"], [1, "personalinformationidcardpetshow_icon_sh_2_png", "百分比伤害减免", ResistanceSysController.getResistanceByLevel(0, n.precent).present + n.precent_adj + "%"]];
                    this.arrayCollection1.source = l;
                    for (var c = [], h = 0; 3 > h; h++) c[h] = [2, ClientConfig.getBattleEffectIcon(n["ctl_" + (h + 1) + "_idx"]), "免疫" + PetStatusEffectConfig.getName(0, n["ctl_" + (h + 1) + "_idx"]) + "：", ResistanceSysController.getResistanceByLevel(1, n["ctl_" + (h + 1)]).present + n["ctl_" + (h + 1) + "_adj"] + n.resist_all + "%"];
                    for (var h = 3; 6 > h; h++) c[h] = [2, ClientConfig.getBattleEffectIcon(n["weak_" + (h - 2) + "_idx"]), "免疫" + PetStatusEffectConfig.getName(0, n["weak_" + (h - 2) + "_idx"]) + "：", ResistanceSysController.getResistanceByLevel(1, n["weak_" + (h - 2)]).present + n["weak_" + (h - 2) + "_adj"] + n.resist_all + "%"];
                    this.arrayCollection2.source = c
                } else this.hasResist = !1
            } else PetManager.upDateBagPetInfo(n,
            function(t) {
                var e = t.id;
                i.petName.text = PetXMLInfo.getName(e),
                i.icon_type.source = ClientConfig.getpettypeticon(PetXMLInfo.getType(e) + ""),
                0 != t.skinId ? i.petModel.updateTempView(PetSkinXMLInfo.getSkinInfo(t.skinId).skinPetId) : i.petModel.updateTempView(e),
                i._counterMarks[0] = t.abilityMark,
                i._counterMarks[1] = t.skillMark,
                i._counterMarks[2] = t.commonMark,
                i.txtLevel.text = t.level + "",
                i.txtHP.text = "0/20",
                SocketConnection.sendByQueue(CommandID.JAMES_ARMOR_QUERY_ABIBLITY, [t.catchTime],
                function(t) {
                    var e = t.data;
                    i.txtHP.text = e.readUnsignedInt() + "/20"
                }),
                i.txtNature.text = t.dv + "",
                i.txtEffect.text = NatureXMLInfo.getName(t.nature),
                i.txtEffectInfo.text = "(" + NatureXMLInfo.getDes2(t.nature) + ")",
                i.txtStudy.text = t.ev_attack + t.ev_defence + t.ev_sa + t.ev_sd + t.ev_sp + t.ev_hp + "/510",
                i.txtAttack.text = t.ev_attack + "",
                i.txtSAttack.text = t.ev_sa + "",
                i.txtDefence.text = t.ev_defence + "",
                i.txtSDefence.text = t.ev_sd + "",
                i.txtSpeed.text = t.ev_sp + "",
                i.txtHealth.text = t.ev_hp + "";
                var n = PetManager.getPetEffect(t);
                if (n) {
                    var r = PetEffectXMLInfo.getEffect(n.effectID, n.args),
                    o = PetEffectXMLInfo.getStarLevel(n.effectID, n.args);
                    i.txtSEffectInfo.visible = !0,
                    i.txtSEffectInfo.text = "(" + PetEffectXMLInfo.getEffectDes(n.effectID, n.args) + ")",
                    i.txtSEffect.text = r;
                    for (var a = 1; 5 >= a; a++) i["icon_star_" + a].source = o >= a ? "personalinformationidcardpetshow_icon_star_png": "personalinformationidcardpetshow_icon_star_bg_png"
                } else {
                    i.txtSEffect.text = "无",
                    i.txtSEffectInfo.visible = !1;
                    for (var a = 1; 5 >= a; a++) i["icon_star_" + a].source = "personalinformationidcardpetshow_icon_star_bg_png"
                }
                i._counterMarks[0] = t.abilityMark,
                i._counterMarks[1] = t.skillMark,
                i._counterMarks[2] = t.commonMark;
                for (var s, h = function(e) {
                    if (s = CountermarkXMLInfo.getMarkId(i._counterMarks[e]), i["mark" + (e + 1)].visible = i["hasStoneBg" + (e + 1)].visible = i["imgStone" + (e + 1)].visible = i["txt_markLevel" + (e + 1)].visible = i["txt_markName" + (e + 1)].visible = s > 0, i["img_null_" + (e + 1)].visible = !i["mark" + (e + 1)].visible, s) {
                        i["mark" + (e + 1)].source = CountermarkXMLInfo.getIconURL(s);
                        var n = {
                            ins: CountermarkController.getInfoTemp(i._counterMarks[e])
                        },
                        r = n.ins;
                        n.fromPetBag = !0,
                        ImageButtonUtil.add(i["minimark" + (e + 1)],
                        function() {
                            StatLogger.log("20221104版本系统功能", "个人信息面板", "自己的精灵详情-点击查看刻印"),
                            r.bindMonID = t.id,
                            tipsPop.TipsPop.openCounterMarkPop(n)
                        },
                        i, !1, !1);
                        var o = r.isBindGem;
                        i["hasStoneBg" + (e + 1)].visible = o,
                        i["noStoneBg" + (e + 1)].visible = !o,
                        i["imgStone" + (e + 1)].source = o ? ItemXMLInfo.getIconURL(r.gemID) : "",
                        i["txt_markLevel" + (e + 1)].visible = 3 == CountermarkXMLInfo.getType(s),
                        i["txt_markLevel" + (e + 1)].text = "LV." + r.level;
                        var a = r.markName;
                        a.length > 5 && (a = a.slice(0, 5), a += ".."),
                        i["txt_markName" + (e + 1)].text = a
                    }
                },
                a = 0; 3 > a; a++) h(a);
                if (2 == t.resistanceinfo.resist_state) {
                    i.hasResist = !0;
                    var _ = [[1, "personalinformationidcardpetshow_icon_sh_0_png", "致命伤害减免", ResistanceSysController.getResistanceByLevel(0, t.resistanceinfo.cirt).present + t.resistanceinfo.cirt_adj + "%"], [1, "personalinformationidcardpetshow_icon_sh_1_png", "固定伤害减免", ResistanceSysController.getResistanceByLevel(0, t.resistanceinfo.regular).present + t.resistanceinfo.regular_adj + "%"], [1, "personalinformationidcardpetshow_icon_sh_2_png", "百分比伤害减免", ResistanceSysController.getResistanceByLevel(0, t.resistanceinfo.precent).present + t.resistanceinfo.precent_adj + "%"]];
                    i.arrayCollection1.source = _;
                    for (var u = [], a = 0; 3 > a; a++) u[a] = [2, ClientConfig.getBattleEffectIcon(t.resistanceinfo["ctl_" + (a + 1) + "_idx"]), "免疫" + PetStatusEffectConfig.getName(0, t.resistanceinfo["ctl_" + (a + 1) + "_idx"]) + "：", ResistanceSysController.getResistanceByLevel(1, t.resistanceinfo["ctl_" + (a + 1)]).present + t.resistanceinfo["ctl_" + (a + 1) + "_adj"] + t.resistanceinfo.resist_all + "%"];
                    for (var a = 3; 6 > a; a++) u[a] = [2, ClientConfig.getBattleEffectIcon(t.resistanceinfo["weak_" + (a - 2) + "_idx"]), "免疫" + PetStatusEffectConfig.getName(0, t.resistanceinfo["weak_" + (a - 2) + "_idx"]) + "：", ResistanceSysController.getResistanceByLevel(1, t.resistanceinfo["weak_" + (a - 2)]).present + t.resistanceinfo["weak_" + (a - 2) + "_adj"] + t.resistanceinfo.resist_all + "%"];
                    i.arrayCollection2.source = u
                } else i.hasResist = !1
            })
        },
        i.prototype.show = function() {
            e.prototype.show.call(this),
            this.isAttrState = !0,
            this.currentState = "attr",
            this.imgNoShow.visible = !1
        },
        i.prototype.animPlay = function() {
            var t = egret.Ease.cubicInOut;
            this.grp_leftShow.alpha = 0,
            egret.Tween.get(this.grp_leftShow).to({
                x: 0,
                alpha: 1
            },
            500, t),
            egret.Tween.get(this.grp_rightShow).to({
                right: 45
            },
            500, t),
            egret.Tween.get(this.petModel).to({
                x: 0
            },
            500, t)
        },
        i.prototype.onClose = function() {
            if (e.prototype.onClose.call(this), t.CardDataManaer.GetInstance().isExchangingPet) {
                t.CardDataManaer.GetInstance().isExchangingPet = !1;
                var i = new t.PersonalinformationIdChoosepetpop;
                PopViewManager.getInstance().openView(i)
            }
        },
        i.prototype.destroy = function() {
            e.prototype.destroy.call(this),
            this.petModel.destroy(),
            ImageButtonUtil.removeAll(this),
            this.petModel.removeEventListener(core.component.pet.PetModel.EVENT_LOAD_COMPLETE, this.animPlay, this),
            t.CardDataManaer.GetInstance().isShowCardPet = !1
        },
        i
    } (BaseModule);
    t.PersonalinformationIdCardPetshow = e,
    __reflect(e.prototype, "personalInformation.PersonalinformationIdCardPetshow")
} (personalInformation || (personalInformation = {}));
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
personalInformation; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t.SORT_CONFIG = {
                id_down: {
                    name: "ID顺序",
                    sortImg: "warehouse_img_down_png"
                },
                id_up: {
                    name: "ID顺序",
                    sortImg: "warehouse_img_up_png"
                },
                lvl_down: {
                    name: "等级顺序",
                    sortImg: "warehouse_img_down_png"
                },
                lvl_up: {
                    name: "等级顺序",
                    sortImg: "warehouse_img_up_png"
                },
                tm_down: {
                    name: "获得顺序",
                    sortImg: "warehouse_img_down_png"
                },
                tm_up: {
                    name: "获得顺序",
                    sortImg: "warehouse_img_up_png"
                }
            },
            t._serchstr = "",
            t.allHavePets = [],
            t._arrycollertion = new eui.ArrayCollection,
            t._currentAttributeId = 0,
            t.skinName = PersonalinformationIdChoosepetpopSkin,
            t
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this._listPets.itemRenderer = t.personalPetChooseItem,
            this._listPets.dataProvider = this._arrycollertion,
            this.setSortInfo(),
            this.initDat(),
            this.addEvents(),
            t.CardDataManaer.GetInstance().choosePetPop = this
        },
        i.prototype.setSortInfo = function() {
            return this._currentSortType ? (this.lab_select_sort.text = this.SORT_CONFIG[this._currentSortType].name, void(this.img_btn_sort.source = this.SORT_CONFIG[this._currentSortType].sortImg)) : void(this.lab_select_sort.text = "默认顺序")
        },
        i.prototype.initDat = function() {
            var t = this;
            PetStorage2015InfoManager.allInfo ? this.initPetInfo() : PetStorage2015InfoManager.getTotalInfo(function() {
                t.initPetInfo()
            })
        },
        i.prototype.initPetInfo = function() {
            for (var e = PetManager.getBagMap(!0), i = 0, n = e; i < n.length; i++) {
                var r = n[i];
                r.type = PetXMLInfo.getType(r.id)
            }
            var o = PetStorage2015InfoManager.allInfo,
            a = e.map(function(t) {
                var e = [];
                return e.id = t.id,
                e.catchTime = t.catchTime,
                e.level = t.level,
                e.type = t.type,
                e
            }).concat(o.map(function(t) {
                var e = [];
                return e.id = t.id,
                e.catchTime = t.catchTime,
                e.level = t.level,
                e.type = t.type,
                e
            }));
            this.allHavePets = a;
            var s = t.CardDataManaer.GetInstance().petShowArr;
            this.allHavePets.sort(function(t, e) {
                var i = t.id,
                n = e.id;
                return s.indexOf(t.catchTime) > -1 ? n = 0 : s.indexOf(e.catchTime) > -1 && (i = 0),
                n - i
            }),
            this._arrycollertion.removeAll();
            for (var h = 0; h < this.allHavePets.length; h++) this._arrycollertion.addItem(this.allHavePets[h]);
            this._listPets.dataProvider = this._arrycollertion
        },
        i.prototype.addEvents = function() {
            var t = this;
            ImageButtonUtil.add(this.btnClose,
            function() {
                t.hide()
            },
            this),
            ImageButtonUtil.add(this.btnShaixuan,
            function() {
                t.openSelectAttributePanel()
            },
            this, !1),
            this.bg_mask.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickHandle, this),
            ImageButtonUtil.add(this.img_btn_search_name, this.clickHandle, this),
            ImageButtonUtil.add(this.grp_btn_sort, this.clickHandle, this, !1),
            this.rb_id_sort_down.group.addEventListener(egret.Event.CHANGE, this.onChangeSortType, this),
            EventManager.addEventListener("updateChooseInfo", this.updatePets, this),
            EventManager.addEventListener("closeChoosePop", this.hide, this)
        },
        i.prototype.clickHandle = function(t) {
            switch (t.target) {
            case this.img_btn_search_name:
                this._serchstr = this.editable_search.text,
                this.resetScrollContextSize(),
                this.updatePets(),
                this._serchstr = "";
                break;
            case this.grp_btn_sort:
            case this.img_btn_sort:
                this.showSortTypePanel();
                break;
            case this.bg_mask:
                this.grp_select_sort.visible && this.hideSortTypePanel(),
                this.bg_mask.visible = !1
            }
        },
        i.prototype.showSortTypePanel = function() {
            var t = this._currentSortType;
            t && (this.rb_id_sort_down.group.selectedValue = t),
            this.grp_select_sort.alpha = 0,
            this.bg_mask.visible = !0,
            this.grp_select_sort.visible = !0,
            egret.Tween.removeTweens(this.grp_select_sort),
            egret.Tween.get(this.grp_select_sort).to({
                alpha: 1
            },
            300)
        },
        i.prototype.hideSortTypePanel = function() {
            var t = this;
            egret.Tween.removeTweens(this.grp_select_sort),
            egret.Tween.get(this.grp_select_sort).to({
                alpha: 0
            },
            300).call(function() {
                t.grp_select_sort.visible = !1
            },
            this),
            this.bg_mask.visible = !1
        },
        i.prototype.onChangeSortType = function(t) {
            this.hideSortTypePanel(),
            StatLogger.log("1023版本系统功能", "精灵界面", "精灵仓库界面点击ID顺序筛选按钮"),
            this._currentSortType = this.rb_id_sort_down.group.selectedValue,
            this.setSortInfo(),
            this.resetScrollContextSize(),
            this.updatePets()
        },
        i.prototype.resetScrollContextSize = function() {
            this._scorl.stopAnimation(),
            this._scorl.viewport.validateNow(),
            this._scorl.viewport.scrollV = 0
        },
        i.prototype.openSelectAttributePanel = function() {
            var t = {
                callBack: this.onChangeAttributeIdHanlder,
                caller: this,
                selectId: this._currentAttributeId,
                unAutoClose: !1,
                relativeSet: {
                    srcWorldPos: this.btnShaixuan.localToGlobal(),
                    dir: "left-top",
                    rx: 86,
                    ry: 34
                }
            };
            ModuleManager.showModule("petChooseAttributePanel", ["pet_choose_attribute_panel"], t, "", AppDoStyle.NULL)
        },
        i.prototype.onChangeAttributeIdHanlder = function(t, e) {
            console.log("当前选择的属性类型为" + e),
            this._currentAttributeId = ~~e,
            this.bg_mask.visible = !1,
            this.resetScrollContextSize(),
            this.initPetInfo(),
            this.updatePets()
        },
        i.prototype.checkIsSerchstr = function(t) {
            if (!this._serchstr) return t;
            var e = [];
            if (Number(this._serchstr)) for (var i = Number(this._serchstr), n = 0; n < t.length; n++) {
                var r = t[n];
                r.id === i && e.push(r)
            } else for (var n = 0; n < t.length; n++) {
                var r = t[n],
                o = PetXMLInfo.getName(r.id); - 1 != o.indexOf(this._serchstr) && e.push(r)
            }
            return e
        },
        i.prototype.updatePets = function() {
            var t = this,
            e = this.allHavePets;
            if (0 != this._currentAttributeId && (e = this.allHavePets.filter(function(e) {
                return e.type == t._currentAttributeId
            })), this._currentSortType) switch (this._currentSortType) {
            case "id_down":
                e.sort(function(t, e) {
                    return e.id - t.id
                });
                break;
            case "id_up":
                e.sort(function(t, e) {
                    return t.id - e.id
                });
                break;
            case "lvl_down":
                e.sort(function(t, e) {
                    return e.level - t.level
                });
                break;
            case "lvl_up":
                e.sort(function(t, e) {
                    return t.level - e.level
                });
                break;
            case "tm_down":
                e.sort(function(t, e) {
                    return e.catchTime - t.catchTime
                });
                break;
            case "tm_up":
                e.sort(function(t, e) {
                    return t.catchTime - e.catchTime
                })
            }
            e = this.checkIsSerchstr(e),
            this._arrycollertion.replaceAll(e)
        },
        i.prototype.hide = function() {
            e.prototype.hide.call(this),
            t.CardDataManaer.GetInstance().isExchangingPet = !1
        },
        i.prototype.destroy = function() {
            e.prototype.destroy.call(this),
            EventManager.removeEventListener("updateChooseInfo", this.updatePets, this),
            EventManager.removeEventListener("closeChoosePop", this.hide, this),
            this.bg_mask.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.clickHandle, this),
            this.rb_id_sort_down.group.removeEventListener(egret.Event.CHANGE, this.onChangeSortType, this),
            this.bg_mask = null,
            this._arrycollertion.removeAll(),
            this.allHavePets = null,
            ImageButtonUtil.removeAll(this),
            egret.Tween.removeTweens(this.grp_select_sort),
            t.CardDataManaer.GetInstance().choosePetPop = null
        },
        i
    } (PopView);
    t.PersonalinformationIdChoosepetpop = e,
    __reflect(e.prototype, "personalInformation.PersonalinformationIdChoosepetpop")
} (personalInformation || (personalInformation = {}));
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
personalInformation; !
function(t) {
    var e = function(e) {
        function n() {
            var t = e.call(this) || this;
            return t.skinName = ResourceCenterActSkin,
            t
        }
        return __extends(n, e),
        n.prototype.createChildren = function() {
            e.prototype.createChildren.call(this),
            ImageButtonUtil.add(this.btnClose, this.hide, this),
            this._list.itemRenderer = t.ResourceCenterActItem,
            this.updateView(),
            GameInfo.isChecking && (this.tx_desc.visible = !1)
        },
        n.prototype.updateView = function() {
            var t = this;
            SocketConnection.sendByQueue(41433, [],
            function(e) {
                for (var n = e.data,
                r = n.readUnsignedInt(), o = [], a = 0; r > a; a++) {
                    var s = new i;
                    s.id = n.readUnsignedInt(),
                    s.daily_num = n.readUnsignedInt(),
                    s.max_num = n.readUnsignedInt(),
                    o.push(s)
                }
                t._list.dataProvider = new eui.ArrayCollection(o)
            })
        },
        n.prototype.destroy = function() {
            e.prototype.destroy.call(this),
            ImageButtonUtil.removeAll(this)
        },
        n
    } (PopView);
    t.ResourceCenterAct = e,
    __reflect(e.prototype, "personalInformation.ResourceCenterAct");
    var i = function() {
        function t() {}
        return t
    } ();
    t.resource_item_info = i,
    __reflect(i.prototype, "personalInformation.resource_item_info")
} (personalInformation || (personalInformation = {}));
var __reflect = this && this.__reflect ||
function(t, e, i) {
    t.__class__ = e,
    i ? i.push(e) : i = [e],
    t.__types__ = t.__types__ ? i.concat(t.__types__) : i
},
personalInformation; !
function(t) {
    var e = function() {
        function t() {}
        return t.EVENT_TOUCHTAP_CLOTH_ITEM = "event_touchtap_cloth_item",
        t
    } ();
    t.EventKeys = e,
    __reflect(e.prototype, "personalInformation.EventKeys")
} (personalInformation || (personalInformation = {}));
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
personalInformation; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t.skinName = "AchieveTitleItemSkin",
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
        i.prototype.dataChanged = function() {
            this._vo = this.data,
            this.imgCurrSelect.visible = t.CardDataManaer.GetInstance().curAchieveSelectId == this._vo.titleId,
            this.Img_used.visible = this._vo.isActivate,
            this.Icon_UP.visible = this._vo.isAbility,
            this._vo.titleId <= 0 ? (this.groupHide.visible = !0, this.txt_name.visible = !1) : (this.txt_name.visible = !0, this.groupHide.visible = !1, this.txt_name.text = this._vo.titileName)
        },
        i.prototype.getVo = function() {
            return this._vo
        },
        i.prototype.destroy = function() {
            this.removeEvents()
        },
        i
    } (eui.ItemRenderer);
    t.AchieveTitleItem = e,
    __reflect(e.prototype, "personalInformation.AchieveTitleItem")
} (personalInformation || (personalInformation = {}));
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
personalInformation; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t.skinName = personalAchieveItemSkin,
            t
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            var i = this;
            e.prototype.childrenCreated.call(this),
            this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this),
            ImageButtonUtil.add(this.grp_achieve,
            function() {
                if (t.CardDataManaer.GetInstance().isSelf) {
                    i.img_add.visible && StatLogger.log("20221104版本系统功能", "个人信息面板", "自己信息面板-点击加号打开称号选择界面"),
                    0 != i.data.info ? t.CardDataManaer.GetInstance().addAchieveFromEmpty = !1 : t.CardDataManaer.GetInstance().addAchieveFromEmpty = !0;
                    var e = {};
                    e.caller = i,
                    e.getCurrentTitleIdFunc = i._getMyTitleId,
                    t.CardDataManaer.GetInstance().curAchieveSelectIndex = i.data.id;
                    var n = new t.PersonalinformationAchieveShowPop(e);
                    PopViewManager.getInstance().openView(n)
                }
            },
            this)
        },
        i.prototype._getMyTitleId = function() {
            return MainManager.actorInfo.curTitle
        },
        i.prototype.dataChanged = function() {
            if (this.data) {
                var e = t.CardDataManaer.GetInstance().isSelf;
                if (0 != this.data.info) {
                    var i = (AchieveXMLInfo.getAchievePoint(this.data.info), AchieveXMLInfo.getTitleColor(this.data.info));
                    this.achieveIcon.source = 0 != i ? ClientConfig.getAchieveTitleIcon(this.data.info) : ClientConfig.getAchieveIcon(AchieveXMLInfo.getTitleIconId(this.data.info)),
                    this.txtAchieveName.visible = !0;
                    var n = AchieveXMLInfo.getTitle(this.data.info);
                    n.length > 4 && (n = n.slice(0, 4), n += ".."),
                    this.txtAchieveName.text = n
                } else this.itembg.source = null,
                this.achieveIcon.source = null,
                this.img_add.visible = e,
                this.img_null.visible = !e,
                this.txtAchieveName.visible = !1
            }
        },
        i.prototype.destroy = function() {
            this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this),
            ImageButtonUtil.removeAll(this)
        },
        i
    } (eui.ItemRenderer);
    t.personalAchieveItem = e,
    __reflect(e.prototype, "personalInformation.personalAchieveItem")
} (personalInformation || (personalInformation = {}));
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
personalInformation; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t.skinName = PersonalCardItemSkin,
            t
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            this.img_selected.visible = !1
        },
        i.prototype.dataChanged = function() {
            this.value = this.data,
            this.img_card.source = ClientConfig.getSmallCard(this.value.icon);
            var e = core.AvatarDataMgr.GetInstance().GetIsNewFlag(this.value.id);
            this.img_new.visible = e,
            this.locked.visible = null === core.AvatarDataMgr.GetInstance().GetCardDataById(this.value.id),
            0 == t.CardDataManaer.GetInstance().curCardShowId && 1 == this.value.icon ? this.hasEquipt.visible = !0 : this.hasEquipt.visible = t.CardDataManaer.GetInstance().curCardShowId == this.value.id
        },
        Object.defineProperty(i.prototype, "selected", {
            set: function(t) {
                this.img_selected.visible = t
            },
            enumerable: !0,
            configurable: !0
        }),
        i
    } (eui.ItemRenderer);
    t.PersonalCardItem = e,
    __reflect(e.prototype, "personalInformation.PersonalCardItem")
} (personalInformation || (personalInformation = {}));
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
        function a(t) {
            try {
                h(n.next(t))
            } catch(e) {
                o(e)
            }
        }
        function s(t) {
            try {
                h(n["throw"](t))
            } catch(e) {
                o(e)
            }
        }
        function h(t) {
            t.done ? r(t.value) : new i(function(e) {
                e(t.value)
            }).then(a, s)
        }
        h((n = n.apply(t, e || [])).next())
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
        for (; h;) try {
            if (r = 1, o && (a = o[2 & i[0] ? "return": i[0] ? "throw": "next"]) && !(a = a.call(o, i[1])).done) return a;
            switch (o = 0, a && (i = [0, a.value]), i[0]) {
            case 0:
            case 1:
                a = i;
                break;
            case 4:
                return h.label++,
                {
                    value: i[1],
                    done: !1
                };
            case 5:
                h.label++,
                o = i[1],
                i = [0];
                continue;
            case 7:
                i = h.ops.pop(),
                h.trys.pop();
                continue;
            default:
                if (a = h.trys, !(a = a.length > 0 && a[a.length - 1]) && (6 === i[0] || 2 === i[0])) {
                    h = 0;
                    continue
                }
                if (3 === i[0] && (!a || i[1] > a[0] && i[1] < a[3])) {
                    h.label = i[1];
                    break
                }
                if (6 === i[0] && h.label < a[1]) {
                    h.label = a[1],
                    a = i;
                    break
                }
                if (a && h.label < a[2]) {
                    h.label = a[2],
                    h.ops.push(i);
                    break
                }
                a[2] && h.ops.pop(),
                h.trys.pop();
                continue
            }
            i = e.call(t, h)
        } catch(n) {
            i = [6, n],
            o = 0
        } finally {
            r = a = 0
        }
        if (5 & i[0]) throw i[1];
        return {
            value: i[0] ? i[1] : void 0,
            done: !0
        }
    }
    var r, o, a, s, h = {
        label: 0,
        sent: function() {
            if (1 & a[0]) throw a[1];
            return a[1]
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
personalInformation; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t.skinName = personalPetChooseItemSkin,
            t
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            ImageButtonUtil.add(this.petItem, this.onTap, this),
            this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this)
        },
        i.prototype.onTap = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                return __generator(this,
                function(e) {
                    switch (e.label) {
                    case 0:
                        return this.hasShow.visible ? (BubblerManager.getInstance().showText("已展示该精灵，请选择别的精灵"), [2]) : (t.CardDataManaer.GetInstance().choosePetPop.hide(), t.CardDataManaer.GetInstance().isShowCardPet ? [4, ModuleManager.hideModule(ModuleManager.currModule)] : [3, 2]);
                    case 1:
                        e.sent(),
                        e.label = 2;
                    case 2:
                        return t.CardDataManaer.GetInstance().isExchangingPet = !0,
                        ModuleManager.showModuleByID(267, this.data.catchTime),
                        [2]
                    }
                })
            })
        },
        i.prototype.dataChanged = function() {
            var e = this;
            this.data && (PetManager.upDateBagPetInfo(this.data.catchTime,
            function(t) {
                e.petHead.source = ClientConfig.getPetHeadPath(t.id, t.catchTime, t.skinId)
            }), this.hasShow.visible = t.CardDataManaer.GetInstance().petShowArr.indexOf(this.data.catchTime) > -1, this.petName.text = StringUtil.parseStrLimitLen(PetXMLInfo.getName(this.data.id), 5))
        },
        i.prototype.destroy = function() {
            this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this),
            ImageButtonUtil.removeAll(this)
        },
        i
    } (eui.ItemRenderer);
    t.personalPetChooseItem = e,
    __reflect(e.prototype, "personalInformation.personalPetChooseItem")
} (personalInformation || (personalInformation = {}));
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
personalInformation; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t.skinName = personalPetShowItemSkin,
            t
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this),
            ImageButtonUtil.add(this.img_add,
            function() {
                StatLogger.log("20221104版本系统功能", "个人信息面板", "自己信息面板-点击加号打开精灵选择界面");
                var e = new t.PersonalinformationIdChoosepetpop;
                PopViewManager.getInstance().openView(e)
            },
            this),
            ImageButtonUtil.add(this.grp_petHead,
            function() {},
            this)
        },
        i.prototype.dataChanged = function() {
            var e = this;
            if (this.data) {
                var i = t.CardDataManaer.GetInstance().isSelf;
                if (i) this.data.info ? PetManager.upDateBagPetInfo(this.data.info,
                function(t) {
                    var n = t.id;
                    e.btnWatchOther.visible = !i && n > 0,
                    e.petHead.source = ClientConfig.getPetHeadPath(t.id, t.catchTime, t.skinId)
                },
                function() {
                    e.petHead.source = null,
                    e.img_add.visible = i,
                    e.img_null.visible = !i,
                    e.btnWatchOther.visible = !1;
                    var t = e.data.id;
                    SocketConnection.sendByQueue(CommandID.GET_IDCARD_USERINFO, [4, 0, t, 0],
                    function(t) {
                        EventManager.dispatchEventWith("updateCardInfo"),
                        EventManager.dispatchEventWith("closePetShowPop")
                    })
                }) : (this.itembg.source = null, this.petHead.source = null, this.img_add.visible = i, this.img_null.visible = !i, this.btnWatchOther.visible = !1);
                else if (this.data.info) {
                    var n = this.data.info.petId;
                    this.btnWatchOther.visible = !i && n > 0,
                    0 != this.data.info.skinId ? this.petHead.source = ClientConfig.getPetHeadPath(PetSkinXMLInfo.getSkinPetId(this.data.info.skinId, n)) : this.petHead.source = ClientConfig.getPetHeadPath(n)
                } else this.itembg.source = null,
                this.petHead.source = null,
                this.img_add.visible = i,
                this.img_null.visible = !i,
                this.btnWatchOther.visible = !1
            }
        },
        i.prototype.destroy = function() {
            this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this),
            ImageButtonUtil.removeAll(this)
        },
        i
    } (eui.ItemRenderer);
    t.personalPetShowItem = e,
    __reflect(e.prototype, "personalInformation.personalPetShowItem")
} (personalInformation || (personalInformation = {}));
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
personalInformation; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.skinName = personalResistanceItemSkin,
            e.cacheAsBitmap = !0,
            e
        }
        return __extends(e, t),
        e.prototype.dataChanged = function() {
            this.width = 1 == this.data[0] ? 331 : 153,
            this.imgIcon.source = this.data[1],
            this.txtName.text = this.data[2],
            this.txtValue.text = this.data[3]
        },
        e
    } (BaseItemRenderer);
    t.PersonalResistanceItem = e,
    __reflect(e.prototype, "personalInformation.PersonalResistanceItem")
} (personalInformation || (personalInformation = {}));
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
personalInformation; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.skinName = ResourceCenterActItemSkin,
            e
        }
        return __extends(e, t),
        e.prototype.createChildren = function() {
            t.prototype.createChildren.call(this),
            this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this)
        },
        e.prototype.dataChanged = function() {
            t.prototype.dataChanged.call(this),
            this.bar0.slideDuration = this.bar.slideDuration = 0,
            (this.data || 0 == this.data) && (this.info = this.data, this.updateView())
        },
        e.prototype.updateView = function() {
            var t = this.info.daily_num,
            e = this.info.max_num;
            this.bar.visible = !1,
            this.bar0.visible = !1,
            e > t ? (this.bar.maximum = e, this.bar.visible = !0, this.bar.value = t) : (this.bar0.maximum = e, this.bar0.visible = t >= e, this.bar0.value = e);
            var i = ItemXMLInfo.getItemInfo(this.info.id); ! i && console.log(this.info.id),
            this.icon.source = ClientConfig.getItemIcon(this.info.id),
            this.item_name.text = i.itemObj.Name,
            this.num.text = Math.min(this.info.max_num, this.info.daily_num) + "/" + this.info.max_num,
            this.cacheAsBitmap = !0
        },
        e.prototype.destroy = function() {
            ImageButtonUtil.removeAll(this),
            this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this)
        },
        e
    } (eui.ItemRenderer);
    t.ResourceCenterActItem = e,
    __reflect(e.prototype, "personalInformation.ResourceCenterActItem")
} (personalInformation || (personalInformation = {}));
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
personalInformation; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.skinName = SelectCarPopItemSkin,
            e
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            var e = this;
            t.prototype.childrenCreated.call(this),
            ImageButtonUtil.add(this,
            function() {
                e.selected || EventManager.dispatchEventWith("SelectCarPopItem_carIcon", !1, e.id)
            },
            this, !1, !1)
        },
        e.prototype.dataChanged = function() {
            t.prototype.dataChanged.call(this),
            this.data && (this.id = ~~this.data, this.updateData())
        },
        e.prototype.updateData = function() {
            var t = ItemXMLInfo.getName(this.id);
            this.carName.text = t,
            this.carIcon.source = ClientConfig.getMountIcon(this.id),
            this.cacheAsBitmap = !0
        },
        e
    } (BaseItemRenderer);
    t.SelectCarPopItem = e,
    __reflect(e.prototype, "personalInformation.SelectCarPopItem")
} (personalInformation || (personalInformation = {}));
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
personalInformation; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.skinName = PersonalinformationNameFramePopItemSkin,
            EventManager.addEventListener(UserInfoEvent.EVENT_CHANGE_NICKNAME_FRAME_ID, e.updateView, e),
            e
        }
        return __extends(e, t),
        e.prototype.dataChanged = function() {
            t.prototype.dataChanged.call(this),
            (this.data || 0 == this.data) && (this.info = this.data, this.updateView())
        },
        e.prototype.updateView = function() {
            var t = this.info.id,
            e = this.info.icon;
            this.frame.source = ClientConfig.getTitleBg(e);
            var i = core.AvatarDataMgr.GetInstance().hadNickBg.indexOf(t) > -1 || 33 == ~~t,
            n = MainManager.actorInfo.nickBg == ~~t,
            r = !1;
            if (this.info.finishTime) {
                var o = SystemTimerManager.sysBJDate.getTime(),
                a = 1e3 * this.info.finishTime;
                o > a && (r = !0)
            }
            this.lock.visible = !i || r,
            this.using.visible = n
        },
        e
    } (BaseItemRenderer);
    t.PersonalinformationNameFramePopItem = e,
    __reflect(e.prototype, "personalInformation.PersonalinformationNameFramePopItem")
} (personalInformation || (personalInformation = {}));
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
personalInformation; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.skinName = t.suitPageItemSkin,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            this.flag_selcted.visible = !1
        },
        Object.defineProperty(i.prototype, "selected", {
            get: function() {
                return egret.superGetter(i, this, "selected")
            },
            set: function(t) {
                this.data && (this.flag_selcted.visible = t),
                egret.superSetter(i, this, "selected", t)
            },
            enumerable: !0,
            configurable: !0
        }),
        i.prototype.dataChanged = function() {
            if (this.data) {
                var e = t.DataMgr.GetInstance().GetSuit(this.data),
                i = this._checkIsSelcted(e) ? "down": "up";
                this.txt.text = this.data + "",
                this.bg.source = "down" == i ? "personalInformationMe_selected_png": "personalInformationMe_selected_1_png",
                this.txt.textColor = "down" == i ? 8759551 : 7177143
            }
        },
        i.prototype._checkIsSelcted = function(t) {
            if (!t || 0 === t.length) return ! 1;
            var e = MainManager.actorInfo.clothIDs;
            if (!e || 0 === e.length) return ! 1;
            if (e.length !== t.length) return ! 1;
            for (var i = 0; i < e.length; i++) if ( - 1 === t.indexOf(e[i])) return ! 1;
            return ! 0
        },
        i
    } (eui.ItemRenderer);
    t.SuitPageItem = e,
    __reflect(e.prototype, "personalInformation.SuitPageItem")
} (personalInformation || (personalInformation = {}));
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
personalInformation; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.skinName = ChangeNamePopSkin,
            e
        }
        return __extends(e, t),
        e.prototype.initialized = function() {
            this.Txt_Name.prompt = "请输入新昵称",
            t.prototype.initialized.call(this)
        },
        e.prototype.onAddToStageHandler = function() {
            this.x = 0,
            this.y = 0
        },
        e.prototype.initEvents = function() {
            var t = this;
            ImageButtonUtil.add(this.img_btn_yes,
            function() {
                t.checkNick() && MainManager.actorInfo.requestChangeNickName(t.Txt_Name.text,
                function() {
                    StatLogger.log("1023版本系统功能", "个人界面", "修改昵称成功"),
                    t.hide(),
                    BubblerManager.getInstance().showText("恭喜你，成功修改了昵称！"),
                    EventManager.dispatchEventWith("updateCardInfo")
                },
                function() {
                    BubblerManager.getInstance().showText("改名失败请重新尝试")
                },
                t)
            },
            this),
            ImageButtonUtil.add(this.img_btn_close, this.hide, this)
        },
        e.prototype.removeEvents = function() {},
        e.prototype.checkNick = function() {
            if ("" == this.Txt_Name.text) return BubblerManager.getInstance().showText("请输入昵称名称！"),
            !1;
            var t = new egret.ByteArray;
            return t.writeUTFBytes(this.Txt_Name.text),
            t.length > 15 ? (BubblerManager.getInstance().showText("很抱歉，昵称文字不能超过五个字！"), !1) : this.Txt_Name.text == MainManager.actorInfo.nick ? (BubblerManager.getInstance().showText("与原来的昵称相同"), !1) : !0
        },
        e.prototype.destroy = function() {
            t.prototype.destroy.call(this)
        },
        e
    } (PopView);
    t.ChangeNamePopView = e,
    __reflect(e.prototype, "personalInformation.ChangeNamePopView")
} (personalInformation || (personalInformation = {}));
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
personalInformation; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.skinName = ExchangeCodePopSkin,
            e
        }
        return __extends(e, t),
        e.prototype.initialized = function() {
            this.tx_input.prompt = "请输入兑换码",
            this.txtLabel_0.touchEnabled = !1,
            this.txtLabel_1.touchEnabled = !1,
            t.prototype.initialized.call(this)
        },
        e.prototype.onAddToStageHandler = function() {
            this.x = 0,
            this.y = 0
        },
        e.prototype.initEvents = function() {
            ImageButtonUtil.add(this.img_btn_yes, this.onTouchIamgeButtonHandler, this),
            ImageButtonUtil.add(this.img_btn_close, this.onTouchIamgeButtonHandler, this)
        },
        e.prototype.removeEvents = function() {},
        e.prototype.onTouchIamgeButtonHandler = function(t) {
            var e = this;
            switch (t.target) {
            case this.img_btn_close:
                this.hide();
                break;
            case this.img_btn_yes:
                if (this.checkExchangeCode()) {
                    var i = String(this.tx_input.text);
                    this.isContainChinese(i) && (i = "#" + i);
                    for (var n = new egret.ByteArray,
                    r = 0; r < i.length && !(n.length > 999); r++) n.writeUTFBytes(i.charAt(r));
                    SocketConnection.sendByQueue(43267, [n.length, n],
                    function(t) {
                        e.hide(),
                        e.onzuanshi(t),
                        SocketConnection.removeCmdListener(43267, e.onzuanshi, e)
                    })
                }
            }
        },
        e.prototype.onzuanshi = function(t) {
            var e = t.data;
            e.position = 0;
            var i = e.readUnsignedInt();
            i > 0 && BubblerManager.getInstance().showText("恭喜你获得" + i + "钻石！")
        },
        e.prototype.checkExchangeCode = function() {
            if ("" == this.tx_input.text) return BubblerManager.getInstance().showText("请输入兑换码！"),
            !1;
            var t = new egret.ByteArray;
            return t.writeUTFBytes(this.tx_input.text),
            t.length > 34 ? (BubblerManager.getInstance().showText("很抱歉，兑换码长度太长不合规！"), !1) : !0
        },
        e.prototype.isContainChinese = function(t) {
            var e = !1;
            if (null == t) return e;
            for (var i = [], n = 0; n < t.length; n++) i.push(t.charCodeAt(n));
            for (var n = 0; n < i.length; n++) if (i[n] >= 19968 && i[n] <= 171941) return e = !0;
            return e
        },
        e.prototype.destroy = function() {
            t.prototype.destroy.call(this)
        },
        e
    } (PopView);
    t.ExchangeCodePopView = e,
    __reflect(e.prototype, "personalInformation.ExchangeCodePopView")
} (personalInformation || (personalInformation = {}));
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
personalInformation; !
function(t) {
    var e = function(e) {
        function n() {
            var t = e.call(this) || this;
            return t.skinName = PersonalinformationNameFramePopSkin,
            t
        }
        return __extends(n, e),
        n.prototype.childrenCreated = function() {
            var t = this;
            e.prototype.childrenCreated.call(this),
            this._rgbNavBar = new eui.RadioButtonGroup,
            this._rgbNavBar.$name = "NameRBItem_PopViewNavBar",
            this._rgbNavBar.addEventListener(eui.UIEvent.CHANGE, this._onChangeNavBar, this);
            for (var n = ["修改昵称", "换昵称框"], r = 0; r < n.length; r++) {
                var o = new i;
                this.rbGrp.addChild(o),
                o.value = r + 1,
                o.setDesc(n[r]),
                o.group = this._rgbNavBar
            }
            GameInfo.isChecking && (this.title.visible = !1, this.rbGrp.getChildAt(1).visible = !1),
            this._selectedValue = 1,
            this._rgbNavBar.selectedValue = this._selectedValue,
            ImageButtonUtil.add(this.img_btn_yes,
            function() {
                t.checkNick() && MainManager.actorInfo.requestChangeNickName(t.Txt_Name.text,
                function() {
                    StatLogger.log("1023版本系统功能", "个人界面", "修改昵称成功"),
                    t.hide(),
                    BubblerManager.getInstance().showText("恭喜你，成功修改了昵称！"),
                    EventManager.dispatchEventWith("updateCardInfo")
                },
                function() {
                    BubblerManager.getInstance().showText("改名失败请重新尝试")
                },
                t)
            },
            this),
            ImageButtonUtil.add(this.btnClose, this.hide, this),
            ImageButtonUtil.add(this.btnUse,
            function() {
                var e = t._list.selectedItem;
                MainManager.actorInfo.requestChangeNickBg(~~e.id,
                function() {
                    BubblerManager.getInstance().showText("昵称框替换成功！"),
                    t.updateSelectItem()
                },
                function() {
                    BubblerManager.getInstance().showText("昵称框替换失败！")
                },
                t)
            },
            this),
            ImageButtonUtil.add(this.btnGet,
            function() {
                var e = t._list.selectedItem;
                e && 0 == e.unavailable && ("暂未开放" == e["goto"].trim() ? BubblerManager.getInstance().showText("暂未开放") : (ModuleManager.CloseAll(), t.hide(), core.gameUtil.jumpTo(e["goto"])))
            },
            this),
            this._list.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.updateSelectItem, this),
            this.initNameBg(),
            this.updateView()
        },
        n.prototype._onChangeNavBar = function(t) {
            this._selectedValue = this._rgbNavBar.selectedValue,
            this.updateView()
        },
        n.prototype.updateView = function() {
            this.frameGroup.visible = 2 == this._selectedValue,
            this.nameGroup.visible = 1 == this._selectedValue
        },
        n.prototype.initNameBg = function() {
            for (var e = config.Profilephoto.getItems().filter(function(t) {
                return 5 == t.type
            }), i = [], n = [], r = [], o = 0, a = 0; a < e.length; a++) {
                var s = e[a],
                h = [1, 2];
                h.indexOf(e[a].id) > -1 ? n.push(s) : r.push(s)
            }
            i = i.concat(n, r),
            i.filter(function(t, e) {~~t.id == MainManager.actorInfo.nickBg && (o = e)
            }),
            this._list.itemRenderer = t.PersonalinformationNameFramePopItem,
            this._list.dataProvider = new eui.ArrayCollection(i),
            this._list.selectedIndex = o,
            this.updateSelectItem()
        },
        n.prototype.updateSelectItem = function() {
            var t = this._list.selectedItem;
            if (t) {
                this.txtName.text = t.name,
                this.icon.source = ClientConfig.getTitleBg(t.icon),
                this.desc.text = t.desc,
                this.limit.text = t.finishTime > 0 ? TimeUtil.format("yyyy/MM/dd hh:mm:ss", new Date(1e3 * t.finishTime)) + "过期": "永久使用";
                var e = core.AvatarDataMgr.GetInstance().hadNickBg.indexOf(t.id) > -1 || 33 == t.id,
                i = MainManager.actorInfo.nickBg == ~~t.id,
                n = !1;
                if (t.finishTime) {
                    var r = SystemTimerManager.sysBJDate.getTime(),
                    o = 1e3 * t.finishTime;
                    r > o && (this.limit.text = "已过期", n = !0)
                }
                this.btnGet.visible = !i && !e && !n && 1 != t.unavailable,
                this.btnUsing.visible = i,
                this.btnUse.visible = e && !i && !n
            }
        },
        n.prototype.checkNick = function() {
            if ("" == this.Txt_Name.text) return BubblerManager.getInstance().showText("请输入昵称名称！"),
            !1;
            var t = new egret.ByteArray;
            return t.writeUTFBytes(this.Txt_Name.text),
            t.length > 15 ? (BubblerManager.getInstance().showText("很抱歉，昵称文字不能超过五个字！"), !1) : this.Txt_Name.text == MainManager.actorInfo.nick ? (BubblerManager.getInstance().showText("与原来的昵称相同"), !1) : !0
        },
        n.prototype.destroy = function() {
            e.prototype.destroy.call(this),
            this._list.removeEventListener(eui.ItemTapEvent.ITEM_TAP, this.updateSelectItem, this)
        },
        n
    } (PopView);
    t.PersonalinformationNameFramePop = e,
    __reflect(e.prototype, "personalInformation.PersonalinformationNameFramePop");
    var i = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.skinName = NameRBItemSkin,
            e
        }
        return __extends(e, t),
        e.prototype.setDesc = function(t) {
            this.txt_desc.text = t
        },
        e
    } (eui.RadioButton);
    t.NameRBItem = i,
    __reflect(i.prototype, "personalInformation.NameRBItem")
} (personalInformation || (personalInformation = {}));
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
personalInformation; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.skinName = PersonalinformationPolicyPopSkin,
            ImageButtonUtil.add(e.closeBtn, e.hide, e),
            ImageButtonUtil.add(e.three,
            function() {
                window.open("https://www.61.com/about/sdk.html", "_system")
            },
            e),
            ImageButtonUtil.add(e.person,
            function() {
                window.open("https://www.61.com/about/collect.html", "_system")
            },
            e),
            ImageButtonUtil.add(e.protect,
            function() {
                window.open("https://www.61.com/about/protect.html", "_system")
            },
            e),
            e
        }
        return __extends(e, t),
        e.prototype.destroy = function() {
            ImageButtonUtil.removeAll(this),
            t.prototype.destroy.call(this)
        },
        e
    } (PopView);
    t.PersonalinformationPolicyPop = e,
    __reflect(e.prototype, "personalInformation.PersonalinformationPolicyPop")
} (personalInformation || (personalInformation = {})),
window.personalInformation = window.personalInformation || {};
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
generateEUI.paths["resource/eui_skins/Card/AchieveTitlePopSkin.exml"] = window.AchieveTitlePopSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["btnClose", "imgIcon", "txtName", "txtEff", "txtNoEff", "txtEffect", "txtAchieve", "grp_titleInfo", "img_btn_zs", "imgBtnExchange", "img_btn_qxzs", "ahieveInfo", "imgSearchBG", "noUpTitleDown", "noUpTitleUp", "hasUpTitleDown", "hasUpTitleUp", "editable_search", "viewport_list", "scroller_title", "Grp_noFind", "grp_yc"],
        this.height = 431,
        this.width = 753,
        this.elementsContent = [this._Image1_i(), this.btnClose_i(), this.ahieveInfo_i(), this._Group3_i(), this.scroller_title_i(), this.Grp_noFind_i(), this.grp_yc_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 431,
        t.source = "title_pop_2022_imgbg_png",
        t.visible = !0,
        t.width = 753,
        t.x = 0,
        t.y = 0,
        t
    },
    i.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.source = "title_pop_2022_btnclose_png",
        t.x = 712,
        t.y = 1,
        t
    },
    i.ahieveInfo_i = function() {
        var t = new eui.Group;
        return this.ahieveInfo = t,
        t.visible = !0,
        t.x = 264,
        t.y = 55,
        t.elementsContent = [this.grp_titleInfo_i(), this.img_btn_zs_i(), this.imgBtnExchange_i(), this.img_btn_qxzs_i()],
        t
    },
    i.grp_titleInfo_i = function() {
        var t = new eui.Group;
        return this.grp_titleInfo = t,
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image2_i(), this._Image3_i(), this.imgIcon_i(), this.txtName_i(), this._Label1_i(), this.txtEff_i(), this.txtNoEff_i(), this.txtEffect_i(), this.txtAchieve_i()],
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 1,
        t.source = "common_line_01_s9_png",
        t.width = 464,
        t.x = 0,
        t.y = 114,
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.horizontalCenter = 0,
        t.source = "title_pop_2022_imgnamebg_png",
        t.visible = !0,
        t.y = 0,
        t
    },
    i.imgIcon_i = function() {
        var t = new eui.Image;
        return this.imgIcon = t,
        t.height = 50,
        t.visible = !0,
        t.width = 50,
        t.x = 10,
        t.y = 44,
        t
    },
    i.txtName_i = function() {
        var t = new eui.Label;
        return this.txtName = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = 0,
        t.size = 20,
        t.text = "称号名字称号名字十二个字",
        t.textColor = 15857151,
        t.y = 8,
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "对应成就：",
        t.textColor = 10733565,
        t.x = 72,
        t.y = 47,
        t
    },
    i.txtEff_i = function() {
        var t = new eui.Label;
        return this.txtEff = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "属性称号效果：",
        t.textColor = 6153817,
        t.x = 8,
        t.y = 133,
        t
    },
    i.txtNoEff_i = function() {
        var t = new eui.Label;
        return this.txtNoEff = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = 0,
        t.size = 18,
        t.text = "纪念称号无效果",
        t.textColor = 6153817,
        t.visible = !1,
        t.y = 133,
        t
    },
    i.txtEffect_i = function() {
        var t = new eui.Label;
        return this.txtEffect = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "背包内精灵全属性+10%；自身造成的致命一击伤害提升15%；攻击技能有1/16的几率打出致命一击，每次使用增加1/16，",
        t.textColor = 8757203,
        t.width = 447,
        t.x = 8,
        t.y = 167,
        t
    },
    i.txtAchieve_i = function() {
        var t = new eui.Label;
        return this.txtAchieve = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "二十个字以内二十个字以内二十个字以内二十个字",
        t.textColor = 8757203,
        t.x = 72,
        t.y = 80,
        t
    },
    i.img_btn_zs_i = function() {
        var t = new eui.Group;
        return this.img_btn_zs = t,
        t.visible = !0,
        t.x = 163,
        t.y = 307,
        t.elementsContent = [this._Image4_i(), this._Label2_i()],
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.source = "title_pop_2022_imgbtn_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i._Label2_i = function() {
        var t = new eui.Label;
        return t.border = !1,
        t.borderColor = 10181146,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = 0,
        t.size = 20,
        t.stroke = .2,
        t.strokeColor = 10181146,
        t.text = "装 饰",
        t.textAlign = "center",
        t.textColor = 10181146,
        t.width = 56,
        t.y = 14,
        t
    },
    i.imgBtnExchange_i = function() {
        var t = new eui.Group;
        return this.imgBtnExchange = t,
        t.visible = !1,
        t.x = 163,
        t.y = 307,
        t.elementsContent = [this._Image5_i(), this._Label3_i()],
        t
    },
    i._Image5_i = function() {
        var t = new eui.Image;
        return t.source = "title_pop_2022_imgbtn_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i._Label3_i = function() {
        var t = new eui.Label;
        return t.border = !1,
        t.borderColor = 10181146,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = 0,
        t.size = 20,
        t.stroke = .2,
        t.strokeColor = 10181146,
        t.text = "替 换",
        t.textAlign = "center",
        t.textColor = 10181146,
        t.width = 56,
        t.y = 14,
        t
    },
    i.img_btn_qxzs_i = function() {
        var t = new eui.Group;
        return this.img_btn_qxzs = t,
        t.visible = !1,
        t.x = 163,
        t.y = 307,
        t.elementsContent = [this._Image6_i(), this._Label4_i()],
        t
    },
    i._Image6_i = function() {
        var t = new eui.Image;
        return t.source = "common_btn_bg_blue_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i._Label4_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 20,
        t.stroke = .2,
        t.strokeColor = 2976172,
        t.text = "取消装饰",
        t.textAlign = "center",
        t.textColor = 2976172,
        t.width = 100,
        t.x = 15,
        t.y = 14,
        t
    },
    i._Group3_i = function() {
        var t = new eui.Group;
        return t.visible = !0,
        t.x = 1,
        t.y = 38,
        t.elementsContent = [this.imgSearchBG_i(), this._Group1_i(), this._Group2_i(), this._Image11_i(), this.editable_search_i()],
        t
    },
    i.imgSearchBG_i = function() {
        var t = new eui.Image;
        return this.imgSearchBG = t,
        t.source = "title_pop_2022_imgsearchbg_png",
        t.x = 8,
        t.y = 0,
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.visible = !0,
        t.x = 0,
        t.y = 33,
        t.elementsContent = [this.noUpTitleDown_i(), this.noUpTitleUp_i()],
        t
    },
    i.noUpTitleDown_i = function() {
        var t = new eui.Group;
        return this.noUpTitleDown = t,
        t.visible = !1,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image7_i(), this._Label5_i()],
        t
    },
    i._Image7_i = function() {
        var t = new eui.Image;
        return t.source = "title_pop_2022_imgmenudown_png",
        t.visible = !0,
        t.width = 124,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Label5_i = function() {
        var t = new eui.Label;
        return t.size = 18,
        t.text = "纪念称号",
        t.textColor = 10808574,
        t.visible = !0,
        t.x = 26,
        t.y = 9,
        t
    },
    i.noUpTitleUp_i = function() {
        var t = new eui.Group;
        return this.noUpTitleUp = t,
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image8_i(), this._Label6_i()],
        t
    },
    i._Image8_i = function() {
        var t = new eui.Image;
        return t.source = "title_pop_2022_imgmenuup_png",
        t.visible = !0,
        t.width = 124,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Label6_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "纪念称号",
        t.textColor = 7242936,
        t.visible = !0,
        t.x = 26,
        t.y = 9,
        t
    },
    i._Group2_i = function() {
        var t = new eui.Group;
        return t.visible = !0,
        t.x = 124,
        t.y = 33,
        t.elementsContent = [this.hasUpTitleDown_i(), this.hasUpTitleUp_i()],
        t
    },
    i.hasUpTitleDown_i = function() {
        var t = new eui.Group;
        return this.hasUpTitleDown = t,
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image9_i(), this._Label7_i()],
        t
    },
    i._Image9_i = function() {
        var t = new eui.Image;
        return t.source = "title_pop_2022_imgmenudown_png",
        t.visible = !0,
        t.width = 124,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Label7_i = function() {
        var t = new eui.Label;
        return t.size = 18,
        t.text = "属性称号",
        t.textColor = 10808574,
        t.visible = !0,
        t.x = 26,
        t.y = 9,
        t
    },
    i.hasUpTitleUp_i = function() {
        var t = new eui.Group;
        return this.hasUpTitleUp = t,
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image10_i(), this._Label8_i()],
        t
    },
    i._Image10_i = function() {
        var t = new eui.Image;
        return t.source = "title_pop_2022_imgmenuup_png",
        t.visible = !0,
        t.width = 124,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Label8_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "属性称号",
        t.textColor = 7242936,
        t.visible = !0,
        t.x = 26,
        t.y = 9,
        t
    },
    i._Image11_i = function() {
        var t = new eui.Image;
        return t.source = "title_pop_2022_btnsearch_png",
        t.x = 210,
        t.y = 0,
        t
    },
    i.editable_search_i = function() {
        var t = new eui.EditableText;
        return this.editable_search = t,
        t.fontFamily = "MFShangHei",
        t.height = 17,
        t.prompt = "输入称号名称",
        t.promptColor = 4149623,
        t.size = 16,
        t.textAlign = "center",
        t.textColor = 7899564,
        t.width = 198.381,
        t.x = 9.209,
        t.y = 6,
        t
    },
    i.scroller_title_i = function() {
        var t = new eui.Scroller;
        return this.scroller_title = t,
        t.height = 311,
        t.scrollPolicyH = "off",
        t.visible = !0,
        t.width = 248,
        t.y = 110,
        t.viewport = this.viewport_list_i(),
        t
    },
    i.viewport_list_i = function() {
        var t = new eui.List;
        return this.viewport_list = t,
        t.x = 0,
        t.y = 0,
        t.layout = this._VerticalLayout1_i(),
        t
    },
    i._VerticalLayout1_i = function() {
        var t = new eui.VerticalLayout;
        return t.gap = 4,
        t
    },
    i.Grp_noFind_i = function() {
        var t = new eui.Image;
        return this.Grp_noFind = t,
        t.source = "title_pop_2022_imgnotfound_png",
        t.visible = !1,
        t.x = 48,
        t.y = 196,
        t
    },
    i.grp_yc_i = function() {
        var t = new eui.Image;
        return this.grp_yc = t,
        t.source = "title_pop_2022_txthidetitle_png",
        t.visible = !1,
        t.x = 360,
        t.y = 207,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/Card/PersonalinformationCardGetPopSkin.exml"] = window.PersonalinformationCardGetPopSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["cardName", "cardInfo", "card", "grp_card", "btnExchange", "btnclose", "cardGetPop"],
        this.height = 285,
        this.width = 481,
        this.elementsContent = [this.cardGetPop_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.cardGetPop_i = function() {
        var t = new eui.Group;
        return this.cardGetPop = t,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Group1_i(), this._Image3_i(), this.cardName_i(), this.cardInfo_i(), this.grp_card_i(), this.btnExchange_i(), this.btnclose_i()],
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.visible = !0,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image1_i(), this._Image2_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 285,
        t.source = "common_s9_pop_bg4_png",
        t.width = 481,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 34,
        t.source = "common_pop_up_bg_m_png",
        t.width = 476,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.height = 32,
        t.source = "personalInformation_card_get_pop_title_png",
        t.width = 102,
        t.x = 34,
        t.y = 1,
        t
    },
    i.cardName_i = function() {
        var t = new eui.Label;
        return this.cardName = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "名片背景",
        t.textColor = 4187130,
        t.x = 240,
        t.y = 71,
        t
    },
    i.cardInfo_i = function() {
        var t = new eui.Label;
        return this.cardInfo = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "名片背景描述介绍获得方法名片背景描述介绍获得方法名片背景描述介绍获得方法名片背景描述",
        t.textColor = 8757203,
        t.width = 200,
        t.x = 241,
        t.y = 100,
        t
    },
    i.grp_card_i = function() {
        var t = new eui.Group;
        return this.grp_card = t,
        t.x = 20,
        t.y = 65,
        t.elementsContent = [this._Image4_i(), this.card_i()],
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.height = 123,
        t.source = "personalInformation_ID_Card_cardPop_mingpian_png",
        t.visible = !0,
        t.width = 214,
        t.x = 0,
        t.y = 0,
        t
    },
    i.card_i = function() {
        var t = new eui.Image;
        return this.card = t,
        t.height = 107,
        t.visible = !0,
        t.width = 198,
        t.x = 8,
        t.y = 8,
        t
    },
    i.btnExchange_i = function() {
        var t = new eui.Image;
        return this.btnExchange = t,
        t.height = 35,
        t.source = "personalInformation_card_get_pop_btnGotoExchange_png",
        t.width = 131,
        t.x = 169,
        t.y = 223,
        t
    },
    i.btnclose_i = function() {
        var t = new eui.Image;
        return this.btnclose = t,
        t.height = 33,
        t.source = "common_pop_btn_close_png",
        t.width = 33,
        t.x = 438,
        t.y = 1,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/Card/PersonalinformationIdCardCardpopSkin.exml"] = window.PersonalinformationIdCardCardpopSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["btnClose", "txt_cardName", "txt_cardInfo", "btnExchange", "btnGo", "hasEquip", "_list", "_scorl"],
        this.height = 435,
        this.width = 754,
        this.elementsContent = [this._Group2_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Group2_i = function() {
        var t = new eui.Group;
        return t.touchEnabled = !1,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Group1_i(), this._Image4_i(), this.txt_cardName_i(), this.txt_cardInfo_i(), this.btnExchange_i(), this.btnGo_i(), this.hasEquip_i(), this._Image5_i(), this._scorl_i()],
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.touchEnabled = !1,
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image1_i(), this._Image2_i(), this._Image3_i(), this.btnClose_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 431,
        t.source = "common_s9_pop_bg4_png",
        t.touchEnabled = !0,
        t.visible = !0,
        t.width = 754,
        t.x = 0,
        t.y = 4,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 34,
        t.source = "common_pop_up_bg_big_png",
        t.touchEnabled = !1,
        t.visible = !0,
        t.width = 748,
        t.x = 1,
        t.y = 4,
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.height = 43,
        t.source = "personalInformation_ID_Card_cardPop_xzzsjs_png",
        t.touchEnabled = !1,
        t.visible = !0,
        t.width = 113,
        t.x = 32,
        t.y = 0,
        t
    },
    i.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.height = 33,
        t.source = "common_pop_btn_close_png",
        t.width = 34,
        t.x = 711,
        t.y = 4,
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.source = "personalinformationidcardcardpop_titlebg_png",
        t.x = 508,
        t.y = 71,
        t
    },
    i.txt_cardName_i = function() {
        var t = new eui.Label;
        return this.txt_cardName = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "名片背景名字",
        t.textAlign = "center",
        t.textColor = 12111615,
        t.width = 180,
        t.x = 530,
        t.y = 77,
        t
    },
    i.txt_cardInfo_i = function() {
        var t = new eui.Label;
        return this.txt_cardInfo = t,
        t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.fontFamily = "MFShangHei",
        t.height = 39,
        t.size = 18,
        t.text = "名片背景说明说明名名片背景说明说明名",
        t.textColor = 8757203,
        t.width = 230,
        t.x = 521,
        t.y = 114,
        t
    },
    i.btnExchange_i = function() {
        var t = new eui.Image;
        return this.btnExchange = t,
        t.source = "personalinformationidcardcardpop_btngenghuan_png",
        t.visible = !0,
        t.x = 574,
        t.y = 358,
        t
    },
    i.btnGo_i = function() {
        var t = new eui.Image;
        return this.btnGo = t,
        t.source = "personalinformationidcardcardpop_btnqianwang_png",
        t.visible = !0,
        t.x = 574,
        t.y = 358,
        t
    },
    i.hasEquip_i = function() {
        var t = new eui.Image;
        return this.hasEquip = t,
        t.source = "personalinformationidcardcardpop_yigenghuan_png",
        t.visible = !0,
        t.x = 574,
        t.y = 358,
        t
    },
    i._Image5_i = function() {
        var t = new eui.Image;
        return t.height = 355,
        t.scale9Grid = new egret.Rectangle(4, 4, 4, 4),
        t.source = "personalinformationidcardcardpop_dekuang_png",
        t.touchEnabled = !1,
        t.visible = !0,
        t.width = 477,
        t.x = 22,
        t.y = 57,
        t
    },
    i._scorl_i = function() {
        var t = new eui.Scroller;
        return this._scorl = t,
        t.height = 355,
        t.width = 477,
        t.x = 22,
        t.y = 57,
        t.viewport = this._list_i(),
        t
    },
    i._list_i = function() {
        var t = new eui.List;
        return this._list = t,
        t.height = 200,
        t.touchEnabled = !0,
        t.width = 200,
        t.x = 85,
        t.y = 36,
        t.layout = this._TileLayout1_i(),
        t
    },
    i._TileLayout1_i = function() {
        var t = new eui.TileLayout;
        return t.requestedColumnCount = 2,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/Card/PersonalinformationidcardpetshowSkin.exml"] = window.PersonalinformationPetshowSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["spmask", "petModel", "petName", "icon_type", "grp_petName", "grp_leftShow", "btnSwitch", "noStoneBg1", "hasStoneBg1", "imgStone1", "mark1", "txt_markLevel1", "txt_markName1", "img_null_1", "minimark1", "noStoneBg2", "hasStoneBg2", "imgStone2", "mark2", "txt_markLevel2", "txt_markName2", "img_null_2", "minimark2", "noStoneBg3", "hasStoneBg3", "imgStone3", "mark3", "txt_markLevel3", "txt_markName3", "img_null_3", "minimark3", "grp_marks", "txtStudy", "txtLevel", "txtHP", "txtNature", "txtEffect", "txtEffectInfo", "txtSEffect", "icon_star_1", "icon_star_2", "icon_star_3", "icon_star_4", "icon_star_5", "txtSEffectInfo", "txtAttack", "txtDefence", "txtSAttack", "txtSDefence", "txtSpeed", "txtHealth", "grp_petInfo", "titlebg", "titleName", "damageResistList", "titlebg_2", "titleName2", "debuffResistList", "Te", "grp_petTeXing", "imgNoShow", "btnZhanShi", "btnCancel", "btnExchange", "btnChange", "btnClose", "grp_rightShow"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.spmask_i(), this.petModel_i(), this.grp_leftShow_i(), this.grp_rightShow_i()],
        this.states = [new eui.State("attr", [new eui.SetProperty("_Image4", "source", "personalinformationidcardpetshow_imgShuxingSwitchBg_png"), new eui.SetProperty("grp_petInfo", "visible", !0), new eui.SetProperty("grp_petTeXing", "visible", !1)]), new eui.State("resist", [new eui.SetProperty("_Image5", "source", "personalinformationidcardpetshow_btnShuXingSwitch_png"), new eui.SetProperty("grp_petInfo", "visible", !1)])]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.spmask_i = function() {
        var t = new eui.Image;
        return this.spmask = t,
        t.alpha = .8,
        t.percentHeight = 100,
        t.source = "common_mask_bg_s9_png",
        t.visible = !0,
        t.percentWidth = 100,
        t.x = 0,
        t.y = 0,
        t
    },
    i.petModel_i = function() {
        var t = new core.component.pet.PetModel;
        return this.petModel = t,
        t.enabled = !0,
        t.height = 640,
        t.scaleX = 1,
        t.scaleY = 1,
        t.touchChildren = !1,
        t.touchEnabled = !1,
        t.width = 760,
        t.x = -100,
        t.y = 0,
        t
    },
    i.grp_leftShow_i = function() {
        var t = new eui.Group;
        return this.grp_leftShow = t,
        t.cacheAsBitmap = !0,
        t.visible = !0,
        t.x = -400,
        t.y = 0,
        t.elementsContent = [this.grp_petName_i()],
        t
    },
    i.grp_petName_i = function() {
        var t = new eui.Group;
        return this.grp_petName = t,
        t.cacheAsBitmap = !0,
        t.x = 235,
        t.y = 511,
        t.elementsContent = [this._Image1_i(), this._Image2_i(), this.petName_i(), this.icon_type_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "personalinformationidcardpetshow_juxing_64_png",
        t.x = 8,
        t.y = 8,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "personalinformationidcardpetshow_jx_9_kb_8_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.petName_i = function() {
        var t = new eui.Label;
        return this.petName = t,
        t.fontFamily = "MFShangHei",
        t.size = 19.9844183980414,
        t.text = "精灵名称精灵名称",
        t.textAlign = "center",
        t.textColor = 16514895,
        t.width = 180,
        t.x = 49,
        t.y = 15,
        t
    },
    i.icon_type_i = function() {
        var t = new eui.Image;
        return this.icon_type = t,
        t.height = 23,
        t.source = "personalinformationidcardpetshow_icon_type_png",
        t.width = 23,
        t.x = 24,
        t.y = 13,
        t
    },
    i.grp_rightShow_i = function() {
        var t = new eui.Group;
        return this.grp_rightShow = t,
        t.cacheAsBitmap = !0,
        t.right = -345,
        t.visible = !0,
        t.y = 13,
        t.elementsContent = [this._Image3_i(), this.btnSwitch_i(), this.grp_marks_i(), this.grp_petInfo_i(), this.grp_petTeXing_i(), this.imgNoShow_i(), this.btnZhanShi_i(), this.btnCancel_i(), this.btnExchange_i(), this.btnChange_i(), this.btnClose_i()],
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "personalinformationidcardpetshow_infodi_png",
        t.x = 2,
        t.y = 421,
        t
    },
    i.btnSwitch_i = function() {
        var t = new eui.Group;
        return this.btnSwitch = t,
        t.x = 404,
        t.y = 116,
        t.elementsContent = [this._Image4_i(), this._Image5_i()],
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return this._Image4 = t,
        t.height = 117,
        t.scale9Grid = new egret.Rectangle(12, 8, 12, 7),
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "personalinformationidcardpetshow_imgtexingswitchbg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i._Image5_i = function() {
        var t = new eui.Image;
        return this._Image5 = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "personalinformationidcardpetshow_btntexingswitch_png",
        t.x = 5.999999999999886,
        t.y = 11,
        t
    },
    i.grp_marks_i = function() {
        var t = new eui.Group;
        return this.grp_marks = t,
        t.x = 42,
        t.y = 428,
        t.elementsContent = [this.minimark1_i(), this.minimark2_i(), this.minimark3_i()],
        t
    },
    i.minimark1_i = function() {
        var t = new eui.Group;
        return this.minimark1 = t,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this.noStoneBg1_i(), this.hasStoneBg1_i(), this.imgStone1_i(), this.mark1_i(), this.txt_markLevel1_i(), this.txt_markName1_i(), this.img_null_1_i()],
        t
    },
    i.noStoneBg1_i = function() {
        var t = new eui.Image;
        return this.noStoneBg1 = t,
        t.source = "personalinformation_id_choosepetpop_kuang_png",
        t.x = 11,
        t.y = 5,
        t
    },
    i.hasStoneBg1_i = function() {
        var t = new eui.Image;
        return this.hasStoneBg1 = t,
        t.source = "personalinformationidcardpetshow_imgmark1bg_png",
        t.x = 11,
        t.y = 0,
        t
    },
    i.imgStone1_i = function() {
        var t = new eui.Image;
        return this.imgStone1 = t,
        t.height = 18,
        t.width = 18,
        t.x = 65,
        t.y = 5,
        t
    },
    i.mark1_i = function() {
        var t = new eui.Image;
        return this.mark1 = t,
        t.height = 50,
        t.visible = !0,
        t.width = 50,
        t.x = 23,
        t.y = 17,
        t
    },
    i.txt_markLevel1_i = function() {
        var t = new eui.Label;
        return this.txt_markLevel1 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.stroke = 1,
        t.strokeColor = 1327750,
        t.text = "LV.0",
        t.textColor = 7667455,
        t.visible = !0,
        t.x = 14,
        t.y = 56,
        t
    },
    i.txt_markName1_i = function() {
        var t = new eui.Label;
        return this.txt_markName1 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "艾欧尼亚艾...",
        t.textAlign = "center",
        t.textColor = 12834813,
        t.width = 92,
        t.x = 0,
        t.y = 85,
        t
    },
    i.img_null_1_i = function() {
        var t = new eui.Image;
        return this.img_null_1 = t,
        t.height = 73,
        t.source = "personalinformation_id_cardpop_kong_png",
        t.visible = !1,
        t.width = 73,
        t.x = 11,
        t.y = 5,
        t
    },
    i.minimark2_i = function() {
        var t = new eui.Group;
        return this.minimark2 = t,
        t.x = 121,
        t.y = 0,
        t.elementsContent = [this.noStoneBg2_i(), this.hasStoneBg2_i(), this.imgStone2_i(), this.mark2_i(), this.txt_markLevel2_i(), this.txt_markName2_i(), this.img_null_2_i()],
        t
    },
    i.noStoneBg2_i = function() {
        var t = new eui.Image;
        return this.noStoneBg2 = t,
        t.source = "personalinformation_id_choosepetpop_kuang_png",
        t.x = 11,
        t.y = 5,
        t
    },
    i.hasStoneBg2_i = function() {
        var t = new eui.Image;
        return this.hasStoneBg2 = t,
        t.source = "personalinformationidcardpetshow_imgmark1bg_png",
        t.x = 11,
        t.y = 0,
        t
    },
    i.imgStone2_i = function() {
        var t = new eui.Image;
        return this.imgStone2 = t,
        t.height = 18,
        t.width = 18,
        t.x = 65,
        t.y = 5,
        t
    },
    i.mark2_i = function() {
        var t = new eui.Image;
        return this.mark2 = t,
        t.height = 50,
        t.width = 50,
        t.x = 23,
        t.y = 17,
        t
    },
    i.txt_markLevel2_i = function() {
        var t = new eui.Label;
        return this.txt_markLevel2 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.stroke = 1,
        t.strokeColor = 1327750,
        t.text = "LV.0",
        t.textColor = 7667455,
        t.x = 14,
        t.y = 56,
        t
    },
    i.txt_markName2_i = function() {
        var t = new eui.Label;
        return this.txt_markName2 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "艾欧尼亚艾...",
        t.textAlign = "center",
        t.textColor = 12834813,
        t.width = 92,
        t.x = 0,
        t.y = 85,
        t
    },
    i.img_null_2_i = function() {
        var t = new eui.Image;
        return this.img_null_2 = t,
        t.height = 73,
        t.source = "personalinformation_id_cardpop_kong_png",
        t.visible = !0,
        t.width = 73,
        t.x = 11,
        t.y = 5,
        t
    },
    i.minimark3_i = function() {
        var t = new eui.Group;
        return this.minimark3 = t,
        t.x = 242,
        t.y = 0,
        t.elementsContent = [this.noStoneBg3_i(), this.hasStoneBg3_i(), this.imgStone3_i(), this.mark3_i(), this.txt_markLevel3_i(), this.txt_markName3_i(), this.img_null_3_i()],
        t
    },
    i.noStoneBg3_i = function() {
        var t = new eui.Image;
        return this.noStoneBg3 = t,
        t.source = "personalinformation_id_choosepetpop_kuang_png",
        t.x = 11,
        t.y = 5,
        t
    },
    i.hasStoneBg3_i = function() {
        var t = new eui.Image;
        return this.hasStoneBg3 = t,
        t.source = "personalinformationidcardpetshow_imgmark1bg_png",
        t.x = 11,
        t.y = 0,
        t
    },
    i.imgStone3_i = function() {
        var t = new eui.Image;
        return this.imgStone3 = t,
        t.height = 18,
        t.width = 18,
        t.x = 65,
        t.y = 5,
        t
    },
    i.mark3_i = function() {
        var t = new eui.Image;
        return this.mark3 = t,
        t.height = 50,
        t.width = 50,
        t.x = 23,
        t.y = 17,
        t
    },
    i.txt_markLevel3_i = function() {
        var t = new eui.Label;
        return this.txt_markLevel3 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.stroke = 1,
        t.strokeColor = 1327750,
        t.text = "LV.0",
        t.textColor = 7667455,
        t.x = 14,
        t.y = 56,
        t
    },
    i.txt_markName3_i = function() {
        var t = new eui.Label;
        return this.txt_markName3 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "艾欧尼亚艾...",
        t.textAlign = "center",
        t.textColor = 12834813,
        t.width = 92,
        t.x = 0,
        t.y = 85,
        t
    },
    i.img_null_3_i = function() {
        var t = new eui.Image;
        return this.img_null_3 = t,
        t.height = 73,
        t.source = "personalinformation_id_cardpop_kong_png",
        t.visible = !0,
        t.width = 73,
        t.x = 11,
        t.y = 5,
        t
    },
    i.grp_petInfo_i = function() {
        var t = new eui.Group;
        return this.grp_petInfo = t,
        t.cacheAsBitmap = !0,
        t.visible = !0,
        t.x = 0,
        t.y = 71,
        t.elementsContent = [this._Image6_i(), this.txtStudy_i(), this.txtLevel_i(), this.txtHP_i(), this.txtNature_i(), this.txtEffect_i(), this.txtEffectInfo_i(), this.txtSEffect_i(), this.icon_star_1_i(), this.icon_star_2_i(), this.icon_star_3_i(), this.icon_star_4_i(), this.icon_star_5_i(), this.txtSEffectInfo_i(), this.txtAttack_i(), this.txtDefence_i(), this.txtSAttack_i(), this.txtSDefence_i(), this.txtSpeed_i(), this.txtHealth_i(), this._Label1_i(), this._Label2_i(), this._Label3_i(), this._Label4_i(), this._Label5_i(), this._Label6_i(), this._Image7_i(), this._Label7_i(), this._Image8_i(), this._Label8_i(), this._Image9_i(), this._Label9_i(), this._Image10_i(), this._Label10_i(), this._Image11_i(), this._Label11_i(), this._Image12_i()],
        t
    },
    i._Image6_i = function() {
        var t = new eui.Image;
        return t.source = "personalinformationidcardpetshow_jlzs_png",
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t
    },
    i.txtStudy_i = function() {
        var t = new eui.Label;
        return this.txtStudy = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "510/510",
        t.textColor = 4187130,
        t.x = 310,
        t.y = 207,
        t
    },
    i.txtLevel_i = function() {
        var t = new eui.Label;
        return this.txtLevel = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "100/100",
        t.textColor = 12834813,
        t.x = 122,
        t.y = 63,
        t
    },
    i.txtHP_i = function() {
        var t = new eui.Label;
        return this.txtHP = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "20/20",
        t.textColor = 12834813,
        t.x = 322,
        t.y = 65,
        t
    },
    i.txtNature_i = function() {
        var t = new eui.Label;
        return this.txtNature = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "31/31",
        t.textColor = 12834813,
        t.x = 122,
        t.y = 93,
        t
    },
    i.txtEffect_i = function() {
        var t = new eui.Label;
        return this.txtEffect = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "狂妄",
        t.textColor = 12834813,
        t.x = 291,
        t.y = 94,
        t
    },
    i.txtEffectInfo_i = function() {
        var t = new eui.Label;
        return this.txtEffectInfo = t,
        t.fontFamily = "MFShangHei",
        t.size = 12,
        t.text = "（特攻+10%，速度-10%) ",
        t.textColor = 6388143,
        t.x = 251,
        t.y = 113,
        t
    },
    i.txtSEffect_i = function() {
        var t = new eui.Label;
        return this.txtSEffect = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "顽强",
        t.textColor = 12834813,
        t.x = 122,
        t.y = 146,
        t
    },
    i.icon_star_1_i = function() {
        var t = new eui.Image;
        return this.icon_star_1 = t,
        t.source = "personalinformationidcardpetshow_icon_star_png",
        t.x = 166,
        t.y = 141,
        t
    },
    i.icon_star_2_i = function() {
        var t = new eui.Image;
        return this.icon_star_2 = t,
        t.source = "personalinformationidcardpetshow_icon_star_png",
        t.x = 193,
        t.y = 141,
        t
    },
    i.icon_star_3_i = function() {
        var t = new eui.Image;
        return this.icon_star_3 = t,
        t.source = "personalinformationidcardpetshow_icon_star_png",
        t.x = 220,
        t.y = 141,
        t
    },
    i.icon_star_4_i = function() {
        var t = new eui.Image;
        return this.icon_star_4 = t,
        t.source = "personalinformationidcardpetshow_icon_star_png",
        t.x = 248,
        t.y = 141,
        t
    },
    i.icon_star_5_i = function() {
        var t = new eui.Image;
        return this.icon_star_5 = t,
        t.source = "",
        t.x = 276,
        t.y = 142,
        t
    },
    i.txtSEffectInfo_i = function() {
        var t = new eui.Label;
        return this.txtSEffectInfo = t,
        t.fontFamily = "MFShangHei",
        t.size = 12,
        t.text = "(受到致死攻击时有5%概率剩余1点体力)",
        t.textColor = 6388143,
        t.x = 100,
        t.y = 169,
        t
    },
    i.txtAttack_i = function() {
        var t = new eui.Label;
        return this.txtAttack = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "225",
        t.textColor = 12834813,
        t.x = 139,
        t.y = 243,
        t
    },
    i.txtDefence_i = function() {
        var t = new eui.Label;
        return this.txtDefence = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "225",
        t.textColor = 12834813,
        t.x = 308,
        t.y = 243,
        t
    },
    i.txtSAttack_i = function() {
        var t = new eui.Label;
        return this.txtSAttack = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "225",
        t.textColor = 12834813,
        t.x = 139,
        t.y = 275,
        t
    },
    i.txtSDefence_i = function() {
        var t = new eui.Label;
        return this.txtSDefence = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "225",
        t.textColor = 12834813,
        t.x = 308,
        t.y = 275,
        t
    },
    i.txtSpeed_i = function() {
        var t = new eui.Label;
        return this.txtSpeed = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "225",
        t.textColor = 12834813,
        t.x = 139,
        t.y = 306,
        t
    },
    i.txtHealth_i = function() {
        var t = new eui.Label;
        return this.txtHealth = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "225",
        t.textColor = 12834813,
        t.x = 308,
        t.y = 306,
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "等级：",
        t.textColor = 16777215,
        t.x = 68,
        t.y = 64,
        t
    },
    i._Label2_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "体力上限：",
        t.textColor = 16777215,
        t.x = 238,
        t.y = 64,
        t
    },
    i._Label3_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "天赋：",
        t.textColor = 16777215,
        t.x = 68,
        t.y = 94,
        t
    },
    i._Label4_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "性格：",
        t.textColor = 16777215,
        t.x = 238,
        t.y = 94,
        t
    },
    i._Label5_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "特性：",
        t.textColor = 16777215,
        t.x = 68,
        t.y = 145,
        t
    },
    i._Label6_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "攻击：",
        t.textColor = 16777215,
        t.x = 68,
        t.y = 243,
        t
    },
    i._Image7_i = function() {
        var t = new eui.Image;
        return t.source = "personalinformationidcardpetshow_texture_star_png",
        t.x = 124,
        t.y = 246,
        t
    },
    i._Label7_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "防御：",
        t.textColor = 16777215,
        t.x = 243,
        t.y = 243,
        t
    },
    i._Image8_i = function() {
        var t = new eui.Image;
        return t.source = "personalinformationidcardpetshow_texture_star_png",
        t.x = 293,
        t.y = 246,
        t
    },
    i._Label8_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "特攻：",
        t.textColor = 16777215,
        t.x = 68,
        t.y = 274,
        t
    },
    i._Image9_i = function() {
        var t = new eui.Image;
        return t.source = "personalinformationidcardpetshow_texture_star_png",
        t.x = 124,
        t.y = 276,
        t
    },
    i._Label9_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "特防：",
        t.textColor = 16777215,
        t.x = 242,
        t.y = 274,
        t
    },
    i._Image10_i = function() {
        var t = new eui.Image;
        return t.source = "personalinformationidcardpetshow_texture_star_png",
        t.x = 293,
        t.y = 276,
        t
    },
    i._Label10_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "速度：",
        t.textColor = 16777215,
        t.x = 68,
        t.y = 305,
        t
    },
    i._Image11_i = function() {
        var t = new eui.Image;
        return t.source = "personalinformationidcardpetshow_texture_star_png",
        t.x = 124,
        t.y = 307,
        t
    },
    i._Label11_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "体力：",
        t.textColor = 16777215,
        t.x = 243,
        t.y = 305,
        t
    },
    i._Image12_i = function() {
        var t = new eui.Image;
        return t.source = "personalinformationidcardpetshow_texture_star_png",
        t.x = 293,
        t.y = 307,
        t
    },
    i.grp_petTeXing_i = function() {
        var t = new eui.Group;
        return this.grp_petTeXing = t,
        t.cacheAsBitmap = !0,
        t.visible = !0,
        t.x = 1,
        t.y = 71,
        t.elementsContent = [this._Image13_i(), this.Te_i()],
        t
    },
    i._Image13_i = function() {
        var t = new eui.Image;
        return t.height = 351.086,
        t.scale9Grid = new egret.Rectangle(81, 128, 6, 3),
        t.source = "personalinformationidcardpetshow_imgtebg_png",
        t.visible = !0,
        t.width = 408,
        t.x = 0,
        t.y = -4.357,
        t
    },
    i.Te_i = function() {
        var t = new eui.Group;
        return this.Te = t,
        t.x = 29,
        t.y = 23,
        t.elementsContent = [this._Group1_i(), this._Scroller1_i(), this._Group2_i(), this._Scroller2_i(), this._Label12_i(), this._Label13_i()],
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.x = 0,
        t.y = 0,
        t.elementsContent = [this.titlebg_i(), this.titleName_i()],
        t
    },
    i.titlebg_i = function() {
        var t = new eui.Image;
        return this.titlebg = t,
        t.source = "personalinformationidcardpetshow_titlebg_png",
        t.x = 0,
        t.y = 4,
        t
    },
    i.titleName_i = function() {
        var t = new eui.Image;
        return this.titleName = t,
        t.source = "personalinformationidcardpetshow_titlename1_png",
        t.x = 7,
        t.y = -1,
        t
    },
    i._Scroller1_i = function() {
        var t = new eui.Scroller;
        return t.height = 78,
        t.width = 336,
        t.x = 14,
        t.y = 43,
        t.viewport = this.damageResistList_i(),
        t
    },
    i.damageResistList_i = function() {
        var t = new eui.List;
        return this.damageResistList = t,
        t.layout = this._VerticalLayout1_i(),
        t
    },
    i._VerticalLayout1_i = function() {
        var t = new eui.VerticalLayout;
        return t.gap = 8,
        t
    },
    i._Group2_i = function() {
        var t = new eui.Group;
        return t.x = 0,
        t.y = 127,
        t.elementsContent = [this.titlebg_2_i(), this.titleName2_i()],
        t
    },
    i.titlebg_2_i = function() {
        var t = new eui.Image;
        return this.titlebg_2 = t,
        t.source = "personalinformationidcardpetshow_titlebg_png",
        t.x = 0,
        t.y = 4,
        t
    },
    i.titleName2_i = function() {
        var t = new eui.Image;
        return this.titleName2 = t,
        t.source = "personalinformationidcardpetshow_titlename2_png",
        t.x = 7,
        t.y = -1,
        t
    },
    i._Scroller2_i = function() {
        var t = new eui.Scroller;
        return t.height = 95,
        t.width = 334,
        t.x = 14,
        t.y = 203,
        t.viewport = this.debuffResistList_i(),
        t
    },
    i.debuffResistList_i = function() {
        var t = new eui.List;
        return this.debuffResistList = t,
        t.layout = this._TileLayout1_i(),
        t
    },
    i._TileLayout1_i = function() {
        var t = new eui.TileLayout;
        return t.horizontalGap = 22,
        t.orientation = "columns",
        t.requestedColumnCount = 2,
        t.requestedRowCount = 3,
        t.verticalGap = 16,
        t
    },
    i._Label12_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "控制类",
        t.textColor = 8631282,
        t.x = 62,
        t.y = 169,
        t
    },
    i._Label13_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "弱化类",
        t.textColor = 8631282,
        t.x = 237,
        t.y = 169,
        t
    },
    i.imgNoShow_i = function() {
        var t = new eui.Image;
        return this.imgNoShow = t,
        t.source = "personalinformationidcardpetshow_imgclose_png",
        t.visible = !1,
        t.x = 162,
        t.y = 202,
        t
    },
    i.btnZhanShi_i = function() {
        var t = new eui.Image;
        return this.btnZhanShi = t,
        t.source = "personalinformationidcardpetshow_btnzhanshi_png",
        t.x = 437,
        t.y = 517,
        t
    },
    i.btnCancel_i = function() {
        var t = new eui.Image;
        return this.btnCancel = t,
        t.source = "personalinformationidcardpetshow_btnquxiao_png",
        t.x = 404,
        t.y = 517,
        t
    },
    i.btnExchange_i = function() {
        var t = new eui.Image;
        return this.btnExchange = t,
        t.source = "personalinformationidcardpetshow_btntihuan_png",
        t.visible = !0,
        t.x = 470,
        t.y = 517,
        t
    },
    i.btnChange_i = function() {
        var t = new eui.Image;
        return this.btnChange = t,
        t.source = "personalinformationidcardpetshow_btngenghuan_png",
        t.visible = !0,
        t.x = 437,
        t.y = 517,
        t
    },
    i.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.height = 43,
        t.source = "common_pop_btn_close_png",
        t.width = 43,
        t.x = 484,
        t.y = 0,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/Card/PersonalinformationIdCardpopSkin.exml"] = window.PersonalinformationIdCardpopSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["cardbg", "btnClose", "avatar", "headContainer", "txt_registerTime", "txt_userId", "btnCopy", "nameBg", "txt_nick", "btnChangeName", "txt_vipLevel", "grp_vipInfo", "txt_teamName", "txt_militaryName", "military_icon", "userinfo", "_listAchieve", "achieve", "achieveHasNum", "achieveAllNum", "collectAchieve", "petsHasNum", "petsAllNum", "collectPets", "skinHasNum", "skinAllNum", "collectSkin", "collect", "imgCurrPeakLevel", "txtCurLevelName", "txtWinRate", "shenglv", "cur", "imgMaxPeakLevel", "txtMaxLevelName", "history", "peakJihad", "_listPetShow", "petShow", "btnGrpInvite", "btnTeamInvite", "grp_inviting", "btnBlock", "btnInvite", "btnAdd", "btnDelete", "btnReport", "ohter", "reddotCard", "btnReplace", "IDCard"],
        this.height = 568,
        this.width = 1067,
        this.elementsContent = [this.IDCard_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.IDCard_i = function() {
        var t = new eui.Group;
        return this.IDCard = t,
        t.cacheAsBitmap = !0,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image1_i(), this.cardbg_i(), this.btnClose_i(), this.headContainer_i(), this.userinfo_i(), this.achieve_i(), this.collect_i(), this.peakJihad_i(), this.petShow_i(), this.grp_inviting_i(), this.ohter_i(), this.btnReplace_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 567,
        t.scale9Grid = new egret.Rectangle(336, 186, 337, 185),
        t.source = "personalinformation_id_cardpop_mpdk_png",
        t.visible = !0,
        t.width = 1022,
        t.x = 0,
        t.y = 0,
        t
    },
    i.cardbg_i = function() {
        var t = new eui.Image;
        return this.cardbg = t,
        t.visible = !0,
        t.x = 14,
        t.y = 13,
        t
    },
    i.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.height = 33,
        t.source = "common_pop_btn_close_png",
        t.width = 34,
        t.x = 961,
        t.y = 15,
        t
    },
    i.headContainer_i = function() {
        var t = new eui.Group;
        return this.headContainer = t,
        t.height = 122,
        t.width = 122,
        t.x = 60,
        t.y = 42,
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
    i.userinfo_i = function() {
        var t = new eui.Group;
        return this.userinfo = t,
        t.x = 199,
        t.y = 45,
        t.elementsContent = [this._Group1_i(), this._Group2_i(), this._Group3_i(), this.grp_vipInfo_i(), this._Group4_i(), this._Group5_i()],
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.x = 200,
        t.y = 0,
        t.elementsContent = [this._Image2_i(), this.txt_registerTime_i(), this._Image3_i()],
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.alpha = .4,
        t.height = 35,
        t.scale9Grid = new egret.Rectangle(17, 17, 16, 16),
        t.source = "common_mask_bg_s9_png",
        t.visible = !0,
        t.width = 150,
        t.x = 0,
        t.y = 0,
        t
    },
    i.txt_registerTime_i = function() {
        var t = new eui.Label;
        return this.txt_registerTime = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "2022-08-16",
        t.textColor = 15793407,
        t.x = 46,
        t.y = 10,
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "personalinformation_id_cardpop_icon_riji_png",
        t.x = 6,
        t.y = 1,
        t
    },
    i._Group2_i = function() {
        var t = new eui.Group;
        return t.visible = !0,
        t.x = 0,
        t.y = 40,
        t.elementsContent = [this._Image4_i(), this.txt_userId_i(), this.btnCopy_i(), this._Image5_i()],
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.alpha = .4,
        t.height = 35,
        t.scale9Grid = new egret.Rectangle(17, 17, 16, 16),
        t.source = "common_mask_bg_s9_png",
        t.visible = !0,
        t.width = 150,
        t.x = 0,
        t.y = 0,
        t
    },
    i.txt_userId_i = function() {
        var t = new eui.Label;
        return this.txt_userId = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "15456789012",
        t.textColor = 15793407,
        t.x = 43,
        t.y = 10,
        t
    },
    i.btnCopy_i = function() {
        var t = new eui.Image;
        return this.btnCopy = t,
        t.source = "personalinformation_id_cardpop_btnfuzhi__png",
        t.x = 159,
        t.y = 4,
        t
    },
    i._Image5_i = function() {
        var t = new eui.Image;
        return t.source = "personalinformation_id_cardpop_icon_id_png",
        t.x = 5,
        t.y = 3,
        t
    },
    i._Group3_i = function() {
        var t = new eui.Group;
        return t.visible = !0,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image6_i(), this.nameBg_i(), this.txt_nick_i(), this.btnChangeName_i(), this._Image7_i()],
        t
    },
    i._Image6_i = function() {
        var t = new eui.Image;
        return t.alpha = .4,
        t.height = 35,
        t.scale9Grid = new egret.Rectangle(17, 17, 16, 16),
        t.source = "common_mask_bg_s9_png",
        t.visible = !0,
        t.width = 150,
        t.x = 0,
        t.y = 0,
        t
    },
    i.nameBg_i = function() {
        var t = new eui.Image;
        return this.nameBg = t,
        t.height = 45,
        t.width = 144,
        t.x = 0,
        t.y = -4.947,
        t
    },
    i.txt_nick_i = function() {
        var t = new eui.Label;
        return this.txt_nick = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = -21.5,
        t.size = 17,
        t.text = "逆臣逆臣臣",
        t.textColor = 15793407,
        t.y = 10,
        t
    },
    i.btnChangeName_i = function() {
        var t = new eui.Image;
        return this.btnChangeName = t,
        t.source = "personalinformation_id_cardpop_btnbianji_png",
        t.x = 159,
        t.y = 4,
        t
    },
    i._Image7_i = function() {
        var t = new eui.Image;
        return t.source = "personalinformation_id_cardpop_icon_nc_png",
        t.visible = !1,
        t.x = 6,
        t.y = 0,
        t
    },
    i.grp_vipInfo_i = function() {
        var t = new eui.Group;
        return this.grp_vipInfo = t,
        t.x = 200,
        t.y = 40,
        t.elementsContent = [this._Image8_i(), this.txt_vipLevel_i(), this._Image9_i()],
        t
    },
    i._Image8_i = function() {
        var t = new eui.Image;
        return t.alpha = .4,
        t.height = 35,
        t.scale9Grid = new egret.Rectangle(17, 17, 16, 16),
        t.source = "common_mask_bg_s9_png",
        t.visible = !0,
        t.width = 150,
        t.x = 0,
        t.y = 0,
        t
    },
    i.txt_vipLevel_i = function() {
        var t = new eui.Label;
        return this.txt_vipLevel = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "VIP 5",
        t.textColor = 16770391,
        t.x = 46,
        t.y = 10,
        t
    },
    i._Image9_i = function() {
        var t = new eui.Image;
        return t.source = "personalinformation_id_cardpop_icon_vip_png",
        t.x = 5,
        t.y = 0,
        t
    },
    i._Group4_i = function() {
        var t = new eui.Group;
        return t.x = 0,
        t.y = 80,
        t.elementsContent = [this._Image10_i(), this.txt_teamName_i(), this._Image11_i()],
        t
    },
    i._Image10_i = function() {
        var t = new eui.Image;
        return t.alpha = .4,
        t.height = 35,
        t.scale9Grid = new egret.Rectangle(17, 17, 16, 16),
        t.source = "common_mask_bg_s9_png",
        t.visible = !0,
        t.width = 150,
        t.x = 0,
        t.y = 0,
        t
    },
    i.txt_teamName_i = function() {
        var t = new eui.Label;
        return this.txt_teamName = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "战队五个字",
        t.textColor = 15793407,
        t.x = 44,
        t.y = 9,
        t
    },
    i._Image11_i = function() {
        var t = new eui.Image;
        return t.source = "personalinformation_id_cardpop_icon_zd_png",
        t.x = 1,
        t.y = 0,
        t
    },
    i._Group5_i = function() {
        var t = new eui.Group;
        return t.x = 200,
        t.y = 80,
        t.elementsContent = [this._Image12_i(), this.txt_militaryName_i(), this._Image13_i(), this.military_icon_i()],
        t
    },
    i._Image12_i = function() {
        var t = new eui.Image;
        return t.alpha = .4,
        t.height = 35,
        t.scale9Grid = new egret.Rectangle(17, 17, 16, 16),
        t.source = "common_mask_bg_s9_png",
        t.visible = !0,
        t.width = 150,
        t.x = 0,
        t.y = 0,
        t
    },
    i.txt_militaryName_i = function() {
        var t = new eui.Label;
        return this.txt_militaryName = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "大校",
        t.textColor = 15793407,
        t.x = 75,
        t.y = 10,
        t
    },
    i._Image13_i = function() {
        var t = new eui.Image;
        return t.source = "personalinformation_id_cardpop_icon_jx_png",
        t.x = 5,
        t.y = 1,
        t
    },
    i.military_icon_i = function() {
        var t = new eui.Image;
        return this.military_icon = t,
        t.height = 20,
        t.width = 20,
        t.x = 48,
        t.y = 10,
        t
    },
    i.achieve_i = function() {
        var t = new eui.Group;
        return this.achieve = t,
        t.x = 37,
        t.y = 295,
        t.elementsContent = [this._Image14_i(), this._Image15_i(), this._listAchieve_i()],
        t
    },
    i._Image14_i = function() {
        var t = new eui.Image;
        return t.source = "personalinformation_id_cardpop_showBg_png",
        t.visible = !0,
        t.x = 5,
        t.y = 5,
        t
    },
    i._Image15_i = function() {
        var t = new eui.Image;
        return t.source = "personalinformation_id_cardpop_chzs_png",
        t.visible = !0,
        t.x = 5,
        t.y = 0,
        t
    },
    i._listAchieve_i = function() {
        var t = new eui.List;
        return this._listAchieve = t,
        t.height = 50,
        t.width = 309,
        t.x = 24,
        t.y = 47,
        t.layout = this._HorizontalLayout1_i(),
        t
    },
    i._HorizontalLayout1_i = function() {
        var t = new eui.HorizontalLayout;
        return t.gap = 13,
        t
    },
    i.collect_i = function() {
        var t = new eui.Group;
        return this.collect = t,
        t.visible = !0,
        t.x = 42,
        t.y = 179,
        t.elementsContent = [this._Image16_i(), this._Image17_i(), this.collectAchieve_i(), this.collectPets_i(), this.collectSkin_i()],
        t
    },
    i._Image16_i = function() {
        var t = new eui.Image;
        return t.source = "personalinformation_id_cardpop_showBg_png",
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Image17_i = function() {
        var t = new eui.Image;
        return t.source = "personalinformation_id_cardpop_sjjc_png",
        t.visible = !0,
        t.x = 5,
        t.y = -5,
        t
    },
    i.collectAchieve_i = function() {
        var t = new eui.Group;
        return this.collectAchieve = t,
        t.x = 15,
        t.y = 38,
        t.elementsContent = [this._Label1_i(), this.achieveHasNum_i(), this.achieveAllNum_i(), this._Image18_i(), this._Image19_i()],
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "成就",
        t.textColor = 15728127,
        t.x = 12,
        t.y = 49,
        t
    },
    i.achieveHasNum_i = function() {
        var t = new eui.Label;
        return this.achieveHasNum = t,
        t.fontFamily = "MFShangHei",
        t.size = 26,
        t.text = "9999",
        t.textColor = 845311,
        t.x = 12,
        t.y = 3,
        t
    },
    i.achieveAllNum_i = function() {
        var t = new eui.Label;
        return this.achieveAllNum = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "9999",
        t.textColor = 4151437,
        t.x = 12,
        t.y = 29,
        t
    },
    i._Image18_i = function() {
        var t = new eui.Image;
        return t.source = "personalinformation_id_cardpop_line2_png",
        t.x = 13,
        t.y = 26,
        t
    },
    i._Image19_i = function() {
        var t = new eui.Image;
        return t.source = "personalinformation_id_cardpop_imgshu_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.collectPets_i = function() {
        var t = new eui.Group;
        return this.collectPets = t,
        t.x = 150,
        t.y = 38,
        t.elementsContent = [this._Label2_i(), this.petsHasNum_i(), this.petsAllNum_i(), this._Image20_i(), this._Image21_i()],
        t
    },
    i._Label2_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "精灵种类",
        t.textColor = 15728127,
        t.x = 11,
        t.y = 48,
        t
    },
    i.petsHasNum_i = function() {
        var t = new eui.Label;
        return this.petsHasNum = t,
        t.fontFamily = "MFShangHei",
        t.size = 26,
        t.text = "9999",
        t.textColor = 845311,
        t.x = 13,
        t.y = 3,
        t
    },
    i.petsAllNum_i = function() {
        var t = new eui.Label;
        return this.petsAllNum = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "9999",
        t.textColor = 4151437,
        t.x = 13,
        t.y = 29,
        t
    },
    i._Image20_i = function() {
        var t = new eui.Image;
        return t.source = "personalinformation_id_cardpop_line2_png",
        t.x = 13,
        t.y = 26,
        t
    },
    i._Image21_i = function() {
        var t = new eui.Image;
        return t.source = "personalinformation_id_cardpop_imgshu_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.collectSkin_i = function() {
        var t = new eui.Group;
        return this.collectSkin = t,
        t.x = 287,
        t.y = 38,
        t.elementsContent = [this._Label3_i(), this.skinHasNum_i(), this.skinAllNum_i(), this._Image22_i(), this._Image23_i()],
        t
    },
    i._Label3_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "皮肤收集",
        t.textColor = 15728127,
        t.x = 12,
        t.y = 48,
        t
    },
    i.skinHasNum_i = function() {
        var t = new eui.Label;
        return this.skinHasNum = t,
        t.fontFamily = "MFShangHei",
        t.size = 26,
        t.text = "9999",
        t.textColor = 845311,
        t.x = 13,
        t.y = 3,
        t
    },
    i.skinAllNum_i = function() {
        var t = new eui.Label;
        return this.skinAllNum = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "9999",
        t.textColor = 4151437,
        t.x = 13,
        t.y = 29,
        t
    },
    i._Image22_i = function() {
        var t = new eui.Image;
        return t.source = "personalinformation_id_cardpop_line2_png",
        t.x = 13,
        t.y = 26,
        t
    },
    i._Image23_i = function() {
        var t = new eui.Image;
        return t.source = "personalinformation_id_cardpop_imgshu_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.peakJihad_i = function() {
        var t = new eui.Group;
        return this.peakJihad = t,
        t.visible = !0,
        t.x = 591,
        t.y = 417,
        t.elementsContent = [this._Image24_i(), this._Image25_i(), this.cur_i(), this.history_i()],
        t
    },
    i._Image24_i = function() {
        var t = new eui.Image;
        return t.height = 121,
        t.scale9Grid = new egret.Rectangle(181, 12, 182, 3),
        t.source = "personalinformation_id_cardpop_showBg_png",
        t.visible = !0,
        t.width = 408,
        t.x = 0,
        t.y = 5,
        t
    },
    i._Image25_i = function() {
        var t = new eui.Image;
        return t.source = "personalinformation_id_cardpop_dfsz_png",
        t.visible = !0,
        t.x = 5,
        t.y = 0,
        t
    },
    i.cur_i = function() {
        var t = new eui.Group;
        return this.cur = t,
        t.x = 24,
        t.y = 38,
        t.elementsContent = [this._Image26_i(), this._Label4_i(), this.imgCurrPeakLevel_i(), this.txtCurLevelName_i(), this.txtWinRate_i(), this.shenglv_i()],
        t
    },
    i._Image26_i = function() {
        var t = new eui.Image;
        return t.height = 72,
        t.scale9Grid = new egret.Rectangle(23, 2, 4, 2),
        t.source = "personalinformation_peakJiHad_itemBg_png",
        t.width = 214,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Label4_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.height = 65,
        t.size = 16,
        t.text = "当前赛季",
        t.textColor = 14740735,
        t.width = 17,
        t.x = 2,
        t.y = 4,
        t
    },
    i.imgCurrPeakLevel_i = function() {
        var t = new eui.Image;
        return this.imgCurrPeakLevel = t,
        t.height = 52,
        t.source = "personalinformation_id_cardpop_15_png",
        t.width = 52,
        t.x = 36,
        t.y = 1,
        t
    },
    i.txtCurLevelName_i = function() {
        var t = new eui.Label;
        return this.txtCurLevelName = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = -44,
        t.scaleX = 1,
        t.scaleY = 1,
        t.size = 18,
        t.text = "段位名称",
        t.textAlign = "center",
        t.textColor = 16514895,
        t.y = 54,
        t
    },
    i.txtWinRate_i = function() {
        var t = new eui.Label;
        return this.txtWinRate = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = 52.5,
        t.size = 25,
        t.text = "99%",
        t.textColor = 16514895,
        t.y = 47,
        t
    },
    i.shenglv_i = function() {
        var t = new eui.Label;
        return this.shenglv = t,
        t.fontFamily = "MFShangHei",
        t.size = 25,
        t.text = "胜率",
        t.textColor = 8631282,
        t.x = 134,
        t.y = 11,
        t
    },
    i.history_i = function() {
        var t = new eui.Group;
        return this.history = t,
        t.x = 256,
        t.y = 38,
        t.elementsContent = [this._Image27_i(), this._Label5_i(), this.imgMaxPeakLevel_i(), this.txtMaxLevelName_i()],
        t
    },
    i._Image27_i = function() {
        var t = new eui.Image;
        return t.height = 72,
        t.scale9Grid = new egret.Rectangle(23, 2, 3, 2),
        t.source = "personalinformation_peakJiHad_itemBg_png",
        t.width = 105,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Label5_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.height = 65,
        t.size = 16,
        t.text = "历史最高",
        t.textColor = 14740735,
        t.width = 17,
        t.x = 2,
        t.y = 5,
        t
    },
    i.imgMaxPeakLevel_i = function() {
        var t = new eui.Image;
        return this.imgMaxPeakLevel = t,
        t.height = 52,
        t.source = "personalinformation_id_cardpop_21_png",
        t.width = 52,
        t.x = 36,
        t.y = 1,
        t
    },
    i.txtMaxLevelName_i = function() {
        var t = new eui.Label;
        return this.txtMaxLevelName = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = 9,
        t.scaleX = 1,
        t.scaleY = 1,
        t.size = 18,
        t.text = "段位名称",
        t.textColor = 16514895,
        t.x = 42,
        t.y = 54,
        t
    },
    i.petShow_i = function() {
        var t = new eui.Group;
        return this.petShow = t,
        t.visible = !0,
        t.x = 42,
        t.y = 417,
        t.elementsContent = [this._Image28_i(), this._Image29_i(), this._listPetShow_i()],
        t
    },
    i._Image28_i = function() {
        var t = new eui.Image;
        return t.source = "personalinformation_id_cardpop_showBg_png",
        t.visible = !0,
        t.x = 0,
        t.y = 5,
        t
    },
    i._Image29_i = function() {
        var t = new eui.Image;
        return t.source = "personalinformation_id_cardpop_jlzs_png",
        t.visible = !0,
        t.x = 5,
        t.y = 0,
        t
    },
    i._listPetShow_i = function() {
        var t = new eui.List;
        return this._listPetShow = t,
        t.height = 77,
        t.width = 348,
        t.x = 19,
        t.y = 42,
        t.layout = this._HorizontalLayout2_i(),
        t
    },
    i._HorizontalLayout2_i = function() {
        var t = new eui.HorizontalLayout;
        return t.gap = 15,
        t
    },
    i.grp_inviting_i = function() {
        var t = new eui.Group;
        return this.grp_inviting = t,
        t.visible = !1,
        t.x = 908,
        t.y = 215,
        t.elementsContent = [this._Image30_i(), this.btnGrpInvite_i(), this.btnTeamInvite_i()],
        t
    },
    i._Image30_i = function() {
        var t = new eui.Image;
        return t.height = 193,
        t.source = "personalInformation_ID_Card_cardPop_dck_png",
        t.visible = !0,
        t.width = 98,
        t.x = 0,
        t.y = 0,
        t
    },
    i.btnGrpInvite_i = function() {
        var t = new eui.Image;
        return this.btnGrpInvite = t,
        t.height = 59,
        t.source = "personalInformation_ID_Card_cardPop_zudui_png",
        t.width = 75,
        t.x = 9,
        t.y = 24,
        t
    },
    i.btnTeamInvite_i = function() {
        var t = new eui.Image;
        return this.btnTeamInvite = t,
        t.height = 64,
        t.source = "personalInformation_ID_Card_cardPop_yqzd_png",
        t.width = 75,
        t.x = 9,
        t.y = 101,
        t
    },
    i.ohter_i = function() {
        var t = new eui.Group;
        return this.ohter = t,
        t.visible = !0,
        t.x = 1012,
        t.y = 140,
        t.elementsContent = [this._Image31_i(), this.btnBlock_i(), this.btnInvite_i(), this.btnAdd_i(), this.btnDelete_i(), this.btnReport_i()],
        t
    },
    i._Image31_i = function() {
        var t = new eui.Image;
        return t.scaleX = 1,
        t.scaleY = 1,
        t.source = "personalinformation_id_cardpop_other_png",
        t.visible = !0,
        t.x = -7.000000000000114,
        t.y = -16,
        t
    },
    i.btnBlock_i = function() {
        var t = new eui.Image;
        return this.btnBlock = t,
        t.source = "personalinformation_id_cardpop_btnlahei_png",
        t.visible = !0,
        t.x = 0,
        t.y = 140,
        t
    },
    i.btnInvite_i = function() {
        var t = new eui.Image;
        return this.btnInvite = t,
        t.source = "personalinformation_id_cardpop_btnyaoqing_png",
        t.visible = !0,
        t.x = 0,
        t.y = 219,
        t
    },
    i.btnAdd_i = function() {
        var t = new eui.Image;
        return this.btnAdd = t,
        t.source = "personalinformation_id_cardpop_btntianjia_png",
        t.visible = !0,
        t.x = 1,
        t.y = 0,
        t
    },
    i.btnDelete_i = function() {
        var t = new eui.Image;
        return this.btnDelete = t,
        t.source = "personalinformation_id_cardpop_btnshanchu_png",
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t
    },
    i.btnReport_i = function() {
        var t = new eui.Image;
        return this.btnReport = t,
        t.source = "personalinformation_id_cardpop_btnjubao_png",
        t.x = 1,
        t.y = 70,
        t
    },
    i.btnReplace_i = function() {
        var t = new eui.Group;
        return this.btnReplace = t,
        t.x = 606,
        t.y = 40,
        t.elementsContent = [this._Image32_i(), this.reddotCard_i()],
        t
    },
    i._Image32_i = function() {
        var t = new eui.Image;
        return t.source = "personalinformation_id_cardpop_btnreplace_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.reddotCard_i = function() {
        var t = new eui.Image;
        return this.reddotCard = t,
        t.height = 20,
        t.source = "dot_png",
        t.touchEnabled = !1,
        t.visible = !0,
        t.width = 20,
        t.x = 30,
        t.y = 0,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/Card/PersonalinformationIdChoosepetpopSkin.exml"] = window.PersonalinformationIdChoosepetpopSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["btnClose", "jindude", "jindu", "btnShaixuan", "dekuang", "_listPets", "_scorl", "editable_search", "img_btn_search_name", "grp_serch", "img_btn_sort", "lab_select_sort", "grp_btn_sort", "bg_mask", "sort_bg", "rb_id_sort_down", "rb_id_sort_up", "rb_lvl_sort_down", "rb_lvl_sort_up", "rb_tm_sort_down", "rb_tm_sort_up", "grp_select_sort", "choosePet"],
        this.height = 431,
        this.width = 754,
        this.elementsContent = [this.choosePet_i()]
    }
    __extends(e, t);
    var i = function(t) {
        function e() {
            t.call(this),
            this.skinParts = ["labelDisplay"],
            this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "warehouseid_sort_down_down_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "warehouseid_sort_down_up_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t
        },
        i.labelDisplay_i = function() {
            var t = new eui.Label;
            return this.labelDisplay = t,
            t.fontFamily = "MFShangHei",
            t.horizontalCenter = 0,
            t.verticalCenter = 0,
            t
        },
        e
    } (eui.Skin),
    n = function(t) {
        function e() {
            t.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "warehouseid_sort_up_down_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "warehouseid_sort_up_up_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t
        },
        e
    } (eui.Skin),
    r = function(t) {
        function e() {
            t.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "warehouselvl_sort_down_down_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "warehouselvl_sort_down_up_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t
        },
        e
    } (eui.Skin),
    o = function(t) {
        function e() {
            t.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "warehouselvl_sort_up_down_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "warehouselvl_sort_up_up_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t
        },
        e
    } (eui.Skin),
    a = function(t) {
        function e() {
            t.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "warehousetm_sort_down_down_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "warehousetm_sort_down_up_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t
        },
        e
    } (eui.Skin),
    s = function(t) {
        function e() {
            t.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "warehousetm_sort_up_down_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "warehousetm_sort_up_up_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t
        },
        e
    } (eui.Skin),
    h = e.prototype;
    return h.choosePet_i = function() {
        var t = new eui.Group;
        return this.choosePet = t,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Group1_i(), this.jindude_i(), this.jindu_i(), this.btnShaixuan_i(), this._Group2_i(), this.grp_serch_i(), this.grp_btn_sort_i(), this.bg_mask_i(), this.grp_select_sort_i()],
        t
    },
    h._Group1_i = function() {
        var t = new eui.Group;
        return t.visible = !0,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image1_i(), this._Image2_i(), this._Image3_i(), this.btnClose_i()],
        t
    },
    h._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 431,
        t.source = "common_s9_pop_bg4_png",
        t.visible = !0,
        t.width = 754,
        t.x = 0,
        t.y = 4,
        t
    },
    h._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 34,
        t.source = "common_pop_up_bg_big_png",
        t.visible = !0,
        t.width = 748,
        t.x = 1,
        t.y = 4,
        t
    },
    h._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "personalinformation_id_choosepetpop_xzzsjs_png",
        t.x = 37,
        t
    },
    h.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.height = 33,
        t.source = "common_pop_btn_close_png",
        t.width = 34,
        t.x = 711,
        t.y = 4,
        t
    },
    h.jindude_i = function() {
        var t = new eui.Image;
        return this.jindude = t,
        t.source = "personalinformation_id_choosepetpop_jindude_png",
        t.x = 726,
        t.y = 92,
        t
    },
    h.jindu_i = function() {
        var t = new eui.Image;
        return this.jindu = t,
        t.source = "personalinformation_id_choosepetpop_jindu_png",
        t.x = 726,
        t.y = 176,
        t
    },
    h.btnShaixuan_i = function() {
        var t = new eui.Image;
        return this.btnShaixuan = t,
        t.source = "warehousenew_btnattr_png",
        t.visible = !0,
        t.x = 24,
        t.y = 48,
        t
    },
    h._Group2_i = function() {
        var t = new eui.Group;
        return t.x = 23,
        t.y = 91,
        t.elementsContent = [this.dekuang_i(), this._scorl_i()],
        t
    },
    h.dekuang_i = function() {
        var t = new eui.Image;
        return this.dekuang = t,
        t.height = 317,
        t.scale9Grid = new egret.Rectangle(4, 4, 4, 4),
        t.source = "personalInformation_ID_Card_cardPop_dekuang_png",
        t.visible = !0,
        t.width = 707,
        t.x = 0,
        t.y = 0,
        t
    },
    h._scorl_i = function() {
        var t = new eui.Scroller;
        return this._scorl = t,
        t.height = 309,
        t.scrollPolicyH = "off",
        t.scrollPolicyV = "on",
        t.width = 675,
        t.x = 12,
        t.y = 7,
        t.viewport = this._listPets_i(),
        t
    },
    h._listPets_i = function() {
        var t = new eui.List;
        return this._listPets = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.x = 0,
        t.y = 0,
        t.layout = this._TileLayout1_i(),
        t.dataProvider = this._ArrayCollection1_i(),
        t
    },
    h._TileLayout1_i = function() {
        var t = new eui.TileLayout;
        return t.paddingBottom = 10,
        t.paddingRight = 10,
        t.paddingTop = 0,
        t
    },
    h._ArrayCollection1_i = function() {
        var t = new eui.ArrayCollection;
        return t.source = [this._Object1_i()],
        t
    },
    h._Object1_i = function() {
        var t = {};
        return t
    },
    h.grp_serch_i = function() {
        var t = new eui.Group;
        return this.grp_serch = t,
        t.x = 569,
        t.y = 50,
        t.elementsContent = [this._Image4_i(), this.editable_search_i(), this.img_btn_search_name_i()],
        t
    },
    h._Image4_i = function() {
        var t = new eui.Image;
        return t.source = "personalinformation_id_choosepetpop_searchbg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    h.editable_search_i = function() {
        var t = new eui.EditableText;
        return this.editable_search = t,
        t.fontFamily = "MFShangHei",
        t.height = 18,
        t.prompt = "输入精灵名或ID",
        t.promptColor = 13097725,
        t.size = 15,
        t.textColor = 13097725,
        t.width = 108,
        t.x = 10,
        t.y = 8,
        t
    },
    h.img_btn_search_name_i = function() {
        var t = new eui.Image;
        return this.img_btn_search_name = t,
        t.source = "personalinformation_id_choosepetpop_btnsearch_png",
        t.x = 131,
        t.y = 0,
        t
    },
    h.grp_btn_sort_i = function() {
        var t = new eui.Group;
        return this.grp_btn_sort = t,
        t.visible = !0,
        t.x = 150,
        t.y = 48,
        t.elementsContent = [this._Image5_i(), this.img_btn_sort_i(), this.lab_select_sort_i()],
        t
    },
    h._Image5_i = function() {
        var t = new eui.Image;
        return t.source = "WarehouseNew_petfactor_cbg_png",
        t.touchEnabled = !1,
        t.x = 0,
        t.y = 0,
        t
    },
    h.img_btn_sort_i = function() {
        var t = new eui.Image;
        return this.img_btn_sort = t,
        t.source = "warehouse_img_up_png",
        t.visible = !0,
        t.x = 83,
        t.y = 9,
        t
    },
    h.lab_select_sort_i = function() {
        var t = new eui.Label;
        return this.lab_select_sort = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "ID顺序",
        t.textColor = 11586047,
        t.touchEnabled = !1,
        t.x = 9,
        t.y = 8,
        t
    },
    h.bg_mask_i = function() {
        var t = new eui.Rect;
        return this.bg_mask = t,
        t.bottom = 0,
        t.fillAlpha = .3,
        t.percentHeight = 100,
        t.left = 0,
        t.right = 0,
        t.top = 0,
        t.visible = !1,
        t.percentWidth = 100,
        t
    },
    h.grp_select_sort_i = function() {
        var t = new eui.Group;
        return this.grp_select_sort = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.visible = !1,
        t.x = 150,
        t.y = 90,
        t.elementsContent = [this.sort_bg_i(), this.rb_id_sort_down_i(), this.rb_id_sort_up_i(), this.rb_lvl_sort_down_i(), this.rb_lvl_sort_up_i(), this.rb_tm_sort_down_i(), this.rb_tm_sort_up_i()],
        t
    },
    h.sort_bg_i = function() {
        var t = new eui.Image;
        return this.sort_bg = t,
        t.height = 150,
        t.scale9Grid = new egret.Rectangle(2, 2, 16, 16),
        t.source = "warehouse_sort_bg_png",
        t.width = 590,
        t.x = 0,
        t.y = 0,
        t
    },
    h.rb_id_sort_down_i = function() {
        var t = new eui.RadioButton;
        return this.rb_id_sort_down = t,
        t.groupName = "sortRbg",
        t.label = "",
        t.value = "id_down",
        t.x = 29,
        t.y = 17,
        t.skinName = i,
        t
    },
    h.rb_id_sort_up_i = function() {
        var t = new eui.RadioButton;
        return this.rb_id_sort_up = t,
        t.groupName = "sortRbg",
        t.value = "id_up",
        t.x = 29,
        t.y = 83,
        t.skinName = n,
        t
    },
    h.rb_lvl_sort_down_i = function() {
        var t = new eui.RadioButton;
        return this.rb_lvl_sort_down = t,
        t.groupName = "sortRbg",
        t.value = "lvl_down",
        t.x = 179,
        t.y = 17,
        t.skinName = r,
        t
    },
    h.rb_lvl_sort_up_i = function() {
        var t = new eui.RadioButton;
        return this.rb_lvl_sort_up = t,
        t.groupName = "sortRbg",
        t.value = "lvl_up",
        t.x = 179,
        t.y = 83,
        t.skinName = o,
        t
    },
    h.rb_tm_sort_down_i = function() {
        var t = new eui.RadioButton;
        return this.rb_tm_sort_down = t,
        t.groupName = "sortRbg",
        t.value = "tm_down",
        t.x = 331,
        t.y = 17,
        t.skinName = a,
        t
    },
    h.rb_tm_sort_up_i = function() {
        var t = new eui.RadioButton;
        return this.rb_tm_sort_up = t,
        t.groupName = "sortRbg",
        t.value = "tm_up",
        t.x = 331,
        t.y = 83,
        t.skinName = s,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/Card/render/AchieveTitleItemSkin.exml"] = window.AchieveTitleItemSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["img_select", "imgCurrSelect", "Icon_UP", "txt_name", "groupHide", "Img_used"],
        this.currentState = "up",
        this.elementsContent = [this.img_select_i(), this.imgCurrSelect_i(), this._Group2_i()],
        this.states = [new eui.State("up", [new eui.SetProperty("img_select", "visible", !1), new eui.SetProperty("txt_name", "textColor", 8036826)]), new eui.State("down", [new eui.SetProperty("img_select", "visible", !0), new eui.SetProperty("_Group2", "height", 42)])]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.img_select_i = function() {
        var t = new eui.Image;
        return this.img_select = t,
        t.horizontalCenter = 0,
        t.source = "title_pop_2022_imgselected_png",
        t
    },
    i.imgCurrSelect_i = function() {
        var t = new eui.Image;
        return this.imgCurrSelect = t,
        t.source = "personalinformation_achievepop_selectmark_png",
        t
    },
    i._Group2_i = function() {
        var t = new eui.Group;
        return this._Group2 = t,
        t.verticalCenter = 0,
        t.width = 248,
        t.layout = this._HorizontalLayout2_i(),
        t.elementsContent = [this.Icon_UP_i(), this._Group1_i(), this.Img_used_i()],
        t
    },
    i._HorizontalLayout2_i = function() {
        var t = new eui.HorizontalLayout;
        return t.horizontalAlign = "center",
        t.verticalAlign = "middle",
        t
    },
    i.Icon_UP_i = function() {
        var t = new eui.Image;
        return this.Icon_UP = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "title_pop_2022_upicon_png",
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.x = 23,
        t.y = 2,
        t.elementsContent = [this.txt_name_i(), this.groupHide_i()],
        t
    },
    i.txt_name_i = function() {
        var t = new eui.Label;
        return this.txt_name = t,
        t.fontFamily = "MFShangHei",
        t.scaleX = 1,
        t.scaleY = 1,
        t.size = 18,
        t.textAlign = "center",
        t.visible = !0,
        t
    },
    i.groupHide_i = function() {
        var t = new eui.Group;
        return this.groupHide = t,
        t.horizontalCenter = 0,
        t.visible = !1,
        t.y = 0,
        t.layout = this._HorizontalLayout1_i(),
        t.elementsContent = [this._Image1_i(), this._Label1_i()],
        t
    },
    i._HorizontalLayout1_i = function() {
        var t = new eui.HorizontalLayout;
        return t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "title_pop_2022_imghideicon_png",
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.scaleX = 1,
        t.scaleY = 1,
        t.size = 18,
        t.text = "隐藏称号",
        t.textAlign = "center",
        t.textColor = 12869728,
        t.x = 0,
        t.y = 0,
        t
    },
    i.Img_used_i = function() {
        var t = new eui.Image;
        return this.Img_used = t,
        t.height = 22,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "playerInfo_title_pop_item_Img_used_png",
        t.width = 22,
        t.x = 212,
        t.y = 0,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/Card/render/personalAchieveItemSkin.exml"] = window.personalAchieveItemSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["itembg", "achieveIcon", "img_null", "img_add", "txtAchieveName", "grp_achieve"],
        this.height = 50,
        this.width = 51,
        this.elementsContent = [this.grp_achieve_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.grp_achieve_i = function() {
        var t = new eui.Group;
        return this.grp_achieve = t,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this.itembg_i(), this.achieveIcon_i(), this.img_null_i(), this.img_add_i(), this.txtAchieveName_i()],
        t
    },
    i.itembg_i = function() {
        var t = new eui.Image;
        return this.itembg = t,
        t.source = "personalinformation_id_cardpop_xzsk_png",
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t
    },
    i.achieveIcon_i = function() {
        var t = new eui.Image;
        return this.achieveIcon = t,
        t.height = 35,
        t.visible = !0,
        t.width = 35,
        t.x = 9,
        t.y = 7,
        t
    },
    i.img_null_i = function() {
        var t = new eui.Image;
        return this.img_null = t,
        t.source = "personalinformation_id_cardpop_kong_png",
        t.visible = !1,
        t
    },
    i.img_add_i = function() {
        var t = new eui.Image;
        return this.img_add = t,
        t.source = "personalinformation_id_cardpop_jrzs_png",
        t.visible = !1,
        t
    },
    i.txtAchieveName_i = function() {
        var t = new eui.Label;
        return this.txtAchieveName = t,
        t.fontFamily = "MFShangHei",
        t.size = 12,
        t.textAlign = "center",
        t.textColor = 8757203,
        t.width = 55,
        t.x = -5,
        t.y = 52,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/Card/render/PersonalCardItemSkin.exml"] = window.PersonalCardItemSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["mingpian", "img_card", "locked", "hasEquipt", "img_new", "img_selected", "card"],
        this.height = 132,
        this.width = 221,
        this.elementsContent = [this.card_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.card_i = function() {
        var t = new eui.Group;
        return this.card = t,
        t.visible = !0,
        t.x = 5,
        t.y = 5,
        t.elementsContent = [this.mingpian_i(), this.img_card_i(), this.locked_i(), this.hasEquipt_i(), this.img_new_i(), this.img_selected_i()],
        t
    },
    i.mingpian_i = function() {
        var t = new eui.Image;
        return this.mingpian = t,
        t.height = 122,
        t.source = "personalinformationidcardcardpop_mingpian_png",
        t.visible = !0,
        t.width = 210,
        t.y = 2,
        t
    },
    i.img_card_i = function() {
        var t = new eui.Image;
        return this.img_card = t,
        t.visible = !0,
        t.x = 4.5,
        t.y = 7,
        t
    },
    i.locked_i = function() {
        var t = new eui.Image;
        return this.locked = t,
        t.height = 115,
        t.source = "personalinformationidcardcardpop_locked_png",
        t.visible = !0,
        t.width = 204,
        t.x = 1,
        t.y = 1,
        t
    },
    i.hasEquipt_i = function() {
        var t = new eui.Image;
        return this.hasEquipt = t,
        t.source = "personalinformationidcardcardpop_zbz_png",
        t.visible = !0,
        t.x = 7,
        t.y = 8,
        t
    },
    i.img_new_i = function() {
        var t = new eui.Image;
        return this.img_new = t,
        t.source = "personalinformationidcardcardpop_new_png",
        t.visible = !0,
        t.x = 7,
        t.y = 8,
        t
    },
    i.img_selected_i = function() {
        var t = new eui.Image;
        return this.img_selected = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "personalinformationidcardcardpop_selected_png",
        t.visible = !1,
        t.x = -10,
        t.y = -8,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/Card/render/personalPetChooseItemSkin.exml"] = window.personalPetChooseItemSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["petHead", "petName", "hasShow", "img_selected", "petItem"],
        this.height = 118,
        this.width = 100,
        this.elementsContent = [this.petItem_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.petItem_i = function() {
        var t = new eui.Group;
        return this.petItem = t,
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image1_i(), this.petHead_i(), this.petName_i(), this.hasShow_i(), this.img_selected_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "personalinformation_id_choosepetpop_kuang_png",
        t.x = 13,
        t.y = 14,
        t
    },
    i.petHead_i = function() {
        var t = new eui.Image;
        return this.petHead = t,
        t.height = 70,
        t.width = 70,
        t.x = 14,
        t.y = 15,
        t
    },
    i.petName_i = function() {
        var t = new eui.Label;
        return this.petName = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "精灵名称",
        t.textAlign = "center",
        t.textColor = 8757203,
        t.verticalAlign = "middle",
        t.width = 74,
        t.x = 13,
        t.y = 89,
        t
    },
    i.hasShow_i = function() {
        var t = new eui.Image;
        return this.hasShow = t,
        t.height = 20,
        t.source = "personalInformation_card_get_pop_hasShow_png",
        t.visible = !1,
        t.width = 46,
        t.x = 16,
        t.y = 17,
        t
    },
    i.img_selected_i = function() {
        var t = new eui.Image;
        return this.img_selected = t,
        t.source = "personalinformation_id_choosepetpop_selected__png",
        t.visible = !1,
        t.x = 0,
        t.y = 0,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/Card/render/personalPetShowItemSkin.exml"] = window.personalPetShowItemSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["itembg", "petHead", "btnWatchOther", "img_null", "img_add", "grp_petHead"],
        this.height = 76,
        this.width = 76,
        this.elementsContent = [this.grp_petHead_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.grp_petHead_i = function() {
        var t = new eui.Group;
        return this.grp_petHead = t,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this.itembg_i(), this.petHead_i(), this.btnWatchOther_i(), this.img_null_i(), this.img_add_i()],
        t
    },
    i.itembg_i = function() {
        var t = new eui.Image;
        return this.itembg = t,
        t.source = "personalinformation_id_cardpop_kuang_png",
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t
    },
    i.petHead_i = function() {
        var t = new eui.Image;
        return this.petHead = t,
        t.height = 70,
        t.visible = !0,
        t.width = 70,
        t.x = 1,
        t.y = 1,
        t
    },
    i.btnWatchOther_i = function() {
        var t = new eui.Image;
        return this.btnWatchOther = t,
        t.source = "personalinformation_id_cardpop_jx_519_kb_png",
        t.x = 41,
        t.y = 42,
        t
    },
    i.img_null_i = function() {
        var t = new eui.Image;
        return this.img_null = t,
        t.height = 74,
        t.source = "personalinformation_id_cardpop_kong_png",
        t.visible = !1,
        t.width = 74,
        t.x = 0,
        t.y = 0,
        t
    },
    i.img_add_i = function() {
        var t = new eui.Image;
        return this.img_add = t,
        t.height = 74,
        t.source = "personalinformation_id_cardpop_jrzs_png",
        t.visible = !1,
        t.width = 74,
        t.x = 0,
        t.y = 0,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/Card/render/personalResistanceItemSkin.exml"] = window.personalResistanceItemSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["txtName", "txtValue", "imgIcon"],
        this.width = 331,
        this.elementsContent = [this.txtName_i(), this.txtValue_i(), this.imgIcon_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.txtName_i = function() {
        var t = new eui.Label;
        return this.txtName = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "致命伤害减免",
        t.textColor = 16777215,
        t.verticalCenter = 0,
        t.x = 23,
        t
    },
    i.txtValue_i = function() {
        var t = new eui.Label;
        return this.txtValue = t,
        t.fontFamily = "MFShangHei",
        t.right = 0,
        t.size = 16,
        t.text = "1%",
        t.textColor = 12834813,
        t.y = 2,
        t
    },
    i.imgIcon_i = function() {
        var t = new eui.Image;
        return this.imgIcon = t,
        t.height = 20,
        t.source = "personalinformationidcardpetshow_icon_sh_0_png",
        t.width = 20,
        t.x = 0,
        t.y = 0,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/renderItem/PlayerinfoClothspositionItemSkin.exml"] = window.PlayerinfoClothspositionItemSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["img_add", "icon_equip", "txt_clothName", "txt_pos_name", "img_corner"],
        this.height = 83,
        this.width = 220,
        this.elementsContent = [this._Image1_i(), this._Group1_i(), this.txt_clothName_i(), this.txt_pos_name_i(), this.img_corner_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 65.612,
        t.source = "personalInformationMe_cloth_item_bg_png",
        t.visible = !0,
        t.width = 216,
        t.x = 9.119,
        t.y = 11.269,
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.x = 14,
        t.y = 1,
        t.elementsContent = [this._Image2_i(), this.img_add_i(), this.icon_equip_i()],
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.scaleX = 1,
        t.scaleY = 1,
        t.source = "personalInformationMe_kb_115_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.img_add_i = function() {
        var t = new eui.Image;
        return this.img_add = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "personalInformationMe_addBtn_0_png",
        t.x = 19,
        t.y = 20,
        t
    },
    i.icon_equip_i = function() {
        var t = new eui.Image;
        return this.icon_equip = t,
        t.height = 55,
        t.horizontalCenter = 0,
        t.scaleX = 1,
        t.scaleY = 1,
        t.verticalCenter = 0,
        t.visible = !0,
        t.width = 55,
        t.x = 89,
        t.y = 48,
        t
    },
    i.txt_clothName_i = function() {
        var t = new eui.Label;
        return this.txt_clothName = t,
        t.fontFamily = "MFShangHei",
        t.height = 31,
        t.size = 16,
        t.text = "名称处名称处处名称处",
        t.textColor = 16773461,
        t.verticalAlign = "bottom",
        t.width = 120,
        t.x = 89,
        t.y = 40,
        t
    },
    i.txt_pos_name_i = function() {
        var t = new eui.Label;
        return this.txt_pos_name = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "头部装扮",
        t.textColor = 10343423,
        t.x = 89,
        t.y = 21,
        t
    },
    i.img_corner_i = function() {
        var t = new eui.Image;
        return this.img_corner = t,
        t.source = "personalInformationMe_img_corner_png",
        t.x = .079,
        t.y = 1.589,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/renderItem/PlayerinfoClothspositionItem2Skin.exml"] = window.PlayerinfoClothspositionItem2Skin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["img_add", "icon_equip", "txt_clothName", "txt_pos_name", "img_corner_r"],
        this.height = 83,
        this.width = 221,
        this.elementsContent = [this._Image1_i(), this._Group1_i(), this._Group2_i(), this.img_corner_r_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 67.578,
        t.source = "personalInformationMe_cloth_item_bg_r_png",
        t.width = 216,
        t.x = -5.401,
        t.y = 10.512,
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.x = 134,
        t.y = 1,
        t.elementsContent = [this._Image2_i(), this.img_add_i(), this.icon_equip_i()],
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.scaleX = 1,
        t.scaleY = 1,
        t.source = "personalInformationMe_kb_115_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.img_add_i = function() {
        var t = new eui.Image;
        return this.img_add = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "personalInformationMe_addBtn_0_png",
        t.x = 19,
        t.y = 19,
        t
    },
    i.icon_equip_i = function() {
        var t = new eui.Image;
        return this.icon_equip = t,
        t.height = 55,
        t.horizontalCenter = 0,
        t.scaleX = 1,
        t.scaleY = 1,
        t.verticalCenter = 0,
        t.visible = !0,
        t.width = 55,
        t
    },
    i._Group2_i = function() {
        var t = new eui.Group;
        return t.width = 120,
        t.x = 11.73,
        t.y = 20,
        t.elementsContent = [this.txt_clothName_i(), this.txt_pos_name_i()],
        t
    },
    i.txt_clothName_i = function() {
        var t = new eui.Label;
        return this.txt_clothName = t,
        t.fontFamily = "MFShangHei",
        t.height = 31,
        t.right = 0,
        t.size = 20,
        t.text = "名称处名称",
        t.textAlign = "right",
        t.textColor = 16773461,
        t.verticalAlign = "bottom",
        t.width = 120,
        t.y = 20.526,
        t
    },
    i.txt_pos_name_i = function() {
        var t = new eui.Label;
        return this.txt_pos_name = t,
        t.fontFamily = "MFShangHei",
        t.right = 0,
        t.size = 16,
        t.text = "头部装扮",
        t.textColor = 10343423,
        t.y = 0,
        t
    },
    i.img_corner_r_i = function() {
        var t = new eui.Image;
        return this.img_corner_r = t,
        t.source = "personalInformationMe_img_corner_r_png",
        t.x = 201.599,
        t.y = .652,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/PersonalinformationmeSkin.exml"] = window.PersonalinformationmeSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["ground_back", "suitImg", "grp_playerStyle", "lineIcon_0", "lineMask_0", "equip_0", "head", "lineIcon_2", "lineMask_2", "equip_1", "face", "lineIcon_1", "lineMask_1", "equip_2", "hand", "lineIcon_3", "lineMask_3", "equip_3", "waist", "lineIcon_4", "lineMask_4", "equip_4", "foot", "group_equip", "carPop", "carIcon", "addCar", "carGroup", "img_btn_allDisboard", "img_btn_allDress", "xiafangdi", "line1", "line2", "btnPrivacyPolicy", "btnAccountCenter", "btnCustomer", "grp_PolicyBtns", "_mask", "grpPolicy", "txt_suitName", "suitInfoTitle2", "txt_suitTag", "grp_showEff", "txt_suitDesc", "suitInfoLine", "txt_None", "suit_left", "line_34324324", "bg_3", "curTitleTx", "txt_title", "img_btn_changeTitle", "TitleInfo", "bg_2", "VIPtitle", "noVip", "nonoIcon", "vipNum", "VIPIcon", "vipLv", "vip", "vipBtn", "vipinfo", "bg_1", "teamtitle", "teamNameTx", "teamIcon", "joinTeamBtn", "LookTeamBtn", "CombatTeam", "militaryname", "military_icon", "btnMilitaryBook", "militaryTitle", "militarypoint2", "militarypoint", "txt_military", "detailsBtn", "imgAchieveRedDot", "MilitaryRank", "info2", "img_btn_exchangeCode", "txt_exchangeCode", "icon_004", "icon_003", "icon_002", "icon_001", "nameBg", "txt_nickName", "txt_Id", "txt_Time", "img_btn_changeName", "head_bg", "head_mask", "avatar_icon", "headContainer", "txt_changeHead", "info1", "info_left", "up_bg", "texture_7", "btnClose", "top", "list_suitPage", "btnUse", "btnSave", "Grp_SuitBtn", "SuitInfo", "grp_left", "reddotCard", "ownerInfoBtn", "gotoSuitBtn", "doneWearBtn", "btnfire", "img", "timebg", "txt", "fire", "fireGroup", "taozhuangbg", "txt_curSuit", "grp_curSuit", "dotRe", "btnResource", "grp_right"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.ground_back_i(), this._Image1_i(), this.grp_playerStyle_i(), this.group_equip_i(), this.carGroup_i(), this.img_btn_allDisboard_i(), this.img_btn_allDress_i(), this.grpPolicy_i(), this.grp_left_i(), this.grp_right_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.ground_back_i = function() {
        var t = new eui.Image;
        return this.ground_back = t,
        t.horizontalCenter = -3,
        t.scale9Grid = new egret.Rectangle(142, 80, 869, 480),
        t.source = "personalInformationMe_ground_back_jpg",
        t.visible = !0,
        t.y = 0,
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.horizontalCenter = 142.5,
        t.source = "personalInformationMe_dz1111_png",
        t.verticalCenter = 166.5,
        t
    },
    i.grp_playerStyle_i = function() {
        var t = new eui.Group;
        return this.grp_playerStyle = t,
        t.cacheAsBitmap = !0,
        t.height = 0,
        t.horizontalCenter = 150,
        t.verticalCenter = 168,
        t.visible = !0,
        t.width = 0,
        t.elementsContent = [this.suitImg_i()],
        t
    },
    i.suitImg_i = function() {
        var t = new eui.Image;
        return this.suitImg = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.visible = !1,
        t.x = -161.51,
        t.y = -387.6,
        t
    },
    i.group_equip_i = function() {
        var t = new eui.Group;
        return this.group_equip = t,
        t.height = 416,
        t.horizontalCenter = 155.5,
        t.verticalCenter = 12,
        t.visible = !0,
        t.width = 725,
        t.elementsContent = [this.head_i(), this.face_i(), this.hand_i(), this.waist_i(), this.foot_i()],
        t
    },
    i.head_i = function() {
        var t = new eui.Group;
        return this.head = t,
        t.x = 21,
        t.y = 0,
        t.elementsContent = [this.lineIcon_0_i(), this.lineMask_0_i(), this.equip_0_i()],
        t
    },
    i.lineIcon_0_i = function() {
        var t = new eui.Image;
        return this.lineIcon_0 = t,
        t.source = "personalInformationMe_lineIcon_png",
        t.x = 82,
        t.y = 76,
        t
    },
    i.lineMask_0_i = function() {
        var t = new eui.Rect;
        return this.lineMask_0 = t,
        t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.height = 44,
        t.scaleX = -1,
        t.visible = !0,
        t.width = 173,
        t.x = 251,
        t.y = 64,
        t
    },
    i.equip_0_i = function() {
        var t = new personalInformation.PlayerInfoEquipItem;
        return this.equip_0 = t,
        t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.scaleX = 1,
        t.scaleY = 1,
        t.skinName = "PlayerinfoClothspositionItemSkin",
        t.x = 0,
        t.y = 0,
        t
    },
    i.face_i = function() {
        var t = new eui.Group;
        return this.face = t,
        t.x = 21,
        t.y = 135,
        t.elementsContent = [this.lineIcon_2_i(), this.lineMask_2_i(), this.equip_1_i()],
        t
    },
    i.lineIcon_2_i = function() {
        var t = new eui.Image;
        return this.lineIcon_2 = t,
        t.source = "personalInformationMe_lineIcon_png",
        t.x = 82,
        t.y = 78.12,
        t
    },
    i.lineMask_2_i = function() {
        var t = new eui.Rect;
        return this.lineMask_2 = t,
        t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.height = 44,
        t.scaleX = -1,
        t.visible = !0,
        t.width = 173,
        t.x = 251,
        t.y = 68.12,
        t
    },
    i.equip_1_i = function() {
        var t = new personalInformation.PlayerInfoEquipItem;
        return this.equip_1 = t,
        t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.scaleX = 1,
        t.scaleY = 1,
        t.skinName = "PlayerinfoClothspositionItemSkin",
        t.x = 0,
        t.y = 0,
        t
    },
    i.hand_i = function() {
        var t = new eui.Group;
        return this.hand = t,
        t.x = 456,
        t.y = 20,
        t.elementsContent = [this.lineIcon_1_i(), this.lineMask_1_i(), this.equip_2_i()],
        t
    },
    i.lineIcon_1_i = function() {
        var t = new eui.Image;
        return this.lineIcon_1 = t,
        t.scaleX = -1,
        t.source = "personalInformationMe_lineIcon_png",
        t.x = 170,
        t.y = 78.08,
        t
    },
    i.lineMask_1_i = function() {
        var t = new eui.Rect;
        return this.lineMask_1 = t,
        t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.height = 44,
        t.visible = !0,
        t.width = 173,
        t.x = 0,
        t.y = 66.08,
        t
    },
    i.equip_2_i = function() {
        var t = new personalInformation.PlayerInfoEquipItem;
        return this.equip_2 = t,
        t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.scaleX = 1,
        t.scaleY = 1,
        t.skinName = "PlayerinfoClothspositionItem2Skin",
        t.visible = !0,
        t.x = 25,
        t.y = 0,
        t
    },
    i.waist_i = function() {
        var t = new eui.Group;
        return this.waist = t,
        t.x = 456,
        t.y = 145,
        t.elementsContent = [this.lineIcon_3_i(), this.lineMask_3_i(), this.equip_3_i()],
        t
    },
    i.lineIcon_3_i = function() {
        var t = new eui.Image;
        return this.lineIcon_3 = t,
        t.scaleX = -1,
        t.source = "personalInformationMe_lineIcon_png",
        t.x = 170,
        t.y = 78.12,
        t
    },
    i.lineMask_3_i = function() {
        var t = new eui.Rect;
        return this.lineMask_3 = t,
        t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.height = 44,
        t.visible = !0,
        t.width = 173,
        t.x = 0,
        t.y = 65.12,
        t
    },
    i.equip_3_i = function() {
        var t = new personalInformation.PlayerInfoEquipItem;
        return this.equip_3 = t,
        t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.scaleX = 1,
        t.scaleY = 1,
        t.skinName = "PlayerinfoClothspositionItem2Skin",
        t.x = 25,
        t.y = 0,
        t
    },
    i.foot_i = function() {
        var t = new eui.Group;
        return this.foot = t,
        t.x = 456,
        t.y = 269,
        t.elementsContent = [this.lineIcon_4_i(), this.lineMask_4_i(), this.equip_4_i()],
        t
    },
    i.lineIcon_4_i = function() {
        var t = new eui.Image;
        return this.lineIcon_4 = t,
        t.scaleX = -1,
        t.source = "personalInformationMe_lineIcon_png",
        t.x = 170,
        t.y = 78.12,
        t
    },
    i.lineMask_4_i = function() {
        var t = new eui.Rect;
        return this.lineMask_4 = t,
        t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.height = 44,
        t.visible = !0,
        t.width = 173,
        t.x = 0,
        t.y = 65.12,
        t
    },
    i.equip_4_i = function() {
        var t = new personalInformation.PlayerInfoEquipItem;
        return this.equip_4 = t,
        t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.scaleX = 1,
        t.scaleY = 1,
        t.skinName = "PlayerinfoClothspositionItem2Skin",
        t.x = 25,
        t.y = 0,
        t
    },
    i.carGroup_i = function() {
        var t = new eui.Group;
        return this.carGroup = t,
        t.cacheAsBitmap = !0,
        t.height = 176,
        t.horizontalCenter = -111,
        t.touchThrough = !0,
        t.verticalCenter = 171,
        t.width = 188,
        t.elementsContent = [this.carPop_i(), this.carIcon_i(), this.addCar_i()],
        t
    },
    i.carPop_i = function() {
        var t = new eui.Image;
        return this.carPop = t,
        t.source = "select_car_pop_carbg_png",
        t.touchEnabled = !0,
        t.x = 0,
        t.y = 0,
        t
    },
    i.carIcon_i = function() {
        var t = new eui.Image;
        return this.carIcon = t,
        t.bottom = 49,
        t.horizontalCenter = 0,
        t.scaleX = .5,
        t.scaleY = .5,
        t.touchEnabled = !1,
        t.visible = !0,
        t
    },
    i.addCar_i = function() {
        var t = new eui.Image;
        return this.addCar = t,
        t.source = "select_car_pop_addcar_png",
        t.touchEnabled = !1,
        t.visible = !0,
        t.x = 67,
        t.y = 47,
        t
    },
    i.img_btn_allDisboard_i = function() {
        var t = new eui.Image;
        return this.img_btn_allDisboard = t,
        t.horizontalCenter = 70,
        t.source = "personalInformationMe_unloadBtn_png",
        t.verticalCenter = 261,
        t.visible = !0,
        t
    },
    i.img_btn_allDress_i = function() {
        var t = new eui.Image;
        return this.img_btn_allDress = t,
        t.horizontalCenter = 236,
        t.source = "personalInformationMe_wearBtn_png",
        t.verticalCenter = 261,
        t.visible = !0,
        t
    },
    i.grpPolicy_i = function() {
        var t = new eui.Group;
        return this.grpPolicy = t,
        t.cacheAsBitmap = !0,
        t.visible = !0,
        t.percentWidth = 100,
        t.x = 0,
        t.y = 575,
        t.elementsContent = [this.xiafangdi_i(), this.line1_i(), this.line2_i(), this.grp_PolicyBtns_i(), this._mask_i()],
        t
    },
    i.xiafangdi_i = function() {
        var t = new eui.Image;
        return this.xiafangdi = t,
        t.source = "personalinformationme_xiafangdi_png",
        t.percentWidth = 100,
        t.x = 0,
        t.y = 0,
        t
    },
    i.line1_i = function() {
        var t = new eui.Image;
        return this.line1 = t,
        t.height = 40,
        t.source = "personalinformationme_line3_png",
        t.x = 641,
        t.y = 13,
        t
    },
    i.line2_i = function() {
        var t = new eui.Image;
        return this.line2 = t,
        t.height = 40,
        t.source = "personalinformationme_line3_png",
        t.x = 871,
        t.y = 13,
        t
    },
    i.grp_PolicyBtns_i = function() {
        var t = new eui.Group;
        return this.grp_PolicyBtns = t,
        t.horizontalCenter = 180,
        t.y = 11,
        t.layout = this._HorizontalLayout1_i(),
        t.elementsContent = [this.btnPrivacyPolicy_i(), this.btnAccountCenter_i(), this.btnCustomer_i()],
        t
    },
    i._HorizontalLayout1_i = function() {
        var t = new eui.HorizontalLayout;
        return t.gap = 30,
        t.horizontalAlign = "center",
        t
    },
    i.btnPrivacyPolicy_i = function() {
        var t = new eui.Group;
        return this.btnPrivacyPolicy = t,
        t.width = 200,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image2_i()],
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "personalinformation_policy_pop_imayinsi_png",
        t.x = 50,
        t.y = 0,
        t
    },
    i.btnAccountCenter_i = function() {
        var t = new eui.Group;
        return this.btnAccountCenter = t,
        t.width = 200,
        t.x = 233,
        t.y = 0,
        t.elementsContent = [this._Image3_i()],
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "personalinformationme_btnzhanghu_png",
        t.x = 50,
        t.y = 0,
        t
    },
    i.btnCustomer_i = function() {
        var t = new eui.Group;
        return this.btnCustomer = t,
        t.width = 200,
        t.x = 463,
        t.y = 0,
        t.elementsContent = [this._Image4_i()],
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.source = "personalinformationme_btnkefu_png",
        t.x = 50,
        t.y = 0,
        t
    },
    i._mask_i = function() {
        var t = new eui.Rect;
        return this._mask = t,
        t.fillColor = 12397612,
        t.height = 60,
        t.visible = !1,
        t.percentWidth = 100,
        t.x = 367,
        t.y = 6,
        t
    },
    i.grp_left_i = function() {
        var t = new eui.Group;
        return this.grp_left = t,
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this.suit_left_i(), this.info_left_i(), this.top_i(), this.SuitInfo_i()],
        t
    },
    i.suit_left_i = function() {
        var t = new eui.Group;
        return this.suit_left = t,
        t.height = 542,
        t.visible = !1,
        t.width = 321,
        t.x = 27,
        t.y = 98,
        t.elementsContent = [this._Image5_i(), this.grp_showEff_i(), this._Scroller1_i(), this.suitInfoLine_i(), this.txt_None_i()],
        t
    },
    i._Image5_i = function() {
        var t = new eui.Image;
        return t.scaleX = 1,
        t.scaleY = 1,
        t.source = "personalInformationMe_pet_detailedInfo_bg_png",
        t.visible = !0,
        t.x = -467,
        t.y = -78,
        t
    },
    i.grp_showEff_i = function() {
        var t = new eui.Group;
        return this.grp_showEff = t,
        t.cacheAsBitmap = !0,
        t.x = 1,
        t.y = 0,
        t.elementsContent = [this.txt_suitName_i(), this.suitInfoTitle2_i(), this.txt_suitTag_i()],
        t
    },
    i.txt_suitName_i = function() {
        var t = new eui.Label;
        return this.txt_suitName = t,
        t.fontFamily = "MFShangHei",
        t.scaleX = 1,
        t.scaleY = 1,
        t.size = 22,
        t.text = "毒液战甲",
        t.textColor = 16777215,
        t.y = 0,
        t
    },
    i.suitInfoTitle2_i = function() {
        var t = new eui.Label;
        return this.suitInfoTitle2 = t,
        t.fontFamily = "MFShangHei",
        t.scaleX = 1,
        t.scaleY = 1,
        t.size = 20,
        t.text = "套装效果：",
        t.textColor = 4431338,
        t.x = 0,
        t.y = 51,
        t
    },
    i.txt_suitTag_i = function() {
        var t = new eui.Label;
        return this.txt_suitTag = t,
        t.fontFamily = "MFShangHei",
        t.scaleX = 1,
        t.scaleY = 1,
        t.size = 16,
        t.text = "套装效果已激活！",
        t.textColor = 3143013,
        t.x = 184,
        t.y = 3,
        t
    },
    i._Scroller1_i = function() {
        var t = new eui.Scroller;
        return t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.height = 359,
        t.visible = !0,
        t.width = 306,
        t.x = 0,
        t.y = 88,
        t.viewport = this._Group1_i(),
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.elementsContent = [this.txt_suitDesc_i()],
        t
    },
    i.txt_suitDesc_i = function() {
        var t = new eui.Label;
        return this.txt_suitDesc = t,
        t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.fontFamily = "MFShangHei",
        t.lineSpacing = 20,
        t.scaleX = 1,
        t.scaleY = 1,
        t.size = 18,
        t.text = "令对手精灵防御值-15%、特防值-15%、速度-10%；令对手在战斗中恢复体力时恢复效果减少30%(体力药剂除外)；自身使用攻击技能30%的几率附加对手最大体力15%的固定伤害，若未触发或对手免疫则当回合造成的攻击伤害提升30%（仅限赛尔与赛尔间对战）",
        t.textColor = 11060983,
        t.width = 306,
        t.x = 0,
        t.y = 0,
        t
    },
    i.suitInfoLine_i = function() {
        var t = new eui.Image;
        return this.suitInfoLine = t,
        t.source = "personalInformationMe_suitInfoLine_png",
        t.x = 0,
        t.y = 30,
        t
    },
    i.txt_None_i = function() {
        var t = new eui.Label;
        return this.txt_None = t,
        t.fontFamily = "MFShangHei",
        t.scaleX = 1,
        t.scaleY = 1,
        t.size = 30,
        t.text = "无套装效果",
        t.textColor = 11060983,
        t.x = 74,
        t.y = 232,
        t
    },
    i.info_left_i = function() {
        var t = new eui.Group;
        return this.info_left = t,
        t.cacheAsBitmap = !0,
        t.height = 566,
        t.visible = !0,
        t.width = 348,
        t.x = 19,
        t.y = 74,
        t.elementsContent = [this._Image6_i(), this.line_34324324_i(), this.info2_i(), this.info1_i()],
        t
    },
    i._Image6_i = function() {
        var t = new eui.Image;
        return t.scaleX = 1,
        t.scaleY = 1,
        t.source = "personalInformationMe_pet_detailedInfo_bg_png",
        t.visible = !0,
        t.x = -440,
        t.y = -54,
        t
    },
    i.line_34324324_i = function() {
        var t = new eui.Image;
        return this.line_34324324 = t,
        t.source = "personalInformationMe_line_34324324_png",
        t.x = 4,
        t.y = 138,
        t
    },
    i.info2_i = function() {
        var t = new eui.Group;
        return this.info2 = t,
        t.visible = !0,
        t.x = 0,
        t.y = 155,
        t.elementsContent = [this.TitleInfo_i(), this.vipinfo_i(), this.CombatTeam_i(), this.MilitaryRank_i()],
        t
    },
    i.TitleInfo_i = function() {
        var t = new eui.Group;
        return this.TitleInfo = t,
        t.x = 0,
        t.elementsContent = [this.bg_3_i(), this.curTitleTx_i(), this.txt_title_i(), this.img_btn_changeTitle_i()],
        t
    },
    i.bg_3_i = function() {
        var t = new eui.Image;
        return this.bg_3 = t,
        t.source = "personalInformationMe_bg_0_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.curTitleTx_i = function() {
        var t = new eui.Label;
        return this.curTitleTx = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "当前称号",
        t.textColor = 4697087,
        t.x = 16,
        t.y = 12,
        t
    },
    i.txt_title_i = function() {
        var t = new eui.Label;
        return this.txt_title = t,
        t.fontFamily = "MFShangHei",
        t.size = 20,
        t.text = "光明救赎者",
        t.textAlign = "center",
        t.textColor = 16777215,
        t.width = 219,
        t.x = 46,
        t.y = 42,
        t
    },
    i.img_btn_changeTitle_i = function() {
        var t = new eui.Image;
        return this.img_btn_changeTitle = t,
        t.source = "personalInformationMe_genghuan_png",
        t.x = 251,
        t.y = 10,
        t
    },
    i.vipinfo_i = function() {
        var t = new eui.Group;
        return this.vipinfo = t,
        t.x = 0,
        t.y = 91,
        t.elementsContent = [this.bg_2_i(), this.VIPtitle_i(), this.noVip_i(), this.vip_i(), this.vipBtn_i()],
        t
    },
    i.bg_2_i = function() {
        var t = new eui.Image;
        return this.bg_2 = t,
        t.source = "personalInformationMe_bg_0_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.VIPtitle_i = function() {
        var t = new eui.Label;
        return this.VIPtitle = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "VIP",
        t.textColor = 4697087,
        t.x = 16,
        t.y = 13,
        t
    },
    i.noVip_i = function() {
        var t = new eui.Image;
        return this.noVip = t,
        t.height = 18,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "personalInformationMe_NotVip_png",
        t.visible = !0,
        t.width = 54,
        t.x = 126,
        t.y = 44,
        t
    },
    i.vip_i = function() {
        var t = new eui.Group;
        return this.vip = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.x = 107,
        t.y = 37,
        t.elementsContent = [this.nonoIcon_i(), this.vipNum_i(), this.VIPIcon_i(), this.vipLv_i()],
        t
    },
    i.nonoIcon_i = function() {
        var t = new eui.Image;
        return this.nonoIcon = t,
        t.source = "personalInformationMe_nonoIcon_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.vipNum_i = function() {
        var t = new eui.Image;
        return this.vipNum = t,
        t.source = "personalInformationMe_vipNum_png",
        t.visible = !1,
        t.x = 70,
        t.y = 7.04,
        t
    },
    i.VIPIcon_i = function() {
        var t = new eui.Image;
        return this.VIPIcon = t,
        t.source = "personalInformationMe_VIPIcon_png",
        t.x = 32,
        t.y = 8,
        t
    },
    i.vipLv_i = function() {
        var t = new eui.BitmapLabel;
        return this.vipLv = t,
        t.font = "vipfont_fnt",
        t.height = 20,
        t.scaleX = 1,
        t.scaleY = 1,
        t.text = "1",
        t.width = 20,
        t.x = 68,
        t.y = 8,
        t
    },
    i.vipBtn_i = function() {
        var t = new eui.Image;
        return this.vipBtn = t,
        t.source = "personalInformationMe_qianwang_png",
        t.x = 251,
        t.y = 10,
        t
    },
    i.CombatTeam_i = function() {
        var t = new eui.Group;
        return this.CombatTeam = t,
        t.x = 0,
        t.y = 182,
        t.elementsContent = [this.bg_1_i(), this.teamtitle_i(), this._Group2_i(), this.joinTeamBtn_i(), this.LookTeamBtn_i()],
        t
    },
    i.bg_1_i = function() {
        var t = new eui.Image;
        return this.bg_1 = t,
        t.source = "personalInformationMe_bg_0_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.teamtitle_i = function() {
        var t = new eui.Label;
        return this.teamtitle = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "战队",
        t.textColor = 4697087,
        t.x = 16,
        t.y = 12,
        t
    },
    i._Group2_i = function() {
        var t = new eui.Group;
        return t.horizontalCenter = 0,
        t.y = 38,
        t.elementsContent = [this.teamNameTx_i(), this.teamIcon_i()],
        t
    },
    i.teamNameTx_i = function() {
        var t = new eui.Label;
        return this.teamNameTx = t,
        t.fontFamily = "MFShangHei",
        t.height = 16,
        t.size = 20,
        t.text = "ASDFGGGGGGGGGGG",
        t.textAlign = "center",
        t.textColor = 16777215,
        t.x = 35,
        t.y = 7,
        t
    },
    i.teamIcon_i = function() {
        var t = new eui.Image;
        return this.teamIcon = t,
        t.source = "personalInformationMe_teamIcon_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.joinTeamBtn_i = function() {
        var t = new eui.Image;
        return this.joinTeamBtn = t,
        t.source = "personalInformationMe_qianwang_png",
        t.x = 251,
        t.y = 10,
        t
    },
    i.LookTeamBtn_i = function() {
        var t = new eui.Image;
        return this.LookTeamBtn = t,
        t.source = "personalInformationMe_qianwang_png",
        t.visible = !0,
        t.x = 251,
        t.y = 10,
        t
    },
    i.MilitaryRank_i = function() {
        var t = new eui.Group;
        return this.MilitaryRank = t,
        t.x = 0,
        t.y = 274,
        t.elementsContent = [this._Image7_i(), this.btnMilitaryBook_i(), this.militaryTitle_i(), this._Group3_i(), this._Group4_i(), this.detailsBtn_i(), this.imgAchieveRedDot_i()],
        t
    },
    i._Image7_i = function() {
        var t = new eui.Image;
        return t.source = "personalInformationMe_bg_1_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.btnMilitaryBook_i = function() {
        var t = new eui.Group;
        return this.btnMilitaryBook = t,
        t.x = 17,
        t.y = 42,
        t.elementsContent = [this._Image8_i(), this.militaryname_i(), this.military_icon_i()],
        t
    },
    i._Image8_i = function() {
        var t = new eui.Image;
        return t.height = 45,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "personalInformationMe_btnJunxie_png",
        t.visible = !0,
        t.width = 45,
        t.x = 0,
        t.y = 0,
        t
    },
    i.militaryname_i = function() {
        var t = new eui.Label;
        return this.militaryname = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "下士",
        t.textColor = 16777215,
        t.visible = !1,
        t.x = 4,
        t.y = 15,
        t
    },
    i.military_icon_i = function() {
        var t = new eui.Image;
        return this.military_icon = t,
        t.height = 31,
        t.width = 31,
        t.x = 7,
        t.y = 8,
        t
    },
    i.militaryTitle_i = function() {
        var t = new eui.Label;
        return this.militaryTitle = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "军衔",
        t.textColor = 4697087,
        t.x = 16,
        t.y = 12,
        t
    },
    i._Group3_i = function() {
        var t = new eui.Group;
        return t.horizontalCenter = 17.5,
        t.y = 70,
        t.elementsContent = [this.militarypoint2_i(), this.militarypoint_i()],
        t
    },
    i.militarypoint2_i = function() {
        var t = new eui.Label;
        return this.militarypoint2 = t,
        t.fontFamily = "MFShangHei",
        t.size = 20,
        t.text = "成就点数:",
        t.textColor = 15330284,
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t
    },
    i.militarypoint_i = function() {
        var t = new eui.Label;
        return this.militarypoint = t,
        t.fontFamily = "MFShangHei",
        t.size = 20,
        t.text = "8888",
        t.textColor = 15330284,
        t.visible = !0,
        t.x = 90,
        t.y = 0,
        t
    },
    i._Group4_i = function() {
        var t = new eui.Group;
        return t.horizontalCenter = 17.5,
        t.x = 116,
        t.y = 40,
        t.elementsContent = [this._Label1_i(), this.txt_military_i()],
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 20,
        t.text = "当前军衔:",
        t.textColor = 15330284,
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t
    },
    i.txt_military_i = function() {
        var t = new eui.Label;
        return this.txt_military = t,
        t.fontFamily = "MFShangHei",
        t.size = 20,
        t.text = "8888",
        t.textColor = 15330284,
        t.visible = !0,
        t.x = 90,
        t.y = 0,
        t
    },
    i.detailsBtn_i = function() {
        var t = new eui.Image;
        return this.detailsBtn = t,
        t.source = "personalInformationMe_xiangqing_png",
        t.x = 251,
        t.y = 10,
        t
    },
    i.imgAchieveRedDot_i = function() {
        var t = new eui.Image;
        return this.imgAchieveRedDot = t,
        t.height = 20,
        t.source = "dot_png",
        t.touchEnabled = !1,
        t.visible = !0,
        t.width = 20,
        t.x = 293,
        t
    },
    i.info1_i = function() {
        var t = new eui.Group;
        return this.info1 = t,
        t.visible = !0,
        t.x = 5,
        t.y = 11,
        t.elementsContent = [this._Image9_i(), this.img_btn_exchangeCode_i(), this.txt_exchangeCode_i(), this.icon_004_i(), this.icon_003_i(), this.icon_002_i(), this.icon_001_i(), this.nameBg_i(), this.txt_nickName_i(), this.txt_Id_i(), this._Label2_i(), this.txt_Time_i(), this._Label3_i(), this.img_btn_changeName_i(), this.headContainer_i(), this.txt_changeHead_i()],
        t
    },
    i._Image9_i = function() {
        var t = new eui.Image;
        return t.source = "common_avatar_bg_size_110_110_png",
        t.visible = !1,
        t.x = 0,
        t.y = 0,
        t
    },
    i.img_btn_exchangeCode_i = function() {
        var t = new eui.Image;
        return this.img_btn_exchangeCode = t,
        t.height = 26,
        t.source = "personalInformationMe_exchangeCode_img_btn_exchangeCode_png",
        t.visible = !1,
        t.width = 26,
        t.x = 262,
        t.y = 109.34,
        t
    },
    i.txt_exchangeCode_i = function() {
        var t = new eui.Label;
        return this.txt_exchangeCode = t,
        t.fontFamily = "黑体",
        t.size = 18,
        t.text = "兑换码",
        t.textColor = 16777215,
        t.visible = !1,
        t.x = 153,
        t.y = 115,
        t
    },
    i.icon_004_i = function() {
        var t = new eui.Image;
        return this.icon_004 = t,
        t.height = 23,
        t.source = "personalInformationMe_icon_004_png",
        t.visible = !1,
        t.width = 21,
        t.x = 123,
        t.y = 111,
        t
    },
    i.icon_003_i = function() {
        var t = new eui.Image;
        return this.icon_003 = t,
        t.source = "personalInformationMe_icon_003_png",
        t.x = 119,
        t.y = 82,
        t
    },
    i.icon_002_i = function() {
        var t = new eui.Image;
        return this.icon_002 = t,
        t.source = "personalInformationMe_icon_002_png",
        t.x = 119,
        t.y = 53,
        t
    },
    i.icon_001_i = function() {
        var t = new eui.Image;
        return this.icon_001 = t,
        t.source = "personalInformationMe_icon_001_png",
        t.x = 118,
        t.y = 2,
        t
    },
    i.nameBg_i = function() {
        var t = new eui.Image;
        return this.nameBg = t,
        t.height = 45,
        t.width = 144,
        t.x = 142,
        t.y = -9,
        t
    },
    i.txt_nickName_i = function() {
        var t = new eui.Label;
        return this.txt_nickName = t,
        t.fontFamily = "MFShangHei",
        t.size = 17,
        t.text = "昵称五个字",
        t.textAlign = "center",
        t.textColor = 16777215,
        t.width = 100,
        t.x = 165,
        t.y = 6,
        t
    },
    i.txt_Id_i = function() {
        var t = new eui.Label;
        return this.txt_Id = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "1234567890123",
        t.textColor = 16777215,
        t.x = 171,
        t.y = 55,
        t
    },
    i._Label2_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "ID:",
        t.textColor = 11125235,
        t.x = 148,
        t.y = 56,
        t
    },
    i.txt_Time_i = function() {
        var t = new eui.Label;
        return this.txt_Time = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "2019/12/12",
        t.textColor = 16777215,
        t.x = 220,
        t.y = 87,
        t
    },
    i._Label3_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "登船时间：",
        t.textColor = 11125235,
        t.x = 147,
        t.y = 88,
        t
    },
    i.img_btn_changeName_i = function() {
        var t = new eui.Image;
        return this.img_btn_changeName = t,
        t.source = "personalInformationMe_modifyBtn_png",
        t.x = 289.828,
        t.y = 4,
        t
    },
    i.headContainer_i = function() {
        var t = new eui.Group;
        return this.headContainer = t,
        t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.height = 102,
        t.width = 102,
        t.x = 4.31,
        t.y = 3.71,
        t.elementsContent = [this.head_bg_i(), this.head_mask_i(), this.avatar_icon_i()],
        t
    },
    i.head_bg_i = function() {
        var t = new eui.Image;
        return this.head_bg = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "personalInformationMe_headBg_png",
        t.visible = !1,
        t.x = 0,
        t.y = 0,
        t
    },
    i.head_mask_i = function() {
        var t = new eui.Image;
        return this.head_mask = t,
        t.height = 105,
        t.source = "personalInformationMe_headBg_png",
        t.visible = !1,
        t.width = 105,
        t.x = 0,
        t.y = 0,
        t
    },
    i.avatar_icon_i = function() {
        var t = new core.component.AvatarIcon;
        return this.avatar_icon = t,
        t.horizontalCenter = 0,
        t.verticalCenter = 0,
        t
    },
    i.txt_changeHead_i = function() {
        var t = new eui.Label;
        return this.txt_changeHead = t,
        t.size = 16,
        t.stroke = 1,
        t.strokeColor = 0,
        t.text = "更换头像",
        t.textColor = 9681107,
        t.visible = !1,
        t.x = 21.31,
        t.y = 120.71,
        t
    },
    i.top_i = function() {
        var t = new eui.Group;
        return this.top = t,
        t.cacheAsBitmap = !0,
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this.up_bg_i(), this.btnClose_i()],
        t
    },
    i.up_bg_i = function() {
        var t = new eui.Image;
        return this.up_bg = t,
        t.source = "personalInformationMe_up_bg_png",
        t.visible = !0,
        t.x = -75,
        t.y = 0,
        t
    },
    i.btnClose_i = function() {
        var t = new eui.Group;
        return this.btnClose = t,
        t.height = 48,
        t.visible = !0,
        t.width = 205,
        t.elementsContent = [this._Image10_i(), this.texture_7_i()],
        t
    },
    i._Image10_i = function() {
        var t = new eui.Image;
        return t.horizontalCenter = -68,
        t.scale9Grid = new egret.Rectangle(22, 17, 1, 2),
        t.source = "personalInformationMe_img_btn_close_png",
        t.verticalCenter = 0,
        t.visible = !0,
        t
    },
    i.texture_7_i = function() {
        var t = new eui.Image;
        return this.texture_7 = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "personalInformationMe_texture_7_png",
        t.visible = !0,
        t.x = 64.039,
        t.y = 8.299,
        t
    },
    i.SuitInfo_i = function() {
        var t = new eui.Group;
        return this.SuitInfo = t,
        t.left = 0,
        t.scaleX = 1,
        t.scaleY = 1,
        t.visible = !0,
        t.width = 347,
        t.y = 601,
        t.elementsContent = [this.list_suitPage_i(), this.Grp_SuitBtn_i()],
        t
    },
    i.list_suitPage_i = function() {
        var t = new eui.List;
        return this.list_suitPage = t,
        t.itemRendererSkinName = personalInformation.suitPageItemSkin,
        t.x = 0,
        t.y = 0,
        t.layout = this._HorizontalLayout2_i(),
        t
    },
    i._HorizontalLayout2_i = function() {
        var t = new eui.HorizontalLayout;
        return t.gap = 1,
        t
    },
    i.Grp_SuitBtn_i = function() {
        var t = new eui.Group;
        return this.Grp_SuitBtn = t,
        t.cacheAsBitmap = !0,
        t.x = 162.193,
        t.y = -50,
        t.elementsContent = [this.btnUse_i(), this.btnSave_i()],
        t
    },
    i.btnUse_i = function() {
        var t = new eui.Group;
        return this.btnUse = t,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image11_i(), this._Label4_i()],
        t
    },
    i._Image11_i = function() {
        var t = new eui.Image;
        return t.source = "personalInformationMe_btnUse_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i._Label4_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 20,
        t.text = "启用",
        t.textColor = 8341784,
        t.visible = !1,
        t.x = 25,
        t.y = 11,
        t
    },
    i.btnSave_i = function() {
        var t = new eui.Group;
        return this.btnSave = t,
        t.x = 95,
        t.y = 0,
        t.elementsContent = [this._Image12_i(), this._Label5_i()],
        t
    },
    i._Image12_i = function() {
        var t = new eui.Image;
        return t.source = "personalInformationMe_btnSave_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i._Label5_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 20,
        t.text = "记录",
        t.textColor = 16777215,
        t.visible = !1,
        t.x = 27,
        t.y = 11,
        t
    },
    i.grp_right_i = function() {
        var t = new eui.Group;
        return this.grp_right = t,
        t.cacheAsBitmap = !0,
        t.right = 25,
        t.touchThrough = !0,
        t.visible = !0,
        t.y = 50,
        t.elementsContent = [this.ownerInfoBtn_i(), this.gotoSuitBtn_i(), this.doneWearBtn_i(), this.fireGroup_i(), this.grp_curSuit_i(), this.btnResource_i()],
        t
    },
    i.ownerInfoBtn_i = function() {
        var t = new eui.Group;
        return this.ownerInfoBtn = t,
        t.x = 139,
        t.y = 159,
        t.elementsContent = [this._Image13_i(), this.reddotCard_i()],
        t
    },
    i._Image13_i = function() {
        var t = new eui.Image;
        return t.source = "personalInformationMe_ownerInfoBtn_png",
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t
    },
    i.reddotCard_i = function() {
        var t = new eui.Image;
        return this.reddotCard = t,
        t.height = 20,
        t.source = "dot_png",
        t.touchEnabled = !1,
        t.visible = !0,
        t.width = 20,
        t.x = 55,
        t.y = 0,
        t
    },
    i.gotoSuitBtn_i = function() {
        var t = new eui.Image;
        return this.gotoSuitBtn = t,
        t.source = "personalInformationMe_gotoSuitBtn_png",
        t.visible = !0,
        t.x = 140,
        t.y = 430,
        t
    },
    i.doneWearBtn_i = function() {
        var t = new eui.Image;
        return this.doneWearBtn = t,
        t.source = "personalInformationMe_doneWearBtn_png",
        t.visible = !0,
        t.x = 141,
        t.y = 430,
        t
    },
    i.fireGroup_i = function() {
        var t = new eui.Group;
        return this.fireGroup = t,
        t.height = 73,
        t.visible = !0,
        t.width = 73,
        t.x = 141,
        t.y = 250,
        t.elementsContent = [this.fire_i()],
        t
    },
    i.fire_i = function() {
        var t = new eui.Group;
        return this.fire = t,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this.btnfire_i(), this.img_i(), this.timebg_i(), this.txt_i()],
        t
    },
    i.btnfire_i = function() {
        var t = new eui.Image;
        return this.btnfire = t,
        t.source = "personalInformation_btnfire0_png",
        t.x = 8,
        t.y = 0,
        t
    },
    i.img_i = function() {
        var t = new eui.Image;
        return this.img = t,
        t.source = "personalInformation_img0_png",
        t.visible = !0,
        t.x = 0,
        t.y = 52,
        t
    },
    i.timebg_i = function() {
        var t = new eui.Image;
        return this.timebg = t,
        t.source = "personalInformation_timebg_png",
        t.visible = !0,
        t.x = 1,
        t.y = 54,
        t
    },
    i.txt_i = function() {
        var t = new eui.Label;
        return this.txt = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "00:00",
        t.textAlign = "center",
        t.textColor = 16777215,
        t.visible = !0,
        t.width = 66,
        t.x = 5,
        t.y = 53,
        t
    },
    i.grp_curSuit_i = function() {
        var t = new eui.Group;
        return this.grp_curSuit = t,
        t.width = 187,
        t.x = 23,
        t.y = 17,
        t.elementsContent = [this.taozhuangbg_i(), this._Label6_i(), this.txt_curSuit_i()],
        t
    },
    i.taozhuangbg_i = function() {
        var t = new eui.Image;
        return this.taozhuangbg = t,
        t.height = 122,
        t.right = 0,
        t.scale9Grid = new egret.Rectangle(54, 41, 9, 27),
        t.source = "personalInformation_taozhuangbg_png",
        t.width = 187,
        t.y = 0,
        t
    },
    i._Label6_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 20,
        t.text = "当前套装",
        t.textColor = 4697087,
        t.x = 88,
        t.y = 24,
        t
    },
    i.txt_curSuit_i = function() {
        var t = new eui.Label;
        return this.txt_curSuit = t,
        t.fontFamily = "MFShangHei",
        t.right = 21,
        t.size = 22,
        t.text = "装腐蚀者套装",
        t.textColor = 16777215,
        t.y = 52,
        t
    },
    i.btnResource_i = function() {
        var t = new eui.Group;
        return this.btnResource = t,
        t.x = 139,
        t.y = 341,
        t.elementsContent = [this._Image14_i(), this.dotRe_i()],
        t
    },
    i._Image14_i = function() {
        var t = new eui.Image;
        return t.scaleX = 1,
        t.scaleY = 1,
        t.source = "personalInformation_btnResource_png",
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t
    },
    i.dotRe_i = function() {
        var t = new eui.Image;
        return this.dotRe = t,
        t.height = 20,
        t.source = "dot_png",
        t.touchEnabled = !1,
        t.visible = !0,
        t.width = 20,
        t.x = 55,
        t.y = 0,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/PersonalinformationotherSkin.exml"] = window.PersonalinformationotherSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["infoBg", "pop_title_big", "titleTxpng", "bgInfo", "rightInfo_bg", "viewEquit_list", "scroller_equit", "parts", "equitTitle_3434", "suitTitle_3424", "txt_None", "txt_suitDesc", "avatar", "headContainer", "icon_003", "icon_002", "icon_001", "txt_nickName", "txt_Id", "txt_Time", "vip", "vipIcon", "nonoVipIcon", "vipLv", "playerinfos", "teamInfobg", "line", "team", "teamNameTx", "iteamIcon", "combatTeam", "militaryInfoBg", "line232323", "military", "militaryName", "military_icon", "militaryRank", "rightInfo", "dz1111", "peopleiIon", "grp_playerStyle", "titleNameBg", "titleNameTx", "titleInfo", "infos", "organizeTeamBtn", "combatTeamBtn", "applyjoinBtn", "Invitation", "chat_btn", "invitation_btn", "visit_btn", "fight_Btn", "block_btn", "add_btn", "delete_btn", "report_btn", "bookNumBg", "petNumTx", "petTypeNumTx", "bookInfo", "close_Btn", "info"],
        this.height = 538,
        this.width = 955,
        this.elementsContent = [this.info_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.info_i = function() {
        var t = new eui.Group;
        return this.info = t,
        t.elementsContent = [this.bgInfo_i(), this.infos_i(), this.Invitation_i(), this.chat_btn_i(), this.invitation_btn_i(), this.visit_btn_i(), this.fight_Btn_i(), this.block_btn_i(), this.add_btn_i(), this.delete_btn_i(), this.report_btn_i(), this.bookInfo_i(), this.close_Btn_i()],
        t
    },
    i.bgInfo_i = function() {
        var t = new eui.Group;
        return this.bgInfo = t,
        t.x = 17,
        t.y = 0,
        t.elementsContent = [this.infoBg_i(), this.pop_title_big_i(), this.titleTxpng_i()],
        t
    },
    i.infoBg_i = function() {
        var t = new eui.Image;
        return this.infoBg = t,
        t.source = "personalInformationOther_infoBg_png",
        t.x = 15,
        t.y = 49,
        t
    },
    i.pop_title_big_i = function() {
        var t = new eui.Image;
        return this.pop_title_big = t,
        t.source = "common_pop_title_big_png",
        t.x = 15,
        t.y = 13,
        t
    },
    i.titleTxpng_i = function() {
        var t = new eui.Image;
        return this.titleTxpng = t,
        t.source = "personalInformationOther_titleTxpng_png",
        t.x = 48,
        t.y = 19,
        t
    },
    i.infos_i = function() {
        var t = new eui.Group;
        return this.infos = t,
        t.x = 0,
        t.y = 53,
        t.elementsContent = [this.rightInfo_bg_i(), this.rightInfo_i(), this.dz1111_i(), this.grp_playerStyle_i(), this.titleInfo_i()],
        t
    },
    i.rightInfo_bg_i = function() {
        var t = new eui.Image;
        return this.rightInfo_bg = t,
        t.anchorOffsetX = 0,
        t.source = "personalInformationOther_rightInfo_bg_png",
        t.width = 427.09,
        t.x = 486.64,
        t.y = 26.87,
        t
    },
    i.rightInfo_i = function() {
        var t = new eui.Group;
        return this.rightInfo = t,
        t.x = 504,
        t.y = 0,
        t.elementsContent = [this.parts_i(), this.equitTitle_3434_i(), this.suitTitle_3424_i(), this.txt_None_i(), this._Scroller1_i(), this.playerinfos_i(), this.combatTeam_i(), this.militaryRank_i()],
        t
    },
    i.parts_i = function() {
        var t = new eui.Group;
        return this.parts = t,
        t.x = 0,
        t.y = 209.59,
        t.elementsContent = [this.scroller_equit_i()],
        t
    },
    i.scroller_equit_i = function() {
        var t = new eui.Scroller;
        return this.scroller_equit = t,
        t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.height = 66.67,
        t.scrollPolicyH = "off",
        t.scrollPolicyV = "off",
        t.width = 387.88,
        t.x = 0,
        t.y = -1.09,
        t.viewport = this._Group1_i(),
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.anchorOffsetY = 0,
        t.height = 68.18,
        t.elementsContent = [this.viewEquit_list_i()],
        t
    },
    i.viewEquit_list_i = function() {
        var t = new eui.List;
        return this.viewEquit_list = t,
        t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.height = 62.12,
        t.width = 387.88,
        t.x = -3,
        t.y = 3,
        t.layout = this._TileLayout1_i(),
        t
    },
    i._TileLayout1_i = function() {
        var t = new eui.TileLayout;
        return t
    },
    i.equitTitle_3434_i = function() {
        var t = new eui.Label;
        return this.equitTitle_3434 = t,
        t.anchorOffsetX = 0,
        t.fontFamily = "黑体",
        t.size = 18,
        t.text = "装备",
        t.textColor = 4697087,
        t.width = -27.64,
        t.x = 2.49,
        t.y = 185.58,
        t
    },
    i.suitTitle_3424_i = function() {
        var t = new eui.Label;
        return this.suitTitle_3424 = t,
        t.anchorOffsetX = 0,
        t.fontFamily = "黑体",
        t.size = 18,
        t.text = "套装效果",
        t.textColor = 4697087,
        t.width = 115.94,
        t.x = 2.49,
        t.y = 289.58,
        t
    },
    i.txt_None_i = function() {
        var t = new eui.Label;
        return this.txt_None = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.size = 30,
        t.text = "无套装效果",
        t.textColor = 16777215,
        t.x = 118.49,
        t.y = 340.34,
        t
    },
    i._Scroller1_i = function() {
        var t = new eui.Scroller;
        return t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.height = 80.3,
        t.width = 400,
        t.x = 3.55,
        t.y = 313,
        t.viewport = this._Group2_i(),
        t
    },
    i._Group2_i = function() {
        var t = new eui.Group;
        return t.elementsContent = [this.txt_suitDesc_i()],
        t
    },
    i.txt_suitDesc_i = function() {
        var t = new eui.Label;
        return this.txt_suitDesc = t,
        t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.fontFamily = "黑体",
        t.height = 132.06,
        t.scaleX = 1,
        t.scaleY = 1,
        t.size = 19,
        t.text = "令对手在战斗中恢恢复体力时恢复效果减少令对手在战斗中恢复体力时恢复效果战少令对中恢复体力时恢复效果效果减少令对手在战斗中恢复体减。",
        t.textColor = 14086655,
        t.width = 395.6,
        t.x = -2.5499999999999545,
        t.y = 3.6999999999999886,
        t
    },
    i.playerinfos_i = function() {
        var t = new eui.Group;
        return this.playerinfos = t,
        t.anchorOffsetX = 0,
        t.width = 392.36,
        t.x = 0,
        t.y = 44.18,
        t.elementsContent = [this.headContainer_i(), this.icon_003_i(), this.icon_002_i(), this.icon_001_i(), this.txt_nickName_i(), this.txt_Id_i(), this.txt_Time_i(), this.vip_i(), this.vipIcon_i(), this.nonoVipIcon_i(), this.vipLv_i()],
        t
    },
    i.headContainer_i = function() {
        var t = new eui.Group;
        return this.headContainer = t,
        t.height = 97,
        t.width = 97,
        t.x = 1.12,
        t.y = -5.26,
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
    i.icon_003_i = function() {
        var t = new eui.Image;
        return this.icon_003 = t,
        t.source = "personalInformationOther_icon_003_png",
        t.x = 113.12,
        t.y = 65.74,
        t
    },
    i.icon_002_i = function() {
        var t = new eui.Image;
        return this.icon_002 = t,
        t.source = "personalInformationOther_icon_002_png",
        t.x = 113.12,
        t.y = 32.74,
        t
    },
    i.icon_001_i = function() {
        var t = new eui.Image;
        return this.icon_001 = t,
        t.source = "personalInformationOther_icon_001_png",
        t.x = 113.12,
        t.y = -2.26,
        t
    },
    i.txt_nickName_i = function() {
        var t = new eui.Label;
        return this.txt_nickName = t,
        t.fontFamily = "黑体",
        t.size = 18,
        t.text = "昵称五个字",
        t.textColor = 16777215,
        t.x = 143.12,
        t.y = 1.74,
        t
    },
    i.txt_Id_i = function() {
        var t = new eui.Label;
        return this.txt_Id = t,
        t.fontFamily = "黑体",
        t.size = 18,
        t.text = "1234567890123",
        t.textColor = 16777215,
        t.x = 143.12,
        t.y = 37.74,
        t
    },
    i.txt_Time_i = function() {
        var t = new eui.Label;
        return this.txt_Time = t,
        t.fontFamily = "黑体",
        t.size = 18,
        t.text = "2019-12-12",
        t.textColor = 16777215,
        t.x = 143.12,
        t.y = 69.74,
        t
    },
    i.vip_i = function() {
        var t = new eui.Image;
        return this.vip = t,
        t.source = "personalInformationOther_vip_png",
        t.visible = !1,
        t.x = 239.12,
        t.y = -5.26,
        t
    },
    i.vipIcon_i = function() {
        var t = new eui.Image;
        return this.vipIcon = t,
        t.rotation = 1.25,
        t.source = "personalInformationMe_VIPIcon_png",
        t.x = 273,
        t.y = 3,
        t
    },
    i.nonoVipIcon_i = function() {
        var t = new eui.Image;
        return this.nonoVipIcon = t,
        t.source = "personalInformationMe_nonoIcon_png",
        t.x = 242.44,
        t.y = -4.6,
        t
    },
    i.vipLv_i = function() {
        var t = new eui.BitmapLabel;
        return this.vipLv = t,
        t.font = "vipfont_fnt",
        t.height = 15,
        t.scaleX = 1,
        t.scaleY = 1,
        t.text = "1",
        t.width = 15,
        t.x = 310.26,
        t.y = 3,
        t
    },
    i.combatTeam_i = function() {
        var t = new eui.Group;
        return this.combatTeam = t,
        t.x = 166.68,
        t.y = 143.12,
        t.elementsContent = [this.teamInfobg_i(), this.line_i(), this.team_i(), this.teamNameTx_i(), this.iteamIcon_i()],
        t
    },
    i.teamInfobg_i = function() {
        var t = new eui.Image;
        return this.teamInfobg = t,
        t.source = "personalInformationOther_teamInfobg_png",
        t.x = -3.44,
        t.y = 1.84,
        t
    },
    i.line_i = function() {
        var t = new eui.Image;
        return this.line = t,
        t.source = "personalInformationOther_line_png",
        t.x = 39.56,
        t.y = 5.84,
        t
    },
    i.team_i = function() {
        var t = new eui.Label;
        return this.team = t,
        t.fontFamily = "黑体",
        t.size = 18,
        t.text = "战队",
        t.textColor = 16777215,
        t.x = 3.56,
        t.y = 9.52,
        t
    },
    i.teamNameTx_i = function() {
        var t = new eui.Label;
        return this.teamNameTx = t,
        t.fontFamily = "黑体",
        t.size = 18,
        t.text = "暂未加入",
        t.textColor = 16777215,
        t.x = 114.56,
        t.y = 9.52,
        t
    },
    i.iteamIcon_i = function() {
        var t = new eui.Image;
        return this.iteamIcon = t,
        t.source = "personalInformationOther_iteamIcon_png",
        t.x = 77.56,
        t.y = .84,
        t
    },
    i.militaryRank_i = function() {
        var t = new eui.Group;
        return this.militaryRank = t,
        t.x = 0,
        t.y = 144.11,
        t.elementsContent = [this.militaryInfoBg_i(), this.line232323_i(), this.military_i(), this.militaryName_i(), this.military_icon_i()],
        t
    },
    i.militaryInfoBg_i = function() {
        var t = new eui.Image;
        return this.militaryInfoBg = t,
        t.source = "personalInformationOther_militaryInfoBg_png",
        t.x = 4.16,
        t.y = .83,
        t
    },
    i.line232323_i = function() {
        var t = new eui.Image;
        return this.line232323 = t,
        t.source = "personalInformationOther_line232323_png",
        t.x = 54.24,
        t.y = 4.83,
        t
    },
    i.military_i = function() {
        var t = new eui.Label;
        return this.military = t,
        t.fontFamily = "黑体",
        t.size = 16,
        t.text = "军衔",
        t.textColor = 16777215,
        t.x = 12.68,
        t.y = 9.52,
        t
    },
    i.militaryName_i = function() {
        var t = new eui.Label;
        return this.militaryName = t,
        t.fontFamily = "黑体",
        t.size = 18,
        t.text = "下士",
        t.textColor = 16777215,
        t.x = 99.24,
        t.y = 8.52,
        t
    },
    i.military_icon_i = function() {
        var t = new eui.Image;
        return this.military_icon = t,
        t.source = "personalInformationOther_military_icon_png",
        t.x = 64.24,
        t.y = 4.83,
        t
    },
    i.dz1111_i = function() {
        var t = new eui.Image;
        return this.dz1111 = t,
        t.source = "personalInformationOther_dz1111_png",
        t.x = 0,
        t.y = 83,
        t
    },
    i.grp_playerStyle_i = function() {
        var t = new eui.Group;
        return this.grp_playerStyle = t,
        t.height = 0,
        t.width = 0,
        t.x = 267,
        t.y = 340,
        t.elementsContent = [this.peopleiIon_i()],
        t
    },
    i.peopleiIon_i = function() {
        var t = new eui.Image;
        return this.peopleiIon = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.visible = !1,
        t.x = -182.81,
        t.y = -254.6,
        t
    },
    i.titleInfo_i = function() {
        var t = new eui.Group;
        return this.titleInfo = t,
        t.x = 181,
        t.y = 369,
        t.elementsContent = [this.titleNameBg_i(), this.titleNameTx_i()],
        t
    },
    i.titleNameBg_i = function() {
        var t = new eui.Image;
        return this.titleNameBg = t,
        t.source = "personalInformationOther_titleNameBg_png",
        t.x = 3,
        t.y = 0,
        t
    },
    i.titleNameTx_i = function() {
        var t = new eui.Label;
        return this.titleNameTx = t,
        t.bold = !0,
        t.fontFamily = "黑体",
        t.height = 18,
        t.horizontalCenter = 0,
        t.size = 18,
        t.text = "光明",
        t.textAlign = "center",
        t.textColor = 16776543,
        t.verticalAlign = "justify",
        t.width = 90,
        t.y = 6,
        t
    },
    i.Invitation_i = function() {
        var t = new eui.Group;
        return this.Invitation = t,
        t.visible = !1,
        t.x = 703,
        t.y = 379,
        t.elementsContent = [this.organizeTeamBtn_i(), this.combatTeamBtn_i(), this.applyjoinBtn_i()],
        t
    },
    i.organizeTeamBtn_i = function() {
        var t = new eui.Image;
        return this.organizeTeamBtn = t,
        t.source = "personalInformationOther_organizeTeamBtn_png",
        t.x = 1.69,
        t.y = -2.04,
        t
    },
    i.combatTeamBtn_i = function() {
        var t = new eui.Image;
        return this.combatTeamBtn = t,
        t.source = "personalInformationOther_combatTeamBtn_png",
        t.x = 1.69,
        t.y = 43.96,
        t
    },
    i.applyjoinBtn_i = function() {
        var t = new eui.Image;
        return this.applyjoinBtn = t,
        t.height = 40,
        t.source = "personalInformationOther_applyBtn_png",
        t.width = 50,
        t.x = 27.79,
        t.y = -2.73,
        t
    },
    i.chat_btn_i = function() {
        var t = new eui.Image;
        return this.chat_btn = t,
        t.source = "personalInformationOther_chat_btn_png",
        t.visible = !1,
        t.x = 811,
        t.y = 468,
        t
    },
    i.invitation_btn_i = function() {
        var t = new eui.Image;
        return this.invitation_btn = t,
        t.source = "personalInformationOther_invitation_btn_png",
        t.x = 790,
        t.y = 468,
        t
    },
    i.visit_btn_i = function() {
        var t = new eui.Image;
        return this.visit_btn = t,
        t.source = "personalInformationOther_visit_btn_png",
        t.x = 654,
        t.y = 468,
        t
    },
    i.fight_Btn_i = function() {
        var t = new eui.Image;
        return this.fight_Btn = t,
        t.source = "personalInformationOther_fight_Btn_png",
        t.x = 521,
        t.y = 468,
        t
    },
    i.block_btn_i = function() {
        var t = new eui.Image;
        return this.block_btn = t,
        t.source = "personalInformationOther_block_btn_png",
        t.x = 125,
        t.y = 456,
        t
    },
    i.add_btn_i = function() {
        var t = new eui.Image;
        return this.add_btn = t,
        t.source = "personalInformationOther_add_btn_png",
        t.x = 73,
        t.y = 457,
        t
    },
    i.delete_btn_i = function() {
        var t = new eui.Image;
        return this.delete_btn = t,
        t.source = "personalInformationOther_delete_btn_png",
        t.x = 73,
        t.y = 457,
        t
    },
    i.report_btn_i = function() {
        var t = new eui.Image;
        return this.report_btn = t,
        t.source = "personalInformationOther_report_btn_png",
        t.x = 184,
        t.y = 457,
        t
    },
    i.bookInfo_i = function() {
        var t = new eui.Group;
        return this.bookInfo = t,
        t.x = 71,
        t.y = 76,
        t.elementsContent = [this.bookNumBg_i(), this.petNumTx_i(), this.petTypeNumTx_i()],
        t
    },
    i.bookNumBg_i = function() {
        var t = new eui.Image;
        return this.bookNumBg = t,
        t.source = "personalInformationOther_bookNumBg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.petNumTx_i = function() {
        var t = new eui.Label;
        return this.petNumTx = t,
        t.fontFamily = "黑体",
        t.size = 19,
        t.text = "精灵总数：9999",
        t.textColor = 16777215,
        t.x = 10,
        t.y = 5,
        t
    },
    i.petTypeNumTx_i = function() {
        var t = new eui.Label;
        return this.petTypeNumTx = t,
        t.fontFamily = "黑体",
        t.size = 19,
        t.text = "精灵种类：9999",
        t.textColor = 16777215,
        t.x = 148,
        t.y = 5,
        t
    },
    i.close_Btn_i = function() {
        var t = new eui.Image;
        return this.close_Btn = t,
        t.source = "common_close_1_png",
        t.x = 901,
        t.y = -7,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/popview/ChangeNamePopSkin.exml"] = window.ChangeNamePopSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["img_btn_close", "img_btn_yes", "Txt_Name"],
        this.height = 289,
        this.width = 481,
        this.elementsContent = [this._Image1_i(), this.img_btn_close_i(), this._Image2_i(), this.img_btn_yes_i(), this._Label2_i(), this.Txt_Name_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "change_name_pop_imgbg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.img_btn_close_i = function() {
        var t = new eui.Image;
        return this.img_btn_close = t,
        t.source = "change_name_pop_btnclose_png",
        t.x = 439,
        t.y = 4,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "change_name_pop_imginputbg_png",
        t.visible = !0,
        t.x = 59,
        t.y = 102,
        t
    },
    i.img_btn_yes_i = function() {
        var t = new eui.Group;
        return this.img_btn_yes = t,
        t.x = 171,
        t.y = 217,
        t.elementsContent = [this._Image3_i(), this._Label1_i()],
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "change_name_pop_imgbtnbg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "REEJI",
        t.size = 22,
        t.text = "确 定",
        t.textColor = 10181146,
        t.x = 42,
        t.y = 12,
        t
    },
    i._Label2_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "角色昵称不超过五个字",
        t.textColor = 6388143,
        t.x = 149,
        t.y = 160,
        t
    },
    i.Txt_Name_i = function() {
        var t = new eui.EditableText;
        return this.Txt_Name = t,
        t.fontFamily = "MFShangHei",
        t.height = 20,
        t.lineSpacing = 3,
        t.prompt = "请输入新昵称",
        t.promptColor = 8631026,
        t.size = 20,
        t.textAlign = "center",
        t.textColor = 8631026,
        t.visible = !0,
        t.width = 120,
        t.x = 177,
        t.y = 113,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/popview/ChangeNameSkin.exml"] = window.ChangeNameSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["BG", "img_btn_close", "img_btn_yes", "Txt_Name"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.BG_i(), this.img_btn_close_i(), this._Group1_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.BG_i = function() {
        var t = new eui.Image;
        return this.BG = t,
        t.horizontalCenter = 0,
        t.source = "common_ui_bg_2_png",
        t.y = 0,
        t
    },
    i.img_btn_close_i = function() {
        var t = new eui.Image;
        return this.img_btn_close = t,
        t.height = 56,
        t.right = 22,
        t.source = "change_name_pop_img_btn_close_png",
        t.top = 9,
        t.width = 56,
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.height = 100,
        t.horizontalCenter = .5,
        t.top = 81,
        t.width = 441,
        t.elementsContent = [this._Image1_i(), this._Image2_i(), this.img_btn_yes_i(), this._Label1_i(), this.Txt_Name_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 1,
        t.source = "change_name_Img_Line_png",
        t.width = 441,
        t.x = 0,
        t.y = 23,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 50,
        t.source = "change_name_texture_1_png",
        t.width = 340,
        t.x = 50,
        t.y = 50,
        t
    },
    i.img_btn_yes_i = function() {
        var t = new eui.Image;
        return this.img_btn_yes = t,
        t.height = 50,
        t.source = "change_name_pop_img_btn_yes_png",
        t.width = 79,
        t.x = 352,
        t.y = 50,
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.size = 20,
        t.text = "请输入新的昵称，不能超过五个字",
        t.textColor = 15463679,
        t.x = 63,
        t.y = 0,
        t
    },
    i.Txt_Name_i = function() {
        var t = new eui.EditableText;
        return this.Txt_Name = t,
        t.height = 22,
        t.prompt = "用户当前的昵称",
        t.promptColor = 8825816,
        t.size = 22,
        t.text = "",
        t.textAlign = "center",
        t.width = 154,
        t.x = 139,
        t.y = 64,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/popview/ExchangeCodePopSkin.exml"] = window.ExchangeCodePopSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["exchangeCode_panel_bg", "img_btn_close", "txtLabel_0", "img_btn_yes", "txtLabel_1", "inputbg", "tx_input", "tx_title", "exchangeCode"],
        this.height = 538,
        this.width = 955,
        this.elementsContent = [this.exchangeCode_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.exchangeCode_i = function() {
        var t = new eui.Group;
        return this.exchangeCode = t,
        t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.height = 210.84,
        t.horizontalCenter = 0,
        t.verticalCenter = 0,
        t.width = 440.51,
        t.elementsContent = [this.exchangeCode_panel_bg_i(), this.img_btn_close_i(), this.txtLabel_0_i(), this.img_btn_yes_i(), this.txtLabel_1_i(), this.inputbg_i(), this.tx_input_i(), this.tx_title_i()],
        t
    },
    i.exchangeCode_panel_bg_i = function() {
        var t = new eui.Image;
        return this.exchangeCode_panel_bg = t,
        t.height = 210,
        t.source = "personalInformationMe_exchangeCode_exchangeCode_panel_bg_png",
        t.width = 442,
        t.x = 0,
        t.y = 0,
        t
    },
    i.img_btn_close_i = function() {
        var t = new eui.Image;
        return this.img_btn_close = t,
        t.height = 42,
        t.source = "common_btn_bg_style_blue_2_png",
        t.width = 122,
        t.x = 72.79,
        t.y = 130.76,
        t
    },
    i.txtLabel_0_i = function() {
        var t = new eui.Label;
        return this.txtLabel_0 = t,
        t.fontFamily = "黑体",
        t.size = 20,
        t.text = "取消",
        t.textColor = 16777215,
        t.x = 115.27,
        t.y = 140.65,
        t
    },
    i.img_btn_yes_i = function() {
        var t = new eui.Image;
        return this.img_btn_yes = t,
        t.height = 40,
        t.source = "common_btn_bg_style_orange_2_png",
        t.width = 120,
        t.x = 250,
        t.y = 132.76,
        t
    },
    i.txtLabel_1_i = function() {
        var t = new eui.Label;
        return this.txtLabel_1 = t,
        t.fontFamily = "黑体",
        t.size = 20,
        t.text = "确认",
        t.textColor = 8341784,
        t.x = 288.48,
        t.y = 143.66,
        t
    },
    i.inputbg_i = function() {
        var t = new eui.Image;
        return this.inputbg = t,
        t.height = 31,
        t.source = "personalInformationMe_exchangeCode_inputbg_png",
        t.width = 342,
        t.x = 50,
        t.y = 73,
        t
    },
    i.tx_input_i = function() {
        var t = new eui.EditableText;
        return this.tx_input = t,
        t.fontFamily = "黑体",
        t.height = 18,
        t.lineSpacing = 3,
        t.prompt = "兑换码",
        t.promptColor = 15463162,
        t.size = 18,
        t.textAlign = "center",
        t.textColor = 15463162,
        t.visible = !0,
        t.width = 340,
        t.x = 52.74,
        t.y = 79.67,
        t
    },
    i.tx_title_i = function() {
        var t = new eui.Label;
        return this.tx_title = t,
        t.fontFamily = "黑体",
        t.horizontalCenter = 0,
        t.size = 20,
        t.text = "兑换奖励",
        t.textColor = 3492213,
        t.y = 41,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/popview/OtherMarkTipsSkin.exml"] = window.OtherMarkTipsSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["txtMarkName", "txtIsCurEquip", "txtLevel", "txtTypeName", "txtRestrict", "txtBase1", "txtBaseAttr1", "txtBase3", "txtBaseAttr3", "txtBase5", "txtBaseAttr5", "txtBase2", "txtBaseAttr2", "txtBase4", "txtBaseAttr4", "txtBase6", "txtBaseAttr6", "groupBaseAttr", "imgLine1", "txtNoExtraAttr", "txtHasExtraAttr", "txtExtraAttr1", "txtExtraAttr3", "txtExtraAttr5", "txtExtraAttr2", "txtExtraAttr4", "txtExtraAttr6", "groupExtraAttr", "imgLine2", "txtStone", "imgStone", "groupUniversalMark", "txtSkill", "txtStoneDesc"],
        this.height = 331,
        this.width = 480,
        this.elementsContent = [this._Image1_i(), this._Image2_i(), this._Image3_i(), this._Group1_i(), this.txtLevel_i(), this.txtTypeName_i(), this.txtRestrict_i(), this.groupBaseAttr_i(), this.imgLine1_i(), this.txtNoExtraAttr_i(), this.txtHasExtraAttr_i(), this.groupExtraAttr_i()],
        this.imgLine2_i(),
        this.groupUniversalMark_i(),
        this.txtSkill_i(),
        this.txtStoneDesc_i(),
        this.states = [new eui.State("hasGem", [new eui.AddItems("imgLine2", "", 1, ""), new eui.AddItems("groupUniversalMark", "", 1, ""), new eui.AddItems("txtSkill", "", 1, ""), new eui.AddItems("txtStoneDesc", "", 1, "")]), new eui.State("noGem", [new eui.SetProperty("imgLine2", "x", 19), new eui.SetProperty("imgLine2", "y", 221.036), new eui.SetProperty("groupUniversalMark", "x", 24), new eui.SetProperty("groupUniversalMark", "y", 232.291), new eui.SetProperty("txtSkill", "visible", !0), new eui.SetProperty("txtSkill", "x", 204), new eui.SetProperty("txtSkill", "y", 232.518), new eui.SetProperty("txtStoneDesc", "x", 24), new eui.SetProperty("txtStoneDesc", "y", 258.972)])]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.bottom = 5,
        t.left = 5,
        t.right = 5,
        t.source = "new_tips_2021_11_img6_png",
        t.top = 5,
        t.visible = !0,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 33.168,
        t.left = 5,
        t.right = 5,
        t.source = "new_tips_2021_11_img5_png",
        t.visible = !0,
        t.y = 2,
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.height = 37.118,
        t.source = "new_tips_2021_11_img4_png",
        t.visible = !0,
        t.x = 3.86,
        t.y = .042,
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.x = 24,
        t.y = 9,
        t.layout = this._HorizontalLayout1_i(),
        t.elementsContent = [this.txtMarkName_i(), this.txtIsCurEquip_i()],
        t
    },
    i._HorizontalLayout1_i = function() {
        var t = new eui.HorizontalLayout;
        return t.verticalAlign = "bottom",
        t
    },
    i.txtMarkName_i = function() {
        var t = new eui.Label;
        return this.txtMarkName = t,
        t.fontFamily = "MFShangHei",
        t.size = 20,
        t.text = "五星刻印",
        t.textColor = 12900094,
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t
    },
    i.txtIsCurEquip_i = function() {
        var t = new eui.Label;
        return this.txtIsCurEquip = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "(当前装备)",
        t.textColor = 16725558,
        t.visible = !1,
        t
    },
    i.txtLevel_i = function() {
        var t = new eui.Label;
        return this.txtLevel = t,
        t.fontFamily = "MFShangHei",
        t.right = 24,
        t.size = 18,
        t.text = "满属性效果",
        t.textColor = 4252667,
        t.visible = !0,
        t.y = 10.067,
        t
    },
    i.txtTypeName_i = function() {
        var t = new eui.Label;
        return this.txtTypeName = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "刻印刻印",
        t.textColor = 6154074,
        t.verticalAlign = "middle",
        t.visible = !0,
        t.x = 24,
        t.y = 43,
        t
    },
    i.txtRestrict_i = function() {
        var t = new eui.Label;
        return this.txtRestrict = t,
        t.fontFamily = "MFShangHei",
        t.right = 24,
        t.size = 18,
        t.text = "限定：XXXXXX",
        t.textColor = 8822740,
        t.verticalAlign = "middle",
        t.visible = !1,
        t.y = 43,
        t
    },
    i.groupBaseAttr_i = function() {
        var t = new eui.Group;
        return this.groupBaseAttr = t,
        t.left = 24,
        t.visible = !0,
        t.width = 390,
        t.y = 70.322,
        t.layout = this._TileLayout1_i(),
        t.elementsContent = [this.txtBase1_i(), this.txtBaseAttr1_i(), this.txtBase3_i(), this.txtBaseAttr3_i(), this.txtBase5_i(), this.txtBaseAttr5_i(), this.txtBase2_i(), this.txtBaseAttr2_i(), this.txtBase4_i(), this.txtBaseAttr4_i(), this.txtBase6_i(), this.txtBaseAttr6_i()],
        t
    },
    i._TileLayout1_i = function() {
        var t = new eui.TileLayout;
        return t.orientation = "rows",
        t.requestedColumnCount = 6,
        t.requestedRowCount = 2,
        t.rowHeight = 20,
        t
    },
    i.txtBase1_i = function() {
        var t = new eui.Label;
        return this.txtBase1 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "攻击：",
        t.textAlign = "left",
        t.textColor = 4252667,
        t.verticalAlign = "middle",
        t.visible = !0,
        t.x = .12,
        t.y = 0,
        t
    },
    i.txtBaseAttr1_i = function() {
        var t = new eui.Label;
        return this.txtBaseAttr1 = t,
        t.fontFamily = "MFShangHei",
        t.height = 30,
        t.size = 18,
        t.text = "+00/00",
        t.textAlign = "left",
        t.textColor = 8822740,
        t.verticalAlign = "middle",
        t.visible = !0,
        t.x = 10.12,
        t.y = 10,
        t
    },
    i.txtBase3_i = function() {
        var t = new eui.Label;
        return this.txtBase3 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "特攻：",
        t.textAlign = "left",
        t.textColor = 4252667,
        t.verticalAlign = "middle",
        t.x = 0,
        t.y = 30.98,
        t
    },
    i.txtBaseAttr3_i = function() {
        var t = new eui.Label;
        return this.txtBaseAttr3 = t,
        t.fontFamily = "MFShangHei",
        t.height = 30,
        t.size = 18,
        t.text = "+00/00",
        t.textAlign = "left",
        t.textColor = 8822740,
        t.verticalAlign = "middle",
        t.x = 10,
        t.y = 40.980000000000004,
        t
    },
    i.txtBase5_i = function() {
        var t = new eui.Label;
        return this.txtBase5 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "速度：",
        t.textAlign = "left",
        t.textColor = 4252667,
        t.verticalAlign = "middle",
        t.x = 10,
        t.y = 40.98,
        t
    },
    i.txtBaseAttr5_i = function() {
        var t = new eui.Label;
        return this.txtBaseAttr5 = t,
        t.fontFamily = "MFShangHei",
        t.height = 30,
        t.size = 18,
        t.text = "+00/00",
        t.textAlign = "left",
        t.textColor = 8822740,
        t.verticalAlign = "middle",
        t.x = 20,
        t.y = 50.98,
        t
    },
    i.txtBase2_i = function() {
        var t = new eui.Label;
        return this.txtBase2 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "防御：",
        t.textAlign = "left",
        t.textColor = 4252667,
        t.verticalAlign = "middle",
        t.x = 20,
        t.y = 50.98,
        t
    },
    i.txtBaseAttr2_i = function() {
        var t = new eui.Label;
        return this.txtBaseAttr2 = t,
        t.fontFamily = "MFShangHei",
        t.height = 30,
        t.size = 18,
        t.text = "+00/00",
        t.textAlign = "left",
        t.textColor = 8822740,
        t.verticalAlign = "middle",
        t.x = 30,
        t.y = 60.98,
        t
    },
    i.txtBase4_i = function() {
        var t = new eui.Label;
        return this.txtBase4 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "特防：",
        t.textAlign = "left",
        t.textColor = 4252667,
        t.verticalAlign = "middle",
        t.x = 30,
        t.y = 60.98,
        t
    },
    i.txtBaseAttr4_i = function() {
        var t = new eui.Label;
        return this.txtBaseAttr4 = t,
        t.fontFamily = "MFShangHei",
        t.height = 30,
        t.size = 18,
        t.text = "+00/00",
        t.textAlign = "left",
        t.textColor = 8822740,
        t.verticalAlign = "middle",
        t.x = 40,
        t.y = 70.97999999999999,
        t
    },
    i.txtBase6_i = function() {
        var t = new eui.Label;
        return this.txtBase6 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "体力：",
        t.textAlign = "left",
        t.textColor = 4252667,
        t.verticalAlign = "middle",
        t.x = 40,
        t.y = 70.98,
        t
    },
    i.txtBaseAttr6_i = function() {
        var t = new eui.Label;
        return this.txtBaseAttr6 = t,
        t.fontFamily = "MFShangHei",
        t.height = 30,
        t.size = 18,
        t.text = "+00/00",
        t.textAlign = "left",
        t.textColor = 8822740,
        t.verticalAlign = "middle",
        t.x = 50,
        t.y = 80.98,
        t
    },
    i.imgLine1_i = function() {
        var t = new eui.Image;
        return this.imgLine1 = t,
        t.horizontalCenter = 0,
        t.scaleY = 2,
        t.source = "new_mark_tips_2021_11_img1_png",
        t.visible = !0,
        t.y = 126.155,
        t
    },
    i.txtNoExtraAttr_i = function() {
        var t = new eui.Label;
        return this.txtNoExtraAttr = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = 0,
        t.size = 18,
        t.text = "无隐藏属性",
        t.textAlign = "center",
        t.textColor = 6154074,
        t.visible = !0,
        t.y = 137.936,
        t
    },
    i.txtHasExtraAttr_i = function() {
        var t = new eui.Label;
        return this.txtHasExtraAttr = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "隐藏属性：",
        t.textAlign = "center",
        t.textColor = 6154074,
        t.visible = !0,
        t.x = 24,
        t.y = 137.937,
        t
    },
    i.groupExtraAttr_i = function() {
        var t = new eui.Group;
        return this.groupExtraAttr = t,
        t.left = 24,
        t.visible = !0,
        t.width = 390,
        t.y = 166.093,
        t.layout = this._TileLayout2_i(),
        t.elementsContent = [this._Label1_i(), this.txtExtraAttr1_i(), this._Label2_i(), this.txtExtraAttr3_i(), this._Label3_i(), this.txtExtraAttr5_i(), this._Label4_i(), this.txtExtraAttr2_i(), this._Label5_i(), this.txtExtraAttr4_i(), this._Label6_i(), this.txtExtraAttr6_i()],
        t
    },
    i._TileLayout2_i = function() {
        var t = new eui.TileLayout;
        return t.columnWidth = 60,
        t.requestedRowCount = 2,
        t.rowHeight = 20,
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "攻击：",
        t.textAlign = "left",
        t.textColor = 4252667,
        t.verticalAlign = "middle",
        t.x = .12,
        t.y = 0,
        t
    },
    i.txtExtraAttr1_i = function() {
        var t = new eui.Label;
        return this.txtExtraAttr1 = t,
        t.fontFamily = "MFShangHei",
        t.height = 30,
        t.size = 18,
        t.text = "+00",
        t.textAlign = "left",
        t.textColor = 8822740,
        t.verticalAlign = "middle",
        t.width = 60,
        t.x = 10.12,
        t.y = 10,
        t
    },
    i._Label2_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "特攻：",
        t.textAlign = "left",
        t.textColor = 4252667,
        t.verticalAlign = "middle",
        t.x = 0,
        t.y = 30.98,
        t
    },
    i.txtExtraAttr3_i = function() {
        var t = new eui.Label;
        return this.txtExtraAttr3 = t,
        t.fontFamily = "MFShangHei",
        t.height = 30,
        t.size = 18,
        t.text = "+00",
        t.textAlign = "left",
        t.textColor = 8822740,
        t.verticalAlign = "middle",
        t.width = 60,
        t.x = 10,
        t.y = 40.980000000000004,
        t
    },
    i._Label3_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "速度：",
        t.textAlign = "left",
        t.textColor = 4252667,
        t.verticalAlign = "middle",
        t.x = 10,
        t.y = 40.98,
        t
    },
    i.txtExtraAttr5_i = function() {
        var t = new eui.Label;
        return this.txtExtraAttr5 = t,
        t.fontFamily = "MFShangHei",
        t.height = 30,
        t.size = 18,
        t.text = "+00",
        t.textAlign = "left",
        t.textColor = 8822740,
        t.verticalAlign = "middle",
        t.width = 60,
        t.x = 20,
        t.y = 50.98,
        t
    },
    i._Label4_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "防御：",
        t.textAlign = "left",
        t.textColor = 4252667,
        t.verticalAlign = "middle",
        t.x = 20,
        t.y = 50.98,
        t
    },
    i.txtExtraAttr2_i = function() {
        var t = new eui.Label;
        return this.txtExtraAttr2 = t,
        t.fontFamily = "MFShangHei",
        t.height = 30,
        t.size = 18,
        t.text = "+00",
        t.textAlign = "left",
        t.textColor = 8822740,
        t.verticalAlign = "middle",
        t.width = 60,
        t.x = 30,
        t.y = 60.98,
        t
    },
    i._Label5_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "特防：",
        t.textAlign = "left",
        t.textColor = 4252667,
        t.verticalAlign = "middle",
        t.x = 30,
        t.y = 60.98,
        t
    },
    i.txtExtraAttr4_i = function() {
        var t = new eui.Label;
        return this.txtExtraAttr4 = t,
        t.fontFamily = "MFShangHei",
        t.height = 30,
        t.size = 18,
        t.text = "+00",
        t.textAlign = "left",
        t.textColor = 8822740,
        t.verticalAlign = "middle",
        t.width = 60,
        t.x = 40,
        t.y = 70.97999999999999,
        t
    },
    i._Label6_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "体力：",
        t.textAlign = "left",
        t.textColor = 4252667,
        t.verticalAlign = "middle",
        t.x = 40,
        t.y = 70.98,
        t
    },
    i.txtExtraAttr6_i = function() {
        var t = new eui.Label;
        return this.txtExtraAttr6 = t,
        t.fontFamily = "MFShangHei",
        t.height = 30,
        t.size = 18,
        t.text = "+00",
        t.textAlign = "left",
        t.textColor = 8822740,
        t.verticalAlign = "middle",
        t.width = 60,
        t.x = 50,
        t.y = 80.98,
        t
    },
    i.imgLine2_i = function() {
        var t = new eui.Image;
        return this.imgLine2 = t,
        t.horizontalCenter = 0,
        t.scaleY = 2,
        t.source = "new_mark_tips_2021_11_img1_png",
        t.visible = !0,
        t.x = 22,
        t.y = 221.036,
        t
    },
    i.groupUniversalMark_i = function() {
        var t = new eui.Group;
        return this.groupUniversalMark = t,
        t.visible = !0,
        t.x = 24,
        t.y = 232.291,
        t.layout = this._HorizontalLayout2_i(),
        t.elementsContent = [this.txtStone_i(), this.imgStone_i()],
        t
    },
    i._HorizontalLayout2_i = function() {
        var t = new eui.HorizontalLayout;
        return t.gap = 10,
        t.verticalAlign = "top",
        t
    },
    i.txtStone_i = function() {
        var t = new eui.Label;
        return this.txtStone = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "不可镶嵌特效宝石",
        t.textColor = 6154074,
        t.verticalAlign = "middle",
        t.visible = !0,
        t.y = 2,
        t
    },
    i.imgStone_i = function() {
        var t = new eui.Image;
        return this.imgStone = t,
        t.height = 22,
        t.width = 22,
        t
    },
    i.txtSkill_i = function() {
        var t = new eui.Label;
        return this.txtSkill = t,
        t.fontFamily = "MFShangHei",
        t.right = 24,
        t.size = 18,
        t.text = "当前附加于：技能名技技能名技",
        t.textColor = 8822740,
        t.visible = !1,
        t.y = 232.518,
        t
    },
    i.txtStoneDesc_i = function() {
        var t = new eui.Label;
        return this.txtStoneDesc = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "宝石效果描述宝石效果描述",
        t.textColor = 8822740,
        t.visible = !0,
        t.x = 24,
        t.y = 258.972,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/popview/PersonalinformationNameFramePopSkin.exml"] = window.PersonalinformationNameFramePopSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["title", "img_btn_yes", "inputbg", "t1", "Txt_Name", "nameGroup", "desc", "txtName", "_list", "icon", "btnGet", "btnUse", "btnUsing", "limit", "frameGroup", "btnClose", "rbGrp"],
        this.height = 431,
        this.width = 753,
        this.elementsContent = [this._Image1_i(), this.title_i(), this.nameGroup_i(), this.frameGroup_i(), this.btnClose_i(), this.rbGrp_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "personalinformation_name_frame_pop_bg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.title_i = function() {
        var t = new eui.Image;
        return this.title = t,
        t.source = "personalinformation_name_frame_pop_title_png",
        t.x = 36,
        t.y = 2,
        t
    },
    i.nameGroup_i = function() {
        var t = new eui.Group;
        return this.nameGroup = t,
        t.visible = !1,
        t.x = 283,
        t.y = 172,
        t.elementsContent = [this.img_btn_yes_i(), this.inputbg_i(), this.t1_i(), this.Txt_Name_i()],
        t
    },
    i.img_btn_yes_i = function() {
        var t = new eui.Image;
        return this.img_btn_yes = t,
        t.source = "personalinformation_name_frame_pop_img_btn_yes_png",
        t.x = 112,
        t.y = 115,
        t
    },
    i.inputbg_i = function() {
        var t = new eui.Image;
        return this.inputbg = t,
        t.source = "change_name_pop_imginputbg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.t1_i = function() {
        var t = new eui.Label;
        return this.t1 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "角色昵称不超过五个字",
        t.textColor = 6388143,
        t.x = 90,
        t.y = 58,
        t
    },
    i.Txt_Name_i = function() {
        var t = new eui.EditableText;
        return this.Txt_Name = t,
        t.fontFamily = "MFShangHei",
        t.height = 20,
        t.lineSpacing = 3,
        t.prompt = "请输入新昵称",
        t.promptColor = 8631026,
        t.size = 20,
        t.textAlign = "center",
        t.textColor = 8631026,
        t.visible = !0,
        t.width = 120,
        t.x = 120,
        t.y = 11,
        t
    },
    i.frameGroup_i = function() {
        var t = new eui.Group;
        return this.frameGroup = t,
        t.height = 365,
        t.visible = !0,
        t.width = 566,
        t.x = 172,
        t.y = 40,
        t.elementsContent = [this._Image2_i(), this.desc_i(), this.txtName_i(), this._Scroller1_i(), this.icon_i(), this.btnGet_i(), this.btnUse_i(), this.btnUsing_i(), this.limit_i()],
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "personalinformation_name_frame_pop_bg1_png",
        t.x = 5,
        t.y = 2,
        t
    },
    i.desc_i = function() {
        var t = new eui.Label;
        return this.desc = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.textColor = 8757203,
        t.width = 188,
        t.x = 366,
        t.y = 191,
        t
    },
    i.txtName_i = function() {
        var t = new eui.Label;
        return this.txtName = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = 178,
        t.size = 18,
        t.textColor = 12111615,
        t.y = 160,
        t
    },
    i._Scroller1_i = function() {
        var t = new eui.Scroller;
        return t.height = 359.413,
        t.x = -3.576,
        t.y = 0,
        t.viewport = this._list_i(),
        t
    },
    i._list_i = function() {
        var t = new eui.List;
        return this._list = t,
        t.itemRendererSkinName = PersonalinformationNameFramePopItemSkin,
        t.layout = this._TileLayout1_i(),
        t
    },
    i._TileLayout1_i = function() {
        var t = new eui.TileLayout;
        return t.horizontalGap = 0,
        t.requestedColumnCount = 2,
        t.verticalGap = 0,
        t
    },
    i.icon_i = function() {
        var t = new eui.Image;
        return this.icon = t,
        t.horizontalCenter = 177,
        t.verticalCenter = -101.5,
        t
    },
    i.btnGet_i = function() {
        var t = new eui.Image;
        return this.btnGet = t,
        t.source = "personalinformation_name_frame_pop_btnget_png",
        t.visible = !1,
        t.x = 417,
        t.y = 331,
        t
    },
    i.btnUse_i = function() {
        var t = new eui.Image;
        return this.btnUse = t,
        t.source = "personalinformation_name_frame_pop_btnuse_png",
        t.visible = !0,
        t.x = 417,
        t.y = 331,
        t
    },
    i.btnUsing_i = function() {
        var t = new eui.Image;
        return this.btnUsing = t,
        t.source = "personalinformation_name_frame_pop_btnusing_png",
        t.visible = !1,
        t.x = 417,
        t.y = 331,
        t
    },
    i.limit_i = function() {
        var t = new eui.Label;
        return this.limit = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = 175,
        t.size = 18,
        t.textColor = 6388143,
        t.y = 303,
        t
    },
    i.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.source = "change_name_pop_btnclose_png",
        t.x = 711,
        t.y = 0,
        t
    },
    i.rbGrp_i = function() {
        var t = new eui.Group;
        return this.rbGrp = t,
        t.height = 200,
        t.width = 172,
        t.x = 1,
        t.y = 46,
        t.layout = this._VerticalLayout1_i(),
        t
    },
    i._VerticalLayout1_i = function() {
        var t = new eui.VerticalLayout;
        return t.gap = 0,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/popview/PersonalinformationPolicyPopSkin.exml"] = window.PersonalinformationPolicyPopSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["three", "person", "protect", "closeBtn"],
        this.height = 288,
        this.width = 294,
        this.elementsContent = [this._Group1_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Group1_i = function() {
        var t = new eui.Group;
        return t.cacheAsBitmap = !0,
        t.elementsContent = [this._Image1_i(), this.three_i(), this.person_i(), this.protect_i(), this.closeBtn_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "personalinformation_policy_pop_bbbg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.three_i = function() {
        var t = new eui.Image;
        return this.three = t,
        t.source = "personalinformation_policy_pop_three_png",
        t.x = 56,
        t.y = 204,
        t
    },
    i.person_i = function() {
        var t = new eui.Image;
        return this.person = t,
        t.source = "personalinformation_policy_pop_person_png",
        t.x = 56,
        t.y = 134,
        t
    },
    i.protect_i = function() {
        var t = new eui.Image;
        return this.protect = t,
        t.source = "personalinformation_policy_pop_protect_png",
        t.x = 56,
        t.y = 64,
        t
    },
    i.closeBtn_i = function() {
        var t = new eui.Image;
        return this.closeBtn = t,
        t.source = "title_pop_2022_btnclose_png",
        t.x = 247,
        t.y = 4,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/popview/ResourceCenterActSkin.exml"] = window.ResourceCenterActSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "_list", "btnClose", "tx_desc"],
        this.height = 431,
        this.width = 753,
        this.elementsContent = [this.bg_i(), this._Scroller1_i(), this.btnClose_i(), this.tx_desc_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.source = "resource_center_act_bg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i._Scroller1_i = function() {
        var t = new eui.Scroller;
        return t.height = 329.746,
        t.horizontalCenter = .5,
        t.width = 708,
        t.y = 49,
        t.viewport = this._list_i(),
        t
    },
    i._list_i = function() {
        var t = new eui.List;
        return this._list = t,
        t.itemRendererSkinName = ResourceCenterActItemSkin,
        t.layout = this._TileLayout1_i(),
        t
    },
    i._TileLayout1_i = function() {
        var t = new eui.TileLayout;
        return t.horizontalGap = 6,
        t.requestedColumnCount = 2,
        t.verticalGap = 16,
        t
    },
    i.btnClose_i = function() {
        var t = new eui.Rect;
        return this.btnClose = t,
        t.alpha = 0,
        t.height = 32,
        t.width = 48,
        t.x = 702,
        t.y = 2,
        t
    },
    i.tx_desc_i = function() {
        var t = new eui.Label;
        return this.tx_desc = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = .5,
        t.size = 18,
        t.text = "此处仅统计您免费获得对应物品的数量，付费获取不计入其中，赛尔有任何疑问，均可联系赛尔号客服人员",
        t.textAlign = "center",
        t.textColor = 6027263,
        t.width = 648,
        t.y = 382.163,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/popview/SelectCarPopSkin.exml"] = window.SelectCarPopSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["curCarName", "curCarDesc", "dress", "descCarBg", "descLine", "curSelectCar", "quality", "descGroup", "txtSearch", "btnSearch", "search", "close", "none", "_list", "scroller"],
        this.height = 547,
        this.width = 999,
        this.elementsContent = [this._Group2_i()]
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
            t.size = 16,
            t.textColor = 6388143,
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
            t.size = 16,
            t.textColor = 4149623,
            t.touchEnabled = !1,
            t.verticalCenter = 0,
            t.percentWidth = 100,
            t
        },
        e
    } (eui.Skin),
    n = e.prototype;
    return n._Group2_i = function() {
        var t = new eui.Group;
        return t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image1_i(), this.descGroup_i(), this.search_i(), this.close_i(), this.none_i(), this.scroller_i()],
        t
    },
    n._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "select_car_pop_bg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    n.descGroup_i = function() {
        var t = new eui.Group;
        return this.descGroup = t,
        t.height = 468,
        t.visible = !0,
        t.width = 268,
        t.x = 0,
        t.y = 53,
        t.elementsContent = [this.curCarName_i(), this._Scroller1_i(), this.dress_i(), this.descCarBg_i(), this.descLine_i(), this.curSelectCar_i(), this.quality_i()],
        t
    },
    n.curCarName_i = function() {
        var t = new eui.Label;
        return this.curCarName = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = -1,
        t.size = 19.9990294579958,
        t.text = "战队荣耀机甲",
        t.textColor = 16777215,
        t.y = 0,
        t
    },
    n._Scroller1_i = function() {
        var t = new eui.Scroller;
        return t.height = 95,
        t.width = 229,
        t.x = 20.148,
        t.y = 302,
        t.viewport = this._Group1_i(),
        t
    },
    n._Group1_i = function() {
        var t = new eui.Group;
        return t.layout = this._VerticalLayout1_i(),
        t.elementsContent = [this.curCarDesc_i()],
        t
    },
    n._VerticalLayout1_i = function() {
        var t = new eui.VerticalLayout;
        return t.paddingTop = 2,
        t
    },
    n.curCarDesc_i = function() {
        var t = new eui.Label;
        return this.curCarDesc = t,
        t.fontFamily = "MFShangHei",
        t.scaleX = 1,
        t.scaleY = 1,
        t.size = 16,
        t.text = "战队荣耀机甲是曾经只属于战队王者的绝版奖励，现在被火星港的罗开复制出来推广给赛尔！绝版荣耀。值得拥有！（仅限拥有超No的用户使用！）",
        t.textColor = 8757203,
        t.width = 228,
        t.x = 0,
        t.y = 0,
        t
    },
    n.dress_i = function() {
        var t = new eui.Image;
        return this.dress = t,
        t.horizontalCenter = 0,
        t.source = "select_car_pop_dress_png",
        t.y = 422,
        t
    },
    n.descCarBg_i = function() {
        var t = new eui.Image;
        return this.descCarBg = t,
        t.source = "select_car_pop_desccarbg_png",
        t.x = 0,
        t.y = 64,
        t
    },
    n.descLine_i = function() {
        var t = new eui.Image;
        return this.descLine = t,
        t.source = "select_car_pop_descline_png",
        t.x = 14,
        t.y = 27,
        t
    },
    n.curSelectCar_i = function() {
        var t = new eui.Image;
        return this.curSelectCar = t,
        t.bottom = 225,
        t.horizontalCenter = .5,
        t.scaleX = .6,
        t.scaleY = .6,
        t
    },
    n.quality_i = function() {
        var t = new eui.Image;
        return this.quality = t,
        t.source = "select_car_pop_quality_png",
        t.visible = !1,
        t.x = 216,
        t.y = 36,
        t
    },
    n.search_i = function() {
        var t = new eui.Group;
        return this.search = t,
        t.x = 736,
        t.y = 43,
        t.elementsContent = [this._Image2_i(), this.txtSearch_i(), this.btnSearch_i()],
        t
    },
    n._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "select_car_pop_searchbg_png",
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
        t.maxChars = 11,
        t.prompt = "输入座驾名称",
        t.textColor = 6388143,
        t.width = 178.74,
        t.x = 16,
        t.y = 7.476,
        t.skinName = i,
        t
    },
    n.btnSearch_i = function() {
        var t = new eui.Image;
        return this.btnSearch = t,
        t.source = "select_car_pop_btnsearch_png",
        t.x = 209,
        t.y = 0,
        t
    },
    n.close_i = function() {
        var t = new eui.Image;
        return this.close = t,
        t.source = "change_name_pop_btnclose_png",
        t.x = 956,
        t.y = 0,
        t
    },
    n.none_i = function() {
        var t = new eui.Image;
        return this.none = t,
        t.source = "select_car_pop_none_png",
        t.visible = !1,
        t.x = 552,
        t.y = 220,
        t
    },
    n.scroller_i = function() {
        var t = new eui.Scroller;
        return this.scroller = t,
        t.height = 437,
        t.width = 712,
        t.x = 274,
        t.y = 84,
        t.viewport = this._list_i(),
        t
    },
    n._list_i = function() {
        var t = new eui.List;
        return this._list = t,
        t.itemRendererSkinName = SelectCarPopItemSkin,
        t.layout = this._TileLayout1_i(),
        t
    },
    n._TileLayout1_i = function() {
        var t = new eui.TileLayout;
        return t.requestedColumnCount = 3,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/renderItem/NameRBItemSkin.exml"] = window.NameRBItemSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["txt_desc"],
        this.height = 63,
        this.width = 171,
        this.elementsContent = [this._Image1_i(), this.txt_desc_i()],
        this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "help_mulit_pop_bg_up_png"), new eui.SetProperty("_Image1", "visible", !1), new eui.SetProperty("txt_desc", "textColor", 8036825)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "help_mulit_pop_bg_down_png"), new eui.SetProperty("txt_desc", "textColor", 15857151)]), new eui.State("disabled", [])]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return this._Image1 = t,
        t.percentHeight = 100,
        t.source = "help_mulit_pop_bg_down_png",
        t.percentWidth = 100,
        t
    },
    i.txt_desc_i = function() {
        var t = new eui.Label;
        return this.txt_desc = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = -1.5,
        t.size = 20,
        t.text = "每日任务",
        t.verticalCenter = 0,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/renderItem/OtherEquitItemSkin.exml"] = window.OtherEquitItemSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["partsIconBg", "partsIcon", "partsName", "parts"],
        this.height = 67,
        this.width = 64,
        this.elementsContent = [this.parts_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.parts_i = function() {
        var t = new eui.Group;
        return this.parts = t,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this.partsIconBg_i(), this.partsIcon_i(), this.partsName_i()],
        t
    },
    i.partsIconBg_i = function() {
        var t = new eui.Image;
        return this.partsIconBg = t,
        t.height = 64,
        t.source = "common_icon_bg_style_1_png",
        t.width = 64,
        t.x = 0,
        t.y = 2,
        t
    },
    i.partsIcon_i = function() {
        var t = new eui.Image;
        return this.partsIcon = t,
        t.height = 50,
        t.width = 50,
        t.x = 7,
        t.y = 8,
        t
    },
    i.partsName_i = function() {
        var t = new eui.Label;
        return this.partsName = t,
        t.fontFamily = "黑体",
        t.size = 24,
        t.text = "无",
        t.textColor = 4349074,
        t.x = 22,
        t.y = 23,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/renderItem/PersonalinformationNameFramePopItemSkin.exml"] = window.PersonalinformationNameFramePopItemSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["frame", "select", "using", "lock"],
        this.currentState = "up",
        this.height = 82,
        this.width = 176,
        this.elementsContent = [this._Group1_i()],
        this.states = [new eui.State("up", [new eui.SetProperty("select", "visible", !1)]), new eui.State("down", [])]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Group1_i = function() {
        var t = new eui.Group;
        return t.height = 82,
        t.width = 176,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image1_i(), this.frame_i(), this.select_i(), this.using_i(), this.lock_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "personalinformation_name_frame_pop_framebg_png",
        t.x = 8,
        t.y = 8,
        t
    },
    i.frame_i = function() {
        var t = new eui.Image;
        return this.frame = t,
        t.height = 45,
        t.width = 144,
        t.x = 20,
        t.y = 22,
        t
    },
    i.select_i = function() {
        var t = new eui.Image;
        return this.select = t,
        t.source = "personalinformation_name_frame_pop_select_png",
        t.x = .272,
        t.y = .681,
        t
    },
    i.using_i = function() {
        var t = new eui.Image;
        return this.using = t,
        t.source = "personalinformation_name_frame_pop_using_png",
        t.visible = !1,
        t.x = 122,
        t.y = 16,
        t
    },
    i.lock_i = function() {
        var t = new eui.Image;
        return this.lock = t,
        t.source = "personalinformation_name_frame_pop_lock_png",
        t.visible = !1,
        t.x = 16,
        t.y = 15,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/renderItem/ResourceCenterActItemSkin.exml"] = window.ResourceCenterActItemSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["item_bg", "icon", "item_name", "daily", "num", "bar", "bar0"],
        this.height = 70,
        this.width = 348,
        this.elementsContent = [this._Group1_i()]
    }
    __extends(e, t);
    var i = function(t) {
        function e() {
            t.call(this),
            this.skinParts = ["thumb"],
            this.elementsContent = [this.thumb_i()],
            this.states = [new eui.State("up", []), new eui.State("down", []), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i.thumb_i = function() {
            var t = new eui.Image;
            return this.thumb = t,
            t.source = "resource_center_act_yellow_progress_png",
            t.visible = !0,
            t.x = 0,
            t.y = 0,
            t
        },
        e
    } (eui.Skin),
    n = function(t) {
        function e() {
            t.call(this),
            this.skinParts = ["thumb"],
            this.elementsContent = [this.thumb_i()],
            this.states = [new eui.State("up", []), new eui.State("down", []), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i.thumb_i = function() {
            var t = new eui.Image;
            return this.thumb = t,
            t.source = "resource_center_act_red_progress_png",
            t.visible = !0,
            t.x = 0,
            t.y = 0,
            t
        },
        e
    } (eui.Skin),
    r = e.prototype;
    return r._Group1_i = function() {
        var t = new eui.Group;
        return t.horizontalCenter = 0,
        t.verticalCenter = 0,
        t.elementsContent = [this.item_bg_i(), this.icon_i(), this.item_name_i(), this.daily_i(), this.num_i(), this.bar_i(), this.bar0_i()],
        t
    },
    r.item_bg_i = function() {
        var t = new eui.Image;
        return this.item_bg = t,
        t.source = "resource_center_act_item_bg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    r.icon_i = function() {
        var t = new eui.Image;
        return this.icon = t,
        t.height = 50,
        t.horizontalCenter = -137,
        t.verticalCenter = 1,
        t.width = 50,
        t
    },
    r.item_name_i = function() {
        var t = new eui.Label;
        return this.item_name = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "赛尔豆",
        t.textColor = 16777215,
        t.x = 78,
        t.y = 7,
        t
    },
    r.daily_i = function() {
        var t = new eui.Label;
        return this.daily = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "每日获取上限: ",
        t.textColor = 12834813,
        t.x = 81.115,
        t.y = 47,
        t
    },
    r.num_i = function() {
        var t = new eui.Label;
        return this.num = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "3000000/10000000",
        t.textColor = 6027263,
        t.x = 186,
        t.y = 47.916,
        t
    },
    r.bar_i = function() {
        var t = new eui.ProgressBar;
        return this.bar = t,
        t.height = 14,
        t.value = 0,
        t.visible = !0,
        t.x = 81,
        t.y = 30,
        t.skinName = i,
        t
    },
    r.bar0_i = function() {
        var t = new eui.ProgressBar;
        return this.bar0 = t,
        t.height = 14,
        t.value = 0,
        t.visible = !1,
        t.x = 81,
        t.y = 30,
        t.skinName = n,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/renderItem/SelectCarPopItemSkin.exml"] = window.SelectCarPopItemSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["carName", "carIcon", "selectedIma"],
        this.currentState = "up",
        this.height = 244,
        this.width = 233,
        this.elementsContent = [this._Group1_i()],
        this.states = [new eui.State("down", [new eui.SetProperty("selectedIma", "visible", !0)]), new eui.State("up", [new eui.SetProperty("selectedIma", "visible", !1)])]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Group1_i = function() {
        var t = new eui.Group;
        return t.height = 244,
        t.width = 233,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image1_i(), this.carName_i(), this.carIcon_i(), this.selectedIma_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.horizontalCenter = .5,
        t.source = "select_car_pop_itembg_png",
        t.y = 6.719,
        t
    },
    i.carName_i = function() {
        var t = new eui.Label;
        return this.carName = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = .5,
        t.size = 18,
        t.text = "座驾名称",
        t.textColor = 9025023,
        t.y = 208.098,
        t
    },
    i.carIcon_i = function() {
        var t = new eui.Image;
        return this.carIcon = t,
        t.bottom = 69,
        t.horizontalCenter = 0,
        t.scaleX = .5,
        t.scaleY = .5,
        t
    },
    i.selectedIma_i = function() {
        var t = new eui.Image;
        return this.selectedIma = t,
        t.height = 244,
        t.horizontalCenter = 0,
        t.scale9Grid = new egret.Rectangle(20, 20, 20, 20),
        t.source = "select_car_pop_selected_png",
        t.touchEnabled = !1,
        t.width = 233,
        t.y = 0,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/renderItem/suitPageItemSkin.exml"] = window.personalInformation.suitPageItemSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "flag_selcted", "txt"],
        this.height = 39,
        this.width = 115,
        this.elementsContent = [this.bg_i(), this.flag_selcted_i(), this.txt_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.horizontalCenter = 0,
        t.source = "personalInformationMe_selected_1_png",
        t.verticalCenter = 0,
        t.visible = !0,
        t
    },
    i.flag_selcted_i = function() {
        var t = new eui.Image;
        return this.flag_selcted = t,
        t.height = 39,
        t.horizontalCenter = 0,
        t.scale9Grid = new egret.Rectangle(22, 21, 184, 94),
        t.source = "personalinformationidcardcardpop_selected_png",
        t.verticalCenter = 0,
        t.visible = !0,
        t.width = 115,
        t
    },
    i.txt_i = function() {
        var t = new eui.Label;
        return this.txt = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "1",
        t.textColor = 7177143,
        t.visible = !0,
        t.x = 55,
        t.y = 13,
        t
    },
    e
} (eui.Skin);