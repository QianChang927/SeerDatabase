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
summerSign; !
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.items = [{
                id: 1400154,
                num: 20
            },
            {
                id: 1706927,
                num: 50
            },
            {
                id: 1706928,
                num: 50
            },
            {
                id: 300697,
                num: 1
            },
            {
                id: 1400153,
                num: 3
            },
            {
                id: 300065,
                num: 1
            },
            {
                id: 2400397,
                num: 100
            }],
            t.skinName = SummerSignSkin,
            t.cacheAsBitmap = !0,
            t
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            var t = this;
            e.prototype.childrenCreated.call(this),
            this._list.itemRenderer = i,
            ImageButtonUtil.add(this.btnInfo,
            function() {
                PetManager.showPetManualInfo(4656, 1)
            },
            this),
            ImageButtonUtil.add(this.close,
            function() {
                t.onClose()
            },
            this),
            EventManager.addEventListener(ModuleEvent.CLOSE_MODULE,
            function() {
                "summerSign" == ModuleManager.currModule.moduleName && (ToolBarManager.showMainPanel(), ToolBarManager.ShowToolBar())
            },
            this),
            EventManager.addEventListener("SummerSignItem_get", this.updateView, this),
            StatLogger.log("20230721版本系统功能", "暑假签到", "打开主面板"),
            this.updateView()
        },
        t.prototype.updateView = function() {
            var e = this;
            KTool.getMultiValue([121531, 201441],
            function(t) {
                for (var i = [], n = t[0], r = 1 == t[1], o = 0, s = 0; 28 > s; s++) {
                    var u = 0;
                    n > s ? u = 2 : n == s && (u = r ? 0 : 1);
                    var a = {
                        id: e.items[o].id,
                        num: 6 == o ? 50 * ((s + 1) / 7 - 1) + e.items[o].num: e.items[o].num,
                        state: u
                    };
                    o++,
                    o = gsap.utils.wrap(0, 7, o),
                    i.push(a)
                }
                e._list.dataProvider = new eui.ArrayCollection(i)
            })
        },
        t
    } (BaseModule);
    e.SummerSign = t,
    __reflect(t.prototype, "summerSign.SummerSign");
    var i = function(e) {
        function t() {
            return e.call(this) || this
        }
        return __extends(t, e),
        t.prototype.dataChanged = function() {
            var t = this;
            e.prototype.dataChanged.call(this),
            this.cacheAsBitmap = !0,
            this.data && (this.info = this.data, this.skinName = (this.itemIndex + 1) % 7 == 0 && 0 != this.itemIndex ? SummerSignItemBigSkin: SummerSignItemSkin, ImageButtonUtil.removeAll(this), ImageButtonUtil.add(this.icon,
            function() {
                if (1 == t.info.state) SocketConnection.sendByQueue(41388, [49, t.itemIndex + 1],
                function() {
                    StatLogger.log("20240719版本系统功能", "20240719暑假签到", "领取第" + (t.itemIndex + 1) + "天签到奖励"),
                    EventManager.dispatchEventWith("SummerSignItem_get")
                });
                else {
                    var e = {};
                    e.id = t.info.id,
                    tipsPop.TipsPop.openItemPop(e)
                }
            },
            this), this.updateView())
        },
        t.prototype.updateView = function() {
            this.day.text = "" + (this.itemIndex + 1),
            this.currentState = ["go", "get", "got"][this.info.state],
            this.icon.source = ClientConfig.getItemIcon(this.info.id),
            this.num.text = "x" + this.info.num
        },
        t
    } (BaseItemRenderer);
    e.SummerSignItem = i,
    __reflect(i.prototype, "summerSign.SummerSignItem")
} (summerSign || (summerSign = {}));
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
generateEUI.paths["resource/eui_skins/SummerSignItemBigSkin.exml"] = window.SummerSignItemBigSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["icon", "num", "day"],
        this.height = 96,
        this.width = 117,
        this.elementsContent = [this._Group1_i()],
        this.states = [new eui.State("go", [new eui.SetProperty("_Image1", "visible", !1), new eui.SetProperty("_Image3", "visible", !1)]), new eui.State("get", [new eui.SetProperty("_Image2", "visible", !1), new eui.SetProperty("_Image3", "visible", !1), new eui.SetProperty("day", "textColor", 10246682)]), new eui.State("got", [new eui.SetProperty("_Image1", "visible", !1), new eui.SetProperty("_Image2", "visible", !0)])]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Group1_i = function() {
        var e = new eui.Group;
        return e.height = 96,
        e.width = 117,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this._Image1_i(), this._Image2_i(), this.icon_i(), this.num_i(), this._Image3_i(), this.day_i()],
        e
    },
    i._Image1_i = function() {
        var e = new eui.Image;
        return this._Image1 = e,
        e.horizontalCenter = 0,
        e.source = "summer_sign_cur2_png",
        e.y = -4,
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return this._Image2 = e,
        e.source = "summer_sign_normal2_png",
        e.x = 5,
        e.y = 1,
        e
    },
    i.icon_i = function() {
        var e = new eui.Image;
        return this.icon = e,
        e.height = 43,
        e.horizontalCenter = 0,
        e.width = 43,
        e.y = 28,
        e
    },
    i.num_i = function() {
        var e = new eui.Label;
        return this.num = e,
        e.fontFamily = "MFShangHei",
        e.right = 20,
        e.size = 18,
        e.stroke = 1,
        e.strokeColor = 9660234,
        e.text = "x100",
        e.textColor = 16772985,
        e.y = 60,
        e
    },
    i._Image3_i = function() {
        var e = new eui.Image;
        return this._Image3 = e,
        e.horizontalCenter = .5,
        e.source = "summer_sign_got2_png",
        e.y = 12,
        e
    },
    i.day_i = function() {
        var e = new eui.Label;
        return this.day = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "14",
        e.textAlign = "center",
        e.textColor = 16776831,
        e.width = 24,
        e.x = 8,
        e.y = 6,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/SummerSignItemSkin.exml"] = window.SummerSignItemSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["icon", "num", "day"],
        this.height = 96,
        this.width = 117,
        this.elementsContent = [this._Group1_i()],
        this.states = [new eui.State("go", [new eui.SetProperty("_Image2", "visible", !1), new eui.SetProperty("_Image3", "visible", !1)]), new eui.State("get", [new eui.SetProperty("_Image3", "visible", !1)]), new eui.State("got", [new eui.SetProperty("_Image1", "visible", !0), new eui.SetProperty("_Image2", "visible", !1)])]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Group1_i = function() {
        var e = new eui.Group;
        return e.x = 0,
        e.y = 4,
        e.elementsContent = [this._Image1_i(), this._Image2_i(), this.icon_i(), this.num_i(), this.day_i(), this._Image3_i()],
        e
    },
    i._Image1_i = function() {
        var e = new eui.Image;
        return this._Image1 = e,
        e.horizontalCenter = 0,
        e.source = "summer_sign_normal_png",
        e.visible = !0,
        e.y = 2,
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return this._Image2 = e,
        e.horizontalCenter = 0,
        e.source = "summer_sign_cur_png",
        e.y = 0,
        e
    },
    i.icon_i = function() {
        var e = new eui.Image;
        return this.icon = e,
        e.height = 43,
        e.horizontalCenter = 0,
        e.width = 43,
        e.y = 24,
        e
    },
    i.num_i = function() {
        var e = new eui.Label;
        return this.num = e,
        e.fontFamily = "MFShangHei",
        e.right = 18,
        e.size = 18,
        e.stroke = 1,
        e.strokeColor = 6901505,
        e.text = "x20",
        e.textColor = 16772985,
        e.y = 56,
        e
    },
    i.day_i = function() {
        var e = new eui.Label;
        return this.day = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.stroke = 1,
        e.strokeColor = 16776661,
        e.text = "18",
        e.textAlign = "center",
        e.textColor = 10049817,
        e.width = 22,
        e.x = 10,
        e.y = 2,
        e
    },
    i._Image3_i = function() {
        var e = new eui.Image;
        return this._Image3 = e,
        e.horizontalCenter = 0,
        e.source = "summer_sign_got_png",
        e.y = 8,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/SummerSignSkin.exml"] = window.SummerSignSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["bg", "btnInfo", "close", "_list"],
        this.height = 640,
        this.width = 1110,
        this.elementsContent = [this.bg_i(), this.btnInfo_i(), this.close_i(), this._Scroller1_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i.bg_i = function() {
        var e = new eui.Image;
        return this.bg = e,
        e.source = "summer_sign_bg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.btnInfo_i = function() {
        var e = new eui.Image;
        return this.btnInfo = e,
        e.source = "summer_sign_btninfo_png",
        e.x = 81,
        e.y = 423,
        e
    },
    i.close_i = function() {
        var e = new eui.Image;
        return this.close = e,
        e.source = "summer_sign_close_png",
        e.x = 980,
        e.y = 111,
        e
    },
    i._Scroller1_i = function() {
        var e = new eui.Scroller;
        return e.height = 365,
        e.scrollPolicyH = "off",
        e.scrollPolicyV = "off",
        e.width = 647,
        e.x = 348,
        e.y = 165,
        e.viewport = this._list_i(),
        e
    },
    i._list_i = function() {
        var e = new eui.List;
        return this._list = e,
        e.layout = this._TileLayout1_i(),
        e
    },
    i._TileLayout1_i = function() {
        var e = new eui.TileLayout;
        return e.horizontalGap = -29,
        e.requestedColumnCount = 7,
        e.requestedRowCount = 4,
        e.verticalGap = -3,
        e
    },
    t
} (eui.Skin);