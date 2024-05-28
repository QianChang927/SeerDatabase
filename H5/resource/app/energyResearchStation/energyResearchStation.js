var __reflect = this && this.__reflect ||
function(e, t, n) {
    e.__class__ = t,
    n ? n.push(t) : n = [t],
    e.__types__ = e.__types__ ? n.concat(e.__types__) : n
},
__extends = this && this.__extends ||
function(e, t) {
    function n() {
        this.constructor = e
    }
    for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
    n.prototype = t.prototype,
    e.prototype = new n
},
energyResearchStation; !
function(e) {
    var t = function(t) {
        function n() {
            var e = t.call(this) || this;
            return e.skinName = EnergyResearchStationSkin,
            e
        }
        return __extends(n, t),
        n.prototype.childrenCreated = function() {
            var n = this;
            t.prototype.childrenCreated.call(this),
            this.adaptBgByScale(this.bg),
            this.ani = SpineUtil.createAnimate("nengyuanzhan"),
            this.ani1 = SpineUtil.copy(this.ani),
            this.aniGroup.addChild(this.ani),
            this.ani.play("ani_zhuangzhi", 0),
            this.aniGroup1.addChild(this.ani1),
            this.ani1.play("ani_nengliang", 0),
            ImageButtonUtil.add(this.tips,
            function() {
                tipsPop.TipsPop.openHelpPopById(116),
                StatLogger.log("能源研究中心", "20221223H5新道具回收系统第四期（搬迁）", "打开Tips面板")
            },
            this),
            ImageButtonUtil.add(this.recover,
            function() {
                var t = PopViewManager.createDefaultStyleObject();
                t.maskShapeStyle.maskAlpha = .8,
                PopViewManager.getInstance().openView(new e.EnergyResearchStationRecoverPop, t)
            },
            this),
            ImageButtonUtil.add(this.exchange,
            function() {
                var t = PopViewManager.createDefaultStyleObject();
                t.maskShapeStyle.maskAlpha = .8,
                PopViewManager.getInstance().openView(new e.EnergyResearchStationExchangePop, t)
            },
            this),
            ImageButtonUtil.add(this.img_get,
            function() {
                var t = PopViewManager.createDefaultStyleObject();
                t.maskShapeStyle.maskAlpha = .8,
                PopViewManager.getInstance().openView(new e.EnergyResearchStationEnergyPop, t)
            },
            this),
            EventManager.addEventListener(e.EnergyResearchStationManager.EnergyResearchStationManager_UPDATE_ITEM_NUM,
            function() {
                n.num.text = core.gameUtil.ConvertItemNumView(e.EnergyResearchStationManager.itemNum, 0)
            },
            this),
            e.EnergyResearchStationManager.getItemNum(),
            e.EnergyResearchStationManager.init(),
            StatLogger.log("能源研究中心", "20221223H5新道具回收系统第四期（搬迁）", "进入活动主界面")
        },
        n.prototype.destroy = function() {
            DisplayUtil.removeForParent(this.ani),
            this.ani = null,
            DisplayUtil.removeForParent(this.ani1),
            this.ani1 = null,
            t.prototype.destroy.call(this)
        },
        n
    } (BaseModule);
    e.EnergyResearchStation = t,
    __reflect(t.prototype, "energyResearchStation.EnergyResearchStation")
} (energyResearchStation || (energyResearchStation = {}));
var __reflect = this && this.__reflect ||
function(e, t, n) {
    e.__class__ = t,
    n ? n.push(t) : n = [t],
    e.__types__ = e.__types__ ? n.concat(e.__types__) : n
},
__extends = this && this.__extends ||
function(e, t) {
    function n() {
        this.constructor = e
    }
    for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
    n.prototype = t.prototype,
    e.prototype = new n
},
__awaiter = this && this.__awaiter ||
function(e, t, n, i) {
    return new(n || (n = Promise))(function(r, a) {
        function o(e) {
            try {
                u(i.next(e))
            } catch(t) {
                a(t)
            }
        }
        function s(e) {
            try {
                u(i["throw"](e))
            } catch(t) {
                a(t)
            }
        }
        function u(e) {
            e.done ? r(e.value) : new n(function(t) {
                t(e.value)
            }).then(o, s)
        }
        u((i = i.apply(e, t || [])).next())
    })
},
__generator = this && this.__generator ||
function(e, t) {
    function n(e) {
        return function(t) {
            return i([e, t])
        }
    }
    function i(n) {
        if (r) throw new TypeError("Generator is already executing.");
        for (; u;) try {
            if (r = 1, a && (o = a[2 & n[0] ? "return": n[0] ? "throw": "next"]) && !(o = o.call(a, n[1])).done) return o;
            switch (a = 0, o && (n = [0, o.value]), n[0]) {
            case 0:
            case 1:
                o = n;
                break;
            case 4:
                return u.label++,
                {
                    value: n[1],
                    done: !1
                };
            case 5:
                u.label++,
                a = n[1],
                n = [0];
                continue;
            case 7:
                n = u.ops.pop(),
                u.trys.pop();
                continue;
            default:
                if (o = u.trys, !(o = o.length > 0 && o[o.length - 1]) && (6 === n[0] || 2 === n[0])) {
                    u = 0;
                    continue
                }
                if (3 === n[0] && (!o || n[1] > o[0] && n[1] < o[3])) {
                    u.label = n[1];
                    break
                }
                if (6 === n[0] && u.label < o[1]) {
                    u.label = o[1],
                    o = n;
                    break
                }
                if (o && u.label < o[2]) {
                    u.label = o[2],
                    u.ops.push(n);
                    break
                }
                o[2] && u.ops.pop(),
                u.trys.pop();
                continue
            }
            n = t.call(e, u)
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
    var r, a, o, s, u = {
        label: 0,
        sent: function() {
            if (1 & o[0]) throw o[1];
            return o[1]
        },
        trys: [],
        ops: []
    };
    return s = {
        next: n(0),
        "throw": n(1),
        "return": n(2)
    },
    "function" == typeof Symbol && (s[Symbol.iterator] = function() {
        return this
    }),
    s
},
energyResearchStation; !
function(e) {
    var t = function(t) {
        function i() {
            var e = t.call(this) || this;
            return e.all = 0,
            e.skinName = EnergyResearchStationEnergyPopSkin,
            e
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            var i = this;
            t.prototype.childrenCreated.call(this),
            this._list.itemRenderer = n,
            this.energyMain.visible = !0,
            this.exchangeEnergy.visible = !1,
            this.ani = SpineUtil.createAnimate("nengyuanzhan"),
            this.aniGroup.addChild(this.ani),
            this.ani.visible = !1,
            EventManager.addEventListener(e.EnergyResearchStationManager.EnergyResearchStationManager_UPDATE_ITEM_NUM,
            function() {
                i.num.text = core.gameUtil.ConvertItemNumView(e.EnergyResearchStationManager.itemNum, 0)
            },
            this),
            ImageButtonUtil.add(this.close, this.hide, this),
            ImageButtonUtil.add(this.go,
            function() {
                return i.all < 1e3 ? void BubblerManager.getInstance().showText("你未拥有足够的回收道具完成提交！") : (i.energyMain.visible = !1, void(i.exchangeEnergy.visible = !0))
            },
            this),
            ImageButtonUtil.add(this.no1,
            function() {
                i.energyMain.visible = !0,
                i.exchangeEnergy.visible = !1
            },
            this),
            ImageButtonUtil.add(this.buy1,
            function() {
                Alert.show("确认消耗100000赛尔豆兑换？",
                function() {
                    e.EnergyResearchStationManager.send(201, 0,
                    function() {
                        BubblerManager.getInstance().showText("购买成功！获得1点纯源能量！"),
                        i.updateView()
                    },
                    i)
                })
            },
            this),
            ImageButtonUtil.add(this.buy10,
            function() {
                Alert.show("确认消耗1000000赛尔豆兑换？",
                function() {
                    e.EnergyResearchStationManager.send(202, 0,
                    function() {
                        BubblerManager.getInstance().showText("购买成功！获得10点纯源能量！"),
                        i.updateView()
                    },
                    i)
                })
            },
            this),
            ImageButtonUtil.add(this.go1,
            function() {
                var e = i.checkOutPut();
                if (i.all < 1e3) return void BubblerManager.getInstance().showText("你未拥有足够的回收道具完成提交！");
                for (var t = [], n = 0; n < e.length; n++) t.push(e[n].itemid, e[n].count);
                i.go.touchEnabled = !1,
                i.buy1.touchEnabled = !1,
                i.buy10.touchEnabled = !1,
                SocketConnection.sendByQueue(41901, [0, e.length, t],
                function() {
                    i.energyMain.visible = !0,
                    i.exchangeEnergy.visible = !1,
                    i.ani.visible = !0;
                    var e = i.ani.play("ani_destroy", 1);
                    e.on(3,
                    function() {
                        BubblerManager.getInstance().showText("兑换成功！获得1点纯源能量！"),
                        i.go.touchEnabled = !0,
                        i.buy1.touchEnabled = !0,
                        i.buy10.touchEnabled = !0,
                        i.updateView()
                    })
                })
            },
            this),
            StatLogger.log("能源研究中心", "20221223H5新道具回收系统第四期（搬迁）", "打开【能量获取】面板"),
            this.updateView()
        },
        i.prototype.updateView = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var t, n, i, r = this;
                return __generator(this,
                function(a) {
                    switch (a.label) {
                    case 0:
                        return [4, e.EnergyResearchStationManager.getItemNum()];
                    case 1:
                        return a.sent(),
                        [4, e.EnergyResearchStationManager.getExchangeNum()];
                    case 2:
                        return t = a.sent(),
                        this.monthNum.text = "本期限兑：" + Math.min(50, t) + "/50",
                        KTool.getMultiValue([e.EnergyResearchStationManager.dailyExchangeNum],
                        function(e) {
                            r.dailyNum.text = "今日限兑：" + Math.min(20, e[0]) + "/20",
                            DisplayUtil.setEnabled(r.go, e[0] < 20, !0)
                        }),
                        n = ItemManager.getNumByID(1),
                        DisplayUtil.setEnabled(this.buy1, n >= 1e5 && Math.max(50 - t, 0) >= 1, !0),
                        DisplayUtil.setEnabled(this.buy10, n >= 1e6 && Math.max(50 - t, 0) >= 10, !0),
                        [4, e.EnergyResearchStationManager.getLockArr()];
                    case 3:
                        return a.sent(),
                        i = this.checkOutPut(),
                        this._list.dataProvider = new eui.ArrayCollection(i),
                        [2]
                    }
                })
            })
        },
        i.prototype.checkOutPut = function() {
            for (var t = e.EnergyResearchStationManager.unLockArr.sort(function(e, t) {
                return t - e
            }), n = [], i = 0, r = 0; r < t.length; r++) {
                var a = t[r],
                o = e.EnergyResearchStationManager.getXmlById(a),
                s = o.OutputNum,
                u = ItemManager.getNumByID(o.ItemID);
                if (0 != u) {
                    if (! (1e3 > i)) break;
                    var h = Math.ceil((1e3 - i) / s);
                    h >= u ? (n.push({
                        itemid: o.ItemID,
                        count: u
                    }), i += u * s) : (n.push({
                        itemid: o.ItemID,
                        count: h
                    }), i += h * s)
                }
            }
            return this.all = i,
            n
        },
        i.prototype.destroy = function() {
            DisplayUtil.removeForParent(this.ani),
            this.ani = null,
            ImageButtonUtil.removeAll(this),
            EventManager.removeAll(this),
            t.prototype.destroy.call(this)
        },
        i
    } (PopView);
    e.EnergyResearchStationEnergyPop = t,
    __reflect(t.prototype, "energyResearchStation.EnergyResearchStationEnergyPop");
    var n = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.skinName = EnergyResearchStationEnergyItemSkin,
            ImageButtonUtil.add(t.icon,
            function() {
                tipsPop.TipsPop.openItemPop({
                    id: ~~t.info.itemid
                })
            },
            t),
            t
        }
        return __extends(t, e),
        t.prototype.dataChanged = function() {
            e.prototype.dataChanged.call(this),
            this.info = this.data,
            this.updateView()
        },
        t.prototype.updateView = function() {
            this.icon.source = ClientConfig.getItemIcon(this.info.itemid);
            var e = Math.min(9999, ItemManager.getNumByID(this.info.itemid));
            this.num.textFlow = [{
                text: "" + this.info.count
            },
            {
                text: "/" + e,
                style: {
                    textColor: 16777215
                }
            }],
            this.cacheAsBitmap = !0
        },
        t
    } (BaseItemRenderer);
    e.EnergyResearchStationEnergyItem = n,
    __reflect(n.prototype, "energyResearchStation.EnergyResearchStationEnergyItem")
} (energyResearchStation || (energyResearchStation = {}));
var __reflect = this && this.__reflect ||
function(e, t, n) {
    e.__class__ = t,
    n ? n.push(t) : n = [t],
    e.__types__ = e.__types__ ? n.concat(e.__types__) : n
},
__extends = this && this.__extends ||
function(e, t) {
    function n() {
        this.constructor = e
    }
    for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
    n.prototype = t.prototype,
    e.prototype = new n
},
energyResearchStation; !
function(e) {
    var t = function(t) {
        function i() {
            var e = t.call(this) || this;
            return e.skinName = EnergyResearchStationExchangePopSkin,
            e
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            var i = this;
            t.prototype.childrenCreated.call(this),
            this._list.itemRenderer = n,
            EventManager.addEventListener(e.EnergyResearchStationManager.EnergyResearchStationManager_UPDATE_ITEM_NUM,
            function() {
                i.num.text = core.gameUtil.ConvertItemNumView(e.EnergyResearchStationManager.itemNum, 0)
            },
            this),
            EventManager.addEventListener(e.EnergyResearchStationManager.EnergyResearchStationManager_UPDATE_ITEM_Exchange, this.updateView, this),
            ImageButtonUtil.add(this.close, this.hide, this);
            var r = e.EnergyResearchStationManager.xmlVersion.sort(function(e, t) {
                return e.ID - t.ID
            });
            this._list.dataProvider = new eui.ArrayCollection(r),
            this.updateView(),
            this.endText.visible = !1,
            StatLogger.log("能源研究中心", "20221223H5新道具回收系统第四期（搬迁）", "打开【本期兑换道具】面板")
        },
        i.prototype.updateView = function() {
            e.EnergyResearchStationManager.getItemNum()
        },
        i.prototype.destroy = function() {
            ImageButtonUtil.removeAll(this),
            EventManager.removeAll(this),
            t.prototype.destroy.call(this)
        },
        i
    } (PopView);
    e.EnergyResearchStationExchangePop = t,
    __reflect(t.prototype, "energyResearchStation.EnergyResearchStationExchangePop");
    var n = function(t) {
        function n() {
            var n = t.call(this) || this;
            return n.skinName = EnergyResearchStationExchangeItemSkin,
            ImageButtonUtil.add(n.Buy,
            function() {
                Alert.show("确认要兑换此道具吗？",
                function() {
                    e.EnergyResearchStationManager.send(n.id, 0,
                    function() {
                        EventManager.dispatchEventWith(e.EnergyResearchStationManager.EnergyResearchStationManager_UPDATE_ITEM_Exchange)
                    },
                    n)
                })
            },
            n),
            ImageButtonUtil.add(n.icon,
            function() {
                var t = e.EnergyResearchStationManager.getVersionById(n.id);
                tipsPop.TipsPop.openItemPop({
                    id: t.RewardID
                })
            },
            n),
            EventManager.addEventListener(e.EnergyResearchStationManager.EnergyResearchStationManager_UPDATE_ITEM_NUM, n.updateView, n),
            n
        }
        return __extends(n, t),
        n.prototype.dataChanged = function() {
            t.prototype.dataChanged.call(this),
            this.id = ~~this.data.ID,
            this.updateView()
        },
        n.prototype.updateView = function() {
            var t = this,
            n = e.EnergyResearchStationManager.getVersionById(this.id);
            this.icon.source = ClientConfig.getItemIcon(n.RewardID);
            var i = ItemXMLInfo.getName(n.RewardID);
            this.itemName.text = i.length > 7 ? i.slice(0, 7) + "...": i,
            this.num.text = "" + n.RewardNum,
            KTool.getMultiValue([n.UserInfo],
            function(i) {
                var r = Math.max(n.ExchangeNum - i[0], 0);
                t.xd.text = "限兑：" + Math.min(i[0], n.ExchangeNum) + "/" + n.ExchangeNum,
                DisplayUtil.setEnabled(t.Buy, r > 0 && e.EnergyResearchStationManager.itemNum >= n.SubNum),
                t.buyNum.text = n.SubNum + " 兑换"
            }),
            this.cacheAsBitmap = !0
        },
        n
    } (BaseItemRenderer);
    e.EnergyResearchStationExchangeItem = n,
    __reflect(n.prototype, "energyResearchStation.EnergyResearchStationExchangeItem")
} (energyResearchStation || (energyResearchStation = {}));
var __reflect = this && this.__reflect ||
function(e, t, n) {
    e.__class__ = t,
    n ? n.push(t) : n = [t],
    e.__types__ = e.__types__ ? n.concat(e.__types__) : n
},
__awaiter = this && this.__awaiter ||
function(e, t, n, i) {
    return new(n || (n = Promise))(function(r, a) {
        function o(e) {
            try {
                u(i.next(e))
            } catch(t) {
                a(t)
            }
        }
        function s(e) {
            try {
                u(i["throw"](e))
            } catch(t) {
                a(t)
            }
        }
        function u(e) {
            e.done ? r(e.value) : new n(function(t) {
                t(e.value)
            }).then(o, s)
        }
        u((i = i.apply(e, t || [])).next())
    })
},
__generator = this && this.__generator ||
function(e, t) {
    function n(e) {
        return function(t) {
            return i([e, t])
        }
    }
    function i(n) {
        if (r) throw new TypeError("Generator is already executing.");
        for (; u;) try {
            if (r = 1, a && (o = a[2 & n[0] ? "return": n[0] ? "throw": "next"]) && !(o = o.call(a, n[1])).done) return o;
            switch (a = 0, o && (n = [0, o.value]), n[0]) {
            case 0:
            case 1:
                o = n;
                break;
            case 4:
                return u.label++,
                {
                    value: n[1],
                    done: !1
                };
            case 5:
                u.label++,
                a = n[1],
                n = [0];
                continue;
            case 7:
                n = u.ops.pop(),
                u.trys.pop();
                continue;
            default:
                if (o = u.trys, !(o = o.length > 0 && o[o.length - 1]) && (6 === n[0] || 2 === n[0])) {
                    u = 0;
                    continue
                }
                if (3 === n[0] && (!o || n[1] > o[0] && n[1] < o[3])) {
                    u.label = n[1];
                    break
                }
                if (6 === n[0] && u.label < o[1]) {
                    u.label = o[1],
                    o = n;
                    break
                }
                if (o && u.label < o[2]) {
                    u.label = o[2],
                    u.ops.push(n);
                    break
                }
                o[2] && u.ops.pop(),
                u.trys.pop();
                continue
            }
            n = t.call(e, u)
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
    var r, a, o, s, u = {
        label: 0,
        sent: function() {
            if (1 & o[0]) throw o[1];
            return o[1]
        },
        trys: [],
        ops: []
    };
    return s = {
        next: n(0),
        "throw": n(1),
        "return": n(2)
    },
    "function" == typeof Symbol && (s[Symbol.iterator] = function() {
        return this
    }),
    s
},
energyResearchStation; !
function(e) {
    var t = function() {
        function e() {}
        return e.init = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var t, n;
                return __generator(this,
                function(i) {
                    switch (i.label) {
                    case 0:
                        return t = "Attirerecycle",
                        n = "Attireconversion",
                        [4, config.xml.load(t)];
                    case 1:
                        return i.sent(),
                        [4, config.xml.load(n)];
                    case 2:
                        return i.sent(),
                        e.xmlData = config.xml.getRes(t).Attirerecycles.Attirerecycle,
                        e.xmlVersion = config.xml.getRes(n).Attireconversions.Attireconversion,
                        e.xmlHash.clear(),
                        e.versionHash.clear(),
                        e.xmlData.filter(function(t) {
                            return e.xmlHash.add(t.ID, t),
                            !0
                        }),
                        e.xmlVersion = e.xmlVersion.filter(function(t) {
                            return 1 != t.Platform ? (e.versionHash.add(t.ID, t), !0) : !1
                        }),
                        [2]
                    }
                })
            })
        },
        e.getXmlById = function(t) {
            return e.xmlHash.getValue(t)
        },
        e.getVersionById = function(t) {
            return e.versionHash.getValue(t)
        },
        e.getItemNum = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var t;
                return __generator(this,
                function(n) {
                    switch (n.label) {
                    case 0:
                        return [4, KTool.getMultiValueAsync([e.itemForever])];
                    case 1:
                        return t = n.sent(),
                        this.itemNum = t[0],
                        EventManager.dispatchEventWith(e.EnergyResearchStationManager_UPDATE_ITEM_NUM),
                        [2]
                    }
                })
            })
        },
        e.getExchangeNum = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var t, n;
                return __generator(this,
                function(i) {
                    switch (i.label) {
                    case 0:
                        return [4, KTool.getMultiValueAsync([e.exchangeNum])];
                    case 1:
                        return t = i.sent(),
                        n = 255 & t[0],
                        [2, n]
                    }
                })
            })
        },
        e.getLockArr = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var t, n, i, r, a, o, s;
                return __generator(this,
                function(u) {
                    switch (u.label) {
                    case 0:
                        t = e.xmlData,
                        n = Math.ceil(t.length / 32),
                        e.lockArr.length = 0,
                        e.unLockArr.length = 0,
                        a = 1,
                        u.label = 1;
                    case 1:
                        return n >= a ? [4, KTool.getMultiValueAsync([124140 + a])] : [3, 4];
                    case 2:
                        for (o = u.sent(), i = o[0], s = 1; 32 >= s; s++) r = 32 * (a - 1) + s,
                        1 == KTool.getBit(i, s) ? e.getXmlById(r) && e.lockArr.push(r) : e.getXmlById(r) && e.unLockArr.push(r);
                        u.label = 3;
                    case 3:
                        return a++,
                        [3, 1];
                    case 4:
                        return [2]
                    }
                })
            })
        },
        e.send = function(e, t, n, i) {
            var r = this;
            SocketConnection.sendByQueue(41901, [e, t],
            function() {
                n && n.call(i || r)
            })
        },
        e.itemForever = 124086,
        e.exchangeNum = 124087,
        e.dailyExchangeNum = 203113,
        e.itemNum = 0,
        e.xmlData = [],
        e.xmlVersion = [],
        e.xmlHash = new HashMap,
        e.versionHash = new HashMap,
        e.lockArr = [],
        e.unLockArr = [],
        e.EnergyResearchStationManager_UPDATE_ITEM_NUM = "EnergyResearchStationManager_UPDATE_ITEM_NUM",
        e.EnergyResearchStationManager_UPDATE_ITEM_Exchange = "EnergyResearchStationManager_UPDATE_ITEM_Exchange",
        e.EnergyResearchStationManager_SELECT_ITEM_RECOVER = "EnergyResearchStationManager_SELECT_ITEM_RECOVER",
        e.EnergyResearchStationManager_UPDATE_ITEM_RECOVER = "EnergyResearchStationManager_UPDATE_ITEM_RECOVER",
        e
    } ();
    e.EnergyResearchStationManager = t,
    __reflect(t.prototype, "energyResearchStation.EnergyResearchStationManager")
} (energyResearchStation || (energyResearchStation = {}));
var __reflect = this && this.__reflect ||
function(e, t, n) {
    e.__class__ = t,
    n ? n.push(t) : n = [t],
    e.__types__ = e.__types__ ? n.concat(e.__types__) : n
},
__extends = this && this.__extends ||
function(e, t) {
    function n() {
        this.constructor = e
    }
    for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
    n.prototype = t.prototype,
    e.prototype = new n
},
__awaiter = this && this.__awaiter ||
function(e, t, n, i) {
    return new(n || (n = Promise))(function(r, a) {
        function o(e) {
            try {
                u(i.next(e))
            } catch(t) {
                a(t)
            }
        }
        function s(e) {
            try {
                u(i["throw"](e))
            } catch(t) {
                a(t)
            }
        }
        function u(e) {
            e.done ? r(e.value) : new n(function(t) {
                t(e.value)
            }).then(o, s)
        }
        u((i = i.apply(e, t || [])).next())
    })
},
__generator = this && this.__generator ||
function(e, t) {
    function n(e) {
        return function(t) {
            return i([e, t])
        }
    }
    function i(n) {
        if (r) throw new TypeError("Generator is already executing.");
        for (; u;) try {
            if (r = 1, a && (o = a[2 & n[0] ? "return": n[0] ? "throw": "next"]) && !(o = o.call(a, n[1])).done) return o;
            switch (a = 0, o && (n = [0, o.value]), n[0]) {
            case 0:
            case 1:
                o = n;
                break;
            case 4:
                return u.label++,
                {
                    value: n[1],
                    done: !1
                };
            case 5:
                u.label++,
                a = n[1],
                n = [0];
                continue;
            case 7:
                n = u.ops.pop(),
                u.trys.pop();
                continue;
            default:
                if (o = u.trys, !(o = o.length > 0 && o[o.length - 1]) && (6 === n[0] || 2 === n[0])) {
                    u = 0;
                    continue
                }
                if (3 === n[0] && (!o || n[1] > o[0] && n[1] < o[3])) {
                    u.label = n[1];
                    break
                }
                if (6 === n[0] && u.label < o[1]) {
                    u.label = o[1],
                    o = n;
                    break
                }
                if (o && u.label < o[2]) {
                    u.label = o[2],
                    u.ops.push(n);
                    break
                }
                o[2] && u.ops.pop(),
                u.trys.pop();
                continue
            }
            n = t.call(e, u)
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
    var r, a, o, s, u = {
        label: 0,
        sent: function() {
            if (1 & o[0]) throw o[1];
            return o[1]
        },
        trys: [],
        ops: []
    };
    return s = {
        next: n(0),
        "throw": n(1),
        "return": n(2)
    },
    "function" == typeof Symbol && (s[Symbol.iterator] = function() {
        return this
    }),
    s
},
energyResearchStation; !
function(e) {
    var t = function(t) {
        function i() {
            var e = t.call(this) || this;
            return e.skinName = EnergyResearchStationRecoverPopSkin,
            e
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            var i = this;
            t.prototype.childrenCreated.call(this),
            this.rbGroup = this.rb_hs.group,
            this.rbGroup.selectedValue = this.rb_hs.value,
            this._list.itemRenderer = n,
            this.rbGroup.addEventListener(egret.Event.CHANGE, this.updateTab, this),
            EventManager.addEventListener(e.EnergyResearchStationManager.EnergyResearchStationManager_SELECT_ITEM_RECOVER, this.updateView, this),
            ImageButtonUtil.add(this.close, this.hide, this),
            ImageButtonUtil.add(this.lock,
            function() {
                var t = ~~i._list.selectedItem,
                n = e.EnergyResearchStationManager.lockArr.indexOf(t) > -1,
                r = (n ? 2e3: 1e3) + t;
                e.EnergyResearchStationManager.send(r, 0,
                function() {
                    return __awaiter(i, void 0, void 0,
                    function() {
                        var t;
                        return __generator(this,
                        function(n) {
                            switch (n.label) {
                            case 0:
                                return t = ~~this.rbGroup.selectedValue || 1,
                                2 != t ? [3, 1] : (this.updateTab(), [3, 3]);
                            case 1:
                                return [4, e.EnergyResearchStationManager.getLockArr()];
                            case 2:
                                n.sent(),
                                EventManager.dispatchEventWith(e.EnergyResearchStationManager.EnergyResearchStationManager_UPDATE_ITEM_RECOVER),
                                this.updateView(),
                                n.label = 3;
                            case 3:
                                return [2]
                            }
                        })
                    })
                },
                i)
            },
            this),
            this.updateTab()
        },
        i.prototype.updateTab = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var t, n, i;
                return __generator(this,
                function(r) {
                    switch (r.label) {
                    case 0:
                        return t = ~~this.rbGroup.selectedValue || 1,
                        this.bg.source = 1 == t ? "energy_research_station_pop_recoverbg_png": "energy_research_station_pop_lockbg_png",
                        this.itemGroup.visible = this.lock.visible = !1,
                        this.empty_tip.visible = !1,
                        this._scro.stopAnimation(),
                        this._scro.viewport.scrollV = 0,
                        [4, e.EnergyResearchStationManager.getLockArr()];
                    case 1:
                        return r.sent(),
                        1 == t ? (n = e.EnergyResearchStationManager.unLockArr.concat(e.EnergyResearchStationManager.lockArr).sort(function(e, t) {
                            return t - e
                        }), this._list.dataProvider = new eui.ArrayCollection(n)) : (t = 2) && (this.empty_tip.visible = 0 == e.EnergyResearchStationManager.lockArr.length, this._list.dataProvider = new eui.ArrayCollection(e.EnergyResearchStationManager.lockArr.sort(function(e, t) {
                            return t - e
                        }))),
                        i = 0,
                        2 == t && (i = e.EnergyResearchStationManager.lockArr.length <= 0 ? null: 0),
                        this._list.setSelectedIndex(i),
                        this.updateView(),
                        [2]
                    }
                })
            })
        },
        i.prototype.updateView = function() {
            this.updateItemDetail()
        },
        i.prototype.updateItemDetail = function() {
            var t = ~~this._list.selectedItem;
            if (t > 0) {
                var n = e.EnergyResearchStationManager.getXmlById(t);
                this.icon.source = ClientConfig.getItemIcon(n.ItemID),
                this.itemName.text = n.ItemName,
                this.haveNum.text = "拥有: " + ItemManager.getNumByID(n.ItemID),
                this.desc.text = ItemTipXMLInfo.getItemDes(n.ItemID);
                var i = e.EnergyResearchStationManager.lockArr.indexOf(t) > -1;
                this.lock.source = i ? "energy_research_station_pop_jiesuo_png": "energy_research_station_pop_sduoding_png",
                this.itemGroup.visible = this.lock.visible = !0
            } else this.itemGroup.visible = this.lock.visible = !1
        },
        i.prototype.destroy = function() {
            ImageButtonUtil.removeAll(this),
            EventManager.removeAll(this),
            this.rbGroup.removeEventListener(egret.Event.CHANGE, this.updateTab, this),
            t.prototype.destroy.call(this)
        },
        i
    } (PopView);
    e.EnergyResearchStationRecoverPop = t,
    __reflect(t.prototype, "energyResearchStation.EnergyResearchStationRecoverPop");
    var n = function(t) {
        function n() {
            var n = t.call(this) || this;
            return n.skinName = EnergyResearchStationRecoverItemSkin,
            ImageButtonUtil.add(n.touchGroup,
            function() {
                EventManager.dispatchEventWith(e.EnergyResearchStationManager.EnergyResearchStationManager_SELECT_ITEM_RECOVER)
            },
            n),
            EventManager.addEventListener(e.EnergyResearchStationManager.EnergyResearchStationManager_UPDATE_ITEM_RECOVER, n.updateView, n),
            StatLogger.log("能源研究中心", "20221223H5新道具回收系统第四期（搬迁）", "打开【本期回收道具】面板"),
            n
        }
        return __extends(n, t),
        n.prototype.dataChanged = function() {
            t.prototype.dataChanged.call(this),
            this.data && (this.id = ~~this.data, this.updateView())
        },
        n.prototype.updateView = function() {
            var t = e.EnergyResearchStationManager.getXmlById(this.id);
            if (t) {
                this.icon.source = ClientConfig.getItemIcon(t.ItemID);
                var n = ItemManager.getNumByID(t.ItemID);
                this.num.text = "" + n,
                this.imgLock.visible = e.EnergyResearchStationManager.lockArr.indexOf(this.id) > -1,
                this.selected || (this.bg.source = n > 0 ? "energy_research_station_pop_haveit_png": "energy_research_station_pop_noit_png"),
                this.cacheAsBitmap = !0
            }
        },
        n
    } (BaseItemRenderer);
    e.EnergyResearchStationRecoverItem = n,
    __reflect(n.prototype, "energyResearchStation.EnergyResearchStationRecoverItem")
} (energyResearchStation || (energyResearchStation = {}));
var __extends = this && this.__extends ||
function(e, t) {
    function n() {
        this.constructor = e
    }
    for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
    n.prototype = t.prototype,
    e.prototype = new n
};
window.generateEUI = window.generateEUI || {},
generateEUI.paths = generateEUI.paths || {},
generateEUI.styles = void 0,
generateEUI.skins = {},
generateEUI.paths["resource/eui_skins/EnergyResearchStationEnergyItemSkin.exml"] = window.EnergyResearchStationEnergyItemSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["icon", "num"],
        this.height = 75,
        this.width = 75,
        this.elementsContent = [this._Image1_i(), this.icon_i(), this.num_i()]
    }
    __extends(t, e);
    var n = t.prototype;
    return n._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "energy_research_station_pop_haveit_png",
        e.x = 0,
        e.y = 0,
        e
    },
    n.icon_i = function() {
        var e = new eui.Image;
        return this.icon = e,
        e.height = 60,
        e.horizontalCenter = 0,
        e.verticalCenter = -3,
        e.width = 60,
        e
    },
    n.num_i = function() {
        var e = new eui.Label;
        return this.num = e,
        e.fontFamily = "MFShangHei",
        e.right = 3,
        e.size = 14,
        e.stroke = 1,
        e.strokeColor = 1712696,
        e.text = "9999/99",
        e.textColor = 16765477,
        e.x = 16,
        e.y = 57.9,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/EnergyResearchStationEnergyPopSkin.exml"] = window.EnergyResearchStationEnergyPopSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["dailyNum", "monthNum", "buy1", "buy10", "go", "aniGroup", "energyMain", "_list", "no1", "go1", "exchangeEnergy", "close", "num"],
        this.height = 507,
        this.width = 804,
        this.elementsContent = [this._Group2_i()]
    }
    __extends(t, e);
    var n = t.prototype;
    return n._Group2_i = function() {
        var e = new eui.Group;
        return e.x = 0,
        e.y = 0,
        e.elementsContent = [this._Group1_i(), this._Image11_i(), this.close_i(), this.num_i()],
        e
    },
    n._Group1_i = function() {
        var e = new eui.Group;
        return e.x = 0,
        e.y = 6,
        e.elementsContent = [this._Image1_i(), this.energyMain_i(), this.exchangeEnergy_i()],
        e
    },
    n._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "energy_research_station_pop_energy_bg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    n.energyMain_i = function() {
        var e = new eui.Group;
        return this.energyMain = e,
        e.visible = !0,
        e.x = 27,
        e.y = 68,
        e.elementsContent = [this._Image2_i(), this._Image3_i(), this._Image4_i(), this.dailyNum_i(), this.monthNum_i(), this._Image5_i(), this.buy1_i(), this.buy10_i(), this._Image6_i(), this._Image7_i(), this.go_i(), this.aniGroup_i()],
        e
    },
    n._Image2_i = function() {
        var e = new eui.Image;
        return e.height = 267,
        e.source = "energy_research_station_reward_png",
        e.width = 218,
        e.x = 253,
        e.y = 0,
        e
    },
    n._Image3_i = function() {
        var e = new eui.Image;
        return e.height = 108,
        e.scale9Grid = new egret.Rectangle(4, 4, 4, 4),
        e.source = "energy_research_station_pop_re2_png",
        e.width = 722,
        e.x = 0,
        e.y = 294,
        e
    },
    n._Image4_i = function() {
        var e = new eui.Image;
        return e.height = 34,
        e.scale9Grid = new egret.Rectangle(4, 4, 4, 4),
        e.source = "energy_research_station_pop_re1_png",
        e.width = 722,
        e.x = 0,
        e.y = 260,
        e
    },
    n.dailyNum_i = function() {
        var e = new eui.Label;
        return this.dailyNum = e,
        e.fontFamily = "MFShangHei",
        e.horizontalCenter = -206,
        e.size = 16,
        e.textColor = 16514895,
        e.y = 378,
        e
    },
    n.monthNum_i = function() {
        var e = new eui.Label;
        return this.monthNum = e,
        e.fontFamily = "MFShangHei",
        e.horizontalCenter = 183.5,
        e.size = 16,
        e.textColor = 4187130,
        e.y = 378,
        e
    },
    n._Image5_i = function() {
        var e = new eui.Image;
        return e.source = "energy_research_station_pop_re3_png",
        e.x = 131,
        e.y = 261,
        e
    },
    n.buy1_i = function() {
        var e = new eui.Image;
        return this.buy1 = e,
        e.source = "energy_research_station_pop_buy10_png",
        e.x = 425,
        e.y = 322,
        e
    },
    n.buy10_i = function() {
        var e = new eui.Image;
        return this.buy10 = e,
        e.source = "energy_research_station_pop_buy1_png",
        e.x = 531,
        e.y = 322,
        e
    },
    n._Image6_i = function() {
        var e = new eui.Image;
        return e.source = "energy_research_station_pop_img100w_png",
        e.x = 539,
        e.y = 298,
        e
    },
    n._Image7_i = function() {
        var e = new eui.Image;
        return e.source = "energy_research_station_pop_img10w_png",
        e.x = 432,
        e.y = 298,
        e
    },
    n.go_i = function() {
        var e = new eui.Image;
        return this.go = e,
        e.source = "energy_research_station_pop_go1_png",
        e.visible = !0,
        e.x = 68,
        e.y = 322,
        e
    },
    n.aniGroup_i = function() {
        var e = new eui.Group;
        return this.aniGroup = e,
        e.touchChildren = !1,
        e.touchEnabled = !1,
        e.touchThrough = !0,
        e.x = 362,
        e.y = 130,
        e
    },
    n.exchangeEnergy_i = function() {
        var e = new eui.Group;
        return this.exchangeEnergy = e,
        e.visible = !1,
        e.x = 27,
        e.y = 91,
        e.elementsContent = [this._Image8_i(), this._Image9_i(), this._Scroller1_i(), this._Image10_i(), this.no1_i(), this.go1_i()],
        e
    },
    n._Image8_i = function() {
        var e = new eui.Image;
        return e.height = 108,
        e.scale9Grid = new egret.Rectangle(4, 4, 4, 4),
        e.source = "energy_research_station_pop_re2_png",
        e.width = 722,
        e.x = 0,
        e.y = 302,
        e
    },
    n._Image9_i = function() {
        var e = new eui.Image;
        return e.height = 34,
        e.scale9Grid = new egret.Rectangle(4, 4, 4, 4),
        e.source = "energy_research_station_pop_re1_png",
        e.width = 722,
        e.x = 0,
        e.y = 268,
        e
    },
    n._Scroller1_i = function() {
        var e = new eui.Scroller;
        return e.height = 263.565,
        e.width = 693.643,
        e.x = 16,
        e.y = 0,
        e.viewport = this._list_i(),
        e
    },
    n._list_i = function() {
        var e = new eui.List;
        return this._list = e,
        e.layout = this._TileLayout1_i(),
        e
    },
    n._TileLayout1_i = function() {
        var e = new eui.TileLayout;
        return e.horizontalAlign = "left",
        e.verticalAlign = "top",
        e
    },
    n._Image10_i = function() {
        var e = new eui.Image;
        return e.source = "energy_research_station_pop_energytext_png",
        e.x = 114,
        e.y = 272,
        e
    },
    n.no1_i = function() {
        var e = new eui.Image;
        return this.no1 = e,
        e.source = "energy_research_station_pop_no1_png",
        e.x = 458,
        e.y = 314,
        e
    },
    n.go1_i = function() {
        var e = new eui.Image;
        return this.go1 = e,
        e.source = "energy_research_station_pop_go_png",
        e.x = 99,
        e.y = 314,
        e
    },
    n._Image11_i = function() {
        var e = new eui.Image;
        return e.source = "energy_research_station_pop_numbg_png",
        e.x = 564,
        e.y = 50,
        e
    },
    n.close_i = function() {
        var e = new eui.Image;
        return this.close = e,
        e.source = "energy_research_station_pop_close_png",
        e.x = 770.036,
        e.y = 0,
        e
    },
    n.num_i = function() {
        var e = new eui.Label;
        return this.num = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "99999",
        e.textAlign = "center",
        e.textColor = 16772909,
        e.width = 70,
        e.x = 682.55,
        e.y = 58,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/EnergyResearchStationExchangeItemSkin.exml"] = window.EnergyResearchStationExchangeItemSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["icon", "buyNum", "Buy", "itemName", "xd", "num"],
        this.height = 173,
        this.width = 146,
        this.elementsContent = [this._Group1_i()]
    }
    __extends(t, e);
    var n = t.prototype;
    return n._Group1_i = function() {
        var e = new eui.Group;
        return e.x = 0,
        e.y = 0,
        e.elementsContent = [this._Image1_i(), this.icon_i(), this.Buy_i(), this.itemName_i(), this.xd_i(), this.num_i()],
        e
    },
    n._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "energy_research_station_pop_buyitembg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    n.icon_i = function() {
        var e = new eui.Image;
        return this.icon = e,
        e.height = 60,
        e.horizontalCenter = 0,
        e.verticalCenter = -18.5,
        e.width = 60,
        e
    },
    n.Buy_i = function() {
        var e = new eui.Group;
        return this.Buy = e,
        e.touchChildren = !1,
        e.x = 4,
        e.y = 138,
        e.elementsContent = [this._Image2_i(), this.buyNum_i()],
        e
    },
    n._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "energy_research_station_pop_buybtnbg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    n.buyNum_i = function() {
        var e = new eui.Label;
        return this.buyNum = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "999 兑换",
        e.textAlign = "center",
        e.textColor = 10181146,
        e.width = 98,
        e.x = 26,
        e.y = 7,
        e
    },
    n.itemName_i = function() {
        var e = new eui.Label;
        return this.itemName = e,
        e.fontFamily = "MFShangHei",
        e.horizontalCenter = 0,
        e.size = 16,
        e.textColor = 14543359,
        e.touchEnabled = !1,
        e.y = 7,
        e
    },
    n.xd_i = function() {
        var e = new eui.Label;
        return this.xd = e,
        e.fontFamily = "MFShangHei",
        e.horizontalCenter = 0,
        e.size = 14,
        e.textColor = 4187130,
        e.touchEnabled = !1,
        e.y = 117,
        e
    },
    n.num_i = function() {
        var e = new eui.Label;
        return this.num = e,
        e.fontFamily = "MFShangHei",
        e.right = 12,
        e.size = 18,
        e.stroke = 1,
        e.strokeColor = 1518417,
        e.text = "1",
        e.textColor = 14543359,
        e.touchEnabled = !1,
        e.y = 93,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/EnergyResearchStationExchangePopSkin.exml"] = window.EnergyResearchStationExchangePopSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["_list", "num", "close", "endText"],
        this.height = 480,
        this.width = 750,
        this.elementsContent = [this._Group1_i()]
    }
    __extends(t, e);
    var n = t.prototype;
    return n._Group1_i = function() {
        var e = new eui.Group;
        return e.x = 0,
        e.y = 0,
        e.elementsContent = [this._Image1_i(), this._Scroller1_i(), this._Image2_i(), this.num_i(), this.close_i(), this.endText_i()],
        e
    },
    n._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "energy_research_station_pop_exchangebg_png",
        e.visible = !0,
        e.x = 0,
        e.y = 0,
        e
    },
    n._Scroller1_i = function() {
        var e = new eui.Scroller;
        return e.height = 374,
        e.horizontalCenter = -4.5,
        e.width = 630,
        e.y = 90,
        e.viewport = this._list_i(),
        e
    },
    n._list_i = function() {
        var e = new eui.List;
        return this._list = e,
        e.itemRendererSkinName = EnergyResearchStationExchangeItemSkin,
        e.layout = this._TileLayout1_i(),
        e
    },
    n._TileLayout1_i = function() {
        var e = new eui.TileLayout;
        return e.horizontalAlign = "left",
        e.horizontalGap = 15,
        e.requestedColumnCount = 4,
        e.verticalAlign = "top",
        e
    },
    n._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "energy_research_station_pop_numbg_png",
        e.x = 524,
        e.y = 44,
        e
    },
    n.num_i = function() {
        var e = new eui.Label;
        return this.num = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "99999",
        e.textAlign = "center",
        e.textColor = 16772909,
        e.width = 70,
        e.x = 642,
        e.y = 52,
        e
    },
    n.close_i = function() {
        var e = new eui.Image;
        return this.close = e,
        e.source = "energy_research_station_pop_close_png",
        e.x = 716,
        e.y = 0,
        e
    },
    n.endText_i = function() {
        var e = new eui.Label;
        return this.endText = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.stroke = 1,
        e.strokeColor = 1533851,
        e.text = "本期结束后更新",
        e.textColor = 4187130,
        e.x = 272.547,
        e.y = 39.589,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/EnergyResearchStationRecoverItemSkin.exml"] = window.EnergyResearchStationRecoverItemSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["bg", "icon", "num", "imgLock", "touchGroup"],
        this.currentState = "up",
        this.height = 75,
        this.width = 75,
        this.elementsContent = [this._Image1_i(), this.bg_i(), this.icon_i(), this.num_i(), this.imgLock_i(), this.touchGroup_i()],
        this.states = [new eui.State("down", [new eui.SetProperty("bg", "visible", !1)]), new eui.State("up", [])]
    }
    __extends(t, e);
    var n = t.prototype;
    return n._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "energy_research_station_pop_selectit_png",
        e.visible = !0,
        e.x = 0,
        e.y = 0,
        e
    },
    n.bg_i = function() {
        var e = new eui.Image;
        return this.bg = e,
        e.horizontalCenter = 0,
        e.source = "energy_research_station_pop_haveit_png",
        e.verticalCenter = 0,
        e
    },
    n.icon_i = function() {
        var e = new eui.Image;
        return this.icon = e,
        e.height = 60,
        e.horizontalCenter = 0,
        e.touchEnabled = !1,
        e.verticalCenter = 0,
        e.width = 60,
        e
    },
    n.num_i = function() {
        var e = new eui.Label;
        return this.num = e,
        e.fontFamily = "MFShangHei",
        e.right = 4,
        e.size = 14,
        e.stroke = 1,
        e.strokeColor = 1712696,
        e.text = "0",
        e.textColor = 16776958,
        e.touchEnabled = !1,
        e.y = 58.739,
        e
    },
    n.imgLock_i = function() {
        var e = new eui.Image;
        return this.imgLock = e,
        e.source = "energy_research_station_pop_lockit_png",
        e.touchEnabled = !1,
        e.visible = !1,
        e.x = 54,
        e.y = 1,
        e
    },
    n.touchGroup_i = function() {
        var e = new eui.Group;
        return this.touchGroup = e,
        e.height = 75,
        e.width = 75,
        e.x = 0,
        e.y = 0,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/EnergyResearchStationRecoverPopSkin.exml"] = window.EnergyResearchStationRecoverPopSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["bg", "rb_hs", "rb_sd", "icon", "itemName", "haveNum", "desc", "itemGroup", "empty_tip", "_list", "_scro", "lock", "close"],
        this.height = 480,
        this.width = 883,
        this.elementsContent = [this._Group1_i()]
    }
    __extends(t, e);
    var n = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["labelDisplay"],
            this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "energy_research_station_pop_huishou_down_png")]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var n = t.prototype;
        return n._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.percentHeight = 100,
            e.source = "energy_research_station_pop_huishou_up_png",
            e.percentWidth = 100,
            e
        },
        n.labelDisplay_i = function() {
            var e = new eui.Label;
            return this.labelDisplay = e,
            e.horizontalCenter = 0,
            e.verticalCenter = 0,
            e
        },
        t
    } (eui.Skin),
    i = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["labelDisplay"],
            this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "energy_research_station_pop_suoding_uo_png")]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var n = t.prototype;
        return n._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.percentHeight = 100,
            e.source = "energy_research_station_pop_suoding_down_png",
            e.percentWidth = 100,
            e
        },
        n.labelDisplay_i = function() {
            var e = new eui.Label;
            return this.labelDisplay = e,
            e.horizontalCenter = 0,
            e.verticalCenter = 0,
            e
        },
        t
    } (eui.Skin),
    r = t.prototype;
    return r._Group1_i = function() {
        var e = new eui.Group;
        return e.height = 480,
        e.width = 883,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this.bg_i(), this._Image1_i(), this.rb_hs_i(), this.rb_sd_i(), this._Image2_i(), this.itemGroup_i(), this.empty_tip_i(), this._scro_i(), this.lock_i(), this.close_i()],
        e
    },
    r.bg_i = function() {
        var e = new eui.Image;
        return this.bg = e,
        e.source = "energy_research_station_pop_recoverbg_png",
        e.visible = !0,
        e.x = 20,
        e.y = 57,
        e
    },
    r._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "energy_research_station_pop_recover_title_png",
        e.x = 35,
        e.y = 6,
        e
    },
    r.rb_hs_i = function() {
        var e = new eui.RadioButton;
        return this.rb_hs = e,
        e.groupName = "recoverGroup",
        e.value = "1",
        e.x = 0,
        e.y = 91,
        e.skinName = n,
        e
    },
    r.rb_sd_i = function() {
        var e = new eui.RadioButton;
        return this.rb_sd = e,
        e.groupName = "recoverGroup",
        e.value = "2",
        e.x = 0,
        e.y = 180,
        e.skinName = i,
        e
    },
    r._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "energy_research_station_pop_detailline_png",
        e.x = 601,
        e.y = 168,
        e
    },
    r.itemGroup_i = function() {
        var e = new eui.Group;
        return this.itemGroup = e,
        e.visible = !0,
        e.width = 259,
        e.x = 601,
        e.y = 87,
        e.elementsContent = [this._Image3_i(), this.icon_i(), this.itemName_i(), this.haveNum_i(), this.desc_i()],
        e
    },
    r._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "energy_research_station_pop_haveit_png",
        e.x = 7,
        e.y = 0,
        e
    },
    r.icon_i = function() {
        var e = new eui.Image;
        return this.icon = e,
        e.height = 60,
        e.width = 60,
        e.x = 13.64,
        e.y = 7,
        e
    },
    r.itemName_i = function() {
        var e = new eui.Label;
        return this.itemName = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.textColor = 4187130,
        e.width = 163,
        e.x = 86,
        e.y = 6,
        e
    },
    r.haveNum_i = function() {
        var e = new eui.Label;
        return this.haveNum = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.textColor = 12834813,
        e.x = 88,
        e.y = 48,
        e
    },
    r.desc_i = function() {
        var e = new eui.Label;
        return this.desc = e,
        e.fontFamily = "MFShangHei",
        e.lineSpacing = 6,
        e.size = 16,
        e.textColor = 8631282,
        e.width = 240,
        e.x = 10,
        e.y = 96,
        e
    },
    r.empty_tip_i = function() {
        var e = new eui.Image;
        return this.empty_tip = e,
        e.source = "energy_research_station_pop_empty_tip_png",
        e.visible = !1,
        e.x = 231,
        e.y = 205,
        e
    },
    r._scro_i = function() {
        var e = new eui.Scroller;
        return this._scro = e,
        e.height = 366,
        e.width = 502,
        e.x = 66,
        e.y = 102,
        e.viewport = this._list_i(),
        e
    },
    r._list_i = function() {
        var e = new eui.List;
        return this._list = e,
        e.itemRendererSkinName = EnergyResearchStationRecoverItemSkin,
        e.layout = this._TileLayout1_i(),
        e
    },
    r._TileLayout1_i = function() {
        var e = new eui.TileLayout;
        return e.horizontalAlign = "left",
        e.verticalAlign = "top",
        e
    },
    r.lock_i = function() {
        var e = new eui.Image;
        return this.lock = e,
        e.source = "energy_research_station_pop_sduoding_png",
        e.visible = !1,
        e.x = 647,
        e.y = 387,
        e
    },
    r.close_i = function() {
        var e = new eui.Image;
        return this.close = e,
        e.source = "energy_research_station_pop_close_png",
        e.x = 851.657,
        e.y = 0,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/EnergyResearchStationSkin.exml"] = window.EnergyResearchStationSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["bg", "img_get", "tips", "recover", "exchange", "num", "aniGroup", "aniGroup1"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this._Group1_i()]
    }
    __extends(t, e);
    var n = t.prototype;
    return n.bg_i = function() {
        var e = new eui.Image;
        return this.bg = e,
        e.horizontalCenter = 0,
        e.source = "energy_research_station_bg_jpg",
        e.y = 0,
        e
    },
    n._Group1_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = 160.5,
        e.y = 30,
        e.elementsContent = [this.img_get_i(), this._Image1_i(), this.tips_i(), this.recover_i(), this.exchange_i(), this._Image2_i(), this.num_i(), this.aniGroup_i(), this.aniGroup1_i()],
        e
    },
    n.img_get_i = function() {
        var e = new eui.Image;
        return this.img_get = e,
        e.alpha = 0,
        e.source = "energy_research_station_img_get_png",
        e.x = 501,
        e.y = 500,
        e
    },
    n._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "energy_research_station_title_png",
        e.x = 0,
        e.y = 0,
        e
    },
    n.tips_i = function() {
        var e = new eui.Image;
        return this.tips = e,
        e.source = "energy_research_station_tips_png",
        e.x = 346,
        e.y = 13,
        e
    },
    n.recover_i = function() {
        var e = new eui.Image;
        return this.recover = e,
        e.source = "energy_research_station_recover_png",
        e.x = 566,
        e.y = 139,
        e
    },
    n.exchange_i = function() {
        var e = new eui.Image;
        return this.exchange = e,
        e.source = "energy_research_station_exchange_png",
        e.x = 566,
        e.y = 201,
        e
    },
    n._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "energy_research_station_item_bg_png",
        e.x = 508,
        e.y = 475,
        e
    },
    n.num_i = function() {
        var e = new eui.Label;
        return this.num = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "999999",
        e.textAlign = "center",
        e.textColor = 16772909,
        e.width = 70,
        e.x = 630,
        e.y = 480,
        e
    },
    n.aniGroup_i = function() {
        var e = new eui.Group;
        return this.aniGroup = e,
        e.touchChildren = !1,
        e.touchEnabled = !1,
        e.touchThrough = !0,
        e.x = 250,
        e.y = 333,
        e
    },
    n.aniGroup1_i = function() {
        var e = new eui.Group;
        return this.aniGroup1 = e,
        e.touchChildren = !1,
        e.touchEnabled = !1,
        e.touchThrough = !0,
        e.x = 615.956,
        e.y = 536.842,
        e
    },
    t
} (eui.Skin);