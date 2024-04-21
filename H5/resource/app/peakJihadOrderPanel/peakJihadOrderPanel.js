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
    for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
    i.prototype = t.prototype,
    e.prototype = new i
},
__awaiter = this && this.__awaiter ||
function(e, t, i, r) {
    return new(i || (i = Promise))(function(n, a) {
        function o(e) {
            try {
                u(r.next(e))
            } catch(t) {
                a(t)
            }
        }
        function s(e) {
            try {
                u(r["throw"](e))
            } catch(t) {
                a(t)
            }
        }
        function u(e) {
            e.done ? n(e.value) : new i(function(t) {
                t(e.value)
            }).then(o, s)
        }
        u((r = r.apply(e, t || [])).next())
    })
},
__generator = this && this.__generator ||
function(e, t) {
    function i(e) {
        return function(t) {
            return r([e, t])
        }
    }
    function r(i) {
        if (n) throw new TypeError("Generator is already executing.");
        for (; u;) try {
            if (n = 1, a && (o = a[2 & i[0] ? "return": i[0] ? "throw": "next"]) && !(o = o.call(a, i[1])).done) return o;
            switch (a = 0, o && (i = [0, o.value]), i[0]) {
            case 0:
            case 1:
                o = i;
                break;
            case 4:
                return u.label++,
                {
                    value: i[1],
                    done: !1
                };
            case 5:
                u.label++,
                a = i[1],
                i = [0];
                continue;
            case 7:
                i = u.ops.pop(),
                u.trys.pop();
                continue;
            default:
                if (o = u.trys, !(o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                    u = 0;
                    continue
                }
                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                    u.label = i[1];
                    break
                }
                if (6 === i[0] && u.label < o[1]) {
                    u.label = o[1],
                    o = i;
                    break
                }
                if (o && u.label < o[2]) {
                    u.label = o[2],
                    u.ops.push(i);
                    break
                }
                o[2] && u.ops.pop(),
                u.trys.pop();
                continue
            }
            i = t.call(e, u)
        } catch(r) {
            i = [6, r],
            a = 0
        } finally {
            n = o = 0
        }
        if (5 & i[0]) throw i[1];
        return {
            value: i[0] ? i[1] : void 0,
            done: !0
        }
    }
    var n, a, o, s, u = {
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
peakJihadOrderPanel; !
function(e) {
    var t = function(t) {
        function i(e) {
            var i = t.call(this, e) || this;
            return i.itemId = 1725394,
            i.groupName = "PeakJihadOrderMainPanel_groupName",
            i["default"] = 1,
            i.defaultTab = 1,
            i.curLevelChange = 0,
            i.skinName = PeakJihadOrderMainPanelSkin,
            i.data && (i["default"] = ~~i.data.type, i.defaultTab = ~~i.data.tab || 1),
            i
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            var i = this;
            t.prototype.childrenCreated.call(this),
            t.prototype.adaptBgByScale.call(this, this.bg),
            this.initBtnClose("peak_jihad_order_main_panel_title_png", this),
            this.initBtnHelpById(147),
            this.icon0.source = ItemXMLInfo.getIconURL(this.itemId),
            this.icon1.source = "main_iconCoin2_png",
            ImageButtonUtil.add(this.icon0,
            function() {
                var e = {};
                e.id = i.itemId,
                tipsPop.TipsPop.openItemPop(e)
            },
            this),
            this.updateItemNum(),
            ImageButtonUtil.add(this.buyLevel,
            function() {
                return PeakJihadOrderManager.orderLevel >= PeakJihadOrderManager.maxLevel ? void BubblerManager.getInstance().showText("您已达到满级") : void PopViewManager.getInstance().openView(new e.PeakJihadOrderPanelBuyLevelPop)
            },
            this),
            ImageButtonUtil.add(this.more,
            function() {
                PopViewManager.getInstance().openView(new e.PeakJihadOrderPanelRewardPop)
            },
            this),
            ImageButtonUtil.add(this.btnJJ,
            function() {
                i.onClose(),
                ModuleManager.showModuleByID(212)
            },
            this),
            ImageButtonUtil.add(this.btnGet,
            function() {
                PeakJihadOrderManager.needGetLevel > 0 ? SocketConnection.sendByQueue(41905, [4, 1],
                function() {
                    return __awaiter(i, void 0, void 0,
                    function() {
                        return __generator(this,
                        function(e) {
                            switch (e.label) {
                            case 0:
                                return [4, this.updateReward(!0)];
                            case 1:
                                return e.sent(),
                                [2]
                            }
                        })
                    })
                }) : BubblerManager.getInstance().showText("无可领取奖励")
            },
            this),
            this._listShop.itemRenderer = e.PeakJihadOrderShopItem,
            this._listReward.itemRenderer = e.PeakJihadOrderMainRewardItem,
            this._listBig.itemRenderer = e.PeakJihadOrderItem,
            this._scrollerReward.addEventListener(eui.UIEvent.CHANGE, this.onChange, this),
            EventManager.addEventListener(GameEvent.NOTIFY_ITEM_CHANGE, this.updateItemNum, this),
            EventManager.addEventListener(PeakJihadOrderManager.PeakJihadOrderPanelBuyLevelPop_BUY_LEVEL,
            function() {
                return __awaiter(i, void 0, void 0,
                function() {
                    return __generator(this,
                    function(e) {
                        switch (e.label) {
                        case 0:
                            return [4, this.updateReward(!0)];
                        case 1:
                            return e.sent(),
                            [2]
                        }
                    })
                })
            },
            this),
            EventManager.addEventListener(PeakJihadOrderManager.PeakJihadOrderPanelBuy_SHOP_ITEM,
            function() {
                return __awaiter(i, void 0, void 0,
                function() {
                    return __generator(this,
                    function(e) {
                        switch (e.label) {
                        case 0:
                            return [4, PeakJihadOrderManager.updateOrderShopValue()];
                        case 1:
                            return e.sent(),
                            this.updateView(),
                            [2]
                        }
                    })
                })
            },
            this),
            EventManager.addEventListener(RobotEvent.DIAMOND_CHANGED, this.updateItemNum, this),
            EventManager.addEventListener(PeakJihadOrderManager.PeakJihadOrderPanel_GET_ORDER_REWARD,
            function() {
                return __awaiter(i, void 0, void 0,
                function() {
                    return __generator(this,
                    function(e) {
                        switch (e.label) {
                        case 0:
                            return [4, this.updateReward(!0)];
                        case 1:
                            return e.sent(),
                            [2]
                        }
                    })
                })
            },
            this),
            EventManager.addEventListener("PeakJihadOrderTaskPanel_updateRed", this.updateRedDot, this),
            PeakJihadOrderManager.init().then(function() {
                var e = new MenuData;
                e["default"] = i["default"],
                e.groupName = i.groupName,
                e.root = [1, 2, 3],
                e.data = {
                    1 : {
                        title: "奖励"
                    },
                    2 : {
                        title: "任务"
                    },
                    3 : {
                        title: "商城"
                    }
                },
                i.menu = Menu.createMenu(e, i.menuGroup),
                i._shopScroller.right = DeviceInfoManager.adapterOffSetX || 35,
                i.taskGroup.right = DeviceInfoManager.adapterOffSetX || 35,
                EventManager.addEventListener(BaseMenuEvent.BASE_MENU_SELECT_CHANGE_ + i.groupName, i.updateView, i),
                i.initReward(),
                i.once(egret.Event.RENDER,
                function() {
                    i._shopScroller.left = i.menuGroup.width + 10,
                    i.rewardGroup.left = i.menuGroup.width + 30,
                    i.taskGroup.left = i.menuGroup.width + 10,
                    i.updateRedDot()
                },
                i)
            })
        },
        i.prototype.updateView = function() {
            var e = ~~this.menu.selectedValue;
            switch (e) {
            case 1:
                this.taskGroup.visible = this._shopScroller.visible = !1,
                this.updateReward(),
                this.rewardGroup.visible = !0;
                break;
            case 2:
                this.rewardGroup.visible = this._shopScroller.visible = !1,
                this.updateTask(),
                this.taskGroup.visible = !0;
                break;
            case 3:
                this.taskGroup.visible = this.rewardGroup.visible = !1,
                this.updateShop(),
                this._shopScroller.visible = !0
            }
        },
        i.prototype.initReward = function() {
            var e = config.Pass_reward.getItems();
            PeakJihadOrderManager.maxLevel = e[e.length - 1].id,
            this._listReward.dataProvider = new eui.ArrayCollection(e)
        },
        i.prototype.updateReward = function(e) {
            return void 0 === e && (e = !1),
            __awaiter(this, void 0, void 0,
            function() {
                var t, i, r, n, a, o, s, u = this;
                return __generator(this,
                function(h) {
                    switch (h.label) {
                    case 0:
                        return [4, PeakJihadOrderManager.updateOrderRewardAllData()];
                    case 1:
                        return h.sent(),
                        EventManager.dispatchEventWith(PeakJihadOrderManager.PeakJihadOrderPanel_UPDATE_REWARD_ITEM),
                        common.TweenUtil.numberAnimation(PeakJihadOrderManager.orderLevel, this.curLevel, .3),
                        this.currentState = "" + (2 == PeakJihadOrderManager.boughtOrder ? 2 : 1),
                        t = config.Pass_reward.getItem(PeakJihadOrderManager.orderLevel),
                        i = t.exp,
                        r = -1 == i,
                        this.levelPro.text = r ? "已满级": PeakJihadOrderManager.orderExp + "/" + i,
                        this.bar.maximum = r ? 1 : i,
                        this.bar.value = r ? 1 : PeakJihadOrderManager.orderExp,
                        n = Math.max(new Date(PeakJihadOrderManager.endTime.replace(/_/g, "/")).getTime() - SystemTimerManager.sysBJDate.getTime(), 0) / 1e3,
                        this.time.text = 0 >= n ? "已到期": TimeUtil.countDownFormat(Math.floor(n), "dd天hh小时"),
                        a = Math.min(PeakJihadOrderManager.maxLevel, PeakJihadOrderManager.needGetLevel || PeakJihadOrderManager.orderLevel + 1),
                        this.setBigLevel(a, e),
                        this.updateRedDot(),
                        o = this._listReward.layout.gap,
                        s = 100,
                        [4, wait(0)];
                    case 2:
                        return h.sent(),
                        this.once(egret.Event.RENDER,
                        function() {
                            var e = 0;
                            a = Math.min(PeakJihadOrderManager.maxLevel - 4, a),
                            e = (a - 1) * (s + o),
                            egret.Tween.get(u._listReward).to({
                                scrollH: e
                            },
                            300)
                        },
                        this),
                        [2]
                    }
                })
            })
        },
        i.prototype.setBigLevel = function(e, t) {
            if (void 0 === t && (t = !1), e = e % 10 > 0 ? Math.floor(e / 10) + 1 : Math.floor(e / 10), this.curLevelChange != e || t) {
                this.curLevelChange = e;
                var i = 10 * this.curLevelChange;
                this.bigLevel.text = "" + i;
                var r = config.Pass_reward.getItem(i),
                n = PeakJihadOrderManager.getPassRewardStateById(i);
                r.freereward.trim().length > 0 ? (this.itemBig.info = ItemManager.parseItem(r.freereward)[0], this.itemBig.info.state = n[0], this.itemBig.updateView(), this.itemBig.visible = !0) : this.itemBig.visible = !1;
                var a = ItemManager.parseItem(r.paidreward);
                a = a.map(function(e) {
                    return e.state = n[1],
                    e
                }),
                this._listBig.dataProvider = new eui.ArrayCollection(a)
            }
        },
        i.prototype.updateTask = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                return __generator(this,
                function(t) {
                    switch (t.label) {
                    case 0:
                        return [4, PeakJihadOrderManager.updateTaskInfo()];
                    case 1:
                        return t.sent(),
                        this.updateRedDot(),
                        this.taskGroup.numChildren < 1 ? (this.task = new e.PeakJihadOrderTaskPanel, this.taskGroup.addChild(this.task), this.task.updateView(this.defaultTab)) : this.task.updateView(this.defaultTab),
                        this.defaultTab = 0,
                        [2]
                    }
                })
            })
        },
        i.prototype.updateShop = function() {
            var e = config.Pass_shop.getItems();
            e.sort(function(e, t) {
                return e.id - t.id
            }),
            e.sort(function(e, t) {
                return t.sort - e.sort
            }),
            this._listShop.dataProvider = new eui.ArrayCollection(e)
        },
        i.prototype.updateItemNum = function() {
            this.num0.text = ItemManager.getNumByID(this.itemId) + "",
            this.num1.text = "" + UserInfoManager.diamond
        },
        i.prototype.onChange = function() {
            var e = this._listReward.scrollH,
            t = this._listReward.layout.gap,
            i = 100,
            r = Math.floor(e / (i + t) + 1) + 1;
            this.setBigLevel(r)
        },
        i.prototype.updateRedDot = function() {
            Menu.updateRed(this.groupName, 1, PeakJihadOrderManager.rewardRed),
            Menu.updateRed(this.groupName, 2, PeakJihadOrderManager.taskRed)
        },
        i.prototype.destroy = function() {
            t.prototype.destroy.call(this),
            this._scrollerReward.removeEventListener(eui.UIEvent.CHANGE, this.onChange, this),
            this.taskGroup.removeChildren(),
            this.task && this.task.destroy(),
            this.task = null,
            this.menu && this.menu.destroy(),
            this.menu = null,
            egret.Tween.removeTweens(this),
            EventManager.dispatchEventWith(ToolBarPointConst.CHECK_RED_POINT_CHANGE_AGAIN, !1, {
                id: 9
            })
        },
        i
    } (BaseModule);
    e.PeakJihadOrderMainPanel = t,
    __reflect(t.prototype, "peakJihadOrderPanel.PeakJihadOrderMainPanel")
} (peakJihadOrderPanel || (peakJihadOrderPanel = {}));
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
    for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
    i.prototype = t.prototype,
    e.prototype = new i
},
peakJihadOrderPanel; !
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.itemParseInfo = null,
            t.state = [0, 0],
            t.skinName = PeakJihadOrderMainRewardItemSkin,
            t
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            var t = this;
            e.prototype.childrenCreated.call(this),
            ImageButtonUtil.add(this.touchFree,
            function() {
                1 == t.state[0] && SocketConnection.sendByQueue(41905, [1, t.info.id],
                function() {
                    EventManager.dispatchEventWith(PeakJihadOrderManager.PeakJihadOrderPanel_GET_ORDER_REWARD)
                })
            },
            this, !1),
            ImageButtonUtil.add(this.touchPay,
            function() {
                1 == t.state[1] && SocketConnection.sendByQueue(41905, [2, t.info.id],
                function() {
                    EventManager.dispatchEventWith(PeakJihadOrderManager.PeakJihadOrderPanel_GET_ORDER_REWARD)
                })
            },
            this, !1),
            EventManager.addEventListener(PeakJihadOrderManager.PeakJihadOrderPanel_UPDATE_REWARD_ITEM, this.updateView, this),
            this._list.itemRenderer = i
        },
        t.prototype.dataChanged = function() {
            e.prototype.dataChanged.call(this),
            this.data && (this.info = this.data, this.updateView())
        },
        t.prototype.updateView = function() {
            var e = this;
            this.level.text = "" + this.info.id;
            var t = PeakJihadOrderManager.getPassRewardStateById(this.info.id);
            this.state[0] = ~~t[0],
            this.state[1] = ~~t[1],
            this.touchFree.visible = 1 == this.state[0],
            this.touchPay.visible = 1 == this.state[1],
            this.info.freereward.trim().length > 0 ? (this.item.info = ItemManager.parseItem(this.info.freereward)[0], this.item.info.state = this.state[0], this.item.updateView(), this.item.visible = !0) : this.item.visible = !1,
            this.mas.visible = !PeakJihadOrderManager.bought;
            var i = 1 == this.state[0] || 1 == this.state[1];
            this.select.visible = i,
            this.bg.source = i ? "peak_jihad_order_main_reward_panel_lbg1_png": "peak_jihad_order_main_reward_panel_lbg_png";
            var r = ItemManager.parseItem(this.info.paidreward);
            if (this.info.diamondnum > 0) {
                var n = new ItemParseInfo;
                n.id = 5,
                n.num = this.info.diamondnum,
                n.type = 1,
                r.push(n)
            }
            r = r.map(function(t) {
                return t.state = e.state[1],
                t
            }),
            this._list.dataProvider = new eui.ArrayCollection(r),
            this.cacheAsBitmap = !0
        },
        t.prototype.destroy = function() {
            e.prototype.destroy.call(this)
        },
        t
    } (BaseItemRenderer);
    e.PeakJihadOrderMainRewardItem = t,
    __reflect(t.prototype, "peakJihadOrderPanel.PeakJihadOrderMainRewardItem");
    var i = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.skinName = PeakJihadOrderItemSkin,
            t
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            var t = this;
            e.prototype.childrenCreated.call(this),
            ImageButtonUtil.add(this.icon,
            function() {
                if (2 == t.info.type) {
                    var e = t.info.id,
                    i = {
                        ins: e
                    };
                    tipsPop.TipsPop.openCounterMarkPop(i)
                } else if (6 == t.info.type) PopViewManager.getInstance().hideAll(),
                PetManager.showPetManualInfo(t.info.id, 2);
                else if (10 == t.info.type) {
                    var r = AchieveXMLInfo.getRule(t.info.id, t.info.num),
                    n = {};
                    n.SpeNameBonus = r.SpeNameBonus,
                    tipsPop.TipsPop.openTitlePop(n)
                } else {
                    var a = {};
                    a.id = t.info.id,
                    tipsPop.TipsPop.openItemPop(a)
                }
            },
            this)
        },
        t.prototype.dataChanged = function() {
            e.prototype.dataChanged.call(this),
            this.data && (this.info = this.data, this.updateView())
        },
        t.prototype.updateView = function() {
            switch (this.num.text = core.gameUtil.ConvertItemNumView(this.info.num, 0), this.info.type) {
            case 1:
            case 3:
                this.icon.source = ClientConfig.getItemIcon(this.info.id);
                break;
            case 2:
                this.icon.source = ClientConfig.getMarkPath(this.info.id);
                break;
            case 6:
                var e = PetSkinXMLInfo.getSkinInfo(this.info.id);
                this.icon.source = ClientConfig.getPetHeadPath(e.skinPetId),
                this.num.text = "1";
                break;
            case 10:
                var t = AchieveXMLInfo.getRule(this.info.id, this.info.num);
                this.icon.source = ClientConfig.getAchievePointIcon(t.AchievementPoint),
                this.num.text = "1"
            }
            this.cur.visible = 1 == this.info.state,
            this.got.visible = 2 == this.info.state,
            this.cacheAsBitmap = !0
        },
        t.prototype.destroy = function() {
            e.prototype.destroy.call(this)
        },
        t
    } (BaseItemRenderer);
    e.PeakJihadOrderItem = i,
    __reflect(i.prototype, "peakJihadOrderPanel.PeakJihadOrderItem")
} (peakJihadOrderPanel || (peakJihadOrderPanel = {}));
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
    for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
    i.prototype = t.prototype,
    e.prototype = new i
},
peakJihadOrderPanel; !
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.skinName = PeakJihadOrderPanelSkin,
            t
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            var t = this;
            e.prototype.childrenCreated.call(this),
            e.prototype.adaptBgByScale.call(this, this.bg),
            ImageButtonUtil.add(this.close, this.onClose, this),
            ImageButtonUtil.add(this.grp_jj_0,
            function() {
                PetManager.showPetManualInfo(PeakJihadController.curOutputSkinId, 2),
                PopViewManager.getInstance().hideAll()
            },
            this),
            ImageButtonUtil.add(this.grp_jj_1,
            function() {
                var e = {};
                e.id = 300757,
                tipsPop.TipsPop.openItemPop(e)
            },
            this),
            ImageButtonUtil.add(this.grp_jj_2,
            function() {
                var e = 42444,
                t = {
                    ins: e
                };
                tipsPop.TipsPop.openCounterMarkPop(t)
            },
            this),
            ImageButtonUtil.add(this.grp_zz_0,
            function() {
                var e = {};
                e.id = 11,
                tipsPop.TipsPop.openItemPop(e)
            },
            this),
            ImageButtonUtil.add(this.grp_zz_1,
            function() {
                BubblerManager.getInstance().showText("S" + PeakJihadController.curSeason + "赛季纪念名片")
            },
            this),
            ImageButtonUtil.add(this.grp_zz_2,
            function() {
                var e = {};
                e.id = 1725394,
                tipsPop.TipsPop.openItemPop(e)
            },
            this),
            ImageButtonUtil.add(this.priceGroup,
            function() {
                BuyProductManager.buyProductBySocket(200031,
                function() {
                    SocketConnection.sendByQueue(41905, [0, 1],
                    function() {
                        BubblerManager.getInstance().showText("购买成功"),
                        PeakJihadOrderManager.updateOrderValue().then(function() {
                            t.updateView()
                        })
                    })
                },
                t)
            },
            this),
            ImageButtonUtil.add(this.priceGroup1,
            function() {
                var e = 0 == PeakJihadOrderManager.boughtOrder;
                BuyProductManager.buyProductBySocket(e ? 200032 : 200034,
                function() {
                    SocketConnection.sendByQueue(41905, [0, e ? 2 : 3],
                    function() {
                        BubblerManager.getInstance().showText("购买成功"),
                        PeakJihadOrderManager.updateOrderValue().then(function() {
                            t.updateView()
                        })
                    })
                },
                t)
            },
            this),
            PeakJihadOrderManager.updateOrderValue().then(function() {
                t.updateView()
            })
        },
        t.prototype.updateView = function() {
            var e = PeakJihadOrderManager.boughtOrder;
            this.currentState = "" + (e + 1),
            DisplayUtil.setEnabled(this.priceGroup, 0 == e, !0),
            DisplayUtil.setEnabled(this.priceGroup1, 2 != e, !0)
        },
        t.prototype.destroy = function() {
            e.prototype.destroy.call(this),
            EventManager.dispatchEventWith(PeakJihadOrderManager.PeakJihadOrderPanel_GET_ORDER_REWARD),
            ModuleManager.showModuleByID(211, {
                type: 1
            })
        },
        t
    } (BaseModule);
    e.PeakJihadOrderPanel = t,
    __reflect(t.prototype, "peakJihadOrderPanel.PeakJihadOrderPanel")
} (peakJihadOrderPanel || (peakJihadOrderPanel = {}));
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
    for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
    i.prototype = t.prototype,
    e.prototype = new i
},
peakJihadOrderPanel; !
function(e) {
    var t = function(t) {
        function i() {
            var e = t.call(this) || this;
            return e.buyLevel = 5,
            e.curLevel = 1,
            e.old = 0,
            e.max = 50,
            e.price = 100,
            e.skinName = PeakJihadOrderPanelBuyLevelPopSkin,
            e
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            var i = this;
            t.prototype.childrenCreated.call(this),
            ImageButtonUtil.add(this.close, this.hide, this),
            ImageButtonUtil.add(this.add,
            function() {
                var e = ~~i.buyNum.text; ++e <= i.max - i.curLevel && (i.buyLevel = e, i.updateViewData())
            },
            this),
            ImageButtonUtil.add(this.drop,
            function() {
                var e = ~~i.buyNum.text; --e > 0 && (i.buyLevel = e, i.updateViewData())
            },
            this),
            ImageButtonUtil.add(this.btnCancel, this.hide, this),
            ImageButtonUtil.add(this.btnBuy,
            function() {
                if (! (i.buyLevel <= 0)) {
                    var e = i.price * i.buyLevel;
                    UserInfoManager.diamond >= e ? KTool.buyProductByCallback(260060, i.buyLevel,
                    function() {
                        SocketConnection.sendByQueue(41905, [3, i.buyLevel],
                        function() {
                            PeakJihadOrderManager.init().then(function() {
                                EventManager.dispatchEventWith(PeakJihadOrderManager.PeakJihadOrderPanelBuyLevelPop_BUY_LEVEL),
                                BubblerManager.getInstance().showText("购买成功"),
                                i.hide()
                            })
                        })
                    }) : Alert.show("您的钻石余额不足，是否前往充值？",
                    function() {
                        i.hide(),
                        PayManager.rechargeDiamond()
                    })
                }
            },
            this),
            this.buyNum.addEventListener(egret.Event.FOCUS_OUT,
            function() {
                i.updateBuyLevel()
            },
            this),
            this.curLevel = PeakJihadOrderManager.orderLevel,
            this.max = PeakJihadOrderManager.maxLevel,
            this._list.itemRenderer = e.PeakJihadOrderItem,
            this.updateViewData()
        },
        i.prototype.updateBuyLevel = function() {
            var e = ~~this.buyNum.text || 1;
            this.max >= e + this.curLevel ? (this.buyLevel = e, this.updateViewData()) : this.buyNum.text = "" + this.old
        },
        i.prototype.updateViewData = function() {
            var e = this;
            this.tips.textFlow = [{
                text: "购买后升至"
            },
            {
                text: "" + (this.curLevel + this.buyLevel),
                style: {
                    textColor: 16119889
                }
            },
            {
                text: "级，可获得以下奖励"
            }];
            var t = config.Pass_reward.getItems().filter(function(t) {
                return t.id > e.curLevel && t.id <= e.curLevel + e.buyLevel
            }),
            i = t.map(function(e) {
                return e.freereward.trim().length > 0 ? e.freereward + ";" + e.paidreward: e.paidreward
            }),
            r = i.join(";"),
            n = ItemManager.parseItem(r);
            n.sort(function(e, t) {
                return e.id - t.id
            });
            var a = [];
            n.length > 0 && a.push(KTool.clone(n[0]));
            for (var o = 0,
            s = 1; s < n.length; s++) a[o].id != n[s].id ? (a.push(KTool.clone(n[s])), o++) : a[o].num += n[s].num;
            var u = a.filter(function(e) {
                return 6 == e.type
            });
            u.sort(function(e, t) {
                return e.id - t.id
            });
            var h = a.filter(function(e) {
                return 2 == e.type
            });
            h.sort(function(e, t) {
                return e.id - t.id
            });
            var _ = a.filter(function(e) {
                return 1 == e.type
            });
            _.sort(function(e, t) {
                return e.id - t.id
            });
            var l = u.concat(h, _);
            this._list.dataProvider = new eui.ArrayCollection(l),
            this.buyNum.text = "" + this.buyLevel,
            this.need.text = "" + this.price * this.buyLevel,
            this.old = this.buyLevel
        },
        i.prototype.destroy = function() {
            t.prototype.destroy.call(this)
        },
        i
    } (PopView);
    e.PeakJihadOrderPanelBuyLevelPop = t,
    __reflect(t.prototype, "peakJihadOrderPanel.PeakJihadOrderPanelBuyLevelPop")
} (peakJihadOrderPanel || (peakJihadOrderPanel = {}));
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
    for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
    i.prototype = t.prototype,
    e.prototype = new i
},
peakJihadOrderPanel; !
function(e) {
    var t = function(t) {
        function i() {
            var e = t.call(this) || this;
            return e.skinName = PeakJihadOrderPanelRewardPopSkin,
            e
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this),
            ImageButtonUtil.add(this.close, this.hide, this),
            this._list.itemRenderer = e.PeakJihadOrderItem,
            this.updateView()
        },
        i.prototype.updateView = function() {
            var e = config.Pass_reward.getItems(),
            t = e.map(function(e) {
                return e.freereward.trim().length > 0 ? e.freereward + ";" + e.paidreward: e.paidreward
            }),
            i = t.join(";"),
            r = ItemManager.parseItem(i);
            r.sort(function(e, t) {
                return e.id - t.id
            });
            var n = [];
            r.length > 0 && n.push(KTool.clone(r[0]));
            for (var a = 0,
            o = 1; o < r.length; o++) n[a].id != r[o].id ? (n.push(KTool.clone(r[o])), a++) : n[a].num += r[o].num;
            var s = n.filter(function(e) {
                return 6 == e.type
            });
            s.sort(function(e, t) {
                return e.id - t.id
            });
            var u = n.filter(function(e) {
                return 2 == e.type
            });
            u.sort(function(e, t) {
                return e.id - t.id
            });
            var h = n.filter(function(e) {
                return 1 == e.type
            });
            h.sort(function(e, t) {
                return e.id - t.id
            });
            var _ = s.concat(u, h);
            this._list.dataProvider = new eui.ArrayCollection(_)
        },
        i.prototype.destroy = function() {
            t.prototype.destroy.call(this)
        },
        i
    } (PopView);
    e.PeakJihadOrderPanelRewardPop = t,
    __reflect(t.prototype, "peakJihadOrderPanel.PeakJihadOrderPanelRewardPop")
} (peakJihadOrderPanel || (peakJihadOrderPanel = {}));
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
    for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
    i.prototype = t.prototype,
    e.prototype = new i
},
peakJihadOrderPanel; !
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.itemParseInfo = null,
            t.skinName = PeakJihadOrderShopItemSkin,
            t
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            var t = this;
            e.prototype.childrenCreated.call(this),
            ImageButtonUtil.add(this.itemIcon,
            function() {
                if (2 == t.itemParseInfo.type) {
                    var e = t.itemParseInfo.id,
                    i = {
                        ins: e
                    };
                    tipsPop.TipsPop.openCounterMarkPop(i)
                } else if (10 == t.itemParseInfo.type) {
                    var r = AchieveXMLInfo.getRule(t.itemParseInfo.id, t.itemParseInfo.num),
                    n = {};
                    n.SpeNameBonus = r.SpeNameBonus,
                    tipsPop.TipsPop.openTitlePop(n)
                } else {
                    var a = {};
                    a.id = t.itemParseInfo.id,
                    tipsPop.TipsPop.openItemPop(a)
                }
            },
            this),
            ImageButtonUtil.add(this.buyGroup,
            function() {
                var e = ItemManager.getNumByID(t.info.consumeitemid);
                return e < t.info.price ? void BubblerManager.getInstance().showText("道具不足") : void SocketConnection.sendByQueue(41904, [2, t.info.id],
                function() {
                    console.log("购买成功"),
                    EventManager.dispatchEventWith(PeakJihadOrderManager.PeakJihadOrderPanelBuy_SHOP_ITEM)
                })
            },
            this)
        },
        t.prototype.dataChanged = function() {
            e.prototype.dataChanged.call(this),
            this.data && (this.info = this.data, this.updateView())
        },
        t.prototype.updateView = function() {
            switch (this.itemParseInfo = ItemManager.parseItem(this.info.commodity)[0], this.itemNum.text = core.gameUtil.ConvertItemNumView(this.itemParseInfo.num, 0), this.itemParseInfo.type) {
            case 1:
            case 3:
                var e = ItemXMLInfo.getName(this.itemParseInfo.id);
                this.itemName.text = e.length > 8 ? e.substring(0, 7) + "...": e,
                this.itemIcon.source = ClientConfig.getItemIcon(this.itemParseInfo.id);
                break;
            case 2:
                var t = CountermarkXMLInfo.getDes(this.itemParseInfo.id);
                this.itemName.text = t.length > 8 ? t.substring(0, 7) + "...": t,
                this.itemIcon.source = ClientConfig.getMarkPath(this.itemParseInfo.id);
                break;
            case 10:
                var i = AchieveXMLInfo.getRule(this.itemParseInfo.id, this.itemParseInfo.num);
                this.itemName.text = i.title,
                this.itemIcon.source = ClientConfig.getAchievePointIcon(i.AchievementPoint),
                this.itemNum.text = "1"
            }
            var r = {
                id: this.info.consumeitemid,
                num: this.info.price
            };
            this.itemBuyIcon.source = ClientConfig.getItemIcon(r.id),
            this.itemPriceOri.text = "" + 10 * r.num / this.info.discount,
            this.info.discount < 1 ? (this.currentState = "2", this.itemPrice.text = "" + r.num, this.itemSaleGroup.visible = !1) : (this.currentState = "1", this.itemPrice.text = "" + r.num, this.itemSaleGroup.visible = !0, this.itemSaleNum.text = this.info.discount + "折");
            var n = ["每日限购", "每周限购", "每月限购", "赛季限购", "永久限购"],
            a = !1;
            if (1 == this.info.limit) this.itemLimit.visible = !1;
            else {
                this.itemLimit.visible = !0;
                var o = PeakJihadOrderManager.orderShopValue.getValue(this.info.id);
                a = this.info.quantity <= o,
                a && (this.currentState = "3", this.itemPrice.text = "已购买"),
                this.itemLimit.text = n[this.info.limit - 2] + "：" + o + "/" + this.info.quantity
            }
            var s = !0;
            1 == this.itemParseInfo.type && (s = ItemManager.getNumByID(this.itemParseInfo.id) < ItemXMLInfo.getMaxNum(this.itemParseInfo.id)),
            DisplayUtil.setEnabled(this.buyGroup, !a && s, !0),
            this.cacheAsBitmap = !0
        },
        t.prototype.destroy = function() {
            e.prototype.destroy.call(this),
            ImageButtonUtil.removeAll(this)
        },
        t
    } (BaseItemRenderer);
    e.PeakJihadOrderShopItem = t,
    __reflect(t.prototype, "peakJihadOrderPanel.PeakJihadOrderShopItem")
} (peakJihadOrderPanel || (peakJihadOrderPanel = {}));
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
    for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
    i.prototype = t.prototype,
    e.prototype = new i
},
__awaiter = this && this.__awaiter ||
function(e, t, i, r) {
    return new(i || (i = Promise))(function(n, a) {
        function o(e) {
            try {
                u(r.next(e))
            } catch(t) {
                a(t)
            }
        }
        function s(e) {
            try {
                u(r["throw"](e))
            } catch(t) {
                a(t)
            }
        }
        function u(e) {
            e.done ? n(e.value) : new i(function(t) {
                t(e.value)
            }).then(o, s)
        }
        u((r = r.apply(e, t || [])).next())
    })
},
__generator = this && this.__generator ||
function(e, t) {
    function i(e) {
        return function(t) {
            return r([e, t])
        }
    }
    function r(i) {
        if (n) throw new TypeError("Generator is already executing.");
        for (; u;) try {
            if (n = 1, a && (o = a[2 & i[0] ? "return": i[0] ? "throw": "next"]) && !(o = o.call(a, i[1])).done) return o;
            switch (a = 0, o && (i = [0, o.value]), i[0]) {
            case 0:
            case 1:
                o = i;
                break;
            case 4:
                return u.label++,
                {
                    value: i[1],
                    done: !1
                };
            case 5:
                u.label++,
                a = i[1],
                i = [0];
                continue;
            case 7:
                i = u.ops.pop(),
                u.trys.pop();
                continue;
            default:
                if (o = u.trys, !(o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                    u = 0;
                    continue
                }
                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                    u.label = i[1];
                    break
                }
                if (6 === i[0] && u.label < o[1]) {
                    u.label = o[1],
                    o = i;
                    break
                }
                if (o && u.label < o[2]) {
                    u.label = o[2],
                    u.ops.push(i);
                    break
                }
                o[2] && u.ops.pop(),
                u.trys.pop();
                continue
            }
            i = t.call(e, u)
        } catch(r) {
            i = [6, r],
            a = 0
        } finally {
            n = o = 0
        }
        if (5 & i[0]) throw i[1];
        return {
            value: i[0] ? i[1] : void 0,
            done: !0
        }
    }
    var n, a, o, s, u = {
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
peakJihadOrderPanel; !
function(e) {
    var t = function(t) {
        function i() {
            var e = t.call(this) || this;
            return e.skinName = PeakJihadOrderTaskDailyItemSkin,
            e
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            var i = this;
            t.prototype.childrenCreated.call(this),
            this._list.itemRenderer = e.PeakJihadOrderItem,
            ImageButtonUtil.add(this.refresh,
            function() {
                return __awaiter(i, void 0, void 0,
                function() {
                    var e, t = this;
                    return __generator(this,
                    function(i) {
                        switch (i.label) {
                        case 0:
                            return [4, KTool.getMultiValueAsync([203900])];
                        case 1:
                            return e = i.sent(),
                            e[0] < 10 ? SocketConnection.sendByQueue(41906, [4, this.itemIndex + 1],
                            function() {
                                return __awaiter(t, void 0, void 0,
                                function() {
                                    return __generator(this,
                                    function(e) {
                                        return EventManager.dispatchEventWith(PeakJihadOrderManager.PeakJihadOrderPanel_GOT_TASK_REWARD),
                                        [2]
                                    })
                                })
                            }) : Alert.show("您的免费刷新次数已用完，是否花费10钻石进行刷新并使用？",
                            function() {
                                BuyProductManager.buyProductBySocket(260048,
                                function() {
                                    SocketConnection.sendByQueue(41906, [5, 1],
                                    function() {
                                        SocketConnection.sendByQueue(41906, [4, t.itemIndex + 1],
                                        function() {
                                            return __awaiter(t, void 0, void 0,
                                            function() {
                                                return __generator(this,
                                                function(e) {
                                                    return EventManager.dispatchEventWith(PeakJihadOrderManager.PeakJihadOrderPanel_GOT_TASK_REWARD),
                                                    [2]
                                                })
                                            })
                                        })
                                    })
                                },
                                t)
                            }),
                            [2]
                        }
                    })
                })
            },
            this),
            ImageButtonUtil.add(this.get,
            function() {
                SocketConnection.sendByQueue(41906, [1, i.itemIndex + 1],
                function() {
                    EventManager.dispatchEventWith(PeakJihadOrderManager.PeakJihadOrderPanel_GOT_TASK_REWARD)
                })
            },
            this)
        },
        i.prototype.dataChanged = function() {
            t.prototype.dataChanged.call(this),
            this.data && (this.info = this.data, this.updateView())
        },
        i.prototype.updateView = function() {
            var e = config.Pvp_task.getItem(this.info.id),
            t = e.rewardinfo + (";1_11_" + e.exp),
            i = ItemManager.parseItem(t),
            r = PeakJihadOrderManager.getTaskInfoById(e.id, this.itemIndex),
            n = r ? r.progress: 0,
            a = r ? r.state: 0;
            this.desc.text = e.describe,
            this.title.text = e.title,
            this.bg.source = "peak_jihad_order_task_panel_taskbg" + e.rarity + "_png",
            this.taskProgress.text = n + "/" + ~~e.value,
            this.bar.maximum = 100 * ~~e.value,
            this.bar.value = 100 * n,
            this.currentState = 0 == a ? "go": 1 == a ? "get": "got",
            this.refresh.visible = 2 != a,
            i = i.map(function(e) {
                return e.state = a,
                e
            }),
            this._list.dataProvider = new eui.ArrayCollection(i)
        },
        i.prototype.destroy = function() {
            t.prototype.destroy.call(this)
        },
        i
    } (BaseItemRenderer);
    e.PeakJihadOrderTaskDailyItem = t,
    __reflect(t.prototype, "peakJihadOrderPanel.PeakJihadOrderTaskDailyItem");
    var i = function(t) {
        function i() {
            var i = t.call(this) || this;
            return i.skinName = PeakJihadOrderTaskWeeklyItemSkin,
            i._list.itemRenderer = e.PeakJihadOrderItem,
            i
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            var e = this;
            t.prototype.childrenCreated.call(this),
            ImageButtonUtil.add(this.get,
            function() {
                var t = config.Pvp_task.getItem(e.info.id);
                SocketConnection.sendByQueue(41906, [2 == t.time ? 2 : 3, e.info.id - (2 == t.time ? 1e3: 1e4)],
                function() {
                    EventManager.dispatchEventWith(PeakJihadOrderManager.PeakJihadOrderPanel_GOT_TASK_REWARD)
                })
            },
            this)
        },
        i.prototype.dataChanged = function() {
            t.prototype.dataChanged.call(this),
            this.data && (this.info = this.data, this.updateView())
        },
        i.prototype.updateView = function() {
            var e = config.Pvp_task.getItem(this.info.id),
            t = e.rewardinfo + (";1_11_" + e.exp),
            i = ItemManager.parseItem(t),
            r = PeakJihadOrderManager.getTaskInfoById(e.id),
            n = r ? r.progress: 0,
            a = r ? r.state: 0;
            this.title.text = e.describe,
            this.pro.text = "(" + n + "/" + ~~e.value + ")",
            this.currentState = 0 == a ? "go": 1 == a ? "get": "got",
            i = i.map(function(e) {
                return e.state = a,
                e
            }),
            this._list.dataProvider = new eui.ArrayCollection(i)
        },
        i.prototype.destroy = function() {
            t.prototype.destroy.call(this)
        },
        i
    } (BaseItemRenderer);
    e.PeakJihadOrderTaskWeeklyItem = i,
    __reflect(i.prototype, "peakJihadOrderPanel.PeakJihadOrderTaskWeeklyItem")
} (peakJihadOrderPanel || (peakJihadOrderPanel = {}));
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
    for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
    i.prototype = t.prototype,
    e.prototype = new i
},
__awaiter = this && this.__awaiter ||
function(e, t, i, r) {
    return new(i || (i = Promise))(function(n, a) {
        function o(e) {
            try {
                u(r.next(e))
            } catch(t) {
                a(t)
            }
        }
        function s(e) {
            try {
                u(r["throw"](e))
            } catch(t) {
                a(t)
            }
        }
        function u(e) {
            e.done ? n(e.value) : new i(function(t) {
                t(e.value)
            }).then(o, s)
        }
        u((r = r.apply(e, t || [])).next())
    })
},
__generator = this && this.__generator ||
function(e, t) {
    function i(e) {
        return function(t) {
            return r([e, t])
        }
    }
    function r(i) {
        if (n) throw new TypeError("Generator is already executing.");
        for (; u;) try {
            if (n = 1, a && (o = a[2 & i[0] ? "return": i[0] ? "throw": "next"]) && !(o = o.call(a, i[1])).done) return o;
            switch (a = 0, o && (i = [0, o.value]), i[0]) {
            case 0:
            case 1:
                o = i;
                break;
            case 4:
                return u.label++,
                {
                    value: i[1],
                    done: !1
                };
            case 5:
                u.label++,
                a = i[1],
                i = [0];
                continue;
            case 7:
                i = u.ops.pop(),
                u.trys.pop();
                continue;
            default:
                if (o = u.trys, !(o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                    u = 0;
                    continue
                }
                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                    u.label = i[1];
                    break
                }
                if (6 === i[0] && u.label < o[1]) {
                    u.label = o[1],
                    o = i;
                    break
                }
                if (o && u.label < o[2]) {
                    u.label = o[2],
                    u.ops.push(i);
                    break
                }
                o[2] && u.ops.pop(),
                u.trys.pop();
                continue
            }
            i = t.call(e, u)
        } catch(r) {
            i = [6, r],
            a = 0
        } finally {
            n = o = 0
        }
        if (5 & i[0]) throw i[1];
        return {
            value: i[0] ? i[1] : void 0,
            done: !0
        }
    }
    var n, a, o, s, u = {
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
peakJihadOrderPanel; !
function(e) {
    var t = function(t) {
        function i() {
            var e = t.call(this) || this;
            return e.skinName = PeakJihadOrderTaskPanelSkin,
            e
        }
        return __extends(i, t),
        i.prototype.resize = function() {
            var e = Math.min(LevelManager.stage.stageHeight / 640, LevelManager.stage.stageWidth / 1136);
            e > 1 || (this.scaleX = this.scaleY = e)
        },
        i.prototype.childrenCreated = function() {
            var i = this;
            t.prototype.childrenCreated.call(this),
            this.tabGroup = this.rb1.group,
            this.tabGroup.selectedValue = this.rb1.value,
            this.tabGroup.addEventListener(egret.Event.CHANGE, this.updateView, this),
            this._dailyList.itemRenderer = e.PeakJihadOrderTaskDailyItem,
            this._weeklyList.itemRenderer = e.PeakJihadOrderTaskWeeklyItem,
            ImageButtonUtil.add(this.buy,
            function() {
                return PeakJihadOrderManager.orderLevel >= PeakJihadOrderManager.maxLevel ? void BubblerManager.getInstance().showText("您已达到满级") : void PopViewManager.getInstance().openView(new e.PeakJihadOrderPanelBuyLevelPop)
            },
            this),
            EventManager.addEventListener(PeakJihadOrderManager.PeakJihadOrderPanel_GOT_TASK_REWARD,
            function() {
                return __awaiter(i, void 0, void 0,
                function() {
                    return __generator(this,
                    function(e) {
                        switch (e.label) {
                        case 0:
                            return [4, PeakJihadOrderManager.updateTaskInfo()];
                        case 1:
                            return e.sent(),
                            [4, PeakJihadOrderManager.updateOrderValue()];
                        case 2:
                            return e.sent(),
                            [4, PeakJihadOrderManager.updateOrderRewardAllData()];
                        case 3:
                            return e.sent(),
                            this.updateView(),
                            EventManager.dispatchEventWith("PeakJihadOrderTaskPanel_updateRed"),
                            [2]
                        }
                    })
                })
            },
            this),
            this.resize()
        },
        i.prototype.updateView = function(e) {
            var t = this;
            void 0 === e && (e = 0),
            e > 0 && (this.tabGroup.selectedValue = this["rb" + e].value),
            common.TweenUtil.numberAnimation(PeakJihadOrderManager.orderLevel, this.level, .3);
            var i = config.Pass_reward.getItem(PeakJihadOrderManager.orderLevel),
            r = i.exp,
            n = -1 == r;
            this.exp.text = n ? "已满级": PeakJihadOrderManager.orderExp + "/" + r,
            this.bar.maximum = n ? 1 : r,
            this.bar.value = n ? 1 : PeakJihadOrderManager.orderExp;
            var a = Math.max(new Date(PeakJihadOrderManager.endTime.replace(/_/g, "/")).getTime() - SystemTimerManager.sysBJDate.getTime(), 0) / 1e3;
            this.time.text = 0 >= a ? "已到期": TimeUtil.countDownFormat(Math.floor(a), "dd天hh小时");
            var o = ~~this.tabGroup.selectedValue || e;
            this._dailyScroller.visible = 1 == o,
            this.timeGroup.visible = 1 == o,
            this._weeklyScroller.visible = 1 != o,
            KTool.getMultiValueAsync([203900]).then(function(e) {
                t.times.text = "" + Math.max(10 - e[0], 0)
            }),
            this._weeklyScroller.stopAnimation(),
            this._weeklyScroller.viewport.scrollV = 0;
            var s = [];
            switch (o) {
            case 1:
                s = PeakJihadOrderManager.taskInfos.getValue(1),
                this._dailyList.dataProvider = new eui.ArrayCollection(s);
                break;
            case 2:
                s = PeakJihadOrderManager.getTaskInfoSortByTime(2),
                this._weeklyList.dataProvider = new eui.ArrayCollection(s);
                break;
            case 3:
                s = PeakJihadOrderManager.getTaskInfoSortByTime(4),
                this._weeklyList.dataProvider = new eui.ArrayCollection(s)
            }
            this.updateRedDot()
        },
        i.prototype.updateRedDot = function() {
            var e = PeakJihadOrderManager.taskInfos.getValue(1);
            this.dot1.visible = e.filter(function(e) {
                return 1 == e.state
            }).length > 0;
            var t = PeakJihadOrderManager.getTaskInfoSortByTime(2);
            this.dot2.visible = t.filter(function(e) {
                return 1 == e.state
            }).length > 0;
            var i = PeakJihadOrderManager.getTaskInfoSortByTime(4);
            this.dot3.visible = i.filter(function(e) {
                return 1 == e.state
            }).length > 0
        },
        i.prototype.destroy = function() {
            t.prototype.destroy.call(this),
            this.tabGroup.removeEventListener(egret.Event.CHANGE, this.updateView, this)
        },
        i
    } (BaseModule);
    e.PeakJihadOrderTaskPanel = t,
    __reflect(t.prototype, "peakJihadOrderPanel.PeakJihadOrderTaskPanel")
} (peakJihadOrderPanel || (peakJihadOrderPanel = {}));
var __extends = this && this.__extends ||
function(e, t) {
    function i() {
        this.constructor = e
    }
    for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
    i.prototype = t.prototype,
    e.prototype = new i
};
window.generateEUI = window.generateEUI || {},
generateEUI.paths = generateEUI.paths || {},
generateEUI.styles = void 0,
generateEUI.skins = {},
generateEUI.paths["resource/eui_skins/PeakJihadOrderItemSkin.exml"] = window.PeakJihadOrderItemSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["bg", "cur", "icon", "num", "got"],
        this.height = 72,
        this.width = 72,
        this.elementsContent = [this.bg_i(), this.cur_i(), this.icon_i(), this.num_i(), this.got_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i.bg_i = function() {
        var e = new eui.Image;
        return this.bg = e,
        e.horizontalCenter = 0,
        e.source = "peak_jihad_order_main_reward_panel_itembg_png",
        e.verticalCenter = 0,
        e
    },
    i.cur_i = function() {
        var e = new eui.Image;
        return this.cur = e,
        e.horizontalCenter = 0,
        e.source = "peak_jihad_order_main_reward_panel_itembg_light_png",
        e.touchEnabled = !1,
        e.verticalCenter = 0,
        e.visible = !1,
        e
    },
    i.icon_i = function() {
        var e = new eui.Image;
        return this.icon = e,
        e.height = 50,
        e.horizontalCenter = 0,
        e.source = "peak_jihad_order_panel_icon1_png",
        e.verticalCenter = 0,
        e.width = 50,
        e
    },
    i.num_i = function() {
        var e = new eui.Label;
        return this.num = e,
        e.fontFamily = "MFShangHei",
        e.right = 4,
        e.size = 16,
        e.stroke = 1,
        e.strokeColor = 1712696,
        e.text = "99",
        e.textColor = 16776958,
        e.y = 54.484,
        e
    },
    i.got_i = function() {
        var e = new eui.Image;
        return this.got = e,
        e.source = "peak_jihad_order_task_panel_itemgot_png",
        e.visible = !1,
        e.x = 1,
        e.y = 1,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/PeakJihadOrderMainPanelSkin.exml"] = window.PeakJihadOrderMainPanelSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["bg", "curLevel", "time", "buyLevel", "levelPro", "bar", "bigLevel", "itemBig", "_listBig", "btnJJ", "btnGet", "_listReward", "_scrollerReward", "more", "rewardGroup", "taskGroup", "_listShop", "_shopScroller", "menuGroup", "icon0", "num0", "icon1", "num1"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this.rewardGroup_i(), this.taskGroup_i(), this._shopScroller_i(), this.menuGroup_i(), this._Group5_i()],
        this.states = [new eui.State("1", []), new eui.State("2", [new eui.SetProperty("btnJJ", "visible", !1), new eui.SetProperty("btnGet", "x", 350)])]
    }
    __extends(t, e);
    var i = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["thumb"],
            this.elementsContent = [this.thumb_i()],
            this.states = [new eui.State("up", []), new eui.State("down", []), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i.thumb_i = function() {
            var e = new eui.Image;
            return this.thumb = e,
            e.source = "peak_jihad_order_task_panel_progress1_png",
            e.visible = !0,
            e.width = 633,
            e.x = 0,
            e.y = 0,
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
    r.rewardGroup_i = function() {
        var e = new eui.Group;
        return this.rewardGroup = e,
        e.x = 191,
        e.y = 48,
        e.elementsContent = [this._Image1_i(), this._Group1_i(), this.bar_i(), this._Image3_i(), this._Group2_i(), this.btnJJ_i(), this.btnGet_i(), this._scrollerReward_i(), this._Image5_i(), this.more_i()],
        e
    },
    r._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "peak_jihad_order_main_reward_panel_pet_png",
        e.touchEnabled = !1,
        e.x = 268.986,
        e.y = -29.398,
        e
    },
    r._Group1_i = function() {
        var e = new eui.Group;
        return e.cacheAsBitmap = !0,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this._Image2_i(), this.curLevel_i(), this._Label1_i(), this.time_i(), this.buyLevel_i(), this.levelPro_i()],
        e
    },
    r._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "peak_jihad_order_task_panel_progress_bg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    r.curLevel_i = function() {
        var e = new eui.Label;
        return this.curLevel = e,
        e.fontFamily = "REEJI",
        e.horizontalCenter = -398,
        e.size = 32,
        e.text = "0",
        e.textColor = 16777215,
        e.y = 19,
        e
    },
    r._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "REEJI",
        e.size = 20,
        e.text = "本期剩余时间：",
        e.textColor = 10397695,
        e.x = 122,
        e.y = 26,
        e
    },
    r.time_i = function() {
        var e = new eui.Label;
        return this.time = e,
        e.fontFamily = "REEJI",
        e.size = 20,
        e.text = "75天23小时",
        e.textColor = 6355455,
        e.x = 262,
        e.y = 27,
        e
    },
    r.buyLevel_i = function() {
        var e = new eui.Image;
        return this.buyLevel = e,
        e.source = "peak_jihad_order_main_reward_panel_buylevel_png",
        e.x = 780,
        e.y = 30,
        e
    },
    r.levelPro_i = function() {
        var e = new eui.Label;
        return this.levelPro = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "800/1000",
        e.textColor = 16774491,
        e.x = 676.1,
        e.y = 29,
        e
    },
    r.bar_i = function() {
        var e = new eui.ProgressBar;
        return this.bar = e,
        e.value = 0,
        e.visible = !0,
        e.width = 633,
        e.x = 124.02,
        e.y = 51,
        e.skinName = i,
        e
    },
    r._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "peak_jihad_order_main_reward_panel_mid_png",
        e.visible = !0,
        e.x = 19,
        e.y = 105,
        e
    },
    r._Group2_i = function() {
        var e = new eui.Group;
        return e.x = 572.309,
        e.y = 88,
        e.elementsContent = [this._Image4_i(), this.bigLevel_i(), this.itemBig_i(), this._listBig_i()],
        e
    },
    r._Image4_i = function() {
        var e = new eui.Image;
        return e.source = "peak_jihad_order_main_reward_panel_rbg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    r.bigLevel_i = function() {
        var e = new eui.Label;
        return this.bigLevel = e,
        e.fontFamily = "REEJI",
        e.horizontalCenter = -.5,
        e.size = 24,
        e.text = "1",
        e.textColor = 16777215,
        e.y = 23,
        e
    },
    r.itemBig_i = function() {
        var e = new peakJihadOrderPanel.PeakJihadOrderItem;
        return this.itemBig = e,
        e.horizontalCenter = 0,
        e.skinName = "PeakJihadOrderItemSkin",
        e.visible = !1,
        e.y = 73,
        e
    },
    r._listBig_i = function() {
        var e = new eui.List;
        return this._listBig = e,
        e.horizontalCenter = 0,
        e.itemRendererSkinName = PeakJihadOrderItemSkin,
        e.verticalCenter = 88,
        e.width = 72,
        e.y = 285,
        e.layout = this._VerticalLayout1_i(),
        e
    },
    r._VerticalLayout1_i = function() {
        var e = new eui.VerticalLayout;
        return e.gap = 8,
        e
    },
    r.btnJJ_i = function() {
        var e = new eui.Image;
        return this.btnJJ = e,
        e.source = "peak_jihad_order_main_reward_panel_btnjinjie_png",
        e.x = 255,
        e.y = 502,
        e
    },
    r.btnGet_i = function() {
        var e = new eui.Image;
        return this.btnGet = e,
        e.source = "peak_jihad_order_main_reward_panel_btnlingqu_png",
        e.x = 409,
        e.y = 502,
        e
    },
    r._scrollerReward_i = function() {
        var e = new eui.Scroller;
        return this._scrollerReward = e,
        e.bounces = !1,
        e.height = 395,
        e.width = 459.849,
        e.x = 124.456,
        e.y = 95,
        e.viewport = this._listReward_i(),
        e
    },
    r._listReward_i = function() {
        var e = new eui.List;
        return this._listReward = e,
        e.itemRendererSkinName = PeakJihadOrderMainRewardItemSkin,
        e.layout = this._HorizontalLayout1_i(),
        e
    },
    r._HorizontalLayout1_i = function() {
        var e = new eui.HorizontalLayout;
        return e.gap = -6,
        e
    },
    r._Image5_i = function() {
        var e = new eui.Image;
        return e.source = "peak_jihad_order_main_reward_panel_leftbg_png",
        e.visible = !0,
        e.x = 0,
        e.y = 94,
        e
    },
    r.more_i = function() {
        var e = new eui.Image;
        return this.more = e,
        e.alpha = 0,
        e.anchorOffsetX = 0,
        e.anchorOffsetY = 0,
        e.height = 107,
        e.horizontalCenter = -536.5,
        e.source = "peak_jihad_order_main_reward_panel_ty_4_kb_png",
        e.verticalCenter = 80.5,
        e.width = 115,
        e
    },
    r.taskGroup_i = function() {
        var e = new eui.Group;
        return this.taskGroup = e,
        e.height = 580,
        e.left = 170,
        e.right = 76,
        e.top = 48,
        e.verticalCenter = 18,
        e.visible = !0,
        e
    },
    r._shopScroller_i = function() {
        var e = new eui.Scroller;
        return this._shopScroller = e,
        e.height = 551,
        e.left = 129,
        e.right = 25,
        e.visible = !0,
        e.y = 63,
        e.viewport = this._listShop_i(),
        e
    },
    r._listShop_i = function() {
        var e = new eui.List;
        return this._listShop = e,
        e.layout = this._TileLayout1_i(),
        e
    },
    r._TileLayout1_i = function() {
        var e = new eui.TileLayout;
        return e
    },
    r.menuGroup_i = function() {
        var e = new eui.Group;
        return this.menuGroup = e,
        e.x = 0,
        e.y = 48,
        e
    },
    r._Group5_i = function() {
        var e = new eui.Group;
        return e.cacheAsBitmap = !0,
        e.right = 60,
        e.top = 0,
        e.visible = !0,
        e.elementsContent = [this._Group3_i(), this._Group4_i()],
        e
    },
    r._Group3_i = function() {
        var e = new eui.Group;
        return e.right = 168,
        e.y = 12,
        e.elementsContent = [this._Image6_i(), this.icon0_i(), this.num0_i()],
        e
    },
    r._Image6_i = function() {
        var e = new eui.Image;
        return e.source = "peak_jihad_order_panel_item_num_bg_png",
        e.x = 0,
        e.y = 3.171,
        e
    },
    r.icon0_i = function() {
        var e = new eui.Image;
        return this.icon0 = e,
        e.height = 55,
        e.left = -1,
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
    r._Group4_i = function() {
        var e = new eui.Group;
        return e.right = 7,
        e.y = 12,
        e.elementsContent = [this._Image7_i(), this.icon1_i(), this.num1_i()],
        e
    },
    r._Image7_i = function() {
        var e = new eui.Image;
        return e.source = "peak_jihad_order_panel_item_num_bg_png",
        e.x = 0,
        e.y = 2.108,
        e
    },
    r.icon1_i = function() {
        var e = new eui.Image;
        return this.icon1 = e,
        e.height = 30,
        e.left = -1,
        e.width = 30,
        e.y = -3.444,
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
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/PeakJihadOrderMainRewardItemSkin.exml"] = window.PeakJihadOrderMainRewardItemSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["bg", "select", "level", "item", "_list", "touchFree", "touchPay", "mas"],
        this.height = 394,
        this.width = 100,
        this.elementsContent = [this.bg_i(), this.select_i(), this.level_i(), this.item_i(), this._list_i(), this.touchFree_i(), this.touchPay_i(), this.mas_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i.bg_i = function() {
        var e = new eui.Image;
        return this.bg = e,
        e.horizontalCenter = 0,
        e.source = "peak_jihad_order_main_reward_panel_lbg_png",
        e.y = 10,
        e
    },
    i.select_i = function() {
        var e = new eui.Image;
        return this.select = e,
        e.horizontalCenter = 0,
        e.source = "peak_jihad_order_main_reward_panel_select_png",
        e.touchEnabled = !1,
        e.visible = !0,
        e.y = 0,
        e
    },
    i.level_i = function() {
        var e = new eui.Label;
        return this.level = e,
        e.fontFamily = "REEJI",
        e.horizontalCenter = 0,
        e.size = 20,
        e.text = "2",
        e.textColor = 14609151,
        e.y = 17.365,
        e
    },
    i.item_i = function() {
        var e = new peakJihadOrderPanel.PeakJihadOrderItem;
        return this.item = e,
        e.horizontalCenter = 0,
        e.skinName = "PeakJihadOrderItemSkin",
        e.y = 73,
        e
    },
    i._list_i = function() {
        var e = new eui.List;
        return this._list = e,
        e.itemRendererSkinName = PeakJihadOrderItemSkin,
        e.verticalCenter = 88,
        e.width = 72,
        e.x = 14,
        e.y = 285,
        e.layout = this._VerticalLayout1_i(),
        e
    },
    i._VerticalLayout1_i = function() {
        var e = new eui.VerticalLayout;
        return e.gap = 8,
        e
    },
    i.touchFree_i = function() {
        var e = new eui.Group;
        return this.touchFree = e,
        e.height = 178,
        e.horizontalCenter = 0,
        e.width = 100,
        e.y = 0,
        e
    },
    i.touchPay_i = function() {
        var e = new eui.Group;
        return this.touchPay = e,
        e.height = 215,
        e.horizontalCenter = 0,
        e.width = 100,
        e.y = 179,
        e
    },
    i.mas_i = function() {
        var e = new eui.Image;
        return this.mas = e,
        e.bottom = 9,
        e.height = 205.85,
        e.horizontalCenter = 0,
        e.scale9Grid = new egret.Rectangle(30, 67, 23, 68),
        e.source = "peak_jihad_order_task_panel_mas_png",
        e.touchEnabled = !1,
        e.visible = !0,
        e.width = 92,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/PeakJihadOrderPanelBuyLevelPopSkin.exml"] = window.PeakJihadOrderPanelBuyLevelPopSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["need", "icon", "buyNum", "add", "drop", "_list", "btnCancel", "btnBuy", "tips", "close"],
        this.height = 431,
        this.width = 753,
        this.elementsContent = [this._Group1_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Group1_i = function() {
        var e = new eui.Group;
        return e.x = 0,
        e.y = 0,
        e.elementsContent = [this._Image1_i(), this._Image2_i(), this._Image3_i(), this._Label1_i(), this._Label2_i(), this.need_i(), this.icon_i(), this.buyNum_i(), this._Label3_i(), this.add_i(), this.drop_i(), this._Scroller1_i(), this.btnCancel_i(), this.btnBuy_i(), this.tips_i(), this._Image4_i(), this.close_i()],
        e
    },
    i._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "peak_jihad_order_panel_pop_bg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.height = 194,
        e.scale9Grid = new egret.Rectangle(4, 4, 4, 4),
        e.source = "peak_jihad_order_panel_pop_rec2_png",
        e.width = 665,
        e.x = 41,
        e.y = 76,
        e
    },
    i._Image3_i = function() {
        var e = new eui.Image;
        return e.height = 43,
        e.scale9Grid = new egret.Rectangle(1, 1, 10, 10),
        e.source = "peak_jihad_order_panel_pop_rec3_png",
        e.width = 665,
        e.x = 41,
        e.y = 277,
        e
    },
    i._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "REEJI",
        e.size = 20,
        e.text = "购买等级",
        e.textColor = 8631282,
        e.x = 56,
        e.y = 289,
        e
    },
    i._Label2_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "需要",
        e.textColor = 8631282,
        e.x = 312,
        e.y = 332,
        e
    },
    i.need_i = function() {
        var e = new eui.Label;
        return this.need = e,
        e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "500",
        e.textColor = 16514895,
        e.x = 393,
        e.y = 333,
        e
    },
    i.icon_i = function() {
        var e = new eui.Image;
        return this.icon = e,
        e.height = 30,
        e.source = "peak_jihad_order_panel_pop_icon_gold_png",
        e.width = 30,
        e.x = 359,
        e.y = 326,
        e
    },
    i.buyNum_i = function() {
        var e = new eui.EditableText;
        return this.buyNum = e,
        e.fontFamily = "REEJI",
        e.height = 20,
        e.promptColor = 16514895,
        e.restrict = "0-9",
        e.size = 20,
        e.text = "10",
        e.textAlign = "center",
        e.textColor = 16514895,
        e.width = 60,
        e.wordWrap = !1,
        e.x = 592.795,
        e.y = 290,
        e
    },
    i._Label3_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "REEJI",
        e.size = 20,
        e.text = "10",
        e.textColor = 16514895,
        e.visible = !1,
        e.x = 610,
        e.y = 290,
        e
    },
    i.add_i = function() {
        var e = new eui.Image;
        return this.add = e,
        e.source = "peak_jihad_order_panel_pop_add_png",
        e.x = 661,
        e.y = 285,
        e
    },
    i.drop_i = function() {
        var e = new eui.Image;
        return this.drop = e,
        e.source = "peak_jihad_order_panel_pop_drop_png",
        e.x = 556,
        e.y = 285,
        e
    },
    i._Scroller1_i = function() {
        var e = new eui.Scroller;
        return e.height = 176.336,
        e.width = 643.979,
        e.x = 51,
        e.y = 87,
        e.viewport = this._list_i(),
        e
    },
    i._list_i = function() {
        var e = new eui.List;
        return this._list = e,
        e.layout = this._TileLayout1_i(),
        e
    },
    i._TileLayout1_i = function() {
        var e = new eui.TileLayout;
        return e
    },
    i.btnCancel_i = function() {
        var e = new eui.Image;
        return this.btnCancel = e,
        e.source = "peak_jihad_order_panel_pop_btncancel_png",
        e.x = 231,
        e.y = 364,
        e
    },
    i.btnBuy_i = function() {
        var e = new eui.Image;
        return this.btnBuy = e,
        e.source = "peak_jihad_order_panel_pop_btnbuy_png",
        e.x = 387,
        e.y = 364,
        e
    },
    i.tips_i = function() {
        var e = new eui.Label;
        return this.tips = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "购买后升至5级，可获得以下奖励",
        e.textColor = 12111615,
        e.x = 40,
        e.y = 52,
        e
    },
    i._Image4_i = function() {
        var e = new eui.Image;
        return e.source = "peak_jihad_order_panel_pop_title2_png",
        e.x = 36,
        e.y = 2,
        e
    },
    i.close_i = function() {
        var e = new eui.Image;
        return this.close = e,
        e.source = "peak_jihad_order_panel_close_png",
        e.x = 712,
        e.y = 1,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/PeakJihadOrderPanelRewardPopSkin.exml"] = window.PeakJihadOrderPanelRewardPopSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["_list", "close"],
        this.height = 431,
        this.width = 753,
        this.elementsContent = [this._Group1_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Group1_i = function() {
        var e = new eui.Group;
        return e.visible = !0,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this._Image1_i(), this._Image2_i(), this._Scroller1_i(), this.close_i(), this._Image3_i()],
        e
    },
    i._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "peak_jihad_order_panel_pop_bg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.height = 357,
        e.scale9Grid = new egret.Rectangle(4, 4, 4, 4),
        e.source = "peak_jihad_order_panel_pop_rec1_png",
        e.width = 665,
        e.x = 41,
        e.y = 48,
        e
    },
    i._Scroller1_i = function() {
        var e = new eui.Scroller;
        return e.height = 341,
        e.width = 643,
        e.x = 51,
        e.y = 58,
        e.viewport = this._list_i(),
        e
    },
    i._list_i = function() {
        var e = new eui.List;
        return this._list = e,
        e.layout = this._TileLayout1_i(),
        e
    },
    i._TileLayout1_i = function() {
        var e = new eui.TileLayout;
        return e
    },
    i.close_i = function() {
        var e = new eui.Image;
        return this.close = e,
        e.source = "peak_jihad_order_panel_close_png",
        e.x = 712,
        e.y = 1,
        e
    },
    i._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "peak_jihad_order_panel_pop_title1_png",
        e.x = 36,
        e.y = 2,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/PeakJihadOrderPanelSkin.exml"] = window.PeakJihadOrderPanelSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["bg", "grp_zz_0", "grp_zz_1", "grp_zz_2", "itemPriceOri", "num1", "priceGroup1", "got0", "grp_jj_0", "grp_jj_1", "grp_jj_2", "num", "priceGroup", "got", "close"],
        this.currentState = "1",
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this._Group3_i()],
        this.states = [new eui.State("2", [new eui.SetProperty("num1", "text", "60"), new eui.SetProperty("got0", "visible", !1), new eui.SetProperty("priceGroup", "visible", !1), new eui.SetProperty("got", "visible", !0)]), new eui.State("1", [new eui.SetProperty("itemPriceOri", "visible", !1), new eui.SetProperty("_Image4", "visible", !1), new eui.SetProperty("num1", "text", "128"), new eui.SetProperty("got0", "visible", !1), new eui.SetProperty("got", "visible", !1)]), new eui.State("3", [new eui.SetProperty("itemPriceOri", "visible", !1), new eui.SetProperty("_Image4", "visible", !1), new eui.SetProperty("priceGroup1", "visible", !1), new eui.SetProperty("priceGroup", "visible", !1)])]
    }
    __extends(t, e);
    var i = t.prototype;
    return i.bg_i = function() {
        var e = new eui.Image;
        return this.bg = e,
        e.horizontalCenter = 0,
        e.source = "peak_jihad_order_panel_pet_png",
        e.verticalCenter = 0,
        e.visible = !0,
        e
    },
    i._Group3_i = function() {
        var e = new eui.Group;
        return e.cacheAsBitmap = !0,
        e.left = 0,
        e.right = 0,
        e.y = 0,
        e.elementsContent = [this._Image1_i(), this._Group1_i(), this._Group2_i(), this.close_i()],
        e
    },
    i._Image1_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = -310.5,
        e.source = "peak_jihad_order_panel_title_png",
        e.y = 401,
        e
    },
    i._Group1_i = function() {
        var e = new eui.Group;
        return e.height = 488,
        e.horizontalCenter = 373.5,
        e.width = 269,
        e.y = 92,
        e.elementsContent = [this._Image2_i(), this.grp_zz_0_i(), this.grp_zz_1_i(), this.grp_zz_2_i(), this.priceGroup1_i(), this.got0_i()],
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "peak_jihad_order_panel_txbg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.grp_zz_0_i = function() {
        var e = new eui.Group;
        return this.grp_zz_0 = e,
        e.height = 70,
        e.width = 70,
        e.x = 23,
        e.y = 300,
        e
    },
    i.grp_zz_1_i = function() {
        var e = new eui.Group;
        return this.grp_zz_1 = e,
        e.height = 70,
        e.width = 70,
        e.x = 96.343,
        e.y = 300,
        e
    },
    i.grp_zz_2_i = function() {
        var e = new eui.Group;
        return this.grp_zz_2 = e,
        e.height = 70,
        e.width = 70,
        e.x = 168.845,
        e.y = 300,
        e
    },
    i.priceGroup1_i = function() {
        var e = new eui.Group;
        return this.priceGroup1 = e,
        e.touchChildren = !1,
        e.x = 15.448,
        e.y = 411,
        e.elementsContent = [this._Image3_i(), this.itemPriceOri_i(), this._Image4_i(), this.num1_i()],
        e
    },
    i._Image3_i = function() {
        var e = new eui.Image;
        return e.height = 57,
        e.source = "peak_jihad_order_panel_numbg_png",
        e.width = 226,
        e.x = 0,
        e.y = 0,
        e
    },
    i.itemPriceOri_i = function() {
        var e = new eui.Label;
        return this.itemPriceOri = e,
        e.fontFamily = "REEJI",
        e.horizontalCenter = 64,
        e.size = 26,
        e.text = "128",
        e.textColor = 13209671,
        e.y = 22,
        e
    },
    i._Image4_i = function() {
        var e = new eui.Image;
        return this._Image4 = e,
        e.source = "peak_jihad_order_panel_itembuyno_png",
        e.width = 54,
        e.x = 151,
        e.y = 30,
        e
    },
    i.num1_i = function() {
        var e = new eui.Label;
        return this.num1 = e,
        e.fontFamily = "REEJI",
        e.size = 30,
        e.text = "128",
        e.textColor = 11230768,
        e.x = 102,
        e.y = 14,
        e
    },
    i.got0_i = function() {
        var e = new eui.Image;
        return this.got0 = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "peak_jihad_order_panel_got1_png",
        e.x = 42.601,
        e.y = 416,
        e
    },
    i._Group2_i = function() {
        var e = new eui.Group;
        return e.height = 486,
        e.horizontalCenter = 74.5,
        e.visible = !0,
        e.width = 261,
        e.y = 92,
        e.elementsContent = [this._Image5_i(), this.grp_jj_0_i(), this.grp_jj_1_i(), this.grp_jj_2_i(), this.priceGroup_i(), this.got_i()],
        e
    },
    i._Image5_i = function() {
        var e = new eui.Image;
        return e.source = "peak_jihad_order_panel_labg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.grp_jj_0_i = function() {
        var e = new eui.Group;
        return this.grp_jj_0 = e,
        e.height = 70,
        e.width = 70,
        e.x = 19.31,
        e.y = 297,
        e
    },
    i.grp_jj_1_i = function() {
        var e = new eui.Group;
        return this.grp_jj_1 = e,
        e.height = 70,
        e.width = 70,
        e.x = 94.375,
        e.y = 297,
        e
    },
    i.grp_jj_2_i = function() {
        var e = new eui.Group;
        return this.grp_jj_2 = e,
        e.height = 70,
        e.width = 70,
        e.x = 166.83,
        e.y = 297,
        e
    },
    i.priceGroup_i = function() {
        var e = new eui.Group;
        return this.priceGroup = e,
        e.touchChildren = !1,
        e.x = 23,
        e.y = 411,
        e.elementsContent = [this._Image6_i(), this.num_i()],
        e
    },
    i._Image6_i = function() {
        var e = new eui.Image;
        return e.height = 57,
        e.source = "peak_jihad_order_panel_numbg_png",
        e.visible = !0,
        e.width = 226,
        e.x = 0,
        e.y = 0,
        e
    },
    i.num_i = function() {
        var e = new eui.Label;
        return this.num = e,
        e.fontFamily = "REEJI",
        e.size = 30,
        e.text = "68",
        e.textColor = 11230768,
        e.x = 111,
        e.y = 14,
        e
    },
    i.got_i = function() {
        var e = new eui.Image;
        return this.got = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "peak_jihad_order_panel_got_png",
        e.x = 50,
        e.y = 416,
        e
    },
    i.close_i = function() {
        var e = new eui.Image;
        return this.close = e,
        e.horizontalCenter = 515.5,
        e.source = "peak_jihad_order_panel_close_png",
        e.y = 11,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/PeakJihadOrderShopItemSkin.exml"] = window.PeakJihadOrderShopItemSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["itemPrice", "itemPriceOri", "itemBuyIcon", "buyGroup", "itemLimit", "itemIcon", "itemName", "itemNum", "dayTime", "timeGroup", "itemSaleNum", "itemSaleGroup"],
        this.height = 169,
        this.width = 146,
        this.elementsContent = [this._Group1_i()],
        this.states = [new eui.State("1", []), new eui.State("2", [new eui.SetProperty("itemPrice", "x", 58.74), new eui.SetProperty("itemPrice", "horizontalCenter", 5), new eui.SetProperty("itemPriceOri", "visible", !1), new eui.SetProperty("_Image3", "visible", !1), new eui.SetProperty("itemBuyIcon", "x", 37.74), new eui.SetProperty("itemBuyIcon", "horizontalCenter", -33.5), new eui.SetProperty("itemBuyIcon", "verticalCenter", .5)]), new eui.State("3", [new eui.SetProperty("itemPrice", "horizontalCenter", 0), new eui.SetProperty("itemPriceOri", "visible", !1), new eui.SetProperty("_Image3", "visible", !1), new eui.SetProperty("itemBuyIcon", "visible", !1)])]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Group1_i = function() {
        var e = new eui.Group;
        return e.cacheAsBitmap = !0,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this._Image1_i(), this.buyGroup_i(), this.itemLimit_i(), this._Image4_i(), this.itemIcon_i(), this.itemName_i(), this.itemNum_i(), this.timeGroup_i(), this.itemSaleGroup_i()],
        e
    },
    i._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "peak_jihad_order_panel_itembg_png",
        e.x = 1,
        e.y = 0,
        e
    },
    i.buyGroup_i = function() {
        var e = new eui.Group;
        return this.buyGroup = e,
        e.horizontalCenter = .5,
        e.touchChildren = !1,
        e.y = 134,
        e.elementsContent = [this._Image2_i(), this.itemPrice_i(), this.itemPriceOri_i(), this._Image3_i(), this.itemBuyIcon_i()],
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.height = 31,
        e.source = "peak_jihad_order_panel_itembtnbg_png",
        e.width = 139,
        e.x = 0,
        e.y = 0,
        e
    },
    i.itemPrice_i = function() {
        var e = new eui.Label;
        return this.itemPrice = e,
        e.fontFamily = "MFShangHei",
        e.horizontalCenter = -9,
        e.size = 18,
        e.text = "3000",
        e.textColor = 10180889,
        e.touchEnabled = !1,
        e.y = 7,
        e
    },
    i.itemPriceOri_i = function() {
        var e = new eui.Label;
        return this.itemPriceOri = e,
        e.fontFamily = "MFShangHei",
        e.horizontalCenter = 34.5,
        e.size = 16,
        e.text = "3000",
        e.textColor = 13209671,
        e.touchEnabled = !1,
        e.y = 11,
        e
    },
    i._Image3_i = function() {
        var e = new eui.Image;
        return this._Image3 = e,
        e.source = "peak_jihad_order_panel_itembuyno_png",
        e.touchEnabled = !1,
        e.x = 84,
        e.y = 17,
        e
    },
    i.itemBuyIcon_i = function() {
        var e = new eui.Image;
        return this.itemBuyIcon = e,
        e.height = 20,
        e.horizontalCenter = -41.5,
        e.touchEnabled = !1,
        e.verticalCenter = .5,
        e.width = 20,
        e
    },
    i.itemLimit_i = function() {
        var e = new eui.Label;
        return this.itemLimit = e,
        e.fontFamily = "MFShangHei",
        e.horizontalCenter = 2.5,
        e.size = 14,
        e.text = "每日限兑：1/1",
        e.textColor = 4187130,
        e.y = 115,
        e
    },
    i._Image4_i = function() {
        var e = new eui.Image;
        return e.source = "peak_jihad_order_panel_itemnamebg_png",
        e.visible = !0,
        e.x = 5,
        e.y = 3,
        e
    },
    i.itemIcon_i = function() {
        var e = new eui.Image;
        return this.itemIcon = e,
        e.height = 70,
        e.horizontalCenter = 0,
        e.verticalCenter = -9,
        e.width = 70,
        e
    },
    i.itemName_i = function() {
        var e = new eui.Label;
        return this.itemName = e,
        e.fontFamily = "MFShangHei",
        e.horizontalCenter = 0,
        e.size = 16,
        e.text = "道具道具道具道...",
        e.textColor = 14543359,
        e.y = 7,
        e
    },
    i.itemNum_i = function() {
        var e = new eui.Label;
        return this.itemNum = e,
        e.fontFamily = "MFShangHei",
        e.right = 23,
        e.size = 18,
        e.stroke = 1,
        e.strokeColor = 1518417,
        e.text = "999",
        e.textColor = 14543359,
        e.touchEnabled = !1,
        e.y = 89,
        e
    },
    i.timeGroup_i = function() {
        var e = new eui.Group;
        return this.timeGroup = e,
        e.visible = !1,
        e.x = 6,
        e.y = 28,
        e.elementsContent = [this._Image5_i(), this.dayTime_i()],
        e
    },
    i._Image5_i = function() {
        var e = new eui.Image;
        return e.source = "peak_jihad_order_panel_timebg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.dayTime_i = function() {
        var e = new eui.Label;
        return this.dayTime = e,
        e.fontFamily = "MFShangHei",
        e.size = 14,
        e.text = "剩30天",
        e.textColor = 16317183,
        e.x = 34,
        e.y = 2,
        e
    },
    i.itemSaleGroup_i = function() {
        var e = new eui.Group;
        return this.itemSaleGroup = e,
        e.x = 0,
        e.y = 28,
        e.elementsContent = [this._Image6_i(), this.itemSaleNum_i()],
        e
    },
    i._Image6_i = function() {
        var e = new eui.Image;
        return e.height = 20,
        e.source = "peak_jihad_order_panel_itemsalebg_png",
        e.width = 40,
        e.x = 0,
        e.y = 0,
        e
    },
    i.itemSaleNum_i = function() {
        var e = new eui.Label;
        return this.itemSaleNum = e,
        e.fontFamily = "MFShangHei",
        e.size = 14,
        e.text = "8折",
        e.textColor = 16777215,
        e.x = 6,
        e.y = 2,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/PeakJihadOrderTaskDailyItemSkin.exml"] = window.PeakJihadOrderTaskDailyItemSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["bg", "title", "desc", "taskProgress", "refresh", "got", "go", "get", "_list", "bar"],
        this.height = 409,
        this.width = 270,
        this.elementsContent = [this._Group1_i(), this._Scroller1_i(), this.bar_i()],
        this.states = [new eui.State("go", [new eui.SetProperty("got", "visible", !1), new eui.SetProperty("get", "visible", !1)]), new eui.State("get", [new eui.SetProperty("got", "visible", !1), new eui.SetProperty("go", "visible", !1)]), new eui.State("got", [new eui.SetProperty("go", "visible", !1), new eui.SetProperty("get", "visible", !1)])]
    }
    __extends(t, e);
    var i = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["thumb"],
            this.elementsContent = [this.thumb_i()],
            this.states = [new eui.State("up", []), new eui.State("down", []), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i.thumb_i = function() {
            var e = new eui.Image;
            return this.thumb = e,
            e.source = "peak_jihad_order_main_reward_panel_progress_png",
            e.visible = !0,
            e.width = 204,
            e.x = 0,
            e.y = 0,
            e
        },
        t
    } (eui.Skin),
    r = t.prototype;
    return r._Group1_i = function() {
        var e = new eui.Group;
        return e.cacheAsBitmap = !0,
        e.height = 409,
        e.width = 270,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this.bg_i(), this.title_i(), this.desc_i(), this._Image1_i(), this.taskProgress_i(), this.refresh_i(), this.got_i(), this.go_i(), this.get_i()],
        e
    },
    r.bg_i = function() {
        var e = new eui.Image;
        return this.bg = e,
        e.bottom = 0,
        e.horizontalCenter = 0,
        e.source = "peak_jihad_order_task_panel_taskbg2_png",
        e.width = 270,
        e
    },
    r.title_i = function() {
        var e = new eui.Label;
        return this.title = e,
        e.fontFamily = "REEJI",
        e.horizontalCenter = -5.5,
        e.size = 20,
        e.text = "小试牛刀",
        e.textColor = 16777215,
        e.y = 21,
        e
    },
    r.desc_i = function() {
        var e = new eui.Label;
        return this.desc = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "在巅峰圣战竞技模式中，连续赢得三场胜利。",
        e.textColor = 12834813,
        e.width = 218,
        e.x = 24,
        e.y = 76,
        e
    },
    r._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "peak_jihad_order_task_panel_progress_bg1_png",
        e.x = 15,
        e.y = 192,
        e
    },
    r.taskProgress_i = function() {
        var e = new eui.Label;
        return this.taskProgress = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "1/3",
        e.textColor = 16774235,
        e.x = 120,
        e.y = 217.584,
        e
    },
    r.refresh_i = function() {
        var e = new eui.Image;
        return this.refresh = e,
        e.source = "peak_jihad_order_task_panel_refresh_png",
        e.x = 225,
        e.y = 16,
        e
    },
    r.got_i = function() {
        var e = new eui.Image;
        return this.got = e,
        e.horizontalCenter = 0,
        e.source = "peak_jihad_order_task_panel_got_png",
        e.y = 342,
        e
    },
    r.go_i = function() {
        var e = new eui.Image;
        return this.go = e,
        e.horizontalCenter = 0,
        e.source = "peak_jihad_order_task_panel_go_png",
        e.y = 345,
        e
    },
    r.get_i = function() {
        var e = new eui.Image;
        return this.get = e,
        e.horizontalCenter = 0,
        e.source = "peak_jihad_order_task_panel_get_png",
        e.visible = !0,
        e.y = 338,
        e
    },
    r._Scroller1_i = function() {
        var e = new eui.Scroller;
        return e.height = 60,
        e.horizontalCenter = -1,
        e.y = 248,
        e.viewport = this._list_i(),
        e
    },
    r._list_i = function() {
        var e = new eui.List;
        return this._list = e,
        e.itemRendererSkinName = PeakJihadOrderItemSkin,
        e.scaleX = .8,
        e.scaleY = .8,
        e.x = 0,
        e.layout = this._HorizontalLayout1_i(),
        e
    },
    r._HorizontalLayout1_i = function() {
        var e = new eui.HorizontalLayout;
        return e.horizontalAlign = "center",
        e
    },
    r.bar_i = function() {
        var e = new eui.ProgressBar;
        return this.bar = e,
        e.value = 0,
        e.visible = !0,
        e.width = 204,
        e.x = 28.374,
        e.y = 196.916,
        e.skinName = i,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/PeakJihadOrderTaskPanelSkin.exml"] = window.PeakJihadOrderTaskPanelSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["rb1", "dot1", "rb2", "dot2", "rb3", "dot3", "level", "time", "buy", "bar", "exp", "times", "timeGroup", "_dailyList", "_dailyScroller", "_weeklyList", "_weeklyScroller"],
        this.height = 573,
        this.width = 890,
        this.elementsContent = [this._Group2_i()]
    }
    __extends(t, e);
    var i = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["labelDisplay"],
            this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "peak_jihad_order_task_panel_btnmeiri_down_png")]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.percentHeight = 100,
            e.source = "peak_jihad_order_task_panel_btnmeiri_up_png",
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
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "peak_jihad_order_task_panel_btnmeizhou_down_png")]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.percentHeight = 100,
            e.source = "peak_jihad_order_task_panel_btnmeizhou_up_png",
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
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "peak_jihad_order_task_panel_btnsaiji_down_png")]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.percentHeight = 100,
            e.source = "peak_jihad_order_task_panel_btnsaiji_up_png",
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
            this.skinParts = ["thumb"],
            this.elementsContent = [this.thumb_i()],
            this.states = [new eui.State("up", []), new eui.State("down", []), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i.thumb_i = function() {
            var e = new eui.Image;
            return this.thumb = e,
            e.source = "peak_jihad_order_task_panel_progress1_png",
            e.visible = !0,
            e.width = 633,
            e.x = 0,
            e.y = 0,
            e
        },
        t
    } (eui.Skin),
    o = t.prototype;
    return o._Group2_i = function() {
        var e = new eui.Group;
        return e.height = 573,
        e.horizontalCenter = 0,
        e.width = 890,
        e.y = 0,
        e.elementsContent = [this.rb1_i(), this.dot1_i(), this.rb2_i(), this.dot2_i(), this.rb3_i(), this.dot3_i(), this._Group1_i(), this.timeGroup_i(), this._dailyScroller_i(), this._weeklyScroller_i()],
        e
    },
    o.rb1_i = function() {
        var e = new eui.RadioButton;
        return this.rb1 = e,
        e.groupName = "PeakJihadOrderTask_group",
        e.value = "1",
        e.x = 815,
        e.y = 96,
        e.skinName = i,
        e
    },
    o.dot1_i = function() {
        var e = new eui.Image;
        return this.dot1 = e,
        e.height = 20,
        e.source = "dot_png",
        e.visible = !1,
        e.width = 20,
        e.x = 852,
        e.y = 96.879,
        e
    },
    o.rb2_i = function() {
        var e = new eui.RadioButton;
        return this.rb2 = e,
        e.groupName = "PeakJihadOrderTask_group",
        e.value = "2",
        e.x = 815,
        e.y = 241,
        e.skinName = r,
        e
    },
    o.dot2_i = function() {
        var e = new eui.Image;
        return this.dot2 = e,
        e.height = 20,
        e.source = "dot_png",
        e.visible = !1,
        e.width = 20,
        e.x = 852,
        e.y = 241.901,
        e
    },
    o.rb3_i = function() {
        var e = new eui.RadioButton;
        return this.rb3 = e,
        e.groupName = "PeakJihadOrderTask_group",
        e.value = "3",
        e.x = 815,
        e.y = 385,
        e.skinName = n,
        e
    },
    o.dot3_i = function() {
        var e = new eui.Image;
        return this.dot3 = e,
        e.height = 20,
        e.source = "dot_png",
        e.visible = !1,
        e.width = 20,
        e.x = 852,
        e.y = 385.773,
        e
    },
    o._Group1_i = function() {
        var e = new eui.Group;
        return e.x = 0,
        e.y = 0,
        e.elementsContent = [this._Image1_i(), this.level_i(), this._Label1_i(), this.time_i(), this.buy_i(), this.bar_i(), this.exp_i()],
        e
    },
    o._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "peak_jihad_order_task_panel_progress_bg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    o.level_i = function() {
        var e = new eui.Label;
        return this.level = e,
        e.fontFamily = "REEJI",
        e.horizontalCenter = -398,
        e.size = 32,
        e.text = "0",
        e.textColor = 16777215,
        e.y = 19,
        e
    },
    o._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "REEJI",
        e.size = 20,
        e.text = "本期剩余时间：",
        e.textColor = 10397695,
        e.x = 122,
        e.y = 26,
        e
    },
    o.time_i = function() {
        var e = new eui.Label;
        return this.time = e,
        e.fontFamily = "REEJI",
        e.size = 20,
        e.text = "75天23小时",
        e.textColor = 6355455,
        e.x = 262,
        e.y = 27,
        e
    },
    o.buy_i = function() {
        var e = new eui.Image;
        return this.buy = e,
        e.source = "peak_jihad_order_main_reward_panel_buylevel_png",
        e.x = 780,
        e.y = 30,
        e
    },
    o.bar_i = function() {
        var e = new eui.ProgressBar;
        return this.bar = e,
        e.value = 0,
        e.visible = !0,
        e.width = 633,
        e.x = 124.02,
        e.y = 51,
        e.skinName = a,
        e
    },
    o.exp_i = function() {
        var e = new eui.Label;
        return this.exp = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "800/1000",
        e.textColor = 16774491,
        e.x = 676.1,
        e.y = 29,
        e
    },
    o.timeGroup_i = function() {
        var e = new eui.Group;
        return this.timeGroup = e,
        e.x = 349.86,
        e.y = 532.48,
        e.elementsContent = [this._Label2_i(), this.times_i()],
        e
    },
    o._Label2_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "REEJI",
        e.size = 20,
        e.text = "免费刷新次数：",
        e.textColor = 10397695,
        e.x = 0,
        e.y = 0,
        e
    },
    o.times_i = function() {
        var e = new eui.Label;
        return this.times = e,
        e.fontFamily = "REEJI",
        e.size = 20,
        e.text = "10",
        e.textColor = 6420991,
        e.x = 135.13,
        e.y = 1,
        e
    },
    o._dailyScroller_i = function() {
        var e = new eui.Scroller;
        return this._dailyScroller = e,
        e.height = 409,
        e.width = 810,
        e.x = 0,
        e.y = 108,
        e.viewport = this._dailyList_i(),
        e
    },
    o._dailyList_i = function() {
        var e = new eui.List;
        return this._dailyList = e,
        e.itemRendererSkinName = PeakJihadOrderTaskDailyItemSkin,
        e.layout = this._HorizontalLayout1_i(),
        e
    },
    o._HorizontalLayout1_i = function() {
        var e = new eui.HorizontalLayout;
        return e.gap = 0,
        e
    },
    o._weeklyScroller_i = function() {
        var e = new eui.Scroller;
        return this._weeklyScroller = e,
        e.height = 480,
        e.width = 800,
        e.x = 11,
        e.y = 93,
        e.viewport = this._weeklyList_i(),
        e
    },
    o._weeklyList_i = function() {
        var e = new eui.List;
        return this._weeklyList = e,
        e.layout = this._VerticalLayout1_i(),
        e
    },
    o._VerticalLayout1_i = function() {
        var e = new eui.VerticalLayout;
        return e.gap = 16,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/PeakJihadOrderTaskWeeklyItemSkin.exml"] = window.PeakJihadOrderTaskWeeklyItemSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["title", "pro", "get", "got", "go", "_list"],
        this.height = 84,
        this.width = 799,
        this.elementsContent = [this._Group1_i(), this._Scroller1_i()],
        this.states = [new eui.State("go", [new eui.SetProperty("get", "visible", !1), new eui.SetProperty("got", "visible", !1)]), new eui.State("get", [new eui.SetProperty("got", "visible", !1), new eui.SetProperty("go", "visible", !1)]), new eui.State("got", [new eui.SetProperty("get", "visible", !1), new eui.SetProperty("go", "visible", !1)])]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Group1_i = function() {
        var e = new eui.Group;
        return e.cacheAsBitmap = !0,
        e.width = 799,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this._Image1_i(), this.title_i(), this.pro_i(), this.get_i(), this.got_i(), this.go_i()],
        e
    },
    i._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "peak_jihad_order_task_panel_weektaskbg_png",
        e.verticalCenter = 0,
        e.x = 0,
        e
    },
    i.title_i = function() {
        var e = new eui.Label;
        return this.title = e,
        e.fontFamily = "REEJI",
        e.lineSpacing = 4,
        e.size = 20,
        e.text = "使用精灵名称在巅峰圣战竞技模式或休闲模式中取得30场胜利",
        e.textColor = 12834813,
        e.verticalCenter = -11,
        e.width = 380.436,
        e.x = 35.92,
        e
    },
    i.pro_i = function() {
        var e = new eui.Label;
        return this.pro = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "20/20",
        e.textColor = 16774235,
        e.x = 35.69,
        e.y = 57,
        e
    },
    i.get_i = function() {
        var e = new eui.Image;
        return this.get = e,
        e.source = "peak_jihad_order_task_panel_get_png",
        e.x = 639,
        e.y = 21,
        e
    },
    i.got_i = function() {
        var e = new eui.Image;
        return this.got = e,
        e.source = "peak_jihad_order_task_panel_got_png",
        e.x = 643,
        e.y = 25,
        e
    },
    i.go_i = function() {
        var e = new eui.Image;
        return this.go = e,
        e.source = "peak_jihad_order_task_panel_go1_png",
        e.x = 677,
        e.y = 35,
        e
    },
    i._Scroller1_i = function() {
        var e = new eui.Scroller;
        return e.height = 72,
        e.right = 179,
        e.width = 194.756,
        e.y = 6,
        e.viewport = this._list_i(),
        e
    },
    i._list_i = function() {
        var e = new eui.List;
        return this._list = e,
        e.itemRendererSkinName = PeakJihadOrderItemSkin,
        e.layout = this._HorizontalLayout1_i(),
        e
    },
    i._HorizontalLayout1_i = function() {
        var e = new eui.HorizontalLayout;
        return e.horizontalAlign = "right",
        e
    },
    t
} (eui.Skin);