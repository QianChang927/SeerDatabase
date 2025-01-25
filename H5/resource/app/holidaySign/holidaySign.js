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
holidaySign; !
function(t) {
    var e = function(e) {
        function i() {
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
                id: 2400446,
                num: 100
            }],
            t.skinName = WinterSignSkin,
            t.cacheAsBitmap = !0,
            t
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.list.itemRenderer = t.HolidaySignItem,
            this.addEvent(),
            this.updateView()
        },
        i.prototype.addEvent = function() {
            var t = this;
            ImageButtonUtil.add(this.btnInfo,
            function() {
                PetManager.showPetManualInfo(4715, 1)
            },
            this),
            ImageButtonUtil.add(this.btnClose,
            function() {
                t.onClose()
            },
            this),
            EventManager.addEventListener("WinterSignItem_get", this.updateView, this),
            EventManager.addEventListener(ModuleEvent.CLOSE_MODULE,
            function() {
                ModuleManager.currModule == t && (ToolBarManager.showMainPanel(), ToolBarManager.ShowToolBar())
            },
            this)
        },
        i.prototype.updateView = function() {
            var t = this;
            KTool.getMultiValue([121161, 201347],
            function(e) {
                for (var i = [], n = e[0], o = 1 == e[1], s = 0, r = 0; 28 > r; r++) {
                    var a = 0;
                    n > r ? a = 2 : n == r && (a = o ? 0 : 1);
                    var u = {
                        id: t.items[s].id,
                        num: 6 == s ? 50 * ((r + 1) / 7 - 1) + t.items[s].num: t.items[s].num,
                        state: a
                    };
                    s++,
                    s = gsap.utils.wrap(0, 7, s),
                    i.push(u)
                }
                t.list.dataProvider = new eui.ArrayCollection(i)
            })
        },
        i
    } (BaseModule);
    t.HolidaySign = e,
    __reflect(e.prototype, "holidaySign.HolidaySign")
} (holidaySign || (holidaySign = {}));
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
holidaySign; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.cacheAsBitmap = !0,
            e
        }
        return __extends(e, t),
        e.prototype.dataChanged = function() {
            var e = this;
            t.prototype.dataChanged.call(this),
            this.data && (this.info = this.data, this.skinName = (this.itemIndex + 1) % 7 == 0 && 0 != this.itemIndex ? WinterSignItemBigSkin: WinterSignItemSkin, ImageButtonUtil.removeAll(this), 1 == this.info.state ? ImageButtonUtil.add(this.day,
            function() {
                SocketConnection.sendByQueue(41388, [33, e.itemIndex + 1],
                function() {
                    EventManager.dispatchEventWith("WinterSignItem_get")
                })
            },
            this) : ImageButtonUtil.add(this.imgIcon,
            function() {
                var t = {};
                t.id = e.info.id,
                tipsPop.TipsPop.openItemPop(t)
            },
            this), this.updateView())
        },
        e.prototype.updateView = function() {
            this.itemIndex + 1 < 10 ? this.txtDay.text = "" + (this.itemIndex + 1) : this.txtDay.text = "" + (this.itemIndex + 1),
            this.currentState = ["notGet", "canGet", "hasGot"][this.info.state],
            this.imgIcon.source = ClientConfig.getItemIcon(this.info.id),
            this.txtNum.text = "x" + this.info.num
        },
        e
    } (BaseItemRenderer);
    t.HolidaySignItem = e,
    __reflect(e.prototype, "holidaySign.HolidaySignItem")
} (holidaySign || (holidaySign = {}));
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
generateEUI.paths["resource/eui_skins/WinterSignItemBigSkin.exml"] = window.WinterSignItemBigSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["imgItemBg", "imgCanGet", "imgIcon", "txtNum", "txtDay", "hasGot", "day"],
        this.height = 90,
        this.width = 122,
        this.elementsContent = [this.day_i()],
        this.states = [new eui.State("notGet", [new eui.SetProperty("imgCanGet", "visible", !1), new eui.SetProperty("imgIcon", "visible", !0), new eui.SetProperty("txtDay", "visible", !0), new eui.SetProperty("hasGot", "visible", !1)]), new eui.State("canGet", [new eui.SetProperty("imgItemBg", "visible", !1), new eui.SetProperty("imgCanGet", "visible", !0), new eui.SetProperty("hasGot", "visible", !1)]), new eui.State("hasGot", [new eui.SetProperty("imgItemBg", "visible", !0), new eui.SetProperty("imgCanGet", "visible", !1), new eui.SetProperty("hasGot", "visible", !0)])]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.day_i = function() {
        var t = new eui.Group;
        return this.day = t,
        t.y = -6.242,
        t.elementsContent = [this.imgItemBg_i(), this.imgCanGet_i(), this.imgIcon_i(), this.txtNum_i(), this.txtDay_i(), this.hasGot_i()],
        t
    },
    i.imgItemBg_i = function() {
        var t = new eui.Image;
        return this.imgItemBg = t,
        t.source = "wintersign_imgitembg2_png",
        t.x = 7.74,
        t.y = 3,
        t
    },
    i.imgCanGet_i = function() {
        var t = new eui.Image;
        return this.imgCanGet = t,
        t.source = "wintersign_imgcanget2_png",
        t.visible = !0,
        t.x = 0,
        t.y = -1.975,
        t
    },
    i.imgIcon_i = function() {
        var t = new eui.Image;
        return this.imgIcon = t,
        t.height = 50,
        t.width = 50,
        t.x = 37.4,
        t.y = 26,
        t
    },
    i.txtNum_i = function() {
        var t = new eui.Label;
        return this.txtNum = t,
        t.size = 18,
        t.stroke = 1,
        t.strokeColor = 1794748,
        t.text = "×20",
        t.textAlign = "right",
        t.textColor = 15269375,
        t.width = 42.364,
        t.x = 48.887,
        t.y = 65.073,
        t
    },
    i.txtDay_i = function() {
        var t = new eui.Label;
        return this.txtDay = t,
        t.fontFamily = "MFShangHei",
        t.size = 20,
        t.stroke = 1,
        t.strokeColor = 1794748,
        t.text = "07",
        t.textAlign = "left",
        t.textColor = 15269375,
        t.x = 12.959,
        t.y = 7.726,
        t
    },
    i.hasGot_i = function() {
        var t = new eui.Image;
        return this.hasGot = t,
        t.source = "wintersign_hasgot2_png",
        t.visible = !0,
        t.x = 16.644,
        t.y = 13.612,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/WinterSignItemSkin.exml"] = window.WinterSignItemSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["imgItemBg", "imgCanGet", "imgIcon", "txtNum", "txtDay", "hasGot", "day"],
        this.height = 90,
        this.width = 145,
        this.elementsContent = [this.day_i()],
        this.states = [new eui.State("notGet", [new eui.SetProperty("imgCanGet", "visible", !1), new eui.SetProperty("hasGot", "visible", !1)]), new eui.State("canGet", [new eui.SetProperty("imgItemBg", "visible", !1), new eui.SetProperty("hasGot", "visible", !1)]), new eui.State("hasGot", [new eui.SetProperty("imgItemBg", "visible", !0), new eui.SetProperty("imgCanGet", "visible", !1), new eui.SetProperty("imgIcon", "visible", !0)])]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.day_i = function() {
        var t = new eui.Group;
        return this.day = t,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this.imgItemBg_i(), this.imgCanGet_i(), this.imgIcon_i(), this.txtNum_i(), this.txtDay_i(), this.hasGot_i()],
        t
    },
    i.imgItemBg_i = function() {
        var t = new eui.Image;
        return this.imgItemBg = t,
        t.source = "wintersign_imgitembg1_png",
        t.x = 9.946,
        t.y = 3,
        t
    },
    i.imgCanGet_i = function() {
        var t = new eui.Image;
        return this.imgCanGet = t,
        t.source = "wintersign_imgcanget_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.imgIcon_i = function() {
        var t = new eui.Image;
        return this.imgIcon = t,
        t.height = 44,
        t.width = 43,
        t.x = 28.439,
        t.y = 23.324,
        t
    },
    i.txtNum_i = function() {
        var t = new eui.Label;
        return this.txtNum = t,
        t.right = 18,
        t.size = 18,
        t.stroke = 1,
        t.strokeColor = 1794748,
        t.text = "×20",
        t.textAlign = "right",
        t.textColor = 15269375,
        t.y = 59.316,
        t
    },
    i.txtDay_i = function() {
        var t = new eui.Label;
        return this.txtDay = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "01",
        t.textAlign = "left",
        t.textColor = 3099521,
        t.x = 11,
        t.y = 1.898,
        t
    },
    i.hasGot_i = function() {
        var t = new eui.Image;
        return this.hasGot = t,
        t.source = "wintersign_hasgot1_png",
        t.visible = !0,
        t.x = 13.866,
        t.y = 8.432,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/WinterSignSkin.exml"] = window.WinterSignSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["imgBg", "btnInfo", "btnClose", "list"],
        this.height = 600,
        this.width = 1132,
        this.elementsContent = [this.imgBg_i(), this.btnInfo_i(), this.btnClose_i(), this._Scroller1_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.imgBg_i = function() {
        var t = new eui.Image;
        return this.imgBg = t,
        t.source = "wintersign_imgbg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.btnInfo_i = function() {
        var t = new eui.Image;
        return this.btnInfo = t,
        t.source = "wintersign_btninfo_png",
        t.x = 77,
        t.y = 400,
        t
    },
    i.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.source = "wintersign_btnclose_png",
        t.x = 978.378,
        t.y = 89.969,
        t
    },
    i._Scroller1_i = function() {
        var t = new eui.Scroller;
        return t.height = 361,
        t.width = 704.095,
        t.x = 356.73,
        t.y = 139.77,
        t.viewport = this.list_i(),
        t
    },
    i.list_i = function() {
        var t = new eui.List;
        return this.list = t,
        t.layout = this._TileLayout1_i(),
        t
    },
    i._TileLayout1_i = function() {
        var t = new eui.TileLayout;
        return t.horizontalGap = -59,
        t.requestedColumnCount = 7,
        t.verticalGap = 0,
        t
    },
    e
} (eui.Skin);