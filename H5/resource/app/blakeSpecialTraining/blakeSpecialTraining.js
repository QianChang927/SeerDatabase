var __reflect = this && this.__reflect ||
function(e, t, n) {
    e.__class__ = t,
    n ? n.push(t) : n = [t],
    e.__types__ = e.__types__ ? n.concat(e.__types__) : n
},
__extends = this && this.__extends ||
function(e, t) {
    function n() {
        this.constructor = e
    }
    for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
    n.prototype = t.prototype,
    e.prototype = new n
},
blakeSpecialTraining; !
function(e) {
    var t = function(t) {
        function n() {
            var e = t.call(this) || this;
            return e.cur = 0,
            e._progressArr = [],
            e._haveGotArr = [],
            e.skinName = BlakeSpecialTrainingSkin,
            e.cacheAsBitmap = !0,
            e
        }
        return __extends(n, t),
        n.prototype.childrenCreated = function() {
            var n = this;
            t.prototype.childrenCreated.call(this),
            t.prototype.initOldPveBtnClose.call(this, 0, this, "blake_special_training_title_png"),
            this.adaptBgByScale(this.bg),
            ImageButtonUtil.add(this.talent,
            function() {
                StatLogger.log("20230804版本系统功能", "战神联盟初始形态搬迁", "布莱克-点击主界面【切换】"),
                PopViewManager.getInstance().openView(new e.BlakeSpecialTrainingTalentPop)
            },
            this);
            for (var i = function(t) {
                ImageButtonUtil.add(a["a_" + (t + 1)],
                function() {
                    n.cur = t + 1,
                    PopViewManager.getInstance().openView(new e.BlakeSpecialTrainingFightPop, null, n.cur)
                },
                a)
            },
            a = this, r = 0; 3 > r; r++) i(r);
            EventManager.addEventListener(PetFightEvent.ALARM_CLICK,
            function(t) {
                FightManager.isWin ? n.updateView(!0) : (BubblerManager.getInstance().showText("未按照条件击败敌人，无法激活天赋！"), PopViewManager.getInstance().openView(new e.BlakeSpecialTrainingFightPop, null, n.cur))
            },
            this),
            this.updateView()
        },
        n.prototype.updateView = function(t) {
            var n = this;
            void 0 === t && (t = !1),
            SocketConnection.sendByQueue(CommandID.ARESUNIONCHALLENGE_GET_TRAIN_PROGRESS, [1],
            function(i) {
                var a = i.data,
                r = !1;
                n._progressArr[0] = a.readUnsignedInt();
                var o = a.readUnsignedInt();
                r = 1 == o && 0 == ~~n._haveGotArr[0],
                n._haveGotArr[0] = o,
                n._progressArr[1] = a.readUnsignedInt();
                var _ = a.readUnsignedInt(); ! r && (r = 1 == _ && 0 == ~~n._haveGotArr[1]),
                n._haveGotArr[1] = _,
                n._progressArr[2] = a.readUnsignedInt();
                var s = a.readUnsignedInt(); ! r && (r = 1 == s && 0 == ~~n._haveGotArr[2]),
                n._haveGotArr[2] = s,
                n.cur && r ? (PetManager.upDateBagPetInfo(PetManager.defaultTime), Alert.show("布莱克已获得新天赋\n是否立刻前往更换？",
                function() {
                    PopViewManager.getInstance().openView(new e.BlakeSpecialTrainingTalentPop)
                })) : n.cur && !r && t && BubblerManager.getInstance().showText("未按照条件击败，请再次尝试！");
                for (var l = 0; 3 > l; l++) n["a_" + (l + 1)].touchEnabled = n._haveGotArr[l] <= 0,
                n["go" + (l + 1)].visible = n._haveGotArr[l] <= 0,
                n["got_" + (l + 1)].visible = n._haveGotArr[l] > 0
            })
        },
        n.prototype.destroy = function() {
            t.prototype.destroy.call(this)
        },
        n
    } (BaseModule);
    e.BlakeSpecialTraining = t,
    __reflect(t.prototype, "blakeSpecialTraining.BlakeSpecialTraining")
} (blakeSpecialTraining || (blakeSpecialTraining = {}));
var __reflect = this && this.__reflect ||
function(e, t, n) {
    e.__class__ = t,
    n ? n.push(t) : n = [t],
    e.__types__ = e.__types__ ? n.concat(e.__types__) : n
},
__extends = this && this.__extends ||
function(e, t) {
    function n() {
        this.constructor = e
    }
    for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
    n.prototype = t.prototype,
    e.prototype = new n
},
blakeSpecialTraining; !
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.titleArr = ["狂之印", "霸之体", "意之念"],
            t.descArr = ["所有攻击附带5%吸血", "体力值增加5%", "受到伤害降低5%"],
            t.tipArr1 = ["一击必杀", "致命一击击败", "抵挡5次攻击后击败"],
            t.tipArr2 = ["击败对手", "对手", "对手"],
            t.skinName = BlakeSpecialTrainingFightPopSkin,
            t.cacheAsBitmap = !0,
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
                if (PetManager.isDefaultPet(875)) {
                    var e = ~~t._data - 1;
                    t.hide(),
                    FightManager.fightNoMapBoss(18539 + e)
                } else StatLogger.log("20230804版本系统功能", "战神联盟初始形态搬迁", "布莱克-点击任意【开始战斗】时首发不对"),
                Alarm.show("请将布莱克放入背包首发位置",
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
                var n = e.data,
                i = [],
                a = [],
                r = ~~t._data - 1;
                i[0] = n.readUnsignedInt(),
                a[0] = n.readUnsignedInt(),
                i[1] = n.readUnsignedInt(),
                a[1] = n.readUnsignedInt(),
                i[2] = n.readUnsignedInt(),
                a[2] = n.readUnsignedInt(),
                t.desc.text = t.descArr[r],
                t.tip.textFlow = [{
                    text: t.tipArr1[r],
                    style: {
                        textColor: 16774e3
                    }
                },
                {
                    text: t.tipArr2[r]
                }],
                t.title.source = "blake_special_training_title" + (r + 1) + "_png"
            })
        },
        t
    } (PopView);
    e.BlakeSpecialTrainingFightPop = t,
    __reflect(t.prototype, "blakeSpecialTraining.BlakeSpecialTrainingFightPop")
} (blakeSpecialTraining || (blakeSpecialTraining = {}));
var __reflect = this && this.__reflect ||
function(e, t, n) {
    e.__class__ = t,
    n ? n.push(t) : n = [t],
    e.__types__ = e.__types__ ? n.concat(e.__types__) : n
},
__extends = this && this.__extends ||
function(e, t) {
    function n() {
        this.constructor = e
    }
    for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
    n.prototype = t.prototype,
    e.prototype = new n
},
blakeSpecialTraining; !
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.curDef = 0,
            t._selectID = 0,
            t.skinName = BlakeSpecialTrainingTalentPopSkin,
            t
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            var t = this;
            e.prototype.childrenCreated.call(this),
            ImageButtonUtil.add(this.close, this.hide, this);
            for (var n = function(e) {
                ImageButtonUtil.add(i["btnReplace_" + (e + 1)],
                function() {
                    StatLogger.log("20230804版本系统功能", "战神联盟初始形态搬迁", "布莱克-点击切换界面任意【更换】"),
                    t._selectID = e + 1,
                    t.select.horizontalCenter = t["talent" + t._selectID].horizontalCenter - 5,
                    t.select.visible = !0,
                    SocketConnection.sendByQueue(CommandID.ARESUNIONCHALLENGE_SET_BULAIKE_ATTRIBUTE, [t._selectID],
                    function(n) {
                        t.dr.x = t["not_" + t._selectID].x + 5,
                        t.dr.visible = !0;
                        var i = ["狂", "霸", "意"][e];
                        BubblerManager.getInstance().showText("天赋已更换为：<font color= #fff370>" + i + "</font>", !0),
                        t._upDateView()
                    })
                },
                i)
            },
            i = this, a = 0; 3 > a; a++) n(a)
        },
        t.prototype._upDateView = function() {
            var t = this;
            e.prototype._upDateView.call(this),
            SocketConnection.sendByQueue(CommandID.ARESUNIONCHALLENGE_GET_BULAIKE_ATTRIBUTE, [],
            function(e) {
                for (var n = 0; 3 > n; n++) t["not_" + (n + 1)].visible = !0,
                t["talent" + (n + 1)].touchEnabled = !1,
                t["btnReplace_" + (n + 1)].touchEnabled = !1;
                t.select.visible = !1;
                var i = e.data;
                t.curDef = i.readUnsignedInt();
                for (var a = i.readUnsignedInt(), r = [], n = 0; a > n; n++) r.push(i.readUnsignedInt()); - 1 != r.indexOf(1) && t.openBtn(1),
                -1 != r.indexOf(2) && t.openBtn(2),
                -1 != r.indexOf(3) && t.openBtn(3),
                t.curDef && (t._selectID = t.curDef, t._selectID && (t.select.horizontalCenter = t["talent" + t._selectID].horizontalCenter - 5), t.select.visible = !0),
                t._selectID && (t.dr.x = t["not_" + t._selectID].x + 5),
                t.dr.visible = !!t._selectID
            })
        },
        t.prototype.openBtn = function(e) {
            this["not_" + e].visible = !1,
            this["btnReplace_" + e].touchEnabled = !0,
            this["btnReplace_" + e].visible = this.curDef != e,
            this["talent" + e].touchEnabled = !0
        },
        t
    } (PopView);
    e.BlakeSpecialTrainingTalentPop = t,
    __reflect(t.prototype, "blakeSpecialTraining.BlakeSpecialTrainingTalentPop")
} (blakeSpecialTraining || (blakeSpecialTraining = {}));
var __extends = this && this.__extends ||
function(e, t) {
    function n() {
        this.constructor = e
    }
    for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
    n.prototype = t.prototype,
    e.prototype = new n
};
window.generateEUI = window.generateEUI || {},
generateEUI.paths = generateEUI.paths || {},
generateEUI.styles = void 0,
generateEUI.skins = {},
generateEUI.paths["resource/eui_skins/BlakeSpecialTrainingFightPopSkin.exml"] = window.BlakeSpecialTrainingFightPopSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["pet", "bag", "cure", "tip", "desc", "close", "title", "challenge", "fightPop"],
        this.height = 402,
        this.width = 612,
        this.elementsContent = [this.fightPop_i()]
    }
    __extends(t, e);
    var n = t.prototype;
    return n.fightPop_i = function() {
        var e = new eui.Group;
        return this.fightPop = e,
        e.cacheAsBitmap = !0,
        e.height = 402,
        e.width = 612,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this._Image1_i(), this.pet_i(), this.bag_i(), this.cure_i(), this._Label1_i(), this.tip_i(), this._Label2_i(), this.desc_i(), this.close_i(), this.title_i(), this.challenge_i()],
        e
    },
    n._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "blake_special_training_fightpopbg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    n.pet_i = function() {
        var e = new eui.Image;
        return this.pet = e,
        e.horizontalCenter = -125.5,
        e.source = "blake_special_training_p1_png",
        e.verticalCenter = 9,
        e
    },
    n.bag_i = function() {
        var e = new eui.Image;
        return this.bag = e,
        e.source = "blake_special_training_bag_png",
        e.x = 7,
        e.y = 216,
        e
    },
    n.cure_i = function() {
        var e = new eui.Image;
        return this.cure = e,
        e.source = "blake_special_training_cure_png",
        e.x = 6,
        e.y = 303,
        e
    },
    n._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "REEJI",
        e.size = 20,
        e.text = "战胜敌人可获得新天赋",
        e.textColor = 13150975,
        e.x = 384,
        e.y = 78,
        e
    },
    n.tip_i = function() {
        var e = new eui.Label;
        return this.tip = e,
        e.fontFamily = "MFShangHei",
        e.horizontalCenter = 176,
        e.size = 18,
        e.text = "承受厄尔塞拉的攻击10回合",
        e.textColor = 9535147,
        e.y = 224.974,
        e
    },
    n._Label2_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "REEJI",
        e.size = 18,
        e.text = "战胜条件",
        e.textColor = 13216767,
        e.x = 448,
        e.y = 192,
        e
    },
    n.desc_i = function() {
        var e = new eui.Label;
        return this.desc = e,
        e.fontFamily = "MFShangHei",
        e.horizontalCenter = 180,
        e.size = 19.9961545856566,
        e.text = "所有攻击附带5%吸血",
        e.textColor = 16774231,
        e.y = 118,
        e
    },
    n.close_i = function() {
        var e = new eui.Image;
        return this.close = e,
        e.source = "blake_special_training_close_png",
        e.x = 568,
        e.y = 9,
        e
    },
    n.title_i = function() {
        var e = new eui.Image;
        return this.title = e,
        e.horizontalCenter = -1.5,
        e.source = "blake_special_training_title1_png",
        e.y = 9,
        e
    },
    n.challenge_i = function() {
        var e = new eui.Image;
        return this.challenge = e,
        e.source = "blake_special_training_btntiaozhan_png",
        e.x = 416,
        e.y = 300,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/BlakeSpecialTrainingSkin.exml"] = window.BlakeSpecialTrainingSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["bg", "talent", "go1", "got_1", "a_1", "go2", "got_2", "a_2", "go3", "got_3", "a_3"],
        this.height = 640,
        this.width = 1256,
        this.elementsContent = [this.bg_i(), this._Group1_i()]
    }
    __extends(t, e);
    var n = t.prototype;
    return n.bg_i = function() {
        var e = new eui.Image;
        return this.bg = e,
        e.source = "blake_special_training_bg_jpg",
        e.x = 0,
        e.y = 0,
        e
    },
    n._Group1_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = 0,
        e.y = 100,
        e.elementsContent = [this._Image1_i(), this.talent_i(), this.a_1_i(), this.a_2_i(), this.a_3_i()],
        e
    },
    n._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "blake_special_training_blake_png",
        e.x = 91,
        e.y = 15,
        e
    },
    n.talent_i = function() {
        var e = new eui.Image;
        return this.talent = e,
        e.source = "blake_special_training_btnchan_png",
        e.x = 0,
        e.y = 364,
        e
    },
    n.a_1_i = function() {
        var e = new eui.Group;
        return this.a_1 = e,
        e.x = 546,
        e.y = 0,
        e.elementsContent = [this._Image2_i(), this.go1_i(), this.got_1_i()],
        e
    },
    n._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "blake_special_training_1_png",
        e.x = 0,
        e.y = 0,
        e
    },
    n.go1_i = function() {
        var e = new eui.Image;
        return this.go1 = e,
        e.source = "blake_special_training_get_png",
        e.x = 201,
        e.y = 73,
        e
    },
    n.got_1_i = function() {
        var e = new eui.Image;
        return this.got_1 = e,
        e.source = "blake_special_training_got_png",
        e.visible = !0,
        e.x = 220,
        e.y = 75,
        e
    },
    n.a_2_i = function() {
        var e = new eui.Group;
        return this.a_2 = e,
        e.x = 546,
        e.y = 150,
        e.elementsContent = [this._Image3_i(), this.go2_i(), this.got_2_i()],
        e
    },
    n._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "blake_special_training_2_png",
        e.x = 0,
        e.y = 0,
        e
    },
    n.go2_i = function() {
        var e = new eui.Image;
        return this.go2 = e,
        e.source = "blake_special_training_get_png",
        e.x = 201,
        e.y = 73,
        e
    },
    n.got_2_i = function() {
        var e = new eui.Image;
        return this.got_2 = e,
        e.source = "blake_special_training_got_png",
        e.visible = !0,
        e.x = 220,
        e.y = 74.98,
        e
    },
    n.a_3_i = function() {
        var e = new eui.Group;
        return this.a_3 = e,
        e.x = 546,
        e.y = 298,
        e.elementsContent = [this._Image4_i(), this.go3_i(), this.got_3_i()],
        e
    },
    n._Image4_i = function() {
        var e = new eui.Image;
        return e.source = "blake_special_training_3_png",
        e.x = 0,
        e.y = 0,
        e
    },
    n.go3_i = function() {
        var e = new eui.Image;
        return this.go3 = e,
        e.source = "blake_special_training_get_png",
        e.x = 201,
        e.y = 73,
        e
    },
    n.got_3_i = function() {
        var e = new eui.Image;
        return this.got_3 = e,
        e.source = "blake_special_training_got_png",
        e.visible = !0,
        e.x = 220,
        e.y = 74.82,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/BlakeSpecialTrainingTalentPopSkin.exml"] = window.BlakeSpecialTrainingTalentPopSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["close", "talent3", "btnReplace_3", "talent2", "btnReplace_2", "talent1", "btnReplace_1", "select", "not_1", "not_2", "not_3", "dr"],
        this.height = 402,
        this.width = 648,
        this.elementsContent = [this._Group1_i()]
    }
    __extends(t, e);
    var n = t.prototype;
    return n._Group1_i = function() {
        var e = new eui.Group;
        return e.cacheAsBitmap = !0,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this._Image1_i(), this.close_i(), this.talent3_i(), this.btnReplace_3_i(), this.talent2_i(), this.btnReplace_2_i(), this.talent1_i(), this.btnReplace_1_i(), this.select_i(), this.not_1_i(), this.not_2_i(), this.not_3_i(), this.dr_i()],
        e
    },
    n._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "blake_special_training_talentbg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    n.close_i = function() {
        var e = new eui.Image;
        return this.close = e,
        e.source = "blake_special_training_close_png",
        e.x = 603,
        e.y = 9,
        e
    },
    n.talent3_i = function() {
        var e = new eui.Image;
        return this.talent3 = e,
        e.horizontalCenter = 212.5,
        e.source = "blake_special_training_talent3_png",
        e.y = 61,
        e
    },
    n.btnReplace_3_i = function() {
        var e = new eui.Image;
        return this.btnReplace_3 = e,
        e.source = "blake_special_training_btnreplace_png",
        e.x = 487,
        e.y = 321,
        e
    },
    n.talent2_i = function() {
        var e = new eui.Image;
        return this.talent2 = e,
        e.horizontalCenter = 3.5,
        e.source = "blake_special_training_talent2_png",
        e.y = 61,
        e
    },
    n.btnReplace_2_i = function() {
        var e = new eui.Image;
        return this.btnReplace_2 = e,
        e.source = "blake_special_training_btnreplace_png",
        e.x = 278,
        e.y = 321,
        e
    },
    n.talent1_i = function() {
        var e = new eui.Image;
        return this.talent1 = e,
        e.horizontalCenter = -206.5,
        e.source = "blake_special_training_talent1_png",
        e.y = 61,
        e
    },
    n.btnReplace_1_i = function() {
        var e = new eui.Image;
        return this.btnReplace_1 = e,
        e.source = "blake_special_training_btnreplace_png",
        e.x = 68,
        e.y = 321,
        e
    },
    n.select_i = function() {
        var e = new eui.Image;
        return this.select = e,
        e.height = 341,
        e.horizontalCenter = -1.5,
        e.scale9Grid = new egret.Rectangle(24, 23, 12, 14),
        e.source = "blake_special_training_select_png",
        e.touchEnabled = !1,
        e.visible = !1,
        e.width = 217,
        e.y = 45,
        e
    },
    n.not_1_i = function() {
        var e = new eui.Image;
        return this.not_1 = e,
        e.source = "blake_special_training_not_png",
        e.visible = !1,
        e.x = 19,
        e.y = 61,
        e
    },
    n.not_2_i = function() {
        var e = new eui.Image;
        return this.not_2 = e,
        e.source = "blake_special_training_not_png",
        e.visible = !1,
        e.x = 228.275,
        e.y = 61,
        e
    },
    n.not_3_i = function() {
        var e = new eui.Image;
        return this.not_3 = e,
        e.source = "blake_special_training_not_png",
        e.visible = !1,
        e.x = 437.55,
        e.y = 61,
        e
    },
    n.dr_i = function() {
        var e = new eui.Image;
        return this.dr = e,
        e.source = "blake_special_training_dr_png",
        e.visible = !1,
        e.x = 233,
        e.y = 66,
        e
    },
    t
} (eui.Skin);