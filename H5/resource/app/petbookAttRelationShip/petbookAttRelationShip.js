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
petbookAttRelationShip; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.skinName = PetbookattitemrenderSkin,
            e
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this),
            DisplayUtil.cacheAsBitmapDisplayObj(this),
            this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this)
        },
        e.prototype.dataChanged = function() {
            this.data && (this.icon.source = ClientConfig.getpettypeticon(String(this.data.id)), this.txt.text = this.data.pow, this.box1.visible = this.box2.visible = this.box3.visible = !1, this.data.pow > 1 ? this.box2.visible = !0 : 0 == this.data.pow ? this.box3.visible = !0 : this.box1.visible = !0)
        },
        e.prototype.destroy = function() {
            this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this),
            this.icon.source = null
        },
        e
    } (eui.ItemRenderer);
    t.PetbookAttItemRender = e,
    __reflect(e.prototype, "petbookAttRelationShip.PetbookAttItemRender")
} (petbookAttRelationShip || (petbookAttRelationShip = {}));
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
petbookAttRelationShip; !
function(t) {
    var e = function(e) {
        function i(t) {
            var i = e.call(this) || this;
            return i._attackType = -1,
            i.petid = -1,
            t && (i.petid = t),
            i.skinName = PetbookattrelationshipSkin,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.rb_atk.group.selectedValue = 1,
            this.rb_single.group.selectedValue = 1,
            this.selectPanel.visible = !1,
            this.scroller_item.viewport = this.list_viewport,
            this.list_viewport.itemRenderer = t.PetbookAttItemRender,
            this._ary = new eui.ArrayCollection,
            this.scroller_item_select.viewport = this.list_viewport_select,
            this.list_viewport_select.itemRenderer = t.PetbookAttSelectItemRender,
            this._ary_select = new eui.ArrayCollection,
            this.list_viewport.dataProvider = this._ary,
            this.list_viewport_select.dataProvider = this._ary_select,
            this.initAllType(),
            this.addEvent()
        },
        i.prototype.itemClickHandle = function(t) {
            this.selectType = t.data,
            this.selectPanel.visible = !1
        },
        i.prototype.initAllType = function() {
            var t = this;
            this._singleArr = [],
            this._doubleArr = [],
            SkillXMLInfo.getAllTypes().map(function(e, i, n) {
                1 == SkillXMLInfo.getTypeKind(e) ? t._singleArr.push(e) : t._doubleArr.push(e)
            }),
            this.allId = this._singleArr.concat(this._doubleArr),
            this.selectType = this._singleArr[0],
            -1 != this.petid && (this.selectType = parseInt(PetXMLInfo.getType(this.petid)))
        },
        Object.defineProperty(i.prototype, "selectType", {
            get: function() {
                return this._selectType
            },
            set: function(t) {
                this._selectType = t,
                this.attackType = 0,
                this.rb_atk.group.selectedValue = 1,
                this.icon.source = ClientConfig.getpettypeticon(String(this.selectType)),
                this.typeName.text = SkillXMLInfo.petTypeNameCN(this.selectType)
            },
            enumerable: !0,
            configurable: !0
        }),
        i.prototype.destroy = function() {
            this.removeEvent(),
            e.prototype.destroy.call(this)
        },
        i.prototype.addEvent = function() {
            EventManager.addEventListener("event_petbook_Att_selected", this.itemClickHandle, this),
            ImageButtonUtil.add(this.closeBtn, this.onTouchTapImageButton, this),
            ImageButtonUtil.add(this.grpAttr, this.onTouchTapImageButton, this),
            this.rb_atk.group.addEventListener(egret.Event.CHANGE, this.changeHandle, this),
            this.rb_single.group.addEventListener(egret.Event.CHANGE, this.changeHandle1, this)
        },
        i.prototype.changeHandle = function(t) {
            this.attackType = this.rb_atk.group.selectedValue - 1
        },
        i.prototype.changeHandle1 = function(t) {
            var e = this._singleArr;
            1 == this.rb_single.group.selectedValue ? e = this._singleArr.concat() : 2 == this.rb_single.group.selectedValue && (e = this._doubleArr.concat()),
            this.updatelistSelect(e)
        },
        i.prototype.removeEvent = function() {
            EventManager.removeEventListener("event_petbook_Att_selected", this.itemClickHandle, this),
            this.rb_single.group.removeEventListener(egret.Event.CHANGE, this.changeHandle1, this),
            this.rb_atk.group.removeEventListener(egret.Event.CHANGE, this.changeHandle, this),
            ImageButtonUtil.removeAll(this)
        },
        i.prototype.onTouchTapImageButton = function(t) {
            var e = this;
            switch (t.target) {
            case this.closeBtn:
                this.hide(),
                this.dispatchEventWith("event_close_panel");
                break;
            case this.grpAttr:
                var i = {
                    callBack: function(t, i) {
                        e.selectType = i
                    },
                    caller: this,
                    selectId: this.selectType,
                    unAutoClose: !1,
                    viewType: 2,
                    relativeSet: {
                        srcWorldPos: this.grpAttr.localToGlobal(),
                        dir: "left-top",
                        rx: -150,
                        ry: 30
                    }
                };
                ModuleManager.showModule("petChooseAttributePanel", ["pet_choose_attribute_panel"], i, "", AppDoStyle.NULL)
            }
        },
        i.prototype.updatelist = function(t) {
            this._ary.replaceAll(t)
        },
        i.prototype.updatelistSelect = function(t) {
            this._ary_select.replaceAll(t)
        },
        Object.defineProperty(i.prototype, "attackType", {
            get: function() {
                return this._attackType
            },
            set: function(t) {
                this._attackType = t,
                this.allId = this._singleArr.concat(this._doubleArr);
                for (var e, i, n, o, r = [], s = 0; s < this.allId.length; s++) i = this.allId[s],
                e = SkillXMLInfo.petTypeNameEN(this.selectType).split("_"),
                n = SkillXMLInfo.petTypeNameEN(i).split("_"),
                o = 0 == this.attackType ? TypeXMLInfo.getRelationsPow(e, n) : TypeXMLInfo.getRelationsPow(n, e),
                1 == o ? (this.allId.splice(s, 1), s--) : r.push({
                    id: i,
                    pow: o
                });
                this.scroller_item.visible = 8 != this.selectType,
                this.txt_None.visible = 8 == this.selectType,
                r.sort(this.sortFun),
                this.updatelist(r)
            },
            enumerable: !0,
            configurable: !0
        }),
        i.prototype.sortFun = function(t, e) {
            var i = t.pow,
            n = e.pow;
            if (i > n) return - 1;
            if (n > i) return 1;
            var o = SkillXMLInfo.getTypeKind(t.id),
            r = SkillXMLInfo.getTypeKind(e.id);
            return o > r ? 1 : r > o ? -1 : 0
        },
        i
    } (PopView);
    t.PetbookAttPopPanel = e,
    __reflect(e.prototype, "petbookAttRelationShip.PetbookAttPopPanel")
} (petbookAttRelationShip || (petbookAttRelationShip = {}));
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
petbookAttRelationShip; !
function(t) {
    var e = function(e) {
        function i(t) {
            var i = e.call(this, t) || this;
            return i.petid = -1,
            t && (i.petid = t),
            i.openPanel(),
            i
        }
        return __extends(i, e),
        i.prototype.openPanel = function() {
            egret.registerClass;
            egret.getDefinitionByName("petbookAttRelationShip.PetbookAttPopPanel");
            try {
                this._view = new t.PetbookAttPopPanel( - 1 == this.petid ? null: this.petid),
                this._view.addEventListener(PopView.EVENT_DESTROY, this._onClosePanelEvent, this);
                var e = PopViewManager.createDefaultStyleObject();
                e.maskShapeStyle.maskAlpha = 0,
                e.caller = this._view,
                PopViewManager.getInstance().openView(this._view, e, -1 == this.petid ? null: this.petid)
            } catch(i) {
                console.error(i)
            }
        },
        i.prototype._onClosePanelEvent = function(t) {
            this.onClose()
        },
        i.prototype.destroy = function() {
            this._view.removeEventListener(PopView.EVENT_DESTROY, this._onClosePanelEvent, this),
            this._view = null,
            e.prototype.destroy.call(this)
        },
        i
    } (BaseModule);
    t.PetbookAttRelationShip = e,
    __reflect(e.prototype, "petbookAttRelationShip.PetbookAttRelationShip")
} (petbookAttRelationShip || (petbookAttRelationShip = {}));
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
petbookAttRelationShip; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.skinName = PetbookattselectitemrenderSkin,
            e
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this),
            this.flag.visible = !1,
            this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this),
            DisplayUtil.cacheAsBitmapDisplayObj(this),
            this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touched, this)
        },
        e.prototype.touched = function(t) {
            EventManager.dispatchEvent(new egret.Event("event_petbook_Att_selected", !1, !1, this.data))
        },
        e.prototype.dataChanged = function() {
            this.data && (this.icon.source = ClientConfig.getpettypeticon(String(this.data)))
        },
        e.prototype.destroy = function() {
            ImageButtonUtil.removeAll(this),
            this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.touched, this),
            this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this),
            this.icon.source = null
        },
        e
    } (eui.ItemRenderer);
    t.PetbookAttSelectItemRender = e,
    __reflect(e.prototype, "petbookAttRelationShip.PetbookAttSelectItemRender")
} (petbookAttRelationShip || (petbookAttRelationShip = {}));
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
generateEUI.paths["resource/eui_skins/PetbookattitemrenderSkin.exml"] = window.PetbookattitemrenderSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "icon", "box3", "box1", "box2", "txt"],
        this.height = 59,
        this.width = 50,
        this.elementsContent = [this.bg_i(), this.icon_i(), this.box3_i(), this.box1_i(), this.box2_i(), this.txt_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.source = "PetbookAttSelectItemRender_bg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.icon_i = function() {
        var t = new eui.Image;
        return this.icon = t,
        t.height = 30,
        t.source = "",
        t.width = 30,
        t.x = 10,
        t.y = 8,
        t
    },
    i.box3_i = function() {
        var t = new eui.Image;
        return this.box3 = t,
        t.source = "PetbookAttItemRender_box3_png",
        t.x = 0,
        t.y = 44,
        t
    },
    i.box1_i = function() {
        var t = new eui.Image;
        return this.box1 = t,
        t.source = "PetbookAttItemRender_box1_png",
        t.x = 0,
        t.y = 44,
        t
    },
    i.box2_i = function() {
        var t = new eui.Image;
        return this.box2 = t,
        t.source = "PetbookAttItemRender_box2_png",
        t.x = 0,
        t.y = 44,
        t
    },
    i.txt_i = function() {
        var t = new eui.Label;
        return this.txt = t,
        t.fontFamily = "MFShangHei",
        t.height = 14,
        t.size = 14,
        t.text = "0000",
        t.textAlign = "center",
        t.textColor = 16777215,
        t.width = 50,
        t.x = 0,
        t.y = 44,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/PetbookattrelationshipSkin.exml"] = window.PetbookattrelationshipSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["title", "bg", "closeBtn", "rb_defence", "rb_atk", "rbg", "bg1", "bg2", "allBtn", "typeName", "icon", "grpAttr", "tip", "txt_None", "list_viewport", "scroller_item", "bg3", "d2", "d1", "rb_single", "rb_double", "rbg1", "list_viewport_select", "scroller_item_select", "selectPanel"],
        this.height = 431,
        this.width = 753,
        this.elementsContent = [this.bg_i(), this.closeBtn_i(), this.rbg_i(), this.bg1_i(), this.grpAttr_i(), this.tip_i(), this.txt_None_i(), this.scroller_item_i(), this.selectPanel_i()]
    }
    __extends(e, t);
    var i = function(t) {
        function e() {
            t.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "PetbookAttRelationShipdefence_up_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "PetbookAttRelationShipdefence_down_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t
        },
        e
    } (eui.Skin),
    n = function(t) {
        function e() {
            t.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "PetbookAttRelationShipatk_up_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "PetbookAttRelationShipatk_down_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t
        },
        e
    } (eui.Skin),
    o = function(t) {
        function e() {
            t.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "PetbookAttRelationShipsingle_down_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "PetbookAttRelationShipsingle_up_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t
        },
        e
    } (eui.Skin),
    r = function(t) {
        function e() {
            t.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "PetbookAttRelationShipdouble_down_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "PetbookAttRelationShipdouble_up_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t
        },
        e
    } (eui.Skin),
    s = e.prototype;
    return s.bg_i = function() {
        var t = new eui.Group;
        return this.bg = t,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image1_i(), this._Image2_i(), this.title_i(), this._Image3_i(), this._Image4_i()],
        t
    },
    s._Image1_i = function() {
        var t = new eui.Image;
        return t.fillMode = "scale",
        t.height = 430,
        t.scale9Grid = new egret.Rectangle(8, 8, 9, 9),
        t.source = "common_s9_pop_bg4_png",
        t.visible = !0,
        t.width = 753,
        t.x = 0,
        t.y = 1,
        t
    },
    s._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "common_pop_up_bg_big_png",
        t.x = 0,
        t.y = 0,
        t
    },
    s.title_i = function() {
        var t = new eui.Image;
        return this.title = t,
        t.source = "PetbookAttRelationShip_ShuXingKeZhiZongLanBiao_png",
        t.x = 36,
        t.y = 2,
        t
    },
    s._Image3_i = function() {
        var t = new eui.Image;
        return t.height = 188,
        t.source = "PetbookAttRelationShip_img_column_png",
        t.visible = !0,
        t.width = 1,
        t.x = 0,
        t.y = 236,
        t
    },
    s._Image4_i = function() {
        var t = new eui.Image;
        return t.height = 1,
        t.source = "PetbookAttRelationShip_img_line_png",
        t.width = 189,
        t.x = 0,
        t.y = 424,
        t
    },
    s.closeBtn_i = function() {
        var t = new eui.Image;
        return this.closeBtn = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "common_pop_btn_close_png",
        t.x = 712,
        t.y = 1,
        t
    },
    s.rbg_i = function() {
        var t = new eui.Group;
        return this.rbg = t,
        t.name = "r",
        t.x = 25,
        t.y = 45,
        t.elementsContent = [this.rb_defence_i(), this.rb_atk_i()],
        t
    },
    s.rb_defence_i = function() {
        var t = new eui.RadioButton;
        return this.rb_defence = t,
        t.groupName = "r",
        t.value = "2",
        t.x = 100,
        t.y = 0,
        t.skinName = i,
        t
    },
    s.rb_atk_i = function() {
        var t = new eui.RadioButton;
        return this.rb_atk = t,
        t.groupName = "r",
        t.value = "1",
        t.skinName = n,
        t
    },
    s.bg1_i = function() {
        var t = new eui.Image;
        return this.bg1 = t,
        t.source = "PetbookAttRelationShip_bg1_png",
        t.x = 24,
        t.y = 79,
        t
    },
    s.grpAttr_i = function() {
        var t = new eui.Group;
        return this.grpAttr = t,
        t.touchChildren = !1,
        t.x = 596,
        t.y = 79,
        t.elementsContent = [this.bg2_i(), this.allBtn_i(), this.typeName_i(), this.icon_i()],
        t
    },
    s.bg2_i = function() {
        var t = new eui.Image;
        return this.bg2 = t,
        t.source = "PetbookAttRelationShip_bg2_png",
        t.x = 0,
        t.y = 0,
        t
    },
    s.allBtn_i = function() {
        var t = new eui.Image;
        return this.allBtn = t,
        t.horizontalCenter = 51,
        t.source = "PetbookAttRelationShip_allBtn_png",
        t.verticalCenter = .5,
        t
    },
    s.typeName_i = function() {
        var t = new eui.Label;
        return this.typeName = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "光飞行",
        t.textColor = 11586047,
        t.x = 28,
        t.y = 8,
        t
    },
    s.icon_i = function() {
        var t = new eui.Image;
        return this.icon = t,
        t.height = 20,
        t.source = "",
        t.width = 20,
        t.x = 5,
        t.y = 6,
        t
    },
    s.tip_i = function() {
        var t = new eui.Label;
        return this.tip = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "红色是被克制，蓝色是微伤害，灰色无伤害：数字代表被伤害倍数",
        t.textColor = 13820671,
        t.x = 40,
        t.y = 89,
        t
    },
    s.txt_None_i = function() {
        var t = new eui.Image;
        return this.txt_None = t,
        t.height = 120,
        t.source = "PetbookAttSelectItemRender_txt_None_png",
        t.width = 188,
        t.x = 284,
        t.y = 175,
        t
    },
    s.scroller_item_i = function() {
        var t = new eui.Scroller;
        return this.scroller_item = t,
        t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.height = 290,
        t.scrollPolicyH = "off",
        t.width = 675,
        t.x = 38,
        t.y = 117,
        t.viewport = this._Group1_i(),
        t
    },
    s._Group1_i = function() {
        var t = new eui.Group;
        return t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.height = 294,
        t.width = 630,
        t.elementsContent = [this.list_viewport_i()],
        t
    },
    s.list_viewport_i = function() {
        var t = new eui.List;
        return this.list_viewport = t,
        t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.height = 294,
        t.width = 631,
        t.x = 0,
        t.y = 0,
        t.layout = this._TileLayout1_i(),
        t
    },
    s._TileLayout1_i = function() {
        var t = new eui.TileLayout;
        return t.columnAlign = "justifyUsingGap",
        t.horizontalGap = 8,
        t.orientation = "rows",
        t.requestedColumnCount = 11,
        t.verticalGap = 8,
        t
    },
    s.selectPanel_i = function() {
        var t = new eui.Group;
        return this.selectPanel = t,
        t.x = 413,
        t.y = 112,
        t.elementsContent = [this.bg3_i(), this.d2_i(), this.d1_i(), this.rbg1_i(), this.scroller_item_select_i()],
        t
    },
    s.bg3_i = function() {
        var t = new eui.Image;
        return this.bg3 = t,
        t.source = "PetbookAttRelationShip_bg3_png",
        t.x = 0,
        t.y = 0,
        t
    },
    s.d2_i = function() {
        var t = new eui.Image;
        return this.d2 = t,
        t.source = "",
        t.x = 17,
        t.y = 79,
        t
    },
    s.d1_i = function() {
        var t = new eui.Image;
        return this.d1 = t,
        t.source = "",
        t.x = 77,
        t.y = 79,
        t
    },
    s.rbg1_i = function() {
        var t = new eui.Group;
        return this.rbg1 = t,
        t.name = "s",
        t.x = 47,
        t.y = 20,
        t.elementsContent = [this.rb_single_i(), this.rb_double_i()],
        t
    },
    s.rb_single_i = function() {
        var t = new eui.RadioButton;
        return this.rb_single = t,
        t.groupName = "s",
        t.value = "1",
        t.x = -6,
        t.y = -6,
        t.skinName = o,
        t
    },
    s.rb_double_i = function() {
        var t = new eui.RadioButton;
        return this.rb_double = t,
        t.groupName = "s",
        t.value = "2",
        t.x = 130,
        t.y = -6,
        t.skinName = r,
        t
    },
    s.scroller_item_select_i = function() {
        var t = new eui.Scroller;
        return this.scroller_item_select = t,
        t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.height = 203,
        t.scaleX = 1,
        t.scaleY = 1,
        t.scrollPolicyH = "off",
        t.width = 306,
        t.x = 12,
        t.y = 67,
        t.viewport = this._Group2_i(),
        t
    },
    s._Group2_i = function() {
        var t = new eui.Group;
        return t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.height = 203,
        t.width = 306,
        t.elementsContent = [this.list_viewport_select_i()],
        t
    },
    s.list_viewport_select_i = function() {
        var t = new eui.List;
        return this.list_viewport_select = t,
        t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.height = 203,
        t.width = 306,
        t.x = 0,
        t.y = 0,
        t.layout = this._TileLayout2_i(),
        t
    },
    s._TileLayout2_i = function() {
        var t = new eui.TileLayout;
        return t.horizontalGap = 10,
        t.orientation = "rows",
        t.verticalGap = 10,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/PetbookattselectitemrenderSkin.exml"] = window.PetbookattselectitemrenderSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "flag", "icon"],
        this.height = 50,
        this.width = 50,
        this.elementsContent = [this.bg_i(), this.flag_i(), this.icon_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.source = "PetbookAttSelectItemRender_bg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.flag_i = function() {
        var t = new eui.Image;
        return this.flag = t,
        t.height = 50,
        t.source = "PetbookAttSelectItemRender_flag_png",
        t.width = 50,
        t.x = 0,
        t.y = 0,
        t
    },
    i.icon_i = function() {
        var t = new eui.Image;
        return this.icon = t,
        t.height = 30,
        t.source = "",
        t.width = 30,
        t.x = 10,
        t.y = 10,
        t
    },
    e
} (eui.Skin);