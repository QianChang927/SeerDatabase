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
communityCenter; !
function(e) {
    var t = function(t) {
        function i(i) {
            var n = t.call(this) || this;
            i && (n.curIndex = i.childIndex),
            n.service.setValues([], [], [], []),
            n.init([{
                panelName: e.CommunityCenterConst.SubscribeGiftPanel
            },
            {
                panelName: e.CommunityCenterConst.LatestRecommendPanel,
                isMain: !0
            },
            {
                panelName: e.CommunityCenterConst.CommunityActivityPanelPanel
            }]);
            var r = config.ActivityCenter.getItem(9),
            a = r.pageChildrenName.split("#"),
            s = a[0].split("_");
            e.CommunityCenterConst.ALL_PANELS_CONDITION = [];
            for (var o = 0; o < s.length; o++) {
                var u = s[o].split("&");
                if (u.length >= 3) {
                    var _ = u[2];
                    e.CommunityCenterConst.ALL_PANELS_CONDITION.push(_)
                }
            }
            return n
        }
        return __extends(i, t),
        i.prototype.initialized = function() {
            var t = this;
            this.service.updateValues().then(function() {
                if (t.curIndex) return t.service.openPanel(e.CommunityCenterConst.ALL_PANELS[t.curIndex - 1]),
                void EventManager.dispatchEventWith("childrenRBEnter", !1, t.curIndex);
                for (var i = 0; i < e.CommunityCenterConst.ALL_PANELS_CONDITION.length; i++) {
                    var n = e.CommunityCenterConst.ALL_PANELS_CONDITION[i];
                    if (window.activityCenter.DisplayCondition[n]()) return void t.service.openPanel(e.CommunityCenterConst.ALL_PANELS[i])
                }
                t.service.openPanel(e.CommunityCenterConst.ALL_PANELS[1])
            })
        },
        i.prototype.openRBPanel = function(t) {
            this.service.openPanel(e.CommunityCenterConst.ALL_PANELS[t - 1])
        },
        i.checkPageAvailable = function() {
            return ! 0
        },
        i
    } (BasicMultPanelModule);
    e.CommunityCenter = t,
    __reflect(t.prototype, "communityCenter.CommunityCenter")
} (communityCenter || (communityCenter = {}));
var __reflect = this && this.__reflect ||
function(e, t, i) {
    e.__class__ = t,
    i ? i.push(t) : i = [t],
    e.__types__ = e.__types__ ? i.concat(e.__types__) : i
},
communityCenter; !
function(e) {
    var t = function() {
        function e() {}
        return e.SubscribeGiftPanel = "communityCenter.SubscribeGiftPanel",
        e.LatestRecommendPanel = "communityCenter.LatestRecommendPanel",
        e.CommunityActivityPanelPanel = "communityCenter.CommunityActivityPanel",
        e.AnniversaryCelebrationPanel = "communityCenter.AnniversaryCelebrationPanel",
        e.ALL_PANELS = [e.SubscribeGiftPanel, e.LatestRecommendPanel, e.CommunityActivityPanelPanel, e.AnniversaryCelebrationPanel],
        e.ALL_PANELS_CONDITION = ["CommunitySubscribeCondition", "CommunityCondition1", "CommunityCondition2"],
        e
    } ();
    e.CommunityCenterConst = t,
    __reflect(t.prototype, "communityCenter.CommunityCenterConst")
} (communityCenter || (communityCenter = {}));
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
communityCenter; !
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.cur = 7,
            t.skinName = "AnniversaryCelebrationPanelSkin",
            t
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            var t = this;
            e.prototype.childrenCreated.call(this),
            this.adaptBgByScale(this.bg0),
            this.adaptBgByScale(this.bg),
            this.radioGroup = this.rb1.group,
            this.radioGroup.selectedValue = this["rb" + this.cur].value,
            this.radioGroup.addEventListener(egret.Event.CHANGE, this.change, this);
            var i = "resource/assets/activityCenter/Anniversary/" + this.cur + ".png";
            this.bg0.source = i,
            ImageButtonUtil.add(this.btnGo,
            function() {
                var e = ~~t.radioGroup.selectedValue;
                switch (e) {
                case 1:
                    URLNavigationManager.NavigateTo(URLNavigationEnum.Custom, "https://seer.61.com/events/14years/");
                    break;
                case 2:
                    URLNavigationManager.NavigateTo(URLNavigationEnum.Custom, "https://seer.61.com/events/14years/versioncontent/");
                    break;
                case 3:
                    URLNavigationManager.NavigateTo(URLNavigationEnum.Custom, "https://b23.tv/YMEngcs");
                    break;
                case 4:
                    URLNavigationManager.NavigateTo(URLNavigationEnum.Custom, "https://www.bilibili.com/video/BV1Au411x7NV/");
                    break;
                case 5:
                    URLNavigationManager.NavigateTo(URLNavigationEnum.Custom, "https://seer.61.com/events/14years/#page3");
                    break;
                case 6:
                    URLNavigationManager.NavigateTo(URLNavigationEnum.Custom, "https://www.bilibili.com/blackboard/era/3ERAmwloghv2p400.html");
                    break;
                case 7:
                    URLNavigationManager.NavigateTo(URLNavigationEnum.Custom, "https://www.bilibili.com/video/BV1ZW4y1S7yu/")
                }
            },
            this)
        },
        t.prototype.change = function() {
            var e = this,
            t = ~~this.radioGroup.selectedValue || this.cur,
            i = "resource/assets/activityCenter/Anniversary/" + t + ".png";
            this.bg.source = i,
            GsapUtils.imageFadIn(this.bg0, this.bg, 1,
            function() {
                e.bg0.source = i
            },
            this)
        },
        t.prototype.destroy = function() {
            e.prototype.destroy.call(this),
            this.radioGroup.removeEventListener(egret.Event.CHANGE, this.change, this)
        },
        t
    } (BasicPanel);
    e.AnniversaryCelebrationPanel = t,
    __reflect(t.prototype, "communityCenter.AnniversaryCelebrationPanel")
} (communityCenter || (communityCenter = {}));
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
communityCenter; !
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.skinName = "CommunityActivitySkin",
            t
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            AnnouncementManager.tempInfo.CommunityActivity && (this.bg.source = "resource/assets/activityCenter/Community/" + AnnouncementManager.tempInfo.CommunityActivity.imgId + ".png"),
            this.adaptBgByScale(this.bg),
            ImageButtonUtil.add(this.btnGet,
            function() {
                AnnouncementManager.tempInfo.CommunityActivity.url ? URLNavigationManager.NavigateTo(URLNavigationEnum.Custom, AnnouncementManager.tempInfo.CommunityActivity.url) : URLNavigationManager.NavigateTo(URLNavigationEnum.Bilibili_App_Seer)
            },
            this, !1, !0)
        },
        t
    } (BasicPanel);
    e.CommunityActivityPanel = t,
    __reflect(t.prototype, "communityCenter.CommunityActivityPanel")
} (communityCenter || (communityCenter = {}));
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
communityCenter; !
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.skinName = "LatestRecommendSkin",
            t.cacheAsBitmap = !0,
            t
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            AnnouncementManager.tempInfo.LatestRecommend && (this.bg.source = "resource/assets/activityCenter/Community/" + AnnouncementManager.tempInfo.LatestRecommend.imgId + ".png"),
            this.adaptBgByScale(this.bg),
            ImageButtonUtil.add(this.btnGet,
            function() {
                StatLogger.log("20241220版本系统功能", "活动中心", "点击社区相关【立即前往】按钮"),
                AnnouncementManager.tempInfo.LatestRecommend.url ? URLNavigationManager.NavigateTo(URLNavigationEnum.Custom, AnnouncementManager.tempInfo.LatestRecommend.url) : URLNavigationManager.NavigateTo(URLNavigationEnum.Bilibili_App_Seer)
            },
            this, !1, !0)
        },
        t
    } (BasicPanel);
    e.LatestRecommendPanel = t,
    __reflect(t.prototype, "communityCenter.LatestRecommendPanel")
} (communityCenter || (communityCenter = {}));
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
communityCenter; !
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.giftId = 1,
            t.giftCnt = 1,
            t._curTab = 0,
            t.gotPrizeArr = [124600],
            t.skinName = "SubscribeGiftSkin",
            t
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            var t = this;
            KTool.getMultiValue(this.gotPrizeArr,
            function(i) {
                t.hasGotArr = [];
                for (var n = 0,
                r = i; n < r.length; n++) for (var a = r[n], s = 0; 32 > s; s++) t.hasGotArr.push(KTool.getBit(a, s + 1));
                e.prototype.childrenCreated.call(t),
                t.giftCntTxt.text = "x " + t.giftCnt.toString(),
                t.giftIcon.source = ClientConfig.getItemIcon(t.giftId),
                t.addEvent()
            })
        },
        t.prototype.addEvent = function() {
            var e = this;
            ImageButtonUtil.add(this.itemBg,
            function() {
                tipsPop.TipsPop.openItemPop({
                    id: e.giftId
                })
            },
            this, !1, !1),
            ImageButtonUtil.add(this.select_1,
            function() {
                e.setIndex(1)
            },
            this, !1, !1),
            ImageButtonUtil.add(this.select_2,
            function() {
                e.setIndex(2)
            },
            this, !1, !1),
            ImageButtonUtil.add(this.select_3,
            function() {
                e.setIndex(3)
            },
            this, !1, !1),
            this.setIndex(1),
            ImageButtonUtil.add(this.btnGet,
            function() {
                switch (e._curTab) {
                case 1:
                    URLNavigationManager.NavigateTo(URLNavigationEnum.Taptap_App_Seer);
                    break;
                case 2:
                    URLNavigationManager.NavigateTo(URLNavigationEnum.Hykb_App_Seer);
                    break;
                case 3:
                    URLNavigationManager.NavigateTo(URLNavigationEnum.Box4399_APP_Seer)
                }
                SocketConnection.sendWithPromise(41910, [e._curTab]).then(function() {
                    e.btnGet.visible = !1,
                    KTool.getMultiValue(e.gotPrizeArr,
                    function(t) {
                        e.hasGotArr = [];
                        for (var i = 0,
                        n = t; i < n.length; i++) for (var r = n[i], a = 0; 32 > a; a++) e.hasGotArr.push(KTool.getBit(r, a + 1))
                    })
                })
            },
            this, !1, !0)
        },
        t.prototype.setIndex = function(e) {
            this._curTab != e && (this._curTab = e, this.select_1.selected = 1 == e, this.select_2.selected = 2 == e, this.select_3.selected = 3 == e, this.bg.source = "subscribe_gift_bg_" + this._curTab + "_png", this.title.source = "subscribe_title_" + this._curTab + "_png", 1 == this.hasGotArr[e - 1] ? this.btnGet.visible = !1 : this.btnGet.visible = !0)
        },
        t
    } (BasicPanel);
    e.SubscribeGiftPanel = t,
    __reflect(t.prototype, "communityCenter.SubscribeGiftPanel")
} (communityCenter || (communityCenter = {}));
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
generateEUI.paths["resource/eui_skins/AnniversaryCelebrationPanelSkin.exml"] = window.AnniversaryCelebrationPanelSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["bg0", "bg", "rb1", "rb2", "rb3", "rb4", "rb5", "rb6", "rb7", "btnGo"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg0_i(), this.bg_i(), this._Group2_i()]
    }
    __extends(t, e);
    var i = function(e) {
        function t() {
            e.call(this),
            this.skinParts = [],
            this.height = 72,
            this.width = 169,
            this.elementsContent = [this._Image2_i(), this._Label1_i()],
            this._Image1_i(),
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.AddItems("_Image1", "", 0, ""), new eui.SetProperty("_Image1", "source", "imgselect_short_png")])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.percentHeight = 100,
            e.source = "imgselect_short_png",
            e.percentWidth = 100,
            e
        },
        i._Image2_i = function() {
            var e = new eui.Image;
            return e.alpha = 0,
            e.percentHeight = 100,
            e.source = "imgselect_short_png",
            e.percentWidth = 100,
            e
        },
        i._Label1_i = function() {
            var e = new eui.Label;
            return e.fontFamily = "REEJI",
            e.horizontalCenter = 0,
            e.size = 24,
            e.text = "周年庆主题站",
            e.textColor = 16777215,
            e.verticalCenter = 0,
            e
        },
        t
    } (eui.Skin),
    n = function(e) {
        function t() {
            e.call(this),
            this.skinParts = [],
            this.height = 72,
            this.width = 169,
            this.elementsContent = [this._Image2_i(), this._Label1_i()],
            this._Image1_i(),
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.AddItems("_Image1", "", 0, ""), new eui.SetProperty("_Image1", "source", "imgselect_short_png")])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.percentHeight = 100,
            e.source = "imgselect_short_png",
            e.percentWidth = 100,
            e
        },
        i._Image2_i = function() {
            var e = new eui.Image;
            return e.alpha = 0,
            e.percentHeight = 100,
            e.source = "imgselect_short_png",
            e.percentWidth = 100,
            e
        },
        i._Label1_i = function() {
            var e = new eui.Label;
            return e.fontFamily = "REEJI",
            e.horizontalCenter = 0,
            e.size = 24,
            e.text = "周年签到",
            e.textColor = 16777215,
            e.verticalCenter = 0,
            e
        },
        t
    } (eui.Skin),
    r = function(e) {
        function t() {
            e.call(this),
            this.skinParts = [],
            this.height = 72,
            this.width = 169,
            this.elementsContent = [this._Image2_i(), this._Label1_i()],
            this._Image1_i(),
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.AddItems("_Image1", "", 0, ""), new eui.SetProperty("_Image1", "source", "imgselect_short_png")])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.percentHeight = 100,
            e.source = "imgselect_short_png",
            e.percentWidth = 100,
            e
        },
        i._Image2_i = function() {
            var e = new eui.Image;
            return e.alpha = 0,
            e.percentHeight = 100,
            e.source = "imgselect_short_png",
            e.percentWidth = 100,
            e
        },
        i._Label1_i = function() {
            var e = new eui.Label;
            return e.fontFamily = "REEJI",
            e.horizontalCenter = 0,
            e.size = 24,
            e.text = "周年庆主题曲",
            e.textColor = 16777215,
            e.verticalCenter = 0,
            e
        },
        t
    } (eui.Skin),
    a = function(e) {
        function t() {
            e.call(this),
            this.skinParts = [],
            this.height = 72,
            this.width = 169,
            this.elementsContent = [this._Image2_i(), this._Label1_i()],
            this._Image1_i(),
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.AddItems("_Image1", "", 0, ""), new eui.SetProperty("_Image1", "source", "imgselect_short_png")])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.percentHeight = 100,
            e.source = "imgselect_short_png",
            e.percentWidth = 100,
            e
        },
        i._Image2_i = function() {
            var e = new eui.Image;
            return e.alpha = 0,
            e.percentHeight = 100,
            e.source = "imgselect_short_png",
            e.percentWidth = 100,
            e
        },
        i._Label1_i = function() {
            var e = new eui.Label;
            return e.fontFamily = "REEJI",
            e.horizontalCenter = 0,
            e.size = 24,
            e.text = "周年PV",
            e.textColor = 16777215,
            e.verticalCenter = 0,
            e
        },
        t
    } (eui.Skin),
    s = function(e) {
        function t() {
            e.call(this),
            this.skinParts = [],
            this.height = 72,
            this.width = 169,
            this.elementsContent = [this._Image2_i(), this._Label1_i()],
            this._Image1_i(),
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.AddItems("_Image1", "", 0, ""), new eui.SetProperty("_Image1", "source", "imgselect_short_png")])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.percentHeight = 100,
            e.source = "imgselect_short_png",
            e.percentWidth = 100,
            e
        },
        i._Image2_i = function() {
            var e = new eui.Image;
            return e.alpha = 0,
            e.percentHeight = 100,
            e.source = "imgselect_short_png",
            e.percentWidth = 100,
            e
        },
        i._Label1_i = function() {
            var e = new eui.Label;
            return e.fontFamily = "REEJI",
            e.horizontalCenter = 0,
            e.size = 24,
            e.text = "周年直播",
            e.textColor = 16777215,
            e.verticalCenter = 0,
            e
        },
        t
    } (eui.Skin),
    o = function(e) {
        function t() {
            e.call(this),
            this.skinParts = [],
            this.height = 72,
            this.width = 169,
            this.elementsContent = [this._Image2_i(), this._Label1_i()],
            this._Image1_i(),
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.AddItems("_Image1", "", 0, ""), new eui.SetProperty("_Image1", "source", "imgselect_short_png")])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.percentHeight = 100,
            e.source = "imgselect_short_png",
            e.percentWidth = 100,
            e
        },
        i._Image2_i = function() {
            var e = new eui.Image;
            return e.alpha = 0,
            e.percentHeight = 100,
            e.source = "imgselect_short_png",
            e.percentWidth = 100,
            e
        },
        i._Label1_i = function() {
            var e = new eui.Label;
            return e.fontFamily = "REEJI",
            e.horizontalCenter = 0,
            e.size = 24,
            e.text = "B站视频征集",
            e.textColor = 16777215,
            e.verticalCenter = 0,
            e
        },
        t
    } (eui.Skin),
    u = function(e) {
        function t() {
            e.call(this),
            this.skinParts = [],
            this.height = 72,
            this.width = 169,
            this.elementsContent = [this._Image2_i(), this._Label1_i()],
            this._Image1_i(),
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.AddItems("_Image1", "", 0, ""), new eui.SetProperty("_Image1", "source", "imgselect_short_png")])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.percentHeight = 100,
            e.source = "imgselect_short_png",
            e.percentWidth = 100,
            e
        },
        i._Image2_i = function() {
            var e = new eui.Image;
            return e.alpha = 0,
            e.percentHeight = 100,
            e.source = "imgselect_short_png",
            e.percentWidth = 100,
            e
        },
        i._Label1_i = function() {
            var e = new eui.Label;
            return e.fontFamily = "REEJI",
            e.horizontalCenter = 0,
            e.size = 24,
            e.text = "纪念手书",
            e.textColor = 16777215,
            e.verticalCenter = 0,
            e
        },
        t
    } (eui.Skin),
    _ = t.prototype;
    return _.bg0_i = function() {
        var e = new eui.Image;
        return this.bg0 = e,
        e.height = 640,
        e.horizontalCenter = 0,
        e.verticalCenter = 0,
        e.width = 1136,
        e
    },
    _.bg_i = function() {
        var e = new eui.Image;
        return this.bg = e,
        e.height = 640,
        e.horizontalCenter = 0,
        e.verticalCenter = 0,
        e.width = 1136,
        e
    },
    _._Group2_i = function() {
        var e = new eui.Group;
        return e.left = 0,
        e.right = 0,
        e.y = 412,
        e.elementsContent = [this._Image1_i(), this._Group1_i(), this.btnGo_i()],
        e
    },
    _._Image1_i = function() {
        var e = new eui.Image;
        return e.left = 0,
        e.right = 0,
        e.scaleY = .85,
        e.source = "anniversary_celebration_imgline_png",
        e.y = 112,
        e
    },
    _._Group1_i = function() {
        var e = new eui.Group;
        return e.right = 1,
        e.scaleX = .85,
        e.scaleY = .85,
        e.y = 112,
        e.layout = this._HorizontalLayout1_i(),
        e.elementsContent = [this.rb1_i(), this.rb2_i(), this.rb3_i(), this.rb4_i(), this.rb5_i(), this.rb6_i(), this.rb7_i()],
        e
    },
    _._HorizontalLayout1_i = function() {
        var e = new eui.HorizontalLayout;
        return e.gap = 0,
        e
    },
    _.rb1_i = function() {
        var e = new eui.RadioButton;
        return this.rb1 = e,
        e.groupName = "AnniversaryCelebration",
        e.value = "1",
        e.skinName = i,
        e
    },
    _.rb2_i = function() {
        var e = new eui.RadioButton;
        return this.rb2 = e,
        e.groupName = "AnniversaryCelebration",
        e.value = "2",
        e.skinName = n,
        e
    },
    _.rb3_i = function() {
        var e = new eui.RadioButton;
        return this.rb3 = e,
        e.groupName = "AnniversaryCelebration",
        e.value = "3",
        e.skinName = r,
        e
    },
    _.rb4_i = function() {
        var e = new eui.RadioButton;
        return this.rb4 = e,
        e.groupName = "AnniversaryCelebration",
        e.value = "4",
        e.skinName = a,
        e
    },
    _.rb5_i = function() {
        var e = new eui.RadioButton;
        return this.rb5 = e,
        e.groupName = "AnniversaryCelebration",
        e.value = "5",
        e.skinName = s,
        e
    },
    _.rb6_i = function() {
        var e = new eui.RadioButton;
        return this.rb6 = e,
        e.groupName = "AnniversaryCelebration",
        e.value = "6",
        e.skinName = o,
        e
    },
    _.rb7_i = function() {
        var e = new eui.RadioButton;
        return this.rb7 = e,
        e.groupName = "AnniversaryCelebration",
        e.value = "7",
        e.skinName = u,
        e
    },
    _.btnGo_i = function() {
        var e = new eui.Image;
        return this.btnGo = e,
        e.right = 11,
        e.source = "subscribe_gift_btnGo_png",
        e.y = 0,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/CommunityActivitySkin.exml"] = window.CommunityActivitySkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["bg", "btnGet"],
        this.height = 640,
        this.width = 1256,
        this.elementsContent = [this.bg_i(), this._Image1_i(), this._Group1_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i.bg_i = function() {
        var e = new eui.Image;
        return this.bg = e,
        e.horizontalCenter = 0,
        e.source = "subscribe_gift_bg_1_png",
        e.top = 0,
        e.verticalCenter = 0,
        e.visible = !0,
        e
    },
    i._Image1_i = function() {
        var e = new eui.Image;
        return e.left = 0,
        e.right = 0,
        e.scale9Grid = new egret.Rectangle(34, 213, 1183, 214),
        e.source = "latestRecommend_deco_png",
        e.visible = !1,
        e.y = 0,
        e
    },
    i._Group1_i = function() {
        var e = new eui.Group;
        return e.bottom = 59,
        e.right = 189,
        e.elementsContent = [this._Image2_i(), this.btnGet_i()],
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "subscribe_btnbg_png",
        e.visible = !1,
        e.x = -2,
        e.y = 7.41,
        e
    },
    i.btnGet_i = function() {
        var e = new eui.Image;
        return this.btnGet = e,
        e.height = 52,
        e.source = "subscribe_gift_btnGo_png",
        e.visible = !0,
        e.width = 180,
        e.x = 25.2,
        e.y = 0,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/LatestRecommendSkin.exml"] = window.LatestRecommendSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["bg", "btnGet"],
        this.height = 640,
        this.width = 1256,
        this.elementsContent = [this.bg_i(), this._Image1_i(), this._Group1_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i.bg_i = function() {
        var e = new eui.Image;
        return this.bg = e,
        e.height = 516,
        e.horizontalCenter = 0,
        e.verticalCenter = -20,
        e.visible = !0,
        e.width = 1280,
        e
    },
    i._Image1_i = function() {
        var e = new eui.Image;
        return e.left = 0,
        e.right = 0,
        e.scale9Grid = new egret.Rectangle(34, 213, 1183, 214),
        e.source = "latestRecommend_deco_png",
        e.visible = !0,
        e.y = 0,
        e
    },
    i._Group1_i = function() {
        var e = new eui.Group;
        return e.bottom = 59,
        e.right = 189,
        e.elementsContent = [this._Image2_i(), this.btnGet_i()],
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "subscribe_btnbg_png",
        e.visible = !1,
        e.x = -2,
        e.y = 7.41,
        e
    },
    i.btnGet_i = function() {
        var e = new eui.Image;
        return this.btnGet = e,
        e.height = 52,
        e.source = "subscribe_gift_btnGo_png",
        e.visible = !0,
        e.width = 180,
        e.x = 25.2,
        e.y = 0,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/SubscribeGiftSkin.exml"] = window.SubscribeGiftSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["bg", "title", "hasGot", "btnGet", "itemBg", "giftIcon", "giftCntTxt", "select_1", "select_2", "select_3"],
        this.height = 640,
        this.width = 1256,
        this.elementsContent = [this.bg_i(), this._Group1_i()]
    }
    __extends(t, e);
    var i = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["labelDisplay"],
            this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "subscribe_select_sign_png")]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.percentHeight = 100,
            e.source = "blank_png",
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
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "subscribe_select_sign_png")]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.percentHeight = 100,
            e.source = "blank_png",
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
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "subscribe_select_sign_png")]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.percentHeight = 100,
            e.source = "blank_png",
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
    a = t.prototype;
    return a.bg_i = function() {
        var e = new eui.Image;
        return this.bg = e,
        e.percentHeight = 100,
        e.source = "subscribe_gift_bg_1_png",
        e.percentWidth = 100,
        e.x = 0,
        e.y = 0,
        e
    },
    a._Group1_i = function() {
        var e = new eui.Group;
        return e.right = 10,
        e.y = 45.16,
        e.elementsContent = [this.title_i(), this._Image1_i(), this._Image2_i(), this._Image3_i(), this.hasGot_i(), this.btnGet_i(), this.itemBg_i(), this.giftIcon_i(), this.giftCntTxt_i(), this.select_1_i(), this._Image4_i(), this.select_2_i(), this._Image5_i(), this.select_3_i(), this._Image6_i()],
        e
    },
    a.title_i = function() {
        var e = new eui.Image;
        return this.title = e,
        e.source = "subscribe_title_1_png",
        e.x = 137.08,
        e.y = 0,
        e
    },
    a._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "subscribe_btnbg_png",
        e.x = 354.8,
        e.y = 409.25,
        e
    },
    a._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "subscribe_line_png",
        e.x = 442,
        e.y = 503.84,
        e
    },
    a._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "subscribe_line_png",
        e.x = 224,
        e.y = 503.84,
        e
    },
    a.hasGot_i = function() {
        var e = new eui.Image;
        return this.hasGot = e,
        e.height = 27,
        e.source = "subscribe_gift_hasGot_png",
        e.visible = !0,
        e.width = 112,
        e.x = 399,
        e.y = 420.84,
        e
    },
    a.btnGet_i = function() {
        var e = new eui.Image;
        return this.btnGet = e,
        e.height = 52,
        e.source = "subscribe_gift_btnGo_png",
        e.visible = !0,
        e.width = 180,
        e.x = 380,
        e.y = 402.84,
        e
    },
    a.itemBg_i = function() {
        var e = new eui.Image;
        return this.itemBg = e,
        e.height = 86,
        e.source = "subscribe_gift_itemBg_png",
        e.width = 86,
        e.x = 347,
        e.y = 295.84,
        e
    },
    a.giftIcon_i = function() {
        var e = new eui.Image;
        return this.giftIcon = e,
        e.height = 60,
        e.touchEnabled = !1,
        e.width = 60,
        e.x = 360,
        e.y = 308.84,
        e
    },
    a.giftCntTxt_i = function() {
        var e = new eui.Label;
        return this.giftCntTxt = e,
        e.fontFamily = "MFShangHei",
        e.size = 40,
        e.text = "Label",
        e.textAlign = "left",
        e.textColor = 16580432,
        e.x = 450,
        e.y = 320,
        e
    },
    a.select_1_i = function() {
        var e = new eui.RadioButton;
        return this.select_1 = e,
        e.height = 72,
        e.width = 232,
        e.x = 0,
        e.y = 503.84,
        e.skinName = i,
        e
    },
    a._Image4_i = function() {
        var e = new eui.Image;
        return e.height = 36,
        e.source = "sign_taptap_png",
        e.touchEnabled = !1,
        e.visible = !0,
        e.width = 139,
        e.x = 45,
        e.y = 517,
        e
    },
    a.select_2_i = function() {
        var e = new eui.RadioButton;
        return this.select_2 = e,
        e.height = 72,
        e.width = 232,
        e.x = 218,
        e.y = 503.84,
        e.skinName = n,
        e
    },
    a._Image5_i = function() {
        var e = new eui.Image;
        return e.height = 36,
        e.source = "sign_hykb_png",
        e.touchEnabled = !1,
        e.width = 140,
        e.x = 262,
        e.y = 517,
        e
    },
    a.select_3_i = function() {
        var e = new eui.RadioButton;
        return this.select_3 = e,
        e.height = 72,
        e.width = 232,
        e.x = 436,
        e.y = 503.84,
        e.skinName = r,
        e
    },
    a._Image6_i = function() {
        var e = new eui.Image;
        return e.height = 36,
        e.source = "sign_4399_png",
        e.touchEnabled = !1,
        e.visible = !0,
        e.width = 137,
        e.x = 482,
        e.y = 517,
        e
    },
    t
} (eui.Skin);