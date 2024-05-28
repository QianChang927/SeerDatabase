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
__awaiter = this && this.__awaiter ||
function(t, e, n, i) {
    return new(n || (n = Promise))(function(o, r) {
        function a(t) {
            try {
                u(i.next(t))
            } catch(e) {
                r(e)
            }
        }
        function s(t) {
            try {
                u(i["throw"](t))
            } catch(e) {
                r(e)
            }
        }
        function u(t) {
            t.done ? o(t.value) : new n(function(e) {
                e(t.value)
            }).then(a, s)
        }
        u((i = i.apply(t, e || [])).next())
    })
},
__generator = this && this.__generator ||
function(t, e) {
    function n(t) {
        return function(e) {
            return i([t, e])
        }
    }
    function i(n) {
        if (o) throw new TypeError("Generator is already executing.");
        for (; u;) try {
            if (o = 1, r && (a = r[2 & n[0] ? "return": n[0] ? "throw": "next"]) && !(a = a.call(r, n[1])).done) return a;
            switch (r = 0, a && (n = [0, a.value]), n[0]) {
            case 0:
            case 1:
                a = n;
                break;
            case 4:
                return u.label++,
                {
                    value: n[1],
                    done: !1
                };
            case 5:
                u.label++,
                r = n[1],
                n = [0];
                continue;
            case 7:
                n = u.ops.pop(),
                u.trys.pop();
                continue;
            default:
                if (a = u.trys, !(a = a.length > 0 && a[a.length - 1]) && (6 === n[0] || 2 === n[0])) {
                    u = 0;
                    continue
                }
                if (3 === n[0] && (!a || n[1] > a[0] && n[1] < a[3])) {
                    u.label = n[1];
                    break
                }
                if (6 === n[0] && u.label < a[1]) {
                    u.label = a[1],
                    a = n;
                    break
                }
                if (a && u.label < a[2]) {
                    u.label = a[2],
                    u.ops.push(n);
                    break
                }
                a[2] && u.ops.pop(),
                u.trys.pop();
                continue
            }
            n = e.call(t, u)
        } catch(i) {
            n = [6, i],
            r = 0
        } finally {
            o = a = 0
        }
        if (5 & n[0]) throw n[1];
        return {
            value: n[0] ? n[1] : void 0,
            done: !0
        }
    }
    var o, r, a, s, u = {
        label: 0,
        sent: function() {
            if (1 & a[0]) throw a[1];
            return a[1]
        },
        trys: [],
        ops: []
    };
    return s = {
        next: n(0),
        "throw": n(1),
        "return": n(2)
    },
    "function" == typeof Symbol && (s[Symbol.iterator] = function() {
        return this
    }),
    s
},
signInActivityPopUpPanel; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.needPop = [],
            e.url = "resource/assets/Popup/",
            e.skinName = "SignInActivityPopUpPanelSkin",
            e
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            var e = this;
            t.prototype.childrenCreated.call(this),
            ImageButtonUtil.add(this.gou,
            function() {
                var t = e.curPop;
                if (!t.daily) {
                    var n = "sign_in_activity_pop_up_panel_gou_png" == e.gou.source,
                    i = SystemTimerManager.sysDate,
                    o = "SignInActivityPopUpPanel_id_" + t.id + "_" + MainManager.actorID;
                    e.gou.source = n ? "sign_in_activity_pop_up_panel_gbg_png": "sign_in_activity_pop_up_panel_gou_png",
                    egret.localStorage.setItem(o, n ? "false": i.getFullYear() + "_" + (i.getMonth() + 1) + "_" + i.getDate())
                }
            },
            this, !1),
            ImageButtonUtil.add(this.touchIma,
            function() {
                e.needPop.length > 0 ? (e.gou.source = "sign_in_activity_pop_up_panel_gbg_png", e.next()) : e.onClose()
            },
            this, !1, !1),
            this.initView()
        },
        e.prototype.initView = function() {
            var t = this,
            e = SystemTimerManager.sysDate.getTime(),
            n = config.Popup.getItems().filter(function(t) {
                var n = new Date(t.showStart.replace(/_/g, "/")).getTime(),
                i = new Date(t.showEnd.replace(/_/g, "/")).getTime();
                return e > n && i > e ? !0 : void 0
            });
            this.needPop = n.sort(function(t, e) {
                return t.num - e.num
            }),
            egret.callLater(function() {
                t.next(!1)
            },
            this, !1)
        },
        e.prototype.next = function(t) {
            return void 0 === t && (t = !0),
            __awaiter(this, void 0, void 0,
            function() {
                var e, n, i, o, r = this;
                return __generator(this,
                function(a) {
                    switch (a.label) {
                    case 0:
                        return this.needPop.length < 1 ? (this.onClose(), [2]) : (ImageButtonUtil.remove(this.touchGroup), e = this.needPop.shift(), this.curPop = e, n = SystemTimerManager.sysDate, i = "SignInActivityPopUpPanel_id_" + e.id + "_" + MainManager.actorID, o = egret.localStorage.getItem(i), this.start = e.showStart, this.end = e.showEnd, o == "onlyOnce_" + this.start + "_" + this.end || o && o == n.getFullYear() + "_" + (n.getMonth() + 1) + "_" + n.getDate() ? (this.next(t), [2]) : (e.onlyOnce ? (egret.localStorage.setItem(i, "onlyOnce_" + this.start + "_" + this.end), this.gou.visible = !1) : e.daily && (egret.localStorage.setItem(i, n.getFullYear() + "_" + (n.getMonth() + 1) + "_" + n.getDate()), this.gou.source = "sign_in_activity_pop_up_panel_gou_png"), [4, RES.getResByUrl(this.url + (e.pic + ".png"),
                        function(n) {
                            n && (!t && (r.sou0.texture = n), t && (r.sou.texture = n), t && GsapUtils.imageFadIn(r.sou0, r.sou, 1,
                            function() {
                                r.sou0.texture = n
                            },
                            r), t && gsap.from(r.mainGroup, {
                                scaleX: .6,
                                scaleY: .6,
                                duration: .2
                            }), ImageButtonUtil.add(r.touchGroup,
                            function() {
                                e["goto"].trim().length > 0 ? (r.onClose(), "2_110_type:4" == e["goto"] && StatLogger.log("20231117版本系统功能", "十二年之约", "通过强弹面板进入活动"), core.gameUtil.jumpTo(e["goto"])) : r.next(t)
                            },
                            r, !1))
                        },
                        this)]));
                    case 1:
                        return a.sent(),
                        [2]
                    }
                })
            })
        },
        e.prototype.destroy = function() {
            t.prototype.destroy.call(this),
            gsap.killTweensOf(this.mainGroup)
        },
        e
    } (BaseModule);
    t.SignInActivityPopUpPanel = e,
    __reflect(e.prototype, "signInActivityPopUpPanel.SignInActivityPopUpPanel")
} (signInActivityPopUpPanel || (signInActivityPopUpPanel = {}));
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
generateEUI.paths["resource/eui_skins/SignInActivityPopUpPanelSkin.exml"] = window.SignInActivityPopUpPanelSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["touchIma", "sou0", "sou", "touchGroup", "gou", "mainGroup"],
        this.height = 453,
        this.width = 778,
        this.elementsContent = [this.touchIma_i(), this._Group1_i()]
    }
    __extends(e, t);
    var n = e.prototype;
    return n.touchIma_i = function() {
        var t = new eui.Image;
        return this.touchIma = t,
        t.alpha = 0,
        t.height = 640,
        t.source = "common_mask_bg_s9_png",
        t.width = 1136,
        t.x = -180,
        t.y = -90,
        t
    },
    n._Group1_i = function() {
        var t = new eui.Group;
        return t.height = 453,
        t.width = 778,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this.mainGroup_i()],
        t
    },
    n.mainGroup_i = function() {
        var t = new eui.Group;
        return this.mainGroup = t,
        t.cacheAsBitmap = !0,
        t.height = 453,
        t.horizontalCenter = 0,
        t.scaleX = 1,
        t.scaleY = 1,
        t.touchChildren = !0,
        t.touchEnabled = !0,
        t.touchThrough = !0,
        t.verticalCenter = 0,
        t.width = 778,
        t.elementsContent = [this.sou0_i(), this.sou_i(), this.touchGroup_i(), this.gou_i(), this._Label1_i()],
        t
    },
    n.sou0_i = function() {
        var t = new eui.Image;
        return this.sou0 = t,
        t.bottom = 23,
        t.horizontalCenter = -12.5,
        t.touchEnabled = !1,
        t.visible = !0,
        t
    },
    n.sou_i = function() {
        var t = new eui.Image;
        return this.sou = t,
        t.bottom = 23,
        t.horizontalCenter = -12.5,
        t.touchEnabled = !1,
        t.visible = !0,
        t
    },
    n.touchGroup_i = function() {
        var t = new eui.Group;
        return this.touchGroup = t,
        t.height = 453,
        t.width = 778,
        t.x = 0,
        t.y = 0,
        t
    },
    n.gou_i = function() {
        var t = new eui.Image;
        return this.gou = t,
        t.bottom = 0,
        t.left = 659,
        t.source = "sign_in_activity_pop_up_panel_gbg_png",
        t.visible = !0,
        t
    },
    n._Label1_i = function() {
        var t = new eui.Label;
        return t.bottom = 0,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = 0,
        t.size = 18,
        t.text = "点击空白处关闭",
        t.textColor = 12900350,
        t
    },
    e
} (eui.Skin);