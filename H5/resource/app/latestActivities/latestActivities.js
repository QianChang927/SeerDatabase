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
    for (var s in e) e.hasOwnProperty(s) && (t[s] = e[s]);
    i.prototype = e.prototype,
    t.prototype = new i
},
latestActivities; !
function(t) {
    t.moving = !1;
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t.page1Configs = new HashMap,
            t.page2Configs = [],
            t.tlList = null,
            t._curPage = 1,
            t.skinName = LatestActivitiesSkin,
            t
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            var t = this;
            e.prototype.childrenCreated.call(this),
            this.rbpageGroup = this.rb_page1.group,
            this.selectValue = this.rbpageGroup.selectedValue = 1,
            this.initData(),
            this.rbpageGroup.addEventListener(egret.Event.CHANGE, this.onChangeTab, this),
            this._src.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onFocusTouchBegin, this),
            ImageButtonUtil.add(this.btnLeft,
            function() {
                t._curPage < 2 || (t._curPage--, t.updatePge(), t.dispatch())
            },
            this),
            ImageButtonUtil.add(this.btnRight,
            function() {
                var e = t.page1Configs.length;
                t._curPage >= e || (t._curPage++, t.updatePge(), t.dispatch())
            },
            this)
        },
        i.prototype.onFocusTouchBegin = function(t) {
            this._startX = t.stageX,
            this._src.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onFocusTouchMove, this),
            this._src.addEventListener(egret.TouchEvent.TOUCH_END, this.onFocusTouchEnd, this),
            this._src.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.onFocusTouchEnd, this),
            this.stage.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.onFocusTouchEnd, this)
        },
        i.prototype.onFocusTouchMove = function(t) {
            var e = t.stageX,
            i = e - this._startX;
            Math.abs(i) >= 20 && (this.onFocusTouchEnd(), i > 0 ? this._curPage > 1 && this.moveItem( - 1) : this._curPage < this.page1Configs.length && this.moveItem(1))
        },
        i.prototype.onFocusTouchEnd = function(t) {
            this._src.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.onFocusTouchMove, this),
            this._src.removeEventListener(egret.TouchEvent.TOUCH_END, this.onFocusTouchEnd, this),
            this._src.removeEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.onFocusTouchEnd, this),
            this.stage.removeEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.onFocusTouchEnd, this)
        },
        i.prototype.moveItem = function(e) {
            t.moving = !0,
            this._curPage += e,
            this.dispatch(),
            this.updatePge(!0)
        },
        i.prototype.animPlay = function() {
            var t = this;
            this.touchChildren = this.touchEnabled = !1;
            for (var e = 0; e < this.grp_page1.numChildren; e++) {
                var i = this.grp_page1.getChildAt(e),
                s = i.x;
                gsap.fromTo(i, {
                    x: s + 800,
                    alpha: 0
                },
                {
                    x: s,
                    alpha: 1,
                    duration: .3 + .1 * e,
                    onComplete: function() {
                        t.touchChildren = t.touchEnabled = !0
                    }
                })
            }
        },
        i.prototype.reShow = function() {
            this.grp_page1.visible = this._scrProgress.visible = 1 == this.selectValue,
            this.grp_page2.visible = 2 == this.selectValue
        },
        i.prototype.initData = function() {
            var e = config.LatestActivity.getItems();
            this.grp_page1.visible = this._scrProgress.visible = !0,
            this.grp_page2.visible = !1;
            for (var i = e.filter(function(t) {
                return 1 == t.type && t.page > 0
            }), s = 0; s < i.length; s++) {
                var n = i[s];
                this.page1Configs.containsKey(n.page - 1) ? this.page1Configs.getValue(n.page - 1).push(n) : this.page1Configs.add(n.page - 1, [n])
            }
            var r = this.page1Configs.getValues();
            t.LatestActivitiesProgress_scroller_width = this._scrProgress.width,
            t.LatestActivitiesProgress_scroller_length = r.length,
            this.page2Configs = e.filter(function(t) {
                return 2 == t.type
            }),
            this._list.itemRenderer = t.LatestActivitiesPage,
            this._list.dataProvider = new eui.ArrayCollection(r),
            this._listProgress.itemRenderer = t.LatestActivitiesProgress,
            this._listProgress.dataProvider = new eui.ArrayCollection(r.length > 1 ? r: []),
            this._listFactor.itemRenderer = t.LatestPetItem,
            this._listFactor.dataProvider = new eui.ArrayCollection(this.page2Configs),
            this.updatePge(),
            this.animPlay()
        },
        i.prototype.onChangeTab = function() {
            this.selectValue = this.rbpageGroup.selectedValue,
            this.grp_page1.visible = this._scrProgress.visible = 1 == this.selectValue,
            this.grp_page2.visible = 2 == this.selectValue,
            2 == this.selectValue ? this.openPage2() : this.animPlay()
        },
        i.prototype.updatePge = function(e) {
            void 0 === e && (e = !1);
            var i = this.page1Configs.length,
            s = 922;
            egret.Tween.get(this._src.viewport).to({
                scrollH: (this._curPage - 1) * s
            },
            e ? 500 : 200).call(function() {
                t.moving = !1
            }),
            DisplayUtil.setEnabled(this.btnLeft, this._curPage > 1, !0),
            DisplayUtil.setEnabled(this.btnRight, this._curPage < i, !0)
        },
        i.prototype.openPage2 = function() {
            StatLogger.log("20221125版本系统功能", "最新活动合集搬迁", "点击【最新精灵】页签"),
            this.page2Anim()
        },
        i.prototype.page2Anim = function() {
            var t = this;
            this.tlList || (this.tlList = new gsap.core.Timeline),
            this.tlList.clear(),
            DisplayUtil.setScrollerItemIncludeInLayout(this._scrFactor, !1),
            this.tlList.from(this._listFactor.$children, {
                x: Math.max(this._scrFactor.viewport.contentWidth, 1e3),
                alpha: 0,
                stagger: .06,
                ease: Quad.easeOut
            }).then(function() {
                DisplayUtil.setScrollerItemIncludeInLayout(t._scrFactor, !0),
                t._scrFactor && (t._scrFactor.scrollPolicyH = eui.ScrollPolicy.AUTO, t._scrFactor.scrollPolicyV = eui.ScrollPolicy.AUTO),
                t.tlList.clear()
            })
        },
        i.prototype.dispatch = function() {
            EventManager.dispatchEventWith("LatestActivitiesProgress_update", !1, {
                ind: this._curPage
            })
        },
        i.prototype.destroy = function() {
            EventManager.dispatchEventWith("LatestActivitiesProgress_removeAll"),
            this.tlList && this.tlList.clear(),
            this.tlList = null,
            egret.Tween.removeTweens(this._src.viewport),
            this.rbpageGroup.removeEventListener(egret.Event.CHANGE, this.onChangeTab, this),
            this._src.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onFocusTouchBegin, this),
            this._src.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.onFocusTouchMove, this),
            this._src.removeEventListener(egret.TouchEvent.TOUCH_END, this.onFocusTouchEnd, this),
            this._src.removeEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.onFocusTouchEnd, this),
            e.prototype.destroy.call(this)
        },
        i
    } (BaseModule);
    t.LatestActivities = e,
    __reflect(e.prototype, "latestActivities.LatestActivities")
} (latestActivities || (latestActivities = {}));
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
    for (var s in e) e.hasOwnProperty(s) && (t[s] = e[s]);
    i.prototype = e.prototype,
    t.prototype = new i
},
latestActivities; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.info = [],
            e.skinName = LatestActivitiesPageSkin,
            e._list.itemRenderer = i,
            e
        }
        return __extends(e, t),
        e.prototype.dataChanged = function() {
            t.prototype.dataChanged.call(this),
            this.data && (this.info = this.data, this.updateView())
        },
        e.prototype.updateView = function() {
            this._list.dataProvider = new eui.ArrayCollection(this.info)
        },
        e
    } (eui.ItemRenderer);
    t.LatestActivitiesPage = e,
    __reflect(e.prototype, "latestActivities.LatestActivitiesPage");
    var i = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.skinName = LatestActivitiesPageItemSkin,
            ImageButtonUtil.add(i.img,
            function() {
                if (!t.moving) {
                    var e = i.info["goto"].split("_");
                    if (1 == ~~e[0]) MapManager.changeMap(~~e[1]);
                    else if (2 == ~~e[0]) {
                        var s = KTool.evalPram(e[2]);
                        110 == ~~e[1] ? EventManager.dispatchEventWith("latestActivities_changePanel", !1, s) : 74 == ~~e[1] ? i.showTeam() : ModuleManager.showModuleByID(~~e[1], s)
                    }
                }
            },
            i, !1),
            EventManager.addEventListener("LatestActivitiesProgress_removeAll",
            function() {
                ImageButtonUtil.removeAll(i),
                EventManager.removeAll(i)
            },
            i),
            i
        }
        return __extends(i, e),
        i.prototype.dataChanged = function() {
            e.prototype.dataChanged.call(this),
            this.data && (this.info = this.data, this.updateView())
        },
        i.prototype.updateView = function() {
            if (this.img.source = "resource/assets/activityCenter/LatestActivies/" + this.info.pic + ".png", 0 != this.info.tag) if (this.info.showStart) {
                var t = SystemTimerManager.sysBJDate.getTime(),
                e = new Date(this.info.showStart.replace(/_/g, "/")).getTime(),
                i = new Date(this.info.showEnd.replace(/_/g, "/")).getTime();
                if (t >= e && i >= t) {
                    var s = i - t;
                    864e5 > s ? this.tag.source = "la_mainpanel_Activetag1_day_png": 6048e5 > s ? this.tag.source = "la_mainpanel_Activetag1_week_png": this.tag.source = ""
                }
            } else this.tag.source = "la_mainpanel_Activetag" + this.info.tag + "_png";
            else this.tag.source = ""
        },
        i.prototype.showTeam = function() {
            if (MainManager.actorInfo.teamInfo && MainManager.actorInfo.teamInfo.id > 0) {
                var t = TeamInfoManager.getApplyList();
                if (MainManager.actorInfo.teamInfo.priv < 2 && t.length > 0) {
                    var e = t.shift(),
                    i = PopViewManager.createDefaultStyleObject();
                    i.caller = this,
                    i.clickMaskHandler = function() {},
                    PopViewManager.getInstance().openView(new tipsPop.TeamApplyView, i, e, LevelManager.appLevel),
                    RedPointManager.addRedPointWithNum(this, "toolbar_btnTeam", t.length, null)
                } else ModuleManager.showModuleByID(74)
            } else KTool.getMultiValue([127],
            function(t) {
                var e = SystemTimerManager.sysBJDate.getTime() / 1e3;
                e - t[0] < 86400 ? Alarm.show("离开战队后需要等待24小时后，才能进行加入战队或创建战队的操作。") : ModuleManager.showModuleByID(73)
            })
        },
        i
    } (eui.ItemRenderer);
    t.LatestActivitiesPageItem = i,
    __reflect(i.prototype, "latestActivities.LatestActivitiesPageItem")
} (latestActivities || (latestActivities = {}));
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
    for (var s in e) e.hasOwnProperty(s) && (t[s] = e[s]);
    i.prototype = e.prototype,
    t.prototype = new i
},
latestActivities; !
function(t) {
    t.LatestActivitiesProgress_scroller_width = 0,
    t.LatestActivitiesProgress_scroller_length = 0;
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.skinName = LatestAactivitiesProgressSkin,
            i.width = (t.LatestActivitiesProgress_scroller_width - 2 * t.LatestActivitiesProgress_scroller_length) / t.LatestActivitiesProgress_scroller_length,
            i
        }
        return __extends(i, e),
        i.prototype.dataChanged = function() {
            var t = this;
            e.prototype.dataChanged.call(this),
            EventManager.addEventListener("LatestActivitiesProgress_update",
            function(e) {
                var i = ~~e.data.ind;
                t.progress.visible = t.itemIndex + 1 == i
            },
            this),
            EventManager.addEventListener("LatestActivitiesProgress_removeAll",
            function() {
                EventManager.removeAll(t)
            },
            this),
            0 == this.itemIndex && (this.progress.visible = !0)
        },
        i
    } (eui.ItemRenderer);
    t.LatestActivitiesProgress = e,
    __reflect(e.prototype, "latestActivities.LatestActivitiesProgress")
} (latestActivities || (latestActivities = {}));
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
    for (var s in e) e.hasOwnProperty(s) && (t[s] = e[s]);
    i.prototype = e.prototype,
    t.prototype = new i
},
latestActivities; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.skinName = LatestPetItemSKin,
            e
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            var e = this;
            t.prototype.childrenCreated.call(this),
            ImageButtonUtil.add(this.bg,
            function() {
                StatLogger.log("20221125版本系统功能", "最新活动合集搬迁", "点击最新精灵-任意精灵面板");
                var t = e.info["goto"].split("_");
                if (1 == ~~t[0]) MapManager.changeMap(~~t[1]);
                else if (2 == ~~t[0]) {
                    var i = KTool.evalPram(t[2]);
                    110 == ~~t[1] ? EventManager.dispatchEventWith("latestActivities_changePanel", !1, i) : ModuleManager.showModuleByID(~~t[1], i)
                }
            },
            this),
            EventManager.addEventListener("LatestActivitiesProgress_removeAll",
            function() {
                ImageButtonUtil.removeAll(e),
                EventManager.removeAll(e)
            },
            this)
        },
        e.prototype.dataChanged = function() {
            this.info = this.data,
            this.bg.source = "resource/assets/pve/entry/monster_level/" + this.info.pic + ".png",
            this.info.tag && (this.tagtype.source = "la_mainpanel_Pettag" + this.info.tag + "_png")
        },
        e
    } (eui.ItemRenderer);
    t.LatestPetItem = e,
    __reflect(e.prototype, "latestActivities.LatestPetItem")
} (latestActivities || (latestActivities = {}));
var __extends = this && this.__extends ||
function(t, e) {
    function i() {
        this.constructor = t
    }
    for (var s in e) e.hasOwnProperty(s) && (t[s] = e[s]);
    i.prototype = e.prototype,
    t.prototype = new i
};
window.generateEUI = window.generateEUI || {},
generateEUI.paths = generateEUI.paths || {},
generateEUI.styles = void 0,
generateEUI.skins = {},
generateEUI.paths["resource/eui_skins/LatestAactivitiesProgressSkin.exml"] = window.LatestAactivitiesProgressSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["progress"],
        this.height = 10,
        this.width = 50,
        this.elementsContent = [this._Image1_i(), this.progress_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 3,
        t.left = 0,
        t.right = 0,
        t.scale9Grid = new egret.Rectangle(0, 0, 50, 3),
        t.source = "la_page_act_center_probg_png",
        t.verticalCenter = 0,
        t
    },
    i.progress_i = function() {
        var t = new eui.Image;
        return this.progress = t,
        t.left = 0,
        t.right = 0,
        t.scale9Grid = new egret.Rectangle(2, 4, 46, 2),
        t.source = "la_page_act_center_progress_png",
        t.verticalCenter = 0,
        t.visible = !1,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/LatestActivities.exml"] = window.LatestActivitiesSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["_list", "_src", "btnRight", "btnLeft", "grp_page1", "_listFactor", "_scrFactor", "grp_page2", "rb_page1", "rb_page2", "rbtop", "_listProgress", "_scrProgress"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.grp_page1_i(), this.grp_page2_i(), this.rbtop_i(), this._scrProgress_i()]
    }
    __extends(e, t);
    var i = function(t) {
        function e() {
            t.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i(), this._Label1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "visible", !1), new eui.SetProperty("_Label1", "textColor", 8757203)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "la_mainpanel_zu_33_png")])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t.source = "la_mainpanel_zu_33_png",
            t
        },
        i._Label1_i = function() {
            var t = new eui.Label;
            return this._Label1 = t,
            t.fontFamily = "MFShangHei",
            t.height = 43,
            t.size = 20,
            t.text = "本周推荐",
            t.textAlign = "center",
            t.textColor = 6291438,
            t.touchEnabled = !1,
            t.verticalAlign = "middle",
            t.visible = !0,
            t.width = 106,
            t
        },
        e
    } (eui.Skin),
    s = function(t) {
        function e() {
            t.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i(), this._Label1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "visible", !1), new eui.SetProperty("_Label1", "textColor", 8757203)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "la_mainpanel_zu_33_png")])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t.source = "la_mainpanel_zu_33_png",
            t
        },
        i._Label1_i = function() {
            var t = new eui.Label;
            return this._Label1 = t,
            t.fontFamily = "MFShangHei",
            t.height = 43,
            t.size = 20,
            t.text = "最新精灵",
            t.textAlign = "center",
            t.textColor = 6291438,
            t.touchEnabled = !1,
            t.verticalAlign = "middle",
            t.visible = !0,
            t.width = 106,
            t
        },
        e
    } (eui.Skin),
    n = e.prototype;
    return n.grp_page1_i = function() {
        var t = new eui.Group;
        return this.grp_page1 = t,
        t.height = 516,
        t.horizontalCenter = 64,
        t.visible = !0,
        t.width = 928,
        t.y = 89,
        t.elementsContent = [this._src_i(), this._Group1_i()],
        t
    },
    n._src_i = function() {
        var t = new eui.Scroller;
        return this._src = t,
        t.bounces = !1,
        t.height = 516,
        t.scrollPolicyH = "off",
        t.scrollPolicyV = "off",
        t.width = 922,
        t.x = 6,
        t.y = 0,
        t.viewport = this._list_i(),
        t
    },
    n._list_i = function() {
        var t = new eui.List;
        return this._list = t,
        t.itemRendererSkinName = LatestActivitiesPageSkin,
        t.layout = this._HorizontalLayout1_i(),
        t
    },
    n._HorizontalLayout1_i = function() {
        var t = new eui.HorizontalLayout;
        return t.gap = 0,
        t
    },
    n._Group1_i = function() {
        var t = new eui.Group;
        return t.height = 39,
        t.width = 153,
        t.x = 770,
        t.y = -47.59,
        t.elementsContent = [this.btnRight_i(), this.btnLeft_i()],
        t
    },
    n.btnRight_i = function() {
        var t = new eui.Image;
        return this.btnRight = t,
        t.source = "la_page_act_center_right_png",
        t.x = 118.64,
        t.y = 0,
        t
    },
    n.btnLeft_i = function() {
        var t = new eui.Image;
        return this.btnLeft = t,
        t.source = "la_page_act_center_left_png",
        t.x = 0,
        t.y = 0,
        t
    },
    n.grp_page2_i = function() {
        var t = new eui.Group;
        return this.grp_page2 = t,
        t.horizontalCenter = 86.5,
        t.visible = !1,
        t.width = 963,
        t.y = 89,
        t.elementsContent = [this._scrFactor_i()],
        t
    },
    n._scrFactor_i = function() {
        var t = new eui.Scroller;
        return this._scrFactor = t,
        t.blendMode = "normal",
        t.bounces = !0,
        t.height = 508,
        t.scaleX = 1,
        t.scaleY = 1,
        t.width = 963,
        t.x = 0,
        t.y = 0,
        t.viewport = this._listFactor_i(),
        t
    },
    n._listFactor_i = function() {
        var t = new eui.List;
        return this._listFactor = t,
        t.width = 554,
        t.x = 0,
        t.layout = this._HorizontalLayout2_i(),
        t
    },
    n._HorizontalLayout2_i = function() {
        var t = new eui.HorizontalLayout;
        return t
    },
    n.rbtop_i = function() {
        var t = new eui.Group;
        return this.rbtop = t,
        t.cacheAsBitmap = !0,
        t.horizontalCenter = -288.5,
        t.visible = !0,
        t.width = 211,
        t.y = 46,
        t.elementsContent = [this._Image1_i(), this.rb_page1_i(), this.rb_page2_i(), this._Image2_i()],
        t
    },
    n._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "la_mainpanel_jx_17_kb_14_png",
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t
    },
    n.rb_page1_i = function() {
        var t = new eui.RadioButton;
        return this.rb_page1 = t,
        t.groupName = "mainPage",
        t.value = "1",
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t.skinName = i,
        t
    },
    n.rb_page2_i = function() {
        var t = new eui.RadioButton;
        return this.rb_page2 = t,
        t.groupName = "mainPage",
        t.value = "2",
        t.visible = !0,
        t.x = 105,
        t.y = 0,
        t.skinName = s,
        t
    },
    n._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "la_mainpanel_jx_17_kb_13_png",
        t.visible = !0,
        t.x = 0,
        t.y = 38,
        t
    },
    n._scrProgress_i = function() {
        var t = new eui.Scroller;
        return this._scrProgress = t,
        t.height = 10,
        t.horizontalCenter = 61.5,
        t.width = 913.067,
        t.y = 614,
        t.viewport = this._listProgress_i(),
        t
    },
    n._listProgress_i = function() {
        var t = new eui.List;
        return this._listProgress = t,
        t.layout = this._HorizontalLayout3_i(),
        t
    },
    n._HorizontalLayout3_i = function() {
        var t = new eui.HorizontalLayout;
        return t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/LatestActivitiesPageItemSkin.exml"] = window.LatestActivitiesPageItemSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["img", "tag"],
        this.height = 252,
        this.width = 454,
        this.elementsContent = [this._Group1_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Group1_i = function() {
        var t = new eui.Group;
        return t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image1_i(), this.img_i(), this._Image2_i(), this.tag_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 252,
        t.scale9Grid = new egret.Rectangle(20, 20, 20, 20),
        t.source = "la_mainpanel_line_png",
        t.width = 449,
        t.x = 0,
        t.y = 0,
        t
    },
    i.img_i = function() {
        var t = new eui.Image;
        return this.img = t,
        t.height = 249,
        t.source = "",
        t.width = 445,
        t.x = 2,
        t.y = 1,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 249,
        t.scale9Grid = new egret.Rectangle(55, 53, 15, 27),
        t.source = "la_mainpanel_decorate_png",
        t.touchEnabled = !1,
        t.width = 445,
        t.x = 2,
        t.y = 0,
        t
    },
    i.tag_i = function() {
        var t = new eui.Image;
        return this.tag = t,
        t.touchEnabled = !1,
        t.x = 0,
        t.y = 18,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/LatestActivitiesPageSkin.exml"] = window.LatestActivitiesPageSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["_list"],
        this.height = 516,
        this.width = 922,
        this.elementsContent = [this._Group1_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Group1_i = function() {
        var t = new eui.Group;
        return t.height = 516,
        t.visible = !0,
        t.width = 922,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._list_i()],
        t
    },
    i._list_i = function() {
        var t = new eui.List;
        return this._list = t,
        t.height = 516,
        t.itemRendererSkinName = LatestActivitiesPageItemSkin,
        t.width = 922,
        t.x = 0,
        t.y = 0,
        t.layout = this._TileLayout1_i(),
        t
    },
    i._TileLayout1_i = function() {
        var t = new eui.TileLayout;
        return t.horizontalAlign = "left",
        t.horizontalGap = 10,
        t.orientation = "rows",
        t.requestedColumnCount = 2,
        t.requestedRowCount = 2,
        t.verticalGap = 10,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/LatestPetItemSKin.exml"] = window.LatestPetItemSKin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "tagtype", "grp_content"],
        this.height = 483,
        this.width = 268,
        this.elementsContent = [this.grp_content_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.grp_content_i = function() {
        var t = new eui.Group;
        return this.grp_content = t,
        t.cacheAsBitmap = !0,
        t.height = 483,
        t.width = 268,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this.bg_i(), this.tagtype_i()],
        t
    },
    i.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.height = 483,
        t.width = 268,
        t.x = 0,
        t.y = 0,
        t
    },
    i.tagtype_i = function() {
        var t = new eui.Image;
        return this.tagtype = t,
        t.source = "",
        t.visible = !0,
        t.x = 3,
        t.y = 20,
        t
    },
    e
} (eui.Skin);