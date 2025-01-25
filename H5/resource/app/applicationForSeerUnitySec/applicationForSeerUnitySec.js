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
applicationForSeerUnitySec; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.skinName = "ApplicationforseerunityPop1Skin",
            e
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            var e = this;
            t.prototype.childrenCreated.call(this),
            ImageButtonUtil.add(this.btnClose,
            function() {
                e.hide()
            },
            this),
            ImageButtonUtil.add(this.btnApplay,
            function() {
                SocketConnection.sendByQueue(41388, [81, 1],
                function() {
                    Alarm.show("申请成功！成功获取资格的赛尔将可于1月3日在本界面下载测试客户端"),
                    EventManager.dispatchEventWith("applicationForSeerUnity.EVENT_HAS_APPLY_1")
                }),
                e.hide()
            },
            this)
        },
        e
    } (PopView);
    t.ApplicationforseerunityPop1 = e,
    __reflect(e.prototype, "applicationForSeerUnitySec.ApplicationforseerunityPop1")
} (applicationForSeerUnitySec || (applicationForSeerUnitySec = {}));
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
applicationForSeerUnitySec; !
function(t) {
    var e = function(t) {
        function e(e) {
            var i = t.call(this) || this;
            return i._canApply = !1,
            i._canApply = e,
            i.skinName = "ApplicationforseerunityPop2Skin",
            i
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            var e = this;
            t.prototype.childrenCreated.call(this),
            ImageButtonUtil.add(this.btnClose,
            function() {
                e.hide()
            },
            this),
            this._canApply ? (this.btnApply.source = "applicationForSeerUnity_pop2_btnApply_png", ImageButtonUtil.add(this.btnApply,
            function() {
                SocketConnection.sendByQueue(41388, [81, 2],
                function() {
                    Alarm.show("申请成功！成功获取资格的赛尔将可于1月3日在本界面下载测试客户端"),
                    EventManager.dispatchEventWith("applicationForSeerUnity.EVENT_HAS_APPLY_2")
                }),
                e.hide()
            },
            this)) : (ImageButtonUtil.remove(this.btnApply), this.btnApply.source = "applicationForSeerUnity_pop2_cannotApply_png")
        },
        e
    } (PopView);
    t.ApplicationforseerunityPop2 = e,
    __reflect(e.prototype, "applicationForSeerUnitySec.ApplicationforseerunityPop2")
} (applicationForSeerUnitySec || (applicationForSeerUnitySec = {}));
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
applicationForSeerUnitySec; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return KTool.getMultiValue([121906],
            function(t) {
                e.service.setValues([121905, 121906]),
                e.init([{
                    panelName: "applicationForSeerUnitySec.ApplicationPanel",
                    isMain: 0 == t[0]
                },
                {
                    panelName: "applicationForSeerUnitySec.ResultPanel",
                    isMain: 1 == t[0]
                }])
            }),
            e
        }
        return __extends(e, t),
        e
    } (BasicMultPanelModule);
    t.ApplicationForSeerUnitySec = e,
    __reflect(e.prototype, "applicationForSeerUnitySec.ApplicationForSeerUnitySec")
} (applicationForSeerUnitySec || (applicationForSeerUnitySec = {}));
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
applicationForSeerUnitySec; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t.hasApplyFree = !1,
            t.hasApplyNF = !1,
            t.skinName = "ApplicationforseerunitysecSkin",
            t
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            this.addEvent(),
            this.parent.x = 0,
            this.parent.y = 0
        },
        i.prototype.addEvent = function() {
            var e = this;
            ImageButtonUtil.add(this.btnClose,
            function() {
                e.service.closePanel()
            },
            this),
            ImageButtonUtil.add(this.btnBB,
            function() {
                e.service.closePanel()
            },
            this),
            ImageButtonUtil.add(this.btnInfo,
            function() {
                URLNavigationManager.NavigateTo(URLNavigationEnum.Custom, "https://www.bilibili.com/opus/1015134420437303296")
            },
            this),
            ImageButtonUtil.add(this.btnApplyFree,
            function() {
                var e = new t.ApplicationforseerunityPop1;
                PopViewManager.getInstance().openView(e)
            },
            this),
            ImageButtonUtil.add(this.btnApplyNF,
            function() {
                var e = new t.ApplicationforseerunityPop2(VipController.isCurYearVip);
                PopViewManager.getInstance().openView(e)
            },
            this),
            EventManager.addEventListener("applicationForSeerUnity.EVENT_HAS_APPLY_1",
            function(t) {
                e.service.updateValues().then(function() {
                    e.update()
                })
            },
            this),
            EventManager.addEventListener("applicationForSeerUnity.EVENT_HAS_APPLY_2",
            function(t) {
                e.service.updateValues().then(function() {
                    e.update()
                })
            },
            this)
        },
        i.prototype.update = function() {
            var t = this.service.getValue(121905);
            this.hasApplyFree = 1 == KTool.getBit(t, 1),
            this.hasApplyNF = 1 == KTool.getBit(t, 2),
            this.hasApplyNF ? (this.btnApplyFree.visible = !1, this.btnApplyNF.visible = !1, this.signHasApplyFree.visible = !0, this.signHasApplyNF.visible = !0) : (this.signHasApplyNF.visible = !1, this.hasApplyFree ? (this.btnApplyFree.visible = !1, this.signHasApplyFree.visible = !0) : this.signHasApplyFree.visible = !1),
            this.signAvoidApplyNF.visible = !1
        },
        i
    } (BasicPanel);
    t.ApplicationPanel = e,
    __reflect(e.prototype, "applicationForSeerUnitySec.ApplicationPanel")
} (applicationForSeerUnitySec || (applicationForSeerUnitySec = {}));
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
applicationForSeerUnitySec; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.skinName = "ApplicationforseerunitysecresultSkin",
            e
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this),
            this.addEvent(),
            this.parent.x = 0,
            this.parent.y = 0
        },
        e.prototype.addEvent = function() {
            var t = this;
            ImageButtonUtil.add(this.btnClose,
            function() {
                t.service.closePanel()
            },
            this),
            ImageButtonUtil.add(this.btnBB,
            function() {
                t.service.closePanel()
            },
            this),
            ImageButtonUtil.add(this.btnPC,
            function() {
                URLNavigationManager.NavigateTo(URLNavigationEnum.Custom, "https://newseer.61.com/apk/installer/SeerLauncher_setup_v1.0.0_release.exe")
            },
            this),
            ImageButtonUtil.add(this.btnTip,
            function() {
                URLNavigationManager.NavigateTo(URLNavigationEnum.Custom, "https://www.bilibili.com/opus/1018072178052038660")
            },
            this),
            ImageButtonUtil.add(this.btnInfoIOS,
            function() {
                BubblerManager.getInstance().showText("ios端测试限量10000名，满员后可选择其他端体验本次测试")
            },
            this)
        },
        e
    } (BasicPanel);
    t.ResultPanel = e,
    __reflect(e.prototype, "applicationForSeerUnitySec.ResultPanel")
} (applicationForSeerUnitySec || (applicationForSeerUnitySec = {}));
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
generateEUI.paths["resource/eui_skins/ApplicationforseerunityPop1Skin.exml"] = window.ApplicationforseerunityPop1Skin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["btnApplay", "btnClose"],
        this.height = 242,
        this.width = 600,
        this.elementsContent = [this._Image1_i(), this._Image2_i(), this.btnApplay_i(), this._Label1_i(), this._Label2_i(), this.btnClose_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 185,
        t.source = "applicationForSeerUnity_pop1_tanchuang_bg_png",
        t.width = 558,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.alpha = 0,
        t.height = 243.23,
        t.source = "applicationForSeerUnity_pop2_tanchuang_bg_2_png",
        t.width = 465.683,
        t.x = 41.246,
        t.y = 10,
        t
    },
    i.btnApplay_i = function() {
        var t = new eui.Image;
        return this.btnApplay = t,
        t.height = 43,
        t.source = "applicationForSeerUnity_pop1_btnApplay_png",
        t.width = 143,
        t.x = 208,
        t.y = 199,
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "REEJI",
        t.size = 25,
        t.text = "无门槛通道",
        t.textColor = 16777215,
        t.x = 218,
        t.y = 9,
        t
    },
    i._Label2_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "REEJI",
        t.horizontalCenter = -19.5,
        t.size = 23,
        t.text = "所有赛尔均可申请\n部分赛尔将获得测试资格",
        t.textAlign = "center",
        t.textColor = 4293583,
        t.width = 345,
        t.y = 83,
        t
    },
    i.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.height = 33,
        t.source = "common_pop_btn_close_png",
        t.width = 34,
        t.x = 566,
        t.y = 5,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/ApplicationforseerunityPop2Skin.exml"] = window.ApplicationforseerunityPop2Skin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["btnApply", "btnClose"],
        this.height = 242,
        this.width = 600,
        this.elementsContent = [this._Image1_i(), this._Image2_i(), this.btnApply_i(), this._Label1_i(), this._Label2_i(), this.btnClose_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 185,
        t.source = "applicationForSeerUnity_pop2_tanchuang_bg_2_png",
        t.width = 558,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.alpha = 0,
        t.height = 243.23,
        t.source = "applicationForSeerUnity_pop2_tanchuang_bg_2_png",
        t.width = 465.683,
        t.x = 41.246,
        t.y = 10,
        t
    },
    i.btnApply_i = function() {
        var t = new eui.Image;
        return this.btnApply = t,
        t.height = 44,
        t.source = "applicationForSeerUnity_pop2_btnApply_png",
        t.width = 143,
        t.x = 208,
        t.y = 198,
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "REEJI",
        t.size = 25,
        t.text = "年费通道",
        t.textColor = 12799263,
        t.x = 230,
        t.y = 8,
        t
    },
    i._Label2_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "REEJI",
        t.horizontalCenter = -23,
        t.size = 23,
        t.text = "仅限2025年费用户申请\n必定获得测试资格",
        t.textAlign = "center",
        t.textColor = 13596481,
        t.width = 488,
        t.y = 83,
        t.zIndex = 0,
        t
    },
    i.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.height = 33,
        t.source = "common_pop_btn_close_png",
        t.width = 34,
        t.x = 566,
        t.y = 4,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/ApplicationforseerunitysecresultSkin.exml"] = window.ApplicationforseerunitysecresultSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["btnBB", "btnClose", "btnTip", "btnPC", "btnInfoIOS"],
        this.height = 640,
        this.width = 1200,
        this.elementsContent = [this.btnBB_i(), this._Group1_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.btnBB_i = function() {
        var t = new eui.Image;
        return this.btnBB = t,
        t.alpha = 0,
        t.bottom = 0,
        t.left = 0,
        t.right = 0,
        t.source = "common_pet_half_mask_size_146_220_png",
        t.top = 0,
        t.visible = !0,
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.horizontalCenter = 0,
        t.verticalCenter = -16,
        t.elementsContent = [this._Image1_i(), this.btnClose_i(), this.btnTip_i(), this.btnPC_i(), this.btnInfoIOS_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 513,
        t.source = "ApplicationForSeerUnitySecResult_zu_144_png",
        t.visible = !0,
        t.width = 912,
        t.x = 0,
        t.y = 0,
        t
    },
    i.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.height = 27,
        t.source = "common_pop_btn_close_png",
        t.visible = !0,
        t.width = 29,
        t.x = 811,
        t.y = 122,
        t
    },
    i.btnTip_i = function() {
        var t = new eui.Image;
        return this.btnTip = t,
        t.height = 55,
        t.source = "ApplicationForSeerUnitySecResult_ljsqmmj_png",
        t.width = 179,
        t.x = 367,
        t.y = 491,
        t
    },
    i.btnPC_i = function() {
        var t = new eui.Image;
        return this.btnPC = t,
        t.height = 122,
        t.source = "ApplicationForSeerUnitySecResult_qw_xz_png",
        t.width = 123,
        t.x = 165,
        t.y = 294,
        t
    },
    i.btnInfoIOS_i = function() {
        var t = new eui.Image;
        return this.btnInfoIOS = t,
        t.alpha = 0,
        t.height = 231.23,
        t.source = "common_pet_half_mask_size_146_220_png",
        t.visible = !0,
        t.width = 210.535,
        t.x = 579.978,
        t.y = 208.28,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/ApplicationforseerunitysecSkin.exml"] = window.ApplicationforseerunitysecSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["btnBB", "btnInfo", "btnApplyFree", "signHasApplyFree", "btnApplyNF", "signHasApplyNF", "signAvoidApplyNF", "btnClose"],
        this.height = 640,
        this.width = 1200,
        this.elementsContent = [this.btnBB_i(), this._Group1_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.btnBB_i = function() {
        var t = new eui.Image;
        return this.btnBB = t,
        t.alpha = 0,
        t.bottom = 0,
        t.left = 0,
        t.right = 0,
        t.source = "common_pet_half_mask_size_146_220_png",
        t.top = 0,
        t.visible = !0,
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.horizontalCenter = 74.5,
        t.verticalCenter = -22.5,
        t.elementsContent = [this._Image1_i(), this.btnInfo_i(), this.btnApplyFree_i(), this.signHasApplyFree_i(), this.btnApplyNF_i(), this.signHasApplyNF_i(), this.signAvoidApplyNF_i(), this.btnClose_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 513,
        t.source = "ApplicationForSeerUnitySec_cszmj12y27r_png",
        t.width = 1023,
        t.x = 0,
        t.y = 0,
        t
    },
    i.btnInfo_i = function() {
        var t = new eui.Image;
        return this.btnInfo = t,
        t.source = "ApplicationForSeerUnitySec_zu_143_png",
        t.visible = !0,
        t.x = 31.94,
        t.y = 334.54,
        t
    },
    i.btnApplyFree_i = function() {
        var t = new eui.Image;
        return this.btnApplyFree = t,
        t.height = 56,
        t.source = "ApplicationForSeerUnitySec_ljsqmmj_png",
        t.visible = !0,
        t.width = 179,
        t.x = 261,
        t.y = 397,
        t
    },
    i.signHasApplyFree_i = function() {
        var t = new eui.Image;
        return this.signHasApplyFree = t,
        t.height = 55,
        t.source = "ApplicationForSeerUnitySec_ysqmmj_png",
        t.visible = !0,
        t.width = 179,
        t.x = 261,
        t.y = 398,
        t
    },
    i.btnApplyNF_i = function() {
        var t = new eui.Image;
        return this.btnApplyNF = t,
        t.height = 55,
        t.source = "ApplicationForSeerUnitySec_ljsqsh_png",
        t.visible = !0,
        t.width = 179,
        t.x = 475,
        t.y = 398,
        t
    },
    i.signHasApplyNF_i = function() {
        var t = new eui.Image;
        return this.signHasApplyNF = t,
        t.height = 55,
        t.source = "ApplicationForSeerUnitySec_ysqsh_png",
        t.visible = !0,
        t.width = 179,
        t.x = 475,
        t.y = 398,
        t
    },
    i.signAvoidApplyNF_i = function() {
        var t = new eui.Image;
        return this.signAvoidApplyNF = t,
        t.height = 55,
        t.source = "ApplicationForSeerUnitySec_mfsqsh_png",
        t.visible = !0,
        t.width = 179,
        t.x = 475,
        t.y = 398,
        t
    },
    i.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.height = 26,
        t.source = "common_pop_btn_close_png",
        t.visible = !0,
        t.width = 29,
        t.x = 871,
        t.y = 134,
        t
    },
    e
} (eui.Skin);