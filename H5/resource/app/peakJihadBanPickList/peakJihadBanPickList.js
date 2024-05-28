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
peakJihadBanPickList; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.skinName = PeakjihadbanpickitemSkin,
            e
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this),
            this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this),
            this.voteBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touched, this)
        },
        e.prototype.touched = function(t) {
            EventManager.dispatchEvent(new egret.Event("event_banPickVote", !1, !1, this.itemIndex))
        },
        Object.defineProperty(e.prototype, "selected", {
            set: function(t) {
                egret.superSetter(e, this, "selected", t)
            },
            enumerable: !0,
            configurable: !0
        }),
        e.prototype.dataChanged = function() {
            if (this.data) {
                this.petIcon.source = ClientConfig.getPetHeadPath(this.data.petid),
                this.num.text = this.data.score,
                this.rank.text = (this.itemIndex + 1).toString(),
                this.pName.text = PetXMLInfo.getName(this.data.petid);
                var t = PeakJihad2016Controller.settlementTime - 1209600,
                e = PeakJihad2016Controller.settlementTime;
                if (SystemTimerManager.time > t && SystemTimerManager.time < e) DisplayUtil.setEnabled(this.voteBtn, !this.data.vote),
                this.have_flag.visible = !1,
                this.not_flag.visible = !1,
                this.voteBtn.visible = !0;
                else {
                    this.voteBtn.visible = !1;
                    var i = PetManager.getPetsById(this.data.petid, !0);
                    this.have_flag.visible = i && i.length > 0,
                    this.not_flag.visible = !this.have_flag.visible
                }
                this.icon0.visible = 0 == this.itemIndex,
                this.icon1.visible = 1 == this.itemIndex,
                this.icon2.visible = 2 == this.itemIndex,
                this.rank.visible = this.itemIndex > 2
            }
        },
        e.prototype.destroy = function() {
            DisplayUtil.setEnabled(this.voteBtn, !0),
            this.voteBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.touched, this),
            this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this),
            this.petIcon.source = null
        },
        e
    } (eui.ItemRenderer);
    t.PeakJihadBanPickItem = e,
    __reflect(e.prototype, "peakJihadBanPickList.PeakJihadBanPickItem")
} (peakJihadBanPickList || (peakJihadBanPickList = {}));
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
        function s(t) {
            try {
                h(n.next(t))
            } catch(e) {
                a(e)
            }
        }
        function o(t) {
            try {
                h(n["throw"](t))
            } catch(e) {
                a(e)
            }
        }
        function h(t) {
            t.done ? r(t.value) : new i(function(e) {
                e(t.value)
            }).then(s, o)
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
            if (r = 1, a && (s = a[2 & i[0] ? "return": i[0] ? "throw": "next"]) && !(s = s.call(a, i[1])).done) return s;
            switch (a = 0, s && (i = [0, s.value]), i[0]) {
            case 0:
            case 1:
                s = i;
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
                if (s = h.trys, !(s = s.length > 0 && s[s.length - 1]) && (6 === i[0] || 2 === i[0])) {
                    h = 0;
                    continue
                }
                if (3 === i[0] && (!s || i[1] > s[0] && i[1] < s[3])) {
                    h.label = i[1];
                    break
                }
                if (6 === i[0] && h.label < s[1]) {
                    h.label = s[1],
                    s = i;
                    break
                }
                if (s && h.label < s[2]) {
                    h.label = s[2],
                    h.ops.push(i);
                    break
                }
                s[2] && h.ops.pop(),
                h.trys.pop();
                continue
            }
            i = e.call(t, h)
        } catch(n) {
            i = [6, n],
            a = 0
        } finally {
            r = s = 0
        }
        if (5 & i[0]) throw i[1];
        return {
            value: i[0] ? i[1] : void 0,
            done: !0
        }
    }
    var r, a, s, o, h = {
        label: 0,
        sent: function() {
            if (1 & s[0]) throw s[1];
            return s[1]
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
peakJihadBanPickList; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t.RANK_CODE_1 = 94,
            t.RANK_CODE_2 = 93,
            t.type = 0,
            t.lastindex = 0,
            StatLogger.log("1023版本系统功能", "巅峰圣战", "进入排行榜界面"),
            t.skinName = PeakjihadbanpicklistSkin,
            t
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.adaptLeftContent(this.grp_petSHow),
            this.adaptRightContent(this.group_rank),
            this.scroller_item.viewport = this.list_viewport,
            this.list_viewport.itemRenderer = t.PeakJihadBanPickItem,
            this.pet = new PetStaticModel,
            this.pet.setSize(450, 340),
            this.pet.setPetMaxScale(1.5),
            this.pet.x = this.petpos.x,
            this.pet.y = this.petpos.y,
            this.petpos.parent.addChild(this.pet),
            this._ary = new eui.ArrayCollection,
            this.list_viewport.dataProvider = this._ary;
            var i = [{
                selected: !0,
                selRes: "peakJihadBanPickList_banDown_png",
                unselRes: "peakJihadBanPickList_banUp_png"
            },
            {
                selected: !1,
                selRes: "peakJihadBanPickList_pickDown_png",
                unselRes: "peakJihadBanPickList_pickUp_png"
            }];
            this.tabBarArrayCollection = new eui.ArrayCollection(i),
            this.tabBar.dataProvider = this.tabBarArrayCollection,
            this.setPetInfo(null),
            this.tabBar.itemRenderer = t.TabCell,
            this.addEvent(),
            this.update()
        },
        i.prototype.destroy = function() {
            this.pet && this.pet.destroy(),
            this._ary = null,
            this.removeEvent(),
            e.prototype.destroy.call(this)
        },
        i.prototype.addEvent = function() {
            ImageButtonUtil.add(this.backBtn, this.onTouchTapImageButton, this),
            EventManager.addEventListener("event_banPickVote", this.voteHandle, this),
            this.tabBar.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.onBarItemTap, this)
        },
        i.prototype.removeEvent = function() {
            this.tabBar.removeEventListener(eui.ItemTapEvent.ITEM_TAP, this.onBarItemTap, this),
            EventManager.removeEventListener("event_banPickVote", this.voteHandle, this),
            ImageButtonUtil.removeAll(this)
        },
        i.prototype.onBarItemTap = function(t) {
            if (this.lastindex != t.itemIndex) {
                var e = this.tabBarArrayCollection.getItemAt(this.lastindex);
                e.selected ? e.selected = !1 : e.selected = !0,
                this.tabBarArrayCollection.replaceItemAt(e, this.lastindex),
                this.lastindex = t.itemIndex;
                var i = this.tabBarArrayCollection.getItemAt(t.itemIndex);
                i.selected ? i.selected = !1 : i.selected = !0,
                this.tabBarArrayCollection.replaceItemAt(i, t.itemIndex),
                this.type = t.itemIndex,
                this.updatelist()
            }
        },
        i.prototype.onTouchTapImageButton = function(t) {
            switch (t.target) {
            case this.backBtn:
                e.prototype.onClose.call(this)
            }
        },
        i.prototype.setItems = function(t) {
            this._ary.replaceAll(t)
        },
        i.prototype.update = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                return __generator(this,
                function(t) {
                    switch (t.label) {
                    case 0:
                        return [4, this.getvoteState()];
                    case 1:
                        return t.sent(),
                        [4, this.getNowSubType()];
                    case 2:
                        return t.sent(),
                        this.updatelist(),
                        [2]
                    }
                })
            })
        },
        i.prototype.updatelist = function() {
            0 == this.type ? (this.txt4.visible = !0, this.txt5.visible = !1, this.updateBanRankList()) : (this.txt4.visible = !1, this.txt5.visible = !0, this.updatePickRankList())
        },
        i.prototype.getvoteState = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var t = this;
                return __generator(this,
                function(e) {
                    return [2, new Promise(function(e, i) {
                        KTool.getMultiValue([20260, PeakJihad2016Controller.curMonthStarLvId, PeakJihad2016Controller.curJJMonthStarLvId],
                        function(i) {
                            t._curStarLv = i[1],
                            t._curJJStarLv = i[2],
                            SocketConnection.sendByQueue(45138, [2],
                            function(n) {
                                var r = n.data;
                                t._subType2 = r.readUnsignedInt(),
                                t._isVote = i[0] == t._subType2 ? !0 : !1,
                                e()
                            })
                        })
                    })]
                })
            })
        },
        i.prototype.getNowSubType = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var t = this;
                return __generator(this,
                function(e) {
                    return [2, new Promise(function(e, i) {
                        SocketConnection.sendByQueue(45138, [4],
                        function(i) {
                            var n = i.data;
                            t._subType = n.readUnsignedInt(),
                            e()
                        })
                    })]
                })
            })
        },
        i.prototype.voteHandle = function(t) {
            var e = this,
            i = this._ary.getItemAt(t.data);
            Alert.show("每人只有一次投票机会，确定投票？",
            function() {
                e._curStarLv >= 3 || e._curJJStarLv >= 3 ? SocketConnection.sendByQueue(42376, [1, i.petid],
                function(t) {
                    Alarm.show("投票成功！"),
                    e._isVote = !0;
                    for (var i = e._ary.source,
                    n = 0,
                    r = i; n < r.length; n++) {
                        var a = r[n];
                        a.vote = !0
                    }
                    e._ary.replaceAll(i)
                }) : Alarm.show("精灵学者以上段位才能参与投票！")
            })
        },
        i.prototype.updateBanRankList = function() {
            var t = this;
            SocketConnection.sendByQueue(CommandID.GET_DAILY_RANK_INFO, [this.RANK_CODE_1, this._subType, 0, 9],
            function(e) {
                var i = e.data;
                i.position = 0;
                for (var n, r, a, s, o = [], h = i.readUnsignedInt(), c = 0; h > c; c++) n = i.readUnsignedInt(),
                r = i.readUnsignedInt(),
                a = i.readUTFBytes(16),
                s = {
                    petid: n,
                    score: r,
                    nick: a,
                    vote: t._isVote
                },
                o.push(s);
                o.length && t.setPetInfo(o[0]),
                t.setItems(o),
                t.txtDesc.text = "本榜单记录上次月度联赛中被禁止次数最多的精灵前十名",
                t.checkIShow(o)
            })
        },
        i.prototype.updatePickRankList = function() {
            var t = this;
            SocketConnection.sendByQueue(CommandID.GET_DAILY_RANK_INFO, [this.RANK_CODE_2, this._subType, 0, 9],
            function(e) {
                var i = e.data;
                i.position = 0;
                for (var n, r, a, s, o = [], h = i.readUnsignedInt(), c = 0; h > c; c++) n = i.readUnsignedInt(),
                r = i.readUnsignedInt(),
                a = i.readUTFBytes(16),
                s = {
                    petid: n,
                    score: r,
                    nick: a,
                    vote: t._isVote
                },
                o.push(s);
                o.length && t.setPetInfo(o[0]),
                t.setItems(o),
                t.txtDesc.text = "本榜单记录上次月度联赛中被使用次数最多的精灵前十名",
                t.checkIShow(o)
            })
        },
        i.prototype.checkIShow = function(t) {
            this.grp_petSHow.visible = this.group_rank.visible = t.length > 0,
            this.img_nullFlag.visible = 0 === t.length
        },
        i.prototype.setPetInfo = function(t) {
            t ? (this.pet.visible = !0, this.pet.setPetStyleById(t.petid), this.pName.text = PetXMLInfo.getName(t.petid)) : (this.pet.visible = !1, this.pName.text = "")
        },
        i
    } (BaseModule);
    t.PeakJihadBanPickList = e,
    __reflect(e.prototype, "peakJihadBanPickList.PeakJihadBanPickList")
} (peakJihadBanPickList || (peakJihadBanPickList = {}));
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
peakJihadBanPickList; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.skinName = TabCellSkin,
            e
        }
        return __extends(e, t),
        e.prototype.createChildren = function() {
            t.prototype.createChildren.call(this),
            this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this)
        },
        e.prototype.dataChanged = function() {
            this.loadData()
        },
        e.prototype.loadData = function() {
            var t = this.data,
            e = t.selected;
            e ? this.img_res.source = t.selRes: this.img_res.source = t.unselRes
        },
        e.prototype.destroy = function() {
            this.img_res.source = null,
            this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this)
        },
        e
    } (eui.ItemRenderer);
    t.TabCell = e,
    __reflect(e.prototype, "peakJihadBanPickList.TabCell")
} (peakJihadBanPickList || (peakJihadBanPickList = {}));
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
generateEUI.paths["resource/eui_skins/PeakjihadbanpickitemSkin.exml"] = window.PeakjihadbanpickitemSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "rank", "bg1", "petIcon", "pName", "num", "voteBtn", "icon0", "icon2", "icon1", "have_flag", "not_flag"],
        this.height = 70,
        this.width = 659,
        this.elementsContent = [this.bg_i(), this.rank_i(), this.bg1_i(), this.petIcon_i(), this.pName_i(), this.num_i(), this.voteBtn_i(), this.icon0_i(), this.icon2_i(), this.icon1_i(), this.have_flag_i(), this.not_flag_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.source = "peakJihadBanPickList_item_bg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.rank_i = function() {
        var t = new eui.Label;
        return this.rank = t,
        t.fontFamily = "黑体",
        t.size = 20,
        t.text = "1000",
        t.textAlign = "center",
        t.textColor = 16777215,
        t.width = 40,
        t.x = 30,
        t.y = 28,
        t
    },
    i.bg1_i = function() {
        var t = new eui.Image;
        return this.bg1 = t,
        t.height = 50,
        t.scale9Grid = new egret.Rectangle(12, 12, 76, 76),
        t.source = "common_avatar_bg_size_100_100_png",
        t.width = 50,
        t.x = 114,
        t.y = 10,
        t
    },
    i.petIcon_i = function() {
        var t = new eui.Image;
        return this.petIcon = t,
        t.height = 48,
        t.source = "",
        t.width = 48,
        t.x = 115,
        t.y = 11,
        t
    },
    i.pName_i = function() {
        var t = new eui.Label;
        return this.pName = t,
        t.fontFamily = "黑体",
        t.height = 20,
        t.size = 20,
        t.text = "精",
        t.textAlign = "center",
        t.textColor = 16777215,
        t.width = 180,
        t.x = 173,
        t.y = 24,
        t
    },
    i.num_i = function() {
        var t = new eui.Label;
        return this.num = t,
        t.fontFamily = "黑体",
        t.height = 20,
        t.size = 20,
        t.text = "1",
        t.textAlign = "center",
        t.textColor = 16777215,
        t.width = 60,
        t.x = 416,
        t.y = 26,
        t
    },
    i.voteBtn_i = function() {
        var t = new eui.Image;
        return this.voteBtn = t,
        t.source = "peakJihadBanPickItem_voteBtn_png",
        t.x = 526,
        t.y = 15,
        t
    },
    i.icon0_i = function() {
        var t = new eui.Image;
        return this.icon0 = t,
        t.source = "peakJihadBanPickItem_icon0_png",
        t.x = 22,
        t.y = 11,
        t
    },
    i.icon2_i = function() {
        var t = new eui.Image;
        return this.icon2 = t,
        t.source = "peakJihadBanPickItem_icon2_png",
        t.x = 22,
        t.y = 11,
        t
    },
    i.icon1_i = function() {
        var t = new eui.Image;
        return this.icon1 = t,
        t.source = "peakJihadBanPickItem_icon1_png",
        t.x = 22,
        t.y = 11,
        t
    },
    i.have_flag_i = function() {
        var t = new eui.Image;
        return this.have_flag = t,
        t.height = 32,
        t.source = "peakJihadBanPickList_have_flag_png",
        t.width = 114,
        t.x = 528,
        t.y = 19,
        t
    },
    i.not_flag_i = function() {
        var t = new eui.Image;
        return this.not_flag = t,
        t.height = 32,
        t.source = "peakJihadBanPickList_not_flag_png",
        t.width = 114,
        t.x = 528,
        t.y = 19,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/PeakjihadbanpicklistSkin.exml"] = window.PeakjihadbanpicklistSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "bg2", "txt1", "backBtn", "petpos", "PName_bg", "pName", "grp_petSHow", "tabBar", "img_nullFlag", "bg3", "txt2", "txt3", "txt5", "txt4", "list_viewport", "scroller_item", "txtDesc", "group_rank"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this._Group1_i(), this.grp_petSHow_i(), this.tabBar_i(), this.img_nullFlag_i(), this.group_rank_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.horizontalCenter = 0,
        t.percentHeight = 100,
        t.percentWidth = 100,
        t.source = "common_ui_bg_1_png",
        t.y = 0,
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.left = 0,
        t.right = 0,
        t.y = 0,
        t.elementsContent = [this.bg2_i(), this.txt1_i(), this.backBtn_i()],
        t
    },
    i.bg2_i = function() {
        var t = new eui.Image;
        return this.bg2 = t,
        t.left = 0,
        t.percentWidth = 100,
        t.right = 0,
        t.source = "common_top_bg_style1_png",
        t.y = 0,
        t
    },
    i.txt1_i = function() {
        var t = new eui.Image;
        return this.txt1 = t,
        t.source = "peakJihadBanPickList_txt1_png",
        t.x = 114,
        t.y = 7,
        t
    },
    i.backBtn_i = function() {
        var t = new eui.Image;
        return this.backBtn = t,
        t.source = "common_close_2_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.grp_petSHow_i = function() {
        var t = new eui.Group;
        return this.grp_petSHow = t,
        t.height = 330,
        t.horizontalCenter = -322.5,
        t.width = 521,
        t.y = 286,
        t.elementsContent = [this._Image1_i(), this.petpos_i(), this.PName_bg_i(), this.pName_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "common_hero_base_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.petpos_i = function() {
        var t = new eui.Group;
        return this.petpos = t,
        t.x = 261,
        t.y = 240,
        t
    },
    i.PName_bg_i = function() {
        var t = new eui.Image;
        return this.PName_bg = t,
        t.source = "peakJihadBanPickList_PName_bg_png",
        t.x = 92,
        t.y = 274,
        t
    },
    i.pName_i = function() {
        var t = new eui.Label;
        return this.pName = t,
        t.size = 20,
        t.text = "精灵名字最多留九字",
        t.textAlign = "center",
        t.textColor = 16777215,
        t.width = 180,
        t.x = 160,
        t.y = 289,
        t
    },
    i.tabBar_i = function() {
        var t = new eui.TabBar;
        return this.tabBar = t,
        t.anchorOffsetX = 0,
        t.height = 200,
        t.right = 82,
        t.top = 57,
        t.width = 500,
        t
    },
    i.img_nullFlag_i = function() {
        var t = new eui.Image;
        return this.img_nullFlag = t,
        t.horizontalCenter = .5,
        t.source = "peakJihadBanPickList_img_null_data_png",
        t.verticalCenter = -29.5,
        t
    },
    i.group_rank_i = function() {
        var t = new eui.Group;
        return this.group_rank = t,
        t.right = 4,
        t.y = 113,
        t.elementsContent = [this._Group2_i(), this.scroller_item_i(), this.txtDesc_i()],
        t
    },
    i._Group2_i = function() {
        var t = new eui.Group;
        return t.x = 0,
        t.y = 0,
        t.elementsContent = [this.bg3_i(), this.txt2_i(), this.txt3_i(), this.txt5_i(), this.txt4_i()],
        t
    },
    i.bg3_i = function() {
        var t = new eui.Image;
        return this.bg3 = t,
        t.source = "peakJihadBanPickList_bg3_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.txt2_i = function() {
        var t = new eui.Label;
        return this.txt2 = t,
        t.fontFamily = "黑体",
        t.size = 20,
        t.text = "排名",
        t.textColor = 4431337,
        t.x = 31,
        t.y = 6,
        t
    },
    i.txt3_i = function() {
        var t = new eui.Label;
        return this.txt3 = t,
        t.fontFamily = "黑体",
        t.size = 20,
        t.text = "精灵",
        t.textColor = 4431337,
        t.x = 244,
        t.y = 6,
        t
    },
    i.txt5_i = function() {
        var t = new eui.Label;
        return this.txt5 = t,
        t.fontFamily = "黑体",
        t.size = 20,
        t.text = "使用次数",
        t.textColor = 4431337,
        t.x = 407,
        t.y = 6,
        t
    },
    i.txt4_i = function() {
        var t = new eui.Label;
        return this.txt4 = t,
        t.fontFamily = "黑体",
        t.size = 20,
        t.text = "被禁次数",
        t.textColor = 4431337,
        t.x = 407,
        t.y = 6,
        t
    },
    i.scroller_item_i = function() {
        var t = new eui.Scroller;
        return this.scroller_item = t,
        t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.height = 439,
        t.scrollPolicyH = "off",
        t.width = 680,
        t.x = 0,
        t.y = 38,
        t.viewport = this._Group3_i(),
        t
    },
    i._Group3_i = function() {
        var t = new eui.Group;
        return t.width = 680,
        t.elementsContent = [this.list_viewport_i()],
        t
    },
    i.list_viewport_i = function() {
        var t = new eui.List;
        return this.list_viewport = t,
        t.height = 200,
        t.width = 200,
        t.x = 0,
        t.y = 0,
        t.layout = this._TileLayout1_i(),
        t
    },
    i._TileLayout1_i = function() {
        var t = new eui.TileLayout;
        return t.horizontalGap = 10,
        t.orientation = "rows",
        t.requestedColumnCount = 1,
        t.verticalGap = 8,
        t
    },
    i.txtDesc_i = function() {
        var t = new eui.Label;
        return this.txtDesc = t,
        t.size = 18,
        t.text = "本榜单记录上次月度联赛中被禁止次数最多的精灵前十名",
        t.textColor = 10941951,
        t.x = 96,
        t.y = 494,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/TabCellSkin.exml"] = window.TabCellSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["img_res"],
        this.height = 50,
        this.width = 220,
        this.elementsContent = [this.img_res_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.img_res_i = function() {
        var t = new eui.Image;
        return this.img_res = t,
        t.y = 0,
        t
    },
    e
} (eui.Skin);