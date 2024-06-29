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
peakWeeklyReward; !
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t._arr = [10, 30, 60, 100, 50],
            t.prizeCnt = [10, 20, 30, 40, 50],
            t.skinName = "PeakWeeklyRewardSkin",
            t
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            StatLogger.log("20221223版本系统功能", "巅峰奖励周面板添加", "打开主面板");
            for (var t, i = core.manager.XMLConfigManger.getInstance().getRes(ClientConfig.getJSONConfig("activityTimeControl")), n = 0; n < i.config.item.length; ++n) if (363 == i.config.item[n].id) {
                t = i.config.item[n];
                break
            }
            var r = t.startTime.toString(),
            a = t.endTime.toString(),
            o = new Date(r.slice(0, 4) + "/" + r.slice(4, 6) + "/" + r.slice(6)),
            s = new Date(a.slice(0, 4) + "/" + a.slice(4, 6) + "/" + a.slice(6));
            this.dateTxt.text = o.getMonth() + 1 + "月" + o.getDate() + "日-",
            this.dateTxt.text += s.getMonth() + 1 + "月" + s.getDate() + "日",
            this.updateView(),
            ImageButtonUtil.add(this.getBtn_0, this.onClick.bind(this), this, !0, !1),
            ImageButtonUtil.add(this.getBtn_1, this.onClick.bind(this), this, !0, !1),
            ImageButtonUtil.add(this.getBtn_2, this.onClick.bind(this), this, !0, !1),
            ImageButtonUtil.add(this.getBtn_3, this.onClick.bind(this), this, !0, !1),
            ImageButtonUtil.add(this.getBtn_4, this.onClick.bind(this), this, !0, !1),
            ImageButtonUtil.add(this.btnGo,
            function() {
                StatLogger.log("20221223版本系统功能", "巅峰奖励周面板添加", "点击“立即前往”跳转至巅峰圣战面板"),
                ModuleManager.showModuleByID(8)
            },
            this)
        },
        t.prototype.reShow = function() {
            this.updateView()
        },
        t.prototype.updateView = function() {
            var e = this,
            t = 0;
            KTool.getMultiValue([PeakJihad2016Controller.curJJMonthStarLvId, PeakJihad2016Controller.curMonthStarLvId, 20116, 20117],
            function(i) {
                var n = i[t],
                r = PeakJihadLevelRulesXMLInfo.getLadderLvByStarlv(n);
                e.starSign.source = ClientConfig.getPeakjihadLevelPath(21 - r),
                e.starTxt.text = PeakJihadLevelRulesXMLInfo.getTitleByStarlv(n) + "\n" + String(PeakJihadLevelRulesXMLInfo.getStarByStarlv(n)) + "星",
                e._valueArr = new Array;
                for (var a = 0; 2 > a; a++) e["wTxt_" + a].text = String(i[2 + a]),
                e._valueArr.push(i[2 + a]);
                KTool.getBitSet([628, 629, 630, 631, 632],
                function(t) {
                    for (var i = 0; 5 > i; i++) t[i] > 0 ? (e["getBtn_" + i].filters = [], DisplayUtil.setEnabled(e["getBtn_" + i], !1, !0), e["flag_" + i].visible = !0) : (e["flag_" + i].visible = !1, e.checkCanGet(i) || (e["getBtn_" + i].filters = [ColorFilter.setGrayscale()]))
                })
            })
        },
        t.prototype.checkCanGet = function(e) {
            return 4 > e ? this._valueArr[0] >= this._arr[e] : this._valueArr[1] >= this._arr[e]
        },
        t.prototype.onClick = function(e) {
            var t = this,
            i = [this.getBtn_0, this.getBtn_1, this.getBtn_2, this.getBtn_3, this.getBtn_4].indexOf(e.target);
            0 > i || (4 > i ? this._valueArr[0] >= this._arr[i] ? (this.Stat(i), KTool.doExchange(13052 + i, 1,
            function() {
                t["getBtn_" + i] && DisplayUtil.setEnabled(t["getBtn_" + i], !1, !0),
                t["flag_" + i] && (t["flag_" + i].visible = !0)
            })) : (BubblerManager.getInstance().showText("开启后可获得荣耀铸币×" + this.prizeCnt[i]), tipsPop.TipsPop.openMultiItemsPop("3_1717452_" + this.prizeCnt[i], "")) : this._valueArr[1] >= this._arr[i] ? (this.Stat(i), KTool.doExchange(13052 + i, 1,
            function() {
                t["getBtn_" + i] && DisplayUtil.setEnabled(t["getBtn_" + i], !1, !0),
                t["flag_" + i] && (t["flag_" + i].visible = !0)
            })) : (BubblerManager.getInstance().showText("开启后可获得荣耀铸币×" + this.prizeCnt[i]), tipsPop.TipsPop.openMultiItemsPop("3_1717452_" + this.prizeCnt[i], "")))
        },
        t.prototype.Stat = function(e) {
            switch (e) {
            case 0:
                StatLogger.log("20221223版本系统功能", "巅峰奖励周面板添加", "点击“完成10场6V6”并领取宝箱奖励");
                break;
            case 1:
                StatLogger.log("20221223版本系统功能", "巅峰奖励周面板添加", "点击“完成30场6V6”并领取宝箱奖励");
                break;
            case 2:
                StatLogger.log("20221223版本系统功能", "巅峰奖励周面板添加", "点击“完成60场6V6”并领取宝箱奖励");
                break;
            case 3:
                StatLogger.log("20221223版本系统功能", "巅峰奖励周面板添加", "点击“完成100场6V6”并领取宝箱奖励");
                break;
            case 4:
                StatLogger.log("20221223版本系统功能", "巅峰奖励周面板添加", "点击“胜利50场6V6”并领取宝箱奖励")
            }
        },
        t
    } (BaseModule);
    e.PeakWeeklyReward = t,
    __reflect(t.prototype, "peakWeeklyReward.PeakWeeklyReward")
} (peakWeeklyReward || (peakWeeklyReward = {}));
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
generateEUI.paths["resource/eui_skins/PeakWeeklyRewardSkin.exml"] = window.PeakWeeklyRewardSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["btnZhong", "wintext", "getBtn_0", "getBtn_1", "getBtn_2", "getBtn_3", "getBtn_4", "flag_0", "flag_1", "flag_2", "flag_3", "flag_4", "starSign", "btnGo", "btnQuestion", "starTxt", "wTxt_0", "wTxt_1", "dateTxt"],
        this.height = 640,
        this.width = 1472,
        this.elementsContent = [this._Image1_i(), this._Image2_i(), this._Label1_i(), this.btnZhong_i(), this.wintext_i(), this.getBtn_0_i(), this.getBtn_1_i(), this.getBtn_2_i(), this.getBtn_3_i(), this.getBtn_4_i(), this.flag_0_i(), this.flag_1_i(), this.flag_2_i(), this.flag_3_i(), this.flag_4_i(), this.starSign_i(), this.btnGo_i(), this.btnQuestion_i(), this.starTxt_i(), this.wTxt_0_i(), this.wTxt_1_i(), this.dateTxt_i(), this._Image3_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Image1_i = function() {
        var e = new eui.Image;
        return e.bottom = 0,
        e.left = 0,
        e.right = 0,
        e.source = "bbg_png",
        e.top = 0,
        e.visible = !0,
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = 0,
        e.source = "bg_png",
        e.visible = !0,
        e
    },
    i._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "REEJI",
        e.horizontalCenter = -207,
        e.size = 20,
        e.text = "巅峰圣战开启激励模式，\n完成6v6比赛所获得的圣战奖章\n数量翻倍！\n累计完成场次和胜利场次\n还可以领取额外奖励！",
        e.textAlign = "center",
        e.textColor = 8696819,
        e.width = 296,
        e.y = 160,
        e
    },
    i.btnZhong_i = function() {
        var e = new eui.Image;
        return this.btnZhong = e,
        e.height = 241,
        e.horizontalCenter = 258,
        e.source = "peak_weekly_reward_btnZhong_png",
        e.verticalCenter = 64.5,
        e.visible = !0,
        e.width = 240,
        e
    },
    i.wintext_i = function() {
        var e = new eui.Image;
        return this.wintext = e,
        e.height = 17,
        e.horizontalCenter = 261.5,
        e.source = "peak_weekly_reward_wintext_png",
        e.verticalCenter = 109.5,
        e.visible = !0,
        e.width = 101,
        e
    },
    i.getBtn_0_i = function() {
        var e = new eui.Image;
        return this.getBtn_0 = e,
        e.height = 100,
        e.horizontalCenter = 90.5,
        e.source = "peak_weekly_reward_smallPrize_png",
        e.verticalCenter = -17,
        e.visible = !0,
        e.width = 105,
        e.x = 1121,
        e.y = 406,
        e
    },
    i.getBtn_1_i = function() {
        var e = new eui.Image;
        return this.getBtn_1 = e,
        e.height = 100,
        e.horizontalCenter = 427.5,
        e.source = "peak_weekly_reward_smallPrize_png",
        e.verticalCenter = -17,
        e.visible = !0,
        e.width = 105,
        e.x = 1141,
        e.y = 457,
        e
    },
    i.getBtn_2_i = function() {
        var e = new eui.Image;
        return this.getBtn_2 = e,
        e.height = 100,
        e.horizontalCenter = 90.5,
        e.source = "peak_weekly_reward_smallPrize_png",
        e.verticalCenter = 126,
        e.visible = !0,
        e.width = 105,
        e.x = 1131,
        e.y = 447,
        e
    },
    i.getBtn_3_i = function() {
        var e = new eui.Image;
        return this.getBtn_3 = e,
        e.height = 100,
        e.horizontalCenter = 427.5,
        e.source = "peak_weekly_reward_smallPrize_png",
        e.verticalCenter = 126,
        e.visible = !0,
        e.width = 105,
        e
    },
    i.getBtn_4_i = function() {
        var e = new eui.Image;
        return this.getBtn_4 = e,
        e.height = 125,
        e.horizontalCenter = 257.5,
        e.source = "peak_weekly_reward_bigPrize_png",
        e.verticalCenter = 47.5,
        e.visible = !0,
        e.width = 153,
        e
    },
    i.flag_0_i = function() {
        var e = new eui.Image;
        return this.flag_0 = e,
        e.height = 36,
        e.horizontalCenter = 89,
        e.source = "peak_weekly_reward_hasGot_png",
        e.verticalCenter = -14,
        e.visible = !0,
        e.width = 138,
        e
    },
    i.flag_1_i = function() {
        var e = new eui.Image;
        return this.flag_1 = e,
        e.height = 36,
        e.horizontalCenter = 428,
        e.source = "peak_weekly_reward_hasGot_png",
        e.verticalCenter = -14,
        e.visible = !0,
        e.width = 138,
        e.x = 1105,
        e.y = 411,
        e
    },
    i.flag_2_i = function() {
        var e = new eui.Image;
        return this.flag_2 = e,
        e.height = 36,
        e.horizontalCenter = 89,
        e.source = "peak_weekly_reward_hasGot_png",
        e.verticalCenter = 129,
        e.visible = !0,
        e.width = 138,
        e.x = 1115,
        e.y = 421,
        e
    },
    i.flag_3_i = function() {
        var e = new eui.Image;
        return this.flag_3 = e,
        e.height = 36,
        e.horizontalCenter = 428,
        e.source = "peak_weekly_reward_hasGot_png",
        e.verticalCenter = 129,
        e.visible = !0,
        e.width = 138,
        e.y = 401,
        e
    },
    i.flag_4_i = function() {
        var e = new eui.Image;
        return this.flag_4 = e,
        e.height = 36,
        e.horizontalCenter = 257,
        e.scaleX = 1.1,
        e.scaleY = 1.1,
        e.source = "peak_weekly_reward_hasGot_png",
        e.verticalCenter = 50,
        e.visible = !0,
        e.width = 138,
        e.x = 1115,
        e.y = 421,
        e
    },
    i.starSign_i = function() {
        var e = new eui.Image;
        return this.starSign = e,
        e.height = 40,
        e.horizontalCenter = 96,
        e.source = "peak_weekly_reward_starSign_png",
        e.verticalCenter = -136,
        e.visible = !0,
        e.width = 40,
        e
    },
    i.btnGo_i = function() {
        var e = new eui.Image;
        return this.btnGo = e,
        e.height = 46,
        e.horizontalCenter = 259,
        e.source = "peak_weekly_reward_btnGo_png",
        e.verticalCenter = 250,
        e.visible = !0,
        e.width = 134,
        e
    },
    i.btnQuestion_i = function() {
        var e = new eui.Image;
        return this.btnQuestion = e,
        e.height = 28,
        e.horizontalCenter = 288.5,
        e.source = "peak_weekly_reward_btnQuestion_png",
        e.verticalCenter = -267,
        e.visible = !1,
        e.width = 25,
        e
    },
    i.starTxt_i = function() {
        var e = new eui.Label;
        return this.starTxt = e,
        e.fontFamily = "MFShangHei",
        e.height = 44.134,
        e.horizontalCenter = 194,
        e.size = 18,
        e.text = "0000",
        e.textColor = 6027519,
        e.verticalCenter = -133,
        e.visible = !0,
        e.width = 140,
        e
    },
    i.wTxt_0_i = function() {
        var e = new eui.Label;
        return this.wTxt_0 = e,
        e.fontFamily = "MFShangHei",
        e.height = 25.134,
        e.horizontalCenter = 428,
        e.size = 18,
        e.text = "0000",
        e.textColor = 6027519,
        e.verticalCenter = -157.5,
        e.visible = !0,
        e.width = 161.983,
        e
    },
    i.wTxt_1_i = function() {
        var e = new eui.Label;
        return this.wTxt_1 = e,
        e.fontFamily = "MFShangHei",
        e.height = 25.134,
        e.horizontalCenter = 428,
        e.size = 18,
        e.text = "0000",
        e.textColor = 6027519,
        e.verticalCenter = -112.5,
        e.visible = !0,
        e.width = 161.983,
        e
    },
    i.dateTxt_i = function() {
        var e = new eui.Label;
        return this.dateTxt = e,
        e.fontFamily = "MFShangHei",
        e.height = 25.134,
        e.horizontalCenter = -210,
        e.italic = !0,
        e.size = 20,
        e.textAlign = "center",
        e.textColor = 16770650,
        e.verticalCenter = -174.5,
        e.visible = !0,
        e.width = 188,
        e
    },
    i._Image3_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = 354,
        e.scaleX = .75,
        e.scaleY = .75,
        e.source = "peak_weekly_reward_newyear_png",
        e.visible = !1,
        e.y = 58,
        e
    },
    t
} (eui.Skin);