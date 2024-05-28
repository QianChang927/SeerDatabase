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
    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
    i.prototype = t.prototype,
    e.prototype = new i
},
newSeerFirstKeJin; !
function(e) {
    var t = function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return __extends(t, e),
        t.prototype.playAni = function() {
            gsap.from(this.groupLeft, {
                alpha: 0
            }),
            gsap.from(this.groupRight, {
                alpha: 0
            }),
            gsap.from(this.groupLeft, {
                x: this.groupLeft.x - 200
            }),
            gsap.from(this.groupRight, {
                x: this.groupRight.x + 200
            })
        },
        t.prototype.update = function() {},
        t
    } (eui.Component);
    e.BaseView = t,
    __reflect(t.prototype, "newSeerFirstKeJin.BaseView")
} (newSeerFirstKeJin || (newSeerFirstKeJin = {}));
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
    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
    i.prototype = t.prototype,
    e.prototype = new i
},
newSeerFirstKeJin; !
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.skinName = "NewSeerFirstRechargeMainPanelSkin",
            t
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            for (var e = this,
            t = function(t) {
                ImageButtonUtil.add(i["imgBtn" + t],
                function() {
                    e.setIndex(t)
                },
                i, !1, !1)
            },
            i = this, n = 1; 3 >= n; n++) t(n);
            this.arrView = [],
            EventManager.addEventListener("newSeerFirstKeJin.afterGet",
            function(t) {
                e.setIndex(t.data + 1),
                EventManager.dispatchEventWith("NewSeerRedPoindShow")
            },
            this),
            KTool.getMultiValue([120206, 120205],
            function(t) {
                for (var i = [], n = [], r = 1; 3 >= r; r++) i[r] = !!KTool.getBit(t[1], r),
                n[r] = t[0] >= [60, 160, 300][r - 1];
                for (var r = 1; 3 >= r; r++) if (n[r] && !i[r]) return void e.setIndex(r);
                t[0] > 160 ? e.setIndex(3) : t[0] > 60 ? e.setIndex(2) : e.setIndex(1)
            })
        },
        t.prototype.setIndex = function(e) {
            for (var t = 1; 3 >= t; t++) this["imgBtn" + t].touchEnabled = e != t,
            this["imgSelected" + t].visible = e == t;
            this.group.removeChildren();
            var i = this.getView(e);
            this.group.addChild(i),
            this.isNotFirst ? this.reShow(!1) : (this.reShow(!0), this.isNotFirst = !0)
        },
        t.prototype.getView = function(e) {
            if (this.arrView[e]) return this.arrView[e];
            var t = egret.getDefinitionByName("newSeerFirstKeJin.View" + e),
            i = new t;
            return this.arrView[e] = i,
            i
        },
        t.prototype.reShow = function(e) {
            void 0 === e && (e = !0);
            var t = this.group.getChildAt(0);
            t.update(),
            t.playAni(),
            e && (gsap.from(this.groupBottom, {
                alpha: 0
            }), gsap.from(this.groupBottom, {
                y: this.groupBottom.y + 100
            }))
        },
        t
    } (BaseModule);
    e.NewSeerFirstKeJin = t,
    __reflect(t.prototype, "newSeerFirstKeJin.NewSeerFirstKeJin")
} (newSeerFirstKeJin || (newSeerFirstKeJin = {}));
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
    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
    i.prototype = t.prototype,
    e.prototype = new i
},
newSeerFirstKeJin; !
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.skinName = "NewSeerFirstRechargeView1Skin",
            t
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            var e = this;
            this.imgHead.source = ClientConfig.getPetHeadPath(3056),
            ImageButtonUtil.add(this.btnInfo,
            function() {
                PetManager.showPetIntroduce(3056)
            },
            this),
            ImageButtonUtil.add(this.imgHead,
            function() {
                PetManager.showPetIntroduce(3056)
            },
            this),
            ImageButtonUtil.add(this.btnGo,
            function() {
                e.canGet ? e.hasGet || SocketConnection.sendByQueue(41409, [1, 1],
                function() {
                    EventManager.dispatchEvent(new egret.Event("newSeerFirstKeJin.afterGet", !1, !1, 1))
                }) : PayManager.rechargeDiamond()
            },
            this, !0, !0,
            function() {
                return ! e.hasGet
            }),
            ImageButtonUtil.add(this.imgEffect,
            function() {
                ModuleManager.ignoreReshow++,
                ModuleManager.showModule("petEffDescPanel", ["pet_eff_desc_panel"], 3056, "", AppDoStyle.NULL)
            },
            this),
            ImageButtonUtil.add(this.imgSkill,
            function() {
                tipsPop.TipsPop.openSkillPop({
                    id: 19369
                })
            },
            this),
            ImageButtonUtil.add(this.imgMark,
            function() {
                tipsPop.TipsPop.openCounterMarkPop({
                    ins: 40582
                })
            },
            this)
        },
        t.prototype.update = function() {
            var e = this;
            KTool.getMultiValue([120206, 120205],
            function(t) {
                var i = t[0];
                i = Math.max(i, 0),
                i = Math.min(i, 60),
                e.txtProgress.text = "当前已累计兑换" + i + "/60钻石",
                e.progress.value = i / 60 * 100,
                e.canGet = i >= 60,
                e.hasGet = !!KTool.getBit(t[1], 1),
                e.btnGo.source = e.hasGet ? "new_seer_first_recharge_view1imghasget_png": e.canGet ? "new_seer_first_recharge_view1_btnget_png": "new_seer_first_recharge_view1_btngo_png",
                !e.hasGet && e.canGet ? e.ani || (e.ani = SpineUtil.createAnimate("xinshouqiri"), e.ani.scaleX = e.ani.scaleY = .5, e.ani.play("lingqu", 0), e.groupRight.addChild(e.ani), e.ani.x = e.btnGo.x + e.btnGo.width / 2, e.ani.y = e.btnGo.y + e.btnGo.height / 2, e.ani.touchEnabled = e.ani.touchChildren = !1) : e.ani && e.ani.parent && (e.groupRight.removeChild(e.ani), e.ani = null)
            })
        },
        t
    } (e.BaseView);
    e.View1 = t,
    __reflect(t.prototype, "newSeerFirstKeJin.View1")
} (newSeerFirstKeJin || (newSeerFirstKeJin = {}));
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
    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
    i.prototype = t.prototype,
    e.prototype = new i
},
newSeerFirstKeJin; !
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.skinName = "NewSeerFirstRechargeView2Skin",
            t
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            var e = this;
            this.imgHead.source = ClientConfig.getPetHeadPath(3118),
            ImageButtonUtil.add(this.btnInfo,
            function() {
                PetManager.showPetIntroduce(3118)
            },
            this),
            ImageButtonUtil.add(this.imgHead,
            function() {
                PetManager.showPetIntroduce(3118)
            },
            this),
            ImageButtonUtil.add(this.btnGo,
            function() {
                e.canGet ? e.hasGet || SocketConnection.sendByQueue(41409, [1, 2],
                function() {
                    EventManager.dispatchEvent(new egret.Event("newSeerFirstKeJin.afterGet", !1, !1, 2))
                }) : PayManager.rechargeDiamond()
            },
            this, !0, !0,
            function() {
                return ! e.hasGet
            }),
            ImageButtonUtil.add(this.imgEffect,
            function() {
                ModuleManager.ignoreReshow++,
                ModuleManager.showModule("petEffDescPanel", ["pet_eff_desc_panel"], 3118, "", AppDoStyle.NULL)
            },
            this),
            ImageButtonUtil.add(this.imgSkill,
            function() {
                tipsPop.TipsPop.openSkillPop({
                    id: 19626
                })
            },
            this),
            ImageButtonUtil.add(this.imgMark,
            function() {
                tipsPop.TipsPop.openCounterMarkPop({
                    ins: 40627
                })
            },
            this)
        },
        t.prototype.update = function() {
            var e = this;
            KTool.getMultiValue([120206, 120205],
            function(t) {
                var i = t[0];
                i = Math.max(i, 0),
                i = Math.min(i, 160),
                e.txtProgress.text = "当前已累计兑换" + i + "/160钻石",
                e.progress.value = i / 160 * 100,
                e.canGet = i >= 160,
                e.hasGet = !!KTool.getBit(t[1], 2),
                e.btnGo.source = e.hasGet ? "new_seer_first_recharge_view1imghasget_png": e.canGet ? "new_seer_first_recharge_view1_btnget_png": "new_seer_first_recharge_view1_btngo_png",
                !e.hasGet && e.canGet ? e.ani || (e.ani = SpineUtil.createAnimate("xinshouqiri"), e.ani.scaleX = e.ani.scaleY = .5, e.ani.play("lingqu", 0), e.groupRight.addChild(e.ani), e.ani.x = e.btnGo.x + e.btnGo.width / 2, e.ani.y = e.btnGo.y + e.btnGo.height / 2, e.ani.touchEnabled = e.ani.touchChildren = !1) : e.ani && e.ani.parent && (e.groupRight.removeChild(e.ani), e.ani = null)
            })
        },
        t
    } (e.BaseView);
    e.View2 = t,
    __reflect(t.prototype, "newSeerFirstKeJin.View2")
} (newSeerFirstKeJin || (newSeerFirstKeJin = {}));
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
    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
    i.prototype = t.prototype,
    e.prototype = new i
},
newSeerFirstKeJin; !
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.skinName = "NewSeerFirstRechargeView3Skin",
            t
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            var e = this;
            ImageButtonUtil.add(this.btnGo,
            function() {
                e.canGet ? e.hasGet || SocketConnection.sendByQueue(41409, [1, 3],
                function() {
                    EventManager.dispatchEvent(new egret.Event("newSeerFirstKeJin.afterGet", !1, !1, 2))
                }) : PayManager.rechargeDiamond()
            },
            this, !0, !0,
            function() {
                return ! e.hasGet
            }),
            ImageButtonUtil.add(this.imgItem1,
            function() {
                tipsPop.TipsPop.openItemPop({
                    id: 1723167
                })
            },
            this),
            ImageButtonUtil.add(this.imgItem2,
            function() {
                tipsPop.TipsPop.openItemPop({
                    id: 1723255
                })
            },
            this),
            ImageButtonUtil.add(this.btnUse,
            function() {
                EventManager.dispatchEventWith("NewSeerCloseModule"),
                ModuleManager.showModuleByID(136, 1)
            },
            this)
        },
        t.prototype.update = function() {
            var e = this;
            KTool.getMultiValue([120206, 120205],
            function(t) {
                var i = t[0];
                i = Math.max(i, 0),
                i = Math.min(i, 300),
                e.txtProgress.text = "当前已累计兑换" + i + "/300钻石",
                e.progress.value = i / 300 * 100,
                e.canGet = i >= 300,
                e.hasGet = !!KTool.getBit(t[1], 3),
                e.btnGo.source = e.hasGet ? "new_seer_first_recharge_view1imghasget_png": e.canGet ? "new_seer_first_recharge_view1_btnget_png": "new_seer_first_recharge_view1_btngo_png",
                !e.hasGet && e.canGet ? e.ani || (e.ani = SpineUtil.createAnimate("xinshouqiri"), e.ani.scaleX = e.ani.scaleY = .5, e.ani.play("lingqu", 0), e.groupRight.addChild(e.ani), e.ani.x = e.btnGo.x + e.btnGo.width / 2, e.ani.y = e.btnGo.y + e.btnGo.height / 2, e.ani.touchEnabled = e.ani.touchChildren = !1) : e.ani && e.ani.parent && (e.groupRight.removeChild(e.ani), e.ani = null)
            })
        },
        t
    } (e.BaseView);
    e.View3 = t,
    __reflect(t.prototype, "newSeerFirstKeJin.View3")
} (newSeerFirstKeJin || (newSeerFirstKeJin = {}));
var __extends = this && this.__extends ||
function(e, t) {
    function i() {
        this.constructor = e
    }
    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
    i.prototype = t.prototype,
    e.prototype = new i
};
window.generateEUI = window.generateEUI || {},
generateEUI.paths = generateEUI.paths || {},
generateEUI.styles = void 0,
generateEUI.skins = {},
generateEUI.paths["resource/eui_skins/NewSeerFirstRechargeMainPanelSkin.exml"] = window.NewSeerFirstRechargeMainPanelSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["group", "imgBtn1", "imgBtn2", "imgBtn3", "imgSelected1", "imgSelected2", "imgSelected3", "groupBottom"],
        this.height = 640,
        this.width = 1472,
        this.elementsContent = [this._Image1_i(), this.group_i(), this.groupBottom_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Image1_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = 0,
        e.source = "new_seer_first_recharge_main_panel_bg_jpg",
        e.y = 0,
        e
    },
    i.group_i = function() {
        var e = new eui.Group;
        return this.group = e,
        e.right = 90,
        e.y = 82,
        e
    },
    i.groupBottom_i = function() {
        var e = new eui.Group;
        return this.groupBottom = e,
        e.right = 90,
        e.y = 510,
        e.elementsContent = [this._Image2_i(), this.imgBtn1_i(), this.imgBtn2_i(), this.imgBtn3_i(), this.imgSelected1_i(), this.imgSelected2_i(), this.imgSelected3_i()],
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "new_seer_first_recharge_main_panel_imgmenubg_png",
        e.x = 0,
        e.y = 29,
        e
    },
    i.imgBtn1_i = function() {
        var e = new eui.Image;
        return this.imgBtn1 = e,
        e.source = "new_seer_first_recharge_main_panel_imgbtn1_png",
        e.x = 367,
        e.y = 0,
        e
    },
    i.imgBtn2_i = function() {
        var e = new eui.Image;
        return this.imgBtn2 = e,
        e.source = "new_seer_first_recharge_main_panel_imgbtn2_png",
        e.x = 564,
        e.y = 10,
        e
    },
    i.imgBtn3_i = function() {
        var e = new eui.Image;
        return this.imgBtn3 = e,
        e.source = "new_seer_first_recharge_main_panel_imgbtn3_png",
        e.x = 753,
        e.y = 24,
        e
    },
    i.imgSelected1_i = function() {
        var e = new eui.Image;
        return this.imgSelected1 = e,
        e.source = "new_seer_first_recharge_main_panel_imgselected1_png",
        e.visible = !0,
        e.x = 366,
        e.y = 35,
        e
    },
    i.imgSelected2_i = function() {
        var e = new eui.Image;
        return this.imgSelected2 = e,
        e.source = "new_seer_first_recharge_main_panel_imgselected1_png",
        e.visible = !0,
        e.x = 555,
        e.y = 36,
        e
    },
    i.imgSelected3_i = function() {
        var e = new eui.Image;
        return this.imgSelected3 = e,
        e.source = "new_seer_first_recharge_main_panel_imgselected1_png",
        e.visible = !0,
        e.x = 744,
        e.y = 35,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/NewSeerFirstRechargeView1Skin.exml"] = window.NewSeerFirstRechargeView1Skin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["btnGo", "imgHead", "imgSkill", "imgMark", "imgEffect", "progress", "txtProgress", "groupRight", "btnInfo", "groupLeft"],
        this.height = 549,
        this.width = 1042,
        this.elementsContent = [this.groupRight_i(), this.groupLeft_i()]
    }
    __extends(t, e);
    var i = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["thumb"],
            this.elementsContent = [this.thumb_i()],
            this.states = [new eui.State("up", []), new eui.State("down", []), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i.thumb_i = function() {
            var e = new eui.Image;
            return this.thumb = e,
            e.source = "new_seer_first_recharge_view1_imgprogress_png",
            e
        },
        t
    } (eui.Skin),
    n = t.prototype;
    return n.groupRight_i = function() {
        var e = new eui.Group;
        return this.groupRight = e,
        e.visible = !0,
        e.x = 210,
        e.y = 0,
        e.elementsContent = [this._Image1_i(), this.btnGo_i(), this.imgHead_i(), this.imgSkill_i(), this.imgMark_i(), this.imgEffect_i(), this.progress_i(), this.txtProgress_i()],
        e
    },
    n._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "new_seer_first_recharge_view1_bg_png",
        e.visible = !0,
        e.x = 0,
        e.y = 0,
        e
    },
    n.btnGo_i = function() {
        var e = new eui.Image;
        return this.btnGo = e,
        e.x = 511,
        e.y = 356.5,
        e
    },
    n.imgHead_i = function() {
        var e = new eui.Image;
        return this.imgHead = e,
        e.height = 90,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "new_seer_first_recharge_imghead1_png",
        e.width = 90,
        e.x = 356,
        e.y = 171,
        e
    },
    n.imgSkill_i = function() {
        var e = new eui.Image;
        return this.imgSkill = e,
        e.source = "new_seer_first_recharge_view1_imgskill_png",
        e.x = 613,
        e.y = 192.5,
        e
    },
    n.imgMark_i = function() {
        var e = new eui.Image;
        return this.imgMark = e,
        e.source = "new_seer_first_recharge_view1_imgmark_png",
        e.x = 725,
        e.y = 188.5,
        e
    },
    n.imgEffect_i = function() {
        var e = new eui.Image;
        return this.imgEffect = e,
        e.source = "new_seer_first_recharge_view1_imgeffect_png",
        e.x = 498,
        e.y = 199.5,
        e
    },
    n.progress_i = function() {
        var e = new eui.ProgressBar;
        return this.progress = e,
        e.height = 15,
        e.width = 281,
        e.x = 438,
        e.y = 319,
        e.skinName = i,
        e
    },
    n.txtProgress_i = function() {
        var e = new eui.Label;
        return this.txtProgress = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "当前已累计兑换00/60钻石",
        e.textColor = 7857151,
        e.x = 474,
        e.y = 294.5,
        e
    },
    n.groupLeft_i = function() {
        var e = new eui.Group;
        return this.groupLeft = e,
        e.visible = !0,
        e.x = 0,
        e.y = -48,
        e.elementsContent = [this._Image2_i(), this.btnInfo_i()],
        e
    },
    n._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "new_seer_first_recharge_img1_png",
        e.x = 0,
        e.y = 0,
        e
    },
    n.btnInfo_i = function() {
        var e = new eui.Image;
        return this.btnInfo = e,
        e.source = "new_seer_first_recharge_view1_btninfo_png",
        e.x = 460,
        e.y = 367,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/NewSeerFirstRechargeView2Skin.exml"] = window.NewSeerFirstRechargeView2Skin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["btnGo", "imgHead", "imgSkill", "imgMark", "imgEffect", "progress", "txtProgress", "groupRight", "btnInfo", "groupLeft"],
        this.height = 449,
        this.width = 948,
        this.elementsContent = [this.groupRight_i(), this.groupLeft_i()]
    }
    __extends(t, e);
    var i = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["thumb"],
            this.elementsContent = [this.thumb_i()],
            this.states = [new eui.State("up", []), new eui.State("down", []), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i.thumb_i = function() {
            var e = new eui.Image;
            return this.thumb = e,
            e.source = "new_seer_first_recharge_view1_imgprogress_png",
            e
        },
        t
    } (eui.Skin),
    n = t.prototype;
    return n.groupRight_i = function() {
        var e = new eui.Group;
        return this.groupRight = e,
        e.x = 116,
        e.y = 0,
        e.elementsContent = [this._Image1_i(), this.btnGo_i(), this.imgHead_i(), this.imgSkill_i(), this.imgMark_i(), this.imgEffect_i(), this.progress_i(), this.txtProgress_i()],
        e
    },
    n._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "new_seer_first_recharge_view2_bg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    n.btnGo_i = function() {
        var e = new eui.Image;
        return this.btnGo = e,
        e.x = 511,
        e.y = 356,
        e
    },
    n.imgHead_i = function() {
        var e = new eui.Image;
        return this.imgHead = e,
        e.height = 90,
        e.source = "new_seer_first_recharge_imghead2_png",
        e.width = 90,
        e.x = 358,
        e.y = 172,
        e
    },
    n.imgSkill_i = function() {
        var e = new eui.Image;
        return this.imgSkill = e,
        e.source = "new_seer_first_recharge_view1_imgskill_png",
        e.x = 611,
        e.y = 191,
        e
    },
    n.imgMark_i = function() {
        var e = new eui.Image;
        return this.imgMark = e,
        e.source = "new_seer_first_recharge_view2_imgmark_png",
        e.x = 721,
        e.y = 187,
        e
    },
    n.imgEffect_i = function() {
        var e = new eui.Image;
        return this.imgEffect = e,
        e.source = "new_seer_first_recharge_view1_imgeffect_png",
        e.x = 498,
        e.y = 198,
        e
    },
    n.progress_i = function() {
        var e = new eui.ProgressBar;
        return this.progress = e,
        e.height = 15,
        e.width = 281,
        e.x = 438,
        e.y = 319,
        e.skinName = i,
        e
    },
    n.txtProgress_i = function() {
        var e = new eui.Label;
        return this.txtProgress = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "当前已累计兑换00/60钻石",
        e.textColor = 7857151,
        e.x = 474,
        e.y = 296,
        e
    },
    n.groupLeft_i = function() {
        var e = new eui.Group;
        return this.groupLeft = e,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this._Image2_i(), this.btnInfo_i()],
        e
    },
    n._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "new_seer_first_recharge_img2_png",
        e.x = 0,
        e.y = 0,
        e
    },
    n.btnInfo_i = function() {
        var e = new eui.Image;
        return this.btnInfo = e,
        e.source = "new_seer_first_recharge_view1_btninfo_png",
        e.x = 379,
        e.y = 307,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/NewSeerFirstRechargeView3Skin.exml"] = window.NewSeerFirstRechargeView3Skin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["btnGo", "imgItem2", "imgItem1", "progress", "txtProgress", "groupRight", "btnUse", "groupLeft"],
        this.height = 439,
        this.width = 920,
        this.elementsContent = [this.groupRight_i(), this.groupLeft_i()]
    }
    __extends(t, e);
    var i = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["thumb"],
            this.elementsContent = [this.thumb_i()],
            this.states = [new eui.State("up", []), new eui.State("down", []), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i.thumb_i = function() {
            var e = new eui.Image;
            return this.thumb = e,
            e.source = "new_seer_first_recharge_view1_imgprogress_png",
            e
        },
        t
    } (eui.Skin),
    n = t.prototype;
    return n.groupRight_i = function() {
        var e = new eui.Group;
        return this.groupRight = e,
        e.visible = !0,
        e.x = 88,
        e.y = 0,
        e.elementsContent = [this._Image1_i(), this.btnGo_i(), this.imgItem2_i(), this.imgItem1_i(), this.progress_i(), this.txtProgress_i(), this._Label1_i(), this._Label2_i()],
        e
    },
    n._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "new_seer_first_recharge_view3_bg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    n.btnGo_i = function() {
        var e = new eui.Image;
        return this.btnGo = e,
        e.x = 511,
        e.y = 354,
        e
    },
    n.imgItem2_i = function() {
        var e = new eui.Image;
        return this.imgItem2 = e,
        e.source = "new_seer_first_recharge_view3_imgitem2_png",
        e.x = 633,
        e.y = 195,
        e
    },
    n.imgItem1_i = function() {
        var e = new eui.Image;
        return this.imgItem1 = e,
        e.source = "new_seer_first_recharge_view3_imgitem1_png",
        e.x = 470,
        e.y = 197,
        e
    },
    n.progress_i = function() {
        var e = new eui.ProgressBar;
        return this.progress = e,
        e.height = 15,
        e.width = 281,
        e.x = 438,
        e.y = 319,
        e.skinName = i,
        e
    },
    n.txtProgress_i = function() {
        var e = new eui.Label;
        return this.txtProgress = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "当前已累计兑换00/300钻石",
        e.textColor = 7857151,
        e.x = 469,
        e.y = 296,
        e
    },
    n._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "10",
        e.textColor = 16775781,
        e.x = 518,
        e.y = 241,
        e
    },
    n._Label2_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "10",
        e.textColor = 16775781,
        e.x = 674,
        e.y = 241,
        e
    },
    n.groupLeft_i = function() {
        var e = new eui.Group;
        return this.groupLeft = e,
        e.x = 0,
        e.y = 45,
        e.elementsContent = [this._Image2_i(), this.btnUse_i()],
        e
    },
    n._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "new_seer_first_recharge_img3_png",
        e.x = 0,
        e.y = 0,
        e
    },
    n.btnUse_i = function() {
        var e = new eui.Image;
        return this.btnUse = e,
        e.source = "new_seer_first_recharge_view3_btnuse_png",
        e.x = 263,
        e.y = 356,
        e
    },
    t
} (eui.Skin);