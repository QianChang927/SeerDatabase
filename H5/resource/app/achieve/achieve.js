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
    return new(i || (i = Promise))(function(r, a) {
        function o(e) {
            try {
                h(n.next(e))
            } catch(t) {
                a(t)
            }
        }
        function s(e) {
            try {
                h(n["throw"](e))
            } catch(t) {
                a(t)
            }
        }
        function h(e) {
            e.done ? r(e.value) : new i(function(t) {
                t(e.value)
            }).then(o, s)
        }
        h((n = n.apply(e, t || [])).next())
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
        for (; h;) try {
            if (r = 1, a && (o = a[2 & i[0] ? "return": i[0] ? "throw": "next"]) && !(o = o.call(a, i[1])).done) return o;
            switch (a = 0, o && (i = [0, o.value]), i[0]) {
            case 0:
            case 1:
                o = i;
                break;
            case 4:
                return h.label++,
                {
                    value: i[1],
                    done: !1
                };
            case 5:
                h.label++,
                a = i[1],
                i = [0];
                continue;
            case 7:
                i = h.ops.pop(),
                h.trys.pop();
                continue;
            default:
                if (o = h.trys, !(o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                    h = 0;
                    continue
                }
                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                    h.label = i[1];
                    break
                }
                if (6 === i[0] && h.label < o[1]) {
                    h.label = o[1],
                    o = i;
                    break
                }
                if (o && h.label < o[2]) {
                    h.label = o[2],
                    h.ops.push(i);
                    break
                }
                o[2] && h.ops.pop(),
                h.trys.pop();
                continue
            }
            i = t.call(e, h)
        } catch(n) {
            i = [6, n],
            a = 0
        } finally {
            r = o = 0
        }
        if (5 & i[0]) throw i[1];
        return {
            value: i[0] ? i[1] : void 0,
            done: !0
        }
    }
    var r, a, o, s, h = {
        label: 0,
        sent: function() {
            if (1 & o[0]) throw o[1];
            return o[1]
        },
        trys: [],
        ops: []
    };
    return s = {
        next: i(0),
        "throw": i(1),
        "return": i(2)
    },
    "function" == typeof Symbol && (s[Symbol.iterator] = function() {
        return this
    }),
    s
},
achieve; !
function(e) {
    var t = function() {
        function e() {}
        return e.EVENT_AFTER_GET_ACHIEVE = "achieve.afterGetAchieve",
        e.EVENT_SEARCH_FROM_MAIN = "achieve.searchFromMain",
        e
    } ();
    e.EventConst = t,
    __reflect(t.prototype, "achieve.EventConst");
    var i = function(i) {
        function n() {
            var e = i.call(this) || this;
            return e.groupName = "achieve",
            e.listCnt4Anim = 5,
            e.skinName = "AchieveBasePanelSkin",
            e
        }
        return __extends(n, i),
        n.prototype.childrenCreated = function() {
            var e = this;
            this.addEvent(),
            this.onResize(),
            AchieveManager.updateInfo().then(function() {
                e.init()
            }),
            ImageButtonUtil.add(this.btnSearch,
            function() {
                var t = e.txt_search.text.trim();
                t.length > 0 ? (n.SEARCH_FROM_MAIN = !1, e.mainPanel.parent && (e.group.removeChild(e.mainPanel), e.group.addChild(e.subPanel), n.SEARCH_FROM_MAIN = !0), e.subPanel.searchAchieve(t)) : (BubblerManager.getInstance().showText("请输入成就信息"), e.txt_search.text = "")
            },
            this)
        },
        n.prototype.init = function() {
            this.mainPanel = new e.MainPanel(this),
            this.subPanel = new e.SubPanel,
            this.initBtnClose("achieve_main_panel_imgtitle_png", this);
            var t = new MenuData;
            t.groupName = this.groupName,
            t["default"] = 1,
            t.root = [1, 2, 3, 4, 5, 6, 7],
            t.data = {
                1 : {
                    title: "成就总览"
                },
                2 : {
                    title: "赛尔类"
                },
                3 : {
                    title: "精灵类"
                },
                4 : {
                    title: "挑战类"
                },
                5 : {
                    title: "闯关类"
                },
                6 : {
                    title: "对抗类"
                },
                7 : {
                    title: "其他类"
                }
            },
            this.menu = Menu.createMenu(t, this, 48),
            this.achievement_group_rule = config.xml.getAnyRes("achievement_rule"),
            this.compressRule = new HashMap;
            for (var i = 0,
            n = this.achievement_group_rule.AchievementRules.Branch; i < n.length; i++) {
                var r = n[i];
                this.compressRule.add(r.ID, r)
            }
        },
        n.prototype.addEvent = function() {
            EventManager.addEventListener(BaseMenuEvent.BASE_MENU_SELECT_CHANGE_ + this.groupName, this.onChangeTab, this),
            egret.lifecycle.stage.addEventListener(egret.Event.RESIZE, this.onResize, this),
            EventManager.addEventListener(t.EVENT_SEARCH_FROM_MAIN, this.backToMainPanel, this)
        },
        n.prototype.onResize = function() {
            this.grpSearch.x = .8 * this.stage.stageWidth
        },
        n.prototype.onChangeTab = function() {
            e.SubPanel.IS_SEARCH = !1;
            var t = this.menu.selectedValue;
            1 == t ? (this.subPanel.parent && this.group.removeChild(this.subPanel), this.group.addChild(this.mainPanel), this.mainPanel.update()) : (this.mainPanel.parent && (this.group.removeChild(this.mainPanel), this.group.addChild(this.subPanel)), this.subPanel.update(t - 2))
        },
        n.prototype.destroy = function() {
            this.achievement_group_rule = null,
            this.compressRule.clear(),
            this.menu && this.menu.destroy(),
            this.mainPanel.destroy(),
            this.subPanel.destroy(),
            EventManager.removeAll(this),
            egret.lifecycle.stage.removeEventListener(egret.Event.RESIZE, this.onResize, this),
            i.prototype.destroy.call(this)
        },
        n.prototype.reShow = function() {
            this.mainPanel.parent && this.mainPanel.update()
        },
        n.prototype.oneKeyGet = function(e) {
            for (var t = this,
            i = [], n = 0, r = this.arrNotGet; n < r.length; n++) {
                var a = r[n];
                if ( - 1 == i.indexOf(a.branchId)) {
                    if (void 0 != e && a.type != e) continue;
                    var o = AchieveManager.awardMask[a.branchId - 1];
                    o.award_mask != o.rule_mask && i.push(a.branchId)
                }
            }
            if (0 == i.length) BubblerManager.getInstance().showText("当前没有可领取的成就");
            else {
                this.listCnt4Anim = i.length;
                var s = 40,
                h = function() {
                    var e = Math.min(i.length, s);
                    e > 0 ? SocketConnection.sendByQueue(45817, [e, i.splice(0, e)],
                    function() {
                        h()
                    }) : t.afterOneKey()
                };
                h()
            }
        },
        n.prototype.afterOneKey = function() {
            var e = this;
            egret.lifecycle.stage.touchChildren = !1;
            var t;
            this.mainPanel.parent ? t = this.mainPanel: this.subPanel.parent && (t = this.subPanel);
            for (var i = 0; i < Math.min(this.listCnt4Anim, t.list.numChildren); i++) {
                var n = t.list.getChildAt(i);
                gsap.to(n.group, {
                    x: 800
                }),
                gsap.to(n, {
                    scaleY: 0,
                    alpha: 0
                })
            }
            egret.setTimeout(function() {
                return __awaiter(e, void 0, void 0,
                function() {
                    return __generator(this,
                    function(e) {
                        switch (e.label) {
                        case 0:
                            return [4, AchieveManager.updateInfo()];
                        case 1:
                            return e.sent(),
                            t.update(),
                            t != this.mainPanel && this.mainPanel.update(),
                            egret.lifecycle.stage.touchChildren = !0,
                            [2]
                        }
                    })
                })
            },
            this, 600)
        },
        n.prototype.updateRedDot = function() {
            for (var e = [], t = 0, i = this.arrNotGet; t < i.length; t++) {
                var n = i[t];
                e[n.type + 2] = !0
            }
            for (var r = 2; 7 >= r; r++) Menu.updateRed(this.groupName, r, !!e[r])
        },
        n.prototype.updatePartRedDot = function(e, t) {
            for (var i = 2; 7 >= i; i++) if (e + 2 == i) {
                Menu.updateRed(this.groupName, i, t);
                break
            }
        },
        n.searchSubAchieve = function(e, t) {
            for (var i, r = 0; r < window.egret_stages[0].$children[0].$children.length; r++) if ("appLevel" == window.egret_stages[0].$children[0].$children[r].$name) {
                for (var a = 0; a < window.egret_stages[0].$children[0].$children[r].$children.length && (i = window.egret_stages[0].$children[0].$children[r].$children[a], !(i instanceof n)); a++);
                break
            }
            if ("number" == typeof e) i.subPanel.searchSubAchieve(e, t);
            else {
                for (var o = 0; 6 > o; o++) for (var s = AchieveXMLInfo.getBranchesByType(o), h = 0, u = s.Branches; h < u.length; h++) for (var c = u[h], l = function(t) {
                    if (AchieveManager.checkAchieveActive(t.ID) && t.Rule) for (var n = function(n) {
                        return n.hide || (n.branchId = t.ID, n.branchDesc = t.Desc, n.IsSingle = t.IsSingle, n.isShowPro = t.isShowPro, n.type = o, e != n.achName && e != t.Desc) ? void 0 : (i.mainPanel.parent && (i.group.removeChild(i.mainPanel), i.group.addChild(i.subPanel)), i.menu.updateView(o + 2), i.subPanel.update(o), egret.setTimeout(function() {
                            i.subPanel.searchSubAchieve(t.ID, n.ID)
                        },
                        i, 500), {
                            value: void 0
                        })
                    },
                    r = 0, a = t.Rule; r < a.length; r++) {
                        var s = a[r],
                        h = n(s);
                        if ("object" == typeof h) return h
                    }
                },
                _ = 0, g = c.Branch; _ < g.length; _++) {
                    var p = g[_],
                    m = l(p);
                    if ("object" == typeof m) return m.value
                }
                console.log("没找到~")
            }
        },
        n.prototype.backToMainPanel = function() {
            this.subPanel.parent && this.group.removeChild(this.subPanel),
            this.group.addChild(this.mainPanel),
            this.mainPanel.update(),
            n.SEARCH_FROM_MAIN = !1
        },
        n.SEARCH_FROM_MAIN = !1,
        n
    } (BaseModule);
    e.Achieve = i,
    __reflect(i.prototype, "achieve.Achieve")
} (achieve || (achieve = {}));
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
    return new(i || (i = Promise))(function(r, a) {
        function o(e) {
            try {
                h(n.next(e))
            } catch(t) {
                a(t)
            }
        }
        function s(e) {
            try {
                h(n["throw"](e))
            } catch(t) {
                a(t)
            }
        }
        function h(e) {
            e.done ? r(e.value) : new i(function(t) {
                t(e.value)
            }).then(o, s)
        }
        h((n = n.apply(e, t || [])).next())
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
        for (; h;) try {
            if (r = 1, a && (o = a[2 & i[0] ? "return": i[0] ? "throw": "next"]) && !(o = o.call(a, i[1])).done) return o;
            switch (a = 0, o && (i = [0, o.value]), i[0]) {
            case 0:
            case 1:
                o = i;
                break;
            case 4:
                return h.label++,
                {
                    value: i[1],
                    done: !1
                };
            case 5:
                h.label++,
                a = i[1],
                i = [0];
                continue;
            case 7:
                i = h.ops.pop(),
                h.trys.pop();
                continue;
            default:
                if (o = h.trys, !(o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                    h = 0;
                    continue
                }
                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                    h.label = i[1];
                    break
                }
                if (6 === i[0] && h.label < o[1]) {
                    h.label = o[1],
                    o = i;
                    break
                }
                if (o && h.label < o[2]) {
                    h.label = o[2],
                    h.ops.push(i);
                    break
                }
                o[2] && h.ops.pop(),
                h.trys.pop();
                continue
            }
            i = t.call(e, h)
        } catch(n) {
            i = [6, n],
            a = 0
        } finally {
            r = o = 0
        }
        if (5 & i[0]) throw i[1];
        return {
            value: i[0] ? i[1] : void 0,
            done: !0
        }
    }
    var r, a, o, s, h = {
        label: 0,
        sent: function() {
            if (1 & o[0]) throw o[1];
            return o[1]
        },
        trys: [],
        ops: []
    };
    return s = {
        next: i(0),
        "throw": i(1),
        "return": i(2)
    },
    "function" == typeof Symbol && (s[Symbol.iterator] = function() {
        return this
    }),
    s
},
achieve; !
function(e) {
    var t = function(t) {
        function i() {
            var e = t.call(this) || this;
            return e.skinName = "AchieveItemSkin",
            e.numAward = 0,
            e
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            var t = this;
            ImageButtonUtil.add(this.btnGet,
            function() {
                SocketConnection.sendWithCallback(42407,
                function() {
                    console.log("get achieve " + t.data.branchId + "  " + t.data.ID),
                    EventManager.dispatchEventWith(e.EventConst.EVENT_AFTER_GET_ACHIEVE, !1, t)
                },
                [t.data.branchId, t.data.ID])
            },
            this),
            ImageButtonUtil.add(this.imgIcon,
            function() {
                if (t.data.SpeNameBonus) tipsPop.TipsPop.openTitlePop({
                    SpeNameBonus: t.data.SpeNameBonus
                });
                else {
                    var e = {};
                    e.branchId = t.data.branchId,
                    e.ruleId = t.data.ID,
                    tipsPop.TipsPop.openTitlePop(e)
                }
            },
            this)
        },
        i.prototype.dataChanged = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var e, t, i, i, n, r, a, o = this;
                return __generator(this,
                function(s) {
                    switch (s.label) {
                    case 0:
                        return this.group.x = 0,
                        this.scaleY = this.alpha = 1,
                        102 != this.data.branchId ? [3, 2] : [4, SocketConnection.sendWithPromise(3405, [102])];
                    case 1:
                        s.sent(),
                        s.label = 2;
                    case 2:
                        return - 1 != [2, 14, 18].indexOf(this.data.branchId) ? this.imgIcon.source = ClientConfig.getAchieveSPTIcon(this.data.proicon) : (this.data.proicon || (e = AchieveXMLInfo.getRule(this.data.branchId, this.data.ruleId), this.data.proicon = e.proicon), this.imgIcon.source = ClientConfig.getAchieveIcon(this.data.proicon)),
                        this.txtDes.text = this.data.Desc,
                        this.txtName.text = this.data.achName ? this.data.achName: this.data.branchDesc,
                        this.imgNum.source = ClientConfig.getAchievePointIcon(this.data.AchievementPoint),
                        this.clearAwardItem(),
                        t = AchieveManager.getAchieveBonus(this.data.branchId, this.data.ID),
                        t && (i = this.getAwardItem(), i.type = t.rewardtype, i.info = t.rewardid, i.imgTitle.visible = !1, i.imgBG.source = "common_item_bg_style_73_73_png", 1 == t.rewardtype ? (i.imgIcon.source = ClientConfig.getItemIcon(t.rewardid), i.txtNum.text = t.rewardcnt) : 2 == t.rewardtype && (i.imgIcon.source = ClientConfig.getMarkPath( + t.rewardid), i.txtNum.text = "")),
                        this.data.SpeNameBonus && (i = this.getAwardItem(), i.type = 3, i.info = this.data, i.txtNum.text = "", i.imgTitle.visible = !0, i.imgBG.source = "title_item_imgbg_png", 16777215 == this.data.titleColor ? i.imgIcon.source = ClientConfig.getAchieveTitleIcon(this.data.SpeNameBonus) : i.imgIcon.source = ClientConfig.getAchieveIcon(this.data.proicon)),
                        n = AchieveManager.awardMask[this.data.branchId - 1],
                        r = !!KTool.getBit(n.rule_mask, this.data.ID),
                        a = !!KTool.getBit(n.award_mask, this.data.ID),
                        this.imgHas.visible = a,
                        this.btnGet.visible = r && !a,
                        this.groupProgress.visible = !r,
                        this.groupProgress.visible && (this.data.isShowPro ? AchieveManager.getSingleInfo(this.data.branchId,
                        function(e) {
                            o.txtProgress.text = e.benchmark + "/" + o.data.Threshold,
                            o.progress.value = e.benchmark / o.data.Threshold * 100
                        },
                        this) : (this.txtProgress.text = "0/1", this.progress.value = 0)),
                        [2]
                    }
                })
            })
        },
        i.prototype.clearAwardItem = function() {
            for (var e = 0; e < this.groupAward.numChildren; e++) {
                var t = this.groupAward.getChildAt(e);
                t.visible = !1
            }
            this.numAward = 0
        },
        i.prototype.getAwardItem = function() {
            var t;
            return this.groupAward.numChildren > this.numAward ? (t = this.groupAward.getChildAt(this.numAward), t.visible = !0) : (t = new e.CommonItem, this.groupAward.addChild(t)),
            this.numAward++,
            t
        },
        i.prototype.destroy = function() {
            ImageButtonUtil.removeAll(this);
            for (var e = 0; e < this.groupAward.numChildren; e++) {
                var t = this.groupAward.getChildAt(e);
                t.destroy()
            }
        },
        i
    } (eui.ItemRenderer);
    e.AchieveItem = t,
    __reflect(t.prototype, "achieve.AchieveItem")
} (achieve || (achieve = {}));
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
achieve; !
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.skinName = "CommonItemSkin",
            t.cacheAsBitmap = !0,
            t
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            var e = this;
            ImageButtonUtil.add(this.imgIcon,
            function() {
                1 == e.type ? tipsPop.TipsPop.openItemPop({
                    id: e.info
                }) : 2 == e.type ? tipsPop.TipsPop.openCounterMarkPop({
                    ins: e.info
                }) : 3 == e.type && tipsPop.TipsPop.openTitleInfoPop(e.info.SpeNameBonus)
            },
            this)
        },
        t.prototype.destroy = function() {
            ImageButtonUtil.removeAll(this)
        },
        t
    } (eui.Component);
    e.CommonItem = t,
    __reflect(t.prototype, "achieve.CommonItem")
} (achieve || (achieve = {}));
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
achieve; !
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.skinName = "RankItemSkin",
            t.cacheAsBitmap = !0,
            t
        }
        return __extends(t, e),
        t.prototype.dataChanged = function() {
            this.txtName.text = this.data.nick,
            this.txtId.text = this.data.userid,
            this.txtScore.text = this.data.score,
            this.data.index <= 3 ? (this.imgBG.source = "achieve_rank_item_itembg" + this.data.index + "_png", this.txtRank.text = "", this.imgRank.source = "achieve_rank_item_img" + this.data.index + "_png") : (this.imgBG.source = "achieve_rank_item_itembg" + (this.data.index % 2 + 4) + "_png", this.imgRank.source = "", this.txtRank.text = this.data.index)
        },
        t
    } (eui.ItemRenderer);
    e.RankPopItem = t,
    __reflect(t.prototype, "achieve.RankPopItem")
} (achieve || (achieve = {}));
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
achieve; !
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.skinName = "TitleItemSkin",
            t
        }
        return __extends(t, e),
        t
    } (eui.Component);
    e.TitleItem = t,
    __reflect(t.prototype, "achieve.TitleItem")
} (achieve || (achieve = {}));
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
    return new(i || (i = Promise))(function(r, a) {
        function o(e) {
            try {
                h(n.next(e))
            } catch(t) {
                a(t)
            }
        }
        function s(e) {
            try {
                h(n["throw"](e))
            } catch(t) {
                a(t)
            }
        }
        function h(e) {
            e.done ? r(e.value) : new i(function(t) {
                t(e.value)
            }).then(o, s)
        }
        h((n = n.apply(e, t || [])).next())
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
        for (; h;) try {
            if (r = 1, a && (o = a[2 & i[0] ? "return": i[0] ? "throw": "next"]) && !(o = o.call(a, i[1])).done) return o;
            switch (a = 0, o && (i = [0, o.value]), i[0]) {
            case 0:
            case 1:
                o = i;
                break;
            case 4:
                return h.label++,
                {
                    value: i[1],
                    done: !1
                };
            case 5:
                h.label++,
                a = i[1],
                i = [0];
                continue;
            case 7:
                i = h.ops.pop(),
                h.trys.pop();
                continue;
            default:
                if (o = h.trys, !(o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                    h = 0;
                    continue
                }
                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                    h.label = i[1];
                    break
                }
                if (6 === i[0] && h.label < o[1]) {
                    h.label = o[1],
                    o = i;
                    break
                }
                if (o && h.label < o[2]) {
                    h.label = o[2],
                    h.ops.push(i);
                    break
                }
                o[2] && h.ops.pop(),
                h.trys.pop();
                continue
            }
            i = t.call(e, h)
        } catch(n) {
            i = [6, n],
            a = 0
        } finally {
            r = o = 0
        }
        if (5 & i[0]) throw i[1];
        return {
            value: i[0] ? i[1] : void 0,
            done: !0
        }
    }
    var r, a, o, s, h = {
        label: 0,
        sent: function() {
            if (1 & o[0]) throw o[1];
            return o[1]
        },
        trys: [],
        ops: []
    };
    return s = {
        next: i(0),
        "throw": i(1),
        "return": i(2)
    },
    "function" == typeof Symbol && (s[Symbol.iterator] = function() {
        return this
    }),
    s
},
achieve; !
function(e) {
    var t = function(t) {
        function i(e) {
            var i = t.call(this) || this;
            return i.skinName = "AchieveMainPanelSkin",
            i.main = e,
            i
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            this.init(),
            this.addEvent()
        },
        i.prototype.init = function() {
            this.list.itemRenderer = e.AchieveItem,
            this.arrayCollection = new eui.ArrayCollection,
            this.list.dataProvider = this.arrayCollection,
            this.aniUp = SpineUtil.createAnimate("tisheng"),
            this.groupMilitary.addChild(this.aniUp),
            this.aniUp.play("tisheng"),
            this.aniUp.x = 105,
            this.aniUp.y = 25
        },
        i.prototype.addEvent = function() {
            var t = this;
            ImageButtonUtil.add(this.btnRankList,
            function() {
                PopViewManager.getInstance().openView(new e.AchieveRankPop)
            },
            this),
            ImageButtonUtil.add(this.btnOneKey,
            function() {
                t.main.oneKeyGet()
            },
            this),
            ImageButtonUtil.add(this.groupMilitary,
            function() {
                ModuleManager.showModuleByID(222)
            },
            this),
            EventManager.addEventListener(e.EventConst.EVENT_AFTER_GET_ACHIEVE,
            function(e) {
                return __awaiter(t, void 0, void 0,
                function() {
                    var t, i, n;
                    return __generator(this,
                    function(r) {
                        switch (r.label) {
                        case 0:
                            for (i = 0; i < this.list.numChildren; i++) if (n = this.list.getChildAt(i), n.itemIndex == e.data.itemIndex && n.visible) {
                                t = n;
                                break
                            }
                            return t ? (egret.lifecycle.stage.touchChildren = !1, gsap.to(t.group, {
                                x: 800
                            }), [4, gsap.to(t, {
                                scaleY: 0,
                                alpha: 0
                            })]) : [3, 3];
                        case 1:
                            return r.sent(),
                            [4, AchieveManager.updateInfo()];
                        case 2:
                            return r.sent(),
                            this.update(),
                            egret.lifecycle.stage.touchChildren = !0,
                            [3, 4];
                        case 3:
                            this.update(),
                            r.label = 4;
                        case 4:
                            return [2]
                        }
                    })
                })
            },
            this)
        },
        i.prototype.update = function() {
            this.txtAllAchieve.text = "" + MainManager.actorInfo.totalAchieve,
            this.txtMilitaryRank.text = AchieveManager.getAchieveTitle();
            var e = AchieveManager.getCurAchieveInfo();
            this.imgMilitaryRank.source = ClientConfig.getAchieveRankIcon(e.id);
            var t = AchieveManager.myAchieveNum + "/<font color= #FFFFFF>" + AchieveManager.totalAchieveNum + "</font>";
            this.txtProgress.textFlow = (new egret.HtmlTextParser).parse(t),
            this.progress.value = AchieveManager.myAchieveNum / AchieveManager.totalAchieveNum * 100,
            this.imgUp.visible = this.aniUp.visible = AchieveManager.getAchieveInfoByRank(AchieveManager.getRankLv() + 1).achievepoint <= MainManager.actorInfo.totalAchieve;
            for (var n = 1; 6 >= n; n++) {
                this["imgSmallProgress" + n].width = 80 * AchieveManager.mySingleAchieve[n - 1].mySingleNum / AchieveManager.mySingleAchieve[n - 1].totalSingleNum;
                var r = AchieveManager.mySingleAchieve[n - 1].mySingleNum + "/<font color= #FFFFFF>" + AchieveManager.mySingleAchieve[n - 1].totalSingleNum + "</font>";
                this["txtProgress" + n].textFlow = (new egret.HtmlTextParser).parse(r)
            }
            for (var a = [], o = [], s = 0; 6 > s; s++) for (var h = AchieveXMLInfo.getBranchesByType(s), u = 0, c = h.Branches; u < c.length; u++) for (var l = c[u], _ = 0, g = l.Branch; _ < g.length; _++) {
                var p = g[_];
                if (AchieveManager.checkAchieveActive(p.ID) && p.Rule) for (var m = 0,
                v = p.Rule; m < v.length; m++) {
                    var f = v[m];
                    if (!f.hide) {
                        f.branchId = p.ID,
                        f.branchDesc = p.Desc,
                        f.IsSingle = p.IsSingle,
                        f.isShowPro = p.isShowPro,
                        f.type = s;
                        var d = AchieveManager.awardMask[f.branchId - 1],
                        y = !!KTool.getBit(d.award_mask, f.ID),
                        x = !!KTool.getBit(d.rule_mask, f.ID);
                        x && !y && a.push(f);
                        for (var n = 0; 2 > n; n++) AchieveManager.recentAchieve[n].branchId == f.branchId && AchieveManager.recentAchieve[n].ruleId == f.ID && o.push(f)
                    }
                } else if (i.INACTIVE_ACHIEVE_INDEX.push(p.ID), p.Rule) for (var I = 0,
                w = p.Rule; I < w.length; I++) {
                    var f = w[I];
                    f.hide || (f.branchId = p.ID)
                }
            }
            var b = a.length > 0;
            this.imgNotGetLine.visible = b,
            this.imgRecentLine.visible = !b,
            this.list.parent.stopAnimation(),
            this.arrayCollection.source = b ? a: o,
            this.main.arrNotGet = a,
            this.main.updateRedDot()
        },
        i.prototype.destroy = function() {
            ImageButtonUtil.removeAll(this),
            EventManager.removeAll(this);
            for (var e = this.list.numChildren,
            t = 0; e > t; t++) {
                var i = this.list.getChildAt(t);
                i.destroy()
            }
        },
        i.INACTIVE_ACHIEVE_INDEX = [],
        i
    } (eui.Component);
    e.MainPanel = t,
    __reflect(t.prototype, "achieve.MainPanel")
} (achieve || (achieve = {}));
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
achieve; !
function(e) {
    var t = function(t) {
        function i() {
            var e = t.call(this) || this;
            return e.skinName = "AchieveSubPanelSkin",
            e
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            var t = this;
            this.filter = 0,
            this.list.itemRenderer = e.AchieveItem,
            this.arrayCollection = new eui.ArrayCollection,
            this.list.dataProvider = this.arrayCollection,
            this.moduleSelf = this.parent.parent,
            ImageButtonUtil.add(this.btnDrop, this.onClickDrop, this),
            ImageButtonUtil.add(this.btnDropMask, this.onClickDrop, this),
            ImageButtonUtil.add(this.btnOneKey,
            function() {
                t.moduleSelf.oneKeyGet(t.type)
            },
            this),
            ImageButtonUtil.add(this.btnQuitSearch,
            function() {
                e.Achieve.SEARCH_FROM_MAIN ? EventManager.dispatchEventWith(e.EventConst.EVENT_SEARCH_FROM_MAIN) : (i.IS_SEARCH = !1, t.update())
            },
            this);
            for (var n = function(e) {
                ImageButtonUtil.add(r["txtDrop" + e],
                function() {
                    t.update(null, t.filter == e ? 0 : e)
                },
                r)
            },
            r = this, a = 1; 3 >= a; a++) n(a);
            EventManager.addEventListener(e.EventConst.EVENT_AFTER_GET_ACHIEVE,
            function(e) {
                t.parent && (t.getItem = e.data, t.getItem && (egret.lifecycle.stage.touchChildren = !1, AchieveManager.updateInfo().then(function() {
                    EventManager.addEventListener(AwardEvent.CLOSE_AWARD_DIALOG, t.getAchieveUpdate, t),
                    egret.lifecycle.stage.touchChildren = !0
                })))
            },
            this)
        },
        i.prototype.searchAchieve = function(e) {
            this.searchKey = e,
            i.IS_SEARCH = !0,
            this.update()
        },
        i.prototype.getAchieveUpdate = function() {
            var e = this;
            if (EventManager.removeEventListener(AwardEvent.CLOSE_AWARD_DIALOG, this.getAchieveUpdate, this), this.getItem) {
                var t = AchieveManager.awardMask[this.getItem.data.branchId - 1],
                i = !!KTool.getBit(t.award_mask, this.getItem.data.ID + 1),
                n = !!KTool.getBit(t.rule_mask, this.getItem.data.ID + 1),
                r = this.moduleSelf.compressRule.getValue(this.getItem.data.branchId),
                a = r ? 1 == r.IsSingle: !1; ! i && n && a ? this.update() : (gsap.to(this.getItem.group, {
                    x: 800
                }), gsap.to(this.getItem, {
                    scaleY: 0,
                    alpha: 0,
                    onComplete: function() {
                        e.update()
                    }
                })),
                this.getItem = null
            }
        },
        i.prototype.update = function(t, n) {
            void 0 != t && (this.type = t),
            this.filter = n || 0;
            var r = ["全部", "可领取", "未完成", "已达成"];
            this.txtDrop.text = r[this.filter];
            for (var a = 1; 3 >= a; a++) this["txtDrop" + a].text = r[this.filter == a ? 0 : a];
            this.groupDropList.visible && this.onClickDrop();
            var o = !1;
            r = [];
            var s = i.IS_SEARCH ? AchieveXMLInfo.getAllRules() : AchieveXMLInfo.getBranchesByType(this.type);
            if (i.IS_SEARCH) {
                this.currentState = "search";
                for (var h = 0,
                u = s; h < u.length; h++) {
                    var c = u[h];
                    if (!c.hide && -1 == e.MainPanel.INACTIVE_ACHIEVE_INDEX.indexOf(c.branchId)) {
                        var l = !1;
                        c.achName && (l = l || SearchUtil.isMatch(this.searchKey, c.achName)),
                        c.Desc && (l = l || SearchUtil.isMatch(this.searchKey, c.Desc)),
                        l && r.push(c)
                    }
                }
                this.txtTitle.textFlow = [{
                    text: this.searchKey,
                    style: {
                        textColor: 4252667
                    }
                },
                {
                    text: " 的搜索结果（" + r.length + "条）",
                    style: {
                        textColor: 12900350
                    }
                }]
            } else {
                this.btnOneKey.visible = this.filter <= 1,
                this.currentState = "normal",
                this.txtTitle.text = s.Desc;
                for (var _ = 0,
                g = s.Branches; _ < g.length; _++) for (var p = g[_], m = 0, v = p.Branch; m < v.length; m++) {
                    var f = v[m];
                    if (AchieveManager.checkAchieveActive(f.ID) && f.Rule) {
                        var d = this.moduleSelf.compressRule.getValue(f.ID);
                        if (d = d ? d: {},
                        d.IsSingle) {
                            for (var y = null,
                            x = void 0,
                            I = 0,
                            w = f.Rule; I < w.length; I++) {
                                var c = w[I];
                                if (!c.hide) {
                                    c.branchId = f.ID,
                                    c.branchDesc = f.Desc,
                                    c.IsSingle = f.IsSingle,
                                    c.isShowPro = f.isShowPro;
                                    var b = AchieveManager.awardMask[c.branchId - 1],
                                    A = !!KTool.getBit(b.award_mask, c.ID),
                                    S = !!KTool.getBit(b.rule_mask, c.ID);
                                    if (1 == this.filter && (!S || A)) continue;
                                    if (2 == this.filter && (S || A)) continue;
                                    if (3 == this.filter && !A) continue;
                                    if (3 == this.filter) r.push(c);
                                    else {
                                        if (A && r.push(c), S && !A) {
                                            o = !0,
                                            y = c;
                                            break
                                        }
                                        y || S || (y = c)
                                    }
                                    x = c
                                }
                            }
                            3 != this.filter && (y ? (y.isSingle = !0, r.push(y)) : x && (x.isSingle = !0, r.push(x)))
                        } else for (var k = 0,
                        C = f.Rule; k < C.length; k++) {
                            var c = C[k];
                            if (!c.hide) {
                                c.branchId = f.ID,
                                c.branchDesc = f.Desc,
                                c.IsSingle = !1,
                                c.isShowPro = f.isShowPro;
                                var b = AchieveManager.awardMask[c.branchId - 1],
                                A = !!KTool.getBit(b.award_mask, c.ID),
                                S = !!KTool.getBit(b.rule_mask, c.ID);
                                if (1 == this.filter && (!S || A)) continue;
                                if (2 == this.filter && (S || A)) continue;
                                if (3 == this.filter && !A) continue;
                                S && !A && (o = !0),
                                c.isSingle = !1,
                                r.push(c)
                            }
                        }
                    }
                }
            }
            this.list.parent.stopAnimation(),
            r = this.sortArr(r),
            this.arrayCollection.source = r,
            this.imgNoAchieve.visible = 0 == r.length,
            this.moduleSelf.updatePartRedDot(this.type, o)
        },
        i.prototype.destroy = function() {
            ImageButtonUtil.removeAll(this),
            EventManager.removeAll(this);
            for (var e = this.list.numChildren,
            t = 0; e > t; t++) {
                var i = this.list.getChildAt(t);
                i.destroy()
            }
        },
        i.prototype.sortArr = function(e, t) {
            for (var i = [], n = [], r = [], a = e.length, o = 0; a > o; o++) {
                var s = AchieveManager.awardMask[e[o].branchId - 1],
                h = !!KTool.getBit(s.award_mask, e[o].ID),
                u = !!KTool.getBit(s.rule_mask, e[o].ID);
                h ? i.push(e[o]) : u ? n.push(e[o]) : r.push(e[o])
            }
            switch (i.sort(function(e, t) {
                return e.branchId == t.branchId ? t.ID - e.ID: t.branchId - e.branchId
            }), r.sort(function(e, t) {
                return e.branchId == t.branchId ? t.ID - e.ID: t.branchId - e.branchId
            }), n.sort(function(e, t) {
                return e.branchId == t.branchId ? t.ID - e.ID: t.branchId - e.branchId
            }), t) {
            case "can":
                return n;
            case "done":
                return i;
            case "not":
                return r;
            default:
                return n.concat(r).concat(i)
            }
        },
        i.prototype.onClickDrop = function() {
            this.imgArrow.scaleY *= -1,
            this.groupDropList.visible = !this.groupDropList.visible
        },
        i.prototype.searchSubAchieve = function(e, t) {
            void 0 === t && (t = -1);
            for (var i = 0,
            n = 0,
            r = 0; r < this.arrayCollection.source.length; r++) {
                var a = this.arrayCollection.source[r];
                if (a.ID == t && e == a.branchId) {
                    i = r;
                    break
                }
                e == a.branchId && (n = r)
            }
            0 != i ? this.list.scrollV = 95 * i - 20 : this.list.scrollV = 95 * n - 20
        },
        i.IS_SEARCH = !1,
        i
    } (eui.Component);
    e.SubPanel = t,
    __reflect(t.prototype, "achieve.SubPanel")
} (achieve || (achieve = {}));
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
achieve; !
function(e) {
    var t = function(t) {
        function i(e) {
            var i = t.call(this) || this;
            return i.arrayCollection = new eui.ArrayCollection,
            i.skinName = "RankPopSkin",
            i.parModule = e,
            i
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            this.list.itemRenderer = e.RankPopItem,
            this.list.dataProvider = this.arrayCollection,
            this.verticalScrollBar.value = 100,
            ImageButtonUtil.add(this.btnClose, this.hide, this),
            this.scroller.addEventListener(egret.Event.CHANGE, this.updateScroller, this),
            this.verticalScrollBar.addEventListener(egret.Event.CHANGE, this.onPageChange, this),
            this.updateMyRank();
            for (var t = 0; 4 > t; t++) this.updateRank(t)
        },
        i.prototype.onPageChange = function() {
            this.list.scrollV = (this.list.contentHeight - this.list.height) * (1 - this.verticalScrollBar.value / 100)
        },
        i.prototype.updateScroller = function() {
            this.verticalScrollBar.value = Math.max(0, 100 - this.list.scrollV / (this.list.contentHeight - this.list.height) * 100)
        },
        i.prototype.updateRank = function(e) {
            var t = this;
            SocketConnection.sendByQueue(CommandID.GET_DAILY_RANK_INFO, [17, 0, 50 * e, 50 * e + 49],
            function(i) {
                for (var n = i.data,
                r = n.readUnsignedInt(), a = [], o = 0; r > o; o++) {
                    var s = {};
                    s.index = o + 1 + 50 * e,
                    s.userid = n.readUnsignedInt(),
                    s.score = n.readUnsignedInt(),
                    s.nick = n.readUTFBytes(16),
                    t.arrayCollection.addItem(s),
                    a.push(s)
                }
            })
        },
        i.prototype.updateMyRank = function() {
            var e = this;
            KTool.getMyRankAndScore(17, 0, !0,
            function(t) {
                e.txtMyId.text = MainManager.actorID + "",
                e.txtMyName.text = MainManager.actorInfo.nick;
                var i = t.rank + 1;
                i > 0 && 4 > i ? (e.imgRank.visible = !0, e.flagOutRank.visible = !1, e.txtRank.text = "", e.imgRank.source = "achieve_rank_item_img" + i + "_png") : i > 0 && 200 > i ? (e.imgRank.visible = e.flagOutRank.visible = !1, e.txtRank.text = i + "") : (e.imgRank.visible = !1, e.flagOutRank.visible = !0, e.txtRank.text = ""),
                e.txtMyScore.text = t.score + ""
            })
        },
        i.prototype.destroy = function() {
            this.verticalScrollBar.removeEventListener(egret.Event.CHANGE, this.onPageChange, this),
            this.scroller.removeEventListener(egret.Event.CHANGE, this.updateScroller, this),
            ImageButtonUtil.removeAll(this),
            this.parModule && ModuleManager.hideModule(this.parModule)
        },
        i
    } (PopView);
    e.AchieveRankPop = t,
    __reflect(t.prototype, "achieve.AchieveRankPop")
} (achieve || (achieve = {}));
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
generateEUI.paths["resource/eui_skins/item/AchieveItemSkin.exml"] = window.AchieveItemSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["imgIcon", "imgNum", "imgHas", "btnGet", "txtName", "txtDes", "txtProgress", "progress", "groupProgress", "groupAward", "group"],
        this.height = 95,
        this.width = 832,
        this.elementsContent = [this.group_i()]
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
            e.source = "achieve_item_imgprogress_png",
            e
        },
        t
    } (eui.Skin),
    n = t.prototype;
    return n.group_i = function() {
        var e = new eui.Group;
        return this.group = e,
        e.height = 90,
        e.width = 832,
        e.elementsContent = [this._Group1_i(), this.groupProgress_i(), this.groupAward_i()],
        e
    },
    n._Group1_i = function() {
        var e = new eui.Group;
        return e.cacheAsBitmap = !0,
        e.height = 90,
        e.width = 832,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this._Image1_i(), this._Image2_i(), this._Image3_i(), this.imgIcon_i(), this.imgNum_i(), this.imgHas_i(), this.btnGet_i(), this.txtName_i(), this.txtDes_i()],
        e
    },
    n._Image1_i = function() {
        var e = new eui.Image;
        return e.height = 90,
        e.scale9Grid = new egret.Rectangle(4, 2, 4, 2),
        e.source = "achieve_item_imgbg_png",
        e.width = 832,
        e.x = 0,
        e.y = 0,
        e
    },
    n._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "achieve_item_imgline_png",
        e.x = 107,
        e.y = 42,
        e
    },
    n._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "achieve_item_imgiconbg_png",
        e.x = 1,
        e.y = 0,
        e
    },
    n.imgIcon_i = function() {
        var e = new eui.Image;
        return this.imgIcon = e,
        e.height = 65,
        e.visible = !0,
        e.width = 65,
        e.x = 10,
        e.y = 10,
        e
    },
    n.imgNum_i = function() {
        var e = new eui.Image;
        return this.imgNum = e,
        e.height = 40,
        e.width = 40,
        e.x = 340,
        e.y = 4,
        e
    },
    n.imgHas_i = function() {
        var e = new eui.Image;
        return this.imgHas = e,
        e.source = "achieve_item_imghas_png",
        e.visible = !0,
        e.x = 704,
        e.y = 27,
        e
    },
    n.btnGet_i = function() {
        var e = new eui.Image;
        return this.btnGet = e,
        e.source = "achieve_item_btnget_png",
        e.visible = !0,
        e.x = 706,
        e.y = 25,
        e
    },
    n.txtName_i = function() {
        var e = new eui.Label;
        return this.txtName = e,
        e.fontFamily = "MFShangHei",
        e.size = 20,
        e.textColor = 15857151,
        e.x = 104,
        e.y = 13,
        e
    },
    n.txtDes_i = function() {
        var e = new eui.Label;
        return this.txtDes = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.textColor = 9157375,
        e.x = 104,
        e.y = 58,
        e
    },
    n.groupProgress_i = function() {
        var e = new eui.Group;
        return this.groupProgress = e,
        e.visible = !0,
        e.x = 700,
        e.y = 24,
        e.elementsContent = [this._Group2_i(), this.progress_i()],
        e
    },
    n._Group2_i = function() {
        var e = new eui.Group;
        return e.cacheAsBitmap = !0,
        e.height = 31,
        e.width = 91,
        e.x = 4,
        e.y = 0,
        e.elementsContent = [this._Image4_i(), this.txtProgress_i()],
        e
    },
    n._Image4_i = function() {
        var e = new eui.Image;
        return e.source = "achieve_item_imgprogressbg_png",
        e.x = 0,
        e.y = 20,
        e
    },
    n.txtProgress_i = function() {
        var e = new eui.Label;
        return this.txtProgress = e,
        e.fontFamily = "MFShangHei",
        e.horizontalCenter = .5,
        e.size = 16,
        e.textColor = 16777215,
        e.visible = !0,
        e.y = 0,
        e
    },
    n.progress_i = function() {
        var e = new eui.ProgressBar;
        return this.progress = e,
        e.height = 19,
        e.slideDuration = 0,
        e.width = 99,
        e.x = 0,
        e.y = 16,
        e.skinName = i,
        e
    },
    n.groupAward_i = function() {
        var e = new eui.Group;
        return this.groupAward = e,
        e.x = 459,
        e.y = 3,
        e.layout = this._HorizontalLayout1_i(),
        e
    },
    n._HorizontalLayout1_i = function() {
        var e = new eui.HorizontalLayout;
        return e.gap = 10,
        e.horizontalAlign = "center",
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/item/CommonItemSkin.exml"] = window.CommonItemSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["imgBG", "imgIcon", "txtNum", "imgTitle"],
        this.height = 78,
        this.width = 78,
        this.elementsContent = [this.imgBG_i(), this.imgIcon_i(), this.txtNum_i(), this.imgTitle_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i.imgBG_i = function() {
        var e = new eui.Image;
        return this.imgBG = e,
        e.height = 73,
        e.source = "title_item_imgbg_png",
        e.width = 73,
        e.x = 3,
        e.y = 3,
        e
    },
    i.imgIcon_i = function() {
        var e = new eui.Image;
        return this.imgIcon = e,
        e.height = 55,
        e.horizontalCenter = 0,
        e.verticalCenter = 0,
        e.width = 55,
        e
    },
    i.txtNum_i = function() {
        var e = new eui.Label;
        return this.txtNum = e,
        e.fontFamily = "MFShangHei",
        e.right = 7,
        e.size = 14,
        e.textColor = 16777215,
        e.touchEnabled = !1,
        e.y = 58,
        e
    },
    i.imgTitle_i = function() {
        var e = new eui.Image;
        return this.imgTitle = e,
        e.source = "title_item_imgbg1_png",
        e.touchEnabled = !1,
        e.x = 16,
        e.y = 54,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/item/RankItemSkin.exml"] = window.RankItemSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["imgBG", "imgRank", "txtRank", "txtName", "txtId", "txtScore"],
        this.height = 39,
        this.width = 732,
        this.elementsContent = [this.imgBG_i(), this.imgRank_i(), this.txtRank_i(), this.txtName_i(), this.txtId_i(), this.txtScore_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i.imgBG_i = function() {
        var e = new eui.Image;
        return this.imgBG = e,
        e.height = 39,
        e.left = 0,
        e.right = 0,
        e.visible = !0,
        e.y = 0,
        e
    },
    i.imgRank_i = function() {
        var e = new eui.Image;
        return this.imgRank = e,
        e.height = 32,
        e.visible = !0,
        e.width = 36,
        e.x = 48,
        e.y = 4,
        e
    },
    i.txtRank_i = function() {
        var e = new eui.Label;
        return this.txtRank = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.textColor = 14214143,
        e.visible = !0,
        e.x = 59,
        e.y = 11,
        e
    },
    i.txtName_i = function() {
        var e = new eui.Label;
        return this.txtName = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.textAlign = "center",
        e.textColor = 14214143,
        e.width = 200,
        e.x = 154,
        e.y = 12,
        e
    },
    i.txtId_i = function() {
        var e = new eui.Label;
        return this.txtId = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.textAlign = "center",
        e.textColor = 14214143,
        e.width = 100,
        e.x = 385,
        e.y = 12,
        e
    },
    i.txtScore_i = function() {
        var e = new eui.Label;
        return this.txtScore = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.textAlign = "center",
        e.textColor = 14214143,
        e.width = 100,
        e.x = 545,
        e.y = 12,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/item/TitleItemSkin.exml"] = window.TitleItemSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["imgIcon"],
        this.height = 91,
        this.width = 78,
        this.elementsContent = [this._Image1_i(), this.imgIcon_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "title_item_imgbg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.imgIcon_i = function() {
        var e = new eui.Image;
        return this.imgIcon = e,
        e.horizontalCenter = 0,
        e.verticalCenter = -6.5,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/panel/AchieveBasePanelSkin.exml"] = window.AchieveBasePanelSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["group", "searchBg", "txt_search", "btnSearch", "grpSearch"],
        this.elementsContent = [this._Image1_i(), this.group_i(), this.grpSearch_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Image1_i = function() {
        var e = new eui.Image;
        return e.bottom = 0,
        e.left = 0,
        e.right = 0,
        e.source = "common_ui_bg_3_jpg",
        e.top = 0,
        e
    },
    i.group_i = function() {
        var e = new eui.Group;
        return this.group = e,
        e.horizontalCenter = 80,
        e.y = 75,
        e
    },
    i.grpSearch_i = function() {
        var e = new eui.Group;
        return this.grpSearch = e,
        e.x = 924,
        e.y = 14,
        e.elementsContent = [this.searchBg_i(), this.txt_search_i(), this.btnSearch_i()],
        e
    },
    i.searchBg_i = function() {
        var e = new eui.Image;
        return this.searchBg = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "achieve_main_panel_searchbg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.txt_search_i = function() {
        var e = new eui.EditableText;
        return this.txt_search = e,
        e.fontFamily = "MFShangHei",
        e.height = 16,
        e.prompt = "输入成就信息",
        e.promptColor = 6388143,
        e.size = 16,
        e.text = "",
        e.textColor = 6388143,
        e.verticalCenter = "1.5",
        e.width = 114,
        e.x = 10,
        e
    },
    i.btnSearch_i = function() {
        var e = new eui.Image;
        return this.btnSearch = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "achieve_main_panel_btnsearch_png",
        e.x = 131.0000000000001,
        e.y = 0,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/panel/AchieveMainPanelSkin.exml"] = window.AchieveMainPanelSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["imgNotGetLine", "imgRecentLine", "imgSmallProgress1", "imgSmallProgress2", "imgSmallProgress3", "imgSmallProgress4", "imgSmallProgress5", "imgSmallProgress6", "btnRankList", "btnOneKey", "imgMilitaryRank", "txtMilitaryRank", "imgUp", "groupMilitary", "txtProgress1", "txtProgress2", "txtProgress3", "txtProgress4", "txtProgress5", "txtProgress6", "txtAllAchieve", "txtProgress", "progress", "list"],
        this.elementsContent = [this._Group1_i(), this.progress_i(), this._Scroller1_i()]
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
            e.source = "achieve_main_panel_imgprogress_png",
            e
        },
        t
    } (eui.Skin),
    n = t.prototype;
    return n._Group1_i = function() {
        var e = new eui.Group;
        return e.cacheAsBitmap = !0,
        e.height = 211,
        e.width = 949,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this.imgNotGetLine_i(), this.imgRecentLine_i(), this._Rect1_i(), this._Image1_i(), this._Image2_i(), this._Image3_i(), this._Image4_i(), this._Image5_i(), this._Image6_i(), this._Image7_i(), this._Image8_i(), this._Image9_i(), this._Image10_i(), this._Image11_i(), this._Image12_i(), this.imgSmallProgress1_i(), this.imgSmallProgress2_i(), this.imgSmallProgress3_i(), this.imgSmallProgress4_i(), this.imgSmallProgress5_i(), this.imgSmallProgress6_i(), this._Image13_i(), this._Image14_i(), this.btnRankList_i(), this.btnOneKey_i(), this.groupMilitary_i(), this.txtProgress1_i(), this.txtProgress2_i(), this.txtProgress3_i(), this.txtProgress4_i(), this.txtProgress5_i(), this.txtProgress6_i(), this._Label1_i(), this.txtAllAchieve_i(), this.txtProgress_i(), this._Image16_i()],
        e
    },
    n.imgNotGetLine_i = function() {
        var e = new eui.Image;
        return this.imgNotGetLine = e,
        e.source = "achieve_main_panel_imgnotgetline_png",
        e.visible = !1,
        e.x = 0,
        e.y = 173,
        e
    },
    n.imgRecentLine_i = function() {
        var e = new eui.Image;
        return this.imgRecentLine = e,
        e.source = "achieve_main_panel_imgrecentline_png",
        e.visible = !1,
        e.x = 0,
        e.y = 173,
        e
    },
    n._Rect1_i = function() {
        var e = new eui.Rect;
        return e.fillAlpha = .25,
        e.height = 170,
        e.width = 830,
        e.x = 26,
        e.y = 0,
        e
    },
    n._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "achieve_main_panel_imgtype1_png",
        e.x = 223,
        e.y = 85,
        e
    },
    n._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "achieve_main_panel_imgtype2_png",
        e.x = 324,
        e.y = 85,
        e
    },
    n._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "achieve_main_panel_imgtype3_png",
        e.x = 426,
        e.y = 85,
        e
    },
    n._Image4_i = function() {
        var e = new eui.Image;
        return e.source = "achieve_main_panel_imgtype4_png",
        e.x = 529,
        e.y = 85,
        e
    },
    n._Image5_i = function() {
        var e = new eui.Image;
        return e.source = "achieve_main_panel_imgtype5_png",
        e.x = 631,
        e.y = 85,
        e
    },
    n._Image6_i = function() {
        var e = new eui.Image;
        return e.source = "achieve_main_panel_imgtype6_png",
        e.x = 732,
        e.y = 85,
        e
    },
    n._Image7_i = function() {
        var e = new eui.Image;
        return e.source = "achieve_main_panel_imgsmallprogressbg1_png",
        e.x = 207,
        e.y = 154,
        e
    },
    n._Image8_i = function() {
        var e = new eui.Image;
        return e.source = "achieve_main_panel_imgsmallprogressbg1_png",
        e.x = 309,
        e.y = 154,
        e
    },
    n._Image9_i = function() {
        var e = new eui.Image;
        return e.source = "achieve_main_panel_imgsmallprogressbg1_png",
        e.x = 411,
        e.y = 154,
        e
    },
    n._Image10_i = function() {
        var e = new eui.Image;
        return e.source = "achieve_main_panel_imgsmallprogressbg1_png",
        e.x = 513,
        e.y = 154,
        e
    },
    n._Image11_i = function() {
        var e = new eui.Image;
        return e.source = "achieve_main_panel_imgsmallprogressbg1_png",
        e.x = 615,
        e.y = 154,
        e
    },
    n._Image12_i = function() {
        var e = new eui.Image;
        return e.source = "achieve_main_panel_imgsmallprogressbg1_png",
        e.x = 717,
        e.y = 154,
        e
    },
    n.imgSmallProgress1_i = function() {
        var e = new eui.Image;
        return this.imgSmallProgress1 = e,
        e.source = "achieve_main_panel_imgsmallprogress1_png",
        e.visible = !0,
        e.x = 207,
        e.y = 154,
        e
    },
    n.imgSmallProgress2_i = function() {
        var e = new eui.Image;
        return this.imgSmallProgress2 = e,
        e.source = "achieve_main_panel_imgsmallprogress1_png",
        e.x = 309,
        e.y = 154,
        e
    },
    n.imgSmallProgress3_i = function() {
        var e = new eui.Image;
        return this.imgSmallProgress3 = e,
        e.source = "achieve_main_panel_imgsmallprogress1_png",
        e.x = 411,
        e.y = 154,
        e
    },
    n.imgSmallProgress4_i = function() {
        var e = new eui.Image;
        return this.imgSmallProgress4 = e,
        e.source = "achieve_main_panel_imgsmallprogress1_png",
        e.x = 513,
        e.y = 154,
        e
    },
    n.imgSmallProgress5_i = function() {
        var e = new eui.Image;
        return this.imgSmallProgress5 = e,
        e.source = "achieve_main_panel_imgsmallprogress1_png",
        e.x = 615,
        e.y = 154,
        e
    },
    n.imgSmallProgress6_i = function() {
        var e = new eui.Image;
        return this.imgSmallProgress6 = e,
        e.source = "achieve_main_panel_imgsmallprogress1_png",
        e.x = 717,
        e.y = 154,
        e
    },
    n._Image13_i = function() {
        var e = new eui.Image;
        return e.source = "achieve_main_panel_imgtxtprogress_png",
        e.x = 216,
        e.y = 16,
        e
    },
    n._Image14_i = function() {
        var e = new eui.Image;
        return e.source = "achieve_main_panel_imgprogressbg__png",
        e.x = 204,
        e.y = 52,
        e
    },
    n.btnRankList_i = function() {
        var e = new eui.Image;
        return this.btnRankList = e,
        e.source = "achieve_main_panel_btnranklist_png",
        e.x = 877,
        e.y = 16,
        e
    },
    n.btnOneKey_i = function() {
        var e = new eui.Image;
        return this.btnOneKey = e,
        e.source = "achieve_main_panel_btnonekey_png",
        e.x = 877,
        e.y = 89,
        e
    },
    n.groupMilitary_i = function() {
        var e = new eui.Group;
        return this.groupMilitary = e,
        e.visible = !0,
        e.x = 45,
        e.y = 3,
        e.elementsContent = [this._Image15_i(), this.imgMilitaryRank_i(), this.txtMilitaryRank_i(), this.imgUp_i()],
        e
    },
    n._Image15_i = function() {
        var e = new eui.Image;
        return e.source = "achieve_main_panel_imgmilitaryrankbg_png",
        e.visible = !0,
        e.x = 0,
        e.y = 0,
        e
    },
    n.imgMilitaryRank_i = function() {
        var e = new eui.Image;
        return this.imgMilitaryRank = e,
        e.height = 75,
        e.visible = !0,
        e.width = 75,
        e.x = 22,
        e.y = 25,
        e
    },
    n.txtMilitaryRank_i = function() {
        var e = new eui.Label;
        return this.txtMilitaryRank = e,
        e.fontFamily = "MFShangHei",
        e.horizontalCenter = 0,
        e.size = 20,
        e.textColor = 16777215,
        e.y = 96,
        e
    },
    n.imgUp_i = function() {
        var e = new eui.Image;
        return this.imgUp = e,
        e.source = "achieve_main_panel_imgup_png",
        e.x = 61,
        e.y = 17,
        e
    },
    n.txtProgress1_i = function() {
        var e = new eui.Label;
        return this.txtProgress1 = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.textAlign = "center",
        e.textColor = 16580432,
        e.width = 64,
        e.x = 215,
        e.y = 135,
        e
    },
    n.txtProgress2_i = function() {
        var e = new eui.Label;
        return this.txtProgress2 = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.textAlign = "center",
        e.textColor = 16580432,
        e.width = 64,
        e.x = 317,
        e.y = 135,
        e
    },
    n.txtProgress3_i = function() {
        var e = new eui.Label;
        return this.txtProgress3 = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.textAlign = "center",
        e.textColor = 16580432,
        e.width = 64,
        e.x = 419,
        e.y = 135,
        e
    },
    n.txtProgress4_i = function() {
        var e = new eui.Label;
        return this.txtProgress4 = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.textAlign = "center",
        e.textColor = 16580432,
        e.width = 64,
        e.x = 521,
        e.y = 135,
        e
    },
    n.txtProgress5_i = function() {
        var e = new eui.Label;
        return this.txtProgress5 = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.textAlign = "center",
        e.textColor = 16580432,
        e.width = 64,
        e.x = 623,
        e.y = 135,
        e
    },
    n.txtProgress6_i = function() {
        var e = new eui.Label;
        return this.txtProgress6 = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.textAlign = "center",
        e.textColor = 16580432,
        e.width = 64,
        e.x = 725,
        e.y = 135,
        e
    },
    n._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "成就总点数：",
        e.textColor = 16777215,
        e.x = 409,
        e.y = 21,
        e
    },
    n.txtAllAchieve_i = function() {
        var e = new eui.Label;
        return this.txtAllAchieve = e,
        e.fontFamily = "MFShangHei",
        e.size = 20,
        e.textColor = 16580432,
        e.x = 529,
        e.y = 21,
        e
    },
    n.txtProgress_i = function() {
        var e = new eui.Label;
        return this.txtProgress = e,
        e.fontFamily = "MFShangHei",
        e.size = 20,
        e.textColor = 16580432,
        e.x = 755,
        e.y = 20,
        e
    },
    n._Image16_i = function() {
        var e = new eui.Image;
        return e.height = 28,
        e.source = "achieve_main_panel_imgicon_png",
        e.width = 35,
        e.x = 368,
        e.y = 14,
        e
    },
    n.progress_i = function() {
        var e = new eui.ProgressBar;
        return this.progress = e,
        e.height = 25,
        e.width = 578,
        e.x = 213,
        e.y = 51,
        e.skinName = i,
        e
    },
    n._Scroller1_i = function() {
        var e = new eui.Scroller;
        return e.height = 296,
        e.horizontalCenter = -34,
        e.y = 221,
        e.viewport = this.list_i(),
        e
    },
    n.list_i = function() {
        var e = new eui.List;
        return this.list = e,
        e.layout = this._VerticalLayout1_i(),
        e
    },
    n._VerticalLayout1_i = function() {
        var e = new eui.VerticalLayout;
        return e.gap = 0,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/panel/AchieveSubPanelSkin.exml"] = window.AchieveSubPanelSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["imgtitleBg", "btnOneKey", "btnQuitSearch", "txtTitle", "imgArrow", "txtDrop", "btnDrop", "imgNoAchieve", "list", "btnDropMask", "txtDrop1", "txtDrop2", "txtDrop3", "groupDropList"],
        this.width = 928,
        this.elementsContent = [this._Group1_i(), this._Scroller1_i(), this.groupDropList_i()],
        this.states = [new eui.State("normal", [new eui.SetProperty("btnQuitSearch", "visible", !1)]), new eui.State("search", [new eui.SetProperty("imgtitleBg", "source", "achieve_sub_panel_searchBg_png"), new eui.SetProperty("btnOneKey", "visible", !1), new eui.SetProperty("txtTitle", "size", 22), new eui.SetProperty("btnDrop", "visible", !1)])]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Group1_i = function() {
        var e = new eui.Group;
        return e.cacheAsBitmap = !0,
        e.height = 392,
        e.width = 928,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this.imgtitleBg_i(), this.btnOneKey_i(), this.btnQuitSearch_i(), this.txtTitle_i(), this.btnDrop_i(), this.imgNoAchieve_i()],
        e
    },
    i.imgtitleBg_i = function() {
        var e = new eui.Image;
        return this.imgtitleBg = e,
        e.source = "achieve_sub_panel_imgtitlebg_png",
        e.x = 0,
        e.y = 8,
        e
    },
    i.btnOneKey_i = function() {
        var e = new eui.Image;
        return this.btnOneKey = e,
        e.source = "achieve_main_panel_btnonekey_png",
        e.x = 856,
        e.y = 0,
        e
    },
    i.btnQuitSearch_i = function() {
        var e = new eui.Image;
        return this.btnQuitSearch = e,
        e.source = "achieve_sub_panel_quitSearch_png",
        e.x = 749,
        e.y = 15,
        e
    },
    i.txtTitle_i = function() {
        var e = new eui.Label;
        return this.txtTitle = e,
        e.fontFamily = "REEJI",
        e.size = 24,
        e.textColor = 16776958,
        e.x = 20,
        e.y = 28,
        e
    },
    i.btnDrop_i = function() {
        var e = new eui.Group;
        return this.btnDrop = e,
        e.cacheAsBitmap = !0,
        e.x = 670,
        e.y = 15,
        e.elementsContent = [this._Image1_i(), this.imgArrow_i(), this.txtDrop_i()],
        e
    },
    i._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "achieve_sub_panel_imgdropbg1_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.imgArrow_i = function() {
        var e = new eui.Image;
        return this.imgArrow = e,
        e.anchorOffsetX = 14,
        e.anchorOffsetY = 10,
        e.source = "achieve_sub_panel_imgarrow_png",
        e.touchEnabled = !1,
        e.x = 128,
        e.y = 22,
        e
    },
    i.txtDrop_i = function() {
        var e = new eui.Label;
        return this.txtDrop = e,
        e.fontFamily = "MFShangHei",
        e.horizontalCenter = 0,
        e.size = 18.0000005618,
        e.text = "全部",
        e.textColor = 11586047,
        e.touchEnabled = !1,
        e.y = 12,
        e
    },
    i.imgNoAchieve_i = function() {
        var e = new eui.Image;
        return this.imgNoAchieve = e,
        e.source = "achieve_main_panel_imgnoachieve_png",
        e.visible = !0,
        e.x = 259,
        e.y = 195,
        e
    },
    i._Scroller1_i = function() {
        var e = new eui.Scroller;
        return e.height = 430,
        e.horizontalCenter = -44,
        e.y = 75,
        e.viewport = this.list_i(),
        e
    },
    i.list_i = function() {
        var e = new eui.List;
        return this.list = e,
        e.layout = this._VerticalLayout1_i(),
        e
    },
    i._VerticalLayout1_i = function() {
        var e = new eui.VerticalLayout;
        return e.gap = 0,
        e
    },
    i.groupDropList_i = function() {
        var e = new eui.Group;
        return this.groupDropList = e,
        e.cacheAsBitmap = !0,
        e.visible = !0,
        e.x = 670,
        e.y = 59,
        e.elementsContent = [this.btnDropMask_i(), this._Image2_i(), this.txtDrop1_i(), this.txtDrop2_i(), this.txtDrop3_i()],
        e
    },
    i.btnDropMask_i = function() {
        var e = new eui.Group;
        return this.btnDropMask = e,
        e.height = 886,
        e.width = 1483,
        e.x = -960,
        e.y = -211,
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "achieve_sub_panel_imgdropbg2_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.txtDrop1_i = function() {
        var e = new eui.Label;
        return this.txtDrop1 = e,
        e.fontFamily = "MFShangHei",
        e.height = 40,
        e.size = 18,
        e.text = "可领取",
        e.textAlign = "center",
        e.textColor = 7310795,
        e.verticalAlign = "middle",
        e.width = 142,
        e.x = 0,
        e
    },
    i.txtDrop2_i = function() {
        var e = new eui.Label;
        return this.txtDrop2 = e,
        e.fontFamily = "MFShangHei",
        e.height = 40,
        e.size = 18,
        e.text = "未完成",
        e.textAlign = "center",
        e.textColor = 7310795,
        e.verticalAlign = "middle",
        e.width = 142,
        e.x = 0,
        e.y = 41,
        e
    },
    i.txtDrop3_i = function() {
        var e = new eui.Label;
        return this.txtDrop3 = e,
        e.fontFamily = "MFShangHei",
        e.height = 40,
        e.size = 18,
        e.text = "已达成",
        e.textAlign = "center",
        e.textColor = 7310795,
        e.verticalAlign = "middle",
        e.width = 142,
        e.x = 0,
        e.y = 82,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/pop/RankPopSkin.exml"] = window.RankPopSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["btnClose", "imgRank", "txtRank", "txtMyName", "txtMyId", "txtMyScore", "flagOutRank", "list", "scroller", "verticalScrollBar"],
        this.elementsContent = [this._Image1_i(), this._Image2_i(), this.btnClose_i(), this._Group1_i(), this._Group2_i(), this._Label5_i(), this.scroller_i(), this.verticalScrollBar_i()]
    }
    __extends(t, e);
    var i = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["track", "thumb"],
            this.elementsContent = [this.track_i(), this.thumb_i()]
        }
        __extends(t, e);
        var i = t.prototype;
        return i.track_i = function() {
            var e = new eui.Image;
            return this.track = e,
            e.percentHeight = 100,
            e.source = "achieve_rank_pop_imgslidebarbg_png",
            e
        },
        i.thumb_i = function() {
            var e = new eui.Image;
            return this.thumb = e,
            e.source = "achieve_rank_pop_imgslidebar_png",
            e.width = 13,
            e.x = 1,
            e
        },
        t
    } (eui.Skin),
    n = t.prototype;
    return n._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "title_pop_2022_imge_735x431_bg_png",
        e
    },
    n._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "achieve_rank_pop_imgtitle_png",
        e.x = 31,
        e.y = -5,
        e
    },
    n.btnClose_i = function() {
        var e = new eui.Image;
        return this.btnClose = e,
        e.source = "title_pop_2022_btnclose_png",
        e.visible = !0,
        e.x = 711,
        e
    },
    n._Group1_i = function() {
        var e = new eui.Group;
        return e.cacheAsBitmap = !0,
        e.width = 732,
        e.x = 0,
        e.y = 34,
        e.elementsContent = [this._Image3_i(), this._Label1_i(), this._Label2_i(), this._Label3_i(), this._Label4_i()],
        e
    },
    n._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "achieve_rank_pop_imgtop_png",
        e.visible = !0,
        e.width = 732,
        e.x = 0,
        e.y = 0,
        e
    },
    n._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "名次",
        e.textColor = 9150937,
        e.x = 52,
        e.y = 12,
        e
    },
    n._Label2_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "米米号",
        e.textColor = 9150937,
        e.x = 414,
        e.y = 12,
        e
    },
    n._Label3_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "昵称",
        e.textColor = 9150937,
        e.x = 239,
        e.y = 12,
        e
    },
    n._Label4_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "总积分",
        e.textColor = 9150937,
        e.x = 572,
        e.y = 12,
        e
    },
    n._Group2_i = function() {
        var e = new eui.Group;
        return e.cacheAsBitmap = !0,
        e.visible = !0,
        e.width = 732,
        e.x = 0,
        e.y = 356,
        e.elementsContent = [this._Image4_i(), this.imgRank_i(), this.txtRank_i(), this.txtMyName_i(), this.txtMyId_i(), this.txtMyScore_i(), this.flagOutRank_i()],
        e
    },
    n._Image4_i = function() {
        var e = new eui.Image;
        return e.height = 39,
        e.source = "achieve_rank_pop_imgbotom_png",
        e.visible = !0,
        e.width = 732,
        e.x = 0,
        e.y = 0,
        e
    },
    n.imgRank_i = function() {
        var e = new eui.Image;
        return this.imgRank = e,
        e.height = 32,
        e.visible = !0,
        e.width = 36,
        e.x = 48,
        e.y = 4,
        e
    },
    n.txtRank_i = function() {
        var e = new eui.Label;
        return this.txtRank = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "7",
        e.textAlign = "center",
        e.textColor = 14214143,
        e.visible = !0,
        e.width = 80,
        e.x = 24,
        e.y = 11,
        e
    },
    n.txtMyName_i = function() {
        var e = new eui.Label;
        return this.txtMyName = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.textAlign = "center",
        e.textColor = 8099296,
        e.width = 200,
        e.x = 154,
        e.y = 12,
        e
    },
    n.txtMyId_i = function() {
        var e = new eui.Label;
        return this.txtMyId = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.textAlign = "center",
        e.textColor = 8099296,
        e.width = 100,
        e.x = 385,
        e.y = 12,
        e
    },
    n.txtMyScore_i = function() {
        var e = new eui.Label;
        return this.txtMyScore = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.textAlign = "center",
        e.textColor = 8099296,
        e.width = 100,
        e.x = 545,
        e.y = 12,
        e
    },
    n.flagOutRank_i = function() {
        var e = new eui.Label;
        return this.flagOutRank = e,
        e.fontFamily = "MFShangHei",
        e.scaleX = 1,
        e.scaleY = 1,
        e.size = 16,
        e.text = "200名以外",
        e.textColor = 16777215,
        e.visible = !0,
        e.x = 35,
        e.y = 12,
        e
    },
    n._Label5_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 14,
        e.text = "每周五0点更新",
        e.textColor = 3231867,
        e.x = 639,
        e.y = 401,
        e
    },
    n.scroller_i = function() {
        var e = new eui.Scroller;
        return this.scroller = e,
        e.height = 284,
        e.visible = !0,
        e.width = 732,
        e.y = 72,
        e.viewport = this.list_i(),
        e
    },
    n.list_i = function() {
        var e = new eui.List;
        return this.list = e,
        e
    },
    n.verticalScrollBar_i = function() {
        var e = new eui.VSlider;
        return this.verticalScrollBar = e,
        e.height = 361,
        e.maximum = 100,
        e.visible = !0,
        e.width = 14,
        e.x = 734,
        e.y = 34,
        e.skinName = i,
        e
    },
    t
} (eui.Skin);