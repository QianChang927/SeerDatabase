var __reflect = this && this.__reflect ||
function(e, t, n) {
    e.__class__ = t,
    n ? n.push(t) : n = [t],
    e.__types__ = e.__types__ ? n.concat(e.__types__) : n
},
__extends = this && this.__extends ||
function(e, t) {
    function n() {
        this.constructor = e
    }
    for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
    n.prototype = t.prototype,
    e.prototype = new n
},
newSeerWelfare; !
function(e) {
    var t = function(e) {
        function t(t) {
            var n = e.call(this) || this;
            return n.rbbuttons = [],
            n.allIndex = [],
            n.panelNames = [],
            n.panelsID = [],
            n.panels = {},
            n.value = t,
            n.skinName = "NewSeerWelfareSkin",
            n
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            var e = this;
            if (this.animPlay(), this.initData(), this.rbGroup.selectedValue = this.curTab = 1, this.addEvent(), this.btnLeftAnim.play("zuoce", 0), this.value) for (var t = function(t) {
                if (n.rbbuttons[t].currentState = "up", n.items[t].Go == n.value.moduleID) {
                    var i = n.items[t].id,
                    r = n.panelsID.indexOf(i);
                    return egret.setTimeout(function() {
                        e.openPanel(r)
                    },
                    n, 50),
                    n.rbGroup.selectedValue = n.curTab = r + 1,
                    n.rbbuttons[t].currentState = "down",
                    "break"
                }
            },
            n = this, i = 0; i < this.items.length; i++) {
                var r = t(i);
                if ("break" === r) break
            } else egret.setTimeout(function() {
                e.openPanel(0)
            },
            this, 50)
        },
        t.prototype.animPlay = function() {
            this.btnLeftAnim = SpineUtil.createAnimate("xinshouqiri"),
            this.grpLeft.addChild(this.btnLeftAnim),
            this.btnLeftAnim.touchChildren = !1,
            this.btnLeftAnim.touchEnabled = !1,
            this.btnLeftAnim.scaleX = this.btnLeftAnim.scaleY = .5,
            this.btnLeftAnim.x = 28,
            this.btnLeftAnim.y = 117,
            gsap.from(this.grpLeft, {
                alpha: 0,
                left: this.grpLeft.left - 50,
                duration: 1,
                ease: egret.Ease.quartInOut
            })
        },
        t.prototype.reshow = function() {
            this.grpContainer.getChildAt(0).visible = !0,
            this.grpContainer.getChildAt(0).reShow(),
            this.redPointShow()
        },
        t.prototype.initData = function() {
            this.grpLeft.left = this.grpLeft.x,
            this.adaptLeftContent(this.grpLeft),
            this.items = config.NewSeerWelfare.getItems().filter(function(e) {
                var t = SystemTimerManager.sysBJDate.getTime();
                if ("" != e.beginning) {
                    var n = new Date(e.beginning.replace(/_/g, "/")).getTime(),
                    i = new Date(e.ending.replace(/_/g, "/")).getTime();
                    return t >= n && i >= t
                }
                return e
            }).sort(function(e, t) {
                return e.sorting - t.sorting
            });
            for (var e = 0; e < this.items.length; e++) {
                this.panelsID[e] = this.items[e].id;
                var t = EXML.parse('					\n                <e:RadioButton id="rb_x' + (e + 1) + '" groupName="draw_tab" value="1" visible="true" x="0" y="0" width = "214" height = "122" xmlns:e="http://ns.egret.com/eui">\n                    <e:skinName>\n                        <e:Skin states="up,down,disabled" xmlns:e="http://ns.egret.com/eui" >\n                        <e:Image includeIn="down" x="-31" y="-14" source="markdraw_main_panel2_selected_png"/>\n                        <e:Image id="redPoint" source="nns7s_main_panel_redpoint_png" x="105" y="-8" />\n                        <e:Label x="19" y="4" size="22" fontFamily="MFShangHei" text="' + ["七日签到", "首充好礼", "新兵专享"][e] + '"\n                            textColor="0xa5c6ff" textColor.down="0xFFFFFF"/>\n                        </e:Skin>\n                    </e:skinName>\n                </e:RadioButton>'),
                n = new t;
                this.rbGroup = n.group,
                n.value = e + 1,
                n.currentState = 0 == e ? "down": "up",
                this.leftRb.addChild(n),
                n.visible = !0,
                n.x = 41,
                n.y = 79 * e + 15,
                this.rbbuttons.push(n)
            }
            this.redPointShow()
        },
        t.prototype.redPointShow = function() {
            var e = this;
            KTool.getMultiValue([120204, 120205, 120206, 120208],
            function(t) {
                for (var n = 0; n < e.items.length; n++) if (e.leftRb.getChildAt(n).redPoint.visible = !1, 1 == e.items[n].redPointID) {
                    for (var i = 1; i <= t[3]; i++) if (0 == KTool.getBit(t[0], i)) {
                        e.leftRb.getChildAt(n).redPoint.visible = !0;
                        break
                    }
                } else if (2 == e.items[n].redPointID) for (var r = [60, 160, 300], i = 1; 3 >= i; i++) if (0 == KTool.getBit(t[1], i) && t[2] >= r[i - 1]) {
                    e.leftRb.getChildAt(n).redPoint.visible = !0;
                    break
                }
                EventManager.dispatchEventWith(ToolBarPointConst.CHECK_RED_POINT_CHANGE_AGAIN, !1, {
                    id: 2
                })
            })
        },
        t.prototype.openPanel = function(e) {
            var t, n = this;
            this.allIndex.indexOf(e) >= 0 ? t = !1 : (t = !0, this.allIndex.push(e));
            var i = config.NewSeerWelfare.getItem(this.panelsID[e]);
            if (i.Go && t) this.grpContainer.removeChildren(),
            ModuleManager.showModuleByID(i.Go, null, AppDoStyle.NULL, this.grpContainer).then(function() {
                if (0 != n.grpContainer.numChildren) {
                    var e = n.grpContainer.getChildAt(0);
                    e.name = i.name,
                    n.panelNames.push(e)
                }
            });
            else {
                this.grpContainer.removeChildren();
                for (var r = 0; r < this.panelNames.length; r++) this.panelNames[r].name == i.name && (this.grpContainer.addChild(this.panelNames[r]), this.grpContainer.getChildAt(0).reShow())
            }
        },
        t.prototype.onChangeTab = function() {
            this.curTab = ~~this.rbGroup.selectedValue;
            for (var e = 0; e < this.items.length; e++) this.rbbuttons[e].currentState = e + 1 == this.curTab ? "down": "up";
            this.btnLeftAnim.y = 117 + 79 * (this.curTab - 1),
            this.btnLeftAnim.play("zuoce", 0),
            this.openPanel(this.curTab - 1),
            2 == this.curTab && this.redPointShow()
        },
        t.prototype.addEvent = function() {
            var e = this;
            this.rbGroup.addEventListener(egret.Event.CHANGE, this.onChangeTab, this),
            ImageButtonUtil.add(this.btnClose,
            function() {
                e.service.closeModule()
            },
            this),
            EventManager.addEventListener("NewSeerRedPoindShow", this.redPointShow, this),
            EventManager.addEventListener("NewSeerCloseModule",
            function() {
                e.service.closeModule()
            },
            this);
            for (var t = 0; t < this.items.length; t++) this.rbbuttons[t].addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this)
        },
        t.prototype.onTouchBegin = function(e) {
            var t = e.currentTarget,
            n = t.width,
            i = t.height,
            r = Math.max(n, i);
            r = Math.min(Math.max(90, r), 678);
            MathUtil.lerp(678, .98, 90, .95, r);
            this.curSX = t.scaleX,
            this.curSY = t.scaleY,
            this.curBtn = t,
            DisplayUtil.setColor(t, DisplayUtil.COLOR_GRAY),
            t.stage.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this)
        },
        t.prototype.onTouchEnd = function(e) {
            this.curBtn && (this.curBtn.scaleX = this.curSX, this.curBtn.scaleY = this.curSY, this.curBtn.filters = [], this.curBtn = null)
        },
        t.prototype.destroy = function() {
            this.rbGroup.removeEventListener(egret.Event.CHANGE, this.onChangeTab, this),
            e.prototype.destroy.call(this);
            for (var t = 0; t < this.panelsID.length; t++) {
                var n = config.NewSeerWelfare.getItem(this.panelsID[t]),
                i = config.Module.getItem(n.Go);
                ModuleManager.hideModule(i.moduleName)
            }
            EventManager.removeAll(this),
            this.panels = null
        },
        t
    } (BasicPanel);
    e.MainPanel = t,
    __reflect(t.prototype, "newSeerWelfare.MainPanel")
} (newSeerWelfare || (newSeerWelfare = {}));
var __reflect = this && this.__reflect ||
function(e, t, n) {
    e.__class__ = t,
    n ? n.push(t) : n = [t],
    e.__types__ = e.__types__ ? n.concat(e.__types__) : n
},
newSeerWelfare; !
function(e) {
    var t = function() {
        function e() {}
        return e.MAIN_PANEL = "newSeerWelfare.MainPanel",
        e
    } ();
    e.ModuleConst = t,
    __reflect(t.prototype, "newSeerWelfare.ModuleConst")
} (newSeerWelfare || (newSeerWelfare = {}));
var __reflect = this && this.__reflect ||
function(e, t, n) {
    e.__class__ = t,
    n ? n.push(t) : n = [t],
    e.__types__ = e.__types__ ? n.concat(e.__types__) : n
},
__extends = this && this.__extends ||
function(e, t) {
    function n() {
        this.constructor = e
    }
    for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
    n.prototype = t.prototype,
    e.prototype = new n
},
newSeerWelfare; !
function(e) {
    var t = function(t) {
        function n(n) {
            var i = t.call(this) || this;
            return i.service.setValues(),
            i.init([{
                panelName: e.ModuleConst.MAIN_PANEL,
                isMain: !0,
                defaultParam: n
            }]),
            i
        }
        return __extends(n, t),
        n.prototype.reShow = function() {
            this.currentPanel.reshow()
        },
        n
    } (BasicMultPanelModule);
    e.NewSeerWelfare = t,
    __reflect(t.prototype, "newSeerWelfare.NewSeerWelfare")
} (newSeerWelfare || (newSeerWelfare = {}));
var __extends = this && this.__extends ||
function(e, t) {
    function n() {
        this.constructor = e
    }
    for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
    n.prototype = t.prototype,
    e.prototype = new n
};
window.generateEUI = window.generateEUI || {},
generateEUI.paths = generateEUI.paths || {},
generateEUI.styles = void 0,
generateEUI.skins = {},
generateEUI.paths["resource/eui_skins/NewSeerWelfareSkin.exml"] = window.NewSeerWelfareSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["grpContainer", "btnClose", "leftRb", "grpLeft"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.grpContainer_i(), this.grpLeft_i()]
    }
    __extends(t, e);
    var n = t.prototype;
    return n.grpContainer_i = function() {
        var e = new eui.Group;
        return this.grpContainer = e,
        e.percentHeight = 100,
        e.visible = !0,
        e.percentWidth = 100,
        e.x = 0,
        e.y = 0,
        e
    },
    n.grpLeft_i = function() {
        var e = new eui.Group;
        return this.grpLeft = e,
        e.visible = !0,
        e.width = 214,
        e.x = 7,
        e.y = 0,
        e.elementsContent = [this._Image1_i(), this._Image2_i(), this._Image3_i(), this.btnClose_i(), this._Scroller1_i()],
        e
    },
    n._Image1_i = function() {
        var e = new eui.Image;
        return e.height = 640,
        e.scale9Grid = new egret.Rectangle(31, 213, 1, 214),
        e.source = "markdraw_main_panel2_heise_png",
        e.visible = !0,
        e.width = 545,
        e.x = -350,
        e
    },
    n._Image2_i = function() {
        var e = new eui.Image;
        return e.scale9Grid = new egret.Rectangle(16, 213, 4, 214),
        e.source = "markdraw_main_panel2_juxing_1_png",
        e.visible = !0,
        e.width = 545,
        e.x = -350,
        e.y = 0,
        e
    },
    n._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "markdraw_main_panel2_xian_png",
        e.visible = !0,
        e.x = 20,
        e.y = 57,
        e
    },
    n.btnClose_i = function() {
        var e = new eui.Group;
        return this.btnClose = e,
        e.x = 0,
        e.y = 5,
        e.elementsContent = [this._Image4_i()],
        e
    },
    n._Image4_i = function() {
        var e = new eui.Image;
        return e.source = "new_seer_welfare_btnback_png",
        e.x = 14,
        e.y = 0,
        e
    },
    n._Scroller1_i = function() {
        var e = new eui.Scroller;
        return e.height = 530,
        e.scaleX = 1,
        e.scaleY = 1,
        e.scrollPolicyH = "off",
        e.width = 214,
        e.x = -10,
        e.y = 86,
        e.viewport = this.leftRb_i(),
        e
    },
    n.leftRb_i = function() {
        var e = new eui.Group;
        return this.leftRb = e,
        e.x = 42,
        e.y = 20,
        e.layout = this._BasicLayout1_i(),
        e
    },
    n._BasicLayout1_i = function() {
        var e = new eui.BasicLayout;
        return e
    },
    t
} (eui.Skin);