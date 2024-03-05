var __reflect = this && this.__reflect ||
function(i, e, n) {
    i.__class__ = e,
    n ? n.push(e) : n = [e],
    i.__types__ = i.__types__ ? n.concat(i.__types__) : n
},
__extends = this && this.__extends ||
function(i, e) {
    function n() {
        this.constructor = i
    }
    for (var t in e) e.hasOwnProperty(t) && (i[t] = e[t]);
    n.prototype = e.prototype,
    i.prototype = new n
},
kingHamorPop; !
function(i) {
    var e = function(i) {
        function e() {
            var e = i.call(this) || this;
            return e._petId_0 = 3022,
            e._petId_1 = 3036,
            e._effectId_0 = 715,
            e._effectId_1 = 720,
            e.hasOpenEffctId = 2230,
            e.hasOpen = !1,
            e.args = "75 10 15 3 20 20",
            e.skinName = KingHamorFettersSkin,
            e
        }
        return __extends(e, i),
        e.prototype.childrenCreated = function() {
            var e = this;
            i.prototype.childrenCreated.call(this),
            this.anchorOffsetX = this.width / 2,
            this.anchorOffsetY = this.height / 2,
            this.x = egret.lifecycle.stage.stageWidth / 2,
            this.y = egret.lifecycle.stage.stageHeight / 2,
            this.scaleX = this.scaleY = .5,
            egret.Tween.get(this).to({
                scaleX: 1,
                scaleY: 1
            },
            300, egret.Ease.getBackOut(1)),
            this.updateData(),
            ImageButtonUtil.add(this.btnGo_0,
            function() {
                e.hide()
            },
            this),
            ImageButtonUtil.add(this.btnGo_1,
            function() {
                StatLogger.log("1218版本系统功能", "王之哈莫关卡", "点击【前往获得】进入精灵王乔特鲁德关卡"),
                e.hide(),
                ModuleManager.hideModule("kingHamorPop"),
                ModuleManager.showModuleByID(19, {
                    monId: 6
                })
            },
            this),
            ImageButtonUtil.add(this.btnOpen,
            function() {
                var i = PetManager.getPetsById(e._petId_0)[0],
                n = PetManager.getPetsById(e._petId_1)[0];
                if (!i || !n) return StatLogger.log("1218版本系统功能", "王之哈莫关卡", "有精灵未放入背包，羁绊开启失败（弹窗）"),
                void Alarm.show("需要把王之哈莫和乔特鲁德都放入出战背包才能开启他们的龙族羁绊效果哦！");
                var t = PetManager.getPetisOpenEffect(e._petId_0, e._effectId_0),
                _ = PetManager.getPetisOpenEffect(e._petId_1, e._effectId_1);
                if (!t || !_) return StatLogger.log("1218版本系统功能", "王之哈莫关卡", "有精灵未开启专属特性，羁绊开启失败（弹窗）"),
                void Alarm.show("需要将王之哈莫和乔特鲁德的专属特性都开启了之后才能激活他们的龙族羁绊效果哦！");
                for (var r = "100 100 600 10 50 20 20",
                g = PetManager.getPetInfo(t).effectList, a = PetManager.getPetInfo(_).effectList, o = !1, s = !1, h = 0; h < g.length; h++) {
                    var u = g[h];
                    if (720 == u.effectID && u.args == r) {
                        o = !0;
                        break
                    }
                }
                for (var h = 0; h < a.length; h++) {
                    var u = a[h];
                    if (720 == u.effectID && u.args == r) {
                        s = !0;
                        break
                    }
                }
                return o || s || e.hasOpen ? void Alarm.show("您已经开启过龙族羁绊效果了！") : void SocketConnection.sendByQueue(47271, [7, 0],
                function() {
                    Alarm.show("开启成功"),
                    PetManager.updateBagInfo(function() {
                        e.hasOpen = !0,
                        e.updateData()
                    })
                })
            },
            this),
            ImageButtonUtil.add(this.btnClose,
            function() {
                e.hide()
            },
            this)
        },
        e.prototype.updateData = function() {
            var i = this;
            KTool.getBitSet([19410],
            function(e) {
                i._state = e[0],
                i.updateView()
            })
        },
        e.prototype.updateView = function() {
            var i = this,
            e = PetManager.getPetsById(this._petId_0, !0)[0];
            if (e) {
                var n = e.catchTime;
                this.checkState(n)
            } else PetStorage2015InfoManager.getTotalInfo(function() {
                var e = PetStorage2015InfoManager.getInfoByID(i._petId_0)[0];
                if (e) {
                    var n = e.catchTime;
                    i.checkState(n)
                }
            })
        },
        e.prototype.checkState = function(i) {
            var e = this;
            PetManager.upDateBagPetInfo(i,
            function(i) {
                for (var n = i.effectList,
                t = !1,
                _ = 0; _ < n.length; _++) {
                    var r = i.effectList[_];
                    if (r.effectID == e._effectId_0 && r.args == e.args) {
                        t = !0;
                        break
                    }
                }
            })
        },
        e.prototype.destroy = function() {
            ImageButtonUtil.removeAll(this),
            i.prototype.destroy.call(this)
        },
        e
    } (PopView);
    i.KingHamorFetters = e,
    __reflect(e.prototype, "kingHamorPop.KingHamorFetters")
} (kingHamorPop || (kingHamorPop = {}));
var __reflect = this && this.__reflect ||
function(i, e, n) {
    i.__class__ = e,
    n ? n.push(e) : n = [e],
    i.__types__ = i.__types__ ? n.concat(i.__types__) : n
},
__extends = this && this.__extends ||
function(i, e) {
    function n() {
        this.constructor = i
    }
    for (var t in e) e.hasOwnProperty(t) && (i[t] = e[t]);
    n.prototype = e.prototype,
    i.prototype = new n
},
kingHamorPop; !
function(i) {
    var e = function(e) {
        function n() {
            var i = e.call(this) || this;
            return i.skinName = KingHamorPopSkin,
            i
        }
        return __extends(n, e),
        n.prototype.childrenCreated = function() {
            var i = this;
            e.prototype.childrenCreated.call(this),
            this.initOldPveBtnClose(0, this, "",
            function() {
                ModuleManager.hideModule(i)
            },
            this),
            this.addEvent(),
            this.updateData()
        },
        n.prototype.addEvent = function() {
            var e = this;
            ImageButtonUtil.add(this.btnOneTap,
            function() {
                BuyProductManager.buyProductBySocket(246592,
                function() {
                    SocketConnection.sendByQueue(47272, [1, 1],
                    function() {
                        e.updateData()
                    })
                },
                e)
            },
            this),
            ImageButtonUtil.add(this.btnFetters,
            function() {
                StatLogger.log("1218版本系统功能", "王之哈莫关卡", "打开龙族羁绊面板"),
                PopViewManager.getInstance().openView(new i.KingHamorFetters)
            },
            this),
            ImageButtonUtil.add(this.btnFree,
            function() {
                StatLogger.log("1218版本系统功能", "王之哈莫关卡", "点击【免费获得】打开关卡面板"),
                e.grp_right.visible = !1,
                egret.Tween.get(e).to({
                    scaleX: 2,
                    scaleY: 2
                },
                300).call(function() {
                    ModuleManager.hideModule(e),
                    ModuleManager.showModuleByID(70)
                })
            },
            this),
            ImageButtonUtil.add(this.btnThree,
            function() {
                e.addChild(new i.KingHamorSign)
            },
            this),
            ImageButtonUtil.add(this.btnInfo,
            function() {
                PetManager.showPetIntroduce(3022)
            },
            this),
            EventManager.addEventListener("king_hamor_pop_update", this.updateData, this)
        },
        n.prototype.updateData = function() {
            var i = this;
            KTool.getMultiValue([2714, 123027],
            function(e) {
                i._state = e[0],
                i._awardState = [KTool.getBit(e[1], 17), KTool.getBit(e[1], 18), KTool.getBit(e[1], 19)],
                i.updateView()
            })
        },
        n.prototype.updateView = function() {
            var i = 5 == this._state;
            this.flag_got_0.visible = this.flag_got_1.visible = i,
            this.btnFree.visible = this.btnOneTap.visible = !i;
            var e = 3 == this._awardState.reduce(function(i, e) {
                return i + e
            });
            this.flag_got_2.visible = e,
            DisplayUtil.setEnabled(this.btnThree, i),
            this.btnThree.visible = !e
        },
        n.prototype.destroy = function() {
            EventManager.removeEventListener("king_hamor_pop_update", this.updateData, this),
            ImageButtonUtil.removeAll(this),
            e.prototype.destroy.call(this)
        },
        n
    } (BaseModule);
    i.KingHamorPop = e,
    __reflect(e.prototype, "kingHamorPop.KingHamorPop")
} (kingHamorPop || (kingHamorPop = {}));
var __reflect = this && this.__reflect ||
function(i, e, n) {
    i.__class__ = e,
    n ? n.push(e) : n = [e],
    i.__types__ = i.__types__ ? n.concat(i.__types__) : n
},
__extends = this && this.__extends ||
function(i, e) {
    function n() {
        this.constructor = i
    }
    for (var t in e) e.hasOwnProperty(t) && (i[t] = e[t]);
    n.prototype = e.prototype,
    i.prototype = new n
},
kingHamorPop; !
function(i) {
    var e = function(i) {
        function e() {
            var e = i.call(this) || this;
            return e.skinName = KingHamorSignSkin,
            e
        }
        return __extends(e, i),
        e.prototype.childrenCreated = function() {
            var e = this;
            i.prototype.childrenCreated.call(this),
            this.initOldPveBtnClose(0, this, "king_hamor_sign_title_png",
            function() {
                e.closePanel()
            },
            this),
            this.updateData();
            for (var n = function(i) {
                ImageButtonUtil.add(t["btnSign_" + i],
                function() {
                    SocketConnection.sendByQueue(47272, [14, i + 1],
                    function() {
                        e.updateData()
                    })
                },
                t),
                3 > i && (ImageButtonUtil.add(t["btnGet_" + i],
                function() {
                    if (!PetManager.getBagPetsById(3022).length) return void Alarm.show("请将精灵放入背包",
                    function() {
                        ModuleManager.showModule("petBag", ["petBag"])
                    });
                    var n = PetManager.getBagPetsById(3022, !0)[0].catchTime;
                    SocketConnection.sendByQueue(47272, [13 - i, n],
                    function() {
                        e.updateData()
                    })
                },
                t), ImageButtonUtil.add(t["btnOneTap_" + i],
                function() {
                    return PetManager.isDefaultPet(3022) ? void BuyProductManager.buyProductBySocket([246604, 246605, 246606][i],
                    function() {
                        SocketConnection.sendByQueue(47272, [10 - i, PetManager.defaultTime],
                        function() {
                            e.updateData()
                        })
                    },
                    e) : void Alarm.show("请将王之哈莫设置为阵容首发")
                },
                t), ImageButtonUtil.add(t["btnCompensate_" + i],
                function() {
                    if (!PetManager.getBagPetsById(3022).length) return void Alarm.show("请将精灵放入背包",
                    function() {
                        ModuleManager.showModule("petBag", ["petBag"])
                    });
                    var n = PetManager.getBagPetsById(3022, !0)[0].catchTime;
                    SocketConnection.sendByQueue(47272, [13 - i, n],
                    function() {
                        e.updateData()
                    })
                },
                t))
            },
            t = this, _ = 0; 21 > _; _++) n(_);
            ImageButtonUtil.add(this.icon_0,
            function() {
                var i = {};
                i.ins = 40569,
                tipsPop.TipsPop.openCounterMarkPop(i)
            },
            this),
            ImageButtonUtil.add(this.icon_1,
            function() {
                ModuleManager.showModule("petEffDescPanel", ["pet_eff_desc_panel"], 3022, "", AppDoStyle.NULL)
            },
            this),
            ImageButtonUtil.add(this.icon_2,
            function() {
                var i = {};
                i.id = 19230,
                tipsPop.TipsPop.openSkillPop(i)
            },
            this),
            ImageButtonUtil.add(this.btnClose, this.closePanel, this)
        },
        e.prototype.updateData = function() {
            var i = this;
            KTool.getMultiValue([123027, 202110, 2721],
            function(e) {
                i._totalDay = 255 & e[0],
                i._awardState = [KTool.getBit(e[0], 19), KTool.getBit(e[0], 18), KTool.getBit(e[0], 17)],
                i._today = e[1],
                i._oldState = [KTool.getBit(e[2], 24), KTool.getBit(e[2], 23), KTool.getBit(e[2], 22)],
                i.updateView()
            })
        },
        e.prototype.updateView = function() {
            3 == this._awardState.reduce(function(i, e) {
                return i + e
            }) && (this.closePanel(), EventManager.dispatchEventWith("king_hamor_pop_update"));
            for (var i = 0,
            e = 0; 3 > e; e++) i += this._awardState[e] | this._oldState[e];
            for (var n = i >= 3,
            e = 0; 21 > e; e++) this["flag_signed_" + e].visible = this["rect_" + e].visible = this["line_" + e].visible = e < this._totalDay,
            this["btnSign_" + e].visible = e == this._today - 1 && this._totalDay < this._today && !n,
            this._totalDay == e + 1 && 7 != this._totalDay && 14 != this._totalDay ? this["line_" + e].scaleX = .5 : this["line_" + e].scaleX = 1;
            for (var e = 0; 3 > e; e++) this["flag_got_" + e].visible = !!this._awardState[e] || !!this._oldState[e],
            this["btnCompensate_" + e].visible = !!this._oldState[e] && !this._awardState[e],
            this["btnGet_" + e].visible = !this._oldState[e] && !this._awardState[e] && this._totalDay >= 7 * (e + 1),
            this["btnOneTap_" + e].visible = !this._oldState[e] && !this._awardState[e] && this._totalDay < 7 * (e + 1),
            this["awardRect_" + e].visible = this._totalDay >= 7 * (e + 1);
            this.awardLine_0.visible = this._totalDay >= 7,
            this.awardLine_1.visible = this._totalDay >= 14,
            7 == this._totalDay ? this.awardLine_0.scaleY = .5 : 14 == this._totalDay ? (this.awardLine_0.scaleY = 1, this.awardLine_1.scaleY = .5) : (this.awardLine_0.scaleY = 1, this.awardLine_1.scaleY = 1)
        },
        e.prototype.closePanel = function() {
            this.destroy(),
            this.parent && this.parent.removeChild(this)
        },
        e.prototype.destroy = function() {
            i.prototype.destroy.call(this),
            ImageButtonUtil.removeAll(this)
        },
        e
    } (BaseModule);
    i.KingHamorSign = e,
    __reflect(e.prototype, "kingHamorPop.KingHamorSign")
} (kingHamorPop || (kingHamorPop = {}));
var __reflect = this && this.__reflect ||
function(i, e, n) {
    i.__class__ = e,
    n ? n.push(e) : n = [e],
    i.__types__ = i.__types__ ? n.concat(i.__types__) : n
},
__extends = this && this.__extends ||
function(i, e) {
    function n() {
        this.constructor = i
    }
    for (var t in e) e.hasOwnProperty(t) && (i[t] = e[t]);
    n.prototype = e.prototype,
    i.prototype = new n
},
kingHamorPop; !
function(i) {
    var e = function(i) {
        function e() {
            var e = i.call(this) || this;
            return e.skinName = KingHamorThreePopSkin,
            e
        }
        return __extends(e, i),
        e.prototype.childrenCreated = function() {
            var e = this;
            i.prototype.childrenCreated.call(this),
            ImageButtonUtil.add(this.btnClose,
            function() {
                e.hide()
            },
            this);
            for (var n = function(i) {
                ImageButtonUtil.add(t["btnBuy_" + i],
                function() {
                    BuyProductManager.buyProductBySocket([246606, 246604, 246605][i],
                    function() {
                        SocketConnection.sendByQueue(47272, [4, i + 1])
                    },
                    e)
                },
                t)
            },
            t = this, _ = 0; 3 > _; _++) n(_)
        },
        e.prototype.destroy = function() {
            ImageButtonUtil.removeAll(this),
            i.prototype.destroy.call(this)
        },
        e
    } (PopView);
    i.KingHamorThreePop = e,
    __reflect(e.prototype, "kingHamorPop.KingHamorThreePop")
} (kingHamorPop || (kingHamorPop = {}));
var __extends = this && this.__extends ||
function(i, e) {
    function n() {
        this.constructor = i
    }
    for (var t in e) e.hasOwnProperty(t) && (i[t] = e[t]);
    n.prototype = e.prototype,
    i.prototype = new n
};
window.generateEUI = window.generateEUI || {},
generateEUI.paths = generateEUI.paths || {},
generateEUI.styles = void 0,
generateEUI.skins = {},
generateEUI.paths["resource/eui_skins/KingHamorFettersSkin.exml"] = window.KingHamorFettersSkin = function(i) {
    function e() {
        i.call(this),
        this.skinParts = ["btnOpen", "btnGo_1", "btnGo_0", "btnClose", "flag_got"],
        this.height = 635,
        this.width = 1130,
        this.elementsContent = [this._Image1_i(), this._Image2_i(), this.btnOpen_i(), this.btnGo_1_i(), this.btnGo_0_i(), this.btnClose_i(), this.flag_got_i()]
    }
    __extends(e, i);
    var n = e.prototype;
    return n._Image1_i = function() {
        var i = new eui.Image;
        return i.height = 635,
        i.source = "king_hamor_fetters_bg_png",
        i.width = 1042,
        i.x = 88,
        i.y = 0,
        i
    },
    n._Image2_i = function() {
        var i = new eui.Image;
        return i.height = 155,
        i.source = "king_hamor_fetters_bubble_png",
        i.width = 300,
        i.x = 416,
        i.y = 294,
        i
    },
    n.btnOpen_i = function() {
        var i = new eui.Image;
        return this.btnOpen = i,
        i.height = 147,
        i.source = "king_hamor_fetters_btnOpen_png",
        i.width = 130,
        i.x = 500,
        i.y = 442,
        i
    },
    n.btnGo_1_i = function() {
        var i = new eui.Image;
        return this.btnGo_1 = i,
        i.height = 83,
        i.source = "king_hamor_fetters_btnGo_1_png",
        i.width = 279,
        i.x = 656,
        i.y = 503,
        i
    },
    n.btnGo_0_i = function() {
        var i = new eui.Image;
        return this.btnGo_0 = i,
        i.height = 83,
        i.source = "king_hamor_fetters_btnGo_0_png",
        i.width = 279,
        i.x = 192,
        i.y = 503,
        i
    },
    n.btnClose_i = function() {
        var i = new eui.Image;
        return this.btnClose = i,
        i.height = 56,
        i.source = "king_hamor_pop_btnClose_png",
        i.width = 56,
        i.x = 1066,
        i.y = 8,
        i
    },
    n.flag_got_i = function() {
        var i = new eui.Image;
        return this.flag_got = i,
        i.height = 83,
        i.source = "king_hamor_pop_flag_got_png",
        i.visible = !1,
        i.width = 159,
        i.x = 486,
        i.y = 476,
        i
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/KingHamorPopSkin.exml"] = window.KingHamorPopSkin = function(i) {
    function e() {
        i.call(this),
        this.skinParts = ["btnFetters", "btnKing", "grp_right", "btnInfo", "btnOneTap", "btnFree", "btnThree", "flag_got_1", "flag_got_0", "flag_got_2", "up_bg", "btnClose"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this._Group2_i()]
    }
    __extends(e, i);
    var n = e.prototype;
    return n._Group2_i = function() {
        var i = new eui.Group;
        return i.anchorOffsetX = 563,
        i.anchorOffsetY = 320,
        i.percentWidth = 100,
        i.x = 563,
        i.y = 320,
        i.elementsContent = [this._Image1_i(), this._Image2_i(), this.grp_right_i(), this.btnInfo_i(), this._Group1_i(), this.up_bg_i(), this.btnClose_i()],
        i
    },
    n._Image1_i = function() {
        var i = new eui.Image;
        return i.source = "king_hamor_pop_bg_jpg",
        i.percentWidth = 100,
        i.x = 0,
        i.y = 0,
        i
    },
    n._Image2_i = function() {
        var i = new eui.Image;
        return i.height = 640,
        i.horizontalCenter = 0,
        i.source = "king_hamor_pop_bg1_png",
        i.y = 0,
        i
    },
    n.grp_right_i = function() {
        var i = new eui.Group;
        return this.grp_right = i,
        i.right = 18,
        i.y = 132,
        i.elementsContent = [this.btnFetters_i(), this.btnKing_i(), this._Image3_i()],
        i
    },
    n.btnFetters_i = function() {
        var i = new eui.Image;
        return this.btnFetters = i,
        i.height = 128,
        i.source = "king_hamor_pop_btnFetters_png",
        i.width = 128,
        i.x = 174,
        i.y = 204,
        i
    },
    n.btnKing_i = function() {
        var i = new eui.Image;
        return this.btnKing = i,
        i.height = 128,
        i.source = "king_hamor_pop_btnKing_png",
        i.width = 133,
        i.x = 172,
        i.y = 67,
        i
    },
    n._Image3_i = function() {
        var i = new eui.Image;
        return i.height = 85,
        i.source = "king_hamor_pop_bubble_png",
        i.width = 255,
        i.x = 0,
        i.y = 0,
        i
    },
    n.btnInfo_i = function() {
        var i = new eui.Image;
        return this.btnInfo = i,
        i.height = 74,
        i.source = "king_hamor_pop_btnInfo_png",
        i.visible = !0,
        i.width = 74,
        i.x = 22,
        i.y = 543,
        i
    },
    n._Group1_i = function() {
        var i = new eui.Group;
        return i.horizontalCenter = 0,
        i.width = 828,
        i.y = 496,
        i.elementsContent = [this.btnOneTap_i(), this.btnFree_i(), this.btnThree_i(), this.flag_got_1_i(), this.flag_got_0_i(), this.flag_got_2_i()],
        i
    },
    n.btnOneTap_i = function() {
        var i = new eui.Image;
        return this.btnOneTap = i,
        i.height = 100,
        i.source = "king_hamor_pop_btnOneTap_png",
        i.width = 316,
        i.x = 259,
        i.y = 5,
        i
    },
    n.btnFree_i = function() {
        var i = new eui.Image;
        return this.btnFree = i,
        i.height = 83,
        i.source = "king_hamor_pop_btnFree_png",
        i.width = 288,
        i.x = 0,
        i.y = 22,
        i
    },
    n.btnThree_i = function() {
        var i = new eui.Image;
        return this.btnThree = i,
        i.height = 83,
        i.source = "king_hamor_pop_btnThree_png",
        i.width = 279,
        i.x = 549,
        i.y = 22,
        i
    },
    n.flag_got_1_i = function() {
        var i = new eui.Image;
        return this.flag_got_1 = i,
        i.height = 103,
        i.source = "king_hamor_pop_flag_got_png",
        i.width = 199,
        i.x = 320,
        i.y = 0,
        i
    },
    n.flag_got_0_i = function() {
        var i = new eui.Image;
        return this.flag_got_0 = i,
        i.height = 103,
        i.source = "king_hamor_pop_flag_got_png",
        i.width = 199,
        i.x = 40,
        i.y = 9,
        i
    },
    n.flag_got_2_i = function() {
        var i = new eui.Image;
        return this.flag_got_2 = i,
        i.height = 103,
        i.source = "king_hamor_pop_flag_got_png",
        i.width = 199,
        i.x = 594,
        i.y = 9,
        i
    },
    n.up_bg_i = function() {
        var i = new eui.Image;
        return this.up_bg = i,
        i.height = 50,
        i.source = "king_hamor_pop_up_bg_png",
        i.visible = !1,
        i.width = 145,
        i.x = 0,
        i.y = 0,
        i
    },
    n.btnClose_i = function() {
        var i = new eui.Image;
        return this.btnClose = i,
        i.source = "common_close_2_png",
        i.visible = !1,
        i.x = 0,
        i.y = 0,
        i
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/KingHamorSignSkin.exml"] = window.KingHamorSignSkin = function(i) {
    function e() {
        i.call(this),
        this.skinParts = ["btnClose", "line_0", "line_1", "line_2", "line_3", "line_4", "line_5", "line_6", "line_7", "line_8", "line_9", "line_10", "line_11", "line_12", "line_13", "line_14", "line_15", "line_16", "line_17", "line_18", "line_19", "line_20", "awardLine_0", "awardLine_1", "rect_0", "rect_1", "rect_2", "rect_3", "rect_4", "rect_5", "rect_6", "rect_7", "rect_8", "rect_9", "rect_10", "rect_11", "rect_12", "rect_13", "rect_14", "rect_15", "rect_16", "rect_17", "rect_18", "rect_19", "rect_20", "awardRect_0", "awardRect_1", "awardRect_2", "icon_0", "icon_1", "icon_2", "btnSign_0", "btnSign_1", "btnSign_2", "btnSign_3", "btnSign_4", "btnSign_5", "btnSign_6", "btnSign_7", "btnSign_8", "btnSign_9", "btnSign_10", "btnSign_11", "btnSign_12", "btnSign_13", "btnSign_14", "btnSign_15", "btnSign_16", "btnSign_17", "btnSign_18", "btnSign_19", "btnSign_20", "btnGet_0", "btnOneTap_0", "btnCompensate_0", "flag_got_0", "btnGet_1", "btnOneTap_1", "btnCompensate_1", "flag_got_1", "btnGet_2", "btnOneTap_2", "btnCompensate_2", "flag_got_2", "flag_signed_0", "flag_signed_1", "flag_signed_2", "flag_signed_3", "flag_signed_4", "flag_signed_5", "flag_signed_6", "flag_signed_7", "flag_signed_8", "flag_signed_9", "flag_signed_10", "flag_signed_11", "flag_signed_12", "flag_signed_13", "flag_signed_14", "flag_signed_15", "flag_signed_16", "flag_signed_17", "flag_signed_18", "flag_signed_19", "flag_signed_20"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this._Image1_i(), this._Image2_i(), this._Image3_i(), this.btnClose_i(), this._Group4_i()]
    }
    __extends(e, i);
    var n = e.prototype;
    return n._Image1_i = function() {
        var i = new eui.Image;
        return i.height = 640,
        i.source = "king_hamor_level_bg_4_jpg",
        i.percentWidth = 100,
        i.x = 0,
        i.y = 0,
        i
    },
    n._Image2_i = function() {
        var i = new eui.Image;
        return i.height = 72,
        i.source = "king_hamor_sign_up_bg_png",
        i.percentWidth = 100,
        i.x = 0,
        i.y = 0,
        i
    },
    n._Image3_i = function() {
        var i = new eui.Image;
        return i.height = 24,
        i.source = "king_hamor_sign_title_png",
        i.visible = !1,
        i.width = 104,
        i.x = 100,
        i.y = 21,
        i
    },
    n.btnClose_i = function() {
        var i = new eui.Image;
        return this.btnClose = i,
        i.height = 61,
        i.source = "king_hamor_level_btnBack_png",
        i.visible = !1,
        i.width = 55,
        i.x = 22,
        i.y = 3,
        i
    },
    n._Group4_i = function() {
        var i = new eui.Group;
        return i.horizontalCenter = 2,
        i.y = 79,
        i.elementsContent = [this._Image4_i(), this._Label1_i(), this._Image5_i(), this._Image6_i(), this.line_0_i(), this.line_1_i(), this.line_2_i(), this.line_3_i(), this.line_4_i(), this.line_5_i(), this.line_6_i(), this.line_7_i(), this.line_8_i(), this.line_9_i(), this.line_10_i(), this.line_11_i(), this.line_12_i(), this.line_13_i(), this.line_14_i(), this.line_15_i(), this.line_16_i(), this.line_17_i(), this.line_18_i(), this.line_19_i(), this.line_20_i(), this.awardLine_0_i(), this.awardLine_1_i(), this.rect_0_i(), this.rect_1_i(), this.rect_2_i(), this.rect_3_i(), this.rect_4_i(), this.rect_5_i(), this.rect_6_i(), this.rect_7_i(), this.rect_8_i(), this.rect_9_i(), this.rect_10_i(), this.rect_11_i(), this.rect_12_i(), this.rect_13_i(), this.rect_14_i(), this.rect_15_i(), this.rect_16_i(), this.rect_17_i(), this.rect_18_i(), this.rect_19_i(), this.rect_20_i(), this.awardRect_0_i(), this.awardRect_1_i(), this.awardRect_2_i(), this.icon_0_i(), this.icon_1_i(), this.icon_2_i(), this.btnSign_0_i(), this.btnSign_1_i(), this.btnSign_2_i(), this.btnSign_3_i(), this.btnSign_4_i(), this.btnSign_5_i(), this.btnSign_6_i(), this.btnSign_7_i(), this.btnSign_8_i(), this.btnSign_9_i(), this.btnSign_10_i(), this.btnSign_11_i(), this.btnSign_12_i(), this.btnSign_13_i(), this.btnSign_14_i(), this.btnSign_15_i(), this.btnSign_16_i(), this.btnSign_17_i(), this.btnSign_18_i(), this.btnSign_19_i(), this.btnSign_20_i(), this._Group1_i(), this._Group2_i(), this._Group3_i(), this._Image7_i(), this._Image8_i(), this._Image9_i(), this._Image10_i(), this._Image11_i(), this._Image12_i(), this._Image13_i(), this._Image14_i(), this._Image15_i(), this._Image16_i(), this._Image17_i(), this._Image18_i(), this._Image19_i(), this._Image20_i(), this._Image21_i(), this._Image22_i(), this._Image23_i(), this._Image24_i(), this._Image25_i(), this._Image26_i(), this._Image27_i(), this.flag_signed_0_i(), this.flag_signed_1_i(), this.flag_signed_2_i(), this.flag_signed_3_i(), this.flag_signed_4_i(), this.flag_signed_5_i(), this.flag_signed_6_i(), this.flag_signed_7_i(), this.flag_signed_8_i(), this.flag_signed_9_i(), this.flag_signed_10_i(), this.flag_signed_11_i(), this.flag_signed_12_i(), this.flag_signed_13_i(), this.flag_signed_14_i(), this.flag_signed_15_i(), this.flag_signed_16_i(), this.flag_signed_17_i(), this.flag_signed_18_i(), this.flag_signed_19_i(), this.flag_signed_20_i()],
        i
    },
    n._Image4_i = function() {
        var i = new eui.Image;
        return i.height = 28,
        i.source = "king_hamor_sign_txtbg_png",
        i.width = 710,
        i.x = 165,
        i.y = 59,
        i
    },
    n._Label1_i = function() {
        var i = new eui.Label;
        return i.size = 18,
        i.text = "每连续签到七天即可领取一个强力提升，中途断签进度将会重置。",
        i.textColor = 16760944,
        i.x = 264,
        i.y = 64,
        i
    },
    n._Image5_i = function() {
        var i = new eui.Image;
        return i.height = 465,
        i.source = "king_hamor_sign_di_png",
        i.width = 1024,
        i.x = 0,
        i.y = 78,
        i
    },
    n._Image6_i = function() {
        var i = new eui.Image;
        return i.height = 54,
        i.source = "king_hamor_sign_bigTitle_png",
        i.width = 604,
        i.x = 233,
        i.y = 0,
        i
    },
    n.line_0_i = function() {
        var i = new eui.Image;
        return this.line_0 = i,
        i.source = "king_hamor_sign_line_0_png",
        i.x = 94,
        i.y = 143,
        i
    },
    n.line_1_i = function() {
        var i = new eui.Image;
        return this.line_1 = i,
        i.source = "king_hamor_sign_line_0_png",
        i.x = 220,
        i.y = 143,
        i
    },
    n.line_2_i = function() {
        var i = new eui.Image;
        return this.line_2 = i,
        i.source = "king_hamor_sign_line_0_png",
        i.x = 345,
        i.y = 143,
        i
    },
    n.line_3_i = function() {
        var i = new eui.Image;
        return this.line_3 = i,
        i.source = "king_hamor_sign_line_0_png",
        i.x = 470,
        i.y = 143,
        i
    },
    n.line_4_i = function() {
        var i = new eui.Image;
        return this.line_4 = i,
        i.source = "king_hamor_sign_line_0_png",
        i.x = 596,
        i.y = 143,
        i
    },
    n.line_5_i = function() {
        var i = new eui.Image;
        return this.line_5 = i,
        i.source = "king_hamor_sign_line_0_png",
        i.x = 722,
        i.y = 143,
        i
    },
    n.line_6_i = function() {
        var i = new eui.Image;
        return this.line_6 = i,
        i.source = "king_hamor_sign_line_0_png",
        i.width = 70,
        i.x = 848,
        i.y = 143,
        i
    },
    n.line_7_i = function() {
        var i = new eui.Image;
        return this.line_7 = i,
        i.anchorOffsetX = 65,
        i.source = "king_hamor_sign_line_0_png",
        i.x = 930,
        i.y = 303,
        i
    },
    n.line_8_i = function() {
        var i = new eui.Image;
        return this.line_8 = i,
        i.anchorOffsetX = 65,
        i.source = "king_hamor_sign_line_0_png",
        i.x = 804,
        i.y = 303,
        i
    },
    n.line_9_i = function() {
        var i = new eui.Image;
        return this.line_9 = i,
        i.anchorOffsetX = 65,
        i.source = "king_hamor_sign_line_0_png",
        i.x = 680,
        i.y = 303,
        i
    },
    n.line_10_i = function() {
        var i = new eui.Image;
        return this.line_10 = i,
        i.anchorOffsetX = 65,
        i.source = "king_hamor_sign_line_0_png",
        i.x = 553,
        i.y = 303,
        i
    },
    n.line_11_i = function() {
        var i = new eui.Image;
        return this.line_11 = i,
        i.anchorOffsetX = 65,
        i.source = "king_hamor_sign_line_0_png",
        i.x = 427,
        i.y = 303,
        i
    },
    n.line_12_i = function() {
        var i = new eui.Image;
        return this.line_12 = i,
        i.anchorOffsetX = 65,
        i.source = "king_hamor_sign_line_0_png",
        i.x = 301,
        i.y = 303,
        i
    },
    n.line_13_i = function() {
        var i = new eui.Image;
        return this.line_13 = i,
        i.anchorOffsetX = 70,
        i.source = "king_hamor_sign_line_0_png",
        i.width = 70,
        i.x = 174.932,
        i.y = 303.5,
        i
    },
    n.line_14_i = function() {
        var i = new eui.Image;
        return this.line_14 = i,
        i.source = "king_hamor_sign_line_0_png",
        i.x = 94,
        i.y = 472,
        i
    },
    n.line_15_i = function() {
        var i = new eui.Image;
        return this.line_15 = i,
        i.source = "king_hamor_sign_line_0_png",
        i.x = 220,
        i.y = 472,
        i
    },
    n.line_16_i = function() {
        var i = new eui.Image;
        return this.line_16 = i,
        i.source = "king_hamor_sign_line_0_png",
        i.x = 347,
        i.y = 472,
        i
    },
    n.line_17_i = function() {
        var i = new eui.Image;
        return this.line_17 = i,
        i.source = "king_hamor_sign_line_0_png",
        i.x = 471,
        i.y = 472,
        i
    },
    n.line_18_i = function() {
        var i = new eui.Image;
        return this.line_18 = i,
        i.source = "king_hamor_sign_line_0_png",
        i.x = 597,
        i.y = 472,
        i
    },
    n.line_19_i = function() {
        var i = new eui.Image;
        return this.line_19 = i,
        i.source = "king_hamor_sign_line_0_png",
        i.x = 724,
        i.y = 472,
        i
    },
    n.line_20_i = function() {
        var i = new eui.Image;
        return this.line_20 = i,
        i.source = "king_hamor_sign_line_0_png",
        i.width = 67,
        i.x = 850,
        i.y = 472,
        i
    },
    n.awardLine_0_i = function() {
        var i = new eui.Image;
        return this.awardLine_0 = i,
        i.source = "king_hamor_sign_line_1_png",
        i.x = 959,
        i.y = 190,
        i
    },
    n.awardLine_1_i = function() {
        var i = new eui.Image;
        return this.awardLine_1 = i,
        i.source = "king_hamor_sign_line_1_png",
        i.x = 58,
        i.y = 355,
        i
    },
    n.rect_0_i = function() {
        var i = new eui.Image;
        return this.rect_0 = i,
        i.source = "king_hamor_sign_rect_0_png",
        i.x = 31,
        i.y = 110,
        i
    },
    n.rect_1_i = function() {
        var i = new eui.Image;
        return this.rect_1 = i,
        i.source = "king_hamor_sign_rect_0_png",
        i.x = 157,
        i.y = 110,
        i
    },
    n.rect_2_i = function() {
        var i = new eui.Image;
        return this.rect_2 = i,
        i.source = "king_hamor_sign_rect_0_png",
        i.x = 283,
        i.y = 110,
        i
    },
    n.rect_3_i = function() {
        var i = new eui.Image;
        return this.rect_3 = i,
        i.source = "king_hamor_sign_rect_0_png",
        i.x = 409,
        i.y = 110,
        i
    },
    n.rect_4_i = function() {
        var i = new eui.Image;
        return this.rect_4 = i,
        i.source = "king_hamor_sign_rect_0_png",
        i.x = 534,
        i.y = 110,
        i
    },
    n.rect_5_i = function() {
        var i = new eui.Image;
        return this.rect_5 = i,
        i.source = "king_hamor_sign_rect_0_png",
        i.x = 660,
        i.y = 110,
        i
    },
    n.rect_6_i = function() {
        var i = new eui.Image;
        return this.rect_6 = i,
        i.source = "king_hamor_sign_rect_0_png",
        i.x = 786,
        i.y = 110,
        i
    },
    n.rect_7_i = function() {
        var i = new eui.Image;
        return this.rect_7 = i,
        i.source = "king_hamor_sign_rect_0_png",
        i.x = 929,
        i.y = 270,
        i
    },
    n.rect_8_i = function() {
        var i = new eui.Image;
        return this.rect_8 = i,
        i.source = "king_hamor_sign_rect_0_png",
        i.x = 803,
        i.y = 270,
        i
    },
    n.rect_9_i = function() {
        var i = new eui.Image;
        return this.rect_9 = i,
        i.source = "king_hamor_sign_rect_0_png",
        i.x = 677,
        i.y = 270,
        i
    },
    n.rect_10_i = function() {
        var i = new eui.Image;
        return this.rect_10 = i,
        i.source = "king_hamor_sign_rect_0_png",
        i.x = 552,
        i.y = 270,
        i
    },
    n.rect_11_i = function() {
        var i = new eui.Image;
        return this.rect_11 = i,
        i.source = "king_hamor_sign_rect_0_png",
        i.x = 426,
        i.y = 270,
        i
    },
    n.rect_12_i = function() {
        var i = new eui.Image;
        return this.rect_12 = i,
        i.source = "king_hamor_sign_rect_0_png",
        i.x = 300,
        i.y = 270,
        i
    },
    n.rect_13_i = function() {
        var i = new eui.Image;
        return this.rect_13 = i,
        i.source = "king_hamor_sign_rect_0_png",
        i.x = 174,
        i.y = 270,
        i
    },
    n.rect_14_i = function() {
        var i = new eui.Image;
        return this.rect_14 = i,
        i.source = "king_hamor_sign_rect_0_png",
        i.x = 32,
        i.y = 439,
        i
    },
    n.rect_15_i = function() {
        var i = new eui.Image;
        return this.rect_15 = i,
        i.source = "king_hamor_sign_rect_0_png",
        i.x = 158,
        i.y = 439,
        i
    },
    n.rect_16_i = function() {
        var i = new eui.Image;
        return this.rect_16 = i,
        i.source = "king_hamor_sign_rect_0_png",
        i.x = 284,
        i.y = 439,
        i
    },
    n.rect_17_i = function() {
        var i = new eui.Image;
        return this.rect_17 = i,
        i.source = "king_hamor_sign_rect_0_png",
        i.x = 410,
        i.y = 439,
        i
    },
    n.rect_18_i = function() {
        var i = new eui.Image;
        return this.rect_18 = i,
        i.source = "king_hamor_sign_rect_0_png",
        i.x = 535,
        i.y = 439,
        i
    },
    n.rect_19_i = function() {
        var i = new eui.Image;
        return this.rect_19 = i,
        i.source = "king_hamor_sign_rect_0_png",
        i.x = 661,
        i.y = 439,
        i
    },
    n.rect_20_i = function() {
        var i = new eui.Image;
        return this.rect_20 = i,
        i.source = "king_hamor_sign_rect_0_png",
        i.x = 787,
        i.y = 439,
        i
    },
    n.awardRect_0_i = function() {
        var i = new eui.Image;
        return this.awardRect_0 = i,
        i.source = "king_hamor_sign_rect_1_png",
        i.x = 916,
        i.y = 93,
        i
    },
    n.awardRect_1_i = function() {
        var i = new eui.Image;
        return this.awardRect_1 = i,
        i.source = "king_hamor_sign_rect_1_png",
        i.x = 15,
        i.y = 253,
        i
    },
    n.awardRect_2_i = function() {
        var i = new eui.Image;
        return this.awardRect_2 = i,
        i.source = "king_hamor_sign_rect_1_png",
        i.x = 916,
        i.y = 422,
        i
    },
    n.icon_0_i = function() {
        var i = new eui.Image;
        return this.icon_0 = i,
        i.height = 63,
        i.source = "king_hamor_three_pop_icon_0_png",
        i.width = 65,
        i.x = 932,
        i.y = 109,
        i
    },
    n.icon_1_i = function() {
        var i = new eui.Image;
        return this.icon_1 = i,
        i.height = 60,
        i.source = "king_hamor_three_pop_icon_2_png",
        i.width = 69,
        i.x = 26,
        i.y = 276,
        i
    },
    n.icon_2_i = function() {
        var i = new eui.Image;
        return this.icon_2 = i,
        i.height = 67,
        i.source = "king_hamor_three_pop_icon_1_png",
        i.width = 64,
        i.x = 931,
        i.y = 443,
        i
    },
    n.btnSign_0_i = function() {
        var i = new eui.Image;
        return this.btnSign_0 = i,
        i.height = 40,
        i.source = "king_hamor_sign_btnSign_png",
        i.visible = !1,
        i.width = 80,
        i.x = 24,
        i.y = 161,
        i
    },
    n.btnSign_1_i = function() {
        var i = new eui.Image;
        return this.btnSign_1 = i,
        i.height = 40,
        i.source = "king_hamor_sign_btnSign_png",
        i.visible = !1,
        i.width = 80,
        i.x = 150,
        i.y = 161,
        i
    },
    n.btnSign_2_i = function() {
        var i = new eui.Image;
        return this.btnSign_2 = i,
        i.height = 40,
        i.source = "king_hamor_sign_btnSign_png",
        i.visible = !1,
        i.width = 80,
        i.x = 275,
        i.y = 161,
        i
    },
    n.btnSign_3_i = function() {
        var i = new eui.Image;
        return this.btnSign_3 = i,
        i.height = 40,
        i.source = "king_hamor_sign_btnSign_png",
        i.visible = !1,
        i.width = 80,
        i.x = 401,
        i.y = 161,
        i
    },
    n.btnSign_4_i = function() {
        var i = new eui.Image;
        return this.btnSign_4 = i,
        i.height = 40,
        i.source = "king_hamor_sign_btnSign_png",
        i.visible = !1,
        i.width = 80,
        i.x = 527,
        i.y = 161,
        i
    },
    n.btnSign_5_i = function() {
        var i = new eui.Image;
        return this.btnSign_5 = i,
        i.height = 40,
        i.source = "king_hamor_sign_btnSign_png",
        i.visible = !1,
        i.width = 80,
        i.x = 652,
        i.y = 161,
        i
    },
    n.btnSign_6_i = function() {
        var i = new eui.Image;
        return this.btnSign_6 = i,
        i.height = 40,
        i.source = "king_hamor_sign_btnSign_png",
        i.visible = !1,
        i.width = 80,
        i.x = 778,
        i.y = 161,
        i
    },
    n.btnSign_7_i = function() {
        var i = new eui.Image;
        return this.btnSign_7 = i,
        i.height = 40,
        i.source = "king_hamor_sign_btnSign_png",
        i.visible = !1,
        i.width = 80,
        i.x = 922,
        i.y = 322,
        i
    },
    n.btnSign_8_i = function() {
        var i = new eui.Image;
        return this.btnSign_8 = i,
        i.height = 40,
        i.source = "king_hamor_sign_btnSign_png",
        i.visible = !1,
        i.width = 80,
        i.x = 796,
        i.y = 322,
        i
    },
    n.btnSign_9_i = function() {
        var i = new eui.Image;
        return this.btnSign_9 = i,
        i.height = 40,
        i.source = "king_hamor_sign_btnSign_png",
        i.visible = !1,
        i.width = 80,
        i.x = 670,
        i.y = 322,
        i
    },
    n.btnSign_10_i = function() {
        var i = new eui.Image;
        return this.btnSign_10 = i,
        i.height = 40,
        i.source = "king_hamor_sign_btnSign_png",
        i.visible = !1,
        i.width = 80,
        i.x = 544,
        i.y = 322,
        i
    },
    n.btnSign_11_i = function() {
        var i = new eui.Image;
        return this.btnSign_11 = i,
        i.height = 40,
        i.source = "king_hamor_sign_btnSign_png",
        i.visible = !1,
        i.width = 80,
        i.x = 418,
        i.y = 322,
        i
    },
    n.btnSign_12_i = function() {
        var i = new eui.Image;
        return this.btnSign_12 = i,
        i.height = 40,
        i.source = "king_hamor_sign_btnSign_png",
        i.visible = !1,
        i.width = 80,
        i.x = 292,
        i.y = 322,
        i
    },
    n.btnSign_13_i = function() {
        var i = new eui.Image;
        return this.btnSign_13 = i,
        i.height = 40,
        i.source = "king_hamor_sign_btnSign_png",
        i.visible = !1,
        i.width = 80,
        i.x = 166,
        i.y = 322,
        i
    },
    n.btnSign_14_i = function() {
        var i = new eui.Image;
        return this.btnSign_14 = i,
        i.height = 40,
        i.source = "king_hamor_sign_btnSign_png",
        i.visible = !1,
        i.width = 80,
        i.x = 24,
        i.y = 493,
        i
    },
    n.btnSign_15_i = function() {
        var i = new eui.Image;
        return this.btnSign_15 = i,
        i.height = 40,
        i.source = "king_hamor_sign_btnSign_png",
        i.visible = !1,
        i.width = 80,
        i.x = 149,
        i.y = 493,
        i
    },
    n.btnSign_16_i = function() {
        var i = new eui.Image;
        return this.btnSign_16 = i,
        i.height = 40,
        i.source = "king_hamor_sign_btnSign_png",
        i.visible = !1,
        i.width = 80,
        i.x = 275,
        i.y = 493,
        i
    },
    n.btnSign_17_i = function() {
        var i = new eui.Image;
        return this.btnSign_17 = i,
        i.height = 40,
        i.source = "king_hamor_sign_btnSign_png",
        i.visible = !1,
        i.width = 80,
        i.x = 401,
        i.y = 493,
        i
    },
    n.btnSign_18_i = function() {
        var i = new eui.Image;
        return this.btnSign_18 = i,
        i.height = 40,
        i.source = "king_hamor_sign_btnSign_png",
        i.visible = !1,
        i.width = 80,
        i.x = 528,
        i.y = 493,
        i
    },
    n.btnSign_19_i = function() {
        var i = new eui.Image;
        return this.btnSign_19 = i,
        i.height = 40,
        i.source = "king_hamor_sign_btnSign_png",
        i.visible = !1,
        i.width = 80,
        i.x = 654,
        i.y = 493,
        i
    },
    n.btnSign_20_i = function() {
        var i = new eui.Image;
        return this.btnSign_20 = i,
        i.height = 40,
        i.source = "king_hamor_sign_btnSign_png",
        i.visible = !1,
        i.width = 80,
        i.x = 779,
        i.y = 493,
        i
    },
    n._Group1_i = function() {
        var i = new eui.Group;
        return i.touchThrough = !0,
        i.visible = !0,
        i.x = 912,
        i.y = 132,
        i.elementsContent = [this.btnGet_0_i(), this.btnOneTap_0_i(), this.btnCompensate_0_i(), this.flag_got_0_i()],
        i
    },
    n.btnGet_0_i = function() {
        var i = new eui.Image;
        return this.btnGet_0 = i,
        i.height = 40,
        i.source = "king_hamor_sign_btnGet_png",
        i.width = 101,
        i.x = 0,
        i.y = 29,
        i
    },
    n.btnOneTap_0_i = function() {
        var i = new eui.Image;
        return this.btnOneTap_0 = i,
        i.height = 40,
        i.source = "king_hamor_sign_btnOneTap_png",
        i.width = 101,
        i.x = 0,
        i.y = 29,
        i
    },
    n.btnCompensate_0_i = function() {
        var i = new eui.Image;
        return this.btnCompensate_0 = i,
        i.height = 40,
        i.source = "king_hamor_sign_btnCompensate_png",
        i.width = 101,
        i.x = 0,
        i.y = 29,
        i
    },
    n.flag_got_0_i = function() {
        var i = new eui.Image;
        return this.flag_got_0 = i,
        i.height = 29,
        i.source = "king_hamor_sign_flag_got_png",
        i.width = 95,
        i.x = 3,
        i.y = 0,
        i
    },
    n._Group2_i = function() {
        var i = new eui.Group;
        return i.touchThrough = !0,
        i.visible = !0,
        i.x = 10,
        i.y = 291,
        i.elementsContent = [this.btnGet_1_i(), this.btnOneTap_1_i(), this.btnCompensate_1_i(), this.flag_got_1_i()],
        i
    },
    n.btnGet_1_i = function() {
        var i = new eui.Image;
        return this.btnGet_1 = i,
        i.height = 40,
        i.source = "king_hamor_sign_btnGet_png",
        i.width = 101,
        i.x = 0,
        i.y = 29,
        i
    },
    n.btnOneTap_1_i = function() {
        var i = new eui.Image;
        return this.btnOneTap_1 = i,
        i.height = 40,
        i.source = "king_hamor_sign_btnOneTap_png",
        i.width = 101,
        i.x = 0,
        i.y = 29,
        i
    },
    n.btnCompensate_1_i = function() {
        var i = new eui.Image;
        return this.btnCompensate_1 = i,
        i.height = 40,
        i.source = "king_hamor_sign_btnCompensate_png",
        i.width = 101,
        i.x = 0,
        i.y = 29,
        i
    },
    n.flag_got_1_i = function() {
        var i = new eui.Image;
        return this.flag_got_1 = i,
        i.height = 29,
        i.source = "king_hamor_sign_flag_got_png",
        i.width = 95,
        i.x = 3,
        i.y = 0,
        i
    },
    n._Group3_i = function() {
        var i = new eui.Group;
        return i.touchThrough = !0,
        i.visible = !0,
        i.x = 912,
        i.y = 459,
        i.elementsContent = [this.btnGet_2_i(), this.btnOneTap_2_i(), this.btnCompensate_2_i(), this.flag_got_2_i()],
        i
    },
    n.btnGet_2_i = function() {
        var i = new eui.Image;
        return this.btnGet_2 = i,
        i.height = 40,
        i.source = "king_hamor_sign_btnGet_png",
        i.width = 101,
        i.x = 0,
        i.y = 29,
        i
    },
    n.btnOneTap_2_i = function() {
        var i = new eui.Image;
        return this.btnOneTap_2 = i,
        i.height = 40,
        i.source = "king_hamor_sign_btnOneTap_png",
        i.width = 101,
        i.x = 0,
        i.y = 29,
        i
    },
    n.btnCompensate_2_i = function() {
        var i = new eui.Image;
        return this.btnCompensate_2 = i,
        i.height = 40,
        i.source = "king_hamor_sign_btnCompensate_png",
        i.width = 101,
        i.x = 0,
        i.y = 29,
        i
    },
    n.flag_got_2_i = function() {
        var i = new eui.Image;
        return this.flag_got_2 = i,
        i.height = 29,
        i.source = "king_hamor_sign_flag_got_png",
        i.width = 95,
        i.x = 3,
        i.y = 0,
        i
    },
    n._Image7_i = function() {
        var i = new eui.Image;
        return i.height = 21,
        i.source = "king_hamor_sign_day_1_png",
        i.width = 51,
        i.x = 37,
        i.y = 135,
        i
    },
    n._Image8_i = function() {
        var i = new eui.Image;
        return i.height = 21,
        i.source = "king_hamor_sign_day_2_png",
        i.width = 51,
        i.x = 163,
        i.y = 135,
        i
    },
    n._Image9_i = function() {
        var i = new eui.Image;
        return i.height = 21,
        i.source = "king_hamor_sign_day_3_png",
        i.width = 51,
        i.x = 289,
        i.y = 135,
        i
    },
    n._Image10_i = function() {
        var i = new eui.Image;
        return i.height = 21,
        i.source = "king_hamor_sign_day_4_png",
        i.width = 51,
        i.x = 416,
        i.y = 135,
        i
    },
    n._Image11_i = function() {
        var i = new eui.Image;
        return i.height = 21,
        i.source = "king_hamor_sign_day_5_png",
        i.width = 51,
        i.x = 542,
        i.y = 135,
        i
    },
    n._Image12_i = function() {
        var i = new eui.Image;
        return i.height = 21,
        i.source = "king_hamor_sign_day_6_png",
        i.width = 51,
        i.x = 668,
        i.y = 135,
        i
    },
    n._Image13_i = function() {
        var i = new eui.Image;
        return i.height = 21,
        i.source = "king_hamor_sign_day_7_png",
        i.width = 51,
        i.x = 793,
        i.y = 135,
        i
    },
    n._Image14_i = function() {
        var i = new eui.Image;
        return i.height = 21,
        i.source = "king_hamor_sign_day_14_png",
        i.width = 62,
        i.x = 174,
        i.y = 296,
        i
    },
    n._Image15_i = function() {
        var i = new eui.Image;
        return i.height = 21,
        i.source = "king_hamor_sign_day_13_png",
        i.width = 62,
        i.x = 300,
        i.y = 296,
        i
    },
    n._Image16_i = function() {
        var i = new eui.Image;
        return i.height = 21,
        i.source = "king_hamor_sign_day_12_png",
        i.width = 62,
        i.x = 426,
        i.y = 296,
        i
    },
    n._Image17_i = function() {
        var i = new eui.Image;
        return i.height = 21,
        i.source = "king_hamor_sign_day_11_png",
        i.width = 62,
        i.x = 553,
        i.y = 296,
        i
    },
    n._Image18_i = function() {
        var i = new eui.Image;
        return i.height = 21,
        i.source = "king_hamor_sign_day_10_png",
        i.width = 62,
        i.x = 678,
        i.y = 296,
        i
    },
    n._Image19_i = function() {
        var i = new eui.Image;
        return i.height = 21,
        i.source = "king_hamor_sign_day_9_png",
        i.width = 51,
        i.x = 810,
        i.y = 296,
        i
    },
    n._Image20_i = function() {
        var i = new eui.Image;
        return i.height = 21,
        i.source = "king_hamor_sign_day_8_png",
        i.width = 51,
        i.x = 936,
        i.y = 296,
        i
    },
    n._Image21_i = function() {
        var i = new eui.Image;
        return i.height = 21,
        i.source = "king_hamor_sign_day_15_png",
        i.width = 62,
        i.x = 31,
        i.y = 466,
        i
    },
    n._Image22_i = function() {
        var i = new eui.Image;
        return i.height = 21,
        i.source = "king_hamor_sign_day_16_png",
        i.width = 62,
        i.x = 158,
        i.y = 465,
        i
    },
    n._Image23_i = function() {
        var i = new eui.Image;
        return i.height = 21,
        i.source = "king_hamor_sign_day_17_png",
        i.width = 62,
        i.x = 284,
        i.y = 465,
        i
    },
    n._Image24_i = function() {
        var i = new eui.Image;
        return i.height = 21,
        i.source = "king_hamor_sign_day_18_png",
        i.width = 62,
        i.x = 409,
        i.y = 465,
        i
    },
    n._Image25_i = function() {
        var i = new eui.Image;
        return i.height = 21,
        i.source = "king_hamor_sign_day_19_png",
        i.width = 62,
        i.x = 536,
        i.y = 465,
        i
    },
    n._Image26_i = function() {
        var i = new eui.Image;
        return i.height = 21,
        i.source = "king_hamor_sign_day_20_png",
        i.width = 62,
        i.x = 662,
        i.y = 465,
        i
    },
    n._Image27_i = function() {
        var i = new eui.Image;
        return i.height = 21,
        i.source = "king_hamor_sign_day_21_png",
        i.width = 62,
        i.x = 788,
        i.y = 465,
        i
    },
    n.flag_signed_0_i = function() {
        var i = new eui.Image;
        return this.flag_signed_0 = i,
        i.height = 29,
        i.source = "king_hamor_sign_flag_signed_png",
        i.visible = !1,
        i.width = 72,
        i.x = 27,
        i.y = 132,
        i
    },
    n.flag_signed_1_i = function() {
        var i = new eui.Image;
        return this.flag_signed_1 = i,
        i.height = 29,
        i.source = "king_hamor_sign_flag_signed_png",
        i.visible = !1,
        i.width = 72,
        i.x = 153,
        i.y = 132,
        i
    },
    n.flag_signed_2_i = function() {
        var i = new eui.Image;
        return this.flag_signed_2 = i,
        i.height = 29,
        i.source = "king_hamor_sign_flag_signed_png",
        i.visible = !1,
        i.width = 72,
        i.x = 279,
        i.y = 132,
        i
    },
    n.flag_signed_3_i = function() {
        var i = new eui.Image;
        return this.flag_signed_3 = i,
        i.height = 29,
        i.source = "king_hamor_sign_flag_signed_png",
        i.visible = !1,
        i.width = 72,
        i.x = 405,
        i.y = 132,
        i
    },
    n.flag_signed_4_i = function() {
        var i = new eui.Image;
        return this.flag_signed_4 = i,
        i.height = 29,
        i.source = "king_hamor_sign_flag_signed_png",
        i.visible = !1,
        i.width = 72,
        i.x = 530,
        i.y = 132,
        i
    },
    n.flag_signed_5_i = function() {
        var i = new eui.Image;
        return this.flag_signed_5 = i,
        i.height = 29,
        i.source = "king_hamor_sign_flag_signed_png",
        i.visible = !1,
        i.width = 72,
        i.x = 656,
        i.y = 132,
        i
    },
    n.flag_signed_6_i = function() {
        var i = new eui.Image;
        return this.flag_signed_6 = i,
        i.height = 29,
        i.source = "king_hamor_sign_flag_signed_png",
        i.visible = !1,
        i.width = 72,
        i.x = 782,
        i.y = 132,
        i
    },
    n.flag_signed_7_i = function() {
        var i = new eui.Image;
        return this.flag_signed_7 = i,
        i.height = 29,
        i.source = "king_hamor_sign_flag_signed_png",
        i.visible = !1,
        i.width = 72,
        i.x = 925,
        i.y = 293,
        i
    },
    n.flag_signed_8_i = function() {
        var i = new eui.Image;
        return this.flag_signed_8 = i,
        i.height = 29,
        i.source = "king_hamor_sign_flag_signed_png",
        i.visible = !1,
        i.width = 72,
        i.x = 799,
        i.y = 293,
        i
    },
    n.flag_signed_9_i = function() {
        var i = new eui.Image;
        return this.flag_signed_9 = i,
        i.height = 29,
        i.source = "king_hamor_sign_flag_signed_png",
        i.visible = !1,
        i.width = 72,
        i.x = 673,
        i.y = 293,
        i
    },
    n.flag_signed_10_i = function() {
        var i = new eui.Image;
        return this.flag_signed_10 = i,
        i.height = 29,
        i.source = "king_hamor_sign_flag_signed_png",
        i.visible = !1,
        i.width = 72,
        i.x = 548,
        i.y = 293,
        i
    },
    n.flag_signed_11_i = function() {
        var i = new eui.Image;
        return this.flag_signed_11 = i,
        i.height = 29,
        i.source = "king_hamor_sign_flag_signed_png",
        i.visible = !1,
        i.width = 72,
        i.x = 422,
        i.y = 293,
        i
    },
    n.flag_signed_12_i = function() {
        var i = new eui.Image;
        return this.flag_signed_12 = i,
        i.height = 29,
        i.source = "king_hamor_sign_flag_signed_png",
        i.visible = !1,
        i.width = 72,
        i.x = 296,
        i.y = 293,
        i
    },
    n.flag_signed_13_i = function() {
        var i = new eui.Image;
        return this.flag_signed_13 = i,
        i.height = 29,
        i.source = "king_hamor_sign_flag_signed_png",
        i.visible = !1,
        i.width = 72,
        i.x = 170,
        i.y = 293,
        i
    },
    n.flag_signed_14_i = function() {
        var i = new eui.Image;
        return this.flag_signed_14 = i,
        i.height = 29,
        i.source = "king_hamor_sign_flag_signed_png",
        i.visible = !1,
        i.width = 72,
        i.x = 27,
        i.y = 462,
        i
    },
    n.flag_signed_15_i = function() {
        var i = new eui.Image;
        return this.flag_signed_15 = i,
        i.height = 29,
        i.source = "king_hamor_sign_flag_signed_png",
        i.visible = !1,
        i.width = 72,
        i.x = 153,
        i.y = 462,
        i
    },
    n.flag_signed_16_i = function() {
        var i = new eui.Image;
        return this.flag_signed_16 = i,
        i.height = 29,
        i.source = "king_hamor_sign_flag_signed_png",
        i.visible = !1,
        i.width = 72,
        i.x = 279,
        i.y = 462,
        i
    },
    n.flag_signed_17_i = function() {
        var i = new eui.Image;
        return this.flag_signed_17 = i,
        i.height = 29,
        i.source = "king_hamor_sign_flag_signed_png",
        i.visible = !1,
        i.width = 72,
        i.x = 405,
        i.y = 462,
        i
    },
    n.flag_signed_18_i = function() {
        var i = new eui.Image;
        return this.flag_signed_18 = i,
        i.height = 29,
        i.source = "king_hamor_sign_flag_signed_png",
        i.visible = !1,
        i.width = 72,
        i.x = 531,
        i.y = 462,
        i
    },
    n.flag_signed_19_i = function() {
        var i = new eui.Image;
        return this.flag_signed_19 = i,
        i.height = 29,
        i.source = "king_hamor_sign_flag_signed_png",
        i.visible = !1,
        i.width = 72,
        i.x = 657,
        i.y = 462,
        i
    },
    n.flag_signed_20_i = function() {
        var i = new eui.Image;
        return this.flag_signed_20 = i,
        i.height = 29,
        i.source = "king_hamor_sign_flag_signed_png",
        i.visible = !1,
        i.width = 72,
        i.x = 783,
        i.y = 462,
        i
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/KingHamorThreePopSkin.exml"] = window.KingHamorThreePopSkin = function(i) {
    function e() {
        i.call(this),
        this.skinParts = ["btnBuy_0", "btnBuy_1", "btnBuy_2", "icon_1", "icon_2", "icon_0", "btnClose"],
        this.height = 456,
        this.width = 784,
        this.elementsContent = [this._Image1_i(), this._Image2_i(), this._Image3_i(), this.btnBuy_0_i(), this.btnBuy_1_i(), this.btnBuy_2_i(), this._Label1_i(), this._Label2_i(), this._Label3_i(), this._Label4_i(), this._Label5_i(), this._Label6_i(), this._Label7_i(), this._Image4_i(), this.icon_1_i(), this._Image5_i(), this.icon_2_i(), this._Image6_i(), this.icon_0_i(), this.btnClose_i()]
    }
    __extends(e, i);
    var n = e.prototype;
    return n._Image1_i = function() {
        var i = new eui.Image;
        return i.height = 456,
        i.source = "king_hamor_three_pop_bg_png",
        i.width = 784,
        i.x = 0,
        i.y = 0,
        i
    },
    n._Image2_i = function() {
        var i = new eui.Image;
        return i.height = 374,
        i.source = "king_hamor_three_pop_line_png",
        i.width = 2,
        i.x = 528,
        i.y = 42,
        i
    },
    n._Image3_i = function() {
        var i = new eui.Image;
        return i.height = 375,
        i.source = "king_hamor_three_pop_line_png",
        i.width = 2,
        i.x = 248,
        i.y = 42,
        i
    },
    n.btnBuy_0_i = function() {
        var i = new eui.Image;
        return this.btnBuy_0 = i,
        i.height = 40,
        i.source = "king_hamor_three_pop_btnBuy_png",
        i.width = 120,
        i.x = 330,
        i.y = 389,
        i
    },
    n.btnBuy_1_i = function() {
        var i = new eui.Image;
        return this.btnBuy_1 = i,
        i.height = 40,
        i.source = "king_hamor_three_pop_btnBuy_png",
        i.width = 120,
        i.x = 70,
        i.y = 389,
        i
    },
    n.btnBuy_2_i = function() {
        var i = new eui.Image;
        return this.btnBuy_2 = i,
        i.height = 40,
        i.source = "king_hamor_three_pop_btnBuy_png",
        i.width = 120,
        i.x = 588,
        i.y = 389,
        i
    },
    n._Label1_i = function() {
        var i = new eui.Label;
        return i.fontFamily = "HuaKangXinZongYi",
        i.lineSpacing = 3,
        i.size = 26,
        i.text = "能力提升",
        i.textColor = 16773461,
        i.touchEnabled = !1,
        i.x = 339,
        i.y = 22,
        i
    },
    n._Label2_i = function() {
        var i = new eui.Label;
        return i.lineSpacing = 10,
        i.size = 18,
        i.text = "体力+7/75\n攻击+2/28\n防御+2/26\n特防+2/26\n速度+2/22",
        i.textColor = 16777215,
        i.touchEnabled = !1,
        i.x = 90,
        i.y = 193,
        i
    },
    n._Label3_i = function() {
        var i = new eui.Label;
        return i.fontFamily = "HuaKangXinZongYi",
        i.lineSpacing = 3,
        i.size = 20,
        i.text = "王之哈莫专属全能刻印",
        i.textColor = 16773461,
        i.touchEnabled = !1,
        i.x = 30,
        i.y = 164,
        i
    },
    n._Label4_i = function() {
        var i = new eui.Label;
        return i.lineSpacing = 4,
        i.size = 18,
        i.text = "必中；攻击时造成的伤害\n不会出现微弱（克制关系\n为微弱时都变成普通）；\n每次命中对手还会降低对\n手下只出战精灵最大HP的\n13%，最多降低52%；自身\n每处于一种能力提升状态\n，此技能威力提升30",
        i.textColor = 16777215,
        i.touchEnabled = !1,
        i.x = 285,
        i.y = 189,
        i
    },
    n._Label5_i = function() {
        var i = new eui.Label;
        return i.fontFamily = "HuaKangXinZongYi",
        i.lineSpacing = 3,
        i.size = 20,
        i.text = "第五技能：王•龙子盛威决",
        i.textColor = 16773461,
        i.touchEnabled = !1,
        i.x = 270,
        i.y = 164,
        i
    },
    n._Label6_i = function() {
        var i = new eui.Label;
        return i.lineSpacing = 4,
        i.size = 18,
        i.text = "满体力时受到的伤害降低\n75%，体力每降低10%，减\n伤效果降低15% 每回合开\n始时若自身体力高于对手\n则免疫异常状态；若自身\n体力低于对手则回合结束\n时恢复最大HP的1/3",
        i.textColor = 16777215,
        i.touchEnabled = !1,
        i.x = 551,
        i.y = 189,
        i
    },
    n._Label7_i = function() {
        var i = new eui.Label;
        return i.fontFamily = "HuaKangXinZongYi",
        i.lineSpacing = 3,
        i.size = 20,
        i.text = "王之哈莫专属特性：真",
        i.textColor = 16773461,
        i.touchEnabled = !1,
        i.x = 551,
        i.y = 164,
        i
    },
    n._Image4_i = function() {
        var i = new eui.Image;
        return i.height = 86,
        i.source = "king_hamor_three_pop_rect_png",
        i.width = 75,
        i.x = 352,
        i.y = 69,
        i
    },
    n.icon_1_i = function() {
        var i = new eui.Image;
        return this.icon_1 = i,
        i.height = 60,
        i.source = "king_hamor_three_pop_icon_1_png",
        i.width = 57,
        i.x = 361,
        i.y = 82,
        i
    },
    n._Image5_i = function() {
        var i = new eui.Image;
        return i.height = 86,
        i.source = "king_hamor_three_pop_rect_png",
        i.width = 75,
        i.x = 610,
        i.y = 69,
        i
    },
    n.icon_2_i = function() {
        var i = new eui.Image;
        return this.icon_2 = i,
        i.height = 56,
        i.source = "king_hamor_three_pop_icon_2_png",
        i.width = 64,
        i.x = 615,
        i.y = 84,
        i
    },
    n._Image6_i = function() {
        var i = new eui.Image;
        return i.height = 86,
        i.source = "king_hamor_three_pop_rect_png",
        i.width = 75,
        i.x = 92,
        i.y = 69,
        i
    },
    n.icon_0_i = function() {
        var i = new eui.Image;
        return this.icon_0 = i,
        i.height = 50,
        i.source = "king_hamor_three_pop_icon_0_png",
        i.width = 52,
        i.x = 104,
        i.y = 85,
        i
    },
    n.btnClose_i = function() {
        var i = new eui.Image;
        return this.btnClose = i,
        i.height = 44,
        i.source = "king_hamor_pop_btnClose_png",
        i.width = 44,
        i.x = 728,
        i.y = 11,
        i
    },
    e
} (eui.Skin);