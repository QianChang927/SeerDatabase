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
    for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
    i.prototype = e.prototype,
    t.prototype = new i
},
__awaiter = this && this.__awaiter ||
function(t, e, i, o) {
    return new(i || (i = Promise))(function(n, r) {
        function s(t) {
            try {
                h(o.next(t))
            } catch(e) {
                r(e)
            }
        }
        function a(t) {
            try {
                h(o["throw"](t))
            } catch(e) {
                r(e)
            }
        }
        function h(t) {
            t.done ? n(t.value) : new i(function(e) {
                e(t.value)
            }).then(s, a)
        }
        h((o = o.apply(t, e || [])).next())
    })
},
__generator = this && this.__generator ||
function(t, e) {
    function i(t) {
        return function(e) {
            return o([t, e])
        }
    }
    function o(i) {
        if (n) throw new TypeError("Generator is already executing.");
        for (; h;) try {
            if (n = 1, r && (s = r[2 & i[0] ? "return": i[0] ? "throw": "next"]) && !(s = s.call(r, i[1])).done) return s;
            switch (r = 0, s && (i = [0, s.value]), i[0]) {
            case 0:
            case 1:
                s = i;
                break;
            case 4:
                return h.label++,
                {
                    value: i[1],
                    done: !1
                };
            case 5:
                h.label++,
                r = i[1],
                i = [0];
                continue;
            case 7:
                i = h.ops.pop(),
                h.trys.pop();
                continue;
            default:
                if (s = h.trys, !(s = s.length > 0 && s[s.length - 1]) && (6 === i[0] || 2 === i[0])) {
                    h = 0;
                    continue
                }
                if (3 === i[0] && (!s || i[1] > s[0] && i[1] < s[3])) {
                    h.label = i[1];
                    break
                }
                if (6 === i[0] && h.label < s[1]) {
                    h.label = s[1],
                    s = i;
                    break
                }
                if (s && h.label < s[2]) {
                    h.label = s[2],
                    h.ops.push(i);
                    break
                }
                s[2] && h.ops.pop(),
                h.trys.pop();
                continue
            }
            i = e.call(t, h)
        } catch(o) {
            i = [6, o],
            r = 0
        } finally {
            n = s = 0
        }
        if (5 & i[0]) throw i[1];
        return {
            value: i[0] ? i[1] : void 0,
            done: !0
        }
    }
    var n, r, s, a, h = {
        label: 0,
        sent: function() {
            if (1 & s[0]) throw s[1];
            return s[1]
        },
        trys: [],
        ops: []
    };
    return a = {
        next: i(0),
        "throw": i(1),
        "return": i(2)
    },
    "function" == typeof Symbol && (a[Symbol.iterator] = function() {
        return this
    }),
    a
},
helpBook; !
function(t) {
    var e = function(e) {
        function i(i) {
            var o = e.call(this) || this;
            return o.arrListItems = [],
            o.arrImgZooms = [],
            o.eventCountMap = [],
            o.isScrollAnim = !1,
            o.originalItemPosY = [],
            o.isRePosAnim = !1,
            o.skinName = "HelpBookPanelSkin",
            o.jumpInfo = i,
            o.helpBookItemPool = new ObjectPool(t.HelpBookItem, 999, "resetHandler", "destroy"),
            o.imgZoomPool = new ObjectPool(eui.Image, 999, "", ""),
            o
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            this.init(),
            this.addEvent()
        },
        i.prototype.destroy = function() {
            e.prototype.destroy.call(this),
            this.txtHelp.removeEventListener(egret.TextEvent.LINK, this.onTapTextHref, this),
            this.txtSearch.removeEventListener(egret.Event.CHANGE, this.onChangeTab1, this),
            this.txtSearch.text = null,
            this.scroller.removeEventListener(egret.Event.CHANGE, this.showItems, this),
            this.groupHelp.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onBeginTouch, this),
            this.menu && this.menu.destroy(),
            this.helpBookItemPool.destroy(),
            this.imgZoomPool.destroy(),
            this.arrListItems.splice(0),
            this.list.removeChildren(),
            i.curSelectItem = null,
            i.curSelectRootItem = null
        },
        i.prototype.init = function() {
            this.initBtnClose("help_book_panel_imgtitle_png", this),
            this.arrImage = [];
            var t = new MenuData;
            this.groupName = "helpBookMenu",
            t.groupName = this.groupName,
            this.jumpInfo && this.jumpInfo[0] ? t["default"] = this.jumpInfo[0] : t["default"] = 1,
            t.root = [1, 2, 3, 4, 5],
            t.data = {
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
            GameInfo.isChecking && (t["default"] = 4, t.root = [4]),
            this.menu = Menu.createMenu(t, this, 48),
            this.configData = [];
            for (var e = config.Helper.getItems(), i = 0, o = e; i < o.length; i++) {
                var n = o[i];
                this.configData[n.type] || (this.configData[n.type] = []),
                this.configData[n.type][n.group] || (this.configData[n.type][n.group] = []),
                this.configData[n.type][n.group].push(n)
            }
        },
        i.prototype.addEvent = function() {
            var e = this;
            EventManager.addEventListener(t.HelpBookEvent.HelpBookItem_OnTapHelpBookItem, this.onChangeTab2, this),
            EventManager.addEventListener(t.HelpBookEvent.HelpBookItem_OnRootNodeRePos, this.ResetListItemsPos, this),
            this.txtSearch.addEventListener(egret.Event.CHANGE, this.onChangeTab1, this),
            this.groupHelp.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onBeginTouch, this),
            this.scroller.addEventListener(egret.Event.CHANGE, this.showItems, this),
            EventManager.addEventListener(BaseMenuEvent.BASE_MENU_SELECT_CHANGE_ + this.groupName,
            function() {
                e.txtSearch.text = "",
                e.onChangeTab1()
            },
            this),
            ImageButtonUtil.add(this.btnLastPage,
            function() {
                e.curPage--,
                e.updatePage()
            },
            this),
            ImageButtonUtil.add(this.btnNextPage,
            function() {
                e.curPage++,
                e.updatePage()
            },
            this),
            this.txtHelp.addEventListener(egret.TextEvent.LINK, this.onTapTextHref, this)
        },
        i.prototype.showItems = function() {
            if (this.list.numChildren > 0) for (var t = this.scroller.viewport.scrollV,
            e = this.scroller.viewport.scrollV + this.scroller.height,
            i = 0; i < this.list.numChildren; ++i) {
                var o = this.list.getChildAt(i);
                null != o.info && 0 != o.nodeType && (o.visible = t <= o.y && o.y < e)
            }
        },
        i.prototype.onChangeTab1 = function() {
            var e = this,
            o = this.menu.selectedValue,
            n = [];
            if (this.txtSearch.text ? this.configData[o].forEach(function(t) {
                for (var i = 0,
                o = t; i < o.length; i++) {
                    var r = o[i],
                    s = !1;
                    if (r.title && (s = s || SearchUtil.isMatch(e.txtSearch.text, r.title))) n.push(r);
                    else if (r.searchword) for (var a = r.searchword.split(" "), h = 0; h < a.length; ++h) s = s || SearchUtil.isMatch(e.txtSearch.text, a[h]),
                    s && n.push(r)
                }
            }) : n = this.configData[o].filter(function(t) {
                return t ? !0 : !1
            }), this.list.scrollV = 0, this.list.removeChildren(), this.arrListItems.length > 0) {
                for (var r = 0; r < this.arrListItems.length; ++r) {
                    var s = this.arrListItems[r];
                    s instanceof t.HelpBookItem && this.helpBookItemPool.push(s)
                }
                this.arrListItems.splice(0),
                this.helpBookItemPool.clear()
            }
            if (this.txtSearch.text) for (var a = [], h = 0, r = 0; r < n.length; ++r) if (r < n.length - 1 && n[r].node == n[r + 1].node && n[r].group == n[r + 1].group) a.push(n[r]);
            else {
                a.push(n[r]);
                var l = this.helpBookItemPool.pop();
                l.setInfoAndIndex(a, r),
                this.arrListItems[h] = l,
                0 == h && (i.curSelectItem = l, i.curSelectItem.currentState = "downParent"),
                l.UpdateView(),
                this.list.addChild(l),
                l.y = h * (l.height + 6),
                h++,
                a = []
            } else {
                this.originalItemPosY.splice(0);
                for (var p = !1,
                r = 0; r < n.length; r++) {
                    var l = this.helpBookItemPool.pop();
                    l.setInfoAndIndex(n[r], r),
                    this.arrListItems[r] = l,
                    0 == r && (i.curSelectItem = l, i.curSelectItem.currentState = "downParent"),
                    l.UpdateView();
                    var u = r * (l.height + 6);
                    n[r][0].node.length > 0 && (this.arrListItems.concat(l.CreateTreeChildren(this.helpBookItemPool, u)), p = !0),
                    this.list.addChild(l),
                    l.y = u,
                    (n[r][0].node.length > 0 || p) && (this.originalItemPosY[l.itemIndex] = l.y)
                }
                if (p) {
                    var l = this.helpBookItemPool.pop(),
                    u = this.arrListItems[this.arrListItems.length - 1].y;
                    l.setInfoAndIndex(null, this.arrListItems.length),
                    this.arrListItems.push(l),
                    this.list.addChild(l),
                    l.visible = !1,
                    l.y = u
                }
            }
            this.jumpInfo && this.jumpInfo[1] && this.once(egret.Event.RENDER,
            function() {
                e.scroller.viewport.scrollV = 46 * e.jumpInfo[1]
            },
            this),
            this.arrListItems.length > 0 ? (this.showItems(), this.arrData = this.arrListItems[0].info, 0 == this.arrListItems[0].nodeType && (i.curSelectRootItem = this.arrListItems[0])) : this.arrData = null,
            this.onChangeTab2()
        },
        i.prototype.ResetListItemsPos = function(t) {
            var e = this;
            if (t && t.data) {
                var o = t.data.itemHeight;
                this.isRePosAnim = this.isRePosAnim || t.data.isShowAnim,
                o = t.data.isShowAnim ? o: -o;
                for (var n = t.data.index,
                r = n + 1; r < this.arrListItems.length; ++r) {
                    var s = this.arrListItems[r];
                    this.eventCountMap[s.itemIndex] ? this.eventCountMap[s.itemIndex] += o: this.eventCountMap[s.itemIndex] = o,
                    gsap.to(s, {
                        y: s.y + this.eventCountMap[s.itemIndex],
                        duration: .1
                    }).then(function() {
                        e.eventCountMap = [],
                        e.isScrollAnim || (1 == i.curSelectItem.nodeType ? (e.isScrollAnim = !0, e.isRePosAnim ? gsap.to(e.scroller.viewport, {
                            scrollV: i.curSelectItem.originPosY,
                            duration: .2,
                            onComplete: function() {
                                e.isScrollAnim = !1,
                                e.isRePosAnim = !1
                            }
                        }) : gsap.to(e.scroller.viewport, {
                            scrollV: i.curSelectItem.nodeParent.originPosY,
                            duration: .2,
                            onComplete: function() {
                                e.isScrollAnim = !1,
                                e.isRePosAnim = !1
                            }
                        })) : 0 == i.curSelectItem.nodeType && i.curSelectRootItem && e.scroller.viewport.scrollV != i.curSelectRootItem.y ? (e.isScrollAnim = !0, gsap.to(e.scroller.viewport, {
                            scrollV: e.originalItemPosY[i.curSelectRootItem.itemIndex],
                            duration: .2,
                            onComplete: function() {
                                e.isScrollAnim = !1
                            }
                        })) : -1 == i.curSelectItem.nodeType && (e.isScrollAnim = !0, gsap.to(e.scroller.viewport, {
                            scrollV: e.originalItemPosY[i.curSelectItem.itemIndex],
                            duration: .2,
                            onComplete: function() {
                                e.isScrollAnim = !1
                            }
                        })))
                    })
                }
            }
        },
        i.prototype.onChangeTab2 = function(t) {
            if (this.jumpInfo && this.jumpInfo[2] ? this.curPage = this.jumpInfo[2] : this.curPage = 0, null != t) {
                var e = t.data;
                1 == e.nodeType && 0 == i.curSelectItem.nodeType || e == i.curSelectItem || (i.curSelectItem.currentState = "up"),
                i.curSelectItem = e,
                this.arrData = t.data.info,
                0 == i.curSelectItem.nodeType ? (i.curSelectRootItem && i.curSelectRootItem != i.curSelectItem && i.curSelectRootItem != i.curSelectItem.nodeRoot && (i.curSelectRootItem.currentState = "up"), i.curSelectRootItem = i.curSelectItem) : i.curSelectRootItem && -1 == i.curSelectItem.nodeType && (i.curSelectRootItem.currentState = "up", i.curSelectRootItem = null)
            }
            for (var o = this.groupDot.numChildren,
            n = 0; o > n; n++) this.arrImage.push(this.groupDot.getChildAt(n));
            this.groupDot.removeChildren(),
            o = this.arrData ? this.arrData.length: 0;
            for (var n = 0; o > n; n++) {
                var r = this.getImage();
                this.groupDot.addChild(r)
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
                var e, i, o, i, n, r;
                return __generator(this,
                function(s) {
                    switch (s.label) {
                    case 0:
                        return t > 0 ? (egret.lifecycle.stage.touchChildren = !1, [4, gsap.to(this.groupHelp, {
                            alpha: 0,
                            duration: t
                        })]) : [3, 2];
                    case 1:
                        s.sent(),
                        s.label = 2;
                    case 2:
                        for (e = this.arrData ? this.arrData.length: 0, i = 0; e > i; i++) o = this.groupDot.getChildAt(i),
                        o.source = "help_book_panel_imgdot" + (i == this.curPage ? 2 : 1) + "_png";
                        if (DisplayUtil.setEnabled(this.btnLastPage, this.curPage > 0), DisplayUtil.setEnabled(this.btnNextPage, this.curPage < e - 1), this.arrImgZooms.length > 0) {
                            for (i = 0; i < this.arrImgZooms.length; ++i) n = this.arrImgZooms[i],
                            n.visible = !1,
                            n instanceof eui.Image && this.imgZoomPool.push(n);
                            this.arrImgZooms.splice(0, this.arrImgZooms.length)
                        }
                        return this.arrData ? (r = this.arrData[this.curPage], this.txtTitle.text = r.title, this.txtHelp.textFlow = (new egret.HtmlTextParser).parse(r.text), this.addImgZoom(r.jump), r.picture.length > 0 ? this.imgHelp.source = "resource/assets/helpBook/" + r.picture + ".jpg": this.imgHelp.source = "") : (this.txtHelp.text = null, this.txtTitle.text = null, this.imgHelp.source = null),
                        t > 0 ? [4, gsap.to(this.groupHelp, {
                            alpha: 1,
                            duration: t
                        })] : [3, 4];
                    case 3:
                        s.sent(),
                        egret.lifecycle.stage.touchChildren = !0,
                        s.label = 4;
                    case 4:
                        return [2]
                    }
                })
            })
        },
        i.prototype.addImgZoom = function(t) {
            var e = this;
            if (t && t.length > 0) {
                for (var i = [], o = this.txtHelp.textFlow, n = 0; n < o.length; ++n) o[n].style && i.push(o[n]);
                for (var r = t.split(" "), n = 0; n < r.length; ++n) {
                    var s = r[n].split("_"),
                    a = i[ + s[0] - 1];
                    a.text += "  ",
                    a.style.href = "event:" + s[1] + "_" + s[2],
                    a.style.underline = !0
                }
                var h = this.txtHelp.$getLinesArr(),
                l = this.txtHelp.y;
                h.forEach(function(t, i) {
                    var o = e.txtHelp.x;
                    l += t.height;
                    for (var n = 0; n < t.elements.length; ++n) {
                        var r = t.elements[n];
                        if (o += r.width, r.style.href && " " == r.text[r.text.length - 1]) {
                            var s = e.imgZoomPool.pop();
                            s.visible = !0,
                            s.source = "help_book_item_children_zoom_png",
                            s.width = 12,
                            s.height = 12,
                            " " == r.text[r.text.length - 2] ? s.x = o - s.width + 2 : s.x = o - s.width + 6,
                            s.y = l - s.height - 6,
                            e.txtHelp.parent.addChild(s),
                            e.arrImgZooms.push(s)
                        }
                    }
                })
            }
        },
        i.prototype.onTapTextHref = function(e) {
            var i = e.text.split("_"),
            o = +i[0],
            n = +i[1];
            switch (o) {
            case 1:
                tipsPop.TipsPop.openItemPop({
                    id:
                    n
                });
                break;
            case 2:
                var r = PopViewManager.createDefaultStyleObject();
                r.maskShapeStyle.maskAlpha = .7,
                r.effStyle.showAniType = PopEffStyle.RIGHT_TO_LEFT,
                PopViewManager.getInstance().openView(new t.HelpBookPop(n, this.arrImgZooms, this.imgZoomPool), r)
            }
        },
        i.prototype.onBeginTouch = function(t) {
            this.arrData && this.arrData.length > 1 && (egret.lifecycle.stage.once(egret.TouchEvent.TOUCH_END, this.onEndTouch, this), this.beginPoint = new egret.Point(t.stageX, t.stageY))
        },
        i.prototype.onEndTouch = function(t) {
            if (this.arrData && this.arrData.length > 1) {
                var e = t.stageX - this.beginPoint.x,
                i = t.stageY - this.beginPoint.y;
                Math.abs(e) > Math.abs(i) && Math.abs(e) > 10 && (e > 0 && this.curPage > 0 ? (this.curPage--, this.updatePage()) : 0 > e && this.curPage < this.arrData.length - 1 && (this.curPage++, this.updatePage()))
            }
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
    for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
    i.prototype = e.prototype,
    t.prototype = new i
},
helpBook; !
function(t) {
    var e = function(t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return __extends(e, t),
        e.HelpBookItem_OnTapHelpBookItem = "HelpBookItem_OnTapHelpBookItem",
        e.HelpBookItem_OnRootNodeRePos = "HelpBookItem_OnRootNodeRePos",
        e.HelpBookItem_SelectExistChildrenNode = "HelpBookItem_SelectExistChildrenNode",
        e.HelpBookItem_SelectChildNode = "HelpBookItem_SelectChildNode",
        e.HelpBookItem_CloseAllItem = "HelpBookItem_CloseAllItem",
        e.HelpBookItem_OnTapParent = "HelpBookItem_OnTapParent",
        e
    } (BaseModule);
    t.HelpBookEvent = e,
    __reflect(e.prototype, "helpBook.HelpBookEvent")
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
    for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
    i.prototype = e.prototype,
    t.prototype = new i
},
helpBook; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t.nodeType = -1,
            t.txtNode = "",
            t.nodeParent = null,
            t.nodeRoot = null,
            t.isChildrenShow = !1,
            t.indexInNode = -1,
            t.originPosY = 0,
            t.tl = null,
            t.isPlayingAnim = !1,
            t.eventCountMap = {},
            t.skinName = "HelpBookItemSkin",
            t.cacheAsBitmap = !0,
            t
        }
        return __extends(i, e),
        i.prototype.setInfoAndIndex = function(t, e) {
            this.info = t,
            this.itemIndex = e
        },
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.grpChildren.height = 0,
            this.AddEvent()
        },
        i.prototype.resetHandler = function() {
            this.grpChildren.height = 0,
            this.AddEvent(),
            this.txt.text = "",
            this.currentState = "up"
        },
        i.prototype.AddEvent = function() {
            var e = this;
            ImageButtonUtil.add(this.grpTap, this.TouchFunc, this, !1, !1),
            EventManager.addEventListener(this.txtNode + t.HelpBookEvent.HelpBookItem_SelectExistChildrenNode,
            function(i) {
                if (i && i.data) {
                    var o = i.data.itemHeight;
                    o = i.data.isShowAnim ? o: -o;
                    for (var n = i.data.indexInNode,
                    r = n + 1; r < e.grpList.numChildren; ++r) {
                        var s = e.grpList.getChildAt(r);
                        e.eventCountMap[s.txtNode] ? e.eventCountMap[s.txtNode] += o: e.eventCountMap[s.txtNode] = o,
                        gsap.to(s, {
                            y: s.y + e.eventCountMap[s.txtNode],
                            duration: .1
                        }).then(function() {
                            e.eventCountMap = {}
                        })
                    }
                    gsap.to(e.grpChildren, {
                        height: e.grpChildren.height + o,
                        duration: .1
                    }),
                    e.nodeParent && (i.data.indexInNode = e.indexInNode, EventManager.dispatchEventWith(e.nodeParent.txtNode + t.HelpBookEvent.HelpBookItem_SelectExistChildrenNode, !0, i.data))
                }
            },
            this),
            EventManager.addEventListener(t.HelpBookEvent.HelpBookItem_CloseAllItem,
            function(t) {
                var i = t.data;
                i != e && e.CloseAni()
            },
            this),
            this.nodeParent && (EventManager.addEventListener(this.nodeParent.txtNode + t.HelpBookEvent.HelpBookItem_SelectChildNode,
            function(i) {
                var o = i.data;
                o != e && (e.CloseAni(), EventManager.dispatchEventWith(e.txtNode + t.HelpBookEvent.HelpBookItem_SelectChildNode, !0, i.data))
            },
            this), EventManager.addEventListener(this.nodeParent.txtNode + t.HelpBookEvent.HelpBookItem_OnTapParent,
            function(i) {
                e.CloseAni(),
                EventManager.dispatchEventWith(e.txtNode + t.HelpBookEvent.HelpBookItem_OnTapParent)
            },
            this))
        },
        i.prototype.UpdateView = function(t) {
            for (var e, i = 0,
            o = this.info; i < o.length; i++) {
                var n = o[i];
                if (n.title) {
                    e = n.title;
                    break
                }
            }
            if (t) {
                this.txt.size = 20 - t;
                for (var r = 0; t > r; ++r) this.txt.text += "　";
                this.txt.once(egret.Event.RENDER, this.ReposArrow, this)
            }
            this.txt.text += e
        },
        i.prototype.ReposArrow = function() {
            this.grpList.numChildren > 0 && (this.imgArrow.x = this.txt.x + (this.nodeLevel - 1) * this.txt.size, this.imgArrow.width = this.txt.size - 5, this.imgArrow.height = this.txt.size - 5, this.imgArrow.visible = !0)
        },
        i.prototype.AddInfo = function(t) {
            this.info.push(t)
        },
        i.prototype.CreateTreeChildren = function(t, e) {
            if (this.info[0].node.length <= 0) return null;
            var i = [],
            o = this,
            n = this,
            r = this.info[0].node;
            this.txtNode = r,
            this.nodeType = 0,
            this.originPosY = e;
            var s = 0;
            this.nodeLevel = 0;
            var a = [this],
            h = 0,
            l = 0;
            do h++,
            l++;
            while (1 == this.info[h].node.length && this.info[h].node == this.info[h - 1].node);
            for (; h < this.info.length; h++) {
                var p = this.info[h].node.split("_").length - 1;
                if (p != s || r != this.info[h].node) {
                    var u = t.pop();
                    u.setInfoAndIndex([this.info[h]], this.itemIndex),
                    u.nodeType = 1,
                    u.nodeRoot = n,
                    u.txtNode = this.info[h].node,
                    p > s ? (u.y = a[s].grpList.numChildren * u.height, u.nodeParent = a[s], u.indexInNode = a[s].grpList.numChildren, u.originPosY = a[s].originPosY + 46 + u.indexInNode * u.height, a[s].grpList.addChild(u)) : p == s ? (a.pop(), u.y = a[s - 1].grpList.numChildren * u.height, u.nodeParent = a[s - 1], u.indexInNode = a[p - 1].grpList.numChildren, u.originPosY = a[p - 1].originPosY + 46 + u.indexInNode * u.height, a[p - 1].grpList.addChild(u)) : (a.splice(p, s - p + 1), u.y = a[p - 1].grpList.numChildren * u.height, u.nodeParent = a[p - 1], u.indexInNode = a[p - 1].grpList.numChildren, u.originPosY = a[p - 1].originPosY + 46 + u.indexInNode * u.height, a[p - 1].grpList.addChild(u)),
                    a.push(u),
                    s = p,
                    r = this.info[h].node,
                    u.nodeLevel = s,
                    u.UpdateView(s),
                    o = u,
                    i.push(u)
                } else o.AddInfo(this.info[h])
            }
            var c = KTool.clone(this.info);
            this.info = [];
            for (var g = 0; l > g; ++g) this.info.push(c[g]);
            return a.splice(0),
            h = 0,
            i
        },
        i.prototype.TouchFunc = function() {
            this.isPlayingAnim || ("downParent" == this.currentState || "downChildren" == this.currentState ? this.grpList.numChildren > 0 && t.HelpBook.curSelectItem == this ? !this.tl || this.tl.reversed() ? this.OpenAni() : this.CloseAni() : (EventManager.dispatchEventWith(t.HelpBookEvent.HelpBookItem_OnTapHelpBookItem, !0, this), this.txtNode.length > 0 && EventManager.dispatchEventWith(this.txtNode + t.HelpBookEvent.HelpBookItem_OnTapParent)) : (EventManager.dispatchEventWith(t.HelpBookEvent.HelpBookItem_OnTapHelpBookItem, !0, this), this.nodeParent ? (EventManager.dispatchEventWith(this.nodeParent.txtNode + t.HelpBookEvent.HelpBookItem_SelectChildNode, !0, this), this.currentState = "downChildren") : (EventManager.dispatchEventWith(t.HelpBookEvent.HelpBookItem_CloseAllItem, !0, this), this.currentState = "downParent"), this.txtNode.length > 0 && EventManager.dispatchEventWith(this.txtNode + t.HelpBookEvent.HelpBookItem_OnTapParent), this.isChildrenShow || this.OpenAni()))
        },
        i.prototype.OpenAni = function() {
            var e = this;
            if (! (this.grpList.numChildren <= 0)) {
                if (this.isPlayingAnim = !0, this.tl) DisplayUtil.setScrollerItemIncludeInLayout(this.scroller, !1),
                this.tl.restart().then(function() {
                    DisplayUtil.setScrollerItemIncludeInLayout(e.scroller, !0),
                    e.isPlayingAnim = !1
                });
                else {
                    this.tl = new gsap.core.Timeline;
                    var i = 46,
                    o = i * this.grpList.numChildren + 2;
                    this.itemHeight = o,
                    this.grpChildren.height = o,
                    DisplayUtil.setScrollerItemIncludeInLayout(this.scroller, !1);
                    var n = .01;
                    this.tl.from(this.grpChildren, {
                        height: 0,
                        duration: n * this.grpList.numChildren
                    },
                    "<"),
                    this.tl.from(this.scroller.viewport.$children, {
                        y: -200,
                        alpha: 0,
                        stagger: -n,
                        ease: Quad.easeOut
                    },
                    "-=0.4").then(function() {
                        DisplayUtil.setScrollerItemIncludeInLayout(e.scroller, !0),
                        e.isPlayingAnim = !1
                    })
                }
                this.isChildrenShow = !0;
                var r = {
                    itemHeight: this.itemHeight,
                    index: this.itemIndex,
                    indexInNode: this.indexInNode,
                    isShowAnim: !0
                };
                this.nodeParent && EventManager.dispatchEventWith(this.nodeParent.txtNode + t.HelpBookEvent.HelpBookItem_SelectExistChildrenNode, !0, r),
                EventManager.dispatchEventWith(t.HelpBookEvent.HelpBookItem_OnRootNodeRePos, !0, r),
                this.imgArrow.source = "help_book_item_children_imgarrowdown_png"
            }
        },
        i.prototype.CloseAni = function() {
            var e = this;
            if (this.tl && !this.tl.reversed()) {
                this.isPlayingAnim = !0,
                this.grpList.visible = !1,
                DisplayUtil.setScrollerItemIncludeInLayout(this.scroller, !1);
                var i = {
                    itemHeight: this.itemHeight,
                    index: this.itemIndex,
                    indexInNode: this.indexInNode,
                    isShowAnim: !1
                };
                this.tl.reverse().then(function() {
                    DisplayUtil.setScrollerItemIncludeInLayout(e.scroller, !0),
                    e.isChildrenShow = !1,
                    e.isPlayingAnim = !1,
                    e.grpList.visible = !0
                }),
                this.nodeParent && EventManager.dispatchEventWith(this.nodeParent.txtNode + t.HelpBookEvent.HelpBookItem_SelectExistChildrenNode, !0, i),
                EventManager.dispatchEventWith(t.HelpBookEvent.HelpBookItem_OnRootNodeRePos, !0, i),
                this.imgArrow.source = "help_book_item_children_imgarrowup_png"
            }
        },
        i.prototype.destroy = function() {
            e.prototype.destroy.call(this),
            this.tl && this.tl.kill(),
            this.tl = null,
            this.grpList.removeChildren()
        },
        i
    } (BaseItemRenderer);
    t.HelpBookItem = e,
    __reflect(e.prototype, "helpBook.HelpBookItem")
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
    for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
    i.prototype = e.prototype,
    t.prototype = new i
},
helpBook; !
function(t) {
    var e = function(t) {
        function e(e, i, o) {
            var n = t.call(this) || this;
            return n.skinName = HelpBookPopSkin,
            n.cacheAsBitmap = !0,
            n.idInTable = e,
            n.arrImgZooms = i,
            n.imgZoomPool = o,
            n
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this),
            this.AddEvent(),
            this.InitView()
        },
        e.prototype.AddEvent = function() {
            this.txtHelp.addEventListener(egret.TextEvent.LINK, this.onTapTextHref, this)
        },
        e.prototype.InitView = function() {
            var t = config.Helper.getItem(this.idInTable);
            this.txtTitle.text = t.title,
            this.txtHelp.textFlow = (new egret.HtmlTextParser).parse(t.text),
            this.imgHelp.source = "resource/assets/helpBook/" + t.picture + ".jpg",
            this.addImgZoom(t.jump),
            DisplayUtil.setEnabled(this.btnLastPage, !1),
            DisplayUtil.setEnabled(this.btnNextPage, !1)
        },
        e.prototype.onTapTextHref = function(t) {
            var i = t.text.split("_"),
            o = +i[0],
            n = +i[1];
            switch (o) {
            case 1:
                tipsPop.TipsPop.openItemPop({
                    id:
                    n
                });
                break;
            case 2:
                this.hide();
                var r = PopViewManager.createDefaultStyleObject();
                r.maskShapeStyle.maskAlpha = .7,
                r.effStyle.showAniType = PopEffStyle.RIGHT_TO_LEFT,
                PopViewManager.getInstance().openView(new e(n, this.arrImgZooms, this.imgZoomPool), r)
            }
        },
        e.prototype.addImgZoom = function(t) {
            var e = this;
            if (t && t.length > 0) {
                for (var i = [], o = this.txtHelp.textFlow, n = 0; n < o.length; ++n) o[n].style && i.push(o[n]);
                for (var r = t.split(" "), n = 0; n < r.length; ++n) {
                    var s = r[n].split("_"),
                    a = i[ + s[0] - 1];
                    a.text += "  ",
                    a.style.href = "event:" + s[1] + "_" + s[2],
                    a.style.underline = !0
                }
                var h = this.txtHelp.$getLinesArr(),
                l = this.txtHelp.y;
                h.forEach(function(t, i) {
                    var o = e.txtHelp.x;
                    l += t.height;
                    for (var n = 0; n < t.elements.length; ++n) {
                        var r = t.elements[n];
                        if (o += r.width, r.style.href && " " == r.text[r.text.length - 1]) {
                            var s = e.imgZoomPool.pop();
                            s.visible = !0,
                            s.source = "help_book_item_children_zoom_png",
                            s.width = 12,
                            s.height = 12,
                            " " == r.text[r.text.length - 2] ? s.x = o - s.width + 2 : s.x = o - s.width + 6,
                            s.y = l - s.height - 6,
                            e.txtHelp.parent.addChild(s),
                            e.arrImgZooms.push(s)
                        }
                    }
                })
            }
        },
        e.prototype.destroy = function() {
            t.prototype.destroy.call(this),
            this.txtHelp.removeEventListener(egret.TextEvent.LINK, this.onTapTextHref, this)
        },
        e
    } (PopView);
    t.HelpBookPop = e,
    __reflect(e.prototype, "helpBook.HelpBookPop")
} (helpBook || (helpBook = {}));
var __extends = this && this.__extends ||
function(t, e) {
    function i() {
        this.constructor = t
    }
    for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
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
        this.skinParts = ["imgArrow", "txt", "grpList", "scroller", "grpChildren", "grpTap"],
        this.height = 46,
        this.width = 226,
        this.elementsContent = [this._Image1_i(), this.imgArrow_i(), this.txt_i(), this.grpChildren_i(), this.grpTap_i()],
        this.states = [new eui.State("up", []), new eui.State("downParent", [new eui.SetProperty("_Image1", "source", "help_book_item_imgdown_png"), new eui.SetProperty("txt", "textColor", 16777215)]), new eui.State("downChildren", [new eui.SetProperty("_Image1", "source", "help_book_item_children_imgDown_png"), new eui.SetProperty("txt", "textColor", 16777215)])]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return this._Image1 = t,
        t.height = 46,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "help_book_item_imgup_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.imgArrow_i = function() {
        var t = new eui.Image;
        return this.imgArrow = t,
        t.source = "help_book_item_children_imgarrowup_png",
        t.verticalCenter = 0,
        t.visible = !1,
        t.x = 17,
        t
    },
    i.txt_i = function() {
        var t = new eui.Label;
        return this.txt = t,
        t.bottom = 0,
        t.fontFamily = "MFShangHei",
        t.left = 17,
        t.right = 0,
        t.scaleX = 1,
        t.scaleY = 1,
        t.size = 20,
        t.textColor = 9025023,
        t.top = 0,
        t.verticalAlign = "middle",
        t
    },
    i.grpChildren_i = function() {
        var t = new eui.Group;
        return this.grpChildren = t,
        t.height = 0,
        t.left = 0,
        t.right = 0,
        t.scaleX = 1,
        t.scaleY = 1,
        t.top = 46,
        t.elementsContent = [this.scroller_i()],
        t
    },
    i.scroller_i = function() {
        var t = new eui.Scroller;
        return this.scroller = t,
        t.bottom = 0,
        t.left = 0,
        t.right = 0,
        t.scaleX = 1,
        t.scaleY = 1,
        t.top = 0,
        t.x = 0,
        t.viewport = this.grpList_i(),
        t
    },
    i.grpList_i = function() {
        var t = new eui.Group;
        return this.grpList = t,
        t.horizontalCenter = 0,
        t
    },
    i.grpTap_i = function() {
        var t = new eui.Group;
        return this.grpTap = t,
        t.height = 46,
        t.horizontalCenter = 0,
        t.verticalCenter = 0,
        t.width = 226,
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
        var t = new eui.Group;
        return this.list = t,
        t
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
} (eui.Skin),
generateEUI.paths["resource/eui_skins/HelpBookPopSkin.exml"] = window.HelpBookPopSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["imgpopbg", "txtHelp", "imgTitleBG", "txtTitle", "imgHelp", "groupDot", "btnNextPage", "btnLastPage", "info"],
        this.height = 640,
        this.width = 661,
        this.elementsContent = [this.imgpopbg_i(), this.info_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.imgpopbg_i = function() {
        var t = new eui.Image;
        return this.imgpopbg = t,
        t.source = "help_book_pop_imgpopbg_png",
        t.y = 2,
        t
    },
    i.info_i = function() {
        var t = new eui.Group;
        return this.info = t,
        t.width = 568,
        t.x = 56,
        t.y = 34,
        t.elementsContent = [this.txtHelp_i(), this.imgTitleBG_i(), this.txtTitle_i(), this.imgHelp_i(), this.groupDot_i(), this.btnNextPage_i(), this.btnLastPage_i()],
        t
    },
    i.txtHelp_i = function() {
        var t = new eui.Label;
        return this.txtHelp = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字",
        t.textColor = 6388143,
        t.width = 568,
        t.x = 0,
        t.y = 261,
        t
    },
    i.imgTitleBG_i = function() {
        var t = new eui.Image;
        return this.imgTitleBG = t,
        t.source = "help_book_panel_imgtitlebg_png",
        t.x = 207,
        t.y = 213,
        t
    },
    i.txtTitle_i = function() {
        var t = new eui.Label;
        return this.txtTitle = t,
        t.fontFamily = "REEJI",
        t.size = 22,
        t.text = "攻击技能",
        t.textColor = 12834813,
        t.x = 240,
        t.y = 225,
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
    i.groupDot_i = function() {
        var t = new eui.Group;
        return this.groupDot = t,
        t.horizontalCenter = 1,
        t.y = 511,
        t.layout = this._HorizontalLayout1_i(),
        t.elementsContent = [this._Image1_i()],
        t
    },
    i._HorizontalLayout1_i = function() {
        var t = new eui.HorizontalLayout;
        return t.gap = 15,
        t.verticalAlign = "middle",
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.scaleX = 1,
        t.scaleY = 1,
        t.source = "help_book_panel_imgdot2_png",
        t
    },
    i.btnNextPage_i = function() {
        var t = new eui.Image;
        return this.btnNextPage = t,
        t.source = "help_book_panel_btnnextpage_png",
        t.x = 295,
        t.y = 536,
        t
    },
    i.btnLastPage_i = function() {
        var t = new eui.Image;
        return this.btnLastPage = t,
        t.source = "help_book_panel_btnlastpage_png",
        t.x = 188,
        t.y = 536,
        t
    },
    e
} (eui.Skin);