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
newSeer7Sign; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t.arrayColletion = new eui.ArrayCollection([]),
            t.selectDay = 0,
            t.getDay = 0,
            t.ease = egret.Ease.cubicInOut,
            t.skinName = "newSeer7Sign.MainPanelSkin",
            t
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.btnGetAnim = SpineUtil.createAnimate("xinshouqiri"),
            this.btnGet.parent.addChild(this.btnGetAnim),
            this.btnGetAnim.x = 266.5,
            this.btnGetAnim.y = 558,
            this.btnGetAnim.scaleX = this.btnGetAnim.scaleY = .5,
            this.btnGetAnim.touchChildren = !1,
            this.btnGetAnim.touchEnabled = !1,
            this.btnGetAnim.visible = !1,
            this.btnGetAnim.play("lingqu", 0),
            this.animPlay(),
            this.initData(),
            this.addEvents()
        },
        i.prototype.animPlay = function() {
            var t = this;
            gsap.from(this.pets, {
                alpha: 0
            }),
            gsap.from(this.pets, {
                right: this.pets.right + 200
            }),
            this.btnGet.alpha = this.received.alpha = this.tomorrow.alpha = 0,
            gsap.from(this.content, {
                alpha: 0
            }),
            gsap.from(this.content, {
                x: 200
            }).then(function() {
                gsap.to([t.btnGet, t.received, t.tomorrow], {
                    alpha: 1
                }).then(function() {
                    t.btnGetAnim.visible = t.btnGet.visible,
                    t.btnGetAnim.play("lingqu", 0)
                })
            })
        },
        i.prototype.initData = function(e) {
            var i = this;
            this._listdays.itemRenderer = t.NewSeerDaySignItem,
            this._listgifts.itemRenderer = t.NewSeerItem,
            this.allGifts = config.NewSeer7Sign.getItems(),
            this.arrayColletion.removeAll(),
            KTool.getMultiValue([120204, 120208, 120200],
            function(t) {
                i.signState = t[0],
                i.signDay = t[1],
                i.signDay > 7 && 7 == i.signDay,
                i.daysData = [],
                1 == KTool.getBit(i.signState, i.signDay) && i.signDay < 7 ? i.selectDay = i.signDay: i.selectDay = e ? e - 1 : i.signDay - 1,
                i._listdays.selectedIndex = i.selectDay,
                i.getDay = i._listdays.selectedIndex;
                for (var n = 1; 7 >= n; n++) {
                    var s = {};
                    s.state = KTool.getBit(i.signState, n),
                    s.signDay = i.signDay,
                    s.id = n,
                    s.selectedIndex = i.selectDay + 1,
                    i.daysData.push(s)
                }
                i.arrayColletion.replaceAll(i.daysData),
                i._listdays.dataProvider = i.arrayColletion,
                i.showGifts(i.selectDay + 1),
                i.update(i.selectDay + 1),
                i.btnGetAnim.visible = i.btnGet.visible
            })
        },
        i.prototype.reShow = function() {},
        i.prototype.showGifts = function(t) {
            this.curGifts = [],
            this.curGifts = this.allGifts.filter(function(e) {
                return e.Daycount == t
            }),
            this.curGifts = this.curGifts.sort(function(t, e) {
                return t.Rare - e.Rare
            });
            for (var e = [], i = 0; i < this.curGifts.length; i++) {
                var n = {};
                n.data = this.curGifts[i],
                e.push(n)
            }
            this._listgifts.dataProvider = new eui.ArrayCollection(e)
        },
        i.prototype.addEvents = function() {
            var t = this;
            ImageButtonUtil.add(this.btnInfo,
            function() {
                var e;
                t.pet3013.visible && (e = 3013),
                t.pet3992.visible && (e = 3992),
                t.pet3026.visible && (e = 3026),
                t.pet4202.visible && (e = 4202),
                PetManager.showPetIntroduce(e)
            },
            this),
            ImageButtonUtil.add(this.btnGet,
            function() {
                SocketConnection.sendByQueue(41408, [1, t.getDay + 1],
                function() {
                    t.arrayColletion && t.arrayColletion.removeAll(),
                    7 != t.signDay && t.getDay + 1 == t.signDay ? t.initData(t.signDay + 1) : t.initData(t.getDay + 1),
                    EventManager.dispatchEventWith("NewSeerRedPoindShow"),
                    EventManager.dispatchEventWith("Xinshou_Destroy")
                })
            },
            this),
            this._listdays.addEventListener(egret.Event.CHANGE, this.onSelectDay, this)
        },
        i.prototype.onSelectDay = function() {
            var t = this;
            this.btnGetAnim.stopAll(),
            this.btnGetAnim.visible = !1,
            this.btnGet.alpha = 0,
            egret.Tween.get(this.btnGet).to({
                alpha: 1
            },
            1500, this.ease).call(function() {
                t.btnGetAnim.visible = t.btnGet.visible,
                t.btnGetAnim.play("lingqu", 0)
            }),
            this.getDay = this._listdays.selectedIndex;
            for (var e = 1; 7 >= e; e++) this.daysData[e - 1].selectedIndex = this._listdays.selectedIndex + 1;
            this.arrayColletion.replaceAll(this.daysData),
            this._listdays.dataProvider = this.arrayColletion,
            this.update(this._listdays.selectedIndex + 1)
        },
        i.prototype.update = function(t) {
            this.pet3992.visible = this.signDay < 2,
            this.pet3013.visible = this.signDay >= 2 && this.signDay < 4,
            this.pet3026.visible = this.signDay >= 4 && this.signDay < 5,
            this.pet4202.visible = this.signDay >= 5,
            this.showGifts(t),
            t <= this.signDay ? (this.btnGet.visible = 0 == KTool.getBit(this.signState, t), this.received.visible = 1 == KTool.getBit(this.signState, t), this.tomorrow.visible = !1) : (this.btnGet.visible = !1, this.received.visible = !1, this.tomorrow.visible = t - this.signDay == 1)
        },
        i.prototype.destroy = function() {
            ImageButtonUtil.removeAll(this),
            this._listdays.removeEventListener(egret.Event.CHANGE, this.onSelectDay, this)
        },
        i
    } (BaseModule);
    t.NewSeer7Sign = e,
    __reflect(e.prototype, "newSeer7Sign.NewSeer7Sign")
} (newSeer7Sign || (newSeer7Sign = {}));
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
    return new(i || (i = Promise))(function(s, a) {
        function r(t) {
            try {
                _(n.next(t))
            } catch(e) {
                a(e)
            }
        }
        function o(t) {
            try {
                _(n["throw"](t))
            } catch(e) {
                a(e)
            }
        }
        function _(t) {
            t.done ? s(t.value) : new i(function(e) {
                e(t.value)
            }).then(r, o)
        }
        _((n = n.apply(t, e || [])).next())
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
        if (s) throw new TypeError("Generator is already executing.");
        for (; _;) try {
            if (s = 1, a && (r = a[2 & i[0] ? "return": i[0] ? "throw": "next"]) && !(r = r.call(a, i[1])).done) return r;
            switch (a = 0, r && (i = [0, r.value]), i[0]) {
            case 0:
            case 1:
                r = i;
                break;
            case 4:
                return _.label++,
                {
                    value: i[1],
                    done: !1
                };
            case 5:
                _.label++,
                a = i[1],
                i = [0];
                continue;
            case 7:
                i = _.ops.pop(),
                _.trys.pop();
                continue;
            default:
                if (r = _.trys, !(r = r.length > 0 && r[r.length - 1]) && (6 === i[0] || 2 === i[0])) {
                    _ = 0;
                    continue
                }
                if (3 === i[0] && (!r || i[1] > r[0] && i[1] < r[3])) {
                    _.label = i[1];
                    break
                }
                if (6 === i[0] && _.label < r[1]) {
                    _.label = r[1],
                    r = i;
                    break
                }
                if (r && _.label < r[2]) {
                    _.label = r[2],
                    _.ops.push(i);
                    break
                }
                r[2] && _.ops.pop(),
                _.trys.pop();
                continue
            }
            i = e.call(t, _)
        } catch(n) {
            i = [6, n],
            a = 0
        } finally {
            s = r = 0
        }
        if (5 & i[0]) throw i[1];
        return {
            value: i[0] ? i[1] : void 0,
            done: !0
        }
    }
    var s, a, r, o, _ = {
        label: 0,
        sent: function() {
            if (1 & r[0]) throw r[1];
            return r[1]
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
newSeer7Sign; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.skinName = t.BannerPopSkin,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            var t = this;
            e.prototype.childrenCreated.call(this),
            ImageButtonUtil.add(this.btnGet,
            function() {
                ModuleManager.showModuleByID(141),
                t.hide()
            },
            this),
            ImageButtonUtil.add(this.btnClose,
            function() {
                t.hide()
            },
            this),
            this.initItem()
        },
        i.prototype.initItem = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var t = this;
                return __generator(this,
                function(e) {
                    switch (e.label) {
                    case 0:
                        return [4, config.NewSeer7Sign.loadAsync()];
                    case 1:
                        return e.sent(),
                        KTool.getMultiValue([120204, 120208, 120200],
                        function(e) {
                            t.curDay = e[1],
                            t.curDay > 7 && (t.curDay = 7),
                            t.show_day.source = "nns7s_banner_pop_" + t.curDay + "_png"
                        }),
                        [2]
                    }
                })
            })
        },
        i.prototype.destroy = function() {
            e.prototype.destroy.call(this),
            ImageButtonUtil.removeAll(this),
            EventManager.dispatchEventWith(ModuleEvent.CLOSE_MODULE, !1, 142)
        },
        i
    } (PopView);
    t.NewSeer7SignPop = e,
    __reflect(e.prototype, "newSeer7Sign.NewSeer7SignPop")
} (newSeer7Sign || (newSeer7Sign = {}));
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
newSeer7Sign; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.skinName = t.NewSeerDaySignItemSkin,
            i.cacheAsBitmap = !0,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.btnDayAnim = SpineUtil.createAnimate("xinshouqiri"),
            this.btnDayAnim.visible = !1,
            this.today.addChildAt(this.btnDayAnim, 0),
            this.btnDayAnim.scaleY = this.btnDayAnim.scaleX = .5,
            this.btnDayAnim.x = this.btnDayAnim.y = 40
        },
        i.prototype.dataChanged = function() {
            if (this.data) {
                this.data.id == this.data.selectedIndex ? (this.currentState = "down", this.btnDayAnim.visible = !0, this.btnDayAnim.play("meiri", 1)) : this.currentState = "up",
                this.txtdays.text = this.data.id,
                1 == this.data.state ? (this.bg.visible = !1, this.get.visible = !0, this.txtdays.visible = !1, this.redPoint.visible = !1, this.txtToday.text = "已领") : (this.bg.visible = !0, this.get.visible = !1, this.txtdays.visible = !0, this.data.signDay >= this.data.id && 0 == this.data.state ? (this.data.selectedIndex == this.data.id ? this.today.visible = !0 : this.today.visible = !1, this.redPoint.visible = !0) : (this.today.visible = !1, this.redPoint.visible = !1));
                var t = this.data.id - this.data.signDay,
                e = "";
                e = 0 == t ? 1 == this.data.state ? "已领": "今日可领": 1 == t ? "明日可领": 1 == this.data.state ? "已领": "第" + this.data.id + "日可领",
                this.txtToday.text = e
            }
        },
        i
    } (eui.ItemRenderer);
    t.NewSeerDaySignItem = e,
    __reflect(e.prototype, "newSeer7Sign.NewSeerDaySignItem")
} (newSeer7Sign || (newSeer7Sign = {}));
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
newSeer7Sign; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.skinName = t.NewSeerItemSkin,
            i.cacheAsBitmap = !0,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.itemShow()
        },
        i.prototype.dataChanged = function() {
            if (this.itemShow(), this.data.data) {
                switch (this.data.data.GiftType) {
                case "Resource":
                    this.icon.source = ClientConfig.getItemIcon(this.data.data.GiftID),
                    this.txtTag.text = "资源";
                    break;
                case "Item":
                    this.icon.source = ClientConfig.getItemIcon(this.data.data.GiftID),
                    this.txtTag.text = "道具";
                    break;
                case "Pet":
                    this.icon.source = ClientConfig.getPetHeadPath(this.data.data.GiftID),
                    this.txtTag.text = "精灵";
                    break;
                case "Mintmark":
                    this.icon.source = ClientConfig.getMarkPath(this.data.data.GiftID),
                    this.txtTag.text = "刻印"
                }
                this.bg.source = "nns7s_main_panel_item" + this.data.data.Rare + "_png",
                this.txtNum.text = this.data.data.Amount,
                this.tag.source = "nns7s_main_panel_tag" + this.data.data.Rare + "bg_png"
            }
        },
        i.prototype.itemShow = function() {
            var t = this;
            this.item.alpha = 0,
            this.rotation = 0,
            egret.Tween.get(this.item).to({
                alpha: 1
            },
            500, egret.Ease.quadInOut),
            ImageButtonUtil.add(this.icon,
            function() {
                switch (t.data.data.GiftType) {
                case "Resource":
                case "Item":
                    var e = {};
                    e.id = Number(t.data.data.GiftID),
                    tipsPop.TipsPop.openItemPop(e);
                    break;
                case "Pet":
                    var i = Number(t.data.data.GiftID);
                    ModuleManager.showModule("petManualInfo", ["pet_info_manual"], {
                        data: i,
                        type: "pet",
                        thisObj: t
                    },
                    "", AppDoStyle.HIDEN);
                    break;
                case "Mintmark":
                    var n = {};
                    n.ins = +t.data.data.GiftID,
                    tipsPop.TipsPop.openCounterMarkPop(n)
                }
            },
            this)
        },
        i.prototype.destroy = function() {
            ImageButtonUtil.removeAll(this)
        },
        i
    } (eui.ItemRenderer);
    t.NewSeerItem = e,
    __reflect(e.prototype, "newSeer7Sign.NewSeerItem")
} (newSeer7Sign || (newSeer7Sign = {})),
window.newSeer7Sign = window.newSeer7Sign || {};
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
generateEUI.paths["resource/eui_skins/BannerPopSkin.exml"] = window.newSeer7Sign.BannerPopSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["banner", "btnClose", "btnGet", "show_day", "_list"],
        this.height = 556,
        this.width = 1035,
        this.elementsContent = [this._Group1_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Group1_i = function() {
        var t = new eui.Group;
        return t.x = -50,
        t.y = 0,
        t.elementsContent = [this.banner_i(), this.btnClose_i(), this.btnGet_i(), this.show_day_i(), this._list_i()],
        t
    },
    i.banner_i = function() {
        var t = new eui.Image;
        return this.banner = t,
        t.source = "nns7s_banner_pop_banner_png",
        t.x = 0,
        t.y = 8,
        t
    },
    i.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.source = "nns7s_banner_pop_btnclose_png",
        t.x = 965,
        t.y = 0,
        t
    },
    i.btnGet_i = function() {
        var t = new eui.Image;
        return this.btnGet = t,
        t.source = "nns7s_banner_pop_btnget_png",
        t.x = 813,
        t.y = 426,
        t
    },
    i.show_day_i = function() {
        var t = new eui.Image;
        return this.show_day = t,
        t.height = 110,
        t.source = "nns7s_banner_pop_1_png",
        t.width = 353,
        t.x = 421,
        t.y = 412,
        t
    },
    i._list_i = function() {
        var t = new eui.List;
        return this._list = t,
        t.anchorOffsetX = 180,
        t.anchorOffsetY = 55,
        t.height = 110,
        t.rotation = 355,
        t.width = 353,
        t.x = 615,
        t.y = 480,
        t.layout = this._HorizontalLayout1_i(),
        t
    },
    i._HorizontalLayout1_i = function() {
        var t = new eui.HorizontalLayout;
        return t.gap = 16,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/MainPanelSkin.exml"] = window.newSeer7Sign.MainPanelSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "pet3992_a", "pet3992", "pet3013", "pet3026_a", "pet3026", "pet4202", "btnInfo", "pets", "rightbg", "line", "_listgifts", "_listdays", "btnGet", "received", "tomorrow", "content", "rightInfo"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this.pets_i(), this.rightbg_i(), this.rightInfo_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.source = "nns7s_main_panel_bg_jpg",
        t.visible = !0,
        t.percentWidth = 100,
        t.y = 0,
        t
    },
    i.pets_i = function() {
        var t = new eui.Group;
        return this.pets = t,
        t.cacheAsBitmap = !0,
        t.right = 389,
        t.visible = !0,
        t.y = 10,
        t.elementsContent = [this.pet3992_i(), this.pet3013_i(), this.pet3026_i(), this.pet4202_i(), this.btnInfo_i()],
        t
    },
    i.pet3992_i = function() {
        var t = new eui.Group;
        return this.pet3992 = t,
        t.visible = !1,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image1_i(), this._Image2_i(), this.pet3992_a_i(), this._Image3_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "nns7s_main_panel_3992_png",
        t.visible = !0,
        t.x = -75,
        t.y = 0,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "nns7s_main_panel_namebg_png",
        t.visible = !0,
        t.x = 53,
        t.y = 392,
        t
    },
    i.pet3992_a_i = function() {
        var t = new eui.Image;
        return this.pet3992_a = t,
        t.source = "nns7s_main_panel_a_png",
        t.visible = !0,
        t.x = 122,
        t.y = 393,
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.height = 64,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "nns7s_main_panel_1_png",
        t.visible = !0,
        t.width = 168,
        t.x = 144,
        t.y = 429.00000000000006,
        t
    },
    i.pet3013_i = function() {
        var t = new eui.Group;
        return this.pet3013 = t,
        t.visible = !1,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image4_i(), this._Image5_i(), this._Image6_i(), this._Image7_i()],
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.anchorOffsetX = 415,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "nns7s_main_panel_3013_png",
        t.visible = !0,
        t.x = 400,
        t.y = -10,
        t
    },
    i._Image5_i = function() {
        var t = new eui.Image;
        return t.source = "nns7s_main_panel_namebg_png",
        t.visible = !0,
        t.x = 53,
        t.y = 392,
        t
    },
    i._Image6_i = function() {
        var t = new eui.Image;
        return t.source = "nns7s_main_panel_b_png",
        t.visible = !0,
        t.x = 122,
        t.y = 393,
        t
    },
    i._Image7_i = function() {
        var t = new eui.Image;
        return t.height = 64,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "nns7s_main_panel_2_png",
        t.visible = !0,
        t.width = 168,
        t.x = 144.00000000000003,
        t.y = 428.99999999999994,
        t
    },
    i.pet3026_i = function() {
        var t = new eui.Group;
        return this.pet3026 = t,
        t.visible = !1,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image8_i(), this._Image9_i(), this.pet3026_a_i(), this._Image10_i()],
        t
    },
    i._Image8_i = function() {
        var t = new eui.Image;
        return t.scaleX = 1,
        t.scaleY = 1,
        t.source = "nns7s_main_panel_3026_png",
        t.visible = !0,
        t.y = -10,
        t
    },
    i._Image9_i = function() {
        var t = new eui.Image;
        return t.source = "nns7s_main_panel_namebg_png",
        t.visible = !0,
        t.x = 53,
        t.y = 392,
        t
    },
    i.pet3026_a_i = function() {
        var t = new eui.Image;
        return this.pet3026_a = t,
        t.source = "nns7s_main_panel_a_png",
        t.visible = !0,
        t.x = 122,
        t.y = 393,
        t
    },
    i._Image10_i = function() {
        var t = new eui.Image;
        return t.height = 64,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "nns7s_main_panel_3_png",
        t.visible = !0,
        t.width = 168,
        t.x = 144,
        t.y = 429,
        t
    },
    i.pet4202_i = function() {
        var t = new eui.Group;
        return this.pet4202 = t,
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image11_i(), this._Image12_i(), this._Image13_i(), this._Image14_i()],
        t
    },
    i._Image11_i = function() {
        var t = new eui.Image;
        return t.scaleX = 1,
        t.scaleY = 1,
        t.source = "nns7s_main_panel_4202_png",
        t.visible = !0,
        t.y = -10,
        t
    },
    i._Image12_i = function() {
        var t = new eui.Image;
        return t.source = "nns7s_main_panel_namebg_png",
        t.visible = !0,
        t.x = 53,
        t.y = 392,
        t
    },
    i._Image13_i = function() {
        var t = new eui.Image;
        return t.source = "nns7s_main_panel_c_png",
        t.visible = !0,
        t.x = 122,
        t.y = 393,
        t
    },
    i._Image14_i = function() {
        var t = new eui.Image;
        return t.height = 64,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "nns7s_main_panel_4_png",
        t.visible = !0,
        t.width = 168,
        t.x = 144,
        t.y = 429,
        t
    },
    i.btnInfo_i = function() {
        var t = new eui.Image;
        return this.btnInfo = t,
        t.source = "nns7s_main_panel_btninfo_png",
        t.visible = !0,
        t.x = 340,
        t.y = 424,
        t
    },
    i.rightbg_i = function() {
        var t = new eui.Image;
        return this.rightbg = t,
        t.right = 58,
        t.source = "nns7s_main_pane_rightbg_png",
        t.touchEnabled = !1,
        t.y = 0,
        t
    },
    i.rightInfo_i = function() {
        var t = new eui.Group;
        return this.rightInfo = t,
        t.right = -603,
        t.width = 1223.202,
        t.y = 11,
        t.elementsContent = [this.content_i()],
        t
    },
    i.content_i = function() {
        var t = new eui.Group;
        return this.content = t,
        t.visible = !0,
        t.y = 0,
        t.elementsContent = [this.line_i(), this._Image15_i(), this._listgifts_i(), this._listdays_i(), this.btnGet_i(), this.received_i(), this.tomorrow_i()],
        t
    },
    i.line_i = function() {
        var t = new eui.Image;
        return this.line = t,
        t.height = 13,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "nns7s_main_panel_line_png",
        t.width = 604,
        t.x = 9.202000000000112,
        t.y = 174,
        t
    },
    i._Image15_i = function() {
        var t = new eui.Image;
        return t.source = "nns7s_main_panel_zu_14_png",
        t.visible = !0,
        t.x = 527,
        t.y = 0,
        t
    },
    i._listgifts_i = function() {
        var t = new eui.List;
        return this._listgifts = t,
        t.height = 265,
        t.width = 453,
        t.x = 36,
        t.y = 248,
        t.layout = this._TileLayout1_i(),
        t
    },
    i._TileLayout1_i = function() {
        var t = new eui.TileLayout;
        return t.horizontalGap = 15,
        t.verticalGap = 13,
        t
    },
    i._listdays_i = function() {
        var t = new eui.List;
        return this._listdays = t,
        t.height = 102,
        t.width = 604,
        t.x = 0,
        t.y = 139,
        t.layout = this._HorizontalLayout1_i(),
        t
    },
    i._HorizontalLayout1_i = function() {
        var t = new eui.HorizontalLayout;
        return t.gap = -6,
        t
    },
    i.btnGet_i = function() {
        var t = new eui.Image;
        return this.btnGet = t,
        t.source = "nns7s_main_panel_btnget_png",
        t.x = 200,
        t.y = 537,
        t
    },
    i.received_i = function() {
        var t = new eui.Image;
        return this.received = t,
        t.source = "nns7s_main_panel_received_png",
        t.visible = !0,
        t.x = 156,
        t.y = 542,
        t
    },
    i.tomorrow_i = function() {
        var t = new eui.Image;
        return this.tomorrow = t,
        t.source = "nns7s_main_panel_tomorrow_png",
        t.visible = !0,
        t.x = 165,
        t.y = 542,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/NewSeerDaySignItemSkin.exml"] = window.newSeer7Sign.NewSeerDaySignItemSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "txtdays", "today1", "redPoint", "get", "txtToday", "today"],
        this.currentState = "done",
        this.height = 102,
        this.width = 82,
        this.elementsContent = [this.bg_i(), this.txtdays_i(), this.today1_i(), this.redPoint_i(), this.get_i(), this.today_i()],
        this.states = [new eui.State("up", [new eui.SetProperty("redPoint", "x", 50), new eui.SetProperty("today", "visible", !1)]), new eui.State("down", [new eui.SetProperty("bg", "visible", !0), new eui.SetProperty("txtdays", "visible", !0), new eui.SetProperty("today1", "visible", !1), new eui.SetProperty("txtToday", "height", 50), new eui.SetProperty("today", "visible", !0)])]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.source = "nns7s_main_panel_numberbg_png",
        t.x = 13,
        t.y = 14,
        t
    },
    i.txtdays_i = function() {
        var t = new eui.Label;
        return this.txtdays = t,
        t.fontFamily = "MFShangHei",
        t.size = 22,
        t.text = "1",
        t.textColor = 7053552,
        t.x = 35,
        t.y = 30,
        t
    },
    i.today1_i = function() {
        var t = new eui.Image;
        return this.today1 = t,
        t.source = "nns7s_main_panel_today_png",
        t.visible = !1,
        t.x = 0,
        t.y = 0,
        t
    },
    i.redPoint_i = function() {
        var t = new eui.Image;
        return this.redPoint = t,
        t.source = "nns7s_main_panel_redpoint_png",
        t.visible = !1,
        t.x = 62,
        t.y = 15,
        t
    },
    i.get_i = function() {
        var t = new eui.Image;
        return this.get = t,
        t.source = "nns7s_main_panel_get_png",
        t.visible = !1,
        t.x = 18,
        t.y = 19,
        t
    },
    i.today_i = function() {
        var t = new eui.Group;
        return this.today = t,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image1_i(), this._Image2_i(), this.txtToday_i(), this._Image3_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 81,
        t.source = "today_juxing_918_png",
        t.width = 82,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 93,
        t.source = "today_zu_19_png",
        t.width = 82,
        t.x = 0,
        t.y = 0,
        t
    },
    i.txtToday_i = function() {
        var t = new eui.Label;
        return this.txtToday = t,
        t.fontFamily = "MFShangHei",
        t.height = 50,
        t.size = 20,
        t.textAlign = "center",
        t.textColor = 16777215,
        t.verticalAlign = "middle",
        t.visible = !0,
        t.width = 55,
        t.x = 14,
        t.y = 15,
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.height = 41,
        t.source = "today_jx_910_kb_2_png",
        t.width = 54,
        t.x = 14,
        t.y = 63,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/NewSeerItemSkin.exml"] = window.newSeer7Sign.NewSeerItemSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "icon", "txtNum", "tag", "txtTag", "grpTag", "item"],
        this.height = 76,
        this.width = 76,
        this.elementsContent = [this.item_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.item_i = function() {
        var t = new eui.Group;
        return this.item = t,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this.bg_i(), this.icon_i(), this.txtNum_i(), this.grpTag_i()],
        t
    },
    i.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.source = "nns7s_main_panel_item1_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.icon_i = function() {
        var t = new eui.Image;
        return this.icon = t,
        t.height = 55,
        t.source = "nns7s_main_panel_41050_png",
        t.width = 55,
        t.x = 10,
        t.y = 8,
        t
    },
    i.txtNum_i = function() {
        var t = new eui.Label;
        return this.txtNum = t,
        t.fontFamily = "MFShangHei",
        t.size = 14,
        t.stroke = 1,
        t.strokeColor = 1712696,
        t.text = "99",
        t.textAlign = "right",
        t.textColor = 16776958,
        t.width = 50,
        t.x = 20,
        t.y = 55,
        t
    },
    i.grpTag_i = function() {
        var t = new eui.Group;
        return this.grpTag = t,
        t.x = -5,
        t.y = -5,
        t.elementsContent = [this.tag_i(), this.txtTag_i()],
        t
    },
    i.tag_i = function() {
        var t = new eui.Image;
        return this.tag = t,
        t.source = "nns7s_main_panel_tag1bg_png",
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t
    },
    i.txtTag_i = function() {
        var t = new eui.Label;
        return this.txtTag = t,
        t.fontFamily = "MFShangHei",
        t.size = 15,
        t.text = "道具",
        t.textColor = 16777215,
        t.x = 4,
        t.y = 2,
        t
    },
    e
} (eui.Skin);