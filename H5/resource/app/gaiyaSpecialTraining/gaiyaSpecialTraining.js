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
gaiyaSpecialTraining; !
function(e) {
    var t = function(t) {
        function i() {
            var e = t.call(this) || this;
            return e.cur = 0,
            e._haveGotArr = [0, 0, 0],
            e.old_haveGotArr = [0, 0, 0],
            e.skinName = GaiyaSpecialTrainingSkin,
            e.cacheAsBitmap = !0,
            e
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            var i = this;
            t.prototype.childrenCreated.call(this),
            t.prototype.initOldPveBtnClose.call(this, 0, this, "gaiya_special_training_title_png"),
            this.adaptBgByScale(this.bg),
            ImageButtonUtil.add(this.btnChange,
            function() {
                StatLogger.log("20230804版本系统功能", "战神联盟初始形态搬迁", "盖亚-点击主界面【切换】");
                var t = PetManager.getPetInfo(PetManager.defaultTime);
                return 261 != t.id ? void Alarm.show("请将盖亚放入背包首发位置",
                function() {
                    ModuleManager.showModuleByID(10)
                }) : void PopViewManager.getInstance().openView(new e.GaiyaSpecialTrainingTalentPop)
            },
            this);
            for (var n = function(t) {
                ImageButtonUtil.add(a["a_" + (t + 1)],
                function() {
                    return i.cur = t + 1,
                    2 == i.cur && 1 != i._haveGotArr[0] ? void BubblerManager.getInstance().showText("请先完成“嗜血之力”关卡") : 3 != i.cur || 1 == i._haveGotArr[0] && 1 == i._haveGotArr[1] ? void PopViewManager.getInstance().openView(new e.GaiyaSpecialTrainingFightPop, null, i.cur) : void BubblerManager.getInstance().showText("请先完成“嗜血之力”和“邪气凌然”关卡")
                },
                a)
            },
            a = this, r = 0; 3 > r; r++) n(r);
            EventManager.addEventListener(PetFightEvent.ALARM_CLICK,
            function(t) {
                FightManager.isWin ? i.updateView(!0) : (BubblerManager.getInstance().showText("未按照条件击败敌人，无法激活特性！"), PopViewManager.getInstance().openView(new e.GaiyaSpecialTrainingFightPop, null, i.cur))
            },
            this),
            SocketConnection.addCmdListener(CommandID.M_2150,
            function() {
                PetManager.upDateBagPetInfo(PetManager.defaultTime),
                Alert.show("盖亚已获得新魂印\n是否立刻前往更换？",
                function() {
                    PopViewManager.getInstance().openView(new e.GaiyaSpecialTrainingTalentPop)
                })
            },
            this),
            this.updateView()
        },
        i.prototype.updateView = function(t) {
            var i = this;
            void 0 === t && (t = !1),
            SocketConnection.sendByQueue(CommandID.M_2149, [],
            function(n) {
                var a = n.data,
                r = !1;
                if (a) {
                    var o = (a.readUnsignedInt(), a.readUnsignedInt());
                    console.log(o);
                    for (var s = 0; o > s; s++) {
                        var _ = a.readUnsignedInt();
                        i._haveGotArr[_ - 1] = 1
                    }
                    r = t && i.old_haveGotArr.toString() != i._haveGotArr.toString(),
                    i.old_haveGotArr = i._haveGotArr.slice()
                }
                i.cur && r ? (PetManager.upDateBagPetInfo(PetManager.defaultTime), Alert.show("盖亚已获得新魂印\n是否立刻前往更换？",
                function() {
                    PopViewManager.getInstance().openView(new e.GaiyaSpecialTrainingTalentPop)
                })) : i.cur && !r && t && BubblerManager.getInstance().showText("未按照条件击败，请再次尝试！");
                for (var s = 0; 3 > s; s++) i["a_" + (s + 1)].touchEnabled = !i._haveGotArr[s],
                i["go" + (s + 1)].visible = !i._haveGotArr[s],
                i["got_" + (s + 1)].visible = i._haveGotArr[s] > 0
            })
        },
        i.prototype.destroy = function() {
            t.prototype.destroy.call(this)
        },
        i
    } (BaseModule);
    e.GaiyaSpecialTraining = t,
    __reflect(t.prototype, "gaiyaSpecialTraining.GaiyaSpecialTraining")
} (gaiyaSpecialTraining || (gaiyaSpecialTraining = {}));
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
gaiyaSpecialTraining; !
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.titleArr = ["嗜血之力", "邪气凌然", "石破天惊"],
            t.descArr = ["每回合恢复5%体力", "攻击技能附加30点伤害", "技能有5%概率威力翻倍"],
            t.tipArr = ["<font color= #fff370>满血</font>击败心魔雷伊", "<font color= #fff370>承受10回合攻击\n</font>清除内心的黑暗能量", "使用<font color= #fff370>石破天惊</font>技能\n<font color= #fff370>致命一击</font>击败哈莫雷特"],
            t.skinName = GaiyaSpecialTrainingFightSkin,
            t
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            var t = this;
            e.prototype.childrenCreated.call(this),
            ImageButtonUtil.add(this.close, this.hide, this),
            ImageButtonUtil.add(this.bag,
            function() {
                t.hide(),
                ModuleManager.showModuleByID(10)
            },
            this),
            ImageButtonUtil.add(this.cure,
            function() {
                PetManager.cureAll()
            },
            this),
            ImageButtonUtil.add(this.challenge,
            function() {
                if (PetManager.isDefaultPet(261)) {
                    var e = ~~t._data - 1;
                    t.hide(),
                    FightManager.fightNoMapBoss(18533 + e)
                } else StatLogger.log("20230804版本系统功能", "战神联盟初始形态搬迁", "盖亚-点击任意【开始战斗】时首发不对"),
                Alarm.show("请将盖亚放入背包首发位置",
                function() {
                    t.hide(),
                    ModuleManager.showModuleByID(10)
                })
            },
            this)
        },
        t.prototype._upDateView = function() {
            var t = this;
            e.prototype._upDateView.call(this),
            SocketConnection.sendByQueue(CommandID.ARESUNIONCHALLENGE_GET_TRAIN_PROGRESS, [1],
            function(e) {
                var i = e.data,
                n = [],
                a = [],
                r = ~~t._data - 1;
                n[0] = i.readUnsignedInt(),
                a[0] = i.readUnsignedInt(),
                n[1] = i.readUnsignedInt(),
                a[1] = i.readUnsignedInt(),
                n[2] = i.readUnsignedInt(),
                a[2] = i.readUnsignedInt(),
                t.desc.text = t.descArr[r],
                t.tip.textFlow = (new egret.HtmlTextParser).parser(t.tipArr[r]),
                t.title.text = t.titleArr[r],
                t.pet.source = "gaiya_special_training_p" + (r + 1) + "_png"
            })
        },
        t
    } (PopView);
    e.GaiyaSpecialTrainingFightPop = t,
    __reflect(t.prototype, "gaiyaSpecialTraining.GaiyaSpecialTrainingFightPop")
} (gaiyaSpecialTraining || (gaiyaSpecialTraining = {}));
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
gaiyaSpecialTraining; !
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.curDef = 0,
            t._selectID = 0,
            t.skinName = GaiyaSpecialTrainingTalentSkin,
            t
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            var t = this;
            e.prototype.childrenCreated.call(this),
            ImageButtonUtil.add(this.close, this.hide, this);
            for (var i = function(e) {
                ImageButtonUtil.add(n["btnReplace_" + (e + 1)],
                function() {
                    StatLogger.log("20230804版本系统功能", "战神联盟初始形态搬迁", "盖亚-点击切换界面任意【更换】"),
                    t._selectID = e + 1,
                    t.select.horizontalCenter = t["talent" + t._selectID].horizontalCenter - 7.5,
                    t.select.visible = !0,
                    SocketConnection.sendByQueue(CommandID.M_2148, [t._selectID],
                    function(i) {
                        t.dr.x = t["not" + t._selectID].x + 3,
                        t.dr.visible = !0;
                        var n = ["血", "邪", "天"][e];
                        BubblerManager.getInstance().showText("魂印已切换为：<font color= #fff370>" + n + "</font>", !0),
                        t._upDateView()
                    })
                },
                n)
            },
            n = this, a = 0; 3 > a; a++) i(a)
        },
        t.prototype._upDateView = function() {
            var t = this;
            e.prototype._upDateView.call(this),
            SocketConnection.sendByQueue(CommandID.M_2149, [],
            function(e) {
                for (var i = 0; 3 > i; i++) t["not" + (i + 1)].visible = !0,
                t["talent" + (i + 1)].touchEnabled = !1,
                t["btnReplace_" + (i + 1)].touchEnabled = !1;
                t.select.visible = !1;
                var n = e.data;
                t.curDef = n.readUnsignedInt();
                for (var a = n.readUnsignedInt(), r = [], i = 0; a > i; i++) r.push(n.readUnsignedInt()); - 1 != r.indexOf(1) && t.openBtn(1),
                -1 != r.indexOf(2) && t.openBtn(2),
                -1 != r.indexOf(3) && t.openBtn(3),
                t.curDef && (t._selectID = t.curDef, t.select.horizontalCenter = t["talent" + t._selectID].horizontalCenter - 5, t.select.visible = !0, t.dr.x = t["not" + t._selectID].x + 3, t.dr.visible = !!t._selectID)
            })
        },
        t.prototype.openBtn = function(e) {
            this["not" + e].visible = !1,
            this["btnReplace_" + e].touchEnabled = !0,
            this["btnReplace_" + e].visible = this.curDef != e,
            this["talent" + e].touchEnabled = !0
        },
        t
    } (PopView);
    e.GaiyaSpecialTrainingTalentPop = t,
    __reflect(t.prototype, "gaiyaSpecialTraining.GaiyaSpecialTrainingTalentPop")
} (gaiyaSpecialTraining || (gaiyaSpecialTraining = {}));
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
generateEUI.paths["resource/eui_skins/GaiyaSpecialTrainingFightSkin.exml"] = window.GaiyaSpecialTrainingFightSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["pet", "bag", "cure", "tip", "title", "challenge", "desc", "close"],
        this.height = 402,
        this.width = 612,
        this.elementsContent = [this._Group1_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Group1_i = function() {
        var e = new eui.Group;
        return e.cacheAsBitmap = !0,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this._Image1_i(), this.pet_i(), this.bag_i(), this.cure_i(), this._Label1_i(), this.tip_i(), this._Label2_i(), this.title_i(), this.challenge_i(), this.desc_i(), this.close_i()],
        e
    },
    i._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "gaiya_special_training_fightbg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.pet_i = function() {
        var e = new eui.Image;
        return this.pet = e,
        e.horizontalCenter = -125.5,
        e.source = "gaiya_special_training_p2_png",
        e.y = 62,
        e
    },
    i.bag_i = function() {
        var e = new eui.Image;
        return this.bag = e,
        e.source = "gaiya_special_training_bag_png",
        e.x = 7,
        e.y = 216,
        e
    },
    i.cure_i = function() {
        var e = new eui.Image;
        return this.cure = e,
        e.source = "gaiya_special_training_cure_png",
        e.x = 6,
        e.y = 303,
        e
    },
    i._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "REEJI",
        e.size = 20,
        e.text = "战胜敌人可获得新魂印",
        e.textColor = 16761515,
        e.x = 384,
        e.y = 78,
        e
    },
    i.tip_i = function() {
        var e = new eui.Label;
        return this.tip = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "攻击技能附加30点伤害",
        e.textAlign = "center",
        e.textColor = 14126959,
        e.verticalCenter = 33,
        e.width = 200,
        e.x = 384.79,
        e
    },
    i._Label2_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "REEJI",
        e.size = 18,
        e.text = "战胜条件",
        e.textColor = 16761771,
        e.x = 448,
        e.y = 192,
        e
    },
    i.title_i = function() {
        var e = new eui.Label;
        return this.title = e,
        e.fontFamily = "REEJI",
        e.horizontalCenter = 0,
        e.size = 26,
        e.stroke = 1,
        e.strokeColor = 9572879,
        e.text = "嗜血之力",
        e.textColor = 16777215,
        e.y = 20,
        e
    },
    i.challenge_i = function() {
        var e = new eui.Image;
        return this.challenge = e,
        e.source = "gaiya_special_training_challenge_png",
        e.x = 416,
        e.y = 300,
        e
    },
    i.desc_i = function() {
        var e = new eui.Label;
        return this.desc = e,
        e.fontFamily = "MFShangHei",
        e.horizontalCenter = 179,
        e.size = 19.9961545856566,
        e.text = "每回合恢复5%体力",
        e.textColor = 16774231,
        e.y = 118,
        e
    },
    i.close_i = function() {
        var e = new eui.Image;
        return this.close = e,
        e.source = "gaiya_special_training_close_png",
        e.x = 568,
        e.y = 9,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/GaiyaSpecialTrainingSkin.exml"] = window.GaiyaSpecialTrainingSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["bg", "pet", "btnChange", "go1", "got_1", "a_1", "go2", "got_2", "a_2", "go3", "got_3", "a_3"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this._Group1_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i.bg_i = function() {
        var e = new eui.Image;
        return this.bg = e,
        e.horizontalCenter = 0,
        e.source = "gaiya_special_training_bg_jpg",
        e.verticalCenter = 0,
        e
    },
    i._Group1_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = 0,
        e.y = 71,
        e.elementsContent = [this.pet_i(), this.btnChange_i(), this.a_1_i(), this.a_2_i(), this.a_3_i()],
        e
    },
    i.pet_i = function() {
        var e = new eui.Image;
        return this.pet = e,
        e.source = "gaiya_special_training_pet_png",
        e.x = 95,
        e.y = 0,
        e
    },
    i.btnChange_i = function() {
        var e = new eui.Image;
        return this.btnChange = e,
        e.source = "gaiya_special_training_btnchange_png",
        e.x = 0,
        e.y = 390,
        e
    },
    i.a_1_i = function() {
        var e = new eui.Group;
        return this.a_1 = e,
        e.x = 554,
        e.y = 35,
        e.elementsContent = [this._Image1_i(), this.go1_i(), this.got_1_i()],
        e
    },
    i._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "gaiya_special_training_1_png",
        e.visible = !0,
        e.x = 0,
        e.y = 0,
        e
    },
    i.go1_i = function() {
        var e = new eui.Image;
        return this.go1 = e,
        e.right = 0,
        e.source = "trail_gaia_btnget_png",
        e.y = 67.308,
        e
    },
    i.got_1_i = function() {
        var e = new eui.Image;
        return this.got_1 = e,
        e.source = "gaiya_special_training_got_1_png",
        e.visible = !0,
        e.x = 214,
        e.y = 69,
        e
    },
    i.a_2_i = function() {
        var e = new eui.Group;
        return this.a_2 = e,
        e.x = 554,
        e.y = 185,
        e.elementsContent = [this._Image2_i(), this.go2_i(), this.got_2_i()],
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "gaiya_special_training_2_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.go2_i = function() {
        var e = new eui.Image;
        return this.go2 = e,
        e.right = 0,
        e.source = "trail_gaia_btnget_png",
        e.y = 67.308,
        e
    },
    i.got_2_i = function() {
        var e = new eui.Image;
        return this.got_2 = e,
        e.source = "gaiya_special_training_got_1_png",
        e.visible = !0,
        e.x = 214,
        e.y = 69,
        e
    },
    i.a_3_i = function() {
        var e = new eui.Group;
        return this.a_3 = e,
        e.x = 554,
        e.y = 333,
        e.elementsContent = [this._Image3_i(), this.go3_i(), this.got_3_i()],
        e
    },
    i._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "gaiya_special_training_3_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.go3_i = function() {
        var e = new eui.Image;
        return this.go3 = e,
        e.right = 0,
        e.source = "trail_gaia_btnget_png",
        e.y = 67.308,
        e
    },
    i.got_3_i = function() {
        var e = new eui.Image;
        return this.got_3 = e,
        e.source = "gaiya_special_training_got_1_png",
        e.visible = !0,
        e.x = 214,
        e.y = 69,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/GaiyaSpecialTrainingTalentSkin.exml"] = window.GaiyaSpecialTrainingTalentSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["close", "talent1", "talent2", "talent3", "btnReplace_1", "btnReplace_2", "btnReplace_3", "select", "not1", "not2", "not3", "dr"],
        this.height = 402,
        this.width = 648,
        this.elementsContent = [this._Group1_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Group1_i = function() {
        var e = new eui.Group;
        return e.cacheAsBitmap = !0,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this._Image1_i(), this.close_i(), this.talent1_i(), this.talent2_i(), this.talent3_i(), this.btnReplace_1_i(), this.btnReplace_2_i(), this.btnReplace_3_i(), this.select_i(), this.not1_i(), this.not2_i(), this.not3_i(), this.dr_i()],
        e
    },
    i._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "gaiya_special_training_talentbg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.close_i = function() {
        var e = new eui.Image;
        return this.close = e,
        e.source = "gaiya_special_training_close_png",
        e.x = 603,
        e.y = 9,
        e
    },
    i.talent1_i = function() {
        var e = new eui.Image;
        return this.talent1 = e,
        e.horizontalCenter = -204,
        e.source = "gaiya_special_training_ta1_png",
        e.y = 61,
        e
    },
    i.talent2_i = function() {
        var e = new eui.Image;
        return this.talent2 = e,
        e.horizontalCenter = 6,
        e.source = "gaiya_special_training_ta2_png",
        e.y = 61,
        e
    },
    i.talent3_i = function() {
        var e = new eui.Image;
        return this.talent3 = e,
        e.horizontalCenter = 215,
        e.source = "gaiya_special_training_ta3_png",
        e.y = 61,
        e
    },
    i.btnReplace_1_i = function() {
        var e = new eui.Image;
        return this.btnReplace_1 = e,
        e.source = "gaiya_special_training_btnreplace_png",
        e.x = 68,
        e.y = 321,
        e
    },
    i.btnReplace_2_i = function() {
        var e = new eui.Image;
        return this.btnReplace_2 = e,
        e.source = "gaiya_special_training_btnreplace_png",
        e.x = 278,
        e.y = 321,
        e
    },
    i.btnReplace_3_i = function() {
        var e = new eui.Image;
        return this.btnReplace_3 = e,
        e.source = "gaiya_special_training_btnreplace_png",
        e.x = 487,
        e.y = 321,
        e
    },
    i.select_i = function() {
        var e = new eui.Image;
        return this.select = e,
        e.height = 341,
        e.horizontalCenter = -1.5,
        e.scale9Grid = new egret.Rectangle(24, 23, 12, 14),
        e.source = "gaiya_special_training_select_png",
        e.visible = !0,
        e.width = 217,
        e.y = 45,
        e
    },
    i.not1_i = function() {
        var e = new eui.Image;
        return this.not1 = e,
        e.source = "gaiya_special_training_not_png",
        e.visible = !1,
        e.x = 19,
        e.y = 61,
        e
    },
    i.not2_i = function() {
        var e = new eui.Image;
        return this.not2 = e,
        e.source = "gaiya_special_training_not_png",
        e.visible = !1,
        e.x = 230.123,
        e.y = 61,
        e
    },
    i.not3_i = function() {
        var e = new eui.Image;
        return this.not3 = e,
        e.source = "gaiya_special_training_not_png",
        e.visible = !1,
        e.x = 438.784,
        e.y = 61,
        e
    },
    i.dr_i = function() {
        var e = new eui.Image;
        return this.dr = e,
        e.source = "gaiya_special_training_dr_png",
        e.visible = !1,
        e.x = 233,
        e.y = 66,
        e
    },
    t
} (eui.Skin);