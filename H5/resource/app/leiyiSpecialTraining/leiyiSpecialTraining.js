var __reflect = this && this.__reflect ||
function(i, e, t) {
    i.__class__ = e,
    t ? t.push(e) : t = [e],
    i.__types__ = i.__types__ ? t.concat(i.__types__) : t
},
leiyiSpecialTraining; !
function(i) {
    var e = function() {
        function i() {}
        return i.getData = function(e, t) {
            var n = this,
            r = PetManager.getPetInfo(PetManager.defaultTime);
            return r && 70 == r.id ? void SocketConnection.sendByQueue(CommandID.LEIYI_TRAIN_GET_STATUS, [PetManager.defaultTime],
            function(r) {
                i._today = [],
                i._current = [];
                for (var a = [], o = r.data, _ = 0; 6 > _; _++) i._today.push(~~o.readUnsignedInt()),
                i._current.push(~~o.readUnsignedInt()),
                a.push(o.readUnsignedInt());
                KTool.getMultiValue([15870, 15871, 15872, 15873, 15874, 15875, 6909],
                function(r) {
                    i._today = r,
                    i.allover = !0,
                    i.get6909 = r[6];
                    for (var a = 0; 10 > a; a++) {
                        if (i.get6909 < 31) {
                            i.allover = !1;
                            break
                        }
                        if (a >= 6) {
                            var o = 0 == KTool.getBit(r[6], a - 5);
                            if (o) {
                                i.allover = !1;
                                break
                            }
                        } else if (i._current[a] < i._total[a]) {
                            i.allover = !1;
                            break
                        }
                    }
                    e && e.call(t || n)
                })
            }) : void Alert.show("请先将雷伊设为首发！",
            function() {
                ModuleManager.showModuleByID(10)
            },
            function() {
                EventManager.dispatchEventWith("LeiyiSpecialTrainingFight_close")
            })
        },
        i._today = [],
        i._current = [],
        i._total = [60, 30, 20, 20, 10, 20],
        i.allover = !1,
        i.get6909 = 0,
        i
    } ();
    i.LeiyiSpecialManager = e,
    __reflect(e.prototype, "leiyiSpecialTraining.LeiyiSpecialManager")
} (leiyiSpecialTraining || (leiyiSpecialTraining = {}));
var __reflect = this && this.__reflect ||
function(i, e, t) {
    i.__class__ = e,
    t ? t.push(e) : t = [e],
    i.__types__ = i.__types__ ? t.concat(i.__types__) : t
},
__extends = this && this.__extends ||
function(i, e) {
    function t() {
        this.constructor = i
    }
    for (var n in e) e.hasOwnProperty(n) && (i[n] = e[n]);
    t.prototype = e.prototype,
    i.prototype = new t
},
leiyiSpecialTraining; !
function(i) {
    var e = function(i) {
        function e() {
            var e = i.call(this) || this;
            return e.skinName = LeiyiSpecialTrainingSkin,
            e.cacheAsBitmap = !0,
            e
        }
        return __extends(e, i),
        e.prototype.childrenCreated = function() {
            i.prototype.childrenCreated.call(this),
            i.prototype.initOldPveBtnClose.call(this, 0, this, "leiyi_special_training_title_png"),
            this.adaptBgByScale(this.bg),
            ImageButtonUtil.add(this.btn1,
            function() {
                ModuleManager.showModuleByID(233, {
                    "goto": 2
                })
            },
            this),
            ImageButtonUtil.add(this.btn2,
            function() {
                ModuleManager.showModule("leiyiSpecialTraining", [], null, "LeiyiSpecialTrainingFight", AppDoStyle.HIDEN)
            },
            this),
            this.updateView()
        },
        e.prototype.reShow = function() {
            this.updateView()
        },
        e.prototype.updateView = function() {
            var i = this;
            KTool.getBitSet([9042],
            function(e) {
                var t = PetManager.hasPet(70),
                n = !!e[0] || !t;
                i.imgDone1.visible = n,
                i.btn1.touchEnabled = !n,
                i.imgDone2.visible = !1,
                i.btn2.touchEnabled = !0
            })
        },
        e
    } (BaseModule);
    i.LeiyiSpecialTraining = e,
    __reflect(e.prototype, "leiyiSpecialTraining.LeiyiSpecialTraining")
} (leiyiSpecialTraining || (leiyiSpecialTraining = {}));
var __reflect = this && this.__reflect ||
function(i, e, t) {
    i.__class__ = e,
    t ? t.push(e) : t = [e],
    i.__types__ = i.__types__ ? t.concat(i.__types__) : t
},
__extends = this && this.__extends ||
function(i, e) {
    function t() {
        this.constructor = i
    }
    for (var n in e) e.hasOwnProperty(n) && (i[n] = e[n]);
    t.prototype = e.prototype,
    i.prototype = new t
},
leiyiSpecialTraining; !
function(i) {
    var e = function(e) {
        function t() {
            var i = e.call(this) || this;
            return i.index = 0,
            i.skinName = LeiyiSpecialTrainingFightSkin,
            i.cacheAsBitmap = !0,
            i
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            var t = this;
            e.prototype.childrenCreated.call(this),
            e.prototype.initOldPveBtnClose.call(this, 0, this, "leiyi_special_training_fight_title_png"),
            this.adaptBgByScale(this.bg),
            this.mainGroup.left = DeviceInfoManager.adapterOffSetX || 22,
            this.mainGroup.right = DeviceInfoManager.adapterOffSetX || 32,
            ImageButtonUtil.add(this.bag,
            function() {
                ModuleManager.showModuleByID(10)
            },
            this),
            ImageButtonUtil.add(this.cure,
            function() {
                PetManager.cureAll()
            },
            this),
            EventManager.addEventListener(PetFightEvent.ALARM_CLICK,
            function(i) {
                if (FightManager.isWin && t.index > 6) {
                    var e = ["极光刃", "闪电斗气", "元气电光球", "雷神觉醒", "雷神天明闪"];
                    Alarm.show("已获得" + e[t.index - 7] + "技能，可以打开背包查看")
                } else if (FightManager.isWin && t.index < 7) {
                    var n = ["体力", " 防御", "特防", "攻击", "特攻", "速度"];
                    Alarm.show("挑战成功！" + n[t.index - 1] + "属性增加")
                }
            },
            this),
            EventManager.addEventListener("LeiyiSpecialTrainingFight_close",
            function() {
                t.onClose()
            },
            this);
            for (var n = function(i) {
                ImageButtonUtil.add(r["r" + (i + 1)],
                function() {
                    t.index = i + 1,
                    FightManager.fightNoMapBoss(10187 + i)
                },
                r)
            },
            r = this, a = 0; 6 > a; a++) n(a);
            for (var o = function(i) {
                ImageButtonUtil.add(_["l" + (i + 1)],
                function() {
                    t.index = i + 7,
                    FightManager.fightNoMapBoss(10193 + i)
                },
                _)
            },
            _ = this, a = 0; 5 > a; a++) o(a);
            i.LeiyiSpecialManager.getData(function() {
                t.updateView()
            },
            this),
            this.leiyiAnim = SpineUtil.createAnimate("lytx"),
            this.addChild(this.leiyiAnim),
            this.leiyiAnim.touchEnabled = !1,
            this.leiyiAnim.touchChildren = !1,
            this.leiyiAnim.x = 563,
            this.leiyiAnim.y = 318,
            this.leiyiAnim.visible = !1,
            egret.localStorage.getItem("leiyiAnimPlayTimes") || egret.localStorage.setItem("leiyiAnimPlayTimes", "0")
        },
        t.prototype.reShow = function() {
            var e = this;
            i.LeiyiSpecialManager.getData(function() {
                e.updateView()
            },
            this)
        },
        t.prototype.updateView = function() {
            for (var e = this,
            t = 0,
            n = 0; 6 > n; n++) this["tx" + (n + 1)].text = i.LeiyiSpecialManager._current[n] + "/" + i.LeiyiSpecialManager._total[n],
            this["d" + (n + 1)].visible = i.LeiyiSpecialManager._current[n] >= i.LeiyiSpecialManager._total[n],
            this["r" + (n + 1)].touchEnabled = i.LeiyiSpecialManager._current[n] < i.LeiyiSpecialManager._total[n],
            4 > n ? (this["done" + (n + 1)].visible = 1 == KTool.getBit(i.LeiyiSpecialManager.get6909, n + 1), this["l" + (n + 1)].touchEnabled = 0 == KTool.getBit(i.LeiyiSpecialManager.get6909, n + 1), this["done" + (n + 1)].visible && ++t) : 4 == n && t >= 4 && ("0" == egret.localStorage.getItem("leiyiAnimPlayTimes") ? this.playAnim() : (this["done" + (n + 1)].visible = 1 == KTool.getBit(i.LeiyiSpecialManager.get6909, n + 1), this["l" + (n + 1)].visible = 0 == KTool.getBit(i.LeiyiSpecialManager.get6909, n + 1)));
            i.LeiyiSpecialManager.allover && Alarm.show("恭喜你完成了全部特训内容！",
            function() {
                e.onClose()
            })
        },
        t.prototype.playAnim = function() {
            var e = this;
            this.leiyiAnim.visible = !0,
            this.leiyiAnim.play("animation", 1, 1, {
                playEnd: function() {
                    e.leiyiAnim.visible = !1,
                    e.done5.visible = 1 == KTool.getBit(i.LeiyiSpecialManager.get6909, 5),
                    e.l5.visible = 0 == KTool.getBit(i.LeiyiSpecialManager.get6909, 5),
                    egret.localStorage.setItem("leiyiAnimPlayTimes", "1")
                }
            })
        },
        t
    } (BaseModule);
    i.LeiyiSpecialTrainingFight = e,
    __reflect(e.prototype, "leiyiSpecialTraining.LeiyiSpecialTrainingFight")
} (leiyiSpecialTraining || (leiyiSpecialTraining = {}));
var __extends = this && this.__extends ||
function(i, e) {
    function t() {
        this.constructor = i
    }
    for (var n in e) e.hasOwnProperty(n) && (i[n] = e[n]);
    t.prototype = e.prototype,
    i.prototype = new t
};
window.generateEUI = window.generateEUI || {},
generateEUI.paths = generateEUI.paths || {},
generateEUI.styles = void 0,
generateEUI.skins = {},
generateEUI.paths["resource/eui_skins/LeiyiSpecialTrainingFightSkin.exml"] = window.LeiyiSpecialTrainingFightSkin = function(i) {
    function e() {
        i.call(this),
        this.skinParts = ["bg", "l1", "done1", "l2", "done2", "l3", "done3", "l4", "done4", "tx4", "d4", "r4", "tx5", "d5", "r5", "tx2", "d2", "r2", "tx3", "d3", "r3", "tx6", "d6", "r6", "tx1", "d1", "r1", "bag", "cure", "l5", "done5", "mainGroup"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this.mainGroup_i()]
    }
    __extends(e, i);
    var t = e.prototype;
    return t.bg_i = function() {
        var i = new eui.Image;
        return this.bg = i,
        i.horizontalCenter = 0,
        i.source = "leiyi_special_training_bg_jpg",
        i.verticalCenter = 0,
        i
    },
    t.mainGroup_i = function() {
        var i = new eui.Group;
        return this.mainGroup = i,
        i.height = 546,
        i.horizontalCenter = -5,
        i.left = 22,
        i.right = 32,
        i.y = 58,
        i.elementsContent = [this._Image1_i(), this._Image2_i(), this.l1_i(), this.done1_i(), this.l2_i(), this.done2_i(), this.l3_i(), this.done3_i(), this.l4_i(), this.done4_i(), this._Group1_i(), this._Image10_i(), this.bag_i(), this.cure_i(), this.l5_i(), this.done5_i()],
        i
    },
    t._Image1_i = function() {
        var i = new eui.Image;
        return i.horizontalCenter = -32.5,
        i.source = "leiyi_special_training_pet_png",
        i.y = 62,
        i
    },
    t._Image2_i = function() {
        var i = new eui.Image;
        return i.horizontalCenter = -45.5,
        i.source = "leiyi_special_training_fight_pet_png",
        i.y = 515,
        i
    },
    t.l1_i = function() {
        var i = new eui.Image;
        return this.l1 = i,
        i.source = "leiyi_special_training_fight_l1_png",
        i.x = 1,
        i.y = 37,
        i
    },
    t.done1_i = function() {
        var i = new eui.Image;
        return this.done1 = i,
        i.source = "leiyi_special_training_imgdone_png",
        i.visible = !1,
        i.x = 161,
        i.y = 91.93,
        i
    },
    t.l2_i = function() {
        var i = new eui.Image;
        return this.l2 = i,
        i.source = "leiyi_special_training_fight_l2_png",
        i.x = 1,
        i.y = 146,
        i
    },
    t.done2_i = function() {
        var i = new eui.Image;
        return this.done2 = i,
        i.source = "leiyi_special_training_imgdone_png",
        i.visible = !1,
        i.x = 161,
        i.y = 200.56,
        i
    },
    t.l3_i = function() {
        var i = new eui.Image;
        return this.l3 = i,
        i.source = "leiyi_special_training_fight_l3_png",
        i.visible = !0,
        i.x = 1,
        i.y = 254,
        i
    },
    t.done3_i = function() {
        var i = new eui.Image;
        return this.done3 = i,
        i.source = "leiyi_special_training_imgdone_png",
        i.visible = !1,
        i.x = 161,
        i.y = 308.202,
        i
    },
    t.l4_i = function() {
        var i = new eui.Image;
        return this.l4 = i,
        i.source = "leiyi_special_training_fight_l4_png",
        i.x = 1,
        i.y = 363,
        i
    },
    t.done4_i = function() {
        var i = new eui.Image;
        return this.done4 = i,
        i.source = "leiyi_special_training_imgdone_png",
        i.visible = !1,
        i.x = 161,
        i.y = 417.392,
        i
    },
    t._Group1_i = function() {
        var i = new eui.Group;
        return i.height = 471,
        i.right = 0,
        i.width = 389,
        i.y = 0,
        i.elementsContent = [this.r4_i(), this.r5_i(), this.r2_i(), this.r3_i(), this.r6_i(), this.r1_i(), this._Image9_i()],
        i
    },
    t.r4_i = function() {
        var i = new eui.Group;
        return this.r4 = i,
        i.height = 130,
        i.width = 192,
        i.x = 0,
        i.y = 37,
        i.elementsContent = [this._Image3_i(), this.tx4_i(), this.d4_i()],
        i
    },
    t._Image3_i = function() {
        var i = new eui.Image;
        return i.source = "leiyi_special_training_fight_r1_png",
        i.x = 0,
        i.y = 0,
        i
    },
    t.tx4_i = function() {
        var i = new eui.Label;
        return this.tx4 = i,
        i.fontFamily = "MFShangHei",
        i.right = 23,
        i.size = 20,
        i.text = "--/--",
        i.textColor = 16514895,
        i.y = 59,
        i
    },
    t.d4_i = function() {
        var i = new eui.Image;
        return this.d4 = i,
        i.source = "leiyi_special_training_imgdone_png",
        i.visible = !1,
        i.x = 16,
        i.y = 82,
        i
    },
    t.r5_i = function() {
        var i = new eui.Group;
        return this.r5 = i,
        i.height = 130,
        i.width = 192,
        i.x = 197,
        i.y = 37,
        i.elementsContent = [this._Image4_i(), this.tx5_i(), this.d5_i()],
        i
    },
    t._Image4_i = function() {
        var i = new eui.Image;
        return i.source = "leiyi_special_training_fight_r2_png",
        i.x = 0,
        i.y = 0,
        i
    },
    t.tx5_i = function() {
        var i = new eui.Label;
        return this.tx5 = i,
        i.fontFamily = "MFShangHei",
        i.right = 23,
        i.size = 20,
        i.text = "--/--",
        i.textColor = 16514895,
        i.y = 59,
        i
    },
    t.d5_i = function() {
        var i = new eui.Image;
        return this.d5 = i,
        i.source = "leiyi_special_training_imgdone_png",
        i.visible = !1,
        i.x = 14,
        i.y = 82,
        i
    },
    t.r2_i = function() {
        var i = new eui.Group;
        return this.r2 = i,
        i.height = 131,
        i.width = 192,
        i.x = 0,
        i.y = 188.7,
        i.elementsContent = [this._Image5_i(), this.tx2_i(), this.d2_i()],
        i
    },
    t._Image5_i = function() {
        var i = new eui.Image;
        return i.source = "leiyi_special_training_fight_r3_png",
        i.x = 0,
        i.y = 0,
        i
    },
    t.tx2_i = function() {
        var i = new eui.Label;
        return this.tx2 = i,
        i.fontFamily = "MFShangHei",
        i.right = 23,
        i.size = 20,
        i.text = "--/--",
        i.textColor = 16514895,
        i.y = 59,
        i
    },
    t.d2_i = function() {
        var i = new eui.Image;
        return this.d2 = i,
        i.source = "leiyi_special_training_imgdone_png",
        i.visible = !1,
        i.x = 16,
        i.y = 81.64,
        i
    },
    t.r3_i = function() {
        var i = new eui.Group;
        return this.r3 = i,
        i.height = 131,
        i.width = 192,
        i.x = 197,
        i.y = 188.7,
        i.elementsContent = [this._Image6_i(), this.tx3_i(), this.d3_i()],
        i
    },
    t._Image6_i = function() {
        var i = new eui.Image;
        return i.source = "leiyi_special_training_fight_r4_png",
        i.x = 0,
        i.y = 0,
        i
    },
    t.tx3_i = function() {
        var i = new eui.Label;
        return this.tx3 = i,
        i.fontFamily = "MFShangHei",
        i.right = 23,
        i.size = 20,
        i.text = "--/--",
        i.textColor = 16514895,
        i.y = 59,
        i
    },
    t.d3_i = function() {
        var i = new eui.Image;
        return this.d3 = i,
        i.source = "leiyi_special_training_imgdone_png",
        i.visible = !1,
        i.x = 14,
        i.y = 80.79,
        i
    },
    t.r6_i = function() {
        var i = new eui.Group;
        return this.r6 = i,
        i.height = 131,
        i.width = 192,
        i.x = 0,
        i.y = 340,
        i.elementsContent = [this._Image7_i(), this.tx6_i(), this.d6_i()],
        i
    },
    t._Image7_i = function() {
        var i = new eui.Image;
        return i.source = "leiyi_special_training_fight_r5_png",
        i.x = 0,
        i.y = 0,
        i
    },
    t.tx6_i = function() {
        var i = new eui.Label;
        return this.tx6 = i,
        i.fontFamily = "MFShangHei",
        i.right = 23,
        i.size = 20,
        i.text = "--/--",
        i.textColor = 16514895,
        i.y = 59,
        i
    },
    t.d6_i = function() {
        var i = new eui.Image;
        return this.d6 = i,
        i.source = "leiyi_special_training_imgdone_png",
        i.visible = !1,
        i.x = 16,
        i.y = 81.99,
        i
    },
    t.r1_i = function() {
        var i = new eui.Group;
        return this.r1 = i,
        i.height = 131,
        i.width = 192,
        i.x = 197,
        i.y = 340,
        i.elementsContent = [this._Image8_i(), this.tx1_i(), this.d1_i()],
        i
    },
    t._Image8_i = function() {
        var i = new eui.Image;
        return i.source = "leiyi_special_training_fight_r6_png",
        i.x = 0,
        i.y = 0,
        i
    },
    t.tx1_i = function() {
        var i = new eui.Label;
        return this.tx1 = i,
        i.fontFamily = "MFShangHei",
        i.right = 23,
        i.size = 20,
        i.text = "--/--",
        i.textColor = 16514895,
        i.y = 59,
        i
    },
    t.d1_i = function() {
        var i = new eui.Image;
        return this.d1 = i,
        i.source = "leiyi_special_training_imgdone_png",
        i.visible = !1,
        i.x = 14,
        i.y = 83.11,
        i
    },
    t._Image9_i = function() {
        var i = new eui.Image;
        return i.source = "leiyi_special_training_fight_attrtip_png",
        i.x = 0,
        i.y = 0,
        i
    },
    t._Image10_i = function() {
        var i = new eui.Image;
        return i.source = "leiyi_special_training_fight_skilltip_png",
        i.x = 0,
        i.y = 0,
        i
    },
    t.bag_i = function() {
        var i = new eui.Image;
        return this.bag = i,
        i.source = "leiyi_special_training_fight_bag_png",
        i.x = 15,
        i.y = 475,
        i
    },
    t.cure_i = function() {
        var i = new eui.Image;
        return this.cure = i,
        i.source = "leiyi_special_training_fight_cure_png",
        i.x = 102,
        i.y = 475,
        i
    },
    t.l5_i = function() {
        var i = new eui.Image;
        return this.l5 = i,
        i.horizontalCenter = -32.5,
        i.source = "leiyi_special_training_btnchallenge_png",
        i.visible = !1,
        i.y = 447,
        i
    },
    t.done5_i = function() {
        var i = new eui.Image;
        return this.done5 = i,
        i.horizontalCenter = -32.5,
        i.source = "leiyi_special_training_haswin_png",
        i.visible = !1,
        i.y = 453,
        i
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/LeiyiSpecialTrainingSkin.exml"] = window.LeiyiSpecialTrainingSkin = function(i) {
    function e() {
        i.call(this),
        this.skinParts = ["bg", "btn2", "imgDone2", "btn1", "imgDone1"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this._Group1_i()]
    }
    __extends(e, i);
    var t = e.prototype;
    return t.bg_i = function() {
        var i = new eui.Image;
        return this.bg = i,
        i.horizontalCenter = 0,
        i.source = "leiyi_special_training_bg_jpg",
        i.verticalCenter = 0,
        i
    },
    t._Group1_i = function() {
        var i = new eui.Group;
        return i.height = 498,
        i.horizontalCenter = 22,
        i.width = 846,
        i.y = 104.172,
        i.elementsContent = [this._Image1_i(), this.btn2_i(), this.imgDone2_i(), this.btn1_i(), this.imgDone1_i()],
        i
    },
    t._Image1_i = function() {
        var i = new eui.Image;
        return i.source = "leiyi_special_training_pet_png",
        i.x = 0,
        i.y = 14,
        i
    },
    t.btn2_i = function() {
        var i = new eui.Image;
        return this.btn2 = i,
        i.source = "leiyi_special_training_btn2_png",
        i.x = 432,
        i.y = 244,
        i
    },
    t.imgDone2_i = function() {
        var i = new eui.Image;
        return this.imgDone2 = i,
        i.source = "leiyi_special_training_imgdone_png",
        i.visible = !1,
        i.x = 674,
        i.y = 392,
        i
    },
    t.btn1_i = function() {
        var i = new eui.Image;
        return this.btn1 = i,
        i.source = "leiyi_special_training_btn1_png",
        i.x = 432,
        i.y = 0,
        i
    },
    t.imgDone1_i = function() {
        var i = new eui.Image;
        return this.imgDone1 = i,
        i.source = "leiyi_special_training_imgdone_png",
        i.visible = !1,
        i.x = 674,
        i.y = 148,
        i
    },
    e
} (eui.Skin);