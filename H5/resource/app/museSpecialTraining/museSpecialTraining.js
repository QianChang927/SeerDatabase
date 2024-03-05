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
    return new(i || (i = Promise))(function(r, a) {
        function s(e) {
            try {
                u(n.next(e))
            } catch(t) {
                a(t)
            }
        }
        function o(e) {
            try {
                u(n["throw"](e))
            } catch(t) {
                a(t)
            }
        }
        function u(e) {
            e.done ? r(e.value) : new i(function(t) {
                t(e.value)
            }).then(s, o)
        }
        u((n = n.apply(e, t || [])).next())
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
        if (r) throw new TypeError("Generator is already executing.");
        for (; u;) try {
            if (r = 1, a && (s = a[2 & i[0] ? "return": i[0] ? "throw": "next"]) && !(s = s.call(a, i[1])).done) return s;
            switch (a = 0, s && (i = [0, s.value]), i[0]) {
            case 0:
            case 1:
                s = i;
                break;
            case 4:
                return u.label++,
                {
                    value: i[1],
                    done: !1
                };
            case 5:
                u.label++,
                a = i[1],
                i = [0];
                continue;
            case 7:
                i = u.ops.pop(),
                u.trys.pop();
                continue;
            default:
                if (s = u.trys, !(s = s.length > 0 && s[s.length - 1]) && (6 === i[0] || 2 === i[0])) {
                    u = 0;
                    continue
                }
                if (3 === i[0] && (!s || i[1] > s[0] && i[1] < s[3])) {
                    u.label = i[1];
                    break
                }
                if (6 === i[0] && u.label < s[1]) {
                    u.label = s[1],
                    s = i;
                    break
                }
                if (s && u.label < s[2]) {
                    u.label = s[2],
                    u.ops.push(i);
                    break
                }
                s[2] && u.ops.pop(),
                u.trys.pop();
                continue
            }
            i = t.call(e, u)
        } catch(n) {
            i = [6, n],
            a = 0
        } finally {
            r = s = 0
        }
        if (5 & i[0]) throw i[1];
        return {
            value: i[0] ? i[1] : void 0,
            done: !0
        }
    }
    var r, a, s, o, u = {
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
museSpecialTraining; !
function(e) {
    e.progress = [];
    var t = function(t) {
        function n() {
            var e = t.call(this) || this;
            return e.boss = [{
                name: "昆仑",
                id: 2378,
                petId: 1622
            },
            {
                name: "泽拉斯",
                id: 2379,
                petId: 1554
            },
            {
                name: "摩耶斯",
                id: 2380,
                petId: 1796
            },
            {
                name: "杰洛里",
                id: 2381,
                petId: 1637
            },
            {
                name: "耶里梅斯",
                id: 2382,
                petId: 1815
            },
            {
                name: " 萨恩德",
                id: 2383,
                petId: 1740
            },
            {
                name: "兰帕德",
                id: 2384,
                petId: 1552
            },
            {
                name: "斯吉亚",
                id: 2385,
                petId: 1693
            }],
            e.skinName = MuseSpecialTrainingSkin,
            e
        }
        return __extends(n, t),
        n.prototype.childrenCreated = function() {
            var e = this;
            t.prototype.childrenCreated.call(this),
            this.mainGroup.left = DeviceInfoManager.adapterOffSetX || 19,
            this.mainGroup.right = DeviceInfoManager.adapterOffSetX || 19,
            this._scr.left = this.mainGroup.left + 10,
            this.adaptBgByScale(this.bg),
            t.prototype.initOldPveBtnClose.call(this, 0, this, "muse_special_training_title_png"),
            this._list.itemRenderer = i,
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
            ImageButtonUtil.add(this.skill,
            function() {
                var e = EffectIconControl.getAllEffctByPetId(1633);
                ModuleManager.showModule("petEffDescPanel", ["pet_eff_desc_panel"], e, "", AppDoStyle.NULL)
            },
            this, !1),
            ImageButtonUtil.add(this.challenge,
            function() {
                e.fightBoss()
            },
            this),
            ImageButtonUtil.add(this.tx,
            function() {
                PetManager.isDefaultPet(1633) ? SocketConnection.sendByQueue(42105, [0, PetManager.defaultTime],
                function() {
                    PetManager.upDateBagPetInfo(PetManager.defaultTime),
                    e.updateView(),
                    Alert.show("缪斯已激活专属特性,是否立刻前往背包查看？",
                    function() {
                        ModuleManager.showModuleByID(10)
                    })
                }) : Alarm.show("请将缪斯放入背包首发位置",
                function() {
                    ModuleManager.showModuleByID(10)
                })
            },
            this),
            this._list.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.tap, this),
            EventManager.addEventListener(PetFightEvent.ALARM_CLICK,
            function(t) {
                e.updateView()
            },
            this),
            this.updateView()
        },
        n.prototype.reShow = function() {
            this.updateView()
        },
        n.prototype.updateView = function() {
            var t = this,
            i = PetManager.getPetisOpenEffect(1633, 279) > 0;
            this.done.visible = i,
            KTool.getMultiValue([6114],
            function(n) {
                return __awaiter(t, void 0, void 0,
                function() {
                    var t, r, a;
                    return __generator(this,
                    function(s) {
                        switch (s.label) {
                        case 0:
                            for (t = 0, e.progress = [], r = 0; 8 > r; r++) a = KTool.getBit(n[0], r + 1),
                            0 == a && 1 > t && (t = r + 1),
                            e.progress.push(a);
                            return this._list.dataProvider = new eui.ArrayCollection(this.boss),
                            [4, wait(0)];
                        case 1:
                            return s.sent(),
                            i ? (this.pet.source = "muse_special_training_why_png", this.tip.visible = !1, this.challenge.visible = this.tx.visible = !1) : (t > 0 ? (this._list.setSelectedIndex(t - 1), this.tap()) : this.pet.source = "muse_special_training_why_png", this.challenge.visible = t > 0, this.tx.visible = 0 == t, this.tip.visible = t > 0),
                            [2]
                        }
                    })
                })
            })
        },
        n.prototype.tap = function() {
            var e = this._list.selectedItem;
            this.pet.source = ClientConfig.getPveMusePath(~~e.petId)
        },
        n.prototype.fightBoss = function() {
            var e = ~~this._list.selectedItem.id;
            PetManager.isDefaultPet(1633) ? FightManager.fightNoMapBoss(e) : (StatLogger.log("20230804版本系统功能", "战神联盟初始形态搬迁", "缪斯-点击【开始战斗】时首发不对"), Alarm.show("请将缪斯放入背包首发位置",
            function() {
                ModuleManager.showModuleByID(10)
            }))
        },
        n.prototype.destroy = function() {
            t.prototype.destroy.call(this),
            this._list.removeEventListener(eui.ItemTapEvent.ITEM_TAP, this.tap, this)
        },
        n
    } (BaseModule);
    e.MuseSpecialTraining = t,
    __reflect(t.prototype, "museSpecialTraining.MuseSpecialTraining");
    var i = function(t) {
        function i() {
            var e = t.call(this) || this;
            return e.skinName = MuseSpecialTrainingItemSkin,
            e
        }
        return __extends(i, t),
        i.prototype.dataChanged = function() {
            t.prototype.dataChanged.call(this),
            this.data && (this.info = this.data, this.updateView())
        },
        i.prototype.updateView = function() {
            1 == e.progress[this.itemIndex] ? (this.currentState = "got", this.touchEnabled = this.touchChildren = !1) : this.touchEnabled = this.touchChildren = !0,
            this.pet.source = "muse_special_training_" + this.info.petId + "_png"
        },
        i
    } (BaseItemRenderer);
    e.MuseSpecialTrainingItem = i,
    __reflect(i.prototype, "museSpecialTraining.MuseSpecialTrainingItem")
} (museSpecialTraining || (museSpecialTraining = {}));
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
generateEUI.paths["resource/eui_skins/MuseSpecialTrainingItemSkin.exml"] = window.MuseSpecialTrainingItemSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["go", "pet", "select", "got"],
        this.currentState = "up",
        this.height = 72,
        this.width = 72,
        this.elementsContent = [this.go_i(), this.pet_i(), this.select_i(), this.got_i()],
        this.states = [new eui.State("down", [new eui.SetProperty("go", "visible", !1), new eui.SetProperty("got", "visible", !1)]), new eui.State("up", [new eui.SetProperty("select", "visible", !1), new eui.SetProperty("got", "visible", !1)]), new eui.State("got", [new eui.SetProperty("go", "visible", !0), new eui.SetProperty("select", "visible", !1)])]
    }
    __extends(t, e);
    var i = t.prototype;
    return i.go_i = function() {
        var e = new eui.Image;
        return this.go = e,
        e.horizontalCenter = 0,
        e.source = "muse_special_training_go_png",
        e.verticalCenter = 0,
        e
    },
    i.pet_i = function() {
        var e = new eui.Image;
        return this.pet = e,
        e.horizontalCenter = 0,
        e.verticalCenter = 0,
        e
    },
    i.select_i = function() {
        var e = new eui.Image;
        return this.select = e,
        e.horizontalCenter = 0,
        e.source = "muse_special_training_select_png",
        e.verticalCenter = 0,
        e
    },
    i.got_i = function() {
        var e = new eui.Image;
        return this.got = e,
        e.horizontalCenter = 0,
        e.source = "muse_special_training_got_png",
        e.verticalCenter = 0,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/MuseSpecialTrainingSkin.exml"] = window.MuseSpecialTrainingSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["bg", "tip", "bag", "cure", "pet", "muse", "challenge", "tx", "done", "skill", "mainGroup", "_list", "_scr"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this.mainGroup_i(), this._scr_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i.bg_i = function() {
        var e = new eui.Image;
        return this.bg = e,
        e.horizontalCenter = 0,
        e.source = "muse_special_training_bg_jpg",
        e.verticalCenter = 0,
        e
    },
    i.mainGroup_i = function() {
        var e = new eui.Group;
        return this.mainGroup = e,
        e.cacheAsBitmap = !0,
        e.height = 558,
        e.horizontalCenter = 0,
        e.left = 19,
        e.right = 19,
        e.y = 44,
        e.elementsContent = [this._Group1_i(), this.tip_i(), this.bag_i(), this.cure_i(), this._Image2_i(), this.pet_i(), this._Image3_i(), this.muse_i(), this._Image4_i(), this.challenge_i(), this.tx_i(), this.done_i(), this._Image5_i(), this.skill_i()],
        e
    },
    i._Group1_i = function() {
        var e = new eui.Group;
        return e.x = 123,
        e.y = 10,
        e.elementsContent = [this._Image1_i(), this._Label1_i()],
        e
    },
    i._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "muse_special_training_tipsbg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 19.9068517867105,
        e.text = "战胜全部对手即可完成特训，激活特性“瞳”",
        e.textColor = 16759667,
        e.x = 239,
        e.y = 5,
        e
    },
    i.tip_i = function() {
        var e = new eui.Image;
        return this.tip = e,
        e.horizontalCenter = 145,
        e.source = "muse_special_training_tip_png",
        e.y = 522,
        e
    },
    i.bag_i = function() {
        var e = new eui.Image;
        return this.bag = e,
        e.left = 0,
        e.source = "muse_special_training_bag_png",
        e.y = 398,
        e
    },
    i.cure_i = function() {
        var e = new eui.Image;
        return this.cure = e,
        e.left = 0,
        e.source = "muse_special_training_cure_png",
        e.y = 489,
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = -193.5,
        e.source = "muse_special_training_petd_png",
        e.visible = !0,
        e.y = 313,
        e
    },
    i.pet_i = function() {
        var e = new eui.Image;
        return this.pet = e,
        e.bottom = 87,
        e.horizontalCenter = -194.5,
        e
    },
    i._Image3_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = 295.5,
        e.source = "muse_special_training_petd_png",
        e.y = 313,
        e
    },
    i.muse_i = function() {
        var e = new eui.Image;
        return this.muse = e,
        e.horizontalCenter = 295.5,
        e.source = "muse_special_training_muse_png",
        e.y = 63,
        e
    },
    i._Image4_i = function() {
        var e = new eui.Image;
        return e.left = 2,
        e.source = "muse_special_training_di_png",
        e.y = 36,
        e
    },
    i.challenge_i = function() {
        var e = new eui.Image;
        return this.challenge = e,
        e.horizontalCenter = 296,
        e.source = "muse_special_training_btntiaozhan_png",
        e.y = 464,
        e
    },
    i.tx_i = function() {
        var e = new eui.Image;
        return this.tx = e,
        e.horizontalCenter = 291.5,
        e.source = "muse_special_training_tx_png",
        e.y = 459.378,
        e
    },
    i.done_i = function() {
        var e = new eui.Image;
        return this.done = e,
        e.horizontalCenter = 303.5,
        e.source = "muse_special_training_done_png",
        e.y = 469.378,
        e
    },
    i._Image5_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = 60,
        e.source = "muse_special_training_vs_png",
        e.y = 166,
        e
    },
    i.skill_i = function() {
        var e = new eui.Image;
        return this.skill = e,
        e.right = 0,
        e.source = "muse_special_training_skill_png",
        e.y = 0,
        e
    },
    i._scr_i = function() {
        var e = new eui.Scroller;
        return this._scr = e,
        e.height = 332,
        e.left = 29,
        e.width = 171,
        e.y = 94.189,
        e.viewport = this._list_i(),
        e
    },
    i._list_i = function() {
        var e = new eui.List;
        return this._list = e,
        e.itemRendererSkinName = MuseSpecialTrainingItemSkin,
        e.layout = this._TileLayout1_i(),
        e
    },
    i._TileLayout1_i = function() {
        var e = new eui.TileLayout;
        return e.horizontalGap = 14,
        e.orientation = "rows",
        e.paddingLeft = 6,
        e.paddingRight = 6,
        e.paddingTop = 6,
        e.requestedColumnCount = 2,
        e
    },
    t
} (eui.Skin);