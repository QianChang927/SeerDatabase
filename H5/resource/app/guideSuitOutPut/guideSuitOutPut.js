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
guideSuitOutPut; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.skinName = GuideSuitOutPutSkin,
            e
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            var t = this,
            e = SpineUtil.createAnimate("huodetaozhuang");
            e.x = .5 * this.width,
            e.y = .5 * this.height,
            SpineUtil.play(e, "taozhuang_appear", this,
            function() {
                t.addEventListener(egret.TouchEvent.TOUCH_TAP, t.onClose, t),
                EventManager.addEventListener(ModuleManager.TOUCH_MODULE_MASK, t.onClose, t)
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
    t.GuideSuitOutPut = e,
    __reflect(e.prototype, "guideSuitOutPut.GuideSuitOutPut")
} (guideSuitOutPut || (guideSuitOutPut = {}));
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
generateEUI.paths["resource/eui_skins/GuideSuitOutPutSkin.exml"] = window.GuideSuitOutPutSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = [],
        this.height = 590,
        this.width = 899
    }
    __extends(e, t);
    e.prototype;
    return e
} (eui.Skin);