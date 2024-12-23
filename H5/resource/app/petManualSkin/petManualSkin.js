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
petManualSkin; !
function(t) {
    var e = function(e) {
        function i(t) {
            var i = e.call(this, t) || this;
            i._itemWidth = 200,
            i._itemHeigth = 290,
            i._isMove = !1,
            "number" == typeof t ? i._petId = t: (i._petId = t.monId, i._firstSelectedId = t.skinPetId);
            for (var n = PetSkinInfo.getPetDefaultSkin(i._petId), _ = [n], s = PetSkinXMLInfo.getSkinInfosByPetId(i._petId), o = 0; o < s.length; o++) _.push(s[o]);
            return i._firstSelectedId || (i._firstSelectedId = _[0].skinPetId),
            _.unshift(null),
            _.push(null),
            i._skinList = _,
            i._arryCol = new eui.ArrayCollection,
            i.skinName = PetManualSkinSkin,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            if (e.prototype.childrenCreated.call(this), this.petModel.SetInitComp(core.component.pet.PetModel.DYNAMIC_MODEL, !1, !1), this._petBigShow = new PetStaticModel, this._petBigShow.setSize(586, 405), this._petBigShow.setPetMaxScale(1.5), this.bigPetStyle.addChild(this._petBigShow), this._customScroller = new common.ui.CustomScroller(this.viewport_list.width, this.viewport_list.height, this._itemWidth, this._itemHeigth, this.viewport_list.layout.gap, t.SkinItem, 150, .8, 1, 1, 1, this.viewport_list, this._arryCol, 100, null, common.ui.CustomScroller.DIR_TO_H), this.group_right.addChild(this._customScroller), this._customScroller.x = this.viewport_list.x, this._customScroller.y = this.viewport_list.y, this._arryCol.replaceAll(this._skinList), this.addEvents(), !this._currentSkinInfo) for (var i = 0; i < this._skinList.length; i++) if (this._skinList[i] && this._skinList[i].skinPetId === this._firstSelectedId) {
                this._currentSkinInfo = this._skinList[i];
                break
            }
            this._selectSkinIndex = this._arryCol.getItemIndex(this._currentSkinInfo),
            this.setArrowStatus(),
            this._customScroller.goToNum(this._selectSkinIndex, 150),
            this._updateView()
        },
        i.prototype.addEvents = function() {
            ImageButtonUtil.add(this.imgBtn_close2, this._onTouchImageButton, this),
            ImageButtonUtil.add(this.img_btn_close, this._onTouchImageButton, this),
            ImageButtonUtil.add(this.imgBtn_jumpPet, this._onTouchImageButton, this),
            ImageButtonUtil.add(this.imgBtn_show, this._onTouchImageButton, this),
            ImageButtonUtil.add(this.imgBtn_hd, this._onTouchImageButton, this),
            ImageButtonUtil.add(this.imgBtn_left, this._onTouchImageButton, this),
            ImageButtonUtil.add(this.imgBtn_right, this._onTouchImageButton, this),
            this._customScroller.addEventListener(common.ui.CustomScroller.EVENT_CHANGE_END, this._onChangeScroller, this)
        },
        i.prototype._onChangeScroller = function() {
            this._isMove = !1,
            this._selectSkinIndex = this._customScroller.getSelectIndex();
            var t = this._arryCol.getItemAt(this._selectSkinIndex);
            this._currentSkinInfo = t;
            for (var e = 0; e < this.viewport_list.numChildren; e++) {
                var i = this.viewport_list.getChildAt(e);
                i.setSelect(t === i.data)
            }
            this._updateView(),
            this.setArrowStatus()
        },
        i.prototype.setArrowStatus = function() {
            this.imgBtn_left.visible = this._selectSkinIndex > 1,
            this.imgBtn_right.visible = this._selectSkinIndex < this._arryCol.length - 2
        },
        i.prototype._updateView = function() {
            this._selectSkinIndex = this._customScroller.getSelectIndex();
            var t = this._arryCol.getItemAt(this._selectSkinIndex),
            e = PetXMLInfo.getName(t.monId),
            i = PetSkinXMLInfo.getTypeCn(t.type),
            n = t.name,
            _ = 0 === t.type;
            _ ? (this.txt_line1.text = "默认形象", this.txt_line2.text = "", this.txt_line3.text = "原型精灵:" + e) : (this.txt_line1.text = i + "皮肤：" + n, this.txt_line2.text = "原型精灵:" + e, void 0 === t.type ? this.txt_line3.text = "精灵经典形象": t.shopId ? this.txt_line3.text = "购买获得": t.go || t.goType ? this.txt_line3.text = "兑换获得": this.txt_line3.text = "通过限时活动获得"),
            this.petModel.SetPetData(t.skinPetId);
            var s = PetSkinController.instance.haveSkin(t.id),
            o = 0 == t.shopId && "" == t.go && "" == t.goType;
            this.imgBtn_hd.visible = !o,
            this.img_jueban.visible = o,
            DisplayUtil.setEnabled(this.imgBtn_hd, s, !s)
        },
        i.prototype.removeEvents = function() {
            this._customScroller.removeEventListener(common.ui.CustomScroller.EVENT_CHANGE_END, this._onChangeScroller, this),
            ImageButtonUtil.removeAll(this)
        },
        i.prototype._onTouchImageButton = function(t) {
            switch (t.currentTarget) {
            case this.imgBtn_close2:
                this._hideBigView();
                break;
            case this.img_btn_close:
                this.onClose();
                break;
            case this.imgBtn_jumpPet:
                ModuleManager.showModule("petManualInfo", ["pet_info_manual"], this._petId, "", AppDoStyle.DESTROY);
                break;
            case this.imgBtn_show:
                AwardManager.ShowTmpPetSkinDiaolg(this._currentSkinInfo);
                break;
            case this.imgBtn_hd:
                Alarm.show("暂未开放");
                break;
            case this.imgBtn_left:
                this.onChangeSkin("left");
                break;
            case this.imgBtn_right:
                this.onChangeSkin("right")
            }
        },
        i.prototype.onChangeSkin = function(t) {
            this._isMove || ("left" === t ? this._selectSkinIndex = Math.max(1, --this._selectSkinIndex) : this._selectSkinIndex = Math.min(this._arryCol.length - 2, ++this._selectSkinIndex), this.setArrowStatus(), this._isMove = !0, this._customScroller.goToNum(this._selectSkinIndex, 150))
        },
        i.prototype._openBigView = function() {
            this.addChildAt(this.grp_big, this.numChildren),
            this.grp_big.visible = !0;
            var t = this._currentSkinInfo.type || 0;
            this._petBigShow.setPetStyleById(this._currentSkinInfo.skinPetId),
            this.img_title.source = "common_pet_skin_icon_" + t + "_png",
            this.txt_name.text = this._currentSkinInfo.name
        },
        i.prototype._hideBigView = function() {
            this.grp_big.visible = !1
        },
        i.prototype.destroy = function() {
            this.petModel.destroy(),
            this.removeEvents(),
            e.prototype.destroy.call(this)
        },
        i
    } (BaseModule);
    t.PetManualSkin = e,
    __reflect(e.prototype, "petManualSkin.PetManualSkin")
} (petManualSkin || (petManualSkin = {}));
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
petManualSkin; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.skinName = t.ItemSkinRenderSkin,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this._petShow = new PetStaticModel,
            this._petShow.setSize(184, 190),
            this._petShow.setPetMaxScale(1),
            this.petPosition.addChild(this._petShow),
            this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this)
        },
        i.prototype.setSelect = function(t) {
            this.select_img.visible = t
        },
        i.prototype.dataChanged = function() {
            var t = this;
            if (!this.data) return void(this.visible = !1);
            this.visible = !0,
            this.lab_name.text = this.data.name;
            var e = this.data,
            i = e.type;
            this.img_ys.source = "common_pet_skin_icon_" + i + "_png";
            var n;
            n = ~~e.id > 0 ? ClientConfig.getPetHalfIcon(e.id + 14e5) : ClientConfig.getPetHalfIcon(e.skinPetId),
            this.icon_skin.visible = this._petShow.visible = !1,
            RES.getResByUrl(n).then(function(e) {
                t.icon_skin.source = e,
                t.icon_skin.visible = !0
            })["catch"](function() {
                t.data && (t._petShow.setPetStyleById(t.data.skinPetId), t._petShow.visible = !0)
            })
        },
        i.prototype.destroy = function() {
            this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this)
        },
        i
    } (eui.ItemRenderer);
    t.SkinItem = e,
    __reflect(e.prototype, "petManualSkin.SkinItem")
} (petManualSkin || (petManualSkin = {})),
window.petManualSkin = window.petManualSkin || {};
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
generateEUI.paths["resource/eui_skins/ItemSkinRenderSkin.exml"] = window.petManualSkin.ItemSkinRenderSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "icon_skin", "petPosition", "name_bg", "lab_name", "img_ys", "select_img", "grp_item"],
        this.height = 290,
        this.width = 200,
        this.elementsContent = [this.grp_item_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.grp_item_i = function() {
        var t = new eui.Group;
        return this.grp_item = t,
        t.anchorOffsetX = 100,
        t.anchorOffsetY = 145,
        t.scaleX = 1,
        t.scaleY = 1,
        t.x = 100,
        t.y = 145,
        t.elementsContent = [this.bg_i(), this.icon_skin_i(), this.petPosition_i(), this.name_bg_i(), this.lab_name_i(), this.img_ys_i(), this.select_img_i()],
        t
    },
    i.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.height = 270,
        t.source = "pet_manual_ski_render_bg_png",
        t.width = 180,
        t.x = 10,
        t.y = 10,
        t
    },
    i.icon_skin_i = function() {
        var t = new eui.Image;
        return this.icon_skin = t,
        t.height = 270,
        t.width = 180,
        t.x = 10,
        t.y = 10,
        t
    },
    i.petPosition_i = function() {
        var t = new eui.Group;
        return this.petPosition = t,
        t.x = 101,
        t.y = 229,
        t
    },
    i.name_bg_i = function() {
        var t = new eui.Image;
        return this.name_bg = t,
        t.height = 51,
        t.source = "pet_manual_skin_render_name_bg_png",
        t.width = 179,
        t.x = 12,
        t.y = 230,
        t
    },
    i.lab_name_i = function() {
        var t = new eui.Label;
        return this.lab_name = t,
        t.size = 18,
        t.text = "精灵皮肤名字巴拉",
        t.textAlign = "center",
        t.textColor = 16772257,
        t.width = 180,
        t.x = 11,
        t.y = 260,
        t
    },
    i.img_ys_i = function() {
        var t = new eui.Image;
        return this.img_ys = t,
        t.scaleX = .7,
        t.scaleY = .7,
        t.source = "common_pet_skin_icon_0_png",
        t.x = 9.94,
        t.y = 10.8,
        t
    },
    i.select_img_i = function() {
        var t = new eui.Image;
        return this.select_img = t,
        t.source = "pet_manual_ski_render_select_bg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/PetManualSkinSkin.exml"] = window.PetManualSkinSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["imgBtn_jumpPet", "txt_bg_name", "txt_line1", "txt_line3", "txt_line2", "viewport_list", "imgBtn_hd", "img_jueban", "imgBtn_left", "imgBtn_right", "group_right", "petModel", "imgBtn_show", "img_btn_close", "top", "img_petStyle", "name_bg", "txt_name", "grp_name", "imgBtn_close2", "img_title", "bigPetStyle", "grp_big"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this._Image1_i(), this.imgBtn_jumpPet_i(), this.group_right_i(), this._Group2_i(), this.top_i(), this.grp_big_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.horizontalCenter = 0,
        t.scale9Grid = new egret.Rectangle(961, 0, 33, 640),
        t.source = "common_ui_bg_2_png",
        t.y = 0,
        t
    },
    i.imgBtn_jumpPet_i = function() {
        var t = new eui.Image;
        return this.imgBtn_jumpPet = t,
        t.bottom = 20,
        t.height = 92,
        t.left = 12,
        t.source = "pet_manual_skin_imgBtn_jumpPet_png",
        t.width = 83,
        t
    },
    i.group_right_i = function() {
        var t = new eui.Group;
        return this.group_right = t,
        t.bottom = 0,
        t.height = 591,
        t.right = 0,
        t.width = 521,
        t.elementsContent = [this._Image2_i(), this._Image3_i(), this.txt_bg_name_i(), this._Group1_i(), this.viewport_list_i(), this.imgBtn_hd_i(), this.img_jueban_i(), this.imgBtn_left_i(), this.imgBtn_right_i()],
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 591,
        t.source = "common_right_bg_png",
        t.width = 525,
        t.x = -4,
        t.y = 0,
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.height = 109,
        t.source = "common_texture_002_png",
        t.width = 484,
        t.x = 19,
        t.y = 70,
        t
    },
    i.txt_bg_name_i = function() {
        var t = new eui.Label;
        return this.txt_bg_name = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 30,
        t.text = "皮肤",
        t.textColor = 16777215,
        t.x = 32,
        t.y = 24,
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.x = 33,
        t.y = 82,
        t.elementsContent = [this.txt_line1_i(), this.txt_line3_i(), this.txt_line2_i(), this._Image4_i(), this._Image5_i()],
        t
    },
    i.txt_line1_i = function() {
        var t = new eui.Label;
        return this.txt_line1 = t,
        t.fontFamily = "黑体",
        t.size = 18,
        t.text = "精灵名称应该有十个字",
        t.textColor = 16777215,
        t.x = 27,
        t.y = 1,
        t
    },
    i.txt_line3_i = function() {
        var t = new eui.Label;
        return this.txt_line3 = t,
        t.fontFamily = "黑体",
        t.size = 18,
        t.text = "通过限时活动获得",
        t.textColor = 16777215,
        t.x = 27,
        t.y = 62,
        t
    },
    i.txt_line2_i = function() {
        var t = new eui.Label;
        return this.txt_line2 = t,
        t.fontFamily = "黑体",
        t.size = 18,
        t.text = "[皮肤品级]皮肤：精灵皮肤名称有十个字",
        t.textColor = 16777215,
        t.x = 27,
        t.y = 29,
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.height = 20,
        t.source = "pet_manual_skin_texture_point_png",
        t.width = 20,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Image5_i = function() {
        var t = new eui.Image;
        return t.height = 20,
        t.source = "pet_manual_skin_texture_point_png",
        t.width = 20,
        t.x = 0,
        t.y = 61,
        t
    },
    i.viewport_list_i = function() {
        var t = new eui.List;
        return this.viewport_list = t,
        t.height = 290,
        t.width = 400,
        t.x = 61,
        t.y = 204,
        t.layout = this._HorizontalLayout1_i(),
        t
    },
    i._HorizontalLayout1_i = function() {
        var t = new eui.HorizontalLayout;
        return t.gap = -70,
        t.paddingTop = 0,
        t
    },
    i.imgBtn_hd_i = function() {
        var t = new eui.Image;
        return this.imgBtn_hd = t,
        t.height = 50,
        t.source = "pet_manual_skin_imgBtn_hd_png",
        t.visible = !1,
        t.width = 174,
        t.x = 174,
        t.y = 515,
        t
    },
    i.img_jueban_i = function() {
        var t = new eui.Image;
        return this.img_jueban = t,
        t.height = 52,
        t.source = "pet_manual_skin_img_jueban_png",
        t.width = 196,
        t.x = 163,
        t.y = 512,
        t
    },
    i.imgBtn_left_i = function() {
        var t = new eui.Image;
        return this.imgBtn_left = t,
        t.height = 79,
        t.source = "pet_manual_skin_imgBtn_left_png",
        t.width = 57,
        t.x = 8,
        t.y = 319,
        t
    },
    i.imgBtn_right_i = function() {
        var t = new eui.Image;
        return this.imgBtn_right = t,
        t.height = 79,
        t.source = "pet_manual_skin_imgBtn_right_png",
        t.width = 57,
        t.x = 456,
        t.y = 319,
        t
    },
    i._Group2_i = function() {
        var t = new eui.Group;
        return t.bottom = 0,
        t.height = 640,
        t.horizontalCenter = -188,
        t.touchEnabled = !1,
        t.width = 760,
        t.elementsContent = [this.petModel_i(), this.imgBtn_show_i()],
        t
    },
    i.petModel_i = function() {
        var t = new core.component.pet.PetModel;
        return this.petModel = t,
        t.touchEnabled = !1,
        t
    },
    i.imgBtn_show_i = function() {
        var t = new eui.Image;
        return this.imgBtn_show = t,
        t.height = 67,
        t.right = 158,
        t.source = "pet_manual_skin_imgBtn_show_png",
        t.width = 67,
        t.y = 550,
        t
    },
    i.top_i = function() {
        var t = new eui.Group;
        return this.top = t,
        t.left = 0,
        t.right = 0,
        t.top = 0,
        t.elementsContent = [this._Image6_i(), this._Image7_i(), this.img_btn_close_i()],
        t
    },
    i._Image6_i = function() {
        var t = new eui.Image;
        return t.left = 0,
        t.right = 0,
        t.source = "common_top_bg_style1_png",
        t.top = 0,
        t
    },
    i._Image7_i = function() {
        var t = new eui.Image;
        return t.height = 35,
        t.source = "pet_manual_skin_title_png",
        t.width = 126,
        t.x = 112,
        t.y = 7,
        t
    },
    i.img_btn_close_i = function() {
        var t = new eui.Image;
        return this.img_btn_close = t,
        t.height = 50,
        t.source = "common_close_2_png",
        t.width = 100,
        t.x = 0,
        t.y = 0,
        t
    },
    i.grp_big_i = function() {
        var t = new eui.Group;
        return this.grp_big = t,
        t.visible = !1,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image8_i(), this.img_petStyle_i(), this.grp_name_i(), this.imgBtn_close2_i(), this.img_title_i(), this.bigPetStyle_i()],
        t
    },
    i._Image8_i = function() {
        var t = new eui.Image;
        return t.height = 640,
        t.source = "pet_manual_skin_img_bigBg_png",
        t.width = 1136,
        t.x = 0,
        t.y = 0,
        t
    },
    i.img_petStyle_i = function() {
        var t = new eui.Image;
        return this.img_petStyle = t,
        t.height = 597,
        t.source = "pet_manual_skin_img_petStyle_png",
        t.visible = !1,
        t.width = 731,
        t.x = 290,
        t.y = 21,
        t
    },
    i.grp_name_i = function() {
        var t = new eui.Group;
        return this.grp_name = t,
        t.x = 0,
        t.y = 407,
        t.elementsContent = [this.name_bg_i(), this.txt_name_i()],
        t
    },
    i.name_bg_i = function() {
        var t = new eui.Image;
        return this.name_bg = t,
        t.height = 233,
        t.source = "pet_manual_skin_name_bg_png",
        t.width = 929,
        t.x = 0,
        t.y = 0,
        t
    },
    i.txt_name_i = function() {
        var t = new eui.Label;
        return this.txt_name = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 24,
        t.text = "皮肤名字名字",
        t.textColor = 16777215,
        t.x = 141,
        t.y = 180,
        t
    },
    i.imgBtn_close2_i = function() {
        var t = new eui.Image;
        return this.imgBtn_close2 = t,
        t.height = 54,
        t.source = "pet_manual_skin_imgBtn_close2_png",
        t.width = 56,
        t.x = 1079,
        t.y = 0,
        t
    },
    i.img_title_i = function() {
        var t = new eui.Image;
        return this.img_title = t,
        t.height = 44,
        t.source = "common_pet_skin_icon_0_png",
        t.width = 140,
        t.x = 0,
        t.y = 559,
        t
    },
    i.bigPetStyle_i = function() {
        var t = new eui.Group;
        return this.bigPetStyle = t,
        t.x = 557,
        t.y = 602,
        t
    },
    e
} (eui.Skin);