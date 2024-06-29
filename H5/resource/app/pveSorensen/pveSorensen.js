var __reflect = this && this.__reflect ||
function(e, t, n) {
    e.__class__ = t,
    n ? n.push(t) : n = [t],
    e.__types__ = e.__types__ ? n.concat(e.__types__) : n
},
__extends = this && this.__extends ||
function(e, t) {
    function n() {
        this.constructor = e
    }
    for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
    n.prototype = t.prototype,
    e.prototype = new n
},
pveSorensen; !
function(e) {
    var t = function(t) {
        function n() {
            return t.call(this) || this
        }
        return __extends(n, t),
        n.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this),
            this.openPanel(1),
            EventManager.addEventListener("pve_sorensen_change_panel", this.changePanel, this)
        },
        n.prototype.changePanel = function(e) {
            this.openPanel(e.data)
        },
        n.prototype.openPanel = function(t) {
            switch (this.desPanel(), t) {
            case 1:
                this._curPanel = new e.PveSorensenMain;
                break;
            case 2:
                this._curPanel = new e.PveSorensenFight
            }
            this.addChild(this._curPanel)
        },
        n.prototype.desPanel = function() {
            this._curPanel && (this._curPanel.destroy(), this._curPanel.parent && this._curPanel.parent.removeChild(this._curPanel))
        },
        n.prototype.destroy = function() {
            t.prototype.destroy.call(this),
            this.desPanel(),
            EventManager.removeEventListener("pve_sorensen_change_panel", this.changePanel, this)
        },
        n
    } (BaseModule);
    e.PveSorensen = t,
    __reflect(t.prototype, "pveSorensen.PveSorensen")
} (pveSorensen || (pveSorensen = {}));
var __reflect = this && this.__reflect ||
function(e, t, n) {
    e.__class__ = t,
    n ? n.push(t) : n = [t],
    e.__types__ = e.__types__ ? n.concat(e.__types__) : n
},
__extends = this && this.__extends ||
function(e, t) {
    function n() {
        this.constructor = e
    }
    for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
    n.prototype = t.prototype,
    e.prototype = new n
},
pveSorensen; !
function(e) {
    var t = function(e) {
        function t(t) {
            var n = e.call(this) || this;
            return n.skinName = PveSorensenBossSkin,
            n._type = t,
            n
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            var t = this;
            e.prototype.childrenCreated.call(this),
            this.img_first.visible = 1 == this._type,
            this.img_final.visible = 2 == this._type,
            ImageButtonUtil.add(this.btnFight,
            function() {
                FightManager.fightNoMapBoss("", 1117 + t._type),
                t.destroy()
            },
            this),
            ImageButtonUtil.add(this.btnGiveup,
            function() {
                Alert.show("离开挑战将重置当前进度，是否确定？",
                function() {
                    EventManager.dispatchEventWith("pve_sorensen_giveup"),
                    t.destroy()
                })
            },
            this)
        },
        t.prototype.destroy = function() {
            e.prototype.destroy.call(this),
            ImageButtonUtil.removeAll(this),
            this.parent && this.parent.removeChild(this)
        },
        t
    } (BaseModule);
    e.PveSorensenBoss = t,
    __reflect(t.prototype, "pveSorensen.PveSorensenBoss")
} (pveSorensen || (pveSorensen = {}));
var __reflect = this && this.__reflect ||
function(e, t, n) {
    e.__class__ = t,
    n ? n.push(t) : n = [t],
    e.__types__ = e.__types__ ? n.concat(e.__types__) : n
},
__extends = this && this.__extends ||
function(e, t) {
    function n() {
        this.constructor = e
    }
    for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
    n.prototype = t.prototype,
    e.prototype = new n
},
pveSorensen; !
function(e) {
    var t = function(t) {
        function n() {
            var e = t.call(this) || this;
            return e._isFinal = !1,
            e.skinName = PveSorensenFightSkin,
            e
        }
        return __extends(n, t),
        n.prototype.childrenCreated = function() {
            var e = this;
            t.prototype.childrenCreated.call(this),
            this.initOldPveBtnClose(28, this, "",
            function() {
                Alert.show("离开挑战将重置当前进度，是否确定？",
                function() {
                    e.onClose()
                })
            },
            this),
            this.adaptLeftContent(this.grp_btns),
            this.addEvent(),
            this.updateView(),
            KTool.getMultiValue([3084],
            function(t) {
                e._isFinal = !!KTool.getBit(t[0], 1),
                console.log(e._isFinal)
            })
        },
        n.prototype.addEvent = function() {
            var e = this;
            ImageButtonUtil.add(this.btnClose,
            function() {
                Alert.show("离开挑战将重置当前进度，是否确定？",
                function() {
                    e.onClose()
                })
            },
            this),
            ImageButtonUtil.add(this.help,
            function() {
                var e = config.Help_tips.getItem(28),
                t = {};
                t.title = "活动说明",
                t.str = StringUtil.TransformLineBreak(e.tips),
                tipsPop.TipsPop.openHelpPop(t)
            },
            this),
            ImageButtonUtil.add(this.imgBtn_pet,
            function() {
                ModuleManager.showModule("petBag", ["petBag"])
            },
            this),
            ImageButtonUtil.add(this.imgBtn_cure,
            function() {
                PetManager.cureAll()
            },
            this),
            ImageButtonUtil.add(this.btnInfo,
            function() {
                PetManager.showPetIntroduce(2e3)
            },
            this),
            ImageButtonUtil.add(this.img_fight,
            function() {
                e.openBoss(1)
            },
            this),
            ImageButtonUtil.add(this.img_finalFight,
            function() {
                e.openBoss(2)
            },
            this),
            EventManager.addEventListener(PetFightEvent.ALARM_CLICK, this.updateData, this),
            EventManager.addEventListener("pve_sorensen_giveup", this.onGiveUp, this)
        },
        n.prototype.openBoss = function(t) {
            var n = PetManager.getBagMap();
            if (n.length < 6) return void Alarm.show("必须携带6只100级精灵出战");
            for (var i = 0; i < n.length; i++) if (n[i].level < 100) return void Alarm.show("必须携带6只100级精灵出战");
            this.hidePanel(),
            this._panel = new e.PveSorensenBoss(t),
            this.addChild(this._panel)
        },
        n.prototype.hidePanel = function() {
            this._panel && (this._panel.destroy(), this._panel.parent && this._panel.parent.removeChild(this._panel))
        },
        n.prototype.updateData = function() {
            var e = this;
            KTool.getMultiValue([3084],
            function(t) {
                e._isFinal = !!KTool.getBit(t[0], 1),
                console.log(e._isFinal),
                e.updateView()
            }),
            console.log("updateData")
        },
        n.prototype.updateView = function() {
            this.img_fight.visible = !this._isFinal,
            this.img_finalFight.visible = this._isFinal
        },
        n.prototype.onGiveUp = function() {
            this._isFinal = !1,
            this.updateView()
        },
        n.prototype.destroy = function() {
            t.prototype.destroy.call(this),
            this.hidePanel(),
            ImageButtonUtil.removeAll(this),
            EventManager.removeEventListener(PetFightEvent.ALARM_CLICK, this.updateData, this),
            EventManager.removeEventListener("pve_sorensen_giveup", this.onGiveUp, this)
        },
        n
    } (BaseModule);
    e.PveSorensenFight = t,
    __reflect(t.prototype, "pveSorensen.PveSorensenFight")
} (pveSorensen || (pveSorensen = {}));
var __reflect = this && this.__reflect ||
function(e, t, n) {
    e.__class__ = t,
    n ? n.push(t) : n = [t],
    e.__types__ = e.__types__ ? n.concat(e.__types__) : n
},
__extends = this && this.__extends ||
function(e, t) {
    function n() {
        this.constructor = e
    }
    for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
    n.prototype = t.prototype,
    e.prototype = new n
},
pveSorensen; !
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.skinName = PveSorensenSkin,
            t
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.initOldPveBtnClose(28, this, "",
            function() {
                ModuleManager.hideModule("pveSorensen")
            },
            this),
            this.addEvent()
        },
        t.prototype.addEvent = function() {
            ImageButtonUtil.add(this.btnClose,
            function() {
                ModuleManager.hideModule("pveSorensen")
            },
            this),
            ImageButtonUtil.add(this.help,
            function() {
                var e = config.Help_tips.getItem(28),
                t = {};
                t.title = "活动说明",
                t.str = StringUtil.TransformLineBreak(e.tips),
                tipsPop.TipsPop.openHelpPop(t)
            },
            this),
            ImageButtonUtil.add(this.btnFight_1,
            function() {
                StatLogger.log("20210618版本系统功能", "索伦森获得线（第二阶段）", "点击【超进化形态】按钮"),
                ModuleManager.showModuleByID(88)
            },
            this),
            ImageButtonUtil.add(this.btnFight_2,
            function() {
                StatLogger.log("20210709版本系统功能", "索伦森获得线（第三阶段）", "点击【完全体形态】按钮"),
                ModuleManager.showModuleByID(92)
            },
            this),
            ImageButtonUtil.add(this.btnFight_0,
            function() {
                StatLogger.log("0409版本系统功能", "索伦森副本第一阶段", "打开索伦森初级形态面板"),
                EventManager.dispatchEventWith("pve_sorensen_change_panel", !1, 2)
            },
            this)
        },
        t.prototype.destroy = function() {
            e.prototype.destroy.call(this),
            ImageButtonUtil.removeAll(this)
        },
        t
    } (BaseModule);
    e.PveSorensenMain = t,
    __reflect(t.prototype, "pveSorensen.PveSorensenMain")
} (pveSorensen || (pveSorensen = {}));
var __extends = this && this.__extends ||
function(e, t) {
    function n() {
        this.constructor = e
    }
    for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
    n.prototype = t.prototype,
    e.prototype = new n
};
window.generateEUI = window.generateEUI || {},
generateEUI.paths = generateEUI.paths || {},
generateEUI.styles = void 0,
generateEUI.skins = {},
generateEUI.paths["resource/eui_skins/PveSorensenBossSkin.exml"] = window.PveSorensenBossSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["img_first", "img_final", "btnFight", "btnGiveup"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this._Image1_i(), this.img_first_i(), this.img_final_i(), this.btnFight_i(), this.btnGiveup_i()]
    }
    __extends(t, e);
    var n = t.prototype;
    return n._Image1_i = function() {
        var e = new eui.Image;
        return e.height = 640,
        e.source = "pve_sorensen_boss_bg_jpg",
        e.percentWidth = 100,
        e.x = 0,
        e.y = 0,
        e
    },
    n.img_first_i = function() {
        var e = new eui.Image;
        return this.img_first = e,
        e.height = 488,
        e.horizontalCenter = .5,
        e.source = "pve_sorensen_boss_img_first_png",
        e.width = 823,
        e.y = 48,
        e
    },
    n.img_final_i = function() {
        var e = new eui.Image;
        return this.img_final = e,
        e.height = 487,
        e.horizontalCenter = -.5,
        e.source = "pve_sorensen_boss_img_final_png",
        e.width = 861,
        e.y = 49,
        e
    },
    n.btnFight_i = function() {
        var e = new eui.Image;
        return this.btnFight = e,
        e.height = 69,
        e.horizontalCenter = -110.5,
        e.source = "pve_sorensen_boss_btnFight_png",
        e.width = 275,
        e.y = 531,
        e
    },
    n.btnGiveup_i = function() {
        var e = new eui.Image;
        return this.btnGiveup = e,
        e.horizontalCenter = 127.5,
        e.source = "pve_sorensen_boss_btnNormal_png",
        e.y = 513,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/PveSorensenFightSkin.exml"] = window.PveSorensenFightSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["btnInfo", "imgBtn_pet", "imgBtn_cure", "grp_btns", "img_fight", "img_finalFight", "btnClose", "help"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this._Image1_i(), this._Image2_i(), this.grp_btns_i(), this._Image3_i(), this.img_fight_i(), this.img_finalFight_i(), this._Group1_i()]
    }
    __extends(t, e);
    var n = t.prototype;
    return n._Image1_i = function() {
        var e = new eui.Image;
        return e.height = 640,
        e.source = "pve_sorensen_fight_bg_jpg",
        e.percentWidth = 100,
        e.x = 0,
        e.y = 0,
        e
    },
    n._Image2_i = function() {
        var e = new eui.Image;
        return e.height = 626,
        e.horizontalCenter = -252.5,
        e.left = 77,
        e.source = "pve_sorensen_fight_pet_14587_png",
        e.width = 477,
        e.y = 13,
        e
    },
    n.grp_btns_i = function() {
        var e = new eui.Group;
        return this.grp_btns = e,
        e.x = 31,
        e.y = 322,
        e.elementsContent = [this.btnInfo_i(), this.imgBtn_pet_i(), this.imgBtn_cure_i()],
        e
    },
    n.btnInfo_i = function() {
        var e = new eui.Image;
        return this.btnInfo = e,
        e.height = 66,
        e.source = "pve_sorensen_fight_btnInfo_png",
        e.width = 66,
        e.x = 0,
        e.y = 152,
        e
    },
    n.imgBtn_pet_i = function() {
        var e = new eui.Image;
        return this.imgBtn_pet = e,
        e.height = 60,
        e.source = "pve_sorensen_fight_imgBtn_pet_png",
        e.width = 60,
        e.x = 3,
        e.y = 0,
        e
    },
    n.imgBtn_cure_i = function() {
        var e = new eui.Image;
        return this.imgBtn_cure = e,
        e.height = 60,
        e.source = "pve_sorensen_fight_imgBtn_cure_png",
        e.width = 60,
        e.x = 3,
        e.y = 68,
        e
    },
    n._Image3_i = function() {
        var e = new eui.Image;
        return e.height = 267,
        e.horizontalCenter = 242.5,
        e.right = 117,
        e.source = "pve_sorensen_fight_label_png",
        e.width = 417,
        e.y = 116,
        e
    },
    n.img_fight_i = function() {
        var e = new eui.Image;
        return this.img_fight = e,
        e.height = 155,
        e.right = 36,
        e.source = "pve_sorensen_fight_img_fight_png",
        e.width = 274,
        e.y = 485,
        e
    },
    n.img_finalFight_i = function() {
        var e = new eui.Image;
        return this.img_finalFight = e,
        e.height = 148,
        e.right = 36,
        e.source = "pve_sorensen_fight_img_finalFight_png",
        e.width = 269,
        e.y = 485,
        e
    },
    n._Group1_i = function() {
        var e = new eui.Group;
        return e.visible = !1,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this._Image4_i(), this.btnClose_i(), this.help_i()],
        e
    },
    n._Image4_i = function() {
        var e = new eui.Image;
        return e.height = 50,
        e.source = "pve_sorensen_up_bg_png",
        e.width = 145,
        e.x = 0,
        e.y = 0,
        e
    },
    n.btnClose_i = function() {
        var e = new eui.Image;
        return this.btnClose = e,
        e.source = "common_close_2_png",
        e.x = 0,
        e.y = 0,
        e
    },
    n.help_i = function() {
        var e = new eui.Image;
        return this.help = e,
        e.height = 38,
        e.source = "pve_sorensen_help_png",
        e.width = 34,
        e.x = 133,
        e.y = 7,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/PveSorensenSkin.exml"] = window.PveSorensenSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["btnClose", "help", "btnFight_2", "btnFight_1", "btnFight_0"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this._Image1_i(), this._Group1_i(), this._Image3_i(), this._Group2_i()]
    }
    __extends(t, e);
    var n = t.prototype;
    return n._Image1_i = function() {
        var e = new eui.Image;
        return e.height = 640,
        e.source = "pve_sorensen_bg_jpg",
        e.percentWidth = 100,
        e.x = 0,
        e.y = 0,
        e
    },
    n._Group1_i = function() {
        var e = new eui.Group;
        return e.visible = !1,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this._Image2_i(), this.btnClose_i(), this.help_i()],
        e
    },
    n._Image2_i = function() {
        var e = new eui.Image;
        return e.height = 50,
        e.source = "pve_sorensen_up_bg_png",
        e.width = 145,
        e.x = 0,
        e.y = 0,
        e
    },
    n.btnClose_i = function() {
        var e = new eui.Image;
        return this.btnClose = e,
        e.source = "common_close_2_png",
        e.x = 0,
        e.y = 0,
        e
    },
    n.help_i = function() {
        var e = new eui.Image;
        return this.help = e,
        e.height = 38,
        e.source = "pve_sorensen_help_png",
        e.visible = !1,
        e.width = 34,
        e.x = 133,
        e.y = 7,
        e
    },
    n._Image3_i = function() {
        var e = new eui.Image;
        return e.height = 170,
        e.horizontalCenter = 1,
        e.source = "pve_sorensen_img_title_png",
        e.width = 1052,
        e.y = 346,
        e
    },
    n._Group2_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = .5,
        e.width = 969,
        e.y = 518,
        e.elementsContent = [this.btnFight_2_i(), this._Image4_i(), this.btnFight_1_i(), this._Image5_i(), this.btnFight_0_i()],
        e
    },
    n.btnFight_2_i = function() {
        var e = new eui.Image;
        return this.btnFight_2 = e,
        e.height = 83,
        e.source = "pve_sorensen_btnFight_2_png",
        e.width = 279,
        e.x = 690,
        e.y = 0,
        e
    },
    n._Image4_i = function() {
        var e = new eui.Image;
        return e.height = 47,
        e.source = "pve_sorensen_btnNext_png",
        e.width = 53,
        e.x = 631,
        e.y = 18,
        e
    },
    n.btnFight_1_i = function() {
        var e = new eui.Image;
        return this.btnFight_1 = e,
        e.height = 83,
        e.source = "pve_sorensen_btnFight_1_png",
        e.width = 279,
        e.x = 345,
        e.y = 0,
        e
    },
    n._Image5_i = function() {
        var e = new eui.Image;
        return e.height = 47,
        e.source = "pve_sorensen_btnNext_png",
        e.width = 53,
        e.x = 286,
        e.y = 18,
        e
    },
    n.btnFight_0_i = function() {
        var e = new eui.Image;
        return this.btnFight_0 = e,
        e.height = 83,
        e.source = "pve_sorensen_btnFight_0_png",
        e.width = 279,
        e.x = 0,
        e.y = 0,
        e
    },
    t
} (eui.Skin);