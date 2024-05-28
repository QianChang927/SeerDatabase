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
mapChangeSelectPanel; !
function(e) {
    var t = function(t) {
        function n(e) {
            var n = t.call(this, e) || this;
            return e && (n.maps = e.arr, n._name = e.name),
            n.openPanel(),
            n
        }
        return __extends(n, t),
        n.prototype.openPanel = function() {
            egret.registerClass;
            egret.getDefinitionByName("mapChangeSelectPanel.MapChangeSelectPopPanel");
            try {
                this._view = new e.MapChangeSelectPopPanel(this.maps, this._name),
                this._view.addEventListener(PopView.EVENT_DESTROY, this._onClosePanelEvent, this);
                var t = PopViewManager.createDefaultStyleObject();
                t.maskShapeStyle.maskAlpha = 0,
                t.caller = this._view,
                PopViewManager.getInstance().openView(this._view, t, null)
            } catch(n) {
                console.error(n)
            }
        },
        n.prototype._onClosePanelEvent = function(e) {
            this.onClose()
        },
        n.prototype.destroy = function() {
            this._view.removeEventListener(PopView.EVENT_DESTROY, this._onClosePanelEvent, this),
            this._view = null,
            t.prototype.destroy.call(this)
        },
        n
    } (BaseModule);
    e.MapChangeSelectPanel = t,
    __reflect(t.prototype, "mapChangeSelectPanel.MapChangeSelectPanel")
} (mapChangeSelectPanel || (mapChangeSelectPanel = {}));
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
mapChangeSelectPanel; !
function(e) {
    var t = function(e) {
        function t(t, n) {
            var i = e.call(this) || this;
            return i.skinName = "MapChangeSelectPopSkin",
            i.arrMaps = t,
            i._name = n,
            i
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            this.addEvent();
            for (var e = 1; 5 >= e; e++) this["group" + e].touchThrough = !0,
            this["map" + e].pixelHitTest = !0;
            this.curPage = 1;
            for (var e = 0; e < this.arrMaps.length; e++) {
                var t = this.arrMaps[e];
                if (t.isCurMap) {
                    this.curPage = Math.floor(e / 5) + 1;
                    break
                }
            }
            this.update()
        },
        t.prototype.addEvent = function() {
            var e = this;
            ImageButtonUtil.add(this.btnClose,
            function() {
                PopViewManager.getInstance().hideView(e)
            },
            this),
            ImageButtonUtil.add(this.btnLeft,
            function() {
                e.curPage--,
                e.update()
            },
            this, !0, !0,
            function() {
                return e.curPage > 1
            }),
            ImageButtonUtil.add(this.btnRight,
            function() {
                e.curPage++,
                e.update()
            },
            this, !0, !0,
            function() {
                return 5 * e.curPage < e.arrMaps.length
            });
            for (var t = function(t) {
                ImageButtonUtil.add(n["group" + t],
                function() {
                    var n = e.arrMaps[5 * e.curPage - 6 + t].id;
                    MapManager.changeMap(n),
                    ToolBarManager.SetToolBarState("map"),
                    PopViewManager.getInstance().hideView(e)
                },
                n)
            },
            n = this, i = 1; 5 >= i; i++) t(i)
        },
        t.prototype.update = function() {
            for (var e = 0,
            t = this.arrMaps; e < t.length; e++) {
                var n = t[e];
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
        t.prototype.destroy = function() {
            ImageButtonUtil.removeAll(this),
            e.prototype.destroy.call(this)
        },
        t
    } (PopView);
    e.MapChangeSelectPopPanel = t,
    __reflect(t.prototype, "mapChangeSelectPanel.MapChangeSelectPopPanel")
} (mapChangeSelectPanel || (mapChangeSelectPanel = {}));
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
generateEUI.paths["resource/eui_skins/MapChangeSelectPopSkin.exml"] = window.MapChangeSelectPopSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["btnClose", "btnRight", "btnLeft", "txtName", "map1", "img1", "txt1", "group1", "map2", "img2", "txt2", "group2", "map3", "img3", "txt3", "group3", "map4", "img4", "txt4", "group4", "map5", "img5", "txt5", "group5"],
        this.elementsContent = [this._Image1_i(), this.btnClose_i(), this.btnRight_i(), this.btnLeft_i(), this.txtName_i(), this.group1_i(), this.group2_i(), this.group3_i(), this.group4_i(), this.group5_i()]
    }
    __extends(t, e);
    var n = t.prototype;
    return n._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "map_change_select_pop_imgbg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    n.btnClose_i = function() {
        var e = new eui.Image;
        return this.btnClose = e,
        e.source = "map_change_select_pop_btnclose_png",
        e.x = 711,
        e.y = 10,
        e
    },
    n.btnRight_i = function() {
        var e = new eui.Image;
        return this.btnRight = e,
        e.source = "map_change_select_pop_btnright_png",
        e.x = 717,
        e.y = 222,
        e
    },
    n.btnLeft_i = function() {
        var e = new eui.Image;
        return this.btnLeft = e,
        e.source = "map_change_select_pop_btnleft_png",
        e.x = 20,
        e.y = 222,
        e
    },
    n.txtName_i = function() {
        var e = new eui.Label;
        return this.txtName = e,
        e.fontFamily = "MFShangHei",
        e.horizontalCenter = 0,
        e.size = 18.0080609046126,
        e.textColor = 8835839,
        e.y = 14,
        e
    },
    n.group1_i = function() {
        var e = new eui.Group;
        return this.group1 = e,
        e.x = 84,
        e.y = 68,
        e.elementsContent = [this.map1_i(), this.img1_i(), this.txt1_i()],
        e
    },
    n.map1_i = function() {
        var e = new eui.Image;
        return this.map1 = e,
        e.source = "map_change_select_pop_map1_png",
        e.visible = !0,
        e.x = 0,
        e.y = 0,
        e
    },
    n.img1_i = function() {
        var e = new eui.Image;
        return this.img1 = e,
        e.source = "map_change_select_pop_img1_png",
        e.x = 64,
        e.y = 46,
        e
    },
    n.txt1_i = function() {
        var e = new eui.Label;
        return this.txt1 = e,
        e.fontFamily = "MFShangHei",
        e.size = 16.0071652485446,
        e.text = "灵籁泳馆",
        e.textAlign = "center",
        e.textColor = 16777215,
        e.width = 138,
        e.x = 20,
        e.y = 99,
        e
    },
    n.group2_i = function() {
        var e = new eui.Group;
        return this.group2 = e,
        e.x = 86,
        e.y = 198,
        e.elementsContent = [this.map2_i(), this.img2_i(), this.txt2_i()],
        e
    },
    n.map2_i = function() {
        var e = new eui.Image;
        return this.map2 = e,
        e.source = "map_change_select_pop_map2_png",
        e.x = 0,
        e.y = 0,
        e
    },
    n.img2_i = function() {
        var e = new eui.Image;
        return this.img2 = e,
        e.source = "map_change_select_pop_img1_png",
        e.x = 102,
        e.y = 101,
        e
    },
    n.txt2_i = function() {
        var e = new eui.Label;
        return this.txt2 = e,
        e.fontFamily = "MFShangHei",
        e.size = 16.0071652485446,
        e.text = "灵籁泳馆",
        e.textAlign = "center",
        e.textColor = 16777215,
        e.width = 148,
        e.x = 52,
        e.y = 153,
        e
    },
    n.group3_i = function() {
        var e = new eui.Group;
        return this.group3 = e,
        e.x = 289,
        e.y = 110,
        e.elementsContent = [this.map3_i(), this.img3_i(), this.txt3_i()],
        e
    },
    n.map3_i = function() {
        var e = new eui.Image;
        return this.map3 = e,
        e.source = "map_change_select_pop_map3_png",
        e.x = 0,
        e.y = 0,
        e
    },
    n.img3_i = function() {
        var e = new eui.Image;
        return this.img3 = e,
        e.source = "map_change_select_pop_img1_png",
        e.x = 101,
        e.y = 103,
        e
    },
    n.txt3_i = function() {
        var e = new eui.Label;
        return this.txt3 = e,
        e.fontFamily = "MFShangHei",
        e.size = 16.0071652485446,
        e.text = "灵籁泳馆",
        e.textAlign = "center",
        e.textColor = 16777215,
        e.width = 157,
        e.x = 46,
        e.y = 156,
        e
    },
    n.group4_i = function() {
        var e = new eui.Group;
        return this.group4 = e,
        e.visible = !0,
        e.x = 465,
        e.y = 76,
        e.elementsContent = [this.map4_i(), this.img4_i(), this.txt4_i()],
        e
    },
    n.map4_i = function() {
        var e = new eui.Image;
        return this.map4 = e,
        e.source = "map_change_select_pop_map4_png",
        e.x = 0,
        e.y = 0,
        e
    },
    n.img4_i = function() {
        var e = new eui.Image;
        return this.img4 = e,
        e.source = "map_change_select_pop_img1_png",
        e.visible = !0,
        e.x = 103,
        e.y = 35,
        e
    },
    n.txt4_i = function() {
        var e = new eui.Label;
        return this.txt4 = e,
        e.fontFamily = "MFShangHei",
        e.size = 16.0071652485446,
        e.text = "灵籁泳馆",
        e.textAlign = "center",
        e.textColor = 16777215,
        e.width = 157,
        e.x = 48,
        e.y = 88,
        e
    },
    n.group5_i = function() {
        var e = new eui.Group;
        return this.group5 = e,
        e.visible = !0,
        e.x = 448,
        e.y = 269,
        e.elementsContent = [this.map5_i(), this.img5_i(), this.txt5_i()],
        e
    },
    n.map5_i = function() {
        var e = new eui.Image;
        return this.map5 = e,
        e.source = "map_change_select_pop_map5_png",
        e.x = 0,
        e.y = 0,
        e
    },
    n.img5_i = function() {
        var e = new eui.Image;
        return this.img5 = e,
        e.source = "map_change_select_pop_img1_png",
        e.x = 123,
        e.y = 34,
        e
    },
    n.txt5_i = function() {
        var e = new eui.Label;
        return this.txt5 = e,
        e.fontFamily = "MFShangHei",
        e.size = 16.0071652485446,
        e.text = "灵籁泳馆",
        e.textAlign = "center",
        e.textColor = 16777215,
        e.width = 157,
        e.x = 68,
        e.y = 87,
        e
    },
    t
} (eui.Skin);