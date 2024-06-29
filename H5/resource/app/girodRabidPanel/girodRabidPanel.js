var __reflect = this && this.__reflect ||
function(e, t, i) {
    e.__class__ = t,
    i ? i.push(t) : i = [t],
    e.__types__ = e.__types__ ? i.concat(e.__types__) : i
},
girodRabidPanel; !
function(e) {
    var t = function() {
        function e() {}
        return e.forever_104475 = 104475,
        e.forever_104476 = 104476,
        e.forever_104477 = 104477,
        e.forever_104478 = 104478,
        e.forever_104479 = 104479,
        e.forever_104480 = 104480,
        e.forevers = [104475, 104476, 104477, 104478, 104479, 104480],
        e.daily_16913 = 16913,
        e.daily_16914 = 16914,
        e.daily = [16913, 16914],
        e.cmd = 43300,
        e
    } ();
    e.GirodRabidConst = t,
    __reflect(t.prototype, "girodRabidPanel.GirodRabidConst")
} (girodRabidPanel || (girodRabidPanel = {}));
var __reflect = this && this.__reflect ||
function(e, t, i) {
    e.__class__ = t,
    i ? i.push(t) : i = [t],
    e.__types__ = e.__types__ ? i.concat(e.__types__) : i
},
__awaiter = this && this.__awaiter ||
function(e, t, i, n) {
    return new(i || (i = Promise))(function(r, a) {
        function o(e) {
            try {
                s(n.next(e))
            } catch(t) {
                a(t)
            }
        }
        function u(e) {
            try {
                s(n["throw"](e))
            } catch(t) {
                a(t)
            }
        }
        function s(e) {
            e.done ? r(e.value) : new i(function(t) {
                t(e.value)
            }).then(o, u)
        }
        s((n = n.apply(e, t || [])).next())
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
        if (r) throw new TypeError("Generator is already executing.");
        for (; s;) try {
            if (r = 1, a && (o = a[2 & i[0] ? "return": i[0] ? "throw": "next"]) && !(o = o.call(a, i[1])).done) return o;
            switch (a = 0, o && (i = [0, o.value]), i[0]) {
            case 0:
            case 1:
                o = i;
                break;
            case 4:
                return s.label++,
                {
                    value: i[1],
                    done: !1
                };
            case 5:
                s.label++,
                a = i[1],
                i = [0];
                continue;
            case 7:
                i = s.ops.pop(),
                s.trys.pop();
                continue;
            default:
                if (o = s.trys, !(o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                    s = 0;
                    continue
                }
                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                    s.label = i[1];
                    break
                }
                if (6 === i[0] && s.label < o[1]) {
                    s.label = o[1],
                    o = i;
                    break
                }
                if (o && s.label < o[2]) {
                    s.label = o[2],
                    s.ops.push(i);
                    break
                }
                o[2] && s.ops.pop(),
                s.trys.pop();
                continue
            }
            i = t.call(e, s)
        } catch(n) {
            i = [6, n],
            a = 0
        } finally {
            r = o = 0
        }
        if (5 & i[0]) throw i[1];
        return {
            value: i[0] ? i[1] : void 0,
            done: !0
        }
    }
    var r, a, o, u, s = {
        label: 0,
        sent: function() {
            if (1 & o[0]) throw o[1];
            return o[1]
        },
        trys: [],
        ops: []
    };
    return u = {
        next: i(0),
        "throw": i(1),
        "return": i(2)
    },
    "function" == typeof Symbol && (u[Symbol.iterator] = function() {
        return this
    }),
    u
},
girodRabidPanel; !
function(e) {
    var t = function() {
        function t() {}
        return t.updateValues = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var i, n;
                return __generator(this,
                function(r) {
                    switch (r.label) {
                    case 0:
                        return i = t,
                        [4, KTool.getMultiValueAsync(e.GirodRabidConst.forevers)];
                    case 1:
                        return i.forevers = r.sent(),
                        n = t,
                        [4, KTool.getMultiValueAsync(e.GirodRabidConst.daily)];
                    case 2:
                        return n.daily = r.sent(),
                        [2]
                    }
                })
            })
        },
        t.getItem = !1,
        t.forevers = [],
        t.daily = [],
        t.GirodRabidPanel_CLOSE_CHILD_PANEL = "GirodRabidPanel_CLOSE_CHILD_PANEL",
        t.GirodRabidPanel_UPDATE_MAIN = "GirodRabidPanel_UPDATE_MAIN",
        t.GirodRabidPanel_UPDATE_GET_ITEM_PANEL = "GirodRabidPanel_UPDATE_GET_ITEM_PANEL",
        t
    } ();
    e.GirodRabidManager = t,
    __reflect(t.prototype, "girodRabidPanel.GirodRabidManager")
} (girodRabidPanel || (girodRabidPanel = {}));
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
    return new(i || (i = Promise))(function(r, a) {
        function o(e) {
            try {
                s(n.next(e))
            } catch(t) {
                a(t)
            }
        }
        function u(e) {
            try {
                s(n["throw"](e))
            } catch(t) {
                a(t)
            }
        }
        function s(e) {
            e.done ? r(e.value) : new i(function(t) {
                t(e.value)
            }).then(o, u)
        }
        s((n = n.apply(e, t || [])).next())
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
        if (r) throw new TypeError("Generator is already executing.");
        for (; s;) try {
            if (r = 1, a && (o = a[2 & i[0] ? "return": i[0] ? "throw": "next"]) && !(o = o.call(a, i[1])).done) return o;
            switch (a = 0, o && (i = [0, o.value]), i[0]) {
            case 0:
            case 1:
                o = i;
                break;
            case 4:
                return s.label++,
                {
                    value: i[1],
                    done: !1
                };
            case 5:
                s.label++,
                a = i[1],
                i = [0];
                continue;
            case 7:
                i = s.ops.pop(),
                s.trys.pop();
                continue;
            default:
                if (o = s.trys, !(o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                    s = 0;
                    continue
                }
                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                    s.label = i[1];
                    break
                }
                if (6 === i[0] && s.label < o[1]) {
                    s.label = o[1],
                    o = i;
                    break
                }
                if (o && s.label < o[2]) {
                    s.label = o[2],
                    s.ops.push(i);
                    break
                }
                o[2] && s.ops.pop(),
                s.trys.pop();
                continue
            }
            i = t.call(e, s)
        } catch(n) {
            i = [6, n],
            a = 0
        } finally {
            r = o = 0
        }
        if (5 & i[0]) throw i[1];
        return {
            value: i[0] ? i[1] : void 0,
            done: !0
        }
    }
    var r, a, o, u, s = {
        label: 0,
        sent: function() {
            if (1 & o[0]) throw o[1];
            return o[1]
        },
        trys: [],
        ops: []
    };
    return u = {
        next: i(0),
        "throw": i(1),
        "return": i(2)
    },
    "function" == typeof Symbol && (u[Symbol.iterator] = function() {
        return this
    }),
    u
},
girodRabidPanel; !
function(e) {
    var t = function(t) {
        function i() {
            var e = t.call(this) || this;
            return e.level = 0,
            e.state = 0,
            e.curPanel = null,
            e.getItemPanel = null,
            e.justBuy = !1,
            e.skinName = GirodRabidPanelSkin,
            e
        }
        return __extends(i, t),
        i.prototype.createChildren = function() {
            var i = this;
            t.prototype.childrenCreated.call(this),
            StatLogger.log("20230113版本系统功能", "狂热之诚·吉罗德", "进入主界面"),
            this.adaptBgByScale(this.bg),
            this.content.left = DeviceInfoManager.adapterOffSetX,
            this.content.right = DeviceInfoManager.adapterOffSetX,
            this.mas.width = this.bg.width * this.bg.scaleX,
            ImageButtonUtil.add(this.imaHelp,
            function() {
                tipsPop.TipsPop.openHelpPopById(125)
            },
            this),
            ImageButtonUtil.add(this.imaBack, this.onClose, this),
            ImageButtonUtil.add(this.btnInfo,
            function() {
                PetManager.showPetIntroduce(3704)
            },
            this),
            ImageButtonUtil.add(this.krzl,
            function() {
                i.showChildPanel(1),
                StatLogger.log("20230113版本系统功能", "狂热之诚·吉罗德", "进入主界面")
            },
            this),
            ImageButtonUtil.add(this.hmzl,
            function() {
                i.showChildPanel(2),
                StatLogger.log("20230113版本系统功能", "狂热之诚·吉罗德", "进入【毁灭之力】界面")
            },
            this),
            ImageButtonUtil.add(this.btnZZ,
            function() {
                var e = PetManager.isDefaultPet(3251),
                t = PetManager.hasPet(3251);
                t ? e ? i.buy(e) : i.justBuy ? i.buy(e) : Alert.show("将妖王·吉罗德设置为出战背包首发可获得100钻石优惠进行至尊进化，进化需要消耗妖王·吉罗德！",
                function() {
                    ModuleManager.showModuleByID(10)
                },
                function() {
                    i.justBuy = !0
                }) : i.buy(e)
            },
            this),
            ImageButtonUtil.add(this.btnLQ,
            function() {
                var t = KTool.getBit(i.state, 1);
                i.level > 1 && !t && SocketConnection.sendWithPromise(e.GirodRabidConst.cmd, [10, 3]).then(function() {
                    i.updateView()
                })
            },
            this),
            ImageButtonUtil.add(this.btnUP,
            function() {
                i.showChildPanel(3),
                StatLogger.log("20230113版本系统功能", "狂热之诚·吉罗德", "进入【能力提升】界面")
            },
            this),
            EventManager.addEventListener(e.GirodRabidManager.GirodRabidPanel_CLOSE_CHILD_PANEL, this.closeChild, this),
            EventManager.addEventListener(e.GirodRabidManager.GirodRabidPanel_UPDATE_MAIN,
            function() {
                i.closeChild(),
                i.updateView()
            },
            this),
            EventManager.addEventListener(e.GirodRabidManager.GirodRabidPanel_UPDATE_GET_ITEM_PANEL,
            function() {
                i.getItemPanel ? i.closeGetItemPanel() : i.showGetItemPanel()
            },
            this),
            this.updateView()
        },
        i.prototype.buy = function(t) {
            var i = this,
            n = 0,
            r = !1;
            n = t ? this.level >= 1 ? 254171 : 254170 : this.level >= 1 ? 254169 : 254168,
            r = this.level >= 1,
            t ? BuyProductManager.buyProductBySocket(n,
            function() {
                SocketConnection.sendByQueue(CommandID.PET_SUPER_EVOLUTION, [PetManager.defaultTime, r ? 805 : 804],
                function() {
                    BubblerManager.getInstance().showText("进化成功！"),
                    i.updateView(),
                    PetManager.upDateBagPetInfo(PetManager.defaultTime)
                })
            },
            this) : BuyProductManager.buyProductBySocket(n,
            function() {
                SocketConnection.sendWithPromise(e.GirodRabidConst.cmd, [10, r ? 2 : 1]).then(function() {
                    i.updateView()
                })
            },
            this)
        },
        i.prototype.updateView = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var t, i, n, r;
                return __generator(this,
                function(a) {
                    switch (a.label) {
                    case 0:
                        return [4, e.GirodRabidManager.updateValues()];
                    case 1:
                        for (a.sent(), this.state = e.GirodRabidManager.forevers[0], this.level = e.GirodRabidManager.forevers[1], t = 1 == KTool.getBit(this.state, 1), t ? (this.btnLQ.visible = !0, this.btnZZ.visible = !1, DisplayUtil.setEnabled(this.btnLQ, !1, !0)) : (this.btnZZ.visible = this.level < 2, this.btnLQ.visible = this.level > 1, DisplayUtil.setEnabled(this.btnLQ, !0)), DisplayUtil.setEnabled(this.krzl, this.level < 1 && !t, !0), this.got1.visible = this.level >= 1 || t, DisplayUtil.setEnabled(this.hmzl, 1 == this.level && !t, !0), this.got2.visible = this.level > 1 || t, i = !0, n = 0; 3 > n; n++) if (r = 1 == KTool.getBit(this.state, n + 2), !r) {
                            i = !1;
                            break
                        }
                        return DisplayUtil.setEnabled(this.btnUP, t && !i, !0),
                        [2]
                    }
                })
            })
        },
        i.prototype.showChildPanel = function(t) {
            switch (this.closeChild(), t) {
            case 1:
                this.curPanel = new e.GirodRabidPanelLevel1;
                break;
            case 2:
                this.curPanel = new e.GirodRabidPanelLevel2;
                break;
            case 3:
                this.curPanel = new e.GirodRabidPanelUp;
                break;
            default:
                this.curPanel = new e.GirodRabidPanelLevel1
            }
            this.parent.addChild(this.curPanel)
        },
        i.prototype.showGetItemPanel = function() {
            this.getItemPanel = new e.GirodRabidPanelGetItem,
            this.parent.addChild(this.getItemPanel),
            StatLogger.log("20230113版本系统功能", "狂热之诚·吉罗德", "进入【获取狂热结晶】界面")
        },
        i.prototype.closeGetItemPanel = function() {
            this.getItemPanel && (DisplayUtil.removeForParent(this.getItemPanel), this.getItemPanel.destroy(), this.getItemPanel = null)
        },
        i.prototype.closeChild = function() {
            this.curPanel && (DisplayUtil.removeForParent(this.curPanel), this.curPanel.destroy(), this.curPanel = null)
        },
        i.prototype.destroy = function() {
            t.prototype.destroy.call(this),
            this.closeChild()
        },
        i
    } (BaseModule);
    e.GirodRabidPanel = t,
    __reflect(t.prototype, "girodRabidPanel.GirodRabidPanel")
} (girodRabidPanel || (girodRabidPanel = {}));
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
    return new(i || (i = Promise))(function(r, a) {
        function o(e) {
            try {
                s(n.next(e))
            } catch(t) {
                a(t)
            }
        }
        function u(e) {
            try {
                s(n["throw"](e))
            } catch(t) {
                a(t)
            }
        }
        function s(e) {
            e.done ? r(e.value) : new i(function(t) {
                t(e.value)
            }).then(o, u)
        }
        s((n = n.apply(e, t || [])).next())
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
        if (r) throw new TypeError("Generator is already executing.");
        for (; s;) try {
            if (r = 1, a && (o = a[2 & i[0] ? "return": i[0] ? "throw": "next"]) && !(o = o.call(a, i[1])).done) return o;
            switch (a = 0, o && (i = [0, o.value]), i[0]) {
            case 0:
            case 1:
                o = i;
                break;
            case 4:
                return s.label++,
                {
                    value: i[1],
                    done: !1
                };
            case 5:
                s.label++,
                a = i[1],
                i = [0];
                continue;
            case 7:
                i = s.ops.pop(),
                s.trys.pop();
                continue;
            default:
                if (o = s.trys, !(o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                    s = 0;
                    continue
                }
                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                    s.label = i[1];
                    break
                }
                if (6 === i[0] && s.label < o[1]) {
                    s.label = o[1],
                    o = i;
                    break
                }
                if (o && s.label < o[2]) {
                    s.label = o[2],
                    s.ops.push(i);
                    break
                }
                o[2] && s.ops.pop(),
                s.trys.pop();
                continue
            }
            i = t.call(e, s)
        } catch(n) {
            i = [6, n],
            a = 0
        } finally {
            r = o = 0
        }
        if (5 & i[0]) throw i[1];
        return {
            value: i[0] ? i[1] : void 0,
            done: !0
        }
    }
    var r, a, o, u, s = {
        label: 0,
        sent: function() {
            if (1 & o[0]) throw o[1];
            return o[1]
        },
        trys: [],
        ops: []
    };
    return u = {
        next: i(0),
        "throw": i(1),
        "return": i(2)
    },
    "function" == typeof Symbol && (u[Symbol.iterator] = function() {
        return this
    }),
    u
},
girodRabidPanel; !
function(e) {
    var t = function(t) {
        function i() {
            var e = t.call(this) || this;
            return e.items = [1717709, 1717710, 1717711, 1717712],
            e.bossId = ["2579_0_1", "2921_0_2", "3276_0_3", "2128_1_1", "3565_1_2", "3376_1_3", "3384_2_1", "3468_2_2", "3455_2_3", "3686_3_1"],
            e.drawIndex = 0,
            e.times = 0,
            e.skinName = GirodRabidPanelGetItemSkin,
            e
        }
        return __extends(i, t),
        i.prototype.createChildren = function() {
            var i = this;
            t.prototype.childrenCreated.call(this),
            this.adaptBgByScale(this.bg),
            this.mas.width = this.bg.width * this.bg.scaleX,
            this.mas2.width = this.bg.width * this.bg.scaleX,
            this.content.left = DeviceInfoManager.adapterOffSetX,
            this.content.right = DeviceInfoManager.adapterOffSetX,
            ImageButtonUtil.add(this.title1,
            function() {
                EventManager.dispatchEventWith(e.GirodRabidManager.GirodRabidPanel_UPDATE_GET_ITEM_PANEL)
            },
            this),
            ImageButtonUtil.add(this.imgBtn_pet,
            function() {
                ModuleManager.showModuleByID(10)
            },
            this),
            ImageButtonUtil.add(this.imgBtn_cure,
            function() {
                PetManager.cureAll()
            },
            this);
            for (var n = function(e) {
                ImageButtonUtil.add(r["add_" + (e + 1)],
                function() {
                    var t = [11798, 11799, 11800],
                    n = [254173, 254174, 254175];
                    BuyProductManager.buyProduct(n[e] + "_" + t[e],
                    function() {
                        i.updateItem()
                    },
                    i, i.items[e])
                },
                r)
            },
            r = this, a = 0; 3 > a; a++) n(a);
            ImageButtonUtil.add(this.add,
            function() {
                BuyProductManager.buyProduct("254172_11794",
                function() {
                    BubblerManager.getInstance().showText("购买抽取次数成功"),
                    i.updateView()
                },
                i)
            },
            this),
            ImageButtonUtil.add(this.btn1,
            function() {
                var t = 10 == i.drawIndex ? 13772 : 13720 + i.drawIndex - 1;
                FightManager.fightNoMapBoss(t),
                e.GirodRabidManager.getItem = !0
            },
            this),
            ImageButtonUtil.add(this.btn2,
            function() {
                Alert.show("是否放弃本次挑战？",
                function() {
                    SocketConnection.sendByQueue(e.GirodRabidConst.cmd, [7, 2],
                    function() {
                        i.updateView()
                    })
                })
            },
            this),
            ImageButtonUtil.add(this.btnOneKey,
            function() {
                var t = i.times;
                return 1 > t ? void BubblerManager.getInstance().showText("今日可抽取次数不足！") : void SocketConnection.sendByQueue(e.GirodRabidConst.cmd, [7, 1],
                function() {
                    i.updateView()
                })
            },
            this),
            ImageButtonUtil.add(this.btn2_2,
            function() {
                for (var t = !0,
                n = 0; 3 > n; n++) if (ItemManager.getNumByID(i.items[n]) < 1) {
                    t = !1;
                    break
                }
                return t ? void SocketConnection.sendByQueue(e.GirodRabidConst.cmd, [7, 3],
                function() {
                    BubblerManager.getInstance().showText("融合成功！"),
                    i.updateView()
                }) : void BubblerManager.getInstance().showText("所需晶体数量不足，快前往获得吧！")
            },
            this),
            EventManager.addEventListener(GameEvent.NOTIFY_ITEM_CHANGE, this.updateItem, this),
            EventManager.addEventListener(PetFightEvent.ALARM_CLICK,
            function() {
                i.updateView()
            },
            this),
            this.updateView()
        },
        i.prototype.updateView = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var t, i, n, r = this;
                return __generator(this,
                function(a) {
                    switch (a.label) {
                    case 0:
                        return [4, e.GirodRabidManager.updateValues()];
                    case 1:
                        return a.sent(),
                        e.GirodRabidManager.getItem = !1,
                        this.times = 16 - e.GirodRabidManager.daily[0],
                        this.num.text = this.times + "",
                        DisplayUtil.setEnabled(this.add, this.times <= 0, !0),
                        this.updateItem(),
                        this.drawIndex = e.GirodRabidManager.forevers[5],
                        t = 0,
                        this.btnOneKey.visible = this.drawIndex < 1,
                        this.btn1.visible = this.btn2.visible = this.drawIndex > 0,
                        this.desc.visible = this.drawIndex > 0,
                        this.drawIndex > 0 && (i = this.bossId[this.drawIndex - 1].split("_").map(Number), t = i[0], this.itemName.text = ItemXMLInfo.getName(this.items[i[1]]), this.give.text = "x" + i[2], this.icon.source = ClientConfig.getItemIcon(this.items[i[1]])),
                        n = "resource/assets/girodRabidBoss/4_" + t + ".png",
                        [4, RES.getResByUrl(n,
                        function(e) {
                            e && (r.pet2.texture = e)
                        })];
                    case 2:
                        return a.sent(),
                        0 == t ? this.petName.text = "": this.petName.text = PetXMLInfo.getName(t),
                        [2]
                    }
                })
            })
        },
        i.prototype.updateItem = function() {
            for (var e = 0; 4 > e; e++) this["num" + (e + 1)].text = ItemManager.getNumByID(this.items[e]) + ""
        },
        i.prototype.destroy = function() {
            t.prototype.destroy.call(this),
            ImageButtonUtil.removeAll(this),
            EventManager.removeAll(this)
        },
        i
    } (BaseModule);
    e.GirodRabidPanelGetItem = t,
    __reflect(t.prototype, "girodRabidPanel.GirodRabidPanelGetItem")
} (girodRabidPanel || (girodRabidPanel = {}));
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
    return new(i || (i = Promise))(function(r, a) {
        function o(e) {
            try {
                s(n.next(e))
            } catch(t) {
                a(t)
            }
        }
        function u(e) {
            try {
                s(n["throw"](e))
            } catch(t) {
                a(t)
            }
        }
        function s(e) {
            e.done ? r(e.value) : new i(function(t) {
                t(e.value)
            }).then(o, u)
        }
        s((n = n.apply(e, t || [])).next())
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
        if (r) throw new TypeError("Generator is already executing.");
        for (; s;) try {
            if (r = 1, a && (o = a[2 & i[0] ? "return": i[0] ? "throw": "next"]) && !(o = o.call(a, i[1])).done) return o;
            switch (a = 0, o && (i = [0, o.value]), i[0]) {
            case 0:
            case 1:
                o = i;
                break;
            case 4:
                return s.label++,
                {
                    value: i[1],
                    done: !1
                };
            case 5:
                s.label++,
                a = i[1],
                i = [0];
                continue;
            case 7:
                i = s.ops.pop(),
                s.trys.pop();
                continue;
            default:
                if (o = s.trys, !(o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                    s = 0;
                    continue
                }
                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                    s.label = i[1];
                    break
                }
                if (6 === i[0] && s.label < o[1]) {
                    s.label = o[1],
                    o = i;
                    break
                }
                if (o && s.label < o[2]) {
                    s.label = o[2],
                    s.ops.push(i);
                    break
                }
                o[2] && s.ops.pop(),
                s.trys.pop();
                continue
            }
            i = t.call(e, s)
        } catch(n) {
            i = [6, n],
            a = 0
        } finally {
            r = o = 0
        }
        if (5 & i[0]) throw i[1];
        return {
            value: i[0] ? i[1] : void 0,
            done: !0
        }
    }
    var r, a, o, u, s = {
        label: 0,
        sent: function() {
            if (1 & o[0]) throw o[1];
            return o[1]
        },
        trys: [],
        ops: []
    };
    return u = {
        next: i(0),
        "throw": i(1),
        "return": i(2)
    },
    "function" == typeof Symbol && (u[Symbol.iterator] = function() {
        return this
    }),
    u
},
girodRabidPanel; !
function(e) {
    var t = function(t) {
        function i() {
            var e = t.call(this) || this;
            return e.allDamage = 0,
            e.max = 3e4,
            e.itemId = 1717712,
            e.skinName = GirodRabidPanelLevel1Skin,
            e
        }
        return __extends(i, t),
        i.prototype.createChildren = function() {
            var i = this;
            t.prototype.childrenCreated.call(this),
            this.adaptBgByScale(this.bg),
            this.content.left = DeviceInfoManager.adapterOffSetX,
            this.content.right = DeviceInfoManager.adapterOffSetX,
            this.mas.width = this.bg.width * this.bg.scaleX,
            ImageButtonUtil.add(this.title1,
            function() {
                EventManager.dispatchEventWith(e.GirodRabidManager.GirodRabidPanel_CLOSE_CHILD_PANEL)
            },
            this),
            ImageButtonUtil.add(this.btnOneKey,
            function() {
                var t = ItemManager.getNumByID(i.itemId);
                return 1 > t ? void BubblerManager.getInstance().showText("你的狂热结晶数量不足，需要先获取狂热结晶！") : void SocketConnection.sendByQueue(e.GirodRabidConst.cmd, [5, 0],
                function() {})
            },
            this),
            EventManager.addEventListener(PetFightEvent.ALARM_CLICK,
            function() {
                return __awaiter(i, void 0, void 0,
                function() {
                    var t, i, n;
                    return __generator(this,
                    function(r) {
                        switch (r.label) {
                        case 0:
                            return e.GirodRabidManager.getItem ? [2] : (t = this.allDamage, FightManager.isWin ? [4, KTool.getMultiValueAsync([104477])] : [3, 2]);
                        case 1:
                            return i = r.sent(),
                            n = i[0] - t,
                            BubblerManager.getInstance().showText("成功对妖王·吉罗德造成" + n + "点伤害！，且累计伤害+" + n),
                            this.updateView(),
                            [3, 3];
                        case 2:
                            this.updateView(),
                            r.label = 3;
                        case 3:
                            return [2]
                        }
                    })
                })
            },
            this),
            ImageButtonUtil.add(this.imgBtn_pet,
            function() {
                ModuleManager.showModuleByID(10)
            },
            this),
            ImageButtonUtil.add(this.imgBtn_cure,
            function() {
                PetManager.cureAll()
            },
            this),
            ImageButtonUtil.add(this.get,
            function() {
                EventManager.dispatchEventWith(e.GirodRabidManager.GirodRabidPanel_UPDATE_GET_ITEM_PANEL)
            },
            this),
            EventManager.addEventListener(GameEvent.NOTIFY_ITEM_CHANGE,
            function() {
                i.num.text = ItemManager.getNumByID(i.itemId) + ""
            },
            this),
            this.updateView()
        },
        i.prototype.updateView = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                return __generator(this,
                function(t) {
                    switch (t.label) {
                    case 0:
                        return [4, e.GirodRabidManager.updateValues()];
                    case 1:
                        return t.sent(),
                        this.allDamage = e.GirodRabidManager.forevers[2],
                        this._bar.maximum = this.max,
                        this._bar.value = this.allDamage,
                        this.damage.text = Math.min(this.allDamage, this.max) + "/" + this.max,
                        this.num.text = ItemManager.getNumByID(this.itemId) + "",
                        this.allDamage >= this.max && Alarm.show("已完成狂热之力，现在至尊获得狂热之诚·吉罗德将获得额外100钻石优惠哦！",
                        function() {
                            EventManager.dispatchEventWith(e.GirodRabidManager.GirodRabidPanel_UPDATE_MAIN)
                        }),
                        [2]
                    }
                })
            })
        },
        i.prototype.destroy = function() {
            t.prototype.destroy.call(this)
        },
        i
    } (BaseModule);
    e.GirodRabidPanelLevel1 = t,
    __reflect(t.prototype, "girodRabidPanel.GirodRabidPanelLevel1")
} (girodRabidPanel || (girodRabidPanel = {}));
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
    return new(i || (i = Promise))(function(r, a) {
        function o(e) {
            try {
                s(n.next(e))
            } catch(t) {
                a(t)
            }
        }
        function u(e) {
            try {
                s(n["throw"](e))
            } catch(t) {
                a(t)
            }
        }
        function s(e) {
            e.done ? r(e.value) : new i(function(t) {
                t(e.value)
            }).then(o, u)
        }
        s((n = n.apply(e, t || [])).next())
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
        if (r) throw new TypeError("Generator is already executing.");
        for (; s;) try {
            if (r = 1, a && (o = a[2 & i[0] ? "return": i[0] ? "throw": "next"]) && !(o = o.call(a, i[1])).done) return o;
            switch (a = 0, o && (i = [0, o.value]), i[0]) {
            case 0:
            case 1:
                o = i;
                break;
            case 4:
                return s.label++,
                {
                    value: i[1],
                    done: !1
                };
            case 5:
                s.label++,
                a = i[1],
                i = [0];
                continue;
            case 7:
                i = s.ops.pop(),
                s.trys.pop();
                continue;
            default:
                if (o = s.trys, !(o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                    s = 0;
                    continue
                }
                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                    s.label = i[1];
                    break
                }
                if (6 === i[0] && s.label < o[1]) {
                    s.label = o[1],
                    o = i;
                    break
                }
                if (o && s.label < o[2]) {
                    s.label = o[2],
                    s.ops.push(i);
                    break
                }
                o[2] && s.ops.pop(),
                s.trys.pop();
                continue
            }
            i = t.call(e, s)
        } catch(n) {
            i = [6, n],
            a = 0
        } finally {
            r = o = 0
        }
        if (5 & i[0]) throw i[1];
        return {
            value: i[0] ? i[1] : void 0,
            done: !0
        }
    }
    var r, a, o, u, s = {
        label: 0,
        sent: function() {
            if (1 & o[0]) throw o[1];
            return o[1]
        },
        trys: [],
        ops: []
    };
    return u = {
        next: i(0),
        "throw": i(1),
        "return": i(2)
    },
    "function" == typeof Symbol && (u[Symbol.iterator] = function() {
        return this
    }),
    u
},
girodRabidPanel; !
function(e) {
    var t = function(t) {
        function i() {
            var e = t.call(this) || this;
            return e.bossId = [707, 717, 743, 768, 806, 841, 860, 885, 957, 1029, 1723, 3098, 3239, 3590, 3676],
            e.curSuccess = [],
            e.drawIndex = 0,
            e.itemId = 1717712,
            e.skinName = GirodRabidPanelLevel2Skin,
            e
        }
        return __extends(i, t),
        i.prototype.createChildren = function() {
            var i = this;
            t.prototype.childrenCreated.call(this),
            this.adaptBgByScale(this.bg),
            this.content.left = DeviceInfoManager.adapterOffSetX,
            this.content.right = DeviceInfoManager.adapterOffSetX,
            this.mas.width = this.bg.width * this.bg.scaleX,
            this.mas2.width = this.bg.width * this.bg.scaleX,
            ImageButtonUtil.add(this.title1,
            function() {
                EventManager.dispatchEventWith(e.GirodRabidManager.GirodRabidPanel_CLOSE_CHILD_PANEL)
            },
            this),
            ImageButtonUtil.add(this.imgBtn_pet,
            function() {
                ModuleManager.showModuleByID(10)
            },
            this),
            ImageButtonUtil.add(this.imgBtn_cure,
            function() {
                PetManager.cureAll()
            },
            this),
            ImageButtonUtil.add(this.get,
            function() {
                EventManager.dispatchEventWith(e.GirodRabidManager.GirodRabidPanel_UPDATE_GET_ITEM_PANEL)
            },
            this),
            ImageButtonUtil.add(this.btn1,
            function() {
                var e = i.drawIndex - 1 + 13705;
                FightManager.fightNoMapBoss(e)
            },
            this),
            ImageButtonUtil.add(this.btn2,
            function() {
                Alert.show("是否放弃本次挑战？",
                function() {
                    SocketConnection.sendByQueue(e.GirodRabidConst.cmd, [6, 2],
                    function() {
                        i.updateView()
                    })
                })
            },
            this),
            ImageButtonUtil.add(this.btnOneKey,
            function() {
                var t = ItemManager.getNumByID(i.itemId);
                return 1 > t ? void BubblerManager.getInstance().showText("你的狂热结晶数量不足，需要先获取狂热结晶！") : (i.btnOneKey.touchEnabled = !1, void SocketConnection.sendByQueue(e.GirodRabidConst.cmd, [6, 1],
                function() {
                    i.updateView(),
                    i.btnOneKey.touchEnabled = !0
                },
                function() {
                    i.btnOneKey.touchEnabled = !0
                }))
            },
            this),
            EventManager.addEventListener(GameEvent.NOTIFY_ITEM_CHANGE,
            function() {
                i.num.text = ItemManager.getNumByID(i.itemId) + ""
            },
            this),
            EventManager.addEventListener(PetFightEvent.ALARM_CLICK,
            function() {
                i.updateView()
            },
            this),
            this.updateView()
        },
        i.prototype.updateView = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var t, i, n, r, a, o = this;
                return __generator(this,
                function(u) {
                    switch (u.label) {
                    case 0:
                        return this.num.text = ItemManager.getNumByID(this.itemId) + "",
                        [4, e.GirodRabidManager.updateValues()];
                    case 1:
                        for (u.sent(), this.curSuccess.length = 0, t = e.GirodRabidManager.forevers[3], i = 0; 15 > i; i++) n = KTool.getBit(t, i + 1),
                        n > 0 && this.curSuccess.push(i + 1);
                        return this.cur.text = this.curSuccess.length + "",
                        this.curSuccess.length >= 15 && Alarm.show("已完成毁灭之力，现在可以领取精灵狂热之诚·吉罗德了哦！",
                        function() {
                            EventManager.dispatchEventWith(e.GirodRabidManager.GirodRabidPanel_UPDATE_MAIN)
                        }),
                        this.drawIndex = e.GirodRabidManager.forevers[4],
                        r = 0,
                        this.draw.visible = this.drawIndex < 1,
                        this.btn1.visible = this.btn2.visible = this.drawIndex > 0,
                        this.drawIndex > 0 && (r = this.bossId[this.drawIndex - 1]),
                        a = "resource/assets/girodRabidBoss/3_" + r + ".png",
                        [4, RES.getResByUrl(a,
                        function(e) {
                            e && (o.pet2.texture = e)
                        })];
                    case 2:
                        return u.sent(),
                        0 == r ? this.petName.text = "": this.petName.text = PetXMLInfo.getName(r),
                        [2]
                    }
                })
            })
        },
        i.prototype.destroy = function() {
            t.prototype.destroy.call(this)
        },
        i
    } (BaseModule);
    e.GirodRabidPanelLevel2 = t,
    __reflect(t.prototype, "girodRabidPanel.GirodRabidPanelLevel2")
} (girodRabidPanel || (girodRabidPanel = {}));
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
    return new(i || (i = Promise))(function(r, a) {
        function o(e) {
            try {
                s(n.next(e))
            } catch(t) {
                a(t)
            }
        }
        function u(e) {
            try {
                s(n["throw"](e))
            } catch(t) {
                a(t)
            }
        }
        function s(e) {
            e.done ? r(e.value) : new i(function(t) {
                t(e.value)
            }).then(o, u)
        }
        s((n = n.apply(e, t || [])).next())
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
        if (r) throw new TypeError("Generator is already executing.");
        for (; s;) try {
            if (r = 1, a && (o = a[2 & i[0] ? "return": i[0] ? "throw": "next"]) && !(o = o.call(a, i[1])).done) return o;
            switch (a = 0, o && (i = [0, o.value]), i[0]) {
            case 0:
            case 1:
                o = i;
                break;
            case 4:
                return s.label++,
                {
                    value: i[1],
                    done: !1
                };
            case 5:
                s.label++,
                a = i[1],
                i = [0];
                continue;
            case 7:
                i = s.ops.pop(),
                s.trys.pop();
                continue;
            default:
                if (o = s.trys, !(o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                    s = 0;
                    continue
                }
                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                    s.label = i[1];
                    break
                }
                if (6 === i[0] && s.label < o[1]) {
                    s.label = o[1],
                    o = i;
                    break
                }
                if (o && s.label < o[2]) {
                    s.label = o[2],
                    s.ops.push(i);
                    break
                }
                o[2] && s.ops.pop(),
                s.trys.pop();
                continue
            }
            i = t.call(e, s)
        } catch(n) {
            i = [6, n],
            a = 0
        } finally {
            r = o = 0
        }
        if (5 & i[0]) throw i[1];
        return {
            value: i[0] ? i[1] : void 0,
            done: !0
        }
    }
    var r, a, o, u, s = {
        label: 0,
        sent: function() {
            if (1 & o[0]) throw o[1];
            return o[1]
        },
        trys: [],
        ops: []
    };
    return u = {
        next: i(0),
        "throw": i(1),
        "return": i(2)
    },
    "function" == typeof Symbol && (u[Symbol.iterator] = function() {
        return this
    }),
    u
},
girodRabidPanel; !
function(e) {
    var t = function(t) {
        function i() {
            var e = t.call(this) || this;
            return e.item1 = 1717713,
            e.times = 0,
            e.bossId = [13729, 13730, 13731],
            e.skinName = GirodRabidPanelUpSkin,
            e
        }
        return __extends(i, t),
        i.prototype.createChildren = function() {
            var i = this;
            t.prototype.childrenCreated.call(this),
            this.adaptBgByScale(this.bg),
            this.content.left = DeviceInfoManager.adapterOffSetX,
            this.content.right = DeviceInfoManager.adapterOffSetX,
            this.mas.width = this.bg.width * this.bg.scaleX,
            this.mas2.width = this.bg.width * this.bg.scaleX,
            ImageButtonUtil.add(this.title1,
            function() {
                EventManager.dispatchEventWith(e.GirodRabidManager.GirodRabidPanel_UPDATE_MAIN)
            },
            this),
            ImageButtonUtil.add(this.imgBtn_pet,
            function() {
                ModuleManager.showModuleByID(10)
            },
            this),
            ImageButtonUtil.add(this.imgBtn_cure,
            function() {
                PetManager.cureAll()
            },
            this),
            ImageButtonUtil.add(this.add,
            function() {
                BuyProductManager.buyProduct("254177_11796",
                function() {
                    i.updateView()
                },
                i, i.item1)
            },
            this),
            ImageButtonUtil.add(this.addTimes,
            function() {
                BuyProductManager.buyProduct("254176_11795",
                function() {
                    BubblerManager.getInstance().showText("购买挑战次数成功"),
                    i.updateView()
                },
                i)
            },
            this),
            ImageButtonUtil.add(this.btnEasy,
            function() {
                if (i.times <= 0) return void BubblerManager.getInstance().showText("今日剩余挑战次数不足！");
                var e = i.bossId[0];
                FightManager.fightNoMapBoss(e)
            },
            this),
            ImageButtonUtil.add(this.btnMid,
            function() {
                if (i.times <= 0) return void BubblerManager.getInstance().showText("今日剩余挑战次数不足！");
                var e = i.bossId[1];
                FightManager.fightNoMapBoss(e)
            },
            this),
            ImageButtonUtil.add(this.btnHard,
            function() {
                if (i.times <= 0) return void BubblerManager.getInstance().showText("今日剩余挑战次数不足！");
                var e = i.bossId[2];
                FightManager.fightNoMapBoss(e)
            },
            this);
            for (var n = function(t) {
                ImageButtonUtil.add(r["exchange_" + (t + 1)],
                function() {
                    var n = PetManager.isDefaultPet(3704);
                    return n ? void SocketConnection.sendByQueue(e.GirodRabidConst.cmd, [8, t + 1],
                    function() {
                        t > 0 && BubblerManager.getInstance().showText("兑换" + (1 == t ? "第五技能": "专属特性") + "成功"),
                        i.updateView()
                    }) : void Alarm.show("请将狂热之诚·吉罗德设置为出战背包首发！",
                    function() {
                        ModuleManager.showModuleByID(10)
                    })
                },
                r)
            },
            r = this, a = 0; 3 > a; a++) n(a);
            ImageButtonUtil.add(this.btnKe,
            function() {
                var e = {};
                e.ins = 41360,
                tipsPop.TipsPop.openCounterMarkPop(e)
            },
            this, !1),
            ImageButtonUtil.add(this.btnWu,
            function() {
                var e = {};
                e.id = 32487,
                tipsPop.TipsPop.openSkillPop(e)
            },
            this, !1),
            ImageButtonUtil.add(this.btnTe,
            function() {
                ModuleManager.showModule("petEffDescPanel", ["pet_eff_desc_panel"], 3704, "", AppDoStyle.NULL)
            },
            this, !1),
            EventManager.addEventListener(GameEvent.NOTIFY_ITEM_CHANGE,
            function() {
                i.updateView()
            },
            this),
            this.updateView()
        },
        i.prototype.updateView = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var t, i, n, r, a;
                return __generator(this,
                function(o) {
                    switch (o.label) {
                    case 0:
                        return this.txtCoin1.text = ItemManager.getNumByID(this.item1) + "",
                        [4, e.GirodRabidManager.updateValues()];
                    case 1:
                        for (o.sent(), t = MainManager.actorInfo.isVip ? 5 : 3, this.times = t - e.GirodRabidManager.daily[1], this.txtCoin2.text = this.times + "", DisplayUtil.setEnabled(this.addTimes, this.times <= 0, !0), i = e.GirodRabidManager.forevers[0], n = ItemManager.getNumByID(this.item1), r = 0; 3 > r; r++) a = 1 == KTool.getBit(i, r + 2),
                        this["got_" + (r + 1)].visible = a,
                        DisplayUtil.setEnabled(this["exchange_" + (r + 1)], !a && n >= 15, !0);
                        return [2]
                    }
                })
            })
        },
        i.prototype.destroy = function() {
            t.prototype.destroy.call(this)
        },
        i
    } (BaseModule);
    e.GirodRabidPanelUp = t,
    __reflect(t.prototype, "girodRabidPanel.GirodRabidPanelUp")
} (girodRabidPanel || (girodRabidPanel = {}));
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
generateEUI.paths["resource/eui_skins/GirodRabidPanelGetItemSkin.exml"] = window.GirodRabidPanelGetItemSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["bg", "pet2", "mas2", "mas", "title1", "num", "add", "btn1", "btn2", "btnOneKey", "num1", "add_1", "num2", "add_2", "num3", "add_3", "num4", "btn2_2", "itemName", "icon", "give", "petName", "desc", "imgBtn_pet", "imgBtn_cure", "content"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this.content_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i.bg_i = function() {
        var e = new eui.Image;
        return this.bg = e,
        e.horizontalCenter = 0,
        e.source = "girod_rabid_panel_bg_jpg",
        e.verticalCenter = 0,
        e
    },
    i.content_i = function() {
        var e = new eui.Group;
        return this.content = e,
        e.horizontalCenter = 0,
        e.verticalCenter = 0,
        e.elementsContent = [this._Image1_i(), this._Group1_i(), this.mas2_i(), this.mas_i(), this._Group2_i(), this._Group3_i(), this._Group6_i(), this.imgBtn_pet_i(), this.imgBtn_cure_i()],
        e
    },
    i._Image1_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = -263.5,
        e.source = "girod_rabid_panel_level2_pet1_png",
        e.y = 58,
        e
    },
    i._Group1_i = function() {
        var e = new eui.Group;
        return e.height = 606,
        e.horizontalCenter = 265,
        e.width = 610,
        e.y = 34,
        e.elementsContent = [this.pet2_i()],
        e
    },
    i.pet2_i = function() {
        var e = new eui.Image;
        return this.pet2 = e,
        e.horizontalCenter = 25,
        e.verticalCenter = 0,
        e
    },
    i.mas2_i = function() {
        var e = new eui.Image;
        return this.mas2 = e,
        e.height = 640,
        e.horizontalCenter = 1,
        e.scale9Grid = new egret.Rectangle(0, 104, 60, 22),
        e.source = "girod_rabid_panel_level2_juxing_14_png",
        e.width = 1136,
        e.y = 0,
        e
    },
    i.mas_i = function() {
        var e = new eui.Image;
        return this.mas = e,
        e.horizontalCenter = 1,
        e.scale9Grid = new egret.Rectangle(0, 0, 60, 154),
        e.source = "girod_rabid_panel_mas_png",
        e.width = 1136,
        e.y = 486,
        e
    },
    i._Group2_i = function() {
        var e = new eui.Group;
        return e.cacheAsBitmap = !0,
        e.left = 1,
        e.y = 0,
        e.elementsContent = [this._Image2_i(), this.title1_i()],
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "girod_rabid_panel_up_bg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.title1_i = function() {
        var e = new eui.Image;
        return this.title1 = e,
        e.source = "girod_rabid_panel_get_item_title1_png",
        e.x = 17,
        e.y = 3,
        e
    },
    i._Group3_i = function() {
        var e = new eui.Group;
        return e.cacheAsBitmap = !0,
        e.right = 32,
        e.y = 14,
        e.elementsContent = [this._Image3_i(), this.num_i(), this.add_i()],
        e
    },
    i._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "girod_rabid_panel_get_item_txtbg2_png",
        e.visible = !0,
        e.x = 0,
        e.y = 0,
        e
    },
    i.num_i = function() {
        var e = new eui.Label;
        return this.num = e,
        e.fontFamily = "MFShangHei",
        e.horizontalCenter = 60,
        e.size = 18,
        e.text = "00",
        e.textColor = 15965183,
        e.y = 1,
        e
    },
    i.add_i = function() {
        var e = new eui.Image;
        return this.add = e,
        e.source = "girod_rabid_panel_up_add_png",
        e.x = 189,
        e.y = 1,
        e
    },
    i._Group6_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = 0,
        e.width = 1066,
        e.y = 60,
        e.elementsContent = [this.btn1_i(), this.btn2_i(), this.btnOneKey_i(), this._Image4_i(), this._Group4_i(), this._Group5_i(), this.desc_i()],
        e
    },
    i.btn1_i = function() {
        var e = new eui.Image;
        return this.btn1 = e,
        e.source = "girod_rabid_panel_level2_btn1_png",
        e.x = 415,
        e.y = 185,
        e
    },
    i.btn2_i = function() {
        var e = new eui.Image;
        return this.btn2 = e,
        e.source = "girod_rabid_panel_level2_btn2_png",
        e.x = 415,
        e.y = 277,
        e
    },
    i.btnOneKey_i = function() {
        var e = new eui.Image;
        return this.btnOneKey = e,
        e.source = "girod_rabid_panel_level2_btnonekey_png",
        e.x = 414,
        e.y = 230,
        e
    },
    i._Image4_i = function() {
        var e = new eui.Image;
        return e.source = "girod_rabid_panel_get_item_img_1_png",
        e.x = 133,
        e.y = 0,
        e
    },
    i._Group4_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = 0,
        e.left = 0,
        e.right = 0,
        e.y = 484,
        e.elementsContent = [this._Image5_i(), this.num1_i(), this.add_1_i(), this.num2_i(), this.add_2_i(), this.num3_i(), this.add_3_i()],
        e
    },
    i._Image5_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = 0,
        e.source = "girod_rabid_panel_get_item_itembg_png",
        e.width = 1062,
        e.y = 0,
        e
    },
    i.num1_i = function() {
        var e = new eui.Label;
        return this.num1 = e,
        e.fontFamily = "MFShangHei",
        e.horizontalCenter = -318.5,
        e.size = 18,
        e.text = "0000",
        e.textColor = 16759543,
        e.y = 15,
        e
    },
    i.add_1_i = function() {
        var e = new eui.Image;
        return this.add_1 = e,
        e.horizontalCenter = -274.5,
        e.source = "girod_rabid_panel_up_add_png",
        e.y = 14,
        e
    },
    i.num2_i = function() {
        var e = new eui.Label;
        return this.num2 = e,
        e.fontFamily = "MFShangHei",
        e.horizontalCenter = 53.5,
        e.size = 18,
        e.text = "0000",
        e.textColor = 16759543,
        e.y = 15,
        e
    },
    i.add_2_i = function() {
        var e = new eui.Image;
        return this.add_2 = e,
        e.horizontalCenter = 97.5,
        e.source = "girod_rabid_panel_up_add_png",
        e.y = 14,
        e
    },
    i.num3_i = function() {
        var e = new eui.Label;
        return this.num3 = e,
        e.fontFamily = "MFShangHei",
        e.horizontalCenter = 415.5,
        e.size = 18,
        e.text = "0000",
        e.textColor = 16759543,
        e.y = 15,
        e
    },
    i.add_3_i = function() {
        var e = new eui.Image;
        return this.add_3 = e,
        e.horizontalCenter = 460.5,
        e.source = "girod_rabid_panel_up_add_png",
        e.y = 14,
        e
    },
    i._Group5_i = function() {
        var e = new eui.Group;
        return e.cacheAsBitmap = !0,
        e.horizontalCenter = -5,
        e.y = 435,
        e.elementsContent = [this._Image6_i(), this.num4_i(), this.btn2_2_i()],
        e
    },
    i._Image6_i = function() {
        var e = new eui.Image;
        return e.source = "girod_rabid_panel_get_item_item4bg_png",
        e.visible = !0,
        e.x = 0,
        e.y = 1,
        e
    },
    i.num4_i = function() {
        var e = new eui.Label;
        return this.num4 = e,
        e.fontFamily = "MFShangHei",
        e.horizontalCenter = 19.5,
        e.size = 20,
        e.text = "0000",
        e.textColor = 16759543,
        e.y = 7,
        e
    },
    i.btn2_2_i = function() {
        var e = new eui.Image;
        return this.btn2_2 = e,
        e.source = "girod_rabid_panel_get_item_btn2_png",
        e.x = 215,
        e.y = 0,
        e
    },
    i.desc_i = function() {
        var e = new eui.Group;
        return this.desc = e,
        e.cacheAsBitmap = !0,
        e.right = 0,
        e.y = 411,
        e.elementsContent = [this._Image7_i(), this.itemName_i(), this.icon_i(), this.give_i(), this.petName_i()],
        e
    },
    i._Image7_i = function() {
        var e = new eui.Image;
        return e.source = "girod_rabid_panel_get_item_dropbg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.itemName_i = function() {
        var e = new eui.Label;
        return this.itemName = e,
        e.fontFamily = "MFShangHei",
        e.horizontalCenter = 24.5,
        e.size = 20,
        e.text = "异能晶体",
        e.textColor = 15707393,
        e.y = 39,
        e
    },
    i.icon_i = function() {
        var e = new eui.Image;
        return this.icon = e,
        e.height = 27,
        e.source = "girod_rabid_panel_get_item_icon_png",
        e.width = 23,
        e.x = 188,
        e.y = 36,
        e
    },
    i.give_i = function() {
        var e = new eui.Label;
        return this.give = e,
        e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "x1",
        e.textColor = 16759543,
        e.x = 215,
        e.y = 40,
        e
    },
    i.petName_i = function() {
        var e = new eui.Label;
        return this.petName = e,
        e.fontFamily = "REEJI",
        e.horizontalCenter = 5.5,
        e.size = 26,
        e.text = "精灵名称留八个字",
        e.textColor = 16773741,
        e.y = 4,
        e
    },
    i.imgBtn_pet_i = function() {
        var e = new eui.Image;
        return this.imgBtn_pet = e,
        e.source = "girod_rabid_panel_level1_imgbtn_pet_png",
        e.x = 25,
        e.y = 257,
        e
    },
    i.imgBtn_cure_i = function() {
        var e = new eui.Image;
        return this.imgBtn_cure = e,
        e.source = "girod_rabid_panel_level1_imgbtn_cure_png",
        e.x = 25,
        e.y = 331,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/GirodRabidPanelLevel1Skin.exml"] = window.GirodRabidPanelLevel1Skin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["bg", "mas", "imgBtn_pet", "imgBtn_cure", "title1", "btnOneKey", "use", "_bar", "damage", "get", "num", "content"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this.content_i()]
    }
    __extends(t, e);
    var i = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["thumb"],
            this.elementsContent = [this._Image1_i(), this.thumb_i()],
            this.states = [new eui.State("up", []), new eui.State("down", []), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return e.height = 21,
            e.source = "girod_rabid_panel_level1_ratebg_s9_png",
            e.width = 676,
            e.x = 0,
            e.y = 0,
            e
        },
        i.thumb_i = function() {
            var e = new eui.Image;
            return this.thumb = e,
            e.height = 12,
            e.source = "girod_rabid_panel_level1_rate_s9_png",
            e.width = 666,
            e.x = 4.5,
            e.y = 4,
            e
        },
        t
    } (eui.Skin),
    n = t.prototype;
    return n.bg_i = function() {
        var e = new eui.Image;
        return this.bg = e,
        e.horizontalCenter = 0,
        e.source = "girod_rabid_panel_bg_jpg",
        e.y = 0,
        e
    },
    n.content_i = function() {
        var e = new eui.Group;
        return this.content = e,
        e.height = 640,
        e.horizontalCenter = 0,
        e.width = 1136,
        e.y = 0,
        e.elementsContent = [this._Image1_i(), this.mas_i(), this.imgBtn_pet_i(), this.imgBtn_cure_i(), this._Group1_i(), this._Group3_i()],
        e
    },
    n._Image1_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = -95.5,
        e.source = "girod_rabid_panel_level1_pet1_png",
        e.y = 86,
        e
    },
    n.mas_i = function() {
        var e = new eui.Image;
        return this.mas = e,
        e.horizontalCenter = 0,
        e.source = "girod_rabid_panel_mas_png",
        e.width = 1136,
        e.y = 486,
        e
    },
    n.imgBtn_pet_i = function() {
        var e = new eui.Image;
        return this.imgBtn_pet = e,
        e.source = "girod_rabid_panel_level1_imgbtn_pet_png",
        e.x = 24,
        e.y = 257,
        e
    },
    n.imgBtn_cure_i = function() {
        var e = new eui.Image;
        return this.imgBtn_cure = e,
        e.source = "girod_rabid_panel_level1_imgbtn_cure_png",
        e.x = 24,
        e.y = 331,
        e
    },
    n._Group1_i = function() {
        var e = new eui.Group;
        return e.left = 0,
        e.y = 0,
        e.elementsContent = [this._Image2_i(), this.title1_i()],
        e
    },
    n._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "girod_rabid_panel_up_bg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    n.title1_i = function() {
        var e = new eui.Image;
        return this.title1 = e,
        e.source = "girod_rabid_panel_level1_title1_png",
        e.x = 17,
        e.y = 3,
        e
    },
    n._Group3_i = function() {
        var e = new eui.Group;
        return e.height = 536,
        e.horizontalCenter = 23,
        e.width = 970,
        e.y = 60,
        e.elementsContent = [this.btnOneKey_i(), this.use_i(), this._Image3_i(), this._bar_i(), this._Image4_i(), this._Label1_i(), this.damage_i(), this._Group2_i()],
        e
    },
    n.btnOneKey_i = function() {
        var e = new eui.Image;
        return this.btnOneKey = e,
        e.source = "girod_rabid_panel_level1_btnonekey_png",
        e.x = 735,
        e.y = 472,
        e
    },
    n.use_i = function() {
        var e = new eui.Image;
        return this.use = e,
        e.source = "girod_rabid_panel_level1_use_png",
        e.x = 773,
        e.y = 447,
        e
    },
    n._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "girod_rabid_panel_level1_img_1_png",
        e.x = 64,
        e.y = 0,
        e
    },
    n._bar_i = function() {
        var e = new eui.ProgressBar;
        return this._bar = e,
        e.height = 21,
        e.value = 0,
        e.width = 676,
        e.x = 0,
        e.y = 511,
        e.skinName = i,
        e
    },
    n._Image4_i = function() {
        var e = new eui.Image;
        return e.source = "girod_rabid_panel_level1_rebg_png",
        e.x = 3,
        e.y = 475,
        e
    },
    n._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 19.8967673577043,
        e.text = "已累计伤害：",
        e.textColor = 16246129,
        e.x = 16,
        e.y = 481,
        e
    },
    n.damage_i = function() {
        var e = new eui.Label;
        return this.damage = e,
        e.fontFamily = "MFShangHei",
        e.size = 19.8967673577043,
        e.text = "20000/30000",
        e.textColor = 16245874,
        e.width = 127,
        e.x = 136,
        e.y = 482,
        e
    },
    n._Group2_i = function() {
        var e = new eui.Group;
        return e.cacheAsBitmap = !0,
        e.height = 205,
        e.width = 182,
        e.x = 744,
        e.y = 120,
        e.elementsContent = [this.get_i(), this._Image5_i(), this.num_i(), this._Label2_i()],
        e
    },
    n.get_i = function() {
        var e = new eui.Image;
        return this.get = e,
        e.source = "girod_rabid_panel_level1_btn21_png",
        e.x = 49,
        e.y = 171,
        e
    },
    n._Image5_i = function() {
        var e = new eui.Image;
        return e.source = "girod_rabid_panel_level1_tuceng_5_png",
        e.x = 20,
        e.y = 31,
        e
    },
    n.num_i = function() {
        var e = new eui.Label;
        return this.num = e,
        e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "1",
        e.textColor = 16246129,
        e.x = 151.144,
        e.y = .06,
        e
    },
    n._Label2_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 20.0068284072285,
        e.text = "拥有狂热结晶：",
        e.textColor = 16246129,
        e.x = 16.878,
        e.y = 0,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/GirodRabidPanelLevel2Skin.exml"] = window.GirodRabidPanelLevel2Skin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["bg", "pet1", "pet2", "mas2", "mas", "imgBtn_pet", "imgBtn_cure", "title1", "btn1", "btn2", "btnOneKey", "xh", "draw", "txt_hurt", "cur", "petName", "num", "get", "content"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this.content_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i.bg_i = function() {
        var e = new eui.Image;
        return this.bg = e,
        e.horizontalCenter = 0,
        e.source = "girod_rabid_panel_bg_jpg",
        e.y = 0,
        e
    },
    i.content_i = function() {
        var e = new eui.Group;
        return this.content = e,
        e.horizontalCenter = 0,
        e.width = 1136,
        e.y = 0,
        e.elementsContent = [this.pet1_i(), this.pet2_i(), this.mas2_i(), this.mas_i(), this.imgBtn_pet_i(), this.imgBtn_cure_i(), this._Group1_i(), this.btn1_i(), this.btn2_i(), this.draw_i(), this._Image2_i(), this._Group2_i(), this._Group3_i(), this._Group4_i()],
        e
    },
    i.pet1_i = function() {
        var e = new eui.Image;
        return this.pet1 = e,
        e.horizontalCenter = -263.5,
        e.source = "girod_rabid_panel_level2_pet1_png",
        e.touchEnabled = !1,
        e.y = 58,
        e
    },
    i.pet2_i = function() {
        var e = new eui.Image;
        return this.pet2 = e,
        e.horizontalCenter = 383,
        e.verticalCenter = 14.5,
        e
    },
    i.mas2_i = function() {
        var e = new eui.Image;
        return this.mas2 = e,
        e.height = 640,
        e.scale9Grid = new egret.Rectangle(0, 104, 60, 22),
        e.source = "girod_rabid_panel_level2_juxing_14_png",
        e.width = 1136,
        e.x = 1,
        e.y = 0,
        e
    },
    i.mas_i = function() {
        var e = new eui.Image;
        return this.mas = e,
        e.source = "girod_rabid_panel_mas_png",
        e.width = 1136,
        e.x = 1,
        e.y = 486,
        e
    },
    i.imgBtn_pet_i = function() {
        var e = new eui.Image;
        return this.imgBtn_pet = e,
        e.source = "girod_rabid_panel_level1_imgbtn_pet_png",
        e.x = 25,
        e.y = 257,
        e
    },
    i.imgBtn_cure_i = function() {
        var e = new eui.Image;
        return this.imgBtn_cure = e,
        e.source = "girod_rabid_panel_level1_imgbtn_cure_png",
        e.x = 25,
        e.y = 331,
        e
    },
    i._Group1_i = function() {
        var e = new eui.Group;
        return e.cacheAsBitmap = !0,
        e.left = 1,
        e.y = 0,
        e.elementsContent = [this._Image1_i(), this.title1_i()],
        e
    },
    i._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "girod_rabid_panel_up_bg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.title1_i = function() {
        var e = new eui.Image;
        return this.title1 = e,
        e.source = "girod_rabid_panel_level2_title1_png",
        e.x = 17,
        e.y = 3,
        e
    },
    i.btn1_i = function() {
        var e = new eui.Image;
        return this.btn1 = e,
        e.horizontalCenter = 1,
        e.source = "girod_rabid_panel_level2_btn1_png",
        e.y = 250,
        e
    },
    i.btn2_i = function() {
        var e = new eui.Image;
        return this.btn2 = e,
        e.horizontalCenter = 1,
        e.source = "girod_rabid_panel_level2_btn2_png",
        e.y = 342,
        e
    },
    i.draw_i = function() {
        var e = new eui.Group;
        return this.draw = e,
        e.horizontalCenter = 0,
        e.visible = !0,
        e.y = 295,
        e.elementsContent = [this.btnOneKey_i(), this.xh_i()],
        e
    },
    i.btnOneKey_i = function() {
        var e = new eui.Image;
        return this.btnOneKey = e,
        e.source = "girod_rabid_panel_level2_btnonekey_png",
        e.x = 2,
        e.y = 0,
        e
    },
    i.xh_i = function() {
        var e = new eui.Image;
        return this.xh = e,
        e.source = "girod_rabid_panel_level2_xh_png",
        e.x = 0,
        e.y = 70,
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = .5,
        e.source = "girod_rabid_panel_level2_img_1_png",
        e.y = 60,
        e
    },
    i._Group2_i = function() {
        var e = new eui.Group;
        return e.cacheAsBitmap = !0,
        e.horizontalCenter = 403.5,
        e.y = 506,
        e.elementsContent = [this._Image3_i(), this.txt_hurt_i(), this.cur_i()],
        e
    },
    i._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "girod_rabid_panel_level2_numbg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.txt_hurt_i = function() {
        var e = new eui.Label;
        return this.txt_hurt = e,
        e.fontFamily = "REEJI",
        e.size = 30,
        e.text = "/15",
        e.textColor = 15947263,
        e.x = 126,
        e.y = 30,
        e
    },
    i.cur_i = function() {
        var e = new eui.Label;
        return this.cur = e,
        e.fontFamily = "REEJI",
        e.right = 138,
        e.size = 30,
        e.text = "1",
        e.textColor = 16770184,
        e.y = 32,
        e
    },
    i._Group3_i = function() {
        var e = new eui.Group;
        return e.cacheAsBitmap = !0,
        e.horizontalCenter = 418.5,
        e.y = 470,
        e.elementsContent = [this._Image4_i(), this.petName_i()],
        e
    },
    i._Image4_i = function() {
        var e = new eui.Image;
        return e.source = "girod_rabid_panel_level2_rec2_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.petName_i = function() {
        var e = new eui.Label;
        return this.petName = e,
        e.fontFamily = "REEJI",
        e.horizontalCenter = 1.5,
        e.size = 26,
        e.text = "精灵名称留八个字",
        e.textColor = 16773740,
        e.y = 3,
        e
    },
    i._Group4_i = function() {
        var e = new eui.Group;
        return e.cacheAsBitmap = !0,
        e.horizontalCenter = -5,
        e.y = 534,
        e.elementsContent = [this._Image5_i(), this._Image6_i(), this.num_i(), this.get_i()],
        e
    },
    i._Image5_i = function() {
        var e = new eui.Image;
        return e.source = "girod_rabid_panel_level2_rec_png",
        e.x = 0,
        e.y = 1,
        e
    },
    i._Image6_i = function() {
        var e = new eui.Image;
        return e.source = "girod_rabid_panel_level2_tuceng_4_png",
        e.x = 12,
        e.y = 6,
        e
    },
    i.num_i = function() {
        var e = new eui.Label;
        return this.num = e,
        e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "0000",
        e.textColor = 16759543,
        e.x = 147,
        e.y = 10,
        e
    },
    i.get_i = function() {
        var e = new eui.Image;
        return this.get = e,
        e.source = "girod_rabid_panel_level1_btn21_png",
        e.x = 215,
        e.y = 0,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/GirodRabidPanelSkin.exml"] = window.GirodRabidPanelSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["bg", "mas", "hmzl", "krzl", "got1", "got2", "imaBack", "imaHelp", "top", "btnInfo", "btnZZ", "btnLQ", "btnUP", "content"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this.content_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i.bg_i = function() {
        var e = new eui.Image;
        return this.bg = e,
        e.horizontalCenter = 0,
        e.source = "girod_rabid_panel_bg_jpg",
        e.y = 0,
        e
    },
    i.content_i = function() {
        var e = new eui.Group;
        return this.content = e,
        e.height = 640,
        e.horizontalCenter = 0,
        e.width = 1136,
        e.y = 0,
        e.elementsContent = [this._Image1_i(), this.mas_i(), this._Image2_i(), this.hmzl_i(), this.krzl_i(), this.got1_i(), this.got2_i(), this.top_i(), this.btnInfo_i(), this.btnZZ_i(), this.btnLQ_i(), this.btnUP_i()],
        e
    },
    i._Image1_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = -7.5,
        e.source = "girod_rabid_panel_3704_png",
        e.y = 47,
        e
    },
    i.mas_i = function() {
        var e = new eui.Image;
        return this.mas = e,
        e.height = 154,
        e.horizontalCenter = 0,
        e.scale9Grid = new egret.Rectangle(10, 0, 41, 154),
        e.source = "girod_rabid_panel_mas_png",
        e.visible = !0,
        e.width = 1136,
        e.y = 486,
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = 4,
        e.source = "girod_rabid_panel_baioti_png",
        e.y = 4,
        e
    },
    i.hmzl_i = function() {
        var e = new eui.Image;
        return this.hmzl = e,
        e.horizontalCenter = 170.5,
        e.source = "girod_rabid_panel_hmzl_png",
        e.y = 471,
        e
    },
    i.krzl_i = function() {
        var e = new eui.Image;
        return this.krzl = e,
        e.horizontalCenter = -170.5,
        e.source = "girod_rabid_panel_krzl_png",
        e.y = 471,
        e
    },
    i.got1_i = function() {
        var e = new eui.Image;
        return this.got1 = e,
        e.horizontalCenter = -172.5,
        e.source = "girod_rabid_panel_got_png",
        e.visible = !0,
        e.y = 495,
        e
    },
    i.got2_i = function() {
        var e = new eui.Image;
        return this.got2 = e,
        e.horizontalCenter = 171.5,
        e.source = "girod_rabid_panel_got_png",
        e.visible = !0,
        e.y = 495,
        e
    },
    i.top_i = function() {
        var e = new eui.Group;
        return this.top = e,
        e.left = 0,
        e.visible = !0,
        e.y = 0,
        e.elementsContent = [this._Image3_i(), this.imaBack_i(), this.imaHelp_i()],
        e
    },
    i._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "girod_rabid_panel_up_bg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.imaBack_i = function() {
        var e = new eui.Image;
        return this.imaBack = e,
        e.source = "girod_rabid_panel_imaback_png",
        e.x = 17,
        e.y = 10,
        e
    },
    i.imaHelp_i = function() {
        var e = new eui.Image;
        return this.imaHelp = e,
        e.source = "common_help_icon_1_png",
        e.x = 77,
        e.y = 12,
        e
    },
    i.btnInfo_i = function() {
        var e = new eui.Image;
        return this.btnInfo = e,
        e.left = 30,
        e.source = "girod_rabid_panel_btninfo_png",
        e.y = 541,
        e
    },
    i.btnZZ_i = function() {
        var e = new eui.Image;
        return this.btnZZ = e,
        e.right = 135,
        e.source = "girod_rabid_panel_btnone2_png",
        e.y = 513,
        e
    },
    i.btnLQ_i = function() {
        var e = new eui.Image;
        return this.btnLQ = e,
        e.right = 135,
        e.source = "girod_rabid_panel_btnone1_png",
        e.visible = !0,
        e.x = 899,
        e.y = 513,
        e
    },
    i.btnUP_i = function() {
        var e = new eui.Image;
        return this.btnUP = e,
        e.right = 12,
        e.source = "girod_rabid_panel_btnone3_png",
        e.y = 513,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/GirodRabidPanelUpSkin.exml"] = window.GirodRabidPanelUpSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["bg", "pet1", "mas2", "mas", "imgBtn_pet", "imgBtn_cure", "exchange_1", "btnKe", "got_1", "btnWu", "exchange_2", "got_2", "btnTe", "exchange_3", "got_3", "btnEasy", "btnMid", "btnHard", "txtbg3", "txtbg2", "txtbg1", "title1", "txtCoin1", "add", "txtCoin2", "addTimes", "content"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this.content_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i.bg_i = function() {
        var e = new eui.Image;
        return this.bg = e,
        e.horizontalCenter = 0,
        e.source = "girod_rabid_panel_bg_jpg",
        e.y = 0,
        e
    },
    i.content_i = function() {
        var e = new eui.Group;
        return this.content = e,
        e.height = 640,
        e.horizontalCenter = 0,
        e.width = 1136,
        e.y = 0,
        e.elementsContent = [this.pet1_i(), this.mas2_i(), this.mas_i(), this.imgBtn_pet_i(), this.imgBtn_cure_i(), this._Image1_i(), this._Group1_i(), this._Group2_i(), this._Group3_i(), this.btnEasy_i(), this.btnMid_i(), this.btnHard_i(), this.txtbg3_i(), this.txtbg2_i(), this.txtbg1_i(), this._Group4_i(), this._Group5_i(), this._Image7_i(), this._Group6_i()],
        e
    },
    i.pet1_i = function() {
        var e = new eui.Image;
        return this.pet1 = e,
        e.horizontalCenter = -180.5,
        e.source = "girod_rabid_panel_level2_pet1_png",
        e.y = 58,
        e
    },
    i.mas2_i = function() {
        var e = new eui.Image;
        return this.mas2 = e,
        e.height = 640,
        e.scale9Grid = new egret.Rectangle(0, 104, 60, 22),
        e.source = "girod_rabid_panel_level2_juxing_14_png",
        e.width = 1136,
        e.x = 1,
        e.y = 0,
        e
    },
    i.mas_i = function() {
        var e = new eui.Image;
        return this.mas = e,
        e.horizontalCenter = 0,
        e.scale9Grid = new egret.Rectangle(0, 0, 60, 154),
        e.source = "girod_rabid_panel_mas_png",
        e.width = 1136,
        e.y = 486,
        e
    },
    i.imgBtn_pet_i = function() {
        var e = new eui.Image;
        return this.imgBtn_pet = e,
        e.source = "girod_rabid_panel_level1_imgbtn_pet_png",
        e.x = 24,
        e.y = 257,
        e
    },
    i.imgBtn_cure_i = function() {
        var e = new eui.Image;
        return this.imgBtn_cure = e,
        e.source = "girod_rabid_panel_level1_imgbtn_cure_png",
        e.x = 24,
        e.y = 331,
        e
    },
    i._Image1_i = function() {
        var e = new eui.Image;
        return e.height = 605,
        e.horizontalCenter = 322,
        e.scale9Grid = new egret.Rectangle(0, 0, 12, 600),
        e.source = "girod_rabid_panel_up_rightbg_png",
        e.visible = !0,
        e.width = 424,
        e.y = 18,
        e
    },
    i._Group1_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = 333,
        e.y = 106,
        e.elementsContent = [this._Image2_i(), this.exchange_1_i(), this.btnKe_i(), this.got_1_i()],
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "girod_rabid_panel_up_line3_png",
        e.x = 118,
        e.y = 9,
        e
    },
    i.exchange_1_i = function() {
        var e = new eui.Image;
        return this.exchange_1 = e,
        e.source = "girod_rabid_panel_up_exchange_png",
        e.x = 140,
        e.y = 57,
        e
    },
    i.btnKe_i = function() {
        var e = new eui.Image;
        return this.btnKe = e,
        e.source = "girod_rabid_panel_up_icon_keyin_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.got_1_i = function() {
        var e = new eui.Image;
        return this.got_1 = e,
        e.source = "girod_rabid_panel_up_got_png",
        e.touchEnabled = !1,
        e.x = 1,
        e.y = 46,
        e
    },
    i._Group2_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = 333,
        e.y = 264,
        e.elementsContent = [this.btnWu_i(), this._Image3_i(), this.exchange_2_i(), this.got_2_i()],
        e
    },
    i.btnWu_i = function() {
        var e = new eui.Image;
        return this.btnWu = e,
        e.source = "girod_rabid_panel_up_icon_jinneg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "girod_rabid_panel_up_line2_png",
        e.x = 118,
        e.y = 7,
        e
    },
    i.exchange_2_i = function() {
        var e = new eui.Image;
        return this.exchange_2 = e,
        e.source = "girod_rabid_panel_up_exchange_png",
        e.x = 140,
        e.y = 55,
        e
    },
    i.got_2_i = function() {
        var e = new eui.Image;
        return this.got_2 = e,
        e.source = "girod_rabid_panel_up_got_png",
        e.touchEnabled = !1,
        e.x = 1,
        e.y = 45,
        e
    },
    i._Group3_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = 333,
        e.y = 422,
        e.elementsContent = [this.btnTe_i(), this._Image4_i(), this.exchange_3_i(), this.got_3_i()],
        e
    },
    i.btnTe_i = function() {
        var e = new eui.Image;
        return this.btnTe = e,
        e.source = "girod_rabid_panel_up_icon_texing_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i._Image4_i = function() {
        var e = new eui.Image;
        return e.source = "girod_rabid_panel_up_line1_png",
        e.x = 118,
        e.y = 7,
        e
    },
    i.exchange_3_i = function() {
        var e = new eui.Image;
        return this.exchange_3 = e,
        e.source = "girod_rabid_panel_up_exchange_png",
        e.x = 140,
        e.y = 55,
        e
    },
    i.got_3_i = function() {
        var e = new eui.Image;
        return this.got_3 = e,
        e.source = "girod_rabid_panel_up_got_png",
        e.touchEnabled = !1,
        e.x = 1,
        e.y = 44,
        e
    },
    i.btnEasy_i = function() {
        var e = new eui.Image;
        return this.btnEasy = e,
        e.horizontalCenter = -374,
        e.source = "girod_rabid_panel_up_btneasy_png",
        e.y = 524,
        e
    },
    i.btnMid_i = function() {
        var e = new eui.Image;
        return this.btnMid = e,
        e.horizontalCenter = -201,
        e.source = "girod_rabid_panel_up_btnmid_png",
        e.y = 524,
        e
    },
    i.btnHard_i = function() {
        var e = new eui.Image;
        return this.btnHard = e,
        e.horizontalCenter = -28,
        e.source = "girod_rabid_panel_up_btnhard_png",
        e.y = 524,
        e
    },
    i.txtbg3_i = function() {
        var e = new eui.Image;
        return this.txtbg3 = e,
        e.horizontalCenter = -373.5,
        e.source = "girod_rabid_panel_up_txtbg3_png",
        e.y = 580,
        e
    },
    i.txtbg2_i = function() {
        var e = new eui.Image;
        return this.txtbg2 = e,
        e.horizontalCenter = -200.5,
        e.source = "girod_rabid_panel_up_txtbg5_png",
        e.y = 580,
        e
    },
    i.txtbg1_i = function() {
        var e = new eui.Image;
        return this.txtbg1 = e,
        e.horizontalCenter = -27.5,
        e.source = "girod_rabid_panel_up_txtbg4_png",
        e.y = 580,
        e
    },
    i._Group4_i = function() {
        var e = new eui.Group;
        return e.cacheAsBitmap = !0,
        e.left = 0,
        e.y = 0,
        e.elementsContent = [this._Image5_i(), this.title1_i()],
        e
    },
    i._Image5_i = function() {
        var e = new eui.Image;
        return e.source = "girod_rabid_panel_up_bg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.title1_i = function() {
        var e = new eui.Image;
        return this.title1 = e,
        e.source = "girod_rabid_panel_up_title1_png",
        e.x = 17,
        e.y = 3,
        e
    },
    i._Group5_i = function() {
        var e = new eui.Group;
        return e.cacheAsBitmap = !0,
        e.height = 21,
        e.horizontalCenter = 204.5,
        e.y = 12.746,
        e.elementsContent = [this._Image6_i(), this.txtCoin1_i(), this.add_i()],
        e
    },
    i._Image6_i = function() {
        var e = new eui.Image;
        return e.source = "girod_rabid_panel_up_txtbg1_png",
        e.verticalCenter = 0,
        e.x = 0,
        e
    },
    i.txtCoin1_i = function() {
        var e = new eui.Label;
        return this.txtCoin1 = e,
        e.fontFamily = "MFShangHei",
        e.horizontalCenter = 50,
        e.size = 18,
        e.text = "9999",
        e.textColor = 15965183,
        e.y = 3.283,
        e
    },
    i.add_i = function() {
        var e = new eui.Image;
        return this.add = e,
        e.source = "girod_rabid_panel_up_add_png",
        e.verticalCenter = .5,
        e.x = 178,
        e
    },
    i._Image7_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = 369.5,
        e.source = "girod_rabid_panel_up_vip_png",
        e.y = 42,
        e
    },
    i._Group6_i = function() {
        var e = new eui.Group;
        return e.cacheAsBitmap = !0,
        e.horizontalCenter = 430,
        e.y = 15,
        e.elementsContent = [this._Image8_i(), this.txtCoin2_i(), this.addTimes_i()],
        e
    },
    i._Image8_i = function() {
        var e = new eui.Image;
        return e.source = "girod_rabid_panel_up_txtbg2_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.txtCoin2_i = function() {
        var e = new eui.Label;
        return this.txtCoin2 = e,
        e.fontFamily = "MFShangHei",
        e.horizontalCenter = 60,
        e.size = 18,
        e.text = "00",
        e.textColor = 15965183,
        e.y = .057,
        e
    },
    i.addTimes_i = function() {
        var e = new eui.Image;
        return this.addTimes = e,
        e.source = "girod_rabid_panel_up_add_png",
        e.x = 189,
        e.y = 0,
        e
    },
    t
} (eui.Skin);