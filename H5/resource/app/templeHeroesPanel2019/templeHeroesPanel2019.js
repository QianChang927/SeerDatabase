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
templeHeroesPanel2019; !
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.info = null,
            t.skinName = TempleHeroesItem2019Skin,
            t
        }
        return __extends(t, e),
        t.prototype.dataChanged = function() {
            e.prototype.dataChanged.call(this),
            this.data && (this.info = this.data, this.updateView())
        },
        t.prototype.updateView = function() {
            var e = this;
            switch (ImageButtonUtil.remove(this.icon), this.info.type) {
            case 1:
                this.icon.source = "temple_heroes_panel_icon_type1_2019_png",
                ImageButtonUtil.add(this.icon,
                function() {
                    var e = config.TempleHeroesMain.getItems().filter(function(e) {
                        return e.type == TempleHeroManager.curSelectYear
                    })[0];
                    ModuleManager.showModule("petEffDescPanel", ["pet_eff_desc_panel"], e.monsterId, "", AppDoStyle.NULL)
                },
                this);
                break;
            case 2:
                this.icon.source = "temple_heroes_panel_icon_type2_2019_png",
                ImageButtonUtil.add(this.icon,
                function() {
                    var t = {};
                    t.id = ~~e.info.id,
                    tipsPop.TipsPop.openSkillPop(t)
                },
                this);
                break;
            case 3:
                this.icon.width = this.icon.height = 60,
                this.icon.source = ClientConfig.getMarkPath(~~this.info.id),
                ImageButtonUtil.add(this.icon,
                function() {
                    var t = ~~e.info.id,
                    i = {
                        ins: t
                    };
                    tipsPop.TipsPop.openCounterMarkPop(i)
                },
                this)
            }
            this.cacheAsBitmap = !0
        },
        t.prototype.destroy = function() {
            e.prototype.destroy.call(this)
        },
        t
    } (BaseItemRenderer);
    e.TempleHeroesItem = t,
    __reflect(t.prototype, "templeHeroesPanel2019.TempleHeroesItem")
} (templeHeroesPanel2019 || (templeHeroesPanel2019 = {}));
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
templeHeroesPanel2019; !
function(e) {
    var t = function(t) {
        function n() {
            var e = t.call(this) || this;
            return e.infos = [],
            e.tabValues = [],
            e.skinName = TempleHeroesPanel2019Skin,
            e
        }
        return __extends(n, t),
        n.prototype.childrenCreated = function() {
            var i = this;
            t.prototype.childrenCreated.call(this),
            t.prototype.initBtnClose.call(this, "temple_heroes_panel_btnback_2019_png", this),
            this.initBtnHelp(function() {
                StatLogger.log("20221216版本系统功能", "圣殿英雄团搬迁", "打开【混元天尊】Tips面板"),
                tipsPop.TipsPop.openHelpPopById(110)
            },
            this),
            this.adaptBgByScale(this.bg),
            this.ani = SpineUtil.createAnimate("12heroes_particle"),
            this.aniGroup.addChild(this.ani),
            this.ani.play("ani_particle", 0),
            this.imgBuyIcon.source = ClientConfig.getItemIcon(5),
            this._list1.itemRenderer = e.TempleHeroesTab1Item,
            this._list5.itemRenderer = e.TempleHeroesTab5Item,
            this._listItem.itemRenderer = e.TempleHeroesItem,
            this.addTabs(),
            ImageButtonUtil.add(this.btnDraw, this.onDraw, this),
            ImageButtonUtil.add(this.btnBuy, this.onBuy, this),
            ImageButtonUtil.add(this.btnAdd, this.onAdd, this),
            ImageButtonUtil.add(this.btnInfo, this.onInfo, this),
            EventManager.addEventListener(RobotEvent.DIAMOND_CHANGED,
            function(e) {
                i.num.text = core.gameUtil.ConvertItemNumView(e.data)
            },
            this),
            EventManager.addEventListener(TempleHeroManager.TEMPLE_HERO_UPDATE_VIEW_PANEL, this.updateView, this),
            this.icon.source = ClientConfig.getItemIcon(5),
            ImageButtonUtil.add(this.icon,
            function() {
                tipsPop.TipsPop.openItemPop({
                    id: 5
                })
            },
            this),
            TempleHeroManager.updateAllData()
        },
        n.prototype.updateView = function() {
            var e = this;
            this.num.text = core.gameUtil.ConvertItemNumView(UserInfoManager.diamond);
            var t = config.TempleHeroesMain.getItems().filter(function(e) {
                return e.type == TempleHeroManager.curSelectYear
            })[0],
            n = t.price.indexOf("_") < 0 ? ~~t.price: 0;
            n ? this.txtPrice.text = n + " 购买": SocketConnection.sendByQueue(45786, [1, 3],
            function(t) {
                var i = t.data,
                n = i.readUnsignedInt();
                e.txtPrice.text = n + " 购买"
            });
            var r = t.monAppend.split("_"),
            o = Array.apply(null, new Array(r.length));
            o.map(function(e, t) {
                var n = new i;
                n.type = t + 1,
                n.id = r[t],
                o[t] = n
            }),
            this._listItem.dataProvider = new eui.ArrayCollection(o),
            this.itemNumGroup.cacheAsBitmap = !0,
            TempleHeroManager.checkHaveCurrentPet() && (this.txtPrice.text = " 已获得"),
            this.imgBuyIcon.visible = !TempleHeroManager.checkHaveCurrentPet(),
            DisplayUtil.setEnabled(this.btnBuy, !TempleHeroManager.checkHaveCurrentPet()),
            this.btnBuy.cacheAsBitmap = !0,
            this.tabGroup4.cacheAsBitmap = !0,
            this.changeTab()
        },
        n.prototype.addTabs = function() {
            var e = this;
            this.tabValues = [],
            this.infos = config.TempleHeroes.getItems().filter(function(t) {
                return t.type == TempleHeroManager.curSelectYear && e.tabValues.push(t.tab)
            });
            for (var t = 0; t < this.tabValues.length; t++) {
                var i = this.tabValues[t],
                n = new eui.RadioButton;
                n.value = i;
                var r = '<?xml version="1.0" encoding="utf-8" ?>\n                <e:Skin states="up,down,disabled" xmlns:e="http://ns.egret.com/eui" >\n                <e:Image width="100%" height="100%" \n                source="tab' + i + '_up_2019_png"\n                source.down="tab' + i + '_down_2019_png"/>\n                </e:Skin>';
                n.skinName = r,
                this.tabsGroup.addChild(n)
            }
            if (this.tabsGroup.numChildren > 0) {
                var o = this.tabsGroup.getChildAt(0);
                this.radioGroup = o.group,
                this.radioGroup.selectedValue = o.value,
                this.radioGroup.addEventListener(egret.Event.CHANGE, this.changeTab, this)
            }
        },
        n.prototype.changeTab = function() {
            var t = ~~this.radioGroup.selectedValue || this.tabValues[0];
            this.currentState = "" + t;
            var n = this.infos.filter(function(e) {
                return e.tab == t
            })[0],
            r = [],
            o = [],
            a = [];
            switch (t) {
            case 1:
                r = n.realId.split("_"),
                o = n.price.split("_").map(Number),
                a = Array.apply(null, new Array(r.length)),
                a.map(function(e, t) {
                    var n = new i;
                    n.id = r[t],
                    n.price = o[t],
                    a[t] = n
                }),
                this._list1.dataProvider = new eui.ArrayCollection(a);
                break;
            case 2:
                r = n.realId.split("_"),
                o = n.price.split("_").map(Number),
                a = Array.apply(null, new Array(r.length)),
                a.map(function(e, t) {
                    var n = new i;
                    n.id = r[t],
                    n.price = o[t],
                    a[t] = n
                }),
                this._list2.itemRenderer = e.TempleHeroesTab2Item,
                this._list2.dataProvider = new eui.ArrayCollection(a);
                break;
            case 3:
                for (var s = n.realId.split("_"), u = n.price.split("_"), l = [], p = 0; p < s.length; p++) {
                    var _ = s[p].split("&"),
                    h = ~~_.splice(0, 1),
                    c = ~~u[p],
                    m = _.join("&");
                    l.push({
                        id: h,
                        price: c,
                        append: m
                    })
                }
                this._list2.itemRenderer = e.TempleHeroesTab3Item,
                this._list2.dataProvider = new eui.ArrayCollection(l);
                break;
            case 4:
                break;
            case 5:
                var g = n.front.split("_");
                o = n.price.split("_"),
                r = n.realId.split("_"),
                a = Array.apply(null, new Array(r.length)),
                a.map(function(e, t) {
                    var n = new i;
                    n.id = g[t] + "_" + r[t],
                    n.price = o[t],
                    n.type = t + 1,
                    a[t] = n
                }),
                this._list5.dataProvider = new eui.ArrayCollection(a)
            }
        },
        n.prototype.onBuy = function() {
            TempleHeroManager.buyYearPet()
        },
        n.prototype.onAdd = function() {
            PayManager.rechargeDiamond()
        },
        n.prototype.onInfo = function() {
            TempleHeroManager.showPetInfo()
        },
        n.prototype.onDraw = function() {
            ModuleManager.showModuleByID(176)
        },
        n.prototype.destroy = function() {
            t.prototype.destroy.call(this),
            DisplayUtil.removeForParent(this.ani),
            this.ani = null,
            this.radioGroup.removeEventListener(egret.Event.CHANGE, this.changeTab, this),
            this.radioGroup = null,
            this.tabsGroup.removeChildren()
        },
        n
    } (BaseModule);
    e.TempleHeroesPanel2019 = t,
    __reflect(t.prototype, "templeHeroesPanel2019.TempleHeroesPanel2019");
    var i = function() {
        function e() {}
        return e
    } ();
    e.itemPrice = i,
    __reflect(i.prototype, "templeHeroesPanel2019.itemPrice")
} (templeHeroesPanel2019 || (templeHeroesPanel2019 = {}));
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
templeHeroesPanel2019; !
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.info = null,
            t.skinName = TempleHeroesTab1Item2019Skin,
            ImageButtonUtil.add(t.groupBuy,
            function() {
                TempleHeroManager.buyTitleOrMark(t.info.id)
            },
            t),
            ImageButtonUtil.add(t.icon,
            function() {
                if (t.info.id.indexOf("&") < 0) {
                    var e = {
                        ins: ~~t.info.id
                    };
                    tipsPop.TipsPop.openCounterMarkPop(e)
                } else {
                    var i = t.info.id.split("&").map(Number),
                    n = AchieveXMLInfo.getRule(i[0], i[1]),
                    r = {};
                    r.SpeNameBonus = n.SpeNameBonus,
                    tipsPop.TipsPop.openTitlePop(r)
                }
            },
            t),
            t.payIcon.source = ClientConfig.getItemIcon(5),
            t
        }
        return __extends(t, e),
        t.prototype.dataChanged = function() {
            e.prototype.dataChanged.call(this),
            this.data && (this.info = this.data, this.updateView())
        },
        t.prototype.updateView = function() {
            if (this.info.id.indexOf("&") < 0) {
                this.itemName.text = CountermarkXMLInfo.getDes(~~this.info.id),
                this.icon.source = ClientConfig.getMarkPath(~~this.info.id),
                this.currentState = "1";
                var e = TempleHeroManager.myMarkList.indexOf(~~this.info.id) < 0;
                this.num.text = e ? this.info.price + " 购买": "已购买",
                this.payIcon.visible = e,
                DisplayUtil.setEnabled(this.groupBuy, e)
            } else {
                var t = this.info.id.split("&").map(Number),
                i = AchieveXMLInfo.getRule(t[0], t[1]);
                this.itemName.text = i.title,
                this.icon.source = ClientConfig.getAchievePointIcon(i.AchievementPoint),
                this.currentState = "2";
                var e = TempleHeroManager.myTitleList.indexOf(i.SpeNameBonus) < 0;
                this.num.text = e ? this.info.price + " 购买": "已购买",
                this.payIcon.visible = e,
                DisplayUtil.setEnabled(this.groupBuy, e)
            }
            this.cacheAsBitmap = !0
        },
        t.prototype.destroy = function() {
            e.prototype.destroy.call(this)
        },
        t
    } (BaseItemRenderer);
    e.TempleHeroesTab1Item = t,
    __reflect(t.prototype, "templeHeroesPanel2019.TempleHeroesTab1Item")
} (templeHeroesPanel2019 || (templeHeroesPanel2019 = {}));
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
templeHeroesPanel2019; !
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.info = null,
            t.skinName = TempleHeroesTab2Item2019Skin,
            ImageButtonUtil.add(t.btnBuy,
            function() {
                TempleHeroManager.goBuySkinPanel(~~t.info.id, ~~t.info.price)
            },
            t),
            t
        }
        return __extends(t, e),
        t.prototype.dataChanged = function() {
            e.prototype.dataChanged.call(this),
            this.data && (this.info = this.data, this.updateView())
        },
        t.prototype.updateView = function() {
            var e = PetSkinXMLInfo.getSkinInfo(~~this.info.id);
            this.iconType.source = "common_pet_skin_icon_" + e.type + "_png",
            this.icon.source = ClientConfig.getPetHalfIcon(14e5 + e.id),
            this.txtSkinName.text = e.name;
            var t = PetSkinController.instance.haveSkin(~~this.info.id);
            this.txt_buy.text = t ? "已购买": "购买",
            DisplayUtil.setEnabled(this.btnBuy, !t),
            this.cacheAsBitmap = !0
        },
        t.prototype.destroy = function() {
            e.prototype.destroy.call(this)
        },
        t
    } (BaseItemRenderer);
    e.TempleHeroesTab2Item = t,
    __reflect(t.prototype, "templeHeroesPanel2019.TempleHeroesTab2Item")
} (templeHeroesPanel2019 || (templeHeroesPanel2019 = {}));
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
templeHeroesPanel2019; !
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.info = null,
            t.skinName = TempleHeroesTab3Item2019Skin,
            ImageButtonUtil.add(t.btnBuy,
            function() {
                ModuleManager.showModuleByID(177, {
                    id: ~~t.info.id,
                    price: ~~t.info.price,
                    append: t.info.append
                })
            },
            t),
            ImageButtonUtil.add(t.btnFind,
            function() {
                ModuleManager.showModule("petManualInfo", ["pet_info_manual"], {
                    data: ~~t.info.id,
                    type: "pet"
                })
            },
            t),
            t
        }
        return __extends(t, e),
        t.prototype.dataChanged = function() {
            e.prototype.dataChanged.call(this),
            this.data && (this.info = this.data, this.updateView())
        },
        t.prototype.updateView = function() {
            var e = this;
            this.icon.source = ClientConfig.getPetHalfIcon(~~this.info.id),
            this.txtSkinName.text = StringUtil.parseStrLimitLen(PetXMLInfo.getName(~~this.info.id), 8),
            KTool.getMultiValue([TempleHeroManager.getPetForever()],
            function(t) {
                var i = KTool.getBit(t[0], 1) > 0;
                e.txt_buy.text = i ? "已购买": "购买",
                DisplayUtil.setEnabled(e.btnBuy, !i)
            }),
            this.cacheAsBitmap = !0
        },
        t.prototype.destroy = function() {
            e.prototype.destroy.call(this)
        },
        t
    } (BaseItemRenderer);
    e.TempleHeroesTab3Item = t,
    __reflect(t.prototype, "templeHeroesPanel2019.TempleHeroesTab3Item")
} (templeHeroesPanel2019 || (templeHeroesPanel2019 = {}));
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
templeHeroesPanel2019; !
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.speNameBonus = [],
            t.info = null,
            t.skinName = TempleHeroesTab5Item2019Skin,
            ImageButtonUtil.add(t.btnUp,
            function() {
                var e = 1;
                switch (t.info.type) {
                case 1:
                    e = 2;
                    break;
                case 2:
                    e = 1;
                    break;
                case 3:
                    e = 3
                }
                SocketConnection.sendByQueue(6, [e], t.updateView)
            },
            t),
            ImageButtonUtil.add(t.btnContrast,
            function() {
                console.log("对比")
            },
            t),
            t
        }
        return __extends(t, e),
        t.prototype.dataChanged = function() {
            e.prototype.dataChanged.call(this),
            this.data && (this.info = this.data, this.updateView())
        },
        t.prototype.updateView = function() {
            var e = this,
            t = ["特性", "刻印", "称号"];
            this.title.text = "专属" + t[this.info.type - 1] + "升级",
            this.btnContrast.visible = 1 == this.info.type,
            this.icon.source = ClientConfig.getItemIcon(5),
            this.num.text = "" + this.info.price;
            var i = this.info.id.split("_");
            this.speNameBonus = [];
            for (var n = 0; n < i.length; n++) {
                var r = i[n];
                this.setData(r, n)
            }
            1 == this.info.type ? KTool.getBitSet([11407],
            function(t) {
                DisplayUtil.setEnabled(e.btnUp, 1 != t[0])
            }) : 2 == this.info.type ? KTool.getBitSet([11406],
            function(t) {
                DisplayUtil.setEnabled(e.btnUp, 1 != t[0])
            }) : DisplayUtil.setEnabled(this.btnUp, TempleHeroManager.myTitleList.indexOf(this.speNameBonus[0]) > -1 && TempleHeroManager.myTitleList.indexOf(this.speNameBonus[1]) < 0),
            this.cacheAsBitmap = !0
        },
        t.prototype.setData = function(e, t) {
            switch (ImageButtonUtil.remove(this["icon" + t]), this.info.type) {
            case 1:
                this["icon" + t].source = "temple_heroes_panel_icon_type1_2019_png",
                ImageButtonUtil.add(this["icon" + t],
                function() {
                    var e = config.TempleHeroesMain.getItems().filter(function(e) {
                        return e.type == TempleHeroManager.curSelectYear
                    })[0],
                    i = EffectIconControl.getAllEffctByPetId(e.monsterId);
                    ModuleManager.showModule("petEffDescPanel", ["pet_eff_desc_panel"], [i[t]], "", AppDoStyle.NULL)
                },
                this);
                break;
            case 2:
                this["icon" + t].width = this["icon" + t].height = 60,
                this["icon" + t].source = ClientConfig.getMarkPath(~~e),
                ImageButtonUtil.add(this["icon" + t],
                function() {
                    var t = {
                        ins: ~~e
                    };
                    tipsPop.TipsPop.openCounterMarkPop(t)
                },
                this);
                break;
            case 3:
                var i = e.split("&").map(Number),
                n = AchieveXMLInfo.getRule(i[0], i[1]);
                this.speNameBonus.push(n.SpeNameBonus),
                this["icon" + t].source = ClientConfig.getAchievePointIcon(n.AchievementPoint),
                ImageButtonUtil.add(this["icon" + t],
                function() {
                    var e = {};
                    e.SpeNameBonus = n.SpeNameBonus,
                    tipsPop.TipsPop.openTitlePop(e)
                },
                this)
            }
        },
        t.prototype.destroy = function() {
            e.prototype.destroy.call(this)
        },
        t
    } (BaseItemRenderer);
    e.TempleHeroesTab5Item = t,
    __reflect(t.prototype, "templeHeroesPanel2019.TempleHeroesTab5Item")
} (templeHeroesPanel2019 || (templeHeroesPanel2019 = {}));
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
generateEUI.paths["resource/eui_skins/TempleHeroesItemSkin.exml"] = window.TempleHeroesItem2019Skin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["icon"],
        this.height = 75,
        this.width = 75,
        this.elementsContent = [this._Image1_i(), this.icon_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Image1_i = function() {
        var e = new eui.Image;
        return e.height = 75,
        e.horizontalCenter = 0,
        e.scale9Grid = new egret.Rectangle(6, 7, 7, 6),
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "temple_heroes_panel_itembg_2019_png",
        e.verticalCenter = 0,
        e.width = 75,
        e
    },
    i.icon_i = function() {
        var e = new eui.Image;
        return this.icon = e,
        e.horizontalCenter = -.5,
        e.scaleX = 1,
        e.scaleY = 1,
        e.verticalCenter = -.5,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/TempleHeroesPanelSkin.exml"] = window.TempleHeroesPanel2019Skin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["bg", "_listItem", "tabsGroup", "_list1", "scroller1", "_list2", "scroller2", "btnDraw", "tabGroup4", "_list5", "tabGroup5", "aniGroup", "txtPrice", "imgBuyIcon", "btnBuy", "btnInfo", "icon", "num", "btnAdd", "itemNumGroup"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this._Group1_i(), this.itemNumGroup_i()],
        this.states = [new eui.State("1", [new eui.SetProperty("scroller2", "visible", !1), new eui.SetProperty("tabGroup4", "visible", !1), new eui.SetProperty("tabGroup5", "visible", !1), new eui.SetProperty("_Image8", "visible", !1)]), new eui.State("2", [new eui.SetProperty("scroller1", "visible", !1), new eui.SetProperty("tabGroup4", "visible", !1), new eui.SetProperty("tabGroup5", "visible", !1), new eui.SetProperty("_Image8", "visible", !1)]), new eui.State("4", [new eui.SetProperty("scroller1", "visible", !1), new eui.SetProperty("scroller2", "visible", !1), new eui.SetProperty("tabGroup5", "visible", !1), new eui.SetProperty("_Image8", "visible", !1)]), new eui.State("3", [new eui.SetProperty("scroller1", "visible", !1), new eui.SetProperty("tabGroup4", "visible", !1), new eui.SetProperty("tabGroup5", "visible", !1), new eui.SetProperty("_Image8", "visible", !1)]), new eui.State("5", [new eui.SetProperty("scroller1", "visible", !1), new eui.SetProperty("scroller2", "visible", !1), new eui.SetProperty("tabGroup4", "visible", !1)])]
    }
    __extends(t, e);
    var i = t.prototype;
    return i.bg_i = function() {
        var e = new eui.Image;
        return this.bg = e,
        e.horizontalCenter = 0,
        e.source = "temple_heroes_panel_bg_2019_jpg",
        e.verticalCenter = 0,
        e
    },
    i._Group1_i = function() {
        var e = new eui.Group;
        return e.height = 640,
        e.horizontalCenter = 0,
        e.verticalCenter = 0,
        e.width = 1136,
        e.elementsContent = [this._Image1_i(), this._Image2_i(), this._Scroller1_i(), this._Image3_i(), this._Image4_i(), this._Scroller2_i(), this.scroller1_i(), this.scroller2_i(), this.tabGroup4_i(), this.tabGroup5_i(), this.aniGroup_i(), this.btnBuy_i(), this.btnInfo_i(), this._Image8_i()],
        e
    },
    i._Image1_i = function() {
        var e = new eui.Image;
        return e.height = 640,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "temple_heroes_panel_pet_2019_png",
        e.x = 351,
        e.y = 0,
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.height = 285,
        e.scale9Grid = new egret.Rectangle(69, 36, 4, 4),
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "temple_heroes_panel_bundledbg_2019_png",
        e.width = 115,
        e.x = 986,
        e.y = 327,
        e
    },
    i._Scroller1_i = function() {
        var e = new eui.Scroller;
        return e.height = 239.465,
        e.width = 76,
        e.x = 1010,
        e.y = 362,
        e.viewport = this._listItem_i(),
        e
    },
    i._listItem_i = function() {
        var e = new eui.List;
        return this._listItem = e,
        e.layout = this._VerticalLayout1_i(),
        e
    },
    i._VerticalLayout1_i = function() {
        var e = new eui.VerticalLayout;
        return e.gap = 5,
        e
    },
    i._Image3_i = function() {
        var e = new eui.Image;
        return e.height = 430,
        e.scale9Grid = new egret.Rectangle(152, 133, 39, 45),
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "temple_heroes_panel_tabbg_2019_png",
        e.width = 628,
        e.x = 33,
        e.y = 179,
        e
    },
    i._Image4_i = function() {
        var e = new eui.Image;
        return e.scaleX = 1,
        e.scaleY = 1,
        e.source = "temple_heroes_panel_petname_2019_png",
        e.x = 63,
        e.y = 48.294,
        e
    },
    i._Scroller2_i = function() {
        var e = new eui.Scroller;
        return e.height = 282,
        e.width = 142,
        e.x = 46,
        e.y = 201,
        e.viewport = this.tabsGroup_i(),
        e
    },
    i.tabsGroup_i = function() {
        var e = new eui.Group;
        return this.tabsGroup = e,
        e.layout = this._VerticalLayout2_i(),
        e
    },
    i._VerticalLayout2_i = function() {
        var e = new eui.VerticalLayout;
        return e.gap = -10,
        e
    },
    i.scroller1_i = function() {
        var e = new eui.Scroller;
        return this.scroller1 = e,
        e.height = 320,
        e.width = 410,
        e.x = 215,
        e.y = 204,
        e.viewport = this._list1_i(),
        e
    },
    i._list1_i = function() {
        var e = new eui.List;
        return this._list1 = e,
        e.layout = this._HorizontalLayout1_i(),
        e
    },
    i._HorizontalLayout1_i = function() {
        var e = new eui.HorizontalLayout;
        return e.gap = 23,
        e
    },
    i.scroller2_i = function() {
        var e = new eui.Scroller;
        return this.scroller2 = e,
        e.height = 340,
        e.horizontalCenter = -145.5,
        e.y = 228,
        e.viewport = this._list2_i(),
        e
    },
    i._list2_i = function() {
        var e = new eui.List;
        return this._list2 = e,
        e.layout = this._HorizontalLayout2_i(),
        e
    },
    i._HorizontalLayout2_i = function() {
        var e = new eui.HorizontalLayout;
        return e.gap = 45,
        e
    },
    i.tabGroup4_i = function() {
        var e = new eui.Group;
        return this.tabGroup4 = e,
        e.x = 181,
        e.y = 193,
        e.elementsContent = [this._Image5_i(), this.btnDraw_i()],
        e
    },
    i._Image5_i = function() {
        var e = new eui.Image;
        return e.source = "temple_heroes_panel_tabgroup4bg_2019_png",
        e.visible = !0,
        e.x = 0,
        e.y = 0,
        e
    },
    i.btnDraw_i = function() {
        var e = new eui.Group;
        return this.btnDraw = e,
        e.x = 149,
        e.y = 327,
        e.elementsContent = [this._Image6_i(), this._Label1_i()],
        e
    },
    i._Image6_i = function() {
        var e = new eui.Image;
        return e.height = 57,
        e.source = "temple_heroes_panel_btnbuy_bg_2019_png",
        e.visible = !0,
        e.width = 176,
        e.x = 0,
        e.y = 0,
        e
    },
    i._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "REEJI",
        e.horizontalCenter = 0,
        e.size = 32,
        e.stroke = 2,
        e.strokeColor = 14588684,
        e.text = "前往抽取",
        e.textColor = 16777215,
        e.verticalCenter = 0,
        e
    },
    i.tabGroup5_i = function() {
        var e = new eui.Group;
        return this.tabGroup5 = e,
        e.x = 188,
        e.y = 208,
        e.elementsContent = [this._Scroller3_i()],
        e
    },
    i._Scroller3_i = function() {
        var e = new eui.Scroller;
        return e.height = 388.94,
        e.width = 460,
        e.x = 0,
        e.y = 0,
        e.viewport = this._list5_i(),
        e
    },
    i._list5_i = function() {
        var e = new eui.List;
        return this._list5 = e,
        e.layout = this._VerticalLayout3_i(),
        e
    },
    i._VerticalLayout3_i = function() {
        var e = new eui.VerticalLayout;
        return e.gap = 0,
        e
    },
    i.aniGroup_i = function() {
        var e = new eui.Group;
        return this.aniGroup = e,
        e.x = 834,
        e.y = 530,
        e
    },
    i.btnBuy_i = function() {
        var e = new eui.Group;
        return this.btnBuy = e,
        e.height = 57,
        e.width = 206,
        e.x = 732,
        e.y = 546.618,
        e.elementsContent = [this._Image7_i(), this.txtPrice_i(), this.imgBuyIcon_i()],
        e
    },
    i._Image7_i = function() {
        var e = new eui.Image;
        return e.source = "temple_heroes_panel_btnbuy_bg_2019_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.txtPrice_i = function() {
        var e = new eui.Label;
        return this.txtPrice = e,
        e.fontFamily = "REEJI",
        e.size = 30,
        e.stroke = 2,
        e.strokeColor = 14588684,
        e.text = " 已获得",
        e.textColor = 16777215,
        e.x = 48,
        e.y = 14,
        e
    },
    i.imgBuyIcon_i = function() {
        var e = new eui.Image;
        return this.imgBuyIcon = e,
        e.height = 35,
        e.width = 35,
        e.x = 14,
        e.y = 11,
        e
    },
    i.btnInfo_i = function() {
        var e = new eui.Image;
        return this.btnInfo = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "temple_heroes_panel_btninfo_2019_png",
        e.x = 1051,
        e.y = 243,
        e
    },
    i._Image8_i = function() {
        var e = new eui.Image;
        return this._Image8 = e,
        e.source = "temple_heroes_panel_tabgroup5bg_2019_png",
        e.x = 669.057,
        e.y = 506.109,
        e
    },
    i.itemNumGroup_i = function() {
        var e = new eui.Group;
        return this.itemNumGroup = e,
        e.right = 39,
        e.scaleX = 1,
        e.scaleY = 1,
        e.top = 12,
        e.elementsContent = [this._Image9_i(), this.icon_i(), this.num_i(), this.btnAdd_i()],
        e
    },
    i._Image9_i = function() {
        var e = new eui.Image;
        return e.source = "temple_heroes_panel_itemnumbg_2019_png",
        e.x = 9,
        e.y = 4,
        e
    },
    i.icon_i = function() {
        var e = new eui.Image;
        return this.icon = e,
        e.height = 30,
        e.width = 30,
        e.x = 0,
        e
    },
    i.num_i = function() {
        var e = new eui.Label;
        return this.num = e,
        e.fontFamily = "MFShangHei",
        e.horizontalCenter = 4.5,
        e.size = 18,
        e.textColor = 12834813,
        e.y = 6,
        e
    },
    i.btnAdd_i = function() {
        var e = new eui.Image;
        return this.btnAdd = e,
        e.height = 22,
        e.source = "common_btn_add_png",
        e.x = 125,
        e.y = 4,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/TempleHeroesTab1ItemSkin.exml"] = window.TempleHeroesTab1Item2019Skin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["icon", "itemName", "num", "payIcon", "groupBuy", "title"],
        this.height = 319,
        this.width = 191,
        this.elementsContent = [this._Group1_i()],
        this._Label1_i(),
        this.states = [new eui.State("1", [new eui.AddItems("_Label1", "_Group1", 1, "")]), new eui.State("2", [new eui.SetProperty("title", "source", "temple_heroes_panel_tabgroup1title2_2019_png")])]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Group1_i = function() {
        var e = new eui.Group;
        return this._Group1 = e,
        e.visible = !0,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this._Image1_i(), this.icon_i(), this._Image2_i(), this.itemName_i(), this.groupBuy_i(), this._Image4_i(), this.title_i()],
        e
    },
    i._Image1_i = function() {
        var e = new eui.Image;
        return e.height = 156,
        e.scale9Grid = new egret.Rectangle(32, 32, 16, 15),
        e.source = "temple_heroes_panel_tabgroup1iconbg_2019_png",
        e.width = 155,
        e.x = 18,
        e.y = 112,
        e
    },
    i.icon_i = function() {
        var e = new eui.Image;
        return this.icon = e,
        e.height = 75,
        e.horizontalCenter = 0,
        e.verticalCenter = 30,
        e.width = 75,
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.height = 31,
        e.scale9Grid = new egret.Rectangle(2, 2, 8, 27),
        e.source = "temple_heroes_panel_tabgroup1namebg_2019_png",
        e.width = 155,
        e.x = 18,
        e.y = 81,
        e
    },
    i.itemName_i = function() {
        var e = new eui.Label;
        return this.itemName = e,
        e.fontFamily = "MFShangHei",
        e.horizontalCenter = 0,
        e.size = 18,
        e.text = "圣灵之章",
        e.textColor = 10727909,
        e.y = 87.721,
        e
    },
    i.groupBuy_i = function() {
        var e = new eui.Group;
        return this.groupBuy = e,
        e.horizontalCenter = -2,
        e.touchChildren = !1,
        e.verticalCenter = 143,
        e.elementsContent = [this._Image3_i(), this.num_i(), this.payIcon_i()],
        e
    },
    i._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "temple_heroes_panel_btnbuyskin_2019_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.num_i = function() {
        var e = new eui.Label;
        return this.num = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "298 购买",
        e.textColor = 10181146,
        e.x = 60,
        e.y = 5,
        e
    },
    i.payIcon_i = function() {
        var e = new eui.Image;
        return this.payIcon = e,
        e.height = 26,
        e.width = 26,
        e.x = 22.999,
        e.y = 2,
        e
    },
    i._Image4_i = function() {
        var e = new eui.Image;
        return e.height = 50,
        e.scale9Grid = new egret.Rectangle(0, 0, 20, 50),
        e.source = "temple_heroes_panel_tabgroup1titlebg_2019_png",
        e.width = 191,
        e.x = 0,
        e.y = 0,
        e
    },
    i.title_i = function() {
        var e = new eui.Image;
        return this.title = e,
        e.source = "temple_heroes_panel_tabgroup1title1_2019_png",
        e.x = 47,
        e.y = 9,
        e
    },
    i._Label1_i = function() {
        var e = new eui.Label;
        return this._Label1 = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "1",
        e.x = 129,
        e.y = 216,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/TempleHeroesTab2ItemSkin.exml"] = window.TempleHeroesTab2Item2019Skin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["icon", "iconType", "txt_buy", "btnBuy", "txtSkinName"],
        this.height = 332,
        this.width = 178,
        this.elementsContent = [this._Image1_i(), this.icon_i(), this.iconType_i(), this._Image2_i(), this.btnBuy_i(), this.txtSkinName_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "temple_heroes_panel_tabgroup2skinbg_2019_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.icon_i = function() {
        var e = new eui.Image;
        return this.icon = e,
        e.height = 277,
        e.verticalCenter = -20.5,
        e.visible = !0,
        e.width = 168,
        e.x = 6,
        e
    },
    i.iconType_i = function() {
        var e = new eui.Image;
        return this.iconType = e,
        e.height = 30,
        e.width = 90,
        e.x = -3,
        e.y = 6,
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.height = 28.197,
        e.horizontalCenter = 1,
        e.scale9Grid = new egret.Rectangle(4, 4, 4, 4),
        e.source = "temple_heroes_panel_rect_2019_png",
        e.width = 168,
        e.y = 259.704,
        e
    },
    i.btnBuy_i = function() {
        var e = new eui.Group;
        return this.btnBuy = e,
        e.height = 29,
        e.touchChildren = !1,
        e.width = 168,
        e.x = 6,
        e.y = 303,
        e.elementsContent = [this._Image3_i(), this.txt_buy_i()],
        e
    },
    i._Image3_i = function() {
        var e = new eui.Image;
        return e.scaleX = 1,
        e.scaleY = 1,
        e.source = "temple_heroes_panel_btnbuyskin_2019_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.txt_buy_i = function() {
        var e = new eui.Label;
        return this.txt_buy = e,
        e.fontFamily = "MFShangHei",
        e.horizontalCenter = 0,
        e.size = 18,
        e.text = "购买",
        e.textColor = 10181146,
        e.y = 6,
        e
    },
    i.txtSkinName_i = function() {
        var e = new eui.Label;
        return this.txtSkinName = e,
        e.fontFamily = "MFShangHei",
        e.horizontalCenter = 2,
        e.size = 18,
        e.text = "科学家•圣光灵神",
        e.textColor = 10606589,
        e.visible = !0,
        e.y = 264,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/TempleHeroesTab3ItemSkin.exml"] = window.TempleHeroesTab3Item2019Skin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["icon", "btnFind", "txt_buy", "btnBuy", "txtSkinName"],
        this.height = 332,
        this.width = 178,
        this.elementsContent = [this._Image1_i(), this.icon_i(), this.btnFind_i(), this._Image2_i(), this.btnBuy_i(), this.txtSkinName_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "temple_heroes_panel_tabgroup2skinbg_2019_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.icon_i = function() {
        var e = new eui.Image;
        return this.icon = e,
        e.height = 277,
        e.verticalCenter = -20.5,
        e.visible = !0,
        e.width = 168,
        e.x = 6,
        e
    },
    i.btnFind_i = function() {
        var e = new eui.Image;
        return this.btnFind = e,
        e.source = "temple_heroes_panel_find_2019_png",
        e.x = 6.824,
        e.y = 7.12,
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.height = 28.197,
        e.horizontalCenter = 1,
        e.scale9Grid = new egret.Rectangle(4, 4, 4, 4),
        e.source = "temple_heroes_panel_rect_2019_png",
        e.width = 168,
        e.y = 259.704,
        e
    },
    i.btnBuy_i = function() {
        var e = new eui.Group;
        return this.btnBuy = e,
        e.height = 29,
        e.touchChildren = !1,
        e.width = 168,
        e.x = 6,
        e.y = 303,
        e.elementsContent = [this._Image3_i(), this.txt_buy_i()],
        e
    },
    i._Image3_i = function() {
        var e = new eui.Image;
        return e.scaleX = 1,
        e.scaleY = 1,
        e.source = "temple_heroes_panel_btnbuyskin_2019_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.txt_buy_i = function() {
        var e = new eui.Label;
        return this.txt_buy = e,
        e.fontFamily = "MFShangHei",
        e.horizontalCenter = 0,
        e.size = 18,
        e.text = "购买",
        e.textColor = 10181146,
        e.y = 6,
        e
    },
    i.txtSkinName_i = function() {
        var e = new eui.Label;
        return this.txtSkinName = e,
        e.fontFamily = "MFShangHei",
        e.horizontalCenter = 2,
        e.size = 18,
        e.text = "圣光灵神",
        e.textColor = 10606589,
        e.visible = !0,
        e.y = 264,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/TempleHeroesTab5ItemSkin.exml"] = window.TempleHeroesTab5Item2019Skin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["icon", "num", "btnUp", "btnContrast", "icon0", "g1", "icon1", "g2", "title"],
        this.height = 158,
        this.width = 458,
        this.elementsContent = [this._Group1_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Group1_i = function() {
        var e = new eui.Group;
        return e.x = 0,
        e.y = 0,
        e.elementsContent = [this._Image1_i(), this.btnUp_i(), this.btnContrast_i(), this.g1_i(), this.g2_i(), this.title_i()],
        e
    },
    i._Image1_i = function() {
        var e = new eui.Image;
        return e.height = 152,
        e.scale9Grid = new egret.Rectangle(180, 0, 16, 152),
        e.source = "temple_heroes_panel_group5bg_2019_png",
        e.width = 458,
        e.x = 0,
        e.y = 0,
        e
    },
    i.btnUp_i = function() {
        var e = new eui.Group;
        return this.btnUp = e,
        e.x = 328,
        e.y = 113,
        e.elementsContent = [this._Image2_i(), this.icon_i(), this.num_i(), this._Label1_i()],
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.height = 34,
        e.scale9Grid = new egret.Rectangle(2, 2, 8, 8),
        e.source = "temple_heroes_panel_tab5_btnbuy_bg_2019_png",
        e.width = 113,
        e.x = 0,
        e.y = 0,
        e
    },
    i.icon_i = function() {
        var e = new eui.Image;
        return this.icon = e,
        e.height = 26,
        e.horizontalCenter = -37.5,
        e.verticalCenter = 0,
        e.width = 26,
        e
    },
    i.num_i = function() {
        var e = new eui.Label;
        return this.num = e,
        e.fontFamily = "REEJI",
        e.horizontalCenter = -8.5,
        e.size = 18.0474298202113,
        e.text = "XX",
        e.textColor = 16777215,
        e.verticalCenter = .5,
        e
    },
    i._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "REEJI",
        e.size = 18.0474298202113,
        e.text = "升级",
        e.textColor = 16777215,
        e.verticalCenter = 0,
        e.x = 71,
        e
    },
    i.btnContrast_i = function() {
        var e = new eui.Image;
        return this.btnContrast = e,
        e.source = "temple_heroes_panel_btncontrast_2019_png",
        e.x = 116,
        e.y = 116,
        e
    },
    i.g1_i = function() {
        var e = new eui.Group;
        return this.g1 = e,
        e.height = 75,
        e.width = 75,
        e.x = 18,
        e.y = 27,
        e.elementsContent = [this._Image3_i(), this.icon0_i()],
        e
    },
    i._Image3_i = function() {
        var e = new eui.Image;
        return e.height = 75,
        e.horizontalCenter = 0,
        e.scale9Grid = new egret.Rectangle(6, 7, 7, 6),
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "temple_heroes_panel_itembg_2019_png",
        e.verticalCenter = 0,
        e.width = 75,
        e.x = 174,
        e.y = 12,
        e
    },
    i.icon0_i = function() {
        var e = new eui.Image;
        return this.icon0 = e,
        e.horizontalCenter = -.5,
        e.scaleX = 1,
        e.scaleY = 1,
        e.verticalCenter = -.5,
        e.x = 211,
        e.y = 49,
        e
    },
    i.g2_i = function() {
        var e = new eui.Group;
        return this.g2 = e,
        e.height = 75,
        e.width = 75,
        e.x = 193,
        e.y = 27,
        e.elementsContent = [this._Image4_i(), this.icon1_i()],
        e
    },
    i._Image4_i = function() {
        var e = new eui.Image;
        return e.height = 75,
        e.horizontalCenter = 0,
        e.scale9Grid = new egret.Rectangle(6, 7, 7, 6),
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "temple_heroes_panel_itembg_2019_png",
        e.verticalCenter = 0,
        e.width = 75,
        e.x = -1,
        e.y = 12,
        e
    },
    i.icon1_i = function() {
        var e = new eui.Image;
        return this.icon1 = e,
        e.horizontalCenter = -.5,
        e.scaleX = 1,
        e.scaleY = 1,
        e.verticalCenter = -.5,
        e.x = 36,
        e.y = 49,
        e
    },
    i.title_i = function() {
        var e = new eui.Label;
        return this.title = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "专属特性升级",
        e.textColor = 4187130,
        e.x = 11,
        e.y = 1,
        e
    },
    t
} (eui.Skin);