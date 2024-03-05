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
pveAoliaPop; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.skinName = PveAoliaPopSkin,
            e
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            var e = this;
            t.prototype.childrenCreated.call(this),
            KTool.getMultiValue([6898, 6918],
            function(t) {
                e.flag_got_0.visible = !!KTool.getBit(t[0], 9),
                e.flag_got_2.visible = !!KTool.getBit(t[1], 1)
            }),
            KTool.getBitSet([9532],
            function(t) {
                e.flag_got_1.visible = !!t[0]
            });
            for (var i = function(t) {
                ImageButtonUtil.add(n["btnFight_" + t],
                function() {
                    switch (t) {
                    case 0:
                        StatLogger.log("1204版本系统功能", "艾欧丽娅获得线副本", "进入阿娅挑战面板");
                        break;
                    case 1:
                        StatLogger.log("1204版本系统功能", "艾欧丽娅获得线副本", "进入艾丽娅挑战面板");
                        break;
                    case 2:
                        StatLogger.log("1204版本系统功能", "艾欧丽娅获得线副本", "进入艾欧丽娅挑战面板")
                    }
                    ModuleManager.hideModule(e),
                    ModuleManager.showModuleByID(68, {
                        type: t + 1
                    })
                },
                n)
            },
            n = this, o = 0; 3 > o; o++) i(o);
            ImageButtonUtil.add(this.btnClose,
            function() {
                ModuleManager.hideModule(e)
            },
            this),
            ImageButtonUtil.add(this.btnInfo_0,
            function() {
                PetManager.showPetIntroduce(3399)
            },
            this),
            ImageButtonUtil.add(this.btnInfo_1,
            function() {
                PetManager.showPetIntroduce(3403)
            },
            this),
            ImageButtonUtil.add(this.btnInfo_2,
            function() {
                PetManager.showPetIntroduce(3437)
            },
            this)
        },
        e.prototype.destroy = function() {
            ImageButtonUtil.removeAll(this),
            t.prototype.destroy.call(this)
        },
        e
    } (BaseModule);
    t.PveAoliaPop = e,
    __reflect(e.prototype, "pveAoliaPop.PveAoliaPop")
} (pveAoliaPop || (pveAoliaPop = {}));
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
generateEUI.paths["resource/eui_skins/PveAoliaPopSkin.exml"] = window.PveAoliaPopSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["up_bg", "btnClose", "btnFight_2", "btnFight_1", "btnFight_0", "flag_got_0", "flag_got_1", "flag_got_2", "btnInfo_0", "btnInfo_1", "btnInfo_2"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this._Image1_i(), this._Image2_i(), this.up_bg_i(), this.btnClose_i(), this._Group1_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "pve_aolia_pop_bg_png",
        t.percentWidth = 100,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 607,
        t.horizontalCenter = 0,
        t.source = "pve_aolia_pop_bg1_png",
        t.width = 1136,
        t.y = 20,
        t
    },
    i.up_bg_i = function() {
        var t = new eui.Image;
        return this.up_bg = t,
        t.height = 50,
        t.source = "pve_aolia_pop_up_bg_png",
        t.width = 145,
        t.x = 0,
        t.y = 0,
        t
    },
    i.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.source = "common_close_2_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.height = 335,
        t.horizontalCenter = -1,
        t.width = 1088,
        t.y = 281,
        t.elementsContent = [this._Image3_i(), this.btnFight_2_i(), this._Image4_i(), this.btnFight_1_i(), this._Image5_i(), this.btnFight_0_i(), this.flag_got_0_i(), this.flag_got_1_i(), this.flag_got_2_i(), this.btnInfo_0_i(), this.btnInfo_1_i(), this.btnInfo_2_i()],
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.height = 18,
        t.source = "pve_aolia_pop_shadow3_png",
        t.width = 201,
        t.x = 856,
        t.y = 289,
        t
    },
    i.btnFight_2_i = function() {
        var t = new eui.Image;
        return this.btnFight_2 = t,
        t.height = 74,
        t.source = "pve_aolia_pop_btnFight_png",
        t.width = 239,
        t.x = 849,
        t.y = 223,
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.height = 19,
        t.source = "pve_aolia_pop_shadow2_png",
        t.width = 200,
        t.x = 392,
        t.y = 316,
        t
    },
    i.btnFight_1_i = function() {
        var t = new eui.Image;
        return this.btnFight_1 = t,
        t.height = 74,
        t.source = "pve_aolia_pop_btnFight_png",
        t.width = 239,
        t.x = 385,
        t.y = 251,
        t
    },
    i._Image5_i = function() {
        var t = new eui.Image;
        return t.height = 19,
        t.source = "pve_aolia_pop_shadow1_png",
        t.width = 193,
        t.x = 16,
        t.y = 251,
        t
    },
    i.btnFight_0_i = function() {
        var t = new eui.Image;
        return this.btnFight_0 = t,
        t.height = 74,
        t.source = "pve_aolia_pop_btnFight_png",
        t.width = 239,
        t.x = 0,
        t.y = 187,
        t
    },
    i.flag_got_0_i = function() {
        var t = new eui.Image;
        return this.flag_got_0 = t,
        t.height = 97,
        t.source = "pve_aolia_pop_flag_got_png",
        t.width = 183,
        t.x = 67,
        t.y = 0,
        t
    },
    i.flag_got_1_i = function() {
        var t = new eui.Image;
        return this.flag_got_1 = t,
        t.height = 97,
        t.source = "pve_aolia_pop_flag_got_png",
        t.width = 183,
        t.x = 295,
        t.y = 56,
        t
    },
    i.flag_got_2_i = function() {
        var t = new eui.Image;
        return this.flag_got_2 = t,
        t.height = 97,
        t.source = "pve_aolia_pop_flag_got_png",
        t.width = 183,
        t.x = 690,
        t.y = 18,
        t
    },
    i.btnInfo_0_i = function() {
        var t = new eui.Image;
        return this.btnInfo_0 = t,
        t.height = 74,
        t.source = "pve_aolia_btnInfo_png",
        t.width = 74,
        t.x = 14,
        t.y = 62,
        t
    },
    i.btnInfo_1_i = function() {
        var t = new eui.Image;
        return this.btnInfo_1 = t,
        t.height = 74,
        t.source = "pve_aolia_btnInfo_png",
        t.width = 74,
        t.x = 237,
        t.y = 107,
        t
    },
    i.btnInfo_2_i = function() {
        var t = new eui.Image;
        return this.btnInfo_2 = t,
        t.height = 74,
        t.source = "pve_aolia_btnInfo_png",
        t.width = 74,
        t.x = 1008,
        t.y = 25,
        t
    },
    e
} (eui.Skin);