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
peakjihadlimitpanel; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t.cron1 = [new CronTimeVo("*", "11-14", "3-30", "11", "*", "*"), new CronTimeVo("*", "18-21", "3-30", "11", "*", "*")],
            t.skinName = PeakjihadLimitPanelSkin,
            t
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            var i = this;
            e.prototype.childrenCreated.call(this),
            this.initBtnClose("peakjihad_limit_panel_title1_png", this),
            this.initBtnHelpById(146),
            this.adaptBgByScale(this.bg),
            this._list.itemRenderer = t.PeakJihadLimitPoolItem,
            this.icon0.source = ItemXMLInfo.getIconURL(PeakJihad2016Controller.MONEYID),
            this.icon1.source = ItemXMLInfo.getIconURL(PeakJihad2016Controller.MONEYID2),
            ImageButtonUtil.add(this.icon0,
            function() {
                var t = {};
                t.id = PeakJihad2016Controller.MONEYID,
                tipsPop.TipsPop.openItemPop(t)
            },
            this),
            ImageButtonUtil.add(this.icon1,
            function() {
                var t = {};
                t.id = PeakJihad2016Controller.MONEYID2,
                tipsPop.TipsPop.openItemPop(t)
            },
            this),
            ImageButtonUtil.add(this.daily,
            function() {
                PopViewManager.getInstance().openView(new t.PeakjihadLimitReward, null)
            },
            this),
            ImageButtonUtil.add(this.btnPool,
            function() {
                PopViewManager.getInstance().openView(new t.PeakJihadLimitPool, null)
            },
            this),
            ImageButtonUtil.add(this.suit,
            function() {
                ModuleManager.showModuleByID(27)
            },
            this),
            ImageButtonUtil.add(this.bag,
            function() {
                ModuleManager.showModuleByID(10)
            },
            this),
            ImageButtonUtil.add(this.btnMatch,
            function() {
                PetManager.updateBagInfo(function() {
                    i.startMatch()
                })
            },
            this),
            EventManager.addEventListener(GameEvent.NOTIFY_ITEM_CHANGE, this.updateItemNums, this),
            this._list.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.touchPet, this),
            this.preview = new ClothPreview,
            this.preview.show(MainManager.actorInfo.clothes),
            this.petShow.addChild(this.preview),
            this.updateItemNums(),
            this.updateView()
        },
        i.prototype.reShow = function() {
            this.preview.show(MainManager.actorInfo.clothes),
            this.updateView()
        },
        i.prototype.updateView = function() {
            this.myName.text = MainManager.actorInfo.nick,
            this.myTitle.text = AchieveXMLInfo.getOriginalTitle(MainManager.actorInfo.curTitle);
            var t = PetManager.getBagMap(),
            e = [0, 0, 0, 0, 0, 0].map(function(e, i) {
                return t[i] ? e[i] = t[i].id: 0
            });
            t = PetManager.getSecondBagMap();
            var i = [0, 0, 0, 0, 0, 0].map(function(e, i) {
                return t[i] ? e[i] = t[i].id: 0
            }),
            n = e.concat(i),
            a = config.Pvp_ban.getItems(),
            o = a[0].name.split(";").map(Number),
            r = a[1].name.split(";").map(Number),
            s = [];
            n.map(function(t) {
                var e = 0;
                return o.indexOf(t) > -1 ? e = a[0].quantity: r.indexOf(t) > -1 && (e = a[1].quantity),
                s.push({
                    id: t,
                    quality: e
                })
            }),
            this._list.dataProvider = new eui.ArrayCollection(s)
        },
        i.prototype.startMatch = function() {
            var t = this;
            if (this.isInAcTime()) {
                var e = PeakJihadController.getBagALLPetLvIsFullAndNotSameLimit();
                if (!e) {
                    var i = this.checkMost(),
                    n = "" == i ? "请在出战背包放入至少六只精灵，并保证背包所有精灵不重复且为满级满状态再开始对战！": i;
                    return void Alert.show(n,
                    function() {
                        ModuleManager.showModuleByID(config.ModuleConst.PET_BAG)
                    })
                }
                SocketConnection.sendByQueue(45137, [1, 8],
                function(e) {
                    ModuleManager.showModuleByID(43, {
                        callback: function() {},
                        thisObj: t,
                        fightMod: 8
                    })
                })
            }
        },
        i.prototype.touchPet = function() {
            ModuleManager.showModuleByID(10)
        },
        i.prototype.updateItemNums = function() {
            this.num0.text = String(ItemManager.getNumByID(PeakJihad2016Controller.MONEYID)) + "/" + ItemXMLInfo.getMaxNum(PeakJihad2016Controller.MONEYID),
            this.num1.text = String(ItemManager.getNumByID(PeakJihad2016Controller.MONEYID2)) + "/" + ItemXMLInfo.getMaxNum(PeakJihad2016Controller.MONEYID2)
        },
        i.prototype.isInAcTime = function(t) {
            return void 0 === t && (t = !0),
            null == this.ac1 && (this.ac1 = new ActivityControl(this.cron1)),
            this.ac1.isInActivityTime ? !0 : (t && Alarm.show("6v6巅峰限制赛的开放时间为11月03日-11月30日每日11:00~15:00和18:00~22:00，请稍候再来。"), !1)
        },
        i.prototype.checkMost = function() {
            for (var t = [], e = 0, i = PetManager.allInfos; e < i.length; e++) {
                var n = i[e];
                t.push(n.id)
            }
            t.sort();
            for (var a = config.Pvp_ban.getItems(), o = 0, r = 0, s = function(e) {
                if (o > 0) return "break";
                var i = a.filter(function(t) {
                    return t.type == e
                })[0];
                r = i.quantity;
                for (var n = 0,
                s = i.name.split(";").map(Number), h = 0; h < s.length; h++) {
                    var u = s[h];
                    if (t.indexOf(u) > -1 && n++, n > r && 0 == o) {
                        o = i.type;
                        break
                    }
                }
            },
            h = 1; 2 >= h; h++) {
                var u = s(h);
                if ("break" === u) break
            }
            return 0 == o ? "": "出战背包内的限制级、准限制级精灵不符合要求"
        },
        i.prototype.destroy = function() {
            e.prototype.destroy.call(this),
            this._list.removeEventListener(eui.ItemTapEvent.ITEM_TAP, this.touchPet, this)
        },
        i
    } (BaseModule);
    t.Peakjihadlimitpanel = e,
    __reflect(e.prototype, "peakjihadlimitpanel.Peakjihadlimitpanel")
} (peakjihadlimitpanel || (peakjihadlimitpanel = {}));
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
peakjihadlimitpanel; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t.groupName = "PeakJihadLimitPool_groupName",
            t.skinName = PeakjihadLimitPoolSkin,
            t
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this._list.itemRenderer = t.PeakJihadLimitPoolItem,
            ImageButtonUtil.add(this.closeBtn, this.hide, this);
            var i = new MenuData;
            i["default"] = 1,
            i.groupName = this.groupName,
            i.root = [1, 2],
            i.adapter = !1,
            i.data = {
                1 : {
                    title: "限制池"
                },
                2 : {
                    title: "准限制池"
                }
            },
            this.menu = Menu.createMenu(i, this.menuGroup, 0, !0, 506, 172),
            EventManager.addEventListener(BaseMenuEvent.BASE_MENU_SELECT_CHANGE_ + this.groupName, this.updateView, this)
        },
        i.prototype.updateView = function() {
            for (var t = ~~this.menu.selectedValue,
            e = config.Pvp_ban.getItems().filter(function(e) {
                return e.type == t
            }), i = e[0].name.split(";").map(Number), n = [], a = 0; a < i.length; a++) n.push({
                id: i[a],
                quality: e[0].quantity
            });
            this._list.dataProvider = new eui.ArrayCollection(n)
        },
        i.prototype.destroy = function() {
            e.prototype.destroy.call(this),
            this.menu && this.menu.destroy()
        },
        i
    } (PopView);
    t.PeakJihadLimitPool = e,
    __reflect(e.prototype, "peakjihadlimitpanel.PeakJihadLimitPool")
} (peakjihadlimitpanel || (peakjihadlimitpanel = {}));
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
peakjihadlimitpanel; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.skinName = PeakJihadLimitPoolItemSkin,
            e
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            var e = this;
            t.prototype.childrenCreated.call(this),
            ImageButtonUtil.add(this.head,
            function() {
                PopViewManager.getInstance().hideAll(),
                PetManager.showPetManualInfo(e.petId, 1)
            },
            this)
        },
        e.prototype.dataChanged = function() {
            t.prototype.dataChanged.call(this),
            this.data && (this.info = this.data, this.update())
        },
        e.prototype.update = function() {
            this.petId = this.info.id;
            var t = this.info.quality;
            if (this.num.text = t + "", this.num.visible = this.numBG.visible = t > 0, this.txt_id.text = this.petId + "", this.txt_id.visible = window.DEBUG, this.txtName.visible = this.head.visible = this.imgAttr.visible = this.rec.visible = this.attrBg.visible = this.petId > 0, this.petId > 0) {
                var e = PetXMLInfo.getName(this.petId);
                this.txtName.text = e.length > 6 ? e.substring(0, 5) + "...": e,
                this.head.source = ClientConfig.getPetHeadPath(this.petId),
                this.imgAttr.source = ClientConfig.getpettypeticon(PetXMLInfo.getType(this.petId)),
                this.rec.visible = !PetManager.hasPet(this.petId)
            }
            this.cacheAsBitmap = !0
        },
        e
    } (BaseItemRenderer);
    t.PeakJihadLimitPoolItem = e,
    __reflect(e.prototype, "peakjihadlimitpanel.PeakJihadLimitPoolItem")
} (peakjihadlimitpanel || (peakjihadlimitpanel = {}));
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
peakjihadlimitpanel; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.data = [{
                desc: "巅峰限制赛胜利1次",
                progress: 1,
                all: 1,
                id: 1717451,
                num: 150,
                state: 1
            },
            {
                desc: "参与3次巅峰限制赛",
                progress: 1,
                all: 3,
                id: 1723855,
                num: 5e4,
                state: 1
            },
            {
                desc: "参与5次巅峰限制赛",
                progress: 1,
                all: 5,
                id: 1723855,
                num: 1e5,
                state: 1
            }],
            e.skinName = PeakjihadLimitRewardSkin,
            e
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            var e = this;
            t.prototype.childrenCreated.call(this),
            this._list.itemRenderer = i,
            ImageButtonUtil.add(this.closeBtn, this.hide, this),
            KTool.getMultiValue([203143, 203144],
            function(t) {
                for (var i = t[0], n = t[1], a = 0; a < e.data.length; a++) {
                    var o = e.data[a],
                    r = KTool.getBit(i, a + 1),
                    s = 0 == a ? 255 & n: n >> 8 & 255;
                    o.progress = Math.min(s, o.all),
                    o.state = 1 == r ? 2 : s >= o.all ? 1 : 0
                }
                e._list.dataProvider = new eui.ArrayCollection(e.data)
            })
        },
        e
    } (PopView);
    t.PeakjihadLimitReward = e,
    __reflect(e.prototype, "peakjihadlimitpanel.PeakjihadLimitReward");
    var i = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.info = null,
            e.skinName = PeakjihadLimitRewardItemSkin,
            e
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            var e = this;
            t.prototype.childrenCreated.call(this),
            ImageButtonUtil.add(this.get,
            function() {
                SocketConnection.sendByQueue(41900, [69, e.itemIndex + 1],
                function() {
                    e.info.state = 2,
                    e.update()
                })
            },
            this),
            ImageButtonUtil.add(this.icon,
            function() {
                var t = {};
                t.id = e.info.id,
                tipsPop.TipsPop.openItemPop(t)
            },
            this)
        },
        e.prototype.dataChanged = function() {
            t.prototype.dataChanged.call(this),
            this.data && (this.info = this.data, this.update())
        },
        e.prototype.update = function() {
            this.desc.text = this.info.desc,
            this.progress.text = "(" + this.info.progress + "/" + this.info.all + ")",
            this.num.text = "" + this.info.num,
            this.icon.source = ClientConfig.getItemIcon(this.info.id),
            this.currentState = 0 == this.info.state ? "go": 1 == this.info.state ? "get": "got"
        },
        e
    } (BaseItemRenderer);
    t.PeakjihadLimitRewardItem = i,
    __reflect(i.prototype, "peakjihadlimitpanel.PeakjihadLimitRewardItem")
} (peakjihadlimitpanel || (peakjihadlimitpanel = {}));
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
generateEUI.paths["resource/eui_skins/PeakjihadLimitPanelSkin.exml"] = window.PeakjihadLimitPanelSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "icon0", "num0", "icon1", "num1", "petShow", "myName", "myTitle", "daily", "btnPool", "suit", "bag", "btnMatch", "_list"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this._Group3_i(), this._Group4_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.horizontalCenter = 0,
        t.source = "peakjihad_limit_panel_bg_jpg",
        t.verticalCenter = 0,
        t
    },
    i._Group3_i = function() {
        var t = new eui.Group;
        return t.cacheAsBitmap = !0,
        t.right = 60,
        t.top = 0,
        t.visible = !0,
        t.elementsContent = [this._Group1_i(), this._Group2_i()],
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.right = 168,
        t.y = 12,
        t.elementsContent = [this._Image1_i(), this.icon0_i(), this.num0_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 21,
        t.source = "peakjihad_limit_item_num_bg_png",
        t.width = 133,
        t.x = 0,
        t.y = 3.171,
        t
    },
    i.icon0_i = function() {
        var t = new eui.Image;
        return this.icon0 = t,
        t.height = 55,
        t.left = -1,
        t.scaleX = .7,
        t.scaleY = .7,
        t.width = 55,
        t.y = -6,
        t
    },
    i.num0_i = function() {
        var t = new eui.Label;
        return this.num0 = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = 15.5,
        t.size = 16,
        t.textColor = 13887988,
        t.y = 5,
        t
    },
    i._Group2_i = function() {
        var t = new eui.Group;
        return t.right = 7,
        t.y = 12,
        t.elementsContent = [this._Image2_i(), this.icon1_i(), this.num1_i()],
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "peakjihad_limit_item_num_bg_png",
        t.x = 0,
        t.y = 2.108,
        t
    },
    i.icon1_i = function() {
        var t = new eui.Image;
        return this.icon1 = t,
        t.height = 55,
        t.left = -1,
        t.scaleX = .7,
        t.scaleY = .7,
        t.width = 55,
        t.y = -6,
        t
    },
    i.num1_i = function() {
        var t = new eui.Label;
        return this.num1 = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = 15.5,
        t.size = 16,
        t.textColor = 13887988,
        t.y = 5,
        t
    },
    i._Group4_i = function() {
        var t = new eui.Group;
        return t.height = 549,
        t.horizontalCenter = 0,
        t.width = 1046,
        t.y = 51,
        t.elementsContent = [this._Image3_i(), this.petShow_i(), this._Image4_i(), this.myName_i(), this.myTitle_i(), this._Image5_i(), this._Label1_i(), this._Image6_i(), this._Image7_i(), this._Label2_i(), this.daily_i(), this.btnPool_i(), this.suit_i(), this.bag_i(), this.btnMatch_i(), this._Scroller1_i()],
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "peakjihad_limit_panel_di_png",
        t.x = 149,
        t.y = 220,
        t
    },
    i.petShow_i = function() {
        var t = new eui.Group;
        return this.petShow = t,
        t.bottom = 119,
        t.width = 153,
        t.x = 304.16,
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.source = "peakjihad_limit_panel_namebg_png",
        t.x = 164,
        t.y = 445,
        t
    },
    i.myName_i = function() {
        var t = new eui.Label;
        return this.myName = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = -221,
        t.size = 20,
        t.text = "玩家名字玩家",
        t.textColor = 16514896,
        t.y = 478,
        t
    },
    i.myTitle_i = function() {
        var t = new eui.Label;
        return this.myTitle = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = -221,
        t.size = 20,
        t.text = "称号称号",
        t.textColor = 5308252,
        t.y = 452,
        t
    },
    i._Image5_i = function() {
        var t = new eui.Image;
        return t.source = "peakjihad_limit_panel_timebg_png",
        t.x = 120,
        t.y = 17,
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 20,
        t.text = "11月03日 - 11月30日",
        t.textColor = 16514896,
        t.x = 205,
        t.y = 63.002,
        t
    },
    i._Image6_i = function() {
        var t = new eui.Image;
        return t.height = 549,
        t.scale9Grid = new egret.Rectangle(4, 4, 4, 4),
        t.source = "peakjihad_limit_panel_rightbg_png",
        t.width = 508,
        t.x = 538,
        t.y = 0,
        t
    },
    i._Image7_i = function() {
        var t = new eui.Image;
        return t.height = 30,
        t.source = "peakjihad_limit_panel_titlebg_png",
        t.width = 508,
        t.x = 538,
        t.y = 0,
        t
    },
    i._Label2_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "REEJI",
        t.size = 20,
        t.text = "我的阵容",
        t.textColor = 4187130,
        t.x = 563,
        t.y = 5,
        t
    },
    i.daily_i = function() {
        var t = new eui.Image;
        return this.daily = t,
        t.source = "peakjihad_limit_panel_daily_png",
        t.x = 0,
        t.y = 31,
        t
    },
    i.btnPool_i = function() {
        var t = new eui.Image;
        return this.btnPool = t,
        t.source = "peakjihad_limit_panel_btnpool_png",
        t.x = 9,
        t.y = 279,
        t
    },
    i.suit_i = function() {
        var t = new eui.Image;
        return this.suit = t,
        t.source = "peakjihad_limit_panel_suit_png",
        t.x = 0,
        t.y = 371,
        t
    },
    i.bag_i = function() {
        var t = new eui.Image;
        return this.bag = t,
        t.source = "peakjihad_limit_panel_bag_png",
        t.x = 0,
        t.y = 464,
        t
    },
    i.btnMatch_i = function() {
        var t = new eui.Image;
        return this.btnMatch = t,
        t.source = "peakjihad_limit_panel_btnmatch_png",
        t.x = 725,
        t.y = 488,
        t
    },
    i._Scroller1_i = function() {
        var t = new eui.Scroller;
        return t.cacheAsBitmap = !0,
        t.height = 440,
        t.width = 480,
        t.x = 553,
        t.y = 46,
        t.viewport = this._list_i(),
        t
    },
    i._list_i = function() {
        var t = new eui.List;
        return this._list = t,
        t.layout = this._TileLayout1_i(),
        t
    },
    i._TileLayout1_i = function() {
        var t = new eui.TileLayout;
        return t.horizontalGap = 10,
        t.paddingLeft = 4,
        t.paddingTop = 2,
        t.requestedColumnCount = 4,
        t.verticalGap = 10,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/PeakJihadLimitPoolItemSkin.exml"] = window.PeakJihadLimitPoolItemSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["txtName", "head", "txt_id", "attrBg", "imgAttr", "numBG", "num", "rec"],
        this.height = 136,
        this.width = 111,
        this.elementsContent = [this._Group1_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Group1_i = function() {
        var t = new eui.Group;
        return t.cacheAsBitmap = !0,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image1_i(), this.txtName_i(), this.head_i(), this.txt_id_i(), this.attrBg_i(), this.imgAttr_i(), this.numBG_i(), this.num_i(), this.rec_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "peakjihad_limit_pool_itembg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.txtName_i = function() {
        var t = new eui.Label;
        return this.txtName = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = .5,
        t.size = 16,
        t.text = "精灵名字最多",
        t.textColor = 9025023,
        t.y = 110,
        t
    },
    i.head_i = function() {
        var t = new eui.Image;
        return this.head = t,
        t.height = 100,
        t.horizontalCenter = -.5,
        t.verticalCenter = -13,
        t.width = 100,
        t
    },
    i.txt_id_i = function() {
        var t = new eui.Label;
        return this.txt_id = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.stroke = 1,
        t.strokeColor = 1320013,
        t.text = "9527",
        t.textColor = 16777215,
        t.touchEnabled = !1,
        t.x = 5.443,
        t.y = 4.962,
        t
    },
    i.attrBg_i = function() {
        var t = new eui.Image;
        return this.attrBg = t,
        t.source = "peakjihad_limit_pool_imgattrbg_png",
        t.touchEnabled = !1,
        t.x = 68,
        t.y = 5,
        t
    },
    i.imgAttr_i = function() {
        var t = new eui.Image;
        return this.imgAttr = t,
        t.height = 23,
        t.horizontalCenter = 36.5,
        t.source = "peakjihad_limit_pool_imgattr_png",
        t.touchEnabled = !1,
        t.verticalCenter = -51.5,
        t.width = 23,
        t
    },
    i.numBG_i = function() {
        var t = new eui.Image;
        return this.numBG = t,
        t.source = "peakjihad_limit_pool_numbg_png",
        t.touchEnabled = !1,
        t.x = 0,
        t.y = 77,
        t
    },
    i.num_i = function() {
        var t = new eui.Label;
        return this.num = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = -40.5,
        t.size = 20,
        t.text = "3",
        t.textColor = 16776257,
        t.touchEnabled = !1,
        t.y = 83,
        t
    },
    i.rec_i = function() {
        var t = new eui.Image;
        return this.rec = t,
        t.source = "peakjihad_limit_pool_rec_png",
        t.touchEnabled = !1,
        t.visible = !1,
        t.x = 2,
        t.y = 2,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/PeakjihadLimitPoolSkin.exml"] = window.PeakjihadLimitPoolSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["_list", "closeBtn", "menuGroup"],
        this.height = 550,
        this.width = 1005,
        this.elementsContent = [this._Group1_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Group1_i = function() {
        var t = new eui.Group;
        return t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image1_i(), this._Image2_i(), this._Scroller1_i(), this._Image3_i(), this.closeBtn_i(), this.menuGroup_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 547,
        t.scale9Grid = new egret.Rectangle(2, 1, 8, 8),
        t.source = "peakjihad_limit_panel_poolbg_png",
        t.width = 998,
        t.x = 6,
        t.y = 3,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "peakjihad_limit_panel_pooltitlebg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i._Scroller1_i = function() {
        var t = new eui.Scroller;
        return t.height = 486,
        t.width = 814,
        t.x = 180,
        t.y = 52,
        t.viewport = this._list_i(),
        t
    },
    i._list_i = function() {
        var t = new eui.List;
        return this._list = t,
        t.itemRendererSkinName = PeakJihadLimitPoolItemSkin,
        t.layout = this._TileLayout1_i(),
        t
    },
    i._TileLayout1_i = function() {
        var t = new eui.TileLayout;
        return t.horizontalGap = 6,
        t.requestedColumnCount = 7,
        t.verticalGap = 10,
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "peakjihad_limit_panel_pooltitle_png",
        t.x = 42,
        t.y = 5,
        t
    },
    i.closeBtn_i = function() {
        var t = new eui.Image;
        return this.closeBtn = t,
        t.source = "peakjihad_limit_panel_close_png",
        t.x = 963,
        t.y = 3,
        t
    },
    i.menuGroup_i = function() {
        var t = new eui.Group;
        return this.menuGroup = t,
        t.height = 0,
        t.width = 0,
        t.x = 6,
        t.y = 38,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/PeakjihadLimitRewardItemSkin.exml"] = window.PeakjihadLimitRewardItemSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["desc", "progress", "num", "icon", "get", "got", "go"],
        this.height = 100,
        this.width = 694,
        this.elementsContent = [this._Group2_i()],
        this.states = [new eui.State("go", [new eui.SetProperty("get", "visible", !1), new eui.SetProperty("got", "visible", !1)]), new eui.State("get", [new eui.SetProperty("got", "visible", !1), new eui.SetProperty("go", "visible", !1)]), new eui.State("got", [new eui.SetProperty("get", "visible", !1), new eui.SetProperty("go", "visible", !1)])]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Group2_i = function() {
        var t = new eui.Group;
        return t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image1_i(), this.desc_i(), this.progress_i(), this._Group1_i(), this.get_i(), this.got_i(), this.go_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "peakjihad_limit_panel_rewardbg_png",
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t
    },
    i.desc_i = function() {
        var t = new eui.Label;
        return this.desc = t,
        t.fontFamily = "MFShangHei",
        t.size = 22,
        t.text = "巅峰限制赛胜利3次",
        t.textColor = 12834813,
        t.x = 43,
        t.y = 39,
        t
    },
    i.progress_i = function() {
        var t = new eui.Label;
        return this.progress = t,
        t.fontFamily = "MFShangHei",
        t.size = 22,
        t.text = "（2/3）",
        t.textColor = 16514895,
        t.x = 255,
        t.y = 39,
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.x = 412,
        t.y = 14,
        t.elementsContent = [this._Image2_i(), this.num_i(), this.icon_i()],
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "peakjihad_limit_panel_itembg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.num_i = function() {
        var t = new eui.Label;
        return this.num = t,
        t.fontFamily = "MFShangHei",
        t.right = 5,
        t.size = 16,
        t.stroke = 1,
        t.strokeColor = 1712696,
        t.text = "1",
        t.textColor = 16776958,
        t.y = 54,
        t
    },
    i.icon_i = function() {
        var t = new eui.Image;
        return this.icon = t,
        t.height = 40,
        t.horizontalCenter = 0,
        t.source = "peakjihad_limit_panel_icon_png",
        t.verticalCenter = 0,
        t.width = 40,
        t
    },
    i.get_i = function() {
        var t = new eui.Image;
        return this.get = t,
        t.source = "peakjihad_limit_panel_get_png",
        t.x = 527,
        t.y = 28,
        t
    },
    i.got_i = function() {
        var t = new eui.Image;
        return this.got = t,
        t.source = "peakjihad_limit_panel_got_png",
        t.x = 531,
        t.y = 32,
        t
    },
    i.go_i = function() {
        var t = new eui.Image;
        return this.go = t,
        t.source = "peakjihad_limit_panel_go_png",
        t.x = 560,
        t.y = 38,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/PeakjihadLimitRewardSkin.exml"] = window.PeakjihadLimitRewardSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["closeBtn", "_list"],
        this.height = 431,
        this.width = 753,
        this.elementsContent = [this._Group1_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Group1_i = function() {
        var t = new eui.Group;
        return t.height = 434,
        t.width = 759,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image1_i(), this._Image2_i(), this._Image3_i(), this.closeBtn_i(), this._list_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 431,
        t.scale9Grid = new egret.Rectangle(2, 1, 8, 8),
        t.source = "peakjihad_limit_panel_poolbg_png",
        t.width = 750.259,
        t.x = 6,
        t.y = 3,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 46,
        t.scale9Grid = new egret.Rectangle(522, 0, 125, 46),
        t.source = "peakjihad_limit_panel_pooltitlebg_png",
        t.width = 756.077,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "peakjihad_limit_panel_rewardTitle_png",
        t.x = 35,
        t.y = 7,
        t
    },
    i.closeBtn_i = function() {
        var t = new eui.Image;
        return this.closeBtn = t,
        t.source = "peakjihad_limit_panel_close_png",
        t.x = 717.438,
        t.y = 3,
        t
    },
    i._list_i = function() {
        var t = new eui.List;
        return this._list = t,
        t.height = 351,
        t.width = 694,
        t.x = 29,
        t.y = 64,
        t.layout = this._VerticalLayout1_i(),
        t
    },
    i._VerticalLayout1_i = function() {
        var t = new eui.VerticalLayout;
        return t.gap = 20,
        t
    },
    e
} (eui.Skin);