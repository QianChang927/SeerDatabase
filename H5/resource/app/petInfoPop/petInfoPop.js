var __reflect = this && this.__reflect ||
function(t, e, i) {
    t.__class__ = e,
    i ? i.push(e) : i = [e],
    t.__types__ = t.__types__ ? i.concat(t.__types__) : i
},
petInfoPop; !
function(t) {
    var e = function() {
        function t() {}
        return t.START_CHANGE_SKILL = "petInfoPop.startChangeSkill",
        t.END_CHANGE_SKILL = "petInfoPop.endChangeSkill",
        t.CLOSE_POP_AND_MODULE = "petInfoPop.closePopAndModule",
        t.SKILL_CHANGE_OVER = "petInfoPop.skillChangeOver",
        t
    } ();
    t.EventConst = e,
    __reflect(e.prototype, "petInfoPop.EventConst")
} (petInfoPop || (petInfoPop = {}));
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
petInfoPop; !
function(t) {
    var e = function(e) {
        function i(i) {
            var n = e.call(this) || this,
            o = PopViewManager.createDefaultStyleObject();
            if (i.popBGAlpha && (o.maskShapeStyle.maskAlpha = i.popBGAlpha), i.petInfo) {
                var r = new t.Pop(i.petInfo, n, i);
                i.buttonInfo && r.setButton(i.buttonInfo),
                PopViewManager.getInstance().openView(r, o)
            } else i.catchTime && PetManager.upDateBagPetInfo(i.catchTime,
            function(e) {
                var r = new t.Pop(e, n, i);
                i.buttonInfo && r.setButton(i.buttonInfo),
                PopViewManager.getInstance().openView(r, o)
            });
            return n
        }
        return __extends(i, e),
        i
    } (BaseModule);
    t.PetInfoPop = e,
    __reflect(e.prototype, "petInfoPop.PetInfoPop")
} (petInfoPop || (petInfoPop = {}));
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
    return new(i || (i = Promise))(function(o, r) {
        function a(t) {
            try {
                s(n.next(t))
            } catch(e) {
                r(e)
            }
        }
        function l(t) {
            try {
                s(n["throw"](t))
            } catch(e) {
                r(e)
            }
        }
        function s(t) {
            t.done ? o(t.value) : new i(function(e) {
                e(t.value)
            }).then(a, l)
        }
        s((n = n.apply(t, e || [])).next())
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
        if (o) throw new TypeError("Generator is already executing.");
        for (; s;) try {
            if (o = 1, r && (a = r[2 & i[0] ? "return": i[0] ? "throw": "next"]) && !(a = a.call(r, i[1])).done) return a;
            switch (r = 0, a && (i = [0, a.value]), i[0]) {
            case 0:
            case 1:
                a = i;
                break;
            case 4:
                return s.label++,
                {
                    value: i[1],
                    done: !1
                };
            case 5:
                s.label++,
                r = i[1],
                i = [0];
                continue;
            case 7:
                i = s.ops.pop(),
                s.trys.pop();
                continue;
            default:
                if (a = s.trys, !(a = a.length > 0 && a[a.length - 1]) && (6 === i[0] || 2 === i[0])) {
                    s = 0;
                    continue
                }
                if (3 === i[0] && (!a || i[1] > a[0] && i[1] < a[3])) {
                    s.label = i[1];
                    break
                }
                if (6 === i[0] && s.label < a[1]) {
                    s.label = a[1],
                    a = i;
                    break
                }
                if (a && s.label < a[2]) {
                    s.label = a[2],
                    s.ops.push(i);
                    break
                }
                a[2] && s.ops.pop(),
                s.trys.pop();
                continue
            }
            i = e.call(t, s)
        } catch(n) {
            i = [6, n],
            r = 0
        } finally {
            o = a = 0
        }
        if (5 & i[0]) throw i[1];
        return {
            value: i[0] ? i[1] : void 0,
            done: !0
        }
    }
    var o, r, a, l, s = {
        label: 0,
        sent: function() {
            if (1 & a[0]) throw a[1];
            return a[1]
        },
        trys: [],
        ops: []
    };
    return l = {
        next: i(0),
        "throw": i(1),
        "return": i(2)
    },
    "function" == typeof Symbol && (l[Symbol.iterator] = function() {
        return this
    }),
    l
},
petInfoPop; !
function(t) {
    var e = function(e) {
        function i(t, i, n) {
            var o = e.call(this) || this;
            return o.skinName = "PetPop",
            o.petInfo = t,
            o.module = i,
            o.data = n,
            o
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            var e = this;
            this.groupSkill.visible = !1,
            this.imgMask.visible = !1,
            this.imgMask.addEventListener(egret.TouchEvent.TOUCH_TAP,
            function() {
                EventManager.dispatchEventWith(t.EventConst.END_CHANGE_SKILL)
            },
            this),
            this.init(),
            EventManager.addEventListener(t.EventConst.CLOSE_POP_AND_MODULE, this.hide, this),
            EventManager.addEventListener(t.EventConst.END_CHANGE_SKILL,
            function() {
                e.imgMask.visible = !1,
                gsap.to(e.groupSkill, {
                    x: 500,
                    alpha: 0,
                    duration: .3,
                    onComplete: function() {
                        e.groupSkill.x = 93,
                        e.groupSkill.alpha = 1,
                        e.groupSkill.visible = !1
                    }
                }),
                PetManager.upDateBagPetInfo(e.petInfo.catchTime,
                function(i) {
                    e.petInfo = i,
                    EventManager.dispatchEventWith(t.EventConst.SKILL_CHANGE_OVER, !1, {
                        catchTime: e.petInfo.catchTime,
                        newPetInfo: e.petInfo
                    }),
                    e.groupSkillItem.removeChildren();
                    for (var n = 0,
                    o = e.petInfo.skillArray; n < o.length; n++) {
                        var r = o[n];
                        r.petInfo = e.petInfo,
                        e.groupSkillItem.addChild(new t.SkillItem(r, e.data.canChangeSkill))
                    }
                    if (e.petInfo.hideSKill) {
                        var a = void 0;
                        if (4 == SkillXMLInfo.getCategory(e.petInfo.hideSKill.id)) a = ClientConfig.getpettypeticon("prop");
                        else {
                            var l = SkillXMLInfo.getTypeID(e.petInfo.hideSKill.id);
                            a = ClientConfig.getpettypeticon(l + "")
                        }
                        e.imgFifthSkillIcon.source = a,
                        e.txtFifthSkillName.text = e.petInfo.hideSKill.name,
                        e.txtFifthSkill.text = "威力:" + e.petInfo.hideSKill.damage + "    PP:" + e.petInfo.hideSKill.pp + "/" + e.petInfo.hideSKill.maxPP
                    }
                    ImageButtonUtil.remove(e.btnChange),
                    ImageButtonUtil.remove(e.groupFifthSkill),
                    ImageButtonUtil.add(e.btnChange, e.showGroupFifthSkill, e),
                    ImageButtonUtil.add(e.groupFifthSkill,
                    function() {
                        tipsPop.TipsPop.openSkillPop({
                            id: e.petInfo.hideSKill.id
                        })
                    },
                    e, !1, !1)
                })
            },
            this)
        },
        i.prototype.init = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var e, i, n, o, r, a, l, s, h, p, u, _, f, g, c, I, a, m, d = this;
                return __generator(this,
                function(x) {
                    switch (x.label) {
                    case 0:
                        return this.petInfo instanceof PetStorage2015PetInfo ? (e = this, [4, PetManager.UpdateBagPetInfoAsynce(this.petInfo.catchTime)]) : [3, 2];
                    case 1:
                        e.petInfo = x.sent(),
                        x.label = 2;
                    case 2:
                        for (this.txtLV.text = this.petInfo.level + "", this.txtTalent.text = this.petInfo.dv + "", this.txtNature.text = NatureXMLInfo.getName(this.petInfo.nature), i = PetManager.getPetEffect(this.petInfo), this.txtSNature.text = i ? PetEffectXMLInfo.getEffect(i.effectID, i.args) : "无", this.txtAttack1.text = this.petInfo.attack + "", this.txtSpeed1.text = this.petInfo.speed + "", this.txtDefence1.text = this.petInfo.defence + "", this.txtSAttack1.text = this.petInfo.s_a + "", this.txtHealth1.text = this.petInfo.maxHp + "", this.txtSDefence1.text = this.petInfo.s_d + "", this.txtAttack2.text = this.petInfo.ev_attack + "", this.txtSpeed2.text = this.petInfo.ev_sp + "", this.txtDefence2.text = this.petInfo.ev_defence + "", this.txtSAttack2.text = this.petInfo.ev_sa + "", this.txtHealth2.text = this.petInfo.ev_hp + "", this.txtSDefence2.text = this.petInfo.ev_sd + "", this.arrMarkId = [], n = [void 0, this.petInfo.abilityMark, this.petInfo.skillMark, this.petInfo.commonMark], this.arrMarkId[1] = CountermarkXMLInfo.getMarkId(this.petInfo.abilityMark), this.arrMarkId[2] = CountermarkXMLInfo.getMarkId(this.petInfo.skillMark), this.arrMarkId[3] = CountermarkXMLInfo.getMarkId(this.petInfo.commonMark), this.imgMark1.source = this.arrMarkId[1] ? CountermarkXMLInfo.getIconURL(this.arrMarkId[1]) : "pet_info_pop_pet_pop_imgadd1_png", this.imgMark2.source = this.arrMarkId[2] ? CountermarkXMLInfo.getIconURL(this.arrMarkId[2]) : "pet_info_pop_pet_pop_imgadd1_png", this.imgMark3.source = this.arrMarkId[3] ? CountermarkXMLInfo.getIconURL(this.arrMarkId[3]) : this.petInfo.commonMarkActived ? "pet_info_pop_pet_pop_imgadd1_png": "pet_info_pop_pet_pop_imglock_png", this.arrMarkId[3] || this.petInfo.commonMarkActived || (this.imgMark3.width = 34, this.imgMark3.height = 39), o = function(t) {
                            ImageButtonUtil.add(r["imgMark" + t],
                            function() {
                                d.arrMarkId[t] && tipsPop.TipsPop.openCounterMarkPop({
                                    ins: CountermarkController.getInfoTemp(n[t])
                                })
                            },
                            r, !1, !1)
                        },
                        r = this, a = 1; 3 >= a; a++) o(a);
                        for (this.groupFifthSkill.visible = !!this.petInfo.hideSKill, this.petInfo.hideSKill && (l = void 0, 4 == SkillXMLInfo.getCategory(this.petInfo.hideSKill.id) ? l = ClientConfig.getpettypeticon("prop") : (s = SkillXMLInfo.getTypeID(this.petInfo.hideSKill.id), l = ClientConfig.getpettypeticon(s + "")), this.imgFifthSkillIcon.source = l, this.txtFifthSkillName.text = this.petInfo.hideSKill.name, this.txtFifthSkill.text = "威力:" + this.petInfo.hideSKill.damage + "    PP:" + this.petInfo.hideSKill.pp + "/" + this.petInfo.hideSKill.maxPP, ImageButtonUtil.add(this.groupFifthSkill,
                        function() {
                            tipsPop.TipsPop.openSkillPop({
                                id: d.petInfo.hideSKill.id
                            })
                        },
                        this, !1, !1), ImageButtonUtil.add(this.btnChange, this.showGroupFifthSkill, this)), this.btnChange.visible = !1, h = PetXMLInfo.getAdditionFifthSkill(this.petInfo.id), h.length > 0 && this.petInfo.hideSKill && this.data.canChangeSkill && (this.btnChange.visible = !0), p = 0, u = this.petInfo.skillArray; p < u.length; p++) _ = u[p],
                        _.petInfo = this.petInfo,
                        this.groupSkillItem.addChild(new t.SkillItem(_, this.data.canChangeSkill));
                        if (EventManager.addEventListener(t.EventConst.START_CHANGE_SKILL, this.showGroupSkill, this), UICjsUtil.init(), UICjsUtil.start(), UICjsUtil.setContainer(this.groupPetAni), f = this.petInfo.id, this.petInfo.skinId > 0 && (f = PetSkinXMLInfo.getSkinInfo(this.petInfo.skinId).skinPetId), UICjsUtil.GetShowPetMovieClip(f).then(function(t) {
                            UICjsUtil.showAnimate(t);
                            var e = PetXMLInfo.getPetOffset(d.petInfo.id);
                            t && (t.regX = e.x, t.regY = e.y),
                            d.touchEnabled = !1
                        }), this.imgAttri.source = ClientConfig.getpettypeticon(PetXMLInfo.getType(this.petInfo.id)), this.txtName.text = this.petInfo.name, this.imgEff.width = PetManager.checkShowEffectIcon(this.petInfo.id) ? 26 : 0, PetManager.checkPetInfoEffect(this.petInfo,
                        function(t) {
                            return __awaiter(d, void 0, void 0,
                            function() {
                                var e;
                                return __generator(this,
                                function(i) {
                                    switch (i.label) {
                                    case 0:
                                        return [4, KTool.checkHasAdvanced(this.petInfo)];
                                    case 1:
                                        return e = i.sent(),
                                        this.imgEff.width = t ? e ? 28 : 26 : 0,
                                        this.imgEff.source = e ? PetAdvanceXMLInfo.getAdvSignSource(this.petInfo.id) : "pet_info_pop_pet_pop_zstx_png",
                                        [2]
                                    }
                                })
                            })
                        },
                        this), ImageButtonUtil.add(this.imgEff,
                        function() {
                            ModuleManager.showModule("petEffDescPanel", ["pet_eff_desc_panel"], d.petInfo, "", AppDoStyle.NULL)
                        },
                        this), g = EffectIconControl.getAllEffctByPetId(this.petInfo.id), g && (c = g[0].kind, null != c)) for (I = c.toString().split(" ").map(Number), a = 0; a < I.length; a++) m = new eui.Image("pet_bag_tag" + (I[a] + 1) + "_png"),
                        this.groupTag.addChild(m);
                        return [2]
                    }
                })
            })
        },
        i.prototype.destroy = function() {
            e.prototype.destroy.call(this),
            EventManager.removeAll(this),
            ImageButtonUtil.removeAll(this),
            UICjsUtil.disposePetCls(this.petInfo.id),
            this.module.onClose()
        },
        i.prototype.showGroupSkill = function(e) {
            var i = this;
            this.groupSkill.visible = !0,
            egret.lifecycle.stage.touchChildren = !1,
            gsap.from(this.groupSkill, {
                x: 500,
                alpha: 0,
                duration: .3,
                onComplete: function() {
                    i.imgMask.visible = !0,
                    egret.lifecycle.stage.touchChildren = !0
                }
            }),
            this.groupAllSkill.removeChildren(),
            PetManager.getAllSkillCanUse(this.petInfo, [2, 5, 6]).then(function(n) {
                n = n.filter(function(t) {
                    return ! t.hasUse
                });
                for (var o = 0,
                r = n; o < r.length; o++) {
                    var a = r[o],
                    l = a.skillId,
                    s = SkillXMLInfo.getSkillObj(l),
                    h = {};
                    h.id = s.ID,
                    h.name = s.Name,
                    h.damage = s.Power || 0,
                    h.pp = s.MaxPP,
                    h.maxPP = s.MaxPP,
                    h.petInfo = i.petInfo,
                    a.info.Rec && (a.info.Tag ? h.tag = 2 + a.info.Tag: h.tag = 2),
                    i.groupAllSkill.addChild(new t.SkillItem(h, !1, {
                        oldSkillId: e.data,
                        catchTime: i.petInfo.catchTime
                    }))
                }
            })
        },
        i.prototype.showGroupFifthSkill = function() {
            var e = this;
            this.groupSkill.visible = !0,
            egret.lifecycle.stage.touchChildren = !1,
            gsap.from(this.groupSkill, {
                x: 500,
                alpha: 0,
                duration: .3,
                onComplete: function() {
                    e.imgMask.visible = !0,
                    egret.lifecycle.stage.touchChildren = !0
                }
            }),
            this.groupAllSkill.removeChildren(),
            PetManager.getAllSkillCanUse(this.petInfo, [1, 3, 4, 6]).then(function(i) {
                i = i.filter(function(t) {
                    return ! t.hasUse
                });
                for (var n = 0,
                o = i; n < o.length; n++) {
                    var r = o[n],
                    a = r.skillId,
                    l = SkillXMLInfo.getSkillObj(a),
                    s = {};
                    s.id = l.ID,
                    s.name = l.Name,
                    s.damage = l.Power || 0,
                    s.pp = l.MaxPP,
                    s.maxPP = l.MaxPP,
                    s.petInfo = e.petInfo,
                    r.info.Rec && (r.info.Tag ? s.tag = 2 + r.info.Tag: s.tag = 2),
                    e.groupAllSkill.addChild(new t.SkillItem(s, !1, {
                        oldSkillId: e.petInfo.hideSKill.id,
                        catchTime: e.petInfo.catchTime
                    },
                    !0))
                }
            })
        },
        i.prototype.setButton = function(t) {
            for (var e = this,
            i = function(t) {
                var i = new eui.Group;
                n.groupButton.addChild(i);
                var o = new eui.Image("common_btn_bg_" + (1 == t.buttonBG ? "yellow": "blue") + "_png");
                i.addChild(o);
                var r = new eui.Label(t.buttonName);
                i.addChild(r),
                r.size = 20,
                r.fontFamily = "REEJI",
                r.textColor = 1 == t.buttonBG ? 10246682 : 2976172,
                r.horizontalCenter = r.verticalCenter = 0,
                ImageButtonUtil.add(i,
                function() {
                    t.callback && t.callback.call(t.caller, e.petInfo, e)
                },
                n)
            },
            n = this, o = 0, r = t; o < r.length; o++) {
                var a = r[o];
                i(a)
            }
        },
        i
    } (PopView);
    t.Pop = e,
    __reflect(e.prototype, "petInfoPop.Pop")
} (petInfoPop || (petInfoPop = {}));
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
petInfoPop; !
function(t) {
    var e = function(e) {
        function i(t, i, n, o) {
            void 0 === i && (i = !1),
            void 0 === o && (o = !1);
            var r = e.call(this) || this;
            return r.skinName = "SkillItem",
            r.skillInfo = t,
            r.canChange = i,
            r.skillObj = n,
            r.isFifth = o,
            r
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            var e = this;
            this.cacheAsBitmap = !0,
            this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this);
            var i;
            if (4 == SkillXMLInfo.getCategory(this.skillInfo.id)) i = ClientConfig.getpettypeticon("prop");
            else {
                var n = SkillXMLInfo.getTypeID(this.skillInfo.id);
                i = ClientConfig.getpettypeticon(n + "")
            }
            this.imgIcon.source = i,
            this.txtName.text = this.skillInfo.name,
            this.txt.text = "威力:" + this.skillInfo.damage + "    PP:" + this.skillInfo.pp + "/" + this.skillInfo.maxPP,
            ImageButtonUtil.add(this.group,
            function() {
                var i = {};
                i.id = e.skillInfo.id,
                i.petInfo = e.skillInfo.petInfo,
                e.skillObj && (i.onChangeFun = function() {
                    e.isFifth ? SocketConnection.sendByQueue(CommandID.CHANGE_FIFTH_SKILL, [e.skillObj.catchTime, e.skillObj.oldSkillId, e.skillInfo.id],
                    function() {
                        EventManager.dispatchEventWith(t.EventConst.END_CHANGE_SKILL, !1, e.skillInfo.id)
                    }) : SocketConnection.sendByQueue(CommandID.PET_SKILL_SWICTH, [e.skillObj.catchTime, 1, 1, e.skillObj.oldSkillId, e.skillInfo.id],
                    function() {
                        EventManager.dispatchEventWith(t.EventConst.END_CHANGE_SKILL, !1, e.skillInfo.id)
                    })
                }),
                tipsPop.TipsPop.openSkillPop(i)
            },
            this, !1, !1),
            this.skillInfo.tag ? (this.imgTag.visible = !0, this.imgTag.source = "common_petSkill_tag" + this.skillInfo.tag + "_png") : this.imgTag.visible = !1,
            this.imgSelect.visible = !1,
            this.btnChange.visible = this.canChange,
            ImageButtonUtil.add(this.btnChange,
            function() {
                e.imgSelect.visible = !0,
                EventManager.dispatchEvent(new egret.Event(t.EventConst.START_CHANGE_SKILL, !1, !1, e.skillInfo.id))
            },
            this)
        },
        i.prototype.destroy = function() {
            EventManager.removeAll(this),
            ImageButtonUtil.removeAll(this)
        },
        i
    } (eui.Component);
    t.SkillItem = e,
    __reflect(e.prototype, "petInfoPop.SkillItem")
} (petInfoPop || (petInfoPop = {}));
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
generateEUI.paths["resource/eui_skins/PetPop.exml"] = window.PetPop = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["txtLV", "txtTalent", "txtNature", "txtSNature", "txtAttack1", "txtAttack2", "txtSpeed1", "txtSpeed2", "txtDefence1", "txtDefence2", "txtSAttack1", "txtSAttack2", "txtHealth1", "txtHealth2", "txtSDefence1", "txtSDefence2", "imgMark1", "imgMark2", "imgMark3", "imgFifthSkillIcon", "txtFifthSkillName", "txtFifthSkill", "groupFifthSkill", "btnChange", "groupSkillItem", "groupPetAni", "imgAttri", "txtName", "imgEff", "groupTag", "groupPet", "imgMask", "groupAllSkill", "groupSkill", "groupButton"],
        this.height = 529,
        this.width = 911,
        this.elementsContent = [this._Group3_i(), this.groupPet_i(), this.imgMask_i(), this.groupSkill_i(), this.groupButton_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Group3_i = function() {
        var t = new eui.Group;
        return t.visible = !0,
        t.x = 505,
        t.y = 1,
        t.elementsContent = [this._Image1_i(), this._Image2_i(), this._Label1_i(), this._Group1_i(), this._Group2_i(), this.groupFifthSkill_i(), this.btnChange_i(), this.groupSkillItem_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 490,
        t.scale9Grid = new egret.Rectangle(133, 163, 134, 61),
        t.source = "pet_info_pop_pet_pop_img1_png",
        t.visible = !0,
        t.width = 400,
        t.x = 6,
        t.y = 0,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "pet_info_pop_pet_pop_img2_png",
        t.x = 0,
        t.y = 11,
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "精灵信息",
        t.textColor = 16777215,
        t.x = 18,
        t.y = 18,
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.x = 21,
        t.y = 52,
        t.elementsContent = [this._Image3_i(), this._Image4_i(), this._Image5_i(), this._Image6_i(), this._Image7_i(), this._Image8_i(), this._Label2_i(), this.txtLV_i(), this._Label3_i(), this.txtTalent_i(), this._Label4_i(), this.txtNature_i(), this._Label5_i(), this.txtSNature_i(), this._Label6_i(), this.txtAttack1_i(), this.txtAttack2_i(), this._Label7_i(), this.txtSpeed1_i(), this.txtSpeed2_i(), this._Label8_i(), this.txtDefence1_i(), this.txtDefence2_i(), this._Label9_i(), this.txtSAttack1_i(), this.txtSAttack2_i(), this._Label10_i(), this.txtHealth1_i(), this.txtHealth2_i(), this._Label11_i(), this.txtSDefence1_i(), this.txtSDefence2_i()],
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "pet_info_pop_pet_pop_df_png",
        t.x = 75,
        t.y = 99,
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.source = "pet_info_pop_pet_pop_df_png",
        t.x = 328,
        t.y = 99,
        t
    },
    i._Image5_i = function() {
        var t = new eui.Image;
        return t.source = "pet_info_pop_pet_pop_df_png",
        t.x = 75,
        t.y = 131,
        t
    },
    i._Image6_i = function() {
        var t = new eui.Image;
        return t.source = "pet_info_pop_pet_pop_df_png",
        t.x = 328,
        t.y = 131,
        t
    },
    i._Image7_i = function() {
        var t = new eui.Image;
        return t.source = "pet_info_pop_pet_pop_df_png",
        t.x = 202,
        t.y = 99,
        t
    },
    i._Image8_i = function() {
        var t = new eui.Image;
        return t.source = "pet_info_pop_pet_pop_df_png",
        t.x = 202,
        t.y = 131,
        t
    },
    i._Label2_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "等级：",
        t.textColor = 11520511,
        t.x = 1,
        t.y = 0,
        t
    },
    i.txtLV_i = function() {
        var t = new eui.Label;
        return this.txtLV = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.textColor = 6027519,
        t.x = 49,
        t.y = 0,
        t
    },
    i._Label3_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "天赋：",
        t.textColor = 11520511,
        t.x = 1,
        t.y = 23,
        t
    },
    i.txtTalent_i = function() {
        var t = new eui.Label;
        return this.txtTalent = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.textColor = 6027519,
        t.x = 49,
        t.y = 23,
        t
    },
    i._Label4_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "性格：",
        t.textColor = 11520511,
        t.x = 2,
        t.y = 46,
        t
    },
    i.txtNature_i = function() {
        var t = new eui.Label;
        return this.txtNature = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.textColor = 6027519,
        t.x = 50,
        t.y = 46,
        t
    },
    i._Label5_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "特性：",
        t.textColor = 11520511,
        t.x = 1,
        t.y = 69,
        t
    },
    i.txtSNature_i = function() {
        var t = new eui.Label;
        return this.txtSNature = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.textColor = 6027519,
        t.x = 49,
        t.y = 69,
        t
    },
    i._Label6_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "攻击：",
        t.textColor = 11520511,
        t.x = 0,
        t.y = 97,
        t
    },
    i.txtAttack1_i = function() {
        var t = new eui.Label;
        return this.txtAttack1 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.textColor = 5962239,
        t.x = 40,
        t.y = 97,
        t
    },
    i.txtAttack2_i = function() {
        var t = new eui.Label;
        return this.txtAttack2 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.textColor = 16514895,
        t.x = 90,
        t.y = 97,
        t
    },
    i._Label7_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "速度：",
        t.textColor = 11520511,
        t.x = 127,
        t.y = 97,
        t
    },
    i.txtSpeed1_i = function() {
        var t = new eui.Label;
        return this.txtSpeed1 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.textColor = 5962239,
        t.x = 167,
        t.y = 97,
        t
    },
    i.txtSpeed2_i = function() {
        var t = new eui.Label;
        return this.txtSpeed2 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.textColor = 16514895,
        t.x = 217,
        t.y = 97,
        t
    },
    i._Label8_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "防御：",
        t.textColor = 11520511,
        t.x = 255,
        t.y = 97,
        t
    },
    i.txtDefence1_i = function() {
        var t = new eui.Label;
        return this.txtDefence1 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.textColor = 5962239,
        t.x = 293,
        t.y = 97,
        t
    },
    i.txtDefence2_i = function() {
        var t = new eui.Label;
        return this.txtDefence2 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.textColor = 16514895,
        t.x = 343,
        t.y = 97,
        t
    },
    i._Label9_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "特攻：",
        t.textColor = 11520511,
        t.x = 0,
        t.y = 129,
        t
    },
    i.txtSAttack1_i = function() {
        var t = new eui.Label;
        return this.txtSAttack1 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.textColor = 5962239,
        t.x = 40,
        t.y = 129,
        t
    },
    i.txtSAttack2_i = function() {
        var t = new eui.Label;
        return this.txtSAttack2 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.textColor = 16514895,
        t.x = 90,
        t.y = 129,
        t
    },
    i._Label10_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "体力： ",
        t.textColor = 11520511,
        t.x = 128,
        t.y = 129,
        t
    },
    i.txtHealth1_i = function() {
        var t = new eui.Label;
        return this.txtHealth1 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.textColor = 5962239,
        t.x = 168,
        t.y = 129,
        t
    },
    i.txtHealth2_i = function() {
        var t = new eui.Label;
        return this.txtHealth2 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.textColor = 16514895,
        t.x = 217,
        t.y = 129,
        t
    },
    i._Label11_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "特防：",
        t.textColor = 11520511,
        t.x = 254,
        t.y = 129,
        t
    },
    i.txtSDefence1_i = function() {
        var t = new eui.Label;
        return this.txtSDefence1 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.textColor = 5962239,
        t.x = 294,
        t.y = 129,
        t
    },
    i.txtSDefence2_i = function() {
        var t = new eui.Label;
        return this.txtSDefence2 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.textColor = 16514895,
        t.x = 343,
        t.y = 129,
        t
    },
    i._Group2_i = function() {
        var t = new eui.Group;
        return t.x = 152,
        t.y = 60,
        t.elementsContent = [this._Image9_i(), this._Image10_i(), this._Image11_i(), this.imgMark1_i(), this.imgMark2_i(), this.imgMark3_i()],
        t
    },
    i._Image9_i = function() {
        var t = new eui.Image;
        return t.source = "pet_info_pop_pet_pop_imgmarkbg1_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i._Image10_i = function() {
        var t = new eui.Image;
        return t.source = "pet_info_pop_pet_pop_imgmarkbg1_png",
        t.x = 79,
        t.y = 0,
        t
    },
    i._Image11_i = function() {
        var t = new eui.Image;
        return t.source = "pet_info_pop_pet_pop_imgmarkbg1_png",
        t.x = 158,
        t.y = 0,
        t
    },
    i.imgMark1_i = function() {
        var t = new eui.Image;
        return this.imgMark1 = t,
        t.height = 50,
        t.horizontalCenter = -80.5,
        t.verticalCenter = -.5,
        t.width = 50,
        t
    },
    i.imgMark2_i = function() {
        var t = new eui.Image;
        return this.imgMark2 = t,
        t.height = 50,
        t.horizontalCenter = -1.5,
        t.verticalCenter = -.5,
        t.width = 50,
        t
    },
    i.imgMark3_i = function() {
        var t = new eui.Image;
        return this.imgMark3 = t,
        t.height = 50,
        t.horizontalCenter = 77.5,
        t.verticalCenter = -.5,
        t.width = 50,
        t
    },
    i.groupFifthSkill_i = function() {
        var t = new eui.Group;
        return this.groupFifthSkill = t,
        t.x = 17,
        t.y = 405,
        t.elementsContent = [this._Image12_i(), this._Image13_i(), this.imgFifthSkillIcon_i(), this.txtFifthSkillName_i(), this.txtFifthSkill_i()],
        t
    },
    i._Image12_i = function() {
        var t = new eui.Image;
        return t.source = "pet_info_pop_pet_pop_imgskillrect_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i._Image13_i = function() {
        var t = new eui.Image;
        return t.source = "pet_info_pop_pet_pop_juxing_910_png",
        t.x = 64,
        t.y = 29,
        t
    },
    i.imgFifthSkillIcon_i = function() {
        var t = new eui.Image;
        return this.imgFifthSkillIcon = t,
        t.height = 25,
        t.width = 25,
        t.x = 22,
        t.y = 16,
        t
    },
    i.txtFifthSkillName_i = function() {
        var t = new eui.Label;
        return this.txtFifthSkillName = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.textAlign = "center",
        t.textColor = 15068927,
        t.width = 130,
        t.x = 144,
        t.y = 8,
        t
    },
    i.txtFifthSkill_i = function() {
        var t = new eui.Label;
        return this.txtFifthSkill = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.textAlign = "center",
        t.textColor = 6027519,
        t.width = 212,
        t.x = 100,
        t.y = 34,
        t
    },
    i.btnChange_i = function() {
        var t = new eui.Image;
        return this.btnChange = t,
        t.source = "pet_info_pop_pet_pop_btnrefresh_png",
        t.x = 371,
        t.y = 399,
        t
    },
    i.groupSkillItem_i = function() {
        var t = new eui.Group;
        return this.groupSkillItem = t,
        t.x = 6,
        t.y = 204,
        t.layout = this._TileLayout1_i(),
        t
    },
    i._TileLayout1_i = function() {
        var t = new eui.TileLayout;
        return t.horizontalGap = -5,
        t.requestedColumnCount = 2,
        t.verticalGap = -8,
        t
    },
    i.groupPet_i = function() {
        var t = new eui.Group;
        return this.groupPet = t,
        t.touchEnabled = !1,
        t.visible = !0,
        t.x = 0,
        t.y = 83,
        t.elementsContent = [this.groupPetAni_i(), this._Image14_i(), this._Group4_i(), this.groupTag_i()],
        t
    },
    i.groupPetAni_i = function() {
        var t = new eui.Group;
        return this.groupPetAni = t,
        t.height = 0,
        t.horizontalCenter = 50,
        t.touchChildren = !1,
        t.touchEnabled = !1,
        t.verticalCenter = -50,
        t.width = 0,
        t
    },
    i._Image14_i = function() {
        var t = new eui.Image;
        return t.horizontalCenter = 0,
        t.source = "pet_info_pop_pet_pop_img3_png",
        t.y = 382,
        t
    },
    i._Group4_i = function() {
        var t = new eui.Group;
        return t.horizontalCenter = 0,
        t.y = 388,
        t.layout = this._HorizontalLayout1_i(),
        t.elementsContent = [this.imgAttri_i(), this.txtName_i(), this.imgEff_i()],
        t
    },
    i._HorizontalLayout1_i = function() {
        var t = new eui.HorizontalLayout;
        return t.gap = 12,
        t.verticalAlign = "middle",
        t
    },
    i.imgAttri_i = function() {
        var t = new eui.Image;
        return this.imgAttri = t,
        t.height = 22,
        t.width = 22,
        t.x = 0,
        t.y = 0,
        t
    },
    i.txtName_i = function() {
        var t = new eui.Label;
        return this.txtName = t,
        t.fontFamily = "MFShangHei",
        t.size = 20,
        t.textColor = 16770655,
        t.x = 34,
        t.y = 2,
        t
    },
    i.imgEff_i = function() {
        var t = new eui.Image;
        return this.imgEff = t,
        t.x = 204,
        t.y = 1,
        t
    },
    i.groupTag_i = function() {
        var t = new eui.Group;
        return this.groupTag = t,
        t.horizontalCenter = 0,
        t.y = 424,
        t.layout = this._HorizontalLayout2_i(),
        t
    },
    i._HorizontalLayout2_i = function() {
        var t = new eui.HorizontalLayout;
        return t
    },
    i.imgMask_i = function() {
        var t = new eui.Rect;
        return this.imgMask = t,
        t.fillAlpha = 0,
        t.height = 3e3,
        t.visible = !1,
        t.width = 3e3,
        t.x = -1e3,
        t.y = -1e3,
        t
    },
    i.groupSkill_i = function() {
        var t = new eui.Group;
        return this.groupSkill = t,
        t.visible = !0,
        t.x = 93,
        t.y = 0,
        t.elementsContent = [this._Image15_i(), this._Scroller1_i()],
        t
    },
    i._Image15_i = function() {
        var t = new eui.Image;
        return t.height = 473,
        t.scale9Grid = new egret.Rectangle(7, 8, 6, 4),
        t.source = "pet_info_pop_pet_pop_img4_png",
        t.width = 405,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Scroller1_i = function() {
        var t = new eui.Scroller;
        return t.height = 455,
        t.width = 405,
        t.x = 3,
        t.y = 5,
        t.viewport = this.groupAllSkill_i(),
        t
    },
    i.groupAllSkill_i = function() {
        var t = new eui.Group;
        return this.groupAllSkill = t,
        t.layout = this._TileLayout2_i(),
        t
    },
    i._TileLayout2_i = function() {
        var t = new eui.TileLayout;
        return t.horizontalGap = -8,
        t.requestedColumnCount = 2,
        t.verticalGap = -8,
        t
    },
    i.groupButton_i = function() {
        var t = new eui.Group;
        return this.groupButton = t,
        t.horizontalCenter = 264.5,
        t.y = 477,
        t.layout = this._HorizontalLayout3_i(),
        t
    },
    i._HorizontalLayout3_i = function() {
        var t = new eui.HorizontalLayout;
        return t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/SkillItem.exml"] = window.SkillItem = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["imgSelect", "imgIcon", "imgTag", "txt", "txtName", "group", "btnChange"],
        this.elementsContent = [this.imgSelect_i(), this.group_i(), this.btnChange_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.imgSelect_i = function() {
        var t = new eui.Image;
        return this.imgSelect = t,
        t.source = "pet_info_pop_pet_pop_xzk_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.group_i = function() {
        var t = new eui.Group;
        return this.group = t,
        t.x = 11,
        t.y = 11,
        t.elementsContent = [this._Image1_i(), this.imgIcon_i(), this.imgTag_i(), this.txt_i(), this.txtName_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "pet_info_pop_pet_pop_52_png",
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t
    },
    i.imgIcon_i = function() {
        var t = new eui.Image;
        return this.imgIcon = t,
        t.height = 25,
        t.width = 25,
        t.x = 6,
        t.y = 12,
        t
    },
    i.imgTag_i = function() {
        var t = new eui.Image;
        return this.imgTag = t,
        t.height = 17,
        t.right = 0,
        t.visible = !0,
        t.width = 40,
        t
    },
    i.txt_i = function() {
        var t = new eui.Label;
        return this.txt = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = 0,
        t.size = 18,
        t.textColor = 6027519,
        t.y = 48,
        t
    },
    i.txtName_i = function() {
        var t = new eui.Label;
        return this.txtName = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = 0,
        t.size = 18,
        t.textColor = 15068927,
        t.y = 16,
        t
    },
    i.btnChange_i = function() {
        var t = new eui.Image;
        return this.btnChange = t,
        t.source = "pet_info_pop_pet_pop_btnrefresh_png",
        t.x = 170,
        t.y = 6,
        t
    },
    e
} (eui.Skin);