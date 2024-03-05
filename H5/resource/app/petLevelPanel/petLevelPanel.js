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
__awaiter = this && this.__awaiter ||
function(e, t, i, n) {
    return new(i || (i = Promise))(function(r, o) {
        function a(e) {
            try {
                s(n.next(e))
            } catch(t) {
                o(t)
            }
        }
        function l(e) {
            try {
                s(n["throw"](e))
            } catch(t) {
                o(t)
            }
        }
        function s(e) {
            e.done ? r(e.value) : new i(function(t) {
                t(e.value)
            }).then(a, l)
        }
        s((n = n.apply(e, t || [])).next())
    })
},
__generator = this && this.__generator ||
function(e, t) {
    function i(e) {
        return function(t) {
            return n([e, t])
        }
    }
    function n(i) {
        if (r) throw new TypeError("Generator is already executing.");
        for (; s;) try {
            if (r = 1, o && (a = o[2 & i[0] ? "return": i[0] ? "throw": "next"]) && !(a = a.call(o, i[1])).done) return a;
            switch (o = 0, a && (i = [0, a.value]), i[0]) {
            case 0:
            case 1:
                a = i;
                break;
            case 4:
                return s.label++,
                {
                    value: i[1],
                    done: !1
                };
            case 5:
                s.label++,
                o = i[1],
                i = [0];
                continue;
            case 7:
                i = s.ops.pop(),
                s.trys.pop();
                continue;
            default:
                if (a = s.trys, !(a = a.length > 0 && a[a.length - 1]) && (6 === i[0] || 2 === i[0])) {
                    s = 0;
                    continue
                }
                if (3 === i[0] && (!a || i[1] > a[0] && i[1] < a[3])) {
                    s.label = i[1];
                    break
                }
                if (6 === i[0] && s.label < a[1]) {
                    s.label = a[1],
                    a = i;
                    break
                }
                if (a && s.label < a[2]) {
                    s.label = a[2],
                    s.ops.push(i);
                    break
                }
                a[2] && s.ops.pop(),
                s.trys.pop();
                continue
            }
            i = t.call(e, s)
        } catch(n) {
            i = [6, n],
            o = 0
        } finally {
            r = a = 0
        }
        if (5 & i[0]) throw i[1];
        return {
            value: i[0] ? i[1] : void 0,
            done: !0
        }
    }
    var r, o, a, l, s = {
        label: 0,
        sent: function() {
            if (1 & a[0]) throw a[1];
            return a[1]
        },
        trys: [],
        ops: []
    };
    return l = {
        next: i(0),
        "throw": i(1),
        "return": i(2)
    },
    "function" == typeof Symbol && (l[Symbol.iterator] = function() {
        return this
    }),
    l
},
petLevelPanel; !
function(e) {
    e.STAT_LOGGER_BY_PET_LEVEL_PANEL = "STAT_LOGGER_BY_PET_LEVEL_PANEL";
    var t = function(t) {
        function i(e) {
            void 0 === e && (e = null);
            var i = t.call(this) || this;
            return i.oldType = 0,
            i.tlList = null,
            i.showAni = !1,
            i.groupName = "pve_level_type",
            t.prototype.initBtnClose.call(i, "pet_level_panel_title_png", i),
            i.data = e,
            i.skinName = "PetLevelPanelSkin",
            i
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            var i = this;
            t.prototype.childrenCreated.call(this),
            StatLogger.log("20211126版本系统功能", "主界面精灵关卡", "玩家总点击进入次数"),
            this.adaptLeftContent(this._scr),
            this.adaptLeftContent(this._scrFactor),
            this.adaptLeftContent(this.grpTab),
            this.adaptLeftContent(this.topGroup),
            this.adaptLeftContent(this.collectGroup),
            this.adaptRightContent(this._scr),
            this.adaptRightContent(this._scrFactor),
            this.adaptRightContent(this.grpItem),
            this.adaptRightContent(this.grpGot),
            this.adaptRightContent(this.search),
            this.rbg_tab = this.tab_0.group,
            this.isFirstOpen = !0;
            var n = new MenuData;
            n.groupName = this.groupName,
            GameInfo.isChecking ? (n["default"] = 7, n.root = [3, 6], n.data = {
                3 : {
                    title: "收藏关卡"
                },
                6 : {
                    title: "精灵因子",
                    child: [7, 2]
                },
                7 : {
                    title: "本周推荐",
                    parent: 6
                },
                2 : {
                    title: "全部精灵",
                    parent: 6
                }
            }) : (n["default"] = this.data ? ~~this.data.type: 7, n.root = [1, 4, 6, 3], n.data = {
                1 : {
                    title: "强力推荐",
                    child: [5, 8]
                },
                5 : {
                    title: "PVP",
                    parent: 1
                },
                8 : {
                    title: "PVE",
                    parent: 1
                },
                4 : {
                    title: "经典集结",
                    child: [9, 10, 11]
                },
                9 : {
                    title: "星系神兽",
                    parent: 4
                },
                10 : {
                    title: "战神联盟",
                    parent: 4
                },
                11 : {
                    title: "往期回顾",
                    parent: 4
                },
                6 : {
                    title: "精灵因子",
                    child: [7, 2]
                },
                7 : {
                    title: "本周推荐",
                    parent: 6
                },
                2 : {
                    title: "全部精灵",
                    parent: 6
                },
                3 : {
                    title: "收藏关卡"
                }
            }),
            PetFactorCollectionManager.getAllData().then(function() {
                i.menu = Menu.createMenu(n, i.menuGroup)
            }),
            EventManager.addEventListener(BaseMenuEvent.BASE_MENU_SELECT_CHANGE_ + this.groupName, this.onChangeTab, this),
            this.topGroup.visible = !1,
            this.rbg_quality = this.rb_all.group,
            this.rbg_quality.selectedValue = this.rb_all.value,
            this.rbg_type = this.rbCollect1.group,
            this.rbg_type.selectedValue = this.rbCollect1.value,
            this.validateNow(),
            this.initView(),
            this.rbg_quality.addEventListener(egret.Event.CHANGE, this.onChangeTab, this),
            this.rbg_type.addEventListener(egret.Event.CHANGE, this.onChangeTab, this),
            this.rbg_tab.addEventListener(egret.Event.CHANGE, this.onChangeTab, this),
            this.cb_notGot.addEventListener(egret.Event.CHANGE, this.updateView, this),
            this.txt_notGot.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTxt, this),
            this.txt_search.addEventListener(egret.Event.CHANGE, this.changeText, this),
            EventManager.addEventListener("PveLevelPanelFilterPop_select_ok",
            function() {
                i.rbg_quality.selectedValue = i.rb_all.value,
                i.txt_search.text = "";
                var e = ~~i.menu.selectedValue;
                2 == e ? StatLogger.log("20221028版本系统功能", "精灵因子入口优化", "在“全部精灵”分页搜索精灵名") : 3 == e && StatLogger.log("20221028版本系统功能", "精灵因子入口优化", "在“我的收藏”分页搜索精灵名"),
                i.updateView()
            },
            this),
            EventManager.addEventListener(PetFactorCollectionManager.PetFactorCollectionManager_setCollection,
            function() {
                var e = ~~i.menu.selectedValue;
                3 == e && i.updateView()
            },
            this),
            EventManager.addEventListener(e.STAT_LOGGER_BY_PET_LEVEL_PANEL, this.statLogger, this),
            ImageButtonUtil.add(this.btnAdd,
            function() {
                Alarm.show("暂未开放，敬请期待！")
            },
            this),
            ImageButtonUtil.add(this.btnSearch,
            function() {
                i.rbg_quality.selectedValue = i.rb_all.value;
                var e = ~~i.menu.selectedValue;
                PetFactorCollectionManager.fightType = 0,
                PetFactorCollectionManager.tag = 0;
                var t = i.txt_search.text.trim();
                i._currentSearchStr = t,
                2 == e ? StatLogger.log("20221028版本系统功能", "精灵因子入口优化", "在“全部精灵”分页搜索精灵名") : 3 == e && StatLogger.log("20221028版本系统功能", "精灵因子入口优化", "在“我的收藏”分页搜索精灵名"),
                i.updateView()
            },
            this),
            ImageButtonUtil.add(this.img_select,
            function() {
                PopViewManager.getInstance().openView(new e.PveLevelPanelFilterPop)
            },
            this);
            for (var r = function(e) {
                ImageButtonUtil.add(o["pet" + e],
                function() {
                    StatLogger.log("20230210版本系统功能", "战神联盟集合面板", "点击任意精灵面板"),
                    ModuleManager.showModuleByID(200, e)
                },
                o)
            },
            o = this, a = 1; 5 >= a; a++) r(a)
        },
        i.prototype.changeText = function() {
            this.rbg_quality.selectedValue = this.rb_all.value;
            var e = ~~this.menu.selectedValue;
            2 == e ? StatLogger.log("20221028版本系统功能", "精灵因子入口优化", "在“全部精灵”分页搜索精灵名") : 3 == e && StatLogger.log("20221028版本系统功能", "精灵因子入口优化", "在“我的收藏”分页搜索精灵名"),
            this.updateView()
        },
        i.prototype.onChangeTab = function() {
            this.cb_notGot.selected = !1,
            this.showAni = !0,
            this._scrFactor.viewport.scrollV = 0;
            var e = !1,
            t = ~~this.menu.selectedValue; (2 == t || 7 == t) && (e = !0),
            (e && this.oldType != t || !e) && (this.txt_search.text = "", PetFactorCollectionManager.fightType = 0, PetFactorCollectionManager.tag = 0),
            this.updateView()
        },
        i.prototype.onTouchTxt = function() {
            this.cb_notGot.selected = !this.cb_notGot.selected,
            this.updateView()
        },
        i.prototype.initView = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var t, i;
                return __generator(this,
                function(n) {
                    return this.showAni = !0,
                    t = 1e3 * MainManager.actorInfo.regTime,
                    i = SystemTimerManager.sysBJDate.getTime(),
                    i - t > 108e6 ? this.rbg_tab.selectedValue = "1": this.rbg_tab.selectedValue = "3",
                    this._list.itemRenderer = e.PetLevelPanelItem,
                    this._listFactor.itemRenderer = e.PetLevelPanelWeeklyItem,
                    [2]
                })
            })
        },
        i.prototype.updateView = function() {
            var e = this;
            this.img_select.source = 0 != PetFactorCollectionManager.fightType || 0 != PetFactorCollectionManager.tag ? "pet_level_panel_factor_img_select1_png": "pet_level_panel_factor_img_select_png",
            this.txt_itemNum_0.text = core.gameUtil.ConvertToTenThousand(MainManager.actorInfo.coins),
            UserInfoManager.getDiamond(function(t) {
                e.txt_itemNum_1.text = core.gameUtil.ConvertItemNumView(t, 0)
            },
            this);
            var t = ~~this.menu.selectedValue,
            i = "none";
            this._scrFactor.visible = 2 == t || 3 == t || 11 == t,
            this._scr.visible = 2 != t && 3 != t && 11 != t,
            this._scrFactor.visible ? this._scrFactor.stopAnimation() : (this._scr.stopAnimation(), this._scr.viewport.scrollH = 0);
            var n = !0,
            r = t,
            o = r;
            this.grpAres.visible = !1,
            this.bg.source = "common_ui_bg_3_jpg";
            var a = !1; (8 >= t || 11 == t) && (a = !0),
            this.grpGot.visible = a,
            this.beastGroup.visible = !1,
            2 == t || 3 == t || 7 == t ? (r = 3, this.grpTab.visible = !1, n = !0, i = this.rbg_quality.selectedValue, this.topGroup.visible = 2 == t, GameInfo.isChecking || 3 != t ? this.collectGroup.visible = !1 : this.collectGroup.visible = !0, this.search.visible = 7 != t, this.grpGot.right = DeviceInfoManager.adapterOffSetX + (7 != t ? 185 : 39)) : 10 == t ? (StatLogger.log("20230210版本系统功能", "战神联盟集合面板", "点击精灵关卡-【战神联盟】"), this.topGroup.visible = !1, this.collectGroup.visible = !1, this.grpTab.visible = !1, this.search.visible = !1, this.bg.source = "pet_level_panel_bg_jpg", this._scrFactor.visible = this._scr.visible = !1, this.grpAres.visible = !0, this.no_pet.visible = !1, egret.lifecycle.stage.touchChildren = !1, gsap.killTweensOf(this.grpAres.$children), gsap.from(this.grpAres.$children, {
                x: 1100,
                alpha: 0,
                stagger: .1,
                duration: .3
            }).then(function() {
                egret.lifecycle.stage.touchChildren = !0
            })) : 9 == t ? (this.topGroup.visible = !1, this.collectGroup.visible = !1, this.grpTab.visible = !1, this.search.visible = !1, this.bg.source = "common_ui_bg_3_jpg", this._scrFactor.visible = this._scr.visible = !1, this.grpAres.visible = !1, this.no_pet.visible = !1, this.beastGroup.visible = !0, this.updateBeast()) : 5 == t || 8 == t ? (r = 1, o = 5 == t ? 1 : 2, this.topGroup.visible = !1, this.collectGroup.visible = !1, this.grpTab.visible = !1, this.search.visible = !0, this.grpGot.right = DeviceInfoManager.adapterOffSetX + 185) : 11 == t && (r = 2, o = 3, this.topGroup.visible = !1, this.collectGroup.visible = !1, this.grpTab.visible = !1, this.search.visible = !0, this.grpGot.right = DeviceInfoManager.adapterOffSetX + 185);
            var l = config.New_monster_level.getItems().filter(function(i) {
                if (0 != i.hide) return ! 1;
                var n = i.type.split("_"),
                a = +n[0],
                l = +n[1];
                if (3 != t || 3 != r) return 1 == n.length ? a == r: a == r && l == o;
                var s = +e.rbg_type.selectedValue;
                return 1 == s ? !0 : 2 == s ? 1 == a: 3 == s ? 2 == a: 4 == s ? 3 == a: void 0
            });
            if (3 == r ? l.sort(function(e, i) {
                return 3 == t ? e.id - i.id: ~~i.monsterid - ~~e.monsterid
            }) : l.sort(function(e, t) {
                return e.sort - t.sort
            }), this.oldType = t, n && "none" != i) if (7 == t) l = l.filter(function(e) {
                return 1 == e.weekly
            }).sort(function(e, t) {
                return e.weeklyAdd - t.weeklyAdd
            });
            else if (3 == t) {
                l = l.filter(function(e) {
                    return PetFactorCollectionManager.checkPetIdIndexIsCollection(e.id)
                });
                for (var s = 0,
                _ = l; s < _.length; s++) {
                    var u = _[s];
                    u.showTag = !0
                }
            } else {
                l = this.selectQuality(l, i);
                for (var c = 0,
                h = l; c < h.length; c++) {
                    var u = h[c];
                    u.showTag = !1
                }
            }
            if (11 == t) for (var p = 0,
            g = l; p < g.length; p++) {
                var u = g[p];
                u.showTag = !1
            }
            this.statLogger2(r);
            var v, f;
            if (a) if (this.cb_notGot.selected) {
                StatLogger.log("20211126版本系统功能", "主界面精灵关卡", "玩家开启“仅显示未获得”功能");
                for (var d = [], b = 0; b < l.length; b++) {
                    var m = l[b].monsterid.split(",").map(Number);
                    d = d.concat(m)
                }
                PetManager.checkMultiPet(d,
                function(i) {
                    for (var a = [], s = 0; s < l.length; s++) for (var _ = l[s].monsterid.split(",").map(Number), u = 0; u < _.length; u++) {
                        var c = d.indexOf(_[u]);
                        if (!i[c]) {
                            a.push(l[s]);
                            break
                        }
                    }
                    if (e.no_pet.visible = a.length <= 0, n && 7 != t) {
                        var h = e.txt_search.text.trim();
                        if (e._currentSearchStr = h, a = a.filter(function(t) {
                            var i = ~~t.monsterid,
                            n = PetXMLInfo.getName(i);
                            return "" === e._currentSearchStr || "" !== e._currentSearchStr && (SearchUtil.isMatch(e._currentSearchStr, n) || i.toString() == e._currentSearchStr) ? !0 : void 0
                        }), a = a.filter(function(e) {
                            var t = !0,
                            i = e.tag.split("_").map(Number);
                            return t = PetFactorCollectionManager.tag ? i.indexOf(PetFactorCollectionManager.tag) > -1 : !0,
                            (e.fightType == PetFactorCollectionManager.fightType || 0 == PetFactorCollectionManager.fightType) && t
                        }), e.no_pet.visible = a.length <= 0, 1 == r || 2 == r && 3 != o) e._list.dataProvider = new eui.ArrayCollection(a),
                        v = e._scr,
                        f = e._list;
                        else {
                            var p = e._listFactor.scrollV;
                            e._listFactor.dataProvider = new eui.ArrayCollection(a),
                            v = e._scrFactor,
                            f = e._listFactor,
                            e.once(egret.Event.RENDER,
                            function() {
                                var t = Math.min(p, e._listFactor.contentHeight - e._listFactor.height);
                                e._listFactor.scrollV = Math.max(t, 0)
                            },
                            e)
                        }
                    } else e._list.dataProvider = new eui.ArrayCollection(a),
                    v = e._scr,
                    f = e._list;
                    v && (v.scrollPolicyH = eui.ScrollPolicy.AUTO, v.scrollPolicyV = eui.ScrollPolicy.AUTO, DisplayUtil.setScrollerItemIncludeInLayout(v, !0)),
                    e.showAni && (v.visible = !1),
                    e.showAni && e.once(egret.Event.RENDER,
                    function() {
                        return __awaiter(e, void 0, void 0,
                        function() {
                            var e, t, i, n, r, o = this;
                            return __generator(this,
                            function(a) {
                                switch (a.label) {
                                case 0:
                                    return v.visible = !0,
                                    f.dataProvider ? f.dataProvider.length <= 0 ? [2] : (v && (v.scrollPolicyH = eui.ScrollPolicy.OFF, v.scrollPolicyV = eui.ScrollPolicy.OFF), this.tlList || (this.tlList = new gsap.core.Timeline), this.tlList.clear(), DisplayUtil.setScrollerItemIncludeInLayout(v, !1), this.tlList.from(f.$children, {
                                        x: Math.max(v.viewport.contentWidth, 1e3),
                                        alpha: 0,
                                        stagger: .04,
                                        ease: Quad.easeOut
                                    }).then(function() {
                                        DisplayUtil.setScrollerItemIncludeInLayout(v, !0),
                                        v && (v.scrollPolicyH = eui.ScrollPolicy.AUTO, v.scrollPolicyV = eui.ScrollPolicy.AUTO),
                                        o.tlList.clear(),
                                        o.showAni = !1
                                    }), e = [], t = l, [4, wait(0)]) : [2];
                                case 1:
                                    for (a.sent(), i = 0, n = f.$children; i < n.length; i++) r = n[i],
                                    -1 != e.indexOf(r.data) || -1 == t.indexOf(r.data) ? r.visible = !1 : (e.push(r.data), r.visible = !0),
                                    r.visible = !0;
                                    return [2]
                                }
                            })
                        })
                    },
                    e)
                })
            } else {
                if (this.no_pet.visible = l.length <= 0, n && 7 != t) {
                    var y = this.txt_search.text.trim();
                    if (this._currentSearchStr = y, l = l.filter(function(t) {
                        var i = ~~t.monsterid,
                        n = PetXMLInfo.getName(i);
                        return "" === e._currentSearchStr || "" !== e._currentSearchStr && (SearchUtil.isMatch(e._currentSearchStr, n) || i.toString() == e._currentSearchStr) ? !0 : void 0
                    }), l = l.filter(function(e) {
                        var t = !0,
                        i = e.tag.split("_").map(Number);
                        return t = PetFactorCollectionManager.tag ? i.indexOf(PetFactorCollectionManager.tag) > -1 : !0,
                        (e.fightType == PetFactorCollectionManager.fightType || 0 == PetFactorCollectionManager.fightType) && t
                    }), this.no_pet.visible = l.length <= 0, 1 == r || 2 == r && 3 != o) this._list.dataProvider = new eui.ArrayCollection(l),
                    v = this._scr,
                    f = this._list;
                    else {
                        var w = this._listFactor.scrollV;
                        this._listFactor.dataProvider = new eui.ArrayCollection(l),
                        v = this._scrFactor,
                        f = this._listFactor,
                        this.once(egret.Event.RENDER,
                        function() {
                            var t = Math.min(w, e._listFactor.contentHeight - e._listFactor.height);
                            e._listFactor.scrollV = Math.max(t, 0)
                        },
                        this)
                    }
                } else this._list.dataProvider = new eui.ArrayCollection(l),
                v = this._scr,
                f = this._list;
                if (v && (v.scrollPolicyH = eui.ScrollPolicy.AUTO, v.scrollPolicyV = eui.ScrollPolicy.AUTO), this.showAni) {
                    v.visible = !1;
                    var I = function() {
                        return __awaiter(e, void 0, void 0,
                        function() {
                            var e, t, i, n, r, o = this;
                            return __generator(this,
                            function(a) {
                                switch (a.label) {
                                case 0:
                                    return v.visible = !0,
                                    f.dataProvider ? f.dataProvider.length <= 0 ? [2] : (v && (v.scrollPolicyH = eui.ScrollPolicy.OFF, v.scrollPolicyV = eui.ScrollPolicy.OFF), this.tlList || (this.tlList = new gsap.core.Timeline), this.tlList.clear(), DisplayUtil.setScrollerItemIncludeInLayout(v, !1), this.tlList.from(f.$children, {
                                        x: Math.max(v.viewport.contentWidth, 1e3),
                                        alpha: 0,
                                        stagger: .04,
                                        ease: Quad.easeOut
                                    }).then(function() {
                                        DisplayUtil.setScrollerItemIncludeInLayout(v, !0),
                                        v && (v.scrollPolicyH = eui.ScrollPolicy.AUTO, v.scrollPolicyV = eui.ScrollPolicy.AUTO),
                                        o.tlList.clear(),
                                        o.showAni = !1
                                    }), e = [], t = l, [4, wait(0)]) : [2];
                                case 1:
                                    for (a.sent(), i = 0, n = f.$children; i < n.length; i++) r = n[i],
                                    -1 != e.indexOf(r.data) || -1 == t.indexOf(r.data) ? r.visible = !1 : (e.push(r.data), r.visible = !0),
                                    r.visible = !0;
                                    return [2]
                                }
                            })
                        })
                    };
                    this.isFirstOpen ? (this.isFirstOpen = !1, egret.setTimeout(I, this, 100)) : this.once(egret.Event.RENDER, I, this)
                }
            }
        },
        i.prototype.updateBeast = function() {
            if (this.beastGroup.numChildren <= 0) {
                var t = new e.PetLevelPanelBeastAll;
                this.beastGroup.addChild(t)
            }
        },
        i.prototype.selectQuality = function(e, t) {
            return e.filter(function(e) {
                return e.quality == t || "all" == t
            })
        },
        i.prototype.statLogger = function(e) {
            var t = e.data.collection ? e.data.collection: -1,
            i = e.data.inDoor ? e.data.inDoor: -1,
            n = ~~this.menu.selectedValue,
            r = this.rbg_quality.selectedValue;
            7 == n || (2 == n ? (i && StatLogger.log("20221028版本系统功能", "精灵因子入口优化", "从“全部精灵”分页进入关卡"), -1 != t && StatLogger.log("20221028版本系统功能", "精灵因子入口优化", t ? "在“全部精灵”分页收藏": "在“全部精灵”分页取消收藏"), "none" != r && StatLogger.log("20221028版本系统功能", "精灵因子入口优化", "在“全部精灵”分页切换显示精灵等级")) : 3 == n && (i && StatLogger.log("20221028版本系统功能", "精灵因子入口优化", "从“我的收藏”分页进入关卡"), -1 != t && StatLogger.log("20221028版本系统功能", "精灵因子入口优化", "在“我的收藏”分页取消收藏"), "none" != r && StatLogger.log("20221028版本系统功能", "精灵因子入口优化", "在“我的收藏”分页切换显示精灵等级")))
        },
        i.prototype.statLogger2 = function(e) {
            1 == e ? StatLogger.log("20221216版本系统功能", "精灵职能筛选管理", "打开“精灵关卡”中的“必备”子面板并选择PVP") : 2 == e ? StatLogger.log("20221216版本系统功能", "精灵职能筛选管理", "打开“精灵关卡”中的“必备”子面板并选择PVE") : 3 == e ? StatLogger.log("20221216版本系统功能", "精灵职能筛选管理", "打开“精灵关卡”中的“必备”子面板并选择新手") : 4 == e ? StatLogger.log("20221216版本系统功能", "精灵职能筛选管理", "打开“精灵关卡”中的“经典”子面板") : 5 == e ? StatLogger.log("20221216版本系统功能", "精灵职能筛选管理", "打开“精灵关卡”中的“强力”子面板") : 7 == e && StatLogger.log("20221216版本系统功能", "精灵职能筛选管理", "打开“精灵关卡”中“精灵因子”的“本周推荐”")
        },
        i.prototype.destroy = function() {
            t.prototype.destroy.call(this),
            gsap.killTweensOf(this.grpAres.$children),
            this.beastGroup.numChildren > 0 && this.beastGroup.removeChildAt(0).destroy(),
            ImageButtonUtil.removeAll(this),
            this.tlList && this.tlList.clear(),
            PetFactorCollectionManager.fightType = 0,
            PetFactorCollectionManager.tag = 0,
            this.menu && this.menu.destroy(),
            EventManager.removeEventListener(BaseMenuEvent.BASE_MENU_SELECT_CHANGE_ + this.groupName, this.onChangeTab, this),
            this.txt_search.removeEventListener(egret.Event.CHANGE, this.changeText, this),
            this.rbg_quality.removeEventListener(egret.Event.CHANGE, this.onChangeTab, this),
            this.rbg_type.removeEventListener(egret.Event.CHANGE, this.onChangeTab, this),
            this.rbg_tab.removeEventListener(egret.Event.CHANGE, this.onChangeTab, this),
            this.cb_notGot.removeEventListener(egret.Event.CHANGE, this.updateView, this),
            this.txt_notGot.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTxt, this)
        },
        i
    } (BaseModule);
    e.PetLevelPanel = t,
    __reflect(t.prototype, "petLevelPanel.PetLevelPanel")
} (petLevelPanel || (petLevelPanel = {}));
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
petLevelPanel; !
function(e) {
    var t = function(e) {
        function t(t) {
            var i = e.call(this) || this;
            i.pet = [[502, 2545, 3289], [503, 2581, 3301], [504, 2676, 3318], [501, 3010, 3308], [505, 3310, 3315]],
            i.enterId = [247, 228, 221, 223, 234],
            i.type = 1,
            i.skinName = PetLevelPanelBeastSkin,
            i.left = i.right = i.top = i.bottom = 0,
            e.prototype.initBtnClose.call(i, "pve_level_panel_beast_title" + ~~t + "_png", i),
            i.adaptBgByScale(i.bg0),
            i.updateView(~~t),
            ImageButtonUtil.add(i.btnGo0,
            function() {
                ModuleManager.showModuleByID(18, {
                    type: 1,
                    subType: "PET",
                    childParam: 3,
                    reshowCOLLECTION: 0
                })
            },
            i),
            ImageButtonUtil.add(i.btnGo1,
            function() {
                ModuleManager.showModuleByID(56)
            },
            i),
            ImageButtonUtil.add(i.btnGo2,
            function() {
                ModuleManager.CloseAll(),
                ModuleManager.showModuleByID(i.enterId[i.type - 1])
            },
            i);
            for (var n = function(e) {
                ImageButtonUtil.add(r["pet" + (e + 1)],
                function() {
                    ModuleManager.showModule("petManualInfo", ["pet_info_manual"], {
                        data: i.pet[i.type - 1][e],
                        type: "pet"
                    })
                },
                r)
            },
            r = this, o = 0; 3 > o; o++) n(o);
            return i
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this)
        },
        t.prototype.updateView = function(e) {
            this.type = e,
            this.bg0.source = "pet_level_panel_bg_" + e + "_jpg",
            this.bg.source = "pve_level_panel_beast_" + e + "_png",
            this.btnGo2.source = this.enterId[e - 1] > 0 ? "pet_level_panel_btnGo_png": "pet_level_panel_btnGo1_png",
            DisplayUtil.setEnabled(this.btnGo2, this.enterId[e - 1] > 0, !0)
        },
        t
    } (BaseModule);
    e.PetLevelPanelBeast = t,
    __reflect(t.prototype, "petLevelPanel.PetLevelPanelBeast")
} (petLevelPanel || (petLevelPanel = {}));
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
__awaiter = this && this.__awaiter ||
function(e, t, i, n) {
    return new(i || (i = Promise))(function(r, o) {
        function a(e) {
            try {
                s(n.next(e))
            } catch(t) {
                o(t)
            }
        }
        function l(e) {
            try {
                s(n["throw"](e))
            } catch(t) {
                o(t)
            }
        }
        function s(e) {
            e.done ? r(e.value) : new i(function(t) {
                t(e.value)
            }).then(a, l)
        }
        s((n = n.apply(e, t || [])).next())
    })
},
__generator = this && this.__generator ||
function(e, t) {
    function i(e) {
        return function(t) {
            return n([e, t])
        }
    }
    function n(i) {
        if (r) throw new TypeError("Generator is already executing.");
        for (; s;) try {
            if (r = 1, o && (a = o[2 & i[0] ? "return": i[0] ? "throw": "next"]) && !(a = a.call(o, i[1])).done) return a;
            switch (o = 0, a && (i = [0, a.value]), i[0]) {
            case 0:
            case 1:
                a = i;
                break;
            case 4:
                return s.label++,
                {
                    value: i[1],
                    done: !1
                };
            case 5:
                s.label++,
                o = i[1],
                i = [0];
                continue;
            case 7:
                i = s.ops.pop(),
                s.trys.pop();
                continue;
            default:
                if (a = s.trys, !(a = a.length > 0 && a[a.length - 1]) && (6 === i[0] || 2 === i[0])) {
                    s = 0;
                    continue
                }
                if (3 === i[0] && (!a || i[1] > a[0] && i[1] < a[3])) {
                    s.label = i[1];
                    break
                }
                if (6 === i[0] && s.label < a[1]) {
                    s.label = a[1],
                    a = i;
                    break
                }
                if (a && s.label < a[2]) {
                    s.label = a[2],
                    s.ops.push(i);
                    break
                }
                a[2] && s.ops.pop(),
                s.trys.pop();
                continue
            }
            i = t.call(e, s)
        } catch(n) {
            i = [6, n],
            o = 0
        } finally {
            r = a = 0
        }
        if (5 & i[0]) throw i[1];
        return {
            value: i[0] ? i[1] : void 0,
            done: !0
        }
    }
    var r, o, a, l, s = {
        label: 0,
        sent: function() {
            if (1 & a[0]) throw a[1];
            return a[1]
        },
        trys: [],
        ops: []
    };
    return l = {
        next: i(0),
        "throw": i(1),
        "return": i(2)
    },
    "function" == typeof Symbol && (l[Symbol.iterator] = function() {
        return this
    }),
    l
},
petLevelPanel; !
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.canDown = !0,
            t.skinName = "PetLevelPanelItemSkin",
            t
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            var t = this;
            e.prototype.childrenCreated.call(this),
            ImageButtonUtil.add(this.grp_content,
            function() {
                if (t._info.statlog) {
                    var e = t._info.statlog.split(",");
                    StatLogger.log(e[0], e[1], e[2])
                }
                6 == t.firstType && StatLogger.log("20221028版本系统功能", "精灵因子入口优化", "从“本周推荐”分页进入关卡"),
                ModuleManager.showModuleByID(t._info.moduleid, t._info.param)
            },
            this),
            ImageButtonUtil.add(this.collection,
            function() {
                return __awaiter(t, void 0, void 0,
                function() {
                    var e;
                    return __generator(this,
                    function(t) {
                        switch (t.label) {
                        case 0:
                            return this.canDown ? (this.canDown = !1, e = !PetFactorCollectionManager.checkPetIdIndexIsCollection(this._info.id), StatLogger.log("20221028版本系统功能", "精灵因子入口优化", e ? "在关卡界面收藏": "在关卡界面取消收藏"), 6 == this.firstType && StatLogger.log("20221028版本系统功能", "精灵因子入口优化", e ? "在“本周推荐”分页收藏": "在“本周推荐”分页取消收藏"), [4, PetFactorCollectionManager.setCollection(this._info.id, e)]) : (BubblerManager.getInstance().showText("请不要过快连续点击！"), [2]);
                        case 1:
                            return t.sent(),
                            this.canDown = !0,
                            [2]
                        }
                    })
                })
            },
            this),
            EventManager.addEventListener(PetFactorCollectionManager.PetFactorCollectionManager_setCollection, this.updateFav, this)
        },
        t.prototype.dataChanged = function() {
            e.prototype.dataChanged.call(this),
            this._info = this.data;
            var t = this._info.type.split("_");
            this.firstType = +t[0],
            this.secondType = +t[1],
            this.updateView()
        },
        t.prototype.updateView = function() {
            this.bg.source = "resource/assets/pve/entry/monster_level/" + this._info.image + ".png";
            var e = ~~this._info.monsterid.split(",")[0];
            if (this.grpTag.removeChildren(), 4 != this.firstType && 5 != this.firstType) {
                var t = PetBook.PetBookXMLInfo.getLabels(e);
                0 == t.length && (t = this._info.tag.split("_"));
                for (var i = 0; i < t.length; i++) t[i] = "7" == t[i] ? "0": t[i],
                this.grpTag.addChild(new eui.Image(RES.getRes("common_pet_subtag_" + t[i] + "_png")))
            }
            this.favorite.visible = PetFactorCollectionManager.checkPetIdIndexIsCollection(this._info.id),
            this.newAdd.visible = 1 == this._info.weekly && 6 == this.firstType,
            1 == this._info.weekly && (this.newAdd.source = 1 == this._info.weeklyAdd ? "pet_level_panel_factor_newadd_png": "pet_level_panel_factor_recommend_png"),
            this.cacheAsBitmap = !0
        },
        t.prototype.updateFav = function() {
            this.favorite.visible = PetFactorCollectionManager.checkPetIdIndexIsCollection(this._info.id)
        },
        t.prototype.destroy = function() {
            e.prototype.destroy.call(this),
            this.grpTag.removeChildren()
        },
        t
    } (BaseItemRenderer);
    e.PetLevelPanelItem = t,
    __reflect(t.prototype, "petLevelPanel.PetLevelPanelItem")
} (petLevelPanel || (petLevelPanel = {}));
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
__awaiter = this && this.__awaiter ||
function(e, t, i, n) {
    return new(i || (i = Promise))(function(r, o) {
        function a(e) {
            try {
                s(n.next(e))
            } catch(t) {
                o(t)
            }
        }
        function l(e) {
            try {
                s(n["throw"](e))
            } catch(t) {
                o(t)
            }
        }
        function s(e) {
            e.done ? r(e.value) : new i(function(t) {
                t(e.value)
            }).then(a, l)
        }
        s((n = n.apply(e, t || [])).next())
    })
},
__generator = this && this.__generator ||
function(e, t) {
    function i(e) {
        return function(t) {
            return n([e, t])
        }
    }
    function n(i) {
        if (r) throw new TypeError("Generator is already executing.");
        for (; s;) try {
            if (r = 1, o && (a = o[2 & i[0] ? "return": i[0] ? "throw": "next"]) && !(a = a.call(o, i[1])).done) return a;
            switch (o = 0, a && (i = [0, a.value]), i[0]) {
            case 0:
            case 1:
                a = i;
                break;
            case 4:
                return s.label++,
                {
                    value: i[1],
                    done: !1
                };
            case 5:
                s.label++,
                o = i[1],
                i = [0];
                continue;
            case 7:
                i = s.ops.pop(),
                s.trys.pop();
                continue;
            default:
                if (a = s.trys, !(a = a.length > 0 && a[a.length - 1]) && (6 === i[0] || 2 === i[0])) {
                    s = 0;
                    continue
                }
                if (3 === i[0] && (!a || i[1] > a[0] && i[1] < a[3])) {
                    s.label = i[1];
                    break
                }
                if (6 === i[0] && s.label < a[1]) {
                    s.label = a[1],
                    a = i;
                    break
                }
                if (a && s.label < a[2]) {
                    s.label = a[2],
                    s.ops.push(i);
                    break
                }
                a[2] && s.ops.pop(),
                s.trys.pop();
                continue
            }
            i = t.call(e, s)
        } catch(n) {
            i = [6, n],
            o = 0
        } finally {
            r = a = 0
        }
        if (5 & i[0]) throw i[1];
        return {
            value: i[0] ? i[1] : void 0,
            done: !0
        }
    }
    var r, o, a, l, s = {
        label: 0,
        sent: function() {
            if (1 & a[0]) throw a[1];
            return a[1]
        },
        trys: [],
        ops: []
    };
    return l = {
        next: i(0),
        "throw": i(1),
        "return": i(2)
    },
    "function" == typeof Symbol && (l[Symbol.iterator] = function() {
        return this
    }),
    l
},
petLevelPanel; !
function(e) {
    var t = function(t) {
        function i() {
            var e = t.call(this) || this;
            return e.canDown = !0,
            e.skinName = "PetLevelPanelWeeklyItemSkin",
            e
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            var i = this;
            t.prototype.childrenCreated.call(this),
            ImageButtonUtil.add(this.img_pet,
            function() {
                if (i._info.statlog) {
                    var t = i._info.statlog.split(",");
                    StatLogger.log(t[0], t[1], t[2])
                }
                EventManager.dispatchEventWith(e.STAT_LOGGER_BY_PET_LEVEL_PANEL, !1, {
                    inDoor: 1
                }),
                ModuleManager.showModuleByID(i._info.moduleid, i._info.param)
            },
            this),
            ImageButtonUtil.add(this.sc_up,
            function() {
                return __awaiter(i, void 0, void 0,
                function() {
                    var t;
                    return __generator(this,
                    function(i) {
                        switch (i.label) {
                        case 0:
                            return this.canDown ? (this.canDown = !1, t = !PetFactorCollectionManager.checkPetIdIndexIsCollection(this._info.id), StatLogger.log("20221028版本系统功能", "精灵因子入口优化", t ? "在关卡界面收藏": "在关卡界面取消收藏"), EventManager.dispatchEventWith(e.STAT_LOGGER_BY_PET_LEVEL_PANEL, !1, {
                                collection: !0
                            }), [4, PetFactorCollectionManager.setCollection(this._info.id, t)]) : (BubblerManager.getInstance().showText("请不要过快连续点击！"), [2]);
                        case 1:
                            return i.sent(),
                            this.canDown = !0,
                            [2]
                        }
                    })
                })
            },
            this, !1),
            EventManager.addEventListener(PetFactorCollectionManager.PetFactorCollectionManager_setCollection, this.updateFav, this)
        },
        i.prototype.dataChanged = function() {
            t.prototype.dataChanged.call(this),
            this._info = this.data,
            this.updateView()
        },
        i.prototype.updateView = function() {
            this.imgTag.visible = this.data.showTag;
            var e = this._info.type.split("_"),
            t = e[0];
            e[1];
            if (this.data.showTag) {
                var i = void 0;
                i = 1 == +t ? "3": 2 == +t ? t: this._info.quality.toUpperCase(),
                this.imgTag.source = "pet_level_panel_img_type" + i + "_png"
            }
            var n = ~~this._info.monsterid.split(",")[0];
            this.petName.text = PetXMLInfo.getName(n),
            this.img_pet.source = ClientConfig.getPetHalfIcon(n),
            this.sc_down.visible = PetFactorCollectionManager.checkPetIdIndexIsCollection(this._info.id),
            this.cacheAsBitmap = !0
        },
        i.prototype.updateFav = function() {
            this.sc_down.visible = PetFactorCollectionManager.checkPetIdIndexIsCollection(this._info.id)
        },
        i.prototype.destroy = function() {
            t.prototype.destroy.call(this)
        },
        i
    } (BaseItemRenderer);
    e.PetLevelPanelWeeklyItem = t,
    __reflect(t.prototype, "petLevelPanel.PetLevelPanelWeeklyItem")
} (petLevelPanel || (petLevelPanel = {}));
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
__awaiter = this && this.__awaiter ||
function(e, t, i, n) {
    return new(i || (i = Promise))(function(r, o) {
        function a(e) {
            try {
                s(n.next(e))
            } catch(t) {
                o(t)
            }
        }
        function l(e) {
            try {
                s(n["throw"](e))
            } catch(t) {
                o(t)
            }
        }
        function s(e) {
            e.done ? r(e.value) : new i(function(t) {
                t(e.value)
            }).then(a, l)
        }
        s((n = n.apply(e, t || [])).next())
    })
},
__generator = this && this.__generator ||
function(e, t) {
    function i(e) {
        return function(t) {
            return n([e, t])
        }
    }
    function n(i) {
        if (r) throw new TypeError("Generator is already executing.");
        for (; s;) try {
            if (r = 1, o && (a = o[2 & i[0] ? "return": i[0] ? "throw": "next"]) && !(a = a.call(o, i[1])).done) return a;
            switch (o = 0, a && (i = [0, a.value]), i[0]) {
            case 0:
            case 1:
                a = i;
                break;
            case 4:
                return s.label++,
                {
                    value: i[1],
                    done: !1
                };
            case 5:
                s.label++,
                o = i[1],
                i = [0];
                continue;
            case 7:
                i = s.ops.pop(),
                s.trys.pop();
                continue;
            default:
                if (a = s.trys, !(a = a.length > 0 && a[a.length - 1]) && (6 === i[0] || 2 === i[0])) {
                    s = 0;
                    continue
                }
                if (3 === i[0] && (!a || i[1] > a[0] && i[1] < a[3])) {
                    s.label = i[1];
                    break
                }
                if (6 === i[0] && s.label < a[1]) {
                    s.label = a[1],
                    a = i;
                    break
                }
                if (a && s.label < a[2]) {
                    s.label = a[2],
                    s.ops.push(i);
                    break
                }
                a[2] && s.ops.pop(),
                s.trys.pop();
                continue
            }
            i = t.call(e, s)
        } catch(n) {
            i = [6, n],
            o = 0
        } finally {
            r = a = 0
        }
        if (5 & i[0]) throw i[1];
        return {
            value: i[0] ? i[1] : void 0,
            done: !0
        }
    }
    var r, o, a, l, s = {
        label: 0,
        sent: function() {
            if (1 & a[0]) throw a[1];
            return a[1]
        },
        trys: [],
        ops: []
    };
    return l = {
        next: i(0),
        "throw": i(1),
        "return": i(2)
    },
    "function" == typeof Symbol && (l[Symbol.iterator] = function() {
        return this
    }),
    l
},
petLevelPanel; !
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.canDown = !0,
            t.skinName = PveLevelPanelBeastAllSkin,
            t.left = t.right = t.top = t.bottom = 0,
            t
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            var e = this;
            this.holyHowlId = config.New_monster_level.getItems().length - 4;
            for (var t = [247, 228, 221, 223, 234], i = function(i) {
                n["favorite_" + (i + 1)].touchEnabled = !1,
                ImageButtonUtil.add(n["a_" + (i + 1)],
                function() {
                    ModuleManager.showModuleByID(t[i])
                },
                n),
                ImageButtonUtil.add(n["collection_" + (i + 1)],
                function() {
                    return __awaiter(e, void 0, void 0,
                    function() {
                        var e;
                        return __generator(this,
                        function(t) {
                            switch (t.label) {
                            case 0:
                                return this.canDown ? (this.canDown = !1, e = !PetFactorCollectionManager.checkPetIdIndexIsCollection(this.holyHowlId + i), [4, PetFactorCollectionManager.setCollection(this.holyHowlId + i, e)]) : (BubblerManager.getInstance().showText("请不要过快连续点击！"), [2]);
                            case 1:
                                return t.sent(),
                                this.canDown = !0,
                                [2]
                            }
                        })
                    })
                },
                n)
            },
            n = this, r = 0; 5 > r; r++) i(r);
            EventManager.addEventListener(PetFactorCollectionManager.PetFactorCollectionManager_setCollection, this.updateView, this),
            this.updateView()
        },
        t.prototype.updateView = function() {
            for (var e = 0; 5 > e; e++) this["favorite_" + (e + 1)].visible = PetFactorCollectionManager.checkPetIdIndexIsCollection(this.holyHowlId + e)
        },
        t
    } (BaseModule);
    e.PetLevelPanelBeastAll = t,
    __reflect(t.prototype, "petLevelPanel.PetLevelPanelBeastAll")
} (petLevelPanel || (petLevelPanel = {}));
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
petLevelPanel; !
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.skinName = PveLevelPanelFilterPopSkin,
            t
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            var t = this;
            e.prototype.childrenCreated.call(this),
            this._list0.itemRenderer = i,
            this._list1.itemRenderer = i,
            this._list0.dataProvider = new eui.ArrayCollection(["1", "2", "3"]),
            this._list1.dataProvider = new eui.ArrayCollection([1, 2, 3, 4, 5, 6, 7, 8]),
            this._list0.setSelectedItem("" + PetFactorCollectionManager.fightType),
            this._list1.setSelectedItem(PetFactorCollectionManager.tag),
            ImageButtonUtil.add(this.btnCancel, this.reset, this),
            ImageButtonUtil.add(this.btnClose, this.hide, this),
            ImageButtonUtil.add(this.btnOk, this.onOk, this),
            EventManager.addEventListener("PveLevelPanelFilterPopItem_select",
            function(e) {
                "string" == typeof e.data ? t._list0.setSelectedItem("") : t._list1.setSelectedItem(0)
            },
            this)
        },
        t.prototype.reset = function() {
            this._list0.setSelectedItem(""),
            this._list1.setSelectedItem(0)
        },
        t.prototype.onOk = function() {
            var e = ~~this._list0.selectedItem,
            t = ~~this._list1.selectedItem;
            PetFactorCollectionManager.fightType = e,
            PetFactorCollectionManager.tag = t,
            this.hide(),
            EventManager.dispatchEventWith("PveLevelPanelFilterPop_select_ok")
        },
        t.prototype.destroy = function() {
            e.prototype.destroy.call(this),
            EventManager.removeAll(this)
        },
        t
    } (PopView);
    e.PveLevelPanelFilterPop = t,
    __reflect(t.prototype, "petLevelPanel.PveLevelPanelFilterPop");
    var i = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.skinName = PveLevelPanelFilterPopItemSkin,
            t
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            var t = this;
            e.prototype.childrenCreated.call(this),
            ImageButtonUtil.add(this.itDown,
            function() {
                t.selected && EventManager.dispatchEventWith("PveLevelPanelFilterPopItem_select", !1, t.data)
            },
            this)
        },
        t.prototype.dataChanged = function() {
            e.prototype.dataChanged.call(this),
            this.data && ("string" == typeof this.data ? (this.itUp.source = "pve_level_panel_filter_pop_fight_" + ~~this.data + "_up_png", this.itDown.source = "pve_level_panel_filter_pop_fight_" + ~~this.data + "_down_png") : (this.itUp.source = "pve_level_panel_filter_pop_" + ~~this.data + "_up_png", this.itDown.source = "pve_level_panel_filter_pop_" + ~~this.data + "_down_png"))
        },
        t
    } (BaseItemRenderer);
    e.PveLevelPanelFilterPopItem = i,
    __reflect(i.prototype, "petLevelPanel.PveLevelPanelFilterPopItem")
} (petLevelPanel || (petLevelPanel = {}));
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
generateEUI.paths["resource/eui_skins/PetLevelPanelBeastSkin.exml"] = window.PetLevelPanelBeastSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["bg0", "bg", "btnGo0", "btnGo1", "btnGo2", "pet1", "pet2", "pet3"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this._Group2_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Group2_i = function() {
        var e = new eui.Group;
        return e.bottom = 0,
        e.left = 0,
        e.right = 0,
        e.top = 0,
        e.elementsContent = [this.bg0_i(), this._Group1_i()],
        e
    },
    i.bg0_i = function() {
        var e = new eui.Image;
        return this.bg0 = e,
        e.height = 640,
        e.horizontalCenter = 0,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "pet_level_panel_bg_1_jpg",
        e.verticalCenter = 0,
        e.visible = !0,
        e.width = 1136,
        e
    },
    i._Group1_i = function() {
        var e = new eui.Group;
        return e.cacheAsBitmap = !0,
        e.height = 590,
        e.horizontalCenter = -48,
        e.verticalCenter = 0,
        e.width = 1040,
        e.elementsContent = [this.bg_i(), this.btnGo0_i(), this.btnGo1_i(), this.btnGo2_i(), this.pet1_i(), this.pet2_i(), this.pet3_i()],
        e
    },
    i.bg_i = function() {
        var e = new eui.Image;
        return this.bg = e,
        e.left = 0,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "pve_level_panel_beast_1_png",
        e.top = 0,
        e.visible = !0,
        e
    },
    i.btnGo0_i = function() {
        var e = new eui.Image;
        return this.btnGo0 = e,
        e.source = "pet_level_panel_btnGo_png",
        e.x = 265,
        e.y = 476,
        e
    },
    i.btnGo1_i = function() {
        var e = new eui.Image;
        return this.btnGo1 = e,
        e.source = "pet_level_panel_btnGo_png",
        e.x = 569,
        e.y = 476,
        e
    },
    i.btnGo2_i = function() {
        var e = new eui.Image;
        return this.btnGo2 = e,
        e.source = "pet_level_panel_btnGo1_png",
        e.x = 898.278,
        e.y = 476,
        e
    },
    i.pet1_i = function() {
        var e = new eui.Image;
        return this.pet1 = e,
        e.source = "pet_level_panel__btninfo_png",
        e.x = 128,
        e.y = 475,
        e
    },
    i.pet2_i = function() {
        var e = new eui.Image;
        return this.pet2 = e,
        e.source = "pet_level_panel__btninfo_png",
        e.x = 392,
        e.y = 475,
        e
    },
    i.pet3_i = function() {
        var e = new eui.Image;
        return this.pet3 = e,
        e.source = "pet_level_panel__btninfo_png",
        e.x = 718,
        e.y = 475,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/PetLevelPanelItemSkin.exml"] = window.PetLevelPanelItemSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["bg", "grpTag", "newAdd", "grp_content", "collection", "favorite"],
        this.height = 483,
        this.width = 268,
        this.elementsContent = [this.grp_content_i(), this.collection_i(), this.favorite_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i.grp_content_i = function() {
        var e = new eui.Group;
        return this.grp_content = e,
        e.height = 483,
        e.width = 268,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this.bg_i(), this.grpTag_i(), this.newAdd_i()],
        e
    },
    i.bg_i = function() {
        var e = new eui.Image;
        return this.bg = e,
        e.height = 483,
        e.width = 268,
        e.x = 0,
        e.y = 0,
        e
    },
    i.grpTag_i = function() {
        var e = new eui.Group;
        return this.grpTag = e,
        e.horizontalCenter = 0,
        e.verticalCenter = 207.5,
        e.layout = this._HorizontalLayout1_i(),
        e
    },
    i._HorizontalLayout1_i = function() {
        var e = new eui.HorizontalLayout;
        return e.gap = 4,
        e
    },
    i.newAdd_i = function() {
        var e = new eui.Image;
        return this.newAdd = e,
        e.horizontalCenter = 73,
        e.source = "pet_level_panel_factor_newadd_png",
        e.visible = !0,
        e.y = 14,
        e
    },
    i.collection_i = function() {
        var e = new eui.Image;
        return this.collection = e,
        e.source = "pet_level_panel_factor_collection_png",
        e.x = 11,
        e.y = 8,
        e
    },
    i.favorite_i = function() {
        var e = new eui.Image;
        return this.favorite = e,
        e.source = "pet_level_panel_factor_favorite_png",
        e.touchEnabled = !1,
        e.visible = !1,
        e.x = 19,
        e.y = 8,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/PetLevelPanelSkin.exml"] = window.PetLevelPanelSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["bg", "_list", "_scr", "_listFactor", "_scrFactor", "txt_itemNum_1", "txt_itemNum_0", "itemIcon_1", "btnAdd", "itemIcon_0", "grpItem", "img_select", "rb_all", "rb_ss", "rb_s", "rb_a", "rb_b", "btnGroup", "topGroup", "rbCollect1", "rbCollect2", "rbCollect3", "rbCollect4", "rbCollect5", "rbCollect6", "btnCollectGroup", "collectGroup", "txt_search", "btnSearch", "search", "txt_notGot", "cb_notGot", "grpGot", "tab_0", "tab_1", "tab_2", "grpTab", "pet1", "pet2", "pet3", "pet4", "pet5", "grpAres", "beastGroup", "no_pet", "menuGroup"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this._scr_i(), this._scrFactor_i(), this.grpItem_i(), this.topGroup_i(), this.collectGroup_i(), this.search_i(), this.grpGot_i(), this.grpTab_i(), this.grpAres_i(), this.beastGroup_i(), this.no_pet_i(), this.menuGroup_i()]
    }
    __extends(t, e);
    var i = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["labelDisplay"],
            this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "pet_level_panel_factor_img_all_up_png")]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.percentHeight = 100,
            e.source = "pet_level_panel_factor_img_all_down_png",
            e.percentWidth = 100,
            e
        },
        i.labelDisplay_i = function() {
            var e = new eui.Label;
            return this.labelDisplay = e,
            e.horizontalCenter = 0,
            e.verticalCenter = 0,
            e
        },
        t
    } (eui.Skin),
    n = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["labelDisplay"],
            this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "pet_level_panel_factor_img_ss_up_png")]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.percentHeight = 100,
            e.source = "pet_level_panel_factor_img_ss_down_png",
            e.percentWidth = 100,
            e
        },
        i.labelDisplay_i = function() {
            var e = new eui.Label;
            return this.labelDisplay = e,
            e.horizontalCenter = 0,
            e.verticalCenter = 0,
            e
        },
        t
    } (eui.Skin),
    r = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["labelDisplay"],
            this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "pet_level_panel_factor_img_s_up_png")]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.percentHeight = 100,
            e.source = "pet_level_panel_factor_img_s_down_png",
            e.percentWidth = 100,
            e
        },
        i.labelDisplay_i = function() {
            var e = new eui.Label;
            return this.labelDisplay = e,
            e.horizontalCenter = 0,
            e.verticalCenter = 0,
            e
        },
        t
    } (eui.Skin),
    o = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["labelDisplay"],
            this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "pet_level_panel_factor_img_a_up_png")]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.percentHeight = 100,
            e.source = "pet_level_panel_factor_img_a_down_png",
            e.percentWidth = 100,
            e
        },
        i.labelDisplay_i = function() {
            var e = new eui.Label;
            return this.labelDisplay = e,
            e.horizontalCenter = 0,
            e.verticalCenter = 0,
            e
        },
        t
    } (eui.Skin),
    a = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["labelDisplay"],
            this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "pet_level_panel_factor_img_b_up_png")]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.percentHeight = 100,
            e.source = "pet_level_panel_factor_img_b_down_png",
            e.percentWidth = 100,
            e
        },
        i.labelDisplay_i = function() {
            var e = new eui.Label;
            return this.labelDisplay = e,
            e.horizontalCenter = 0,
            e.verticalCenter = 0,
            e
        },
        t
    } (eui.Skin),
    l = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["labelDisplay"],
            this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "pet_level_panel_img_rbcollectdown1_png")]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.percentHeight = 100,
            e.source = "pet_level_panel_img_rbcollectup1_png",
            e.percentWidth = 100,
            e
        },
        i.labelDisplay_i = function() {
            var e = new eui.Label;
            return this.labelDisplay = e,
            e.horizontalCenter = 0,
            e.verticalCenter = 0,
            e
        },
        t
    } (eui.Skin),
    s = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["labelDisplay"],
            this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "pet_level_panel_img_rbcollectdown4_png")]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.percentHeight = 100,
            e.source = "pet_level_panel_img_rbcollectup4_png",
            e.percentWidth = 100,
            e
        },
        i.labelDisplay_i = function() {
            var e = new eui.Label;
            return this.labelDisplay = e,
            e.horizontalCenter = 0,
            e.verticalCenter = 0,
            e
        },
        t
    } (eui.Skin),
    _ = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["labelDisplay"],
            this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "pet_level_panel_img_rbcollectdown3_png")]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.percentHeight = 100,
            e.source = "pet_level_panel_img_rbcollectup3_png",
            e.percentWidth = 100,
            e
        },
        i.labelDisplay_i = function() {
            var e = new eui.Label;
            return this.labelDisplay = e,
            e.horizontalCenter = 0,
            e.verticalCenter = 0,
            e
        },
        t
    } (eui.Skin),
    u = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["labelDisplay"],
            this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "pet_level_panel_img_rbcollectdown5_png")]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.percentHeight = 100,
            e.source = "pet_level_panel_img_rbcollectup5_png",
            e.percentWidth = 100,
            e
        },
        i.labelDisplay_i = function() {
            var e = new eui.Label;
            return this.labelDisplay = e,
            e.horizontalCenter = 0,
            e.verticalCenter = 0,
            e
        },
        t
    } (eui.Skin),
    c = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["labelDisplay"],
            this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "pet_level_panel_img_rbcollectdown2_png")]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.percentHeight = 100,
            e.source = "pet_level_panel_img_rbcollectup2_png",
            e.percentWidth = 100,
            e
        },
        i.labelDisplay_i = function() {
            var e = new eui.Label;
            return this.labelDisplay = e,
            e.horizontalCenter = 0,
            e.verticalCenter = 0,
            e
        },
        t
    } (eui.Skin),
    h = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["labelDisplay"],
            this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "pet_level_panel_img_rbcollectdown6_png")]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.percentHeight = 100,
            e.source = "pet_level_panel_img_rbcollectup6_png",
            e.percentWidth = 100,
            e
        },
        i.labelDisplay_i = function() {
            var e = new eui.Label;
            return this.labelDisplay = e,
            e.horizontalCenter = 0,
            e.verticalCenter = 0,
            e
        },
        t
    } (eui.Skin),
    p = function(e) {
        function t() {
            e.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i()],
            this._Image2_i(),
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.AddItems("_Image2", "", 1, "")]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return e.height = 23,
            e.source = "pet_level_panel_cb_bg_png",
            e.width = 23,
            e.x = 0,
            e.y = 0,
            e
        },
        i._Image2_i = function() {
            var e = new eui.Image;
            return this._Image2 = e,
            e.height = 12,
            e.source = "pet_level_panel_cb_down_png",
            e.width = 16,
            e.x = 4,
            e.y = 6,
            e
        },
        t
    } (eui.Skin),
    g = function(e) {
        function t() {
            e.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i(), this._Label1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "pet_level_panel_tab_up_png"), new eui.SetProperty("_Label1", "textColor", 7177143)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "pet_level_panel_tab_down_png"), new eui.SetProperty("_Label1", "textColor", 16777215)]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.height = 33,
            e.width = 101,
            e.x = 0,
            e.y = 0,
            e
        },
        i._Label1_i = function() {
            var e = new eui.Label;
            return this._Label1 = e,
            e.fontFamily = "MFShangHei",
            e.horizontalCenter = 0,
            e.size = 18,
            e.text = "PVP",
            e.verticalCenter = 0,
            e
        },
        t
    } (eui.Skin),
    v = function(e) {
        function t() {
            e.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i(), this._Label1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "pet_level_panel_tab_up_png"), new eui.SetProperty("_Label1", "textColor", 7177143)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "pet_level_panel_tab_down_png"), new eui.SetProperty("_Label1", "textColor", 16777215)]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.height = 33,
            e.width = 101,
            e.x = 0,
            e.y = 0,
            e
        },
        i._Label1_i = function() {
            var e = new eui.Label;
            return this._Label1 = e,
            e.fontFamily = "MFShangHei",
            e.horizontalCenter = 0,
            e.size = 18,
            e.text = "PVE",
            e.verticalCenter = 0,
            e
        },
        t
    } (eui.Skin),
    f = function(e) {
        function t() {
            e.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i(), this._Label1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "pet_level_panel_tab_up_png"), new eui.SetProperty("_Label1", "textColor", 7177143)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "pet_level_panel_tab_down_png"), new eui.SetProperty("_Label1", "textColor", 16777215)]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.height = 33,
            e.width = 101,
            e.x = 0,
            e.y = 0,
            e
        },
        i._Label1_i = function() {
            var e = new eui.Label;
            return this._Label1 = e,
            e.fontFamily = "MFShangHei",
            e.horizontalCenter = 0,
            e.size = 18,
            e.text = "新手",
            e.verticalCenter = 0,
            e
        },
        t
    } (eui.Skin),
    d = t.prototype;
    return d.bg_i = function() {
        var e = new eui.Image;
        return this.bg = e,
        e.bottom = 0,
        e.left = 0,
        e.right = 0,
        e.source = "common_ui_bg_3_jpg",
        e.top = 0,
        e
    },
    d._scr_i = function() {
        var e = new eui.Scroller;
        return this._scr = e,
        e.height = 508,
        e.left = 173,
        e.right = 0,
        e.visible = !0,
        e.y = 110,
        e.viewport = this._list_i(),
        e
    },
    d._list_i = function() {
        var e = new eui.List;
        return this._list = e,
        e.width = 554,
        e.x = 0,
        e.layout = this._HorizontalLayout1_i(),
        e
    },
    d._HorizontalLayout1_i = function() {
        var e = new eui.HorizontalLayout;
        return e.paddingRight = 26,
        e
    },
    d._scrFactor_i = function() {
        var e = new eui.Scroller;
        return this._scrFactor = e,
        e.height = 508,
        e.left = 173,
        e.right = 0,
        e.visible = !0,
        e.y = 110,
        e.viewport = this._listFactor_i(),
        e
    },
    d._listFactor_i = function() {
        var e = new eui.List;
        return this._listFactor = e,
        e.width = 554,
        e.x = 0,
        e.layout = this._TileLayout1_i(),
        e
    },
    d._TileLayout1_i = function() {
        var e = new eui.TileLayout;
        return e
    },
    d.grpItem_i = function() {
        var e = new eui.Group;
        return this.grpItem = e,
        e.right = 39,
        e.visible = !1,
        e.y = 11,
        e.elementsContent = [this._Image1_i(), this._Image2_i(), this.txt_itemNum_1_i(), this.txt_itemNum_0_i(), this.itemIcon_1_i(), this.btnAdd_i(), this.itemIcon_0_i()],
        e
    },
    d._Image1_i = function() {
        var e = new eui.Image;
        return e.height = 21,
        e.source = "pet_level_panel_img_di2_png",
        e.width = 133,
        e.x = 187,
        e.y = 5,
        e
    },
    d._Image2_i = function() {
        var e = new eui.Image;
        return e.height = 21,
        e.source = "pet_level_panel_img_di2_png",
        e.width = 133,
        e.x = 22,
        e.y = 5,
        e
    },
    d.txt_itemNum_1_i = function() {
        var e = new eui.Label;
        return this.txt_itemNum_1 = e,
        e.fontFamily = "MFShangHei",
        e.horizontalCenter = 89.5,
        e.size = 18,
        e.text = "99999",
        e.textColor = 12834813,
        e.y = 6,
        e
    },
    d.txt_itemNum_0_i = function() {
        var e = new eui.Label;
        return this.txt_itemNum_0 = e,
        e.fontFamily = "MFShangHei",
        e.horizontalCenter = -64.5,
        e.size = 18,
        e.text = "99999",
        e.textColor = 12834813,
        e.y = 6,
        e
    },
    d.itemIcon_1_i = function() {
        var e = new eui.Image;
        return this.itemIcon_1 = e,
        e.height = 29,
        e.source = "pet_level_panel_icon_gold_png",
        e.width = 27,
        e.x = 174,
        e.y = 0,
        e
    },
    d.btnAdd_i = function() {
        var e = new eui.Image;
        return this.btnAdd = e,
        e.height = 21,
        e.source = "pet_level_panel_btnAdd_png",
        e.width = 21,
        e.x = 303,
        e.y = 5,
        e
    },
    d.itemIcon_0_i = function() {
        var e = new eui.Image;
        return this.itemIcon_0 = e,
        e.height = 26,
        e.source = "pet_level_panel_iconCoin2_png",
        e.width = 45,
        e.x = 0,
        e.y = 2,
        e
    },
    d.topGroup_i = function() {
        var e = new eui.Group;
        return this.topGroup = e,
        e.height = 39,
        e.left = 173,
        e.right = 20,
        e.visible = !1,
        e.y = 64,
        e.elementsContent = [this._Image3_i(), this.img_select_i(), this.btnGroup_i()],
        e
    },
    d._Image3_i = function() {
        var e = new eui.Image;
        return e.height = 33,
        e.left = 0,
        e.scale9Grid = new egret.Rectangle(10, 0, 39, 12),
        e.source = "pet_level_panel_factor_selelct_bg_png",
        e.visible = !0,
        e.width = 461,
        e.y = 0,
        e
    },
    d.img_select_i = function() {
        var e = new eui.Image;
        return this.img_select = e,
        e.left = 466,
        e.source = "pet_level_panel_factor_img_select_png",
        e.y = 0,
        e
    },
    d.btnGroup_i = function() {
        var e = new eui.Group;
        return this.btnGroup = e,
        e.left = 28,
        e.y = 5,
        e.elementsContent = [this.rb_all_i(), this.rb_ss_i(), this.rb_s_i(), this.rb_a_i(), this.rb_b_i()],
        e
    },
    d.rb_all_i = function() {
        var e = new eui.RadioButton;
        return this.rb_all = e,
        e.groupName = "qualityGroup",
        e.value = "all",
        e.x = 0,
        e.y = 0,
        e.skinName = i,
        e
    },
    d.rb_ss_i = function() {
        var e = new eui.RadioButton;
        return this.rb_ss = e,
        e.groupName = "qualityGroup",
        e.value = "ss",
        e.x = 82,
        e.y = 0,
        e.skinName = n,
        e
    },
    d.rb_s_i = function() {
        var e = new eui.RadioButton;
        return this.rb_s = e,
        e.groupName = "qualityGroup",
        e.value = "s",
        e.x = 164,
        e.y = 0,
        e.skinName = r,
        e
    },
    d.rb_a_i = function() {
        var e = new eui.RadioButton;
        return this.rb_a = e,
        e.groupName = "qualityGroup",
        e.value = "a",
        e.x = 246,
        e.y = 0,
        e.skinName = o,
        e
    },
    d.rb_b_i = function() {
        var e = new eui.RadioButton;
        return this.rb_b = e,
        e.groupName = "qualityGroup",
        e.value = "b",
        e.x = 327,
        e.y = 0,
        e.skinName = a,
        e
    },
    d.collectGroup_i = function() {
        var e = new eui.Group;
        return this.collectGroup = e,
        e.height = 39,
        e.left = 173,
        e.right = 20,
        e.visible = !0,
        e.y = 64,
        e.elementsContent = [this.btnCollectGroup_i()],
        e
    },
    d.btnCollectGroup_i = function() {
        var e = new eui.Group;
        return this.btnCollectGroup = e,
        e.y = 3,
        e.layout = this._HorizontalLayout2_i(),
        e.elementsContent = [this.rbCollect1_i(), this.rbCollect2_i(), this.rbCollect3_i(), this.rbCollect4_i(), this.rbCollect5_i(), this.rbCollect6_i()],
        e
    },
    d._HorizontalLayout2_i = function() {
        var e = new eui.HorizontalLayout;
        return e.gap = 0,
        e
    },
    d.rbCollect1_i = function() {
        var e = new eui.RadioButton;
        return this.rbCollect1 = e,
        e.groupName = "collectGroup",
        e.value = "1",
        e.x = 0,
        e.y = 0,
        e.skinName = l,
        e
    },
    d.rbCollect2_i = function() {
        var e = new eui.RadioButton;
        return this.rbCollect2 = e,
        e.groupName = "collectGroup",
        e.value = "2",
        e.visible = !0,
        e.x = 246,
        e.y = 0,
        e.skinName = s,
        e
    },
    d.rbCollect3_i = function() {
        var e = new eui.RadioButton;
        return this.rbCollect3 = e,
        e.groupName = "collectGroup",
        e.value = "3",
        e.visible = !0,
        e.x = 164,
        e.y = 0,
        e.skinName = _,
        e
    },
    d.rbCollect4_i = function() {
        var e = new eui.RadioButton;
        return this.rbCollect4 = e,
        e.groupName = "collectGroup",
        e.value = "4",
        e.visible = !0,
        e.x = 327,
        e.y = 0,
        e.skinName = u,
        e
    },
    d.rbCollect5_i = function() {
        var e = new eui.RadioButton;
        return this.rbCollect5 = e,
        e.groupName = "collectGroup",
        e.value = "5",
        e.visible = !1,
        e.x = 82,
        e.y = 0,
        e.skinName = c,
        e
    },
    d.rbCollect6_i = function() {
        var e = new eui.RadioButton;
        return this.rbCollect6 = e,
        e.groupName = "collectGroup",
        e.value = "6",
        e.visible = !1,
        e.x = 408,
        e.y = 0,
        e.skinName = h,
        e
    },
    d.search_i = function() {
        var e = new eui.Group;
        return this.search = e,
        e.right = 10,
        e.visible = !0,
        e.y = 70,
        e.elementsContent = [this._Image4_i(), this.txt_search_i(), this.btnSearch_i()],
        e
    },
    d._Image4_i = function() {
        var e = new eui.Image;
        return e.source = "pet_level_panel_factor_searchbg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    d.txt_search_i = function() {
        var e = new eui.EditableText;
        return this.txt_search = e,
        e.fontFamily = "MFShangHei",
        e.height = 16,
        e.prompt = "输入精灵名或ID",
        e.promptColor = 6388143,
        e.size = 16,
        e.text = "",
        e.textColor = 6388143,
        e.verticalCenter = "1.5",
        e.width = 114,
        e.x = 10,
        e
    },
    d.btnSearch_i = function() {
        var e = new eui.Image;
        return this.btnSearch = e,
        e.source = "pet_level_panel_factor_btnsearch_png",
        e.x = 131,
        e.y = 0,
        e
    },
    d.grpGot_i = function() {
        var e = new eui.Group;
        return this.grpGot = e,
        e.right = 183,
        e.visible = !0,
        e.y = 74,
        e.elementsContent = [this.txt_notGot_i(), this.cb_notGot_i()],
        e
    },
    d.txt_notGot_i = function() {
        var e = new eui.Label;
        return this.txt_notGot = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "未获得",
        e.textColor = 6986751,
        e.x = 0,
        e.y = 3,
        e
    },
    d.cb_notGot_i = function() {
        var e = new eui.CheckBox;
        return this.cb_notGot = e,
        e.height = 23,
        e.label = "CheckBox",
        e.width = 23,
        e.x = 58,
        e.y = 0,
        e.skinName = p,
        e
    },
    d.grpTab_i = function() {
        var e = new eui.Group;
        return this.grpTab = e,
        e.visible = !1,
        e.x = 173,
        e.y = 67,
        e.elementsContent = [this.tab_0_i(), this.tab_1_i(), this.tab_2_i()],
        e
    },
    d.tab_0_i = function() {
        var e = new eui.RadioButton;
        return this.tab_0 = e,
        e.groupName = "pet_level_tab",
        e.value = "1",
        e.x = 0,
        e.y = 0,
        e.skinName = g,
        e
    },
    d.tab_1_i = function() {
        var e = new eui.RadioButton;
        return this.tab_1 = e,
        e.groupName = "pet_level_tab",
        e.value = "2",
        e.x = 100,
        e.y = 0,
        e.skinName = v,
        e
    },
    d.tab_2_i = function() {
        var e = new eui.RadioButton;
        return this.tab_2 = e,
        e.groupName = "pet_level_tab",
        e.value = "3",
        e.x = 201,
        e.y = 0,
        e.skinName = f,
        e
    },
    d.grpAres_i = function() {
        var e = new eui.Group;
        return this.grpAres = e,
        e.horizontalCenter = 80,
        e.visible = !1,
        e.width = 950,
        e.y = 127,
        e.elementsContent = [this.pet1_i(), this.pet2_i(), this.pet3_i(), this.pet4_i(), this.pet5_i()],
        e
    },
    d.pet1_i = function() {
        var e = new eui.Image;
        return this.pet1 = e,
        e.source = "pet_level_panel_1_png",
        e.x = 0,
        e.y = 0,
        e
    },
    d.pet2_i = function() {
        var e = new eui.Image;
        return this.pet2 = e,
        e.source = "pet_level_panel_2_png",
        e.x = 185,
        e.y = 0,
        e
    },
    d.pet3_i = function() {
        var e = new eui.Image;
        return this.pet3 = e,
        e.source = "pet_level_panel_3_png",
        e.x = 371,
        e.y = 0,
        e
    },
    d.pet4_i = function() {
        var e = new eui.Image;
        return this.pet4 = e,
        e.source = "pet_level_panel_4_png",
        e.x = 557,
        e.y = 0,
        e
    },
    d.pet5_i = function() {
        var e = new eui.Image;
        return this.pet5 = e,
        e.source = "pet_level_panel_5_png",
        e.x = 742,
        e.y = 0,
        e
    },
    d.beastGroup_i = function() {
        var e = new eui.Group;
        return this.beastGroup = e,
        e.height = 640,
        e.left = 0,
        e.right = 0,
        e.visible = !0,
        e.y = 0,
        e
    },
    d.no_pet_i = function() {
        var e = new eui.Image;
        return this.no_pet = e,
        e.horizontalCenter = 69,
        e.source = "pet_level_panel_factor_no_pet_png",
        e.verticalCenter = 10.5,
        e.visible = !0,
        e
    },
    d.menuGroup_i = function() {
        var e = new eui.Group;
        return this.menuGroup = e,
        e.visible = !0,
        e.x = 0,
        e.y = 48,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/PetLevelPanelWeeklyItemSkin.exml"] = window.PetLevelPanelWeeklyItemSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["img_pet", "petName", "sc_up", "sc_down", "imgTag"],
        this.height = 288,
        this.width = 178,
        this.elementsContent = [this._Group1_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Group1_i = function() {
        var e = new eui.Group;
        return e.x = 0,
        e.y = 0,
        e.elementsContent = [this.img_pet_i(), this._Image1_i(), this._Image2_i(), this.petName_i(), this.sc_up_i(), this.sc_down_i(), this.imgTag_i()],
        e
    },
    i.img_pet_i = function() {
        var e = new eui.Image;
        return this.img_pet = e,
        e.height = 278,
        e.horizontalCenter = 0,
        e.verticalCenter = 0,
        e.width = 168,
        e
    },
    i._Image1_i = function() {
        var e = new eui.Image;
        return e.height = 78,
        e.scale9Grid = new egret.Rectangle(0, 0, 40, 78),
        e.source = "pet_level_panel_factor_img_petrect_png",
        e.touchEnabled = !1,
        e.width = 168,
        e.x = 6,
        e.y = 207,
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.height = 288,
        e.scale9Grid = new egret.Rectangle(26, 259, 14, 13),
        e.source = "pet_level_panel_factor_waikuang_xian_png",
        e.touchEnabled = !1,
        e.visible = !0,
        e.width = 178,
        e.x = 0,
        e.y = 0,
        e
    },
    i.petName_i = function() {
        var e = new eui.Label;
        return this.petName = e,
        e.fontFamily = "MFShangHei",
        e.horizontalCenter = 0,
        e.size = 18,
        e.text = "战武天尊",
        e.textColor = 15660287,
        e.touchEnabled = !1,
        e.y = 259,
        e
    },
    i.sc_up_i = function() {
        var e = new eui.Image;
        return this.sc_up = e,
        e.source = "pet_level_panel_factor_collection_png",
        e.visible = !0,
        e.x = 5,
        e.y = 2,
        e
    },
    i.sc_down_i = function() {
        var e = new eui.Image;
        return this.sc_down = e,
        e.source = "pet_level_panel_factor_favorite_png",
        e.touchEnabled = !1,
        e.visible = !1,
        e.x = 13,
        e.y = 2,
        e
    },
    i.imgTag_i = function() {
        var e = new eui.Image;
        return this.imgTag = e,
        e.height = 25,
        e.right = 5,
        e.width = 63,
        e.y = 5,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/PveLevelPanelBeastAllSkin.exml"] = window.PveLevelPanelBeastAllSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["a_1", "a_2", "a_3", "a_4", "a_5", "collection_1", "favorite_1", "collection_2", "favorite_2", "collection_3", "favorite_3", "collection_4", "favorite_4", "collection_5", "favorite_5"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this._Group2_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Group2_i = function() {
        var e = new eui.Group;
        return e.bottom = 0,
        e.left = 0,
        e.right = 0,
        e.top = 0,
        e.elementsContent = [this._Group1_i()],
        e
    },
    i._Group1_i = function() {
        var e = new eui.Group;
        return e.cacheAsBitmap = !0,
        e.height = 607,
        e.horizontalCenter = 65.5,
        e.scaleX = 1,
        e.scaleY = 1,
        e.verticalCenter = -4.5,
        e.width = 885,
        e.x = 190.99999999999997,
        e.y = 12,
        e.elementsContent = [this.a_1_i(), this.a_2_i(), this.a_3_i(), this.a_4_i(), this.a_5_i(), this._Image1_i(), this.collection_1_i(), this.favorite_1_i(), this.collection_2_i(), this.favorite_2_i(), this.collection_3_i(), this.favorite_3_i(), this.collection_4_i(), this.favorite_4_i(), this.collection_5_i(), this.favorite_5_i()],
        e
    },
    i.a_1_i = function() {
        var e = new eui.Image;
        return this.a_1 = e,
        e.source = "pve_level_panel_beast_all_1_png",
        e.x = 0,
        e.y = 114,
        e
    },
    i.a_2_i = function() {
        var e = new eui.Image;
        return this.a_2 = e,
        e.source = "pve_level_panel_beast_all_2_png",
        e.x = 176,
        e.y = 141,
        e
    },
    i.a_3_i = function() {
        var e = new eui.Image;
        return this.a_3 = e,
        e.source = "pve_level_panel_beast_all_3_png",
        e.x = 354,
        e.y = 113,
        e
    },
    i.a_4_i = function() {
        var e = new eui.Image;
        return this.a_4 = e,
        e.source = "pve_level_panel_beast_all_4_png",
        e.x = 530,
        e.y = 141,
        e
    },
    i.a_5_i = function() {
        var e = new eui.Image;
        return this.a_5 = e,
        e.source = "pve_level_panel_beast_all_5_png",
        e.x = 707,
        e.y = 117,
        e
    },
    i._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "pve_level_panel_beast_all_title_png",
        e.x = 127,
        e.y = 0,
        e
    },
    i.collection_1_i = function() {
        var e = new eui.Image;
        return this.collection_1 = e,
        e.source = "pve_level_panel_beast_collection_png",
        e.visible = !0,
        e.x = 120,
        e.y = 155,
        e
    },
    i.favorite_1_i = function() {
        var e = new eui.Image;
        return this.favorite_1 = e,
        e.source = "pve_level_panel_beast_favorite_png",
        e.visible = !1,
        e.x = 120,
        e.y = 155,
        e
    },
    i.collection_2_i = function() {
        var e = new eui.Image;
        return this.collection_2 = e,
        e.source = "pve_level_panel_beast_collection_png",
        e.visible = !0,
        e.x = 296,
        e.y = 181,
        e
    },
    i.favorite_2_i = function() {
        var e = new eui.Image;
        return this.favorite_2 = e,
        e.source = "pve_level_panel_beast_favorite_png",
        e.visible = !1,
        e.x = 296,
        e.y = 181,
        e
    },
    i.collection_3_i = function() {
        var e = new eui.Image;
        return this.collection_3 = e,
        e.source = "pve_level_panel_beast_collection_png",
        e.visible = !0,
        e.x = 473,
        e.y = 153,
        e
    },
    i.favorite_3_i = function() {
        var e = new eui.Image;
        return this.favorite_3 = e,
        e.source = "pve_level_panel_beast_favorite_png",
        e.visible = !1,
        e.x = 473,
        e.y = 153,
        e
    },
    i.collection_4_i = function() {
        var e = new eui.Image;
        return this.collection_4 = e,
        e.source = "pve_level_panel_beast_collection_png",
        e.visible = !0,
        e.x = 649,
        e.y = 181,
        e
    },
    i.favorite_4_i = function() {
        var e = new eui.Image;
        return this.favorite_4 = e,
        e.source = "pve_level_panel_beast_favorite_png",
        e.visible = !1,
        e.x = 649,
        e.y = 181,
        e
    },
    i.collection_5_i = function() {
        var e = new eui.Image;
        return this.collection_5 = e,
        e.source = "pve_level_panel_beast_collection_png",
        e.visible = !0,
        e.x = 826,
        e.y = 155,
        e
    },
    i.favorite_5_i = function() {
        var e = new eui.Image;
        return this.favorite_5 = e,
        e.source = "pve_level_panel_beast_favorite_png",
        e.visible = !1,
        e.x = 826,
        e.y = 155,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/PveLevelPanelFilterPopItemSkin.exml"] = window.PveLevelPanelFilterPopItemSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["itUp", "itDown"],
        this.height = 26,
        this.width = 72,
        this.elementsContent = [this.itUp_i(), this.itDown_i()],
        this.states = [new eui.State("up", [new eui.SetProperty("itDown", "visible", !1)]), new eui.State("down", [new eui.SetProperty("itUp", "visible", !1)])]
    }
    __extends(t, e);
    var i = t.prototype;
    return i.itUp_i = function() {
        var e = new eui.Image;
        return this.itUp = e,
        e.source = "pve_level_panel_filter_pop_1_up_png",
        e.x = 0,
        e.y = 1,
        e
    },
    i.itDown_i = function() {
        var e = new eui.Image;
        return this.itDown = e,
        e.source = "pve_level_panel_filter_pop_1_down_png",
        e.x = 0,
        e.y = 0,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/PveLevelPanelFilterPopSkin.exml"] = window.PveLevelPanelFilterPopSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["_list0", "_list1", "btnClose", "btnCancel", "btnOk"],
        this.height = 285,
        this.width = 481,
        this.elementsContent = [this._Image1_i(), this._Group1_i(), this.btnClose_i(), this.btnCancel_i(), this.btnOk_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "pve_level_panel_filter_pop_bg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i._Group1_i = function() {
        var e = new eui.Group;
        return e.height = 121,
        e.width = 341,
        e.x = 112,
        e.y = 65,
        e.elementsContent = [this._Scroller1_i(), this._Scroller2_i()],
        e
    },
    i._Scroller1_i = function() {
        var e = new eui.Scroller;
        return e.height = 26,
        e.width = 329.618,
        e.x = 0,
        e.y = 0,
        e.viewport = this._list0_i(),
        e
    },
    i._list0_i = function() {
        var e = new eui.List;
        return this._list0 = e,
        e.layout = this._HorizontalLayout1_i(),
        e
    },
    i._HorizontalLayout1_i = function() {
        var e = new eui.HorizontalLayout;
        return e
    },
    i._Scroller2_i = function() {
        var e = new eui.Scroller;
        return e.height = 61.252,
        e.width = 329.618,
        e.x = 0,
        e.y = 58,
        e.viewport = this._list1_i(),
        e
    },
    i._list1_i = function() {
        var e = new eui.List;
        return this._list1 = e,
        e.height = 62.336,
        e.layout = this._TileLayout1_i(),
        e
    },
    i._TileLayout1_i = function() {
        var e = new eui.TileLayout;
        return e.requestedColumnCount = 4,
        e
    },
    i.btnClose_i = function() {
        var e = new eui.Image;
        return this.btnClose = e,
        e.source = "pve_level_panel_filter_pop_btnclose_png",
        e.x = 438,
        e.y = 0,
        e
    },
    i.btnCancel_i = function() {
        var e = new eui.Image;
        return this.btnCancel = e,
        e.source = "pve_level_panel_filter_pop_btncancel_png",
        e.x = 67,
        e.y = 213,
        e
    },
    i.btnOk_i = function() {
        var e = new eui.Image;
        return this.btnOk = e,
        e.source = "pve_level_panel_filter_pop_btnok_png",
        e.x = 274,
        e.y = 213,
        e
    },
    t
} (eui.Skin);