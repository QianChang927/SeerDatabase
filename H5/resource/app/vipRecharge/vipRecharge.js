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
vipRecharge; !
function(e) {
    var t = function(t) {
        function i() {
            return null !== t && t.apply(this, arguments) || this
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            var t = this;
            this.service.openPop(new e.VipRechargePop, !1, null,
            function() {
                egret.setTimeout(t.onClose, t, 200)
            },
            this, this)
        },
        i
    } (BasicMultPanelModule);
    e.VipRecharge = t,
    __reflect(t.prototype, "vipRecharge.VipRecharge")
} (vipRecharge || (vipRecharge = {}));
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
vipRecharge; !
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.skinName = "VipRechargeSkin",
            t
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            var e = this;
            this.txtMonth.text = VipController.numCurYearMonth + "个月",
            this.onSelect(1),
            ImageButtonUtil.add(this.btnClose, this.hide, this);
            for (var t = function(t) {
                ImageButtonUtil.add(i["imgItem" + t],
                function() {
                    e.onSelect(t)
                },
                i, !1, !1)
            },
            i = this, n = 1; 4 >= n; n++) t(n);
            ImageButtonUtil.add(this.btnRecharge,
            function() {
                PayManager.buyDiamond(e.curIndex)
            },
            this),
            EventManager.addEventListener(VipController.EVENT_VIP_INFO_UPDATE,
            function() {
                VipController.updateVipData(function() {
                    e.txtMonth.text = VipController.numCurYearMonth + "个月"
                })
            },
            this),
            EventManager.addEventListener(SocketEvent.SOCKETRECONNECT,
            function() {
                VipController.updateVipData(function() {
                    e.txtMonth.text = VipController.numCurYearMonth + "个月"
                })
            },
            this)
        },
        t.prototype.onSelect = function(e) {
            this.curIndex != e && (this.curIndex = e, this.imgSelect.x = this["imgItem" + e].x - 6, this.imgSelect.y = this["imgItem" + e].y - 5)
        },
        t.prototype.destroy = function() {
            ImageButtonUtil.removeAll(this),
            EventManager.removeAll(this),
            e.prototype.destroy.call(this)
        },
        t
    } (PopView);
    e.VipRechargePop = t,
    __reflect(t.prototype, "vipRecharge.VipRechargePop")
} (vipRecharge || (vipRecharge = {}));
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
generateEUI.paths["resource/eui_skins/VipRechargeSkin.exml"] = window.VipRechargeSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["btnRecharge", "imgItem1", "imgItem2", "imgItem3", "imgItem4", "imgSelect", "imgRecommend", "btnClose", "txtMonth"],
        this.height = 300,
        this.width = 490,
        this.elementsContent = [this._Image1_i(), this.btnRecharge_i(), this.imgItem1_i(), this.imgItem2_i(), this.imgItem3_i(), this.imgItem4_i(), this.imgSelect_i(), this.imgRecommend_i(), this.btnClose_i(), this.txtMonth_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "vip_recharge_bg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.btnRecharge_i = function() {
        var e = new eui.Image;
        return this.btnRecharge = e,
        e.source = "vip_recharge_btnrecharge_png",
        e.x = 171,
        e.y = 242,
        e
    },
    i.imgItem1_i = function() {
        var e = new eui.Image;
        return this.imgItem1 = e,
        e.source = "vip_recharge_imgitem1_png",
        e.x = 23,
        e.y = 76,
        e
    },
    i.imgItem2_i = function() {
        var e = new eui.Image;
        return this.imgItem2 = e,
        e.source = "vip_recharge_imgitem2_png",
        e.x = 133,
        e.y = 76,
        e
    },
    i.imgItem3_i = function() {
        var e = new eui.Image;
        return this.imgItem3 = e,
        e.source = "vip_recharge_imgitem3_png",
        e.x = 242,
        e.y = 76,
        e
    },
    i.imgItem4_i = function() {
        var e = new eui.Image;
        return this.imgItem4 = e,
        e.source = "vip_recharge_imgitem4_png",
        e.x = 352,
        e.y = 76,
        e
    },
    i.imgSelect_i = function() {
        var e = new eui.Image;
        return this.imgSelect = e,
        e.source = "vip_recharge_imgselect_png",
        e.visible = !0,
        e.x = 17,
        e.y = 71,
        e
    },
    i.imgRecommend_i = function() {
        var e = new eui.Image;
        return this.imgRecommend = e,
        e.source = "vip_recharge_imgrecommend_png",
        e.touchEnabled = !1,
        e.visible = !0,
        e.x = 348,
        e.y = 71,
        e
    },
    i.btnClose_i = function() {
        var e = new eui.Image;
        return this.btnClose = e,
        e.source = "vip_recharge_btnclose_png",
        e.x = 456,
        e.y = 3,
        e
    },
    i.txtMonth_i = function() {
        var e = new eui.Label;
        return this.txtMonth = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.textColor = 16514895,
        e.x = 263,
        e.y = 41,
        e
    },
    t
} (eui.Skin);