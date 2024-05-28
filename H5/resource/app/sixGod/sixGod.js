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
sixGod; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t.petId = 3329,
            t.skinName = SixGodSkin,
            t
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            var i = this;
            e.prototype.childrenCreated.call(this),
            this.adaptBgByScale(this.bg),
            this.initOldPveBtnClose(0, this, "six_god_main_title_png"),
            this.initBtnHelpById(170),
            ImageButtonUtil.add(this.btnInfo,
            function() {
                PetManager.showPetManualInfo(i.petId, 1)
            },
            this),
            ImageButtonUtil.add(this.oneKey,
            function() {
                var e = {};
                e.maskShapeStyle = {
                    maskAlpha: .8,
                    maskColor: 0
                },
                PopViewManager.getInstance().openView(new t.SixGodOneKeyPop, e)
            },
            this),
            ImageButtonUtil.add(this.btn1,
            function() {
                ModuleManager.showModule("sixGod", [], null, "SixGodSword", AppDoStyle.HIDEN)
            },
            this),
            ImageButtonUtil.add(this.btn2,
            function() {
                ModuleManager.showModule("sixGod", [], null, "SixGodHeart", AppDoStyle.HIDEN)
            },
            this),
            ImageButtonUtil.add(this.btn3,
            function() {
                ModuleManager.showModule("sixGod", [], null, "SixGodSoul", AppDoStyle.HIDEN)
            },
            this),
            ImageButtonUtil.add(this.btnGot,
            function() {
                for (var t = 0,
                e = 0; 3 > e; e++) ItemManager.getNumByID(1712550 + e) > 0 && t++;
                if (3 > t) {
                    var n = 249979 + t;
                    BuyProductManager.buyProductBySocket(n,
                    function() {
                        SocketConnection.sendByQueue(45718, [1, t],
                        function() {
                            i.updateView()
                        })
                    },
                    i)
                }
            },
            this),
            ImageButtonUtil.add(this.btnUp,
            function() {
                ModuleManager.showModule("sixGod", [], null, "SixGodUp", AppDoStyle.HIDEN)
            },
            this),
            ImageButtonUtil.add(this.getPet,
            function() {
                SocketConnection.sendByQueue(45718, [2, 0],
                function() {
                    i.updateView()
                })
            },
            this),
            EventManager.addEventListener("SixGodOneKeyPop_oneKey_pop", this.updateView, this),
            this.updateView()
        },
        i.prototype.reShow = function() {
            this.updateView()
        },
        i.prototype.updateView = function() {
            var t = this;
            KTool.getMultiValue([102486, 102487],
            function(e) {
                for (var i = e[0], n = !0, o = 0; 3 > o; o++) {
                    var a = 1 == KTool.getBit(i, o + 1);
                    t["btn" + (o + 1)].touchEnabled = !a,
                    t["got" + (o + 1)].visible = a,
                    t["go" + (o + 1)].visible = !a;
                    var r = ItemManager.getNumByID(1712550 + o);
                    t["txt" + (o + 1)].text = r + "/1",
                    a || (n = !1)
                }
                var s = 1 == KTool.getBit(i, 4);
                t.gotPet.visible = t.btnUp.visible = t.oneKey.visible = s,
                t.getPet.visible = !s && n,
                t.btnGot.visible = !s;
                for (var u = !0,
                o = 1; 3 >= o; o++) 0 == KTool.getBit(e[1], o) && (u = !1);
                t.got0.visible = u,
                t.btnUp.touchEnabled = !u,
                !s && DisplayUtil.setEnabled(t.btnGot, !n, !0),
                s && KTool.getBitSet([15165],
                function(e) {
                    var i = 1 == e[0];
                    t.oneKey.touchEnabled = !i,
                    t.got.visible = i
                })
            })
        },
        i.prototype.destroy = function() {
            e.prototype.destroy.call(this)
        },
        i
    } (BaseModule);
    t.SixGod = e,
    __reflect(e.prototype, "sixGod.SixGod")
} (sixGod || (sixGod = {}));
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
sixGod; !
function(t) {
    var e = function(e) {
        function n() {
            var t = e.call(this) || this;
            return t.boss = [{
                id: 2924,
                num: 2
            },
            {
                id: 2946,
                num: 2
            },
            {
                id: 2950,
                num: 2
            },
            {
                id: 2957,
                num: 3
            },
            {
                id: 2975,
                num: 3
            },
            {
                id: 2979,
                num: 3
            },
            {
                id: 2990,
                num: 4
            },
            {
                id: 2819,
                num: 5
            }],
            t.id = 1712555,
            t.skinName = SixGodHeartSkin,
            t
        }
        return __extends(n, e),
        n.prototype.childrenCreated = function() {
            var n = this;
            e.prototype.childrenCreated.call(this),
            this.adaptBgByScale(this.bg),
            this.initOldPveBtnClose(0, this, "six_god_heart_title_png"),
            this.adaptLeftContent(this.mainGroup),
            this.adaptRightContent(this.mainGroup),
            this.ani = SpineUtil.createAnimate("quan"),
            this.ani.visible = !1,
            this.aniGroup.addChild(this.ani),
            ImageButtonUtil.add(this.bag,
            function() {
                ModuleManager.showModuleByID(10)
            },
            this),
            ImageButtonUtil.add(this.cure,
            function() {
                PetManager.cureAll()
            },
            this),
            ImageButtonUtil.add(this.btnGet,
            function() {
                StatLogger.log("20230721版本系统功能", "六界帝神搬迁", "界王神心关卡-点击【一键获得】"),
                BuyProductManager.buyProduct("249983_9981", n.updateView, n)
            },
            this),
            ImageButtonUtil.add(this.add,
            function() {
                BuyProductManager.buyProduct("249991_9989", n.updateView, n, n.id)
            },
            this),
            ImageButtonUtil.add(this.btnBuy,
            function() {
                StatLogger.log("20230721版本系统功能", "六界帝神搬迁", "界王神心关卡-点击【购买次数】"),
                BuyProductManager.buyProduct("249990_9984", n.updateView, n)
            },
            this),
            ImageButtonUtil.add(this.btnChallenge,
            function() {
                if (t.SixGodManager.heartTimes >= 12) return void BubblerManager.getInstance().showText("今日剩余挑战次数不足。");
                StatLogger.log("20230721版本系统功能", "六界帝神搬迁", "界王神心关卡-点击【开始挑战】");
                var e = ~~n._list.selectedIndex;
                FightManager.fightNoMapBoss(9229 + e)
            },
            this),
            ImageButtonUtil.add(this.getItem,
            function() {
                KTool.doExchange(9979, 1,
                function() {
                    StatLogger.log("20230721版本系统功能", "六界帝神搬迁", "界王神心关卡-点击【领取神心】"),
                    n.updateView()
                })
            },
            this),
            EventManager.addEventListener(PetFightEvent.ALARM_CLICK,
            function(t) {
                FightManager.isWin || BubblerManager.getInstance().showText("很遗憾挑战失败，进度重置！")
            },
            this),
            this._list.itemRenderer = i,
            this._list.dataProvider = new eui.ArrayCollection(this.boss),
            this.icon.source = this.rew.source = ClientConfig.getItemIcon(this.id),
            EventManager.addEventListener(GameEvent.NOTIFY_ITEM_CHANGE,
            function() {
                var t = ItemManager.getNumByID(n.id);
                n.num.text = t + "/40",
                n.bar.value = t,
                n.getItem.visible = t >= 40,
                n.btnGet.visible = 40 > t,
                DisplayUtil.setEnabled(n.btnChallenge, 40 > t, !0),
                DisplayUtil.setEnabled(n.btnBuy, 40 > t, !0),
                DisplayUtil.setEnabled(n.add, 40 > t, !0),
                n.play()
            },
            this),
            this.bar.maximum = 40,
            this.updateView()
        },
        n.prototype.reShow = function() {
            this.updateView()
        },
        n.prototype.updateView = function() {
            var e = this;
            t.SixGodManager.getHeartValue().then(function() {
                var i = t.SixGodManager.heartBoss;
                EventManager.dispatchEventWith("SixGodHeartItem_update"),
                e._list.setSelectedIndex(i);
                var n = ItemManager.getNumByID(e.id);
                e.num.text = n + "/40",
                e.bar.value = n,
                e.getItem.visible = n >= 40,
                e.btnGet.visible = 40 > n,
                e.play(),
                e.rewardNum.text = "" + e.boss[i].num;
                var o = 12 - t.SixGodManager.heartTimes;
                if (e.times.text = o + "/12", e.btnChallenge.visible = o > 0, DisplayUtil.setEnabled(e.btnChallenge, 40 > n, !0), e.btnBuy.visible = 1 > o, DisplayUtil.setEnabled(e.btnBuy, 40 > n, !0), DisplayUtil.setEnabled(e.add, 40 > n, !0), 1 == KTool.getBit(t.SixGodManager.allState, 2)) {
                    var a = t.SixGodManager.checkAllNum();
                    if (3 > a) {
                        var r = "已成功合成出界王神心！现在至尊获得六界帝神<font color= #1cfff2>仅" + [798, 598][a - 1] + "钻石！</font>";
                        Alarm.show(r,
                        function() {
                            e.onClose()
                        })
                    } else e.onClose()
                }
            })
        },
        n.prototype.play = function() {
            var t = ItemManager.getNumByID(this.id);
            this.ani.visible = t >= 40,
            t >= 40 && this.ani.play("a", 0),
            40 > t && this.ani.stopAll()
        },
        n.prototype.destroy = function() {
            e.prototype.destroy.call(this),
            this.ani = null,
            this.aniGroup.removeChildren()
        },
        n
    } (BaseModule);
    t.SixGodHeart = e,
    __reflect(e.prototype, "sixGod.SixGodHeart");
    var i = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t.skinName = SixGodHeartItemSkin,
            t.cacheAsBitmap = !0,
            EventManager.addEventListener("SixGodHeartItem_update", t.updateView, t),
            t
        }
        return __extends(i, e),
        i.prototype.dataChanged = function() {
            e.prototype.dataChanged.call(this),
            this.data && (this.info = this.data, this.updateView())
        },
        i.prototype.updateView = function() {
            this.icon.source = ClientConfig.getPetHeadPath(this.info.id),
            this.num.text = "x" + this.info.num;
            var e = t.SixGodManager.heartBoss >= this.itemIndex + 1;
            this.currentState = e ? "got": t.SixGodManager.heartBoss == this.itemIndex ? "down": "up",
            this.touchEnabled = this.touchChildren = !1
        },
        i
    } (BaseItemRenderer);
    t.SixGodHeartItem = i,
    __reflect(i.prototype, "sixGod.SixGodHeartItem")
} (sixGod || (sixGod = {}));
var __reflect = this && this.__reflect ||
function(t, e, i) {
    t.__class__ = e,
    i ? i.push(e) : i = [e],
    t.__types__ = t.__types__ ? i.concat(t.__types__) : i
},
__awaiter = this && this.__awaiter ||
function(t, e, i, n) {
    return new(i || (i = Promise))(function(o, a) {
        function r(t) {
            try {
                u(n.next(t))
            } catch(e) {
                a(e)
            }
        }
        function s(t) {
            try {
                u(n["throw"](t))
            } catch(e) {
                a(e)
            }
        }
        function u(t) {
            t.done ? o(t.value) : new i(function(e) {
                e(t.value)
            }).then(r, s)
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
            if (o = 1, a && (r = a[2 & i[0] ? "return": i[0] ? "throw": "next"]) && !(r = r.call(a, i[1])).done) return r;
            switch (a = 0, r && (i = [0, r.value]), i[0]) {
            case 0:
            case 1:
                r = i;
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
                if (r = u.trys, !(r = r.length > 0 && r[r.length - 1]) && (6 === i[0] || 2 === i[0])) {
                    u = 0;
                    continue
                }
                if (3 === i[0] && (!r || i[1] > r[0] && i[1] < r[3])) {
                    u.label = i[1];
                    break
                }
                if (6 === i[0] && u.label < r[1]) {
                    u.label = r[1],
                    r = i;
                    break
                }
                if (r && u.label < r[2]) {
                    u.label = r[2],
                    u.ops.push(i);
                    break
                }
                r[2] && u.ops.pop(),
                u.trys.pop();
                continue
            }
            i = e.call(t, u)
        } catch(n) {
            i = [6, n],
            a = 0
        } finally {
            o = r = 0
        }
        if (5 & i[0]) throw i[1];
        return {
            value: i[0] ? i[1] : void 0,
            done: !0
        }
    }
    var o, a, r, s, u = {
        label: 0,
        sent: function() {
            if (1 & r[0]) throw r[1];
            return r[1]
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
sixGod; !
function(t) {
    var e = function() {
        function t() {}
        return t.getSwordValue = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var t, e;
                return __generator(this,
                function(i) {
                    switch (i.label) {
                    case 0:
                        return [4, KTool.getMultiValueAsync([102490, 102489, 102488, 13291, 102486])];
                    case 1:
                        return t = i.sent(),
                        this.allState = t.pop(),
                        this.swordTimes = t.pop(),
                        this.damages = [],
                        (e = this.damages).push.apply(e, t),
                        [2]
                    }
                })
            })
        },
        t.getHeartValue = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var t;
                return __generator(this,
                function(e) {
                    switch (e.label) {
                    case 0:
                        return [4, KTool.getMultiValueAsync([102491, 13292, 102486])];
                    case 1:
                        return t = e.sent(),
                        this.heartTimes = t[1],
                        this.heartBoss = t[0],
                        this.allState = t[2],
                        [2]
                    }
                })
            })
        },
        t.getSoulValue = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var t, e, i;
                return __generator(this,
                function(n) {
                    switch (n.label) {
                    case 0:
                        return [4, KTool.getMultiValueAsync([102492, 102493, 13293, 102486])];
                    case 1:
                        for (t = n.sent(), e = 1; 10 > e; e++) i = 1 == KTool.getBit(t[0], e) ? 2 : 1 == KTool.getBit(t[1], e) ? 1 : 0,
                        this.soulState[e - 1] = i;
                        return this.soulTimes = t[2],
                        this.allState = t[3],
                        [2]
                    }
                })
            })
        },
        t.checkAllNum = function() {
            for (var t = 0,
            e = 1; 4 > e; e++) 1 == KTool.getBit(this.allState, e) && t++;
            return t
        },
        t.getUpValue = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var t, e;
                return __generator(this,
                function(i) {
                    switch (i.label) {
                    case 0:
                        return [4, KTool.getMultiValueAsync([13294, 102494, 102487])];
                    case 1:
                        for (t = i.sent(), this.up3state = [], this.upFightStar = [], e = 1; 4 >= e; e++) 4 > e && this.up3state.push(KTool.getBit(t[2], e)),
                        this.upFightStar.push(KTool.getByte(t[1], e - 1));
                        return this.upTimes = t[0],
                        [2]
                    }
                })
            })
        },
        t.damages = [0, 0, 0],
        t.swordTimes = 0,
        t.heartBoss = 0,
        t.heartTimes = 0,
        t.soulTimes = 0,
        t.soulState = [],
        t.upTimes = 0,
        t.upFightStar = [],
        t.up3state = [],
        t.allState = 0,
        t
    } ();
    t.SixGodManager = e,
    __reflect(e.prototype, "sixGod.SixGodManager")
} (sixGod || (sixGod = {}));
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
sixGod; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.petId = 3329,
            e.skinName = SixGodOneKeyPopSkin,
            e
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            var e = this;
            t.prototype.childrenCreated.call(this),
            ImageButtonUtil.add(this.close, this.hide, this),
            ImageButtonUtil.add(this.btnBuy,
            function() {
                UserInfoManager.diamond >= 498 ? BuyProductManager.buyProductBySocket(25e4,
                function() {
                    PayManager.canPay() && (PetManager.isDefaultPet(e.petId) ? KTool.buyProductByCallback(25e4, 1,
                    function() {
                        for (var t = [5, 0, 1, 2, 3, 4], i = new egret.ByteArray, n = 0; 6 > n; n++) i.writeUnsignedInt([255, 0, 0, 0, 255, 0][t[n]]);
                        i.position = 0,
                        SocketConnection.sendWithPromise(46312, [5, 100, i]).then(function() {
                            BubblerManager.getInstance().showText("成为超级极品成功!"),
                            EventManager.dispatchEventWith("SixGodOneKeyPop_oneKey_pop"),
                            e.hide()
                        })
                    }) : Alarm.show("请将" + PetXMLInfo.getName(e.petId) + "设为首位！",
                    function() {
                        e.hide(),
                        ModuleManager.showModuleByID(10)
                    }))
                },
                e) : BubblerManager.getInstance().showText("钻石不足!")
            },
            this),
            ImageButtonUtil.add(this.btnAdd,
            function() {
                e.hide(),
                PayManager.rechargeDiamond()
            },
            this),
            EventManager.addEventListener(RobotEvent.DIAMOND_CHANGED,
            function(t) {
                e.txtDiamond.text = core.gameUtil.ConvertItemNumView(t.data, 0)
            },
            this),
            UserInfoManager.getDiamond(function(t) {
                e.txtDiamond.text = core.gameUtil.ConvertItemNumView(t, 0)
            },
            this),
            KTool.getBitSet([15165],
            function(t) {
                var i = 1 == t[0];
                DisplayUtil.setEnabled(e.btnBuy, !i, !0)
            })
        },
        e.prototype.destroy = function() {
            t.prototype.destroy.call(this),
            ImageButtonUtil.removeAll(this),
            EventManager.removeAll(this)
        },
        e
    } (PopView);
    t.SixGodOneKeyPop = e,
    __reflect(e.prototype, "sixGod.SixGodOneKeyPop")
} (sixGod || (sixGod = {}));
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
sixGod; !
function(t) {
    var e = function(e) {
        function n() {
            var t = e.call(this) || this;
            return t.skinName = SixGodSoulSkin,
            t
        }
        return __extends(n, e),
        n.prototype.childrenCreated = function() {
            var n = this;
            e.prototype.childrenCreated.call(this),
            this.adaptBgByScale(this.bg),
            this.initOldPveBtnClose(0, this, "six_god_soul_title_png"),
            this.adaptLeftContent(this.mainGroup),
            this.adaptRightContent(this.mainGroup),
            this._list.itemRenderer = i,
            this._list.dataProvider = new eui.ArrayCollection([1, 2, 3, 4, 5, 6, 7, 8, 9]),
            ImageButtonUtil.add(this.bag,
            function() {
                ModuleManager.showModuleByID(10)
            },
            this),
            ImageButtonUtil.add(this.cure,
            function() {
                PetManager.cureAll()
            },
            this),
            ImageButtonUtil.add(this.btnOneKey,
            function() {
                BuyProductManager.buyProductBySocket(249993,
                function() {
                    SocketConnection.sendByQueue(45718, [8, 0],
                    function() {
                        n.updateView()
                    })
                },
                n)
            },
            this),
            ImageButtonUtil.add(this.btnAll,
            function() {
                StatLogger.log("20230721版本系统功能", "六界帝神搬迁", "界王神灵关卡-点击【一键全部翻开】"),
                BuyProductManager.buyProduct("249984_9982", n.updateView, n)
            },
            this),
            ImageButtonUtil.add(this.btnBuy,
            function() {
                StatLogger.log("20230721版本系统功能", "六界帝神搬迁", "界王神灵关卡-点击【购买次数】"),
                BuyProductManager.buyProduct("249992_9985", n.updateView, n)
            },
            this),
            ImageButtonUtil.add(this.btnChallenge,
            function() {
                return t.SixGodManager.soulTimes >= 10 ? void BubblerManager.getInstance().showText("今日剩余挑战次数不足。") : (StatLogger.log("20230721版本系统功能", "六界帝神搬迁", "界王神灵关卡-点击【开始挑战】"), void FightManager.fightNoMapBoss(9238))
            },
            this),
            EventManager.addEventListener("SixGodSoulItem_buyProduct", this.updateView, this),
            this.updateView()
        },
        n.prototype.reShow = function() {
            this.updateView()
        },
        n.prototype.updateView = function() {
            var e = this;
            t.SixGodManager.getSoulValue().then(function() {
                EventManager.dispatchEventWith("SixGodSoulItem_update");
                var i = 10 - t.SixGodManager.soulTimes;
                e.times.text = i + "/10",
                e.btnChallenge.visible = i > 0,
                e.btnBuy.visible = 1 > i;
                var n = 1 == KTool.getBit(t.SixGodManager.allState, 3);
                if (DisplayUtil.setEnabled(e.btnOneKey, !n, !0), DisplayUtil.setEnabled(e.btnChallenge, !n, !0), DisplayUtil.setEnabled(e.btnAll, !n, !0), e._list.touchChildren = !n, t.SixGodManager.soulState.every(function(t) {
                    return 0 != t
                })) 0 == KTool.getBit(t.SixGodManager.allState, 3) ? SocketConnection.sendByQueue(45718, [5, 0],
                function() {
                    t.SixGodManager.getSoulValue().then(function() {
                        var i = t.SixGodManager.checkAllNum();
                        if (3 > i) {
                            var n = "已成功获得界王神灵！现在至尊获得六界帝神<font color= #1cfff2>仅" + [798, 598][i - 1] + "钻石！</font>";
                            Alarm.show(n,
                            function() {
                                e.onClose()
                            })
                        } else e.onClose()
                    })
                }) : e.onClose();
                else if (n) {
                    var o = t.SixGodManager.checkAllNum();
                    if (3 > o) {
                        var a = "已成功获得界王神灵！现在至尊获得六界帝神<font color= #1cfff2>仅" + [798, 598][o - 1] + "钻石！</font>";
                        Alarm.show(a,
                        function() {
                            e.onClose()
                        })
                    }
                }
            })
        },
        n
    } (BaseModule);
    t.SixGodSoul = e,
    __reflect(e.prototype, "sixGod.SixGodSoul");
    var i = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t.skinName = SixGodSoulItemSkin,
            EventManager.addEventListener("SixGodSoulItem_update", t.updateView, t),
            ImageButtonUtil.add(t.open,
            function() {
                BuyProductManager.buyProductBySocket(249994,
                function() {
                    SocketConnection.sendByQueue(45628, [9977, t.itemIndex + 1],
                    function() {
                        StatLogger.log("20230721版本系统功能", "六界帝神搬迁", "界王神灵关卡-点击任意【永久翻开】"),
                        EventManager.dispatchEventWith("SixGodSoulItem_buyProduct")
                    })
                },
                t)
            },
            t),
            t.ani = SpineUtil.createAnimate("fanzhuan"),
            t.ani.visible = !1,
            t.aniGroup.addChild(t.ani),
            t
        }
        return __extends(i, e),
        i.prototype.dataChanged = function() {
            e.prototype.dataChanged.call(this),
            this.data && this.updateView()
        },
        i.prototype.updateView = function() {
            var e = this,
            i = this.currentState,
            n = t.SixGodManager.soulState[this.itemIndex],
            o = 0 == n ? "not": 1 == n ? "opened": "forever";
            "not" == i && "opened" == o ? (this.ima.source = "", this.aniGroup.scaleX = -1, this.aniGroup.visible = this.ani.visible = !0, SpineUtil.play(this.ani, "b" + (this.itemIndex + 1) + "_1", this.aniGroup,
            function() {
                e.currentState = o
            },
            this, 1)) : "not" == o && "opened" == i ? (this.ima.source = "", this.aniGroup.scaleX = 1, this.open.visible = !1, this.aniGroup.visible = this.ani.visible = !0, SpineUtil.play(this.ani, "b" + (this.itemIndex + 1) + "_2", this.aniGroup,
            function() {
                e.currentState = o
            },
            this, 1)) : (this.ima.source = 0 == n ? "six_god_soul_not_png": "six_god_soul_ima" + (this.itemIndex + 1) + "_png", this.ani.visible = !1, this.open.visible = 1 == n, this.currentState = o)
        },
        i.prototype.destroy = function() {
            e.prototype.destroy.call(this),
            this.ani = null,
            this.aniGroup.removeChildren()
        },
        i
    } (BaseItemRenderer);
    t.SixGodSoulItem = i,
    __reflect(i.prototype, "sixGod.SixGodSoulItem")
} (sixGod || (sixGod = {}));
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
sixGod; !
function(t) {
    var e = function(e) {
        function n() {
            var t = e.call(this) || this;
            return t.id = 1712554,
            t.skinName = SixGodSwordSkin,
            t
        }
        return __extends(n, e),
        n.prototype.childrenCreated = function() {
            var n = this;
            e.prototype.childrenCreated.call(this),
            this.adaptBgByScale(this.bg),
            this.initOldPveBtnClose(0, this, "six_god_sword_title_png"),
            this.adaptLeftContent(this.mainGroup),
            this.adaptRightContent(this.mainGroup),
            this.ani = SpineUtil.createAnimate("quan"),
            this.ani.visible = !1,
            this.aniGroup.addChild(this.ani),
            ImageButtonUtil.add(this.bag,
            function() {
                ModuleManager.showModuleByID(10)
            },
            this),
            ImageButtonUtil.add(this.cure,
            function() {
                PetManager.cureAll()
            },
            this),
            ImageButtonUtil.add(this.btnOneKey,
            function() {
                var t = ~~n._list.selectedIndex,
                e = 249988 - t;
                BuyProductManager.buyProductBySocket(e,
                function() {
                    SocketConnection.sendByQueue(45718, [7, 3 - t],
                    function() {
                        n.updateView()
                    })
                },
                n)
            },
            this),
            ImageButtonUtil.add(this.btnGet,
            function() {
                StatLogger.log("20230721版本系统功能", "六界帝神搬迁", "界王神剑关卡-点击【一键获得】"),
                BuyProductManager.buyProduct("249982_9980", n.updateView, n)
            },
            this),
            ImageButtonUtil.add(this.add,
            function() {
                BuyProductManager.buyProduct("249989_9988", n.updateView, n, n.id)
            },
            this),
            ImageButtonUtil.add(this.btnBuy,
            function() {
                StatLogger.log("20230721版本系统功能", "六界帝神搬迁", "界王神剑关卡-点击【购买次数】"),
                BuyProductManager.buyProduct("249985_9983", n.updateView, n)
            },
            this),
            ImageButtonUtil.add(this.btnChallenge,
            function() {
                if (t.SixGodManager.swordTimes >= 10) return void BubblerManager.getInstance().showText("今日剩余挑战次数不足。");
                StatLogger.log("20230721版本系统功能", "六界帝神搬迁", "界王神剑关卡-点击【开始挑战】");
                var e = ~~n._list.selectedIndex;
                FightManager.fightNoMapBoss(9228 - e)
            },
            this),
            ImageButtonUtil.add(this.getItem,
            function() {
                KTool.doExchange(9978, 1,
                function() {
                    StatLogger.log("20230721版本系统功能", "六界帝神搬迁", "界王神剑关卡-点击【领取神剑】"),
                    n.updateView()
                })
            },
            this),
            EventManager.addEventListener(PetFightEvent.ALARM_CLICK,
            function(t) {},
            this),
            this._list.itemRenderer = i,
            this._list.dataProvider = new eui.ArrayCollection([2991, 2983, 2976]),
            this._list.addEventListener(eui.ItemTapEvent.ITEM_TAP,
            function() {
                StatLogger.log("20230721版本系统功能", "六界帝神搬迁", "界王神剑关卡-点击左侧切换难度"),
                n.updateView()
            },
            this),
            this.icon.source = ClientConfig.getItemIcon(this.id),
            EventManager.addEventListener(GameEvent.NOTIFY_ITEM_CHANGE,
            function() {
                var t = ItemManager.getNumByID(n.id);
                n.num.text = t + "/40",
                n.bar.value = t,
                n.getItem.visible = t >= 40,
                n.btnGet.visible = 40 > t,
                DisplayUtil.setEnabled(n.btnChallenge, 40 > t, !0),
                DisplayUtil.setEnabled(n.btnOneKey, 40 > t, !0),
                DisplayUtil.setEnabled(n.btnBuy, 40 > t, !0),
                DisplayUtil.setEnabled(n.add, 40 > t, !0),
                n.play()
            },
            this),
            this.bar.maximum = 40,
            this.updateView()
        },
        n.prototype.reShow = function() {
            this.updateView()
        },
        n.prototype.updateView = function() {
            var e = this;
            t.SixGodManager.getSwordValue().then(function() {
                e.barDamage.value = 0;
                var i = Math.max(~~e._list.selectedIndex, 0);
                e._list.setSelectedIndex(i);
                var n = ItemManager.getNumByID(e.id);
                e.num.text = n + "/40",
                e.bar.value = n,
                e.getItem.visible = n >= 40,
                e.btnGet.visible = 40 > n,
                e.play(),
                e.damage.text = "" + [7, 5, 3][i];
                var o = [5e3, 3e3, 2e3],
                a = t.SixGodManager.damages[i];
                e.damageNum.text = a + "/" + o[i],
                e.barDamage.maximum = o[i],
                e.barDamage.value = a;
                var r = 10 - t.SixGodManager.swordTimes;
                if (e.times.text = r + "/10", e.btnChallenge.visible = r > 0, DisplayUtil.setEnabled(e.btnChallenge, 40 > n, !0), DisplayUtil.setEnabled(e.btnOneKey, 40 > n, !0), DisplayUtil.setEnabled(e.btnBuy, 40 > n, !0), DisplayUtil.setEnabled(e.add, 40 > n, !0), e.btnBuy.visible = 1 > r, EventManager.dispatchEventWith("SixGodSwordItem_update"), 1 == KTool.getBit(t.SixGodManager.allState, 1)) {
                    var s = t.SixGodManager.checkAllNum();
                    if (3 > s) {
                        var u = "已成功锻造出界王神剑！现在至尊获得六界帝神<font color= #1cfff2>仅" + [798, 598][s - 1] + "钻石！</font>";
                        Alarm.show(u,
                        function() {
                            e.onClose()
                        })
                    } else e.onClose()
                }
            })
        },
        n.prototype.play = function() {
            var t = ItemManager.getNumByID(this.id);
            this.ani.visible = t >= 40,
            t >= 40 && this.ani.play("a", 0),
            40 > t && this.ani.stopAll()
        },
        n.prototype.destroy = function() {
            e.prototype.destroy.call(this),
            this._list.removeEventListener(eui.ItemTapEvent.ITEM_TAP, this.updateView, this)
        },
        n
    } (BaseModule);
    t.SixGodSword = e,
    __reflect(e.prototype, "sixGod.SixGodSword");
    var i = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t.skinName = SixGodSwordItemSkin,
            EventManager.addEventListener("SixGodSwordItem_update", t.updateView, t),
            t
        }
        return __extends(i, e),
        i.prototype.dataChanged = function() {
            e.prototype.dataChanged.call(this),
            this.data && (this.info = ~~this.data, this.updateView())
        },
        i.prototype.updateView = function() {
            this.pet.source = "six_god_sword_" + this.info + "_png";
            var e = t.SixGodManager.damages[this.itemIndex],
            i = [5e3, 3e3, 2e3];
            this.num.text = e + "/" + i[this.itemIndex],
            this.bar.maximum = i[this.itemIndex],
            this.bar.value = e
        },
        i
    } (BaseItemRenderer);
    t.SixGodSwordItem = i,
    __reflect(i.prototype, "sixGod.SixGodSwordItem")
} (sixGod || (sixGod = {}));
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
sixGod; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t.id = 1712553,
            t.skinName = SixGodUpSkin,
            t
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            var i = this;
            e.prototype.childrenCreated.call(this),
            this.adaptBgByScale(this.bg),
            this.initOldPveBtnClose(0, this, "six_god_up_title_png"),
            this.adaptLeftContent(this.mainGroup),
            this.adaptRightContent(this.mainGroup),
            ImageButtonUtil.add(this.bag,
            function() {
                ModuleManager.showModuleByID(10)
            },
            this),
            ImageButtonUtil.add(this.cure,
            function() {
                PetManager.cureAll()
            },
            this),
            ImageButtonUtil.add(this.add,
            function() {
                BuyProductManager.buyProduct("249998_9986", i.updateView, i, i.id)
            },
            this),
            ImageButtonUtil.add(this.btnBuy,
            function() {
                StatLogger.log("20230721版本系统功能", "六界帝神搬迁", "三件套关卡-点击【购买次数】"),
                BuyProductManager.buyProduct("249999_9987", i.updateView, i)
            },
            this),
            ImageButtonUtil.add(this.btnChallenge,
            function() {
                return t.SixGodManager.upTimes >= 5 ? void BubblerManager.getInstance().showText("今日剩余挑战次数不足。") : (StatLogger.log("20230721版本系统功能", "六界帝神搬迁", "三件套关卡-点击【开始挑战】"), void FightManager.fightNoMapBoss(9239))
            },
            this);
            for (var n = function(t) {
                ImageButtonUtil.add(o["btnOneKey" + t],
                function() {
                    PetManager.isDefaultPet(3329) ? BuyProductManager.buyProductBySocket(249994 + t,
                    function() {
                        SocketConnection.sendByQueue(45718, [4, t],
                        function() {
                            i.updateView(),
                            1 != t && Alert.show("已成功兑换" + ["专属特性", "第五技能"][t - 2] + "！\n是否立刻打开背包查看？",
                            function() {
                                ModuleManager.showModuleByID(10)
                            })
                        })
                    },
                    i) : Alarm.show("请将六界帝神放入背包首发位置",
                    function() {
                        ModuleManager.showModuleByID(10)
                    })
                },
                o),
                ImageButtonUtil.add(o["buy" + t],
                function() {
                    ItemManager.getNumByID(i.id) >= [70, 110, 120][t - 1] ? PetManager.isDefaultPet(3329) ? SocketConnection.sendByQueue(45718, [3, t],
                    function() {
                        i.updateView(),
                        1 != t && Alert.show("已成功兑换" + ["专属特性", "第五技能"][t - 2] + "！\n是否立刻打开背包查看？",
                        function() {
                            ModuleManager.showModuleByID(10)
                        })
                    }) : Alarm.show("请将六界帝神放入背包首发位置",
                    function() {
                        ModuleManager.showModuleByID(10)
                    }) : BubblerManager.getInstance().showText("六界之魄数量不足")
                },
                o)
            },
            o = this, a = 1; 4 > a; a++) n(a);
            ImageButtonUtil.add(this.item0,
            function() {
                var t = {
                    ins: 40875
                };
                tipsPop.TipsPop.openCounterMarkPop(t)
            },
            this),
            ImageButtonUtil.add(this.item1,
            function() {
                ModuleManager.showModule("petEffDescPanel", ["pet_eff_desc_panel"], 3329, "", AppDoStyle.NULL)
            },
            this),
            ImageButtonUtil.add(this.item2,
            function() {
                var t = {};
                t.id = 30552,
                tipsPop.TipsPop.openSkillPop(t)
            },
            this),
            this.icon.source = ClientConfig.getItemIcon(this.id),
            EventManager.addEventListener(PetFightEvent.ALARM_CLICK,
            function(e) {
                if (FightManager.isWin) {
                    var i = PopViewManager.createDefaultStyleObject();
                    i.ignoreMaskClick = !0,
                    PopViewManager.getInstance().openView(new t.SixGodUpPop, i)
                }
            },
            this),
            EventManager.addEventListener(GameEvent.NOTIFY_ITEM_CHANGE,
            function() {
                i.num.text = "" + ItemManager.getNumByID(i.id)
            },
            this),
            this.updateView()
        },
        i.prototype.reShow = function() {
            this.updateView()
        },
        i.prototype.updateView = function() {
            var e = this;
            t.SixGodManager.getUpValue().then(function() {
                e.num.text = "" + ItemManager.getNumByID(e.id);
                var i = 5 - t.SixGodManager.upTimes;
                e.times.text = i + "/5",
                e.btnChallenge.visible = i > 0,
                DisplayUtil.setEnabled(e.btnChallenge, t.SixGodManager.up3state.indexOf(0) > -1, !0),
                e.btnBuy.visible = 1 > i;
                for (var n = 0; 3 > n; n++) {
                    var o = 1 == t.SixGodManager.up3state[n];
                    e["buy" + (n + 1)].visible = !o,
                    e["btnOneKey" + (n + 1)].visible = !o,
                    e["got" + (n + 1)].visible = o
                }
                t.SixGodManager.up3state.indexOf(0) < 0 && e.onClose()
            })
        },
        i
    } (BaseModule);
    t.SixGodUp = e,
    __reflect(e.prototype, "sixGod.SixGodUp")
} (sixGod || (sixGod = {}));
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
    return new(i || (i = Promise))(function(o, a) {
        function r(t) {
            try {
                u(n.next(t))
            } catch(e) {
                a(e)
            }
        }
        function s(t) {
            try {
                u(n["throw"](t))
            } catch(e) {
                a(e)
            }
        }
        function u(t) {
            t.done ? o(t.value) : new i(function(e) {
                e(t.value)
            }).then(r, s)
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
            if (o = 1, a && (r = a[2 & i[0] ? "return": i[0] ? "throw": "next"]) && !(r = r.call(a, i[1])).done) return r;
            switch (a = 0, r && (i = [0, r.value]), i[0]) {
            case 0:
            case 1:
                r = i;
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
                if (r = u.trys, !(r = r.length > 0 && r[r.length - 1]) && (6 === i[0] || 2 === i[0])) {
                    u = 0;
                    continue
                }
                if (3 === i[0] && (!r || i[1] > r[0] && i[1] < r[3])) {
                    u.label = i[1];
                    break
                }
                if (6 === i[0] && u.label < r[1]) {
                    u.label = r[1],
                    r = i;
                    break
                }
                if (r && u.label < r[2]) {
                    u.label = r[2],
                    u.ops.push(i);
                    break
                }
                r[2] && u.ops.pop(),
                u.trys.pop();
                continue
            }
            i = e.call(t, u)
        } catch(n) {
            i = [6, n],
            a = 0
        } finally {
            o = r = 0
        }
        if (5 & i[0]) throw i[1];
        return {
            value: i[0] ? i[1] : void 0,
            done: !0
        }
    }
    var o, a, r, s, u = {
        label: 0,
        sent: function() {
            if (1 & r[0]) throw r[1];
            return r[1]
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
sixGod; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t.allNum = 0,
            t.skinName = SixGodUpPopSkin,
            t
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            var i = this;
            e.prototype.childrenCreated.call(this),
            this.ani = SpineUtil.createAnimate("xingxing"),
            ImageButtonUtil.add(this.btnGet,
            function() {
                t.SixGodManager.upFightStar[3] > 0 ? SocketConnection.sendByQueue(45718, [6, 0],
                function() {
                    AwardManager.resume(),
                    i.hide()
                }) : i.hide()
            },
            this)
        },
        i.prototype._upDateView = function() {
            var e = this;
            t.SixGodManager.getUpValue().then(function() {
                return __awaiter(e, void 0, void 0,
                function() {
                    var e, i = this;
                    return __generator(this,
                    function(n) {
                        return this.allNum = 0,
                        this.num.text = "x" + t.SixGodManager.upFightStar[3],
                        this.icon.source = ClientConfig.getItemIcon(1712553),
                        this.item.visible = this.not.visible = this.btnGet.visible = !1,
                        e = t.SixGodManager.upFightStar[3],
                        e > 0 ? [0, 0, 0].forEach(function(n, o) {
                            return __awaiter(i, void 0, void 0,
                            function() {
                                var i, n, a, r = this;
                                return __generator(this,
                                function(s) {
                                    switch (s.label) {
                                    case 0:
                                        i = t.SixGodManager.upFightStar[o],
                                        n = 0,
                                        s.label = 1;
                                    case 1:
                                        return i > n ? (a = SpineUtil.copy(this.ani), a.x = this["star_" + (7 - 3 * o + n)].x + 16, a.y = this["star_" + (7 - 3 * o + n)].y + 16, [4, wait(300)]) : [3, 4];
                                    case 2:
                                        s.sent(),
                                        SpineUtil.play(a, "c", this.aniGroup,
                                        function() {
                                            r.allNum++,
                                            r.allNum == e && (e > 0 ? (AwardManager.pause(), r.item.visible = r.btnGet.visible = !0, gsap.fromTo(r.item, {
                                                scaleX: 0,
                                                scaleY: 0
                                            },
                                            {
                                                scaleX: 1,
                                                scaleY: 1,
                                                duration: .2,
                                                ease: Quad.easeInOut
                                            })) : r.not.visible = r.btnGet.visible = !0)
                                        },
                                        this, 1),
                                        s.label = 3;
                                    case 3:
                                        return n++,
                                        [3, 1];
                                    case 4:
                                        return [2]
                                    }
                                })
                            })
                        }):
                        this.not.visible = this.btnGet.visible = !0,
                        [2]
                    })
                })
            })
        },
        i.prototype.destroy = function() {
            e.prototype.destroy.call(this),
            this.ani = null,
            this.aniGroup.removeChildren(),
            gsap.killTweensOf(this.item)
        },
        i
    } (PopView);
    t.SixGodUpPop = e,
    __reflect(e.prototype, "sixGod.SixGodUpPop")
} (sixGod || (sixGod = {}));
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
generateEUI.paths["resource/eui_skins/SixGodHeartItemSkin.exml"] = window.SixGodHeartItemSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["icon", "item", "num", "select", "got"],
        this.currentState = "up",
        this.height = 72,
        this.width = 72,
        this.elementsContent = [this._Image1_i(), this.icon_i(), this._Image2_i(), this.item_i(), this.num_i(), this.select_i(), this.got_i()],
        this.states = [new eui.State("down", [new eui.SetProperty("select", "visible", !0), new eui.SetProperty("got", "visible", !1)]), new eui.State("got", [new eui.SetProperty("select", "visible", !1)]), new eui.State("up", [new eui.SetProperty("select", "visible", !1), new eui.SetProperty("got", "visible", !1)])]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "six_god_heart_itembg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.icon_i = function() {
        var t = new eui.Image;
        return this.icon = t,
        t.height = 68,
        t.horizontalCenter = 0,
        t.verticalCenter = 0,
        t.width = 68,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "six_god_heart_headbg_png",
        t.x = 2,
        t.y = 54,
        t
    },
    i.item_i = function() {
        var t = new eui.Image;
        return this.item = t,
        t.source = "six_god_heart_headicon_png",
        t.x = 3,
        t.y = 52,
        t
    },
    i.num_i = function() {
        var t = new eui.Label;
        return this.num = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "x2",
        t.textColor = 16759667,
        t.x = 21,
        t.y = 54.385,
        t
    },
    i.select_i = function() {
        var t = new eui.Image;
        return this.select = t,
        t.height = 95,
        t.scale9Grid = new egret.Rectangle(29, 28, 5, 5),
        t.source = "six_god_sword_select_png",
        t.width = 95,
        t.x = -11,
        t.y = -11,
        t
    },
    i.got_i = function() {
        var t = new eui.Image;
        return this.got = t,
        t.source = "six_god_heart_got_png",
        t.x = 1,
        t.y = 2,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/SixGodHeartSkin.exml"] = window.SixGodHeartSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "rewardNum", "btnGet", "btnBuy", "times", "btnChallenge", "num", "add", "icon", "rew", "bar", "aniGroup", "getItem", "_list", "bag", "cure", "mainGroup"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this.mainGroup_i()]
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
            t.source = "six_god_sword_itemprogress_png",
            t.visible = !0,
            t.width = 143,
            t.x = 0,
            t.y = 0,
            t
        },
        e
    } (eui.Skin),
    n = e.prototype;
    return n.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.source = "six_god_sword_bg_jpg",
        t.x = 0,
        t.y = 0,
        t
    },
    n.mainGroup_i = function() {
        var t = new eui.Group;
        return this.mainGroup = t,
        t.height = 640,
        t.horizontalCenter = 0,
        t.left = 0,
        t.right = 0,
        t.verticalCenter = 0,
        t.elementsContent = [this._Image1_i(), this._Group3_i(), this._Group4_i(), this.bag_i(), this.cure_i(), this._Image11_i()],
        t
    },
    n._Image1_i = function() {
        var t = new eui.Image;
        return t.horizontalCenter = -72.5,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "six_god_sword_bgpet_png",
        t.y = 95,
        t
    },
    n._Group3_i = function() {
        var t = new eui.Group;
        return t.height = 640,
        t.right = 10,
        t.width = 368,
        t.y = 0,
        t.elementsContent = [this._Group2_i(), this.bar_i(), this._Image9_i(), this.aniGroup_i(), this.getItem_i()],
        t
    },
    n._Group2_i = function() {
        var t = new eui.Group;
        return t.cacheAsBitmap = !0,
        t.height = 640,
        t.scaleX = 1,
        t.scaleY = 1,
        t.visible = !0,
        t.width = 368,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image2_i(), this._Image3_i(), this.rewardNum_i(), this._Image4_i(), this.btnGet_i(), this.btnBuy_i(), this.btnChallenge_i(), this._Group1_i(), this._Label1_i(), this._Label2_i(), this._Image8_i(), this.rew_i()],
        t
    },
    n._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 640,
        t.source = "six_god_heart_rightbg_png",
        t.width = 368,
        t.x = 0,
        t.y = 0,
        t
    },
    n._Image3_i = function() {
        var t = new eui.Image;
        return t.height = 120,
        t.scale9Grid = new egret.Rectangle(105, 40, 11, 12),
        t.source = "six_god_heart_rightbg1_png",
        t.width = 352,
        t.x = 8,
        t.y = 373,
        t
    },
    n.rewardNum_i = function() {
        var t = new eui.Label;
        return this.rewardNum = t,
        t.fontFamily = "MFShangHei",
        t.scaleX = 1,
        t.scaleY = 1,
        t.size = 48,
        t.text = "0",
        t.textColor = 16769106,
        t.x = 227,
        t.y = 430,
        t
    },
    n._Image4_i = function() {
        var t = new eui.Image;
        return t.source = "six_god_sword_itemprogressbg_png",
        t.visible = !0,
        t.x = 63,
        t.y = 71,
        t
    },
    n.btnGet_i = function() {
        var t = new eui.Image;
        return this.btnGet = t,
        t.source = "six_god_sword_btnyijian_png",
        t.x = 111,
        t.y = 295,
        t
    },
    n.btnBuy_i = function() {
        var t = new eui.Image;
        return this.btnBuy = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "six_god_sword_btnbuy_png",
        t.visible = !0,
        t.x = 118.606,
        t.y = 565,
        t
    },
    n.btnChallenge_i = function() {
        var t = new eui.Group;
        return this.btnChallenge = t,
        t.visible = !0,
        t.x = 110.606,
        t.y = 555,
        t.elementsContent = [this._Image5_i(), this._Image6_i(), this.times_i()],
        t
    },
    n._Image5_i = function() {
        var t = new eui.Image;
        return t.scaleX = 1,
        t.scaleY = 1,
        t.source = "six_god_sword_btntiaozhan_png",
        t.x = 0,
        t.y = 10,
        t
    },
    n._Image6_i = function() {
        var t = new eui.Image;
        return t.scaleX = 1,
        t.scaleY = 1,
        t.source = "six_god_sword_timesbg_png",
        t.x = 104,
        t.y = 0,
        t
    },
    n.times_i = function() {
        var t = new eui.Label;
        return this.times = t,
        t.fontFamily = "MFShangHei",
        t.scaleX = 1,
        t.scaleY = 1,
        t.size = 18,
        t.text = "0/X",
        t.textColor = 16774231,
        t.x = 110,
        t.y = 4,
        t
    },
    n._Group1_i = function() {
        var t = new eui.Group;
        return t.height = 40,
        t.scaleX = 1,
        t.scaleY = 1,
        t.width = 185,
        t.x = 163,
        t.y = 12,
        t.elementsContent = [this._Image7_i(), this.num_i(), this.add_i(), this.icon_i()],
        t
    },
    n._Image7_i = function() {
        var t = new eui.Image;
        return t.source = "six_god_sword_di_png",
        t.x = 4,
        t.y = 11,
        t
    },
    n.num_i = function() {
        var t = new eui.Label;
        return this.num = t,
        t.fontFamily = "MFShangHei",
        t.right = 26,
        t.size = 18,
        t.text = "XX/40",
        t.textColor = 16514895,
        t.y = 10,
        t
    },
    n.add_i = function() {
        var t = new eui.Image;
        return this.add = t,
        t.source = "six_god_sword_add_png",
        t.x = 164,
        t.y = 11,
        t
    },
    n.icon_i = function() {
        var t = new eui.Image;
        return this.icon = t,
        t.height = 40,
        t.width = 40,
        t.x = 0,
        t.y = 0,
        t
    },
    n._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.lineSpacing = 2,
        t.size = 18,
        t.text = "挑战失败进度重置\n全部战胜可再次从头挑战",
        t.textAlign = "center",
        t.textColor = 16776661,
        t.width = 200,
        t.x = 84,
        t.y = 507,
        t
    },
    n._Label2_i = function() {
        var t = new eui.Label;
        return t.size = 30,
        t.text = "×",
        t.textColor = 16769106,
        t.x = 174,
        t.y = 444,
        t
    },
    n._Image8_i = function() {
        var t = new eui.Image;
        return t.source = "six_god_heart_zsjl_png",
        t.x = 117,
        t.y = 371,
        t
    },
    n.rew_i = function() {
        var t = new eui.Image;
        return this.rew = t,
        t.height = 49,
        t.width = 49,
        t.x = 110,
        t.y = 428,
        t
    },
    n.bar_i = function() {
        var t = new eui.ProgressBar;
        return this.bar = t,
        t.rotation = 270,
        t.scaleX = 1,
        t.scaleY = 1,
        t.value = 0,
        t.visible = !0,
        t.width = 143,
        t.x = 116,
        t.y = 269.2,
        t.skinName = i,
        t
    },
    n._Image9_i = function() {
        var t = new eui.Image;
        return t.scaleX = 1,
        t.scaleY = 1,
        t.source = "six_god_heart_1712551_png",
        t.visible = !0,
        t.x = 137,
        t.y = 153,
        t
    },
    n.aniGroup_i = function() {
        var t = new eui.Group;
        return this.aniGroup = t,
        t.width = 0,
        t.x = 188.543,
        t.y = 199.724,
        t
    },
    n.getItem_i = function() {
        var t = new eui.Image;
        return this.getItem = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "six_god_heart_getitem_png",
        t.visible = !0,
        t.x = 136,
        t.y = 146,
        t
    },
    n._Group4_i = function() {
        var t = new eui.Group;
        return t.height = 369,
        t.left = 18,
        t.scaleX = 1,
        t.scaleY = 1,
        t.width = 172,
        t.y = 73,
        t.elementsContent = [this._Image10_i(), this._Scroller1_i()],
        t
    },
    n._Image10_i = function() {
        var t = new eui.Image;
        return t.height = 368,
        t.source = "six_god_sword_did_png",
        t.width = 174,
        t.x = 0,
        t.y = 0,
        t
    },
    n._Scroller1_i = function() {
        var t = new eui.Scroller;
        return t.height = 368,
        t.width = 180,
        t.x = 0,
        t.y = 0,
        t.viewport = this._list_i(),
        t
    },
    n._list_i = function() {
        var t = new eui.List;
        return this._list = t,
        t.itemRendererSkinName = SixGodHeartItemSkin,
        t.layout = this._TileLayout1_i(),
        t
    },
    n._TileLayout1_i = function() {
        var t = new eui.TileLayout;
        return t.horizontalGap = 14,
        t.orientation = "rows",
        t.paddingBottom = 8,
        t.paddingLeft = 8,
        t.paddingRight = 8,
        t.paddingTop = 8,
        t.requestedColumnCount = 2,
        t.verticalGap = 20,
        t
    },
    n.bag_i = function() {
        var t = new eui.Image;
        return this.bag = t,
        t.left = 28,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "six_god_sword_bag_png",
        t.y = 451,
        t
    },
    n.cure_i = function() {
        var t = new eui.Image;
        return this.cure = t,
        t.left = 28,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "six_god_sword_cure_png",
        t.y = 542,
        t
    },
    n._Image11_i = function() {
        var t = new eui.Image;
        return t.horizontalCenter = -64,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "six_god_heart_tip_png",
        t.y = 45,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/SixGodOneKeyPopSkin.exml"] = window.SixGodOneKeyPopSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["close", "btnBuy", "txtDiamond", "btnAdd"],
        this.height = 608,
        this.width = 900,
        this.elementsContent = [this._Image1_i(), this.close_i(), this.btnBuy_i(), this.txtDiamond_i(), this.btnAdd_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 608,
        t.source = "six_god_one_key_pop_bg_png",
        t.width = 900,
        t.x = 0,
        t.y = 0,
        t
    },
    i.close_i = function() {
        var t = new eui.Image;
        return this.close = t,
        t.source = "six_god_one_key_pop_close_png",
        t.x = 936.471,
        t.y = 5.285,
        t
    },
    i.btnBuy_i = function() {
        var t = new eui.Image;
        return this.btnBuy = t,
        t.source = "six_god_one_key_pop_btnbuy_png",
        t.x = 366,
        t.y = 545,
        t
    },
    i.txtDiamond_i = function() {
        var t = new eui.Label;
        return this.txtDiamond = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "2218",
        t.textColor = 16774499,
        t.x = 468,
        t.y = 516,
        t
    },
    i.btnAdd_i = function() {
        var t = new eui.Image;
        return this.btnAdd = t,
        t.source = "six_god_one_key_pop_btnadd_png",
        t.x = 539,
        t.y = 513,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/SixGodSkin.exml"] = window.SixGodSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "gotPet", "getPet", "txt3", "go3", "btn3", "got3", "txt2", "go2", "btn2", "got2", "txt1", "go1", "btn1", "got1", "oneKey", "btnGot", "btnUp", "got", "got0", "btnInfo"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this._Group1_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.source = "six_god_main_bg_jpg",
        t.x = 0,
        t.y = 0,
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.cacheAsBitmap = !0,
        t.height = 301,
        t.horizontalCenter = 3.5,
        t.visible = !0,
        t.width = 1087,
        t.y = 320,
        t.elementsContent = [this.gotPet_i(), this.getPet_i(), this.btn3_i(), this.got3_i(), this.btn2_i(), this.got2_i(), this.btn1_i(), this.got1_i(), this.oneKey_i(), this.btnGot_i(), this.btnUp_i(), this.got_i(), this.got0_i(), this.btnInfo_i()],
        t
    },
    i.gotPet_i = function() {
        var t = new eui.Image;
        return this.gotPet = t,
        t.source = "six_god_main_gotpet_png",
        t.visible = !1,
        t.x = 633,
        t.y = 49,
        t
    },
    i.getPet_i = function() {
        var t = new eui.Image;
        return this.getPet = t,
        t.source = "six_god_main_getpet_png",
        t.visible = !1,
        t.x = 611,
        t.y = 34,
        t
    },
    i.btn3_i = function() {
        var t = new eui.Group;
        return this.btn3 = t,
        t.height = 90,
        t.width = 331,
        t.x = 756,
        t.y = 211,
        t.elementsContent = [this._Image1_i(), this.txt3_i(), this.go3_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "six_god_main_btn3_png",
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t
    },
    i.txt3_i = function() {
        var t = new eui.Label;
        return this.txt3 = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = -115,
        t.size = 14,
        t.text = "10/1",
        t.textColor = 16774499,
        t.y = 62.266,
        t
    },
    i.go3_i = function() {
        var t = new eui.Image;
        return this.go3 = t,
        t.source = "six_god_main_go1_png",
        t.x = 188,
        t.y = 56,
        t
    },
    i.got3_i = function() {
        var t = new eui.Image;
        return this.got3 = t,
        t.source = "six_god_main_got1_png",
        t.visible = !1,
        t.x = 756,
        t.y = 216,
        t
    },
    i.btn2_i = function() {
        var t = new eui.Group;
        return this.btn2 = t,
        t.height = 90,
        t.width = 331,
        t.x = 376,
        t.y = 215,
        t.elementsContent = [this._Image2_i(), this.txt2_i(), this.go2_i()],
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "six_god_main_btn2_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.txt2_i = function() {
        var t = new eui.Label;
        return this.txt2 = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = -116,
        t.size = 14,
        t.text = "10/1",
        t.textColor = 16774499,
        t.y = 58,
        t
    },
    i.go2_i = function() {
        var t = new eui.Image;
        return this.go2 = t,
        t.source = "six_god_main_go1_png",
        t.x = 188,
        t.y = 52,
        t
    },
    i.got2_i = function() {
        var t = new eui.Image;
        return this.got2 = t,
        t.source = "six_god_main_got1_png",
        t.visible = !1,
        t.x = 376,
        t.y = 216,
        t
    },
    i.btn1_i = function() {
        var t = new eui.Group;
        return this.btn1 = t,
        t.height = 91,
        t.width = 331,
        t.x = 0,
        t.y = 210,
        t.elementsContent = [this._Image3_i(), this.txt1_i(), this.go1_i()],
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "six_god_main_btn1_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.txt1_i = function() {
        var t = new eui.Label;
        return this.txt1 = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = -116,
        t.size = 14,
        t.text = "10/1",
        t.textColor = 16774499,
        t.y = 63,
        t
    },
    i.go1_i = function() {
        var t = new eui.Image;
        return this.go1 = t,
        t.source = "six_god_main_go1_png",
        t.x = 188,
        t.y = 57,
        t
    },
    i.got1_i = function() {
        var t = new eui.Image;
        return this.got1 = t,
        t.source = "six_god_main_got1_png",
        t.visible = !1,
        t.x = 0,
        t.y = 216,
        t
    },
    i.oneKey_i = function() {
        var t = new eui.Image;
        return this.oneKey = t,
        t.source = "six_god_main_onekey_png",
        t.visible = !0,
        t.x = 976,
        t.y = 0,
        t
    },
    i.btnGot_i = function() {
        var t = new eui.Image;
        return this.btnGot = t,
        t.source = "six_god_main_btngot_png",
        t.visible = !0,
        t.x = 977,
        t.y = 92,
        t
    },
    i.btnUp_i = function() {
        var t = new eui.Image;
        return this.btnUp = t,
        t.source = "six_god_main_btnup_png",
        t.visible = !0,
        t.x = 977,
        t.y = 92,
        t
    },
    i.got_i = function() {
        var t = new eui.Image;
        return this.got = t,
        t.source = "six_god_main_got_png",
        t.visible = !1,
        t.x = 971,
        t.y = 20,
        t
    },
    i.got0_i = function() {
        var t = new eui.Image;
        return this.got0 = t,
        t.source = "six_god_main_got_png",
        t.visible = !1,
        t.x = 971,
        t.y = 109.76,
        t
    },
    i.btnInfo_i = function() {
        var t = new eui.Image;
        return this.btnInfo = t,
        t.source = "six_god_main_btninfo_png",
        t.x = 17,
        t.y = 102,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/SixGodSoulItemSkin.exml"] = window.SixGodSoulItemSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["ima", "aniGroup", "lock", "open"],
        this.height = 130,
        this.width = 176,
        this.elementsContent = [this.ima_i(), this.aniGroup_i(), this.lock_i(), this.open_i()],
        this.states = [new eui.State("not", [new eui.SetProperty("lock", "visible", !1), new eui.SetProperty("open", "visible", !1)]), new eui.State("opened", [new eui.SetProperty("lock", "visible", !1), new eui.SetProperty("open", "visible", !0)]), new eui.State("forever", [new eui.SetProperty("open", "visible", !1)])]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.ima_i = function() {
        var t = new eui.Image;
        return this.ima = t,
        t.source = "six_god_soul_ima1_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.aniGroup_i = function() {
        var t = new eui.Group;
        return this.aniGroup = t,
        t.x = 87.5,
        t.y = 65,
        t
    },
    i.lock_i = function() {
        var t = new eui.Image;
        return this.lock = t,
        t.source = "six_god_soul_lock_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.open_i = function() {
        var t = new eui.Image;
        return this.open = t,
        t.source = "six_god_soul_btnyongjiu_png",
        t.x = 45,
        t.y = 88,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/SixGodSoulSkin.exml"] = window.SixGodSoulSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "_list", "btnAll", "bag", "cure", "btnOneKey", "btnBuy", "times", "btnChallenge", "mainGroup"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this.mainGroup_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.source = "six_god_sword_bg_jpg",
        t.x = 0,
        t.y = 0,
        t
    },
    i.mainGroup_i = function() {
        var t = new eui.Group;
        return this.mainGroup = t,
        t.height = 640,
        t.horizontalCenter = 0,
        t.left = 0,
        t.right = 0,
        t.y = 0,
        t.elementsContent = [this._Image1_i(), this._Image2_i(), this._Scroller1_i(), this.btnAll_i(), this.bag_i(), this.cure_i(), this.btnOneKey_i(), this.btnBuy_i(), this.btnChallenge_i(), this._Image5_i(), this._Label1_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.horizontalCenter = 330,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "six_god_soul_t3_png",
        t.x = 557,
        t.y = 25,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 428,
        t.horizontalCenter = -139,
        t.scale9Grid = new egret.Rectangle(43, 45, 14, 9),
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "six_god_soul_mas_png",
        t.width = 566,
        t.x = 146,
        t.y = 119,
        t
    },
    i._Scroller1_i = function() {
        var t = new eui.Scroller;
        return t.height = 392,
        t.horizontalCenter = -137,
        t.scaleX = 1,
        t.scaleY = 1,
        t.width = 530,
        t.x = 166,
        t.y = 138,
        t.viewport = this._list_i(),
        t
    },
    i._list_i = function() {
        var t = new eui.List;
        return this._list = t,
        t.layout = this._TileLayout1_i(),
        t
    },
    i._TileLayout1_i = function() {
        var t = new eui.TileLayout;
        return t.horizontalGap = 0,
        t.requestedColumnCount = 3,
        t.requestedRowCount = 3,
        t.verticalGap = 0,
        t
    },
    i.btnAll_i = function() {
        var t = new eui.Image;
        return this.btnAll = t,
        t.horizontalCenter = -137.5,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "six_god_soul_btnyijian_png",
        t.x = 315,
        t.y = 556,
        t
    },
    i.bag_i = function() {
        var t = new eui.Image;
        return this.bag = t,
        t.left = 28,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "six_god_sword_bag_png",
        t.x = 28,
        t.y = 451,
        t
    },
    i.cure_i = function() {
        var t = new eui.Image;
        return this.cure = t,
        t.left = 28,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "six_god_sword_cure_png",
        t.x = 28,
        t.y = 542,
        t
    },
    i.btnOneKey_i = function() {
        var t = new eui.Image;
        return this.btnOneKey = t,
        t.horizontalCenter = 292,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "six_god_sword_btnonekey_png",
        t.x = 792,
        t.y = 565,
        t
    },
    i.btnBuy_i = function() {
        var t = new eui.Image;
        return this.btnBuy = t,
        t.horizontalCenter = 453,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "six_god_sword_btnbuy_png",
        t.visible = !0,
        t.x = 953,
        t.y = 565,
        t
    },
    i.btnChallenge_i = function() {
        var t = new eui.Group;
        return this.btnChallenge = t,
        t.horizontalCenter = 462.5,
        t.scaleX = 1,
        t.scaleY = 1,
        t.visible = !0,
        t.x = 954,
        t.y = 555,
        t.elementsContent = [this._Image3_i(), this._Image4_i(), this.times_i()],
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.scaleX = 1,
        t.scaleY = 1,
        t.source = "six_god_sword_btntiaozhan_png",
        t.x = 0,
        t.y = 10,
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.scaleX = 1,
        t.scaleY = 1,
        t.source = "six_god_sword_timesbg_png",
        t.x = 104,
        t.y = 0,
        t
    },
    i.times_i = function() {
        var t = new eui.Label;
        return this.times = t,
        t.fontFamily = "MFShangHei",
        t.scaleX = 1,
        t.scaleY = 1,
        t.size = 18,
        t.text = "0/X",
        t.textColor = 16774231,
        t.x = 110,
        t.y = 4,
        t
    },
    i._Image5_i = function() {
        var t = new eui.Image;
        return t.height = 54,
        t.horizontalCenter = -138.5,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "six_god_soul_tipsbg_png",
        t.width = 415,
        t.x = 222,
        t.y = 49,
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.horizontalCenter = -150.5,
        t.lineSpacing = 6,
        t.scaleX = 1,
        t.scaleY = 1,
        t.size = 20,
        t.text = "9块卡牌全部被翻开即可获得神灵完成关卡\n已翻开的卡牌再次翻转将会被翻回",
        t.textAlign = "center",
        t.textColor = 16759667,
        t.width = 373,
        t.x = 231,
        t.y = 53,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/SixGodSwordItemSkin.exml"] = window.SixGodSwordItemSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["pet", "num", "bar", "select"],
        this.currentState = "up",
        this.height = 108,
        this.width = 212,
        this.elementsContent = [this._Group1_i(), this.bar_i(), this.select_i()],
        this.states = [new eui.State("down", []), new eui.State("up", [new eui.SetProperty("select", "visible", !1)])]
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
            t.source = "six_god_sword_progresshead_png",
            t.visible = !0,
            t.x = 0,
            t.y = 0,
            t
        },
        e
    } (eui.Skin),
    n = e.prototype;
    return n._Group1_i = function() {
        var t = new eui.Group;
        return t.cacheAsBitmap = !0,
        t.height = 108,
        t.width = 212,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image1_i(), this.pet_i(), this._Image2_i(), this.num_i()],
        t
    },
    n._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 108,
        t.scale9Grid = new egret.Rectangle(7, 8, 6, 5),
        t.source = "six_god_sword_petbg_png",
        t.width = 212,
        t.x = 0,
        t.y = 0,
        t
    },
    n.pet_i = function() {
        var t = new eui.Image;
        return this.pet = t,
        t.source = "six_god_sword_2991_png",
        t.x = 2,
        t.y = 2,
        t
    },
    n._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "six_god_sword_headmask_png",
        t.x = 2,
        t.y = 80,
        t
    },
    n.num_i = function() {
        var t = new eui.Label;
        return this.num = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "0/5000",
        t.textColor = 16759667,
        t.x = 7.256,
        t.y = 80,
        t
    },
    n.bar_i = function() {
        var t = new eui.ProgressBar;
        return this.bar = t,
        t.value = 0,
        t.visible = !0,
        t.x = 2,
        t.y = 96,
        t.skinName = i,
        t
    },
    n.select_i = function() {
        var t = new eui.Image;
        return this.select = t,
        t.height = 130,
        t.horizontalCenter = 0,
        t.scale9Grid = new egret.Rectangle(27, 27, 6, 8),
        t.source = "six_god_sword_select_png",
        t.verticalCenter = 0,
        t.width = 235,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/SixGodSwordSkin.exml"] = window.SixGodSwordSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "bag", "cure", "damage", "btnGet", "btnOneKey", "btnBuy", "times", "btnChallenge", "num", "add", "icon", "bar", "barDamage", "damageNum", "aniGroup", "getItem", "_list", "mainGroup"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this.mainGroup_i()]
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
            t.source = "six_god_sword_itemprogress_png",
            t.visible = !0,
            t.width = 143,
            t.x = 0,
            t.y = 0,
            t
        },
        e
    } (eui.Skin),
    n = function(t) {
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
            t.source = "six_god_sword_damegeprogress_png",
            t.visible = !0,
            t.x = 0,
            t.y = 0,
            t
        },
        e
    } (eui.Skin),
    o = e.prototype;
    return o.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.horizontalCenter = 0,
        t.source = "six_god_sword_bg_jpg",
        t.verticalCenter = 0,
        t
    },
    o.mainGroup_i = function() {
        var t = new eui.Group;
        return this.mainGroup = t,
        t.height = 640,
        t.horizontalCenter = 0,
        t.left = 0,
        t.right = 0,
        t.verticalCenter = 0,
        t.elementsContent = [this._Image1_i(), this._Image2_i(), this.bag_i(), this.cure_i(), this._Group3_i(), this._Image10_i(), this._Scroller1_i()],
        t
    },
    o._Image1_i = function() {
        var t = new eui.Image;
        return t.horizontalCenter = -72.5,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "six_god_sword_bgpet_png",
        t.y = 95,
        t
    },
    o._Image2_i = function() {
        var t = new eui.Image;
        return t.horizontalCenter = -64,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "six_god_sword_tip_png",
        t.y = 44,
        t
    },
    o.bag_i = function() {
        var t = new eui.Image;
        return this.bag = t,
        t.left = 28,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "six_god_sword_bag_png",
        t.y = 451,
        t
    },
    o.cure_i = function() {
        var t = new eui.Image;
        return this.cure = t,
        t.left = 28,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "six_god_sword_cure_png",
        t.y = 542,
        t
    },
    o._Group3_i = function() {
        var t = new eui.Group;
        return t.height = 640,
        t.right = 10,
        t.width = 368,
        t.y = 0,
        t.elementsContent = [this._Group2_i(), this.bar_i(), this.barDamage_i(), this.damageNum_i(), this._Image9_i(), this.aniGroup_i(), this.getItem_i()],
        t
    },
    o._Group2_i = function() {
        var t = new eui.Group;
        return t.cacheAsBitmap = !0,
        t.height = 640,
        t.visible = !0,
        t.width = 368,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image3_i(), this._Image4_i(), this.damage_i(), this._Image5_i(), this.btnGet_i(), this.btnOneKey_i(), this.btnBuy_i(), this.btnChallenge_i(), this._Group1_i()],
        t
    },
    o._Image3_i = function() {
        var t = new eui.Image;
        return t.scaleX = 1,
        t.scaleY = 1,
        t.source = "six_god_heart_rightbg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    o._Image4_i = function() {
        var t = new eui.Image;
        return t.source = "six_god_sword_rightbg1_png",
        t.x = 8.446,
        t.y = 370.297,
        t
    },
    o.damage_i = function() {
        var t = new eui.Label;
        return this.damage = t,
        t.fontFamily = "MFShangHei",
        t.scaleX = 1,
        t.scaleY = 1,
        t.size = 48,
        t.text = "0",
        t.textColor = 16769106,
        t.x = 228,
        t.y = 414,
        t
    },
    o._Image5_i = function() {
        var t = new eui.Image;
        return t.source = "six_god_sword_itemprogressbg_png",
        t.x = 63,
        t.y = 71,
        t
    },
    o.btnGet_i = function() {
        var t = new eui.Image;
        return this.btnGet = t,
        t.source = "six_god_sword_btnyijian_png",
        t.x = 111,
        t.y = 295,
        t
    },
    o.btnOneKey_i = function() {
        var t = new eui.Image;
        return this.btnOneKey = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "six_god_sword_btnonekey_png",
        t.x = 40,
        t.y = 565,
        t
    },
    o.btnBuy_i = function() {
        var t = new eui.Image;
        return this.btnBuy = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "six_god_sword_btnbuy_png",
        t.visible = !1,
        t.x = 201,
        t.y = 565,
        t
    },
    o.btnChallenge_i = function() {
        var t = new eui.Group;
        return this.btnChallenge = t,
        t.visible = !0,
        t.x = 202,
        t.y = 555,
        t.elementsContent = [this._Image6_i(), this._Image7_i(), this.times_i()],
        t
    },
    o._Image6_i = function() {
        var t = new eui.Image;
        return t.scaleX = 1,
        t.scaleY = 1,
        t.source = "six_god_sword_btntiaozhan_png",
        t.x = 0,
        t.y = 10,
        t
    },
    o._Image7_i = function() {
        var t = new eui.Image;
        return t.scaleX = 1,
        t.scaleY = 1,
        t.source = "six_god_sword_timesbg_png",
        t.x = 104,
        t.y = 0,
        t
    },
    o.times_i = function() {
        var t = new eui.Label;
        return this.times = t,
        t.fontFamily = "MFShangHei",
        t.scaleX = 1,
        t.scaleY = 1,
        t.size = 18,
        t.text = "0/X",
        t.textColor = 16774231,
        t.x = 110,
        t.y = 4,
        t
    },
    o._Group1_i = function() {
        var t = new eui.Group;
        return t.height = 40,
        t.scaleX = 1,
        t.scaleY = 1,
        t.width = 185,
        t.x = 163,
        t.y = 12,
        t.elementsContent = [this._Image8_i(), this.num_i(), this.add_i(), this.icon_i()],
        t
    },
    o._Image8_i = function() {
        var t = new eui.Image;
        return t.source = "six_god_sword_di_png",
        t.x = 4,
        t.y = 11,
        t
    },
    o.num_i = function() {
        var t = new eui.Label;
        return this.num = t,
        t.fontFamily = "MFShangHei",
        t.right = 26,
        t.size = 18,
        t.text = "XX/40",
        t.textColor = 16514895,
        t.y = 10,
        t
    },
    o.add_i = function() {
        var t = new eui.Image;
        return this.add = t,
        t.source = "six_god_sword_add_png",
        t.x = 164,
        t.y = 11,
        t
    },
    o.icon_i = function() {
        var t = new eui.Image;
        return this.icon = t,
        t.height = 40,
        t.width = 40,
        t.x = 0,
        t.y = 0,
        t
    },
    o.bar_i = function() {
        var t = new eui.ProgressBar;
        return this.bar = t,
        t.rotation = 270,
        t.value = 0,
        t.visible = !0,
        t.width = 143,
        t.x = 116,
        t.y = 269.2,
        t.skinName = i,
        t
    },
    o.barDamage_i = function() {
        var t = new eui.ProgressBar;
        return this.barDamage = t,
        t.value = 0,
        t.visible = !0,
        t.x = 8,
        t.y = 513,
        t.skinName = n,
        t
    },
    o.damageNum_i = function() {
        var t = new eui.Label;
        return this.damageNum = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = 6,
        t.scaleX = 1,
        t.scaleY = 1,
        t.size = 30,
        t.stroke = 1,
        t.strokeColor = 1573127,
        t.text = "0/5000",
        t.textColor = 16769106,
        t.y = 510,
        t
    },
    o._Image9_i = function() {
        var t = new eui.Image;
        return t.source = "six_god_sword_1712550_png",
        t.visible = !0,
        t.x = 137,
        t.y = 131,
        t
    },
    o.aniGroup_i = function() {
        var t = new eui.Group;
        return this.aniGroup = t,
        t.width = 0,
        t.x = 188.543,
        t.y = 199.724,
        t
    },
    o.getItem_i = function() {
        var t = new eui.Image;
        return this.getItem = t,
        t.source = "six_god_sword_getitem_png",
        t.visible = !0,
        t.x = 136,
        t.y = 146,
        t
    },
    o._Image10_i = function() {
        var t = new eui.Image;
        return t.height = 368,
        t.left = 15,
        t.source = "six_god_sword_did_png",
        t.width = 174,
        t.y = 69.857,
        t
    },
    o._Scroller1_i = function() {
        var t = new eui.Scroller;
        return t.height = 370,
        t.left = 18,
        t.width = 230,
        t.y = 68.061,
        t.viewport = this._list_i(),
        t
    },
    o._list_i = function() {
        var t = new eui.List;
        return this._list = t,
        t.itemRendererSkinName = SixGodSwordItemSkin,
        t.layout = this._VerticalLayout1_i(),
        t
    },
    o._VerticalLayout1_i = function() {
        var t = new eui.VerticalLayout;
        return t.gap = 12,
        t.paddingBottom = 6,
        t.paddingLeft = 6,
        t.paddingTop = 10,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/SixGodUpPopItemSkin.exml"] = window.SixGodUpPopItemSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = [],
        this.height = 72,
        this.width = 72
    }
    __extends(e, t);
    e.prototype;
    return e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/SixGodUpPopSkin.exml"] = window.SixGodUpPopSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["aniGroup", "num", "icon", "item", "star_1", "star_2", "star_3", "star_4", "star_5", "star_6", "star_7", "star_8", "star_9", "not", "btnGet"],
        this.height = 455,
        this.width = 759,
        this.elementsContent = [this._Group1_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Group1_i = function() {
        var t = new eui.Group;
        return t.height = 455,
        t.width = 759,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image1_i(), this.aniGroup_i(), this.item_i(), this.star_1_i(), this.star_2_i(), this.star_3_i(), this.star_4_i(), this.star_5_i(), this.star_6_i(), this.star_7_i(), this.star_8_i(), this.star_9_i(), this.not_i(), this.btnGet_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "six_god_up_pop_bg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.aniGroup_i = function() {
        var t = new eui.Group;
        return this.aniGroup = t,
        t.height = 455,
        t.width = 759,
        t.x = 0,
        t.y = 0,
        t
    },
    i.item_i = function() {
        var t = new eui.Group;
        return this.item = t,
        t.horizontalCenter = 1.5,
        t.verticalCenter = 94.5,
        t.elementsContent = [this._Image2_i(), this.num_i(), this.icon_i()],
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "six_god_up_pop_itembg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.num_i = function() {
        var t = new eui.Label;
        return this.num = t,
        t.fontFamily = "MFShangHei",
        t.right = 7,
        t.size = 18,
        t.stroke = 1,
        t.strokeColor = 3674114,
        t.text = "x2",
        t.textColor = 16759667,
        t.y = 52,
        t
    },
    i.icon_i = function() {
        var t = new eui.Image;
        return this.icon = t,
        t.height = 60,
        t.width = 60,
        t.x = 6,
        t.y = 6,
        t
    },
    i.star_1_i = function() {
        var t = new eui.Image;
        return this.star_1 = t,
        t.source = "six_god_up_pop_star_png",
        t.x = 533,
        t.y = 168,
        t
    },
    i.star_2_i = function() {
        var t = new eui.Image;
        return this.star_2 = t,
        t.source = "six_god_up_pop_star_png",
        t.x = 579,
        t.y = 168,
        t
    },
    i.star_3_i = function() {
        var t = new eui.Image;
        return this.star_3 = t,
        t.source = "six_god_up_pop_star_png",
        t.x = 625,
        t.y = 168,
        t
    },
    i.star_4_i = function() {
        var t = new eui.Image;
        return this.star_4 = t,
        t.source = "six_god_up_pop_star_png",
        t.x = 320,
        t.y = 168,
        t
    },
    i.star_5_i = function() {
        var t = new eui.Image;
        return this.star_5 = t,
        t.source = "six_god_up_pop_star_png",
        t.x = 366,
        t.y = 168,
        t
    },
    i.star_6_i = function() {
        var t = new eui.Image;
        return this.star_6 = t,
        t.source = "six_god_up_pop_star_png",
        t.x = 412,
        t.y = 168,
        t
    },
    i.star_7_i = function() {
        var t = new eui.Image;
        return this.star_7 = t,
        t.source = "six_god_up_pop_star_png",
        t.x = 91,
        t.y = 168,
        t
    },
    i.star_8_i = function() {
        var t = new eui.Image;
        return this.star_8 = t,
        t.source = "six_god_up_pop_star_png",
        t.x = 137,
        t.y = 168,
        t
    },
    i.star_9_i = function() {
        var t = new eui.Image;
        return this.star_9 = t,
        t.source = "six_god_up_pop_star_png",
        t.x = 183,
        t.y = 168,
        t
    },
    i.not_i = function() {
        var t = new eui.Label;
        return this.not = t,
        t.fontFamily = "MFShangHei",
        t.scaleX = 1,
        t.scaleY = 1,
        t.size = 48,
        t.text = "本次战斗无奖励",
        t.textColor = 16769106,
        t.visible = !1,
        t.x = 212,
        t.y = 294.83,
        t
    },
    i.btnGet_i = function() {
        var t = new eui.Image;
        return this.btnGet = t,
        t.source = "six_god_up_pop_btnget_png",
        t.x = 314,
        t.y = 387,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/SixGodUpSkin.exml"] = window.SixGodUpSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "buy1", "btnOneKey1", "got1", "buy2", "btnOneKey2", "got2", "buy3", "btnOneKey3", "got3", "btnBuy", "times", "btnChallenge", "item0", "item1", "item2", "num", "add", "icon", "bag", "cure", "mainGroup"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this.mainGroup_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.horizontalCenter = 0,
        t.source = "six_god_sword_bg_jpg",
        t.verticalCenter = 0,
        t
    },
    i.mainGroup_i = function() {
        var t = new eui.Group;
        return this.mainGroup = t,
        t.bottom = 0,
        t.left = 0,
        t.right = 0,
        t.top = 0,
        t.elementsContent = [this._Image1_i(), this._Group2_i(), this.bag_i(), this.cure_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.horizontalCenter = -256,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "six_god_up_3329_png",
        t.y = 0,
        t
    },
    i._Group2_i = function() {
        var t = new eui.Group;
        return t.cacheAsBitmap = !0,
        t.height = 640,
        t.right = 10,
        t.width = 499,
        t.y = 0,
        t.elementsContent = [this._Image2_i(), this.buy1_i(), this.btnOneKey1_i(), this.got1_i(), this.buy2_i(), this.btnOneKey2_i(), this.got2_i(), this.buy3_i(), this.btnOneKey3_i(), this.got3_i(), this.btnBuy_i(), this.btnChallenge_i(), this.item0_i(), this.item1_i(), this.item2_i(), this._Group1_i()],
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.scaleX = 1,
        t.scaleY = 1,
        t.source = "six_god_up_rightbg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.buy1_i = function() {
        var t = new eui.Group;
        return this.buy1 = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.x = 31,
        t.y = 269,
        t.elementsContent = [this._Image3_i(), this._Label1_i()],
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "six_god_up_btnyijian_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "REEJI",
        t.size = 18,
        t.text = "70",
        t.textColor = 10180889,
        t.x = 60,
        t.y = 14,
        t
    },
    i.btnOneKey1_i = function() {
        var t = new eui.Image;
        return this.btnOneKey1 = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "six_god_up_btnonekey_png",
        t.x = 31,
        t.y = 230,
        t
    },
    i.got1_i = function() {
        var t = new eui.Image;
        return this.got1 = t,
        t.source = "six_god_up_got_png",
        t.x = 27.688,
        t.y = 243,
        t
    },
    i.buy2_i = function() {
        var t = new eui.Group;
        return this.buy2 = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.x = 190,
        t.y = 269,
        t.elementsContent = [this._Image4_i(), this._Label2_i()],
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.source = "six_god_up_btnyijian_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i._Label2_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "REEJI",
        t.size = 18,
        t.text = "110",
        t.textColor = 10180889,
        t.x = 60,
        t.y = 14,
        t
    },
    i.btnOneKey2_i = function() {
        var t = new eui.Image;
        return this.btnOneKey2 = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "six_god_up_btnonekey_png",
        t.x = 190,
        t.y = 230,
        t
    },
    i.got2_i = function() {
        var t = new eui.Image;
        return this.got2 = t,
        t.source = "six_god_up_got_png",
        t.x = 188.404,
        t.y = 243,
        t
    },
    i.buy3_i = function() {
        var t = new eui.Group;
        return this.buy3 = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.x = 347.22,
        t.y = 269,
        t.elementsContent = [this._Image5_i(), this._Label3_i()],
        t
    },
    i._Image5_i = function() {
        var t = new eui.Image;
        return t.source = "six_god_up_btnyijian_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i._Label3_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "REEJI",
        t.size = 18,
        t.text = "120",
        t.textColor = 10180889,
        t.x = 60,
        t.y = 14,
        t
    },
    i.btnOneKey3_i = function() {
        var t = new eui.Image;
        return this.btnOneKey3 = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "six_god_up_btnonekey_png",
        t.x = 347,
        t.y = 230,
        t
    },
    i.got3_i = function() {
        var t = new eui.Image;
        return this.got3 = t,
        t.source = "six_god_up_got_png",
        t.x = 344.604,
        t.y = 243,
        t
    },
    i.btnBuy_i = function() {
        var t = new eui.Image;
        return this.btnBuy = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "six_god_sword_btnbuy_png",
        t.visible = !0,
        t.x = 186,
        t.y = 565,
        t
    },
    i.btnChallenge_i = function() {
        var t = new eui.Group;
        return this.btnChallenge = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.visible = !0,
        t.x = 177,
        t.y = 555,
        t.elementsContent = [this._Image6_i(), this._Image7_i(), this.times_i()],
        t
    },
    i._Image6_i = function() {
        var t = new eui.Image;
        return t.scaleX = 1,
        t.scaleY = 1,
        t.source = "six_god_sword_btntiaozhan_png",
        t.x = 0,
        t.y = 10,
        t
    },
    i._Image7_i = function() {
        var t = new eui.Image;
        return t.scaleX = 1,
        t.scaleY = 1,
        t.source = "six_god_sword_timesbg_png",
        t.x = 104,
        t.y = 0,
        t
    },
    i.times_i = function() {
        var t = new eui.Label;
        return this.times = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = 50.5,
        t.scaleX = 1,
        t.scaleY = 1,
        t.size = 18,
        t.text = "0/X",
        t.textColor = 16774231,
        t.y = 4,
        t
    },
    i.item0_i = function() {
        var t = new eui.Group;
        return this.item0 = t,
        t.height = 68.685,
        t.width = 68.685,
        t.x = 57,
        t.y = 133.73,
        t
    },
    i.item1_i = function() {
        var t = new eui.Group;
        return this.item1 = t,
        t.height = 68.685,
        t.width = 68.685,
        t.x = 213.766,
        t.y = 133.73,
        t
    },
    i.item2_i = function() {
        var t = new eui.Group;
        return this.item2 = t,
        t.height = 68.685,
        t.width = 68.685,
        t.x = 372.076,
        t.y = 133.73,
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.height = 40,
        t.scaleX = 1,
        t.scaleY = 1,
        t.width = 185,
        t.x = 290,
        t.y = 17,
        t.elementsContent = [this._Image8_i(), this.num_i(), this.add_i(), this.icon_i()],
        t
    },
    i._Image8_i = function() {
        var t = new eui.Image;
        return t.source = "six_god_sword_di_png",
        t.x = 4,
        t.y = 11,
        t
    },
    i.num_i = function() {
        var t = new eui.Label;
        return this.num = t,
        t.fontFamily = "MFShangHei",
        t.right = 26,
        t.size = 18,
        t.text = "40",
        t.textColor = 16514895,
        t.y = 10,
        t
    },
    i.add_i = function() {
        var t = new eui.Image;
        return this.add = t,
        t.source = "six_god_sword_add_png",
        t.x = 164,
        t.y = 11,
        t
    },
    i.icon_i = function() {
        var t = new eui.Image;
        return this.icon = t,
        t.height = 40,
        t.width = 40,
        t.x = 0,
        t.y = 0,
        t
    },
    i.bag_i = function() {
        var t = new eui.Image;
        return this.bag = t,
        t.left = 28,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "six_god_sword_bag_png",
        t.y = 451,
        t
    },
    i.cure_i = function() {
        var t = new eui.Image;
        return this.cure = t,
        t.left = 28,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "six_god_sword_cure_png",
        t.y = 542,
        t
    },
    e
} (eui.Skin);