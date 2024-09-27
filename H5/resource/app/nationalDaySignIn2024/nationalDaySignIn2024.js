var __reflect = this && this.__reflect ||
function(t, n, i) {
    t.__class__ = n,
    i ? i.push(n) : i = [n],
    t.__types__ = t.__types__ ? i.concat(t.__types__) : i
},
nationalDaySignIn2024; !
function(t) {
    var n = function() {
        function t() {}
        return t.Prize_Arr = [["1_1400152_1", "1_1723855_5000", "1_1400154_10"], ["1_1400152_1", "2_37_0", "1_1400154_10"], ["1_1400152_1", "1_1723855_5000", "1_1400154_10"], ["1_1400152_2", "1_1723855_5000", "1_1400154_10"], ["1_1400152_2", "1_1723855_5000", "1_1400154_10"], ["1_1400152_2", "1_1723855_5000", "1_1400154_10"], ["1_1400152_1", "1_1723855_5000", "1_1400154_10"]],
        t
    } ();
    t.NationalDatSignIn2024Const = n,
    __reflect(n.prototype, "nationalDaySignIn2024.NationalDatSignIn2024Const")
} (nationalDaySignIn2024 || (nationalDaySignIn2024 = {}));
var __reflect = this && this.__reflect ||
function(t, n, i) {
    t.__class__ = n,
    i ? i.push(n) : i = [n],
    t.__types__ = t.__types__ ? i.concat(t.__types__) : i
},
__extends = this && this.__extends ||
function(t, n) {
    function i() {
        this.constructor = t
    }
    for (var e in n) n.hasOwnProperty(e) && (t[e] = n[e]);
    i.prototype = n.prototype,
    t.prototype = new i
},
nationalDaySignIn2024; !
function(t) {
    var n = function(n) {
        function i() {
            var t = n.call(this) || this;
            return t.skinName = "Nationaldaysignin2024Skin",
            t
        }
        return __extends(i, n),
        i.prototype.childrenCreated = function() {
            var t = this;
            n.prototype.childrenCreated.call(this),
            ImageButtonUtil.add(this.btnClose, this.onClose, this),
            KTool.getMultiValue([201767, 121890],
            function(n) {
                t.isSignToday = 1 == n[0],
                t.sumDay = n[1],
                t.updateView(),
                t.isSignToday || ImageButtonUtil.add(t.btnGet,
                function() {
                    ImageButtonUtil.remove(t.btnGet),
                    t.isSignToday = !0,
                    StatLogger.log("20240927版本系统功能", "20240927国庆签到", "领取第" + (t.sumDay + 1) + "天签到奖励"),
                    SocketConnection.sendByQueue(41388, [29, t.sumDay + 1]),
                    t.sumDay += 1,
                    t.updateView()
                },
                t)
            })
        },
        i.prototype.updateView = function() {
            var n = SystemTimerManager.sysBJDate,
            i = n.getDate();
            if (this.isSignToday) if (7 == i) {
                this.btnGet.source = "nationalDaySignIn2024_btn3_png",
                this.tips.visible = !1;
                var e = this.sumDay - 1;
                this.sumDay >= 7 && (e = 6),
                this.showItems(t.NationalDatSignIn2024Const.Prize_Arr[e])
            } else this.btnGet.source = "nationalDaySignIn2024_btn2_png",
            this.tips.visible = !0,
            this.showItems(t.NationalDatSignIn2024Const.Prize_Arr[this.sumDay]);
            else this.btnGet.source = "nationalDaySignIn2024_btnGet_png",
            this.tips.visible = !1,
            this.showItems(t.NationalDatSignIn2024Const.Prize_Arr[this.sumDay])
        },
        i.prototype.showItems = function(t) {
            for (var n, i, e = function(e) {
                n = t[e];
                var _ = parseInt(n.split("_")[0]);
                i = parseInt(n.split("_")[1]);
                var o = parseInt(n.split("_")[2]);
                if (1 == _) {
                    a["item_" + e].source = ClientConfig.getItemIcon(i),
                    a["txt_" + e].text = "x" + o,
                    ImageButtonUtil.remove(a["item_" + e]);
                    var s = i;
                    ImageButtonUtil.add(a["item_" + e],
                    function() {
                        var t = {};
                        t.id = s,
                        tipsPop.TipsPop.openItemPop(t)
                    },
                    a)
                } else 2 == _ && (a["txt_" + e].text = "", a["item_" + e].source = ClientConfig.GetAvatarFrame(i), ImageButtonUtil.remove(a["item_" + e]), ImageButtonUtil.add(a["item_" + e],
                function() {
                    BubblerManager.getInstance().showText("H5专属头像框：星缘咖语")
                },
                a))
            },
            a = this, _ = 0; 3 > _; _++) e(_)
        },
        i
    } (BaseModule);
    t.NationalDaySignIn2024 = n,
    __reflect(n.prototype, "nationalDaySignIn2024.NationalDaySignIn2024")
} (nationalDaySignIn2024 || (nationalDaySignIn2024 = {}));
var __extends = this && this.__extends ||
function(t, n) {
    function i() {
        this.constructor = t
    }
    for (var e in n) n.hasOwnProperty(e) && (t[e] = n[e]);
    i.prototype = n.prototype,
    t.prototype = new i
};
window.generateEUI = window.generateEUI || {},
generateEUI.paths = generateEUI.paths || {},
generateEUI.styles = void 0,
generateEUI.skins = {},
generateEUI.paths["resource/eui_skins/Nationaldaysignin2024Skin.exml"] = window.Nationaldaysignin2024Skin = function(t) {
    function n() {
        t.call(this),
        this.skinParts = ["tips", "item_0", "txt_0", "item_1", "txt_1", "item_2", "txt_2", "btnGet", "btnClose"],
        this.height = 470,
        this.width = 945,
        this.elementsContent = [this._Image1_i(), this.tips_i(), this._Group1_i(), this._Group2_i(), this._Group3_i(), this.btnGet_i(), this.btnClose_i()]
    }
    __extends(n, t);
    var i = n.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.scaleX = .85,
        t.scaleY = .85,
        t.source = "nationalDaySignIn2024_bg_png",
        t.x = 52.41,
        t.y = 13.031,
        t
    },
    i.tips_i = function() {
        var t = new eui.Image;
        return this.tips = t,
        t.height = 39,
        t.source = "nationalDaySignIn2024_tips_png",
        t.width = 224,
        t.x = 359.366,
        t.y = 161.265,
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.x = 259.398,
        t.y = 190.916,
        t.elementsContent = [this._Image2_i(), this.item_0_i(), this.txt_0_i()],
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 185,
        t.scaleX = .85,
        t.scaleY = .85,
        t.source = "nationalDaySignIn2024_itemBg_1_png",
        t.width = 147,
        t.x = 0,
        t.y = 0,
        t
    },
    i.item_0_i = function() {
        var t = new eui.Image;
        return this.item_0 = t,
        t.height = 78,
        t.horizontalCenter = -4,
        t.source = "nationalDaySignIn2024_itemBg_1_png",
        t.verticalCenter = -9.5,
        t.width = 78,
        t
    },
    i.txt_0_i = function() {
        var t = new eui.Label;
        return this.txt_0 = t,
        t.fontFamily = "MFShangHei",
        t.italic = !0,
        t.size = 21,
        t.stroke = 2,
        t.strokeColor = 2298386,
        t.text = "x9",
        t.textAlign = "right",
        t.width = 93.374,
        t.x = 3.623,
        t.y = 95.495,
        t
    },
    i._Group2_i = function() {
        var t = new eui.Group;
        return t.x = 410.976,
        t.y = 190.916,
        t.elementsContent = [this._Image3_i(), this.item_1_i(), this.txt_1_i()],
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.height = 185,
        t.scaleX = .85,
        t.scaleY = .85,
        t.source = "nationalDaySignIn2024_itemBg_1_png",
        t.width = 147,
        t.x = 0,
        t.y = 0,
        t
    },
    i.item_1_i = function() {
        var t = new eui.Image;
        return this.item_1 = t,
        t.height = 78,
        t.horizontalCenter = -4,
        t.source = "nationalDaySignIn2024_itemBg_1_png",
        t.verticalCenter = -9.5,
        t.width = 78,
        t
    },
    i.txt_1_i = function() {
        var t = new eui.Label;
        return this.txt_1 = t,
        t.fontFamily = "MFShangHei",
        t.italic = !0,
        t.size = 21,
        t.stroke = 2,
        t.strokeColor = 2298386,
        t.text = "x9",
        t.textAlign = "right",
        t.width = 93.374,
        t.x = 3.623,
        t.y = 95.495,
        t
    },
    i._Group3_i = function() {
        var t = new eui.Group;
        return t.x = 563,
        t.y = 190.916,
        t.elementsContent = [this._Image4_i(), this.item_2_i(), this.txt_2_i()],
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.height = 185,
        t.scaleX = .85,
        t.scaleY = .85,
        t.source = "nationalDaySignIn2024_itemBg_1_png",
        t.width = 147,
        t.x = 0,
        t.y = 0,
        t
    },
    i.item_2_i = function() {
        var t = new eui.Image;
        return this.item_2 = t,
        t.height = 78,
        t.horizontalCenter = -4,
        t.source = "nationalDaySignIn2024_itemBg_1_png",
        t.verticalCenter = -9.5,
        t.width = 78,
        t
    },
    i.txt_2_i = function() {
        var t = new eui.Label;
        return this.txt_2 = t,
        t.fontFamily = "MFShangHei",
        t.italic = !0,
        t.size = 21,
        t.stroke = 2,
        t.strokeColor = 2298386,
        t.text = "x9",
        t.textAlign = "right",
        t.width = 93.374,
        t.x = 3.623,
        t.y = 95.495,
        t
    },
    i.btnGet_i = function() {
        var t = new eui.Image;
        return this.btnGet = t,
        t.height = 72,
        t.source = "nationalDaySignIn2024_btnGet_png",
        t.width = 245,
        t.x = 347.949,
        t.y = 382.033,
        t
    },
    i.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.height = 75,
        t.source = "nationalDaySignIn2024_btnClose_png",
        t.width = 74,
        t.x = 725.398,
        t.y = 77,
        t
    },
    n
} (eui.Skin);