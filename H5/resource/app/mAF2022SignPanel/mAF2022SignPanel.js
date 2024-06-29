var __reflect = this && this.__reflect ||
function(e, n, i) {
    e.__class__ = n,
    i ? i.push(n) : i = [n],
    e.__types__ = e.__types__ ? i.concat(e.__types__) : i
},
__extends = this && this.__extends ||
function(e, n) {
    function i() {
        this.constructor = e
    }
    for (var t in n) n.hasOwnProperty(t) && (e[t] = n[t]);
    i.prototype = n.prototype,
    e.prototype = new i
},
__awaiter = this && this.__awaiter ||
function(e, n, i, t) {
    return new(i || (i = Promise))(function(s, a) {
        function r(e) {
            try {
                _(t.next(e))
            } catch(n) {
                a(n)
            }
        }
        function o(e) {
            try {
                _(t["throw"](e))
            } catch(n) {
                a(n)
            }
        }
        function _(e) {
            e.done ? s(e.value) : new i(function(n) {
                n(e.value)
            }).then(r, o)
        }
        _((t = t.apply(e, n || [])).next())
    })
},
__generator = this && this.__generator ||
function(e, n) {
    function i(e) {
        return function(n) {
            return t([e, n])
        }
    }
    function t(i) {
        if (s) throw new TypeError("Generator is already executing.");
        for (; _;) try {
            if (s = 1, a && (r = a[2 & i[0] ? "return": i[0] ? "throw": "next"]) && !(r = r.call(a, i[1])).done) return r;
            switch (a = 0, r && (i = [0, r.value]), i[0]) {
            case 0:
            case 1:
                r = i;
                break;
            case 4:
                return _.label++,
                {
                    value: i[1],
                    done: !1
                };
            case 5:
                _.label++,
                a = i[1],
                i = [0];
                continue;
            case 7:
                i = _.ops.pop(),
                _.trys.pop();
                continue;
            default:
                if (r = _.trys, !(r = r.length > 0 && r[r.length - 1]) && (6 === i[0] || 2 === i[0])) {
                    _ = 0;
                    continue
                }
                if (3 === i[0] && (!r || i[1] > r[0] && i[1] < r[3])) {
                    _.label = i[1];
                    break
                }
                if (6 === i[0] && _.label < r[1]) {
                    _.label = r[1],
                    r = i;
                    break
                }
                if (r && _.label < r[2]) {
                    _.label = r[2],
                    _.ops.push(i);
                    break
                }
                r[2] && _.ops.pop(),
                _.trys.pop();
                continue
            }
            i = n.call(e, _)
        } catch(t) {
            i = [6, t],
            a = 0
        } finally {
            s = r = 0
        }
        if (5 & i[0]) throw i[1];
        return {
            value: i[0] ? i[1] : void 0,
            done: !0
        }
    }
    var s, a, r, o, _ = {
        label: 0,
        sent: function() {
            if (1 & r[0]) throw r[1];
            return r[1]
        },
        trys: [],
        ops: []
    };
    return o = {
        next: i(0),
        "throw": i(1),
        "return": i(2)
    },
    "function" == typeof Symbol && (o[Symbol.iterator] = function() {
        return this
    }),
    o
},
mAF2022SignPanel; !
function(e) {
    var n = function(e) {
        function n() {
            var n = e.call(this) || this;
            return n.skinName = "MAF2022SignInSkin",
            n
        }
        return __extends(n, e),
        n.prototype.showGotMask = function(e) {
            this["btn" + e].touchEnabled = this["btn" + e].touchChildren = !1,
            this["mask" + e].visible = !0,
            this["passSgin" + e].visible = !1,
            this["gotSign" + e].visible = !0
        },
        n.prototype.showPassMask = function(e) {
            this["btn" + e].touchEnabled = this["btn" + e].touchChildren = !1,
            this["mask" + e].visible = !0,
            this["passSgin" + e].visible = !0,
            this["gotSign" + e].visible = !1
        },
        n.prototype.childrenCreated = function() {
            var e = this;
            this.img.pixelHitTest = !0,
            EventManager.once(ModuleEvent.OPEN_MODULE,
            function() {
                LevelManager.appLevel.getChildByName("sp").addEventListener(egret.TouchEvent.TOUCH_TAP, e.onClose, e)
            },
            this),
            KTool.getMultiValue([121535],
            function(n) {
                for (var i = 1; 3 >= i; i++) if (1 == KTool.getBit(n[0], i)) e.showGotMask(i);
                else if (SystemTimerManager.sysDate.getDate() > new Date("2022/9/" + (9 + i).toString()).getDate()) e.showPassMask(i);
                else if (e["mask" + i].visible = !1, e["passSgin" + i].visible = !1, e["gotSign" + i].visible = !1, SystemTimerManager.sysDate.getDate() == new Date("2022/9/" + (9 + i).toString()).getDate()) switch (i) {
                case 1:
                    e.playAni("0910", i);
                    break;
                default:
                    e.playAni("091112", i)
                }
            }),
            ImageButtonUtil.add(this.btnClose,
            function() {
                e.onClose()
            },
            this),
            ImageButtonUtil.add(this.btn1,
            function() {
                e.receiveGift(1)
            },
            this),
            ImageButtonUtil.add(this.btn2,
            function() {
                e.receiveGift(2)
            },
            this),
            ImageButtonUtil.add(this.btn3,
            function() {
                e.receiveGift(3)
            },
            this)
        },
        n.prototype.receiveGift = function(e) {
            SystemTimerManager.sysDate.getDate() < new Date("2022/9/" + (9 + e).toString()).getDate() ? BubblerManager.getInstance().showText("还未到达领取日期哦！") : SystemTimerManager.sysDate.getDate() == new Date("2022/9/" + (9 + e).toString()).getDate() && (SocketConnection.sendByQueue(41388, [52, e]), this.removeAnim(e), this.showGotMask(e))
        },
        n.prototype.playAni = function(e, n) {
            return __awaiter(this, void 0, void 0,
            function() {
                var i = this;
                return __generator(this,
                function(t) {
                    return this.ani = SpineUtil.createAnimate("zhongqiuqiandao"),
                    [2, new Promise(function(t, s) {
                        i["btn" + n].addChild(i.ani),
                        i.ani.x += i["btn" + n].width / 2,
                        i.ani.y += i["btn" + n].height / 2,
                        i.ani.touchChildren = i.ani.touchEnabled = !1;
                        i.ani.play(e, 0);
                        t()
                    })]
                })
            })
        },
        n.prototype.removeAnim = function(e) {
            this["btn" + e].removeChild(this.ani)
        },
        n.prototype.destroy = function() {
            LevelManager.appLevel.getChildByName("sp").removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClose, this),
            e.prototype.destroy.call(this)
        },
        n
    } (BaseModule);
    e.MAF2022SignPanel = n,
    __reflect(n.prototype, "mAF2022SignPanel.MAF2022SignPanel")
} (mAF2022SignPanel || (mAF2022SignPanel = {}));
var __extends = this && this.__extends ||
function(e, n) {
    function i() {
        this.constructor = e
    }
    for (var t in n) n.hasOwnProperty(t) && (e[t] = n[t]);
    i.prototype = n.prototype,
    e.prototype = new i
};
window.generateEUI = window.generateEUI || {},
generateEUI.paths = generateEUI.paths || {},
generateEUI.styles = void 0,
generateEUI.skins = {},
generateEUI.paths["resource/eui_skins/MAF2022SignInSkin.exml"] = window.MAF2022SignInSkin = function(e) {
    function n() {
        e.call(this),
        this.skinParts = ["img", "btnClose", "mask1", "passSgin1", "gotSign1", "btn1", "mask2", "passSgin2", "gotSign2", "btn2", "mask3", "passSgin3", "gotSign3", "btn3"],
        this.height = 590,
        this.width = 922,
        this.elementsContent = [this.img_i(), this.btnClose_i(), this.btn1_i(), this.btn2_i(), this.btn3_i()]
    }
    __extends(n, e);
    var i = n.prototype;
    return i.img_i = function() {
        var e = new eui.Image;
        return this.img = e,
        e.source = "m_a_f2022_sign_in_img_png",
        e.visible = !0,
        e.x = 0,
        e.y = 0,
        e
    },
    i.btnClose_i = function() {
        var e = new eui.Image;
        return this.btnClose = e,
        e.source = "m_a_f2022_sign_in_btnclose_png",
        e.x = 816,
        e.y = 63,
        e
    },
    i.btn1_i = function() {
        var e = new eui.Group;
        return this.btn1 = e,
        e.visible = !0,
        e.x = 406.46,
        e.y = 233.88,
        e.elementsContent = [this._Image1_i(), this._Image2_i(), this._Image3_i(), this.mask1_i(), this.passSgin1_i(), this.gotSign1_i()],
        e
    },
    i._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "m_a_f2022_sign_in_btn1_png",
        e.visible = !0,
        e.x = .54,
        e.y = 9.12,
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "m_a_f2022_sign_in_btn1_png",
        e.visible = !0,
        e.x = 0,
        e.y = 10,
        e
    },
    i._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "m_a_f2022_sign_in_t1_png",
        e.x = 23,
        e.y = 96,
        e
    },
    i.mask1_i = function() {
        var e = new eui.Image;
        return this.mask1 = e,
        e.bottom = 0,
        e.left = -2,
        e.right = 6,
        e.scale9Grid = new egret.Rectangle(20, 41, 5, 41),
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "m_a_f2022_sign_in_mm_png",
        e.top = 6,
        e.visible = !0,
        e
    },
    i.passSgin1_i = function() {
        var e = new eui.Image;
        return this.passSgin1 = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "m_a_f2022_sign_in_passsgin_png",
        e.visible = !1,
        e.x = 137,
        e.y = 49,
        e
    },
    i.gotSign1_i = function() {
        var e = new eui.Image;
        return this.gotSign1 = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "m_a_f2022_sign_in_gotsign_png",
        e.visible = !1,
        e.x = 137,
        e.y = 50,
        e
    },
    i.btn2_i = function() {
        var e = new eui.Group;
        return this.btn2 = e,
        e.visible = !0,
        e.x = 407,
        e.y = 367,
        e.elementsContent = [this._Image4_i(), this._Image5_i(), this._Image6_i(), this.mask2_i(), this.passSgin2_i(), this.gotSign2_i()],
        e
    },
    i._Image4_i = function() {
        var e = new eui.Image;
        return e.source = "m_a_f2022_sign_in_btn2_png",
        e.visible = !0,
        e.x = 0,
        e.y = 0,
        e
    },
    i._Image5_i = function() {
        var e = new eui.Image;
        return e.source = "m_a_f2022_sign_in_btn2_png",
        e.visible = !0,
        e
    },
    i._Image6_i = function() {
        var e = new eui.Image;
        return e.source = "m_a_f2022_sign_in_t2_png",
        e.visible = !0,
        e.x = 23,
        e.y = 82,
        e
    },
    i.mask2_i = function() {
        var e = new eui.Image;
        return this.mask2 = e,
        e.height = 122.244,
        e.scale9Grid = new egret.Rectangle(20, 41, 4, 41),
        e.source = "m_a_f2022_sign_in_mm_png",
        e.visible = !0,
        e.width = 207.54,
        e.x = -2.54,
        e.y = -3.253,
        e
    },
    i.passSgin2_i = function() {
        var e = new eui.Image;
        return this.passSgin2 = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "m_a_f2022_sign_in_passsgin_png",
        e.visible = !1,
        e.x = 29,
        e.y = 46,
        e
    },
    i.gotSign2_i = function() {
        var e = new eui.Image;
        return this.gotSign2 = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "m_a_f2022_sign_in_gotsign_png",
        e.visible = !1,
        e.x = 29,
        e.y = 47,
        e
    },
    i.btn3_i = function() {
        var e = new eui.Group;
        return this.btn3 = e,
        e.x = 614,
        e.y = 367,
        e.elementsContent = [this._Image7_i(), this._Image8_i(), this._Image9_i(), this.mask3_i(), this.passSgin3_i(), this.gotSign3_i()],
        e
    },
    i._Image7_i = function() {
        var e = new eui.Image;
        return e.source = "m_a_f2022_sign_in_btn2_png",
        e.visible = !0,
        e.x = 0,
        e.y = 0,
        e
    },
    i._Image8_i = function() {
        var e = new eui.Image;
        return e.source = "m_a_f2022_sign_in_btn2_png",
        e.visible = !0,
        e.x = 0,
        e.y = 0,
        e
    },
    i._Image9_i = function() {
        var e = new eui.Image;
        return e.source = "m_a_f2022_sign_in_t3_png",
        e.x = 23,
        e.y = 83,
        e
    },
    i.mask3_i = function() {
        var e = new eui.Image;
        return this.mask3 = e,
        e.height = 123,
        e.scale9Grid = new egret.Rectangle(20, 41, 4, 41),
        e.source = "m_a_f2022_sign_in_mm_png",
        e.visible = !0,
        e.width = 205.04,
        e.x = -3.04,
        e.y = -4.12,
        e
    },
    i.passSgin3_i = function() {
        var e = new eui.Image;
        return this.passSgin3 = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "m_a_f2022_sign_in_passsgin_png",
        e.visible = !1,
        e.x = 34,
        e.y = 46,
        e
    },
    i.gotSign3_i = function() {
        var e = new eui.Image;
        return this.gotSign3 = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "m_a_f2022_sign_in_gotsign_png",
        e.visible = !1,
        e.x = 34,
        e.y = 47,
        e
    },
    n
} (eui.Skin);