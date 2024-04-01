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
activityCenter; !
function(t) {
    var e = function(e) {
        function i(i) {
            var n = e.call(this) || this;
            return n.service.setValues(),
            n.init([{
                panelName: t.ModuleConst.MAIN_PANEL,
                isMain: !0,
                defaultParam: i
            }]),
            n
        }
        return __extends(i, e),
        i.prototype.reShow = function() {
            this.currentPanel.reshow()
        },
        i.prototype.destroy = function() {
            e.prototype.destroy.call(this)
        },
        i
    } (BasicMultPanelModule);
    t.ActivityCenter = e,
    __reflect(e.prototype, "activityCenter.ActivityCenter")
} (activityCenter || (activityCenter = {}));
var __reflect = this && this.__reflect ||
function(t, e, i) {
    t.__class__ = e,
    i ? i.push(e) : i = [e],
    t.__types__ = t.__types__ ? i.concat(t.__types__) : i
},
activityCenter; !
function(t) {
    var e = function() {
        function t() {}
        return t.CommunitySubscribeCondition = function() {
            return ! 1
        },
        t.CommunityCondition1 = function() {
            return null == AnnouncementManager.tempInfo.LatestRecommend && null == AnnouncementManager.tempInfo.CommunityActivity && AnnouncementManager.getServerItems(),
            null != AnnouncementManager.tempInfo.LatestRecommend
        },
        t.CommunityCondition2 = function() {
            return null != AnnouncementManager.tempInfo.CommunityActivity
        },
        t.CommunityCondition3 = function() {
            return ! 0
        },
        t
    } ();
    t.DisplayCondition = e,
    __reflect(e.prototype, "activityCenter.DisplayCondition")
} (activityCenter || (activityCenter = {}));
var __reflect = this && this.__reflect ||
function(t, e, i) {
    t.__class__ = e,
    i ? i.push(e) : i = [e],
    t.__types__ = t.__types__ ? i.concat(t.__types__) : i
},
activityCenter; !
function(t) {
    var e = function() {
        function t() {}
        return t.MAIN_PANEL = "activityCenter.MainPanel",
        t
    } ();
    t.ModuleConst = e,
    __reflect(e.prototype, "activityCenter.ModuleConst")
} (activityCenter || (activityCenter = {}));
var __reflect = this && this.__reflect ||
function(t, e, i) {
    t.__class__ = e,
    i ? i.push(e) : i = [e],
    t.__types__ = t.__types__ ? i.concat(t.__types__) : i
},
activityCenter; !
function(t) {
    var e = function() {
        function t() {}
        return t.redDotIdxArr = {
            1 : 1006,
            12.1 : 2015,
            12.2 : 2016,
            12.3 : 2017,
            6 : 1004
        },
        t
    } ();
    t.RedDotRules = e,
    __reflect(e.prototype, "activityCenter.RedDotRules")
} (activityCenter || (activityCenter = {}));
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
activityCenter; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t.isOpen = !1,
            t.hasfirstEnter = !1,
            t.curHotCnt = 0,
            t.skinName = "ActivityCenterButtonSkin",
            t.once(egret.Event.REMOVED_FROM_STAGE, t.destroy, t),
            EventManager.addEventListener("ActivityCenterButton_closeAni",
            function() {
                t.isOpen && t.closeAni()
            },
            t),
            t
        }
        return __extends(i, e),
        i.prototype.setData = function(e, i, n) {
            var r = this,
            a = config.ActivityCenter.getItem(e);
            this.id = a.id,
            EventManager.addEventListener("ActivityCenterButton_openAni_" + this.id,
            function() {
                r.openAni(),
                r.hasfirstEnter || (r.hasfirstEnter = !0, ImageButtonUtil.add(r.rb_x, r.checkCurTab, r, !1, !1))
            },
            this),
            EventManager.addEventListener("ActivityCenterButton_getCurTab",
            function(t) {
                r.activityTab = t.data
            },
            this);
            var o = ("resource/assets/activityCenterRbButton/" + a.name, '<?xml version="1.0" encoding="utf-8" ?>\n            <e:Skin states="up,down,disabled" height="80" id="rb_x' + (i + 1) + '" xmlns:e="http://ns.egret.com/eui" >\n            <e:Image x="-6" verticalCenter="0" source="activity_center_main_panel2_dot_png"/>\n            <e:Image includeIn="down" x="-31" verticalCenter="0"  source="activity_center_main_panel2_selected_png"/>\n            <e:Label x="19" y="4" size="22" height="70" verticalAlign="middle" fontFamily="MFShangHei" text="' + a.labelName + '"\n                textColor="0xa5c6ff" textColor.down="0xFFFFFF"/>\n            </e:Skin>');
            if (this.rb_x.skinName = o, this.name = a.name, this.rb_x.groupName = "ActivityCenter_group", this._scr.height = 0, this.rb_x.value = "" + (i + 1), "" != a.pageChildrenName.trim()) {
                for (var s = a.pageChildrenName.split("#"), l = s[1], c = s[0].split("_"), h = 0, u = !1, d = function(e) {
                    var n = c[e].split("&"),
                    o = '<?xml version="1.0" encoding="utf-8" ?>\n                    <e:Skin states="up,down,disabled" id="rb_x' + (i + 1) + '" xmlns:e="http://ns.egret.com/eui" >\n                    <e:Label text="' + n[0] + '" fontFamily="MFShangHei" textColor.up="0x859fd3"\n                                     textColor.down="0x3fe3fa" size="18" strokeColor.down="0x3FE3FA" stroke.down="0.1"\n                                     x="0" y="0" width="125" height="40" textAlign="center" verticalAlign="middle" />\n                    </e:Skin>',
                    s = new eui.RadioButton;
                    if (s.skinName = o, s.groupName = l, s.value = n[1], n.length >= 3) {
                        var d = n[2];
                        if (!t.DisplayCondition[d]()) return h++,
                        "continue"
                    }
                    p.childGroup.addChild(s),
                    0 == u && (p.radioGroup = s.group, p.radioGroup.selectedValue = s.value, p.radioGroup.addEventListener(egret.Event.CHANGE, p.onChangeTab, p), u = !0);
                    var _ = t.RedDotRules.redDotIdxArr[a.id + .1 * parseFloat(n[1])];
                    if (_) {
                        var v = new eui.Image("dot_png");
                        v.width = v.height = 20,
                        v.x = 105,
                        s.addChild(v),
                        -1 == _ || (HotRedManager.getInstance().registerHotEvent(_,
                        function(t) {
                            v.visible = !!t,
                            0 == !!t && (r.curHotCnt--, r.imgRedDot.visible = r.curHotCnt > 0)
                        },
                        p), HotRedManager.getInstance().getHotRedState(_) ? (v.visible = !0, p.curHotCnt++, p.imgRedDot.visible = p.imgRedDot.visible || !0) : (v.visible = !1, p.imgRedDot.visible = p.imgRedDot.visible || !1))
                    }
                },
                p = this, _ = 0; _ < c.length; _++) d(_);
                if (EventManager.addEventListener("ActivityCenterButton_intCurTab",
                function(t) {
                    if (t.data.name == r.name) {
                        var e = 1;
                        t.data.childTab && t.data.childTab.childIndex ? e = t.data.childTab.childIndex: t.data.childTab && (e = t.data.childTab);
                        var i = r.childGroup.getChildAt(e - 1);
                        i && (r.radioGroup = i.group, r.radioGroup.selectedValue = i.value, r.onChangeTab())
                    }
                },
                this), h == c.length) return ! 1;
                c.length - h && (n ? (this.childGroup.getChildAt(n - 1).selected = !0, this.radioGroup.selectedValue = n) : this.childGroup.getChildAt(0).selected = !0)
            }
            var v = t.RedDotRules.redDotIdxArr[a.id];
            return v && (this.imgRedDot.visible = !!HotRedManager.getInstance().getHotRedState(v), HotRedManager.getInstance().registerHotEvent(v,
            function(t) {
                r.imgRedDot.visible = !!t
            },
            this)),
            egret.setTimeout(function() {
                r.width = r.width
            },
            this, 100),
            !0
        },
        i.prototype.checkCurTab = function() {
            this.tl && this.tl.isActive() || (this.isOpen && this.activityTab == ~~this.rb_x.value ? this.closeAni() : this.isOpen || this.activityTab != ~~this.rb_x.value || this.openAni())
        },
        i.prototype.openAni = function() {
            var t = this;
            if (!this.tl || !this.tl.isActive()) if (this.isOpen = !0, this.tl) DisplayUtil.setScrollerItemIncludeInLayout(this._scr, !1),
            this.tl.restart().then(function() {
                DisplayUtil.setScrollerItemIncludeInLayout(t._scr, !0)
            });
            else {
                this._scr.height = this.childGroup.contentHeight + this.childGroup.layout.paddingTop,
                this.tl = new gsap.core.Timeline,
                DisplayUtil.setScrollerItemIncludeInLayout(this._scr, !1);
                var e = .08;
                this.tl.from(this._scr, {
                    height: 0,
                    duration: e * this.childGroup.numChildren
                },
                "<"),
                this.tl.from(this.childGroup.$children, {
                    y: -60,
                    alpha: 0,
                    stagger: e,
                    ease: Quad.easeOut
                },
                "-=0.6").then(function() {
                    DisplayUtil.setScrollerItemIncludeInLayout(t._scr, !0)
                })
            }
        },
        i.prototype.closeAni = function() {
            var t = this;
            this.tl && !this.tl.reversed() && (this.isOpen = !1, DisplayUtil.setScrollerItemIncludeInLayout(this._scr, !1), this.tl.reverse().then(function() {
                DisplayUtil.setScrollerItemIncludeInLayout(t._scr, !0)
            }))
        },
        i.prototype.onChangeTab = function() {
            EventManager.dispatchEventWith("ActivityCenterButton_onChangeTab", !1, "" + this.radioGroup.selectedValue)
        },
        i.prototype.destroy = function() {
            this.radioGroup && this.radioGroup.removeEventListener(egret.Event.CHANGE, this.onChangeTab, this),
            this.tl && this.tl.clear(),
            this.tl = null,
            EventManager.removeAll(this),
            ImageButtonUtil.removeAll(this),
            this.childGroup.removeChildren(),
            HotRedManager.getInstance().removeRegisterHotEventAll(this)
        },
        i
    } (eui.Component);
    t.ActivityCenterButton = e,
    __reflect(e.prototype, "activityCenter.ActivityCenterButton")
} (activityCenter || (activityCenter = {}));
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
activityCenter; !
function(t) {
    var e = function(e) {
        function i(t) {
            var i = e.call(this) || this;
            return i.rbbuttons = [],
            i.allIndex = [],
            i.panelNames = [],
            i.panelsID = [],
            i.value = t,
            i.skinName = "ActivityCenterSkin",
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            var t = this;
            if (this.initData(), this.addEvent(), this.adaptBgByScale(this.bg), this.initBtnClose("activity_center_main_panel2_txt_title_png", this,
            function() {
                t.service.closeModule()
            },
            this), this.value) {
                var e = void 0,
                i = {};
                if (this.value.moduleID) e = this.value.moduleID,
                i = this.value.pamram;
                else {
                    var n = {
                        type: "" + this.value.type
                    },
                    r = GainWayManger.getJumpInfo(n);
                    r && (r.menuDefault > 0 ? (e = this.items[r.menuDefault - 1].Go, i.childIndex = r.menuChildIndex > 0 ? r.menuChildIndex: 1, this.value.tab && (i.tab = +this.value.tab)) : egret.setTimeout(function() {
                        t.openPanel(0)
                    },
                    this, 50))
                }
                for (var a = !1,
                o = function(n) {
                    if (s.items[n].Go == e) {
                        a = !0;
                        var r = s.items[n].id,
                        o = s.panelsID.indexOf(r);
                        return s.rbGroup.selectedValue = s.rbbuttons[n].rb_x.value,
                        s.once(egret.Event.RENDER,
                        function() {
                            t.curTab = ~~t.rbGroup.selectedValue;
                            var e = t.items[t.curTab - 1];
                            "" != e.pageChildrenName.trim() ? EventManager.dispatchEventWith("ActivityCenterButton_openAni_" + e.id) : EventManager.dispatchEventWith("ActivityCenterButton_closeAni"),
                            t.openPanel(o, i)
                        },
                        s),
                        "break"
                    }
                },
                s = this, l = 0; l < this.items.length; l++) {
                    var c = o(l);
                    if ("break" === c) break
                }
                a || 187 != e || Alarm.show("不在活动时间范围内",
                function() {
                    t.service.closeModule()
                })
            } else egret.setTimeout(function() {
                t.openPanel(0)
            },
            this, 50)
        },
        i.prototype.reshow = function() {
            this.grpContainer.numChildren > 0 && (this.grpContainer.getChildAt(0).visible = !0, this.grpContainer.getChildAt(0).reShow())
        },
        i.prototype.hideGroupLeft = function() {
            this.grpLeft.visible = !1,
            this.grpBack.visible = !1
        },
        i.prototype.showGroupLeft = function() {
            this.grpLeft.visible = !0,
            this.grpBack.visible = !0
        },
        i.prototype.initData = function() {
            if (this.adaptLeftContent(this.grpLeft), this.items = config.ActivityCenter.getItems().filter(function(t) {
                var e = SystemTimerManager.sysBJDate.getTime();
                if ("" != t.beginning) {
                    var i = new Date(t.beginning.replace(/_/g, "/")).getTime(),
                    n = new Date(t.ending.replace(/_/g, "/")).getTime();
                    return e >= i && n >= e
                }
                return t.isShow ? t: void 0
            }).sort(function(t, e) {
                return t.sorting - e.sorting
            }), this.value && this.value.type) {
                var e = {
                    type: "" + this.value.type
                },
                i = GainWayManger.getJumpInfo(e);
                this.curTab = i.menuDefault,
                this.curPanelChildTab = i.menuChildIndex
            }
            for (var n = 0; n < this.items.length; n++) {
                this.panelsID[n] = this.items[n].id;
                var r = new t.ActivityCenterButton;
                if (n == this.curTab - 1 && this.curPanelChildTab) {
                    if (!r.setData(this.panelsID[n], n, this.curPanelChildTab)) continue
                } else if (!r.setData(this.panelsID[n], n)) continue;
                this.rbGroup = r.rb_x.group,
                this.leftRb.addChild(r),
                this.rbbuttons.push(r),
                0 == n && (this.rbGroup.selectedValue = r.rb_x.value)
            }
            this.curTab = 1
        },
        i.prototype.openPanel = function(t, e) {
            var i = this;
            void 0 === e && (e = null);
            var n;
            this.allIndex.indexOf(t) >= 0 ? n = !1 : (n = !0, this.allIndex.push(t));
            var r = config.ActivityCenter.getItem(this.panelsID[t]);
            if (r.Go && n) this.grpContainer.removeChildren(),
            ModuleManager.showModuleByID(r.Go, e, AppDoStyle.NULL, this.grpContainer).then(function() {
                if (0 != i.grpContainer.numChildren) {
                    var t = i.grpContainer.getChildAt(0);
                    t.name = r.name,
                    i.panelNames.push(t),
                    i.curPanel = t,
                    i.curPanel.visible = !0
                }
            });
            else {
                this.grpContainer.removeChildren();
                for (var a = 0; a < this.panelNames.length; a++) this.panelNames[a].name == r.name && (this.grpContainer.addChild(this.panelNames[a]), this.curPanel = this.panelNames[a], this.curPanel.setData(e), this.curPanel.reShow(), this.curPanel.visible = !0, this.curPanel.update && this.curPanel.update(), this.curPanel.openRBPanel && e && ("wishFloatingBottle" == this.curPanel.name ? this.curPanel.openRBPanel(e.childIndex) : this.curPanel.openRBPanel(e)))
            }
        },
        i.prototype.onChangeTab = function() {
            this.curTab = ~~this.rbGroup.selectedValue;
            var t = this.items[this.curTab - 1];
            this.curActivityId = t.id,
            this.try2ClickHotRed(this.curActivityId),
            EventManager.dispatchEventWith("ActivityCenterButton_closeAni"),
            EventManager.dispatchEventWith("ActivityCenterButton_getCurTab", !1, this.curTab),
            "" != t.pageChildrenName.trim() && EventManager.dispatchEventWith("ActivityCenterButton_openAni_" + t.id),
            "twelveYearsPromise" == t.name && StatLogger.log("20231117版本系统功能", "十二年之约", "通过点击活动中心页签进入活动"),
            this.openPanel(this.curTab - 1)
        },
        i.prototype.try2ClickHotRed = function(e, i) {
            if (void 0 === i && (i = 0), 0 == i) {
                var n = this.leftRb.getChildAt(this.curTab - 1);
                n && n.childGroup && n.childGroup.numChildren > 0 && (i = n.childGroup.getChildAt(0).value)
            }
            e += .1 * i;
            var r = t.RedDotRules.redDotIdxArr[e];
            r && ( - 1 == r || HotRedManager.getInstance().clickIcon(r))
        },
        i.prototype.addEvent = function() {
            var t = this;
            this.rbGroup.addEventListener(egret.Event.CHANGE, this.onChangeTab, this),
            EventManager.addEventListener("ActivityCenterButton_onChangeTab", this.onChangeChildrenTab, this),
            EventManager.addEventListener("latestActivities_changePanel",
            function(e) {
                for (var i = 0; i < t.items.length; i++) if (t.items[i].Go == e.data.moduleID) {
                    var n = t.items[i].id,
                    r = t.panelsID.indexOf(n),
                    a = config.ActivityCenter.getItem(t.panelsID[i]);
                    t.curTab = t.rbGroup.selectedValue = r + 1,
                    EventManager.dispatchEventWith("ActivityCenterButton_getCurTab", !1, t.curTab),
                    "" != a.pageChildrenName.trim() ? EventManager.dispatchEventWith("ActivityCenterButton_openAni_" + n) : EventManager.dispatchEventWith("ActivityCenterButton_closeAni"),
                    EventManager.dispatchEventWith("ActivityCenterButton_intCurTab", !1, {
                        name: a.name,
                        childTab: e.data.pamram
                    }),
                    t.openPanel(r, e.data.pamram)
                }
            },
            this),
            EventManager.addEventListener("hideActivityCenterLeft", this.hideGroupLeft, this),
            EventManager.addEventListener("showActivityCenterLeft", this.showGroupLeft, this),
            EventManager.addEventListener("ActivityCenterClose",
            function() {
                t.service.closeModule()
            },
            this)
        },
        i.prototype.onChangeChildrenTab = function(t) {
            this.curPanel && this.curPanel.openRBPanel && this.curPanel.openRBPanel(~~t.data),
            this.try2ClickHotRed(this.curActivityId, ~~t.data)
        },
        i.prototype.destroy = function() {
            this.rbGroup.removeEventListener(egret.Event.CHANGE, this.onChangeTab, this),
            this.grpContainer.removeChildren(),
            this.leftRb.removeChildren(),
            this.rbbuttons = null,
            e.prototype.destroy.call(this),
            this.curPanel = null;
            for (var t = 0; t < this.panelNames.length; t++) this.panelNames[t].onClose();
            this.panelNames = null,
            ImageButtonUtil.removeAll(this),
            EventManager.removeAll(this)
        },
        i
    } (BasicPanel);
    t.MainPanel = e,
    __reflect(e.prototype, "activityCenter.MainPanel")
} (activityCenter || (activityCenter = {}));
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
generateEUI.paths["resource/eui_skins/acitivity_center/ActivityCenterButtonSkin.exml"] = window.ActivityCenterButtonSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["rb_x", "childGroup", "_scr", "imgRedDot"],
        this.elementsContent = [this.rb_x_i(), this._scr_i(), this.imgRedDot_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.rb_x_i = function() {
        var t = new eui.RadioButton;
        return this.rb_x = t,
        t.groupName = "draw_tab",
        t.left = 0,
        t.right = 16,
        t
    },
    i._scr_i = function() {
        var t = new eui.Scroller;
        return this._scr = t,
        t.height = 0,
        t.width = 125,
        t.x = 0,
        t.y = 80,
        t.viewport = this.childGroup_i(),
        t
    },
    i.childGroup_i = function() {
        var t = new eui.Group;
        return this.childGroup = t,
        t.layout = this._VerticalLayout1_i(),
        t
    },
    i._VerticalLayout1_i = function() {
        var t = new eui.VerticalLayout;
        return t.gap = 10,
        t
    },
    i.imgRedDot_i = function() {
        var t = new eui.Image;
        return this.imgRedDot = t,
        t.height = 20,
        t.right = 0,
        t.source = "dot_png",
        t.visible = !1,
        t.width = 21,
        t.y = 15,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/acitivity_center/ActivityCenterSkin.exml"] = window.ActivityCenterSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "grpContainer", "leftRb", "grpLeft"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this.grpContainer_i(), this.grpLeft_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.height = 640,
        t.horizontalCenter = 0,
        t.source = "common_ui_bg_3_jpg",
        t.verticalCenter = 0,
        t.width = 1136,
        t
    },
    i.grpContainer_i = function() {
        var t = new eui.Group;
        return this.grpContainer = t,
        t.percentHeight = 100,
        t.visible = !0,
        t.percentWidth = 100,
        t.x = 0,
        t.y = 0,
        t
    },
    i.grpLeft_i = function() {
        var t = new eui.Group;
        return this.grpLeft = t,
        t.touchEnabled = !1,
        t.visible = !0,
        t.width = 184,
        t.x = 7,
        t.y = 0,
        t.elementsContent = [this._Image1_i(), this._Image2_i(), this._Image3_i(), this._Scroller1_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 640,
        t.scale9Grid = new egret.Rectangle(31, 213, 1, 214),
        t.source = "activity_center_main_panel2_heise_png",
        t.touchEnabled = !1,
        t.visible = !0,
        t.width = 545,
        t.x = -350,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.scale9Grid = new egret.Rectangle(16, 213, 4, 214),
        t.source = "activity_center_main_panel2_juxing_1_png",
        t.touchEnabled = !1,
        t.visible = !0,
        t.width = 545,
        t.x = -350,
        t.y = 0,
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "activity_center_main_panel2_xian_png",
        t.touchEnabled = !1,
        t.visible = !0,
        t.x = 28,
        t.y = 42,
        t
    },
    i._Scroller1_i = function() {
        var t = new eui.Scroller;
        return t.enabled = !0,
        t.height = 530,
        t.scaleX = 1,
        t.scaleY = 1,
        t.scrollPolicyH = "off",
        t.touchEnabled = !1,
        t.width = 185,
        t.x = 22,
        t.y = 79,
        t.viewport = this.leftRb_i(),
        t
    },
    i.leftRb_i = function() {
        var t = new eui.Group;
        return this.leftRb = t,
        t.touchEnabled = !1,
        t.x = 42,
        t.y = 89,
        t.layout = this._VerticalLayout1_i(),
        t
    },
    i._VerticalLayout1_i = function() {
        var t = new eui.VerticalLayout;
        return t.gap = -10,
        t.paddingLeft = 10,
        t.paddingTop = 10,
        t
    },
    e
} (eui.Skin);