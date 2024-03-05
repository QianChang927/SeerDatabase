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
pveJiehuang; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e._itemId_0 = 1714414,
            e._itemId_1 = 1714415,
            e.MAX_TIMES = 10,
            e.skinName = PveJiehuangSkin,
            e
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            var e = this;
            t.prototype.childrenCreated.call(this),
            this.initOldPveBtnClose(0, this, "",
            function() {
                ModuleManager.hideModule(e)
            },
            this),
            this.addEvent(),
            this.updateData()
        },
        e.prototype.addEvent = function() {
            var t = this;
            ImageButtonUtil.add(this.btnRule,
            function() {
                var t = config.Help_tips.getItem(2),
                e = {};
                e.title = "活动说明",
                e.str = StringUtil.TransformLineBreak(t.tips),
                tipsPop.TipsPop.openHelpPop(e)
            },
            this),
            ImageButtonUtil.add(this.btnBag,
            function() {
                ModuleManager.showModule("petBag", ["petBag"])
            },
            this),
            ImageButtonUtil.add(this.btnBuy_0,
            function() {
                KTool.getBit(t.foreverAttr, 1) ? BuyProductManager.buyProductBySocket(251473,
                function() {
                    t.buyPet(1)
                },
                t) : BuyProductManager.buyProductBySocket(251472,
                function() {
                    t.buyPet(1)
                },
                t)
            },
            this),
            ImageButtonUtil.add(this.btnBuy_1,
            function() {
                KTool.getBit(t.foreverAttr, 1) ? BuyProductManager.buyProductBySocket(251475,
                function() {
                    t.buyPet(2)
                },
                t) : BuyProductManager.buyProductBySocket(251474,
                function() {
                    t.buyPet(2)
                },
                t)
            },
            this),
            ImageButtonUtil.add(this.btnPlus_2,
            function() {
                Math.max(0, t.MAX_TIMES - t.dailyTimes) <= 0 && BuyProductManager.buyProductBySocket(251471,
                function() {
                    SocketConnection.sendByQueue(41738, [5, 0],
                    function() {
                        BubblerManager.getInstance().showText("购买成功"),
                        t.updateData()
                    })
                },
                t)
            },
            this),
            ImageButtonUtil.add(this.btnFight_0, this.startFight, this),
            ImageButtonUtil.add(this.btnFight_1, this.startFight, this),
            ImageButtonUtil.add(this.btnEvo_0,
            function() {
                return ItemManager.getNumByID(t._itemId_0) < 100 ? void Alarm.show("你还没有获得足够数量的时空之砂") : 3013 != PetManager.getPetInfo(PetManager.defaultTime).id ? void Alarm.show("请将时空界王放入背包首发位置再来进化！") : void t.getPet(1)
            },
            this),
            ImageButtonUtil.add(this.btnEvo_1,
            function() {
                return ItemManager.getNumByID(t._itemId_1) < 100 ? void Alarm.show("你还没有获得足够数量的幻境之砂") : 3026 != PetManager.getPetInfo(PetManager.defaultTime).id ? void Alarm.show("请将幻境界王放入背包首发位置再来进化！") : void t.getPet(2)
            },
            this),
            ImageButtonUtil.add(this.btnUp_0,
            function() {
                ModuleManager.hideModule(t),
                StatLogger.log("1127版本系统功能", "幻境界皇&时空界皇挑战副本", "进入时空界皇提升副本面板"),
                ModuleManager.showModule("pveJiehuangPowerup", ["pve_jiehuang"], {
                    type: 1
                })
            },
            this),
            ImageButtonUtil.add(this.btnUp_1,
            function() {
                ModuleManager.hideModule(t),
                StatLogger.log("1127版本系统功能", "幻境界皇&时空界皇挑战副本", "进入幻境界皇提升副本面板"),
                ModuleManager.showModule("pveJiehuangPowerup", ["pve_jiehuang"], {
                    type: 2
                })
            },
            this),
            ImageButtonUtil.add(this.btnPlus_0,
            function() {
                BuyProductManager.buyProductBySocket(251469,
                function(e) {
                    t.buyItem(1, e)
                },
                t, 1714414)
            },
            this),
            ImageButtonUtil.add(this.btnPlus_1,
            function() {
                BuyProductManager.buyProductBySocket(251470,
                function(e) {
                    t.buyItem(2, e)
                },
                t, 1714415)
            },
            this),
            EventManager.addEventListener(GameEvent.NOTIFY_ITEM_CHANGE, this.updateData, this),
            ImageButtonUtil.add(this.btnInfo_0,
            function() {
                PetManager.showPetIntroduce(3463)
            },
            this),
            ImageButtonUtil.add(this.btnInfo_1,
            function() {
                PetManager.showPetIntroduce(3460)
            },
            this)
        },
        e.prototype.updateData = function() {
            var t = this;
            this._curBoss = Math.floor((SystemTimerManager.sysBJDate.getTime() - 15041952e5) / 864e5 % 2),
            this._curBoss = ~~ ! this._curBoss,
            KTool.getMultiValue([8631, 11122],
            function(e) {
                t.foreverAttr = e[0],
                t.dailyTimes = e[1],
                t.updateView()
            })
        },
        e.prototype.updateView = function() {
            this.txt_itemNum_0.text = ItemManager.getNumByID(this._itemId_0) + "",
            this.txt_itemNum_1.text = ItemManager.getNumByID(this._itemId_1) + "",
            this.btnFight_0.visible = this.time_1.visible = 0 == this._curBoss,
            this.btnFight_1.visible = this.time_0.visible = 1 == this._curBoss,
            this.txt_fightTimes.text = "" + Math.max(0, this.MAX_TIMES - this.dailyTimes),
            DisplayUtil.setEnabled(this.btnPlus_2, Math.max(0, this.MAX_TIMES - this.dailyTimes) <= 0, !0);
            var t = KTool.getBit(this.foreverAttr, 9),
            e = KTool.getBit(this.foreverAttr, 13);
            this.btnBuy_0.visible = this.btnEvo_0.visible = !t,
            this.btnBuy_1.visible = this.btnEvo_1.visible = !e,
            this.btnUp_0.visible = this.flag_got_0.visible = !!t,
            this.btnUp_1.visible = this.flag_got_1.visible = !!e,
            egret.clearInterval(this._interval),
            this.setTime(),
            egret.setInterval(this.setTime, this, 1e3)
        },
        e.prototype.setTime = function() {
            var t = SystemTimerManager.sysBJDate,
            e = 3600 * t.getHours() + 60 * t.getMinutes() + t.getSeconds(),
            i = 86400 - e,
            n = Math.floor(i / 3600),
            u = Math.floor(i % 3600 / 60),
            _ = Math.floor(i % 60);
            this.txt_time_0.text = this.txt_time_1.text = core.gameUtil.addLeadingZero(n) + ":" + core.gameUtil.addLeadingZero(u) + ":" + core.gameUtil.addLeadingZero(_)
        },
        e.prototype.getPet = function(t) {
            var e = this;
            SocketConnection.sendByQueue(41738, [1, t],
            function() {
                e.updateData()
            })
        },
        e.prototype.buyPet = function(t) {
            var e = this;
            SocketConnection.sendByQueue(41738, [2, t],
            function() {
                e.updateData()
            })
        },
        e.prototype.buyItem = function(t, e) {
            var i = this;
            SocketConnection.sendByQueue(41738, [2 + t, e],
            function() {
                i.updateData()
            })
        },
        e.prototype.startFight = function() {
            var t = this;
            return this.dailyTimes >= this.MAX_TIMES ? void Alarm.show("今天的对战次数已经用完了哦！") : (EventManager.once(PetFightEvent.ALARM_CLICK, this.openSelf, this), void SocketConnection.sendByQueue(41738, [6, 0],
            function() {
                egret.setTimeout(function() {},
                t, 500)
            },
            function() {
                EventManager.removeEventListener(PetFightEvent.ALARM_CLICK, t.openSelf, t)
            }))
        },
        e.prototype.openSelf = function() {
            ModuleManager.showModuleByID(65)
        },
        e.prototype.destroy = function() {
            egret.clearInterval(this._interval),
            ImageButtonUtil.removeAll(this),
            t.prototype.destroy.call(this)
        },
        e
    } (BaseModule);
    t.PveJiehuang = e,
    __reflect(e.prototype, "pveJiehuang.PveJiehuang")
} (pveJiehuang || (pveJiehuang = {}));
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
generateEUI.paths["resource/eui_skins/PveJiehuangSkin.exml"] = window.PveJiehuangSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "bg1", "flag_got_0", "btnFight_0", "btnBuy_0", "timeBg_0", "txt_time_0", "time_0", "btnInfo_0", "flag_got_1", "timeBg_1", "txt_time_1", "time_1", "btnBuy_1", "btnFight_1", "btnInfo_1", "timesBg", "txt_fightTimes", "btnPlus_2", "fightTimes", "txtBg_1", "txt_itemNum_1", "btnPlus_1", "item_1", "txtBg_0", "txt_itemNum_0", "btnPlus_0", "item_0", "btnEvo_1", "btnUp_1", "btnEvo_0", "btnUp_0", "btnRule", "btnBag"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this.bg1_i(), this._Group1_i(), this._Group2_i(), this._Group3_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.source = "pve_jiehuang_bg_png",
        t.visible = !0,
        t.percentWidth = 100,
        t.x = 0,
        t.y = 0,
        t
    },
    i.bg1_i = function() {
        var t = new eui.Image;
        return this.bg1 = t,
        t.horizontalCenter = 0,
        t.source = "pve_jiehuang_bg1_png",
        t.y = 0,
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.height = 343,
        t.horizontalCenter = -383,
        t.left = 7,
        t.width = 356,
        t.y = 256,
        t.elementsContent = [this.flag_got_0_i(), this.btnFight_0_i(), this.btnBuy_0_i(), this.time_0_i(), this.btnInfo_0_i()],
        t
    },
    i.flag_got_0_i = function() {
        var t = new eui.Image;
        return this.flag_got_0 = t,
        t.height = 76,
        t.source = "pve_jiehuang_flag_got_0_png",
        t.width = 264,
        t.x = 92,
        t.y = 0,
        t
    },
    i.btnFight_0_i = function() {
        var t = new eui.Image;
        return this.btnFight_0 = t,
        t.height = 68,
        t.source = "pve_jiehuang_btnFight_0_png",
        t.width = 228,
        t.x = 40,
        t.y = 213,
        t
    },
    i.btnBuy_0_i = function() {
        var t = new eui.Image;
        return this.btnBuy_0 = t,
        t.height = 68,
        t.source = "pve_jiehuang_btnBuy_0_png",
        t.width = 275,
        t.x = 0,
        t.y = 275,
        t
    },
    i.time_0_i = function() {
        var t = new eui.Group;
        return this.time_0 = t,
        t.x = 53,
        t.y = 222,
        t.elementsContent = [this.timeBg_0_i(), this._Label1_i(), this.txt_time_0_i()],
        t
    },
    i.timeBg_0_i = function() {
        var t = new eui.Image;
        return this.timeBg_0 = t,
        t.height = 50,
        t.source = "pve_jiehuang_timeBg_0_png",
        t.width = 201,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.lineSpacing = 3,
        t.size = 18,
        t.text = "距离挑战开启：",
        t.textColor = 16777215,
        t.touchEnabled = !1,
        t.x = 48,
        t.y = 5,
        t
    },
    i.txt_time_0_i = function() {
        var t = new eui.Label;
        return this.txt_time_0 = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.lineSpacing = 3,
        t.size = 26,
        t.text = "10:36:50",
        t.textColor = 16773461,
        t.touchEnabled = !1,
        t.x = 42,
        t.y = 26,
        t
    },
    i.btnInfo_0_i = function() {
        var t = new eui.Image;
        return this.btnInfo_0 = t,
        t.height = 74,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "pve_jiehuang_btnInfo_0_png",
        t.width = 74,
        t.x = 13.999999999999986,
        t.y = 95.00000000000011,
        t
    },
    i._Group2_i = function() {
        var t = new eui.Group;
        return t.height = 333,
        t.horizontalCenter = 385.5,
        t.right = 8,
        t.width = 349,
        t.y = 266,
        t.elementsContent = [this.flag_got_1_i(), this.time_1_i(), this.btnBuy_1_i(), this.btnFight_1_i(), this.btnInfo_1_i()],
        t
    },
    i.flag_got_1_i = function() {
        var t = new eui.Image;
        return this.flag_got_1 = t,
        t.height = 76,
        t.source = "pve_jiehuang_flag_got_1_png",
        t.width = 264,
        t.x = 0,
        t.y = 0,
        t
    },
    i.time_1_i = function() {
        var t = new eui.Group;
        return this.time_1 = t,
        t.x = 95,
        t.y = 212,
        t.elementsContent = [this.timeBg_1_i(), this._Label2_i(), this.txt_time_1_i()],
        t
    },
    i.timeBg_1_i = function() {
        var t = new eui.Image;
        return this.timeBg_1 = t,
        t.height = 50,
        t.source = "pve_jiehuang_timeBg_1_png",
        t.width = 201,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Label2_i = function() {
        var t = new eui.Label;
        return t.lineSpacing = 3,
        t.size = 18,
        t.text = "距离挑战开启：",
        t.textColor = 16777215,
        t.touchEnabled = !1,
        t.x = 45,
        t.y = 5,
        t
    },
    i.txt_time_1_i = function() {
        var t = new eui.Label;
        return this.txt_time_1 = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.lineSpacing = 3,
        t.size = 26,
        t.text = "10:36:50",
        t.textColor = 16773461,
        t.touchEnabled = !1,
        t.x = 39,
        t.y = 26,
        t
    },
    i.btnBuy_1_i = function() {
        var t = new eui.Image;
        return this.btnBuy_1 = t,
        t.height = 68,
        t.source = "pve_jiehuang_btnBuy_1_png",
        t.width = 275,
        t.x = 74,
        t.y = 265,
        t
    },
    i.btnFight_1_i = function() {
        var t = new eui.Image;
        return this.btnFight_1 = t,
        t.height = 68,
        t.source = "pve_jiehuang_btnFight_1_png",
        t.width = 216,
        t.x = 86,
        t.y = 203,
        t
    },
    i.btnInfo_1_i = function() {
        var t = new eui.Image;
        return this.btnInfo_1 = t,
        t.height = 74,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "pve_jiehuang_btnInfo_1_png",
        t.width = 74,
        t.x = 262.0000000000001,
        t.y = 85.00000000000011,
        t
    },
    i._Group3_i = function() {
        var t = new eui.Group;
        return t.height = 420,
        t.horizontalCenter = -.5,
        t.width = 611,
        t.y = 219,
        t.elementsContent = [this.fightTimes_i(), this.item_1_i(), this.item_0_i(), this.btnEvo_1_i(), this.btnUp_1_i(), this.btnEvo_0_i(), this.btnUp_0_i(), this.btnRule_i(), this.btnBag_i()],
        t
    },
    i.fightTimes_i = function() {
        var t = new eui.Group;
        return this.fightTimes = t,
        t.visible = !0,
        t.x = 0,
        t.y = 367,
        t.elementsContent = [this.timesBg_i(), this._Label3_i(), this.txt_fightTimes_i(), this.btnPlus_2_i()],
        t
    },
    i.timesBg_i = function() {
        var t = new eui.Image;
        return this.timesBg = t,
        t.height = 53,
        t.source = "pve_jiehuang_timesBg_png",
        t.width = 611,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Label3_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "HuaKangXinZongYi",
        t.lineSpacing = 3,
        t.size = 22,
        t.text = "今日挑战次数:",
        t.textColor = 16777215,
        t.touchEnabled = !1,
        t.x = 215,
        t.y = 16,
        t
    },
    i.txt_fightTimes_i = function() {
        var t = new eui.Label;
        return this.txt_fightTimes = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.lineSpacing = 3,
        t.size = 24,
        t.text = "3/3",
        t.textColor = 16777215,
        t.touchEnabled = !1,
        t.x = 364,
        t.y = 15,
        t
    },
    i.btnPlus_2_i = function() {
        var t = new eui.Image;
        return this.btnPlus_2 = t,
        t.height = 34,
        t.source = "pve_jiehuang_btnPlus_png",
        t.width = 34,
        t.x = 411.994,
        t.y = 8.364,
        t
    },
    i.item_1_i = function() {
        var t = new eui.Group;
        return this.item_1 = t,
        t.x = 319,
        t.y = 336,
        t.elementsContent = [this.txtBg_1_i(), this.txt_itemNum_1_i(), this.btnPlus_1_i()],
        t
    },
    i.txtBg_1_i = function() {
        var t = new eui.Image;
        return this.txtBg_1 = t,
        t.height = 46,
        t.source = "pve_jiehuang_txtBg_1_png",
        t.width = 234,
        t.x = 0,
        t.y = 0,
        t
    },
    i.txt_itemNum_1_i = function() {
        var t = new eui.Label;
        return this.txt_itemNum_1 = t,
        t.lineSpacing = 3,
        t.size = 22,
        t.text = "000",
        t.textColor = 16777215,
        t.touchEnabled = !1,
        t.x = 138,
        t.y = 12,
        t
    },
    i.btnPlus_1_i = function() {
        var t = new eui.Image;
        return this.btnPlus_1 = t,
        t.height = 34,
        t.source = "pve_jiehuang_btnPlus_png",
        t.width = 34,
        t.x = 193,
        t.y = 5,
        t
    },
    i.item_0_i = function() {
        var t = new eui.Group;
        return this.item_0 = t,
        t.x = 65,
        t.y = 336,
        t.elementsContent = [this.txtBg_0_i(), this.txt_itemNum_0_i(), this.btnPlus_0_i()],
        t
    },
    i.txtBg_0_i = function() {
        var t = new eui.Image;
        return this.txtBg_0 = t,
        t.height = 46,
        t.source = "pve_jiehuang_txtBg_0_png",
        t.width = 234,
        t.x = 0,
        t.y = 0,
        t
    },
    i.txt_itemNum_0_i = function() {
        var t = new eui.Label;
        return this.txt_itemNum_0 = t,
        t.lineSpacing = 3,
        t.size = 22,
        t.text = "000",
        t.textColor = 16777215,
        t.touchEnabled = !1,
        t.x = 168,
        t.y = 12,
        t
    },
    i.btnPlus_0_i = function() {
        var t = new eui.Image;
        return this.btnPlus_0 = t,
        t.height = 34,
        t.source = "pve_jiehuang_btnPlus_png",
        t.width = 34,
        t.x = 6,
        t.y = 5,
        t
    },
    i.btnEvo_1_i = function() {
        var t = new eui.Image;
        return this.btnEvo_1 = t,
        t.height = 175,
        t.source = "pve_jiehuang_btnEvo_1_png",
        t.visible = !0,
        t.width = 87,
        t.x = 308,
        t.y = 0,
        t
    },
    i.btnUp_1_i = function() {
        var t = new eui.Image;
        return this.btnUp_1 = t,
        t.height = 175,
        t.source = "pve_jiehuang_btnUp_1_png",
        t.visible = !0,
        t.width = 87,
        t.x = 308,
        t.y = 0,
        t
    },
    i.btnEvo_0_i = function() {
        var t = new eui.Image;
        return this.btnEvo_0 = t,
        t.height = 175,
        t.source = "pve_jiehuang_btnEvo_0_png",
        t.width = 87,
        t.x = 221,
        t.y = 0,
        t
    },
    i.btnUp_0_i = function() {
        var t = new eui.Image;
        return this.btnUp_0 = t,
        t.height = 175,
        t.source = "pve_jiehuang_btnUp_0_png",
        t.width = 87,
        t.x = 221,
        t.y = 0,
        t
    },
    i.btnRule_i = function() {
        var t = new eui.Image;
        return this.btnRule = t,
        t.height = 74,
        t.source = "pve_jiehuang_btnRule_png",
        t.width = 74,
        t.x = 232,
        t.y = 229,
        t
    },
    i.btnBag_i = function() {
        var t = new eui.Image;
        return this.btnBag = t,
        t.height = 74,
        t.source = "pve_jiehuang_btnBag_png",
        t.width = 74,
        t.x = 307,
        t.y = 229,
        t
    },
    e
} (eui.Skin);