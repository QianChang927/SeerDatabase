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
            this, !1),
            ImageButtonUtil.add(this.btnGet,
            function() {
                SocketConnection.sendByQueue(45900, [5, 1],
                function() {
                    EventManager.dispatchEventWith("NewYearSignPanel.Update")
                })
            },
            this),
            EventManager.addEventListener("NewYearSignPanel.Update",
            function() {
                e.initView()
            },
            this)
        },
        n.prototype.initView = function() {
            var t = this;
            KTool.getMultiValue([140007],
            function(n) {
                t.list.itemRenderer = e.NewYearSimpleItem;
                for (var i = [], a = 1; 3 >= a; ++a) {
                    var r = "",
                    s = 0;
                    switch (a) {
                    case 1:
                        r = ClientConfig.GetAvatarHead(43),
                        s = 43;
                        break;
                    case 2:
                        r = ClientConfig.getItemIcon(1725705),
                        s = 1725705;
                        break;
                    case 3:
                        r = ClientConfig.getItemIcon(1723117),
                        s = 1723117
                    }
                    var o = 0 == n[0] ? "normal": "hasGot",
                    c = {
                        source: r,
                        state: o,
                        id: s
                    };
                    i.push(c),
                    1 == n[0] && DisplayUtil.setEnabled(t.btnGet, !1, !0)
                }
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
                a = n.getDate();
                12 == i && 29 == a ? ImageButtonUtil.add(this.grpItem,
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
            return t.skinName = "NewYearItemSkin",
            t
        }
        return __extends(t, e),
        t.prototype.dataChanged = function() {
            var t = this;
            e.prototype.dataChanged.call(this),
            ImageButtonUtil.remove(this.grpItem),
            "normal" == this.data.state ? (ImageButtonUtil.add(this.grpItem,
            function() {
                if (43 == t.data.id) BubblerManager.getInstance().showText("“喜迎2025”头像");
                else {
                    var e = {
                        id: t.data.id
                    };
                    tipsPop.TipsPop.openItemPop(e)
                }
            },
            this), this.check.visible = !1) : this.check.visible = !0;
            var n = this.data.source;
            this.imgReward.source = n
        },
        t
    } (BaseItemRenderer);
    e.NewYearSimpleItem = t,
    __reflect(t.prototype, "newYearSignPanel.NewYearSimpleItem")
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
generateEUI.paths["resource/eui_skins/item/NewYearItemSkin.exml"] = window.NewYearItemSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["imgReward", "check", "grpItem"],
        this.height = 125,
        this.width = 147,
        this.elementsContent = [this.grpItem_i()],
        this.states = [new eui.State("normal", [new eui.SetProperty("imgReward", "source", "fangkuai_png"), new eui.SetProperty("_Image2", "visible", !0), new eui.SetProperty("_Image3", "visible", !0)]), new eui.State("canGet", [new eui.SetProperty("_Image1", "source", "newyearsignpanel_itembg2_png"), new eui.SetProperty("_Image1", "visible", !0), new eui.SetProperty("_Image1", "x", 3), new eui.SetProperty("imgReward", "visible", !0), new eui.SetProperty("_Image2", "visible", !1), new eui.SetProperty("_Image3", "visible", !1)]), new eui.State("hasGot", [])]
    }
    __extends(t, e);
    var n = t.prototype;
    return n.grpItem_i = function() {
        var e = new eui.Group;
        return this.grpItem = e,
        e.height = 120,
        e.scaleX = .88,
        e.scaleY = .88,
        e.width = 120,
        e.elementsContent = [this._Image1_i(), this.imgReward_i(), this.check_i()],
        e
    },
    n._Image1_i = function() {
        var e = new eui.Image;
        return this._Image1 = e,
        e.height = 120,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "fangkuai_png",
        e.width = 120,
        e.x = 0,
        e.y = 0,
        e
    },
    n.imgReward_i = function() {
        var e = new eui.Image;
        return this.imgReward = e,
        e.height = 95.828,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "newyearsignpanel_imgreward_png",
        e.width = 95.828,
        e.x = 12.784,
        e.y = 11.569,
        e
    },
    n.check_i = function() {
        var e = new eui.Group;
        return this.check = e,
        e.height = 120.142,
        e.visible = !0,
        e.width = 119.358,
        e.x = .04,
        e.y = -1.33,
        e.elementsContent = [this._Image2_i(), this._Image3_i()],
        e
    },
    n._Image2_i = function() {
        var e = new eui.Image;
        return this._Image2 = e,
        e.height = 121.036,
        e.scale9Grid = new egret.Rectangle(10, 53, 1, 3),
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "common_full_black_mask_png",
        e.visible = !0,
        e.width = 119.407,
        e.x = 0,
        e.y = 0,
        e
    },
    n._Image3_i = function() {
        var e = new eui.Image;
        return this._Image3 = e,
        e.height = 86.373,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "newyearsignpanel_check_png",
        e.width = 88.731,
        e.x = 17.456,
        e.y = 18.84,
        e
    },
    t
} (eui.Skin),
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
        this.skinParts = ["bg", "btnClose", "list", "btnGet"],
        this.height = 488.915,
        this.width = 912.984,
        this.elementsContent = [this.bg_i(), this.btnClose_i(), this._Scroller1_i(), this.btnGet_i()]
    }
    __extends(t, e);
    var n = t.prototype;
    return n.bg_i = function() {
        var e = new eui.Image;
        return this.bg = e,
        e.source = "newyearsignpanel_bg_png",
        e.visible = !0,
        e.x = 0,
        e.y = 0,
        e
    },
    n.btnClose_i = function() {
        var e = new eui.Image;
        return this.btnClose = e,
        e.height = 40,
        e.source = "newyearsignpanel_btnclose_png",
        e.width = 40,
        e.x = 821.431,
        e.y = 117.769,
        e
    },
    n._Scroller1_i = function() {
        var e = new eui.Scroller;
        return e.height = 142.409,
        e.width = 454.886,
        e.x = 300.335,
        e.y = 178.339,
        e.viewport = this.list_i(),
        e
    },
    n.list_i = function() {
        var e = new eui.List;
        return this.list = e,
        e.height = 181.296,
        e.x = 110.421,
        e.y = -13.803,
        e.layout = this._HorizontalLayout1_i(),
        e
    },
    n._HorizontalLayout1_i = function() {
        var e = new eui.HorizontalLayout;
        return e.gap = 6,
        e
    },
    n.btnGet_i = function() {
        var e = new eui.Image;
        return this.btnGet = e,
        e.source = "anniu_png",
        e.x = 400.211,
        e.y = 310.437,
        e
    },
    t
} (eui.Skin);