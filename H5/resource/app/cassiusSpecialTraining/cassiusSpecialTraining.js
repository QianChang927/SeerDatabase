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
cassiusSpecialTraining; !
function(e) {
    var t = function(t) {
        function i() {
            var e = t.call(this) || this;
            return e._progressArr = [],
            e._haveGotArr = [],
            e.old_progressArr = [],
            e.old_haveGotArr = [],
            e.cur = 0,
            e.skinName = CassiusSpecialTrainingSkin,
            e.cacheAsBitmap = !0,
            e
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            var i = this;
            t.prototype.childrenCreated.call(this),
            this.adaptBgByScale(this.bg),
            t.prototype.initOldPveBtnClose.call(this, 0, this, "cassius_special_training_title_png");
            for (var n = function(t) {
                ImageButtonUtil.add(r["a_" + (t + 1)],
                function() {
                    i.cur = t + 1,
                    PopViewManager.getInstance().openView(new e.CassiusSpecialTrainingFightPop, null, i.cur)
                },
                r)
            },
            r = this, a = 0; 3 > a; a++) n(a);
            EventManager.addEventListener(PetFightEvent.ALARM_CLICK,
            function(t) {
                FightManager.isWin ? i.updateView() : (BubblerManager.getInstance().showText("未按照条件击败敌人，无法获得奖励！"), PopViewManager.getInstance().openView(new e.CassiusSpecialTrainingFightPop, null, i.cur))
            },
            this),
            this.updateView()
        },
        i.prototype.updateView = function() {
            var e = this;
            SocketConnection.sendByQueue(CommandID.ARESUNIONCHALLENGE_GET_TRAIN_PROGRESS, [0],
            function(t) {
                var i = t.data,
                n = !0;
                e._progressArr[0] = i.readUnsignedInt(),
                e._haveGotArr[0] = i.readUnsignedInt(),
                e._progressArr[1] = i.readUnsignedInt(),
                e._haveGotArr[1] = i.readUnsignedInt(),
                e._progressArr[2] = i.readUnsignedInt(),
                e._haveGotArr[2] = i.readUnsignedInt(),
                e._haveGotArr.toString() == e.old_haveGotArr.toString() && e._progressArr.toString() == e.old_progressArr.toString() && (n = !1),
                e.old_progressArr = e._progressArr.slice(),
                e.old_haveGotArr = e._haveGotArr.slice(),
                FightManager.isWin && !n ? BubblerManager.getInstance().showText("未按照条件击败，请再次尝试！") : FightManager.isWin && n && (1 == e.cur ? 1 == e._haveGotArr[0] ? (PetManager.upDateBagPetInfo(PetManager.defaultTime), Alert.show("卡修斯已获得全新的属性技能\n是否立刻前往背包查看？",
                function() {
                    ModuleManager.showModuleByID(10)
                })) : BubblerManager.getInstance().showText("挑战成功！已成功" + e._progressArr[0] + "次！") : 2 == e.cur ? BubblerManager.getInstance().showText("挑战成功！防御与特防属性+1！") : 3 == e.cur && BubblerManager.getInstance().showText("挑战成功！所有攻击力增加5%！"));
                for (var r = [5, 20, 5], a = 0; 3 > a; a++) e["a_" + (a + 1)].touchEnabled = e._haveGotArr[a] <= 0,
                e["go" + (a + 1)].visible = e._haveGotArr[a] <= 0,
                e["got_" + (a + 1)].visible = e._haveGotArr[a] > 0,
                e["tx" + (a + 1)].text = e._progressArr[a] + "/" + r[a]
            })
        },
        i.prototype.onGetTrainResult = function(e) {
            var t = e.data,
            i = t.readUnsignedInt(),
            n = t.readUnsignedInt(),
            r = (t.readUnsignedInt(), t.readUnsignedInt());
            0 == i && r && 1 == n && (PetManager.upDateBagPetInfo(PetManager.defaultTime), Alert.show("卡修斯已激活专属特性,是否立刻前往背包查看？",
            function() {
                ModuleManager.showModuleByID(10)
            }))
        },
        i.prototype.destroy = function() {
            t.prototype.destroy.call(this),
            SocketConnection.removeAll(this)
        },
        i
    } (BaseModule);
    e.CassiusSpecialTraining = t,
    __reflect(t.prototype, "cassiusSpecialTraining.CassiusSpecialTraining")
} (cassiusSpecialTraining || (cassiusSpecialTraining = {}));
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
cassiusSpecialTraining; !
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.descArr = ["<font color= #fff370>击败5次后</font>奖励技能\n万山绝影", "每挑战成功1次，防御与特防属性值额外增加1点", "每挑战成功1次，所有攻击力增加5%"],
            t.tipArr = ["在<font color= #fff370>强化状态下</font>击败对手", "<font color= #fff370>5回合后</font>击败对手", "<font color= #fff370>打出2000点及以上的伤害击败</font>对手"],
            t.skinName = CassiusSpecialTrainingPopSkin,
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
                if (PetManager.isDefaultPet(798)) {
                    var e = ~~t._data - 1;
                    t.hide(),
                    FightManager.fightNoMapBoss(18536 + e)
                } else StatLogger.log("20230804版本系统功能", "战神联盟初始形态搬迁", "卡修斯-点击【开始战斗】时首发不对"),
                Alarm.show("请将卡修斯放入背包首发位置",
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
            SocketConnection.sendByQueue(CommandID.ARESUNIONCHALLENGE_GET_TRAIN_PROGRESS, [0],
            function(e) {
                var i = e.data,
                n = [],
                r = [],
                a = ["需挑战胜利", "可获得", "可获得"],
                s = ["次", "次奖励", "次奖励"],
                o = ~~t._data - 1;
                n[0] = i.readUnsignedInt(),
                r[0] = i.readUnsignedInt(),
                n[1] = i.readUnsignedInt(),
                r[1] = i.readUnsignedInt(),
                n[2] = i.readUnsignedInt(),
                r[2] = i.readUnsignedInt();
                var _ = [5, 20, 5];
                t.desc.textFlow = (new egret.HtmlTextParser).parser(t.descArr[o]),
                t.pro.textFlow = [{
                    text: a[o]
                },
                {
                    text: n[o] + "/" + _[o],
                    style: {
                        textColor: 16774e3
                    }
                },
                {
                    text: s[o]
                }],
                t.tip.textFlow = (new egret.HtmlTextParser).parser(t.tipArr[o]),
                t.title.source = "cassius_special_training_title" + (o + 1) + "_png"
            })
        },
        t
    } (PopView);
    e.CassiusSpecialTrainingFightPop = t,
    __reflect(t.prototype, "cassiusSpecialTraining.CassiusSpecialTrainingFightPop")
} (cassiusSpecialTraining || (cassiusSpecialTraining = {}));
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
generateEUI.paths["resource/eui_skins/CassiusSpecialTrainingPopSkin.exml"] = window.CassiusSpecialTrainingPopSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["desc", "pro", "title", "close", "pet", "bag", "cure", "tip", "challenge"],
        this.height = 397,
        this.width = 608,
        this.elementsContent = [this._Group1_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Group1_i = function() {
        var e = new eui.Group;
        return e.cacheAsBitmap = !0,
        e.height = 397,
        e.width = 608,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this._Image1_i(), this.desc_i(), this.pro_i(), this.title_i(), this.close_i(), this.pet_i(), this.bag_i(), this.cure_i(), this.tip_i(), this._Label1_i(), this.challenge_i()],
        e
    },
    i._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "cassius_special_training_popbg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.desc_i = function() {
        var e = new eui.Label;
        return this.desc = e,
        e.fontFamily = "REEJI",
        e.size = 18,
        e.text = "可获得新属性技能·万山绝影影",
        e.textAlign = "center",
        e.textColor = 8631271,
        e.verticalCenter = -105.5,
        e.width = 240,
        e.x = 360,
        e
    },
    i.pro_i = function() {
        var e = new eui.Label;
        return this.pro = e,
        e.fontFamily = "MFShangHei",
        e.horizontalCenter = 176,
        e.size = 18,
        e.text = "可获得20/20次奖励",
        e.textColor = 8631271,
        e.y = 121,
        e
    },
    i.title_i = function() {
        var e = new eui.Image;
        return this.title = e,
        e.horizontalCenter = -1.5,
        e.source = "cassius_special_training_title1_png",
        e.y = 1,
        e
    },
    i.close_i = function() {
        var e = new eui.Image;
        return this.close = e,
        e.source = "cassius_special_training_close_png",
        e.x = 568,
        e.y = 9,
        e
    },
    i.pet_i = function() {
        var e = new eui.Image;
        return this.pet = e,
        e.horizontalCenter = -123.5,
        e.source = "cassius_special_training_p1_png",
        e.verticalCenter = 11.5,
        e
    },
    i.bag_i = function() {
        var e = new eui.Image;
        return this.bag = e,
        e.source = "cassius_special_training_bag_png",
        e.x = 7,
        e.y = 216,
        e
    },
    i.cure_i = function() {
        var e = new eui.Image;
        return this.cure = e,
        e.source = "cassius_special_training_cure_png",
        e.x = 6,
        e.y = 303,
        e
    },
    i.tip_i = function() {
        var e = new eui.Label;
        return this.tip = e,
        e.fontFamily = "MFShangHei",
        e.horizontalCenter = 179.5,
        e.size = 18,
        e.textAlign = "center",
        e.textColor = 6586535,
        e.verticalCenter = 36.5,
        e.width = 199,
        e
    },
    i._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "REEJI",
        e.size = 18,
        e.text = "战胜条件",
        e.textColor = 8631271,
        e.x = 448,
        e.y = 192,
        e
    },
    i.challenge_i = function() {
        var e = new eui.Image;
        return this.challenge = e,
        e.source = "cassius_special_training_btntiaozhan_png",
        e.x = 416,
        e.y = 298,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/CassiusSpecialTrainingSkin.exml"] = window.CassiusSpecialTrainingSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["bg", "tx1", "go1", "got_1", "a_1", "tx2", "go2", "got_2", "a_2", "tx3", "go3", "got_3", "a_3"],
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
        e.source = "cassius_special_training_bg_jpg",
        e.verticalCenter = 0,
        e
    },
    i._Group1_i = function() {
        var e = new eui.Group;
        return e.height = 495,
        e.horizontalCenter = 0,
        e.width = 841,
        e.y = 102,
        e.elementsContent = [this._Image1_i(), this.a_1_i(), this.a_2_i(), this.a_3_i()],
        e
    },
    i._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "cassius_special_training_ca_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.a_1_i = function() {
        var e = new eui.Group;
        return this.a_1 = e,
        e.x = 481,
        e.y = 4,
        e.elementsContent = [this._Image2_i(), this.tx1_i(), this.go1_i(), this.got_1_i()],
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "cassius_special_training_1_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.tx1_i = function() {
        var e = new eui.Label;
        return this.tx1 = e,
        e.fontFamily = "MFShangHei",
        e.size = 24,
        e.text = "5/5",
        e.textColor = 16777215,
        e.x = 45,
        e.y = 75,
        e
    },
    i.go1_i = function() {
        var e = new eui.Image;
        return this.go1 = e,
        e.right = 0,
        e.source = "trail_cassius_btnget_png",
        e.y = 64,
        e
    },
    i.got_1_i = function() {
        var e = new eui.Image;
        return this.got_1 = e,
        e.source = "cassius_special_training_imgdone_png",
        e.x = 187,
        e.y = 66,
        e
    },
    i.a_2_i = function() {
        var e = new eui.Group;
        return this.a_2 = e,
        e.x = 481,
        e.y = 166,
        e.elementsContent = [this._Image3_i(), this.tx2_i(), this.go2_i(), this.got_2_i()],
        e
    },
    i._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "cassius_special_training_2_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.tx2_i = function() {
        var e = new eui.Label;
        return this.tx2 = e,
        e.fontFamily = "MFShangHei",
        e.size = 24,
        e.text = "20/20",
        e.textColor = 16777215,
        e.x = 29,
        e.y = 73,
        e
    },
    i.go2_i = function() {
        var e = new eui.Image;
        return this.go2 = e,
        e.right = 0,
        e.source = "trail_cassius_btnget_png",
        e.y = 62,
        e
    },
    i.got_2_i = function() {
        var e = new eui.Image;
        return this.got_2 = e,
        e.source = "cassius_special_training_imgdone_png",
        e.x = 187,
        e.y = 64.26,
        e
    },
    i.a_3_i = function() {
        var e = new eui.Group;
        return this.a_3 = e,
        e.x = 481,
        e.y = 325,
        e.elementsContent = [this._Image4_i(), this.tx3_i(), this.go3_i(), this.got_3_i()],
        e
    },
    i._Image4_i = function() {
        var e = new eui.Image;
        return e.source = "cassius_special_training_3_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.tx3_i = function() {
        var e = new eui.Label;
        return this.tx3 = e,
        e.fontFamily = "MFShangHei",
        e.size = 24,
        e.text = "5/5",
        e.textColor = 16777215,
        e.x = 45,
        e.y = 73,
        e
    },
    i.go3_i = function() {
        var e = new eui.Image;
        return this.go3 = e,
        e.right = 0,
        e.source = "trail_cassius_btnget_png",
        e.y = 62,
        e
    },
    i.got_3_i = function() {
        var e = new eui.Image;
        return this.got_3 = e,
        e.source = "cassius_special_training_imgdone_png",
        e.x = 187,
        e.y = 63.92,
        e
    },
    t
} (eui.Skin);