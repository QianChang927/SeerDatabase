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
    return new(i || (i = Promise))(function(a, o) {
        function r(t) {
            try {
                u(n.next(t))
            } catch(e) {
                o(e)
            }
        }
        function s(t) {
            try {
                u(n["throw"](t))
            } catch(e) {
                o(e)
            }
        }
        function u(t) {
            t.done ? a(t.value) : new i(function(e) {
                e(t.value)
            }).then(r, s)
        }
        u((n = n.apply(t, e || [])).next())
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
        if (a) throw new TypeError("Generator is already executing.");
        for (; u;) try {
            if (a = 1, o && (r = o[2 & i[0] ? "return": i[0] ? "throw": "next"]) && !(r = r.call(o, i[1])).done) return r;
            switch (o = 0, r && (i = [0, r.value]), i[0]) {
            case 0:
            case 1:
                r = i;
                break;
            case 4:
                return u.label++,
                {
                    value: i[1],
                    done: !1
                };
            case 5:
                u.label++,
                o = i[1],
                i = [0];
                continue;
            case 7:
                i = u.ops.pop(),
                u.trys.pop();
                continue;
            default:
                if (r = u.trys, !(r = r.length > 0 && r[r.length - 1]) && (6 === i[0] || 2 === i[0])) {
                    u = 0;
                    continue
                }
                if (3 === i[0] && (!r || i[1] > r[0] && i[1] < r[3])) {
                    u.label = i[1];
                    break
                }
                if (6 === i[0] && u.label < r[1]) {
                    u.label = r[1],
                    r = i;
                    break
                }
                if (r && u.label < r[2]) {
                    u.label = r[2],
                    u.ops.push(i);
                    break
                }
                r[2] && u.ops.pop(),
                u.trys.pop();
                continue
            }
            i = e.call(t, u)
        } catch(n) {
            i = [6, n],
            o = 0
        } finally {
            a = r = 0
        }
        if (5 & i[0]) throw i[1];
        return {
            value: i[0] ? i[1] : void 0,
            done: !0
        }
    }
    var a, o, r, s, u = {
        label: 0,
        sent: function() {
            if (1 & r[0]) throw r[1];
            return r[1]
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
diamondTask; !
function(t) {
    t.allTimes = 150;
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t.groupName = "DiamondTask_groupName",
            t.skinName = "DiamondTaskSkin",
            t
        }
        return __extends(i, e),
        i.prototype._resize = function() {
            e.prototype._resize.call(this),
            this.bg.width = LevelManager.stage.stageWidth,
            this.bg.height = LevelManager.stage.stageHeight
        },
        i.prototype.createChildren = function() {
            var i = this;
            e.prototype.createChildren.call(this),
            e.prototype.initBtnClose.call(this, "diamond_task_title_png", this),
            this.adaptBgByScale(this.bg),
            this.group_back.right = DeviceInfoManager.adapterOffSetX,
            this.active.right = DeviceInfoManager.adapterOffSetX,
            this.ani_group.right = DeviceInfoManager.adapterOffSetX + -192,
            this._list_active.itemRenderer = t.DiamondTaskActiveItem,
            UICjsUtil.autoResize = !1,
            this.petModel.SetInitComp(core.component.pet.PetModel.DYNAMIC_MODEL, !1, !1),
            this.petModel.SetCacheMax(10),
            this.petModel.SetPetData(4305),
            this.petModel.alpha = 0,
            this.petModel.pet_bg.visible = !1,
            this.imgSeerDou.source = ClientConfig.getItemIcon(1),
            this.imgDiamond.source = ClientConfig.getItemIcon(5);
            var n = new MenuData;
            n["default"] = 1,
            n.groupName = this.groupName,
            n.root = [1, 2, 3],
            n.data = {
                1 : {
                    title: "每日任务"
                },
                2 : {
                    title: "每周任务"
                },
                3 : {
                    title: "资源找回"
                }
            },
            ImageButtonUtil.add(this.tips,
            function() {
                tipsPop.TipsPop.openHelpPopById(99)
            },
            this),
            EventManager.addEventListener(DailyTaskManager.UPDATE_DAILY_TASK_DATA, this.updateView, this),
            EventManager.addEventListener(BaseMenuEvent.BASE_MENU_SELECT_CHANGE_ + this.groupName, this.changeTab, this),
            DailyTaskManager.initData().then(function() {
                i.menu = Menu.createMenu(n, i.menuGroup)
            }),
            ImageButtonUtil.add(this.imgSeerDou,
            function() {
                tipsPop.TipsPop.openItemPop({
                    id: 1
                })
            },
            this),
            ImageButtonUtil.add(this.imgDiamond,
            function() {
                tipsPop.TipsPop.openItemPop({
                    id: 5
                })
            },
            this),
            ImageButtonUtil.add(this.btnAddDiamond,
            function() {
                PayManager.rechargeDiamond()
            },
            this)
        },
        i.prototype.changeTab = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var t;
                return __generator(this,
                function(e) {
                    switch (t = ~~this.menu.selectedValue) {
                    case 1:
                    case 2:
                        this.currentState = "active";
                        break;
                    case 3:
                        this.currentState = "back"
                    }
                    return this.updateView(!0),
                    [2]
                })
            })
        },
        i.prototype.updateView = function(e) {
            var i = this;
            void 0 === e && (e = !1);
            var n = ~~this.menu.selectedValue;
            this.none.visible = !1,
            this.updateCoin(),
            common.TweenUtil.numberAnimation(DailyTaskManager.getMyActiveNum(n), this.active_num, .1);
            var a = [],
            o = [],
            r = 3;
            if (1 == n) {
                r = 3,
                this.active_pro.maximum = 100,
                this._list.itemRenderer = t.DiamondTaskItem,
                a = DailyTaskManager.getTaskByKeyValue("Dailytask", "time", n),
                a = DailyTaskManager.sortDailyTasks(a),
                o = DailyTaskManager.sortGift(1);
                var s = DailyTaskManager.getMyActiveNum(n);
                this.active_pro.value = s > 3 ? s: 3
            } else if (2 == n) {
                this.active_pro.maximum = 200,
                this._list.itemRenderer = t.DiamondTaskItem,
                a = DailyTaskManager.getTaskByKeyValue("Dailytask", "time", n),
                a = DailyTaskManager.sortDailyTasks(a),
                o = DailyTaskManager.sortGift(2);
                var s = DailyTaskManager.getMyActiveNum(n);
                this.active_pro.value = s > 6 ? s: 6
            } else {
                var u = Math.min(DailyTaskManager.active[2], t.allTimes);
                this._list.itemRenderer = t.DiamondTaskBackItem;
                for (var _ = DailyTaskManager.activeState[2], c = DailyTaskManager.getTaskByKeyValue("Dailytask_gift", "type", 1), h = [], l = 0; l < c.length; l++) {
                    var d = 1 == BitUtil.getBit(_, l),
                    m = c[l]; ! d && h.push(m)
                }
                a = t.allTimes <= u ? [] : h,
                this.none.visible = 0 == a.length,
                this.back_times.text = u + "/" + t.allTimes
            }
            this.group_back.cacheAsBitmap = !0,
            this.cacheGroup.cacheAsBitmap = !0,
            this.once(egret.Event.RENDER,
            function() {
                if (i.menu) for (var t = DailyTaskManager.checkAllRed(), e = 0; e < t.length; e++) Menu.updateRed(i.groupName, e + 1, !!t[e])
            },
            this),
            this._list_active.dataProvider = new eui.ArrayCollection(o),
            this._list.dataProvider = new eui.ArrayCollection(a),
            e && "boolean" == typeof e && this.once(egret.Event.RENDER,
            function() {
                3 != n ? (gsap.killTweensOf(i._list_active.$children), DisplayUtil.setScrollerItemIncludeInLayout(i._scro_active, !1), gsap.from(i._list_active.$children, {
                    x: 250,
                    alpha: 0,
                    stagger: .1
                }).then(function() {
                    DisplayUtil.setScrollerItemIncludeInLayout(i._scro_active, !0)
                })) : (i.ani_group.scaleX = -1, i.petModel.alpha = 1)
            },
            this)
        },
        i.prototype.updateCoin = function() {
            this.txtCoin.text = core.gameUtil.ConvertItemNumView(MainManager.actorInfo.coins),
            this.txtDiamond.text = core.gameUtil.ConvertItemNumView(UserInfoManager.diamond),
            this.count.cacheAsBitmap = !0
        },
        i.prototype.destroy = function() {
            e.prototype.destroy.call(this),
            this.menu && this.menu.destroy(),
            UICjsUtil.autoResize = !0,
            gsap.killTweensOf(this.active_num),
            gsap.killTweensOf(this._list_active.$children),
            this.ani_group.removeChildren(),
            this.petModel.destroy()
        },
        i
    } (BaseModule);
    t.DiamondTask = e,
    __reflect(e.prototype, "diamondTask.DiamondTask")
} (diamondTask || (diamondTask = {}));
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
diamondTask; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.skinName = DiamondTaskActiveItemSkin,
            e
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            var e = this;
            t.prototype.childrenCreated.call(this),
            this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this),
            ImageButtonUtil.add(this.get,
            function() {
                DailyTaskManager.sendGetReward(e.info.type, e.info.id)
            },
            this),
            ImageButtonUtil.add(this.gift,
            function() {
                var t = e.info.rewardinfo;
                e.info.diamond && (t += ";1_5_" + e.info.diamond),
                tipsPop.TipsPop.openMultiItemsPop(t, e.info.name)
            },
            this)
        },
        e.prototype.dataChanged = function() {
            t.prototype.dataChanged.call(this),
            (this.data || 0 == this.data) && (this.info = this.data, this.updateView())
        },
        e.prototype.updateView = function() {
            var t = DailyTaskManager.getGiftStateById(this.info.id);
            this.num.text = this.info.activity + "",
            this.currentState = 0 == t ? "go": 1 == t ? "get": "got";
            var e = this.info.icon;
            this.gift.source = "diamond_task_active_" + (2 == t ? "open": "close") + "_" + e + "_png",
            this.cacheAsBitmap = !0
        },
        e.prototype.destroy = function() {
            ImageButtonUtil.removeAll(this),
            this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this)
        },
        e
    } (eui.ItemRenderer);
    t.DiamondTaskActiveItem = e,
    __reflect(e.prototype, "diamondTask.DiamondTaskActiveItem")
} (diamondTask || (diamondTask = {}));
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
diamondTask; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t.skinName = DiamondTaskBackItemSkin,
            t
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            var t = this;
            e.prototype.childrenCreated.call(this),
            this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this),
            ImageButtonUtil.add(this.btn,
            function() {
                var e = ItemManager.parseItem(t.info_retrieve.money)[0];
                return ItemManager.getNumByID(e.id) < e.num ? void BubblerManager.getInstance().showText("赛尔豆数量不足") : void DailyTaskManager.sendGetReward(3, t.info.id)
            },
            this)
        },
        i.prototype.dataChanged = function() {
            e.prototype.dataChanged.call(this),
            (this.data || 0 == this.data) && (this.info = this.data, this._list.itemRenderer = t.DiamondTaskIcon, this.updateView())
        },
        i.prototype.updateView = function() {
            for (var e = this,
            i = Math.min(DailyTaskManager.active[2], t.allTimes), n = config.Retrieve.getItems(), a = 0; a < n.length; a++) {
                var o = n[a],
                r = o.num.split(",").map(Number);
                if (r[0] <= i && i <= r[1]) {
                    this.info_retrieve = o;
                    break
                }
            }
            var s = this.info.activity;
            this.back_desc.textFlow = [{
                text: s + "点",
                style: {
                    textColor: 4187130
                }
            },
            {
                text: "活跃宝箱",
                style: {
                    textColor: 12900350
                }
            }];
            var u = ItemManager.parseItem(this.info_retrieve.money)[0];
            this.icon_btn.source = ClientConfig.getItemIcon(u.id),
            this.num_btn.text = core.gameUtil.ConvertToTenThousand(u.num),
            this.bgGroup.cacheAsBitmap = !0;
            var _ = this.info.rewardinfo;
            this.info.diamond && (_ += ";1_5_" + this.info.diamond);
            var c = ItemManager.parseItem(_).map(function(t) {
                return t.num = Math.ceil(t.num * e.info_retrieve.ratio / 100),
                t
            });
            this._list.dataProvider = new eui.ArrayCollection(c);
            var h = 0;
            this.icon_btn.visible = 1 != h,
            this.num_btn.visible = 1 != h,
            this.back.visible = 1 == h,
            DisplayUtil.setEnabled(this.btn, 1 != h, !0)
        },
        i.prototype.destroy = function() {
            ImageButtonUtil.removeAll(this),
            this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this)
        },
        i
    } (eui.ItemRenderer);
    t.DiamondTaskBackItem = e,
    __reflect(e.prototype, "diamondTask.DiamondTaskBackItem")
} (diamondTask || (diamondTask = {}));
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
diamondTask; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.skinName = DiamondTaskItemSkin,
            e
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            var e = this;
            t.prototype.childrenCreated.call(this),
            this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this),
            ImageButtonUtil.add(this.go,
            function() {
                if (e.info.jump) if (112 == e.info.id) {
                    var t = SystemTimerManager.sysDate.getDay();
                    if (5 != t && 6 != t) return void BubblerManager.getInstance().showText("不在活动时间内!");
                    ModuleManager.CloseAll(),
                    core.gameUtil.jumpTo(e.info.jump)
                } else ModuleManager.CloseAll(),
                core.gameUtil.jumpTo(e.info.jump)
            },
            this),
            ImageButtonUtil.add(this.get,
            function() {
                DailyTaskManager.sendGetDailyTaskReward(e.info.id)
            },
            this)
        },
        e.prototype.dataChanged = function() {
            t.prototype.dataChanged.call(this),
            (this.data || 0 == this.data) && (this.info = this.data, this.updateView())
        },
        e.prototype.updateView = function() {
            this.task_title.text = this.info.title;
            var t = ItemManager.parseItem(this.info.rewardinfo)[0];
            this.task_reward_label.text = "活跃度*" + t.num;
            var e = DailyTaskManager.getTaskInfoById(this.info.id),
            i = e ? e.progress: 0,
            n = e ? e.state: 0,
            a = 0 == n ? 16729413 : 16580432;
            this.task_content.textFlow = [{
                text: this.info.describe
            },
            {
                text: "(" + i + "/" + ~~this.info.value + ")",
                style: {
                    textColor: a
                }
            }],
            this.currentState = 0 == n ? "go": 1 == n ? "get": "got",
            this.cacheAsBitmap = !0
        },
        e.prototype.destroy = function() {
            ImageButtonUtil.removeAll(this),
            this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this)
        },
        e
    } (eui.ItemRenderer);
    t.DiamondTaskItem = e,
    __reflect(e.prototype, "diamondTask.DiamondTaskItem");
    var i = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.skinName = DiamondTaskIconSkin,
            e
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            var e = this;
            t.prototype.childrenCreated.call(this),
            this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this),
            ImageButtonUtil.add(this.item_icon,
            function() {
                5 != ~~e.info.id && tipsPop.TipsPop.openItemPop({
                    id: ~~e.info.id
                })
            },
            this)
        },
        e.prototype.dataChanged = function() {
            t.prototype.dataChanged.call(this),
            (this.data || 0 == this.data) && (this.info = this.data, this.updateView())
        },
        e.prototype.updateView = function() {
            this.item_icon.source = ClientConfig.getItemIcon(this.info.id),
            this.item_num.text = this.info.num + "",
            this.cacheAsBitmap = !0
        },
        e.prototype.destroy = function() {
            ImageButtonUtil.removeAll(this),
            this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this)
        },
        e
    } (eui.ItemRenderer);
    t.DiamondTaskIcon = i,
    __reflect(i.prototype, "diamondTask.DiamondTaskIcon")
} (diamondTask || (diamondTask = {}));
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
generateEUI.paths["resource/eui_skins/DiamondTaskActiveItemSkin.exml"] = window.DiamondTaskActiveItemSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["get", "got", "go", "num", "gift"],
        this.height = 73,
        this.width = 250,
        this.elementsContent = [this._Image1_i(), this.get_i(), this.got_i(), this.go_i(), this.num_i(), this.gift_i()],
        this._Image2_i(),
        this.states = [new eui.State("go", [new eui.SetProperty("get", "visible", !1), new eui.SetProperty("got", "visible", !1)]), new eui.State("get", [new eui.AddItems("_Image2", "", 1, ""), new eui.SetProperty("got", "visible", !1), new eui.SetProperty("go", "visible", !1)]), new eui.State("got", [new eui.SetProperty("get", "visible", !1), new eui.SetProperty("go", "visible", !1)])]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "diamond_task_active_active_bg_png",
        t.x = 32,
        t.y = 17,
        t
    },
    i.get_i = function() {
        var t = new eui.Image;
        return this.get = t,
        t.source = "diamond_task_active_active_get_png",
        t.x = 163,
        t.y = 22,
        t
    },
    i.got_i = function() {
        var t = new eui.Image;
        return this.got = t,
        t.source = "diamond_task_active_active_got_png",
        t.x = 183.16,
        t.y = 17,
        t
    },
    i.go_i = function() {
        var t = new eui.Image;
        return this.go = t,
        t.source = "diamond_task_active_active_go_png",
        t.x = 182,
        t.y = 16,
        t
    },
    i.num_i = function() {
        var t = new eui.Label;
        return this.num = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = -9,
        t.size = 18,
        t.text = "40",
        t.textColor = 5224175,
        t.y = 43.47,
        t
    },
    i.gift_i = function() {
        var t = new eui.Image;
        return this.gift = t,
        t.source = "diamond_task_active_close_1_png",
        t.x = 1,
        t.y = 4,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return this._Image2 = t,
        t.scaleX = .3,
        t.scaleY = .3,
        t.source = "diamond_task_reddot_png",
        t.x = 230.68,
        t.y = 19.17,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/DiamondTaskBackItemSkin.exml"] = window.DiamondTaskBackItemSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["back_desc", "back_title", "ima_btn_bg", "icon_btn", "num_btn", "back", "btn", "bgGroup", "_list"],
        this.height = 76,
        this.width = 589,
        this.elementsContent = [this.bgGroup_i(), this._Scroller1_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.bgGroup_i = function() {
        var t = new eui.Group;
        return this.bgGroup = t,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image1_i(), this.back_desc_i(), this.back_title_i(), this.btn_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 151,
        t.scaleX = .5,
        t.scaleY = .5,
        t.source = "diamond_task_back_task_bg_png",
        t.width = 1178,
        t.x = 0,
        t.y = 0,
        t
    },
    i.back_desc_i = function() {
        var t = new eui.Label;
        return this.back_desc = t,
        t.fontFamily = "MFShangHei",
        t.lineSpacing = 3,
        t.size = 18,
        t.text = "40点活跃宝箱",
        t.textColor = 4187130,
        t.touchEnabled = !1,
        t.x = 20,
        t.y = 45,
        t
    },
    i.back_title_i = function() {
        var t = new eui.Label;
        return this.back_title = t,
        t.fontFamily = "REEJI",
        t.lineSpacing = 3,
        t.size = 20,
        t.text = "找回奖励",
        t.textColor = 16777215,
        t.touchEnabled = !1,
        t.x = 21,
        t.y = 15,
        t
    },
    i.btn_i = function() {
        var t = new eui.Group;
        return this.btn = t,
        t.x = 439,
        t.y = 15,
        t.elementsContent = [this.ima_btn_bg_i(), this.icon_btn_i(), this.num_btn_i(), this.back_i()],
        t
    },
    i.ima_btn_bg_i = function() {
        var t = new eui.Image;
        return this.ima_btn_bg = t,
        t.height = 91,
        t.scaleX = .5,
        t.scaleY = .5,
        t.source = "diamond_task_ima_btn_bg_png",
        t.width = 268,
        t.x = 0,
        t.y = 0,
        t
    },
    i.icon_btn_i = function() {
        var t = new eui.Image;
        return this.icon_btn = t,
        t.horizontalCenter = -32,
        t.scaleX = .4,
        t.scaleY = .4,
        t.source = "diamond_task_icon_btn_png",
        t.verticalCenter = .5,
        t
    },
    i.num_btn_i = function() {
        var t = new eui.Label;
        return this.num_btn = t,
        t.fontFamily = "MFShangHei",
        t.lineSpacing = 3,
        t.size = 20,
        t.text = "99999",
        t.textColor = 10181146,
        t.touchEnabled = !1,
        t.x = 57.618,
        t.y = 14,
        t
    },
    i.back_i = function() {
        var t = new eui.Label;
        return this.back = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = .5,
        t.lineSpacing = 3,
        t.size = 20,
        t.text = "已找回",
        t.textColor = 10181146,
        t.touchEnabled = !1,
        t.verticalCenter = 0,
        t.visible = !1,
        t
    },
    i._Scroller1_i = function() {
        var t = new eui.Scroller;
        return t.height = 63,
        t.width = 275.851,
        t.x = 148,
        t.y = 7,
        t.viewport = this._list_i(),
        t
    },
    i._list_i = function() {
        var t = new eui.List;
        return this._list = t,
        t.itemRendererSkinName = DiamondTaskIconSkin,
        t.layout = this._HorizontalLayout1_i(),
        t.dataProvider = this._ArrayCollection1_i(),
        t
    },
    i._HorizontalLayout1_i = function() {
        var t = new eui.HorizontalLayout;
        return t
    },
    i._ArrayCollection1_i = function() {
        var t = new eui.ArrayCollection;
        return t.source = [this._Object1_i(), this._Object2_i(), this._Object3_i(), this._Object4_i()],
        t
    },
    i._Object1_i = function() {
        var t = {};
        return t.a = "",
        t
    },
    i._Object2_i = function() {
        var t = {};
        return t.a = "",
        t
    },
    i._Object3_i = function() {
        var t = {};
        return t.a = "",
        t
    },
    i._Object4_i = function() {
        var t = {};
        return t.a = "",
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/DiamondTaskIconSkin.exml"] = window.DiamondTaskIconSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["item_icon", "item_num"],
        this.height = 63,
        this.width = 63,
        this.elementsContent = [this._Image1_i(), this.item_icon_i(), this.item_num_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 63,
        t.horizontalCenter = 0,
        t.source = "diamond_task_item_bg_png",
        t.verticalCenter = 0,
        t.width = 63,
        t
    },
    i.item_icon_i = function() {
        var t = new eui.Image;
        return this.item_icon = t,
        t.height = 78,
        t.horizontalCenter = 0,
        t.scaleX = .5,
        t.scaleY = .5,
        t.source = "diamond_task_item_icon_png",
        t.verticalCenter = -1,
        t.width = 82,
        t
    },
    i.item_num_i = function() {
        var t = new eui.Label;
        return this.item_num = t,
        t.fontFamily = "MFShangHei",
        t.lineSpacing = 3,
        t.right = 2,
        t.size = 14,
        t.stroke = 1,
        t.strokeColor = 1712696,
        t.text = "99",
        t.textColor = 16776958,
        t.touchEnabled = !1,
        t.y = 46.581,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/DiamondTaskItemSkin.exml"] = window.DiamondTaskItemSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["task_content", "task_title", "task_reward_label", "go", "get", "got"],
        this.height = 76,
        this.width = 586,
        this.elementsContent = [this._Image1_i(), this.task_content_i(), this.task_title_i(), this.task_reward_label_i(), this.go_i(), this.get_i(), this.got_i()],
        this._Image2_i(),
        this.states = [new eui.State("go", [new eui.SetProperty("get", "visible", !1), new eui.SetProperty("got", "visible", !1)]), new eui.State("get", [new eui.AddItems("_Image2", "", 1, ""), new eui.SetProperty("go", "visible", !1), new eui.SetProperty("got", "visible", !1)]), new eui.State("got", [new eui.SetProperty("go", "visible", !1), new eui.SetProperty("get", "visible", !1)])]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 151,
        t.scaleX = .5,
        t.scaleY = .5,
        t.source = "diamond_task_task_bg_png",
        t.width = 1172,
        t.x = 0,
        t.y = 0,
        t
    },
    i.task_content_i = function() {
        var t = new eui.Label;
        return this.task_content = t,
        t.fontFamily = "MFShangHei",
        t.lineSpacing = 3,
        t.size = 18,
        t.text = "玩家当日登录游戏一次(1/1)",
        t.textColor = 12834813,
        t.touchEnabled = !1,
        t.x = 21,
        t.y = 44,
        t
    },
    i.task_title_i = function() {
        var t = new eui.Label;
        return this.task_title = t,
        t.fontFamily = "REEJI",
        t.lineSpacing = 3,
        t.size = 20,
        t.text = "登录",
        t.textColor = 16777215,
        t.touchEnabled = !1,
        t.x = 21,
        t.y = 14,
        t
    },
    i.task_reward_label_i = function() {
        var t = new eui.Label;
        return this.task_reward_label = t,
        t.fontFamily = "MFShangHei",
        t.lineSpacing = 3,
        t.size = 16,
        t.text = "活跃度*10",
        t.textColor = 7461887,
        t.touchEnabled = !1,
        t.x = 342,
        t.y = 30,
        t
    },
    i.go_i = function() {
        var t = new eui.Image;
        return this.go = t,
        t.height = 91,
        t.scaleX = .5,
        t.scaleY = .5,
        t.source = "diamond_task_go_png",
        t.width = 268,
        t.x = 439,
        t.y = 15,
        t
    },
    i.get_i = function() {
        var t = new eui.Image;
        return this.get = t,
        t.height = 91,
        t.scaleX = .5,
        t.scaleY = .5,
        t.source = "diamond_task_get_png",
        t.width = 268,
        t.x = 439,
        t.y = 15,
        t
    },
    i.got_i = function() {
        var t = new eui.Image;
        return this.got = t,
        t.height = 34,
        t.scaleX = .5,
        t.scaleY = .5,
        t.source = "diamond_task_got_png",
        t.width = 115,
        t.x = 477,
        t.y = 30,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return this._Image2 = t,
        t.scaleX = .5,
        t.scaleY = .5,
        t.source = "diamond_task_reddot_png",
        t.touchEnabled = !1,
        t.x = 557.734,
        t.y = 8.112,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/DiamondTaskSkin.exml"] = window.DiamondTaskSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "imgSeerDou", "imgDiamond", "btnAddDiamond", "txtCoin", "txtDiamond", "count", "menuGroup", "petModel", "ani_group", "_list", "_scro", "none", "active_num", "active_pro", "cacheGroup", "_list_active", "_scro_active", "active", "back1", "back2", "tips", "back_times", "group_back"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this.count_i(), this.menuGroup_i(), this._Group1_i(), this.active_i(), this.group_back_i()],
        this.ani_group_i(),
        this.states = [new eui.State("active", [new eui.SetProperty("active", "x", 821), new eui.SetProperty("group_back", "visible", !1)]), new eui.State("back", [new eui.AddItems("ani_group", "", 2, "_Group1"), new eui.SetProperty("active", "visible", !1), new eui.SetProperty("group_back", "x", 807)])]
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
            return t.height = 20,
            t.source = "diamond_task_active_active_pro_bg_png",
            t.width = 469,
            t.x = 2,
            t
        },
        i.thumb_i = function() {
            var t = new eui.Image;
            return this.thumb = t,
            t.height = 20,
            t.source = "diamond_task_active_active_pro_png",
            t.width = 475,
            t.x = 0,
            t.y = 0,
            t
        },
        e
    } (eui.Skin),
    n = e.prototype;
    return n.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.height = 640,
        t.horizontalCenter = 0,
        t.source = "diamond_task_bg_jpg",
        t.verticalCenter = 0,
        t.width = 1136,
        t
    },
    n.count_i = function() {
        var t = new eui.Group;
        return this.count = t,
        t.right = 48,
        t.y = 10,
        t.elementsContent = [this._Image1_i(), this.imgSeerDou_i(), this.imgDiamond_i(), this.btnAddDiamond_i(), this.txtCoin_i(), this.txtDiamond_i()],
        t
    },
    n._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "diamond_task_icon_bg_png",
        t.visible = !0,
        t.width = 268,
        t.x = 0,
        t.y = 12,
        t
    },
    n.imgSeerDou_i = function() {
        var t = new eui.Image;
        return this.imgSeerDou = t,
        t.height = 45,
        t.visible = !0,
        t.width = 45,
        t.x = -16,
        t.y = 0,
        t
    },
    n.imgDiamond_i = function() {
        var t = new eui.Image;
        return this.imgDiamond = t,
        t.height = 30,
        t.visible = !0,
        t.width = 30,
        t.x = 139,
        t.y = 8,
        t
    },
    n.btnAddDiamond_i = function() {
        var t = new eui.Image;
        return this.btnAddDiamond = t,
        t.source = "diamond_task_btnadddiamond_png",
        t.visible = !0,
        t.x = 250,
        t.y = 12,
        t
    },
    n.txtCoin_i = function() {
        var t = new eui.Label;
        return this.txtCoin = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "99999",
        t.textColor = 12834813,
        t.x = 40,
        t.y = 14,
        t
    },
    n.txtDiamond_i = function() {
        var t = new eui.Label;
        return this.txtDiamond = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "99999",
        t.textColor = 12834813,
        t.x = 179,
        t.y = 14,
        t
    },
    n.menuGroup_i = function() {
        var t = new eui.Group;
        return this.menuGroup = t,
        t.y = 48,
        t
    },
    n.ani_group_i = function() {
        var t = new eui.Group;
        return this.ani_group = t,
        t.height = 640,
        t.touchChildren = !1,
        t.touchEnabled = !1,
        t.touchThrough = !0,
        t.verticalCenter = 0,
        t.visible = !0,
        t.width = 760,
        t.x = 568,
        t.elementsContent = [this.petModel_i()],
        t
    },
    n.petModel_i = function() {
        var t = new core.component.pet.PetModel;
        return this.petModel = t,
        t.horizontalCenter = 0,
        t.scaleX = 1,
        t.scaleY = 1,
        t.touchChildren = !1,
        t.touchEnabled = !1,
        t.verticalCenter = 0,
        t
    },
    n._Group1_i = function() {
        var t = new eui.Group;
        return this._Group1 = t,
        t.horizontalCenter = -72,
        t.visible = !0,
        t.y = 64,
        t.elementsContent = [this._Image2_i(), this._scro_i(), this.none_i()],
        t
    },
    n._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 1073,
        t.scale9Grid = new egret.Rectangle(2, 2, 46, 46),
        t.scaleX = .5,
        t.scaleY = .5,
        t.source = "diamond_task_center_bg_png",
        t.width = 1248,
        t.x = 0,
        t.y = 0,
        t
    },
    n._scro_i = function() {
        var t = new eui.Scroller;
        return this._scro = t,
        t.height = 505.882,
        t.width = 589,
        t.x = 20,
        t.y = 18,
        t.viewport = this._list_i(),
        t
    },
    n._list_i = function() {
        var t = new eui.List;
        return this._list = t,
        t.layout = this._VerticalLayout1_i(),
        t
    },
    n._VerticalLayout1_i = function() {
        var t = new eui.VerticalLayout;
        return t
    },
    n.none_i = function() {
        var t = new eui.Image;
        return this.none = t,
        t.height = 247,
        t.scaleX = .5,
        t.scaleY = .5,
        t.source = "diamond_task_none_png",
        t.touchEnabled = !1,
        t.visible = !1,
        t.width = 444,
        t.x = 201,
        t.y = 212,
        t
    },
    n.active_i = function() {
        var t = new eui.Group;
        return this.active = t,
        t.visible = !0,
        t.x = 821,
        t.y = 59,
        t.elementsContent = [this.cacheGroup_i(), this._scro_active_i()],
        t
    },
    n.cacheGroup_i = function() {
        var t = new eui.Group;
        return this.cacheGroup = t,
        t.height = 514,
        t.width = 315,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image3_i(), this.active_num_i(), this.active_pro_i()],
        t
    },
    n._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "diamond_task_active_active_title_png",
        t.x = 0,
        t.y = 0,
        t
    },
    n.active_num_i = function() {
        var t = new eui.Label;
        return this.active_num = t,
        t.fontFamily = "MFShangHei",
        t.size = 20,
        t.text = "0",
        t.textColor = 5752317,
        t.x = 136,
        t.y = 10,
        t
    },
    n.active_pro_i = function() {
        var t = new eui.ProgressBar;
        return this.active_pro = t,
        t.maximum = 5,
        t.rotation = 90,
        t.value = 5,
        t.x = 25,
        t.y = 80,
        t.skinName = i,
        t
    },
    n._scro_active_i = function() {
        var t = new eui.Scroller;
        return this._scro_active = t,
        t.height = 528,
        t.width = 251,
        t.x = 38,
        t.y = 46.34,
        t.viewport = this._list_active_i(),
        t
    },
    n._list_active_i = function() {
        var t = new eui.List;
        return this._list_active = t,
        t.height = 510.884,
        t.itemRendererSkinName = DiamondTaskActiveItemSkin,
        t.layout = this._VerticalLayout2_i(),
        t
    },
    n._VerticalLayout2_i = function() {
        var t = new eui.VerticalLayout;
        return t.gap = 18,
        t
    },
    n.group_back_i = function() {
        var t = new eui.Group;
        return this.group_back = t,
        t.height = 490,
        t.touchThrough = !0,
        t.visible = !0,
        t.width = 329,
        t.x = 807,
        t.y = 79,
        t.elementsContent = [this.back1_i(), this.back2_i(), this.tips_i(), this.back_times_i()],
        t
    },
    n.back1_i = function() {
        var t = new eui.Image;
        return this.back1 = t,
        t.scaleX = .5,
        t.scaleY = .5,
        t.source = "diamond_task_back_1_png",
        t.x = 5.034,
        t.y = 3.234,
        t
    },
    n.back2_i = function() {
        var t = new eui.Image;
        return this.back2 = t,
        t.scaleX = .5,
        t.scaleY = .5,
        t.source = "diamond_task_back_2_png",
        t.x = 12.181000000000001,
        t.y = 426.006,
        t
    },
    n.tips_i = function() {
        var t = new eui.Image;
        return this.tips = t,
        t.height = 53,
        t.scaleX = .5,
        t.scaleY = .5,
        t.source = "diamond_task_tips_png",
        t.visible = !0,
        t.width = 48,
        t.x = 279,
        t.y = 22,
        t
    },
    n.back_times_i = function() {
        var t = new eui.Label;
        return this.back_times = t,
        t.fontFamily = "REEJI",
        t.lineSpacing = 3,
        t.size = 20,
        t.text = "150/150",
        t.textAlign = "center",
        t.textColor = 4187130,
        t.touchEnabled = !1,
        t.visible = !0,
        t.width = 100,
        t.x = 124,
        t.y = 458.085,
        t
    },
    e
} (eui.Skin);