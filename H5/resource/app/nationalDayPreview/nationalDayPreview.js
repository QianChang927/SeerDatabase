var __reflect = this && this.__reflect ||
function(t, e, n) {
    t.__class__ = e,
    n ? n.push(e) : n = [e],
    t.__types__ = t.__types__ ? n.concat(t.__types__) : n
},
nationalDayPreview; !
function(t) {
    var e = function() {
        function t() {}
        return t.ACTIVITY_TEXTS = ["当流星划过夜空天际线，当指尖颤动梦想的琴弦，让我们一起跨越次元的隔阂，你与我，终将再相见。蒂朵、青啼、缔笙重磅回归！周年限定乐队、泳池皮肤、十三周年庆典冠名系列、K13冠名系列刻印均同步返场！另外还有蒂朵全新传说级皮肤呈现，敬请期待！", "斑驳与无暇仅是片面，残缺与完整不过刹那。远古血脉之下，根源的混沌、虚假的圣灵于此刻达成统一，向神明发起反叛。圣谕邪魇，震撼降临！", "仙鹤踏烟波，彩云遮拂晓。布德是群岛环绕的云迹之国，但在和平繁荣的外表下，北鸟临危受命，军队们正在集结，战争即将爆发。春风拂面净尘埃，万紫千红入画来。布德首领万里春•北鸟，即将登场！", "瓦普特号巡航于费尤，必须获得区域首领的通行许可。快来帮助一向使用武力解决问题的瓦普特船长进行魅力改造，前往东辉、南霜、北鸟所在的区域询问改造意见并获得通行许可，可获得瓦普特新装与精美奖励。", "国庆钻石金卡经典回归！花费对应数额的米币购买金卡，就可以获得更多比例的钻石，本次金卡的开放时间为9月28日~10月4日，共计7天。"],
        t
    } ();
    t.NationalDayConst = e,
    __reflect(e.prototype, "nationalDayPreview.NationalDayConst")
} (nationalDayPreview || (nationalDayPreview = {}));
var __reflect = this && this.__reflect ||
function(t, e, n) {
    t.__class__ = e,
    n ? n.push(e) : n = [e],
    t.__types__ = t.__types__ ? n.concat(t.__types__) : n
},
nationalDayPreview; !
function(t) {
    var e = function() {
        function t() {}
        return t.EVENT_PAGE_UPDATE = "NationalDayPreviewPageUpdate",
        t.EVENT_POPVIEW_CLOSED = "NationalDayPreviewPopViewClosed",
        t
    } ();
    t.NationalDayEvent = e,
    __reflect(e.prototype, "nationalDayPreview.NationalDayEvent")
} (nationalDayPreview || (nationalDayPreview = {}));
var __reflect = this && this.__reflect ||
function(t, e, n) {
    t.__class__ = e,
    n ? n.push(e) : n = [e],
    t.__types__ = t.__types__ ? n.concat(t.__types__) : n
},
__extends = this && this.__extends ||
function(t, e) {
    function n() {
        this.constructor = t
    }
    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
    n.prototype = e.prototype,
    t.prototype = new n
},
nationalDayPreview; !
function(t) {
    var e = function(e) {
        function n(t) {
            var n = e.call(this) || this;
            return n._currPageIndex = 0,
            n.skinName = nationalDayPopSkin,
            n.cacheAsBitmap = !0,
            n._currPageIndex = t,
            n
        }
        return __extends(n, e),
        n.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            ImageButtonUtil.add(this.btnClose, this.hide, this),
            this.txtPopview.text = t.NationalDayConst.ACTIVITY_TEXTS[this._currPageIndex - 1]
        },
        n.prototype.destroy = function() {
            e.prototype.destroy.call(this),
            ImageButtonUtil.removeAll(this),
            EventManager.dispatchEventWith(t.NationalDayEvent.EVENT_POPVIEW_CLOSED)
        },
        n
    } (PopView);
    t.NationalDayPop = e,
    __reflect(e.prototype, "nationalDayPreview.NationalDayPop")
} (nationalDayPreview || (nationalDayPreview = {}));
var __reflect = this && this.__reflect ||
function(t, e, n) {
    t.__class__ = e,
    n ? n.push(e) : n = [e],
    t.__types__ = t.__types__ ? n.concat(t.__types__) : n
},
__extends = this && this.__extends ||
function(t, e) {
    function n() {
        this.constructor = t
    }
    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
    n.prototype = e.prototype,
    t.prototype = new n
},
nationalDayPreview; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t.currPageIndex = 1,
            t.nextPageIndex = 1,
            t.autoFlipInterval = 7e3,
            t.hasGotArr = [],
            t.lastPosX = 0,
            t.skinName = nationalDayPreviewSkin,
            t
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            StatLogger.log("20230922版本系统功能", "国庆版本内容预告", "打开了国庆版本内容预告弹窗"),
            this.addEvent(),
            this.progress.itemRenderer = n,
            this.progress.dataProvider = new eui.ArrayCollection([1, 2, 3, 4, 5]),
            this.progress.validateNow(),
            this.refreshDataAndUpdate(),
            this.txtTitle.textFlow = [{
                text: "9月22日~9月27日，每日均可查看一次星辰带来的庆典资讯，查看后可获得",
                style: {
                    textColor: 3467253
                }
            },
            {
                text: "全面提升药剂*1、天赋改造药剂Ω*1",
                style: {
                    textColor: 16580432
                }
            }]
        },
        i.prototype.addEvent = function() {
            var e = this;
            EventManager.addEventListener(t.NationalDayEvent.EVENT_POPVIEW_CLOSED,
            function() {
                TimeDelayUtils.setInterval(e.rightPage, e.autoFlipInterval, e)
            },
            this),
            ImageButtonUtil.add(this.btnClose, this.onClose, this),
            ImageButtonUtil.add(this.btnLeft, this.onPageButtonTap, this),
            ImageButtonUtil.add(this.btnRight, this.onPageButtonTap, this),
            ImageButtonUtil.add(this.btnCheck,
            function() {
                var n = SystemTimerManager.sysBJDate,
                i = n.getDate(),
                a = i - 22 + 6;
                0 == KTool.getBit(e.info, a) ? SocketConnection.sendByQueue(41810, [17, e.currPageIndex],
                function() {
                    PopViewManager.getInstance().openView(new t.NationalDayPop(e.currPageIndex)),
                    e.refreshDataAndUpdate(),
                    StatLogger.log("20230922版本系统功能", "国庆版本内容预告", "点击查看了第" + e.currPageIndex + "个活动的资讯")
                }) : Alarm.show("今日查看资讯次数已使用。",
                function() {
                    TimeDelayUtils.setInterval(e.rightPage, e.autoFlipInterval, e)
                }),
                TimeDelayUtils.clearInterval(e.rightPage, e)
            },
            this),
            this.contentGrp.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this),
            TimeDelayUtils.setInterval(this.rightPage, this.autoFlipInterval, this)
        },
        i.prototype.onTouchBegin = function(t) {
            this.contentGrp.addEventListener(egret.TouchEvent.TOUCH_END, this.onEndDrag, this),
            TimeDelayUtils.setInterval(this.rightPage, this.autoFlipInterval, this),
            this.lastPosX = t.stageX
        },
        i.prototype.onEndDrag = function(t) {
            this.contentGrp.removeEventListener(egret.TouchEvent.TOUCH_END, this.onEndDrag, this),
            this.lastPosX - t.stageX > 60 ? this.rightPage() : this.lastPosX - t.stageX < -60 && this.leftPage()
        },
        i.prototype.onPageButtonTap = function(t) {
            switch (t.target) {
            case this.btnLeft:
                this.leftPage();
                break;
            case this.btnRight:
                this.rightPage()
            }
            TimeDelayUtils.setInterval(this.rightPage, this.autoFlipInterval, this)
        },
        i.prototype.leftPage = function() {
            this.nextPageIndex > 1 ? --this.nextPageIndex: 1 == this.nextPageIndex && (this.nextPageIndex = 5),
            this.flipAnim(!0),
            this.updateViews()
        },
        i.prototype.rightPage = function() {
            5 == this.nextPageIndex && (this.nextPageIndex = 0),
            ++this.nextPageIndex,
            this.flipAnim(!1),
            this.updateViews()
        },
        i.prototype.refreshDataAndUpdate = function() {
            var t = this;
            KTool.getMultiValue([123348],
            function(e) {
                t.info = e[0];
                for (var n = 1; 5 >= n; n++) {
                    var i = KTool.getBit(e[0], n);
                    t.hasGotArr[n - 1] = i
                }
                t.updateViews()
            })
        },
        i.prototype.updateViews = function() {
            this.btnCheck.visible = !this.hasGotArr[this.currPageIndex - 1];
            var e = !this.hasGotArr[this.nextPageIndex - 1];
            this.txtInfo.visible = this.txtInfobg.visible = !this.btnCheck.visible,
            this.txtInfo.text = t.NationalDayConst.ACTIVITY_TEXTS[this.currPageIndex - 1],
            this.unlock.source = "national_day_preview_unlock_" + this.currPageIndex + "_png",
            this.unlockCopy.source = "national_day_preview_unlock_" + this.nextPageIndex + "_png",
            this.unlock.visible = !this.btnCheck.visible,
            this.unlockCopy.visible = !e,
            this.lock.source = "national_day_preview_lock_" + this.currPageIndex + "_png",
            this.lockCopy.source = "national_day_preview_lock_" + this.nextPageIndex + "_png",
            this.lock.visible = this.btnCheck.visible,
            this.lockCopy.visible = e,
            EventManager.dispatchEventWith(t.NationalDayEvent.EVENT_PAGE_UPDATE, !1, {
                ind: this.currPageIndex - 1
            })
        },
        i.prototype.flipAnim = function(t) {
            var e = this;
            this.contentGrpCopy.visible = !0,
            this.contentGrpCopy.alpha = 0;
            var n = this.contentGrp.x,
            i = this.contentGrp.x,
            a = t ? 100 : -100;
            this.contentGrpCopy.x = i - a,
            this.btnLeft.touchEnabled = this.btnRight.touchEnabled = !1,
            gsap.to(this.contentGrpCopy, {
                x: n,
                alpha: 1,
                duration: .3
            }),
            gsap.to(this.contentGrp, {
                x: i + a,
                alpha: 0,
                duration: .3,
                onComplete: function() {
                    e.contentGrp.alpha = 1,
                    e.contentGrp.x = i,
                    e.contentGrpCopy.visible = !1,
                    e.btnLeft.touchEnabled = e.btnRight.touchEnabled = !0,
                    e.currPageIndex = e.nextPageIndex,
                    e.updateViews()
                }
            })
        },
        i.prototype.destroy = function() {
            e.prototype.destroy.call(this),
            this.contentGrp.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this)
        },
        i
    } (BaseModule);
    t.NationalDayPreview = e,
    __reflect(e.prototype, "nationalDayPreview.NationalDayPreview");
    var n = function(e) {
        function n() {
            var t = e.call(this) || this;
            return t.skinName = nationalDayPgsItemSkin,
            t.cacheAsBitmap = !0,
            t
        }
        return __extends(n, e),
        n.prototype.childrenCreated = function() {
            var n = this;
            e.prototype.childrenCreated.call(this),
            EventManager.addEventListener(t.NationalDayEvent.EVENT_PAGE_UPDATE,
            function(t) {
                var e = ~~t.data.ind;
                n.light.visible = n.itemIndex == e,
                n.dark.visible = !n.light.visible
            },
            this)
        },
        n
    } (BaseItemRenderer);
    t.NationalDayPgsItem = n,
    __reflect(n.prototype, "nationalDayPreview.NationalDayPgsItem")
} (nationalDayPreview || (nationalDayPreview = {}));
var __extends = this && this.__extends ||
function(t, e) {
    function n() {
        this.constructor = t
    }
    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
    n.prototype = e.prototype,
    t.prototype = new n
};
window.generateEUI = window.generateEUI || {},
generateEUI.paths = generateEUI.paths || {},
generateEUI.styles = void 0,
generateEUI.skins = {},
generateEUI.paths["resource/eui_skins/nationalDayPgsItemSkin.exml"] = window.nationalDayPgsItemSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["light", "dark"],
        this.elementsContent = [this.light_i(), this.dark_i()]
    }
    __extends(e, t);
    var n = e.prototype;
    return n.light_i = function() {
        var t = new eui.Image;
        return this.light = t,
        t.source = "national_day_preview_light_png",
        t.x = 0,
        t.y = 0,
        t
    },
    n.dark_i = function() {
        var t = new eui.Image;
        return this.dark = t,
        t.source = "national_day_preview_dark_png",
        t.x = 4.5,
        t.y = 4.5,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/nationalDayPopSkin.exml"] = window.nationalDayPopSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["popViewBg", "txtPopview", "btnClose"],
        this.elementsContent = [this.popViewBg_i(), this.txtPopview_i(), this.btnClose_i()]
    }
    __extends(e, t);
    var n = e.prototype;
    return n.popViewBg_i = function() {
        var t = new eui.Image;
        return this.popViewBg = t,
        t.source = "national_day_preview_popviewbg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    n.txtPopview_i = function() {
        var t = new eui.Label;
        return this.txtPopview = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "当流星划过夜空天际线，当指尖颤动梦想的琴弦，让我们一起跨越次元的隔阂，\n你与我，终将再相见。蒂朵、青啼、蒂笙重磅回归！周年限定乐队、泳池皮肤、\n十三周年庆典冠名系列、K13冠名系列刻印均同步返场！另外还有蒂朵全新传说级\n皮肤呈现，敬请期待！",
        t.textColor = 12441087,
        t.width = 645,
        t.x = 36,
        t.y = 41,
        t
    },
    n.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.source = "national_day_preview_btnclose_png",
        t.x = 679,
        t.y = 6,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/nationalDayPreviewPage.exml"] = window.nationalDayPreviewPageSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["unlock", "lock"],
        this.height = 380,
        this.width = 840,
        this.elementsContent = [this.unlock_i(), this.lock_i()]
    }
    __extends(e, t);
    var n = e.prototype;
    return n.unlock_i = function() {
        var t = new eui.Image;
        return this.unlock = t,
        t.source = "national_day_preview_unlock_1_png",
        t.x = 0,
        t.y = 0,
        t
    },
    n.lock_i = function() {
        var t = new eui.Image;
        return this.lock = t,
        t.source = "national_day_preview_lock_1_png",
        t.x = 0,
        t.y = 0,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/nationalDayPreviewSkin.exml"] = window.nationalDayPreviewSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "unlock", "lock", "contentGrp", "unlockCopy", "lockCopy", "contentGrpCopy", "txtInfobg", "txtInfo", "txtTitle", "title", "progress", "btnLeft", "btnRight", "btnCheck", "btnClose"],
        this.height = 561,
        this.width = 983,
        this.elementsContent = [this._Group1_i()]
    }
    __extends(e, t);
    var n = e.prototype;
    return n._Group1_i = function() {
        var t = new eui.Group;
        return t.touchEnabled = !1,
        t.touchThrough = !0,
        t.x = 0,
        t.y = -40,
        t.elementsContent = [this.bg_i(), this.contentGrp_i(), this.contentGrpCopy_i(), this.txtInfobg_i(), this.txtInfo_i(), this.txtTitle_i(), this.title_i(), this._Scroller1_i(), this.btnLeft_i(), this.btnRight_i(), this.btnCheck_i(), this.btnClose_i()],
        t
    },
    n.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "national_day_preview_bg_png",
        t.touchEnabled = !1,
        t.x = 12,
        t.y = 62,
        t
    },
    n.contentGrp_i = function() {
        var t = new eui.Group;
        return this.contentGrp = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.x = 71,
        t.y = 148,
        t.elementsContent = [this.unlock_i(), this.lock_i()],
        t
    },
    n.unlock_i = function() {
        var t = new eui.Image;
        return this.unlock = t,
        t.source = "national_day_preview_unlock_1_png",
        t.x = 0,
        t.y = 0,
        t
    },
    n.lock_i = function() {
        var t = new eui.Image;
        return this.lock = t,
        t.source = "national_day_preview_lock_1_png",
        t.x = 0,
        t.y = 0,
        t
    },
    n.contentGrpCopy_i = function() {
        var t = new eui.Group;
        return this.contentGrpCopy = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.touchThrough = !0,
        t.visible = !1,
        t.x = 71,
        t.y = 148,
        t.elementsContent = [this.unlockCopy_i(), this.lockCopy_i()],
        t
    },
    n.unlockCopy_i = function() {
        var t = new eui.Image;
        return this.unlockCopy = t,
        t.source = "national_day_preview_unlock_1_png",
        t.x = 0,
        t.y = 0,
        t
    },
    n.lockCopy_i = function() {
        var t = new eui.Image;
        return this.lockCopy = t,
        t.source = "national_day_preview_lock_1_png",
        t.x = 0,
        t.y = 0,
        t
    },
    n.txtInfobg_i = function() {
        var t = new eui.Image;
        return this.txtInfobg = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "national_day_preview_txtinfobg_png",
        t.x = 79,
        t.y = 428,
        t
    },
    n.txtInfo_i = function() {
        var t = new eui.Label;
        return this.txtInfo = t,
        t.fontFamily = "MFShangHei",
        t.scaleX = 1,
        t.scaleY = 1,
        t.size = 16,
        t.text = "当流星划过夜空天际线，当指尖颤动梦想的琴弦，让我们一起跨越次元的隔阂，你\n与我，终将再相见。蒂朵、青啼、蒂笙重磅回归！周年限定乐队、泳池皮肤、十三\n周年庆典冠名系列、K13冠名系列刻印均同步返场！另外还有蒂朵全新传说级皮肤呈\n现，敬请期待！",
        t.textColor = 12441087,
        t.width = 589,
        t.x = 98.00000000000003,
        t.y = 439,
        t
    },
    n.txtTitle_i = function() {
        var t = new eui.Label;
        return this.txtTitle = t,
        t.fontFamily = "MFShangHei",
        t.scaleX = 1,
        t.scaleY = 1,
        t.size = 17,
        t.textColor = 3467253,
        t.x = 70,
        t.y = 123,
        t
    },
    n.title_i = function() {
        var t = new eui.Image;
        return this.title = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "national_day_preview_title_png",
        t.touchEnabled = !1,
        t.x = 188.00000000000003,
        t.y = 0,
        t
    },
    n._Scroller1_i = function() {
        var t = new eui.Scroller;
        return t.height = 15,
        t.scaleX = 1,
        t.scaleY = 1,
        t.width = 249,
        t.x = 365,
        t.y = 533.0000000000001,
        t.viewport = this.progress_i(),
        t
    },
    n.progress_i = function() {
        var t = new eui.List;
        return this.progress = t,
        t.height = 200,
        t.width = 200,
        t.x = 36,
        t.y = 74,
        t.layout = this._HorizontalLayout1_i(),
        t
    },
    n._HorizontalLayout1_i = function() {
        var t = new eui.HorizontalLayout;
        return t.gap = 0,
        t
    },
    n.btnLeft_i = function() {
        var t = new eui.Image;
        return this.btnLeft = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "national_day_preview_btnleft_png",
        t.x = 0,
        t.y = 293,
        t
    },
    n.btnRight_i = function() {
        var t = new eui.Image;
        return this.btnRight = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "national_day_preview_btnright_png",
        t.x = 930.0000000000001,
        t.y = 293,
        t
    },
    n.btnCheck_i = function() {
        var t = new eui.Image;
        return this.btnCheck = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "national_day_preview_btncheck_png",
        t.x = 704,
        t.y = 426,
        t
    },
    n.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "national_day_preview_btnclose_png",
        t.x = 900.9999999999999,
        t.y = 81.00000000000003,
        t
    },
    e
} (eui.Skin);