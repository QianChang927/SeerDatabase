var __reflect = this && this.__reflect ||
function(t, i, e) {
    t.__class__ = i,
    e ? e.push(i) : e = [i],
    t.__types__ = t.__types__ ? e.concat(t.__types__) : e
},
__extends = this && this.__extends ||
function(t, i) {
    function e() {
        this.constructor = t
    }
    for (var _ in i) i.hasOwnProperty(_) && (t[_] = i[_]);
    e.prototype = i.prototype,
    t.prototype = new e
},
puniFight; !
function(t) {
    var i = function(t) {
        function i() {
            var i = t.call(this) || this;
            return i._taskStartId = 291,
            i._bossStartId = 17934,
            i._step = 0,
            i._curType = 1,
            i.skinName = PuniFightSkin,
            i
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            var i = this;
            t.prototype.childrenCreated.call(this),
            config.Help_tips.load(function() {
                i.initOldPveBtnClose(112, i, "",
                function() {
                    2 == i._curType ? i.changePanel(1) : i.onClose()
                },
                i)
            },
            this),
            this.adaptLeftContent(this.grp_btns),
            this.bg.horizontalCenter = 0,
            this.bg.verticalCenter = 0,
            this._animate = DragonbonesUtil.createAnimate("puni_ske_json", "puni_tex_json", "puni_tex_png", "puni"),
            this._resize(),
            this.addChild(this._animate),
            this._animate.animation.play("animation", 0),
            this._step = this.getMultivalue(core.constant.ValueType.DAILY, 12798),
            0 == this._step && (this._step = this.getMultivalue(core.constant.ValueType.FOREVER, 2915));
            for (var e = 0; 8 > e; e++) this["boss_" + e].name = "boss_" + e,
            ImageButtonUtil.add(this["boss_" + e], this.onClickMark, this),
            this.updateState(e);
            this._step > 7 && SocketConnection.send(41391),
            this.showNormalMC(),
            this.puni.alpha = this.title.alpha = this.infotxt.alpha = this.img_fight.alpha = this.boss_7.alpha = 0,
            egret.Tween.get(this.puni).to({
                alpha: 1
            },
            600),
            egret.Tween.get(this.title).to({
                alpha: 1
            },
            200).call(function() {
                egret.Tween.get(i.infotxt).to({
                    alpha: 1
                },
                200).call(function() {
                    egret.Tween.get(i.img_fight).to({
                        alpha: 1
                    },
                    200),
                    egret.Tween.get(i.boss_7).to({
                        alpha: 1
                    },
                    200)
                })
            }),
            ImageButtonUtil.add(this.btnClose,
            function() {
                2 == i._curType ? i.changePanel(1) : i.onClose()
            },
            this),
            ImageButtonUtil.add(this.btn_pet,
            function() {
                ModuleManager.showModuleByID(10)
            },
            this),
            ImageButtonUtil.add(this.btn_cure,
            function() {
                PetManager.cureAll()
            },
            this),
            ImageButtonUtil.add(this.btnHelp,
            function() {
                var t = "1、每日可挑战谱尼真身1次，挑战前需要依次战胜7个封印\n2、首次战胜谱尼真身可以获得谱尼的精元，获得谱尼的精元后再次挑战将不会获得奖励\n3、如果在网页版已经完成该活动并且获得了谱尼的精元，那么进行挑战也不会获得奖励",
                i = {
                    str: t,
                    title: "谱尼挑战",
                    hideClose: !0
                };
                tipsPop.TipsPop.openHelpPop(i)
            },
            this),
            ImageButtonUtil.add(this.btnInfo,
            function() {
                PetManager.showPetIntroduce(300)
            },
            this),
            ImageButtonUtil.add(this.img_fight,
            function() {
                i.changePanel(2)
            },
            this)
        },
        i.prototype._resize = function() {
            t.prototype._resize.call(this),
            this.width = egret.lifecycle.stage.stageWidth,
            this.height = egret.lifecycle.stage.$stageHeight;
            var i = egret.lifecycle.stage.stageWidth / 1136,
            e = egret.lifecycle.stage.stageHeight / 640,
            _ = i > e ? i: e;
            this.bg.scaleX = _,
            this.bg.scaleY = _,
            this._animate.x = egret.lifecycle.stage.stageWidth / 2,
            this._animate.y = egret.lifecycle.stage.stageHeight / 2,
            this._animate.scaleX = this._animate.scaleY = _
        },
        i.prototype.reShow = function() {
            var t = this;
            KTool.getMultiValueAsync([12798, 2915]).then(function(i) {
                t.tmpStep = i[0],
                0 == t.tmpStep && (t.tmpStep = i[1]),
                t.tmpStep > t._step ? t._step < 7 ? egret.setTimeout(function() {
                    var i = t.getBreakMC();
                    t["mark_bg_" + t._step].parent.addChild(i),
                    i.x = -140,
                    i.y = -130,
                    i.gotoAndPlay(1, 1),
                    i.addEventListener(egret.Event.COMPLETE, t.onBreakMcCompleted, t),
                    t.normalMC && t.normalMC.parent && t.normalMC.parent.removeChild(t.normalMC)
                },
                t, 300) : (t._step = t.tmpStep, t.updateUI(), SocketConnection.send(41391)) : (t.updateUI(), t.showNormalMC())
            })
        },
        i.prototype.onBreakMcCompleted = function() {
            var t = this.getBreakMC();
            t.removeEventListener(egret.Event.COMPLETE, this.onBreakMcCompleted, this),
            this.breakMC && this.breakMC.parent && this.breakMC.parent.removeChild(this.breakMC),
            this._step = this.tmpStep,
            this.updateUI(),
            this.showNormalMC()
        },
        i.prototype.showNormalMC = function() {
            if (this._step < 7) {
                var t = this.getNormalMC();
                this["mark_bg_" + this._step].parent.addChild(t),
                t.x = -12,
                t.y = -4,
                t.gotoAndPlay(1, -1)
            } else 2 == this._curType && this.changePanel(1)
        },
        i.prototype.updateUI = function() {
            for (var t = 0; 8 > t; t++) this.updateState(t),
            this["boss_" + t].name = "boss_" + t
        },
        i.prototype.updateState = function(t) {
            7 > t ? (this["boss_" + t].touchChildren = !1, t < this._step ? (this["mark_bg_" + t].visible = !1, this["mark_title_" + t].visible = !1, this["fighted_" + t].visible = !0, this["lock_" + t].visible = !1, this["boss_" + t].touchEnabled = !1) : t > this._step ? (this["mark_bg_" + t].visible = !0, this["mark_title_" + t].visible = !1, this["fighted_" + t].visible = !1, this["lock_" + t].visible = !0, this["boss_" + t].touchEnabled = !0) : (this["mark_bg_" + t].visible = !0, this["mark_title_" + t].visible = !0, this["fighted_" + t].visible = !1, this["lock_" + t].visible = !1, this["boss_" + t].touchEnabled = !0)) : t > this._step ? (this.boss_7.visible = !1, this.img_fight.visible = !0) : (this.boss_7.visible = this._step <= 7, this.img_fight.visible = this._step > 7)
        },
        i.prototype.onClickMark = function(t) {
            var i = t.currentTarget.name,
            e = ~~i.split("_")[1];
            if (e > this._step) {
                var _ = ["一", "二", "三", "四", "五", "六", "七"],
                n = _[this._step];
                Alarm.show("当前应该挑战第" + n + "封印，请前往挑战")
            } else if (e == this._step) if (7 > e) PopViewManager.getInstance().openView(new PuniFightDialog(e));
            else {
                var h = this._step + this._bossStartId;
                FightManager.fightNoMapBoss("", h)
            } else 7 == e && BubblerManager.getInstance().showText("今天已挑战过谱尼真身！")
        },
        i.prototype.getNormalMC = function() {
            return this.normalMC || (this.normalMC = core.manager.MovieClipManager.createMoveClip("puni_normal_anim", "puni_normal_anim"), this.normalMC.scaleX = this.normalMC.scaleY = .77),
            this.normalMC
        },
        i.prototype.getBreakMC = function() {
            return this.breakMC || (this.breakMC = core.manager.MovieClipManager.createMoveClip("puni_break_anim", "puni_break_anim"), this.breakMC.scaleX = this.breakMC.scaleY = 1.54),
            this.breakMC
        },
        i.prototype.changePanel = function(t) {
            var i = this;
            this.touchEnabled = this.touchChildren = !1,
            1 == t ? (this._curType = 1, egret.Tween.get(this.puni).to({
                y: 3,
                scaleX: 1,
                scaleY: 1
            },
            500), egret.Tween.get(this.grp_level).to({
                right: -561
            },
            250).call(function() {
                i.grp_level.visible = !1,
                i.grp_main.visible = !0,
                i.grp_main.right = -614,
                egret.Tween.get(i.grp_main).to({
                    right: 0
                },
                250).call(function() {
                    i.touchEnabled = i.touchChildren = !0
                })
            })) : 2 == t && (this._curType = 2, egret.Tween.get(this.puni).to({
                y: 93,
                scaleX: .85,
                scaleY: .85
            },
            500), egret.Tween.get(this.grp_main).to({
                right: -614
            },
            250).call(function() {
                i.grp_main.visible = !1,
                i.grp_level.visible = !0,
                i.grp_level.right = -561,
                egret.Tween.get(i.grp_level).to({
                    right: 35
                },
                250).call(function() {
                    i.touchEnabled = i.touchChildren = !0
                })
            }))
        },
        i.prototype.destroy = function() {
            t.prototype.destroy.call(this),
            this._animate.dispose(),
            this.normalMC && (core.manager.MovieClipManager.getInstance().releaseMovieClip(this.normalMC), this.normalMC = null),
            this.breakMC && (core.manager.MovieClipManager.getInstance().releaseMovieClip(this.breakMC), this.breakMC = null)
        },
        i
    } (BaseModule);
    t.PuniFight = i,
    __reflect(i.prototype, "puniFight.PuniFight")
} (puniFight || (puniFight = {}));
var __reflect = this && this.__reflect ||
function(t, i, e) {
    t.__class__ = i,
    e ? e.push(i) : e = [i],
    t.__types__ = t.__types__ ? e.concat(t.__types__) : e
},
__extends = this && this.__extends ||
function(t, i) {
    function e() {
        this.constructor = t
    }
    for (var _ in i) i.hasOwnProperty(_) && (t[_] = i[_]);
    e.prototype = i.prototype,
    t.prototype = new e
},
PuniFightDialog = function(t) {
    function i(i) {
        var e = t.call(this) || this;
        return e._bossStartId = 17934,
        e.constens = ["虚无封印 —— 只有必中技能可以打中，其余攻击技能均为miss。", "元素封印 —— 普通攻击为0伤害，只有烧伤、冻伤、中毒等状态可扣血，或者用光系、暗影系技能轮番攻击有伤害。", "能量封印 —— 谱尼受伤超过1000，则我方死亡;可以被控场。", "生命封印 —— 谱尼每回合恢复2000点血量。", "轮回封印 —— 2条命。", "永恒封印 —— pp无限，谱尼血量低于1000则回满。", "圣洁封印 —— 谱尼仅受我方攻击伤害的1/2。"],
        e.awards = ["虚无裂片", "元素裂片", "能量裂片", "生命裂片", "轮回裂片", "永恒裂片", "圣洁裂片"],
        e._step = i,
        e.skinName = PuniFightDialogSkin,
        e
    }
    return __extends(i, t),
    i.prototype.childrenCreated = function() {
        this.btnClose.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickClose, this),
        this.btnUnlock.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onUnlock, this);
        var t = ["一", "二", "三", "四", "五", "六", "七"];
        this.txtTitle.text = "谱尼的第" + t[this._step] + "封印",
        this.txtMarkMsg.text = "挑战内容介绍：\n" + this.constens[this._step] + "\n挑战奖励：谱尼的" + this.awards[this._step],
        this.mark_icon.source = "puni_fight_mark_bg_" + (this._step + 1) + "_png"
    },
    i.prototype.onClickClose = function(t) {
        this.hide()
    },
    i.prototype.onUnlock = function(t) {
        var i = this._step + this._bossStartId;
        this.hide(),
        FightManager.fightNoMapBoss("", i)
    },
    i.prototype.removeEvents = function() {
        ImageButtonUtil.removeAll(this)
    },
    i.prototype._parseData = function() {},
    i.prototype._upDateView = function() {},
    i.prototype.destroy = function() {
        t.prototype.destroy.call(this)
    },
    i
} (PopView);
__reflect(PuniFightDialog.prototype, "PuniFightDialog");
var __extends = this && this.__extends ||
function(t, i) {
    function e() {
        this.constructor = t
    }
    for (var _ in i) i.hasOwnProperty(_) && (t[_] = i[_]);
    e.prototype = i.prototype,
    t.prototype = new e
};
window.generateEUI = window.generateEUI || {},
generateEUI.paths = generateEUI.paths || {},
generateEUI.styles = void 0,
generateEUI.skins = {},
generateEUI.paths["resource/eui_skins/OldPuniFightSkin.exml"] = window.OldPuniFightSkin = function(t) {
    function i() {
        t.call(this),
        this.skinParts = ["bg", "mark_bg_0", "mark_title_0", "fighted_0", "lock_0", "boss_0", "mark_bg_1", "mark_title_1", "fighted_1", "lock_1", "boss_1", "mark_bg_2", "mark_title_2", "fighted_2", "lock_2", "boss_2", "mark_bg_3", "mark_title_3", "fighted_3", "lock_3", "boss_3", "mark_bg_4", "mark_title_4", "fighted_4", "lock_4", "boss_4", "mark_bg_5", "mark_title_5", "fighted_5", "lock_5", "boss_5", "mark_bg_6", "mark_title_6", "fighted_6", "lock_6", "boss_6", "boss_7", "txtCount2", "txtCount1", "up_bg", "btnClose", "btnHelp", "title", "top", "btn_pet", "btn_cure", "btnInfo", "btns"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this._Group1_i(), this._Image9_i(), this.txtCount2_i(), this.txtCount1_i(), this.top_i(), this.btns_i()]
    }
    __extends(i, t);
    var e = i.prototype;
    return e.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.source = "puni_fight_bg_jpg",
        t.percentWidth = 100,
        t.x = 0,
        t.y = 0,
        t
    },
    e._Group1_i = function() {
        var t = new eui.Group;
        return t.horizontalCenter = 0,
        t.y = 0,
        t.elementsContent = [this._Image1_i(), this._Image2_i(), this._Image3_i(), this._Image4_i(), this._Image5_i(), this._Image6_i(), this._Image7_i(), this._Image8_i(), this.boss_0_i(), this.boss_1_i(), this.boss_2_i(), this.boss_3_i(), this.boss_4_i(), this.boss_5_i(), this.boss_6_i(), this.boss_7_i()],
        t
    },
    e._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 370,
        t.source = "puni_fight_shadow_png",
        t.width = 348,
        t.x = 788,
        t.y = 270,
        t
    },
    e._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 434,
        t.source = "puni_fight_shadow_png",
        t.width = 428,
        t.x = 708,
        t.y = 88,
        t
    },
    e._Image3_i = function() {
        var t = new eui.Image;
        return t.height = 387,
        t.source = "puni_fight_shadow_png",
        t.width = 434,
        t.x = 542,
        t.y = 0,
        t
    },
    e._Image4_i = function() {
        var t = new eui.Image;
        return t.height = 347,
        t.source = "puni_fight_shadow_png",
        t.width = 434,
        t.x = 355,
        t.y = 0,
        t
    },
    e._Image5_i = function() {
        var t = new eui.Image;
        return t.height = 385,
        t.source = "puni_fight_shadow_png",
        t.width = 434,
        t.x = 163,
        t.y = 0,
        t
    },
    e._Image6_i = function() {
        var t = new eui.Image;
        return t.height = 434,
        t.source = "puni_fight_shadow_png",
        t.width = 429,
        t.x = 0,
        t.y = 86,
        t
    },
    e._Image7_i = function() {
        var t = new eui.Image;
        return t.height = 370,
        t.source = "puni_fight_shadow_png",
        t.width = 350,
        t.x = 0,
        t.y = 270,
        t
    },
    e._Image8_i = function() {
        var t = new eui.Image;
        return t.height = 90,
        t.source = "puni_fight_infotxt_png",
        t.width = 589,
        t.x = 277,
        t.y = 413,
        t
    },
    e.boss_0_i = function() {
        var t = new eui.Group;
        return this.boss_0 = t,
        t.x = 53,
        t.y = 404,
        t.elementsContent = [this.mark_bg_0_i(), this.mark_title_0_i(), this.fighted_0_i(), this.lock_0_i()],
        t
    },
    e.mark_bg_0_i = function() {
        var t = new eui.Image;
        return this.mark_bg_0 = t,
        t.height = 170,
        t.source = "puni_fight_mark_bg_1_png",
        t.width = 157,
        t.x = 0,
        t.y = 0,
        t
    },
    e.mark_title_0_i = function() {
        var t = new eui.Image;
        return this.mark_title_0 = t,
        t.height = 35,
        t.source = "puni_fight_mark_title_1_png",
        t.width = 110,
        t.x = 23,
        t.y = 128,
        t
    },
    e.fighted_0_i = function() {
        var t = new eui.Image;
        return this.fighted_0 = t,
        t.height = 156,
        t.source = "puni_fight_fighted_1_png",
        t.width = 137,
        t.x = 10,
        t.y = 4,
        t
    },
    e.lock_0_i = function() {
        var t = new eui.Image;
        return this.lock_0 = t,
        t.height = 151,
        t.source = "puni_fight_lock_1_png",
        t.width = 131,
        t.x = 13,
        t.y = 7,
        t
    },
    e.boss_1_i = function() {
        var t = new eui.Group;
        return this.boss_1 = t,
        t.x = 133,
        t.y = 221,
        t.elementsContent = [this.mark_bg_1_i(), this.mark_title_1_i(), this.fighted_1_i(), this.lock_1_i()],
        t
    },
    e.mark_bg_1_i = function() {
        var t = new eui.Image;
        return this.mark_bg_1 = t,
        t.height = 170,
        t.source = "puni_fight_mark_bg_2_png",
        t.width = 157,
        t.x = 0,
        t.y = 0,
        t
    },
    e.mark_title_1_i = function() {
        var t = new eui.Image;
        return this.mark_title_1 = t,
        t.height = 35,
        t.source = "puni_fight_mark_title_2_png",
        t.width = 110,
        t.x = 23,
        t.y = 126,
        t
    },
    e.fighted_1_i = function() {
        var t = new eui.Image;
        return this.fighted_1 = t,
        t.height = 156,
        t.source = "puni_fight_fighted_2_png",
        t.width = 137,
        t.x = 10,
        t.y = 4,
        t
    },
    e.lock_1_i = function() {
        var t = new eui.Image;
        return this.lock_1 = t,
        t.height = 151,
        t.source = "puni_fight_lock_1_png",
        t.width = 131,
        t.x = 13,
        t.y = 7,
        t
    },
    e.boss_2_i = function() {
        var t = new eui.Group;
        return this.boss_2 = t,
        t.x = 301,
        t.y = 85,
        t.elementsContent = [this.mark_bg_2_i(), this.mark_title_2_i(), this.fighted_2_i(), this.lock_2_i()],
        t
    },
    e.mark_bg_2_i = function() {
        var t = new eui.Image;
        return this.mark_bg_2 = t,
        t.height = 170,
        t.source = "puni_fight_mark_bg_3_png",
        t.width = 157,
        t.x = 0,
        t.y = 0,
        t
    },
    e.mark_title_2_i = function() {
        var t = new eui.Image;
        return this.mark_title_2 = t,
        t.height = 35,
        t.source = "puni_fight_mark_title_3_png",
        t.width = 110,
        t.x = 23,
        t.y = 126,
        t
    },
    e.fighted_2_i = function() {
        var t = new eui.Image;
        return this.fighted_2 = t,
        t.height = 156,
        t.source = "puni_fight_fighted_3_png",
        t.width = 137,
        t.x = 10,
        t.y = 4,
        t
    },
    e.lock_2_i = function() {
        var t = new eui.Image;
        return this.lock_2 = t,
        t.height = 151,
        t.source = "puni_fight_lock_1_png",
        t.width = 131,
        t.x = 13,
        t.y = 7,
        t
    },
    e.boss_3_i = function() {
        var t = new eui.Group;
        return this.boss_3 = t,
        t.x = 492,
        t.y = 49,
        t.elementsContent = [this.mark_bg_3_i(), this.mark_title_3_i(), this.fighted_3_i(), this.lock_3_i()],
        t
    },
    e.mark_bg_3_i = function() {
        var t = new eui.Image;
        return this.mark_bg_3 = t,
        t.height = 170,
        t.source = "puni_fight_mark_bg_4_png",
        t.width = 157,
        t.x = 0,
        t.y = 0,
        t
    },
    e.mark_title_3_i = function() {
        var t = new eui.Image;
        return this.mark_title_3 = t,
        t.height = 35,
        t.source = "puni_fight_mark_title_4_png",
        t.width = 110,
        t.x = 23,
        t.y = 126,
        t
    },
    e.fighted_3_i = function() {
        var t = new eui.Image;
        return this.fighted_3 = t,
        t.height = 156,
        t.source = "puni_fight_fighted_4_png",
        t.width = 137,
        t.x = 10,
        t.y = 4,
        t
    },
    e.lock_3_i = function() {
        var t = new eui.Image;
        return this.lock_3 = t,
        t.height = 151,
        t.source = "puni_fight_lock_1_png",
        t.width = 131,
        t.x = 13,
        t.y = 7,
        t
    },
    e.boss_4_i = function() {
        var t = new eui.Group;
        return this.boss_4 = t,
        t.x = 680,
        t.y = 85,
        t.elementsContent = [this.mark_bg_4_i(), this.mark_title_4_i(), this.fighted_4_i(), this.lock_4_i()],
        t
    },
    e.mark_bg_4_i = function() {
        var t = new eui.Image;
        return this.mark_bg_4 = t,
        t.height = 170,
        t.source = "puni_fight_mark_bg_5_png",
        t.width = 157,
        t.x = 0,
        t.y = 0,
        t
    },
    e.mark_title_4_i = function() {
        var t = new eui.Image;
        return this.mark_title_4 = t,
        t.height = 35,
        t.source = "puni_fight_mark_title_5_png",
        t.width = 110,
        t.x = 22,
        t.y = 126,
        t
    },
    e.fighted_4_i = function() {
        var t = new eui.Image;
        return this.fighted_4 = t,
        t.height = 156,
        t.source = "puni_fight_fighted_5_png",
        t.width = 137,
        t.x = 10,
        t.y = 4,
        t
    },
    e.lock_4_i = function() {
        var t = new eui.Image;
        return this.lock_4 = t,
        t.height = 151,
        t.source = "puni_fight_lock_1_png",
        t.width = 131,
        t.x = 13,
        t.y = 7,
        t
    },
    e.boss_5_i = function() {
        var t = new eui.Group;
        return this.boss_5 = t,
        t.x = 848,
        t.y = 221,
        t.elementsContent = [this.mark_bg_5_i(), this.mark_title_5_i(), this.fighted_5_i(), this.lock_5_i()],
        t
    },
    e.mark_bg_5_i = function() {
        var t = new eui.Image;
        return this.mark_bg_5 = t,
        t.height = 170,
        t.source = "puni_fight_mark_bg_6_png",
        t.width = 157,
        t.x = 0,
        t.y = 0,
        t
    },
    e.mark_title_5_i = function() {
        var t = new eui.Image;
        return this.mark_title_5 = t,
        t.height = 35,
        t.source = "puni_fight_mark_title_6_png",
        t.width = 110,
        t.x = 22,
        t.y = 126,
        t
    },
    e.fighted_5_i = function() {
        var t = new eui.Image;
        return this.fighted_5 = t,
        t.height = 156,
        t.source = "puni_fight_fighted_6_png",
        t.width = 137,
        t.x = 10,
        t.y = 4,
        t
    },
    e.lock_5_i = function() {
        var t = new eui.Image;
        return this.lock_5 = t,
        t.height = 151,
        t.source = "puni_fight_lock_1_png",
        t.width = 131,
        t.x = 13,
        t.y = 7,
        t
    },
    e.boss_6_i = function() {
        var t = new eui.Group;
        return this.boss_6 = t,
        t.x = 928,
        t.y = 404,
        t.elementsContent = [this.mark_bg_6_i(), this.mark_title_6_i(), this.fighted_6_i(), this.lock_6_i()],
        t
    },
    e.mark_bg_6_i = function() {
        var t = new eui.Image;
        return this.mark_bg_6 = t,
        t.height = 170,
        t.source = "puni_fight_mark_bg_7_png",
        t.width = 157,
        t.x = 0,
        t.y = 0,
        t
    },
    e.mark_title_6_i = function() {
        var t = new eui.Image;
        return this.mark_title_6 = t,
        t.height = 35,
        t.source = "puni_fight_mark_title_7_png",
        t.width = 110,
        t.x = 22,
        t.y = 126,
        t
    },
    e.fighted_6_i = function() {
        var t = new eui.Image;
        return this.fighted_6 = t,
        t.height = 156,
        t.source = "puni_fight_fighted_7_png",
        t.width = 137,
        t.x = 10,
        t.y = 4,
        t
    },
    e.lock_6_i = function() {
        var t = new eui.Image;
        return this.lock_6 = t,
        t.height = 151,
        t.source = "puni_fight_lock_1_png",
        t.width = 131,
        t.x = 13,
        t.y = 7,
        t
    },
    e.boss_7_i = function() {
        var t = new eui.Image;
        return this.boss_7 = t,
        t.height = 126,
        t.source = "puni_fight_img_fight_png",
        t.width = 287,
        t.x = 428,
        t.y = 514,
        t
    },
    e._Image9_i = function() {
        var t = new eui.Image;
        return t.height = 82,
        t.left = 0,
        t.source = "puni_fight_left_bg_png",
        t.visible = !1,
        t.width = 314,
        t.y = 76,
        t
    },
    e.txtCount2_i = function() {
        var t = new eui.Label;
        return this.txtCount2 = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 22,
        t.text = "0/7",
        t.textColor = 15921110,
        t.visible = !1,
        t.x = 217,
        t.y = 89.34,
        t
    },
    e.txtCount1_i = function() {
        var t = new eui.Label;
        return this.txtCount1 = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 22,
        t.text = "0/7",
        t.textColor = 15921110,
        t.visible = !1,
        t.x = 217,
        t.y = 123.34,
        t
    },
    e.top_i = function() {
        var t = new eui.Group;
        return this.top = t,
        t.percentWidth = 100,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this.up_bg_i(), this.btnClose_i(), this.btnHelp_i(), this.title_i()],
        t
    },
    e.up_bg_i = function() {
        var t = new eui.Image;
        return this.up_bg = t,
        t.height = 51,
        t.source = "common_top_bg_style1_png",
        t.percentWidth = 100,
        t.x = 0,
        t.y = 0,
        t
    },
    e.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.source = "common_close_2_png",
        t.x = 0,
        t.y = 0,
        t
    },
    e.btnHelp_i = function() {
        var t = new eui.Image;
        return this.btnHelp = t,
        t.source = "common_help_icon_png",
        t.x = 271,
        t.y = 8.68,
        t
    },
    e.title_i = function() {
        var t = new eui.Image;
        return this.title = t,
        t.height = 36,
        t.source = "puni_fight_title_png",
        t.width = 156,
        t.x = 111,
        t.y = 7,
        t
    },
    e.btns_i = function() {
        var t = new eui.Group;
        return this.btns = t,
        t.height = 128,
        t.right = 19,
        t.width = 60,
        t.y = 78,
        t.elementsContent = [this.btn_pet_i(), this.btn_cure_i(), this.btnInfo_i()],
        t
    },
    e.btn_pet_i = function() {
        var t = new eui.Image;
        return this.btn_pet = t,
        t.height = 60,
        t.source = "puni_fight_panel_imgBtn_pet_png",
        t.width = 60,
        t.x = 0,
        t.y = 0,
        t
    },
    e.btn_cure_i = function() {
        var t = new eui.Image;
        return this.btn_cure = t,
        t.height = 60,
        t.source = "puni_fight_panel_imgBtn_cure_png",
        t.width = 60,
        t.x = 0,
        t.y = 68,
        t
    },
    e.btnInfo_i = function() {
        var t = new eui.Image;
        return this.btnInfo = t,
        t.height = 74,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "puni_fight_panel_btnInfo_png",
        t.width = 74,
        t.x = -7,
        t.y = 134,
        t
    },
    i
} (eui.Skin),
generateEUI.paths["resource/eui_skins/PuniFightDialogSkin.exml"] = window.PuniFightDialogSkin = function(t) {
    function i() {
        t.call(this),
        this.skinParts = ["btnClose", "btnUnlock", "mark_icon", "txtTitle", "txtMarkMsg"],
        this.height = 374,
        this.width = 620,
        this.elementsContent = [this._Image1_i(), this._Image2_i(), this._Image3_i(), this.btnClose_i(), this.btnUnlock_i(), this._Image4_i(), this.mark_icon_i(), this.txtTitle_i(), this.txtMarkMsg_i()]
    }
    __extends(i, t);
    var e = i.prototype;
    return e._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 333,
        t.source = "common_pop_point_png",
        t.width = 608,
        t.x = 0,
        t.y = 41,
        t
    },
    e._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 42,
        t.source = "common_pop_title_samll_png",
        t.width = 600,
        t.x = 4,
        t.y = 22,
        t
    },
    e._Image3_i = function() {
        var t = new eui.Image;
        return t.height = 26,
        t.source = "puni_fight_dialog_title_png",
        t.width = 58,
        t.x = 37,
        t.y = 28,
        t
    },
    e.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.height = 56,
        t.source = "common_close_1_png",
        t.width = 54,
        t.x = 566,
        t.y = 0,
        t
    },
    e.btnUnlock_i = function() {
        var t = new eui.Image;
        return this.btnUnlock = t,
        t.height = 52,
        t.source = "puni_fight_dialog_unlock_mark_png",
        t.width = 176,
        t.x = 216,
        t.y = 293,
        t
    },
    e._Image4_i = function() {
        var t = new eui.Image;
        return t.height = 150,
        t.source = "puni_fight_dialog_icon_bg_png",
        t.width = 150,
        t.x = 41,
        t.y = 108,
        t
    },
    e.mark_icon_i = function() {
        var t = new eui.Image;
        return this.mark_icon = t,
        t.height = 156,
        t.source = "",
        t.width = 137,
        t.x = 47,
        t.y = 105,
        t
    },
    e.txtTitle_i = function() {
        var t = new eui.Label;
        return this.txtTitle = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 24,
        t.text = "谱尼的第二封印",
        t.textColor = 3492213,
        t.x = 211,
        t.y = 130,
        t
    },
    e.txtMarkMsg_i = function() {
        var t = new eui.Label;
        return this.txtMarkMsg = t,
        t.fontFamily = "黑体",
        t.lineSpacing = 4,
        t.multiline = !0,
        t.size = 18,
        t.text = "挑战内容介绍：内容介绍内容介绍内容介\n绍内容介绍内容介绍\n挑战成就奖励：内容介绍内容介绍",
        t.textColor = 3492213,
        t.width = 360,
        t.x = 212,
        t.y = 167,
        t
    },
    i
} (eui.Skin),
generateEUI.paths["resource/eui_skins/PuniFightSkin.exml"] = window.PuniFightSkin = function(t) {
    function i() {
        t.call(this),
        this.skinParts = ["bg", "puni", "title", "infotxt", "img_fight", "boss_7", "grp_main", "mark_bg_0", "mark_title_0", "fighted_0", "lock_0", "boss_0", "mark_bg_1", "mark_title_1", "fighted_1", "lock_1", "boss_1", "mark_bg_2", "mark_title_2", "fighted_2", "lock_2", "boss_2", "mark_bg_3", "mark_title_3", "fighted_3", "lock_3", "boss_3", "mark_bg_4", "mark_title_4", "fighted_4", "lock_4", "boss_4", "mark_bg_5", "mark_title_5", "fighted_5", "lock_5", "boss_5", "mark_bg_6", "mark_title_6", "fighted_6", "lock_6", "boss_6", "grp_level", "btnClose", "btnHelp", "btn_pet", "btn_cure", "btnInfo", "grp_btns"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this.puni_i(), this._Image1_i(), this.grp_main_i(), this.grp_level_i(), this._Group1_i(), this.grp_btns_i()]
    }
    __extends(i, t);
    var e = i.prototype;
    return e.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.height = 640,
        t.source = "puni_fight_bg_jpg",
        t.width = 1136,
        t.x = 0,
        t.y = 0,
        t
    },
    e.puni_i = function() {
        var t = new eui.Image;
        return this.puni = t,
        t.height = 637,
        t.source = "puni_fight_puni_png",
        t.width = 929,
        t.x = 0,
        t.y = 3,
        t
    },
    e._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 640,
        t.right = 0,
        t.source = "puni_fight_mask_png",
        t.width = 795,
        t.y = 1,
        t
    },
    e.grp_main_i = function() {
        var t = new eui.Group;
        return this.grp_main = t,
        t.right = 0,
        t.visible = !0,
        t.y = 43,
        t.elementsContent = [this.title_i(), this.infotxt_i(), this.img_fight_i(), this.boss_7_i()],
        t
    },
    e.title_i = function() {
        var t = new eui.Image;
        return this.title = t,
        t.height = 276,
        t.source = "puni_fight_title_png",
        t.width = 478,
        t.x = 93,
        t.y = 0,
        t
    },
    e.infotxt_i = function() {
        var t = new eui.Image;
        return this.infotxt = t,
        t.height = 202,
        t.source = "puni_fight_infotxt_png",
        t.width = 614,
        t.x = 0,
        t.y = 195,
        t
    },
    e.img_fight_i = function() {
        var t = new eui.Image;
        return this.img_fight = t,
        t.source = "puni_fight_img_fight_png",
        t.x = 323,
        t.y = 402,
        t
    },
    e.boss_7_i = function() {
        var t = new eui.Image;
        return this.boss_7 = t,
        t.source = "puni_fight_img_finalFight_png",
        t.x = 323,
        t.y = 402,
        t
    },
    e.grp_level_i = function() {
        var t = new eui.Group;
        return this.grp_level = t,
        t.height = 567,
        t.right = 35,
        t.visible = !1,
        t.width = 561,
        t.y = 36,
        t.elementsContent = [this._Image2_i(), this.boss_0_i(), this.boss_1_i(), this.boss_2_i(), this.boss_3_i(), this.boss_4_i(), this.boss_5_i(), this.boss_6_i()],
        t
    },
    e._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 424,
        t.source = "puni_fight_line_png",
        t.width = 389,
        t.x = 102,
        t.y = 59,
        t
    },
    e.boss_0_i = function() {
        var t = new eui.Group;
        return this.boss_0 = t,
        t.x = 441,
        t.y = 277,
        t.elementsContent = [this.mark_bg_0_i(), this.mark_title_0_i(), this.fighted_0_i(), this.lock_0_i()],
        t
    },
    e.mark_bg_0_i = function() {
        var t = new eui.Image;
        return this.mark_bg_0 = t,
        t.height = 130,
        t.source = "puni_fight_mark_bg_1_png",
        t.width = 120,
        t.x = 0,
        t.y = 0,
        t
    },
    e.mark_title_0_i = function() {
        var t = new eui.Image;
        return this.mark_title_0 = t,
        t.height = 30,
        t.source = "puni_fight_mark_title_1_png",
        t.width = 94,
        t.x = 13,
        t.y = 118,
        t
    },
    e.fighted_0_i = function() {
        var t = new eui.Image;
        return this.fighted_0 = t,
        t.height = 112,
        t.source = "puni_fight_fighted_1_png",
        t.width = 99,
        t.x = 10,
        t.y = 8,
        t
    },
    e.lock_0_i = function() {
        var t = new eui.Image;
        return this.lock_0 = t,
        t.height = 108,
        t.source = "puni_fight_lock_1_png",
        t.width = 94,
        t.x = 13,
        t.y = 11,
        t
    },
    e.boss_1_i = function() {
        var t = new eui.Group;
        return this.boss_1 = t,
        t.x = 371,
        t.y = 419,
        t.elementsContent = [this.mark_bg_1_i(), this.mark_title_1_i(), this.fighted_1_i(), this.lock_1_i()],
        t
    },
    e.mark_bg_1_i = function() {
        var t = new eui.Image;
        return this.mark_bg_1 = t,
        t.height = 130,
        t.source = "puni_fight_mark_bg_2_png",
        t.width = 120,
        t.x = 0,
        t.y = 0,
        t
    },
    e.mark_title_1_i = function() {
        var t = new eui.Image;
        return this.mark_title_1 = t,
        t.height = 30,
        t.source = "puni_fight_mark_title_2_png",
        t.width = 94,
        t.x = 13,
        t.y = 118,
        t
    },
    e.fighted_1_i = function() {
        var t = new eui.Image;
        return this.fighted_1 = t,
        t.height = 112,
        t.source = "puni_fight_fighted_2_png",
        t.width = 99,
        t.x = 10,
        t.y = 8,
        t
    },
    e.lock_1_i = function() {
        var t = new eui.Image;
        return this.lock_1 = t,
        t.height = 108,
        t.source = "puni_fight_lock_1_png",
        t.width = 94,
        t.x = 13,
        t.y = 9,
        t
    },
    e.boss_2_i = function() {
        var t = new eui.Group;
        return this.boss_2 = t,
        t.x = 182,
        t.y = 389,
        t.elementsContent = [this.mark_bg_2_i(), this.mark_title_2_i(), this.fighted_2_i(), this.lock_2_i()],
        t
    },
    e.mark_bg_2_i = function() {
        var t = new eui.Image;
        return this.mark_bg_2 = t,
        t.height = 130,
        t.source = "puni_fight_mark_bg_3_png",
        t.width = 120,
        t.x = 0,
        t.y = 0,
        t
    },
    e.mark_title_2_i = function() {
        var t = new eui.Image;
        return this.mark_title_2 = t,
        t.height = 30,
        t.source = "puni_fight_mark_title_3_png",
        t.width = 94,
        t.x = 14,
        t.y = 118,
        t
    },
    e.fighted_2_i = function() {
        var t = new eui.Image;
        return this.fighted_2 = t,
        t.height = 112,
        t.source = "puni_fight_fighted_3_png",
        t.width = 99,
        t.x = 11,
        t.y = 8,
        t
    },
    e.lock_2_i = function() {
        var t = new eui.Image;
        return this.lock_2 = t,
        t.height = 108,
        t.source = "puni_fight_lock_1_png",
        t.width = 94,
        t.x = 14,
        t.y = 10,
        t
    },
    e.boss_3_i = function() {
        var t = new eui.Group;
        return this.boss_3 = t,
        t.x = 209,
        t.y = 225,
        t.elementsContent = [this.mark_bg_3_i(), this.mark_title_3_i(), this.fighted_3_i(), this.lock_3_i()],
        t
    },
    e.mark_bg_3_i = function() {
        var t = new eui.Image;
        return this.mark_bg_3 = t,
        t.height = 130,
        t.source = "puni_fight_mark_bg_4_png",
        t.width = 121,
        t.x = 0,
        t.y = 0,
        t
    },
    e.mark_title_3_i = function() {
        var t = new eui.Image;
        return this.mark_title_3 = t,
        t.height = 30,
        t.source = "puni_fight_mark_title_4_png",
        t.width = 94,
        t.x = 13,
        t.y = 118,
        t
    },
    e.fighted_3_i = function() {
        var t = new eui.Image;
        return this.fighted_3 = t,
        t.height = 112,
        t.source = "puni_fight_fighted_4_png",
        t.width = 99,
        t.x = 11,
        t.y = 8,
        t
    },
    e.lock_3_i = function() {
        var t = new eui.Image;
        return this.lock_3 = t,
        t.height = 108,
        t.source = "puni_fight_lock_1_png",
        t.width = 94,
        t.x = 14,
        t.y = 10,
        t
    },
    e.boss_4_i = function() {
        var t = new eui.Group;
        return this.boss_4 = t,
        t.x = 334,
        t.y = 87,
        t.elementsContent = [this.mark_bg_4_i(), this.mark_title_4_i(), this.fighted_4_i(), this.lock_4_i()],
        t
    },
    e.mark_bg_4_i = function() {
        var t = new eui.Image;
        return this.mark_bg_4 = t,
        t.height = 130,
        t.source = "puni_fight_mark_bg_5_png",
        t.width = 121,
        t.x = 0,
        t.y = 0,
        t
    },
    e.mark_title_4_i = function() {
        var t = new eui.Image;
        return this.mark_title_4 = t,
        t.height = 30,
        t.source = "puni_fight_mark_title_5_png",
        t.width = 94,
        t.x = 14,
        t.y = 118,
        t
    },
    e.fighted_4_i = function() {
        var t = new eui.Image;
        return this.fighted_4 = t,
        t.height = 112,
        t.source = "puni_fight_fighted_5_png",
        t.width = 99,
        t.x = 11,
        t.y = 8,
        t
    },
    e.lock_4_i = function() {
        var t = new eui.Image;
        return this.lock_4 = t,
        t.height = 108,
        t.source = "puni_fight_lock_1_png",
        t.width = 94,
        t.x = 14,
        t.y = 10,
        t
    },
    e.boss_5_i = function() {
        var t = new eui.Group;
        return this.boss_5 = t,
        t.x = 169,
        t.y = 22,
        t.elementsContent = [this.mark_bg_5_i(), this.mark_title_5_i(), this.fighted_5_i(), this.lock_5_i()],
        t
    },
    e.mark_bg_5_i = function() {
        var t = new eui.Image;
        return this.mark_bg_5 = t,
        t.height = 130,
        t.source = "puni_fight_mark_bg_6_png",
        t.width = 120,
        t.x = 0,
        t.y = 0,
        t
    },
    e.mark_title_5_i = function() {
        var t = new eui.Image;
        return this.mark_title_5 = t,
        t.height = 31,
        t.source = "puni_fight_mark_title_6_png",
        t.width = 94,
        t.x = 13,
        t.y = 117,
        t
    },
    e.fighted_5_i = function() {
        var t = new eui.Image;
        return this.fighted_5 = t,
        t.height = 112,
        t.source = "puni_fight_fighted_6_png",
        t.width = 99,
        t.x = 11,
        t.y = 8,
        t
    },
    e.lock_5_i = function() {
        var t = new eui.Image;
        return this.lock_5 = t,
        t.height = 108,
        t.source = "puni_fight_lock_1_png",
        t.width = 94,
        t.x = 14,
        t.y = 10,
        t
    },
    e.boss_6_i = function() {
        var t = new eui.Group;
        return this.boss_6 = t,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this.mark_bg_6_i(), this.mark_title_6_i(), this.fighted_6_i(), this.lock_6_i()],
        t
    },
    e.mark_bg_6_i = function() {
        var t = new eui.Image;
        return this.mark_bg_6 = t,
        t.height = 131,
        t.source = "puni_fight_mark_bg_7_png",
        t.width = 121,
        t.x = 0,
        t.y = 0,
        t
    },
    e.mark_title_6_i = function() {
        var t = new eui.Image;
        return this.mark_title_6 = t,
        t.height = 31,
        t.source = "puni_fight_mark_title_7_png",
        t.width = 94,
        t.x = 13,
        t.y = 117,
        t
    },
    e.fighted_6_i = function() {
        var t = new eui.Image;
        return this.fighted_6 = t,
        t.height = 112,
        t.source = "puni_fight_fighted_7_png",
        t.width = 99,
        t.x = 11,
        t.y = 8,
        t
    },
    e.lock_6_i = function() {
        var t = new eui.Image;
        return this.lock_6 = t,
        t.height = 108,
        t.source = "puni_fight_lock_1_png",
        t.width = 94,
        t.x = 14,
        t.y = 10,
        t
    },
    e._Group1_i = function() {
        var t = new eui.Group;
        return t.visible = !1,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image3_i(), this.btnClose_i(), this.btnHelp_i()],
        t
    },
    e._Image3_i = function() {
        var t = new eui.Image;
        return t.height = 45,
        t.source = "puni_fight_up_bg_png",
        t.touchEnabled = !1,
        t.width = 75,
        t.x = 94,
        t.y = 2,
        t
    },
    e.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.source = "common_close_2_png",
        t.x = 0,
        t.y = 0,
        t
    },
    e.btnHelp_i = function() {
        var t = new eui.Image;
        return this.btnHelp = t,
        t.source = "puni_fight_btnHelp_png",
        t.x = 117,
        t.y = 10,
        t
    },
    e.grp_btns_i = function() {
        var t = new eui.Group;
        return this.grp_btns = t,
        t.x = 27,
        t.y = 397,
        t.elementsContent = [this.btn_pet_i(), this.btn_cure_i(), this.btnInfo_i()],
        t
    },
    e.btn_pet_i = function() {
        var t = new eui.Image;
        return this.btn_pet = t,
        t.height = 60,
        t.source = "puni_fight_panel_imgBtn_pet_png",
        t.width = 60,
        t.x = 7,
        t.y = 0,
        t
    },
    e.btn_cure_i = function() {
        var t = new eui.Image;
        return this.btn_cure = t,
        t.height = 60,
        t.source = "puni_fight_panel_imgBtn_cure_png",
        t.width = 60,
        t.x = 7,
        t.y = 68,
        t
    },
    e.btnInfo_i = function() {
        var t = new eui.Image;
        return this.btnInfo = t,
        t.height = 74,
        t.source = "puni_fight_panel_btnInfo_png",
        t.width = 74,
        t.x = 0,
        t.y = 148,
        t
    },
    i
} (eui.Skin);