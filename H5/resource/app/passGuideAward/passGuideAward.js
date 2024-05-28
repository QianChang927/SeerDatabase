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
passGuideAward; !
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.skinName = "PassGuideAwardSkin",
            t
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            ImageButtonUtil.add(this.btnGet, this.onClickGet, this)
        },
        t.prototype.onClickGet = function() {
            var e = this,
            t = "resource/cjs_animate/animate/newer_award_box/newer_award_box.js",
            n = new eui.Group;
            LevelManager.topLevel.addChild(n),
            UICjsUtil.start(),
            UICjsUtil.setContainer(n),
            UICjsUtil.loadUiAnimate(t,
            function() {
                var n = UICjsUtil.getUiAnimate(t);
                n.x = .5 * egret.lifecycle.stage.stageWidth,
                n.y = .5 * egret.lifecycle.stage.stageHeight,
                e.visible = !1,
                n.scaleX = n.scaleY = .6,
                UICjsUtil.showAnimate(n),
                n.addEventListener("completed",
                function(t) {
                    n.removeAllEventListeners("completed"),
                    UICjsUtil.stop(),
                    UICjsUtil.removeAllAni(),
                    e.onClose(),
                    ModuleManager.mainPanel.showPetAnimate();
                    for (var i = GuideManager.rewardState,
                    s = 0; 5 > s; s++) {
                        var a = BitUtil.getBit(i, s);
                        0 == a && SocketConnection.sendByQueue(CommandID.PASS_GUIDE_AWARD, [2, s + 1])
                    }
                })
            },
            this)
        },
        t.prototype.destroy = function() {
            e.prototype.destroy.call(this),
            AutoOpenManager.init()
        },
        t
    } (BaseModule);
    e.PassGuideAward = t,
    __reflect(t.prototype, "passGuideAward.PassGuideAward")
} (passGuideAward || (passGuideAward = {}));
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
generateEUI.paths["resource/eui_skins/PassGuideAwardSkin.exml"] = window.PassGuideAwardSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["zu_1", "btnGet"],
        this.height = 362,
        this.width = 980,
        this.elementsContent = [this.zu_1_i(), this.btnGet_i()]
    }
    __extends(t, e);
    var n = t.prototype;
    return n.zu_1_i = function() {
        var e = new eui.Image;
        return this.zu_1 = e,
        e.source = "pass_guide_award_zu_1_png",
        e.x = 0,
        e.y = 0,
        e
    },
    n.btnGet_i = function() {
        var e = new eui.Image;
        return this.btnGet = e,
        e.source = "pass_guide_award_btnget_png",
        e.x = 615,
        e.y = 260,
        e
    },
    t
} (eui.Skin);