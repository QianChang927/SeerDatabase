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
pveJiehuangPowerup; !
function(t) {
    var e = function(t) {
        function e(e) {
            var i = t.call(this) || this;
            return i.MAX_TIMES = 10,
            i._requireTimes = [4, 8, 12],
            i.skinName = PveJiehuangPowerupSkin,
            i._curType = e.type,
            i
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this),
            this.initView(),
            this.addEvent(),
            this.updateData()
        },
        e.prototype.initView = function() {
            this.title.source = "pve_jiehuang_powerup_title_" + this._curType + "_png",
            this.img_pet_1.visible = 1 == this._curType,
            this.img_pet_2.visible = 2 == this._curType,
            1 == this._curType ? (this._itemId = 1714414, this._skillId = 31253, this._tokenId = 41049, this._characteristicId = 2697, this._bossId = 3463, this._bossName = "时空界皇") : 2 == this._curType && (this._itemId = 1714415, this._skillId = 31239, this._tokenId = 41046, this._characteristicId = 2698, this._bossId = 3460, this._bossName = "幻境界皇"),
            this.itemIcon.source = ClientConfig.getItemIcon(this._itemId),
            this.txt_itemName.text = ItemXMLInfo.getItemObj(this._itemId).Name,
            this.icon_token.source = ClientConfig.getMarkPath(this._tokenId)
        },
        e.prototype.addEvent = function() {
            var t = this;
            ImageButtonUtil.add(this.itemIcon,
            function() {
                var e = {};
                e.id = t._itemId,
                tipsPop.TipsPop.openItemPop(e)
            },
            this),
            ImageButtonUtil.add(this.helpBtn_png,
            function() {
                var e = 0;
                e = 1 == t._curType ? 3 : 15;
                var i = config.Help_tips.getItem(e),
                n = {};
                n.title = "活动说明",
                n.str = StringUtil.TransformLineBreak(i.tips),
                tipsPop.TipsPop.openHelpPop(n)
            },
            this),
            ImageButtonUtil.add(this.imgBtn_pet,
            function() {
                ModuleManager.showModule("petBag", ["petBag"])
            },
            this),
            ImageButtonUtil.add(this.imgBtn_cure,
            function() {
                PetManager.cureAll()
            },
            this),
            ImageButtonUtil.add(this.btnFreeze,
            function() {
                return t._angryNum <= 0 ? void Alarm.show("当前怒气值为0") : ItemManager.getNumByID(t._itemId) < 10 ? void Alarm.show("你还没有获得足够数量的" + ItemXMLInfo.getItemObj(t._itemId).Name + "！") : void Alert.show("是否消耗10" + ItemXMLInfo.getItemObj(t._itemId).Name + "降低1点怒气？",
                function() {
                    t.send(8)
                })
            },
            this),
            ImageButtonUtil.add(this.btnFight,
            function() {
                return t._dailyTimes >= t.MAX_TIMES ? void Alarm.show("今天的对战次数已经用完了哦！") : void t.send(10)
            },
            this),
            ImageButtonUtil.add(this.btnFast,
            function() {
                BuyProductManager.buyProductBySocket(2 == t._curType ? 251485 : 251480,
                function() {
                    t.send(7)
                },
                t)
            },
            this),
            ImageButtonUtil.add(this.btnPlus1,
            function() {
                Math.max(0, t.MAX_TIMES - t._dailyTimes) <= 0 && BuyProductManager.buyProductBySocket(2 == t._curType ? 251484 : 251479,
                function() {
                    SocketConnection.sendByQueue(41738, [2 == t._curType ? 8 : 7, 9],
                    function() {
                        BubblerManager.getInstance().showText("购买成功"),
                        t.updateData()
                    })
                },
                t)
            },
            this),
            ImageButtonUtil.add(this.btnClose,
            function() {
                ModuleManager.hideModule(t),
                ModuleManager.showModuleByID(65)
            },
            this),
            ImageButtonUtil.add(this.icon_token,
            function() {
                var e = {};
                e.ins = t._tokenId,
                tipsPop.TipsPop.openCounterMarkPop(e)
            },
            this),
            ImageButtonUtil.add(this.icon_skill,
            function() {
                var e = {};
                e.id = t._skillId,
                tipsPop.TipsPop.openSkillPop(e)
            },
            this),
            ImageButtonUtil.add(this.icon_characteristic,
            function() {
                ModuleManager.showModule("petEffDescPanel", ["pet_eff_desc_panel"], t._bossId, "", AppDoStyle.NULL)
            },
            this),
            ImageButtonUtil.add(this.btnPlus,
            function() {
                BuyProductManager.buyProductBySocket(1 == t._curType ? 251469 : 251470,
                function(e) {
                    t.buyItem(t._curType, e)
                },
                t, 1 == t._curType ? 1714414 : 1714415)
            },
            this);
            for (var e = ["专属全能刻印", "专属特性", "第五技能"], i = function(i) {
                ImageButtonUtil.add(n["btnGet_" + i],
                function() {
                    return t._winTimes < t._requireTimes[i] ? void Alarm.show("累计战胜" + t._requireTimes[i] + "次" + t._bossName + "可以领取" + e[i]) : PetManager.getPetInfo(PetManager.defaultTime).id != t._bossId ? void Alarm.show("请将" + t._bossName + "放入背包首发位置！") : void t.send(i + 1)
                },
                n),
                ImageButtonUtil.add(n["btnBuy_" + i],
                function() {
                    return PetManager.getPetInfo(PetManager.defaultTime).id != t._bossId ? void Alarm.show("请将" + t._bossName + "放入背包首发位置！") : void BuyProductManager.buyProductBySocket(2 == t._curType ? [251481, 251482, 251483][i] : [251476, 251477, 251478][i],
                    function() {
                        t.send(i + 4)
                    },
                    t)
                },
                n)
            },
            n = this, _ = 0; 3 > _; _++) i(_);
            EventManager.addEventListener(PetFightEvent.ALARM_CLICK, this.updateData, this),
            EventManager.addEventListener(GameEvent.NOTIFY_ITEM_CHANGE, this.updateData, this)
        },
        e.prototype.updateData = function() {
            var t = this;
            KTool.getMultiValue([8631, 8632, 11123, 11124],
            function(e) {
                1 == t._curType ? (t._petState = KTool.getBit(e[0], 9), t._itemState_0 = KTool.getBit(e[0], 10), t._itemState_1 = KTool.getBit(e[0], 11), t._itemState_2 = KTool.getBit(e[0], 12), t._winTimes = 255 & e[1], t._angryNum = e[1] >> 16 & 255, t._dailyTimes = e[2]) : 2 == t._curType && (t._petState = KTool.getBit(e[0], 13), t._itemState_0 = KTool.getBit(e[0], 14), t._itemState_1 = KTool.getBit(e[0], 15), t._itemState_2 = KTool.getBit(e[0], 16), t._winTimes = e[1] >> 8 & 255, t._angryNum = e[1] >> 24 & 255, t._dailyTimes = e[3]),
                t.updateView()
            })
        },
        e.prototype.updateView = function() {
            this.txt_itemNum.text = ItemManager.getNumByID(this._itemId) + "",
            this.txt_fightTimes.text = Math.max(0, this.MAX_TIMES - this._dailyTimes) + "",
            DisplayUtil.setEnabled(this.btnPlus1, Math.max(0, this.MAX_TIMES - this._dailyTimes) <= 0, !0),
            this.txt_winTimes.text = this._winTimes + "",
            this.setAngryNum(this._angryNum);
            for (var t = 0; 3 > t; t++) this["flag_got_" + t].visible = this["_itemState_" + t],
            this["btnGet_" + t].visible = this["btnBuy_" + t].visible = !this["_itemState_" + t]
        },
        e.prototype.setAngryNum = function(t) {
            for (var e = 0; 3 > e; e++) this["fire_" + e].visible = t > e
        },
        e.prototype.send = function(t) {
            var e = this;
            SocketConnection.sendByQueue(41738, [6 + this._curType, t],
            function() {
                e.updateData(),
                7 == t && BubblerManager.getInstance().showText("快速击败成功")
            })
        },
        e.prototype.buyItem = function(t, e) {
            var i = this;
            SocketConnection.sendByQueue(41738, [2 + t, e],
            function() {
                i.updateData()
            })
        },
        e.prototype.destroy = function() {
            ImageButtonUtil.removeAll(this),
            EventManager.removeEventListener(PetFightEvent.ALARM_CLICK, this.updateData, this),
            t.prototype.destroy.call(this)
        },
        e
    } (BaseModule);
    t.PveJiehuangPowerup = e,
    __reflect(e.prototype, "pveJiehuangPowerup.PveJiehuangPowerup")
} (pveJiehuangPowerup || (pveJiehuangPowerup = {}));
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
generateEUI.paths["resource/eui_skins/PveJiehuangPowerupSkin.exml"] = window.PveJiehuangPowerupSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["BG", "pet_base", "imgBtn_pet", "imgBtn_cure", "txt_winTimes", "win", "img_pet_1", "img_pet_2", "fire_2", "fire_1", "fire_0", "angry", "btnFreeze", "btnGet_0", "btnBuy_0", "flag_got_0", "icon_token", "token", "btnGet_1", "btnBuy_1", "icon_characteristic", "flag_got_1", "characteristic", "btnGet_2", "btnBuy_2", "icon_skill", "flag_got_2", "skill", "btnClose", "title", "helpBtn_png", "top", "txt_itemName", "txt_itemNum", "btnPlus", "itemIcon", "item2", "txt_fightTimes", "btnPlus1", "item1", "btnFast", "btnFight"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.BG_i(), this.pet_base_i(), this.imgBtn_pet_i(), this.imgBtn_cure_i(), this.win_i(), this.img_pet_1_i(), this.img_pet_2_i(), this.angry_i(), this.btnFreeze_i(), this.token_i(), this.characteristic_i(), this.skill_i(), this.top_i(), this.item2_i(), this.item1_i(), this.btnFast_i(), this.btnFight_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.BG_i = function() {
        var t = new eui.Image;
        return this.BG = t,
        t.height = 640,
        t.source = "common_ui_bg_1_png",
        t.percentWidth = 100,
        t.x = 0,
        t.y = 0,
        t
    },
    i.pet_base_i = function() {
        var t = new eui.Image;
        return this.pet_base = t,
        t.height = 291,
        t.source = "common_pet_base_png",
        t.width = 421,
        t.x = 146,
        t.y = 330,
        t
    },
    i.imgBtn_pet_i = function() {
        var t = new eui.Image;
        return this.imgBtn_pet = t,
        t.height = 57,
        t.source = "pve_jiehuang_powerup_imgBtn_pet_png",
        t.width = 57,
        t.x = 33,
        t.y = 241,
        t
    },
    i.imgBtn_cure_i = function() {
        var t = new eui.Image;
        return this.imgBtn_cure = t,
        t.height = 57,
        t.source = "pve_jiehuang_powerup_imgBtn_cure_png",
        t.width = 57,
        t.x = 33,
        t.y = 310,
        t
    },
    i.win_i = function() {
        var t = new eui.Group;
        return this.win = t,
        t.right = 0,
        t.y = 547,
        t.elementsContent = [this._Image1_i(), this._Label1_i(), this.txt_winTimes_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 66,
        t.source = "pve_jiehuang_powerup_txtbg_png",
        t.width = 772,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "HuaKangXinZongYi",
        t.lineSpacing = 3,
        t.size = 26,
        t.text = "累计战胜次数：",
        t.textColor = 16777215,
        t.touchEnabled = !1,
        t.x = 409,
        t.y = 11,
        t
    },
    i.txt_winTimes_i = function() {
        var t = new eui.Label;
        return this.txt_winTimes = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.lineSpacing = 3,
        t.size = 26,
        t.text = "00",
        t.textColor = 16777215,
        t.touchEnabled = !1,
        t.x = 598,
        t.y = 11,
        t
    },
    i.img_pet_1_i = function() {
        var t = new eui.Image;
        return this.img_pet_1 = t,
        t.height = 446,
        t.source = "pve_jiehuang_powerup_img_pet_1_png",
        t.width = 505,
        t.x = 137,
        t.y = 93,
        t
    },
    i.img_pet_2_i = function() {
        var t = new eui.Image;
        return this.img_pet_2 = t,
        t.height = 489,
        t.source = "pve_jiehuang_powerup_img_pet_2_png",
        t.visible = !1,
        t.width = 410,
        t.x = 157,
        t.y = 63,
        t
    },
    i.angry_i = function() {
        var t = new eui.Group;
        return this.angry = t,
        t.x = 0,
        t.y = 461,
        t.elementsContent = [this._Image2_i(), this._Image3_i(), this._Image4_i(), this._Image5_i(), this.fire_2_i(), this.fire_1_i(), this.fire_0_i(), this._Label2_i()],
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 90,
        t.source = "pve_jiehuang_powerup_firebg_png",
        t.width = 836,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.height = 42,
        t.source = "pve_jiehuang_powerup_fire_dark_png",
        t.width = 31,
        t.x = 388,
        t.y = 18,
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.height = 42,
        t.source = "pve_jiehuang_powerup_fire_dark_png",
        t.width = 31,
        t.x = 345,
        t.y = 18,
        t
    },
    i._Image5_i = function() {
        var t = new eui.Image;
        return t.height = 42,
        t.source = "pve_jiehuang_powerup_fire_dark_png",
        t.width = 31,
        t.x = 302,
        t.y = 18,
        t
    },
    i.fire_2_i = function() {
        var t = new eui.Image;
        return this.fire_2 = t,
        t.height = 52,
        t.source = "pve_jiehuang_powerup_fire_png",
        t.width = 40,
        t.x = 383,
        t.y = 13,
        t
    },
    i.fire_1_i = function() {
        var t = new eui.Image;
        return this.fire_1 = t,
        t.height = 52,
        t.source = "pve_jiehuang_powerup_fire_png",
        t.width = 40,
        t.x = 340,
        t.y = 13,
        t
    },
    i.fire_0_i = function() {
        var t = new eui.Image;
        return this.fire_0 = t,
        t.height = 52,
        t.source = "pve_jiehuang_powerup_fire_png",
        t.width = 40,
        t.x = 297,
        t.y = 13,
        t
    },
    i._Label2_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "HuaKangXinZongYi",
        t.lineSpacing = 3,
        t.size = 26,
        t.text = "当前怒气值：",
        t.textColor = 16777215,
        t.touchEnabled = !1,
        t.x = 133,
        t.y = 28,
        t
    },
    i.btnFreeze_i = function() {
        var t = new eui.Image;
        return this.btnFreeze = t,
        t.height = 40,
        t.source = "pve_jiehuang_powerup_btnFreeze_png",
        t.width = 110,
        t.x = 449,
        t.y = 481,
        t
    },
    i.token_i = function() {
        var t = new eui.Group;
        return this.token = t,
        t.right = -29,
        t.y = 96,
        t.elementsContent = [this._Image6_i(), this._Image7_i(), this.btnGet_0_i(), this.btnBuy_0_i(), this.flag_got_0_i(), this.icon_token_i()],
        t
    },
    i._Image6_i = function() {
        var t = new eui.Image;
        return t.height = 135,
        t.source = "pve_jiehuang_powerup_iconbg_png",
        t.x = 0,
        t.y = 16,
        t
    },
    i._Image7_i = function() {
        var t = new eui.Image;
        return t.height = 37,
        t.source = "pve_jiehuang_powerup_title_token_png",
        t.width = 99,
        t.x = 34,
        t.y = 0,
        t
    },
    i.btnGet_0_i = function() {
        var t = new eui.Image;
        return this.btnGet_0 = t,
        t.height = 42,
        t.source = "pve_jiehuang_powerup_btnGet_png",
        t.width = 162,
        t.x = 238,
        t.y = 29,
        t
    },
    i.btnBuy_0_i = function() {
        var t = new eui.Image;
        return this.btnBuy_0 = t,
        t.height = 40,
        t.source = "pve_jiehuang_powerup_btnBuy_png",
        t.width = 160,
        t.x = 239,
        t.y = 79,
        t
    },
    i.flag_got_0_i = function() {
        var t = new eui.Image;
        return this.flag_got_0 = t,
        t.height = 57,
        t.source = "pve_jiehuang_powerup_flag_got_png",
        t.width = 110,
        t.x = 245,
        t.y = 46,
        t
    },
    i.icon_token_i = function() {
        var t = new eui.Image;
        return this.icon_token = t,
        t.horizontalCenter = -96.5,
        t.source = "pve_jiehuang_powerup_icon_token_png",
        t.verticalCenter = -6,
        t
    },
    i.characteristic_i = function() {
        var t = new eui.Group;
        return this.characteristic = t,
        t.right = 2,
        t.y = 236,
        t.elementsContent = [this._Image8_i(), this._Image9_i(), this.btnGet_1_i(), this.btnBuy_1_i(), this.icon_characteristic_i(), this.flag_got_1_i()],
        t
    },
    i._Image8_i = function() {
        var t = new eui.Image;
        return t.height = 135,
        t.source = "pve_jiehuang_powerup_iconbg_png",
        t.x = 0,
        t.y = 16,
        t
    },
    i._Image9_i = function() {
        var t = new eui.Image;
        return t.height = 37,
        t.source = "pve_jiehuang_powerup_title_characteristic_png",
        t.width = 100,
        t.x = 34,
        t.y = 0,
        t
    },
    i.btnGet_1_i = function() {
        var t = new eui.Image;
        return this.btnGet_1 = t,
        t.height = 42,
        t.source = "pve_jiehuang_powerup_btnGet_png",
        t.width = 162,
        t.x = 238,
        t.y = 29,
        t
    },
    i.btnBuy_1_i = function() {
        var t = new eui.Image;
        return this.btnBuy_1 = t,
        t.height = 40,
        t.source = "pve_jiehuang_powerup_btnBuy_png",
        t.width = 160,
        t.x = 239,
        t.y = 79,
        t
    },
    i.icon_characteristic_i = function() {
        var t = new eui.Image;
        return this.icon_characteristic = t,
        t.height = 56,
        t.source = "pve_jiehuang_powerup_icon_characteristic_png",
        t.width = 64,
        t.x = 98,
        t.y = 41,
        t
    },
    i.flag_got_1_i = function() {
        var t = new eui.Image;
        return this.flag_got_1 = t,
        t.height = 57,
        t.source = "pve_jiehuang_powerup_flag_got_png",
        t.width = 110,
        t.x = 245,
        t.y = 45,
        t
    },
    i.skill_i = function() {
        var t = new eui.Group;
        return this.skill = t,
        t.right = 32,
        t.y = 373,
        t.elementsContent = [this._Image10_i(), this._Image11_i(), this.btnGet_2_i(), this.btnBuy_2_i(), this.icon_skill_i(), this.flag_got_2_i()],
        t
    },
    i._Image10_i = function() {
        var t = new eui.Image;
        return t.height = 135,
        t.source = "pve_jiehuang_powerup_iconbg_png",
        t.x = 0,
        t.y = 16,
        t
    },
    i._Image11_i = function() {
        var t = new eui.Image;
        return t.height = 36,
        t.source = "pve_jiehuang_powerup_title_skill_png",
        t.width = 99,
        t.x = 34,
        t.y = 0,
        t
    },
    i.btnGet_2_i = function() {
        var t = new eui.Image;
        return this.btnGet_2 = t,
        t.height = 42,
        t.source = "pve_jiehuang_powerup_btnGet_png",
        t.width = 162,
        t.x = 238,
        t.y = 29,
        t
    },
    i.btnBuy_2_i = function() {
        var t = new eui.Image;
        return this.btnBuy_2 = t,
        t.height = 40,
        t.source = "pve_jiehuang_powerup_btnBuy_png",
        t.width = 160,
        t.x = 239,
        t.y = 79,
        t
    },
    i.icon_skill_i = function() {
        var t = new eui.Image;
        return this.icon_skill = t,
        t.height = 60,
        t.source = "pve_jiehuang_powerup_icon_skill_png",
        t.width = 57,
        t.x = 100,
        t.y = 42,
        t
    },
    i.flag_got_2_i = function() {
        var t = new eui.Image;
        return this.flag_got_2 = t,
        t.height = 57,
        t.source = "pve_jiehuang_powerup_flag_got_png",
        t.width = 110,
        t.x = 244,
        t.y = 45,
        t
    },
    i.top_i = function() {
        var t = new eui.Group;
        return this.top = t,
        t.percentWidth = 100,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image12_i(), this.btnClose_i(), this.title_i(), this.helpBtn_png_i()],
        t
    },
    i._Image12_i = function() {
        var t = new eui.Image;
        return t.height = 51,
        t.source = "common_top_bg_style1_png",
        t.percentWidth = 100,
        t.x = 0,
        t.y = 0,
        t
    },
    i.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.source = "common_close_2_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.title_i = function() {
        var t = new eui.Image;
        return this.title = t,
        t.height = 36,
        t.source = "pve_jiehuang_powerup_title_1_png",
        t.width = 245,
        t.x = 112,
        t.y = 7,
        t
    },
    i.helpBtn_png_i = function() {
        var t = new eui.Image;
        return this.helpBtn_png = t,
        t.source = "common_help_icon_png",
        t.x = 361,
        t.y = 9,
        t
    },
    i.item2_i = function() {
        var t = new eui.Group;
        return this.item2 = t,
        t.right = 20,
        t.y = 11,
        t.elementsContent = [this.txt_itemName_i(), this.txt_itemNum_i(), this.btnPlus_i(), this.itemIcon_i()],
        t
    },
    i.txt_itemName_i = function() {
        var t = new eui.Label;
        return this.txt_itemName = t,
        t.lineSpacing = 3,
        t.size = 18,
        t.text = "时空之砂：",
        t.textColor = 16777215,
        t.touchEnabled = !1,
        t.x = 0,
        t.y = 6,
        t
    },
    i.txt_itemNum_i = function() {
        var t = new eui.Label;
        return this.txt_itemNum = t,
        t.lineSpacing = 3,
        t.size = 18,
        t.text = "000",
        t.textColor = 16777215,
        t.touchEnabled = !1,
        t.x = 89,
        t.y = 7,
        t
    },
    i.btnPlus_i = function() {
        var t = new eui.Image;
        return this.btnPlus = t,
        t.height = 26,
        t.source = "pve_jiehuang_powerup_btnPlus_png",
        t.width = 26,
        t.x = 137,
        t.y = 0,
        t
    },
    i.itemIcon_i = function() {
        var t = new eui.Image;
        return this.itemIcon = t,
        t.height = 30,
        t.width = 30,
        t.x = -32,
        t.y = 0,
        t
    },
    i.item1_i = function() {
        var t = new eui.Group;
        return this.item1 = t,
        t.right = 218,
        t.y = 17,
        t.elementsContent = [this._Label3_i(), this.txt_fightTimes_i(), this.btnPlus1_i()],
        t
    },
    i._Label3_i = function() {
        var t = new eui.Label;
        return t.lineSpacing = 3,
        t.size = 18,
        t.text = "今日挑战次数：",
        t.textColor = 16777215,
        t.touchEnabled = !1,
        t.x = 0,
        t.y = 0,
        t
    },
    i.txt_fightTimes_i = function() {
        var t = new eui.Label;
        return this.txt_fightTimes = t,
        t.lineSpacing = 3,
        t.size = 18,
        t.text = "000",
        t.textColor = 16777215,
        t.touchEnabled = !1,
        t.x = 126,
        t.y = 1,
        t
    },
    i.btnPlus1_i = function() {
        var t = new eui.Image;
        return this.btnPlus1 = t,
        t.height = 26,
        t.source = "pve_jiehuang_powerup_btnPlus_png",
        t.width = 26,
        t.x = 166.325,
        t.y = -3.907,
        t
    },
    i.btnFast_i = function() {
        var t = new eui.Image;
        return this.btnFast = t,
        t.height = 50,
        t.source = "pve_jiehuang_powerup_btnFast_png",
        t.width = 174,
        t.x = 369,
        t.y = 546,
        t
    },
    i.btnFight_i = function() {
        var t = new eui.Image;
        return this.btnFight = t,
        t.height = 52,
        t.source = "pve_jiehuang_powerup_btnFight_png",
        t.width = 176,
        t.x = 179,
        t.y = 546,
        t
    },
    e
} (eui.Skin);