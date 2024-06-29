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
seerClothesWarehouse; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.skinName = t.ClothesWarehouseItemSkin,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            DisplayUtil.cacheAsBitmapDisplayObj(this),
            this.initEvents()
        },
        i.prototype.initEvents = function() {
            this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this)
        },
        i.prototype.removeEvents = function() {
            this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this)
        },
        Object.defineProperty(i.prototype, "selected", {
            get: function() {
                return egret.superGetter(i, this, "selected")
            },
            set: function(t) {
                t = this.data && t,
                this.img_select.visible = t,
                egret.superSetter(i, this, "selected", t)
            },
            enumerable: !0,
            configurable: !0
        }),
        i.prototype.dataChanged = function() {
            if (this._vo = this.data, this._vo) {
                this.icon.source = ClientConfig.getItemIcon(this._vo.clothesId),
                this.img_zbz.visible = this._vo.isDress;
                var t = ItemXMLInfo.getName(this._vo.clothesId);
                t.length > 6 ? this.txtName.text = t.substr(0, 5) + "...": this.txtName.text = t
            }
        },
        i.prototype.destroy = function() {
            this.removeEvents()
        },
        i
    } (eui.ItemRenderer);
    t.ClothesWarehouseItem = e,
    __reflect(e.prototype, "seerClothesWarehouse.ClothesWarehouseItem")
} (seerClothesWarehouse || (seerClothesWarehouse = {}));
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
seerClothesWarehouse; !
function(t) {
    var e = function(e) {
        function i(t) {
            var i = e.call(this, t) || this;
            i._customData = t,
            i.skinName = "NewClothesWarehousePopSkin",
            i.curType = 0;
            var n = SuitXMLInfo.getAllSuitIds();
            i.abilitySuit = ItemSeXMLInfo.getAllAbilitySuit().map(Number),
            i.coolSuit = [],
            i.transformSuit = [];
            for (var o = 0; o < n.length; o++) {
                var s = ~~n[o],
                r = SuitXMLInfo.getIsTransform(s);
                i.abilitySuit.indexOf(s) < 0 && (r ? i.transformSuit.push(s) : i.coolSuit.push(s))
            }
            return i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            this.scroller_item.viewport = this.viewport_list,
            this.viewport_list.itemRenderer = t.ClothesWarehouseItem,
            this._ary = new eui.ArrayCollection,
            this.viewport_list.dataProvider = this._ary,
            "top" == this._customData.type && (this._customData.type = "eye"),
            this.imgHead.visible = this.imgEye.visible = this.imgWaist.visible = this.imgFoot.visible = this.imgHand.visible = !1,
            "eye" == this._customData.type ? this.imgEye.visible = !0 : "foot" == this._customData.type ? this.imgFoot.visible = !0 : "hand" == this._customData.type ? this.imgHand.visible = !0 : "head" == this._customData.type ? this.imgHead.visible = !0 : "waist" == this._customData.type && (this.imgWaist.visible = !0),
            this.initEvents(),
            this._updateView()
        },
        i.prototype.initEvents = function() {
            var t = this;
            this.viewport_list.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.onTouchTapItemRenderHandler, this),
            ImageButtonUtil.add(this.close, this.onIamgeButtonTouchTapHandler, this),
            ImageButtonUtil.add(this.img_btn_allequit,
            function() {
                var e = SuitXMLInfo.getIDForItem(t._currentVo.clothesId);
                e ? t._customData.onDressAllClothesHanlder.apply(t._customData.caller, [e]).then(function() {
                    t.onClose(),
                    BubblerManager.getInstance().showText("套装替换成功！")
                }) : BubblerManager.getInstance().showText("当前装扮还没有套装！")
            },
            this),
            ImageButtonUtil.add(this.img_btn_equit,
            function() {
                t._customData.onDressOneClothesHanlder.apply(t._customData.caller, [t._currentVo.type, t._currentVo.clothesId]).then(function() {
                    t.onClose(),
                    BubblerManager.getInstance().showText("装扮已经成功穿戴")
                })
            },
            this),
            ImageButtonUtil.add(this.btnSearch,
            function() {
                t.onInput()
            },
            this),
            ImageButtonUtil.add(this.groupDrop,
            function() {
                t.drop.visible = !t.drop.visible,
                t.imgArrow.rotation += 180,
                t.drop.visible && egret.setTimeout(function() {
                    egret.lifecycle.stage.once(egret.TouchEvent.TOUCH_TAP, t.closeDrop, t)
                },
                t, 0)
            },
            this);
            for (var e = function(e) {
                ImageButtonUtil.add(i["txt" + e],
                function() {
                    t.setType(e)
                },
                i)
            },
            i = this, n = 1; 4 >= n; n++) e(n);
            this._debosFunc = core.gameUtil.DeBounce(this.onInput, this, 100),
            this.txtSearch.addEventListener(egret.Event.CHANGE, this._debosFunc, this)
        },
        i.prototype.closeDrop = function() {
            this.drop.visible = !1,
            this.imgArrow.rotation = 0
        },
        i.prototype.onInput = function() {
            0 != this.curType && this.setType(1, !0),
            this.onSearch()
        },
        i.prototype.setType = function(t, e) {
            var i = this;
            void 0 === e && (e = !1);
            var n = this._parseClothesData(this._customData.clothesIds, this._customData.type);
            1 == t ? 0 == this.curType ? (this.curType = 1, this.txtPart.text = "能力套装部件", this.txt1.text = "全部部件", this.txt2.text = "炫酷套装部件", this.txt3.text = "变形套装部件", this.txt4.text = "独立能力部件", n = n.filter(function(t) {
                var e = SuitXMLInfo.getIDForItem(t.clothesId);
                return - 1 != i.abilitySuit.indexOf(e)
            })) : (this.curType = 0, this.txtPart.text = "全部部件", this.txt1.text = "能力套装部件", this.txt2.text = "炫酷套装部件", this.txt3.text = "变形套装部件", this.txt4.text = "独立能力部件") : 2 == t ? this.curType < 2 ? (this.curType = 2, this.txtPart.text = "炫酷套装部件", this.txt1.text = "全部部件", this.txt2.text = "能力套装部件", this.txt3.text = "变形套装部件", this.txt4.text = "独立能力部件", n = n.filter(function(t) {
                var e = SuitXMLInfo.getIDForItem(t.clothesId);
                return - 1 != i.coolSuit.indexOf(e)
            })) : (this.curType = 1, this.txtPart.text = "能力套装部件", this.txt1.text = "全部部件", this.txt2.text = "炫酷套装部件", this.txt3.text = "变形套装部件", this.txt4.text = "独立能力部件", n = n.filter(function(t) {
                var e = SuitXMLInfo.getIDForItem(t.clothesId);
                return - 1 != i.abilitySuit.indexOf(e)
            })) : 3 == t ? this.curType < 3 ? (this.curType = 3, this.txtPart.text = "变形套装部件", this.txt1.text = "全部部件", this.txt2.text = "能力套装部件", this.txt3.text = "炫酷套装部件", this.txt4.text = "独立能力部件", n = n.filter(function(t) {
                var e = SuitXMLInfo.getIDForItem(t.clothesId);
                return - 1 != i.transformSuit.indexOf(e)
            })) : (this.curType = 2, this.txtPart.text = "炫酷套装部件", this.txt1.text = "全部部件", this.txt2.text = "能力套装部件", this.txt3.text = "变形套装部件", this.txt4.text = "独立能力部件", n = n.filter(function(t) {
                var e = SuitXMLInfo.getIDForItem(t.clothesId);
                return - 1 != i.coolSuit.indexOf(e)
            })) : 4 == t && (this.curType < 4 ? (this.curType = 4, this.txtPart.text = "独立能力部件", this.txt1.text = "全部部件", this.txt2.text = "能力套装部件", this.txt3.text = "炫酷套装部件", this.txt4.text = "变形套装部件", n = n.filter(function(t) {
                return void 0 == ItemSeXMLInfo.getSuitId(t.clothesId)
            })) : (this.curType = 3, this.txtPart.text = "变形套装部件", this.txt1.text = "全部部件", this.txt2.text = "能力套装部件", this.txt3.text = "炫酷套装部件", this.txt4.text = "独立能力部件", n = n.filter(function(t) {
                var e = SuitXMLInfo.getIDForItem(t.clothesId);
                return - 1 != i.transformSuit.indexOf(e)
            }))),
            this._ary.source = n,
            this.imgNotFound.visible = 0 == n.length,
            this.viewport_list.selectedIndex = 0;
            var o = {};
            o.item = n[0],
            this.onTouchTapItemRenderHandler(o),
            e || (this.txtSearch.text = "")
        },
        i.prototype.onSearch = function() {
            var t = this._parseClothesData(this._customData.clothesIds, this._customData.type),
            e = this.txtSearch.text;
            if ("" !== e) {
                var i = e.trim();
                t = t.filter(function(t) {
                    return SearchUtil.isMatch(i, ItemXMLInfo.getName(t.clothesId))
                })
            }
            this.imgNotFound.visible = 0 == t.length,
            this._ary.source = t,
            this.clickFirst(t[0])
        },
        i.prototype.clickFirst = function(t) {
            this.viewport_list.selectedIndex = 0;
            var e = {};
            e.item = t,
            this.onTouchTapItemRenderHandler(e)
        },
        i.prototype.removeEvents = function() {
            this.viewport_list.removeEventListener(eui.ItemTapEvent.ITEM_TAP, this.onTouchTapItemRenderHandler, this),
            ImageButtonUtil.removeAll(this)
        },
        i.prototype._updateView = function() {
            var t = this._parseClothesData(this._customData.clothesIds, this._customData.type);
            this._ary.replaceAll(t),
            this.viewport_list.selectedIndex = 0,
            this._currentVo = this._ary.getItemAt(this.viewport_list.selectedIndex),
            this.updateClothesInfo();
            var e = this._customData.isEquit;
            this.txtBtn.text = e ? "替 换": "装 备",
            this.txtAllBtn.text = e ? "全部替换": "全部装备"
        },
        i.prototype.updateClothesInfo = function() {
            this.icon.source = ItemXMLInfo.getIconURL(this._currentVo.clothesId),
            this.txt_name.text = ItemXMLInfo.getName(this._currentVo.clothesId);
            var t = ["head", "eye", "hand", "waist", "foot"],
            e = ["头部", "面部", "手部", "腰部", "脚部"];
            this.txt_posName.text = e[t.indexOf(this._customData.type)];
            var i = ItemSeXMLInfo.getItemDes(this._currentVo.clothesId, 0);
            this.Txt_clothesEff.text = "" != i ? i: "无";
            var n = SuitXMLInfo.getIDForItem(this._currentVo.clothesId);
            this.txt_suitName.text = n > 0 ? SuitXMLInfo.getName(n) : "无";
            var o = ItemSeXMLInfo.getSuitDes(this._currentVo.clothesId);
            this.Txt_suitEff.text = "" != o ? o: "无";
            var s = ItemSeXMLInfo.getQuality(this._currentVo.clothesId);
            this.imgQuality.source = "quality_tag_" + s + "_png",
            DisplayUtil.setEnabled(this.img_btn_equit, !this._currentVo.isDress, this._currentVo.isDress),
            DisplayUtil.setEnabled(this.img_btn_allequit, n > 0, 0 >= n)
        },
        i.prototype.onIamgeButtonTouchTapHandler = function(t) {
            var e = this;
            switch (t.target) {
            case this.close:
                this.onClose();
                break;
            case this.img_btn_equit:
                this._customData.onDressOneClothesHanlder.apply(this._customData.caller, [this._currentVo.type, this._currentVo.clothesId]).then(function() {
                    e.onClose(),
                    BubblerManager.getInstance().showText("装扮已经成功穿戴")
                });
                break;
            case this.img_btn_allequit:
                var i = SuitXMLInfo.getIDForItem(this._currentVo.clothesId);
                i ? this._customData.onDressAllClothesHanlder.apply(this._customData.caller, [i]).then(function() {
                    e.onClose(),
                    BubblerManager.getInstance().showText("套装替换成功！")
                }) : BubblerManager.getInstance().showText("当前装扮还没有套装！")
            }
        },
        i.prototype.onTouchTapItemRenderHandler = function(t) {
            t.item && (this._currentVo = t.item, this.updateClothesInfo())
        },
        i.prototype._parseClothesData = function(t, e) {
            var i = this.getDressClotheIdByPosType(e),
            n = [];
            i > 0 && n.push({
                clothesId: i,
                type: e,
                isDress: !0
            });
            for (var o = 0; o < t.length; o++) {
                var s = {};
                i > 0 && i === t[o] || (s.clothesId = t[o], s.type = e, s.isDress = !1, n.push(s))
            }
            return n
        },
        i.prototype.getDressClotheIdByPosType = function(t) {
            for (var e = this._customData.getClothesIDsHanlder.apply(this._customData.caller, null), i = 0; i < e.length; i++) {
                var n = ClothXMLInfo.getItemInfo(e[i]).type;
                if (n === t) return e[i]
            }
            return 0
        },
        i.prototype.destroy = function() {
            this.removeEvents(),
            this.txtSearch.removeEventListener(egret.Event.CHANGE, this._debosFunc, this),
            e.prototype.destroy.call(this)
        },
        i
    } (BaseModule);
    t.SeerClothesWarehouse = e,
    __reflect(e.prototype, "seerClothesWarehouse.SeerClothesWarehouse")
} (seerClothesWarehouse || (seerClothesWarehouse = {})),
window.seerClothesWarehouse = window.seerClothesWarehouse || {};
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
generateEUI.paths["resource/eui_skins/ClothesWarehouseItemSkin.exml"] = window.seerClothesWarehouse.ClothesWarehouseItemSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["img_select", "icon", "img_zbz", "txtName"],
        this.width = 118,
        this.elementsContent = [this._Image1_i(), this.img_select_i(), this.icon_i(), this.img_zbz_i(), this.txtName_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "common_pet_head_bg_png",
        t.visible = !0,
        t.width = 104,
        t.x = 8,
        t.y = 9,
        t
    },
    i.img_select_i = function() {
        var t = new eui.Image;
        return this.img_select = t,
        t.height = 148.772,
        t.scale9Grid = new egret.Rectangle(31, 31, 31, 31),
        t.source = "common_select_rect_png",
        t.visible = !0,
        t.width = 118,
        t.x = 0,
        t.y = 0,
        t
    },
    i.icon_i = function() {
        var t = new eui.Image;
        return this.icon = t,
        t.height = 80,
        t.source = "",
        t.width = 80,
        t.x = 17.913,
        t.y = 19,
        t
    },
    i.img_zbz_i = function() {
        var t = new eui.Label;
        return this.img_zbz = t,
        t.fontFamily = "MFShangHei",
        t.size = 14,
        t.text = "装备中",
        t.textColor = 5689855,
        t.visible = !0,
        t.x = 65.913,
        t.y = 9,
        t
    },
    i.txtName_i = function() {
        var t = new eui.Label;
        return this.txtName = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "装备",
        t.textAlign = "center",
        t.textColor = 9025023,
        t.visible = !0,
        t.width = 101,
        t.x = 7.913,
        t.y = 115,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/ClothesWarehousePopSkin.exml"] = window.seerClothesWarehouse.ClothesWarehousePopSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["close", "bg", "img_tile", "icon", "img_btn_change", "img_btn_allchange", "img_btn_equit", "img_btn_allequit", "txt_name", "txt_posName", "txt_q", "txt_3", "txt_2", "txt_1", "txt_suitName", "Txt_clothesEff", "viewport_list", "scroller_item", "Txt_suitEff"],
        this.height = 538,
        this.width = 938,
        this.elementsContent = [this.bg_i(), this.img_tile_i(), this._Image5_i(), this._Image6_i(), this._Image7_i(), this._Image8_i(), this.icon_i(), this.img_btn_change_i(), this.img_btn_allchange_i(), this.img_btn_equit_i(), this.img_btn_allequit_i(), this.txt_name_i(), this.txt_posName_i(), this.txt_q_i(), this.txt_3_i(), this.txt_2_i(), this.txt_1_i(), this.txt_suitName_i(), this.Txt_clothesEff_i(), this.scroller_item_i(), this._Scroller1_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.bg_i = function() {
        var t = new eui.Group;
        return this.bg = t,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image1_i(), this._Image2_i(), this._Image3_i(), this._Image4_i(), this.close_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 538,
        t.source = "common_s9_pop_bg1_png",
        t.visible = !1,
        t.width = 938,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.fillMode = "repeat",
        t.height = 487,
        t.source = "common_pop_point_png",
        t.width = 406,
        t.x = 520,
        t.y = 32,
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.height = 479,
        t.source = "common_s9_pop_bg3_png",
        t.width = 510,
        t.x = 15,
        t.y = 36,
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.source = "common_pop_title_big_png",
        t.x = 15,
        t.y = 13,
        t
    },
    i.close_i = function() {
        var t = new eui.Image;
        return this.close = t,
        t.source = "common_close_1_png",
        t.x = 884,
        t.y = -7,
        t
    },
    i.img_tile_i = function() {
        var t = new eui.Image;
        return this.img_tile = t,
        t.source = "Clothes_warehouse_pop_img_tile_head_png",
        t.x = 48,
        t.y = 19,
        t
    },
    i._Image5_i = function() {
        var t = new eui.Image;
        return t.height = 1,
        t.source = "common_line_01_s9_png",
        t.width = 318,
        t.x = 565,
        t.y = 159,
        t
    },
    i._Image6_i = function() {
        var t = new eui.Image;
        return t.height = 1,
        t.source = "common_line_01_s9_png",
        t.width = 318,
        t.x = 565,
        t.y = 266,
        t
    },
    i._Image7_i = function() {
        var t = new eui.Image;
        return t.height = 1,
        t.source = "common_line_01_s9_png",
        t.width = 318,
        t.x = 565,
        t.y = 428,
        t
    },
    i._Image8_i = function() {
        var t = new eui.Image;
        return t.height = 66,
        t.source = "common_icon_bg_style_1_png",
        t.width = 66,
        t.x = 567,
        t.y = 82,
        t
    },
    i.icon_i = function() {
        var t = new eui.Image;
        return this.icon = t,
        t.height = 42,
        t.source = "",
        t.width = 42,
        t.x = 579,
        t.y = 93,
        t
    },
    i.img_btn_change_i = function() {
        var t = new eui.Image;
        return this.img_btn_change = t,
        t.height = 40,
        t.source = "Clothes_warehouse_pop_img_btn_change_png",
        t.width = 108,
        t.x = 752,
        t.y = 455,
        t
    },
    i.img_btn_allchange_i = function() {
        var t = new eui.Image;
        return this.img_btn_allchange = t,
        t.height = 40,
        t.source = "Clothes_warehouse_pop_img_btn_allchange_png",
        t.width = 108,
        t.x = 588,
        t.y = 455,
        t
    },
    i.img_btn_equit_i = function() {
        var t = new eui.Image;
        return this.img_btn_equit = t,
        t.height = 40,
        t.source = "Clothes_warehouse_pop_img_btn_equit_png",
        t.width = 108,
        t.x = 752,
        t.y = 455,
        t
    },
    i.img_btn_allequit_i = function() {
        var t = new eui.Image;
        return this.img_btn_allequit = t,
        t.height = 40,
        t.source = "Clothes_warehouse_pop_img_btn_allequit_png",
        t.width = 108,
        t.x = 588,
        t.y = 455,
        t
    },
    i.txt_name_i = function() {
        var t = new eui.Label;
        return this.txt_name = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 20,
        t.text = "套装名称",
        t.textAlign = "left",
        t.textColor = 3492213,
        t.x = 650,
        t.y = 82,
        t
    },
    i.txt_posName_i = function() {
        var t = new eui.Label;
        return this.txt_posName = t,
        t.size = 18,
        t.text = "头部",
        t.textColor = 3492213,
        t.x = 651,
        t.y = 107,
        t
    },
    i.txt_q_i = function() {
        var t = new eui.Label;
        return this.txt_q = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 18,
        t.text = "品质：史诗级",
        t.textColor = 3004461,
        t.x = 650,
        t.y = 130,
        t
    },
    i.txt_3_i = function() {
        var t = new eui.Label;
        return this.txt_3 = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 20,
        t.text = "装扮效果：",
        t.textColor = 3492213,
        t.x = 566,
        t.y = 171,
        t
    },
    i.txt_2_i = function() {
        var t = new eui.Label;
        return this.txt_2 = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 20,
        t.text = "套装特效",
        t.textColor = 3492213,
        t.x = 566,
        t.y = 306,
        t
    },
    i.txt_1_i = function() {
        var t = new eui.Label;
        return this.txt_1 = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 20,
        t.text = "所属套装",
        t.textColor = 4955889,
        t.x = 566,
        t.y = 278,
        t
    },
    i.txt_suitName_i = function() {
        var t = new eui.Label;
        return this.txt_suitName = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 20,
        t.text = "XXX套装",
        t.textColor = 4955889,
        t.x = 656,
        t.y = 278,
        t
    },
    i.Txt_clothesEff_i = function() {
        var t = new eui.Label;
        return this.Txt_clothesEff = t,
        t.size = 18,
        t.text = "无",
        t.textColor = 3492213,
        t.width = 287,
        t.x = 567,
        t.y = 203,
        t
    },
    i.scroller_item_i = function() {
        var t = new eui.Scroller;
        return this.scroller_item = t,
        t.height = 433,
        t.scrollPolicyH = "off",
        t.width = 456,
        t.x = 42,
        t.y = 73,
        t.viewport = this._Group1_i(),
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.elementsContent = [this.viewport_list_i()],
        t
    },
    i.viewport_list_i = function() {
        var t = new eui.List;
        return this.viewport_list = t,
        t.layout = this._TileLayout1_i(),
        t
    },
    i._TileLayout1_i = function() {
        var t = new eui.TileLayout;
        return t.horizontalGap = 0,
        t.orientation = "rows",
        t.requestedColumnCount = 5,
        t.verticalGap = 0,
        t
    },
    i._Scroller1_i = function() {
        var t = new eui.Scroller;
        return t.height = 80,
        t.width = 291,
        t.x = 567,
        t.y = 337,
        t.viewport = this._Group2_i(),
        t
    },
    i._Group2_i = function() {
        var t = new eui.Group;
        return t.elementsContent = [this.Txt_suitEff_i()],
        t
    },
    i.Txt_suitEff_i = function() {
        var t = new eui.Label;
        return this.Txt_suitEff = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.size = 18,
        t.text = "这里的属性很长很长很长很长很长很长很长这里的属性很长很长很长很长很长很长很长这里的属性很长很长很长很长很长很长很长这里的属性很长很长很长很长很长很长很长",
        t.textColor = 3492213,
        t.width = 291,
        t.x = 0,
        t.y = 0,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/NewClothesWarehousePopSkin.exml"] = window.NewClothesWarehousePopSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["close", "searchBg", "txtSearch", "btnSearch", "img8", "txtPart", "imgArrow", "groupDrop", "txt_suitName", "Txt_clothesEff", "txtBtn", "img_btn_equit", "txtAllBtn", "img_btn_allequit", "icon", "txt_name", "txt_posName", "imgQuality", "imgWaist", "imgEye", "imgFoot", "imgHand", "imgHead", "Txt_suitEff", "viewport_list", "scroller_item", "imgNotFound", "txt1", "txt2", "txt3", "txt4", "drop"],
        this.height = 547,
        this.width = 999,
        this.elementsContent = [this._Image1_i(), this.close_i(), this.searchBg_i(), this.txtSearch_i(), this.btnSearch_i(), this.groupDrop_i(), this._Image2_i(), this._Image3_i(), this.txt_suitName_i(), this._Label1_i(), this._Label2_i(), this.Txt_clothesEff_i(), this.img_btn_equit_i(), this.img_btn_allequit_i(), this._Image6_i(), this._Image7_i(), this.icon_i(), this.txt_name_i(), this.txt_posName_i(), this._Image8_i(), this._Image9_i(), this.imgQuality_i(), this.imgWaist_i(), this.imgEye_i(), this.imgFoot_i(), this.imgHand_i(), this.imgHead_i(), this._Scroller1_i(), this.scroller_item_i(), this.imgNotFound_i(), this.drop_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.bottom = 0,
        t.left = 0,
        t.right = 0,
        t.scale9Grid = new egret.Rectangle(333, 40, 333, 6),
        t.source = "new_clothes_warehouse_pop_imgbg_png",
        t.top = 0,
        t
    },
    i.close_i = function() {
        var t = new eui.Image;
        return this.close = t,
        t.source = "new_clothes_warehouse_pop_close_png",
        t.x = 956,
        t.y = 0,
        t
    },
    i.searchBg_i = function() {
        var t = new eui.Image;
        return this.searchBg = t,
        t.source = "new_clothes_warehouse_pop_searchbg_png",
        t.x = 356,
        t.y = 44,
        t
    },
    i.txtSearch_i = function() {
        var t = new eui.EditableText;
        return this.txtSearch = t,
        t.fontFamily = "MFShangHei",
        t.height = 16,
        t.prompt = "输入物品名称",
        t.promptColor = 6388400,
        t.size = 16,
        t.textColor = 6388400,
        t.width = 180,
        t.x = 371,
        t.y = 50,
        t
    },
    i.btnSearch_i = function() {
        var t = new eui.Image;
        return this.btnSearch = t,
        t.source = "new_clothes_warehouse_pop_btnsearch_png",
        t.x = 565,
        t.y = 44,
        t
    },
    i.groupDrop_i = function() {
        var t = new eui.Group;
        return this.groupDrop = t,
        t.x = 17,
        t.y = 42,
        t.elementsContent = [this.img8_i(), this.txtPart_i(), this.imgArrow_i()],
        t
    },
    i.img8_i = function() {
        var t = new eui.Image;
        return this.img8 = t,
        t.source = "new_clothes_warehouse_pop_img8_png",
        t.width = 139,
        t.x = 0,
        t.y = 0,
        t
    },
    i.txtPart_i = function() {
        var t = new eui.Label;
        return this.txtPart = t,
        t.fontFamily = "MFShangHei",
        t.size = 16.0000025390989,
        t.text = "全部部件",
        t.textAlign = "center",
        t.textColor = 11586047,
        t.width = 100,
        t.x = 3.743,
        t.y = 9,
        t
    },
    i.imgArrow_i = function() {
        var t = new eui.Image;
        return this.imgArrow = t,
        t.anchorOffsetX = 14,
        t.anchorOffsetY = 10,
        t.source = "new_clothes_warehouse_pop_imgarrow_png",
        t.x = 121.352,
        t.y = 17,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "new_clothes_warehouse_pop_img7_png",
        t.x = 615,
        t.y = 42,
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "new_clothes_warehouse_pop_img6_png",
        t.x = 699,
        t.y = 277,
        t
    },
    i.txt_suitName_i = function() {
        var t = new eui.Label;
        return this.txt_suitName = t,
        t.fontFamily = "MFShangHei",
        t.size = 18.1032238069541,
        t.text = "套装名称",
        t.textAlign = "center",
        t.textColor = 12111615,
        t.width = 181,
        t.x = 716,
        t.y = 283,
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 18.0525007904289,
        t.text = "套装特效：",
        t.textColor = 13820671,
        t.x = 634,
        t.y = 313,
        t
    },
    i._Label2_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 18.0340215832543,
        t.text = "装扮效果：",
        t.textColor = 13820671,
        t.x = 634,
        t.y = 151,
        t
    },
    i.Txt_clothesEff_i = function() {
        var t = new eui.Label;
        return this.Txt_clothesEff = t,
        t.fontFamily = "MFShangHei",
        t.size = 16.0302411956429,
        t.text = "赛尔们在毛线中获得套装，能驾驭狂风，借力上青云。赛尔们在毛线中获得套装，能驾驭狂风，",
        t.textColor = 8757203,
        t.width = 321,
        t.x = 635,
        t.y = 179,
        t
    },
    i.img_btn_equit_i = function() {
        var t = new eui.Group;
        return this.img_btn_equit = t,
        t.x = 819,
        t.y = 462,
        t.elementsContent = [this._Image4_i(), this.txtBtn_i()],
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.source = "new_clothes_warehouse_pop_imgbtn2_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.txtBtn_i = function() {
        var t = new eui.Label;
        return this.txtBtn = t,
        t.fontFamily = "MFShangHei",
        t.size = 22,
        t.text = "装 备",
        t.textColor = 10181146,
        t.x = 41,
        t.y = 12,
        t
    },
    i.img_btn_allequit_i = function() {
        var t = new eui.Group;
        return this.img_btn_allequit = t,
        t.x = 645,
        t.y = 462,
        t.elementsContent = [this._Image5_i(), this.txtAllBtn_i()],
        t
    },
    i._Image5_i = function() {
        var t = new eui.Image;
        return t.source = "new_clothes_warehouse_pop_imgbtn1_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.txtAllBtn_i = function() {
        var t = new eui.Label;
        return this.txtAllBtn = t,
        t.fontFamily = "MFShangHei",
        t.size = 20,
        t.text = "全套装备",
        t.textColor = 2975915,
        t.x = 28,
        t.y = 13,
        t
    },
    i._Image6_i = function() {
        var t = new eui.Image;
        return t.source = "new_clothes_warehouse_pop_imgicon_png",
        t.visible = !0,
        t.x = 634,
        t.y = 55,
        t
    },
    i._Image7_i = function() {
        var t = new eui.Image;
        return t.source = "common_item_bg_style_73_73_png",
        t.visible = !0,
        t.x = 634,
        t.y = 55,
        t
    },
    i.icon_i = function() {
        var t = new eui.Image;
        return this.icon = t,
        t.height = 53,
        t.source = "new_clothes_warehouse_pop_imgicon_png",
        t.visible = !0,
        t.width = 53,
        t.x = 643,
        t.y = 64,
        t
    },
    i.txt_name_i = function() {
        var t = new eui.Label;
        return this.txt_name = t,
        t.fontFamily = "MFShangHei",
        t.size = 17.9891130319998,
        t.text = "套装名字套装名字十字",
        t.textColor = 16774293,
        t.x = 719,
        t.y = 60,
        t
    },
    i.txt_posName_i = function() {
        var t = new eui.Label;
        return this.txt_posName = t,
        t.fontFamily = "MFShangHei",
        t.size = 17.9891130319998,
        t.text = "胸部",
        t.textColor = 8757203,
        t.x = 720,
        t.y = 103,
        t
    },
    i._Image8_i = function() {
        var t = new eui.Image;
        return t.source = "new_clothes_warehouse_pop_imgline1_png",
        t.x = 633,
        t.y = 138,
        t
    },
    i._Image9_i = function() {
        var t = new eui.Image;
        return t.source = "new_clothes_warehouse_pop_imgline2_png",
        t.x = 633,
        t.y = 269,
        t
    },
    i.imgQuality_i = function() {
        var t = new eui.Image;
        return this.imgQuality = t,
        t.visible = !0,
        t.x = 925,
        t.y = 62,
        t
    },
    i.imgWaist_i = function() {
        var t = new eui.Image;
        return this.imgWaist = t,
        t.source = "new_clothes_warehouse_pop_imgwaist_png",
        t.visible = !1,
        t.x = 45,
        t.y = 0,
        t
    },
    i.imgEye_i = function() {
        var t = new eui.Image;
        return this.imgEye = t,
        t.source = "new_clothes_warehouse_pop_imgeye_png",
        t.visible = !1,
        t.x = 45,
        t.y = 0,
        t
    },
    i.imgFoot_i = function() {
        var t = new eui.Image;
        return this.imgFoot = t,
        t.source = "new_clothes_warehouse_pop_imgfoot_png",
        t.visible = !1,
        t.x = 45,
        t.y = 0,
        t
    },
    i.imgHand_i = function() {
        var t = new eui.Image;
        return this.imgHand = t,
        t.source = "new_clothes_warehouse_pop_imghand_png",
        t.visible = !1,
        t.x = 45,
        t.y = 0,
        t
    },
    i.imgHead_i = function() {
        var t = new eui.Image;
        return this.imgHead = t,
        t.source = "new_clothes_warehouse_pop_imghead_png",
        t.visible = !1,
        t.x = 45,
        t.y = 0,
        t
    },
    i._Scroller1_i = function() {
        var t = new eui.Scroller;
        return t.height = 100,
        t.width = 321,
        t.x = 635,
        t.y = 340,
        t.viewport = this._Group1_i(),
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.elementsContent = [this.Txt_suitEff_i()],
        t
    },
    i.Txt_suitEff_i = function() {
        var t = new eui.Label;
        return this.Txt_suitEff = t,
        t.fontFamily = "MFShangHei",
        t.scaleX = 1,
        t.scaleY = 1,
        t.size = 16.0466669453949,
        t.text = "赛尔们在毛线中获得套装，能驾驭狂风，借力上青云。赛尔们在毛线中获得套装，能驾驭狂风，借力上青云。赛尔们在毛线中获得套装，能驾驭狂风，借力上青云.",
        t.textColor = 8757203,
        t.width = 321,
        t.x = 0,
        t.y = 0,
        t
    },
    i.scroller_item_i = function() {
        var t = new eui.Scroller;
        return this.scroller_item = t,
        t.height = 430,
        t.width = 590,
        t.x = 16,
        t.y = 85,
        t.viewport = this.viewport_list_i(),
        t
    },
    i.viewport_list_i = function() {
        var t = new eui.List;
        return this.viewport_list = t,
        t.layout = this._TileLayout1_i(),
        t
    },
    i._TileLayout1_i = function() {
        var t = new eui.TileLayout;
        return t.horizontalGap = 0,
        t.verticalGap = 0,
        t
    },
    i.imgNotFound_i = function() {
        var t = new eui.Image;
        return this.imgNotFound = t,
        t.source = "new_suit_pop_view_empty_tip_png",
        t.visible = !1,
        t.x = 228.111,
        t.y = 236.8,
        t
    },
    i.drop_i = function() {
        var t = new eui.Group;
        return this.drop = t,
        t.visible = !1,
        t.x = 17,
        t.y = 73,
        t.elementsContent = [this._Image10_i(), this._Image11_i(), this._Image12_i(), this._Image13_i(), this.txt1_i(), this.txt2_i(), this.txt3_i(), this.txt4_i()],
        t
    },
    i._Image10_i = function() {
        var t = new eui.Image;
        return t.source = "new_clothes_warehouse_pop_img4_png",
        t.width = 139.058,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Image11_i = function() {
        var t = new eui.Image;
        return t.left = 10,
        t.right = 10,
        t.source = "new_clothes_warehouse_pop_img1_png",
        t.y = 41,
        t
    },
    i._Image12_i = function() {
        var t = new eui.Image;
        return t.left = 10,
        t.right = 10,
        t.source = "new_clothes_warehouse_pop_img2_png",
        t.y = 81,
        t
    },
    i._Image13_i = function() {
        var t = new eui.Image;
        return t.left = 10,
        t.right = 10,
        t.source = "new_clothes_warehouse_pop_img3_png",
        t.y = 122,
        t
    },
    i.txt1_i = function() {
        var t = new eui.Label;
        return this.txt1 = t,
        t.fontFamily = "MFShangHei",
        t.height = 32,
        t.left = 0,
        t.right = 0,
        t.size = 16,
        t.text = "能力套装部件",
        t.textAlign = "center",
        t.textColor = 7310795,
        t.verticalAlign = "middle",
        t.y = 5.532,
        t
    },
    i.txt2_i = function() {
        var t = new eui.Label;
        return this.txt2 = t,
        t.fontFamily = "MFShangHei",
        t.height = 32,
        t.left = 0,
        t.right = 0,
        t.size = 16,
        t.text = "炫酷套装部件",
        t.textAlign = "center",
        t.textColor = 7310795,
        t.verticalAlign = "middle",
        t.y = 46.532,
        t
    },
    i.txt3_i = function() {
        var t = new eui.Label;
        return this.txt3 = t,
        t.fontFamily = "MFShangHei",
        t.height = 32,
        t.left = 0,
        t.right = 0,
        t.size = 16,
        t.text = "变形套装部件",
        t.textAlign = "center",
        t.textColor = 7310795,
        t.verticalAlign = "middle",
        t.y = 86.532,
        t
    },
    i.txt4_i = function() {
        var t = new eui.Label;
        return this.txt4 = t,
        t.fontFamily = "MFShangHei",
        t.height = 32,
        t.left = 0,
        t.right = 0,
        t.size = 16,
        t.text = "独立能力部件",
        t.textAlign = "center",
        t.textColor = 7310795,
        t.verticalAlign = "middle",
        t.y = 128.532,
        t
    },
    e
} (eui.Skin);