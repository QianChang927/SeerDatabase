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
anniversaryDrainage; !
function(t) {
    var e = function(e) {
        function n() {
            var t = e.call(this) || this;
            return t.URLs = ["https://seer.61.com/events/15years/", "https://seer.61.com/events/15years/", "NULL", "https://www.bilibili.com/video/BV1TZ421W7sy/", "https://www.bilibili.com/video/BV1WM4m1U7K1/", "https://www.bilibili.com/blackboard/activity-dwThXMI7dq.html?bsource=activity_game_20240603_srhzhn_srh_ggtc", "https://seer.61.com/events/15years/", "https://ngabbs.com/read.php?tid=40365569", "https://seer.61.com/events/seer15threport", "https://www.bilibili.com/video/BV1Hs421T7d9/"],
            t.start = ["2024/5/24", "2024/5/24", "2024/5/28", "2024/5/31", "2024/6/3", "2024/6/3", "2024/6/3", "2024/6/4", "2024/6/7", "2024/6/14"],
            t.end = ["2024/7/4", "2024/7/4", "2024/6/3", "2024/7/4", "2024/7/4", "2024/7/4", "2024/7/4", "2024/7/4", "2024/7/4", "2024/7/4"],
            t.skinName = AnniversaryDrainageSkin,
            t.grpCacheBitMap.cacheAsBitmap = !0,
            t
        }
        return __extends(n, e),
        n.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.AddEvent(),
            this.Init(),
            this.UpdateArrow()
        },
        n.prototype.AddEvent = function() {
            var t = this;
            ImageButtonUtil.add(this.btnClose,
            function() {
                t.onClose()
            },
            this),
            ImageButtonUtil.add(this.btnLeft,
            function() {
                t.UpdatePage(!0)
            },
            this),
            ImageButtonUtil.add(this.btnRight,
            function() {
                t.UpdatePage(!1)
            },
            this),
            ImageButtonUtil.add(this.imgContent,
            function() {
                t.JumpTo(t.lastSelectIndex)
            },
            this, !1, !1),
            this.list.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.OnTapItem, this)
        },
        n.prototype.Init = function() {
            this.scroller.scrollPolicyH = "off",
            this.list.itemRenderer = t.AnniversaryDrainageItem;
            for (var e = [], n = SystemTimerManager.sysBJDate.getTime(), i = 0; 10 > i; ++i) {
                var r = new Date(this.start[i]).getTime();
                if (i % 5 + 1 != 1) if (n >= r) {
                    var a = new Date(this.end[i]).getTime();
                    n >= a ? e.push({
                        state: "end"
                    }) : e.push({
                        state: "normal"
                    })
                } else e.push({
                    state: "notOpen"
                });
                else e.push({
                    state: "selected"
                })
            }
            this.arrData = e,
            this.arrayCollection = new eui.ArrayCollection(e),
            this.list.dataProvider = this.arrayCollection,
            this.lastSelectIndex = 0,
            this.curPage = 1
        },
        n.prototype.UpdateArrow = function() {
            DisplayUtil.setEnabled(this.btnLeft, this.list.scrollH > 0),
            DisplayUtil.setEnabled(this.btnRight, this.list.scrollH < 1020)
        },
        n.prototype.UpdatePage = function(t) {
            this.arrayCollection.replaceAll(this.arrData),
            t ? (this.list.scrollH -= 1020, --this.curPage) : (this.list.scrollH += 1020, ++this.curPage),
            this.lastSelectIndex = 5 * this.curPage - 5,
            this.list.validateNow(),
            this.UpdateArrow(),
            this.imgContent.source = "anniversarydrainage_tu" + (this.lastSelectIndex + 1) + "_png"
        },
        n.prototype.OnTapItem = function(t) {
            var e = t.itemRenderer;
            if ("selected" != e.currentState && "notOpen" != e.currentState && "end" != e.currentState) {
                if (null != this.lastSelectIndex) {
                    this.lastSelectIndex %= 5;
                    var n = this.list.getChildAt(this.lastSelectIndex);
                    n.currentState = "normal"
                }
                e.currentState = "selected",
                this.lastSelectIndex = t.itemIndex,
                this.imgContent.source = "anniversarydrainage_tu" + (this.lastSelectIndex + 1) + "_png",
                this.imgContent.touchEnabled = "NULL" != this.URLs[this.lastSelectIndex]
            }
        },
        n.prototype.JumpTo = function(t) {
            "NULL" != this.URLs[t] && URLNavigationManager.NavigateTo(URLNavigationEnum.Custom, this.URLs[t])
        },
        n
    } (BaseModule);
    t.AnniversaryDrainage = e,
    __reflect(e.prototype, "anniversaryDrainage.AnniversaryDrainage")
} (anniversaryDrainage || (anniversaryDrainage = {}));
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
anniversaryDrainage; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.skinName = AnniversaryDrainageItemSkin,
            e.cacheAsBitmap = !0,
            e
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this)
        },
        e.prototype.dataChanged = function() {
            t.prototype.dataChanged.call(this),
            this.imgTxt.source = "anniversarydrainage_txt" + (this.itemIndex + 1) + "_png",
            this.currentState = this.data.state
        },
        e
    } (BaseItemRenderer);
    t.AnniversaryDrainageItem = e,
    __reflect(e.prototype, "anniversaryDrainage.AnniversaryDrainageItem")
} (anniversaryDrainage || (anniversaryDrainage = {}));
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
generateEUI.paths["resource/eui_skins/AnniversarydrainageSkin.exml"] = window.AnniversaryDrainageSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["btnRight", "btnLeft", "btnClose", "grpCacheBitMap", "list", "scroller", "BG", "imgContent"],
        this.height = 614,
        this.width = 1092,
        this.elementsContent = [this.grpCacheBitMap_i(), this.scroller_i(), this._Group1_i()]
    }
    __extends(e, t);
    var n = e.prototype;
    return n.grpCacheBitMap_i = function() {
        var t = new eui.Group;
        return this.grpCacheBitMap = t,
        t.touchEnabled = !1,
        t.elementsContent = [this.btnRight_i(), this.btnLeft_i(), this.btnClose_i()],
        t
    },
    n.btnRight_i = function() {
        var t = new eui.Image;
        return this.btnRight = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "anniversarydrainage_btnright_png",
        t.x = 1060,
        t.y = 562,
        t
    },
    n.btnLeft_i = function() {
        var t = new eui.Image;
        return this.btnLeft = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "anniversarydrainage_btnleft_png",
        t.x = 0,
        t.y = 563,
        t
    },
    n.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "anniversarydrainage_btnclose_png",
        t.x = 1057,
        t.y = 22,
        t
    },
    n.scroller_i = function() {
        var t = new eui.Scroller;
        return this.scroller = t,
        t.height = 63,
        t.scaleX = 1,
        t.scaleY = 1,
        t.width = 1006,
        t.x = 41.999999999999986,
        t.y = 553,
        t.viewport = this.list_i(),
        t
    },
    n.list_i = function() {
        var t = new eui.List;
        return this.list = t,
        t.x = 43,
        t.y = 55,
        t.layout = this._HorizontalLayout1_i(),
        t
    },
    n._HorizontalLayout1_i = function() {
        var t = new eui.HorizontalLayout;
        return t.gap = 15,
        t
    },
    n._Group1_i = function() {
        var t = new eui.Group;
        return t.height = 605,
        t.touchEnabled = !1,
        t.width = 1092,
        t.elementsContent = [this.BG_i(), this.imgContent_i()],
        t
    },
    n.BG_i = function() {
        var t = new eui.Image;
        return this.BG = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "anniversarydrainage_bg_png",
        t.x = 86.99999999999997,
        t.y = 0,
        t
    },
    n.imgContent_i = function() {
        var t = new eui.Image;
        return this.imgContent = t,
        t.horizontalCenter = -2,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "anniversarydrainage_tu1_png",
        t.verticalCenter = -19.5,
        t.x = 160,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/item/AnniversaryDrainageItemSkin.exml"] = window.AnniversaryDrainageItemSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["btnBg", "imgTxt", "imgNotOpen", "grpItem"],
        this.height = 61,
        this.width = 189,
        this.elementsContent = [this.grpItem_i()],
        this.states = [new eui.State("notOpen", [new eui.SetProperty("btnBg", "visible", !0), new eui.SetProperty("imgTxt", "visible", !0)]), new eui.State("normal", [new eui.SetProperty("imgNotOpen", "visible", !1)]), new eui.State("selected", [new eui.SetProperty("btnBg", "source", "anniversarydrainage_btndown_png"), new eui.SetProperty("imgNotOpen", "visible", !1)]), new eui.State("end", [new eui.SetProperty("imgNotOpen", "source", "anniversarydrainage_end_png")])]
    }
    __extends(e, t);
    var n = e.prototype;
    return n.grpItem_i = function() {
        var t = new eui.Group;
        return this.grpItem = t,
        t.y = 0,
        t.elementsContent = [this.btnBg_i(), this.imgTxt_i(), this.imgNotOpen_i()],
        t
    },
    n.btnBg_i = function() {
        var t = new eui.Image;
        return this.btnBg = t,
        t.source = "anniversarydrainage_btnup_png",
        t.x = 0,
        t.y = 0,
        t
    },
    n.imgTxt_i = function() {
        var t = new eui.Image;
        return this.imgTxt = t,
        t.horizontalCenter = 0,
        t.source = "anniversarydrainage_txt1_png",
        t.verticalCenter = 0,
        t
    },
    n.imgNotOpen_i = function() {
        var t = new eui.Image;
        return this.imgNotOpen = t,
        t.source = "anniversarydrainage_jinqingqidai_png",
        t.visible = !0,
        t.x = 2,
        t.y = 1,
        t
    },
    e
} (eui.Skin);