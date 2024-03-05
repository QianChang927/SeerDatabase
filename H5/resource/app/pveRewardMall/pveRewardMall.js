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
pveRewardMall; !
function(t) {
    var e = function(t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return __extends(e, t),
        e.prototype.setData = function(t, e) {},
        e.prototype._resize = function() {},
        e.prototype.destroy = function() {
            console.log(this.constructor.name + " destroy")
        },
        e
    } (eui.Component);
    t.BaseViewPanel = e,
    __reflect(e.prototype, "pveRewardMall.BaseViewPanel")
} (pveRewardMall || (pveRewardMall = {}));
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
pveRewardMall; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t.skinName = SptPowerViewItemSkin,
            t
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            var i = this;
            e.prototype.childrenCreated.call(this),
            this.achievePoint.width = this.achievePoint.height = 80,
            this._resize(),
            ImageButtonUtil.add(this.achieveIcon,
            function() {
                if (2 == i._info.type) {
                    var t = {};
                    t.ins = i._info.realid,
                    tipsPop.TipsPop.openCounterMarkPop(t)
                } else if (7 == i._info.type) ModuleManager.showModule("petEffDescPanel", ["pet_eff_desc_panel"], i._info.boundmonster, "", AppDoStyle.NULL);
                else if (6 == i._info.type) {
                    var e = {};
                    e.id = i._info.realid,
                    tipsPop.TipsPop.openSkillPop(e)
                }
            },
            this),
            ImageButtonUtil.add(this.grp_get,
            function() {
                return PetManager.getPetInfo(PetManager.defaultTime).id != i._info.boundmonster ? void Alarm.show("请先将" + PetXMLInfo.getName(i._info.boundmonster) + "放入出战背包首发！") : ItemManager.getNumByID(i._info.coinid) < i._info.price ? void Alarm.show("所需" + ItemXMLInfo.getName(i._info.coinid) + "不足！") : void SocketConnection.sendByQueue(42395, [109, i._info.id, 1, 0],
                function() {
                    i.updateView(),
                    EventManager.dispatchEventWith(t.ConstantEvents.EVENT_UPDATE_VIEW)
                })
            },
            this),
            this.once(egret.Event.REMOVED_FROM_STAGE, this.destroy, this),
            egret.lifecycle.stage.addEventListener(egret.Event.RESIZE, this._resize, this)
        },
        i.prototype._resize = function() {
            var t = this;
            this.setTimeoutIndex = egret.setTimeout(function() {
                t.width = t.parent.width,
                t.img_arrow.width = .14 * t.width,
                t.achievePoint.x = 16 + t.img_arrow.width / 2 - 40,
                t.img_frame.x = 16 + t.img_arrow.width / 2 - 44
            },
            this, 100)
        },
        i.prototype.dataChanged = function() {
            e.prototype.dataChanged.call(this),
            this._info = this.data,
            this.initView(),
            this.updateView()
        },
        i.prototype.initView = function() {
            var t = this._info.boundmonster;
            this.achievePoint.source = ClientConfig.getPetHeadPath(t),
            this.txt_achieve.text = PetXMLInfo.getName(t),
            2 == this._info.type ? this.achieveIcon.source = ClientConfig.getMarkPath(this._info.realid) : 7 == this._info.type ? this.achieveIcon.source = "pveRewardMall_gxPet_icon_2_png": 6 == this._info.type && (this.achieveIcon.source = "pveRewardMall_gxPet_icon_1_png"),
            this.costIcon.source = ClientConfig.getItemIcon(this._info.coinid),
            this.costNum.text = this._info.price + ""
        },
        i.prototype.updateView = function() {
            var t = this;
            KTool.getBitSet([this._info.BitSetId],
            function(e) {
                244 == t._info.id || 245 == t._info.id ? KTool.getMultiValue([6773],
                function(i) {
                    var n = KTool.getBit(i[0], t._info.id - 242);
                    t.grp_get.visible = !e[0] && !n,
                    t.flag_got.visible = !!e[0] || !!n
                }) : (t.grp_get.visible = !e[0], t.flag_got.visible = !!e[0])
            })
        },
        i.prototype.destroy = function() {
            egret.clearTimeout(this.setTimeoutIndex),
            ImageButtonUtil.removeAll(this),
            egret.lifecycle.stage.removeEventListener(egret.Event.RESIZE, this._resize, this),
            this.removeChildren()
        },
        i
    } (eui.ItemRenderer);
    t.SptPowerViewItem = e,
    __reflect(e.prototype, "pveRewardMall.SptPowerViewItem")
} (pveRewardMall || (pveRewardMall = {}));
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
pveRewardMall; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            e._allData = [],
            e.typeArr = [[1, 2], [3, 4], [0, 0]];
            for (var i = config.Exchange_clt.getItems(), n = 0, r = i; n < r.length; n++) {
                var o = r[n];
                3 == o.shopid && e._allData.push(o)
            }
            return e
        }
        return __extends(e, t),
        e.getInstance = function() {
            return e._instance || (e._instance = new e),
            e._instance
        },
        Object.defineProperty(e.prototype, "allData", {
            get: function() {
                return this._allData
            },
            enumerable: !0,
            configurable: !0
        }),
        e.prototype.getAllGxPetIds = function() {
            for (var t = [], e = 0, i = this._allData; e < i.length; e++) {
                var n = i[e];
                1 === n.Subtag && t.push(n.id)
            }
            return t
        },
        e.prototype.getAllGxMarkIds = function() {
            for (var t = [], e = 0, i = this._allData; e < i.length; e++) {
                var n = i[e];
                3 === n.Subtag && t.push(n.id)
            }
            return t
        },
        e.prototype.getAllElevnKingPetIds = function() {
            for (var t = [], e = 0, i = this._allData; e < i.length; e++) {
                var n = i[e];
                2 === n.Subtag && t.push(n.id)
            }
            return t
        },
        e.prototype.getAllElevnKingMarkIds = function() {
            for (var t = [], e = 0, i = this._allData; e < i.length; e++) {
                var n = i[e];
                4 === n.Subtag && t.push(n.id)
            }
            return t
        },
        e.prototype.getAllCultureItemsIds = function(t) {
            for (var e = [], i = 0, n = this._allData; i < n.length; i++) {
                var r = n[i];
                r.Subtag === t && e.push(r.id)
            }
            return e
        },
        e.prototype.getAllSptPetIds = function() {
            for (var t = [], e = 0, i = this._allData; e < i.length; e++) {
                var n = i[e];
                5 === n.Subtag && t.push(n.id)
            }
            return t
        },
        e.prototype.getAllSptItemIds = function() {
            for (var t = [], e = 0, i = this._allData; e < i.length; e++) {
                var n = i[e];
                6 === n.Subtag && t.push(n.id)
            }
            return t
        },
        e.prototype.getAllSptAchieveIds = function() {
            for (var t = [], e = 0, i = this._allData; e < i.length; e++) {
                var n = i[e];
                7 === n.Subtag && t.push(n)
            }
            return t
        },
        e.prototype.getAllJuebanAchieveIds = function() {
            for (var t = [], e = 0, i = this._allData; e < i.length; e++) {
                var n = i[e];
                8 === n.Subtag && t.push(n)
            }
            return t
        },
        e.prototype.getAllSptPowerIds = function() {
            for (var t = [], e = 0, i = this._allData; e < i.length; e++) {
                var n = i[e];
                9 === n.Subtag && t.push(n)
            }
            return t
        },
        e.prototype.getAllSptHeadIds = function() {
            for (var t = [], e = 0, i = this._allData; e < i.length; e++) {
                var n = i[e];
                10 === n.Subtag && t.push(n)
            }
            return t
        },
        e.prototype.getInfoById = function(t) {
            for (var e = 0,
            i = this._allData; e < i.length; e++) {
                var n = i[e];
                if (n.id === t) return n
            }
            return null
        },
        e
    } (egret.EventDispatcher);
    t.DataConfigManger = e,
    __reflect(e.prototype, "pveRewardMall.DataConfigManger")
} (pveRewardMall || (pveRewardMall = {}));
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
pveRewardMall; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.labName = "",
            i.skinName = t.ParentNodeLabSkin,
            i.addEventListener(egret.Event.COMPLETE, i._updateView, i),
            i
        }
        return __extends(i, e),
        i.prototype.setData = function(t, i, n, r, o) {
            e.prototype.setData.call(this, t, i, n, r, o),
            this.txtName.text = this._customData.name,
            this.labName = this._customData.name
        },
        i.prototype.childrenCreated = function() {
            if (e.prototype.childrenCreated.call(this), this.percentWidth = 100, this._customData) {
                var t = this.selected ? "down": "up";
                this.currentState = t
            }
        },
        i.prototype._updateView = function() {
            var t = this.selected ? "down": "up";
            this.currentState = t,
            this.txtName.text = this.labName,
            this._customData.isLast && (this.selected ? this.bg.source = "common_tab_down_bg_png": this.bg.source = "common_tab_up2_bg_png")
        },
        i.prototype._onChangeSelected = function() {
            e.prototype._onChangeSelected.call(this),
            this._updateView()
        },
        i
    } (common.ui.treemenu.FirstComponent);
    t.ParentNode = e,
    __reflect(e.prototype, "pveRewardMall.ParentNode");
    var i = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.skinName = t.ChildNodeLabSkin,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            if (e.prototype.childrenCreated.call(this), this.percentWidth = 100, this._customData) {
                var t = this.selected ? "down": "up";
                this.currentState = t,
                this.txtName.text = this._customData.name,
                this.txtBg.width = this.txtName.width + 50,
                this.txtBg.visible = this.selected
            }
        },
        i.prototype._updateView = function() {
            var t = this.selected ? "down": "up";
            this.currentState = t,
            this.txtName.text = this._customData.name,
            this.txtBg.width = this.txtName.width + 50,
            this.txtBg.visible = this.selected
        },
        i.prototype._onChangeSelected = function() {
            e.prototype._onChangeSelected.call(this);
            var t = this.selected ? "down": "up";
            this.currentState = t,
            this.txtBg.visible = this.selected
        },
        i
    } (common.ui.treemenu.SecondComponent);
    t.ChildNode = i,
    __reflect(i.prototype, "pveRewardMall.ChildNode")
} (pveRewardMall || (pveRewardMall = {}));
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
pveRewardMall; !
function(t) {
    var e = function(e) {
        function i(t) {
            var i = e.call(this) || this;
            return i._tab = 0,
            i.panels = {},
            i.skinName = PverewardmallSkin,
            t && (i._type = t.type, t.args && (i._tab = t.args)),
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            var t = this;
            if (e.prototype.childrenCreated.call(this), this.percentHeight = 100, this.percentWidth = 100, this.height = egret.lifecycle.stage.stageHeight, this.width = egret.lifecycle.stage.stageWidth, 1 == this._type) var i = "resource/config/json/pveRewardMall_1.json";
            else var i = "resource/config/json/pveRewardMall.json";
            RES.getResByUrl(i,
            function(e, i) {
                var n = e;
                t.createMenu(n)
            },
            this, RES.ResourceItem.TYPE_JSON),
            ImageButtonUtil.add(this.img_close_btn,
            function() {
                ModuleManager.hideModule(t)
            },
            this)
        },
        i.prototype._resize = function() {
            this.currPanel._resize()
        },
        i.prototype.createMenu = function(e) {
            var i = {};
            if (i.secondRender = t.ChildNode, i.firstRender = t.ParentNode, i.grp = -10, i.animationTime = 300, i.dir = common.ui.treemenu.TreeScrollerContainer.DIR_TO_V, i.data = e.data, this.menuConfig = e.data, egret.lifecycle.stage.stageWidth / egret.lifecycle.stage.stageHeight < 1.5) {
                this.grp_left.width = 136;
                var n = 136
            } else {
                this.grp_left.percentWidth = 11.8;
                var n = 136 * egret.lifecycle.stage.stageWidth / 1136
            }
            var r = new common.ui.treemenu.TreeScrollerContainer(n, 580, i);
            this.addChild(r),
            r.x = 0,
            r.y = 56,
            r.addEventListener(common.ui.treemenu.TreeScrollerContainer.EVENT_SELECT_ITEM, this.changeMenu, this),
            r.Open(this._tab, 0),
            this.showContent(this._tab, 0)
        },
        i.prototype.changeMenu = function(t) {
            this.showContent(t.data[0], t.data[1])
        },
        i.prototype.showContent = function(e, i) {
            var n, r, o = this.menuConfig[e].firstData,
            s = o.panelCls;
            this.menuConfig[e].childData[i] && (s = this.menuConfig[e].childData[i].panelCls, n = this.menuConfig[e].childData[i], r = this.menuConfig[e].childData[i].param),
            s ? this.currPanel && this.currPanel.name == s ? this.currPanel.setData(o, n) : (this.hideCurrPanel(), this.panels[s] ? (this.currPanel = this.panels[s], this.currPanel.setData(o, n), this.grpContainer.addChild(this.currPanel)) : t[s] ? (this.currPanel = new t[s], this.currPanel.name = s, this.currPanel.x = 0, this.currPanel.y = 0, this.grpContainer.addChild(this.currPanel), this.currPanel.setData(o, n), this.panels[s] = this.currPanel) : BubblerManager.getInstance().showText(s + "未实现")) : BubblerManager.getInstance().showText("该项未处理")
        },
        i.prototype.hideCurrPanel = function() {
            this.grpContainer.removeChildren()
        },
        i.prototype.destroy = function() {
            e.prototype.destroy.call(this);
            for (var t in this.panels) this.panels[t].destroy();
            this.panels = null,
            1 == this._type
        },
        i
    } (BaseModule);
    t.PveRewardMall = e,
    __reflect(e.prototype, "pveRewardMall.PveRewardMall")
} (pveRewardMall || (pveRewardMall = {}));
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
pveRewardMall; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.all = [],
            i.skinName = SptAchieveViewSkin,
            i.all = t.DataConfigManger.getInstance().getAllJuebanAchieveIds(),
            i._itemId = i.all[0].coinid,
            EventManager.addEventListener(t.ConstantEvents.EVENT_UPDATE_VIEW, i.updateView, i),
            ImageButtonUtil.add(i.icon_coin,
            function() {
                var t = {};
                t.id = i._itemId,
                tipsPop.TipsPop.openItemPop(t)
            },
            i),
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this._list.itemRenderer = t.SptAchieveViewItem,
            this._resize()
        },
        i.prototype.setData = function() {
            this.updateData(),
            this.updateView()
        },
        i.prototype._resize = function() {
            this._scrl.width = egret.lifecycle.stage.stageWidth - 193
        },
        i.prototype.updateData = function() {
            this.icon_coin.source = ClientConfig.getItemIcon(this._itemId),
            this.all.sort(function(t, e) {
                var i = Math.floor(t.realid / 100),
                n = t.realid % 100,
                r = AchieveManager.getAwardMask(i, n),
                o = r.rule_mask,
                s = Math.floor(e.realid / 100),
                a = e.realid % 100,
                h = AchieveManager.getAwardMask(s, a),
                _ = h.rule_mask;
                return o - _
            }),
            this._list.dataProvider = new eui.ArrayCollection(this.all)
        },
        i.prototype.updateView = function() {
            this.txtCount.text = ItemManager.getNumByID(this._itemId) + ""
        },
        i.prototype.destroy = function() {
            EventManager.removeEventListener(t.ConstantEvents.EVENT_UPDATE_VIEW, this.updateView, this),
            ImageButtonUtil.removeAll(this),
            e.prototype.destroy.call(this)
        },
        i
    } (t.BaseViewPanel);
    t.JuebanAchieveView = e,
    __reflect(e.prototype, "pveRewardMall.JuebanAchieveView")
} (pveRewardMall || (pveRewardMall = {}));
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
pveRewardMall; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t.skinName = markItemSkin,
            t
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.addEventListener(egret.Event.ADDED_TO_STAGE, this.initEvents, this)
        },
        i.prototype.initEvents = function() {
            this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this),
            ImageButtonUtil.add(this.btnbg, this.onTouchIamgeButtonHandler, this)
        },
        i.prototype.removeEvents = function() {
            this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this),
            ImageButtonUtil.removeAll(this)
        },
        i.prototype.onTouchIamgeButtonHandler = function(e) {
            var i = this;
            switch (e.target) {
            case this.btnbg:
                var n = {};
                n.ins = this._vo.exchangeConfig,
                n.caller = this,
                n.callBack = function(e, n) {
                    SocketConnection.sendByQueue(42395, [109, i._vo.indexId, n, 0],
                    function(e) {
                        EventManager.dispatchEventWith(t.ConstantEvents.EVENT_UPDATE_VIEW)
                    })
                },
                ModuleManager.showModuleByID(1, n);
                break;
            case this.itemIcon:
                var r = {};
                r.id = this._vo.itemId,
                tipsPop.TipsPop.openItemPop(r)
            }
        },
        i.prototype.oldExchange = function() {
            var e = this,
            i = ItemManager.getNumByID(this._vo.needitem),
            n = this._vo.isDiscount ? .5 * this._vo.needcnt: this._vo.needcnt;
            i >= n ? Alert.show("是否确认兑换“" + ItemXMLInfo.getName(this._vo.itemId) + "”？",
            function() {
                SocketConnection.sendByQueue(42395, [109, e._vo.indexId, 1, 0],
                function(e) {
                    EventManager.dispatchEventWith(t.ConstantEvents.EVENT_UPDATE_VIEW)
                })
            }) : Alarm.show("所需" + ItemXMLInfo.getName(this._vo.needitem) + "不足！")
        },
        i.prototype._showTips = function(t) {
            var e;
            1 === t.type ? (e = {},
            e.id = t.id, tipsPop.TipsPop.openItemPop(e)) : (e = {},
            e.ins = t.id, tipsPop.TipsPop.openCounterMarkPop(e))
        },
        Object.defineProperty(i.prototype, "selected", {
            get: function() {
                return egret.superSetter(i, this, "selected")
            },
            set: function(t) {
                egret.superSetter(i, this, "selected")
            },
            enumerable: !0,
            configurable: !0
        }),
        i.prototype.dataChanged = function() {
            if (this._vo = this.data, this.txtName.text = ItemXMLInfo.getName(this._vo.itemId), this.txtCount.text = String(this._vo.isDiscount ? .5 * this._vo.needcnt: this._vo.needcnt), this.itemIcon.source = ClientConfig.getItemIcon(this._vo.itemId), this.coin.source = ClientConfig.getItemIcon(this._vo.needitem), this.coin.touchEnabled = !1, this.txtCount.touchEnabled = !1, this.flag_png.visible = this._vo.isDiscount, DisplayUtil.setEnabled(this.exchange, !0), this.exchange.touchEnabled = this.exchange.touchChildren = !0, this._vo.exchangeConfig.Limittype) {
                this.grp_limit.visible = !0;
                var t;
                t = this._vo.exchangeConfig.UserInfoBitPos ? KTool.getBit(this._vo.userInfo, this._vo.exchangeConfig.UserInfoBitPos) : this._vo.userInfo;
                var e = ["每日", "每周", "每月", "永久"];
                this.txt_limitNum.text = e[this._vo.exchangeConfig.Limittype - 1] + "限兑：" + Math.min(t, this._vo.exchangeConfig.LimitCnt) + "/" + this._vo.exchangeConfig.LimitCnt,
                t >= this._vo.exchangeConfig.LimitCnt && (DisplayUtil.setEnabled(this.exchange, !1), this.exchange.touchEnabled = this.exchange.touchChildren = !1)
            } else this.grp_limit.visible = !1;
            this._vo.exchangeConfig.count ? (this.txt_count.visible = !0, this._vo.exchangeConfig.count >= 1e4 ? this.txt_count.text = Math.floor(this._vo.exchangeConfig.count / 1e4) + "万": this._vo.exchangeConfig.count >= 1e3 ? this.txt_count.text = Math.floor(this._vo.exchangeConfig.count / 1e3) + "千": this.txt_count.text = this._vo.exchangeConfig.count + "") : this.txt_count.visible = !1
        },
        i.prototype.getVo = function() {
            return this._vo
        },
        i.prototype.destroy = function() {
            this.removeEvents()
        },
        i
    } (eui.ItemRenderer);
    t.CultureItemsitem = e,
    __reflect(e.prototype, "pveRewardMall.CultureItemsitem")
} (pveRewardMall || (pveRewardMall = {}));
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
pveRewardMall; !
function(t) {
    var e = function(e) {
        function i(t) {
            var i = e.call(this) || this;
            return i.allIds = [],
            i.currGxPets = [],
            i.currType = 0,
            i.arrayColletion = new eui.ArrayCollection([]),
            i._curIndex = 0,
            i.skinName = PverewardmallGxMarkSkin,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.scroller.viewport = this.list,
            this.list.itemRenderer = t.CultureItemsitem,
            this.list.dataProvider = this.arrayColletion,
            this.initEvents(),
            this.adaptLayout()
        },
        i.prototype.adaptLayout = function() {
            var t = 15,
            e = 144,
            i = this.list.layout,
            n = egret.lifecycle.stage.stageWidth - 1136,
            r = Math.floor(n / (e + t));
            0 != r && (i.requestedColumnCount = 6 + r, this.scroller.width = i.requestedColumnCount * (e + t)),
            egret.lifecycle.stage.stageWidth - 1136 - r * (e + i.horizontalGap) > 10 * i.requestedColumnCount && (i.horizontalGap = 17, i.verticalGap = 17, this.scroller.width = i.requestedColumnCount * (e + i.horizontalGap))
        },
        i.prototype._resize = function() {
            this.adaptLayout()
        },
        i.prototype.setData = function(e, i) {
            this.allIds = t.DataConfigManger.getInstance().getAllCultureItemsIds(i.param),
            this._forveridArr = [],
            this._itemsidArr = [];
            for (var n = 0; n < this.allIds.length; n++) {
                var r = t.DataConfigManger.getInstance().getInfoById(this.allIds[n]); - 1 == this._forveridArr.indexOf(r.UserInfoId) && this._forveridArr.push(r.UserInfoId),
                -1 == this._itemsidArr.indexOf(r.coinid) && this._itemsidArr.push(r.coinid)
            }
            this.updateData(this.updateView)
        },
        i.prototype.initEvents = function() {
            var e = this;
            this.list.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.onTouchTapItemRenderHandle, this),
            EventManager.addEventListener(t.ConstantEvents.EVENT_UPDATE_VIEW, this._updateView, this),
            ImageButtonUtil.add(this.icon_coin,
            function() {
                var t = {};
                t.id = e._selectVo.needitem,
                tipsPop.TipsPop.openItemPop(t)
            },
            this)
        },
        i.prototype.removeEvents = function() {
            this.list.removeEventListener(eui.ItemTapEvent.ITEM_TAP, this.onTouchTapItemRenderHandle, this),
            EventManager.removeEventListener(t.ConstantEvents.EVENT_UPDATE_VIEW, this._updateView, this),
            ImageButtonUtil.removeAll(this)
        },
        i.prototype._updateView = function() {
            this.updateData(this.updateView)
        },
        i.prototype.updateData = function(t) {
            var e = this;
            this.touchChildren = this.touchEnabled = !1,
            this._fun = t,
            ItemManager.updateItems(this._itemsidArr,
            function() {
                e._itemNumArr = new Array;
                for (var t = 0; t < e._itemsidArr.length; t++) {
                    var i = ItemManager.getNumByID(e._itemsidArr[t]);
                    e._itemNumArr.push(i)
                }
            }),
            KTool.getMultiValue(this._forveridArr,
            function(t) {
                e._curDataForver = t,
                e.touchChildren = e.touchEnabled = !0,
                null != e._fun && e._fun()
            })
        },
        i.prototype.updateView = function() {
            this.updateRenderList()
        },
        i.prototype.updateRenderList = function() {
            this.updateRender(),
            this.list.selectedIndex = 0,
            this._selectVo = this.arrayColletion.getItemAt(this.list.selectedIndex),
            this.currentSelectInfo()
        },
        i.prototype.updateRender = function() {
            var t = this._parseRenderData();
            this.arrayColletion.replaceAll(t),
            this.arrayColletion.refresh(),
            this.list.validateNow()
        },
        i.prototype.onTouchTapItemRenderHandle = function(t) {
            this._selectVo = t.item,
            this.currentSelectInfo()
        },
        i.prototype.currentSelectInfo = function() {
            this.icon_coin.source = ClientConfig.getItemIcon(this._selectVo.needitem);
            var t = this._itemsidArr.indexOf(this._selectVo.needitem);
            this._curItemNum = this._itemNumArr.length > t ? this._itemNumArr[t] : 0,
            this.txtCount.text = core.gameUtil.ConvertItemNumView(this._curItemNum)
        },
        i.prototype._parseRenderData = function() {
            for (var e = [], i = 0; i < this.allIds.length; i++) {
                var n = {};
                n.indexId = this.allIds[i];
                var r = t.DataConfigManger.getInstance().getInfoById(n.indexId);
                n.itemId = r.realid,
                n.needitem = r.coinid,
                n.needcnt = r.price;
                var o = this._itemsidArr.indexOf(n.needitem);
                n.isCanGet = this._itemNumArr[o] >= n.needcnt ? !0 : !1,
                n.exchangeConfig = r;
                var s = this._forveridArr.indexOf(r.UserInfoId);
                n.userInfo = this._curDataForver[s],
                e.push(n)
            }
            return e
        },
        i.prototype.destroy = function() {
            this.removeEvents(),
            this.list.removeChildren(),
            e.prototype.destroy.call(this)
        },
        i
    } (t.BaseViewPanel);
    t.CultureItemsView = e,
    __reflect(e.prototype, "pveRewardMall.CultureItemsView")
} (pveRewardMall || (pveRewardMall = {}));
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
pveRewardMall; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t.skinName = markItemSkin,
            t
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.addEventListener(egret.Event.ADDED_TO_STAGE, this.initEvents, this)
        },
        i.prototype.initEvents = function() {
            this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this),
            ImageButtonUtil.add(this.btnbg, this.onTouchIamgeButtonHandler, this)
        },
        i.prototype.removeEvents = function() {
            this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this),
            ImageButtonUtil.removeAll(this)
        },
        i.prototype.onTouchIamgeButtonHandler = function(e) {
            var i = this;
            switch (e.target) {
            case this.btnbg:
                if (!this._vo.isCanExchange) return void Alarm.show("收集全部精灵王，即可开启兑换！");
                var n = {};
                n.ins = this._vo.exchangeConfig,
                n.isDiscount = this._vo.isDiscount,
                n.caller = this,
                n.callBack = function(e, n) {
                    SocketConnection.sendByQueue(42395, [109, i._vo.indexId, n, 0],
                    function(e) {
                        EventManager.dispatchEventWith(t.ConstantEvents.EVENT_UPDATE_VIEW)
                    })
                },
                ModuleManager.showModuleByID(1, n);
                break;
            case this.itemIcon:
                var r = {};
                r.ins = this._vo.markId,
                tipsPop.TipsPop.openCounterMarkPop(r)
            }
        },
        i.prototype.oldExchange = function() {
            var e = this,
            i = ItemManager.getNumByID(this._vo.needitem),
            n = this._vo.isDiscount ? .5 * this._vo.needcnt: this._vo.needcnt;
            i >= n ? Alert.show("是否确认兑换“" + ItemXMLInfo.getName(this._vo.markId) + "”？",
            function() {
                SocketConnection.sendByQueue(42395, [109, e._vo.indexId, 1, 0],
                function(e) {
                    EventManager.dispatchEventWith(t.ConstantEvents.EVENT_UPDATE_VIEW)
                })
            }) : Alarm.show("所需" + ItemXMLInfo.getName(this._vo.needitem) + "不足！")
        },
        i.prototype._showTips = function(t) {
            var e;
            1 === t.type ? (e = {},
            e.id = t.id, tipsPop.TipsPop.openItemPop(e)) : (e = {},
            e.ins = t.id, tipsPop.TipsPop.openCounterMarkPop(e))
        },
        Object.defineProperty(i.prototype, "selected", {
            get: function() {
                return egret.superSetter(i, this, "selected")
            },
            set: function(t) {
                egret.superSetter(i, this, "selected")
            },
            enumerable: !0,
            configurable: !0
        }),
        i.prototype.dataChanged = function() {
            this._vo = this.data,
            this.txtName.text = ItemXMLInfo.getName(this._vo.markId),
            this.txtCount.text = String(this._vo.isDiscount ? .625 * this._vo.needcnt: this._vo.needcnt),
            this.itemIcon.source = ClientConfig.getMarkPath(this._vo.markId),
            this.coin.source = ClientConfig.getItemIcon(this._vo.needitem),
            this.coin.touchEnabled = !1,
            this.txtCount.touchEnabled = !1,
            this.flag_png.visible = this._vo.isDiscount
        },
        i.prototype.getVo = function() {
            return this._vo
        },
        i.prototype.destroy = function() {
            this.removeEvents()
        },
        i
    } (eui.ItemRenderer);
    t.ElevnKingMarkItem = e,
    __reflect(e.prototype, "pveRewardMall.ElevnKingMarkItem")
} (pveRewardMall || (pveRewardMall = {}));
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
pveRewardMall; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            i.allIds = [],
            i.currGxPets = [],
            i.currType = 0,
            i.arrayColletion = new eui.ArrayCollection([]),
            i._curIndex = 0,
            i.skinName = PverewardmallGxMarkSkin,
            i.allIds = t.DataConfigManger.getInstance().getAllElevnKingMarkIds(),
            i._forveridArr = [],
            i._itemsidArr = [];
            for (var n = 0; n < i.allIds.length; n++) {
                var r = t.DataConfigManger.getInstance().getInfoById(i.allIds[n]); - 1 == i._forveridArr.indexOf(r.UserInfoId) && i._forveridArr.push(r.UserInfoId),
                -1 == i._itemsidArr.indexOf(r.coinid) && i._itemsidArr.push(r.coinid)
            }
            return i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.scroller.viewport = this.list,
            this.list.itemRenderer = t.ElevnKingMarkItem,
            this.list.dataProvider = this.arrayColletion,
            this.initEvents(),
            this.adaptLayout()
        },
        i.prototype.adaptLayout = function() {
            var t = 15,
            e = 144,
            i = this.list.layout,
            n = egret.lifecycle.stage.stageWidth - 1136,
            r = Math.floor(n / (e + t));
            0 != r && (i.requestedColumnCount = 6 + r, this.scroller.width = i.requestedColumnCount * (e + t)),
            egret.lifecycle.stage.stageWidth - 1136 - r * (e + i.horizontalGap) > 10 * i.requestedColumnCount && (i.horizontalGap = 17, i.verticalGap = 17, this.scroller.width = i.requestedColumnCount * (e + i.horizontalGap))
        },
        i.prototype._resize = function() {
            this.adaptLayout()
        },
        i.prototype.setData = function(t, e) {
            this.currType = ~~e.id - 1,
            this.updateData(this.updateView)
        },
        i.prototype.initEvents = function() {
            var e = this;
            this.list.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.onTouchTapItemRenderHandle, this),
            EventManager.addEventListener(t.ConstantEvents.EVENT_UPDATE_VIEW, this._updateView, this),
            ImageButtonUtil.add(this.icon_coin,
            function() {
                var t = {};
                t.id = e._selectVo.needitem,
                tipsPop.TipsPop.openItemPop(t)
            },
            this)
        },
        i.prototype.removeEvents = function() {
            this.list.removeEventListener(eui.ItemTapEvent.ITEM_TAP, this.onTouchTapItemRenderHandle, this),
            EventManager.removeEventListener(t.ConstantEvents.EVENT_UPDATE_VIEW, this._updateView, this),
            ImageButtonUtil.removeAll(this)
        },
        i.prototype._updateView = function() {
            this.updateData(this.updateView)
        },
        i.prototype.updateData = function(t) {
            var e = this;
            this.touchChildren = this.touchEnabled = !1,
            this._fun = t,
            ItemManager.updateItems(this._itemsidArr,
            function() {
                e._itemNumArr = new Array;
                for (var t = 0; t < e._itemsidArr.length; t++) {
                    var i = ItemManager.getNumByID(e._itemsidArr[t]);
                    e._itemNumArr.push(i)
                }
            }),
            KTool.getMultiValue([108065],
            function(t) {
                e._curDataForver = t,
                e.touchChildren = e.touchEnabled = !0,
                e._h5PetGetNum = 0;
                for (var i = 0; 18 > i; i++) BitUtil.getBit(e._curDataForver[0], i) > 0 && e._h5PetGetNum++;
                KTool.getBitSet([2000038],
                function(t) {
                    e.touchChildren = e.touchEnabled = !0,
                    e._curDataBit = t,
                    null != e._fun && e._fun()
                })
            })
        },
        i.prototype.updateView = function() {
            this.updateRenderList()
        },
        i.prototype.updateRenderList = function() {
            this.updateRender(),
            this.list.selectedIndex = 0,
            this._selectVo = this.arrayColletion.getItemAt(this.list.selectedIndex),
            this.currentSelectInfo()
        },
        i.prototype.updateRender = function() {
            var t = this._parseRenderData();
            this.arrayColletion.replaceAll(t),
            this.arrayColletion.refresh(),
            this.list.validateNow()
        },
        i.prototype.onTouchTapItemRenderHandle = function(t) {
            this._selectVo = t.item,
            this.currentSelectInfo()
        },
        i.prototype.currentSelectInfo = function() {
            this.icon_coin.source = ClientConfig.getItemIcon(this._selectVo.needitem);
            var t = this._itemsidArr.indexOf(this._selectVo.needitem);
            this._curItemNum = this._itemNumArr.length > t ? this._itemNumArr[t] : 0,
            this.txtCount.text = core.gameUtil.ConvertItemNumView(this._curItemNum)
        },
        i.prototype._parseRenderData = function() {
            for (var e = [], i = Math.floor(SystemTimerManager.sysBJDate.getTime() / 1e3), n = Math.floor((i - 57600) / 604800 % this.allIds.length), r = 0; r < this.allIds.length; r++) {
                var o = {};
                o.indexId = this.allIds[r];
                var s = t.DataConfigManger.getInstance().getInfoById(o.indexId);
                o.markId = s.realid,
                o.needitem = s.coinid,
                o.needcnt = s.price,
                o.isCanExchange = !0,
                0 == this._curDataBit[0] ? o.isDiscount = o.indexId - this.allIds[0] == n ? !0 : !1 : o.isDiscount = !1,
                o.exchangeConfig = s,
                e.push(o)
            }
            return e.sort(function(t, e) {
                return t.isDiscount ? -1 : e.isDiscount ? 1 : t.markId < e.markId ? -1 : 1
            }),
            e
        },
        i.prototype.destroy = function() {
            this.removeEvents(),
            this.list.removeChildren(),
            e.prototype.destroy.call(this)
        },
        i
    } (t.BaseViewPanel);
    t.ElevnKingMarkView = e,
    __reflect(e.prototype, "pveRewardMall.ElevnKingMarkView")
} (pveRewardMall || (pveRewardMall = {}));
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
pveRewardMall; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t.skinName = elevnKingHeadItemSkin,
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
        Object.defineProperty(i.prototype, "selected", {
            get: function() {
                return egret.superSetter(i, this, "selected")
            },
            set: function(e) {
                null != this._vo && (this.select_png.visible = e, egret.superSetter(t.PetHeadItem, this, "selected"))
            },
            enumerable: !0,
            configurable: !0
        }),
        i.prototype.dataChanged = function() {
            this._vo = this.data,
            this.touchEnabled = this.touchChildren = null !== this._vo && void 0 !== this._vo,
            null != this._vo ? (this.select_png.visible = !1, this.img_reddot.visible = this._vo.isCanGet, this.headIcon_png.source = ClientConfig.getPetHeadPath(this._vo.petId), this.headIcon_png.scaleX = 1, this.headIcon_png.scaleY = 1, this.grp_head.visible = !0) : this.grp_head.visible = !1
        },
        i.prototype.getVo = function() {
            return this._vo
        },
        i.prototype.destroy = function() {
            this.removeEvents()
        },
        i
    } (eui.ItemRenderer);
    t.ElevnKingPetHeadItem = e,
    __reflect(e.prototype, "pveRewardMall.ElevnKingPetHeadItem")
} (pveRewardMall || (pveRewardMall = {}));
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
pveRewardMall; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            i.allPets = [],
            i.currPets = [],
            i.currType = 0,
            i.arrayColletion = new eui.ArrayCollection([]),
            i.skinName = elevnKingPetSkin,
            i.allPets = t.DataConfigManger.getInstance().getAllElevnKingPetIds(),
            i._forveridArr = [],
            i._itemsidArr = [];
            for (var n = 0; n < i.allPets.length; n++) {
                var r = t.DataConfigManger.getInstance().getInfoById(i.allPets[n]); - 1 == i._forveridArr.indexOf(r.UserInfoId) && i._forveridArr.push(r.UserInfoId),
                -1 == i._itemsidArr.indexOf(r.coinid) && i._itemsidArr.push(r.coinid)
            }
            return i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.percentHeight = this.percentWidth = 100,
            this.scroller.viewport = this.list,
            this.list.itemRenderer = t.ElevnKingPetHeadItem,
            this.list.dataProvider = this.arrayColletion,
            this.initEvents(),
            this.adaptLayout()
        },
        i.prototype.adaptLayout = function() {
            var t = 166,
            e = egret.lifecycle.stage.stageWidth - 1136;
            if (e > 0) {
                this.Gxp_pet.x += e,
                this.Gxp_pet.x = Math.min(t, this.Gxp_pet.x);
                var i = egret.lifecycle.stage.stageWidth - this.Gxp_pet.x - 20;
                this.Gxp_pet.width = i,
                this.grp_heads.width = i
            }
        },
        i.prototype.setData = function(t, e) {
            this.currType = ~~e.id - 1,
            this.updateData(this.updateView)
        },
        i.prototype.initEvents = function() {
            this.list.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.onTouchTapPetItemRenderHandle, this),
            ImageButtonUtil.add(this.img_exchange_btn, this.onTouchIamgeButtonHandler, this),
            ImageButtonUtil.add(this.icon_0, this.onTouchIamgeButtonHandler, this),
            ImageButtonUtil.add(this.icon_1, this.onTouchIamgeButtonHandler, this),
            ImageButtonUtil.add(this.icon_2, this.onTouchIamgeButtonHandler, this),
            ImageButtonUtil.add(this.icon_coin, this.onTouchIamgeButtonHandler, this),
            egret.lifecycle.stage.addEventListener(egret.Event.RESIZE, this.adaptLayout, this)
        },
        i.prototype.removeEvents = function() {
            this.list.removeEventListener(eui.ItemTapEvent.ITEM_TAP, this.onTouchTapPetItemRenderHandle, this),
            ImageButtonUtil.removeAll(this),
            egret.lifecycle.stage.removeEventListener(egret.Event.RESIZE, this.adaptLayout, this)
        },
        i.prototype.onTouchIamgeButtonHandler = function(t) {
            var e = this;
            switch (t.target) {
            case this.img_exchange_btn:
                this._selectPetVo.isCanGet ? SocketConnection.sendByQueue(42395, [109, this._selectPetVo.indexId, 1, 0],
                function(t) {
                    e.updateData(e.updateView)
                }) : Alarm.show("所需" + ItemXMLInfo.getName(this._selectPetVo.needitem) + "不足！");
                break;
            case this.icon_0:
                ModuleManager.showModule("petEffDescPanel", ["pet_eff_desc_panel"], this._selectPetVo.petId, "", AppDoStyle.NULL);
                break;
            case this.icon_1:
                var i = {};
                i.id = this._threeIds[1],
                tipsPop.TipsPop.openSkillPop(i);
                break;
            case this.icon_2:
                var n = {};
                n.ins = this._threeIds[2],
                tipsPop.TipsPop.openCounterMarkPop(n);
                break;
            case this.icon_coin:
                var r = {};
                r.id = this._selectPetVo.needitem,
                tipsPop.TipsPop.openItemPop(r)
            }
        },
        i.prototype._updateView = function() {
            this.updateData(this.updateView)
        },
        i.prototype.updateData = function(t) {
            var e = this;
            this.touchChildren = this.touchEnabled = !1,
            this._fun = t,
            ItemManager.updateItems(this._itemsidArr,
            function() {
                e._itemNumArr = new Array;
                for (var t = 0; t < e._itemsidArr.length; t++) {
                    var i = ItemManager.getNumByID(e._itemsidArr[t]);
                    e._itemNumArr.push(i)
                }
            }),
            KTool.getMultiValue(this._forveridArr,
            function(t) {
                e._curDataForver = t,
                e.touchChildren = e.touchEnabled = !0,
                null != e._fun && e._fun()
            })
        },
        i.prototype.updateView = function() {
            this.updateRenderList()
        },
        i.prototype.updateRenderList = function() {
            this.updateHeadRender(),
            this.list.selectedIndex = null != this._selectPetVo ? this._selectPetVo.listIndex: 0,
            this._selectPetVo = this.arrayColletion.getItemAt(this.list.selectedIndex),
            this.currentSelectPetInfo()
        },
        i.prototype.updateHeadRender = function() {
            for (var t = this._parseHeadRenderData(), e = this._getListCount(), i = t.length; e > i; i++) t.push(null);
            this.arrayColletion.replaceAll(t),
            this.arrayColletion.refresh(),
            this.list.validateNow()
        },
        i.prototype._getListCount = function() {
            var t = 950,
            e = this.list.layout,
            i = e.gap,
            n = egret.lifecycle.stage.stageWidth - 1136;
            return Math.ceil((t + n + i) / (88 + i)) + 1
        },
        i.prototype.onTouchTapPetItemRenderHandle = function(t) {
            this._selectPetVo = t.item,
            this.currentSelectPetInfo()
        },
        i.prototype.currentSelectPetInfo = function() {
            var e = "resource/",
            i = e + "assets/pveRewardMall/elevnKingPet/exchange/" + this._selectPetVo.petId + ".png";
            this.pet_0.source = i,
            this.name_0.source = "resource/assets/pveRewardMall/elevnKingPet/name/" + this._selectPetVo.petId + ".png",
            this.icon_coin.source = ClientConfig.getItemIcon(this._selectPetVo.needitem),
            this.itemIcon.source = ClientConfig.getItemIcon(this._selectPetVo.needitem);
            var n = this._itemsidArr.indexOf(this._selectPetVo.needitem);
            this._curItemNum = this._itemNumArr.length > n ? this._itemNumArr[n] : 0,
            this.txtCount.text = core.gameUtil.ConvertItemNumView(this._curItemNum),
            this.itemNumTx.text = String(this._selectPetVo.needcnt),
            this.flg_png.visible = !1,
            DisplayUtil.setEnabled(this.img_exchange_btn, !0, !1);
            var r = t.DataConfigManger.getInstance().getInfoById(this._selectPetVo.indexId),
            o = r.monappend;
            this._threeIds = o.split("_"),
            this.rewardIcon.visible = !!o;
            SkillXMLInfo.hideMovesMap[this._selectPetVo.petId];
            this._threeIds[2] && (this.icon_2.source = ClientConfig.getMarkPath(this._threeIds[2]))
        },
        i.prototype._parseHeadRenderData = function() {
            for (var e = [], i = this.allPets.length >= 9 ? this.allPets.length: 9, n = 0; i > n; n++) {
                var r = {};
                if (n < this.allPets.length) {
                    r.listIndex = n,
                    r.indexId = this.allPets[n];
                    var o = t.DataConfigManger.getInstance().getInfoById(r.indexId);
                    r.petId = o.realid,
                    r.needitem = o.coinid,
                    r.needcnt = o.price,
                    r.userInfoId = o.UserInfoId,
                    r.userInfoBitPos = o.UserInfoBitPos;
                    var s = this._itemsidArr.indexOf(r.needitem);
                    this._forveridArr.indexOf(r.userInfoId);
                    r.isCanGet = this._itemNumArr[s] >= r.needcnt ? !0 : !1
                } else r = null;
                e.push(r)
            }
            return e.sort(function(t, e) {
                return t.isCanGet ? -1 : e.isCanGet ? 1 : t.petId < e.petId ? -1 : 1
            }),
            e
        },
        i.prototype.destroy = function() {
            this.removeEvents(),
            this.list.removeChildren(),
            e.prototype.destroy.call(this)
        },
        i
    } (t.BaseViewPanel);
    t.ElevnKingPetView = e,
    __reflect(e.prototype, "pveRewardMall.ElevnKingPetView")
} (pveRewardMall || (pveRewardMall = {}));
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
pveRewardMall; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            i.allIds = [],
            i.currGxPets = [],
            i.currType = 0,
            i.arrayColletion = new eui.ArrayCollection([]),
            i._curIndex = 0,
            i.skinName = PverewardmallGxMarkSkin,
            i.allIds = t.DataConfigManger.getInstance().getAllGxMarkIds(),
            i._forveridArr = [],
            i._itemsidArr = [];
            for (var n = 0; n < i.allIds.length; n++) {
                var r = t.DataConfigManger.getInstance().getInfoById(i.allIds[n]); - 1 == i._forveridArr.indexOf(r.UserInfoId) && i._forveridArr.push(r.UserInfoId),
                -1 == i._itemsidArr.indexOf(r.coinid) && i._itemsidArr.push(r.coinid)
            }
            return i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.scroller.viewport = this.list,
            this.list.itemRenderer = t.gxMarkItem,
            this.list.dataProvider = this.arrayColletion,
            this.initEvents(),
            this.adaptLayout()
        },
        i.prototype.adaptLayout = function() {
            var t = 15,
            e = 144,
            i = this.list.layout,
            n = egret.lifecycle.stage.stageWidth - 1136,
            r = Math.floor(n / (e + t));
            0 != r && (i.requestedColumnCount = 6 + r, this.scroller.width = i.requestedColumnCount * (e + t)),
            egret.lifecycle.stage.stageWidth - 1136 - r * (e + i.horizontalGap) > 10 * i.requestedColumnCount && (i.horizontalGap = 17, i.verticalGap = 17, this.scroller.width = i.requestedColumnCount * (e + i.horizontalGap))
        },
        i.prototype._resize = function() {
            this.adaptLayout()
        },
        i.prototype.setData = function(t, e) {
            this.currType = ~~e.id - 1,
            this.updateData(this.updateView)
        },
        i.prototype.initEvents = function() {
            var e = this;
            this.list.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.onTouchTapItemRenderHandle, this),
            EventManager.addEventListener(t.ConstantEvents.EVENT_UPDATE_VIEW, this._updateView, this),
            ImageButtonUtil.add(this.icon_coin,
            function() {
                var t = {};
                t.id = e._selectVo.needitem,
                tipsPop.TipsPop.openItemPop(t)
            },
            this)
        },
        i.prototype.removeEvents = function() {
            this.list.removeEventListener(eui.ItemTapEvent.ITEM_TAP, this.onTouchTapItemRenderHandle, this),
            EventManager.removeEventListener(t.ConstantEvents.EVENT_UPDATE_VIEW, this._updateView, this),
            ImageButtonUtil.removeAll(this)
        },
        i.prototype._updateView = function() {
            this.updateData(this.updateView)
        },
        i.prototype.updateData = function(t) {
            var e = this;
            this.touchChildren = this.touchEnabled = !1,
            this._fun = t,
            ItemManager.updateItems(this._itemsidArr,
            function() {
                e._itemNumArr = new Array;
                for (var t = 0; t < e._itemsidArr.length; t++) {
                    var i = ItemManager.getNumByID(e._itemsidArr[t]);
                    e._itemNumArr.push(i)
                }
            }),
            KTool.getMultiValue(this._forveridArr,
            function(t) {
                e._curDataForver = t,
                e.touchChildren = e.touchEnabled = !0,
                null != e._fun && e._fun()
            })
        },
        i.prototype.updateView = function() {
            this.updateRenderList()
        },
        i.prototype.updateRenderList = function() {
            this.updateRender(),
            this.list.selectedIndex = 0,
            this._selectVo = this.arrayColletion.getItemAt(this.list.selectedIndex),
            this.currentSelectInfo()
        },
        i.prototype.updateRender = function() {
            var t = this._parseRenderData();
            this.arrayColletion.replaceAll(t),
            this.arrayColletion.refresh(),
            this.list.validateNow()
        },
        i.prototype.onTouchTapItemRenderHandle = function(t) {
            this._selectVo = t.item,
            this.currentSelectInfo()
        },
        i.prototype.currentSelectInfo = function() {
            this.icon_coin.source = ClientConfig.getItemIcon(this._selectVo.needitem);
            var t = this._itemsidArr.indexOf(this._selectVo.needitem);
            this._curItemNum = this._itemNumArr.length > t ? this._itemNumArr[t] : 0,
            this.txtCount.text = core.gameUtil.ConvertItemNumView(this._curItemNum)
        },
        i.prototype._parseRenderData = function() {
            for (var e = [], i = 0; i < this.allIds.length; i++) {
                var n = {};
                n.indexId = this.allIds[i];
                var r = t.DataConfigManger.getInstance().getInfoById(n.indexId);
                n.markId = r.realid,
                n.needitem = r.coinid,
                n.needcnt = r.price;
                var o = this._itemsidArr.indexOf(n.needitem);
                n.isCanGet = this._itemNumArr[o] >= n.needcnt ? !0 : !1,
                n.exchangeConfig = r,
                e.push(n)
            }
            return e
        },
        i.prototype.destroy = function() {
            this.removeEvents(),
            this.list.removeChildren(),
            e.prototype.destroy.call(this)
        },
        i
    } (t.BaseViewPanel);
    t.GongxunMarkView = e,
    __reflect(e.prototype, "pveRewardMall.GongxunMarkView")
} (pveRewardMall || (pveRewardMall = {}));
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
pveRewardMall; !
function(t) {
    var e = function(t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return __extends(e, t),
        e.EVENT_UPDATE_VIEW = "event_update_view",
        e.EVENT_UPDATE_ITEM = "event_update_item",
        e
    } (BaseModule);
    t.ConstantEvents = e,
    __reflect(e.prototype, "pveRewardMall.ConstantEvents")
} (pveRewardMall || (pveRewardMall = {}));
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
pveRewardMall; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            i.allGxPets = [],
            i.currGxPets = [],
            i.currType = 0,
            i.arrayColletion = new eui.ArrayCollection([]),
            i._monsterIdArr = [],
            i._getPetNum = {},
            i.skinName = PverewardmallGxpetSkin,
            i.allGxPets = t.DataConfigManger.getInstance().getAllGxPetIds(),
            i._forveridArr = [],
            i._itemsidArr = [];
            for (var n = 0; n < i.allGxPets.length; n++) {
                var r = t.DataConfigManger.getInstance().getInfoById(i.allGxPets[n]); - 1 == i._forveridArr.indexOf(r.UserInfoId) && i._forveridArr.push(r.UserInfoId),
                -1 == i._itemsidArr.indexOf(r.coinid) && i._itemsidArr.push(r.coinid),
                -1 == i._monsterIdArr.indexOf(r.realid) && i._monsterIdArr.push(r.realid)
            }
            return i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.scroller.viewport = this.list,
            this.list.itemRenderer = t.PetHeadItem,
            this.list.dataProvider = this.arrayColletion,
            this.requireNumTx.touchEnabled = this.itemIcon.touchEnabled = !1,
            this.infobg.visible = this.btnInfo.visible = !0,
            this.initEvents(),
            this.adaptLayout()
        },
        i.prototype.adaptLayout = function() {
            var t = 166,
            e = egret.lifecycle.stage.stageWidth - 1136;
            if (e > 0) {
                this.grp_gxPet.x += e,
                this.grp_gxPet.x = Math.min(t, this.grp_gxPet.x);
                var i = egret.lifecycle.stage.stageWidth - this.grp_gxPet.x - 20;
                this.grp_gxPet.width = i
            }
        },
        i.prototype.setData = function(t, e) {
            this.currType = ~~e.id - 1,
            this.updateData(this.updateView)
        },
        i.prototype.initEvents = function() {
            this.list.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.onTouchTapPetItemRenderHandle, this),
            ImageButtonUtil.add(this.img_exchange_btn, this.onTouchIamgeButtonHandler, this),
            ImageButtonUtil.add(this.icon_0, this.onTouchIamgeButtonHandler, this),
            ImageButtonUtil.add(this.icon_1, this.onTouchIamgeButtonHandler, this),
            ImageButtonUtil.add(this.icon_2, this.onTouchIamgeButtonHandler, this),
            ImageButtonUtil.add(this.icon_coin, this.onTouchIamgeButtonHandler, this),
            ImageButtonUtil.add(this.btnInfo, this.onTouchIamgeButtonHandler, this),
            egret.lifecycle.stage.addEventListener(egret.Event.RESIZE, this.adaptLayout, this)
        },
        i.prototype.removeEvents = function() {
            this.list.removeEventListener(eui.ItemTapEvent.ITEM_TAP, this.onTouchTapPetItemRenderHandle, this),
            egret.lifecycle.stage.removeEventListener(egret.Event.RESIZE, this.adaptLayout, this),
            ImageButtonUtil.removeAll(this)
        },
        i.prototype.onTouchIamgeButtonHandler = function(t) {
            var e = this;
            switch (t.target) {
            case this.img_exchange_btn:
                this._selectPetVo.isCanGet ? SocketConnection.sendByQueue(42395, [109, this._selectPetVo.indexId, 1, 0],
                function(t) {
                    e.updateData(e.updateView)
                }) : Alarm.show("所需" + ItemXMLInfo.getName(this._selectPetVo.needitem) + "不足！");
                break;
            case this.icon_0:
                ModuleManager.showModule("petEffDescPanel", ["pet_eff_desc_panel"], this._selectPetVo.petId, "", AppDoStyle.NULL);
                break;
            case this.icon_1:
                var i = {};
                i.id = this._threeIds[1],
                tipsPop.TipsPop.openSkillPop(i);
                break;
            case this.icon_2:
                var n = {};
                n.ins = this._threeIds[2],
                tipsPop.TipsPop.openCounterMarkPop(n);
                break;
            case this.icon_coin:
                var r = {};
                r.id = this._selectPetVo.needitem,
                tipsPop.TipsPop.openItemPop(r);
                break;
            case this.btnInfo:
                this._selectPetVo && PetManager.showPetIntroduce(this._selectPetVo.petId)
            }
        },
        i.prototype._updateView = function() {
            this.updateData(this.updateView)
        },
        i.prototype.updateData = function(t) {
            var e = this;
            this.touchChildren = this.touchEnabled = !1,
            this._fun = t,
            ItemManager.updateItems(this._itemsidArr,
            function() {
                e._itemNumArr = new Array;
                for (var t = 0; t < e._itemsidArr.length; t++) {
                    var i = ItemManager.getNumByID(e._itemsidArr[t]);
                    e._itemNumArr.push(i)
                }
            }),
            KTool.getMultiValue(this._forveridArr,
            function(t) {
                e._curDataForver = t,
                e.touchChildren = e.touchEnabled = !0,
                PetManager.checkMultiPet(e._monsterIdArr,
                function(t) {
                    for (var i in e._monsterIdArr) e._getPetNum[e._monsterIdArr[i]] = t[i];
                    null != e._fun && e._fun()
                })
            })
        },
        i.prototype.updateView = function() {
            this.updateRenderList()
        },
        i.prototype.updateRenderList = function() {
            this.updateHeadRender(),
            this.list.selectedIndex = null != this._selectPetVo ? this._selectPetVo.listIndex: 0,
            this._selectPetVo = this.arrayColletion.getItemAt(this.list.selectedIndex),
            this.currentSelectPetInfo()
        },
        i.prototype.updateHeadRender = function() {
            for (var t = this._parseHeadRenderData(), e = this._getListCount(), i = t.length; e > i; i++) t.push(null);
            this.arrayColletion.replaceAll(t),
            this.arrayColletion.refresh(),
            this.list.validateNow()
        },
        i.prototype._getListCount = function() {
            var t = 950,
            e = this.list.layout,
            i = e.gap,
            n = egret.lifecycle.stage.stageWidth - 1136;
            return Math.ceil((t + n + i) / (88 + i)) + 1
        },
        i.prototype.onTouchTapPetItemRenderHandle = function(t) {
            null != t.item && (this._selectPetVo = t.item, this.currentSelectPetInfo())
        },
        i.prototype.currentSelectPetInfo = function() {
            var e = "resource/",
            i = e + "assets/pveRewardMall/gxPet/pet/" + this._selectPetVo.petId + ".png";
            this.pet_0.source = i,
            this.namebg.source = "resource/assets/pveRewardMall/gxPet/name/" + this._selectPetVo.petId + ".png",
            this.icon_coin.source = ClientConfig.getItemIcon(this._selectPetVo.needitem),
            this.itemIcon.source = ClientConfig.getItemIcon(this._selectPetVo.needitem);
            var n = this._itemsidArr.indexOf(this._selectPetVo.needitem);
            this._curItemNum = this._itemNumArr.length > n ? this._itemNumArr[n] : 0,
            this.txtCount.text = core.gameUtil.ConvertItemNumView(this._curItemNum),
            this.requireNumTx.text = String(this._selectPetVo.needcnt),
            this.flg_png.visible = !1,
            this._selectPetVo.isGet ? DisplayUtil.setEnabled(this.img_exchange_btn, !1, !0) : DisplayUtil.setEnabled(this.img_exchange_btn, !0, !1);
            var r = t.DataConfigManger.getInstance().getInfoById(this._selectPetVo.indexId),
            o = r.monappend;
            this._threeIds = o.split("_");
            SkillXMLInfo.hideMovesMap[this._selectPetVo.petId];
            this.icon_2.source = ClientConfig.getMarkPath(this._threeIds[2]),
            this.flg_png.visible = !1
        },
        i.prototype._parseHeadRenderData = function() {
            for (var e = [], i = this.allGxPets.length >= 9 ? this.allGxPets.length: 9, n = 0; i > n; n++) {
                var r = {};
                if (n < this.allGxPets.length) {
                    r.listIndex = n,
                    r.indexId = this.allGxPets[n];
                    var o = t.DataConfigManger.getInstance().getInfoById(r.indexId);
                    r.petId = o.realid,
                    r.needitem = o.coinid,
                    r.needcnt = o.price,
                    r.userInfoId = o.UserInfoId,
                    r.userInfoBitPos = o.UserInfoBitPos;
                    var s = this._itemsidArr.indexOf(r.needitem),
                    a = this._forveridArr.indexOf(r.userInfoId);
                    BitUtil.getBit(this._curDataForver[a], r.userInfoBitPos - 1) > 0 ? (r.isGet = !0, r.isCanGet = !1) : o.isjustone && this._getPetNum[o.realid] ? (r.isGet = !0, r.isCanGet = !1) : r.isCanGet = this._itemNumArr[s] >= r.needcnt ? !0 : !1
                } else r = null;
                e.push(r)
            }
            e.sort(function(t, e) {
                return t ? e ? ~~t.isGet - ~~e.isGet: -1 : 1
            });
            for (var n in e) e[n] && (e[n].listIndex = ~~n);
            return e
        },
        i.prototype.destroy = function() {
            this.removeEvents(),
            this.list.removeChildren(),
            e.prototype.destroy.call(this)
        },
        i
    } (t.BaseViewPanel);
    t.GongxunPetView = e,
    __reflect(e.prototype, "pveRewardMall.GongxunPetView")
} (pveRewardMall || (pveRewardMall = {}));
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
pveRewardMall; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.skinName = gxPetHeadSkin,
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
                this.select_png.visible = t,
                egret.superSetter(e, this, "selected")
            },
            enumerable: !0,
            configurable: !0
        }),
        e.prototype.dataChanged = function() {
            this._vo = this.data,
            this.touchEnabled = this.touchChildren = null !== this._vo && void 0 !== this._vo,
            null != this._vo ? (this._vo.isGet ? this.filters = [ColorFilter.setGrayscale()] : this.filters = [], this.img_reddot.visible = this._vo.isCanGet, this.headIcon_png.source = ClientConfig.getPetHeadPath(this._vo.petId), this.headIcon_png.scaleX = 1, this.headIcon_png.scaleY = 1, this.grp_head.visible = !0, this.touchEnabled = this.touchChildren = !0) : (this.grp_head.visible = !1, this.touchEnabled = this.touchChildren = !1)
        },
        e.prototype.getVo = function() {
            return this._vo
        },
        e.prototype.destroy = function() {
            this.removeEvents()
        },
        e
    } (eui.ItemRenderer);
    t.PetHeadItem = e,
    __reflect(e.prototype, "pveRewardMall.PetHeadItem")
} (pveRewardMall || (pveRewardMall = {}));
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
pveRewardMall; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.all = [],
            i.skinName = SptAchieveViewSkin,
            i.all = t.DataConfigManger.getInstance().getAllSptAchieveIds(),
            i._itemId = i.all[0].coinid,
            EventManager.addEventListener(t.ConstantEvents.EVENT_UPDATE_VIEW, i.updateView, i),
            ImageButtonUtil.add(i.icon_coin,
            function() {
                var t = {};
                t.id = i._itemId,
                tipsPop.TipsPop.openItemPop(t)
            },
            i),
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this._list.itemRenderer = t.SptAchieveViewItem,
            this._resize()
        },
        i.prototype.setData = function() {
            this.updateData(),
            this.updateView()
        },
        i.prototype._resize = function() {
            this._scrl.width = egret.lifecycle.stage.stageWidth - 193
        },
        i.prototype.updateData = function() {
            this.icon_coin.source = ClientConfig.getItemIcon(this._itemId),
            this.all.sort(function(t, e) {
                var i = Math.floor(t.realid / 100),
                n = t.realid % 100,
                r = AchieveManager.getAwardMask(i, n);
                if (!r) return 1;
                var o = r.rule_mask,
                s = Math.floor(e.realid / 100),
                a = e.realid % 100,
                h = AchieveManager.getAwardMask(s, a);
                if (!h) return - 1;
                var _ = h.rule_mask;
                return o - _
            }),
            this._list.dataProvider = new eui.ArrayCollection(this.all)
        },
        i.prototype.updateView = function() {
            this.txtCount.text = ItemManager.getNumByID(this._itemId) + ""
        },
        i.prototype.destroy = function() {
            EventManager.removeEventListener(t.ConstantEvents.EVENT_UPDATE_VIEW, this.updateView, this),
            ImageButtonUtil.removeAll(this),
            e.prototype.destroy.call(this)
        },
        i
    } (t.BaseViewPanel);
    t.SptAchieveView = e,
    __reflect(e.prototype, "pveRewardMall.SptAchieveView")
} (pveRewardMall || (pveRewardMall = {}));
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
pveRewardMall; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t.skinName = SptAchieveViewItemSkin,
            t
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            var i = this;
            e.prototype.childrenCreated.call(this),
            this._resize(),
            ImageButtonUtil.add(this.achieveIcon,
            function() {
                if (i._SpeNameBonus) {
                    var t = {};
                    t.SpeNameBonus = i._SpeNameBonus,
                    tipsPop.TipsPop.openTitlePop(t)
                }
            },
            this),
            ImageButtonUtil.add(this.grp_get,
            function() {
                return ItemManager.getNumByID(i._info.coinid) < i._info.price ? void Alarm.show("所需" + ItemXMLInfo.getName(i._info.coinid) + "不足！") : void SocketConnection.sendByQueue(42395, [109, i._info.id, 1, 0],
                function() {
                    AchieveManager.updateSingleInfo(i._branchId).then(function() {
                        i.updateView()
                    }),
                    EventManager.dispatchEventWith(t.ConstantEvents.EVENT_UPDATE_VIEW)
                })
            },
            this),
            this.once(egret.Event.REMOVED_FROM_STAGE, this.destroy, this),
            egret.lifecycle.stage.addEventListener(egret.Event.RESIZE, this._resize, this)
        },
        i.prototype._resize = function() {
            var t = this;
            this.setTimeoutIndex = egret.setTimeout(function() {
                t.width = t.parent.width,
                t.img_arrow.width = .14 * t.width,
                t.achievePoint.x = 16 + t.img_arrow.width / 2 - 27.5
            },
            this, 100)
        },
        i.prototype.dataChanged = function() {
            e.prototype.dataChanged.call(this),
            this._info = this.data,
            this.initView(),
            this.updateView()
        },
        i.prototype.initView = function() {
            this._branchId = Math.floor(this._info.realid / 100),
            this._ruleId = this._info.realid % 100;
            var t = AchieveXMLInfo.getRule(this._branchId, this._ruleId);
            this._SpeNameBonus = null,
            t && (this.txt_achieve.text = t.Desc, this._SpeNameBonus = t.SpeNameBonus, this.achievePoint.source = ClientConfig.getAchievePointIcon(t.AchievementPoint)),
            this.iconBg.visible = this.achieveIcon.visible = !!this._SpeNameBonus,
            this.costIcon.source = ClientConfig.getItemIcon(this._info.coinid),
            this.costNum.text = this._info.price + ""
        },
        i.prototype.updateView = function() {
            var t = null,
            e = AchieveManager.getAwardMask(this._branchId, this._ruleId);
            e && (t = e.rule_mask),
            this.grp_get.visible = !t,
            this.flag_got.visible = !!t
        },
        i.prototype.destroy = function() {
            egret.clearTimeout(this.setTimeoutIndex),
            ImageButtonUtil.removeAll(this),
            egret.lifecycle.stage.removeEventListener(egret.Event.RESIZE, this._resize, this),
            this.removeChildren()
        },
        i
    } (eui.ItemRenderer);
    t.SptAchieveViewItem = e,
    __reflect(e.prototype, "pveRewardMall.SptAchieveViewItem")
} (pveRewardMall || (pveRewardMall = {}));
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
pveRewardMall; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.all = [],
            i._bitList = [],
            i.skinName = SptAchieveViewSkin,
            i.all = t.DataConfigManger.getInstance().getAllSptHeadIds(),
            i._itemId = i.all[0].coinid,
            EventManager.addEventListener(t.ConstantEvents.EVENT_UPDATE_VIEW, i.updateView, i),
            ImageButtonUtil.add(i.icon_coin,
            function() {
                var t = {};
                t.id = i._itemId,
                tipsPop.TipsPop.openItemPop(t)
            },
            i),
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this._list.itemRenderer = t.SptHeadViewItem,
            this._resize()
        },
        i.prototype.setData = function() {
            this.updateData(),
            this.updateView()
        },
        i.prototype._resize = function() {
            this._scrl.width = egret.lifecycle.stage.stageWidth - 193
        },
        i.prototype.updateData = function() {
            this.icon_coin.source = ClientConfig.getItemIcon(this._itemId);
            for (var t = [], e = [], i = 0, n = this.all; i < n.length; i++) {
                var r = n[i];
                core.AvatarDataMgr.GetInstance().GetHeadDataById(r.realid) ? e.push(r) : t.push(r),
                this._list.dataProvider = new eui.ArrayCollection(t.concat(e))
            }
        },
        i.prototype.updateView = function() {
            this.txtCount.text = ItemManager.getNumByID(this._itemId) + ""
        },
        i.prototype.destroy = function() {
            EventManager.removeEventListener(t.ConstantEvents.EVENT_UPDATE_VIEW, this.updateView, this),
            ImageButtonUtil.removeAll(this),
            e.prototype.destroy.call(this)
        },
        i
    } (t.BaseViewPanel);
    t.SptHeadView = e,
    __reflect(e.prototype, "pveRewardMall.SptHeadView")
} (pveRewardMall || (pveRewardMall = {}));
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
pveRewardMall; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t.skinName = SptPowerViewItemSkin,
            t
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            var i = this;
            e.prototype.childrenCreated.call(this),
            this.achievePoint.width = this.achievePoint.height = 80,
            this._resize(),
            ImageButtonUtil.add(this.grp_get,
            function() {
                return ItemManager.getNumByID(i._info.coinid) < i._info.price ? void Alarm.show("所需" + ItemXMLInfo.getName(i._info.coinid) + "不足！") : void SocketConnection.sendByQueue(42395, [109, i._info.id, 1, 0],
                function() {
                    i.updateView(),
                    EventManager.dispatchEventWith(t.ConstantEvents.EVENT_UPDATE_VIEW)
                })
            },
            this),
            this.once(egret.Event.REMOVED_FROM_STAGE, this.destroy, this),
            egret.lifecycle.stage.addEventListener(egret.Event.RESIZE, this._resize, this)
        },
        i.prototype._resize = function() {
            var t = this;
            this.setTimeoutIndex = egret.setTimeout(function() {
                t.width = t.parent.width,
                t.img_arrow.width = .14 * t.width,
                t.achievePoint.x = 16 + t.img_arrow.width / 2 - 40,
                t.img_frame.x = 16 + t.img_arrow.width / 2 - 44
            },
            this, 100)
        },
        i.prototype.dataChanged = function() {
            e.prototype.dataChanged.call(this),
            this._info = this.data,
            this.initView(),
            this.updateView()
        },
        i.prototype.initView = function() {
            this.iconBg.visible = this.achieveIcon.visible = !1;
            var t = this._info.realid;
            this.achievePoint.source = ClientConfig.GetAvatarHead(t),
            this.txt_achieve.text = config.Profilephoto.getItem(t).name,
            this.costIcon.source = ClientConfig.getItemIcon(this._info.coinid),
            this.costNum.text = this._info.price + ""
        },
        i.prototype.updateView = function() {
            var t = core.AvatarDataMgr.GetInstance().GetHeadDataById(this._info.realid);
            this.grp_get.visible = !t,
            this.flag_got.visible = !!t
        },
        i.prototype.destroy = function() {
            egret.clearTimeout(this.setTimeoutIndex),
            ImageButtonUtil.removeAll(this),
            egret.lifecycle.stage.removeEventListener(egret.Event.RESIZE, this._resize, this),
            this.removeChildren()
        },
        i
    } (eui.ItemRenderer);
    t.SptHeadViewItem = e,
    __reflect(e.prototype, "pveRewardMall.SptHeadViewItem")
} (pveRewardMall || (pveRewardMall = {}));
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
pveRewardMall; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            i.allIds = [],
            i.currGxPets = [],
            i.currType = 0,
            i.arrayColletion = new eui.ArrayCollection([]),
            i._curIndex = 0,
            i._itemNumArr = [],
            i.skinName = PverewardmallGxMarkSkin,
            i.allIds = t.DataConfigManger.getInstance().getAllSptItemIds(),
            i._forveridArr = [],
            i._itemsidArr = [];
            for (var n = 0; n < i.allIds.length; n++) {
                var r = t.DataConfigManger.getInstance().getInfoById(i.allIds[n]); - 1 == i._forveridArr.indexOf(r.UserInfoId) && i._forveridArr.push(r.UserInfoId),
                -1 == i._itemsidArr.indexOf(r.coinid) && i._itemsidArr.push(r.coinid)
            }
            return i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.scroller.viewport = this.list,
            this.list.itemRenderer = t.CultureItemsitem,
            this.list.dataProvider = this.arrayColletion,
            this.initEvents(),
            this.adaptLayout()
        },
        i.prototype.adaptLayout = function() {
            var t = 15,
            e = 144,
            i = this.list.layout,
            n = egret.lifecycle.stage.stageWidth - 1136,
            r = Math.floor(n / (e + t));
            0 != r && (i.requestedColumnCount = 6 + r, this.scroller.width = i.requestedColumnCount * (e + t)),
            egret.lifecycle.stage.stageWidth - 1136 - r * (e + i.horizontalGap) > 10 * i.requestedColumnCount && (i.horizontalGap = 17, i.verticalGap = 17, this.scroller.width = i.requestedColumnCount * (e + i.horizontalGap))
        },
        i.prototype._resize = function() {
            this.adaptLayout()
        },
        i.prototype.setData = function(t, e) {
            this.updateData(this.updateView)
        },
        i.prototype.initEvents = function() {
            var e = this;
            this.list.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.onTouchTapItemRenderHandle, this),
            EventManager.addEventListener(t.ConstantEvents.EVENT_UPDATE_VIEW, this._updateView, this),
            ImageButtonUtil.add(this.icon_coin,
            function() {
                var t = {};
                t.id = e._selectVo.needitem,
                tipsPop.TipsPop.openItemPop(t)
            },
            this)
        },
        i.prototype.removeEvents = function() {
            this.list.removeEventListener(eui.ItemTapEvent.ITEM_TAP, this.onTouchTapItemRenderHandle, this),
            EventManager.removeEventListener(t.ConstantEvents.EVENT_UPDATE_VIEW, this._updateView, this),
            ImageButtonUtil.removeAll(this)
        },
        i.prototype._updateView = function() {
            this.updateData(this.updateView)
        },
        i.prototype.updateData = function(t) {
            var e = this;
            this.touchChildren = this.touchEnabled = !1,
            this._fun = t,
            ItemManager.updateItems(this._itemsidArr,
            function() {
                e._itemNumArr = new Array;
                for (var t = 0; t < e._itemsidArr.length; t++) {
                    var i = ItemManager.getNumByID(e._itemsidArr[t]);
                    e._itemNumArr.push(i)
                }
            }),
            KTool.getMultiValue(this._forveridArr,
            function(t) {
                e._curDataForver = t,
                e.touchChildren = e.touchEnabled = !0,
                null != e._fun && e._fun()
            })
        },
        i.prototype.updateView = function() {
            this.updateRenderList()
        },
        i.prototype.updateRenderList = function() {
            this.updateRender(),
            this.list.selectedIndex = 0,
            this._selectVo = this.arrayColletion.getItemAt(this.list.selectedIndex),
            this.currentSelectInfo()
        },
        i.prototype.updateRender = function() {
            var t = this._parseRenderData();
            this.arrayColletion.replaceAll(t),
            this.arrayColletion.refresh(),
            this.list.validateNow()
        },
        i.prototype.onTouchTapItemRenderHandle = function(t) {
            this._selectVo = t.item,
            this.currentSelectInfo()
        },
        i.prototype.currentSelectInfo = function() {
            this.icon_coin.source = ClientConfig.getItemIcon(this._selectVo.needitem);
            var t = this._itemsidArr.indexOf(this._selectVo.needitem);
            this._curItemNum = this._itemNumArr.length > t ? this._itemNumArr[t] : 0,
            this.txtCount.text = core.gameUtil.ConvertItemNumView(this._curItemNum)
        },
        i.prototype._parseRenderData = function() {
            for (var e = [], i = 0; i < this.allIds.length; i++) {
                var n = {};
                n.indexId = this.allIds[i];
                var r = t.DataConfigManger.getInstance().getInfoById(n.indexId);
                n.itemId = r.realid,
                n.needitem = r.coinid,
                n.needcnt = r.price;
                var o = this._itemsidArr.indexOf(n.needitem);
                n.isCanGet = ~~this._itemNumArr[o] >= n.needcnt ? !0 : !1,
                n.exchangeConfig = r;
                var s = this._forveridArr.indexOf(r.UserInfoId);
                n.userInfo = this._curDataForver[s],
                e.push(n)
            }
            return e
        },
        i.prototype.destroy = function() {
            this.removeEvents(),
            this.list.removeChildren(),
            e.prototype.destroy.call(this)
        },
        i
    } (t.BaseViewPanel);
    t.SptItemView = e,
    __reflect(e.prototype, "pveRewardMall.SptItemView")
} (pveRewardMall || (pveRewardMall = {}));
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
pveRewardMall; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.skinName = "SptPetFactorItemViewSkin",
            e
        }
        return __extends(e, t),
        e.prototype.dataChanged = function() {
            this.img.source = ClientConfig.getItemIcon(this.data),
            this.txt.text = ItemManager.getNumByID(this.data) + ""
        },
        e
    } (eui.ItemRenderer);
    t.SptPetFactorItemView = e,
    __reflect(e.prototype, "pveRewardMall.SptPetFactorItemView")
} (pveRewardMall || (pveRewardMall = {}));
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
pveRewardMall; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t.itemId = 1722506,
            t.skinName = "SptPetFactorViewSkin",
            t
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            this._resize(),
            this.addEvent(),
            this.update(),
            this.init(),
            this.createList()
        },
        i.prototype.destroy = function() {
            e.prototype.destroy.call(this),
            ImageButtonUtil.removeAll(this),
            this.list.removeEventListener(eui.ItemTapEvent.ITEM_TAP, this.onClick, this),
            this.txtSearch.removeEventListener(egret.Event.CHANGE, this._debosFunc, this)
        },
        i.prototype.init = function() {
            var t = ClientConfig.getItemIcon(this.itemId);
            this.imgItem.source = this.imgExchangeItem.source = t,
            this.fragment = config.xml.getAnyRes("Fragment").Root.Fragment
        },
        i.prototype.addEvent = function() {
            var t = this;
            ImageButtonUtil.add(this.imgItem,
            function() {
                var e = {};
                e.id = t.itemId,
                tipsPop.TipsPop.openItemPop(e)
            },
            this);
            for (var e = function(e) {
                ImageButtonUtil.add(i["btnDown" + e],
                function() {
                    t.setIndex(t.index, e)
                },
                i)
            },
            i = this, n = 1; 3 >= n; n++) e(n);
            this.list.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.onClick, this),
            ImageButtonUtil.add(this.imgTe,
            function() {
                ModuleManager.showModule("petEffDescPanel", ["pet_eff_desc_panel"], t.data.MonsterID, "", AppDoStyle.NULL)
            },
            this),
            ImageButtonUtil.add(this.imgWu,
            function() {
                var e = {};
                e.id = t.data.MoveID,
                tipsPop.TipsPop.openSkillPop(e)
            },
            this),
            ImageButtonUtil.add(this.imgHead,
            function() {
                ModuleManager.showModule("petManualInfo", ["pet_info_manual"], {
                    type: "pet",
                    data: t.data.MonsterID
                })
            },
            this, !1, !1),
            this._debosFunc = core.gameUtil.DeBounce(this.onSearchChanged, this, 100),
            this.txtSearch.addEventListener(egret.Event.CHANGE, this._debosFunc, this),
            ImageButtonUtil.add(this.btnExchange,
            function() {
                var e;
                config.Exchange_clt.getItems().forEach(function(i, n) {
                    i.realid == t.curArrID[t.index] && (e = i.id)
                });
                var i = config.Exchange_clt.getItem(e),
                n = {};
                n.ins = i,
                n.caller = t,
                n.callBack = function(i, n) {
                    SocketConnection.sendByQueue(42395, [109, e, n, 0],
                    function(e) {
                        ItemManager.updateItems([t.curArrID[t.index]],
                        function() {
                            t.list.dataProvider.itemUpdated(t.curArrID[t.index]),
                            t.update(),
                            t.setIndex(t.index, t.type)
                        })
                    })
                },
                ModuleManager.showModuleByID(1, n)
            },
            this)
        },
        i.prototype.onClick = function(t) {
            this.setIndex(t.itemIndex, this.type)
        },
        i.prototype._resize = function() {
            this.width = this.parent.parent.width
        },
        i.prototype.update = function() {
            this.txtItem.text = ItemManager.getNumByID(this.itemId) + ""
        },
        i.prototype.createList = function() {
            var e = this;
            this.arrID = [],
            this.arrPrice = [],
            config.Exchange_clt.getItems().forEach(function(t) {
                13 == t.Subtag && (e.arrID.push(t.realid), e.arrPrice.push(t.price))
            },
            this),
            this.curArrID = this.arrID,
            this.curArrPrice = this.arrPrice,
            this.needFragment = [],
            this.arrID.forEach(function(t) {
                for (var i = 0; i < e.fragment.length; i++) t == e.fragment[i].ID && e.needFragment.push(e.fragment[i])
            }),
            this.list.itemRenderer = t.SptPetFactorItemView,
            this.list.dataProvider = new eui.ArrayCollection(this.arrID),
            this.setIndex(0, 1),
            this.list.selectedIndex = 0
        },
        i.prototype.setIndex = function(t, e) {
            this.index = t,
            this.type = e,
            this.imgUp1.visible = 1 == e,
            this.imgUp2.visible = 2 == e,
            this.imgUp3.visible = 3 == e;
            for (var i = 0; i < this.needFragment.length; i++) if (this.needFragment[i].ID == this.curArrID[t]) {
                this.data = this.needFragment[i];
                break
            }
            this.data || console.error("配表有误！"),
            this.showNone(0),
            this.imgUnique.visible = 1 == e && 1 == this.data.PetLimit;
            for (var i = 1; 4 >= i; i++) this["imgRarity" + i].visible = 1 == e && this.data.Rarity == i;
            this.imgHead.visible = 1 == e,
            this.imgHeadBG.visible = 1 == e,
            this.imgTe.visible = 2 == e,
            this.imgWu.visible = 3 == e;
            var n, r = ItemManager.getNumByID(this.data.ID);
            1 == e ? (this.txtName.text = PetXMLInfo.getName(this.data.MonsterID), this.imgHead.source = ClientConfig.getPetHeadPath(this.data.MonsterID), n = this.data.PetConsume) : 2 == e ? +this.data.NewSeIdx ? (this.txtName.text = "专属特性", n = this.data.NewseConsume) : this.showNone(2) : 3 == e && ( + this.data.MoveID ? (this.txtName.text = SkillXMLInfo.getName(this.data.MoveID), n = this.data.MovesConsume) : this.showNone(3)),
            this.process.value = r / n * 100,
            this.txtProcess.text = r + "/" + n,
            this.txtExchangeItem.text = this.curArrPrice[t] + ""
        },
        i.prototype.showNone = function(t) {
            var e = !t;
            this.txtName.visible = e,
            this.bg1.visible = e,
            this.bg2.visible = e,
            this.process.visible = e,
            this.txtProcess.visible = e,
            this.btnExchange.visible = e,
            this.bg3.visible = !e,
            this.imgNone.visible = !e,
            this.txtNone.visible = !e,
            this.txtNone.text = "开启的" + (2 == t ? "特性": "专属技能")
        },
        i.prototype.onSearchChanged = function() {
            var t = this,
            e = this.txtSearch.text;
            if ("" == e) this.list.dataProvider = new eui.ArrayCollection(this.arrID);
            else {
                var i = [],
                n = [];
                if ( + e > 0) this.arrID.forEach(function(r, o) {
                    SearchUtil.isMatch(e, r + "") && (i.push(r), n.push(t.arrPrice[o]))
                });
                else for (var r = 0; r < this.needFragment.length; r++) if (SearchUtil.isMatch(e, this.needFragment[r].Name)) {
                    var o = this.needFragment[r].ID,
                    s = this.arrID.indexOf(o);
                    i.push(o),
                    n.push(this.arrPrice[s])
                }
                this.list.dataProvider = new eui.ArrayCollection(i),
                this.curArrID = i,
                this.curArrPrice = n
            }
        },
        i
    } (t.BaseViewPanel);
    t.SptPetFactorView = e,
    __reflect(e.prototype, "pveRewardMall.SptPetFactorView")
} (pveRewardMall || (pveRewardMall = {}));
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
pveRewardMall; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            i.allGxPets = [],
            i.currGxPets = [],
            i.arrayColletion = new eui.ArrayCollection([]),
            i._monsterIdArr = [],
            i._getPetNum = {},
            i.skinName = PverewardmallGxpetSkin,
            i.allGxPets = t.DataConfigManger.getInstance().getAllSptPetIds(),
            i._forveridArr = [],
            i._itemsidArr = [],
            i._bitSetArr = [];
            for (var n = 0; n < i.allGxPets.length; n++) {
                var r = t.DataConfigManger.getInstance().getInfoById(i.allGxPets[n]); - 1 == i._forveridArr.indexOf(r.UserInfoId) && i._forveridArr.push(r.UserInfoId),
                -1 == i._itemsidArr.indexOf(r.coinid) && i._itemsidArr.push(r.coinid),
                -1 == i._monsterIdArr.indexOf(r.realid) && i._monsterIdArr.push(r.realid),
                r.BitSetId && -1 == i._bitSetArr.indexOf(r.BitSetId) && i._bitSetArr.push(r.BitSetId)
            }
            return i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.scroller.viewport = this.list,
            this.list.itemRenderer = t.PetHeadItem,
            this.list.dataProvider = this.arrayColletion,
            this.requireNumTx.touchEnabled = this.itemIcon.touchEnabled = !1,
            this.infobg.visible = this.btnInfo.visible = !0,
            this.initEvents(),
            this.adaptLayout()
        },
        i.prototype.adaptLayout = function() {
            var t = 166,
            e = egret.lifecycle.stage.stageWidth - 1136;
            if (e > 0) {
                this.grp_gxPet.x += e,
                this.grp_gxPet.x = Math.min(t, this.grp_gxPet.x);
                var i = egret.lifecycle.stage.stageWidth - this.grp_gxPet.x - 20;
                this.grp_gxPet.width = i
            }
        },
        i.prototype.setData = function(t, e) {
            this.updateData(this.updateView)
        },
        i.prototype.initEvents = function() {
            this.list.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.onTouchTapPetItemRenderHandle, this),
            ImageButtonUtil.add(this.img_exchange_btn, this.onTouchIamgeButtonHandler, this),
            ImageButtonUtil.add(this.icon_0, this.onTouchIamgeButtonHandler, this),
            ImageButtonUtil.add(this.icon_1, this.onTouchIamgeButtonHandler, this),
            ImageButtonUtil.add(this.icon_2, this.onTouchIamgeButtonHandler, this),
            ImageButtonUtil.add(this.icon_coin, this.onTouchIamgeButtonHandler, this),
            ImageButtonUtil.add(this.btnInfo, this.onTouchIamgeButtonHandler, this),
            egret.lifecycle.stage.addEventListener(egret.Event.RESIZE, this.adaptLayout, this)
        },
        i.prototype.removeEvents = function() {
            this.list.removeEventListener(eui.ItemTapEvent.ITEM_TAP, this.onTouchTapPetItemRenderHandle, this),
            egret.lifecycle.stage.removeEventListener(egret.Event.RESIZE, this.adaptLayout, this),
            ImageButtonUtil.removeAll(this)
        },
        i.prototype.onTouchIamgeButtonHandler = function(t) {
            var e = this;
            switch (t.target) {
            case this.img_exchange_btn:
                this._selectPetVo.isCanGet ? SocketConnection.sendByQueue(42395, [109, this._selectPetVo.indexId, 1, 0],
                function(t) {
                    e.updateData(e.updateView)
                }) : Alarm.show("所需" + ItemXMLInfo.getName(this._selectPetVo.needitem) + "不足！");
                break;
            case this.icon_0:
                ModuleManager.showModule("petEffDescPanel", ["pet_eff_desc_panel"], this._selectPetVo.petId, "", AppDoStyle.NULL);
                break;
            case this.icon_1:
                var i = {};
                i.id = +this._threeIds[1],
                tipsPop.TipsPop.openSkillPop(i);
                break;
            case this.icon_2:
                var n = {};
                n.ins = +this._threeIds[2],
                tipsPop.TipsPop.openCounterMarkPop(n);
                break;
            case this.icon_coin:
                var r = {};
                r.id = this._selectPetVo.needitem,
                tipsPop.TipsPop.openItemPop(r);
                break;
            case this.btnInfo:
                this._selectPetVo && PetManager.showPetIntroduce(this._selectPetVo.petId)
            }
        },
        i.prototype._updateView = function() {
            this.updateData(this.updateView)
        },
        i.prototype.updateData = function(t) {
            var e = this;
            this.touchChildren = this.touchEnabled = !1,
            this._fun = t,
            ItemManager.updateItems(this._itemsidArr,
            function() {
                e._itemNumArr = new Array;
                for (var t = 0; t < e._itemsidArr.length; t++) {
                    var i = ItemManager.getNumByID(e._itemsidArr[t]);
                    e._itemNumArr.push(i)
                }
            }),
            KTool.getMultiValue(this._forveridArr,
            function(t) {
                e._curDataForver = t,
                e.touchChildren = e.touchEnabled = !0,
                KTool.getBitSet(e._bitSetArr,
                function(t) {
                    e._bitData = t,
                    PetManager.checkMultiPet(e._monsterIdArr,
                    function(t) {
                        for (var i in e._monsterIdArr) e._getPetNum[e._monsterIdArr[i]] = t[i];
                        null != e._fun && e._fun()
                    })
                })
            })
        },
        i.prototype.updateView = function() {
            this.updateRenderList()
        },
        i.prototype.updateRenderList = function() {
            this.updateHeadRender(),
            this.list.selectedIndex = null != this._selectPetVo ? this._selectPetVo.listIndex: 0,
            this._selectPetVo = this.arrayColletion.getItemAt(this.list.selectedIndex),
            this.currentSelectPetInfo()
        },
        i.prototype.updateHeadRender = function() {
            var t = this._parseHeadRenderData();
            this.arrayColletion.replaceAll(t),
            this.arrayColletion.refresh(),
            this.list.validateNow()
        },
        i.prototype.onTouchTapPetItemRenderHandle = function(t) {
            null != t.item && (this._selectPetVo = t.item, this.currentSelectPetInfo())
        },
        i.prototype.currentSelectPetInfo = function() {
            var e = "resource/",
            i = e + "assets/pveRewardMall/sptPet/pet/" + this._selectPetVo.petId + ".png";
            this.pet_0.source = i,
            this.namebg.source = "resource/assets/pveRewardMall/sptPet/name/" + this._selectPetVo.petId + ".png",
            this.icon_coin.source = ClientConfig.getItemIcon(this._selectPetVo.needitem),
            this.itemIcon.source = ClientConfig.getItemIcon(this._selectPetVo.needitem);
            var n = this._itemsidArr.indexOf(this._selectPetVo.needitem);
            this._curItemNum = this._itemNumArr.length > n ? this._itemNumArr[n] : 0,
            this.txtCount.text = core.gameUtil.ConvertItemNumView(this._curItemNum),
            this.requireNumTx.text = String(this._selectPetVo.needcnt),
            this.flg_png.visible = !1,
            this._selectPetVo.isGet ? DisplayUtil.setEnabled(this.img_exchange_btn, !1, !0) : DisplayUtil.setEnabled(this.img_exchange_btn, !0, !1);
            var r = t.DataConfigManger.getInstance().getInfoById(this._selectPetVo.indexId),
            o = r.monappend;
            this._threeIds = o.split("_");
            SkillXMLInfo.hideMovesMap[this._selectPetVo.petId];
            this.icon_2.source = ClientConfig.getMarkPath(this._threeIds[2]);
            var s = 0,
            a = 0;
            if (r.BitSetId) {
                var n = this._bitSetArr.indexOf(r.BitSetId);
                s = this._bitData[n]
            }
            r.isjustone && (a = this._getPetNum[r.realid]),
            s || a ? (this.flg_png.visible = !0, this.img_exchange_btn.visible = this.requireNumTx.visible = this.itemIcon.visible = !1) : (this.flg_png.visible = !1, this.img_exchange_btn.visible = this.requireNumTx.visible = this.itemIcon.visible = !0)
        },
        i.prototype._parseHeadRenderData = function() {
            for (var e = [], i = this.allGxPets.length >= 9 ? this.allGxPets.length: 9, n = 0; i > n; n++) {
                var r = {};
                if (n < this.allGxPets.length) {
                    r.listIndex = n,
                    r.indexId = this.allGxPets[n];
                    var o = t.DataConfigManger.getInstance().getInfoById(r.indexId);
                    r.petId = o.realid,
                    r.needitem = o.coinid,
                    r.needcnt = o.price,
                    r.userInfoId = o.UserInfoId,
                    r.userInfoBitPos = o.UserInfoBitPos;
                    var s = this._itemsidArr.indexOf(r.needitem),
                    a = this._forveridArr.indexOf(r.userInfoId);
                    BitUtil.getBit(this._curDataForver[a], r.userInfoBitPos - 1) > 0 ? (r.isGet = !0, r.isCanGet = !1) : o.isjustone && this._getPetNum[o.realid] ? (r.isGet = !0, r.isCanGet = !1) : o.BitSetId && this._bitData[this._bitSetArr.indexOf(o.BitSetId)] ? (r.isGet = !0, r.isCanGet = !1) : r.isCanGet = this._itemNumArr[s] >= r.needcnt ? !0 : !1
                } else r = null;
                e.push(r)
            }
            e.sort(function(t, e) {
                return t ? e ? ~~t.isGet - ~~e.isGet: -1 : 1
            });
            for (var n in e) e[n] && (e[n].listIndex = ~~n);
            return e
        },
        i.prototype.destroy = function() {
            this.removeEvents(),
            this.list.removeChildren(),
            e.prototype.destroy.call(this)
        },
        i
    } (t.BaseViewPanel);
    t.SptPetView = e,
    __reflect(e.prototype, "pveRewardMall.SptPetView")
} (pveRewardMall || (pveRewardMall = {}));
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
pveRewardMall; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            i.all = [],
            i._bitList = [],
            i.skinName = SptAchieveViewSkin,
            i.all = t.DataConfigManger.getInstance().getAllSptPowerIds();
            for (var n = 0,
            r = i.all; n < r.length; n++) {
                var o = r[n];
                i._bitList.push(o.BitSetId)
            }
            return i._itemId = i.all[0].coinid,
            EventManager.addEventListener(t.ConstantEvents.EVENT_UPDATE_VIEW, i.updateView, i),
            ImageButtonUtil.add(i.icon_coin,
            function() {
                var t = {};
                t.id = i._itemId,
                tipsPop.TipsPop.openItemPop(t)
            },
            i),
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this._list.itemRenderer = t.SptPowerViewItem,
            this._resize()
        },
        i.prototype.setData = function() {
            this.updateData(),
            this.updateView()
        },
        i.prototype._resize = function() {
            this._scrl.width = egret.lifecycle.stage.stageWidth - 193
        },
        i.prototype.updateData = function() {
            var t = this;
            this.icon_coin.source = ClientConfig.getItemIcon(this._itemId);
            var e = [],
            i = [];
            KTool.getBitSet(this._bitList,
            function(n) {
                for (var r in n) n[r] ? i.push(t.all[r]) : e.push(t.all[r]);
                t._list.dataProvider = new eui.ArrayCollection(e.concat(i))
            })
        },
        i.prototype.updateView = function() {
            this.txtCount.text = ItemManager.getNumByID(this._itemId) + ""
        },
        i.prototype.destroy = function() {
            EventManager.removeEventListener(t.ConstantEvents.EVENT_UPDATE_VIEW, this.updateView, this),
            ImageButtonUtil.removeAll(this),
            e.prototype.destroy.call(this)
        },
        i
    } (t.BaseViewPanel);
    t.SptPowerView = e,
    __reflect(e.prototype, "pveRewardMall.SptPowerView")
} (pveRewardMall || (pveRewardMall = {}));
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
pveRewardMall; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t.skinName = markItemSkin,
            t
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.addEventListener(egret.Event.ADDED_TO_STAGE, this.initEvents, this)
        },
        i.prototype.initEvents = function() {
            this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this),
            ImageButtonUtil.add(this.btnbg, this.onTouchIamgeButtonHandler, this)
        },
        i.prototype.removeEvents = function() {
            this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this),
            ImageButtonUtil.removeAll(this)
        },
        i.prototype.onTouchIamgeButtonHandler = function(e) {
            var i = this;
            switch (e.target) {
            case this.btnbg:
                var n = {};
                n.ins = this._vo.exchangeConfig,
                n.caller = this,
                n.callBack = function(e, n) {
                    SocketConnection.sendByQueue(42395, [109, i._vo.indexId, n, 0],
                    function(e) {
                        EventManager.dispatchEventWith(t.ConstantEvents.EVENT_UPDATE_VIEW)
                    })
                },
                ModuleManager.showModuleByID(1, n);
                break;
            case this.itemIcon:
                var r = {};
                r.ins = this._vo.markId,
                tipsPop.TipsPop.openCounterMarkPop(r)
            }
        },
        i.prototype.oldExchange = function() {
            var e = this,
            i = ItemManager.getNumByID(this._vo.needitem),
            n = this._vo.isDiscount ? .5 * this._vo.needcnt: this._vo.needcnt;
            i >= n ? Alert.show("是否确认兑换“" + ItemXMLInfo.getName(this._vo.markId) + "”？",
            function() {
                SocketConnection.sendByQueue(42395, [109, e._vo.indexId, 1, 0],
                function(e) {
                    EventManager.dispatchEventWith(t.ConstantEvents.EVENT_UPDATE_VIEW)
                })
            }) : Alarm.show("所需" + ItemXMLInfo.getName(this._vo.needitem) + "不足！")
        },
        i.prototype._showTips = function(t) {
            var e;
            1 === t.type ? (e = {},
            e.id = t.id, tipsPop.TipsPop.openItemPop(e)) : (e = {},
            e.ins = t.id, tipsPop.TipsPop.openCounterMarkPop(e))
        },
        Object.defineProperty(i.prototype, "selected", {
            get: function() {
                return egret.superSetter(i, this, "selected")
            },
            set: function(t) {
                egret.superSetter(i, this, "selected")
            },
            enumerable: !0,
            configurable: !0
        }),
        i.prototype.dataChanged = function() {
            this._vo = this.data,
            this.txtName.text = ItemXMLInfo.getName(this._vo.markId),
            this.txtCount.text = String(this._vo.isDiscount ? .5 * this._vo.needcnt: this._vo.needcnt),
            this.itemIcon.source = ClientConfig.getMarkPath(this._vo.markId),
            this.coin.source = ClientConfig.getItemIcon(this._vo.needitem),
            this.coin.touchEnabled = !1,
            this.txtCount.touchEnabled = !1,
            this.flag_png.visible = this._vo.isDiscount
        },
        i.prototype.getVo = function() {
            return this._vo
        },
        i.prototype.destroy = function() {
            this.removeEvents()
        },
        i
    } (eui.ItemRenderer);
    t.gxMarkItem = e,
    __reflect(e.prototype, "pveRewardMall.gxMarkItem")
} (pveRewardMall || (pveRewardMall = {})),
window.pveRewardMall = window.pveRewardMall || {};
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
generateEUI.paths["resource/eui_skins/ChildNodeLabSkin.exml"] = window.pveRewardMall.ChildNodeLabSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["txtBg", "txtName"],
        this.height = 48,
        this.width = 130,
        this.elementsContent = [this._Image1_i(), this.txtName_i()],
        this.txtBg_i(),
        this.states = [new eui.State("down", [new eui.AddItems("txtBg", "", 2, "txtName")]), new eui.State("up", [new eui.SetProperty("txtName", "textColor", 7057391)])]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 36,
        t.left = 0,
        t.right = 0,
        t.source = "common_tab_up2_bg_png",
        t.y = 6,
        t
    },
    i.txtBg_i = function() {
        var t = new eui.Image;
        return this.txtBg = t,
        t.height = 48,
        t.horizontalCenter = 0,
        t.source = "common_sub_tab_bg_png",
        t.verticalCenter = 0,
        t
    },
    i.txtName_i = function() {
        var t = new eui.Label;
        return this.txtName = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.horizontalCenter = 0,
        t.size = 20,
        t.text = "速度",
        t.textColor = 16775416,
        t.verticalCenter = 0,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/elvenKingPet/elevnKingHeadItemSkin.exml"] = window.elevnKingHeadItemSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["noPetPng", "headBg_png", "headIcon_png", "img_reddot", "grp_head", "select_png"],
        this.height = 88,
        this.width = 88,
        this.elementsContent = [this.noPetPng_i(), this.grp_head_i(), this.select_png_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.noPetPng_i = function() {
        var t = new eui.Image;
        return this.noPetPng = t,
        t.height = 82,
        t.source = "pveRewardMall_gxPet_head_noFull_bg_png",
        t.visible = !0,
        t.width = 82,
        t.x = 3,
        t.y = 3,
        t
    },
    i.grp_head_i = function() {
        var t = new eui.Group;
        return this.grp_head = t,
        t.visible = !0,
        t.x = 3,
        t.y = 3,
        t.elementsContent = [this.headBg_png_i(), this.headIcon_png_i(), this.img_reddot_i()],
        t
    },
    i.headBg_png_i = function() {
        var t = new eui.Image;
        return this.headBg_png = t,
        t.height = 82,
        t.source = "pveRewardMall_gxPet_headBg_png_png",
        t.visible = !0,
        t.width = 82,
        t
    },
    i.headIcon_png_i = function() {
        var t = new eui.Image;
        return this.headIcon_png = t,
        t.height = 80,
        t.horizontalCenter = 0,
        t.source = "pveRewardMall_gxPet_headIcon_png_png",
        t.verticalCenter = 0,
        t.visible = !0,
        t.width = 80,
        t
    },
    i.img_reddot_i = function() {
        var t = new eui.Image;
        return this.img_reddot = t,
        t.source = "pveRewardMall_gxPet_img_reddot_png",
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t
    },
    i.select_png_i = function() {
        var t = new eui.Image;
        return this.select_png = t,
        t.height = 88,
        t.source = "common_reward_selcted_head_png",
        t.visible = !0,
        t.width = 88,
        t.x = 0,
        t.y = 0,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/elvenKingPet/elevnKingPetSkin.exml"] = window.elevnKingPetSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["item_bg", "icon_coin", "txtCount", "grp_itemInfo", "choosebg", "chooseTx", "title_bg", "title_tx", "pet_0", "name_0", "icon_2", "icon_1", "icon_0", "rewardIcon", "img_exchange_btn", "itemNumTx", "itemIcon", "flg_png", "grp_excahnge", "headsBg_png", "list", "scroller", "grp_heads", "Gxp_pet"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.grp_itemInfo_i(), this.choosebg_i(), this.chooseTx_i(), this.title_bg_i(), this.title_tx_i(), this.Gxp_pet_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.grp_itemInfo_i = function() {
        var t = new eui.Group;
        return this.grp_itemInfo = t,
        t.right = 88,
        t.y = 12,
        t.elementsContent = [this.item_bg_i(), this.icon_coin_i(), this.txtCount_i()],
        t
    },
    i.item_bg_i = function() {
        var t = new eui.Image;
        return this.item_bg = t,
        t.source = "common_reward_progress_bg_png",
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t
    },
    i.icon_coin_i = function() {
        var t = new eui.Image;
        return this.icon_coin = t,
        t.height = 55,
        t.left = 0,
        t.scaleX = .7,
        t.scaleY = .7,
        t.source = "pveRewardMall_icon_coin_png",
        t.width = 55,
        t.y = -6,
        t
    },
    i.txtCount_i = function() {
        var t = new eui.Label;
        return this.txtCount = t,
        t.fontFamily = "黑体",
        t.size = 19,
        t.text = "0000",
        t.textColor = 13887988,
        t.x = 58,
        t.y = 3,
        t
    },
    i.choosebg_i = function() {
        var t = new eui.Image;
        return this.choosebg = t,
        t.source = "pveElvenKingTrialExchange_choosebg_png",
        t.visible = !1,
        t.x = 706.58,
        t.y = 424.19,
        t
    },
    i.chooseTx_i = function() {
        var t = new eui.Label;
        return this.chooseTx = t,
        t.fontFamily = "黑体",
        t.size = 16,
        t.text = "选择精灵王",
        t.textColor = 16777215,
        t.visible = !1,
        t.x = 803.58,
        t.y = 428.19,
        t
    },
    i.title_bg_i = function() {
        var t = new eui.Image;
        return this.title_bg = t,
        t.source = "pveElvenKingTrialExchange_title_bg_png",
        t.visible = !1,
        t.x = 155,
        t.y = 55,
        t
    },
    i.title_tx_i = function() {
        var t = new eui.Label;
        return this.title_tx = t,
        t.fontFamily = "黑体",
        t.size = 16,
        t.text = "集齐所需精灵王气息即可兑换精灵王及其专属特性、第五技能（附赠专属全能刻印）",
        t.textColor = 16777215,
        t.visible = !1,
        t.x = 160,
        t.y = 60,
        t
    },
    i.Gxp_pet_i = function() {
        var t = new eui.Group;
        return this.Gxp_pet = t,
        t.width = 1004,
        t.x = 132,
        t.y = 50,
        t.elementsContent = [this.pet_0_i(), this.name_0_i(), this.rewardIcon_i(), this.grp_excahnge_i(), this.grp_heads_i()],
        t
    },
    i.pet_0_i = function() {
        var t = new eui.Image;
        return this.pet_0 = t,
        t.scale9Grid = new egret.Rectangle(803, 0, 7, 0),
        t.source = "pveRewardMall_gxPet_pet_test_png",
        t.visible = !0,
        t.percentWidth = 100,
        t.x = 0,
        t.y = 0,
        t
    },
    i.name_0_i = function() {
        var t = new eui.Image;
        return this.name_0 = t,
        t.right = 0,
        t.source = "pveRewardMall_gxPet_petName_Test_png",
        t.y = 54,
        t
    },
    i.rewardIcon_i = function() {
        var t = new eui.Group;
        return this.rewardIcon = t,
        t.right = 33,
        t.y = 228,
        t.elementsContent = [this.icon_2_i(), this.icon_1_i(), this.icon_0_i()],
        t
    },
    i.icon_2_i = function() {
        var t = new eui.Image;
        return this.icon_2 = t,
        t.height = 55,
        t.scaleX = .86,
        t.scaleY = .86,
        t.source = "pveRewardMall_gxPet_icon_0_png",
        t.width = 55,
        t.x = 112,
        t.y = -4,
        t
    },
    i.icon_1_i = function() {
        var t = new eui.Image;
        return this.icon_1 = t,
        t.height = 47,
        t.source = "pveRewardMall_gxPet_icon_1_png",
        t.width = 47,
        t.x = 0,
        t.y = 0,
        t
    },
    i.icon_0_i = function() {
        var t = new eui.Image;
        return this.icon_0 = t,
        t.height = 47,
        t.source = "pveRewardMall_gxPet_icon_2_png",
        t.width = 47,
        t.x = 57,
        t.y = 0,
        t
    },
    i.grp_excahnge_i = function() {
        var t = new eui.Group;
        return this.grp_excahnge = t,
        t.right = 60,
        t.y = 340,
        t.elementsContent = [this.img_exchange_btn_i(), this._Group1_i(), this.flg_png_i()],
        t
    },
    i.img_exchange_btn_i = function() {
        var t = new eui.Image;
        return this.img_exchange_btn = t,
        t.height = 50,
        t.source = "common_reward_btnRewardbg_png",
        t.width = 174,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.horizontalCenter = 0,
        t.touchChildren = !1,
        t.touchEnabled = !1,
        t.verticalCenter = 0,
        t.elementsContent = [this.itemNumTx_i(), this.itemIcon_i()],
        t
    },
    i.itemNumTx_i = function() {
        var t = new eui.Label;
        return this.itemNumTx = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 26,
        t.text = "10000",
        t.textColor = 9261339,
        t.x = 40.8,
        t.y = 2,
        t
    },
    i.itemIcon_i = function() {
        var t = new eui.Image;
        return this.itemIcon = t,
        t.height = 55,
        t.scaleX = .56,
        t.scaleY = .56,
        t.source = "pveRewardMall_gxPet_itemIcon_png",
        t.width = 55,
        t.x = 0,
        t.y = 0,
        t
    },
    i.flg_png_i = function() {
        var t = new eui.Image;
        return this.flg_png = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "pveElvenKingTrialExchange_flg_png_png",
        t.visible = !0,
        t.x = 62.34,
        t.y = -3.05,
        t
    },
    i.grp_heads_i = function() {
        var t = new eui.Group;
        return this.grp_heads = t,
        t.left = 5,
        t.right = 5,
        t.visible = !0,
        t.y = 484,
        t.elementsContent = [this.headsBg_png_i(), this.scroller_i()],
        t
    },
    i.headsBg_png_i = function() {
        var t = new eui.Image;
        return this.headsBg_png = t,
        t.height = 106,
        t.source = "common_reward_bottom_bg_png",
        t.percentWidth = 100,
        t.x = 0,
        t.y = 0,
        t
    },
    i.scroller_i = function() {
        var t = new eui.Scroller;
        return this.scroller = t,
        t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.height = 106,
        t.left = 22,
        t.right = 22,
        t.viewport = this._Group2_i(),
        t
    },
    i._Group2_i = function() {
        var t = new eui.Group;
        return t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.height = 116.67,
        t.width = 983.96,
        t.elementsContent = [this.list_i()],
        t
    },
    i.list_i = function() {
        var t = new eui.List;
        return this.list = t,
        t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.height = 110,
        t.width = 990.9,
        t.x = 0,
        t.y = 0,
        t.layout = this._HorizontalLayout1_i(),
        t
    },
    i._HorizontalLayout1_i = function() {
        var t = new eui.HorizontalLayout;
        return t.gap = 15,
        t.verticalAlign = "middle",
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/gxMark/markItemSkin.exml"] = window.markItemSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["item_bg", "name_bg", "txtName", "itemIcon", "txt_count", "btnbg", "txtCount", "coin", "exchange", "flag_png", "txt_limitNum", "grp_limit", "exchangeItem", "mark"],
        this.height = 189,
        this.width = 144,
        this.elementsContent = [this.mark_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.mark_i = function() {
        var t = new eui.Group;
        return this.mark = t,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this.exchangeItem_i()],
        t
    },
    i.exchangeItem_i = function() {
        var t = new eui.Group;
        return this.exchangeItem = t,
        t.anchorOffsetX = 1,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this.item_bg_i(), this.name_bg_i(), this.txtName_i(), this.itemIcon_i(), this.txt_count_i(), this.exchange_i(), this.flag_png_i(), this.grp_limit_i()],
        t
    },
    i.item_bg_i = function() {
        var t = new eui.Image;
        return this.item_bg = t,
        t.source = "pveRewardMall_gxMark_item_bg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.name_bg_i = function() {
        var t = new eui.Image;
        return this.name_bg = t,
        t.source = "pveRewardMall_gxMark_name_bg_png",
        t.x = 1,
        t.y = 116,
        t
    },
    i.txtName_i = function() {
        var t = new eui.Label;
        return this.txtName = t,
        t.fontFamily = "黑体",
        t.height = 16,
        t.horizontalCenter = 0,
        t.size = 16,
        t.text = "圣战之巅",
        t.textAlign = "center",
        t.textColor = 16777215,
        t.width = 130,
        t.y = 120,
        t
    },
    i.itemIcon_i = function() {
        var t = new eui.Image;
        return this.itemIcon = t,
        t.height = 64,
        t.horizontalCenter = .5,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "pveRewardMall_gxMark_icon_png",
        t.width = 63,
        t.y = 28,
        t
    },
    i.txt_count_i = function() {
        var t = new eui.Label;
        return this.txt_count = t,
        t.right = 8,
        t.size = 18,
        t.text = "Label",
        t.visible = !1,
        t.y = 93,
        t
    },
    i.exchange_i = function() {
        var t = new eui.Group;
        return this.exchange = t,
        t.touchChildren = !0,
        t.touchEnabled = !0,
        t.x = 0,
        t.y = 147,
        t.elementsContent = [this.btnbg_i(), this._Group1_i()],
        t
    },
    i.btnbg_i = function() {
        var t = new eui.Image;
        return this.btnbg = t,
        t.height = 40,
        t.source = "common_btn_bg_style_orange_2_png",
        t.width = 144,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.horizontalCenter = -5.5,
        t.touchChildren = !1,
        t.touchEnabled = !1,
        t.y = 9,
        t.elementsContent = [this.txtCount_i(), this.coin_i()],
        t
    },
    i.txtCount_i = function() {
        var t = new eui.Label;
        return this.txtCount = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 20,
        t.text = "300",
        t.textColor = 8341784,
        t.x = 29,
        t.y = 1.96,
        t
    },
    i.coin_i = function() {
        var t = new eui.Image;
        return this.coin = t,
        t.height = 22,
        t.source = "pveRewardMall_gxMark_icon_coin1_png",
        t.width = 20,
        t.x = 0,
        t.y = 0,
        t
    },
    i.flag_png_i = function() {
        var t = new eui.Image;
        return this.flag_png = t,
        t.source = "pveRewardMall_gxMark_weekly_flag_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.grp_limit_i = function() {
        var t = new eui.Group;
        return this.grp_limit = t,
        t.visible = !1,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image1_i(), this.txt_limitNum_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 27,
        t.source = "mark_item_limitBg_png",
        t.width = 142,
        t.x = 0,
        t.y = 0,
        t
    },
    i.txt_limitNum_i = function() {
        var t = new eui.Label;
        return this.txt_limitNum = t,
        t.size = 18,
        t.stroke = 1,
        t.strokeColor = 15997,
        t.text = "每日限兑9/9",
        t.textColor = 6611199,
        t.x = 5,
        t.y = 5,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/gxMark/PverewardmallGxMarkSkin.exml"] = window.PverewardmallGxMarkSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["item_bg", "icon_coin", "txtCount", "grp_itemInfo", "list", "scroller"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.grp_itemInfo_i(), this.scroller_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.grp_itemInfo_i = function() {
        var t = new eui.Group;
        return this.grp_itemInfo = t,
        t.right = 88,
        t.y = 12,
        t.elementsContent = [this.item_bg_i(), this.icon_coin_i(), this.txtCount_i()],
        t
    },
    i.item_bg_i = function() {
        var t = new eui.Image;
        return this.item_bg = t,
        t.source = "common_reward_progress_bg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.icon_coin_i = function() {
        var t = new eui.Image;
        return this.icon_coin = t,
        t.height = 55,
        t.scaleX = .7,
        t.scaleY = .7,
        t.source = "pveRewardMall_icon_coin_png",
        t.width = 55,
        t.y = -6,
        t
    },
    i.txtCount_i = function() {
        var t = new eui.Label;
        return this.txtCount = t,
        t.fontFamily = "黑体",
        t.size = 19,
        t.text = "0000",
        t.textColor = 13887988,
        t.x = 58,
        t.y = 3,
        t
    },
    i.scroller_i = function() {
        var t = new eui.Scroller;
        return this.scroller = t,
        t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.height = 554.55,
        t.scrollPolicyH = "off",
        t.scrollPolicyV = "on",
        t.width = 939.39,
        t.x = 171,
        t.y = 58.28,
        t.viewport = this._Group1_i(),
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.height = 0,
        t.width = 0,
        t.x = 1,
        t.elementsContent = [this.list_i()],
        t
    },
    i.list_i = function() {
        var t = new eui.List;
        return this.list = t,
        t.height = 0,
        t.width = 0,
        t.x = 0,
        t.y = 0,
        t.layout = this._TileLayout1_i(),
        t
    },
    i._TileLayout1_i = function() {
        var t = new eui.TileLayout;
        return t.horizontalGap = 15,
        t.orientation = "rows",
        t.requestedColumnCount = 6,
        t.verticalGap = 15,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/gxPet/gxPetHeadSkin.exml"] = window.gxPetHeadSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["noPetPng", "headBg_png", "headIcon_png", "img_reddot", "grp_head", "select_png"],
        this.height = 88,
        this.width = 88,
        this.elementsContent = [this.noPetPng_i(), this.grp_head_i(), this.select_png_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.noPetPng_i = function() {
        var t = new eui.Image;
        return this.noPetPng = t,
        t.height = 82,
        t.source = "pveRewardMall_gxPet_head_noFull_bg_png",
        t.visible = !0,
        t.width = 82,
        t.x = 3,
        t.y = 3,
        t
    },
    i.grp_head_i = function() {
        var t = new eui.Group;
        return this.grp_head = t,
        t.visible = !0,
        t.x = 3,
        t.y = 3,
        t.elementsContent = [this.headBg_png_i(), this.headIcon_png_i(), this.img_reddot_i()],
        t
    },
    i.headBg_png_i = function() {
        var t = new eui.Image;
        return this.headBg_png = t,
        t.height = 82,
        t.source = "pveRewardMall_gxPet_headBg_png_png",
        t.visible = !0,
        t.width = 82,
        t
    },
    i.headIcon_png_i = function() {
        var t = new eui.Image;
        return this.headIcon_png = t,
        t.height = 80,
        t.horizontalCenter = 0,
        t.source = "pveRewardMall_gxPet_headIcon_png_png",
        t.verticalCenter = 0,
        t.visible = !0,
        t.width = 80,
        t
    },
    i.img_reddot_i = function() {
        var t = new eui.Image;
        return this.img_reddot = t,
        t.source = "pveRewardMall_gxPet_img_reddot_png",
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t
    },
    i.select_png_i = function() {
        var t = new eui.Image;
        return this.select_png = t,
        t.height = 88,
        t.source = "common_reward_selcted_head_png",
        t.visible = !0,
        t.width = 88,
        t.x = 0,
        t.y = 0,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/gxPet/PverewardmallGxpetSkin.exml"] = window.PverewardmallGxpetSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["item_bg", "icon_coin", "txtCount", "grp_itemInfo", "petBg", "pet_0", "petleft_bg", "namebg", "grp_petad", "icon_2", "icon_1", "icon_0", "rewardIcon", "grp_ad", "img_exchange_btn", "requireNumTx", "itemIcon", "flg_png", "grp_excahnge", "headsBg_png", "list", "scroller", "grp_heads", "infobg", "btnInfo", "grp_gxPet"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.grp_itemInfo_i(), this.grp_gxPet_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.grp_itemInfo_i = function() {
        var t = new eui.Group;
        return this.grp_itemInfo = t,
        t.right = 88,
        t.y = 12,
        t.elementsContent = [this.item_bg_i(), this.icon_coin_i(), this.txtCount_i()],
        t
    },
    i.item_bg_i = function() {
        var t = new eui.Image;
        return this.item_bg = t,
        t.source = "common_reward_progress_bg_png",
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t
    },
    i.icon_coin_i = function() {
        var t = new eui.Image;
        return this.icon_coin = t,
        t.height = 55,
        t.left = 0,
        t.scaleX = .7,
        t.scaleY = .7,
        t.source = "pveRewardMall_icon_coin_png",
        t.width = 55,
        t.y = -6,
        t
    },
    i.txtCount_i = function() {
        var t = new eui.Label;
        return this.txtCount = t,
        t.fontFamily = "黑体",
        t.size = 19,
        t.text = "0000",
        t.textColor = 13887988,
        t.x = 58,
        t.y = 3,
        t
    },
    i.grp_gxPet_i = function() {
        var t = new eui.Group;
        return this.grp_gxPet = t,
        t.visible = !0,
        t.width = 1004,
        t.x = 132,
        t.y = 50,
        t.elementsContent = [this.grp_ad_i(), this.grp_excahnge_i(), this.grp_heads_i(), this.infobg_i(), this.btnInfo_i()],
        t
    },
    i.grp_ad_i = function() {
        var t = new eui.Group;
        return this.grp_ad = t,
        t.visible = !0,
        t.percentWidth = 100,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this.grp_petad_i(), this.rewardIcon_i()],
        t
    },
    i.grp_petad_i = function() {
        var t = new eui.Group;
        return this.grp_petad = t,
        t.anchorOffsetX = 0,
        t.visible = !0,
        t.percentWidth = 100,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this.petBg_i(), this.pet_0_i(), this.petleft_bg_i(), this.namebg_i()],
        t
    },
    i.petBg_i = function() {
        var t = new eui.Image;
        return this.petBg = t,
        t.source = "pveRewardMall_gxPet_petBg_png",
        t.visible = !1,
        t.x = 0,
        t.y = 0,
        t
    },
    i.pet_0_i = function() {
        var t = new eui.Image;
        return this.pet_0 = t,
        t.anchorOffsetX = 0,
        t.scale9Grid = new egret.Rectangle(803, 0, 7, 0),
        t.source = "pveRewardMall_gxPet_pet_test_png",
        t.visible = !0,
        t.percentWidth = 100,
        t.x = 0,
        t.y = 0,
        t
    },
    i.petleft_bg_i = function() {
        var t = new eui.Image;
        return this.petleft_bg = t,
        t.anchorOffsetY = 0,
        t.height = 583,
        t.source = "pveRewardMall_gxPet_pet_left_png",
        t.x = 0,
        t
    },
    i.namebg_i = function() {
        var t = new eui.Image;
        return this.namebg = t,
        t.right = 0,
        t.source = "pveRewardMall_gxPet_petName_Test_png",
        t.visible = !0,
        t.y = 52,
        t
    },
    i.rewardIcon_i = function() {
        var t = new eui.Group;
        return this.rewardIcon = t,
        t.right = 33,
        t.visible = !0,
        t.width = 160,
        t.y = 226,
        t.elementsContent = [this.icon_2_i(), this.icon_1_i(), this.icon_0_i()],
        t
    },
    i.icon_2_i = function() {
        var t = new eui.Image;
        return this.icon_2 = t,
        t.height = 55,
        t.scaleX = .86,
        t.scaleY = .86,
        t.source = "pveRewardMall_gxPet_icon_0_png",
        t.width = 55,
        t.x = 112,
        t.y = -2.011,
        t
    },
    i.icon_1_i = function() {
        var t = new eui.Image;
        return this.icon_1 = t,
        t.height = 47,
        t.source = "pveRewardMall_gxPet_icon_1_png",
        t.width = 47,
        t.x = -1.236,
        t.y = -1.236,
        t
    },
    i.icon_0_i = function() {
        var t = new eui.Image;
        return this.icon_0 = t,
        t.height = 47,
        t.source = "pveRewardMall_gxPet_icon_2_png",
        t.width = 47,
        t.x = 55.764,
        t.y = -.618,
        t
    },
    i.grp_excahnge_i = function() {
        var t = new eui.Group;
        return this.grp_excahnge = t,
        t.right = 60,
        t.visible = !0,
        t.y = 338,
        t.elementsContent = [this.img_exchange_btn_i(), this._Group1_i(), this.flg_png_i()],
        t
    },
    i.img_exchange_btn_i = function() {
        var t = new eui.Image;
        return this.img_exchange_btn = t,
        t.height = 50,
        t.source = "common_reward_btnRewardbg_png",
        t.width = 174,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.horizontalCenter = 0,
        t.touchChildren = !1,
        t.touchEnabled = !1,
        t.verticalCenter = 0,
        t.elementsContent = [this.requireNumTx_i(), this.itemIcon_i()],
        t
    },
    i.requireNumTx_i = function() {
        var t = new eui.Label;
        return this.requireNumTx = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 26,
        t.text = "10000",
        t.textColor = 9261339,
        t.x = 40.8,
        t.y = 2,
        t
    },
    i.itemIcon_i = function() {
        var t = new eui.Image;
        return this.itemIcon = t,
        t.height = 55,
        t.scaleX = .56,
        t.scaleY = .56,
        t.source = "pveRewardMall_gxPet_itemIcon_png",
        t.width = 55,
        t.x = 0,
        t.y = 0,
        t
    },
    i.flg_png_i = function() {
        var t = new eui.Image;
        return this.flg_png = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "pveElvenKingTrialExchange_flg_png_png",
        t.visible = !0,
        t.x = 62.34,
        t.y = -3.05,
        t
    },
    i.grp_heads_i = function() {
        var t = new eui.Group;
        return this.grp_heads = t,
        t.bottom = 0,
        t.left = 5,
        t.right = 5,
        t.visible = !0,
        t.elementsContent = [this.headsBg_png_i(), this.scroller_i()],
        t
    },
    i.headsBg_png_i = function() {
        var t = new eui.Image;
        return this.headsBg_png = t,
        t.height = 106,
        t.source = "common_reward_bottom_bg_png",
        t.percentWidth = 100,
        t.x = 0,
        t.y = 0,
        t
    },
    i.scroller_i = function() {
        var t = new eui.Scroller;
        return this.scroller = t,
        t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.height = 106,
        t.left = 22,
        t.right = 22,
        t.y = 0,
        t.viewport = this._Group2_i(),
        t
    },
    i._Group2_i = function() {
        var t = new eui.Group;
        return t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.height = 116.67,
        t.width = 983.96,
        t.elementsContent = [this.list_i()],
        t
    },
    i.list_i = function() {
        var t = new eui.List;
        return this.list = t,
        t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.height = 110,
        t.width = 990.9,
        t.x = 0,
        t.y = 0,
        t.layout = this._HorizontalLayout1_i(),
        t
    },
    i._HorizontalLayout1_i = function() {
        var t = new eui.HorizontalLayout;
        return t.gap = 15,
        t.verticalAlign = "middle",
        t
    },
    i.infobg_i = function() {
        var t = new eui.Image;
        return this.infobg = t,
        t.height = 91,
        t.source = "pveRewardMall_infobg_png",
        t.visible = !1,
        t.width = 91,
        t.x = 10,
        t.y = 392,
        t
    },
    i.btnInfo_i = function() {
        var t = new eui.Image;
        return this.btnInfo = t,
        t.height = 74,
        t.source = "pveRewardMall_btnInfo_png",
        t.visible = !1,
        t.width = 74,
        t.x = 23,
        t.y = 399,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/ParentNodeLabSkin.exml"] = window.pveRewardMall.ParentNodeLabSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "txtName"],
        this.height = 75,
        this.width = 141,
        this.elementsContent = [this.bg_i(), this.txtName_i()],
        this.states = [new eui.State("up", [new eui.SetProperty("bg", "source", "common_tab_up_bg_png"), new eui.SetProperty("txtName", "textColor", 6991854), new eui.SetProperty("txtName", "y", 25)]), new eui.State("down", [new eui.SetProperty("bg", "source", "common_tab_down_bg_png"), new eui.SetProperty("txtName", "textColor", 16777215), new eui.SetProperty("txtName", "y", 25)])]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.source = "common_tab_down_bg_png",
        t.percentWidth = 100,
        t
    },
    i.txtName_i = function() {
        var t = new eui.Label;
        return this.txtName = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.horizontalCenter = 0,
        t.size = 26,
        t.text = "最新获得",
        t.y = 25,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/petFactor/SptPetFactorItemViewSkin.exml"] = window.SptPetFactorItemViewSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["img", "txt"],
        this.elementsContent = [this.img_i(), this.txt_i()],
        this._Image1_i(),
        this.states = [new eui.State("up", [new eui.SetProperty("img", "x", 15), new eui.SetProperty("img", "y", 15), new eui.SetProperty("txt", "x", 25), new eui.SetProperty("txt", "y", 76), new eui.SetProperty("", "width", 112), new eui.SetProperty("", "height", 112)]), new eui.State("down", [new eui.AddItems("_Image1", "", 1, ""), new eui.SetProperty("img", "x", 15), new eui.SetProperty("img", "y", 15), new eui.SetProperty("txt", "x", 25), new eui.SetProperty("txt", "y", 76)])]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.img_i = function() {
        var t = new eui.Image;
        return this.img = t,
        t.scaleX = 1.5,
        t.scaleY = 1.5,
        t.y = 0,
        t
    },
    i.txt_i = function() {
        var t = new eui.Label;
        return this.txt = t,
        t.fontFamily = "MFShangHei",
        t.size = 14,
        t.stroke = 1,
        t.strokeColor = 3558560,
        t.text = "9999",
        t.textColor = 16777215,
        t.x = 9,
        t.y = 58,
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return this._Image1 = t,
        t.scaleX = 1.2,
        t.scaleY = 1.2,
        t.source = "item_warehouse_render_frame_0_png",
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/petFactor/SptPetFactorViewSkin.exml"] = window.SptPetFactorViewSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["imgItem", "txtItem", "list", "bg1", "bg2", "btnDown1", "btnDown2", "btnDown3", "imgUp1", "imgUp2", "imgUp3", "imgHeadBG", "imgHead", "imgRarity4", "imgRarity3", "imgRarity2", "imgRarity1", "process", "imgUnique", "txtExchangeItem", "imgExchangeItem", "btnExchange", "txtName", "txtProcess", "imgNone", "imgTe", "imgWu", "bg3", "txtNone", "txtSearch"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this._Group1_i(), this._Group4_i()]
    }
    __extends(e, t);
    var i = function(t) {
        function e() {
            t.call(this),
            this.skinParts = ["thumb"],
            this.elementsContent = [this.thumb_i()]
        }
        __extends(e, t);
        var i = e.prototype;
        return i.thumb_i = function() {
            var t = new eui.Image;
            return this.thumb = t,
            t.source = "spt_pet_factor_view_imgprocess_png",
            t
        },
        e
    } (eui.Skin),
    n = function(t) {
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
            t.size = 18,
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
    r = e.prototype;
    return r._Group1_i = function() {
        var t = new eui.Group;
        return t.right = 88,
        t.y = 12,
        t.elementsContent = [this._Image1_i(), this.imgItem_i(), this.txtItem_i()],
        t
    },
    r._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "common_reward_progress_bg_png",
        t
    },
    r.imgItem_i = function() {
        var t = new eui.Image;
        return this.imgItem = t,
        t.height = 55,
        t.scaleX = .7,
        t.scaleY = .7,
        t.source = "pveRewardMall_icon_coin_png",
        t.width = 55,
        t.y = -6,
        t
    },
    r.txtItem_i = function() {
        var t = new eui.Label;
        return this.txtItem = t,
        t.fontFamily = "黑体",
        t.size = 19,
        t.text = "0000",
        t.textColor = 13887988,
        t.x = 58,
        t.y = 3,
        t
    },
    r._Group4_i = function() {
        var t = new eui.Group;
        return t.left = 171,
        t.right = 0,
        t.y = 58,
        t.elementsContent = [this._Scroller1_i(), this._Group2_i(), this._Group3_i()],
        t
    },
    r._Scroller1_i = function() {
        var t = new eui.Scroller;
        return t.height = 500,
        t.left = 0,
        t.right = 365,
        t.y = 44,
        t.viewport = this.list_i(),
        t
    },
    r.list_i = function() {
        var t = new eui.List;
        return this.list = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.x = 0,
        t.y = -44,
        t.layout = this._TileLayout1_i(),
        t
    },
    r._TileLayout1_i = function() {
        var t = new eui.TileLayout;
        return t.horizontalGap = 5,
        t.paddingLeft = 20,
        t.paddingRight = 20,
        t.verticalGap = 5,
        t
    },
    r._Group2_i = function() {
        var t = new eui.Group;
        return t.right = 4,
        t.y = 31,
        t.elementsContent = [this._Image2_i(), this.bg1_i(), this.bg2_i(), this._Image3_i(), this.btnDown1_i(), this.btnDown2_i(), this.btnDown3_i(), this.imgUp1_i(), this.imgUp2_i(), this.imgUp3_i(), this.imgHeadBG_i(), this.imgHead_i(), this.imgRarity4_i(), this.imgRarity3_i(), this.imgRarity2_i(), this.imgRarity1_i(), this.process_i(), this.imgUnique_i(), this.btnExchange_i(), this.txtName_i(), this.txtProcess_i(), this.imgNone_i(), this.imgTe_i(), this.imgWu_i(), this.bg3_i(), this.txtNone_i()],
        t
    },
    r._Image2_i = function() {
        var t = new eui.Image;
        return t.scale9Grid = new egret.Rectangle(13, 166, 2, 165),
        t.source = "spt_pet_factor_view_rightbg_png",
        t.visible = !0,
        t.width = 355,
        t.x = 0,
        t.y = 0,
        t
    },
    r.bg1_i = function() {
        var t = new eui.Image;
        return this.bg1 = t,
        t.source = "spt_pet_factor_view_txtnum_png",
        t.visible = !1,
        t.x = 90,
        t.y = 206,
        t
    },
    r.bg2_i = function() {
        var t = new eui.Image;
        return this.bg2 = t,
        t.source = "spt_pet_factor_view_img_jindu0_png",
        t.visible = !1,
        t.x = 27,
        t.y = 180,
        t
    },
    r._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "spt_pet_factor_view_xian_png",
        t.visible = !0,
        t.x = 11,
        t.y = 239,
        t
    },
    r.btnDown1_i = function() {
        var t = new eui.Image;
        return this.btnDown1 = t,
        t.source = "spt_pet_factor_view_btndown1_png",
        t.x = 10,
        t.y = 13,
        t
    },
    r.btnDown2_i = function() {
        var t = new eui.Image;
        return this.btnDown2 = t,
        t.source = "spt_pet_factor_view_btndown2_png",
        t.visible = !0,
        t.x = 122,
        t.y = 13,
        t
    },
    r.btnDown3_i = function() {
        var t = new eui.Image;
        return this.btnDown3 = t,
        t.source = "spt_pet_factor_view_btndown3_png",
        t.visible = !0,
        t.x = 233,
        t.y = 13,
        t
    },
    r.imgUp1_i = function() {
        var t = new eui.Image;
        return this.imgUp1 = t,
        t.source = "spt_pet_factor_view_imgup1_png",
        t.visible = !1,
        t.x = 7,
        t.y = 10,
        t
    },
    r.imgUp2_i = function() {
        var t = new eui.Image;
        return this.imgUp2 = t,
        t.source = "spt_pet_factor_view_imgup2_png",
        t.visible = !1,
        t.x = 118,
        t.y = 10,
        t
    },
    r.imgUp3_i = function() {
        var t = new eui.Image;
        return this.imgUp3 = t,
        t.source = "spt_pet_factor_view_imgup3_png",
        t.visible = !1,
        t.x = 230,
        t.y = 10,
        t
    },
    r.imgHeadBG_i = function() {
        var t = new eui.Image;
        return this.imgHeadBG = t,
        t.height = 100,
        t.source = "spt_pet_factor_view_imgheadbg_png",
        t.visible = !1,
        t.width = 100,
        t.x = 27,
        t.y = 63,
        t
    },
    r.imgHead_i = function() {
        var t = new eui.Image;
        return this.imgHead = t,
        t.visible = !1,
        t.x = 27,
        t.y = 63,
        t
    },
    r.imgRarity4_i = function() {
        var t = new eui.Image;
        return this.imgRarity4 = t,
        t.source = "item_warehouse_pet_factor_ss_png",
        t.visible = !1,
        t.x = 24.85,
        t.y = 60.86,
        t
    },
    r.imgRarity3_i = function() {
        var t = new eui.Image;
        return this.imgRarity3 = t,
        t.source = "item_warehouse_pet_factor_s_png",
        t.visible = !1,
        t.x = 25,
        t.y = 60.86,
        t
    },
    r.imgRarity2_i = function() {
        var t = new eui.Image;
        return this.imgRarity2 = t,
        t.source = "item_warehouse_pet_factor_a_png",
        t.visible = !1,
        t.x = 25,
        t.y = 60.86,
        t
    },
    r.imgRarity1_i = function() {
        var t = new eui.Image;
        return this.imgRarity1 = t,
        t.source = "item_warehouse_pet_factor_b_png",
        t.visible = !1,
        t.x = 25,
        t.y = 60.86,
        t
    },
    r.process_i = function() {
        var t = new eui.ProgressBar;
        return this.process = t,
        t.height = 15,
        t.visible = !0,
        t.width = 281,
        t.x = 39,
        t.y = 185,
        t.skinName = i,
        t
    },
    r.imgUnique_i = function() {
        var t = new eui.Image;
        return this.imgUnique = t,
        t.source = "spt_pet_factor_view_imgunique_png",
        t.visible = !1,
        t.x = 144,
        t.y = 94,
        t
    },
    r.btnExchange_i = function() {
        var t = new eui.Group;
        return this.btnExchange = t,
        t.horizontalCenter = 0,
        t.visible = !0,
        t.y = 434,
        t.elementsContent = [this._Image4_i(), this.txtExchangeItem_i(), this.imgExchangeItem_i()],
        t
    },
    r._Image4_i = function() {
        var t = new eui.Image;
        return t.bottom = 0,
        t.left = 0,
        t.right = 0,
        t.source = "05奖励兑换_btnsale_png",
        t.top = 0,
        t
    },
    r.txtExchangeItem_i = function() {
        var t = new eui.Label;
        return this.txtExchangeItem = t,
        t.bold = !0,
        t.left = 55,
        t.right = 12,
        t.size = 24,
        t.text = "9",
        t.textAlign = "center",
        t.textColor = 8341784,
        t.verticalAlign = "middle",
        t.verticalCenter = 0,
        t.width = 50,
        t
    },
    r.imgExchangeItem_i = function() {
        var t = new eui.Image;
        return this.imgExchangeItem = t,
        t.height = 20,
        t.left = 28,
        t.verticalCenter = 0,
        t.width = 20,
        t
    },
    r.txtName_i = function() {
        var t = new eui.Label;
        return this.txtName = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "烈焰之主·炽焰金刚",
        t.textColor = 12243199,
        t.visible = !1,
        t.x = 143,
        t.y = 68,
        t
    },
    r.txtProcess_i = function() {
        var t = new eui.Label;
        return this.txtProcess = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "9999/9999",
        t.textColor = 5686526,
        t.visible = !1,
        t.x = 181,
        t.y = 205.152,
        t
    },
    r.imgNone_i = function() {
        var t = new eui.Image;
        return this.imgNone = t,
        t.source = "item_warehouse_txt_None_png",
        t.visible = !1,
        t.x = 132,
        t.y = 250.88,
        t
    },
    r.imgTe_i = function() {
        var t = new eui.Image;
        return this.imgTe = t,
        t.source = "common_pet_yin_icon_png",
        t.visible = !1,
        t.x = 50,
        t.y = 85,
        t
    },
    r.imgWu_i = function() {
        var t = new eui.Image;
        return this.imgWu = t,
        t.source = "item_warehouse_icon_skill_png",
        t.visible = !1,
        t.x = 52,
        t.y = 85.436,
        t
    },
    r.bg3_i = function() {
        var t = new eui.Label;
        return this.bg3 = t,
        t.size = 18,
        t.text = "此精灵暂无可用【精灵因子】",
        t.textAlign = "center",
        t.textColor = 9482995,
        t.verticalAlign = "middle",
        t.visible = !1,
        t.x = 61,
        t.y = 335.596,
        t
    },
    r.txtNone_i = function() {
        var t = new eui.Label;
        return this.txtNone = t,
        t.horizontalCenter = .5,
        t.size = 18,
        t.text = "开启的",
        t.textColor = 9482995,
        t.verticalAlign = "middle",
        t.visible = !1,
        t.y = 354.216,
        t
    },
    r._Group3_i = function() {
        var t = new eui.Group;
        return t.right = 14,
        t.y = 0,
        t.elementsContent = [this._Image5_i(), this.txtSearch_i()],
        t
    },
    r._Image5_i = function() {
        var t = new eui.Image;
        return t.scale9Grid = new egret.Rectangle(63, 10, 62, 9),
        t.source = "spt_pet_factor_view_img1_png",
        t.width = 280,
        t.x = .11,
        t.y = 0,
        t
    },
    r.txtSearch_i = function() {
        var t = new eui.TextInput;
        return this.txtSearch = t,
        t.height = 29,
        t.prompt = "输入精灵名称或精灵id",
        t.textColor = 16777215,
        t.width = 250,
        t.x = 0,
        t.y = 3.085,
        t.skinName = n,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/PverewardmallSkin.exml"] = window.PverewardmallSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["BG", "left_bg", "grp_left", "up_bg", "titleTx", "img_close_btn", "item_bg", "icon_coin", "txtCount", "grp_itemInfo", "grpContainer"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.BG_i(), this.grp_left_i(), this._Group1_i(), this.grp_itemInfo_i(), this.grpContainer_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.BG_i = function() {
        var t = new eui.Image;
        return this.BG = t,
        t.horizontalCenter = 0,
        t.scale9Grid = new egret.Rectangle(142, 80, 852, 480),
        t.source = "common_ui_bg_2_png",
        t.y = 0,
        t
    },
    i.grp_left_i = function() {
        var t = new eui.Group;
        return this.grp_left = t,
        t.anchorOffsetX = 0,
        t.maxWidth = 166,
        t.touchEnabled = !1,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this.left_bg_i()],
        t
    },
    i.left_bg_i = function() {
        var t = new eui.Image;
        return this.left_bg = t,
        t.left = 0,
        t.right = 4,
        t.source = "comon_left_bg_png",
        t.y = 46,
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.left = 0,
        t.right = 0,
        t.y = 0,
        t.elementsContent = [this.up_bg_i(), this.titleTx_i(), this.img_close_btn_i()],
        t
    },
    i.up_bg_i = function() {
        var t = new eui.Image;
        return this.up_bg = t,
        t.left = 0,
        t.right = 0,
        t.source = "common_top_bg_style1_png",
        t.y = 0,
        t
    },
    i.titleTx_i = function() {
        var t = new eui.Image;
        return this.titleTx = t,
        t.source = "pveRewardMall_titleTx_png",
        t.x = 112,
        t.y = 7,
        t
    },
    i.img_close_btn_i = function() {
        var t = new eui.Image;
        return this.img_close_btn = t,
        t.source = "common_close_2_png",
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t
    },
    i.grp_itemInfo_i = function() {
        var t = new eui.Group;
        return this.grp_itemInfo = t,
        t.right = 27,
        t.visible = !1,
        t.y = 13,
        t.elementsContent = [this.item_bg_i(), this.icon_coin_i(), this.txtCount_i()],
        t
    },
    i.item_bg_i = function() {
        var t = new eui.Image;
        return this.item_bg = t,
        t.source = "pveRewardMall_item_bg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.icon_coin_i = function() {
        var t = new eui.Image;
        return this.icon_coin = t,
        t.source = "pveRewardMall_icon_coin_png",
        t.x = 33,
        t.y = 0,
        t
    },
    i.txtCount_i = function() {
        var t = new eui.Label;
        return this.txtCount = t,
        t.fontFamily = "黑体",
        t.size = 19,
        t.text = "0000",
        t.textColor = 13887988,
        t.x = 72,
        t.y = 3,
        t
    },
    i.grpContainer_i = function() {
        var t = new eui.Group;
        return this.grpContainer = t,
        t.touchThrough = !0,
        t.x = 0,
        t.y = 0,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/pveSpt/SptAchieveViewItemSkin.exml"] = window.SptAchieveViewItemSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["iconBg", "achieveIcon", "img_arrow", "txt_achieve", "achievePoint", "flag_got", "costNum", "costIcon", "grp_get"],
        this.height = 92,
        this.width = 943,
        this.elementsContent = [this._Image1_i(), this.iconBg_i(), this.achieveIcon_i(), this.img_arrow_i(), this.txt_achieve_i(), this.achievePoint_i(), this.flag_got_i(), this.grp_get_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 92,
        t.source = "spt_achieve_view_item_Listbg_png",
        t.percentWidth = 100,
        t.x = 0,
        t.y = 0,
        t
    },
    i.iconBg_i = function() {
        var t = new eui.Image;
        return this.iconBg = t,
        t.alpha = .6,
        t.height = 72,
        t.horizontalCenter = 39.5,
        t.right = 396,
        t.source = "common_icon_bg_style_1_png",
        t.width = 72,
        t.y = 10,
        t
    },
    i.achieveIcon_i = function() {
        var t = new eui.Image;
        return this.achieveIcon = t,
        t.horizontalCenter = 39,
        t.right = 414,
        t.source = "common_achieve_title_icon_png",
        t.y = 22,
        t
    },
    i.img_arrow_i = function() {
        var t = new eui.Image;
        return this.img_arrow = t,
        t.height = 24,
        t.source = "spt_achieve_view_item_pointBg_png",
        t.x = 16,
        t.y = 34,
        t
    },
    i.txt_achieve_i = function() {
        var t = new eui.Label;
        return this.txt_achieve = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.horizontalCenter = -174.5,
        t.left = 165,
        t.lineSpacing = 3,
        t.size = 22,
        t.text = "我的成就字数最多十二个字",
        t.textColor = 16777215,
        t.touchEnabled = !1,
        t.y = 36,
        t
    },
    i.achievePoint_i = function() {
        var t = new eui.Image;
        return this.achievePoint = t,
        t.verticalCenter = .5,
        t.x = 60,
        t
    },
    i.flag_got_i = function() {
        var t = new eui.Label;
        return this.flag_got = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.lineSpacing = 3,
        t.size = 22,
        t.text = "已获得",
        t.textColor = 9552639,
        t.touchEnabled = !1,
        t.visible = !0,
        t.x = 827,
        t.y = 36,
        t
    },
    i.grp_get_i = function() {
        var t = new eui.Group;
        return this.grp_get = t,
        t.right = 13,
        t.touchChildren = !1,
        t.touchEnabled = !0,
        t.visible = !0,
        t.y = 25,
        t.elementsContent = [this._Image2_i(), this.costNum_i(), this.costIcon_i()],
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 40,
        t.source = "spt_achieve_view_item_btnBg_png",
        t.width = 140,
        t.x = 0,
        t.y = 0,
        t
    },
    i.costNum_i = function() {
        var t = new eui.Label;
        return this.costNum = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.horizontalCenter = 7.5,
        t.lineSpacing = 3,
        t.size = 20,
        t.text = "1100",
        t.textColor = 8341784,
        t.touchEnabled = !1,
        t.y = 12,
        t
    },
    i.costIcon_i = function() {
        var t = new eui.Image;
        return this.costIcon = t,
        t.horizontalCenter = -37,
        t.scaleX = .54,
        t.scaleY = .54,
        t.verticalCenter = 1,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/pveSpt/SptAchieveViewSkin.exml"] = window.SptAchieveViewSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["item_bg", "icon_coin", "txtCount", "grp_itemInfo", "_list", "_scrl"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.grp_itemInfo_i(), this._scrl_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.grp_itemInfo_i = function() {
        var t = new eui.Group;
        return this.grp_itemInfo = t,
        t.right = 88,
        t.y = 12,
        t.elementsContent = [this.item_bg_i(), this.icon_coin_i(), this.txtCount_i()],
        t
    },
    i.item_bg_i = function() {
        var t = new eui.Image;
        return this.item_bg = t,
        t.source = "common_reward_progress_bg_png",
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t
    },
    i.icon_coin_i = function() {
        var t = new eui.Image;
        return this.icon_coin = t,
        t.height = 55,
        t.left = 0,
        t.scaleX = .7,
        t.scaleY = .7,
        t.source = "pveRewardMall_icon_coin_png",
        t.width = 55,
        t.y = -6,
        t
    },
    i.txtCount_i = function() {
        var t = new eui.Label;
        return this.txtCount = t,
        t.fontFamily = "黑体",
        t.size = 19,
        t.text = "0000",
        t.textColor = 13887988,
        t.x = 58,
        t.y = 3,
        t
    },
    i._scrl_i = function() {
        var t = new eui.Scroller;
        return this._scrl = t,
        t.height = 553,
        t.width = 943,
        t.x = 170,
        t.y = 67,
        t.viewport = this._list_i(),
        t
    },
    i._list_i = function() {
        var t = new eui.List;
        return this._list = t,
        t.layout = this._VerticalLayout1_i(),
        t
    },
    i._VerticalLayout1_i = function() {
        var t = new eui.VerticalLayout;
        return t.gap = 14,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/pveSpt/SptPowerViewItemSkin.exml"] = window.SptPowerViewItemSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["iconBg", "achieveIcon", "img_arrow", "txt_achieve", "img_frame", "achievePoint", "flag_got", "costNum", "costIcon", "grp_get"],
        this.height = 92,
        this.width = 943,
        this.elementsContent = [this._Image1_i(), this.iconBg_i(), this.achieveIcon_i(), this.img_arrow_i(), this.txt_achieve_i(), this.img_frame_i(), this.achievePoint_i(), this.flag_got_i(), this.grp_get_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 92,
        t.source = "spt_achieve_view_item_Listbg_png",
        t.percentWidth = 100,
        t.x = 0,
        t.y = 0,
        t
    },
    i.iconBg_i = function() {
        var t = new eui.Image;
        return this.iconBg = t,
        t.alpha = .6,
        t.height = 72,
        t.horizontalCenter = 39.5,
        t.right = 396,
        t.source = "common_icon_bg_style_1_png",
        t.width = 72,
        t.y = 10,
        t
    },
    i.achieveIcon_i = function() {
        var t = new eui.Image;
        return this.achieveIcon = t,
        t.horizontalCenter = 39,
        t.right = 414,
        t.source = "common_achieve_title_icon_png",
        t.y = 22,
        t
    },
    i.img_arrow_i = function() {
        var t = new eui.Image;
        return this.img_arrow = t,
        t.height = 24,
        t.source = "spt_achieve_view_item_pointBg_png",
        t.x = 16,
        t.y = 34,
        t
    },
    i.txt_achieve_i = function() {
        var t = new eui.Label;
        return this.txt_achieve = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.horizontalCenter = -174.5,
        t.left = 165,
        t.lineSpacing = 3,
        t.size = 22,
        t.text = "我的成就字数最多十二个字",
        t.textColor = 16777215,
        t.touchEnabled = !1,
        t.y = 36,
        t
    },
    i.img_frame_i = function() {
        var t = new eui.Image;
        return this.img_frame = t,
        t.source = "spt_achieve_view_item_headFrame_png",
        t.verticalCenter = 0,
        t.x = 35,
        t
    },
    i.achievePoint_i = function() {
        var t = new eui.Image;
        return this.achievePoint = t,
        t.verticalCenter = .5,
        t.x = 60,
        t
    },
    i.flag_got_i = function() {
        var t = new eui.Label;
        return this.flag_got = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.lineSpacing = 3,
        t.size = 22,
        t.text = "已获得",
        t.textColor = 9552639,
        t.touchEnabled = !1,
        t.visible = !0,
        t.x = 827,
        t.y = 36,
        t
    },
    i.grp_get_i = function() {
        var t = new eui.Group;
        return this.grp_get = t,
        t.right = 13,
        t.touchChildren = !1,
        t.touchEnabled = !0,
        t.visible = !0,
        t.y = 25,
        t.elementsContent = [this._Image2_i(), this.costNum_i(), this.costIcon_i()],
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 40,
        t.source = "spt_achieve_view_item_btnBg_png",
        t.width = 140,
        t.x = 0,
        t.y = 0,
        t
    },
    i.costNum_i = function() {
        var t = new eui.Label;
        return this.costNum = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.horizontalCenter = 7.5,
        t.lineSpacing = 3,
        t.size = 20,
        t.text = "1100",
        t.textColor = 8341784,
        t.touchEnabled = !1,
        t.y = 12,
        t
    },
    i.costIcon_i = function() {
        var t = new eui.Image;
        return this.costIcon = t,
        t.horizontalCenter = -37,
        t.scaleX = .54,
        t.scaleY = .54,
        t.verticalCenter = 1,
        t
    },
    e
} (eui.Skin);