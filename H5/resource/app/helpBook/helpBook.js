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
    return new(i || (i = Promise))(function(r, o) {
        function a(t) {
            try {
                h(n.next(t))
            } catch(e) {
                o(e)
            }
        }
        function s(t) {
            try {
                h(n["throw"](t))
            } catch(e) {
                o(e)
            }
        }
        function h(t) {
            t.done ? r(t.value) : new i(function(e) {
                e(t.value)
            }).then(a, s)
        }
        h((n = n.apply(t, e || [])).next())
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
        if (r) throw new TypeError("Generator is already executing.");
        for (; h;) try {
            if (r = 1, o && (a = o[2 & i[0] ? "return": i[0] ? "throw": "next"]) && !(a = a.call(o, i[1])).done) return a;
            switch (o = 0, a && (i = [0, a.value]), i[0]) {
            case 0:
            case 1:
                a = i;
                break;
            case 4:
                return h.label++,
                {
                    value: i[1],
                    done: !1
                };
            case 5:
                h.label++,
                o = i[1],
                i = [0];
                continue;
            case 7:
                i = h.ops.pop(),
                h.trys.pop();
                continue;
            default:
                if (a = h.trys, !(a = a.length > 0 && a[a.length - 1]) && (6 === i[0] || 2 === i[0])) {
                    h = 0;
                    continue
                }
                if (3 === i[0] && (!a || i[1] > a[0] && i[1] < a[3])) {
                    h.label = i[1];
                    break
                }
                if (6 === i[0] && h.label < a[1]) {
                    h.label = a[1],
                    a = i;
                    break
                }
                if (a && h.label < a[2]) {
                    h.label = a[2],
                    h.ops.push(i);
                    break
                }
                a[2] && h.ops.pop(),
                h.trys.pop();
                continue
            }
            i = e.call(t, h)
        } catch(n) {
            i = [6, n],
            o = 0
        } finally {
            r = a = 0
        }
        if (5 & i[0]) throw i[1];
        return {
            value: i[0] ? i[1] : void 0,
            done: !0
        }
    }
    var r, o, a, s, h = {
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
helpBook; !
function(t) {
    var e = function(e) {
        function i(t) {
            var i = e.call(this) || this;
            return i.skinName = "HelpBookPanelSkin",
            i.jumpInfo = t,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            this.init(),
            this.addEvent()
        },
        i.prototype.destroy = function() {
            e.prototype.destroy.call(this),
            this.menu && this.menu.destroy()
        },
        i.prototype.init = function() {
            this.initBtnClose("help_book_panel_imgtitle_png", this),
            this.arrImage = [],
            this.list.itemRenderer = t.HelpBookItem,
            this.arrayCollection = new eui.ArrayCollection,
            this.list.dataProvider = this.arrayCollection;
            var e = new MenuData;
            this.groupName = "helpBookMenu",
            e.groupName = this.groupName,
            this.jumpInfo && this.jumpInfo[0] ? e["default"] = this.jumpInfo[0] : e["default"] = 1,
            e.root = [1, 2, 3, 4, 5],
            e.data = {
                1 : {
                    title: "精灵"
                },
                2 : {
                    title: "养成"
                },
                3 : {
                    title: "系统"
                },
                4 : {
                    title: "战斗"
                },
                5 : {
                    title: "设置"
                }
            },
            GameInfo.isChecking && (e["default"] = 4, e.root = [4]),
            this.menu = Menu.createMenu(e, this, 48),
            this.configData = [];
            for (var i = config.Helper.getItems(), n = 0, r = i; n < r.length; n++) {
                var o = r[n];
                this.configData[o.type] || (this.configData[o.type] = []),
                this.configData[o.type][o.group] || (this.configData[o.type][o.group] = []),
                this.configData[o.type][o.group].push(o)
            }
        },
        i.prototype.addEvent = function() {
            var t = this;
            this.list.addEventListener(egret.Event.CHANGE, this.onChangeTab2, this),
            this.txtSearch.addEventListener(egret.Event.CHANGE, this.onChangeTab1, this),
            this.groupHelp.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onBeginTouch, this),
            EventManager.addEventListener(BaseMenuEvent.BASE_MENU_SELECT_CHANGE_ + this.groupName,
            function() {
                t.txtSearch.text = "",
                t.onChangeTab1()
            },
            this),
            ImageButtonUtil.add(this.btnLastPage,
            function() {
                t.curPage--,
                t.updatePage()
            },
            this),
            ImageButtonUtil.add(this.btnNextPage,
            function() {
                t.curPage++,
                t.updatePage()
            },
            this)
        },
        i.prototype.onChangeTab1 = function() {
            var t = this,
            e = this.menu.selectedValue,
            i = this.configData[e].filter(function(e) {
                if (!e) return ! 1;
                if (t.txtSearch.text) {
                    for (var i = void 0,
                    n = 0,
                    r = e; n < r.length; n++) {
                        var o = r[n];
                        if (o.title) {
                            i = o.title;
                            break
                        }
                    }
                    return SearchUtil.isMatch(t.txtSearch.text, i)
                }
                return ! 0
            });
            this.arrayCollection.source = i,
            this.jumpInfo && this.jumpInfo[1] ? (this.list.selectedIndex = this.jumpInfo[1], this.once(egret.Event.RENDER,
            function() {
                t.scroller.viewport.scrollV = 46 * t.jumpInfo[1]
            },
            this)) : this.list.selectedIndex = 0,
            this.onChangeTab2()
        },
        i.prototype.onChangeTab2 = function() {
            this.jumpInfo && this.jumpInfo[2] ? this.curPage = this.jumpInfo[2] : this.curPage = 0,
            this.arrData = this.list.selectedItem;
            for (var t = this.groupDot.numChildren,
            e = 0; t > e; e++) this.arrImage.push(this.groupDot.getChildAt(e));
            this.groupDot.removeChildren(),
            t = this.arrData ? this.arrData.length: 0;
            for (var e = 0; t > e; e++) {
                var i = this.getImage();
                this.groupDot.addChild(i)
            }
            this.updatePage(0)
        },
        i.prototype.getImage = function() {
            return this.arrImage.length > 0 ? this.arrImage.pop() : new eui.Image
        },
        i.prototype.updatePage = function(t) {
            return void 0 === t && (t = .2),
            __awaiter(this, void 0, void 0,
            function() {
                var e, i, n, r;
                return __generator(this,
                function(o) {
                    switch (o.label) {
                    case 0:
                        return t > 0 ? (egret.lifecycle.stage.touchChildren = !1, [4, gsap.to(this.groupHelp, {
                            alpha: 0,
                            duration: t
                        })]) : [3, 2];
                    case 1:
                        o.sent(),
                        o.label = 2;
                    case 2:
                        for (e = this.arrData ? this.arrData.length: 0, i = 0; e > i; i++) n = this.groupDot.getChildAt(i),
                        n.source = "help_book_panel_imgdot" + (i == this.curPage ? 2 : 1) + "_png";
                        return DisplayUtil.setEnabled(this.btnLastPage, this.curPage > 0),
                        DisplayUtil.setEnabled(this.btnNextPage, this.curPage < e - 1),
                        this.arrData ? (r = this.arrData[this.curPage], this.txtTitle.text = r.title, this.txtHelp.textFlow = (new egret.HtmlTextParser).parse(r.text), this.imgHelp.source = "resource/assets/helpBook/" + r.picture + ".jpg") : (this.txtHelp.text = null, this.txtTitle.text = null, this.imgHelp.source = null),
                        t > 0 ? [4, gsap.to(this.groupHelp, {
                            alpha: 1,
                            duration: t
                        })] : [3, 4];
                    case 3:
                        o.sent(),
                        egret.lifecycle.stage.touchChildren = !0,
                        o.label = 4;
                    case 4:
                        return [2]
                    }
                })
            })
        },
        i.prototype.onBeginTouch = function(t) {
            egret.lifecycle.stage.once(egret.TouchEvent.TOUCH_END, this.onEndTouch, this),
            this.beginPoint = new egret.Point(t.stageX, t.stageY)
        },
        i.prototype.onEndTouch = function(t) {
            var e = t.stageX - this.beginPoint.x,
            i = t.stageY - this.beginPoint.y;
            Math.abs(e) > Math.abs(i) && Math.abs(e) > 10 && (e > 0 && this.curPage > 0 ? (this.curPage--, this.updatePage()) : 0 > e && this.curPage < this.arrData.length - 1 && (this.curPage++, this.updatePage()))
        },
        i
    } (BaseModule);
    t.HelpBook = e,
    __reflect(e.prototype, "helpBook.HelpBook")
} (helpBook || (helpBook = {}));
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
helpBook; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.skinName = "HelpBookItemSkin",
            e
        }
        return __extends(e, t),
        e.prototype.dataChanged = function() {
            for (var t, e = this.data,
            i = 0,
            n = e; i < n.length; i++) {
                var r = n[i];
                if (r.title) {
                    t = r.title;
                    break
                }
            }
            this.txt.text = t
        },
        e
    } (eui.ItemRenderer);
    t.HelpBookItem = e,
    __reflect(e.prototype, "helpBook.HelpBookItem")
} (helpBook || (helpBook = {}));
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
generateEUI.paths["resource/eui_skins/HelpBookItemSkin.exml"] = window.HelpBookItemSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["txt"],
        this.height = 46,
        this.width = 226,
        this.elementsContent = [this._Image1_i(), this.txt_i()],
        this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "help_book_item_imgdown_png"), new eui.SetProperty("txt", "textColor", 16777215)])]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return this._Image1 = t,
        t.source = "help_book_item_imgup_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.txt_i = function() {
        var t = new eui.Label;
        return this.txt = t,
        t.fontFamily = "MFShangHei",
        t.size = 20,
        t.text = "攻击技能",
        t.textColor = 9025023,
        t.x = 17,
        t.y = 13,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/HelpBookPanelSkin.exml"] = window.HelpBookPanelSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["txtSearch", "list", "scroller", "imgHelp", "txtHelp", "txtTitle", "groupHelp", "groupDot", "btnNextPage", "btnLastPage"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this._Image1_i(), this._Group3_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.left = 0,
        t.right = 0,
        t.source = "common_ui_bg_3_jpg",
        t.y = 0,
        t
    },
    i._Group3_i = function() {
        var t = new eui.Group;
        return t.horizontalCenter = 60,
        t.y = 44,
        t.elementsContent = [this._Image2_i(), this._Group1_i(), this.scroller_i(), this.groupHelp_i(), this.groupDot_i(), this._Group2_i()],
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "help_book_panel_imgbg_png",
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.x = 34,
        t.y = 51,
        t.elementsContent = [this._Image3_i(), this._Image4_i(), this.txtSearch_i()],
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "help_book_panel_imgsearchbg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.source = "help_book_panel_btnsearch_png",
        t.x = 197,
        t.y = 0,
        t
    },
    i.txtSearch_i = function() {
        var t = new eui.EditableText;
        return this.txtSearch = t,
        t.fontFamily = "MFShangHei",
        t.height = 18,
        t.prompt = "搜索教学",
        t.promptColor = 4149623,
        t.size = 18,
        t.width = 182,
        t.x = 8,
        t.y = 6,
        t
    },
    i.scroller_i = function() {
        var t = new eui.Scroller;
        return this.scroller = t,
        t.height = 438,
        t.width = 226,
        t.x = 34,
        t.y = 102,
        t.viewport = this.list_i(),
        t
    },
    i.list_i = function() {
        var t = new eui.List;
        return this.list = t,
        t.layout = this._VerticalLayout1_i(),
        t
    },
    i._VerticalLayout1_i = function() {
        var t = new eui.VerticalLayout;
        return t
    },
    i.groupHelp_i = function() {
        var t = new eui.Group;
        return this.groupHelp = t,
        t.horizontalCenter = 130,
        t.y = 67,
        t.elementsContent = [this._Image5_i(), this.imgHelp_i(), this.txtHelp_i(), this.txtTitle_i()],
        t
    },
    i._Image5_i = function() {
        var t = new eui.Image;
        return t.source = "help_book_panel_imgtitlebg_png",
        t.x = 212,
        t.y = 213,
        t
    },
    i.imgHelp_i = function() {
        var t = new eui.Image;
        return this.imgHelp = t,
        t.height = 203,
        t.width = 567,
        t.x = 1,
        t.y = 0,
        t
    },
    i.txtHelp_i = function() {
        var t = new eui.Label;
        return this.txtHelp = t,
        t.fontFamily = "MFShangHei",
        t.height = 120,
        t.size = 18,
        t.textColor = 8822740,
        t.width = 580,
        t.x = 0,
        t.y = 266,
        t
    },
    i.txtTitle_i = function() {
        var t = new eui.Label;
        return this.txtTitle = t,
        t.fontFamily = "REEJI",
        t.horizontalCenter = 0,
        t.size = 24,
        t.textColor = 12834813,
        t.y = 225,
        t
    },
    i.groupDot_i = function() {
        var t = new eui.Group;
        return this.groupDot = t,
        t.horizontalCenter = 130,
        t.y = 470,
        t.layout = this._HorizontalLayout1_i(),
        t
    },
    i._HorizontalLayout1_i = function() {
        var t = new eui.HorizontalLayout;
        return t.gap = 15,
        t.verticalAlign = "middle",
        t
    },
    i._Group2_i = function() {
        var t = new eui.Group;
        return t.x = 496,
        t.y = 495,
        t.elementsContent = [this.btnNextPage_i(), this.btnLastPage_i()],
        t
    },
    i.btnNextPage_i = function() {
        var t = new eui.Image;
        return this.btnNextPage = t,
        t.source = "help_book_panel_btnnextpage_png",
        t.x = 107,
        t.y = 0,
        t
    },
    i.btnLastPage_i = function() {
        var t = new eui.Image;
        return this.btnLastPage = t,
        t.source = "help_book_panel_btnlastpage_png",
        t.x = 0,
        t.y = 0,
        t
    },
    e
} (eui.Skin);