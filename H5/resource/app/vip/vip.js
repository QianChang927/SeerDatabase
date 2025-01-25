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
    return new(i || (i = Promise))(function(o, r) {
        function a(t) {
            try {
                u(n.next(t))
            } catch(e) {
                r(e)
            }
        }
        function s(t) {
            try {
                u(n["throw"](t))
            } catch(e) {
                r(e)
            }
        }
        function u(t) {
            t.done ? o(t.value) : new i(function(e) {
                e(t.value)
            }).then(a, s)
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
        if (o) throw new TypeError("Generator is already executing.");
        for (; u;) try {
            if (o = 1, r && (a = r[2 & i[0] ? "return": i[0] ? "throw": "next"]) && !(a = a.call(r, i[1])).done) return a;
            switch (r = 0, a && (i = [0, a.value]), i[0]) {
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
                r = i[1],
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
            r = 0
        } finally {
            o = a = 0
        }
        if (5 & i[0]) throw i[1];
        return {
            value: i[0] ? i[1] : void 0,
            done: !0
        }
    }
    var o, r, a, s, u = {
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
vip; !
function(t) {
    var e = function(t) {
        function e(e) {
            var i = t.call(this) || this;
            return i.service = e,
            i.skinName = "VipMonthlyPetPopSkin",
            i.cacheAsBitmap = !0,
            i
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            this.update(),
            this.addEvent()
        },
        e.prototype.addEvent = function() {
            var t = this;
            ImageButtonUtil.add(this.btnClose,
            function() {
                PopViewManager.getInstance().hideView(t)
            },
            this),
            ImageButtonUtil.add(this.btnInfo,
            function() {
                StatLogger.log("20220722版本系统功能", "VIP", "点击查看包月精灵详情"),
                t.service.showPetInfo(t.petId)
            },
            this),
            ImageButtonUtil.add(this.btnVip,
            function() {
                PayManager.canPay() ? VipController.openVip() : Alarm.show("暂未开放，敬请期待！")
            },
            this);
            for (var e = function(e) {
                ImageButtonUtil.add(i["imgWu" + e],
                function() {
                    t.service.showSkillInfo(t.WuId)
                },
                i),
                ImageButtonUtil.add(i["btnGet" + e],
                function() {
                    return t.hasGetPet && !PetManager.getHasPet(t.petId) ? void Alert.show("请把" + PetXMLInfo.getName(t.petId) + "放入出战背包！",
                    function() {
                        t.service.showPetBag()
                    }) : void SocketConnection.sendByQueue(42318, [e, t.curMonth, t.curYear],
                    function() {
                        t.update(),
                        3 == e && BubblerManager.getInstance().showText("<font color= #fcff50>" + PetXMLInfo.getName(t.petId) + "</font>的天赋已提升至<font color= #fcff50>31</font>", !0)
                    })
                },
                i),
                ImageButtonUtil.add(i["imgTe" + e],
                function() {
                    t.service.showPetEff(t.petId)
                },
                i)
            },
            i = this, n = 1; 1 >= n; n++) e(n)
        },
        e.prototype.update = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var t, e, i, n, o, r, i, a = this;
                return __generator(this,
                function(s) {
                    switch (s.label) {
                    case 0:
                        return t = MainManager.actorInfo.isVip,
                        this.txtBtn.text = t ? "续费VIP": "开通VIP",
                        this.imgPet.source = "resource/assets/vip/imgPet2.png",
                        [4, RES.getResByUrl("resource/assets/vip/text.json")];
                    case 1:
                        for (e = s.sent(), i = 1; 3 >= i; i++) this["txt" + i].text = e["txt" + i];
                        for (this.curYear = e.year, this.curMonth = e.month, this.flagHasGet = e.flagHasGet, n = core.manager.XMLConfigManger.getInstance().getRes(ClientConfig.getJSONConfig("vip_month_monster")).Root.Item, o = n[n.length - 1], this.petId = o.MonsterID, this.WuId = SkillXMLInfo.getHideSkillId(this.petId), r = o.BonusIds.split(" ")[o.CurMonth - 1], n = core.manager.XMLConfigManger.getInstance().getRes(ClientConfig.getJSONConfig("open_bonus")).Root.Bonus, i = 1; 1 >= i; i++) this["imgHead" + i].source = ClientConfig.getPetHeadPath(this.petId);
                        return KTool.getMultiValue([this.flagHasGet, 100750],
                        function(t) {
                            var e = t[0];
                            a.hasGetPet = !!t[0];
                            for (var i = t[1], n = 1; 1 >= n; n++) {
                                var o = +VipController.isCurYearVip + i >= n,
                                r = e >= n;
                                a["txtGet" + n].text = r ? "已领取": "领 取",
                                DisplayUtil.setEnabled(a["btnGet" + n], o && !r, r || !o)
                            }
                        }),
                        [2]
                    }
                })
            })
        },
        e
    } (PopView);
    t.VipMonthlyPetPop = e,
    __reflect(e.prototype, "vip.VipMonthlyPetPop")
} (vip || (vip = {}));
var __reflect = this && this.__reflect ||
function(t, e, i) {
    t.__class__ = e,
    i ? i.push(e) : i = [e],
    t.__types__ = t.__types__ ? i.concat(t.__types__) : i
},
vip; !
function(t) {
    var e = function() {
        function t() {}
        return t.MAIN_PANEL = "vip.MainPanel",
        t
    } ();
    t.PanelConst = e,
    __reflect(e.prototype, "vip.PanelConst")
} (vip || (vip = {}));
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
vip; !
function(t) {
    var e = function(e) {
        function i(i) {
            var n = e.call(this) || this;
            return n.service.setValues(),
            n.init([{
                panelName: t.PanelConst.MAIN_PANEL,
                isMain: !0,
                defaultParam: i
            }]),
            i && (n.service.openFromNoNo = i.openFromNoNo, n.service.openFromBanner = i.openFromBanner),
            i && i.openFromNoNo ? StatLogger.log("20220722版本系统功能", "VIP", "从主界面左侧NONO按钮进入VIP界面") : StatLogger.log("20220722版本系统功能", "VIP", "从中间NONO造型直接进入VIP界面"),
            n
        }
        return __extends(i, e),
        i
    } (BasicMultPanelModule);
    t.Vip = e,
    __reflect(e.prototype, "vip.Vip")
} (vip || (vip = {}));
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
vip; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t.skinName = "VipItemSkin",
            t.addEventListener(egret.Event.ADDED_TO_STAGE, t.addEvent, t),
            t.addEventListener(egret.Event.REMOVED_FROM_STAGE, t.destroy, t),
            t
        }
        return __extends(i, e),
        i.prototype.addEvent = function() {
            var e = this;
            ImageButtonUtil.add(this.btnBuy,
            function() {
                if (e.data.isMall) {
                    if (!PayManager.canPay()) return void Alarm.show("《赛尔号巅峰之战》暂未开放付费功能，请去《赛尔号》页游继续体验。");
                    if (!MainManager.actorInfo.isVip) return void(GameInfo.isChecking ? Alert.show("你还不是VIP用户！") : Alert.show("只有VIP才能购买折扣礼包哦！是否立即成为VIP？",
                    function() {
                        VipController.openVip()
                    }));
                    var t = void 0;
                    t = e.data.id - 1 == 6 ? 248500 : e.data.id - 1 == 14 ? 259060 : 244720 + (e.data.id - 1),
                    KTool.buyProductByCallback(t, 1,
                    function() {
                        SocketConnection.sendByQueue(CommandID.VIP_PACKAGE, [1, e.data.id - 1 + 1],
                        function() {
                            e.data.hasBuy = !0,
                            e.dataChanged()
                        })
                    },
                    e)
                } else void 0 != e.data.hasGet ? e.onGet() : e.onBuy()
            },
            this, !1),
            ImageButtonUtil.add(this.imgIcon,
            function() {
                void 0 != e.data.hasGet ? 2 == e.data.index ? PopViewManager.getInstance().openView(new t.VipWeeklyGiftPop) : 3 == e.data.index && PopViewManager.getInstance().openView(new t.VipMonthlyGiftPop) : tipsPop.TipsPop.openItemPop({
                    id: e.data.itemId
                })
            },
            this, !0, !0,
            function() {
                return void 0 == e.data.hasGet || e.data.index >= 2
            })
        },
        i.prototype.onBuy = function() {
            return MainManager.actorInfo.isVip ? void(this.data.price > MainManager.actorInfo.vipScore ? BubblerManager.getInstance().showText("兑换点数不足") : ItemManager.getNumByID(this.data.itemId) >= ItemXMLInfo.getMaxNum(this.data.itemId) ? BubblerManager.getInstance().showText("物品已达到上限") : (egret.lifecycle.stage.touchChildren = !1, SocketConnection.sendByQueue(CommandID.VIP_SCORE_EXCHANGE, [this.data.index],
            function() {
                EventManager.dispatchEventWith("vipRewardBuyOrGetItem"),
                egret.lifecycle.stage.touchChildren = !0
            },
            function() {
                egret.lifecycle.stage.touchChildren = !0
            }))) : void(GameInfo.isChecking ? Alert.show("你还不是VIP用户！") : Alert.show("只有VIP才能兑换免费补给哦！是否立即成为VIP？",
            function() {
                PayManager.canPay() ? VipController.openVip() : Alarm.show("暂未开放，敬请期待！")
            }))
        },
        i.prototype.onGet = function() {
            var t = this;
            return 3 != this.data.index || MainManager.actorInfo.isVip ? (egret.lifecycle.stage.touchChildren = !1, void SocketConnection.sendByQueue(CommandID.VIP_BONUS_201409, [this.data.index],
            function() {
                t.data.hasGet = !0,
                t.dataChanged(),
                egret.lifecycle.stage.touchChildren = !0,
                EventManager.dispatchEventWith(ToolBarPointConst.CHECK_RED_POINT_CHANGE_AGAIN, !1, {
                    id: 3
                })
            })) : void(GameInfo.isChecking ? Alert.show("你还不是VIP用户！") : Alert.show("只有VIP才能领取专属免费礼包哦！是否立即成为VIP？",
            function() {
                PayManager.canPay() ? VipController.openVip() : Alarm.show("暂未开放，敬请期待！")
            }))
        },
        i.prototype.dataChanged = function() {
            this.cacheAsBitmap = !0,
            this.imgRedDot.visible = !1;
            var t = MainManager.actorInfo.isVip;
            if (this.data.isMall) {
                var e = Math.floor((this.data.id - 1) / 4) + 1,
                i = void 0;
                return 1 == e ? i = 9 : 2 == e ? i = 19 : 3 == e ? i = 49 : 4 == e && (i = 89),
                this.txtName.text = StringUtil.parseStrLimitLen(ItemXMLInfo.getName(this.data.itemId), 8),
                this.imgIcon.source = ClientConfig.getItemIcon(this.data.itemId),
                this.imgIcon.width = this.imgIcon.height = 80,
                1 == this.data.num ? this.txtNum.text = "": this.txtNum.text = this.data.num,
                void(this.data.hasBuy ? (this.imgCoin.width = 0, this.imgCoin.source = null, this.txtBtnBuy.text = "已购买", DisplayUtil.setEnabled(this.btnBuy, !1)) : (this.imgCoin.width = 20, this.imgCoin.source = ClientConfig.getItemIcon(5), this.txtBtnBuy.text = i + "", DisplayUtil.setEnabled(this.btnBuy, !0)))
            }
            this.imgCoin.width = 0,
            void 0 != this.data.hasGet ? (this.txtBtnBuy.text = this.data.hasGet ? "已领取": "免费领取", DisplayUtil.setEnabled(this.btnBuy, !this.data.hasGet, this.data.hasGet), 1 == this.data.index ? (this.txtName.text = "每日礼包", this.imgIcon.source = "vip_reward_view_imgdaygift_png", this.imgRedDot.visible = !this.data.hasGet) : 2 == this.data.index ? (this.txtName.text = "每周礼包", this.imgIcon.source = "vip_reward_view_imgweekgift_png", this.imgRedDot.visible = !this.data.hasGet) : 3 == this.data.index && (this.txtName.text = "每月礼包", this.imgIcon.source = "vip_reward_view_imgmonthgift_png", this.imgRedDot.visible = t && !this.data.hasGet), this.imgIcon.width = 60, this.imgIcon.height = 55) : (this.txtName.text = this.data.name, this.txtBtnBuy.text = this.data.price + "点", this.imgIcon.source = ClientConfig.getItemIcon(this.data.itemId), this.imgIcon.width = 70, this.imgIcon.height = 70)
        },
        i.prototype.destroy = function() {
            ImageButtonUtil.removeAll(this)
        },
        i
    } (eui.ItemRenderer);
    t.VipItem = e,
    __reflect(e.prototype, "vip.VipItem")
} (vip || (vip = {}));
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
vip; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t.skinName = "VipSuitItemSkin",
            t
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            var e = this;
            this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this),
            ImageButtonUtil.add(this.btnGet,
            function() {
                if (e.data.id < 10) {
                    var i = e.data.id % 2 == 1 ? 1e3: 1012;
                    i += Math.floor(e.data.id / 2) + 1,
                    SocketConnection.send(CommandID.COMPLETE_TASK, i, 1)
                } else PopViewManager.getInstance().openView(new t.VipSuitGetPop(0))
            },
            this)
        },
        i.prototype.destroy = function() {
            ImageButtonUtil.removeAll(this)
        },
        i.prototype.dataChanged = function() {
            this.imgSuit.source = ClientConfig.getSuitBodyPng(this.data.suitIconId),
            this.imgTitle.source = "vip_suit_item_imgtitle" + this.data.title + "_png",
            this.txtName.text = this.data.name + " " + this.data.type + "套装",
            this.data.hasGet ? this.txtGet.text = "已领取": this.txtGet.text = this.data.id > 10 ? "前往": "领取"
        },
        i
    } (eui.ItemRenderer);
    t.VipSuitItem = e,
    __reflect(e.prototype, "vip.VipSuitItem")
} (vip || (vip = {}));
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
vip; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.skinName = "VipLevelRulePopSkin",
            e
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            var t = this;
            ImageButtonUtil.add(this.btnClose,
            function() {
                PopViewManager.getInstance().hideView(t)
            },
            this),
            this.txtScore.text = MainManager.actorInfo.vipValue + ""
        },
        e
    } (PopView);
    t.VipLevelRulePop = e,
    __reflect(e.prototype, "vip.VipLevelRulePop")
} (vip || (vip = {}));
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
vip; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.skinName = "VipRewardRulePop2Skin",
            e
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            var t = this,
            e = 1;
            MainManager.actorInfo.isVip && (e += MainManager.actorInfo.vipLevel);
            for (var i = 1; 6 >= i; i++) this["light" + i].visible = e == i;
            ImageButtonUtil.add(this.btnClose,
            function() {
                PopViewManager.getInstance().hideView(t)
            },
            this)
        },
        e.prototype.destroy = function() {
            ImageButtonUtil.removeAll(this),
            t.prototype.destroy.call(this)
        },
        e
    } (PopView);
    t.VipMonthlyGiftPop = e,
    __reflect(e.prototype, "vip.VipMonthlyGiftPop")
} (vip || (vip = {}));
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
vip; !
function(t) {
    var e = function(e) {
        function i(t) {
            var i = e.call(this) || this;
            return i.groupName = "VIP_MENU",
            i._initMenu = 1,
            i.skinName = "VipSkin",
            "number" == typeof t ? i._initMenu = t: i._data = t,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            var t = this;
            this.init(),
            this.addEvent(),
            this.initBtnClose("vip1_imgtitle_png", this,
            function() {
                t.service.openFromNoNo && ModuleManager.showModuleByID(config.ModuleConst.NONO_MGR_PANEL),
                t.service.closeModule()
            },
            this),
            this.once(egret.Event.ENTER_FRAME,
            function() {
                t.checkRedPoint()
            },
            this)
        },
        i.prototype.init = function() {
            this.vipRightView = new t.VipRightView(this.service),
            this.vipRewardView = new t.VipRewardView(this.service),
            this.vipMallView = new t.VipMallView(this.service),
            this.createMenu(),
            this.service.openFromBanner && this.service.openPop(new t.VipMonthlyPetPop(this.service), !1, null, null, null, LevelManager.appLevel)
        },
        i.prototype.createMenu = function() {
            var t = new MenuData;
            t.groupName = this.groupName,
            t["default"] = this._initMenu,
            t.root = [1, 2],
            t.data = {
                1 : {
                    title: "VIP特权"
                },
                2 : {
                    title: "专属好礼"
                }
            },
            GameInfo.isChecking && (t.root = [1], t.data = {
                1 : {
                    title: "免费补给"
                }
            });
            var e = GainWayManger.getJumpInfo(this._data, t);
            e && e.menuDefault > 0 && (t["default"] = e.menuDefault),
            this.menu = Menu.createMenu(t, this.menuGroup)
        },
        i.prototype.addEvent = function() {
            EventManager.addEventListener(BaseMenuEvent.BASE_MENU_SELECT_CHANGE_ + this.groupName, this.openView, this)
        },
        i.prototype.checkRedPoint = function() {
            var t = this;
            KTool.getMultiValue([20021, 30005, 11516],
            function(e) {
                MainManager.actorInfo.isVip ? Menu.updateRed(t.groupName, 2, !(e[0] && e[1] && e[2])) : Menu.updateRed(t.groupName, 2, !e[0])
            })
        },
        i.prototype.openView = function() {
            var t = this.menu.selectedValue;
            if (this.curView != t) return this.curView = t,
            this.viewContainer.removeChildren(),
            GameInfo.isChecking ? (Menu.updateRed(this.groupName, 2, !1), this.viewContainer.addChild(this.vipRewardView), void this.vipRewardView.update()) : void(1 == t ? (this.viewContainer.addChild(this.vipRightView), this.vipRightView.update()) : 2 == t ? (Menu.updateRed(this.groupName, 2, !1), this.viewContainer.addChild(this.vipRewardView), this.vipRewardView.update()) : 3 == t && this.viewContainer.addChild(this.vipMallView))
        },
        i.prototype.destroy = function() {
            this.vipRightView.destroy(),
            this.vipRewardView.destroy(),
            this.vipMallView.destroy(),
            this.menu && this.menu.destroy()
        },
        i
    } (BasicPanel);
    t.MainPanel = e,
    __reflect(e.prototype, "vip.MainPanel")
} (vip || (vip = {}));
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
vip; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t.skinName = "VipRewardRulePop1Skin",
            t
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            var e = this,
            i = 1;
            MainManager.actorInfo.isVip && (i += MainManager.actorInfo.vipLevel);
            for (var n = 1; 6 >= n; n++) this["light" + n].visible = i == n;
            ImageButtonUtil.add(this.btnClose,
            function() {
                PopViewManager.getInstance().hideView(e)
            },
            this),
            ImageButtonUtil.add(this.btnHelp1,
            function() {
                PopViewManager.getInstance().openView(new t.VipMonthlyGiftPop)
            },
            this),
            ImageButtonUtil.add(this.btnHelp2,
            function() {
                PopViewManager.getInstance().openView(new t.VipWeeklyGiftPop)
            },
            this)
        },
        i.prototype.destroy = function() {
            ImageButtonUtil.removeAll(this),
            e.prototype.destroy.call(this)
        },
        i
    } (PopView);
    t.VipRewardRulePop = e,
    __reflect(e.prototype, "vip.VipRewardRulePop")
} (vip || (vip = {}));
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
vip; !
function(t) {
    var e = function(t) {
        function e(e) {
            var i = t.call(this) || this;
            return i.suitId = e,
            i.skinName = "VipSuitGetPopSkin",
            i
        }
        return __extends(e, t),
        e
    } (PopView);
    t.VipSuitGetPop = e,
    __reflect(e.prototype, "vip.VipSuitGetPop")
} (vip || (vip = {}));
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
vip; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t.skinName = "VipSuitPopSkin",
            t
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            var e = this;
            ImageButtonUtil.add(this.btnClose,
            function() {
                PopViewManager.getInstance().hideView(e)
            },
            this),
            this.list.itemRenderer = t.VipSuitItem;
            var i = [{
                id: 1,
                name: "水瓶座",
                type: "白银",
                suitIconId: 202,
                title: 1
            },
            {
                id: 2,
                name: "水瓶座",
                type: "黄金",
                suitIconId: 201,
                title: 2
            },
            {
                id: 3,
                name: "双鱼座",
                type: "白银",
                suitIconId: 213,
                title: 1
            },
            {
                id: 4,
                name: "双鱼座",
                type: "黄金",
                suitIconId: 212,
                title: 2
            },
            {
                id: 5,
                name: "白羊座",
                type: "白银",
                suitIconId: 219,
                title: 1
            },
            {
                id: 6,
                name: "白羊座",
                type: "黄金",
                suitIconId: 218,
                title: 2
            },
            {
                id: 7,
                name: "金牛座",
                type: "白银",
                suitIconId: 282,
                title: 2
            },
            {
                id: 8,
                name: "金牛座",
                type: "黄金",
                suitIconId: 281,
                title: 3
            },
            {
                id: 9,
                name: "双子座",
                type: "白银",
                suitIconId: 295,
                title: 2
            },
            {
                id: 10,
                name: "双子座",
                type: "黄金",
                suitIconId: 294,
                title: 3
            },
            {
                id: 11,
                name: "巨蟹座",
                type: "白银",
                suitIconId: 298,
                title: 1
            },
            {
                id: 12,
                name: "巨蟹座",
                type: "黄金",
                suitIconId: 299,
                title: 2
            },
            {
                id: 13,
                name: "狮子座",
                type: "白银",
                suitIconId: 308,
                title: 1
            },
            {
                id: 14,
                name: "狮子座",
                type: "黄金",
                suitIconId: 307,
                title: 2
            },
            {
                id: 15,
                name: "室女座",
                type: "白银",
                suitIconId: 321,
                title: 1
            },
            {
                id: 16,
                name: "室女座",
                type: "黄金",
                suitIconId: 320,
                title: 2
            }];
            this.list.dataProvider = new eui.ArrayCollection(i)
        },
        i.prototype.destroy = function() {
            ImageButtonUtil.removeAll(this),
            e.prototype.destroy.call(this)
        },
        i
    } (PopView);
    t.VipSuitPop = e,
    __reflect(e.prototype, "vip.VipSuitPop")
} (vip || (vip = {}));
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
vip; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.skinName = "VipRewardRulePop3Skin",
            e
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            var t = this,
            e = 1;
            MainManager.actorInfo.isVip && (e += MainManager.actorInfo.vipLevel);
            for (var i = 1; 6 >= i; i++) this["light" + i].visible = e == i;
            ImageButtonUtil.add(this.btnClose,
            function() {
                PopViewManager.getInstance().hideView(t)
            },
            this)
        },
        e.prototype.destroy = function() {
            ImageButtonUtil.removeAll(this),
            t.prototype.destroy.call(this)
        },
        e
    } (PopView);
    t.VipWeeklyGiftPop = e,
    __reflect(e.prototype, "vip.VipWeeklyGiftPop")
} (vip || (vip = {}));
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
vip; !
function(t) {
    var e = function(e) {
        function i(t) {
            var i = e.call(this) || this;
            return i.service = t,
            i.skinName = "VipMallViewSkin",
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            this.init()
        },
        i.prototype.init = function() {
            var e = this;
            this.imgDiamond.source = ClientConfig.getItemIcon(5),
            ImageButtonUtil.add(this.imgDiamond,
            function() {
                tipsPop.TipsPop.openItemPop({
                    id: 5
                })
            },
            this),
            ImageButtonUtil.add(this.btnAdd2,
            function() {
                PayManager.rechargeDiamond()
            },
            this),
            this.updateDiamond(),
            EventManager.addEventListener(RobotEvent.DIAMOND_CHANGED, this.updateDiamond, this);
            var i = [{
                isMall: !0,
                id: 1,
                itemId: 1705851,
                num: 1
            },
            {
                isMall: !0,
                id: 2,
                itemId: 1705852,
                num: 1
            },
            {
                isMall: !0,
                id: 3,
                itemId: 1705853,
                num: 1
            },
            {
                isMall: !0,
                id: 4,
                itemId: 1705854,
                num: 1
            },
            {
                isMall: !0,
                id: 5,
                itemId: 1705855,
                num: "50万"
            },
            {
                isMall: !0,
                id: 6,
                itemId: 1705856,
                num: 1
            },
            {
                isMall: !0,
                id: 7,
                itemId: 1710557,
                num: 20
            },
            {
                isMall: !0,
                id: 8,
                itemId: 1705858,
                num: 6
            },
            {
                isMall: !0,
                id: 9,
                itemId: 1705859,
                num: 15
            },
            {
                isMall: !0,
                id: 10,
                itemId: 1705860,
                num: 2
            },
            {
                isMall: !0,
                id: 11,
                itemId: 1705861,
                num: "10万"
            },
            {
                isMall: !0,
                id: 12,
                itemId: 1705862,
                num: 1
            },
            {
                isMall: !0,
                id: 13,
                itemId: 1705863,
                num: 2
            },
            {
                isMall: !0,
                id: 14,
                itemId: 1705864,
                num: 2
            },
            {
                isMall: !0,
                id: 15,
                itemId: 1723967,
                num: 2
            },
            {
                isMall: !0,
                id: 16,
                itemId: 1705866,
                num: 3
            }];
            this.list.itemRenderer = t.VipItem,
            KTool.getMultiValue([30006],
            function(t) {
                for (var n = 0; 16 > n; n++) i[n].hasBuy = KTool.getBit(t[0], n + 1) > 0;
                e.list.dataProvider = new eui.ArrayCollection(i)
            })
        },
        i.prototype.updateDiamond = function(t) {
            var e = this;
            t ? this.txt2.text = core.gameUtil.ConvertItemNumView(t.data) : UserInfoManager.getDiamond(function(t) {
                e.txt2.text = core.gameUtil.ConvertItemNumView(t)
            },
            this)
        },
        i.prototype.destroy = function() {
            EventManager.removeAll(this),
            ImageButtonUtil.removeAll(this)
        },
        i
    } (eui.Component);
    t.VipMallView = e,
    __reflect(e.prototype, "vip.VipMallView")
} (vip || (vip = {}));
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
vip; !
function(t) {
    var e = function(e) {
        function i(t) {
            var i = e.call(this) || this;
            return i.service = t,
            i.skinName = "VipRewardViewSkin",
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            this.init(),
            this.addEvent()
        },
        i.prototype.init = function() {
            var e = this;
            this.list1.itemRenderer = t.VipItem,
            KTool.getMultiValue([11516, 20021, 30005],
            function(t) {
                for (var i = [], n = 0; 3 > n; n++) i[n] = {
                    index: n + 1,
                    hasGet: !!t[n]
                };
                e.list1.dataProvider = new eui.ArrayCollection(i)
            })
        },
        i.prototype.addEvent = function() {
            ImageButtonUtil.add(this.btnHelp,
            function() {
                PopViewManager.getInstance().openView(new t.VipRewardRulePop)
            },
            this),
            ImageButtonUtil.add(this.gotoImg1,
            function() {
                Alarm.show("暂未开放，敬请期待！")
            },
            this),
            ImageButtonUtil.add(this.gotoImg2,
            function() {
                Alarm.show("暂未开放，敬请期待！")
            },
            this)
        },
        i.prototype.update = function() {},
        i.prototype.updateScore = function() {
            var t = this;
            SocketConnection.sendByQueue(CommandID.SEER_VIP_DAILY_CHECK, [1],
            function(e) {
                var i = MainManager.actorInfo.vipScoreMax,
                n = MainManager.actorInfo.vipScore,
                o = e.data.readUnsignedInt(),
                r = o - n;
                r > 0 && BubblerManager.getInstance().showText("成功获得" + r + "兑换点数。"),
                o > i && (o = i),
                MainManager.actorInfo.vipScore = o,
                t.setScore()
            })
        },
        i.prototype.setScore = function() {
            var t = MainManager.actorInfo.vipScore,
            e = MainManager.actorInfo.vipScoreMax;
            this.txtScore.text = t + "/" + e,
            this.progressBar.value = t / e * 100
        },
        i.prototype.destroy = function() {
            EventManager.removeAll(this),
            ImageButtonUtil.removeAll(this)
        },
        i
    } (eui.Component);
    t.VipRewardView = e,
    __reflect(e.prototype, "vip.VipRewardView")
} (vip || (vip = {}));
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
vip; !
function(t) {
    var e = function(e) {
        function i(t) {
            var i = e.call(this) || this;
            return i.service = t,
            i.skinName = "VipRightViewSkin",
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            this.addEvent(),
            this.imgMonthlyPet.source = "resource/assets/vip/imgPet1.png",
            this.ani = DragonbonesUtil.createAnimate("H5xinshoujiemian_ske_json", "H5xinshoujiemian_tex_json", "H5xinshoujiemian_tex_png", "pveEnter"),
            this.imgMonthlyPet.parent.addChildAt(this.ani, 0),
            this.ani.animation.play("H5 xinshoujiemian", 0),
            this.ani.scaleX = 1.5,
            this.ani.scaleY = 1.2,
            this.ani.x = 195,
            this.ani.y = 280,
            this.ani.alpha = .5
        },
        i.prototype.addEvent = function() {
            var e = this;
            ImageButtonUtil.add(this.btn,
            function() {
                PayManager.canPay() ? VipController.openVip() : Alarm.show("暂未开放，敬请期待！"),
                StatLogger.log("20220722版本系统功能", "VIP", "在VIP特权界面点击开通VIP")
            },
            this),
            ImageButtonUtil.add(this.btnHelp,
            function() {
                PopViewManager.getInstance().openView(new t.VipLevelRulePop)
            },
            this),
            ImageButtonUtil.add(this.tequan1,
            function() {
                Alarm.show("《赛尔号巅峰之战》暂未开放付费功能，请去《赛尔号》页游继续体验。"),
                StatLogger.log("20220722版本系统功能", "VIP", "点击VIP特权1面板")
            },
            this),
            ImageButtonUtil.add(this.tequan2,
            function() {
                Alarm.show("超No用户可以享受战斗结束后<font color= #0000FF>自动</font>回复满状态特权！"),
                StatLogger.log("20220722版本系统功能", "VIP", "点击VIP特权2面板")
            },
            this),
            ImageButtonUtil.add(this.tequan3,
            function() {
                var t = e.parent.parent.parent;
                t.menu.updateView(2),
                StatLogger.log("20220722版本系统功能", "VIP", "点击VIP特权3面板")
            },
            this),
            ImageButtonUtil.add(this.tequan4,
            function() {
                ModuleManager.showModuleByID(config.ModuleConst.BATTLE_FIRE_PANEL),
                StatLogger.log("20220722版本系统功能", "VIP", "点击VIP特权4面板")
            },
            this),
            ImageButtonUtil.add(this.tequan5,
            function() {
                Alarm.show("《赛尔号巅峰之战》暂未开放付费功能，请去《赛尔号》页游继续体验。"),
                StatLogger.log("20220722版本系统功能", "VIP", "点击VIP特权5面板")
            },
            this),
            ImageButtonUtil.add(this.tequan6,
            function() {
                Alarm.show("暂未开放，敬请期待！"),
                StatLogger.log("20220722版本系统功能", "VIP", "点击VIP特权6面板")
            },
            this),
            ImageButtonUtil.add(this.tequan10,
            function() {
                Alarm.show("暂未开放，敬请期待！"),
                StatLogger.log("20220722版本系统功能", "VIP", "点击VIP特权5面板")
            },
            this),
            ImageButtonUtil.add(this.tequan7,
            function() {
                Alarm.show("暂未开放，敬请期待！"),
                StatLogger.log("20220722版本系统功能", "VIP", "点击VIP特权7面板")
            },
            this),
            ImageButtonUtil.add(this.tequan8,
            function() {
                ModuleManager.showModuleByID(84, {
                    subPanel: 2
                },
                AppDoStyle.HIDEN),
                StatLogger.log("20220722版本系统功能", "VIP", "点击VIP特权8面板")
            },
            this),
            ImageButtonUtil.add(this.tequan9,
            function() {
                ModuleManager.showModuleByID(84, {
                    subPanel: 1
                },
                AppDoStyle.HIDEN),
                StatLogger.log("20220722版本系统功能", "VIP", "点击VIP特权9面板")
            },
            this),
            ImageButtonUtil.add(this.imgMonthlyPet,
            function() {
                return SystemTimerManager.sysBJDate.getTime() < new Date("2024/1/1").getTime() ? void Alarm.show("2024年1月包月VIP神宠活动将于1月1日开启！") : (StatLogger.log("20220722版本系统功能", "VIP", "点击进入包月精灵界面"), void e.service.openPop(new t.VipMonthlyPetPop(e.service), !1, null, null, null, LevelManager.appLevel))
            },
            this),
            EventManager.addEventListener(VipController.EVENT_VIP_INFO_UPDATE, this.update, this),
            EventManager.addEventListener(SocketEvent.SOCKETRECONNECT, this.update, this)
        },
        i.prototype.update = function() {
            var t = MainManager.actorInfo.isVip;
            this.groupVip1.visible = this.groupVip2.visible = t,
            this.imgNotVip.visible = !t,
            this.txtBtn.text = t ? "续 费": "开 通";
            var e = MainManager.actorInfo.vipValue,
            i = MainManager.actorInfo.vipValueMax;
            if (this.txtScore.text = e + "/" + i, this.processBar.value = 100 * e / i, t) {
                this.txtVipLV.text = MainManager.actorInfo.vipLevel + "";
                var n = Math.floor((MainManager.actorInfo.vipEndTime - SystemTimerManager.sysBJDate.getTime() / 1e3) / 60 / 60 / 24) + 1;
                this.txtDays.text = (1 > n ? 1 : n) + ""
            }
        },
        i.prototype.destroy = function() {
            EventManager.removeAll(this),
            ImageButtonUtil.removeAll(this),
            this.ani && this.ani.dispose()
        },
        i
    } (eui.Component);
    t.VipRightView = e,
    __reflect(e.prototype, "vip.VipRightView")
} (vip || (vip = {}));
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
generateEUI.paths["resource/eui_skins/item/VipItemSkin.exml"] = window.VipItemSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["imgCoin", "txtBtnBuy", "btnBuy", "imgIcon", "txtName", "txtNum", "imgRedDot"],
        this.height = 173,
        this.width = 145,
        this.elementsContent = [this._Image1_i(), this.btnBuy_i(), this.imgIcon_i(), this.txtName_i(), this.txtNum_i(), this.imgRedDot_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "vip_item_img2_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.btnBuy_i = function() {
        var t = new eui.Group;
        return this.btnBuy = t,
        t.visible = !0,
        t.x = 2,
        t.y = 138,
        t.elementsContent = [this._Image2_i(), this._Group1_i()],
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "vip_item_img1_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.horizontalCenter = 0,
        t.verticalCenter = 0,
        t.layout = this._HorizontalLayout1_i(),
        t.elementsContent = [this.imgCoin_i(), this.txtBtnBuy_i()],
        t
    },
    i._HorizontalLayout1_i = function() {
        var t = new eui.HorizontalLayout;
        return t
    },
    i.imgCoin_i = function() {
        var t = new eui.Image;
        return this.imgCoin = t,
        t.height = 20,
        t.width = 20,
        t.x = 41,
        t.y = 0,
        t
    },
    i.txtBtnBuy_i = function() {
        var t = new eui.Label;
        return this.txtBtnBuy = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.textColor = 10181146,
        t.x = 0,
        t.y = 0,
        t
    },
    i.imgIcon_i = function() {
        var t = new eui.Image;
        return this.imgIcon = t,
        t.height = 80,
        t.horizontalCenter = 0,
        t.verticalCenter = -8,
        t.width = 60,
        t
    },
    i.txtName_i = function() {
        var t = new eui.Label;
        return this.txtName = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = 0,
        t.size = 16,
        t.textColor = 14543359,
        t.y = 8,
        t
    },
    i.txtNum_i = function() {
        var t = new eui.Label;
        return this.txtNum = t,
        t.fontFamily = "MFShangHei",
        t.right = 10,
        t.size = 18,
        t.textColor = 16777215,
        t.y = 110,
        t
    },
    i.imgRedDot_i = function() {
        var t = new eui.Image;
        return this.imgRedDot = t,
        t.height = 25,
        t.source = "vip_imgredpoint_png",
        t.visible = !0,
        t.width = 25,
        t.x = 132,
        t.y = -8,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/item/VipSuitItemSkin.exml"] = window.VipSuitItemSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["txtGet", "btnGet", "imgSuit", "imgTitle", "txtName"],
        this.elementsContent = [this._Image1_i(), this.btnGet_i(), this.imgSuit_i(), this.imgTitle_i(), this.txtName_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "vip_suit_item_imgbg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.btnGet_i = function() {
        var t = new eui.Group;
        return this.btnGet = t,
        t.x = 83,
        t.y = 288,
        t.elementsContent = [this._Image2_i(), this.txtGet_i()],
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 35,
        t.source = "vip_reward_view_btnget_png",
        t.width = 87,
        t.x = 0,
        t.y = 0,
        t
    },
    i.txtGet_i = function() {
        var t = new eui.Label;
        return this.txtGet = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = 0,
        t.size = 18,
        t.textColor = 16777215,
        t.verticalCenter = 0,
        t
    },
    i.imgSuit_i = function() {
        var t = new eui.Image;
        return this.imgSuit = t,
        t.height = 134,
        t.width = 162,
        t.x = 45,
        t.y = 82,
        t
    },
    i.imgTitle_i = function() {
        var t = new eui.Image;
        return this.imgTitle = t,
        t.horizontalCenter = 0,
        t.x = 52,
        t.y = 7,
        t
    },
    i.txtName_i = function() {
        var t = new eui.Label;
        return this.txtName = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "室女座 白银套装",
        t.textColor = 9025023,
        t.x = 57,
        t.y = 248,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/pop/VipLevelRulePopSkin.exml"] = window.VipLevelRulePopSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["btnClose", "txtScore"],
        this.height = 431,
        this.width = 753,
        this.elementsContent = [this._Image1_i(), this.btnClose_i(), this._Image2_i(), this._Label1_i(), this._Label2_i(), this._Label3_i(), this._Label4_i(), this._Label5_i(), this._Label6_i(), this._Label7_i(), this._Label8_i(), this._Label9_i(), this._Label10_i(), this._Label11_i(), this._Label12_i(), this._Label13_i(), this._Label14_i(), this._Group1_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "viplevelrulepop_exp_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.source = "viplevelrulepop_btnclose_png",
        t.x = 712,
        t.y = 1,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "viplevelrulepop_vipjifen_png",
        t.x = 35,
        t.y = 216,
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 20,
        t.text = "1.每充值一个月VIP即可获得100点积分，直接包年可获得1200点哦！",
        t.textColor = 12111615,
        t.width = 636,
        t.x = 39,
        t.y = 68,
        t
    },
    i._Label2_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 20,
        t.text = "2.每兑换10个钻石，即可获得10点积分。",
        t.textColor = 12111615,
        t.width = 452,
        t.x = 39,
        t.y = 100,
        t
    },
    i._Label3_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 20,
        t.text = "3.失去VIP后，每天将扣除3点积分。",
        t.textColor = 12111615,
        t.width = 354,
        t.x = 39,
        t.y = 132,
        t
    },
    i._Label4_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 20,
        t.text = "4.年费VIP可直接享受VIP5特权！",
        t.textColor = 12111615,
        t.x = 39,
        t.y = 164,
        t
    },
    i._Label5_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "REEJI",
        t.size = 20,
        t.text = "VIP 1",
        t.textColor = 2660351,
        t.x = 59,
        t.y = 360,
        t
    },
    i._Label6_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 20,
        t.text = "0",
        t.textColor = 12111615,
        t.x = 39,
        t.y = 304,
        t
    },
    i._Label7_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 20,
        t.text = "450",
        t.textColor = 12111615,
        t.x = 131,
        t.y = 304,
        t
    },
    i._Label8_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 20,
        t.text = "1900",
        t.textColor = 12111615,
        t.x = 258,
        t.y = 304,
        t
    },
    i._Label9_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 20,
        t.text = "6600",
        t.textColor = 12111615,
        t.x = 397,
        t.y = 304,
        t
    },
    i._Label10_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 20,
        t.text = "19800",
        t.textColor = 12111615,
        t.x = 540,
        t.y = 304,
        t
    },
    i._Label11_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "REEJI",
        t.size = 20,
        t.text = "VIP 2",
        t.textColor = 120063,
        t.x = 165,
        t.y = 360,
        t
    },
    i._Label12_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "REEJI",
        t.size = 20,
        t.text = "VIP 3",
        t.textColor = 7600021,
        t.x = 297,
        t.y = 360,
        t
    },
    i._Label13_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "REEJI",
        t.size = 20,
        t.text = "VIP 4",
        t.textColor = 15721229,
        t.x = 439,
        t.y = 360,
        t
    },
    i._Label14_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "REEJI",
        t.size = 20,
        t.text = "VIP 5",
        t.textColor = 16752660,
        t.x = 584,
        t.y = 360,
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.right = 50,
        t.y = 220,
        t.elementsContent = [this._Label15_i(), this.txtScore_i()],
        t
    },
    i._Label15_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "REEJI",
        t.size = 20,
        t.text = "当前VIP积分：",
        t.textColor = 8631026,
        t.x = 0,
        t.y = 0,
        t
    },
    i.txtScore_i = function() {
        var t = new eui.Label;
        return this.txtScore = t,
        t.fontFamily = "REEJI",
        t.size = 20,
        t.textColor = 16514896,
        t.x = 134,
        t.y = 0,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/pop/VipMonthlyPetPopSkin.exml"] = window.VipMonthlyPetPopSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["btnClose", "imgPet", "btnInfo", "txt1", "txt2", "imgWu1", "imgTe1", "imgHead1", "txt3", "txt8", "txtBtn", "btnVip", "txtGet1", "btnGet1"],
        this.height = 550,
        this.width = 1005,
        this.elementsContent = [this._Image1_i(), this.btnClose_i(), this.imgPet_i(), this.btnInfo_i(), this._Image2_i(), this.txt1_i(), this.txt2_i(), this._Group1_i(), this.txt8_i(), this.btnVip_i(), this.btnGet1_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.bottom = 0,
        t.left = 0,
        t.right = 0,
        t.scale9Grid = new egret.Rectangle(335, 39, 335, 2),
        t.source = "vip_monthly_pet_pop_imgbg_png",
        t.top = 0,
        t.x = 0,
        t.y = 0,
        t
    },
    i.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.source = "vip_monthly_pet_pop_btnclose_png",
        t.x = 962,
        t.y = 3,
        t
    },
    i.imgPet_i = function() {
        var t = new eui.Image;
        return this.imgPet = t,
        t.height = 468,
        t.visible = !0,
        t.width = 355,
        t.x = 33,
        t.y = 55,
        t
    },
    i.btnInfo_i = function() {
        var t = new eui.Image;
        return this.btnInfo = t,
        t.source = "vip_monthly_pet_pop_btninfo_png",
        t.x = 61,
        t.y = 442,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "vip_monthly_pet_pop_img1_png",
        t.x = 415,
        t.y = 61,
        t
    },
    i.txt1_i = function() {
        var t = new eui.Label;
        return this.txt1 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "是否",
        t.textAlign = "center",
        t.textColor = 11252991,
        t.width = 540,
        t.x = 418,
        t.y = 65,
        t
    },
    i.txt2_i = function() {
        var t = new eui.Label;
        return this.txt2 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.textColor = 16514896,
        t.x = 586,
        t.y = 87,
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.x = 414,
        t.y = 181,
        t.elementsContent = [this._Image3_i(), this.imgWu1_i(), this.imgTe1_i(), this.imgHead1_i(), this.txt3_i(), this._Image4_i()],
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "vip_monthly_pet_pop_chongzhibg1_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.imgWu1_i = function() {
        var t = new eui.Image;
        return this.imgWu1 = t,
        t.source = "vip_monthly_pet_pop_imgwu1_png",
        t.x = 119,
        t.y = 38,
        t
    },
    i.imgTe1_i = function() {
        var t = new eui.Image;
        return this.imgTe1 = t,
        t.source = "vip_monthly_pet_pop_imgte2_png",
        t.x = 207,
        t.y = 45,
        t
    },
    i.imgHead1_i = function() {
        var t = new eui.Image;
        return this.imgHead1 = t,
        t.height = 70,
        t.width = 70,
        t.x = 24,
        t.y = 27,
        t
    },
    i.txt3_i = function() {
        var t = new eui.Label;
        return this.txt3 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.textColor = 13425919,
        t.x = 22,
        t.y = 4,
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.source = "vip_monthly_pet_pop_tag2_png",
        t.x = 19,
        t.y = 82,
        t
    },
    i.txt8_i = function() {
        var t = new eui.Label;
        return this.txt8 = t,
        t.fontFamily = "REEJI",
        t.size = 22,
        t.text = "非年费用户开通1个月VIP可领取",
        t.textColor = 9674212,
        t.x = 539,
        t.y = 316,
        t
    },
    i.btnVip_i = function() {
        var t = new eui.Group;
        return this.btnVip = t,
        t.height = 46,
        t.width = 134,
        t.x = 733,
        t.y = 465,
        t.elementsContent = [this._Image5_i(), this.txtBtn_i()],
        t
    },
    i._Image5_i = function() {
        var t = new eui.Image;
        return t.scaleX = 1,
        t.scaleY = 1,
        t.source = "vip1_btnbg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.txtBtn_i = function() {
        var t = new eui.Label;
        return this.txtBtn = t,
        t.fontFamily = "REEJI",
        t.horizontalCenter = 0,
        t.size = 20,
        t.textColor = 10246682,
        t.verticalCenter = 0,
        t
    },
    i.btnGet1_i = function() {
        var t = new eui.Group;
        return this.btnGet1 = t,
        t.height = 46,
        t.width = 134,
        t.x = 526,
        t.y = 465,
        t.elementsContent = [this._Image6_i(), this.txtGet1_i()],
        t
    },
    i._Image6_i = function() {
        var t = new eui.Image;
        return t.scaleX = 1,
        t.scaleY = 1,
        t.source = "vip1_btnbg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.txtGet1_i = function() {
        var t = new eui.Label;
        return this.txtGet1 = t,
        t.fontFamily = "REEJI",
        t.horizontalCenter = 0,
        t.size = 20,
        t.text = "领取",
        t.textColor = 10246682,
        t.verticalCenter = 0,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/pop/VipRewardRulePop1Skin.exml"] = window.VipRewardRulePop1Skin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["light1", "light2", "light3", "light4", "light5", "light6", "btnHelp1", "btnHelp2", "btnClose"],
        this.height = 547,
        this.width = 999,
        this.elementsContent = [this._Image1_i(), this._Image2_i(), this.light1_i(), this.light2_i(), this.light3_i(), this.light4_i(), this.light5_i(), this.light6_i(), this._Image3_i(), this.btnHelp1_i(), this.btnHelp2_i(), this.btnClose_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 547,
        t.scale9Grid = new egret.Rectangle(333, 39, 333, 6),
        t.source = "vip_reward_rule_pop1_img1_png",
        t.width = 999,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "vip_reward_rule_pop1_img2_png",
        t.x = 30,
        t.y = 76,
        t
    },
    i.light1_i = function() {
        var t = new eui.Image;
        return this.light1 = t,
        t.source = "vip_reward_rule_pop1_light1_png",
        t.visible = !1,
        t.x = 241,
        t.y = 78,
        t
    },
    i.light2_i = function() {
        var t = new eui.Image;
        return this.light2 = t,
        t.source = "vip_reward_rule_pop1_light1_png",
        t.visible = !1,
        t.x = 352,
        t.y = 78,
        t
    },
    i.light3_i = function() {
        var t = new eui.Image;
        return this.light3 = t,
        t.source = "vip_reward_rule_pop1_light1_png",
        t.visible = !1,
        t.x = 466,
        t.y = 78,
        t
    },
    i.light4_i = function() {
        var t = new eui.Image;
        return this.light4 = t,
        t.source = "vip_reward_rule_pop1_light1_png",
        t.visible = !1,
        t.x = 584,
        t.y = 78,
        t
    },
    i.light5_i = function() {
        var t = new eui.Image;
        return this.light5 = t,
        t.source = "vip_reward_rule_pop1_light1_png",
        t.visible = !1,
        t.x = 701,
        t.y = 78,
        t
    },
    i.light6_i = function() {
        var t = new eui.Image;
        return this.light6 = t,
        t.source = "vip_reward_rule_pop1_light1_png",
        t.visible = !1,
        t.x = 817,
        t.y = 78,
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "vip_reward_rule_pop1_img3_png",
        t.x = 72,
        t.y = 90,
        t
    },
    i.btnHelp1_i = function() {
        var t = new eui.Image;
        return this.btnHelp1 = t,
        t.source = "vip_reward_view_btnhelp_png",
        t.x = 208,
        t.y = 339,
        t
    },
    i.btnHelp2_i = function() {
        var t = new eui.Image;
        return this.btnHelp2 = t,
        t.source = "vip_reward_view_btnhelp_png",
        t.x = 208,
        t.y = 428,
        t
    },
    i.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.source = "viplevelrulepop_btnclose_png",
        t.visible = !0,
        t.x = 956.159,
        t.y = .364,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/pop/VipRewardRulePop2Skin.exml"] = window.VipRewardRulePop2Skin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["light6", "light5", "light4", "light3", "light2", "light1", "btnClose"],
        this.height = 547,
        this.width = 999,
        this.elementsContent = [this._Image1_i(), this._Image2_i(), this.light6_i(), this.light5_i(), this.light4_i(), this.light3_i(), this.light2_i(), this.light1_i(), this._Image3_i(), this.btnClose_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 547,
        t.scale9Grid = new egret.Rectangle(333, 41, 333, 4),
        t.source = "vip_reward_rule_pop2_img1_png",
        t.width = 999,
        t.x = 1,
        t.y = -2,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "vip_reward_rule_pop2_img2_png",
        t.x = 30,
        t.y = 48,
        t
    },
    i.light6_i = function() {
        var t = new eui.Image;
        return this.light6 = t,
        t.source = "vip_reward_rule_pop2_light1_png",
        t.visible = !1,
        t.x = 837,
        t.y = 51,
        t
    },
    i.light5_i = function() {
        var t = new eui.Image;
        return this.light5 = t,
        t.source = "vip_reward_rule_pop2_light1_png",
        t.visible = !1,
        t.x = 723,
        t.y = 51,
        t
    },
    i.light4_i = function() {
        var t = new eui.Image;
        return this.light4 = t,
        t.source = "vip_reward_rule_pop2_light1_png",
        t.visible = !1,
        t.x = 606,
        t.y = 51,
        t
    },
    i.light3_i = function() {
        var t = new eui.Image;
        return this.light3 = t,
        t.source = "vip_reward_rule_pop2_light1_png",
        t.visible = !1,
        t.x = 486,
        t.y = 51,
        t
    },
    i.light2_i = function() {
        var t = new eui.Image;
        return this.light2 = t,
        t.source = "vip_reward_rule_pop2_light1_png",
        t.visible = !1,
        t.x = 373,
        t.y = 51,
        t
    },
    i.light1_i = function() {
        var t = new eui.Image;
        return this.light1 = t,
        t.source = "vip_reward_rule_pop2_light1_png",
        t.visible = !1,
        t.x = 266,
        t.y = 51,
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "vip_reward_rule_pop2_img3_png",
        t.x = 78,
        t.y = 62,
        t
    },
    i.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.source = "viplevelrulepop_btnclose_png",
        t.x = 956.159,
        t.y = .364,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/pop/VipRewardRulePop3Skin.exml"] = window.VipRewardRulePop3Skin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["light6", "light5", "light4", "light3", "light2", "light1", "btnClose"],
        this.height = 547,
        this.width = 999,
        this.elementsContent = [this._Image1_i(), this._Image2_i(), this.light6_i(), this.light5_i(), this.light4_i(), this.light3_i(), this.light2_i(), this.light1_i(), this._Image3_i(), this.btnClose_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 547,
        t.scale9Grid = new egret.Rectangle(333, 40, 333, 2),
        t.source = "vip_reward_rule_pop3_img1_png",
        t.width = 999,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "vip_reward_rule_pop3_img2_png",
        t.x = 30,
        t.y = 76,
        t
    },
    i.light6_i = function() {
        var t = new eui.Image;
        return this.light6 = t,
        t.source = "vip_reward_rule_pop3_light1_png",
        t.visible = !1,
        t.x = 817,
        t.y = 78,
        t
    },
    i.light5_i = function() {
        var t = new eui.Image;
        return this.light5 = t,
        t.source = "vip_reward_rule_pop3_light1_png",
        t.visible = !1,
        t.x = 701,
        t.y = 78,
        t
    },
    i.light4_i = function() {
        var t = new eui.Image;
        return this.light4 = t,
        t.source = "vip_reward_rule_pop3_light1_png",
        t.visible = !1,
        t.x = 584,
        t.y = 78,
        t
    },
    i.light3_i = function() {
        var t = new eui.Image;
        return this.light3 = t,
        t.source = "vip_reward_rule_pop3_light1_png",
        t.visible = !1,
        t.x = 466,
        t.y = 78,
        t
    },
    i.light2_i = function() {
        var t = new eui.Image;
        return this.light2 = t,
        t.source = "vip_reward_rule_pop3_light1_png",
        t.visible = !1,
        t.x = 352,
        t.y = 78,
        t
    },
    i.light1_i = function() {
        var t = new eui.Image;
        return this.light1 = t,
        t.source = "vip_reward_rule_pop3_light1_png",
        t.x = 241,
        t.y = 78,
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "vip_reward_rule_pop3_img3_png",
        t.x = 88,
        t.y = 90,
        t
    },
    i.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.source = "viplevelrulepop_btnclose_png",
        t.x = 956.159,
        t.y = .364,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/pop/VipSuitPopSkin.exml"] = window.VipSuitPopSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["btnClose", "list"],
        this.height = 431,
        this.width = 753,
        this.elementsContent = [this._Image1_i(), this.btnClose_i(), this._Scroller1_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 431,
        t.scale9Grid = new egret.Rectangle(251, 40, 251, 3),
        t.source = "vip_suit_pop_di_l_png",
        t.width = 753,
        t.x = 0,
        t.y = 0,
        t
    },
    i.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.source = "vip_monthly_pet_pop_btnclose_png",
        t.x = 711,
        t.y = 3,
        t
    },
    i._Scroller1_i = function() {
        var t = new eui.Scroller;
        return t.height = 360,
        t.width = 681,
        t.x = 36,
        t.y = 54,
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
        return t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/view/VipMallViewSkin.exml"] = window.VipMallViewSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["btnAdd2", "imgDiamond", "btnAdd1", "txt1", "txt2", "list"],
        this.height = 568,
        this.width = 938,
        this.elementsContent = [this._Image1_i(), this._Image2_i(), this.btnAdd2_i(), this.imgDiamond_i(), this.btnAdd1_i(), this._Image3_i(), this.txt1_i(), this.txt2_i(), this._Scroller1_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 22,
        t.scale9Grid = new egret.Rectangle(10, 7, 11, 8),
        t.source = "vip_mall_view_img_di2_png",
        t.width = 134,
        t.x = 774,
        t.y = -45,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "vip_mall_view_img1_png",
        t.visible = !1,
        t.x = 586,
        t.y = 2,
        t
    },
    i.btnAdd2_i = function() {
        var t = new eui.Image;
        return this.btnAdd2 = t,
        t.source = "vip_mall_view_btnadd2_png",
        t.x = 903,
        t.y = -45,
        t
    },
    i.imgDiamond_i = function() {
        var t = new eui.Image;
        return this.imgDiamond = t,
        t.height = 30,
        t.width = 30,
        t.x = 765,
        t.y = -49,
        t
    },
    i.btnAdd1_i = function() {
        var t = new eui.Image;
        return this.btnAdd1 = t,
        t.source = "vip_mall_view_btnadd1_png",
        t.visible = !1,
        t.x = 734,
        t.y = 5,
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "vip_mall_view_imgtitle_png",
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t
    },
    i.txt1_i = function() {
        var t = new eui.Label;
        return this.txt1 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18.0101510119682,
        t.text = "99999",
        t.textColor = 12834813,
        t.visible = !1,
        t.x = 657,
        t.y = 8,
        t
    },
    i.txt2_i = function() {
        var t = new eui.Label;
        return this.txt2 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18.0101510119682,
        t.text = "99999",
        t.textColor = 12834813,
        t.visible = !0,
        t.x = 825,
        t.y = -42,
        t
    },
    i._Scroller1_i = function() {
        var t = new eui.Scroller;
        return t.height = 480,
        t.width = 838,
        t.x = 50,
        t.y = 65,
        t.viewport = this.list_i(),
        t
    },
    i.list_i = function() {
        var t = new eui.List;
        return this.list = t,
        t.layout = this._TileLayout1_i(),
        t
    },
    i._TileLayout1_i = function() {
        var t = new eui.TileLayout;
        return t.horizontalGap = 20,
        t.verticalGap = 20,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/view/VipRewardViewSkin.exml"] = window.VipRewardViewSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["txtGetScore", "btnGetScore", "gotoImg1", "gotoImg2", "btnHelp", "list1", "txtScore"],
        this.height = 568,
        this.width = 907,
        this.elementsContent = [this._Image1_i(), this.btnGetScore_i(), this._Image2_i(), this._Image3_i(), this.gotoImg1_i(), this.gotoImg2_i(), this.btnHelp_i(), this.list1_i(), this.txtScore_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 549,
        t.scale9Grid = new egret.Rectangle(13, 20, 14, 20),
        t.source = "vip_reward_view_imgbg_png",
        t.width = 887,
        t.x = 20,
        t.y = 19,
        t
    },
    i.btnGetScore_i = function() {
        var t = new eui.Group;
        return this.btnGetScore = t,
        t.x = 758,
        t.y = 299,
        t.elementsContent = [this.txtGetScore_i()],
        t
    },
    i.txtGetScore_i = function() {
        var t = new eui.Label;
        return this.txtGetScore = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = 0,
        t.size = 17,
        t.textColor = 16777215,
        t.verticalCenter = 0,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "vip_reward_view_imgtitle_png",
        t.x = 0,
        t.y = 321,
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "vipss_imgtitle_png",
        t.x = 0,
        t.y = 37,
        t
    },
    i.gotoImg1_i = function() {
        var t = new eui.Image;
        return this.gotoImg1 = t,
        t.source = "vipss_img_goto1_png",
        t.x = 122,
        t.y = 96,
        t
    },
    i.gotoImg2_i = function() {
        var t = new eui.Image;
        return this.gotoImg2 = t,
        t.source = "vipss_img_goto2_png",
        t.x = 468,
        t.y = 96,
        t
    },
    i.btnHelp_i = function() {
        var t = new eui.Image;
        return this.btnHelp = t,
        t.source = "vip_reward_view_btnhelp_png",
        t.x = 178,
        t.y = 332,
        t
    },
    i.list1_i = function() {
        var t = new eui.List;
        return this.list1 = t,
        t.height = 173,
        t.width = 586,
        t.x = 161,
        t.y = 381,
        t.layout = this._HorizontalLayout1_i(),
        t
    },
    i._HorizontalLayout1_i = function() {
        var t = new eui.HorizontalLayout;
        return t.gap = 75,
        t
    },
    i.txtScore_i = function() {
        var t = new eui.Label;
        return this.txtScore = t,
        t.fontFamily = "MFShangHei",
        t.size = 20,
        t.textColor = 5752317,
        t.x = 667,
        t.y = 305,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/view/VipRightViewSkin.exml"] = window.VipRightViewSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["tequan1", "tequan2", "tequan3", "tequan4", "tequan5", "tequan6", "tequan7", "tequan8", "tequan9", "tequan10", "btnHelp", "txtScore", "txtDays", "groupVip2", "txtBtn", "btn", "txtVipLV", "groupVip1", "imgNotVip", "processBar", "imgMonthlyPet"],
        this.height = 557,
        this.width = 907,
        this.elementsContent = [this._Group2_i(), this._Group5_i(), this.imgMonthlyPet_i()]
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
            t.source = "vip1_imgprogress_png",
            t
        },
        e
    } (eui.Skin),
    n = e.prototype;
    return n._Group2_i = function() {
        var t = new eui.Group;
        return t.right = 0,
        t.elementsContent = [this._Image1_i(), this._Scroller1_i()],
        t
    },
    n._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "vip1_fengexian_png",
        t.x = 20,
        t.y = 0,
        t
    },
    n._Scroller1_i = function() {
        var t = new eui.Scroller;
        return t.height = 393,
        t.x = 40,
        t.y = 40,
        t.viewport = this._Group1_i(),
        t
    },
    n._Group1_i = function() {
        var t = new eui.Group;
        return t.layout = this._TileLayout1_i(),
        t.elementsContent = [this.tequan1_i(), this.tequan2_i(), this.tequan3_i(), this.tequan4_i(), this.tequan5_i(), this.tequan6_i(), this.tequan7_i(), this.tequan8_i(), this.tequan9_i(), this.tequan10_i()],
        t
    },
    n._TileLayout1_i = function() {
        var t = new eui.TileLayout;
        return t.columnWidth = 147,
        t.horizontalGap = 15,
        t.paddingBottom = 10,
        t.rowHeight = 170,
        t.verticalGap = 18,
        t
    },
    n.tequan1_i = function() {
        var t = new eui.Group;
        return this.tequan1 = t,
        t.cacheAsBitmap = !0,
        t.elementsContent = [this._Image2_i(), this._Image3_i(), this._Label1_i(), this._Label2_i()],
        t
    },
    n._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "vip1_tequanbg_png",
        t.visible = !0,
        t
    },
    n._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "vip1_1_png",
        t.x = 12,
        t.y = 12,
        t
    },
    n._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 17,
        t.text = "专属特惠礼包",
        t.textColor = 15332607,
        t.x = 20,
        t.y = 150.681,
        t
    },
    n._Label2_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "REEJI",
        t.size = 14,
        t.text = "VIP特权一",
        t.textColor = 7522559,
        t.x = 20,
        t.y = 134.681,
        t
    },
    n.tequan2_i = function() {
        var t = new eui.Group;
        return this.tequan2 = t,
        t.cacheAsBitmap = !0,
        t.x = 180,
        t.y = 0,
        t.elementsContent = [this._Image4_i(), this._Image5_i(), this._Label3_i(), this._Label4_i()],
        t
    },
    n._Image4_i = function() {
        var t = new eui.Image;
        return t.source = "vip1_tequanbg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    n._Image5_i = function() {
        var t = new eui.Image;
        return t.source = "vip1_2_png",
        t.x = 32,
        t.y = 33,
        t
    },
    n._Label3_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 17,
        t.text = "自动免费回血",
        t.textColor = 15332607,
        t.x = 20,
        t.y = 149.681,
        t
    },
    n._Label4_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "REEJI",
        t.size = 14,
        t.text = "VIP特权二",
        t.textColor = 7522559,
        t.x = 20,
        t.y = 134.681,
        t
    },
    n.tequan3_i = function() {
        var t = new eui.Group;
        return this.tequan3 = t,
        t.cacheAsBitmap = !0,
        t.x = 359,
        t.y = 0,
        t.elementsContent = [this._Image6_i(), this._Image7_i(), this._Label5_i(), this._Label6_i()],
        t
    },
    n._Image6_i = function() {
        var t = new eui.Image;
        return t.source = "vip1_tequanbg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    n._Image7_i = function() {
        var t = new eui.Image;
        return t.source = "vip1_3_png",
        t.x = 22,
        t.y = 21,
        t
    },
    n._Label5_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 17,
        t.text = "专属免费福利",
        t.textColor = 15332607,
        t.x = 20,
        t.y = 149.681,
        t
    },
    n._Label6_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "REEJI",
        t.size = 14,
        t.text = "VIP特权三",
        t.textColor = 7522559,
        t.x = 20,
        t.y = 134.681,
        t
    },
    n.tequan4_i = function() {
        var t = new eui.Group;
        return this.tequan4 = t,
        t.cacheAsBitmap = !0,
        t.x = 539,
        t.y = 0,
        t.elementsContent = [this._Image8_i(), this._Image9_i(), this._Label7_i(), this._Label8_i()],
        t
    },
    n._Image8_i = function() {
        var t = new eui.Image;
        return t.source = "vip1_tequanbg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    n._Image9_i = function() {
        var t = new eui.Image;
        return t.source = "vip1_4_png",
        t.x = 16,
        t.y = 11,
        t
    },
    n._Label7_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 17,
        t.text = "强力战斗加成",
        t.textColor = 15332607,
        t.x = 20,
        t.y = 150.68,
        t
    },
    n._Label8_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "REEJI",
        t.size = 14,
        t.text = "VIP特权四",
        t.textColor = 7522559,
        t.x = 20,
        t.y = 134.68,
        t
    },
    n.tequan5_i = function() {
        var t = new eui.Group;
        return this.tequan5 = t,
        t.cacheAsBitmap = !0,
        t.x = 540,
        t.y = 199,
        t.elementsContent = [this._Image10_i(), this._Image11_i(), this._Label9_i(), this._Label10_i()],
        t
    },
    n._Image10_i = function() {
        var t = new eui.Image;
        return t.source = "vip1_tequanbg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    n._Image11_i = function() {
        var t = new eui.Image;
        return t.source = "vip1_10_png",
        t.x = 13,
        t.y = 5,
        t
    },
    n._Label9_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 17,
        t.text = "绝版精灵返场",
        t.textColor = 15332607,
        t.x = 20,
        t.y = 151.68,
        t
    },
    n._Label10_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "REEJI",
        t.size = 14,
        t.text = "VIP特权五",
        t.textColor = 7522559,
        t.x = 20,
        t.y = 134.68,
        t
    },
    n.tequan6_i = function() {
        var t = new eui.Group;
        return this.tequan6 = t,
        t.cacheAsBitmap = !0,
        t.x = 180,
        t.y = 199,
        t.elementsContent = [this._Image12_i(), this._Image13_i(), this._Label11_i(), this._Label12_i()],
        t
    },
    n._Image12_i = function() {
        var t = new eui.Image;
        return t.source = "vip1_tequanbg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    n._Image13_i = function() {
        var t = new eui.Image;
        return t.source = "vip1_9_png",
        t.x = 32,
        t.y = 40,
        t
    },
    n._Label11_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 17,
        t.text = "精灵养成半价",
        t.textColor = 15332607,
        t.x = 20,
        t.y = 150.681,
        t
    },
    n._Label12_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "REEJI",
        t.size = 14,
        t.text = "VIP特权六",
        t.textColor = 7522559,
        t.x = 20,
        t.y = 134.68,
        t
    },
    n.tequan7_i = function() {
        var t = new eui.Group;
        return this.tequan7 = t,
        t.cacheAsBitmap = !0,
        t.x = 0,
        t.y = 199,
        t.elementsContent = [this._Image14_i(), this._Image15_i(), this._Label13_i(), this._Label14_i()],
        t
    },
    n._Image14_i = function() {
        var t = new eui.Image;
        return t.source = "vip1_tequanbg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    n._Image15_i = function() {
        var t = new eui.Image;
        return t.source = "vip1_7_png",
        t.x = 33,
        t.y = 35,
        t
    },
    n._Label13_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 17,
        t.text = "专属星座套装",
        t.textColor = 15332607,
        t.x = 14,
        t.y = 150.681,
        t
    },
    n._Label14_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "REEJI",
        t.size = 14,
        t.text = "VIP特权七",
        t.textColor = 7522559,
        t.x = 20,
        t.y = 134.681,
        t
    },
    n.tequan8_i = function() {
        var t = new eui.Group;
        return this.tequan8 = t,
        t.cacheAsBitmap = !0,
        t.x = 719,
        t.y = 0,
        t.elementsContent = [this._Image16_i(), this._Image17_i(), this._Label15_i(), this._Label16_i()],
        t
    },
    n._Image16_i = function() {
        var t = new eui.Image;
        return t.source = "vip1_tequanbg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    n._Image17_i = function() {
        var t = new eui.Image;
        return t.source = "vip1_6_png",
        t.x = 33,
        t.y = 39,
        t
    },
    n._Label15_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 17,
        t.text = "专属超NO皮肤",
        t.textColor = 15332607,
        t.x = 20,
        t.y = 150.68,
        t
    },
    n._Label16_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "REEJI",
        t.size = 14,
        t.text = "VIP特权八",
        t.textColor = 7522559,
        t.x = 20,
        t.y = 134.68,
        t
    },
    n.tequan9_i = function() {
        var t = new eui.Group;
        return this.tequan9 = t,
        t.cacheAsBitmap = !0,
        t.x = 360,
        t.y = 199,
        t.elementsContent = [this._Image18_i(), this._Image19_i(), this._Label17_i(), this._Label18_i()],
        t
    },
    n._Image18_i = function() {
        var t = new eui.Image;
        return t.source = "vip1_tequanbg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    n._Image19_i = function() {
        var t = new eui.Image;
        return t.source = "vip1_5_png",
        t.x = 52,
        t.y = 41,
        t
    },
    n._Label17_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 17,
        t.text = "超NO飞行模式",
        t.textColor = 15332607,
        t.x = 20,
        t.y = 150.68,
        t
    },
    n._Label18_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "REEJI",
        t.size = 14,
        t.text = "VIP特权九",
        t.textColor = 7522559,
        t.x = 20,
        t.y = 134.68,
        t
    },
    n.tequan10_i = function() {
        var t = new eui.Group;
        return this.tequan10 = t,
        t.cacheAsBitmap = !0,
        t.x = 0,
        t.y = 199,
        t.elementsContent = [this._Image20_i(), this._Image21_i(), this._Label19_i(), this._Label20_i()],
        t
    },
    n._Image20_i = function() {
        var t = new eui.Image;
        return t.source = "vip1_tequanbg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    n._Image21_i = function() {
        var t = new eui.Image;
        return t.source = "vip1_8_png",
        t.x = 30,
        t.y = 43,
        t
    },
    n._Label19_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 17,
        t.text = "炫酷星际座驾",
        t.textColor = 15332607,
        t.x = 14,
        t.y = 150.681,
        t
    },
    n._Label20_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "REEJI",
        t.size = 14,
        t.text = "VIP特权十",
        t.textColor = 7522559,
        t.x = 20,
        t.y = 134.681,
        t
    },
    n._Group5_i = function() {
        var t = new eui.Group;
        return t.visible = !0,
        t.x = 375,
        t.y = 432,
        t.elementsContent = [this._Group4_i(), this.processBar_i()],
        t
    },
    n._Group4_i = function() {
        var t = new eui.Group;
        return t.cacheAsBitmap = !0,
        t.height = 125,
        t.width = 588,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image22_i(), this.btnHelp_i(), this._Group3_i(), this._Image23_i(), this.groupVip2_i(), this.btn_i(), this.groupVip1_i(), this.imgNotVip_i()],
        t
    },
    n._Image22_i = function() {
        var t = new eui.Image;
        return t.source = "vip1_viptopbg_png",
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t
    },
    n.btnHelp_i = function() {
        var t = new eui.Image;
        return this.btnHelp = t,
        t.source = "vip1_btnhelp_png",
        t.x = 24,
        t.y = 80,
        t
    },
    n._Group3_i = function() {
        var t = new eui.Group;
        return t.right = 70,
        t.y = 40,
        t.elementsContent = [this._Label21_i(), this.txtScore_i()],
        t
    },
    n._Label21_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "积分：",
        t.textColor = 6388143,
        t.x = 0,
        t.y = 0,
        t
    },
    n.txtScore_i = function() {
        var t = new eui.Label;
        return this.txtScore = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "999",
        t.textColor = 5752317,
        t.x = 49,
        t.y = 0,
        t
    },
    n._Image23_i = function() {
        var t = new eui.Image;
        return t.scale9Grid = new egret.Rectangle(25, 10, 13, 2),
        t.source = "vip1_imgprogressbg__png",
        t.visible = !0,
        t.width = 336,
        t.x = 193,
        t.y = 13,
        t
    },
    n.groupVip2_i = function() {
        var t = new eui.Group;
        return this.groupVip2 = t,
        t.right = 207,
        t.visible = !0,
        t.y = 92,
        t.layout = this._HorizontalLayout1_i(),
        t.elementsContent = [this._Label22_i(), this.txtDays_i(), this._Label23_i()],
        t
    },
    n._HorizontalLayout1_i = function() {
        var t = new eui.HorizontalLayout;
        return t.gap = 3,
        t
    },
    n._Label22_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 20,
        t.text = "VIP剩余天数",
        t.textColor = 8757203,
        t.x = 0,
        t
    },
    n.txtDays_i = function() {
        var t = new eui.Label;
        return this.txtDays = t,
        t.fontFamily = "MFShangHei",
        t.right = 24,
        t.size = 20,
        t.text = "9999",
        t.textColor = 5752317,
        t
    },
    n._Label23_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 20,
        t.text = "天",
        t.textColor = 8757203,
        t.x = 92,
        t
    },
    n.btn_i = function() {
        var t = new eui.Group;
        return this.btn = t,
        t.visible = !0,
        t.x = 389.57,
        t.y = 70.96,
        t.elementsContent = [this._Image24_i(), this.txtBtn_i()],
        t
    },
    n._Image24_i = function() {
        var t = new eui.Image;
        return t.source = "vip1_btnbg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    n.txtBtn_i = function() {
        var t = new eui.Label;
        return this.txtBtn = t,
        t.fontFamily = "REEJI",
        t.horizontalCenter = 0,
        t.size = 20,
        t.textColor = 10246682,
        t.verticalCenter = 0,
        t
    },
    n.groupVip1_i = function() {
        var t = new eui.Group;
        return this.groupVip1 = t,
        t.visible = !0,
        t.x = 22,
        t.y = 13,
        t.elementsContent = [this._Image25_i(), this.txtVipLV_i()],
        t
    },
    n._Image25_i = function() {
        var t = new eui.Image;
        return t.source = "vip1_vip_png",
        t.x = 0,
        t.y = 0,
        t
    },
    n.txtVipLV_i = function() {
        var t = new eui.Label;
        return this.txtVipLV = t,
        t.fontFamily = "REEJI",
        t.size = 50,
        t.textColor = 16772949,
        t.x = 114,
        t
    },
    n.imgNotVip_i = function() {
        var t = new eui.Image;
        return this.imgNotVip = t,
        t.source = "vip1_notvip_png",
        t.x = 30,
        t.y = 23,
        t
    },
    n.processBar_i = function() {
        var t = new eui.ProgressBar;
        return this.processBar = t,
        t.visible = !0,
        t.width = 307,
        t.x = 208,
        t.y = 17,
        t.skinName = i,
        t
    },
    n.imgMonthlyPet_i = function() {
        var t = new eui.Image;
        return this.imgMonthlyPet = t,
        t.height = 553,
        t.width = 347,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/VipSkin.exml"] = window.VipSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["menuGroup", "viewContainer"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this._Image1_i(), this.menuGroup_i(), this._Group1_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.bottom = 0,
        t.left = 0,
        t.right = 0,
        t.source = "vip1_bg_jpg",
        t.top = 0,
        t
    },
    i.menuGroup_i = function() {
        var t = new eui.Group;
        return this.menuGroup = t,
        t.x = 0,
        t.y = 48,
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.height = 576,
        t.left = 185,
        t.right = 29,
        t.y = 64,
        t.elementsContent = [this.viewContainer_i()],
        t
    },
    i.viewContainer_i = function() {
        var t = new eui.Group;
        return this.viewContainer = t,
        t.horizontalCenter = 0,
        t.top = 0,
        t
    },
    e
} (eui.Skin);