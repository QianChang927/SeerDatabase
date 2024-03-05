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
    return new(i || (i = Promise))(function(_, o) {
        function a(e) {
            try {
                s(n.next(e))
            } catch(t) {
                o(t)
            }
        }
        function r(e) {
            try {
                s(n["throw"](e))
            } catch(t) {
                o(t)
            }
        }
        function s(e) {
            e.done ? _(e.value) : new i(function(t) {
                t(e.value)
            }).then(a, r)
        }
        s((n = n.apply(e, t || [])).next())
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
        if (_) throw new TypeError("Generator is already executing.");
        for (; s;) try {
            if (_ = 1, o && (a = o[2 & i[0] ? "return": i[0] ? "throw": "next"]) && !(a = a.call(o, i[1])).done) return a;
            switch (o = 0, a && (i = [0, a.value]), i[0]) {
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
                o = i[1],
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
            i = t.call(e, s)
        } catch(n) {
            i = [6, n],
            o = 0
        } finally {
            _ = a = 0
        }
        if (5 & i[0]) throw i[1];
        return {
            value: i[0] ? i[1] : void 0,
            done: !0
        }
    }
    var _, o, a, r, s = {
        label: 0,
        sent: function() {
            if (1 & a[0]) throw a[1];
            return a[1]
        },
        trys: [],
        ops: []
    };
    return r = {
        next: i(0),
        "throw": i(1),
        "return": i(2)
    },
    "function" == typeof Symbol && (r[Symbol.iterator] = function() {
        return this
    }),
    r
},
aresAlliance; !
function(e) {
    var t = function(t) {
        function i(e) {
            var i = t.call(this) || this;
            if (i.canDown = !0, i.new_monster_level_id = [[0, 145, 140, 136, 132], [0, 148, 143, 0, 135], [0, 149, 144, 139, 36], [0, 147, 142, 138, 134], [0, 146, 141, 137, 133]], i.moduleId = [[238, 232, 218, 210, 202], [240, 239, 229, 56, 206], [241, 233, 230, 216, 112], [242, 231, 220, 214, 205], [243, 246, 219, 207, 204]], "number" != typeof e) {
                var n = GainWayManger.getJumpInfo(e);
                i.petIndex = n.menuDefault
            } else i.petIndex = e;
            return i.skinName = "aresAlliance.MainSkin",
            i
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            var e = this;
            t.prototype.childrenCreated.call(this),
            t.prototype.initBtnClose.call(this, "aa_main_title" + this.petIndex + "_png", this,
            function() {
                e.onClose()
            },
            this),
            this.initData(),
            this.addEvent()
        },
        i.prototype.addEvent = function() {
            var e = this;
            EventManager.addEventListener(PetFactorCollectionManager.PetFactorCollectionManager_setCollection,
            function() {
                e.initData()
            },
            this);
            for (var t = function(t) {
                ImageButtonUtil.add(i["head" + t],
                function() {
                    StatLogger.log("20230210版本系统功能", "战神联盟集合面板", "点击内部精灵头像切换"),
                    e.petIndex = t,
                    e.initData()
                },
                i);
                for (var n = function(n) {
                    ImageButtonUtil.add(i["grp_pet" + t + "Show" + n],
                    function() {
                        switch (e.moduleId[t - 1][n - 1]) {
                        case 202:
                            StatLogger.log("20230210版本系统功能", "战神联盟集合面板", "点击【圣瞳缪斯】");
                            break;
                        case 112:
                            StatLogger.log("20230210版本系统功能", "战神联盟集合面板", "点击【圣霆雷伊】")
                        }
                        0 != e.moduleId[t - 1][n - 1] && (56 == e.moduleId[t - 1][n - 1] ? ModuleManager.showModuleByID(e.moduleId[t - 1][n - 1], {
                            openPanel: "3_6"
                        }) : ModuleManager.showModuleByID(e.moduleId[t - 1][n - 1]))
                    },
                    i),
                    ImageButtonUtil.add(i["collection_" + t + n],
                    function() {
                        e._curfirstIndex = t,
                        e._cursecondIndex = n,
                        e.collectPet()
                    },
                    i),
                    ImageButtonUtil.add(i["favorite_" + t + n],
                    function() {
                        e._curfirstIndex = t,
                        e._cursecondIndex = n,
                        e.collectPet()
                    },
                    i)
                },
                _ = 1; 5 >= _; _++) n(_)
            },
            i = this, n = 1; 5 >= n; n++) t(n)
        },
        i.prototype.initData = function() {
            for (var t = 1; 5 >= t; t++) if (this["pet" + t].visible = t == this.petIndex, 0 != this.moduleId[this.petIndex - 1][t - 1]) {
                this["grp_pet" + this.petIndex + "Show" + t].getChildAt(0).alpha = 1,
                this["grp_pet" + this.petIndex + "Show" + t].getChildAt(2).alpha = 1,
                this["noOpen_" + this.petIndex + t].visible = !1;
                var i = this.new_monster_level_id[this.petIndex - 1][t - 1];
                56 != this.moduleId[this.petIndex - 1][t - 1] && i ? (this["collection_" + this.petIndex + t].visible = !PetFactorCollectionManager.checkPetIdIndexIsCollection(i), this["favorite_" + this.petIndex + t].visible = PetFactorCollectionManager.checkPetIdIndexIsCollection(i)) : this["collection_" + this.petIndex + t].visible = this["favorite_" + this.petIndex + t].visible = !1
            } else this["grp_pet" + this.petIndex + "Show" + t].getChildAt(0).alpha = .6,
            this["grp_pet" + this.petIndex + "Show" + t].getChildAt(2).alpha = .6,
            this["grp_pet" + this.petIndex + "Show" + t].touchEnabled = !1,
            this["collection_" + this.petIndex + t].visible = this["favorite_" + this.petIndex + t].visible = !1;
            this.headSelect.x = e.AresAllianceConst.HeadSelectX[this.petIndex - 1] - 7,
            this.headSelect.y = 487,
            this.updateTitleRes("aa_main_title" + this.petIndex + "_png")
        },
        i.prototype.collectPet = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var e, t;
                return __generator(this,
                function(i) {
                    switch (i.label) {
                    case 0:
                        return this.canDown ? (this.canDown = !1, e = this.new_monster_level_id[this._curfirstIndex - 1][this._cursecondIndex - 1], t = !PetFactorCollectionManager.checkPetIdIndexIsCollection(e), this["collection_" + this._curfirstIndex + this._cursecondIndex].visible = !t, this["favorite_" + this._curfirstIndex + this._cursecondIndex].visible = t, [4, PetFactorCollectionManager.setCollection(e, t)]) : (BubblerManager.getInstance().showText("请不要过快连续点击！"), [2]);
                    case 1:
                        return i.sent(),
                        this.canDown = !0,
                        [2]
                    }
                })
            })
        },
        i.prototype.destroy = function() {
            t.prototype.destroy.call(this),
            ImageButtonUtil.removeAll(this)
        },
        i
    } (BaseModule);
    e.AresAlliance = t,
    __reflect(t.prototype, "aresAlliance.AresAlliance")
} (aresAlliance || (aresAlliance = {}));
var __reflect = this && this.__reflect ||
function(e, t, i) {
    e.__class__ = t,
    i ? i.push(t) : i = [t],
    e.__types__ = e.__types__ ? i.concat(e.__types__) : i
},
aresAlliance; !
function(e) {
    var t = function() {
        function e() {}
        return e.HeadSelectX = [316, 396, 477, 557, 636],
        e
    } ();
    e.AresAllianceConst = t,
    __reflect(t.prototype, "aresAlliance.AresAllianceConst")
} (aresAlliance || (aresAlliance = {})),
window.aresAlliance = window.aresAlliance || {};
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
generateEUI.paths["resource/eui_skins/MainSkin.exml"] = window.aresAlliance.MainSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["bg", "topbg", "line_2", "line", "head5", "head4", "head3", "head2", "head1", "pet5_show1", "noOpen_51", "grp_pet5Show1", "pet5_show5", "noOpen_55", "grp_pet5Show5", "pet5_show4", "noOpen_54", "grp_pet5Show4", "pet5_show2", "noOpen_52", "grp_pet5Show2", "pet5_show3", "noOpen_53", "grp_pet5Show3", "collection_52", "favorite_52", "collection_53", "favorite_53", "collection_51", "favorite_51", "collection_55", "favorite_55", "collection_54", "favorite_54", "pet5", "pet4_show1", "noOpen_41", "grp_pet4Show1", "pet4_show5", "noOpen_45", "grp_pet4Show5", "pet4_show4", "noOpen_44", "grp_pet4Show4", "pet4_show2", "noOpen_42", "grp_pet4Show2", "pet4_show3", "noOpen_43", "grp_pet4Show3", "collection_42", "favorite_42", "collection_43", "favorite_43", "collection_41", "favorite_41", "collection_45", "favorite_45", "collection_44", "favorite_44", "pet4", "pet3_show1", "noOpen_31", "grp_pet3Show1", "pet3_show5", "noOpen_35", "grp_pet3Show5", "pet3_show4", "noOpen_34", "grp_pet3Show4", "pet3_show2", "noOpen_32", "grp_pet3Show2", "pet3_show3", "noOpen_33", "grp_pet3Show3", "collection_32", "favorite_32", "collection_33", "favorite_33", "collection_31", "favorite_31", "collection_35", "favorite_35", "collection_34", "favorite_34", "pet3", "pet2_show1", "noOpen_21", "grp_pet2Show1", "pet2_show5", "noOpen_25", "grp_pet2Show5", "pet2_show4", "noOpen_24", "grp_pet2Show4", "pet2_show2", "noOpen_22", "grp_pet2Show2", "pet2_show3", "noOpen_23", "grp_pet2Show3", "collection_22", "favorite_22", "collection_23", "favorite_23", "collection_21", "favorite_21", "collection_25", "favorite_25", "collection_24", "favorite_24", "pet2", "pet1_show1", "noOpen_11", "grp_pet1Show1", "pet1_show5", "noOpen_15", "grp_pet1Show5", "pet1_show4", "noOpen_14", "grp_pet1Show4", "pet1_show2", "noOpen_12", "grp_pet1Show2", "pet1_show3", "noOpen_13", "grp_pet1Show3", "collection_12", "favorite_12", "collection_13", "favorite_13", "collection_11", "favorite_11", "collection_15", "favorite_15", "collection_14", "favorite_14", "pet1", "headSelect", "content"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this._Group1_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i.bg_i = function() {
        var e = new eui.Image;
        return this.bg = e,
        e.source = "aa_main_bg_jpg",
        e.percentWidth = 100,
        e.x = 0,
        e.y = 0,
        e
    },
    i._Group1_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = -27,
        e.y = 0,
        e.elementsContent = [this.topbg_i(), this.line_i(), this.content_i()],
        e
    },
    i.topbg_i = function() {
        var e = new eui.Group;
        return this.topbg = e,
        e.visible = !0,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this._Image1_i(), this._Image2_i(), this._Image3_i(), this._Image4_i(), this._Image5_i(), this._Image6_i(), this._Image7_i(), this._Image8_i()],
        e
    },
    i._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "aa_main_jx_11_kb_10_png",
        e.visible = !0,
        e.x = 911,
        e.y = 234,
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "aa_main_jx_11_kb_2_png",
        e.x = 529,
        e.y = 424,
        e
    },
    i._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "aa_main_jx_11_kb_9_png",
        e.x = 144,
        e.y = 369,
        e
    },
    i._Image4_i = function() {
        var e = new eui.Image;
        return e.source = "aa_main_jx_11_kb_8_png",
        e.x = 1044,
        e.y = 359,
        e
    },
    i._Image5_i = function() {
        var e = new eui.Image;
        return e.source = "aa_main_jx_11_kb_6_png",
        e.x = 632,
        e.y = 264,
        e
    },
    i._Image6_i = function() {
        var e = new eui.Image;
        return e.source = "aa_main_jx_11_kb_4_png",
        e.x = 743,
        e.y = 202,
        e
    },
    i._Image7_i = function() {
        var e = new eui.Image;
        return e.source = "aa_main_jx_11_kb_7_png",
        e.x = 273,
        e.y = 237,
        e
    },
    i._Image8_i = function() {
        var e = new eui.Image;
        return e.source = "aa_main_jx_11_kb_3_png",
        e.x = 520,
        e.y = 178,
        e
    },
    i.line_i = function() {
        var e = new eui.Group;
        return this.line = e,
        e.x = 240,
        e.y = 148,
        e.elementsContent = [this.line_2_i()],
        e
    },
    i.line_2_i = function() {
        var e = new eui.Image;
        return this.line_2 = e,
        e.source = "aa_main_line_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.content_i = function() {
        var e = new eui.Group;
        return this.content = e,
        e.x = 133,
        e.y = 45,
        e.elementsContent = [this.head5_i(), this.head4_i(), this.head3_i(), this.head2_i(), this.head1_i(), this.pet5_i(), this.pet4_i(), this.pet3_i(), this.pet2_i(), this.pet1_i(), this.headSelect_i()],
        e
    },
    i.head5_i = function() {
        var e = new eui.Image;
        return this.head5 = e,
        e.source = "aa_main_5_png",
        e.x = 636,
        e.y = 493,
        e
    },
    i.head4_i = function() {
        var e = new eui.Image;
        return this.head4 = e,
        e.source = "aa_main_4_png",
        e.x = 557,
        e.y = 494,
        e
    },
    i.head3_i = function() {
        var e = new eui.Image;
        return this.head3 = e,
        e.source = "aa_main_3_png",
        e.x = 477,
        e.y = 494,
        e
    },
    i.head2_i = function() {
        var e = new eui.Image;
        return this.head2 = e,
        e.source = "aa_main_2_png",
        e.x = 396,
        e.y = 494,
        e
    },
    i.head1_i = function() {
        var e = new eui.Image;
        return this.head1 = e,
        e.source = "aa_main_1_png",
        e.x = 316,
        e.y = 494,
        e
    },
    i.pet5_i = function() {
        var e = new eui.Group;
        return this.pet5 = e,
        e.visible = !1,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this.grp_pet5Show1_i(), this.grp_pet5Show5_i(), this.grp_pet5Show4_i(), this.grp_pet5Show2_i(), this.grp_pet5Show3_i(), this.collection_52_i(), this.favorite_52_i(), this.collection_53_i(), this.favorite_53_i(), this.collection_51_i(), this.favorite_51_i(), this.collection_55_i(), this.favorite_55_i(), this.collection_54_i(), this.favorite_54_i()],
        e
    },
    i.grp_pet5Show1_i = function() {
        var e = new eui.Group;
        return this.grp_pet5Show1 = e,
        e.x = 0,
        e.y = 103,
        e.elementsContent = [this.pet5_show1_i(), this.noOpen_51_i(), this._Label2_i()],
        e
    },
    i.pet5_show1_i = function() {
        var e = new eui.Image;
        return this.pet5_show1 = e,
        e.source = "aa_main_pet5_show1_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.noOpen_51_i = function() {
        var e = new eui.Group;
        return this.noOpen_51 = e,
        e.x = 20,
        e.y = 78,
        e.elementsContent = [this._Image9_i(), this._Label1_i()],
        e
    },
    i._Image9_i = function() {
        var e = new eui.Image;
        return e.source = "aa_main_noopen_png",
        e.width = 93,
        e.x = 0,
        e.y = 0,
        e
    },
    i._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "敬请期待",
        e.textAlign = "center",
        e.textColor = 6724336,
        e.width = 93,
        e.x = 0,
        e.y = 6,
        e
    },
    i._Label2_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "盖亚",
        e.textColor = 16777215,
        e.x = 47,
        e.y = 128,
        e
    },
    i.grp_pet5Show5_i = function() {
        var e = new eui.Group;
        return this.grp_pet5Show5 = e,
        e.x = 830,
        e.y = 19,
        e.elementsContent = [this.pet5_show5_i(), this.noOpen_55_i(), this._Label4_i()],
        e
    },
    i.pet5_show5_i = function() {
        var e = new eui.Image;
        return this.pet5_show5 = e,
        e.source = "aa_main_pet5_show5_png",
        e.visible = !0,
        e.x = 0,
        e.y = 0,
        e
    },
    i.noOpen_55_i = function() {
        var e = new eui.Group;
        return this.noOpen_55 = e,
        e.x = 27,
        e.y = 108,
        e.elementsContent = [this._Image10_i(), this._Label3_i()],
        e
    },
    i._Image10_i = function() {
        var e = new eui.Image;
        return e.source = "aa_main_noopen_png",
        e.width = 163,
        e.x = 0,
        e.y = 0,
        e
    },
    i._Label3_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "敬请期待",
        e.textAlign = "center",
        e.textColor = 6724336,
        e.width = 163,
        e.x = 0,
        e.y = 6,
        e
    },
    i._Label4_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "圣战盖亚",
        e.textColor = 16777215,
        e.x = 65,
        e.y = 221,
        e
    },
    i.grp_pet5Show4_i = function() {
        var e = new eui.Group;
        return this.grp_pet5Show4 = e,
        e.x = 598,
        e.y = 236,
        e.elementsContent = [this.pet5_show4_i(), this.noOpen_54_i(), this._Label6_i()],
        e
    },
    i.pet5_show4_i = function() {
        var e = new eui.Image;
        return this.pet5_show4 = e,
        e.source = "aa_main_pet5_show4_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.noOpen_54_i = function() {
        var e = new eui.Group;
        return this.noOpen_54 = e,
        e.x = 27,
        e.y = 108,
        e.elementsContent = [this._Image11_i(), this._Label5_i()],
        e
    },
    i._Image11_i = function() {
        var e = new eui.Image;
        return e.source = "aa_main_noopen_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i._Label5_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "敬请期待",
        e.textAlign = "center",
        e.textColor = 6724336,
        e.width = 143,
        e.x = 0,
        e.y = 6,
        e
    },
    i._Label6_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "王·盖亚",
        e.textColor = 16777215,
        e.x = 64,
        e.y = 197,
        e
    },
    i.grp_pet5Show2_i = function() {
        var e = new eui.Group;
        return this.grp_pet5Show2 = e,
        e.x = 194,
        e.y = 242,
        e.elementsContent = [this.pet5_show2_i(), this.noOpen_52_i(), this._Label8_i()],
        e
    },
    i.pet5_show2_i = function() {
        var e = new eui.Image;
        return this.pet5_show2 = e,
        e.source = "aa_main_pet5_show2_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.noOpen_52_i = function() {
        var e = new eui.Group;
        return this.noOpen_52 = e,
        e.x = 20,
        e.y = 88,
        e.elementsContent = [this._Image12_i(), this._Label7_i()],
        e
    },
    i._Image12_i = function() {
        var e = new eui.Image;
        return e.source = "aa_main_noopen_png",
        e.width = 113,
        e.x = 0,
        e.y = 0,
        e
    },
    i._Label7_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "敬请期待",
        e.textAlign = "center",
        e.textColor = 6724336,
        e.width = 113,
        e.x = 0,
        e.y = 6,
        e
    },
    i._Label8_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "战神盖亚",
        e.textColor = 16777215,
        e.x = 44,
        e.y = 152,
        e
    },
    i.grp_pet5Show3_i = function() {
        var e = new eui.Group;
        return this.grp_pet5Show3 = e,
        e.x = 397,
        e.y = 0,
        e.elementsContent = [this.pet5_show3_i(), this.noOpen_53_i(), this._Label10_i()],
        e
    },
    i.pet5_show3_i = function() {
        var e = new eui.Image;
        return this.pet5_show3 = e,
        e.source = "aa_main_pet5_show3_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.noOpen_53_i = function() {
        var e = new eui.Group;
        return this.noOpen_53 = e,
        e.x = 23,
        e.y = 98,
        e.elementsContent = [this._Image13_i(), this._Label9_i()],
        e
    },
    i._Image13_i = function() {
        var e = new eui.Image;
        return e.source = "aa_main_noopen_png",
        e.width = 130,
        e.x = 0,
        e.y = 0,
        e
    },
    i._Label9_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "敬请期待",
        e.textAlign = "center",
        e.textColor = 6724336,
        e.width = 130,
        e.x = 0,
        e.y = 6,
        e
    },
    i._Label10_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "战神·盖亚",
        e.textColor = 16777215,
        e.x = 44,
        e.y = 172,
        e
    },
    i.collection_52_i = function() {
        var e = new eui.Image;
        return this.collection_52 = e,
        e.scaleX = .8,
        e.scaleY = .8,
        e.source = "aa_main_collection_png",
        e.x = 216,
        e.y = 265,
        e
    },
    i.favorite_52_i = function() {
        var e = new eui.Image;
        return this.favorite_52 = e,
        e.scaleX = .8,
        e.scaleY = .8,
        e.source = "aa_main_favorite_png",
        e.x = 224,
        e.y = 265,
        e
    },
    i.collection_53_i = function() {
        var e = new eui.Image;
        return this.collection_53 = e,
        e.scaleX = .85,
        e.scaleY = .85,
        e.source = "aa_main_collection_png",
        e.x = 421,
        e.y = 26,
        e
    },
    i.favorite_53_i = function() {
        var e = new eui.Image;
        return this.favorite_53 = e,
        e.scaleX = .85,
        e.scaleY = .85,
        e.source = "aa_main_favorite_png",
        e.x = 429,
        e.y = 26,
        e
    },
    i.collection_51_i = function() {
        var e = new eui.Image;
        return this.collection_51 = e,
        e.scaleX = .75,
        e.scaleY = .75,
        e.source = "aa_main_collection_png",
        e.visible = !1,
        e.x = 19,
        e.y = 122,
        e
    },
    i.favorite_51_i = function() {
        var e = new eui.Image;
        return this.favorite_51 = e,
        e.scaleX = .75,
        e.scaleY = .75,
        e.source = "aa_main_favorite_png",
        e.visible = !1,
        e.x = 27,
        e.y = 122,
        e
    },
    i.collection_55_i = function() {
        var e = new eui.Image;
        return this.collection_55 = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "aa_main_collection_png",
        e.x = 860,
        e.y = 49,
        e
    },
    i.favorite_55_i = function() {
        var e = new eui.Image;
        return this.favorite_55 = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "aa_main_favorite_png",
        e.x = 868,
        e.y = 49,
        e
    },
    i.collection_54_i = function() {
        var e = new eui.Image;
        return this.collection_54 = e,
        e.scaleX = .9,
        e.scaleY = .9,
        e.source = "aa_main_collection_png",
        e.x = 625.5,
        e.y = 263,
        e
    },
    i.favorite_54_i = function() {
        var e = new eui.Image;
        return this.favorite_54 = e,
        e.scaleX = .9,
        e.scaleY = .9,
        e.source = "aa_main_favorite_png",
        e.x = 633,
        e.y = 263,
        e
    },
    i.pet4_i = function() {
        var e = new eui.Group;
        return this.pet4 = e,
        e.visible = !1,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this.grp_pet4Show1_i(), this.grp_pet4Show5_i(), this.grp_pet4Show4_i(), this.grp_pet4Show2_i(), this.grp_pet4Show3_i(), this.collection_42_i(), this.favorite_42_i(), this.collection_43_i(), this.favorite_43_i(), this.collection_41_i(), this.favorite_41_i(), this.collection_45_i(), this.favorite_45_i(), this.collection_44_i(), this.favorite_44_i()],
        e
    },
    i.grp_pet4Show1_i = function() {
        var e = new eui.Group;
        return this.grp_pet4Show1 = e,
        e.x = 0,
        e.y = 103,
        e.elementsContent = [this.pet4_show1_i(), this.noOpen_41_i(), this._Label12_i()],
        e
    },
    i.pet4_show1_i = function() {
        var e = new eui.Image;
        return this.pet4_show1 = e,
        e.source = "aa_main_pet4_show1_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.noOpen_41_i = function() {
        var e = new eui.Group;
        return this.noOpen_41 = e,
        e.x = 20,
        e.y = 78,
        e.elementsContent = [this._Image14_i(), this._Label11_i()],
        e
    },
    i._Image14_i = function() {
        var e = new eui.Image;
        return e.source = "aa_main_noopen_png",
        e.width = 93,
        e.x = 0,
        e.y = 0,
        e
    },
    i._Label11_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "敬请期待",
        e.textAlign = "center",
        e.textColor = 6724336,
        e.width = 93,
        e.x = 0,
        e.y = 6,
        e
    },
    i._Label12_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "卡修斯",
        e.textColor = 16777215,
        e.x = 37,
        e.y = 128,
        e
    },
    i.grp_pet4Show5_i = function() {
        var e = new eui.Group;
        return this.grp_pet4Show5 = e,
        e.x = 830,
        e.y = 19,
        e.elementsContent = [this.pet4_show5_i(), this.noOpen_45_i(), this._Label14_i()],
        e
    },
    i.pet4_show5_i = function() {
        var e = new eui.Image;
        return this.pet4_show5 = e,
        e.source = "aa_main_pet4_show5_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.noOpen_45_i = function() {
        var e = new eui.Group;
        return this.noOpen_45 = e,
        e.x = 27,
        e.y = 108,
        e.elementsContent = [this._Image15_i(), this._Label13_i()],
        e
    },
    i._Image15_i = function() {
        var e = new eui.Image;
        return e.source = "aa_main_noopen_png",
        e.width = 163,
        e.x = 0,
        e.y = 0,
        e
    },
    i._Label13_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "敬请期待",
        e.textAlign = "center",
        e.textColor = 6724336,
        e.width = 163,
        e.x = 0,
        e.y = 6,
        e
    },
    i._Label14_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "圣地卡修斯",
        e.textColor = 16777215,
        e.x = 54,
        e.y = 221,
        e
    },
    i.grp_pet4Show4_i = function() {
        var e = new eui.Group;
        return this.grp_pet4Show4 = e,
        e.x = 598,
        e.y = 236,
        e.elementsContent = [this.pet4_show4_i(), this.noOpen_44_i(), this._Label16_i()],
        e
    },
    i.pet4_show4_i = function() {
        var e = new eui.Image;
        return this.pet4_show4 = e,
        e.source = "aa_main_pet4_show4_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.noOpen_44_i = function() {
        var e = new eui.Group;
        return this.noOpen_44 = e,
        e.x = 27,
        e.y = 108,
        e.elementsContent = [this._Image16_i(), this._Label15_i()],
        e
    },
    i._Image16_i = function() {
        var e = new eui.Image;
        return e.source = "aa_main_noopen_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i._Label15_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "敬请期待",
        e.textAlign = "center",
        e.textColor = 6724336,
        e.width = 143,
        e.x = 0,
        e.y = 6,
        e
    },
    i._Label16_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "王·卡修斯",
        e.textColor = 16777215,
        e.x = 54,
        e.y = 197,
        e
    },
    i.grp_pet4Show2_i = function() {
        var e = new eui.Group;
        return this.grp_pet4Show2 = e,
        e.x = 194,
        e.y = 242,
        e.elementsContent = [this.pet4_show2_i(), this.noOpen_42_i(), this._Label18_i()],
        e
    },
    i.pet4_show2_i = function() {
        var e = new eui.Image;
        return this.pet4_show2 = e,
        e.source = "aa_main_pet4_show2_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.noOpen_42_i = function() {
        var e = new eui.Group;
        return this.noOpen_42 = e,
        e.x = 20,
        e.y = 88,
        e.elementsContent = [this._Image17_i(), this._Label17_i()],
        e
    },
    i._Image17_i = function() {
        var e = new eui.Image;
        return e.source = "aa_main_noopen_png",
        e.width = 113,
        e.x = 0,
        e.y = 0,
        e
    },
    i._Label17_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "敬请期待",
        e.textAlign = "center",
        e.textColor = 6724336,
        e.width = 113,
        e.x = 0,
        e.y = 6,
        e
    },
    i._Label18_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "大地之神卡修斯",
        e.textColor = 16777215,
        e.x = 20,
        e.y = 152,
        e
    },
    i.grp_pet4Show3_i = function() {
        var e = new eui.Group;
        return this.grp_pet4Show3 = e,
        e.x = 397,
        e.y = 0,
        e.elementsContent = [this.pet4_show3_i(), this.noOpen_43_i(), this._Label20_i()],
        e
    },
    i.pet4_show3_i = function() {
        var e = new eui.Image;
        return this.pet4_show3 = e,
        e.source = "aa_main_pet4_show3_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.noOpen_43_i = function() {
        var e = new eui.Group;
        return this.noOpen_43 = e,
        e.x = 23,
        e.y = 98,
        e.elementsContent = [this._Image18_i(), this._Label19_i()],
        e
    },
    i._Image18_i = function() {
        var e = new eui.Image;
        return e.source = "aa_main_noopen_png",
        e.width = 130,
        e.x = 0,
        e.y = 0,
        e
    },
    i._Label19_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "敬请期待",
        e.textAlign = "center",
        e.textColor = 6724336,
        e.width = 130,
        e.x = 0,
        e.y = 6,
        e
    },
    i._Label20_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "大地之神·卡修斯",
        e.textColor = 16777215,
        e.x = 27,
        e.y = 175,
        e
    },
    i.collection_42_i = function() {
        var e = new eui.Image;
        return this.collection_42 = e,
        e.scaleX = .8,
        e.scaleY = .8,
        e.source = "aa_main_collection_png",
        e.x = 216,
        e.y = 265,
        e
    },
    i.favorite_42_i = function() {
        var e = new eui.Image;
        return this.favorite_42 = e,
        e.scaleX = .8,
        e.scaleY = .8,
        e.source = "aa_main_favorite_png",
        e.x = 224,
        e.y = 265,
        e
    },
    i.collection_43_i = function() {
        var e = new eui.Image;
        return this.collection_43 = e,
        e.scaleX = .85,
        e.scaleY = .85,
        e.source = "aa_main_collection_png",
        e.x = 421,
        e.y = 26,
        e
    },
    i.favorite_43_i = function() {
        var e = new eui.Image;
        return this.favorite_43 = e,
        e.scaleX = .85,
        e.scaleY = .85,
        e.source = "aa_main_favorite_png",
        e.x = 429,
        e.y = 26,
        e
    },
    i.collection_41_i = function() {
        var e = new eui.Image;
        return this.collection_41 = e,
        e.scaleX = .75,
        e.scaleY = .75,
        e.source = "aa_main_collection_png",
        e.visible = !1,
        e.x = 19,
        e.y = 122,
        e
    },
    i.favorite_41_i = function() {
        var e = new eui.Image;
        return this.favorite_41 = e,
        e.scaleX = .75,
        e.scaleY = .75,
        e.source = "aa_main_favorite_png",
        e.visible = !1,
        e.x = 27,
        e.y = 122,
        e
    },
    i.collection_45_i = function() {
        var e = new eui.Image;
        return this.collection_45 = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "aa_main_collection_png",
        e.x = 860,
        e.y = 49,
        e
    },
    i.favorite_45_i = function() {
        var e = new eui.Image;
        return this.favorite_45 = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "aa_main_favorite_png",
        e.x = 868,
        e.y = 49,
        e
    },
    i.collection_44_i = function() {
        var e = new eui.Image;
        return this.collection_44 = e,
        e.scaleX = .9,
        e.scaleY = .9,
        e.source = "aa_main_collection_png",
        e.x = 625.5,
        e.y = 263,
        e
    },
    i.favorite_44_i = function() {
        var e = new eui.Image;
        return this.favorite_44 = e,
        e.scaleX = .9,
        e.scaleY = .9,
        e.source = "aa_main_favorite_png",
        e.x = 633,
        e.y = 263,
        e
    },
    i.pet3_i = function() {
        var e = new eui.Group;
        return this.pet3 = e,
        e.visible = !1,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this.grp_pet3Show1_i(), this.grp_pet3Show5_i(), this.grp_pet3Show4_i(), this.grp_pet3Show2_i(), this.grp_pet3Show3_i(), this.collection_32_i(), this.favorite_32_i(), this.collection_33_i(), this.favorite_33_i(), this.collection_31_i(), this.favorite_31_i(), this.collection_35_i(), this.favorite_35_i(), this.collection_34_i(), this.favorite_34_i()],
        e
    },
    i.grp_pet3Show1_i = function() {
        var e = new eui.Group;
        return this.grp_pet3Show1 = e,
        e.x = 0,
        e.y = 103,
        e.elementsContent = [this.pet3_show1_i(), this.noOpen_31_i(), this._Label22_i()],
        e
    },
    i.pet3_show1_i = function() {
        var e = new eui.Image;
        return this.pet3_show1 = e,
        e.source = "aa_main_pet3_show1_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.noOpen_31_i = function() {
        var e = new eui.Group;
        return this.noOpen_31 = e,
        e.x = 20,
        e.y = 78,
        e.elementsContent = [this._Image19_i(), this._Label21_i()],
        e
    },
    i._Image19_i = function() {
        var e = new eui.Image;
        return e.source = "aa_main_noopen_png",
        e.width = 93,
        e.x = 0,
        e.y = 0,
        e
    },
    i._Label21_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "敬请期待",
        e.textAlign = "center",
        e.textColor = 6724336,
        e.width = 93,
        e.x = 0,
        e.y = 6,
        e
    },
    i._Label22_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "雷伊",
        e.textColor = 16777215,
        e.x = 45,
        e.y = 128,
        e
    },
    i.grp_pet3Show5_i = function() {
        var e = new eui.Group;
        return this.grp_pet3Show5 = e,
        e.visible = !0,
        e.x = 830,
        e.y = 19,
        e.elementsContent = [this.pet3_show5_i(), this.noOpen_35_i(), this._Label24_i()],
        e
    },
    i.pet3_show5_i = function() {
        var e = new eui.Image;
        return this.pet3_show5 = e,
        e.source = "aa_main_pet3_show5_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.noOpen_35_i = function() {
        var e = new eui.Group;
        return this.noOpen_35 = e,
        e.x = 27,
        e.y = 108,
        e.elementsContent = [this._Image20_i(), this._Label23_i()],
        e
    },
    i._Image20_i = function() {
        var e = new eui.Image;
        return e.source = "aa_main_noopen_png",
        e.width = 163,
        e.x = 0,
        e.y = 0,
        e
    },
    i._Label23_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "敬请期待",
        e.textAlign = "center",
        e.textColor = 6724336,
        e.width = 163,
        e.x = 0,
        e.y = 6,
        e
    },
    i._Label24_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "圣霆雷伊",
        e.textColor = 16777215,
        e.x = 65,
        e.y = 221,
        e
    },
    i.grp_pet3Show4_i = function() {
        var e = new eui.Group;
        return this.grp_pet3Show4 = e,
        e.x = 598,
        e.y = 236,
        e.elementsContent = [this.pet3_show4_i(), this.noOpen_34_i(), this._Label26_i()],
        e
    },
    i.pet3_show4_i = function() {
        var e = new eui.Image;
        return this.pet3_show4 = e,
        e.source = "aa_main_pet3_show4_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.noOpen_34_i = function() {
        var e = new eui.Group;
        return this.noOpen_34 = e,
        e.x = 27,
        e.y = 108,
        e.elementsContent = [this._Image21_i(), this._Label25_i()],
        e
    },
    i._Image21_i = function() {
        var e = new eui.Image;
        return e.source = "aa_main_noopen_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i._Label25_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "敬请期待",
        e.textAlign = "center",
        e.textColor = 6724336,
        e.width = 143,
        e.x = 0,
        e.y = 6,
        e
    },
    i._Label26_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "王·雷伊",
        e.textColor = 16777215,
        e.x = 65,
        e.y = 197,
        e
    },
    i.grp_pet3Show2_i = function() {
        var e = new eui.Group;
        return this.grp_pet3Show2 = e,
        e.x = 194,
        e.y = 242,
        e.elementsContent = [this.pet3_show2_i(), this.noOpen_32_i(), this._Label28_i()],
        e
    },
    i.pet3_show2_i = function() {
        var e = new eui.Image;
        return this.pet3_show2 = e,
        e.source = "aa_main_pet3_show2_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.noOpen_32_i = function() {
        var e = new eui.Group;
        return this.noOpen_32 = e,
        e.x = 20,
        e.y = 88,
        e.elementsContent = [this._Image22_i(), this._Label27_i()],
        e
    },
    i._Image22_i = function() {
        var e = new eui.Image;
        return e.source = "aa_main_noopen_png",
        e.width = 113,
        e.x = 0,
        e.y = 0,
        e
    },
    i._Label27_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "敬请期待",
        e.textAlign = "center",
        e.textColor = 6724336,
        e.width = 113,
        e.x = 0,
        e.y = 6,
        e
    },
    i._Label28_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "雷神雷伊",
        e.textColor = 16777215,
        e.x = 45,
        e.y = 152,
        e
    },
    i.grp_pet3Show3_i = function() {
        var e = new eui.Group;
        return this.grp_pet3Show3 = e,
        e.x = 397,
        e.y = 0,
        e.elementsContent = [this.pet3_show3_i(), this.noOpen_33_i(), this._Label30_i()],
        e
    },
    i.pet3_show3_i = function() {
        var e = new eui.Image;
        return this.pet3_show3 = e,
        e.source = "aa_main_pet3_show3_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.noOpen_33_i = function() {
        var e = new eui.Group;
        return this.noOpen_33 = e,
        e.x = 23,
        e.y = 98,
        e.elementsContent = [this._Image23_i(), this._Label29_i()],
        e
    },
    i._Image23_i = function() {
        var e = new eui.Image;
        return e.source = "aa_main_noopen_png",
        e.width = 130,
        e.x = 0,
        e.y = 0,
        e
    },
    i._Label29_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "敬请期待",
        e.textAlign = "center",
        e.textColor = 6724336,
        e.width = 130,
        e.x = 0,
        e.y = 6,
        e
    },
    i._Label30_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "雷神·雷伊",
        e.textColor = 16777215,
        e.x = 55,
        e.y = 175,
        e
    },
    i.collection_32_i = function() {
        var e = new eui.Image;
        return this.collection_32 = e,
        e.scaleX = .8,
        e.scaleY = .8,
        e.source = "aa_main_collection_png",
        e.x = 214,
        e.y = 264,
        e
    },
    i.favorite_32_i = function() {
        var e = new eui.Image;
        return this.favorite_32 = e,
        e.scaleX = .8,
        e.scaleY = .8,
        e.source = "aa_main_favorite_png",
        e.x = 222,
        e.y = 264,
        e
    },
    i.collection_33_i = function() {
        var e = new eui.Image;
        return this.collection_33 = e,
        e.scaleX = .85,
        e.scaleY = .85,
        e.source = "aa_main_collection_png",
        e.x = 421,
        e.y = 26,
        e
    },
    i.favorite_33_i = function() {
        var e = new eui.Image;
        return this.favorite_33 = e,
        e.scaleX = .85,
        e.scaleY = .85,
        e.source = "aa_main_favorite_png",
        e.x = 429,
        e.y = 26,
        e
    },
    i.collection_31_i = function() {
        var e = new eui.Image;
        return this.collection_31 = e,
        e.scaleX = .75,
        e.scaleY = .75,
        e.source = "aa_main_collection_png",
        e.visible = !1,
        e.x = 19,
        e.y = 122,
        e
    },
    i.favorite_31_i = function() {
        var e = new eui.Image;
        return this.favorite_31 = e,
        e.scaleX = .75,
        e.scaleY = .75,
        e.source = "aa_main_favorite_png",
        e.visible = !1,
        e.x = 27,
        e.y = 122,
        e
    },
    i.collection_35_i = function() {
        var e = new eui.Image;
        return this.collection_35 = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "aa_main_collection_png",
        e.x = 860,
        e.y = 49,
        e
    },
    i.favorite_35_i = function() {
        var e = new eui.Image;
        return this.favorite_35 = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "aa_main_favorite_png",
        e.x = 868,
        e.y = 49,
        e
    },
    i.collection_34_i = function() {
        var e = new eui.Image;
        return this.collection_34 = e,
        e.scaleX = .9,
        e.scaleY = .9,
        e.source = "aa_main_collection_png",
        e.x = 625.5,
        e.y = 263,
        e
    },
    i.favorite_34_i = function() {
        var e = new eui.Image;
        return this.favorite_34 = e,
        e.scaleX = .9,
        e.scaleY = .9,
        e.source = "aa_main_favorite_png",
        e.x = 633,
        e.y = 263,
        e
    },
    i.pet2_i = function() {
        var e = new eui.Group;
        return this.pet2 = e,
        e.visible = !1,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this.grp_pet2Show1_i(), this.grp_pet2Show5_i(), this.grp_pet2Show4_i(), this.grp_pet2Show2_i(), this.grp_pet2Show3_i(), this.collection_22_i(), this.favorite_22_i(), this.collection_23_i(), this.favorite_23_i(), this.collection_21_i(), this.favorite_21_i(), this.collection_25_i(), this.favorite_25_i(), this.collection_24_i(), this.favorite_24_i()],
        e
    },
    i.grp_pet2Show1_i = function() {
        var e = new eui.Group;
        return this.grp_pet2Show1 = e,
        e.x = 0,
        e.y = 103,
        e.elementsContent = [this.pet2_show1_i(), this.noOpen_21_i(), this._Label32_i()],
        e
    },
    i.pet2_show1_i = function() {
        var e = new eui.Image;
        return this.pet2_show1 = e,
        e.source = "aa_main_pet2_show1_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.noOpen_21_i = function() {
        var e = new eui.Group;
        return this.noOpen_21 = e,
        e.x = 20,
        e.y = 78,
        e.elementsContent = [this._Image24_i(), this._Label31_i()],
        e
    },
    i._Image24_i = function() {
        var e = new eui.Image;
        return e.source = "aa_main_noopen_png",
        e.width = 93,
        e.x = 0,
        e.y = 0,
        e
    },
    i._Label31_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "敬请期待",
        e.textAlign = "center",
        e.textColor = 6724336,
        e.width = 93,
        e.x = 0,
        e.y = 6,
        e
    },
    i._Label32_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "布莱克",
        e.textColor = 16777215,
        e.x = 37,
        e.y = 128,
        e
    },
    i.grp_pet2Show5_i = function() {
        var e = new eui.Group;
        return this.grp_pet2Show5 = e,
        e.visible = !0,
        e.x = 830,
        e.y = 19,
        e.elementsContent = [this.pet2_show5_i(), this.noOpen_25_i(), this._Label34_i()],
        e
    },
    i.pet2_show5_i = function() {
        var e = new eui.Image;
        return this.pet2_show5 = e,
        e.source = "aa_main_pet2_show5_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.noOpen_25_i = function() {
        var e = new eui.Group;
        return this.noOpen_25 = e,
        e.x = 27,
        e.y = 108,
        e.elementsContent = [this._Image25_i(), this._Label33_i()],
        e
    },
    i._Image25_i = function() {
        var e = new eui.Image;
        return e.source = "aa_main_noopen_png",
        e.width = 163,
        e.x = 0,
        e.y = 0,
        e
    },
    i._Label33_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "敬请期待",
        e.textAlign = "center",
        e.textColor = 6724336,
        e.width = 163,
        e.x = 0,
        e.y = 6,
        e
    },
    i._Label34_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "混沌布莱克",
        e.textColor = 16777215,
        e.x = 55,
        e.y = 221,
        e
    },
    i.grp_pet2Show4_i = function() {
        var e = new eui.Group;
        return this.grp_pet2Show4 = e,
        e.x = 598,
        e.y = 236,
        e.elementsContent = [this.pet2_show4_i(), this.noOpen_24_i(), this._Label36_i()],
        e
    },
    i.pet2_show4_i = function() {
        var e = new eui.Image;
        return this.pet2_show4 = e,
        e.skewY = 180,
        e.source = "aa_main_pet2_show4_png",
        e.x = 197,
        e.y = 0,
        e
    },
    i.noOpen_24_i = function() {
        var e = new eui.Group;
        return this.noOpen_24 = e,
        e.x = 27,
        e.y = 108,
        e.elementsContent = [this._Image26_i(), this._Label35_i()],
        e
    },
    i._Image26_i = function() {
        var e = new eui.Image;
        return e.source = "aa_main_noopen_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i._Label35_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "敬请期待",
        e.textAlign = "center",
        e.textColor = 6724336,
        e.width = 143,
        e.x = 0,
        e.y = 6,
        e
    },
    i._Label36_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "王·布莱克",
        e.textColor = 16777215,
        e.x = 54,
        e.y = 197,
        e
    },
    i.grp_pet2Show2_i = function() {
        var e = new eui.Group;
        return this.grp_pet2Show2 = e,
        e.x = 194,
        e.y = 242,
        e.elementsContent = [this.pet2_show2_i(), this.noOpen_22_i(), this._Label38_i()],
        e
    },
    i.pet2_show2_i = function() {
        var e = new eui.Image;
        return this.pet2_show2 = e,
        e.source = "aa_main_pet2_show2_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.noOpen_22_i = function() {
        var e = new eui.Group;
        return this.noOpen_22 = e,
        e.x = 20,
        e.y = 88,
        e.elementsContent = [this._Image27_i(), this._Label37_i()],
        e
    },
    i._Image27_i = function() {
        var e = new eui.Image;
        return e.source = "aa_main_noopen_png",
        e.width = 113,
        e.x = 0,
        e.y = 0,
        e
    },
    i._Label37_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "敬请期待",
        e.textAlign = "center",
        e.textColor = 6724336,
        e.width = 113,
        e.x = 0,
        e.y = 6,
        e
    },
    i._Label38_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "夜魔之神布莱克",
        e.textColor = 16777215,
        e.x = 20,
        e.y = 152,
        e
    },
    i.grp_pet2Show3_i = function() {
        var e = new eui.Group;
        return this.grp_pet2Show3 = e,
        e.x = 397,
        e.y = 0,
        e.elementsContent = [this.pet2_show3_i(), this.noOpen_23_i(), this._Label40_i()],
        e
    },
    i.pet2_show3_i = function() {
        var e = new eui.Image;
        return this.pet2_show3 = e,
        e.source = "aa_main_pet2_show3_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.noOpen_23_i = function() {
        var e = new eui.Group;
        return this.noOpen_23 = e,
        e.x = 23,
        e.y = 98,
        e.elementsContent = [this._Image28_i(), this._Label39_i()],
        e
    },
    i._Image28_i = function() {
        var e = new eui.Image;
        return e.source = "aa_main_noopen_png",
        e.width = 130,
        e.x = 0,
        e.y = 0,
        e
    },
    i._Label39_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "敬请期待",
        e.textAlign = "center",
        e.textColor = 6724336,
        e.width = 130,
        e.x = 0,
        e.y = 6,
        e
    },
    i._Label40_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "夜魔之神·布莱克",
        e.textColor = 16777215,
        e.x = 27,
        e.y = 175,
        e
    },
    i.collection_22_i = function() {
        var e = new eui.Image;
        return this.collection_22 = e,
        e.scaleX = .8,
        e.scaleY = .8,
        e.source = "aa_main_collection_png",
        e.x = 216,
        e.y = 265,
        e
    },
    i.favorite_22_i = function() {
        var e = new eui.Image;
        return this.favorite_22 = e,
        e.scaleX = .8,
        e.scaleY = .8,
        e.source = "aa_main_favorite_png",
        e.x = 224,
        e.y = 265,
        e
    },
    i.collection_23_i = function() {
        var e = new eui.Image;
        return this.collection_23 = e,
        e.scaleX = .85,
        e.scaleY = .85,
        e.source = "aa_main_collection_png",
        e.x = 424,
        e.y = 26,
        e
    },
    i.favorite_23_i = function() {
        var e = new eui.Image;
        return this.favorite_23 = e,
        e.scaleX = .85,
        e.scaleY = .85,
        e.source = "aa_main_favorite_png",
        e.x = 432,
        e.y = 26,
        e
    },
    i.collection_21_i = function() {
        var e = new eui.Image;
        return this.collection_21 = e,
        e.scaleX = .75,
        e.scaleY = .75,
        e.source = "aa_main_collection_png",
        e.visible = !1,
        e.x = 19,
        e.y = 122,
        e
    },
    i.favorite_21_i = function() {
        var e = new eui.Image;
        return this.favorite_21 = e,
        e.scaleX = .75,
        e.scaleY = .75,
        e.source = "aa_main_favorite_png",
        e.visible = !1,
        e.x = 27,
        e.y = 122,
        e
    },
    i.collection_25_i = function() {
        var e = new eui.Image;
        return this.collection_25 = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "aa_main_collection_png",
        e.x = 860,
        e.y = 49,
        e
    },
    i.favorite_25_i = function() {
        var e = new eui.Image;
        return this.favorite_25 = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "aa_main_favorite_png",
        e.x = 868,
        e.y = 49,
        e
    },
    i.collection_24_i = function() {
        var e = new eui.Image;
        return this.collection_24 = e,
        e.scaleX = .9,
        e.scaleY = .9,
        e.source = "aa_main_collection_png",
        e.x = 625.5,
        e.y = 263,
        e
    },
    i.favorite_24_i = function() {
        var e = new eui.Image;
        return this.favorite_24 = e,
        e.scaleX = .9,
        e.scaleY = .9,
        e.source = "aa_main_favorite_png",
        e.x = 633,
        e.y = 263,
        e
    },
    i.pet1_i = function() {
        var e = new eui.Group;
        return this.pet1 = e,
        e.visible = !0,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this.grp_pet1Show1_i(), this.grp_pet1Show5_i(), this.grp_pet1Show4_i(), this.grp_pet1Show2_i(), this.grp_pet1Show3_i(), this.collection_12_i(), this.favorite_12_i(), this.collection_13_i(), this.favorite_13_i(), this.collection_11_i(), this.favorite_11_i(), this.collection_15_i(), this.favorite_15_i(), this.collection_14_i(), this.favorite_14_i()],
        e
    },
    i.grp_pet1Show1_i = function() {
        var e = new eui.Group;
        return this.grp_pet1Show1 = e,
        e.x = 0,
        e.y = 103,
        e.elementsContent = [this.pet1_show1_i(), this.noOpen_11_i(), this._Label42_i()],
        e
    },
    i.pet1_show1_i = function() {
        var e = new eui.Image;
        return this.pet1_show1 = e,
        e.source = "aa_main_pet1_show1_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.noOpen_11_i = function() {
        var e = new eui.Group;
        return this.noOpen_11 = e,
        e.x = 20,
        e.y = 78,
        e.elementsContent = [this._Image29_i(), this._Label41_i()],
        e
    },
    i._Image29_i = function() {
        var e = new eui.Image;
        return e.source = "aa_main_noopen_png",
        e.width = 93,
        e.x = 0,
        e.y = 0,
        e
    },
    i._Label41_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "敬请期待",
        e.textAlign = "center",
        e.textColor = 6724336,
        e.width = 93,
        e.x = 0,
        e.y = 6,
        e
    },
    i._Label42_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "缪斯",
        e.textColor = 16777215,
        e.x = 47,
        e.y = 128,
        e
    },
    i.grp_pet1Show5_i = function() {
        var e = new eui.Group;
        return this.grp_pet1Show5 = e,
        e.x = 830,
        e.y = 19,
        e.elementsContent = [this.pet1_show5_i(), this.noOpen_15_i(), this._Label44_i()],
        e
    },
    i.pet1_show5_i = function() {
        var e = new eui.Image;
        return this.pet1_show5 = e,
        e.source = "aa_main_pet1_show5_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.noOpen_15_i = function() {
        var e = new eui.Group;
        return this.noOpen_15 = e,
        e.x = 27,
        e.y = 108,
        e.elementsContent = [this._Image30_i(), this._Label43_i()],
        e
    },
    i._Image30_i = function() {
        var e = new eui.Image;
        return e.source = "aa_main_noopen_png",
        e.width = 163,
        e.x = 0,
        e.y = 0,
        e
    },
    i._Label43_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "敬请期待",
        e.textAlign = "center",
        e.textColor = 6724336,
        e.width = 163,
        e.x = 0,
        e.y = 6,
        e
    },
    i._Label44_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "圣瞳缪斯",
        e.textColor = 16777215,
        e.x = 65,
        e.y = 221,
        e
    },
    i.grp_pet1Show4_i = function() {
        var e = new eui.Group;
        return this.grp_pet1Show4 = e,
        e.x = 598,
        e.y = 236,
        e.elementsContent = [this.pet1_show4_i(), this.noOpen_14_i(), this._Label46_i()],
        e
    },
    i.pet1_show4_i = function() {
        var e = new eui.Image;
        return this.pet1_show4 = e,
        e.source = "aa_main_pet1_show4_png",
        e.visible = !0,
        e.x = 0,
        e.y = 0,
        e
    },
    i.noOpen_14_i = function() {
        var e = new eui.Group;
        return this.noOpen_14 = e,
        e.x = 27,
        e.y = 108,
        e.elementsContent = [this._Image31_i(), this._Label45_i()],
        e
    },
    i._Image31_i = function() {
        var e = new eui.Image;
        return e.source = "aa_main_noopen_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i._Label45_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "敬请期待",
        e.textAlign = "center",
        e.textColor = 6724336,
        e.width = 143,
        e.x = 0,
        e.y = 6,
        e
    },
    i._Label46_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "王·缪斯",
        e.textColor = 16777215,
        e.x = 64,
        e.y = 197,
        e
    },
    i.grp_pet1Show2_i = function() {
        var e = new eui.Group;
        return this.grp_pet1Show2 = e,
        e.x = 194,
        e.y = 242,
        e.elementsContent = [this.pet1_show2_i(), this.noOpen_12_i(), this._Label48_i()],
        e
    },
    i.pet1_show2_i = function() {
        var e = new eui.Image;
        return this.pet1_show2 = e,
        e.source = "aa_main_pet1_show2_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.noOpen_12_i = function() {
        var e = new eui.Group;
        return this.noOpen_12 = e,
        e.x = 20,
        e.y = 88,
        e.elementsContent = [this._Image32_i(), this._Label47_i()],
        e
    },
    i._Image32_i = function() {
        var e = new eui.Image;
        return e.source = "aa_main_noopen_png",
        e.width = 113,
        e.x = 0,
        e.y = 0,
        e
    },
    i._Label47_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "敬请期待",
        e.textAlign = "center",
        e.textColor = 6724336,
        e.width = 113,
        e.x = 0,
        e.y = 6,
        e
    },
    i._Label48_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "赤瞳缪斯",
        e.textColor = 16777215,
        e.x = 40,
        e.y = 150,
        e
    },
    i.grp_pet1Show3_i = function() {
        var e = new eui.Group;
        return this.grp_pet1Show3 = e,
        e.x = 397,
        e.y = 0,
        e.elementsContent = [this.pet1_show3_i(), this.noOpen_13_i(), this._Label50_i()],
        e
    },
    i.pet1_show3_i = function() {
        var e = new eui.Image;
        return this.pet1_show3 = e,
        e.source = "aa_main_pet1_show3_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.noOpen_13_i = function() {
        var e = new eui.Group;
        return this.noOpen_13 = e,
        e.x = 23,
        e.y = 98,
        e.elementsContent = [this._Image33_i(), this._Label49_i()],
        e
    },
    i._Image33_i = function() {
        var e = new eui.Image;
        return e.source = "aa_main_noopen_png",
        e.width = 130,
        e.x = 0,
        e.y = 0,
        e
    },
    i._Label49_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "敬请期待",
        e.textAlign = "center",
        e.textColor = 6724336,
        e.width = 130,
        e.x = 0,
        e.y = 6,
        e
    },
    i._Label50_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "赤瞳·缪斯",
        e.textColor = 16777215,
        e.x = 44,
        e.y = 173,
        e
    },
    i.collection_12_i = function() {
        var e = new eui.Image;
        return this.collection_12 = e,
        e.scaleX = .8,
        e.scaleY = .8,
        e.source = "aa_main_collection_png",
        e.x = 216,
        e.y = 265,
        e
    },
    i.favorite_12_i = function() {
        var e = new eui.Image;
        return this.favorite_12 = e,
        e.scaleX = .8,
        e.scaleY = .8,
        e.source = "aa_main_favorite_png",
        e.x = 224,
        e.y = 265,
        e
    },
    i.collection_13_i = function() {
        var e = new eui.Image;
        return this.collection_13 = e,
        e.scaleX = .85,
        e.scaleY = .85,
        e.source = "aa_main_collection_png",
        e.x = 424,
        e.y = 26,
        e
    },
    i.favorite_13_i = function() {
        var e = new eui.Image;
        return this.favorite_13 = e,
        e.scaleX = .85,
        e.scaleY = .85,
        e.source = "aa_main_favorite_png",
        e.x = 432,
        e.y = 26,
        e
    },
    i.collection_11_i = function() {
        var e = new eui.Image;
        return this.collection_11 = e,
        e.scaleX = .75,
        e.scaleY = .75,
        e.source = "aa_main_collection_png",
        e.visible = !1,
        e.x = 19,
        e.y = 122,
        e
    },
    i.favorite_11_i = function() {
        var e = new eui.Image;
        return this.favorite_11 = e,
        e.scaleX = .75,
        e.scaleY = .75,
        e.source = "aa_main_favorite_png",
        e.visible = !1,
        e.x = 27,
        e.y = 122,
        e
    },
    i.collection_15_i = function() {
        var e = new eui.Image;
        return this.collection_15 = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "aa_main_collection_png",
        e.x = 860,
        e.y = 49,
        e
    },
    i.favorite_15_i = function() {
        var e = new eui.Image;
        return this.favorite_15 = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "aa_main_favorite_png",
        e.x = 868,
        e.y = 49,
        e
    },
    i.collection_14_i = function() {
        var e = new eui.Image;
        return this.collection_14 = e,
        e.scaleX = .9,
        e.scaleY = .9,
        e.source = "aa_main_collection_png",
        e.x = 625.5,
        e.y = 263,
        e
    },
    i.favorite_14_i = function() {
        var e = new eui.Image;
        return this.favorite_14 = e,
        e.scaleX = .9,
        e.scaleY = .9,
        e.source = "aa_main_favorite_png",
        e.x = 633,
        e.y = 263,
        e
    },
    i.headSelect_i = function() {
        var e = new eui.Image;
        return this.headSelect = e,
        e.source = "aa_main_headselect_png",
        e.x = 629,
        e.y = 487,
        e
    },
    t
} (eui.Skin);