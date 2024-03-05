var __reflect = this && this.__reflect ||
function(i, t, e) {
    i.__class__ = t,
    e ? e.push(t) : e = [t],
    i.__types__ = i.__types__ ? e.concat(i.__types__) : e
},
__extends = this && this.__extends ||
function(i, t) {
    function e() {
        this.constructor = i
    }
    for (var n in t) t.hasOwnProperty(n) && (i[n] = t[n]);
    e.prototype = t.prototype,
    i.prototype = new e
},
signIn20220501; !
function(i) {
    var t = function(i) {
        function t() {
            var t = i.call(this) || this;
            return t.pop = new e,
            t
        }
        return __extends(t, i),
        t.prototype.childrenCreated = function() {
            var i = this;
            this.service.openPop(this.pop, !1, this.service,
            function() {
                egret.setTimeout(function() {
                    i.service.closeModule()
                },
                i, 200)
            },
            this, this)
        },
        t.prototype.update = function() {
            this.pop.update()
        },
        t
    } (BasicPanel);
    i.MainView = t,
    __reflect(t.prototype, "signIn20220501.MainView");
    var e = function(i) {
        function t() {
            var t = i.call(this) || this;
            return t.skinName = "SignIn0501Skin",
            t
        }
        return __extends(t, i),
        t.prototype.childrenCreated = function() {
            var i = this;
            ImageButtonUtil.add(this.btnClose, this.hide, this),
            ImageButtonUtil.add(this.btnHelp,
            function() {
                i.service.showHelpPop(148)
            },
            this),
            ImageButtonUtil.add(this.btnGet,
            function() {
                i.signIn(i.service.getValue(121562) + 1)
            },
            this)
        },
        t.prototype._parseData = function() {
            this.service = this._data
        },
        t.prototype.update = function() {
            var i = 1 == this.service.getValue(201551),
            t = this.service.getValue(121562),
            e = 11 == SystemTimerManager.sysBJDate.getDate();
            this.txtHas.visible = i,
            this.btnGet.visible = !i,
            this.imgToday.visible = !i || e,
            this.imgTomorrow.visible = i && !e;
            for (var n = 1; 8 >= n; n++) {
                var r = "not";
                n != t + 1 || e ? t + 1 > n && (r = "has") : r = "doing",
                this["img" + n].source = "sign_in_0501_img" + r + ( - 1 == [2, 5, 8].indexOf(n) ? 1 : 2) + "_png"
            }
            var o = -1 != [2, 5, 8].indexOf(t + (e && i ? 0 : 1));
            this.imgSpecial.visible = o;
            var s = o ? [1723167, 1, 1723854, 500, 1723855, 1e4] : [1400152, 1, 1400153, 1, 1400154, 5];
            this.groupAward.removeChildren();
            for (var n = 0; 3 > n; n++) {
                var a = new SmallItemIcon;
                this.groupAward.addChild(a);
                var u = new SmallItemIconData(s.shift());
                u.count = s.shift(),
                u.onClick = "showTip",
                a.setData(u)
            }
        },
        t.prototype.signIn = function(i) {
            var t = this;
            SocketConnection.sendByQueue(41388, [46, i],
            function() {
                t.service.updateValues().then(function() {
                    t.update()
                })
            })
        },
        t.prototype.removeEvents = function() {
            ImageButtonUtil.removeAll(this)
        },
        t
    } (PopView);
    i.Pop = e,
    __reflect(e.prototype, "signIn20220501.Pop")
} (signIn20220501 || (signIn20220501 = {}));
var __reflect = this && this.__reflect ||
function(i, t, e) {
    i.__class__ = t,
    e ? e.push(t) : e = [t],
    i.__types__ = i.__types__ ? e.concat(i.__types__) : e
},
__extends = this && this.__extends ||
function(i, t) {
    function e() {
        this.constructor = i
    }
    for (var n in t) t.hasOwnProperty(n) && (i[n] = t[n]);
    e.prototype = t.prototype,
    i.prototype = new e
},
signIn20220501; !
function(i) {
    var t = function(i) {
        function t() {
            var t = i.call(this) || this;
            return t.service.setValues([121562, 201551]),
            t.init([{
                panelName: "signIn20220501.MainView",
                isMain: !0
            }]),
            t
        }
        return __extends(t, i),
        t
    } (BasicMultPanelModule);
    i.SignIn20220501 = t,
    __reflect(t.prototype, "signIn20220501.SignIn20220501")
} (signIn20220501 || (signIn20220501 = {}));
var __extends = this && this.__extends ||
function(i, t) {
    function e() {
        this.constructor = i
    }
    for (var n in t) t.hasOwnProperty(n) && (i[n] = t[n]);
    e.prototype = t.prototype,
    i.prototype = new e
};
window.generateEUI = window.generateEUI || {},
generateEUI.paths = generateEUI.paths || {},
generateEUI.styles = void 0,
generateEUI.skins = {},
generateEUI.paths["resource/eui_skins/SignIn0501Skin.exml"] = window.SignIn0501Skin = function(i) {
    function t() {
        i.call(this),
        this.skinParts = ["imgSpecial", "imgToday", "imgTomorrow", "btnGet", "btnClose", "btnHelp", "img1", "img2", "img3", "img4", "img5", "img6", "img7", "img8", "txtHas", "groupAward"],
        this.height = 603,
        this.width = 816,
        this.elementsContent = [this._Image1_i(), this.imgSpecial_i(), this.imgToday_i(), this.imgTomorrow_i(), this.btnGet_i(), this.btnClose_i(), this.btnHelp_i(), this._Group1_i(), this.txtHas_i(), this.groupAward_i()]
    }
    __extends(t, i);
    var e = t.prototype;
    return e._Image1_i = function() {
        var i = new eui.Image;
        return i.source = "sign_in_0501_imgbg_png",
        i.x = 0,
        i.y = 0,
        i
    },
    e.imgSpecial_i = function() {
        var i = new eui.Image;
        return this.imgSpecial = i,
        i.source = "sign_in_0501_imgspecial_png",
        i.visible = !1,
        i.x = 292,
        i.y = 254,
        i
    },
    e.imgToday_i = function() {
        var i = new eui.Image;
        return this.imgToday = i,
        i.source = "sign_in_0501_imgtoday_png",
        i.visible = !1,
        i.x = 77,
        i.y = 275,
        i
    },
    e.imgTomorrow_i = function() {
        var i = new eui.Image;
        return this.imgTomorrow = i,
        i.source = "sign_in_0501_imgtomorrow_png",
        i.visible = !1,
        i.x = 77,
        i.y = 276,
        i
    },
    e.btnGet_i = function() {
        var i = new eui.Image;
        return this.btnGet = i,
        i.source = "sign_in_0501_btnget_png",
        i.x = 485,
        i.y = 417,
        i
    },
    e.btnClose_i = function() {
        var i = new eui.Image;
        return this.btnClose = i,
        i.source = "sign_in_0501_btnclose_png",
        i.x = 781,
        i.y = 122,
        i
    },
    e.btnHelp_i = function() {
        var i = new eui.Image;
        return this.btnHelp = i,
        i.source = "sign_in_0501_btnhelp_png",
        i.x = 363,
        i.y = 221,
        i
    },
    e._Group1_i = function() {
        var i = new eui.Group;
        return i.height = 30,
        i.width = 425,
        i.x = 29,
        i.y = 429,
        i.elementsContent = [this.img1_i(), this.img2_i(), this.img3_i(), this.img4_i(), this.img5_i(), this.img6_i(), this.img7_i(), this.img8_i()],
        i
    },
    e.img1_i = function() {
        var i = new eui.Image;
        return this.img1 = i,
        i.horizontalCenter = -178.5,
        i.verticalCenter = 0,
        i
    },
    e.img2_i = function() {
        var i = new eui.Image;
        return this.img2 = i,
        i.horizontalCenter = -127.5,
        i.verticalCenter = 0,
        i
    },
    e.img3_i = function() {
        var i = new eui.Image;
        return this.img3 = i,
        i.horizontalCenter = -76.5,
        i.verticalCenter = 0,
        i
    },
    e.img4_i = function() {
        var i = new eui.Image;
        return this.img4 = i,
        i.horizontalCenter = -25.5,
        i.verticalCenter = 0,
        i
    },
    e.img5_i = function() {
        var i = new eui.Image;
        return this.img5 = i,
        i.horizontalCenter = 25.5,
        i.verticalCenter = 0,
        i
    },
    e.img6_i = function() {
        var i = new eui.Image;
        return this.img6 = i,
        i.horizontalCenter = 76.5,
        i.verticalCenter = 0,
        i
    },
    e.img7_i = function() {
        var i = new eui.Image;
        return this.img7 = i,
        i.horizontalCenter = 127.5,
        i.verticalCenter = 0,
        i
    },
    e.img8_i = function() {
        var i = new eui.Image;
        return this.img8 = i,
        i.horizontalCenter = 178.5,
        i.verticalCenter = 0,
        i
    },
    e.txtHas_i = function() {
        var i = new eui.Label;
        return this.txtHas = i,
        i.fontFamily = "REEJI",
        i.size = 28,
        i.text = "今日已领取",
        i.textColor = 6789254,
        i.visible = !0,
        i.x = 542,
        i.y = 462,
        i
    },
    e.groupAward_i = function() {
        var i = new eui.Group;
        return this.groupAward = i,
        i.x = 90,
        i.y = 323,
        i.layout = this._HorizontalLayout1_i(),
        i
    },
    e._HorizontalLayout1_i = function() {
        var i = new eui.HorizontalLayout;
        return i.gap = 30,
        i
    },
    t
} (eui.Skin);