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
    return new(n || (n = Promise))(function(a, o) {
        function r(t) {
            try {
                c(i.next(t))
            } catch(e) {
                o(e)
            }
        }
        function s(t) {
            try {
                c(i["throw"](t))
            } catch(e) {
                o(e)
            }
        }
        function c(t) {
            t.done ? a(t.value) : new n(function(e) {
                e(t.value)
            }).then(r, s)
        }
        c((i = i.apply(t, e || [])).next())
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
        if (a) throw new TypeError("Generator is already executing.");
        for (; c;) try {
            if (a = 1, o && (r = o[2 & n[0] ? "return": n[0] ? "throw": "next"]) && !(r = r.call(o, n[1])).done) return r;
            switch (o = 0, r && (n = [0, r.value]), n[0]) {
            case 0:
            case 1:
                r = n;
                break;
            case 4:
                return c.label++,
                {
                    value: n[1],
                    done: !1
                };
            case 5:
                c.label++,
                o = n[1],
                n = [0];
                continue;
            case 7:
                n = c.ops.pop(),
                c.trys.pop();
                continue;
            default:
                if (r = c.trys, !(r = r.length > 0 && r[r.length - 1]) && (6 === n[0] || 2 === n[0])) {
                    c = 0;
                    continue
                }
                if (3 === n[0] && (!r || n[1] > r[0] && n[1] < r[3])) {
                    c.label = n[1];
                    break
                }
                if (6 === n[0] && c.label < r[1]) {
                    c.label = r[1],
                    r = n;
                    break
                }
                if (r && c.label < r[2]) {
                    c.label = r[2],
                    c.ops.push(n);
                    break
                }
                r[2] && c.ops.pop(),
                c.trys.pop();
                continue
            }
            n = e.call(t, c)
        } catch(i) {
            n = [6, i],
            o = 0
        } finally {
            a = r = 0
        }
        if (5 & n[0]) throw n[1];
        return {
            value: n[0] ? n[1] : void 0,
            done: !0
        }
    }
    var a, o, r, s, c = {
        label: 0,
        sent: function() {
            if (1 & r[0]) throw r[1];
            return r[1]
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
advancedPetBackStore; !
function(t) {
    var e = function(e) {
        function n(t) {
            var n = e.call(this) || this;
            return n.initPet = 0,
            n.arrAssets = {},
            n.initPet = t,
            n.Init(),
            n.addEvent(),
            n
        }
        return __extends(n, e),
        n.prototype.Init = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                return __generator(this,
                function(t) {
                    switch (t.label) {
                    case 0:
                        return SocketConnection.sendWithCallback(41804,
                        function(t) {
                            n.rollAllTime = t.data.readUnsignedInt()
                        },
                        [0, 10]),
                        [4, this.getInfo()];
                    case 1:
                        return t.sent(),
                        this.LoadImg(),
                        this.init([{
                            panelName: "advancedPetBackStore.MainPanel",
                            isMain: !0
                        },
                        {
                            panelName: "advancedPetBackStore.DetailPanel"
                        }]),
                        [2]
                    }
                })
            })
        },
        n.prototype.LoadImg = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var t, e, i, a, o, r, s = this;
                return __generator(this,
                function(c) {
                    switch (c.label) {
                    case 0:
                        LoadingManager.instance.showloading("正在加载资源，请稍候！"),
                        t = 0,
                        e = n.taskId2petId.getKeys(),
                        c.label = 1;
                    case 1:
                        return t < e.length ? (i = e[t], [4, RES.getResByUrl(ClientConfig.getPetAdvBackPath(i) + ("compBg_" + i + ".png"),
                        function(t, e) {
                            s.arrAssets[e] = 1
                        })]) : [3, 9];
                    case 2:
                        c.sent(),
                        a = n.petAdvCompName.getValue(i).length,
                        o = 1,
                        c.label = 3;
                    case 3:
                        return a >= o ? [4, RES.getResByUrl(ClientConfig.getPetAdvBackPath(i) + ("comp_" + i + "_" + o + ".png"),
                        function(t, e) {
                            s.arrAssets[e] = 1
                        })] : [3, 6];
                    case 4:
                        c.sent(),
                        c.label = 5;
                    case 5:
                        return o++,
                        [3, 3];
                    case 6:
                        return r = n.taskId2petId.getValue(i),
                        [4, RES.getResByUrl(ClientConfig.getPetAdvBackPath(i) + ("pet_" + r + ".png"),
                        function(t, e) {
                            s.arrAssets[e] = 1
                        })];
                    case 7:
                        c.sent(),
                        c.label = 8;
                    case 8:
                        return t++,
                        [3, 1];
                    case 9:
                        return LoadingManager.instance.hideloading(),
                        [2]
                    }
                })
            })
        },
        n.prototype.initialized = function() {
            var t = this;
            this.service.updateValues().then(function() {
                if (0 != t.initPet && n.petAdvInfos.containsKey(t.initPet)) {
                    var e = n.taskId2petId.getKey(t.initPet);
                    t.service.openPanel("advancedPetBackStore.DetailPanel", {
                        petId: t.initPet,
                        allProgress: PetAdvanceXMLInfo.getTaskInfo(e).AllProgress,
                        progress: n.petAdvInfos.getValue(t.initPet).curProgress,
                        taskId: e
                    }),
                    t.initPet = 0
                } else t.openPanel("advancedPetBackStore.MainPanel")
            })
        },
        n.prototype.getInfo = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var t, e, i, a, o, r, s;
                return __generator(this,
                function(c) {
                    switch (c.label) {
                    case 0:
                        for (t = PetAdvanceXMLInfo.getAllBackInfo(), n.lastDate = SystemTimerManager.getDateByStrXieGang(t[0].desc.split("|")[1]), e = 0; e < t.length; e++) n.taskId2petId.add(t[e].TaskId, t[e].MonsterId);
                        for (i = core.manager.XMLConfigManger.getInstance().getRes(ClientConfig.getJSONConfig("advancedPetPanelConfig")).root.Task, a = 0; a < t.length; a++) o = t[a].ID - 1,
                        r = i[o].Compone.Name,
                        s = r.split("|"),
                        n.petAdvCompName.add(Number(i[o].ID), s),
                        n.petAdvH5Jump2Get.add(Number(i[o].ID), i[o].JumpH5),
                        n.petAdvFlashJump2Get.add(Number(i[o].ID), i[o].Jump);
                        return [4, this.updateAdvInfos()];
                    case 1:
                        return c.sent(),
                        [2]
                    }
                })
            })
        },
        n.prototype.updateAdvInfos = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var t, e, i, a, o, r;
                return __generator(this,
                function(s) {
                    switch (s.label) {
                    case 0:
                        t = PetAdvanceXMLInfo.getAllBackInfo(),
                        e = 0,
                        s.label = 1;
                    case 1:
                        return e < t.length ? [4, SocketConnection.sendWithPromise(41803, [t[e].TaskId, 7])] : [3, 4];
                    case 2:
                        i = s.sent(),
                        a = i.data,
                        o = a.readUnsignedInt(),
                        r = a.readUnsignedInt(),
                        n.petAdvInfos.add(t[e].MonsterId, {
                            curProgress: o,
                            ct: r
                        }),
                        s.label = 3;
                    case 3:
                        return e++,
                        [3, 1];
                    case 4:
                        return [2]
                    }
                })
            })
        },
        n.prototype.addEvent = function() {
            var e = this;
            EventManager.addEventListener(n.OpenDetail,
            function(t) {
                e.service.openPanel("advancedPetBackStore.DetailPanel", t.data)
            },
            this),
            EventManager.addEventListener(n.RefreshStore,
            function(i) {
                return __awaiter(e, void 0, void 0,
                function() {
                    var e, a;
                    return __generator(this,
                    function(o) {
                        switch (o.label) {
                        case 0:
                            return e = i.data,
                            [4, this.updateAdvInfos()];
                        case 1:
                            return o.sent(),
                            EventManager.dispatchEventWith(n.RefreshPanel),
                            e && (a = new t.HighlightPop(e), PopViewManager.getInstance().openView(a)),
                            [2]
                        }
                    })
                })
            },
            this)
        },
        n.prototype.destroy = function() {
            EventManager.removeAll(this);
            for (var t in this.arrAssets) RES.destroyRes(t) || console.warn("销毁动态素材资源失败：" + t);
            this.arrAssets = {},
            e.prototype.destroy.call(this)
        },
        n.OpenDetail = "AdvancedPetBackStore.OpenDetail",
        n.RefreshStore = "AdvancedPetBackStore.RefreshStore",
        n.RefreshPanel = "AdvancedPetBackStore.RefreshPanel",
        n.RefreshGoods = "AdvancedPetBackStore.RefreshGoods",
        n.rollAllTime = 0,
        n.petAdvInfos = new HashMap,
        n.petAdvCompName = new HashMap,
        n.taskId2petId = new HashMap,
        n.petAdvH5Jump2Get = new HashMap,
        n.petAdvFlashJump2Get = new HashMap,
        n
    } (BasicMultPanelModule);
    t.AdvancedPetBackStore = e,
    __reflect(e.prototype, "advancedPetBackStore.AdvancedPetBackStore")
} (advancedPetBackStore || (advancedPetBackStore = {}));
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
advancedPetBackStore; !
function(t) {
    var e = function(e) {
        function n(t) {
            var n = e.call(this) || this;
            return n.coinBCnt = 0,
            n.skinName = "AdvancedPetBackStoreBuyCoinPop",
            n.service = t,
            n
        }
        return __extends(n, e),
        n.prototype.childrenCreated = function() {
            var t = this;
            e.prototype.childrenCreated.call(this),
            this.adaptRightContent(this.grpRight, 75),
            this.addEvent(),
            this.onItemChange(),
            this.service.registerItems(1724859,
            function() {
                t.onItemChange()
            },
            this)
        },
        n.prototype.addEvent = function() {
            var t = this;
            ImageButtonUtil.add(this.btnClose,
            function() {
                t.hide()
            },
            this),
            ImageButtonUtil.add(this.btnGoto1,
            function() {
                StatLogger.log("2023运营活动", "神谕进阶返场", "获取途径界面-点击【VIP每月礼包】按钮"),
                ModuleManager.showModuleByID(137, 2).then(function() {
                    PopViewManager.getInstance().hideAll()
                })
            },
            this, !1),
            ImageButtonUtil.add(this.btnGoto2,
            function() {
                StatLogger.log("2023运营活动", "神谕进阶返场", "获取途径界面-点击【VIP专属特惠】按钮"),
                Alarm.show("赛尔号互通版《巅峰之战》暂未开启该功能\n请前往网页版体验")
            },
            this, !1),
            ImageButtonUtil.add(this.btnBuy,
            function() {
                StatLogger.log("2023运营活动", "神谕进阶返场", "获取途径界面-点击【直接购买】按钮"),
                t.buyCoin()
            },
            this, !1),
            ImageButtonUtil.add(this.btnBuyCoin,
            function() {
                StatLogger.log("2023运营活动", "神谕进阶返场", "获取途径界面-点击【直接购买】按钮"),
                t.buyCoin()
            },
            this)
        },
        n.prototype.onItemChange = function(t) {
            void 0 === t && (t = null),
            this.coinBCnt = ItemManager.getNumByID(1724859),
            this.txtCoin.text = this.coinBCnt.toString()
        },
        n.prototype.buyCoin = function() {
            var t = this;
            if (PayManager.canPay()) {
                var e = {};
                e.type = "product_diamond",
                e.ins = {
                    iconID: 13,
                    productID: 260409
                },
                e.caller = this,
                e.callBack = function(e, n) {
                    KTool.buyProductByCallback(260409, n,
                    function() {
                        KTool.doExchange(14208, n,
                        function() {
                            t.onItemChange()
                        })
                    })
                },
                ModuleManager.showModuleByID(1, e)
            } else Alarm.show("赛尔号互通版《巅峰之战》暂未开启该功能\n请前往网页版体验")
        },
        n.prototype.adaptRightContent = function(t, e) {
            void 0 === e && (e = 0),
            this.parent.addChild(t),
            t.right = e,
            t.top = 24
        },
        n.prototype.hide = function() {
            this.grpRight.visible = !1,
            DisplayUtil.removeForParent(this.grpRight);
            var n = new t.StorePop(this.service);
            PopViewManager.getInstance().openView(n, {
                useStageBg: !1,
                maskBgStyle: null,
                maskShapeStyle: {
                    maskAlpha: .85,
                    maskColor: 0
                },
                effStyle: {
                    showAniType: PopEffStyle.CENTER,
                    isMoveToCenter: !1,
                    horizontalCenterOffset: 0,
                    verticalCenterOffset: 0,
                    relativeToPoint: null
                }
            }),
            e.prototype.hide.call(this)
        },
        n
    } (PopView);
    t.BuyCoinPop = e,
    __reflect(e.prototype, "advancedPetBackStore.BuyCoinPop")
} (advancedPetBackStore || (advancedPetBackStore = {}));
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
    return new(n || (n = Promise))(function(a, o) {
        function r(t) {
            try {
                c(i.next(t))
            } catch(e) {
                o(e)
            }
        }
        function s(t) {
            try {
                c(i["throw"](t))
            } catch(e) {
                o(e)
            }
        }
        function c(t) {
            t.done ? a(t.value) : new n(function(e) {
                e(t.value)
            }).then(r, s)
        }
        c((i = i.apply(t, e || [])).next())
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
        if (a) throw new TypeError("Generator is already executing.");
        for (; c;) try {
            if (a = 1, o && (r = o[2 & n[0] ? "return": n[0] ? "throw": "next"]) && !(r = r.call(o, n[1])).done) return r;
            switch (o = 0, r && (n = [0, r.value]), n[0]) {
            case 0:
            case 1:
                r = n;
                break;
            case 4:
                return c.label++,
                {
                    value: n[1],
                    done: !1
                };
            case 5:
                c.label++,
                o = n[1],
                n = [0];
                continue;
            case 7:
                n = c.ops.pop(),
                c.trys.pop();
                continue;
            default:
                if (r = c.trys, !(r = r.length > 0 && r[r.length - 1]) && (6 === n[0] || 2 === n[0])) {
                    c = 0;
                    continue
                }
                if (3 === n[0] && (!r || n[1] > r[0] && n[1] < r[3])) {
                    c.label = n[1];
                    break
                }
                if (6 === n[0] && c.label < r[1]) {
                    c.label = r[1],
                    r = n;
                    break
                }
                if (r && c.label < r[2]) {
                    c.label = r[2],
                    c.ops.push(n);
                    break
                }
                r[2] && c.ops.pop(),
                c.trys.pop();
                continue
            }
            n = e.call(t, c)
        } catch(i) {
            n = [6, i],
            o = 0
        } finally {
            a = r = 0
        }
        if (5 & n[0]) throw n[1];
        return {
            value: n[0] ? n[1] : void 0,
            done: !0
        }
    }
    var a, o, r, s, c = {
        label: 0,
        sent: function() {
            if (1 & r[0]) throw r[1];
            return r[1]
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
advancedPetBackStore; !
function(t) {
    var e = function(e) {
        function n(t) {
            var n = e.call(this) || this;
            return n.PosX4Arr = [ - 430, -240, 197, 365],
            n.PosY4Arr = [324, 370, 370, 324],
            n.PosX5Arr = [ - 430, -240, -17, 197, 365],
            n.PosY5Arr = [324, 370, 370, 370, 324],
            n.skinName = "AdvancedPetBackStoreDetailPanelSkin",
            n
        }
        return __extends(n, e),
        n.prototype.beforeAdd = function(t) {
            t && (this.data = t),
            EventManager.dispatchEventWith("hideActivityCenterLeft"),
            this.initPanel()
        },
        n.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.addEvent(),
            this.init(),
            this.adaptBgByScale(this.imgBg)
        },
        n.prototype.addEvent = function() {
            var e = this;
            ImageButtonUtil.add(this.btnPetInfo,
            function() {
                StatLogger.log("2023运营活动", "神谕进阶返场", "精灵界面-点击【进阶详情】按钮"),
                ModuleManager.showModuleByID(262, {
                    type: "pet",
                    data: e.data.petId,
                    isNeedShowAdv: !0
                })
            },
            this),
            ImageButtonUtil.add(this.btnToBuy,
            function() {
                StatLogger.log("2023运营活动", "神谕进阶返场", "精灵界面-点击下方【前往获得】按钮");
                var n = new t.StorePop(e.service);
                PopViewManager.getInstance().openView(n, {
                    useStageBg: !1,
                    maskBgStyle: null,
                    maskShapeStyle: {
                        maskAlpha: .85,
                        maskColor: 0
                    },
                    effStyle: {
                        showAniType: PopEffStyle.CENTER,
                        isMoveToCenter: !1,
                        horizontalCenterOffset: 0,
                        verticalCenterOffset: 0,
                        relativeToPoint: null
                    }
                })
            },
            this),
            ImageButtonUtil.add(this.btnStore,
            function() {
                StatLogger.log("2023运营活动", "神谕进阶返场", "精灵界面-点击【商城】按钮");
                var n = new t.StorePop(e.service);
                PopViewManager.getInstance().openView(n, {
                    useStageBg: !1,
                    maskBgStyle: null,
                    maskShapeStyle: {
                        maskAlpha: .85,
                        maskColor: 0
                    },
                    effStyle: {
                        showAniType: PopEffStyle.CENTER,
                        isMoveToCenter: !1,
                        horizontalCenterOffset: 0,
                        verticalCenterOffset: 0,
                        relativeToPoint: null
                    }
                })
            },
            this),
            ImageButtonUtil.add(this.btnStartAdv,
            function() {
                PetManager.updateBagInfo(function() {
                    if (!PetManager.isDefaultPet(e.data.petId)) {
                        StatLogger.log("2023运营活动", "神谕进阶返场", "精灵界面-点击【开始进阶】时首发不对"),
                        StatLogger.log("运营活动2024", "神谕进阶返场增加两件套购买", "首发不对触发提示弹窗");
                        var n = "请将<font color='#ff0000'>" + PetXMLInfo.getName(e.data.petId) + "</font>放于背包首发位置";
                        return void Alarm.show(n,
                        function() {
                            e.service.showPetBag()
                        })
                    }
                    PetManager.checkPetInfoEffect(PetManager.infos[0],
                    function(n) {
                        return n && 0 != PetManager.infos[0].effectCount && PetManager.infos[0].hideSKill ? void SocketConnection.sendByQueue(41803, [e.data.taskId, 6],
                        function() {
                            EventManager.dispatchEventWith(t.AdvancedPetBackStore.RefreshStore);
                            var n = "经过你们的努力<font color='#ff0000'>" + PetXMLInfo.getName(e.data.petId) + "</font>已完成进阶！可以前往背包查看进阶效果！";
                            Alert.show(n,
                            function() {
                                return __awaiter(e, void 0, void 0,
                                function() {
                                    return __generator(this,
                                    function(t) {
                                        switch (t.label) {
                                        case 0:
                                            return this.service.backToMainPanel(),
                                            EventManager.dispatchEventWith("showActivityCenterLeft"),
                                            [4, wait(50)];
                                        case 1:
                                            return t.sent(),
                                            this.service.showPetBag(),
                                            [2]
                                        }
                                    })
                                })
                            },
                            function() {
                                e.service.backToMainPanel(),
                                EventManager.dispatchEventWith("showActivityCenterLeft")
                            })
                        }) : void e.Try2GetPet()
                    },
                    e)
                })
            },
            this),
            EventManager.addEventListener(t.AdvancedPetBackStore.RefreshPanel, this.initPanel, this),
            ImageButtonUtil.add(this.btnPetBag,
            function() {
                e.service.showPetBag()
            },
            this),
            ImageButtonUtil.add(this.btnGet,
            function() {
                e.Try2GetPet2()
            },
            this)
        },
        n.prototype.init = function() {
            var t = this;
            e.prototype.initBtnClose.call(this, "jinjiexiangqing_png", this,
            function() {
                t.service.backToMainPanel(),
                EventManager.dispatchEventWith("showActivityCenterLeft")
            },
            this)
        },
        n.prototype.initPanel = function(e) {
            var n = this,
            i = t.AdvancedPetBackStore.petAdvH5Jump2Get.getValue(this.data.taskId);
            if (i ? DisplayUtil.setEnabled(this.btnGet, !0, !0) : DisplayUtil.setEnabled(this.btnGet, !1, !0), this.imgBg.source = "detail_panel_bg_" + this.data.taskId + "_png", this.adaptBgByScale(this.imgBg), this.data.progress = t.AdvancedPetBackStore.petAdvInfos.getValue(this.data.petId).curProgress, this.data.progress < 0) DisplayUtil.setEnabled(this.btnStartAdv, !1),
            this.btnStartAdv.visible = !0,
            this.grpBuyComp.visible = !1;
            else if (this.data.progress == this.data.allProgress) if (null != e) DisplayUtil.setEnabled(this.btnStartAdv, !0),
            this.btnStartAdv.visible = !0,
            this.grpBuyComp.visible = !1;
            else {
                4 == this.data.progress ? null == this.jinjieAnim && (this.jinjieAnim = SpineUtil.createAnimate("hakensa_shenyufanchang4"), this.grpAnim.addChild(this.jinjieAnim), this.jinjieAnim.x = -14, this.jinjieAnim.y = 39) : 5 == this.data.progress && null == this.jinjieAnim2 && (this.jinjieAnim2 = SpineUtil.createAnimate("hakensa_shenyufanchang"), this.grpAnim.addChild(this.jinjieAnim2), this.jinjieAnim2.x = -14, this.jinjieAnim2.y = 39),
                this.grpBuyComp.visible = !1,
                this.btnStartAdv.visible = !1,
                this.grpAnim.visible = !0,
                MainManager.stage.touchEnabled = MainManager.stage.touchChildren = !1;
                var a = (4 == this.data.progress, "hebing"),
                o = 4 == this.data.progress ? "jinjieAnim": "jinjieAnim2";
                this.jinjieAnim && (this.jinjieAnim.visible = !1),
                this.jinjieAnim2 && (this.jinjieAnim2.visible = !1),
                this[o].visible = !0,
                this[o].play(a, 1, 0, {
                    playEnd: function() {
                        DisplayUtil.setEnabled(n.btnStartAdv, !0),
                        n.btnStartAdv.visible = !0,
                        n.grpBuyComp.visible = !1,
                        n.grpAnim.visible = !1,
                        MainManager.stage.touchEnabled = MainManager.stage.touchChildren = !0
                    }
                })
            } else this.btnStartAdv.visible = !1,
            this.grpBuyComp.visible = !0;
            if (DisplayUtil.removeAllChild(this.grpComps), 4 == this.data.allProgress) for (var r = 1; r <= this.data.allProgress; r++) {
                var s = new t.AdvancedPetBackCompItem;
                s.setData(this.data.taskId, r, r <= t.AdvancedPetBackStore.petAdvInfos.getValue(this.data.petId).curProgress),
                this.grpComps.addChild(s),
                s.horizontalCenter = this.PosX4Arr[r - 1],
                s.y = this.PosY4Arr[r - 1]
            } else if (5 == this.data.allProgress) for (var r = 1; r <= this.data.allProgress; r++) {
                var s = new t.AdvancedPetBackCompItem;
                s.setData(this.data.taskId, r, r <= t.AdvancedPetBackStore.petAdvInfos.getValue(this.data.petId).curProgress),
                this.grpComps.addChild(s),
                s.horizontalCenter = this.PosX5Arr[r - 1],
                s.y = this.PosY5Arr[r - 1]
            }
        },
        n.prototype.destroy = function() {
            EventManager.removeEventListener(t.AdvancedPetBackStore.RefreshPanel, this.initPanel, this),
            e.prototype.destroy.call(this)
        },
        n.prototype.Try2GetPet = function() {
            var e = new t.NecessaryPop(this.data.petId);
            this.service.openPop(e)
        },
        n.prototype.Try2GetPet2 = function() {
            var e = t.AdvancedPetBackStore.petAdvH5Jump2Get.getValue(this.data.taskId),
            n = t.AdvancedPetBackStore.petAdvFlashJump2Get.getValue(this.data.taskId);
            if (e) {
                if (e.indexOf("|") > 0 && (e = e.split("|")[0]), "yinzi" == e) ModuleManager.showModuleByID(15, {
                    type: "7",
                    petId: "" + this.data.petId
                });
                else if (!this.SpecialJump(e)) {
                    var i = 0;
                    i = Number(e),
                    ModuleManager.showModuleByID(i)
                }
            } else n ? Alarm.show("互通版暂未开放该精灵关卡\n可以前往网页版挑战获得") : (IS_RELEASE || console.warn("页游也没有获得途径！"), Alarm.show("互通版暂未开放该精灵关卡\n可以前往网页版挑战获得"))
        },
        n.prototype.SpecialJump = function(t) {
            switch (t) {
            case "SP1":
                return ModuleManager.CloseAll(),
                ModuleManager.showModuleByID(18, {
                    type: 1,
                    subType: "EXPLOIT",
                    childParam: 3
                }),
                !0
            }
            return ! 1
        },
        n
    } (BasicPanel);
    t.DetailPanel = e,
    __reflect(e.prototype, "advancedPetBackStore.DetailPanel")
} (advancedPetBackStore || (advancedPetBackStore = {}));
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
advancedPetBackStore; !
function(t) {
    var e = function(e) {
        function n(t) {
            var n = e.call(this) || this;
            return n.skinName = "AdvancedPetBackStoreHighlightSkin",
            n.taskId = Number(t),
            n
        }
        return __extends(n, e),
        n.prototype.childrenCreated = function() {
            var n = this;
            e.prototype.childrenCreated.call(this);
            var i = PetAdvanceXMLInfo.getTaskInfo(this.taskId),
            a = i.AllProgress,
            o = i.Advances.MonsterId,
            r = t.AdvancedPetBackStore.petAdvInfos.getValue(o).curProgress;
            this.appearAnim = SpineUtil.createAnimate(5 == a ? "mark5": "mark"),
            this.grpAnim.addChild(this.appearAnim),
            this.appearAnim.visible = !1,
            this.bg.width = egret.lifecycle.stage.stageWidth;
            for (var s = 0; 5 > s; s++) a - 1 > s || DisplayUtil.removeForParent(this["star_" + s]);
            MainManager.stage.touchEnabled = MainManager.stage.touchChildren = !1,
            egret.setTimeout(function() {
                n.appearAnim.visible = !0,
                n.appearAnim.play("jindu" + r, 1, 0, {
                    playEnd: function() {
                        MainManager.stage.touchEnabled = MainManager.stage.touchChildren = !0
                    }
                })
            },
            this, 200),
            r == a ? (ImageButtonUtil.add(this.btnGoTo,
            function() {
                n.hide(),
                EventManager.dispatchEventWith(t.AdvancedPetBackStore.OpenDetail, !0, {
                    petId: o,
                    allProgress: a,
                    progress: r,
                    taskId: n.taskId
                })
            },
            this), this.btnGoTo.visible = !1, egret.setTimeout(function() {
                n.appearAnim.visible = !0,
                MainManager.stage.touchEnabled = MainManager.stage.touchChildren = !1,
                n.appearAnim.play("jindu" + (a + 1), 1, 0, {
                    playEnd: function() {
                        MainManager.stage.touchEnabled = MainManager.stage.touchChildren = !0,
                        n.btnGoTo.visible = !0,
                        n.appearAnim.visible = !1
                    }
                })
            },
            this, 440)) : this.btnGoTo.visible = !1,
            this.tips.touchEnabled = !1,
            this.title.touchEnabled = !1,
            this.title.pixelHitTest = !0,
            this.imgPet.source = ClientConfig.getPetAdvBackPath(this.taskId) + ("pet_" + o + ".png")
        },
        n
    } (PopView);
    t.HighlightPop = e,
    __reflect(e.prototype, "advancedPetBackStore.HighlightPop")
} (advancedPetBackStore || (advancedPetBackStore = {}));
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
advancedPetBackStore; !
function(t) {
    var e = function(e) {
        function n() {
            var t = e.call(this) || this;
            return t.skinName = "AdvancedPetBackStoreEnterPanelSkin",
            t
        }
        return __extends(n, e),
        n.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.addEvent(),
            this.update(),
            this.adaptBgByScale(this.bg);
            var n = t.AdvancedPetBackStore.lastDate.getTime() - SystemTimerManager.sysDate.getTime();
            n = n / 60 / 60 / 1e3;
            var i = n / 24;
            i = Math.ceil(i),
            n = Math.ceil(n),
            this.txtRestDay.textFlow = [{
                text: "本期剩余时间",
                style: {
                    textColor: 14515020
                }
            },
            {
                text: 24 > n ? n.toString() : i.toString(),
                style: {
                    textColor: 16758856
                }
            },
            {
                text: 24 > n ? "小时": "天",
                style: {
                    textColor: 14515020
                }
            }]
        },
        n.prototype.addEvent = function() {
            var e = this;
            ImageButtonUtil.add(this.btnStore,
            function() {
                StatLogger.log("2023运营活动", "神谕进阶返场", "主界面-点击【商城】按钮");
                var n = new t.StorePop(e.service);
                PopViewManager.getInstance().openView(n, {
                    useStageBg: !1,
                    maskBgStyle: null,
                    maskShapeStyle: {
                        maskAlpha: .85,
                        maskColor: 0
                    },
                    effStyle: {
                        showAniType: PopEffStyle.CENTER,
                        isMoveToCenter: !1,
                        horizontalCenterOffset: 0,
                        verticalCenterOffset: 0,
                        relativeToPoint: null
                    }
                })
            },
            this),
            ImageButtonUtil.add(this.btnTips,
            function() {
                StatLogger.log("2023运营活动", "神谕进阶返场", "主界面-点击查看【规则说明】"),
                tipsPop.TipsPop.openHelpPopById(171)
            },
            this),
            EventManager.addEventListener(t.AdvancedPetBackStore.RefreshPanel, this.update, this)
        },
        n.prototype.update = function(e) {
            this.enterBtns = new eui.ArrayCollection,
            this._list.itemRenderer = t.AdvancedPetBackStoreEnterBtn,
            this._list.dataProvider = this.enterBtns;
            for (var n = [], i = PetAdvanceXMLInfo.getAllBackInfo(), a = 0; a < i.length; a++) {
                var o = PetAdvanceXMLInfo.getTaskInfo(i[a].TaskId),
                r = i[a],
                s = t.AdvancedPetBackStore.petAdvInfos.getValue(i[a].MonsterId);
                n.push({
                    taskId: r.TaskId,
                    petId: r.MonsterId,
                    allProgress: o.AllProgress,
                    progress: s.ct > 0 ? -1 : s.curProgress
                })
            }
            this.enterBtns.replaceAll(n)
        },
        n.prototype.destroy = function() {
            EventManager.removeEventListener(t.AdvancedPetBackStore.RefreshPanel, this.update, this),
            e.prototype.destroy.call(this)
        },
        n
    } (BasicPanel);
    t.MainPanel = e,
    __reflect(e.prototype, "advancedPetBackStore.MainPanel")
} (advancedPetBackStore || (advancedPetBackStore = {}));
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
advancedPetBackStore; !
function(t) {
    var e = function(e) {
        function n(t) {
            var n = e.call(this) || this;
            return n.skinName = "AdvancedpetbackNecessaryPopSkin",
            n.petId = t,
            n
        }
        return __extends(n, e),
        n.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.taskId = t.AdvancedPetBackStore.taskId2petId.getKey(this.petId),
            this.moduleStr = t.AdvancedPetBackStore.petAdvH5Jump2Get.getValue(this.taskId);
            var n = t.AdvancedPetBackStore.petAdvFlashJump2Get.getValue(this.taskId);
            this.moduleStr && this.moduleStr.indexOf("|") > 0 && (this.moduleStr = this.moduleStr.split("|")[1]),
            this.moduleStr || n ? this.goBtn.visible = !0 : this.goBtn.visible = !1,
            this.addEvent(),
            this.checkState(),
            this["init_" + this.petId]()
        },
        n.prototype.addEvent = function() {
            var t = this;
            ImageButtonUtil.add(this.close,
            function() {
                t.hide()
            },
            this),
            ImageButtonUtil.add(this.goBtn,
            function() {
                if (StatLogger.log("运营活动2024", "神谕进阶返场增加两件套购买", "提示弹窗-点击免费【前往获得】"), t.moduleStr) {
                    if ("yinzi" == t.moduleStr) ModuleManager.showModuleByID(15, {
                        type: "7",
                        petId: "" + t.petId
                    });
                    else {
                        var e = 0;
                        e = Number(t.moduleStr),
                        ModuleManager.showModuleByID(e)
                    }
                    t.hide()
                } else Alarm.show("互通版暂未开放该精灵关卡\n可以前往网页版挑战获得")
            },
            this),
            ImageButtonUtil.add(this.oneKeyFif,
            function() {
                PayManager.canPay() ? t["buyFif_" + t.petId]() : Alarm.show("互通版暂未开放该精灵关卡\n可以前往网页版挑战获得"),
                StatLogger.log("运营活动2024", "神谕进阶返场增加两件套购买", "提示弹窗-点击【一键购买】")
            },
            this, !1),
            ImageButtonUtil.add(this.oneKeyEff,
            function() {
                PayManager.canPay() ? t["buyEff_" + t.petId]() : Alarm.show("互通版暂未开放该精灵关卡\n可以前往网页版挑战获得"),
                StatLogger.log("运营活动2024", "神谕进阶返场增加两件套购买", "提示弹窗-点击【一键购买】")
            },
            this, !1)
        },
        n.prototype.checkState = function() {
            var t = PetManager.getPetInfo(PetManager.defaultTime);
            this.condition_effect = t.effectCount > 0,
            this.condition_fifthSkill = !0;
            var e = SkillXMLInfo.getAllHideSkills(this.petId);
            return e.length > 0 && 0 != e[0] && (this.condition_fifthSkill = null != t.hideSKill),
            this.condition_effect || this.condition_fifthSkill ? this.condition_effect ? this.condition_fifthSkill ? void 0 : (this.effMc.visible = !1, void(this.fifMc.x = 306)) : (this.fifMc.visible = !1, void(this.effMc.x = 306)) : (this.fifMc.x = 156, void(this.effMc.x = 466))
        },
        n.prototype.init_3704 = function() {
            this.goBtn.visible = !1
        },
        n.prototype.buyEff_3704 = function() {
            var t = this;
            KTool.getBitSet([9319],
            function(e) {
                1 == e[0] ? Alarm.show("已有同名精灵进行过能力提升\n请检查背包首发精灵是否正确") : KTool.buyProductByCallback(260538, 1,
                function() {
                    SocketConnection.sendByQueue(41950, [38, 1],
                    function() {
                        BubblerManager.getInstance().showText(PetXMLInfo.getName(3704) + "已成功获得专属特性"),
                        PetManager.upDateBagPetInfo(PetManager.defaultTime,
                        function() {
                            t.condition_effect || t.condition_fifthSkill ? t.hide() : t.checkState()
                        })
                    })
                })
            })
        },
        n.prototype.buyFif_3704 = function() {
            var t = this;
            KTool.getBitSet([9320],
            function(e) {
                1 == e[0] ? Alarm.show("已有同名精灵进行过能力提升\n请检查背包首发精灵是否正确") : KTool.buyProductByCallback(260539, 1,
                function() {
                    SocketConnection.sendByQueue(41950, [38, 2],
                    function() {
                        BubblerManager.getInstance().showText(PetXMLInfo.getName(3704) + "已成功获得第五技能"),
                        PetManager.upDateBagPetInfo(PetManager.defaultTime,
                        function() {
                            t.condition_effect || t.condition_fifthSkill ? t.hide() : t.checkState()
                        })
                    })
                })
            })
        },
        n.prototype.init_3670 = function() {
            this.oneKeyFif.visible = !1,
            this.oneKeyEff.visible = !1
        },
        n.prototype.buyFif_3670 = function() {},
        n.prototype.buyEff_3670 = function() {},
        n.prototype.init_3388 = function() {},
        n.prototype.buyFif_3388 = function() {
            this.buy_3388()
        },
        n.prototype.buyEff_3388 = function() {
            this.buy_3388()
        },
        n.prototype.buy_3388 = function() {
            var t = this;
            KTool.getMultiValue([6879],
            function(e) {
                1 == KTool.getBit(e[0], 2) ? Alarm.show("已有同名精灵进行过能力提升\n请检查背包首发精灵是否正确") : KTool.buyProductByCallback(250583, 1,
                function() {
                    SocketConnection.sendByQueue(43258, [6, 1],
                    function() {
                        PetManager.upDateBagPetInfo(PetManager.defaultTime,
                        function() {
                            t.hide()
                        }),
                        BubblerManager.getInstance().showText(PetXMLInfo.getName(3388) + "已成功获得第五技能和专属特性")
                    })
                })
            })
        },
        n.prototype.init_3514 = function() {
            this.oneKeyFif.visible = !1,
            this.oneKeyEff.visible = !1
        },
        n.prototype.buyFif_3514 = function() {},
        n.prototype.buyEff_3514 = function() {},
        n.prototype.init_3507 = function() {
            this.oneKeyFif.visible = !1,
            this.oneKeyEff.visible = !1
        },
        n.prototype.buyFif_3507 = function() {},
        n.prototype.buyEff_3507 = function() {},
        n.prototype.init_3954 = function() {
            this.oneKeyFif.visible = !1,
            this.oneKeyEff.visible = !1
        },
        n.prototype.buyFif_3954 = function() {},
        n.prototype.buyEff_3954 = function() {},
        n.prototype.init_3724 = function() {
            this.oneKeyFif.visible = !1,
            this.oneKeyEff.visible = !1
        },
        n.prototype.buyFif_3724 = function() {},
        n.prototype.buyEff_3724 = function() {},
        n.prototype.init_3716 = function() {
            this.oneKeyFif.visible = !1,
            this.oneKeyEff.visible = !1
        },
        n.prototype.buyFif_3716 = function() {},
        n.prototype.buyEff_3716 = function() {},
        n.prototype.init_3705 = function() {
            this.oneKeyFif.visible = !1,
            this.oneKeyEff.visible = !1
        },
        n.prototype.buyFif_3705 = function() {},
        n.prototype.buyEff_3705 = function() {},
        n.prototype.init_3506 = function() {
            this.oneKeyFif.visible = !1,
            this.oneKeyEff.visible = !1
        },
        n.prototype.buyFif_3506 = function() {},
        n.prototype.buyEff_3506 = function() {},
        n.prototype.init_3156 = function() {
            this.oneKeyFif.visible = !1,
            this.oneKeyEff.visible = !1
        },
        n.prototype.buyFif_3156 = function() {},
        n.prototype.buyEff_3156 = function() {},
        n
    } (PopView);
    t.NecessaryPop = e,
    __reflect(e.prototype, "advancedPetBackStore.NecessaryPop")
} (advancedPetBackStore || (advancedPetBackStore = {}));
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
advancedPetBackStore; !
function(t) {
    var e = function(e) {
        function n(t) {
            var n = e.call(this) || this;
            return n.coinBCnt = 0,
            n.skinName = "AdvancedPetBackStoreMainSkin",
            n.service = t,
            n
        }
        return __extends(n, e),
        n.prototype.childrenCreated = function() {
            var t = this;
            e.prototype.childrenCreated.call(this),
            this.adaptRightContent(this.grpRight, 75),
            this.init(),
            KTool.getMultiValue([123350],
            function(e) {
                0 == e[0] ? SocketConnection.sendWithCallback(41804,
                function() {
                    t.update()
                },
                [0, 1]) : t.update()
            })
        },
        n.prototype.init = function() {
            var e = this;
            ImageButtonUtil.add(this.btnClose,
            function() {
                e.hide()
            },
            this),
            ImageButtonUtil.add(this.btnBuyCoin,
            function() {
                StatLogger.log("2023运营活动", "神谕进阶返场", "商城界面-点击【+】按钮");
                var i = new t.BuyCoinPop(e.service);
                PopViewManager.getInstance().openView(i, {
                    useStageBg: !1,
                    maskBgStyle: null,
                    maskShapeStyle: {
                        maskAlpha: .85,
                        maskColor: 0
                    },
                    effStyle: {
                        showAniType: PopEffStyle.CENTER,
                        isMoveToCenter: !1,
                        horizontalCenterOffset: 0,
                        verticalCenterOffset: 0,
                        relativeToPoint: null
                    },
                    clickMaskHandler: function() {
                        PopViewManager.getInstance().hideAll();
                        var t = new n(e.service);
                        PopViewManager.getInstance().openView(t, {
                            useStageBg: !1,
                            maskBgStyle: null,
                            maskShapeStyle: {
                                maskAlpha: .85,
                                maskColor: 0
                            },
                            effStyle: {
                                showAniType: PopEffStyle.CENTER,
                                isMoveToCenter: !1,
                                horizontalCenterOffset: 0,
                                verticalCenterOffset: 0,
                                relativeToPoint: null
                            }
                        })
                    },
                    caller: e
                }),
                e.hide()
            },
            this),
            ImageButtonUtil.add(this.btnRefresh,
            function() {
                e.freeTime > 0 ? (SocketConnection.sendWithPromise(41804, [0, 2]).then(function() {
                    e.update()
                }), EventManager.dispatchEventWith(t.AdvancedPetBackStore.RefreshGoods)) : e.coinBCnt >= e.refreshPay ? Alert.show("是否消耗<font color='#FF0001'>通用神谕之证*" + e.refreshPay.toString() + "</font>，刷新商店？",
                function() {
                    SocketConnection.sendWithPromise(41804, [0, 3]).then(function() {
                        e.update()
                    }),
                    EventManager.dispatchEventWith(t.AdvancedPetBackStore.RefreshGoods)
                }) : BubblerManager.getInstance().showText("通用神谕之证数量不足！")
            },
            this),
            EventManager.addEventListener(GameEvent.NOTIFY_ITEM_CHANGE, this.onItemChange, this),
            EventManager.addEventListener(t.AdvancedPetBackStore.RefreshStore, this.update, this),
            EventManager.addEventListener(t.AdvancedPetBackStore.OpenDetail, this.hide, this),
            this.goodsArr = [];
            for (var i = 0; 6 > i; i++) {
                var a = new t.AdvancedPetBackGoodsItem;
                this.goodsArr.push(a),
                this.grpItem.addChild(a)
            }
        },
        n.prototype.update = function(e) {
            var n = this;
            this.coinBCnt = ItemManager.getNumByID(1724859),
            this.txtCoin.text = this.coinBCnt.toString(),
            KTool.getMultiValue([123350, 123351, 123352, 123355, 20387, 123357],
            function(e) {
                n.storeInfos = [];
                for (var i = 0; 3 > i; i++) for (var a = 0; 4 > a; a++) n.storeInfos.push(KTool.getByte(e[i], a));
                n.canBuyInfos = [];
                for (var i = 0; 6 > i; i++) n.canBuyInfos.push(KTool.getBit(e[3], i + 1));
                n.hasBuyInfos = [];
                for (var i = 6; 12 > i; i++) n.hasBuyInfos.push(KTool.getBit(e[3], i + 1));
                n.freeTime = t.AdvancedPetBackStore.rollAllTime - e[5],
                n.payTime = e[4],
                n.freeTime > 0 ? (n.imgRefresh.source = "advanced_pet_back_store_main_imgRresh_png", n.txtRefreshCost.text = "免费(" + n.freeTime + ")刷新", n.imgRefresh.x = 10) : (n.imgRefresh.source = "advanced_pet_back_store_main_1724859_png", n.refreshPay = n.payTime <= 0 ? PetAdvanceXMLInfo.backRefCost: n.payTime * PetAdvanceXMLInfo.backRefAddCost + PetAdvanceXMLInfo.backRefCost, n.refreshPay = n.refreshPay < PetAdvanceXMLInfo.backRefMaxCost ? n.refreshPay: PetAdvanceXMLInfo.backRefMaxCost, n.txtRefreshCost.text = n.refreshPay + "刷新", n.imgRefresh.x = 18.5);
                for (var i = 0; 6 > i; i++) {
                    var o = n.storeInfos[2 * i],
                    r = t.AdvancedPetBackStore.taskId2petId.getValue(o);
                    if (!r && !IS_RELEASE) return void Alarm.show("!! 不存在的backid " + o);
                    var s = PetAdvanceXMLInfo.getBackInfo(r).PerNeedCoinB,
                    c = "";
                    1 == n.hasBuyInfos[i] ? c = "hasGot": 0 == n.canBuyInfos[i] && (c = "notYet"),
                    n.goodsArr[i].setData(i + 1, o, r, s, n.storeInfos[2 * i + 1], c)
                }
            })
        },
        n.prototype.onItemChange = function(t) {
            void 0 === t && (t = null),
            this.coinBCnt = ItemManager.getNumByID(1724859),
            this.txtCoin.text = this.coinBCnt.toString()
        },
        n.prototype.adaptRightContent = function(t, e) {
            void 0 === e && (e = 0),
            this.parent.addChild(t),
            t.right = e,
            t.top = 24
        },
        n.prototype.hide = function() {
            EventManager.removeEventListener(t.AdvancedPetBackStore.RefreshStore, this.update, this),
            EventManager.removeEventListener(t.AdvancedPetBackStore.OpenDetail, this.hide, this),
            EventManager.removeEventListener(GameEvent.NOTIFY_ITEM_CHANGE, this.onItemChange, this),
            this.grpRight.visible = !1,
            DisplayUtil.removeForParent(this.grpRight),
            e.prototype.hide.call(this)
        },
        n
    } (PopView);
    t.StorePop = e,
    __reflect(e.prototype, "advancedPetBackStore.StorePop")
} (advancedPetBackStore || (advancedPetBackStore = {}));
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
advancedPetBackStore; !
function(t) {
    var e = function(e) {
        function n() {
            var t = e.call(this) || this;
            return t.skinName = "AdvancedPetBackStoreDetailPanelCompSkin",
            t
        }
        return __extends(n, e),
        n.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this)
        },
        n.prototype.setData = function(e, n, i) {
            this.imgCompBg.source = ClientConfig.getPetAdvBackPath(e) + ("compBg_" + e + ".png"),
            this.imgComp.source = ClientConfig.getPetAdvBackPath(e) + ("comp_" + e + "_" + n + ".png"),
            this.grpUnlock.source = ClientConfig.getPetAdvBackPath(e) + ("grpUnlock_" + e + ".png"),
            this.grpUnlock.visible = !i,
            this.txtCompName.text = t.AdvancedPetBackStore.petAdvCompName.getValue(e)[n - 1],
            this.txtCompID.text = n + "/" + t.AdvancedPetBackStore.petAdvCompName.getValue(e).length
        },
        n
    } (eui.ItemRenderer);
    t.AdvancedPetBackCompItem = e,
    __reflect(e.prototype, "advancedPetBackStore.AdvancedPetBackCompItem")
} (advancedPetBackStore || (advancedPetBackStore = {}));
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
advancedPetBackStore; !
function(t) {
    var e = function(e) {
        function n() {
            var t = e.call(this) || this;
            return t.skinName = "AdvancedPetBackStoreGoodsItemSkin",
            t
        }
        return __extends(n, e),
        n.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.shuaxinAnim = SpineUtil.createAnimate("refresh"),
            this.grpAnim.addChild(this.shuaxinAnim),
            this.shuaxinAnim.x = 7,
            this.shuaxinAnim.y = -15,
            this.shuaxinAnim.scaleX = 1.02,
            this.shuaxinAnim.scaleY = 1.23,
            this.grpAnim.visible = !1,
            EventManager.addEventListener(t.AdvancedPetBackStore.RefreshGoods, this.playRefreshAnim, this)
        },
        n.prototype.playRefreshAnim = function(t) {
            var e = this;
            this.grpAnim.visible = !0,
            MainManager.stage.touchEnabled = MainManager.stage.touchChildren = !1,
            this.shuaxinAnim.play("shuaxin", 1, 0, {
                playEnd: function() {
                    MainManager.stage.touchEnabled = MainManager.stage.touchChildren = !0,
                    e.grpAnim.visible = !1
                }
            })
        },
        n.prototype.setData = function(e, n, i, a, o, r) {
            var s = this;
            this.idx = e,
            this.cost = a,
            this.taskId = n,
            this.imgComp.source = ClientConfig.getPetAdvBackPath(n) + ("comp_" + n + "_" + o + ".png"),
            this.txtCompName.text = t.AdvancedPetBackStore.petAdvCompName.getValue(n)[o - 1],
            this.txtPetName.text = PetXMLInfo.getName(i),
            ImageButtonUtil.removeAll(this),
            "notYet" == r ? (this.imgBuyComp.source = "advanced_pet_back_store_main_grpNotYet_png", this.txtBuyCost.text = "") : "hasGot" == r ? (this.imgBuyComp.source = "advanced_pet_back_store_main_grpHasGot_png", this.txtBuyCost.text = "") : (this.imgBuyComp.source = "advanced_pet_back_store_main_btnBuyComp_png", this.txtBuyCost.text = a.toString(), ImageButtonUtil.add(this.btnBuyComp,
            function() {
                ItemManager.getNumByID(1724859) >= a ? Alert.show("是否消耗<font color='#FF0001'>通用神谕之证*" + s.cost.toString() + "</font>，购买<font color='#FF0001'>" + s.txtPetName.text + "</font>的组件<font color='#FF0001'>" + s.txtCompName.text + "</font>？",
                function() {
                    SocketConnection.sendWithPromise(41804, [0, 3 + s.idx]).then(function() {
                        EventManager.dispatchEventWith(t.AdvancedPetBackStore.RefreshStore, !0, s.taskId)
                    })
                }) : (StatLogger.log("2023运营活动", "神谕进阶返场", "商城界面-点击任意【购买】按钮时道具数量不足"), BubblerManager.getInstance().showText("通用神谕之证数量不足！"))
            },
            this, !1))
        },
        n.prototype.destroy = function() {
            EventManager.removeAll(this),
            ImageButtonUtil.removeAll(this)
        },
        n
    } (eui.ItemRenderer);
    t.AdvancedPetBackGoodsItem = e,
    __reflect(e.prototype, "advancedPetBackStore.AdvancedPetBackGoodsItem")
} (advancedPetBackStore || (advancedPetBackStore = {}));
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
advancedPetBackStore; !
function(t) {
    var e = function(e) {
        function n() {
            var t = e.call(this) || this;
            return t.skinName = "AdvancedPetBackStoreEnterBtnSkin",
            t
        }
        return __extends(n, e),
        n.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.levelupAnim = SpineUtil.createAnimate("lever_up"),
            this.levelupAnim.play("jinjie", -1),
            this.imgCanAdv.addChild(this.levelupAnim),
            this.imgCanAdv.touchChildren = this.imgCanAdv.touchEnabled = !1,
            this.levelupAnim.scaleX = 1.05,
            this.levelupAnim.scaleY = 1.15
        },
        n.prototype.dataChanged = function() {
            var i = this;
            if (e.prototype.dataChanged.call(this), this.imgPet.source = "enter_btn_" + this.data.taskId + "_png", this.txtPetName.text = PetXMLInfo.getName(this.data.petId), this.data.progress < 0) {
                this.txtProgress.text = "已进阶",
                this.imgProgress.source = "",
                this.grpHasAdvance.visible = !0,
                this.imgCanAdv.visible = !1;
                for (var a = 1; 5 >= a; a++) this["star" + a].source = ""
            } else if (this.data.progress < this.data.allProgress) {
                if (this.txtProgress.text = "", this.data.progress + "/" + this.data.allProgress, 4 == this.data.allProgress) {
                    for (var a = 1; 4 >= a; a++) this["star" + a].x = n.starPos4[a - 1],
                    a <= this.data.progress ? this["star" + a].source = "advanced_pet_back_store_main_imgProgress_star1_png": this["star" + a].source = "advanced_pet_back_store_main_imgProgress_star0_png";
                    this.star5.source = ""
                } else if (5 == this.data.allProgress) for (var a = 1; 5 >= a; a++) this["star" + a].x = n.starPos5[a - 1],
                a <= this.data.progress ? this["star" + a].source = "advanced_pet_back_store_main_imgProgress_star1_png": this["star" + a].source = "advanced_pet_back_store_main_imgProgress_star0_png";
                this.imgProgress.source = "advanced_pet_back_store_main_imgProgress_png",
                this.grpHasAdvance.visible = !1,
                this.imgCanAdv.visible = !1
            } else {
                this.txtProgress.text = "",
                this.imgProgress.source = "advanced_pet_back_store_main_imgProgress_canAdv_png",
                this.grpHasAdvance.visible = !1,
                this.imgCanAdv.visible = !0;
                for (var a = 1; 5 >= a; a++) this["star" + a].source = ""
            }
            ImageButtonUtil.removeAll(this),
            this.data.progress >= 0 ? (this.grpLook.visible = !0, ImageButtonUtil.add(this.btnMain,
            function() {
                EventManager.dispatchEventWith(t.AdvancedPetBackStore.OpenDetail, !0, i.data)
            },
            this, !1, !0)) : this.grpLook.visible = !1,
            ImageButtonUtil.add(this.btnShowInfo,
            function() {
                StatLogger.log("2023运营活动", "神谕进阶返场", "主界面-点击任意【放大镜】查看进阶详情"),
                ModuleManager.showModuleByID(262, {
                    type: "pet",
                    data: i.data.petId,
                    isNeedShowAdv: !0
                })
            },
            this)
        },
        n.prototype.destroy = function() {
            ImageButtonUtil.removeAll(this)
        },
        n.starPos4 = [44, 92, 140, 188],
        n.starPos5 = [20, 68, 116, 164, 212],
        n
    } (eui.ItemRenderer);
    t.AdvancedPetBackStoreEnterBtn = e,
    __reflect(e.prototype, "advancedPetBackStore.AdvancedPetBackStoreEnterBtn")
} (advancedPetBackStore || (advancedPetBackStore = {}));
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
generateEUI.paths["resource/eui_skins/AdvancedpetbackNecessaryPopSkin.exml"] = window.AdvancedpetbackNecessaryPopSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["oneKeyFif", "fifMc", "oneKeyEff", "effMc", "goBtn", "close"],
        this.height = 411,
        this.width = 779,
        this.elementsContent = [this._Group1_i()]
    }
    __extends(e, t);
    var n = e.prototype;
    return n._Group1_i = function() {
        var t = new eui.Group;
        return t.height = 411,
        t.horizontalCenter = 0,
        t.verticalCenter = 0,
        t.width = 779,
        t.elementsContent = [this._Image1_i(), this._Label1_i(), this._Image2_i(), this.fifMc_i(), this.effMc_i(), this.goBtn_i(), this.close_i()],
        t
    },
    n._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 411,
        t.source = "advanced_pet_back_store_main_zu_2_png",
        t.width = 779,
        t.x = 0,
        t.y = 0,
        t
    },
    n._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 20,
        t.text = "需要拥有该精灵以下组件才可以进行进阶",
        t.textColor = 16769417,
        t.x = 230,
        t.y = 95,
        t
    },
    n._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "AdvancedPetBackNecessaryPop_title_png",
        t.x = 300,
        t.y = 22,
        t
    },
    n.fifMc_i = function() {
        var t = new eui.Group;
        return this.fifMc = t,
        t.height = 162,
        t.width = 168,
        t.x = 156,
        t.y = 148,
        t.elementsContent = [this._Image3_i(), this._Image4_i(), this._Label2_i(), this.oneKeyFif_i()],
        t
    },
    n._Image3_i = function() {
        var t = new eui.Image;
        return t.bottom = 0,
        t.left = 0,
        t.right = 0,
        t.source = "advanced_pet_back_store_main_buyCompBg_png",
        t.top = 0,
        t
    },
    n._Image4_i = function() {
        var t = new eui.Image;
        return t.horizontalCenter = -.5,
        t.source = "AdvancedPetBackNecessaryPop_fifsign_png",
        t.verticalCenter = -3.5,
        t
    },
    n._Label2_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.left = 8,
        t.right = 8,
        t.size = 16,
        t.text = "第五技能",
        t.textAlign = "center",
        t.textColor = 16771293,
        t.y = 6,
        t
    },
    n.oneKeyFif_i = function() {
        var t = new eui.Image;
        return this.oneKeyFif = t,
        t.bottom = 0,
        t.source = "AdvancedPetBackNecessaryPop_oneKeyBtn_png",
        t.x = 0,
        t
    },
    n.effMc_i = function() {
        var t = new eui.Group;
        return this.effMc = t,
        t.height = 162,
        t.width = 168,
        t.x = 466,
        t.y = 148,
        t.elementsContent = [this._Image5_i(), this._Image6_i(), this._Label3_i(), this.oneKeyEff_i()],
        t
    },
    n._Image5_i = function() {
        var t = new eui.Image;
        return t.bottom = 0,
        t.left = 0,
        t.right = 0,
        t.source = "advanced_pet_back_store_main_buyCompBg_png",
        t.top = 0,
        t
    },
    n._Image6_i = function() {
        var t = new eui.Image;
        return t.horizontalCenter = 0,
        t.source = "AdvancedPetBackNecessaryPop_effsign_png",
        t.verticalCenter = 0,
        t
    },
    n._Label3_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.left = 8,
        t.right = 8,
        t.size = 16,
        t.text = "专属特性",
        t.textAlign = "center",
        t.textColor = 16771293,
        t.y = 6,
        t
    },
    n.oneKeyEff_i = function() {
        var t = new eui.Image;
        return this.oneKeyEff = t,
        t.bottom = 0,
        t.source = "AdvancedPetBackNecessaryPop_oneKeyBtn_png",
        t.visible = !0,
        t.x = 0,
        t
    },
    n.goBtn_i = function() {
        var t = new eui.Image;
        return this.goBtn = t,
        t.horizontalCenter = .5,
        t.source = "advanced_pet_back_store_detial_panel_btnToBuy_png",
        t.y = 362,
        t
    },
    n.close_i = function() {
        var t = new eui.Image;
        return this.close = t,
        t.source = "title_pop_2022_btnclose_png",
        t.x = 703.34,
        t.y = 68.73,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/AdvancedPetBackStoreBuyCoinPop.exml"] = window.AdvancedPetBackStoreBuyCoinPop = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["txtCoin", "btnBuyCoin", "grpRight", "btnClose", "btnGoto1", "btnGoto2", "btnBuy", "grpItem"],
        this.height = 542,
        this.width = 983,
        this.elementsContent = [this.grpRight_i(), this._Group1_i()]
    }
    __extends(e, t);
    var n = e.prototype;
    return n.grpRight_i = function() {
        var t = new eui.Group;
        return this.grpRight = t,
        t.height = 33,
        t.visible = !0,
        t.width = 149,
        t.x = 824,
        t.y = 10,
        t.elementsContent = [this._Image1_i(), this._Image2_i(), this.txtCoin_i(), this._Image3_i(), this.btnBuyCoin_i()],
        t
    },
    n._Image1_i = function() {
        var t = new eui.Image;
        return t.alpha = 0,
        t.height = 87.287,
        t.horizontalCenter = 0,
        t.source = "advanced_pet_back_store_main_img_di2_png",
        t.verticalCenter = 0,
        t.width = 225.159,
        t
    },
    n._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 21,
        t.source = "advanced_pet_back_store_main_img_di2_png",
        t.width = 133,
        t.x = 13,
        t.y = 6,
        t
    },
    n.txtCoin_i = function() {
        var t = new eui.Label;
        return this.txtCoin = t,
        t.fontFamily = "MFShangHei",
        t.size = 18.0101510119682,
        t.text = "99999",
        t.textAlign = "center",
        t.textColor = 12834813,
        t.width = 99,
        t.x = 28,
        t.y = 9,
        t
    },
    n._Image3_i = function() {
        var t = new eui.Image;
        return t.height = 32,
        t.source = "advanced_pet_back_store_main_1724859_png",
        t.width = 32,
        t.x = 0,
        t.y = 0,
        t
    },
    n.btnBuyCoin_i = function() {
        var t = new eui.Image;
        return this.btnBuyCoin = t,
        t.height = 21,
        t.source = "common_btn_add_png",
        t.width = 21,
        t.x = 128,
        t.y = 6,
        t
    },
    n._Group1_i = function() {
        var t = new eui.Group;
        return t.height = 600,
        t.width = 983,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image4_i(), this._Image5_i(), this.btnClose_i(), this.grpItem_i()],
        t
    },
    n._Image4_i = function() {
        var t = new eui.Image;
        return t.source = "advanced_pet_back_store_main_zu_2_png",
        t.visible = !0,
        t.x = 0,
        t
    },
    n._Image5_i = function() {
        var t = new eui.Image;
        return t.horizontalCenter = -35,
        t.source = "advanced_pet_back_buy_coin_title_png",
        t.y = 36,
        t
    },
    n.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.height = 33,
        t.source = "common_pop_btn_close_png",
        t.width = 33,
        t.x = 900,
        t.y = 83,
        t
    },
    n.grpItem_i = function() {
        var t = new eui.Group;
        return this.grpItem = t,
        t.height = 385,
        t.width = 780,
        t.x = 114,
        t.y = 111,
        t.layout = this._HorizontalLayout1_i(),
        t.elementsContent = [this.btnGoto1_i(), this.btnGoto2_i(), this.btnBuy_i()],
        t
    },
    n._HorizontalLayout1_i = function() {
        var t = new eui.HorizontalLayout;
        return t.gap = 22,
        t.horizontalAlign = "center",
        t
    },
    n.btnGoto1_i = function() {
        var t = new eui.Image;
        return this.btnGoto1 = t,
        t.source = "advanced_pet_back_buy_coin_btnGoto1_png",
        t.x = 102,
        t.y = 137,
        t
    },
    n.btnGoto2_i = function() {
        var t = new eui.Image;
        return this.btnGoto2 = t,
        t.source = "advanced_pet_back_buy_coin_btnGoto2_png",
        t.x = 356,
        t.y = 110,
        t
    },
    n.btnBuy_i = function() {
        var t = new eui.Image;
        return this.btnBuy = t,
        t.source = "advanced_pet_back_buy_coin_btnBuy_png",
        t.x = 558,
        t.y = 68,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/AdvancedPetBackStoreDetailPanelCompSkin.exml"] = window.AdvancedPetBackStoreDetailPanelCompSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["imgCompBg", "imgComp", "grpUnlock", "txtCompName", "txtCompID"],
        this.height = 160,
        this.width = 210,
        this.elementsContent = [this.imgCompBg_i(), this.imgComp_i(), this.grpUnlock_i(), this._Image1_i(), this.txtCompName_i(), this._Image2_i(), this.txtCompID_i()]
    }
    __extends(e, t);
    var n = e.prototype;
    return n.imgCompBg_i = function() {
        var t = new eui.Image;
        return this.imgCompBg = t,
        t.height = 105,
        t.horizontalCenter = 0,
        t.rotation = 315,
        t.scale9Grid = new egret.Rectangle(3, 3, 48, 49),
        t.source = "compBg_4_png",
        t.verticalCenter = 0,
        t.visible = !0,
        t.width = 105,
        t.x = 41,
        t.y = 17,
        t
    },
    n.imgComp_i = function() {
        var t = new eui.Image;
        return this.imgComp = t,
        t.horizontalCenter = 0,
        t.verticalCenter = -3,
        t
    },
    n.grpUnlock_i = function() {
        var t = new eui.Image;
        return this.grpUnlock = t,
        t.horizontalCenter = 0,
        t.rotation = 315,
        t.source = "grpUnlock_1_png",
        t.verticalCenter = 0,
        t.visible = !0,
        t
    },
    n._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 28,
        t.horizontalCenter = 0,
        t.source = "advanced_pet_back_store_detial_panel_compNameLine_png",
        t.verticalCenter = 47,
        t.width = 204,
        t
    },
    n.txtCompName_i = function() {
        var t = new eui.Label;
        return this.txtCompName = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = 0,
        t.size = 18,
        t.stroke = 1,
        t.strokeColor = 5791135,
        t.text = "灾雷魔刃",
        t.textAlign = "center",
        t.textColor = 16777215,
        t.verticalCenter = 47,
        t
    },
    n._Image2_i = function() {
        var t = new eui.Image;
        return t.horizontalCenter = 0,
        t.source = "advanced_pet_back_store_detial_panel_compIDLine_png",
        t.y = -2,
        t
    },
    n.txtCompID_i = function() {
        var t = new eui.Label;
        return this.txtCompID = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = 0,
        t.size = 18,
        t.textAlign = "center",
        t.textColor = 16766545,
        t.verticalCenter = -68,
        t.x = 79,
        t.y = -98,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/AdvancedPetBackStoreDetailPanelSkin.exml"] = window.AdvancedPetBackStoreDetailPanelSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["imgBg", "grpComps", "btnToBuy", "grpBuyComp", "btnStartAdv", "btnPetInfo", "btnStore", "grpAnim", "btnPetBag", "btnGet"],
        this.height = 640,
        this.width = 1290,
        this.elementsContent = [this.imgBg_i(), this.grpComps_i(), this.grpBuyComp_i(), this.btnStartAdv_i(), this.btnPetInfo_i(), this.btnStore_i(), this.grpAnim_i(), this.btnPetBag_i(), this.btnGet_i()]
    }
    __extends(e, t);
    var n = e.prototype;
    return n.imgBg_i = function() {
        var t = new eui.Image;
        return this.imgBg = t,
        t.height = 640,
        t.horizontalCenter = 0,
        t.verticalCenter = 0,
        t.width = 1290,
        t
    },
    n.grpComps_i = function() {
        var t = new eui.Group;
        return this.grpComps = t,
        t.horizontalCenter = 0,
        t.top = 0,
        t
    },
    n.grpBuyComp_i = function() {
        var t = new eui.Group;
        return this.grpBuyComp = t,
        t.height = 50,
        t.horizontalCenter = -6,
        t.visible = !0,
        t.width = 400,
        t.y = 557,
        t.elementsContent = [this.btnToBuy_i(), this._Image1_i()],
        t
    },
    n.btnToBuy_i = function() {
        var t = new eui.Image;
        return this.btnToBuy = t,
        t.height = 46,
        t.source = "advanced_pet_back_store_detial_panel_btnToBuy_png",
        t.width = 134,
        t.x = 265,
        t.y = 0,
        t
    },
    n._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 45,
        t.source = "advanced_pet_back_store_detial_panel_jjzjjkwcjj_png",
        t.width = 260,
        t.x = 0,
        t.y = 0,
        t
    },
    n.btnStartAdv_i = function() {
        var t = new eui.Image;
        return this.btnStartAdv = t,
        t.height = 57,
        t.horizontalCenter = -10,
        t.source = "advanced_pet_back_store_detial_panel_btnStartAdv_png",
        t.visible = !0,
        t.width = 180,
        t.y = 551,
        t
    },
    n.btnPetInfo_i = function() {
        var t = new eui.Image;
        return this.btnPetInfo = t,
        t.height = 74,
        t.right = 40,
        t.source = "advanced_pet_back_store_detial_panel_btnPetInfo_png",
        t.width = 83,
        t.y = 155,
        t
    },
    n.btnStore_i = function() {
        var t = new eui.Image;
        return this.btnStore = t,
        t.height = 72,
        t.right = 45,
        t.source = "advanced_pet_back_store_detial_panel_btnStore_png",
        t.width = 72,
        t.y = 60,
        t
    },
    n.grpAnim_i = function() {
        var t = new eui.Group;
        return this.grpAnim = t,
        t.horizontalCenter = -15,
        t.y = 287,
        t
    },
    n.btnPetBag_i = function() {
        var t = new eui.Image;
        return this.btnPetBag = t,
        t.bottom = 45,
        t.left = 50,
        t.source = "common_imgbtn_pet_png",
        t
    },
    n.btnGet_i = function() {
        var t = new eui.Image;
        return this.btnGet = t,
        t.bottom = 45,
        t.right = 45,
        t.source = "advanced_pet_back_store_detial_panel_getbtn_png",
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/AdvancedPetBackStoreEnterBtnSkin.exml"] = window.AdvancedPetBackStoreEnterBtnSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["imgPet", "txtPetName", "imgProgress", "txtProgress", "star1", "star2", "star3", "star4", "star5", "grpLook", "imgCanAdv", "grpHasAdvance", "btnMain", "btnShowInfo"],
        this.height = 468,
        this.width = 281,
        this.elementsContent = [this.btnMain_i(), this.btnShowInfo_i()]
    }
    __extends(e, t);
    var n = e.prototype;
    return n.btnMain_i = function() {
        var t = new eui.Group;
        return this.btnMain = t,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this.imgPet_i(), this._Image1_i(), this.txtPetName_i(), this.imgProgress_i(), this.txtProgress_i(), this.star1_i(), this.star2_i(), this.star3_i(), this.star4_i(), this.star5_i(), this.grpLook_i(), this.imgCanAdv_i(), this.grpHasAdvance_i()],
        t
    },
    n.imgPet_i = function() {
        var t = new eui.Image;
        return this.imgPet = t,
        t.height = 467,
        t.width = 280,
        t.x = 0,
        t.y = 0,
        t
    },
    n._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 37,
        t.source = "advanced_pet_back_store_main_imgLine_png",
        t.width = 280,
        t.x = 0,
        t.y = 5,
        t
    },
    n.txtPetName_i = function() {
        var t = new eui.Label;
        return this.txtPetName = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = .5,
        t.size = 20,
        t.text = "天马",
        t.textAlign = "center",
        t.textColor = 16769933,
        t.visible = !0,
        t.y = 14,
        t
    },
    n.imgProgress_i = function() {
        var t = new eui.Image;
        return this.imgProgress = t,
        t.height = 62,
        t.source = "advanced_pet_back_store_main_imgProgress_png",
        t.visible = !0,
        t.width = 281,
        t.x = 0,
        t.y = 406,
        t
    },
    n.txtProgress_i = function() {
        var t = new eui.Label;
        return this.txtProgress = t,
        t.fontFamily = "MFShangHei",
        t.size = 30,
        t.text = "X/X",
        t.textAlign = "center",
        t.textColor = 16573348,
        t.visible = !0,
        t.width = 120,
        t.x = 81,
        t.y = 420,
        t
    },
    n.star1_i = function() {
        var t = new eui.Image;
        return this.star1 = t,
        t.source = "advanced_pet_back_store_main_imgProgress_star0_png",
        t.x = 20,
        t.y = 413,
        t
    },
    n.star2_i = function() {
        var t = new eui.Image;
        return this.star2 = t,
        t.source = "advanced_pet_back_store_main_imgProgress_star0_png",
        t.x = 68,
        t.y = 413,
        t
    },
    n.star3_i = function() {
        var t = new eui.Image;
        return this.star3 = t,
        t.source = "advanced_pet_back_store_main_imgProgress_star0_png",
        t.x = 116,
        t.y = 413,
        t
    },
    n.star4_i = function() {
        var t = new eui.Image;
        return this.star4 = t,
        t.source = "advanced_pet_back_store_main_imgProgress_star0_png",
        t.x = 164,
        t.y = 413,
        t
    },
    n.star5_i = function() {
        var t = new eui.Image;
        return this.star5 = t,
        t.source = "advanced_pet_back_store_main_imgProgress_star0_png",
        t.visible = !0,
        t.x = 212,
        t.y = 413,
        t
    },
    n.grpLook_i = function() {
        var t = new eui.Image;
        return this.grpLook = t,
        t.height = 16,
        t.source = "advanced_pet_back_store_main_grpLook_png",
        t.visible = !0,
        t.width = 84,
        t.x = 183,
        t.y = 392,
        t
    },
    n.imgCanAdv_i = function() {
        var t = new eui.Group;
        return this.imgCanAdv = t,
        t.visible = !0,
        t.x = 141,
        t.y = 234,
        t
    },
    n.grpHasAdvance_i = function() {
        var t = new eui.Rect;
        return this.grpHasAdvance = t,
        t.fillAlpha = .56,
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t
    },
    n.btnShowInfo_i = function() {
        var t = new eui.Image;
        return this.btnShowInfo = t,
        t.height = 34,
        t.source = "advanced_pet_back_store_main___png",
        t.width = 34,
        t.x = 238,
        t.y = 6,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/AdvancedPetBackStoreEnterPanelSkin.exml"] = window.AdvancedPetBackStoreEnterPanelSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "btnStore", "_list", "_src", "txtRestDay", "btnTips"],
        this.height = 640,
        this.width = 1472,
        this.elementsContent = [this.bg_i(), this._Image1_i(), this.btnStore_i(), this._src_i(), this._Group1_i(), this.btnTips_i()]
    }
    __extends(e, t);
    var n = e.prototype;
    return n.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.height = 640,
        t.source = "AdvancedPetBackStoreMainPanel_bg_png",
        t.width = 1472,
        t.x = 0,
        t.y = 0,
        t
    },
    n._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 102,
        t.horizontalCenter = 70,
        t.source = "advanced_pet_back_store_enter_title_png",
        t.width = 554,
        t.y = 0,
        t
    },
    n.btnStore_i = function() {
        var t = new eui.Image;
        return this.btnStore = t,
        t.height = 72,
        t.right = 45,
        t.source = "advanced_pet_back_store_detial_panel_btnStore_png",
        t.width = 72,
        t.y = 17,
        t
    },
    n._src_i = function() {
        var t = new eui.Scroller;
        return this._src = t,
        t.bottom = 52,
        t.height = 510,
        t.horizontalCenter = 70,
        t.viewport = this._list_i(),
        t
    },
    n._list_i = function() {
        var t = new eui.List;
        return this._list = t,
        t.layout = this._HorizontalLayout1_i(),
        t
    },
    n._HorizontalLayout1_i = function() {
        var t = new eui.HorizontalLayout;
        return t.gap = 22,
        t.horizontalAlign = "center",
        t.verticalAlign = "bottom",
        t
    },
    n._Group1_i = function() {
        var t = new eui.Group;
        return t.bottom = 18,
        t.horizontalCenter = 40,
        t.elementsContent = [this._Image2_i(), this.txtRestDay_i()],
        t
    },
    n._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 18,
        t.scale9Grid = new egret.Rectangle(232, 0, 4, 16),
        t.source = "advanced_pet_back_store_enter_line_png",
        t.width = 656,
        t.x = 0,
        t.y = 4,
        t
    },
    n.txtRestDay_i = function() {
        var t = new eui.Label;
        return this.txtRestDay = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = 12,
        t.size = 24,
        t.text = "本期剩余时间xxx天",
        t.textAlign = "center",
        t.textColor = 14515020,
        t.visible = !0,
        t.width = 257,
        t.y = 0,
        t
    },
    n.btnTips_i = function() {
        var t = new eui.Image;
        return this.btnTips = t,
        t.horizontalCenter = 310,
        t.source = "common_help_icon_png",
        t.y = 65,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/AdvancedPetBackStoreGoodsItemSkin.exml"] = window.AdvancedPetBackStoreGoodsItemSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["imgComp", "imgBuyComp", "txtBuyCost", "btnBuyComp", "txtCompName", "txtPetName", "grpAnim"],
        this.height = 173,
        this.width = 236,
        this.elementsContent = [this._Image1_i(), this.imgComp_i(), this.btnBuyComp_i(), this.txtCompName_i(), this.txtPetName_i(), this.grpAnim_i()]
    }
    __extends(e, t);
    var n = e.prototype;
    return n._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 173,
        t.source = "advanced_pet_back_store_main_buyCompBg_png",
        t.width = 236,
        t.x = 0,
        t.y = 0,
        t
    },
    n.imgComp_i = function() {
        var t = new eui.Image;
        return this.imgComp = t,
        t.horizontalCenter = 0,
        t.verticalCenter = -7,
        t
    },
    n.btnBuyComp_i = function() {
        var t = new eui.Group;
        return this.btnBuyComp = t,
        t.height = 31,
        t.visible = !0,
        t.width = 229,
        t.x = 3,
        t.y = 138,
        t.elementsContent = [this.imgBuyComp_i(), this.txtBuyCost_i()],
        t
    },
    n.imgBuyComp_i = function() {
        var t = new eui.Image;
        return this.imgBuyComp = t,
        t.height = 31,
        t.source = "advanced_pet_back_store_main_btnBuyComp_png",
        t.visible = !0,
        t.width = 229,
        t.x = 0,
        t.y = 0,
        t
    },
    n.txtBuyCost_i = function() {
        var t = new eui.Label;
        return this.txtBuyCost = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "000",
        t.textColor = 16777215,
        t.visible = !0,
        t.x = 95,
        t.y = 9,
        t
    },
    n.txtCompName_i = function() {
        var t = new eui.Label;
        return this.txtCompName = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.stroke = 1,
        t.strokeColor = 5317399,
        t.text = "灾雷魔刃",
        t.textColor = 16777215,
        t.x = 80,
        t.y = 112,
        t
    },
    n.txtPetName_i = function() {
        var t = new eui.Label;
        return this.txtPetName = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "精灵名称",
        t.textAlign = "center",
        t.textColor = 16771293,
        t.width = 220,
        t.x = 8,
        t.y = 6,
        t
    },
    n.grpAnim_i = function() {
        var t = new eui.Group;
        return this.grpAnim = t,
        t.horizontalCenter = 0,
        t.verticalCenter = 0,
        t.visible = !0,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/AdvancedPetBackStoreHighlightSkin.exml"] = window.AdvancedPetBackStoreHighlightSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["tips", "bg", "imgPet", "title", "btnGoTo", "grpAnim"],
        this.height = 400,
        this.width = 1366,
        this.elementsContent = [this.tips_i(), this.bg_i(), this.imgPet_i(), this.title_i(), this.btnGoTo_i(), this.grpAnim_i()]
    }
    __extends(e, t);
    var n = e.prototype;
    return n.tips_i = function() {
        var t = new eui.Label;
        return this.tips = t,
        t.horizontalCenter = -10.5,
        t.size = 18.0332489329782,
        t.text = "点击空白区域关闭",
        t.textColor = 11435610,
        t.y = 400.194,
        t
    },
    n.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.height = 400.891,
        t.left = 0,
        t.right = 0,
        t.source = "advanced_pet_back_store_highlight_bg_png",
        t.y = -9.697,
        t
    },
    n.imgPet_i = function() {
        var t = new eui.Image;
        return this.imgPet = t,
        t.horizontalCenter = .5,
        t.touchEnabled = !1,
        t.verticalCenter = -40,
        t
    },
    n.title_i = function() {
        var t = new eui.Image;
        return this.title = t,
        t.horizontalCenter = 71.5,
        t.source = "advanced_pet_back_store_highlight_title_png",
        t.touchEnabled = !1,
        t.y = -55.697,
        t
    },
    n.btnGoTo_i = function() {
        var t = new eui.Image;
        return this.btnGoTo = t,
        t.height = 66,
        t.horizontalCenter = .5,
        t.source = "advanced_pet_back_store_highlight_btnGoTo_png",
        t.visible = !0,
        t.width = 187,
        t.y = 327.194,
        t
    },
    n.grpAnim_i = function() {
        var t = new eui.Group;
        return this.grpAnim = t,
        t.horizontalCenter = .5,
        t.visible = !0,
        t.y = 359.194,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/AdvancedPetBackStoreMainSkin.exml"] = window.AdvancedPetBackStoreMainSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["txtCoin", "btnBuyCoin", "grpRight", "btnClose", "grpItem", "imgRefresh", "txtRefreshCost", "btnRefresh"],
        this.height = 542,
        this.width = 983,
        this.elementsContent = [this.grpRight_i(), this._Group1_i()]
    }
    __extends(e, t);
    var n = e.prototype;
    return n.grpRight_i = function() {
        var t = new eui.Group;
        return this.grpRight = t,
        t.height = 33,
        t.width = 149,
        t.x = 824,
        t.y = 10,
        t.elementsContent = [this._Image1_i(), this._Image2_i(), this.txtCoin_i(), this._Image3_i(), this.btnBuyCoin_i()],
        t
    },
    n._Image1_i = function() {
        var t = new eui.Image;
        return t.alpha = 0,
        t.height = 87.287,
        t.horizontalCenter = 0,
        t.source = "advanced_pet_back_store_main_img_di2_png",
        t.verticalCenter = 0,
        t.width = 225.159,
        t
    },
    n._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 21,
        t.source = "advanced_pet_back_store_main_img_di2_png",
        t.width = 133,
        t.x = 13,
        t.y = 6,
        t
    },
    n.txtCoin_i = function() {
        var t = new eui.Label;
        return this.txtCoin = t,
        t.fontFamily = "MFShangHei",
        t.size = 18.0101510119682,
        t.text = "99999",
        t.textAlign = "center",
        t.textColor = 12834813,
        t.width = 99,
        t.x = 28,
        t.y = 9,
        t
    },
    n._Image3_i = function() {
        var t = new eui.Image;
        return t.height = 32,
        t.source = "advanced_pet_back_store_main_1724859_png",
        t.width = 32,
        t.x = 0,
        t.y = 0,
        t
    },
    n.btnBuyCoin_i = function() {
        var t = new eui.Image;
        return this.btnBuyCoin = t,
        t.height = 21,
        t.source = "common_btn_add_png",
        t.width = 21,
        t.x = 128,
        t.y = 6,
        t
    },
    n._Group1_i = function() {
        var t = new eui.Group;
        return t.height = 600,
        t.width = 983,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image4_i(), this._Image5_i(), this.btnClose_i(), this.grpItem_i(), this.btnRefresh_i()],
        t
    },
    n._Image4_i = function() {
        var t = new eui.Image;
        return t.source = "advanced_pet_back_store_main_zu_2_png",
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t
    },
    n._Image5_i = function() {
        var t = new eui.Image;
        return t.horizontalCenter = -35,
        t.source = "advanced_pet_back_store_main_title_png",
        t.y = 36,
        t
    },
    n.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.height = 33,
        t.source = "common_pop_btn_close_png",
        t.width = 33,
        t.x = 900,
        t.y = 83,
        t
    },
    n.grpItem_i = function() {
        var t = new eui.Group;
        return this.grpItem = t,
        t.height = 385,
        t.width = 780,
        t.x = 114,
        t.y = 108,
        t.layout = this._TileLayout1_i(),
        t
    },
    n._TileLayout1_i = function() {
        var t = new eui.TileLayout;
        return t.horizontalGap = 18,
        t.verticalGap = 14,
        t
    },
    n.btnRefresh_i = function() {
        var t = new eui.Group;
        return this.btnRefresh = t,
        t.height = 50,
        t.visible = !0,
        t.width = 178,
        t.x = 704,
        t.y = 487,
        t.elementsContent = [this._Image6_i(), this.imgRefresh_i(), this.txtRefreshCost_i()],
        t
    },
    n._Image6_i = function() {
        var t = new eui.Image;
        return t.bottom = 0,
        t.left = 0,
        t.right = 0,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "common_btn_bg_yellow_png",
        t.top = 0,
        t
    },
    n.imgRefresh_i = function() {
        var t = new eui.Image;
        return this.imgRefresh = t,
        t.height = 32,
        t.source = "advanced_pet_back_store_main_imgRresh_png",
        t.verticalCenter = -.5,
        t.visible = !0,
        t.width = 32,
        t.x = 10,
        t
    },
    n.txtRefreshCost_i = function() {
        var t = new eui.Label;
        return this.txtRefreshCost = t,
        t.fontFamily = "REEJI",
        t.height = 25,
        t.size = 20,
        t.text = "XXX",
        t.textAlign = "center",
        t.textColor = 10180889,
        t.verticalAlign = "middle",
        t.verticalCenter = -.5,
        t.width = 139.453,
        t.x = 34.29,
        t
    },
    e
} (eui.Skin);