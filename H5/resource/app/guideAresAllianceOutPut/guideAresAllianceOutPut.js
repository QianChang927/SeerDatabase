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
guideAresAllianceOutPut; !
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.skinName = GuideAresLlianceOutPutSkin,
            t
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            var e = this,
            t = SpineUtil.createAnimate("huodezhanlian");
            t.x = .5 * this.width,
            t.y = .5 * this.height,
            SpineUtil.play(t, "huodezhanlian", this,
            function() {
                e.addEventListener(egret.TouchEvent.TOUCH_TAP, e.onClose, e),
                EventManager.addEventListener(ModuleManager.TOUCH_MODULE_MASK, e.onClose, e)
            },
            this, 1)
        },
        t.prototype.destroy = function() {
            e.prototype.destroy.call(this),
            EventManager.dispatchEventWith(AwardEvent.CLOSE_AWARD_DIALOG),
            EventManager.removeEventListener(ModuleManager.TOUCH_MODULE_MASK, this.onClose, this)
        },
        t
    } (BaseModule);
    e.GuideAresAllianceOutPut = t,
    __reflect(t.prototype, "guideAresAllianceOutPut.GuideAresAllianceOutPut")
} (guideAresAllianceOutPut || (guideAresAllianceOutPut = {}));
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
generateEUI.paths["resource/eui_skins/GuideAresLlianceOutPutSkin.exml"] = window.GuideAresLlianceOutPutSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = [],
        this.height = 629,
        this.width = 950
    }
    __extends(t, e);
    t.prototype;
    return t
} (eui.Skin);