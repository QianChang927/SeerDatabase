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
petChooseAttributePanel; !
function(t) {
    var e = function(e) {
        function i(i) {
            var n = e.call(this, i) || this,
            s = i;
            if (s.viewType) switch (s.viewType) {
            case 1:
                n._view = new t.View;
                break;
            case 2:
                n._view = new t.newView
            } else n._view = new t.View;
            var r = PopViewManager.createDefaultStyleObject();
            return r.caller = n._view,
            r.maskShapeStyle.maskAlpha = 0,
            r.clickMaskHandler = n._view.clickMaskHandler,
            r.effStyle.relativeToPoint = s.relativeSet,
            n._view.addEventListener("event_close_panel", n._onCloseAll, n),
            PopViewManager.getInstance().openView(n._view, r, s),
            n
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this)
        },
        i.prototype._onCloseAll = function() {
            this._view && this._view.hide(),
            EventManager.dispatchEventWith("choosePanelClose"),
            ModuleManager.hideModule(this, !0)
        },
        i.prototype.destroy = function() {
            this._view = null,
            e.prototype.destroy.call(this)
        },
        i
    } (BaseModule);
    t.PetChooseAttributePanel = e,
    __reflect(e.prototype, "petChooseAttributePanel.PetChooseAttributePanel")
} (petChooseAttributePanel || (petChooseAttributePanel = {}));
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
petChooseAttributePanel; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.skinName = t.ItemAttributeSkin,
            i.cacheAsBitmap = !0,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this)
        },
        Object.defineProperty(i.prototype, "selected", {
            set: function(t) {
                this.img_select.visible = t,
                egret.superSetter(i, this, "selected", t)
            },
            enumerable: !0,
            configurable: !0
        }),
        i.prototype.dataChanged = function() {
            return this.mydata = this.data,
            null === this.data ? (this.img_icon.visible = !1, this.img_cancel.visible = !1, this.touchEnabled = !1, void(this.touchChildren = !1)) : (this.touchEnabled = !0, this.touchChildren = !0, this.img_icon.visible = this.mydata > 0, this.img_cancel.visible = !this.img_icon.visible, void(this.img_icon.visible ? (this.img_icon.source = ClientConfig.getpettypeticon(this.mydata + ""), this.guang.text = SkillXMLInfo.petTypeNameCN(this.mydata)) : this.guang.text = "所有"))
        },
        i.prototype.destroy = function() {
            this.mydata = null,
            this.data = null,
            this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this)
        },
        i
    } (eui.ItemRenderer);
    t.AttributeItemRender = e,
    __reflect(e.prototype, "petChooseAttributePanel.AttributeItemRender")
} (petChooseAttributePanel || (petChooseAttributePanel = {}));
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
petChooseAttributePanel; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.skinName = t.newItemAttributeSkin,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this)
        },
        Object.defineProperty(i.prototype, "selected", {
            set: function(e) {
                this.img_select.visible = e,
                egret.superSetter(t.AttributeItemRender, this, "selected", e)
            },
            enumerable: !0,
            configurable: !0
        }),
        i.prototype.dataChanged = function() {
            return this.mydata = this.data,
            null === this.data ? (this.img_icon.visible = !1, this.touchEnabled = !1, void(this.touchChildren = !1)) : (this.touchEnabled = !0, this.touchChildren = !0, this.img_icon.visible = this.mydata > 0, void(this.img_icon.visible && (this.guang.text = SkillXMLInfo.petTypeNameCN(this.mydata), this.img_icon.source = ClientConfig.getpettypeticon(this.mydata + ""))))
        },
        i.prototype.destroy = function() {
            this.mydata = null,
            this.data = null,
            this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this)
        },
        i
    } (eui.ItemRenderer);
    t.NewAttributeItemRender = e,
    __reflect(e.prototype, "petChooseAttributePanel.NewAttributeItemRender")
} (petChooseAttributePanel || (petChooseAttributePanel = {}));
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
petChooseAttributePanel; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i._attriType = 1,
            i.skinName = t.newViewSkin,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this._radiGrpAttr = this.rb_double.group,
            this.scl_items.viewport = this.scl_items_viewport,
            this.scl_items_viewport.itemRenderer = t.NewAttributeItemRender,
            this._arrycollertion = new eui.ArrayCollection,
            this.scl_items_viewport.dataProvider = this._arrycollertion
        },
        i.prototype.initEvents = function() {
            this._radiGrpAttr.addEventListener(egret.Event.CHANGE, this.changeAttrType, this),
            this.scl_items_viewport.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.onSelectPet, this),
            this.scl_items.addEventListener(eui.UIEvent.CHANGE_START, this.onScrollerStart, this),
            this.scl_items.addEventListener(eui.UIEvent.CHANGE_END, this.onScrollerEnd, this)
        },
        i.prototype.removeEvents = function() {
            ImageButtonUtil.removeAll(this),
            this._radiGrpAttr.removeEventListener(egret.Event.CHANGE, this.changeAttrType, this),
            this.scl_items_viewport.removeEventListener(eui.ItemTapEvent.ITEM_TAP, this.onSelectPet, this),
            this.scl_items.removeEventListener(eui.UIEvent.CHANGE_START, this.onScrollerStart, this),
            this.scl_items.removeEventListener(eui.UIEvent.CHANGE_END, this.onScrollerEnd, this)
        },
        i.prototype._parseData = function() {
            this._openParams = this._data,
            this._initSetView()
        },
        i.prototype.changeAttrType = function(t) {
            this._attriType = ~~this._radiGrpAttr.selectedValue,
            this._upDateView()
        },
        i.prototype._initSetView = function() {
            var t = SkillXMLInfo.getAllTypes();
            if (this._attriType = 1, this._openParams.selectId > 0) for (var e = 0; e < t.length; e++) if (t[e] === this._openParams.selectId) {
                this._attriType = ~~SkillXMLInfo.getTypeKind(t[e]);
                break
            }
            this._radiGrpAttr.selectedValue = this._attriType
        },
        i.prototype.onSelectPet = function(t) {
            if (null !== t.item && void 0 !== t.item) {
                var e = t.item,
                i = this._openParams.callBack,
                n = this._openParams.caller;
                this._openParams.unAutoClose ? i.apply(n, [this._attriType, e]) : (this.clickMaskHandler(), i.apply(n, [this._attriType, e]))
            }
        },
        i.prototype._upDateView = function() {
            this.resetScroll();
            for (var t, e = SkillXMLInfo.getAllTypes(), i = [], n = 0; n < e.length; n++) SkillXMLInfo.getTypeKind(e[n]) == this._attriType && (i.push(e[n]), e[n] === this._openParams.selectId && (t = i.length - 1));
            this.scl_items_viewport.selectedIndex = t,
            this._arrycollertion.replaceAll(i),
            this.validateNow(),
            this.onScrollerEnd()
        },
        i.prototype.resetScroll = function() {
            this.scl_items.stopAnimation(),
            this.scl_items.viewport.scrollV = 0,
            this.onScrollerEnd()
        },
        i.prototype.onScrollerStart = function() {
            this.btndown.visible = !1
        },
        i.prototype.onScrollerEnd = function() {
            this.scl_items.viewport.scrollH;
            var t = this.scl_items.viewport.contentHeight - this.scl_items.height;
            this.btndown.visible = this.scl_items.viewport.scrollV < t
        },
        i.prototype.clickMaskHandler = function() {
            this.dispatchEventWith("event_close_panel")
        },
        i.prototype.destroy = function() {
            e.prototype.destroy.call(this)
        },
        i
    } (PopView);
    t.newView = e,
    __reflect(e.prototype, "petChooseAttributePanel.newView")
} (petChooseAttributePanel || (petChooseAttributePanel = {}));
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
petChooseAttributePanel; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t._attriType = 1,
            t.skinName = ChoosePetAttributeSkin,
            t
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this._radiGrpAttr = this.rb_double.group,
            this.scl_items.viewport = this.scl_items_viewport,
            this.scl_items_viewport.itemRenderer = t.AttributeItemRender,
            this._arrycollertion = new eui.ArrayCollection,
            this.scl_items_viewport.dataProvider = this._arrycollertion
        },
        i.prototype.initEvents = function() {
            this._radiGrpAttr.addEventListener(egret.Event.CHANGE, this.changeAttrType, this),
            this.scl_items_viewport.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.onSelectPet, this),
            this.scl_items.addEventListener(eui.UIEvent.CHANGE_START, this.onScrollerStart, this),
            this.scl_items.addEventListener(eui.UIEvent.CHANGE_END, this.onScrollerEnd, this)
        },
        i.prototype._parseData = function() {
            this._openParams = this._data,
            this._initSetView(),
            this._openParams.filterSkillStone && (this.rb_single.visible = this.rb_double.visible = !1, this.scl_items.y -= 28, this.scl_items.height += 30)
        },
        i.prototype.removeEvents = function() {
            ImageButtonUtil.removeAll(this),
            this._radiGrpAttr.removeEventListener(egret.Event.CHANGE, this.changeAttrType, this),
            this.scl_items_viewport.removeEventListener(eui.ItemTapEvent.ITEM_TAP, this.onSelectPet, this),
            this.scl_items.removeEventListener(eui.UIEvent.CHANGE_START, this.onScrollerStart, this),
            this.scl_items.removeEventListener(eui.UIEvent.CHANGE_END, this.onScrollerEnd, this)
        },
        i.prototype.onScrollerStart = function() {
            this.btndown.visible = !1
        },
        i.prototype.onScrollerEnd = function() {
            var t = this.scl_items.viewport.contentHeight - this.scl_items.height;
            this.btndown.visible = this.scl_items.viewport.scrollV < t
        },
        i.prototype.changeAttrType = function(t) {
            this._attriType = ~~this._radiGrpAttr.selectedValue,
            this._upDateView()
        },
        i.prototype._initSetView = function() {
            var t = SkillXMLInfo.getAllTypes();
            if (this._attriType = 1, this._openParams.selectId > 0) for (var e = 0; e < t.length; e++) if (t[e] === this._openParams.selectId) {
                this._attriType = ~~SkillXMLInfo.getTypeKind(t[e]);
                break
            }
            this._radiGrpAttr.selectedValue = this._attriType
        },
        i.prototype.onSelectPet = function(t) {
            if (null !== t.item && void 0 !== t.item) {
                var e = t.item,
                i = this._openParams.callBack,
                n = this._openParams.caller;
                this._openParams.unAutoClose ? i.apply(n, [this._attriType, e]) : (this.clickMaskHandler(), i.apply(n, [this._attriType, e]))
            }
        },
        i.prototype._upDateView = function() {
            this.resetScroll();
            var t, e = SkillXMLInfo.getAllTypes(),
            i = [];
            i.push(0);
            for (var n = 0; n < e.length; n++) SkillXMLInfo.getTypeKind(e[n]) == this._attriType && (i.push(e[n]), e[n] === this._openParams.selectId && (t = i.length - 1));
            this.scl_items_viewport.selectedIndex = t,
            this._arrycollertion.replaceAll(i)
        },
        i.prototype.resetScroll = function() {
            this.scl_items.stopAnimation(),
            this.scl_items.viewport.scrollV = 0
        },
        i.prototype.clickMaskHandler = function() {
            this.dispatchEventWith("event_close_panel")
        },
        i.prototype.destroy = function() {
            e.prototype.destroy.call(this)
        },
        i
    } (PopView);
    t.View = e,
    __reflect(e.prototype, "petChooseAttributePanel.View")
} (petChooseAttributePanel || (petChooseAttributePanel = {})),
window.petChooseAttributePanel = window.petChooseAttributePanel || {};
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
generateEUI.paths["resource/eui_skins/ItemAttributeSkin.exml"] = window.petChooseAttributePanel.ItemAttributeSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["img_select", "img_cancel", "img_icon"],
        this.height = 50,
        this.width = 50,
        this.elementsContent = [this._Image1_i(), this.img_select_i(), this.img_cancel_i(), this.img_icon_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 50,
        t.source = "common_icon_bg_style_1_png",
        t.width = 50,
        t.x = 0,
        t.y = 0,
        t
    },
    i.img_select_i = function() {
        var t = new eui.Image;
        return this.img_select = t,
        t.height = 62,
        t.source = "pet_choose_attribute_panel_img_select_png",
        t.width = 62,
        t.x = -6,
        t.y = -6,
        t
    },
    i.img_cancel_i = function() {
        var t = new eui.Image;
        return this.img_cancel = t,
        t.horizontalCenter = 0,
        t.source = "pet_choose_attribute_panel_img_cancel_png",
        t.verticalCenter = 0,
        t
    },
    i.img_icon_i = function() {
        var t = new eui.Image;
        return this.img_icon = t,
        t.horizontalCenter = 0,
        t.source = "",
        t.verticalCenter = 0,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/render/ItemAttributeSkin.exml"] = window.petChooseAttributePanel.ItemAttributeSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["img_select", "img_cancel", "img_icon", "guang"],
        this.height = 69,
        this.width = 56,
        this.elementsContent = [this._Image1_i(), this.img_select_i(), this.img_cancel_i(), this.img_icon_i(), this.guang_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 49,
        t.source = "pet_choose_attribute_panel_kuang_png",
        t.visible = !0,
        t.width = 49,
        t.x = 4,
        t.y = 4,
        t
    },
    i.img_select_i = function() {
        var t = new eui.Image;
        return this.img_select = t,
        t.height = 56,
        t.source = "new_view_img_selected_png",
        t.visible = !0,
        t.width = 56,
        t.x = 0,
        t.y = 0,
        t
    },
    i.img_cancel_i = function() {
        var t = new eui.Image;
        return this.img_cancel = t,
        t.source = "pet_choose_attribute_panel_img_cancel_png",
        t.x = 15,
        t.y = 21,
        t
    },
    i.img_icon_i = function() {
        var t = new eui.Image;
        return this.img_icon = t,
        t.height = 30,
        t.horizontalCenter = 0,
        t.visible = !0,
        t.width = 30,
        t.y = 13,
        t
    },
    i.guang_i = function() {
        var t = new eui.Label;
        return this.guang = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = 0,
        t.size = 12,
        t.text = "光",
        t.textColor = 11126783,
        t.visible = !0,
        t.y = 56,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/render/newItemAttributeSkin.exml"] = window.petChooseAttributePanel.newItemAttributeSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["img_tipkuang", "guang", "img_icon", "img_select"],
        this.height = 69,
        this.width = 56,
        this.elementsContent = [this.img_tipkuang_i(), this.guang_i(), this.img_icon_i(), this.img_select_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.img_tipkuang_i = function() {
        var t = new eui.Image;
        return this.img_tipkuang = t,
        t.height = 49,
        t.source = "pet_choose_attribute_panel_kuang_png",
        t.visible = !0,
        t.width = 49,
        t.x = 4,
        t.y = 4,
        t
    },
    i.guang_i = function() {
        var t = new eui.Label;
        return this.guang = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = 0,
        t.size = 12,
        t.text = "光",
        t.textColor = 11126783,
        t.visible = !0,
        t.y = 56,
        t
    },
    i.img_icon_i = function() {
        var t = new eui.Image;
        return this.img_icon = t,
        t.height = 30,
        t.horizontalCenter = 0,
        t.source = "new_view_icon_dj_kb_png",
        t.visible = !0,
        t.width = 30,
        t.y = 13,
        t
    },
    i.img_select_i = function() {
        var t = new eui.Image;
        return this.img_select = t,
        t.height = 56,
        t.source = "new_view_img_selected_png",
        t.visible = !0,
        t.width = 56,
        t.x = 0,
        t.y = 0,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/view/ChoosePetAttributeSkin.exml"] = window.ChoosePetAttributeSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["select_attribute_bg", "rb_single", "rb_double", "scl_items_viewport", "scl_items", "btndown"],
        this.height = 267,
        this.width = 458,
        this.elementsContent = [this.select_attribute_bg_i(), this.rb_single_i(), this.rb_double_i(), this.scl_items_i(), this.btndown_i()]
    }
    __extends(e, t);
    var i = function(t) {
        function e() {
            t.call(this),
            this.skinParts = ["labelDisplay"],
            this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "pet_choose_attribute_panel_single_btn_up_png")]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t.percentHeight = 100,
            t.source = "pet_choose_attribute_panel_single_btn_down_png",
            t.percentWidth = 100,
            t
        },
        i.labelDisplay_i = function() {
            var t = new eui.Label;
            return this.labelDisplay = t,
            t.horizontalCenter = 0,
            t.verticalCenter = 0,
            t
        },
        e
    } (eui.Skin),
    n = function(t) {
        function e() {
            t.call(this),
            this.skinParts = ["labelDisplay"],
            this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "pet_choose_attribute_panel_double_btn_up_png")]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t.percentHeight = 100,
            t.source = "pet_choose_attribute_panel_double_btn_down_png",
            t.percentWidth = 100,
            t
        },
        i.labelDisplay_i = function() {
            var t = new eui.Label;
            return this.labelDisplay = t,
            t.horizontalCenter = 0,
            t.verticalCenter = 0,
            t
        },
        e
    } (eui.Skin),
    s = e.prototype;
    return s.select_attribute_bg_i = function() {
        var t = new eui.Image;
        return this.select_attribute_bg = t,
        t.percentHeight = 100,
        t.scale9Grid = new egret.Rectangle(7, 7, 6, 6),
        t.source = "pet_choose_attribute_panel_select_attribute_new_bg_s9_png",
        t.percentWidth = 100,
        t.x = 0,
        t.y = 0,
        t
    },
    s.rb_single_i = function() {
        var t = new eui.RadioButton;
        return this.rb_single = t,
        t.groupName = "radioGrp_attr",
        t.label = "",
        t.value = "1",
        t.x = 115,
        t.y = 16,
        t.skinName = i,
        t
    },
    s.rb_double_i = function() {
        var t = new eui.RadioButton;
        return this.rb_double = t,
        t.groupName = "radioGrp_attr",
        t.label = "",
        t.value = "2",
        t.x = 255,
        t.y = 16,
        t.skinName = n,
        t
    },
    s.scl_items_i = function() {
        var t = new eui.Scroller;
        return this.scl_items = t,
        t.height = 177,
        t.scrollPolicyH = "off",
        t.scrollPolicyV = "on",
        t.width = 378,
        t.x = 39,
        t.y = 58,
        t.viewport = this.scl_items_viewport_i(),
        t
    },
    s.scl_items_viewport_i = function() {
        var t = new eui.List;
        return this.scl_items_viewport = t,
        t.x = 0,
        t.y = 0,
        t.layout = this._TileLayout1_i(),
        t
    },
    s._TileLayout1_i = function() {
        var t = new eui.TileLayout;
        return t.columnWidth = 62,
        t.horizontalAlign = "contentJustify",
        t.horizontalGap = 1,
        t.orientation = "rows",
        t.verticalGap = 3,
        t
    },
    s.btndown_i = function() {
        var t = new eui.Image;
        return this.btndown = t,
        t.source = "new_view_btndown_png",
        t.x = 203,
        t.y = 235,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/view/newViewSkin.exml"] = window.petChooseAttributePanel.newViewSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["select_attribute_bg", "rb_single", "rb_double", "scl_items_viewport", "scl_items", "btndown"],
        this.height = 267,
        this.width = 458,
        this.elementsContent = [this.select_attribute_bg_i(), this.rb_single_i(), this.rb_double_i(), this.scl_items_i(), this.btndown_i()]
    }
    __extends(e, t);
    var i = function(t) {
        function e() {
            t.call(this),
            this.skinParts = ["labelDisplay"],
            this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "pet_choose_attribute_panel_single_btn_up_png")]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t.percentHeight = 100,
            t.source = "pet_choose_attribute_panel_single_btn_down_png",
            t.percentWidth = 100,
            t
        },
        i.labelDisplay_i = function() {
            var t = new eui.Label;
            return this.labelDisplay = t,
            t.horizontalCenter = 0,
            t.verticalCenter = 0,
            t
        },
        e
    } (eui.Skin),
    n = function(t) {
        function e() {
            t.call(this),
            this.skinParts = ["labelDisplay"],
            this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "pet_choose_attribute_panel_double_btn_up_png")]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t.percentHeight = 100,
            t.source = "pet_choose_attribute_panel_double_btn_down_png",
            t.percentWidth = 100,
            t
        },
        i.labelDisplay_i = function() {
            var t = new eui.Label;
            return this.labelDisplay = t,
            t.horizontalCenter = 0,
            t.verticalCenter = 0,
            t
        },
        e
    } (eui.Skin),
    s = e.prototype;
    return s.select_attribute_bg_i = function() {
        var t = new eui.Image;
        return this.select_attribute_bg = t,
        t.percentHeight = 100,
        t.scale9Grid = new egret.Rectangle(7, 7, 6, 6),
        t.source = "pet_choose_attribute_panel_select_attribute_new_bg_s9_png",
        t.percentWidth = 100,
        t.x = 0,
        t.y = 0,
        t
    },
    s.rb_single_i = function() {
        var t = new eui.RadioButton;
        return this.rb_single = t,
        t.groupName = "radioGrp_attr",
        t.label = "",
        t.value = "1",
        t.x = 115,
        t.y = 16,
        t.skinName = i,
        t
    },
    s.rb_double_i = function() {
        var t = new eui.RadioButton;
        return this.rb_double = t,
        t.groupName = "radioGrp_attr",
        t.label = "",
        t.value = "2",
        t.x = 255,
        t.y = 16,
        t.skinName = n,
        t
    },
    s.scl_items_i = function() {
        var t = new eui.Scroller;
        return this.scl_items = t,
        t.height = 177,
        t.scrollPolicyH = "off",
        t.scrollPolicyV = "on",
        t.width = 378,
        t.x = 39,
        t.y = 58,
        t.viewport = this.scl_items_viewport_i(),
        t
    },
    s.scl_items_viewport_i = function() {
        var t = new eui.List;
        return this.scl_items_viewport = t,
        t.x = 0,
        t.y = 0,
        t.layout = this._TileLayout1_i(),
        t
    },
    s._TileLayout1_i = function() {
        var t = new eui.TileLayout;
        return t.columnWidth = 62,
        t.horizontalAlign = "contentJustify",
        t.horizontalGap = 1,
        t.orientation = "rows",
        t.verticalGap = 3,
        t
    },
    s.btndown_i = function() {
        var t = new eui.Image;
        return this.btndown = t,
        t.source = "new_view_btndown_png",
        t.x = 203,
        t.y = 235,
        t
    },
    e
} (eui.Skin);