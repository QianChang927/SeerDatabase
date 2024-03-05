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
preferentialBest; !
function(t) {
    var e = function(e) {
        function i(t) {
            var i = e.call(this) || this;
            i.arrayChoose = [],
            i.needSetStudy = !0,
            i.needSetNature = !0,
            i.buyAvailable = !0,
            i.cmd = 43229,
            i.data = t;
            var n = config.PreferentialBest.getItem(i.data.id);
            if (n) if (i.pid = i.data.pid, i.cmd = i.data.cmd, i.flag = i.data.flag, n.iscommon);
            else {
                i.skinName = n.skinname,
                i.petId = n.petid,
                i.recommendNature = n.recommendnature;
                for (var r = [], a = 1; 6 >= a; a++) r[a] = !1;
                n.canchoose.split("|").forEach(function(t) {
                    r[ + t] = !0
                }),
                i.arrayCanChoose = r;
                var s = [];
                n.price.split("|").forEach(function(t, e) {
                    s[e + 1] = +t
                }),
                i.arrayPrice = s;
                var u = [];
                n.recommendlearningability.split("|").forEach(function(t) {
                    u[ + t] = !0
                }),
                i.recommendLearningAbility = u
            } else if (i.mainImgSource = i.data.mainImgSource, i.needSetStudy = i.data.needSetStudy, i.needSetNature = i.data.needSetNature, i.buyFunc = i.data.buyFunc, i.buyAvailable = i.data.buyAvailable, i.skinName = "CommonBestPanelSkin", i.petId = i.data.petid, i.pid = i.data.pid, i.recommendNature = i.data.recommendnature ? i.data.recommendnature: 1, i.data.recommendlearningability) {
                var o = [];
                i.data.recommendlearningability.split("|").forEach(function(t) {
                    o[ + t] = !0
                }),
                i.recommendLearningAbility = o
            } else i.recommendLearningAbility = [!1, !0, !1, !1, !1, !0, !1];
            return PetManager.isDefaultPet(i.petId) || Alarm.show("请将" + PetXMLInfo.getName(i.petId) + "设为首位！",
            function() {
                ModuleManager.showModuleByID(10),
                i.onClose()
            }),
            i
        }
        return __extends(i, e),
        Object.defineProperty(i.prototype, "numNature", {
            set: function(t) {
                this.txtNature.text = NatureXMLInfo.getName(t)
            },
            enumerable: !0,
            configurable: !0
        }),
        i.prototype.childrenCreated = function() {
            this.addEvent(),
            this.init()
        },
        i.prototype.init = function() {
            var t = this;
            this.txtRecommend1.visible = !0,
            this.txtRecommend2.visible = !0;
            for (var e = 1; 6 >= e; e++) this.arrayChoose[e] = !0;
            UserInfoManager.getDiamond(function(e) {
                t.txtDiamond.text = e
            },
            this),
            this.numNature = this.recommendNature;
            var i = 1,
            n = ["物攻", "物防", "特攻", "特防", "速度", "体力"];
            this.learningAbility = [0, 0, 0, 0, 0, 0];
            for (var e = 1; 6 >= e; e++) this.recommendLearningAbility[e] && (this["txtRecommend" + i].text = n[e - 1] + ":255", this.learningAbility[e - 1] = 255, i++, i > 3 && console.warn("推荐学习力配表有误！"));
            this.mainImgSource && (this.imgMain.source = this.mainImgSource),
            this.btnStudy.visible = this.needSetStudy,
            this.btnNature.visible = this.needSetNature,
            DisplayUtil.setEnabled(this.btnBuy, this.buyAvailable, !this.buyAvailable)
        },
        i.prototype.addEvent = function() {
            var e = this;
            ImageButtonUtil.add(this.btnClose, this.onClose, this),
            ImageButtonUtil.add(this.btnBuy,
            function() {
                PayManager.doPayFunc(function() {
                    PetManager.isDefaultPet(e.petId) ? KTool.buyProductByCallback(e.pid, 1,
                    function() {
                        if (e.buyFunc) e.buyFunc(e.numNature, e.learningAbility),
                        EventManager.dispatchEventWith("BuyBestPetCompleted"),
                        e.onClose();
                        else {
                            for (var t = [5, 0, 1, 2, 3, 4], i = new egret.ByteArray, n = 0; 6 > n; n++) i.writeUnsignedInt(e.learningAbility[t[n]]);
                            i.position = 0,
                            SocketConnection.sendWithPromise(e.cmd, [e.flag, e.numNature, i, PetManager.defaultTime]).then(function() {
                                EventManager.dispatchEventWith("BuyBestPetCompleted"),
                                e.onClose()
                            })
                        }
                    }) : Alarm.show("请将" + PetXMLInfo.getName(e.petId) + "设为首位！",
                    function() {
                        ModuleManager.showModuleByID(10)
                    })
                },
                e)
            },
            this),
            ImageButtonUtil.add(this.btnStudy,
            function() {
                var i = PopViewManager.createDefaultStyleObject();
                i.ignoreMaskClick = !1;
                var n = new t.SetLearningAbilityPop(function(t) {
                    e.txtRecommend1.text = "自定义",
                    e.txtRecommend1.y = 235,
                    e.txtRecommend2.visible = !1,
                    e.learningAbility = t
                },
                e);
                PopViewManager.getInstance().openView(n, i)
            },
            this),
            ImageButtonUtil.add(this.btnNature,
            function() {
                ModuleManager.showModule("natureChoosePanel", ["nature_choose_panel"], {
                    petinfo: PetManager.getPetInfo(PetManager.getPetsById(e.petId)[0].catchTime),
                    callBack: function(t) {
                        e.numNature = t
                    },
                    caller: e
                },
                null, AppDoStyle.NULL)
            },
            this)
        },
        i
    } (BaseModule);
    t.PreferentialBest = e,
    __reflect(e.prototype, "preferentialBest.PreferentialBest")
} (preferentialBest || (preferentialBest = {}));
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
preferentialBest; !
function(t) {
    var e = function(t) {
        function e(e, i) {
            var n = t.call(this) || this;
            return n.numAbility = [],
            n.skinName = "PreferentialBestSetLearningAbilityPopSkin",
            n.callBack = e,
            n.thisObj = i,
            n
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this),
            this.addEvent(),
            this.reset()
        },
        e.prototype.destroy = function() {
            this.callBack = null,
            this.thisObj = null,
            t.prototype.destroy.call(this)
        },
        e.prototype.reset = function() {
            for (var t = 1; 6 >= t; t++) this.numAbility[t] = 0,
            this["input" + t].text = this.numAbility[t] + "";
            this.setSum()
        },
        e.prototype.addEvent = function() {
            for (var t = this,
            e = function(e) {
                ImageButtonUtil.add(i["btnDecrease" + e],
                function() {
                    t.numAbility[e]--,
                    t.numAbility[e] < 0 ? t.numAbility[e] = 0 : (t["input" + e].text = t.numAbility[e] + "", t.setSum())
                },
                i),
                ImageButtonUtil.add(i["btnIncrease" + e],
                function() {
                    t.numAbility[e]++,
                    t.numAbility[e] > 255 ? (t.numAbility[e] = 255, BubblerManager.getInstance().showText("单项学习力最大为255")) : (t["input" + e].text = t.numAbility[e] + "", t.setSum())
                },
                i),
                ImageButtonUtil.add(i["btnMax" + e],
                function() {
                    255 != t.numAbility[e] && (t.numAbility[e] = 255, t["input" + e].text = t.numAbility[e] + "", t.setSum())
                },
                i),
                i["input" + e].addEventListener(egret.Event.CHANGE,
                function() {
                    var i = t.numAbility[e];
                    t.numAbility[e] = +t["input" + e].text,
                    t.numAbility[e] > 255 ? (t.numAbility[e] = i, BubblerManager.getInstance().showText("单项学习力最大为255")) : (t["input" + e].text = t.numAbility[e] + "", t.setSum())
                },
                i)
            },
            i = this, n = 1; 6 >= n; n++) e(n);
            ImageButtonUtil.add(this.btnReset,
            function() {
                t.reset()
            },
            this),
            ImageButtonUtil.add(this.btnOK,
            function() {
                t.setSum() <= 510 ? (t.callBack.call(t.thisObj, t.numAbility), PopViewManager.getInstance().hideView(t)) : BubblerManager.getInstance().showText("学习力总和最大为510")
            },
            this)
        },
        e.prototype.setSum = function() {
            for (var t = 0,
            e = 1; 6 >= e; e++) t += this.numAbility[e];
            return this.txtSum.text = "当前学习力总和：" + t,
            t
        },
        e
    } (PopView);
    t.SetLearningAbilityPop = e,
    __reflect(e.prototype, "preferentialBest.SetLearningAbilityPop")
} (preferentialBest || (preferentialBest = {}));
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
generateEUI.paths["resource/eui_skins/CommonBestPanelSkin.exml"] = window.CommonBestPanelSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["imgMain", "btnAddDiamond", "btnNature", "btnStudy", "btnBuy", "btnClose", "txtRecommend2", "txtRecommend1", "txtNature", "txtEffect", "txtDiamond", "txtCurPrice", "txtOriPrice"],
        this.height = 608,
        this.width = 985,
        this.elementsContent = [this.imgMain_i(), this._Image1_i(), this.btnAddDiamond_i(), this.btnNature_i(), this.btnStudy_i(), this.btnBuy_i(), this.btnClose_i(), this.txtRecommend2_i(), this.txtRecommend1_i(), this.txtNature_i(), this.txtEffect_i(), this.txtDiamond_i(), this.txtCurPrice_i(), this.txtOriPrice_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.imgMain_i = function() {
        var t = new eui.Image;
        return this.imgMain = t,
        t.bottom = 117,
        t.horizontalCenter = -48,
        t.visible = !0,
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "best_panel_bg_png",
        t.visible = !0,
        t.x = 0,
        t.y = 147.205,
        t
    },
    i.btnAddDiamond_i = function() {
        var t = new eui.Image;
        return this.btnAddDiamond = t,
        t.source = "best_panel_add_png",
        t.visible = !1,
        t.x = 539,
        t.y = 513,
        t
    },
    i.btnNature_i = function() {
        var t = new eui.Image;
        return this.btnNature = t,
        t.source = "best_panel_nature_btn_png",
        t.x = 882,
        t.y = 307,
        t
    },
    i.btnStudy_i = function() {
        var t = new eui.Image;
        return this.btnStudy = t,
        t.source = "best_panel_nature_btn_png",
        t.x = 882,
        t.y = 190,
        t
    },
    i.btnBuy_i = function() {
        var t = new eui.Image;
        return this.btnBuy = t,
        t.source = "best_panel_buy_btn_png",
        t.x = 366,
        t.y = 545,
        t
    },
    i.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.source = "best_panel_close_png",
        t.x = 951,
        t.y = 11,
        t
    },
    i.txtRecommend2_i = function() {
        var t = new eui.Label;
        return this.txtRecommend2 = t,
        t.fontFamily = "REEJI",
        t.size = 18,
        t.text = "速度 255",
        t.textColor = 16774500,
        t.x = 769,
        t.y = 243,
        t
    },
    i.txtRecommend1_i = function() {
        var t = new eui.Label;
        return this.txtRecommend1 = t,
        t.fontFamily = "REEJI",
        t.size = 18,
        t.text = "攻击 255",
        t.textColor = 16774500,
        t.x = 769,
        t.y = 223.549,
        t
    },
    i.txtNature_i = function() {
        var t = new eui.Label;
        return this.txtNature = t,
        t.fontFamily = "REEJI",
        t.size = 20,
        t.text = "固执",
        t.textColor = 16774500,
        t.x = 771,
        t.y = 341,
        t
    },
    i.txtEffect_i = function() {
        var t = new eui.Label;
        return this.txtEffect = t,
        t.fontFamily = "REEJI",
        t.size = 20,
        t.text = "随机生成",
        t.textColor = 16774500,
        t.x = 770.182,
        t.y = 457.044,
        t
    },
    i.txtDiamond_i = function() {
        var t = new eui.Label;
        return this.txtDiamond = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "2218",
        t.textColor = 16774499,
        t.x = 468,
        t.y = 515,
        t
    },
    i.txtCurPrice_i = function() {
        var t = new eui.Label;
        return this.txtCurPrice = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "现价498",
        t.textAlign = "right",
        t.textColor = 16774499,
        t.width = 82.429,
        t.x = 445.491,
        t.y = 473,
        t
    },
    i.txtOriPrice_i = function() {
        var t = new eui.Label;
        return this.txtOriPrice = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "原价 620",
        t.textAlign = "right",
        t.textColor = 5559075,
        t.width = 92.079,
        t.x = 313,
        t.y = 473,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/PreferentialBestSetLearningAbilityPopSkin.exml"] = window.PreferentialBestSetLearningAbilityPopSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["btnDecrease5", "input5", "btnMax5", "btnIncrease5", "selectItem5", "btnDecrease6", "input6", "btnMax6", "btnIncrease6", "selectItem0", "btnDecrease1", "input1", "btnMax1", "btnIncrease1", "selectItem1", "btnDecrease2", "input2", "btnMax2", "btnIncrease2", "selectItem2", "btnDecrease3", "input3", "btnMax3", "btnIncrease3", "selectItem3", "btnDecrease4", "input4", "btnMax4", "btnIncrease4", "selectItem4", "txtSum", "btnOK", "btnReset"],
        this.elementsContent = [this._Image1_i(), this._Image2_i(), this._Image3_i(), this._Image4_i(), this._Image5_i(), this._Image6_i(), this._Image7_i(), this._Image8_i(), this._Image9_i(), this._Image10_i(), this._Image11_i(), this._Image12_i(), this.selectItem5_i(), this.selectItem0_i(), this.selectItem1_i(), this.selectItem2_i(), this.selectItem3_i(), this.selectItem4_i(), this._Image19_i(), this._Label1_i(), this._Image20_i(), this.txtSum_i(), this.btnOK_i(), this.btnReset_i()]
    }
    __extends(e, t);
    var i = function(t) {
        function e() {
            t.call(this),
            this.skinParts = ["textDisplay", "promptDisplay"],
            this.minHeight = 24,
            this.minWidth = 300,
            this.elementsContent = [this.textDisplay_i()],
            this.promptDisplay_i(),
            this.states = [new eui.State("normal", []), new eui.State("disabled", [new eui.SetProperty("textDisplay", "textColor", 16711680)]), new eui.State("normalWithPrompt", [new eui.AddItems("promptDisplay", "", 1, "")]), new eui.State("disabledWithPrompt", [new eui.AddItems("promptDisplay", "", 1, "")])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i.textDisplay_i = function() {
            var t = new eui.EditableText;
            return this.textDisplay = t,
            t.height = 24,
            t.horizontalCenter = "0",
            t.left = "10",
            t.right = "10",
            t.size = 16,
            t.textAlign = "center",
            t.textColor = 3143013,
            t.verticalCenter = "0",
            t.percentWidth = 100,
            t
        },
        i.promptDisplay_i = function() {
            var t = new eui.Label;
            return this.promptDisplay = t,
            t.fontFamily = "HuaKangXinZongYi",
            t.height = 24,
            t.horizontalCenter = 0,
            t.left = 10,
            t.right = 10,
            t.size = 16,
            t.textAlign = "center",
            t.textColor = 2966635,
            t.touchEnabled = !1,
            t.verticalCenter = 0,
            t.percentWidth = 100,
            t
        },
        e
    } (eui.Skin),
    n = function(t) {
        function e() {
            t.call(this),
            this.skinParts = ["textDisplay", "promptDisplay"],
            this.minHeight = 24,
            this.minWidth = 300,
            this.elementsContent = [this.textDisplay_i()],
            this.promptDisplay_i(),
            this.states = [new eui.State("normal", []), new eui.State("disabled", [new eui.SetProperty("textDisplay", "textColor", 16711680)]), new eui.State("normalWithPrompt", [new eui.AddItems("promptDisplay", "", 1, "")]), new eui.State("disabledWithPrompt", [new eui.AddItems("promptDisplay", "", 1, "")])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i.textDisplay_i = function() {
            var t = new eui.EditableText;
            return this.textDisplay = t,
            t.height = 24,
            t.horizontalCenter = "0",
            t.left = "10",
            t.right = "10",
            t.size = 16,
            t.textAlign = "center",
            t.textColor = 3143013,
            t.verticalCenter = "0",
            t.percentWidth = 100,
            t
        },
        i.promptDisplay_i = function() {
            var t = new eui.Label;
            return this.promptDisplay = t,
            t.fontFamily = "HuaKangXinZongYi",
            t.height = 24,
            t.horizontalCenter = 0,
            t.left = 10,
            t.right = 10,
            t.size = 16,
            t.textAlign = "center",
            t.textColor = 2966635,
            t.touchEnabled = !1,
            t.verticalCenter = 0,
            t.percentWidth = 100,
            t
        },
        e
    } (eui.Skin),
    r = function(t) {
        function e() {
            t.call(this),
            this.skinParts = ["textDisplay", "promptDisplay"],
            this.minHeight = 24,
            this.minWidth = 300,
            this.elementsContent = [this.textDisplay_i()],
            this.promptDisplay_i(),
            this.states = [new eui.State("normal", []), new eui.State("disabled", [new eui.SetProperty("textDisplay", "textColor", 16711680)]), new eui.State("normalWithPrompt", [new eui.AddItems("promptDisplay", "", 1, "")]), new eui.State("disabledWithPrompt", [new eui.AddItems("promptDisplay", "", 1, "")])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i.textDisplay_i = function() {
            var t = new eui.EditableText;
            return this.textDisplay = t,
            t.height = 24,
            t.horizontalCenter = "0",
            t.left = "10",
            t.right = "10",
            t.size = 16,
            t.textAlign = "center",
            t.textColor = 3143013,
            t.verticalCenter = "0",
            t.percentWidth = 100,
            t
        },
        i.promptDisplay_i = function() {
            var t = new eui.Label;
            return this.promptDisplay = t,
            t.fontFamily = "HuaKangXinZongYi",
            t.height = 24,
            t.horizontalCenter = 0,
            t.left = 10,
            t.right = 10,
            t.size = 16,
            t.textAlign = "center",
            t.textColor = 2966635,
            t.touchEnabled = !1,
            t.verticalCenter = 0,
            t.percentWidth = 100,
            t
        },
        e
    } (eui.Skin),
    a = function(t) {
        function e() {
            t.call(this),
            this.skinParts = ["textDisplay", "promptDisplay"],
            this.minHeight = 24,
            this.minWidth = 300,
            this.elementsContent = [this.textDisplay_i()],
            this.promptDisplay_i(),
            this.states = [new eui.State("normal", []), new eui.State("disabled", [new eui.SetProperty("textDisplay", "textColor", 16711680)]), new eui.State("normalWithPrompt", [new eui.AddItems("promptDisplay", "", 1, "")]), new eui.State("disabledWithPrompt", [new eui.AddItems("promptDisplay", "", 1, "")])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i.textDisplay_i = function() {
            var t = new eui.EditableText;
            return this.textDisplay = t,
            t.height = 24,
            t.horizontalCenter = "0",
            t.left = "10",
            t.right = "10",
            t.size = 16,
            t.textAlign = "center",
            t.textColor = 3143013,
            t.verticalCenter = "0",
            t.percentWidth = 100,
            t
        },
        i.promptDisplay_i = function() {
            var t = new eui.Label;
            return this.promptDisplay = t,
            t.fontFamily = "HuaKangXinZongYi",
            t.height = 24,
            t.horizontalCenter = 0,
            t.left = 10,
            t.right = 10,
            t.size = 16,
            t.textAlign = "center",
            t.textColor = 2966635,
            t.touchEnabled = !1,
            t.verticalCenter = 0,
            t.percentWidth = 100,
            t
        },
        e
    } (eui.Skin),
    s = function(t) {
        function e() {
            t.call(this),
            this.skinParts = ["textDisplay", "promptDisplay"],
            this.minHeight = 24,
            this.minWidth = 300,
            this.elementsContent = [this.textDisplay_i()],
            this.promptDisplay_i(),
            this.states = [new eui.State("normal", []), new eui.State("disabled", [new eui.SetProperty("textDisplay", "textColor", 16711680)]), new eui.State("normalWithPrompt", [new eui.AddItems("promptDisplay", "", 1, "")]), new eui.State("disabledWithPrompt", [new eui.AddItems("promptDisplay", "", 1, "")])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i.textDisplay_i = function() {
            var t = new eui.EditableText;
            return this.textDisplay = t,
            t.height = 24,
            t.horizontalCenter = "0",
            t.left = "10",
            t.right = "10",
            t.size = 16,
            t.textAlign = "center",
            t.textColor = 3143013,
            t.verticalCenter = "0",
            t.percentWidth = 100,
            t
        },
        i.promptDisplay_i = function() {
            var t = new eui.Label;
            return this.promptDisplay = t,
            t.fontFamily = "HuaKangXinZongYi",
            t.height = 24,
            t.horizontalCenter = 0,
            t.left = 10,
            t.right = 10,
            t.size = 16,
            t.textAlign = "center",
            t.textColor = 2966635,
            t.touchEnabled = !1,
            t.verticalCenter = 0,
            t.percentWidth = 100,
            t
        },
        e
    } (eui.Skin),
    u = function(t) {
        function e() {
            t.call(this),
            this.skinParts = ["textDisplay", "promptDisplay"],
            this.minHeight = 24,
            this.minWidth = 300,
            this.elementsContent = [this.textDisplay_i()],
            this.promptDisplay_i(),
            this.states = [new eui.State("normal", []), new eui.State("disabled", [new eui.SetProperty("textDisplay", "textColor", 16711680)]), new eui.State("normalWithPrompt", [new eui.AddItems("promptDisplay", "", 1, "")]), new eui.State("disabledWithPrompt", [new eui.AddItems("promptDisplay", "", 1, "")])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i.textDisplay_i = function() {
            var t = new eui.EditableText;
            return this.textDisplay = t,
            t.height = 24,
            t.horizontalCenter = "0",
            t.left = "10",
            t.right = "10",
            t.size = 16,
            t.textAlign = "center",
            t.textColor = 3143013,
            t.verticalCenter = "0",
            t.percentWidth = 100,
            t
        },
        i.promptDisplay_i = function() {
            var t = new eui.Label;
            return this.promptDisplay = t,
            t.fontFamily = "HuaKangXinZongYi",
            t.height = 24,
            t.horizontalCenter = 0,
            t.left = 10,
            t.right = 10,
            t.size = 16,
            t.textAlign = "center",
            t.textColor = 2966635,
            t.touchEnabled = !1,
            t.verticalCenter = 0,
            t.percentWidth = 100,
            t
        },
        e
    } (eui.Skin),
    o = e.prototype;
    return o._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 304,
        t.source = "common_texture_003_png",
        t.visible = !0,
        t.width = 486,
        t.x = 0,
        t.y = 0,
        t
    },
    o._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 175,
        t.source = "common_texture_003_png",
        t.visible = !0,
        t.width = 468,
        t.x = 9,
        t.y = 46,
        t
    },
    o._Image3_i = function() {
        var t = new eui.Image;
        return t.height = 1,
        t.source = "pet_info_view_texture_line_1_png",
        t.visible = !0,
        t.width = 220,
        t.x = 15,
        t.y = 157,
        t
    },
    o._Image4_i = function() {
        var t = new eui.Image;
        return t.height = 1,
        t.source = "pet_info_view_texture_line_1_png",
        t.width = 220,
        t.x = 250,
        t.y = 157,
        t
    },
    o._Image5_i = function() {
        var t = new eui.Image;
        return t.height = 1,
        t.source = "pet_info_view_texture_line_1_png",
        t.width = 220,
        t.x = 15,
        t.y = 108,
        t
    },
    o._Image6_i = function() {
        var t = new eui.Image;
        return t.height = 1,
        t.source = "pet_info_view_texture_line_1_png",
        t.width = 220,
        t.x = 250,
        t.y = 108,
        t
    },
    o._Image7_i = function() {
        var t = new eui.Image;
        return t.height = 20,
        t.source = "common_speed_png",
        t.width = 23,
        t.x = 30,
        t.y = 173,
        t
    },
    o._Image8_i = function() {
        var t = new eui.Image;
        return t.height = 22,
        t.source = "common_hp_png",
        t.width = 22,
        t.x = 262,
        t.y = 172,
        t
    },
    o._Image9_i = function() {
        var t = new eui.Image;
        return t.height = 23,
        t.source = "common_satk_png",
        t.width = 20,
        t.x = 32,
        t.y = 122,
        t
    },
    o._Image10_i = function() {
        var t = new eui.Image;
        return t.height = 22,
        t.source = "common_sdef_png",
        t.width = 18,
        t.x = 264,
        t.y = 123,
        t
    },
    o._Image11_i = function() {
        var t = new eui.Image;
        return t.height = 21,
        t.source = "common_def_png",
        t.width = 18,
        t.x = 264,
        t.y = 72,
        t
    },
    o._Image12_i = function() {
        var t = new eui.Image;
        return t.height = 21,
        t.source = "common_atk_png",
        t.width = 21,
        t.x = 31,
        t.y = 72,
        t
    },
    o.selectItem5_i = function() {
        var t = new eui.Group;
        return this.selectItem5 = t,
        t.x = 64,
        t.y = 171,
        t.elementsContent = [this.btnDecrease5_i(), this._Image13_i(), this.input5_i(), this.btnMax5_i(), this.btnIncrease5_i()],
        t
    },
    o.btnDecrease5_i = function() {
        var t = new eui.Image;
        return this.btnDecrease5 = t,
        t.height = 24,
        t.source = "study_pet_attribute_btnMin_png",
        t.width = 24,
        t.x = 0,
        t.y = 0,
        t
    },
    o._Image13_i = function() {
        var t = new eui.Image;
        return t.height = 24,
        t.source = "study_pet_attribute_tbg_png",
        t.width = 58,
        t.x = 26,
        t.y = 0,
        t
    },
    o.input5_i = function() {
        var t = new eui.TextInput;
        return this.input5 = t,
        t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.height = 24,
        t.maxChars = 3,
        t.name = "inputTxt_5",
        t.restrict = '"0-9"',
        t.text = "0",
        t.textColor = 3143013,
        t.width = 57,
        t.x = 27,
        t.y = 4,
        t.skinName = i,
        t
    },
    o.btnMax5_i = function() {
        var t = new eui.Image;
        return this.btnMax5 = t,
        t.height = 24,
        t.source = "study_pet_attribute_btnMax_png",
        t.width = 48,
        t.x = 118,
        t.y = 0,
        t
    },
    o.btnIncrease5_i = function() {
        var t = new eui.Image;
        return this.btnIncrease5 = t,
        t.height = 24,
        t.source = "study_pet_attribute_btnPlus_png",
        t.width = 24,
        t.x = 86,
        t.y = 0,
        t
    },
    o.selectItem0_i = function() {
        var t = new eui.Group;
        return this.selectItem0 = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.x = 295,
        t.y = 171,
        t.elementsContent = [this.btnDecrease6_i(), this._Image14_i(), this.input6_i(), this.btnMax6_i(), this.btnIncrease6_i()],
        t
    },
    o.btnDecrease6_i = function() {
        var t = new eui.Image;
        return this.btnDecrease6 = t,
        t.height = 24,
        t.source = "study_pet_attribute_btnMin_png",
        t.width = 24,
        t.x = 0,
        t.y = 0,
        t
    },
    o._Image14_i = function() {
        var t = new eui.Image;
        return t.height = 24,
        t.source = "study_pet_attribute_tbg_png",
        t.width = 58,
        t.x = 26,
        t.y = 0,
        t
    },
    o.input6_i = function() {
        var t = new eui.TextInput;
        return this.input6 = t,
        t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.height = 24,
        t.maxChars = 3,
        t.name = "inputTxt_0",
        t.restrict = '"0-9"',
        t.text = "0",
        t.textColor = 3143013,
        t.width = 57,
        t.x = 27,
        t.y = 4,
        t.skinName = n,
        t
    },
    o.btnMax6_i = function() {
        var t = new eui.Image;
        return this.btnMax6 = t,
        t.height = 24,
        t.source = "study_pet_attribute_btnMax_png",
        t.width = 48,
        t.x = 118,
        t.y = 0,
        t
    },
    o.btnIncrease6_i = function() {
        var t = new eui.Image;
        return this.btnIncrease6 = t,
        t.height = 24,
        t.source = "study_pet_attribute_btnPlus_png",
        t.width = 24,
        t.x = 86,
        t.y = 0,
        t
    },
    o.selectItem1_i = function() {
        var t = new eui.Group;
        return this.selectItem1 = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.x = 64,
        t.y = 71,
        t.elementsContent = [this.btnDecrease1_i(), this._Image15_i(), this.input1_i(), this.btnMax1_i(), this.btnIncrease1_i()],
        t
    },
    o.btnDecrease1_i = function() {
        var t = new eui.Image;
        return this.btnDecrease1 = t,
        t.height = 24,
        t.source = "study_pet_attribute_btnMin_png",
        t.width = 24,
        t.x = 0,
        t.y = 0,
        t
    },
    o._Image15_i = function() {
        var t = new eui.Image;
        return t.height = 24,
        t.source = "study_pet_attribute_tbg_png",
        t.width = 58,
        t.x = 26,
        t.y = 0,
        t
    },
    o.input1_i = function() {
        var t = new eui.TextInput;
        return this.input1 = t,
        t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.height = 24,
        t.maxChars = 3,
        t.name = "inputTxt_1",
        t.restrict = '"0-9"',
        t.text = "0",
        t.textColor = 3143013,
        t.width = 57,
        t.x = 27,
        t.y = 4,
        t.skinName = r,
        t
    },
    o.btnMax1_i = function() {
        var t = new eui.Image;
        return this.btnMax1 = t,
        t.height = 24,
        t.source = "study_pet_attribute_btnMax_png",
        t.width = 48,
        t.x = 118,
        t.y = 0,
        t
    },
    o.btnIncrease1_i = function() {
        var t = new eui.Image;
        return this.btnIncrease1 = t,
        t.height = 24,
        t.source = "study_pet_attribute_btnPlus_png",
        t.width = 24,
        t.x = 86,
        t.y = 0,
        t
    },
    o.selectItem2_i = function() {
        var t = new eui.Group;
        return this.selectItem2 = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.x = 295,
        t.y = 71,
        t.elementsContent = [this.btnDecrease2_i(), this._Image16_i(), this.input2_i(), this.btnMax2_i(), this.btnIncrease2_i()],
        t
    },
    o.btnDecrease2_i = function() {
        var t = new eui.Image;
        return this.btnDecrease2 = t,
        t.height = 24,
        t.source = "study_pet_attribute_btnMin_png",
        t.width = 24,
        t.x = 0,
        t.y = 0,
        t
    },
    o._Image16_i = function() {
        var t = new eui.Image;
        return t.height = 24,
        t.source = "study_pet_attribute_tbg_png",
        t.width = 58,
        t.x = 26,
        t.y = 0,
        t
    },
    o.input2_i = function() {
        var t = new eui.TextInput;
        return this.input2 = t,
        t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.height = 24,
        t.maxChars = 3,
        t.name = "inputTxt_2",
        t.restrict = '"0-9"',
        t.text = "0",
        t.textColor = 3143013,
        t.width = 57,
        t.x = 27,
        t.y = 4,
        t.skinName = a,
        t
    },
    o.btnMax2_i = function() {
        var t = new eui.Image;
        return this.btnMax2 = t,
        t.height = 24,
        t.source = "study_pet_attribute_btnMax_png",
        t.width = 48,
        t.x = 118,
        t.y = 0,
        t
    },
    o.btnIncrease2_i = function() {
        var t = new eui.Image;
        return this.btnIncrease2 = t,
        t.height = 24,
        t.source = "study_pet_attribute_btnPlus_png",
        t.width = 24,
        t.x = 86,
        t.y = 0,
        t
    },
    o.selectItem3_i = function() {
        var t = new eui.Group;
        return this.selectItem3 = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.x = 64,
        t.y = 122,
        t.elementsContent = [this.btnDecrease3_i(), this._Image17_i(), this.input3_i(), this.btnMax3_i(), this.btnIncrease3_i()],
        t
    },
    o.btnDecrease3_i = function() {
        var t = new eui.Image;
        return this.btnDecrease3 = t,
        t.height = 24,
        t.source = "study_pet_attribute_btnMin_png",
        t.width = 24,
        t.x = 0,
        t.y = 0,
        t
    },
    o._Image17_i = function() {
        var t = new eui.Image;
        return t.height = 24,
        t.source = "study_pet_attribute_tbg_png",
        t.width = 58,
        t.x = 26,
        t.y = 0,
        t
    },
    o.input3_i = function() {
        var t = new eui.TextInput;
        return this.input3 = t,
        t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.height = 24,
        t.maxChars = 3,
        t.name = "inputTxt_3",
        t.restrict = '"0-9"',
        t.text = "0",
        t.textColor = 3143013,
        t.width = 57,
        t.x = 27,
        t.y = 4,
        t.skinName = s,
        t
    },
    o.btnMax3_i = function() {
        var t = new eui.Image;
        return this.btnMax3 = t,
        t.height = 24,
        t.source = "study_pet_attribute_btnMax_png",
        t.width = 48,
        t.x = 118,
        t.y = 0,
        t
    },
    o.btnIncrease3_i = function() {
        var t = new eui.Image;
        return this.btnIncrease3 = t,
        t.height = 24,
        t.source = "study_pet_attribute_btnPlus_png",
        t.width = 24,
        t.x = 86,
        t.y = 0,
        t
    },
    o.selectItem4_i = function() {
        var t = new eui.Group;
        return this.selectItem4 = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.x = 295,
        t.y = 122,
        t.elementsContent = [this.btnDecrease4_i(), this._Image18_i(), this.input4_i(), this.btnMax4_i(), this.btnIncrease4_i()],
        t
    },
    o.btnDecrease4_i = function() {
        var t = new eui.Image;
        return this.btnDecrease4 = t,
        t.height = 24,
        t.source = "study_pet_attribute_btnMin_png",
        t.width = 24,
        t.x = 0,
        t.y = 0,
        t
    },
    o._Image18_i = function() {
        var t = new eui.Image;
        return t.height = 24,
        t.source = "study_pet_attribute_tbg_png",
        t.width = 58,
        t.x = 26,
        t.y = 0,
        t
    },
    o.input4_i = function() {
        var t = new eui.TextInput;
        return this.input4 = t,
        t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.height = 24,
        t.maxChars = 3,
        t.name = "inputTxt_4",
        t.restrict = '"0-9"',
        t.text = "0",
        t.textColor = 3143013,
        t.width = 57,
        t.x = 27,
        t.y = 4,
        t.skinName = u,
        t
    },
    o.btnMax4_i = function() {
        var t = new eui.Image;
        return this.btnMax4 = t,
        t.height = 24,
        t.source = "study_pet_attribute_btnMax_png",
        t.width = 48,
        t.x = 118,
        t.y = 0,
        t
    },
    o.btnIncrease4_i = function() {
        var t = new eui.Image;
        return this.btnIncrease4 = t,
        t.height = 24,
        t.source = "study_pet_attribute_btnPlus_png",
        t.width = 24,
        t.x = 86,
        t.y = 0,
        t
    },
    o._Image19_i = function() {
        var t = new eui.Image;
        return t.height = 40,
        t.source = "study_pet_attribute_bg2_png",
        t.visible = !0,
        t.width = 462,
        t.x = 12,
        t.y = 15,
        t
    },
    o._Label1_i = function() {
        var t = new eui.Label;
        return t.size = 20,
        t.text = "输入你想要的学习力",
        t.textColor = 4173823,
        t.visible = !0,
        t.x = 40,
        t.y = 26,
        t
    },
    o._Image20_i = function() {
        var t = new eui.Image;
        return t.height = 24,
        t.source = "study_pet_attribute_icon2_png",
        t.visible = !0,
        t.width = 8,
        t.x = 22,
        t.y = 23,
        t
    },
    o.txtSum_i = function() {
        var t = new eui.Label;
        return this.txtSum = t,
        t.right = 21,
        t.size = 16,
        t.text = "当前学习力总和：0",
        t.textColor = 4173823,
        t.x = 310,
        t.y = 26,
        t
    },
    o.btnOK_i = function() {
        var t = new eui.Image;
        return this.btnOK = t,
        t.height = 52,
        t.source = "study_pet_attribute_img_btnAssign_png",
        t.width = 176,
        t.x = 265,
        t.y = 233,
        t
    },
    o.btnReset_i = function() {
        var t = new eui.Image;
        return this.btnReset = t,
        t.height = 52,
        t.source = "study_pet_attribute_img_btnReset_png",
        t.width = 176,
        t.x = 45,
        t.y = 233,
        t
    },
    e
} (eui.Skin);