var __reflect = this && this.__reflect ||
function(t, e, i) {
    t.__class__ = e,
    i ? i.push(e) : i = [e],
    t.__types__ = t.__types__ ? i.concat(t.__types__) : i
},
BubblerManager = function() {
    function t() {
        this._bubblerText = null,
        this._bubblerText = new BubblerText
    }
    return t.getInstance = function() {
        return this._instance || (this._instance = new t),
        this._instance
    },
    t.prototype.registerLayer = function(t) {
        this._layer = t
    },
    t.prototype.showText = function(t, e, i) {
        void 0 === e && (e = !1),
        void 0 === i && (i = 16777215),
        this._layer || this.registerLayer(LevelManager.topLevel);
        var n = this._bubblerText;
        egret.Tween.removeTweens(n),
        this._completeItem(n),
        n.setText(t, e, i),
        n.addEventListener(BubblerText.EVENT_UPDATE_SIZE, this._onItemUpdateSizeComplete, this),
        this._layer.addChild(n)
    },
    t.prototype._onItemUpdateSizeComplete = function(t) {
        var e = t.target;
        e.removeEventListener(BubblerText.EVENT_UPDATE_SIZE, this._onItemUpdateSizeComplete, this),
        e.x = egret.lifecycle.stage.stageWidth / 2,
        e.y = egret.lifecycle.stage.stageHeight / 2 - 90;
        var i = e.y - 50;
        e.scaleX = e.scaleY = .6,
        e.alpha = 1,
        egret.Tween.get(e).to({
            scaleX: 1,
            scaleY: 1,
            y: i
        },
        350, egret.Ease.backOut).wait(500).to({
            alpha: .1
        },
        900, egret.Ease.backIn).call(this._completeItem, this, [e])
    },
    t.prototype._completeItem = function(t) {
        t.parent && t.parent.removeChild(t)
    },
    t
} ();
__reflect(BubblerManager.prototype, "BubblerManager");
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
BubblerText = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e._addStageFlag = !1,
        e._parseSkinFlag = !1,
        e.addEventListener(egret.Event.ADDED_TO_STAGE, e._onAddToStage, e),
        e.addEventListener(egret.Event.REMOVED_FROM_STAGE, e._onRemoveStage, e),
        e.addEventListener(eui.UIEvent.COMPLETE, e._onCompleteSkin, e),
        e.skinName = BubblerTextSkin,
        e
    }
    return __extends(e, t),
    e.prototype._onAddToStage = function(t) {
        this._addStageFlag = !0,
        this._initlized()
    },
    e.prototype._onCompleteSkin = function(t) {
        this._parseSkinFlag = !0,
        this._initlized()
    },
    e.prototype._onRemoveStage = function(t) {
        this._addStageFlag = !1
    },
    e.prototype._initlized = function() {
        this._addStageFlag && this._parseSkinFlag && this._setLaber()
    },
    e.prototype.childrenCreated = function() {
        t.prototype.childrenCreated.call(this)
    },
    e.prototype.setText = function(t, e, i) {
        this._txt = t,
        this._isHtmlFlag = e,
        this._txtColor = i,
        this._setLaber()
    },
    e.prototype._setLaber = function() {
        this.txt_desc.textColor = this._txtColor,
        this._isHtmlFlag ? this.txt_desc.textFlow = (new egret.HtmlTextParser).parse(this._txt) : this.txt_desc.text = this._txt,
        this.txt_desc.validateNow(),
        this._updateSize()
    },
    e.prototype._updateSize = function() {
        var t = this.txt_desc.textWidth;
        this.txt_desc.textHeight;
        this.bg.width = t + 200,
        this.bg.height = 50,
        this.width = this.bg.width,
        this.height = this.bg.height,
        this.anchorOffsetX = this.width / 2,
        this.anchorOffsetY = this.height / 2,
        this.txt_desc.validateNow(),
        this.validateNow(),
        this.dispatchEventWith(e.EVENT_UPDATE_SIZE)
    },
    e.prototype.resetView = function() {
        egret.Tween.removeTweens(this),
        this.parent && this.parent.removeChild(this),
        this.alpha = 1
    },
    e.prototype.destroy = function() {
        this.removeEventListener(egret.Event.ADDED_TO_STAGE, this._onAddToStage, this),
        this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this._onRemoveStage, this),
        this.removeEventListener(eui.UIEvent.COMPLETE, this._onCompleteSkin, this),
        this.parent && this.parent.removeChild(this)
    },
    e.EVENT_UPDATE_SIZE = "event_update_size",
    e
} (eui.Component);
__reflect(BubblerText.prototype, "BubblerText");
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
generateEUI.paths["resource/eui_skins/BubblerTextSkin.exml"] = window.BubblerTextSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "txt_desc"],
        this.height = 35,
        this.width = 400,
        this.elementsContent = [this.bg_i(), this.txt_desc_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.height = 60,
        t.scale9Grid = new egret.Rectangle(126, 12, 125, 12),
        t.source = "common_bubble_bg_png",
        t.visible = !0,
        t.width = 400,
        t.x = 0,
        t.y = 0,
        t
    },
    i.txt_desc_i = function() {
        var t = new eui.Label;
        return this.txt_desc = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = 0,
        t.size = 20,
        t.text = "a",
        t.textColor = 16777215,
        t.y = 9,
        t
    },
    e
} (eui.Skin);