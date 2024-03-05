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
newYearSignPanel; !
function(e) {
    var t = function(t) {
        function n() {
            var e = t.call(this) || this;
            return e.skinName = newYearSignPanelSkin,
            e
        }
        return __extends(n, t),
        n.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this),
            this.addEvent(),
            this.initView()
        },
        n.prototype.addEvent = function() {
            var e = this;
            ImageButtonUtil.add(this.btnClose,
            function() {
                e.onClose()
            },
            this)
        },
        n.prototype.initView = function() {
            var t = this;
            KTool.getMultiValue([121552, 121553],
            function(n) {
                t.list.itemRenderer = e.NewYearSignItem;
                for (var i = [], r = 1; 3 >= r; ++r) r <= n[0] ? 1 == KTool.getBit(n[1], r) ? i.push(3) : i.push(2) : i.push(1);
                t.list.dataProvider = new eui.ArrayCollection(i)
            })
        },
        n
    } (BaseModule);
    e.NewYearSignPanel = t,
    __reflect(t.prototype, "newYearSignPanel.NewYearSignPanel")
} (newYearSignPanel || (newYearSignPanel = {}));
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
newYearSignPanel; !
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.skinName = newYearSignPanelItemSkin,
            t
        }
        return __extends(t, e),
        t.prototype.dataChanged = function() {
            var t = this;
            switch (e.prototype.dataChanged.call(this), ImageButtonUtil.remove(this.grpItem), this.data) {
            case 1:
                this.currentState = "normal";
                var n = SystemTimerManager.sysBJDate,
                i = n.getMonth() + 1,
                r = n.getDate();
                12 == i && 29 == r ? ImageButtonUtil.add(this.grpItem,
                function() {
                    BubblerManager.getInstance().showText("12月30日正式开启签到，小赛尔不见不散！")
                },
                this) : ImageButtonUtil.add(this.grpItem,
                function() {
                    BubblerManager.getInstance().showText("登陆天数不足，无法领取奖励！")
                },
                this);
                break;
            case 2:
                this.currentState = "canGet",
                ImageButtonUtil.add(this.grpItem,
                function() {
                    SocketConnection.sendByQueue(41388, [56, t.itemIndex + 1],
                    function() {
                        t.currentState = "hasGot",
                        ImageButtonUtil.remove(t.grpItem)
                    })
                },
                this);
                break;
            case 3:
                this.currentState = "hasGot"
            }
            this.imgDay.source = "newyearsignpanel_" + (this.itemIndex + 1) + "_png"
        },
        t
    } (BaseItemRenderer);
    e.NewYearSignItem = t,
    __reflect(t.prototype, "newYearSignPanel.NewYearSignItem")
} (newYearSignPanel || (newYearSignPanel = {}));
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
generateEUI.paths["resource/eui_skins/item/NewYearSignPanelItemSkin.exml"] = window.newYearSignPanelItemSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["itemBg1", "imgDay", "imgReward", "check", "grpItem"],
        this.height = 192,
        this.width = 169,
        this.elementsContent = [this.grpItem_i()],
        this.states = [new eui.State("normal", [new eui.SetProperty("_Image1", "visible", !1), new eui.SetProperty("check", "visible", !1)]), new eui.State("canGet", [new eui.SetProperty("itemBg1", "source", "newyearsignpanel_itembg2_png"), new eui.SetProperty("itemBg1", "visible", !0), new eui.SetProperty("itemBg1", "x", 3), new eui.SetProperty("imgReward", "visible", !0), new eui.SetProperty("_Image1", "visible", !1), new eui.SetProperty("check", "visible", !1)]), new eui.State("hasGot", [])]
    }
    __extends(t, e);
    var n = t.prototype;
    return n.grpItem_i = function() {
        var e = new eui.Group;
        return this.grpItem = e,
        e.elementsContent = [this.itemBg1_i(), this.imgDay_i(), this.imgReward_i(), this._Image1_i(), this.check_i()],
        e
    },
    n.itemBg1_i = function() {
        var e = new eui.Image;
        return this.itemBg1 = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "newyearsignpanel_itembg1_png",
        e.x = 0,
        e.y = 0,
        e
    },
    n.imgDay_i = function() {
        var e = new eui.Image;
        return this.imgDay = e,
        e.horizontalCenter = -12,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "newyearsignpanel_1_png",
        e.y = 7,
        e
    },
    n.imgReward_i = function() {
        var e = new eui.Image;
        return this.imgReward = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "newyearsignpanel_imgreward_png",
        e.x = 20,
        e.y = 51.000000000000014,
        e
    },
    n._Image1_i = function() {
        var e = new eui.Image;
        return this._Image1 = e,
        e.height = 172,
        e.scale9Grid = new egret.Rectangle(10, 53, 1, 3),
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "newyearsignpanel_mask_png",
        e.visible = !0,
        e.width = 159,
        e.x = 3,
        e.y = 4,
        e
    },
    n.check_i = function() {
        var e = new eui.Image;
        return this.check = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "newyearsignpanel_check_png",
        e.x = 0,
        e.y = 55.000000000000014,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/NewYearSignPanelSkin.exml"] = window.newYearSignPanelSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["bg", "btnClose", "list"],
        this.height = 413,
        this.width = 786,
        this.elementsContent = [this.bg_i(), this.btnClose_i(), this._Scroller1_i()]
    }
    __extends(t, e);
    var n = t.prototype;
    return n.bg_i = function() {
        var e = new eui.Image;
        return this.bg = e,
        e.source = "newyearsignpanel_bg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    n.btnClose_i = function() {
        var e = new eui.Image;
        return this.btnClose = e,
        e.source = "newyearsignpanel_btnclose_png",
        e.x = 711,
        e.y = 82,
        e
    },
    n._Scroller1_i = function() {
        var e = new eui.Scroller;
        return e.height = 211.296,
        e.width = 537.702,
        e.x = 101,
        e.y = 148,
        e.viewport = this.list_i(),
        e
    },
    n.list_i = function() {
        var e = new eui.List;
        return this.list = e,
        e.layout = this._HorizontalLayout1_i(),
        e
    },
    n._HorizontalLayout1_i = function() {
        var e = new eui.HorizontalLayout;
        return e.gap = 6,
        e
    },
    t
} (eui.Skin);