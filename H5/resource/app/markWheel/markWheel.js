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
markWheel; !
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.skinName = MarkWheelDetailItemSkin,
            t.cacheAsBitmap = !0,
            t
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            var t = this;
            e.prototype.childrenCreated.call(this),
            ImageButtonUtil.add(this.icon,
            function() {
                var e = {};
                e.ins = t.data.id,
                tipsPop.TipsPop.openCounterMarkPop(e)
            },
            this),
            this.once(egret.Event.REMOVED_FROM_STAGE, this.destroy, this)
        },
        t.prototype.dataChanged = function() {
            e.prototype.dataChanged.call(this),
            this.data ? (this.visible = !0, this.updateView()) : this.visible = !1
        },
        t.prototype.updateView = function() {
            var e = this.data.id,
            t = MintmarkLotteryXMLInfo.getMenuItemById(e);
            5 == t.Level ? this.currentState = "gold": 4 == t.Level ? this.currentState = "purple": this.currentState = "blue",
            this.flag.visible = this.data.state % 10 == 2,
            this.txt_name.text = CountermarkXMLInfo.getDes(e),
            this.icon.source = ClientConfig.getMarkPath(e)
        },
        t.prototype.destroy = function() {
            this.removeChildren(),
            ImageButtonUtil.removeAll(this)
        },
        t
    } (eui.ItemRenderer);
    e.MarkWheelRecordItem = t,
    __reflect(t.prototype, "markWheel.MarkWheelRecordItem")
} (markWheel || (markWheel = {}));
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
markWheel; !
function(e) {
    var t = function(t) {
        function i() {
            var i = t.call(this) || this;
            return i.service.setValues([e.AttrConst.forever_user_option, e.AttrConst.normal_decomposition_mark, e.AttrConst.normal_total_draw_times].concat(e.AttrConst.normal_got_mark_id, e.AttrConst.normal_got_mark_quality, e.AttrConst.normal_exchange_record, [e.AttrConst.normal_exchange_times], e.AttrConst.normal_exchange_info, [e.AttrConst.limit_decomposition_mark, e.AttrConst.limit_total_draw_times], e.AttrConst.limit_got_mark_id, e.AttrConst.limit_got_mark_quality, e.AttrConst.limit_exchange_record, [e.AttrConst.limit_exchange_times, e.AttrConst.limit_exchange_info]), [e.AttrConst.daily_item_gift_mark], [e.AttrConst.bitbuf_mail_mark]),
            i.init([{
                panelName: e.ModuleConst.MAIN_PANEL,
                isMain: !0
            },
            {
                panelName: e.ModuleConst.DETAIL_PANEL
            },
            {
                panelName: e.ModuleConst.DARW_PANEL
            },
            {
                panelName: e.ModuleConst.SHOP_PANEL
            }]),
            i
        }
        return __extends(i, t),
        i.prototype.destroy = function() {
            t.prototype.destroy.call(this),
            SoundManager.loadSound().then(function() {
                SoundManager.playMusic()
            })
        },
        i
    } (BasicMultPanelModule);
    e.MarkWheel = t,
    __reflect(t.prototype, "markWheel.MarkWheel")
} (markWheel || (markWheel = {}));
var __reflect = this && this.__reflect ||
function(e, t, i) {
    e.__class__ = t,
    i ? i.push(t) : i = [t],
    e.__types__ = e.__types__ ? i.concat(e.__types__) : i
},
markWheel; !
function(e) {
    var t = function() {
        function e() {}
        return e.MAIN_PANEL = "markWheel.MainPanel",
        e.DETAIL_PANEL = "markWheel.DetailPanel",
        e.DARW_PANEL = "markWheel.DrawPanel",
        e.SHOP_PANEL = "markWheel.ShopPanel",
        e
    } ();
    e.ModuleConst = t,
    __reflect(t.prototype, "markWheel.ModuleConst")
} (markWheel || (markWheel = {}));
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
markWheel; !
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t._opened = !1,
            t.skinName = MarkWheelCardSkin,
            t
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            var t = this;
            e.prototype.childrenCreated.call(this),
            this._anim = SpineUtil.createAnimate("keyinzhilun_choukfanpai"),
            this._animWheel = SpineUtil.createAnimate("keyinzhuanpan"),
            this._anim.scaleX = this._anim.scaleY = .5,
            this._animWheel.scaleX = this._animWheel.scaleY = .5,
            this.grp_anim.addChild(this._anim),
            this.grp_anim0.addChild(this._animWheel),
            ImageButtonUtil.add(this.icon,
            function() {
                var e = {};
                e.ins = t._markId,
                tipsPop.TipsPop.openCounterMarkPop(e)
            },
            this)
        },
        t.prototype.initCard = function(e, t, i) {
            this._opened = !1,
            this._quality = e,
            this._markId = t,
            this._isSkip = i,
            this.initView()
        },
        t.prototype.initView = function() {
            var e = this;
            switch (this._quality) {
            case 5:
                this.currentState = "gold",
                this.flag_quality.visible = !1,
                this.flag_quality.source = "mark_wheel_card_flag_ss_png",
                this.animName = "jinka";
                break;
            case 4:
                this.currentState = "purple",
                this.flag_quality.visible = !1,
                this.flag_quality.source = "mark_wheel_card_flag_s_png",
                this.animName = "zika";
                break;
            case 3:
                this.currentState = "blue",
                this.flag_quality.visible = !0,
                this.flag_quality.source = "mark_wheel_card_flag_a_png",
                this.animName = "lanka";
                break;
            case 2:
                this.currentState = "blue",
                this.flag_quality.visible = !0,
                this.flag_quality.source = "mark_wheel_card_flag_b_png",
                this.animName = "lanka";
                break;
            case 1:
                this.currentState = "blue",
                this.flag_quality.visible = !0,
                this.flag_quality.source = "mark_wheel_card_flag_c_png",
                this.animName = "lanka"
            }
            this.icon.source = ClientConfig.getMarkPath(this._markId),
            this.txt_name.text = CountermarkXMLInfo.getDes(this._markId),
            this._isSkip ? (this._opened = !0, this.back.visible = !1, this.front.visible = !0, this._anim.visible = !0, this._animWheel.visible = !1, this._anim.play(this.animName + "xunhuan", 0)) : (this.front.visible = !1, this.back.visible = !0, this._anim.visible = !1, this._animWheel.visible = !0, this._animWheel.play("kapaichuxian", 1, 0, {
                playEnd: function() {
                    e._animWheel.visible = !1
                }
            }))
        },
        t.prototype.openCard = function() {
            var e = this;
            if (!this._opened) {
                this._opened = !0,
                this.back.visible = !1,
                this._anim.visible = !0;
                var t = {};
                t.playEnd = function() {
                    e._anim.play(e.animName + "xunhuan", 0)
                },
                this._anim.play(this.animName + "fanpai", 1, void 0, t),
                egret.setTimeout(function() {
                    e.front.visible = !0
                },
                this, 1200)
            }
        },
        Object.defineProperty(t.prototype, "isOpen", {
            get: function() {
                return this._opened
            },
            enumerable: !0,
            configurable: !0
        }),
        t.prototype.destroy = function() {
            ImageButtonUtil.removeAll(this),
            this.removeChildren()
        },
        t
    } (eui.Component);
    e.MarkWheelCard = t,
    __reflect(t.prototype, "markWheel.MarkWheelCard")
} (markWheel || (markWheel = {}));
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
markWheel; !
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t._opened = !1,
            t._operation = 0,
            t.skinName = MarkWheelCardItemSkin,
            t
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            var t = this;
            e.prototype.childrenCreated.call(this),
            this._anim = SpineUtil.createAnimate("keyinzhilun_choukfanpai"),
            this._animWheel = SpineUtil.createAnimate("keyinzhuanpan"),
            this._anim.scaleX = this._anim.scaleY = .5,
            this._animWheel.scaleX = this._animWheel.scaleY = .5,
            this.grp_anim.addChild(this._anim),
            this.grp_anim0.addChild(this._animWheel),
            ImageButtonUtil.add(this.btnDecompose, this.decomposeCard, this),
            ImageButtonUtil.add(this.btnGet, this.getCard, this),
            ImageButtonUtil.add(this.icon,
            function() {
                var e = {};
                e.ins = t._markId,
                tipsPop.TipsPop.openCounterMarkPop(e)
            },
            this)
        },
        t.prototype.dataChanged = function() {
            e.prototype.dataChanged.call(this),
            this._idx = this.data.idx,
            this._quality = this.data.quality,
            this._markId = this.data.markId,
            this._isSkip = this.data.isSkip,
            this._operation = this.data.state,
            this.initView()
        },
        t.prototype.initView = function() {
            var e = this;
            switch (this._quality) {
            case 5:
                this.currentState = "gold",
                this.flag_quality.visible = !1,
                this.flag_quality.source = "mark_wheel_card_flag_ss_png",
                this.animName = "jinka";
                break;
            case 4:
                this.currentState = "purple",
                this.flag_quality.visible = !1,
                this.flag_quality.source = "mark_wheel_card_flag_s_png",
                this.animName = "zika";
                break;
            case 3:
                this.currentState = "blue",
                this.flag_quality.visible = !0,
                this.flag_quality.source = "mark_wheel_card_flag_a_png",
                this.animName = "lanka";
                break;
            case 2:
                this.currentState = "blue",
                this.flag_quality.visible = !0,
                this.flag_quality.source = "mark_wheel_card_flag_b_png",
                this.animName = "lanka";
                break;
            case 1:
                this.currentState = "blue",
                this.flag_quality.visible = !0,
                this.flag_quality.source = "mark_wheel_card_flag_c_png",
                this.animName = "lanka"
            }
            this.icon.source = ClientConfig.getMarkPath(this._markId),
            this.txt_name.text = CountermarkXMLInfo.getDes(this._markId),
            this.flag_decompose.visible = 1 == this._operation,
            this.flag_got.visible = 2 == this._operation,
            this.btnDecompose.visible = this.btnGet.visible = 0 == this._operation,
            this._isSkip ? (this._opened = !0, this.back.visible = !1, this.front.visible = !0, this._anim.visible = !0, this._animWheel.visible = !1, this._anim.play(this.animName + "xunhuan", 0)) : (this.front.visible = !1, this.back.visible = !0, this._anim.visible = !1, this._animWheel.visible = !0, this._animWheel.play("kapaichuxian", 1, 0, {
                playEnd: function() {
                    e._animWheel.visible = !1
                }
            }))
        },
        t.prototype.openCard = function() {
            var e = this;
            if (!this._opened) {
                this._opened = !0,
                this.back.visible = !1,
                this._anim.visible = !0;
                var t = {};
                t.playEnd = function() {
                    e._anim.play(e.animName + "xunhuan", 0)
                },
                this._anim.play(this.animName + "fanpai", 1, void 0, t),
                egret.setTimeout(function() {
                    e.front.visible = !0
                },
                this, 1200)
            }
        },
        t.prototype.getCard = function() {
            var e = this;
            this._operation || SocketConnection.sendByQueue(43328, [2, 20 + this._idx],
            function() {
                e.finishGetCard()
            })
        },
        t.prototype.finishGetCard = function() {
            this._operation = 2,
            this.btnDecompose.visible = this.btnGet.visible = !1,
            this.flag_got.visible = !0,
            EventManager.dispatchEventWith("mark_wheel_card_do_operation")
        },
        t.prototype.decomposeCard = function() {
            var e = this;
            this._operation || SocketConnection.sendByQueue(43328, [2, this._idx],
            function() {
                e.finishDecompose()
            })
        },
        t.prototype.finishDecompose = function() {
            this._operation = 1,
            this.btnDecompose.visible = this.btnGet.visible = !1,
            this.flag_decompose.visible = !0,
            EventManager.dispatchEventWith("mark_wheel_card_do_operation")
        },
        Object.defineProperty(t.prototype, "isOpen", {
            get: function() {
                return this._opened
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(t.prototype, "operation", {
            get: function() {
                return this._operation
            },
            enumerable: !0,
            configurable: !0
        }),
        t.prototype.destroy = function() {
            this.removeChildren(),
            ImageButtonUtil.removeAll(this)
        },
        t
    } (eui.ItemRenderer);
    e.MarkWheelCardItem = t,
    __reflect(t.prototype, "markWheel.MarkWheelCardItem")
} (markWheel || (markWheel = {}));
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
markWheel; !
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.skinName = MarkWheelDetailItemSkin,
            t.cacheAsBitmap = !0,
            t
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            var t = this;
            e.prototype.childrenCreated.call(this),
            this.flag.visible = !1,
            ImageButtonUtil.add(this.icon,
            function() {
                var e = {};
                e.ins = t.data.ID,
                tipsPop.TipsPop.openCounterMarkPop(e)
            },
            this),
            this.once(egret.Event.REMOVED_FROM_STAGE, this.destroy, this)
        },
        t.prototype.dataChanged = function() {
            e.prototype.dataChanged.call(this),
            this.updateView()
        },
        t.prototype.updateView = function() {
            5 == this.data.Level ? this.currentState = "gold": 4 == this.data.Level ? this.currentState = "purple": this.currentState = "blue",
            this.txt_name.text = this.data.Des,
            this.icon.source = ClientConfig.getMarkPath(this.data.ID)
        },
        t.prototype.destroy = function() {
            this.removeChildren(),
            ImageButtonUtil.removeAll(this)
        },
        t
    } (eui.ItemRenderer);
    e.MarkWheelDetailItem = t,
    __reflect(t.prototype, "markWheel.MarkWheelDetailItem")
} (markWheel || (markWheel = {}));
var __reflect = this && this.__reflect ||
function(e, t, i) {
    e.__class__ = t,
    i ? i.push(t) : i = [t],
    e.__types__ = e.__types__ ? i.concat(e.__types__) : i
},
markWheel; !
function(e) {
    var t = function() {
        function e() {}
        return e.forever_user_option = 105540,
        e.normal_decomposition_mark = 105541,
        e.normal_total_draw_times = 105542,
        e.normal_got_mark_id = [105543, 105544, 105545, 105546, 105547, 105548, 105549, 105550, 105551, 105552],
        e.normal_got_mark_quality = [105553, 105554, 105555, 105556, 105557, 105558, 105559, 105560, 105561, 105562],
        e.normal_exchange_record = [105563, 105564, 105565, 105566, 105567],
        e.normal_exchange_times = 105598,
        e.normal_exchange_info = [30011, 30013, 30014],
        e.limit_decomposition_mark = 105568,
        e.limit_total_draw_times = 105569,
        e.limit_got_mark_id = [105570, 105571, 105572, 105573, 105574, 105575, 105576, 105577, 105578, 105579],
        e.limit_got_mark_quality = [105580, 105581, 105582, 105583, 105584, 105585, 105586, 105587, 105588, 105589],
        e.limit_exchange_record = [105590, 105591, 105592, 105593, 105594],
        e.limit_exchange_times = 105599,
        e.limit_exchange_info = 105597,
        e.bitbuf_mail_mark = 9834,
        e.daily_item_gift_mark = 10978,
        e
    } ();
    e.AttrConst = t,
    __reflect(t.prototype, "markWheel.AttrConst")
} (markWheel || (markWheel = {}));
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
markWheel; !
function(e) {
    var t = function(t) {
        function i() {
            var e = t.call(this) || this;
            return e._itemId_0 = 1723291,
            e._itemId_1 = 1723292,
            e._price = 500,
            e.skinName = MarkWheelShopItemSkin,
            e.cacheAsBitmap = !0,
            e
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            var e = this;
            t.prototype.childrenCreated.call(this),
            ImageButtonUtil.add(this.icon,
            function() {
                var t = {};
                t.ins = e.data.ID,
                tipsPop.TipsPop.openCounterMarkPop(t)
            },
            this),
            ImageButtonUtil.add(this.btnBuy,
            function() {
                return ItemManager.getNumByID(e._curItemId) < e._price ? void Alarm.show("你拥有的" + ItemXMLInfo.getName(e._curItemId) + "数量不足！") : void Alert.show("确认要兑换此刻印吗？",
                function() {
                    KTool.doExchange(e.data.exchangeId, 1,
                    function() {
                        e.service.updateValues().then(function() {
                            EventManager.dispatchEventWith("mark_wheel_shop_buy")
                        })
                    })
                })
            },
            this),
            this.once(egret.Event.REMOVED_FROM_STAGE, this.destroy, this)
        },
        i.prototype.dataChanged = function() {
            t.prototype.dataChanged.call(this),
            this.service = this.data.service,
            1 == this.data.puton ? this._curItemId = this._itemId_0: this._curItemId = this._itemId_1,
            5 == this.data.Level ? (this.currentState = "ss", this.txt_limit.textColor = 10180889) : 4 == this.data.Level && (this.currentState = "s", this.txt_limit.textColor = 16777215),
            this._price = this.data.price,
            this.txt_cost.text = this._price.toString(),
            this.updateView()
        },
        i.prototype.updateView = function() {
            if (this.txt_name.text = this.data.Des, this.icon.source = ClientConfig.getMarkPath(this.data.ID), this.costIcon.source = ClientConfig.getItemIcon(this._curItemId), 1 == this.data.puton) var t = this.service.getValue(e.AttrConst.normal_exchange_info[Math.floor(this.itemIndex / 8)]);
            else var t = this.service.getValue(e.AttrConst.limit_exchange_info);
            var i = t >> 4 * this.data.index & 15;
            i ? (this.txt_limit.text = "限兑：1/1", this.flag_got.visible = !0, this.btnBuy.visible = !1) : (this.txt_limit.text = "限兑：0/1", this.flag_got.visible = !1, this.btnBuy.visible = !0)
        },
        i.prototype.destroy = function() {
            this.removeChildren(),
            ImageButtonUtil.removeAll(this),
            this.service = null
        },
        i
    } (eui.ItemRenderer);
    e.MarkWheelShopItem = t,
    __reflect(t.prototype, "markWheel.MarkWheelShopItem")
} (markWheel || (markWheel = {}));
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
markWheel; !
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t._itemId_0 = 1723291,
            t._itemId_1 = 1723292,
            t.skinName = MarkWheelShopRecordItemSkin,
            t.cacheAsBitmap = !0,
            t
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this)
        },
        t.prototype.dataChanged = function() {
            this.updateView()
        },
        t.prototype.updateView = function() {
            var e = MintmarkLotteryXMLInfo.getShopItemById(this.data.id);
            this.txt_name.text = e.Des,
            2 == e.puton ? this.costIcon.source = ClientConfig.getItemIcon(this._itemId_1) : this.costIcon.source = ClientConfig.getItemIcon(this._itemId_0),
            this.txt_cost.text = "x" + e.price;
            var t = this.data.timeStamp,
            i = new Date(1e3 * t);
            this.txt_time.text = i.getFullYear() + "-" + (i.getMonth() + 1) + "-" + i.getDate() + " " + i.getHours() + ":" + i.getMinutes()
        },
        t.prototype.destroy = function() {
            this.removeChildren()
        },
        t
    } (eui.ItemRenderer);
    e.MarkWheelShopRecordItem = t,
    __reflect(t.prototype, "markWheel.MarkWheelShopRecordItem")
} (markWheel || (markWheel = {}));
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
markWheel; !
function(e) {
    var t = function(t) {
        function i() {
            var e = t.call(this) || this;
            return e.groupName = "MARK_WHEEL_DETAIL",
            e.skinName = MarkWheelDetailPanelSkin,
            e
        }
        return __extends(i, t),
        i.prototype.beforeAdd = function(e) {
            this._type = e
        },
        i.prototype.childrenCreated = function() {
            var e = this;
            t.prototype.childrenCreated.call(this),
            this.rbg_section = this.section_0.group,
            this.rbg_section.selectedValue = "5",
            this.sector_0.visible = !0,
            this.sector_1.visible = !1,
            this.addEvent(),
            this.createMenu(),
            this.initBtnClose("mark_wheel_detail_panel_title_png", this,
            function() {
                e.service.backToMainPanel()
            },
            this),
            this.sector_0.x = this.sector_0.x + DeviceInfoManager.adapterOffSetX,
            this.sector_1.x = this.sector_1.x + DeviceInfoManager.adapterOffSetX,
            egret.lifecycle.stage.stageWidth > 1136 + 2 * DeviceInfoManager.adapterOffSetX + 176 && (this.sector_0.width = 1094, this.sector_1.width = 1094)
        },
        i.prototype.createMenu = function() {
            var e = new MenuData;
            e.groupName = this.groupName,
            e["default"] = 1,
            e.root = [1, 2],
            e.data = {
                1 : {
                    title: "本期奖池"
                },
                2 : {
                    title: "召唤记录"
                }
            },
            this.menu = Menu.createMenu(e, this.menuGroup)
        },
        i.prototype.addEvent = function() {
            this.rbg_section.addEventListener(egret.Event.CHANGE, this.updateSector0, this),
            EventManager.addEventListener(BaseMenuEvent.BASE_MENU_SELECT_CHANGE_ + this.groupName, this.update, this)
        },
        i.prototype.update = function() {
            1 == this.menu.selectedValue ? (this.sector_0.visible = !0, this.sector_1.visible = !1, this.updateSector0()) : (this.sector_0.visible = !1, this.sector_1.visible = !0, this.updateSector1())
        },
        i.prototype.updateSector0 = function() {
            var t = ~~this.rbg_section.selectedValue || 5,
            i = MintmarkLotteryXMLInfo.getMenuListByLevel(t);
            i = "normal" == this._type ? i.filter(function(e) {
                return 4 == e.Level || 5 == e.Level ? 1 == e.puton || 3 == e.puton: 2 != e.puton
            }) : i.filter(function(e) {
                return 4 == e.Level || 5 == e.Level ? 2 == e.puton || 3 == e.puton: 1 != e.puton
            }),
            this.list_0.itemRenderer = e.MarkWheelDetailItem,
            this.list_0.dataProvider = new eui.ArrayCollection(i)
        },
        i.prototype.updateSector1 = function() {
            var t = this;
            if ("normal" == this._type) var i = 1;
            else var i = 2;
            SocketConnection.sendByQueue(45816, [4, 80],
            function(n) {
                var r = n.data;
                r.position = 0;
                for (var a = r.readUnsignedInt(), s = [], o = 0; a > o; o++) {
                    var _ = {};
                    _.userId = r.readUnsignedInt(),
                    _.id = r.readUnsignedInt(),
                    _.state = r.readUnsignedInt(),
                    _.timeStamp = r.readUnsignedInt();
                    var h = Math.floor(_.state / 100);
                    i == h && s.push(_)
                }
                if (s.length < 5) for (var u = 5 - s.length,
                o = 0; u > o; o++) s.push(null);
                t.list_1.itemRenderer = e.MarkWheelRecordItem,
                t.list_1.dataProvider = new eui.ArrayCollection(s)
            })
        },
        i.prototype.destroy = function() {
            t.prototype.destroy.call(this),
            ImageButtonUtil.removeAll(this),
            EventManager.removeAll(this),
            this.rbg_section.removeEventListener(egret.Event.CHANGE, this.updateSector0, this),
            this.menu && this.menu.destroy()
        },
        i
    } (BasicPanel);
    e.DetailPanel = t,
    __reflect(t.prototype, "markWheel.DetailPanel")
} (markWheel || (markWheel = {}));
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
markWheel; !
function(e) {
    var t = function(t) {
        function i() {
            var e = t.call(this) || this;
            return e._itemId_0 = 1723291,
            e._itemId_1 = 1723292,
            e._isPlay = !1,
            e._drawing = !1,
            e.skinName = MarkWheelDrawPanelSkin,
            e
        }
        return __extends(i, t),
        i.prototype.beforeAdd = function(e) {
            this._type = e.type,
            this._num = e.num,
            this._isSkip = e.skip,
            this._Immediately = e.showImmediately
        },
        i.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this),
            this.adaptLeftContent(this.grpLeft),
            this.addEvent(),
            this._animWheel = SpineUtil.createAnimate("keyinzhuanpan"),
            this._animShine = SpineUtil.copy(this._animWheel),
            this._animShine1 = SpineUtil.copy(this._animWheel),
            this._animWheel.scaleX = this._animWheel.scaleY = .24,
            this._animShine.scaleX = this._animShine.scaleY = .25,
            this._animShine1.scaleX = this._animShine1.scaleY = .25,
            this._animWheel.visible = this._animShine.visible = this._animShine1.visible = !1,
            this.grp_anim.addChild(this._animWheel),
            this.grp_anim.addChild(this._animShine),
            this.grp_anim0.addChild(this._animShine1)
        },
        i.prototype.update = function() {
            var e = this;
            this.grp_one.visible = this.grp_ten.visible = this.grpDetail.visible = this.grpItemNum.visible = this._animWheel.visible = this._animShine.visible = this._animShine1.visible = this.grp_anim0.visible = !1,
            this.pan.visible = this.xian.visible = this._rect.visible = this.grp_anim.visible = this.grpLeft.visible = !this._isSkip,
            "normal" == this._type ? (this.bg.source = "mark_wheel_draw_panel_bg_jpg", this.xian.source = "mark_wheel_draw_panel_xian_png", this.img_arr.source = "mark_wheel_draw_panel_jiantou_png", this.icon_0.source = this.icon_1.source = ClientConfig.getItemIcon(this._itemId_0), this.service.registerItemUpdateForText(this._itemId_0, this.txtCoin, this)) : (this.bg.source = "mark_wheel_draw_panel_bg_1_jpg", this.xian.source = "mark_wheel_draw_panel_xian_1_png", this.img_arr.source = "mark_wheel_draw_panel_jiantou_1_png", this.icon_0.source = this.icon_1.source = ClientConfig.getItemIcon(this._itemId_1), this.service.registerItemUpdateForText(this._itemId_1, this.txtCoin, this)),
            this._Immediately ? this.showCard() : this._isSkip ? this.openPackage() : egret.setTimeout(function() {
                e.onResize(),
                e.startAnim()
            },
            this, 500)
        },
        i.prototype.addEvent = function() {
            var e = this;
            ImageButtonUtil.add(this.grpClose,
            function() {
                e.service.backToMainPanel()
            },
            this),
            this.singleCard.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onOpenOne, this),
            ImageButtonUtil.add(this.img_clickOne, this.onOpenOne, this),
            this.cardList.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.onOpenTen, this),
            ImageButtonUtil.add(this.img_clickTen, this.openAllTen, this),
            ImageButtonUtil.add(this.btnGetOne,
            function() {
                SocketConnection.sendByQueue(43328, [2, 12],
                function() {
                    e.service.updateValues().then(function() {
                        e.service.backToMainPanel()
                    })
                })
            },
            this),
            ImageButtonUtil.add(this.btnDecomposeOne,
            function() {
                SocketConnection.sendByQueue(43328, [2, 11],
                function() {
                    SocketConnection.sendByQueue(43328, [2, 12],
                    function() {
                        e.service.updateValues().then(function() {
                            e.service.backToMainPanel()
                        })
                    })
                })
            },
            this),
            ImageButtonUtil.add(this.btnGetTen,
            function() {
                SocketConnection.sendByQueue(43328, [2, 12],
                function() {
                    e.service.updateValues().then(function() {
                        e.service.backToMainPanel()
                    })
                })
            },
            this),
            ImageButtonUtil.add(this.btnDecomposeTen,
            function() {
                SocketConnection.sendByQueue(43328, [2, 11],
                function() {
                    SocketConnection.sendByQueue(43328, [2, 12],
                    function() {
                        e.service.updateValues().then(function() {
                            e.service.backToMainPanel()
                        })
                    })
                })
            },
            this),
            ImageButtonUtil.add(this.img_close,
            function() {
                SocketConnection.sendByQueue(43328, [2, 12],
                function() {
                    e.service.updateValues().then(function() {
                        e.service.backToMainPanel()
                    })
                })
            },
            this),
            ImageButtonUtil.add(this.icon_1,
            function() {
                var t = {};
                "normal" == e._type ? t.id = e._itemId_0: t.id = e._itemId_1,
                tipsPop.TipsPop.openItemPop(t)
            },
            this),
            EventManager.addEventListener("mark_wheel_card_do_operation", this.checkCardState, this),
            EventManager.addEventListener(SocketEvent.SOCKETRECONNECT,
            function() {
                e._drawing && (e._animShine.stopAll(), e.service.updateValues().then(function() {
                    e.showCard()
                }), e._animShine1.stopAll(), e.grp_anim0.visible = e._animShine1.visible = !1, e.playBgm())
            },
            this),
            egret.lifecycle.stage.addEventListener(egret.Event.RESIZE, this.onResize, this),
            this._rect.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchRect, this),
            this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this)
        },
        i.prototype.onResize = function() {
            this._minX = this.xian.x,
            this._maxX = this.xian.x + this.xian.width - this.shou.width
        },
        i.prototype.onTouchRect = function(e) {
            this.stopAnim(),
            this.grp_arr.x = e.stageX,
            this._startX = e.stageX,
            this.shou.visible = !1,
            egret.lifecycle.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouchMove, this),
            egret.lifecycle.stage.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this)
        },
        i.prototype.onTouchMove = function(e) {
            this.grp_arr.x = Math.max(this._minX, Math.min(this._maxX, e.stageX)),
            (e.stageX > this._maxX || e.stageX - this._startX >= this.xian.width / 2) && (egret.lifecycle.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouchMove, this), egret.lifecycle.stage.removeEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this), this.openPackage())
        },
        i.prototype.onTouchEnd = function() {
            egret.lifecycle.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouchMove, this),
            egret.lifecycle.stage.removeEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this),
            this.startAnim()
        },
        i.prototype.openPackage = function() {
            var e, t = this;
            return "normal" == this._type ? 1 == this._num ? e = 1 : 10 == this._num && (e = 2) : 1 == this._num ? e = 3 : 10 == this._num && (e = 4),
            e ? (this._drawing = !0, void SocketConnection.sendByQueue(43328, [1, e],
            function() {
                t._isSkip ? t.service.updateValues().then(function() {
                    t.showCard()
                }) : t.playWheelAnimation(t._isSkip)
            })) : (BubblerManager.getInstance().showText("数据错误"), void this.startAnim())
        },
        i.prototype.playWheelAnimation = function(e) {
            var t = this;
            e ? (this.xian.visible = this.grp_arr.visible = this._rect.visible = this.grpLeft.visible = !1, this._animShine.visible = !0, this.playStartSound(5), SpineUtil.play(this._animShine, "keyinzhuanchang", this.grp_anim,
            function() {
                t._animShine.stopAll(),
                t.service.updateValues().then(function() {
                    t.showCard()
                }),
                t.grp_anim0.visible = t._animShine1.visible = !0,
                t._animShine1.play("keyinzhuanchang2", 1, 0, {
                    playEnd: function() {
                        t._animShine1.stopAll(),
                        t.grp_anim0.visible = t._animShine1.visible = !1,
                        t.playBgm()
                    }
                })
            },
            this, 1)) : (this.xian.visible = this.grp_arr.visible = this._rect.visible = this.pan.visible = this.grpLeft.visible = !1, this._animWheel.visible = !0, this._isPlay = !0, this.playStartSound(), this._animWheel.play("zhuanpanxunhuan", 0, 0, {
                loopEnd: function() {
                    t._isPlay = !1,
                    t._animShine.visible = !0,
                    t._animShine.play("keyinzhuanchang", 1, 0, {
                        playEnd: function() {
                            t._animWheel.stopAll(),
                            t._animShine.stopAll(),
                            t.service.updateValues().then(function() {
                                t.showCard()
                            }),
                            t.grp_anim0.visible = t._animShine1.visible = !0,
                            t._animShine1.play("keyinzhuanchang2", 1, 0, {
                                playEnd: function() {
                                    t._animShine1.stopAll(),
                                    t.grp_anim0.visible = t._animShine1.visible = !1,
                                    t.playBgm()
                                }
                            })
                        }
                    })
                }
            }))
        },
        i.prototype.onTouchTap = function() {
            var e = this;
            this._isPlay && (this._isPlay = !1, this._animShine.visible = !0, this.playStartSound(5), this._animShine.play("keyinzhuanchang", 1, 0, {
                playEnd: function() {
                    e._animWheel.stopAll(),
                    e._animShine.stopAll(),
                    e.service.updateValues().then(function() {
                        e.showCard()
                    }),
                    e.grp_anim0.visible = e._animShine1.visible = !0,
                    e._animShine1.play("keyinzhuanchang2", 1, 0, {
                        playEnd: function() {
                            e._animShine1.stopAll(),
                            e.grp_anim0.visible = e._animShine1.visible = !1,
                            e.playBgm()
                        }
                    })
                }
            }))
        },
        i.prototype.playStartSound = function(e) {
            void 0 === e && (e = 0),
            console.log("playStartSound position:" + e);
            var t = e,
            i = "resource/sound/mark_wheel/mark_wheel_effect.mp3";
            SoundManager.loadSound(i).then(function() {
                console.log("playStartSound loaded position:" + e + "  " + t),
                t > 0 ? SoundManager.seekTo(t) : SoundManager.playMusic(1, t, !1)
            })
        },
        i.prototype.playBgm = function() {
            var e = this,
            t = "resource/sound/mark_wheel/mark_wheel_bgm.mp3";
            SoundManager.loadSound(t).then(function() {
                egret.setTimeout(function() {
                    SoundManager.playMusic()
                },
                e, 1e3)
            })["catch"](function() {
                SoundManager.playMusic()
            })
        },
        i.prototype.showCard = function() {
            if (this.pan.visible = this.xian.visible = this.grp_arr.visible = this._rect.visible = this.grp_anim.visible = this.grpLeft.visible = !1, this.grpDetail.visible = this.grpItemNum.visible = !0, 1 == this._num) this.grp_one.visible = !0,
            this._isSkip ? (this.img_clickOne.visible = !1, this.btnDecomposeOne.visible = this.btnGetOne.visible = !0) : (this.img_clickOne.visible = !0, this.btnDecomposeOne.visible = this.btnGetOne.visible = !1),
            "normal" == this._type ? (this._singleQuality = this.service.getValue(e.AttrConst.normal_got_mark_quality[0]), this._singleId = this.service.getValue(e.AttrConst.normal_got_mark_id[0]), this.showOne()) : (this._singleQuality = this.service.getValue(e.AttrConst.limit_got_mark_quality[0]), this._singleId = this.service.getValue(e.AttrConst.limit_got_mark_id[0]), this.showOne());
            else if (this.grp_ten.visible = !0, this.img_close.visible = !1, this._isSkip ? (this.img_clickTen.visible = !1, this.btnDecomposeTen.visible = this.btnGetTen.visible = !0) : (this.img_clickTen.visible = !0, this.btnDecomposeTen.visible = this.btnGetTen.visible = !1), "normal" == this._type) {
                this._tenQualities = [],
                this._tenIds = [];
                for (var t = 0; 10 > t; t++) this._tenQualities.push(this.service.getValue(e.AttrConst.normal_got_mark_quality[t])),
                this._tenIds.push(this.service.getValue(e.AttrConst.normal_got_mark_id[t]));
                this.showTen()
            } else {
                this._tenQualities = [],
                this._tenIds = [];
                for (var t = 0; 10 > t; t++) this._tenQualities.push(this.service.getValue(e.AttrConst.limit_got_mark_quality[t])),
                this._tenIds.push(this.service.getValue(e.AttrConst.limit_got_mark_id[t]));
                this.showTen()
            }
        },
        i.prototype.showOne = function() {
            this.singleCard.initCard(this._singleQuality, this._singleId, this._isSkip),
            this._drawing = !1
        },
        i.prototype.onOpenOne = function() {
            this.singleCard.openCard(),
            this.img_clickOne.visible = !1,
            this.btnDecomposeOne.visible = this.btnGetOne.visible = !0
        },
        i.prototype.showTen = function() {
            var t = [];
            if ("normal" == this._type) var i = this.service.getValue(e.AttrConst.normal_decomposition_mark);
            else var i = this.service.getValue(e.AttrConst.limit_decomposition_mark);
            for (var n = 0; n < this._tenIds.length; n++) {
                var r = !!KTool.getBit(i, n + 1),
                a = !!KTool.getBit(i, n + 11),
                s = 0;
                r ? s = 1 : a && (s = 2);
                var o = {
                    idx: n + 1,
                    quality: this._tenQualities[n],
                    markId: this._tenIds[n],
                    isSkip: this._isSkip,
                    state: s
                };
                t.push(o)
            }
            this.cardList.itemRenderer = e.MarkWheelCardItem,
            this.cardList.dataProvider = new eui.ArrayCollection(t),
            this._drawing = !1
        },
        i.prototype.onOpenTen = function(e) {
            e.itemRenderer.openCard();
            for (var t = 0; t < this.cardList.numChildren; t++) if (!this.cardList.getChildAt(t).isOpen) return;
            this.img_clickTen.visible = !1,
            this.btnDecomposeTen.visible = this.btnGetTen.visible = !0
        },
        i.prototype.openAllTen = function() {
            for (var e = 0; e < this.cardList.numChildren; e++) this.cardList.getChildAt(e).openCard();
            this.img_clickTen.visible = !1,
            this.btnDecomposeTen.visible = this.btnGetTen.visible = !0
        },
        i.prototype.checkCardState = function() {
            for (var e = 0; e < this.cardList.numChildren; e++) if (!this.cardList.getChildAt(e).operation) return;
            this.btnDecomposeTen.visible = this.btnGetTen.visible = !1,
            this.img_close.visible = !0
        },
        i.prototype.startAnim = function() {
            this.grp_arr.visible = !0,
            this.grp_arr.x = this._minX,
            this.grp_arr.alpha = 1,
            this.shou.visible = !0,
            egret.Tween.get(this.grp_arr, {
                loop: !0
            }).to({
                x: this._maxX
            },
            2e3),
            egret.Tween.get(this.grp_arr, {
                loop: !0
            }).wait(1500).to({
                alpha: 0
            },
            500)
        },
        i.prototype.stopAnim = function() {
            egret.Tween.removeTweens(this),
            this.grp_arr.alpha = 1
        },
        i.prototype.removed = function() {
            this.stopAnim(),
            this.grp_arr.visible = !1
        },
        i.prototype.destroy = function() {
            for (t.prototype.destroy.call(this), ImageButtonUtil.removeAll(this), this.singleCard.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onOpenOne, this), this.singleCard.destroy(), this.cardList.removeEventListener(eui.ItemTapEvent.ITEM_TAP, this.onOpenTen, this); this.cardList.numChildren;) {
                var e = this.cardList.getChildAt(0);
                e.destroy(),
                DisplayUtil.removeForParent(e)
            }
            EventManager.removeAll(this),
            egret.lifecycle.stage.removeEventListener(egret.Event.RESIZE, this.onResize, this),
            this._rect.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchRect, this),
            this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this)
        },
        i
    } (BasicPanel);
    e.DrawPanel = t,
    __reflect(t.prototype, "markWheel.DrawPanel")
} (markWheel || (markWheel = {}));
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
markWheel; !
function(e) {
    var t = function(t) {
        function i() {
            var e = t.call(this) || this;
            return e._itemId_0_0 = 1723255,
            e._itemId_0_1 = 2500004,
            e._itemId_1 = 1723256,
            e.isSkipAnim = !1,
            e.skinName = "MarkWheelMainSkin",
            e
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            var e = this;
            this.groupAll.left = DeviceInfoManager.adapterOffSetX,
            this.groupAll.right = DeviceInfoManager.adapterOffSetX,
            this.buyPop.visible = !1,
            this.rbg_tab = this.tab_0.group,
            this.txt_info_0.textFlow = [{
                text: "常驻召唤：",
                style: {
                    textColor: 12834813
                }
            },
            {
                text: "【九天系列】",
                style: {
                    textColor: 65490
                }
            },
            {
                text: "刻印",
                style: {
                    textColor: 12834813
                }
            }],
            this.txt_info_1.textFlow = [{
                text: "累计召唤达到",
                style: {
                    textColor: 8631026
                }
            },
            {
                text: "60",
                style: {
                    textColor: 15706447
                }
            },
            {
                text: "次 必出",
                style: {
                    textColor: 8631026
                }
            },
            {
                text: "SS",
                style: {
                    textColor: 15706447
                }
            },
            {
                text: "级刻印",
                style: {
                    textColor: 8631026
                }
            }],
            this.addEvent(),
            this.cb_skip.selected = !!egret.localStorage.getItem("mark_wheel_skip_" + MainManager.actorID),
            this._animBg = SpineUtil.createAnimate("keyinzhumianban"),
            this._animLanse = SpineUtil.copy(this._animBg),
            this._animHongse = SpineUtil.copy(this._animBg),
            this._animHuangse = SpineUtil.copy(this._animBg),
            this._animXingzuo = SpineUtil.copy(this._animBg),
            this.grp_animBg.addChild(this._animBg),
            this.grp_animHongse.addChild(this._animHongse),
            this.grp_animHuangse.addChild(this._animHuangse),
            this.grp_animLanse.addChild(this._animLanse),
            this.grp_animXingzuo.addChild(this._animXingzuo),
            this._animBg.scaleX = this._animBg.scaleY = this._animLanse.scaleX = this._animLanse.scaleY = this._animHongse.scaleX = this._animHongse.scaleY = this._animHuangse.scaleX = this._animHuangse.scaleY = .6,
            this._animXingzuo.scaleX = this._animXingzuo.scaleY = .5,
            this._animBg.play("beijing"),
            this._animLanse.play("huangsekeyin"),
            this._animHongse.play("huangsekeyin"),
            this._animHuangse.play("huangsekeyin"),
            this._animXingzuo.play("xingzuo"),
            this.initBtnClose("mark_wheel_main_title_png", this,
            function() {
                e.service.closeModule()
            },
            this),
            !GameInfo.isChecking && this.initBtnHelp(function() {
                "normal" == e.currentState ? tipsPop.TipsPop.openHelpPopById(97) : tipsPop.TipsPop.openHelpPopById(98)
            },
            this),
            GameInfo.isChecking && (this.icon1Group.visible = !1, this.btnAdd.visible = !1, this.initBtnHelp(function() {
                tipsPop.TipsPop.openHelpPopById(136)
            },
            this));
            var t, i = SystemTimerManager.sysBJDate.getMonth() + 1,
            n = SystemTimerManager.sysBJDate.getDate();
            t = 2 == i && n >= 8 && 22 >= n ? !0 : !1,
            this.tab_1.visible = t,
            this.rbg_tab.selectedValue = t ? "limit": "normal",
            this.currentState = t ? "limit": "normal",
            t ? (StatLogger.log("20230119版本系统功能", "刻印之轮-永恒召唤（凶兽）", "进入永恒召唤主界面"), this.service.registerItemUpdateForText(this._itemId_1, this.txtCoin_0, this)) : (this.service.registerItemUpdateForText(this._itemId_0_0, this.txtCoin_0, this), this.service.registerItemUpdateForText(this._itemId_0_1, this.txtCoin_1, this)),
            this.icon_0.source = ClientConfig.getItemIcon(this._itemId_0_0),
            this.icon_1.source = ClientConfig.getItemIcon(this._itemId_0_1),
            this.icon_2.source = ClientConfig.getItemIcon(this._itemId_1);
            var r = "resource/sound/mark_wheel/mark_wheel_bgm.mp3",
            a = "resource/sound/mark_wheel/mark_wheel_effect.mp3";
            SoundManager.loadSound(a).then(function() {
                SoundManager.loadSound(r).then(function() {
                    SoundManager.playMusic()
                })["catch"](function() {})
            }),
            egret.localStorage.getItem("markWheelIsSkipAnim") ? this.isSkipAnim = JSON.parse(egret.localStorage.getItem("markWheelIsSkipAnim")) : egret.localStorage.setItem("markWheelIsSkipAnim", "" + this.isSkipAnim),
            this.imgSkipCheck.visible = this.isSkipAnim
        },
        i.prototype.addEvent = function() {
            var t = this;
            this.rbg_tab.addEventListener(egret.Event.CHANGE, this.onChangeTab, this),
            ImageButtonUtil.add(this.btnAdd,
            function() {
                PayManager.doPayFunc(function() {
                    t.buyPop.visible = !0
                },
                t)
            },
            this),
            this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch, this),
            ImageButtonUtil.add(this.btnBuyOne,
            function() {
                BuyProductManager.buyProduct("normal" == t.rbg_tab.selectedValue ? "258469_13276": "258471_13278",
                function() {
                    t.updateValues()
                },
                t, "normal" == t.rbg_tab.selectedValue ? 1723255 : 1723256)
            },
            this),
            ImageButtonUtil.add(this.btnBuyTen,
            function() {
                BuyProductManager.buyProduct("normal" == t.rbg_tab.selectedValue ? "258470_13277": "258472_13279",
                function() {
                    ItemManager.updateItems([1723255, 1723256],
                    function() {
                        t.updateValues()
                    })
                },
                t, "normal" == t.rbg_tab.selectedValue ? 1724925 : 1724926)
            },
            this),
            ImageButtonUtil.add(this.icon_0,
            function() {
                var e = {};
                e.id = t._itemId_0_0,
                tipsPop.TipsPop.openItemPop(e)
            },
            this),
            ImageButtonUtil.add(this.icon_1,
            function() {
                var e = {};
                e.id = t._itemId_0_1,
                tipsPop.TipsPop.openItemPop(e)
            },
            this),
            ImageButtonUtil.add(this.icon_2,
            function() {
                var e = {};
                e.id = t._itemId_1,
                tipsPop.TipsPop.openItemPop(e)
            },
            this),
            ImageButtonUtil.add(this.btnInfo,
            function() {
                "limit" == t.rbg_tab.selectedValue && StatLogger.log("20230119版本系统功能", "刻印之轮-永恒召唤（凶兽）", "进入【详情】界面"),
                t.service.openPanel(e.ModuleConst.DETAIL_PANEL, t.currentState)
            },
            this),
            ImageButtonUtil.add(this.btnShop,
            function() {
                "limit" == t.rbg_tab.selectedValue && StatLogger.log("20230119版本系统功能", "刻印之轮-永恒召唤（凶兽）", "进入【商店】界面"),
                t.service.openPanel(e.ModuleConst.SHOP_PANEL, t.currentState)
            },
            this),
            ImageButtonUtil.add(this.btnDrawOne,
            function() {
                if ("normal" == t.currentState) {
                    if (ItemManager.getNumByID(t._itemId_0_0) < 1 && ItemManager.getNumByID(t._itemId_0_1) < 1) return void Alarm.show("你拥有的浩瀚星核数量不足！")
                } else if (ItemManager.getNumByID(t._itemId_1) < 1) return void Alarm.show("你拥有的永恒星核数量不足！");
                t.service.openPanel(e.ModuleConst.DARW_PANEL, {
                    type: t.currentState,
                    num: 1,
                    skip: t.isSkipAnim
                })
            },
            this),
            ImageButtonUtil.add(this.btnDrawTen,
            function() {
                if ("normal" == t.currentState) {
                    if (ItemManager.getNumByID(t._itemId_0_0) < 10 && ItemManager.getNumByID(t._itemId_0_1) < 10) return void Alarm.show("你拥有的浩瀚星核数量不足！")
                } else if (ItemManager.getNumByID(t._itemId_1) < 10) return void Alarm.show("你拥有的永恒星核数量不足！");
                t.service.openPanel(e.ModuleConst.DARW_PANEL, {
                    type: t.currentState,
                    num: 10,
                    skip: t.isSkipAnim
                })
            },
            this),
            ImageButtonUtil.add(this.grpSkip,
            function() {
                t.isSkipAnim = !t.isSkipAnim,
                t.imgSkipCheck.visible = t.isSkipAnim,
                egret.localStorage.setItem("markWheelIsSkipAnim", "" + t.isSkipAnim)
            },
            this),
            this.cb_skip.addEventListener(egret.Event.CHANGE, this.onChangeSkip, this)
        },
        i.prototype.onTouch = function(e) {
            e.target != this.buyPop && e.target.parent != this.buyPop && e.target != this.btnAdd && (this.buyPop.visible = !1)
        },
        i.prototype.onChangeTab = function() {
            this.currentState = this.rbg_tab.selectedValue,
            this.service.unregisterItems(this),
            "normal" == this.rbg_tab.selectedValue ? (this._animXingzuo.play("xingzuo"), this.txt_info_0.textFlow = [{
                text: "常驻召唤：",
                style: {
                    textColor: 12834813
                }
            },
            {
                text: "【九天系列】",
                style: {
                    textColor: 65490
                }
            },
            {
                text: "刻印",
                style: {
                    textColor: 12834813
                }
            }], this.txt_info_1.textFlow = [{
                text: "累计召唤达到",
                style: {
                    textColor: 8631026
                }
            },
            {
                text: "60",
                style: {
                    textColor: 15706447
                }
            },
            {
                text: "次 必出",
                style: {
                    textColor: 8631026
                }
            },
            {
                text: "SS",
                style: {
                    textColor: 15706447
                }
            },
            {
                text: "级刻印",
                style: {
                    textColor: 8631026
                }
            }], this.cb_skip.bg.source = "mark_wheel_main_skipRbg_png", this.cb_skip.yes.source = "mark_wheel_main_skip_yes_png", this.service.registerItemUpdateForText(this._itemId_0_0, this.txtCoin_0, this), this.service.registerItemUpdateForText(this._itemId_0_1, this.txtCoin_1, this)) : (this._animXingzuo.play("jinsexingzuo"), this.txt_info_0.textFlow = [{
                text: "常驻召唤：",
                style: {
                    textColor: 16773581
                }
            },
            {
                text: "【九天系列】",
                style: {
                    textColor: 8776448
                }
            },
            {
                text: "刻印",
                style: {
                    textColor: 16773581
                }
            }], this.txt_info_1.textFlow = [{
                text: "累计召唤达到",
                style: {
                    textColor: 16770963
                }
            },
            {
                text: "60",
                style: {
                    textColor: 16777215
                }
            },
            {
                text: "次 必出",
                style: {
                    textColor: 16770963
                }
            },
            {
                text: "SS",
                style: {
                    textColor: 16777215
                }
            },
            {
                text: "级刻印",
                style: {
                    textColor: 16770963
                }
            }], this.cb_skip.bg.source = "mark_wheel_main_skipRbg_1_png", this.cb_skip.yes.source = "mark_wheel_main_skip_yes_1_png", this.service.registerItemUpdateForText(this._itemId_1, this.txtCoin_0, this)),
            this.update()
        },
        i.prototype.update = function() {
            var t = this.service.getValue(e.AttrConst.daily_item_gift_mark);
            if ("normal" == this.currentState) {
                this.txt_drawNum.text = this.service.getValue(e.AttrConst.normal_total_draw_times) % 60 + "/60";
                var i = KTool.getBit(t, 1)
            } else {
                this.txt_drawNum.text = this.service.getValue(e.AttrConst.limit_total_draw_times) % 60 + "/60";
                var i = KTool.getBit(t, 2)
            }
            this.flag_send.visible = !i;
            var n = this.service.getValue(e.AttrConst.normal_got_mark_id[0]),
            r = this.service.getValue(e.AttrConst.normal_got_mark_id[1]),
            a = this.service.getValue(e.AttrConst.limit_got_mark_id[0]),
            s = this.service.getValue(e.AttrConst.limit_got_mark_id[1]);
            n && !r ? this.service.openPanel(e.ModuleConst.DARW_PANEL, {
                type: "normal",
                num: 1,
                skip: this.isSkipAnim,
                showImmediately: !0
            }) : n && r ? this.service.openPanel(e.ModuleConst.DARW_PANEL, {
                type: "normal",
                num: 10,
                skip: this.isSkipAnim,
                showImmediately: !0
            }) : a && !s ? this.service.openPanel(e.ModuleConst.DARW_PANEL, {
                type: "limit",
                num: 1,
                skip: this.isSkipAnim,
                showImmediately: !0
            }) : a && s && this.service.openPanel(e.ModuleConst.DARW_PANEL, {
                type: "limit",
                num: 10,
                skip: this.isSkipAnim,
                showImmediately: !0
            })
        },
        i.prototype.onChangeSkip = function() {
            this.cb_skip.selected ? egret.localStorage.setItem("mark_wheel_skip_" + MainManager.actorID, "yes") : egret.localStorage.removeItem("mark_wheel_skip_" + MainManager.actorID)
        },
        i.prototype.destroy = function() {
            t.prototype.destroy.call(this),
            ImageButtonUtil.removeAll(this),
            this.rbg_tab.removeEventListener(egret.Event.CHANGE, this.onChangeTab, this),
            this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch, this),
            this.cb_skip.removeEventListener(egret.Event.CHANGE, this.onChangeSkip, this)
        },
        i
    } (BasicPanel);
    e.MainPanel = t,
    __reflect(t.prototype, "markWheel.MainPanel")
} (markWheel || (markWheel = {}));
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
markWheel; !
function(e) {
    var t = function(t) {
        function i() {
            var e = t.call(this) || this;
            return e.groupName = "MARK_WHEEL_SHOP",
            e._itemId_0 = 1723291,
            e._itemId_1 = 1723292,
            e.skinName = MarkWheelShopPanelSkin,
            e
        }
        return __extends(i, t),
        i.prototype.beforeAdd = function(e) {
            this._type = e,
            "normal" == this._type ? this._curItemId = this._itemId_0: this._curItemId = this._itemId_1
        },
        i.prototype.childrenCreated = function() {
            var e = this;
            t.prototype.childrenCreated.call(this),
            ImageButtonUtil.add(this.icon,
            function() {
                var t = {};
                t.id = e._curItemId,
                tipsPop.TipsPop.openItemPop(t)
            },
            this),
            this.createMenu(),
            this.sector_0.x = this.sector_0.x + DeviceInfoManager.adapterOffSetX,
            this.sector_1.x = this.sector_1.x + DeviceInfoManager.adapterOffSetX,
            this.txt_limit.x = this.txt_limit.x + DeviceInfoManager.adapterOffSetX,
            egret.lifecycle.stage.stageWidth > 1136 + 2 * DeviceInfoManager.adapterOffSetX + 170 && (this.sector_0.width = 1038),
            this.initBtnClose("mark_wheel_shop_panel_title_png", this,
            function() {
                e.service.backToMainPanel()
            },
            this),
            EventManager.addEventListener("mark_wheel_shop_buy", this.updateSector0, this),
            EventManager.addEventListener(BaseMenuEvent.BASE_MENU_SELECT_CHANGE_ + this.groupName, this.update, this)
        },
        i.prototype.createMenu = function() {
            var e = new MenuData;
            e.groupName = this.groupName,
            e["default"] = 1,
            e.root = [1, 2],
            e.data = {
                1 : {
                    title: "刻印兑换"
                },
                2 : {
                    title: "兑换记录"
                }
            },
            this.menu = Menu.createMenu(e, this.menuGroup)
        },
        i.prototype.update = function() {
            this.icon.source = ClientConfig.getItemIcon(this._curItemId),
            this.service.registerItemUpdateForText(this._curItemId, this.txtCoin, this),
            1 == this.menu.selectedValue ? (this.sector_0.visible = !0, this.sector_1.visible = !1, this.updateSector0()) : (this.sector_0.visible = !1, this.sector_1.visible = !0, this.updateSector1())
        },
        i.prototype.updateSector0 = function() {
            var t;
            "normal" == this._type ? (this.txt_limit.text = "每个刻印每月限兑1次", t = 1) : (this.txt_limit.text = "每个刻印限兑1次", t = 2);
            for (var i = MintmarkLotteryXMLInfo.getShopItemsByPuton(t), n = 0; n < i.length; n++) i[n].index = n,
            i[n].service = this.service;
            var r = this.list_0.scrollV;
            this.list_0.itemRenderer = e.MarkWheelShopItem,
            this.list_0.dataProvider = new eui.ArrayCollection(i),
            this.list_0.validateNow(),
            this.list_0.scrollV = r
        },
        i.prototype.updateSector1 = function() {
            var t = this;
            SocketConnection.sendByQueue(45816, [3, 20],
            function(i) {
                var n = i.data;
                n.position = 0;
                for (var r = n.readUnsignedInt(), a = [], s = 0; r > s; s++) {
                    var o = {};
                    o.userId = n.readUnsignedInt(),
                    o.id = n.readUnsignedInt(),
                    o.type = n.readUnsignedInt(),
                    o.timeStamp = n.readUnsignedInt();
                    var _ = Math.floor(o.type / 100); ("normal" == t._type && 1 == _ || "limit" == t._type && 2 == _) && a.push(o)
                }
                t.list_1.itemRenderer = e.MarkWheelShopRecordItem,
                t.list_1.dataProvider = new eui.ArrayCollection(a)
            })
        },
        i.prototype.destroy = function() {
            t.prototype.destroy.call(this),
            ImageButtonUtil.removeAll(this),
            EventManager.removeEventListener("mark_wheel_shop_buy", this.updateSector0, this),
            this.menu && this.menu.destroy(),
            EventManager.removeEventListener(BaseMenuEvent.BASE_MENU_SELECT_CHANGE_ + this.groupName, this.update, this)
        },
        i
    } (BasicPanel);
    e.ShopPanel = t,
    __reflect(t.prototype, "markWheel.ShopPanel")
} (markWheel || (markWheel = {}));
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
generateEUI.paths["resource/eui_skins/MarkWheelCardItemSkin.exml"] = window.MarkWheelCardItemSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["grp_anim", "flag_quality", "txt_name", "icon", "btnDecompose", "btnGet", "flag_got", "flag_decompose", "front", "back", "grp_anim0"],
        this.height = 265,
        this.width = 146,
        this.elementsContent = [this.grp_anim_i(), this.front_i(), this.back_i(), this.grp_anim0_i()],
        this.states = [new eui.State("blue", [new eui.SetProperty("_Image1", "source", "mark_wheel_card_item_blue_bg_png"), new eui.SetProperty("_Image1", "y", 28), new eui.SetProperty("txt_name", "textColor", 453375), new eui.SetProperty("back", "source", "mark_wheel_card_blue_back_png")]), new eui.State("purple", [new eui.SetProperty("_Image1", "source", "mark_wheel_card_item_purple_bg_png"), new eui.SetProperty("_Image1", "y", 19), new eui.SetProperty("txt_name", "textColor", 16370431), new eui.SetProperty("back", "source", "mark_wheel_card_purple_back_png")]), new eui.State("gold", [new eui.SetProperty("_Image1", "source", "mark_wheel_card_item_gold_bg_png"), new eui.SetProperty("_Image1", "y", 0), new eui.SetProperty("txt_name", "textColor", 16774213), new eui.SetProperty("back", "source", "mark_wheel_card_gold_back_png")])]
    }
    __extends(t, e);
    var i = t.prototype;
    return i.grp_anim_i = function() {
        var e = new eui.Group;
        return this.grp_anim = e,
        e.horizontalCenter = 0,
        e.verticalCenter = 0,
        e
    },
    i.front_i = function() {
        var e = new eui.Group;
        return this.front = e,
        e.cacheAsBitmap = !0,
        e.width = 146,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this._Image1_i(), this.flag_quality_i(), this.txt_name_i(), this.icon_i(), this.btnDecompose_i(), this.btnGet_i(), this.flag_got_i(), this.flag_decompose_i()],
        e
    },
    i._Image1_i = function() {
        var e = new eui.Image;
        return this._Image1 = e,
        e.visible = !1,
        e.x = 0,
        e
    },
    i.flag_quality_i = function() {
        var e = new eui.Image;
        return this.flag_quality = e,
        e.height = 18,
        e.source = "mark_wheel_card_flag_a_png",
        e.visible = !1,
        e.width = 56,
        e.x = 11,
        e.y = 47,
        e
    },
    i.txt_name_i = function() {
        var e = new eui.Label;
        return this.txt_name = e,
        e.fontFamily = "MFShangHei",
        e.horizontalCenter = 0,
        e.size = 16,
        e.text = "十年·磨砺",
        e.y = 155,
        e
    },
    i.icon_i = function() {
        var e = new eui.Image;
        return this.icon = e,
        e.height = 67,
        e.width = 70,
        e.x = 38,
        e.y = 77,
        e
    },
    i.btnDecompose_i = function() {
        var e = new eui.Image;
        return this.btnDecompose = e,
        e.height = 36,
        e.source = "mark_wheel_card_item_btnDecompose_png",
        e.width = 61,
        e.x = 14,
        e.y = 183,
        e
    },
    i.btnGet_i = function() {
        var e = new eui.Image;
        return this.btnGet = e,
        e.height = 36,
        e.source = "mark_wheel_card_item_btnGet_png",
        e.width = 61,
        e.x = 72,
        e.y = 183,
        e
    },
    i.flag_got_i = function() {
        var e = new eui.Image;
        return this.flag_got = e,
        e.height = 15,
        e.source = "mark_wheel_card_item_flag_got_png",
        e.width = 97,
        e.x = 24,
        e.y = 191,
        e
    },
    i.flag_decompose_i = function() {
        var e = new eui.Image;
        return this.flag_decompose = e,
        e.height = 15,
        e.source = "mark_wheel_card_item_flag_decompose_png",
        e.width = 97,
        e.x = 24,
        e.y = 191,
        e
    },
    i.back_i = function() {
        var e = new eui.Image;
        return this.back = e,
        e.horizontalCenter = 0,
        e.verticalCenter = 0,
        e.visible = !1,
        e
    },
    i.grp_anim0_i = function() {
        var e = new eui.Group;
        return this.grp_anim0 = e,
        e.horizontalCenter = 0,
        e.verticalCenter = 0,
        e.x = 83,
        e.y = 143,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/MarkWheelCardSkin.exml"] = window.MarkWheelCardSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["grp_anim", "flag_quality", "txt_name", "icon", "front", "back", "grp_anim0"],
        this.height = 265,
        this.width = 146,
        this.elementsContent = [this.grp_anim_i(), this.front_i(), this.back_i(), this.grp_anim0_i()],
        this.states = [new eui.State("blue", [new eui.SetProperty("_Image1", "source", "mark_wheel_card_blueBg_png"), new eui.SetProperty("_Image1", "y", 36), new eui.SetProperty("txt_name", "textColor", 453375), new eui.SetProperty("back", "source", "mark_wheel_card_blue_back_png")]), new eui.State("purple", [new eui.SetProperty("_Image1", "source", "mark_wheel_card_purpleBg_png"), new eui.SetProperty("_Image1", "y", 19), new eui.SetProperty("txt_name", "textColor", 16370431), new eui.SetProperty("back", "source", "mark_wheel_card_purple_back_png")]), new eui.State("gold", [new eui.SetProperty("_Image1", "source", "mark_wheel_card_goldBg_png"), new eui.SetProperty("_Image1", "y", 0), new eui.SetProperty("txt_name", "textColor", 16774213), new eui.SetProperty("back", "source", "mark_wheel_card_gold_back_png")])]
    }
    __extends(t, e);
    var i = t.prototype;
    return i.grp_anim_i = function() {
        var e = new eui.Group;
        return this.grp_anim = e,
        e.horizontalCenter = 0,
        e.verticalCenter = 0,
        e
    },
    i.front_i = function() {
        var e = new eui.Group;
        return this.front = e,
        e.cacheAsBitmap = !0,
        e.width = 146,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this._Image1_i(), this.flag_quality_i(), this.txt_name_i(), this.icon_i()],
        e
    },
    i._Image1_i = function() {
        var e = new eui.Image;
        return this._Image1 = e,
        e.visible = !1,
        e.x = 0,
        e
    },
    i.flag_quality_i = function() {
        var e = new eui.Image;
        return this.flag_quality = e,
        e.height = 18,
        e.source = "mark_wheel_card_flag_a_png",
        e.visible = !1,
        e.width = 56,
        e.x = 11,
        e.y = 47,
        e
    },
    i.txt_name_i = function() {
        var e = new eui.Label;
        return this.txt_name = e,
        e.fontFamily = "MFShangHei",
        e.horizontalCenter = 0,
        e.size = 16,
        e.text = "十年·磨砺",
        e.y = 155,
        e
    },
    i.icon_i = function() {
        var e = new eui.Image;
        return this.icon = e,
        e.height = 67,
        e.width = 70,
        e.x = 38,
        e.y = 77,
        e
    },
    i.back_i = function() {
        var e = new eui.Image;
        return this.back = e,
        e.horizontalCenter = 0,
        e.verticalCenter = 0,
        e.visible = !0,
        e
    },
    i.grp_anim0_i = function() {
        var e = new eui.Group;
        return this.grp_anim0 = e,
        e.horizontalCenter = 0,
        e.verticalCenter = 0,
        e.x = 83,
        e.y = 143,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/MarkWheelDetailItemSkin.exml"] = window.MarkWheelDetailItemSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["bg", "txt_name", "icon", "flag"],
        this.height = 145,
        this.width = 145,
        this.elementsContent = [this.bg_i(), this.txt_name_i(), this.icon_i(), this.flag_i()],
        this.states = [new eui.State("blue", []), new eui.State("purple", [new eui.SetProperty("bg", "source", "mark_wheel_detail_item_bg_1_png")]), new eui.State("gold", [new eui.SetProperty("bg", "source", "mark_wheel_detail_item_bg_2_png")])]
    }
    __extends(t, e);
    var i = t.prototype;
    return i.bg_i = function() {
        var e = new eui.Image;
        return this.bg = e,
        e.height = 145,
        e.source = "mark_wheel_detail_item_bg_0_png",
        e.width = 145,
        e.x = 0,
        e.y = 0,
        e
    },
    i.txt_name_i = function() {
        var e = new eui.Label;
        return this.txt_name = e,
        e.fontFamily = "MFShangHei",
        e.horizontalCenter = 0,
        e.size = 16,
        e.text = "十年·磨砺",
        e.textColor = 16777215,
        e.y = 9,
        e
    },
    i.icon_i = function() {
        var e = new eui.Image;
        return this.icon = e,
        e.height = 67,
        e.width = 70,
        e.x = 37,
        e.y = 49,
        e
    },
    i.flag_i = function() {
        var e = new eui.Image;
        return this.flag = e,
        e.height = 37,
        e.source = "mark_wheel_detail_decompose_flag_png",
        e.width = 36,
        e.x = 101,
        e.y = 101,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/MarkWheelDetailPanelSkin.exml"] = window.MarkWheelDetailPanelSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["menuGroup", "list_1", "sector_1", "list_0", "section_0", "section_1", "section_2", "section_3", "section_4", "sector_0"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this._Image1_i(), this.menuGroup_i(), this.sector_1_i(), this.sector_0_i()]
    }
    __extends(t, e);
    var i = function(e) {
        function t() {
            e.call(this),
            this.skinParts = [],
            this.elementsContent = [],
            this._Image1_i(),
            this._Image2_i(),
            this.states = [new eui.State("up", [new eui.AddItems("_Image1", "", 0, "")]), new eui.State("down", [new eui.AddItems("_Image2", "", 1, "")]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.height = 33,
            e.source = "mark_wheel_detail_panel_ss_up_png",
            e.width = 101,
            e.x = 0,
            e.y = 0,
            e
        },
        i._Image2_i = function() {
            var e = new eui.Image;
            return this._Image2 = e,
            e.height = 33,
            e.source = "mark_wheel_detail_panel_ss_down_png",
            e.width = 101,
            e.x = 0,
            e.y = 0,
            e
        },
        t
    } (eui.Skin),
    n = function(e) {
        function t() {
            e.call(this),
            this.skinParts = [],
            this.elementsContent = [],
            this._Image1_i(),
            this._Image2_i(),
            this.states = [new eui.State("up", [new eui.AddItems("_Image1", "", 0, "")]), new eui.State("down", [new eui.AddItems("_Image2", "", 1, "")]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.height = 33,
            e.source = "mark_wheel_detail_panel_s_up_png",
            e.width = 101,
            e.x = 0,
            e.y = 0,
            e
        },
        i._Image2_i = function() {
            var e = new eui.Image;
            return this._Image2 = e,
            e.height = 33,
            e.source = "mark_wheel_detail_panel_s_down_png",
            e.width = 101,
            e.x = 0,
            e.y = 0,
            e
        },
        t
    } (eui.Skin),
    r = function(e) {
        function t() {
            e.call(this),
            this.skinParts = [],
            this.elementsContent = [],
            this._Image1_i(),
            this._Image2_i(),
            this.states = [new eui.State("up", [new eui.AddItems("_Image1", "", 0, "")]), new eui.State("down", [new eui.AddItems("_Image2", "", 1, "")]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.height = 33,
            e.source = "mark_wheel_detail_panel_a_up_png",
            e.width = 101,
            e.x = 0,
            e.y = 0,
            e
        },
        i._Image2_i = function() {
            var e = new eui.Image;
            return this._Image2 = e,
            e.height = 33,
            e.source = "mark_wheel_detail_panel_a_down_png",
            e.width = 101,
            e.x = 0,
            e.y = 0,
            e
        },
        t
    } (eui.Skin),
    a = function(e) {
        function t() {
            e.call(this),
            this.skinParts = [],
            this.elementsContent = [],
            this._Image1_i(),
            this._Image2_i(),
            this.states = [new eui.State("up", [new eui.AddItems("_Image1", "", 0, "")]), new eui.State("down", [new eui.AddItems("_Image2", "", 1, "")]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.height = 33,
            e.source = "mark_wheel_detail_panel_b_up_png",
            e.width = 101,
            e.x = 0,
            e.y = 0,
            e
        },
        i._Image2_i = function() {
            var e = new eui.Image;
            return this._Image2 = e,
            e.height = 33,
            e.source = "mark_wheel_detail_panel_b_down_png",
            e.width = 101,
            e.x = 0,
            e.y = 0,
            e
        },
        t
    } (eui.Skin),
    s = function(e) {
        function t() {
            e.call(this),
            this.skinParts = [],
            this.elementsContent = [],
            this._Image1_i(),
            this._Image2_i(),
            this.states = [new eui.State("up", [new eui.AddItems("_Image1", "", 0, "")]), new eui.State("down", [new eui.AddItems("_Image2", "", 1, "")]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.height = 33,
            e.source = "mark_wheel_detail_panel_c_up_png",
            e.width = 101,
            e.x = 0,
            e.y = 0,
            e
        },
        i._Image2_i = function() {
            var e = new eui.Image;
            return this._Image2 = e,
            e.height = 33,
            e.source = "mark_wheel_detail_panel_c_down_png",
            e.width = 101,
            e.x = 0,
            e.y = 0,
            e
        },
        t
    } (eui.Skin),
    o = t.prototype;
    return o._Image1_i = function() {
        var e = new eui.Image;
        return e.height = 640,
        e.source = "common_ui_bg_3_jpg",
        e.percentWidth = 100,
        e.x = 0,
        e.y = 0,
        e
    },
    o.menuGroup_i = function() {
        var e = new eui.Group;
        return this.menuGroup = e,
        e.x = 0,
        e.y = 48,
        e
    },
    o.sector_1_i = function() {
        var e = new eui.Group;
        return this.sector_1 = e,
        e.visible = !0,
        e.width = 918,
        e.x = 170,
        e.y = 64,
        e.elementsContent = [this._Image2_i(), this._Scroller1_i(), this._Image3_i(), this._Label1_i(), this._Label2_i()],
        e
    },
    o._Image2_i = function() {
        var e = new eui.Image;
        return e.height = 550,
        e.source = "mark_wheel_detail_panel_sector_1_bg_png",
        e.visible = !0,
        e.percentWidth = 100,
        e.x = 0,
        e.y = 0,
        e
    },
    o._Scroller1_i = function() {
        var e = new eui.Scroller;
        return e.height = 473,
        e.left = 31,
        e.right = 38,
        e.y = 54,
        e.viewport = this.list_1_i(),
        e
    },
    o.list_1_i = function() {
        var e = new eui.List;
        return this.list_1 = e,
        e.height = 473,
        e.visible = !0,
        e.width = 849,
        e.x = 31,
        e.y = 54,
        e.layout = this._TileLayout1_i(),
        e
    },
    o._TileLayout1_i = function() {
        var e = new eui.TileLayout;
        return e.columnAlign = "left",
        e.horizontalGap = 31,
        e.orientation = "rows",
        e.verticalGap = 25,
        e
    },
    o._Image3_i = function() {
        var e = new eui.Image;
        return e.height = 26,
        e.source = "mark_wheel_detail_decompose_flag_png",
        e.width = 26,
        e.x = 75,
        e.y = 12,
        e
    },
    o._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "带有",
        e.textColor = 12834813,
        e.x = 31,
        e.y = 16,
        e
    },
    o._Label2_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "表示该刻印已分解",
        e.textColor = 12834813,
        e.x = 110,
        e.y = 16,
        e
    },
    o.sector_0_i = function() {
        var e = new eui.Group;
        return this.sector_0 = e,
        e.visible = !0,
        e.width = 918,
        e.x = 170,
        e.y = 64,
        e.elementsContent = [this._Image4_i(), this._Scroller2_i(), this.section_0_i(), this.section_1_i(), this.section_2_i(), this.section_3_i(), this.section_4_i()],
        e
    },
    o._Image4_i = function() {
        var e = new eui.Image;
        return e.height = 518,
        e.source = "mark_wheel_detail_panel_sector_1_bg_png",
        e.percentWidth = 100,
        e.x = 0,
        e.y = 32,
        e
    },
    o._Scroller2_i = function() {
        var e = new eui.Scroller;
        return e.height = 473,
        e.left = 31,
        e.right = 38,
        e.y = 54,
        e.viewport = this.list_0_i(),
        e
    },
    o.list_0_i = function() {
        var e = new eui.List;
        return this.list_0 = e,
        e.height = 473,
        e.scaleX = 1,
        e.scaleY = 1,
        e.width = 849,
        e.x = 0,
        e.y = 0,
        e.layout = this._TileLayout2_i(),
        e
    },
    o._TileLayout2_i = function() {
        var e = new eui.TileLayout;
        return e.columnAlign = "left",
        e.horizontalGap = 31,
        e.orientation = "rows",
        e.verticalGap = 25,
        e
    },
    o.section_0_i = function() {
        var e = new eui.RadioButton;
        return this.section_0 = e,
        e.groupName = "mark_wheel_detail_section",
        e.value = "5",
        e.x = 1,
        e.y = 0,
        e.skinName = i,
        e
    },
    o.section_1_i = function() {
        var e = new eui.RadioButton;
        return this.section_1 = e,
        e.groupName = "mark_wheel_detail_section",
        e.value = "4",
        e.x = 101,
        e.y = 0,
        e.skinName = n,
        e
    },
    o.section_2_i = function() {
        var e = new eui.RadioButton;
        return this.section_2 = e,
        e.groupName = "mark_wheel_detail_section",
        e.value = "3",
        e.x = 202,
        e.y = 0,
        e.skinName = r,
        e
    },
    o.section_3_i = function() {
        var e = new eui.RadioButton;
        return this.section_3 = e,
        e.groupName = "mark_wheel_detail_section",
        e.value = "2",
        e.x = 302,
        e.y = 0,
        e.skinName = a,
        e
    },
    o.section_4_i = function() {
        var e = new eui.RadioButton;
        return this.section_4 = e,
        e.groupName = "mark_wheel_detail_section",
        e.value = "1",
        e.x = 403,
        e.y = 0,
        e.skinName = s,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/MarkWheelDrawPanelSkin.exml"] = window.MarkWheelDrawPanelSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["bg", "pan", "grp_anim", "xian", "img_arr", "jiantou", "shou", "grp_arr", "grpClose", "grpLeft", "_rect", "_mask", "txtCoin", "icon_1", "grpItemNum", "icon_0", "grpDetail", "singleCard", "img_clickOne", "btnDecomposeOne", "btnGetOne", "grp_one", "cardList", "img_clickTen", "btnDecomposeTen", "btnGetTen", "img_close", "grp_ten", "grp_anim0"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this.pan_i(), this.grp_anim_i(), this.xian_i(), this.grp_arr_i(), this.grpLeft_i(), this._rect_i(), this._mask_i(), this.grpItemNum_i(), this.grpDetail_i(), this.grp_one_i(), this.grp_ten_i(), this.grp_anim0_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i.bg_i = function() {
        var e = new eui.Image;
        return this.bg = e,
        e.height = 640,
        e.source = "mark_wheel_draw_panel_bg_jpg",
        e.percentWidth = 100,
        e.x = 0,
        e.y = 0,
        e
    },
    i.pan_i = function() {
        var e = new eui.Image;
        return this.pan = e,
        e.height = 581,
        e.horizontalCenter = 0,
        e.source = "mark_wheel_draw_panel_pan_png",
        e.verticalCenter = -29.5,
        e.width = 616,
        e
    },
    i.grp_anim_i = function() {
        var e = new eui.Group;
        return this.grp_anim = e,
        e.horizontalCenter = 5,
        e.touchChildren = !1,
        e.touchEnabled = !1,
        e.verticalCenter = -43,
        e
    },
    i.xian_i = function() {
        var e = new eui.Image;
        return this.xian = e,
        e.height = 22,
        e.horizontalCenter = 0,
        e.source = "mark_wheel_draw_panel_xian_png",
        e.width = 486,
        e.y = 548,
        e
    },
    i.grp_arr_i = function() {
        var e = new eui.Group;
        return this.grp_arr = e,
        e.visible = !1,
        e.x = 381,
        e.y = 533,
        e.elementsContent = [this.jiantou_i(), this.shou_i()],
        e
    },
    i.jiantou_i = function() {
        var e = new eui.Group;
        return this.jiantou = e,
        e.height = 50,
        e.touchChildren = !1,
        e.width = 58,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this.img_arr_i()],
        e
    },
    i.img_arr_i = function() {
        var e = new eui.Image;
        return this.img_arr = e,
        e.height = 20,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "mark_wheel_draw_panel_jiantou_png",
        e.width = 42,
        e.x = 3,
        e.y = 16,
        e
    },
    i.shou_i = function() {
        var e = new eui.Image;
        return this.shou = e,
        e.height = 63,
        e.source = "mark_wheel_draw_panel_shou_png",
        e.width = 58,
        e.x = 0,
        e.y = 33,
        e
    },
    i.grpLeft_i = function() {
        var e = new eui.Group;
        return this.grpLeft = e,
        e.cacheAsBitmap = !0,
        e.visible = !0,
        e.width = 287,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this._Image1_i(), this.grpClose_i()],
        e
    },
    i._Image1_i = function() {
        var e = new eui.Image;
        return e.height = 76,
        e.source = "adapt_up_bg_png",
        e.x = -77,
        e.y = 0,
        e
    },
    i.grpClose_i = function() {
        var e = new eui.Group;
        return this.grpClose = e,
        e.height = 48,
        e.width = 200,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this._Image2_i(), this._Image3_i()],
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.height = 38,
        e.source = "mark_wheel_main_btnClose_png",
        e.width = 28,
        e.x = 22,
        e.y = 5,
        e
    },
    i._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "mark_wheel_main_title_png",
        e.x = 57,
        e.y = 10,
        e
    },
    i._rect_i = function() {
        var e = new eui.Rect;
        return this._rect = e,
        e.fillAlpha = 0,
        e.height = 183,
        e.width = 207,
        e.x = 335,
        e.y = 450,
        e
    },
    i._mask_i = function() {
        var e = new eui.Rect;
        return this._mask = e,
        e.fillAlpha = .7,
        e.percentHeight = 100,
        e.visible = !1,
        e.percentWidth = 100,
        e.x = 0,
        e.y = 0,
        e
    },
    i.grpItemNum_i = function() {
        var e = new eui.Group;
        return this.grpItemNum = e,
        e.cacheAsBitmap = !0,
        e.right = 43,
        e.visible = !0,
        e.y = 14,
        e.elementsContent = [this._Image4_i(), this.txtCoin_i(), this.icon_1_i()],
        e
    },
    i._Image4_i = function() {
        var e = new eui.Image;
        return e.height = 21,
        e.source = "mark_wheel_main_itemNumBg_png",
        e.width = 133,
        e.x = 6,
        e.y = 2,
        e
    },
    i.txtCoin_i = function() {
        var e = new eui.Label;
        return this.txtCoin = e,
        e.fontFamily = "MFShangHei",
        e.horizontalCenter = 1,
        e.size = 18,
        e.text = "99999",
        e.textColor = 12834813,
        e.y = 3,
        e
    },
    i.icon_1_i = function() {
        var e = new eui.Image;
        return this.icon_1 = e,
        e.height = 30,
        e.source = "",
        e.width = 30,
        e.x = 0,
        e.y = -3,
        e
    },
    i.grpDetail_i = function() {
        var e = new eui.Group;
        return this.grpDetail = e,
        e.cacheAsBitmap = !0,
        e.visible = !1,
        e.x = 12,
        e.y = 14,
        e.elementsContent = [this._Image5_i(), this.icon_0_i(), this._Label1_i(), this._Label2_i(), this._Label3_i(), this._Label4_i(), this._Label5_i(), this._Label6_i(), this._Label7_i(), this._Label8_i(), this._Label9_i(), this._Label10_i()],
        e
    },
    i._Image5_i = function() {
        var e = new eui.Image;
        return e.height = 26,
        e.source = "mark_wheel_draw_img_detail_png",
        e.width = 152,
        e.x = 0,
        e.y = 1,
        e
    },
    i.icon_0_i = function() {
        var e = new eui.Image;
        return this.icon_0 = e,
        e.height = 25,
        e.source = "",
        e.width = 25,
        e.x = 78,
        e.y = 0,
        e
    },
    i._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 15.9302411383184,
        e.text = "SS级",
        e.textColor = 10213885,
        e.x = 24,
        e.y = 35,
        e
    },
    i._Label2_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 15.965435051719,
        e.text = "S级 ",
        e.textColor = 10213885,
        e.x = 31,
        e.y = 58,
        e
    },
    i._Label3_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 15.8997636620095,
        e.text = "A级",
        e.textColor = 10213885,
        e.x = 29,
        e.y = 81,
        e
    },
    i._Label4_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 15.9658833652547,
        e.text = "B级",
        e.textColor = 10213885,
        e.x = 30,
        e.y = 105,
        e
    },
    i._Label5_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 15.9680641768047,
        e.text = "C级",
        e.textColor = 10213885,
        e.x = 31,
        e.y = 127,
        e
    },
    i._Label6_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 16.0052317713696,
        e.text = "250个",
        e.textColor = 10213885,
        e.x = 72,
        e.y = 35,
        e
    },
    i._Label7_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 16.0405913579589,
        e.text = "100个 ",
        e.textColor = 10213885,
        e.x = 74,
        e.y = 58,
        e
    },
    i._Label8_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 15.9746108242103,
        e.text = "25个",
        e.textColor = 10213885,
        e.x = 81,
        e.y = 81,
        e
    },
    i._Label9_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 16.0410417819031,
        e.text = "5个",
        e.textColor = 10213885,
        e.x = 89,
        e.y = 104,
        e
    },
    i._Label10_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 16.0432328594897,
        e.text = "2个",
        e.textColor = 10213885,
        e.x = 88,
        e.y = 127,
        e
    },
    i.grp_one_i = function() {
        var e = new eui.Group;
        return this.grp_one = e,
        e.height = 414,
        e.horizontalCenter = -7,
        e.verticalCenter = 40,
        e.visible = !0,
        e.width = 610,
        e.elementsContent = [this.singleCard_i(), this.img_clickOne_i(), this.btnDecomposeOne_i(), this.btnGetOne_i()],
        e
    },
    i.singleCard_i = function() {
        var e = new markWheel.MarkWheelCard;
        return this.singleCard = e,
        e.skinName = "MarkWheelCardSkin",
        e.x = 240,
        e.y = 0,
        e
    },
    i.img_clickOne_i = function() {
        var e = new eui.Image;
        return this.img_clickOne = e,
        e.height = 125,
        e.source = "mark_wheel_draw_img_clickOne_png",
        e.width = 610,
        e.x = 0,
        e.y = 289,
        e
    },
    i.btnDecomposeOne_i = function() {
        var e = new eui.Image;
        return this.btnDecomposeOne = e,
        e.height = 69,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "mark_wheel_draw_btnDecomposeOne_png",
        e.width = 172,
        e.x = 86,
        e.y = 314,
        e
    },
    i.btnGetOne_i = function() {
        var e = new eui.Image;
        return this.btnGetOne = e,
        e.height = 69,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "mark_wheel_draw_btnGetOne_png",
        e.width = 172,
        e.x = 365,
        e.y = 314,
        e
    },
    i.grp_ten_i = function() {
        var e = new eui.Group;
        return this.grp_ten = e,
        e.height = 581,
        e.horizontalCenter = 1,
        e.visible = !0,
        e.width = 812,
        e.y = 56,
        e.elementsContent = [this.cardList_i(), this.img_clickTen_i(), this.btnDecomposeTen_i(), this.btnGetTen_i(), this.img_close_i()],
        e
    },
    i.cardList_i = function() {
        var e = new eui.List;
        return this.cardList = e,
        e.height = 485,
        e.width = 812,
        e.x = 0,
        e.y = 0,
        e.layout = this._TileLayout1_i(),
        e
    },
    i._TileLayout1_i = function() {
        var e = new eui.TileLayout;
        return e.columnAlign = "justifyUsingGap",
        e.orientation = "rows",
        e.requestedColumnCount = 5,
        e.requestedRowCount = 2,
        e.verticalGap = -45,
        e
    },
    i.img_clickTen_i = function() {
        var e = new eui.Image;
        return this.img_clickTen = e,
        e.height = 125,
        e.source = "mark_wheel_draw_img_clickTen_png",
        e.width = 610,
        e.x = 93,
        e.y = 456,
        e
    },
    i.btnDecomposeTen_i = function() {
        var e = new eui.Image;
        return this.btnDecomposeTen = e,
        e.height = 69,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "mark_wheel_draw_btnDecomposeTen_png",
        e.width = 193,
        e.x = 138,
        e.y = 486,
        e
    },
    i.btnGetTen_i = function() {
        var e = new eui.Image;
        return this.btnGetTen = e,
        e.height = 69,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "mark_wheel_draw_btnGetTen_png",
        e.width = 193,
        e.x = 477,
        e.y = 486,
        e
    },
    i.img_close_i = function() {
        var e = new eui.Image;
        return this.img_close = e,
        e.height = 69,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "mark_wheel_draw_img_close_png",
        e.width = 577,
        e.x = 109,
        e.y = 484,
        e
    },
    i.grp_anim0_i = function() {
        var e = new eui.Group;
        return this.grp_anim0 = e,
        e.horizontalCenter = 5,
        e.touchChildren = !1,
        e.touchEnabled = !1,
        e.verticalCenter = -46,
        e.x = 583,
        e.y = 284,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/MarkWheelMainSkin.exml"] = window.MarkWheelMainSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["grp_animBg", "grp_animXingzuo", "costIcon_1", "btnDrawTen", "costIcon_0", "btnDrawOne", "txt_info_0", "txt_info_1", "drawNum_bar", "drawNum_thumb", "txt_drawNum", "grpDrawInfo", "btnInfo", "timebg", "txt_time", "tab_0", "tab_1", "grp_animLanse", "grp_animHongse", "grp_animHuangse", "cb_skip", "skip0", "btnShop", "txtSkip", "imgcheckbox", "imgSkipCheck", "grpSkip", "btnBuyTen", "sendItem", "flag_send", "btnBuyOne", "buyPop", "icon_2", "icon_0", "txtCoin_0", "icon_1", "txtCoin_1", "icon1Group", "btnAdd", "itemNum", "groupAll"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this._Image1_i(), this.grp_animBg_i(), this._Image2_i(), this.grp_animXingzuo_i(), this._Image3_i(), this.groupAll_i()],
        this._Image6_i(),
        this.icon_2_i(),
        this.icon_0_i(),
        this.states = [new eui.State("normal", [new eui.AddItems("icon_0", "itemNum", 2, "txtCoin_0"), new eui.SetProperty("grp_animBg", "visible", !0), new eui.SetProperty("_Image2", "visible", !0), new eui.SetProperty("grp_animXingzuo", "visible", !0), new eui.SetProperty("_Image3", "visible", !0), new eui.SetProperty("costIcon_1", "scaleX", -1), new eui.SetProperty("costIcon_1", "x", 48), new eui.SetProperty("costIcon_0", "scaleX", -1), new eui.SetProperty("costIcon_0", "x", 48), new eui.SetProperty("_Group1", "visible", !1)]), new eui.State("limit", [new eui.AddItems("_Image6", "groupAll", 2, "grpDrawInfo"), new eui.AddItems("icon_2", "itemNum", 2, "txtCoin_0"), new eui.SetProperty("_Image1", "source", "mark_wheel_main_bg_1_jpg"), new eui.SetProperty("_Image2", "source", "mark_wheel_main_wheel_1_png"), new eui.SetProperty("_Image2", "y", 0), new eui.SetProperty("_Image2", "height", 640), new eui.SetProperty("grp_animXingzuo", "y", 320), new eui.SetProperty("grp_animXingzuo", "horizontalCenter", 0), new eui.SetProperty("costIcon_1", "source", "mark_wheel_main_costIcon_1_png"), new eui.SetProperty("costIcon_1", "scaleX", -1), new eui.SetProperty("costIcon_1", "x", 48), new eui.SetProperty("costIcon_0", "source", "mark_wheel_main_costIcon_1_png"), new eui.SetProperty("costIcon_0", "scaleX", -1), new eui.SetProperty("costIcon_0", "x", 48), new eui.SetProperty("_Image7", "source", "mark_wheel_main_drawBg_1_png"), new eui.SetProperty("_Image7", "visible", !1), new eui.SetProperty("_Label1", "text", "凝聚永恒之力 召唤稀有刻印"), new eui.SetProperty("_Label1", "visible", !1), new eui.SetProperty("txt_info_0", "text", "限时召唤：【凶兽系列】刻印"), new eui.SetProperty("txt_info_0", "visible", !1), new eui.SetProperty("txt_info_1", "visible", !1), new eui.SetProperty("_Image8", "source", "mark_wheel_main_drawTitle_1_png"), new eui.SetProperty("_Image8", "visible", !1), new eui.SetProperty("drawNum_bar", "source", "mark_wheel_main_drawNum_bar_1_png"), new eui.SetProperty("drawNum_bar", "visible", !1), new eui.SetProperty("drawNum_thumb", "source", "mark_wheel_main_drawNum_thumb_1_png"), new eui.SetProperty("drawNum_thumb", "visible", !1), new eui.SetProperty("txt_drawNum", "visible", !0), new eui.SetProperty("txt_drawNum", "strokeColor", 16726072), new eui.SetProperty("txt_drawNum", "stroke", 1), new eui.SetProperty("txt_drawNum", "y", 146), new eui.SetProperty("txt_drawNum", "horizontalCenter", 181), new eui.SetProperty("grpDrawInfo", "visible", !0), new eui.SetProperty("_Image9", "source", "mark_wheel_imgmark1_png"), new eui.SetProperty("_Image10", "source", "mark_wheel_imgmark3_png"), new eui.SetProperty("_Image11", "source", "mark_wheel_imgmark2_png"), new eui.SetProperty("_Image12", "source", "mark_wheel_main_limit_s1_png"), new eui.SetProperty("_Image12", "height", 165), new eui.SetProperty("_Image13", "source", "mark_wheel_main_shenglingzuifa_1_png"), new eui.SetProperty("_Image14", "source", "mark_wheel_main_limit_s2_png"), new eui.SetProperty("_Image14", "height", 165), new eui.SetProperty("_Image14", "width", 186), new eui.SetProperty("_Image15", "source", "mark_wheel_main_skipbg_1_png"), new eui.SetProperty("sendItem", "source", "mark_wheel_main_costIcon_1_png"), new eui.SetProperty("_Image19", "visible", !1), new eui.SetProperty("icon_1", "visible", !1), new eui.SetProperty("txtCoin_1", "visible", !1)])]
    }
    __extends(t, e);
    var i = function(e) {
        function t() {
            e.call(this),
            this.skinParts = [],
            this.elementsContent = [],
            this._Image1_i(),
            this._Image2_i(),
            this.states = [new eui.State("up", [new eui.AddItems("_Image2", "", 1, "")]), new eui.State("down", [new eui.AddItems("_Image1", "", 0, "")]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.height = 62,
            e.source = "mark_wheel_main_tab_normal_down_png",
            e.width = 186,
            e.x = 4,
            e.y = 0,
            e
        },
        i._Image2_i = function() {
            var e = new eui.Image;
            return this._Image2 = e,
            e.height = 57,
            e.source = "mark_wheel_main_tab_normal_up_png",
            e.width = 154,
            e.x = 0,
            e.y = 3,
            e
        },
        t
    } (eui.Skin),
    n = function(e) {
        function t() {
            e.call(this),
            this.skinParts = [],
            this.elementsContent = [],
            this._Image1_i(),
            this._Image2_i(),
            this.states = [new eui.State("up", [new eui.AddItems("_Image2", "", 1, "")]), new eui.State("down", [new eui.AddItems("_Image1", "", 0, "")]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.height = 62,
            e.source = "mark_wheel_main_tab_limit_down_png",
            e.width = 186,
            e.x = 4,
            e.y = 0,
            e
        },
        i._Image2_i = function() {
            var e = new eui.Image;
            return this._Image2 = e,
            e.height = 57,
            e.source = "mark_wheel_main_tab_limit_up_png",
            e.width = 154,
            e.x = 0,
            e.y = 3,
            e
        },
        t
    } (eui.Skin),
    r = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["bg", "yes"],
            this.elementsContent = [this.bg_i()],
            this.yes_i(),
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.AddItems("yes", "", 1, "")]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i.bg_i = function() {
            var e = new eui.Image;
            return this.bg = e,
            e.height = 23,
            e.source = "mark_wheel_main_skipRbg_png",
            e.width = 22,
            e.x = 0,
            e.y = 0,
            e
        },
        i.yes_i = function() {
            var e = new eui.Image;
            return this.yes = e,
            e.height = 13,
            e.source = "mark_wheel_main_skip_yes_png",
            e.width = 17,
            e.x = 3,
            e.y = 6,
            e
        },
        t
    } (eui.Skin),
    a = t.prototype;
    return a._Image1_i = function() {
        var e = new eui.Image;
        return this._Image1 = e,
        e.height = 640,
        e.source = "mark_wheel_main_bg_jpg",
        e.visible = !0,
        e.percentWidth = 100,
        e.x = 0,
        e.y = 0,
        e
    },
    a.grp_animBg_i = function() {
        var e = new eui.Group;
        return this.grp_animBg = e,
        e.horizontalCenter = 0,
        e.verticalCenter = 0,
        e
    },
    a._Image2_i = function() {
        var e = new eui.Image;
        return this._Image2 = e,
        e.height = 534,
        e.horizontalCenter = 0,
        e.source = "mark_wheel_main_wheel_png",
        e.width = 1136,
        e.y = 106,
        e
    },
    a.grp_animXingzuo_i = function() {
        var e = new eui.Group;
        return this.grp_animXingzuo = e,
        e.horizontalCenter = -35,
        e.x = 578,
        e.y = 329,
        e
    },
    a._Image3_i = function() {
        var e = new eui.Image;
        return this._Image3 = e,
        e.percentHeight = 100,
        e.left = 0,
        e.right = 0,
        e.source = "mark_wheel_main_mask_png",
        e.visible = !0,
        e.y = 0,
        e
    },
    a.groupAll_i = function() {
        var e = new eui.Group;
        return this.groupAll = e,
        e.visible = !0,
        e.elementsContent = [this.btnDrawTen_i(), this.btnDrawOne_i(), this.grpDrawInfo_i(), this.btnInfo_i(), this._Group1_i(), this.tab_0_i(), this.tab_1_i(), this._Group2_i(), this.skip0_i(), this.btnShop_i(), this.grpSkip_i(), this.buyPop_i(), this.itemNum_i()],
        e
    },
    a.btnDrawTen_i = function() {
        var e = new eui.Group;
        return this.btnDrawTen = e,
        e.right = 39,
        e.y = 542,
        e.elementsContent = [this._Image4_i(), this.costIcon_1_i()],
        e
    },
    a._Image4_i = function() {
        var e = new eui.Image;
        return e.height = 86,
        e.source = "mark_wheel_main_btnBg_1_png",
        e.width = 190,
        e.x = 0,
        e.y = 0,
        e
    },
    a.costIcon_1_i = function() {
        var e = new eui.Image;
        return this.costIcon_1 = e,
        e.height = 18,
        e.source = "mark_wheel_main_costIcon_0_png",
        e.width = 18,
        e.x = 37,
        e.y = 52,
        e
    },
    a.btnDrawOne_i = function() {
        var e = new eui.Group;
        return this.btnDrawOne = e,
        e.right = 257,
        e.y = 542,
        e.elementsContent = [this._Image5_i(), this.costIcon_0_i()],
        e
    },
    a._Image5_i = function() {
        var e = new eui.Image;
        return e.height = 86,
        e.source = "mark_wheel_main_btnBg_0_png",
        e.width = 190,
        e.x = 0,
        e.y = 0,
        e
    },
    a.costIcon_0_i = function() {
        var e = new eui.Image;
        return this.costIcon_0 = e,
        e.height = 18,
        e.source = "mark_wheel_main_costIcon_0_png",
        e.width = 18,
        e.x = 37,
        e.y = 52,
        e
    },
    a._Image6_i = function() {
        var e = new eui.Image;
        return this._Image6 = e,
        e.source = "mark_wheel_img1_png",
        e.y = 368,
        e
    },
    a.grpDrawInfo_i = function() {
        var e = new eui.Group;
        return this.grpDrawInfo = e,
        e.cacheAsBitmap = !0,
        e.x = 0,
        e.y = 368,
        e.elementsContent = [this._Image7_i(), this._Label1_i(), this.txt_info_0_i(), this.txt_info_1_i(), this._Image8_i(), this.drawNum_bar_i(), this.drawNum_thumb_i(), this.txt_drawNum_i()],
        e
    },
    a._Image7_i = function() {
        var e = new eui.Image;
        return this._Image7 = e,
        e.height = 151,
        e.source = "mark_wheel_main_drawBg_png",
        e.width = 497,
        e.x = 0,
        e.y = 46,
        e
    },
    a._Label1_i = function() {
        var e = new eui.Label;
        return this._Label1 = e,
        e.fontFamily = "REEJI",
        e.size = 26,
        e.text = "凝聚浩瀚之力 召唤稀有刻印",
        e.textColor = 16514895,
        e.x = 73,
        e.y = 94,
        e
    },
    a.txt_info_0_i = function() {
        var e = new eui.Label;
        return this.txt_info_0 = e,
        e.fontFamily = "REEJI",
        e.size = 22,
        e.text = "常驻召唤：【V8系列】刻印",
        e.textColor = 12834813,
        e.x = 75,
        e.y = 129,
        e
    },
    a.txt_info_1_i = function() {
        var e = new eui.Label;
        return this.txt_info_1 = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "累计召唤达到60次 必出SS级刻印",
        e.textColor = 8631026,
        e.x = 75,
        e.y = 160,
        e
    },
    a._Image8_i = function() {
        var e = new eui.Image;
        return this._Image8 = e,
        e.height = 81,
        e.source = "mark_wheel_main_drawTitle_png",
        e.width = 289,
        e.x = 43,
        e.y = 0,
        e
    },
    a.drawNum_bar_i = function() {
        var e = new eui.Image;
        return this.drawNum_bar = e,
        e.height = 68,
        e.source = "mark_wheel_main_drawNum_bar_png",
        e.width = 68,
        e.x = 396,
        e.y = 121,
        e
    },
    a.drawNum_thumb_i = function() {
        var e = new eui.Image;
        return this.drawNum_thumb = e,
        e.height = 18,
        e.source = "mark_wheel_main_drawNum_thumb_png",
        e.width = 35,
        e.x = 412,
        e.y = 165,
        e
    },
    a.txt_drawNum_i = function() {
        var e = new eui.Label;
        return this.txt_drawNum = e,
        e.fontFamily = "MFShangHei",
        e.horizontalCenter = 181,
        e.size = 18,
        e.text = "XX/60",
        e.textColor = 16777215,
        e.y = 142,
        e
    },
    a.btnInfo_i = function() {
        var e = new eui.Image;
        return this.btnInfo = e,
        e.height = 34,
        e.source = "mark_wheel_main_btnInfo_png",
        e.width = 81,
        e.x = 51,
        e.y = 580,
        e
    },
    a._Group1_i = function() {
        var e = new eui.Group;
        return this._Group1 = e,
        e.cacheAsBitmap = !0,
        e.x = 146,
        e.y = 583,
        e.elementsContent = [this.timebg_i(), this.txt_time_i()],
        e
    },
    a.timebg_i = function() {
        var e = new eui.Image;
        return this.timebg = e,
        e.height = 29,
        e.source = "mark_wheel_main_timebg_png",
        e.width = 282,
        e.x = 0,
        e.y = 0,
        e
    },
    a.txt_time_i = function() {
        var e = new eui.Label;
        return this.txt_time = e,
        e.fontFamily = "REEJI",
        e.horizontalCenter = 0,
        e.size = 20,
        e.text = "将于2月22日23:59:59结束",
        e.textColor = 16772178,
        e.y = 5,
        e
    },
    a.tab_0_i = function() {
        var e = new eui.RadioButton;
        return this.tab_0 = e,
        e.groupName = "mark_wheel_main_tab",
        e.value = "normal",
        e.x = 8,
        e.y = 83,
        e.skinName = i,
        e
    },
    a.tab_1_i = function() {
        var e = new eui.RadioButton;
        return this.tab_1 = e,
        e.groupName = "mark_wheel_main_tab",
        e.value = "limit",
        e.visible = !0,
        e.x = 8,
        e.y = 152,
        e.skinName = n,
        e
    },
    a._Group2_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = 53,
        e.y = 88,
        e.elementsContent = [this._Image9_i(), this._Image10_i(), this._Image11_i(), this._Image12_i(), this._Image13_i(), this._Image14_i(), this.grp_animLanse_i(), this.grp_animHongse_i(), this.grp_animHuangse_i()],
        e
    },
    a._Image9_i = function() {
        var e = new eui.Image;
        return this._Image9 = e,
        e.height = 223,
        e.source = "mark_wheel_main_ss1_png",
        e.width = 221,
        e.x = 595,
        e.y = 0,
        e
    },
    a._Image10_i = function() {
        var e = new eui.Image;
        return this._Image10 = e,
        e.height = 220,
        e.source = "mark_wheel_main_ss3_png",
        e.width = 221,
        e.x = 515,
        e.y = 208,
        e
    },
    a._Image11_i = function() {
        var e = new eui.Image;
        return this._Image11 = e,
        e.height = 225,
        e.source = "mark_wheel_main_ss2_png",
        e.width = 221,
        e.x = 349,
        e.y = 35,
        e
    },
    a._Image12_i = function() {
        var e = new eui.Image;
        return this._Image12 = e,
        e.height = 164,
        e.source = "mark_wheel_main_s2_png",
        e.width = 185,
        e.x = 196,
        e.y = 169,
        e
    },
    a._Image13_i = function() {
        var e = new eui.Image;
        return this._Image13 = e,
        e.height = 168,
        e.source = "mark_wheel_main_s3_png",
        e.visible = !0,
        e.width = 170,
        e.x = 158,
        e.y = 8,
        e
    },
    a._Image14_i = function() {
        var e = new eui.Image;
        return this._Image14 = e,
        e.height = 164,
        e.source = "mark_wheel_main_s1_png",
        e.width = 185,
        e.x = 0,
        e.y = 106,
        e
    },
    a.grp_animLanse_i = function() {
        var e = new eui.Group;
        return this.grp_animLanse = e,
        e.x = 460,
        e.y = 148,
        e
    },
    a.grp_animHongse_i = function() {
        var e = new eui.Group;
        return this.grp_animHongse = e,
        e.x = 626,
        e.y = 318,
        e
    },
    a.grp_animHuangse_i = function() {
        var e = new eui.Group;
        return this.grp_animHuangse = e,
        e.x = 706,
        e.y = 112,
        e
    },
    a.skip0_i = function() {
        var e = new eui.Group;
        return this.skip0 = e,
        e.right = 46,
        e.visible = !1,
        e.y = 512,
        e.elementsContent = [this._Image15_i(), this._Label2_i(), this.cb_skip_i()],
        e
    },
    a._Image15_i = function() {
        var e = new eui.Image;
        return this._Image15 = e,
        e.height = 25,
        e.source = "mark_wheel_main_skipbg_png",
        e.width = 121,
        e.x = 0,
        e.y = 0,
        e
    },
    a._Label2_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "跳过动画",
        e.textColor = 16777215,
        e.x = 8,
        e.y = 3,
        e
    },
    a.cb_skip_i = function() {
        var e = new eui.CheckBox;
        return this.cb_skip = e,
        e.x = 95,
        e.y = 1,
        e.skinName = r,
        e
    },
    a.btnShop_i = function() {
        var e = new eui.Image;
        return this.btnShop = e,
        e.height = 88,
        e.right = 46,
        e.source = "mark_wheel_main_btnShop_png",
        e.width = 74,
        e.y = 440,
        e
    },
    a.grpSkip_i = function() {
        var e = new eui.Group;
        return this.grpSkip = e,
        e.right = 39,
        e.y = 51,
        e.elementsContent = [this.txtSkip_i(), this.imgcheckbox_i(), this.imgSkipCheck_i()],
        e
    },
    a.txtSkip_i = function() {
        var e = new eui.Label;
        return this.txtSkip = e,
        e.fontFamily = "MFShangHei",
        e.size = 20.8333358764648,
        e.text = "跳过动画",
        e.textColor = 9351416,
        e.x = 28,
        e.y = 5,
        e
    },
    a.imgcheckbox_i = function() {
        var e = new eui.Image;
        return this.imgcheckbox = e,
        e.source = "mark_wheel_main_imgcheckbox_png",
        e.x = 0,
        e.y = 4,
        e
    },
    a.imgSkipCheck_i = function() {
        var e = new eui.Image;
        return this.imgSkipCheck = e,
        e.source = "mark_wheel_main_imgskipcheck_png",
        e.visible = !1,
        e.x = 1,
        e.y = 0,
        e
    },
    a.buyPop_i = function() {
        var e = new eui.Group;
        return this.buyPop = e,
        e.cacheAsBitmap = !0,
        e.right = 27,
        e.visible = !0,
        e.y = 44,
        e.elementsContent = [this._Image16_i(), this.btnBuyTen_i(), this.flag_send_i(), this.btnBuyOne_i()],
        e
    },
    a._Image16_i = function() {
        var e = new eui.Image;
        return e.height = 131,
        e.source = "mark_wheel_main_buyBg_png",
        e.width = 161,
        e.x = 0,
        e.y = 0,
        e
    },
    a.btnBuyTen_i = function() {
        var e = new eui.Image;
        return this.btnBuyTen = e,
        e.source = "mark_wheel_main_btnBuyTen_png",
        e.x = 12,
        e.y = 73,
        e
    },
    a.flag_send_i = function() {
        var e = new eui.Group;
        return this.flag_send = e,
        e.x = 13,
        e.y = 67,
        e.elementsContent = [this._Image17_i(), this.sendItem_i()],
        e
    },
    a._Image17_i = function() {
        var e = new eui.Image;
        return e.height = 19,
        e.source = "mark_wheel_main_flag_send_png",
        e.width = 50,
        e.x = 0,
        e.y = 0,
        e
    },
    a.sendItem_i = function() {
        var e = new eui.Image;
        return this.sendItem = e,
        e.height = 13,
        e.source = "mark_wheel_main_costIcon_0_png",
        e.width = 13,
        e.x = 20,
        e.y = 4,
        e
    },
    a.btnBuyOne_i = function() {
        var e = new eui.Image;
        return this.btnBuyOne = e,
        e.source = "mark_wheel_main_btnBuyOne_png",
        e.x = 12,
        e.y = 9,
        e
    },
    a.itemNum_i = function() {
        var e = new eui.Group;
        return this.itemNum = e,
        e.cacheAsBitmap = !0,
        e.right = 39,
        e.y = 11,
        e.elementsContent = [this._Image18_i(), this.txtCoin_0_i(), this.icon1Group_i(), this.btnAdd_i()],
        e
    },
    a._Image18_i = function() {
        var e = new eui.Image;
        return e.height = 21,
        e.source = "mark_wheel_main_itemNumBg_png",
        e.width = 133,
        e.x = 172,
        e.y = 5,
        e
    },
    a.icon_2_i = function() {
        var e = new eui.Image;
        return this.icon_2 = e,
        e.height = 30,
        e.width = 30,
        e.x = 161,
        e.y = 0,
        e
    },
    a.icon_0_i = function() {
        var e = new eui.Image;
        return this.icon_0 = e,
        e.height = 30,
        e.width = 30,
        e.x = 161,
        e.y = 0,
        e
    },
    a.txtCoin_0_i = function() {
        var e = new eui.Label;
        return this.txtCoin_0 = e,
        e.fontFamily = "MFShangHei",
        e.horizontalCenter = 82,
        e.size = 18.0101510119682,
        e.text = "99999",
        e.textColor = 12834813,
        e.y = 6,
        e
    },
    a.icon1Group_i = function() {
        var e = new eui.Group;
        return this.icon1Group = e,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this._Image19_i(), this.icon_1_i(), this.txtCoin_1_i()],
        e
    },
    a._Image19_i = function() {
        var e = new eui.Image;
        return this._Image19 = e,
        e.height = 21,
        e.source = "mark_wheel_main_itemNumBg_png",
        e.width = 133,
        e.x = 7,
        e.y = 5,
        e
    },
    a.icon_1_i = function() {
        var e = new eui.Image;
        return this.icon_1 = e,
        e.height = 30,
        e.width = 30,
        e.x = 0,
        e.y = 0,
        e
    },
    a.txtCoin_1_i = function() {
        var e = new eui.Label;
        return this.txtCoin_1 = e,
        e.fontFamily = "MFShangHei",
        e.size = 18.0101510119682,
        e.text = "99999",
        e.textColor = 12834813,
        e.x = 56,
        e.y = 6,
        e
    },
    a.btnAdd_i = function() {
        var e = new eui.Image;
        return this.btnAdd = e,
        e.height = 21,
        e.source = "mark_wheel_main_btnAdd_png",
        e.width = 21,
        e.x = 288,
        e.y = 5,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/MarkWheelShopItemSkin.exml"] = window.MarkWheelShopItemSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["txt_name", "icon", "txt_limit", "txt_cost", "costIcon", "btnBuy", "flag_got"],
        this.height = 173,
        this.width = 145,
        this.elementsContent = [this._Image1_i(), this.txt_name_i(), this.icon_i(), this.txt_limit_i(), this.btnBuy_i(), this.flag_got_i()],
        this.states = [new eui.State("ss", []), new eui.State("s", [new eui.SetProperty("_Image1", "source", "mark_wheel_shop_item_bg2_png")])]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Image1_i = function() {
        var e = new eui.Image;
        return this._Image1 = e,
        e.height = 173,
        e.source = "mark_wheel_shop_item_bg_png",
        e.width = 145,
        e.x = 0,
        e.y = 0,
        e
    },
    i.txt_name_i = function() {
        var e = new eui.Label;
        return this.txt_name = e,
        e.fontFamily = "MFShangHei",
        e.horizontalCenter = 0,
        e.size = 16,
        e.text = "十年·磨砺",
        e.textColor = 16777215,
        e.y = 9,
        e
    },
    i.icon_i = function() {
        var e = new eui.Image;
        return this.icon = e,
        e.height = 70,
        e.width = 70,
        e.x = 37,
        e.y = 46,
        e
    },
    i.txt_limit_i = function() {
        var e = new eui.Label;
        return this.txt_limit = e,
        e.fontFamily = "MFShangHei",
        e.horizontalCenter = 0,
        e.size = 14,
        e.text = "限兑：1/1",
        e.textColor = 10180889,
        e.y = 118,
        e
    },
    i.btnBuy_i = function() {
        var e = new eui.Group;
        return this.btnBuy = e,
        e.x = 2,
        e.y = 137,
        e.elementsContent = [this._Image2_i(), this._Group1_i()],
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.height = 31,
        e.source = "mark_wheel_shop_item_btnbg_png",
        e.width = 140,
        e.x = 0,
        e.y = 0,
        e
    },
    i._Group1_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = -1.5,
        e.y = 8,
        e.elementsContent = [this.txt_cost_i(), this.costIcon_i()],
        e
    },
    i.txt_cost_i = function() {
        var e = new eui.Label;
        return this.txt_cost = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.textColor = 10171674,
        e.x = 24,
        e.y = 1,
        e
    },
    i.costIcon_i = function() {
        var e = new eui.Image;
        return this.costIcon = e,
        e.height = 20,
        e.width = 20,
        e.x = 0,
        e.y = 0,
        e
    },
    i.flag_got_i = function() {
        var e = new eui.Image;
        return this.flag_got = e,
        e.height = 31,
        e.source = "mark_wheel_shop_item_flag_got_png",
        e.width = 140,
        e.x = 2,
        e.y = 137,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/MarkWheelShopPanelSkin.exml"] = window.MarkWheelShopPanelSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["tab_1", "tab_0", "btnClose", "btnHelp", "grpLeft", "txtCoin", "icon", "grpItemNum", "list_0", "txt_limit", "sector_0", "list_1", "sector_1", "menuGroup"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this._Image1_i(), this.grpLeft_i(), this.grpItemNum_i(), this.sector_0_i(), this.sector_1_i(), this.menuGroup_i()]
    }
    __extends(t, e);
    var i = function(e) {
        function t() {
            e.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Rect1_i(), this._Image1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "mark_wheel_shop_panel_up1_png"), new eui.SetProperty("_Image1", "x", 16), new eui.SetProperty("_Image1", "y", 15)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "mark_wheel_shop_panel_down1_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Rect1_i = function() {
            var e = new eui.Rect;
            return e.alpha = 0,
            e.percentHeight = 100,
            e.percentWidth = 100,
            e
        },
        i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e
        },
        t
    } (eui.Skin),
    n = function(e) {
        function t() {
            e.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Rect1_i(), this._Image1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "mark_wheel_shop_panel_up_png"), new eui.SetProperty("_Image1", "x", 17), new eui.SetProperty("_Image1", "y", 16)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "mark_wheel_shop_panel_down_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Rect1_i = function() {
            var e = new eui.Rect;
            return e.alpha = 0,
            e.percentHeight = 100,
            e.percentWidth = 100,
            e
        },
        i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e
        },
        t
    } (eui.Skin),
    r = t.prototype;
    return r._Image1_i = function() {
        var e = new eui.Image;
        return e.height = 640,
        e.source = "common_ui_bg_3_jpg",
        e.percentWidth = 100,
        e.x = 0,
        e.y = 0,
        e
    },
    r.grpLeft_i = function() {
        var e = new eui.Group;
        return this.grpLeft = e,
        e.visible = !1,
        e.width = 287,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this._Image2_i(), this._Image3_i(), this.tab_1_i(), this.tab_0_i(), this.btnClose_i(), this.btnHelp_i()],
        e
    },
    r._Image2_i = function() {
        var e = new eui.Image;
        return e.height = 592,
        e.source = "adapt_leftbg_png",
        e.x = -76,
        e.y = 48,
        e
    },
    r._Image3_i = function() {
        var e = new eui.Image;
        return e.height = 76,
        e.right = 0,
        e.source = "adapt_up_bg_png",
        e.y = 0,
        e
    },
    r.tab_1_i = function() {
        var e = new eui.RadioButton;
        return this.tab_1 = e,
        e.groupName = "mark_wheel_shop_tab",
        e.height = 60,
        e.value = "2",
        e.width = 155,
        e.x = 0,
        e.y = 121,
        e.skinName = i,
        e
    },
    r.tab_0_i = function() {
        var e = new eui.RadioButton;
        return this.tab_0 = e,
        e.groupName = "mark_wheel_shop_tab",
        e.height = 60,
        e.value = "1",
        e.width = 155,
        e.x = 0,
        e.y = 64,
        e.skinName = n,
        e
    },
    r.btnClose_i = function() {
        var e = new eui.Group;
        return this.btnClose = e,
        e.height = 50,
        e.width = 200,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this._Image4_i(), this._Image5_i()],
        e
    },
    r._Image4_i = function() {
        var e = new eui.Image;
        return e.height = 31,
        e.source = "mark_wheel_shop_panel_title_png",
        e.width = 104,
        e.x = 50,
        e.y = 10,
        e
    },
    r._Image5_i = function() {
        var e = new eui.Image;
        return e.height = 38,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "mark_wheel_main_btnClose_png",
        e.width = 28,
        e.x = 14,
        e.y = 5,
        e
    },
    r.btnHelp_i = function() {
        var e = new eui.Image;
        return this.btnHelp = e,
        e.height = 28,
        e.source = "common_help_icon_1_png",
        e.visible = !1,
        e.width = 24,
        e.x = 259,
        e.y = 13,
        e
    },
    r.grpItemNum_i = function() {
        var e = new eui.Group;
        return this.grpItemNum = e,
        e.cacheAsBitmap = !0,
        e.right = 43,
        e.y = 14,
        e.elementsContent = [this._Image6_i(), this.txtCoin_i(), this.icon_i()],
        e
    },
    r._Image6_i = function() {
        var e = new eui.Image;
        return e.height = 21,
        e.source = "mark_wheel_main_itemNumBg_png",
        e.width = 133,
        e.x = 6,
        e.y = 2,
        e
    },
    r.txtCoin_i = function() {
        var e = new eui.Label;
        return this.txtCoin = e,
        e.fontFamily = "MFShangHei",
        e.horizontalCenter = 1,
        e.size = 18,
        e.text = "99999",
        e.textColor = 12834813,
        e.y = 3,
        e
    },
    r.icon_i = function() {
        var e = new eui.Image;
        return this.icon = e,
        e.height = 25,
        e.source = "",
        e.width = 30,
        e.x = 0,
        e.y = -3,
        e
    },
    r.sector_0_i = function() {
        var e = new eui.Group;
        return this.sector_0 = e,
        e.visible = !0,
        e.width = 868,
        e.x = 223,
        e.y = 85,
        e.elementsContent = [this._Image7_i(), this._Scroller1_i(), this.txt_limit_i()],
        e
    },
    r._Image7_i = function() {
        var e = new eui.Image;
        return e.height = 504,
        e.left = 0,
        e.right = 0,
        e.source = "mark_wheel_detail_panel_sector_1_bg_png",
        e.visible = !0,
        e.y = 0,
        e
    },
    r._Scroller1_i = function() {
        var e = new eui.Scroller;
        return e.height = 446,
        e.left = 27,
        e.right = 27,
        e.y = 35,
        e.viewport = this.list_0_i(),
        e
    },
    r.list_0_i = function() {
        var e = new eui.List;
        return this.list_0 = e,
        e.height = 446,
        e.width = 812,
        e.x = 250,
        e.y = 120,
        e.layout = this._TileLayout1_i(),
        e
    },
    r._TileLayout1_i = function() {
        var e = new eui.TileLayout;
        return e.columnAlign = "left",
        e.horizontalGap = 20,
        e.orientation = "rows",
        e.verticalGap = 27,
        e
    },
    r.txt_limit_i = function() {
        var e = new eui.Label;
        return this.txt_limit = e,
        e.fontFamily = "MFShangHei",
        e.right = 23,
        e.size = 16,
        e.text = "每个刻印每月限兑1次",
        e.textColor = 13757439,
        e.y = 9,
        e
    },
    r.sector_1_i = function() {
        var e = new eui.Group;
        return this.sector_1 = e,
        e.left = 223,
        e.right = 46,
        e.visible = !1,
        e.y = 75,
        e.elementsContent = [this._Image8_i(), this._Scroller2_i()],
        e
    },
    r._Image8_i = function() {
        var e = new eui.Image;
        return e.height = 514,
        e.horizontalCenter = 0,
        e.source = "mark_wheel_shop_contentbg_png",
        e.visible = !0,
        e.width = 867,
        e.y = 0,
        e
    },
    r._Scroller2_i = function() {
        var e = new eui.Scroller;
        return e.height = 427,
        e.horizontalCenter = -1.5,
        e.width = 844,
        e.y = 61,
        e.viewport = this.list_1_i(),
        e
    },
    r.list_1_i = function() {
        var e = new eui.List;
        return this.list_1 = e,
        e.height = 427,
        e.width = 844,
        e.x = 10,
        e.y = 61,
        e.layout = this._VerticalLayout1_i(),
        e
    },
    r._VerticalLayout1_i = function() {
        var e = new eui.VerticalLayout;
        return e.gap = 8,
        e
    },
    r.menuGroup_i = function() {
        var e = new eui.Group;
        return this.menuGroup = e,
        e.x = 0,
        e.y = 48,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/MarkWheelShopRecordItemSkin.exml"] = window.MarkWheelShopRecordItemSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["txt_name", "txt_cost", "txt_time", "costIcon"],
        this.height = 48,
        this.width = 844,
        this.elementsContent = [this._Image1_i(), this.txt_name_i(), this.txt_cost_i(), this.txt_time_i(), this.costIcon_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Image1_i = function() {
        var e = new eui.Image;
        return e.height = 48,
        e.source = "mark_wheel_shop_record_item_bg_png",
        e.width = 844,
        e.x = 0,
        e.y = 0,
        e
    },
    i.txt_name_i = function() {
        var e = new eui.Label;
        return this.txt_name = e,
        e.fontFamily = "MFShangHei",
        e.horizontalCenter = -316,
        e.size = 16,
        e.text = "十年·磨砺",
        e.textColor = 12834813,
        e.visible = !0,
        e.y = 16,
        e
    },
    i.txt_cost_i = function() {
        var e = new eui.Label;
        return this.txt_cost = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "x500",
        e.textColor = 12834813,
        e.visible = !0,
        e.x = 389,
        e.y = 16,
        e
    },
    i.txt_time_i = function() {
        var e = new eui.Label;
        return this.txt_time = e,
        e.fontFamily = "MFShangHei",
        e.horizontalCenter = 253,
        e.size = 16,
        e.text = "2022-03-14  09:31",
        e.textColor = 12834813,
        e.visible = !0,
        e.y = 16,
        e
    },
    i.costIcon_i = function() {
        var e = new eui.Image;
        return this.costIcon = e,
        e.height = 25,
        e.width = 25,
        e.x = 359,
        e.y = 12,
        e
    },
    t
} (eui.Skin);