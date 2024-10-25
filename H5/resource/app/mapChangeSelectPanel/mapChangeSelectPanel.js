var __reflect = this && this.__reflect ||
function(t, e, n) {
    t.__class__ = e,
    n ? n.push(e) : n = [e],
    t.__types__ = t.__types__ ? n.concat(t.__types__) : n
},
__extends = this && this.__extends ||
function(t, e) {
    function n() {
        this.constructor = t
    }
    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
    n.prototype = e.prototype,
    t.prototype = new n
},
mapChangeSelectPanel; !
function(t) {
    var e = function(e) {
        function n(t) {
            var n = e.call(this, t) || this;
            return t && (n.maps = t.arr, n._name = t.name),
            n.openPanel(),
            n
        }
        return __extends(n, e),
        n.prototype.openPanel = function() {
            egret.registerClass;
            egret.getDefinitionByName("mapChangeSelectPanel.MapChangeSelectPopPanel");
            try {
                this._view = new t.MapChangeSelectPopPanel(this.maps, this._name),
                this._view.addEventListener(PopView.EVENT_DESTROY, this._onClosePanelEvent, this);
                var e = PopViewManager.createDefaultStyleObject();
                e.maskShapeStyle.maskAlpha = 0,
                e.caller = this._view,
                PopViewManager.getInstance().openView(this._view, e, null)
            } catch(n) {
                console.error(n)
            }
        },
        n.prototype._onClosePanelEvent = function(t) {
            this.onClose()
        },
        n.prototype.destroy = function() {
            this._view.removeEventListener(PopView.EVENT_DESTROY, this._onClosePanelEvent, this),
            this._view = null,
            e.prototype.destroy.call(this)
        },
        n
    } (BaseModule);
    t.MapChangeSelectPanel = e,
    __reflect(e.prototype, "mapChangeSelectPanel.MapChangeSelectPanel")
} (mapChangeSelectPanel || (mapChangeSelectPanel = {}));
var __reflect = this && this.__reflect ||
function(t, e, n) {
    t.__class__ = e,
    n ? n.push(e) : n = [e],
    t.__types__ = t.__types__ ? n.concat(t.__types__) : n
},
__extends = this && this.__extends ||
function(t, e) {
    function n() {
        this.constructor = t
    }
    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
    n.prototype = e.prototype,
    t.prototype = new n
},
mapChangeSelectPanel; !
function(t) {
    var e = function(t) {
        function e(e, n) {
            var i = t.call(this) || this;
            return i.noStarsList = [2136, 2137, 2138],
            i.skinName = "MapChangeSelectPopSkin",
            i.arrMaps = e,
            i._name = n,
            i
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            this.addEvent();
            for (var t = 1; 5 >= t; t++) this["group" + t].touchThrough = !0,
            this["map" + t].pixelHitTest = !0;
            this.curPage = 1;
            for (var t = 0; t < this.arrMaps.length; t++) {
                var e = this.arrMaps[t];
                if (e.isCurMap) {
                    this.curPage = Math.floor(t / 5) + 1;
                    break
                }
            }
            this.update()
        },
        e.prototype.addEvent = function() {
            var t = this;
            ImageButtonUtil.add(this.btnClose,
            function() {
                PopViewManager.getInstance().hideView(t)
            },
            this),
            ImageButtonUtil.add(this.btnLeft,
            function() {
                t.curPage--,
                t.update()
            },
            this, !0, !0,
            function() {
                return t.curPage > 1
            }),
            ImageButtonUtil.add(this.btnRight,
            function() {
                t.curPage++,
                t.update()
            },
            this, !0, !0,
            function() {
                return 5 * t.curPage < t.arrMaps.length
            });
            for (var e = function(e) {
                ImageButtonUtil.add(n["group" + e],
                function() {
                    var n = t.arrMaps[5 * t.curPage - 6 + e].id;
                    MapManager.changeMap(n),
                    t.noStarsList.indexOf(n) >= 0 ? ToolBarManager.SetToolBarState("normal") : ToolBarManager.SetToolBarState("map"),
                    PopViewManager.getInstance().hideView(t)
                },
                n)
            },
            n = this, i = 1; 5 >= i; i++) e(i)
        },
        e.prototype.update = function() {
            for (var t = 0,
            e = this.arrMaps; t < e.length; t++) {
                var n = e[t];
                if (n.isCurMap) {
                    this.curMap = n;
                    break
                }
            }
            this.txtName.text = this._name + this.curMap.name;
            var i = this.arrMaps.length;
            this.btnLeft.visible = this.curPage > 1,
            this.btnRight.visible = 5 * this.curPage < i;
            for (var a = 1; 5 >= a; a++) {
                var r = 5 * this.curPage - 6 + a,
                o = this.arrMaps[r];
                r >= i ? this["group" + a].visible = !1 : (this["group" + a].visible = !0, this["img" + a].source = o.isCurMap ? "map_change_select_pop_img1_png": "map_change_select_pop_img2_png", this["map" + a].source = o.isCurMap ? "map_change_select_pop_mapLight" + a + "_png": "map_change_select_pop_map" + a + "_png", this["txt" + a].text = o.name)
            }
        },
        e.prototype.destroy = function() {
            ImageButtonUtil.removeAll(this),
            t.prototype.destroy.call(this)
        },
        e
    } (PopView);
    t.MapChangeSelectPopPanel = e,
    __reflect(e.prototype, "mapChangeSelectPanel.MapChangeSelectPopPanel")
} (mapChangeSelectPanel || (mapChangeSelectPanel = {}));
var __extends = this && this.__extends ||
function(t, e) {
    function n() {
        this.constructor = t
    }
    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
    n.prototype = e.prototype,
    t.prototype = new n
};
window.generateEUI = window.generateEUI || {},
generateEUI.paths = generateEUI.paths || {},
generateEUI.styles = void 0,
generateEUI.skins = {},
generateEUI.paths["resource/eui_skins/MapChangeSelectPopSkin.exml"] = window.MapChangeSelectPopSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["btnClose", "btnRight", "btnLeft", "txtName", "map1", "img1", "txt1", "group1", "map2", "img2", "txt2", "group2", "map3", "img3", "txt3", "group3", "map4", "img4", "txt4", "group4", "map5", "img5", "txt5", "group5"],
        this.elementsContent = [this._Image1_i(), this.btnClose_i(), this.btnRight_i(), this.btnLeft_i(), this.txtName_i(), this.group1_i(), this.group2_i(), this.group3_i(), this.group4_i(), this.group5_i()]
    }
    __extends(e, t);
    var n = e.prototype;
    return n._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "map_change_select_pop_imgbg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    n.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.source = "map_change_select_pop_btnclose_png",
        t.x = 711,
        t.y = 10,
        t
    },
    n.btnRight_i = function() {
        var t = new eui.Image;
        return this.btnRight = t,
        t.source = "map_change_select_pop_btnright_png",
        t.x = 717,
        t.y = 222,
        t
    },
    n.btnLeft_i = function() {
        var t = new eui.Image;
        return this.btnLeft = t,
        t.source = "map_change_select_pop_btnleft_png",
        t.x = 20,
        t.y = 222,
        t
    },
    n.txtName_i = function() {
        var t = new eui.Label;
        return this.txtName = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = 0,
        t.size = 18.0080609046126,
        t.textColor = 8835839,
        t.y = 14,
        t
    },
    n.group1_i = function() {
        var t = new eui.Group;
        return this.group1 = t,
        t.x = 84,
        t.y = 68,
        t.elementsContent = [this.map1_i(), this.img1_i(), this.txt1_i()],
        t
    },
    n.map1_i = function() {
        var t = new eui.Image;
        return this.map1 = t,
        t.source = "map_change_select_pop_map1_png",
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t
    },
    n.img1_i = function() {
        var t = new eui.Image;
        return this.img1 = t,
        t.source = "map_change_select_pop_img1_png",
        t.x = 64,
        t.y = 46,
        t
    },
    n.txt1_i = function() {
        var t = new eui.Label;
        return this.txt1 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16.0071652485446,
        t.text = "灵籁泳馆",
        t.textAlign = "center",
        t.textColor = 16777215,
        t.width = 138,
        t.x = 20,
        t.y = 99,
        t
    },
    n.group2_i = function() {
        var t = new eui.Group;
        return this.group2 = t,
        t.x = 86,
        t.y = 198,
        t.elementsContent = [this.map2_i(), this.img2_i(), this.txt2_i()],
        t
    },
    n.map2_i = function() {
        var t = new eui.Image;
        return this.map2 = t,
        t.source = "map_change_select_pop_map2_png",
        t.x = 0,
        t.y = 0,
        t
    },
    n.img2_i = function() {
        var t = new eui.Image;
        return this.img2 = t,
        t.source = "map_change_select_pop_img1_png",
        t.x = 102,
        t.y = 101,
        t
    },
    n.txt2_i = function() {
        var t = new eui.Label;
        return this.txt2 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16.0071652485446,
        t.text = "灵籁泳馆",
        t.textAlign = "center",
        t.textColor = 16777215,
        t.width = 148,
        t.x = 52,
        t.y = 153,
        t
    },
    n.group3_i = function() {
        var t = new eui.Group;
        return this.group3 = t,
        t.x = 289,
        t.y = 110,
        t.elementsContent = [this.map3_i(), this.img3_i(), this.txt3_i()],
        t
    },
    n.map3_i = function() {
        var t = new eui.Image;
        return this.map3 = t,
        t.source = "map_change_select_pop_map3_png",
        t.x = 0,
        t.y = 0,
        t
    },
    n.img3_i = function() {
        var t = new eui.Image;
        return this.img3 = t,
        t.source = "map_change_select_pop_img1_png",
        t.x = 101,
        t.y = 103,
        t
    },
    n.txt3_i = function() {
        var t = new eui.Label;
        return this.txt3 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16.0071652485446,
        t.text = "灵籁泳馆",
        t.textAlign = "center",
        t.textColor = 16777215,
        t.width = 157,
        t.x = 46,
        t.y = 156,
        t
    },
    n.group4_i = function() {
        var t = new eui.Group;
        return this.group4 = t,
        t.visible = !0,
        t.x = 465,
        t.y = 76,
        t.elementsContent = [this.map4_i(), this.img4_i(), this.txt4_i()],
        t
    },
    n.map4_i = function() {
        var t = new eui.Image;
        return this.map4 = t,
        t.source = "map_change_select_pop_map4_png",
        t.x = 0,
        t.y = 0,
        t
    },
    n.img4_i = function() {
        var t = new eui.Image;
        return this.img4 = t,
        t.source = "map_change_select_pop_img1_png",
        t.visible = !0,
        t.x = 103,
        t.y = 35,
        t
    },
    n.txt4_i = function() {
        var t = new eui.Label;
        return this.txt4 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16.0071652485446,
        t.text = "灵籁泳馆",
        t.textAlign = "center",
        t.textColor = 16777215,
        t.width = 157,
        t.x = 48,
        t.y = 88,
        t
    },
    n.group5_i = function() {
        var t = new eui.Group;
        return this.group5 = t,
        t.visible = !0,
        t.x = 448,
        t.y = 269,
        t.elementsContent = [this.map5_i(), this.img5_i(), this.txt5_i()],
        t
    },
    n.map5_i = function() {
        var t = new eui.Image;
        return this.map5 = t,
        t.source = "map_change_select_pop_map5_png",
        t.x = 0,
        t.y = 0,
        t
    },
    n.img5_i = function() {
        var t = new eui.Image;
        return this.img5 = t,
        t.source = "map_change_select_pop_img1_png",
        t.x = 123,
        t.y = 34,
        t
    },
    n.txt5_i = function() {
        var t = new eui.Label;
        return this.txt5 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16.0071652485446,
        t.text = "灵籁泳馆",
        t.textAlign = "center",
        t.textColor = 16777215,
        t.width = 157,
        t.x = 68,
        t.y = 87,
        t
    },
    e
} (eui.Skin);