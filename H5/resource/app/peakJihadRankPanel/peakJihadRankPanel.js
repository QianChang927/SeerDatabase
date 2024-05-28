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
                h(n.next(e))
            } catch(t) {
                r(t)
            }
        }
        function s(e) {
            try {
                h(n["throw"](e))
            } catch(t) {
                r(t)
            }
        }
        function h(e) {
            e.done ? a(e.value) : new i(function(t) {
                t(e.value)
            }).then(o, s)
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
            if (a = 1, r && (o = r[2 & i[0] ? "return": i[0] ? "throw": "next"]) && !(o = o.call(r, i[1])).done) return o;
            switch (r = 0, o && (i = [0, o.value]), i[0]) {
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
                r = i[1],
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
    var a, r, o, s, h = {
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
peakJihadRankPanel; !
function(e) {
    e.curRankType = 1,
    e.curType = 1;
    var t = function(t) {
        function i() {
            var e = t.call(this) || this;
            return e._isEnd = !1,
            e._startIndx = 0,
            e.loading = !1,
            e._loaderLength = 20,
            e._maxLen = 500,
            e.rank_key = 94,
            e.sub_key = 20210526,
            e.userArr = new eui.ArrayCollection,
            e.selectS = [1, 1, 1],
            e.groupName = "PeakJihadRankPanel_groupName",
            e.skinName = PeakjihadRankPanelSkin,
            e
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            var i = this;
            t.prototype.childrenCreated.call(this),
            this.tabGroup = this.tab1.group,
            this.tabGroup.selectedValue = this.tab1.value,
            this.tab.visible = !1,
            this.initBtnClose("peakjihad_rank_panel_title_png", this),
            this.adaptBgByScale(this.bg),
            this._listUser.itemRenderer = e.PeakJihadRankPanelUserItem,
            this._listPet.itemRenderer = e.PeakJihadRankPanelPetItem,
            this._listSuit.itemRenderer = e.PeakJihadRankPanelSuitItem,
            this._listTitle.itemRenderer = e.PeakJihadRankPanelPetItem,
            this._listUser.dataProvider = this.userArr,
            this.icon0.source = ItemXMLInfo.getIconURL(PeakJihadController.itemId1),
            this.icon1.source = ItemXMLInfo.getIconURL(PeakJihadController.itemId2),
            ImageButtonUtil.add(this.icon0,
            function() {
                var e = {};
                e.id = PeakJihadController.itemId1,
                tipsPop.TipsPop.openItemPop(e)
            },
            this),
            ImageButtonUtil.add(this.icon1,
            function() {
                var e = {};
                e.id = PeakJihadController.itemId2,
                tipsPop.TipsPop.openItemPop(e)
            },
            this),
            EventManager.addEventListener(GameEvent.NOTIFY_ITEM_CHANGE, this.updateItemNum, this),
            this._scroUser.addEventListener(eui.UIEvent.CHANGE, this.loadUserRank, this),
            this.updateItemNum();
            var n = new MenuData;
            n["default"] = 1,
            n.groupName = this.groupName,
            n.root = [1, 2, 3, 4],
            n.data = {
                1 : {
                    title: "玩家排行"
                },
                2 : {
                    title: "精灵排行"
                },
                3 : {
                    title: "装扮排行"
                },
                4 : {
                    title: "称号排行"
                }
            },
            this.menu = Menu.createMenu(n, this.menuGroup),
            this.mainGroup.right = DeviceInfoManager.adapterOffSetX || 35,
            EventManager.addEventListener(BaseMenuEvent.BASE_MENU_SELECT_CHANGE_ + this.groupName, this.updateView, this),
            this.tabGroup.addEventListener(egret.Event.CHANGE, this.updateView, this),
            this.once(egret.Event.RENDER,
            function() {
                i.mainGroup.left = i.menuGroup.width + 20
            },
            this)
        },
        i.prototype.updateView = function() {
            var t = ~~this.menu.selectedValue;
            1 == t ? (this.tab.visible = !1, this.userGroup.visible = !0, this.petGroup.visible = this.titleGroup.visible = this.suitGroup.visible = !1) : (this.tab.visible = !0, this.tab3.visible = 2 == t, this.userGroup.visible = !1, this.suitGroup.visible = 3 == t, this.petGroup.visible = 2 == t, this.titleGroup.visible = 4 == t),
            this.sub_key = config.Pvp_task.getItem(1).subkey;
            var i = 0;
            t > 1 && (t != e.curRankType && (this.tabGroup.selectedValue = "" + this.selectS[t - 2]), i = ~~this.tabGroup.selectedValue, this.selectS[t - 2] = i, e.curType = i);
            var n;
            switch (e.curRankType = t, t) {
            case 1:
                this._loaderLength = 39,
                this.rank_key = 120,
                this.loadUserRank(),
                StatLogger.log("20240105巅峰圣战", "玩家打开`玩家排行`界面", "巅峰圣战新赛季2024");
                break;
            case 2:
                this.rank_key = [177, 93, 94][i - 1],
                this._loaderLength = 19,
                n = this._listPet,
                StatLogger.log("20240105巅峰圣战", "玩家打开`精灵排行`界面", "巅峰圣战新赛季2024");
                break;
            case 3:
                this._loaderLength = 4,
                this.rank_key = [174, 173][i - 1],
                n = this._listSuit,
                StatLogger.log("20240105巅峰圣战", "玩家打开`装扮排行`界面", "巅峰圣战新赛季2024");
                break;
            case 4:
                this.rank_key = [176, 175][i - 1],
                this._loaderLength = 4,
                n = this._listTitle,
                StatLogger.log("20240105巅峰圣战", "玩家打开`称号排行`界面", "巅峰圣战新赛季2024")
            }
            1 != t && this.loadOtherRank(n)
        },
        i.prototype.updateItemNum = function() {
            this.num0.text = String(ItemManager.getNumByID(PeakJihadController.itemId1)) + "/" + ItemXMLInfo.getMaxNum(PeakJihadController.itemId1),
            this.num1.text = String(ItemManager.getNumByID(PeakJihadController.itemId2)) + "/" + ItemXMLInfo.getMaxNum(PeakJihadController.itemId2)
        },
        i.prototype.loadUserRank = function() {
            var e = this,
            t = this._listUser; ! this._isEnd && t.contentHeight < t.scrollV + t.height && !this.loading && (this.loading = !0, this._startIndx = this.userArr.length, this._startIndx + this._loaderLength > this._maxLen && (this._loaderLength = this._maxLen - this._startIndx - 1), this.getRangeRankList(this.rank_key, this.sub_key, this._startIndx, this._startIndx + this._loaderLength).then(function(t) {
                return __awaiter(e, void 0, void 0,
                function() {
                    var e;
                    return __generator(this,
                    function(i) {
                        switch (i.label) {
                        case 0:
                            for ((t.length < this._loaderLength || this.userArr.length + t.length >= this._maxLen) && (this._isEnd = !0), e = 0; e < t.length; e++) this.userArr.addItem(KTool.clone(t[e]));
                            return [4, wait(1e3)];
                        case 1:
                            return i.sent(),
                            this.loading = !1,
                            [2]
                        }
                    })
                })
            }))
        },
        i.prototype.loadOtherRank = function(e) {
            var t = this;
            this.loading = !0,
            this.getRangeRankList(this.rank_key, this.sub_key, 0, this._loaderLength).then(function(i) {
                e.dataProvider = new eui.ArrayCollection(KTool.clone(i)),
                t.loading = !1
            })
        },
        i.prototype.getRangeRankList = function(e, t, i, n) {
            return __awaiter(this, void 0, void 0,
            function() {
                return __generator(this,
                function(a) {
                    return [2, new Promise(function(a) {
                        var r = [];
                        SocketConnection.sendByQueue(CommandID.GET_DAILY_RANK_INFO, [e, t, i, n],
                        function(e) {
                            var t = e.data;
                            t.position = 0;
                            for (var i = t.readUnsignedInt(), n = 0; i > n; n++) {
                                var o = t.readUnsignedInt(),
                                s = t.readUnsignedInt(),
                                h = t.readUTFBytes(16);
                                r.push({
                                    id: o,
                                    score: s,
                                    nick: h
                                })
                            }
                            a(r)
                        })
                    })]
                })
            })
        },
        i.prototype.destroy = function() {
            t.prototype.destroy.call(this),
            this._scroUser.removeEventListener(eui.UIEvent.CHANGE, this.loadUserRank, this),
            this._scroUser.removeEventListener(eui.UIEvent.CHANGE_END, this.loadUserRank, this),
            this.tabGroup.removeEventListener(egret.Event.CHANGE, this.updateView, this),
            this.menu && this.menu.destroy()
        },
        i
    } (BaseModule);
    e.PeakJihadRankPanel = t,
    __reflect(t.prototype, "peakJihadRankPanel.PeakJihadRankPanel")
} (peakJihadRankPanel || (peakJihadRankPanel = {}));
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
peakJihadRankPanel; !
function(e) {
    var t = function(t) {
        function i() {
            var e = t.call(this) || this;
            return e.color = [6153817, 16729413],
            e.skinName = PeakjihadRankPanelPetItemSkin,
            e
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            var i = this;
            t.prototype.childrenCreated.call(this),
            ImageButtonUtil.add(this.head,
            function() {
                2 == e.curRankType ? PetManager.showPetManualInfo(i.info.id, 1) : tipsPop.TipsPop.openTitlePop({
                    SpeNameBonus: i.info.id
                })
            },
            this)
        },
        i.prototype.dataChanged = function() {
            t.prototype.dataChanged.call(this),
            this.data && (this.info = this.data, this.update())
        },
        i.prototype.update = function() {
            var t = this.itemIndex + 1;
            this.icon.visible = 4 > t && t > 0,
            this.rankLevel.text = "" + t,
            this.rankLevel.visible = t > 3,
            4 > t && t > 0 && (this.icon.source = "peakjihad_rank_panel_icon_" + t + "_png");
            var i = this.info.score;
            this.rate.text = "" + core.gameUtil.ConvertItemNumView(i);
            var n = ["胜场：", "出场次数：", "禁止次数："];
            if (2 == e.curRankType) {
                this.petRate.text = "精灵" + n[e.curType - 1];
                var a = this.info.id;
                this.head.source = ClientConfig.getPetHeadPath(a),
                this.petName.text = PetXMLInfo.getName(a)
            } else {
                this.petRate.text = "称号" + n[e.curType - 1];
                var r = this.info.id;
                if (0 != AchieveXMLInfo.getTitleIconId(r)) {
                    var o = AchieveXMLInfo.getTitleColor(r);
                    this.head.source = 0 != o ? ClientConfig.getAchieveTitleIcon(r) : ClientConfig.getAchieveIcon(AchieveXMLInfo.getTitleIconId(r))
                } else {
                    var s = AchieveXMLInfo.getAchievePoint(r);
                    this.head.source = ClientConfig.getAchievePointIcon(s)
                }
                this.petName.text = AchieveXMLInfo.getTitle(r)
            }
            this.cacheAsBitmap = !0
        },
        i.prototype.destroy = function() {
            t.prototype.destroy.call(this),
            ImageButtonUtil.removeAll(this)
        },
        i
    } (BaseItemRenderer);
    e.PeakJihadRankPanelPetItem = t,
    __reflect(t.prototype, "peakJihadRankPanel.PeakJihadRankPanelPetItem")
} (peakJihadRankPanel || (peakJihadRankPanel = {}));
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
peakJihadRankPanel; !
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.skinName = PeakJihadRankPanelPopSkin,
            t
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            ImageButtonUtil.add(this.close, this.hide, this)
        },
        t.prototype.destroy = function() {
            e.prototype.destroy.call(this),
            ImageButtonUtil.removeAll(this)
        },
        t
    } (PopView);
    e.PeakJihadRankPanelPop = t,
    __reflect(t.prototype, "peakJihadRankPanel.PeakJihadRankPanelPop")
} (peakJihadRankPanel || (peakJihadRankPanel = {}));
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
peakJihadRankPanel; !
function(e) {
    var t = function(t) {
        function i() {
            var e = t.call(this) || this;
            return e.color = [6153817, 16729413],
            e.skinName = PeakjihadRankPanelSuitItemSkin,
            e
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            var e = this;
            t.prototype.childrenCreated.call(this),
            ImageButtonUtil.add(this.icon,
            function() {
                var t = {
                    id: e.data.id
                };
                tipsPop.TipsPop.openSuitPop(t)
            },
            this, !1)
        },
        i.prototype.dataChanged = function() {
            t.prototype.dataChanged.call(this),
            this.data && (this.info = this.data, this.update())
        },
        i.prototype.update = function() {
            var t = this.itemIndex + 1;
            this.rank.visible = 4 > t && t > 0,
            this.rankLevel.text = "" + t,
            this.rankLevel.visible = t > 3,
            4 > t && t > 0 && (this.rank.source = "peakjihad_rank_panel_icon_" + t + "_png");
            var i = this.info.score;
            this.rate.text = "" + core.gameUtil.ConvertItemNumView(i),
            this.petRate.text = 1 == e.curType ? "胜场：": "出场次数：";
            var n = this.data.id,
            a = SuitXMLInfo.getName(n);
            this.suitName.text = a.length > 8 ? a.substring(0, 7) + "...": a,
            ClientConfig.setSuitIconSize(n, this.icon, 130),
            this.cacheAsBitmap = !0
        },
        i.prototype.destroy = function() {
            t.prototype.destroy.call(this),
            ImageButtonUtil.removeAll(this)
        },
        i
    } (BaseItemRenderer);
    e.PeakJihadRankPanelSuitItem = t,
    __reflect(t.prototype, "peakJihadRankPanel.PeakJihadRankPanelSuitItem")
} (peakJihadRankPanel || (peakJihadRankPanel = {}));
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
peakJihadRankPanel; !
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.userInfo = null,
            t.color = [6153817, 16729413],
            t.skinName = PeakjihadRankPanelUserItemSkin,
            t
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.avatar.setScale(.62),
            ImageButtonUtil.add(this.avatar, this.onClickHead, this, !1, !1)
        },
        t.prototype.dataChanged = function() {
            e.prototype.dataChanged.call(this),
            this.data && (this.info = this.data, this.update())
        },
        t.prototype.update = function() {
            var e = this,
            t = this.itemIndex + 1;
            this.rankIcon.visible = 4 > t && t > 0,
            this.rankLevel.text = "" + t,
            this.rankLevel.visible = t > 3,
            4 > t && t > 0 && (this.rankIcon.source = "peakjihad_rank_panel_icon_" + t + "_png");
            var i = Math.floor(this.info.score / 1e5),
            n = Math.floor(this.info.score % 1e5);
            this.level.text = PeakJihadController.RATINGS_NAME[i] + n + (i >= 4 ? "星": "分"),
            this.levelIcon.source = ClientConfig.GetPeakjihadMiniLevelPath(i + 1),
            UserInfoManager.getInfo(this.info.id,
            function(t) {
                e.userInfo = t,
                e.avatar.setData({
                    headId: t.head_id,
                    headFrameId: t.head_frame_id
                }),
                e.userName.text = t.nick,
                e.userId.text = "" + t.userID,
                e.cacheAsBitmap = !0
            },
            this)
        },
        t.prototype.onClickHead = function(e) {
            if (this.userInfo) {
                var t = this.userInfo;
                ModuleManager.showModule("personalInformation", ["personalInformation"], t.userID, "PersonalinformationIdCardPopView", AppDoStyle.NULL)
            }
        },
        t.prototype.destroy = function() {
            e.prototype.destroy.call(this),
            ImageButtonUtil.removeAll(this)
        },
        t
    } (BaseItemRenderer);
    e.PeakJihadRankPanelUserItem = t,
    __reflect(t.prototype, "peakJihadRankPanel.PeakJihadRankPanelUserItem")
} (peakJihadRankPanel || (peakJihadRankPanel = {}));
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
generateEUI.paths["resource/eui_skins/PeakjihadRankPanelPetItemSkin.exml"] = window.PeakjihadRankPanelPetItemSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["icon", "rankLevel", "petName", "petRate", "rate", "head", "pet"],
        this.height = 99,
        this.width = 925,
        this.elementsContent = [this.pet_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i.pet_i = function() {
        var e = new eui.Group;
        return this.pet = e,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this._Image1_i(), this.icon_i(), this.rankLevel_i(), this.petName_i(), this.petRate_i(), this.rate_i(), this._Image2_i(), this.head_i()],
        e
    },
    i._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "peakjihad_rank_panel_itembg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.icon_i = function() {
        var e = new eui.Image;
        return this.icon = e,
        e.horizontalCenter = -377.5,
        e.source = "peakjihad_rank_panel_icon_1_png",
        e.verticalCenter = 0,
        e.visible = !1,
        e
    },
    i.rankLevel_i = function() {
        var e = new eui.Label;
        return this.rankLevel = e,
        e.fontFamily = "REEJI",
        e.horizontalCenter = -376.5,
        e.size = 30,
        e.text = "10",
        e.textColor = 16515067,
        e.verticalCenter = .5,
        e.visible = !0,
        e
    },
    i.petName_i = function() {
        var e = new eui.Label;
        return this.petName = e,
        e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "精灵名称名称",
        e.textColor = 4187130,
        e.x = 306,
        e.y = 40,
        e
    },
    i.petRate_i = function() {
        var e = new eui.Label;
        return this.petRate = e,
        e.fontFamily = "MFShangHei",
        e.right = 147,
        e.size = 20,
        e.text = "精灵胜率：",
        e.textColor = 12834813,
        e.y = 40,
        e
    },
    i.rate_i = function() {
        var e = new eui.Label;
        return this.rate = e,
        e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "56%",
        e.textColor = 6153817,
        e.x = 775,
        e.y = 39,
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.height = 72,
        e.source = "peakjihad_rank_panel_headbg_png",
        e.verticalCenter = 0,
        e.width = 72,
        e.x = 214,
        e
    },
    i.head_i = function() {
        var e = new eui.Image;
        return this.head = e,
        e.height = 70,
        e.source = "peakjihad_rank_panel_head_png",
        e.verticalCenter = 0,
        e.width = 70,
        e.x = 215,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/PeakjihadRankPanelPopSkin.exml"] = window.PeakJihadRankPanelPopSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["close"],
        this.height = 431,
        this.width = 753,
        this.elementsContent = [this._Image1_i(), this.close_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "peakjihad_rank_panel_pop_bg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.close_i = function() {
        var e = new eui.Image;
        return this.close = e,
        e.source = "peakjihad_rank_panel_pop_close_png",
        e.x = 712,
        e.y = 1,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/PeakjihadRankPanelSkin.exml"] = window.PeakjihadRankPanelSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["bg", "icon0", "num0", "icon1", "num1", "menuGroup", "tab1", "tab2", "tab3", "tab", "_listUser", "_scroUser", "userGroup", "_listPet", "_scroPet", "petGroup", "_listTitle", "_scroTitle", "titleGroup", "_listSuit", "_scroSuit", "suitGroup", "mainGroup"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this._Group3_i(), this.menuGroup_i(), this.mainGroup_i()]
    }
    __extends(t, e);
    var i = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["labelDisplay"],
            this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "peakjihad_rank_panel1_shenglv_up_png")]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.percentHeight = 100,
            e.source = "peakjihad_rank_panel1_shenglv_down_png",
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
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "peakjihad_rank_panel1_shiyonglv_up_png")]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.percentHeight = 100,
            e.source = "peakjihad_rank_panel1_shiyonglv_down_png",
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
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "peakjihad_rank_panel1_ban_up_png")]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.percentHeight = 100,
            e.source = "peakjihad_rank_panel1_ban_down_png",
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
    r = t.prototype;
    return r.bg_i = function() {
        var e = new eui.Image;
        return this.bg = e,
        e.horizontalCenter = 0,
        e.source = "peakjihad_common_panel_bg_jpg",
        e.verticalCenter = 0,
        e
    },
    r._Group3_i = function() {
        var e = new eui.Group;
        return e.cacheAsBitmap = !0,
        e.right = 60,
        e.top = 0,
        e.visible = !0,
        e.elementsContent = [this._Group1_i(), this._Group2_i()],
        e
    },
    r._Group1_i = function() {
        var e = new eui.Group;
        return e.right = 168,
        e.y = 12,
        e.elementsContent = [this._Image1_i(), this.icon0_i(), this.num0_i()],
        e
    },
    r._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "peak_jihad_rank_panel_item_num_bg_png",
        e.x = 0,
        e.y = 3.171,
        e
    },
    r.icon0_i = function() {
        var e = new eui.Image;
        return this.icon0 = e,
        e.height = 55,
        e.left = -2,
        e.scaleX = .7,
        e.scaleY = .7,
        e.width = 55,
        e.y = -6,
        e
    },
    r.num0_i = function() {
        var e = new eui.Label;
        return this.num0 = e,
        e.fontFamily = "MFShangHei",
        e.horizontalCenter = 15.5,
        e.size = 16,
        e.textColor = 13887988,
        e.y = 5,
        e
    },
    r._Group2_i = function() {
        var e = new eui.Group;
        return e.right = 7,
        e.y = 12,
        e.elementsContent = [this._Image2_i(), this.icon1_i(), this.num1_i()],
        e
    },
    r._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "peak_jihad_rank_panel_item_num_bg_png",
        e.x = 0,
        e.y = 2.108,
        e
    },
    r.icon1_i = function() {
        var e = new eui.Image;
        return this.icon1 = e,
        e.height = 55,
        e.left = -2,
        e.scaleX = .7,
        e.scaleY = .7,
        e.width = 55,
        e.y = -6,
        e
    },
    r.num1_i = function() {
        var e = new eui.Label;
        return this.num1 = e,
        e.fontFamily = "MFShangHei",
        e.horizontalCenter = 15.5,
        e.size = 16,
        e.textColor = 13887988,
        e.y = 5,
        e
    },
    r.menuGroup_i = function() {
        var e = new eui.Group;
        return this.menuGroup = e,
        e.visible = !0,
        e.x = 0,
        e.y = 48,
        e
    },
    r.mainGroup_i = function() {
        var e = new eui.Group;
        return this.mainGroup = e,
        e.left = 168,
        e.right = 35,
        e.y = 63,
        e.elementsContent = [this.tab_i(), this.userGroup_i(), this.petGroup_i(), this.titleGroup_i(), this.suitGroup_i()],
        e
    },
    r.tab_i = function() {
        var e = new eui.Group;
        return this.tab = e,
        e.visible = !0,
        e.x = 11,
        e.y = 1,
        e.elementsContent = [this.tab1_i(), this.tab2_i(), this.tab3_i()],
        e
    },
    r.tab1_i = function() {
        var e = new eui.RadioButton;
        return this.tab1 = e,
        e.groupName = "peakjihad_rankGroup",
        e.value = "1",
        e.x = 0,
        e.y = 0,
        e.skinName = i,
        e
    },
    r.tab2_i = function() {
        var e = new eui.RadioButton;
        return this.tab2 = e,
        e.groupName = "peakjihad_rankGroup",
        e.value = "2",
        e.x = 103,
        e.y = 0,
        e.skinName = n,
        e
    },
    r.tab3_i = function() {
        var e = new eui.RadioButton;
        return this.tab3 = e,
        e.groupName = "peakjihad_rankGroup",
        e.value = "3",
        e.x = 205,
        e.y = 0,
        e.skinName = a,
        e
    },
    r.userGroup_i = function() {
        var e = new eui.Group;
        return this.userGroup = e,
        e.height = 561,
        e.visible = !0,
        e.width = 926,
        e.x = 7,
        e.y = 0,
        e.elementsContent = [this._Image3_i(), this._scroUser_i()],
        e
    },
    r._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "peakjihad_rank_panel_userbg_png",
        e.x = 4,
        e.y = 0,
        e
    },
    r._scroUser_i = function() {
        var e = new eui.Scroller;
        return this._scroUser = e,
        e.height = 520.574,
        e.width = 926,
        e.x = 0,
        e.y = 40,
        e.viewport = this._listUser_i(),
        e
    },
    r._listUser_i = function() {
        var e = new eui.List;
        return this._listUser = e,
        e.layout = this._VerticalLayout1_i(),
        e
    },
    r._VerticalLayout1_i = function() {
        var e = new eui.VerticalLayout;
        return e
    },
    r.petGroup_i = function() {
        var e = new eui.Group;
        return this.petGroup = e,
        e.visible = !0,
        e.x = 7,
        e.y = 52,
        e.elementsContent = [this._scroPet_i()],
        e
    },
    r._scroPet_i = function() {
        var e = new eui.Scroller;
        return this._scroPet = e,
        e.height = 509,
        e.width = 926,
        e.x = 0,
        e.y = 0,
        e.viewport = this._listPet_i(),
        e
    },
    r._listPet_i = function() {
        var e = new eui.List;
        return this._listPet = e,
        e.layout = this._VerticalLayout2_i(),
        e
    },
    r._VerticalLayout2_i = function() {
        var e = new eui.VerticalLayout;
        return e
    },
    r.titleGroup_i = function() {
        var e = new eui.Group;
        return this.titleGroup = e,
        e.visible = !0,
        e.x = 7,
        e.y = 52,
        e.elementsContent = [this._scroTitle_i()],
        e
    },
    r._scroTitle_i = function() {
        var e = new eui.Scroller;
        return this._scroTitle = e,
        e.height = 509,
        e.width = 926,
        e.x = 0,
        e.y = 0,
        e.viewport = this._listTitle_i(),
        e
    },
    r._listTitle_i = function() {
        var e = new eui.List;
        return this._listTitle = e,
        e.layout = this._VerticalLayout3_i(),
        e
    },
    r._VerticalLayout3_i = function() {
        var e = new eui.VerticalLayout;
        return e
    },
    r.suitGroup_i = function() {
        var e = new eui.Group;
        return this.suitGroup = e,
        e.visible = !0,
        e.x = 7,
        e.y = 52,
        e.elementsContent = [this._scroSuit_i()],
        e
    },
    r._scroSuit_i = function() {
        var e = new eui.Scroller;
        return this._scroSuit = e,
        e.height = 509,
        e.width = 921,
        e.x = 0,
        e.y = 0,
        e.viewport = this._listSuit_i(),
        e
    },
    r._listSuit_i = function() {
        var e = new eui.List;
        return this._listSuit = e,
        e.itemRendererSkinName = PeakjihadRankPanelSuitItemSkin,
        e.layout = this._TileLayout1_i(),
        e
    },
    r._TileLayout1_i = function() {
        var e = new eui.TileLayout;
        return e.columnAlign = "left",
        e.horizontalAlign = "left",
        e.horizontalGap = 20,
        e.rowAlign = "top",
        e.verticalAlign = "top",
        e.verticalGap = 15,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/PeakjihadRankPanelSuitItemSkin.exml"] = window.PeakjihadRankPanelSuitItemSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["icon", "rank", "rankLevel", "suitName", "petRate", "rate", "suit"],
        this.height = 230,
        this.width = 215,
        this.elementsContent = [this.suit_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i.suit_i = function() {
        var e = new eui.Group;
        return this.suit = e,
        e.visible = !0,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this._Image1_i(), this.icon_i(), this.rank_i(), this.rankLevel_i(), this.suitName_i(), this.petRate_i(), this.rate_i()],
        e
    },
    i._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "peakjihad_rank_panel1_suitbg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.icon_i = function() {
        var e = new eui.Image;
        return this.icon = e,
        e.bottom = 57,
        e.horizontalCenter = 0,
        e.visible = !0,
        e
    },
    i.rank_i = function() {
        var e = new eui.Image;
        return this.rank = e,
        e.horizontalCenter = -73.5,
        e.source = "peakjihad_rank_panel_icon_1_png",
        e.verticalCenter = -91,
        e.visible = !1,
        e
    },
    i.rankLevel_i = function() {
        var e = new eui.Label;
        return this.rankLevel = e,
        e.fontFamily = "REEJI",
        e.horizontalCenter = -73.5,
        e.size = 30,
        e.text = "10",
        e.textColor = 16515067,
        e.visible = !0,
        e.y = 10.477,
        e
    },
    i.suitName_i = function() {
        var e = new eui.Label;
        return this.suitName = e,
        e.fontFamily = "MFShangHei",
        e.horizontalCenter = 0,
        e.size = 18,
        e.text = "套装名称",
        e.textColor = 9025023,
        e.y = 203.574,
        e
    },
    i.petRate_i = function() {
        var e = new eui.Label;
        return this.petRate = e,
        e.fontFamily = "MFShangHei",
        e.right = 47,
        e.size = 18,
        e.text = "胜率：",
        e.textColor = 12834813,
        e.y = 8,
        e
    },
    i.rate_i = function() {
        var e = new eui.Label;
        return this.rate = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "70%",
        e.textColor = 6153817,
        e.x = 166,
        e.y = 8,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/PeakjihadRankPanelUserItemSkin.exml"] = window.PeakjihadRankPanelUserItemSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["levelIcon", "rankIcon", "rankLevel", "userName", "userId", "level", "avatar"],
        this.height = 99,
        this.width = 925,
        this.elementsContent = [this._Group2_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Group2_i = function() {
        var e = new eui.Group;
        return e.x = 0,
        e.y = 0,
        e.elementsContent = [this._Image1_i(), this.levelIcon_i(), this.rankIcon_i(), this.rankLevel_i(), this.userName_i(), this.userId_i(), this.level_i(), this._Group1_i()],
        e
    },
    i._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "peakjihad_rank_panel_itembg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.levelIcon_i = function() {
        var e = new eui.Image;
        return this.levelIcon = e,
        e.height = 52,
        e.horizontalCenter = 280.5,
        e.source = "peakjihad_rank_panel_levelicon_png",
        e.verticalCenter = 0,
        e.width = 52,
        e
    },
    i.rankIcon_i = function() {
        var e = new eui.Image;
        return this.rankIcon = e,
        e.horizontalCenter = -377.5,
        e.source = "peakjihad_rank_panel_icon_1_png",
        e.verticalCenter = -.5,
        e.visible = !1,
        e
    },
    i.rankLevel_i = function() {
        var e = new eui.Label;
        return this.rankLevel = e,
        e.fontFamily = "REEJI",
        e.horizontalCenter = -376.5,
        e.size = 30,
        e.text = "10",
        e.textColor = 16515067,
        e.visible = !0,
        e.y = 35,
        e
    },
    i.userName_i = function() {
        var e = new eui.Label;
        return this.userName = e,
        e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "玩家名称名称",
        e.textColor = 4187130,
        e.x = 306,
        e.y = 40,
        e
    },
    i.userId_i = function() {
        var e = new eui.Label;
        return this.userId = e,
        e.fontFamily = "MFShangHei",
        e.horizontalCenter = 123.5,
        e.size = 20,
        e.text = "99999999",
        e.textColor = 12834813,
        e.y = 43,
        e
    },
    i.level_i = function() {
        var e = new eui.Label;
        return this.level = e,
        e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "圣皇999星",
        e.textColor = 16514896,
        e.x = 775,
        e.y = 41,
        e
    },
    i._Group1_i = function() {
        var e = new eui.Group;
        return e.height = 70,
        e.width = 70,
        e.x = 214,
        e.y = 15,
        e.elementsContent = [this.avatar_i()],
        e
    },
    i.avatar_i = function() {
        var e = new core.component.AvatarIcon;
        return this.avatar = e,
        e.horizontalCenter = 0,
        e.verticalCenter = 0,
        e
    },
    t
} (eui.Skin);