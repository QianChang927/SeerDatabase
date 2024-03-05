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
godofWarGaiaSuperevo; !
function(e) {
    var t = function(t) {
        function i() {
            var i = t.call(this) || this;
            return i.service.setValues([e.GodOfWarGaiaSuperevoConst.forever_level_state], []),
            i.init([{
                panelName: e.GodOfWarGaiaSuperevoConst.MAINPANEL,
                isMain: !0
            }]),
            i
        }
        return __extends(i, t),
        i
    } (BasicMultPanelModule);
    e.GodofWarGaiaSuperevo = t,
    __reflect(t.prototype, "godofWarGaiaSuperevo.GodofWarGaiaSuperevo")
} (godofWarGaiaSuperevo || (godofWarGaiaSuperevo = {}));
var __reflect = this && this.__reflect ||
function(e, t, i) {
    e.__class__ = t,
    i ? i.push(t) : i = [t],
    e.__types__ = e.__types__ ? i.concat(e.__types__) : i
},
godofWarGaiaSuperevo; !
function(e) {
    var t = function() {
        function e() {}
        return e.MAINPANEL = "godofWarGaiaSuperevo.GodofWarGaiaSuperevoMainPanel",
        e.CMD = 41810,
        e.forever_level_state = 123344,
        e
    } ();
    e.GodOfWarGaiaSuperevoConst = t,
    __reflect(t.prototype, "godofWarGaiaSuperevo.GodOfWarGaiaSuperevoConst")
} (godofWarGaiaSuperevo || (godofWarGaiaSuperevo = {}));
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
__awaiter = this && this.__awaiter ||
function(e, t, i, n) {
    return new(i || (i = Promise))(function(a, o) {
        function r(e) {
            try {
                g(n.next(e))
            } catch(t) {
                o(t)
            }
        }
        function s(e) {
            try {
                g(n["throw"](e))
            } catch(t) {
                o(t)
            }
        }
        function g(e) {
            e.done ? a(e.value) : new i(function(t) {
                t(e.value)
            }).then(r, s)
        }
        g((n = n.apply(e, t || [])).next())
    })
},
__generator = this && this.__generator ||
function(e, t) {
    function i(e) {
        return function(t) {
            return n([e, t])
        }
    }
    function n(i) {
        if (a) throw new TypeError("Generator is already executing.");
        for (; g;) try {
            if (a = 1, o && (r = o[2 & i[0] ? "return": i[0] ? "throw": "next"]) && !(r = r.call(o, i[1])).done) return r;
            switch (o = 0, r && (i = [0, r.value]), i[0]) {
            case 0:
            case 1:
                r = i;
                break;
            case 4:
                return g.label++,
                {
                    value: i[1],
                    done: !1
                };
            case 5:
                g.label++,
                o = i[1],
                i = [0];
                continue;
            case 7:
                i = g.ops.pop(),
                g.trys.pop();
                continue;
            default:
                if (r = g.trys, !(r = r.length > 0 && r[r.length - 1]) && (6 === i[0] || 2 === i[0])) {
                    g = 0;
                    continue
                }
                if (3 === i[0] && (!r || i[1] > r[0] && i[1] < r[3])) {
                    g.label = i[1];
                    break
                }
                if (6 === i[0] && g.label < r[1]) {
                    g.label = r[1],
                    r = i;
                    break
                }
                if (r && g.label < r[2]) {
                    g.label = r[2],
                    g.ops.push(i);
                    break
                }
                r[2] && g.ops.pop(),
                g.trys.pop();
                continue
            }
            i = t.call(e, g)
        } catch(n) {
            i = [6, n],
            o = 0
        } finally {
            a = r = 0
        }
        if (5 & i[0]) throw i[1];
        return {
            value: i[0] ? i[1] : void 0,
            done: !0
        }
    }
    var a, o, r, s, g = {
        label: 0,
        sent: function() {
            if (1 & r[0]) throw r[1];
            return r[1]
        },
        trys: [],
        ops: []
    };
    return s = {
        next: i(0),
        "throw": i(1),
        "return": i(2)
    },
    "function" == typeof Symbol && (s[Symbol.iterator] = function() {
        return this
    }),
    s
},
godofWarGaiaSuperevo; !
function(e) {
    var t = function(t) {
        function i() {
            var e = t.call(this) || this;
            return e.canDown = !0,
            e.new_monster_level_id = 146,
            e.allTeState = new Array(3),
            e.drawing = !1,
            e.skinName = GodofwargaiasuperevoSkin,
            e
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            var e = this;
            t.prototype.childrenCreated.call(this),
            this.initOldPveBtnClose(166, this, "godofwargaiasuperevo_imgtitle_png",
            function() {
                e.service.closeModule()
            },
            this,
            function() {}),
            this.grpBack.title.y = 10,
            this.grpBack.btnHelp.x = 275,
            this.addEvents(),
            PetFactorCollectionManager.getAllData().then(function() {
                var t = PetFactorCollectionManager.checkPetIdIndexIsCollection(e.new_monster_level_id);
                e.btnCollect.source = t ? "godofwargaiasuperevo_imge_collected_png": "godofwargaiasuperevo_imge_collect_png"
            })
        },
        i.prototype.addEvents = function() {
            var t = this;
            EventManager.addEventListener(SocketEvent.SOCKETRECONNECT,
            function() {
                t.drawing || t.update()
            },
            this),
            ImageButtonUtil.add(this.petBagBtn,
            function() {
                t.service.showPetBag()
            },
            this),
            ImageButtonUtil.add(this.cureBtn,
            function() {
                PetManager.cureAll()
            },
            this),
            ImageButtonUtil.add(this.petInfoBtn,
            function() {
                PetManager.showPetManualInfo(1845, 1)
            },
            this),
            ImageButtonUtil.add(this.chouquFightBtn,
            function() {
                t.draw()
            },
            this),
            ImageButtonUtil.add(this.reSetBtn,
            function() {
                MainManager.actorInfo.coins >= 2e5 ? (t.chouquFightBtn.visible = !0, t.reSetBtn.visible = !1, t.fightBtn.visible = !1, t.draw()) : BubblerManager.getInstance().showText("剩余赛尔豆不足，无法重新抽取")
            },
            this),
            ImageButtonUtil.add(this.fightBtn,
            function() {
                FightManager.fightNoMapBoss(18514 + t.curBossIndex - 1, void 0, void 0, void 0,
                function(i) {
                    t.service.updateValues().then(function() {
                        for (var i = t.service.getValue(e.GodOfWarGaiaSuperevoConst.forever_level_state), n = 0, a = 0; 6 > a; a++) BitUtil.getBit(i, a) > 0 && n++;
                        0 == BitUtil.getBit(i, t.curBossIndex - 1) ? BubblerManager.getInstance().showText("未按照条件击败，请再次尝试！") : n >= 6 && Alarm.show("成功突破瓶颈，获得了超进化必备道具！快去给盖亚超进化吧！"),
                        t.update()
                    })
                })
            },
            this),
            ImageButtonUtil.add(this.diwuSkillBtn,
            function() {
                var e, i, n = !1,
                a = PetManager.getBagMap();
                for (i = 0; i < a.length; i++) if (1845 == a[i].id) {
                    n = !0,
                    e = PetManager.getPetInfo(a[i].catchTime);
                    break
                }
                n ? null == e.hideSKill ? PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(240461, 1,
                    function() {
                        SocketConnection.sendWithCallback(46131,
                        function(i) {
                            PetManager.upDateBagPetInfo(e.catchTime),
                            Alert.show("您已成功开启第五技能，是否前往背包查看？",
                            function() {
                                t.service.showPetBag()
                            }),
                            t.update()
                        },
                        e.catchTime)
                    })
                },
                t) : BubblerManager.getInstance().showText("您已开启过第五技能了!") : BubblerManager.getInstance().showText("背包里没有战神盖亚!")
            },
            this),
            ImageButtonUtil.add(this.chaojinhuaBtn,
            function() {
                if (t.isHavePet) return void BubblerManager.getInstance().showText("您已经拥有战神盖亚了!");
                if (!t.isHaveItem) return void BubblerManager.getInstance().showText("没有超进化道具战神之力！");
                var e, i, n = !1,
                a = PetManager.getBagMap();
                for (i = 0; i < a.length; i++) if (260 == a[i].id || 261 == a[i].id) {
                    n = !0,
                    e = a[i].catchTime;
                    break
                }
                1 == n ? SocketConnection.sendByQueue(CommandID.PET_SUPER_EVOLUTION, [e, 66],
                function() {
                    BubblerManager.getInstance().showText("恭喜，你的盖亚已成功超进化了！"),
                    Alert.show("超进化成功，是否前往背包查看？",
                    function() {
                        t.service.showPetBag()
                    }),
                    t.service.updateValues().then(function() {
                        t.update()
                    }),
                    PetManager.upDateBagPetInfo(e)
                }) : Alert.show("请将盖亚放入出战背包",
                function() {
                    t.service.showPetBag()
                })
            },
            this),
            ImageButtonUtil.add(this.aKeyGetBtn,
            function() {
                PetManager.updateBagInfo(function() {
                    if (0 != PetManager.containsBagForID(1845) || 0 != PetManager.containsStorageForID(1845) || t.isHavePet) BubblerManager.getInstance().showText("您已经拥有战神盖亚了!");
                    else {
                        if (t.isHaveItem) return void BubblerManager.getInstance().showText("您已经拥有战神盖亚超进化道具了!");
                        PayManager.doPayFunc(function() {
                            KTool.buyProductByCallback(240460, 1,
                            function() {
                                KTool.doExchange(2506, 1,
                                function() {
                                    t.service.updateValues().then(function() {
                                        BubblerManager.getInstance().showText("获得超进化道具战神之力，快去超进化吧！"),
                                        t.update()
                                    })
                                })
                            })
                        },
                        t)
                    }
                })
            },
            this),
            ImageButtonUtil.add(this.btnCollect, this.collectPet, this)
        },
        i.prototype.collectPet = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var e;
                return __generator(this,
                function(t) {
                    switch (t.label) {
                    case 0:
                        return this.canDown ? (this.canDown = !1, e = !PetFactorCollectionManager.checkPetIdIndexIsCollection(this.new_monster_level_id), this.btnCollect.source = e ? "godofwargaiasuperevo_imge_collected_png": "godofwargaiasuperevo_imge_collect_png", [4, PetFactorCollectionManager.setCollection(this.new_monster_level_id, e)]) : (BubblerManager.getInstance().showText("请不要过快连续点击！"), [2]);
                    case 1:
                        return t.sent(),
                        this.canDown = !0,
                        [2]
                    }
                })
            })
        },
        i.prototype.update = function() {
            var t = this;
            this.txtCoin2.text = core.gameUtil.ConvertItemNumView(MainManager.actorInfo.coins),
            ItemManager.upDateCollection(1700021,
            function() {
                t.isHaveItem = 0 == ItemManager.getNumByID(1700021) ? !1 : !0;
                for (var i = t.service.getValue(e.GodOfWarGaiaSuperevoConst.forever_level_state), n = 0, a = 0; 6 > a; a++) BitUtil.getBit(i, a) && n++,
                t["imge_done_" + a].visible = BitUtil.getBit(i, a);
                t.curBossIndex = KTool.subByte(i, 8, 8),
                t.curBossIndex > 0 ? (t.imge_selected.visible = !0, t.imge_selected.x = t["limge_v_" + (t.curBossIndex - 1)].x - 8, t.imge_selected.y = t["limge_v_" + (t.curBossIndex - 1)].y - 8, t.chouquFightBtn.visible = !1, t.reSetBtn.visible = !0, t.fightBtn.visible = !0) : (t.imge_selected.visible = !1, t.chouquFightBtn.visible = !0, t.reSetBtn.visible = !1, t.fightBtn.visible = !1),
                n >= 6 || t.isHaveItem ? (t.chaojinhuaBtn.visible = !0, t.imge_selected.visible = !1, t.chouquFightBtn.visible = !1, t.reSetBtn.visible = !1, t.fightBtn.visible = !1, t.aKeyGetBtn.visible = !1) : t.chaojinhuaBtn.visible = !1,
                t.imge_getFlag.visible = !1,
                PetManager.checkMultiPet([1845],
                function(e) {
                    t.isHavePet = e[0] > 0 ? !0 : !1,
                    t.imge_flag.visible = t.isHavePet,
                    t.isHavePet && (t.aKeyGetBtn.visible = !1, t.chouquFightBtn.visible = !1, t.reSetBtn.visible = !1, t.fightBtn.visible = !1, t.chaojinhuaBtn.visible = !0),
                    t.diwuSkillBtn.visible = t.isHavePet,
                    DisplayUtil.setEnabled(t.chaojinhuaBtn, !t.isHavePet, t.isHavePet);
                    var i, n, a = !1,
                    o = PetManager.getBagMap();
                    for (n = 0; n < o.length; n++) if (1845 == o[n].id) {
                        a = !0,
                        i = PetManager.getPetInfo(o[n].catchTime);
                        break
                    }
                    a && null != i.hideSKill && (t.imge_getFlag.visible = !0, DisplayUtil.setEnabled(t.diwuSkillBtn, !1, !0))
                })
            })
        },
        i.prototype.draw = function() {
            var t = this;
            this.drawing = !0,
            SocketConnection.sendByQueue(e.GodOfWarGaiaSuperevoConst.CMD, [14, 1],
            function() {
                t.service.updateValues().then(function() {
                    var i = t.service.getValue(e.GodOfWarGaiaSuperevoConst.forever_level_state),
                    n = KTool.subByte(i, 8, 8);
                    t.randomAnim(n)
                })
            })
        },
        i.prototype.randomAnim = function(e) {
            var t = this;
            this.imge_selected.visible = !0,
            this.imge_selected.x = this.limge_v_0.x - 8,
            this.imge_selected.y = this.limge_v_0.y - 8;
            var i = {};
            i.index = 1,
            this.touchChildren = !1,
            this.tweenanim = egret.Tween.get(i, {
                onChange: function() {
                    var e = Math.floor(i.index) % 6;
                    0 == e && (e = 6),
                    t.imge_selected.x = t["limge_v_" + (e - 1)].x - 8,
                    t.imge_selected.y = t["limge_v_" + (e - 1)].y - 8
                }
            }).to({
                index: 24 + e
            },
            4500, egret.Ease.quadInOut).call(function() {
                t.drawing = !1,
                t.chouquFightBtn.visible = !1,
                t.touchChildren = !0,
                t.service.updateValues().then(function() {
                    t.update()
                })
            })
        },
        i.prototype.destroy = function() {
            t.prototype.destroy.call(this),
            EventManager.removeAll(this),
            ImageButtonUtil.removeAll(this)
        },
        i
    } (BasicPanel);
    e.GodofWarGaiaSuperevoMainPanel = t,
    __reflect(t.prototype, "godofWarGaiaSuperevo.GodofWarGaiaSuperevoMainPanel")
} (godofWarGaiaSuperevo || (godofWarGaiaSuperevo = {}));
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
generateEUI.paths["resource/eui_skins/GodofwargaiasuperevoSkin.exml"] = window.GodofwargaiasuperevoSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["bg", "img_di2", "txtCoin2", "iconCoin", "gr_coins", "imge_flag", "petInfoBtn", "imge_collected", "btnCollect", "petBagBtn", "cureBtn", "gr_left", "imgTitle", "aKeyGetBtn", "diwuSkillBtn", "imge_getFlag", "limge_v_0", "limge_v_1", "limge_v_2", "limge_v_3", "limge_v_4", "limge_v_5", "imge_done_0", "imge_done_1", "imge_done_2", "imge_done_3", "imge_done_4", "imge_done_5", "imge_selected", "reSetBtn", "fightBtn", "chouquFightBtn", "chaojinhuaBtn", "imge_desc"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this.gr_coins_i(), this.gr_left_i(), this.imgTitle_i(), this._Group1_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i.bg_i = function() {
        var e = new eui.Image;
        return this.bg = e,
        e.source = "godofwargaiasuperevo_bg_jpg",
        e.width = 1136,
        e.x = 0,
        e.y = 0,
        e
    },
    i.gr_coins_i = function() {
        var e = new eui.Group;
        return this.gr_coins = e,
        e.x = 961,
        e.y = 10,
        e.elementsContent = [this.img_di2_i(), this.txtCoin2_i(), this.iconCoin_i()],
        e
    },
    i.img_di2_i = function() {
        var e = new eui.Image;
        return this.img_di2 = e,
        e.source = "godofwargaiasuperevo_img_di2_png",
        e.x = 22,
        e.y = 3,
        e
    },
    i.txtCoin2_i = function() {
        var e = new eui.Label;
        return this.txtCoin2 = e,
        e.anchorOffsetX = 0,
        e.anchorOffsetY = 0,
        e.fontFamily = "MFShangHei",
        e.height = 17,
        e.size = 18.0101510119682,
        e.text = "99999",
        e.textAlign = "center",
        e.textColor = 12834813,
        e.width = 104,
        e.x = 48,
        e.y = 6,
        e
    },
    i.iconCoin_i = function() {
        var e = new eui.Image;
        return this.iconCoin = e,
        e.source = "godofwargaiasuperevo_iconcoin_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.gr_left_i = function() {
        var e = new eui.Group;
        return this.gr_left = e,
        e.x = 29,
        e.y = 265,
        e.elementsContent = [this.imge_flag_i(), this.petInfoBtn_i(), this.imge_collected_i(), this.btnCollect_i(), this.petBagBtn_i(), this.cureBtn_i()],
        e
    },
    i.imge_flag_i = function() {
        var e = new eui.Image;
        return this.imge_flag = e,
        e.source = "godofwargaiasuperevo_imge_flag_png",
        e.x = 204,
        e.y = 27,
        e
    },
    i.petInfoBtn_i = function() {
        var e = new eui.Image;
        return this.petInfoBtn = e,
        e.source = "godofwargaiasuperevo_petinfobtn_png",
        e.x = 10,
        e.y = 296,
        e
    },
    i.imge_collected_i = function() {
        var e = new eui.Image;
        return this.imge_collected = e,
        e.source = "godofwargaiasuperevo_imge_collected_png",
        e.visible = !1,
        e.x = 11,
        e.y = 236,
        e
    },
    i.btnCollect_i = function() {
        var e = new eui.Image;
        return this.btnCollect = e,
        e.source = "godofwargaiasuperevo_imge_collect_png",
        e.x = 6,
        e.y = 228,
        e
    },
    i.petBagBtn_i = function() {
        var e = new eui.Image;
        return this.petBagBtn = e,
        e.source = "godofwargaiasuperevo_petbagbtn_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.cureBtn_i = function() {
        var e = new eui.Image;
        return this.cureBtn = e,
        e.source = "godofwargaiasuperevo_curebtn_png",
        e.x = 0,
        e.y = 90,
        e
    },
    i.imgTitle_i = function() {
        var e = new eui.Image;
        return this.imgTitle = e,
        e.source = "godofwargaiasuperevo_imgtitle_png",
        e.visible = !1,
        e.x = 122,
        e.y = 9,
        e
    },
    i._Group1_i = function() {
        var e = new eui.Group;
        return e.anchorOffsetX = 0,
        e.anchorOffsetY = 0,
        e.height = 639,
        e.right = 0,
        e.width = 578,
        e.y = 0,
        e.elementsContent = [this.aKeyGetBtn_i(), this.diwuSkillBtn_i(), this.imge_getFlag_i(), this.limge_v_0_i(), this.limge_v_1_i(), this.limge_v_2_i(), this.limge_v_3_i(), this.limge_v_4_i(), this.limge_v_5_i(), this.imge_done_0_i(), this.imge_done_1_i(), this.imge_done_2_i(), this.imge_done_3_i(), this.imge_done_4_i(), this.imge_done_5_i(), this.imge_selected_i(), this.reSetBtn_i(), this.fightBtn_i(), this.chouquFightBtn_i(), this.chaojinhuaBtn_i(), this.imge_desc_i()],
        e
    },
    i.aKeyGetBtn_i = function() {
        var e = new eui.Image;
        return this.aKeyGetBtn = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "godofwargaiasuperevo_akeygetbtn_png",
        e.x = 472,
        e.y = 559,
        e
    },
    i.diwuSkillBtn_i = function() {
        var e = new eui.Image;
        return this.diwuSkillBtn = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "godofwargaiasuperevo_diwuskillbtn_png",
        e.x = 469,
        e.y = 555,
        e
    },
    i.imge_getFlag_i = function() {
        var e = new eui.Image;
        return this.imge_getFlag = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "godofwargaiasuperevo_imge_getflag_png",
        e.x = 482,
        e.y = 578,
        e
    },
    i.limge_v_0_i = function() {
        var e = new eui.Image;
        return this.limge_v_0 = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "godofwargaiasuperevo_limge_v_0_png",
        e.x = 54,
        e.y = 150,
        e
    },
    i.limge_v_1_i = function() {
        var e = new eui.Image;
        return this.limge_v_1 = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "godofwargaiasuperevo_limge_v_1_png",
        e.x = 214,
        e.y = 150,
        e
    },
    i.limge_v_2_i = function() {
        var e = new eui.Image;
        return this.limge_v_2 = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "godofwargaiasuperevo_limge_v_2_png",
        e.x = 374,
        e.y = 150,
        e
    },
    i.limge_v_3_i = function() {
        var e = new eui.Image;
        return this.limge_v_3 = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "godofwargaiasuperevo_limge_v_3_png",
        e.x = 374,
        e.y = 330,
        e
    },
    i.limge_v_4_i = function() {
        var e = new eui.Image;
        return this.limge_v_4 = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "godofwargaiasuperevo_limge_v_4_png",
        e.x = 214,
        e.y = 330,
        e
    },
    i.limge_v_5_i = function() {
        var e = new eui.Image;
        return this.limge_v_5 = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "godofwargaiasuperevo_limge_v_5_png",
        e.x = 54,
        e.y = 330,
        e
    },
    i.imge_done_0_i = function() {
        var e = new eui.Image;
        return this.imge_done_0 = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "godofwargaiasuperevo_imge_done_png",
        e.x = 65,
        e.y = 161,
        e
    },
    i.imge_done_1_i = function() {
        var e = new eui.Image;
        return this.imge_done_1 = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "godofwargaiasuperevo_imge_done_png",
        e.x = 223,
        e.y = 161,
        e
    },
    i.imge_done_2_i = function() {
        var e = new eui.Image;
        return this.imge_done_2 = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "godofwargaiasuperevo_imge_done_png",
        e.x = 382,
        e.y = 161,
        e
    },
    i.imge_done_3_i = function() {
        var e = new eui.Image;
        return this.imge_done_3 = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "godofwargaiasuperevo_imge_done_png",
        e.x = 383,
        e.y = 341,
        e
    },
    i.imge_done_4_i = function() {
        var e = new eui.Image;
        return this.imge_done_4 = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "godofwargaiasuperevo_imge_done_png",
        e.x = 222,
        e.y = 341,
        e
    },
    i.imge_done_5_i = function() {
        var e = new eui.Image;
        return this.imge_done_5 = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "godofwargaiasuperevo_imge_done_png",
        e.x = 62,
        e.y = 341,
        e
    },
    i.imge_selected_i = function() {
        var e = new eui.Image;
        return this.imge_selected = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "godofwargaiasuperevo_imge_selected_png",
        e.x = 46,
        e.y = 142,
        e
    },
    i.reSetBtn_i = function() {
        var e = new eui.Image;
        return this.reSetBtn = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "godofwargaiasuperevo_resetbtn_png",
        e.x = 146,
        e.y = 529,
        e
    },
    i.fightBtn_i = function() {
        var e = new eui.Image;
        return this.fightBtn = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "godofwargaiasuperevo_fightbtn_png",
        e.x = 300,
        e.y = 529,
        e
    },
    i.chouquFightBtn_i = function() {
        var e = new eui.Image;
        return this.chouquFightBtn = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "godofwargaiasuperevo_chouqufightbtn_png",
        e.visible = !0,
        e.x = 223,
        e.y = 529,
        e
    },
    i.chaojinhuaBtn_i = function() {
        var e = new eui.Image;
        return this.chaojinhuaBtn = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "godofwargaiasuperevo_chaojinhuabtn_png",
        e.visible = !1,
        e.x = 177,
        e.y = 518,
        e
    },
    i.imge_desc_i = function() {
        var e = new eui.Image;
        return this.imge_desc = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "godofwargaiasuperevo_imge_desc_png",
        e.x = 87,
        e.y = 67,
        e
    },
    t
} (eui.Skin);