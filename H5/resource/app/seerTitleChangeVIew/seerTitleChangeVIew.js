var __reflect = this && this.__reflect ||
function(e, t, i) {
    e.__class__ = t,
    i ? i.push(t) : i = [t],
    e.__types__ = e.__types__ ? i.concat(e.__types__) : i
},
__extends = this && this.__extends ||
function(e, t) {
    function i() {
        this.constructor = e
    }
    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
    i.prototype = t.prototype,
    e.prototype = new i
},
seerTitleChangeVIew; !
function(e) {
    var t = function(t) {
        function i(e) {
            var i = t.call(this, e) || this;
            return i._custumData = e,
            i.skinName = "TitlePopSkin",
            i
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            var i = this;
            t.prototype.childrenCreated.call(this),
            this._ary = new eui.ArrayCollection,
            this.viewport_list.itemRenderer = e.TitlePageRenderItem,
            this.viewport_list.dataProvider = this._ary,
            this.Grp_noFind.visible = !1,
            this.requestTitleInfo(function(e) {
                i._initRenderList(e),
                i.initEvents()
            },
            this),
            GameInfo.isChecking && (this.grp_info.y = 44, this.grp_intro.visible = !1)
        },
        i.prototype.initEvents = function() {
            var e = this;
            this.viewport_list.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.onTouchTapItemRenderHandle, this),
            ImageButtonUtil.add(this.btnClose, this.onTouchIamgeButtonHandler, this),
            ImageButtonUtil.add(this.img_btn_th, this._changeTitle, this),
            ImageButtonUtil.add(this.img_btn_yc, this._changeTitle, this),
            this.editable_search.addEventListener(egret.Event.CHANGE, this._onEditableChangeHandler, this),
            ImageButtonUtil.add(this.noUpTitleUp,
            function() {
                e.noUpTitleUp.visible = e.hasUpTitleDown.visible = !1,
                e.noUpTitleDown.visible = e.hasUpTitleUp.visible = !0;
                var t = e._parseTileRenderData().filter(function(e) {
                    return ! e.isAbility
                });
                e.afterFilter(t)
            },
            this),
            ImageButtonUtil.add(this.hasUpTitleUp,
            function() {
                e.noUpTitleDown.visible = e.hasUpTitleUp.visible = !1,
                e.noUpTitleUp.visible = e.hasUpTitleDown.visible = !0;
                var t = e._parseTileRenderData().filter(function(e) {
                    return e.isAbility
                });
                e.afterFilter(t)
            },
            this)
        },
        i.prototype.afterFilter = function(e) {
            this._ary.replaceAll(e),
            this._ary.refresh(),
            this.editable_search.text = null,
            this.Grp_noFind.visible = !e.length
        },
        i.prototype.removeEvents = function() {
            this.editable_search.removeEventListener(egret.Event.CHANGE, this._onEditableChangeHandler, this),
            this.viewport_list.removeEventListener(eui.ItemTapEvent.ITEM_TAP, this.onTouchTapItemRenderHandle, this),
            ImageButtonUtil.removeAll(this)
        },
        i.prototype.onTouchIamgeButtonHandler = function(e) {
            switch (e.target) {
            case this.btnClose:
                this.onClose();
                break;
            case this.img_btn_th:
                this._changeTitle();
                break;
            case this.img_btn_yc:
                this._changeTitle()
            }
        },
        i.prototype._initRenderList = function(e) {
            this._cecheTileIds = e,
            this.updateRender(),
            this.viewport_list.selectedIndex = 0,
            this._selectVo = this._ary.getItemAt(this.viewport_list.selectedIndex),
            this.currentSelectTitleInfo()
        },
        i.prototype.updateRender = function() {
            var e = this,
            t = this._parseTileRenderData();
            if ("" !== this.editable_search.text) {
                var i = this.editable_search.text.trim();
                t = t.filter(function(e) {
                    return 0 !== e.titleId && SearchUtil.isMatch(i, e.titileName) ? !0 : !1
                }),
                this.Grp_noFind.visible = 0 === t.length
            }
            this._ary.replaceAll(t),
            this._ary.refresh(),
            egret.setTimeout(function() {
                e.viewport_list.selectedIndex = e.isDressingHide ? 0 : 1,
                e._selectVo = e.viewport_list.selectedItem,
                e.currentSelectTitleInfo()
            },
            this, 0)
        },
        i.prototype.onTouchTapItemRenderHandle = function(e) {
            this._selectVo = e.item,
            this.currentSelectTitleInfo()
        },
        i.prototype.currentSelectTitleInfo = function() {
            if (this._selectVo && (this.grp_titleInfo.visible = this._selectVo.titleId > 0, this.grp_yc.visible = this._selectVo.titleId <= 0, this.img_yzb.visible = this._selectVo.isActivate, this.img_btn_th.visible = !this._selectVo.isActivate && this._selectVo.titleId > 0, this.img_btn_yc.visible = !this._selectVo.isActivate && this._selectVo.titleId <= 0, this._selectVo.titleId > 0)) {
                this.txtName.text = this._selectVo.titileName,
                this.txtAchieve.text = AchieveXMLInfo.getTitleDesc(this._selectVo.titleId);
                var e = AchieveXMLInfo.getTitleEffDesc(this._selectVo.titleId);
                e && "无称号特效" != e ? (this.txtEff.visible = !0, this.txtNoEff.visible = !1) : (e = "", this.txtEff.visible = !1, this.txtNoEff.visible = !0),
                this.txtEffect.text = e;
                var t = AchieveXMLInfo.getTitleColor(this._selectVo.titleId);
                this.imgIcon.source = 0 != t ? ClientConfig.getAchieveTitleIcon(this._selectVo.titleId) : ClientConfig.getAchieveIcon(AchieveXMLInfo.getTitleIconId(this._selectVo.titleId))
            }
        },
        i.prototype._parseTileRenderData = function() {
            var e = [],
            t = this._custumData.getCurrentTitleIdFunc.apply(this._custumData.caller, null),
            i = {};
            if (i.titleId = 0, i.isAbility = !1, i.isActivate = 0 >= t, i.titileName = "", e.push(i), this.isDressingHide = 0 >= t, t > 0) {
                var n = {};
                n.titleId = t,
                n.isActivate = !0,
                n.isAbility = AchieveXMLInfo.isAbilityTitle(t),
                n.titileName = AchieveXMLInfo.getTitle(t),
                e.push(n)
            }
            for (var s = 0; s < this._cecheTileIds.length; s++) if (this._cecheTileIds[s] !== t) {
                var r = {};
                r.titleId = this._cecheTileIds[s],
                r.isActivate = !1,
                r.isAbility = AchieveXMLInfo.isAbilityTitle(this._cecheTileIds[s]),
                r.titileName = AchieveXMLInfo.getTitle(this._cecheTileIds[s]),
                e.push(r)
            }
            return e
        },
        i.prototype.requestTitleInfo = function(e, t) {
            SocketConnection.sendWithCallback(CommandID.ACHIEVETITLELIST,
            function(i) {
                var n = new AchieveTitleInfo(i.data),
                s = n.titleArr;
                e.apply(t, [s])
            })
        },
        i.prototype.onUserChangedTileHanlder = function(e) {
            this.updateRender(),
            this.scroller_title.stopAnimation(),
            this.scroller_title.viewport.scrollV = 0,
            this.viewport_list.selectedIndex = 0,
            this._selectVo = this._ary.getItemAt(this.viewport_list.selectedIndex),
            this.currentSelectTitleInfo()
        },
        i.prototype._changeTitle = function() {
            var e, t = this,
            i = this._selectVo;
            e = i.titleId <= 0 ? "确认要隐藏称号吗？": "你确认要将当前称号换成" + this._selectVo.titileName + "吗？",
            this._custumData.isSimpleClose ? this._custumData.onChangeHandler.apply(this._custumData.caller, [i]).then(function() {
                t.onClose(),
                BubblerManager.getInstance().showText("称号更换成功！")
            }) : Alert.show(e,
            function() {
                t._custumData.onChangeHandler.apply(t._custumData.caller, [i]).then(function() {
                    BubblerManager.getInstance().showText("称号更换成功！"),
                    t.onUserChangedTileHanlder(null),
                    t.noUpTitleDown.visible = t.hasUpTitleDown.visible = !1,
                    t.noUpTitleUp.visible = t.hasUpTitleUp.visible = !0,
                    t.editable_search.text = null,
                    t.updateRender()
                })
            })
        },
        i.prototype._onSearCh = function() {
            this.updateRender(),
            this.noUpTitleDown.visible = this.hasUpTitleDown.visible = !1,
            this.noUpTitleUp.visible = this.hasUpTitleUp.visible = !0
        },
        i.prototype._onEditableChangeHandler = function(e) {
            "" === this.editable_search.text ? (this.updateRender(), this.Grp_noFind.visible = !1) : this._onSearCh()
        },
        i.prototype.destroy = function() {
            this.removeEvents(),
            t.prototype.destroy.call(this)
        },
        i
    } (BaseModule);
    e.SeerTitleChangeVIew = t,
    __reflect(t.prototype, "seerTitleChangeVIew.SeerTitleChangeVIew")
} (seerTitleChangeVIew || (seerTitleChangeVIew = {}));
var __reflect = this && this.__reflect ||
function(e, t, i) {
    e.__class__ = t,
    i ? i.push(t) : i = [t],
    e.__types__ = e.__types__ ? i.concat(e.__types__) : i
},
__extends = this && this.__extends ||
function(e, t) {
    function i() {
        this.constructor = e
    }
    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
    i.prototype = t.prototype,
    e.prototype = new i
},
seerTitleChangeVIew; !
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.skinName = "seerTitleChangeVIew.TitleItemSkin",
            t
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.initEvents()
        },
        t.prototype.initEvents = function() {
            this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this)
        },
        t.prototype.removeEvents = function() {
            this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this)
        },
        t.prototype.dataChanged = function() {
            this._vo = this.data,
            this.Img_used.visible = this._vo.isActivate,
            this.Icon_UP.visible = this._vo.isAbility,
            this._vo.titleId <= 0 ? (this.groupHide.visible = !0, this.txt_name.visible = !1) : (this.txt_name.visible = !0, this.groupHide.visible = !1, this.txt_name.text = this._vo.titileName)
        },
        t.prototype.getVo = function() {
            return this._vo
        },
        t.prototype.destroy = function() {
            this.removeEvents()
        },
        t
    } (eui.ItemRenderer);
    e.TitlePageRenderItem = t,
    __reflect(t.prototype, "seerTitleChangeVIew.TitlePageRenderItem")
} (seerTitleChangeVIew || (seerTitleChangeVIew = {})),
window.seerTitleChangeVIew = window.seerTitleChangeVIew || {};
var __extends = this && this.__extends ||
function(e, t) {
    function i() {
        this.constructor = e
    }
    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
    i.prototype = t.prototype,
    e.prototype = new i
};
window.generateEUI = window.generateEUI || {},
generateEUI.paths = generateEUI.paths || {},
generateEUI.styles = void 0,
generateEUI.skins = {},
generateEUI.paths["resource/eui_skins/TitleItemSkin.exml"] = window.seerTitleChangeVIew.TitleItemSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["img_select", "Icon_UP", "txt_name", "groupHide", "Img_used"],
        this.currentState = "up",
        this.elementsContent = [this.img_select_i(), this._Group2_i()],
        this.states = [new eui.State("up", [new eui.SetProperty("img_select", "visible", !1), new eui.SetProperty("txt_name", "textColor", 8036826)]), new eui.State("down", [new eui.SetProperty("img_select", "visible", !0), new eui.SetProperty("_Group2", "height", 42)])]
    }
    __extends(t, e);
    var i = t.prototype;
    return i.img_select_i = function() {
        var e = new eui.Image;
        return this.img_select = e,
        e.horizontalCenter = 0,
        e.source = "title_pop_2022_imgselected_png",
        e
    },
    i._Group2_i = function() {
        var e = new eui.Group;
        return this._Group2 = e,
        e.verticalCenter = 0,
        e.width = 248,
        e.layout = this._HorizontalLayout2_i(),
        e.elementsContent = [this.Icon_UP_i(), this._Group1_i(), this.Img_used_i()],
        e
    },
    i._HorizontalLayout2_i = function() {
        var e = new eui.HorizontalLayout;
        return e.horizontalAlign = "center",
        e.verticalAlign = "middle",
        e
    },
    i.Icon_UP_i = function() {
        var e = new eui.Image;
        return this.Icon_UP = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "title_pop_2022_upicon_png",
        e
    },
    i._Group1_i = function() {
        var e = new eui.Group;
        return e.x = 23,
        e.y = 2,
        e.elementsContent = [this.txt_name_i(), this.groupHide_i()],
        e
    },
    i.txt_name_i = function() {
        var e = new eui.Label;
        return this.txt_name = e,
        e.fontFamily = "MFShangHei",
        e.scaleX = 1,
        e.scaleY = 1,
        e.size = 18,
        e.textAlign = "center",
        e.visible = !0,
        e
    },
    i.groupHide_i = function() {
        var e = new eui.Group;
        return this.groupHide = e,
        e.horizontalCenter = 0,
        e.visible = !1,
        e.y = 0,
        e.layout = this._HorizontalLayout1_i(),
        e.elementsContent = [this._Image1_i(), this._Label1_i()],
        e
    },
    i._HorizontalLayout1_i = function() {
        var e = new eui.HorizontalLayout;
        return e
    },
    i._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "title_pop_2022_imghideicon_png",
        e
    },
    i._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.scaleX = 1,
        e.scaleY = 1,
        e.size = 18,
        e.text = "隐藏称号",
        e.textAlign = "center",
        e.textColor = 12869728,
        e.x = 0,
        e.y = 0,
        e
    },
    i.Img_used_i = function() {
        var e = new eui.Image;
        return this.Img_used = e,
        e.height = 22,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "playerInfo_title_pop_item_Img_used_png",
        e.width = 22,
        e.x = 212,
        e.y = 0,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/TitlePopSkin.exml"] = window.TitlePopSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["btnClose", "txtName", "txtEff", "txtNoEff", "txtEffect", "grp_info", "imgIcon", "txtAchieve", "grp_intro", "grp_titleInfo", "img_btn_th", "img_btn_yc", "img_yzb", "imgSearchBG", "noUpTitleDown", "noUpTitleUp", "hasUpTitleDown", "hasUpTitleUp", "editable_search", "viewport_list", "scroller_title", "Grp_noFind", "grp_yc"],
        this.height = 431,
        this.width = 753,
        this.elementsContent = [this._Image1_i(), this.btnClose_i(), this.grp_titleInfo_i(), this.img_btn_th_i(), this.img_btn_yc_i(), this.img_yzb_i(), this._Group3_i(), this.scroller_title_i(), this.Grp_noFind_i(), this.grp_yc_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Image1_i = function() {
        var e = new eui.Image;
        return e.height = 431,
        e.source = "title_pop_2022_imgbg_png",
        e.visible = !0,
        e.width = 753,
        e.x = 0,
        e.y = 0,
        e
    },
    i.btnClose_i = function() {
        var e = new eui.Image;
        return this.btnClose = e,
        e.source = "title_pop_2022_btnclose_png",
        e.x = 712,
        e.y = 1,
        e
    },
    i.grp_titleInfo_i = function() {
        var e = new eui.Group;
        return this.grp_titleInfo = e,
        e.visible = !0,
        e.x = 264,
        e.y = 55,
        e.elementsContent = [this._Image2_i(), this._Image3_i(), this.txtName_i(), this.grp_info_i(), this.grp_intro_i()],
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.height = 1,
        e.source = "common_line_01_s9_png",
        e.width = 464,
        e.x = 0,
        e.y = 114,
        e
    },
    i._Image3_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = 0,
        e.source = "title_pop_2022_imgnamebg_png",
        e.visible = !0,
        e.y = 0,
        e
    },
    i.txtName_i = function() {
        var e = new eui.Label;
        return this.txtName = e,
        e.fontFamily = "MFShangHei",
        e.horizontalCenter = 0,
        e.size = 20,
        e.text = "称号名字称号名字十二个字",
        e.textColor = 15857151,
        e.y = 8,
        e
    },
    i.grp_info_i = function() {
        var e = new eui.Group;
        return this.grp_info = e,
        e.x = 8,
        e.y = 133,
        e.elementsContent = [this.txtEff_i(), this.txtNoEff_i(), this.txtEffect_i()],
        e
    },
    i.txtEff_i = function() {
        var e = new eui.Label;
        return this.txtEff = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "属性称号效果：",
        e.textColor = 6153817,
        e.x = 0,
        e.y = 0,
        e
    },
    i.txtNoEff_i = function() {
        var e = new eui.Label;
        return this.txtNoEff = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "纪念称号无效果",
        e.textColor = 6153817,
        e.visible = !0,
        e.x = 161,
        e.y = 0,
        e
    },
    i.txtEffect_i = function() {
        var e = new eui.Label;
        return this.txtEffect = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "背包内精灵全属性+10%；自身造成的致命一击伤害提升15%；攻击技能有1/16的几率打出致命一击，每次使用增加1/16，",
        e.textColor = 8757203,
        e.width = 447,
        e.x = 0,
        e.y = 34,
        e
    },
    i.grp_intro_i = function() {
        var e = new eui.Group;
        return this.grp_intro = e,
        e.x = 10,
        e.y = 44,
        e.elementsContent = [this.imgIcon_i(), this._Label1_i(), this.txtAchieve_i()],
        e
    },
    i.imgIcon_i = function() {
        var e = new eui.Image;
        return this.imgIcon = e,
        e.height = 50,
        e.visible = !0,
        e.width = 50,
        e.x = 0,
        e.y = 0,
        e
    },
    i._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "对应成就：",
        e.textColor = 10733565,
        e.x = 62,
        e.y = 3,
        e
    },
    i.txtAchieve_i = function() {
        var e = new eui.Label;
        return this.txtAchieve = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "二十个字以内二十个字以内二十个字以内二十个字",
        e.textColor = 8757203,
        e.x = 62,
        e.y = 36,
        e
    },
    i.img_btn_th_i = function() {
        var e = new eui.Group;
        return this.img_btn_th = e,
        e.visible = !1,
        e.x = 427,
        e.y = 362,
        e.elementsContent = [this._Image4_i(), this._Label2_i()],
        e
    },
    i._Image4_i = function() {
        var e = new eui.Image;
        return e.source = "title_pop_2022_imgbtn_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i._Label2_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "REEJI",
        e.horizontalCenter = 0,
        e.size = 20,
        e.text = "替 换",
        e.textAlign = "center",
        e.textColor = 10181146,
        e.width = 56,
        e.y = 14,
        e
    },
    i.img_btn_yc_i = function() {
        var e = new eui.Group;
        return this.img_btn_yc = e,
        e.visible = !0,
        e.x = 427,
        e.y = 362,
        e.elementsContent = [this._Image5_i(), this._Label3_i()],
        e
    },
    i._Image5_i = function() {
        var e = new eui.Image;
        return e.source = "title_pop_2022_imgbtn_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i._Label3_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.horizontalCenter = 0,
        e.size = 20,
        e.text = "隐 藏",
        e.textAlign = "center",
        e.textColor = 10181146,
        e.width = 56,
        e.y = 14,
        e
    },
    i.img_yzb_i = function() {
        var e = new eui.Image;
        return this.img_yzb = e,
        e.source = "new_suit_pop_view_yzb_png",
        e.visible = !0,
        e.x = 454,
        e.y = 366,
        e
    },
    i._Group3_i = function() {
        var e = new eui.Group;
        return e.visible = !0,
        e.x = 1,
        e.y = 38,
        e.elementsContent = [this.imgSearchBG_i(), this._Group1_i(), this._Group2_i(), this._Image10_i(), this.editable_search_i()],
        e
    },
    i.imgSearchBG_i = function() {
        var e = new eui.Image;
        return this.imgSearchBG = e,
        e.source = "title_pop_2022_imgsearchbg_png",
        e.x = 8,
        e.y = 0,
        e
    },
    i._Group1_i = function() {
        var e = new eui.Group;
        return e.visible = !0,
        e.x = 0,
        e.y = 33,
        e.elementsContent = [this.noUpTitleDown_i(), this.noUpTitleUp_i()],
        e
    },
    i.noUpTitleDown_i = function() {
        var e = new eui.Group;
        return this.noUpTitleDown = e,
        e.visible = !1,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this._Image6_i(), this._Label4_i()],
        e
    },
    i._Image6_i = function() {
        var e = new eui.Image;
        return e.source = "title_pop_2022_imgmenudown_png",
        e.visible = !0,
        e.width = 124,
        e.x = 0,
        e.y = 0,
        e
    },
    i._Label4_i = function() {
        var e = new eui.Label;
        return e.size = 18,
        e.text = "纪念称号",
        e.textColor = 10808574,
        e.visible = !0,
        e.x = 26,
        e.y = 9,
        e
    },
    i.noUpTitleUp_i = function() {
        var e = new eui.Group;
        return this.noUpTitleUp = e,
        e.visible = !0,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this._Image7_i(), this._Label5_i()],
        e
    },
    i._Image7_i = function() {
        var e = new eui.Image;
        return e.source = "title_pop_2022_imgmenuup_png",
        e.visible = !0,
        e.width = 124,
        e.x = 0,
        e.y = 0,
        e
    },
    i._Label5_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "纪念称号",
        e.textColor = 7242936,
        e.visible = !0,
        e.x = 26,
        e.y = 9,
        e
    },
    i._Group2_i = function() {
        var e = new eui.Group;
        return e.visible = !0,
        e.x = 124,
        e.y = 33,
        e.elementsContent = [this.hasUpTitleDown_i(), this.hasUpTitleUp_i()],
        e
    },
    i.hasUpTitleDown_i = function() {
        var e = new eui.Group;
        return this.hasUpTitleDown = e,
        e.visible = !0,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this._Image8_i(), this._Label6_i()],
        e
    },
    i._Image8_i = function() {
        var e = new eui.Image;
        return e.source = "title_pop_2022_imgmenudown_png",
        e.visible = !0,
        e.width = 124,
        e.x = 0,
        e.y = 0,
        e
    },
    i._Label6_i = function() {
        var e = new eui.Label;
        return e.size = 18,
        e.text = "属性称号",
        e.textColor = 10808574,
        e.visible = !0,
        e.x = 26,
        e.y = 9,
        e
    },
    i.hasUpTitleUp_i = function() {
        var e = new eui.Group;
        return this.hasUpTitleUp = e,
        e.visible = !0,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this._Image9_i(), this._Label7_i()],
        e
    },
    i._Image9_i = function() {
        var e = new eui.Image;
        return e.source = "title_pop_2022_imgmenuup_png",
        e.visible = !0,
        e.width = 124,
        e.x = 0,
        e.y = 0,
        e
    },
    i._Label7_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "属性称号",
        e.textColor = 7242936,
        e.visible = !0,
        e.x = 26,
        e.y = 9,
        e
    },
    i._Image10_i = function() {
        var e = new eui.Image;
        return e.source = "title_pop_2022_btnsearch_png",
        e.x = 210,
        e.y = 0,
        e
    },
    i.editable_search_i = function() {
        var e = new eui.EditableText;
        return this.editable_search = e,
        e.fontFamily = "MFShangHei",
        e.height = 17,
        e.prompt = "输入称号名称",
        e.promptColor = 4149623,
        e.size = 16,
        e.textAlign = "center",
        e.textColor = 7899564,
        e.width = 198.381,
        e.x = 9.209,
        e.y = 6,
        e
    },
    i.scroller_title_i = function() {
        var e = new eui.Scroller;
        return this.scroller_title = e,
        e.height = 311,
        e.scrollPolicyH = "off",
        e.visible = !0,
        e.width = 248,
        e.y = 110,
        e.viewport = this.viewport_list_i(),
        e
    },
    i.viewport_list_i = function() {
        var e = new eui.List;
        return this.viewport_list = e,
        e.x = 0,
        e.y = 0,
        e.layout = this._VerticalLayout1_i(),
        e
    },
    i._VerticalLayout1_i = function() {
        var e = new eui.VerticalLayout;
        return e.gap = 4,
        e
    },
    i.Grp_noFind_i = function() {
        var e = new eui.Image;
        return this.Grp_noFind = e,
        e.source = "title_pop_2022_imgnotfound_png",
        e.visible = !1,
        e.x = 48,
        e.y = 196,
        e
    },
    i.grp_yc_i = function() {
        var e = new eui.Image;
        return this.grp_yc = e,
        e.source = "title_pop_2022_txthidetitle_png",
        e.visible = !1,
        e.x = 360,
        e.y = 207,
        e
    },
    t
} (eui.Skin);