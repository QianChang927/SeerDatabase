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
devilZax; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.skinName = DevilzaxSkin,
            StatLogger.log("20210813版本系统功能", "魔王•咤克斯关卡", "进入魔王•咤克斯关卡面板"),
            e
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            var e = this;
            t.prototype.childrenCreated.call(this),
            this.initOldPveBtnClose(0, this, "",
            function() {
                e.onClose()
            },
            this),
            this.addEvent()
        },
        e.prototype.addEvent = function() {
            ImageButtonUtil.add(this.btnChao,
            function() {
                ModuleManager.showModule("devilZax", ["devil_zax"], null, "DevilZaxMain", AppDoStyle.NULL)
            },
            this),
            ImageButtonUtil.add(this.btnWan,
            function() {
                Alarm.show("暂未开放，敬请期待！")
            },
            this)
        },
        e.prototype.destroy = function() {
            t.prototype.destroy.call(this),
            ImageButtonUtil.removeAll(this)
        },
        e
    } (BaseModule);
    t.DevilZax = e,
    __reflect(e.prototype, "devilZax.DevilZax")
} (devilZax || (devilZax = {}));
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
devilZax; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e._curNature = 100,
            e._attrList = [0, 0, 0, 255, 0, 255],
            e._tmpAttr = [0, 0, 0, 0, 0, 0],
            e.skinName = Devilzax5Skin,
            e
        }
        return __extends(e, t),
        Object.defineProperty(e.prototype, "num0", {
            get: function() {
                return this._tmpAttr[0]
            },
            set: function(t) {
                this._tmpAttr[0] = t,
                this.inputTxt0.text = this.num0.toString()
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "num1", {
            get: function() {
                return this._tmpAttr[1]
            },
            set: function(t) {
                this._tmpAttr[1] = t,
                this.inputTxt1.text = this.num1.toString()
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "num2", {
            get: function() {
                return this._tmpAttr[2]
            },
            set: function(t) {
                this._tmpAttr[2] = t,
                this.inputTxt2.text = this.num2.toString()
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "num3", {
            get: function() {
                return this._tmpAttr[3]
            },
            set: function(t) {
                this._tmpAttr[3] = t,
                this.inputTxt3.text = this.num3.toString()
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "num4", {
            get: function() {
                return this._tmpAttr[4]
            },
            set: function(t) {
                this._tmpAttr[4] = t,
                this.inputTxt4.text = this.num4.toString()
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "num5", {
            get: function() {
                return this._tmpAttr[5]
            },
            set: function(t) {
                this._tmpAttr[5] = t,
                this.inputTxt5.text = this.num5.toString()
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "totalNum", {
            get: function() {
                return this._tmpAttr.reduce(function(t, e) {
                    return t + e
                })
            },
            enumerable: !0,
            configurable: !0
        }),
        e.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this),
            this.grp_study.visible = !1,
            this.addEvent(),
            this.updateView()
        },
        e.prototype.addEvent = function() {
            var t = this;
            ImageButtonUtil.add(this.btnClose,
            function() {
                ModuleManager.hideModule(t)
            },
            this),
            ImageButtonUtil.add(this.btnBuy,
            function() {
                PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(247506, 1,
                    function() {
                        SocketConnection.sendByQueue(45676, [13, 0],
                        function() {
                            Alarm.show("恭喜你魔王·咤克斯超级极品成功！"),
                            t.updateView()
                        })
                    })
                },
                t)
            },
            this)
        },
        e.prototype.addStudyEvent = function() {
            var t = this;
            this._rect.addEventListener(egret.TouchEvent.TOUCH_TAP, this.hideStudy, this),
            ImageButtonUtil.add(this.img_btnReset, this.reset, this);
            for (var e = 0; 6 > e; e++) ImageButtonUtil.add(this["btnMax" + e], this.onTouchTapImageButtonHandler, this),
            ImageButtonUtil.add(this["btnMin" + e], this.onTouchTapImageButtonHandler, this),
            ImageButtonUtil.add(this["btnPlus" + e], this.onTouchTapImageButtonHandler, this),
            this["inputTxt" + e].addEventListener(egret.Event.CHANGE, this.txtChangeHandle, this);
            ImageButtonUtil.add(this.img_btnAssign,
            function() {
                t._attrList = t._tmpAttr,
                t.txt_attr_1.visible = !1,
                t.txt_attr_0.text = "自定义完成",
                t.hideStudy()
            },
            this)
        },
        e.prototype.onTouchTapImageButtonHandler = function(t) {
            switch (t.target) {
            case this.btnMin0:
                this.checkInput(0, this.num0 - 1);
                break;
            case this.btnMax0:
                this.checkInput(0, 255);
                break;
            case this.btnPlus0:
                this.checkInput(0, this.num0 + 1);
                break;
            case this.btnMin1:
                this.checkInput(1, this.num1 - 1);
                break;
            case this.btnMax1:
                this.checkInput(1, 255);
                break;
            case this.btnPlus1:
                this.checkInput(1, this.num1 + 1);
                break;
            case this.btnMin2:
                this.checkInput(2, this.num2 - 1);
                break;
            case this.btnMax2:
                this.checkInput(2, 255);
                break;
            case this.btnPlus2:
                this.checkInput(2, this.num2 + 1);
                break;
            case this.btnMin3:
                this.checkInput(3, this.num3 - 1);
                break;
            case this.btnMax3:
                this.checkInput(3, 255);
                break;
            case this.btnPlus3:
                this.checkInput(3, this.num3 + 1);
                break;
            case this.btnMin4:
                this.checkInput(4, this.num4 - 1);
                break;
            case this.btnMax4:
                this.checkInput(4, 255);
                break;
            case this.btnPlus4:
                this.checkInput(4, this.num4 + 1);
                break;
            case this.btnMin5:
                this.checkInput(5, this.num5 - 1);
                break;
            case this.btnMax5:
                this.checkInput(5, 255);
                break;
            case this.btnPlus5:
                this.checkInput(5, this.num5 + 1)
            }
        },
        e.prototype.updateView = function() {
            var t = this;
            KTool.getBitSet([15121],
            function(e) {
                DisplayUtil.setEnabled(t.btnBuy, !KTool.getBit(e[0], 1))
            })
        },
        e.prototype.showStudy = function() {
            this.grp_study.width = egret.lifecycle.stage.stageWidth,
            this.grp_study.height = egret.lifecycle.stage.stageHeight,
            this.grp_study.scaleX = this.grp_study.scaleY = 0,
            this.grp_study.visible = !0;
            for (var t = 0; t < this._tmpAttr.length; t++) this["num" + t] = this._tmpAttr[t];
            this.txt_studyNum.text = "当前学习力总和：" + this.totalNum,
            egret.Tween.get(this.grp_study).to({
                scaleX: 1,
                scaleY: 1
            },
            150, egret.Ease.backOut)
        },
        e.prototype.hideStudy = function() {
            var t = this;
            255 == this._attrList[3] && 255 == this._attrList[5] ? this._tmpAttr = [0, 0, 0, 0, 0, 0] : this._tmpAttr = this._attrList.concat(),
            egret.Tween.get(this.grp_study).to({
                scaleX: 0,
                scaleY: 0
            },
            150, egret.Ease.backIn).call(function() {
                t.grp_study.visible = !1
            })
        },
        e.prototype.txtChangeHandle = function(t) {
            var e = t.currentTarget,
            i = t.currentTarget.name,
            n = ~~i.split("_")[1];
            this.checkInput(n, ~~e.text)
        },
        e.prototype.checkInput = function(t, e) {
            e = Math.min(e, 255),
            e = Math.max(0, e);
            var i = this["num" + t],
            n = e - i;
            this.totalNum + n > 510 && (e -= this.totalNum + n - 510),
            this["num" + t] = e,
            this.txt_studyNum.text = "当前学习力总和：" + this.totalNum
        },
        e.prototype.reset = function() {
            for (var t = 0; 6 > t; t++) this["num" + t] = 0;
            this.txt_studyNum.text = "当前学习力总和:" + this.totalNum
        },
        e.prototype.destroy = function() {
            t.prototype.destroy.call(this),
            ImageButtonUtil.removeAll(this),
            this._rect.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.hideStudy, this)
        },
        e
    } (BaseModule);
    t.DevilZaxBuy = e,
    __reflect(e.prototype, "devilZax.DevilZaxBuy")
} (devilZax || (devilZax = {}));
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
devilZax; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.currentLevelNum = 0,
            e.skinName = Devilzax4Skin,
            e
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            var e = this;
            t.prototype.childrenCreated.call(this),
            this.initOldPveBtnClose(0, this, "DevilZax_4_Title_png",
            function() {
                ModuleManager.hideModule(e),
                ModuleManager.showModule("devilZax", ["devil_zax"], null, "DevilZaxMain", AppDoStyle.NULL),
                egret.clearInterval(e.interval)
            },
            this),
            this.animchouka = DragonbonesUtil.createAnimate("shuaxin_ske_json", "shuaxin_tex_json", "shuaxin_tex_png", "chouka"),
            this.animchouka.x = egret.lifecycle.stage.stageWidth / 2 - 10,
            this.animchouka.y = 320,
            this.animchouka.visible = !1,
            this.addChild(this.animchouka),
            this.addEvent(),
            this.refresh(),
            DisplayUtil.setEnabled(this.btnFight, !1, !0)
        },
        e.prototype.addEvent = function() {
            var t = this;
            EventManager.addEventListener(PetFightEvent.ALARM_CLICK, this.setbtnFight, this);
            for (var e = function(e) {
                i["pet_" + e].addEventListener(egret.TouchEvent.TOUCH_TAP,
                function() {
                    DisplayUtil.setEnabled(t.btnFight, !0, !1);
                    var i = t["pet_" + e].source.toString();
                    t.currentSelectID = Number(i[15]),
                    t["kuang_" + e].visible = !0;
                    for (var n = 1; 6 >= n; n++) n != e && (t["kuang_" + n].visible = !1)
                },
                i)
            },
            i = this, n = 1; 6 >= n; n++) e(n);
            ImageButtonUtil.add(this.btnAddItem,
            function() {
                PayManager.doPayFunc(function() {
                    var e = {};
                    e.type = "product_diamond",
                    e.ins = {
                        iconID: 1710269,
                        productID: 248255
                    },
                    e.caller = t,
                    e.callBack = function(e, i) {
                        KTool.buyProductByCallback(248255, i,
                        function() {
                            KTool.doExchange(9227, i,
                            function() {
                                t.refresh()
                            })
                        })
                    },
                    ModuleManager.showModuleByID(1, e)
                },
                t)
            },
            this),
            ImageButtonUtil.add(this.btnPet,
            function() {
                ModuleManager.showModule("petBag", ["petBag"])
            },
            this),
            ImageButtonUtil.add(this.btnCure,
            function() {
                PetManager.cureAll()
            },
            this),
            ImageButtonUtil.add(this.btnAdd,
            function() {
                PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(248256, 1,
                    function() {
                        KTool.doExchange(9229, 1,
                        function() {
                            t.refresh()
                        })
                    })
                },
                t)
            },
            this),
            ImageButtonUtil.add(this.btnStartFight,
            function() {
                t.leftTimes > 0 ? (t.animchouka.visible = !0, t.animchouka.animation.play("shuaxin", 1), egret.setTimeout(function() {
                    SocketConnection.sendByQueue(45676, [10, 0], t.refresh.bind(t))
                },
                t, 1e3)) : BubblerManager.getInstance().showText("您的剩余挑战次数不足")
            },
            this),
            ImageButtonUtil.add(this.btnFight,
            function() {
                switch (t.currentSelectID) {
                case 1:
                    FightManager.fightNoMapBoss("", 7637);
                    break;
                case 2:
                    FightManager.fightNoMapBoss("", 7638);
                    break;
                case 3:
                    FightManager.fightNoMapBoss("", 7639);
                    break;
                case 4:
                    FightManager.fightNoMapBoss("", 7640);
                    break;
                case 5:
                    FightManager.fightNoMapBoss("", 7641);
                    break;
                case 6:
                    FightManager.fightNoMapBoss("", 7642)
                }
            },
            this),
            ImageButtonUtil.add(this.btnSkip,
            function() {
                PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(248403, 1,
                    function() {
                        KTool.doExchange(9231, 1,
                        function() {
                            t.refresh()
                        })
                    })
                },
                t)
            },
            this)
        },
        e.prototype.setbtnFight = function() {
            if (FightManager.isWin) {
                DisplayUtil.setEnabled(this.btnFight, !1, !0);
                for (var t = 1; 6 >= t; t++) this["kuang_" + t].visible = !1;
                if (7 != this.currentLevelNum) this.currentCrystalNum < ItemManager.getNumByID(1710269) ? (Alarm.show("恭喜你获得魔王结晶！继续下1轮挑战吧"), this.animchouka.animation.play("shuaxin", 1)) : Alarm.show("魔王结晶不在它身上，继续寻找吧！");
                else if (this.currentCrystalNum < ItemManager.getNumByID(1710269)) {
                    Alarm.show("恭喜你获得本轮所有魔王结晶！");
                    for (var t = 1; 6 >= t; t++) this["pet_" + t].visible = !1
                } else Alarm.show("魔王结晶不在它身上，继续寻找吧！")
            } else DisplayUtil.setEnabled(this.btnFight, !0, !1)
        },
        e.prototype.reShow = function() {
            this.refresh()
        },
        e.prototype.refresh = function() {
            var t = this;
            ItemManager.updateItems([1710268, 1710269],
            function() {
                t.currentCrystalNum = ItemManager.getNumByID(1710269),
                t.crystal_number.text = t.currentCrystalNum.toString()
            }),
            KTool.getMultiValue([13921, 13922, 13923, 13924, 13925],
            function(e) {
                t.leftTimes = 3 - e[0],
                t.currentLevelNum = e[2],
                t.btnStartFight.visible = 3 == t.leftTimes;
                for (var i = e[3], n = SystemTimerManager.sysBJDate.getTime(), a = 1e3 * e[1], r = 1e3 * e[1] + 12e5, u = [], s = 0; 6 > s; s++) u[s] = e[4] >> 5 * s & 31;
                if (n >= r || 0 == a) {
                    t.btnStartFight.visible = !0,
                    t.btnFight.visible = !1,
                    t.btnSkip.visible = !1,
                    t.time_txt.visible = !1,
                    t.txtInfo.visible = !1;
                    for (var s = 1; 6 >= s; s++) t["pet_" + s].visible = !1,
                    t["kuang_" + s].visible = !1,
                    t["flag_win_" + s].visible = !1
                } else if (a >= n) {
                    if (t.btnStartFight.visible = !1, t.btnFight.visible = !0, t.btnSkip.visible = !1, t.txtInfo.text = "距离进攻结束:", t.time_txt.visible = !0, t.txtInfo.visible = !0, 0 != e[4]) for (var s = 1; 6 >= s; s++) {
                        var _ = KTool.getBit(i, s),
                        o = u.indexOf(s);
                        t["pet_" + s].source = "DevilZax_4_pet_" + u[s - 1] + "_png",
                        t["pet_" + s].visible = !0,
                        t["flag_win_" + (o + 1)].visible = !!_,
                        t["flag_win_" + (o + 1)].visible ? t["pet_" + (o + 1)].touchEnabled = !1 : t["pet_" + (o + 1)].touchEnabled = !0
                    } else for (var s = 1; 6 >= s; s++) t["pet_" + s].visible = !1;
                    egret.clearInterval(t.interval),
                    t.interval = egret.setInterval(function() {
                        var e = a - SystemTimerManager.sysBJDate.getTime(),
                        i = Math.floor(e / 1e3);
                        return 0 >= i ? (egret.clearInterval(t.interval), void t.refresh()) : void t.setTxtTime(i)
                    },
                    t, 300)
                } else if (n > a && r > n) {
                    t.btnStartFight.visible = !1,
                    t.btnFight.visible = !1,
                    t.btnSkip.visible = !0,
                    t.txtInfo.text = "距离下次进攻:",
                    t.time_txt.visible = !0,
                    t.txtInfo.visible = !0;
                    for (var s = 1; 6 >= s; s++) t["pet_" + s].visible = !1,
                    t["pet_" + s].touchEnabled = !1,
                    t["kuang_" + s].visible = !1,
                    t["flag_win_" + s].visible = !1;
                    egret.clearInterval(t.interval),
                    t.interval = egret.setInterval(function() {
                        var e = r - SystemTimerManager.sysBJDate.getTime(),
                        i = Math.floor(e / 1e3);
                        return 0 >= i ? (egret.clearInterval(t.interval), void t.refresh()) : void t.setTxtTime(i)
                    },
                    t, 300)
                }
                DisplayUtil.setEnabled(t.btnAdd, 0 == t.leftTimes, t.leftTimes > 0),
                8 != t.currentLevelNum && (t.level_txt.text = t.currentLevelNum + 1 + "/8"),
                t.times_txt.text = t.leftTimes + "/3"
            })
        },
        e.prototype.setTxtTime = function(t) {
            var e = Math.floor(t / 60),
            i = t % 60;
            this.time_txt.text = (10 > ~~e ? "0": "") + e.toString() + ":" + (10 > ~~i ? "0": "") + ~~i.toString()
        },
        e.prototype.destroy = function() {
            t.prototype.destroy.call(this),
            this.animchouka.dispose();
            for (var e = 1; 6 >= e; e++) this["pet_" + e].removeEventListener(egret.TouchEvent.TOUCH_TAP, arguments.callee, this);
            egret.clearInterval(this.interval),
            ImageButtonUtil.removeAll(this),
            EventManager.removeEventListener(PetFightEvent.ALARM_CLICK, this.setbtnFight, this)
        },
        e
    } (BaseModule);
    t.DevilZaxCrystal = e,
    __reflect(e.prototype, "devilZax.DevilZaxCrystal")
} (devilZax || (devilZax = {}));
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
devilZax; !
function(t) {
    var e = function(t) {
        function e(e) {
            var i = t.call(this) || this;
            return i.skinName = skins.Gift,
            i.addEvent(),
            i.setGift(e),
            i
        }
        return __extends(e, t),
        e.prototype.addEvent = function() {
            var t = this;
            ImageButtonUtil.add(this.btnClose_1,
            function() {},
            this),
            ImageButtonUtil.add(this.btnOpen,
            function() {
                SocketConnection.sendByQueue(45676, [8, 0]),
                EventManager.dispatchEventWith("GiftGetHunpo"),
                PopManager.hidePopView(t),
                DisplayUtil.setEnabled(t.btnOpen, !1, !0)
            },
            this)
        },
        e.prototype.setGift = function(t) {
            switch (t) {
            case 1:
                this.giftName.text = "普通礼包",
                this.gift_crystalNum.text = "x1-2",
                this.gift_seerdouNum.text = "x0-1000",
                this.gift_jinNum.text = "x0-200";
                break;
            case 2:
                this.giftName.text = "优质礼包",
                this.gift_crystalNum.text = "x3-5",
                this.gift_seerdouNum.text = "x1000-2000",
                this.gift_jinNum.text = "x200-400";
                break;
            case 3:
                this.giftName.text = "精美礼包",
                this.gift_crystalNum.text = "x5-7",
                this.gift_seerdouNum.text = "x2000-3000",
                this.gift_jinNum.text = "x400-600";
                break;
            case 4:
                this.giftName.text = "豪华礼包",
                this.gift_crystalNum.text = "x7-10",
                this.gift_seerdouNum.text = "x3000-4000",
                this.gift_jinNum.text = "x600-800"
            }
            for (var e = 1; 4 >= e; e++) e == t ? this["gift_" + e].visible = !0 : this["gift_" + e].visible = !1
        },
        e.prototype.destroy = function() {
            ImageButtonUtil.removeAll(this)
        },
        e
    } (eui.Component);
    t.DevilZaxGift = e,
    __reflect(e.prototype, "devilZax.DevilZaxGift")
} (devilZax || (devilZax = {}));
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
devilZax; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.skinName = Devilzax2Skin,
            e
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            var e = this;
            t.prototype.childrenCreated.call(this),
            this.initOldPveBtnClose(52, this, "",
            function() {
                ModuleManager.hideModule(e),
                ModuleManager.showModuleByID(101)
            },
            this),
            this.animleftLizi = DragonbonesUtil.createAnimate("zhakesi_ske_json", "zhakesi_tex_json", "zhakesi_tex_png", "zhakesi"),
            this.animrightLizi = DragonbonesUtil.createAnimate("zhakesi_ske_json", "zhakesi_tex_json", "zhakesi_tex_png", "zhakesi"),
            this.mainContent.addChild(this.animleftLizi),
            this.mainContent.addChild(this.animrightLizi),
            this.animleftLizi.x = 160,
            this.animleftLizi.y = this.animrightLizi.y = 500,
            this.animrightLizi.x = 460,
            this.animrightLizi.scaleX = -1,
            this.animleftLizi.animation.play("zhakesi", 0),
            egret.setTimeout(function() {
                e.animrightLizi.animation.play("zhakesi", 0)
            },
            this, 50),
            this.addEvent(),
            this.refresh()
        },
        e.prototype.reShow = function() {
            this.refresh()
        },
        e.prototype.addEvent = function() {
            var t = this;
            ImageButtonUtil.add(this.btnAdd1,
            function() {
                PayManager.doPayFunc(function() {
                    var e = {};
                    e.type = "product_diamond",
                    e.ins = {
                        iconID: 1710268,
                        productID: 248250
                    },
                    e.caller = t,
                    e.callBack = function(e, i) {
                        KTool.buyProductByCallback(248250, i,
                        function() {
                            KTool.doExchange(9226, i,
                            function() {
                                t.refresh()
                            })
                        })
                    },
                    ModuleManager.showModuleByID(1, e)
                },
                t)
            },
            this),
            ImageButtonUtil.add(this.btnAdd2,
            function() {
                PayManager.doPayFunc(function() {
                    var e = {};
                    e.type = "product_diamond",
                    e.ins = {
                        iconID: 1710269,
                        productID: 248255
                    },
                    e.caller = t,
                    e.callBack = function(e, i) {
                        KTool.buyProductByCallback(248255, i,
                        function() {
                            KTool.doExchange(9227, i,
                            function() {
                                t.refresh()
                            })
                        })
                    },
                    ModuleManager.showModuleByID(1, e)
                },
                t)
            },
            this),
            ImageButtonUtil.add(this.btnBuy_a,
            function() {
                PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(248249, 1,
                    function() {
                        SocketConnection.sendByQueue(45676, [2, 0],
                        function() {
                            t.refresh()
                        })
                    })
                },
                t)
            },
            this),
            ImageButtonUtil.add(this.btnBuy_b,
            function() {
                return PetManager.isDefaultPet(3194) ? void PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(248254, 1,
                    function() {
                        SocketConnection.sendByQueue(45676, [3, 0],
                        function() {
                            t.refresh()
                        })
                    })
                },
                t) : void BubblerManager.getInstance().showText("请将魔王•咤克斯设置为出战背包首发！")
            },
            this),
            ImageButtonUtil.add(this.btnBuy_c,
            function() {
                PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(248252, 1,
                    function() {
                        SocketConnection.sendByQueue(45676, [4, 1],
                        function() {
                            t.refresh()
                        })
                    })
                },
                t)
            },
            this),
            ImageButtonUtil.add(this.btnBuy_d,
            function() {
                PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(248253, 1,
                    function() {
                        SocketConnection.sendByQueue(45676, [4, 2],
                        function() {
                            t.refresh()
                        })
                    })
                },
                t)
            },
            this),
            ImageButtonUtil.add(this.btnBuy,
            function() {
                PetManager.isDefaultPet(3194) ? ModuleManager.showModule("devilZax", ["devil_zax"], null, "DevilZaxBuy", AppDoStyle.NULL) : BubblerManager.getInstance().showText("请将魔王•咤克斯设置为出战背包首发！")
            },
            this),
            ImageButtonUtil.add(this.btnInfo,
            function() {
                PetManager.showPetIntroduce(3194)
            },
            this),
            ImageButtonUtil.add(this.btnInfo_b,
            function() {
                t.ability.visible = !0
            },
            this),
            ImageButtonUtil.add(this.btnInfo_c,
            function() {
                AwardManager.ShowTmpPetSkinDiaolg(126)
            },
            this),
            ImageButtonUtil.add(this.btnInfo_d,
            function() {
                AwardManager.ShowTmpPetSkinDiaolg(2)
            },
            this),
            ImageButtonUtil.add(this.btnDuihuan_a,
            function() {
                t.currentSoulNum < 400 ? BubblerManager.getInstance().showText("你拥有的魔王精魄数量不足！") : SocketConnection.sendByQueue(45676, [1, 0], t.refresh.bind(t))
            },
            this),
            ImageButtonUtil.add(this.btnDuihuan_b,
            function() {
                PetManager.isDefaultPet(3194) ? t.currentCrystalNum < 200 ? BubblerManager.getInstance().showText("你拥有的魔王结晶数量不足！") : SocketConnection.sendByQueue(45676, [6, 0], t.refresh.bind(t)) : BubblerManager.getInstance().showText("请将魔王•咤克斯设置为出战背包首发！")
            },
            this),
            ImageButtonUtil.add(this.btnDuihuan_c,
            function() {
                1 == ItemManager.getNumByID(1710293) ? SocketConnection.sendByQueue(45676, [5, 1], t.refresh.bind(t)) : t.currentCrystalNum < 160 ? BubblerManager.getInstance().showText("你拥有的魔王结晶数量不足！") : SocketConnection.sendByQueue(45676, [5, 1], t.refresh.bind(t))
            },
            this),
            ImageButtonUtil.add(this.btnDuihuan_d,
            function() {
                1 == ItemManager.getNumByID(1710294) ? SocketConnection.sendByQueue(45676, [5, 2], t.refresh.bind(t)) : t.currentCrystalNum < 300 ? BubblerManager.getInstance().showText("你拥有的魔王结晶数量不足！") : SocketConnection.sendByQueue(45676, [5, 2], t.refresh.bind(t))
            },
            this),
            ImageButtonUtil.add(this.btnFix_1,
            function() {
                ModuleManager.hideModule(t),
                StatLogger.log("20210813版本系统功能", "魔王•咤克斯关卡", "进入魔王结晶面板"),
                ModuleManager.showModule("devilZax", ["devil_zax"], null, "DevilZaxCrystal", AppDoStyle.NULL)
            },
            this),
            ImageButtonUtil.add(this.btnFix_2,
            function() {
                ModuleManager.hideModule(t),
                StatLogger.log("20210813版本系统功能", "魔王•咤克斯关卡", "进入赛尔宇宙之战面板"),
                ModuleManager.showModule("devilZax", ["devil_zax"], null, "DevilZaxUniverse", AppDoStyle.NULL)
            },
            this),
            ImageButtonUtil.add(this.btnClose_2,
            function() {
                t.ability.visible = !1
            },
            this)
        },
        e.prototype.refresh = function() {
            var t = this;
            if (void 0 == PetStorage2015InfoManager.allInfo) return void PetStorage2015InfoManager.getTotalInfo(function() {
                t.refresh()
            });
            var e = PetStorage2015InfoManager.getInfoByID(3194).length > 0;
            ItemManager.updateItems([1710268, 1710269],
            function() {
                t.currentSoulNum = ItemManager.getNumByID(1710268),
                t.currentCrystalNum = ItemManager.getNumByID(1710269),
                t.soulNum.text = t.currentSoulNum.toString(),
                t.crystalNum.text = t.currentCrystalNum.toString()
            }),
            KTool.getMultiValue([102065],
            function(i) {
                var n, a = 1 == KTool.getBit(i[0], 2),
                r = 1 == KTool.getBit(i[0], 4),
                u = 1 == KTool.getBit(i[0], 3); (1 == KTool.getBit(i[0], 1) || e) && (n = !0),
                n ? (t.huode_a.visible = !0, t.btnBuy.visible = !0) : t.btnBuy.visible = !1,
                a && (t.huode_b.visible = !0),
                u && (t.huode_c.visible = !0),
                r && (t.huode_d.visible = !0),
                DisplayUtil.setEnabled(t.btnBuy_a, !n, n),
                DisplayUtil.setEnabled(t.btnBuy_b, !a, a),
                DisplayUtil.setEnabled(t.btnBuy_c, !u, u),
                DisplayUtil.setEnabled(t.btnBuy_d, !r, r),
                DisplayUtil.setEnabled(t.btnDuihuan_a, !n, n),
                DisplayUtil.setEnabled(t.btnDuihuan_b, !a, a),
                DisplayUtil.setEnabled(t.btnDuihuan_c, !u, u),
                DisplayUtil.setEnabled(t.btnDuihuan_d, !r, r)
            })
        },
        e.prototype.noOpen = function() {
            Alarm.show("暂未开放，敬请期待")
        },
        e.prototype.destroy = function() {
            t.prototype.destroy.call(this),
            this.animleftLizi.dispose(),
            this.animrightLizi.dispose(),
            ImageButtonUtil.removeAll(this)
        },
        e
    } (BaseModule);
    t.DevilZaxMain = e,
    __reflect(e.prototype, "devilZax.DevilZaxMain")
} (devilZax || (devilZax = {}));
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
devilZax; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t.skinName = Devilzax3Skin,
            t
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            var i = this;
            e.prototype.childrenCreated.call(this),
            this.initOldPveBtnClose(0, this, "DevilZax_3_txt_Title_png",
            function() {
                ModuleManager.hideModule(i),
                ModuleManager.showModule("devilZax", ["devil_zax"], null, "DevilZaxMain", AppDoStyle.NULL),
                egret.clearInterval(i.interval)
            },
            this),
            this.adaptLeftContent(this.grp_left),
            KTool.getMultiValue([102066, 201337],
            function(e) {
                0 != e[0] && (i.gift = new t.DevilZaxGift(e[0]), PopManager.showPopView(i.gift, .6), DisplayUtil.setEnabled(i.gift.btnOpen, !0, !1), i.gift.gift_hurtNum.text = e[1].toString())
            }),
            this.animleftLizi = DragonbonesUtil.createAnimate("zhakesi_ske_json", "zhakesi_tex_json", "zhakesi_tex_png", "zhakesi"),
            this.animrightLizi = DragonbonesUtil.createAnimate("zhakesi_ske_json", "zhakesi_tex_json", "zhakesi_tex_png", "zhakesi"),
            this.mainContent.addChild(this.animleftLizi),
            this.mainContent.addChild(this.animrightLizi),
            this.animleftLizi.x = 160,
            this.animleftLizi.y = this.animrightLizi.y = 500,
            this.animrightLizi.x = 460,
            this.animrightLizi.scaleX = -1,
            this.animleftLizi.animation.play("zhakesi", 0),
            egret.setTimeout(function() {
                i.animrightLizi.animation.play("zhakesi", 0)
            },
            this, 50),
            this.addEvent(),
            this.refresh()
        },
        i.prototype.addEvent = function() {
            var t = this;
            EventManager.addEventListener(PetFightEvent.ALARM_CLICK, this.showGift, this),
            EventManager.addEventListener("GiftGetHunpo",
            function() {
                t.refresh()
            },
            this, !1),
            ImageButtonUtil.add(this.btnAddItem,
            function() {
                PayManager.doPayFunc(function() {
                    var e = {};
                    e.type = "product_diamond",
                    e.ins = {
                        iconID: 1710268,
                        productID: 248250
                    },
                    e.caller = t,
                    e.callBack = function(e, i) {
                        KTool.buyProductByCallback(248250, i,
                        function() {
                            KTool.doExchange(9226, i,
                            function() {
                                t.refresh()
                            })
                        })
                    },
                    ModuleManager.showModuleByID(1, e)
                },
                t)
            },
            this),
            ImageButtonUtil.add(this.btnBack,
            function() {
                ModuleManager.hideModule(t),
                ModuleManager.showModule("devilZax", ["devil_zax"], null, "DevilZaxMain", AppDoStyle.NULL),
                egret.clearInterval(t.interval)
            },
            this),
            ImageButtonUtil.add(this.btnHelp,
            function() {},
            this),
            ImageButtonUtil.add(this.btnAdd,
            function() {
                PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(248251, 1,
                    function() {
                        KTool.doExchange(9228, 1,
                        function() {
                            t.refresh()
                        })
                    })
                },
                t)
            },
            this),
            ImageButtonUtil.add(this.btnPet,
            function() {
                ModuleManager.showModule("petBag", ["petBag"])
            },
            this),
            ImageButtonUtil.add(this.btnCure,
            function() {
                PetManager.cureAll()
            },
            this),
            ImageButtonUtil.add(this.btnFight,
            function() {
                t.leftTimes > 0 ? (MainManager.actorInfo.superNono ? FightManager.fightNoMapBoss("", 7636) : FightManager.fightNoMapBoss("", 7635), t.refresh()) : BubblerManager.getInstance().showText("你的剩余挑战次数不足")
            },
            this)
        },
        i.prototype.showGift = function() {
            var e = this;
            this.refresh().then(function() {
                e.gift = new t.DevilZaxGift(e.giftnum),
                PopManager.showPopView(e.gift, .6),
                DisplayUtil.setEnabled(e.gift.btnOpen, !0, !1),
                e.lastMaxhurtNum.text = e.lastMaxDamage.toString(),
                e.gift.gift_hurtNum.text = e.lastMaxDamage.toString()
            })
        },
        i.prototype.reShow = function() {
            this.refresh()
        },
        i.prototype.refresh = function() {
            var t = this;
            return new Promise(function(e, i) {
                ItemManager.updateItems([1710268],
                function() {
                    t.currentSoulNum = ItemManager.getNumByID(1710268),
                    t.devil_soul_num.text = t.currentSoulNum.toString()
                }),
                KTool.getMultiValue([13916, 13917, 13918, 13919, 13920, 102066, 201337],
                function(i) {
                    t.leftTimes = 5 - i[1],
                    t.giftnum = i[5],
                    t.lastMaxDamage = i[6];
                    var n = 1e3 * i[3];
                    if (0 != n) {
                        if (! (n - SystemTimerManager.sysBJDate.getTime() > 0)) return void SocketConnection.sendByQueue(45676, [9, 0], t.refresh.bind(t));
                        egret.clearInterval(t.interval),
                        t.interval = egret.setInterval(function() {
                            var e = n - SystemTimerManager.sysBJDate.getTime(),
                            i = Math.floor(e / 1e3);
                            return 0 >= i ? (egret.clearInterval(t.interval), void SocketConnection.sendByQueue(45676, [9, 0], t.refresh.bind(t))) : (t.setTxtTime(i), void t.hourGlass(i))
                        },
                        t, 300)
                    }
                    var a = 5 == t.leftTimes;
                    t.challenge_txt.text = t.leftTimes + "/5",
                    t.huifuzhong.visible = !a,
                    t.hourTime.visible = !a,
                    t.hourglass_on.visible = !a,
                    t.hourglass_down.visible = !a,
                    t.lastMaxhurtNum.text = t.lastMaxDamage.toString(),
                    DisplayUtil.setEnabled(t.btnAdd, 0 == t.leftTimes, t.leftTimes > 0),
                    t.changeTimeShow(),
                    e()
                })
            })
        },
        i.prototype.setTxtTime = function(t) {
            var e = Math.floor(t / 60),
            i = t % 60;
            this.hourTime.text = (10 > ~~e ? "0": "") + e.toString() + ":" + (10 > ~~i ? "0": "") + ~~i.toString()
        },
        i.prototype.getTime = function() {
            var t = SystemTimerManager.sysBJDate;
            return~~ ("" + t.getFullYear() + core.gameUtil.addLeadingZero(t.getMonth() + 1) + core.gameUtil.addLeadingZero(t.getDate()))
        },
        i.prototype.hourGlass = function(t) {
            5 == this.leftTimes ? (this.hourglass_on.visible = !1, this.hourglass_down.visible = !1, this.huifuzhong.visible = !1, this.hourTime.visible = !1) : (this.hourglass_on.height = Math.ceil(25 * (t / 600)), this.hourglass_down.height = 25 - Math.floor(25 * (t / 600)), this.hourglass_on.visible = !0, this.hourglass_down.visible = !0, this.huifuzhong.visible = !0, this.hourTime.visible = !0)
        },
        i.prototype.changeTimeShow = function() {
            for (var t = 0; t < this.leftTimes; t++) this["light_" + (5 - t)].visible = !0;
            for (var t = 0; t < 5 - this.leftTimes; t++) this["light_" + (t + 1)].visible = !1
        },
        i.prototype.destroy = function() {
            e.prototype.destroy.call(this),
            this.animleftLizi.dispose(),
            this.animrightLizi.dispose(),
            egret.clearInterval(this.interval),
            EventManager.removeEventListener(PetFightEvent.ALARM_CLICK, this.showGift, this),
            EventManager.removeEventListener("GiftGetHunpo", arguments.callee, this),
            ImageButtonUtil.removeAll(this)
        },
        i
    } (BaseModule);
    t.DevilZaxUniverse = e,
    __reflect(e.prototype, "devilZax.DevilZaxUniverse")
} (devilZax || (devilZax = {})),
window.skins = window.skins || {};
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
generateEUI.paths["resource/eui_skins/Devilzax2Skin.exml"] = window.Devilzax2Skin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["btnBuy", "btnInfo", "btnFix_1", "crystalNum", "btnAdd2", "devil_crystal", "btnFix_2", "soulNum", "btnAdd1", "devil_soul", "btnDuihuan_a", "btnBuy_a", "huode_a", "a", "btnDuihuan_b", "btnBuy_b", "btnInfo_b", "huode_b", "b", "btnDuihuan_c", "btnBuy_c", "btnInfo_c", "huode_c", "c", "btnDuihuan_d", "btnBuy_d", "btnInfo_d", "huode_d", "d", "mainContent", "btnClose_2", "ability"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this._Image1_i(), this.mainContent_i(), this.ability_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.bottom = 0,
        t.left = 0,
        t.right = 0,
        t.source = "DevilZax_4_allbg_jpg",
        t.top = 0,
        t.visible = !0,
        t
    },
    i.mainContent_i = function() {
        var t = new eui.Group;
        return this.mainContent = t,
        t.horizontalCenter = -22,
        t.visible = !0,
        t.y = 0,
        t.elementsContent = [this._Image2_i(), this._Image3_i(), this._Image4_i(), this.btnBuy_i(), this.btnInfo_i(), this.devil_crystal_i(), this.devil_soul_i(), this.a_i(), this.b_i(), this.c_i(), this.d_i()],
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 114,
        t.source = "DevilZax_2_petbg_png",
        t.width = 508,
        t.x = 62,
        t.y = 504,
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.height = 521,
        t.source = "DevilZax_2_pet_png",
        t.width = 555,
        t.x = 16,
        t.y = 60,
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.height = 260,
        t.source = "DevilZax_2_title_png",
        t.width = 385,
        t.x = 111,
        t.y = 312,
        t
    },
    i.btnBuy_i = function() {
        var t = new eui.Image;
        return this.btnBuy = t,
        t.height = 74,
        t.source = "DevilZax_2_btnBuy_0_png",
        t.visible = !1,
        t.width = 94,
        t.x = 134,
        t.y = 537,
        t
    },
    i.btnInfo_i = function() {
        var t = new eui.Image;
        return this.btnInfo = t,
        t.height = 74,
        t.source = "DevilZax_2_btnInfo_0_png",
        t.width = 94,
        t.x = 31,
        t.y = 537,
        t
    },
    i.devil_crystal_i = function() {
        var t = new eui.Group;
        return this.devil_crystal = t,
        t.x = 694,
        t.y = 561,
        t.elementsContent = [this.btnFix_1_i(), this._Image5_i(), this._Label1_i(), this.crystalNum_i(), this.btnAdd2_i()],
        t
    },
    i.btnFix_1_i = function() {
        var t = new eui.Image;
        return this.btnFix_1 = t,
        t.height = 40,
        t.source = "DevilZax_2_btnFix_png",
        t.width = 110,
        t.x = 277,
        t.y = 3,
        t
    },
    i._Image5_i = function() {
        var t = new eui.Image;
        return t.height = 40,
        t.source = "DevilZax_2_devil_crystal_png",
        t.width = 41,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "HuaKangXinZongYi",
        t.size = 22,
        t.text = "魔王结晶：",
        t.textColor = 12497663,
        t.x = 58,
        t.y = 13,
        t
    },
    i.crystalNum_i = function() {
        var t = new eui.Label;
        return this.crystalNum = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 22,
        t.text = "30000",
        t.textColor = 12497663,
        t.x = 166,
        t.y = 14,
        t
    },
    i.btnAdd2_i = function() {
        var t = new eui.Image;
        return this.btnAdd2 = t,
        t.height = 34,
        t.source = "DevilZax_3_btnAdd_png",
        t.width = 36,
        t.x = 230,
        t.y = 5,
        t
    },
    i.devil_soul_i = function() {
        var t = new eui.Group;
        return this.devil_soul = t,
        t.x = 694,
        t.y = 504,
        t.elementsContent = [this.btnFix_2_i(), this._Image6_i(), this._Label2_i(), this.soulNum_i(), this.btnAdd1_i()],
        t
    },
    i.btnFix_2_i = function() {
        var t = new eui.Image;
        return this.btnFix_2 = t,
        t.height = 40,
        t.source = "DevilZax_2_btnFix_png",
        t.width = 110,
        t.x = 277,
        t.y = 2,
        t
    },
    i._Image6_i = function() {
        var t = new eui.Image;
        return t.height = 40,
        t.source = "DevilZax_2_devil_soul_png",
        t.width = 49,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Label2_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "HuaKangXinZongYi",
        t.size = 22,
        t.text = "魔王魂魄：",
        t.textColor = 12497663,
        t.x = 58,
        t.y = 14,
        t
    },
    i.soulNum_i = function() {
        var t = new eui.Label;
        return this.soulNum = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 22,
        t.text = "30000",
        t.textColor = 12497663,
        t.x = 166,
        t.y = 14,
        t
    },
    i.btnAdd1_i = function() {
        var t = new eui.Image;
        return this.btnAdd1 = t,
        t.height = 34,
        t.source = "DevilZax_3_btnAdd_png",
        t.width = 36,
        t.x = 230,
        t.y = 5,
        t
    },
    i.a_i = function() {
        var t = new eui.Group;
        return this.a = t,
        t.x = 597,
        t.y = 78,
        t.elementsContent = [this._Image7_i(), this.btnDuihuan_a_i(), this.btnBuy_a_i(), this.huode_a_i()],
        t
    },
    i._Image7_i = function() {
        var t = new eui.Image;
        return t.height = 90,
        t.source = "DevilZax_2_a_png",
        t.width = 495,
        t.x = 0,
        t.y = 0,
        t
    },
    i.btnDuihuan_a_i = function() {
        var t = new eui.Image;
        return this.btnDuihuan_a = t,
        t.height = 59,
        t.source = "DevilZax_2_btnDuihuan_a_png",
        t.width = 220,
        t.x = 272,
        t.y = 29,
        t
    },
    i.btnBuy_a_i = function() {
        var t = new eui.Image;
        return this.btnBuy_a = t,
        t.height = 59,
        t.source = "DevilZax_2_btnBuy_png",
        t.width = 114,
        t.x = 172,
        t.y = 29,
        t
    },
    i.huode_a_i = function() {
        var t = new eui.Image;
        return this.huode_a = t,
        t.source = "DevilZax_2_huode_png",
        t.visible = !1,
        t.y = 2,
        t
    },
    i.b_i = function() {
        var t = new eui.Group;
        return this.b = t,
        t.x = 597,
        t.y = 178,
        t.elementsContent = [this._Image8_i(), this.btnDuihuan_b_i(), this.btnBuy_b_i(), this.btnInfo_b_i(), this.huode_b_i()],
        t
    },
    i._Image8_i = function() {
        var t = new eui.Image;
        return t.height = 90,
        t.source = "DevilZax_2_b_png",
        t.width = 495,
        t.x = 0,
        t.y = 0,
        t
    },
    i.btnDuihuan_b_i = function() {
        var t = new eui.Image;
        return this.btnDuihuan_b = t,
        t.height = 59,
        t.source = "DevilZax_2_btnDuihuan_b_png",
        t.width = 220,
        t.x = 272,
        t.y = 29,
        t
    },
    i.btnBuy_b_i = function() {
        var t = new eui.Image;
        return this.btnBuy_b = t,
        t.height = 59,
        t.source = "DevilZax_2_btnBuy_png",
        t.width = 114,
        t.x = 172,
        t.y = 29,
        t
    },
    i.btnInfo_b_i = function() {
        var t = new eui.Image;
        return this.btnInfo_b = t,
        t.height = 26,
        t.source = "DevilZax_2_btnInfo_png",
        t.width = 37,
        t.x = 30,
        t.y = 60,
        t
    },
    i.huode_b_i = function() {
        var t = new eui.Image;
        return this.huode_b = t,
        t.source = "DevilZax_2_huode_png",
        t.visible = !1,
        t
    },
    i.c_i = function() {
        var t = new eui.Group;
        return this.c = t,
        t.x = 597,
        t.y = 280,
        t.elementsContent = [this._Image9_i(), this.btnDuihuan_c_i(), this.btnBuy_c_i(), this.btnInfo_c_i(), this.huode_c_i()],
        t
    },
    i._Image9_i = function() {
        var t = new eui.Image;
        return t.height = 90,
        t.source = "DevilZax_2_c_png",
        t.width = 495,
        t.x = 0,
        t.y = 0,
        t
    },
    i.btnDuihuan_c_i = function() {
        var t = new eui.Image;
        return this.btnDuihuan_c = t,
        t.height = 59,
        t.source = "DevilZax_2_btnDuihuan_c_png",
        t.width = 220,
        t.x = 272,
        t.y = 29,
        t
    },
    i.btnBuy_c_i = function() {
        var t = new eui.Image;
        return this.btnBuy_c = t,
        t.height = 59,
        t.source = "DevilZax_2_btnBuy_png",
        t.width = 114,
        t.x = 172,
        t.y = 29,
        t
    },
    i.btnInfo_c_i = function() {
        var t = new eui.Image;
        return this.btnInfo_c = t,
        t.height = 26,
        t.source = "DevilZax_2_btnInfo_png",
        t.width = 37,
        t.x = 30,
        t.y = 60,
        t
    },
    i.huode_c_i = function() {
        var t = new eui.Image;
        return this.huode_c = t,
        t.source = "DevilZax_2_huode_png",
        t.visible = !1,
        t
    },
    i.d_i = function() {
        var t = new eui.Group;
        return this.d = t,
        t.x = 597,
        t.y = 382,
        t.elementsContent = [this._Image10_i(), this.btnDuihuan_d_i(), this.btnBuy_d_i(), this.btnInfo_d_i(), this.huode_d_i()],
        t
    },
    i._Image10_i = function() {
        var t = new eui.Image;
        return t.height = 90,
        t.source = "DevilZax_2_d_png",
        t.width = 495,
        t.x = 0,
        t.y = 0,
        t
    },
    i.btnDuihuan_d_i = function() {
        var t = new eui.Image;
        return this.btnDuihuan_d = t,
        t.height = 59,
        t.source = "DevilZax_2_btnDuihuan_d_png",
        t.width = 220,
        t.x = 272,
        t.y = 29,
        t
    },
    i.btnBuy_d_i = function() {
        var t = new eui.Image;
        return this.btnBuy_d = t,
        t.height = 59,
        t.source = "DevilZax_2_btnBuy_png",
        t.width = 114,
        t.x = 172,
        t.y = 29,
        t
    },
    i.btnInfo_d_i = function() {
        var t = new eui.Image;
        return this.btnInfo_d = t,
        t.height = 26,
        t.source = "DevilZax_2_btnInfo_png",
        t.width = 37,
        t.x = 30,
        t.y = 60,
        t
    },
    i.huode_d_i = function() {
        var t = new eui.Image;
        return this.huode_d = t,
        t.source = "DevilZax_2_huode_png",
        t.visible = !1,
        t
    },
    i.ability_i = function() {
        var t = new eui.Group;
        return this.ability = t,
        t.visible = !1,
        t.x = 192,
        t.y = 114,
        t.elementsContent = [this._Image11_i(), this._Image12_i(), this._Image13_i(), this._Label3_i(), this._Label4_i(), this._Label5_i(), this._Label6_i(), this._Label7_i(), this._Label8_i(), this._Label9_i(), this._Image14_i(), this._Image15_i(), this._Image16_i(), this._Image17_i(), this._Image18_i(), this._Image19_i(), this.btnClose_2_i()],
        t
    },
    i._Image11_i = function() {
        var t = new eui.Image;
        return t.height = 456,
        t.source = "DevilZax_2_bg_jpg",
        t.width = 784,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Image12_i = function() {
        var t = new eui.Image;
        return t.height = 375,
        t.source = "DevilZax_2_line_png",
        t.width = 2,
        t.x = 528,
        t.y = 42,
        t
    },
    i._Image13_i = function() {
        var t = new eui.Image;
        return t.height = 375,
        t.source = "DevilZax_2_line_png",
        t.width = 2,
        t.x = 248,
        t.y = 42,
        t
    },
    i._Label3_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "HuaKangXinZongYi",
        t.size = 26,
        t.text = "能力提升",
        t.textColor = 16773461,
        t.x = 339,
        t.y = 22,
        t
    },
    i._Label4_i = function() {
        var t = new eui.Label;
        return t.lineSpacing = 10,
        t.size = 18,
        t.text = "体力 7/73  \n攻击 3/32\n防御 2/25\n特防 2/25\n速度 2/24           ",
        t.textColor = 16777215,
        t.x = 90,
        t.y = 220,
        t
    },
    i._Label5_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "HuaKangXinZongYi",
        t.lineSpacing = 6,
        t.size = 20,
        t.text = "魔王•咤克斯专属\n全能刻印",
        t.textAlign = "center",
        t.textColor = 16773461,
        t.x = 50,
        t.y = 164,
        t
    },
    i._Label6_i = function() {
        var t = new eui.Label;
        return t.lineSpacing = 4,
        t.size = 18,
        t.text = "必中；消除对手回合类效\n果，消除成功则下次攻击\n附加300点固定伤害；未击\n败对手则下1次受到的伤害\n减少50%",
        t.textColor = 16777215,
        t.x = 284,
        t.y = 216,
        t
    },
    i._Label7_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "HuaKangXinZongYi",
        t.size = 20,
        t.text = "第五技能：违•永恒之寂",
        t.textColor = 16773461,
        t.x = 280,
        t.y = 164,
        t
    },
    i._Label8_i = function() {
        var t = new eui.Label;
        return t.lineSpacing = 4,
        t.size = 18,
        t.text = "自身满体力时，受到攻击\n则使对手全属性-1，同时\n自身下回合先制+1；攻击\n技能命中对手时有15%的\n概率秒杀对手，每击败一\n只精灵，概率提升2%（\nBOSS无效）",
        t.textColor = 16777215,
        t.x = 551,
        t.y = 216,
        t
    },
    i._Label9_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "HuaKangXinZongYi",
        t.lineSpacing = 6,
        t.size = 20,
        t.text = "魔王•咤克斯专属特性：\n咤",
        t.textAlign = "center",
        t.textColor = 16773461,
        t.x = 541,
        t.y = 164,
        t
    },
    i._Image14_i = function() {
        var t = new eui.Image;
        return t.height = 86,
        t.source = "DevilZax_2_iconkuang_png",
        t.width = 75,
        t.x = 352,
        t.y = 69,
        t
    },
    i._Image15_i = function() {
        var t = new eui.Image;
        return t.height = 60,
        t.source = "DevilZax_2_icon_1_kb_2_png",
        t.width = 57,
        t.x = 361,
        t.y = 82,
        t
    },
    i._Image16_i = function() {
        var t = new eui.Image;
        return t.height = 86,
        t.source = "DevilZax_2_iconkuang_png",
        t.visible = !0,
        t.width = 75,
        t.x = 610,
        t.y = 69,
        t
    },
    i._Image17_i = function() {
        var t = new eui.Image;
        return t.height = 50,
        t.source = "DevilZax_2_icon_texing_png",
        t.width = 44,
        t.x = 625,
        t.y = 87,
        t
    },
    i._Image18_i = function() {
        var t = new eui.Image;
        return t.height = 86,
        t.source = "DevilZax_2_iconkuang_png",
        t.width = 75,
        t.x = 92,
        t.y = 69,
        t
    },
    i._Image19_i = function() {
        var t = new eui.Image;
        return t.height = 56,
        t.source = "DevilZax_2_41300_png",
        t.width = 59,
        t.x = 100,
        t.y = 80,
        t
    },
    i.btnClose_2_i = function() {
        var t = new eui.Image;
        return this.btnClose_2 = t,
        t.height = 44,
        t.source = "DevilZax_2_btnClose_png",
        t.width = 44,
        t.x = 728,
        t.y = 11,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/Devilzax3Skin.exml"] = window.Devilzax3Skin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["btnFight", "hourglass_on", "hourglass_down", "hourglass_2", "huifuzhong", "hourTime", "hourglass", "challenge_txt", "btnAdd", "dark_1", "dark_2", "dark_3", "dark_4", "dark_5", "light_1", "light_2", "light_3", "light_4", "light_5", "challenge", "lastMaxhurtNum", "right", "mainContent", "btnPet", "btnCure", "grp_left", "gift_hurtNum", "btnOpen", "btnClose_1", "gift_title", "gift_4", "gift_3", "gift_2", "gift_1", "giftName", "gift_crystalNum", "gift_seerdouNum", "gift_jinNum", "Gift", "btnBack", "top", "btnHelp", "devil_soul_num", "btnAddItem", "hunpo"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this._Image1_i(), this.mainContent_i(), this.grp_left_i(), this.Gift_i(), this.top_i(), this.btnHelp_i(), this.hunpo_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.bottom = 0,
        t.left = 0,
        t.right = 0,
        t.source = "DevilZax_3_bg_jpg",
        t.top = 0,
        t.visible = !0,
        t
    },
    i.mainContent_i = function() {
        var t = new eui.Group;
        return this.mainContent = t,
        t.horizontalCenter = -4.5,
        t.visible = !0,
        t.y = 30,
        t.elementsContent = [this._Image2_i(), this._Image3_i(), this.btnFight_i(), this._Image4_i(), this._Image5_i(), this.challenge_i(), this.right_i()],
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 115,
        t.source = "DevilZax_3_petbg_png",
        t.width = 508,
        t.x = 56,
        t.y = 474,
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.height = 554,
        t.source = "DevilZax_3_pet_png",
        t.width = 562,
        t.x = 0,
        t.y = 0,
        t
    },
    i.btnFight_i = function() {
        var t = new eui.Image;
        return this.btnFight = t,
        t.height = 73,
        t.source = "DevilZax_3_btnFight_png",
        t.width = 241,
        t.x = 856,
        t.y = 509,
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.height = 63,
        t.source = "DevilZax_3_tag_png",
        t.width = 93,
        t.x = 815,
        t.y = 474,
        t
    },
    i._Image5_i = function() {
        var t = new eui.Image;
        return t.height = 68,
        t.source = "DevilZax_3_info_png",
        t.width = 580,
        t.x = 516,
        t.y = 33,
        t
    },
    i.challenge_i = function() {
        var t = new eui.Group;
        return this.challenge = t,
        t.visible = !0,
        t.x = 465,
        t.y = 479,
        t.elementsContent = [this.hourglass_i(), this._Image7_i(), this.challenge_txt_i(), this.btnAdd_i(), this.dark_1_i(), this.dark_2_i(), this.dark_3_i(), this.dark_4_i(), this.dark_5_i(), this.light_1_i(), this.light_2_i(), this.light_3_i(), this.light_4_i(), this.light_5_i()],
        t
    },
    i.hourglass_i = function() {
        var t = new eui.Group;
        return this.hourglass = t,
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image6_i(), this.hourglass_on_i(), this.hourglass_down_i(), this.hourglass_2_i(), this.huifuzhong_i(), this.hourTime_i()],
        t
    },
    i._Image6_i = function() {
        var t = new eui.Image;
        return t.height = 96,
        t.source = "DevilZax_3_hourglassbg_png",
        t.visible = !0,
        t.width = 83,
        t.x = 0,
        t.y = 0,
        t
    },
    i.hourglass_on_i = function() {
        var t = new eui.Image;
        return this.hourglass_on = t,
        t.bottom = 66,
        t.height = 25,
        t.source = "DevilZax_3_hourglass_in_png",
        t.visible = !1,
        t.width = 31,
        t.x = 26,
        t
    },
    i.hourglass_down_i = function() {
        var t = new eui.Image;
        return this.hourglass_down = t,
        t.bottom = 44,
        t.height = 25,
        t.source = "DevilZax_3_hourglass_in_png",
        t.visible = !1,
        t.width = 31,
        t.x = 26,
        t.y = 24,
        t
    },
    i.hourglass_2_i = function() {
        var t = new eui.Image;
        return this.hourglass_2 = t,
        t.height = 58,
        t.source = "DevilZax_3_hourglass_2_png",
        t.visible = !0,
        t.width = 47,
        t.x = 18,
        t.y = 7,
        t
    },
    i.huifuzhong_i = function() {
        var t = new eui.Label;
        return this.huifuzhong = t,
        t.size = 18,
        t.text = "恢复中",
        t.textColor = 16777215,
        t.visible = !0,
        t.x = 15,
        t.y = 60,
        t
    },
    i.hourTime_i = function() {
        var t = new eui.Label;
        return this.hourTime = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 18,
        t.text = "00：00",
        t.textColor = 16777215,
        t.visible = !0,
        t.x = 15,
        t.y = 86,
        t
    },
    i._Image7_i = function() {
        var t = new eui.Image;
        return t.height = 33,
        t.source = "DevilZax_3_tzcs_png",
        t.width = 104,
        t.x = 91,
        t.y = 27,
        t
    },
    i.challenge_txt_i = function() {
        var t = new eui.Label;
        return this.challenge_txt = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 20,
        t.text = "4/5",
        t.textColor = 16777215,
        t.x = 230,
        t.y = 37,
        t
    },
    i.btnAdd_i = function() {
        var t = new eui.Image;
        return this.btnAdd = t,
        t.height = 34,
        t.source = "DevilZax_3_btnAdd_png",
        t.width = 36,
        t.x = 275,
        t.y = 22,
        t
    },
    i.dark_1_i = function() {
        var t = new eui.Image;
        return this.dark_1 = t,
        t.height = 13,
        t.source = "DevilZax_3_dark_png",
        t.width = 42,
        t.x = 97,
        t.y = 70,
        t
    },
    i.dark_2_i = function() {
        var t = new eui.Image;
        return this.dark_2 = t,
        t.height = 13,
        t.source = "DevilZax_3_dark_png",
        t.width = 42,
        t.x = 140,
        t.y = 70,
        t
    },
    i.dark_3_i = function() {
        var t = new eui.Image;
        return this.dark_3 = t,
        t.height = 13,
        t.source = "DevilZax_3_dark_png",
        t.width = 42,
        t.x = 183,
        t.y = 70,
        t
    },
    i.dark_4_i = function() {
        var t = new eui.Image;
        return this.dark_4 = t,
        t.height = 13,
        t.source = "DevilZax_3_dark_png",
        t.width = 42,
        t.x = 226,
        t.y = 70,
        t
    },
    i.dark_5_i = function() {
        var t = new eui.Image;
        return this.dark_5 = t,
        t.height = 13,
        t.source = "DevilZax_3_dark_png",
        t.width = 42,
        t.x = 269,
        t.y = 70,
        t
    },
    i.light_1_i = function() {
        var t = new eui.Image;
        return this.light_1 = t,
        t.height = 37,
        t.source = "DevilZax_3_light_png",
        t.visible = !1,
        t.width = 64,
        t.x = 86,
        t.y = 58,
        t
    },
    i.light_2_i = function() {
        var t = new eui.Image;
        return this.light_2 = t,
        t.height = 37,
        t.source = "DevilZax_3_light_png",
        t.visible = !1,
        t.width = 64,
        t.x = 129,
        t.y = 58,
        t
    },
    i.light_3_i = function() {
        var t = new eui.Image;
        return this.light_3 = t,
        t.height = 37,
        t.source = "DevilZax_3_light_png",
        t.visible = !1,
        t.width = 64,
        t.x = 172,
        t.y = 58,
        t
    },
    i.light_4_i = function() {
        var t = new eui.Image;
        return this.light_4 = t,
        t.height = 37,
        t.source = "DevilZax_3_light_png",
        t.visible = !1,
        t.width = 64,
        t.x = 215,
        t.y = 58,
        t
    },
    i.light_5_i = function() {
        var t = new eui.Image;
        return this.light_5 = t,
        t.height = 37,
        t.source = "DevilZax_3_light_png",
        t.visible = !1,
        t.width = 64,
        t.x = 258,
        t.y = 58,
        t
    },
    i.right_i = function() {
        var t = new eui.Group;
        return this.right = t,
        t.visible = !0,
        t.x = 443,
        t.y = 113,
        t.elementsContent = [this._Image8_i(), this._Image9_i(), this._Image10_i(), this._Image11_i(), this._Image12_i(), this._Image13_i(), this._Image14_i(), this._Image15_i(), this.lastMaxhurtNum_i()],
        t
    },
    i._Image8_i = function() {
        var t = new eui.Image;
        return t.height = 302,
        t.source = "DevilZax_3_rightbg_png",
        t.width = 684,
        t.x = 0,
        t.y = 43,
        t
    },
    i._Image9_i = function() {
        var t = new eui.Image;
        return t.height = 2,
        t.source = "DevilZax_3_line_png",
        t.width = 683,
        t.x = 0,
        t.y = 43,
        t
    },
    i._Image10_i = function() {
        var t = new eui.Image;
        return t.height = 67,
        t.source = "DevilZax_3_a_png",
        t.width = 525,
        t.x = 118,
        t.y = 44,
        t
    },
    i._Image11_i = function() {
        var t = new eui.Image;
        return t.height = 58,
        t.source = "DevilZax_3_b_png",
        t.width = 577,
        t.x = 88,
        t.y = 119,
        t
    },
    i._Image12_i = function() {
        var t = new eui.Image;
        return t.height = 58,
        t.source = "DevilZax_3_c_png",
        t.width = 578,
        t.x = 87,
        t.y = 193,
        t
    },
    i._Image13_i = function() {
        var t = new eui.Image;
        return t.height = 58,
        t.source = "DevilZax_3_d_png",
        t.width = 595,
        t.x = 70,
        t.y = 276,
        t
    },
    i._Image14_i = function() {
        var t = new eui.Image;
        return t.source = "DevilZax_3_txt_danci_png",
        t.x = 68,
        t.y = 1,
        t
    },
    i._Image15_i = function() {
        var t = new eui.Image;
        return t.source = "DevilZax_3_txt_shangci_png",
        t.x = 421,
        t.y = -1,
        t
    },
    i.lastMaxhurtNum_i = function() {
        var t = new eui.Label;
        return this.lastMaxhurtNum = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 22,
        t.text = "1000",
        t.textColor = 16773461,
        t.x = 590,
        t.y = 11,
        t
    },
    i.grp_left_i = function() {
        var t = new eui.Group;
        return this.grp_left = t,
        t.verticalCenter = -29.5,
        t.x = 35,
        t.elementsContent = [this.btnPet_i(), this.btnCure_i()],
        t
    },
    i.btnPet_i = function() {
        var t = new eui.Image;
        return this.btnPet = t,
        t.height = 60,
        t.source = "DevilZax_3_btnPet_png",
        t.width = 60,
        t.x = 0,
        t.y = 0,
        t
    },
    i.btnCure_i = function() {
        var t = new eui.Image;
        return this.btnCure = t,
        t.height = 60,
        t.source = "DevilZax_3_btnCure_png",
        t.width = 60,
        t.x = 0,
        t.y = 75,
        t
    },
    i.Gift_i = function() {
        var t = new eui.Group;
        return this.Gift = t,
        t.horizontalCenter = 8,
        t.visible = !1,
        t.y = 124,
        t.elementsContent = [this._Image16_i(), this._Image17_i(), this._Label1_i(), this._Image18_i(), this._Label2_i(), this.gift_hurtNum_i(), this.btnOpen_i(), this.btnClose_1_i(), this.gift_title_i(), this.gift_4_i(), this.gift_3_i(), this.gift_2_i(), this.gift_1_i(), this.giftName_i(), this.gift_crystalNum_i(), this._Image19_i(), this.gift_seerdouNum_i(), this._Image20_i(), this.gift_jinNum_i(), this._Image21_i()],
        t
    },
    i._Image16_i = function() {
        var t = new eui.Image;
        return t.height = 348,
        t.source = "DevilZax_3_libaobg_png",
        t.width = 600,
        t.x = 0,
        t.y = 22,
        t
    },
    i._Image17_i = function() {
        var t = new eui.Image;
        return t.height = 113,
        t.source = "DevilZax_3_txtInfo_png",
        t.width = 370,
        t.x = 203,
        t.y = 93,
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.size = 18.0193567308632,
        t.text = "为了表彰你进攻魔王咤克斯做出的贡献，船\n长罗杰赠送丰厚礼包作为奖励！希望你再接\n再厉！贡献越大，奖励越丰厚哦！",
        t.textColor = 15332094,
        t.x = 218,
        t.y = 105,
        t
    },
    i._Image18_i = function() {
        var t = new eui.Image;
        return t.height = 28,
        t.source = "DevilZax_3_txtbg_png",
        t.width = 369,
        t.x = 204,
        t.y = 243,
        t
    },
    i._Label2_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "HuaKangXinZongYi",
        t.size = 20.0215074787369,
        t.text = "单次最高伤害：",
        t.textColor = 16182900,
        t.visible = !0,
        t.x = 248,
        t.y = 247,
        t
    },
    i.gift_hurtNum_i = function() {
        var t = new eui.Label;
        return this.gift_hurtNum = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 20.0215074787369,
        t.text = "828282526",
        t.textColor = 16182900,
        t.x = 401,
        t.y = 251,
        t
    },
    i.btnOpen_i = function() {
        var t = new eui.Image;
        return this.btnOpen = t,
        t.height = 40,
        t.source = "DevilZax_3_btnOpen_png",
        t.width = 120,
        t.x = 243,
        t.y = 297,
        t
    },
    i.btnClose_1_i = function() {
        var t = new eui.Image;
        return this.btnClose_1 = t,
        t.height = 56,
        t.source = "DevilZax_3_btnClose_1_png",
        t.visible = !0,
        t.width = 54,
        t.x = 562,
        t.y = 0,
        t
    },
    i.gift_title_i = function() {
        var t = new eui.Label;
        return this.gift_title = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 26.027959722358,
        t.text = "船长礼包",
        t.textColor = 16777215,
        t.x = 252,
        t.y = 51,
        t
    },
    i.gift_4_i = function() {
        var t = new eui.Image;
        return this.gift_4 = t,
        t.height = 138,
        t.source = "DevilZax_3_gift_a_png",
        t.visible = !1,
        t.width = 146,
        t.x = 35,
        t.y = 71,
        t
    },
    i.gift_3_i = function() {
        var t = new eui.Image;
        return this.gift_3 = t,
        t.height = 138,
        t.source = "DevilZax_3_gift_b_png",
        t.visible = !1,
        t.width = 146,
        t.x = 35,
        t.y = 71,
        t
    },
    i.gift_2_i = function() {
        var t = new eui.Image;
        return this.gift_2 = t,
        t.height = 138,
        t.source = "DevilZax_3_gift_c_png",
        t.visible = !1,
        t.width = 107,
        t.x = 56,
        t.y = 71,
        t
    },
    i.gift_1_i = function() {
        var t = new eui.Image;
        return this.gift_1 = t,
        t.height = 135,
        t.source = "DevilZax_3_gift_d_png",
        t.visible = !1,
        t.width = 107,
        t.x = 56,
        t.y = 72,
        t
    },
    i.giftName_i = function() {
        var t = new eui.Label;
        return this.giftName = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 20,
        t.text = "豪华礼包",
        t.textColor = 4470636,
        t.x = 67,
        t.y = 208,
        t
    },
    i.gift_crystalNum_i = function() {
        var t = new eui.Label;
        return this.gift_crystalNum = t,
        t.size = 20,
        t.text = "x3-5",
        t.textColor = 4405099,
        t.x = 70,
        t.y = 242,
        t
    },
    i._Image19_i = function() {
        var t = new eui.Image;
        return t.height = 24,
        t.source = "DevilZax_3_devil_soul_png",
        t.width = 30,
        t.x = 39,
        t.y = 235,
        t
    },
    i.gift_seerdouNum_i = function() {
        var t = new eui.Label;
        return this.gift_seerdouNum = t,
        t.size = 20,
        t.text = "x1000-2000",
        t.textColor = 4405099,
        t.x = 70,
        t.y = 267,
        t
    },
    i._Image20_i = function() {
        var t = new eui.Image;
        return t.height = 17,
        t.source = "DevilZax_3_1_png",
        t.width = 29,
        t.x = 39,
        t.y = 264,
        t
    },
    i.gift_jinNum_i = function() {
        var t = new eui.Label;
        return this.gift_jinNum = t,
        t.size = 20,
        t.text = "x0-200",
        t.textColor = 4405099,
        t.x = 70,
        t.y = 291,
        t
    },
    i._Image21_i = function() {
        var t = new eui.Image;
        return t.height = 25,
        t.source = "DevilZax_3_1400352_png",
        t.width = 23,
        t.x = 42,
        t.y = 284,
        t
    },
    i.top_i = function() {
        var t = new eui.Group;
        return this.top = t,
        t.visible = !1,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image22_i(), this.btnBack_i(), this._Image23_i()],
        t
    },
    i._Image22_i = function() {
        var t = new eui.Image;
        return t.height = 50,
        t.source = "DevilZax_3_up_bg_png",
        t.width = 145,
        t.x = 0,
        t.y = 0,
        t
    },
    i.btnBack_i = function() {
        var t = new eui.Image;
        return this.btnBack = t,
        t.height = 38,
        t.source = "DevilZax_3_btnBack_png",
        t.width = 32,
        t.x = 31,
        t.y = 5,
        t
    },
    i._Image23_i = function() {
        var t = new eui.Image;
        return t.source = "DevilZax_3_txt_Title_png",
        t.x = 112,
        t.y = 7,
        t
    },
    i.btnHelp_i = function() {
        var t = new eui.Image;
        return this.btnHelp = t,
        t.height = 29,
        t.source = "common_help_icon_1_png",
        t.visible = !1,
        t.width = 25,
        t.x = 319,
        t.y = 12,
        t
    },
    i.hunpo_i = function() {
        var t = new eui.Group;
        return this.hunpo = t,
        t.right = 40,
        t.y = 0,
        t.elementsContent = [this._Image24_i(), this._Label3_i(), this._Image25_i(), this.devil_soul_num_i(), this.btnAddItem_i()],
        t
    },
    i._Image24_i = function() {
        var t = new eui.Image;
        return t.height = 32,
        t.source = "DevilZax_3_numbg_png",
        t.width = 242,
        t.x = 0,
        t.y = 2,
        t
    },
    i._Label3_i = function() {
        var t = new eui.Label;
        return t.size = 18,
        t.text = "魔王魂魄：",
        t.textColor = 16777215,
        t.x = 74,
        t.y = 10,
        t
    },
    i._Image25_i = function() {
        var t = new eui.Image;
        return t.height = 33,
        t.source = "DevilZax_2_devil_soul_png",
        t.width = 40,
        t.x = 28,
        t.y = 0,
        t
    },
    i.devil_soul_num_i = function() {
        var t = new eui.Label;
        return this.devil_soul_num = t,
        t.size = 18,
        t.text = "20000",
        t.textColor = 16777215,
        t.x = 165,
        t.y = 10,
        t
    },
    i.btnAddItem_i = function() {
        var t = new eui.Image;
        return this.btnAddItem = t,
        t.height = 34,
        t.source = "DevilZax_3_btnAdd_png",
        t.width = 36,
        t.x = 230,
        t.y = 0,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/Devilzax4Skin.exml"] = window.Devilzax4Skin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["pet_1", "flag_win_1", "kuang_1", "a1", "pet_2", "flag_win_2", "kuang_2", "a2", "pet_3", "flag_win_3", "kuang_3", "a3", "pet_4", "flag_win_4", "kuang_4", "a4", "pet_5", "flag_win_5", "kuang_5", "a5", "pet_6", "flag_win_6", "kuang_6", "a6", "crystal_center", "btnPet", "btnCure", "txtInfo", "time_txt", "btnStartFight", "btnFight", "btnSkip", "level_txt", "crystal_number", "btnAddItem", "mowang", "btnAdd", "times_txt", "battleCount"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this._Image1_i(), this._Group1_i(), this._Group2_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.percentHeight = 100,
        t.source = "DevilZax_4_allbg_jpg",
        t.visible = !0,
        t.percentWidth = 100,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.horizontalCenter = 1,
        t.width = 1058,
        t.y = 63,
        t.elementsContent = [this.crystal_center_i(), this.btnPet_i(), this.btnCure_i(), this.txtInfo_i(), this.time_txt_i(), this.btnStartFight_i(), this.btnFight_i(), this.btnSkip_i(), this._Image9_i(), this._Label1_i(), this.level_txt_i()],
        t
    },
    i.crystal_center_i = function() {
        var t = new eui.Group;
        return this.crystal_center = t,
        t.visible = !0,
        t.x = 0,
        t.y = 32,
        t.elementsContent = [this._Image2_i(), this.a1_i(), this.a2_i(), this.a3_i(), this.a4_i(), this.a5_i(), this.a6_i()],
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 103,
        t.source = "DevilZax_4_info_png",
        t.visible = !0,
        t.width = 604,
        t.x = 7,
        t.y = 404,
        t
    },
    i.a1_i = function() {
        var t = new eui.Group;
        return this.a1 = t,
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image3_i(), this.pet_1_i(), this.flag_win_1_i(), this.kuang_1_i()],
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.height = 358,
        t.source = "DevilZax_4_bg_png",
        t.visible = !0,
        t.width = 155,
        t.x = 9,
        t.y = 17,
        t
    },
    i.pet_1_i = function() {
        var t = new eui.Image;
        return this.pet_1 = t,
        t.height = 375,
        t.source = "DevilZax_4_pet_1_png",
        t.visible = !1,
        t.width = 172,
        t.x = 0,
        t.y = 9,
        t
    },
    i.flag_win_1_i = function() {
        var t = new eui.Image;
        return this.flag_win_1 = t,
        t.height = 351,
        t.source = "DevilZax_4_flag_win_png",
        t.visible = !1,
        t.width = 148,
        t.x = 12,
        t.y = 21,
        t
    },
    i.kuang_1_i = function() {
        var t = new eui.Image;
        return this.kuang_1 = t,
        t.height = 397,
        t.source = "DevilZax_4_kuang_png",
        t.visible = !1,
        t.width = 176,
        t.x = 0,
        t.y = 0,
        t
    },
    i.a2_i = function() {
        var t = new eui.Group;
        return this.a2 = t,
        t.x = 176,
        t.y = 0,
        t.elementsContent = [this._Image4_i(), this.pet_2_i(), this.flag_win_2_i(), this.kuang_2_i()],
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.height = 358,
        t.source = "DevilZax_4_bg_png",
        t.visible = !0,
        t.width = 155,
        t.x = 9,
        t.y = 17,
        t
    },
    i.pet_2_i = function() {
        var t = new eui.Image;
        return this.pet_2 = t,
        t.height = 375,
        t.source = "DevilZax_4_pet_2_png",
        t.visible = !1,
        t.width = 172,
        t.x = 0,
        t.y = 9,
        t
    },
    i.flag_win_2_i = function() {
        var t = new eui.Image;
        return this.flag_win_2 = t,
        t.height = 351,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "DevilZax_4_flag_win_png",
        t.visible = !1,
        t.width = 148,
        t.x = 12,
        t.y = 21,
        t
    },
    i.kuang_2_i = function() {
        var t = new eui.Image;
        return this.kuang_2 = t,
        t.height = 397,
        t.source = "DevilZax_4_kuang_png",
        t.visible = !1,
        t.width = 176,
        t.x = 0,
        t.y = 0,
        t
    },
    i.a3_i = function() {
        var t = new eui.Group;
        return this.a3 = t,
        t.x = 352,
        t.y = 0,
        t.elementsContent = [this._Image5_i(), this.pet_3_i(), this.flag_win_3_i(), this.kuang_3_i()],
        t
    },
    i._Image5_i = function() {
        var t = new eui.Image;
        return t.height = 358,
        t.source = "DevilZax_4_bg_png",
        t.visible = !0,
        t.width = 155,
        t.x = 9,
        t.y = 17,
        t
    },
    i.pet_3_i = function() {
        var t = new eui.Image;
        return this.pet_3 = t,
        t.height = 375,
        t.source = "DevilZax_4_pet_3_png",
        t.visible = !1,
        t.width = 172,
        t.x = 0,
        t.y = 9,
        t
    },
    i.flag_win_3_i = function() {
        var t = new eui.Image;
        return this.flag_win_3 = t,
        t.height = 351,
        t.source = "DevilZax_4_flag_win_png",
        t.visible = !1,
        t.width = 148,
        t.x = 12,
        t.y = 21,
        t
    },
    i.kuang_3_i = function() {
        var t = new eui.Image;
        return this.kuang_3 = t,
        t.height = 397,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "DevilZax_4_kuang_png",
        t.visible = !1,
        t.width = 176,
        t.x = 0,
        t.y = 0,
        t
    },
    i.a4_i = function() {
        var t = new eui.Group;
        return this.a4 = t,
        t.x = 528,
        t.y = 0,
        t.elementsContent = [this._Image6_i(), this.pet_4_i(), this.flag_win_4_i(), this.kuang_4_i()],
        t
    },
    i._Image6_i = function() {
        var t = new eui.Image;
        return t.height = 358,
        t.source = "DevilZax_4_bg_png",
        t.width = 155,
        t.x = 9,
        t.y = 17,
        t
    },
    i.pet_4_i = function() {
        var t = new eui.Image;
        return this.pet_4 = t,
        t.height = 375,
        t.source = "DevilZax_4_pet_4_png",
        t.visible = !1,
        t.width = 172,
        t.x = 0,
        t.y = 9,
        t
    },
    i.flag_win_4_i = function() {
        var t = new eui.Image;
        return this.flag_win_4 = t,
        t.height = 351,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "DevilZax_4_flag_win_png",
        t.visible = !1,
        t.width = 148,
        t.x = 12,
        t.y = 21,
        t
    },
    i.kuang_4_i = function() {
        var t = new eui.Image;
        return this.kuang_4 = t,
        t.height = 397,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "DevilZax_4_kuang_png",
        t.visible = !1,
        t.width = 176,
        t.x = 0,
        t.y = 0,
        t
    },
    i.a5_i = function() {
        var t = new eui.Group;
        return this.a5 = t,
        t.visible = !0,
        t.x = 704,
        t.y = 0,
        t.elementsContent = [this._Image7_i(), this.pet_5_i(), this.flag_win_5_i(), this.kuang_5_i()],
        t
    },
    i._Image7_i = function() {
        var t = new eui.Image;
        return t.height = 358,
        t.source = "DevilZax_4_bg_png",
        t.width = 155,
        t.x = 9,
        t.y = 17,
        t
    },
    i.pet_5_i = function() {
        var t = new eui.Image;
        return this.pet_5 = t,
        t.height = 375,
        t.source = "DevilZax_4_pet_5_png",
        t.visible = !1,
        t.width = 172,
        t.x = 0,
        t.y = 9,
        t
    },
    i.flag_win_5_i = function() {
        var t = new eui.Image;
        return this.flag_win_5 = t,
        t.height = 351,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "DevilZax_4_flag_win_png",
        t.visible = !1,
        t.width = 148,
        t.x = 12,
        t.y = 21,
        t
    },
    i.kuang_5_i = function() {
        var t = new eui.Image;
        return this.kuang_5 = t,
        t.height = 397,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "DevilZax_4_kuang_png",
        t.visible = !1,
        t.width = 176,
        t.x = 0,
        t.y = 0,
        t
    },
    i.a6_i = function() {
        var t = new eui.Group;
        return this.a6 = t,
        t.x = 880,
        t.y = 0,
        t.elementsContent = [this._Image8_i(), this.pet_6_i(), this.flag_win_6_i(), this.kuang_6_i()],
        t
    },
    i._Image8_i = function() {
        var t = new eui.Image;
        return t.height = 358,
        t.source = "DevilZax_4_bg_png",
        t.width = 155,
        t.x = 9,
        t.y = 17,
        t
    },
    i.pet_6_i = function() {
        var t = new eui.Image;
        return this.pet_6 = t,
        t.height = 375,
        t.source = "DevilZax_4_pet_6_png",
        t.visible = !1,
        t.width = 172,
        t.x = 0,
        t.y = 9,
        t
    },
    i.flag_win_6_i = function() {
        var t = new eui.Image;
        return this.flag_win_6 = t,
        t.height = 351,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "DevilZax_4_flag_win_png",
        t.visible = !1,
        t.width = 148,
        t.x = 12,
        t.y = 21,
        t
    },
    i.kuang_6_i = function() {
        var t = new eui.Image;
        return this.kuang_6 = t,
        t.height = 397,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "DevilZax_4_kuang_png",
        t.visible = !1,
        t.width = 176,
        t.x = 0,
        t.y = 0,
        t
    },
    i.btnPet_i = function() {
        var t = new eui.Image;
        return this.btnPet = t,
        t.height = 60,
        t.source = "DevilZax_4_btnPet_png",
        t.width = 60,
        t.x = 649,
        t.y = 480,
        t
    },
    i.btnCure_i = function() {
        var t = new eui.Image;
        return this.btnCure = t,
        t.height = 60,
        t.source = "DevilZax_4_btnCure_png",
        t.width = 60,
        t.x = 723,
        t.y = 480,
        t
    },
    i.txtInfo_i = function() {
        var t = new eui.Label;
        return this.txtInfo = t,
        t.size = 22,
        t.text = "距离进攻结束：",
        t.textColor = 13879550,
        t.visible = !1,
        t.x = 779,
        t.y = 441,
        t
    },
    i.time_txt_i = function() {
        var t = new eui.Label;
        return this.time_txt = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.height = 30,
        t.size = 30,
        t.textColor = 16773461,
        t.visible = !0,
        t.x = 941.188,
        t.y = 437,
        t
    },
    i.btnStartFight_i = function() {
        var t = new eui.Image;
        return this.btnStartFight = t,
        t.height = 73,
        t.source = "DevilZax_4_btnStartFight_png",
        t.visible = !0,
        t.width = 241,
        t.x = 817,
        t.y = 476,
        t
    },
    i.btnFight_i = function() {
        var t = new eui.Image;
        return this.btnFight = t,
        t.height = 73,
        t.source = "DevilZax_4_btnFight_png",
        t.visible = !1,
        t.width = 241,
        t.x = 817,
        t.y = 476,
        t
    },
    i.btnSkip_i = function() {
        var t = new eui.Image;
        return this.btnSkip = t,
        t.height = 73,
        t.source = "DevilZax_4_btnSkip_png",
        t.visible = !1,
        t.width = 241,
        t.x = 817,
        t.y = 476,
        t
    },
    i._Image9_i = function() {
        var t = new eui.Image;
        return t.height = 33,
        t.source = "DevilZax_4_roundbg_png",
        t.visible = !0,
        t.width = 484,
        t.x = 9,
        t.y = 0,
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "HuaKangXinZongYi",
        t.size = 22,
        t.text = "当前关卡：",
        t.textColor = 12497663,
        t.x = 25,
        t.y = 6,
        t
    },
    i.level_txt_i = function() {
        var t = new eui.Label;
        return this.level_txt = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 22,
        t.text = "8/8",
        t.textColor = 12497663,
        t.visible = !0,
        t.x = 140,
        t.y = 8,
        t
    },
    i._Group2_i = function() {
        var t = new eui.Group;
        return t.right = 40,
        t.y = 12,
        t.elementsContent = [this.mowang_i(), this.battleCount_i()],
        t
    },
    i.mowang_i = function() {
        var t = new eui.Group;
        return this.mowang = t,
        t.visible = !0,
        t.x = 272,
        t.y = 1,
        t.elementsContent = [this._Image10_i(), this._Label2_i(), this._Image11_i(), this.crystal_number_i(), this.btnAddItem_i()],
        t
    },
    i._Image10_i = function() {
        var t = new eui.Image;
        return t.height = 32,
        t.source = "DevilZax_4_numbg_png",
        t.width = 242,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Label2_i = function() {
        var t = new eui.Label;
        return t.size = 18,
        t.text = "魔王结晶：",
        t.textColor = 16777215,
        t.x = 74,
        t.y = 8,
        t
    },
    i._Image11_i = function() {
        var t = new eui.Image;
        return t.height = 29,
        t.source = "DevilZax_4_crystal_png",
        t.width = 30,
        t.x = 35,
        t.y = 0,
        t
    },
    i.crystal_number_i = function() {
        var t = new eui.Label;
        return this.crystal_number = t,
        t.size = 18,
        t.text = "20000",
        t.textColor = 16777215,
        t.x = 165,
        t.y = 10,
        t
    },
    i.btnAddItem_i = function() {
        var t = new eui.Image;
        return this.btnAddItem = t,
        t.height = 34,
        t.source = "DevilZax_4_btnAdd_png",
        t.width = 36,
        t.x = 226,
        t.y = 0,
        t
    },
    i.battleCount_i = function() {
        var t = new eui.Group;
        return this.battleCount = t,
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image12_i(), this.btnAdd_i(), this._Label3_i(), this.times_txt_i()],
        t
    },
    i._Image12_i = function() {
        var t = new eui.Image;
        return t.height = 32,
        t.source = "DevilZax_4_numbg_png",
        t.width = 242,
        t.x = 0,
        t.y = 1,
        t
    },
    i.btnAdd_i = function() {
        var t = new eui.Image;
        return this.btnAdd = t,
        t.height = 34,
        t.source = "DevilZax_4_btnAdd_png",
        t.width = 36,
        t.x = 226,
        t.y = 0,
        t
    },
    i._Label3_i = function() {
        var t = new eui.Label;
        return t.size = 18,
        t.text = "剩余挑战次数：",
        t.textColor = 16777215,
        t.x = 39,
        t.y = 9,
        t
    },
    i.times_txt_i = function() {
        var t = new eui.Label;
        return this.times_txt = t,
        t.size = 18,
        t.text = "0/8",
        t.textColor = 16777215,
        t.x = 163,
        t.y = 10,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/Devilzax5Skin.exml"] = window.Devilzax5Skin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["txt_attr_0", "txt_attr_1", "txt_nature", "btnClose", "btnSet_1", "btnSet_2", "btnBuy", "sale", "_rect", "btnMin5", "inputTxt5", "btnMax5", "btnPlus5", "selectItem5", "btnMin0", "inputTxt0", "btnMax0", "btnPlus0", "selectItem0", "btnMin1", "inputTxt1", "btnMax1", "btnPlus1", "selectItem1", "btnMin2", "inputTxt2", "btnMax2", "btnPlus2", "selectItem2", "btnMin3", "inputTxt3", "btnMax3", "btnPlus3", "selectItem3", "btnMin4", "inputTxt4", "btnMax4", "btnPlus4", "selectItem4", "txt_studyNum", "img_btnAssign", "img_btnReset", "grp_study"],
        this.height = 494,
        this.width = 796,
        this.elementsContent = [this.sale_i(), this.grp_study_i()]
    }
    __extends(e, t);
    var i = function(t) {
        function e() {
            t.call(this),
            this.skinParts = ["textDisplay", "promptDisplay"],
            this.minHeight = 24,
            this.minWidth = 300,
            this.elementsContent = [this.textDisplay_i()],
            this.promptDisplay_i(),
            this.states = [new eui.State("normal", []), new eui.State("disabled", [new eui.SetProperty("textDisplay", "textColor", 16711680)]), new eui.State("normalWithPrompt", [new eui.AddItems("promptDisplay", "", 1, "")]), new eui.State("disabledWithPrompt", [new eui.AddItems("promptDisplay", "", 1, "")])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i.textDisplay_i = function() {
            var t = new eui.EditableText;
            return this.textDisplay = t,
            t.height = 24,
            t.horizontalCenter = "0",
            t.left = "10",
            t.right = "10",
            t.size = 16,
            t.textAlign = "center",
            t.textColor = 3143013,
            t.verticalCenter = "0",
            t.percentWidth = 100,
            t
        },
        i.promptDisplay_i = function() {
            var t = new eui.Label;
            return this.promptDisplay = t,
            t.fontFamily = "HuaKangXinZongYi",
            t.height = 24,
            t.horizontalCenter = 0,
            t.left = 10,
            t.right = 10,
            t.size = 16,
            t.textAlign = "center",
            t.textColor = 2966635,
            t.touchEnabled = !1,
            t.verticalCenter = 0,
            t.percentWidth = 100,
            t
        },
        e
    } (eui.Skin),
    n = function(t) {
        function e() {
            t.call(this),
            this.skinParts = ["textDisplay", "promptDisplay"],
            this.minHeight = 24,
            this.minWidth = 300,
            this.elementsContent = [this.textDisplay_i()],
            this.promptDisplay_i(),
            this.states = [new eui.State("normal", []), new eui.State("disabled", [new eui.SetProperty("textDisplay", "textColor", 16711680)]), new eui.State("normalWithPrompt", [new eui.AddItems("promptDisplay", "", 1, "")]), new eui.State("disabledWithPrompt", [new eui.AddItems("promptDisplay", "", 1, "")])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i.textDisplay_i = function() {
            var t = new eui.EditableText;
            return this.textDisplay = t,
            t.height = 24,
            t.horizontalCenter = "0",
            t.left = "10",
            t.right = "10",
            t.size = 16,
            t.textAlign = "center",
            t.textColor = 3143013,
            t.verticalCenter = "0",
            t.percentWidth = 100,
            t
        },
        i.promptDisplay_i = function() {
            var t = new eui.Label;
            return this.promptDisplay = t,
            t.fontFamily = "HuaKangXinZongYi",
            t.height = 24,
            t.horizontalCenter = 0,
            t.left = 10,
            t.right = 10,
            t.size = 16,
            t.textAlign = "center",
            t.textColor = 2966635,
            t.touchEnabled = !1,
            t.verticalCenter = 0,
            t.percentWidth = 100,
            t
        },
        e
    } (eui.Skin),
    a = function(t) {
        function e() {
            t.call(this),
            this.skinParts = ["textDisplay", "promptDisplay"],
            this.minHeight = 24,
            this.minWidth = 300,
            this.elementsContent = [this.textDisplay_i()],
            this.promptDisplay_i(),
            this.states = [new eui.State("normal", []), new eui.State("disabled", [new eui.SetProperty("textDisplay", "textColor", 16711680)]), new eui.State("normalWithPrompt", [new eui.AddItems("promptDisplay", "", 1, "")]), new eui.State("disabledWithPrompt", [new eui.AddItems("promptDisplay", "", 1, "")])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i.textDisplay_i = function() {
            var t = new eui.EditableText;
            return this.textDisplay = t,
            t.height = 24,
            t.horizontalCenter = "0",
            t.left = "10",
            t.right = "10",
            t.size = 16,
            t.textAlign = "center",
            t.textColor = 3143013,
            t.verticalCenter = "0",
            t.percentWidth = 100,
            t
        },
        i.promptDisplay_i = function() {
            var t = new eui.Label;
            return this.promptDisplay = t,
            t.fontFamily = "HuaKangXinZongYi",
            t.height = 24,
            t.horizontalCenter = 0,
            t.left = 10,
            t.right = 10,
            t.size = 16,
            t.textAlign = "center",
            t.textColor = 2966635,
            t.touchEnabled = !1,
            t.verticalCenter = 0,
            t.percentWidth = 100,
            t
        },
        e
    } (eui.Skin),
    r = function(t) {
        function e() {
            t.call(this),
            this.skinParts = ["textDisplay", "promptDisplay"],
            this.minHeight = 24,
            this.minWidth = 300,
            this.elementsContent = [this.textDisplay_i()],
            this.promptDisplay_i(),
            this.states = [new eui.State("normal", []), new eui.State("disabled", [new eui.SetProperty("textDisplay", "textColor", 16711680)]), new eui.State("normalWithPrompt", [new eui.AddItems("promptDisplay", "", 1, "")]), new eui.State("disabledWithPrompt", [new eui.AddItems("promptDisplay", "", 1, "")])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i.textDisplay_i = function() {
            var t = new eui.EditableText;
            return this.textDisplay = t,
            t.height = 24,
            t.horizontalCenter = "0",
            t.left = "10",
            t.right = "10",
            t.size = 16,
            t.textAlign = "center",
            t.textColor = 3143013,
            t.verticalCenter = "0",
            t.percentWidth = 100,
            t
        },
        i.promptDisplay_i = function() {
            var t = new eui.Label;
            return this.promptDisplay = t,
            t.fontFamily = "HuaKangXinZongYi",
            t.height = 24,
            t.horizontalCenter = 0,
            t.left = 10,
            t.right = 10,
            t.size = 16,
            t.textAlign = "center",
            t.textColor = 2966635,
            t.touchEnabled = !1,
            t.verticalCenter = 0,
            t.percentWidth = 100,
            t
        },
        e
    } (eui.Skin),
    u = function(t) {
        function e() {
            t.call(this),
            this.skinParts = ["textDisplay", "promptDisplay"],
            this.minHeight = 24,
            this.minWidth = 300,
            this.elementsContent = [this.textDisplay_i()],
            this.promptDisplay_i(),
            this.states = [new eui.State("normal", []), new eui.State("disabled", [new eui.SetProperty("textDisplay", "textColor", 16711680)]), new eui.State("normalWithPrompt", [new eui.AddItems("promptDisplay", "", 1, "")]), new eui.State("disabledWithPrompt", [new eui.AddItems("promptDisplay", "", 1, "")])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i.textDisplay_i = function() {
            var t = new eui.EditableText;
            return this.textDisplay = t,
            t.height = 24,
            t.horizontalCenter = "0",
            t.left = "10",
            t.right = "10",
            t.size = 16,
            t.textAlign = "center",
            t.textColor = 3143013,
            t.verticalCenter = "0",
            t.percentWidth = 100,
            t
        },
        i.promptDisplay_i = function() {
            var t = new eui.Label;
            return this.promptDisplay = t,
            t.fontFamily = "HuaKangXinZongYi",
            t.height = 24,
            t.horizontalCenter = 0,
            t.left = 10,
            t.right = 10,
            t.size = 16,
            t.textAlign = "center",
            t.textColor = 2966635,
            t.touchEnabled = !1,
            t.verticalCenter = 0,
            t.percentWidth = 100,
            t
        },
        e
    } (eui.Skin),
    s = function(t) {
        function e() {
            t.call(this),
            this.skinParts = ["textDisplay", "promptDisplay"],
            this.minHeight = 24,
            this.minWidth = 300,
            this.elementsContent = [this.textDisplay_i()],
            this.promptDisplay_i(),
            this.states = [new eui.State("normal", []), new eui.State("disabled", [new eui.SetProperty("textDisplay", "textColor", 16711680)]), new eui.State("normalWithPrompt", [new eui.AddItems("promptDisplay", "", 1, "")]), new eui.State("disabledWithPrompt", [new eui.AddItems("promptDisplay", "", 1, "")])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i.textDisplay_i = function() {
            var t = new eui.EditableText;
            return this.textDisplay = t,
            t.height = 24,
            t.horizontalCenter = "0",
            t.left = "10",
            t.right = "10",
            t.size = 16,
            t.textAlign = "center",
            t.textColor = 3143013,
            t.verticalCenter = "0",
            t.percentWidth = 100,
            t
        },
        i.promptDisplay_i = function() {
            var t = new eui.Label;
            return this.promptDisplay = t,
            t.fontFamily = "HuaKangXinZongYi",
            t.height = 24,
            t.horizontalCenter = 0,
            t.left = 10,
            t.right = 10,
            t.size = 16,
            t.textAlign = "center",
            t.textColor = 2966635,
            t.touchEnabled = !1,
            t.verticalCenter = 0,
            t.percentWidth = 100,
            t
        },
        e
    } (eui.Skin),
    _ = e.prototype;
    return _.sale_i = function() {
        var t = new eui.Group;
        return this.sale = t,
        t.horizontalCenter = 0,
        t.verticalCenter = 0,
        t.visible = !0,
        t.elementsContent = [this._Image1_i(), this._Image2_i(), this._Image3_i(), this._Label1_i(), this._Label2_i(), this._Image4_i(), this._Image5_i(), this._Image6_i(), this._Image7_i(), this._Image8_i(), this._Image9_i(), this._Label3_i(), this._Label4_i(), this._Label5_i(), this._Label6_i(), this._Label7_i(), this.txt_attr_0_i(), this.txt_attr_1_i(), this._Label8_i(), this.txt_nature_i(), this._Label9_i(), this._Label10_i(), this._Image10_i(), this._Image11_i(), this.btnClose_i(), this.btnSet_1_i(), this.btnSet_2_i(), this.btnBuy_i()],
        t
    },
    _._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 453,
        t.source = "DevilZax_5_bg_jpg",
        t.width = 783,
        t.x = 0,
        t.y = 19,
        t
    },
    _._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 464,
        t.source = "DevilZax_5_3194_png",
        t.visible = !0,
        t.width = 406,
        t.x = 6,
        t.y = 30,
        t
    },
    _._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "DevilZax_5_Title_png",
        t.x = 371,
        t.y = 31,
        t
    },
    _._Label1_i = function() {
        var t = new eui.Label;
        return t.size = 20,
        t.text = "极品等级：",
        t.textColor = 12562943,
        t.x = 381,
        t.y = 90,
        t
    },
    _._Label2_i = function() {
        var t = new eui.Label;
        return t.size = 20,
        t.text = "极品学习力：",
        t.textColor = 12562943,
        t.x = 381,
        t.y = 129,
        t
    },
    _._Image4_i = function() {
        var t = new eui.Image;
        return t.height = 48,
        t.source = "DevilZax_5_right_png",
        t.visible = !0,
        t.width = 49,
        t.x = 633,
        t.y = 127,
        t
    },
    _._Image5_i = function() {
        var t = new eui.Image;
        return t.height = 48,
        t.source = "DevilZax_5_right_png",
        t.visible = !0,
        t.width = 49,
        t.x = 633,
        t.y = 77,
        t
    },
    _._Image6_i = function() {
        var t = new eui.Image;
        return t.height = 48,
        t.source = "DevilZax_5_right_png",
        t.width = 49,
        t.x = 633,
        t.y = 177,
        t
    },
    _._Image7_i = function() {
        var t = new eui.Image;
        return t.height = 48,
        t.source = "DevilZax_5_right_png",
        t.visible = !0,
        t.width = 49,
        t.x = 633,
        t.y = 221,
        t
    },
    _._Image8_i = function() {
        var t = new eui.Image;
        return t.height = 48,
        t.source = "DevilZax_5_right_png",
        t.visible = !0,
        t.width = 49,
        t.x = 633,
        t.y = 265,
        t
    },
    _._Image9_i = function() {
        var t = new eui.Image;
        return t.height = 48,
        t.source = "DevilZax_5_right_png",
        t.width = 49,
        t.x = 633,
        t.y = 308,
        t
    },
    _._Label3_i = function() {
        var t = new eui.Label;
        return t.size = 20,
        t.text = "极品天赋：",
        t.textColor = 12562943,
        t.x = 381,
        t.y = 192,
        t
    },
    _._Label4_i = function() {
        var t = new eui.Label;
        return t.size = 20,
        t.text = "极品性格：",
        t.textColor = 12562943,
        t.x = 381,
        t.y = 236,
        t
    },
    _._Label5_i = function() {
        var t = new eui.Label;
        return t.size = 20,
        t.text = "极品体力上限：",
        t.textColor = 12562943,
        t.x = 381,
        t.y = 280,
        t
    },
    _._Label6_i = function() {
        var t = new eui.Label;
        return t.size = 20,
        t.text = "极品特性：",
        t.textColor = 12562943,
        t.x = 381,
        t.y = 324,
        t
    },
    _._Label7_i = function() {
        var t = new eui.Label;
        return t.size = 20,
        t.text = "100",
        t.textColor = 12562943,
        t.x = 603,
        t.y = 93,
        t
    },
    _.txt_attr_0_i = function() {
        var t = new eui.Label;
        return this.txt_attr_0 = t,
        t.size = 20,
        t.text = "特攻255",
        t.textColor = 12562943,
        t.visible = !0,
        t.x = 557,
        t.y = 131,
        t
    },
    _.txt_attr_1_i = function() {
        var t = new eui.Label;
        return this.txt_attr_1 = t,
        t.size = 20,
        t.text = "速度255",
        t.textColor = 12562943,
        t.visible = !0,
        t.x = 557,
        t.y = 151,
        t
    },
    _._Label8_i = function() {
        var t = new eui.Label;
        return t.size = 20,
        t.text = "31",
        t.textColor = 12562943,
        t.x = 615,
        t.y = 194,
        t
    },
    _.txt_nature_i = function() {
        var t = new eui.Label;
        return this.txt_nature = t,
        t.size = 20,
        t.text = "保守",
        t.textColor = 12562943,
        t.visible = !0,
        t.x = 593,
        t.y = 235,
        t
    },
    _._Label9_i = function() {
        var t = new eui.Label;
        return t.size = 20,
        t.text = "20",
        t.textColor = 12562943,
        t.x = 612,
        t.y = 282,
        t
    },
    _._Label10_i = function() {
        var t = new eui.Label;
        return t.size = 20,
        t.text = "随机",
        t.textColor = 12562943,
        t.x = 592,
        t.y = 323,
        t
    },
    _._Image10_i = function() {
        var t = new eui.Image;
        return t.height = 26,
        t.source = "DevilZax_5_price_png",
        t.width = 351,
        t.x = 395,
        t.y = 365,
        t
    },
    _._Image11_i = function() {
        var t = new eui.Image;
        return t.height = 190,
        t.source = "DevilZax_5_line_png",
        t.visible = !0,
        t.width = 414,
        t.x = 362,
        t.y = 121,
        t
    },
    _.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.height = 56,
        t.source = "DevilZax_5_BtnClose_png",
        t.width = 54,
        t.x = 742,
        t.y = 0,
        t
    },
    _.btnSet_1_i = function() {
        var t = new eui.Image;
        return this.btnSet_1 = t,
        t.height = 40,
        t.source = "DevilZax_5_btnSet_png",
        t.visible = !1,
        t.width = 70,
        t.x = 685,
        t.y = 131,
        t
    },
    _.btnSet_2_i = function() {
        var t = new eui.Image;
        return this.btnSet_2 = t,
        t.height = 40,
        t.source = "DevilZax_5_btnSet_png",
        t.visible = !1,
        t.width = 70,
        t.x = 685,
        t.y = 225,
        t
    },
    _.btnBuy_i = function() {
        var t = new eui.Image;
        return this.btnBuy = t,
        t.height = 52,
        t.source = "DevilZax_5_btnBuy_png",
        t.width = 176,
        t.x = 480,
        t.y = 398,
        t
    },
    _.grp_study_i = function() {
        var t = new eui.Group;
        return this.grp_study = t,
        t.height = 640,
        t.horizontalCenter = 0,
        t.verticalCenter = 0,
        t.visible = !1,
        t.width = 1136,
        t.elementsContent = [this._rect_i(), this._Group2_i()],
        t
    },
    _._rect_i = function() {
        var t = new eui.Rect;
        return this._rect = t,
        t.fillAlpha = 0,
        t.percentHeight = 100,
        t.horizontalCenter = 0,
        t.verticalCenter = 0,
        t.percentWidth = 100,
        t
    },
    _._Group2_i = function() {
        var t = new eui.Group;
        return t.horizontalCenter = 0,
        t.verticalCenter = 0,
        t.elementsContent = [this._Image12_i(), this._Image13_i(), this._Group1_i(), this._Image30_i(), this._Label11_i(), this._Image31_i(), this.txt_studyNum_i(), this.img_btnAssign_i(), this.img_btnReset_i()],
        t
    },
    _._Image12_i = function() {
        var t = new eui.Image;
        return t.height = 304,
        t.source = "common_texture_003_png",
        t.visible = !0,
        t.width = 486,
        t.x = 0,
        t.y = 0,
        t
    },
    _._Image13_i = function() {
        var t = new eui.Image;
        return t.height = 175,
        t.source = "common_texture_003_png",
        t.width = 468,
        t.x = 9,
        t.y = 46,
        t
    },
    _._Group1_i = function() {
        var t = new eui.Group;
        return t.x = 15,
        t.y = 71,
        t.elementsContent = [this._Image14_i(), this._Image15_i(), this._Image16_i(), this._Image17_i(), this._Image18_i(), this._Image19_i(), this._Image20_i(), this._Image21_i(), this._Image22_i(), this._Image23_i(), this.selectItem5_i(), this.selectItem0_i(), this.selectItem1_i(), this.selectItem2_i(), this.selectItem3_i(), this.selectItem4_i()],
        t
    },
    _._Image14_i = function() {
        var t = new eui.Image;
        return t.height = 1,
        t.source = "pet_info_view_texture_line_1_png",
        t.width = 220,
        t.x = 0,
        t.y = 86,
        t
    },
    _._Image15_i = function() {
        var t = new eui.Image;
        return t.height = 1,
        t.source = "pet_info_view_texture_line_1_png",
        t.width = 220,
        t.x = 235,
        t.y = 86,
        t
    },
    _._Image16_i = function() {
        var t = new eui.Image;
        return t.height = 1,
        t.source = "pet_info_view_texture_line_1_png",
        t.width = 220,
        t.x = 0,
        t.y = 37,
        t
    },
    _._Image17_i = function() {
        var t = new eui.Image;
        return t.height = 1,
        t.source = "pet_info_view_texture_line_1_png",
        t.width = 220,
        t.x = 235,
        t.y = 37,
        t
    },
    _._Image18_i = function() {
        var t = new eui.Image;
        return t.height = 20,
        t.source = "common_speed_png",
        t.width = 23,
        t.x = 15,
        t.y = 102,
        t
    },
    _._Image19_i = function() {
        var t = new eui.Image;
        return t.height = 22,
        t.source = "common_hp_png",
        t.width = 22,
        t.x = 247,
        t.y = 101,
        t
    },
    _._Image20_i = function() {
        var t = new eui.Image;
        return t.height = 23,
        t.source = "common_satk_png",
        t.width = 20,
        t.x = 17,
        t.y = 51,
        t
    },
    _._Image21_i = function() {
        var t = new eui.Image;
        return t.height = 22,
        t.source = "common_sdef_png",
        t.width = 18,
        t.x = 249,
        t.y = 52,
        t
    },
    _._Image22_i = function() {
        var t = new eui.Image;
        return t.height = 21,
        t.source = "common_def_png",
        t.width = 18,
        t.x = 249,
        t.y = 1,
        t
    },
    _._Image23_i = function() {
        var t = new eui.Image;
        return t.height = 21,
        t.source = "common_atk_png",
        t.width = 21,
        t.x = 16,
        t.y = 1,
        t
    },
    _.selectItem5_i = function() {
        var t = new eui.Group;
        return this.selectItem5 = t,
        t.visible = !0,
        t.x = 49,
        t.y = 100,
        t.elementsContent = [this.btnMin5_i(), this._Image24_i(), this.inputTxt5_i(), this.btnMax5_i(), this.btnPlus5_i()],
        t
    },
    _.btnMin5_i = function() {
        var t = new eui.Image;
        return this.btnMin5 = t,
        t.height = 24,
        t.source = "study_pet_attribute_btnMin_png",
        t.width = 24,
        t.x = 0,
        t.y = 0,
        t
    },
    _._Image24_i = function() {
        var t = new eui.Image;
        return t.height = 24,
        t.source = "study_pet_attribute_tbg_png",
        t.width = 58,
        t.x = 26,
        t.y = 0,
        t
    },
    _.inputTxt5_i = function() {
        var t = new eui.TextInput;
        return this.inputTxt5 = t,
        t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.height = 24,
        t.maxChars = 3,
        t.name = "inputTxt_5",
        t.restrict = '"0-9"',
        t.text = "255",
        t.textColor = 3143013,
        t.width = 57,
        t.x = 27,
        t.y = 4,
        t.skinName = i,
        t
    },
    _.btnMax5_i = function() {
        var t = new eui.Image;
        return this.btnMax5 = t,
        t.height = 24,
        t.source = "study_pet_attribute_btnMax_png",
        t.width = 48,
        t.x = 118,
        t.y = 0,
        t
    },
    _.btnPlus5_i = function() {
        var t = new eui.Image;
        return this.btnPlus5 = t,
        t.height = 24,
        t.source = "study_pet_attribute_btnPlus_png",
        t.width = 24,
        t.x = 86,
        t.y = 0,
        t
    },
    _.selectItem0_i = function() {
        var t = new eui.Group;
        return this.selectItem0 = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.x = 280,
        t.y = 100,
        t.elementsContent = [this.btnMin0_i(), this._Image25_i(), this.inputTxt0_i(), this.btnMax0_i(), this.btnPlus0_i()],
        t
    },
    _.btnMin0_i = function() {
        var t = new eui.Image;
        return this.btnMin0 = t,
        t.height = 24,
        t.source = "study_pet_attribute_btnMin_png",
        t.width = 24,
        t.x = 0,
        t.y = 0,
        t
    },
    _._Image25_i = function() {
        var t = new eui.Image;
        return t.height = 24,
        t.source = "study_pet_attribute_tbg_png",
        t.width = 58,
        t.x = 26,
        t.y = 0,
        t
    },
    _.inputTxt0_i = function() {
        var t = new eui.TextInput;
        return this.inputTxt0 = t,
        t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.height = 24,
        t.maxChars = 3,
        t.name = "inputTxt_0",
        t.restrict = '"0-9"',
        t.text = "255",
        t.textColor = 3143013,
        t.width = 57,
        t.x = 27,
        t.y = 4,
        t.skinName = n,
        t
    },
    _.btnMax0_i = function() {
        var t = new eui.Image;
        return this.btnMax0 = t,
        t.height = 24,
        t.source = "study_pet_attribute_btnMax_png",
        t.width = 48,
        t.x = 118,
        t.y = 0,
        t
    },
    _.btnPlus0_i = function() {
        var t = new eui.Image;
        return this.btnPlus0 = t,
        t.height = 24,
        t.source = "study_pet_attribute_btnPlus_png",
        t.width = 24,
        t.x = 86,
        t.y = 0,
        t
    },
    _.selectItem1_i = function() {
        var t = new eui.Group;
        return this.selectItem1 = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.x = 49,
        t.y = 0,
        t.elementsContent = [this.btnMin1_i(), this._Image26_i(), this.inputTxt1_i(), this.btnMax1_i(), this.btnPlus1_i()],
        t
    },
    _.btnMin1_i = function() {
        var t = new eui.Image;
        return this.btnMin1 = t,
        t.height = 24,
        t.source = "study_pet_attribute_btnMin_png",
        t.width = 24,
        t.x = 0,
        t.y = 0,
        t
    },
    _._Image26_i = function() {
        var t = new eui.Image;
        return t.height = 24,
        t.source = "study_pet_attribute_tbg_png",
        t.width = 58,
        t.x = 26,
        t.y = 0,
        t
    },
    _.inputTxt1_i = function() {
        var t = new eui.TextInput;
        return this.inputTxt1 = t,
        t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.height = 24,
        t.maxChars = 3,
        t.name = "inputTxt_1",
        t.restrict = '"0-9"',
        t.text = "255",
        t.textColor = 3143013,
        t.width = 57,
        t.x = 27,
        t.y = 4,
        t.skinName = a,
        t
    },
    _.btnMax1_i = function() {
        var t = new eui.Image;
        return this.btnMax1 = t,
        t.height = 24,
        t.source = "study_pet_attribute_btnMax_png",
        t.width = 48,
        t.x = 118,
        t.y = 0,
        t
    },
    _.btnPlus1_i = function() {
        var t = new eui.Image;
        return this.btnPlus1 = t,
        t.height = 24,
        t.source = "study_pet_attribute_btnPlus_png",
        t.width = 24,
        t.x = 86,
        t.y = 0,
        t
    },
    _.selectItem2_i = function() {
        var t = new eui.Group;
        return this.selectItem2 = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.visible = !0,
        t.x = 280,
        t.y = 0,
        t.elementsContent = [this.btnMin2_i(), this._Image27_i(), this.inputTxt2_i(), this.btnMax2_i(), this.btnPlus2_i()],
        t
    },
    _.btnMin2_i = function() {
        var t = new eui.Image;
        return this.btnMin2 = t,
        t.height = 24,
        t.source = "study_pet_attribute_btnMin_png",
        t.width = 24,
        t.x = 0,
        t.y = 0,
        t
    },
    _._Image27_i = function() {
        var t = new eui.Image;
        return t.height = 24,
        t.source = "study_pet_attribute_tbg_png",
        t.width = 58,
        t.x = 26,
        t.y = 0,
        t
    },
    _.inputTxt2_i = function() {
        var t = new eui.TextInput;
        return this.inputTxt2 = t,
        t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.height = 24,
        t.maxChars = 3,
        t.name = "inputTxt_2",
        t.restrict = '"0-9"',
        t.text = "255",
        t.textColor = 3143013,
        t.width = 57,
        t.x = 27,
        t.y = 4,
        t.skinName = r,
        t
    },
    _.btnMax2_i = function() {
        var t = new eui.Image;
        return this.btnMax2 = t,
        t.height = 24,
        t.source = "study_pet_attribute_btnMax_png",
        t.width = 48,
        t.x = 118,
        t.y = 0,
        t
    },
    _.btnPlus2_i = function() {
        var t = new eui.Image;
        return this.btnPlus2 = t,
        t.height = 24,
        t.source = "study_pet_attribute_btnPlus_png",
        t.width = 24,
        t.x = 86,
        t.y = 0,
        t
    },
    _.selectItem3_i = function() {
        var t = new eui.Group;
        return this.selectItem3 = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.x = 49,
        t.y = 51,
        t.elementsContent = [this.btnMin3_i(), this._Image28_i(), this.inputTxt3_i(), this.btnMax3_i(), this.btnPlus3_i()],
        t
    },
    _.btnMin3_i = function() {
        var t = new eui.Image;
        return this.btnMin3 = t,
        t.height = 24,
        t.source = "study_pet_attribute_btnMin_png",
        t.width = 24,
        t.x = 0,
        t.y = 0,
        t
    },
    _._Image28_i = function() {
        var t = new eui.Image;
        return t.height = 24,
        t.source = "study_pet_attribute_tbg_png",
        t.width = 58,
        t.x = 26,
        t.y = 0,
        t
    },
    _.inputTxt3_i = function() {
        var t = new eui.TextInput;
        return this.inputTxt3 = t,
        t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.height = 24,
        t.maxChars = 3,
        t.name = "inputTxt_3",
        t.restrict = '"0-9"',
        t.text = "255",
        t.textColor = 3143013,
        t.width = 57,
        t.x = 27,
        t.y = 4,
        t.skinName = u,
        t
    },
    _.btnMax3_i = function() {
        var t = new eui.Image;
        return this.btnMax3 = t,
        t.height = 24,
        t.source = "study_pet_attribute_btnMax_png",
        t.width = 48,
        t.x = 118,
        t.y = 0,
        t
    },
    _.btnPlus3_i = function() {
        var t = new eui.Image;
        return this.btnPlus3 = t,
        t.height = 24,
        t.source = "study_pet_attribute_btnPlus_png",
        t.width = 24,
        t.x = 86,
        t.y = 0,
        t
    },
    _.selectItem4_i = function() {
        var t = new eui.Group;
        return this.selectItem4 = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.x = 280,
        t.y = 51,
        t.elementsContent = [this.btnMin4_i(), this._Image29_i(), this.inputTxt4_i(), this.btnMax4_i(), this.btnPlus4_i()],
        t
    },
    _.btnMin4_i = function() {
        var t = new eui.Image;
        return this.btnMin4 = t,
        t.height = 24,
        t.source = "study_pet_attribute_btnMin_png",
        t.width = 24,
        t.x = 0,
        t.y = 0,
        t
    },
    _._Image29_i = function() {
        var t = new eui.Image;
        return t.height = 24,
        t.source = "study_pet_attribute_tbg_png",
        t.width = 58,
        t.x = 26,
        t.y = 0,
        t
    },
    _.inputTxt4_i = function() {
        var t = new eui.TextInput;
        return this.inputTxt4 = t,
        t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.height = 24,
        t.maxChars = 3,
        t.name = "inputTxt_4",
        t.restrict = '"0-9"',
        t.text = "255",
        t.textColor = 3143013,
        t.width = 57,
        t.x = 27,
        t.y = 4,
        t.skinName = s,
        t
    },
    _.btnMax4_i = function() {
        var t = new eui.Image;
        return this.btnMax4 = t,
        t.height = 24,
        t.source = "study_pet_attribute_btnMax_png",
        t.width = 48,
        t.x = 118,
        t.y = 0,
        t
    },
    _.btnPlus4_i = function() {
        var t = new eui.Image;
        return this.btnPlus4 = t,
        t.height = 24,
        t.source = "study_pet_attribute_btnPlus_png",
        t.width = 24,
        t.x = 86,
        t.y = 0,
        t
    },
    _._Image30_i = function() {
        var t = new eui.Image;
        return t.height = 40,
        t.source = "study_pet_attribute_bg2_png",
        t.visible = !0,
        t.width = 462,
        t.x = 12,
        t.y = 15,
        t
    },
    _._Label11_i = function() {
        var t = new eui.Label;
        return t.size = 20,
        t.text = "输入你想要的学习力",
        t.textColor = 4173823,
        t.x = 40,
        t.y = 26,
        t
    },
    _._Image31_i = function() {
        var t = new eui.Image;
        return t.height = 24,
        t.source = "study_pet_attribute_icon2_png",
        t.width = 8,
        t.x = 22,
        t.y = 23,
        t
    },
    _.txt_studyNum_i = function() {
        var t = new eui.Label;
        return this.txt_studyNum = t,
        t.right = 21,
        t.size = 16,
        t.text = "当前学习力总和：123",
        t.textColor = 4173823,
        t.y = 26,
        t
    },
    _.img_btnAssign_i = function() {
        var t = new eui.Image;
        return this.img_btnAssign = t,
        t.height = 52,
        t.source = "study_pet_attribute_img_btnAssign_png",
        t.width = 176,
        t.x = 265,
        t.y = 233,
        t
    },
    _.img_btnReset_i = function() {
        var t = new eui.Image;
        return this.img_btnReset = t,
        t.height = 52,
        t.source = "study_pet_attribute_img_btnReset_png",
        t.width = 176,
        t.x = 45,
        t.y = 233,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/DevilzaxSkin.exml"] = window.DevilzaxSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["btnWan", "btnChao"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this._Image1_i(), this._Group1_i(), this._Group2_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.bottom = 0,
        t.left = 0,
        t.right = 0,
        t.source = "DevilZax_bg_jpg",
        t.top = 0,
        t.visible = !0,
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.horizontalCenter = 0,
        t.visible = !0,
        t.y = 0,
        t.elementsContent = [this._Image2_i(), this._Image3_i(), this._Image4_i(), this._Image5_i(), this._Image6_i(), this._Image7_i(), this._Image8_i()],
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 262,
        t.source = "DevilZax_jiantou__png",
        t.visible = !0,
        t.width = 200,
        t.x = 450,
        t.y = 208,
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.height = 104,
        t.source = "DevilZax_petbg1_png",
        t.width = 501,
        t.x = 61,
        t.y = 510,
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.height = 114,
        t.source = "DevilZax_petbg2_png",
        t.width = 508,
        t.x = 628,
        t.y = 479,
        t
    },
    i._Image5_i = function() {
        var t = new eui.Image;
        return t.height = 524,
        t.source = "DevilZax_pet2_png",
        t.width = 504,
        t.x = 632,
        t.y = 23,
        t
    },
    i._Image6_i = function() {
        var t = new eui.Image;
        return t.height = 490,
        t.source = "DevilZax_pet1_png",
        t.width = 521,
        t.x = 15,
        t.y = 102,
        t
    },
    i._Image7_i = function() {
        var t = new eui.Image;
        return t.height = 268,
        t.source = "DevilZax_title2_png",
        t.width = 401,
        t.x = 735,
        t.y = 274,
        t
    },
    i._Image8_i = function() {
        var t = new eui.Image;
        return t.height = 268,
        t.source = "DevilZax_title1_png",
        t.width = 398,
        t.x = 27,
        t.y = 330,
        t
    },
    i._Group2_i = function() {
        var t = new eui.Group;
        return t.width = 800,
        t.x = 234,
        t.y = 511,
        t.elementsContent = [this.btnWan_i(), this.btnChao_i()],
        t
    },
    i.btnWan_i = function() {
        var t = new eui.Image;
        return this.btnWan = t,
        t.height = 73,
        t.source = "DevilZax_btnWan_png",
        t.visible = !0,
        t.width = 241,
        t.x = 532,
        t.y = 0,
        t
    },
    i.btnChao_i = function() {
        var t = new eui.Image;
        return this.btnChao = t,
        t.height = 73,
        t.source = "DevilZax_btnChao_png",
        t.visible = !0,
        t.width = 241,
        t.x = 0,
        t.y = 25,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/Gift.exml"] = window.skins.Gift = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["gift_hurtNum", "btnOpen", "btnClose_1", "gift_title", "gift_4", "gift_3", "gift_2", "gift_1", "giftName", "gift_crystalNum", "gift_seerdouNum", "gift_jinNum", "Gift"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.Gift_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.Gift_i = function() {
        var t = new eui.Group;
        return this.Gift = t,
        t.horizontalCenter = 8,
        t.visible = !0,
        t.y = 124,
        t.elementsContent = [this._Image1_i(), this._Image2_i(), this._Label1_i(), this._Image3_i(), this._Label2_i(), this.gift_hurtNum_i(), this.btnOpen_i(), this.btnClose_1_i(), this.gift_title_i(), this.gift_4_i(), this.gift_3_i(), this.gift_2_i(), this.gift_1_i(), this.giftName_i(), this.gift_crystalNum_i(), this._Image4_i(), this.gift_seerdouNum_i(), this._Image5_i(), this.gift_jinNum_i(), this._Image6_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 348,
        t.source = "DevilZax_3_libaobg_png",
        t.width = 600,
        t.x = 0,
        t.y = 22,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 113,
        t.source = "DevilZax_3_txtInfo_png",
        t.width = 370,
        t.x = 203,
        t.y = 93,
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.size = 18.0193567308632,
        t.text = "为了表彰你进攻魔王咤克斯做出的贡献，船\n长罗杰赠送丰厚礼包作为奖励！希望你再接\n再厉！贡献越大，奖励越丰厚哦！",
        t.textColor = 15332094,
        t.x = 218,
        t.y = 105,
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.height = 28,
        t.source = "DevilZax_3_txtbg_png",
        t.width = 369,
        t.x = 204,
        t.y = 243,
        t
    },
    i._Label2_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "HuaKangXinZongYi",
        t.size = 20.0215074787369,
        t.text = "单次最高伤害：",
        t.textColor = 16182900,
        t.visible = !0,
        t.x = 248,
        t.y = 247,
        t
    },
    i.gift_hurtNum_i = function() {
        var t = new eui.Label;
        return this.gift_hurtNum = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 20.0215074787369,
        t.text = "828282526",
        t.textColor = 16182900,
        t.x = 401,
        t.y = 251,
        t
    },
    i.btnOpen_i = function() {
        var t = new eui.Image;
        return this.btnOpen = t,
        t.height = 40,
        t.source = "DevilZax_3_btnOpen_png",
        t.width = 120,
        t.x = 243,
        t.y = 297,
        t
    },
    i.btnClose_1_i = function() {
        var t = new eui.Image;
        return this.btnClose_1 = t,
        t.height = 56,
        t.source = "DevilZax_3_btnClose_1_png",
        t.visible = !1,
        t.width = 54,
        t.x = 562,
        t.y = 0,
        t
    },
    i.gift_title_i = function() {
        var t = new eui.Label;
        return this.gift_title = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 26.027959722358,
        t.text = "船长礼包",
        t.textColor = 16777215,
        t.x = 252,
        t.y = 51,
        t
    },
    i.gift_4_i = function() {
        var t = new eui.Image;
        return this.gift_4 = t,
        t.height = 138,
        t.source = "DevilZax_3_gift_a_png",
        t.visible = !1,
        t.width = 146,
        t.x = 35,
        t.y = 71,
        t
    },
    i.gift_3_i = function() {
        var t = new eui.Image;
        return this.gift_3 = t,
        t.height = 138,
        t.source = "DevilZax_3_gift_b_png",
        t.visible = !1,
        t.width = 146,
        t.x = 35,
        t.y = 71,
        t
    },
    i.gift_2_i = function() {
        var t = new eui.Image;
        return this.gift_2 = t,
        t.height = 138,
        t.source = "DevilZax_3_gift_c_png",
        t.visible = !1,
        t.width = 107,
        t.x = 56,
        t.y = 71,
        t
    },
    i.gift_1_i = function() {
        var t = new eui.Image;
        return this.gift_1 = t,
        t.height = 135,
        t.source = "DevilZax_3_gift_d_png",
        t.visible = !1,
        t.width = 107,
        t.x = 56,
        t.y = 72,
        t
    },
    i.giftName_i = function() {
        var t = new eui.Label;
        return this.giftName = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 20,
        t.text = "豪华礼包",
        t.textColor = 4470636,
        t.x = 67,
        t.y = 208,
        t
    },
    i.gift_crystalNum_i = function() {
        var t = new eui.Label;
        return this.gift_crystalNum = t,
        t.size = 20,
        t.text = "x3-5",
        t.textColor = 4405099,
        t.x = 70,
        t.y = 242,
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.height = 24,
        t.source = "DevilZax_3_devil_soul_png",
        t.width = 30,
        t.x = 39,
        t.y = 235,
        t
    },
    i.gift_seerdouNum_i = function() {
        var t = new eui.Label;
        return this.gift_seerdouNum = t,
        t.size = 20,
        t.text = "x1000-2000",
        t.textColor = 4405099,
        t.x = 70,
        t.y = 267,
        t
    },
    i._Image5_i = function() {
        var t = new eui.Image;
        return t.height = 17,
        t.source = "DevilZax_3_1_png",
        t.width = 29,
        t.x = 39,
        t.y = 264,
        t
    },
    i.gift_jinNum_i = function() {
        var t = new eui.Label;
        return this.gift_jinNum = t,
        t.size = 20,
        t.text = "x0-200",
        t.textColor = 4405099,
        t.x = 70,
        t.y = 291,
        t
    },
    i._Image6_i = function() {
        var t = new eui.Image;
        return t.height = 25,
        t.source = "DevilZax_3_1400352_png",
        t.width = 23,
        t.x = 42,
        t.y = 284,
        t
    },
    e
} (eui.Skin);