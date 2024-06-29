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
guideJimiOutPut; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.skinName = GuideJimiOutPutSkin,
            e
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            var e = this;
            t.prototype.childrenCreated.call(this);
            var i = SpineUtil.createAnimate("jimikeyin");
            i.x = .5 * this.width,
            i.y = .5 * this.height,
            SpineUtil.play(i, "appear", this,
            function() {
                i.play("Prefew", 0),
                e.addEventListener(egret.TouchEvent.TOUCH_TAP, e.onClose, e),
                EventManager.addEventListener(ModuleManager.TOUCH_MODULE_MASK, e.onClose, e)
            },
            this, 1)
        },
        e.prototype.destroy = function() {
            t.prototype.destroy.call(this),
            EventManager.dispatchEventWith(AwardEvent.CLOSE_AWARD_DIALOG),
            EventManager.removeEventListener(ModuleManager.TOUCH_MODULE_MASK, this.onClose, this)
        },
        e
    } (BaseModule);
    t.GuideJimiOutPut = e,
    __reflect(e.prototype, "guideJimiOutPut.GuideJimiOutPut")
} (guideJimiOutPut || (guideJimiOutPut = {}));
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
generateEUI.paths["resource/eui_skins/GuideJimiOutPutSkin.exml"] = window.GuideJimiOutPutSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = [],
        this.height = 622,
        this.width = 890
    }
    __extends(e, t);
    e.prototype;
    return e
} (eui.Skin);