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
    return new(i || (i = Promise))(function(r, o) {
        function a(t) {
            try {
                u(n.next(t))
            } catch(e) {
                o(e)
            }
        }
        function s(t) {
            try {
                u(n["throw"](t))
            } catch(e) {
                o(e)
            }
        }
        function u(t) {
            t.done ? r(t.value) : new i(function(e) {
                e(t.value)
            }).then(a, s)
        }
        u((n = n.apply(t, e || [])).next())
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
        if (r) throw new TypeError("Generator is already executing.");
        for (; u;) try {
            if (r = 1, o && (a = o[2 & i[0] ? "return": i[0] ? "throw": "next"]) && !(a = a.call(o, i[1])).done) return a;
            switch (o = 0, a && (i = [0, a.value]), i[0]) {
            case 0:
            case 1:
                a = i;
                break;
            case 4:
                return u.label++,
                {
                    value: i[1],
                    done: !1
                };
            case 5:
                u.label++,
                o = i[1],
                i = [0];
                continue;
            case 7:
                i = u.ops.pop(),
                u.trys.pop();
                continue;
            default:
                if (a = u.trys, !(a = a.length > 0 && a[a.length - 1]) && (6 === i[0] || 2 === i[0])) {
                    u = 0;
                    continue
                }
                if (3 === i[0] && (!a || i[1] > a[0] && i[1] < a[3])) {
                    u.label = i[1];
                    break
                }
                if (6 === i[0] && u.label < a[1]) {
                    u.label = a[1],
                    a = i;
                    break
                }
                if (a && u.label < a[2]) {
                    u.label = a[2],
                    u.ops.push(i);
                    break
                }
                a[2] && u.ops.pop(),
                u.trys.pop();
                continue
            }
            i = e.call(t, u)
        } catch(n) {
            i = [6, n],
            o = 0
        } finally {
            r = a = 0
        }
        if (5 & i[0]) throw i[1];
        return {
            value: i[0] ? i[1] : void 0,
            done: !0
        }
    }
    var r, o, a, s, u = {
        label: 0,
        sent: function() {
            if (1 & a[0]) throw a[1];
            return a[1]
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
petGetPop; !
function(t) {
    var e = function(t) {
        function e(e) {
            var i = t.call(this) || this;
            return i.petId = 0,
            i.ct = 0,
            i.skinName = PetGetPopSkin,
            e && (i.petId = ~~e.id, i.ct = ~~e.ct),
            i
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            var e = this;
            t.prototype.childrenCreated.call(this),
            this.ani = SpineUtil.createAnimate("huodejingling"),
            this.aniGroup.addChild(this.ani),
            ImageButtonUtil.add(this.close,
            function() {
                e.onClose(),
                EventManager.dispatchEventWith(AwardEvent.CLOSE_AWARD_DIALOG)
            },
            this),
            ImageButtonUtil.add(this.best,
            function() {
                AwardManager.pause(),
                PetManager.upDateBagPetInfo(e.ct,
                function(t) {
                    ModuleManager.showModule("oneKeyTheBest", ["oneKeyTheBest"], t, null, AppDoStyle.DESTROY)
                })
            },
            this),
            this.updateView()
        },
        e.prototype.updateView = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var t, e, i, n, r, o, a, s, u = this;
                return __generator(this,
                function(h) {
                    switch (h.label) {
                    case 0:
                        if (this.showGroup.visible = !1, this.title.visible = this.best.visible = this.ct > 0, GameInfo.isChecking && (this.best.visible = !1), t = PetXMLInfo.getName(this.petId), this.petName.text = t, this.attr.text = "精灵属性：" + PetXMLInfo.getTypeCN(this.petId), this.img_attr.source = ClientConfig.getpettypeticon(PetXMLInfo.getType(this.petId)), this.groupTag.removeChildren(), e = EffectIconControl.getAllEffctByPetId(this.petId), e && (i = e[0].kind, null != i)) for (n = i.toString().split(" ").map(Number), r = 0; r < n.length; r++) o = new eui.Image("pet_bag_tag" + (n[r] + 1) + "_png"),
                        this.groupTag.addChild(o);
                        return [4, RES.getResByUrl(ClientConfig.getfightPetPng(this.petId + ""), null, null, "image")];
                    case 1:
                        return a = h.sent(),
                        this.pet.texture = a,
                        EngineHookManager.repairCanvasRenderDrawMesh(),
                        s = this.ani.play("kaiqi", 1),
                        s.on(5,
                        function(t) {
                            "appear" == t.data.name && (u.showGroup.visible = !0)
                        },
                        this),
                        s.on(3,
                        function() {
                            u.ani.play("changtai", 0)
                        }),
                        [2]
                    }
                })
            })
        },
        e.prototype.destroy = function() {
            t.prototype.destroy.call(this),
            EngineHookManager.restoreCanvasRenderDrawMesh(),
            DisplayUtil.removeForParent(this.ani),
            this.ani = null
        },
        e
    } (BaseModule);
    t.PetGetPop = e,
    __reflect(e.prototype, "petGetPop.PetGetPop")
} (petGetPop || (petGetPop = {}));
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
generateEUI.paths["resource/eui_skins/PetGetPopSkin.exml"] = window.PetGetPopSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "aniGroup", "pet", "img_attr", "groupTag", "petName", "attr", "best", "title", "close", "showGroup"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this.aniGroup_i(), this.showGroup_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.bottom = 0,
        t.left = 0,
        t.right = 0,
        t.scale9Grid = new egret.Rectangle(4, 6, 4, 1),
        t.source = "pet_get_pop_bg_png",
        t.top = 0,
        t
    },
    i.aniGroup_i = function() {
        var t = new eui.Group;
        return this.aniGroup = t,
        t.horizontalCenter = 0,
        t.verticalCenter = 0,
        t
    },
    i.showGroup_i = function() {
        var t = new eui.Group;
        return this.showGroup = t,
        t.height = 602,
        t.horizontalCenter = 0,
        t.verticalCenter = -7,
        t.width = 1063,
        t.elementsContent = [this.pet_i(), this._Group1_i(), this.best_i(), this.title_i(), this.close_i()],
        t
    },
    i.pet_i = function() {
        var t = new eui.Image;
        return this.pet = t,
        t.bottom = 66,
        t.horizontalCenter = 164,
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.height = 124,
        t.width = 268,
        t.x = 114,
        t.y = 369,
        t.elementsContent = [this.img_attr_i(), this._Image1_i(), this.groupTag_i(), this.petName_i(), this.attr_i()],
        t
    },
    i.img_attr_i = function() {
        var t = new eui.Image;
        return this.img_attr = t,
        t.height = 17,
        t.width = 17,
        t.x = 249,
        t.y = 68,
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 36,
        t.source = "pet_get_pop_namebg_png",
        t.visible = !0,
        t.width = 268,
        t.x = 0,
        t.y = 23,
        t
    },
    i.groupTag_i = function() {
        var t = new eui.Group;
        return this.groupTag = t,
        t.height = 0,
        t.width = 0,
        t.x = 17,
        t.y = 0,
        t.layout = this._HorizontalLayout1_i(),
        t
    },
    i._HorizontalLayout1_i = function() {
        var t = new eui.HorizontalLayout;
        return t
    },
    i.petName_i = function() {
        var t = new eui.Label;
        return this.petName = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = 6,
        t.size = 22,
        t.text = "精灵名字最长九个字",
        t.textColor = 16777215,
        t.y = 32,
        t
    },
    i.attr_i = function() {
        var t = new eui.Label;
        return this.attr = t,
        t.fontFamily = "MFShangHei",
        t.right = 20,
        t.size = 18,
        t.text = "精灵属性：光明 暗影",
        t.textColor = 9628671,
        t.y = 67,
        t
    },
    i.best_i = function() {
        var t = new eui.Image;
        return this.best = t,
        t.source = "pet_get_pop_best_png",
        t.x = 935,
        t.y = 518,
        t
    },
    i.title_i = function() {
        var t = new eui.Image;
        return this.title = t,
        t.source = "pet_get_pop_title_png",
        t.x = 0,
        t.y = 115,
        t
    },
    i.close_i = function() {
        var t = new eui.Image;
        return this.close = t,
        t.source = "pet_get_pop_close_png",
        t.x = 1029,
        t.y = 0,
        t
    },
    e
} (eui.Skin);