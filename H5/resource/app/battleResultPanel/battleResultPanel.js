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
battleResultPanel; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.skinName = BattlefailresultSkin,
            e
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this),
            this.addChildAt(FightOverController.fightBg, 0),
            this.content.y = -this.content.height,
            this.content.alpha = .6,
            egret.Tween.get(this.content).wait(200).to({
                y: 126,
                alpha: 1
            },
            500, egret.Ease.getBackOut(1)),
            this.addEvent(),
            GuideManager.isNewSeer() && (this.btn0.touchEnabled = !1, this.btn1.touchEnabled = !1, this.btn2.touchEnabled = !1, this.btn3.touchEnabled = !1),
            GameInfo.isChecking && (this.btn2.visible = !1, this.btn1.x = 246)
        },
        e.prototype.destroy = function() {
            this.removeEvent(),
            AwardManager.resume(),
            AchieveManager.resumeShowNotice(),
            t.prototype.destroy.call(this),
            FightManager.isFighting = !1
        },
        e.prototype.addEvent = function() {
            this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapImageButton, this)
        },
        e.prototype.removeEvent = function() {
            ImageButtonUtil.removeAll(this),
            this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapImageButton, this)
        },
        e.prototype.onTouchTapImageButton = function(e) {
            var i = !0;
            switch (e.target) {
            case this.btn0:
                t.prototype.onClose.call(this),
                ModuleManager.showModuleByID(10);
                break;
            case this.btn1:
                t.prototype.onClose.call(this),
                ModuleManager.showModuleByID(5);
                break;
            case this.btn2:
                if (t.prototype.onClose.call(this), MainManager.actorInfo.teamInfo && MainManager.actorInfo.teamInfo.id > 0) {
                    var n = TeamInfoManager.getApplyList();
                    if (MainManager.actorInfo.teamInfo.priv < 2 && n.length > 0) {
                        var a = n.shift(),
                        r = PopViewManager.createDefaultStyleObject();
                        r.caller = this,
                        r.clickMaskHandler = function() {},
                        PopViewManager.getInstance().openView(new tipsPop.TeamApplyView, r, a, LevelManager.appLevel),
                        RedPointManager.addRedPointWithNum(this, "toolbar_btnTeam", n.length, null)
                    } else ModuleManager.showModuleByID(74)
                } else KTool.getMultiValue([127],
                function(t) {
                    var e = SystemTimerManager.sysBJDate.getTime() / 1e3;
                    e - t[0] < 86400 ? Alarm.show("离开战队后需要等待24小时后，才能进行加入战队或创建战队的操作。") : ModuleManager.showModuleByID(73)
                });
                break;
            case this.btn3:
                t.prototype.onClose.call(this),
                ModuleManager.showModuleByID(124);
                break;
            default:
                i = !1,
                t.prototype.onClose.call(this)
            }
            CountExpPanelManager.overData.isJumping = i,
            EventManager.dispatchEvent(new PetFightEvent(PetFightEvent.ALARM_CLICK, CountExpPanelManager.overData))
        },
        e
    } (BaseModule);
    t.BattleFailPanel = e,
    __reflect(e.prototype, "battleResultPanel.BattleFailPanel")
} (battleResultPanel || (battleResultPanel = {}));
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
battleResultPanel; !
function(t) {
    var e = function(t) {
        function e(e) {
            var i = t.call(this) || this;
            return i.item = e,
            i.skinName = BattleResultItemSkin,
            i
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            if (t.prototype.childrenCreated.call(this), this.txtCount.text = "" + this.item.count, this.item.count >= 1e4) {
                var e = this.item.count / 1e4,
                i = this.item.count % 1e4;
                i > 0 ? this.txtCount.text = "" + e.toFixed(1) + "万": this.txtCount.text = "" + Math.floor(e) + "万"
            }
            if (this.txtName.y = 81, this.icon.scaleY = this.icon.scaleX = 1, this.item.type == AwardType.TYPE_MARK) this.icon.source = ClientConfig.getMarkPath(this.item.id),
            this.txtName.text = CountermarkXMLInfo.getDes(this.item.id),
            this.icon.width = this.icon.height = 55;
            else if (this.item.type == AwardType.TYPE_HEAD_FRAME) {
                var n = config.Profilephoto.getItem(this.item.id);
                this.icon.source = 1 === n.type ? ClientConfig.GetAvatarHead(n.icon) : ClientConfig.GetAvatarFrame(n.icon),
                this.txtName.text = n.name,
                this.txtCount.text = "",
                this.txtName.y = 90,
                this.icon.scaleY = this.icon.scaleX = .85
            } else if (this.item.type === AwardType.TYPE_USER_INFO) {
                var a = virtualItem.UserInfoIconManger.Instance.GetItemByType(this.item.id);
                this.icon.source = ClientConfig.GetItemUserIcon(this.item.id),
                this.txtName.text = a.desc
            } else this.icon.source = ItemXMLInfo.getIconURL(this.item.id),
            this.txtName.text = ItemXMLInfo.getName(this.item.id),
            this.icon.width = this.icon.height = 55
        },
        e
    } (eui.Component);
    t.BattleResultAwardItem = e,
    __reflect(e.prototype, "battleResultPanel.BattleResultAwardItem")
} (battleResultPanel || (battleResultPanel = {}));
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
battleResultPanel; !
function(t) {
    var e = function(t) {
        function e(e) {
            var i = t.call(this) || this;
            return i._animTime = 830,
            i.onlyDisplayResult = !1,
            i.data = e,
            i.skinName = BattleresultspitemSkin,
            i
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this),
            this._anim = SpineUtil.createAnimate("battleResult"),
            this._anim.visible = !1,
            this.grp_anim.addChild(this._anim),
            this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this),
            this.update()
        },
        e.prototype.update = function() {
            var t, e = this;
            if (this.data instanceof PetInfo ? (this.onlyDisplayResult = !0, t = this.data) : (this.onlyDisplayResult = !1, t = PetManager.getPetInfo(this.data.catchTime)), this.icon.source = null, this.txt.text = this.txt1.text = "", this.head.source = ClientConfig.getPetHeadPath(t.id), this.txtName.text = StringUtil.parseStrLimitLen(PetXMLInfo.getName(t.id), 6), this.hp.width = 80 * Math.min(1, t.hp / t.maxHp), this.data.v) {
                if (this.v = this.data.v, t = PetManager.getPetInfo(this.v.catchTime), this.lev.textFlow = [{
                    text: "Lv.",
                    style: {
                        textColor: 12900350
                    }
                },
                {
                    text: this.v.level.toString(),
                    style: {
                        textColor: 6154074
                    }
                }], this.exp.visible = this.v.exp > t.exp, this.exp.textFlow = [{
                    text: "EXP+",
                    style: {
                        textColor: 12900350
                    }
                },
                {
                    text: this.v.exp - t.exp + "",
                    style: {
                        textColor: 16580432
                    }
                }], this.v.level > t.level) {
                    var i = Math.min(this.v.exp / this.v.nextLvExp, 1);
                    this.pro_ex.visible = !1,
                    this.pro_now.visible = !0;
                    var n = i * this.proBg.width,
                    a = i * this._animTime;
                    this.pro_now.width = 0,
                    this.lev.textFlow = [{
                        text: "Lv.",
                        style: {
                            textColor: 12900350
                        }
                    },
                    {
                        text: t.level.toString(),
                        style: {
                            textColor: 6154074
                        }
                    }],
                    this._anim.visible = !0,
                    this._anim.play("shengji", 1, 0, {
                        playEnd: function() {
                            egret.Tween.get(e.pro_now).to({
                                width: n
                            },
                            a),
                            e._anim.visible = !1,
                            e.up.visible = !0
                        },
                        custom: function(t) {
                            "upp" == t.data.name && (e.lev.textFlow = [{
                                text: "Lv.",
                                style: {
                                    textColor: 12900350
                                }
                            },
                            {
                                text: e.v.level.toString(),
                                style: {
                                    textColor: 6154074
                                }
                            }])
                        }
                    })
                } else {
                    this.up.visible = !1;
                    var r = Math.min(t.exp / this.v.nextLvExp, 1),
                    s = this.proBg.width * r,
                    o = Math.min((this.v.exp - t.exp) / this.v.nextLvExp, 1),
                    n = this.proBg.width * o;
                    this.pro_ex.visible = !0,
                    this.pro_ex.width = s,
                    this.pro_now.x = this.pro_ex.x + s,
                    this.pro_now.width = 0;
                    var a = o * this._animTime;
                    n > 0 && egret.Tween.get(this.pro_now).to({
                        width: n
                    },
                    a)
                }
                var h, l, u = [this.v.ev_a, this.v.ev_d, this.v.ev_sa, this.v.ev_sd, this.v.ev_sp, this.v.ev_hp],
                _ = ["攻击", "防御", "特攻", "特防", "速度", "体力"],
                c = [];
                for (h = 0; 6 > h; h++) l = u[h] - t.evArray[h],
                l > 0 && c.push(h);
                if (c.length > 0) {
                    this.grp_attr.visible = !0;
                    var p = c[0];
                    l = u[p] - t.evArray[p],
                    this.icon.source = ClientConfig.getPetAttributeIcon(p),
                    this.txt_attr.text = _[p],
                    this.txt.text = "" + t.evArray[p],
                    this.txt1.text = "" + l
                } else this.grp_attr.visible = !1
            } else this.lev.textFlow = [{
                text: "Lv.",
                style: {
                    textColor: 12900350
                }
            },
            {
                text: t.level.toString(),
                style: {
                    textColor: 6154074
                }
            }],
            this.up.visible = !1,
            this.exp.visible = !1,
            this.grp_attr.visible = !1,
            this.onlyDisplayResult || SocketConnection.sendByQueue(CommandID.PET_GET_LEVEL_UP_EXP, [t.catchTime],
            function(n) {
                var a = n.data;
                a.position = 0;
                var r = a.readUnsignedInt();
                i = Math.min(t.exp / (r + t.exp), 1),
                e.pro_now.visible = !1,
                e.pro_ex.width = e.proBg.width * i
            })
        },
        e.prototype.destroy = function() {
            this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this),
            this.parent && this.parent.removeChild(this),
            this.head.source = null
        },
        e
    } (eui.Component);
    t.BattleResultItem = e,
    __reflect(e.prototype, "battleResultPanel.BattleResultItem")
} (battleResultPanel || (battleResultPanel = {}));
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
battleResultPanel; !
function(t) {
    var e = function(e) {
        function i(t) {
            var i = e.call(this, t) || this;
            return i.skinName = BattleresultSkin,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            this.width = egret.lifecycle.stage.stageWidth,
            e.prototype.childrenCreated.call(this),
            this.addEvent(),
            this.updatelist(),
            this.addChildAt(FightOverController.fightBg, 0),
            this.content.alpha = .1,
            egret.Tween.get(this.content).to({
                alpha: 1
            },
            300, egret.Ease.getBackOut(1))
        },
        i.prototype.updatelist = function() {
            var e;
            if (!Array.isArray(this.data)) switch (this.data) {
            case PetUpdatePropController.USE_FIGHT_DATA:
                this.clearResultItems(),
                this.resultItems = [];
                for (var i = FightNoteCmdListener.getMyPetInfoArray_FromFightNote(), n = 0; n < i.length; n++) {
                    var a = new t.BattleResultItem(i[n]);
                    this.resultItems.push(a),
                    this["sp" + (n + 1)].parent.addChild(a),
                    a.x = this["sp" + (n + 1)].x,
                    a.y = this["sp" + (n + 1)].y,
                    a.alpha = 0,
                    this.alphaAnim(a, 60 * n)
                }
                return;
            default:
                throw new console.error("error战斗结算参数")
            }
            this._infoArray = this.data,
            this.count = this._infoArray.length;
            var r = PetManager.getBagMap(!1);
            if (this.clearResultItems(), this.resultItems = [], 89 == PetFightModel.type || 102 == PetFightModel.type) r = [],
            egret.callLater(this.touchHandle, this);
            else if (66 == PetFightModel.type && 0 == this._infoArray.length) {
                r = [];
                var s = DragonbonesUtil.createAnimate("H5_shengli_ske_json", "H5_shengli_tex_json", "H5_shengli_tex_png", "H5_shengli");
                s.x = .5 * egret.lifecycle.stage.stageWidth,
                s.y = .5 * egret.lifecycle.stage.stageHeight,
                s.scaleX = s.scaleY = .6,
                this.addChild(s),
                DragonbonesUtil.play(s, "H5_shengli", 1)
            }
            for (var n = 0; n < r.length; n++) {
                var o = {};
                for (o.catchTime = r[n].catchTime, e = 0; e < this._infoArray.length; e++) if (this._infoArray[e].catchTime == r[n].catchTime) {
                    o.v = this._infoArray[e];
                    break
                }
                var a = new t.BattleResultItem(o);
                this.resultItems.push(a),
                this["sp" + (n + 1)].parent.addChild(a),
                a.x = this["sp" + (n + 1)].x,
                a.y = this["sp" + (n + 1)].y,
                a.alpha = 0,
                this.alphaAnim(a, 60 * n)
            }
        },
        i.prototype.alphaAnim = function(t, e) {
            egret.Tween.get(t).wait(e).to({
                alpha: 1
            },
            300)
        },
        i.prototype.clearResultItems = function() {
            if (this.resultItems) for (var t = 0; t < this.resultItems.length; t++) this.resultItems[t].destroy(),
            this.resultItems[t] = null;
            this.resultItems = null
        },
        i.prototype.destroy = function() {
            FightManager.isFighting = !1,
            DisplayUtil.removeAllChild(LevelManager.fightLevel),
            this.clearResultItems(),
            this.removeEvent(),
            e.prototype.destroy.call(this)
        },
        i.prototype.touchHandle = function(t) {
            FightManager.isFighting = !1,
            e.prototype.onClose.call(this),
            EventManager.dispatchEvent(new PetFightEvent(PetFightEvent.ALARM_CLICK, CountExpPanelManager.overData)),
            AwardManager.resume(),
            AchieveManager.resumeShowNotice()
        },
        i.prototype.addEvent = function() {
            this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touchHandle, this)
        },
        i.prototype.removeEvent = function() {
            this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.touchHandle, this)
        },
        i
    } (BaseModule);
    t.BattleResultPanel = e,
    __reflect(e.prototype, "battleResultPanel.BattleResultPanel")
} (battleResultPanel || (battleResultPanel = {}));
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
__awaiter = this && this.__awaiter ||
function(t, e, i, n) {
    return new(i || (i = Promise))(function(a, r) {
        function s(t) {
            try {
                h(n.next(t))
            } catch(e) {
                r(e)
            }
        }
        function o(t) {
            try {
                h(n["throw"](t))
            } catch(e) {
                r(e)
            }
        }
        function h(t) {
            t.done ? a(t.value) : new i(function(e) {
                e(t.value)
            }).then(s, o)
        }
        h((n = n.apply(t, e || [])).next())
    })
},
__generator = this && this.__generator ||
function(t, e) {
    function i(t) {
        return function(e) {
            return n([t, e])
        }
    }
    function n(i) {
        if (a) throw new TypeError("Generator is already executing.");
        for (; h;) try {
            if (a = 1, r && (s = r[2 & i[0] ? "return": i[0] ? "throw": "next"]) && !(s = s.call(r, i[1])).done) return s;
            switch (r = 0, s && (i = [0, s.value]), i[0]) {
            case 0:
            case 1:
                s = i;
                break;
            case 4:
                return h.label++,
                {
                    value: i[1],
                    done: !1
                };
            case 5:
                h.label++,
                r = i[1],
                i = [0];
                continue;
            case 7:
                i = h.ops.pop(),
                h.trys.pop();
                continue;
            default:
                if (s = h.trys, !(s = s.length > 0 && s[s.length - 1]) && (6 === i[0] || 2 === i[0])) {
                    h = 0;
                    continue
                }
                if (3 === i[0] && (!s || i[1] > s[0] && i[1] < s[3])) {
                    h.label = i[1];
                    break
                }
                if (6 === i[0] && h.label < s[1]) {
                    h.label = s[1],
                    s = i;
                    break
                }
                if (s && h.label < s[2]) {
                    h.label = s[2],
                    h.ops.push(i);
                    break
                }
                s[2] && h.ops.pop(),
                h.trys.pop();
                continue
            }
            i = e.call(t, h)
        } catch(n) {
            i = [6, n],
            r = 0
        } finally {
            a = s = 0
        }
        if (5 & i[0]) throw i[1];
        return {
            value: i[0] ? i[1] : void 0,
            done: !0
        }
    }
    var a, r, s, o, h = {
        label: 0,
        sent: function() {
            if (1 & s[0]) throw s[1];
            return s[1]
        },
        trys: [],
        ops: []
    };
    return o = {
        next: i(0),
        "throw": i(1),
        "return": i(2)
    },
    "function" == typeof Symbol && (o[Symbol.iterator] = function() {
        return this
    }),
    o
},
battleResultPanel; !
function(t) {
    var e = function(t) {
        function e(e) {
            var i = t.call(this) || this;
            return i._isObj = e,
            i.skinName = BattleresultpeakjihadpanelSkin,
            i
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this),
            this.showData(),
            this.addEvent(),
            this.addChildAt(FightOverController.fightBg, 0)
        },
        e.prototype.destroy = function() {
            this.removeEvent(),
            t.prototype.destroy.call(this),
            FightManager.isFighting = !1
        },
        e.prototype.showData = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var t = this;
                return __generator(this,
                function(e) {
                    return this.fail.visible = this.draw.visible = this.win.visible = !1,
                    null != this._isObj ? this._isObj.isDraw ? this.draw.visible = !0 : this._isObj.isWin ? this.win.visible = !0 : this.fail.visible = !0 : Alarm.show("_isObj为空"),
                    this.icon.source = "",
                    KTool.getMultiValue([PeakJihadController.levelForever],
                    function(e) {
                        var i = e[0],
                        n = i & Math.pow(2, 16) - 1,
                        a = e[0] >> 16 & Math.pow(2, 16) - 1,
                        r = PeakJihadController.RATINGS_NAME[n] + a + (n >= 4 ? "星": "分");
                        t.icon.source = ClientConfig.getPeakjihadLevelPath(n + 1),
                        t.star.visible = n > 3,
                        t.txt.text = r,
                        t._isObj.isDraw
                    }),
                    [2]
                })
            })
        },
        e.prototype.addEvent = function() {
            this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapImageButton, this)
        },
        e.prototype.removeEvent = function() {
            this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapImageButton, this)
        },
        e.prototype.onTouchTapImageButton = function(e) {
            t.prototype.onClose.call(this),
            ModuleManager.showModule("peakJihadFirstPage", ["peakJihadFirstPage"], "sport")
        },
        e
    } (BaseModule);
    t.BattleResultPeakJiHadPanel = e,
    __reflect(e.prototype, "battleResultPanel.BattleResultPeakJiHadPanel")
} (battleResultPanel || (battleResultPanel = {}));
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
battleResultPanel; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t._petIds = [],
            t.skinName = BattleResultTestMachineSkin,
            t
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this._list.itemRenderer = t.BattleResultTestMachineItem,
            this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touchHandle, this),
            this.initData(),
            this.addChildAt(FightOverController.fightBg, 0)
        },
        i.prototype.initData = function() {
            var t = this;
            SocketConnection.sendByQueue(41405, [PetFightModel.type],
            function(e) {
                var i = e.data;
                i.position = 0,
                t._maxDamage = i.readUnsignedInt(),
                t._totalDamage = i.readUnsignedInt(),
                t._averageDamage = i.readUnsignedInt(),
                t._maxDmgPetId = i.readUnsignedInt(),
                t._maxHurt = i.readUnsignedInt(),
                t._totalHurt = i.readUnsignedInt(),
                t._averageHurt = i.readUnsignedInt(),
                t._maxHurtPetId = i.readUnsignedInt();
                var n = i.readUnsignedInt();
                t._petIds = [];
                for (var a = 0; n > a; a++) t._petIds.push(i.readUnsignedInt());
                t.updateView()
            })
        },
        i.prototype.updateView = function() {
            this.txt_0.text = this._totalDamage + "",
            this.txt_1.text = this._maxDamage + "",
            this.txt_2.text = this._averageDamage + "",
            this.txt_3.text = this._totalHurt + "",
            this.txt_4.text = this._maxHurt + "",
            this.txt_5.text = this._averageHurt + "";
            var t = this._list.layout;
            t.paddingLeft = 67 * (6 - this._petIds.length),
            this._list.layout = t,
            this._list.dataProvider = new eui.ArrayCollection(this._petIds),
            this._list.validateNow();
            for (var e = 0; e < this._list.numChildren; e++) {
                var i = this._list.getChildAt(e);
                i.frame_gold.visible = this._maxDmgPetId == i.data,
                i.frame_blue.visible = this._maxHurtPetId == i.data
            }
        },
        i.prototype.touchHandle = function() {
            e.prototype.onClose.call(this),
            AwardManager.resume(),
            AchieveManager.resumeShowNotice(),
            EventManager.dispatchEvent(new PetFightEvent(PetFightEvent.ALARM_CLICK, CountExpPanelManager.overData))
        },
        i.prototype.destroy = function() {
            e.prototype.destroy.call(this),
            this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.touchHandle, this),
            FightManager.isFighting = !1
        },
        i
    } (BaseModule);
    t.BattleResultTestMachine = e,
    __reflect(e.prototype, "battleResultPanel.BattleResultTestMachine")
} (battleResultPanel || (battleResultPanel = {}));
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
battleResultPanel; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.skinName = BattleResultTestMachineItemSkin,
            e
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this),
            this.once(egret.Event.REMOVED_FROM_STAGE, this.destroy, this)
        },
        e.prototype.dataChanged = function() {
            t.prototype.dataChanged.call(this),
            this._petId = this.data,
            this.updateView()
        },
        e.prototype.updateView = function() {
            this.txt_name.text = PetXMLInfo.getName(this._petId),
            this.head.source = ClientConfig.getPetHeadPath(this._petId)
        },
        e.prototype.destroy = function() {
            this.removeChildren()
        },
        e
    } (eui.ItemRenderer);
    t.BattleResultTestMachineItem = e,
    __reflect(e.prototype, "battleResultPanel.BattleResultTestMachineItem")
} (battleResultPanel || (battleResultPanel = {}));
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
generateEUI.paths["resource/eui_skins/BattlefailresultSkin.exml"] = window.BattlefailresultSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "bg1", "btn3", "btn2", "btn1", "btn0", "bg3", "content"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this.content_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.alpha = .6,
        t.percentHeight = 100,
        t.source = "battleFailResult_bg_png",
        t.percentWidth = 100,
        t.x = 0,
        t.y = 0,
        t
    },
    i.content_i = function() {
        var t = new eui.Group;
        return this.content = t,
        t.height = 308,
        t.percentWidth = 100,
        t.x = 0,
        t.y = 91,
        t.elementsContent = [this.bg1_i(), this._Group1_i()],
        t
    },
    i.bg1_i = function() {
        var t = new eui.Image;
        return this.bg1 = t,
        t.height = 451,
        t.source = "battleFailResult_bg1_png",
        t.percentWidth = 100,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.horizontalCenter = -.5,
        t.width = 579,
        t.y = 0,
        t.elementsContent = [this.btn3_i(), this.btn2_i(), this.btn1_i(), this.btn0_i(), this.bg3_i(), this._Label1_i()],
        t
    },
    i.btn3_i = function() {
        var t = new eui.Image;
        return this.btn3 = t,
        t.height = 115,
        t.source = "battleFailResult_btn3_png",
        t.width = 86,
        t.x = 493,
        t.y = 180,
        t
    },
    i.btn2_i = function() {
        var t = new eui.Image;
        return this.btn2 = t,
        t.height = 115,
        t.source = "battleFailResult_btn2_png",
        t.width = 86,
        t.x = 329,
        t.y = 180,
        t
    },
    i.btn1_i = function() {
        var t = new eui.Image;
        return this.btn1 = t,
        t.height = 115,
        t.source = "battleFailResult_btn1_png",
        t.width = 86,
        t.x = 164,
        t.y = 180,
        t
    },
    i.btn0_i = function() {
        var t = new eui.Image;
        return this.btn0 = t,
        t.height = 115,
        t.source = "battleFailResult_btn0_png",
        t.width = 86,
        t.x = 0,
        t.y = 180,
        t
    },
    i.bg3_i = function() {
        var t = new eui.Image;
        return this.bg3 = t,
        t.height = 63,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "battleFailResult_bg3_png",
        t.width = 142,
        t.x = 223,
        t.y = 66,
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "点击屏幕关闭",
        t.textColor = 8631282,
        t.x = 241,
        t.y = 346,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/BattleResultItemSkin.exml"] = window.BattleResultItemSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "icon", "txtCount", "txtName", "grpContent"],
        this.height = 98,
        this.width = 132,
        this.elementsContent = [this.grpContent_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.grpContent_i = function() {
        var t = new eui.Group;
        return this.grpContent = t,
        t.anchorOffsetX = 66,
        t.anchorOffsetY = 47,
        t.x = 66,
        t.y = 47,
        t.elementsContent = [this._Group1_i(), this.txtCount_i(), this.txtName_i()],
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.height = 80,
        t.width = 80,
        t.x = 26,
        t.y = 0,
        t.elementsContent = [this.bg_i(), this.icon_i()],
        t
    },
    i.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.height = 80,
        t.source = "common_icon_bg_style_1_png",
        t.width = 80,
        t.x = 0,
        t.y = 0,
        t
    },
    i.icon_i = function() {
        var t = new eui.Image;
        return this.icon = t,
        t.horizontalCenter = 0,
        t.source = "",
        t.verticalCenter = 0,
        t
    },
    i.txtCount_i = function() {
        var t = new eui.Label;
        return this.txtCount = t,
        t.fontFamily = "黑体",
        t.size = 20,
        t.text = "99",
        t.textAlign = "right",
        t.textColor = 16777215,
        t.width = 80,
        t.x = 23,
        t.y = 58,
        t
    },
    i.txtName_i = function() {
        var t = new eui.Label;
        return this.txtName = t,
        t.fontFamily = "黑体",
        t.size = 16,
        t.text = "道具名字名字名字",
        t.textAlign = "center",
        t.textColor = 16777215,
        t.width = 132,
        t.x = 0,
        t.y = 81,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/BattleresultpeakjihadpanelSkin.exml"] = window.BattleresultpeakjihadpanelSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "iconbg", "txt1", "icon", "star", "txt", "fail", "draw", "win"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this._Group2_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.alpha = .6,
        t.percentHeight = 100,
        t.source = "battleFailResult_bg_png",
        t.percentWidth = 100,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Group2_i = function() {
        var t = new eui.Group;
        return t.horizontalCenter = 0,
        t.verticalCenter = -61,
        t.visible = !0,
        t.elementsContent = [this._Image1_i(), this.iconbg_i(), this.txt1_i(), this.icon_i(), this._Group1_i(), this.fail_i(), this.draw_i(), this.win_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 71,
        t.horizontalCenter = 25,
        t.source = "battleResult_titlebg_png",
        t.visible = !0,
        t.width = 338,
        t.y = 63,
        t
    },
    i.iconbg_i = function() {
        var t = new eui.Image;
        return this.iconbg = t,
        t.height = 270,
        t.scale9Grid = new egret.Rectangle(7, 7, 6, 6),
        t.source = "battleResultPeakJiHadPanel_iconbg_png",
        t.visible = !0,
        t.width = 1136,
        t.x = 0,
        t.y = 89,
        t
    },
    i.txt1_i = function() {
        var t = new eui.Label;
        return this.txt1 = t,
        t.fontFamily = "REEJI",
        t.size = 16,
        t.text = "点击屏幕关闭",
        t.textColor = 16777215,
        t.x = 515,
        t.y = 366,
        t
    },
    i.icon_i = function() {
        var t = new eui.Image;
        return this.icon = t,
        t.height = 144,
        t.source = "battleResultPeakJiHadPanel_icon_png",
        t.width = 144,
        t.x = 496,
        t.y = 132,
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.height = 50,
        t.horizontalCenter = -30,
        t.y = 285.11,
        t.layout = this._HorizontalLayout1_i(),
        t.elementsContent = [this.star_i(), this.txt_i()],
        t
    },
    i._HorizontalLayout1_i = function() {
        var t = new eui.HorizontalLayout;
        return t.verticalAlign = "middle",
        t
    },
    i.star_i = function() {
        var t = new eui.Image;
        return this.star = t,
        t.height = 45,
        t.source = "battleResultPeakJiHadPanel_star_png",
        t.visible = !0,
        t.width = 47,
        t.x = 0,
        t.y = 0,
        t
    },
    i.txt_i = function() {
        var t = new eui.Label;
        return this.txt = t,
        t.fontFamily = "REEJI",
        t.horizontalCenter = 26.5,
        t.size = 40,
        t.text = "黄铜99",
        t.textColor = 16305756,
        t.y = 0,
        t
    },
    i.fail_i = function() {
        var t = new eui.Image;
        return this.fail = t,
        t.height = 106,
        t.source = "battleResultPeakJiHadPanel_fail_png",
        t.visible = !1,
        t.width = 1136,
        t.x = 0,
        t.y = 37,
        t
    },
    i.draw_i = function() {
        var t = new eui.Image;
        return this.draw = t,
        t.height = 106,
        t.source = "battleResultPeakJiHadPanel_draw_png",
        t.visible = !1,
        t.width = 1136,
        t.x = 0,
        t.y = 37,
        t
    },
    i.win_i = function() {
        var t = new eui.Image;
        return this.win = t,
        t.horizontalCenter = 0,
        t.source = "battleResult_title_png",
        t.verticalCenter = -105,
        t.visible = !0,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/BattleresultSkin.exml"] = window.BattleresultSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "resultbg", "sp1", "sp4", "sp5", "sp2", "sp3", "sp6", "txt", "title", "content"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this.content_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.alpha = .7,
        t.percentHeight = 100,
        t.percentWidth = 100,
        t.scale9Grid = new egret.Rectangle(1, 1, 10, 10),
        t.source = "battleFailResult_bg_png",
        t.visible = !0,
        t.percentWidth = 100,
        t.x = 0,
        t.y = 0,
        t
    },
    i.content_i = function() {
        var t = new eui.Group;
        return this.content = t,
        t.percentWidth = 100,
        t.x = 0,
        t.y = 90,
        t.elementsContent = [this._Image1_i(), this.resultbg_i(), this._Group1_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 71,
        t.horizontalCenter = 25,
        t.source = "battleResult_titlebg_png",
        t.width = 338,
        t.y = 26,
        t
    },
    i.resultbg_i = function() {
        var t = new eui.Image;
        return this.resultbg = t,
        t.height = 372,
        t.source = "battleResult_resultbg_png",
        t.percentWidth = 100,
        t.x = 0,
        t.y = 14,
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.horizontalCenter = -2,
        t.y = 0,
        t.elementsContent = [this.sp1_i(), this.sp4_i(), this.sp5_i(), this.sp2_i(), this.sp3_i(), this.sp6_i(), this.txt_i(), this.title_i()],
        t
    },
    i.sp1_i = function() {
        var t = new eui.Image;
        return this.sp1 = t,
        t.height = 107,
        t.source = "",
        t.width = 274,
        t.x = 0,
        t.y = 108,
        t
    },
    i.sp4_i = function() {
        var t = new eui.Image;
        return this.sp4 = t,
        t.height = 107,
        t.source = "",
        t.width = 274,
        t.x = 0,
        t.y = 242,
        t
    },
    i.sp5_i = function() {
        var t = new eui.Image;
        return this.sp5 = t,
        t.height = 107,
        t.source = "",
        t.width = 274,
        t.x = 335,
        t.y = 242,
        t
    },
    i.sp2_i = function() {
        var t = new eui.Image;
        return this.sp2 = t,
        t.height = 107,
        t.source = "",
        t.width = 274,
        t.x = 335,
        t.y = 108,
        t
    },
    i.sp3_i = function() {
        var t = new eui.Image;
        return this.sp3 = t,
        t.height = 107,
        t.source = "",
        t.width = 274,
        t.x = 670,
        t.y = 108,
        t
    },
    i.sp6_i = function() {
        var t = new eui.Image;
        return this.sp6 = t,
        t.height = 107,
        t.source = "",
        t.width = 274,
        t.x = 670,
        t.y = 242,
        t
    },
    i.txt_i = function() {
        var t = new eui.Label;
        return this.txt = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "点击屏幕关闭",
        t.textColor = 8631282,
        t.x = 418,
        t.y = 396,
        t
    },
    i.title_i = function() {
        var t = new eui.Image;
        return this.title = t,
        t.height = 96,
        t.source = "battleResult_title_png",
        t.width = 173,
        t.x = 393,
        t.y = 0,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/BattleresultspitemSkin.exml"] = window.BattleresultspitemSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["head", "hp", "txtName", "lev", "txt1", "txt", "icon", "txt_attr", "grp_attr", "proBg", "pro_now", "pro_ex", "exp", "up", "grp_anim"],
        this.height = 107,
        this.width = 274,
        this.elementsContent = [this._Image1_i(), this._Image2_i(), this._Image3_i(), this.head_i(), this._Image4_i(), this.hp_i(), this.txtName_i(), this.lev_i(), this.grp_attr_i(), this.proBg_i(), this.pro_now_i(), this.pro_ex_i(), this.exp_i(), this.up_i(), this.grp_anim_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 101,
        t.source = "common_pet_head_bg_size_110_134_png",
        t.width = 82,
        t.x = 3,
        t.y = 4,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 101,
        t.source = "common_pet_head_bg_null_size_110_134_png",
        t.width = 82,
        t.x = 3,
        t.y = 4,
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.height = 20,
        t.source = "common_pet_head_name_bg_110_134_png",
        t.width = 80,
        t.x = 4,
        t.y = 85,
        t
    },
    i.head_i = function() {
        var t = new eui.Image;
        return this.head = t,
        t.height = 80,
        t.source = "",
        t.width = 80,
        t.x = 4,
        t.y = 5,
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.height = 3,
        t.source = "battleResultSpItem_hpbg_png",
        t.width = 80,
        t.x = 4,
        t.y = 82,
        t
    },
    i.hp_i = function() {
        var t = new eui.Image;
        return this.hp = t,
        t.height = 3,
        t.source = "battleResultSpItem_hp_png",
        t.width = 80,
        t.x = 4,
        t.y = 82,
        t
    },
    i.txtName_i = function() {
        var t = new eui.Label;
        return this.txtName = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = -93,
        t.size = 14,
        t.text = "精灵名字",
        t.textColor = 16777215,
        t.y = 88,
        t
    },
    i.lev_i = function() {
        var t = new eui.Label;
        return this.lev = t,
        t.fontFamily = "MFShangHei",
        t.size = 20,
        t.text = "Lv.100",
        t.textColor = 12834813,
        t.x = 97,
        t.y = 9,
        t
    },
    i.grp_attr_i = function() {
        var t = new eui.Group;
        return this.grp_attr = t,
        t.x = 97,
        t.y = 73,
        t.elementsContent = [this._Image5_i(), this.txt1_i(), this.txt_i(), this.icon_i(), this._Image6_i(), this.txt_attr_i()],
        t
    },
    i._Image5_i = function() {
        var t = new eui.Image;
        return t.height = 22,
        t.source = "battleResultSpItem_texture_star_png",
        t.width = 22,
        t.x = 79,
        t.y = 0,
        t
    },
    i.txt1_i = function() {
        var t = new eui.Label;
        return this.txt1 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "20",
        t.textColor = 6153817,
        t.x = 157,
        t.y = 2,
        t
    },
    i.txt_i = function() {
        var t = new eui.Label;
        return this.txt = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "200",
        t.textColor = 4187130,
        t.x = 103,
        t.y = 2,
        t
    },
    i.icon_i = function() {
        var t = new eui.Image;
        return this.icon = t,
        t.height = 18,
        t.source = "",
        t.width = 18,
        t.x = 0,
        t.y = 2,
        t
    },
    i._Image6_i = function() {
        var t = new eui.Image;
        return t.height = 18,
        t.source = "battleResultSpItem_icon_up_png",
        t.width = 18,
        t.x = 140,
        t.y = 2,
        t
    },
    i.txt_attr_i = function() {
        var t = new eui.Label;
        return this.txt_attr = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "攻击",
        t.textColor = 4187130,
        t.x = 22,
        t.y = 3,
        t
    },
    i.proBg_i = function() {
        var t = new eui.Image;
        return this.proBg = t,
        t.height = 5,
        t.source = "battleResultSpItem_proBg_png",
        t.width = 164,
        t.x = 98,
        t.y = 31,
        t
    },
    i.pro_now_i = function() {
        var t = new eui.Image;
        return this.pro_now = t,
        t.height = 5,
        t.source = "battleResultSpItem_pro_png",
        t.visible = !0,
        t.width = 164,
        t.x = 98,
        t.y = 31,
        t
    },
    i.pro_ex_i = function() {
        var t = new eui.Image;
        return this.pro_ex = t,
        t.height = 5,
        t.source = "battleResultSpItem_pro_blue_png",
        t.visible = !0,
        t.width = 164,
        t.x = 98,
        t.y = 31,
        t
    },
    i.exp_i = function() {
        var t = new eui.Label;
        return this.exp = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "EXP+999999",
        t.textColor = 12834813,
        t.x = 97,
        t.y = 50,
        t
    },
    i.up_i = function() {
        var t = new eui.Image;
        return this.up = t,
        t.height = 21,
        t.source = "battleResultSpItem_up_png",
        t.width = 35,
        t.x = 154,
        t.y = 7,
        t
    },
    i.grp_anim_i = function() {
        var t = new eui.Group;
        return this.grp_anim = t,
        t.x = 98,
        t.y = 33,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/BattleResultTestMachineItemSkin.exml"] = window.BattleResultTestMachineItemSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["txt_name", "head", "frame_gold", "frame_blue"],
        this.height = 123,
        this.width = 127,
        this.elementsContent = [this.txt_name_i(), this._Image1_i(), this._Image2_i(), this.head_i(), this.frame_gold_i(), this.frame_blue_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.txt_name_i = function() {
        var t = new eui.Label;
        return this.txt_name = t,
        t.horizontalCenter = .5,
        t.lineSpacing = 3,
        t.size = 16,
        t.text = "精灵名称精灵名称",
        t.textColor = 16777215,
        t.touchEnabled = !1,
        t.y = 107,
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 100,
        t.source = "common_avatar_bg_size_100_100_png",
        t.width = 100,
        t.x = 13,
        t.y = 0,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 100,
        t.source = "common_pet_head_bg_null_size_100_100_png",
        t.width = 100,
        t.x = 13,
        t.y = 0,
        t
    },
    i.head_i = function() {
        var t = new eui.Image;
        return this.head = t,
        t.height = 100,
        t.width = 100,
        t.x = 13,
        t.y = 0,
        t
    },
    i.frame_gold_i = function() {
        var t = new eui.Image;
        return this.frame_gold = t,
        t.height = 116,
        t.source = "battle_result_test_machine_frame_gold_png",
        t.width = 116,
        t.x = 5,
        t.y = -8,
        t
    },
    i.frame_blue_i = function() {
        var t = new eui.Image;
        return this.frame_blue = t,
        t.height = 114,
        t.source = "battle_result_test_machine_frame_blue_png",
        t.width = 114,
        t.x = 6,
        t.y = -7,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/BattleResultTestMachineSkin.exml"] = window.BattleResultTestMachineSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["txt_0", "txt_1", "txt_2", "txt_3", "txt_4", "txt_5", "_list", "content"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this._Image1_i(), this.content_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.alpha = .6,
        t.percentHeight = 100,
        t.source = "battleFailResult_bg_png",
        t.percentWidth = 100,
        t.x = 0,
        t.y = 0,
        t
    },
    i.content_i = function() {
        var t = new eui.Group;
        return this.content = t,
        t.percentWidth = 100,
        t.x = 0,
        t.y = 64,
        t.elementsContent = [this._Image2_i(), this._Image3_i(), this._Image4_i(), this._Group1_i(), this._list_i(), this._Image5_i(), this._Label7_i(), this._Label8_i(), this._Image6_i()],
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 71,
        t.horizontalCenter = 25,
        t.source = "battleResult_titlebg_png",
        t.visible = !1,
        t.width = 338,
        t.y = 35,
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.height = 378,
        t.source = "battleResult_resultbg_png",
        t.verticalCenter = 19.5,
        t.visible = !0,
        t.percentWidth = 100,
        t.x = 0,
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.height = 137,
        t.source = "battleResult_iconbg_png",
        t.percentWidth = 100,
        t.x = 0,
        t.y = 300,
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.horizontalCenter = -30.5,
        t.y = 327,
        t.elementsContent = [this.txt_0_i(), this._Label1_i(), this.txt_1_i(), this._Label2_i(), this.txt_2_i(), this._Label3_i(), this.txt_3_i(), this._Label4_i(), this.txt_4_i(), this._Label5_i(), this.txt_5_i(), this._Label6_i()],
        t
    },
    i.txt_0_i = function() {
        var t = new eui.Label;
        return this.txt_0 = t,
        t.fontFamily = "MFShangHei",
        t.lineSpacing = 3,
        t.size = 18,
        t.text = "暂无数据",
        t.textColor = 16773461,
        t.touchEnabled = !1,
        t.x = 155,
        t.y = 2,
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.lineSpacing = 3,
        t.size = 18,
        t.text = "测试总伤害：",
        t.textColor = 7901643,
        t.touchEnabled = !1,
        t.x = 0,
        t.y = 0,
        t
    },
    i.txt_1_i = function() {
        var t = new eui.Label;
        return this.txt_1 = t,
        t.fontFamily = "MFShangHei",
        t.lineSpacing = 3,
        t.size = 18,
        t.text = "暂无数据",
        t.textColor = 16773461,
        t.touchEnabled = !1,
        t.x = 155,
        t.y = 34,
        t
    },
    i._Label2_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.lineSpacing = 3,
        t.size = 18,
        t.text = "测试最大伤害：",
        t.textColor = 7901643,
        t.touchEnabled = !1,
        t.x = 0,
        t.y = 32,
        t
    },
    i.txt_2_i = function() {
        var t = new eui.Label;
        return this.txt_2 = t,
        t.fontFamily = "MFShangHei",
        t.lineSpacing = 3,
        t.size = 18,
        t.text = "暂无数据",
        t.textColor = 16773461,
        t.touchEnabled = !1,
        t.x = 155,
        t.y = 66,
        t
    },
    i._Label3_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.lineSpacing = 3,
        t.size = 18,
        t.text = "测试平均伤害：",
        t.textColor = 7901643,
        t.touchEnabled = !1,
        t.x = 0,
        t.y = 64,
        t
    },
    i.txt_3_i = function() {
        var t = new eui.Label;
        return this.txt_3 = t,
        t.fontFamily = "MFShangHei",
        t.lineSpacing = 3,
        t.size = 18,
        t.text = "暂无数据",
        t.textColor = 16773461,
        t.touchEnabled = !1,
        t.x = 575,
        t.y = 2,
        t
    },
    i._Label4_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.lineSpacing = 3,
        t.size = 18,
        t.text = "测试总承伤：",
        t.textColor = 7901643,
        t.touchEnabled = !1,
        t.x = 420,
        t.y = 0,
        t
    },
    i.txt_4_i = function() {
        var t = new eui.Label;
        return this.txt_4 = t,
        t.fontFamily = "MFShangHei",
        t.lineSpacing = 3,
        t.size = 18,
        t.text = "暂无数据",
        t.textColor = 16773461,
        t.touchEnabled = !1,
        t.x = 575,
        t.y = 34,
        t
    },
    i._Label5_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.lineSpacing = 3,
        t.size = 18,
        t.text = "测试最大承伤：",
        t.textColor = 7901643,
        t.touchEnabled = !1,
        t.x = 420,
        t.y = 32,
        t
    },
    i.txt_5_i = function() {
        var t = new eui.Label;
        return this.txt_5 = t,
        t.fontFamily = "MFShangHei",
        t.lineSpacing = 3,
        t.size = 18,
        t.text = "暂无数据",
        t.textColor = 16773461,
        t.touchEnabled = !1,
        t.x = 575,
        t.y = 66,
        t
    },
    i._Label6_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.lineSpacing = 3,
        t.size = 18,
        t.text = "测试平均承伤：",
        t.textColor = 7901643,
        t.touchEnabled = !1,
        t.x = 420,
        t.y = 64,
        t
    },
    i._list_i = function() {
        var t = new eui.List;
        return this._list = t,
        t.height = 123,
        t.horizontalCenter = 0,
        t.width = 798,
        t.y = 149,
        t.layout = this._HorizontalLayout1_i(),
        t
    },
    i._HorizontalLayout1_i = function() {
        var t = new eui.HorizontalLayout;
        return t.gap = 7,
        t
    },
    i._Image5_i = function() {
        var t = new eui.Image;
        return t.height = 20,
        t.horizontalCenter = 0,
        t.source = "battle_result_test_machine_titleBg_png",
        t.width = 768,
        t.y = 115,
        t
    },
    i._Label7_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.horizontalCenter = -2,
        t.lineSpacing = 3,
        t.size = 16,
        t.text = "测试精灵",
        t.textColor = 4175861,
        t.touchEnabled = !1,
        t.y = 117,
        t
    },
    i._Label8_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "REEJI",
        t.horizontalCenter = -4,
        t.lineSpacing = 3,
        t.size = 16,
        t.text = "点击屏幕关闭",
        t.textColor = 16777215,
        t.touchEnabled = !1,
        t.y = 441,
        t
    },
    i._Image6_i = function() {
        var t = new eui.Image;
        return t.horizontalCenter = 0,
        t.source = "battleResult_title_png",
        t.verticalCenter = -171,
        t.visible = !1,
        t
    },
    e
} (eui.Skin);