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
peakEndReward; !
function(e) {
    var t = function(t) {
        function i() {
            var e = t.call(this) || this;
            return e.skinName = peakEndRewardSkin,
            e
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this),
            this.adaptBgByScale(this.bg),
            this.addEvent(),
            this.list.itemRenderer = e.PeakEndRewardItem,
            this.updateView(),
            this._resize()
        },
        i.prototype.addEvent = function() {
            ImageButtonUtil.add(this.btnGo,
            function() {
                ModuleManager.showModuleByID(8)
            },
            this),
            ImageButtonUtil.add(this.imgTip,
            function() {
                tipsPop.TipsPop.openHelpPopById(172)
            },
            this),
            EventManager.addEventListener(e.EventConst.PEAK_END_REWARD_UPDATE_VIEW, this.updateView, this)
        },
        i.prototype.reShow = function() {
            t.prototype.reShow.call(this),
            this.updateView()
        },
        i.prototype.updateView = function() {
            var e = this;
            KTool.getMultiValue([123249, 123309, 124266],
            function(t) {
                var i = Math.max(t[0], t[1]);
                e.txtLevel.text = PeakJihadLevelRulesXMLInfo.getTitleByStarlv(i);
                for (var n = [], a = [0, 15, 35, 60, 85], r = [14, 34, 59, 84, 85], o = 1; 5 >= o; ++o) r[o - 1] < i || a[o - 1] <= i ? 1 == KTool.getBit(t[2], o) ? n.push(1) : n.push(0) : n.push(2);
                e.list.dataProvider = new eui.ArrayCollection(n)
            })
        },
        i.prototype._resize = function() {
            t.prototype._resize.call(this);
            var e = 1136,
            i = 640,
            n = egret.lifecycle.stage.stageWidth,
            a = egret.lifecycle.stage.stageHeight,
            r = n / e,
            o = a / i,
            s = Math.max(r, o);
            this.bg.scaleX = this.bg.scaleY = s,
            r > o ? this.bg.y = (a - i * s) / 2 : this.bg.x = (n - e * s) / 2 - 224
        },
        i
    } (BaseModule);
    e.PeakEndReward = t,
    __reflect(t.prototype, "peakEndReward.PeakEndReward")
} (peakEndReward || (peakEndReward = {}));
var __reflect = this && this.__reflect ||
function(e, t, i) {
    e.__class__ = t,
    i ? i.push(t) : i = [t],
    e.__types__ = e.__types__ ? i.concat(e.__types__) : i
},
peakEndReward; !
function(e) {
    var t = function() {
        function e() {}
        return e.ARR_ITEM_LEVEL_NAME = ["初入学徒-神乎奇客", "热血英杰-百战豪雄", "无敌猛将-不败战魂", "出世天骄-巅峰王者", "宇宙圣皇"],
        e.ARR_ITEM_REWARD_INFO = [[[1717451, 100]], [[1717452, 50], [1717451, 200]], [[300697, 5], [1717452, 50], [1717451, 300]], [[300065, 5], [1717452, 100], [1717451, 400]], [[300065, 10], [1717452, 100], [1717451, 500]]],
        e
    } ();
    e.DataConst = t,
    __reflect(t.prototype, "peakEndReward.DataConst")
} (peakEndReward || (peakEndReward = {}));
var __reflect = this && this.__reflect ||
function(e, t, i) {
    e.__class__ = t,
    i ? i.push(t) : i = [t],
    e.__types__ = e.__types__ ? i.concat(e.__types__) : i
},
peakEndReward; !
function(e) {
    var t = function() {
        function e() {}
        return e.PEAK_END_REWARD_UPDATE_VIEW = "peakEndRewardUpdateView",
        e
    } ();
    e.EventConst = t,
    __reflect(t.prototype, "peakEndReward.EventConst")
} (peakEndReward || (peakEndReward = {}));
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
peakEndReward; !
function(e) {
    var t = function(t) {
        function i() {
            var e = t.call(this) || this;
            return e.skinName = peakEndRewardItemSkin,
            e.cacheAsBitmap = !0,
            e
        }
        return __extends(i, t),
        i.prototype.dataChanged = function() {
            var i = this;
            switch (t.prototype.dataChanged.call(this), this.txtLevelName.text = e.DataConst.ARR_ITEM_LEVEL_NAME[this.itemIndex], this.list.itemRenderer = e.PeakEndRewardSmallItem, this.list.dataProvider = new eui.ArrayCollection(e.DataConst.ARR_ITEM_REWARD_INFO[this.itemIndex]), this.data) {
            case 0:
                this.currentState = "canGet",
                ImageButtonUtil.remove(this.imgGet),
                ImageButtonUtil.add(this.imgGet,
                function() {
                    ItemManager.getNumByID(1717451) < ItemXMLInfo.getMaxNum(1717451) && ItemManager.getNumByID(1717452) < ItemXMLInfo.getMaxNum(1717452) ? SocketConnection.sendByQueue(41900, [71, i.itemIndex + 1],
                    function() {
                        ImageButtonUtil.remove(i.imgGet),
                        EventManager.dispatchEventWith(e.EventConst.PEAK_END_REWARD_UPDATE_VIEW)
                    }) : BubblerManager.getInstance().showText("很抱歉，道具已达最大上限，暂时无法领取！")
                },
                this);
                break;
            case 1:
                this.currentState = "hasGot";
                break;
            case 2:
                this.currentState = "NotGet"
            }
        },
        i
    } (BaseItemRenderer);
    e.PeakEndRewardItem = t,
    __reflect(t.prototype, "peakEndReward.PeakEndRewardItem")
} (peakEndReward || (peakEndReward = {}));
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
peakEndReward; !
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.skinName = peakEndRewardSmallItemSkin,
            t.cacheAsBitmap = !0,
            t
        }
        return __extends(t, e),
        t.prototype.dataChanged = function() {
            var t = this;
            e.prototype.dataChanged.call(this),
            this.icon.source = ClientConfig.getItemIcon(this.data[0]),
            this.txtNum.text = this.data[1],
            ImageButtonUtil.remove(this.icon),
            ImageButtonUtil.add(this.icon,
            function() {
                var e = {};
                e.id = t.data[0],
                tipsPop.TipsPop.openItemPop(e)
            },
            this)
        },
        t
    } (BaseItemRenderer);
    e.PeakEndRewardSmallItem = t,
    __reflect(t.prototype, "peakEndReward.PeakEndRewardSmallItem")
} (peakEndReward || (peakEndReward = {}));
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
generateEUI.paths["resource/eui_skins/item/peakEndRewardItemSkin.exml"] = window.peakEndRewardItemSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["imgGet", "imgHasGot", "imgNotGet", "txtLevelName", "list"],
        this.elementsContent = [this._Image1_i(), this.imgGet_i(), this.imgHasGot_i(), this.imgNotGet_i(), this.txtLevelName_i(), this._Scroller1_i()],
        this.states = [new eui.State("canGet", [new eui.SetProperty("imgHasGot", "visible", !1), new eui.SetProperty("imgNotGet", "visible", !1)]), new eui.State("hasGot", [new eui.SetProperty("imgGet", "visible", !1), new eui.SetProperty("imgHasGot", "visible", !0), new eui.SetProperty("imgNotGet", "visible", !1)]), new eui.State("NotGet", [new eui.SetProperty("imgGet", "right", 23), new eui.SetProperty("imgGet", "visible", !1), new eui.SetProperty("imgHasGot", "visible", !1), new eui.SetProperty("imgNotGet", "visible", !0)])]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "peakendreward_itembg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.imgGet_i = function() {
        var e = new eui.Image;
        return this.imgGet = e,
        e.source = "peakendreward_canget_png",
        e.x = 304,
        e.y = 29,
        e
    },
    i.imgHasGot_i = function() {
        var e = new eui.Image;
        return this.imgHasGot = e,
        e.source = "peakendreward_hasgot_png",
        e.x = 288,
        e.y = 36,
        e
    },
    i.imgNotGet_i = function() {
        var e = new eui.Image;
        return this.imgNotGet = e,
        e.source = "peakendreward_notget_png",
        e.x = 309,
        e.y = 39,
        e
    },
    i.txtLevelName_i = function() {
        var e = new eui.Label;
        return this.txtLevelName = e,
        e.fontFamily = "REEJI",
        e.size = 17.978091852322,
        e.text = "初入学徒-神乎奇客",
        e.textColor = 3285801,
        e.x = 12,
        e.y = 7,
        e
    },
    i._Scroller1_i = function() {
        var e = new eui.Scroller;
        return e.height = 72,
        e.width = 237,
        e.x = 9,
        e.y = 31,
        e.viewport = this.list_i(),
        e
    },
    i.list_i = function() {
        var e = new eui.List;
        return this.list = e,
        e.layout = this._HorizontalLayout1_i(),
        e
    },
    i._HorizontalLayout1_i = function() {
        var e = new eui.HorizontalLayout;
        return e.gap = 8,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/item/peakEndRewardSmallItemSkin.exml"] = window.peakEndRewardSmallItemSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["bg", "icon", "txtNum"],
        this.elementsContent = [this.bg_i(), this.icon_i(), this.txtNum_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i.bg_i = function() {
        var e = new eui.Image;
        return this.bg = e,
        e.height = 72,
        e.scale9Grid = new egret.Rectangle(12, 18, 3, 2),
        e.source = "peakendreward_smallitembg_png",
        e.width = 72,
        e
    },
    i.icon_i = function() {
        var e = new eui.Image;
        return this.icon = e,
        e.height = 52,
        e.width = 52,
        e.x = 11,
        e.y = 10,
        e
    },
    i.txtNum_i = function() {
        var e = new eui.Label;
        return this.txtNum = e,
        e.fontFamily = "MFShangHei",
        e.right = 0,
        e.size = 18,
        e.text = "100",
        e.textColor = 16777215,
        e.y = 53,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/peakEndRewardSkin.exml"] = window.peakEndRewardSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["bg", "btnGo", "txtLevel", "level", "imgTip", "list"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this.btnGo_i(), this.level_i(), this._Image2_i(), this.imgTip_i(), this._Scroller1_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i.bg_i = function() {
        var e = new eui.Image;
        return this.bg = e,
        e.source = "peakendreward_bg_png",
        e.x = -224,
        e.y = 0,
        e
    },
    i.btnGo_i = function() {
        var e = new eui.Image;
        return this.btnGo = e,
        e.horizontalCenter = 393,
        e.source = "peakendreward_btngo_png",
        e.y = 548,
        e
    },
    i.level_i = function() {
        var e = new eui.Group;
        return this.level = e,
        e.horizontalCenter = 267,
        e.y = 60,
        e.elementsContent = [this.txtLevel_i(), this._Label1_i(), this._Image1_i()],
        e
    },
    i.txtLevel_i = function() {
        var e = new eui.Label;
        return this.txtLevel = e,
        e.fontFamily = "MFShangHei",
        e.size = 18.1115648999384,
        e.text = "四位字符",
        e.textColor = 16373062,
        e.x = 322,
        e.y = 11,
        e
    },
    i._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18.1115648999384,
        e.text = "当前月度竞技/狂野模式最高段位",
        e.textColor = 16777215,
        e.x = 40,
        e.y = 11,
        e
    },
    i._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "peakendreward_levelbg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = -178,
        e.source = "peakendreward_title_png",
        e.y = 364,
        e
    },
    i.imgTip_i = function() {
        var e = new eui.Image;
        return this.imgTip = e,
        e.horizontalCenter = -298,
        e.source = "common_help_icon_1_png",
        e.x = 72,
        e.y = 567,
        e
    },
    i._Scroller1_i = function() {
        var e = new eui.Scroller;
        return e.height = 411,
        e.horizontalCenter = 270,
        e.width = 440,
        e.y = 108,
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
        return e.gap = 8,
        e
    },
    t
} (eui.Skin);