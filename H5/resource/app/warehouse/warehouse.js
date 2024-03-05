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
__awaiter = this && this.__awaiter ||
function(e, t, i, n) {
    return new(i || (i = Promise))(function(r, s) {
        function a(e) {
            try {
                _(n.next(e))
            } catch(t) {
                s(t)
            }
        }
        function o(e) {
            try {
                _(n["throw"](e))
            } catch(t) {
                s(t)
            }
        }
        function _(e) {
            e.done ? r(e.value) : new i(function(t) {
                t(e.value)
            }).then(a, o)
        }
        _((n = n.apply(e, t || [])).next())
    })
},
__generator = this && this.__generator ||
function(e, t) {
    function i(e) {
        return function(t) {
            return n([e, t])
        }
    }
    function n(i) {
        if (r) throw new TypeError("Generator is already executing.");
        for (; _;) try {
            if (r = 1, s && (a = s[2 & i[0] ? "return": i[0] ? "throw": "next"]) && !(a = a.call(s, i[1])).done) return a;
            switch (s = 0, a && (i = [0, a.value]), i[0]) {
            case 0:
            case 1:
                a = i;
                break;
            case 4:
                return _.label++,
                {
                    value: i[1],
                    done: !1
                };
            case 5:
                _.label++,
                s = i[1],
                i = [0];
                continue;
            case 7:
                i = _.ops.pop(),
                _.trys.pop();
                continue;
            default:
                if (a = _.trys, !(a = a.length > 0 && a[a.length - 1]) && (6 === i[0] || 2 === i[0])) {
                    _ = 0;
                    continue
                }
                if (3 === i[0] && (!a || i[1] > a[0] && i[1] < a[3])) {
                    _.label = i[1];
                    break
                }
                if (6 === i[0] && _.label < a[1]) {
                    _.label = a[1],
                    a = i;
                    break
                }
                if (a && _.label < a[2]) {
                    _.label = a[2],
                    _.ops.push(i);
                    break
                }
                a[2] && _.ops.pop(),
                _.trys.pop();
                continue
            }
            i = t.call(e, _)
        } catch(n) {
            i = [6, n],
            s = 0
        } finally {
            r = a = 0
        }
        if (5 & i[0]) throw i[1];
        return {
            value: i[0] ? i[1] : void 0,
            done: !0
        }
    }
    var r, s, a, o, _ = {
        label: 0,
        sent: function() {
            if (1 & a[0]) throw a[1];
            return a[1]
        },
        trys: [],
        ops: []
    };
    return o = {
        next: i(0),
        "throw": i(1),
        "return": i(2)
    },
    "function" == typeof Symbol && (o[Symbol.iterator] = function() {
        return this
    }),
    o
},
warehouse; !
function(e) {
    var t = function(t) {
        function i() {
            var e = t.call(this) || this;
            return e.groupName = "warehouse",
            e.SORT_CONFIG = {
                id_down: {
                    name: "ID顺序",
                    sortImg: "warehouse_img_down_png"
                },
                id_up: {
                    name: "ID顺序",
                    sortImg: "warehouse_img_up_png"
                },
                lvl_down: {
                    name: "等级顺序",
                    sortImg: "warehouse_img_down_png"
                },
                lvl_up: {
                    name: "等级顺序",
                    sortImg: "warehouse_img_up_png"
                },
                tm_down: {
                    name: "获得顺序",
                    sortImg: "warehouse_img_down_png"
                },
                tm_up: {
                    name: "获得顺序",
                    sortImg: "warehouse_img_up_png"
                }
            },
            e._currentAttributeId = 0,
            e._serchstr = "",
            e._selectPetData = null,
            e._currentSelectRadiobuttonValue = -1,
            e._currentRightRBValue = -1,
            e._counterMarks = [0, 0, 0],
            e._itemWidth = 158,
            e._itemHeigth = 229,
            e.ATTRIBUTE_VALUE_NAMES = ["attack", "defence", "s_a", "s_d", "speed", "hp"],
            e.jyLimit = 45,
            e._isMove = !1,
            e.skinName = "WarehouseSkin",
            e
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            var e = this;
            t.prototype.childrenCreated.call(this),
            this._resize(),
            this.adaptRightContent(this.grp_right),
            this.adaptLeftContent(this.grpContent),
            this.adaptRightContent(this.grpContent),
            this.initBtnClose("warehousenew_title_png", this,
            function() {
                return __awaiter(e, void 0, void 0,
                function() {
                    var e, t, i = this;
                    return __generator(this,
                    function(n) {
                        switch (n.label) {
                        case 0:
                            return [4, KTool.getMultiValueAsync([207025])];
                        case 1:
                            return e = n.sent(),
                            t = e[0],
                            "warehouse_release_opening_png" == this.tag.source && 40 > t ? Alert.show("当前精灵遣返尚未关闭，你确定要退出吗？",
                            function() {
                                i.onClose()
                            },
                            function() {
                                i.menu.updateView(3)
                            }) : this.onClose(),
                            [2]
                        }
                    })
                })
            },
            this);
            var i = egret.localStorage.getItem("warehouse_sortId_order_" + MainManager.actorID);
            i && GuideManager.isCompleted() && (this._currentSortType = i),
            this.setSortInfo(),
            this.initdata(),
            this.addEvent(),
            this.initJYLimit(),
            PetManager.getLovePetList(),
            PetStorage2015InfoManager.getTotalInfo(function() {
                e.updatePets()
            }),
            GameInfo.isChecking ? (this.img_btn_show.visible = !1, this.img_btn_show_s.visible = !1) : (DisplayUtil.setEnabled(this.img_btn_show, !1), DisplayUtil.setEnabled(this.img_btn_show_s, !1)),
            this.img_btn_putbg.name = "btnInBag",
            this.tag.visible = !GameInfo.isChecking;
            var n = new MenuData;
            n.groupName = this.groupName,
            n["default"] = 1,
            GameInfo.isChecking ? (n.root = [1, 2], n.data = {
                1 : {
                    title: "精灵仓库"
                },
                2 : {
                    title: "精英收藏"
                }
            }) : (n.root = [1, 2, 3], n.data = {
                1 : {
                    title: "精灵仓库"
                },
                2 : {
                    title: "精英收藏"
                },
                3 : {
                    title: "精灵遣返"
                }
            }),
            this.menu = Menu.createMenu(n, this.menuGroup)
        },
        i.prototype.initdata = function() {
            this._arrySkinCol = new eui.ArrayCollection,
            this._customScroller = new common.ui.CustomScroller(this.viewport_list.width, this.viewport_list.height, this._itemWidth, this._itemHeigth, this.viewport_list.layout.gap, e.WareHouseSKinItem, 150, .8, 1.2, 1, 1, this.viewport_list, this._arrySkinCol, 100, null, common.ui.CustomScroller.DIR_TO_H),
            this.detail.addChild(this._customScroller),
            this._customScroller.x = this.viewport_list.x,
            this._customScroller.y = this.viewport_list.y + 25,
            this._rbrighBtn = this.rb_shuxing.group;
            var t = 1;
            this._rbrighBtn.selectedValue = t,
            this._currentSelectRadiobuttonValue = t,
            this._currentRightRBValue = t,
            this.scl_items.viewport = this.scl_items_view_port,
            this._skillist.itemRenderer = e.WarehouseSkillItem,
            this.scl_items_view_port.itemRenderer = e.WarehouseItemHead,
            this.acSkill = new eui.ArrayCollection,
            this._arrycollertion = new eui.ArrayCollection,
            this.scl_items_view_port.dataProvider = this._arrycollertion,
            this._skillist.dataProvider = this.acSkill
        },
        i.prototype.initJYLimit = function() {
            var e = this;
            this.btnHelp2 = new eui.Image("common_help_icon_1_png"),
            this.addChild(this.btnHelp2),
            this.btnHelp2.name = "btnHelp2",
            this.btnHelp2.x = 259,
            this.btnHelp2.y = 13,
            this.btnHelp2.visible = !1,
            ImageButtonUtil.add(this.btnHelp2,
            function() {
                tipsPop.TipsPop.openHelpPopById(137)
            },
            this),
            this.adaptLeftContent(this.btnHelp2),
            KTool.getMultiValue([121020],
            function(t) {
                var i = t[0];
                i = 255 & i,
                i += 1,
                i = 30 >= i ? i: 30,
                e.jyLimit = parseFloat(config.Brave_lv.getItem(i).storehouse),
                e.jyText.text = e._arrycollertion.length + "/" + e.jyLimit,
                e.curJyCnt = PetManager.lovePetLength
            })
        },
        i.prototype.addEvent = function() {
            var e = this,
            t = function() {
                return PetStorage2015MovePetManager.movePetToBag(e._selectPetData)
            },
            i = function() {
                return e.curJyCnt >= e.jyLimit ? void BubblerManager.getInstance().showText("精英收藏中的精英多于限制个数！") : void PetStorage2015MovePetManager.movePetToElite(e._selectPetData)
            },
            n = function() {
                return PetStorage2015MovePetManager.moveEliteToStore(e._selectPetData)
            },
            r = function() {
                return console.log("基地展示")
            };
            ImageButtonUtil.add(this.img_btn_putbg, t, this),
            ImageButtonUtil.add(this.img_btn_putbg_s, t, this),
            ImageButtonUtil.add(this.img_btn_joinet, i, this),
            ImageButtonUtil.add(this.img_btn_joinet_s, i, this),
            ImageButtonUtil.add(this.img_btn_unJoint, n, this),
            ImageButtonUtil.add(this.img_btn_unJoint_s, n, this),
            ImageButtonUtil.add(this.img_btn_show, r, this),
            ImageButtonUtil.add(this.img_btn_show_s, r, this),
            ImageButtonUtil.add(this.arr_left, this.clickHandle, this),
            ImageButtonUtil.add(this.arr_right, this.clickHandle, this),
            ImageButtonUtil.add(this.img_btn_search_name, this.clickHandle, this),
            ImageButtonUtil.add(this.grp_btn_sort, this.clickHandle, this, !1),
            ImageButtonUtil.add(this.grp_btn_attr,
            function() {
                StatLogger.log("1023版本系统功能", "精灵界面", "精灵仓库界面点击属性查找筛选按钮"),
                e.openSelectAttributePanel()
            },
            this, !1);
            for (var s = 0; 3 > s; s++) this["img_rune_" + s].name = "run_" + s,
            this["img_rune_" + s].addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchCounterMark, this);
            this.rb_id_sort_down.group.addEventListener(egret.Event.CHANGE, this.onChangeSortType, this),
            this._customScroller.addEventListener(common.ui.CustomScroller.EVENT_CHANGE_END, this._onChangeScroller, this),
            this._rbrighBtn.addEventListener(egret.Event.CHANGE, this.onChangeRightBtn, this),
            this.scl_items_view_port.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.onSelectPet, this),
            this._skillist.addEventListener(eui.ItemTapEvent.ITEM_TAP, this._onShowSkillTipsPop, this),
            EventManager.addEventListener(PetStorage2015Event.EVT_NAME, this.onEvt, this),
            PetManager.addEventListener(PetEvent.STORAGE_ADDED, this.storageAdded, this),
            PetManager.addEventListener(PetEvent.LOVE_REMOVED, this.updatePets, this),
            EventManager.addEventListener(BaseMenuEvent.BASE_MENU_SELECT_CHANGE_ + this.groupName, this.onchangeLeftBtn, this),
            EventManager.addEventListener("WarehouseRelease_UPDATE_RELEASE_TAG", this.updateTag, this)
        },
        i.prototype.onGetDisplayObjRect = function(e) {
            function t(e) {
                void 0 === e && (e = !1),
                this.removeEventListener(egret.Event.ADDED_TO_STAGE, t, i);
                for (var r = i.scl_items_view_port.numChildren,
                s = !1,
                a = 0; r > a; a++) {
                    var o = i.scl_items_view_port.getChildAt(a);
                    if (o.data && o.data.id == +n) {
                        var _ = o.localToGlobal(0, 0),
                        u = new egret.Rectangle(_.x - o.anchorOffsetX, _.y - o.anchorOffsetY, o.width, o.height);
                        s = !0,
                        GuideManager.currRect = u,
                        e && EventManager.dispatchEventWith(GuideManager.UPDATE_DISPLAY_OBJECT_RECT);
                        break
                    }
                }
                s || egret.setTimeout(function() {
                    t(!0)
                },
                i, 200)
            }
            var i = this,
            n = e.data;
            this.stage ? t() : this.addEventListener(egret.Event.ADDED_TO_STAGE, t, this)
        },
        i.prototype._onChangeScroller = function() {
            this._isMove = !1,
            this._selectSkinIndex = this._customScroller.getSelectIndex();
            var e = this._arrySkinCol.getItemAt(this._selectSkinIndex);
            this._currentSkinInfo = e,
            this.viewport_list.selectedIndex = this._selectSkinIndex,
            this.setArrow();
            var t = 0;
            this._currentSkinInfo && this._currentSkinInfo.id && (t = this._currentSkinInfo.id),
            this.hasEquip.visible = t == this._petionfo.skinId,
            this.hasGet.visible = t !== this._petionfo.skinId && PetSkinController.instance.haveSkin(t)
        },
        i.prototype.setArrow = function() {
            this.arr_left.visible = this._selectSkinIndex > 1,
            this.arr_right.visible = this._selectSkinIndex < this._arrySkinCol.length - 2
        },
        i.prototype._onShowSkillTipsPop = function(e) {
            if (e.item) {
                var t = {
                    id: e.item.id,
                    petInfo: null
                },
                i = {};
                i.dir = "right-top",
                i.rx = -10,
                i.ry = 10,
                i.srcWorldPos = this.parent.parent.parent.localToGlobal(),
                tipsPop.TipsPop.openSkillPop(t, i)
            }
        },
        i.prototype.onchangeLeftBtn = function(t) {
            if (this._currentSelectRadiobuttonValue = ~~this.menu.selectedValue, 3 != this._currentSelectRadiobuttonValue) this.panelGroup.visible = !1,
            this.resetScrollContextSize(),
            this._selectPetData = null,
            this.updatePets(),
            this.petGroup.visible = !0;
            else {
                if (this.btnHelp2.visible = !1, this.jy_tip.visible = !1, this.petGroup.visible = !1, this.panelGroup.numChildren <= 0) {
                    var i = new e.WarehouseRelease;
                    this.panelGroup.addChild(i)
                } else this.panelGroup.getChildAt(0).updateView();
                this.panelGroup.visible = !0
            }
            this.updateTag()
        },
        i.prototype.updateTag = function() {
            var e = this;
            KTool.getMultiValue([125051],
            function(t) {
                var i = 1e3 * t[0],
                n = SystemTimerManager.sysBJDate.getTime();
                0 == i ? e.tag.source = "warehouse_release_notopen_png": i > n ? e.tag.source = "warehouse_release_waiting_png": e.tag.source = "warehouse_release_opening_png",
                e.tag.x = e.menuGroup.width - 57
            })
        },
        i.prototype.onChangeRightBtn = function(e) {
            this._currentRightRBValue = ~~this._rbrighBtn.selectedValue,
            this.showRightPetInfo()
        },
        i.prototype.showRightPetInfo = function() {
            switch (this._currentRightRBValue) {
            case 1:
                this.skill.visible = this.detail.visible = this.special.visible = !1,
                this.pro.visible = !0;
                break;
            case 2:
                this.updateSkill();
                break;
            case 3:
                this.updateSkin();
                break;
            case 4:
                this.updateSpecial()
            }
        },
        i.prototype.updateSkin = function() {
            this.skill.visible = this.pro.visible = this.special.visible = !1,
            this.detail.visible = !0;
            for (var e = this._selectPetData.id,
            t = PetSkinInfo.getPetDefaultSkin(e), i = [t], n = PetSkinXMLInfo.getSkinInfosByPetId(e), r = 1, s = 0; s < n.length; s++) {
                i.push(n[s]);
                var a = PetSkinController.instance.haveSkin(n[s].id);
                a && ++r
            }
            this._firstSelectedId = i[0].skinPetId,
            i.unshift(null),
            i.push(null),
            this._skinList = i;
            var o = 0 == this._petionfo.skinId ? this._firstSelectedId: this._petionfo.skinId;
            this._arrySkinCol.replaceAll(this._skinList);
            for (var s = 0; s < this._skinList.length; s++) if (this._skinList[s] && this._skinList[s].id) {
                if (this._skinList[s].id == o) {
                    this._currentSkinInfo = this._skinList[s];
                    break
                }
            } else if (this._skinList[s] && this._skinList[s].skinPetId === o) {
                this._currentSkinInfo = this._skinList[s];
                break
            }
            this._selectSkinIndex = this._arrySkinCol.getItemIndex(this._currentSkinInfo),
            this._customScroller.goToNum(this._selectSkinIndex, 150),
            this.txt_skinNum.text = "已获得皮肤:" + r + "/" + (i.length - 2)
        },
        i.prototype.updateSpecial = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var e, t, i, n, r, s, a, o, _, u, l;
                return __generator(this,
                function(h) {
                    switch (h.label) {
                    case 0:
                        if (this.skill.visible = this.pro.visible = this.detail.visible = !1, this.special.visible = !0, this.groupTag.removeChildren(), this.scro1.viewport.scrollV = 0, this.scro2.viewport.scrollV = 0, e = EffectIconControl.getAllEffctByPetId(this._selectPetData.id), !e) return [3, 2];
                        if (t = e[0].kind, null != t) for (i = t.toString().split(" ").map(Number), n = 0; n < i.length; n++) r = new eui.Image("pet_bag_tag" + (i[n] + 1) + "_png"),
                        this.groupTag.addChild(r);
                        return this.img_yu.visible = !0,
                        this.empty.visible = !1,
                        s = PetManager.getPetInfo(this._selectPetData.catchTime),
                        [4, KTool.checkHasAdvanced(s, this._selectPetData.id, this._selectPetData.catchTime)];
                    case 1:
                        return a = h.sent(),
                        this.img_yu.source = a ? "warehousenew_special_img_yu_png": "warehouse_imgeffect_png",
                        e.length > 0 && (o = EffectDesManager.transferDesc(a ? e[e.length - 1] : e[e.length - 2 >= 0 ? e.length - 2 : 0]), _ = o[0], u = o[1], l = (new egret.HtmlTextParser).parse(_), this.desc.textFlow = l, this.scro1.height = u.length <= 0 ? 230 : 102, this.scro2.visible = u.length > 0, this.titleDesc.textFlow = (new egret.HtmlTextParser).parse(EffectDesManager.transferDesArr(u))),
                        [3, 3];
                    case 2:
                        this.desc.text = "",
                        this.titleDesc.text = "",
                        this.img_yu.visible = !1,
                        this.empty.visible = !0,
                        h.label = 3;
                    case 3:
                        return [2]
                    }
                })
            })
        },
        i.prototype.onChangeSkin = function(e) {
            this._isMove || ("left" === e ? this._selectSkinIndex = Math.max(1, --this._selectSkinIndex) : this._selectSkinIndex = Math.min(this._arrySkinCol.length, ++this._selectSkinIndex), this.setArrow(), this._isMove = !0, this._customScroller.goToNum(this._selectSkinIndex, 150))
        },
        i.prototype.updateSkill = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var e, t, i, n, r, s, a, o, _, u;
                return __generator(this,
                function(l) {
                    switch (l.label) {
                    case 0:
                        return this._scrol.viewport.scrollV = 0,
                        this._scrol.stopAnimation(),
                        this.pro.visible = this.detail.visible = this.special.visible = !1,
                        this.skill.visible = !0,
                        this.acSkill.removeAll(),
                        e = this._selectPetData.id,
                        t = [],
                        i = PetXMLInfo.getAllSkill(e),
                        [4, PetManager.getAllSkillCanUse(this._petionfo)];
                    case 1:
                        for (n = l.sent(), r = [], s = 0, a = n; s < a.length; s++) o = a[s],
                        r[o.skillId] = o;
                        for (_ = 0; _ < i.length; _++) u = {},
                        i[_].info.Rec ? i[_].info.Tag ? u.tag = 2 + i[_].info.Tag: u.tag = 2 : 2 == i[_].type || 5 == i[_].type || 6 == i[_].type ? u.tag = 1 : u.tag = 0,
                        u.id = i[_].skillId,
                        u.canUse = !!r[i[_].skillId],
                        u.hasUse = !!r[i[_].skillId] && r[i[_].skillId].hasUse,
                        t.push(u);
                        return this.acSkill.replaceAll(t),
                        [2]
                    }
                })
            })
        },
        i.prototype.onSelectPet = function(e) {
            if (e.item && this._selectPetData !== e.item) {
                var t = new egret.Event("select_pet", !1, !0, e.item.id);
                EventManager.dispatchEvent(t) ? (this._selectPetData = e.item, this.updatePetProp()) : e.preventDefault()
            }
        },
        i.prototype.updatePetProp = function() {
            var e = this;
            this.grp_right.visible = Boolean(this._selectPetData),
            this.updateJYDisplay(),
            this._selectPetData && PetManager.upDateBagPetInfo(this._selectPetData.catchTime,
            function(t) {
                if (e._selectPetData) {
                    e._petionfo = t,
                    e.lab_name.text = t.name,
                    e.img_showHead.source = ClientConfig.getPetHeadPath(t.id),
                    e.lab_lvl.text = t.level + "",
                    e.lab_tianfu.text = t.dv + "",
                    e.lab_xingge.text = NatureXMLInfo.getName(t.nature),
                    e.lab_shuxing.text = PetXMLInfo.getTypeCN(t.id);
                    var i = PetManager.getPetEffect(t);
                    if (i) {
                        var n = PetEffectXMLInfo.getEffect(i.effectID, i.args);
                        e.lab_texing.text = n
                    } else e.lab_texing.text = "无";
                    e.lab_id.text = t.id + "";
                    var r = new Date(1e3 * t.catchTime);
                    e.lab_getTm.text = r.getFullYear() + "年" + (r.getMonth() + 1) + "月" + r.getDate() + "日获得";
                    for (var s = [], a = 0; 6 > a; a++) s.push(t["base_" + e.ATTRIBUTE_VALUE_NAMES[a] + "_total"] + "");
                    e.lab_atk.text = s[0],
                    e.lab_def.text = s[1],
                    e.lab_satk.text = s[2],
                    e.lab_sdef.text = s[3],
                    e.lab_speed.text = s[4],
                    e.lab_hp.text = s[5],
                    e.lab_extra_atk.text = t.ev_attack + "",
                    e.lab_extra_def.text = t.ev_defence + "",
                    e.lab_extra_satk.text = t.ev_sa + "",
                    e.lab_extra_sdef.text = t.ev_sd + "",
                    e.lab_extra_speed.text = t.ev_sp + "",
                    e.lab_extra_hp.text = t.ev_hp + "",
                    e._counterMarks[0] = t.abilityMark,
                    e._counterMarks[1] = t.skillMark,
                    e._counterMarks[2] = t.commonMark;
                    var o = CountermarkXMLInfo.getMarkId(t.abilityMark);
                    e.img_rune_0.visible = o > 0,
                    o && (e.img_rune_0.source = CountermarkXMLInfo.getIconURL(o));
                    var _ = CountermarkXMLInfo.getMarkId(t.skillMark);
                    if (e.img_rune_1.visible = _ > 0, _ && (e.img_rune_1.source = CountermarkXMLInfo.getIconURL(_)), e.img_rune_2.visible = !1, e.img_lock_2.visible = !0, t.commonMarkActived && (e.img_lock_2.visible = !1, t.commonMark > 0)) {
                        e.img_rune_2.visible = !0;
                        var u = CountermarkXMLInfo.getMarkId(t.commonMark);
                        e.img_rune_2.source = CountermarkXMLInfo.getIconURL(u)
                    }
                    e._setBtns(),
                    e.showRightPetInfo()
                }
            })
        },
        i.prototype._setBtns = function() {
            DisplayUtil.setEnabled(this.img_btn_joinet, 14 !== this._selectPetData.posi, 14 === this._selectPetData.posi);
            var e = PetManager.getPetInfo(this._selectPetData.catchTime),
            t = 14 !== this._selectPetData.posi && null == e;
            DisplayUtil.setEnabled(this.img_btn_putbg, t, !t),
            DisplayUtil.setEnabled(this.img_btn_unJoint, null == e, null != e),
            DisplayUtil.setEnabled(this.img_btn_putbg_s, t, !t),
            DisplayUtil.setEnabled(this.img_btn_unJoint_s, null == e, null != e),
            this.img_btn_unJoint.visible = 2 === this._currentSelectRadiobuttonValue,
            this.img_btn_joinet.visible = 2 !== this._currentSelectRadiobuttonValue,
            this.img_btn_unJoint_s.visible = 2 === this._currentSelectRadiobuttonValue,
            this.img_btn_joinet_s.visible = 2 !== this._currentSelectRadiobuttonValue
        },
        i.prototype.updateJYDisplay = function() {
            GameInfo.isChecking || (this.btnHelp2.visible = 2 == this._currentSelectRadiobuttonValue),
            this.jy_tip.visible = 2 == this._currentSelectRadiobuttonValue,
            this.curJyCnt = PetManager.getLovePetListArr().length,
            this.jyText.text = this.curJyCnt + "/" + this.jyLimit
        },
        i.prototype.storageAdded = function(e) {
            var t = this;
            PetManager.updateBagInfo(function() {
                PetStorage2015InfoManager.getTotalInfo(function() {
                    t.updatePets()
                })
            })
        },
        i.prototype.onEvt = function(e) {
            var t = e.value;
            1e4 === t && this.updatePets()
        },
        i.prototype.setSortInfo = function() {
            return this._currentSortType ? (this.lab_select_sort.text = this.SORT_CONFIG[this._currentSortType].name, void(this.img_btn_sort.source = this.SORT_CONFIG[this._currentSortType].sortImg)) : void(this.lab_select_sort.text = "默认顺序")
        },
        i.prototype.clickHandle = function(e) {
            switch (e.target) {
            case this.img_btn_search_name:
                StatLogger.log("1023版本系统功能", "精灵界面", "精灵仓库界面点击输入名称查找按钮"),
                this._serchstr = this.editable_search.text,
                this.resetScrollContextSize(),
                this.updatePets(),
                this._serchstr = "";
                break;
            case this.grp_btn_sort:
            case this.img_btn_sort:
                this.showSortTypePanel();
                break;
            case this.bg_mask:
                this.grp_select_sort.visible && this.hideSortTypePanel(),
                this.bg_mask.visible = !1;
                break;
            case this.arr_left:
                this.onChangeSkin("left");
                break;
            case this.arr_right:
                this.onChangeSkin("right")
            }
        },
        i.prototype.resetScrollContextSize = function() {
            this.scl_items.stopAnimation(),
            this.scl_items.viewport.validateNow(),
            this.scl_items.viewport.scrollV = 0
        },
        i.prototype.updatePets = function() {
            var e = this,
            t = PetStorage2015InfoManager.getInfoByType(this._currentSelectRadiobuttonValue - 1, this._currentAttributeId);
            if (this._currentSortType) switch (this._currentSortType) {
            case "id_down":
                t.sort(function(e, t) {
                    return t.id - e.id
                });
                break;
            case "id_up":
                t.sort(function(e, t) {
                    return e.id - t.id
                });
                break;
            case "lvl_down":
                t.sort(function(e, t) {
                    return t.level - e.level
                });
                break;
            case "lvl_up":
                t.sort(function(e, t) {
                    return e.level - t.level
                });
                break;
            case "tm_down":
                t.sort(function(e, t) {
                    return t.catchTime - e.catchTime
                });
                break;
            case "tm_up":
                t.sort(function(e, t) {
                    return e.catchTime - t.catchTime
                })
            }
            var i = [1, 2, 7];
            2 == this._currentSelectRadiobuttonValue ? t.sort(function(e, t) {
                return i.indexOf(e.posi) > -1 && 4 == t.posi ? -1 : 1
            }) : t.sort(function(e, t) {
                return e.posi - t.posi
            });
            this.scl_items_view_port.layout;
            t = this.checkIsSerchstr(t),
            this._arrycollertion.removeAll();
            for (var n = 0; n < t.length; n++) this._arrycollertion.addItem(t[n]);
            var r = this._arrycollertion.getItemAt(0);
            this._selectPetData = r,
            egret.callLater(function() {
                r && (e.scl_items_view_port.selectedItem = r)
            },
            this),
            this.updatePetProp(),
            this.scl_items.viewport.validateNow()
        },
        i.prototype.checkIsSerchstr = function(e) {
            if (!this._serchstr) return e;
            var t = [];
            if (Number(this._serchstr)) for (var i = Number(this._serchstr), n = 0; n < e.length; n++) {
                var r = e[n];
                r.id === i && t.push(r)
            } else for (var n = 0; n < e.length; n++) {
                var r = e[n]; - 1 != r.name.indexOf(this._serchstr) && t.push(r)
            }
            return t
        },
        i.prototype.showSortTypePanel = function() {
            var e = this.pos_selectSort.localToGlobal(),
            t = this.globalToLocal(e.x, e.y);
            this.grp_select_sort.x = t.x,
            this.grp_select_sort.y = t.y;
            var i = this._currentSortType;
            i && (this.rb_id_sort_down.group.selectedValue = i),
            this.grp_select_sort.alpha = 0,
            this.bg_mask.visible = !0,
            this.grp_select_sort.visible = !0,
            egret.Tween.removeTweens(this.grp_select_sort),
            egret.Tween.get(this.grp_select_sort).to({
                alpha: 1
            },
            300)
        },
        i.prototype.hideSortTypePanel = function() {
            var e = this;
            egret.Tween.removeTweens(this.grp_select_sort),
            egret.Tween.get(this.grp_select_sort).to({
                alpha: 0
            },
            300).call(function() {
                e.grp_select_sort.visible = !1
            },
            this),
            this.bg_mask.visible = !1
        },
        i.prototype.onChangeAttributeIdHanlder = function(e, t) {
            console.log("当前选择的属性类型为" + t),
            this._currentAttributeId = ~~t,
            this.bg_mask.visible = !1,
            this.resetScrollContextSize(),
            this.updatePets()
        },
        i.prototype.openSelectAttributePanel = function() {
            var e = {
                callBack: this.onChangeAttributeIdHanlder,
                caller: this,
                selectId: this._currentAttributeId,
                unAutoClose: !1,
                relativeSet: {
                    srcWorldPos: this.selectAttributePos.localToGlobal(),
                    dir: "left-top",
                    rx: 0,
                    ry: 0
                }
            };
            ModuleManager.showModule("petChooseAttributePanel", ["pet_choose_attribute_panel"], e, "", AppDoStyle.NULL)
        },
        i.prototype.onTouchCounterMark = function(e) {
            var t = ~~e.currentTarget.name.split("_")[1],
            i = {
                ins: CountermarkController.getInfoTemp(this._counterMarks[t])
            };
            tipsPop.TipsPop.openCounterMarkPop(i)
        },
        i.prototype.onChangeSortType = function(e) {
            this.hideSortTypePanel(),
            StatLogger.log("1023版本系统功能", "精灵界面", "精灵仓库界面点击ID顺序筛选按钮"),
            this._currentSortType = this.rb_id_sort_down.group.selectedValue,
            egret.localStorage.setItem("warehouse_sortId_order_" + MainManager.actorID, this._currentSortType),
            this.setSortInfo(),
            this.resetScrollContextSize(),
            this.updatePets()
        },
        i.prototype.removeEvents = function() {
            ImageButtonUtil.removeAll(this);
            for (var e = 0; 3 > e; e++) this["img_rune_" + e].removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchCounterMark, this);
            this.rb_id_sort_down.group.removeEventListener(egret.Event.CHANGE, this.onChangeSortType, this),
            this._customScroller.removeEventListener(common.ui.CustomScroller.EVENT_CHANGE_END, this._onChangeScroller, this),
            this._skillist.removeEventListener(eui.ItemTapEvent.ITEM_TAP, this._onShowSkillTipsPop, this),
            this._rbrighBtn.removeEventListener(egret.Event.CHANGE, this.onChangeRightBtn, this),
            this.scl_items_view_port.removeEventListener(eui.ItemTapEvent.ITEM_TAP, this.onSelectPet, this),
            EventManager.removeEventListener(PetStorage2015Event.EVT_NAME, this.onEvt, this),
            PetManager.removeEventListener(PetEvent.STORAGE_ADDED, this.storageAdded, this),
            PetManager.removeEventListener(PetEvent.LOVE_REMOVED, this.updatePets, this)
        },
        i.prototype.destroy = function() {
            this.removeEvents(),
            this.menu && this.menu.destroy(),
            this.panelGroup.numChildren > 0 && this.panelGroup.getChildAt(0).destroy(),
            egret.Tween.removeTweens(this.grp_select_sort),
            t.prototype.destroy.call(this)
        },
        i
    } (BaseModule);
    e.Warehouse = t,
    __reflect(t.prototype, "warehouse.Warehouse")
} (warehouse || (warehouse = {}));
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
__awaiter = this && this.__awaiter ||
function(e, t, i, n) {
    return new(i || (i = Promise))(function(r, s) {
        function a(e) {
            try {
                _(n.next(e))
            } catch(t) {
                s(t)
            }
        }
        function o(e) {
            try {
                _(n["throw"](e))
            } catch(t) {
                s(t)
            }
        }
        function _(e) {
            e.done ? r(e.value) : new i(function(t) {
                t(e.value)
            }).then(a, o)
        }
        _((n = n.apply(e, t || [])).next())
    })
},
__generator = this && this.__generator ||
function(e, t) {
    function i(e) {
        return function(t) {
            return n([e, t])
        }
    }
    function n(i) {
        if (r) throw new TypeError("Generator is already executing.");
        for (; _;) try {
            if (r = 1, s && (a = s[2 & i[0] ? "return": i[0] ? "throw": "next"]) && !(a = a.call(s, i[1])).done) return a;
            switch (s = 0, a && (i = [0, a.value]), i[0]) {
            case 0:
            case 1:
                a = i;
                break;
            case 4:
                return _.label++,
                {
                    value: i[1],
                    done: !1
                };
            case 5:
                _.label++,
                s = i[1],
                i = [0];
                continue;
            case 7:
                i = _.ops.pop(),
                _.trys.pop();
                continue;
            default:
                if (a = _.trys, !(a = a.length > 0 && a[a.length - 1]) && (6 === i[0] || 2 === i[0])) {
                    _ = 0;
                    continue
                }
                if (3 === i[0] && (!a || i[1] > a[0] && i[1] < a[3])) {
                    _.label = i[1];
                    break
                }
                if (6 === i[0] && _.label < a[1]) {
                    _.label = a[1],
                    a = i;
                    break
                }
                if (a && _.label < a[2]) {
                    _.label = a[2],
                    _.ops.push(i);
                    break
                }
                a[2] && _.ops.pop(),
                _.trys.pop();
                continue
            }
            i = t.call(e, _)
        } catch(n) {
            i = [6, n],
            s = 0
        } finally {
            r = a = 0
        }
        if (5 & i[0]) throw i[1];
        return {
            value: i[0] ? i[1] : void 0,
            done: !0
        }
    }
    var r, s, a, o, _ = {
        label: 0,
        sent: function() {
            if (1 & a[0]) throw a[1];
            return a[1]
        },
        trys: [],
        ops: []
    };
    return o = {
        next: i(0),
        "throw": i(1),
        "return": i(2)
    },
    "function" == typeof Symbol && (o[Symbol.iterator] = function() {
        return this
    }),
    o
},
warehouse; !
function(e) {
    e.collectCanRelease = [];
    var t = function(t) {
        function i() {
            var e = t.call(this) || this;
            e._curAttrId = 0,
            e._searchStr = "",
            e.free = 0,
            e.tempStorage = new HashMap,
            e.tempCatchTime = [],
            e.allStorage = [],
            e._listAvailableToggle = !1,
            e.SORT_CONFIG = {
                id_down: {
                    name: "ID顺序",
                    sortImg: "warehouse_img_down_png"
                },
                id_up: {
                    name: "ID顺序",
                    sortImg: "warehouse_img_up_png"
                },
                lvl_down: {
                    name: "等级顺序",
                    sortImg: "warehouse_img_down_png"
                },
                lvl_up: {
                    name: "等级顺序",
                    sortImg: "warehouse_img_up_png"
                },
                tm_down: {
                    name: "获得顺序",
                    sortImg: "warehouse_img_down_png"
                },
                tm_up: {
                    name: "获得顺序",
                    sortImg: "warehouse_img_up_png"
                }
            },
            e.skinName = WarehouseReleaseSkin;
            var i = config.xml.getAnyRes("free_monster_list").Monsters.Monster;
            return e.limitCheckList = i.map(function(e) {
                return e.petId
            }),
            e
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            var i = this;
            t.prototype.childrenCreated.call(this),
            this.adaptLeftContent(this.releaseGroup),
            this.adaptRightContent(this.releaseGroup),
            this.adaptRightContent(this.allPetGroup),
            t.prototype.initBtnHelpById.call(this, 149);
            var n = egret.localStorage.getItem("warehouse_sortId_order_release_" + MainManager.actorID);
            this._currentSortType = n,
            this._listRelease.itemRenderer = e.WarehouseReleaseItem,
            this._listAll.itemRenderer = e.WarehouseReleaseHeadItem,
            this._arrayCollection = new eui.ArrayCollection,
            this._arrayRelease = new eui.ArrayCollection,
            this._listAll.dataProvider = this._arrayCollection,
            this._listRelease.dataProvider = this._arrayRelease,
            this.setSortInfo(),
            this.updateView(),
            ImageButtonUtil.add(this.img_btn_search_name,
            function() {
                i._searchStr = i.editable_search.text,
                "" != i._searchStr && "" != i._searchStr.trim() ? (i.img_fresh.visible = !0, i.img_btn_search_name.visible = !1) : i.editable_search.text = "",
                i._scroAll.stopAnimation(),
                i._scroAll.viewport.validateNow(),
                i._scroAll.viewport.scrollV = 0,
                i.updatePets()
            },
            this),
            ImageButtonUtil.add(this.img_fresh,
            function() {
                var e = i.editable_search.text;
                e = e.trim(),
                e != i._searchStr ? i._searchStr = e: (i.img_fresh.visible = !1, i.img_btn_search_name.visible = !0, i.editable_search.text = "", i._searchStr = ""),
                i._scroAll.stopAnimation(),
                i._scroAll.viewport.validateNow(),
                i._scroAll.viewport.scrollV = 0,
                i.updatePets()
            },
            this),
            ImageButtonUtil.add(this.closeRelease,
            function() {
                Alert.show("关闭遣返功能后，下次开启时将再次进入36小时的等待，确定要关闭遣返功能吗？",
                function() {
                    SocketConnection.sendByQueue(41953, [2, 0],
                    function() {
                        i.updateView(),
                        EventManager.dispatchEventWith("WarehouseRelease_UPDATE_RELEASE_TAG")
                    })
                })
            },
            this, !1),
            ImageButtonUtil.add(this.grp_btn_attr,
            function() {
                i.openSelectAttributePanel()
            },
            this, !1),
            ImageButtonUtil.add(this.bg_mask,
            function() {
                i.grp_select_sort.visible && i.hideSortTypePanel(),
                i.bg_mask.visible = !1
            },
            this, !1),
            ImageButtonUtil.add(this.ima_allRelease,
            function() {
                i.tempStorage.length <= 0 || Alert.show("确定要遣返共计" + i.tempStorage.length + "只精灵吗？",
                function() {
                    var e = i.checkHaveDot();
                    if (e) Alert.show("当前已选的遣返精灵中，存在需要谨慎遣返的精灵，确定要继续遣返吗？",
                    function() {
                        var e = i.exchangeType();
                        SocketConnection.sendByQueue(41953, [3, Math.floor(e.length / 2), KTool.clone(e)],
                        function() {
                            BubblerManager.getInstance().showText("遣返成功"),
                            i.tempStorage.clear(),
                            i.tempCatchTime = [],
                            i.updateView()
                        })
                    });
                    else {
                        var t = i.exchangeType();
                        SocketConnection.sendByQueue(41953, [3, Math.floor(t.length / 2), KTool.clone(t)],
                        function() {
                            BubblerManager.getInstance().showText("遣返成功"),
                            i.tempStorage.clear(),
                            i.tempCatchTime = [],
                            i.updateView()
                        })
                    }
                })
            },
            this),
            ImageButtonUtil.add(this.ima_allNot,
            function() {
                i.tempStorage.clear(),
                i.tempCatchTime = [],
                i._scroRelease.stopAnimation(),
                i._scroRelease.viewport.scrollV = 0,
                i.updatePets()
            },
            this),
            ImageButtonUtil.add(this.ima_open,
            function() {
                Alert.show("你将进入36小时的等待，等待时间结束后，精灵遣返功能正式开启，你确定要开启精灵遣返功能吗？",
                function() {
                    SocketConnection.sendByQueue(41953, [1, 0, []],
                    function() {
                        EventManager.dispatchEventWith("WarehouseRelease_UPDATE_RELEASE_TAG"),
                        i.updateView()
                    })
                })
            },
            this),
            ImageButtonUtil.add(this.ima_not,
            function() {
                Alert.show("撤销开启后，下次开启时将再次进入36小时的等待，确定要关闭遣返功能吗？",
                function() {
                    SocketConnection.sendByQueue(41953, [2, 0, []],
                    function() {
                        EventManager.dispatchEventWith("WarehouseRelease_UPDATE_RELEASE_TAG"),
                        TimeDelayUtils.clearAllTimeByThisObj(i),
                        i.updateView()
                    })
                })
            },
            this),
            ImageButtonUtil.add(this.grp_btn_sort, this.showSortTypePanel, this, !1);
            var r = new eui.Image("warehouse_release_list_tips_png");
            this.addChild(r),
            ImageButtonUtil.add(r,
            function() {
                PetStorage2015InfoManager.getTotalInfo(function() {
                    i.allStorage = PetStorage2015InfoManager.storageInfo.filter(function(e) {
                        return e.posi != PetStorage2015PosiType.TEAMTASK
                    }),
                    PopViewManager.getInstance().openView(new e.WarehouseReleaseTipsPop(i.updateCanReleaseStorage(), i.currentState, i._listAvailableToggle))
                })
            },
            this),
            r.x = this.usualBtnHelp.x + 40,
            r.y = this.usualBtnHelp.y,
            this.rb_id_sort_down.group.addEventListener(egret.Event.CHANGE, this.onChangeSortType, this),
            EventManager.addEventListener("WarehouseReleaseHeadItem_ITEM_TAP", this.toRelease, this),
            EventManager.addEventListener("WarehouseRelease_ITEM_CANCEL", this.toAll, this),
            EventManager.addEventListener("WarehouseReleasePop_release_item",
            function() {
                i.updatePets()
            },
            this),
            EventManager.addEventListener("WarehouseReleasePop_cancel_release_item",
            function(e) {
                var t = ~~e.data;
                i.tempStorage.remove(t);
                var n = i.tempCatchTime.indexOf(t);
                n > -1 && i.tempCatchTime.splice(n, 1),
                i.updatePets()
            },
            this),
            EventManager.addEventListener("WarehouseReleaseList_search_pet",
            function(e) {
                i._searchStr = i.editable_search.text = "" + ~~e.data,
                i._curAttrId = 0,
                i.updatePets(),
                i.img_fresh.visible = !0,
                i.img_btn_search_name.visible = !1
            },
            this),
            EventManager.addEventListener("WarehouseReleaseList_list_available",
            function(e) {
                i._listAvailableToggle = Boolean(e.data)
            },
            this)
        },
        i.prototype.toRelease = function(t) {
            var i = this,
            n = t.data;
            if (n && !this.tempStorage.containsKey(n.catchTime)) {
                var r = n.catchTime,
                s = n;
                return this.free + this.tempStorage.length >= 40 ? void BubblerManager.getInstance().showText("每日最多可以遣返40只哦") : void PetManager.upDateBagPetInfo(r,
                function(t) {
                    i.tempStorage.add(r, s),
                    i.tempCatchTime.push(r),
                    t.haveMark ? PopViewManager.getInstance().openView(new e.WarehouseReleasePop, null, t) : i.updatePets()
                })
            }
        },
        i.prototype.toAll = function(e) {
            var t = e.data;
            this.tempStorage.remove(t);
            var i = this.tempCatchTime.indexOf(t);
            i > -1 && this.tempCatchTime.splice(i, 1),
            this.updatePets()
        },
        i.prototype.setSortInfo = function() {
            return this._currentSortType ? (this.lab_select_sort.text = this.SORT_CONFIG[this._currentSortType].name, void(this.img_btn_sort.source = this.SORT_CONFIG[this._currentSortType].sortImg)) : void(this.lab_select_sort.text = "默认顺序")
        },
        i.prototype.updateView = function() {
            var e = this;
            KTool.getMultiValue([125051],
            function(t) {
                var i = 1e3 * t[0];
                if (0 == i) e.currentState = "notOpen";
                else {
                    var n = SystemTimerManager.sysBJDate.getTime();
                    if (n >= i) e.currentState = "release",
                    PetStorage2015InfoManager.getTotalInfo(function() {
                        e.allStorage = PetStorage2015InfoManager.storageInfo.filter(function(e) {
                            return e.posi != PetStorage2015PosiType.TEAMTASK
                        }),
                        e.updatePets()
                    });
                    else {
                        e.currentState = "wait";
                        var r = (i - n) / 1e3;
                        e.time.text = TimeUtil.countDownFormat(r, "hh:mm:ss"),
                        TimeDelayUtils.setInterval(function() {
                            return r--,
                            0 >= r ? (TimeDelayUtils.clearAllTimeByThisObj(e), void e.updateView()) : void(e.time.text = TimeUtil.countDownFormat(r, "hh:mm:ss"))
                        },
                        1e3, e)
                    }
                }
            })
        },
        i.prototype.updateCanReleaseStorage = function() {
            var e = this,
            t = [],
            i = this.allStorage;
            i = this.allStorage.filter(function(t) {
                return ! e.tempStorage.containsKey(t.catchTime)
            });
            for (var n = function(e) {
                var n = i[e],
                s = PetXMLInfo.getFreeForbidden(n.id);
                if (1 == s && r.limitCheckList.indexOf(n.id) < 0) return "continue";
                var a = i.filter(function(e) {
                    return e.id == n.id
                }),
                o = 1 != s; (a.length > 3 || o) && t.push(i[e])
            },
            r = this, s = 0; s < i.length; s++) n(s);
            return t
        },
        i.prototype.updatePets = function() {
            var t = this,
            i = this.updateCanReleaseStorage();
            this.sortByType(i),
            i = i.filter(function(e) {
                return ! t.tempStorage.containsKey(e.catchTime) && (e.type == t._curAttrId || 0 == t._curAttrId)
            }),
            e.collectCanRelease = KTool.clone(i),
            i = this.checkIsSearchStr(i),
            this._arrayCollection.replaceAll(i),
            this._listAll.selectedItem = null,
            this.updateRelease()
        },
        i.prototype.updateRelease = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var e, t, i, n, r, s, a, o, r, r;
                return __generator(this,
                function(_) {
                    switch (_.label) {
                    case 0:
                        return [4, KTool.getMultiValueAsync([207025])];
                    case 1:
                        for (e = _.sent(), this.free = e[0], t = 40, i = Math.min(this.free, t), this.num.text = i + "/" + t, n = [], r = 0; r < this.tempCatchTime.length; r++) s = this.tempCatchTime[r],
                        a = this.tempStorage.getValue(s),
                        n.push(a);
                        if (o = n.length + this.free, t > o) for (r = 0; t - o > r; r++) n.push(1);
                        for (r = 0; r < this.free; r++) n.push(2);
                        return this._arrayRelease.replaceAll(n),
                        this.closeRelease.visible = this.tempStorage.length <= 0,
                        this.ima_allNot.visible = this.ima_allRelease.visible = !this.closeRelease.visible,
                        [2]
                    }
                })
            })
        },
        i.prototype.sortByType = function(e) {
            switch (this._currentSortType) {
            case "id_down":
                e.sort(function(e, t) {
                    return t.id - e.id
                });
                break;
            case "id_up":
                e.sort(function(e, t) {
                    return e.id - t.id
                });
                break;
            case "lvl_down":
                e.sort(function(e, t) {
                    return t.level - e.level
                });
                break;
            case "lvl_up":
                e.sort(function(e, t) {
                    return e.level - t.level
                });
                break;
            case "tm_down":
                e.sort(function(e, t) {
                    return t.catchTime - e.catchTime
                });
                break;
            case "tm_up":
                e.sort(function(e, t) {
                    return e.catchTime - t.catchTime
                })
            }
        },
        i.prototype.checkIsSearchStr = function(e) {
            if (!this._searchStr || "" == this._searchStr.trim()) return e;
            var t = [],
            i = ~~this._searchStr;
            if (i) for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.id === i && t.push(r)
            } else for (var n = 0; n < e.length; n++) {
                var r = e[n]; - 1 != r.name.indexOf(this._searchStr) && t.push(r)
            }
            return t
        },
        i.prototype.showSortTypePanel = function() {
            var e = this._currentSortType;
            e && (this.rb_id_sort_down.group.selectedValue = e),
            this.grp_select_sort.alpha = 0,
            this.bg_mask.visible = !0,
            this.grp_select_sort.visible = !0,
            egret.Tween.removeTweens(this.grp_select_sort),
            egret.Tween.get(this.grp_select_sort).to({
                alpha: 1
            },
            300)
        },
        i.prototype.hideSortTypePanel = function() {
            var e = this;
            egret.Tween.removeTweens(this.grp_select_sort),
            egret.Tween.get(this.grp_select_sort).to({
                alpha: 0
            },
            300).call(function() {
                e.grp_select_sort.visible = !1
            },
            this),
            this.bg_mask.visible = !1
        },
        i.prototype.onChangeAttributeIdHanlder = function(e, t) {
            this._curAttrId = ~~t,
            this.bg_mask.visible = !1,
            this._scroAll.stopAnimation(),
            this._scroAll.viewport.validateNow(),
            this._scroAll.viewport.scrollV = 0,
            this.updatePets()
        },
        i.prototype.openSelectAttributePanel = function() {
            var e = {
                callBack: this.onChangeAttributeIdHanlder,
                caller: this,
                selectId: this._curAttrId,
                unAutoClose: !1,
                relativeSet: {
                    srcWorldPos: this.num.localToGlobal(),
                    dir: "left-top",
                    rx: 0,
                    ry: 0
                }
            };
            ModuleManager.showModule("petChooseAttributePanel", ["pet_choose_attribute_panel"], e, "", AppDoStyle.NULL)
        },
        i.prototype.onChangeSortType = function(e) {
            this.hideSortTypePanel(),
            this._currentSortType = this.rb_id_sort_down.group.selectedValue,
            egret.localStorage.setItem("warehouse_sortId_order_release_" + MainManager.actorID, this._currentSortType),
            this.setSortInfo(),
            this.updatePets()
        },
        i.prototype.checkHaveDot = function() {
            for (var t = this.tempStorage.getValues(), i = function(i) {
                var n = 1 != PetXMLInfo.getFreeForbidden(t[i].id),
                r = e.collectCanRelease.filter(function(e) {
                    return e.id == t[i].id
                });
                return r.length < 3 && n ? {
                    value: !0
                }: void 0
            },
            n = 0; n < t.length; n++) {
                var r = i(n);
                if ("object" == typeof r) return r.value
            }
            return ! 1
        },
        i.prototype.exchangeType = function() {
            for (var e = this.tempStorage.getValues().map(function(e) {
                var t = {
                    mon_id: e.id,
                    catch_time: e.catchTime
                };
                return t
            }), t = [], i = 0; i < e.length; i++) t.push(e[i].mon_id, e[i].catch_time);
            return t
        },
        i.prototype.destroy = function() {
            t.prototype.destroy.call(this),
            e.collectCanRelease.length = 0,
            this.rb_id_sort_down.group.removeEventListener(egret.Event.CHANGE, this.onChangeSortType, this),
            this._listAll.removeEventListener(eui.ItemTapEvent.ITEM_TAP, this.toRelease, this)
        },
        i
    } (BaseModule);
    e.WarehouseRelease = t,
    __reflect(t.prototype, "warehouse.WarehouseRelease")
} (warehouse || (warehouse = {}));
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
warehouse; !
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.markIds = [],
            t.catchTime = 0,
            t.send = [],
            t.skinName = WarehouseReleasePopSkin,
            t
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            var t = this;
            e.prototype.childrenCreated.call(this),
            ImageButtonUtil.add(this.close,
            function() {
                t.hide()
            },
            this),
            ImageButtonUtil.add(this.btnQX,
            function() {
                t.hide()
            },
            this),
            ImageButtonUtil.add(this.btnYJ,
            function() {
                for (var e = [], i = 0; i < t.send.length; i++) e.push(t.send[i].catch_time, t.send[i].inlay_hole_type, t.send[i].mintmark_id, t.send[i].obtain_time);
                SocketConnection.sendByQueue(41954, [t.send.length, e],
                function() {
                    BubblerManager.getInstance().showText("一键卸下成功"),
                    EventManager.dispatchEventWith("WarehouseReleasePop_release_item");
                    for (var e = 0; e < t.markIds.length; e++) t.markIds[e] > 0 && CountermarkController.changeMarkCache(t.markIds[e], 0);
                    t.markIds = [],
                    t.catchTime = 0,
                    t.hide()
                })
            },
            this)
        },
        t.prototype.setData = function(t) {
            e.prototype.setData.call(this, t)
        },
        t.prototype._upDateView = function() {
            var e = this,
            t = this._data;
            this.markIds = [CountermarkXMLInfo.getMarkId(t.abilityMark), CountermarkXMLInfo.getMarkId(t.skillMark), CountermarkXMLInfo.getMarkId(t.commonMark)];
            var i = [t.abilityMark, t.skillMark, t.commonMark];
            this.catchTime = t.catchTime;
            for (var n = function(t) {
                r["mark" + t].source = r.markIds[t] > 0 ? CountermarkXMLInfo.getIconURL(r.markIds[t]) : "",
                r.send.push({
                    catch_time: r.catchTime,
                    inlay_hole_type: t,
                    mintmark_id: 0,
                    obtain_time: 0
                }),
                ImageButtonUtil.remove(r["mark" + t]),
                ImageButtonUtil.add(r["mark" + t],
                function() {
                    if (e.markIds[t] > 0) {
                        var n = {
                            ins: CountermarkController.getInfoTemp(i[t])
                        };
                        tipsPop.TipsPop.openCounterMarkPop(n)
                    }
                },
                r)
            },
            r = this, s = 0; 3 > s; s++) n(s);
            this.pet.source = ClientConfig.getPetHeadPath(t.id)
        },
        t.prototype.destroy = function() {
            EventManager.dispatchEventWith("WarehouseReleasePop_cancel_release_item", !1, this.catchTime),
            e.prototype.destroy.call(this)
        },
        t
    } (PopView);
    e.WarehouseReleasePop = t,
    __reflect(t.prototype, "warehouse.WarehouseReleasePop")
} (warehouse || (warehouse = {}));
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
warehouse; !
function(e) {
    var t = function(t) {
        function i(e, i, n) {
            void 0 === n && (n = !1);
            var r = t.call(this) || this;
            r._curTab = 1,
            r.LatestLimitList = [1, 3514, 3515, 2446, 1217, 1362, 1295, 2078, 43, 1507, 2446, 1217, 1362, 1295, 2078, 1507],
            r.SumLimitList = [2446, 1217, 1362, 43, 1295, 2078, 1507, 699],
            r.isOpenRelease = !1,
            r._listAvailableToggle = !1,
            r.skinName = "WarehouseReleaseListSkin";
            var s = e.map(function(e, t, i) {
                return e.id
            });
            r.canReleaseArr = s.filter(function(e, t) {
                return s.indexOf(e) == t
            });
            var a = config.xml.getAnyRes("free_monster_list").Monsters.Monster;
            return r.LatestLimitList = a.filter(function(e) {
                return e.isNew > 0
            }).map(function(e) {
                return e.petId
            }),
            r.SumLimitList = a.map(function(e) {
                return e.petId
            }),
            r.tagStr = [],
            r.tagStr.push(config.xml.getAnyRes("free_monster_list").Monsters.UpdateDes),
            r.tagStr.push(config.xml.getAnyRes("free_monster_list").Monsters.SumDes),
            r.isOpenRelease = "release" == i,
            r._listAvailableToggle = n,
            r
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            var i = this;
            t.prototype.childrenCreated.call(this),
            this.noneTxt.visible = !1,
            this.content.itemRenderer = e.WarehouseItemHead,
            this.ary = new eui.ArrayCollection,
            this.content.dataProvider = this.ary,
            this.content.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.onSelectPet, this),
            ImageButtonUtil.add(this.closeBtn, this.hide, this),
            this.radGroup = new eui.RadioButtonGroup,
            this.radio1.group = this.radGroup,
            this.radio2.group = this.radGroup,
            this.radGroup.addEventListener(egret.Event.CHANGE, this.onChangeTab, this),
            this.onChangeTab(1),
            this.availableToggle.addEventListener(egret.Event.CHANGE, this.onChangeToggle, this),
            ImageButtonUtil.add(this.avaTxt,
            function() {
                i.availableToggle.selected = !i.availableToggle.selected,
                i._listAvailableToggle = i.availableToggle.selected,
                i.updateContent()
            },
            this, !1, !1),
            this.availableToggle.selected = this._listAvailableToggle,
            this.updateContent()
        },
        i.prototype.onChangeTab = function(e) {
            void 0 === e && (e = 0),
            0 == e || "number" != typeof e ? this._curTab = ~~this.radGroup.selectedValue: (this.radGroup.selectedValue = e, this._curTab = e),
            this.tagTxt.text = this.tagStr[this._curTab - 1],
            this.updateContent()
        },
        i.prototype.onChangeToggle = function() {
            this._listAvailableToggle = this.availableToggle.selected,
            this.updateContent()
        },
        i.prototype.onSelectPet = function(e) {
            var t = e.item;
            this.isOpenRelease && (this.canReleaseArr.indexOf(t) >= 0 ? (EventManager.dispatchEventWith("WarehouseReleaseList_search_pet", !1, t), this.hide()) : BubblerManager.getInstance().showText("该精灵于仓库中的数量未超过3只，不满足遣返条件"))
        },
        i.prototype.updateContent = function() {
            var e, t = this;
            e = 1 == this._curTab ? this.LatestLimitList.concat([]) : this.SumLimitList.concat([]),
            this._listAvailableToggle && (e = e.filter(function(e) {
                return t.canReleaseArr.indexOf(e) >= 0
            })),
            this.ary.replaceAll(e),
            this.noneTxt.visible = !(e.length > 0)
        },
        i.prototype.destroy = function() {
            this.content.removeEventListener(eui.ItemTapEvent.ITEM_TAP, this.onSelectPet, this),
            this.availableToggle.removeEventListener(egret.Event.CHANGE, this.onChangeToggle, this),
            EventManager.dispatchEventWith("WarehouseReleaseList_list_available", !1, this._listAvailableToggle),
            t.prototype.destroy.call(this)
        },
        i
    } (PopView);
    e.WarehouseReleaseTipsPop = t,
    __reflect(t.prototype, "warehouse.WarehouseReleaseTipsPop")
} (warehouse || (warehouse = {}));
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
__awaiter = this && this.__awaiter ||
function(e, t, i, n) {
    return new(i || (i = Promise))(function(r, s) {
        function a(e) {
            try {
                _(n.next(e))
            } catch(t) {
                s(t)
            }
        }
        function o(e) {
            try {
                _(n["throw"](e))
            } catch(t) {
                s(t)
            }
        }
        function _(e) {
            e.done ? r(e.value) : new i(function(t) {
                t(e.value)
            }).then(a, o)
        }
        _((n = n.apply(e, t || [])).next())
    })
},
__generator = this && this.__generator ||
function(e, t) {
    function i(e) {
        return function(t) {
            return n([e, t])
        }
    }
    function n(i) {
        if (r) throw new TypeError("Generator is already executing.");
        for (; _;) try {
            if (r = 1, s && (a = s[2 & i[0] ? "return": i[0] ? "throw": "next"]) && !(a = a.call(s, i[1])).done) return a;
            switch (s = 0, a && (i = [0, a.value]), i[0]) {
            case 0:
            case 1:
                a = i;
                break;
            case 4:
                return _.label++,
                {
                    value: i[1],
                    done: !1
                };
            case 5:
                _.label++,
                s = i[1],
                i = [0];
                continue;
            case 7:
                i = _.ops.pop(),
                _.trys.pop();
                continue;
            default:
                if (a = _.trys, !(a = a.length > 0 && a[a.length - 1]) && (6 === i[0] || 2 === i[0])) {
                    _ = 0;
                    continue
                }
                if (3 === i[0] && (!a || i[1] > a[0] && i[1] < a[3])) {
                    _.label = i[1];
                    break
                }
                if (6 === i[0] && _.label < a[1]) {
                    _.label = a[1],
                    a = i;
                    break
                }
                if (a && _.label < a[2]) {
                    _.label = a[2],
                    _.ops.push(i);
                    break
                }
                a[2] && _.ops.pop(),
                _.trys.pop();
                continue
            }
            i = t.call(e, _)
        } catch(n) {
            i = [6, n],
            s = 0
        } finally {
            r = a = 0
        }
        if (5 & i[0]) throw i[1];
        return {
            value: i[0] ? i[1] : void 0,
            done: !0
        }
    }
    var r, s, a, o, _ = {
        label: 0,
        sent: function() {
            if (1 & a[0]) throw a[1];
            return a[1]
        },
        trys: [],
        ops: []
    };
    return o = {
        next: i(0),
        "throw": i(1),
        "return": i(2)
    },
    "function" == typeof Symbol && (o[Symbol.iterator] = function() {
        return this
    }),
    o
},
warehouse; !
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.skinName = ItemHeadSkin,
            t
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            DisplayUtil.cacheAsBitmapDisplayObj(this),
            this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this)
        },
        t.prototype.dataChanged = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var e, t, i;
                return __generator(this,
                function(n) {
                    switch (n.label) {
                    case 0:
                        if ("number" == typeof this.data) return this.petTag.visible = !1,
                        DisplayUtil.removeForParent(this.img_select),
                        this.icon_effect.visible = !1,
                        this.elemet.visible = !1,
                        this.txtLv.visible = !1,
                        this.head.source = ClientConfig.getPetHeadPath(this.data),
                        this.txtName.text = StringUtil.parseStrLimitLen(PetXMLInfo.getName(this.data), 6),
                        ImageButtonUtil.add(this,
                        function() {},
                        this, !1),
                        [2];
                        if (this.mydata = this.data, this.grp_headInfo.visible = this.data, this.touchEnabled = this.touchChildren = Boolean(this.data), !this.data) return this.elemet.visible = !1,
                        [2];
                        switch (e = this.mydata.name, this.mydata.posi) {
                        case 14:
                            this.petTag.visible = !0,
                            this.petTag.source = "warehousenew_TEAMTASK_png";
                            break;
                        default:
                            this.petTag.visible = !1
                        }
                        return this.bg.source = "common_pet_head_bg_png",
                        t = PetManager.getPetInfo(this.mydata.catchTime),
                        t && (this.petTag.visible = !0, this.petTag.source = "warehousenew_BAG_png"),
                        [4, KTool.checkHasAdvanced(t, this.mydata.id, this.mydata.catchTime)];
                    case 1:
                        return i = n.sent(),
                        this.bg.source = i ? "common_pet_head_sy_bg_png": "common_pet_head_bg_png",
                        this.txtName.text = StringUtil.parseStrLimitLen(e, 6),
                        this.head.source = ClientConfig.getPetHeadPath(this.mydata.id),
                        this.icon_attr.source = ClientConfig.getpettypeticon(this.mydata.type + ""),
                        this.txtLv.text = "Lv." + this.mydata.level,
                        [2]
                    }
                })
            })
        },
        t.prototype.destroy = function() {
            this.mydata = null,
            this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this)
        },
        t
    } (eui.ItemRenderer);
    e.WarehouseItemHead = t,
    __reflect(t.prototype, "warehouse.WarehouseItemHead")
} (warehouse || (warehouse = {}));
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
warehouse; !
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.skinName = WarehouseReleaseHeadItemSkin,
            t
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            var t = this;
            e.prototype.childrenCreated.call(this),
            ImageButtonUtil.add(this.show,
            function() {
                var e = t.pet,
                i = {};
                i.catchTime = e.catchTime,
                i.buttonInfo = [{
                    buttonBG: 1,
                    buttonName: "遣返",
                    callback: function() {
                        PopViewManager.getInstance().hideAll(),
                        EventManager.dispatchEventWith("WarehouseReleaseHeadItem_ITEM_TAP", !1, KTool.clone(e))
                    },
                    caller: t
                }],
                ModuleManager.showModuleByID(227, i)
            },
            this),
            ImageButtonUtil.add(this.head,
            function() {
                EventManager.dispatchEventWith("WarehouseReleaseHeadItem_ITEM_TAP", !1, KTool.clone(t.pet))
            },
            this)
        },
        t.prototype.dataChanged = function() {
            if (this.data) {
                this.pet = this.data,
                this.touchEnabled = this.touchChildren = Boolean(this.data);
                var e = this.pet.name;
                this.txtName.text = StringUtil.parseStrLimitLen(e, 6),
                this.head.source = ClientConfig.getPetHeadPath(this.pet.id),
                this.icon_attr.source = ClientConfig.getpettypeticon(this.pet.type + ""),
                this.txtLv.text = "Lv." + this.pet.level,
                this.txtId.text = this.pet.id + "",
                this.txtId.visible = !IS_RELEASE,
                this.cacheAsBitmap = !0
            }
        },
        t
    } (BaseItemRenderer);
    e.WarehouseReleaseHeadItem = t,
    __reflect(t.prototype, "warehouse.WarehouseReleaseHeadItem")
} (warehouse || (warehouse = {}));
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
warehouse; !
function(e) {
    var t = function(t) {
        function i() {
            var e = t.call(this) || this;
            return e.skinName = WarehouseReleaseItemSkin,
            e.cacheAsBitmap = !0,
            e
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            var e = this;
            t.prototype.childrenCreated.call(this),
            ImageButtonUtil.add(this.imaCancel,
            function() {
                EventManager.dispatchEventWith("WarehouseRelease_ITEM_CANCEL", !1, e.info.catchTime)
            },
            this),
            ImageButtonUtil.add(this.dot,
            function() {
                BubblerManager.getInstance().showText("当前精灵在仓库中的数量低于3只，请谨慎遣返")
            },
            this)
        },
        i.prototype.dataChanged = function() {
            t.prototype.dataChanged.call(this),
            this.info = this.data,
            2 == ~~this.data || 1 == ~~this.data ? (this.dot.visible = !1, this.head.source = "", this.currentState = 1 == ~~this.data ? "no": "gone") : this.data && (this.currentState = "have", this.updateView())
        },
        i.prototype.updateView = function() {
            var t = this;
            this.head.source = ClientConfig.getPetHeadPath(this.info.id);
            var i = e.collectCanRelease.filter(function(e) {
                return e.id == t.info.id
            }),
            n = 1 != PetXMLInfo.getFreeForbidden(this.info.id);
            this.dot.visible = n && i.length < 3
        },
        i.prototype.destroy = function() {
            t.prototype.destroy.call(this),
            ImageButtonUtil.removeAll(this)
        },
        i
    } (BaseItemRenderer);
    e.WarehouseReleaseItem = t,
    __reflect(t.prototype, "warehouse.WarehouseReleaseItem")
} (warehouse || (warehouse = {}));
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
warehouse; !
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.hasSkillList = [],
            t.addEventListener(egret.Event.REMOVED_FROM_STAGE, t.destroy, t),
            DisplayUtil.cacheAsBitmapDisplayObj(t),
            t.skinName = "WareHouseSkillItemSkin",
            t
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this)
        },
        t.prototype.dataChanged = function() {
            var e, t;
            if ("number" == typeof this.data ? (e = this.data, t = 0) : (e = this.data.id, t = this.data.tag), e > 0) {
                this.kuang.visible = this.data.hasUse,
                this.setBG();
                var i = SkillXMLInfo.getTypeID(e),
                n = "";
                n = 4 == SkillXMLInfo.getCategory(e) ? ClientConfig.getpettypeticon("prop") : ClientConfig.getpettypeticon(String(i)),
                this.icon_attr.source = n,
                this.icon_attr.visible = !0,
                this.txt_name.text = SkillXMLInfo.getName(e),
                this.txt_hurti_value.text = SkillXMLInfo.getDamage(e).toString();
                var r = SkillXMLInfo.getPP(e).toString();
                this.txt_pp_value.text = r + "/" + r
            } else this.icon_attr.visible = !1,
            this.txt_name.text = "暂无",
            this.txt_hurti_value.text = "无",
            this.txt_pp_value.text = "无";
            t ? (this.tag.visible = !0, this.tag.source = "common_petSkill_tag" + t + "_png") : this.tag.visible = !1
        },
        t.prototype.destroy = function() {
            this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this)
        },
        t.prototype.setBG = function() {
            this.bg.source = this.data.canUse ? "warehousenew_skillbg_png": "warehousenew_skillbg_gray_png"
        },
        t
    } (eui.ItemRenderer);
    e.WarehouseSkillItem = t,
    __reflect(t.prototype, "warehouse.WarehouseSkillItem")
} (warehouse || (warehouse = {}));
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
warehouse; !
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.skinName = WareHouseSkinItemSkin,
            t
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this._petShow = new PetStaticModel,
            this._petShow.setSize(151, 221),
            this._petShow.setPetMaxScale(1),
            this.petPosition.addChild(this._petShow),
            this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this)
        },
        t.prototype.dataChanged = function() {
            var e = this;
            if (!this.data) return void(this.visible = !1);
            var t = config.xml.getAnyRes("noHalfPets").pets;
            this.visible = !0,
            this.lab_name.text = StringUtil.parseStrLimitLen(this.data.name, 8);
            var i = this.data,
            n = i.type;
            this.img_ys.source = "common_pet_skin_icon_" + n + "_png";
            var r;
            this._petShow.visible = !1;
            var s = 0;~~i.id > 0 ? (r = ClientConfig.getPetHalfIcon(i.id + 14e5), s = i.id + 14e5) : (r = ClientConfig.getHandBookSkin(i.skinPetId), s = i.skinPetId),
            this.icon_skin.visible = !1,
            this.icon_skin.source = null;
            var a = -1 == t.indexOf(s);
            a ? RES.getResByUrl(r).then(function(t) {
                e.icon_skin.source = t,
                e.icon_skin.visible = !0
            }) : (this._petShow.setPetStyleById(this.data.skinPetId), this._petShow.visible = !0)
        },
        t.prototype.destroy = function() {
            this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this)
        },
        t
    } (eui.ItemRenderer);
    e.WareHouseSKinItem = t,
    __reflect(t.prototype, "warehouse.WareHouseSKinItem")
} (warehouse || (warehouse = {}));
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
generateEUI.paths["resource/eui_skins/ItemHeadSkin.exml"] = window.ItemHeadSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["bg", "head", "img_icon", "txtName", "txtLv", "grp_headInfo", "petTag", "img_select", "icon_effect", "icon_attr", "elemet"],
        this.currentState = "up",
        this.height = 131,
        this.width = 105,
        this.elementsContent = [this._Group1_i()],
        this.states = [new eui.State("down", []), new eui.State("up", [new eui.SetProperty("img_select", "visible", !1)])]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Group1_i = function() {
        var e = new eui.Group;
        return e.scaleX = .95,
        e.scaleY = .95,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this.bg_i(), this.grp_headInfo_i(), this.petTag_i(), this.img_select_i(), this.icon_effect_i(), this.elemet_i()],
        e
    },
    i.bg_i = function() {
        var e = new eui.Image;
        return this.bg = e,
        e.source = "common_pet_head_bg_png",
        e.visible = !0,
        e.x = 3.5,
        e.y = 4,
        e
    },
    i.grp_headInfo_i = function() {
        var e = new eui.Group;
        return this.grp_headInfo = e,
        e.visible = !0,
        e.x = 5,
        e.y = 5,
        e.elementsContent = [this.head_i(), this.img_icon_i(), this.txtName_i(), this.txtLv_i()],
        e
    },
    i.head_i = function() {
        var e = new eui.Image;
        return this.head = e,
        e.height = 97,
        e.width = 97,
        e
    },
    i.img_icon_i = function() {
        var e = new eui.Image;
        return this.img_icon = e,
        e.height = 23,
        e.source = "",
        e.visible = !1,
        e.width = 22,
        e.x = 4,
        e.y = 71,
        e
    },
    i.txtName_i = function() {
        var e = new eui.Label;
        return this.txtName = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "精灵名字最多",
        e.textAlign = "center",
        e.textColor = 9025023,
        e.width = 100,
        e.y = 103,
        e
    },
    i.txtLv_i = function() {
        var e = new eui.Label;
        return this.txtLv = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.stroke = 1,
        e.strokeColor = 1320013,
        e.text = "LV.100",
        e.textColor = 16514896,
        e.x = 2,
        e.y = 83,
        e
    },
    i.petTag_i = function() {
        var e = new eui.Image;
        return this.petTag = e,
        e.x = 7,
        e.y = 7,
        e
    },
    i.img_select_i = function() {
        var e = new eui.Image;
        return this.img_select = e,
        e.anchorOffsetX = 0,
        e.anchorOffsetY = 0,
        e.height = 156,
        e.scale9Grid = new egret.Rectangle(32, 26, 29, 44),
        e.source = "common_select_rect_png",
        e.width = 130,
        e.x = -10,
        e.y = -10,
        e
    },
    i.icon_effect_i = function() {
        var e = new eui.Image;
        return this.icon_effect = e,
        e.height = 23,
        e.width = 22,
        e.x = 82.608,
        e.y = 81.92,
        e
    },
    i.elemet_i = function() {
        var e = new eui.Group;
        return this.elemet = e,
        e.x = 68,
        e.y = 5,
        e.elementsContent = [this._Image1_i(), this.icon_attr_i()],
        e
    },
    i._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "warehousenew_icon_attrbg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.icon_attr_i = function() {
        var e = new eui.Image;
        return this.icon_attr = e,
        e.height = 23,
        e.source = "warehousenew_icon_attr_png",
        e.width = 22,
        e.x = 12,
        e.y = 0,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/render/WarehouseReleaseHeadItemSkin.exml"] = window.WarehouseReleaseHeadItemSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["head", "txtName", "txtLv", "show", "icon_attr", "txtId"],
        this.height = 131,
        this.width = 105,
        this.elementsContent = [this._Group1_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Group1_i = function() {
        var e = new eui.Group;
        return e.height = 131,
        e.width = 105,
        e.x = 0,
        e.y = -.51,
        e.elementsContent = [this._Image1_i(), this.head_i(), this.txtName_i(), this.txtLv_i(), this.show_i(), this._Image2_i(), this.icon_attr_i(), this.txtId_i()],
        e
    },
    i._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "common_pet_head_bg_png",
        e.visible = !0,
        e.x = 0,
        e.y = 0,
        e
    },
    i.head_i = function() {
        var e = new eui.Image;
        return this.head = e,
        e.height = 97,
        e.width = 97,
        e.x = 1.5,
        e.y = 1,
        e
    },
    i.txtName_i = function() {
        var e = new eui.Label;
        return this.txtName = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "精灵名字最多",
        e.textAlign = "center",
        e.textColor = 9025023,
        e.width = 100,
        e.x = 1.5,
        e.y = 105.245,
        e
    },
    i.txtLv_i = function() {
        var e = new eui.Label;
        return this.txtLv = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.stroke = 1,
        e.strokeColor = 1320013,
        e.text = "LV.100",
        e.textColor = 16514896,
        e.touchEnabled = !1,
        e.x = 3.5,
        e.y = 84,
        e
    },
    i.show_i = function() {
        var e = new eui.Image;
        return this.show = e,
        e.height = 23,
        e.source = "warehousenew_btnsearch_png",
        e.width = 22,
        e.x = 79.11,
        e.y = 76.26,
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "warehousenew_icon_attrbg_png",
        e.touchEnabled = !1,
        e.x = 64.5,
        e.y = 1,
        e
    },
    i.icon_attr_i = function() {
        var e = new eui.Image;
        return this.icon_attr = e,
        e.height = 23,
        e.source = "warehousenew_icon_attr_png",
        e.touchEnabled = !1,
        e.width = 22,
        e.x = 76.5,
        e.y = 1,
        e
    },
    i.txtId_i = function() {
        var e = new eui.Label;
        return this.txtId = e,
        e.fontFamily = "MFShangHei",
        e.size = 20,
        e.stroke = 1,
        e.strokeColor = 16777215,
        e.text = "10086",
        e.textColor = 9025023,
        e.x = 3.443,
        e.y = 4.209,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/render/WarehouseReleaseItemSkin.exml"] = window.WarehouseReleaseItemSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["head", "dot", "imaCancel"],
        this.currentState = "no",
        this.height = 100,
        this.width = 100,
        this.elementsContent = [this._Group1_i()],
        this.states = [new eui.State("gone", [new eui.SetProperty("imaCancel", "visible", !1), new eui.SetProperty("_Image2", "visible", !1)]), new eui.State("no", [new eui.SetProperty("imaCancel", "visible", !1), new eui.SetProperty("_Image3", "visible", !1)]), new eui.State("have", [new eui.SetProperty("_Image2", "visible", !1), new eui.SetProperty("_Image3", "visible", !1)])]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Group1_i = function() {
        var e = new eui.Group;
        return e.cacheAsBitmap = !0,
        e.horizontalCenter = 0,
        e.verticalCenter = 0,
        e.elementsContent = [this._Image1_i(), this.head_i(), this.dot_i(), this.imaCancel_i(), this._Image2_i(), this._Image3_i()],
        e
    },
    i._Image1_i = function() {
        var e = new eui.Image;
        return e.height = 100,
        e.horizontalCenter = 0,
        e.source = "warehouse_release_juxing_640_png",
        e.verticalCenter = 0,
        e.width = 100,
        e
    },
    i.head_i = function() {
        var e = new eui.Image;
        return this.head = e,
        e.height = 100,
        e.horizontalCenter = 0,
        e.verticalCenter = 0,
        e.width = 100,
        e
    },
    i.dot_i = function() {
        var e = new eui.Image;
        return this.dot = e,
        e.height = 34,
        e.source = "dot_png",
        e.visible = !1,
        e.width = 34,
        e.x = 1,
        e.y = 2,
        e
    },
    i.imaCancel_i = function() {
        var e = new eui.Image;
        return this.imaCancel = e,
        e.height = 30,
        e.source = "warehouse_release_imacancel_png",
        e.width = 48,
        e.x = 51,
        e.y = 70,
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return this._Image2 = e,
        e.source = "warehouse_release_noselect_png",
        e.x = 13,
        e.y = 42,
        e
    },
    i._Image3_i = function() {
        var e = new eui.Image;
        return this._Image3 = e,
        e.source = "warehouse_release_gone_png",
        e.x = 13,
        e.y = 13,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/render/WareHouseSkillItemSkin.exml"] = window.WareHouseSkillItemSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["bg", "icon_attr", "kuang", "txt_name", "txt_pp_value", "txt_hurti_value", "tag", "sk"],
        this.height = 111,
        this.width = 213,
        this.elementsContent = [this.sk_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i.sk_i = function() {
        var e = new eui.Group;
        return this.sk = e,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this.bg_i(), this.icon_attr_i(), this.kuang_i(), this.txt_name_i(), this.txt_pp_value_i(), this.txt_hurti_value_i(), this._Label1_i(), this._Label2_i(), this.tag_i()],
        e
    },
    i.bg_i = function() {
        var e = new eui.Image;
        return this.bg = e,
        e.scale9Grid = new egret.Rectangle(60, 6, 60, 45),
        e.source = "warehousenew_skillbg_gray_png",
        e.visible = !0,
        e.x = 15,
        e.y = 15,
        e
    },
    i.icon_attr_i = function() {
        var e = new eui.Image;
        return this.icon_attr = e,
        e.height = 27,
        e.source = "",
        e.width = 27,
        e.x = 19,
        e.y = 28,
        e
    },
    i.kuang_i = function() {
        var e = new eui.Image;
        return this.kuang = e,
        e.source = "warehousenew_kuang_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.txt_name_i = function() {
        var e = new eui.Label;
        return this.txt_name = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "技能名字几个字",
        e.textColor = 15068927,
        e.x = 47,
        e.y = 33,
        e
    },
    i.txt_pp_value_i = function() {
        var e = new eui.Label;
        return this.txt_pp_value = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "20/20",
        e.textAlign = "left",
        e.textColor = 6027519,
        e.x = 141,
        e.y = 64,
        e
    },
    i.txt_hurti_value_i = function() {
        var e = new eui.Label;
        return this.txt_hurti_value = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "100",
        e.textAlign = "left",
        e.textColor = 6027519,
        e.x = 69,
        e.y = 64,
        e
    },
    i._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "PP:",
        e.textColor = 6027519,
        e.x = 110,
        e.y = 64,
        e
    },
    i._Label2_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "威力:",
        e.textColor = 6027519,
        e.x = 25,
        e.y = 64,
        e
    },
    i.tag_i = function() {
        var e = new eui.Image;
        return this.tag = e,
        e.height = 17,
        e.source = "",
        e.width = 40,
        e.x = 157,
        e.y = 15,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/render/WareHouseSkinItemSkin.exml"] = window.WareHouseSkinItemSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["icon_skin", "petPosition", "lab_name", "select_img", "img_ys", "grp_item"],
        this.height = 229,
        this.width = 158,
        this.elementsContent = [this.grp_item_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i.grp_item_i = function() {
        var e = new eui.Group;
        return this.grp_item = e,
        e.anchorOffsetX = 100,
        e.anchorOffsetY = 145,
        e.x = 100,
        e.y = 175,
        e.elementsContent = [this._Image1_i(), this.icon_skin_i(), this.petPosition_i(), this._Image2_i(), this.lab_name_i(), this.select_img_i(), this.img_ys_i()],
        e
    },
    i._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "warehousenew_bg_png",
        e.x = 7,
        e.y = 5,
        e
    },
    i.icon_skin_i = function() {
        var e = new eui.Image;
        return this.icon_skin = e,
        e.height = 212,
        e.source = "",
        e.visible = !0,
        e.width = 140,
        e.x = 10,
        e.y = 8,
        e
    },
    i.petPosition_i = function() {
        var e = new eui.Group;
        return this.petPosition = e,
        e.x = 80,
        e.y = 180,
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "warehousenew_name_bg_png",
        e.x = 8,
        e.y = 180,
        e
    },
    i.lab_name_i = function() {
        var e = new eui.Label;
        return this.lab_name = e,
        e.fontFamily = "MFShangHei",
        e.size = 14.3914910950532,
        e.text = "精灵皮肤名字巴拉",
        e.textAlign = "center",
        e.textColor = 16514895,
        e.width = 144,
        e.x = 8,
        e.y = 203,
        e
    },
    i.select_img_i = function() {
        var e = new eui.Image;
        return this.select_img = e,
        e.source = "warehousenew_xzk_png",
        e.visible = !0,
        e.x = 0,
        e.y = 0,
        e
    },
    i.img_ys_i = function() {
        var e = new eui.Image;
        return this.img_ys = e,
        e.height = 26,
        e.source = "warehousenew_img_ys_png",
        e.width = 83,
        e.x = 4,
        e.y = 4,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/WarehouseReleaseListSkin.exml"] = window.WarehouseReleaseListSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["closeBtn", "avaTxt", "tagTxt", "noneTxt", "content", "availableToggle", "radio1", "radio2"],
        this.height = 431,
        this.width = 753,
        this.elementsContent = [this._Image1_i(), this._Image2_i(), this._Image3_i(), this.closeBtn_i(), this.avaTxt_i(), this.tagTxt_i(), this.noneTxt_i(), this._Scroller1_i(), this.availableToggle_i(), this.radio1_i(), this.radio2_i()]
    }
    __extends(t, e);
    var i = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["labelDisplay"],
            this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "warehouse_release_list_gou5_png")]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.percentHeight = 100,
            e.source = "warehouse_release_list_searchBg_kb_png",
            e.percentWidth = 100,
            e
        },
        i.labelDisplay_i = function() {
            var e = new eui.Label;
            return this.labelDisplay = e,
            e.horizontalCenter = 0,
            e.touchEnabled = !1,
            e.verticalCenter = 0,
            e
        },
        t
    } (eui.Skin),
    n = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["labelDisplay"],
            this.elementsContent = [this._Image1_i()],
            this.labelDisplay_i(),
            this.states = [new eui.State("up", [new eui.AddItems("labelDisplay", "", 1, "")]), new eui.State("down", [new eui.AddItems("labelDisplay", "", 1, ""), new eui.SetProperty("_Image1", "source", "warehouse_release_list_select_png"), new eui.SetProperty("labelDisplay", "textColor", 16777215)]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.percentHeight = 100,
            e.source = "warehouse_blank_png",
            e.percentWidth = 100,
            e
        },
        i.labelDisplay_i = function() {
            var e = new eui.Label;
            return this.labelDisplay = e,
            e.fontFamily = "MFShangHei",
            e.horizontalCenter = 0,
            e.size = 20,
            e.text = "本期更新",
            e.textColor = 8036825,
            e.verticalCenter = 0,
            e
        },
        t
    } (eui.Skin),
    r = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["labelDisplay"],
            this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "warehouse_release_list_select_png"), new eui.SetProperty("labelDisplay", "textColor", 16777215)]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.percentHeight = 100,
            e.source = "warehouse_blank_png",
            e.percentWidth = 100,
            e
        },
        i.labelDisplay_i = function() {
            var e = new eui.Label;
            return this.labelDisplay = e,
            e.fontFamily = "MFShangHei",
            e.horizontalCenter = 0,
            e.size = 20,
            e.text = "限制总览",
            e.textColor = 8036825,
            e.verticalCenter = 0,
            e
        },
        t
    } (eui.Skin),
    s = t.prototype;
    return s._Image1_i = function() {
        var e = new eui.Image;
        return e.height = 430,
        e.source = "title_pop_2022_imge_735x431_bg_png",
        e.width = 753,
        e.x = 0,
        e.y = 1,
        e
    },
    s._Image2_i = function() {
        var e = new eui.Image;
        return e.height = 486.523,
        e.scaleX = .8,
        e.scaleY = .8,
        e.source = "adapt_leftbg_png",
        e.width = 214.872,
        e.x = 0,
        e.y = 34.402,
        e
    },
    s._Image3_i = function() {
        var e = new eui.Image;
        return e.height = 31,
        e.source = "warehouse_release_list_title_png",
        e.width = 103,
        e.x = 36,
        e.y = 2,
        e
    },
    s.closeBtn_i = function() {
        var e = new eui.Image;
        return this.closeBtn = e,
        e.height = 33,
        e.source = "title_pop_2022_btnclose_png",
        e.width = 33,
        e.x = 712,
        e.y = 1,
        e
    },
    s.avaTxt_i = function() {
        var e = new eui.Label;
        return this.avaTxt = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "  仅显示可遣返",
        e.textColor = 8631282,
        e.x = 624.774,
        e.y = 49,
        e
    },
    s.tagTxt_i = function() {
        var e = new eui.Label;
        return this.tagTxt = e,
        e.fontFamily = "MFShangHei",
        e.horizontalCenter = 82.5,
        e.size = 18,
        e.text = "特殊文本特殊文本特殊文本特殊文本",
        e.textColor = 6388143,
        e.y = 393.594,
        e
    },
    s.noneTxt_i = function() {
        var e = new eui.Label;
        return this.noneTxt = e,
        e.fontFamily = "MFShangHei",
        e.horizontalCenter = 82.5,
        e.size = 24,
        e.text = "暂无可遣返的限制精灵",
        e.textColor = 6388143,
        e.verticalCenter = 0,
        e.x = 325,
        e
    },
    s._Scroller1_i = function() {
        var e = new eui.Scroller;
        return e.height = 300,
        e.width = 570,
        e.x = 178,
        e.y = 80,
        e.viewport = this.content_i(),
        e
    },
    s.content_i = function() {
        var e = new eui.List;
        return this.content = e,
        e.layout = this._TileLayout1_i(),
        e
    },
    s._TileLayout1_i = function() {
        var e = new eui.TileLayout;
        return e
    },
    s.availableToggle_i = function() {
        var e = new eui.ToggleButton;
        return this.availableToggle = e,
        e.x = 599.078,
        e.y = 45,
        e.skinName = i,
        e
    },
    s.radio1_i = function() {
        var e = new eui.RadioButton;
        return this.radio1 = e,
        e.height = 63,
        e.label = "本期更新",
        e.value = "1",
        e.width = 171,
        e.x = 2,
        e.y = 46,
        e.skinName = n,
        e
    },
    s.radio2_i = function() {
        var e = new eui.RadioButton;
        return this.radio2 = e,
        e.height = 63,
        e.label = "限制总览",
        e.value = "2",
        e.width = 171,
        e.x = 2,
        e.y = 110,
        e.skinName = r,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/WarehouseReleasePopSkin.exml"] = window.WarehouseReleasePopSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["pet", "mark0", "mark1", "mark2", "close", "btnQX", "btnYJ"],
        this.height = 285,
        this.width = 481,
        this.elementsContent = [this._Group1_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Group1_i = function() {
        var e = new eui.Group;
        return e.x = 0,
        e.y = 0,
        e.elementsContent = [this._Image1_i(), this.pet_i(), this.mark0_i(), this.mark1_i(), this.mark2_i(), this.close_i(), this.btnQX_i(), this.btnYJ_i()],
        e
    },
    i._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "warehouse_release_pop_bg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.pet_i = function() {
        var e = new eui.Image;
        return this.pet = e,
        e.height = 70,
        e.width = 70,
        e.x = 36,
        e.y = 72,
        e
    },
    i.mark0_i = function() {
        var e = new eui.Image;
        return this.mark0 = e,
        e.height = 60,
        e.width = 60,
        e.x = 178,
        e.y = 77,
        e
    },
    i.mark1_i = function() {
        var e = new eui.Image;
        return this.mark1 = e,
        e.height = 60,
        e.width = 60,
        e.x = 277,
        e.y = 77,
        e
    },
    i.mark2_i = function() {
        var e = new eui.Image;
        return this.mark2 = e,
        e.height = 60,
        e.width = 60,
        e.x = 375,
        e.y = 77,
        e
    },
    i.close_i = function() {
        var e = new eui.Image;
        return this.close = e,
        e.source = "warehouse_release_pop_close_png",
        e.x = 439,
        e.y = 0,
        e
    },
    i.btnQX_i = function() {
        var e = new eui.Image;
        return this.btnQX = e,
        e.source = "warehouse_release_pop_btnquxiao_png",
        e.x = 67,
        e.y = 213,
        e
    },
    i.btnYJ_i = function() {
        var e = new eui.Image;
        return this.btnYJ = e,
        e.source = "warehouse_release_pop_btnyijian_png",
        e.x = 274,
        e.y = 213,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/WarehouseReleaseSkin.exml"] = window.WarehouseReleaseSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["releaseBg", "ima_allNot", "ima_allRelease", "closeRelease", "num", "_listRelease", "_scroRelease", "releaseGroup", "_listAll", "_scroAll", "img_btn_sort", "lab_select_sort", "grp_btn_sort", "grp_btn_attr", "editable_search", "img_btn_search_name", "img_fresh", "grp_serch", "allPetGroup", "bg_mask", "sort_bg", "rb_id_sort_down", "rb_id_sort_up", "rb_lvl_sort_down", "rb_lvl_sort_up", "rb_tm_sort_down", "rb_tm_sort_up", "grp_select_sort", "desc1", "ima_open", "notOpenGroup", "time", "ima_not", "waitingGroup"],
        this.currentState = "notOpen",
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.releaseGroup_i(), this.allPetGroup_i(), this.bg_mask_i(), this.grp_select_sort_i(), this.notOpenGroup_i(), this.waitingGroup_i()],
        this.states = [new eui.State("wait", [new eui.SetProperty("releaseGroup", "visible", !1), new eui.SetProperty("allPetGroup", "visible", !1), new eui.SetProperty("notOpenGroup", "visible", !1), new eui.SetProperty("waitingGroup", "visible", !0)]), new eui.State("notOpen", [new eui.SetProperty("releaseGroup", "visible", !1), new eui.SetProperty("allPetGroup", "visible", !1), new eui.SetProperty("notOpenGroup", "visible", !0), new eui.SetProperty("waitingGroup", "visible", !1)]), new eui.State("release", [new eui.SetProperty("notOpenGroup", "visible", !1), new eui.SetProperty("waitingGroup", "visible", !1)])]
    }
    __extends(t, e);
    var i = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["labelDisplay"],
            this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "warehouseid_sort_down_down_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "warehouseid_sort_down_up_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e
        },
        i.labelDisplay_i = function() {
            var e = new eui.Label;
            return this.labelDisplay = e,
            e.fontFamily = "MFShangHei",
            e.horizontalCenter = 0,
            e.verticalCenter = 0,
            e
        },
        t
    } (eui.Skin),
    n = function(e) {
        function t() {
            e.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "warehouseid_sort_up_down_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "warehouseid_sort_up_up_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e
        },
        t
    } (eui.Skin),
    r = function(e) {
        function t() {
            e.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "warehouselvl_sort_down_down_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "warehouselvl_sort_down_up_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e
        },
        t
    } (eui.Skin),
    s = function(e) {
        function t() {
            e.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "warehouselvl_sort_up_down_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "warehouselvl_sort_up_up_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e
        },
        t
    } (eui.Skin),
    a = function(e) {
        function t() {
            e.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "warehousetm_sort_down_down_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "warehousetm_sort_down_up_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e
        },
        t
    } (eui.Skin),
    o = function(e) {
        function t() {
            e.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "warehousetm_sort_up_down_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "warehousetm_sort_up_up_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e
        },
        t
    } (eui.Skin),
    _ = t.prototype;
    return _.releaseGroup_i = function() {
        var e = new eui.Group;
        return this.releaseGroup = e,
        e.left = 168,
        e.right = 531,
        e.y = 64,
        e.elementsContent = [this.releaseBg_i(), this._Image1_i(), this.ima_allNot_i(), this.ima_allRelease_i(), this.closeRelease_i(), this._Image2_i(), this._Group1_i(), this._scroRelease_i()],
        e
    },
    _.releaseBg_i = function() {
        var e = new eui.Image;
        return this.releaseBg = e,
        e.height = 546,
        e.left = 0,
        e.right = 0,
        e.scale9Grid = new egret.Rectangle(4, 4, 4, 4),
        e.source = "warehouse_release_releasebg_png",
        e.y = 0,
        e
    },
    _._Image1_i = function() {
        var e = new eui.Image;
        return e.height = 2,
        e.left = 9,
        e.right = 8,
        e.scale9Grid = new egret.Rectangle(4, 0, 4, 2),
        e.source = "warehouse_release_line_png",
        e.y = 32,
        e
    },
    _.ima_allNot_i = function() {
        var e = new eui.Image;
        return this.ima_allNot = e,
        e.horizontalCenter = -73.5,
        e.source = "warehouse_release_ima_allnot_png",
        e.y = 490,
        e
    },
    _.ima_allRelease_i = function() {
        var e = new eui.Image;
        return this.ima_allRelease = e,
        e.horizontalCenter = 73.5,
        e.source = "warehouse_release_ima_allrelease_png",
        e.y = 490,
        e
    },
    _.closeRelease_i = function() {
        var e = new eui.Image;
        return this.closeRelease = e,
        e.horizontalCenter = -1,
        e.source = "warehouse_release_ima_closeReleaseelease_png",
        e.visible = !1,
        e.y = 490,
        e
    },
    _._Image2_i = function() {
        var e = new eui.Image;
        return e.left = 2,
        e.source = "warehouse_release_ima1_png",
        e.y = 0,
        e
    },
    _._Group1_i = function() {
        var e = new eui.Group;
        return e.cacheAsBitmap = !0,
        e.height = 20,
        e.right = 0,
        e.width = 140,
        e.y = 7,
        e.elementsContent = [this._Label1_i(), this.num_i()],
        e
    },
    _._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "今日遣返：",
        e.textColor = 12834813,
        e.x = 0,
        e.y = 0,
        e
    },
    _.num_i = function() {
        var e = new eui.Label;
        return this.num = e,
        e.fontFamily = "MFShangHei",
        e.horizontalCenter = 38,
        e.size = 18,
        e.text = "40/40",
        e.textColor = 4187130,
        e.y = 2,
        e
    },
    _._scroRelease_i = function() {
        var e = new eui.Scroller;
        return this._scroRelease = e,
        e.height = 428.052,
        e.left = 6,
        e.right = 6,
        e.y = 55,
        e.viewport = this._listRelease_i(),
        e
    },
    _._listRelease_i = function() {
        var e = new eui.List;
        return this._listRelease = e,
        e.itemRendererSkinName = WarehouseReleaseItemSkin,
        e.layout = this._TileLayout1_i(),
        e
    },
    _._TileLayout1_i = function() {
        var e = new eui.TileLayout;
        return e.paddingLeft = 2,
        e.paddingTop = 1,
        e
    },
    _.allPetGroup_i = function() {
        var e = new eui.Group;
        return this.allPetGroup = e,
        e.right = 15,
        e.width = 506,
        e.y = 63,
        e.elementsContent = [this._scroAll_i(), this._Image3_i(), this.grp_btn_sort_i(), this.grp_btn_attr_i(), this.grp_serch_i()],
        e
    },
    _._scroAll_i = function() {
        var e = new eui.Scroller;
        return this._scroAll = e,
        e.height = 490,
        e.left = 3,
        e.right = 2,
        e.y = 56,
        e.viewport = this._listAll_i(),
        e
    },
    _._listAll_i = function() {
        var e = new eui.List;
        return this._listAll = e,
        e.itemRendererSkinName = ItemHeadSkin,
        e.layout = this._TileLayout2_i(),
        e
    },
    _._TileLayout2_i = function() {
        var e = new eui.TileLayout;
        return e.horizontalGap = 22,
        e.paddingLeft = 6,
        e.paddingTop = 6,
        e.verticalGap = 6,
        e
    },
    _._Image3_i = function() {
        var e = new eui.Image;
        return e.left = 0,
        e.source = "warehouse_release_ima2_png",
        e.y = 0,
        e
    },
    _.grp_btn_sort_i = function() {
        var e = new eui.Group;
        return this.grp_btn_sort = e,
        e.cacheAsBitmap = !0,
        e.right = 291,
        e.y = 1,
        e.elementsContent = [this._Image4_i(), this.img_btn_sort_i(), this.lab_select_sort_i()],
        e
    },
    _._Image4_i = function() {
        var e = new eui.Image;
        return e.source = "WarehouseNew_petfactor_cbg_png",
        e.touchEnabled = !1,
        e.x = 0,
        e.y = 0,
        e
    },
    _.img_btn_sort_i = function() {
        var e = new eui.Image;
        return this.img_btn_sort = e,
        e.source = "warehouse_img_up_png",
        e.visible = !0,
        e.x = 83,
        e.y = 9,
        e
    },
    _.lab_select_sort_i = function() {
        var e = new eui.Label;
        return this.lab_select_sort = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "ID顺序",
        e.textColor = 11586047,
        e.touchEnabled = !1,
        e.visible = !0,
        e.x = 9,
        e.y = 8,
        e
    },
    _.grp_btn_attr_i = function() {
        var e = new eui.Image;
        return this.grp_btn_attr = e,
        e.right = 170,
        e.source = "warehousenew_btnattr_png",
        e.visible = !0,
        e.y = 1,
        e
    },
    _.grp_serch_i = function() {
        var e = new eui.Group;
        return this.grp_serch = e,
        e.right = 0,
        e.y = 4,
        e.elementsContent = [this._Image5_i(), this.editable_search_i(), this.img_btn_search_name_i(), this.img_fresh_i()],
        e
    },
    _._Image5_i = function() {
        var e = new eui.Image;
        return e.source = "warehousenew_searchbg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    _.editable_search_i = function() {
        var e = new eui.EditableText;
        return this.editable_search = e,
        e.fontFamily = "MFShangHei",
        e.height = 18,
        e.prompt = "输入精灵名或ID",
        e.promptColor = 13097725,
        e.size = 15,
        e.textColor = 13097725,
        e.width = 108,
        e.x = 10,
        e.y = 8,
        e
    },
    _.img_btn_search_name_i = function() {
        var e = new eui.Image;
        return this.img_btn_search_name = e,
        e.source = "warehousenew_btnsearch_png",
        e.x = 131,
        e.y = 0,
        e
    },
    _.img_fresh_i = function() {
        var e = new eui.Image;
        return this.img_fresh = e,
        e.height = 29,
        e.source = "warehouse_release_fresh_png",
        e.visible = !1,
        e.width = 29,
        e.x = 131,
        e.y = 0,
        e
    },
    _.bg_mask_i = function() {
        var e = new eui.Rect;
        return this.bg_mask = e,
        e.bottom = 0,
        e.fillAlpha = .3,
        e.percentHeight = 100,
        e.left = 0,
        e.right = 0,
        e.scaleX = 1,
        e.scaleY = 1,
        e.top = 0,
        e.visible = !1,
        e.percentWidth = 100,
        e.x = 0,
        e.y = 0,
        e
    },
    _.grp_select_sort_i = function() {
        var e = new eui.Group;
        return this.grp_select_sort = e,
        e.cacheAsBitmap = !0,
        e.horizontalCenter = 92,
        e.scaleX = 1,
        e.scaleY = 1,
        e.visible = !1,
        e.y = 118,
        e.elementsContent = [this.sort_bg_i(), this.rb_id_sort_down_i(), this.rb_id_sort_up_i(), this.rb_lvl_sort_down_i(), this.rb_lvl_sort_up_i(), this.rb_tm_sort_down_i(), this.rb_tm_sort_up_i()],
        e
    },
    _.sort_bg_i = function() {
        var e = new eui.Image;
        return this.sort_bg = e,
        e.height = 150,
        e.scale9Grid = new egret.Rectangle(2, 2, 16, 16),
        e.source = "warehouse_sort_bg_png",
        e.width = 590,
        e.x = 0,
        e.y = 0,
        e
    },
    _.rb_id_sort_down_i = function() {
        var e = new eui.RadioButton;
        return this.rb_id_sort_down = e,
        e.groupName = "sortRelease",
        e.label = "",
        e.value = "id_down",
        e.x = 29,
        e.y = 17,
        e.skinName = i,
        e
    },
    _.rb_id_sort_up_i = function() {
        var e = new eui.RadioButton;
        return this.rb_id_sort_up = e,
        e.groupName = "sortRelease",
        e.value = "id_up",
        e.x = 29,
        e.y = 83,
        e.skinName = n,
        e
    },
    _.rb_lvl_sort_down_i = function() {
        var e = new eui.RadioButton;
        return this.rb_lvl_sort_down = e,
        e.groupName = "sortRelease",
        e.value = "lvl_down",
        e.x = 179,
        e.y = 17,
        e.skinName = r,
        e
    },
    _.rb_lvl_sort_up_i = function() {
        var e = new eui.RadioButton;
        return this.rb_lvl_sort_up = e,
        e.groupName = "sortRelease",
        e.value = "lvl_up",
        e.x = 179,
        e.y = 83,
        e.skinName = s,
        e
    },
    _.rb_tm_sort_down_i = function() {
        var e = new eui.RadioButton;
        return this.rb_tm_sort_down = e,
        e.groupName = "sortRelease",
        e.value = "tm_down",
        e.x = 331,
        e.y = 17,
        e.skinName = a,
        e
    },
    _.rb_tm_sort_up_i = function() {
        var e = new eui.RadioButton;
        return this.rb_tm_sort_up = e,
        e.groupName = "sortRelease",
        e.value = "tm_up",
        e.x = 331,
        e.y = 83,
        e.skinName = o,
        e
    },
    _.notOpenGroup_i = function() {
        var e = new eui.Group;
        return this.notOpenGroup = e,
        e.horizontalCenter = 48,
        e.visible = !1,
        e.y = 264,
        e.elementsContent = [this.desc1_i(), this.ima_open_i()],
        e
    },
    _.desc1_i = function() {
        var e = new eui.Image;
        return this.desc1 = e,
        e.source = "warehouse_release_desc1_png",
        e.visible = !0,
        e.x = 0,
        e.y = 0,
        e
    },
    _.ima_open_i = function() {
        var e = new eui.Image;
        return this.ima_open = e,
        e.source = "warehouse_release_ima_open_png",
        e.x = 224,
        e.y = 88,
        e
    },
    _.waitingGroup_i = function() {
        var e = new eui.Group;
        return this.waitingGroup = e,
        e.horizontalCenter = 47.5,
        e.visible = !1,
        e.y = 261,
        e.elementsContent = [this._Image6_i(), this.time_i(), this.ima_not_i()],
        e
    },
    _._Image6_i = function() {
        var e = new eui.Image;
        return e.source = "warehouse_release_wait_png",
        e.visible = !0,
        e.x = 0,
        e.y = 3,
        e
    },
    _.time_i = function() {
        var e = new eui.Label;
        return this.time = e,
        e.fontFamily = "MFShangHei",
        e.horizontalCenter = 48,
        e.size = 40,
        e.textAlign = "center",
        e.textColor = 16514896,
        e.y = -6,
        e
    },
    _.ima_not_i = function() {
        var e = new eui.Image;
        return this.ima_not = e,
        e.source = "warehouse_release_ima_not_png",
        e.x = 164,
        e.y = 91,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/WarehouseSkin.exml"] = window.WarehouseSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["scl_items_view_port", "scl_items", "editable_search", "img_btn_search_name", "grp_serch", "img_btn_sort", "lab_select_sort", "grp_btn_sort", "grp_btn_attr", "selectAttributePos", "pos_selectSort", "grpContent", "rb_shuxing", "rb_jineng", "rb_texing", "rb_pifu", "rightRb", "img_showHead", "lab_xingge", "lab_lvl", "lab_shuxing", "lab_id", "lab_texing", "lab_tianfu", "lab_name", "lab_getTm", "info", "arr_right", "arr_left", "txt_skinNum", "hasGet", "hasEquip", "viewport_list", "detail", "lab_atk", "lab_extra_atk", "lab_def", "lab_extra_def", "lab_extra_satk", "lab_satk", "lab_sdef", "lab_extra_sdef", "lab_speed", "lab_extra_speed", "lab_hp", "lab_extra_hp", "txtInfo", "img_btn_putbg", "img_btn_joinet", "img_btn_unJoint", "img_btn_show", "img_rune_0", "img_lock_0", "img_rune_1", "img_lock_1", "img_rune_2", "img_lock_2", "mark", "pro", "_skillist", "_scrol", "skill", "texingBg", "empty", "desc", "scro1", "titleDesc", "scro2", "img_yu", "groupTag", "img_btn_putbg_s", "img_btn_joinet_s", "img_btn_unJoint_s", "img_btn_show_s", "special", "grp_right", "petGroup", "panelGroup", "bg_mask", "sort_bg", "rb_id_sort_down", "rb_id_sort_up", "rb_lvl_sort_down", "rb_lvl_sort_up", "rb_tm_sort_down", "rb_tm_sort_up", "grp_select_sort", "menuGroup", "tag", "jyText", "jy_tip"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this._Image1_i(), this.petGroup_i(), this.panelGroup_i(), this.bg_mask_i(), this.grp_select_sort_i(), this.menuGroup_i(), this.tag_i(), this.jy_tip_i()]
    }
    __extends(t, e);
    var i = function(e) {
        function t() {
            e.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "WarehouseNew2_btnshuxing_up_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "WarehouseNew2_btnshuxing_down_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e
        },
        t
    } (eui.Skin),
    n = function(e) {
        function t() {
            e.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "WarehouseNew1_btnjineng_up_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "WarehouseNew1_btnjineng_down_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e
        },
        t
    } (eui.Skin),
    r = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["labelDisplay"],
            this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "warehousenew_special_img_texing_down_png")]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.percentHeight = 100,
            e.source = "warehousenew_special_img_texing_up_png",
            e.percentWidth = 100,
            e
        },
        i.labelDisplay_i = function() {
            var e = new eui.Label;
            return this.labelDisplay = e,
            e.horizontalCenter = 0,
            e.verticalCenter = 0,
            e
        },
        t
    } (eui.Skin),
    s = function(e) {
        function t() {
            e.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "WarehouseNew0_btnpifu_up_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "WarehouseNew0_btnpifu_down_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e
        },
        t
    } (eui.Skin),
    a = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["labelDisplay"],
            this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "warehouseid_sort_down_down_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "warehouseid_sort_down_up_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e
        },
        i.labelDisplay_i = function() {
            var e = new eui.Label;
            return this.labelDisplay = e,
            e.fontFamily = "MFShangHei",
            e.horizontalCenter = 0,
            e.verticalCenter = 0,
            e
        },
        t
    } (eui.Skin),
    o = function(e) {
        function t() {
            e.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "warehouseid_sort_up_down_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "warehouseid_sort_up_up_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e
        },
        t
    } (eui.Skin),
    _ = function(e) {
        function t() {
            e.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "warehouselvl_sort_down_down_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "warehouselvl_sort_down_up_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e
        },
        t
    } (eui.Skin),
    u = function(e) {
        function t() {
            e.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "warehouselvl_sort_up_down_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "warehouselvl_sort_up_up_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e
        },
        t
    } (eui.Skin),
    l = function(e) {
        function t() {
            e.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "warehousetm_sort_down_down_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "warehousetm_sort_down_up_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e
        },
        t
    } (eui.Skin),
    h = function(e) {
        function t() {
            e.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "warehousetm_sort_up_down_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "warehousetm_sort_up_up_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e
        },
        t
    } (eui.Skin),
    c = t.prototype;
    return c._Image1_i = function() {
        var e = new eui.Image;
        return e.percentHeight = 100,
        e.source = "common_ui_bg_3_jpg",
        e.percentWidth = 100,
        e.x = 0,
        e.y = 0,
        e
    },
    c.petGroup_i = function() {
        var e = new eui.Group;
        return this.petGroup = e,
        e.bottom = 0,
        e.left = 0,
        e.right = 0,
        e.top = 0,
        e.elementsContent = [this.grpContent_i(), this.grp_right_i()],
        e
    },
    c.grpContent_i = function() {
        var e = new eui.Group;
        return this.grpContent = e,
        e.left = 171,
        e.right = 465,
        e.scaleX = 1,
        e.scaleY = 1,
        e.x = 171,
        e.y = 64,
        e.elementsContent = [this.scl_items_i(), this.grp_serch_i(), this.grp_btn_sort_i(), this.grp_btn_attr_i(), this.selectAttributePos_i(), this.pos_selectSort_i()],
        e
    },
    c.scl_items_i = function() {
        var e = new eui.Scroller;
        return this.scl_items = e,
        e.height = 525,
        e.left = 0,
        e.right = 0,
        e.scrollPolicyH = "off",
        e.y = 51,
        e.viewport = this._Group1_i(),
        e
    },
    c._Group1_i = function() {
        var e = new eui.Group;
        return e.elementsContent = [this.scl_items_view_port_i()],
        e
    },
    c.scl_items_view_port_i = function() {
        var e = new eui.List;
        return this.scl_items_view_port = e,
        e.layout = this._TileLayout1_i(),
        e
    },
    c._TileLayout1_i = function() {
        var e = new eui.TileLayout;
        return e.paddingBottom = 10,
        e.paddingLeft = 10,
        e.paddingRight = 10,
        e.paddingTop = 10,
        e
    },
    c.grp_serch_i = function() {
        var e = new eui.Group;
        return this.grp_serch = e,
        e.x = 325,
        e.y = 3,
        e.elementsContent = [this._Image2_i(), this.editable_search_i(), this.img_btn_search_name_i()],
        e
    },
    c._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "warehousenew_searchbg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    c.editable_search_i = function() {
        var e = new eui.EditableText;
        return this.editable_search = e,
        e.fontFamily = "MFShangHei",
        e.height = 18,
        e.prompt = "输入精灵名或ID",
        e.promptColor = 13097725,
        e.size = 15,
        e.textColor = 13097725,
        e.width = 108,
        e.x = 10,
        e.y = 8,
        e
    },
    c.img_btn_search_name_i = function() {
        var e = new eui.Image;
        return this.img_btn_search_name = e,
        e.source = "warehousenew_btnsearch_png",
        e.x = 131,
        e.y = 0,
        e
    },
    c.grp_btn_sort_i = function() {
        var e = new eui.Group;
        return this.grp_btn_sort = e,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this._Image3_i(), this.img_btn_sort_i(), this.lab_select_sort_i()],
        e
    },
    c._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "WarehouseNew_petfactor_cbg_png",
        e.touchEnabled = !1,
        e.x = 0,
        e.y = 0,
        e
    },
    c.img_btn_sort_i = function() {
        var e = new eui.Image;
        return this.img_btn_sort = e,
        e.source = "warehouse_img_up_png",
        e.visible = !0,
        e.x = 83,
        e.y = 9,
        e
    },
    c.lab_select_sort_i = function() {
        var e = new eui.Label;
        return this.lab_select_sort = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "ID顺序",
        e.textColor = 11586047,
        e.touchEnabled = !1,
        e.visible = !0,
        e.x = 9,
        e.y = 8,
        e
    },
    c.grp_btn_attr_i = function() {
        var e = new eui.Image;
        return this.grp_btn_attr = e,
        e.source = "warehousenew_btnattr_png",
        e.visible = !0,
        e.x = 121,
        e.y = 0,
        e
    },
    c.selectAttributePos_i = function() {
        var e = new eui.Group;
        return this.selectAttributePos = e,
        e.height = 0,
        e.scaleX = 1,
        e.scaleY = 1,
        e.touchEnabled = !1,
        e.width = 0,
        e.x = 120,
        e.y = 42,
        e
    },
    c.pos_selectSort_i = function() {
        var e = new eui.Group;
        return this.pos_selectSort = e,
        e.height = 0,
        e.scaleX = 1,
        e.scaleY = 1,
        e.width = 0,
        e.y = 42,
        e
    },
    c.grp_right_i = function() {
        var e = new eui.Group;
        return this.grp_right = e,
        e.right = 14,
        e.scaleX = 1,
        e.scaleY = 1,
        e.visible = !0,
        e.x = 673,
        e.y = 71.99999999999997,
        e.elementsContent = [this._Image4_i(), this.rightRb_i(), this.info_i(), this.detail_i(), this.pro_i(), this.skill_i(), this.special_i()],
        e
    },
    c._Image4_i = function() {
        var e = new eui.Image;
        return e.source = "warehousenew_info_bg_png",
        e.x = 0,
        e.y = 36,
        e
    },
    c.rightRb_i = function() {
        var e = new eui.Group;
        return this.rightRb = e,
        e.x = 4,
        e.y = 0,
        e.elementsContent = [this.rb_shuxing_i(), this.rb_jineng_i(), this.rb_texing_i(), this.rb_pifu_i()],
        e
    },
    c.rb_shuxing_i = function() {
        var e = new eui.RadioButton;
        return this.rb_shuxing = e,
        e.groupName = "rbright",
        e.value = "1",
        e.x = 0,
        e.y = 0,
        e.skinName = i,
        e
    },
    c.rb_jineng_i = function() {
        var e = new eui.RadioButton;
        return this.rb_jineng = e,
        e.groupName = "rbright",
        e.value = "2",
        e.x = 101,
        e.y = 0,
        e.skinName = n,
        e
    },
    c.rb_texing_i = function() {
        var e = new eui.RadioButton;
        return this.rb_texing = e,
        e.groupName = "rbright",
        e.value = "4",
        e.x = 201,
        e.y = 0,
        e.skinName = r,
        e
    },
    c.rb_pifu_i = function() {
        var e = new eui.RadioButton;
        return this.rb_pifu = e,
        e.groupName = "rbright",
        e.value = "3",
        e.x = 301,
        e.y = 0,
        e.skinName = s,
        e
    },
    c.info_i = function() {
        var e = new eui.Group;
        return this.info = e,
        e.visible = !0,
        e.x = 24,
        e.y = 68,
        e.elementsContent = [this._Image5_i(), this.img_showHead_i(), this._Label1_i(), this.lab_xingge_i(), this._Label2_i(), this.lab_lvl_i(), this._Label3_i(), this.lab_shuxing_i(), this._Label4_i(), this.lab_id_i(), this._Label5_i(), this.lab_texing_i(), this._Label6_i(), this.lab_tianfu_i(), this.lab_name_i(), this.lab_getTm_i(), this._Image6_i()],
        e
    },
    c._Image5_i = function() {
        var e = new eui.Image;
        return e.source = "warehousenew_headbg_png",
        e.x = 1,
        e.y = 0,
        e
    },
    c.img_showHead_i = function() {
        var e = new eui.Image;
        return this.img_showHead = e,
        e.height = 68,
        e.visible = !0,
        e.width = 68,
        e.x = 3,
        e.y = 2,
        e
    },
    c._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "天赋：",
        e.textColor = 11520511,
        e.x = 92,
        e.y = 54,
        e
    },
    c.lab_xingge_i = function() {
        var e = new eui.Label;
        return this.lab_xingge = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "活泼",
        e.textColor = 6027519,
        e.x = 245,
        e.y = 31,
        e
    },
    c._Label2_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "等级：",
        e.textColor = 11520511,
        e.x = 92,
        e.y = 31,
        e
    },
    c.lab_lvl_i = function() {
        var e = new eui.Label;
        return this.lab_lvl = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "31",
        e.textColor = 6027519,
        e.x = 141,
        e.y = 31,
        e
    },
    c._Label3_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "性格：",
        e.textColor = 11520511,
        e.x = 195,
        e.y = 31,
        e
    },
    c.lab_shuxing_i = function() {
        var e = new eui.Label;
        return this.lab_shuxing = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "光",
        e.textColor = 6027519,
        e.x = 245,
        e.y = 54,
        e
    },
    c._Label4_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "属性：",
        e.textColor = 11520511,
        e.x = 195,
        e.y = 54,
        e
    },
    c.lab_id_i = function() {
        var e = new eui.Label;
        return this.lab_id = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "1234",
        e.textColor = 6027519,
        e.x = 360,
        e.y = 31,
        e
    },
    c._Label5_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "序号：",
        e.textColor = 11520511,
        e.x = 312,
        e.y = 31,
        e
    },
    c.lab_texing_i = function() {
        var e = new eui.Label;
        return this.lab_texing = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "瞬杀",
        e.textColor = 6027519,
        e.x = 360,
        e.y = 54,
        e
    },
    c._Label6_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "特性：",
        e.textColor = 11520511,
        e.x = 312,
        e.y = 54,
        e
    },
    c.lab_tianfu_i = function() {
        var e = new eui.Label;
        return this.lab_tianfu = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "100",
        e.textColor = 6027519,
        e.x = 140,
        e.y = 54,
        e
    },
    c.lab_name_i = function() {
        var e = new eui.Label;
        return this.lab_name = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "精灵名精灵名",
        e.textColor = 4187130,
        e.x = 93,
        e.y = 1,
        e
    },
    c.lab_getTm_i = function() {
        var e = new eui.Label;
        return this.lab_getTm = e,
        e.fontFamily = "MFShangHei",
        e.size = 14,
        e.text = "2019年11月20日获得",
        e.textColor = 6388143,
        e.width = 150,
        e.x = 140,
        e.y = 83,
        e
    },
    c._Image6_i = function() {
        var e = new eui.Image;
        return e.source = "warehousenew_jx_22_kb_png",
        e.x = 0,
        e.y = 90,
        e
    },
    c.detail_i = function() {
        var e = new eui.Group;
        return this.detail = e,
        e.visible = !1,
        e.x = 0,
        e.y = 68,
        e.elementsContent = [this.arr_right_i(), this.arr_left_i(), this.txt_skinNum_i(), this.hasGet_i(), this.hasEquip_i(), this.viewport_list_i()],
        e
    },
    c.arr_right_i = function() {
        var e = new eui.Image;
        return this.arr_right = e,
        e.source = "warehousenew_arr_right_png",
        e.x = 400,
        e.y = 264,
        e
    },
    c.arr_left_i = function() {
        var e = new eui.Image;
        return this.arr_left = e,
        e.source = "warehousenew_arr_left_png",
        e.x = 5,
        e.y = 264,
        e
    },
    c.txt_skinNum_i = function() {
        var e = new eui.Label;
        return this.txt_skinNum = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "已获得皮肤：1/3",
        e.textColor = 16514895,
        e.x = 158,
        e.y = 130,
        e
    },
    c.hasGet_i = function() {
        var e = new eui.Image;
        return this.hasGet = e,
        e.source = "warehousenew_yiyongyou_png",
        e.visible = !0,
        e.x = 184,
        e.y = 443,
        e
    },
    c.hasEquip_i = function() {
        var e = new eui.Image;
        return this.hasEquip = e,
        e.source = "warehousenew_yzb_png",
        e.visible = !0,
        e.x = 184,
        e.y = 443,
        e
    },
    c.viewport_list_i = function() {
        var e = new eui.List;
        return this.viewport_list = e,
        e.height = 310,
        e.width = 363,
        e.x = 40,
        e.y = 135,
        e.layout = this._HorizontalLayout1_i(),
        e
    },
    c._HorizontalLayout1_i = function() {
        var e = new eui.HorizontalLayout;
        return e
    },
    c.pro_i = function() {
        var e = new eui.Group;
        return this.pro = e,
        e.visible = !1,
        e.x = 33,
        e.y = 197,
        e.elementsContent = [this.txtInfo_i(), this.img_btn_putbg_i(), this.img_btn_joinet_i(), this.img_btn_unJoint_i(), this.img_btn_show_i(), this.mark_i()],
        e
    },
    c.txtInfo_i = function() {
        var e = new eui.Group;
        return this.txtInfo = e,
        e.visible = !0,
        e.x = -8,
        e.y = 0,
        e.elementsContent = [this._Group2_i(), this._Group3_i(), this._Group4_i(), this._Group5_i(), this._Group6_i(), this._Group7_i(), this._Group8_i()],
        e
    },
    c._Group2_i = function() {
        var e = new eui.Group;
        return e.visible = !0,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this._Image7_i(), this._Image8_i(), this._Image9_i(), this._Image10_i(), this._Image11_i(), this._Image12_i()],
        e
    },
    c._Image7_i = function() {
        var e = new eui.Image;
        return e.source = "warehousenew_tefang_png",
        e.x = 219,
        e.y = 35,
        e
    },
    c._Image8_i = function() {
        var e = new eui.Image;
        return e.source = "warehousenew_tili_png",
        e.x = 220,
        e.y = 70,
        e
    },
    c._Image9_i = function() {
        var e = new eui.Image;
        return e.source = "warehousenew_gongji_png",
        e.x = 1,
        e.y = 0,
        e
    },
    c._Image10_i = function() {
        var e = new eui.Image;
        return e.source = "warehousenew_sudu_png",
        e.x = 0,
        e.y = 69,
        e
    },
    c._Image11_i = function() {
        var e = new eui.Image;
        return e.source = "warehousenew_fangyu_png",
        e.x = 221,
        e
    },
    c._Image12_i = function() {
        var e = new eui.Image;
        return e.source = "warehousenew_tegong_png",
        e.x = 1,
        e.y = 35,
        e
    },
    c._Group3_i = function() {
        var e = new eui.Group;
        return e.x = 27,
        e.y = 4,
        e.elementsContent = [this._Label7_i(), this.lab_atk_i(), this.lab_extra_atk_i(), this._Image13_i()],
        e
    },
    c._Label7_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "攻击：",
        e.textColor = 11520511,
        e.x = 0,
        e.y = 0,
        e
    },
    c.lab_atk_i = function() {
        var e = new eui.Label;
        return this.lab_atk = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "99999",
        e.textColor = 5962239,
        e.x = 52,
        e
    },
    c.lab_extra_atk_i = function() {
        var e = new eui.Label;
        return this.lab_extra_atk = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "999",
        e.textColor = 16514895,
        e.x = 115,
        e
    },
    c._Image13_i = function() {
        var e = new eui.Image;
        return e.source = "warehousenew_texture_start_png",
        e.x = 100,
        e.y = 3,
        e
    },
    c._Group4_i = function() {
        var e = new eui.Group;
        return e.x = 245,
        e.y = 4,
        e.elementsContent = [this._Label8_i(), this.lab_def_i(), this.lab_extra_def_i(), this._Image14_i()],
        e
    },
    c._Label8_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "防御：",
        e.textColor = 11520511,
        e.x = 0,
        e.y = 0,
        e
    },
    c.lab_def_i = function() {
        var e = new eui.Label;
        return this.lab_def = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "999",
        e.textColor = 5962239,
        e.x = 52,
        e
    },
    c.lab_extra_def_i = function() {
        var e = new eui.Label;
        return this.lab_extra_def = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "999",
        e.textColor = 16514895,
        e.x = 115,
        e
    },
    c._Image14_i = function() {
        var e = new eui.Image;
        return e.source = "warehousenew_texture_start_png",
        e.x = 100,
        e.y = 3,
        e
    },
    c._Group5_i = function() {
        var e = new eui.Group;
        return e.x = 27,
        e.y = 36,
        e.elementsContent = [this._Label9_i(), this.lab_extra_satk_i(), this._Image15_i(), this.lab_satk_i()],
        e
    },
    c._Label9_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "特攻：",
        e.textColor = 11520511,
        e.x = 0,
        e.y = 0,
        e
    },
    c.lab_extra_satk_i = function() {
        var e = new eui.Label;
        return this.lab_extra_satk = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "999",
        e.textColor = 16514895,
        e.x = 115,
        e
    },
    c._Image15_i = function() {
        var e = new eui.Image;
        return e.source = "warehousenew_texture_start_png",
        e.x = 100,
        e.y = 3,
        e
    },
    c.lab_satk_i = function() {
        var e = new eui.Label;
        return this.lab_satk = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "999",
        e.textColor = 5962239,
        e.x = 52,
        e
    },
    c._Group6_i = function() {
        var e = new eui.Group;
        return e.x = 244,
        e.y = 36,
        e.elementsContent = [this._Label10_i(), this.lab_sdef_i(), this.lab_extra_sdef_i(), this._Image16_i()],
        e
    },
    c._Label10_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "特防：",
        e.textColor = 11520511,
        e.x = 0,
        e.y = 0,
        e
    },
    c.lab_sdef_i = function() {
        var e = new eui.Label;
        return this.lab_sdef = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "999",
        e.textColor = 5962239,
        e.x = 52,
        e
    },
    c.lab_extra_sdef_i = function() {
        var e = new eui.Label;
        return this.lab_extra_sdef = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "999",
        e.textColor = 16514895,
        e.x = 115,
        e
    },
    c._Image16_i = function() {
        var e = new eui.Image;
        return e.source = "warehousenew_texture_start_png",
        e.x = 100,
        e.y = 3,
        e
    },
    c._Group7_i = function() {
        var e = new eui.Group;
        return e.x = 27,
        e.y = 70,
        e.elementsContent = [this._Label11_i(), this.lab_speed_i(), this.lab_extra_speed_i(), this._Image17_i()],
        e
    },
    c._Label11_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "速度：",
        e.textColor = 11520511,
        e.x = 0,
        e.y = 0,
        e
    },
    c.lab_speed_i = function() {
        var e = new eui.Label;
        return this.lab_speed = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "999",
        e.textColor = 5962239,
        e.x = 52,
        e
    },
    c.lab_extra_speed_i = function() {
        var e = new eui.Label;
        return this.lab_extra_speed = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "999",
        e.textColor = 16514895,
        e.x = 115,
        e
    },
    c._Image17_i = function() {
        var e = new eui.Image;
        return e.source = "warehousenew_texture_start_png",
        e.x = 100,
        e.y = 4,
        e
    },
    c._Group8_i = function() {
        var e = new eui.Group;
        return e.x = 244,
        e.y = 70,
        e.elementsContent = [this._Label12_i(), this.lab_hp_i(), this.lab_extra_hp_i(), this._Image18_i()],
        e
    },
    c._Label12_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "体力： ",
        e.textColor = 11520511,
        e.x = 0,
        e.y = 0,
        e
    },
    c.lab_hp_i = function() {
        var e = new eui.Label;
        return this.lab_hp = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "999",
        e.textColor = 5962239,
        e.x = 52,
        e
    },
    c.lab_extra_hp_i = function() {
        var e = new eui.Label;
        return this.lab_extra_hp = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "999",
        e.textColor = 16514895,
        e.x = 115,
        e
    },
    c._Image18_i = function() {
        var e = new eui.Image;
        return e.source = "warehousenew_texture_start_png",
        e.x = 100,
        e.y = 4,
        e
    },
    c.img_btn_putbg_i = function() {
        var e = new eui.Image;
        return this.img_btn_putbg = e,
        e.source = "warehousenew_btnbag_png",
        e.x = 0,
        e.y = 269,
        e
    },
    c.img_btn_joinet_i = function() {
        var e = new eui.Image;
        return this.img_btn_joinet = e,
        e.source = "warehousenew_btnjing_png",
        e.x = 98,
        e.y = 269,
        e
    },
    c.img_btn_unJoint_i = function() {
        var e = new eui.Image;
        return this.img_btn_unJoint = e,
        e.source = "warehousenew_btnCancel_png",
        e.x = 98,
        e.y = 269,
        e
    },
    c.img_btn_show_i = function() {
        var e = new eui.Image;
        return this.img_btn_show = e,
        e.source = "warehousenew_btnzhan_png",
        e.x = 196,
        e.y = 269,
        e
    },
    c.mark_i = function() {
        var e = new eui.Group;
        return this.mark = e,
        e.visible = !0,
        e.x = 51,
        e.y = 146,
        e.elementsContent = [this._Group9_i(), this._Group10_i(), this._Group11_i()],
        e
    },
    c._Group9_i = function() {
        var e = new eui.Group;
        return e.x = 0,
        e.y = 11,
        e.elementsContent = [this._Image19_i(), this.img_rune_0_i(), this.img_lock_0_i()],
        e
    },
    c._Image19_i = function() {
        var e = new eui.Image;
        return e.source = "warehousenew_markbg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    c.img_rune_0_i = function() {
        var e = new eui.Image;
        return this.img_rune_0 = e,
        e.height = 50,
        e.source = "",
        e.visible = !0,
        e.width = 50,
        e.x = 11,
        e.y = 11,
        e
    },
    c.img_lock_0_i = function() {
        var e = new eui.Image;
        return this.img_lock_0 = e,
        e.source = "warehousenew_lock_png",
        e.visible = !1,
        e.x = 0,
        e.y = 0,
        e
    },
    c._Group10_i = function() {
        var e = new eui.Group;
        return e.x = 115,
        e.y = 11,
        e.elementsContent = [this._Image20_i(), this.img_rune_1_i(), this.img_lock_1_i()],
        e
    },
    c._Image20_i = function() {
        var e = new eui.Image;
        return e.source = "warehousenew_markbg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    c.img_rune_1_i = function() {
        var e = new eui.Image;
        return this.img_rune_1 = e,
        e.height = 50,
        e.source = "",
        e.width = 50,
        e.x = 11,
        e.y = 11,
        e
    },
    c.img_lock_1_i = function() {
        var e = new eui.Image;
        return this.img_lock_1 = e,
        e.source = "warehousenew_lock_png",
        e.visible = !1,
        e.x = 0,
        e.y = 0,
        e
    },
    c._Group11_i = function() {
        var e = new eui.Group;
        return e.x = 221,
        e.y = 11,
        e.elementsContent = [this._Image21_i(), this.img_rune_2_i(), this.img_lock_2_i()],
        e
    },
    c._Image21_i = function() {
        var e = new eui.Image;
        return e.source = "warehousenew_markbg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    c.img_rune_2_i = function() {
        var e = new eui.Image;
        return this.img_rune_2 = e,
        e.height = 50,
        e.source = "",
        e.width = 50,
        e.x = 11,
        e.y = 11,
        e
    },
    c.img_lock_2_i = function() {
        var e = new eui.Image;
        return this.img_lock_2 = e,
        e.source = "warehousenew_lock_png",
        e.visible = !0,
        e.x = 0,
        e.y = 0,
        e
    },
    c.skill_i = function() {
        var e = new eui.Group;
        return this.skill = e,
        e.visible = !1,
        e.x = 17,
        e.y = 176,
        e.elementsContent = [this._scrol_i()],
        e
    },
    c._scrol_i = function() {
        var e = new eui.Scroller;
        return this._scrol = e,
        e.height = 360,
        e.scaleX = 1,
        e.scaleY = 1,
        e.scrollPolicyH = "off",
        e.width = 413,
        e.x = 0,
        e.y = 0,
        e.viewport = this._Group12_i(),
        e
    },
    c._Group12_i = function() {
        var e = new eui.Group;
        return e.visible = !0,
        e.elementsContent = [this._skillist_i()],
        e
    },
    c._skillist_i = function() {
        var e = new eui.List;
        return this._skillist = e,
        e.layout = this._TileLayout2_i(),
        e
    },
    c._TileLayout2_i = function() {
        var e = new eui.TileLayout;
        return e.horizontalGap = -10,
        e.orientation = "rows",
        e.paddingLeft = 5,
        e.requestedColumnCount = 2,
        e.verticalGap = 0,
        e
    },
    c.special_i = function() {
        var e = new eui.Group;
        return this.special = e,
        e.visible = !0,
        e.x = 3.071,
        e.y = 179.862,
        e.elementsContent = [this.texingBg_i(), this.empty_i(), this.scro1_i(), this.scro2_i(), this.img_yu_i(), this.groupTag_i(), this.img_btn_putbg_s_i(), this.img_btn_joinet_s_i(), this.img_btn_unJoint_s_i(), this.img_btn_show_s_i()],
        e
    },
    c.texingBg_i = function() {
        var e = new eui.Image;
        return this.texingBg = e,
        e.height = 276,
        e.scale9Grid = new egret.Rectangle(20, 0, 2, 276),
        e.source = "warehousenew_special_texingbg_png",
        e.width = 442,
        e.x = 0,
        e.y = 0,
        e
    },
    c.empty_i = function() {
        var e = new eui.Label;
        return this.empty = e,
        e.fontFamily = "MFShangHei",
        e.size = 22,
        e.text = "该精灵未拥有专属特性",
        e.textColor = 8756947,
        e.visible = !1,
        e.x = 89,
        e.y = 149.646,
        e
    },
    c.scro1_i = function() {
        var e = new eui.Scroller;
        return this.scro1 = e,
        e.height = 101.546,
        e.width = 401,
        e.x = 22,
        e.y = 42.378,
        e.viewport = this._Group13_i(),
        e
    },
    c._Group13_i = function() {
        var e = new eui.Group;
        return e.layout = this._VerticalLayout1_i(),
        e.elementsContent = [this.desc_i()],
        e
    },
    c._VerticalLayout1_i = function() {
        var e = new eui.VerticalLayout;
        return e.paddingTop = 5,
        e
    },
    c.desc_i = function() {
        var e = new eui.Label;
        return this.desc = e,
        e.fontFamily = "MFShangHei",
        e.lineSpacing = 6,
        e.scaleX = 1,
        e.scaleY = 1,
        e.size = 16,
        e.textColor = 8756947,
        e.width = 400,
        e.x = 0,
        e.y = 0,
        e
    },
    c.scro2_i = function() {
        var e = new eui.Scroller;
        return this.scro2 = e,
        e.height = 98.66,
        e.width = 401,
        e.x = 23,
        e.y = 168.114,
        e.viewport = this._Group14_i(),
        e
    },
    c._Group14_i = function() {
        var e = new eui.Group;
        return e.layout = this._VerticalLayout2_i(),
        e.elementsContent = [this.titleDesc_i()],
        e
    },
    c._VerticalLayout2_i = function() {
        var e = new eui.VerticalLayout;
        return e.paddingTop = 5,
        e
    },
    c.titleDesc_i = function() {
        var e = new eui.Label;
        return this.titleDesc = e,
        e.fontFamily = "MFShangHei",
        e.lineSpacing = 6,
        e.scaleX = 1,
        e.scaleY = 1,
        e.size = 16,
        e.textColor = 8756947,
        e.visible = !0,
        e.width = 400,
        e.x = 0,
        e.y = 0,
        e
    },
    c.img_yu_i = function() {
        var e = new eui.Image;
        return this.img_yu = e,
        e.horizontalCenter = -191,
        e.source = "warehousenew_special_img_yu_png",
        e.verticalCenter = -143,
        e
    },
    c.groupTag_i = function() {
        var e = new eui.Group;
        return this.groupTag = e,
        e.visible = !0,
        e.x = 61.262,
        e.y = 6,
        e.layout = this._HorizontalLayout2_i(),
        e
    },
    c._HorizontalLayout2_i = function() {
        var e = new eui.HorizontalLayout;
        return e
    },
    c.img_btn_putbg_s_i = function() {
        var e = new eui.Image;
        return this.img_btn_putbg_s = e,
        e.source = "warehousenew_btnbag_png",
        e.x = 29.929,
        e.y = 285.882,
        e
    },
    c.img_btn_joinet_s_i = function() {
        var e = new eui.Image;
        return this.img_btn_joinet_s = e,
        e.source = "warehousenew_btnjing_png",
        e.x = 127.929,
        e.y = 285.882,
        e
    },
    c.img_btn_unJoint_s_i = function() {
        var e = new eui.Image;
        return this.img_btn_unJoint_s = e,
        e.source = "warehousenew_btnCancel_png",
        e.visible = !0,
        e.x = 127.929,
        e.y = 285.882,
        e
    },
    c.img_btn_show_s_i = function() {
        var e = new eui.Image;
        return this.img_btn_show_s = e,
        e.source = "warehousenew_btnzhan_png",
        e.x = 226,
        e.y = 285.882,
        e
    },
    c.panelGroup_i = function() {
        var e = new eui.Group;
        return this.panelGroup = e,
        e.bottom = 0,
        e.left = 0,
        e.right = 0,
        e.top = 0,
        e
    },
    c.bg_mask_i = function() {
        var e = new eui.Rect;
        return this.bg_mask = e,
        e.bottom = 0,
        e.fillAlpha = .3,
        e.percentHeight = 100,
        e.left = 0,
        e.right = 0,
        e.top = 0,
        e.visible = !1,
        e.percentWidth = 100,
        e
    },
    c.grp_select_sort_i = function() {
        var e = new eui.Group;
        return this.grp_select_sort = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.visible = !1,
        e.x = 175,
        e.y = 118,
        e.elementsContent = [this.sort_bg_i(), this.rb_id_sort_down_i(), this.rb_id_sort_up_i(), this.rb_lvl_sort_down_i(), this.rb_lvl_sort_up_i(), this.rb_tm_sort_down_i(), this.rb_tm_sort_up_i()],
        e
    },
    c.sort_bg_i = function() {
        var e = new eui.Image;
        return this.sort_bg = e,
        e.height = 150,
        e.scale9Grid = new egret.Rectangle(2, 2, 16, 16),
        e.source = "warehouse_sort_bg_png",
        e.width = 590,
        e.x = 0,
        e.y = 0,
        e
    },
    c.rb_id_sort_down_i = function() {
        var e = new eui.RadioButton;
        return this.rb_id_sort_down = e,
        e.groupName = "sortRbg",
        e.label = "",
        e.value = "id_down",
        e.x = 29,
        e.y = 17,
        e.skinName = a,
        e
    },
    c.rb_id_sort_up_i = function() {
        var e = new eui.RadioButton;
        return this.rb_id_sort_up = e,
        e.groupName = "sortRbg",
        e.value = "id_up",
        e.x = 29,
        e.y = 83,
        e.skinName = o,
        e
    },
    c.rb_lvl_sort_down_i = function() {
        var e = new eui.RadioButton;
        return this.rb_lvl_sort_down = e,
        e.groupName = "sortRbg",
        e.value = "lvl_down",
        e.x = 179,
        e.y = 17,
        e.skinName = _,
        e
    },
    c.rb_lvl_sort_up_i = function() {
        var e = new eui.RadioButton;
        return this.rb_lvl_sort_up = e,
        e.groupName = "sortRbg",
        e.value = "lvl_up",
        e.x = 179,
        e.y = 83,
        e.skinName = u,
        e
    },
    c.rb_tm_sort_down_i = function() {
        var e = new eui.RadioButton;
        return this.rb_tm_sort_down = e,
        e.groupName = "sortRbg",
        e.value = "tm_down",
        e.x = 331,
        e.y = 17,
        e.skinName = l,
        e
    },
    c.rb_tm_sort_up_i = function() {
        var e = new eui.RadioButton;
        return this.rb_tm_sort_up = e,
        e.groupName = "sortRbg",
        e.value = "tm_up",
        e.x = 331,
        e.y = 83,
        e.skinName = h,
        e
    },
    c.menuGroup_i = function() {
        var e = new eui.Group;
        return this.menuGroup = e,
        e.x = 0,
        e.y = 48,
        e
    },
    c.tag_i = function() {
        var e = new eui.Image;
        return this.tag = e,
        e.source = "warehouse_release_opening_png",
        e.x = 47,
        e.y = 180,
        e
    },
    c.jy_tip_i = function() {
        var e = new eui.Group;
        return this.jy_tip = e,
        e.right = 28,
        e.y = 14,
        e.elementsContent = [this._Image22_i(), this._Image23_i(), this.jyText_i()],
        e
    },
    c._Image22_i = function() {
        var e = new eui.Image;
        return e.height = 21,
        e.scale9Grid = new egret.Rectangle(9, 0, 2, 21),
        e.source = "warehouse_jy_icon_bg_png",
        e.width = 133,
        e.x = 12,
        e.y = 2,
        e
    },
    c._Image23_i = function() {
        var e = new eui.Image;
        return e.height = 26,
        e.source = "warehouse_jy_icon_png",
        e.width = 28,
        e.x = 0,
        e.y = 0,
        e
    },
    c.jyText_i = function() {
        var e = new eui.Label;
        return this.jyText = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "/",
        e.textAlign = "center",
        e.textColor = 12900350,
        e.width = 95,
        e.x = 30,
        e.y = 4,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/WarehouseSliderSkin.exml"] = window.WarehouseSliderSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["track", "thumb"],
        this.height = 530,
        this.width = 16,
        this.elementsContent = [this.track_i(), this.thumb_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i.track_i = function() {
        var e = new eui.Image;
        return this.track = e,
        e.percentHeight = 100,
        e.horizontalCenter = 0,
        e.scale9Grid = new egret.Rectangle(1, 1, 4, 4),
        e.source = "warehouse_img_progress_bg_png",
        e.width = 6,
        e.y = 0,
        e
    },
    i.thumb_i = function() {
        var e = new eui.Image;
        return this.thumb = e,
        e.horizontalCenter = 0,
        e.scale9Grid = new egret.Rectangle(2, 19, 12, 115),
        e.source = "warehouse_img_bar_png",
        e
    },
    t
} (eui.Skin);