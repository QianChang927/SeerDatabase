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
contractCall; !
function(t) {
    var e = function(e) {
        function n() {
            var n = e.call(this) || this;
            return n.skinName = t.DrawOnepanelSkin,
            n
        }
        return __extends(n, e),
        n.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this)
        },
        n.prototype.showItems = function(t) {
            this.items = t,
            this.reward_1.SetItem(this.items[0]),
            this.reward_2.SetItem(this.items[1])
        },
        n.prototype.startEvent = function() {
            LevelManager.stage.addEventListener(egret.TouchEvent.TOUCH_TAP, this.startRemoveDialog, this)
        },
        n.prototype.startRemoveDialog = function(e) {
            var n = this;
            if (e.target instanceof t.DrawItem) {
                var i = e.target.Item;
                if (i.type == AwardType.TYPE_MARK) {
                    var r = {};
                    r.ins = i.id,
                    tipsPop.TipsPop.openCounterMarkPop(r, void 0, LevelManager.topLevel)
                } else if (i.type == AwardType.TYPE_ITEM) if (ItemXMLInfo.getType(i.id)) {
                    var a = {};
                    a.clothesId = i.id,
                    tipsPop.TipsPop.openClothesPop(a, void 0, !1, LevelManager.topLevel)
                } else {
                    var o = {};
                    o.id = i.id,
                    tipsPop.TipsPop.openItemPop(o, void 0, LevelManager.topLevel)
                }
            } else ! e.target || e.target != AwardManager.bg_mask && e.target.parent != this || (LevelManager.stage.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.startRemoveDialog, this), egret.Tween.get(this).to({
                scaleX: 0,
                scaleY: 0,
                alpha: .6
            },
            300, egret.Ease.elasticOut).call(function() {
                n.destroy()
            },
            this))
        },
        n.prototype.destroy = function() {
            this.items = null,
            this.parent && (this.parent.removeChild(this), AwardManager.clear(), AwardManager.CustomItemDialog(null), EventManager.dispatchEventWith(AwardEvent.CLOSE_AWARD_DIALOG))
        },
        n
    } (AwardBaseDialog);
    t.DrawOneAwardPop = e,
    __reflect(e.prototype, "contractCall.DrawOneAwardPop")
} (contractCall || (contractCall = {}));
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
contractCall; !
function(t) {
    var e = function(e) {
        function n(n) {
            var i = e.call(this) || this;
            return n && (i.curIndex = n.childIndex),
            i.service.setValues([t.ContractCallConst.forever_friends_state, t.ContractCallConst.forever_hasdraw_boss, t.ContractCallConst.forever_open_state], [t.ContractCallConst.daily_draw_times]),
            i.init([{
                panelName: t.ContractCallConst.Call_MAIN_PANEL,
                isMain: !0
            },
            {
                panelName: t.ContractCallConst.Call_PANEL2
            },
            {
                panelName: t.ContractCallConst.Call_PANEL3
            },
            {
                panelName: t.ContractCallConst.Call_PANEL4
            },
            {
                panelName: t.ContractCallConst.Friend_PANEL
            }]),
            n ? StatLogger.log("20221111版本系统功能", "契约召唤搬迁", "从精灵特性进入伙伴效果界面") : StatLogger.log("20221111版本系统功能", "契约召唤搬迁", "从活动中心进入伙伴效果界面"),
            i
        }
        return __extends(n, e),
        n.prototype.initialized = function() {
            var e = this;
            this.service.updateValues().then(function() {
                return e.curIndex ? (e.service.openPanel(t.ContractCallConst.Call_PANELS[e.curIndex - 1]), void EventManager.dispatchEventWith("childrenRBEnter", !1, e.curIndex)) : void e.service.openPanel(t.ContractCallConst.Call_PANELS[0])
            })
        },
        n.prototype.setData = function(t) {},
        n.prototype.openRBPanel = function(e) {
            this.service.openPanel(t.ContractCallConst.Call_PANELS[e - 1])
        },
        n.prototype.destroy = function() {
            e.prototype.destroy.call(this)
        },
        n
    } (BasicMultPanelModule);
    t.ContractCall = e,
    __reflect(e.prototype, "contractCall.ContractCall")
} (contractCall || (contractCall = {}));
var __reflect = this && this.__reflect ||
function(t, e, n) {
    t.__class__ = e,
    n ? n.push(e) : n = [e],
    t.__types__ = t.__types__ ? n.concat(t.__types__) : n
},
contractCall; !
function(t) {
    var e = function() {
        function t() {}
        return t.Call_MAIN_PANEL = "contractCall.ContractMainPanel",
        t.Call_PANEL2 = "contractCall.ContractPanel2",
        t.Call_PANEL3 = "contractCall.ContractPanel3",
        t.Call_PANEL4 = "contractCall.ContractPanel4",
        t.Friend_PANEL = "contractCall.ContractFriendPanel",
        t.Call_PANELS = [t.Call_MAIN_PANEL, t.Call_PANEL2, t.Call_PANEL3, t.Call_PANEL4],
        t.Call_PANEL2_CMD = 46234,
        t.forever_friends_state = 4364,
        t.forever_open_state = 4365,
        t.forever_hasdraw_boss = 4366,
        t.daily_draw_times = 14232,
        t.exchange_item_buy = 9247,
        t.exchange_times_buy = 9248,
        t
    } ();
    t.ContractCallConst = e,
    __reflect(e.prototype, "contractCall.ContractCallConst")
} (contractCall || (contractCall = {}));
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
contractCall; !
function(t) {
    var e = function(e) {
        function n() {
            var t = e.call(this) || this;
            return t.effctInfos = [],
            t.skinName = "contractCall.FriendPanelSkin",
            t.addEvent(),
            t
        }
        return __extends(n, e),
        n.prototype.setData = function(t) {
            var e = this;
            this.curInfo = t.data,
            this.curSelectId = t.id,
            this.service = t.service,
            UserInfoManager.getDiamond(function(t) {
                e.curDiamondNum = t,
                e.initData()
            },
            this),
            this.title.source = "1" == this.curInfo.type ? "cc_friend_panel_wlhb_png": "cc_friend_panel_yhgg_png",
            "1" == this.curInfo.type ? StatLogger.log("20221111版本系统功能", "契约召唤搬迁", "王联伙伴-伙伴效果-点击【精灵面板】查看效果") : StatLogger.log("20221111版本系统功能", "契约召唤搬迁", "契约伙伴-主界面-点击【精灵面板】查看效果")
        },
        n.prototype.childrenCreated = function() {
            var t = this;
            this.width = this.parent.width,
            this.btnEffect.selected = !0,
            this.btnSkill.selected = !1,
            this.groupEffect.visible = !0,
            this.groupSkill.visible = !1,
            this.btnEffect.group.addEventListener(egret.Event.CHANGE,
            function() {
                t.groupEffect.visible = t.btnEffect.selected,
                t.groupSkill.visible = t.btnSkill.selected
            },
            this)
        },
        n.prototype.addEvent = function() {
            var e = this;
            this.bg.addEventListener(egret.TouchEvent.TOUCH_TAP, this.hide, this),
            this._list.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.onTabRightBtn, this),
            EventManager.addEventListener("jumpToPage2", this.hide, this),
            EventManager.addEventListener("contract_openEffct", this.update, this),
            ImageButtonUtil.add(this.btnClose, this.hide, this),
            ImageButtonUtil.add(this.btnBuy_Item,
            function() {
                if ("1" == e.curInfo.type) {
                    StatLogger.log("20221111版本系统功能", "契约召唤搬迁", "王联伙伴-伙伴效果-点击【开启效果】");
                    var n = e.curInfo.partnerMonsterId.split("|"),
                    i = {};
                    i.petid = ~~n[e.curSelectId],
                    i.info = e.curInfo,
                    i.id = e.curSelectId + 1,
                    i.curDiamondNum = e.curDiamondNum;
                    var r = new t.OpenPop(i);
                    PopViewManager.getInstance().openView(r)
                } else {
                    StatLogger.log("20221111版本系统功能", "契约召唤搬迁", "契约伙伴-查看效果界面-点击【开启效果】");
                    var a = ItemManager.getNumByID(1722827);
                    if (0 >= a || a < e.curInfo.cost) {
                        var o = "<font color='#ff0000'>契约徽章</font>数量不足，是否兑换徽章？";
                        Alert.show(o,
                        function() {
                            var t = {};
                            t.ins = {
                                realid: 1722827,
                                coinid: 1722826,
                                price: 100,
                                POPID: 544,
                                batch: 10
                            },
                            t.caller = e,
                            t.callBack = function(t, n) {
                                KTool.doExchange(13201, n,
                                function() {
                                    e.update()
                                })
                            },
                            ModuleManager.showModuleByID(1, t)
                        })
                    } else {
                        for (var _ = e.curInfo.partnerMonsterId.split("|"), s = "", u = !0, c = 0, h = _; c < h.length; c++) {
                            var l = h[c];
                            s += PetXMLInfo.getName(~~l) + "、"
                        }
                        s = s.substring(0, s.length - 1);
                        for (var p = 0; p < _.length; p++) if (!PetManager.getHasPet(~~_[p])) {
                            var o = "请将已开启专属特性的<font color='#ff0000'>" + s + "</font>共同放入出战背包\n是否立刻打开背包调整？";
                            return void Alert.show(o,
                            function() {
                                ModuleManager.showModuleByID(10)
                            })
                        }
                        for (var g = [], f = !1, m = 0, d = PetManager.infos; m < d.length; m++) for (var l = d[m], p = 0; p < _.length; p++) if (l.id == ~~_[p]) {
                            if (g.indexOf(l.id) > -1) {
                                f = !0;
                                break
                            }
                            if (g.push(l.id), 0 == l.effectList.length) {
                                u = !1;
                                break
                            }
                            if ("" != PetEffectXMLInfo.getEffectDes(l.effectList[0].effectID, l.effectList[0].args) && 1 == l.effectList.length) {
                                u = !1;
                                break
                            }
                        }
                        if (f) return void Alarm.show("此次开启伙伴效果无法对同种精灵重复开启，请先确认需要开启伙伴效果的精灵在背包内有且仅有一只后再来开启伙伴效果！");
                        if (!u) return void Alarm.show("<font color='#ff0000'>" + s + "</font>未开启特性，无法开启效果!");
                        SocketConnection.sendByQueue(45785, [2, e.curInfo.choice],
                        function() {
                            Alarm.show("开启成功！"),
                            EventManager.dispatchEventWith("contract_openEffct"),
                            e.update()
                        })
                    }
                }
            },
            this),
            ImageButtonUtil.add(this.btnBuy_Zuan,
            function() {
                if (!PayManager.canPay()) return void Alarm.show("暂未开放，敬请期待！");
                if (e.curDiamondNum >= 68) {
                    var n = e.curInfo.partnerMonsterId.split("|");
                    if (e.isPetsInBag()) KTool.buyProductByCallback(248430, 1,
                    function() {
                        var i = 2 * (e.curInfo.id - 1) + (e.curSelectId + 1),
                        r = PetManager.getBagPetsById(~~n[e.curSelectId]);
                        SocketConnection.sendByQueue(t.ContractCallConst.Call_PANEL2_CMD, [6, i, r[0].catchTime, 0],
                        function() {
                            Alarm.show("升级成功！"),
                            EventManager.dispatchEventWith("contract_openEffct"),
                            e.hide()
                        })
                    });
                    else {
                        e.hide();
                        var i = "请将<font color='#ff0000'>" + PetXMLInfo.getName(~~n[0]) + "、" + PetXMLInfo.getName(~~n[1]) + "</font>同时放入出战背包";
                        Alarm.show(i,
                        function() {
                            ModuleManager.showModuleByID(10)
                        })
                    }
                } else {
                    var i = "<font color='#ff0000'>钻石</font>数量不足!";
                    Alarm.show(i)
                }
            },
            this)
        },
        n.prototype.isPetsInBag = function() {
            for (var t = this.curInfo.partnerMonsterId.split("|"), e = 0, n = t; e < n.length; e++) {
                var i = n[e];
                if (!PetManager.getHasPet(~~i)) return ! 1
            }
            return ! 0
        },
        n.prototype.onTabRightBtn = function() {
            this.curSelectItem = this._list.selectedItem,
            this.curSelectId = this._list.selectedIndex,
            this._be.stopAnimation(),
            this._af.stopAnimation(),
            this._be.viewport.scrollV = this._af.viewport.scrollV = 0,
            this.update()
        },
        n.prototype.initData = function() {
            this.txt_groupName.text = this.curInfo.partnerName,
            this._list.itemRenderer = t.FriendPetItem;
            var e = this.curInfo.partnerMonsterId.split("|");
            this.colloction = new eui.ArrayCollection(e),
            this._list.dataProvider = this.colloction,
            this._list.addEventListener(egret.Event.RENDER, this.onListCompleted, this)
        },
        n.prototype.onListCompleted = function() {
            this._list.removeEventListener(egret.Event.RENDER, this.onListCompleted, this),
            this.colloction.refresh(),
            this._list.selectedIndex = this.curSelectId,
            this.curSelectItem = this._list.selectedItem,
            this.buyItemId = 2 == ~~this.curInfo.type ? 1722827 : 1710459,
            this.buyicon.source = ClientConfig.getItemIcon(this.buyItemId),
            this.update()
        },
        n.prototype.update = function() {
            var e = this;
            if (this.curSelectItem) {
                this.curEffctInfo = config.PartnerEffectUpgrade.getItemsByField("monID", ["=="], [this.curSelectItem])[0],
                this.petshow.source = ClientConfig.getPetHalfIcon(this.curSelectItem);
                var n = ItemManager.getNumByID(this.buyItemId),
                i = n >= this.curInfo.cost ? 589568 : 16711680;
                this.txt_price.textFlow = [{
                    text: n + "",
                    style: {
                        textColor: i
                    }
                },
                {
                    text: "/" + this.curInfo.cost
                }],
                this.petName.text = PetXMLInfo.getName(this.curSelectItem);
                var r = (new egret.HtmlTextParser).parse(this.curEffctInfo.descBefore);
                "string" == typeof r ? this.txt_beforeTe.text = r: this.txt_beforeTe.textFlow = r;
                var a = (new egret.HtmlTextParser).parse(this.curEffctInfo.descAfter);
                if ("string" == typeof a ? this.txt_afterTe.text = a: this.txt_afterTe.textFlow = a, 4364 == this.curInfo.bitbuf) {
                    var o = this.service.getValue(t.ContractCallConst.forever_friends_state),
                    _ = 1 == KTool.getBit(o, 2 * this.curInfo.choice - (1 - this.curSelectId));
                    this.btnBuy_Item.visible = !_
                } else this.btnBuy_Zuan.visible = !1,
                KTool.getBitSet([this.curInfo.bitbuf],
                function(t) {
                    e.btnBuy_Item.visible = 0 == t[0]
                });
                if (this.curEffctInfo.skill) {
                    this.btnEffect.visible = this.btnSkill.visible = this.groupEffect.visible = !0,
                    this.groupSkill.visible = !1,
                    this.btnEffect.selected = !0,
                    this.btnSkill.selected = !1,
                    this.groupEffect.y = 112;
                    var s = this.curEffctInfo.skill.split("_");
                    this.groupSkill.removeChildren();
                    for (var u = 0,
                    c = s; u < c.length; u++) {
                        var h = c[u],
                        l = h.split("|").map(Number),
                        p = new t.SkillItem(l[1] || l[0], l[1] && l[0]);
                        this.groupSkill.addChild(p)
                    }
                } else this.btnEffect.visible = this.btnSkill.visible = this.groupSkill.visible = !1,
                this.groupEffect.visible = !0,
                this.groupEffect.y = 90
            }
        },
        n.prototype.destroy = function() {
            e.prototype.destroy.call(this),
            this.bg.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.hide, this),
            this._list.removeEventListener(eui.ItemTapEvent.ITEM_TAP, this.onTabRightBtn, this),
            ImageButtonUtil.removeAll(this),
            EventManager.removeAll(this),
            this.service = null
        },
        n
    } (BaseModule);
    t.ContractFriendPanel = e,
    __reflect(e.prototype, "contractCall.ContractFriendPanel")
} (contractCall || (contractCall = {}));
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
    return new(n || (n = Promise))(function(r, a) {
        function o(t) {
            try {
                s(i.next(t))
            } catch(e) {
                a(e)
            }
        }
        function _(t) {
            try {
                s(i["throw"](t))
            } catch(e) {
                a(e)
            }
        }
        function s(t) {
            t.done ? r(t.value) : new n(function(e) {
                e(t.value)
            }).then(o, _)
        }
        s((i = i.apply(t, e || [])).next())
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
        if (r) throw new TypeError("Generator is already executing.");
        for (; s;) try {
            if (r = 1, a && (o = a[2 & n[0] ? "return": n[0] ? "throw": "next"]) && !(o = o.call(a, n[1])).done) return o;
            switch (a = 0, o && (n = [0, o.value]), n[0]) {
            case 0:
            case 1:
                o = n;
                break;
            case 4:
                return s.label++,
                {
                    value: n[1],
                    done: !1
                };
            case 5:
                s.label++,
                a = n[1],
                n = [0];
                continue;
            case 7:
                n = s.ops.pop(),
                s.trys.pop();
                continue;
            default:
                if (o = s.trys, !(o = o.length > 0 && o[o.length - 1]) && (6 === n[0] || 2 === n[0])) {
                    s = 0;
                    continue
                }
                if (3 === n[0] && (!o || n[1] > o[0] && n[1] < o[3])) {
                    s.label = n[1];
                    break
                }
                if (6 === n[0] && s.label < o[1]) {
                    s.label = o[1],
                    o = n;
                    break
                }
                if (o && s.label < o[2]) {
                    s.label = o[2],
                    s.ops.push(n);
                    break
                }
                o[2] && s.ops.pop(),
                s.trys.pop();
                continue
            }
            n = e.call(t, s)
        } catch(i) {
            n = [6, i],
            a = 0
        } finally {
            r = o = 0
        }
        if (5 & n[0]) throw n[1];
        return {
            value: n[0] ? n[1] : void 0,
            done: !0
        }
    }
    var r, a, o, _, s = {
        label: 0,
        sent: function() {
            if (1 & o[0]) throw o[1];
            return o[1]
        },
        trys: [],
        ops: []
    };
    return _ = {
        next: n(0),
        "throw": n(1),
        "return": n(2)
    },
    "function" == typeof Symbol && (_[Symbol.iterator] = function() {
        return this
    }),
    _
},
contractCall; !
function(t) {
    var e = function(e) {
        function n() {
            var n = e.call(this) || this;
            return n.parts = [],
            n.skinName = t.Panel1Skin,
            n
        }
        return __extends(n, e),
        n.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            StatLogger.log("20221111版本系统功能", "契约召唤搬迁", "进入契约伙伴界面"),
            this.adaptRightContent(this.topRight),
            this.addEvent(),
            this.icon_gold.source = ClientConfig.getItemIcon(5),
            this.icon2.source = ClientConfig.getItemIcon(1722827)
        },
        n.prototype.initData = function() {
            this.curCollection = new eui.ArrayCollection,
            this._list.itemRenderer = t.Panel1RBNewItem,
            this._scorl.viewport = this._list,
            this._list.dataProvider = this.curCollection,
            this.curSelectNum = 1,
            this.parts = config.Partner.getItems().filter(function(t) {
                return "2" == t.type
            }),
            this.gr_tankuang.visible = !1,
            this.zhankaiBtn_down.visible = !1,
            this.zhankaiBtn_up.visible = !0,
            this.updateEffc(),
            t.ContractDataMag.GetInstance().init(),
            this.imge_title_bg.visible = !0,
            this.tx_title_name.visible = !0,
            this.imge_flag.visible = !0,
            this.showGrpPetsInfo(),
            this.petAnimPlay()
        },
        n.prototype.addEvent = function() {
            var e = this;
            ImageButtonUtil.add(this.btnAdd1,
            function() {
                PayManager.rechargeDiamond()
            },
            this),
            ImageButtonUtil.add(this.zhaohuanBtn,
            function() {
                StatLogger.log("230825版本系统功能", "契约召唤优化", "点击主界面【契约召唤】");
                var e = new t.contractPop;
                PopViewManager.getInstance().openView(e)
            },
            this),
            ImageButtonUtil.add(this.btnExchage, this.exchangeItemPop, this),
            EventManager.addEventListener("contract_update", this.update, this),
            ImageButtonUtil.add(this.icon_gold,
            function() {
                tipsPop.TipsPop.openItemPop({
                    id: 5
                })
            },
            this),
            ImageButtonUtil.add(this.icon2,
            function() {
                tipsPop.TipsPop.openItemPop({
                    id: 1722827
                })
            },
            this),
            ImageButtonUtil.add(this.zhankaiBtn_up,
            function() {
                e.zhankaiBtn_down.visible = !0,
                e.zhankaiBtn_up.visible = !1,
                e.gr_tankuang.visible = !0,
                e.imge_title_bg.visible = !1,
                e.tx_title_name.visible = !1,
                e.imge_flag.visible = !1,
                e.updateEffc(),
                e.popAnimPlay1(),
                StatLogger.log("230825版本系统功能", "契约召唤优化", "点击主界面【契约列表】")
            },
            this),
            ImageButtonUtil.add(this.zhankaiBtn_down,
            function() {
                e.zhankaiBtn_down.visible = !1,
                e.zhankaiBtn_up.visible = !0,
                e.imge_title_bg.visible = !0,
                e.tx_title_name.visible = !0,
                e.imge_flag.visible = !0,
                e.popAnimPlay2()
            },
            this);
            for (var n = function(n) {
                n < i.grp_pet2.numChildren && ImageButtonUtil.add(i["grp_petinfo2_" + (n + 1)],
                function() {
                    t.ContractDataMag.GetInstance().friendPanel.setData({
                        id: n,
                        data: e.curPartInfo
                    }),
                    t.ContractDataMag.GetInstance().friendPanel.show(),
                    StatLogger.log("230825版本系统功能", "契约召唤优化", "点击主界面【任意面板】查看契约信息")
                },
                i),
                n < i.grp_pet3.numChildren && ImageButtonUtil.add(i["grp_petinfo3_" + (n + 1)],
                function() {
                    t.ContractDataMag.GetInstance().friendPanel.setData({
                        id: n,
                        data: e.curPartInfo
                    }),
                    t.ContractDataMag.GetInstance().friendPanel.show(),
                    StatLogger.log("230825版本系统功能", "契约召唤优化", "点击主界面【任意面板】查看契约信息")
                },
                i),
                n < i.grp_pet4.numChildren && ImageButtonUtil.add(i["grp_petinfo4_" + (n + 1)],
                function() {
                    t.ContractDataMag.GetInstance().friendPanel.setData({
                        id: n,
                        data: e.curPartInfo
                    }),
                    t.ContractDataMag.GetInstance().friendPanel.show(),
                    StatLogger.log("230825版本系统功能", "契约召唤优化", "点击主界面【任意面板】查看契约信息")
                },
                i),
                ImageButtonUtil.add(i["grp_petinfo6_" + (n + 1)],
                function() {
                    t.ContractDataMag.GetInstance().friendPanel.setData({
                        id: n,
                        data: e.curPartInfo
                    }),
                    t.ContractDataMag.GetInstance().friendPanel.show(),
                    StatLogger.log("230825版本系统功能", "契约召唤优化", "点击主界面【任意面板】查看契约信息")
                },
                i)
            },
            i = this, r = 0; r < this.grp_pet6.numChildren; r++) n(r);
            ImageButtonUtil.add(this.openBtn, this.openEffect, this),
            this._list.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.onTabRightBtn, this),
            this.addEventListener(egret.Event.ADDED_TO_STAGE, this.initData, this),
            EventManager.addEventListener("contract_openEffct", this.updateEffc, this),
            EventManager.addEventListener("exchangeItem", this.update, this)
        },
        n.prototype.updateEffc = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var t, e, n, i = this;
                return __generator(this,
                function(r) {
                    for (t = [], e = [], n = 0; n < this.parts.length; n++) t.push(this.parts[n].bitbuf);
                    return KTool.getBitSet(t,
                    function(t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = {};
                            r.hasOpen = 1 == t[n],
                            r.info = i.parts[n],
                            e.push(r)
                        }
                        i.curCollection.replaceAll(e),
                        i._list.selectedIndex = i.curSelectNum - 1,
                        i.update()
                    }),
                    [2]
                })
            })
        },
        n.prototype.exchangeItemPop = function() {
            StatLogger.log("230825版本系统功能", "契约召唤优化", "点击主界面【兑换勋章】");
            var t = {};
            t.ins = {
                realid: 1722827,
                coinid: 1722826,
                price: 100,
                POPID: 544,
                batch: 10
            },
            t.caller = this,
            t.callBack = function(t, e) {
                KTool.doExchange(13201, e,
                function() {
                    EventManager.dispatchEventWith("exchangeItem")
                })
            },
            ModuleManager.showModuleByID(1, t)
        },
        n.prototype.openEffect = function() {
            var t = this;
            if (StatLogger.log("230825版本系统功能", "契约召唤优化", "点击主界面【开启效果】"), this.curitem2Num < this.curPartInfo.cost) Alert.show("契约徽章数量不足，是否兑换徽章？",
            function() {
                t.exchangeItemPop()
            });
            else {
                for (var e = this.curPartInfo.partnerMonsterId.split("|"), n = "", i = !0, r = 0, a = e; r < a.length; r++) {
                    var o = a[r];
                    n += PetXMLInfo.getName(~~o) + "、"
                }
                n = n.substring(0, n.length - 1);
                for (var _ = 0; _ < e.length; _++) if (!PetManager.getHasPet(~~e[_])) {
                    var s = "请将已开启专属特性的<font color='#ff0000'>" + n + "</font>共同放入出战背包\n是否立刻打开背包调整？";
                    return void Alert.show(s,
                    function() {
                        ModuleManager.showModuleByID(10)
                    })
                }
                var u = [],
                c = !1;
                n = "";
                for (var h = 0,
                l = PetManager.infos; h < l.length; h++) for (var o = l[h], _ = 0; _ < e.length; _++) if (o.id == ~~e[_]) {
                    if (u.indexOf(o.id) > -1) {
                        c = !0;
                        break
                    }
                    if (u.push(o.id), 0 == o.effectList.length) {
                        n += o.name + "、",
                        i = !1;
                        break
                    }
                    if ("" != PetEffectXMLInfo.getEffectDes(o.effectList[0].effectID, o.effectList[0].args) && 1 == o.effectList.length) {
                        i = !1;
                        break
                    }
                }
                if (n.length > 0 && (n = n.substring(0, n.length - 1)), c) return void Alarm.show("此次开启伙伴效果无法对同种精灵重复开启，请先确认需要开启伙伴效果的精灵在背包内有且仅有一只后再来开启伙伴效果！");
                if (!i) return void Alarm.show("<font color='#ff0000'>" + n + "</font>未开启特性，无法开启效果!");
                SocketConnection.sendByQueue(45785, [2, this.curPartInfo.choice],
                function() {
                    BubblerManager.getInstance().showText("开启成功！"),
                    t.updateEffc(),
                    t._list.selectedIndex = t.curSelectNum - 1
                })
            }
        },
        n.prototype.onTabRightBtn = function(t) {
            null != t.item && (this.zhankaiBtn_down.visible = !1, this.zhankaiBtn_up.visible = !0, this.gr_tankuang.visible = !1, this.curSelectNum = this._list.selectedIndex + 1, this.showGrpPetsInfo(), this.petAnimPlay(), this.update(), this.imge_title_bg.visible = !0, this.tx_title_name.visible = !0)
        },
        n.prototype.petAnimPlay = function() {
            var t = [],
            e = egret.Ease.quartInOut,
            n = 0,
            i = 0;
            switch (this.curPartInfo.partnerNumber) {
            case 2:
                n = 377,
                i = 559;
                break;
            case 3:
                n = 252,
                i = 599.5;
                break;
            case 4:
                n = 188,
                i = 644.5;
                break;
            case 5:
            case 6:
                n = 377,
                i = 555
            }
            for (var r = this.curPartInfo.partnerNumber - 1; r >= 0; r--) {
                var a = this.curPetShowGroup.getChildAt(r);
                if (a.x = i + 150, this.curPartInfo.partnerNumber >= 5) {
                    var o = n * ((r + 1) % 2);
                    t.push(egret.Tween.get(a).to({
                        x: i - o
                    },
                    300 + 50 * r, e))
                } else {
                    var o = n * (this.curPartInfo.partnerNumber - 1 - r);
                    t.push(egret.Tween.get(a).to({
                        x: i - o
                    },
                    400 + 50 * r, e))
                }
                var _ = (s = common.TweenUtil).createAllTween.apply(s, t);
                Promise.all(_)
            }
            var s
        }, n.prototype.popAnimPlay1 = function() {
            gsap.from(this.gr_tankuang, {
                alpha: 0
            }),
            gsap.from(this.gr_tankuang, {
                y: this.gr_tankuang.y - 100
            })
        },
        n.prototype.popAnimPlay2 = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var t;
                return __generator(this,
                function(e) {
                    switch (e.label) {
                    case 0:
                        return t = [],
                        t.push(common.TweenUtil.TweenToPromise(egret.Tween.get(this.gr_tankuang).to({
                            alpha: 0
                        },
                        250))),
                        [4, Promise.all(t)];
                    case 1:
                        return e.sent(),
                        this.gr_tankuang.visible = !1,
                        this.gr_tankuang.alpha = 1,
                        [2, Promise.resolve()]
                    }
                })
            })
        },
        n.prototype.drawOne = function() {
            var e = this;
            if (StatLogger.log("20221111版本系统功能", "契约召唤搬迁", "契约伙伴-主界面-点击【单次召唤】"), !PayManager.canPay()) return void Alarm.show("暂未开放，敬请期待！");
            if (this.curDiamondNum < 5) return void Alarm.show("您的钻石数量不足！");
            if (this.curitem1Num >= 999) Alert.show("契约能量已达到数量上限，<font color='#ff0000'>\"召唤仅能获得能量珠\"</font>   是否购买召唤？",
            function() {
                KTool.buyProductByCallback(258122, 1,
                function() {
                    AwardManager.CustomItemDialog(new t.DrawOneAwardPop),
                    SocketConnection.sendByQueue(45785, [1, 1],
                    function() {
                        KTool.getPlayerInfo([1231, 1232, 1233],
                        function(t) {
                            e.update()
                        })
                    })
                },
                e)
            });
            else {
                if (this.curitem2Num >= 99) return void Alarm.show("<font color='#ff0000'>" + ItemXMLInfo.getName(1722827) + "</font>的数量已达到上限，请使用后再召唤！");
                KTool.buyProductByCallback(258122, 1,
                function() {
                    AwardManager.CustomItemDialog(new t.DrawOneAwardPop),
                    SocketConnection.sendByQueue(45785, [1, 1],
                    function() {
                        KTool.getPlayerInfo([1231, 1232, 1233],
                        function(t) {
                            e.update()
                        })
                    })
                },
                this)
            }
        },
        n.prototype.drawTen = function() {
            var e = this;
            if (StatLogger.log("20221111版本系统功能", "契约召唤搬迁", "契约伙伴-主界面-点击【十连召唤】"), !PayManager.canPay()) return void Alarm.show("暂未开放，敬请期待！");
            if (this.curDiamondNum < 50) return void Alarm.show("您的钻石数量不足！");
            if (this.curitem1Num >= 999) Alert.show("契约能量已达到数量上限，<font color='#ff0000'>\"召唤仅能获得能量珠\"</font>   是否购买召唤？",
            function() {
                KTool.buyProductByCallback(258231, 1,
                function() {
                    AwardManager.CustomItemDialog(new t.DrawTenAwardPop),
                    SocketConnection.sendByQueue(45785, [1, 2],
                    function() {
                        KTool.getPlayerInfo([1231, 1232, 1233],
                        function(t) {
                            e.update()
                        })
                    })
                },
                e)
            });
            else {
                if (this.curitem2Num >= 99) return void Alarm.show("<font color='#ff0000'> " + ItemXMLInfo.getName(1722827) + "</font>的数量已达到上限，请使用后再召唤！");
                KTool.buyProductByCallback(258231, 1,
                function() {
                    AwardManager.CustomItemDialog(new t.DrawTenAwardPop),
                    SocketConnection.sendByQueue(45785, [1, 2],
                    function() {
                        KTool.getPlayerInfo([1231, 1232, 1233],
                        function(t) {
                            e.update()
                        })
                    })
                },
                this)
            }
        },
        n.prototype.showGrpPetsInfo = function() {
            this.curPartInfo = this.parts[this.curSelectNum - 1];
            var t = this.curPartInfo.partnerNumber >= 5 ? 6 : this.curPartInfo.partnerNumber;
            this.grp_pet2.visible = 2 == this.curPartInfo.partnerNumber,
            this.grp_pet3.visible = 3 == this.curPartInfo.partnerNumber,
            this.grp_pet4.visible = 4 == this.curPartInfo.partnerNumber,
            this.grp_pet6.visible = this.curPartInfo.partnerNumber >= 5;
            var e = this.curPartInfo.partnerMonsterId.split("|");
            this.grp_petinfo6_6.visible = 5 != this.curPartInfo.partnerNumber,
            this.curPetShowGroup = this["grp_pet" + t],
            this.tx_title_name.text = this.curPartInfo.partnerName,
            1 == this.curSelectNum ? this.imge_flag.visible = !0 : this.imge_flag.visible = !1;
            for (var n = 0; n < this.curPartInfo.partnerNumber; n++) this["petshow_" + t + "_" + (n + 1)].source = "resource/assets/activityCenter/ContractCall/panel1/" + t + "_pets/" + ~~e[n] + ".png",
            this["txt_petName_" + t + "_" + (n + 1)].text = PetXMLInfo.getName(~~e[n])
        },
        n.prototype.update = function() {
            var t = this;
            UserInfoManager.getDiamond(function(e) {
                t.curDiamondNum = e,
                t.txtCoin1.text = core.gameUtil.ConvertItemNumView(e)
            },
            this),
            ItemManager.updateItems([1722826, 1722827],
            function() {
                t.curitem1Num = ItemManager.getNumByID(1722826),
                t.curitem2Num = ItemManager.getNumByID(1722827);
                t.curitem2Num >= t.curPartInfo.cost ? 589568 : 16711680;
                t.tx_item_num.text = t.curPartInfo.cost + "",
                t.txtCoin2.text = t.curitem2Num + "/99"
            }),
            KTool.getBitSet([this.curPartInfo.bitbuf],
            function(e) {
                var n = 1 == e[0];
                DisplayUtil.setEnabled(t.openBtn, !n, n),
                n ? t.okayBtn.visible = !0 : t.okayBtn.visible = !1
            })
        },
        n.prototype.destroy = function() {
            e.prototype.destroy.call(this),
            EventManager.removeAll(this),
            this._list.removeEventListener(eui.ItemTapEvent.ITEM_TAP, this.onTabRightBtn, this),
            this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.initData, this),
            ImageButtonUtil.removeAll(this),
            t.ContractDataMag.GetInstance().destroy()
        },
        n
    } (BasicPanel);
    t.ContractMainPanel = e,
    __reflect(e.prototype, "contractCall.ContractMainPanel")
} (contractCall || (contractCall = {}));
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
contractCall; !
function(t) {
    var e = function(e) {
        function n() {
            var n = e.call(this) || this;
            return n.rightSelectValue = 0,
            n.topSelectValue = 0,
            n.parts = [],
            n.page2PetProperties = ["光", "水", "火", "冰 ", "机械", "次元"],
            n.assginFigntProductId = 248432,
            n.curTimes = 0,
            n.curBossID = 7733,
            n.skinName = t.Panel2Skin,
            n
        }
        return __extends(n, e),
        n.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.adaptRightContent(this.grp_topRight),
            this.initData(),
            this.addEvent(),
            this.imgDiamond.source = ClientConfig.getItemIcon(5),
            this.icon1.source = ClientConfig.getItemIcon(1710459)
        },
        n.prototype.initData = function() {
            this.page2anims = SpineUtil.createAnimate("qiyuezhaohuan_ui"),
            this.content.addChild(this.page2anims),
            this.page2anims.touchEnabled = !1,
            this.page2anims.touchChildren = !1,
            this.page2anims.x = 458,
            this.page2anims.y = 228,
            this.rbTopGroup = this.rb_page1.group,
            this.topSelectValue = this.rbTopGroup.selectedValue = 1,
            this.rbRightGroup = this.rb_relation1.group,
            this.rightSelectValue = this.rbRightGroup.selectedValue = 1,
            this.grp_page1.visible = !0,
            this.grp_page2.visible = !1;
            var t = new eui.Rect(756, 434, 16777215);
            this.grp_page1.addChild(t),
            t.x = this.grp_pets.x,
            t.y = this.grp_pets.y,
            this.grp_pets.mask = t,
            this.parts = config.Partner.getItems().filter(function(t) {
                return "1" == t.type
            }),
            this.curPartInfo = this.parts[this.rightSelectValue - 1],
            this.petAnimPlay()
        },
        n.prototype.addEvent = function() {
            var e = this;
            ImageButtonUtil.add(this.btnAddDimond,
            function() {
                return PayManager.canPay() ? void PayManager.rechargeDiamond() : void Alarm.show("暂未开放，敬请期待！")
            },
            this),
            ImageButtonUtil.add(this.btnAdd1,
            function() {
                return StatLogger.log("20221111版本系统功能", "契约召唤搬迁", "王联伙伴-获取徽章-点击【+】直接购买徽章"),
                PayManager.canPay() ? void KTool.buyProductByCallback(248431, 1,
                function() {
                    KTool.doExchange(t.ContractCallConst.exchange_item_buy, 1,
                    function() {
                        e.updateValuesPage2()
                    })
                }) : void Alarm.show("暂未开放，敬请期待！")
            },
            this),
            EventManager.addEventListener("jumpToPage2", this.openPage2, this),
            this.addEventListener(egret.Event.ADDED_TO_STAGE, this.initData, this),
            ImageButtonUtil.add(this.icon1,
            function() {
                tipsPop.TipsPop.openItemPop({
                    id: 1710459
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
            ImageButtonUtil.add(this.petshow1,
            function() {
                t.ContractDataMag.GetInstance().friendPanel.setData({
                    id: 0,
                    data: e.curPartInfo,
                    service: e.service
                }),
                t.ContractDataMag.GetInstance().friendPanel.show()
            },
            this),
            ImageButtonUtil.add(this.petshow2,
            function() {
                t.ContractDataMag.GetInstance().friendPanel.setData({
                    id: 1,
                    data: e.curPartInfo,
                    service: e.service
                }),
                t.ContractDataMag.GetInstance().friendPanel.show()
            },
            this),
            ImageButtonUtil.add(this.btnrightOpen,
            function() {
                var n = e.curPartInfo.partnerMonsterId.split("|"),
                i = {};
                i.petid = ~~n[1],
                i.info = e.curPartInfo,
                i.id = 2,
                i.curDiamondNum = e.curDiamondNum;
                var r = new t.OpenPop(i);
                PopViewManager.getInstance().openView(r)
            },
            this),
            ImageButtonUtil.add(this.btnleftOpen,
            function() {
                var n = e.curPartInfo.partnerMonsterId.split("|"),
                i = {};
                i.petid = ~~n[0],
                i.id = 1,
                i.info = e.curPartInfo,
                i.curDiamondNum = e.curDiamondNum;
                var r = new t.OpenPop(i);
                PopViewManager.getInstance().openView(r)
            },
            this),
            EventManager.addEventListener("contract_openEffct",
            function() {
                e.service.updateValues().then(function() {
                    e.updatePage1()
                })
            },
            this),
            this.rbTopGroup.addEventListener(egret.Event.CHANGE, this.onChangeTop, this),
            this.rbRightGroup.addEventListener(egret.Event.CHANGE, this.onChangeRight, this),
            ImageButtonUtil.add(this.btnGoto,
            function() {
                StatLogger.log("20221111版本系统功能", "契约召唤搬迁", "王联伙伴-伙伴效果-点击右上角【前往获取】"),
                e.openPage2()
            },
            this),
            ImageButtonUtil.add(this.btnAdd,
            function() {
                return PayManager.canPay() ? void KTool.buyProductByCallback(248449, 1,
                function() {
                    KTool.doExchange(t.ContractCallConst.exchange_times_buy, 1,
                    function() {
                        e.updateValuesPage2()
                    })
                }) : void Alarm.show("暂未开放，敬请期待！")
            },
            this),
            ImageButtonUtil.add(this.btnRefresh,
            function() {
                return StatLogger.log("20221111版本系统功能", "契约召唤搬迁", "王联伙伴-获取徽章-点击【重新抽取】"),
                e.curTimes <= 0 ? void BubblerManager.getInstance().showText("剩余抽取次数不足！") : void SocketConnection.sendByQueue(t.ContractCallConst.Call_PANEL2_CMD, [1, 0, 0, 0],
                function() {
                    e.updateValuesPage2()
                })
            },
            this),
            ImageButtonUtil.add(this.btnCure,
            function() {
                PetManager.cureAll()
            },
            this),
            ImageButtonUtil.add(this.btnPet,
            function() {
                e.service.showPetBag()
            },
            this),
            ImageButtonUtil.add(this.btnDraw,
            function() {
                return StatLogger.log("20221111版本系统功能", "契约召唤搬迁", "王联伙伴-获取徽章-点击【抽取挑战】"),
                e.curTimes <= 0 ? void BubblerManager.getInstance().showText("剩余抽取次数不足！") : void SocketConnection.sendByQueue(t.ContractCallConst.Call_PANEL2_CMD, [1, 0, 0, 0],
                function() {
                    e.btnDraw.visible = !1,
                    e.updateValuesPage2()
                })
            },
            this),
            ImageButtonUtil.add(this.btnFight,
            function() {
                FightManager.fightNoMapBoss(e.curBossID - 1 + e.curDrawPet)
            },
            this);
            for (var n = function(n) {
                ImageButtonUtil.add(i["btnAssignFight_" + n],
                function() {
                    return StatLogger.log("20221111版本系统功能", "契约召唤搬迁", "王联伙伴-获取徽章-点击【指定挑战】"),
                    PayManager.canPay() ? void KTool.buyProductByCallback(e.assginFigntProductId, 1,
                    function() {
                        SocketConnection.sendByQueue(t.ContractCallConst.Call_PANEL2_CMD, [2, n, 0, 0],
                        function() {
                            e.updateValuesPage2()
                        })
                    }) : void Alarm.show("暂未开放，敬请期待！")
                },
                i),
                ImageButtonUtil.add(i["btnyijian_" + n],
                function() {
                    if (StatLogger.log("20221111版本系统功能", "契约召唤搬迁", "王联伙伴-获取徽章-点击【一键击败】"), !PayManager.canPay()) return void Alarm.show("暂未开放，敬请期待！");
                    var i = void 0,
                    r = 0;
                    4 >= n ? (i = KTool.getBit(e.zhenfaOpenState, n), i += KTool.getBit(e.zhenfaOpenState, n + 4)) : r = KTool.getBit(e.zhenfaOpenState, n + 4);
                    var a = 0 == e.curDrawPet ? n: e.curDrawPet;
                    return 2 == i || 1 == r ? void Alert.show("该精灵王对应属性魔法球已全部激活，是否仍然消耗钻石一键击败？",
                    function() {
                        KTool.buyProductByCallback(248433, 1,
                        function() {
                            SocketConnection.sendByQueue(t.ContractCallConst.Call_PANEL2_CMD, [3, a, 0, 0],
                            function() {
                                e.updateValuesPage2()
                            })
                        })
                    }) : void KTool.buyProductByCallback(248433, 1,
                    function() {
                        SocketConnection.sendByQueue(t.ContractCallConst.Call_PANEL2_CMD, [3, a, 0, 0],
                        function() {
                            e.updateValuesPage2()
                        })
                    })
                },
                i)
            },
            i = this, r = 1; 6 >= r; r++) n(r);
            EventManager.addEventListener(PetFightEvent.ALARM_CLICK, this.updateValuesPage2, this)
        },
        n.prototype.updateValuesPage2 = function() {
            var t = this;
            this.service.updateValues().then(function() {
                t.updatePage2()
            })
        },
        n.prototype.openPage2 = function() {
            this.topSelectValue = this.rbTopGroup.selectedValue = 2,
            this.grp_page1.visible = !1,
            this.grp_page2.visible = !0,
            this.btnGoto.visible = 1 == this.topSelectValue,
            this.btnAdd1.visible = 2 == this.topSelectValue,
            this.updatePage2()
        },
        n.prototype.onChangeTop = function() {
            this.topSelectValue = this.rbTopGroup.selectedValue,
            this.btnGoto.visible = 1 == this.topSelectValue,
            this.btnAdd1.visible = 2 == this.topSelectValue,
            this.grp_page1.visible = 1 == this.topSelectValue,
            this.grp_page2.visible = 2 == this.topSelectValue
        },
        n.prototype.onChangeRight = function() {
            this.rightSelectValue = this.rbRightGroup.selectedValue,
            this.petAnimPlay(),
            this.updatePage1()
        },
        n.prototype.petAnimPlay = function() {
            for (var t = [], e = egret.Ease.quartInOut, n = 379, i = 512.5, r = this.curPartInfo.partnerNumber - 1; r >= 0; r--) {
                var a = this.grp_pets.getChildAt(r);
                a.x = i + 150;
                var o = n * (this.curPartInfo.partnerNumber - 1 - r);
                t.push(egret.Tween.get(a).to({
                    x: i - o
                },
                400 + 50 * r, e));
                var _ = (s = common.TweenUtil).createAllTween.apply(s, t);
                Promise.all(_)
            }
            var s
        }, n.prototype.update = function() {
            this.updatePage1(),
            this.updatePage2()
        },
        n.prototype.updatePage1 = function() {
            var e = this;
            UserInfoManager.getDiamond(function(t) {
                e.curDiamondNum = t,
                e.txtCoin.text = core.gameUtil.ConvertItemNumView(t)
            },
            this),
            this.curPartInfo = this.parts[this.rightSelectValue - 1];
            var n = this.curPartInfo.partnerMonsterId.split("|");
            this.txt_petName1.text = PetXMLInfo.getName(~~n[0]),
            this.txt_petName2.text = PetXMLInfo.getName(~~n[1]),
            this.txt_texingInfo1.text = "仅强化" + PetXMLInfo.getName(~~n[0]) + "的特性效果",
            this.txt_texingInfo2.text = "仅强化" + PetXMLInfo.getName(~~n[1]) + "的特性效果",
            this.txt_needItemNum1.text = this.txt_needItemNum2.text = "x" + this.curPartInfo.cost,
            this.pet1.source = "resource/assets/activityCenter/ContractCall/panel2/" + ~~n[0] + ".png",
            this.pet2.source = "resource/assets/activityCenter/ContractCall/panel2/" + ~~n[1] + ".png";
            var i = this.service.getValue(t.ContractCallConst.forever_friends_state),
            r = 1 == KTool.getBit(i, 2 * this.curPartInfo.choice - 1),
            a = 1 == KTool.getBit(i, 2 * this.curPartInfo.choice);
            DisplayUtil.setEnabled(this.btnleftOpen, !r, r),
            DisplayUtil.setEnabled(this.btnrightOpen, !a, a);
            for (var o = 0; o < this.parts.length; o++) {
                var _ = 1 == KTool.getBit(i, 2 * this.parts[o].choice - 1),
                s = 1 == KTool.getBit(i, 2 * this.parts[o].choice);
                this["rb_relation" + (o + 1)].hasOpen.visible = _ && s
            }
        },
        n.prototype.updatePage2 = function() {
            var e = this;
            UserInfoManager.getDiamond(function(t) {
                e.curDiamondNum = t,
                e.txtCoin.text = core.gameUtil.ConvertItemNumView(t)
            },
            this),
            this.curTimes = 15 - this.service.getValue(t.ContractCallConst.daily_draw_times),
            this.curDrawPet = this.service.getValue(t.ContractCallConst.forever_hasdraw_boss),
            this.zhenfaOpenState = this.service.getValue(t.ContractCallConst.forever_open_state);
            for (var n = 0,
            i = 0,
            r = 1; 10 >= r; r++) this["active_" + r].visible = KTool.getBit(this.zhenfaOpenState, r),
            4 >= r ? n += KTool.getBit(this.zhenfaOpenState, r) : i += KTool.getBit(this.zhenfaOpenState, r);
            if (4 == n || 6 == i) {
                var a = 4 == n ? 2 : 1,
                o = this;
                this.page2anims.play("contract_achieve" + a, 1, 1, {
                    playEnd: function() {
                        SocketConnection.sendByQueue(t.ContractCallConst.Call_PANEL2_CMD, [4, 0, 0, 0],
                        function() {
                            o.service.updateValues().then(function() {
                                o.updatePage2()
                            })
                        })
                    }
                })
            }
            this.btnDraw.visible = 0 == this.curDrawPet,
            this.btnFight.visible = this.btnRefresh.visible = 0 != this.curDrawPet;
            var _ = this.curTimes > 0 ? 4187130 : 16711680;
            this.txt_hasDrawTimes.textFlow = [{
                text: this.curTimes + "",
                style: {
                    textColor: _
                }
            }],
            this.txtCoin2.text = ItemManager.getNumByID(1710459) + "",
            DisplayUtil.setEnabled(this.btnAdd, 0 == this.curTimes, this.curTimes > 0);
            for (var r = 1; 6 >= r; r++) this["btnCurDraw_" + r].visible = this.curDrawPet == r,
            this["kuang_" + r].visible = this.curDrawPet == r,
            this["btnAssignFight_" + r].visible = this.curDrawPet != r,
            this["grp_boos" + r].scaleX = this["grp_boos" + r].scaleY = 1;
            0 != this.curDrawPet && gsap.fromTo(this["grp_boos" + this.curDrawPet], {
                scaleX: 1,
                scaleY: 1
            },
            {
                scaleX: 1.1,
                scaleY: 1.1,
                duration: .2
            })
        },
        n.prototype.destroy = function() {
            e.prototype.destroy.call(this),
            this.rbTopGroup.removeEventListener(egret.Event.CHANGE, this.onChangeTop, this),
            this.rbRightGroup.removeEventListener(egret.Event.CHANGE, this.onChangeRight, this),
            EventManager.removeAll(this),
            this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.initData, this)
        },
        n
    } (BasicPanel);
    t.ContractPanel2 = e,
    __reflect(e.prototype, "contractCall.ContractPanel2")
} (contractCall || (contractCall = {}));
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
    return new(n || (n = Promise))(function(r, a) {
        function o(t) {
            try {
                s(i.next(t))
            } catch(e) {
                a(e)
            }
        }
        function _(t) {
            try {
                s(i["throw"](t))
            } catch(e) {
                a(e)
            }
        }
        function s(t) {
            t.done ? r(t.value) : new n(function(e) {
                e(t.value)
            }).then(o, _)
        }
        s((i = i.apply(t, e || [])).next())
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
        if (r) throw new TypeError("Generator is already executing.");
        for (; s;) try {
            if (r = 1, a && (o = a[2 & n[0] ? "return": n[0] ? "throw": "next"]) && !(o = o.call(a, n[1])).done) return o;
            switch (a = 0, o && (n = [0, o.value]), n[0]) {
            case 0:
            case 1:
                o = n;
                break;
            case 4:
                return s.label++,
                {
                    value: n[1],
                    done: !1
                };
            case 5:
                s.label++,
                a = n[1],
                n = [0];
                continue;
            case 7:
                n = s.ops.pop(),
                s.trys.pop();
                continue;
            default:
                if (o = s.trys, !(o = o.length > 0 && o[o.length - 1]) && (6 === n[0] || 2 === n[0])) {
                    s = 0;
                    continue
                }
                if (3 === n[0] && (!o || n[1] > o[0] && n[1] < o[3])) {
                    s.label = n[1];
                    break
                }
                if (6 === n[0] && s.label < o[1]) {
                    s.label = o[1],
                    o = n;
                    break
                }
                if (o && s.label < o[2]) {
                    s.label = o[2],
                    s.ops.push(n);
                    break
                }
                o[2] && s.ops.pop(),
                s.trys.pop();
                continue
            }
            n = e.call(t, s)
        } catch(i) {
            n = [6, i],
            a = 0
        } finally {
            r = o = 0
        }
        if (5 & n[0]) throw n[1];
        return {
            value: n[0] ? n[1] : void 0,
            done: !0
        }
    }
    var r, a, o, _, s = {
        label: 0,
        sent: function() {
            if (1 & o[0]) throw o[1];
            return o[1]
        },
        trys: [],
        ops: []
    };
    return _ = {
        next: n(0),
        "throw": n(1),
        "return": n(2)
    },
    "function" == typeof Symbol && (_[Symbol.iterator] = function() {
        return this
    }),
    _
},
contractCall; !
function(t) {
    var e = function(e) {
        function n() {
            var n = e.call(this) || this;
            return n.petIds = [3519, 3409, 2727, 2735],
            n.bitbuf = [449, 450, 451, 452],
            n.exchangeId = [12051, 12052, 12053, 12054],
            n.productIds = [254706, 254706, 254706, 254706],
            n.forever_state = 4060,
            n.curPetsState = [],
            n.skinName = t.Panel3Skin,
            n
        }
        return __extends(n, e),
        n.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            StatLogger.log("20221111版本系统功能", "契约召唤搬迁", "进入西游伙伴界面"),
            this.addEvent(),
            this.adaptRightContent(this.topRigth),
            this.initData(),
            this.imgDiamond.source = ClientConfig.getItemIcon(5)
        },
        n.prototype.initData = function() {
            this.txt_futitle.textFlow = [{
                text: "    激活特性后，将师徒4人全部放于出战背包或待命背包即可开启特效：\n",
                style: {
                    textColor: 12900350
                }
            },
            {
                text: "战斗中永久看穿对方精灵血量，且我方首发精灵全属性+1",
                style: {
                    textColor: 4252667
                }
            },
            {
                text: "（仅限BOSS对战）",
                style: {
                    textColor: 16765733
                }
            }],
            this.animPlay(),
            this.update()
        },
        n.prototype.animPlay = function() {
            for (var t = [], e = egret.Ease.quartInOut, n = 0; 3 >= n; n++) {
                var i = this.grp_pets.getChildAt(n),
                r = i.x;
                i.x = r + 150 * (n + 1),
                t.push(egret.Tween.get(i).to({
                    x: i.x - 150 * (n + 1)
                },
                400 + 50 * n, e));
                var a = (o = common.TweenUtil).createAllTween.apply(o, t);
                Promise.all(a)
            }
            var o
        }, n.prototype.addEvent = function() {
            var t = this;
            this.addEventListener(egret.Event.ADDED_TO_STAGE, this.initData, this),
            ImageButtonUtil.add(this.btnAdd,
            function() {
                return PayManager.canPay() ? void PayManager.rechargeDiamond() : void Alarm.show("暂未开放，敬请期待！")
            },
            this);
            for (var e = function(e) {
                ImageButtonUtil.add(n["btnGetPet_" + e],
                function() {
                    return PayManager.canPay() ? void KTool.buyProductByCallback(t.productIds[e - 1], 1,
                    function() {
                        KTool.doExchange(t.exchangeId[e - 1], 1,
                        function() {
                            BubblerManager.getInstance().showText("购买成功！"),
                            t.update()
                        })
                    }) : void Alarm.show("暂未开放，敬请期待！")
                },
                n),
                ImageButtonUtil.add(n["btnInfo_" + e],
                function() {
                    ModuleManager.showModule("petManualInfo", ["pet_info_manual"], {
                        data: t.petIds[e - 1],
                        type: "pet",
                        thisObj: t
                    },
                    "", AppDoStyle.HIDEN)
                },
                n),
                ImageButtonUtil.add(n["grp_pet" + e],
                function() {
                    StatLogger.log("20221111版本系统功能", "契约召唤搬迁", "西游伙伴-点击【精灵面板】查看精灵"),
                    ModuleManager.showModule("petManualInfo", ["pet_info_manual"], {
                        data: t.petIds[e - 1],
                        type: "pet",
                        thisObj: t
                    },
                    "", AppDoStyle.HIDEN)
                },
                n)
            },
            n = this, i = 1; 4 >= i; i++) e(i);
            ImageButtonUtil.add(this.imgDiamond,
            function() {
                tipsPop.TipsPop.openItemPop({
                    id: 5
                })
            },
            this),
            EventManager.addEventListener(RobotEvent.DIAMOND_CHANGED,
            function(e) {
                t.txtCoin.text = core.gameUtil.ConvertItemNumView(e.data)
            },
            this),
            ImageButtonUtil.add(this.btnBuyTe,
            function() {
                if (StatLogger.log("20221111版本系统功能", "契约召唤搬迁", "西游伙伴-点击【开启效果】"), !PayManager.canPay()) return void Alarm.show("暂未开放，敬请期待！");
                if (t.curDiamondNum <= 298) return void Alarm.show("您的钻石数量不足!");
                for (var e = [], n = 0; 4 > n; n++) {
                    var i = PetManager.getHasPet(t.petIds[n]);
                    e.push(i)
                }
                if (e.indexOf(!1) >= 0) {
                    var r = "请将<font color='#ff0000'>西游师徒四人</font>共同放入出战背包内！";
                    return void Alarm.show(r,
                    function() {
                        ModuleManager.showModuleByID(10)
                    })
                }
                KTool.buyProductByCallback(254707, 1,
                function() {
                    SocketConnection.sendByQueue(42377, [24, 0],
                    function() {
                        BubblerManager.getInstance().showText("激活成功！"),
                        t.update()
                    })
                })
            },
            this),
            ImageButtonUtil.add(this.btnPanel3All,
            function() {
                if (StatLogger.log("20221111版本系统功能", "契约召唤搬迁", "西游伙伴-点击【一键获取】"), !PayManager.canPay()) return void Alarm.show("暂未开放，敬请期待！");
                for (var e = [], n = 1; 4 >= n; n++) 0 == t.curPetsState[n - 1] && e.push(t.petIds[n - 1]);
                if (t.curDiamondNum < 68 * e.length) return void Alarm.show("您的钻石数量不足！");
                for (var i = "",
                r = 0,
                a = e; r < a.length; r++) {
                    var o = a[r];
                    i += PetXMLInfo.getName(~~o) + "、"
                }
                i = i.substring(0, i.length - 1);
                var _ = "是否花费<font color='#ff0000'>" + 68 * e.length + "钻石</font>购买<font color='#ff0000'>" + i + "</font>";
                Alert.show(_,
                function() {
                    t.buyProduct()
                })
            },
            this)
        },
        n.prototype.buyProduct = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var t, e, n, i = this;
                return __generator(this,
                function(r) {
                    for (t = [], e = 1; 4 >= e; e++) 0 == this.curPetsState[e - 1] && t.push(this.petIds[e - 1]);
                    return t.length > 0 && (n = this.petIds.indexOf(t[0]), KTool.buyProductByCallback(this.productIds[n], 1,
                    function() {
                        KTool.doExchange(i.exchangeId[n], 1,
                        function() {
                            i.update().then(function() {
                                i.buyProduct()
                            })
                        })
                    },
                    null,
                    function() {},
                    !0)),
                    this.update(),
                    [2]
                })
            })
        },
        n.prototype.update = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var t, e, n = this;
                return __generator(this,
                function(i) {
                    switch (i.label) {
                    case 0:
                        return [4, KTool.getBitSetAsync(this.bitbuf)];
                    case 1:
                        for (t = i.sent(), e = 1; 4 >= e; e++) this["hasGetPet_" + e].visible = 1 == t[e - 1],
                        this["btnGetPet_" + e].visible = 0 == t[e - 1],
                        this.curPetsState[e - 1] = t[e - 1];
                        return this.btnPanel3All.visible = this.curPetsState.indexOf(0) > -1,
                        UserInfoManager.getDiamond(function(t) {
                            n.txtCoin.text = core.gameUtil.ConvertItemNumView(t),
                            n.curDiamondNum = t
                        },
                        this),
                        KTool.getMultiValue([this.forever_state],
                        function(t) {
                            n.btnBuyTe.visible = 0 == KTool.getBit(t[0], 9),
                            n.hasActivation.visible = !n.btnBuyTe.visible
                        }),
                        [2]
                    }
                })
            })
        },
        n.prototype.destroy = function() {
            this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.initData, this),
            EventManager.removeAll(this),
            ImageButtonUtil.removeAll(this)
        },
        n
    } (BasicPanel);
    t.ContractPanel3 = e,
    __reflect(e.prototype, "contractCall.ContractPanel3")
} (contractCall || (contractCall = {}));
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
    return new(n || (n = Promise))(function(r, a) {
        function o(t) {
            try {
                s(i.next(t))
            } catch(e) {
                a(e)
            }
        }
        function _(t) {
            try {
                s(i["throw"](t))
            } catch(e) {
                a(e)
            }
        }
        function s(t) {
            t.done ? r(t.value) : new n(function(e) {
                e(t.value)
            }).then(o, _)
        }
        s((i = i.apply(t, e || [])).next())
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
        if (r) throw new TypeError("Generator is already executing.");
        for (; s;) try {
            if (r = 1, a && (o = a[2 & n[0] ? "return": n[0] ? "throw": "next"]) && !(o = o.call(a, n[1])).done) return o;
            switch (a = 0, o && (n = [0, o.value]), n[0]) {
            case 0:
            case 1:
                o = n;
                break;
            case 4:
                return s.label++,
                {
                    value: n[1],
                    done: !1
                };
            case 5:
                s.label++,
                a = n[1],
                n = [0];
                continue;
            case 7:
                n = s.ops.pop(),
                s.trys.pop();
                continue;
            default:
                if (o = s.trys, !(o = o.length > 0 && o[o.length - 1]) && (6 === n[0] || 2 === n[0])) {
                    s = 0;
                    continue
                }
                if (3 === n[0] && (!o || n[1] > o[0] && n[1] < o[3])) {
                    s.label = n[1];
                    break
                }
                if (6 === n[0] && s.label < o[1]) {
                    s.label = o[1],
                    o = n;
                    break
                }
                if (o && s.label < o[2]) {
                    s.label = o[2],
                    s.ops.push(n);
                    break
                }
                o[2] && s.ops.pop(),
                s.trys.pop();
                continue
            }
            n = e.call(t, s)
        } catch(i) {
            n = [6, i],
            a = 0
        } finally {
            r = o = 0
        }
        if (5 & n[0]) throw n[1];
        return {
            value: n[0] ? n[1] : void 0,
            done: !0
        }
    }
    var r, a, o, _, s = {
        label: 0,
        sent: function() {
            if (1 & o[0]) throw o[1];
            return o[1]
        },
        trys: [],
        ops: []
    };
    return _ = {
        next: n(0),
        "throw": n(1),
        "return": n(2)
    },
    "function" == typeof Symbol && (_[Symbol.iterator] = function() {
        return this
    }),
    _
},
contractCall; !
function(t) {
    var e = function(e) {
        function n() {
            var n = e.call(this) || this;
            return n.petIds = [2512, 2520, 2530, 2523],
            n.PET_ARR1 = [1940, 1941, 2512],
            n.PET_ARR2 = [1928, 1929, 2520],
            n.PET_ARR3 = [1969, 1970, 2530],
            n.productIds = [259767, 259768, 259769, 259770],
            n.petState = 123137,
            n.exchangeId = [13829, 13830, 13831, 13832],
            n.forever_state = 4060,
            n.curPetsState = [],
            n.skinName = t.Panel4Skin,
            n.addEvent(),
            n
        }
        return __extends(n, e),
        n.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            StatLogger.log("20221111版本系统功能", "契约召唤搬迁", "进入桃园结义界面"),
            this.adaptRightContent(this.topRigth),
            this.imgDiamond.source = ClientConfig.getItemIcon(5)
        },
        n.prototype.initData = function() {
            this.txt_futitle.textFlow = [{
                text: "将",
                style: {
                    textColor: 12900350
                }
            },
            {
                text: "万人敌张飞",
                style: {
                    textColor: 16765733
                }
            },
            {
                text: "（或埃米、埃米斯）、",
                style: {
                    textColor: 12900350
                }
            },
            {
                text: "昭烈帝刘备",
                style: {
                    textColor: 16765733
                }
            },
            {
                text: "（或波波、波尔斯）、",
                style: {
                    textColor: 12900350
                }
            },
            {
                text: "武圣关羽",
                style: {
                    textColor: 16765733
                }
            },
            {
                text: "（或奥托、奥托斯）\n                                           放入出战背包，即可开启",
                style: {
                    textColor: 12900350
                }
            },
            {
                text: "专属BUFF-桃\n",
                style: {
                    textColor: 16765733
                }
            },
            {
                text: "                           开启效果后，背包内同时放入诸葛卧龙，可以强化BUFF效果！",
                style: {
                    textColor: 4252667
                }
            }],
            this.animPlay(),
            this.update()
        },
        n.prototype.animPlay = function() {
            for (var t = this,
            e = [], n = egret.Ease.quartInOut, i = 0; 3 >= i; i++) {
                var r = this.grp_pets.getChildAt(i),
                a = r.x;
                r.x = a + 150 * (i + 1),
                e.push(egret.Tween.get(r).to({
                    x: r.x - 150 * (i + 1)
                },
                400 + 50 * i, n))
            }
            var o = (_ = common.TweenUtil).createAllTween.apply(_, e);
            Promise.all(o).then(function() {
                common.TweenUtil.removeDisplaysTweens(t.grp_pets.$children)
            });
            var _
        }, n.prototype.addEvent = function() {
            var e = this;
            this.addEventListener(egret.Event.ADDED_TO_STAGE, this.initData, this);
            for (var n = function(t) {
                ImageButtonUtil.add(i["btnGetPet_" + t],
                function() {
                    return PayManager.canPay() ? void KTool.buyProductByCallback(e.productIds[t - 1], 1,
                    function() {
                        KTool.doExchange(e.exchangeId[t - 1], 1,
                        function() {
                            BubblerManager.getInstance().showText("购买成功！"),
                            e.update()
                        })
                    }) : void Alarm.show("暂未开放，敬请期待！")
                },
                i),
                ImageButtonUtil.add(i["btnInfo_" + t],
                function() {
                    ModuleManager.showModule("petManualInfo", ["pet_info_manual"], {
                        data: e.petIds[t - 1],
                        type: "pet",
                        thisObj: e
                    },
                    "", AppDoStyle.HIDEN)
                },
                i),
                ImageButtonUtil.add(i["grp_pet" + t],
                function() {
                    StatLogger.log("20221111版本系统功能", "契约召唤搬迁", "桃园结义-点击【精灵面板】查看精灵"),
                    ModuleManager.showModule("petManualInfo", ["pet_info_manual"], {
                        data: e.petIds[t - 1],
                        type: "pet",
                        thisObj: e
                    },
                    "", AppDoStyle.HIDEN)
                },
                i)
            },
            i = this, r = 1; 4 >= r; r++) n(r);
            ImageButtonUtil.add(this.btnAdd,
            function() {
                return PayManager.canPay() ? void PayManager.rechargeDiamond() : void Alarm.show("暂未开放，敬请期待！")
            },
            this),
            ImageButtonUtil.add(this.imgDiamond,
            function() {
                tipsPop.TipsPop.openItemPop({
                    id: 5
                })
            },
            this),
            EventManager.addEventListener(RobotEvent.DIAMOND_CHANGED,
            function(t) {
                e.txtCoin.text = core.gameUtil.ConvertItemNumView(t.data)
            },
            this),
            ImageButtonUtil.add(this.btnCheckEff,
            function() {
                StatLogger.log("20221111版本系统功能", "契约召唤搬迁", "桃园结义-点击【查看效果】");
                var e = new t.SanGuoPop;
                PopViewManager.getInstance().openView(e)
            },
            this),
            ImageButtonUtil.add(this.btnOpenEff,
            function() {
                StatLogger.log("20221111版本系统功能", "契约召唤搬迁", "桃园结义-点击【开启效果】");
                for (var t = [], n = 0; 3 > n; n++) {
                    for (var i = !1,
                    r = e["PET_ARR" + (n + 1)], a = 0; a < r.length; a++) {
                        var o = r[a];
                        if (PetManager.getHasPet(o)) {
                            i = !0;
                            break
                        }
                    }
                    t.push(i)
                }
                if (t.indexOf(!1) >= 0) {
                    var _ = "请将<font color='#ff0000'>张飞、刘备、关羽</font>共同放入出战背包内！";
                    return void Alarm.show(_,
                    function() {
                        ModuleManager.showModuleByID(10)
                    })
                }
                SocketConnection.sendByQueue(46052, [],
                function() {
                    BubblerManager.getInstance().showText("激活成功！"),
                    e.update()
                })
            },
            this),
            ImageButtonUtil.add(this.btnPanel4All,
            function() {
                if (StatLogger.log("20221111版本系统功能", "契约召唤搬迁", "桃园结义-点击【一键获取】"), !PayManager.canPay()) return void Alarm.show("暂未开放，敬请期待！");
                for (var t = [], n = 1; 4 >= n; n++) 0 == e.curPetsState[n - 1] && t.push(e.petIds[n - 1]);
                var i = 98 * t.length;
                if (t.indexOf(2523) > -1 && (i += 30), e.curDiamondNum < i) return void Alarm.show("您的钻石数量不足！");
                for (var r = "",
                a = 0,
                o = t; a < o.length; a++) {
                    var _ = o[a];
                    r += PetXMLInfo.getName(~~_) + "、"
                }
                r = r.substring(0, r.length - 1);
                var s = "是否花费<font color='#ff0000'>" + i + "钻石</font>购买<font color='#ff0000'>" + r + "</font>";
                Alert.show(s,
                function() {
                    e.buyProduct()
                })
            },
            this)
        },
        n.prototype.buyProduct = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var t, e, n, i = this;
                return __generator(this,
                function(r) {
                    for (t = [], e = 1; 4 >= e; e++) 0 == this.curPetsState[e - 1] && t.push(this.petIds[e - 1]);
                    return t.length > 0 && (n = this.petIds.indexOf(t[0]), KTool.buyProductByCallback(this.productIds[n], 1,
                    function() {
                        KTool.doExchange(i.exchangeId[n], 1,
                        function() {
                            BubblerManager.getInstance().showText("购买成功！"),
                            i.update().then(function() {
                                i.buyProduct()
                            })
                        })
                    },
                    null,
                    function() {},
                    !0)),
                    this.update(),
                    [2]
                })
            })
        },
        n.prototype.update = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var t, e, n, i = this;
                return __generator(this,
                function(r) {
                    switch (r.label) {
                    case 0:
                        return UserInfoManager.getDiamond(function(t) {
                            i.txtCoin.text = core.gameUtil.ConvertItemNumView(t),
                            i.curDiamondNum = t
                        },
                        this),
                        [4, KTool.getMultiValueAsync([this.forever_state, this.petState])];
                    case 1:
                        for (t = r.sent(), e = 1 == KTool.getBit(t[0], 1), this.btnOpenEff.visible = !e, this.hasActivation.visible = e, n = 1; 4 >= n; n++) this["hasGetPet_" + n].visible = 1 == KTool.getBit(t[1], n),
                        this["btnGetPet_" + n].visible = 0 == KTool.getBit(t[1], n),
                        this.curPetsState[n - 1] = KTool.getBit(t[1], n);
                        return this.btnPanel4All.visible = this.curPetsState.indexOf(0) > -1,
                        [2]
                    }
                })
            })
        },
        n.prototype.destroy = function() {
            this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.initData, this),
            ImageButtonUtil.removeAll(this),
            EventManager.removeAll(this)
        },
        n
    } (BasicPanel);
    t.ContractPanel4 = e,
    __reflect(e.prototype, "contractCall.ContractPanel4")
} (contractCall || (contractCall = {}));
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
contractCall; !
function(t) {
    var e = function(e) {
        function n() {
            var t = e.call(this) || this;
            return t.skinName = ContractpopSkin,
            t
        }
        return __extends(n, e),
        n.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.addEvent(),
            this.update(),
            this.icon_1.source = ClientConfig.getItemIcon(1722826),
            this.icon_2.source = ClientConfig.getItemIcon(1722827),
            this.icon_gold.source = ClientConfig.getItemIcon(5)
        },
        n.prototype.addEvent = function() {
            ImageButtonUtil.add(this.imge_add,
            function() {
                PayManager.rechargeDiamond()
            },
            this),
            ImageButtonUtil.add(this.getItemBtn, this.exchangeItemPop, this),
            ImageButtonUtil.add(this.icon_1,
            function() {
                tipsPop.TipsPop.openItemPop({
                    id: 1722826
                })
            },
            this),
            ImageButtonUtil.add(this.icon_2,
            function() {
                tipsPop.TipsPop.openItemPop({
                    id: 1722827
                })
            },
            this),
            ImageButtonUtil.add(this.icon_gold,
            function() {
                tipsPop.TipsPop.openItemPop({
                    id: 5
                })
            },
            this),
            ImageButtonUtil.add(this.closeBtn, this.hide, this),
            ImageButtonUtil.add(this.btnDrawOne, this.drawOne, this),
            ImageButtonUtil.add(this.btnDrawTen, this.drawTen, this),
            ImageButtonUtil.add(this.btnRatePop,
            function() {
                StatLogger.log("230825版本系统功能", "契约召唤优化", "点击契约召唤界面【概率】");
                var e = new t.ResultPop;
                PopViewManager.getInstance().openView(e)
            },
            this)
        },
        n.prototype.exchangeItemPop = function() {
            this.hide(),
            StatLogger.log("230825版本系统功能", "契约召唤优化", "点击契约召唤界面【兑换】");
            var t = {};
            t.ins = {
                realid: 1722827,
                coinid: 1722826,
                price: 100,
                POPID: 544,
                batch: 10
            },
            t.caller = this,
            t.callBack = function(t, e) {
                KTool.doExchange(13201, e,
                function() {
                    EventManager.dispatchEventWith("exchangeItem")
                })
            },
            ModuleManager.showModuleByID(1, t)
        },
        n.prototype.drawOne = function() {
            var e = this;
            if (StatLogger.log("230825版本系统功能", "契约召唤优化", "点击契约召唤界面【单次召唤】"), !PayManager.canPay()) return void Alarm.show("暂未开放，敬请期待！");
            if (this.curDiamondNum < 5) return void Alarm.show("您的钻石数量不足！");
            if (this.curitem2Num >= 999) Alert.show("契约能量已达到数量上限，<font color='#ff0000'>\"召唤仅能获得能量珠\"</font>   是否购买召唤？",
            function() {
                KTool.buyProductByCallback(258122, 1,
                function() {
                    AwardManager.CustomItemDialog(new t.DrawOneAwardPop),
                    SocketConnection.sendByQueue(45785, [1, 1],
                    function() {
                        KTool.getPlayerInfo([1231, 1232, 1233],
                        function(t) {
                            e.update(),
                            EventManager.dispatchEventWith("contract_update")
                        })
                    })
                },
                e)
            });
            else {
                if (this.curitem1Num >= 99) return void Alarm.show("<font color='#ff0000'>" + ItemXMLInfo.getName(1722827) + "</font>的数量已达到上限，请使用后再召唤！");
                KTool.buyProductByCallback(258122, 1,
                function() {
                    AwardManager.CustomItemDialog(new t.DrawOneAwardPop),
                    SocketConnection.sendByQueue(45785, [1, 1],
                    function() {
                        KTool.getPlayerInfo([1231, 1232, 1233],
                        function(t) {
                            e.update(),
                            EventManager.dispatchEventWith("contract_update")
                        })
                    })
                },
                this)
            }
        },
        n.prototype.drawTen = function() {
            var e = this;
            if (StatLogger.log("230825版本系统功能", "契约召唤优化", "点击契约召唤界面【十连召唤】"), !PayManager.canPay()) return void Alarm.show("暂未开放，敬请期待！");
            if (this.curDiamondNum < 50) return void Alarm.show("您的钻石数量不足！");
            if (this.curitem2Num >= 999) Alert.show("契约能量已达到数量上限，<font color='#ff0000'>\"召唤仅能获得能量珠\"</font>   是否购买召唤？",
            function() {
                KTool.buyProductByCallback(258231, 1,
                function() {
                    AwardManager.CustomItemDialog(new t.DrawTenAwardPop),
                    SocketConnection.sendByQueue(45785, [1, 2],
                    function() {
                        KTool.getPlayerInfo([1231, 1232, 1233],
                        function(t) {
                            e.update(),
                            EventManager.dispatchEventWith("contract_update")
                        })
                    })
                },
                e)
            });
            else {
                if (this.curitem1Num >= 99) return void Alarm.show("<font color='#ff0000'> " + ItemXMLInfo.getName(1722827) + "</font>的数量已达到上限，请使用后再召唤！");
                KTool.buyProductByCallback(258231, 1,
                function() {
                    AwardManager.CustomItemDialog(new t.DrawTenAwardPop),
                    SocketConnection.sendByQueue(45785, [1, 2],
                    function() {
                        KTool.getPlayerInfo([1231, 1232, 1233],
                        function(t) {
                            e.update(),
                            EventManager.dispatchEventWith("contract_update")
                        })
                    })
                },
                this)
            }
        },
        n.prototype.update = function() {
            var t = this;
            UserInfoManager.getDiamond(function(e) {
                t.curDiamondNum = e,
                t.txtCoin2.text = core.gameUtil.ConvertItemNumView(e)
            },
            this),
            ItemManager.updateItems([1722826, 1722827],
            function() {
                t.curitem2Num = ItemManager.getNumByID(1722826),
                t.curitem1Num = ItemManager.getNumByID(1722827),
                t.iconTxtNum_1.text = t.curitem2Num + "/999",
                t.iconTxtNum_2.text = t.curitem1Num + "/99"
            })
        },
        n.prototype.destroy = function() {
            e.prototype.destroy.call(this),
            ImageButtonUtil.removeAll(this)
        },
        n
    } (PopView);
    t.contractPop = e,
    __reflect(e.prototype, "contractCall.contractPop")
} (contractCall || (contractCall = {}));
var __reflect = this && this.__reflect ||
function(t, e, n) {
    t.__class__ = e,
    n ? n.push(e) : n = [e],
    t.__types__ = t.__types__ ? n.concat(t.__types__) : n
},
contractCall; !
function(t) {
    var e = function() {
        function e() {}
        return e.GetInstance = function() {
            return e._instance || (e._instance = new e),
            e._instance
        },
        e.prototype.init = function() {
            this.friendPanel || (this.friendPanel = new t.ContractFriendPanel, LevelManager.appLevel.addChild(this.friendPanel), this.friendPanel.hide())
        },
        e.prototype.destroy = function() {
            this.friendPanel.destroy(),
            this.friendPanel = null,
            e._instance = null
        },
        e._instance = null,
        e
    } ();
    t.ContractDataMag = e,
    __reflect(e.prototype, "contractCall.ContractDataMag")
} (contractCall || (contractCall = {}));
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
contractCall; !
function(t) {
    var e = function(e) {
        function n() {
            var n = e.call(this) || this;
            return n.beadsHaskCode = [],
            n.skinName = t.DrawtenSkin,
            n
        }
        return __extends(n, e),
        n.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this)
        },
        n.prototype.showItems = function(t) {
            this.items = t;
            for (var e = 0; 10 > e; e++) this["reward_" + (e + 1)].SetItem(this.items[2 * e]),
            this["bead_" + (e + 1)].source = ClientConfig.getItemIcon(this.items[2 * e + 1].id),
            this.beadsHaskCode.push(this["bead_" + (e + 1)].hashCode)
        },
        n.prototype.startEvent = function() {
            LevelManager.stage.addEventListener(egret.TouchEvent.TOUCH_TAP, this.startRemoveDialog, this)
        },
        n.prototype.startRemoveDialog = function(e) {
            var n = this;
            if (e.target instanceof t.DrawItem) {
                var i = e.target.Item;
                if (i.type == AwardType.TYPE_MARK) {
                    var r = {};
                    r.ins = i.id,
                    tipsPop.TipsPop.openCounterMarkPop(r, void 0, LevelManager.topLevel)
                } else if (i.type == AwardType.TYPE_ITEM) if (ItemXMLInfo.getType(i.id)) {
                    var a = {};
                    a.clothesId = i.id,
                    tipsPop.TipsPop.openClothesPop(a, void 0, !1, LevelManager.topLevel)
                } else {
                    var o = {};
                    o.id = i.id,
                    tipsPop.TipsPop.openItemPop(o, void 0, LevelManager.topLevel)
                }
            } else {
                if (this.beadsHaskCode.indexOf(e.target.hashCode) > -1) {
                    var o = {};
                    return o.id = this.items[2 * this.beadsHaskCode.indexOf(e.target.hashCode) + 1].id,
                    void tipsPop.TipsPop.openItemPop(o, void 0, LevelManager.topLevel)
                } ! e.target || e.target != AwardManager.bg_mask && e.target.parent != this || (LevelManager.stage.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.startRemoveDialog, this), egret.Tween.get(this).to({
                    scaleX: 0,
                    scaleY: 0,
                    alpha: .6
                },
                300, egret.Ease.elasticOut).call(function() {
                    n.destroy()
                },
                this))
            }
        },
        n.prototype.destroy = function() {
            this.items = null,
            this.parent && (this.parent.removeChild(this), AwardManager.clear(), AwardManager.CustomItemDialog(null), EventManager.dispatchEventWith(AwardEvent.CLOSE_AWARD_DIALOG))
        },
        n
    } (AwardBaseDialog);
    t.DrawTenAwardPop = e,
    __reflect(e.prototype, "contractCall.DrawTenAwardPop")
} (contractCall || (contractCall = {}));
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
contractCall; !
function(t) {
    var e = function(e) {
        function n(n) {
            var i = e.call(this) || this;
            return i.skinName = t.OpenPopSkin,
            i.value = n,
            i
        }
        return __extends(n, e),
        n.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.addEvent()
        },
        n.prototype.initialized = function() {
            this.petids = this.value.info.partnerMonsterId.split("|"),
            this.value.curDiamondNum + "/68";
            var t = this.value.curDiamondNum >= 68 ? 589568 : 16711680;
            this.txxCoin1.textFlow = [{
                text: "" + this.value.curDiamondNum,
                style: {
                    textColor: t
                }
            },
            {
                text: "/68"
            }],
            this.curItemNum = ItemManager.getNumByID(1710459);
            var e = this.curItemNum >= 3 ? 589568 : 16711680;
            this.txxCoin2.textFlow = [{
                text: "" + this.curItemNum,
                style: {
                    textColor: e
                }
            },
            {
                text: "/3"
            }]
        },
        n.prototype.addEvent = function() {
            var e = this;
            ImageButtonUtil.add(this.btnClose,
            function() {
                e.hide()
            },
            this),
            ImageButtonUtil.add(this.btnHui,
            function() {
                if (e.curItemNum >= 3) if (e.isPetsInBag()) {
                    var n = PetManager.getBagPetsById(e.value.petid),
                    i = 2 * (e.value.info.id - 1) + e.value.id;
                    SocketConnection.sendByQueue(t.ContractCallConst.Call_PANEL2_CMD, [5, i, n[0].catchTime, 0],
                    function() {
                        Alarm.show("升级成功！"),
                        EventManager.dispatchEventWith("contract_openEffct"),
                        e.hide()
                    })
                } else {
                    var r = "请将<font color='#ff0000'>" + PetXMLInfo.getName(e.petids[0]) + "、" + PetXMLInfo.getName(e.petids[1]) + "</font>同时放入出战背包";
                    Alarm.show(r,
                    function() {
                        e.hide(),
                        ModuleManager.showModuleByID(10)
                    })
                } else {
                    var r = "<font color='#ff0000'>精灵王徽章</font>数量不足，是否兑换徽章？";
                    Alert.show(r,
                    function() {
                        e.hide(),
                        EventManager.dispatchEventWith("jumpToPage2")
                    })
                }
            },
            this),
            ImageButtonUtil.add(this.btnZuan,
            function() {
                if (!PayManager.canPay()) return void Alarm.show("暂未开放，敬请期待！");
                if (e.value.curDiamondNum >= 68) if (e.isPetsInBag()) KTool.buyProductByCallback(248430, 1,
                function() {
                    var n = 2 * (e.value.info.id - 1) + e.value.id,
                    i = PetManager.getBagPetsById(e.value.petid);
                    SocketConnection.sendByQueue(t.ContractCallConst.Call_PANEL2_CMD, [6, n, i[0].catchTime, 0],
                    function() {
                        Alarm.show("升级成功！"),
                        EventManager.dispatchEventWith("contract_openEffct"),
                        e.hide()
                    })
                });
                else {
                    var n = "请将<font color='#ff0000'>" + PetXMLInfo.getName(e.petids[0]) + "、" + PetXMLInfo.getName(e.petids[1]) + "</font>同时放入出战背包";
                    Alarm.show(n,
                    function() {
                        e.hide(),
                        ModuleManager.showModuleByID(10)
                    })
                } else {
                    var n = "<font color='#ff0000'>钻石</font>数量不足";
                    Alarm.show(n)
                }
            },
            this)
        },
        n.prototype.isPetsInBag = function() {
            for (var t = this.value.info.partnerMonsterId.split("|"), e = 0, n = t; e < n.length; e++) {
                var i = n[e];
                if (!PetManager.getHasPet(~~i)) return ! 1
            }
            return ! 0
        },
        n.prototype.destroy = function() {
            e.prototype.destroy.call(this),
            ImageButtonUtil.removeAll(this)
        },
        n
    } (PopView);
    t.OpenPop = e,
    __reflect(e.prototype, "contractCall.OpenPop")
} (contractCall || (contractCall = {}));
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
contractCall; !
function(t) {
    var e = function(e) {
        function n() {
            var n = e.call(this) || this;
            return n.skinName = t.ResultPopSkin,
            n
        }
        return __extends(n, e),
        n.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            ImageButtonUtil.add(this.btnClose, this.hide, this)
        },
        n.prototype.destroy = function() {
            e.prototype.destroy.call(this),
            ImageButtonUtil.removeAll(this)
        },
        n
    } (PopView);
    t.ResultPop = e,
    __reflect(e.prototype, "contractCall.ResultPop")
} (contractCall || (contractCall = {}));
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
contractCall; !
function(t) {
    var e = function(e) {
        function n() {
            var n = e.call(this) || this;
            return n.petsId = [2512, 1941, 1940, 2520, 1929, 1928, 2530, 1970, 1969],
            n.skinName = t.SanguoSkin,
            n
        }
        return __extends(n, e),
        n.prototype.initialized = function() {
            this.txt_a.textFlow = [{
                text: "刘、关、张三人组中的任意一人处于背包时，在场精灵每回合结束后恢复",
                style: {
                    textColor: 12900350
                }
            },
            {
                text: "15点\n",
                style: {
                    textColor: 4252667
                }
            },
            {
                text: "点体力，最多可叠加至",
                style: {
                    textColor: 12900350
                }
            },
            {
                text: "45点\n",
                style: {
                    textColor: 4252667
                }
            },
            {
                text: "注：\n昭烈帝刘备、波尔斯、波波互相不可叠加\n武圣关羽、奥托斯、奥托互相不可叠加\n万人敌张飞、埃米斯、艾米互相不可叠加\n",
                style: {
                    textColor: 12900350
                }
            }],
            this.txt_b.textFlow = [{
                text: "昭烈帝刘备/武圣关羽/万人敌张飞",
                style: {
                    textColor: 16765733
                }
            },
            {
                text: "和",
                style: {
                    textColor: 12900350
                }
            },
            {
                text: "卧龙诸葛",
                style: {
                    textColor: 16765733
                }
            },
            {
                text: "同时处于背包时，在场精灵每回合结束后恢复20点体力，最多可叠加至60点\n",
                style: {
                    textColor: 12900350
                }
            },
            {
                text: "（与基础效果互相不可叠加)\n",
                style: {
                    textColor: 12900350,
                    size: 12
                }
            }];
            for (var t = 0; t < this.petsId.length; t++) this["pet" + t].source = ClientConfig.getPetHeadPath(this.petsId[t])
        },
        n.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            ImageButtonUtil.add(this.btnClose, this.hide, this)
        },
        n.prototype.destroy = function() {
            e.prototype.destroy.call(this),
            ImageButtonUtil.removeAll(this)
        },
        n
    } (PopView);
    t.SanGuoPop = e,
    __reflect(e.prototype, "contractCall.SanGuoPop")
} (contractCall || (contractCall = {}));
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
contractCall; !
function(t) {
    var e = function(e) {
        function n() {
            var n = e.call(this) || this;
            return n.skinName = t.DrawItemSkin,
            n.touchChildren = !1,
            n
        }
        return __extends(n, e),
        n.prototype.SetItem = function(t) {
            this.Item = t,
            this.icon.source = ClientConfig.getItemIcon(t.id),
            this.txt_Num.text = t.count + "";
            var e = 0;
            e = 1722827 == t.id ? 3 : t.count >= 19 ? 2 : 1,
            this.iconLevelBg.source = "cc_drawpanel_" + e + "_png"
        },
        n
    } (eui.ItemRenderer);
    t.DrawItem = e,
    __reflect(e.prototype, "contractCall.DrawItem")
} (contractCall || (contractCall = {}));
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
contractCall; !
function(t) {
    var e = function(e) {
        function n() {
            var n = e.call(this) || this;
            return n.skinName = t.FriendPetItemSkin,
            n.cacheAsBitmap = !0,
            n
        }
        return __extends(n, e),
        n.prototype.dataChanged = function() {
            this.head.source = ClientConfig.getPetHeadPath(this.data)
        },
        Object.defineProperty(n.prototype, "selected", {
            set: function(e) {
                e = e && Boolean(this.data),
                this.select.visible = e,
                egret.superSetter(t.Panel1RBItem, this, "selected", e)
            },
            enumerable: !0,
            configurable: !0
        }),
        n
    } (eui.ItemRenderer);
    t.FriendPetItem = e,
    __reflect(e.prototype, "contractCall.FriendPetItem")
} (contractCall || (contractCall = {}));
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
contractCall; !
function(t) {
    var e = function(e) {
        function n() {
            var n = e.call(this) || this;
            return n.skinName = t.Panel1RBItemSkin,
            n
        }
        return __extends(n, e),
        n.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.cacheAsBitmap = !0
        },
        n.prototype.dataChanged = function() {
            this.info = this.data.info,
            this.rbTxt.text = this.info.partnerName,
            this.hasOpen.visible = this.data.hasOpen
        },
        Object.defineProperty(n.prototype, "selected", {
            get: function() {
                return egret.superGetter(n, this, "selected")
            },
            set: function(t) {
                t = t && Boolean(this.data),
                this.currentState = t ? "down": "up",
                egret.superSetter(n, this, "selected", t)
            },
            enumerable: !0,
            configurable: !0
        }),
        n
    } (eui.ItemRenderer);
    t.Panel1RBItem = e,
    __reflect(e.prototype, "contractCall.Panel1RBItem")
} (contractCall || (contractCall = {}));
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
contractCall; !
function(t) {
    var e = function(e) {
        function n() {
            var n = e.call(this) || this;
            return n.skinName = t.Panel1RBItemNewSkin,
            n
        }
        return __extends(n, e),
        n.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this)
        },
        n.prototype.dataChanged = function() {
            this.info = this.data.info,
            this.hasOpen.visible = this.data.hasOpen,
            this.hasOpenGj.visible = this.data.hasOpen,
            this.tx_name.text = this.info.partnerName;
            for (var t = this.info.partnerMonsterId.split("|"), e = 0; 6 > e; e++) e >= this.info.partnerNumber ? this["itemMc_" + (e + 1)].visible = !1 : (this["itemMc_" + (e + 1)].visible = !0, this["head_" + (e + 1)].source = ClientConfig.getPetHeadPath(~~t[e]));
            ImageButtonUtil.add(this.gr_item,
            function() {},
            this)
        },
        Object.defineProperty(n.prototype, "selected", {
            get: function() {
                return egret.superGetter(t.Panel1RBItem, this, "selected")
            },
            set: function(e) {
                e = e && Boolean(this.data),
                this.curShowGroup.visible = e,
                egret.superSetter(t.Panel1RBItem, this, "selected", e)
            },
            enumerable: !0,
            configurable: !0
        }),
        n
    } (eui.ItemRenderer);
    t.Panel1RBNewItem = e,
    __reflect(e.prototype, "contractCall.Panel1RBNewItem")
} (contractCall || (contractCall = {}));
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
contractCall; !
function(t) {
    var e = function(t) {
        function e(e, n) {
            var i = t.call(this) || this;
            return i.skinName = "CcSkillItemSkin",
            i.skillId = e,
            i.tag = n,
            i
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            var t = this;
            this.addEventListener(egret.TouchEvent.TOUCH_TAP,
            function() {
                tipsPop.TipsPop.openSkillPop({
                    id: t.skillId
                })
            },
            this),
            this.txtName.text = SkillXMLInfo.getName(this.skillId),
            this.txtDamage.text = "威力：" + SkillXMLInfo.getDamage(this.skillId);
            var e = SkillXMLInfo.getPP(this.skillId);
            this.txtPP.text = "PP：" + e + "/" + e;
            var n;
            if (4 == SkillXMLInfo.getCategory(this.skillId)) n = ClientConfig.getpettypeticon("prop");
            else {
                var i = SkillXMLInfo.getTypeID(this.skillId);
                n = ClientConfig.getpettypeticon(String(i))
            }
            this.imgProp.source = n,
            this.tag ? (this.imgTag.visible = !0, this.imgTag.source = "common_petSkill_tag" + this.tag + "_png") : this.imgTag.visible = !1
        },
        e
    } (eui.ItemRenderer);
    t.SkillItem = e,
    __reflect(e.prototype, "contractCall.SkillItem")
} (contractCall || (contractCall = {})),
window.contractCall = window.contractCall || {};
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
generateEUI.paths["resource/eui_skins/item/DrawItemSkin.exml"] = window.contractCall.DrawItemSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["iconLevelBg", "icon", "txt_Num", "grpContent"],
        this.height = 73,
        this.width = 73,
        this.elementsContent = [this.grpContent_i()]
    }
    __extends(e, t);
    var n = e.prototype;
    return n.grpContent_i = function() {
        var t = new eui.Group;
        return this.grpContent = t,
        t.cacheAsBitmap = !0,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this.iconLevelBg_i(), this.icon_i(), this.txt_Num_i()],
        t
    },
    n.iconLevelBg_i = function() {
        var t = new eui.Image;
        return this.iconLevelBg = t,
        t.source = "cc_drawpanel_1_png",
        t.x = 0,
        t.y = 0,
        t
    },
    n.icon_i = function() {
        var t = new eui.Image;
        return this.icon = t,
        t.height = 50,
        t.visible = !0,
        t.width = 50,
        t.x = 11,
        t.y = 11,
        t
    },
    n.txt_Num_i = function() {
        var t = new eui.Label;
        return this.txt_Num = t,
        t.fontFamily = "MFShangHei",
        t.size = 14,
        t.stroke = 1,
        t.strokeColor = 1712696,
        t.textAlign = "right",
        t.textColor = 16776958,
        t.width = 17,
        t.x = 49,
        t.y = 53,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/DrawOnepanelSkin.exml"] = window.contractCall.DrawOnepanelSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["reward_1", "reward_2", "grpContainer"],
        this.height = 333,
        this.width = 1136,
        this.elementsContent = [this._Image1_i(), this._Image2_i(), this._Label1_i(), this.grpContainer_i()]
    }
    __extends(e, t);
    var n = e.prototype;
    return n._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "cc_drawpanel_drawonebg_png",
        t.percentWidth = 100,
        t.x = 0,
        t.y = 8,
        t
    },
    n._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "cc_drawpanel_titleone_png",
        t.x = 372,
        t.y = 0,
        t
    },
    n._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "点击任意空白位置关闭弹窗",
        t.textColor = 8631282,
        t.x = 468,
        t.y = 317,
        t
    },
    n.grpContainer_i = function() {
        var t = new eui.Group;
        return this.grpContainer = t,
        t.cacheAsBitmap = !0,
        t.horizontalCenter = -.5,
        t.y = 135,
        t.elementsContent = [this.reward_1_i(), this.reward_2_i()],
        t
    },
    n.reward_1_i = function() {
        var t = new contractCall.DrawItem;
        return this.reward_1 = t,
        t.skinName = "contractCall.DrawItemSkin",
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t
    },
    n.reward_2_i = function() {
        var t = new contractCall.DrawItem;
        return this.reward_2 = t,
        t.skinName = "contractCall.DrawItemSkin",
        t.visible = !0,
        t.x = 154,
        t.y = 0,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/DrawTenPanelSkin.exml"] = window.contractCall.DrawtenSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["reward_1", "reward_2", "reward_3", "reward_4", "reward_5", "reward_6", "reward_7", "reward_8", "reward_9", "reward_10", "bead_1", "bead_2", "bead_3", "bead_4", "bead_5", "bead_6", "bead_7", "bead_8", "bead_9", "bead_10"],
        this.height = 433,
        this.width = 1136,
        this.elementsContent = [this._Image1_i(), this._Image2_i(), this._Group1_i(), this._Group12_i(), this._Label1_i(), this._Label2_i()]
    }
    __extends(e, t);
    var n = e.prototype;
    return n._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 372,
        t.source = "cc_drawpanel_drawonebg_png",
        t.percentWidth = 100,
        t.x = 0,
        t.y = 9,
        t
    },
    n._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "cc_drawten_djds_png",
        t.x = 373,
        t.y = 0,
        t
    },
    n._Group1_i = function() {
        var t = new eui.Group;
        return t.cacheAsBitmap = !0,
        t.height = 168,
        t.width = 534,
        t.x = 313,
        t.y = 104,
        t.layout = this._TileLayout1_i(),
        t.elementsContent = [this.reward_1_i(), this.reward_2_i(), this.reward_3_i(), this.reward_4_i(), this.reward_5_i(), this.reward_6_i(), this.reward_7_i(), this.reward_8_i(), this.reward_9_i(), this.reward_10_i()],
        t
    },
    n._TileLayout1_i = function() {
        var t = new eui.TileLayout;
        return t.horizontalGap = 38,
        t.paddingLeft = 10,
        t.verticalGap = 15,
        t
    },
    n.reward_1_i = function() {
        var t = new contractCall.DrawItem;
        return this.reward_1 = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.skinName = "contractCall.DrawItemSkin",
        t.visible = !0,
        t
    },
    n.reward_2_i = function() {
        var t = new contractCall.DrawItem;
        return this.reward_2 = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.skinName = "contractCall.DrawItemSkin",
        t.visible = !0,
        t
    },
    n.reward_3_i = function() {
        var t = new contractCall.DrawItem;
        return this.reward_3 = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.skinName = "contractCall.DrawItemSkin",
        t.visible = !0,
        t
    },
    n.reward_4_i = function() {
        var t = new contractCall.DrawItem;
        return this.reward_4 = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.skinName = "contractCall.DrawItemSkin",
        t.visible = !0,
        t
    },
    n.reward_5_i = function() {
        var t = new contractCall.DrawItem;
        return this.reward_5 = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.skinName = "contractCall.DrawItemSkin",
        t.visible = !0,
        t
    },
    n.reward_6_i = function() {
        var t = new contractCall.DrawItem;
        return this.reward_6 = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.skinName = "contractCall.DrawItemSkin",
        t.visible = !0,
        t
    },
    n.reward_7_i = function() {
        var t = new contractCall.DrawItem;
        return this.reward_7 = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.skinName = "contractCall.DrawItemSkin",
        t.visible = !0,
        t
    },
    n.reward_8_i = function() {
        var t = new contractCall.DrawItem;
        return this.reward_8 = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.skinName = "contractCall.DrawItemSkin",
        t.visible = !0,
        t
    },
    n.reward_9_i = function() {
        var t = new contractCall.DrawItem;
        return this.reward_9 = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.skinName = "contractCall.DrawItemSkin",
        t.visible = !0,
        t
    },
    n.reward_10_i = function() {
        var t = new contractCall.DrawItem;
        return this.reward_10 = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.skinName = "contractCall.DrawItemSkin",
        t.visible = !0,
        t
    },
    n._Group12_i = function() {
        var t = new eui.Group;
        return t.cacheAsBitmap = !0,
        t.x = 238,
        t.y = 308,
        t.elementsContent = [this._Group2_i(), this._Group3_i(), this._Group4_i(), this._Group5_i(), this._Group6_i(), this._Group7_i(), this._Group8_i(), this._Group9_i(), this._Group10_i(), this._Group11_i()],
        t
    },
    n._Group2_i = function() {
        var t = new eui.Group;
        return t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image3_i(), this.bead_1_i()],
        t
    },
    n._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "cc_drawten_kuang_png",
        t.x = 0,
        t.y = 0,
        t
    },
    n.bead_1_i = function() {
        var t = new eui.Image;
        return this.bead_1 = t,
        t.height = 45,
        t.source = "",
        t.width = 45,
        t.x = 2,
        t.y = 2,
        t
    },
    n._Group3_i = function() {
        var t = new eui.Group;
        return t.x = 71,
        t.y = 0,
        t.elementsContent = [this._Image4_i(), this.bead_2_i()],
        t
    },
    n._Image4_i = function() {
        var t = new eui.Image;
        return t.source = "cc_drawten_kuang_png",
        t.x = 0,
        t.y = 0,
        t
    },
    n.bead_2_i = function() {
        var t = new eui.Image;
        return this.bead_2 = t,
        t.height = 45,
        t.source = "",
        t.width = 45,
        t.x = 2,
        t.y = 2,
        t
    },
    n._Group4_i = function() {
        var t = new eui.Group;
        return t.x = 141,
        t.y = 0,
        t.elementsContent = [this._Image5_i(), this.bead_3_i()],
        t
    },
    n._Image5_i = function() {
        var t = new eui.Image;
        return t.source = "cc_drawten_kuang_png",
        t.x = 0,
        t.y = 0,
        t
    },
    n.bead_3_i = function() {
        var t = new eui.Image;
        return this.bead_3 = t,
        t.height = 45,
        t.source = "",
        t.width = 45,
        t.x = 2,
        t.y = 2,
        t
    },
    n._Group5_i = function() {
        var t = new eui.Group;
        return t.x = 212,
        t.y = 0,
        t.elementsContent = [this._Image6_i(), this.bead_4_i()],
        t
    },
    n._Image6_i = function() {
        var t = new eui.Image;
        return t.source = "cc_drawten_kuang_png",
        t.x = 0,
        t.y = 0,
        t
    },
    n.bead_4_i = function() {
        var t = new eui.Image;
        return this.bead_4 = t,
        t.height = 45,
        t.source = "",
        t.width = 45,
        t.x = 2,
        t.y = 2,
        t
    },
    n._Group6_i = function() {
        var t = new eui.Group;
        return t.x = 282,
        t.y = 0,
        t.elementsContent = [this._Image7_i(), this.bead_5_i()],
        t
    },
    n._Image7_i = function() {
        var t = new eui.Image;
        return t.source = "cc_drawten_kuang_png",
        t.x = 0,
        t.y = 0,
        t
    },
    n.bead_5_i = function() {
        var t = new eui.Image;
        return this.bead_5 = t,
        t.height = 45,
        t.source = "",
        t.width = 45,
        t.x = 2,
        t.y = 2,
        t
    },
    n._Group7_i = function() {
        var t = new eui.Group;
        return t.x = 353,
        t.y = 0,
        t.elementsContent = [this._Image8_i(), this.bead_6_i()],
        t
    },
    n._Image8_i = function() {
        var t = new eui.Image;
        return t.source = "cc_drawten_kuang_png",
        t.x = 0,
        t.y = 0,
        t
    },
    n.bead_6_i = function() {
        var t = new eui.Image;
        return this.bead_6 = t,
        t.height = 45,
        t.source = "",
        t.width = 45,
        t.x = 2,
        t.y = 2,
        t
    },
    n._Group8_i = function() {
        var t = new eui.Group;
        return t.x = 423,
        t.y = 0,
        t.elementsContent = [this._Image9_i(), this.bead_7_i()],
        t
    },
    n._Image9_i = function() {
        var t = new eui.Image;
        return t.source = "cc_drawten_kuang_png",
        t.x = 0,
        t.y = 0,
        t
    },
    n.bead_7_i = function() {
        var t = new eui.Image;
        return this.bead_7 = t,
        t.height = 45,
        t.source = "",
        t.width = 45,
        t.x = 2,
        t.y = 2,
        t
    },
    n._Group9_i = function() {
        var t = new eui.Group;
        return t.x = 494,
        t.y = 0,
        t.elementsContent = [this._Image10_i(), this.bead_8_i()],
        t
    },
    n._Image10_i = function() {
        var t = new eui.Image;
        return t.source = "cc_drawten_kuang_png",
        t.x = 0,
        t.y = 0,
        t
    },
    n.bead_8_i = function() {
        var t = new eui.Image;
        return this.bead_8 = t,
        t.height = 45,
        t.source = "",
        t.width = 45,
        t.x = 2,
        t.y = 2,
        t
    },
    n._Group10_i = function() {
        var t = new eui.Group;
        return t.x = 564,
        t.y = 0,
        t.elementsContent = [this._Image11_i(), this.bead_9_i()],
        t
    },
    n._Image11_i = function() {
        var t = new eui.Image;
        return t.source = "cc_drawten_kuang_png",
        t.x = 0,
        t.y = 0,
        t
    },
    n.bead_9_i = function() {
        var t = new eui.Image;
        return this.bead_9 = t,
        t.height = 45,
        t.source = "",
        t.width = 45,
        t.x = 2,
        t.y = 2,
        t
    },
    n._Group11_i = function() {
        var t = new eui.Group;
        return t.x = 635,
        t.y = 0,
        t.elementsContent = [this._Image12_i(), this.bead_10_i()],
        t
    },
    n._Image12_i = function() {
        var t = new eui.Image;
        return t.source = "cc_drawten_kuang_png",
        t.x = 0,
        t.y = 0,
        t
    },
    n.bead_10_i = function() {
        var t = new eui.Image;
        return this.bead_10 = t,
        t.height = 45,
        t.source = "",
        t.width = 45,
        t.x = 2,
        t.y = 2,
        t
    },
    n._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "点击任意空白位置关闭弹窗",
        t.textColor = 8631282,
        t.x = 468,
        t.y = 417,
        t
    },
    n._Label2_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "附赠能量珠：",
        t.textColor = 8631282,
        t.x = 199,
        t.y = 282,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/FriendPanelSkin.exml"] = window.contractCall.FriendPanelSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "title", "btnClose", "popbg", "petshow", "petName", "petkuang", "txt_groupName", "txt_afterTe", "_af", "txt_beforeTe", "_be", "groupEffect", "groupSkill", "btnEffect", "btnSkill", "_list", "_scorl", "txt_price", "buyicon", "btnBuy_Item", "btnBuy_Zuan"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this._Group5_i(), this._Group6_i()]
    }
    __extends(e, t);
    var n = function(t) {
        function e() {
            t.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i(), this._Label1_i()],
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "cc_btnrbdown_png"), new eui.SetProperty("_Label1", "textColor", 16777215)]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var n = e.prototype;
        return n._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t.percentHeight = 100,
            t.source = "cc_btnrbup_png",
            t.percentWidth = 100,
            t
        },
        n._Label1_i = function() {
            var t = new eui.Label;
            return this._Label1 = t,
            t.fontFamily = "MFShangHei",
            t.horizontalCenter = 0,
            t.size = 18,
            t.text = "专属特性",
            t.textColor = 7242936,
            t.verticalCenter = 0,
            t
        },
        e
    } (eui.Skin),
    i = function(t) {
        function e() {
            t.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i(), this._Label1_i()],
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "cc_btnrbdown_png"), new eui.SetProperty("_Label1", "textColor", 16777215)]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var n = e.prototype;
        return n._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t.percentHeight = 100,
            t.source = "cc_btnrbup_png",
            t.percentWidth = 100,
            t
        },
        n._Label1_i = function() {
            var t = new eui.Label;
            return this._Label1 = t,
            t.fontFamily = "MFShangHei",
            t.horizontalCenter = 0,
            t.size = 18,
            t.text = "追加技能",
            t.textColor = 7242936,
            t.verticalCenter = 0,
            t
        },
        e
    } (eui.Skin),
    r = e.prototype;
    return r.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.percentHeight = 100,
        t.scale9Grid = new egret.Rectangle(4, 4, 4, 4),
        t.source = "cc_friend_panel_zu_6_png",
        t.visible = !0,
        t.percentWidth = 100,
        t.x = 0,
        t.y = 0,
        t
    },
    r._Group5_i = function() {
        var t = new eui.Group;
        return t.horizontalCenter = 0,
        t.y = 101,
        t.elementsContent = [this._Group2_i(), this.groupEffect_i(), this.groupSkill_i(), this.btnEffect_i(), this.btnSkill_i(), this._scorl_i()],
        t
    },
    r._Group2_i = function() {
        var t = new eui.Group;
        return t.cacheAsBitmap = !0,
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this.popbg_i(), this._Image3_i(), this.petkuang_i(), this.txt_groupName_i()],
        t
    },
    r.popbg_i = function() {
        var t = new eui.Group;
        return this.popbg = t,
        t.cacheAsBitmap = !0,
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image1_i(), this._Image2_i(), this.title_i(), this.btnClose_i()],
        t
    },
    r._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 430,
        t.source = "common_s9_pop_bg4_png",
        t.visible = !0,
        t.width = 753,
        t.x = 0,
        t.y = 1,
        t
    },
    r._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "common_pop_up_bg_big_png",
        t.visible = !0,
        t.x = 0,
        t.y = 2,
        t
    },
    r.title_i = function() {
        var t = new eui.Image;
        return this.title = t,
        t.source = "cc_friend_panel_yhgg_png",
        t.x = 31,
        t.y = 3,
        t
    },
    r.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.height = 33,
        t.source = "common_pop_btn_close_png",
        t.width = 33,
        t.x = 712,
        t.y = 4,
        t
    },
    r._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "cc_friend_panel_left_png",
        t.x = 601,
        t.y = 37,
        t
    },
    r.petkuang_i = function() {
        var t = new eui.Group;
        return this.petkuang = t,
        t.cacheAsBitmap = !0,
        t.x = 17,
        t.y = 75,
        t.elementsContent = [this._Group1_i(), this._Image5_i(), this.petName_i()],
        t
    },
    r._Group1_i = function() {
        var t = new eui.Group;
        return t.x = 0,
        t.y = 0,
        t.elementsContent = [this.petshow_i(), this._Image4_i()],
        t
    },
    r.petshow_i = function() {
        var t = new eui.Image;
        return this.petshow = t,
        t.height = 293,
        t.visible = !0,
        t.width = 176,
        t.x = 3,
        t.y = 3,
        t
    },
    r._Image4_i = function() {
        var t = new eui.Image;
        return t.height = 300,
        t.scale9Grid = new egret.Rectangle(7, 7, 6, 6),
        t.source = "cc_friend_panel_waikuang_xians9_png",
        t.visible = !0,
        t.width = 182,
        t.x = 0,
        t.y = 0,
        t
    },
    r._Image5_i = function() {
        var t = new eui.Image;
        return t.height = 32,
        t.scale9Grid = new egret.Rectangle(4, 4, 4, 4),
        t.source = "cc_friend_panel_juxing_897_png",
        t.width = 176,
        t.x = 3,
        t.y = 295,
        t
    },
    r.petName_i = function() {
        var t = new eui.Label;
        return this.petName = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "战武天尊战武天尊战",
        t.textAlign = "center",
        t.textColor = 9025023,
        t.width = 162,
        t.x = 8,
        t.y = 305,
        t
    },
    r.txt_groupName_i = function() {
        var t = new eui.Label;
        return this.txt_groupName = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "效果名称效果",
        t.textAlign = "center",
        t.textColor = 4187130,
        t.width = 108,
        t.x = 619,
        t.y = 55,
        t
    },
    r.groupEffect_i = function() {
        var t = new eui.Group;
        return this.groupEffect = t,
        t.visible = !0,
        t.x = 222,
        t.y = 112,
        t.elementsContent = [this._Image6_i(), this._Image7_i(), this._af_i(), this._be_i(), this._Image8_i()],
        t
    },
    r._Image6_i = function() {
        var t = new eui.Image;
        return t.height = 120,
        t.scale9Grid = new egret.Rectangle(4, 4, 4, 4),
        t.source = "cc_friend_panel_juxing_316_png",
        t.visible = !0,
        t.width = 353,
        t.x = 0,
        t.y = 0,
        t
    },
    r._Image7_i = function() {
        var t = new eui.Image;
        return t.height = 120,
        t.scale9Grid = new egret.Rectangle(4, 4, 4, 4),
        t.source = "cc_friend_panel_juxing_316_png",
        t.visible = !0,
        t.width = 353,
        t.x = 0,
        t.y = 162,
        t
    },
    r._af_i = function() {
        var t = new eui.Scroller;
        return this._af = t,
        t.height = 100,
        t.visible = !0,
        t.width = 330,
        t.x = 10,
        t.y = 172,
        t.viewport = this._Group3_i(),
        t
    },
    r._Group3_i = function() {
        var t = new eui.Group;
        return t.elementsContent = [this.txt_afterTe_i()],
        t
    },
    r.txt_afterTe_i = function() {
        var t = new eui.Label;
        return this.txt_afterTe = t,
        t.fontFamily = "MFShangHei",
        t.scaleX = 1,
        t.scaleY = 1,
        t.size = 16,
        t.text = "精灵魂印Q强化后效果BALABALA精灵魂印Q强化后效果BALABALA精灵魂印Q强化后效果BALABALA精灵魂印Q强化后效果BALABALA精灵魂印Q强化后效果BALABALA精灵魂印Q强化后效果BALABALA精灵魂印Q强化后效果BALABALA精灵魂印Q强化后效果BALABALA精灵魂印Q强化后效果BALABALA精灵魂印Q强化后效果BALABALA",
        t.textAlign = "left",
        t.textColor = 4187130,
        t.verticalAlign = "middle",
        t.width = 330,
        t
    },
    r._be_i = function() {
        var t = new eui.Scroller;
        return this._be = t,
        t.height = 100,
        t.visible = !0,
        t.width = 330,
        t.x = 10,
        t.y = 10,
        t.viewport = this._Group4_i(),
        t
    },
    r._Group4_i = function() {
        var t = new eui.Group;
        return t.elementsContent = [this.txt_beforeTe_i()],
        t
    },
    r.txt_beforeTe_i = function() {
        var t = new eui.Label;
        return this.txt_beforeTe = t,
        t.fontFamily = "MFShangHei",
        t.scaleX = 1,
        t.scaleY = 1,
        t.size = 16,
        t.text = "精灵魂印Q强化后效果BALABALA精灵魂印Q强化后效果BALABALA精灵魂印Q强化后效果BALABALA精灵魂印Q强化后效果BALABALA精灵魂印Q强化后效果BALABALA精灵魂印Q强化后效果BALABALA精灵魂印Q强化后效果BALABALA精灵魂印Q强化后效果BALABALA精灵魂印Q强化后效果BALABALA精灵魂印Q强化后效果BALABALA",
        t.textAlign = "left",
        t.textColor = 12834813,
        t.verticalAlign = "middle",
        t.width = 330,
        t
    },
    r._Image8_i = function() {
        var t = new eui.Image;
        return t.scaleX = 1,
        t.scaleY = 1,
        t.source = "cc_friend_panel_btndown_1_png",
        t.x = 133,
        t.y = 124,
        t
    },
    r.groupSkill_i = function() {
        var t = new eui.Group;
        return this.groupSkill = t,
        t.cacheAsBitmap = !0,
        t.visible = !0,
        t.x = 222,
        t.y = 112,
        t.layout = this._VerticalLayout1_i(),
        t
    },
    r._VerticalLayout1_i = function() {
        var t = new eui.VerticalLayout;
        return t.gap = 0,
        t
    },
    r.btnEffect_i = function() {
        var t = new eui.RadioButton;
        return this.btnEffect = t,
        t.groupName = "cc_rbg",
        t.height = 33,
        t.label = "1",
        t.selected = !0,
        t.width = 101,
        t.x = 223,
        t.y = 68,
        t.skinName = n,
        t
    },
    r.btnSkill_i = function() {
        var t = new eui.RadioButton;
        return this.btnSkill = t,
        t.groupName = "cc_rbg",
        t.height = 33,
        t.label = "2",
        t.width = 101,
        t.x = 324,
        t.y = 68,
        t.skinName = i,
        t
    },
    r._scorl_i = function() {
        var t = new eui.Scroller;
        return this._scorl = t,
        t.height = 340,
        t.width = 93,
        t.x = 627,
        t.y = 78,
        t.viewport = this._list_i(),
        t
    },
    r._list_i = function() {
        var t = new eui.List;
        return this._list = t,
        t.height = 200,
        t.width = 200,
        t.x = 33,
        t.y = 127,
        t.layout = this._VerticalLayout2_i(),
        t
    },
    r._VerticalLayout2_i = function() {
        var t = new eui.VerticalLayout;
        return t.gap = -10,
        t
    },
    r._Group6_i = function() {
        var t = new eui.Group;
        return t.cacheAsBitmap = !0,
        t.height = 72,
        t.horizontalCenter = 349.5,
        t.width = 377,
        t.y = 545,
        t.elementsContent = [this.btnBuy_Item_i(), this.btnBuy_Zuan_i()],
        t
    },
    r.btnBuy_Item_i = function() {
        var t = new eui.Group;
        return this.btnBuy_Item = t,
        t.x = 205,
        t.y = 0,
        t.elementsContent = [this._Image9_i(), this.txt_price_i(), this.buyicon_i()],
        t
    },
    r._Image9_i = function() {
        var t = new eui.Image;
        return t.height = 71,
        t.source = "cc_panel2_zu_1_png",
        t.visible = !0,
        t.width = 175,
        t.x = 0,
        t.y = 0,
        t
    },
    r.txt_price_i = function() {
        var t = new eui.Label;
        return this.txt_price = t,
        t.fontFamily = "MFShangHei",
        t.size = 20,
        t.text = "99/99",
        t.textColor = 16767647,
        t.visible = !0,
        t.x = 90,
        t.y = 43,
        t
    },
    r.buyicon_i = function() {
        var t = new eui.Image;
        return this.buyicon = t,
        t.height = 24,
        t.visible = !0,
        t.width = 27,
        t.x = 62,
        t.y = 41,
        t
    },
    r.btnBuy_Zuan_i = function() {
        var t = new eui.Image;
        return this.btnBuy_Zuan = t,
        t.source = "cc_friend_panel_btnbg_0_kb_4_png",
        t.visible = !1,
        t.x = 0,
        t.y = 0,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/item/CcSkillItemSkin.exml"] = window.CcSkillItemSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["imgProp", "txtName", "txtDamage", "txtPP", "imgTag"],
        this.height = 75,
        this.width = 313,
        this.elementsContent = [this._Image1_i(), this.imgProp_i(), this.txtName_i(), this.txtDamage_i(), this.txtPP_i(), this.imgTag_i()]
    }
    __extends(e, t);
    var n = e.prototype;
    return n._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "cc_skill_item_imgbg_png",
        t.x = 4,
        t.y = 5,
        t
    },
    n.imgProp_i = function() {
        var t = new eui.Image;
        return this.imgProp = t,
        t.height = 35,
        t.width = 35,
        t.x = 27,
        t.y = 22,
        t
    },
    n.txtName_i = function() {
        var t = new eui.Label;
        return this.txtName = t,
        t.fontFamily = "REEJI",
        t.horizontalCenter = 17.5,
        t.size = 18,
        t.text = "技能名称七个字",
        t.textColor = 16777215,
        t.y = 14,
        t
    },
    n.txtDamage_i = function() {
        var t = new eui.Label;
        return this.txtDamage = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "威力：200",
        t.textColor = 11133439,
        t.x = 83,
        t.y = 45,
        t
    },
    n.txtPP_i = function() {
        var t = new eui.Label;
        return this.txtPP = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "PP：20/20",
        t.textColor = 11133439,
        t.x = 185,
        t.y = 45,
        t
    },
    n.imgTag_i = function() {
        var t = new eui.Image;
        return this.imgTag = t,
        t.right = 4,
        t.y = 5,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/item/FriendPetItemSkin.exml"] = window.contractCall.FriendPetItemSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["head", "select"],
        this.height = 93,
        this.width = 93,
        this.elementsContent = [this._Group1_i()]
    }
    __extends(e, t);
    var n = e.prototype;
    return n._Group1_i = function() {
        var t = new eui.Group;
        return t.cacheAsBitmap = !0,
        t.elementsContent = [this._Image1_i(), this.head_i(), this.select_i()],
        t
    },
    n._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "cc_friend_panel_la_png",
        t.visible = !0,
        t.x = 11,
        t.y = 11,
        t
    },
    n.head_i = function() {
        var t = new eui.Image;
        return this.head = t,
        t.height = 65,
        t.width = 65,
        t.x = 15,
        t.y = 15,
        t
    },
    n.select_i = function() {
        var t = new eui.Image;
        return this.select = t,
        t.source = "cc_friend_panel_selected_png",
        t.x = 0,
        t.y = 0,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/item/Panel1RBItemNewSkin.exml"] = window.contractCall.Panel1RBItemNewSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["curShowGroup", "imge_item_big_bg", "hasOpenGj", "hasOpen", "tx_name", "head_1", "itemMc_1", "head_2", "itemMc_2", "head_3", "itemMc_3", "head_4", "itemMc_4", "head_5", "itemMc_5", "head_6", "itemMc_6", "gr_item"],
        this.height = 105,
        this.width = 427,
        this.elementsContent = [this.gr_item_i()],
        this.states = [new eui.State("up", []), new eui.State("down", [])]
    }
    __extends(e, t);
    var n = e.prototype;
    return n.gr_item_i = function() {
        var t = new eui.Group;
        return this.gr_item = t,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this.curShowGroup_i(), this.imge_item_big_bg_i(), this.hasOpenGj_i(), this.hasOpen_i(), this.tx_name_i(), this.itemMc_1_i(), this.itemMc_2_i(), this.itemMc_3_i(), this.itemMc_4_i(), this.itemMc_5_i(), this.itemMc_6_i()],
        t
    },
    n.curShowGroup_i = function() {
        var t = new eui.Image;
        return this.curShowGroup = t,
        t.height = 130,
        t.source = "ccccc_grouphave_gr_item_png",
        t.visible = !0,
        t.width = 456,
        t.x = -14,
        t.y = -13,
        t
    },
    n.imge_item_big_bg_i = function() {
        var t = new eui.Image;
        return this.imge_item_big_bg = t,
        t.source = "cc_panel1_imge_item_big_bg_png",
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t
    },
    n.hasOpenGj_i = function() {
        var t = new eui.Image;
        return this.hasOpenGj = t,
        t.source = "cc_panel1_imge_xuanzhong_png",
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t
    },
    n.hasOpen_i = function() {
        var t = new eui.Image;
        return this.hasOpen = t,
        t.source = "cc_panel1_openImg_png",
        t.visible = !0,
        t.x = 347,
        t.y = 2,
        t
    },
    n.tx_name_i = function() {
        var t = new eui.Label;
        return this.tx_name = t,
        t.fontFamily = "MFShangHei",
        t.size = 20,
        t.text = "四字组名",
        t.textColor = 16777215,
        t.x = 6,
        t.y = 3,
        t
    },
    n.itemMc_1_i = function() {
        var t = new eui.Group;
        return this.itemMc_1 = t,
        t.height = 64,
        t.width = 64,
        t.x = 11,
        t.y = 33,
        t.elementsContent = [this._Image1_i(), this.head_1_i()],
        t
    },
    n._Image1_i = function() {
        var t = new eui.Image;
        return t.scaleX = 1,
        t.scaleY = 1,
        t.source = "cc_panel1_imge_small_item_bg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    n.head_1_i = function() {
        var t = new eui.Image;
        return this.head_1 = t,
        t.height = 64,
        t.scaleX = .9,
        t.scaleY = .9,
        t.width = 64,
        t.x = 3,
        t.y = 3,
        t
    },
    n.itemMc_2_i = function() {
        var t = new eui.Group;
        return this.itemMc_2 = t,
        t.height = 64,
        t.width = 64,
        t.x = 77,
        t.y = 33,
        t.elementsContent = [this._Image2_i(), this.head_2_i()],
        t
    },
    n._Image2_i = function() {
        var t = new eui.Image;
        return t.scaleX = 1,
        t.scaleY = 1,
        t.source = "cc_panel1_imge_small_item_bg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    n.head_2_i = function() {
        var t = new eui.Image;
        return this.head_2 = t,
        t.height = 64,
        t.scaleX = .9,
        t.scaleY = .9,
        t.width = 64,
        t.x = 3,
        t.y = 3,
        t
    },
    n.itemMc_3_i = function() {
        var t = new eui.Group;
        return this.itemMc_3 = t,
        t.height = 64,
        t.width = 64,
        t.x = 147,
        t.y = 33,
        t.elementsContent = [this._Image3_i(), this.head_3_i()],
        t
    },
    n._Image3_i = function() {
        var t = new eui.Image;
        return t.scaleX = 1,
        t.scaleY = 1,
        t.source = "cc_panel1_imge_small_item_bg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    n.head_3_i = function() {
        var t = new eui.Image;
        return this.head_3 = t,
        t.height = 64,
        t.scaleX = .9,
        t.scaleY = .9,
        t.width = 64,
        t.x = 3,
        t.y = 3,
        t
    },
    n.itemMc_4_i = function() {
        var t = new eui.Group;
        return this.itemMc_4 = t,
        t.height = 64,
        t.width = 64,
        t.x = 215,
        t.y = 33,
        t.elementsContent = [this._Image4_i(), this.head_4_i()],
        t
    },
    n._Image4_i = function() {
        var t = new eui.Image;
        return t.scaleX = 1,
        t.scaleY = 1,
        t.source = "cc_panel1_imge_small_item_bg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    n.head_4_i = function() {
        var t = new eui.Image;
        return this.head_4 = t,
        t.height = 64,
        t.scaleX = .9,
        t.scaleY = .9,
        t.width = 64,
        t.x = 3,
        t.y = 3,
        t
    },
    n.itemMc_5_i = function() {
        var t = new eui.Group;
        return this.itemMc_5 = t,
        t.height = 64,
        t.width = 64,
        t.x = 283,
        t.y = 33,
        t.elementsContent = [this._Image5_i(), this.head_5_i()],
        t
    },
    n._Image5_i = function() {
        var t = new eui.Image;
        return t.scaleX = 1,
        t.scaleY = 1,
        t.source = "cc_panel1_imge_small_item_bg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    n.head_5_i = function() {
        var t = new eui.Image;
        return this.head_5 = t,
        t.height = 64,
        t.scaleX = .9,
        t.scaleY = .9,
        t.width = 64,
        t.x = 3,
        t.y = 3,
        t
    },
    n.itemMc_6_i = function() {
        var t = new eui.Group;
        return this.itemMc_6 = t,
        t.height = 64,
        t.width = 64,
        t.x = 351,
        t.y = 33,
        t.elementsContent = [this._Image6_i(), this.head_6_i()],
        t
    },
    n._Image6_i = function() {
        var t = new eui.Image;
        return t.scaleX = 1,
        t.scaleY = 1,
        t.source = "cc_panel1_imge_small_item_bg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    n.head_6_i = function() {
        var t = new eui.Image;
        return this.head_6 = t,
        t.height = 64,
        t.scaleX = .9,
        t.scaleY = .9,
        t.width = 64,
        t.x = 3,
        t.y = 3,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/item/Panel1RBItemSkin.exml"] = window.contractCall.Panel1RBItemSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["hasOpen", "rbTxt"],
        this.height = 74,
        this.width = 180,
        this.elementsContent = [this._Image1_i(), this.hasOpen_i(), this._Image2_i(), this.rbTxt_i()],
        this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", ""), new eui.SetProperty("rbTxt", "textColor", 8631282)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "cc_panel1_panel1_change_png"), new eui.SetProperty("rbTxt", "textColor", 16777215)])]
    }
    __extends(e, t);
    var n = e.prototype;
    return n._Image1_i = function() {
        var t = new eui.Image;
        return this._Image1 = t,
        t.source = "cc_panel1_panel1_change_png",
        t
    },
    n.hasOpen_i = function() {
        var t = new eui.Image;
        return this.hasOpen = t,
        t.source = "cc_panel1_yikaiqi_png",
        t.x = 135,
        t.y = 5,
        t
    },
    n._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "cc_panel1_panel1_juxingline_png",
        t.x = 20,
        t.y = 70,
        t
    },
    n.rbTxt_i = function() {
        var t = new eui.Label;
        return this.rbTxt = t,
        t.fontFamily = "MFShangHei",
        t.height = 71,
        t.size = 20,
        t.text = "当前选中",
        t.textAlign = "center",
        t.verticalAlign = "middle",
        t.width = 185,
        t.x = 0,
        t.y = 0,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/Panel1Skin.exml"] = window.contractCall.Panel1Skin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "txtCoin1", "icon_gold", "btnAdd1", "txtCoin2", "icon2", "btnExchage", "topRight", "petshow_6_1", "txt_petName_6_1", "btninfo_6_1", "grp_petinfo6_1", "petshow_6_2", "txt_petName_6_2", "btninfo_6_2", "grp_petinfo6_2", "petshow_6_3", "txt_petName_6_3", "btninfo_6_3", "grp_petinfo6_3", "petshow_6_4", "txt_petName_6_4", "btninfo_6_4", "grp_petinfo6_4", "petshow_6_5", "txt_petName_6_5", "btninfo_6_5", "grp_petinfo6_5", "petshow_6_6", "txt_petName_6_6", "btninfo_6_6", "grp_petinfo6_6", "grp_pet6", "petshow_4_1", "btninfo_4_1", "txt_petName_4_1", "grp_petinfo4_1", "petshow_4_2", "btninfo_4_2", "txt_petName_4_2", "grp_petinfo4_2", "petshow_4_3", "btninfo_4_3", "txt_petName_4_3", "grp_petinfo4_3", "petshow_4_4", "btninfo_4_4", "txt_petName_4_4", "grp_petinfo4_4", "grp_pet4", "petshow_3_1", "txt_petName_3_1", "btninfo_3_1", "grp_petinfo3_1", "petshow_3_2", "txt_petName_3_2", "btninfo_3_2", "grp_petinfo3_2", "petshow_3_3", "txt_petName_3_3", "btninfo_3_3", "grp_petinfo3_3", "grp_pet3", "petshow_2_1", "txt_petName_2_1", "btninfo_2_1", "grp_petinfo2_1", "petshow_2_2", "txt_petName_2_2", "btninfo_2_2", "grp_petinfo2_2", "grp_pet2", "grp_allPets", "gr_pet", "imge_tx_xxx", "zhaohuanBtn", "tx_item_num", "openBtn", "okayBtn", "imge_line", "imge_title_bg", "tx_title_name", "imge_flag", "imge_tankuang_bg", "_list", "_scorl", "gr_tankuang", "zhankaiBtn_down", "zhankaiBtn_up"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this.topRight_i(), this._Group4_i()]
    }
    __extends(e, t);
    var n = e.prototype;
    return n.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.height = 640,
        t.source = "cc_panel1_bg_jpg",
        t.percentWidth = 100,
        t.x = 0,
        t.y = 0,
        t
    },
    n.topRight_i = function() {
        var t = new eui.Group;
        return this.topRight = t,
        t.cacheAsBitmap = !0,
        t.right = 32,
        t.visible = !0,
        t.width = 411,
        t.y = 8,
        t.elementsContent = [this._Group1_i(), this._Group2_i()],
        t
    },
    n._Group1_i = function() {
        var t = new eui.Group;
        return t.x = 264,
        t.y = 2,
        t.elementsContent = [this._Image1_i(), this.txtCoin1_i(), this.icon_gold_i(), this.btnAdd1_i()],
        t
    },
    n._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "cc_panel1_img_di2_png",
        t.x = 10,
        t.y = 5,
        t
    },
    n.txtCoin1_i = function() {
        var t = new eui.Label;
        return this.txtCoin1 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18.0101510119682,
        t.text = "99999",
        t.textAlign = "left",
        t.textColor = 12834813,
        t.x = 50,
        t.y = 6,
        t
    },
    n.icon_gold_i = function() {
        var t = new eui.Image;
        return this.icon_gold = t,
        t.height = 30,
        t.width = 30,
        t.x = 0,
        t.y = 0,
        t
    },
    n.btnAdd1_i = function() {
        var t = new eui.Image;
        return this.btnAdd1 = t,
        t.source = "cc_panel1_btnadd_png",
        t.x = 126,
        t.y = 5,
        t
    },
    n._Group2_i = function() {
        var t = new eui.Group;
        return t.height = 34,
        t.right = 180,
        t.width = 236,
        t.y = 0,
        t.elementsContent = [this._Image2_i(), this.txtCoin2_i(), this.icon2_i(), this.btnExchage_i()],
        t
    },
    n._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "cc_panel1_img_di2_png",
        t.x = 15,
        t.y = 7,
        t
    },
    n.txtCoin2_i = function() {
        var t = new eui.Label;
        return this.txtCoin2 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18.0101510119682,
        t.text = "99999",
        t.textAlign = "left",
        t.textColor = 12834813,
        t.x = 60,
        t.y = 8,
        t
    },
    n.icon2_i = function() {
        var t = new eui.Image;
        return this.icon2 = t,
        t.height = 30,
        t.width = 30,
        t.x = 1,
        t.y = 2,
        t
    },
    n.btnExchage_i = function() {
        var t = new eui.Image;
        return this.btnExchage = t,
        t.source = "cc_panel1_btnexchage_png",
        t.x = 150,
        t.y = 0,
        t
    },
    n._Group4_i = function() {
        var t = new eui.Group;
        return t.height = 200,
        t.horizontalCenter = -273,
        t.width = 200,
        t.y = 41.995,
        t.elementsContent = [this.gr_pet_i(), this.imge_tx_xxx_i(), this.zhaohuanBtn_i(), this.openBtn_i(), this.okayBtn_i(), this.imge_line_i(), this.imge_title_bg_i(), this.tx_title_name_i(), this.imge_flag_i(), this.gr_tankuang_i(), this.zhankaiBtn_down_i(), this.zhankaiBtn_up_i()],
        t
    },
    n.gr_pet_i = function() {
        var t = new eui.Group;
        return this.gr_pet = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.visible = !0,
        t.x = 17.608000000000004,
        t.y = 76.005,
        t.elementsContent = [this.grp_allPets_i()],
        t
    },
    n.grp_allPets_i = function() {
        var t = new eui.Group;
        return this.grp_allPets = t,
        t.x = 10,
        t.y = 33,
        t.elementsContent = [this.grp_pet6_i(), this.grp_pet4_i(), this.grp_pet3_i(), this.grp_pet2_i()],
        t
    },
    n.grp_pet6_i = function() {
        var t = new eui.Group;
        return this.grp_pet6 = t,
        t.visible = !1,
        t.x = 58,
        t.y = 0,
        t.elementsContent = [this.grp_petinfo6_1_i(), this.grp_petinfo6_2_i(), this.grp_petinfo6_3_i(), this.grp_petinfo6_4_i(), this.grp_petinfo6_5_i(), this.grp_petinfo6_6_i()],
        t
    },
    n.grp_petinfo6_1_i = function() {
        var t = new eui.Group;
        return this.grp_petinfo6_1 = t,
        t.cacheAsBitmap = !0,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this.petshow_6_1_i(), this.txt_petName_6_1_i(), this.btninfo_6_1_i()],
        t
    },
    n.petshow_6_1_i = function() {
        var t = new eui.Image;
        return this.petshow_6_1 = t,
        t.source = "",
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t
    },
    n.txt_petName_6_1_i = function() {
        var t = new eui.Label;
        return this.txt_petName_6_1 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "精灵名字最多九个字",
        t.textAlign = "center",
        t.textColor = 12834813,
        t.width = 144,
        t.x = 212,
        t.y = 70,
        t
    },
    n.btninfo_6_1_i = function() {
        var t = new eui.Image;
        return this.btninfo_6_1 = t,
        t.source = "cc_panel1_petinfobtn_2_png",
        t.x = 3,
        t.y = 3,
        t
    },
    n.grp_petinfo6_2_i = function() {
        var t = new eui.Group;
        return this.grp_petinfo6_2 = t,
        t.cacheAsBitmap = !0,
        t.x = 377,
        t.y = 0,
        t.elementsContent = [this.petshow_6_2_i(), this.txt_petName_6_2_i(), this.btninfo_6_2_i()],
        t
    },
    n.petshow_6_2_i = function() {
        var t = new eui.Image;
        return this.petshow_6_2 = t,
        t.source = "",
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t
    },
    n.txt_petName_6_2_i = function() {
        var t = new eui.Label;
        return this.txt_petName_6_2 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "精灵名字最多九个字",
        t.textAlign = "center",
        t.textColor = 12834813,
        t.width = 144,
        t.x = 212,
        t.y = 70,
        t
    },
    n.btninfo_6_2_i = function() {
        var t = new eui.Image;
        return this.btninfo_6_2 = t,
        t.source = "cc_panel1_petinfobtn_2_png",
        t.x = 3,
        t.y = 3,
        t
    },
    n.grp_petinfo6_3_i = function() {
        var t = new eui.Group;
        return this.grp_petinfo6_3 = t,
        t.cacheAsBitmap = !0,
        t.x = 0,
        t.y = 103,
        t.elementsContent = [this.petshow_6_3_i(), this.txt_petName_6_3_i(), this.btninfo_6_3_i()],
        t
    },
    n.petshow_6_3_i = function() {
        var t = new eui.Image;
        return this.petshow_6_3 = t,
        t.source = "",
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t
    },
    n.txt_petName_6_3_i = function() {
        var t = new eui.Label;
        return this.txt_petName_6_3 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "精灵名字最多九个字",
        t.textAlign = "center",
        t.textColor = 12834813,
        t.width = 144,
        t.x = 212,
        t.y = 70,
        t
    },
    n.btninfo_6_3_i = function() {
        var t = new eui.Image;
        return this.btninfo_6_3 = t,
        t.source = "cc_panel1_petinfobtn_2_png",
        t.x = 3,
        t.y = 3,
        t
    },
    n.grp_petinfo6_4_i = function() {
        var t = new eui.Group;
        return this.grp_petinfo6_4 = t,
        t.cacheAsBitmap = !0,
        t.x = 377,
        t.y = 103,
        t.elementsContent = [this.petshow_6_4_i(), this.txt_petName_6_4_i(), this.btninfo_6_4_i()],
        t
    },
    n.petshow_6_4_i = function() {
        var t = new eui.Image;
        return this.petshow_6_4 = t,
        t.source = "",
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t
    },
    n.txt_petName_6_4_i = function() {
        var t = new eui.Label;
        return this.txt_petName_6_4 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "精灵名字最多九个字",
        t.textAlign = "center",
        t.textColor = 12834813,
        t.width = 144,
        t.x = 212,
        t.y = 70,
        t
    },
    n.btninfo_6_4_i = function() {
        var t = new eui.Image;
        return this.btninfo_6_4 = t,
        t.source = "cc_panel1_petinfobtn_2_png",
        t.x = 3,
        t.y = 3,
        t
    },
    n.grp_petinfo6_5_i = function() {
        var t = new eui.Group;
        return this.grp_petinfo6_5 = t,
        t.cacheAsBitmap = !0,
        t.x = 0,
        t.y = 205,
        t.elementsContent = [this.petshow_6_5_i(), this.txt_petName_6_5_i(), this.btninfo_6_5_i()],
        t
    },
    n.petshow_6_5_i = function() {
        var t = new eui.Image;
        return this.petshow_6_5 = t,
        t.source = "",
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t
    },
    n.txt_petName_6_5_i = function() {
        var t = new eui.Label;
        return this.txt_petName_6_5 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "精灵名字最多九个字",
        t.textAlign = "center",
        t.textColor = 12834813,
        t.width = 144,
        t.x = 212,
        t.y = 70,
        t
    },
    n.btninfo_6_5_i = function() {
        var t = new eui.Image;
        return this.btninfo_6_5 = t,
        t.source = "cc_panel1_petinfobtn_2_png",
        t.x = 3,
        t.y = 3,
        t
    },
    n.grp_petinfo6_6_i = function() {
        var t = new eui.Group;
        return this.grp_petinfo6_6 = t,
        t.cacheAsBitmap = !0,
        t.x = 377,
        t.y = 205,
        t.elementsContent = [this.petshow_6_6_i(), this.txt_petName_6_6_i(), this.btninfo_6_6_i()],
        t
    },
    n.petshow_6_6_i = function() {
        var t = new eui.Image;
        return this.petshow_6_6 = t,
        t.source = "",
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t
    },
    n.txt_petName_6_6_i = function() {
        var t = new eui.Label;
        return this.txt_petName_6_6 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "精灵名字最多九个字",
        t.textAlign = "center",
        t.textColor = 12834813,
        t.width = 144,
        t.x = 212,
        t.y = 70,
        t
    },
    n.btninfo_6_6_i = function() {
        var t = new eui.Image;
        return this.btninfo_6_6 = t,
        t.source = "cc_panel1_petinfobtn_2_png",
        t.x = 3,
        t.y = 3,
        t
    },
    n.grp_pet4_i = function() {
        var t = new eui.Group;
        return this.grp_pet4 = t,
        t.visible = !1,
        t.x = 58,
        t.y = 1,
        t.elementsContent = [this.grp_petinfo4_1_i(), this.grp_petinfo4_2_i(), this.grp_petinfo4_3_i(), this.grp_petinfo4_4_i()],
        t
    },
    n.grp_petinfo4_1_i = function() {
        var t = new eui.Group;
        return this.grp_petinfo4_1 = t,
        t.cacheAsBitmap = !0,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this.petshow_4_1_i(), this.btninfo_4_1_i(), this.txt_petName_4_1_i()],
        t
    },
    n.petshow_4_1_i = function() {
        var t = new eui.Image;
        return this.petshow_4_1 = t,
        t.source = "",
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t
    },
    n.btninfo_4_1_i = function() {
        var t = new eui.Image;
        return this.btninfo_4_1 = t,
        t.source = "cc_panel1_petinfobtn_2_png",
        t.x = 7,
        t.y = 5,
        t
    },
    n.txt_petName_4_1_i = function() {
        var t = new eui.Label;
        return this.txt_petName_4_1 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "精灵名字最多九个字",
        t.textAlign = "center",
        t.textColor = 12834813,
        t.width = 144,
        t.x = 17,
        t.y = 271,
        t
    },
    n.grp_petinfo4_2_i = function() {
        var t = new eui.Group;
        return this.grp_petinfo4_2 = t,
        t.cacheAsBitmap = !0,
        t.x = 188,
        t.y = 0,
        t.elementsContent = [this.petshow_4_2_i(), this.btninfo_4_2_i(), this.txt_petName_4_2_i()],
        t
    },
    n.petshow_4_2_i = function() {
        var t = new eui.Image;
        return this.petshow_4_2 = t,
        t.source = "",
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t
    },
    n.btninfo_4_2_i = function() {
        var t = new eui.Image;
        return this.btninfo_4_2 = t,
        t.source = "cc_panel1_petinfobtn_2_png",
        t.x = 7,
        t.y = 5,
        t
    },
    n.txt_petName_4_2_i = function() {
        var t = new eui.Label;
        return this.txt_petName_4_2 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "精灵名字最多九个字",
        t.textAlign = "center",
        t.textColor = 12834813,
        t.width = 144,
        t.x = 17,
        t.y = 271,
        t
    },
    n.grp_petinfo4_3_i = function() {
        var t = new eui.Group;
        return this.grp_petinfo4_3 = t,
        t.cacheAsBitmap = !0,
        t.x = 376,
        t.y = 0,
        t.elementsContent = [this.petshow_4_3_i(), this.btninfo_4_3_i(), this.txt_petName_4_3_i()],
        t
    },
    n.petshow_4_3_i = function() {
        var t = new eui.Image;
        return this.petshow_4_3 = t,
        t.source = "",
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t
    },
    n.btninfo_4_3_i = function() {
        var t = new eui.Image;
        return this.btninfo_4_3 = t,
        t.source = "cc_panel1_petinfobtn_2_png",
        t.x = 7,
        t.y = 5,
        t
    },
    n.txt_petName_4_3_i = function() {
        var t = new eui.Label;
        return this.txt_petName_4_3 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "精灵名字最多九个字",
        t.textAlign = "center",
        t.textColor = 12834813,
        t.width = 144,
        t.x = 17,
        t.y = 271,
        t
    },
    n.grp_petinfo4_4_i = function() {
        var t = new eui.Group;
        return this.grp_petinfo4_4 = t,
        t.cacheAsBitmap = !0,
        t.x = 564,
        t.y = 0,
        t.elementsContent = [this.petshow_4_4_i(), this.btninfo_4_4_i(), this.txt_petName_4_4_i()],
        t
    },
    n.petshow_4_4_i = function() {
        var t = new eui.Image;
        return this.petshow_4_4 = t,
        t.source = "",
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t
    },
    n.btninfo_4_4_i = function() {
        var t = new eui.Image;
        return this.btninfo_4_4 = t,
        t.source = "cc_panel1_petinfobtn_2_png",
        t.x = 7,
        t.y = 5,
        t
    },
    n.txt_petName_4_4_i = function() {
        var t = new eui.Label;
        return this.txt_petName_4_4 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "精灵名字最多九个字",
        t.textAlign = "center",
        t.textColor = 12834813,
        t.width = 144,
        t.x = 17,
        t.y = 271,
        t
    },
    n.grp_pet3_i = function() {
        var t = new eui.Group;
        return this.grp_pet3 = t,
        t.visible = !1,
        t.x = 58,
        t.y = 0,
        t.elementsContent = [this.grp_petinfo3_1_i(), this.grp_petinfo3_2_i(), this.grp_petinfo3_3_i()],
        t
    },
    n.grp_petinfo3_1_i = function() {
        var t = new eui.Group;
        return this.grp_petinfo3_1 = t,
        t.cacheAsBitmap = !0,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this.petshow_3_1_i(), this.txt_petName_3_1_i(), this.btninfo_3_1_i()],
        t
    },
    n.petshow_3_1_i = function() {
        var t = new eui.Image;
        return this.petshow_3_1 = t,
        t.source = "",
        t.x = 0,
        t.y = 0,
        t
    },
    n.txt_petName_3_1_i = function() {
        var t = new eui.Label;
        return this.txt_petName_3_1 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "精灵名字最多九个字",
        t.textAlign = "center",
        t.textColor = 12834813,
        t.width = 144,
        t.x = 47,
        t.y = 272,
        t
    },
    n.btninfo_3_1_i = function() {
        var t = new eui.Image;
        return this.btninfo_3_1 = t,
        t.source = "cc_panel1_petinfobtn_2_png",
        t.x = 5,
        t.y = 5,
        t
    },
    n.grp_petinfo3_2_i = function() {
        var t = new eui.Group;
        return this.grp_petinfo3_2 = t,
        t.cacheAsBitmap = !0,
        t.x = 252,
        t.y = 0,
        t.elementsContent = [this.petshow_3_2_i(), this.txt_petName_3_2_i(), this.btninfo_3_2_i()],
        t
    },
    n.petshow_3_2_i = function() {
        var t = new eui.Image;
        return this.petshow_3_2 = t,
        t.source = "",
        t.x = 0,
        t.y = 0,
        t
    },
    n.txt_petName_3_2_i = function() {
        var t = new eui.Label;
        return this.txt_petName_3_2 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "精灵名字最多九个字",
        t.textAlign = "center",
        t.textColor = 12834813,
        t.width = 144,
        t.x = 47,
        t.y = 272,
        t
    },
    n.btninfo_3_2_i = function() {
        var t = new eui.Image;
        return this.btninfo_3_2 = t,
        t.source = "cc_panel1_petinfobtn_2_png",
        t.x = 5,
        t.y = 5,
        t
    },
    n.grp_petinfo3_3_i = function() {
        var t = new eui.Group;
        return this.grp_petinfo3_3 = t,
        t.cacheAsBitmap = !0,
        t.x = 503,
        t.y = 0,
        t.elementsContent = [this.petshow_3_3_i(), this.txt_petName_3_3_i(), this.btninfo_3_3_i()],
        t
    },
    n.petshow_3_3_i = function() {
        var t = new eui.Image;
        return this.petshow_3_3 = t,
        t.source = "",
        t.x = 0,
        t.y = 0,
        t
    },
    n.txt_petName_3_3_i = function() {
        var t = new eui.Label;
        return this.txt_petName_3_3 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "精灵名字最多九个字",
        t.textAlign = "center",
        t.textColor = 12834813,
        t.width = 144,
        t.x = 47,
        t.y = 272,
        t
    },
    n.btninfo_3_3_i = function() {
        var t = new eui.Image;
        return this.btninfo_3_3 = t,
        t.source = "cc_panel1_petinfobtn_2_png",
        t.x = 5,
        t.y = 5,
        t
    },
    n.grp_pet2_i = function() {
        var t = new eui.Group;
        return this.grp_pet2 = t,
        t.height = 299,
        t.visible = !0,
        t.width = 741,
        t.x = 58,
        t.y = 1,
        t.elementsContent = [this.grp_petinfo2_1_i(), this.grp_petinfo2_2_i()],
        t
    },
    n.grp_petinfo2_1_i = function() {
        var t = new eui.Group;
        return this.grp_petinfo2_1 = t,
        t.cacheAsBitmap = !0,
        t.height = 299,
        t.width = 364,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this.petshow_2_1_i(), this.txt_petName_2_1_i(), this.btninfo_2_1_i()],
        t
    },
    n.petshow_2_1_i = function() {
        var t = new eui.Image;
        return this.petshow_2_1 = t,
        t.height = 299,
        t.width = 364,
        t.x = 1,
        t.y = 0,
        t
    },
    n.txt_petName_2_1_i = function() {
        var t = new eui.Label;
        return this.txt_petName_2_1 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "精灵名字最多九个字",
        t.textAlign = "center",
        t.textColor = 12834813,
        t.width = 144,
        t.x = 109,
        t.y = 271,
        t
    },
    n.btninfo_2_1_i = function() {
        var t = new eui.Image;
        return this.btninfo_2_1 = t,
        t.source = "cc_panel1_petinfobtn_2_png",
        t.x = 5,
        t.y = 5,
        t
    },
    n.grp_petinfo2_2_i = function() {
        var t = new eui.Group;
        return this.grp_petinfo2_2 = t,
        t.cacheAsBitmap = !0,
        t.height = 299,
        t.width = 364,
        t.x = 377,
        t.y = 0,
        t.elementsContent = [this.petshow_2_2_i(), this.txt_petName_2_2_i(), this.btninfo_2_2_i()],
        t
    },
    n.petshow_2_2_i = function() {
        var t = new eui.Image;
        return this.petshow_2_2 = t,
        t.height = 299,
        t.width = 364,
        t.x = 0,
        t.y = 0,
        t
    },
    n.txt_petName_2_2_i = function() {
        var t = new eui.Label;
        return this.txt_petName_2_2 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "精灵名字最多九个字",
        t.textAlign = "center",
        t.textColor = 12834813,
        t.width = 144,
        t.x = 109,
        t.y = 271,
        t
    },
    n.btninfo_2_2_i = function() {
        var t = new eui.Image;
        return this.btninfo_2_2 = t,
        t.source = "cc_panel1_petinfobtn_2_png",
        t.x = 5,
        t.y = 5,
        t
    },
    n.imge_tx_xxx_i = function() {
        var t = new eui.Image;
        return this.imge_tx_xxx = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "cc_panel1_imge_tx_xxx_png",
        t.x = 39.608000000000004,
        t.y = 546.0050000000001,
        t
    },
    n.zhaohuanBtn_i = function() {
        var t = new eui.Image;
        return this.zhaohuanBtn = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "cc_panel1_zhaohuanbtn_png",
        t.x = 189.60800000000006,
        t.y = 461.00500000000005,
        t
    },
    n.openBtn_i = function() {
        var t = new eui.Group;
        return this.openBtn = t,
        t.height = 71,
        t.scaleX = 1,
        t.scaleY = 1,
        t.visible = !0,
        t.width = 175,
        t.x = 519.6080000000001,
        t.y = 461.00500000000005,
        t.elementsContent = [this._Image3_i(), this.tx_item_num_i()],
        t
    },
    n._Image3_i = function() {
        var t = new eui.Image;
        return t.scaleX = 1,
        t.scaleY = 1,
        t.source = "cc_panel1_openbtn_png",
        t.x = 0,
        t.y = 0,
        t
    },
    n.tx_item_num_i = function() {
        var t = new eui.Label;
        return this.tx_item_num = t,
        t.fontFamily = "MFShangHei",
        t.scaleX = 1,
        t.scaleY = 1,
        t.size = 20,
        t.text = "x0",
        t.textColor = 10482943,
        t.x = 85,
        t.y = 46,
        t
    },
    n.okayBtn_i = function() {
        var t = new eui.Image;
        return this.okayBtn = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "cc_openbtnimg_png",
        t.x = 519.6080000000001,
        t.y = 461.00500000000005,
        t
    },
    n.imge_line_i = function() {
        var t = new eui.Image;
        return this.imge_line = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "cc_panel1_imge_line_png",
        t.visible = !0,
        t.x = 18.608000000000004,
        t.y = 67.005,
        t
    },
    n.imge_title_bg_i = function() {
        var t = new eui.Image;
        return this.imge_title_bg = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "cc_panel1_imge_title_bg_png",
        t.x = 13.608000000000061,
        t.y = 18.004999999999995,
        t
    },
    n.tx_title_name_i = function() {
        var t = new eui.Label;
        return this.tx_title_name = t,
        t.fontFamily = "REEJI",
        t.scaleX = 1,
        t.scaleY = 1,
        t.size = 26,
        t.text = "四字组名",
        t.textColor = 16777215,
        t.x = 36.608000000000004,
        t.y = 25.004999999999995,
        t
    },
    n.imge_flag_i = function() {
        var t = new eui.Image;
        return this.imge_flag = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "cc__imge_flag_png",
        t.x = 0,
        t.y = 0,
        t
    },
    n.gr_tankuang_i = function() {
        var t = new eui.Group;
        return this.gr_tankuang = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.visible = !1,
        t.x = 18.608000000000004,
        t.y = 68.00500000000005,
        t.elementsContent = [this.imge_tankuang_bg_i(), this._scorl_i()],
        t
    },
    n.imge_tankuang_bg_i = function() {
        var t = new eui.Image;
        return this.imge_tankuang_bg = t,
        t.source = "cc_panel1_imge_tankuang_bg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    n._scorl_i = function() {
        var t = new eui.Scroller;
        return this._scorl = t,
        t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.height = 453,
        t.width = 881,
        t.x = 0,
        t.y = 6,
        t.viewport = this._Group3_i(),
        t
    },
    n._Group3_i = function() {
        var t = new eui.Group;
        return t.height = 445,
        t.y = 8,
        t.elementsContent = [this._list_i()],
        t
    },
    n._list_i = function() {
        var t = new eui.List;
        return this._list = t,
        t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.height = 447.33,
        t.width = 876.33,
        t.x = 4,
        t.y = 3,
        t.layout = this._TileLayout1_i(),
        t
    },
    n._TileLayout1_i = function() {
        var t = new eui.TileLayout;
        return t.horizontalGap = 12,
        t.orientation = "rows",
        t.paddingBottom = 0,
        t.paddingLeft = 7,
        t.paddingRight = 0,
        t.paddingTop = 7,
        t.verticalGap = 12,
        t
    },
    n.zhankaiBtn_down_i = function() {
        var t = new eui.Image;
        return this.zhankaiBtn_down = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "cc__zhankaibtn_down_png",
        t.x = 732,
        t.y = 29.004999999999995,
        t
    },
    n.zhankaiBtn_up_i = function() {
        var t = new eui.Image;
        return this.zhankaiBtn_up = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "cc__zhankaibtn_up_png",
        t.visible = !0,
        t.x = 732,
        t.y = 29.004999999999995,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/Panel2Skin.exml"] = window.contractCall.Panel2Skin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "imgDiamond", "btnAddDimond", "txtCoin", "grp_diamond", "icon1", "btnGoto", "btnAdd1", "txtCoin2", "grp_topRight", "rb_page1", "rb_page2", "rb_relation1", "rb_relation2", "rb_relation3", "rb_relation4", "rb_relation5", "pet1", "txt_petName1", "btnInfo1", "petshow1", "pet2", "txt_petName2", "btnInfo2", "petshow2", "grp_pets", "btnleftOpen", "txt_needItemNum1", "leftOpen", "btnrightOpen", "txt_needItemNum2", "rightOpen", "txt_texingInfo1", "txt_texingInfo2", "grp_page1", "active_1", "active_3", "active_2", "active_4", "active_9", "active_5", "active_8", "active_10", "active_7", "active_6", "fazhen", "btnPet", "btnCure", "kuang_3", "btnAssignFight_3", "btnyijian_3", "btnCurDraw_3", "grp_boos3", "kuang_4", "btnAssignFight_4", "btnCurDraw_4", "btnyijian_4", "grp_boos4", "kuang_5", "btnAssignFight_5", "btnCurDraw_5", "btnyijian_5", "grp_boos5", "kuang_1", "btnAssignFight_1", "btnCurDraw_1", "btnyijian_1", "grp_boos1", "kuang_6", "btnAssignFight_6", "btnCurDraw_6", "btnyijian_6", "grp_boos6", "kuang_2", "btnAssignFight_2", "btnCurDraw_2", "btnyijian_2", "grp_boos2", "content", "btnRefresh", "btnFight", "btnDraw", "btnAdd", "txt_hasDrawTimes", "times", "grp_page2"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this.grp_topRight_i(), this._Image3_i(), this._Group2_i(), this.grp_page1_i(), this.grp_page2_i()]
    }
    __extends(e, t);
    var n = function(t) {
        function e() {
            t.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i()],
            this._Rect1_i(),
            this.states = [new eui.State("up", [new eui.AddItems("_Rect1", "", 1, ""), new eui.SetProperty("_Image1", "source", "cc_panel2_hbxg_up_png")]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "cc_panel2_hbxg_down_png")])]
        }
        __extends(e, t);
        var n = e.prototype;
        return n._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t
        },
        n._Rect1_i = function() {
            var t = new eui.Rect;
            return this._Rect1 = t,
            t.fillAlpha = 0,
            t.percentWidth = 100,
            t
        },
        e
    } (eui.Skin),
    i = function(t) {
        function e() {
            t.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i()],
            this._Rect1_i(),
            this.states = [new eui.State("up", [new eui.AddItems("_Rect1", "", 1, ""), new eui.SetProperty("_Image1", "source", "cc_panel2_hjhz_up_png")]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "cc_panel2_hjhz_down_png")])]
        }
        __extends(e, t);
        var n = e.prototype;
        return n._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t
        },
        n._Rect1_i = function() {
            var t = new eui.Rect;
            return this._Rect1 = t,
            t.fillAlpha = 0,
            t.percentWidth = 100,
            t
        },
        e
    } (eui.Skin),
    r = function(t) {
        function e() {
            t.call(this),
            this.skinParts = ["hasOpen"],
            this.elementsContent = [this._Image1_i(), this.hasOpen_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "cc_panel2_ldcc_up_png")]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "cc_panel2_ldcc_down_png"), new eui.SetProperty("_Image1", "y", -9), new eui.SetProperty("_Image1", "x", -9)])]
        }
        __extends(e, t);
        var n = e.prototype;
        return n._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t
        },
        n.hasOpen_i = function() {
            var t = new eui.Image;
            return this.hasOpen = t,
            t.source = "cc_panel1_yikaiqi_png",
            t.visible = !0,
            t.y = 0,
            t
        },
        e
    } (eui.Skin),
    a = function(t) {
        function e() {
            t.call(this),
            this.skinParts = ["hasOpen"],
            this.elementsContent = [this._Image1_i(), this.hasOpen_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "cc_panel2_ddcc_up_png")]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "cc_panel2_ddcc_down_png"), new eui.SetProperty("_Image1", "y", -9), new eui.SetProperty("_Image1", "x", -9)])]
        }
        __extends(e, t);
        var n = e.prototype;
        return n._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t
        },
        n.hasOpen_i = function() {
            var t = new eui.Image;
            return this.hasOpen = t,
            t.source = "cc_panel1_yikaiqi_png",
            t.visible = !0,
            t.y = 0,
            t
        },
        e
    } (eui.Skin),
    o = function(t) {
        function e() {
            t.call(this),
            this.skinParts = ["hasOpen"],
            this.elementsContent = [this._Image1_i(), this.hasOpen_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "cc_panel2_aycc_up_png")]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "cc_panel2_aycc_down_png"), new eui.SetProperty("_Image1", "y", -9), new eui.SetProperty("_Image1", "x", -9)])]
        }
        __extends(e, t);
        var n = e.prototype;
        return n._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t
        },
        n.hasOpen_i = function() {
            var t = new eui.Image;
            return this.hasOpen = t,
            t.source = "cc_panel1_yikaiqi_png",
            t.visible = !0,
            t.y = 0,
            t
        },
        e
    } (eui.Skin),
    _ = function(t) {
        function e() {
            t.call(this),
            this.skinParts = ["hasOpen"],
            this.elementsContent = [this._Image1_i(), this.hasOpen_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "cc_panel2_cncc_up_png")]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "cc_panel2_cncc_down_png"), new eui.SetProperty("_Image1", "y", -9), new eui.SetProperty("_Image1", "x", -9)])]
        }
        __extends(e, t);
        var n = e.prototype;
        return n._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t
        },
        n.hasOpen_i = function() {
            var t = new eui.Image;
            return this.hasOpen = t,
            t.source = "cc_panel1_yikaiqi_png",
            t.visible = !0,
            t.y = 0,
            t
        },
        e
    } (eui.Skin),
    s = function(t) {
        function e() {
            t.call(this),
            this.skinParts = ["hasOpen"],
            this.elementsContent = [this._Image1_i(), this.hasOpen_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "cc_panel2_zdcc_up_png")]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "cc_panel2_zdcc_down_png"), new eui.SetProperty("_Image1", "y", -9), new eui.SetProperty("_Image1", "x", -9)])]
        }
        __extends(e, t);
        var n = e.prototype;
        return n._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t
        },
        n.hasOpen_i = function() {
            var t = new eui.Image;
            return this.hasOpen = t,
            t.source = "cc_panel1_yikaiqi_png",
            t.visible = !0,
            t.y = 0,
            t
        },
        e
    } (eui.Skin),
    u = e.prototype;
    return u.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.percentHeight = 100,
        t.source = "cc_panel2_bg_jpg",
        t.percentWidth = 100,
        t.x = 0,
        t.y = 0,
        t
    },
    u.grp_topRight_i = function() {
        var t = new eui.Group;
        return this.grp_topRight = t,
        t.cacheAsBitmap = !0,
        t.right = 32,
        t.visible = !0,
        t.width = 425,
        t.y = 8,
        t.elementsContent = [this.grp_diamond_i(), this._Group1_i()],
        t
    },
    u.grp_diamond_i = function() {
        var t = new eui.Group;
        return this.grp_diamond = t,
        t.visible = !0,
        t.x = 278,
        t.y = 2,
        t.elementsContent = [this._Image1_i(), this.imgDiamond_i(), this.btnAddDimond_i(), this.txtCoin_i()],
        t
    },
    u._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "cc_panel3_img_di2_png",
        t.visible = !0,
        t.x = 10,
        t.y = 5,
        t
    },
    u.imgDiamond_i = function() {
        var t = new eui.Image;
        return this.imgDiamond = t,
        t.height = 30,
        t.width = 30,
        t.x = 0,
        t.y = 0,
        t
    },
    u.btnAddDimond_i = function() {
        var t = new eui.Image;
        return this.btnAddDimond = t,
        t.source = "cc_panel3_btnadd_png",
        t.x = 126,
        t.y = 5,
        t
    },
    u.txtCoin_i = function() {
        var t = new eui.Label;
        return this.txtCoin = t,
        t.fontFamily = "MFShangHei",
        t.size = 18.0101510119682,
        t.text = "99999",
        t.textColor = 12834813,
        t.visible = !0,
        t.x = 50,
        t.y = 6,
        t
    },
    u._Group1_i = function() {
        var t = new eui.Group;
        return t.visible = !0,
        t.x = 9,
        t.y = 0,
        t.elementsContent = [this._Image2_i(), this.icon1_i(), this.btnGoto_i(), this.btnAdd1_i(), this.txtCoin2_i()],
        t
    },
    u._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "cc_panel2_img_di2_png",
        t.visible = !0,
        t.x = 15,
        t.y = 7,
        t
    },
    u.icon1_i = function() {
        var t = new eui.Image;
        return this.icon1 = t,
        t.height = 30,
        t.width = 30,
        t.x = 0,
        t.y = 2,
        t
    },
    u.btnGoto_i = function() {
        var t = new eui.Image;
        return this.btnGoto = t,
        t.source = "cc_panel2_btngoto_png",
        t.x = 150,
        t.y = 0,
        t
    },
    u.btnAdd1_i = function() {
        var t = new eui.Image;
        return this.btnAdd1 = t,
        t.source = "cc_panel1_btnadd_png",
        t.visible = !1,
        t.x = 126,
        t.y = 7,
        t
    },
    u.txtCoin2_i = function() {
        var t = new eui.Label;
        return this.txtCoin2 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18.0101510119682,
        t.text = "99999",
        t.textColor = 12834813,
        t.x = 60,
        t.y = 8,
        t
    },
    u._Image3_i = function() {
        var t = new eui.Image;
        return t.height = 566,
        t.horizontalCenter = 80.5,
        t.scale9Grid = new egret.Rectangle(4, 164, 4, 165),
        t.source = "cc_panel2_page2bg_png",
        t.visible = !0,
        t.width = 949,
        t.y = 79,
        t
    },
    u._Group2_i = function() {
        var t = new eui.Group;
        return t.horizontalCenter = -210.5,
        t.y = 35,
        t.elementsContent = [this.rb_page1_i(), this.rb_page2_i()],
        t
    },
    u.rb_page1_i = function() {
        var t = new eui.RadioButton;
        return this.rb_page1 = t,
        t.groupName = "mainPage",
        t.value = "1",
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t.skinName = n,
        t
    },
    u.rb_page2_i = function() {
        var t = new eui.RadioButton;
        return this.rb_page2 = t,
        t.groupName = "mainPage",
        t.value = "2",
        t.visible = !0,
        t.x = 183,
        t.y = 0,
        t.skinName = i,
        t
    },
    u.grp_page1_i = function() {
        var t = new eui.Group;
        return this.grp_page1 = t,
        t.horizontalCenter = 86.5,
        t.visible = !1,
        t.y = 89,
        t.elementsContent = [this._Image4_i(), this.rb_relation1_i(), this.rb_relation2_i(), this.rb_relation3_i(), this.rb_relation4_i(), this.rb_relation5_i(), this.grp_pets_i(), this.leftOpen_i(), this.rightOpen_i(), this.txt_texingInfo1_i(), this.txt_texingInfo2_i()],
        t
    },
    u._Image4_i = function() {
        var t = new eui.Image;
        return t.source = "cc_panel2_page2rigtbg_png",
        t.visible = !0,
        t.x = 752,
        t
    },
    u.rb_relation1_i = function() {
        var t = new eui.RadioButton;
        return this.rb_relation1 = t,
        t.groupName = "relation",
        t.value = "1",
        t.visible = !0,
        t.x = 763,
        t.y = 9,
        t.skinName = r,
        t
    },
    u.rb_relation2_i = function() {
        var t = new eui.RadioButton;
        return this.rb_relation2 = t,
        t.groupName = "relation",
        t.value = "2",
        t.visible = !0,
        t.x = 763,
        t.y = 97,
        t.skinName = a,
        t
    },
    u.rb_relation3_i = function() {
        var t = new eui.RadioButton;
        return this.rb_relation3 = t,
        t.groupName = "relation",
        t.value = "3",
        t.visible = !0,
        t.x = 763,
        t.y = 185,
        t.skinName = o,
        t
    },
    u.rb_relation4_i = function() {
        var t = new eui.RadioButton;
        return this.rb_relation4 = t,
        t.groupName = "relation",
        t.value = "4",
        t.visible = !0,
        t.x = 763,
        t.y = 273,
        t.skinName = _,
        t
    },
    u.rb_relation5_i = function() {
        var t = new eui.RadioButton;
        return this.rb_relation5 = t,
        t.groupName = "relation",
        t.value = "5",
        t.visible = !0,
        t.x = 763,
        t.y = 361,
        t.skinName = s,
        t
    },
    u.grp_pets_i = function() {
        var t = new eui.Group;
        return this.grp_pets = t,
        t.x = 0,
        t.y = 4,
        t.elementsContent = [this.petshow1_i(), this.petshow2_i()],
        t
    },
    u.petshow1_i = function() {
        var t = new eui.Group;
        return this.petshow1 = t,
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this.pet1_i(), this.txt_petName1_i(), this.btnInfo1_i()],
        t
    },
    u.pet1_i = function() {
        var t = new eui.Image;
        return this.pet1 = t,
        t.source = "",
        t.visible = !0,
        t.x = 4,
        t.y = 5,
        t
    },
    u.txt_petName1_i = function() {
        var t = new eui.Label;
        return this.txt_petName1 = t,
        t.fontFamily = "MFShangHei",
        t.scaleX = 1,
        t.scaleY = 1,
        t.size = 18,
        t.text = "精灵名字最多九个字",
        t.textAlign = "center",
        t.textColor = 9025023,
        t.width = 162,
        t.x = 105,
        t.y = 395,
        t
    },
    u.btnInfo1_i = function() {
        var t = new eui.Image;
        return this.btnInfo1 = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "cc_panel2_btninfo_png",
        t.x = 6,
        t.y = 7,
        t
    },
    u.petshow2_i = function() {
        var t = new eui.Group;
        return this.petshow2 = t,
        t.visible = !0,
        t.x = 379,
        t.y = 0,
        t.elementsContent = [this.pet2_i(), this.txt_petName2_i(), this.btnInfo2_i()],
        t
    },
    u.pet2_i = function() {
        var t = new eui.Image;
        return this.pet2 = t,
        t.source = "",
        t.visible = !0,
        t.x = 4,
        t.y = 5,
        t
    },
    u.txt_petName2_i = function() {
        var t = new eui.Label;
        return this.txt_petName2 = t,
        t.fontFamily = "MFShangHei",
        t.scaleX = 1,
        t.scaleY = 1,
        t.size = 18,
        t.text = "精灵名字最多九个字",
        t.textAlign = "center",
        t.textColor = 9025023,
        t.width = 162,
        t.x = 105,
        t.y = 395,
        t
    },
    u.btnInfo2_i = function() {
        var t = new eui.Image;
        return this.btnInfo2 = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "cc_panel2_btninfo_png",
        t.x = 6,
        t.y = 7,
        t
    },
    u.leftOpen_i = function() {
        var t = new eui.Group;
        return this.leftOpen = t,
        t.cacheAsBitmap = !0,
        t.x = 112,
        t.y = 464,
        t.elementsContent = [this.btnleftOpen_i(), this._Group3_i()],
        t
    },
    u.btnleftOpen_i = function() {
        var t = new eui.Image;
        return this.btnleftOpen = t,
        t.source = "cc_panel2_btnopen_png",
        t.x = 12,
        t.y = 21,
        t
    },
    u._Group3_i = function() {
        var t = new eui.Group;
        return t.visible = !0,
        t.x = 20,
        t.y = 0,
        t.elementsContent = [this.txt_needItemNum1_i(), this._Label1_i(), this._Image5_i(), this._Image6_i()],
        t
    },
    u.txt_needItemNum1_i = function() {
        var t = new eui.Label;
        return this.txt_needItemNum1 = t,
        t.fontFamily = "MFShangHei",
        t.size = 20,
        t.text = "x3",
        t.textColor = 16777215,
        t.x = 92,
        t.y = 1,
        t
    },
    u._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 20,
        t.text = "x68/",
        t.textColor = 16777215,
        t.x = 20,
        t.y = 1,
        t
    },
    u._Image5_i = function() {
        var t = new eui.Image;
        return t.source = "cc_panel2_tuceng_551_png",
        t.x = 68,
        t.y = 1,
        t
    },
    u._Image6_i = function() {
        var t = new eui.Image;
        return t.source = "cc_panel2_icon_gold_png",
        t.x = 0,
        t.y = 0,
        t
    },
    u.rightOpen_i = function() {
        var t = new eui.Group;
        return this.rightOpen = t,
        t.cacheAsBitmap = !0,
        t.x = 490,
        t.y = 464,
        t.elementsContent = [this.btnrightOpen_i(), this._Group4_i()],
        t
    },
    u.btnrightOpen_i = function() {
        var t = new eui.Image;
        return this.btnrightOpen = t,
        t.source = "cc_panel2_btnopen_png",
        t.visible = !0,
        t.x = 12,
        t.y = 21,
        t
    },
    u._Group4_i = function() {
        var t = new eui.Group;
        return t.x = 20,
        t.y = 0,
        t.elementsContent = [this._Image7_i(), this._Image8_i(), this.txt_needItemNum2_i(), this._Label2_i()],
        t
    },
    u._Image7_i = function() {
        var t = new eui.Image;
        return t.source = "cc_panel2_tuceng_551_png",
        t.x = 69,
        t.y = 1,
        t
    },
    u._Image8_i = function() {
        var t = new eui.Image;
        return t.source = "cc_panel2_icon_gold_png",
        t.x = 0,
        t.y = 0,
        t
    },
    u.txt_needItemNum2_i = function() {
        var t = new eui.Label;
        return this.txt_needItemNum2 = t,
        t.fontFamily = "MFShangHei",
        t.size = 20,
        t.text = "99/99",
        t.x = 93,
        t.y = 1,
        t
    },
    u._Label2_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 20,
        t.text = "x68/",
        t.textColor = 16777215,
        t.x = 20,
        t.y = 1,
        t
    },
    u.txt_texingInfo1_i = function() {
        var t = new eui.Label;
        return this.txt_texingInfo1 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "仅强化XXXXX的特性效果",
        t.textColor = 6388143,
        t.x = 98,
        t.y = 434,
        t
    },
    u.txt_texingInfo2_i = function() {
        var t = new eui.Label;
        return this.txt_texingInfo2 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "仅强化XXXXX的特性效果",
        t.textColor = 6388143,
        t.x = 476,
        t.y = 434,
        t
    },
    u.grp_page2_i = function() {
        var t = new eui.Group;
        return this.grp_page2 = t,
        t.horizontalCenter = 87,
        t.visible = !0,
        t.width = 980,
        t.y = 87,
        t.elementsContent = [this._Image9_i(), this.content_i(), this._Group5_i(), this.times_i()],
        t
    },
    u._Image9_i = function() {
        var t = new eui.Image;
        return t.source = "cc_panel2_txtshow_png",
        t.visible = !0,
        t.x = 290,
        t.y = 469,
        t
    },
    u.content_i = function() {
        var t = new eui.Group;
        return this.content = t,
        t.visible = !0,
        t.x = 25,
        t.y = 0,
        t.elementsContent = [this.fazhen_i(), this.btnPet_i(), this.btnCure_i(), this.grp_boos3_i(), this.grp_boos4_i(), this.grp_boos5_i(), this.grp_boos1_i(), this.grp_boos6_i(), this.grp_boos2_i()],
        t
    },
    u.fazhen_i = function() {
        var t = new eui.Group;
        return this.fazhen = t,
        t.visible = !0,
        t.x = 256,
        t.y = 0,
        t.elementsContent = [this._Image10_i(), this.active_1_i(), this.active_3_i(), this.active_2_i(), this.active_4_i(), this.active_9_i(), this.active_5_i(), this.active_8_i(), this.active_10_i(), this.active_7_i(), this.active_6_i(), this._Image11_i(), this._Image12_i(), this._Image13_i(), this._Image14_i(), this._Image15_i(), this._Image16_i(), this._Image17_i(), this._Image18_i(), this._Image19_i(), this._Image20_i(), this._Image21_i()],
        t
    },
    u._Image10_i = function() {
        var t = new eui.Image;
        return t.source = "cc_panel2_fazhen_png",
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t
    },
    u.active_1_i = function() {
        var t = new eui.Image;
        return this.active_1 = t,
        t.source = "cc_panel2_iconActive_png",
        t.visible = !0,
        t.x = 92,
        t.y = 150,
        t
    },
    u.active_3_i = function() {
        var t = new eui.Image;
        return this.active_3 = t,
        t.source = "cc_panel2_iconActive_png",
        t.visible = !0,
        t.x = 92,
        t.y = 232,
        t
    },
    u.active_2_i = function() {
        var t = new eui.Image;
        return this.active_2 = t,
        t.source = "cc_panel2_iconActive_png",
        t.visible = !0,
        t.x = 239,
        t.y = 150,
        t
    },
    u.active_4_i = function() {
        var t = new eui.Image;
        return this.active_4 = t,
        t.source = "cc_panel2_iconActive_png",
        t.visible = !0,
        t.x = 239,
        t.y = 232,
        t
    },
    u.active_9_i = function() {
        var t = new eui.Image;
        return this.active_9 = t,
        t.source = "cc_panel2_iconActive_png",
        t.visible = !0,
        t.x = 321,
        t.y = 102,
        t
    },
    u.active_5_i = function() {
        var t = new eui.Image;
        return this.active_5 = t,
        t.source = "cc_panel2_iconActive_png",
        t.visible = !0,
        t.x = 9,
        t.y = 102,
        t
    },
    u.active_8_i = function() {
        var t = new eui.Image;
        return this.active_8 = t,
        t.source = "cc_panel2_iconActive_png",
        t.visible = !0,
        t.x = 321,
        t.y = 282,
        t
    },
    u.active_10_i = function() {
        var t = new eui.Image;
        return this.active_10 = t,
        t.source = "cc_panel2_iconActive_png",
        t.visible = !0,
        t.x = 9,
        t.y = 282,
        t
    },
    u.active_7_i = function() {
        var t = new eui.Image;
        return this.active_7 = t,
        t.source = "cc_panel2_iconActive_png",
        t.visible = !0,
        t.x = 165,
        t.y = 372,
        t
    },
    u.active_6_i = function() {
        var t = new eui.Image;
        return this.active_6 = t,
        t.source = "cc_panel2_iconActive_png",
        t.visible = !0,
        t.x = 165,
        t.y = 12,
        t
    },
    u._Image11_i = function() {
        var t = new eui.Image;
        return t.source = "cc_panel2_1_png",
        t.x = 189,
        t.y = 33,
        t
    },
    u._Image12_i = function() {
        var t = new eui.Image;
        return t.source = "cc_panel2_4_png",
        t.x = 110,
        t.y = 175,
        t
    },
    u._Image13_i = function() {
        var t = new eui.Image;
        return t.source = "cc_panel2_3_png",
        t.x = 188,
        t.y = 395,
        t
    },
    u._Image14_i = function() {
        var t = new eui.Image;
        return t.source = "cc_panel2_5_png",
        t.x = 264,
        t.y = 257,
        t
    },
    u._Image15_i = function() {
        var t = new eui.Image;
        return t.source = "cc_panel2_6_png",
        t.x = 29,
        t.y = 306,
        t
    },
    u._Image16_i = function() {
        var t = new eui.Image;
        return t.source = "cc_panel2_3_png",
        t.x = 115,
        t.y = 255,
        t
    },
    u._Image17_i = function() {
        var t = new eui.Image;
        return t.source = "cc_panel2_1_png",
        t.x = 264,
        t.y = 174,
        t
    },
    u._Image18_i = function() {
        var t = new eui.Image;
        return t.source = "cc_panel2_2_png",
        t.x = 343,
        t.y = 127,
        t
    },
    u._Image19_i = function() {
        var t = new eui.Image;
        return t.source = "cc_panel2_4_png",
        t.x = 27,
        t.y = 127,
        t
    },
    u._Image20_i = function() {
        var t = new eui.Image;
        return t.source = "cc_panel2_5_png",
        t.x = 345,
        t.y = 306,
        t
    },
    u._Image21_i = function() {
        var t = new eui.Image;
        return t.source = "cc_panel2_bigicon_png",
        t.x = 143,
        t.y = 185,
        t
    },
    u.btnPet_i = function() {
        var t = new eui.Image;
        return this.btnPet = t,
        t.source = "cc_panel2_btnpet_png",
        t.x = 6,
        t.y = 457,
        t
    },
    u.btnCure_i = function() {
        var t = new eui.Image;
        return this.btnCure = t,
        t.source = "cc_panel2_btncure_png",
        t.x = 109,
        t.y = 457,
        t
    },
    u.grp_boos3_i = function() {
        var t = new eui.Group;
        return this.grp_boos3 = t,
        t.anchorOffsetX = 122,
        t.anchorOffsetY = 64,
        t.scaleX = 1,
        t.x = 125,
        t.y = 90,
        t.elementsContent = [this._Image22_i(), this.kuang_3_i(), this.btnAssignFight_3_i(), this.btnyijian_3_i(), this.btnCurDraw_3_i()],
        t
    },
    u._Image22_i = function() {
        var t = new eui.Image;
        return t.source = "cc_panel2_page2_pet1_png",
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t
    },
    u.kuang_3_i = function() {
        var t = new eui.Image;
        return this.kuang_3 = t,
        t.source = "cc_panel2_xzk_png",
        t.x = -9,
        t.y = -11,
        t
    },
    u.btnAssignFight_3_i = function() {
        var t = new eui.Image;
        return this.btnAssignFight_3 = t,
        t.source = "cc_panel2_btnassignfight_png",
        t.x = 4,
        t.y = 80,
        t
    },
    u.btnyijian_3_i = function() {
        var t = new eui.Image;
        return this.btnyijian_3 = t,
        t.source = "cc_friend_panel_yijian_png",
        t.visible = !0,
        t.x = 4,
        t.y = 40,
        t
    },
    u.btnCurDraw_3_i = function() {
        var t = new eui.Image;
        return this.btnCurDraw_3 = t,
        t.source = "cc_panel2_btnascurDraw_png",
        t.x = 4,
        t.y = 80,
        t
    },
    u.grp_boos4_i = function() {
        var t = new eui.Group;
        return this.grp_boos4 = t,
        t.anchorOffsetX = 122,
        t.anchorOffsetY = 64,
        t.x = 125,
        t.y = 230,
        t.elementsContent = [this._Image23_i(), this.kuang_4_i(), this.btnAssignFight_4_i(), this.btnCurDraw_4_i(), this.btnyijian_4_i()],
        t
    },
    u._Image23_i = function() {
        var t = new eui.Image;
        return t.source = "cc_panel2_page2_pet2_png",
        t.x = 0,
        t.y = 0,
        t
    },
    u.kuang_4_i = function() {
        var t = new eui.Image;
        return this.kuang_4 = t,
        t.source = "cc_panel2_xzk_png",
        t.visible = !0,
        t.x = -9,
        t.y = -11,
        t
    },
    u.btnAssignFight_4_i = function() {
        var t = new eui.Image;
        return this.btnAssignFight_4 = t,
        t.source = "cc_panel2_btnassignfight_png",
        t.visible = !0,
        t.x = 4,
        t.y = 80,
        t
    },
    u.btnCurDraw_4_i = function() {
        var t = new eui.Image;
        return this.btnCurDraw_4 = t,
        t.source = "cc_panel2_btnascurDraw_png",
        t.visible = !0,
        t.x = 4,
        t.y = 80,
        t
    },
    u.btnyijian_4_i = function() {
        var t = new eui.Image;
        return this.btnyijian_4 = t,
        t.source = "cc_friend_panel_yijian_png",
        t.visible = !0,
        t.x = 4,
        t.y = 40,
        t
    },
    u.grp_boos5_i = function() {
        var t = new eui.Group;
        return this.grp_boos5 = t,
        t.anchorOffsetX = 122,
        t.anchorOffsetY = 64,
        t.x = 125,
        t.y = 370,
        t.elementsContent = [this._Image24_i(), this.kuang_5_i(), this.btnAssignFight_5_i(), this.btnCurDraw_5_i(), this.btnyijian_5_i()],
        t
    },
    u._Image24_i = function() {
        var t = new eui.Image;
        return t.source = "cc_panel2_page2_pet3_png",
        t.x = 0,
        t.y = 0,
        t
    },
    u.kuang_5_i = function() {
        var t = new eui.Image;
        return this.kuang_5 = t,
        t.source = "cc_panel2_xzk_png",
        t.visible = !0,
        t.x = -9,
        t.y = -11,
        t
    },
    u.btnAssignFight_5_i = function() {
        var t = new eui.Image;
        return this.btnAssignFight_5 = t,
        t.source = "cc_panel2_btnassignfight_png",
        t.visible = !0,
        t.x = 4,
        t.y = 80,
        t
    },
    u.btnCurDraw_5_i = function() {
        var t = new eui.Image;
        return this.btnCurDraw_5 = t,
        t.source = "cc_panel2_btnascurDraw_png",
        t.visible = !0,
        t.x = 4,
        t.y = 80,
        t
    },
    u.btnyijian_5_i = function() {
        var t = new eui.Image;
        return this.btnyijian_5 = t,
        t.source = "cc_friend_panel_yijian_png",
        t.visible = !0,
        t.x = 4,
        t.y = 40,
        t
    },
    u.grp_boos1_i = function() {
        var t = new eui.Group;
        return this.grp_boos1 = t,
        t.anchorOffsetX = 122,
        t.anchorOffsetY = 64,
        t.x = 807,
        t.y = 90,
        t.elementsContent = [this._Image25_i(), this.kuang_1_i(), this.btnAssignFight_1_i(), this.btnCurDraw_1_i(), this.btnyijian_1_i()],
        t
    },
    u._Image25_i = function() {
        var t = new eui.Image;
        return t.source = "cc_panel2_page2_pet4_png",
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t
    },
    u.kuang_1_i = function() {
        var t = new eui.Image;
        return this.kuang_1 = t,
        t.source = "cc_panel2_xzk_png",
        t.visible = !0,
        t.x = -9,
        t.y = -11,
        t
    },
    u.btnAssignFight_1_i = function() {
        var t = new eui.Image;
        return this.btnAssignFight_1 = t,
        t.source = "cc_panel2_btnassignfight_png",
        t.visible = !0,
        t.x = 143,
        t.y = 80,
        t
    },
    u.btnCurDraw_1_i = function() {
        var t = new eui.Image;
        return this.btnCurDraw_1 = t,
        t.source = "cc_panel2_btnascurDraw_png",
        t.visible = !0,
        t.x = 143,
        t.y = 80,
        t
    },
    u.btnyijian_1_i = function() {
        var t = new eui.Image;
        return this.btnyijian_1 = t,
        t.source = "cc_friend_panel_yijian_png",
        t.visible = !0,
        t.x = 143,
        t.y = 40,
        t
    },
    u.grp_boos6_i = function() {
        var t = new eui.Group;
        return this.grp_boos6 = t,
        t.anchorOffsetX = 122,
        t.anchorOffsetY = 64,
        t.x = 807,
        t.y = 230,
        t.elementsContent = [this._Image26_i(), this.kuang_6_i(), this.btnAssignFight_6_i(), this.btnCurDraw_6_i(), this.btnyijian_6_i()],
        t
    },
    u._Image26_i = function() {
        var t = new eui.Image;
        return t.source = "cc_panel2_page2_pet5_png",
        t.x = 0,
        t.y = 0,
        t
    },
    u.kuang_6_i = function() {
        var t = new eui.Image;
        return this.kuang_6 = t,
        t.source = "cc_panel2_xzk_png",
        t.visible = !0,
        t.x = -9,
        t.y = -11,
        t
    },
    u.btnAssignFight_6_i = function() {
        var t = new eui.Image;
        return this.btnAssignFight_6 = t,
        t.source = "cc_panel2_btnassignfight_png",
        t.visible = !0,
        t.x = 143,
        t.y = 80,
        t
    },
    u.btnCurDraw_6_i = function() {
        var t = new eui.Image;
        return this.btnCurDraw_6 = t,
        t.source = "cc_panel2_btnascurDraw_png",
        t.visible = !0,
        t.x = 143,
        t.y = 80,
        t
    },
    u.btnyijian_6_i = function() {
        var t = new eui.Image;
        return this.btnyijian_6 = t,
        t.source = "cc_friend_panel_yijian_png",
        t.visible = !0,
        t.x = 143,
        t.y = 40,
        t
    },
    u.grp_boos2_i = function() {
        var t = new eui.Group;
        return this.grp_boos2 = t,
        t.anchorOffsetX = 122,
        t.anchorOffsetY = 64,
        t.x = 807,
        t.y = 370,
        t.elementsContent = [this._Image27_i(), this.kuang_2_i(), this.btnAssignFight_2_i(), this.btnCurDraw_2_i(), this.btnyijian_2_i()],
        t
    },
    u._Image27_i = function() {
        var t = new eui.Image;
        return t.source = "cc_panel2_page2_pet6_png",
        t.x = 0,
        t.y = 0,
        t
    },
    u.kuang_2_i = function() {
        var t = new eui.Image;
        return this.kuang_2 = t,
        t.source = "cc_panel2_xzk_png",
        t.visible = !0,
        t.x = -9,
        t.y = -11,
        t
    },
    u.btnAssignFight_2_i = function() {
        var t = new eui.Image;
        return this.btnAssignFight_2 = t,
        t.source = "cc_panel2_btnassignfight_png",
        t.visible = !0,
        t.x = 143,
        t.y = 80,
        t
    },
    u.btnCurDraw_2_i = function() {
        var t = new eui.Image;
        return this.btnCurDraw_2 = t,
        t.source = "cc_panel2_btnascurDraw_png",
        t.visible = !0,
        t.x = 143,
        t.y = 80,
        t
    },
    u.btnyijian_2_i = function() {
        var t = new eui.Image;
        return this.btnyijian_2 = t,
        t.source = "cc_friend_panel_yijian_png",
        t.visible = !0,
        t.x = 143,
        t.y = 40,
        t
    },
    u._Group5_i = function() {
        var t = new eui.Group;
        return t.x = 645,
        t.y = 479,
        t.elementsContent = [this.btnRefresh_i(), this.btnFight_i(), this.btnDraw_i()],
        t
    },
    u.btnRefresh_i = function() {
        var t = new eui.Image;
        return this.btnRefresh = t,
        t.source = "cc_panel2_btnyijian_png",
        t.visible = !0,
        t.x = 35,
        t.y = 0,
        t
    },
    u.btnFight_i = function() {
        var t = new eui.Image;
        return this.btnFight = t,
        t.source = "cc_panel2_btnfight_png",
        t.visible = !0,
        t.x = 175,
        t.y = 0,
        t
    },
    u.btnDraw_i = function() {
        var t = new eui.Image;
        return this.btnDraw = t,
        t.source = "cc_panel2_btndraw_png",
        t.visible = !0,
        t.x = 115,
        t.y = 0,
        t
    },
    u.times_i = function() {
        var t = new eui.Group;
        return this.times = t,
        t.cacheAsBitmap = !0,
        t.x = 712,
        t.y = 433,
        t.elementsContent = [this._Image28_i(), this.btnAdd_i(), this._Label3_i(), this.txt_hasDrawTimes_i()],
        t
    },
    u._Image28_i = function() {
        var t = new eui.Image;
        return t.source = "cc_panel2_juxing_901_png",
        t.x = 0,
        t.y = 0,
        t
    },
    u.btnAdd_i = function() {
        var t = new eui.Image;
        return this.btnAdd = t,
        t.source = "cc_panel2_btnadd_png",
        t.x = 196,
        t.y = 5,
        t
    },
    u._Label3_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "今日剩余抽取次数：",
        t.textColor = 8757203,
        t.x = 16,
        t.y = 9,
        t
    },
    u.txt_hasDrawTimes_i = function() {
        var t = new eui.Label;
        return this.txt_hasDrawTimes = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "99",
        t.textColor = 4187130,
        t.visible = !0,
        t.x = 170,
        t.y = 8,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/Panel3Skin.exml"] = window.contractCall.Panel3Skin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["pet1", "btnInfo_1", "grp_pet1", "hasGetPet_1", "btnGetPet_1", "pet2", "btnInfo_2", "grp_pet2", "hasGetPet_2", "btnGetPet_2", "pet3", "btnInfo_3", "grp_pet3", "hasGetPet_3", "btnGetPet_3", "pet4", "btnInfo_4", "grp_pet4", "hasGetPet_4", "btnGetPet_4", "grp_pets", "btnBuyTe", "btnPanel3All", "hasActivation", "panel3", "imgDiamond", "btnAdd", "txtCoin", "topRigth", "txt_futitle"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this._Image1_i(), this.panel3_i(), this.topRigth_i(), this.txt_futitle_i()]
    }
    __extends(e, t);
    var n = e.prototype;
    return n._Image1_i = function() {
        var t = new eui.Image;
        return t.percentHeight = 100,
        t.source = "cc_panel3_bg2_png",
        t.percentWidth = 100,
        t.x = 0,
        t.y = 0,
        t
    },
    n.panel3_i = function() {
        var t = new eui.Group;
        return this.panel3 = t,
        t.horizontalCenter = 314,
        t.width = 1400,
        t.y = 11,
        t.elementsContent = [this._Image2_i(), this._Image3_i(), this.grp_pets_i(), this.btnBuyTe_i(), this.btnPanel3All_i(), this.hasActivation_i()],
        t
    },
    n._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "cc_panel3_panel3_title_png",
        t.x = 158,
        t.y = 22,
        t
    },
    n._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "cc_panel3_futitle_png",
        t.x = 77,
        t.y = 102,
        t
    },
    n.grp_pets_i = function() {
        var t = new eui.Group;
        return this.grp_pets = t,
        t.x = 0,
        t.y = 159,
        t.elementsContent = [this._Group1_i(), this._Group2_i(), this._Group3_i(), this._Group4_i()],
        t
    },
    n._Group1_i = function() {
        var t = new eui.Group;
        return t.x = 0,
        t.y = 0,
        t.elementsContent = [this.grp_pet1_i(), this.hasGetPet_1_i(), this.btnGetPet_1_i()],
        t
    },
    n.grp_pet1_i = function() {
        var t = new eui.Group;
        return this.grp_pet1 = t,
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this.pet1_i(), this.btnInfo_1_i()],
        t
    },
    n.pet1_i = function() {
        var t = new eui.Image;
        return this.pet1 = t,
        t.source = "cc_panel3_pet1_png",
        t.x = 0,
        t.y = 0,
        t
    },
    n.btnInfo_1_i = function() {
        var t = new eui.Image;
        return this.btnInfo_1 = t,
        t.source = "cc_panel3_btninfo_png",
        t.x = 12,
        t.y = 13,
        t
    },
    n.hasGetPet_1_i = function() {
        var t = new eui.Image;
        return this.hasGetPet_1 = t,
        t.source = "cc_panel3_hasgetpet_png",
        t.visible = !0,
        t.x = 6,
        t.y = 303,
        t
    },
    n.btnGetPet_1_i = function() {
        var t = new eui.Image;
        return this.btnGetPet_1 = t,
        t.source = "cc_panel3_btngetpet_png",
        t.visible = !0,
        t.x = 6,
        t.y = 303,
        t
    },
    n._Group2_i = function() {
        var t = new eui.Group;
        return t.x = 235,
        t.y = 0,
        t.elementsContent = [this.grp_pet2_i(), this.hasGetPet_2_i(), this.btnGetPet_2_i()],
        t
    },
    n.grp_pet2_i = function() {
        var t = new eui.Group;
        return this.grp_pet2 = t,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this.pet2_i(), this.btnInfo_2_i()],
        t
    },
    n.pet2_i = function() {
        var t = new eui.Image;
        return this.pet2 = t,
        t.source = "cc_panel3_pet2_png",
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t
    },
    n.btnInfo_2_i = function() {
        var t = new eui.Image;
        return this.btnInfo_2 = t,
        t.source = "cc_panel3_btninfo_png",
        t.x = 13,
        t.y = 13,
        t
    },
    n.hasGetPet_2_i = function() {
        var t = new eui.Image;
        return this.hasGetPet_2 = t,
        t.source = "cc_panel3_hasgetpet_png",
        t.visible = !0,
        t.x = 6,
        t.y = 303,
        t
    },
    n.btnGetPet_2_i = function() {
        var t = new eui.Image;
        return this.btnGetPet_2 = t,
        t.source = "cc_panel3_btngetpet_png",
        t.visible = !0,
        t.x = 6,
        t.y = 303,
        t
    },
    n._Group3_i = function() {
        var t = new eui.Group;
        return t.x = 471,
        t.y = 0,
        t.elementsContent = [this.grp_pet3_i(), this.hasGetPet_3_i(), this.btnGetPet_3_i()],
        t
    },
    n.grp_pet3_i = function() {
        var t = new eui.Group;
        return this.grp_pet3 = t,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this.pet3_i(), this.btnInfo_3_i()],
        t
    },
    n.pet3_i = function() {
        var t = new eui.Image;
        return this.pet3 = t,
        t.source = "cc_panel3_pet3_png",
        t.x = 0,
        t.y = 0,
        t
    },
    n.btnInfo_3_i = function() {
        var t = new eui.Image;
        return this.btnInfo_3 = t,
        t.source = "cc_panel3_btninfo_png",
        t.x = 12,
        t.y = 13,
        t
    },
    n.hasGetPet_3_i = function() {
        var t = new eui.Image;
        return this.hasGetPet_3 = t,
        t.source = "cc_panel3_hasgetpet_png",
        t.visible = !0,
        t.x = 6,
        t.y = 303,
        t
    },
    n.btnGetPet_3_i = function() {
        var t = new eui.Image;
        return this.btnGetPet_3 = t,
        t.source = "cc_panel3_btngetpet_png",
        t.visible = !0,
        t.x = 6,
        t.y = 303,
        t
    },
    n._Group4_i = function() {
        var t = new eui.Group;
        return t.x = 706,
        t.y = 0,
        t.elementsContent = [this.grp_pet4_i(), this.hasGetPet_4_i(), this.btnGetPet_4_i()],
        t
    },
    n.grp_pet4_i = function() {
        var t = new eui.Group;
        return this.grp_pet4 = t,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this.pet4_i(), this.btnInfo_4_i()],
        t
    },
    n.pet4_i = function() {
        var t = new eui.Image;
        return this.pet4 = t,
        t.source = "cc_panel3_pet4_png",
        t.x = 0,
        t.y = 0,
        t
    },
    n.btnInfo_4_i = function() {
        var t = new eui.Image;
        return this.btnInfo_4 = t,
        t.source = "cc_panel3_btninfo_png",
        t.x = 13,
        t.y = 13,
        t
    },
    n.hasGetPet_4_i = function() {
        var t = new eui.Image;
        return this.hasGetPet_4 = t,
        t.source = "cc_panel3_hasgetpet_png",
        t.visible = !0,
        t.x = 6,
        t.y = 303,
        t
    },
    n.btnGetPet_4_i = function() {
        var t = new eui.Image;
        return this.btnGetPet_4 = t,
        t.source = "cc_panel3_btngetpet_png",
        t.visible = !0,
        t.x = 6,
        t.y = 303,
        t
    },
    n.btnBuyTe_i = function() {
        var t = new eui.Image;
        return this.btnBuyTe = t,
        t.source = "cc_panel3_btnbuyte_png",
        t.x = 375,
        t.y = 537,
        t
    },
    n.btnPanel3All_i = function() {
        var t = new eui.Image;
        return this.btnPanel3All = t,
        t.source = "cc_panel3_btnpanel3all_png",
        t.visible = !0,
        t.x = 767,
        t.y = 573,
        t
    },
    n.hasActivation_i = function() {
        var t = new eui.Image;
        return this.hasActivation = t,
        t.source = "cc_panel3_hasactivation_png",
        t.visible = !1,
        t.x = 401,
        t.y = 547,
        t
    },
    n.topRigth_i = function() {
        var t = new eui.Group;
        return this.topRigth = t,
        t.right = 32,
        t.width = 147,
        t.y = 10,
        t.elementsContent = [this._Image4_i(), this.imgDiamond_i(), this.btnAdd_i(), this.txtCoin_i()],
        t
    },
    n._Image4_i = function() {
        var t = new eui.Image;
        return t.source = "cc_panel3_img_di2_png",
        t.x = 10,
        t.y = 5,
        t
    },
    n.imgDiamond_i = function() {
        var t = new eui.Image;
        return this.imgDiamond = t,
        t.height = 30,
        t.width = 30,
        t.x = 0,
        t.y = 0,
        t
    },
    n.btnAdd_i = function() {
        var t = new eui.Image;
        return this.btnAdd = t,
        t.source = "cc_panel3_btnadd_png",
        t.x = 126,
        t.y = 5,
        t
    },
    n.txtCoin_i = function() {
        var t = new eui.Label;
        return this.txtCoin = t,
        t.fontFamily = "MFShangHei",
        t.size = 18.0101510119682,
        t.text = "99999",
        t.textColor = 12834813,
        t.visible = !0,
        t.x = 51,
        t.y = 6,
        t
    },
    n.txt_futitle_i = function() {
        var t = new eui.Label;
        return this.txt_futitle = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = 69.5,
        t.size = 18,
        t.stroke = 1,
        t.strokeColor = 2448520,
        t.text = "    激活特性后，将师徒4人全部放于出战背包或待命背包即可开启特效：\n战斗中永久看穿对方精灵血量，且我方首发精灵全属性+1（仅限BOSS对战）",
        t.textColor = 12834813,
        t.y = 119,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/Panel4Skin.exml"] = window.contractCall.Panel4Skin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg3", "pet3", "btnInfo_3", "grp_pet3", "hasGetPet_3", "btnGetPet_3", "pet1", "btnInfo_1", "grp_pet1", "hasGetPet_1", "btnGetPet_1", "pet2", "btnInfo_2", "grp_pet2", "hasGetPet_2", "btnGetPet_2", "pet4", "btnInfo_4", "grp_pet4", "hasGetPet_4", "btnGetPet_4", "grp_pets", "btnPanel4All", "hasGet", "btnCheckEff", "btnOpenEff", "hasActivation", "content", "imgDiamond", "btnAdd", "txtCoin", "topRigth", "txt_futitle"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg3_i(), this.content_i(), this.topRigth_i(), this.txt_futitle_i()]
    }
    __extends(e, t);
    var n = e.prototype;
    return n.bg3_i = function() {
        var t = new eui.Image;
        return this.bg3 = t,
        t.percentHeight = 100,
        t.source = "cc_panel4_bg3_png",
        t.percentWidth = 100,
        t.x = 0,
        t.y = 0,
        t
    },
    n.content_i = function() {
        var t = new eui.Group;
        return this.content = t,
        t.horizontalCenter = 311,
        t.width = 1400,
        t.y = 0,
        t.elementsContent = [this.grp_pets_i(), this._Image1_i(), this._Image2_i(), this.btnPanel4All_i(), this.hasGet_i(), this.btnCheckEff_i(), this.btnOpenEff_i(), this.hasActivation_i()],
        t
    },
    n.grp_pets_i = function() {
        var t = new eui.Group;
        return this.grp_pets = t,
        t.x = 0,
        t.y = 195,
        t.elementsContent = [this._Group1_i(), this._Group2_i(), this._Group3_i(), this._Group4_i()],
        t
    },
    n._Group1_i = function() {
        var t = new eui.Group;
        return t.visible = !0,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this.grp_pet3_i(), this.hasGetPet_3_i(), this.btnGetPet_3_i()],
        t
    },
    n.grp_pet3_i = function() {
        var t = new eui.Group;
        return this.grp_pet3 = t,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this.pet3_i(), this.btnInfo_3_i()],
        t
    },
    n.pet3_i = function() {
        var t = new eui.Image;
        return this.pet3 = t,
        t.source = "cc_panel4_pet1_png",
        t.x = 0,
        t.y = 0,
        t
    },
    n.btnInfo_3_i = function() {
        var t = new eui.Image;
        return this.btnInfo_3 = t,
        t.source = "cc_panel3_btninfo_png",
        t.x = 12,
        t.y = 10,
        t
    },
    n.hasGetPet_3_i = function() {
        var t = new eui.Image;
        return this.hasGetPet_3 = t,
        t.source = "cc_panel3_hasgetpet_png",
        t.visible = !0,
        t.x = 6,
        t.y = 303,
        t
    },
    n.btnGetPet_3_i = function() {
        var t = new eui.Image;
        return this.btnGetPet_3 = t,
        t.source = "cc_panel4_btn98_png",
        t.visible = !0,
        t.x = 6,
        t.y = 303,
        t
    },
    n._Group2_i = function() {
        var t = new eui.Group;
        return t.x = 235,
        t.y = 0,
        t.elementsContent = [this.grp_pet1_i(), this.hasGetPet_1_i(), this.btnGetPet_1_i()],
        t
    },
    n.grp_pet1_i = function() {
        var t = new eui.Group;
        return this.grp_pet1 = t,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this.pet1_i(), this.btnInfo_1_i()],
        t
    },
    n.pet1_i = function() {
        var t = new eui.Image;
        return this.pet1 = t,
        t.source = "cc_panel4_pet2_png",
        t.x = 0,
        t.y = 0,
        t
    },
    n.btnInfo_1_i = function() {
        var t = new eui.Image;
        return this.btnInfo_1 = t,
        t.source = "cc_panel3_btninfo_png",
        t.x = 13,
        t.y = 10,
        t
    },
    n.hasGetPet_1_i = function() {
        var t = new eui.Image;
        return this.hasGetPet_1 = t,
        t.source = "cc_panel3_hasgetpet_png",
        t.visible = !0,
        t.x = 6,
        t.y = 303,
        t
    },
    n.btnGetPet_1_i = function() {
        var t = new eui.Image;
        return this.btnGetPet_1 = t,
        t.source = "cc_panel4_btn98_png",
        t.visible = !0,
        t.x = 6,
        t.y = 303,
        t
    },
    n._Group3_i = function() {
        var t = new eui.Group;
        return t.x = 471,
        t.y = 0,
        t.elementsContent = [this.grp_pet2_i(), this.hasGetPet_2_i(), this.btnGetPet_2_i()],
        t
    },
    n.grp_pet2_i = function() {
        var t = new eui.Group;
        return this.grp_pet2 = t,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this.pet2_i(), this.btnInfo_2_i()],
        t
    },
    n.pet2_i = function() {
        var t = new eui.Image;
        return this.pet2 = t,
        t.source = "cc_panel4_pet3_png",
        t.x = 0,
        t.y = 0,
        t
    },
    n.btnInfo_2_i = function() {
        var t = new eui.Image;
        return this.btnInfo_2 = t,
        t.source = "cc_panel3_btninfo_png",
        t.visible = !0,
        t.x = 12,
        t.y = 10,
        t
    },
    n.hasGetPet_2_i = function() {
        var t = new eui.Image;
        return this.hasGetPet_2 = t,
        t.source = "cc_panel3_hasgetpet_png",
        t.visible = !0,
        t.x = 6,
        t.y = 303,
        t
    },
    n.btnGetPet_2_i = function() {
        var t = new eui.Image;
        return this.btnGetPet_2 = t,
        t.source = "cc_panel4_btn98_png",
        t.visible = !0,
        t.x = 6,
        t.y = 303,
        t
    },
    n._Group4_i = function() {
        var t = new eui.Group;
        return t.x = 706,
        t.y = 0,
        t.elementsContent = [this.grp_pet4_i(), this.hasGetPet_4_i(), this.btnGetPet_4_i()],
        t
    },
    n.grp_pet4_i = function() {
        var t = new eui.Group;
        return this.grp_pet4 = t,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this.pet4_i(), this.btnInfo_4_i()],
        t
    },
    n.pet4_i = function() {
        var t = new eui.Image;
        return this.pet4 = t,
        t.source = "cc_panel4_pet4_png",
        t.x = 0,
        t.y = 0,
        t
    },
    n.btnInfo_4_i = function() {
        var t = new eui.Image;
        return this.btnInfo_4 = t,
        t.source = "cc_panel3_btninfo_png",
        t.x = 13,
        t.y = 10,
        t
    },
    n.hasGetPet_4_i = function() {
        var t = new eui.Image;
        return this.hasGetPet_4 = t,
        t.source = "cc_panel3_hasgetpet_png",
        t.visible = !0,
        t.x = 6,
        t.y = 303,
        t
    },
    n.btnGetPet_4_i = function() {
        var t = new eui.Image;
        return this.btnGetPet_4 = t,
        t.source = "cc_panel4_btn128_png",
        t.visible = !0,
        t.x = 6,
        t.y = 303,
        t
    },
    n._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "cc_panel4_title_png",
        t.x = 107,
        t.y = 0,
        t
    },
    n._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 69,
        t.source = "cc_panel3_futitle_png",
        t.width = 828,
        t.x = 49,
        t.y = 117,
        t
    },
    n.btnPanel4All_i = function() {
        var t = new eui.Image;
        return this.btnPanel4All = t,
        t.source = "cc_panel3_btnpanel3all_png",
        t.x = 767,
        t.y = 584,
        t
    },
    n.hasGet_i = function() {
        var t = new eui.Image;
        return this.hasGet = t,
        t.source = "cc_panel3_hasget_png",
        t.visible = !1,
        t.x = 790,
        t.y = 584,
        t
    },
    n.btnCheckEff_i = function() {
        var t = new eui.Image;
        return this.btnCheckEff = t,
        t.source = "cc_panel1_btncheckeffect_png",
        t.x = 279,
        t.y = 577,
        t
    },
    n.btnOpenEff_i = function() {
        var t = new eui.Image;
        return this.btnOpenEff = t,
        t.source = "cc_panel2_btnopen_png",
        t.visible = !0,
        t.x = 512,
        t.y = 577,
        t
    },
    n.hasActivation_i = function() {
        var t = new eui.Image;
        return this.hasActivation = t,
        t.source = "cc_panel3_hasactivation_png",
        t.visible = !1,
        t.x = 512,
        t.y = 577,
        t
    },
    n.topRigth_i = function() {
        var t = new eui.Group;
        return this.topRigth = t,
        t.right = 32,
        t.width = 147,
        t.y = 10,
        t.elementsContent = [this._Image3_i(), this.imgDiamond_i(), this.btnAdd_i(), this.txtCoin_i()],
        t
    },
    n._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "cc_panel3_img_di2_png",
        t.x = 10,
        t.y = 5,
        t
    },
    n.imgDiamond_i = function() {
        var t = new eui.Image;
        return this.imgDiamond = t,
        t.height = 30,
        t.width = 30,
        t.x = 0,
        t.y = 0,
        t
    },
    n.btnAdd_i = function() {
        var t = new eui.Image;
        return this.btnAdd = t,
        t.source = "cc_panel3_btnadd_png",
        t.x = 126,
        t.y = 5,
        t
    },
    n.txtCoin_i = function() {
        var t = new eui.Label;
        return this.txtCoin = t,
        t.fontFamily = "MFShangHei",
        t.size = 18.0101510119682,
        t.text = "99999",
        t.textColor = 12834813,
        t.visible = !0,
        t.x = 51,
        t.y = 6,
        t
    },
    n.txt_futitle_i = function() {
        var t = new eui.Label;
        return this.txt_futitle = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = 52,
        t.size = 18,
        t.stroke = 1,
        t.strokeColor = 2448520,
        t.text = "    激活特性后，将师徒4人全部放于出战背包或待命背包即可开启特效：\n战斗中永久看穿对方精灵血量，且我方首发精灵全属性+1（仅限BOSS对战）",
        t.textColor = 12834813,
        t.y = 123,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/pop/ContractpopSkin.exml"] = window.ContractpopSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bgPage", "uiPage", "itemIcon_5", "itemIcon_4", "itemIcon_3", "itemIcon_2", "itemIcon_1", "titleTip", "title", "closeBtn", "btnRatePop", "btnDrawOne", "btnDrawTen", "img_di2", "txtCoin2", "icon_gold", "imge_add", "iconBg_2", "iconTxtNum_2", "icon_2", "getItemBtn", "iconBg_1", "iconTxtNum_1", "icon_1", "gr_rgihtMc"],
        this.height = 640,
        this.width = 1134,
        this.elementsContent = [this.bgPage_i(), this.uiPage_i(), this.itemIcon_5_i(), this.itemIcon_4_i(), this.itemIcon_3_i(), this.itemIcon_2_i(), this.itemIcon_1_i(), this.titleTip_i(), this.title_i(), this.closeBtn_i(), this.btnRatePop_i(), this.btnDrawOne_i(), this.btnDrawTen_i(), this.gr_rgihtMc_i()]
    }
    __extends(e, t);
    var n = e.prototype;
    return n.bgPage_i = function() {
        var t = new eui.Image;
        return this.bgPage = t,
        t.height = 640,
        t.source = "contractpop_bgpage_png",
        t.visible = !0,
        t.width = 3e3,
        t.x = -1e3,
        t.y = 0,
        t
    },
    n.uiPage_i = function() {
        var t = new eui.Image;
        return this.uiPage = t,
        t.source = "contractpop_uipage_png",
        t.x = 99,
        t.y = 0,
        t
    },
    n.itemIcon_5_i = function() {
        var t = new eui.Image;
        return this.itemIcon_5 = t,
        t.source = "contractpop_itemicon_5_png",
        t.x = 510,
        t.y = 229,
        t
    },
    n.itemIcon_4_i = function() {
        var t = new eui.Image;
        return this.itemIcon_4 = t,
        t.source = "contractpop_itemicon_4_png",
        t.x = 783,
        t.y = 334,
        t
    },
    n.itemIcon_3_i = function() {
        var t = new eui.Image;
        return this.itemIcon_3 = t,
        t.source = "contractpop_itemicon_3_png",
        t.x = 294,
        t.y = 334,
        t
    },
    n.itemIcon_2_i = function() {
        var t = new eui.Image;
        return this.itemIcon_2 = t,
        t.source = "contractpop_itemicon_2_png",
        t.x = 869,
        t.y = 178,
        t
    },
    n.itemIcon_1_i = function() {
        var t = new eui.Image;
        return this.itemIcon_1 = t,
        t.source = "contractpop_itemicon_1_png",
        t.x = 208,
        t.y = 178,
        t
    },
    n.titleTip_i = function() {
        var t = new eui.Image;
        return this.titleTip = t,
        t.source = "contractpop_titletip_png",
        t.x = 297,
        t.y = 445,
        t
    },
    n.title_i = function() {
        var t = new eui.Image;
        return this.title = t,
        t.source = "contractpop_title_png",
        t.x = 400,
        t.y = 62,
        t
    },
    n.closeBtn_i = function() {
        var t = new eui.Image;
        return this.closeBtn = t,
        t.height = 33,
        t.source = "common_pop_btn_close_png",
        t.width = 33,
        t.x = 1071,
        t.y = 80,
        t
    },
    n.btnRatePop_i = function() {
        var t = new eui.Image;
        return this.btnRatePop = t,
        t.source = "contractpop_btnratepop_png",
        t.x = 666,
        t.y = 104,
        t
    },
    n.btnDrawOne_i = function() {
        var t = new eui.Image;
        return this.btnDrawOne = t,
        t.source = "contractpop_btndrawone_png",
        t.x = 248,
        t.y = 531,
        t
    },
    n.btnDrawTen_i = function() {
        var t = new eui.Image;
        return this.btnDrawTen = t,
        t.source = "contractpop_btndrawten_png",
        t.x = 708,
        t.y = 531,
        t
    },
    n.gr_rgihtMc_i = function() {
        var t = new eui.Group;
        return this.gr_rgihtMc = t,
        t.x = 548,
        t.y = 8,
        t.elementsContent = [this.img_di2_i(), this.txtCoin2_i(), this.icon_gold_i(), this.imge_add_i(), this.iconBg_2_i(), this.iconTxtNum_2_i(), this.icon_2_i(), this.getItemBtn_i(), this.iconBg_1_i(), this.iconTxtNum_1_i(), this.icon_1_i()],
        t
    },
    n.img_di2_i = function() {
        var t = new eui.Image;
        return this.img_di2 = t,
        t.source = "cc_panel1_img_di2_png",
        t.x = 412,
        t.y = 8,
        t
    },
    n.txtCoin2_i = function() {
        var t = new eui.Label;
        return this.txtCoin2 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18.0101510119682,
        t.text = "99999",
        t.textAlign = "left",
        t.textColor = 12834813,
        t.x = 453,
        t.y = 11,
        t
    },
    n.icon_gold_i = function() {
        var t = new eui.Image;
        return this.icon_gold = t,
        t.height = 30,
        t.width = 30,
        t.x = 402,
        t.y = 0,
        t
    },
    n.imge_add_i = function() {
        var t = new eui.Image;
        return this.imge_add = t,
        t.source = "cc_panel1_imge_add_png",
        t.x = 528,
        t.y = 8,
        t
    },
    n.iconBg_2_i = function() {
        var t = new eui.Image;
        return this.iconBg_2 = t,
        t.source = "cc_panel1_iconbg_2_png",
        t.x = 210,
        t.y = 8,
        t
    },
    n.iconTxtNum_2_i = function() {
        var t = new eui.Label;
        return this.iconTxtNum_2 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18.0101510119682,
        t.text = "99999",
        t.textAlign = "left",
        t.textColor = 12834813,
        t.x = 250,
        t.y = 11,
        t
    },
    n.icon_2_i = function() {
        var t = new eui.Image;
        return this.icon_2 = t,
        t.height = 30,
        t.width = 30,
        t.x = 203,
        t.y = 0,
        t
    },
    n.getItemBtn_i = function() {
        var t = new eui.Image;
        return this.getItemBtn = t,
        t.source = "cc_getitembtn_png",
        t.x = 323,
        t.y = 8,
        t
    },
    n.iconBg_1_i = function() {
        var t = new eui.Image;
        return this.iconBg_1 = t,
        t.source = "cc_panel1_iconbg_1_png",
        t.x = 39,
        t.y = 8,
        t
    },
    n.iconTxtNum_1_i = function() {
        var t = new eui.Label;
        return this.iconTxtNum_1 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18.0101510119682,
        t.text = "99999",
        t.textAlign = "left",
        t.textColor = 12834813,
        t.x = 78,
        t.y = 11,
        t
    },
    n.icon_1_i = function() {
        var t = new eui.Image;
        return this.icon_1 = t,
        t.height = 30,
        t.width = 30,
        t.x = 31,
        t.y = 0,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/pop/OpenPopSkin.exml"] = window.contractCall.OpenPopSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["btnClose", "btnHui", "btnZuan", "txxCoin1", "left", "txxCoin2", "rigth", "content", "openPop"],
        this.height = 286,
        this.width = 482,
        this.elementsContent = [this.openPop_i()]
    }
    __extends(e, t);
    var n = e.prototype;
    return n.openPop_i = function() {
        var t = new eui.Group;
        return this.openPop = t,
        t.cacheAsBitmap = !0,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image1_i(), this._Image2_i(), this.btnClose_i(), this._Image3_i(), this.btnHui_i(), this.btnZuan_i(), this.content_i()],
        t
    },
    n._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 286,
        t.source = "common_s9_pop_bg4_png",
        t.visible = !0,
        t.width = 482,
        t.x = 0,
        t.y = 1,
        t
    },
    n._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "common_pop_up_bg_m_png",
        t.visible = !0,
        t.width = 478,
        t.x = 0,
        t.y = 0,
        t
    },
    n.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.height = 33,
        t.source = "common_pop_btn_close_png",
        t.visible = !0,
        t.width = 33,
        t.x = 440,
        t.y = 0,
        t
    },
    n._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "cc_open_pop_yhgg_png",
        t.x = 31,
        t.y = 0,
        t
    },
    n.btnHui_i = function() {
        var t = new eui.Image;
        return this.btnHui = t,
        t.source = "cc_open_pop_bthui_png",
        t.x = 274,
        t.y = 214,
        t
    },
    n.btnZuan_i = function() {
        var t = new eui.Image;
        return this.btnZuan = t,
        t.source = "cc_open_pop_btnzuan_png",
        t.x = 67,
        t.y = 214,
        t
    },
    n.content_i = function() {
        var t = new eui.Group;
        return this.content = t,
        t.x = 98,
        t.y = 86,
        t.elementsContent = [this.left_i(), this.rigth_i(), this._Label1_i()],
        t
    },
    n.left_i = function() {
        var t = new eui.Group;
        return this.left = t,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image4_i(), this.txxCoin1_i(), this._Image5_i()],
        t
    },
    n._Image4_i = function() {
        var t = new eui.Image;
        return t.source = "cc_open_pop_l_kb_115_png",
        t.x = 0,
        t.y = 0,
        t
    },
    n.txxCoin1_i = function() {
        var t = new eui.Label;
        return this.txxCoin1 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "999/68",
        t.textAlign = "center",
        t.textColor = 8631282,
        t.width = 72,
        t.x = 0,
        t.y = 75,
        t
    },
    n._Image5_i = function() {
        var t = new eui.Image;
        return t.source = "cc_open_pop_zuanshi_png",
        t.x = 16,
        t.y = 19,
        t
    },
    n.rigth_i = function() {
        var t = new eui.Group;
        return this.rigth = t,
        t.x = 207,
        t.y = 0,
        t.elementsContent = [this._Image6_i(), this.txxCoin2_i(), this._Image7_i()],
        t
    },
    n._Image6_i = function() {
        var t = new eui.Image;
        return t.source = "cc_open_pop_l_kb_115_png",
        t.x = 0,
        t.y = 0,
        t
    },
    n.txxCoin2_i = function() {
        var t = new eui.Label;
        return this.txxCoin2 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "999/3",
        t.textAlign = "center",
        t.textColor = 8631282,
        t.width = 72,
        t.x = 0,
        t.y = 75,
        t
    },
    n._Image7_i = function() {
        var t = new eui.Image;
        return t.source = "cc_open_pop_tc_11_kb_png",
        t.x = 15,
        t.y = 20,
        t
    },
    n._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 20,
        t.text = "或",
        t.textColor = 8631282,
        t.x = 129,
        t.y = 26,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/pop/ResultPopSkin.exml"] = window.contractCall.ResultPopSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["btnClose", "popbg", "resultPop"],
        this.height = 435,
        this.width = 753,
        this.elementsContent = [this.resultPop_i()]
    }
    __extends(e, t);
    var n = e.prototype;
    return n.resultPop_i = function() {
        var t = new eui.Group;
        return this.resultPop = t,
        t.cacheAsBitmap = !0,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this.popbg_i(), this._Image3_i(), this._Image4_i()],
        t
    },
    n.popbg_i = function() {
        var t = new eui.Group;
        return this.popbg = t,
        t.x = 0,
        t.y = 4,
        t.elementsContent = [this._Image1_i(), this._Image2_i(), this.btnClose_i()],
        t
    },
    n._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 430,
        t.source = "common_s9_pop_bg4_png",
        t.visible = !0,
        t.width = 753,
        t.x = 0,
        t.y = 1,
        t
    },
    n._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 34,
        t.source = "common_pop_up_bg_big_png",
        t.visible = !0,
        t.width = 748,
        t.x = 0,
        t.y = 0,
        t
    },
    n.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.height = 33,
        t.source = "common_pop_btn_close_png",
        t.visible = !0,
        t.width = 33,
        t.x = 712,
        t.y = 0,
        t
    },
    n._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "cc_result_pop_yhgg_png",
        t.x = 31,
        t.y = 0,
        t
    },
    n._Image4_i = function() {
        var t = new eui.Image;
        return t.source = "cc_result_pop_popbg_png",
        t.x = 17,
        t.y = 46,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/pop/SanguoSkin.exml"] = window.contractCall.SanguoSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["btnClose", "pet0", "pet1", "pet2", "pet3", "pet4", "pet5", "pet6", "pet7", "pet8", "txt_b", "txt_a", "sangupPop"],
        this.height = 431,
        this.width = 753,
        this.elementsContent = [this.sangupPop_i()]
    }
    __extends(e, t);
    var n = e.prototype;
    return n.sangupPop_i = function() {
        var t = new eui.Group;
        return this.sangupPop = t,
        t.cacheAsBitmap = !0,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Group1_i(), this._Image4_i(), this._Image5_i(), this._Image6_i(), this._Group2_i(), this._Group3_i(), this._Group4_i(), this._Image19_i(), this._Image20_i(), this._Image21_i(), this._Image22_i(), this._Image23_i(), this._Image24_i(), this._Image25_i(), this.txt_b_i(), this.txt_a_i()],
        t
    },
    n._Group1_i = function() {
        var t = new eui.Group;
        return t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image1_i(), this._Image2_i(), this._Image3_i(), this.btnClose_i()],
        t
    },
    n._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 430,
        t.scale9Grid = new egret.Rectangle(8, 8, 9, 9),
        t.source = "common_s9_pop_bg4_png",
        t.width = 753,
        t.x = 0,
        t.y = 1,
        t
    },
    n._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 34,
        t.source = "common_pop_up_bg_big_png",
        t.visible = !0,
        t.width = 748,
        t.x = 0,
        t.y = 0,
        t
    },
    n._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "cc_sanguo_yhgg_png",
        t.x = 36,
        t.y = 2,
        t
    },
    n.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.height = 33,
        t.source = "common_pop_btn_close_png",
        t.width = 33,
        t.x = 712,
        t.y = 0,
        t
    },
    n._Image4_i = function() {
        var t = new eui.Image;
        return t.source = "cc_sanguo_guan_png",
        t.x = 151,
        t.y = 48,
        t
    },
    n._Image5_i = function() {
        var t = new eui.Image;
        return t.source = "cc_sanguo_zhang_png",
        t.x = 250,
        t.y = 46,
        t
    },
    n._Image6_i = function() {
        var t = new eui.Image;
        return t.source = "cc_sanguo_liu_png",
        t.x = 51,
        t.y = 48,
        t
    },
    n._Group2_i = function() {
        var t = new eui.Group;
        return t.x = 17,
        t.y = 78,
        t.elementsContent = [this._Image7_i(), this._Label1_i(), this._Label2_i(), this._Label3_i(), this._Image8_i(), this._Image9_i(), this._Image10_i(), this.pet0_i(), this.pet1_i(), this.pet2_i()],
        t
    },
    n._Image7_i = function() {
        var t = new eui.Image;
        return t.source = "cc_sanguo_zu_69_png",
        t.x = 0,
        t.y = 0,
        t
    },
    n._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "昭烈帝刘备",
        t.textColor = 9025023,
        t.x = 7,
        t.y = 86,
        t
    },
    n._Label2_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "波尔斯",
        t.textColor = 9025023,
        t.x = 23,
        t.y = 191,
        t
    },
    n._Label3_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "波波",
        t.textColor = 9025023,
        t.x = 31,
        t.y = 296,
        t
    },
    n._Image8_i = function() {
        var t = new eui.Image;
        return t.source = "cc_sanguo_la_kaobei__png",
        t.x = 11,
        t.y = 12,
        t
    },
    n._Image9_i = function() {
        var t = new eui.Image;
        return t.source = "cc_sanguo_la_kaobei__png",
        t.x = 11,
        t.y = 117,
        t
    },
    n._Image10_i = function() {
        var t = new eui.Image;
        return t.source = "cc_sanguo_la_kaobei__png",
        t.x = 11,
        t.y = 222,
        t
    },
    n.pet0_i = function() {
        var t = new eui.Image;
        return this.pet0 = t,
        t.height = 70,
        t.source = "",
        t.width = 70,
        t.x = 11,
        t.y = 12,
        t
    },
    n.pet1_i = function() {
        var t = new eui.Image;
        return this.pet1 = t,
        t.height = 70,
        t.source = "",
        t.width = 70,
        t.x = 11,
        t.y = 117,
        t
    },
    n.pet2_i = function() {
        var t = new eui.Image;
        return this.pet2 = t,
        t.height = 70,
        t.source = "",
        t.width = 70,
        t.x = 11,
        t.y = 222,
        t
    },
    n._Group3_i = function() {
        var t = new eui.Group;
        return t.x = 117,
        t.y = 78,
        t.elementsContent = [this._Image11_i(), this._Label4_i(), this._Label5_i(), this._Label6_i(), this._Image12_i(), this._Image13_i(), this._Image14_i(), this.pet3_i(), this.pet4_i(), this.pet5_i()],
        t
    },
    n._Image11_i = function() {
        var t = new eui.Image;
        return t.source = "cc_sanguo_zu_69_png",
        t.x = 0,
        t.y = 0,
        t
    },
    n._Label4_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "武圣关羽",
        t.textColor = 9025023,
        t.x = 14,
        t.y = 86,
        t
    },
    n._Label5_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "奥托斯",
        t.textColor = 9025023,
        t.x = 22,
        t.y = 191,
        t
    },
    n._Label6_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "奥托",
        t.textColor = 9025023,
        t.x = 30,
        t.y = 296,
        t
    },
    n._Image12_i = function() {
        var t = new eui.Image;
        return t.source = "cc_sanguo_la_kaobei__png",
        t.x = 11,
        t.y = 12,
        t
    },
    n._Image13_i = function() {
        var t = new eui.Image;
        return t.source = "cc_sanguo_la_kaobei__png",
        t.x = 11,
        t.y = 117,
        t
    },
    n._Image14_i = function() {
        var t = new eui.Image;
        return t.source = "cc_sanguo_la_kaobei__png",
        t.x = 11,
        t.y = 222,
        t
    },
    n.pet3_i = function() {
        var t = new eui.Image;
        return this.pet3 = t,
        t.height = 70,
        t.source = "",
        t.visible = !0,
        t.width = 70,
        t.x = 11,
        t.y = 12,
        t
    },
    n.pet4_i = function() {
        var t = new eui.Image;
        return this.pet4 = t,
        t.height = 70,
        t.source = "",
        t.width = 70,
        t.x = 11,
        t.y = 117,
        t
    },
    n.pet5_i = function() {
        var t = new eui.Image;
        return this.pet5 = t,
        t.height = 70,
        t.source = "",
        t.width = 70,
        t.x = 11,
        t.y = 222,
        t
    },
    n._Group4_i = function() {
        var t = new eui.Group;
        return t.x = 217,
        t.y = 78,
        t.elementsContent = [this._Image15_i(), this._Label7_i(), this._Label8_i(), this._Label9_i(), this._Image16_i(), this._Image17_i(), this._Image18_i(), this.pet6_i(), this.pet7_i(), this.pet8_i()],
        t
    },
    n._Image15_i = function() {
        var t = new eui.Image;
        return t.source = "cc_sanguo_zu_69_png",
        t.x = 0,
        t.y = 0,
        t
    },
    n._Label7_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "万人敌张飞",
        t.textColor = 9025023,
        t.x = 6,
        t.y = 86,
        t
    },
    n._Label8_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "埃米斯",
        t.textColor = 9025023,
        t.x = 22,
        t.y = 191,
        t
    },
    n._Label9_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "埃米",
        t.textColor = 9025023,
        t.x = 30,
        t.y = 296,
        t
    },
    n._Image16_i = function() {
        var t = new eui.Image;
        return t.source = "cc_sanguo_la_kaobei__png",
        t.x = 11,
        t.y = 12,
        t
    },
    n._Image17_i = function() {
        var t = new eui.Image;
        return t.source = "cc_sanguo_la_kaobei__png",
        t.x = 11,
        t.y = 117,
        t
    },
    n._Image18_i = function() {
        var t = new eui.Image;
        return t.source = "cc_sanguo_la_kaobei__png",
        t.x = 11,
        t.y = 222,
        t
    },
    n.pet6_i = function() {
        var t = new eui.Image;
        return this.pet6 = t,
        t.height = 70,
        t.source = "",
        t.width = 70,
        t.x = 11,
        t.y = 12,
        t
    },
    n.pet7_i = function() {
        var t = new eui.Image;
        return this.pet7 = t,
        t.height = 70,
        t.source = "",
        t.width = 70,
        t.x = 11,
        t.y = 117,
        t
    },
    n.pet8_i = function() {
        var t = new eui.Image;
        return this.pet8 = t,
        t.height = 70,
        t.source = "",
        t.width = 70,
        t.x = 11,
        t.y = 222,
        t
    },
    n._Image19_i = function() {
        var t = new eui.Image;
        return t.source = "cc_sanguo_down_1_png",
        t.x = 487,
        t.y = 231,
        t
    },
    n._Image20_i = function() {
        var t = new eui.Image;
        return t.height = 165,
        t.scale9Grid = new egret.Rectangle(4, 4, 4, 4),
        t.source = "cc_sanguo_juxing_316_png",
        t.width = 397,
        t.x = 332,
        t.y = 48,
        t
    },
    n._Image21_i = function() {
        var t = new eui.Image;
        return t.height = 123,
        t.scale9Grid = new egret.Rectangle(4, 4, 4, 4),
        t.source = "cc_sanguo_juxing_316_png",
        t.visible = !0,
        t.width = 397,
        t.x = 332,
        t.y = 286,
        t
    },
    n._Image22_i = function() {
        var t = new eui.Image;
        return t.source = "cc_sanguo_jcxg_png",
        t.x = 487,
        t.y = 59,
        t
    },
    n._Image23_i = function() {
        var t = new eui.Image;
        return t.source = "cc_sanguo_jhxg_png",
        t.x = 487,
        t.y = 297,
        t
    },
    n._Image24_i = function() {
        var t = new eui.Image;
        return t.source = "cc_sanguo_xz_24_kb_3_png",
        t.x = 580,
        t.y = 224,
        t
    },
    n._Image25_i = function() {
        var t = new eui.Image;
        return t.source = "cc_sanguo_zgwl_png",
        t.x = 603,
        t.y = 218,
        t
    },
    n.txt_b_i = function() {
        var t = new eui.Label;
        return this.txt_b = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "昭烈帝刘备/武圣关羽/万人敌张飞和卧龙诸葛同时处于背包时，在场精灵每回合结束后恢复20点体力，最多可叠加至60点\n（与基础效果互相不可叠加)\n",
        t.textColor = 16765477,
        t.width = 363,
        t.x = 348,
        t.y = 324,
        t
    },
    n.txt_a_i = function() {
        var t = new eui.Label;
        return this.txt_a = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "刘、关、张三人组中的任意一人处于背包时，在场精灵每回合结束后恢复15点体力，最多可叠加至45点\n注：\n昭烈帝刘备、波尔斯、波波互相不可叠加\n武圣关羽、奥托斯、奥托互相不可叠加\n万人敌张飞、埃米斯、艾米互相不可叠加\n",
        t.textColor = 12834813,
        t.width = 363,
        t.x = 348,
        t.y = 87,
        t
    },
    e
} (eui.Skin);