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
learningabilityChoosePanle; !
function(t) {
    var e = function(t) {
        function e(e) {
            var n = t.call(this) || this;
            return n._data = e,
            n
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            var t = this,
            e = new n,
            i = PopViewManager.createDefaultStyleObject();
            i.caller = this,
            i.clickMaskHandler = function() {
                e.hide(),
                t.onClose()
            },
            PopViewManager.getInstance().openView(e, i, this._data)
        },
        e.prototype.destroy = function() {
            this._data = null,
            t.prototype.destroy.call(this)
        },
        e
    } (BaseModule);
    t.LearningabilityChoosePanle = e,
    __reflect(e.prototype, "learningabilityChoosePanle.LearningabilityChoosePanle");
    var n = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.config = {
                0 : ["攻击学习力", 1, "btn1"],
                1 : ["特攻学习力", 3, "btn2"],
                2 : ["速度学习力", 5, "btn3"],
                3 : ["防御学习力", 2, "btn4"],
                4 : ["特防学习力", 4, "btn5"],
                5 : ["体力学习力", 0, "btn6"]
            },
            e._selectId = -1,
            e._chooseIndex = -1,
            e.skinName = "StudyAttributeSelectPopSkin",
            e
        }
        return __extends(e, t),
        e.prototype.initialized = function() {
            this.btn1.name = "btn1",
            this.btn2.name = "btn2",
            this.btn3.name = "btn3",
            this.btn4.name = "btn4",
            this.btn5.name = "btn5",
            this.btn6.name = "btn6",
            DisplayUtil.setEnabled(this.btnConfirm, !1, !0),
            t.prototype.initialized.call(this)
        },
        e.prototype.initEvents = function() {
            for (var t in this.config) {
                var e = this.config[t][2];
                this[e].addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapAttributeHandler, this)
            }
            ImageButtonUtil.add(this.btnClose, this.onTouchIamgeButtonHandler, this),
            ImageButtonUtil.add(this.btnConfirm, this.onTouchIamgeButtonHandler, this)
        },
        e.prototype.removeEvents = function() {
            for (var t in this.config) {
                var e = this.config[t][2];
                this[e].removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapAttributeHandler, this)
            }
            ImageButtonUtil.removeAll(this)
        },
        e.prototype.setData = function(e) {
            t.prototype.setData.call(this, e),
            this._myData = e
        },
        e.prototype.onTouchTapAttributeHandler = function(t) {
            var e = t.target.name;
            this._selectId = this.getselectId(e),
            this._chooseIndex = this.getChooseIndex(e),
            DisplayUtil.setEnabled(this.btnConfirm, !0)
        },
        e.prototype.getselectId = function(t) {
            for (var e in this.config) {
                var n = this.config[e][2];
                if (t === n) return this.config[e][1]
            }
        },
        e.prototype.getChooseIndex = function(t) {
            for (var e in this.config) {
                var n = this.config[e][2];
                if (t === n) return~~e
            }
        },
        e.prototype.onTouchIamgeButtonHandler = function(t) {
            var e = this;
            switch (t.target) {
            case this.btnClose:
                this.hide(),
                ModuleManager.hideModule("learningabilityChoosePanle.LearningabilityChoosePanle");
                break;
            case this.btnConfirm:
                if (this._selectId < 0) return void BubblerManager.getInstance().showText("请先点击选择你要注入的学习力类型！");
                var n = this._myData.petInfo,
                i = this.config,
                a = this._chooseIndex,
                o = this.gettotalAbility(),
                s = this._myData.addNum || 255,
                r = this._myData.frame || 0;
                if (255 == n[i[a + ""][2]]) BubblerManager.getInstance().showText("你的<font color='#ff0000'>" + PetXMLInfo.getName(n.id) + "</font>的" + TextFormatUtil.getRedTxt(i[a][0]) + "已满，无法注入哦！", !0);
                else {
                    if (3 == r) return o >= 510 ? void BubblerManager.getInstance().showText("你的<font color='#ff0000'>" + PetXMLInfo.getName(n.id) + "</font>的学习力总值不能超过510，无法注入哦！", !0) : void(255 > s ? Alert.show("确定要将精灵的" + TextFormatUtil.getRedTxt(i[a][0]) + "提升" + s + "点吗？",
                    function() {
                        e.chooseFun(i[a + ""][1], i[a + ""][0])
                    }) : Alert.show("确定要将精灵的" + TextFormatUtil.getRedTxt(i[a][0]) + "直接提升至255吗？",
                    function() {
                        e.chooseFun(i[a + ""][1], i[a + ""][0])
                    }));
                    o - n[i[a + ""][2]] + s > 510 ? BubblerManager.getInstance().showText("你的<font color='#ff0000'>" + PetXMLInfo.getName(n.id) + "</font>的学习力总值不能超过510，无法注入", !0) : 255 > s ? Alert.show("确定要将精灵的" + TextFormatUtil.getRedTxt(i[a][0]) + "提升" + s + "点吗？",
                    function() {
                        e.chooseFun(i[a + ""][1], i[a + ""][0])
                    }) : Alert.show("确定要将精灵的" + TextFormatUtil.getRedTxt(i[a][0]) + "直接提升至255吗？",
                    function() {
                        e.chooseFun(i[a + ""][1], i[a + ""][0])
                    })
                }
            }
        },
        e.prototype.chooseFun = function(t, e) {
            this._myData.fun && this._myData.caller && this._myData.fun.apply(this._myData.caller, [t, e]),
            this.hide(),
            ModuleManager.hideModule("learningabilityChoosePanle.LearningabilityChoosePanle")
        },
        e.prototype.gettotalAbility = function() {
            for (var t, e = 0; 6 > e; e++) t += this._myData.petInfo[this.config[e + ""][2]];
            return t
        },
        e
    } (PopView);
    t.ChoosePopView = n,
    __reflect(n.prototype, "learningabilityChoosePanle.ChoosePopView")
} (learningabilityChoosePanle || (learningabilityChoosePanle = {}));
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
generateEUI.paths["resource/eui_skins/StudyAttributeSelectPopSkin.exml"] = window.StudyAttributeSelectPopSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["btnClose", "btnConfirm", "btn1", "btn2", "btn3", "btn4", "btn5", "btn6"],
        this.height = 285,
        this.width = 481,
        this.elementsContent = [this._Image1_i(), this.btnClose_i(), this.btnConfirm_i(), this._Group1_i()]
    }
    __extends(e, t);
    var n = function(t) {
        function e() {
            t.call(this),
            this.skinParts = ["labelDisplay"],
            this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "study_attribute_select_pop_btn1_png")]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var n = e.prototype;
        return n._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t.percentHeight = 100,
            t.source = "study_attribute_select_pop_btn1up_png",
            t.percentWidth = 100,
            t
        },
        n.labelDisplay_i = function() {
            var t = new eui.Label;
            return this.labelDisplay = t,
            t.horizontalCenter = 0,
            t.verticalCenter = 0,
            t
        },
        e
    } (eui.Skin),
    i = function(t) {
        function e() {
            t.call(this),
            this.skinParts = ["labelDisplay"],
            this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "study_attribute_select_pop_btn2_png")]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var n = e.prototype;
        return n._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t.percentHeight = 100,
            t.source = "study_attribute_select_pop_btn2up_png",
            t.percentWidth = 100,
            t
        },
        n.labelDisplay_i = function() {
            var t = new eui.Label;
            return this.labelDisplay = t,
            t.horizontalCenter = 0,
            t.verticalCenter = 0,
            t
        },
        e
    } (eui.Skin),
    a = function(t) {
        function e() {
            t.call(this),
            this.skinParts = ["labelDisplay"],
            this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "study_attribute_select_pop_btn3_png")]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var n = e.prototype;
        return n._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t.percentHeight = 100,
            t.source = "study_attribute_select_pop_btn3up_png",
            t.percentWidth = 100,
            t
        },
        n.labelDisplay_i = function() {
            var t = new eui.Label;
            return this.labelDisplay = t,
            t.horizontalCenter = 0,
            t.verticalCenter = 0,
            t
        },
        e
    } (eui.Skin),
    o = function(t) {
        function e() {
            t.call(this),
            this.skinParts = ["labelDisplay"],
            this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "study_attribute_select_pop_btn4_png")]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var n = e.prototype;
        return n._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t.percentHeight = 100,
            t.source = "study_attribute_select_pop_btn4up_png",
            t.percentWidth = 100,
            t
        },
        n.labelDisplay_i = function() {
            var t = new eui.Label;
            return this.labelDisplay = t,
            t.horizontalCenter = 0,
            t.verticalCenter = 0,
            t
        },
        e
    } (eui.Skin),
    s = function(t) {
        function e() {
            t.call(this),
            this.skinParts = ["labelDisplay"],
            this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "study_attribute_select_pop_btn5_png")]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var n = e.prototype;
        return n._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t.percentHeight = 100,
            t.source = "study_attribute_select_pop_btn5up_png",
            t.percentWidth = 100,
            t
        },
        n.labelDisplay_i = function() {
            var t = new eui.Label;
            return this.labelDisplay = t,
            t.horizontalCenter = 0,
            t.verticalCenter = 0,
            t
        },
        e
    } (eui.Skin),
    r = function(t) {
        function e() {
            t.call(this),
            this.skinParts = ["labelDisplay"],
            this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "study_attribute_select_pop_btn6_png")]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var n = e.prototype;
        return n._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t.percentHeight = 100,
            t.source = "study_attribute_select_pop_btn6up_png",
            t.percentWidth = 100,
            t
        },
        n.labelDisplay_i = function() {
            var t = new eui.Label;
            return this.labelDisplay = t,
            t.horizontalCenter = 0,
            t.verticalCenter = 0,
            t
        },
        e
    } (eui.Skin),
    u = e.prototype;
    return u._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "study_attribute_select_pop_bg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    u.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.source = "study_attribute_select_pop_btnclose_png",
        t.x = 438,
        t.y = 1,
        t
    },
    u.btnConfirm_i = function() {
        var t = new eui.Image;
        return this.btnConfirm = t,
        t.source = "study_attribute_select_pop_btnconfirm_png",
        t.x = 171,
        t.y = 213,
        t
    },
    u._Group1_i = function() {
        var t = new eui.Group;
        return t.x = 21,
        t.y = 94,
        t.layout = this._TileLayout1_i(),
        t.elementsContent = [this.btn1_i(), this.btn2_i(), this.btn3_i(), this.btn4_i(), this.btn5_i(), this.btn6_i()],
        t
    },
    u._TileLayout1_i = function() {
        var t = new eui.TileLayout;
        return t.horizontalGap = 16,
        t.requestedColumnCount = 3,
        t.verticalGap = 20,
        t
    },
    u.btn1_i = function() {
        var t = new eui.RadioButton;
        return this.btn1 = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.x = 200,
        t.y = 34,
        t.skinName = n,
        t
    },
    u.btn2_i = function() {
        var t = new eui.RadioButton;
        return this.btn2 = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.x = 210,
        t.y = 44,
        t.skinName = i,
        t
    },
    u.btn3_i = function() {
        var t = new eui.RadioButton;
        return this.btn3 = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.x = 220,
        t.y = 54,
        t.skinName = a,
        t
    },
    u.btn4_i = function() {
        var t = new eui.RadioButton;
        return this.btn4 = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.x = 230,
        t.y = 64,
        t.skinName = o,
        t
    },
    u.btn5_i = function() {
        var t = new eui.RadioButton;
        return this.btn5 = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.x = 240,
        t.y = 74,
        t.skinName = s,
        t
    },
    u.btn6_i = function() {
        var t = new eui.RadioButton;
        return this.btn6 = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.x = 250,
        t.y = 84,
        t.skinName = r,
        t
    },
    e
} (eui.Skin);