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
learningAbilityChoosePop; !
function(t) {
    var e = function(t) {
        function e(e) {
            var i = t.call(this) || this;
            return i._data = e,
            i
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            var t = this,
            e = new i,
            n = PopViewManager.createDefaultStyleObject();
            n.caller = this,
            n.clickMaskHandler = function() {
                e.hide(),
                t.onClose()
            },
            PopViewManager.getInstance().openView(e, n, this._data)
        },
        e.prototype.destroy = function() {
            this._data = null,
            t.prototype.destroy.call(this)
        },
        e
    } (BaseModule);
    t.LearningAbilityChoosePop = e,
    __reflect(e.prototype, "learningAbilityChoosePop.LearningAbilityChoosePop");
    var i = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.config = {
                0 : ["攻击学习力", 1, "btn1", "ev_attack"],
                1 : ["特攻学习力", 3, "btn2", "ev_sa"],
                2 : ["速度学习力", 5, "btn3", "ev_sp"],
                3 : ["防御学习力", 2, "btn4", "ev_defence"],
                4 : ["特防学习力", 4, "btn5", "ev_sd"],
                5 : ["体力学习力", 0, "btn6", "ev_hp"]
            },
            e._selectIdArr = [],
            e._choosIndexArr = [],
            e.skinName = "LearningabilitychoosepopSkin",
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
            this._myData = e,
            this.initView()
        },
        e.prototype.initView = function() {
            this.tx_num.text = this._myData.chooseNum + "项"
        },
        e.prototype.upDateView = function() {
            this._selectNum = 0,
            this._selectIdArr.length >= this._myData.chooseNum ? (DisplayUtil.setEnabled(this.btnConfirm, !0), this._selectIdArr.length > this._myData.chooseNum && (this._selectIdArr.shift(), this._choosIndexArr.shift())) : DisplayUtil.setEnabled(this.btnConfirm, !1);
            for (var t = 0; 6 > t; t++) - 1 != this._choosIndexArr.indexOf(t) ? (this["btn" + (t + 1)].selected = !0, this._selectNum++) : this["btn" + (t + 1)].selected = !1
        },
        e.prototype.onTouchTapAttributeHandler = function(t) {
            var e = t.target.name,
            i = this._selectIdArr.indexOf(this.getselectId(e)); - 1 == i ? this._selectIdArr.push(this.getselectId(e)) : this._selectIdArr.slice(i, 1);
            var n = this._choosIndexArr.indexOf(this.getChooseIndex(e)); - 1 == n ? this._choosIndexArr.push(this.getChooseIndex(e)) : this._choosIndexArr.slice(n, 1),
            this.upDateView()
        },
        e.prototype.getselectId = function(t) {
            for (var e in this.config) {
                var i = this.config[e][2];
                if (t === i) return this.config[e][1]
            }
        },
        e.prototype.getChooseIndex = function(t) {
            for (var e in this.config) {
                var i = this.config[e][2];
                if (t === i) return~~e
            }
        },
        e.prototype.onTouchIamgeButtonHandler = function(t) {
            var e = this;
            switch (t.target) {
            case this.btnClose:
                this.hide(),
                ModuleManager.hideModule("learningAbilityChoosePop.LearningAbilityChoosePop");
                break;
            case this.btnConfirm:
                if (this._selectIdArr.length < this._myData.chooseNum) {
                    var i = this._myData.chooseNum > 1 ? "还没有选择两个需要注满的学习力！": "请先点击选择你要注入的学习力类型！";
                    return void BubblerManager.getInstance().showText(i)
                }
                var n = this._myData.petInfo,
                o = this.config;
                if (1 == this._myData.chooseNum) {
                    var s = this._choosIndexArr[0],
                    a = this.gettotalAbility(),
                    r = this._myData.addNum || 255,
                    l = this._myData.frame || 0;
                    if (255 == n[o[s + ""][3]]) BubblerManager.getInstance().showText("你的<font color='#ff0000'>" + PetXMLInfo.getName(n.id) + "</font>的" + TextFormatUtil.getRedTxt(o[s][0]) + "已满，无法注入哦！", !0);
                    else {
                        if (3 == l) return a >= 510 ? void BubblerManager.getInstance().showText("你的<font color='#ff0000'>" + PetXMLInfo.getName(n.id) + "</font>的学习力总值不能超过510，无法注入哦！", !0) : void(255 > r ? Alert.show("确定要将精灵的" + TextFormatUtil.getRedTxt(o[s][0]) + "提升" + r + "点吗？",
                        function() {
                            e.chooseFun(o[s + ""][1], o[s + ""][0])
                        }) : Alert.show("确定要将精灵的" + TextFormatUtil.getRedTxt(o[s][0]) + "直接提升至255吗？",
                        function() {
                            e.chooseFun(o[s + ""][1], o[s + ""][0])
                        }));
                        a - n[o[s + ""][2]] + r > 510 ? BubblerManager.getInstance().showText("你的<font color='#ff0000'>" + PetXMLInfo.getName(n.id) + "</font>的学习力总值不能超过510，无法注入", !0) : 255 > r ? Alert.show("确定要将精灵的" + TextFormatUtil.getRedTxt(o[s][0]) + "提升" + r + "点吗？",
                        function() {
                            e.chooseFun(o[s + ""][1], o[s + ""][0])
                        }) : Alert.show("确定要将精灵的" + TextFormatUtil.getRedTxt(o[s][0]) + "直接提升至255吗？",
                        function() {
                            e.chooseFun(o[s + ""][1], o[s + ""][0])
                        })
                    }
                } else Alert.show("每个精灵的学习力上限为510，注入后将默认清空精灵以前获得的杂项学习力，是否确认一键注满学习力",
                function() {
                    var t = [];
                    t[0] = o[e._choosIndexArr[0] + ""][0],
                    t[1] = o[e._choosIndexArr[1] + ""][0],
                    e.chooseFun2(e._selectIdArr, t)
                })
            }
        },
        e.prototype.chooseFun = function(t, e) {
            this.chooseFun2([t], [e])
        },
        e.prototype.chooseFun2 = function(t, e) {
            this._myData.fun && this._myData.caller && this._myData.fun.apply(this._myData.caller, [t, e]),
            this.hide(),
            ModuleManager.hideModule("learningAbilityChoosePop.LearningAbilityChoosePop")
        },
        e.prototype.gettotalAbility = function() {
            for (var t, e = 0; 6 > e; e++) t += this._myData.petInfo[this.config[e + ""][2]];
            return t
        },
        e
    } (PopView);
    t.ChoosePopView = i,
    __reflect(i.prototype, "learningAbilityChoosePop.ChoosePopView")
} (learningAbilityChoosePop || (learningAbilityChoosePop = {}));
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
generateEUI.paths["resource/eui_skins/LearningabilitychoosepopSkin.exml"] = window.LearningabilitychoosepopSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["imge_bg", "btnClose", "xz_xyzrdxxllxzjdsxxlz", "tx_num", "tx_learingNum", "btnConfirm", "imge_txTitle", "btn1", "btn2", "btn3", "btn4", "btn5", "btn6", "Learning_ability_Choose"],
        this.height = 499,
        this.width = 1023,
        this.elementsContent = [this.Learning_ability_Choose_i()]
    }
    __extends(e, t);
    var i = function(t) {
        function e() {
            t.call(this),
            this.skinParts = ["labelDisplay"],
            this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "learningabilitychoosepop_imge_btn_0_down_png")]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t.percentHeight = 100,
            t.source = "learningabilitychoosepop_imge_btn_0_up_png",
            t.percentWidth = 100,
            t
        },
        i.labelDisplay_i = function() {
            var t = new eui.Label;
            return this.labelDisplay = t,
            t.horizontalCenter = 0,
            t.verticalCenter = 0,
            t
        },
        e
    } (eui.Skin),
    n = function(t) {
        function e() {
            t.call(this),
            this.skinParts = ["labelDisplay"],
            this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "learningabilitychoosepop_imge_btn_1_down_png")]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t.percentHeight = 100,
            t.source = "learningabilitychoosepop_imge_btn_1_up_png",
            t.percentWidth = 100,
            t
        },
        i.labelDisplay_i = function() {
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
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "learningabilitychoosepop_imge_btn_2_down_png")]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t.percentHeight = 100,
            t.source = "learningabilitychoosepop_imge_btn_2_up_png",
            t.percentWidth = 100,
            t
        },
        i.labelDisplay_i = function() {
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
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "learningabilitychoosepop_imge_btn_3_down_png")]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t.percentHeight = 100,
            t.source = "learningabilitychoosepop_imge_btn_3_up_png",
            t.percentWidth = 100,
            t
        },
        i.labelDisplay_i = function() {
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
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "learningabilitychoosepop_imge_btn_4_down_png")]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t.percentHeight = 100,
            t.source = "learningabilitychoosepop_imge_btn_4_up_png",
            t.percentWidth = 100,
            t
        },
        i.labelDisplay_i = function() {
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
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "learningabilitychoosepop_imge_btn_5_down_png")]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t.percentHeight = 100,
            t.source = "learningabilitychoosepop_imge_btn_5_up_png",
            t.percentWidth = 100,
            t
        },
        i.labelDisplay_i = function() {
            var t = new eui.Label;
            return this.labelDisplay = t,
            t.horizontalCenter = 0,
            t.verticalCenter = 0,
            t
        },
        e
    } (eui.Skin),
    l = e.prototype;
    return l.Learning_ability_Choose_i = function() {
        var t = new eui.Group;
        return this.Learning_ability_Choose = t,
        t.x = 240,
        t.y = 99,
        t.elementsContent = [this.imge_bg_i(), this.btnClose_i(), this.xz_xyzrdxxllxzjdsxxlz_i(), this.tx_num_i(), this.tx_learingNum_i(), this.btnConfirm_i(), this.imge_txTitle_i(), this.btn1_i(), this.btn2_i(), this.btn3_i(), this.btn4_i(), this.btn5_i(), this.btn6_i()],
        t
    },
    l.imge_bg_i = function() {
        var t = new eui.Image;
        return this.imge_bg = t,
        t.source = "title_pop_2022_img_482X286_bg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    l.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.source = "title_pop_2022_btnclose_png",
        t.x = 439,
        t.y = 1,
        t
    },
    l.xz_xyzrdxxllxzjdsxxlz_i = function() {
        var t = new eui.Label;
        return this.xz_xyzrdxxllxzjdsxxlz = t,
        t.fontFamily = "MFShangHei",
        t.size = 17,
        t.text = "选择       需要注入的学习力类型，直接提升学习力至",
        t.textColor = 8631026,
        t.x = 20,
        t.y = 45,
        t
    },
    l.tx_num_i = function() {
        var t = new eui.Label;
        return this.tx_num = t,
        t.fontFamily = "MFShangHei",
        t.size = 17,
        t.text = "2项",
        t.textColor = 16765477,
        t.x = 59,
        t.y = 45,
        t
    },
    l.tx_learingNum_i = function() {
        var t = new eui.Label;
        return this.tx_learingNum = t,
        t.fontFamily = "MFShangHei",
        t.size = 17,
        t.text = "255",
        t.textColor = 16765477,
        t.x = 416,
        t.y = 45,
        t
    },
    l.btnConfirm_i = function() {
        var t = new eui.Image;
        return this.btnConfirm = t,
        t.source = "learningabilitychoosepop_imge_okbtn_png",
        t.x = 171,
        t.y = 219,
        t
    },
    l.imge_txTitle_i = function() {
        var t = new eui.Image;
        return this.imge_txTitle = t,
        t.source = "learningabilitychoosepop_imge_txtitle_png",
        t.x = 37,
        t.y = 3,
        t
    },
    l.btn1_i = function() {
        var t = new eui.CheckBox;
        return this.btn1 = t,
        t.label = "",
        t.x = 36,
        t.y = 80,
        t.skinName = i,
        t
    },
    l.btn2_i = function() {
        var t = new eui.CheckBox;
        return this.btn2 = t,
        t.label = "",
        t.x = 179,
        t.y = 80,
        t.skinName = n,
        t
    },
    l.btn3_i = function() {
        var t = new eui.CheckBox;
        return this.btn3 = t,
        t.label = "",
        t.x = 319,
        t.y = 80,
        t.skinName = o,
        t
    },
    l.btn4_i = function() {
        var t = new eui.CheckBox;
        return this.btn4 = t,
        t.label = "",
        t.x = 36,
        t.y = 149,
        t.skinName = s,
        t
    },
    l.btn5_i = function() {
        var t = new eui.CheckBox;
        return this.btn5 = t,
        t.label = "",
        t.x = 179,
        t.y = 149,
        t.skinName = a,
        t
    },
    l.btn6_i = function() {
        var t = new eui.CheckBox;
        return this.btn6 = t,
        t.label = "",
        t.x = 319,
        t.y = 149,
        t.skinName = r,
        t
    },
    e
} (eui.Skin);