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
itemWarehouse; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.skinName = attributeItemSkin,
            e
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this),
            this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this)
        },
        e.prototype.dataChanged = function() {
            return this.mydata = this.data,
            null === this.data ? (this.img_icon.visible = !1, this.img_cancel.visible = !1, this.touchEnabled = !1, void(this.touchChildren = !1)) : (this.touchEnabled = !0, this.touchChildren = !0, this.img_icon.visible = this.mydata > 0, this.img_cancel.visible = !this.img_icon.visible, this.img_icon.visible ? (this.img_icon.source = ClientConfig.getpettypeticon(this.mydata + ""), this.guang.text = SkillXMLInfo.petTypeNameCN(this.mydata)) : this.guang.text = "所有", void(this.cacheAsBitmap = !0))
        },
        e.prototype.destroy = function() {
            this.mydata = null,
            this.data = null,
            this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this)
        },
        e
    } (eui.ItemRenderer);
    t.AttributeItem = e,
    __reflect(e.prototype, "itemWarehouse.AttributeItem")
} (itemWarehouse || (itemWarehouse = {}));
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
itemWarehouse; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.thumbOffSetLeft = 10,
            e.thumbOffSetRight = 10,
            e
        }
        return __extends(e, t),
        e.prototype.getThumbRange1 = function() {
            var t = egret.$TempRectangle;
            this.track.getLayoutBounds(t);
            var e = t.width;
            return this.thumb.getLayoutBounds(t),
            e - t.width + this.thumbOffSetLeft + this.thumbOffSetRight
        },
        e.prototype.updateSkinDisplayList = function() {
            if (this.thumb && this.track) {
                var t = this.$Range,
                e = this.getThumbRange1(),
                i = t[0] - t[2],
                n = i > 0 ? (this.pendingValue - t[2]) / i * e: 0,
                r = this.track.localToGlobal(n, 0, egret.$TempPoint),
                s = r.x,
                a = r.y,
                o = this.thumb.$parent.globalToLocal(s, a, egret.$TempPoint).x,
                u = egret.$TempRectangle;
                if (this.thumb.getLayoutBounds(u), this.thumb.setLayoutBoundsPosition(Math.round(o) - this.thumbOffSetLeft, u.y), this.trackHighlight && this.trackHighlight.$parent) {
                    var _ = this.trackHighlight.$parent.globalToLocal(s, a, egret.$TempPoint).x - n;
                    this.trackHighlight.x = Math.round(_),
                    this.trackHighlight.width = Math.round(n)
                }
            }
        },
        e
    } (eui.HSlider);
    t.ExchangeHSlider = e,
    __reflect(e.prototype, "itemWarehouse.ExchangeHSlider")
} (itemWarehouse || (itemWarehouse = {}));
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
        function a(t) {
            try {
                u(n.next(t))
            } catch(e) {
                s(e)
            }
        }
        function o(t) {
            try {
                u(n["throw"](t))
            } catch(e) {
                s(e)
            }
        }
        function u(t) {
            t.done ? r(t.value) : new i(function(e) {
                e(t.value)
            }).then(a, o)
        }
        u((n = n.apply(t, e || [])).next())
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
        for (; u;) try {
            if (r = 1, s && (a = s[2 & i[0] ? "return": i[0] ? "throw": "next"]) && !(a = a.call(s, i[1])).done) return a;
            switch (s = 0, a && (i = [0, a.value]), i[0]) {
            case 0:
            case 1:
                a = i;
                break;
            case 4:
                return u.label++,
                {
                    value: i[1],
                    done: !1
                };
            case 5:
                u.label++,
                s = i[1],
                i = [0];
                continue;
            case 7:
                i = u.ops.pop(),
                u.trys.pop();
                continue;
            default:
                if (a = u.trys, !(a = a.length > 0 && a[a.length - 1]) && (6 === i[0] || 2 === i[0])) {
                    u = 0;
                    continue
                }
                if (3 === i[0] && (!a || i[1] > a[0] && i[1] < a[3])) {
                    u.label = i[1];
                    break
                }
                if (6 === i[0] && u.label < a[1]) {
                    u.label = a[1],
                    a = i;
                    break
                }
                if (a && u.label < a[2]) {
                    u.label = a[2],
                    u.ops.push(i);
                    break
                }
                a[2] && u.ops.pop(),
                u.trys.pop();
                continue
            }
            i = e.call(t, u)
        } catch(n) {
            i = [6, n],
            s = 0
        } finally {
            r = a = 0
        }
        if (5 & i[0]) throw i[1];
        return {
            value: i[0] ? i[1] : void 0,
            done: !0
        }
    }
    var r, s, a, o, u = {
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
itemWarehouse; !
function(t) {
    var e = function(e) {
        function i(t) {
            var i = e.call(this) || this;
            return i.groupName = "leftBtn",
            i.arrayColletion = new eui.ArrayCollection([]),
            i.otherTypes = [[11], [10], [14, 15], [8], [7], [21]],
            i.allTypes = [7, 8, 10, 11, 14, 15, 21, 29, 30, 31, 35],
            i.currSelectIndex = 0,
            i._curRarity = [1, 2, 3, 4],
            i.gainWayArr = new eui.ArrayCollection,
            i.yinziCurrIndex = 0,
            i._currentAttributeID = [],
            i.allType = 1,
            i.composeLock = !1,
            i.skinName = "ItemWarehouseSkin",
            i._param = t,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var i, n, r, s = this;
                return __generator(this,
                function(a) {
                    switch (a.label) {
                    case 0:
                        return e.prototype.childrenCreated.call(this),
                        this.imgSeerDou.source = ClientConfig.getItemIcon(1),
                        this.imgDiamond.source = ClientConfig.getItemIcon(5),
                        e.prototype.initBtnClose.call(this, "item_warehouse_title_png", this),
                        [4, GainWayManger.init()];
                    case 1:
                        if (a.sent(), this.adaptLeftContent(this._scroller), this.adaptLeftContent(this.info), this.adaptLeftContent(this.grp_petfactorTop), this.adaptLeftContent(this.grpTop), this.adaptRightContent(this.grpCount), this.adaptRightContent(this.petfactorRight), this.adaptRightContent(this.detail), this.adaptRightContent(this.search), this._scroller.right = this.petfactorRight.right + 366, GameInfo.isChecking) for (i = 0; 6 > i; i++) 3 == i ? this.rb_sub3.x = 0 : (this["rb_sub" + i].visible = !1, this.rb_sub0.group.selectedValue = this.rb_sub3.value);
                        return this._scroller.viewport = this._list,
                        this._list.itemRenderer = t.ItemRender,
                        this._list.dataProvider = this.arrayColletion,
                        this.width = egret.lifecycle.stage.stageWidth,
                        this.height = egret.lifecycle.stage.stageHeight,
                        this.rb_sub0.group.addEventListener(egret.Event.CHANGE, this.changeSmallType, this),
                        this._list.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.onClickItem, this),
                        this.rb_jlhc.group.addEventListener(egret.Event.CHANGE, this.onChangePetFactorPage, this),
                        this._debosFunc = core.gameUtil.DeBounce(this.onSearchChanged, this, 100),
                        this.txtSearch.addEventListener(egret.Event.CHANGE, this._debosFunc, this),
                        this._circleMask = new egret.Shape,
                        this._circleMask.rotation = -90,
                        ImageButtonUtil.add(this.imgSeerDou,
                        function() {
                            tipsPop.TipsPop.openItemPop({
                                id: 1
                            })
                        },
                        this),
                        ImageButtonUtil.add(this.imgDiamond,
                        function() {
                            tipsPop.TipsPop.openItemPop({
                                id: 5
                            })
                        },
                        this),
                        EventManager.addEventListener(GameEvent.NOTIFY_ITEM_CHANGE, this.onItemChange, this),
                        EventManager.addEventListener(GameEvent.NOTIFY_SOUL_BEAD_CHANGE, this._onSoulBeadChange, this),
                        EventManager.addEventListener(GameEvent.NOTIFY_NUCLEUS_CHANGE, this._onNucleusChange, this),
                        EventManager.addEventListener(GameEvent.NOTIFY_ITEM_CHANGE, this.showItems, this),
                        EventManager.addEventListener(RobotEvent.DIAMOND_CHANGED, this.updateDiamond, this),
                        EventManager.addEventListener(RobotEvent.SEERDOU_CHANGE_EVENT, this.updateCoin, this),
                        EventManager.addEventListener(BaseMenuEvent.BASE_MENU_SELECT_CHANGE_ + this.groupName, this.changeBigType, this),
                        ImageButtonUtil.add(this.btnSale,
                        function(t) {
                            s.onSale(t)
                        },
                        this),
                        ImageButtonUtil.add(this.btnUse,
                        function(t) {
                            s.onUse(t)
                        },
                        this),
                        ImageButtonUtil.add(this.btnGo,
                        function() {
                            BubblerManager.getInstance().showText("暂未开放")
                        },
                        this),
                        ImageButtonUtil.add(this.btnhecheng,
                        function() {
                            s.onCompose()
                        },
                        this),
                        ImageButtonUtil.add(this.iconpet,
                        function() {
                            var t = s._list.selectedItem,
                            e = PetFragmentXMLInfo.getItemByID(t.itemID) || t;
                            ModuleManager.showModule("petManualInfo", ["pet_info_manual"], {
                                type: "pet",
                                data: e.MonsterID
                            })
                        },
                        this, !1, !1),
                        ImageButtonUtil.add(this.iconMark,
                        function() {
                            var t = [];
                            s._petFactorEffids.forEach(function(e) {
                                t.push(EffectIconControl.getConfigById( + e))
                            }),
                            ModuleManager.showModule("petEffDescPanel", ["pet_eff_desc_panel"], t, "", AppDoStyle.NULL)
                        },
                        this, !1, !1),
                        ImageButtonUtil.add(this.iconSkill,
                        function() {
                            var t = {};
                            t.id = s._petFiveSkillId,
                            tipsPop.TipsPop.openSkillPop(t)
                        },
                        this, !1, !1),
                        ImageButtonUtil.add(this.btnScreen,
                        function() {
                            PopViewManager.getInstance().openView(new t.ItemPetFactorScreenPop, PopViewManager.createDefaultStyleObject(), {
                                rarity: s._curRarity,
                                type: s._currentAttributeID,
                                allType: s.allType,
                                callBack: s.onScreen,
                                thisObj: s
                            })
                        },
                        this),
                        this.txt_canComb.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchCbTxt, this),
                        this.cb_canComb.addEventListener(egret.Event.CHANGE, this.updatePetFactorItems, this),
                        this.coin0.visible = !GameInfo.isChecking,
                        n = new MenuData,
                        n.groupName = this.groupName,
                        n.root = GameInfo.isChecking ? [2, 3, 4, 7, 6] : [1, 2, 3, 4, 5, 7, 6, 8],
                        n.data = {
                            1 : {
                                title: "全部"
                            },
                            2 : {
                                title: "最新获得"
                            },
                            3 : {
                                title: "礼箱"
                            },
                            4 : {
                                title: "重要"
                            },
                            5 : {
                                title: "活动"
                            },
                            7 : {
                                title: "精灵因子"
                            },
                            6 : {
                                title: "其他"
                            },
                            8 : {
                                title: "限时物品"
                            }
                        },
                        n["default"] = this._param ? ~~this._param.type: 2,
                        this.menu = Menu.createMenu(n, this.menuGroup),
                        this._param ? (r = 0, this.changeBigType().then(function() {
                            for (var t = 0; t < s._list.dataProvider.source.length; t++) if (s._list.dataProvider.source[t].MonsterID == s._param.petId) {
                                s._list.selectedIndex = t,
                                s.currSelectIndex = t,
                                r = t;
                                break
                            }
                            var e = 0;
                            e = (r + 1) % 5 == 0 ? Math.floor(r / 5) : Math.floor((r + 1) / 5);
                            var i = Math.floor(s._list.dataProvider.source.length / 5) - 3;
                            e = e > i ? i + .5 : e,
                            s.onShowPetFactorInfo(),
                            s.yinziCurrIndex = e,
                            s._param = null
                        })) : this.changeBigType(),
                        this.list_gainWay.itemRenderer = t.ItemTipsGainWayItem,
                        this.scoreller_gainWay.viewport = this.list_gainWay,
                        this.list_gainWay.dataProvider = this.gainWayArr,
                        this.list_gainWay.addEventListener(eui.ItemTapEvent.ITEM_TAP, this._onTouchGainWayItem, this),
                        this.showItems(),
                        this.checkLimitRedPoint(),
                        this._resize(),
                        [2]
                    }
                })
            })
        },
        i.prototype.updateCoin = function() {
            this.txtCoin1.text = core.gameUtil.ConvertItemNumView(MainManager.actorInfo.coins)
        },
        i.prototype.updateDiamond = function(t) {
            this.txtCoin0.text = core.gameUtil.ConvertItemNumView(t.data)
        },
        i.prototype.onTouchCbTxt = function() {
            this.cb_canComb.selected = !this.cb_canComb,
            this.updatePetFactorItems()
        },
        i.prototype._onTouchGainWayItem = function(t) {
            var e = this.gainWayArr.getItemAt(this.list_gainWay.selectedIndex);
            console.log('"+msg+"' + e.show),
            GainWayManger.setGainWayGoto(e,
            function() {})
        },
        i.prototype.onScreen = function(t, e, i) {
            this._curRarity = t,
            this._currentAttributeID = e,
            this.allType = i,
            this.updatePetFactorItems()
        },
        i.prototype._resize = function() {},
        i.prototype.checkLimitRedPoint = function() {
            for (var t = !1,
            e = ItemManager.getTimeLimitItems(), i = 0, n = e; i < n.length; i++) {
                var r = n[i],
                s = 1e3 * r.overTime - SystemTimerManager.sysBJDate.getTime(),
                a = Math.ceil(s / 864e5);
                if (3 >= a) {
                    t = !0;
                    break
                }
            }
            Menu.updateRed(this.groupName, 8, t)
        },
        i.prototype.showItems = function() {
            var t = this;
            UserInfoManager.getDiamond(function(e) {
                t.txtCoin0.text = core.gameUtil.ConvertItemNumView(e)
            },
            this),
            this.txtCoin1.text = core.gameUtil.ConvertItemNumView(MainManager.actorInfo.coins)
        },
        i.prototype.onSale = function(e) {
            var i = this._list.selectedItem,
            n = i.itemID,
            r = ItemManager.getCollectionInfo(n);
            ItemXMLInfo.getItemInfo(n);
            if (r.itemNum > 1) {
                var s = new t.ItemDialog,
                a = PopViewManager.createDefaultStyleObject();
                a.caller = this,
                a.clickMaskHandler = function() {},
                PopViewManager.getInstance().openView(s, a, {
                    id: n,
                    doType: 2
                })
            } else SocketConnection.sendByQueue(42398, [n, 1],
            function(t) {
                var e = t.data,
                i = e.readUnsignedInt();
                MainManager.actorInfo.coins = i,
                BubblerManager.getInstance().showText("交易完成")
            })
        },
        i.prototype.onUse = function(e) {
            var i = this._list.selectedItem,
            n = i.itemID,
            r = ItemXMLInfo.getItemInfo(n);
            if (1 == +r.itemObj.UseMax || 1 == i.itemNum) {
                var s = +r.itemObj.Sort;
                if (30 === s) {
                    var a = config.Boxordinary.getItemsByField("itemid", ["=="], [n])[0];
                    SocketConnection.sendByQueue(42394, [a.id, a.itemid, 1])
                } else if (7 === s) core.gameUtil.OpenEgg(3, i);
                else if (8 === s) core.gameUtil.OpenEgg(1, i);
                else if (21 === s) core.gameUtil.OpenEgg(2, i);
                else if (35 == s) {
                    var o = config.Treasure_chest_gift.getItemsByField("id", ["=="], [n])[0];
                    1 == o.type ? SocketConnection.sendByQueue(41952, [o.id, 1, 0]) : 2 == o.type && PopViewManager.getInstance().openView(new t.UseItemPop(o))
                } else BubblerManager.getInstance().showText("暂未开放,敬请期待")
            } else {
                var u = new t.ItemDialog,
                _ = PopViewManager.createDefaultStyleObject();
                _.caller = this,
                _.clickMaskHandler = function() {},
                PopViewManager.getInstance().openView(u, _, {
                    id: n,
                    doType: 1
                })
            }
        },
        i.prototype.onItemChange = function(t) {
            var e = t.data,
            i = ~~this.menu.selectedValue;
            if (7 == i) for (var n = 0; n < e.length; n++) {
                var r = PetFragmentXMLInfo.getItemByID(e[n]);
                if (r) {
                    this.updatePetFactorItems();
                    break
                }
            } else for (var n = this.currList.length - 1; n >= 0; n--) {
                var s = this.currList[n].itemID;
                if (e.indexOf(s) >= 0 && (this.arrayColletion.removeItemAt(n), ItemManager.getNumByID(s) > 0)) {
                    var a = ItemManager.getInfo(s);
                    this.arrayColletion.addItemAt(a, n)
                }
            }
            this.currSelectIndex >= this.currList.length ? (this._list.selectedIndex = this.currList.length - 1, this.currSelectIndex = this._list.selectedIndex) : this._list.selectedIndex = this.currSelectIndex,
            this.onClickItem(null)
        },
        i.prototype._onSoulBeadChange = function(t) {
            for (var e = t.data,
            i = this.currList.length - 1; i >= 0; i--) {
                var n = this.currList[i].obtainTime;
                n === e && this.arrayColletion.removeItemAt(i)
            }
            this.currSelectIndex >= this.currList.length ? (this._list.selectedIndex = this.currList.length - 1, this.currSelectIndex = this._list.selectedIndex) : this._list.selectedIndex = this.currSelectIndex,
            this.onClickItem(null)
        },
        i.prototype._onNucleusChange = function(t) {
            for (var e = t.data,
            i = this.currList.length - 1; i >= 0; i--) {
                var n = this.currList[i].gentm;
                n === e && this.arrayColletion.removeItemAt(i)
            }
            this.currSelectIndex >= this.currList.length ? (this._list.selectedIndex = this.currList.length - 1, this.currSelectIndex = this._list.selectedIndex) : this._list.selectedIndex = this.currSelectIndex,
            this.onClickItem(null)
        },
        i.prototype.changeBigType = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var t, e, i, n, r, s, a, o, u;
                return __generator(this,
                function(_) {
                    switch (_.label) {
                    case 0:
                        return this._param ? (t = ~~this._param.type, this.menu.selectedValue = t, this._petFactorPage = this.rb_jlhc.group.selectedValue = 1) : t = ~~this.menu.selectedValue || 2,
                        e = ItemManager.getCollectionInfos(),
                        this.changeListItemRender(t),
                        this.grpTop.visible = !1,
                        this.detail.visible = !1,
                        this.grp_petfactorTop.visible = this.petfactorRight.visible = !1,
                        this._scroller.viewport.scrollV = 0,
                        this.txtSearch.text = "",
                        6 == t || 7 == t ? (this._scroller.y = 103, this._scroller.height = 508) : (this._scroller.y = 82, this._scroller.height = 547),
                        1 != t ? [3, 2] : (StatLogger.log("1023版本系统功能", "物品界面", "点击【全部】页签按钮"), this.currList = [], i = this, [4, this.getItemsByType(this.allTypes)]);
                    case 1:
                        return i.currList = _.sent(),
                        ArrayUtil.sortOnMultParams(this.currList, [["rarity", ArrayUtil.DESCENDING], ["itemID", ArrayUtil.ASCENDING]]),
                        [3, 15];
                    case 2:
                        return 2 != t ? [3, 3] : (StatLogger.log("1023版本系统功能", "物品界面", "点击【最新获得】页签按钮"), this.currList = this.getLatelyItems(e), ArrayUtil.sortOnMultParams(this.currList, [["rarity", ArrayUtil.DESCENDING], ["itemID", ArrayUtil.ASCENDING]]), [3, 15]);
                    case 3:
                        return 3 != t ? [3, 5] : (StatLogger.log("1023版本系统功能", "物品界面", "点击【礼箱】页签按钮"), n = this, [4, this.getItemsByType([30, 35])]);
                    case 4:
                        return n.currList = _.sent(),
                        this.currList = this.getUnExpirItems(this.currList),
                        ArrayUtil.sortOnMultParams(this.currList, [["rarity", ArrayUtil.DESCENDING], ["itemID", ArrayUtil.ASCENDING]]),
                        [3, 15];
                    case 5:
                        return 4 != t ? [3, 7] : (StatLogger.log("1023版本系统功能", "物品界面", "点击【道具】页签按钮"), r = this, [4, this.getItemsByType([31])]);
                    case 6:
                        return r.currList = _.sent(),
                        this.currList = this.getUnExpirItems(this.currList),
                        ArrayUtil.sortOnMultParams(this.currList, [["rarity", ArrayUtil.DESCENDING], ["itemID", ArrayUtil.ASCENDING]]),
                        [3, 15];
                    case 7:
                        return 5 != t ? [3, 10] : (StatLogger.log("1023版本系统功能", "物品界面", "点击【收藏品】页签按钮"), [4, this.getItemsByType([30, 31])]);
                    case 8:
                        return s = _.sent(),
                        a = this.getExpirItems(s),
                        o = this,
                        [4, this.getItemsByType([29])];
                    case 9:
                        return o.currList = _.sent(),
                        this.currList = this.currList.concat(a),
                        ArrayUtil.sortOn(this.currList, "itemID", ArrayUtil.DESCENDING),
                        [3, 15];
                    case 10:
                        return 6 != t ? [3, 12] : (StatLogger.log("1023版本系统功能", "物品界面", "点击【其他】页签按钮"), u = this, [4, this.getItemsByType(this.otherTypes[~~this.rb_sub0.group.selectedValue || (GameInfo.isChecking ? 3 : 0)])]);
                    case 11:
                        return u.currList = _.sent(),
                        this.grpTop.visible = !0,
                        this.info.visible = !1,
                        ArrayUtil.sortOn(this.currList, "", ArrayUtil.DESCENDING),
                        [3, 15];
                    case 12:
                        return 7 !== t ? [3, 14] : (this.rb_jlhc.group.selection = this.rb_jlhc, this._scroller.viewport.scrollV = 140 * this.yinziCurrIndex, [4, this.getFilterPetFactorItems()]);
                    case 13:
                        return _.sent(),
                        this.grp_petfactorTop.visible = !0,
                        [3, 15];
                    case 14:
                        8 == t && (this.currList = ItemManager.getTimeLimitItems(), ArrayUtil.sortOnMultParams(this.currList, [["rarity", ArrayUtil.DESCENDING], ["itemID", ArrayUtil.ASCENDING], ["overTime", ArrayUtil.ASCENDING]])),
                        _.label = 15;
                    case 15:
                        return this.arrayColletion.removeAll(),
                        this.arrayColletion.replaceAll(this.currList),
                        this.validateNow(),
                        this._list.selectedIndex = this.currSelectIndex,
                        this.onClickItem(null),
                        [2, Promise.resolve()]
                    }
                })
            })
        },
        i.prototype.changeSmallType = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var t;
                return __generator(this,
                function(e) {
                    switch (e.label) {
                    case 0:
                        return t = this,
                        [4, this.getItemsByType(this.otherTypes[this.rb_sub0.group.selectedValue | (GameInfo.isChecking ? 3 : 0)])];
                    case 1:
                        return t.currList = e.sent(),
                        this.arrayColletion.removeAll(),
                        this.arrayColletion.replaceAll(this.currList),
                        this.validateNow(),
                        this.currSelectIndex = 0,
                        this._list.selectedIndex = this.currSelectIndex,
                        this.onClickItem(null),
                        [2, Promise.resolve()]
                    }
                })
            })
        },
        i.prototype.getLatelyItems = function(t) {
            for (var e = Date.now(), i = 6048e5, n = [], r = 0; r < t.length; r++) {
                var s = ItemXMLInfo.getItemInfo(t[r].itemID);
                if ("1" != s.itemObj.IsMidle && 1 != ~~s.itemObj.Hide) {
                    var a = ~~s.itemObj.Sort;
                    this.allTypes.indexOf(a) >= 0 && e - 1e3 * t[r].updateTime < i && n.push(t[r])
                }
            }
            return n
        },
        i.prototype.getItemsByType = function(t) {
            return __awaiter(this, void 0, void 0,
            function() {
                var e, i, n, r, s, a, o;
                return __generator(this,
                function(u) {
                    switch (u.label) {
                    case 0:
                        return e = [],
                        t.indexOf(7) >= 0 ? [4, ItemManager.getNucleusAsync()] : [3, 2];
                    case 1:
                        n = u.sent(),
                        e = e.concat(n),
                        u.label = 2;
                    case 2:
                        return t.indexOf(21) >= 0 ? [4, ItemManager.getSoulBeadAsync()] : [3, 4];
                    case 3:
                        i = u.sent(),
                        e = e.concat(i),
                        u.label = 4;
                    case 4:
                        for (r = ItemManager.getCollectionInfos(), s = 0; s < r.length; s++) a = ItemXMLInfo.getItemInfo(r[s].itemID),
                        o = +a.itemObj.Sort,
                        7 !== o && 21 !== o && "1" != a.itemObj.IsMidle && 1 != ~~a.itemObj.Hide && t.indexOf(o) >= 0 && e.push(r[s]);
                        return [2, Promise.resolve(e)]
                    }
                })
            })
        },
        i.prototype.getExpirItems = function(t) {
            for (var e = [], i = 0; i < t.length; i++) {
                var n = void 0,
                r = ItemXMLInfo.getItemInfo(t[i].itemID),
                s = t[i];
                if (r.itemObj.UseEnd && r.itemObj.UseEnd.length > 0 && (n = new Date(r.itemObj.UseEnd)), ~~r.itemObj.LifeTime > 0) {
                    var a = 24 * ~~r.itemObj.LifeTime * 3600 * 1e3;
                    n = new Date(s.updateTime + a)
                }
                n && Date.now() - n.getTime() > 0 && e.push(t[i])
            }
            return e
        },
        i.prototype.getUnExpirItems = function(t) {
            for (var e = t.length - 1; e >= 0; e--) {
                var i = void 0,
                n = ItemXMLInfo.getItemInfo(t[e].itemID),
                r = t[e];
                if (n.itemObj.UseEnd && (i = new Date(n.itemObj.UseEnd)), n.itemObj.HoldEnd) {
                    var s = 24 * ~~n.itemObj.HoldEnd * 3600 * 1e3;
                    i = new Date(r.updateTime + s)
                }
                i && Date.now() - i.getTime() > 0 && t.splice(e, 1)
            }
            return t
        },
        i.prototype.onSearchChanged = function(t) {
            var e = this.txtSearch.text.trim();
            if (this.arrayColletion.removeAll(), this._scroller.viewport.scrollV = 0, e.length > 0) if (7 === ~~this.menu.selectedValue && +e > 0) {
                var i = +e;
                for (var n in this.currList) {
                    var r = this.currList[n].MonsterID;
                    r === i && this.arrayColletion.addItem(this.currList[n])
                }
            } else {
                var s = !1;
                for (var n in this.currList) {
                    var a = ItemXMLInfo.getName(this.currList[n].itemID || this.currList[n].ID);
                    SearchUtil.isMatch(e, a) && (this.arrayColletion.addItem(this.currList[n]), s = !0)
                }
            } else this.arrayColletion.replaceAll(this.currList);
            this._list.selectedIndex = 0,
            this.onClickItem(null)
        },
        i.prototype.showDetail = function() {
            var t = this;
            this.detail.visible = !0,
            this.grp_detailFlag.removeChildren(),
            egret.clearInterval(this._limitInterval);
            var e = this._list.selectedItem;
            if (!e) return this.icon.source = null,
            this.txtName.text = "",
            this.txtCount.text = "拥有:0",
            this.txtDate.text = "",
            this.txtMsg.text = "",
            this.grpSale.visible = !1,
            void(this.btnContainer.visible = !1);
            var i = e.itemID;
            this.btnContainer.visible = !0;
            var n, r = ItemXMLInfo.getItemInfo(i),
            s = ~~r.itemObj.purpose;
            this.txtName.text = r.itemObj.Name,
            this.txtCount.text = "拥有:" + e.itemNum,
            IS_RELEASE || (this.txtCount.text += "\nitemid: " + r.id),
            this.txtCount.y = this.txtName.y + this.txtName.height + 6,
            this.grp_detailFlag.y = this.txtCount.y - 1,
            this.grp_detailFlag.x = Math.min(this.txtCount.x + this.txtCount.width + 7, 290),
            this.txtDate.y = this.txtName.y + this.txtName.height + 28;
            var a = ItemTipXMLInfo.getItemDes(i);
            if (a && 0 != a.length || (a = "漫长宇宙航行中收获的珍贵收藏品，记录着我们一路航行来的记忆"), this.txtMsg.text = a, this.txtDate.text = "", this.icon.source = ItemXMLInfo.getIconURL(i), this.iconBg.source = ItemXMLInfo.getRarityBg(i), this.grpSale.visible = !1, 3 == s || 2 == s) {
                this.grpSale.visible = !0;
                var o = ~~r.itemObj.Bean || 10;
                this.txtItemPrice.text = "" + o
            }
            if ((r.itemObj.UseEnd || r.itemObj.HoldEnd && e.updateTime || e.overTime) && this.grp_detailFlag.addChild(new eui.Image("item_warehouse_flag_limit_png")), r.itemObj.UseEnd && (this.txtDate.text = r.itemObj.UseEnd + "到期", n = new Date(r.itemObj.UseEnd)), r.itemObj.HoldEnd && e.updateTime) {
                var u = 24 * ~~r.itemObj.HoldEnd * 3600 * 1e3;
                n = new Date(e.updateTime + u),
                this.txtDate.text = n.getFullYear() + "/" + (n.getMonth() + 1) + "/" + n.getDate() + "到期"
            }
            if (e.overTime) {
                var u = 1e3 * e.overTime,
                _ = SystemTimerManager.sysBJDate.getTime();
                if (_ >= u) this.txtDate.text = "已到期";
                else {
                    var h = u - _,
                    c = Math.ceil(h / 864e5);
                    if (c >= 2) this.txtDate.text = c + "天到期";
                    else {
                        var l = Math.floor(h % 864e5 / 36e5),
                        g = Math.floor(h % 36e5 / 6e4);
                        this.txtDate.text = l + "h " + g + "min到期",
                        this._limitInterval = egret.setInterval(function() {
                            var e = SystemTimerManager.sysBJDate.getTime();
                            if (e >= u) return t.txtDate.text = "已到期",
                            void egret.clearInterval(t._limitInterval);
                            var i = u - e,
                            n = Math.floor(i % 864e5 / 36e5),
                            r = Math.floor(i % 36e5 / 6e4);
                            t.txtDate.text = n + "h " + r + "min到期"
                        },
                        this, 1e3)
                    }
                }
            }
            if (r.itemObj.Rarity && 1 != r.itemObj.Rarity, this.btnContainer.removeChildren(), 1 == s ? this.btnContainer.addChild(this.btnUse) : 2 == s ? this.btnContainer.addChild(this.btnSale) : 3 == s && (this.btnContainer.addChild(this.btnSale), this.btnContainer.addChild(this.btnUse), n && Date.now() - n.getTime() > 0 && this.btnUse.parent && this.btnUse.parent.removeChild(this.btnUse)), GainWayManger.getIsHaveTitleById(i) && !GameInfo.isChecking) {
                this.gr_gainWay.visible = !0;
                var m = GainWayManger.getGainWaysById(i);
                this.gainWayArr.replaceAll(m),
                this.gainWayArr.refresh(),
                this.list_gainWay.validateNow(),
                this.btnContainer.numChildren ? this.gr_gainWay.height = 150 : this.gr_gainWay.height = 225
            } else this.gr_gainWay.visible = !1
        },
        i.prototype.onClickItem = function(t) {
            if (null == t && (this.currSelectIndex = 0), 0 == this.arrayColletion.length) this.empty_tip.visible = !0,
            this.petfactorRight.visible = !1,
            this.detail.visible = !1;
            else {
                this.empty_tip.visible = !1;
                var e = +this.menu.selectedValue;
                7 === e ? (this._petFactorPage = +this.rb_jlhc.group.selectedValue, this.showPetFactorDetail()) : this.showDetail()
            }
        },
        i.prototype.showPetFactorDetail = function() {
            var t = this._list.selectedItem;
            return t ? (this.petfactorRight.visible = !0, void this.onShowPetFactorInfo()) : void(this.petfactorRight.visible = !1)
        },
        i.prototype.onChangePetFactorPage = function() {
            this._petFactorPage = +this.rb_jlhc.group.selectedValue,
            this.onShowPetFactorInfo()
        },
        i.prototype.onShowPetFactorInfo = function() {
            var t = this._list.selectedItem,
            e = ItemManager.getInfo(t.ID),
            i = 0,
            n = 0;
            switch (this.grpJlhc.visible = !1, this.head.visible = this.mark.visible = this.skill.visible = !1, this.grpNone.visible = !1, this.btnhecheng.visible = !1, this.grpJlhc.visible = !0, this.grpTxtProgress.visible = !0, this.dj.visible = !1, this._petFactorPage) {
            case 1:
                this.btnhecheng.visible = !0,
                this.iconpet.source = ClientConfig.getPetHeadPath(t.MonsterID);
                var r = PetFragmentXMLInfo.transformRarityNumToCn(t.Rarity);
                this.tagRarity.source = "item_warehouse_pet_factor_" + r.toLowerCase() + "_png",
                this.txtPetname.text = PetXMLInfo.getName(t.MonsterID),
                this.head.visible = !0,
                this.tagOnly.visible = 1 === +t.PetLimit,
                i = t.PetConsume,
                n = e ? e.itemNum: 0,
                this.dj.visible = !0;
                break;
            case 2:
                var s = t.effectId || "";
                s = s.toString(),
                "" != s ? (this._petFactorEffids = s.split("_").map(function(t) {
                    return + t
                }), this.mark.visible = !0, this.btnhecheng.visible = !0, this.dj.visible = !0, this.txtTexing.text = "专属特性", i = +t.NewseConsume, n = e ? e.itemNum: 0) : (this.grpTxtProgress.visible = !1, this.grpNone.visible = !0, this.txt_None.text = "此精灵暂无可用【精灵因子】\n开启的特性");
                break;
            case 3:
                var a = t.MoveID || 0;
                if (a = +a, this._petFiveSkillId = a, 0 != a) {
                    this.btnhecheng.visible = !0,
                    this.dj.visible = !0;
                    var o = "item_warehouse_icon_skill_png";
                    this.skill.visible = !0,
                    this.iconSkill.source = o,
                    this.txtMsg_kb_3.text = SkillXMLInfo.getName(a),
                    i = +t.MovesConsume,
                    n = e ? e.itemNum: 0
                } else this.grpNone.visible = !0,
                this.grpTxtProgress.visible = !1,
                this.txt_None.text = "此精灵暂无可用【精灵因子】\n开启的专属技能"
            }
            var u = n >= i;
            DisplayUtil.setEnabled(this.btnhecheng, u, !u),
            this.txtMsg_kb_2.text = n + "/" + i,
            this.dj.maximum = i,
            this.dj.value = n
        },
        i.prototype.changeListItemRender = function(e) {
            this._list.itemRenderer = 7 === e ? t.ItemPetFactorRender: t.ItemRender
        },
        i.prototype.onChangePetFactorSmallType = function(t) {
            this.updatePetFactorItems()
        },
        i.prototype.updatePetFactorItems = function() {
            var t = this;
            this.txtSearch.text = "";
            var e = this.currList[this._list.selectedIndex];
            this.getFilterPetFactorItems().then(function() {
                t.arrayColletion.removeAll(),
                t.arrayColletion.replaceAll(t.currList),
                t.validateNow(),
                t.updatePetIndex(e),
                t._list.selectedIndex = t.currSelectIndex,
                t._list.scrollV = 0,
                t.onClickItem(null)
            })
        },
        i.prototype.updatePetIndex = function(t) {
            if (t) for (var e = 0; e < this.currList.length; e++) {
                var i = this.currList[e].MonsterID;
                i === t.MonsterID && (this.currSelectIndex = e)
            } else this.currSelectIndex = 0
        },
        i.prototype.getFilterPetFactorItems = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var t, e, i, n, r, s, a = this;
                return __generator(this,
                function(o) {
                    return t = [],
                    e = PetFragmentXMLInfo.GetShowArrInfos(1),
                    i = function(t) {
                        var e = t.Rarity;
                        return a._curRarity.indexOf(e) > -1
                    },
                    n = [],
                    r = [],
                    s = [],
                    e.filter(function(t) {
                        var e = t,
                        o = e.MonsterID,
                        u = +PetXMLInfo.getType(o),
                        _ = i(e),
                        h = ItemManager.checkPetFactorRedFlag(t.ID, e),
                        c = ItemManager.getInfo(t.ID),
                        l = 1 == a.allType ? !0 : 2 == a.allType ? h: !c,
                        g = (a._currentAttributeID.indexOf(u) > -1 || !a._currentAttributeID.length) && l && _;
                        return g && (h ? n.push(t) : c ? r.push(t) : s.push(t)),
                        g
                    }),
                    this.currList = n.concat(r, s),
                    [2, Promise.resolve()]
                })
            })
        },
        i.prototype.onchangeItems = function() {
            this.updatePetFactorItems()
        },
        i.prototype.onCompose = function() {
            var e = this,
            i = this._list.selectedItem,
            n = PetFragmentXMLInfo.getItemByID(i.itemID) || i,
            r = PetXMLInfo.getName(n.MonsterID),
            s = this._petFactorPage;
            if (1 == s && n.NeedmonID && !PetManager.isDefaultPet(n.NeedmonID)) return void Alarm.show("请先将" + PetXMLInfo.getName(n.NeedmonID) + "设为首发位置!",
            function() {
                ModuleManager.showModuleByID(10)
            });
            if (s > 1 && !PetManager.isDefaultPet(n.MonsterID)) {
                var a = PetXMLInfo.getName(n.MonsterID);
                return void Alarm.show("请先将" + a + "设为首发位置!",
                function() {
                    ModuleManager.showModuleByID(10)
                })
            }
            var o, u, _ = 0;
            switch (s) {
            case 1:
                u = 1,
                o = "将消耗" + n.PetConsume + "个【" + r + "】因子,合成精灵【" + r + "】。此过程将额外消耗" + 100 * n.PetConsume + "赛尔豆。确认合成吗？";
                break;
            case 2:
                u = 2,
                _ = +n.NewSeIdx,
                o = "将消耗" + n.NewseConsume + "个【" + r + "】因子,合成专属特性。确认合成吗？";
                break;
            case 3:
                u = 3,
                o = "将消耗" + n.MovesConsume + "个【" + r + "】因子,合成专属技能。确认合成吗？"
            }
            var h = {
                desc: o,
                caller: this,
                callback: function() {
                    e.composeLock || (e.composeLock = !0, SocketConnection.sendWithPromise(41413, [i.itemID || i.ID, u, _]).then(function(t) {
                        return __awaiter(e, void 0, void 0,
                        function() {
                            var e, i, n, r;
                            return __generator(this,
                            function(a) {
                                switch (a.label) {
                                case 0:
                                    return e = t.data,
                                    i = e.readUnsignedInt(),
                                    0 !== i ? [3, 3] : (n = void 0, 2 === s ? n = "您已成功开启特性": 3 === s && (n = "您已成功开启技能"), n && BubblerManager.getInstance().showText(n), s > 1 ? [4, PetManager.UpdateBagPetInfoAsynce(PetManager.defaultTime)] : [3, 2]);
                                case 1:
                                    a.sent(),
                                    a.label = 2;
                                case 2:
                                    return [3, 4];
                                case 3:
                                    r = {
                                        2 : {
                                            1 : "首发精灵已经拥有该特性",
                                            2 : "首发精灵已拥有其他特性，无法再获得此特性"
                                        },
                                        3 : {
                                            1 : "首发精灵已经拥有该技能"
                                        }
                                    },
                                    Alarm.show(r[s][i]),
                                    a.label = 4;
                                case 4:
                                    return this.composeLock = !1,
                                    [2]
                                }
                            })
                        })
                    })["catch"](function() {
                        e.composeLock = !1
                    }))
                },
                type: s,
                fragement: n
            };
            PopViewManager.getInstance().openView(new t.PetFactorPop, null, h)
        },
        i.prototype.checkEffets = function(t) {
            var e = PetManager.getPetInfo(PetManager.defaultTime),
            i = t.effectId || "";
            i = i.toString();
            for (var n = i.split("_").map(function(t) {
                return + t
            }), r = 0; r < e.effectList.length; r++) {
                var s = e.effectList[r];
                if (n.indexOf(s.effectID) > -1) return Alarm.show("首发精灵已拥有该特性。"),
                !1
            }
            return e.effectList.length > 0 ? (Alarm.show("首发精灵已拥有其他特性，无法再获得此特性"), !1) : !0
        },
        i.prototype.checkSkill = function(t) {
            var e = PetManager.getPetInfo(PetManager.defaultTime);
            return e.hideSKill && e.hideSKill.id === +t.MoveID ? (Alarm.show("首发精灵已拥有该技能"), !1) : !0
        },
        i.prototype.destroy = function() {
            this.menu && this.menu.destroy(),
            this.txt_canComb.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchCbTxt, this),
            this.cb_canComb.removeEventListener(egret.Event.CHANGE, this.updatePetFactorItems, this),
            this._list.removeEventListener(eui.ItemTapEvent.ITEM_TAP, this.onClickItem, this),
            this.rb_sub0.group.removeEventListener(egret.Event.CHANGE, this.changeSmallType, this),
            this.txtSearch.removeEventListener(egret.Event.CHANGE, this._debosFunc, this),
            this.rb_jlhc.group.removeEventListener(egret.Event.CHANGE, this.onChangePetFactorPage, this),
            this.grp_detailFlag.removeChildren(),
            egret.clearInterval(this._limitInterval),
            e.prototype.destroy.call(this)
        },
        i
    } (BaseModule);
    t.ItemWarehouse = e,
    __reflect(e.prototype, "itemWarehouse.ItemWarehouse")
} (itemWarehouse || (itemWarehouse = {}));
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
itemWarehouse; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.skinName = t.comboBoxSkin,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.grpBox.visible = !1,
            this.list_item.itemRenderer = t.ComboBoxItem,
            this._arr = new eui.ArrayCollection([]),
            this.list_item.dataProvider = this._arr,
            this.grpTouch.touchEnabled = !0,
            this.addEvents()
        },
        i.prototype.addEvents = function() {
            this.list_item.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.onTouchItem, this),
            this.grpTouch.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onOpenBox, this)
        },
        i.prototype.removeEvents = function() {
            this.list_item.removeEventListener(eui.ItemTapEvent.ITEM_TAP, this.onTouchItem, this),
            this.grpTouch.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onOpenBox, this),
            egret.lifecycle.stage.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.checkClose, this)
        },
        i.prototype.setData = function(t) {
            this._customData = t,
            this._currentData = this._customData.defaultData,
            this.setTitle(this._currentData.title)
        },
        i.prototype.setTitle = function(t) {
            this.txtval.text = t
        },
        i.prototype.customData = function(t, e) {
            this._currentData = t,
            this.setTitle(e)
        },
        i.prototype.reset = function() {
            return this._currentData = this._customData.defaultData,
            this.setTitle(this._currentData.title),
            this._currentData
        },
        i.prototype.onOpenBox = function() {
            if (this.grpBox.visible) return void this.close();
            var t;
            t = this._customData.filterItemCallback ? this._customData.filterItemCallback.apply(this._customData.caller, [this._customData.list]) : this._customData.list;
            for (var e = [], i = 0; i < t.length; i++) e.push({
                d: t[i],
                last: i === t.length - 1
            });
            this._arr.replaceAll(e),
            this.openBox()
        },
        i.prototype.openBox = function() {
            var t = this;
            this.validateNow();
            var e = this.list_item.height;
            this.bg.height = e + this.list_item.y,
            this.grpBox.alpha = 0,
            this.grpBox.visible = !0,
            egret.Tween.get(this.grpBox).to({
                alpha: 1
            },
            100).call(function() {
                egret.lifecycle.stage.removeEventListener(egret.TouchEvent.TOUCH_TAP, t.checkClose, t),
                egret.lifecycle.stage.addEventListener(egret.TouchEvent.TOUCH_TAP, t.checkClose, t)
            })
        },
        i.prototype.onTouchItem = function(t) {
            this.close(),
            this._customData.callBack.apply(this._customData.caller, [t.item.d]),
            this._customData.disenableAutoSetTitle || (this._currentData = t.item.d, this.setTitle(this._currentData.title))
        },
        i.prototype.getCurrentData = function() {
            return this._currentData
        },
        i.prototype.close = function() {
            this.grpBox.visible = !1,
            egret.lifecycle.stage.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.checkClose, this)
        },
        i.prototype.checkClose = function(t) {
            t.stageX,
            t.stageY;
            var e = this.localToGlobal(0, 0),
            i = e.x,
            n = this.width + i,
            r = e.y,
            s = this.height + r;
            t.stageX >= i && t.stageX <= n && t.stageY >= r && t.stageY <= s || this.close()
        },
        i.prototype.destroy = function() {
            this.removeEvents()
        },
        i
    } (eui.Component);
    t.ComboBox = e,
    __reflect(e.prototype, "itemWarehouse.ComboBox")
} (itemWarehouse || (itemWarehouse = {}));
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
itemWarehouse; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t._curRarity = [1, 2, 3, 4],
            t._curType = [],
            t._curAllType = 1,
            t.skinName = ItemPetFactorScreenPopSkin,
            t
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            var i = this;
            e.prototype.childrenCreated.call(this),
            this.rbg_tab = this.rb_0.group,
            this.all_group = this.tab_all.group,
            this._list.itemRenderer = t.AttributeItem,
            this.rbg_tab.addEventListener(egret.Event.CHANGE, this.onChangeTab, this),
            this.all_group.addEventListener(egret.Event.CHANGE, this.onChangeAll, this),
            ImageButtonUtil.add(this.btnClose, this.hide, this),
            ImageButtonUtil.add(this.btnReset,
            function() {
                i._curRarity = [1, 2, 3, 4],
                i._curType = [],
                i._curAllType = 1,
                i.initView()
            },
            this),
            ImageButtonUtil.add(this.btnConfirm,
            function() {
                i.hide(),
                i._curRarity = [];
                for (var t = 1; 5 > t; t++) i["cb_" + t].selected && i._curRarity.push(t);
                i._callback.apply(i._thisObj, [i._curRarity, i._curType, i._curAllType])
            },
            this),
            this._list.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.onItemTap, this)
        },
        i.prototype.onItemTap = function(t) {
            var e = t.item;
            this._curType.indexOf(e) > -1 ? this._curType.splice(this._curType.indexOf(e), 1) : this._curType.push(e)
        },
        i.prototype.onChangeTab = function() {
            var t = ~~this.rbg_tab.selectedValue;
            this.showList(t)
        },
        i.prototype.onChangeAll = function() {
            this._curAllType = ~~this.all_group.selectedValue || 1
        },
        i.prototype.setData = function(t) {
            e.prototype.setData.call(this, t),
            t && t.rarity && (this._curRarity = t.rarity),
            t && t.type && (this._curType = t.type),
            t && t.allType && (this._curAllType = t.allType),
            t && t.callBack && (this._callback = t.callBack),
            t && t.thisObj && (this._thisObj = t.thisObj),
            this.initView()
        },
        i.prototype.initView = function() {
            for (var t = 1; 5 > t; t++) this["cb_" + t].selected = this._curRarity.indexOf(t) > -1;
            this.rb_0.selected = !0,
            this.showList(1),
            this["tab_" + ["all", "can", "not"][this._curAllType - 1]].selected = !0
        },
        i.prototype.showList = function(t) {
            for (var e = SkillXMLInfo.getAllTypes(), i = [], n = [], r = 0; r < e.length; r++) SkillXMLInfo.getTypeKind(e[r]) == t && (i.push(e[r]), this._curType.indexOf(e[r]) > -1 && n.push(i.length - 1));
            this._list.selectedIndices = n,
            this._list.dataProvider = new eui.ArrayCollection(i)
        },
        i.prototype.destroy = function() {
            e.prototype.destroy.call(this),
            this.rbg_tab.removeEventListener(egret.Event.CHANGE, this.onChangeTab, this),
            this.all_group.removeEventListener(egret.Event.CHANGE, this.onChangeAll, this),
            ImageButtonUtil.removeAll(this)
        },
        i
    } (PopView);
    t.ItemPetFactorScreenPop = e,
    __reflect(e.prototype, "itemWarehouse.ItemPetFactorScreenPop")
} (itemWarehouse || (itemWarehouse = {}));
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
itemWarehouse; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.skinName = t.ItemWarehousePetFactorPopSkin,
            i
        }
        return __extends(i, e),
        i.prototype.initEvents = function() {
            var t = this;
            ImageButtonUtil.add(this.btnOK,
            function() {
                t.hide();
                var e = t._data;
                e.callback.apply(e.caller, null)
            },
            this),
            ImageButtonUtil.add(this.BtnClose, this.hide, this)
        },
        i.prototype.removeEvents = function() {
            ImageButtonUtil.removeAll(this)
        },
        i.prototype._upDateView = function() {
            var t = this._data,
            e = StringUtil.str2Html(t.desc);
            switch ("string" == typeof e ? this.txtdesc.text = e: this.txtdesc.textFlow = e, t.type) {
            case 1:
                this.icon.source = ClientConfig.getPetHeadPath(t.fragement.MonsterID),
                this.icon.width = this.icon.height = 100,
                this.icon.x = 2,
                this.icon.y = 0,
                this.txtName.text = "兑换精灵";
                break;
            case 2:
                this.icon.source = "common_pet_yin_icon_png",
                this.txtName.text = "专属特性";
                break;
            case 3:
                this.icon.source = "item_warehouse_icon_skill_png",
                this.txtName.text = "第五技能"
            }
        },
        i.prototype.destroy = function() {},
        i
    } (PopView);
    t.PetFactorPop = e,
    __reflect(e.prototype, "itemWarehouse.PetFactorPop")
} (itemWarehouse || (itemWarehouse = {}));
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
itemWarehouse; !
function(t) {
    var e = function(e) {
        function i(t) {
            var i = e.call(this) || this;
            return i.TypeName = ["道具", "刻印", "道具", "道具", "道具", "皮肤", "道具", "道具", "道具"],
            i.skinName = "UseItemPopSkin",
            i.boxInfo = t,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            this.init(),
            this.addEvent()
        },
        i.prototype.init = function() {
            this.arrSelect = [];
            var e = this.boxInfo.rewardinfo.split(";").map(function(t, e) {
                return t.split("_").map(Number).concat([e + 1, !1])
            }),
            i = this.getAllRewardType(e);
            this.rewardTypeName = i > 0 ? this.TypeName[i - 1] : "道具",
            this.txt.textFlow = (new egret.HtmlTextParser).parse("请从以下" + e.length + "种" + this.rewardTypeName + "中选择<font color= #5de75a>" + this.boxInfo.count + "</font>种获得"),
            this.list.itemRenderer = t.UseItemPopItem,
            this.listData = new eui.ArrayCollection(e),
            this.list.dataProvider = this.listData
        },
        i.prototype.addEvent = function() {
            var t = this;
            ImageButtonUtil.add(this.btnClose, this.hide, this),
            ImageButtonUtil.add(this.btnReset,
            function() {
                t.arrSelect = [],
                t.list.dataProvider.source.forEach(function(t) {
                    t[4] = !1
                }),
                t.listData.refresh()
            },
            this),
            ImageButtonUtil.add(this.btnGet,
            function() {
                for (var e = 0,
                i = 0,
                n = 32; n >= 1; n--) t.arrSelect[n] && (e++, i++),
                n > 1 && (i <<= 1);
                return e != t.boxInfo.count ? void BubblerManager.getInstance().showText("未选取足够种类的" + t.rewardTypeName) : void SocketConnection.sendByQueue(41952, [t.boxInfo.id, 1, i],
                function() {
                    t.hide()
                })
            },
            this),
            EventManager.addEventListener("itemWarehouse.clickItemOfCustomBox", this.onClickItem, this)
        },
        i.prototype.onClickItem = function(t) {
            var e = t.data,
            i = e.index;
            if (this.arrSelect[i]) e.data[4] = !1,
            this.arrSelect[i] = !1,
            e.imgSelect.visible = !1;
            else {
                for (var n = 0,
                r = 32; r >= 1; r--) this.arrSelect[r] && n++;
                if (n >= this.boxInfo.count) return void BubblerManager.getInstance().showText("已达选取上限");
                e.data[4] = !0,
                this.arrSelect[i] = !0,
                e.imgSelect.visible = !0
            }
        },
        i.prototype.destroy = function() {
            EventManager.removeAll(this),
            ImageButtonUtil.removeAll(this),
            this.listData.removeAll(),
            e.prototype.destroy.call(this)
        },
        i.prototype.getAllRewardType = function(t) {
            for (var e = -1,
            i = 0; i < t.length; i++) {
                var n = parseInt(t[i][0]);
                if (0 > e && (e = n), e != n) return - 1
            }
            return e
        },
        i
    } (PopView);
    t.UseItemPop = e,
    __reflect(e.prototype, "itemWarehouse.UseItemPop")
} (itemWarehouse || (itemWarehouse = {}));
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
itemWarehouse; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.maxCount = 1,
            e._currentCount = 1,
            e.skinName = "ItemDialogSkin",
            e
        }
        return __extends(e, t),
        e.prototype.setData = function(e) {
            t.prototype.setData.call(this, e)
        },
        e.prototype.initialized = function() {
            t.prototype.initialized.call(this);
            var e = ItemXMLInfo.getItemInfo(this._data.id),
            i = ItemManager.getCollectionInfo(e.id),
            n = 0,
            r = config.Boxordinary.getItems();
            for (var s in r) r[s].itemid == this._data.id && (n = r[s].id);
            2 == this._data.doType ? (this.title.source = "item_dialog_title_sale_png", this.grpAbtain.visible = !0) : (this.title.source = "item_dialog_title_use_png", this.grpAbtain.visible = !1),
            this.icon.source = ItemXMLInfo.getIconURL(e.id),
            this.txtName.text = e.itemObj.Name;
            var a = ItemTipXMLInfo.getItemDes(e.id);
            a && 0 != a.length || (a = "漫长宇宙航行中收获的珍贵收藏品，记录着我们一路航行来的记忆"),
            this.txt_desc.text = a,
            this.maxCount = i.itemNum;
            var o = ~~e.itemObj.UseMax;
            o > 0 && (this.maxCount = Math.min(i.itemNum, o)),
            this.btnSale.visible = 2 == this._data.doType,
            this.btnOK.visible = 1 == this._data.doType,
            2 == this._data.doType ? (this._currentCount = this.maxCount, this.btnSale.visible = !0) : (this._currentCount = 1, this.btnOK.visible = !0),
            this.txtCount.text = this._currentCount + "/" + this.maxCount,
            this._slider.maximum = this.maxCount,
            this._slider.minimum = 1,
            this._slider.value = this._currentCount,
            this.changeHandler()
        },
        e.prototype.initEvents = function() {
            var t = this;
            ImageButtonUtil.add(this.btnClose,
            function() {
                t.hide()
            },
            this),
            ImageButtonUtil.add(this.btnReduce,
            function() {
                return t._currentCount <= 1 ? void BubblerManager.getInstance().showText("数量已经达到下限") : (t._currentCount--, t._slider.value = t._currentCount, void t.changeHandler())
            },
            this),
            ImageButtonUtil.add(this.btnPlus,
            function() {
                return t._currentCount >= t.maxCount ? void BubblerManager.getInstance().showText("数量已经达到上限") : (t._currentCount++, t._slider.value = t._currentCount, void t.changeHandler())
            },
            this),
            ImageButtonUtil.add(this.btnOK,
            function() {
                var e = ItemXMLInfo.getItemInfo(t._data.id);
                if (30 == ~~e.itemObj.Sort) {
                    var i = config.Boxordinary.getItemsByField("itemid", ["=="], [t._data.id])[0];
                    SocketConnection.sendByQueue(42394, [i.id, i.itemid, t._currentCount])
                } else if (35 == ~~e.itemObj.Sort) {
                    var n = config.Treasure_chest_gift.getItemsByField("id", ["=="], [t._data.id])[0];
                    1 == n.type && SocketConnection.sendByQueue(41952, [n.id, t._currentCount, 0])
                } else BubblerManager.getInstance().showText("暂未开放,敬请期待");
                t.hide()
            },
            this),
            ImageButtonUtil.add(this.btnSale,
            function() {
                SocketConnection.sendByQueue(42398, [t._data.id, t._currentCount],
                function(t) {
                    var e = t.data,
                    i = e.readUnsignedInt();
                    MainManager.actorInfo.coins = i,
                    BubblerManager.getInstance().showText("交易完成")
                }),
                t.hide()
            },
            this),
            this._slider.addEventListener(egret.Event.CHANGE, this.onChangeSlider, this)
        },
        e.prototype.onChangeSlider = function() {
            this._currentCount = this._slider.value,
            this.changeHandler()
        },
        e.prototype.changeHandler = function(t) {
            if (this.txtCount.text = this._currentCount + "/" + this.maxCount, 2 == this._data.doType) {
                var e = ItemXMLInfo.getItemInfo(this._data.id),
                i = ~~e.itemObj.Bean || 10;
                this.txt_count.text = "" + this._currentCount * i
            }
        },
        e.prototype.removeEvents = function() {
            ImageButtonUtil.removeAll(this)
        },
        e.prototype.destroy = function() {
            t.prototype.destroy.call(this)
        },
        e
    } (PopView);
    t.ItemDialog = e,
    __reflect(e.prototype, "itemWarehouse.ItemDialog")
} (itemWarehouse || (itemWarehouse = {}));
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
itemWarehouse; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.skinName = t.comboBoxItemSkin,
            i
        }
        return __extends(i, e),
        i.prototype.dataChanged = function() {
            this.txtTitle.text = this.data.d.title,
            this.line.visible = !this.data.last
        },
        i
    } (eui.ItemRenderer);
    t.ComboBoxItem = e,
    __reflect(e.prototype, "itemWarehouse.ComboBoxItem")
} (itemWarehouse || (itemWarehouse = {}));
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
itemWarehouse; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.skinName = t.ItemPetFactorRenderSkin,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this)
        },
        i.prototype.dataChanged = function() {
            var t = this.data,
            e = t.ID;
            if (this.icon.source = null, this.red.visible = !1, e > 0) {
                var i = PetFragmentXMLInfo.getItemByID(e),
                n = ItemManager.getInfo(e);
                this.txtCount.text = n ? core.gameUtil.ConvertItemNumView(n.itemNum) : "0",
                this.icon.source = ClientConfig.getPetHeadPath(i.MonsterID);
                var r = PetXMLInfo.getName(i.MonsterID);
                this.txtName.text = r.length > 6 ? r.substring(0, 5) + "...": r;
                var s = ItemManager.checkPetFactorRedFlag(e, i);
                this.red.visible = s,
                i.Rarity ? this.headFrame.source = "item_warehouse_petfactor_progress_wg_" + i.Rarity + "_png": this.headFrame.source = "item_warehouse_petfactor_progress_wg_1_png",
                this.rect.visible = null == n
            }
            this.cacheAsBitmap = !0
        },
        i
    } (eui.ItemRenderer);
    t.ItemPetFactorRender = e,
    __reflect(e.prototype, "itemWarehouse.ItemPetFactorRender")
} (itemWarehouse || (itemWarehouse = {}));
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
itemWarehouse; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.old2newRarity = [0, 1, 2, 3, 4, 5, 6],
            e.skinName = ItemWarehouseRenderSkin,
            e
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this)
        },
        e.prototype.dataChanged = function() {
            if (this.icon.source = null, this.tag.source = null, this.grp_timeLimit.visible = !1, this.data instanceof TimeLimitItemInfo) return void this.initTimeLimit();
            var t = this.data,
            e = t.itemID;
            if (e > 0) {
                this.txtCount.text = core.gameUtil.ConvertItemNumView(t.itemNum) + "",
                this.icon.source = ItemXMLInfo.getIconURL(e);
                var i = ItemXMLInfo.getItemInfo(e);
                if (i.itemObj.UseEnd) {
                    var n = new Date(i.itemObj.UseEnd).getTime(),
                    r = Date.now();
                    0 > r - n && (this.tag.source = "item_warehouse_tag_0_png")
                }
                if (i.itemObj.HoldEnd) {
                    var n = 24 * ~~i.itemObj.HoldEnd * 3600 * 1e3,
                    r = Date.now();
                    r - t.updateTime < n && (this.tag.source = "item_warehouse_tag_0_png")
                }
                i.itemObj.Rarity ? this.bg.source = "rarity_item_" + this.rarityTransform(i.itemObj.Rarity) + "_png": this.bg.source = "common_item_bg_style_70_70_png"
            }
            this.cacheAsBitmap = !0
        },
        e.prototype.initTimeLimit = function() {
            this.grp_timeLimit.visible = !0;
            var t = this.data,
            e = t.itemID;
            if (e > 0) {
                this.txtCount.text = core.gameUtil.ConvertItemNumView(t.itemNum) + "",
                this.icon.source = ItemXMLInfo.getIconURL(e);
                var i = ItemXMLInfo.getItemInfo(e);
                i.itemObj.Rarity ? this.bg.source = "rarity_item_" + this.rarityTransform(i.itemObj.Rarity) + "_png": this.bg.source = "common_item_bg_style_70_70_png";
                var n = 1e3 * t.overTime - SystemTimerManager.sysBJDate.getTime();
                if (n > 0) {
                    this.dayBg.visible = this.txt_day.visible = !0,
                    this.flag_overTime.visible = !1;
                    var r = Math.ceil(n / 864e5);
                    3 >= r ? this.dayBg.source = "item_warehouse_render_dayBg_1_png": this.dayBg.source = "item_warehouse_render_dayBg_png",
                    this.txt_day.text = r + "天"
                } else this.dayBg.visible = this.txt_day.visible = !1,
                this.flag_overTime.visible = !0
            }
        },
        e.prototype.rarityTransform = function(t) {
            return this.old2newRarity[t]
        },
        e
    } (eui.ItemRenderer);
    t.ItemRender = e,
    __reflect(e.prototype, "itemWarehouse.ItemRender")
} (itemWarehouse || (itemWarehouse = {}));
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
itemWarehouse; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.addEventListener(egret.Event.REMOVED_FROM_STAGE, e.destroy, e),
            e.skinName = "ItemWareHouse.ItemTipsGainWayItemSkin",
            e
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this),
            this._initEvents()
        },
        e.prototype._initEvents = function() {},
        e.prototype._removeEvents = function() {
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
            this._curData = this.data,
            "" == this._curData["goto"] && "" == this._curData.frontGoto && "" == this._curData.text ? (this.currentState = "state1", this._curData.show.length < 14 ? (this.tx_gainWayname_1.y = 10, this.tx_gainWayname_1.size = 18, this.tx_gainWayname_1.text = this._curData.show) : (this.tx_gainWayname_1.y = 4, this.tx_gainWayname_1.width = 250, this.tx_gainWayname_1.size = 14, this.tx_gainWayname_1.text = StringUtil.parseStrLimitLen(this._curData.show, 33)), this.touchEnabled = this.touchChildren = !1, this.tx_gainWayname_1.touchEnabled = !1, ImageButtonUtil.add(this.gr_gainWay_items,
            function() {
                console.log("111")
            },
            this, !1)) : (this.currentState = "state2", this._curData.show.length < 14 ? (this.tx_gainWayname_2.y = 10, this.tx_gainWayname_2.size = 18, this.tx_gainWayname_2.text = this._curData.show) : (this.tx_gainWayname_2.y = 4, this.tx_gainWayname_2.width = 250, this.tx_gainWayname_2.size = 14, this.tx_gainWayname_2.text = StringUtil.parseStrLimitLen(this._curData.show, 33)), this.touchEnabled = this.touchChildren = !0, this.tx_gainWayname_2.touchEnabled = !1, ImageButtonUtil.add(this.gr_gainWay_items,
            function() {
                console.log("222")
            },
            this, !1))
        },
        e.prototype.destroy = function() {
            this._removeEvents()
        },
        e
    } (eui.ItemRenderer);
    t.ItemTipsGainWayItem = e,
    __reflect(e.prototype, "itemWarehouse.ItemTipsGainWayItem")
} (itemWarehouse || (itemWarehouse = {}));
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
itemWarehouse; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.skinName = t.tabRender,
            i
        }
        return __extends(i, e),
        i.prototype.dataChanged = function() {
            this.txtTitle.text = "",
            this.setImgtile(this.currentState)
        },
        Object.defineProperty(i.prototype, "selected", {
            get: function() {
                return egret.superGetter(i, this, "selected")
            },
            set: function(t) {
                egret.superSetter(i, this, "selected", t),
                this.setImgtile(t ? "down": "up")
            },
            enumerable: !0,
            configurable: !0
        }),
        i.prototype.setImgtile = function(t) {
            if (this.data) {
                var e = this.data.title.toLowerCase(),
                i = t;
                this.imgTitle.source = "pet_factor_" + e + "_" + i + "_png"
            }
        },
        i
    } (eui.ItemRenderer);
    t.TabRender = e,
    __reflect(e.prototype, "itemWarehouse.TabRender")
} (itemWarehouse || (itemWarehouse = {}));
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
itemWarehouse; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.canClick = !1,
            e.skinName = "UseItemPopItemSkin",
            e
        }
        return __extends(e, t),
        e.prototype.dataChanged = function() {
            switch (this.canClick = !0, this.txtName.text = StringUtil.parseStrLimitLen(ItemXMLInfo.getName(this.data[1]), 6), this.txtNum.text = this.data[2], this.index = this.data[3], this.imgSelect.visible = this.data[4], this.data[0]) {
            case 1:
                this.imgIcon.source = ClientConfig.getItemIcon(this.data[1]);
                break;
            case 2:
                this.imgIcon.source = ClientConfig.getMarkPath(this.data[1]);
                break;
            case 6:
                this.imgIcon.x = 16,
                this.imgIcon.y = 2,
                this.imgIcon.width = 68,
                this.imgIcon.height = 68,
                this.imgIcon.source = ClientConfig.getResPath("assets/pet/head/" + (14e5 + this.data[1]) + ".png"),
                this.txtNum.text = "",
                this.txtName.text = StringUtil.parseStrLimitLen(PetSkinXMLInfo.getSkinInfo(this.data[1]).name, 6),
                PetSkinController.instance.haveSkin(this.data[1]) ? (DisplayUtil.setEnabled(this, !1), this.canClick = !1) : (DisplayUtil.setEnabled(this, !0), this.canClick = !0)
            }
        },
        e.prototype.childrenCreated = function() {
            var t = this;
            this.addEventListener(egret.TouchEvent.TOUCH_BEGIN,
            function() {
                var e, i = function() {
                    egret.clearTimeout(e),
                    t.onShortClick()
                };
                t.once(egret.TouchEvent.TOUCH_END, i, t),
                egret.lifecycle.stage.once(egret.TouchEvent.TOUCH_END,
                function() {
                    egret.clearTimeout(e),
                    t.removeEventListener(egret.TouchEvent.TOUCH_END, i, t)
                },
                t),
                e = egret.setTimeout(function() {
                    t.removeEventListener(egret.TouchEvent.TOUCH_END, i, t),
                    t.onLongClick()
                },
                t, 500)
            },
            this)
        },
        e.prototype.onShortClick = function() {
            this.canClick && EventManager.dispatchEventWith("itemWarehouse.clickItemOfCustomBox", !1, this)
        },
        e.prototype.onLongClick = function() {
            switch (this.data[0]) {
            case 1:
                tipsPop.TipsPop.openItemPop({
                    id:
                    this.data[1]
                });
                break;
            case 2:
                tipsPop.TipsPop.openCounterMarkPop({
                    ins:
                    this.data[1]
                });
                break;
            case 6:
                PetManager.showPetManualInfo(this.data[1], 2),
                PopViewManager.getInstance().hideAll()
            }
        },
        e
    } (eui.ItemRenderer);
    t.UseItemPopItem = e,
    __reflect(e.prototype, "itemWarehouse.UseItemPopItem")
} (itemWarehouse || (itemWarehouse = {})),
window.itemWarehouse = window.itemWarehouse || {},
window.ItemWareHouse = window.ItemWareHouse || {};
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
generateEUI.paths["resource/eui_skins/comp/comboBoxSkin.exml"] = window.itemWarehouse.comboBoxSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "list_item", "grpBox", "cbg0", "imgxiajiantou0", "txtval", "grpTouch"],
        this.width = 121,
        this.elementsContent = [this.grpBox_i(), this.cbg0_i(), this.imgxiajiantou0_i(), this.txtval_i(), this.grpTouch_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.grpBox_i = function() {
        var t = new eui.Group;
        return this.grpBox = t,
        t.visible = !0,
        t.x = 0,
        t.y = 31,
        t.elementsContent = [this.bg_i(), this.list_item_i()],
        t
    },
    i.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.scale9Grid = new egret.Rectangle(49, 24, 15, 10),
        t.source = "item_warehouse_petfactor_selectedbg_png",
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t
    },
    i.list_item_i = function() {
        var t = new eui.List;
        return this.list_item = t,
        t.width = 121,
        t.x = 0,
        t.y = 0,
        t
    },
    i.cbg0_i = function() {
        var t = new eui.Image;
        return this.cbg0 = t,
        t.source = "item_warehouse_petfactor_cbg_png",
        t.x = 1,
        t.y = 0,
        t
    },
    i.imgxiajiantou0_i = function() {
        var t = new eui.Image;
        return this.imgxiajiantou0 = t,
        t.source = "item_warehouse_petfactor_imgxiajiantou_png",
        t.touchEnabled = !1,
        t.x = 92,
        t.y = 7,
        t
    },
    i.txtval_i = function() {
        var t = new eui.Label;
        return this.txtval = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = -14,
        t.size = 16,
        t.text = "筛选：ALL",
        t.textColor = 11586047,
        t.y = 8,
        t
    },
    i.grpTouch_i = function() {
        var t = new eui.Group;
        return this.grpTouch = t,
        t.height = 35,
        t.width = 120,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/ExchangeHSliderSkin.exml"] = window.ExchangeHSliderSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["track", "trackHighlight", "thumb"],
        this.height = 28,
        this.width = 235,
        this.elementsContent = [this.track_i(), this.trackHighlight_i(), this.thumb_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.track_i = function() {
        var t = new eui.Image;
        return this.track = t,
        t.height = 14,
        t.source = "item_view_img_bar_png",
        t.width = 235,
        t.x = 0,
        t.y = 7,
        t
    },
    i.trackHighlight_i = function() {
        var t = new eui.Image;
        return this.trackHighlight = t,
        t.height = 13,
        t.source = "item_view_img_thumb_png",
        t.width = 235,
        t.x = 1,
        t.y = 8,
        t
    },
    i.thumb_i = function() {
        var t = new eui.Image;
        return this.thumb = t,
        t.height = 28,
        t.source = "item_view_img_point_png",
        t.width = 20,
        t.x = 108,
        t.y = 0,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/ItemDialogSkin.exml"] = window.ItemDialogSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["title", "btnClose", "imgMarkBg", "icon", "txtName", "txt_desc", "btnOK", "txt_count", "iconSale", "btnSale", "grpAbtain", "btnPlus", "_slider", "btnReduce", "grp_slider", "txtCount"],
        this.height = 285,
        this.width = 481,
        this.elementsContent = [this._Group1_i(), this.title_i(), this.btnClose_i(), this._Group2_i(), this.txtName_i(), this._Scroller1_i(), this.btnOK_i(), this.btnSale_i(), this.grpAbtain_i(), this.grp_slider_i(), this.txtCount_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Group1_i = function() {
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
    i.title_i = function() {
        var t = new eui.Image;
        return this.title = t,
        t.source = "item_dialog_title_use_png",
        t.visible = !0,
        t.x = 28,
        t.y = -2,
        t
    },
    i.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.source = "common_pop_btn_close_png",
        t.x = 438,
        t.y = 1,
        t
    },
    i._Group2_i = function() {
        var t = new eui.Group;
        return t.x = 26,
        t.y = 56,
        t.elementsContent = [this.imgMarkBg_i(), this.icon_i()],
        t
    },
    i.imgMarkBg_i = function() {
        var t = new eui.Image;
        return this.imgMarkBg = t,
        t.source = "item_view_imgMarkBg_png",
        t
    },
    i.icon_i = function() {
        var t = new eui.Image;
        return this.icon = t,
        t.height = 65,
        t.horizontalCenter = 0,
        t.source = "",
        t.verticalCenter = 0,
        t.width = 65,
        t
    },
    i.txtName_i = function() {
        var t = new eui.Label;
        return this.txtName = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "商品名称商品名称",
        t.textColor = 12834813,
        t.x = 150,
        t.y = 56,
        t
    },
    i._Scroller1_i = function() {
        var t = new eui.Scroller;
        return t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.height = 75,
        t.visible = !0,
        t.width = 304,
        t.x = 151,
        t.y = 81,
        t.viewport = this._Group3_i(),
        t
    },
    i._Group3_i = function() {
        var t = new eui.Group;
        return t.elementsContent = [this.txt_desc_i()],
        t
    },
    i.txt_desc_i = function() {
        var t = new eui.Label;
        return this.txt_desc = t,
        t.fontFamily = "MFShangHei",
        t.lineSpacing = 8,
        t.scaleX = 1,
        t.scaleY = 1,
        t.size = 16,
        t.text = "套装部件顶部套装部件顶部套装部件顶部套装部件顶部套装部件顶部套装部件顶部套装部件件顶部套装部件顶部套装部件顶部套装部件件顶部套装部件顶部套装部件顶部套装部件件顶部套装部件顶部套装部件顶部套装部件",
        t.textColor = 8757203,
        t.width = 304,
        t.x = 0,
        t.y = 0,
        t
    },
    i.btnOK_i = function() {
        var t = new eui.Image;
        return this.btnOK = t,
        t.source = "item_pet_factor_screen_pop_btnConfirm_png",
        t.visible = !1,
        t.x = 197,
        t.y = 228,
        t
    },
    i.btnSale_i = function() {
        var t = new eui.Group;
        return this.btnSale = t,
        t.visible = !0,
        t.x = 153,
        t.y = 228,
        t.elementsContent = [this._Image3_i(), this._Label1_i(), this._Image4_i(), this.txt_count_i(), this.iconSale_i()],
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.height = 35,
        t.source = "item_dialog_bluebg_png",
        t.width = 175,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "出售",
        t.textColor = 16777215,
        t.x = 126,
        t.y = 9,
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.height = 21,
        t.source = "item_dialog_line_png",
        t.width = 2,
        t.x = 113,
        t.y = 7,
        t
    },
    i.txt_count_i = function() {
        var t = new eui.Label;
        return this.txt_count = t,
        t.fontFamily = "MFShangHei",
        t.size = 18.0101510119682,
        t.text = "99999",
        t.textAlign = "center",
        t.textColor = 16777215,
        t.verticalAlign = "middle",
        t.width = 76,
        t.x = 35,
        t.y = 8,
        t
    },
    i.iconSale_i = function() {
        var t = new eui.Image;
        return this.iconSale = t,
        t.source = "item_dialog_coin_png",
        t.x = 10,
        t.y = 10,
        t
    },
    i.grpAbtain_i = function() {
        var t = new eui.Group;
        return this.grpAbtain = t,
        t.visible = !0,
        t.x = 204,
        t.y = 237,
        t
    },
    i.grp_slider_i = function() {
        var t = new eui.Group;
        return this.grp_slider = t,
        t.x = 82,
        t.y = 183,
        t.elementsContent = [this.btnPlus_i(), this._slider_i(), this.btnReduce_i()],
        t
    },
    i.btnPlus_i = function() {
        var t = new eui.Image;
        return this.btnPlus = t,
        t.height = 28,
        t.source = "item_view_btnAdd_png",
        t.width = 29,
        t.x = 289,
        t.y = 1,
        t
    },
    i._slider_i = function() {
        var t = new itemWarehouse.ExchangeHSlider;
        return this._slider = t,
        t.height = 28,
        t.minimum = 1,
        t.skinName = "ExchangeHSliderSkin",
        t.width = 235,
        t.x = 41,
        t.y = 0,
        t
    },
    i.btnReduce_i = function() {
        var t = new eui.Image;
        return this.btnReduce = t,
        t.height = 28,
        t.source = "item_view_btnSub_png",
        t.width = 29,
        t.x = 0,
        t.y = 1,
        t
    },
    i.txtCount_i = function() {
        var t = new eui.Label;
        return this.txtCount = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "数量：999",
        t.textAlign = "center",
        t.textColor = 4187130,
        t.width = 234,
        t.x = 123,
        t.y = 165,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/ItemWarehouseSkin.exml"] = window.ItemWarehouseSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "empty_tip", "menuGroup", "_list", "_scroller", "items", "info_bg", "txtInfo", "btnGo", "info", "btnScreen", "grp_petfactorTop", "rb_sub0", "rb_sub1", "rb_sub2", "rb_sub3", "rb_sub4", "rb_sub5", "grpTop", "txtCoin1", "imgSeerDou", "txtCoin0", "imgDiamond", "coin0", "grpCount", "rb_jlhc", "rb_texing", "rb_skill", "txt_None", "grpNone", "btnhecheng", "dj", "txtMsg_kb", "txtMsg_kb_2", "grpTxtProgress", "nonoPet", "iconpet", "tagRarity", "txtPetname", "tagOnly", "head", "iconMark", "txtTexing", "mark", "iconSkill", "txtMsg_kb_3", "skill", "grpJlhc", "petfactorRight", "cb_canComb", "txt_canComb", "grp_canComb", "info_bg2", "btnSale", "btnUse", "btnContainer", "iconBg", "icon", "item_tip_icon", "item_tip_bg", "txt1", "txt2", "txtItemPrice", "coin", "grpSale", "txtDate", "txtMsg", "txtName", "txtCount", "detail_flag", "grp_detailFlag", "list_gainWay", "scoreller_gainWay", "tx_title", "imge_title_icon", "gr_title", "imge_mask", "gr_gainWay", "detail", "common_search_bg_png", "btnSearch", "txtSearch", "search"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this._Image1_i(), this.empty_tip_i(), this.menuGroup_i(), this._scroller_i(), this.items_i(), this.info_i(), this.grp_petfactorTop_i(), this.grpTop_i(), this.grpCount_i(), this.petfactorRight_i(), this.grp_canComb_i(), this.detail_i(), this.search_i()]
    }
    __extends(e, t);
    var i = function(t) {
        function e() {
            t.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "item_warehousesub0_up_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "item_warehousesub0_down_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("disabled", [])]
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
    n = function(t) {
        function e() {
            t.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "item_warehousesub1_up_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "item_warehousesub1_down_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("disabled", [])]
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
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "item_warehousesub2_up_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "item_warehousesub2_down_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("disabled", [])]
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
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "item_warehousesub3_up_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "item_warehousesub3_down_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("disabled", [])]
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
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "item_warehousesub4_up_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "item_warehousesub4_down_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("disabled", [])]
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
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "item_warehousesub5_up_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "item_warehousesub5_down_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("disabled", [])]
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
    u = function(t) {
        function e() {
            t.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "item_warehouse_petfactorjlhc_up_png"), new eui.SetProperty("_Image1", "x", 4), new eui.SetProperty("_Image1", "y", 6)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "item_warehouse_petfactorjlhc_down_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("disabled", [])]
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
    _ = function(t) {
        function e() {
            t.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "item_warehouse_petfactortexing_up_png"), new eui.SetProperty("_Image1", "x", 4), new eui.SetProperty("_Image1", "y", 6)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "item_warehouse_petfactortexing_down_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("disabled", [])]
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
    h = function(t) {
        function e() {
            t.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "item_warehouse_petfactorskill_up_png"), new eui.SetProperty("_Image1", "x", 4), new eui.SetProperty("_Image1", "y", 6)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "item_warehouse_petfactorskill_down_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("disabled", [])]
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
    c = function(t) {
        function e() {
            t.call(this),
            this.skinParts = ["thumb"],
            this.elementsContent = [this._Image1_i(), this.thumb_i()],
            this.states = [new eui.State("up", []), new eui.State("down", []), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return t.height = 23,
            t.source = "item_warehouse_progress_bg_png",
            t.width = 303,
            t.x = 0,
            t.y = 0,
            t
        },
        i.thumb_i = function() {
            var t = new eui.Image;
            return this.thumb = t,
            t.height = 15,
            t.source = "item_warehouse_progress_png",
            t.width = 281,
            t.x = 11,
            t.y = 5,
            t
        },
        e
    } (eui.Skin),
    l = function(t) {
        function e() {
            t.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i()],
            this._Image2_i(),
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.AddItems("_Image2", "", 1, "")]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return t.height = 23,
            t.source = "item_warehouse_cbBg_png",
            t.width = 23,
            t.x = 0,
            t.y = 0,
            t
        },
        i._Image2_i = function() {
            var t = new eui.Image;
            return this._Image2 = t,
            t.height = 12,
            t.source = "item_warehouse_gou_png",
            t.width = 16,
            t.x = 4,
            t.y = 6,
            t
        },
        e
    } (eui.Skin),
    g = function(t) {
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
            t.textColor = 13097725,
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
            t.textColor = 13097725,
            t.touchEnabled = !1,
            t.verticalCenter = 0,
            t.percentWidth = 100,
            t
        },
        e
    } (eui.Skin),
    m = e.prototype;
    return m.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.bottom = 0,
        t.horizontalCenter = 0,
        t.left = 0,
        t.right = 0,
        t.source = "blurry_base_bg_jpg",
        t.top = 0,
        t.verticalCenter = 0,
        t.visible = !0,
        t
    },
    m._Image1_i = function() {
        var t = new eui.Image;
        return t.scale9Grid = new egret.Rectangle(248, 337, 360, 95),
        t.source = "itemWarehouse_mask_png",
        t.visible = !0,
        t.percentWidth = 100,
        t.x = 0,
        t.y = 0,
        t
    },
    m.empty_tip_i = function() {
        var t = new eui.Image;
        return this.empty_tip = t,
        t.horizontalCenter = 0,
        t.source = "item_warehouse_kongbai_png",
        t.visible = !0,
        t.y = 314,
        t
    },
    m.menuGroup_i = function() {
        var t = new eui.Group;
        return this.menuGroup = t,
        t.x = 0,
        t.y = 48,
        t
    },
    m._scroller_i = function() {
        var t = new eui.Scroller;
        return this._scroller = t,
        t.height = 508,
        t.left = 161,
        t.right = 372,
        t.y = 103,
        t.viewport = this._list_i(),
        t
    },
    m._list_i = function() {
        var t = new eui.List;
        return this._list = t,
        t.x = 0,
        t.y = 0,
        t.layout = this._TileLayout1_i(),
        t
    },
    m._TileLayout1_i = function() {
        var t = new eui.TileLayout;
        return t.horizontalGap = -8,
        t.orientation = "rows",
        t.verticalGap = -8,
        t
    },
    m.items_i = function() {
        var t = new eui.Group;
        return this.items = t,
        t.visible = !0,
        t.width = 603,
        t.x = 161,
        t.y = 103,
        t
    },
    m.info_i = function() {
        var t = new eui.Group;
        return this.info = t,
        t.visible = !1,
        t.x = 167,
        t.y = 64,
        t.elementsContent = [this.info_bg_i(), this.txtInfo_i(), this.btnGo_i()],
        t
    },
    m.info_bg_i = function() {
        var t = new eui.Image;
        return this.info_bg = t,
        t.height = 38,
        t.source = "item_warehouse_info_bg_png",
        t.width = 456,
        t.x = 0,
        t.y = 1,
        t
    },
    m.txtInfo_i = function() {
        var t = new eui.Label;
        return this.txtInfo = t,
        t.fontFamily = "黑体",
        t.size = 18,
        t.text = "能源研究站现已开启，参与物品回收活动，",
        t.textColor = 16777215,
        t.x = 12,
        t.y = 10,
        t
    },
    m.btnGo_i = function() {
        var t = new eui.Image;
        return this.btnGo = t,
        t.height = 40,
        t.source = "item_warehouse_btnGo_png",
        t.width = 94,
        t.x = 456,
        t.y = 0,
        t
    },
    m.grp_petfactorTop_i = function() {
        var t = new eui.Group;
        return this.grp_petfactorTop = t,
        t.height = 40,
        t.visible = !0,
        t.x = 171,
        t.y = 64,
        t.elementsContent = [this.btnScreen_i()],
        t
    },
    m.btnScreen_i = function() {
        var t = new eui.Image;
        return this.btnScreen = t,
        t.height = 35,
        t.source = "item_warehouse_btnScreen_png",
        t.width = 90,
        t.x = 0,
        t.y = 0,
        t
    },
    m.grpTop_i = function() {
        var t = new eui.Group;
        return this.grpTop = t,
        t.visible = !1,
        t.x = 171,
        t.y = 64,
        t.elementsContent = [this.rb_sub0_i(), this.rb_sub1_i(), this.rb_sub2_i(), this.rb_sub3_i(), this.rb_sub4_i(), this.rb_sub5_i()],
        t
    },
    m.rb_sub0_i = function() {
        var t = new eui.RadioButton;
        return this.rb_sub0 = t,
        t.groupName = "top",
        t.selected = !0,
        t.value = "0",
        t.x = 0,
        t.y = 0,
        t.skinName = i,
        t
    },
    m.rb_sub1_i = function() {
        var t = new eui.RadioButton;
        return this.rb_sub1 = t,
        t.groupName = "top",
        t.value = "1",
        t.x = 100,
        t.y = 0,
        t.skinName = n,
        t
    },
    m.rb_sub2_i = function() {
        var t = new eui.RadioButton;
        return this.rb_sub2 = t,
        t.groupName = "top",
        t.value = "2",
        t.x = 201,
        t.y = 0,
        t.skinName = r,
        t
    },
    m.rb_sub3_i = function() {
        var t = new eui.RadioButton;
        return this.rb_sub3 = t,
        t.groupName = "top",
        t.value = "3",
        t.x = 301,
        t.y = 0,
        t.skinName = s,
        t
    },
    m.rb_sub4_i = function() {
        var t = new eui.RadioButton;
        return this.rb_sub4 = t,
        t.groupName = "top",
        t.value = "4",
        t.x = 402,
        t.y = 0,
        t.skinName = a,
        t
    },
    m.rb_sub5_i = function() {
        var t = new eui.RadioButton;
        return this.rb_sub5 = t,
        t.groupName = "top",
        t.value = "5",
        t.x = 502,
        t.y = 0,
        t.skinName = o,
        t
    },
    m.grpCount_i = function() {
        var t = new eui.Group;
        return this.grpCount = t,
        t.right = 32,
        t.y = 10,
        t.elementsContent = [this._Image2_i(), this.txtCoin1_i(), this.imgSeerDou_i(), this.coin0_i()],
        t
    },
    m._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 21,
        t.source = "itemWarehouse_img_di2_png",
        t.width = 133,
        t.x = 30,
        t.y = 5,
        t
    },
    m.txtCoin1_i = function() {
        var t = new eui.Label;
        return this.txtCoin1 = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = -67,
        t.size = 18,
        t.text = "99999",
        t.textColor = 12834813,
        t.y = 6,
        t
    },
    m.imgSeerDou_i = function() {
        var t = new eui.Image;
        return this.imgSeerDou = t,
        t.height = 45,
        t.width = 45,
        t.x = 0,
        t.y = -7,
        t
    },
    m.coin0_i = function() {
        var t = new eui.Group;
        return this.coin0 = t,
        t.x = 174,
        t.y = 0,
        t.elementsContent = [this._Image3_i(), this.txtCoin0_i(), this.imgDiamond_i()],
        t
    },
    m._Image3_i = function() {
        var t = new eui.Image;
        return t.height = 21,
        t.source = "itemWarehouse_img_di2_png",
        t.width = 133,
        t.x = 18,
        t.y = 5,
        t
    },
    m.txtCoin0_i = function() {
        var t = new eui.Label;
        return this.txtCoin0 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "99999",
        t.textColor = 12834813,
        t.x = 56,
        t.y = 6,
        t
    },
    m.imgDiamond_i = function() {
        var t = new eui.Image;
        return this.imgDiamond = t,
        t.height = 30,
        t.width = 30,
        t.x = 0,
        t.y = 0,
        t
    },
    m.petfactorRight_i = function() {
        var t = new eui.Group;
        return this.petfactorRight = t,
        t.right = 16,
        t.visible = !0,
        t.width = 344,
        t.y = 108,
        t.elementsContent = [this._Image4_i(), this._Image5_i(), this._Group1_i(), this.grpJlhc_i()],
        t
    },
    m._Image4_i = function() {
        var t = new eui.Image;
        return t.height = 492,
        t.source = "item_warehouse_info_bg2_png",
        t.visible = !0,
        t.width = 344,
        t.x = 0,
        t.y = 0,
        t
    },
    m._Image5_i = function() {
        var t = new eui.Image;
        return t.height = 2,
        t.source = "item_warehouse_line_png",
        t.width = 328,
        t.x = 7,
        t.y = 234,
        t
    },
    m._Group1_i = function() {
        var t = new eui.Group;
        return t.x = 1,
        t.y = 2,
        t.elementsContent = [this.rb_jlhc_i(), this.rb_texing_i(), this.rb_skill_i()],
        t
    },
    m.rb_jlhc_i = function() {
        var t = new eui.RadioButton;
        return this.rb_jlhc = t,
        t.groupName = "petFactorPage",
        t.value = "1",
        t.x = 0,
        t.y = 0,
        t.skinName = u,
        t
    },
    m.rb_texing_i = function() {
        var t = new eui.RadioButton;
        return this.rb_texing = t,
        t.groupName = "petFactorPage",
        t.value = "2",
        t.x = 112,
        t.y = 0,
        t.skinName = _,
        t
    },
    m.rb_skill_i = function() {
        var t = new eui.RadioButton;
        return this.rb_skill = t,
        t.groupName = "petFactorPage",
        t.value = "3",
        t.x = 223,
        t.y = 0,
        t.skinName = h,
        t
    },
    m.grpJlhc_i = function() {
        var t = new eui.Group;
        return this.grpJlhc = t,
        t.visible = !0,
        t.x = 19,
        t.y = 56,
        t.elementsContent = [this.grpNone_i(), this.btnhecheng_i(), this.dj_i(), this.grpTxtProgress_i(), this.head_i(), this.mark_i(), this.skill_i()],
        t
    },
    m.grpNone_i = function() {
        var t = new eui.Group;
        return this.grpNone = t,
        t.x = 50,
        t.y = 188,
        t.elementsContent = [this._Image6_i(), this.txt_None_i()],
        t
    },
    m._Image6_i = function() {
        var t = new eui.Image;
        return t.source = "item_warehouse_txt_None_png",
        t.x = 59,
        t.y = 0,
        t
    },
    m.txt_None_i = function() {
        var t = new eui.Label;
        return this.txt_None = t,
        t.fontFamily = "MFShangHei",
        t.lineSpacing = 1,
        t.size = 16,
        t.text = "此精灵暂无可用【精灵因子】\n开启的技能",
        t.textAlign = "center",
        t.textColor = 9481720,
        t.x = -1,
        t.y = 78,
        t
    },
    m.btnhecheng_i = function() {
        var t = new eui.Image;
        return this.btnhecheng = t,
        t.height = 46,
        t.source = "item_warehouse_petfactor_btnhecheng1_png",
        t.visible = !0,
        t.width = 134,
        t.x = 86,
        t.y = 399,
        t
    },
    m.dj_i = function() {
        var t = new eui.ProgressBar;
        return this.dj = t,
        t.value = 0,
        t.x = 3,
        t.y = 119,
        t.skinName = c,
        t
    },
    m.grpTxtProgress_i = function() {
        var t = new eui.Group;
        return this.grpTxtProgress = t,
        t.visible = !0,
        t.x = 64,
        t.y = 144,
        t.elementsContent = [this.txtMsg_kb_i(), this.txtMsg_kb_2_i()],
        t
    },
    m.txtMsg_kb_i = function() {
        var t = new eui.Label;
        return this.txtMsg_kb = t,
        t.fontFamily = "MFShangHei",
        t.scaleX = 1,
        t.scaleY = 1,
        t.size = 18,
        t.text = "兑换进度：",
        t.textColor = 10990073,
        t.x = 0,
        t.y = 0,
        t
    },
    m.txtMsg_kb_2_i = function() {
        var t = new eui.Label;
        return this.txtMsg_kb_2 = t,
        t.fontFamily = "MFShangHei",
        t.scaleX = 1,
        t.scaleY = 1,
        t.size = 18,
        t.text = "999/999",
        t.textColor = 5752318,
        t.x = 90,
        t.y = 0,
        t
    },
    m.head_i = function() {
        var t = new eui.Group;
        return this.head = t,
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Group2_i(), this.txtPetname_i(), this.tagOnly_i()],
        t
    },
    m._Group2_i = function() {
        var t = new eui.Group;
        return t.visible = !0,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image7_i(), this.nonoPet_i(), this.iconpet_i(), this.tagRarity_i()],
        t
    },
    m._Image7_i = function() {
        var t = new eui.Image;
        return t.height = 101,
        t.source = "common_pet_head_bg_size_110_134_png",
        t.visible = !0,
        t.width = 101,
        t.x = 0,
        t.y = 0,
        t
    },
    m.nonoPet_i = function() {
        var t = new eui.Image;
        return this.nonoPet = t,
        t.scaleX = .5,
        t.scaleY = .5,
        t.source = "item_warehouse_pet_factor_nonoPet_png",
        t.x = 26,
        t.y = 26,
        t
    },
    m.iconpet_i = function() {
        var t = new eui.Image;
        return this.iconpet = t,
        t.height = 101,
        t.source = "",
        t.visible = !0,
        t.width = 101,
        t.x = 1,
        t.y = 0,
        t
    },
    m.tagRarity_i = function() {
        var t = new eui.Image;
        return this.tagRarity = t,
        t.source = "item_warehouse_pet_factor_ss_png",
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t
    },
    m.txtPetname_i = function() {
        var t = new eui.Label;
        return this.txtPetname = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "精灵名字名字名字名字",
        t.textColor = 12243199,
        t.x = 118,
        t.y = 7,
        t
    },
    m.tagOnly_i = function() {
        var t = new eui.Image;
        return this.tagOnly = t,
        t.source = "item_warehouse_pet_factor_txtPetname_kb_png",
        t.x = 118,
        t.y = 33,
        t
    },
    m.mark_i = function() {
        var t = new eui.Group;
        return this.mark = t,
        t.visible = !1,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Group3_i(), this.txtTexing_i()],
        t
    },
    m._Group3_i = function() {
        var t = new eui.Group;
        return t.height = 101,
        t.visible = !0,
        t.width = 101,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image8_i(), this.iconMark_i()],
        t
    },
    m._Image8_i = function() {
        var t = new eui.Image;
        return t.height = 101,
        t.source = "common_icon_bg_style_1_png",
        t.width = 101,
        t.x = 0,
        t.y = 0,
        t
    },
    m.iconMark_i = function() {
        var t = new eui.Image;
        return this.iconMark = t,
        t.horizontalCenter = 0,
        t.source = "common_pet_yin_icon_png",
        t.verticalCenter = 0,
        t
    },
    m.txtTexing_i = function() {
        var t = new eui.Label;
        return this.txtTexing = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "精灵名字名字名字名字",
        t.textColor = 12243199,
        t.x = 118,
        t.y = 7,
        t
    },
    m.skill_i = function() {
        var t = new eui.Group;
        return this.skill = t,
        t.visible = !1,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Group4_i(), this.txtMsg_kb_3_i()],
        t
    },
    m._Group4_i = function() {
        var t = new eui.Group;
        return t.height = 101,
        t.width = 101,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image9_i(), this.iconSkill_i()],
        t
    },
    m._Image9_i = function() {
        var t = new eui.Image;
        return t.height = 101,
        t.source = "common_icon_bg_style_1_png",
        t.width = 101,
        t.x = 0,
        t.y = 0,
        t
    },
    m.iconSkill_i = function() {
        var t = new eui.Image;
        return this.iconSkill = t,
        t.horizontalCenter = 0,
        t.verticalCenter = 0,
        t
    },
    m.txtMsg_kb_3_i = function() {
        var t = new eui.Label;
        return this.txtMsg_kb_3 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "精灵名字名字名字名字",
        t.textColor = 12243199,
        t.x = 118,
        t.y = 7,
        t
    },
    m.grp_canComb_i = function() {
        var t = new eui.Group;
        return this.grp_canComb = t,
        t.right = 196,
        t.visible = !1,
        t.y = 76,
        t.elementsContent = [this.cb_canComb_i(), this.txt_canComb_i()],
        t
    },
    m.cb_canComb_i = function() {
        var t = new eui.CheckBox;
        return this.cb_canComb = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.x = 58,
        t.y = 0,
        t.skinName = l,
        t
    },
    m.txt_canComb_i = function() {
        var t = new eui.Label;
        return this.txt_canComb = t,
        t.fontFamily = "MFShangHei",
        t.scaleX = 1,
        t.scaleY = 1,
        t.size = 18,
        t.text = "可合成",
        t.textColor = 5008299,
        t.x = 0,
        t.y = 4,
        t
    },
    m.detail_i = function() {
        var t = new eui.Group;
        return this.detail = t,
        t.right = 16,
        t.visible = !0,
        t.y = 108,
        t.elementsContent = [this.info_bg2_i(), this.btnContainer_i(), this.iconBg_i(), this.icon_i(), this.item_tip_icon_i(), this._Image10_i(), this.grpSale_i(), this.txtDate_i(), this.txtMsg_i(), this.txtName_i(), this.txtCount_i(), this.detail_flag_i(), this.grp_detailFlag_i(), this.gr_gainWay_i()],
        t
    },
    m.info_bg2_i = function() {
        var t = new eui.Image;
        return this.info_bg2 = t,
        t.height = 492,
        t.source = "item_warehouse_info_bg2_png",
        t.width = 344,
        t.x = 0,
        t.y = 0,
        t
    },
    m.btnContainer_i = function() {
        var t = new eui.Group;
        return this.btnContainer = t,
        t.horizontalCenter = 0,
        t.visible = !0,
        t.y = 450,
        t.layout = this._HorizontalLayout1_i(),
        t.elementsContent = [this.btnSale_i(), this.btnUse_i()],
        t
    },
    m._HorizontalLayout1_i = function() {
        var t = new eui.HorizontalLayout;
        return t.gap = 12,
        t.horizontalAlign = "center",
        t
    },
    m.btnSale_i = function() {
        var t = new eui.Image;
        return this.btnSale = t,
        t.source = "item_warehouse_btnSale_png",
        t.x = 104,
        t.y = 0,
        t
    },
    m.btnUse_i = function() {
        var t = new eui.Image;
        return this.btnUse = t,
        t.source = "item_warehouse_btnUse_png",
        t.x = 0,
        t.y = 0,
        t
    },
    m.iconBg_i = function() {
        var t = new eui.Image;
        return this.iconBg = t,
        t.height = 73,
        t.source = "item_warehouse_render_bg_png",
        t.width = 73,
        t.x = 28,
        t.y = 20,
        t
    },
    m.icon_i = function() {
        var t = new eui.Image;
        return this.icon = t,
        t.height = 51,
        t.source = "",
        t.width = 51,
        t.x = 39,
        t.y = 31,
        t
    },
    m.item_tip_icon_i = function() {
        var t = new eui.Label;
        return this.item_tip_icon = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 18,
        t.text = "物品说明：",
        t.textColor = 6591987,
        t.visible = !0,
        t.x = 28,
        t.y = 128,
        t
    },
    m._Image10_i = function() {
        var t = new eui.Image;
        return t.height = 1,
        t.source = "item_warehouse_detailLine_png",
        t.width = 332,
        t.x = 5,
        t.y = 110,
        t
    },
    m.grpSale_i = function() {
        var t = new eui.Group;
        return this.grpSale = t,
        t.visible = !0,
        t.x = 35,
        t.y = 420,
        t.elementsContent = [this.item_tip_bg_i(), this.txt1_i(), this.txt2_i(), this.txtItemPrice_i(), this.coin_i()],
        t
    },
    m.item_tip_bg_i = function() {
        var t = new eui.Image;
        return this.item_tip_bg = t,
        t.source = "item_warehouse_item_tip_bg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    m.txt1_i = function() {
        var t = new eui.Label;
        return this.txt1 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "该物品不可出售",
        t.textColor = 16777215,
        t.visible = !1,
        t.x = 81,
        t.y = 6,
        t
    },
    m.txt2_i = function() {
        var t = new eui.Label;
        return this.txt2 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "出售单价",
        t.textColor = 12435947,
        t.visible = !0,
        t.x = 67,
        t.y = 3,
        t
    },
    m.txtItemPrice_i = function() {
        var t = new eui.Label;
        return this.txtItemPrice = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = ":0000",
        t.textColor = 12435947,
        t.visible = !0,
        t.x = 168,
        t.y = 3,
        t
    },
    m.coin_i = function() {
        var t = new eui.Image;
        return this.coin = t,
        t.source = "item_dialog_coin_png",
        t.visible = !0,
        t.x = 133,
        t.y = 3,
        t
    },
    m.txtDate_i = function() {
        var t = new eui.Label;
        return this.txtDate = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "2020.02.20到期",
        t.textColor = 15330303,
        t.x = 112,
        t.y = 66,
        t
    },
    m.txtMsg_i = function() {
        var t = new eui.Label;
        return this.txtMsg = t,
        t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.fontFamily = "MFShangHei",
        t.height = 191,
        t.lineSpacing = 5,
        t.multiline = !0,
        t.size = 16,
        t.text = "漫长宇宙航行中收获的珍贵收藏品，记录\n着我们一路航行来的记忆。",
        t.textColor = 12435947,
        t.width = 288,
        t.x = 28,
        t.y = 155,
        t
    },
    m.txtName_i = function() {
        var t = new eui.Label;
        return this.txtName = t,
        t.anchorOffsetY = 0,
        t.fontFamily = "MFShangHei",
        t.lineSpacing = 5,
        t.size = 18,
        t.text = "派尔高的精元",
        t.textColor = 16774548,
        t.width = 216,
        t.x = 114,
        t.y = 20,
        t
    },
    m.txtCount_i = function() {
        var t = new eui.Label;
        return this.txtCount = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "拥有：1",
        t.textColor = 8295915,
        t.x = 113,
        t.y = 44,
        t
    },
    m.detail_flag_i = function() {
        var t = new eui.Image;
        return this.detail_flag = t,
        t.source = "item_warehouse_flag_limit_png",
        t.visible = !1,
        t.x = 178,
        t.y = 43,
        t
    },
    m.grp_detailFlag_i = function() {
        var t = new eui.Group;
        return this.grp_detailFlag = t,
        t.height = 17,
        t.visible = !0,
        t.width = 40,
        t.x = 178,
        t.y = 43,
        t.layout = this._HorizontalLayout2_i(),
        t
    },
    m._HorizontalLayout2_i = function() {
        var t = new eui.HorizontalLayout;
        return t.gap = 7,
        t
    },
    m.gr_gainWay_i = function() {
        var t = new eui.Group;
        return this.gr_gainWay = t,
        t.height = 150,
        t.horizontalCenter = 0,
        t.scaleX = 1,
        t.scaleY = 1,
        t.visible = !0,
        t.width = 291,
        t.y = 250,
        t.elementsContent = [this.scoreller_gainWay_i(), this.gr_title_i(), this.imge_mask_i()],
        t
    },
    m.scoreller_gainWay_i = function() {
        var t = new eui.Scroller;
        return this.scoreller_gainWay = t,
        t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.bottom = 0,
        t.left = 0,
        t.right = 0,
        t.top = 26,
        t.viewport = this._Group5_i(),
        t
    },
    m._Group5_i = function() {
        var t = new eui.Group;
        return t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.bottom = 0,
        t.left = 0,
        t.right = 0,
        t.top = 0,
        t.elementsContent = [this.list_gainWay_i(), this._Image11_i()],
        t
    },
    m.list_gainWay_i = function() {
        var t = new eui.List;
        return this.list_gainWay = t,
        t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.x = 0,
        t.y = 0,
        t.layout = this._VerticalLayout1_i(),
        t
    },
    m._VerticalLayout1_i = function() {
        var t = new eui.VerticalLayout;
        return t
    },
    m._Image11_i = function() {
        var t = new eui.Image;
        return t.source = "new_tips_2023_imge_gaiway_item_bg_2_png",
        t.visible = !1,
        t.x = 0,
        t.y = 0,
        t
    },
    m.gr_title_i = function() {
        var t = new eui.Group;
        return this.gr_title = t,
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this.tx_title_i(), this.imge_title_icon_i()],
        t
    },
    m.tx_title_i = function() {
        var t = new eui.Label;
        return this.tx_title = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "获取方式",
        t.textColor = 8362444,
        t.x = 19,
        t.y = 2,
        t
    },
    m.imge_title_icon_i = function() {
        var t = new eui.Image;
        return this.imge_title_icon = t,
        t.source = "new_tips_2023_imge_title_icon_png",
        t.x = 0,
        t.y = 0,
        t
    },
    m.imge_mask_i = function() {
        var t = new eui.Image;
        return this.imge_mask = t,
        t.bottom = 6,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "new_tips_2023_imge_mask_png",
        t.visible = !1,
        t.width = 400,
        t.x = 0,
        t
    },
    m.search_i = function() {
        var t = new eui.Group;
        return this.search = t,
        t.right = 20,
        t.visible = !0,
        t.y = 73,
        t.elementsContent = [this.common_search_bg_png_i(), this.btnSearch_i(), this.txtSearch_i()],
        t
    },
    m.common_search_bg_png_i = function() {
        var t = new eui.Image;
        return this.common_search_bg_png = t,
        t.height = 29,
        t.source = "item_warehouse_searchBg_png",
        t.width = 160,
        t.x = 0,
        t.y = 0,
        t
    },
    m.btnSearch_i = function() {
        var t = new eui.Image;
        return this.btnSearch = t,
        t.height = 29,
        t.source = "item_warehouse_btnSearch_png",
        t.width = 29,
        t.x = 132,
        t.y = 0,
        t
    },
    m.txtSearch_i = function() {
        var t = new eui.TextInput;
        return this.txtSearch = t,
        t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.height = 24,
        t.maxChars = 11,
        t.prompt = "输入物品名称",
        t.width = 120,
        t.x = 9,
        t.y = 6,
        t.skinName = g,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/NumberSliderSkin.exml"] = window.NumberSliderSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["track", "thumb"],
        this.height = 27,
        this.width = 27,
        this.elementsContent = [this.track_i(), this.thumb_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.track_i = function() {
        var t = new eui.Image;
        return this.track = t,
        t.height = 5,
        t.scale9Grid = new egret.Rectangle(31, 0, 186, 3),
        t.source = "item_dialog_slider_bar_png",
        t.percentWidth = 100,
        t.x = 0,
        t.y = 12,
        t
    },
    i.thumb_i = function() {
        var t = new eui.Image;
        return this.thumb = t,
        t.height = 27,
        t.source = "item_dialog_btnSlider_png",
        t.width = 27,
        t.x = 2,
        t.y = 1,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/pop/ItemPetFactorScreenPopSkin.exml"] = window.ItemPetFactorScreenPopSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["btnClose", "tab_all", "tab_can", "tab_not", "rb_0", "rb_1", "_list", "_scr", "cb_4", "cb_3", "cb_2", "cb_1", "btnReset", "btnConfirm"],
        this.height = 478,
        this.width = 753,
        this.elementsContent = [this._Group1_i(), this._Image4_i(), this.tab_all_i(), this.tab_can_i(), this.tab_not_i(), this.rb_0_i(), this.rb_1_i(), this._scr_i(), this._Label1_i(), this._Label2_i(), this.cb_4_i(), this.cb_3_i(), this.cb_2_i(), this.cb_1_i(), this.btnReset_i(), this.btnConfirm_i()]
    }
    __extends(e, t);
    var i = function(t) {
        function e() {
            t.call(this),
            this.skinParts = ["labelDisplay"],
            this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "item_warehouse_img_all_down_png")]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t.percentHeight = 100,
            t.source = "item_warehouse_img_all_up_png",
            t.percentWidth = 100,
            t
        },
        i.labelDisplay_i = function() {
            var t = new eui.Label;
            return this.labelDisplay = t,
            t.horizontalCenter = 0,
            t.verticalCenter = 0,
            t
        },
        e
    } (eui.Skin),
    n = function(t) {
        function e() {
            t.call(this),
            this.skinParts = ["labelDisplay"],
            this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "item_warehouse_img_can_down_png")]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t.percentHeight = 100,
            t.source = "item_warehouse_img_can_up_png",
            t.percentWidth = 100,
            t
        },
        i.labelDisplay_i = function() {
            var t = new eui.Label;
            return this.labelDisplay = t,
            t.horizontalCenter = 0,
            t.verticalCenter = 0,
            t
        },
        e
    } (eui.Skin),
    r = function(t) {
        function e() {
            t.call(this),
            this.skinParts = ["labelDisplay"],
            this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "item_warehouse_img_not_down_png")]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t.percentHeight = 100,
            t.source = "item_warehouse_img_not_up_png",
            t.percentWidth = 100,
            t
        },
        i.labelDisplay_i = function() {
            var t = new eui.Label;
            return this.labelDisplay = t,
            t.horizontalCenter = 0,
            t.verticalCenter = 0,
            t
        },
        e
    } (eui.Skin),
    s = function(t) {
        function e() {
            t.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "item_pet_factor_screen_pop_btnSingle_up_png")]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "item_pet_factor_screen_pop_btnSingle_down_png")]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t.height = 35,
            t.width = 101,
            t
        },
        e
    } (eui.Skin),
    a = function(t) {
        function e() {
            t.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "item_pet_factor_screen_pop_btnDouble_up_png")]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "item_pet_factor_screen_pop_btnDouble_down_png")]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t.height = 35,
            t.width = 101,
            t
        },
        e
    } (eui.Skin),
    o = function(t) {
        function e() {
            t.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "item_pet_factor_screen_pop_quality_ss_up_png")]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "item_pet_factor_screen_pop_quality_ss_down_png"), new eui.SetProperty("_Image1", "x", -2)]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t.height = 23,
            t.width = 71,
            t
        },
        e
    } (eui.Skin),
    u = function(t) {
        function e() {
            t.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "item_pet_factor_screen_pop_quality_s_up_png")]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "item_pet_factor_screen_pop_quality_s_down_png"), new eui.SetProperty("_Image1", "x", -2)]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t.height = 23,
            t.width = 71,
            t
        },
        e
    } (eui.Skin),
    _ = function(t) {
        function e() {
            t.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "item_pet_factor_screen_pop_quality_a_up_png")]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "item_pet_factor_screen_pop_quality_a_down_png"), new eui.SetProperty("_Image1", "x", -2)]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t.height = 23,
            t.width = 71,
            t
        },
        e
    } (eui.Skin),
    h = function(t) {
        function e() {
            t.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "item_pet_factor_screen_pop_quality_b_up_png")]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "item_pet_factor_screen_pop_quality_b_down_png"), new eui.SetProperty("_Image1", "x", -2)]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t.height = 23,
            t.width = 71,
            t
        },
        e
    } (eui.Skin),
    c = e.prototype;
    return c._Group1_i = function() {
        var t = new eui.Group;
        return t.x = 0,
        t.y = 24,
        t.elementsContent = [this._Image1_i(), this._Image2_i(), this._Image3_i(), this.btnClose_i()],
        t
    },
    c._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 454,
        t.source = "common_s9_pop_bg4_png",
        t.width = 753,
        t.x = 0,
        t.y = 1,
        t
    },
    c._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 34,
        t.source = "common_pop_up_bg_big_png",
        t.width = 748,
        t.x = 0,
        t.y = 0,
        t
    },
    c._Image3_i = function() {
        var t = new eui.Image;
        return t.height = 31,
        t.source = "item_pet_factor_screen_pop_title_png",
        t.width = 55,
        t.x = 36,
        t.y = 2,
        t
    },
    c.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.height = 33,
        t.source = "common_pop_btn_close_png",
        t.width = 33,
        t.x = 711,
        t.y = 1,
        t
    },
    c._Image4_i = function() {
        var t = new eui.Image;
        return t.height = 242.221,
        t.source = "item_pet_factor_screen_pop_contentbg_png",
        t.width = 703,
        t.x = 22,
        t.y = 210.779,
        t
    },
    c.tab_all_i = function() {
        var t = new eui.RadioButton;
        return this.tab_all = t,
        t.groupName = "group_all",
        t.value = "1",
        t.x = 23,
        t.y = 72,
        t.skinName = i,
        t
    },
    c.tab_can_i = function() {
        var t = new eui.RadioButton;
        return this.tab_can = t,
        t.groupName = "group_all",
        t.value = "2",
        t.x = 122,
        t.y = 72,
        t.skinName = n,
        t
    },
    c.tab_not_i = function() {
        var t = new eui.RadioButton;
        return this.tab_not = t,
        t.groupName = "group_all",
        t.value = "3",
        t.x = 221,
        t.y = 72,
        t.skinName = r,
        t
    },
    c.rb_0_i = function() {
        var t = new eui.RadioButton;
        return this.rb_0 = t,
        t.groupName = "item_pet_factor_screen_tab",
        t.value = "1",
        t.x = 22,
        t.y = 177.617,
        t.skinName = s,
        t
    },
    c.rb_1_i = function() {
        var t = new eui.RadioButton;
        return this.rb_1 = t,
        t.groupName = "item_pet_factor_screen_tab",
        t.value = "2",
        t.x = 123,
        t.y = 177.617,
        t.skinName = a,
        t
    },
    c._scr_i = function() {
        var t = new eui.Scroller;
        return this._scr = t,
        t.height = 193.426,
        t.width = 677,
        t.x = 35,
        t.y = 225.141,
        t.viewport = this._list_i(),
        t
    },
    c._list_i = function() {
        var t = new eui.List;
        return this._list = t,
        t.allowMultipleSelection = !0,
        t.itemRendererSkinName = attributeItemSkin,
        t.layout = this._TileLayout1_i(),
        t.dataProvider = this._ArrayCollection1_i(),
        t
    },
    c._TileLayout1_i = function() {
        var t = new eui.TileLayout;
        return t.columnAlign = "justifyUsingGap",
        t.orientation = "rows",
        t.requestedColumnCount = 10,
        t.verticalGap = 9,
        t
    },
    c._ArrayCollection1_i = function() {
        var t = new eui.ArrayCollection;
        return t.source = [this._Object1_i(), this._Object2_i(), this._Object3_i(), this._Object4_i(), this._Object5_i(), this._Object6_i(), this._Object7_i(), this._Object8_i(), this._Object9_i(), this._Object10_i(), this._Object11_i(), this._Object12_i(), this._Object13_i(), this._Object14_i(), this._Object15_i(), this._Object16_i(), this._Object17_i(), this._Object18_i(), this._Object19_i(), this._Object20_i(), this._Object21_i(), this._Object22_i(), this._Object23_i(), this._Object24_i(), this._Object25_i()],
        t
    },
    c._Object1_i = function() {
        var t = {};
        return t.a = "",
        t
    },
    c._Object2_i = function() {
        var t = {};
        return t.a = "",
        t
    },
    c._Object3_i = function() {
        var t = {};
        return t.a = "",
        t
    },
    c._Object4_i = function() {
        var t = {};
        return t.a = "",
        t
    },
    c._Object5_i = function() {
        var t = {};
        return t.a = "",
        t
    },
    c._Object6_i = function() {
        var t = {};
        return t.a = "",
        t
    },
    c._Object7_i = function() {
        var t = {};
        return t.a = "",
        t
    },
    c._Object8_i = function() {
        var t = {};
        return t.a = "",
        t
    },
    c._Object9_i = function() {
        var t = {};
        return t.a = "",
        t
    },
    c._Object10_i = function() {
        var t = {};
        return t.a = "",
        t
    },
    c._Object11_i = function() {
        var t = {};
        return t.a = "",
        t
    },
    c._Object12_i = function() {
        var t = {};
        return t.a = "",
        t
    },
    c._Object13_i = function() {
        var t = {};
        return t.a = "",
        t
    },
    c._Object14_i = function() {
        var t = {};
        return t.a = "",
        t
    },
    c._Object15_i = function() {
        var t = {};
        return t.a = "",
        t
    },
    c._Object16_i = function() {
        var t = {};
        return t.a = "",
        t
    },
    c._Object17_i = function() {
        var t = {};
        return t.a = "",
        t
    },
    c._Object18_i = function() {
        var t = {};
        return t.a = "",
        t
    },
    c._Object19_i = function() {
        var t = {};
        return t.a = "",
        t
    },
    c._Object20_i = function() {
        var t = {};
        return t.a = "",
        t
    },
    c._Object21_i = function() {
        var t = {};
        return t.a = "",
        t
    },
    c._Object22_i = function() {
        var t = {};
        return t.a = "",
        t
    },
    c._Object23_i = function() {
        var t = {};
        return t.a = "",
        t
    },
    c._Object24_i = function() {
        var t = {};
        return t.a = "",
        t
    },
    c._Object25_i = function() {
        var t = {};
        return t.a = "",
        t
    },
    c._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "品质:",
        t.textColor = 8757203,
        t.x = 22,
        t.y = 134.875,
        t
    },
    c._Label2_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.horizontalCenter = 0,
        t.size = 14,
        t.text = "当不选中任何【精灵属性】时，默认展示全部【属性】的精灵。",
        t.textColor = 6388143,
        t.y = 0,
        t
    },
    c.cb_4_i = function() {
        var t = new eui.CheckBox;
        return this.cb_4 = t,
        t.selected = !0,
        t.x = 72,
        t.y = 130.875,
        t.skinName = o,
        t
    },
    c.cb_3_i = function() {
        var t = new eui.CheckBox;
        return this.cb_3 = t,
        t.selected = !0,
        t.x = 162,
        t.y = 130.875,
        t.skinName = u,
        t
    },
    c.cb_2_i = function() {
        var t = new eui.CheckBox;
        return this.cb_2 = t,
        t.selected = !0,
        t.x = 252,
        t.y = 130.875,
        t.skinName = _,
        t
    },
    c.cb_1_i = function() {
        var t = new eui.CheckBox;
        return this.cb_1 = t,
        t.selected = !0,
        t.x = 342,
        t.y = 130.875,
        t.skinName = h,
        t
    },
    c.btnReset_i = function() {
        var t = new eui.Image;
        return this.btnReset = t,
        t.height = 34,
        t.source = "item_pet_factor_screen_pop_btnReset_png",
        t.width = 86,
        t.x = 239,
        t.y = 430.567,
        t
    },
    c.btnConfirm_i = function() {
        var t = new eui.Image;
        return this.btnConfirm = t,
        t.height = 34,
        t.source = "item_pet_factor_screen_pop_btnConfirm_png",
        t.width = 86,
        t.x = 429,
        t.y = 430.567,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/pop/ItemWarehousePetFactorPopSkin.exml"] = window.itemWarehouse.ItemWarehousePetFactorPopSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["imgMarkBg", "icon", "BtnClose", "title", "btnOK", "txtName", "txtdesc"],
        this.height = 285,
        this.width = 481,
        this.elementsContent = [this._Group1_i(), this._Group2_i(), this.BtnClose_i(), this.title_i(), this.btnOK_i(), this.txtName_i(), this.txtdesc_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Group1_i = function() {
        var t = new eui.Group;
        return t.x = 0,
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
    i._Group2_i = function() {
        var t = new eui.Group;
        return t.x = 26,
        t.y = 56,
        t.elementsContent = [this.imgMarkBg_i(), this.icon_i()],
        t
    },
    i.imgMarkBg_i = function() {
        var t = new eui.Image;
        return this.imgMarkBg = t,
        t.source = "item_view_imgMarkBg_png",
        t
    },
    i.icon_i = function() {
        var t = new eui.Image;
        return this.icon = t,
        t.height = 65,
        t.source = "",
        t.width = 65,
        t.x = 19,
        t.y = 19,
        t
    },
    i.BtnClose_i = function() {
        var t = new eui.Image;
        return this.BtnClose = t,
        t.height = 33,
        t.source = "common_pop_btn_close_png",
        t.width = 33,
        t.x = 438,
        t.y = 1,
        t
    },
    i.title_i = function() {
        var t = new eui.Image;
        return this.title = t,
        t.source = "item_warehouse_pet_factor_pop_title_png",
        t.x = 33,
        t.y = 1,
        t
    },
    i.btnOK_i = function() {
        var t = new eui.Image;
        return this.btnOK = t,
        t.source = "item_warehouse_pet_factor_pop_btnOK_png",
        t.x = 184,
        t.y = 224,
        t
    },
    i.txtName_i = function() {
        var t = new eui.Label;
        return this.txtName = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "商品名称商品名称",
        t.textColor = 12834813,
        t.visible = !0,
        t.x = 150,
        t.y = 56,
        t
    },
    i.txtdesc_i = function() {
        var t = new eui.Label;
        return this.txtdesc = t,
        t.fontFamily = "MFShangHei",
        t.lineSpacing = 5,
        t.size = 16,
        t.text = "将消耗400个【时钟试炼官·宙】因子，合成精灵【时钟试炼官·宙】。此过程讲额外消耗40000赛尔豆。确认合成吗？",
        t.textColor = 8757203,
        t.width = 280,
        t.x = 152,
        t.y = 85,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/pop/UseItemPopSkin.exml"] = window.UseItemPopSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["btnClose", "btnReset", "btnGet", "list", "txt"],
        this.height = 285,
        this.width = 481,
        this.elementsContent = [this._Image1_i(), this.btnClose_i(), this._Image2_i(), this.btnReset_i(), this.btnGet_i(), this._Scroller1_i(), this.txt_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "title_pop_2022_img_482X286_bg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.source = "common_dialog_btnclose_png",
        t.x = 438,
        t.y = 1,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "use_item_pop_imgtitle_png",
        t.x = 33,
        t.y = 2,
        t
    },
    i.btnReset_i = function() {
        var t = new eui.Image;
        return this.btnReset = t,
        t.source = "use_item_pop_btnreset_png",
        t.x = 74,
        t.y = 213,
        t
    },
    i.btnGet_i = function() {
        var t = new eui.Image;
        return this.btnGet = t,
        t.source = "use_item_pop_btnget_png",
        t.x = 274,
        t.y = 213,
        t
    },
    i._Scroller1_i = function() {
        var t = new eui.Scroller;
        return t.horizontalCenter = 0,
        t.maxWidth = 444,
        t.y = 101,
        t.viewport = this.list_i(),
        t
    },
    i.list_i = function() {
        var t = new eui.List;
        return this.list = t,
        t.layout = this._HorizontalLayout1_i(),
        t
    },
    i._HorizontalLayout1_i = function() {
        var t = new eui.HorizontalLayout;
        return t.horizontalAlign = "center",
        t
    },
    i.txt_i = function() {
        var t = new eui.Label;
        return this.txt = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = 0,
        t.size = 18,
        t.textColor = 8757203,
        t.y = 64,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/render/attributeItemSkin.exml"] = window.attributeItemSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["img_select", "img_cancel", "img_icon", "guang"],
        this.height = 69,
        this.width = 56,
        this.elementsContent = [this._Image1_i(), this.img_select_i(), this.img_cancel_i(), this.img_icon_i(), this.guang_i()],
        this.states = [new eui.State("up", [new eui.SetProperty("img_select", "visible", !1)]), new eui.State("down", [])]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 49,
        t.source = "itemWarehouse_kuang_png",
        t.visible = !0,
        t.width = 49,
        t.x = 4,
        t.y = 4,
        t
    },
    i.img_select_i = function() {
        var t = new eui.Image;
        return this.img_select = t,
        t.height = 56,
        t.source = "itemWarehouse_img_selected_png",
        t.width = 56,
        t.x = 0,
        t.y = 0,
        t
    },
    i.img_cancel_i = function() {
        var t = new eui.Image;
        return this.img_cancel = t,
        t.source = "itemWarehouse_img_cancel_png",
        t.visible = !0,
        t.x = 15,
        t.y = 21,
        t
    },
    i.img_icon_i = function() {
        var t = new eui.Image;
        return this.img_icon = t,
        t.height = 30,
        t.horizontalCenter = 0,
        t.visible = !0,
        t.width = 30,
        t.y = 13,
        t
    },
    i.guang_i = function() {
        var t = new eui.Label;
        return this.guang = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = 0,
        t.size = 12,
        t.text = "光",
        t.textColor = 11126783,
        t.visible = !0,
        t.y = 56,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/render/comboBoxItemSkin.exml"] = window.itemWarehouse.comboBoxItemSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["txtTitle", "line"],
        this.height = 30,
        this.width = 121,
        this.elementsContent = [this.txtTitle_i(), this.line_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.txtTitle_i = function() {
        var t = new eui.Label;
        return this.txtTitle = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "属性筛选",
        t.textAlign = "center",
        t.textColor = 3890073,
        t.percentWidth = 100,
        t.y = 8,
        t
    },
    i.line_i = function() {
        var t = new eui.Image;
        return this.line = t,
        t.bottom = 0,
        t.source = "item_warehouse_pet_factor_bgmdas_png",
        t.x = 6,
        t.y = 30,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/render/ItemPetFactorRenderSkin.exml"] = window.itemWarehouse.ItemPetFactorRenderSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["frame_0", "icon", "headFrame", "txtCount", "txtName", "red", "rect"],
        this.height = 148,
        this.width = 121,
        this.elementsContent = [this.frame_0_i(), this._Image1_i(), this.icon_i(), this.headFrame_i(), this.txtCount_i(), this.txtName_i(), this.red_i(), this.rect_i()],
        this.states = [new eui.State("up", [new eui.SetProperty("frame_0", "visible", !1)]), new eui.State("down", [])]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.frame_0_i = function() {
        var t = new eui.Image;
        return this.frame_0 = t,
        t.horizontalCenter = 0,
        t.scaleX = .5,
        t.scaleY = .5,
        t.source = "item_warehouse_render_frame_0_png",
        t.verticalCenter = 0,
        t.visible = !0,
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.scaleX = .5,
        t.scaleY = .5,
        t.source = "item_warehouse_render_head_di_png",
        t.visible = !0,
        t.x = 9,
        t.y = 9,
        t
    },
    i.icon_i = function() {
        var t = new eui.Image;
        return this.icon = t,
        t.height = 71,
        t.visible = !0,
        t.width = 71,
        t.x = 25,
        t.y = 22.656,
        t
    },
    i.headFrame_i = function() {
        var t = new eui.Image;
        return this.headFrame = t,
        t.source = "item_warehouse_petfactor_progress_wg_1_png",
        t.visible = !0,
        t.x = 24,
        t.y = 21.656,
        t
    },
    i.txtCount_i = function() {
        var t = new eui.Label;
        return this.txtCount = t,
        t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.fontFamily = "MFShangHei",
        t.right = 13,
        t.size = 14,
        t.stroke = 1,
        t.strokeColor = 3558560,
        t.text = "9999",
        t.y = 95.889,
        t
    },
    i.txtName_i = function() {
        var t = new eui.Label;
        return this.txtName = t,
        t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = 0,
        t.size = 14,
        t.stroke = 1,
        t.strokeColor = 3558560,
        t.text = "老六",
        t.textColor = 9025023,
        t.y = 116.516,
        t
    },
    i.red_i = function() {
        var t = new eui.Image;
        return this.red = t,
        t.source = "itemWarehouse_redPoint_png",
        t.x = 95.715,
        t.y = 4.927,
        t
    },
    i.rect_i = function() {
        var t = new eui.Image;
        return this.rect = t,
        t.scaleX = .5,
        t.scaleY = .5,
        t.source = "item_warehouse_render_head_rect_png",
        t.touchEnabled = !1,
        t.visible = !1,
        t.x = 10,
        t.y = 10,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/render/ItemTipsGainWayItemSkin.exml"] = window.ItemWareHouse.ItemTipsGainWayItemSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["imge_gaiway_item_bg_1", "imge_gaiway_item_bg_2", "tx_gainWayname_2", "tx_gainWayname_1", "gr_gainWay_items"],
        this.currentState = "state1",
        this.height = 37,
        this.width = 290,
        this.elementsContent = [this.gr_gainWay_items_i()],
        this.imge_gaiway_item_bg_1_i(),
        this.imge_gaiway_item_bg_2_i(),
        this.tx_gainWayname_2_i(),
        this.tx_gainWayname_1_i(),
        this.states = [new eui.State("state1", [new eui.AddItems("imge_gaiway_item_bg_1", "gr_gainWay_items", 0, ""), new eui.AddItems("tx_gainWayname_1", "gr_gainWay_items", 1, "")]), new eui.State("state2", [new eui.AddItems("imge_gaiway_item_bg_2", "gr_gainWay_items", 1, ""), new eui.AddItems("tx_gainWayname_2", "gr_gainWay_items", 1, ""), new eui.SetProperty("", "height", 37)])]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.gr_gainWay_items_i = function() {
        var t = new eui.Group;
        return this.gr_gainWay_items = t,
        t.left = 0,
        t.right = 0,
        t.y = 0,
        t.elementsContent = [],
        t
    },
    i.imge_gaiway_item_bg_1_i = function() {
        var t = new eui.Image;
        return this.imge_gaiway_item_bg_1 = t,
        t.left = 0,
        t.right = 0,
        t.source = "new_tips_2023_imge_gaiway_item_bg_1_png",
        t.y = 0,
        t
    },
    i.imge_gaiway_item_bg_2_i = function() {
        var t = new eui.Image;
        return this.imge_gaiway_item_bg_2 = t,
        t.left = 0,
        t.right = 0,
        t.source = "new_tips_2023_imge_gaiway_item_bg_2_png",
        t.visible = !0,
        t.y = 1,
        t
    },
    i.tx_gainWayname_2_i = function() {
        var t = new eui.Label;
        return this.tx_gainWayname_2 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "能源研究站",
        t.textColor = 16777215,
        t.x = 20,
        t.y = 10,
        t
    },
    i.tx_gainWayname_1_i = function() {
        var t = new eui.Label;
        return this.tx_gainWayname_1 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "活动获得",
        t.textColor = 8757203,
        t.x = 20,
        t.y = 10,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/render/ItemWarehouseRenderSkin.exml"] = window.ItemWarehouseRenderSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "tag", "frame_0", "icon", "txtCount", "dayBg", "txt_day", "flag_overTime", "grp_timeLimit"],
        this.height = 93,
        this.width = 93,
        this.elementsContent = [this.bg_i(), this.tag_i(), this.frame_0_i(), this.icon_i(), this.txtCount_i(), this.grp_timeLimit_i()],
        this.states = [new eui.State("up", [new eui.SetProperty("frame_0", "visible", !1)]), new eui.State("down", [])]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.height = 70,
        t.source = "item_warehouse_render_bg_png",
        t.visible = !0,
        t.width = 70,
        t.x = 12,
        t.y = 12,
        t
    },
    i.tag_i = function() {
        var t = new eui.Image;
        return this.tag = t,
        t.height = 16,
        t.source = "item_warehouse_tag_0_png",
        t.visible = !0,
        t.width = 41,
        t.x = 12,
        t.y = 12,
        t
    },
    i.frame_0_i = function() {
        var t = new eui.Image;
        return this.frame_0 = t,
        t.height = 93,
        t.scale9Grid = new egret.Rectangle(22, 21, 3, 5),
        t.source = "common_select_rect_png",
        t.visible = !0,
        t.width = 93,
        t.x = 0,
        t.y = 0,
        t
    },
    i.icon_i = function() {
        var t = new eui.Image;
        return this.icon = t,
        t.height = 50,
        t.horizontalCenter = 0,
        t.verticalCenter = 0,
        t.width = 50,
        t
    },
    i.txtCount_i = function() {
        var t = new eui.Label;
        return this.txtCount = t,
        t.bottom = 15,
        t.fontFamily = "MFShangHei",
        t.right = 17,
        t.size = 14,
        t.stroke = 1,
        t.strokeColor = 1777977,
        t.text = "9999",
        t.textColor = 16777215,
        t
    },
    i.grp_timeLimit_i = function() {
        var t = new eui.Group;
        return this.grp_timeLimit = t,
        t.height = 44,
        t.visible = !0,
        t.width = 45,
        t.x = 10,
        t.y = 10,
        t.elementsContent = [this.dayBg_i(), this.txt_day_i(), this.flag_overTime_i()],
        t
    },
    i.dayBg_i = function() {
        var t = new eui.Image;
        return this.dayBg = t,
        t.height = 44,
        t.source = "item_warehouse_render_dayBg_png",
        t.width = 42,
        t.x = 0,
        t.y = 0,
        t
    },
    i.txt_day_i = function() {
        var t = new eui.Label;
        return this.txt_day = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = -5,
        t.rotation = -45,
        t.size = 12,
        t.text = "99天",
        t.textColor = 16777215,
        t.verticalCenter = -8,
        t.visible = !0,
        t
    },
    i.flag_overTime_i = function() {
        var t = new eui.Image;
        return this.flag_overTime = t,
        t.height = 44,
        t.source = "item_warehouse_render_flag_overTime_png",
        t.visible = !0,
        t.width = 42,
        t.x = 0,
        t.y = 0,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/render/tabRenderSkin.exml"] = window.itemWarehouse.tabRender = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["txtTitle", "imgTitle"],
        this.height = 39,
        this.width = 93,
        this.elementsContent = [this._Image1_i(), this.txtTitle_i(), this.imgTitle_i()],
        this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "item_warehouse_petfactor_tab_render_up_png"), new eui.SetProperty("_Image1", "x", 4), new eui.SetProperty("_Image1", "y", 4), new eui.SetProperty("txtTitle", "textColor", 6991854)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "item_warehouse_petfactor_tab_render_down_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0), new eui.SetProperty("txtTitle", "textColor", 16777215)]), new eui.State("disabled", [])],
        eui.Binding.$bindProperties(this, ["hostComponent.title"], [0], this.txtTitle, "text")
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return this._Image1 = t,
        t
    },
    i.txtTitle_i = function() {
        var t = new eui.Label;
        return this.txtTitle = t,
        t.horizontalCenter = 0,
        t.size = 14,
        t.verticalCenter = 0,
        t
    },
    i.imgTitle_i = function() {
        var t = new eui.Image;
        return this.imgTitle = t,
        t.horizontalCenter = 0,
        t.source = "pet_factor_a_down_png",
        t.verticalCenter = 0,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/render/UseItemPopItemSkin.exml"] = window.UseItemPopItemSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["imgIcon", "txtNum", "txtName", "imgSelect"],
        this.width = 100,
        this.elementsContent = [this._Image1_i(), this.imgIcon_i(), this.txtNum_i(), this.txtName_i(), this.imgSelect_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "common_item_bg_style_70_70_png",
        t.x = 14,
        t
    },
    i.imgIcon_i = function() {
        var t = new eui.Image;
        return this.imgIcon = t,
        t.height = 50,
        t.visible = !0,
        t.width = 50,
        t.x = 25,
        t.y = 12,
        t
    },
    i.txtNum_i = function() {
        var t = new eui.Label;
        return this.txtNum = t,
        t.fontFamily = "MFShangHei",
        t.right = 16,
        t.size = 16,
        t.textColor = 16776958,
        t.visible = !0,
        t.y = 56,
        t
    },
    i.txtName_i = function() {
        var t = new eui.Label;
        return this.txtName = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = 0,
        t.size = 16,
        t.textColor = 16776958,
        t.visible = !0,
        t.y = 76,
        t
    },
    i.imgSelect_i = function() {
        var t = new eui.Image;
        return this.imgSelect = t,
        t.source = "use_item_pop_item_imgselect_png",
        t.visible = !0,
        t.x = 14,
        t.y = 0,
        t
    },
    e
} (eui.Skin);