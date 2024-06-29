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
    return new(n || (n = Promise))(function(r, o) {
        function a(e) {
            try {
                u(i.next(e))
            } catch(t) {
                o(t)
            }
        }
        function s(e) {
            try {
                u(i["throw"](e))
            } catch(t) {
                o(t)
            }
        }
        function u(e) {
            e.done ? r(e.value) : new n(function(t) {
                t(e.value)
            }).then(a, s)
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
            if (r = 1, o && (a = o[2 & n[0] ? "return": n[0] ? "throw": "next"]) && !(a = a.call(o, n[1])).done) return a;
            switch (o = 0, a && (n = [0, a.value]), n[0]) {
            case 0:
            case 1:
                a = n;
                break;
            case 4:
                return u.label++,
                {
                    value: n[1],
                    done: !1
                };
            case 5:
                u.label++,
                o = n[1],
                n = [0];
                continue;
            case 7:
                n = u.ops.pop(),
                u.trys.pop();
                continue;
            default:
                if (a = u.trys, !(a = a.length > 0 && a[a.length - 1]) && (6 === n[0] || 2 === n[0])) {
                    u = 0;
                    continue
                }
                if (3 === n[0] && (!a || n[1] > a[0] && n[1] < a[3])) {
                    u.label = n[1];
                    break
                }
                if (6 === n[0] && u.label < a[1]) {
                    u.label = a[1],
                    a = n;
                    break
                }
                if (a && u.label < a[2]) {
                    u.label = a[2],
                    u.ops.push(n);
                    break
                }
                a[2] && u.ops.pop(),
                u.trys.pop();
                continue
            }
            n = t.call(e, u)
        } catch(i) {
            n = [6, i],
            o = 0
        } finally {
            r = a = 0
        }
        if (5 & n[0]) throw n[1];
        return {
            value: n[0] ? n[1] : void 0,
            done: !0
        }
    }
    var r, o, a, s, u = {
        label: 0,
        sent: function() {
            if (1 & a[0]) throw a[1];
            return a[1]
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
templeHeroesDrawPanel; !
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.romeNumber = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII"],
            t.skinName = TempleHeroesDrawItemSkin,
            t
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            var t = this;
            e.prototype.createChildren.call(this),
            ImageButtonUtil.add(this.img_hero,
            function() {
                ModuleManager.showModule("petManualInfo", ["pet_info_manual"], {
                    data: t.info,
                    type: "pet",
                    thisObj: t
                },
                "", AppDoStyle.HIDEN)
            },
            this)
        },
        t.prototype.dataChanged = function() {
            e.prototype.dataChanged.call(this),
            (this.data || 0 == this.data) && (this.info = this.data, this.updateView())
        },
        t.prototype.updateView = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var e;
                return __generator(this,
                function(t) {
                    switch (t.label) {
                    case 0:
                        return this.num.text = this.romeNumber[this.itemIndex],
                        this.bg.source = "temple_heroes_draw_panel_icon_bg_" + (TempleHeroManager.curSelectYear - 2014) + "_png",
                        this.item_name.text = PetXMLInfo.getName(this.info),
                        this.img_hero.source = ClientConfig.getPetHeadPath(this.info),
                        [4, TempleHeroManager.getDrawForever()];
                    case 1:
                        return e = t.sent(),
                        this.done.visible = 1 == KTool.getBit(e, this.itemIndex + 1),
                        this.cacheAsBitmap = !0,
                        [2]
                    }
                })
            })
        },
        t.prototype.destroy = function() {
            e.prototype.destroy.call(this)
        },
        t
    } (BaseItemRenderer);
    e.TempleHeroesDrawItem = t,
    __reflect(t.prototype, "templeHeroesDrawPanel.TempleHeroesDrawItem")
} (templeHeroesDrawPanel || (templeHeroesDrawPanel = {}));
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
    return new(n || (n = Promise))(function(r, o) {
        function a(e) {
            try {
                u(i.next(e))
            } catch(t) {
                o(t)
            }
        }
        function s(e) {
            try {
                u(i["throw"](e))
            } catch(t) {
                o(t)
            }
        }
        function u(e) {
            e.done ? r(e.value) : new n(function(t) {
                t(e.value)
            }).then(a, s)
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
            if (r = 1, o && (a = o[2 & n[0] ? "return": n[0] ? "throw": "next"]) && !(a = a.call(o, n[1])).done) return a;
            switch (o = 0, a && (n = [0, a.value]), n[0]) {
            case 0:
            case 1:
                a = n;
                break;
            case 4:
                return u.label++,
                {
                    value: n[1],
                    done: !1
                };
            case 5:
                u.label++,
                o = n[1],
                n = [0];
                continue;
            case 7:
                n = u.ops.pop(),
                u.trys.pop();
                continue;
            default:
                if (a = u.trys, !(a = a.length > 0 && a[a.length - 1]) && (6 === n[0] || 2 === n[0])) {
                    u = 0;
                    continue
                }
                if (3 === n[0] && (!a || n[1] > a[0] && n[1] < a[3])) {
                    u.label = n[1];
                    break
                }
                if (6 === n[0] && u.label < a[1]) {
                    u.label = a[1],
                    a = n;
                    break
                }
                if (a && u.label < a[2]) {
                    u.label = a[2],
                    u.ops.push(n);
                    break
                }
                a[2] && u.ops.pop(),
                u.trys.pop();
                continue
            }
            n = t.call(e, u)
        } catch(i) {
            n = [6, i],
            o = 0
        } finally {
            r = a = 0
        }
        if (5 & n[0]) throw n[1];
        return {
            value: n[0] ? n[1] : void 0,
            done: !0
        }
    }
    var r, o, a, s, u = {
        label: 0,
        sent: function() {
            if (1 & a[0]) throw a[1];
            return a[1]
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
templeHeroesDrawPanel; !
function(e) {
    var t = function(t) {
        function n() {
            var e = t.call(this) || this;
            return e.drawing = !1,
            e.cmdChoice = [1, 4, 3, 2, 5],
            e.products = [258359, 258561, 258475, 258422, 258732],
            e.skinName = TempleHeroesDrawPanelSkin,
            e
        }
        return __extends(n, t),
        n.prototype.childrenCreated = function() {
            var n = this;
            t.prototype.childrenCreated.call(this),
            t.prototype.initBtnClose.call(this, "temple_heroes_draw_panel_btnback_png", this),
            this.initBtnHelp(function() {
                tipsPop.TipsPop.openHelpPopById(111),
                StatLogger.log("20221216版本系统功能", "圣殿英雄团搬迁", "打开【十二神宠】Tips面板")
            },
            this),
            this._list.itemRenderer = e.TempleHeroesDrawItem,
            ImageButtonUtil.add(this.btnAdd,
            function() {
                PayManager.rechargeDiamond()
            },
            this),
            this.icon_gold.source = ClientConfig.getItemIcon(5),
            ImageButtonUtil.add(this.icon_gold,
            function() {
                tipsPop.TipsPop.openItemPop({
                    id: 5
                })
            },
            this),
            ImageButtonUtil.add(this.draw,
            function() {
                PayManager.doPayFunc(function() {
                    return TempleHeroManager.checkYearVip() ? UserInfoManager.diamond < ~~n.num.text ? void BubblerManager.getInstance().showText("钻石不足!") : void n.drawPet() : void 0
                },
                n)
            },
            this);
            var i = TempleHeroManager.curSelectYear,
            r = ["圣光灵神", "重生之翼", "瀚宇星皇", "天启帝君", "混元天尊"];
            StatLogger.log("20221216版本系统功能", "圣殿英雄团搬迁", "进入【" + r[i - 2015] + "十二神宠】界面"),
            this.ani = SpineUtil.createAnimate("12heroes_anima"),
            this.aniGroup.addChild(this.ani),
            this.ani.visible = !1,
            this.item1.right = DeviceInfoManager.adapterOffSetX > 30 ? DeviceInfoManager.adapterOffSetX: 40,
            this.titleGroup.left = DeviceInfoManager.adapterOffSetX > 30 ? DeviceInfoManager.adapterOffSetX: 30,
            DeviceInfoManager.adapterOffSetX > 47 && (this.draw.right = DeviceInfoManager.adapterOffSetX + 20),
            EventManager.addEventListener(SocketEvent.SOCKETRECONNECT,
            function() {
                n.drawing ? KTool.buyProductByCallback(n.products[TempleHeroManager.curSelectYear - 2015], 1,
                function() {
                    return __awaiter(n, void 0, void 0,
                    function() {
                        var e, t = this;
                        return __generator(this,
                        function(n) {
                            return this.ani.visible = !0,
                            e = this.ani.play("ani_past", 1),
                            e.on(3,
                            function() {
                                return __awaiter(t, void 0, void 0,
                                function() {
                                    var e = this;
                                    return __generator(this,
                                    function(t) {
                                        return SocketConnection.sendByQueue(45786, [3, this.cmdChoice[TempleHeroManager.curSelectYear - 2015]],
                                        function() {
                                            e.updateView()
                                        },
                                        function() {
                                            e.draw.touchEnabled = !0
                                        }),
                                        [2]
                                    })
                                })
                            }),
                            [2]
                        })
                    })
                }) : n.updateView()
            },
            this),
            this.updateView()
        },
        n.prototype.updateView = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var e, t, n, i;
                return __generator(this,
                function(r) {
                    switch (r.label) {
                    case 0:
                        return this.drawing = !1,
                        this.txtSignet.text = core.gameUtil.ConvertItemNumView(UserInfoManager.diamond),
                        this.bg.source = "temple_heroes_draw_panel_bg_" + (TempleHeroManager.curSelectYear - 2014) + "_jpg",
                        e = config.TempleHeroes.getItems().filter(function(e) {
                            return e.type == TempleHeroManager.curSelectYear && 4 == e.tab
                        })[0],
                        this.title.text = TempleHeroManager.curSelectYear + "年包月神宠强势回归",
                        this._list.dataProvider = new eui.ArrayCollection(e.realId.split("_").map(Number)),
                        this.num.text = e.price,
                        t = !1,
                        [4, TempleHeroManager.getDrawForever()];
                    case 1:
                        for (n = r.sent(), i = 0; 12 > i; i++) if (1 != KTool.getBit(n, i + 1)) {
                            t = !0;
                            break
                        }
                        return DisplayUtil.setEnabled(this.draw, t),
                        this.item1.cacheAsBitmap = !0,
                        this.titleGroup.cacheAsBitmap = !0,
                        [2]
                    }
                })
            })
        },
        n.prototype.drawPet = function() {
            var e = this;
            this.draw.touchEnabled = !1,
            TempleHeroManager.buyProductBySocket(this.products[TempleHeroManager.curSelectYear - 2015],
            function() {
                e.drawing = !0,
                KTool.buyProductByCallback(e.products[TempleHeroManager.curSelectYear - 2015], 1,
                function() {
                    return __awaiter(e, void 0, void 0,
                    function() {
                        var e, t = this;
                        return __generator(this,
                        function(n) {
                            return this.ani.visible = !0,
                            e = this.ani.play("ani_past", 1),
                            e.on(3,
                            function() {
                                return __awaiter(t, void 0, void 0,
                                function() {
                                    var e = this;
                                    return __generator(this,
                                    function(t) {
                                        return SocketConnection.sendByQueue(45786, [3, this.cmdChoice[TempleHeroManager.curSelectYear - 2015]],
                                        function() {
                                            e.updateView()
                                        },
                                        function() {
                                            e.draw.touchEnabled = !0
                                        }),
                                        [2]
                                    })
                                })
                            }),
                            [2]
                        })
                    })
                },
                null,
                function() {
                    e.draw.touchEnabled = !0
                })
            },
            this)
        },
        n.prototype.destroy = function() {
            DisplayUtil.removeForParent(this.ani),
            this.ani = null,
            t.prototype.destroy.call(this)
        },
        n
    } (BaseModule);
    e.TempleHeroesDrawPanel = t,
    __reflect(t.prototype, "templeHeroesDrawPanel.TempleHeroesDrawPanel")
} (templeHeroesDrawPanel || (templeHeroesDrawPanel = {}));
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
generateEUI.paths["resource/eui_skins/TempleHeroesDrawItemSkin.exml"] = window.TempleHeroesDrawItemSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["bg", "img_hero", "bg_icon", "num", "item_name", "done"],
        this.height = 183,
        this.width = 166,
        this.elementsContent = [this.bg_i(), this.img_hero_i(), this.bg_icon_i(), this.num_i(), this.item_name_i(), this.done_i()]
    }
    __extends(t, e);
    var n = t.prototype;
    return n.bg_i = function() {
        var e = new eui.Image;
        return this.bg = e,
        e.horizontalCenter = 0,
        e.source = "temple_heroes_draw_panel_icon_bg_1_png",
        e.visible = !0,
        e.y = 1,
        e
    },
    n.img_hero_i = function() {
        var e = new eui.Image;
        return this.img_hero = e,
        e.height = 98,
        e.horizontalCenter = 0,
        e.source = "temple_heroes_draw_panel_icon_1_png",
        e.verticalCenter = -16.5,
        e.width = 98,
        e
    },
    n.bg_icon_i = function() {
        var e = new eui.Image;
        return this.bg_icon = e,
        e.horizontalCenter = -49,
        e.source = "temple_heroes_draw_panel_icon_1_png",
        e.touchEnabled = !1,
        e.verticalCenter = -64.5,
        e
    },
    n.num_i = function() {
        var e = new eui.Label;
        return this.num = e,
        e.fontFamily = "MFShangHei",
        e.horizontalCenter = -49,
        e.size = 14,
        e.text = "VIII",
        e.textColor = 16777215,
        e.touchEnabled = !1,
        e.y = 19,
        e
    },
    n.item_name_i = function() {
        var e = new eui.Label;
        return this.item_name = e,
        e.fontFamily = "MFShangHei",
        e.horizontalCenter = 0,
        e.size = 18,
        e.text = "女警凯瑟琳",
        e.textColor = 12111615,
        e.touchEnabled = !1,
        e.x = 38,
        e.y = 131,
        e
    },
    n.done_i = function() {
        var e = new eui.Image;
        return this.done = e,
        e.source = "temple_heroes_draw_panel_done_png",
        e.touchEnabled = !1,
        e.visible = !1,
        e.x = 33,
        e.y = 62,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/TempleHeroesDrawPanelSkin.exml"] = window.TempleHeroesDrawPanelSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["bg", "itemNumBg", "icon_gold", "txtSignet", "btnAdd", "item1", "title", "desc", "num", "icon", "draw", "titleGroup", "_list", "aniGroup"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this.item1_i(), this.titleGroup_i(), this._Scroller1_i(), this.aniGroup_i()]
    }
    __extends(t, e);
    var n = t.prototype;
    return n.bg_i = function() {
        var e = new eui.Image;
        return this.bg = e,
        e.bottom = 0,
        e.left = 0,
        e.right = 0,
        e.source = "temple_heroes_draw_panel_bg_1_jpg",
        e.top = 0,
        e
    },
    n.item1_i = function() {
        var e = new eui.Group;
        return this.item1 = e,
        e.right = 40,
        e.top = 12,
        e.elementsContent = [this.itemNumBg_i(), this.icon_gold_i(), this.txtSignet_i(), this.btnAdd_i()],
        e
    },
    n.itemNumBg_i = function() {
        var e = new eui.Image;
        return this.itemNumBg = e,
        e.source = "temple_heroes_draw_panel_itemnumbg_png",
        e.x = 9,
        e.y = 4,
        e
    },
    n.icon_gold_i = function() {
        var e = new eui.Image;
        return this.icon_gold = e,
        e.height = 30,
        e.width = 30,
        e.x = 0,
        e.y = 0,
        e
    },
    n.txtSignet_i = function() {
        var e = new eui.Label;
        return this.txtSignet = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "99999",
        e.textColor = 12834813,
        e.x = 51,
        e.y = 5,
        e
    },
    n.btnAdd_i = function() {
        var e = new eui.Image;
        return this.btnAdd = e,
        e.height = 22,
        e.source = "common_btn_add_png",
        e.x = 125,
        e.y = 4,
        e
    },
    n.titleGroup_i = function() {
        var e = new eui.Group;
        return this.titleGroup = e,
        e.left = 30,
        e.right = 0,
        e.verticalCenter = 221,
        e.elementsContent = [this._Image1_i(), this.title_i(), this.desc_i(), this.draw_i()],
        e
    },
    n._Image1_i = function() {
        var e = new eui.Image;
        return e.height = 148,
        e.left = 0,
        e.right = 0,
        e.scale9Grid = new egret.Rectangle(2, 2, 329, 41),
        e.source = "temple_heroes_draw_panel_grp_bg_png",
        e.y = 0,
        e
    },
    n.title_i = function() {
        var e = new eui.Label;
        return this.title = e,
        e.fontFamily = "REEJI",
        e.left = 41,
        e.size = 28,
        e.text = "2015年包月神宠强势回归",
        e.textColor = 11263230,
        e.y = 20.789,
        e
    },
    n.desc_i = function() {
        var e = new eui.Label;
        return this.desc = e,
        e.fontFamily = "MFShangHei",
        e.left = 82,
        e.size = 22,
        e.text = "抽取到的精灵额外附赠精灵专属特性、第五技能、专属刻印",
        e.textColor = 4187130,
        e.y = 74,
        e
    },
    n.draw_i = function() {
        var e = new eui.Group;
        return this.draw = e,
        e.right = 47,
        e.y = 73,
        e.elementsContent = [this._Image2_i(), this.num_i(), this.icon_i(), this._Label1_i()],
        e
    },
    n._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "temple_heroes_draw_panel_btnzengjia1_kb_3_png",
        e.x = 0,
        e.y = 0,
        e
    },
    n.num_i = function() {
        var e = new eui.Label;
        return this.num = e,
        e.fontFamily = "REEJI",
        e.size = 32,
        e.text = "98",
        e.textColor = 16777215,
        e.x = 70.08,
        e.y = 13,
        e
    },
    n.icon_i = function() {
        var e = new eui.Image;
        return this.icon = e,
        e.source = "temple_heroes_draw_panel_icon_png",
        e.x = 17,
        e.y = 12,
        e
    },
    n._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "REEJI",
        e.size = 32,
        e.text = "抽取",
        e.textColor = 16777215,
        e.x = 123,
        e.y = 13,
        e
    },
    n._Scroller1_i = function() {
        var e = new eui.Scroller;
        return e.height = 377,
        e.horizontalCenter = 3,
        e.verticalCenter = -50.5,
        e.width = 1046,
        e.viewport = this._list_i(),
        e
    },
    n._list_i = function() {
        var e = new eui.List;
        return this._list = e,
        e.itemRendererSkinName = TempleHeroesDrawItemSkin,
        e.layout = this._TileLayout1_i(),
        e
    },
    n._TileLayout1_i = function() {
        var e = new eui.TileLayout;
        return e.horizontalGap = 10,
        e.requestedColumnCount = 6,
        e.requestedRowCount = 2,
        e.verticalGap = 10,
        e
    },
    n.aniGroup_i = function() {
        var e = new eui.Group;
        return this.aniGroup = e,
        e.horizontalCenter = 0,
        e.verticalCenter = 0,
        e
    },
    t
} (eui.Skin);