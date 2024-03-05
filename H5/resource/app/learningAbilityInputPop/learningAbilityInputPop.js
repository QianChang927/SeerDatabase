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
learningAbilityInputPop; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.sum = 0,
            e.skinName = LearningabilityinputpopSkin,
            e
        }
        return __extends(e, t),
        e.prototype.setData = function(e) {
            t.prototype.setData.call(this, e),
            this._myData = e
        },
        e.prototype.childrenCreated = function() {
            var e = this;
            t.prototype.childrenCreated.call(this),
            this.initView(),
            ImageButtonUtil.add(this.ok, this.onClickOk, this),
            ImageButtonUtil.add(this.close, this.hide, this),
            ImageButtonUtil.add(this.reset,
            function() {
                e.sum = 0,
                e.curStudy = [0, 0, 0, 0, 0, 0];
                for (var t = 0; t < e.curStudy.length; t++) e["pro" + t].value = e.curStudy[t],
                e["value_" + t].text = "" + e.curStudy[t];
                e.curText.text = e.sum + "/510"
            },
            this);
            for (var i = function(t) {
                ImageButtonUtil.add(n["btnMax_" + t],
                function() {
                    var i = e.curStudy[t];
                    if (! (510 > e.sum && 255 > i)) return void(255 != i && BubblerManager.getInstance().showText("剩余学习力不足!"));
                    var n = 510 - e.sum,
                    r = Math.min(255, i + n) - i;
                    e.curStudy[t] = r + i,
                    e["pro" + t].value = e.curStudy[t],
                    e.sum += r,
                    e["value_" + t].text = "" + e.curStudy[t],
                    e.curText.text = e.sum + "/510"
                },
                n),
                ImageButtonUtil.add(n["add_" + t],
                function() {
                    var i = e.curStudy[t];
                    return e.sum < 510 && 255 > i ? (++e.sum, e.curStudy[t] = i + 1, e["pro" + t].value = e.curStudy[t], e["value_" + t].text = "" + e.curStudy[t], e.curText.text = e.sum + "/510", void 0) : void BubblerManager.getInstance().showText("剩余学习力不足!")
                },
                n),
                ImageButtonUtil.add(n["reduce_" + t],
                function() {
                    var i = e.curStudy[t];
                    0 >= i || (e.curStudy[t] = i - 1, e["pro" + t].value = e.curStudy[t], e["value_" + t].text = "" + e.curStudy[t], --e.sum, e.curText.text = e.sum + "/510")
                },
                n),
                n["onChangeSlider" + t] = function() {
                    var i = e.curStudy[t],
                    n = e["pro" + t].value;
                    if (n - i > 0) if (e.sum + n - i > 510) {
                        var r = 510 - e.sum + i;
                        e["pro" + t].value = r,
                        e.sum += r - i,
                        e.curStudy[t] = r,
                        e["value_" + t].text = "" + e.curStudy[t]
                    } else e.sum += n - i,
                    e.curStudy[t] = n,
                    e["value_" + t].text = "" + e.curStudy[t];
                    else e.sum += n - i,
                    e.curStudy[t] = n,
                    e["value_" + t].text = "" + e.curStudy[t];
                    e.curText.text = e.sum + "/510"
                },
                n["pro" + t].addEventListener(egret.Event.CHANGE, n["onChangeSlider" + t], n)
            },
            n = this, r = 0; 6 > r; r++) i(r)
        },
        e.prototype.initView = function() {
            this.curStudy = this._myData.oldCustomStudy,
            this.sum = 0;
            for (var t = 0; t < this.curStudy.length; t++) {
                var e = this.curStudy[t];
                this["value_" + t].text = "" + e,
                this["pro" + t].maximum = 255,
                this["pro" + t].minimum = 0,
                this["pro" + t].value = e,
                this["pro" + t].name = "pro_" + t,
                this.sum += e
            }
            this.curText.text = this.sum + "/510"
        },
        e.prototype.onClickOk = function() {
            this.sum < 510 ? BubblerManager.getInstance().showText("学习力总和需要为510！") : this.chooseFun(this.curStudy)
        },
        e.prototype.chooseFun = function(t) {
            this._myData.fun && this._myData.caller && this._myData.fun.apply(this._myData.caller, [t]),
            BubblerManager.getInstance().showText("自定义学习力成功！"),
            this.hide(),
            ModuleManager.hideModule("learningAbilityInputPop.LearningAbilityInputPop")
        },
        e.prototype.destroy = function() {
            t.prototype.destroy.call(this);
            for (var e = 0; 6 > e; e++) this["pro" + e].removeEventListener(egret.Event.CHANGE, this["onChangeSlider" + e], this);
            ImageButtonUtil.removeAll(this),
            ModuleManager.hideModule("learningAbilityInputPop.LearningAbilityInputPop")
        },
        e
    } (PopView);
    t.InputPopView = e,
    __reflect(e.prototype, "learningAbilityInputPop.InputPopView")
} (learningAbilityInputPop || (learningAbilityInputPop = {}));
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
learningAbilityInputPop; !
function(t) {
    var e = function(e) {
        function i(t) {
            var i = e.call(this) || this;
            return i._data = t,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            var e = this,
            i = new t.InputPopView,
            n = PopViewManager.createDefaultStyleObject();
            n.caller = this,
            n.maskShapeStyle.maskAlpha = .8,
            n.clickMaskHandler = function() {
                i.hide(),
                e.onClose()
            },
            PopViewManager.getInstance().openView(i, n, this._data)
        },
        i.prototype.destroy = function() {
            this._data = null,
            e.prototype.destroy.call(this)
        },
        i
    } (BaseModule);
    t.LearningAbilityInputPop = e,
    __reflect(e.prototype, "learningAbilityInputPop.LearningAbilityInputPop")
} (learningAbilityInputPop || (learningAbilityInputPop = {}));
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
generateEUI.paths["resource/eui_skins/learningabilityPopItemSkin.exml"] = window.learningabilityPopItemSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["track", "trackHighlight", "thumb"],
        this.height = 15,
        this.width = 281,
        this.elementsContent = [this.track_i(), this.trackHighlight_i(), this.thumb_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.track_i = function() {
        var t = new eui.Image;
        return this.track = t,
        t.height = 15,
        t.verticalCenter = 1,
        t.width = 281,
        t.x = 0,
        t
    },
    i.trackHighlight_i = function() {
        var t = new eui.Image;
        return this.trackHighlight = t,
        t.height = 15,
        t.left = 0,
        t.source = "learningabilityinputpop_progress_png",
        t.visible = !0,
        t.width = 281,
        t.y = .854,
        t
    },
    i.thumb_i = function() {
        var t = new eui.Image;
        return this.thumb = t,
        t.anchorOffsetX = 15,
        t.source = "learningabilityinputpop_img_yellow_reddot_png",
        t.verticalCenter = 0,
        t.visible = !0,
        t.x = 0,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/LearningabilityinputpopSkin.exml"] = window.LearningabilityinputpopSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["value_0", "add_0", "reduce_0", "btnMax_0", "pro0", "a_0", "value_2", "add_2", "reduce_2", "btnMax_2", "pro2", "a_2", "value_4", "add_4", "reduce_4", "btnMax_4", "pro4", "a_4", "value_1", "add_1", "reduce_1", "btnMax_1", "pro1", "a_1", "value_3", "add_3", "reduce_3", "btnMax_3", "pro3", "a_3", "value_5", "add_5", "reduce_5", "btnMax_5", "pro5", "a_5", "curText", "reset", "ok", "close"],
        this.height = 550,
        this.width = 1005,
        this.elementsContent = [this._Image1_i(), this.a_0_i(), this.a_2_i(), this.a_4_i(), this.a_1_i(), this.a_3_i(), this.a_5_i(), this.curText_i(), this.reset_i(), this.ok_i(), this.close_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "learningabilityinputpop_bg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.a_0_i = function() {
        var t = new eui.Group;
        return this.a_0 = t,
        t.visible = !0,
        t.x = 40,
        t.y = 82,
        t.elementsContent = [this.value_0_i(), this.add_0_i(), this.reduce_0_i(), this.btnMax_0_i(), this._Image2_i(), this.pro0_i()],
        t
    },
    i.value_0_i = function() {
        var t = new eui.Label;
        return this.value_0 = t,
        t.fontFamily = "MFShangHei",
        t.size = 20,
        t.text = "999",
        t.textColor = 4187130,
        t.x = 146,
        t.y = 0,
        t
    },
    i.add_0_i = function() {
        var t = new eui.Image;
        return this.add_0 = t,
        t.source = "learningabilityinputpop_add_png",
        t.x = 349,
        t.y = 41,
        t
    },
    i.reduce_0_i = function() {
        var t = new eui.Image;
        return this.reduce_0 = t,
        t.source = "learningabilityinputpop_reduce_png",
        t.x = 0,
        t.y = 41,
        t
    },
    i.btnMax_0_i = function() {
        var t = new eui.Image;
        return this.btnMax_0 = t,
        t.source = "learningabilityinputpop_btnmax_png",
        t.x = 397,
        t.y = 41,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "learningabilityinputpop_progress_bg_png",
        t.x = 37,
        t.y = 40,
        t
    },
    i.pro0_i = function() {
        var t = new eui.HSlider;
        return this.pro0 = t,
        t.skinName = "learningabilityPopItemSkin",
        t.width = 273.399,
        t.x = 52.07,
        t.y = 44,
        t
    },
    i.a_2_i = function() {
        var t = new eui.Group;
        return this.a_2 = t,
        t.x = 520,
        t.y = 82,
        t.elementsContent = [this.value_2_i(), this.add_2_i(), this.reduce_2_i(), this.btnMax_2_i(), this._Image3_i(), this.pro2_i()],
        t
    },
    i.value_2_i = function() {
        var t = new eui.Label;
        return this.value_2 = t,
        t.fontFamily = "MFShangHei",
        t.size = 20,
        t.text = "999",
        t.textColor = 4187130,
        t.x = 146,
        t.y = 0,
        t
    },
    i.add_2_i = function() {
        var t = new eui.Image;
        return this.add_2 = t,
        t.source = "learningabilityinputpop_add_png",
        t.x = 349,
        t.y = 41,
        t
    },
    i.reduce_2_i = function() {
        var t = new eui.Image;
        return this.reduce_2 = t,
        t.source = "learningabilityinputpop_reduce_png",
        t.x = 0,
        t.y = 41,
        t
    },
    i.btnMax_2_i = function() {
        var t = new eui.Image;
        return this.btnMax_2 = t,
        t.source = "learningabilityinputpop_btnmax_png",
        t.x = 397,
        t.y = 41,
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "learningabilityinputpop_progress_bg_png",
        t.x = 37,
        t.y = 40,
        t
    },
    i.pro2_i = function() {
        var t = new eui.HSlider;
        return this.pro2 = t,
        t.skinName = "learningabilityPopItemSkin",
        t.width = 273.399,
        t.x = 52.07,
        t.y = 44,
        t
    },
    i.a_4_i = function() {
        var t = new eui.Group;
        return this.a_4 = t,
        t.x = 40,
        t.y = 212,
        t.elementsContent = [this.value_4_i(), this.add_4_i(), this.reduce_4_i(), this.btnMax_4_i(), this._Image4_i(), this.pro4_i()],
        t
    },
    i.value_4_i = function() {
        var t = new eui.Label;
        return this.value_4 = t,
        t.fontFamily = "MFShangHei",
        t.size = 20,
        t.text = "999",
        t.textColor = 4187130,
        t.x = 146,
        t.y = 0,
        t
    },
    i.add_4_i = function() {
        var t = new eui.Image;
        return this.add_4 = t,
        t.source = "learningabilityinputpop_add_png",
        t.x = 349,
        t.y = 41,
        t
    },
    i.reduce_4_i = function() {
        var t = new eui.Image;
        return this.reduce_4 = t,
        t.source = "learningabilityinputpop_reduce_png",
        t.x = 0,
        t.y = 41,
        t
    },
    i.btnMax_4_i = function() {
        var t = new eui.Image;
        return this.btnMax_4 = t,
        t.source = "learningabilityinputpop_btnmax_png",
        t.x = 397,
        t.y = 41,
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.source = "learningabilityinputpop_progress_bg_png",
        t.x = 37,
        t.y = 40,
        t
    },
    i.pro4_i = function() {
        var t = new eui.HSlider;
        return this.pro4 = t,
        t.skinName = "learningabilityPopItemSkin",
        t.width = 273.399,
        t.x = 52.07,
        t.y = 44,
        t
    },
    i.a_1_i = function() {
        var t = new eui.Group;
        return this.a_1 = t,
        t.x = 520,
        t.y = 212,
        t.elementsContent = [this.value_1_i(), this.add_1_i(), this.reduce_1_i(), this.btnMax_1_i(), this._Image5_i(), this.pro1_i()],
        t
    },
    i.value_1_i = function() {
        var t = new eui.Label;
        return this.value_1 = t,
        t.fontFamily = "MFShangHei",
        t.size = 20,
        t.text = "999",
        t.textColor = 4187130,
        t.x = 146,
        t.y = 0,
        t
    },
    i.add_1_i = function() {
        var t = new eui.Image;
        return this.add_1 = t,
        t.source = "learningabilityinputpop_add_png",
        t.x = 349,
        t.y = 41,
        t
    },
    i.reduce_1_i = function() {
        var t = new eui.Image;
        return this.reduce_1 = t,
        t.source = "learningabilityinputpop_reduce_png",
        t.x = 0,
        t.y = 41,
        t
    },
    i.btnMax_1_i = function() {
        var t = new eui.Image;
        return this.btnMax_1 = t,
        t.source = "learningabilityinputpop_btnmax_png",
        t.x = 397,
        t.y = 41,
        t
    },
    i._Image5_i = function() {
        var t = new eui.Image;
        return t.source = "learningabilityinputpop_progress_bg_png",
        t.x = 37,
        t.y = 40,
        t
    },
    i.pro1_i = function() {
        var t = new eui.HSlider;
        return this.pro1 = t,
        t.skinName = "learningabilityPopItemSkin",
        t.width = 273.399,
        t.x = 52.07,
        t.y = 44,
        t
    },
    i.a_3_i = function() {
        var t = new eui.Group;
        return this.a_3 = t,
        t.x = 40,
        t.y = 342,
        t.elementsContent = [this.value_3_i(), this.add_3_i(), this.reduce_3_i(), this.btnMax_3_i(), this._Image6_i(), this.pro3_i()],
        t
    },
    i.value_3_i = function() {
        var t = new eui.Label;
        return this.value_3 = t,
        t.fontFamily = "MFShangHei",
        t.size = 20,
        t.text = "999",
        t.textColor = 4187130,
        t.x = 146,
        t.y = 0,
        t
    },
    i.add_3_i = function() {
        var t = new eui.Image;
        return this.add_3 = t,
        t.source = "learningabilityinputpop_add_png",
        t.x = 349,
        t.y = 41,
        t
    },
    i.reduce_3_i = function() {
        var t = new eui.Image;
        return this.reduce_3 = t,
        t.source = "learningabilityinputpop_reduce_png",
        t.x = 0,
        t.y = 41,
        t
    },
    i.btnMax_3_i = function() {
        var t = new eui.Image;
        return this.btnMax_3 = t,
        t.source = "learningabilityinputpop_btnmax_png",
        t.x = 397,
        t.y = 41,
        t
    },
    i._Image6_i = function() {
        var t = new eui.Image;
        return t.source = "learningabilityinputpop_progress_bg_png",
        t.x = 37,
        t.y = 40,
        t
    },
    i.pro3_i = function() {
        var t = new eui.HSlider;
        return this.pro3 = t,
        t.skinName = "learningabilityPopItemSkin",
        t.width = 273.399,
        t.x = 52.07,
        t.y = 44,
        t
    },
    i.a_5_i = function() {
        var t = new eui.Group;
        return this.a_5 = t,
        t.x = 520,
        t.y = 342,
        t.elementsContent = [this.value_5_i(), this.add_5_i(), this.reduce_5_i(), this.btnMax_5_i(), this._Image7_i(), this.pro5_i()],
        t
    },
    i.value_5_i = function() {
        var t = new eui.Label;
        return this.value_5 = t,
        t.fontFamily = "MFShangHei",
        t.size = 20,
        t.text = "999",
        t.textColor = 4187130,
        t.x = 146,
        t.y = 0,
        t
    },
    i.add_5_i = function() {
        var t = new eui.Image;
        return this.add_5 = t,
        t.source = "learningabilityinputpop_add_png",
        t.x = 349,
        t.y = 41,
        t
    },
    i.reduce_5_i = function() {
        var t = new eui.Image;
        return this.reduce_5 = t,
        t.source = "learningabilityinputpop_reduce_png",
        t.x = 0,
        t.y = 41,
        t
    },
    i.btnMax_5_i = function() {
        var t = new eui.Image;
        return this.btnMax_5 = t,
        t.source = "learningabilityinputpop_btnmax_png",
        t.x = 397,
        t.y = 41,
        t
    },
    i._Image7_i = function() {
        var t = new eui.Image;
        return t.source = "learningabilityinputpop_progress_bg_png",
        t.x = 37,
        t.y = 40,
        t
    },
    i.pro5_i = function() {
        var t = new eui.HSlider;
        return this.pro5 = t,
        t.skinName = "learningabilityPopItemSkin",
        t.width = 273.399,
        t.x = 52.07,
        t.y = 44,
        t
    },
    i.curText_i = function() {
        var t = new eui.Label;
        return this.curText = t,
        t.fontFamily = "MFShangHei",
        t.size = 20,
        t.text = "255/510",
        t.textColor = 4187130,
        t.x = 137,
        t.y = 443,
        t
    },
    i.reset_i = function() {
        var t = new eui.Image;
        return this.reset = t,
        t.source = "learningabilityinputpop_reset_png",
        t.x = 334,
        t.y = 486,
        t
    },
    i.ok_i = function() {
        var t = new eui.Image;
        return this.ok = t,
        t.source = "learningabilityinputpop_ok_png",
        t.x = 537,
        t.y = 486,
        t
    },
    i.close_i = function() {
        var t = new eui.Image;
        return this.close = t,
        t.source = "learningabilityinputpop_close_png",
        t.x = 962,
        t.y = 3,
        t
    },
    e
} (eui.Skin);