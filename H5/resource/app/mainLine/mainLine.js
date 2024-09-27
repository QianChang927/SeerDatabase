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
__awaiter = this && this.__awaiter ||
function(t, e, i, n) {
    return new(i || (i = Promise))(function(r, a) {
        function o(t) {
            try {
                h(n.next(t))
            } catch(e) {
                a(e)
            }
        }
        function s(t) {
            try {
                h(n["throw"](t))
            } catch(e) {
                a(e)
            }
        }
        function h(t) {
            t.done ? r(t.value) : new i(function(e) {
                e(t.value)
            }).then(o, s)
        }
        h((n = n.apply(t, e || [])).next())
    })
},
__generator = this && this.__generator ||
function(t, e) {
    function i(t) {
        return function(e) {
            return n([t, e])
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
            i = e.call(t, h)
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
mainLine; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t.isVersionControl = !0,
            t.startTime = "2024/09/27 10:00:00",
            t.endTime = "2024/10/04 09:59:59",
            t.skinName = "AllChaptersPanelSkin",
            t
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            this.initBtnClose("all_chapters_panel_title_png", this, this.service.closeModule, this.service),
            this.groupName = "AllChapterPanel",
            this.addEvent(),
            this.initList(),
            StatLogger.log("剧情任务2022", "20221125主线H5", "打开剧情任务合集面板"),
            GameInfo.isChecking && (this.btnYongYe.visible = this.groupChapterProgress.visible = !1)
        },
        i.prototype.createMenu = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var t, e, i, n, r, a, o, s, h, u, l, c;
                return __generator(this,
                function(p) {
                    switch (p.label) {
                    case 0:
                        return this.tabData = {},
                        t = new MenuData,
                        this.isVersionControl ? (i = SystemTimerManager.sysBJDate.getTime(), n = new Date(this.startTime).getTime(), r = new Date(this.endTime).getTime(), i > n && r > i ? [4, RES.getResByUrl("resource/assets/mainLine/ChapterCtrl_H5_temp.json")] : [3, 2]) : [3, 5];
                    case 1:
                        return e = p.sent(),
                        [3, 4];
                    case 2:
                        return [4, RES.getResByUrl("resource/assets/mainLine/ChapterCtrl_H5.json")];
                    case 3:
                        e = p.sent(),
                        p.label = 4;
                    case 4:
                        return [3, 7];
                    case 5:
                        return [4, RES.getResByUrl("resource/assets/mainLine/ChapterCtrl_H5.json")];
                    case 6:
                        e = p.sent(),
                        p.label = 7;
                    case 7:
                        for (a = Object.keys(e), t.groupName = this.groupName, t.root = [], t.data = {},
                        o = 0; o < a.length; o++) if (s = a[o], t.root.push(s), t.data[s] = {
                            title: s
                        },
                        h = Object.keys(e[s]), !(e[s] instanceof Array) && h.length > 0) {
                            for (u = e[s], l = 0; l < h.length; l++) c = h[l],
                            t.data[c] = {
                                title: c,
                                parent: s
                            },
                            this.tabData[c] = u[c];
                            t.data[s].child = h
                        } else this.tabData[s] = e[s];
                        return t["default"] = t.root[0],
                        this.menu = Menu.createMenu(t, this, 48),
                        [2]
                    }
                })
            })
        },
        i.prototype.destroy = function() {
            e.prototype.destroy.call(this);
            for (var t = 0; t < this.listChapter.numChildren; t++) {
                var i = this.listChapter.getChildAt(t);
                i.destroy()
            }
            this.menu && this.menu.destroy()
        },
        i.prototype.addEvent = function() {
            var e = this;
            EventManager.addEventListener(BaseMenuEvent.BASE_MENU_SELECT_CHANGE_ + this.groupName, this.onChangeTab, this),
            ImageButtonUtil.add(this.btnStart,
            function() {
                e.listChapter.selectedItem.redID > 0 && HotRedManager.getInstance().clickIcon(e.listChapter.selectedItem.redID),
                e.service.openPanel(t.PanelConst.StoryOverviewPanel, {
                    chapter: e.listChapter.selectedItem
                })
            },
            this),
            ImageButtonUtil.add(this.groupChapterProgress,
            function() {
                e.service.openPop(new t.ChapterProgressPop(e.listChapter.selectedItem), !1, null, e.onSelect, e)
            },
            this),
            ImageButtonUtil.add(this.btnYongYe,
            function() {
                ModuleManager.showModuleByID(224, null, AppDoStyle.NULL),
                StatLogger.log("剧情任务2022", "20221125主线H5", "点击【永夜纪年】按钮")
            },
            this),
            EventManager.addEventListener(t.EventConst.SelectChapter,
            function(t) {
                e.onAni(t),
                e.onSelect()
            },
            this)
        },
        i.prototype.onChangeTab = function() {
            for (var t = this.menu.selectedValue,
            e = [], i = 0; i < this.configData.length; i++) {
                var n = this.tabData[t].indexOf(this.configData[i].ID);
                n > -1 && (e[n] = this.configData[i])
            }
            this.listData.replaceAll(e),
            this.listChapter.validateNow(),
            this.onSelect(e[0])
        },
        i.prototype.onAni = function(t) {
            var e = t.data;
            e.addChild(this.aniSelect)
        },
        i.prototype.update = function() {
            this.listChapter.selectedItem && this.onSelect()
        },
        i.prototype.initList = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var e, i, n = this;
                return __generator(this,
                function(r) {
                    switch (r.label) {
                    case 0:
                        return this.aniSelect = SpineUtil.createAnimate("all_chapters_panel"),
                        this.aniSelect.play("kuangxuan"),
                        this.aniSelect.x = 200,
                        this.aniSelect.y = 88,
                        this.listChapter.itemRenderer = t.ChapterItem,
                        [4, config.xml.load("AdventureChapter")];
                    case 1:
                        return r.sent(),
                        e = config.xml.getRes("AdventureChapter").AdventureChapter,
                        i = e.Chapter,
                        Array.isArray(i) ? GameInfo.isChecking && (i = i.filter(function(t) {
                            return "灰色爵刻" == t.Title ? !0 : !1
                        }), e["new"] = 2) : i = [i],
                        i.sort(function(t, e) {
                            return (t.Sort || 0) - (e.Sort || 0)
                        }),
                        this.configData = i,
                        this.listData = new eui.ArrayCollection,
                        this.listChapter.dataProvider = this.listData,
                        [4, this.createMenu()];
                    case 2:
                        return r.sent(),
                        egret.setTimeout(function() {
                            for (var t = 0; t < i.length; t++) {
                                var r = n.listChapter.getChildAt(t);
                                if (r.data.ID == e["new"]) {
                                    r.selected = !0,
                                    n.listChapter.selectedIndex = r.itemIndex,
                                    n.onAni({
                                        data: r
                                    });
                                    break
                                }
                            }
                            n.onSelect()
                        },
                        this, 100),
                        [2]
                    }
                })
            })
        },
        i.prototype.onSelect = function(t) {
            return __awaiter(this, void 0, void 0,
            function() {
                var e, i, n, r, a = this;
                return __generator(this,
                function(o) {
                    switch (o.label) {
                    case 0:
                        return void 0 == t ? e = this.listChapter.selectedItem: (e = t, this.listChapter.selectedItem = e, i = this.listChapter.getChildAt(e.itemIndex), i.addChild(this.aniSelect)),
                        this.txtChapterName.text = e.Title,
                        this.txtChapterDescribe.text = e.Des,
                        LoadingManager.instance.showloading("正在加载资源，请稍候！"),
                        n = this.imgBG,
                        [4, RES.getResByUrl("resource/assets/mainLine/BG/" + e.ID + ".jpg")];
                    case 1:
                        return n.source = o.sent(),
                        r = this.imgPet,
                        [4, RES.getResByUrl("resource/assets/mainLine/Pet/" + e.ID + ".png")];
                    case 2:
                        return r.source = o.sent(),
                        LoadingManager.instance.hideloading(),
                        KTool.getMultiValue([e.StoryRewardFlagID, e.ChapterRewardFlagID],
                        function(t) {
                            for (var i = 0,
                            n = 1; 32 >= n; n++) KTool.getBit(t[0], n) && i++;
                            var r = !1;
                            Array.isArray(e.ChapterRewardInfo.PassChapterReward) || (e.ChapterRewardInfo.PassChapterReward = [e.ChapterRewardInfo.PassChapterReward]);
                            for (var o = e.ChapterRewardInfo.PassChapterReward.length,
                            n = 1; o >= n; n++) if (!KTool.getBit(t[1], n) && i >= e.ChapterRewardInfo.PassChapterReward[n - 1].NeedPassStoryNum) {
                                r = !0;
                                break
                            }
                            a.imgRedDot.visible = r
                        }),
                        [2]
                    }
                })
            })
        },
        i
    } (BasicPanel);
    t.AllChapterPanel = e,
    __reflect(e.prototype, "mainLine.AllChapterPanel")
} (mainLine || (mainLine = {}));
var __reflect = this && this.__reflect ||
function(t, e, i) {
    t.__class__ = e,
    i ? i.push(e) : i = [e],
    t.__types__ = t.__types__ ? i.concat(t.__types__) : i
},
mainLine; !
function(t) {
    var e = function() {
        function t() {}
        return t.AllChapterPanel = "mainLine.AllChapterPanel",
        t.StoryOverviewPanel = "mainLine.StoryOverviewPanel",
        t.DialogPanel = "mainLine.DialogPanel",
        t.HistoryPanel = "mainLine.HistoryPanel",
        t
    } ();
    t.PanelConst = e,
    __reflect(e.prototype, "mainLine.PanelConst");
    var i = function() {
        function t() {}
        return t.SelectChapter = "mainLine.selectChapter",
        t.SelectChoice = "mainLine.selectChoice",
        t.EnterDialog = "mainLine.enterDialog",
        t.GetReward = "mainLine.getReward",
        t
    } ();
    t.EventConst = i,
    __reflect(i.prototype, "mainLine.EventConst")
} (mainLine || (mainLine = {}));
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
mainLine; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t.skinName = "ChapterItemSkin",
            t
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            this.aniNew = SpineUtil.createAnimate("all_chapters_panel"),
            this.aniNew.play("new"),
            this.addChild(this.aniNew),
            this.aniNew.x = 362,
            this.aniNew.y = 17
        },
        i.prototype.dataChanged = function() {
            var t = this;
            this.img.source = "resource/assets/mainLine/ChapterItem/" + this.data.ID + ".png",
            this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this),
            this.txtOff.text = this.data.readyOff,
            this.txtOff.visible = !!this.data.readyOff,
            this.aniNew.visible = !!HotRedManager.getInstance().getHotRedState(this.data.redID) && !this.data.readyOff,
            HotRedManager.getInstance().removeRegisterHotEventAll(this),
            HotRedManager.getInstance().registerHotEvent(this.data.redID,
            function() {
                t.aniNew.visible = !!HotRedManager.getInstance().getHotRedState(t.data.redID)
            },
            this)
        },
        i.prototype.destroy = function() {
            HotRedManager.getInstance().removeRegisterHotEventAll(this)
        },
        i.prototype.onClick = function() {
            EventManager.dispatchEvent(new egret.Event(t.EventConst.SelectChapter, !1, !1, this))
        },
        i
    } (eui.ItemRenderer);
    t.ChapterItem = e,
    __reflect(e.prototype, "mainLine.ChapterItem")
} (mainLine || (mainLine = {}));
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
mainLine; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t.skinName = "ChapterProgressItemSkin",
            t
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            var e = this;
            ImageButtonUtil.add(this.imgReward,
            function() { ! e.data.hasGet && e.progress.value >= 100 ? e.getAward() : t.MainLine.openPrizeInfo(e.rewardInfo)
            },
            this, !0, !0,
            function() {
                var t = !e.data.hasGet && e.progress.value >= 100;
                return 8 != e.rewardInfo[0] || t
            }),
            ImageButtonUtil.add(this.group, this.getAward, this, !1, !1)
        },
        i.prototype.getAward = function() {
            var e = this; ! this.data.hasGet && this.progress.value >= 100 && SocketConnection.sendByQueue(41430, [this.data.chapter, this.data.ID],
            function(i) {
                var n = i.data;
                1 == n.readUnsignedInt() ? console.error("领取奖励失败") : (e.data.hasGet = !0, e.imgHas.visible = !0, e.imgCan.visible = !1),
                EventManager.dispatchEventWith(t.EventConst.GetReward)
            })
        },
        i.prototype.dataChanged = function() {
            this.imgHas.visible = this.data.hasGet,
            this.txtProcess.text = Math.min(this.data.curProgress, this.data.NeedPassStoryNum) + "/" + this.data.NeedPassStoryNum,
            this.progress.value = Math.min(this.data.curProgress, this.data.NeedPassStoryNum) / this.data.NeedPassStoryNum * 100,
            this.imgCan.visible = !this.data.hasGet && this.progress.value >= 100;
            var t = this.data.rewardinfo.split("_");
            if (this.rewardInfo = t, 1 == t[0]) this.imgReward.source = ClientConfig.getItemIcon(t[1]),
            this.txtReward.text = core.gameUtil.ConvertItemNumView(t[2]);
            else if (8 == t[0]) {
                this.txtReward.text = "";
                var e = config.Profilephoto.getItem( + t[1]).icon;
                this.imgReward.source = ClientConfig.GetAvatarFrame(e)
            } else if (2 == t[0]) {
                this.txtReward.text = t[2];
                var i = t[1];
                this.imgReward.source = ClientConfig.getMarkPath(i)
            } else if (10 == t[0]) {
                this.txtReward.text = "";
                var n = AchieveXMLInfo.getRule(t[1], t[2]);
                this.imgReward.source = ClientConfig.getAchieveIcon(n.proicon)
            }
            this.groupMore.visible = this.data.isMore,
            this.height = this.data.isMore ? 130 : 90
        },
        i
    } (eui.ItemRenderer);
    t.ChapterProgressItem = e,
    __reflect(e.prototype, "mainLine.ChapterProgressItem")
} (mainLine || (mainLine = {}));
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
mainLine; !
function(t) {
    var e = function(t) {
        function e(e) {
            var i = t.call(this) || this;
            return i.skinName = "ChoiceItemSkin",
            i.ans = e,
            i
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            this.txtChoice.text = this.ans
        },
        e
    } (eui.Component);
    t.ChoiceItem = e,
    __reflect(e.prototype, "mainLine.ChoiceItem")
} (mainLine || (mainLine = {}));
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
mainLine; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.skinName = "HistoryItemSkin",
            e
        }
        return __extends(e, t),
        e.prototype.dataChanged = function() {
            "旁白" == this.data.npcName || "漫画" == this.data.npcName ? (this.txt1.text = "", this.txt2.text = "", this.txt3.text = this.data.history, this.groupPB.visible = !0, this.groupDialog.visible = !1) : (this.txt1.text = this.data.npcName + "：", this.txt2.text = "「" + this.data.dialogArr + "」", this.txt3.text = "", this.groupPB.visible = !1, this.groupDialog.visible = !0)
        },
        e
    } (eui.ItemRenderer);
    t.HistoryItem = e,
    __reflect(e.prototype, "mainLine.HistoryItem")
} (mainLine || (mainLine = {}));
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
mainLine; !
function(t) {
    var e = function(e) {
        function i(t, i) {
            var n = e.call(this) || this;
            return n.skinName = "StoryItemSkin",
            n.service = i,
            n.storyData = t,
            n.txtStoryIndex.text = t.chapterID + "-" + t.ID,
            n.txtStoryName.text = t.Title,
            n.cacheAsBitmap = !0,
            t.isFuture ? n.imgBG.source = "story_item_imggrey_png": t.hasGet ? n.imgBG.source = "story_item_imgblue_png": t.canNotOpen ? n.imgBG.source = "story_item_imgblue_png": n.imgBG.source = "story_item_imgorange_png",
            t.isFuture || (ImageButtonUtil.add(n.group, n.onClick, n, !1), n.addEventListener(egret.Event.REMOVED_FROM_STAGE, n.destroy, n)),
            n
        }
        return __extends(i, e),
        i.prototype.onClick = function() {
            PopViewManager.getInstance().openView(new t.StoryConfirmPop(this.storyData, this.service))
        },
        i.prototype.destroy = function() {
            ImageButtonUtil.removeAll(this)
        },
        i
    } (eui.Component);
    t.StoryItem = e,
    __reflect(e.prototype, "mainLine.StoryItem")
} (mainLine || (mainLine = {}));
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
mainLine; !
function(t) {
    var e = function(e) {
        function i(i) {
            var n = e.call(this) || this;
            return n.param = i,
            n.service.setValues(),
            n.init([{
                panelName: t.PanelConst.AllChapterPanel,
                isMain: !0
            },
            {
                panelName: t.PanelConst.StoryOverviewPanel
            },
            {
                panelName: t.PanelConst.DialogPanel
            }]),
            n
        }
        return __extends(i, e),
        i.prototype.initialized = function() {
            var e = this;
            this.service.updateValues().then(function() {
                if (e.param) {
                    var i = (e.param.openPanel + "").split(","),
                    n = +i[0],
                    r = +i[1];
                    config.xml.load("AdventureChapter").then(function() {
                        var i = config.xml.getRes("AdventureChapter").AdventureChapter.Chapter;
                        Array.isArray(i) || (i = [i]);
                        for (var a, o = 0,
                        s = i; o < s.length; o++) {
                            var h = s[o];
                            if (h.ID == n) {
                                a = h;
                                break
                            }
                        }
                        e.service.openPanel(t.PanelConst.StoryOverviewPanel, {
                            chapter: a,
                            story: r
                        })
                    })
                } else e.service.backToMainPanel()
            })
        },
        i.openPrizeInfo = function(t) {
            1 == t[0] ? tipsPop.TipsPop.openItemPop({
                id: t[1]
            }) : 10 == t[0] ? tipsPop.TipsPop.openTitlePop({
                branchId: t[1],
                ruleId: t[2]
            }) : 2 == t[0] && tipsPop.TipsPop.openCounterMarkPop({
                ins: [t[1], 0],
                fromPetBag: !0
            })
        },
        i
    } (BasicMultPanelModule);
    t.MainLine = e,
    __reflect(e.prototype, "mainLine.MainLine")
} (mainLine || (mainLine = {}));
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
__awaiter = this && this.__awaiter ||
function(t, e, i, n) {
    return new(i || (i = Promise))(function(r, a) {
        function o(t) {
            try {
                h(n.next(t))
            } catch(e) {
                a(e)
            }
        }
        function s(t) {
            try {
                h(n["throw"](t))
            } catch(e) {
                a(e)
            }
        }
        function h(t) {
            t.done ? r(t.value) : new i(function(e) {
                e(t.value)
            }).then(o, s)
        }
        h((n = n.apply(t, e || [])).next())
    })
},
__generator = this && this.__generator ||
function(t, e) {
    function i(t) {
        return function(e) {
            return n([t, e])
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
            i = e.call(t, h)
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
mainLine; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t.skinName = "DialogPanelSkin",
            t
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            this.addEvent(),
            this.setAuto(!1),
            egret.Tween.get(this.imgNext, {
                loop: !0
            }).to({
                alpha: .2,
                y: 183
            },
            975).to({
                alpha: 1,
                y: 198
            },
            625)
        },
        i.prototype.destroy = function() {
            egret.Tween.removeTweens(this.imgNext),
            e.prototype.destroy.call(this)
        },
        i.prototype.addEvent = function() {
            var e = this;
            ImageButtonUtil.add(this.btnBack,
            function() {
                e.setAuto(!1),
                Alert.show("确认要中途退出剧情吗？",
                function() {
                    StatLogger.log("剧情任务2022", e.storyData.storyReward.statlogId + "主线H5", "中途离开" + e.storyData.chapterID + "-" + e.storyData.ID + "剧情任务"),
                    e.service.openPanel(t.PanelConst.StoryOverviewPanel),
                    EngineHookManager.restoreCanvasRenderDrawMesh(),
                    SoundManager.loadSound().then(function() {
                        SoundManager.playMusic()
                    })
                })
            },
            this),
            ImageButtonUtil.add(this.btnHide,
            function() {
                e.setUIVisible(!1),
                StatLogger.log("20220812版本系统功能", "主线模块", "点击隐藏UI界面按钮")
            },
            this),
            ImageButtonUtil.add(this.groupAuto,
            function() {
                e.setAuto(!e.isAuto)
            },
            this),
            ImageButtonUtil.add(this.btnReview1, this.showReview, this),
            ImageButtonUtil.add(this.btnReview2, this.showReview, this),
            ImageButtonUtil.add(this.btnReview3, this.showReview, this),
            ImageButtonUtil.add(this.groupDialog,
            function() {
                e.isAuto ? e.setAuto(!1) : e.onDialog()
            },
            this, !1, !1),
            this.groupDialog.touchChildren = !0,
            ImageButtonUtil.add(this.groupAsset,
            function() {
                e.isAuto ? e.setAuto(!1) : e.onDialog()
            },
            this, !1, !1),
            EventManager.addEventListener("mainLine_fast_end", this.endDialog, this)
        },
        i.prototype.showReview = function() {
            this.showAllTxt(),
            this.setAuto(!1);
            var e = new t.HistoryPop(this.history),
            i = PopViewManager.createDefaultStyleObject();
            i.maskShapeStyle.maskAlpha = 0,
            PopViewManager.getInstance().openView(e, i),
            StatLogger.log("20220812版本系统功能", "主线模块", "点击回放按钮")
        },
        i.prototype.beforeAdd = function(t) {
            this.storyData = t,
            this.curIndex = void 0,
            this.hasQuestion = !1,
            this.poolImage = [],
            this.poolSpineAnimate = {},
            this.groupAsset.removeChildren(),
            this.history = [],
            this.ani = SpineUtil.createAnimate("juqingguodu"),
            this.onDialog(),
            this.storyData.BGM && SoundManager.loadSound("resource/assets/map/sound/" + this.storyData.BGM + ".mp3").then(function() {
                SoundManager.playMusic()
            })
        },
        i.prototype.setUIVisible = function(t, e) {
            var i = this;
            void 0 === e && (e = 200);
            var n = [this.groupDialog, this.groupAuto, this.btnBack, this.imgBottom, this.imgRightTop];
            egret.lifecycle.stage.touchChildren = !1;
            for (var r = function(i) {
                i.visible = !0,
                i.alpha = t ? 0 : 1,
                egret.Tween.get(i).to({
                    alpha: t ? 1 : 0
                },
                e).call(function() {
                    egret.lifecycle.stage.touchChildren = !0,
                    t || (i.visible = !1)
                })
            },
            a = 0, o = n; a < o.length; a++) {
                var s = o[a];
                r(s)
            }
            if (!this.group1.visible && this.group2.visible) for (var h = this.groupAsset.numChildren,
            u = function(i) {
                var n = l.groupAsset.getChildAt(i);
                n.visible = !0,
                n.alpha = t ? 0 : 1,
                egret.Tween.get(n).to({
                    alpha: t ? 1 : 0
                },
                e).call(function() {
                    egret.lifecycle.stage.touchChildren = !0,
                    t || (n.visible = !1)
                })
            },
            l = this, c = 1; h > c; c++) u(c);
            t || (this.setAuto(!1), egret.setTimeout(function() {
                i.showAllTxt()
            },
            this, e))
        },
        i.prototype.onDialog = function() {
            var e = this;
            if (this.isShowingTxt) return void this.showAllTxt();
            if (!this.groupDialog.visible) return void this.setUIVisible(!0);
            if (this.hasQuestion) return this.hasQuestion = !1,
            this.setAuto(!1),
            this.service.openPop(new t.QuestionPop(this.arrAnswer), !0),
            void EventManager.once(t.EventConst.SelectChoice,
            function(t) {
                e.curIndex = +e.arrJump[t.data] - 1,
                e.onDialog()
            },
            null);
            void 0 != this.curIndex ? this.curIndex++:this.curIndex = 0;
            var i = this.storyData.dialog[this.curIndex];
            if (!i) return void this.endDialog();
            var n = !1; (1 == i.ani || 2 == i.ani) && (0 == this.curIndex ? this.playAni(!1) : (this.playAni(!0).then(function() {
                e.playAni(!1)
            }), n = !0)),
            egret.lifecycle.stage.touchChildren = !1,
            egret.setTimeout(function() {
                return __awaiter(e, void 0, void 0,
                function() {
                    var t, e, n, r, a, o, s, h, u, l, c, r, p, g, e, n, r;
                    return __generator(this,
                    function(_) {
                        switch (_.label) {
                        case 0:
                            if (egret.lifecycle.stage.touchChildren = !0, "漫画" == i.npcName ? (this.group1.visible = !1, this.group2.visible = !1, this.btnReview3.visible = !0, this.showTxt(3, i.dialogArr), !this.history.length || "旁白" != this.history[this.history.length - 1].npcName && "漫画" != this.history[this.history.length - 1].npcName ? (this.history.push(i), i.history = i.dialogArr) : this.history[this.history.length - 1].history += "\n\n" + i.dialogArr) : "旁白" == i.npcName ? (this.group1.visible = !0, this.group2.visible = !1, this.btnReview3.visible = !1, this.showTxt(1, i.dialogArr), !this.history.length || "旁白" != this.history[this.history.length - 1].npcName && "漫画" != this.history[this.history.length - 1].npcName ? (this.history.push(i), i.history = i.dialogArr) : this.history[this.history.length - 1].history += "\n\n" + i.dialogArr) : (this.group1.visible = !1, this.group2.visible = !0, this.btnReview3.visible = !1, this.txtName.text = i.npcName, this.showTxt(2, i.dialogArr), this.history.push(i)), i.questionArr ? (this.arrAnswer = (i.questionArr + "").split("|"), this.arrJump = (i.jumpTo + "").split("|"), this.hasQuestion = !0) : i.jumpTo && (this.curIndex = +i.jumpTo - 1), !i.param) return [3, 6];
                            for (t = this.groupAsset.numChildren, e = t - 1; e >= 0; e--) n = this.groupAsset.getChildAt(e),
                            n instanceof eui.Image ? (this.poolImage.push(n), this.groupAsset.removeChild(n)) : n instanceof eui.Group && (r = n.getChildAt(0), this.poolSpineAnimate[n.name] || (this.poolSpineAnimate[n.name] = []), this.poolSpineAnimate[n.name].push(r), r.flagRemove = !0);
                            a = i.param.split("|"),
                            o = 0,
                            s = a,
                            _.label = 1;
                        case 1:
                            return o < s.length ? (h = s[o], u = h.split(","), l = u[0], c = void 0, "amh" != l.substring(0, 3) ? [3, 3] : (c = new eui.Group, [4, this.createSpineAnimate(l)])) : [3, 6];
                        case 2:
                            return r = _.sent(),
                            r.flagRemove = !1,
                            c.addChild(r),
                            [3, 4];
                        case 3:
                            p = "map" == l.split("_")[0].substring(0, 3),
                            c = this.getImage("resource/assets/mainLine/Dialog/" + l + "." + (p ? "jpg": "png")),
                            _.label = 4;
                        case 4:
                            c.name = l + "",
                            this.groupAsset.addChild(c),
                            c.horizontalCenter = +u[1],
                            c.y = +u[2],
                            c.scaleX = +u[3],
                            c.scaleY = Math.abs( + u[3]),
                            +u[4] && ( + u[4] <= 5 ? (c.alpha = 0, 1 == +u[4] ? c.y -= 300 : 2 == +u[4] ? c.y += 300 : 3 == +u[4] ? c.horizontalCenter -= 300 : 4 == +u[4] && (c.horizontalCenter += 300), egret.lifecycle.stage.touchChildren = !1, egret.Tween.get(c).to({
                                y: +u[2],
                                horizontalCenter: +u[1],
                                alpha: 1
                            },
                            400, egret.Ease.cubicOut).call(function() {
                                egret.lifecycle.stage.touchChildren = !0
                            })) : 6 == +u[4] ? this.playAni_upAndDown(c) : 7 == +u[4] && this.playAni_shake(c)),
                            _.label = 5;
                        case 5:
                            return o++,
                            [3, 1];
                        case 6:
                            for (i.changeBGM && SoundManager.loadSound("resource/assets/map/sound/" + i.changeBGM + ".mp3").then(function() {
                                SoundManager.playMusic()
                            }), g = this.groupAsset.numChildren, e = g - 1; e >= 0; e--) n = this.groupAsset.getChildAt(e),
                            n instanceof eui.Group && (0 == n.numChildren ? this.groupAsset.removeChild(n) : (r = n.getChildAt(0), r.flagRemove && this.groupAsset.removeChild(n)));
                            return [2]
                        }
                    })
                })
            },
            this, n ? 700 : 0)
        },
        i.prototype.setAuto = function(t) {
            this.isAuto = t,
            this.imgAuto.visible = t,
            this.imgNotAuto.visible = !t,
            t && !this.isShowingTxt && this.onDialog(),
            t && StatLogger.log("20220812版本系统功能", "主线模块", "点击auto自动播放按钮")
        },
        i.prototype.endDialog = function() {
            var e = this;
            this.setAuto(!1),
            this.touchEnabled = this.touchChildren = !1;
            var i = SpineUtil.createAnimate("juqingwancheng");
            this.groupAni.addChild(i),
            i.play("juqingwancheng", 1),
            egret.setTimeout(function() {
                e.groupAni.removeChild(i),
                e.touchEnabled = e.touchChildren = !0,
                e.storyData.hasGet ? (e.service.openPanel(t.PanelConst.StoryOverviewPanel), SoundManager.loadSound().then(function() {
                    SoundManager.playMusic()
                })) : SocketConnection.sendByQueue(41431, [e.storyData.chapterID, e.storyData.ID],
                function(i) {
                    var n = i.data;
                    return 1 == n.readUnsignedInt() ? void console.error("领取奖励失败") : (e.service.openPanel(t.PanelConst.StoryOverviewPanel), void SoundManager.loadSound().then(function() {
                        SoundManager.playMusic()
                    }))
                })
            },
            this, 3e3),
            egret.setTimeout(function() {
                var t = new eui.Rect(2 * e.width, 2 * e.height);
                e.groupAsset.addChild(t),
                t.alpha = 0,
                egret.Tween.get(t).to({
                    alpha: 1
                },
                300)
            },
            this, 2700)
        },
        i.prototype.removed = function() {
            this.setAuto(!1),
            this.setUIVisible(!0)
        },
        i.prototype.showTxt = function(t, e) {
            var i = this;
            if (2 >= t) {
                this.curChar = 0,
                this.isShowingTxt = !0,
                this["txt" + t].text = "",
                2 == t && (e = "「" + e + "」");
                var n = egret.setInterval(function() {
                    var r = i["txt" + t];
                    r.text = e.substring(0, i.curChar++),
                    i.curChar > e.length && (egret.clearInterval(n), i.isShowingTxt = !1, i.isAuto && egret.setTimeout(function() {
                        i.isAuto && i.onDialog()
                    },
                    i, 2e3))
                },
                this, 40)
            } else this.isAuto && egret.setTimeout(function() {
                i.isAuto && i.onDialog()
            },
            this, 2e3)
        },
        i.prototype.showAllTxt = function() {
            this.curChar = Number.MAX_VALUE
        },
        i.prototype.playAni = function(t) {
            return __awaiter(this, void 0, void 0,
            function() {
                var e = this;
                return __generator(this,
                function(i) {
                    return [2, new Promise(function(i, n) {
                        e.groupAni.addChild(e.ani);
                        var r;
                        r = t ? e.ani.play("hei", 1) : e.ani.play("wu", 1),
                        r.waitPlayEnd().then(function() {
                            e.groupAni.removeChild(e.ani),
                            i()
                        })
                    })]
                })
            })
        },
        i.prototype.getImage = function(t) {
            var e;
            return this.poolImage.length ? (e = this.poolImage.pop(), e.source = t) : e = new eui.Image(t),
            e
        },
        i.prototype.playAni_upAndDown = function(t) {
            egret.lifecycle.stage.touchChildren = !1;
            var e = t.y,
            i = 10,
            n = 100;
            egret.Tween.get(t).to({
                y: e + i
            },
            n).to({
                y: e
            },
            n).to({
                y: e + i
            },
            n).to({
                y: e
            },
            n).call(function() {
                egret.lifecycle.stage.touchChildren = !0
            })
        },
        i.prototype.playAni_shake = function(t) {
            egret.lifecycle.stage.touchChildren = !1;
            var e = t.horizontalCenter,
            i = t.y,
            n = 5,
            r = 50;
            egret.Tween.get(t, {
                loop: !0
            }).to({
                horizontalCenter: e - n
            },
            r).to({
                horizontalCenter: e
            },
            r).to({
                horizontalCenter: e + n
            },
            r).to({
                horizontalCenter: e
            },
            r),
            egret.setTimeout(function() {
                egret.lifecycle.stage.touchChildren = !0,
                egret.Tween.removeTweens(t),
                egret.Tween.get(t).to({
                    horizontalCenter: e,
                    y: i
                },
                r)
            },
            this, 400)
        },
        i.prototype.createSpineAnimate = function(t) {
            return __awaiter(this, void 0, void 0,
            function() {
                var e, i, n, r, a, o, s, h, u, l, c;
                return __generator(this,
                function(p) {
                    switch (p.label) {
                    case 0:
                        return this.poolSpineAnimate[t] && this.poolSpineAnimate[t].length > 0 ? (e = this.poolSpineAnimate[t].pop(), [2, Promise.resolve(e)]) : (i = {},
                        i.png = {},
                        n = i, [4, RES.getResByUrl("resource/assets/mainLine/Dialog/" + t.split(".")[0] + "/" + t + ".json")]);
                    case 1:
                        return n.json = p.sent(),
                        r = i,
                        [4, RES.getResByUrl("resource/assets/mainLine/Dialog/" + t.split(".")[0] + "/" + t + ".atlas", null, null, RES.ResourceItem.TYPE_TEXT)];
                    case 2:
                        r.atlas = p.sent(),
                        a = new spine.TextureAtlas(i.atlas),
                        o = 0,
                        s = a.pages,
                        p.label = 3;
                    case 3:
                        return o < s.length ? (h = s[o], u = i.png, l = h.name, [4, RES.getResByUrl("resource/assets/mainLine/Dialog/" + t.split(".")[0] + "/" + h.name)]) : [3, 6];
                    case 4:
                        u[l] = p.sent(),
                        p.label = 5;
                    case 5:
                        return o++,
                        [3, 3];
                    case 6:
                        return c = this._createAnimate(i),
                        RES.getResByUrl("resource/assets/mainLine/Dialog/" + t.split(".")[0] + "/" + t + ".json",
                        function(t) {
                            var e = Object.getOwnPropertyNames(t.animations)[0];
                            c.play(e)
                        }),
                        [2, Promise.resolve(c)]
                    }
                })
            })
        },
        i.prototype._createAnimate = function(t) {
            var e = t.json;
            if (e) {
                var i = t.atlas;
                if (i) {
                    for (var n = new spine.TextureAtlas(i), r = new spine.AtlasAttachmentLoader(n), a = 0, o = n.pages; a < o.length; a++) {
                        var s = o[a],
                        h = t.png[s.name];
                        s.setTexture(new spine.EgretTexture(h))
                    }
                    var u = new spine.SkeletonJson(r),
                    l = u.readSkeletonData(e);
                    return new spine.SkeletonAnimation(l)
                }
            }
        },
        i
    } (BasicPanel);
    t.DialogPanel = e,
    __reflect(e.prototype, "mainLine.DialogPanel")
} (mainLine || (mainLine = {}));
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
__awaiter = this && this.__awaiter ||
function(t, e, i, n) {
    return new(i || (i = Promise))(function(r, a) {
        function o(t) {
            try {
                h(n.next(t))
            } catch(e) {
                a(e)
            }
        }
        function s(t) {
            try {
                h(n["throw"](t))
            } catch(e) {
                a(e)
            }
        }
        function h(t) {
            t.done ? r(t.value) : new i(function(e) {
                e(t.value)
            }).then(o, s)
        }
        h((n = n.apply(t, e || [])).next())
    })
},
__generator = this && this.__generator ||
function(t, e) {
    function i(t) {
        return function(e) {
            return n([t, e])
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
            i = e.call(t, h)
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
mainLine; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t.skinName = "StoryOverviewPanelSkin",
            t
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            var e = this;
            this.initBtnClose("all_chapters_panel_title_png", this,
            function() {
                for (var t in i.arrAssets) RES.destroyRes(t) || console.warn("销毁主线动态素材资源失败：" + t);
                i.arrAssets = {},
                e.service.backToMainPanel()
            },
            this),
            ImageButtonUtil.add(this.groupChapterProgress,
            function() {
                e.service.openPop(new t.ChapterProgressPop(e.chapterData))
            },
            this),
            EventManager.addEventListener(t.EventConst.EnterDialog, this.playAni, this),
            EventManager.addEventListener(t.EventConst.GetReward, this.update, this),
            GameInfo.isChecking && (this.groupChapterProgress.visible = !1)
        },
        i.prototype.removed = function() {
            this.groupStory.removeChildren()
        },
        i.prototype.beforeAdd = function(e) {
            var i = this;
            if (e) {
                var n = e.chapter;
                this.txtChapterName.text = n.Title,
                this.txtChapterDescribe.text = n.Des,
                this.imgBG.source = "resource/assets/mainLine/BG/" + n.ID + ".jpg",
                this.imgLogo.source = "resource/assets/mainLine/Logo/" + n.ID + ".png",
                this.initData(n).then(function() {
                    i.initStory().then(function() {
                        var n = e.story;
                        n && PopViewManager.getInstance().openView(new t.StoryConfirmPop(i.allStoryData[n - 1], i.service))
                    })
                })
            } else this.initStory();
            this.groupStory.parent.scrollH = 0,
            StatLogger.log("剧情任务2022", this.chapterData.statlogId + "主线H5", "打开章节" + this.chapterData.ID + "剧情合集")
        },
        i.prototype.initData = function(t) {
            return __awaiter(this, void 0, void 0,
            function() {
                return __generator(this,
                function(e) {
                    switch (e.label) {
                    case 0:
                        return this.chapterData = t,
                        [4, config.xml.load("AdventureStory")];
                    case 1:
                        return e.sent(),
                        this.allStoryData = config.xml.getRes("AdventureStory").AdventureStory.Story.filter(function(e) {
                            return e.chapterID == t.ID
                        }),
                        [2]
                    }
                })
            })
        },
        i.prototype.update = function() {
            var t = this;
            KTool.getMultiValue([this.chapterData.StoryRewardFlagID, this.chapterData.ChapterRewardFlagID],
            function(e) {
                for (var i = 0,
                n = [!0], r = 1; 32 >= r; r++) KTool.getBit(e[0], r) && (i++, n[r] = !0);
                for (var a = !1,
                o = t.chapterData.ChapterRewardInfo.PassChapterReward.length,
                r = 1; o >= r; r++) if (!KTool.getBit(e[1], r) && i >= t.chapterData.ChapterRewardInfo.PassChapterReward[r - 1].NeedPassStoryNum) {
                    a = !0;
                    break
                }
                t.imgRedDot.visible = a
            })
        },
        i.prototype.initStory = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var e = this;
                return __generator(this,
                function(i) {
                    return [2, new Promise(function(i, n) {
                        KTool.getMultiValue([e.chapterData.StoryRewardFlagID, e.chapterData.ChapterRewardFlagID],
                        function(n) {
                            Array.isArray(e.chapterData.StoryRewardInfo.PassStoryReward) || (e.chapterData.StoryRewardInfo.PassStoryReward = [e.chapterData.StoryRewardInfo.PassStoryReward]);
                            for (var r in e.allStoryData) e.allStoryData[r].hasGet = KTool.getBit(n[0], +r + 1),
                            e.allStoryData[r].storyReward = e.chapterData.StoryRewardInfo.PassStoryReward[r];
                            for (var a = 0,
                            o = [!0], s = 1; 32 >= s; s++) KTool.getBit(n[0], s) && (a++, o[s] = !0);
                            if (e.chapterData.lineInfo) for (var h = e.chapterData.lineInfo.split("|"), u = 0, l = h; u < l.length; u++) {
                                var c = l[u],
                                p = c.split(","),
                                g = !0;
                                g = -1 != e.getIdByBranchId(p[5]) ? !o[e.getIdByBranchId(p[5])] : !o[p[5]];
                                var _ = new eui.Image;
                                e.groupStory.addChild(_),
                                _.horizontalCenter = p[0],
                                _.verticalCenter = p[1],
                                _.width = +p[2],
                                _.rotation = +p[3],
                                "1" == p[4] ? (_.fillMode = egret.BitmapFillMode.CLIP, _.source = "story_overview_panel_imgdottedline_png") : (_.source = "story_overview_panel_imgline_png", _.scale9Grid = new egret.Rectangle(7, 7, 1, 1))
                            }
                            var m = Number.MAX_VALUE,
                            f = -Number.MAX_VALUE,
                            d = Number.MAX_VALUE,
                            y = -Number.MAX_VALUE,
                            v = function(t) {
                                var i = e.allStoryData[t],
                                n = e.chapterData.positionInfo.split("|")[t].split(","),
                                r = new eui.Image("story_overview_panel_imgpoint_png");
                                e.groupStory.addChild(r),
                                r.horizontalCenter = n[2],
                                r.verticalCenter = n[3],
                                m = Math.min(m, +n[2] - r.width / 2),
                                f = Math.max(f, +n[2] + r.width / 2),
                                o[i.storyReward.PreUnlockStoryID] && (d = Math.min(m, +n[2] - r.width / 2), y = Math.max(f, +n[2] + r.width / 2), i.ID <= 20 && !o[i.ID] && e.once(egret.Event.RENDER,
                                function() {
                                    e.aniPoint = SpineUtil.createAnimate("juqingwancheng"),
                                    e.groupStory.addChild(e.aniPoint),
                                    e.aniPoint.x = r.x + 13,
                                    e.aniPoint.y = r.y + 16,
                                    e.aniPoint.play("xunhuan", 0)
                                },
                                e))
                            };
                            for (var r in e.allStoryData) v(r);
                            m = d,
                            f = y;
                            for (var r in e.allStoryData) {
                                var w = e.allStoryData[r],
                                x = e.chapterData.positionInfo.split("|")[r].split(","),
                                C = !1;
                                o[w.storyReward.PreUnlockStoryID] ? (delete w.canNotOpen, C = !0) : w.canNotOpen = !0;
                                var I = new t.StoryItem(w, e.service);
                                e.groupStory.addChild(I),
                                I.horizontalCenter = x[0],
                                I.verticalCenter = x[1],
                                m = Math.min(m, +x[0] - I.width / 2),
                                f = Math.max(f, +x[0] + I.width / 2),
                                C && (d = Math.min(m, +x[0] - I.width / 2), y = Math.max(f, +x[0] + I.width / 2))
                            }
                            var b = y - d;
                            e.groupStory.width = f - m,
                            e.groupStory.x = ( - m - f) / 2 + 30;
                            var S = e.groupStory.parent;
                            S.alpha = 0,
                            egret.setTimeout(function() {
                                gsap.to(S, {
                                    alpha: 1,
                                    scrollH: Math.max(0, b - S.width + 30)
                                })
                            },
                            e, 50),
                            Array.isArray(e.chapterData.ChapterRewardInfo.PassChapterReward) || (e.chapterData.ChapterRewardInfo.PassChapterReward = [e.chapterData.ChapterRewardInfo.PassChapterReward]);
                            for (var P = !1,
                            A = e.chapterData.ChapterRewardInfo.PassChapterReward.length,
                            s = 1; A >= s; s++) if (!KTool.getBit(n[1], s) && a >= e.chapterData.ChapterRewardInfo.PassChapterReward[s - 1].NeedPassStoryNum) {
                                P = !0;
                                break
                            }
                            e.imgRedDot.visible = P,
                            i()
                        })
                    })]
                })
            })
        },
        i.prototype.playAni = function(e) {
            var i = this,
            n = SpineUtil.createAnimate("juqingguodu");
            this.groupAni.addChild(n),
            EngineHookManager.repairCanvasRenderDrawMesh();
            var r = n.play("hei", 1);
            r.waitPlayEnd().then(function() {
                i.groupAni.removeChild(n),
                i.service.openPanel(t.PanelConst.DialogPanel, e.data)
            })
        },
        i.prototype.getIdByBranchId = function(t) {
            for (var e = -1,
            i = 0,
            n = this.allStoryData; i < n.length; i++) {
                var r = n[i];
                if (r.branchID == t) {
                    e = r.ID;
                    break
                }
            }
            return e
        },
        i.arrAssets = {},
        i
    } (BasicPanel);
    t.StoryOverviewPanel = e,
    __reflect(e.prototype, "mainLine.StoryOverviewPanel")
} (mainLine || (mainLine = {}));
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
mainLine; !
function(t) {
    var e = function(e) {
        function i(t) {
            var i = e.call(this) || this;
            return i.skinName = "ChapterProgressPopSkin",
            i.chapterData = t,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            var e = this;
            this.list.itemRenderer = t.ChapterProgressItem,
            KTool.getMultiValue([this.chapterData.ChapterRewardFlagID, this.chapterData.StoryRewardFlagID],
            function(t) {
                for (var i = 0,
                n = 1; 32 >= n; n++) KTool.getBit(t[1], n) && i++;
                var r = e.chapterData.ChapterRewardInfo.PassChapterReward;
                Array.isArray(r) || (r = [r]);
                for (var a in r) {
                    var o = r[a];
                    o.hasGet = KTool.getBit(t[0], +a + 1),
                    o.curProgress = i,
                    o.chapter = e.chapterData.ID
                }
                e.list.dataProvider = new eui.ArrayCollection(r),
                StatLogger.log("剧情任务2022", e.chapterData.statlogId + "主线H5", "打开了章节" + e.chapterData.ID + "章节奖励弹窗")
            })
        },
        i
    } (PopView);
    t.ChapterProgressPop = e,
    __reflect(e.prototype, "mainLine.ChapterProgressPop")
} (mainLine || (mainLine = {}));
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
mainLine; !
function(t) {
    var e = function(e) {
        function i(t) {
            var i = e.call(this) || this;
            return i.skinName = "HistoryPanelSkin",
            i.width = LevelManager.appLevel.width,
            i.height = LevelManager.appLevel.height,
            i.history = t,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            var e = this;
            ImageButtonUtil.add(this.btnClose,
            function() {
                PopViewManager.getInstance().hideView(e)
            },
            this),
            this.scrollBar.autoVisibility = !1,
            this.scrollBar.viewport = this.list,
            this.list.itemRenderer = t.HistoryItem,
            this.list.useVirtualLayout = !1,
            this.list.dataProvider = new eui.ArrayCollection(this.history),
            this.once(egret.Event.RENDER,
            function() {
                e.list.scrollV = Math.max(0, e.list.contentHeight - e.list.height)
            },
            this)
        },
        i.prototype.destroy = function() {
            ImageButtonUtil.removeAll(this)
        },
        i
    } (PopView);
    t.HistoryPop = e,
    __reflect(e.prototype, "mainLine.HistoryPop")
} (mainLine || (mainLine = {}));
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
mainLine; !
function(t) {
    var e = function(e) {
        function i(t) {
            var i = e.call(this) || this;
            return i.skinName = "QuestionPopSkin",
            i.arrAnswer = t,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            var e = this,
            i = function(i) {
                var r = n.arrAnswer[i],
                a = new t.ChoiceItem(r);
                n.group.addChild(a),
                ImageButtonUtil.add(a,
                function() {
                    EventManager.dispatchEventWith(t.EventConst.SelectChoice, !1, +i),
                    PopViewManager.getInstance().hideView(e)
                },
                n)
            },
            n = this;
            for (var r in this.arrAnswer) i(r)
        },
        i.prototype.destroy = function() {
            ImageButtonUtil.removeAll(this),
            e.prototype.destroy.call(this)
        },
        i
    } (PopView);
    t.QuestionPop = e,
    __reflect(e.prototype, "mainLine.QuestionPop")
} (mainLine || (mainLine = {}));
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
__awaiter = this && this.__awaiter ||
function(t, e, i, n) {
    return new(i || (i = Promise))(function(r, a) {
        function o(t) {
            try {
                h(n.next(t))
            } catch(e) {
                a(e)
            }
        }
        function s(t) {
            try {
                h(n["throw"](t))
            } catch(e) {
                a(e)
            }
        }
        function h(t) {
            t.done ? r(t.value) : new i(function(e) {
                e(t.value)
            }).then(o, s)
        }
        h((n = n.apply(t, e || [])).next())
    })
},
__generator = this && this.__generator ||
function(t, e) {
    function i(t) {
        return function(e) {
            return n([t, e])
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
            i = e.call(t, h)
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
mainLine; !
function(t) {
    var e = function(e) {
        function i(t, i) {
            var n = e.call(this) || this;
            return n.skinName = "StoryConfirmPopSkin",
            n.storyData = t,
            n.service = i,
            n.cacheAsBitmap = !0,
            n
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            var e = this;
            this.txtDescribe.text = this.storyData.Des,
            this.txtStoryName.text = this.storyData.Title,
            this.imgHas.visible = !!this.storyData.hasGet;
            var i = this.storyData.storyReward,
            n = i.rewardinfo.split(";");
            StatLogger.log("剧情任务2022", i.statlogId + "主线H5", "打开" + this.storyData.chapterID + "-" + this.storyData.ID + "剧情概览弹窗");
            var r = n.shift(),
            a = r.split("_")[1];
            this.imgItem1.source = ClientConfig.getItemIcon(a),
            ImageButtonUtil.add(this.imgItem1,
            function() {
                t.MainLine.openPrizeInfo(r.split("_").map(parseFloat))
            },
            this),
            this.txtItem1.text = core.gameUtil.ConvertItemNumView(r.split("_")[2], 0);
            var o = n.shift(),
            s = o.split("_")[1];
            this.imgItem2.source = ClientConfig.getItemIcon(s),
            ImageButtonUtil.add(this.imgItem2,
            function() {
                t.MainLine.openPrizeInfo(o.split("_").map(parseFloat))
            },
            this),
            this.txtItem2.text = core.gameUtil.ConvertItemNumView(o.split("_")[2], 0);
            var h = n.shift(),
            u = h.split("_")[1];
            this.imgItem3.source = ClientConfig.getItemIcon(u),
            ImageButtonUtil.add(this.imgItem3,
            function() {
                t.MainLine.openPrizeInfo(h.split("_").map(parseFloat))
            },
            this),
            this.txtItem3.text = core.gameUtil.ConvertItemNumView(h.split("_")[2], 0),
            this.btnStart.visible = !this.storyData.canNotOpen,
            this.txtCanNotOpen.visible = this.storyData.canNotOpen,
            ImageButtonUtil.add(this.btnStart,
            function() {
                return __awaiter(e, void 0, void 0,
                function() {
                    var e, n, r, a, o, s, h, u, l, c, p, g, _, m, f;
                    return __generator(this,
                    function(d) {
                        switch (d.label) {
                        case 0:
                            LoadingManager.instance.showloading("正在加载资源，请稍候！"),
                            e = 0,
                            n = this.storyData.dialog,
                            d.label = 1;
                        case 1:
                            if (! (e < n.length)) return [3, 13];
                            if (r = n[e], !r.param) return [3, 12];
                            a = r.param.split("|"),
                            o = 0,
                            s = a,
                            d.label = 2;
                        case 2:
                            return o < s.length ? (h = s[o], u = h.split(",")[0], "amh" != u.substring(0, 3) ? [3, 9] : [4, RES.getResByUrl("resource/assets/mainLine/Dialog/" + u.split(".")[0] + "/" + u + ".atlas",
                            function(e, i) {
                                t.StoryOverviewPanel.arrAssets[i] = 1
                            },
                            this, RES.ResourceItem.TYPE_TEXT)]) : [3, 12];
                        case 3:
                            return l = d.sent(),
                            [4, RES.getResByUrl("resource/assets/mainLine/Dialog/" + u.split(".")[0] + "/" + u + ".json",
                            function(e, i) {
                                t.StoryOverviewPanel.arrAssets[i] = 1
                            })];
                        case 4:
                            d.sent(),
                            c = new spine.TextureAtlas(l),
                            p = 0,
                            g = c.pages,
                            d.label = 5;
                        case 5:
                            return p < g.length ? (_ = g[p], m = _.name, [4, RES.getResByUrl("resource/assets/mainLine/Dialog/" + u.split(".")[0] + "/" + m,
                            function(e, i) {
                                t.StoryOverviewPanel.arrAssets[i] = 1
                            })]) : [3, 8];
                        case 6:
                            d.sent(),
                            d.label = 7;
                        case 7:
                            return p++,
                            [3, 5];
                        case 8:
                            return [3, 11];
                        case 9:
                            return f = "map" == u.split("_")[0].substring(0, 3),
                            [4, RES.getResByUrl("resource/assets/mainLine/Dialog/" + u + "." + (f ? "jpg": "png"),
                            function(e, i) {
                                t.StoryOverviewPanel.arrAssets[i] = 1
                            })];
                        case 10:
                            d.sent(),
                            d.label = 11;
                        case 11:
                            return o++,
                            [3, 2];
                        case 12:
                            return e++,
                            [3, 1];
                        case 13:
                            return LoadingManager.instance.hideloading(),
                            StatLogger.log("剧情任务2022", i.statlogId + "主线H5", "点击" + this.storyData.chapterID + "-" + this.storyData.ID + "【开启剧情】"),
                            EventManager.dispatchEvent(new egret.Event(t.EventConst.EnterDialog, !1, !1, this.storyData)),
                            PopViewManager.getInstance().hideView(this),
                            [2]
                        }
                    })
                })
            },
            this)
        },
        i.prototype.destroy = function() {
            ImageButtonUtil.removeAll(this),
            e.prototype.destroy.call(this)
        },
        i
    } (PopView);
    t.StoryConfirmPop = e,
    __reflect(e.prototype, "mainLine.StoryConfirmPop")
} (mainLine || (mainLine = {}));
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
generateEUI.paths["resource/eui_skins/item/ChapterItemSkin.exml"] = window.ChapterItemSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["img", "txtOff"],
        this.height = 175,
        this.width = 376,
        this.elementsContent = [this.img_i(), this._Group1_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.img_i = function() {
        var t = new eui.Image;
        return this.img = t,
        t.horizontalCenter = 0,
        t.verticalCenter = 0,
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.right = 10,
        t.y = 5,
        t.elementsContent = [this._Rect1_i(), this.txtOff_i()],
        t
    },
    i._Rect1_i = function() {
        var t = new eui.Rect;
        return t.bottom = 0,
        t.ellipseWidth = 10,
        t.fillAlpha = .2,
        t.left = 0,
        t.right = 0,
        t.top = 0,
        t
    },
    i.txtOff_i = function() {
        var t = new eui.Label;
        return this.txtOff = t,
        t.fontFamily = "REEJI",
        t.left = 5,
        t.right = 5,
        t.size = 24,
        t.stroke = 1,
        t.strokeColor = 14163724,
        t.text = "test",
        t.textColor = 16766932,
        t.y = 0,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/item/ChapterProgressItemSkin.exml"] = window.ChapterProgressItemSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["txtProcessName", "txtProcess", "progress", "imgCan", "txtReward", "group", "imgReward", "imgHas", "groupMore"],
        this.height = 90,
        this.width = 491,
        this.elementsContent = [this._Group2_i()]
    }
    __extends(e, t);
    var i = function(t) {
        function e() {
            t.call(this),
            this.skinParts = ["thumb"],
            this.elementsContent = [this.thumb_i()],
            this.states = [new eui.State("up", []), new eui.State("down", []), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i.thumb_i = function() {
            var t = new eui.Image;
            return this.thumb = t,
            t.source = "chapter_progress_item_imgprocess_png",
            t
        },
        e
    } (eui.Skin),
    n = e.prototype;
    return n._Group2_i = function() {
        var t = new eui.Group;
        return t.cacheAsBitmap = !0,
        t.x = -9,
        t.y = 0,
        t.elementsContent = [this.group_i(), this.imgReward_i(), this.imgHas_i(), this.groupMore_i()],
        t
    },
    n.group_i = function() {
        var t = new eui.Group;
        return this.group = t,
        t.x = 9,
        t.y = 0,
        t.elementsContent = [this._Image1_i(), this._Group1_i(), this.progress_i(), this.imgCan_i(), this.txtReward_i()],
        t
    },
    n._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "chapter_progress_item_img3_png",
        t
    },
    n._Group1_i = function() {
        var t = new eui.Group;
        return t.x = 109,
        t.y = 35,
        t.layout = this._HorizontalLayout1_i(),
        t.elementsContent = [this.txtProcessName_i(), this.txtProcess_i()],
        t
    },
    n._HorizontalLayout1_i = function() {
        var t = new eui.HorizontalLayout;
        return t
    },
    n.txtProcessName_i = function() {
        var t = new eui.Label;
        return this.txtProcessName = t,
        t.fontFamily = "MFShangHei",
        t.size = 20,
        t.text = "章节进度达到",
        t.textColor = 16777215,
        t.x = 0,
        t.y = 0,
        t
    },
    n.txtProcess_i = function() {
        var t = new eui.Label;
        return this.txtProcess = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.textColor = 7461887,
        t.x = 171.64,
        t.y = .52,
        t
    },
    n.progress_i = function() {
        var t = new eui.ProgressBar;
        return this.progress = t,
        t.height = 14,
        t.slideDuration = 0,
        t.width = 253,
        t.x = 105,
        t.y = 68,
        t.skinName = i,
        t
    },
    n.imgCan_i = function() {
        var t = new eui.Image;
        return this.imgCan = t,
        t.source = "reward_collect_pop_imgcan_png",
        t.visible = !0,
        t.x = 400,
        t.y = 1,
        t
    },
    n.txtReward_i = function() {
        var t = new eui.Label;
        return this.txtReward = t,
        t.fontFamily = "MFShangHei",
        t.right = 20,
        t.size = 16,
        t.textColor = 16777215,
        t.y = 65,
        t
    },
    n.imgReward_i = function() {
        var t = new eui.Image;
        return this.imgReward = t,
        t.height = 50,
        t.visible = !0,
        t.width = 50,
        t.x = 428,
        t.y = 22,
        t
    },
    n.imgHas_i = function() {
        var t = new eui.Image;
        return this.imgHas = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "chapter_progress_item_imghas_png",
        t.visible = !1,
        t.x = 418,
        t.y = 11,
        t
    },
    n.groupMore_i = function() {
        var t = new eui.Group;
        return this.groupMore = t,
        t.visible = !1,
        t.x = 0,
        t.y = 100,
        t.elementsContent = [this._Image2_i(), this._Label1_i()],
        t
    },
    n._Image2_i = function() {
        var t = new eui.Image;
        return t.horizontalCenter = 0,
        t.source = "reward_collect_pop_imgmore_png",
        t.y = 0,
        t
    },
    n._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "更多奖励，敬请期待...",
        t.textColor = 10668534,
        t.x = 165,
        t.y = 6,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/item/ChoiceItemSkin.exml"] = window.ChoiceItemSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["txtChoice"],
        this.height = 77,
        this.width = 575,
        this.elementsContent = [this._Image1_i(), this.txtChoice_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "choice_item_imgbg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.txtChoice_i = function() {
        var t = new eui.Label;
        return this.txtChoice = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = 0,
        t.size = 22,
        t.textColor = 16777215,
        t.y = 28,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/item/HistoryItemSkin.exml"] = window.HistoryItemSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["txt1", "txt2", "groupDialog", "txt3", "groupPB"],
        this.elementsContent = [this.groupDialog_i(), this.groupPB_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.groupDialog_i = function() {
        var t = new eui.Group;
        return this.groupDialog = t,
        t.visible = !0,
        t.layout = this._VerticalLayout1_i(),
        t.elementsContent = [this.txt1_i(), this.txt2_i()],
        t
    },
    i._VerticalLayout1_i = function() {
        var t = new eui.VerticalLayout;
        return t.gap = 35,
        t
    },
    i.txt1_i = function() {
        var t = new eui.Label;
        return this.txt1 = t,
        t.fontFamily = "MFShangHei",
        t.size = 20,
        t.textColor = 12111871,
        t.width = 950,
        t
    },
    i.txt2_i = function() {
        var t = new eui.Label;
        return this.txt2 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.textColor = 4252667,
        t.width = 950,
        t
    },
    i.groupPB_i = function() {
        var t = new eui.Group;
        return this.groupPB = t,
        t.visible = !0,
        t.layout = this._VerticalLayout2_i(),
        t.elementsContent = [this._Image1_i(), this.txt3_i(), this._Image2_i()],
        t
    },
    i._VerticalLayout2_i = function() {
        var t = new eui.VerticalLayout;
        return t.gap = 35,
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "dialog_panel_imgline_png",
        t.visible = !1,
        t.width = 950,
        t
    },
    i.txt3_i = function() {
        var t = new eui.Label;
        return this.txt3 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "\n\n\n",
        t.textColor = 7177396,
        t.width = 950,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "dialog_panel_imgline_png",
        t.visible = !1,
        t.width = 950,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/item/StoryItemSkin.exml"] = window.StoryItemSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["imgBG", "txtStoryName", "txtStoryIndex", "group"],
        this.height = 72,
        this.width = 186,
        this.elementsContent = [this.group_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.group_i = function() {
        var t = new eui.Group;
        return this.group = t,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this.imgBG_i(), this.txtStoryName_i(), this.txtStoryIndex_i()],
        t
    },
    i.imgBG_i = function() {
        var t = new eui.Image;
        return this.imgBG = t,
        t.source = "story_item_imgblue_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.txtStoryName_i = function() {
        var t = new eui.Label;
        return this.txtStoryName = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = 0,
        t.size = 22,
        t.textColor = 16777215,
        t.y = 33,
        t
    },
    i.txtStoryIndex_i = function() {
        var t = new eui.Label;
        return this.txtStoryIndex = t,
        t.fontFamily = "REEJI",
        t.size = 16,
        t.textColor = 16777215,
        t.x = 9,
        t.y = 2,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/panel/AllChaptersPanelSkin.exml"] = window.AllChaptersPanelSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["imgBG", "listChapter", "imgPet", "txtChapterName", "txtChapterDescribe", "imgRedDot", "groupChapterProgress", "btnStart", "groupAni", "btnYongYe"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.imgBG_i(), this._Image1_i(), this._Image2_i(), this._Group1_i(), this._Group2_i(), this._Group3_i(), this.groupAni_i(), this.btnYongYe_i(), this._Image8_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.imgBG_i = function() {
        var t = new eui.Image;
        return this.imgBG = t,
        t.height = 640,
        t.horizontalCenter = 0,
        t.scale9Grid = new egret.Rectangle(379, 191, 378, 20),
        t.y = 0,
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.bottom = 0,
        t.left = 0,
        t.right = 0,
        t.scale9Grid = new egret.Rectangle(379, 191, 378, 20),
        t.source = "all_chapters_panel_img7_png",
        t.top = 0,
        t.x = 10,
        t.y = 10,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 640,
        t.scale9Grid = new egret.Rectangle(54, 7, 5, 6),
        t.source = "all_chapters_panel_img4_png",
        t.width = 583,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.height = 0,
        t.horizontalCenter = -235,
        t.verticalCenter = 0,
        t.width = 0,
        t.elementsContent = [this._Image3_i(), this._Image4_i(), this._Scroller1_i()],
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.scaleX = 1,
        t.scaleY = 1,
        t.source = "all_chapters_panel_img3_png",
        t.x = -162,
        t.y = -258.00000000000006,
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.scaleX = 1,
        t.scaleY = 1,
        t.source = "all_chapters_panel_img2_png",
        t.x = -139.9999999999999,
        t.y = -258.00000000000006,
        t
    },
    i._Scroller1_i = function() {
        var t = new eui.Scroller;
        return t.height = 730,
        t.scaleX = .75,
        t.scaleY = .75,
        t.width = 400,
        t.x = -135,
        t.y = -245.00000000000006,
        t.viewport = this.listChapter_i(),
        t
    },
    i.listChapter_i = function() {
        var t = new eui.List;
        return this.listChapter = t,
        t.useVirtualLayout = !1,
        t
    },
    i._Group2_i = function() {
        var t = new eui.Group;
        return t.bottom = 0,
        t.left = 508,
        t.right = 0,
        t.top = 0,
        t.touchEnabled = !1,
        t.visible = !0,
        t.elementsContent = [this.imgPet_i()],
        t
    },
    i.imgPet_i = function() {
        var t = new eui.Image;
        return this.imgPet = t,
        t.horizontalCenter = 0,
        t.verticalCenter = 0,
        t
    },
    i._Group3_i = function() {
        var t = new eui.Group;
        return t.right = 0,
        t.y = 438,
        t.elementsContent = [this._Image5_i(), this.txtChapterName_i(), this._Image6_i(), this.txtChapterDescribe_i(), this.groupChapterProgress_i(), this.btnStart_i()],
        t
    },
    i._Image5_i = function() {
        var t = new eui.Image;
        return t.height = 202,
        t.scale9Grid = new egret.Rectangle(232, 16, 233, 0),
        t.source = "all_chapters_panel_img6_png",
        t.width = 697,
        t.x = 0,
        t.y = 0,
        t
    },
    i.txtChapterName_i = function() {
        var t = new eui.Label;
        return this.txtChapterName = t,
        t.fontFamily = "REEJI",
        t.size = 24,
        t.textColor = 16777215,
        t.x = 94,
        t.y = 23,
        t
    },
    i._Image6_i = function() {
        var t = new eui.Image;
        return t.source = "all_chapters_panel_img5_png",
        t.x = 86,
        t.y = 21,
        t
    },
    i.txtChapterDescribe_i = function() {
        var t = new eui.Label;
        return this.txtChapterDescribe = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.textColor = 12834813,
        t.width = 397,
        t.x = 86,
        t.y = 58,
        t
    },
    i.groupChapterProgress_i = function() {
        var t = new eui.Group;
        return this.groupChapterProgress = t,
        t.x = 88,
        t.y = 129,
        t.elementsContent = [this._Image7_i(), this.imgRedDot_i(), this._Label1_i()],
        t
    },
    i._Image7_i = function() {
        var t = new eui.Image;
        return t.source = "all_chapters_panel_img1_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.imgRedDot_i = function() {
        var t = new eui.Image;
        return this.imgRedDot = t,
        t.height = 24,
        t.source = "all_chapters_panel_imgreddot_png",
        t.width = 24,
        t.x = -15,
        t.y = -12,
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 24,
        t.text = "章节进度",
        t.textColor = 12834813,
        t.x = 56,
        t.y = 5,
        t
    },
    i.btnStart_i = function() {
        var t = new eui.Image;
        return this.btnStart = t,
        t.source = "all_chapters_panel_btnstart_png",
        t.x = 520,
        t.y = 54,
        t
    },
    i.groupAni_i = function() {
        var t = new eui.Group;
        return this.groupAni = t,
        t
    },
    i.btnYongYe_i = function() {
        var t = new eui.Image;
        return this.btnYongYe = t,
        t.right = 45,
        t.source = "all_chapters_panel_btnyongye_png",
        t.y = 22,
        t
    },
    i._Image8_i = function() {
        var t = new eui.Image;
        return t.source = "all_chapters_panel_imgoff_png",
        t.visible = !1,
        t.x = 308,
        t.y = 53,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/panel/DialogPanelSkin.exml"] = window.DialogPanelSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["groupAsset", "btnBack", "imgRightTop", "imgBottom", "imgNotAuto", "imgAuto", "groupAuto", "btnHide", "btnReview3", "txt1", "btnReview2", "group1", "txtName", "txt2", "btnReview1", "group2", "imgNext", "groupDialog", "groupAni"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this._Rect1_i(), this.groupAsset_i(), this.btnBack_i(), this.imgRightTop_i(), this.imgBottom_i(), this.groupAuto_i(), this.btnHide_i(), this.btnReview3_i(), this.groupDialog_i(), this.groupAni_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Rect1_i = function() {
        var t = new eui.Rect;
        return t.bottom = 0,
        t.fillAlpha = 1,
        t.left = 0,
        t.right = 0,
        t.top = 0,
        t.visible = !0,
        t
    },
    i.groupAsset_i = function() {
        var t = new eui.Group;
        return this.groupAsset = t,
        t.bottom = 0,
        t.left = 0,
        t.right = 0,
        t.top = 0,
        t
    },
    i.btnBack_i = function() {
        var t = new eui.Group;
        return this.btnBack = t,
        t.height = 67.648,
        t.width = 95.824,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image1_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.scaleX = 1,
        t.scaleY = 1,
        t.source = "all_chapters_panel_btnback_png",
        t.x = 9,
        t.y = 5,
        t
    },
    i.imgRightTop_i = function() {
        var t = new eui.Image;
        return this.imgRightTop = t,
        t.right = 0,
        t.source = "dialog_panel_topright_png",
        t.width = 151,
        t.y = 0,
        t
    },
    i.imgBottom_i = function() {
        var t = new eui.Image;
        return this.imgBottom = t,
        t.left = 0,
        t.right = 0,
        t.source = "dialog_panel_img1_png",
        t.y = 561,
        t
    },
    i.groupAuto_i = function() {
        var t = new eui.Group;
        return this.groupAuto = t,
        t.right = 21,
        t.y = 15.936,
        t.elementsContent = [this._Image2_i(), this.imgNotAuto_i(), this.imgAuto_i()],
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "dialog_panel_txtauto_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.imgNotAuto_i = function() {
        var t = new eui.Image;
        return this.imgNotAuto = t,
        t.source = "dialog_panel_imgnotauto_png",
        t.visible = !1,
        t.x = 50,
        t.y = 0,
        t
    },
    i.imgAuto_i = function() {
        var t = new eui.Image;
        return this.imgAuto = t,
        t.source = "dialog_panel_imgauto_png",
        t.visible = !1,
        t.x = 48,
        t.y = 1,
        t
    },
    i.btnHide_i = function() {
        var t = new eui.Image;
        return this.btnHide = t,
        t.right = 131,
        t.source = "dialog_panel_btnhide_png",
        t.visible = !1,
        t.y = 16.936,
        t
    },
    i.btnReview3_i = function() {
        var t = new eui.Image;
        return this.btnReview3 = t,
        t.right = 114,
        t.source = "main_line_btnreview_png",
        t.y = 14,
        t
    },
    i.groupDialog_i = function() {
        var t = new eui.Group;
        return this.groupDialog = t,
        t.left = 0,
        t.right = 0,
        t.y = 390,
        t.elementsContent = [this.group1_i(), this.group2_i(), this.imgNext_i()],
        t
    },
    i.group1_i = function() {
        var t = new eui.Group;
        return this.group1 = t,
        t.left = 0,
        t.right = 0,
        t.visible = !1,
        t.y = 171,
        t.elementsContent = [this._Image3_i(), this.txt1_i(), this.btnReview2_i()],
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.left = 0,
        t.right = 0,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "dialog_panel_img2_png",
        t.x = 0,
        t.y = -91,
        t
    },
    i.txt1_i = function() {
        var t = new eui.Label;
        return this.txt1 = t,
        t.fontFamily = "MFShangHei",
        t.height = 69,
        t.left = 200,
        t.right = 200,
        t.size = 22,
        t.textColor = 12375033,
        t.y = 5,
        t
    },
    i.btnReview2_i = function() {
        var t = new eui.Image;
        return this.btnReview2 = t,
        t.source = "dialog_panel_btnreview_png",
        t.x = 73,
        t.y = 2,
        t
    },
    i.group2_i = function() {
        var t = new eui.Group;
        return this.group2 = t,
        t.left = 0,
        t.right = 0,
        t.visible = !1,
        t.y = 0,
        t.elementsContent = [this._Image4_i(), this._Image5_i(), this.txtName_i(), this.txt2_i(), this.btnReview1_i()],
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.left = 0,
        t.right = 0,
        t.source = "dialog_panel_img3_png",
        t.y = 0,
        t
    },
    i._Image5_i = function() {
        var t = new eui.Image;
        return t.source = "dialog_panel_imgnamebg_png",
        t.x = 78,
        t.y = 16,
        t
    },
    i.txtName_i = function() {
        var t = new eui.Label;
        return this.txtName = t,
        t.fontFamily = "REEJI",
        t.size = 28,
        t.textColor = 16777215,
        t.x = 108,
        t.y = 26,
        t
    },
    i.txt2_i = function() {
        var t = new eui.Label;
        return this.txt2 = t,
        t.fontFamily = "MFShangHei",
        t.height = 160,
        t.left = 100,
        t.right = 100,
        t.size = 22,
        t.text = "案说法哦是否还哦是发啊师傅哈怂i京东i",
        t.textColor = 12375033,
        t.y = 80,
        t
    },
    i.btnReview1_i = function() {
        var t = new eui.Image;
        return this.btnReview1 = t,
        t.right = 76,
        t.source = "dialog_panel_btnreview_png",
        t.y = 17,
        t
    },
    i.imgNext_i = function() {
        var t = new eui.Image;
        return this.imgNext = t,
        t.right = 86,
        t.source = "dialog_panel_imgnext_png",
        t.y = 198,
        t
    },
    i.groupAni_i = function() {
        var t = new eui.Group;
        return this.groupAni = t,
        t.horizontalCenter = 0,
        t.verticalCenter = 0,
        t.x = 578,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/panel/HistoryPanelSkin.exml"] = window.HistoryPanelSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["btnClose", "img1", "img2", "list", "scroller", "scrollBar"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this._Image1_i(), this.btnClose_i(), this.img1_i(), this.img2_i(), this.scroller_i(), this.scrollBar_i()]
    }
    __extends(e, t);
    var i = function(t) {
        function e() {
            t.call(this),
            this.skinParts = ["thumb"],
            this.elementsContent = [this._Image1_i(), this.thumb_i()],
            this.states = [new eui.State("up", []), new eui.State("down", []), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return t.source = "history_panel_img1_png",
            t
        },
        i.thumb_i = function() {
            var t = new eui.Image;
            return this.thumb = t,
            t.source = "history_panel_img2_png",
            t
        },
        e
    } (eui.Skin),
    n = e.prototype;
    return n._Image1_i = function() {
        var t = new eui.Image;
        return t.bottom = 0,
        t.left = 0,
        t.right = 0,
        t.scale9Grid = new egret.Rectangle(7, 7, 6, 6),
        t.source = "history_panel_imgbg_png",
        t.top = 0,
        t
    },
    n.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.right = 19,
        t.source = "history_panel_btnclose_png",
        t.y = 16,
        t
    },
    n.img1_i = function() {
        var t = new eui.Image;
        return this.img1 = t,
        t.right = 61,
        t.source = "history_panel_img1_png",
        t.visible = !1,
        t.y = 57,
        t
    },
    n.img2_i = function() {
        var t = new eui.Image;
        return this.img2 = t,
        t.right = 61,
        t.source = "history_panel_img2_png",
        t.visible = !1,
        t.y = 56,
        t
    },
    n.scroller_i = function() {
        var t = new eui.Scroller;
        return this.scroller = t,
        t.height = 500,
        t.horizontalCenter = 0,
        t.width = 950,
        t.y = 80,
        t.viewport = this.list_i(),
        t
    },
    n.list_i = function() {
        var t = new eui.List;
        return this.list = t,
        t.layout = this._VerticalLayout1_i(),
        t
    },
    n._VerticalLayout1_i = function() {
        var t = new eui.VerticalLayout;
        return t.gap = 35,
        t
    },
    n.scrollBar_i = function() {
        var t = new eui.VScrollBar;
        return this.scrollBar = t,
        t.height = 551,
        t.horizontalCenter = 505.5,
        t.width = 3,
        t.y = 57,
        t.skinName = i,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/panel/StoryOverviewPanelSkin.exml"] = window.StoryOverviewPanelSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["imgBG", "groupStory", "imgLogo", "imgRedDot", "groupChapterProgress", "txtChapterDescribe", "txtChapterName", "groupAni"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.imgBG_i(), this._Image1_i(), this._Scroller1_i(), this._Group2_i(), this.groupAni_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.imgBG_i = function() {
        var t = new eui.Image;
        return this.imgBG = t,
        t.height = 640,
        t.horizontalCenter = 0,
        t.source = "story_overview_panel_zu_26_png",
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.bottom = 0,
        t.left = 0,
        t.right = 0,
        t.scale9Grid = new egret.Rectangle(379, 222, 378, 7),
        t.source = "all_chapters_panel_img7_png",
        t.top = 0,
        t
    },
    i._Scroller1_i = function() {
        var t = new eui.Scroller;
        return t.height = 640,
        t.left = 100,
        t.right = 100,
        t.x = 145,
        t.viewport = this._Group1_i(),
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.x = 1052,
        t.y = 147,
        t.elementsContent = [this.groupStory_i()],
        t
    },
    i.groupStory_i = function() {
        var t = new eui.Group;
        return this.groupStory = t,
        t.cacheAsBitmap = !1,
        t.height = 640,
        t
    },
    i._Group2_i = function() {
        var t = new eui.Group;
        return t.cacheAsBitmap = !0,
        t.horizontalCenter = 0,
        t.visible = !0,
        t.width = 1106,
        t.y = 552,
        t.elementsContent = [this._Image2_i(), this.imgLogo_i(), this.groupChapterProgress_i(), this._Label2_i(), this.txtChapterDescribe_i(), this.txtChapterName_i()],
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "story_overview_panel_img4_png",
        t.visible = !0,
        t.x = 6,
        t.y = 0,
        t
    },
    i.imgLogo_i = function() {
        var t = new eui.Image;
        return this.imgLogo = t,
        t.height = 50,
        t.horizontalCenter = -504,
        t.verticalCenter = 0,
        t.visible = !0,
        t.width = 50,
        t
    },
    i.groupChapterProgress_i = function() {
        var t = new eui.Group;
        return this.groupChapterProgress = t,
        t.x = 918,
        t.y = 30,
        t.elementsContent = [this._Image3_i(), this.imgRedDot_i(), this._Label1_i()],
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "story_overview_panel_img3_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.imgRedDot_i = function() {
        var t = new eui.Image;
        return this.imgRedDot = t,
        t.height = 24,
        t.source = "all_chapters_panel_imgreddot_png",
        t.width = 24,
        t.x = -14,
        t.y = -11,
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 25,
        t.text = "章节进度",
        t.textColor = 12834813,
        t.verticalCenter = 0,
        t.x = 61,
        t
    },
    i._Label2_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "当前章节",
        t.textColor = 12834813,
        t.x = 104,
        t.y = 25,
        t
    },
    i.txtChapterDescribe_i = function() {
        var t = new eui.Label;
        return this.txtChapterDescribe = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.textColor = 12834813,
        t.width = 557,
        t.x = 294,
        t.y = 33,
        t
    },
    i.txtChapterName_i = function() {
        var t = new eui.Label;
        return this.txtChapterName = t,
        t.fontFamily = "REEJI",
        t.size = 22,
        t.textColor = 16383487,
        t.x = 103,
        t.y = 48,
        t
    },
    i.groupAni_i = function() {
        var t = new eui.Group;
        return this.groupAni = t,
        t.horizontalCenter = 0,
        t.verticalCenter = 0,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/pop/ChapterProgressPopSkin.exml"] = window.ChapterProgressPopSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["list"],
        this.height = 547,
        this.width = 534,
        this.elementsContent = [this._Image1_i(), this._Image2_i(), this._Label1_i(), this._Scroller1_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 547,
        t.scale9Grid = new egret.Rectangle(7, 7, 6, 4),
        t.source = "chapter_progress_pop_img1_png",
        t.width = 534,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "chapter_progress_pop_img2_png",
        t.x = 22,
        t.y = 15,
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "REEJI",
        t.size = 22,
        t.text = "章节进度奖励收集",
        t.textColor = 11724543,
        t.x = 43,
        t.y = 17,
        t
    },
    i._Scroller1_i = function() {
        var t = new eui.Scroller;
        return t.height = 468,
        t.horizontalCenter = 0,
        t.width = 491,
        t.y = 59,
        t.viewport = this.list_i(),
        t
    },
    i.list_i = function() {
        var t = new eui.List;
        return this.list = t,
        t.layout = this._VerticalLayout1_i(),
        t
    },
    i._VerticalLayout1_i = function() {
        var t = new eui.VerticalLayout;
        return t.gap = 10,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/pop/QuestionPopSkin.exml"] = window.QuestionPopSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["group"],
        this.elementsContent = [this.group_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.group_i = function() {
        var t = new eui.Group;
        return this.group = t,
        t.layout = this._VerticalLayout1_i(),
        t
    },
    i._VerticalLayout1_i = function() {
        var t = new eui.VerticalLayout;
        return t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/pop/StoryConfirmPopSkin.exml"] = window.StoryConfirmPopSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["btnStart", "imgItem1", "imgItem2", "imgItem3", "imgHas", "txtItem3", "txtItem2", "txtItem1", "txtStoryName", "txtDescribe", "txtCanNotOpen"],
        this.height = 201,
        this.width = 542,
        this.elementsContent = [this._Image1_i(), this.btnStart_i(), this.imgItem1_i(), this.imgItem2_i(), this.imgItem3_i(), this.imgHas_i(), this.txtItem3_i(), this.txtItem2_i(), this.txtItem1_i(), this.txtStoryName_i(), this.txtDescribe_i(), this._Label1_i(), this.txtCanNotOpen_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "story_confirm_pop_img1_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.btnStart_i = function() {
        var t = new eui.Image;
        return this.btnStart = t,
        t.source = "story_confirm_pop_btnstart_png",
        t.visible = !0,
        t.x = 331,
        t.y = 134,
        t
    },
    i.imgItem1_i = function() {
        var t = new eui.Image;
        return this.imgItem1 = t,
        t.height = 48,
        t.width = 48,
        t.x = 292,
        t.y = 64,
        t
    },
    i.imgItem2_i = function() {
        var t = new eui.Image;
        return this.imgItem2 = t,
        t.height = 48,
        t.width = 48,
        t.x = 374,
        t.y = 64,
        t
    },
    i.imgItem3_i = function() {
        var t = new eui.Image;
        return this.imgItem3 = t,
        t.height = 48,
        t.width = 48,
        t.x = 457,
        t.y = 63,
        t
    },
    i.imgHas_i = function() {
        var t = new eui.Image;
        return this.imgHas = t,
        t.source = "reward_collect_pop_imghasfirst_png",
        t.visible = !0,
        t.x = 428,
        t.y = 7,
        t
    },
    i.txtItem3_i = function() {
        var t = new eui.Label;
        return this.txtItem3 = t,
        t.fontFamily = "MFShangHei",
        t.right = 29,
        t.size = 16,
        t.textColor = 16777215,
        t.x = 368,
        t.y = 104,
        t
    },
    i.txtItem2_i = function() {
        var t = new eui.Label;
        return this.txtItem2 = t,
        t.fontFamily = "MFShangHei",
        t.right = 112,
        t.size = 16,
        t.textColor = 16777215,
        t.x = 358,
        t.y = 104,
        t
    },
    i.txtItem1_i = function() {
        var t = new eui.Label;
        return this.txtItem1 = t,
        t.fontFamily = "MFShangHei",
        t.right = 194,
        t.size = 16,
        t.textColor = 16777215,
        t.y = 104,
        t
    },
    i.txtStoryName_i = function() {
        var t = new eui.Label;
        return this.txtStoryName = t,
        t.fontFamily = "REEJI",
        t.size = 20,
        t.textColor = 11724543,
        t.x = 49,
        t.y = 20,
        t
    },
    i.txtDescribe_i = function() {
        var t = new eui.Label;
        return this.txtDescribe = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.textColor = 6258105,
        t.width = 214,
        t.x = 32,
        t.y = 62,
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "首通奖励",
        t.textColor = 13820671,
        t.x = 278,
        t.y = 21,
        t
    },
    i.txtCanNotOpen_i = function() {
        var t = new eui.Label;
        return this.txtCanNotOpen = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "——请先完成前置剧情任务——",
        t.textColor = 13820671,
        t.visible = !0,
        t.x = 270,
        t.y = 152,
        t
    },
    e
} (eui.Skin);