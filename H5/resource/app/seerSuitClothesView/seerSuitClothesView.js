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
seerSuitClothesView; !
function(t) {
    var e = function(e) {
        function i(t) {
            var i = e.call(this, t) || this;
            i._suitClothIcon = [],
            i.curTAB = 1,
            i._customData = t,
            i._customData.suitList ? i._suitList = i._customData.suitList: i._suitList = ItemManager.GetMySuitIds(),
            i.skinName = "NewSuitPopViewSkin";
            var n = SuitXMLInfo.getAllSuitIds();
            i.abilitySuit = ItemSeXMLInfo.getAllAbilitySuit().map(Number),
            i.coolSuit = [],
            i.transformSuit = [];
            for (var s = 0; s < n.length; s++) {
                var r = ~~n[s],
                o = SuitXMLInfo.getIsTransform(r);
                i.abilitySuit.indexOf(r) < 0 && (o ? i.transformSuit.push(r) : i.coolSuit.push(r))
            }
            return i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this._customData.showSuitAndGlass ? (this.suit_grp.visible = !1, this.suitglass_grp.visible = !0, this.initGlassItems()) : (this.suit_grp.visible = !0, this.suitglass_grp.visible = !1),
            this.scroller_suit.viewport = this.viewport_list,
            this.viewport_list.itemRenderer = t.SuitPageItem,
            this._ary = new eui.ArrayCollection,
            this.viewport_list.dataProvider = this._ary,
            this.imgNotFound.visible = !1;
            for (var i = 0; i < this.grp_suitIcon.numChildren; i++) this._suitClothIcon.push(this.grp_suitIcon.getChildAt(i));
            this.initEvents(),
            this.updatePageRender(),
            this.newFunction(),
            this.img_btn_zb.name = "btnSuit"
        },
        i.prototype.newFunction = function() {
            var t = this;
            this.curType = 0,
            ImageButtonUtil.add(this.groupDrop,
            function() {
                t.drop.visible = !t.drop.visible,
                t.imgArrow.rotation += 180,
                t.drop.visible && egret.setTimeout(function() {
                    egret.lifecycle.stage.once(egret.TouchEvent.TOUCH_TAP,
                    function() {
                        t.drop.visible = !1,
                        t.imgArrow.rotation = 0
                    },
                    t)
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
            i = this, n = 1; 3 >= n; n++) e(n);
            this._debosFunc = core.gameUtil.DeBounce(this.onInput, this, 100),
            this.editable_search.addEventListener(egret.Event.CHANGE, this._debosFunc, this)
        },
        i.prototype.setType = function(t, e) {
            var i = this;
            void 0 === e && (e = !1);
            var n = this._parseRenderData();
            1 == t ? 0 == this.curType ? (this.curType = 1, this.txtType.text = "能力", this.txt1.text = "全部", this.txt2.text = "炫酷", this.txt3.text = "变形", n = n.filter(function(t) {
                return - 1 != i.abilitySuit.indexOf(t.suitId)
            })) : (this.curType = 0, this.txtType.text = "全部", this.txt1.text = "能力", this.txt2.text = "炫酷", this.txt3.text = "变形") : 2 == t ? 0 == this.curType || 1 == this.curType ? (this.curType = 2, this.txtType.text = "炫酷", this.txt1.text = "全部", this.txt2.text = "能力", this.txt3.text = "变形", n = n.filter(function(t) {
                return - 1 != i.coolSuit.indexOf(t.suitId)
            })) : (this.curType = 1, this.txtType.text = "能力", this.txt1.text = "全部", this.txt2.text = "炫酷", this.txt3.text = "变形", n = n.filter(function(t) {
                return - 1 != i.abilitySuit.indexOf(t.suitId)
            })) : 3 == t && (3 == this.curType ? (this.curType = 2, this.txtType.text = "炫酷", this.txt1.text = "全部", this.txt2.text = "能力", this.txt3.text = "变形", n = n.filter(function(t) {
                return - 1 != i.coolSuit.indexOf(t.suitId)
            })) : (this.curType = 3, this.txtType.text = "变形", this.txt1.text = "全部", this.txt2.text = "能力", this.txt3.text = "炫酷", n = n.filter(function(t) {
                return - 1 != i.transformSuit.indexOf(t.suitId)
            }))),
            this._ary.source = n,
            this.imgNotFound.visible = 0 == n.length,
            this.viewport_list.selectedIndex = 0;
            var s = {};
            s.item = n[0],
            this.onTouchTapItemRenderHandler(s),
            this.drop.visible = !1,
            this.imgArrow.rotation = 0,
            e || (this.editable_search.text = "")
        },
        i.prototype.onInput = function() {
            this._onSearCh()
        },
        i.prototype.initEvents = function() {
            var t = this;
            this.viewport_list.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.onTouchTapItemRenderHandler, this),
            ImageButtonUtil.add(this.img_btn_zb,
            function() {
                1 == t.curTAB ? t._customData.onDressClothesHandler.apply(t._customData.caller, [t._currentSelectVo]).then(function() {
                    t.onClose(),
                    BubblerManager.getInstance().showText("套装替换成功！")
                }) : MainManager.actorInfo.requestChangeClothes("eye", t._currentSelectVo.suitId,
                function() {
                    t._customData.onDressClothesHandler.apply(t._customData.caller, null),
                    t.onClose(),
                    BubblerManager.getInstance().showText("装扮已成功穿戴！")
                },
                null, t)
            },
            this),
            ImageButtonUtil.add(this.close, this.onTouchTapIamgeButtonHandler, this),
            ImageButtonUtil.add(this.btnSearch, this.onTouchTapIamgeButtonHandler, this),
            this.editable_search.addEventListener(egret.Event.CHANGE, this._onEditableChangeHandler, this)
        },
        i.prototype.removeEvents = function() {
            this.viewport_list.removeEventListener(eui.ItemTapEvent.ITEM_TAP, this.onTouchTapItemRenderHandler, this),
            this.editable_search.removeEventListener(egret.Event.CHANGE, this._onEditableChangeHandler, this),
            ImageButtonUtil.removeAll(this)
        },
        i.prototype.onTouchTapIamgeButtonHandler = function(t) {
            switch (t.target) {
            case this.close:
                this.onClose();
                break;
            case this.btnSearch:
                this._onSearCh()
            }
        },
        i.prototype.onTouchTapItemRenderHandler = function(t) {
            t.item && (this._currentSelectVo = t.item, this.resetSuitDescScroller(), this.updateSuitInfo())
        },
        i.prototype.updatePageRender = function() {
            var t = this._parseRenderData();
            if ("" !== this.editable_search.text) {
                var e = this.editable_search.text.trim();
                t = t.filter(function(t) {
                    return SearchUtil.isMatch(e, t.suitName)
                }),
                this.imgNotFound.visible = 0 === t.length
            }
            this._ary.replaceAll(t),
            this._ary.length > 0 && (this.viewport_list.selectedIndex = 0, this._currentSelectVo = this._ary.getItemAt(this.viewport_list.selectedIndex), this.updateSuitInfo())
        },
        i.prototype.resetPageRender = function() {
            this.scroller_suit.stopAnimation(),
            this.scroller_suit.viewport.scrollV = 0,
            this.updatePageRender()
        },
        i.prototype.resetSuitDescScroller = function() {
            this.scroller_desc.stopAnimation(),
            this.scroller_desc.viewport.scrollV = 0
        },
        i.prototype.updateSuitInfo = function() {
            var t = this._currentSelectVo;
            if (this.txt_nameTitle.text = t.suitName, this.grp_suitIcon.removeChildren(), 1 == this.curTAB) for (var e = SuitXMLInfo.getCloths(t.suitId), i = 0; i < e.length; i++) {
                var n = {},
                s = ~~e[i];
                n.clothesId = s,
                n.isDress = MainManager.actorInfo.getClothesIsDress(s),
                n.isHold = null != ItemManager.getClothInfo(s);
                var r = this._suitClothIcon[i];
                r && r.setData(n),
                this.grp_suitIcon.addChild(r)
            } else {
                var n = {},
                s = ~~t.suitId;
                n.clothesId = s,
                n.isDress = MainManager.actorInfo.getClothesIsDress(s),
                n.isHold = null != ItemManager.getClothInfo(s);
                var r = this._suitClothIcon[0];
                r && r.setData(n),
                this.grp_suitIcon.addChild(r)
            }
            if (1 == this.curTAB) {
                this.Txt_effTitle.text = "套装特效：";
                var o = ItemSeXMLInfo.getSuitEff(t.suitId);
                this.Txt_eff.text = "" != o ? o: "无"
            } else {
                this.Txt_effTitle.text = "装扮效果：";
                var o = ItemSeXMLInfo.getItemDes(t.suitId, 0);
                this.Txt_eff.text = "" != o ? o: "无"
            }
            this.img_yzb.visible = this._currentSuitID === t.suitId,
            this.img_btn_zb.visible = !this.img_yzb.visible
        },
        i.prototype._parseRenderData = function() {
            var t = [],
            e = this._customData.onGetclothIDsHandler.apply(this._customData.caller, null),
            i = 0,
            n = SuitXMLInfo.getSuitIDs(e);
            n.length > 0 && (i = n[0]),
            this._currentSuitID = i;
            for (var s = 0; s < this._suitList.length; s++) if (i !== this._suitList[s]) {
                var r = {};
                r.suitId = this._suitList[s],
                r.isDress = !1,
                r.suitName = SuitXMLInfo.getName(this._suitList[s]),
                r.isAttribute = ItemSeXMLInfo.getIsEffSuit(this._suitList[s]),
                t.push(r)
            }
            if (t.sort(function(t, e) {
                return e.suitId - t.suitId
            }), i > 0) {
                var o = {};
                o.suitId = i,
                o.isDress = !0,
                o.suitName = SuitXMLInfo.getName(i),
                o.isAttribute = ItemSeXMLInfo.getIsEffSuit(i),
                t.unshift(o)
            }
            return t
        },
        i.prototype._onSearCh = function() {
            0 != this.curType && this.setType(1, !0),
            this.updatePageRender()
        },
        i.prototype._onEditableChangeHandler = function(t) {
            "" === this.editable_search.text && (this.updatePageRender(), this.imgNotFound.visible = !1)
        },
        i.prototype.destroy = function() {
            this.removeEvents(),
            this.editable_search.removeEventListener(egret.Event.CHANGE, this._debosFunc, this),
            e.prototype.destroy.call(this)
        },
        i.prototype.initGlassItems = function() {
            this.suitglass_tab = this.r_1.group,
            this.suitglass_tab.addEventListener(egret.Event.CHANGE, this.onChangeTab, this),
            this.suitglass_tab.selectedValue = 1
        },
        i.prototype.onChangeTab = function() {
            if (this.curTAB = ~~this.suitglass_tab.selectedValue, 1 == this.curTAB) this.curType = 1,
            this.setType(1, !1);
            else {
                for (var t = [], e = "eye", i = this._parseClothesData(this.getHoldColthesIds(e), e), n = 0, s = i; n < s.length; n++) {
                    var r = s[n];
                    t.push({
                        suitId: r.clothesId,
                        suitName: ItemXMLInfo.getName(r.clothesId),
                        isAttribute: !1,
                        isDress: r.isDress
                    })
                }
                this._ary.source = t,
                this.viewport_list.selectedIndex = 0;
                var o = {};
                o.item = t[0],
                this.onTouchTapItemRenderHandler(o)
            }
        },
        i.prototype.getHoldColthesIds = function(t) {
            var e = ItemManager.getClothIDs(),
            i = [];
            return e.forEach(function(e) {
                var n = ClothXMLInfo.getItemInfo(~~e).type;
                n === t && i.push(~~e)
            }),
            i
        },
        i.prototype._parseClothesData = function(t, e) {
            var i = this.getDressClotheIdByPosType(e),
            n = [];
            i > 0 && n.push({
                clothesId: i,
                type: e,
                isDress: !0
            });
            for (var s = 0; s < t.length; s++) {
                var r = {};
                i > 0 && i === t[s] || (r.clothesId = t[s], r.type = e, r.isDress = !1, n.push(r))
            }
            return n
        },
        i.prototype.getDressClotheIdByPosType = function(t) {
            for (var e = this._customData.onGetclothIDsHandler.apply(this._customData.caller, null), i = 0; i < e.length; i++) {
                var n = ClothXMLInfo.getItemInfo(e[i]).type;
                if (n === t) return e[i]
            }
            return 0
        },
        i
    } (BaseModule);
    t.SeerSuitClothesView = e,
    __reflect(e.prototype, "seerSuitClothesView.SeerSuitClothesView")
} (seerSuitClothesView || (seerSuitClothesView = {}));
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
seerSuitClothesView; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.skinName = t.SuitPopItemSkin,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
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
                return egret.superSetter(i, this, "selected")
            },
            set: function(t) {
                this.img_select.visible = t,
                egret.superSetter(i, this, "selected")
            },
            enumerable: !0,
            configurable: !0
        }),
        i.prototype.dataChanged = function() {
            this._vo = this.data,
            this.txt_name.text = this._vo.suitName,
            this.Icon_UP.visible = this._vo.isAttribute
        },
        i.prototype.destroy = function() {
            this.removeEvents()
        },
        i
    } (eui.ItemRenderer);
    t.SuitPageItem = e,
    __reflect(e.prototype, "seerSuitClothesView.SuitPageItem")
} (seerSuitClothesView || (seerSuitClothesView = {}));
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
seerSuitClothesView; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.skinName = t.SuitPopViewIconItemSkin,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.initEvents()
        },
        i.prototype.initEvents = function() {
            this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this)
        },
        i.prototype.removeEvents = function() {
            this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this)
        },
        i.prototype.setData = function(t) {
            this._vo = t,
            this._updateView()
        },
        i.prototype._updateView = function() {
            this.icon.source = ItemXMLInfo.getIconURL(this._vo.clothesId),
            this.img_zbz.visible = this._vo.isDress,
            this.img_whd.visible = !this._vo.isHold
        },
        i.prototype.destroy = function() {
            this.removeEvents()
        },
        i
    } (BaseModule);
    t.SuitPopViewIconItem = e,
    __reflect(e.prototype, "seerSuitClothesView.SuitPopViewIconItem")
} (seerSuitClothesView || (seerSuitClothesView = {})),
window.seerSuitClothesView = window.seerSuitClothesView || {};
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
generateEUI.paths["resource/eui_skins/SuitPopViewIconItemSkin.exml"] = window.seerSuitClothesView.SuitPopViewIconItemSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["icon", "img_whd", "img_zbz"],
        this.elementsContent = [this._Image1_i(), this.icon_i(), this.img_whd_i(), this.img_zbz_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "new_suit_pop_view_img6_png",
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t
    },
    i.icon_i = function() {
        var t = new eui.Image;
        return this.icon = t,
        t.height = 45,
        t.source = "",
        t.visible = !0,
        t.width = 45,
        t.x = 9,
        t.y = 9,
        t
    },
    i.img_whd_i = function() {
        var t = new eui.Image;
        return this.img_whd = t,
        t.source = "new_suit_pop_view_imgnothave_png",
        t.visible = !1,
        t
    },
    i.img_zbz_i = function() {
        var t = new eui.Label;
        return this.img_zbz = t,
        t.fontFamily = "MFShangHei",
        t.size = 14,
        t.text = "装备中",
        t.textColor = 5689855,
        t.visible = !1,
        t.x = 18.959,
        t.y = 4.699,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/new/NewSuitPopViewSkin.exml"] = window.NewSuitPopViewSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["close", "imgNotFound", "txt_nameTitle", "suitItem_0", "suitItem_1", "suitItem_2", "suitItem_3", "suitItem_4", "suitItem_5", "grp_suitIcon", "Txt_effTitle", "Txt_eff", "scroller_desc", "img_yzb", "img_btn_zb", "viewport_list", "scroller_suit", "txtType", "imgArrow", "groupDrop", "editable_search", "btnSearch", "txt1", "txt2", "txt3", "drop", "suit_grp", "r_1", "r_2", "suitglass_grp"],
        this.elementsContent = [this._Image1_i(), this._Image2_i(), this._Image3_i(), this._Image4_i(), this.close_i(), this._Image5_i(), this.imgNotFound_i(), this._Group1_i(), this._Group2_i(), this._Image7_i(), this.Txt_effTitle_i(), this.scroller_desc_i(), this._Image8_i(), this.img_yzb_i(), this.img_btn_zb_i(), this.scroller_suit_i(), this.suit_grp_i(), this.suitglass_grp_i()]
    }
    __extends(e, t);
    var i = function(t) {
        function e() {
            t.call(this),
            this.skinParts = ["label"],
            this.elementsContent = [this._Image1_i(), this.label_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("label", "textColor", 7242936)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "title_pop_2022_imgmenudown_png"), new eui.SetProperty("label", "textColor", 16777215)]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t.percentHeight = 100,
            t.source = "title_pop_2022_imgline_png",
            t.percentWidth = 100,
            t
        },
        i.label_i = function() {
            var t = new eui.Label;
            return this.label = t,
            t.fontFamily = "MFShangHei",
            t.horizontalCenter = 0,
            t.size = 18,
            t.text = "套装",
            t.verticalCenter = 0,
            t
        },
        e
    } (eui.Skin),
    n = function(t) {
        function e() {
            t.call(this),
            this.skinParts = ["label"],
            this.elementsContent = [this._Image1_i(), this.label_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("label", "textColor", 7242936)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "title_pop_2022_imgmenudown_png"), new eui.SetProperty("label", "textColor", 16777215)]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t.percentHeight = 100,
            t.source = "title_pop_2022_imgline_png",
            t.percentWidth = 100,
            t
        },
        i.label_i = function() {
            var t = new eui.Label;
            return this.label = t,
            t.fontFamily = "MFShangHei",
            t.horizontalCenter = 0,
            t.size = 18,
            t.text = "目镜",
            t.verticalCenter = 0,
            t
        },
        e
    } (eui.Skin),
    s = e.prototype;
    return s._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 430,
        t.scale9Grid = new egret.Rectangle(3, 2, 1, 1),
        t.source = "new_suit_pop_view_di_png",
        t.visible = !0,
        t.width = 753,
        t
    },
    s._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "new_suit_pop_view_top_png",
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t
    },
    s._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "new_suit_pop_view_juxing_24_png",
        t.visible = !0,
        t.x = 0,
        t.y = 235,
        t
    },
    s._Image4_i = function() {
        var t = new eui.Image;
        return t.source = "new_suit_pop_view_jx_24_kb_png",
        t.visible = !0,
        t.x = 0,
        t.y = 424,
        t
    },
    s.close_i = function() {
        var t = new eui.Image;
        return this.close = t,
        t.source = "new_suit_pop_view_close_png",
        t.x = 712,
        t.y = 1,
        t
    },
    s._Image5_i = function() {
        var t = new eui.Image;
        return t.source = "new_suit_pop_view_img7_png",
        t.visible = !0,
        t.x = 1,
        t.y = 33,
        t
    },
    s.imgNotFound_i = function() {
        var t = new eui.Image;
        return this.imgNotFound = t,
        t.source = "new_suit_pop_view_empty_tip_png",
        t.visible = !0,
        t.x = 70.559,
        t.y = 160.212,
        t
    },
    s._Group1_i = function() {
        var t = new eui.Group;
        return t.x = 396,
        t.y = 59,
        t.elementsContent = [this._Image6_i(), this.txt_nameTitle_i()],
        t
    },
    s._Image6_i = function() {
        var t = new eui.Image;
        return t.source = "new_suit_pop_view_imgnamebg_png",
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t
    },
    s.txt_nameTitle_i = function() {
        var t = new eui.Label;
        return this.txt_nameTitle = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = 0,
        t.size = 20,
        t.text = "套装名字套装名",
        t.textColor = 12046335,
        t.y = 6,
        t
    },
    s._Group2_i = function() {
        var t = new eui.Group;
        return t.height = 64,
        t.width = 454,
        t.x = 297,
        t.y = 110,
        t.elementsContent = [this.grp_suitIcon_i()],
        t
    },
    s.grp_suitIcon_i = function() {
        var t = new eui.Group;
        return this.grp_suitIcon = t,
        t.height = 64,
        t.horizontalCenter = 0,
        t.scaleX = 1,
        t.scaleY = 1,
        t.visible = !0,
        t.y = 0,
        t.layout = this._HorizontalLayout1_i(),
        t.elementsContent = [this.suitItem_0_i(), this.suitItem_1_i(), this.suitItem_2_i(), this.suitItem_3_i(), this.suitItem_4_i(), this.suitItem_5_i()],
        t
    },
    s._HorizontalLayout1_i = function() {
        var t = new eui.HorizontalLayout;
        return t.gap = 14,
        t
    },
    s.suitItem_0_i = function() {
        var t = new seerSuitClothesView.SuitPopViewIconItem;
        return this.suitItem_0 = t,
        t.skinName = "seerSuitClothesView.SuitPopViewIconItemSkin",
        t.x = 55,
        t.y = 30,
        t
    },
    s.suitItem_1_i = function() {
        var t = new seerSuitClothesView.SuitPopViewIconItem;
        return this.suitItem_1 = t,
        t.skinName = "seerSuitClothesView.SuitPopViewIconItemSkin",
        t.x = 65,
        t.y = 40,
        t
    },
    s.suitItem_2_i = function() {
        var t = new seerSuitClothesView.SuitPopViewIconItem;
        return this.suitItem_2 = t,
        t.skinName = "seerSuitClothesView.SuitPopViewIconItemSkin",
        t.x = 75,
        t.y = 50,
        t
    },
    s.suitItem_3_i = function() {
        var t = new seerSuitClothesView.SuitPopViewIconItem;
        return this.suitItem_3 = t,
        t.skinName = "seerSuitClothesView.SuitPopViewIconItemSkin",
        t.x = 85,
        t.y = 60,
        t
    },
    s.suitItem_4_i = function() {
        var t = new seerSuitClothesView.SuitPopViewIconItem;
        return this.suitItem_4 = t,
        t.skinName = "seerSuitClothesView.SuitPopViewIconItemSkin",
        t.x = 95,
        t.y = 70,
        t
    },
    s.suitItem_5_i = function() {
        var t = new seerSuitClothesView.SuitPopViewIconItem;
        return this.suitItem_5 = t,
        t.skinName = "seerSuitClothesView.SuitPopViewIconItemSkin",
        t.x = 105,
        t.y = 80,
        t
    },
    s._Image7_i = function() {
        var t = new eui.Image;
        return t.source = "new_suit_pop_view_img5_png",
        t.visible = !0,
        t.x = 317,
        t.y = 195,
        t
    },
    s.Txt_effTitle_i = function() {
        var t = new eui.Label;
        return this.Txt_effTitle = t,
        t.fontFamily = "MFShangHei",
        t.size = 18.0212956691731,
        t.text = "套装特效：",
        t.textColor = 13820671,
        t.x = 340,
        t.y = 208,
        t
    },
    s.scroller_desc_i = function() {
        var t = new eui.Scroller;
        return this.scroller_desc = t,
        t.height = 104,
        t.width = 360,
        t.x = 340,
        t.y = 235,
        t.viewport = this._Group3_i(),
        t
    },
    s._Group3_i = function() {
        var t = new eui.Group;
        return t.elementsContent = [this.Txt_eff_i()],
        t
    },
    s.Txt_eff_i = function() {
        var t = new eui.Label;
        return this.Txt_eff = t,
        t.fontFamily = "MFShangHei",
        t.scaleX = 1,
        t.scaleY = 1,
        t.size = 16.0189320279903,
        t.text = "赛尔们在毛线中获得套装，能驾驭狂风，借力上青云。赛尔们在毛线中获得套装，能驾驭狂风，借力上青云。赛尔们在毛线中获得套装，能驾驭狂风，借力上青云。赛尔们在毛线中获得套装啊实打实大苏打实打实大苏打实打实的赛尔们在毛线中获得套装，能驾驭狂风，借力上青云。赛尔们在毛线中获得套装，能驾驭狂风，借力上青云。赛尔们在毛线中获得套装，能驾驭狂风，借力上青云。赛尔们在毛线中获得套装啊实打实大苏打实打实大苏打实打实的",
        t.textColor = 8757203,
        t.width = 360,
        t.y = 2,
        t
    },
    s._Image8_i = function() {
        var t = new eui.Image;
        return t.source = "new_suit_pop_view_img4_png",
        t.x = 35,
        t.y = 3,
        t
    },
    s.img_yzb_i = function() {
        var t = new eui.Image;
        return this.img_yzb = t,
        t.source = "new_suit_pop_view_yzb_png",
        t.visible = !0,
        t.x = 476.5,
        t.y = 364.5,
        t
    },
    s.img_btn_zb_i = function() {
        var t = new eui.Group;
        return this.img_btn_zb = t,
        t.visible = !0,
        t.x = 453,
        t.y = 360,
        t.elementsContent = [this._Image9_i(), this._Label1_i()],
        t
    },
    s._Image9_i = function() {
        var t = new eui.Image;
        return t.source = "new_suit_pop_view_imgdress_png",
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t
    },
    s._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 22,
        t.text = "装 备",
        t.textColor = 10181146,
        t.x = 42,
        t.y = 13.766,
        t
    },
    s.scroller_suit_i = function() {
        var t = new eui.Scroller;
        return this.scroller_suit = t,
        t.height = 344,
        t.visible = !0,
        t.width = 281,
        t.x = 15,
        t.y = 73,
        t.viewport = this.viewport_list_i(),
        t
    },
    s.viewport_list_i = function() {
        var t = new eui.List;
        return this.viewport_list = t,
        t.layout = this._VerticalLayout1_i(),
        t
    },
    s._VerticalLayout1_i = function() {
        var t = new eui.VerticalLayout;
        return t.gap = 10,
        t
    },
    s.suit_grp_i = function() {
        var t = new eui.Group;
        return this.suit_grp = t,
        t.touchEnabled = !1,
        t.visible = !0,
        t.x = 4.92,
        t.y = 38.84,
        t.elementsContent = [this.groupDrop_i(), this._Image11_i(), this.editable_search_i(), this.btnSearch_i(), this.drop_i()],
        t
    },
    s.groupDrop_i = function() {
        var t = new eui.Group;
        return this.groupDrop = t,
        t.visible = !0,
        t.x = 4.92,
        t.y = 38.84,
        t.elementsContent = [this._Image10_i(), this.txtType_i(), this.imgArrow_i()],
        t
    },
    s._Image10_i = function() {
        var t = new eui.Image;
        return t.scaleX = 1,
        t.scaleY = 1,
        t.source = "new_suit_pop_view_img9_png",
        t.visible = !0,
        t.x = -4.919999999999999,
        t.y = -38.84,
        t
    },
    s.txtType_i = function() {
        var t = new eui.Label;
        return this.txtType = t,
        t.fontFamily = "MFShangHei",
        t.scaleX = 1,
        t.scaleY = 1,
        t.size = 16.0000025390989,
        t.text = "全部",
        t.textColor = 11586047,
        t.visible = !0,
        t.x = 15.079999999999998,
        t.y = -29.840000000000003,
        t
    },
    s.imgArrow_i = function() {
        var t = new eui.Image;
        return this.imgArrow = t,
        t.anchorOffsetX = 14,
        t.anchorOffsetY = 10,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "new_suit_pop_view_imgarrow_png",
        t.visible = !0,
        t.x = 78,
        t.y = -21,
        t
    },
    s._Image11_i = function() {
        var t = new eui.Image;
        return t.source = "new_suit_pop_view_img8_png",
        t.visible = !0,
        t.x = 122.08,
        t.y = 1.16,
        t
    },
    s.editable_search_i = function() {
        var t = new eui.EditableText;
        return this.editable_search = t,
        t.fontFamily = "MFShangHei",
        t.height = 20,
        t.prompt = "输入套装名字",
        t.promptColor = 6388400,
        t.size = 16,
        t.textColor = 6388400,
        t.verticalAlign = "middle",
        t.visible = !0,
        t.width = 115,
        t.x = 131.08,
        t.y = 6.16,
        t
    },
    s.btnSearch_i = function() {
        var t = new eui.Image;
        return this.btnSearch = t,
        t.source = "new_suit_pop_view_btnsearch_png",
        t.visible = !0,
        t.x = 254.08,
        t.y = 2.16,
        t
    },
    s.drop_i = function() {
        var t = new eui.Group;
        return this.drop = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.visible = !1,
        t.x = .0799999999999983,
        t.y = 31.68000000000002,
        t.elementsContent = [this._Image12_i(), this._Image13_i(), this._Image14_i(), this.txt1_i(), this.txt2_i(), this.txt3_i()],
        t
    },
    s._Image12_i = function() {
        var t = new eui.Image;
        return t.source = "new_suit_pop_view_img3_png",
        t.x = 0,
        t.y = -.52,
        t
    },
    s._Image13_i = function() {
        var t = new eui.Image;
        return t.source = "new_suit_pop_view_img1_png",
        t.x = 6,
        t.y = 40.48,
        t
    },
    s._Image14_i = function() {
        var t = new eui.Image;
        return t.source = "new_suit_pop_view_img2_png",
        t.x = 6,
        t.y = 80.48,
        t
    },
    s.txt1_i = function() {
        var t = new eui.Label;
        return this.txt1 = t,
        t.fontFamily = "MFShangHei",
        t.height = 32,
        t.left = 0,
        t.right = 0,
        t.size = 16,
        t.text = "能力",
        t.textAlign = "center",
        t.textColor = 7311052,
        t.verticalAlign = "middle",
        t.y = 3.48,
        t
    },
    s.txt2_i = function() {
        var t = new eui.Label;
        return this.txt2 = t,
        t.fontFamily = "MFShangHei",
        t.height = 32,
        t.left = 0,
        t.right = 0,
        t.size = 16,
        t.text = "炫酷",
        t.textAlign = "center",
        t.textColor = 7311052,
        t.verticalAlign = "middle",
        t.y = 44.48,
        t
    },
    s.txt3_i = function() {
        var t = new eui.Label;
        return this.txt3 = t,
        t.fontFamily = "MFShangHei",
        t.height = 32,
        t.left = 0,
        t.right = 0,
        t.size = 16,
        t.text = "变形",
        t.textAlign = "center",
        t.textColor = 7311052,
        t.verticalAlign = "middle",
        t.y = 84.48,
        t
    },
    s.suitglass_grp_i = function() {
        var t = new eui.Group;
        return this.suitglass_grp = t,
        t.visible = !1,
        t.x = 17,
        t.y = 38,
        t.elementsContent = [this.r_1_i(), this.r_2_i()],
        t
    },
    s.r_1_i = function() {
        var t = new eui.RadioButton;
        return this.r_1 = t,
        t.groupName = "suitglass_tab",
        t.height = 32,
        t.label = "RadioButton",
        t.value = "1",
        t.width = 100,
        t.x = 0,
        t.y = 0,
        t.skinName = i,
        t
    },
    s.r_2_i = function() {
        var t = new eui.RadioButton;
        return this.r_2 = t,
        t.groupName = "suitglass_tab",
        t.height = 32,
        t.label = "RadioButton",
        t.value = "2",
        t.width = 100,
        t.x = 101,
        t.y = 0,
        t.skinName = n,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/SuitPopItemSkin.exml"] = window.seerSuitClothesView.SuitPopItemSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["img_select", "txt_name", "Icon_UP"],
        this.elementsContent = [this.img_select_i(), this.txt_name_i(), this.Icon_UP_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.img_select_i = function() {
        var t = new eui.Image;
        return this.img_select = t,
        t.source = "new_suit_pop_view_imgselected_png",
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t
    },
    i.txt_name_i = function() {
        var t = new eui.Label;
        return this.txt_name = t,
        t.fontFamily = "MFShangHei",
        t.height = 60,
        t.size = 20,
        t.text = "套装名字套装名字十字",
        t.textColor = 15857151,
        t.verticalAlign = "middle",
        t.width = 200,
        t.x = 35,
        t.y = 2,
        t
    },
    i.Icon_UP_i = function() {
        var t = new eui.Image;
        return this.Icon_UP = t,
        t.source = "new_clothes_warehouse_pop_imgup_png",
        t.x = .525,
        t.y = 12.812,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/SuitPopViewSkin.exml"] = window.seerSuitClothesView.SuitPopViewSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["title", "close", "bg", "img_yzb", "img_btn_zb", "txt_nameTitle", "viewport_list", "scroller_suit", "suitItem_0", "suitItem_1", "suitItem_2", "suitItem_3", "suitItem_4", "grp_suitIcon", "Txt_eff", "scroller_desc", "empty", "img", "Grp_noFind", "Searchbg", "btnSearch", "editable_search", "Search"],
        this.height = 538,
        this.width = 938,
        this.elementsContent = [this.bg_i(), this._Image5_i(), this._Image6_i(), this._Image7_i(), this._Image8_i(), this.img_yzb_i(), this.img_btn_zb_i(), this.txt_nameTitle_i(), this._Label1_i(), this._Label2_i(), this.scroller_suit_i(), this._Group2_i(), this.scroller_desc_i(), this.Grp_noFind_i(), this.Search_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.bg_i = function() {
        var t = new eui.Group;
        return this.bg = t,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image1_i(), this._Image2_i(), this._Image3_i(), this._Image4_i(), this.title_i(), this.close_i()],
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
        t.width = 623,
        t.x = 303,
        t.y = 32,
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.height = 479,
        t.source = "common_s9_pop_bg3_png",
        t.width = 293,
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
    i.title_i = function() {
        var t = new eui.Image;
        return this.title = t,
        t.source = "suit_pop_view_title_tz_png",
        t.x = 48,
        t.y = 19,
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
    i._Image5_i = function() {
        var t = new eui.Image;
        return t.height = 33,
        t.source = "title_pop_textrue_2_png",
        t.width = 412,
        t.x = 412,
        t.y = 79,
        t
    },
    i._Image6_i = function() {
        var t = new eui.Image;
        return t.height = 1,
        t.source = "common_line_01_s9_png",
        t.width = 470,
        t.x = 380,
        t.y = 127,
        t
    },
    i._Image7_i = function() {
        var t = new eui.Image;
        return t.height = 1,
        t.source = "common_line_01_s9_png",
        t.width = 470,
        t.x = 380,
        t.y = 252,
        t
    },
    i._Image8_i = function() {
        var t = new eui.Image;
        return t.height = 1,
        t.source = "common_line_01_s9_png",
        t.width = 470,
        t.x = 380,
        t.y = 428,
        t
    },
    i.img_yzb_i = function() {
        var t = new eui.Image;
        return this.img_yzb = t,
        t.height = 40,
        t.source = "suit_pop_view_img_yzb_png",
        t.visible = !0,
        t.width = 120,
        t.x = 555,
        t.y = 455,
        t
    },
    i.img_btn_zb_i = function() {
        var t = new eui.Image;
        return this.img_btn_zb = t,
        t.height = 40,
        t.source = "suit_pop_view_img_btn_zb_png",
        t.visible = !0,
        t.width = 120,
        t.x = 555,
        t.y = 455,
        t
    },
    i.txt_nameTitle_i = function() {
        var t = new eui.Label;
        return this.txt_nameTitle = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 22,
        t.text = "套装名称",
        t.textColor = 16777215,
        t.x = 572,
        t.y = 85,
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "HuaKangXinZongYi",
        t.size = 22,
        t.text = "包含部件",
        t.textColor = 3492213,
        t.x = 382,
        t.y = 144,
        t
    },
    i._Label2_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "HuaKangXinZongYi",
        t.size = 22,
        t.text = "套装特效",
        t.textColor = 3492213,
        t.x = 380,
        t.y = 269,
        t
    },
    i.scroller_suit_i = function() {
        var t = new eui.Scroller;
        return this.scroller_suit = t,
        t.height = 375,
        t.scrollPolicyH = "off",
        t.width = 306,
        t.x = 8,
        t.y = 135,
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
        t.x = 0,
        t.y = 0,
        t.layout = this._VerticalLayout1_i(),
        t
    },
    i._VerticalLayout1_i = function() {
        var t = new eui.VerticalLayout;
        return t.gap = -7,
        t
    },
    i._Group2_i = function() {
        var t = new eui.Group;
        return t.height = 64,
        t.width = 454,
        t.x = 409,
        t.y = 175,
        t.elementsContent = [this.grp_suitIcon_i()],
        t
    },
    i.grp_suitIcon_i = function() {
        var t = new eui.Group;
        return this.grp_suitIcon = t,
        t.height = 64,
        t.horizontalCenter = 0,
        t.scaleX = 1,
        t.scaleY = 1,
        t.verticalCenter = 0,
        t.visible = !0,
        t.layout = this._HorizontalLayout1_i(),
        t.elementsContent = [this.suitItem_0_i(), this.suitItem_1_i(), this.suitItem_2_i(), this.suitItem_3_i(), this.suitItem_4_i()],
        t
    },
    i._HorizontalLayout1_i = function() {
        var t = new eui.HorizontalLayout;
        return t.gap = 14,
        t
    },
    i.suitItem_0_i = function() {
        var t = new seerSuitClothesView.SuitPopViewIconItem;
        return this.suitItem_0 = t,
        t.skinName = "seerSuitClothesView.SuitPopViewIconItemSkin",
        t.x = 55,
        t.y = 30,
        t
    },
    i.suitItem_1_i = function() {
        var t = new seerSuitClothesView.SuitPopViewIconItem;
        return this.suitItem_1 = t,
        t.skinName = "seerSuitClothesView.SuitPopViewIconItemSkin",
        t.x = 65,
        t.y = 40,
        t
    },
    i.suitItem_2_i = function() {
        var t = new seerSuitClothesView.SuitPopViewIconItem;
        return this.suitItem_2 = t,
        t.skinName = "seerSuitClothesView.SuitPopViewIconItemSkin",
        t.x = 75,
        t.y = 50,
        t
    },
    i.suitItem_3_i = function() {
        var t = new seerSuitClothesView.SuitPopViewIconItem;
        return this.suitItem_3 = t,
        t.skinName = "seerSuitClothesView.SuitPopViewIconItemSkin",
        t.x = 85,
        t.y = 60,
        t
    },
    i.suitItem_4_i = function() {
        var t = new seerSuitClothesView.SuitPopViewIconItem;
        return this.suitItem_4 = t,
        t.skinName = "seerSuitClothesView.SuitPopViewIconItemSkin",
        t.x = 95,
        t.y = 70,
        t
    },
    i.scroller_desc_i = function() {
        var t = new eui.Scroller;
        return this.scroller_desc = t,
        t.height = 113,
        t.width = 402,
        t.x = 414,
        t.y = 299,
        t.viewport = this._Group3_i(),
        t
    },
    i._Group3_i = function() {
        var t = new eui.Group;
        return t.elementsContent = [this.Txt_eff_i()],
        t
    },
    i.Txt_eff_i = function() {
        var t = new eui.Label;
        return this.Txt_eff = t,
        t.lineSpacing = 18,
        t.scaleX = 1,
        t.scaleY = 1,
        t.size = 16,
        t.text = "称号特效文本说明文字称号特效文本说明文字称号特效文本说明文字称号特效文本说明文字\n称号特效文本说明文字称号特效文本说明文字称号特效文本说明文字称号特效文本说明文字\n",
        t.textAlign = "left",
        t.textColor = 3492213,
        t.width = 402,
        t.x = 0,
        t.y = 0,
        t
    },
    i.Grp_noFind_i = function() {
        var t = new eui.Group;
        return this.Grp_noFind = t,
        t.visible = !0,
        t.x = 106,
        t.y = 257,
        t.elementsContent = [this.empty_i(), this.img_i()],
        t
    },
    i.empty_i = function() {
        var t = new eui.Label;
        return this.empty = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 22,
        t.text = "未找到套装",
        t.textColor = 7443670,
        t.x = 0,
        t.y = 67,
        t
    },
    i.img_i = function() {
        var t = new eui.Image;
        return this.img = t,
        t.height = 59,
        t.source = "playerInfo_title_pop_img_png",
        t.width = 97,
        t.x = 4,
        t.y = 0,
        t
    },
    i.Search_i = function() {
        var t = new eui.Group;
        return this.Search = t,
        t.x = 21,
        t.y = 68,
        t.elementsContent = [this.Searchbg_i(), this.btnSearch_i(), this.editable_search_i()],
        t
    },
    i.Searchbg_i = function() {
        var t = new eui.Image;
        return this.Searchbg = t,
        t.height = 40,
        t.source = "playerInfo_title_pop_Searchbg_png",
        t.width = 281,
        t.x = 0,
        t.y = 0,
        t
    },
    i.btnSearch_i = function() {
        var t = new eui.Image;
        return this.btnSearch = t,
        t.height = 38,
        t.source = "playerInfo_title_pop_btnSearch_png",
        t.width = 38,
        t.x = 242,
        t.y = 1,
        t
    },
    i.editable_search_i = function() {
        var t = new eui.EditableText;
        return this.editable_search = t,
        t.prompt = "输入套装名字",
        t.size = 18,
        t.textColor = 13097725,
        t.verticalAlign = "middle",
        t.x = 9,
        t.y = 5,
        t
    },
    e
} (eui.Skin);