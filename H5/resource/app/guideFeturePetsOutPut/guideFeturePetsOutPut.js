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
    for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
    n.prototype = t.prototype,
    e.prototype = new n
},
guideFeturePetsOutPut; !
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.skinName = GuideFeturePetsOutPutSkin,
            t
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            var e = this,
            t = SpineUtil.createAnimate("fsanzhuchong");
            t.x = .5 * this.width,
            t.y = .5 * this.height,
            EngineHookManager.repairCanvasRenderDrawMesh(),
            SpineUtil.play(t, "transform", this,
            function() {
                t.play("Fpreview", 0),
                e.addEventListener(egret.TouchEvent.TOUCH_TAP, e.onClose, e),
                EventManager.addEventListener(ModuleManager.TOUCH_MODULE_MASK, e.onClose, e)
            },
            this, 1)
        },
        t.prototype.destroy = function() {
            e.prototype.destroy.call(this),
            EngineHookManager.restoreCanvasRenderDrawMesh(),
            EventManager.dispatchEventWith(AwardEvent.CLOSE_AWARD_DIALOG),
            EventManager.removeEventListener(ModuleManager.TOUCH_MODULE_MASK, this.onClose, this)
        },
        t
    } (BaseModule);
    e.GuideFeturePetsOutPut = t,
    __reflect(t.prototype, "guideFeturePetsOutPut.GuideFeturePetsOutPut")
} (guideFeturePetsOutPut || (guideFeturePetsOutPut = {}));
var __extends = this && this.__extends ||
function(e, t) {
    function n() {
        this.constructor = e
    }
    for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
    n.prototype = t.prototype,
    e.prototype = new n
};
window.generateEUI = window.generateEUI || {},
generateEUI.paths = generateEUI.paths || {},
generateEUI.styles = void 0,
generateEUI.skins = {},
generateEUI.paths["resource/eui_skins/GuideFeturePetsOutPutSkin.exml"] = window.GuideFeturePetsOutPutSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = [],
        this.height = 570,
        this.width = 903
    }
    __extends(t, e);
    t.prototype;
    return t
} (eui.Skin);