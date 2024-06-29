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
    for (var _ in t) t.hasOwnProperty(_) && (e[_] = t[_]);
    i.prototype = t.prototype,
    e.prototype = new i
},
taoleFestivalLoginPanel; !
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.skinName = "TaoleFestivalLoginPanelSkin",
            t
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            var t = this;
            e.prototype.childrenCreated.call(this),
            KTool.getMultiValue([121538, 201511],
            function(e) {
                t.sumSignDay = e[0],
                t.todayHasGot = 1 == e[1],
                t.initEvent()
            }),
            this.bbg.pixelHitTest = !0,
            EventManager.once(ModuleEvent.OPEN_MODULE,
            function() {
                LevelManager.appLevel.getChildByName("sp").addEventListener(egret.TouchEvent.TOUCH_TAP, t.onClose, t)
            },
            this);
            var i = new Date("2022/11/25").getTime(),
            _ = SystemTimerManager.sysBJDate.getTime();
            this.todayIdx = Math.ceil((_ - i) / 1e3 / 60 / 60 / 24),
            this.update()
        },
        t.prototype.initEvent = function() {
            var e = this;
            ImageButtonUtil.add(this.btnClose,
            function() {
                e.onClose()
            },
            this),
            this.hasGots.touchEnabled = !1;
            for (var t = function(t) {
                var _ = t;
                if (ImageButtonUtil.add(i["reward_" + _],
                function() {
                    var t = e.todayHasGot ? 0 : 1;
                    if (e.sumSignDay + t < _, e.sumSignDay + t == _) {
                        e["hasGot_" + _].visible = !0,
                        e["reward_" + _].filters = [];
                        var i = e.sumSignDay + 1;
                        i = i >= 16 ? 16 : i,
                        i = 1 >= i ? 1 : i,
                        SocketConnection.sendWithPromise(41388, [54, i]).then(function() {
                            e.update()
                        })
                    } else if (BubblerManager.getInstance().showText("您的签到天数不足，暂时无法领取该奖励哦！"), 7 == _) {
                        var a = {};
                        a.ins = 42295,
                        tipsPop.TipsPop.openCounterMarkPop(a)
                    } else if (13 == _) {
                        var a = {};
                        a.ins = 42294,
                        tipsPop.TipsPop.openCounterMarkPop(a)
                    } else tipsPop.TipsPop.openMultiItemsPop("3_1400152_1;3_1400153_1;3_300697_1", "第" + _ + "天签到获得")
                },
                i, !0, !1), i.sumSignDay + (i.todayHasGot ? 0 : 1) == _ && !i.todayHasGot) {
                    var a = new egret.GlowFilter(16766720, .4, 8, 8, 7);
                    i["reward_" + _].filters = [a]
                }
            },
            i = this, _ = 1; 16 >= _; _++) t(_)
        },
        t.prototype.update = function() {
            var e = this;
            KTool.getMultiValue([121538, 201511],
            function(t) {
                e.sumSignDay = t[0],
                e.todayHasGot = 1 == t[1];
                for (var i = 1; 16 >= i; i++) {
                    var _ = i <= e.sumSignDay;
                    e["hasGot_" + i].visible = _,
                    e["reward_" + i].touchEnabled = !_
                }
            })
        },
        t.prototype.destroy = function() {
            LevelManager.appLevel.getChildByName("sp").removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClose, this),
            e.prototype.destroy.call(this)
        },
        t
    } (BaseModule);
    e.TaoleFestivalLoginPanel = t,
    __reflect(t.prototype, "taoleFestivalLoginPanel.TaoleFestivalLoginPanel")
} (taoleFestivalLoginPanel || (taoleFestivalLoginPanel = {}));
var __extends = this && this.__extends ||
function(e, t) {
    function i() {
        this.constructor = e
    }
    for (var _ in t) t.hasOwnProperty(_) && (e[_] = t[_]);
    i.prototype = t.prototype,
    e.prototype = new i
};
window.generateEUI = window.generateEUI || {},
generateEUI.paths = generateEUI.paths || {},
generateEUI.styles = void 0,
generateEUI.skins = {},
generateEUI.paths["resource/eui_skins/TaoleFestivalLoginPanelSkin.exml"] = window.TaoleFestivalLoginPanelSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["bbg", "btnClose", "a_2", "reward_2", "a_3", "reward_3", "a_4", "reward_4", "a_5", "reward_5", "a_6", "reward_6", "a_8", "reward_8", "a_9", "reward_9", "a_10", "reward_10", "a_11", "reward_11", "a_12", "reward_12", "a_14", "reward_14", "a_15", "reward_15", "a_16", "reward_16", "reward_1", "reward_7", "reward_13", "rewards", "hasGot_2", "hasGot_3", "hasGot_4", "hasGot_5", "hasGot_6", "hasGot_8", "hasGot_9", "hasGot_10", "hasGot_11", "hasGot_12", "hasGot_14", "hasGot_15", "hasGot_16", "hasGot_1", "hasGot_13", "hasGot_7", "hasGots"],
        this.elementsContent = [this.bbg_i(), this.btnClose_i(), this.rewards_i(), this.hasGots_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i.bbg_i = function() {
        var e = new eui.Image;
        return this.bbg = e,
        e.height = 616,
        e.source = "taole_festival_login_panel_bbg_png",
        e.width = 1002,
        e.x = 0,
        e.y = 0,
        e
    },
    i.btnClose_i = function() {
        var e = new eui.Image;
        return this.btnClose = e,
        e.height = 33,
        e.source = "title_pop_2022_btnclose_png",
        e.visible = !0,
        e.width = 33,
        e.x = 960.59,
        e.y = 30.69,
        e
    },
    i.rewards_i = function() {
        var e = new eui.Group;
        return this.rewards = e,
        e.x = 149.26,
        e.y = 169,
        e.elementsContent = [this.reward_2_i(), this.reward_3_i(), this.reward_4_i(), this.reward_5_i(), this.reward_6_i(), this.reward_8_i(), this.reward_9_i(), this.reward_10_i(), this.reward_11_i(), this.reward_12_i(), this.reward_14_i(), this.reward_15_i(), this.reward_16_i(), this.reward_1_i(), this.reward_7_i(), this.reward_13_i()],
        e
    },
    i.reward_2_i = function() {
        var e = new eui.Group;
        return this.reward_2 = e,
        e.visible = !0,
        e.x = 211.74,
        e.y = 0,
        e.elementsContent = [this._Image1_i(), this.a_2_i()],
        e
    },
    i._Image1_i = function() {
        var e = new eui.Image;
        return e.height = 120,
        e.source = "taole_festival_login_panel_zu_4_png",
        e.width = 111,
        e.x = 0,
        e.y = 0,
        e
    },
    i.a_2_i = function() {
        var e = new eui.Image;
        return this.a_2 = e,
        e.height = 20,
        e.source = "taole_festival_login_panel_2_png",
        e.width = 63,
        e.x = 24,
        e.y = 2,
        e
    },
    i.reward_3_i = function() {
        var e = new eui.Group;
        return this.reward_3 = e,
        e.visible = !0,
        e.x = 332.74,
        e.y = 0,
        e.elementsContent = [this._Image2_i(), this.a_3_i()],
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.height = 120,
        e.source = "taole_festival_login_panel_zu_4_png",
        e.visible = !0,
        e.width = 111,
        e.x = 0,
        e.y = 0,
        e
    },
    i.a_3_i = function() {
        var e = new eui.Image;
        return this.a_3 = e,
        e.height = 20,
        e.source = "taole_festival_login_panel_3_png",
        e.width = 63,
        e.x = 24,
        e.y = 2,
        e
    },
    i.reward_4_i = function() {
        var e = new eui.Group;
        return this.reward_4 = e,
        e.x = 453.74,
        e.y = 0,
        e.elementsContent = [this._Image3_i(), this.a_4_i()],
        e
    },
    i._Image3_i = function() {
        var e = new eui.Image;
        return e.height = 120,
        e.source = "taole_festival_login_panel_zu_4_png",
        e.visible = !0,
        e.width = 111,
        e.x = 0,
        e.y = 0,
        e
    },
    i.a_4_i = function() {
        var e = new eui.Image;
        return this.a_4 = e,
        e.height = 20,
        e.source = "taole_festival_login_panel_4_png",
        e.width = 63,
        e.x = 24,
        e.y = 2,
        e
    },
    i.reward_5_i = function() {
        var e = new eui.Group;
        return this.reward_5 = e,
        e.x = 574.74,
        e.y = 0,
        e.elementsContent = [this._Image4_i(), this.a_5_i()],
        e
    },
    i._Image4_i = function() {
        var e = new eui.Image;
        return e.height = 120,
        e.source = "taole_festival_login_panel_zu_4_png",
        e.visible = !0,
        e.width = 111,
        e.x = 0,
        e.y = 0,
        e
    },
    i.a_5_i = function() {
        var e = new eui.Image;
        return this.a_5 = e,
        e.height = 20,
        e.source = "taole_festival_login_panel_5_png",
        e.width = 63,
        e.x = 24,
        e.y = 2,
        e
    },
    i.reward_6_i = function() {
        var e = new eui.Group;
        return this.reward_6 = e,
        e.x = 54.24,
        e.y = 132,
        e.elementsContent = [this._Image5_i(), this.a_6_i()],
        e
    },
    i._Image5_i = function() {
        var e = new eui.Image;
        return e.height = 120,
        e.source = "taole_festival_login_panel_zu_4_png",
        e.visible = !0,
        e.width = 111,
        e.x = 0,
        e.y = 0,
        e
    },
    i.a_6_i = function() {
        var e = new eui.Image;
        return this.a_6 = e,
        e.height = 20,
        e.source = "taole_festival_login_panel_6_png",
        e.width = 63,
        e.x = 24.5,
        e.y = 2,
        e
    },
    i.reward_8_i = function() {
        var e = new eui.Group;
        return this.reward_8 = e,
        e.x = 296.38,
        e.y = 132,
        e.elementsContent = [this._Image6_i(), this.a_8_i()],
        e
    },
    i._Image6_i = function() {
        var e = new eui.Image;
        return e.height = 120,
        e.source = "taole_festival_login_panel_zu_4_png",
        e.visible = !0,
        e.width = 111,
        e.x = 0,
        e.y = 0,
        e
    },
    i.a_8_i = function() {
        var e = new eui.Image;
        return this.a_8 = e,
        e.height = 20,
        e.source = "taole_festival_login_panel_8_png",
        e.width = 63,
        e.x = 24.36,
        e.y = 2,
        e
    },
    i.reward_9_i = function() {
        var e = new eui.Group;
        return this.reward_9 = e,
        e.x = 417.38,
        e.y = 132,
        e.elementsContent = [this._Image7_i(), this.a_9_i()],
        e
    },
    i._Image7_i = function() {
        var e = new eui.Image;
        return e.height = 120,
        e.source = "taole_festival_login_panel_zu_4_png",
        e.visible = !0,
        e.width = 111,
        e.x = 0,
        e.y = 0,
        e
    },
    i.a_9_i = function() {
        var e = new eui.Image;
        return this.a_9 = e,
        e.height = 20,
        e.source = "taole_festival_login_panel_9_png",
        e.width = 63,
        e.x = 24.36,
        e.y = 2,
        e
    },
    i.reward_10_i = function() {
        var e = new eui.Group;
        return this.reward_10 = e,
        e.x = 538.38,
        e.y = 132,
        e.elementsContent = [this._Image8_i(), this.a_10_i()],
        e
    },
    i._Image8_i = function() {
        var e = new eui.Image;
        return e.height = 120,
        e.source = "taole_festival_login_panel_zu_4_png",
        e.visible = !0,
        e.width = 111,
        e.x = 0,
        e.y = 0,
        e
    },
    i.a_10_i = function() {
        var e = new eui.Image;
        return this.a_10 = e,
        e.height = 20,
        e.source = "taole_festival_login_panel_10_png",
        e.width = 70,
        e.x = 20.36,
        e.y = 2,
        e
    },
    i.reward_11_i = function() {
        var e = new eui.Group;
        return this.reward_11 = e,
        e.x = 0,
        e.y = 263,
        e.elementsContent = [this._Image9_i(), this.a_11_i()],
        e
    },
    i._Image9_i = function() {
        var e = new eui.Image;
        return e.height = 120,
        e.source = "taole_festival_login_panel_zu_4_png",
        e.visible = !0,
        e.width = 111,
        e.x = 0,
        e.y = 0,
        e
    },
    i.a_11_i = function() {
        var e = new eui.Image;
        return this.a_11 = e,
        e.height = 20,
        e.source = "taole_festival_login_panel_11_png",
        e.width = 67,
        e.x = 22.74,
        e.y = 2,
        e
    },
    i.reward_12_i = function() {
        var e = new eui.Group;
        return this.reward_12 = e,
        e.x = 121.59,
        e.y = 263,
        e.elementsContent = [this._Image10_i(), this.a_12_i()],
        e
    },
    i._Image10_i = function() {
        var e = new eui.Image;
        return e.height = 120,
        e.source = "taole_festival_login_panel_zu_4_png",
        e.visible = !0,
        e.width = 111,
        e.x = 0,
        e.y = 0,
        e
    },
    i.a_12_i = function() {
        var e = new eui.Image;
        return this.a_12 = e,
        e.height = 20,
        e.source = "taole_festival_login_panel_12_png",
        e.width = 71,
        e.x = 20.15,
        e.y = 2,
        e
    },
    i.reward_14_i = function() {
        var e = new eui.Group;
        return this.reward_14 = e,
        e.x = 363.15,
        e.y = 263,
        e.elementsContent = [this._Image11_i(), this.a_14_i()],
        e
    },
    i._Image11_i = function() {
        var e = new eui.Image;
        return e.height = 120,
        e.source = "taole_festival_login_panel_zu_4_png",
        e.visible = !0,
        e.width = 111,
        e.x = 0,
        e.y = 0,
        e
    },
    i.a_14_i = function() {
        var e = new eui.Image;
        return this.a_14 = e,
        e.height = 20,
        e.source = "taole_festival_login_panel_14_png",
        e.width = 71,
        e.x = 20.59,
        e.y = 2,
        e
    },
    i.reward_15_i = function() {
        var e = new eui.Group;
        return this.reward_15 = e,
        e.x = 484.15,
        e.y = 263,
        e.elementsContent = [this._Image12_i(), this.a_15_i()],
        e
    },
    i._Image12_i = function() {
        var e = new eui.Image;
        return e.height = 120,
        e.source = "taole_festival_login_panel_zu_4_png",
        e.visible = !0,
        e.width = 111,
        e.x = 0,
        e.y = 0,
        e
    },
    i.a_15_i = function() {
        var e = new eui.Image;
        return this.a_15 = e,
        e.height = 20,
        e.source = "taole_festival_login_panel_15_png",
        e.width = 71,
        e.x = 20.59,
        e.y = 2,
        e
    },
    i.reward_16_i = function() {
        var e = new eui.Group;
        return this.reward_16 = e,
        e.x = 605.15,
        e.y = 263,
        e.elementsContent = [this._Image13_i(), this.a_16_i()],
        e
    },
    i._Image13_i = function() {
        var e = new eui.Image;
        return e.height = 120,
        e.source = "taole_festival_login_panel_zu_4_png",
        e.visible = !0,
        e.width = 111,
        e.x = 0,
        e.y = 0,
        e
    },
    i.a_16_i = function() {
        var e = new eui.Image;
        return this.a_16 = e,
        e.height = 20,
        e.source = "taole_festival_login_panel_16_png",
        e.width = 71,
        e.x = 20.59,
        e.y = 2,
        e
    },
    i.reward_1_i = function() {
        var e = new eui.Image;
        return this.reward_1 = e,
        e.height = 120,
        e.source = "taole_festival_login_panel_r1_png",
        e.width = 117,
        e.x = 84.74,
        e.y = 0,
        e
    },
    i.reward_7_i = function() {
        var e = new eui.Image;
        return this.reward_7 = e,
        e.height = 120,
        e.source = "taole_festival_login_panel_r7_png",
        e.width = 117,
        e.x = 168.74,
        e.y = 132,
        e
    },
    i.reward_13_i = function() {
        var e = new eui.Image;
        return this.reward_13 = e,
        e.height = 120,
        e.source = "taole_festival_login_panel_r13_png",
        e.width = 117,
        e.x = 236.74,
        e.y = 263,
        e
    },
    i.hasGots_i = function() {
        var e = new eui.Group;
        return this.hasGots = e,
        e.x = 164.46,
        e.y = 200,
        e.elementsContent = [this.hasGot_2_i(), this.hasGot_3_i(), this.hasGot_4_i(), this.hasGot_5_i(), this.hasGot_6_i(), this.hasGot_8_i(), this.hasGot_9_i(), this.hasGot_10_i(), this.hasGot_11_i(), this.hasGot_12_i(), this.hasGot_14_i(), this.hasGot_15_i(), this.hasGot_16_i(), this.hasGot_1_i(), this.hasGot_13_i(), this.hasGot_7_i()],
        e
    },
    i.hasGot_2_i = function() {
        var e = new eui.Image;
        return this.hasGot_2 = e,
        e.height = 77,
        e.source = "taole_festival_login_panel_hasGot_png",
        e.width = 77,
        e.x = 212.27,
        e.y = 0,
        e
    },
    i.hasGot_3_i = function() {
        var e = new eui.Image;
        return this.hasGot_3 = e,
        e.height = 77,
        e.source = "taole_festival_login_panel_hasGot_png",
        e.width = 77,
        e.x = 333.04,
        e.y = 0,
        e
    },
    i.hasGot_4_i = function() {
        var e = new eui.Image;
        return this.hasGot_4 = e,
        e.height = 77,
        e.source = "taole_festival_login_panel_hasGot_png",
        e.width = 77,
        e.x = 454.04,
        e.y = 0,
        e
    },
    i.hasGot_5_i = function() {
        var e = new eui.Image;
        return this.hasGot_5 = e,
        e.height = 77,
        e.source = "taole_festival_login_panel_hasGot_png",
        e.width = 77,
        e.x = 575.04,
        e.y = 0,
        e
    },
    i.hasGot_6_i = function() {
        var e = new eui.Image;
        return this.hasGot_6 = e,
        e.height = 77,
        e.source = "taole_festival_login_panel_hasGot_png",
        e.width = 77,
        e.x = 54.54,
        e.y = 132.1,
        e
    },
    i.hasGot_8_i = function() {
        var e = new eui.Image;
        return this.hasGot_8 = e,
        e.height = 77,
        e.source = "taole_festival_login_panel_hasGot_png",
        e.width = 77,
        e.x = 296.73,
        e.y = 132.1,
        e
    },
    i.hasGot_9_i = function() {
        var e = new eui.Image;
        return this.hasGot_9 = e,
        e.height = 77,
        e.source = "taole_festival_login_panel_hasGot_png",
        e.width = 77,
        e.x = 417.68,
        e.y = 132.1,
        e
    },
    i.hasGot_10_i = function() {
        var e = new eui.Image;
        return this.hasGot_10 = e,
        e.height = 77,
        e.source = "taole_festival_login_panel_hasGot_png",
        e.width = 77,
        e.x = 538.88,
        e.y = 132.1,
        e
    },
    i.hasGot_11_i = function() {
        var e = new eui.Image;
        return this.hasGot_11 = e,
        e.height = 77,
        e.source = "taole_festival_login_panel_hasGot_png",
        e.width = 77,
        e.x = 0,
        e.y = 263.54,
        e
    },
    i.hasGot_12_i = function() {
        var e = new eui.Image;
        return this.hasGot_12 = e,
        e.height = 77,
        e.source = "taole_festival_login_panel_hasGot_png",
        e.width = 77,
        e.x = 121.46,
        e.y = 263.54,
        e
    },
    i.hasGot_14_i = function() {
        var e = new eui.Image;
        return this.hasGot_14 = e,
        e.height = 77,
        e.source = "taole_festival_login_panel_hasGot_png",
        e.width = 77,
        e.x = 363.47,
        e.y = 263.54,
        e
    },
    i.hasGot_15_i = function() {
        var e = new eui.Image;
        return this.hasGot_15 = e,
        e.height = 77,
        e.source = "taole_festival_login_panel_hasGot_png",
        e.width = 77,
        e.x = 484.47,
        e.y = 263.54,
        e
    },
    i.hasGot_16_i = function() {
        var e = new eui.Image;
        return this.hasGot_16 = e,
        e.height = 77,
        e.source = "taole_festival_login_panel_hasGot_png",
        e.width = 77,
        e.x = 605.47,
        e.y = 263.54,
        e
    },
    i.hasGot_1_i = function() {
        var e = new eui.Image;
        return this.hasGot_1 = e,
        e.height = 77,
        e.source = "taole_festival_login_panel_hasGot2_png",
        e.width = 77,
        e.x = 90.54,
        e.y = 0,
        e
    },
    i.hasGot_13_i = function() {
        var e = new eui.Image;
        return this.hasGot_13 = e,
        e.height = 77,
        e.source = "taole_festival_login_panel_hasGot2_png",
        e.width = 77,
        e.x = 242.9,
        e.y = 262.36,
        e
    },
    i.hasGot_7_i = function() {
        var e = new eui.Image;
        return this.hasGot_7 = e,
        e.height = 77,
        e.source = "taole_festival_login_panel_hasGot2_png",
        e.width = 77,
        e.x = 175.2,
        e.y = 132.1,
        e
    },
    t
} (eui.Skin);