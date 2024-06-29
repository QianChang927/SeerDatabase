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
baseMenuComponent; !
function(t) {
    t.childHeight = 42;
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t.skinName = BaseMenuComponentSkin,
            t
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this)
        },
        i.prototype.setData = function(t) {
            var e = this;
            this.info = t,
            this.initView(),
            EventManager.addEventListener(this.info.groupName + "Base_Menu_First_Node_Single_Select",
            function(t) {
                var i = t.data;
                e.selectedValue = i,
                EventManager.dispatchEventWith(BaseMenuEvent.BASE_MENU_SELECT_CHANGE_ + e.info.groupName, !1, i)
            },
            this),
            EventManager.addEventListener(this.info.groupName + "Base_Menu_Second_Node_Single_Select",
            function(t) {
                var i = t.data;
                e.selectedValue = i,
                EventManager.dispatchEventWith(BaseMenuEvent.BASE_MENU_SELECT_CHANGE_ + e.info.groupName, !1, i)
            },
            this)
        },
        i.prototype.initView = function() {
            var e = this;
            if (!this.info.root) return void console.error("数据错误,没有根数据!!!");
            this._list.itemRenderer = t.BaseMenuFirstNode,
            this._list.useVirtualLayout = !1;
            var i = this.info.root.map(function(t) {
                return {
                    node: t,
                    info: KTool.clone(e.info)
                }
            });
            this._list.dataProvider = new eui.ArrayCollection(i),
            this.defaultValue = Menu.getDefault(this.info),
            this.info.root.indexOf(this.defaultValue.first) < 0 || this.once(egret.Event.RENDER,
            function() {
                e._list.setSelectedIndex(e.info.root.indexOf(e.defaultValue.first)),
                e.info.adapter && (e.width += DeviceInfoManager.adapterOffSetX, e.bg.width = 231 > e.width ? 231 : e.width, e.bg.x = 153 - e.bg.width),
                e.info.data[e.defaultValue.first].child || EventManager.dispatchEventWith(e.info.groupName + "Base_Menu_First_Node_Single_Select", !1, e.defaultValue.first)
            },
            this)
        },
        i.prototype.updateView = function(t) {
            var e = this;
            if (!this.info.root) return void console.error("数据错误,没有根数据!!!"); + t || (t = "" + t),
            this.info["default"] = t;
            var i = this.info.root.map(function(t) {
                return {
                    node: t,
                    info: KTool.clone(e.info)
                }
            });
            this._list.dataProvider = new eui.ArrayCollection(i),
            this.defaultValue = Menu.getDefault(this.info),
            this.info.root.indexOf(this.defaultValue.first) < 0 || (this._list.setSelectedIndex(this.info.root.indexOf(this.defaultValue.first)), this.once(egret.Event.RENDER,
            function() {
                e.info.data[e.defaultValue.first].child || EventManager.dispatchEventWith(e.info.groupName + "Base_Menu_First_Node_Single_Select", !1, e.defaultValue.first)
            },
            this))
        },
        i.prototype.destroy = function() {
            Menu.menus.containsKey(this.info.groupName) && Menu.menus.remove(this.info.groupName),
            EventManager.dispatchEventWith("REMOVE_ALL_CHILDREN_MENU" + this.info.groupName),
            this.info = null,
            EventManager.removeAll(this),
            ImageButtonUtil.removeAll(this),
            DisplayUtil.removeForParent(this),
            DisplayUtil.removeAllChild(this)
        },
        i
    } (eui.Component);
    t.BaseMenuComponent = e,
    __reflect(e.prototype, "baseMenuComponent.BaseMenuComponent");
    var i = function() {
        function t() {}
        return t
    } ();
    t.DV = i,
    __reflect(i.prototype, "baseMenuComponent.DV")
} (baseMenuComponent || (baseMenuComponent = {}));
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
        function s(t) {
            try {
                h(n.next(t))
            } catch(e) {
                r(e)
            }
        }
        function a(t) {
            try {
                h(n["throw"](t))
            } catch(e) {
                r(e)
            }
        }
        function h(t) {
            t.done ? o(t.value) : new i(function(e) {
                e(t.value)
            }).then(s, a)
        }
        h((n = n.apply(t, e || [])).next())
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
        for (; h;) try {
            if (o = 1, r && (s = r[2 & i[0] ? "return": i[0] ? "throw": "next"]) && !(s = s.call(r, i[1])).done) return s;
            switch (r = 0, s && (i = [0, s.value]), i[0]) {
            case 0:
            case 1:
                s = i;
                break;
            case 4:
                return h.label++,
                {
                    value: i[1],
                    done: !1
                };
            case 5:
                h.label++,
                r = i[1],
                i = [0];
                continue;
            case 7:
                i = h.ops.pop(),
                h.trys.pop();
                continue;
            default:
                if (s = h.trys, !(s = s.length > 0 && s[s.length - 1]) && (6 === i[0] || 2 === i[0])) {
                    h = 0;
                    continue
                }
                if (3 === i[0] && (!s || i[1] > s[0] && i[1] < s[3])) {
                    h.label = i[1];
                    break
                }
                if (6 === i[0] && h.label < s[1]) {
                    h.label = s[1],
                    s = i;
                    break
                }
                if (s && h.label < s[2]) {
                    h.label = s[2],
                    h.ops.push(i);
                    break
                }
                s[2] && h.ops.pop(),
                h.trys.pop();
                continue
            }
            i = e.call(t, h)
        } catch(n) {
            i = [6, n],
            r = 0
        } finally {
            o = s = 0
        }
        if (5 & i[0]) throw i[1];
        return {
            value: i[0] ? i[1] : void 0,
            done: !0
        }
    }
    var o, r, s, a, h = {
        label: 0,
        sent: function() {
            if (1 & s[0]) throw s[1];
            return s[1]
        },
        trys: [],
        ops: []
    };
    return a = {
        next: i(0),
        "throw": i(1),
        "return": i(2)
    },
    "function" == typeof Symbol && (a[Symbol.iterator] = function() {
        return this
    }),
    a
},
baseMenuComponent; !
function(t) {
    var e = function(e) {
        function n() {
            var t = e.call(this) || this;
            return t.tl = null,
            t.firstStatus = !1,
            t.oldData = null,
            t.skinName = BaseMenuFirstNodeSkin,
            t
        }
        return __extends(n, e),
        n.prototype.childrenCreated = function() {
            var t = this;
            e.prototype.childrenCreated.call(this),
            ImageButtonUtil.add(this.touchGroup, this.touchFunc, this, !1, !1),
            ImageButtonUtil.add(this.imgSwitch,
            function() {
                t.tl.reversed() ? t.openAni() : t.closeAni()
            },
            this),
            this._list.itemRenderer = i,
            this.secondGroup.height = 0,
            this.ani = SpineUtil.createAnimate("zuocemulu"),
            this.aniGroup.addChild(this.ani)
        },
        n.prototype.dataChanged = function() {
            var t = this;
            e.prototype.dataChanged.call(this),
            this.data && (this.firstStatus || (this.oldData = this.data), this.firstStatus && this.oldData == this.data || (this.firstStatus = !0, this.node = this.data.node, this.info = this.data.info, EventManager.removeAll(this), EventManager.addEventListener(this.info.groupName + "Base_Menu_Second_Node_Touch_Select",
            function(e) {
                var i = e.data;
                i != t.node && t.closeAni()
            },
            this), EventManager.addEventListener(this.info.groupName + "Base_Menu_First_Node_Single_Select",
            function(e) {
                var i = e.data;
                i != t.node && t.closeAni()
            },
            this), EventManager.addEventListener("REMOVE_ALL_CHILDREN_MENU" + this.info.groupName, this.destroy, this), EventManager.addEventListener(BaseMenuEvent.BASE_MENU_RED_CHANGE_ + this.info.groupName + "_" + this.node,
            function(e) {
                var i = e.data;
                t.dot.visible = i
            },
            this), this.updateView()))
        },
        n.prototype.updateView = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var t, e, i, n = this;
                return __generator(this,
                function(o) {
                    switch (o.label) {
                    case 0:
                        return this.imgSwitch.visible = !1,
                        this.defaultValue = Menu.getDefault(this.info),
                        t = this.info.data[this.node],
                        t && t.title ? (this.txtUp.text = t.title, this.dot.horizontalCenter = this.txtUp.horizontalCenter + Math.floor(this.txtUp.width / 2) + 13, t.child && Array.isArray(t.child) ? (this.imgSwitch.visible = !0, e = t.child.map(function(t) {
                            return {
                                node: t,
                                info: KTool.clone(n.info)
                            }
                        }), this._list.dataProvider = new eui.ArrayCollection(e), i = this.info.data[this.node].child.indexOf(this.defaultValue.second), i > -1 ? (this._list.setSelectedIndex(i), EventManager.dispatchEventWith(this.info.groupName + "Base_Menu_Second_Node_Single_Select", !1, this.defaultValue.second), [4, wait(50)]) : [3, 2]) : [3, 4]) : [3, 6];
                    case 1:
                        return o.sent(),
                        this.openAni(),
                        [3, 3];
                    case 2:
                        this._list.setSelectedIndex(0),
                        o.label = 3;
                    case 3:
                        return [3, 5];
                    case 4:
                        this.imgSwitch.visible = !1,
                        o.label = 5;
                    case 5:
                        return this.ani.play("animation", 0),
                        [3, 7];
                    case 6:
                        console.error("数据错误!!!"),
                        o.label = 7;
                    case 7:
                        return this.cacheAsBitmap = !0,
                        [2]
                    }
                })
            })
        },
        n.prototype.touchFunc = function() {
            var t = this.info.data[this.node];
            this.selected ? t.child && Array.isArray(t.child) && (!this.tl || this.tl.reversed() ? this.openAni() : this.closeAni()) : t.child && Array.isArray(t.child) ? (EventManager.dispatchEventWith(this.info.groupName + "Base_Menu_Second_Node_Single_Select", !1, this._list.selectedItem.node), EventManager.dispatchEventWith(this.info.groupName + "Base_Menu_Second_Node_Touch_Select", !1, this.node), this.openAni()) : (EventManager.dispatchEventWith(this.info.groupName + "Base_Menu_First_Node_Single_Select", !1, this.node), this.ani.play("animation", 0))
        },
        n.prototype.openAni = function() {
            var e = this;
            if (this.tl) DisplayUtil.setScrollerItemIncludeInLayout(this._scr, !1),
            this.tl.restart().then(function() {
                DisplayUtil.setScrollerItemIncludeInLayout(e._scr, !0)
            });
            else {
                var i = this.info.data[this.node];
                this.tl = new gsap.core.Timeline;
                var n = t.childHeight * i.child.length + this._list.layout.gap * (i.child.length + 1);
                this.secondGroup.height = n,
                DisplayUtil.setScrollerItemIncludeInLayout(this._scr, !1);
                var o = i.child.length > 8 ? this.info.minSpeed: this.info.speed;
                this.secondBg.height = n,
                this.tl.from(this.secondGroup, {
                    height: 0,
                    duration: o * i.child.length
                },
                "<"),
                this.tl.from(this.secondBg, {
                    alpha: 0,
                    height: 0,
                    duration: o * i.child.length
                },
                "<"),
                this.tl.from(this._scr.viewport.$children, {
                    y: -200,
                    alpha: 0,
                    stagger: -o,
                    ease: Quad.easeOut
                },
                "-=0.4").then(function() {
                    DisplayUtil.setScrollerItemIncludeInLayout(e._scr, !0)
                })
            }
            this.ani.play("animation", 0),
            this.imgSwitch.source = "base_menu_component_canup_png"
        },
        n.prototype.closeAni = function() {
            var t = this;
            this.tl && !this.tl.reversed() && (DisplayUtil.setScrollerItemIncludeInLayout(this._scr, !1), this.imgSwitch.source = "base_menu_component_candown_png", this.tl.reverse().then(function() {
                DisplayUtil.setScrollerItemIncludeInLayout(t._scr, !0)
            })),
            this.ani.stopAll()
        },
        n.prototype.destroy = function() {
            ImageButtonUtil.removeAll(this),
            EventManager.removeAll(this),
            this.tl && this.tl.clear(),
            this.tl = null
        },
        n
    } (eui.ItemRenderer);
    t.BaseMenuFirstNode = e,
    __reflect(e.prototype, "baseMenuComponent.BaseMenuFirstNode");
    var i = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.skinName = BaseMenuSecondNodeSkin,
            e
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this),
            ImageButtonUtil.add(this.touchGroup, this.touchFunc, this, !1, !1)
        },
        e.prototype.dataChanged = function() {
            var e = this;
            t.prototype.dataChanged.call(this),
            (this.data || 0 == this.data) && (this.node = this.data.node, this.info = this.data.info, EventManager.removeAll(this), EventManager.addEventListener("REMOVE_ALL_CHILDREN_MENU" + this.info.groupName, this.destroy, this), EventManager.addEventListener(BaseMenuEvent.BASE_MENU_RED_CHANGE_ + this.info.groupName + "_" + this.node,
            function(t) {
                var i = t.data;
                e.dot.visible = i
            },
            this), this.updateView())
        },
        e.prototype.updateView = function() {
            var t = this.info.data[this.node];
            t && t.title ? (this.txt_tab.text = t.title, this.dot.horizontalCenter = this.txt_tab.horizontalCenter + Math.floor(this.txt_tab.width / 2) + 13) : console.error("数据错误!!!"),
            this.cacheAsBitmap = !0
        },
        e.prototype.touchFunc = function() {
            this.selected || EventManager.dispatchEventWith(this.info.groupName + "Base_Menu_Second_Node_Single_Select", !1, this.node)
        },
        e.prototype.destroy = function() {
            ImageButtonUtil.removeAll(this),
            EventManager.removeAll(this)
        },
        e
    } (eui.ItemRenderer);
    t.BaseMenuSecondNode = i,
    __reflect(i.prototype, "baseMenuComponent.BaseMenuSecondNode")
} (baseMenuComponent || (baseMenuComponent = {}));
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
generateEUI.paths["resource/eui_skins/BaseMenuComponentSkin.exml"] = window.BaseMenuComponentSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "_list", "_scr"],
        this.elementsContent = [this.bg_i(), this._scr_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.bottom = 0,
        t.right = 8,
        t.scale9Grid = new egret.Rectangle(197, 0, 34, 473),
        t.source = "adapt_leftbg_png",
        t.top = 0,
        t.width = 153,
        t
    },
    i._scr_i = function() {
        var t = new eui.Scroller;
        return this._scr = t,
        t.height = 590,
        t.left = 0,
        t.right = 0,
        t.top = 0,
        t.viewport = this._list_i(),
        t
    },
    i._list_i = function() {
        var t = new eui.List;
        return this._list = t,
        t.itemRendererSkinName = BaseMenuFirstNodeSkin,
        t.layout = this._VerticalLayout1_i(),
        t
    },
    i._VerticalLayout1_i = function() {
        var t = new eui.VerticalLayout;
        return t.gap = 6,
        t.horizontalAlign = "contentJustify",
        t.paddingTop = 15,
        t.verticalAlign = "contentJustify",
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/BaseMenuFirstNodeSkin.exml"] = window.BaseMenuFirstNodeSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["aniGroup", "secondBg", "imgSwitch", "txtUp", "dot", "touchGroup", "_list", "_scr", "secondGroup"],
        this.currentState = "up",
        this.elementsContent = [this.aniGroup_i(), this.secondBg_i(), this._Group1_i(), this.secondGroup_i()],
        this.states = [new eui.State("down", []), new eui.State("up", [new eui.SetProperty("aniGroup", "visible", !1), new eui.SetProperty("txtUp", "textColor", 8757203)])]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.aniGroup_i = function() {
        var t = new eui.Group;
        return this.aniGroup = t,
        t.height = 0,
        t.right = 8,
        t.top = 25,
        t.width = 0,
        t
    },
    i.secondBg_i = function() {
        var t = new eui.Image;
        return this.secondBg = t,
        t.height = 0,
        t.left = 0,
        t.right = 8,
        t.scale9Grid = new egret.Rectangle(0, 4, 12, 4),
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "base_menu_component_jx_3_kb_png",
        t.top = 55,
        t.visible = !0,
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.cacheAsBitmap = !0,
        t.height = 55,
        t.left = 0,
        t.right = 0,
        t.touchChildren = !0,
        t.touchThrough = !0,
        t.y = 0,
        t.elementsContent = [this.imgSwitch_i(), this.touchGroup_i()],
        t
    },
    i.imgSwitch_i = function() {
        var t = new eui.Image;
        return this.imgSwitch = t,
        t.right = 20,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "base_menu_component_candown_png",
        t.verticalCenter = 0,
        t.visible = !0,
        t
    },
    i.touchGroup_i = function() {
        var t = new eui.Group;
        return this.touchGroup = t,
        t.height = 55,
        t.right = 0,
        t.touchChildren = !1,
        t.touchThrough = !1,
        t.verticalCenter = 0,
        t.width = 153,
        t.elementsContent = [this.txtUp_i(), this.dot_i()],
        t
    },
    i.txtUp_i = function() {
        var t = new eui.Label;
        return this.txtUp = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = 0,
        t.scaleX = 1,
        t.scaleY = 1,
        t.size = 20,
        t.textColor = 16777215,
        t.touchEnabled = !1,
        t.verticalCenter = 0,
        t
    },
    i.dot_i = function() {
        var t = new eui.Image;
        return this.dot = t,
        t.height = 18,
        t.source = "dot_png",
        t.touchEnabled = !1,
        t.visible = !1,
        t.width = 18,
        t.x = 121,
        t.y = 6,
        t
    },
    i.secondGroup_i = function() {
        var t = new eui.Group;
        return this.secondGroup = t,
        t.height = 0,
        t.left = 0,
        t.right = 8,
        t.top = 55,
        t.elementsContent = [this._scr_i()],
        t
    },
    i._scr_i = function() {
        var t = new eui.Scroller;
        return this._scr = t,
        t.bottom = 0,
        t.left = 0,
        t.right = 0,
        t.scaleX = 1,
        t.scaleY = 1,
        t.top = 0,
        t.x = 0,
        t.viewport = this._list_i(),
        t
    },
    i._list_i = function() {
        var t = new eui.List;
        return this._list = t,
        t.horizontalCenter = 0,
        t.itemRendererSkinName = BaseMenuSecondNodeSkin,
        t.useVirtualLayout = !1,
        t.layout = this._VerticalLayout1_i(),
        t
    },
    i._VerticalLayout1_i = function() {
        var t = new eui.VerticalLayout;
        return t.gap = 14,
        t.horizontalAlign = "contentJustify",
        t.paddingBottom = 14,
        t.paddingTop = 14,
        t.verticalAlign = "contentJustify",
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/BaseMenuSecondNodeSkin.exml"] = window.BaseMenuSecondNodeSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["imgDown", "txt_tab", "dot", "touchGroup"],
        this.currentState = "up",
        this.height = 42,
        this.elementsContent = [this.imgDown_i(), this.touchGroup_i()],
        this.states = [new eui.State("down", [new eui.SetProperty("txt_tab", "textColor", 12834813)]), new eui.State("up", [new eui.SetProperty("imgDown", "visible", !1)])]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.imgDown_i = function() {
        var t = new eui.Image;
        return this.imgDown = t,
        t.left = 0,
        t.right = 0,
        t.scale9Grid = new egret.Rectangle(0, 0, 84, 42),
        t.source = "base_menu_component_down1_png",
        t.width = 153,
        t.y = 0,
        t
    },
    i.touchGroup_i = function() {
        var t = new eui.Group;
        return this.touchGroup = t,
        t.height = 42,
        t.left = 0,
        t.right = 0,
        t.y = 0,
        t.elementsContent = [this._Group1_i()],
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.height = 42,
        t.right = 0,
        t.scaleX = 1,
        t.scaleY = 1,
        t.width = 153,
        t.y = 0,
        t.elementsContent = [this.txt_tab_i(), this.dot_i()],
        t
    },
    i.txt_tab_i = function() {
        var t = new eui.Label;
        return this.txt_tab = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = 10,
        t.scaleX = 1,
        t.scaleY = 1,
        t.size = 18,
        t.textColor = 6388143,
        t.y = 12,
        t
    },
    i.dot_i = function() {
        var t = new eui.Image;
        return this.dot = t,
        t.height = 14,
        t.horizontalCenter = 55.5,
        t.source = "dot_png",
        t.touchEnabled = !1,
        t.visible = !1,
        t.width = 14,
        t.y = 6,
        t
    },
    e
} (eui.Skin);