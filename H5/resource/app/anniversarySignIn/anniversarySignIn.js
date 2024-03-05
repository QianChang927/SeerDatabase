var __reflect = this && this.__reflect ||
function(i, t, e) {
    i.__class__ = t,
    e ? e.push(t) : e = [t],
    i.__types__ = i.__types__ ? e.concat(i.__types__) : e
},
__extends = this && this.__extends ||
function(i, t) {
    function e() {
        this.constructor = i
    }
    for (var n in t) t.hasOwnProperty(n) && (i[n] = t[n]);
    e.prototype = t.prototype,
    i.prototype = new e
},
anniversarySignIn; !
function(i) {
    var t = function(i) {
        function t() {
            var t = i.call(this) || this;
            return t.defaultIconArr = [1, 2, 3, 2, 1, 3, 4],
            t.prizeMap = [{
                briefCnt: 2,
                items: [{
                    id: 1725268,
                    cnt: 2
                }]
            },
            {
                briefCnt: 3,
                items: [{
                    id: 1725267,
                    cnt: 3
                }]
            },
            {
                briefCnt: 3,
                items: [{
                    id: 1400153,
                    cnt: 3
                },
                {
                    id: 1400152,
                    cnt: 3
                }]
            },
            {
                briefCnt: 3,
                items: [{
                    id: 1725267,
                    cnt: 3
                }]
            },
            {
                briefCnt: 3,
                items: [{
                    id: 1725268,
                    cnt: 3
                }]
            },
            {
                briefCnt: 4,
                items: [{
                    id: 1400153,
                    cnt: 4
                },
                {
                    id: 1400152,
                    cnt: 4
                }]
            },
            {
                briefCnt: 4,
                items: [{
                    id: 1725267,
                    cnt: 4
                },
                {
                    id: 1725268,
                    cnt: 4
                },
                {
                    id: 1400153,
                    cnt: 4
                }]
            },
            {
                briefCnt: 2,
                items: [{
                    id: 1725268,
                    cnt: 2
                }]
            },
            {
                briefCnt: 3,
                items: [{
                    id: 1725267,
                    cnt: 3
                }]
            },
            {
                briefCnt: 3,
                items: [{
                    id: 1400153,
                    cnt: 3
                },
                {
                    id: 1400152,
                    cnt: 3
                }]
            },
            {
                briefCnt: 4,
                items: [{
                    id: 1725267,
                    cnt: 4
                }]
            },
            {
                briefCnt: 4,
                items: [{
                    id: 1725268,
                    cnt: 4
                }]
            },
            {
                briefCnt: 5,
                items: [{
                    id: 1400153,
                    cnt: 5
                },
                {
                    id: 1400152,
                    cnt: 5
                }]
            },
            {
                briefCnt: 5,
                items: [{
                    id: 1725267,
                    cnt: 5
                },
                {
                    id: 1725268,
                    cnt: 5
                },
                {
                    id: 1400153,
                    cnt: 5
                }]
            },
            {
                briefCnt: 3,
                items: [{
                    id: 1725268,
                    cnt: 3
                }]
            },
            {
                briefCnt: 4,
                items: [{
                    id: 1725267,
                    cnt: 4
                }]
            },
            {
                briefCnt: 5,
                items: [{
                    id: 1400153,
                    cnt: 5
                },
                {
                    id: 1400152,
                    cnt: 5
                }]
            },
            {
                briefCnt: 5,
                items: [{
                    id: 1725267,
                    cnt: 5
                }]
            },
            {
                briefCnt: 5,
                items: [{
                    id: 1725268,
                    cnt: 5
                }]
            },
            {
                briefCnt: 6,
                items: [{
                    id: 1400153,
                    cnt: 6
                },
                {
                    id: 1400152,
                    cnt: 6
                }]
            },
            {
                briefCnt: 6,
                items: [{
                    id: 1725267,
                    cnt: 6
                },
                {
                    id: 1725268,
                    cnt: 6
                },
                {
                    id: 1400153,
                    cnt: 6
                }]
            },
            {
                briefCnt: 3,
                items: [{
                    id: 1725268,
                    cnt: 3
                }]
            },
            {
                briefCnt: 4,
                items: [{
                    id: 1725267,
                    cnt: 4
                }]
            },
            {
                briefCnt: 5,
                items: [{
                    id: 1400153,
                    cnt: 5
                },
                {
                    id: 1400152,
                    cnt: 5
                }]
            },
            {
                briefCnt: 5,
                items: [{
                    id: 1725267,
                    cnt: 5
                }]
            },
            {
                briefCnt: 5,
                items: [{
                    id: 1725268,
                    cnt: 5
                }]
            },
            {
                briefCnt: 6,
                items: [{
                    id: 1400153,
                    cnt: 6
                },
                {
                    id: 1400152,
                    cnt: 6
                }]
            },
            {
                briefCnt: 6,
                items: [{
                    id: 1725267,
                    cnt: 6
                },
                {
                    id: 1725268,
                    cnt: 6
                },
                {
                    id: 1400153,
                    cnt: 6
                }]
            }],
            t.barLenArr = [[1, 27], [114, 142], [230, 258], [346, 373], [383, 383]],
            t.skinName = "AnniversarySignInSkin",
            t
        }
        return __extends(t, i),
        t.prototype.childrenCreated = function() {
            var t = this;
            this.bbg.pixelHitTest = !0,
            EventManager.once(ModuleEvent.OPEN_MODULE,
            function() {
                LevelManager.appLevel.getChildByName("sp").addEventListener(egret.TouchEvent.TOUCH_TAP, t.onClose, t)
            },
            this),
            ImageButtonUtil.add(this.closeBtn, this.onClose, this),
            i.prototype.childrenCreated.call(this),
            KTool.getMultiValue([121580, 201580],
            function(i) {
                t.sumSignDay = i[0],
                t.todayHasGot = 1 == i[1],
                t.initPanel(),
                t.initAnim()
            })
        },
        t.prototype.getTodayPrize = function() {
            SocketConnection.send(41388, [63, this.sumSignDay + 1]),
            this["itemIcon" + this.sumSignDay].source = "anniversary_sign_in_hasSigned_png",
            this["itemCnt" + this.sumSignDay].visible = !1,
            ImageButtonUtil.remove(this.getTodayBtn);
            for (var i = 0; 3 > i; i++) this["hasGot" + (i + 1)].visible = this["prizeBg" + (i + 1)].visible;
            this.canGet.visible = !1,
            this.todayHasGot = !0,
            this.sumSignDay++,
            this.todayHighlight.visible = !1,
            EventManager.addEventListener(AwardEvent.CLOSE_AWARD_DIALOG, this.awardCallback, this)
        },
        t.prototype.awardCallback = function() {
            var i = this;
            EventManager.removeEventListener(AwardEvent.CLOSE_AWARD_DIALOG, this.awardCallback, this),
            this.showGetAnim(function() {
                i.spBar.height = i.calBarLen(),
                i.showSPAnims()
            })
        },
        t.prototype.initPanel = function() {
            var i = this;
            this.hasGot1.touchEnabled = !1,
            this.hasGot2.touchEnabled = !1,
            this.hasGot3.touchEnabled = !1,
            ImageButtonUtil.add(this.getTodayBtn,
            function() {
                i.todayHasGot || i.sumSignDay != i.curShowIdx || (StatLogger.log("20230602版本系统功能", "周年庆签到", "点击下方区域领取今日奖励"), i.getTodayPrize())
            },
            this);
            for (var t = function(t) {
                var n = e["itemIcon" + t],
                s = e["itemCnt" + t];
                e.sumSignDay >= t + 1 ? (n.source = "anniversary_sign_in_hasSigned_png", s.text = "", ImageButtonUtil.add(n,
                function() {
                    i.showPrize(t)
                },
                e, !0, !1)) : (n.source = "anniversary_sign_in_itemIcon" + e.defaultIconArr[t % 7] + "_png", ImageButtonUtil.add(n,
                function() {
                    i.showPrize(t)
                },
                e, !0, !1), s.text = e.prizeMap[t].briefCnt)
            },
            e = this, n = 0; 27 >= n; n++) t(n);
            var s = this.sumSignDay;
            this.todayHasGot && (s = this.sumSignDay - 1),
            27 >= s && 0 == this.todayHasGot ? ((s + 1) % 7 == 0 ? this.todayHighlight.source = "anniversary_sign_in_selectFrame2_png": this.todayHighlight.source = "anniversary_sign_in_selectFrame_png", this.todayHighlight.x = this["itemIcon" + s].x - 44, this.todayHighlight.y = this["itemIcon" + s].y - 44) : this.todayHighlight.visible = !1,
            this.showPrize(s, !0),
            ImageButtonUtil.add(this.prizeIcon1,
            function() {
                StatLogger.log("20230602版本系统功能", "周年庆签到", "点击下方区域查看道具tips"),
                tipsPop.TipsPop.openItemPop({
                    id: i.prizeIcon1.itemid
                })
            },
            this, !0, !1),
            ImageButtonUtil.add(this.prizeIcon2,
            function() {
                StatLogger.log("20230602版本系统功能", "周年庆签到", "点击下方区域查看道具tips"),
                tipsPop.TipsPop.openItemPop({
                    id: i.prizeIcon2.itemid
                })
            },
            this, !0, !1),
            ImageButtonUtil.add(this.prizeIcon3,
            function() {
                StatLogger.log("20230602版本系统功能", "周年庆签到", "点击下方区域查看道具tips"),
                tipsPop.TipsPop.openItemPop({
                    id: i.prizeIcon3.itemid
                })
            },
            this, !0, !1),
            this.spBar.height = this.calBarLen();
            for (var r = function(t) {
                ImageButtonUtil.add(a["sp_" + t],
                function() {
                    i.getSPPrize(t)
                },
                a, !1, !1)
            },
            a = this, n = 1; 4 >= n; n++) r(n);
            this.hasGotSP_1.visible = null != core.AvatarDataMgr.GetInstance().GetHeadDataById(34),
            this.hasGotSP_2.visible = null != core.AvatarDataMgr.GetInstance().GetHeadDataById(35),
            this.hasGotSP_3.visible = null != core.AvatarDataMgr.GetInstance().GetHeadDataById(36),
            this.hasGotSP_4.visible = null != core.AvatarDataMgr.GetInstance().GetHeadFrameDataById(37)
        },
        t.prototype.calBarLen = function() {
            var i = Math.floor(this.sumSignDay / 7),
            t = this.sumSignDay / 7 - i,
            e = this.barLenArr[i];
            return this.lerp(e[0], e[1], t)
        },
        t.prototype.lerp = function(i, t, e) {
            return i + (t - i) * e
        },
        t.prototype.getSPPrize = function(i) {
            if (!this["hasGotSP_" + i].visible) if (this.sumSignDay < 7 * i) switch (i) {
            case 1:
                BubblerManager.getInstance().showText("累积签到7天可领取头像“穹明拾光”");
                break;
            case 2:
                BubblerManager.getInstance().showText("累积签到14天可领取头像“瓏腾四海”");
                break;
            case 3:
                BubblerManager.getInstance().showText("累积签到21天可领取头像“悍武一方”");
                break;
            case 4:
                BubblerManager.getInstance().showText("累积签到28天可领取14周年纪念头像框")
            } else SocketConnection.send(41388, [63, 30 + i]),
            this["hasGotSP_" + i].visible = !0,
            ImageButtonUtil.remove(this["sp_" + i]),
            this.hideSPAnim(i),
            StatLogger.log("20230602版本系统功能", "周年庆签到", "点击左侧领取额外奖励")
        },
        t.prototype.showPrize = function(i, t) {
            void 0 === t && (t = !1),
            i > 27 && (i = 27),
            this.curShowIdx = i,
            this.selectFrame.x = this["itemIcon" + i].x - 44,
            this.selectFrame.y = this["itemIcon" + i].y - 44;
            var e = this.prizeMap[i].items;
            this.canGet.x = 545;
            for (var n = 0; 3 > n; n++) n >= e.length ? (this["prizeBg" + (n + 1)].visible = !1, this["hasGot" + (n + 1)].visible = !1, this["prizeCnt" + (n + 1)].visible = !1, this["prizeIcon" + (n + 1)].visible = !1) : (this.canGet.x += 85, this["hasGot" + (n + 1)].visible = !1, this["prizeBg" + (n + 1)].visible = !0, this["prizeCnt" + (n + 1)].visible = !0, this["prizeIcon" + (n + 1)].visible = !0, this["prizeIcon" + (n + 1)].source = this.getItemIcon(e[n].id), this["prizeCnt" + (n + 1)].text = e[n].cnt, this["prizeIcon" + (n + 1)].itemid = e[n].id);
            if (this.sumSignDay >= i + 1) for (var n = 0; 3 > n; n++) this["hasGot" + (n + 1)].visible = this["prizeBg" + (n + 1)].visible;
            t || (this.todayHasGot || this.sumSignDay != i ? StatLogger.log("20230602版本系统功能", "周年庆签到", "点击上方切换查看选中奖励格") : (StatLogger.log("20230602版本系统功能", "周年庆签到", "点击上方道具框领取今日奖励"), this.getTodayPrize())),
            this.sumSignDay <= i ? (this.canGet.visible = !0, this.canGet.source = this.todayHasGot || this.sumSignDay + ~~this.todayHasGot != i ? this.todayHasGot ? "anniversary_sign_in_todayHasGot_png": "anniversary_sign_in_todayHasNotGot_png": "anniversary_sign_in_canGet_png") : this.canGet.visible = !1,
            this.todayHasGot && this.sumSignDay - 1 == i && (this.canGet.visible = !0, this.canGet.source = "anniversary_sign_in_todayHasGot_png"),
            this.todayHasGot && this.sumSignDay == i + 1 && (this.canGet.visible = !1)
        },
        t.prototype.getItemIcon = function(i) {
            return 1725268 == i ? "anniversary_sign_in_itemIcon1_png": 1725267 == i ? "anniversary_sign_in_itemIcon2_png": ClientConfig.getItemIcon(i)
        },
        t.prototype.initAnim = function() {
            this._anim = SpineUtil.createAnimate("An_ce_sign_in"),
            this._anim.touchEnabled = this._anim.touchChildren = !1,
            this.addChildAt(this._anim, this.numChildren - 1),
            this._anim.x = 530,
            this._anim.y = 282,
            this.showSPAnims()
        },
        t.prototype.showGetAnim = function(i) {
            var t = this,
            e = this._anim.play("hit", 1);
            this.touchEnabled = !1,
            e.waitPlayEnd().then(function() {
                i(),
                t.touchEnabled = !0
            })
        },
        t.prototype.showSPAnims = function() {
            for (var i = 1; 4 >= i; i++) this["hasGotSP_" + i].visible || this.sumSignDay >= 7 * i && this.showSPAnim(i)
        },
        t.prototype.showSPAnim = function(i) {
            null == this["spAnim" + i] && (this["spAnim" + i] = SpineUtil.createAnimate("An_ce_sign_in"), this["spAnim" + i].touchEnabled = this["spAnim" + i].touchChildren = !1, this.addChildAt(this["spAnim" + i], this.numChildren), this["spAnim" + i].x = 150, this["spAnim" + i].y = 150 + 115 * (i - 1) + 2, this["spAnim" + i].play("idle"))
        },
        t.prototype.hideSPAnim = function(i) {
            null != this["spAnim" + i] && (this["spAnim" + i].stopAll(), this["spAnim" + i].visible = !1)
        },
        t
    } (BaseModule);
    i.AnniversarySignIn = t,
    __reflect(t.prototype, "anniversarySignIn.AnniversarySignIn")
} (anniversarySignIn || (anniversarySignIn = {}));
var __extends = this && this.__extends ||
function(i, t) {
    function e() {
        this.constructor = i
    }
    for (var n in t) t.hasOwnProperty(n) && (i[n] = t[n]);
    e.prototype = t.prototype,
    i.prototype = new e
};
window.generateEUI = window.generateEUI || {},
generateEUI.paths = generateEUI.paths || {},
generateEUI.styles = void 0,
generateEUI.skins = {},
generateEUI.paths["resource/eui_skins/AnniversarySignInSkin.exml"] = window.AnniversarySignInSkin = function(i) {
    function t() {
        i.call(this),
        this.skinParts = ["bbg", "canGet", "getTodayBtn", "prizeBg1", "prizeBg2", "prizeBg3", "prizeIcon1", "prizeIcon2", "prizeIcon3", "prizeCnt1", "prizeCnt2", "prizeCnt3", "hasGot1", "hasGot2", "hasGot3", "closeBtn", "todayHighlight", "itemIcon0", "itemIcon1", "itemIcon2", "itemIcon3", "itemIcon4", "itemIcon5", "itemIcon6", "itemIcon7", "itemIcon8", "itemIcon9", "itemIcon10", "itemIcon11", "itemIcon12", "itemIcon13", "itemIcon14", "itemIcon15", "itemIcon16", "itemIcon17", "itemIcon18", "itemIcon19", "itemIcon20", "itemIcon21", "itemIcon22", "itemIcon23", "itemIcon24", "itemIcon25", "itemIcon26", "itemIcon27", "itemCnt0", "itemCnt1", "itemCnt2", "itemCnt3", "itemCnt4", "itemCnt5", "itemCnt6", "itemCnt7", "itemCnt8", "itemCnt9", "itemCnt10", "itemCnt11", "itemCnt12", "itemCnt13", "itemCnt14", "itemCnt15", "itemCnt16", "itemCnt17", "itemCnt18", "itemCnt19", "itemCnt20", "itemCnt21", "itemCnt22", "itemCnt23", "itemCnt24", "itemCnt25", "itemCnt26", "itemCnt27", "selectFrame", "items", "spBar", "sp_1", "sp_2", "sp_3", "sp_4", "hasGotSP_1", "hasGotSP_2", "hasGotSP_3", "hasGotSP_4"],
        this.height = 597,
        this.width = 1094.793,
        this.elementsContent = [this._Image1_i(), this.bbg_i(), this._Image2_i(), this._Image3_i(), this.canGet_i(), this._Group1_i(), this.closeBtn_i(), this.items_i(), this._Group2_i(), this._Group3_i()]
    }
    __extends(t, i);
    var e = t.prototype;
    return e._Image1_i = function() {
        var i = new eui.Image;
        return i.height = 58,
        i.source = "anniversary_sign_in_desc_png",
        i.width = 126,
        i.x = 972.949,
        i.y = 409.055,
        i
    },
    e.bbg_i = function() {
        var i = new eui.Image;
        return this.bbg = i,
        i.source = "anniversary_sign_in_bbg_png",
        i.x = 37,
        i.y = 0,
        i
    },
    e._Image2_i = function() {
        var i = new eui.Image;
        return i.height = 56,
        i.source = "anniversary_sign_in_desc2_png",
        i.width = 112,
        i.x = 4.92,
        i.y = 536.116,
        i
    },
    e._Image3_i = function() {
        var i = new eui.Image;
        return i.source = "anniversary_sign_in_word_png",
        i.x = 349.956,
        i.y = 462.489,
        i
    },
    e.canGet_i = function() {
        var i = new eui.Image;
        return this.canGet = i,
        i.height = 18,
        i.source = "anniversary_sign_in_canGet_png",
        i.visible = !0,
        i.x = 800,
        i.y = 519,
        i
    },
    e._Group1_i = function() {
        var i = new eui.Group;
        return i.visible = !0,
        i.x = 535,
        i.y = 459,
        i.elementsContent = [this.getTodayBtn_i(), this.prizeBg1_i(), this.prizeBg2_i(), this.prizeBg3_i(), this.prizeIcon1_i(), this.prizeIcon2_i(), this.prizeIcon3_i(), this.prizeCnt1_i(), this.prizeCnt2_i(), this.prizeCnt3_i(), this.hasGot1_i(), this.hasGot2_i(), this.hasGot3_i()],
        i
    },
    e.getTodayBtn_i = function() {
        var i = new eui.Rect;
        return this.getTodayBtn = i,
        i.fillAlpha = 0,
        i.height = 99.429,
        i.scaleX = 1,
        i.scaleY = 1,
        i.visible = !0,
        i.width = 751.342,
        i.x = -277.354,
        i.y = -5.414,
        i
    },
    e.prizeBg1_i = function() {
        var i = new eui.Image;
        return this.prizeBg1 = i,
        i.height = 78,
        i.source = "anniversary_sign_in_prizeBg1_png",
        i.visible = !0,
        i.width = 78,
        i.x = 0,
        i.y = 0,
        i
    },
    e.prizeBg2_i = function() {
        var i = new eui.Image;
        return this.prizeBg2 = i,
        i.height = 78,
        i.source = "anniversary_sign_in_prizeBg2_png",
        i.width = 78,
        i.x = 90,
        i.y = 0,
        i
    },
    e.prizeBg3_i = function() {
        var i = new eui.Image;
        return this.prizeBg3 = i,
        i.height = 78,
        i.source = "anniversary_sign_in_prizeBg3_png",
        i.width = 78,
        i.x = 180,
        i.y = 0,
        i
    },
    e.prizeIcon1_i = function() {
        var i = new eui.Image;
        return this.prizeIcon1 = i,
        i.height = 66,
        i.source = "anniversary_sign_in_itemIcon1_png",
        i.visible = !0,
        i.width = 66,
        i.x = 6,
        i.y = 7,
        i
    },
    e.prizeIcon2_i = function() {
        var i = new eui.Image;
        return this.prizeIcon2 = i,
        i.height = 66,
        i.source = "anniversary_sign_in_itemIcon1_png",
        i.visible = !0,
        i.width = 66,
        i.x = 96,
        i.y = 7,
        i
    },
    e.prizeIcon3_i = function() {
        var i = new eui.Image;
        return this.prizeIcon3 = i,
        i.height = 66,
        i.source = "anniversary_sign_in_itemIcon1_png",
        i.visible = !0,
        i.width = 66,
        i.x = 186,
        i.y = 7,
        i
    },
    e.prizeCnt1_i = function() {
        var i = new eui.Label;
        return this.prizeCnt1 = i,
        i.fontFamily = "MFShangHei",
        i.size = 16,
        i.text = "3",
        i.textAlign = "center",
        i.textColor = 5772544,
        i.touchEnabled = !1,
        i.x = 63.76,
        i.y = 60,
        i
    },
    e.prizeCnt2_i = function() {
        var i = new eui.Label;
        return this.prizeCnt2 = i,
        i.fontFamily = "MFShangHei",
        i.size = 16,
        i.text = "3",
        i.textAlign = "center",
        i.textColor = 5772544,
        i.touchEnabled = !1,
        i.x = 153.76,
        i.y = 60,
        i
    },
    e.prizeCnt3_i = function() {
        var i = new eui.Label;
        return this.prizeCnt3 = i,
        i.fontFamily = "MFShangHei",
        i.size = 16,
        i.text = "3",
        i.textAlign = "center",
        i.textColor = 5772544,
        i.touchEnabled = !1,
        i.x = 243.76,
        i.y = 60,
        i
    },
    e.hasGot1_i = function() {
        var i = new eui.Image;
        return this.hasGot1 = i,
        i.height = 74,
        i.source = "anniversary_sign_in_hasGot_png",
        i.visible = !1,
        i.width = 74,
        i.x = 2,
        i.y = 2,
        i
    },
    e.hasGot2_i = function() {
        var i = new eui.Image;
        return this.hasGot2 = i,
        i.height = 74,
        i.source = "anniversary_sign_in_hasGot_png",
        i.visible = !1,
        i.width = 74,
        i.x = 92,
        i.y = 2,
        i
    },
    e.hasGot3_i = function() {
        var i = new eui.Image;
        return this.hasGot3 = i,
        i.height = 74,
        i.source = "anniversary_sign_in_hasGot_png",
        i.visible = !1,
        i.width = 74,
        i.x = 182,
        i.y = 2,
        i
    },
    e.closeBtn_i = function() {
        var i = new eui.Image;
        return this.closeBtn = i,
        i.height = 36,
        i.source = "anniversary_sign_in_close_png",
        i.width = 38,
        i.x = 970,
        i.y = 80,
        i
    },
    e.items_i = function() {
        var i = new eui.Group;
        return this.items = i,
        i.x = 304,
        i.y = 116,
        i.elementsContent = [this.todayHighlight_i(), this.itemIcon0_i(), this.itemIcon1_i(), this.itemIcon2_i(), this.itemIcon3_i(), this.itemIcon4_i(), this.itemIcon5_i(), this.itemIcon6_i(), this.itemIcon7_i(), this.itemIcon8_i(), this.itemIcon9_i(), this.itemIcon10_i(), this.itemIcon11_i(), this.itemIcon12_i(), this.itemIcon13_i(), this.itemIcon14_i(), this.itemIcon15_i(), this.itemIcon16_i(), this.itemIcon17_i(), this.itemIcon18_i(), this.itemIcon19_i(), this.itemIcon20_i(), this.itemIcon21_i(), this.itemIcon22_i(), this.itemIcon23_i(), this.itemIcon24_i(), this.itemIcon25_i(), this.itemIcon26_i(), this.itemIcon27_i(), this.itemCnt0_i(), this.itemCnt1_i(), this.itemCnt2_i(), this.itemCnt3_i(), this.itemCnt4_i(), this.itemCnt5_i(), this.itemCnt6_i(), this.itemCnt7_i(), this.itemCnt8_i(), this.itemCnt9_i(), this.itemCnt10_i(), this.itemCnt11_i(), this.itemCnt12_i(), this.itemCnt13_i(), this.itemCnt14_i(), this.itemCnt15_i(), this.itemCnt16_i(), this.itemCnt17_i(), this.itemCnt18_i(), this.itemCnt19_i(), this.itemCnt20_i(), this.itemCnt21_i(), this.itemCnt22_i(), this.itemCnt23_i(), this.itemCnt24_i(), this.itemCnt25_i(), this.itemCnt26_i(), this.itemCnt27_i(), this.selectFrame_i()],
        i
    },
    e.todayHighlight_i = function() {
        var i = new eui.Image;
        return this.todayHighlight = i,
        i.height = 88,
        i.scale9Grid = new egret.Rectangle(20, 20, 1, 1),
        i.source = "anniversary_sign_in_selectFrame_png",
        i.touchEnabled = !1,
        i.visible = !0,
        i.width = 88,
        i.x = -11,
        i.y = -11,
        i
    },
    e.itemIcon0_i = function() {
        var i = new eui.Image;
        return this.itemIcon0 = i,
        i.height = 66,
        i.source = "anniversary_sign_in_itemIcon1_png",
        i.visible = !0,
        i.width = 66,
        i.x = 0,
        i.y = 0,
        i
    },
    e.itemIcon1_i = function() {
        var i = new eui.Image;
        return this.itemIcon1 = i,
        i.height = 66,
        i.source = "anniversary_sign_in_itemIcon1_png",
        i.visible = !0,
        i.width = 66,
        i.x = 95,
        i.y = 0,
        i
    },
    e.itemIcon2_i = function() {
        var i = new eui.Image;
        return this.itemIcon2 = i,
        i.height = 66,
        i.source = "anniversary_sign_in_itemIcon1_png",
        i.visible = !0,
        i.width = 66,
        i.x = 189,
        i.y = 0,
        i
    },
    e.itemIcon3_i = function() {
        var i = new eui.Image;
        return this.itemIcon3 = i,
        i.height = 66,
        i.source = "anniversary_sign_in_itemIcon1_png",
        i.visible = !0,
        i.width = 66,
        i.x = 284,
        i.y = 0,
        i
    },
    e.itemIcon4_i = function() {
        var i = new eui.Image;
        return this.itemIcon4 = i,
        i.height = 66,
        i.source = "anniversary_sign_in_itemIcon1_png",
        i.visible = !0,
        i.width = 66,
        i.x = 378,
        i.y = 0,
        i
    },
    e.itemIcon5_i = function() {
        var i = new eui.Image;
        return this.itemIcon5 = i,
        i.height = 66,
        i.source = "anniversary_sign_in_itemIcon1_png",
        i.visible = !0,
        i.width = 66,
        i.x = 473,
        i.y = 0,
        i
    },
    e.itemIcon6_i = function() {
        var i = new eui.Image;
        return this.itemIcon6 = i,
        i.height = 66,
        i.source = "anniversary_sign_in_itemIcon1_png",
        i.visible = !0,
        i.width = 66,
        i.x = 567,
        i.y = 0,
        i
    },
    e.itemIcon7_i = function() {
        var i = new eui.Image;
        return this.itemIcon7 = i,
        i.height = 66,
        i.source = "anniversary_sign_in_itemIcon1_png",
        i.visible = !0,
        i.width = 66,
        i.x = 0,
        i.y = 83,
        i
    },
    e.itemIcon8_i = function() {
        var i = new eui.Image;
        return this.itemIcon8 = i,
        i.height = 66,
        i.source = "anniversary_sign_in_itemIcon1_png",
        i.visible = !0,
        i.width = 66,
        i.x = 95,
        i.y = 83,
        i
    },
    e.itemIcon9_i = function() {
        var i = new eui.Image;
        return this.itemIcon9 = i,
        i.height = 66,
        i.source = "anniversary_sign_in_itemIcon1_png",
        i.visible = !0,
        i.width = 66,
        i.x = 189,
        i.y = 83,
        i
    },
    e.itemIcon10_i = function() {
        var i = new eui.Image;
        return this.itemIcon10 = i,
        i.height = 66,
        i.source = "anniversary_sign_in_itemIcon1_png",
        i.visible = !0,
        i.width = 66,
        i.x = 284,
        i.y = 83,
        i
    },
    e.itemIcon11_i = function() {
        var i = new eui.Image;
        return this.itemIcon11 = i,
        i.height = 66,
        i.source = "anniversary_sign_in_itemIcon1_png",
        i.visible = !0,
        i.width = 66,
        i.x = 378,
        i.y = 83,
        i
    },
    e.itemIcon12_i = function() {
        var i = new eui.Image;
        return this.itemIcon12 = i,
        i.height = 66,
        i.source = "anniversary_sign_in_itemIcon1_png",
        i.visible = !0,
        i.width = 66,
        i.x = 473,
        i.y = 83,
        i
    },
    e.itemIcon13_i = function() {
        var i = new eui.Image;
        return this.itemIcon13 = i,
        i.height = 66,
        i.source = "anniversary_sign_in_itemIcon1_png",
        i.visible = !0,
        i.width = 66,
        i.x = 567,
        i.y = 83,
        i
    },
    e.itemIcon14_i = function() {
        var i = new eui.Image;
        return this.itemIcon14 = i,
        i.height = 66,
        i.source = "anniversary_sign_in_itemIcon1_png",
        i.visible = !0,
        i.width = 66,
        i.x = 0,
        i.y = 167,
        i
    },
    e.itemIcon15_i = function() {
        var i = new eui.Image;
        return this.itemIcon15 = i,
        i.height = 66,
        i.source = "anniversary_sign_in_itemIcon1_png",
        i.visible = !0,
        i.width = 66,
        i.x = 95,
        i.y = 167,
        i
    },
    e.itemIcon16_i = function() {
        var i = new eui.Image;
        return this.itemIcon16 = i,
        i.height = 66,
        i.source = "anniversary_sign_in_itemIcon1_png",
        i.visible = !0,
        i.width = 66,
        i.x = 189,
        i.y = 167,
        i
    },
    e.itemIcon17_i = function() {
        var i = new eui.Image;
        return this.itemIcon17 = i,
        i.height = 66,
        i.source = "anniversary_sign_in_itemIcon1_png",
        i.visible = !0,
        i.width = 66,
        i.x = 284,
        i.y = 167,
        i
    },
    e.itemIcon18_i = function() {
        var i = new eui.Image;
        return this.itemIcon18 = i,
        i.height = 66,
        i.source = "anniversary_sign_in_itemIcon1_png",
        i.visible = !0,
        i.width = 66,
        i.x = 378,
        i.y = 167,
        i
    },
    e.itemIcon19_i = function() {
        var i = new eui.Image;
        return this.itemIcon19 = i,
        i.height = 66,
        i.source = "anniversary_sign_in_itemIcon1_png",
        i.visible = !0,
        i.width = 66,
        i.x = 473,
        i.y = 167,
        i
    },
    e.itemIcon20_i = function() {
        var i = new eui.Image;
        return this.itemIcon20 = i,
        i.height = 66,
        i.source = "anniversary_sign_in_itemIcon1_png",
        i.visible = !0,
        i.width = 66,
        i.x = 567,
        i.y = 167,
        i
    },
    e.itemIcon21_i = function() {
        var i = new eui.Image;
        return this.itemIcon21 = i,
        i.height = 66,
        i.source = "anniversary_sign_in_itemIcon1_png",
        i.visible = !0,
        i.width = 66,
        i.x = 0,
        i.y = 250,
        i
    },
    e.itemIcon22_i = function() {
        var i = new eui.Image;
        return this.itemIcon22 = i,
        i.height = 66,
        i.source = "anniversary_sign_in_itemIcon1_png",
        i.visible = !0,
        i.width = 66,
        i.x = 95,
        i.y = 250,
        i
    },
    e.itemIcon23_i = function() {
        var i = new eui.Image;
        return this.itemIcon23 = i,
        i.height = 66,
        i.source = "anniversary_sign_in_itemIcon1_png",
        i.visible = !0,
        i.width = 66,
        i.x = 189,
        i.y = 250,
        i
    },
    e.itemIcon24_i = function() {
        var i = new eui.Image;
        return this.itemIcon24 = i,
        i.height = 66,
        i.source = "anniversary_sign_in_itemIcon1_png",
        i.visible = !0,
        i.width = 66,
        i.x = 284,
        i.y = 250,
        i
    },
    e.itemIcon25_i = function() {
        var i = new eui.Image;
        return this.itemIcon25 = i,
        i.height = 66,
        i.source = "anniversary_sign_in_itemIcon1_png",
        i.visible = !0,
        i.width = 66,
        i.x = 378,
        i.y = 250,
        i
    },
    e.itemIcon26_i = function() {
        var i = new eui.Image;
        return this.itemIcon26 = i,
        i.height = 66,
        i.source = "anniversary_sign_in_itemIcon1_png",
        i.visible = !0,
        i.width = 66,
        i.x = 473,
        i.y = 250,
        i
    },
    e.itemIcon27_i = function() {
        var i = new eui.Image;
        return this.itemIcon27 = i,
        i.height = 66,
        i.source = "anniversary_sign_in_itemIcon1_png",
        i.visible = !0,
        i.width = 66,
        i.x = 567,
        i.y = 250,
        i
    },
    e.itemCnt0_i = function() {
        var i = new eui.Label;
        return this.itemCnt0 = i,
        i.fontFamily = "MFShangHei",
        i.size = 16,
        i.text = "3",
        i.textAlign = "center",
        i.textColor = 5772544,
        i.touchEnabled = !1,
        i.x = 55,
        i.y = 52,
        i
    },
    e.itemCnt1_i = function() {
        var i = new eui.Label;
        return this.itemCnt1 = i,
        i.fontFamily = "MFShangHei",
        i.size = 16,
        i.text = "3",
        i.textAlign = "center",
        i.textColor = 5772544,
        i.touchEnabled = !1,
        i.x = 150,
        i.y = 52,
        i
    },
    e.itemCnt2_i = function() {
        var i = new eui.Label;
        return this.itemCnt2 = i,
        i.fontFamily = "MFShangHei",
        i.size = 16,
        i.text = "3",
        i.textAlign = "center",
        i.textColor = 5772544,
        i.touchEnabled = !1,
        i.x = 245,
        i.y = 52,
        i
    },
    e.itemCnt3_i = function() {
        var i = new eui.Label;
        return this.itemCnt3 = i,
        i.fontFamily = "MFShangHei",
        i.size = 16,
        i.text = "3",
        i.textAlign = "center",
        i.textColor = 5772544,
        i.touchEnabled = !1,
        i.x = 340,
        i.y = 52,
        i
    },
    e.itemCnt4_i = function() {
        var i = new eui.Label;
        return this.itemCnt4 = i,
        i.fontFamily = "MFShangHei",
        i.size = 16,
        i.text = "3",
        i.textAlign = "center",
        i.textColor = 5772544,
        i.touchEnabled = !1,
        i.x = 433.714,
        i.y = 52,
        i
    },
    e.itemCnt5_i = function() {
        var i = new eui.Label;
        return this.itemCnt5 = i,
        i.fontFamily = "MFShangHei",
        i.size = 16,
        i.text = "3",
        i.textAlign = "center",
        i.textColor = 5772544,
        i.touchEnabled = !1,
        i.x = 528.714,
        i.y = 52,
        i
    },
    e.itemCnt6_i = function() {
        var i = new eui.Label;
        return this.itemCnt6 = i,
        i.fontFamily = "MFShangHei",
        i.size = 16,
        i.text = "3",
        i.textAlign = "center",
        i.textColor = 5772544,
        i.touchEnabled = !1,
        i.x = 622.428,
        i.y = 52,
        i
    },
    e.itemCnt7_i = function() {
        var i = new eui.Label;
        return this.itemCnt7 = i,
        i.fontFamily = "MFShangHei",
        i.size = 16,
        i.text = "3",
        i.textAlign = "center",
        i.textColor = 5772544,
        i.touchEnabled = !1,
        i.x = 55,
        i.y = 135,
        i
    },
    e.itemCnt8_i = function() {
        var i = new eui.Label;
        return this.itemCnt8 = i,
        i.fontFamily = "MFShangHei",
        i.size = 16,
        i.text = "3",
        i.textAlign = "center",
        i.textColor = 5772544,
        i.touchEnabled = !1,
        i.x = 150,
        i.y = 135,
        i
    },
    e.itemCnt9_i = function() {
        var i = new eui.Label;
        return this.itemCnt9 = i,
        i.fontFamily = "MFShangHei",
        i.size = 16,
        i.text = "3",
        i.textAlign = "center",
        i.textColor = 5772544,
        i.touchEnabled = !1,
        i.x = 245,
        i.y = 135,
        i
    },
    e.itemCnt10_i = function() {
        var i = new eui.Label;
        return this.itemCnt10 = i,
        i.fontFamily = "MFShangHei",
        i.size = 16,
        i.text = "3",
        i.textAlign = "center",
        i.textColor = 5772544,
        i.touchEnabled = !1,
        i.x = 340,
        i.y = 135,
        i
    },
    e.itemCnt11_i = function() {
        var i = new eui.Label;
        return this.itemCnt11 = i,
        i.fontFamily = "MFShangHei",
        i.size = 16,
        i.text = "3",
        i.textAlign = "center",
        i.textColor = 5772544,
        i.touchEnabled = !1,
        i.x = 433.714,
        i.y = 135,
        i
    },
    e.itemCnt12_i = function() {
        var i = new eui.Label;
        return this.itemCnt12 = i,
        i.fontFamily = "MFShangHei",
        i.size = 16,
        i.text = "3",
        i.textAlign = "center",
        i.textColor = 5772544,
        i.touchEnabled = !1,
        i.x = 528.714,
        i.y = 135,
        i
    },
    e.itemCnt13_i = function() {
        var i = new eui.Label;
        return this.itemCnt13 = i,
        i.fontFamily = "MFShangHei",
        i.size = 16,
        i.text = "3",
        i.textAlign = "center",
        i.textColor = 5772544,
        i.touchEnabled = !1,
        i.x = 622.428,
        i.y = 135,
        i
    },
    e.itemCnt14_i = function() {
        var i = new eui.Label;
        return this.itemCnt14 = i,
        i.fontFamily = "MFShangHei",
        i.size = 16,
        i.text = "3",
        i.textAlign = "center",
        i.textColor = 5772544,
        i.touchEnabled = !1,
        i.x = 56,
        i.y = 218.67,
        i
    },
    e.itemCnt15_i = function() {
        var i = new eui.Label;
        return this.itemCnt15 = i,
        i.fontFamily = "MFShangHei",
        i.size = 16,
        i.text = "3",
        i.textAlign = "center",
        i.textColor = 5772544,
        i.touchEnabled = !1,
        i.x = 151,
        i.y = 218.67,
        i
    },
    e.itemCnt16_i = function() {
        var i = new eui.Label;
        return this.itemCnt16 = i,
        i.fontFamily = "MFShangHei",
        i.size = 16,
        i.text = "3",
        i.textAlign = "center",
        i.textColor = 5772544,
        i.touchEnabled = !1,
        i.x = 246,
        i.y = 218.67,
        i
    },
    e.itemCnt17_i = function() {
        var i = new eui.Label;
        return this.itemCnt17 = i,
        i.fontFamily = "MFShangHei",
        i.size = 16,
        i.text = "3",
        i.textAlign = "center",
        i.textColor = 5772544,
        i.touchEnabled = !1,
        i.x = 341,
        i.y = 218.67,
        i
    },
    e.itemCnt18_i = function() {
        var i = new eui.Label;
        return this.itemCnt18 = i,
        i.fontFamily = "MFShangHei",
        i.size = 16,
        i.text = "3",
        i.textAlign = "center",
        i.textColor = 5772544,
        i.touchEnabled = !1,
        i.x = 434.714,
        i.y = 218.67,
        i
    },
    e.itemCnt19_i = function() {
        var i = new eui.Label;
        return this.itemCnt19 = i,
        i.fontFamily = "MFShangHei",
        i.size = 16,
        i.text = "3",
        i.textAlign = "center",
        i.textColor = 5772544,
        i.touchEnabled = !1,
        i.x = 529.714,
        i.y = 218.67,
        i
    },
    e.itemCnt20_i = function() {
        var i = new eui.Label;
        return this.itemCnt20 = i,
        i.fontFamily = "MFShangHei",
        i.size = 16,
        i.text = "3",
        i.textAlign = "center",
        i.textColor = 5772544,
        i.touchEnabled = !1,
        i.x = 623.428,
        i.y = 218.67,
        i
    },
    e.itemCnt21_i = function() {
        var i = new eui.Label;
        return this.itemCnt21 = i,
        i.fontFamily = "MFShangHei",
        i.size = 16,
        i.text = "3",
        i.textAlign = "center",
        i.textColor = 5772544,
        i.touchEnabled = !1,
        i.x = 56,
        i.y = 301.67,
        i
    },
    e.itemCnt22_i = function() {
        var i = new eui.Label;
        return this.itemCnt22 = i,
        i.fontFamily = "MFShangHei",
        i.size = 16,
        i.text = "3",
        i.textAlign = "center",
        i.textColor = 5772544,
        i.touchEnabled = !1,
        i.x = 151,
        i.y = 301.67,
        i
    },
    e.itemCnt23_i = function() {
        var i = new eui.Label;
        return this.itemCnt23 = i,
        i.fontFamily = "MFShangHei",
        i.size = 16,
        i.text = "3",
        i.textAlign = "center",
        i.textColor = 5772544,
        i.touchEnabled = !1,
        i.x = 246,
        i.y = 301.67,
        i
    },
    e.itemCnt24_i = function() {
        var i = new eui.Label;
        return this.itemCnt24 = i,
        i.fontFamily = "MFShangHei",
        i.size = 16,
        i.text = "3",
        i.textAlign = "center",
        i.textColor = 5772544,
        i.touchEnabled = !1,
        i.x = 341,
        i.y = 301.67,
        i
    },
    e.itemCnt25_i = function() {
        var i = new eui.Label;
        return this.itemCnt25 = i,
        i.fontFamily = "MFShangHei",
        i.size = 16,
        i.text = "3",
        i.textAlign = "center",
        i.textColor = 5772544,
        i.touchEnabled = !1,
        i.x = 434.714,
        i.y = 301.67,
        i
    },
    e.itemCnt26_i = function() {
        var i = new eui.Label;
        return this.itemCnt26 = i,
        i.fontFamily = "MFShangHei",
        i.size = 16,
        i.text = "3",
        i.textAlign = "center",
        i.textColor = 5772544,
        i.touchEnabled = !1,
        i.x = 529.714,
        i.y = 301.67,
        i
    },
    e.itemCnt27_i = function() {
        var i = new eui.Label;
        return this.itemCnt27 = i,
        i.fontFamily = "MFShangHei",
        i.size = 16,
        i.text = "3",
        i.textAlign = "center",
        i.textColor = 5772544,
        i.touchEnabled = !1,
        i.x = 623.428,
        i.y = 301.67,
        i
    },
    e.selectFrame_i = function() {
        var i = new eui.Image;
        return this.selectFrame = i,
        i.height = 88,
        i.scale9Grid = new egret.Rectangle(20, 20, 1, 1),
        i.source = "anniversary_sign_in_selectFF_png",
        i.touchEnabled = !1,
        i.visible = !0,
        i.width = 88,
        i.x = -11,
        i.y = -11,
        i
    },
    e._Group2_i = function() {
        var i = new eui.Group;
        return i.x = 135.577,
        i.y = 61.085,
        i.elementsContent = [this.spBar_i(), this._Image4_i()],
        i
    },
    e.spBar_i = function() {
        var i = new eui.Image;
        return this.spBar = i,
        i.height = 27,
        i.source = "anniversary_sign_in_sp_spBar_png",
        i.visible = !0,
        i.width = 18,
        i.x = 1,
        i.y = 19.67,
        i
    },
    e._Image4_i = function() {
        var i = new eui.Image;
        return i.height = 436.901,
        i.scale9Grid = new egret.Rectangle(5, 5, 2, 2),
        i.source = "anniversary_sign_in_sp_barFrame_png",
        i.width = 21,
        i.x = 0,
        i.y = 0,
        i
    },
    e._Group3_i = function() {
        var i = new eui.Group;
        return i.x = 75.89,
        i.y = 37.77,
        i.elementsContent = [this._Image5_i(), this.sp_1_i(), this.sp_2_i(), this.sp_3_i(), this.sp_4_i(), this.hasGotSP_1_i(), this.hasGotSP_2_i(), this.hasGotSP_3_i(), this.hasGotSP_4_i()],
        i
    },
    e._Image5_i = function() {
        var i = new eui.Image;
        return i.source = "anniversary_sign_in_sp_spTitle_png",
        i.x = 0,
        i.y = -4,
        i
    },
    e.sp_1_i = function() {
        var i = new eui.Group;
        return this.sp_1 = i,
        i.horizontalCenter = 0,
        i.y = 69,
        i.elementsContent = [this._Image6_i(), this._Image7_i()],
        i
    },
    e._Image6_i = function() {
        var i = new eui.Image;
        return i.source = "anniversary_sign_in_spIcon1_png",
        i.x = 0,
        i.y = 0,
        i
    },
    e._Image7_i = function() {
        var i = new eui.Image;
        return i.horizontalCenter = 0,
        i.source = "anniversary_sign_in_spp_spidx1_png",
        i.y = 1.39,
        i
    },
    e.sp_2_i = function() {
        var i = new eui.Group;
        return this.sp_2 = i,
        i.horizontalCenter = 0,
        i.y = 185,
        i.elementsContent = [this._Image8_i(), this._Image9_i()],
        i
    },
    e._Image8_i = function() {
        var i = new eui.Image;
        return i.source = "anniversary_sign_in_spIcon2_png",
        i.x = 0,
        i.y = 0,
        i
    },
    e._Image9_i = function() {
        var i = new eui.Image;
        return i.horizontalCenter = 0,
        i.source = "anniversary_sign_in_spp_spidx2_png",
        i.y = 1.39,
        i
    },
    e.sp_3_i = function() {
        var i = new eui.Group;
        return this.sp_3 = i,
        i.horizontalCenter = 0,
        i.y = 301,
        i.elementsContent = [this._Image10_i(), this._Image11_i()],
        i
    },
    e._Image10_i = function() {
        var i = new eui.Image;
        return i.source = "anniversary_sign_in_spIcon3_png",
        i.x = 0,
        i.y = 0,
        i
    },
    e._Image11_i = function() {
        var i = new eui.Image;
        return i.horizontalCenter = 0,
        i.source = "anniversary_sign_in_spp_spidx3_png",
        i.y = 1.39,
        i
    },
    e.sp_4_i = function() {
        var i = new eui.Group;
        return this.sp_4 = i,
        i.horizontalCenter = 0,
        i.y = 416,
        i.elementsContent = [this._Image12_i(), this._Image13_i()],
        i
    },
    e._Image12_i = function() {
        var i = new eui.Image;
        return i.source = "anniversary_sign_in_spIcon4_png",
        i.x = 0,
        i.y = 0,
        i
    },
    e._Image13_i = function() {
        var i = new eui.Image;
        return i.horizontalCenter = 0,
        i.source = "anniversary_sign_in_spp_spidx4_png",
        i.y = 1.39,
        i
    },
    e.hasGotSP_1_i = function() {
        var i = new eui.Image;
        return this.hasGotSP_1 = i,
        i.height = 66,
        i.source = "anniversary_sign_in_hasGotSP_png",
        i.width = 64,
        i.x = 79,
        i.y = 110.658,
        i
    },
    e.hasGotSP_2_i = function() {
        var i = new eui.Image;
        return this.hasGotSP_2 = i,
        i.height = 66,
        i.source = "anniversary_sign_in_hasGotSP_png",
        i.width = 64,
        i.x = 79,
        i.y = 227.765,
        i
    },
    e.hasGotSP_3_i = function() {
        var i = new eui.Image;
        return this.hasGotSP_3 = i,
        i.height = 66,
        i.source = "anniversary_sign_in_hasGotSP_png",
        i.width = 64,
        i.x = 79,
        i.y = 345.979,
        i
    },
    e.hasGotSP_4_i = function() {
        var i = new eui.Image;
        return this.hasGotSP_4 = i,
        i.height = 66,
        i.source = "anniversary_sign_in_hasGotSP_png",
        i.width = 64,
        i.x = 79,
        i.y = 459.765,
        i
    },
    t
} (eui.Skin);