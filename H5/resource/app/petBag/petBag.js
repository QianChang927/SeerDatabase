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
petBag; !
function(e) {
    var t = function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            this.radioButtonGroup = new eui.RadioButtonGroup,
            this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.remove, this),
            this.init(),
            this.addEvent()
        },
        t.prototype.init = function() {},
        t.prototype.addEvent = function() {},
        t.prototype.remove = function() {
            this.curIndex = 1
        },
        t.prototype.refresh = function(e) {
            this.petInfo = e,
            this.radioButtonGroup.selectedValue = this.curIndex,
            this.setIndex()
        },
        t.prototype.destroy = function() {
            ImageButtonUtil.removeAll(this),
            EventManager.removeAll(this),
            this.radioButtonGroup.removeEventListener(egret.Event.CHANGE, this.setIndex, this)
        },
        t.prototype.initRadioButton = function(e) {
            this.arrBtn = e;
            for (var t = 0,
            i = e; t < i.length; t++) {
                var n = i[t];
                n.group = this.radioButtonGroup
            }
            this.radioButtonGroup.addEventListener(egret.Event.CHANGE, this.setIndex, this)
        },
        t.prototype.setIndex = function() {
            this.curIndex = +this.radioButtonGroup.selectedValue || 1;
            for (var e in this.arrBtn) this.arrBtn[e].selected = +e + 1 == this.curIndex
        },
        t
    } (eui.Component);
    e.BaseView = t,
    __reflect(t.prototype, "petBag.BaseView")
} (petBag || (petBag = {}));
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
petBag; !
function(e) {
    var t = function(t) {
        function i(e, i) {
            var n = t.call(this) || this;
            return n.skinName = "PetBagMarkContrastPopSkin",
            n.top = n.bottom = n.left = n.right = 0,
            n.markNotEquip = e,
            n.markHasEquip = i,
            n
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            var t = this;
            if (this.imgRect.once(egret.TouchEvent.TOUCH_TAP, this.hide, this), this.markHasEquip) {
                this.markHasEquip.fromPetBag = !0,
                this.markHasEquip.isCurEquip = !0;
                var i = new tipsPop.UniversalMarkPopView(this.markHasEquip);
                this.group.addChild(i)
            }
            if (this.markNotEquip) {
                var n = new tipsPop.UniversalMarkPopView(this.markNotEquip);
                this.group.addChild(n)
            }
            var r = this.markNotEquip.ins;
            0 == CountermarkXMLInfo.getType(r.markID) ? this.gr_search_btns.visible = !1 : this.gr_search_btns.visible = !0,
            this.gr_search_btns.verticalCenter = this.group.height / 2 + 40,
            this.markHasEquip && this.markNotEquip ? (this.imge_arrowhead.visible = !0, this.gr_search_btns.horizontalCenter = this.group.width / 4 + 10) : (this.gr_search_btns.horizontalCenter = 0, this.imge_arrowhead.visible = !1),
            ImageButtonUtil.add(this.imge_name_search,
            function() {
                EventManager.dispatchEventWith(e.EventConst.MARK_VIEW_SEARCH, !1, {
                    searchType: 1,
                    info: t.markNotEquip.ins
                }),
                t.hide()
            },
            this),
            ImageButtonUtil.add(this.imge_series_search,
            function() {
                EventManager.dispatchEventWith(e.EventConst.MARK_VIEW_SEARCH, !1, {
                    searchType: 2,
                    info: t.markNotEquip.ins
                }),
                t.hide()
            },
            this)
        },
        i
    } (PopView);
    e.MarkContrastPop = t,
    __reflect(t.prototype, "petBag.MarkContrastPop")
} (petBag || (petBag = {}));
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
petBag; !
function(e) {
    var t = function(t) {
        function i() {
            var i = t.call(this) || this;
            return e.AttrConst.init(),
            i.init([{
                panelName: e.PanelConst.MAIN_PANEL,
                isMain: !0
            }]),
            i
        }
        return __extends(i, t),
        i.prototype.reShow = function() {
            this.panelMap[e.PanelConst.MAIN_PANEL].reshow()
        },
        i
    } (BasicMultPanelModule);
    e.PetBag = t,
    __reflect(t.prototype, "petBag.PetBag")
} (petBag || (petBag = {}));
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
petBag; !
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.skinName = "PetBagChangePopPetItemSkin",
            t
        }
        return __extends(t, e),
        t.prototype.dataChanged = function() {
            this.cacheAsBitmap = !0,
            this.txtLevel.text = "LV." + this.data.level,
            this.txtName.text = StringUtil.parseStrLimitLen(this.data.name, 6),
            this.imgHead.source = ClientConfig.getPetHeadPath(this.data.id),
            this.imgAttr.source = ClientConfig.getpettypeticon(PetXMLInfo.getType(this.data.id)),
            this.imgRoomTag.visible = this.data.posi == PetStorage2015PosiType.SHOW,
            this.imgTeamTag.visible = this.data.posi == PetStorage2015PosiType.TEAMTASK
        },
        t
    } (eui.ItemRenderer);
    e.ChangePetPopPetItem = t,
    __reflect(t.prototype, "petBag.ChangePetPopPetItem")
} (petBag || (petBag = {}));
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
petBag; !
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.skinName = "PetBagFifthSkillItem",
            t
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            this.imgSelect.visible = !1,
            this.imgState.visible = !1
        },
        t.prototype.dataChanged = function() {
            var e, t = this.data;
            if (4 == SkillXMLInfo.getCategory(t.id)) e = ClientConfig.getpettypeticon("prop");
            else {
                var i = SkillXMLInfo.getTypeID(t.id);
                e = ClientConfig.getpettypeticon(i + "")
            }
            this.txtName.text = t.name,
            this.imgIcon.source = e,
            this.txt.text = "威力：" + t.damage + "    PP：" + t.maxPP + "/" + t.maxPP,
            this.imgState.visible = !1,
            t.hasEquip && (this.imgState.visible = !0, this.imgState.source = "pet_bag_fifth_skill_hasGot_png"),
            t.hasGot || (this.imgState.visible = !0, this.imgState.source = "pet_bag_fifth_skill_notGot_png")
        },
        t.prototype.destroy = function() {
            delete this.data.hasEquip,
            delete this.data.hasGot,
            ImageButtonUtil.removeAll(this)
        },
        t
    } (eui.ItemRenderer);
    e.FifthSkillItem = t,
    __reflect(t.prototype, "petBag.FifthSkillItem")
} (petBag || (petBag = {}));
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
    return new(i || (i = Promise))(function(r, a) {
        function o(e) {
            try {
                u(n.next(e))
            } catch(t) {
                a(t)
            }
        }
        function s(e) {
            try {
                u(n["throw"](e))
            } catch(t) {
                a(t)
            }
        }
        function u(e) {
            e.done ? r(e.value) : new i(function(t) {
                t(e.value)
            }).then(o, s)
        }
        u((n = n.apply(e, t || [])).next())
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
        for (; u;) try {
            if (r = 1, a && (o = a[2 & i[0] ? "return": i[0] ? "throw": "next"]) && !(o = o.call(a, i[1])).done) return o;
            switch (a = 0, o && (i = [0, o.value]), i[0]) {
            case 0:
            case 1:
                o = i;
                break;
            case 4:
                return u.label++,
                {
                    value: i[1],
                    done: !1
                };
            case 5:
                u.label++,
                a = i[1],
                i = [0];
                continue;
            case 7:
                i = u.ops.pop(),
                u.trys.pop();
                continue;
            default:
                if (o = u.trys, !(o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                    u = 0;
                    continue
                }
                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                    u.label = i[1];
                    break
                }
                if (6 === i[0] && u.label < o[1]) {
                    u.label = o[1],
                    o = i;
                    break
                }
                if (o && u.label < o[2]) {
                    u.label = o[2],
                    u.ops.push(i);
                    break
                }
                o[2] && u.ops.pop(),
                u.trys.pop();
                continue
            }
            i = t.call(e, u)
        } catch(n) {
            i = [6, n],
            a = 0
        } finally {
            r = o = 0
        }
        if (5 & i[0]) throw i[1];
        return {
            value: i[0] ? i[1] : void 0,
            done: !0
        }
    }
    var r, a, o, s, u = {
        label: 0,
        sent: function() {
            if (1 & o[0]) throw o[1];
            return o[1]
        },
        trys: [],
        ops: []
    };
    return s = {
        next: i(0),
        "throw": i(1),
        "return": i(2)
    },
    "function" == typeof Symbol && (s[Symbol.iterator] = function() {
        return this
    }),
    s
},
petBag; !
function(e) {
    var t = function(t) {
        function i() {
            var e = t.call(this) || this;
            return e.skinName = "PetBagMainPanelPetItemSkin",
            e
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            this.setSelected(!1),
            this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this),
            this.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this),
            EventManager.addEventListener(e.EventConst.MAIN_PANEL_SELECT_PET, this.onItemSelected, this)
        },
        i.prototype.setPetInfo = function(e, t) {
            return void 0 === t && (t = 0),
            __awaiter(this, void 0, void 0,
            function() {
                var i;
                return __generator(this,
                function(n) {
                    switch (n.label) {
                    case 0:
                        return this.petInfo = e,
                        this.setSelected(!1),
                        this.cacheAsBitmap = !0,
                        this.groupNull.visible = !this.petInfo,
                        e ? (this.imgHead.source = ClientConfig.getPetHeadPath(e.id, e.catchTime, e.skinId), this.imgAttr.source = ClientConfig.getpettypeticon(PetXMLInfo.getType(e.id)), this.txtName.text = StringUtil.parseStrLimitLen(e.name, 5), this.txtLevel.text = "LV." + e.level, e.hp > e.maxHp && (e.hp = e.maxHp), 0 == e.maxHp ? this.imgHP.scaleX = 1 : this.imgHP.scaleX = e.hp / e.maxHp, this.imgFirst.visible = this.isFirst, [4, KTool.checkHasAdvanced(e)]) : [3, 2];
                    case 1:
                        return i = n.sent(),
                        this.bg.source = i ? "pet_bag_main_panep_pet_item_img_sy_bg_png": "pet_bag_main_panep_pet_item_imgbg_png",
                        [3, 3];
                    case 2:
                        this.imgHead.source = null,
                        this.imgAttr.source = null,
                        this.txtName.text = null,
                        this.txtLevel.text = null,
                        this.imgHP.scaleX = 0,
                        this.imgFirst.visible = !1,
                        this.bg.source = "pet_bag_main_panep_pet_item_imgbg_png",
                        n.label = 3;
                    case 3:
                        return t ? (this.imgVip.visible = !0, this.imgVip.source = "vipPng_" + t + "_png") : this.imgVip.visible = !1,
                        t && GameInfo.isChecking && (this.visible = !1),
                        [2]
                    }
                })
            })
        },
        i.prototype.setSelected = function(e) {
            this.imgSelected.visible = e
        },
        i.prototype.onCure = function() {
            this.petInfo && (this.imgHP.scaleX = 1)
        },
        i.prototype.destroy = function() {
            EventManager.removeAll(this),
            ImageButtonUtil.removeAll(this)
        },
        i.prototype.onItemSelected = function(e) {
            this.setSelected(e.data && this.petInfo && e.data.catchTime == this.petInfo.catchTime)
        },
        i.prototype.onTouchBegin = function(t) {
            EventManager.dispatchEventWith(e.EventConst.MAIN_PANEL_TOUCH_PET_ITEM_BEGIN, !1, {
                petInfo: this.petInfo,
                touchEvent: t
            })
        },
        i.prototype.onTouchEnd = function() {
            this.imgVip.visible || EventManager.dispatchEventWith(e.EventConst.MAIN_PANEL_TOUCH_PET_ITEM_End, !1, {
                petInfo: this.petInfo,
                parent: this.parent
            })
        },
        i
    } (eui.Component);
    e.MainPanelPetItem = t,
    __reflect(t.prototype, "petBag.MainPanelPetItem")
} (petBag || (petBag = {}));
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
petBag; !
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.skinName = petBagMarkAcquireItemSkin,
            t.cacheAsBitmap = !0,
            t
        }
        return __extends(t, e),
        t.prototype.dataChanged = function() {
            if (e.prototype.dataChanged.call(this), 0 == +this.data[0]) {
                this.imgItem.source = ClientConfig.getGemPath( + this.data[1]);
                var t = GemsXMLInfo.lv1Map.getValue( + this.data[1]).Name;
                t = t.slice(0, t.length - 3),
                this.txtName.text = StringUtil.parseStrLimitLen(t, 5)
            } else 1 == +this.data[0] && (this.imgItem.source = ItemXMLInfo.getIconURL( + this.data[1]), this.txtName.text = StringUtil.parseStrLimitLen(ItemXMLInfo.getName( + this.data[1]), 5));
            this.txtNum.text = "" + this.data[2],
            this.data[2] >= 1e4 && this.shortenNumber(this.data[2])
        },
        t.prototype.shortenNumber = function(e) {
            var t = e / 1e4,
            i = e % 1e4;
            i > 0 ? this.txtNum.text = "" + t.toFixed(1) + "万": this.txtNum.text = "" + Math.floor(t) + "万"
        },
        t
    } (BaseItemRenderer);
    e.MarkDecomAcquireItem = t,
    __reflect(t.prototype, "petBag.MarkDecomAcquireItem")
} (petBag || (petBag = {}));
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
petBag; !
function(e) {
    var t = function(t) {
        function i() {
            var e = t.call(this) || this;
            return e.skinName = "PetBagMarkItemSkin",
            e.cacheAsBitmap = !0,
            e
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            var e = this;
            this.imgSelected.source = "pet_bag_mark_item_imgyellowrect_png",
            this.imgSelected.width = this.imgSelected.height = 80,
            this.addEventListener(egret.TouchEvent.TOUCH_BEGIN,
            function() {
                var t, i = function() {
                    egret.clearTimeout(t),
                    e.onShortClick()
                };
                e.once(egret.TouchEvent.TOUCH_END, i, e),
                egret.lifecycle.stage.once(egret.TouchEvent.TOUCH_END,
                function() {
                    egret.clearTimeout(t),
                    e.removeEventListener(egret.TouchEvent.TOUCH_END, i, e)
                },
                e),
                t = egret.setTimeout(function() {
                    e.removeEventListener(egret.TouchEvent.TOUCH_END, i, e),
                    e.onLongClick()
                },
                e, 500)
            },
            this)
        },
        i.prototype.dataChanged = function() {
            this.cacheAsBitmap = !0;
            var e = this.data;
            this.imgMark.source = CountermarkXMLInfo.getIconURL(e.markID);
            var t = e.isBindGem;
            this.imgStoneBG.visible = t,
            this.imgStone.source = t ? ItemXMLInfo.getIconURL(e.gemID) : "",
            this.txtMarkLevel.text = "LV." + e.level,
            this.txtMarkName.text = StringUtil.parseStrLimitLen(e.markName, 5),
            this.data.inComfirmPop || (this.imgSelected.visible = this.data.selected)
        },
        i.prototype.onShortClick = function() {
            EventManager.dispatchEventWith(e.MarkDecomposePop.EVENT_CLICK_MARK_TO_DECOMPOSE, !1, this)
        },
        i.prototype.onLongClick = function() {
            tipsPop.TipsPop.openCounterMarkPop({
                ins: this.data,
                fromPetBag: !0
            })
        },
        i.prototype.setSelected = function(e) {
            this.data.selected = e,
            this.imgSelected.visible = e
        },
        i
    } (eui.ItemRenderer);
    e.MarkDecomposeItem = t,
    __reflect(t.prototype, "petBag.MarkDecomposeItem")
} (petBag || (petBag = {}));
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
petBag; !
function(e) {
    var t = function(t) {
        function i() {
            var e = t.call(this) || this;
            return e.skinName = "PetBagMarkItemSkin",
            e
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            var t = this;
            this.addEventListener(egret.TouchEvent.TOUCH_TAP,
            function() {
                if (EventManager.dispatchEventWith(e.EventConst.MARK_VIEW_SELECT_MARK, !1, t.data), !GuideManager.isCompleted() && t.data && 40916 == t.data.markID) {
                    var i = new egret.Event("click_mark", !1, !0, 40916);
                    EventManager.dispatchEvent(i)
                }
            },
            this)
        },
        i.prototype.dataChanged = function() {
            this.cacheAsBitmap = !0,
            this.imgSelected.visible = !1;
            var e = this.data;
            if (e) {
                this.imgMark.source = CountermarkXMLInfo.getIconURL(e.markID);
                var t = e.isBindGem;
                if (this.imgStoneBG.visible = t, t) {
                    var i = ItemXMLInfo.getItemRarity(e.gemID);
                    this.imgStoneBG.source = i > 0 ? "rarity_gem_" + i + "_png": "pet_bag_main_panel_markstonebg_png"
                }
                this.imgStone.source = t ? ItemXMLInfo.getIconURL(e.gemID) : "",
                this.txtMarkLevel.text = "LV." + e.level,
                this.txtMarkName.text = StringUtil.parseStrLimitLen(e.markName, 5),
                e.isBindMon && (this.imgSelected.visible = !0, this.imgSelected.source = "pet_bag_mark_item_imgyellowrect_png", this.imgSelected.width = this.imgSelected.height = 80)
            } else this.imgMark.source = "",
            this.imgStoneBG.visible = !1,
            this.imgStone.source = "",
            this.txtMarkLevel.text = "",
            this.txtMarkName.text = ""
        },
        i
    } (eui.ItemRenderer);
    e.MarkItem = t,
    __reflect(t.prototype, "petBag.MarkItem")
} (petBag || (petBag = {}));
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
petBag; !
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.skinName = "PetBagResistanceItemSkin",
            t.cacheAsBitmap = !0,
            t
        }
        return __extends(t, e),
        t.prototype.dataChanged = function() {
            this.width = 1 == this.data[0] ? 390 : 185,
            this.imgIcon.source = this.data[1],
            this.txtName.text = this.data[2],
            this.txtNum.text = this.data[3]
        },
        t
    } (eui.ItemRenderer);
    e.ResistanceItem = t,
    __reflect(t.prototype, "petBag.ResistanceItem")
} (petBag || (petBag = {}));
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
petBag; !
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.skinName = "PetBagResistanceBtnSkin",
            t
        }
        return __extends(t, e),
        t.prototype.dataChanged = function() {
            this.imgIcon.source = this.data[0],
            this.txtName.text = this.data[1],
            this.select.selected = this.data[2]
        },
        t
    } (eui.ItemRenderer);
    e.ResistanceSelectItem = t,
    __reflect(t.prototype, "petBag.ResistanceSelectItem")
} (petBag || (petBag = {}));
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
petBag; !
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.skinName = "PetBagResistanceSmallBtnSkin",
            t
        }
        return __extends(t, e),
        t.prototype.dataChanged = function() {
            this.imgIcon.source = this.data[0],
            this.txtName.text = this.data[1],
            this.select.selected = this.data[2]
        },
        t
    } (eui.ItemRenderer);
    e.ResistanceSmallSelectItem = t,
    __reflect(t.prototype, "petBag.ResistanceSmallSelectItem")
} (petBag || (petBag = {}));
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
petBag; !
function(e) {
    var t = function(t) {
        function i() {
            var e = t.call(this) || this;
            return e.skinName = "PetBagSkillItem",
            e.cacheAsBitmap = !0,
            e
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            this.imgSelect.visible = !1,
            this.btnChange.visible = !1,
            this.imgBind.visible = !1
        },
        i.prototype.dataChanged = function() {
            var t, i = this,
            n = this.data;
            if (4 == SkillXMLInfo.getCategory(n.id)) t = ClientConfig.getpettypeticon("prop");
            else {
                var r = SkillXMLInfo.getTypeID(n.id);
                t = ClientConfig.getpettypeticon(r + "")
            }
            this.txtName.text = n.name,
            this.imgIcon.source = t,
            this.txt.text = "威力：" + n.damage + "    PP：" + n.maxPP + "/" + n.maxPP,
            n.canChange && (this.btnChange.visible = !0, this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this), ImageButtonUtil.add(this.btnChange,
            function() {
                n.id > 1e5 ? Alert.show("更换此技能时，当前技能石会被摧毁，确定要更换这个技能吗？",
                function() {
                    EventManager.dispatchEventWith(e.EventConst.SKILL_VIEW_START_CHANGE_SKILL, !1, n.id)
                }) : EventManager.dispatchEventWith(e.EventConst.SKILL_VIEW_START_CHANGE_SKILL, !1, n.id)
            },
            this), ImageButtonUtil.add(this.group,
            function() {
                tipsPop.TipsPop.openSkillPop({
                    id: n.id,
                    petInfo: i.data.petInfo
                })
            },
            this, !1, !1), this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onBegin, this), this.addEventListener(egret.TouchEvent.TOUCH_END, this.onEnd, this)),
            n.waitChange && (this.width = 226, this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this), n.tag ? (this.imgTag.visible = !0, this.imgTag.source = "common_petSkill_tag" + n.tag + "_png", this.imgTag.width = 40) : n.hasGot ? this.imgTag.visible = !1 : (this.imgTag.visible = !0, this.imgTag.source = "pet_bag_fifth_skill_notGot_png", this.imgTag.width = 50)),
            n.isBindByMark && (this.imgBind.visible = !0, this.touchEnabled = this.touchChildren = !1),
            GuideManager.isCompleted() || 17838 == this.data.id && (this.btnChange.name = "btnChangeSkill")
        },
        i.prototype.destroy = function() {
            delete this.data.waitChange,
            delete this.data.canChange,
            delete this.data.petInfo,
            delete this.data.isBindByMark,
            ImageButtonUtil.removeAll(this),
            this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this),
            this.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onBegin, this),
            this.removeEventListener(egret.TouchEvent.TOUCH_END, this.onEnd, this)
        },
        i.prototype.onBegin = function() {
            EventManager.dispatchEventWith(e.EventConst.SKILL_VIEW_TOUCH_SKILL_ITEM_BEGIN, !1, this.data)
        },
        i.prototype.onEnd = function() {
            EventManager.dispatchEventWith(e.EventConst.SKILL_VIEW_TOUCH_SKILL_ITEM_End, !1, this.data)
        },
        i
    } (eui.ItemRenderer);
    e.SkillItem = t,
    __reflect(t.prototype, "petBag.SkillItem")
} (petBag || (petBag = {}));
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
petBag; !
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.skinName = "ItemSkinRenderSkin",
            t
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this._petShow = new PetStaticModel,
            this._petShow.setSize(147, 189),
            this._petShow.setPetMaxScale(1),
            this.petPosition.addChild(this._petShow)
        },
        t.prototype.setSelect = function(e) {
            this.select_img.visible = e,
            this._rect.visible = !e
        },
        t.prototype.dataChanged = function() {
            var e = this;
            if (!this.data) return void(this.visible = !1);
            this.visible = !0,
            this.lab_name.text = StringUtil.parseStrLimitLen(this.data.name, 8);
            var t = this.data,
            i = t.type;
            this.img_ys.source = "common_pet_skin_icon_" + i + "_png";
            var n;
            n = ~~t.id > 0 ? ClientConfig.getPetHalfIcon(t.id + 14e5) : ClientConfig.getPetHalfIcon(t.skinPetId),
            this.icon_skin.visible = this._petShow.visible = !1,
            RES.getResByUrl(n).then(function(t) {
                e.icon_skin.source = t,
                e.icon_skin.visible = !0
            })["catch"](function() {
                e.data && (e._petShow.setPetStyleById(e.data.skinPetId), e._petShow.visible = !0)
            })
        },
        t
    } (eui.ItemRenderer);
    e.SkinItem = t,
    __reflect(t.prototype, "petBag.SkinItem")
} (petBag || (petBag = {}));
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
petBag; !
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.skinName = "PetBagSmallItemItemSkin",
            t
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            this.imgSelected.visible = !1
        },
        t.prototype.dataChanged = function() {
            this.cacheAsBitmap = !0;
            var e = this.data;
            if (e) {
                var t = e.id;
                if ("item" == e.type) this.imgIcon.source = ClientConfig.getItemIcon(t),
                this.txtNum.text = ItemManager.getNumByID(t) + "",
                this.txtName.text = "",
                this.imgSelected.visible = !1;
                else if ("skillStone" == e.type) {
                    this.height = 93,
                    this.imgIcon.source = ClientConfig.getItemIcon(t),
                    this.txtNum.text = ItemManager.getNumByID(t) - e.use + "",
                    this.imgSelected.visible = !1;
                    var i = ItemXMLInfo.getName(t);
                    i = i.substr(0, i.length - 3),
                    this.txtName.text = i,
                    this.stoneLevel = i.substring(0, 1),
                    e.isCompose && ("S" == this.stoneLevel || +this.txtNum.text <= 0 ? DisplayUtil.setEnabled(this.imgIcon, !1, !0) : DisplayUtil.setEnabled(this.imgIcon, !0, !1))
                }
                this.rarity = ItemXMLInfo.getItemRarity(t)
            } else this.imgIcon.source = "",
            this.txtNum.text = "",
            this.txtName.text = "",
            this.imgSelected.visible = !1,
            this.bg.source = ""
        },
        t.prototype.setItemInfo = function(e, t, i) {
            void 0 === i && (i = !1),
            this.id = e,
            this.txtNum.text = ItemManager.getNumByID(e) + "",
            this.imgIcon.source = ClientConfig.getItemIcon(e),
            i && (this.rarity = ItemXMLInfo.getItemRarity(this.id)),
            ImageButtonUtil.add(this, t, this, !1, !1)
        },
        Object.defineProperty(t.prototype, "rarity", {
            get: function() {
                return this._rarity
            },
            set: function(e) {
                this._rarity = e,
                this._rarity >= 1 ? this.bg.source = "rarity_item_" + this._rarity + "_png": this.bg.source = "common_item_bg_style_70_70_png"
            },
            enumerable: !0,
            configurable: !0
        }),
        t.compareRarity = function(e, t) {
            return e.rarity >= t.rarity ? -1 : 1
        },
        t.compareRarityAscending = function(e, t) {
            return e.rarity >= t.rarity ? 1 : -1
        },
        t
    } (BaseItemRenderer);
    e.SmallItem = t,
    __reflect(t.prototype, "petBag.SmallItem")
} (petBag || (petBag = {}));
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
    return new(i || (i = Promise))(function(r, a) {
        function o(e) {
            try {
                u(n.next(e))
            } catch(t) {
                a(t)
            }
        }
        function s(e) {
            try {
                u(n["throw"](e))
            } catch(t) {
                a(t)
            }
        }
        function u(e) {
            e.done ? r(e.value) : new i(function(t) {
                t(e.value)
            }).then(o, s)
        }
        u((n = n.apply(e, t || [])).next())
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
        for (; u;) try {
            if (r = 1, a && (o = a[2 & i[0] ? "return": i[0] ? "throw": "next"]) && !(o = o.call(a, i[1])).done) return o;
            switch (a = 0, o && (i = [0, o.value]), i[0]) {
            case 0:
            case 1:
                o = i;
                break;
            case 4:
                return u.label++,
                {
                    value: i[1],
                    done: !1
                };
            case 5:
                u.label++,
                a = i[1],
                i = [0];
                continue;
            case 7:
                i = u.ops.pop(),
                u.trys.pop();
                continue;
            default:
                if (o = u.trys, !(o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                    u = 0;
                    continue
                }
                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                    u.label = i[1];
                    break
                }
                if (6 === i[0] && u.label < o[1]) {
                    u.label = o[1],
                    o = i;
                    break
                }
                if (o && u.label < o[2]) {
                    u.label = o[2],
                    u.ops.push(i);
                    break
                }
                o[2] && u.ops.pop(),
                u.trys.pop();
                continue
            }
            i = t.call(e, u)
        } catch(n) {
            i = [6, n],
            a = 0
        } finally {
            r = o = 0
        }
        if (5 & i[0]) throw i[1];
        return {
            value: i[0] ? i[1] : void 0,
            done: !0
        }
    }
    var r, a, o, s, u = {
        label: 0,
        sent: function() {
            if (1 & o[0]) throw o[1];
            return o[1]
        },
        trys: [],
        ops: []
    };
    return s = {
        next: i(0),
        "throw": i(1),
        "return": i(2)
    },
    "function" == typeof Symbol && (s[Symbol.iterator] = function() {
        return this
    }),
    s
},
petBag; !
function(e) {
    var t = function(t) {
        function i() {
            var e = t.call(this) || this;
            return e.arrViewName = ["UpLevelView", "NatureView", "StudyView", "SEffectView", "MarkView", "SkillView", "ResistanceView", "SkinView", "ItemView"],
            e.skinName = "PetBagMainPanelSkin",
            e
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            for (var e = this,
            t = 1; 5 > t; t++) this["btnBag" + t].visible = !GameInfo.isChecking;
            this.init(),
            this.addEvent(),
            this.refreshBagInfo().then(function() {
                e["btnBag" + (e.curBagPage + 1)].selected = !0,
                PetManager.updateBagInfo(function() {
                    e.updateBagView()
                }),
                GuideManager.isCompleted() || (e.groupRightBtn.parent.scrollPolicyV = eui.ScrollPolicy.OFF, EventManager.dispatchEventWith("pet_bag_init_completed"), EventManager.addEventListener("isContinueEffect", e.checkIsContinueEffect, e), EventManager.addEventListener("isContinueSEffect", e.checkIsContinueSEffect, e), EventManager.addEventListener("isContinueHealth", e.checkIsContinueHealth, e), EventManager.addEventListener("isRestartHealth", e.checkIsRestartHealth, e), e.btnDevelop.name = "btnDetail", e.btnStorage.name = "btnWarehouse", e.btnStudy.name = "btnStudy", ImageButtonUtil.add(e.btnStudy,
                function() {},
                e, !1, !1), e.btnSkill.name = "btnSkill", ImageButtonUtil.add(e.btnSkill,
                function() {},
                e, !1, !1), e.btnNature.name = "btnGenius", ImageButtonUtil.add(e.btnNature,
                function() {},
                e, !1, !1), e.btnEffect.name = "btnSEffect", ImageButtonUtil.add(e.btnEffect,
                function() {},
                e, !1, !1), e.btnUpLevel.name = "btnUpLevel", ImageButtonUtil.add(e.btnUpLevel,
                function() {},
                e, !1, !1), e.btnMark.name = "btnMark", ImageButtonUtil.add(e.btnMark,
                function() {},
                e, !1, !1))
            })
        },
        i.prototype.checkIsContinueEffect = function(e) {
            this.groupDevelopBase.visible && 2 == this.curViewIndex && e.preventDefault()
        },
        i.prototype.checkIsContinueSEffect = function(e) {
            this.groupDevelopBase.visible && 2 == this.curViewIndex && e.preventDefault()
        },
        i.prototype.checkIsContinueHealth = function(e) {
            this.groupDevelopBase.visible && 4 == this.curViewIndex && e.preventDefault()
        },
        i.prototype.checkIsRestartHealth = function(e) {
            1 == this.curViewIndex && e.preventDefault()
        },
        i.prototype.closeBag = function() {
            if (this.groupDevelopBase.visible) this.hideDevelopBaseView();
            else if (this.groupAdvPetDesc.visible) this.hideAdvanceDesc();
            else {
                this.service.closeModule();
                var e = 0;
                this.arrFirstPet[0].petInfo && (e = this.arrFirstPet[0].petInfo.catchTime),
                PetManager.dispatchEvent(new PetEvent(PetEvent.EQUIP_SKIN, e, 0))
            }
        },
        i.prototype.init = function() {
            var t = this;
            this.resize(0),
            this.initBtnClose("pet_bag_main_panel_btnclose_png", this,
            function() {
                t.closeBag()
            },
            this),
            this.curBaseAttrType = 1,
            this.ballTip.anchorOffsetX = this.ballTip.width,
            this.imgItem.source = ClientConfig.getItemIcon(1400352),
            this.service.registerItemUpdateForText(1400352, this.txtItem, this),
            this.mapCatchTime = [[], [], [], []],
            this.arrFirstPet = [],
            this.arrSecondPet = [],
            this.arrView = [],
            this.arrPetInfo = [],
            this.petModel.SetInitComp(core.component.pet.PetModel.DYNAMIC_MODEL, !1, !1),
            this.petModel.SetCacheMax(12),
            this.petModel.pet_bg.visible = !1,
            this.groupLeft.visible = !0,
            this.groupBtn.visible = !0,
            this.groupAttr.visible = !0,
            this.groupMiddle.visible = !0,
            this.groupDevelopBase.visible = !1,
            this.groupMarkLeftView.visible = !1,
            this.groupMarkItem.visible = !1,
            this.groupAdvPetDesc.visible = !1,
            this.grpSkill.visible = !1,
            this.grpRace.visible = !1,
            this.ballTip.visible = !1,
            this.ballTipMask.visible = !1,
            this.imgAddition.visible = !1,
            this.btnLeft.visible = this.btnRight.visible = !1;
            for (var i = 0; 6 > i; i++) {
                var n = new e.MainPanelPetItem;
                this.arrFirstPet[i] = n,
                this.groupPet1.addChild(n),
                n.setPetInfo(null),
                0 == i && (n.isFirst = !0),
                n.name = "pet_" + i.toString(),
                n = new e.MainPanelPetItem,
                this.arrSecondPet[i] = n,
                this.groupPet2.addChild(n),
                n.setPetInfo(null),
                n.name = "pet_" + i.toString()
            }
            for (var r = new eui.RadioButtonGroup,
            i = 1; 4 >= i; i++) this["btnBag" + i].group = r;
            r = new eui.RadioButtonGroup;
            for (var a = this.groupRightBtn.numChildren,
            o = function(e) {
                var i = s.groupRightBtn.getChildAt(e);
                i.group = r,
                i.addEventListener(egret.TouchEvent.TOUCH_TAP,
                function() {
                    7 == e ? StatLogger.log("精灵背包", "精灵皮肤", "点击精灵皮肤页签") : 8 == e && StatLogger.log("精灵背包", "精灵道具", "点击精灵道具页签"),
                    t.showDevelopView(e + 1)
                },
                s),
                i.addEventListener(egret.TouchEvent.TOUCH_BEGIN,
                function() {
                    egret.lifecycle.stage.once(egret.TouchEvent.TOUCH_END,
                    function() {
                        egret.setTimeout(function() {
                            for (var e = t.groupRightBtn.numChildren,
                            i = 0; e > i; i++) {
                                var n = t.groupRightBtn.getChildAt(i);
                                n.selected = +n.label == t.curViewIndex
                            }
                        },
                        t, 0)
                    },
                    t)
                },
                s)
            },
            s = this, i = 0; a > i; i++) o(i)
        },
        i.prototype.addEvent = function() {
            var t = this;
            ImageButtonUtil.add(this.btnHelp,
            function() {
                t.service.openPop(new e.DetailPop(t.curPetInfo))
            },
            this),
            ImageButtonUtil.add(this.btnAttr,
            function() {
                t.curBaseAttrType++,
                t.curBaseAttrType > 3 && (t.curBaseAttrType = 1),
                t.refreshBaseAttr()
            },
            this),
            PetManager.addEventListener(PetEvent.CURE_COMPLETE, this.onCure, this),
            ImageButtonUtil.add(this.btnCure,
            function() {
                PetManager.cureAll()
            },
            this),
            ImageButtonUtil.add(this.btnIntoStorage,
            function() {
                return __awaiter(t, void 0, void 0,
                function() {
                    var e = this;
                    return __generator(this,
                    function(t) {
                        switch (t.label) {
                        case 0:
                            return [4, PetManager.bagToStorage(this.curPetInfo.catchTime)];
                        case 1:
                            return t.sent(),
                            PetManager.updateBagInfo(function() {
                                e.updateBagView()
                            }),
                            [2]
                        }
                    })
                })
            },
            this),
            ImageButtonUtil.add(this.btnStorage,
            function() {
                ModuleManager.showModule("warehouse", ["warehouse"])
            },
            this),
            ImageButtonUtil.add(this.btnChange,
            function() {
                StatLogger.log("精灵背包", "精灵背包主界面", "点击更换按钮"),
                t.service.openPop(new e.ChangePetPop(t.curPetInfo, t.curBagPositionOfCurPet), !1, null,
                function() {
                    e.ChangePetPop.changeFlag && (e.ChangePetPop.changeFlag = !1, PetManager.updateBagInfo(function() {
                        t.updateBagView()
                    }), StatLogger.log("精灵背包", "精灵背包主界面", "使用更换功能成功替换仓库/精英收藏的精灵至背包"))
                })
            },
            this),
            ImageButtonUtil.add(this.btnBestQuality,
            function() {
                t.ignoreReshow = !0,
                ModuleManager.showModule("oneKeyTheBest", ["oneKeyTheBest"], t.curPetInfo, null, AppDoStyle.NULL)
            },
            this),
            ImageButtonUtil.add(this.btnAdvance,
            function() {
                t.groupAdvPetDesc.visible ? t.hideAdvanceDesc() : (t.groupAdvPetDesc.visible = !0, t.showAdvanceDesc(), t.refreshAdvanceDesc())
            },
            this),
            ImageButtonUtil.add(this.imgItem,
            function() {
                tipsPop.TipsPop.openItemPop({
                    id: 1400352
                })
            },
            this),
            ImageButtonUtil.add(this.ballTipMask,
            function() {
                t.ballTip.visible = !1,
                t.ballTipMask.visible = !1
            },
            this, !1, !1),
            ImageButtonUtil.add(this.btnDevelop,
            function() {
                t.showDevelopBaseView(),
                t.showDevelopView(1),
                t.groupRightBtn.scrollV = 0;
                for (var e = t.groupRightBtn.numChildren,
                i = 0; e > i; i++) {
                    var n = t.groupRightBtn.getChildAt(i);
                    n.selected = +n.label == t.curViewIndex
                }
                GuideManager.isCompleted() || EventManager.dispatchEventWith("open_module")
            },
            this),
            ImageButtonUtil.add(this.imgEffect,
            function() {
                t.ignoreReshow = !0,
                ModuleManager.showModule("petEffDescPanel", ["pet_eff_desc_panel"], t.curPetInfo, "", AppDoStyle.NULL)
            },
            this),
            ImageButtonUtil.add(this.imgAttr,
            function() {
                t.ignoreReshow = !0,
                ModuleManager.showModule("petbookAttRelationShip", ["petbookAttRelationShip"], t.curPetInfo.id, "", AppDoStyle.NULL)
            },
            this),
            ImageButtonUtil.add(this.btnTopSkin,
            function() {
                StatLogger.log("精灵背包", "精灵背包主界面", "点击精灵皮肤快捷按钮并跳转至精灵皮肤"),
                t.showDevelopBaseView(),
                t.showDevelopView(8),
                t.groupRightBtn.scrollV = t.groupRightBtn.contentHeight - t.groupRightBtn.height;
                for (var e = t.groupRightBtn.numChildren,
                i = 0; e > i; i++) {
                    var n = t.groupRightBtn.getChildAt(i);
                    n.selected = +n.label == t.curViewIndex
                }
            },
            this),
            ImageButtonUtil.add(this.imgAddition,
            function() {
                PopViewManager.getInstance().openView(new e.MarkAdditionPop(t.curPetInfo))
            },
            this),
            ImageButtonUtil.add(this.btnLeft,
            function() {
                var i = t.arrPetInfo.indexOf(t.curPetInfo);
                i--,
                0 > i && (i = t.arrPetInfo.length - 1),
                EventManager.dispatchEventWith(e.EventConst.MAIN_PANEL_SELECT_PET, !1, t.arrPetInfo[i])
            },
            this),
            ImageButtonUtil.add(this.btnRight,
            function() {
                var i = t.arrPetInfo.indexOf(t.curPetInfo);
                i++,
                i >= t.arrPetInfo.length && (i = 0),
                EventManager.dispatchEventWith(e.EventConst.MAIN_PANEL_SELECT_PET, !1, t.arrPetInfo[i])
            },
            this),
            ImageButtonUtil.add(this.imgUp,
            function() {
                egret.Tween.get(t.groupRightBtn).to({
                    scrollV: 0
                },
                t.groupRightBtn.scrollV / .6)
            },
            this),
            ImageButtonUtil.add(this.imgDown,
            function() {
                egret.Tween.get(t.groupRightBtn).to({
                    scrollV: 129
                },
                (129 - t.groupRightBtn.scrollV) / .6)
            },
            this),
            ImageButtonUtil.add(this.btnMarkRecommend,
            function() {
                StatLogger.log("精灵背包", "精灵背包刻印养成", "点击刻印推荐按钮"),
                PopViewManager.getInstance().openView(new e.RecommendMarkPop(t.curPetInfo))
            },
            this),
            ImageButtonUtil.add(this.btnMarkCenter,
            function() {
                ModuleManager.showModule("markCenter", ["markCenter"])
            },
            this),
            this._listSkill.addEventListener(eui.ItemTapEvent.ITEM_TAP, this._onShowSkillTipsPop, this),
            ImageButtonUtil.add(this.btn2Get,
            function() {
                t.ignoreReshow = !0,
                PetAdvanceXMLInfo.showAdvancePanel(t.curPetInfo.id)
            },
            this),
            ImageButtonUtil.add(this.btnDetail,
            function() {
                t.ignoreReshow = !0;
                var e = EffectIconControl.getAllEffctByPetId(t.curPetInfo.id);
                e.unshift(EffectIconControl.getAdvanceEffectByPetId(t.curPetInfo.id)),
                ModuleManager.showModule("petEffDescPanel", ["pet_eff_desc_panel"], e, "", AppDoStyle.NULL)
            },
            this),
            this.btnBag1.group.addEventListener(egret.Event.CHANGE, this.onChangeBag, this),
            EventManager.addEventListener(e.EventConst.MAIN_PANEL_TOUCH_PET_ITEM_BEGIN, this.onItemTouchBegin, this),
            EventManager.addEventListener(e.EventConst.MAIN_PANEL_TOUCH_PET_ITEM_End, this.onItemTouchEnd, this),
            EventManager.addEventListener(e.EventConst.MAIN_PANEL_SELECT_PET, this.onSelectPet, this),
            EventManager.addEventListener(e.EventConst.PET_INFO_UPDATE, this.onPetInfoUpdate, this),
            EventManager.addEventListener(e.EventConst.MARK_VIEW_CHANGE_MARK, this.putOnCallBack, this),
            EventManager.addEventListener(e.EventConst.MARK_VIEW_SELECT_MARK, this.onSelectMark, this),
            EventManager.addEventListener(e.EventConst.SKIN_VIEW_CHANGE_SKIN, this.onSkinChange, this),
            EventManager.addEventListener(e.EventConst.REMOVE_SKIN_VIEW, this.refreshMiddleView, this),
            EventManager.addEventListener(e.EventConst.CLICK_CHANGE_SKILL_IN_NEW_SKILL_POP, this.onGetNewSkillToChange, this),
            EventManager.addEventListener(e.EventConst.REFRESH_MARK_VIEW,
            function() {
                t.refreshLeftMarkView((t.curMarkIndex || 0) + 4)
            },
            this),
            EventManager.addEventListener("closePetbag",
            function() {
                t.service.closeModule()
            },
            this)
        },
        i.prototype.onChangeBag = function() {
            this.setBagPage( + this.btnBag1.group.selectedValue)
        },
        i.prototype.refreshBagInfo = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var t = this;
                return __generator(this,
                function(i) {
                    return [2, new Promise(function(i, n) {
                        KTool.getMultiValue(e.AttrConst.ARR_PET_BAG,
                        function(e) {
                            t.curBagPage = e[0];
                            for (var n = 0; 4 > n; n++) t["btnBag" + (n + 1)].enabled = e[1] >= n;
                            for (var r = 0,
                            a = 0,
                            n = 0; 48 > n; n++) t.mapCatchTime[r][a++] = e[n + 2],
                            a >= 12 && (r++, a = 0);
                            i()
                        })
                    })]
                })
            })
        },
        i.prototype.setBagPage = function(e) {
            var t = this;
            e != this.curBagPage && (this.checkBagChange() ? Alert.show("阵容发生了改变\n是否保存当前阵容",
            function() {
                SocketConnection.sendByQueue(41466, [2, e],
                function(e) {
                    t.afterChangeBagPage()
                })
            },
            function() {
                SocketConnection.sendByQueue(41466, [3, e],
                function(e) {
                    t.afterChangeBagPage()
                })
            }) : SocketConnection.sendByQueue(41466, [3, e],
            function(e) {
                t.afterChangeBagPage()
            }))
        },
        i.prototype.afterChangeBagPage = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var e = this;
                return __generator(this,
                function(t) {
                    switch (t.label) {
                    case 0:
                        return egret.lifecycle.stage.touchChildren = !1,
                        [4, this.refreshBagInfo()];
                    case 1:
                        return t.sent(),
                        PetManager.updateBagInfo(function() {
                            e.updateBagView(),
                            egret.lifecycle.stage.touchChildren = !0
                        }),
                        [2]
                    }
                })
            })
        },
        i.prototype.checkBagChange = function() {
            if (this.arrFirstPet[0].petInfo) {
                if (this.arrFirstPet[0].petInfo.catchTime != this.mapCatchTime[this.curBagPage][0]) return ! 0
            } else if (this.mapCatchTime[this.curBagPage][0]) return ! 0;
            for (var e = 0; 6 > e && this.arrFirstPet[e].petInfo; e++) {
                var t = this.arrFirstPet[e].petInfo.catchTime,
                i = this.mapCatchTime[this.curBagPage].indexOf(t);
                if (i != e) return ! 0
            }
            for (var e = 0; 6 > e && this.arrSecondPet[e].petInfo; e++) {
                var t = this.arrSecondPet[e].petInfo.catchTime,
                i = this.mapCatchTime[this.curBagPage].indexOf(t);
                if (i != e + 6) return ! 0
            }
            for (var n = 0,
            r = 0,
            a = 0,
            o = 0,
            e = 0; 6 > e; e++) this.arrFirstPet[e].petInfo && n++,
            this.arrSecondPet[e].petInfo && a++,
            this.mapCatchTime[this.curBagPage][e] && r++,
            this.mapCatchTime[this.curBagPage][e + 6] && o++;
            return n != r || a != o ? !0 : !1
        },
        i.prototype.updateBagView = function(t) {
            void 0 === t && (t = !1);
            var i = PetManager.infos,
            n = PetManager.secondInfos;
            if (!GuideManager.isCompleted() && 2845 == i[1].id && 2858 == i[2].id) {
                var r = i[1];
                i[1] = i[2],
                i[2] = r
            }
            for (var a = 0; 6 > a; a++) i[a] ? (this.arrFirstPet[a].setPetInfo(i[a]), 0 != a || t || EventManager.dispatchEventWith(e.EventConst.MAIN_PANEL_SELECT_PET, !1, i[a])) : this.arrFirstPet[a].setPetInfo(null),
            n[a] ? (this.arrSecondPet[a].setPetInfo(n[a]), 0 != +a || 0 != i.length || t || EventManager.dispatchEventWith(e.EventConst.MAIN_PANEL_SELECT_PET, !1, n[a])) : PetManager.secondBagTotalLength > a ? this.arrSecondPet[a].setPetInfo(null) : this.arrSecondPet[a].setPetInfo(null, a);
            i.length || n.length || EventManager.dispatchEventWith(e.EventConst.MAIN_PANEL_SELECT_PET, !1, null)
        },
        i.prototype.destroy = function() {
            for (var e = 0,
            i = this.arrFirstPet; e < i.length; e++) {
                var n = i[e];
                n.destroy()
            }
            for (var r = 0,
            a = this.arrSecondPet; r < a.length; r++) {
                var n = a[r];
                n.destroy()
            }
            PetManager.removeEventListener(PetEvent.CURE_COMPLETE, this.onCure, this),
            this.service.unregisterItems(this),
            this.petModel.destroy();
            for (var o = 0,
            s = this.arrView; o < s.length; o++) {
                var u = s[o];
                u && u.destroy()
            }
            t.prototype.destroy.call(this)
        },
        i.prototype.onItemTouchBegin = function(e) {
            var t = this;
            if (this.beginPetInfo = e.data.petInfo, this.beginPetInfo) {
                if (!GuideManager.isCompleted() && this.beginPetInfo && 2858 == this.beginPetInfo.id) {
                    var i = new egret.Event("select_pet", !1, !0, this.beginPetInfo.id);
                    EventManager.dispatchEvent(i)
                }
                for (var n, r = new eui.Image,
                a = new egret.RenderTexture,
                o = 0; 6 > o; o++) {
                    if (this.arrFirstPet[o].petInfo == this.beginPetInfo) {
                        n = this.arrFirstPet[o];
                        break
                    }
                    if (this.arrSecondPet[o].petInfo == this.beginPetInfo) {
                        n = this.arrSecondPet[o];
                        break
                    }
                }
                a.drawToTexture(n),
                r.source = a,
                this.addChild(r),
                r.visible = !1,
                r.touchEnabled = !1,
                r.x = e.data.touchEvent.stageX - r.width / 2,
                r.y = e.data.touchEvent.stageY - r.height / 2;
                var s = function(e) {
                    r.visible = !0,
                    r.x = e.stageX - r.width / 2,
                    r.y = e.stageY - r.height / 2
                };
                egret.lifecycle.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, s, this),
                egret.lifecycle.stage.once(egret.TouchEvent.TOUCH_END,
                function() {
                    egret.lifecycle.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, s, t),
                    t.removeChild(r)
                },
                this)
            }
        },
        i.prototype.onItemTouchEnd = function(e) {
            this.endPetInfo = e.data.petInfo,
            this.endParent = e.data.parent,
            egret.lifecycle.stage.touchChildren = !1,
            this.checkChangePosition().then(function() {
                egret.lifecycle.stage.touchChildren = !0
            })
        },
        i.prototype.checkChangePosition = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var t, i, n, r, a, n, o = this;
                return __generator(this,
                function(s) {
                    switch (s.label) {
                    case 0:
                        if (!this.beginPetInfo || !this.endPetInfo) return [3, 12];
                        if (this.beginPetInfo == this.endPetInfo) return [3, 11];
                        for (t = void 0, i = void 0, n = 0; 6 > n; n++) this.arrFirstPet[n].petInfo == this.beginPetInfo ? t = n: this.arrFirstPet[n].petInfo == this.endPetInfo && (i = n),
                        this.arrSecondPet[n].petInfo == this.beginPetInfo ? t = n + 6 : this.arrSecondPet[n].petInfo == this.endPetInfo && (i = n + 6);
                        return t > i && (r = t, t = i, i = r),
                        0 != t ? [3, 5] : 6 > i ? [4, PetManager.setDefault(this.arrFirstPet[i].petInfo.catchTime)] : [3, 2];
                    case 1:
                        return s.sent(),
                        GuideManager.isCompleted() || (2858 == this.beginPetInfo.id || 2858 == this.endPetInfo.id) && (a = new egret.Event("set_default", !1, !0, 2858), EventManager.dispatchEvent(a)),
                        [3, 4];
                    case 2:
                        return [4, PetManager.setDefault(this.arrSecondPet[i - 6].petInfo.catchTime)];
                    case 3:
                        s.sent(),
                        s.label = 4;
                    case 4:
                        return [3, 11];
                    case 5:
                        return 6 > t && i >= 6 ? [4, PetManager.exchangePetPosition(this.arrFirstPet[t].petInfo.catchTime, this.arrSecondPet[i - 6].petInfo.catchTime)] : [3, 7];
                    case 6:
                        return s.sent(),
                        [3, 11];
                    case 7:
                        return 6 > t && 6 > i ? [4, PetManager.exchangePetPosition(this.arrFirstPet[t].petInfo.catchTime, this.arrFirstPet[i].petInfo.catchTime)] : [3, 9];
                    case 8:
                        return s.sent(),
                        [3, 11];
                    case 9:
                        return t >= 6 && i >= 6 ? [4, PetManager.exchangePetPosition(this.arrSecondPet[t - 6].petInfo.catchTime, this.arrSecondPet[i - 6].petInfo.catchTime)] : [3, 11];
                    case 10:
                        s.sent(),
                        s.label = 11;
                    case 11:
                        return [3, 22];
                    case 12:
                        if (!this.beginPetInfo || this.endPetInfo) return [3, 22];
                        n = 0,
                        s.label = 13;
                    case 13:
                        return 6 > n ? this.arrFirstPet[n].petInfo != this.beginPetInfo ? [3, 17] : this.endParent != this.groupPet2 ? [3, 16] : [4, PetManager.bagToSecondBag(this.beginPetInfo.catchTime)] : [3, 22];
                    case 14:
                        return s.sent(),
                        0 == n && this.arrFirstPet[1].petInfo ? [4, PetManager.setDefault(this.arrFirstPet[1].petInfo.catchTime)] : [3, 16];
                    case 15:
                        s.sent(),
                        s.label = 16;
                    case 16:
                        return [3, 22];
                    case 17:
                        return this.arrSecondPet[n].petInfo != this.beginPetInfo ? [3, 21] : this.endParent != this.groupPet1 ? [3, 20] : [4, PetManager.secondBagToBag(this.beginPetInfo.catchTime)];
                    case 18:
                        return s.sent(),
                        this.arrFirstPet[0].petInfo ? [3, 20] : [4, PetManager.setDefault(this.beginPetInfo.catchTime)];
                    case 19:
                        s.sent(),
                        s.label = 20;
                    case 20:
                        return [3, 22];
                    case 21:
                        return n++,
                        [3, 13];
                    case 22:
                        return this.beginPetInfo && PetManager.updateBagInfo(function() {
                            o.updateBagView(!0);
                            for (var t, i = 0,
                            n = PetManager.allInfos; i < n.length; i++) {
                                var r = n[i];
                                if (r.catchTime == o.beginPetInfo.catchTime) {
                                    t = r;
                                    break
                                }
                            }
                            EventManager.dispatchEventWith(e.EventConst.MAIN_PANEL_SELECT_PET, !1, t),
                            o.beginPetInfo = null,
                            o.endPetInfo = null,
                            o.endParent = null
                        }),
                        [2]
                    }
                })
            })
        },
        i.prototype.operate = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var e, e, t;
                return __generator(this,
                function(i) {
                    switch (i.label) {
                    case 0:
                        e = 5,
                        i.label = 1;
                    case 1:
                        return e >= 0 ? this.arrFirstPet[e].petInfo ? [4, PetManager.bagToStorage(this.arrFirstPet[e].petInfo.catchTime)] : [3, 3] : [3, 6];
                    case 2:
                        i.sent(),
                        i.label = 3;
                    case 3:
                        return this.arrSecondPet[e].petInfo ? [4, PetManager.secondBagToStorage(this.arrSecondPet[e].petInfo.catchTime)] : [3, 5];
                    case 4:
                        i.sent(),
                        i.label = 5;
                    case 5:
                        return e--,
                        [3, 1];
                    case 6:
                        e = 0,
                        i.label = 7;
                    case 7:
                        return 12 > e ? (t = this.mapCatchTime[this.curBagPage][e], t ? 6 > e ? [4, PetManager.storageToBag(t)] : [3, 9] : [3, 11]) : [3, 12];
                    case 8:
                        return i.sent(),
                        [3, 11];
                    case 9:
                        return [4, PetManager.storageToSecondBag(t)];
                    case 10:
                        i.sent(),
                        i.label = 11;
                    case 11:
                        return e++,
                        [3, 7];
                    case 12:
                        return [2]
                    }
                })
            })
        },
        i.prototype.onSelectPet = function(e) {
            if (!GuideManager.isCompleted()) if (this.flagFirstSelectPet) {
                var t = new egret.Event("select_pet", !1, !0, e.data.id);
                EventManager.dispatchEvent(t)
            } else this.flagFirstSelectPet = !0;
            this.curPetInfo = e.data,
            this.refreshMarkView(),
            this.refreshAttrView(),
            this.refreshSkillView(),
            this.refreshMiddleView();
            var i = !!this.curPetInfo;
            this.btnBestQuality.visible = i,
            DisplayUtil.setEnabled(this.btnChange, i, !i),
            DisplayUtil.setEnabled(this.btnDevelop, i, !i),
            DisplayUtil.setEnabled(this.btnIntoStorage, i, !i);
            for (var n = 0; 6 > n; n++) {
                if (this.arrFirstPet[n].petInfo && this.curPetInfo && this.arrFirstPet[n].petInfo.catchTime == this.curPetInfo.catchTime) {
                    this.curBagPositionOfCurPet = 0 == n ? 0 : 1;
                    break
                }
                if (this.arrSecondPet[n].petInfo && this.curPetInfo && this.arrSecondPet[n].petInfo.catchTime == this.curPetInfo.catchTime) {
                    this.curBagPositionOfCurPet = 2;
                    break
                }
            }
            if (this.curPetInfo && (2 != this.curMarkIndex || this.curPetInfo.commonMarkActived || (this.curMarkIndex = 0), this.groupDevelopBase.visible)) {
                var r = this.groupView.getChildAt(0);
                r.refresh(this.curPetInfo),
                this.refreshUIOfViewAndMainPanel()
            }
            this.btnBestQuality.visible = !!this.curPetInfo && !GameInfo.isChecking
        },
        i.prototype.refreshMiddleView = function() {
            var e = this,
            t = !!this.curPetInfo;
            if (this.petModel.visible = t, this.groupMiddleTop.visible = t, this.curPetInfo) {
                var i = this.curPetInfo.id;
                if (this.curPetInfo.skinId > 0 && (i = PetSkinXMLInfo.getSkinInfo(this.curPetInfo.skinId).skinPetId), this.oldPetAniId == i) return;
                if (this.hidePetModel && (this.hidePetModel = !1, this.petModel.visible = !1, egret.setTimeout(function() {
                    e.petModel.visible = !0
                },
                this, 200)), this.petModel.SetPetData(i), this.oldPetAniId = i, this.btnAdvance.visible = PetAdvanceXMLInfo.getIncludeAdvance(this.curPetInfo.id), this.btnAdvance.visible) {
                    var n = PetAdvanceXMLInfo.getAdvType(this.curPetInfo.id);
                    1 == n ? this.btnAdvance.source = "petBag_btnJX_png": this.btnAdvance.source = "btnAdv_png"
                }
                this.btnTopSkin.visible || (this.btnAdvance.visible = !1)
            } else this.btnAdvance.visible = !1
        },
        i.prototype.refreshAttrView = function() {
            var e = this,
            t = !!this.curPetInfo;
            if (this.btnHelp.visible = t, this.btnAttr.visible = t, this.groupStar.visible = t, this.groupAttrNum.visible = t, this.curPetInfo) {
                GameInfo.isChecking && (this.btnHelp.visible = this.btnAttr.visible = !1, this.btn2Get.visible = !1),
                this.txtTopLevel.text = "LV." + this.curPetInfo.level,
                this.imgAttr.source = ClientConfig.getpettypeticon(PetXMLInfo.getType(this.curPetInfo.id)),
                this.txtName.text = this.curPetInfo.name,
                this.imgEffect.width = PetManager.checkShowEffectIcon(this.curPetInfo.id) ? 26 : 0,
                PetManager.checkPetInfoEffect(this.curPetInfo,
                function(t) {
                    return __awaiter(e, void 0, void 0,
                    function() {
                        var e;
                        return __generator(this,
                        function(i) {
                            switch (i.label) {
                            case 0:
                                return [4, KTool.checkHasAdvanced(this.curPetInfo)];
                            case 1:
                                return e = i.sent(),
                                this.imgEffect.width = t ? e ? 28 : 26 : 0,
                                this.imgEffect.source = e ? PetAdvanceXMLInfo.getAdvSignSource(this.curPetInfo.id) : "pet_bag_main_panel_imgeffect_png",
                                [2]
                            }
                        })
                    })
                },
                this),
                this.groupTag.removeChildren();
                var i = EffectIconControl.getAllEffctByPetId(this.curPetInfo.id);
                if (i) {
                    var n = i[0].kind;
                    if (null != n) for (var r = n.toString().split(" ").map(Number), a = 0; a < r.length; a++) {
                        var o = new eui.Image("pet_bag_tag" + (r[a] + 1) + "_png");
                        this.groupTag.addChild(o)
                    }
                }
                ImageButtonUtil.remove(this.groupBall1),
                ImageButtonUtil.remove(this.groupBall2),
                this.groupBall1.visible = this.groupBall2.visible = !1;
                for (var s = this.curPetInfo.effectList.filter(function(e) {
                    return 2 == e.status || 3 == e.status
                },
                this), u = 1, _ = function(t) {
                    var i = [300672, 300697, 300810].concat([300884, 300885, 300886, 300887, 300888, 300889]);
                    l["groupBall" + u].visible = !0,
                    l["imgBall" + u].source = ClientConfig.getItemIcon(t.itemId),
                    l["txtBall" + u].text = t.leftCount;
                    var n = ItemXMLInfo.getItemRarity(t.itemId);
                    l["imgBallBg" + u].source = n > 0 ? "rarity_iball_" + n + "_png": "pet_bag_main_panel_imgball1bg_png";
                    var r = u;
                    ImageButtonUtil.add(l["groupBall" + u],
                    function() {
                        var n = [];
                        n.push(ItemXMLInfo.getName(t.itemId)),
                        n.push("剩余使用次数：" + t.leftCount),
                        -1 != i.indexOf(t.itemId) ? n.push(ItemTipXMLInfo.getItemDes(t.itemId)) : n.push(PetEffectXMLInfo.getDes(t.itemId)),
                        e.showBallTip(r, n)
                    },
                    l),
                    u++
                },
                l = this, h = 0, g = s; h < g.length; h++) {
                    var c = g[h];
                    _(c)
                }
                this.txtLevel.text = this.curPetInfo.level + "",
                this.txtNature.text = this.curPetInfo.dv + "",
                this.txtEffect.text = NatureXMLInfo.getName(this.curPetInfo.nature);
                var p = PetManager.getPetEffect(this.curPetInfo);
                if (p) {
                    var m = PetEffectXMLInfo.getEffect(p.effectID, p.args),
                    f = PetEffectXMLInfo.getStarLevel(p.effectID, p.args);
                    this.txtSEffect.text = m + f + "星"
                } else this.txtSEffect.text = "无";
                this.txtStudy.text = this.curPetInfo.ev_attack + this.curPetInfo.ev_defence + this.curPetInfo.ev_sa + this.curPetInfo.ev_sd + this.curPetInfo.ev_sp + this.curPetInfo.ev_hp + "",
                this.txtHP.text = "0/20",
                SocketConnection.sendByQueue(CommandID.JAMES_ARMOR_QUERY_ABIBLITY, [this.curPetInfo.catchTime],
                function(t) {
                    var i = t.data;
                    e.txtHP.text = i.readUnsignedInt() + "/20"
                }),
                this.txtAttack2.text = this.curPetInfo.ev_attack + "",
                this.txtSpeed2.text = this.curPetInfo.ev_sp + "",
                this.txtDefence2.text = this.curPetInfo.ev_defence + "",
                this.txtSAttack2.text = this.curPetInfo.ev_sa + "",
                this.txtHealth2.text = this.curPetInfo.ev_hp + "",
                this.txtSDefence2.text = this.curPetInfo.ev_sd + "",
                this.refreshBaseAttr()
            }
        },
        i.prototype.showBallTip = function(e, t) {
            var i = this["groupBall" + e];
            this.ballTip.x = i.localToGlobal(0, 0).x + i.width / 2,
            this.ballTip.y = i.localToGlobal(0, 0).y + i.height / 2,
            this.txtBallTipName.text = t.shift(),
            this.txtBallTipTimes.text = t.shift(),
            this.txtBallTipInDes.text = t.shift(),
            this.ballTip.visible = !0,
            this.ballTipMask.visible = !0,
            gsap.fromTo(this.ballTip, {
                scaleX: 0,
                scaleY: 0
            },
            {
                scaleX: 1,
                scaleY: 1,
                duration: .2
            })
        },
        i.prototype.refreshBaseAttr = function() {
            this.curPetInfo && (1 == this.curBaseAttrType ? (this.txtBtnAttr.text = "基础", this.txtAttack1.text = this.curPetInfo.base_attack_total + "", this.txtSpeed1.text = this.curPetInfo.base_speed_total + "", this.txtDefence1.text = this.curPetInfo.base_defence_total + "", this.txtSAttack1.text = this.curPetInfo.base_s_a_total + "", this.txtHealth1.text = this.curPetInfo.base_hp_total + "", this.txtSDefence1.text = this.curPetInfo.base_s_d_total + "") : 2 == this.curBaseAttrType ? (this.txtBtnAttr.text = "PVE", this.txtAttack1.text = this.curPetInfo.pve_attack_total + "", this.txtSpeed1.text = this.curPetInfo.pve_speed_total + "", this.txtDefence1.text = this.curPetInfo.pve_defence_total + "", this.txtSAttack1.text = this.curPetInfo.pve_s_a_total + "", this.txtHealth1.text = this.curPetInfo.pve_hp_total + "", this.txtSDefence1.text = this.curPetInfo.pve_s_d_total + "") : 3 == this.curBaseAttrType && (this.txtBtnAttr.text = "PVP", this.txtAttack1.text = this.curPetInfo.pvp_attack_total + "", this.txtSpeed1.text = this.curPetInfo.pvp_speed_total + "", this.txtDefence1.text = this.curPetInfo.pvp_defence_total + "", this.txtSAttack1.text = this.curPetInfo.pvp_s_a_total + "", this.txtHealth1.text = this.curPetInfo.pvp_hp_total + "", this.txtSDefence1.text = this.curPetInfo.pvp_s_d_total + ""))
        },
        i.prototype.refreshMarkView = function() {
            var t = this,
            i = [],
            n = [];
            this.curPetInfo && (i[1] = CountermarkXMLInfo.getMarkId(this.curPetInfo.abilityMark), i[2] = CountermarkXMLInfo.getMarkId(this.curPetInfo.skillMark), i[3] = CountermarkXMLInfo.getMarkId(this.curPetInfo.commonMark), n[1] = this.curPetInfo.abilityMark, n[2] = this.curPetInfo.skillMark, n[3] = this.curPetInfo.commonMark),
            this.imgMark3Lock.visible = this.curPetInfo && !this.curPetInfo.commonMarkActived;
            for (var r = function(r) {
                if (a["imgMark" + r].source = i[r] ? CountermarkXMLInfo.getIconURL(i[r]) : "pet_bag_dream_stone_compose_pop_imgadd1_png", 3 == r && a.imgMark3Lock.visible && (a.imgMark3.source = ""), ImageButtonUtil.remove(a["groupMark" + r]), i[r]) {
                    var o = {
                        ins: CountermarkController.getInfoTemp(n[r])
                    },
                    s = o.ins;
                    o.fromPetBag = !0,
                    ImageButtonUtil.add(a["groupMark" + r],
                    function() {
                        s.bindMonID = t.curPetInfo.id,
                        tipsPop.TipsPop.openCounterMarkPop(o)
                    },
                    a, !1, !1);
                    var u = s.isBindGem;
                    a["imgStone" + r + "BG"].visible = u,
                    u && (a["imgStone" + r + "BG"].source = "rarity_gem_" + ItemXMLInfo.getItemRarity(s.gemID) + "_png"),
                    a["imgStone" + r].source = u ? ItemXMLInfo.getIconURL(s.gemID) : "",
                    a["txtMark" + r + "Level"].text = "LV." + s.level,
                    a["txtMark" + r + "Name"].text = StringUtil.parseStrLimitLen(s.markName, 6)
                } else a["imgStone" + r + "BG"].visible = !1,
                a["txtMark" + r + "Level"].text = "",
                a["txtMark" + r + "Name"].text = "",
                a["imgStone" + r].source = "",
                a.curPetInfo && ImageButtonUtil.add(a["groupMark" + r],
                function() {
                    if (3 != r || t.curPetInfo.commonMarkActived) {
                        t.curMarkIndex = r - 1,
                        StatLogger.log("精灵背包", "精灵背包主界面", "使用更换功能成功替换仓库/精英收藏的精灵至背包"),
                        t.showDevelopBaseView(),
                        t.showDevelopView(5, !0),
                        t.groupRightBtn.scrollV = 0;
                        for (var i = t.groupRightBtn.numChildren,
                        n = 0; i > n; n++) {
                            var a = t.groupRightBtn.getChildAt(n);
                            a.selected = +a.label == t.curViewIndex
                        }
                    } else {
                        if (ItemManager.getNumByID(300066) < 1) return void BubblerManager.getInstance().showText("物品数量不足");
                        EventManager.once(ItemUseManager.EVENT_USE_ITEM_SUCCESSFUL,
                        function() {
                            EventManager.dispatchEvent(new egret.Event(e.EventConst.PET_INFO_UPDATE, !1, !1, t.curPetInfo))
                        },
                        t),
                        ItemUseManager.getInstance().useItem(t.curPetInfo, 300066)
                    }
                },
                a, !1, !1)
            },
            a = this, o = 1; 3 >= o; o++) r(o)
        },
        i.prototype.takeOffCallBack = function() {
            var t = this;
            CountermarkController.UndoEquip(this.curPetInfo, this.curMarkIndex,
            function(i) {
                switch (BubblerManager.getInstance().showText("成功卸下刻印！"), t.curMarkIndex) {
                case CountermarkType.HOLE_IS_COMMON:
                    t.curPetInfo.commonMark = 0;
                    break;
                case CountermarkType.HOLE_IS_ABILITY:
                    t.curPetInfo.abilityMark = 0;
                    break;
                case CountermarkType.HOLE_IS_SKILL:
                    t.curPetInfo.skillMark = 0
                }
                EventManager.dispatchEvent(new egret.Event(e.EventConst.PET_INFO_UPDATE, !1, !1, t.curPetInfo))
            },
            this)
        },
        i.prototype.putOnCallBack = function(e) {
            var t = this,
            i = e.obtainTime,
            n = this.curMarkObtainTime,
            r = CountermarkController.getInfoTemp(i);
            n ? CountermarkController.checkReplaceCounterMark(r, this.curMarkIndex, this.curPetInfo,
            function(e) {
                e && CountermarkController.UndoEquip(t.curPetInfo, t.curMarkIndex,
                function(e) {
                    switch (t.curMarkIndex) {
                    case CountermarkType.HOLE_IS_COMMON:
                        t.curPetInfo.commonMark = 0;
                        break;
                    case CountermarkType.HOLE_IS_ABILITY:
                        t.curPetInfo.abilityMark = 0;
                        break;
                    case CountermarkType.HOLE_IS_SKILL:
                        t.curPetInfo.skillMark = 0
                    }
                    t.refreshLeftMarkView(t.curMarkIndex + 4),
                    t.groupView.getChildAt(0).refresh(t.curPetInfo),
                    CountermarkController.equipCountermark(r, t.curMarkIndex, t.curPetInfo)
                },
                t)
            },
            this) : CountermarkController.checkReplaceCounterMark(r, this.curMarkIndex, this.curPetInfo,
            function(e) {
                e && CountermarkController.equipCountermark(r, t.curMarkIndex, t.curPetInfo)
            },
            this)
        },
        i.prototype.refreshSkillView = function() {
            for (var e = this,
            t = function(t) {
                var n = i.curPetInfo ? i.curPetInfo.skillArray[t - 1] : null;
                if (ImageButtonUtil.remove(i["groupSkill" + t]), n) {
                    var r = void 0;
                    if (4 == SkillXMLInfo.getCategory(n.id)) r = ClientConfig.getpettypeticon("prop");
                    else {
                        var a = SkillXMLInfo.getTypeID(n.id);
                        r = ClientConfig.getpettypeticon(a + "")
                    }
                    i["imgSkillIcon" + t].source = r,
                    i["txtSkillPP" + t].text = "PP：" + n.maxPP + "/" + n.maxPP,
                    i["txtSkillPower" + t].text = "威力：" + n.damage,
                    i["txtSkillName" + t].text = n.name,
                    ImageButtonUtil.add(i["groupSkill" + t],
                    function() {
                        tipsPop.TipsPop.openSkillPop({
                            id: n.id,
                            petInfo: e.curPetInfo
                        })
                    },
                    i, !1, !1)
                } else i["imgSkillIcon" + t].source = "",
                i["txtSkillPP" + t].text = "",
                i["txtSkillPower" + t].text = "",
                i["txtSkillName" + t].text = ""
            },
            i = this, n = 1; 4 >= n; n++) t(n);
            this.groupSkill5.visible = !!this.curPetInfo,
            this.curPetInfo && (this.curPetInfo.hideSKill ? (this.imgSkill5BG.source = "pet_bag_main_panel_imgskill5_png", this.imgSkill5Txt.source = "", this.txtSkill5.text = StringUtil.parseStrLimitLen(this.curPetInfo.hideSKill.name, 6)) : (this.imgSkill5BG.source = "pet_bag_main_panel_imgskill5bg_png", this.txtSkill5.text = "", SkillXMLInfo.hideMovesMap[this.curPetInfo.id] ? this.imgSkill5Txt.source = "pet_bag_main_panel_imgskill5notopen_png": this.imgSkill5Txt.source = "pet_bag_main_panel_imgskill5lock_png")),
            ImageButtonUtil.remove(this.groupSkill5),
            this.curPetInfo && this.curPetInfo.hideSKill && ImageButtonUtil.add(this.groupSkill5,
            function() {
                tipsPop.TipsPop.openSkillPop({
                    id: e.curPetInfo.hideSKill.id
                })
            },
            this, !1, !1)
        },
        i.prototype.onCure = function() {
            for (var e = 0; 6 > e; e++) this.arrFirstPet[e].onCure(),
            this.arrSecondPet[e].onCure()
        },
        i.prototype.resize = function(e) {
            var t = this;
            void 0 === e && (e = 50),
            egret.setTimeout(function() {
                t.groupAll.width = LevelManager.appLevel.width - 2 * DeviceInfoManager.adapterOffSetX
            },
            this, e)
        },
        i.prototype.reshow = function() {
            var t = this;
            if (this.curPetInfo && (this.petModel.SetPetData(this.curPetInfo), EventManager.dispatchEvent(new egret.Event(e.EventConst.PET_INFO_UPDATE, !1, !1, this.curPetInfo))), this.ignoreReshow) this.ignoreReshow = !1;
            else if (this.groupDevelopBase.visible) {
                if (5 == this.curViewIndex) {
                    var i = this.groupView.getChildAt(0);
                    i.refresh(this.curPetInfo)
                }
            } else PetManager.updateBagInfo(function() {
                t.updateBagView()
            })
        },
        i.prototype.showDevelopBaseView = function() {
            var e = this;
            this.hidePetModel = !0,
            egret.lifecycle.stage.touchChildren = !1,
            egret.setTimeout(function() {
                egret.lifecycle.stage.touchChildren = !0
            },
            this, 750),
            gsap.fromTo(this.btnAdvance, {
                alpha: 1
            },
            {
                alpha: 0,
                duration: .3,
                onComplete: function() {
                    e.btnAdvance.visible = !1
                }
            }),
            gsap.fromTo(this.groupLeft, {
                x: 0,
                alpha: 1
            },
            {
                x: -this.groupLeft.width * this.groupLeft.scaleX,
                alpha: .2,
                duration: .5,
                onComplete: function() {
                    e.groupLeft.visible = !1
                }
            }),
            gsap.fromTo(this.groupBtn, {
                y: 444,
                alpha: 1
            },
            {
                y: 640,
                alpha: .2,
                duration: .5,
                onComplete: function() {
                    e.groupBtn.visible = !1
                }
            }),
            this.groupMiddle.horizontalCenter = void 0,
            gsap.fromTo(this.groupMiddle, {
                x: this.groupAll.width / 2 - 251
            },
            {
                x: 100,
                duration: .5,
                onComplete: function() {
                    e.btnLeft.visible = e.btnRight.visible = e.arrPetInfo.length > 1
                }
            }),
            this.groupAttr.visible = !0,
            gsap.fromTo(this.groupAttr, {
                right: 0,
                alpha: 1
            },
            {
                right: -this.groupAttr.width,
                alpha: .2,
                duration: .25,
                onComplete: function() {
                    e.groupAttr.visible = !1,
                    e.groupDevelopBase.visible = !0,
                    gsap.fromTo(e.groupDevelop, {
                        right: -e.groupDevelop.width,
                        alpha: .2
                    },
                    {
                        right: 0,
                        alpha: 1,
                        duration: .5
                    })
                }
            }),
            this.btnTopSkin.visible = !1,
            this.ballTip.visible = this.groupBall1.visible = this.groupBall2.visible = !1,
            this.arrPetInfo.splice(0);
            for (var t = 0; 6 > t; t++) this.arrFirstPet[t].petInfo && this.arrPetInfo.push(this.arrFirstPet[t].petInfo);
            for (var t = 0; 6 > t; t++) this.arrSecondPet[t].petInfo && this.arrPetInfo.push(this.arrSecondPet[t].petInfo)
        },
        i.prototype.showDevelopView = function(e, t) {
            var i = this;
            void 0 === t && (t = !1),
            this.curViewIndex = e,
            this.groupView.removeChildren();
            var n = this.getView(this.curViewIndex);
            this.groupView.addChild(n),
            n.refresh(this.curPetInfo),
            egret.setTimeout(function() {
                i.refreshUIOfViewAndMainPanel()
            },
            this, t ? 500 : 0)
        },
        i.prototype.refreshUIOfViewAndMainPanel = function() {
            this.groupMarkLeftView.visible = 5 == this.curViewIndex,
            this.groupMarkItem.visible = 5 == this.curViewIndex,
            9 == this.curViewIndex ? this.refreshAttrView() : this.groupBall1.visible = this.groupBall2.visible = !1,
            5 == this.curViewIndex && this.curPetInfo.abilityMark + this.curPetInfo.skillMark + this.curPetInfo.commonMark ? this.imgAddition.visible = !0 : this.imgAddition.visible = !1
        },
        i.prototype.refreshLeftMarkView = function(t) {
            var i = this;
            void 0 === t && (t = 4);
            var n = [],
            r = [];
            this.curPetInfo && (n[4] = CountermarkXMLInfo.getMarkId(this.curPetInfo.abilityMark), n[5] = CountermarkXMLInfo.getMarkId(this.curPetInfo.skillMark), n[6] = CountermarkXMLInfo.getMarkId(this.curPetInfo.commonMark), r[4] = this.curPetInfo.abilityMark, r[5] = this.curPetInfo.skillMark, r[6] = this.curPetInfo.commonMark),
            this.curMarkIndex = t - 4,
            this.curMarkObtainTime = r[t],
            this.imgMark6Lock.visible = this.curPetInfo && !this.curPetInfo.commonMarkActived;
            for (var a = function(a) {
                if (o["imgMark" + a].source = n[a] ? CountermarkXMLInfo.getIconURL(n[a]) : "", ImageButtonUtil.remove(o["groupMark" + a]), o["imgSelected" + a].visible = a == t, n[a]) {
                    ImageButtonUtil.add(o["groupMark" + a],
                    function() {
                        var t = {
                            ins: CountermarkController.getInfoTemp(r[a]),
                            caller: i,
                            takeOffCallBack: i.takeOffCallBack,
                            lvUpCallBack: function() {
                                i.refreshLeftMarkView(a)
                            }
                        };
                        s.bindMonID = i.curPetInfo.id,
                        i.curMarkIndex = a - 4,
                        i.curMarkObtainTime = r[a],
                        CountermarkXMLInfo.getType(t.ins.markID) == CountermarkType.MARK_IS_UNIVERSAL ? PopViewManager.getInstance().openView(new e.MarkContrastPop(t)) : tipsPop.TipsPop.openCounterMarkPop(t);
                        for (var n = 4; 6 >= n; n++) i["imgSelected" + n].visible = a == n
                    },
                    o, !1, !1);
                    var s = CountermarkController.getInfoTemp(r[a]),
                    u = s.isBindGem;
                    o["imgStone" + a + "BG"].visible = u,
                    u && (o["imgStone" + a + "BG"].source = "rarity_gem_" + ItemXMLInfo.getItemRarity(s.gemID) + "_png"),
                    o["imgStone" + a].source = u ? ItemXMLInfo.getIconURL(s.gemID) : "",
                    o["txtMark" + a + "Level"].text = "LV." + s.level,
                    o["txtMark" + a + "Name"].text = StringUtil.parseStrLimitLen(s.markName, 6)
                } else o["imgStone" + a + "BG"].visible = !1,
                o["txtMark" + a + "Level"].text = "",
                o["txtMark" + a + "Name"].text = "",
                o["imgStone" + a].source = "",
                ImageButtonUtil.add(o["groupMark" + a],
                function() {
                    if (6 != a || i.curPetInfo.commonMarkActived) for (var t = 4; 6 >= t; t++) i["imgSelected" + t].visible = a == t,
                    i.curMarkIndex = a - 4,
                    i.curMarkObtainTime = r[a];
                    else {
                        if (ItemManager.getNumByID(300066) < 1) return void BubblerManager.getInstance().showText("物品数量不足");
                        EventManager.once(ItemUseManager.EVENT_USE_ITEM_SUCCESSFUL,
                        function() {
                            EventManager.dispatchEvent(new egret.Event(e.EventConst.PET_INFO_UPDATE, !1, !1, i.curPetInfo))
                        },
                        i),
                        ItemUseManager.getInstance().useItem(i.curPetInfo, 300066)
                    }
                },
                o, !1, !1)
            },
            o = this, s = 4; 6 >= s; s++) a(s)
        },
        i.prototype.hideDevelopBaseView = function() {
            var e = this;
            this.hidePetModel = !0,
            this.imgAddition.visible = !1,
            egret.lifecycle.stage.touchChildren = !1,
            egret.setTimeout(function() {
                egret.lifecycle.stage.touchChildren = !0
            },
            this, 750),
            PetAdvanceXMLInfo.getIncludeAdvance(this.curPetInfo.id) && this.curPetInfo.id ? (this.btnAdvance.visible = !0, gsap.fromTo(this.btnAdvance, {
                alpha: .2
            },
            {
                alpha: 1,
                duration: .3
            })) : (this.btnAdvance.visible = !1, this.btnAdvance.alpha = 1),
            this.groupLeft.visible = !0,
            gsap.fromTo(this.groupLeft, {
                x: -this.groupLeft.width * this.groupLeft.scaleX,
                alpha: .2
            },
            {
                x: 0,
                alpha: 1,
                duration: .5
            }),
            this.groupBtn.visible = !0,
            gsap.fromTo(this.groupBtn, {
                y: 640,
                alpha: .2
            },
            {
                y: 444,
                alpha: 1,
                duration: .5
            }),
            gsap.fromTo(this.groupMiddle, {
                x: 100
            },
            {
                x: this.groupAll.width / 2 - 251,
                duration: .5,
                onComplete: function() {
                    e.groupMiddle.horizontalCenter = -29
                }
            }),
            this.btnLeft.visible = this.btnRight.visible = !1,
            gsap.fromTo(this.groupDevelop, {
                right: 0,
                alpha: 1
            },
            {
                right: -this.groupDevelop.width,
                alpha: .2,
                duration: .25,
                onComplete: function() {
                    e.groupDevelopBase.visible = !1,
                    e.groupAttr.visible = !0,
                    e.refreshAttrView(),
                    e.refreshMarkView(),
                    e.groupView.removeChildren(),
                    gsap.fromTo(e.groupAttr, {
                        right: -e.groupAttr.width,
                        alpha: .2
                    },
                    {
                        right: 0,
                        alpha: 1,
                        duration: .5
                    })
                }
            }),
            this.groupMarkLeftView.visible = !1,
            this.groupMarkItem.visible = !1,
            this.btnTopSkin.visible = !0
        },
        i.prototype.getView = function(e) {
            if (this.arrView[e]) return this.arrView[e];
            var t = egret.getDefinitionByName("petBag." + this.arrViewName[e - 1]),
            i = new t;
            return this.arrView[e] = i,
            i
        },
        i.prototype.onPetInfoUpdate = function(t) {
            var i = this,
            n = t.data;
            PetManager.upDateBagPetInfo(n.catchTime,
            function(t) {
                for (var r = i.arrFirstPet.concat(i.arrSecondPet), a = 0; 12 > a; a++) r[a].petInfo == n && r[a].setPetInfo(t);
                EventManager.dispatchEventWith(e.EventConst.MAIN_PANEL_SELECT_PET, !1, t),
                i.arrPetInfo.splice(0);
                for (var a = 0; 6 > a; a++) i.arrFirstPet[a].petInfo && i.arrPetInfo.push(i.arrFirstPet[a].petInfo);
                for (var a = 0; 6 > a; a++) i.arrSecondPet[a].petInfo && i.arrPetInfo.push(i.arrSecondPet[a].petInfo)
            })
        },
        i.prototype.onSkinChange = function(e) {
            var t = this;
            if (this.curPetInfo) {
                var i = e.data;
                if (this.oldPetAniId == i) return;
                this.hidePetModel && (this.hidePetModel = !1, this.petModel.visible = !1, egret.setTimeout(function() {
                    t.petModel.visible = !0
                },
                this, 200)),
                this.petModel.SetPetData(i),
                this.oldPetAniId = i
            }
        },
        i.prototype.onSelectMark = function(t) {
            if (t.data) {
                var i = {
                    ins: CountermarkController.getInfoTemp(t.data.obtainTime),
                    caller: this,
                    putOnCallBack: this.putOnCallBack
                };
                if (this.curMarkObtainTime && CountermarkXMLInfo.getType(t.data.markID) == CountermarkType.MARK_IS_UNIVERSAL) {
                    var n = {
                        ins: CountermarkController.getInfoTemp(this.curMarkObtainTime)
                    };
                    CountermarkXMLInfo.getType(i.ins.markID) == CountermarkType.MARK_IS_UNIVERSAL && CountermarkXMLInfo.getType(n.ins.markID) == CountermarkType.MARK_IS_UNIVERSAL ? PopViewManager.getInstance().openView(new e.MarkContrastPop(i, n)) : tipsPop.TipsPop.openCounterMarkPop(i)
                } else CountermarkXMLInfo.getType(i.ins.markID) == CountermarkType.MARK_IS_UNIVERSAL ? PopViewManager.getInstance().openView(new e.MarkContrastPop(i)) : tipsPop.TipsPop.openCounterMarkPop(i)
            }
        },
        i.prototype.onGetNewSkillToChange = function(t) {
            EventManager.dispatchEventWith(e.EventConst.MAIN_PANEL_SELECT_PET, !1, t.data),
            this.groupDevelopBase.visible || this.showDevelopBaseView(),
            this.showDevelopView(6);
            for (var i = this.groupRightBtn.numChildren,
            n = 0; i > n; n++) {
                var r = this.groupRightBtn.getChildAt(n);
                r.selected = +r.label == this.curViewIndex
            }
        },
        i.prototype.refreshAdvanceDesc = function() {
            var t = this.curPetInfo.id,
            i = PetAdvanceXMLInfo.getOldRace(t),
            n = PetAdvanceXMLInfo.getAdvanceRace(t),
            r = i.reduce(function(e, t) {
                return Number(e) + Number(t)
            }),
            a = n.reduce(function(e, t) {
                return Number(e) + Number(t)
            });
            this.txtOldRace.text = r.toString(),
            this.txtAdvRace.text = a.toString();
            for (var o = [5, 0, 3, 1, 4, 2], s = 0; 5 >= s; s++) {
                this["txtValue" + o[s]].text = i[s];
                var u = Number(i[s]),
                _ = Number(n[s]);
                _ > u ? (this["txtDelta" + o[s]].visible = !0, this["txtDelta" + o[s]].text = (_ - u).toString(), this["signUp" + o[s]].visible = !0, this["txtV" + o[s]].visible = !0, this["txtV" + o[s]].text = _) : (this["txtDelta" + o[s]].visible = !1, this["txtV" + o[s]].visible = !1, this["signUp" + o[s]].visible = !1)
            }
            var l = EffectIconControl.getAdvanceEffectByPetId(t);
            if (l) {
                this.btnDetail.visible = !0;
                var h = l.kind;
                if (this.grpType.removeChildren(), null != h) for (var g = h.toString().split(" ").map(Number), s = 0; s < g.length; s++) {
                    var c = new eui.Image("pet_bag_tag" + (g[s] + 1) + "_png");
                    this.grpType.addChild(c),
                    c.x = 53 * s
                }
            } else this.grpType.visible = !1,
            this.btnDetail.visible = !1;
            var p = new eui.ArrayCollection;
            this._listSkill.itemRenderer = e.SkillItem,
            this._listSkill.dataProvider = p;
            var m = [],
            f = PetAdvanceXMLInfo.getAdvanceSkill(t).concat(PetAdvanceXMLInfo.getAdvanceFifthSkill(t)),
            d = PetXMLInfo.getCanLearnAdvSkillTagList(t);
            for (var s in f) {
                var v = new PetSkillInfo;
                v.id = f[s],
                v.waitChange = !0,
                v.tag = parseInt(s) < d.length ? 2 + d[s] : 1,
                m.push(v)
            }
            p.replaceAll(m),
            m.length < 4 ? (this._listSkill.layout.gap = 20, this._listSkill.layout["paddingTop "] = 15) : (this._listSkill.layout.gap = -15, this._listSkill.layout["paddingTop "] = -10)
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
        i.prototype.showAdvanceDesc = function() {
            var e = this;
            this.hidePetModel = !0,
            egret.lifecycle.stage.touchChildren = !1,
            egret.setTimeout(function() {
                egret.lifecycle.stage.touchChildren = !0
            },
            this, 750),
            gsap.fromTo(this.groupLeft, {
                x: 0,
                alpha: 1
            },
            {
                x: -this.groupLeft.width * this.groupLeft.scaleX,
                alpha: .2,
                duration: .5,
                onComplete: function() {
                    e.groupLeft.visible = !1
                }
            }),
            gsap.fromTo(this.groupBtn, {
                y: 444,
                alpha: 1
            },
            {
                y: 640,
                alpha: .2,
                duration: .5,
                onComplete: function() {
                    e.groupBtn.visible = !1
                }
            }),
            gsap.fromTo(this.groupMiddleTop, {
                y: 0,
                alpha: 1
            },
            {
                y: -444,
                alpha: .2,
                duration: .5,
                onComplete: function() {
                    e.groupMiddleTop.visible = !1,
                    e.btnAdvance.visible = !1
                }
            }),
            gsap.fromTo(this.btnBestQuality, {
                alpha: 1
            },
            {
                alpha: 0,
                duration: .3,
                onComplete: function() {
                    e.btnBestQuality.visible = !1
                }
            }),
            gsap.fromTo(this.btnAdvance, {
                alpha: 1
            },
            {
                alpha: 0,
                duration: .3,
                onComplete: function() {
                    e.btnAdvance.visible = !1
                }
            }),
            this.btnLeft.visible = this.btnRight.visible = !1,
            this.groupAttr.visible = !0,
            gsap.fromTo(this.groupAttr, {
                right: 0,
                alpha: 1
            },
            {
                right: -this.groupAttr.width,
                alpha: .2,
                duration: .25,
                onComplete: function() {
                    e.groupAttr.visible = !1,
                    e.grpRace.visible = !0,
                    gsap.fromTo(e.grpRace, {
                        left: -e.grpRace.width,
                        alpha: .2
                    },
                    {
                        left: 2,
                        alpha: 1,
                        duration: .5
                    }),
                    e.grpSkill.visible = !0,
                    gsap.fromTo(e.grpSkill, {
                        right: 0 - e.grpSkill.width,
                        alpha: .2
                    },
                    {
                        right: 30,
                        alpha: 1,
                        duration: .5
                    })
                }
            })
        },
        i.prototype.hideAdvanceDesc = function() {
            var e = this;
            this.hidePetModel = !0,
            egret.lifecycle.stage.touchChildren = !1,
            egret.setTimeout(function() {
                egret.lifecycle.stage.touchChildren = !0
            },
            this, 750),
            this.groupLeft.visible = !0,
            gsap.fromTo(this.groupLeft, {
                x: -this.groupLeft.width * this.groupLeft.scaleX,
                alpha: .2
            },
            {
                x: 0,
                alpha: 1,
                duration: .5
            }),
            this.groupBtn.visible = !0,
            gsap.fromTo(this.groupBtn, {
                y: 640,
                alpha: .2
            },
            {
                y: 444,
                alpha: 1,
                duration: .5
            }),
            this.groupMiddleTop.visible = !0,
            gsap.fromTo(this.groupMiddleTop, {
                y: -444,
                alpha: .2
            },
            {
                y: 0,
                alpha: 1,
                duration: .5
            }),
            this.btnBestQuality.visible = !GameInfo.isChecking,
            gsap.fromTo(this.btnBestQuality, {
                alpha: .2
            },
            {
                alpha: 1,
                duration: .3
            }),
            this.btnAdvance.visible = !0,
            gsap.fromTo(this.btnAdvance, {
                alpha: .2
            },
            {
                alpha: 1,
                duration: .3
            }),
            this.btnLeft.visible = this.btnRight.visible = !1,
            gsap.fromTo(this.grpRace, {
                left: 2,
                alpha: 1
            },
            {
                left: -this.grpRace.width,
                alpha: .2,
                duration: .3,
                onComplete: function() {
                    e.grpRace.visible = !1
                }
            }),
            gsap.fromTo(this.grpSkill, {
                right: 30,
                alpha: 1
            },
            {
                right: -this.grpSkill.width,
                alpha: .2,
                duration: .3,
                onComplete: function() {
                    e.grpSkill.visible = !1,
                    e.groupAdvPetDesc.visible = !1,
                    e.groupAttr.visible = !0,
                    gsap.fromTo(e.groupAttr, {
                        right: -e.groupAttr.width,
                        alpha: .2
                    },
                    {
                        right: 0,
                        alpha: 1,
                        duration: .25
                    })
                }
            })
        },
        i
    } (BasicPanel);
    e.MainPanel = t,
    __reflect(t.prototype, "petBag.MainPanel")
} (petBag || (petBag = {}));
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
petBag; !
function(e) {
    var t = function(t) {
        function i() {
            var e = t.call(this) || this;
            return e.skinName = "BindSkillPopSkin",
            e
        }
        return __extends(i, t),
        i.prototype.initialized = function() {
            this.arrayCollection = new eui.ArrayCollection,
            this.list.itemRenderer = e.SkillItem,
            this.list.dataProvider = this.arrayCollection,
            this._data && this._data.ontouchItemcallback && (this._onTouchCallBack = this._data.ontouchItemcallback),
            this._data && this._data.caller && (this._caller = this._data.caller),
            this._data && this._data.petinfo && (this._petInfo = this._data.petinfo),
            t.prototype.initialized.call(this),
            this._updateView()
        },
        i.prototype._updateView = function() {
            for (var e = [this._petInfo.abilityMark, this._petInfo.skillMark, this._petInfo.commonMark], t = [], i = 0, n = e; i < n.length; i++) {
                var r = n[i];
                if (r) {
                    var a = CountermarkController.getInfoTemp(r);
                    a.isBindMove && t.push(a.bindMoveID)
                }
            }
            for (var o = [], s = 0; s < this._petInfo.skillArray.length; s++) - 1 != t.indexOf(this._petInfo.skillArray[s].id) && (this._petInfo.skillArray[s].isBindByMark = !0),
            o.push(this._petInfo.skillArray[s]);
            this.arrayCollection.replaceAll(o)
        },
        i.prototype.initEvents = function() {
            this.list.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.onTouchTapItem, this)
        },
        i.prototype.onTouchTapItem = function(e) {
            this._onTouchCallBack && this._caller && this._onTouchCallBack.call(this._caller, e.item.id),
            this.hide()
        },
        i.prototype.removeEvents = function() {
            this.list.removeEventListener(eui.ItemTapEvent.ITEM_TAP, this.onTouchTapItem, this)
        },
        i.prototype.destroy = function() {
            this.arrayCollection = null,
            this._onTouchCallBack = null,
            this._caller = null,
            t.prototype.destroy.call(this)
        },
        i
    } (PopView);
    e.BindSkillPop = t,
    __reflect(t.prototype, "petBag.BindSkillPop")
} (petBag || (petBag = {}));
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
petBag; !
function(e) {
    var t = function(t) {
        function i(e) {
            var i = t.call(this) || this;
            return i.hasUnlockItem = !1,
            i.unlockSkillArr = [],
            i.skinName = "PetBagChangeFifthSkillPopSkin",
            i.petInfo = e,
            i
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            var t = this;
            ImageButtonUtil.add(this.btnClose, this.hide, this),
            this.list.itemRenderer = e.FifthSkillItem,
            this.arrayCollection = new eui.ArrayCollection,
            this.list.dataProvider = this.arrayCollection,
            this.list.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.onClickSkill, this),
            this.itemList.itemRenderer = e.SmallItem,
            this.itemArrayCollection = new eui.ArrayCollection,
            this.itemList.dataProvider = this.itemArrayCollection,
            this.itemList.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.onClickItem, this);
            var i = PetXMLInfo.getAllSkill(this.petInfo.id, [1, 3, 4]);
            PetManager.getAllSkillCanUse(this.petInfo, [1, 3, 4]).then(function(n) {
                t.arrFifth = [],
                t.unlockSkillArr = [];
                for (var r = 0,
                a = i; r < a.length; r++) {
                    var o = a[r],
                    s = o.skillId,
                    u = {},
                    _ = SkillXMLInfo.getSkillObj(s);
                    u.id = _.ID,
                    u.name = _.Name,
                    u.damage = _.Power || 0,
                    u.maxPP = _.MaxPP,
                    u.waitChange = !0;
                    for (var l = null,
                    h = 0,
                    g = n; h < g.length; h++) {
                        var c = g[h];
                        s == c.skillId && (l = c)
                    }
                    u.hasGot = !!l,
                    u.hasEquip = !!l && l.hasUse,
                    u.hasGot || t.unlockSkillArr.push(u.id),
                    t.arrFifth.push(u)
                }
                t.arrayCollection.source = t.arrFifth;
                for (var p = [], m = i.filter(function(e) {
                    return 5 == e.type
                }), f = 0, d = m; f < d.length; f++) {
                    var v = d[f],
                    I = SkillXMLInfo.getSPHideMovesInfo(v.skillId);
                    if (I && I.item > 0) {
                        var x = {};
                        x.type = "item",
                        x.id = I.item,
                        x.rarity = ItemXMLInfo.getItemRarity(I.item),
                        p.push(x)
                    }
                }
                p.sort(e.SmallItem.compareRarity),
                t.hasUnlockItem = p.length > 0,
                t.itemGroup.visible = t.hasUnlockItem && t.unlockSkillArr.length > 0,
                t.skillScroller.height = t.hasUnlockItem && t.unlockSkillArr.length > 0 ? 235 : 350,
                t.itemArrayCollection.source = p
            })
        },
        i.prototype.onClickSkill = function(t) {
            var i, n, r, a = this,
            o = t.item.hasEquip,
            s = t.item.hasGot,
            u = t.item.id;
            if (!s) {
                var _ = SkillXMLInfo.getSPHideMovesInfo(u);
                _ && (i = _.item, n = _.itemnumber, r = _.itemname + "*" + n)
            }
            var l, h = !1;
            if (PetAdvanceXMLInfo.getIncludeAdvance(this.petInfo.id)) {
                var g = PetAdvanceXMLInfo.getAdvanceFifthSkill(this.petInfo.id);
                g.indexOf(u) >= 0 && (h = !0, l = PetAdvanceXMLInfo.getAdvType(this.petInfo.id) > 0 ? "元素觉醒": "神谕进阶")
            }
            tipsPop.TipsPop.openSkillPop({
                id: t.item.id,
                petInfo: this.petInfo,
                onChangeFun: o ? null: function(t, r) {
                    if (s) EventManager.dispatchEventWith(e.EventConst.SKILL_VIEW_CONFIRM_CHANGE_SKILL, !1, t),
                    a.hide();
                    else {
                        var o = ItemManager.getNumByID(Number(i));
                        if (o >= n) SocketConnection.sendWithPromise(41833, [a.petInfo.catchTime, t]).then(function(e) {
                            a.updateView(),
                            BubblerManager.getInstance().showText("恭喜你！成功获得技能：" + SkillXMLInfo.getName(t))
                        });
                        else {
                            if (h) return void BubblerManager.getInstance().showText("完成" + l + "后才可习得该技能哦！");
                            BubblerManager.getInstance().showText("你的道具数量不足，无法学习该技能！")
                        }
                    }
                },
                ensureWord: o ? "已携带": s ? "替换": h ? " ": "学习技能",
                additionDescWord: s ? null: h ? [{
                    text: "完成" + l + "后获得",
                    style: {
                        textColor: 16766720
                    }
                }] : [{
                    text: "可通过消耗",
                    style: {
                        textColor: 16766720
                    }
                },
                {
                    text: r,
                    style: {
                        textColor: 14811135
                    }
                },
                {
                    text: "获得",
                    style: {
                        textColor: 16766720
                    }
                }],
                caller: this
            })
        },
        i.prototype.onClickItem = function(e) {
            tipsPop.TipsPop.openItemPop({
                type: 1,
                id: e.item.id
            })
        },
        i.prototype.updateView = function() {
            var e = this;
            PetManager.checkPetLearnFifthSkill(this.petInfo.catchTime,
            function(t) {
                for (var i = 0; i < e.arrFifth.length; i++) t.indexOf(e.arrFifth[i].id) >= 0 && (e.arrFifth[i].hasGot = !0);
                e.arrayCollection.source = e.arrFifth,
                e.unlockSkillArr = e.unlockSkillArr.filter(function(e) {
                    return t.indexOf(e) < 0
                }),
                e.itemGroup.visible = e.hasUnlockItem && e.unlockSkillArr.length > 0,
                e.skillScroller.height = e.hasUnlockItem && e.unlockSkillArr.length > 0 ? 235 : 350,
                e.itemArrayCollection.refresh()
            },
            this)
        },
        i
    } (PopView);
    e.ChangeFifthSkillPop = t,
    __reflect(t.prototype, "petBag.ChangeFifthSkillPop")
} (petBag || (petBag = {}));
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
    return new(i || (i = Promise))(function(r, a) {
        function o(e) {
            try {
                u(n.next(e))
            } catch(t) {
                a(t)
            }
        }
        function s(e) {
            try {
                u(n["throw"](e))
            } catch(t) {
                a(t)
            }
        }
        function u(e) {
            e.done ? r(e.value) : new i(function(t) {
                t(e.value)
            }).then(o, s)
        }
        u((n = n.apply(e, t || [])).next())
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
        for (; u;) try {
            if (r = 1, a && (o = a[2 & i[0] ? "return": i[0] ? "throw": "next"]) && !(o = o.call(a, i[1])).done) return o;
            switch (a = 0, o && (i = [0, o.value]), i[0]) {
            case 0:
            case 1:
                o = i;
                break;
            case 4:
                return u.label++,
                {
                    value: i[1],
                    done: !1
                };
            case 5:
                u.label++,
                a = i[1],
                i = [0];
                continue;
            case 7:
                i = u.ops.pop(),
                u.trys.pop();
                continue;
            default:
                if (o = u.trys, !(o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                    u = 0;
                    continue
                }
                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                    u.label = i[1];
                    break
                }
                if (6 === i[0] && u.label < o[1]) {
                    u.label = o[1],
                    o = i;
                    break
                }
                if (o && u.label < o[2]) {
                    u.label = o[2],
                    u.ops.push(i);
                    break
                }
                o[2] && u.ops.pop(),
                u.trys.pop();
                continue
            }
            i = t.call(e, u)
        } catch(n) {
            i = [6, n],
            a = 0
        } finally {
            r = o = 0
        }
        if (5 & i[0]) throw i[1];
        return {
            value: i[0] ? i[1] : void 0,
            done: !0
        }
    }
    var r, a, o, s, u = {
        label: 0,
        sent: function() {
            if (1 & o[0]) throw o[1];
            return o[1]
        },
        trys: [],
        ops: []
    };
    return s = {
        next: i(0),
        "throw": i(1),
        "return": i(2)
    },
    "function" == typeof Symbol && (s[Symbol.iterator] = function() {
        return this
    }),
    s
},
petBag; !
function(e) {
    var t = function(t) {
        function i(e, i) {
            var n = t.call(this) || this;
            return n.skinName = "PetBagChangePetPopSkin",
            n.oldPetInfo = e,
            n.bagPosition = i,
            n
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            var e = this;
            this.addEvent(),
            this.init().then(function() {
                var t = new eui.RadioButtonGroup;
                e.btn1.group = t,
                e.btn2.group = t,
                e.btn1.selected = !0,
                e.setIndex(1)
            })
        },
        i.prototype.init = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var t = this;
                return __generator(this,
                function(i) {
                    return [2, new Promise(function(i, n) {
                        t.list.itemRenderer = e.ChangePetPopPetItem,
                        t.ac = new eui.ArrayCollection,
                        t.list.dataProvider = t.ac,
                        PetManager.getLovePetList(),
                        PetStorage2015InfoManager.getTotalInfo(function() {
                            i()
                        })
                    })]
                })
            })
        },
        i.prototype.addEvent = function() {
            var e = this;
            this.txtSearch.addEventListener(egret.Event.CHANGE, this.onSearch, this),
            this.list.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.onClickPet, this),
            ImageButtonUtil.add(this.btnClose, this.hide, this),
            ImageButtonUtil.add(this.btn1,
            function() {
                e.setIndex(1)
            },
            this, !1, !1),
            ImageButtonUtil.add(this.btn2,
            function() {
                e.setIndex(2)
            },
            this, !1, !1),
            ImageButtonUtil.add(this.btnFilter,
            function() {
                var t = {
                    callBack: e.onFilter,
                    caller: e,
                    unAutoClose: !1,
                    relativeSet: {
                        srcWorldPos: e.btnFilter.localToGlobal( - 345, 40),
                        dir: "left-top",
                        rx: 0,
                        ry: 0
                    }
                };
                ModuleManager.showModule("petChooseAttributePanel", ["pet_choose_attribute_panel"], t, "", AppDoStyle.NULL)
            },
            this)
        },
        i.prototype.destroy = function() {
            t.prototype.destroy.call(this),
            ImageButtonUtil.removeAll(this)
        },
        i.prototype.onSearch = function() {
            var e = this;
            this.list.parent.stopAnimation();
            var t;
            1 == this.curIndex ? t = PetStorage2015InfoManager.storageInfo.filter(function(t) {
                return SearchUtil.isMatch(e.txtSearch.text, t.name) || SearchUtil.isMatch(e.txtSearch.text, t.id + "")
            }) : 2 == this.curIndex && (t = PetStorage2015InfoManager.eliteInfo.filter(function(t) {
                return SearchUtil.isMatch(e.txtSearch.text, t.name) || SearchUtil.isMatch(e.txtSearch.text, t.id + "")
            }), t = t.filter(function(e) {
                return 1 != e.posi && 2 != e.posi && 7 != e.posi
            }));
            var i = [1, 2, 7];
            1 == this.curIndex ? t.sort(function(e, t) {
                return e.posi - t.posi
            }) : 2 == this.curIndex && t.sort(function(e, t) {
                return i.indexOf(e.posi) > -1 && 4 == t.posi ? -1 : 1
            }),
            this.ac.source = t
        },
        i.prototype.setIndex = function(e) {
            if (e != this.curIndex) {
                this.curIndex = e,
                this.txtSearch.text = "",
                this.list.parent.stopAnimation();
                var t;
                1 == e ? t = PetStorage2015InfoManager.storageInfo: 2 == e && (t = PetStorage2015InfoManager.eliteInfo.filter(function(e) {
                    return 1 != e.posi && 2 != e.posi && 7 != e.posi
                }));
                var i = [1, 2, 7];
                1 == e ? t.sort(function(e, t) {
                    return e.posi - t.posi
                }) : 2 == e && t.sort(function(e, t) {
                    return i.indexOf(e.posi) > -1 && 4 == t.posi ? -1 : 1
                }),
                this.ac.source = t
            }
        },
        i.prototype.onClickPet = function(e) {
            var t = this;
            if (e.item.posi == PetStorage2015PosiType.SHOW || e.item.posi == PetStorage2015PosiType.TEAMTASK) return void BubblerManager.getInstance().showText("该精灵当前不可替换");
            var n = e.item;
            Alert.show("点击确认替换" + this.oldPetInfo.name + "为" + e.item.name + "到背包中",
            function() {
                return __awaiter(t, void 0, void 0,
                function() {
                    var e = this;
                    return __generator(this,
                    function(t) {
                        return SocketConnection.sendByQueue(41467, [this.oldPetInfo.sortIndex, this.oldPetInfo.catchTime, n.catchTime],
                        function() {
                            i.changeFlag = !0,
                            PetManager.dispatchEvent(new PetEvent(PetEvent.STORAGE_ADDED, e.oldPetInfo.catchTime)),
                            e.hide()
                        }),
                        [2]
                    })
                })
            })
        },
        i.prototype.onFilter = function(e, t) {
            this.list.parent.stopAnimation();
            var i;
            1 == this.curIndex ? i = PetStorage2015InfoManager.storageInfo: 2 == this.curIndex && (i = PetStorage2015InfoManager.eliteInfo.filter(function(e) {
                return 1 != e.posi && 2 != e.posi && 7 != e.posi
            }));
            var n = [1, 2, 7];
            1 == this.curIndex ? i.sort(function(e, t) {
                return e.posi - t.posi
            }) : 2 == this.curIndex && i.sort(function(e, t) {
                return n.indexOf(e.posi) > -1 && 4 == t.posi ? -1 : 1
            }),
            t > 0 && (i = i.filter(function(e) {
                return e.type == t
            })),
            this.ac.source = i
        },
        i
    } (PopView);
    e.ChangePetPop = t,
    __reflect(t.prototype, "petBag.ChangePetPop")
} (petBag || (petBag = {}));
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
petBag; !
function(e) {
    var t = function(t) {
        function i(e) {
            var i = t.call(this) || this;
            return i.hasUnlockItem = !1,
            i.unlockSkillArr = [],
            i.skinName = "PetBagChangeSkillPopSkin",
            i.petInfo = e,
            i
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            var t = this;
            ImageButtonUtil.add(this.btnClose, this.hide, this),
            this.list.itemRenderer = e.SkillItem,
            this.arrayCollection = new eui.ArrayCollection,
            this.list.dataProvider = this.arrayCollection,
            this.list.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.onClickSkill, this),
            this.itemList.itemRenderer = e.SmallItem,
            this.itemArrayCollection = new eui.ArrayCollection,
            this.itemList.dataProvider = this.itemArrayCollection,
            this.itemList.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.onClickItem, this);
            var i = SkillXMLInfo.getSPHideMoves(this.petInfo.id);
            PetManager.getAllSkillCanUse(this.petInfo, [2, 5, 6]).then(function(n) {
                n = n.filter(function(e) {
                    return ! e.hasUse
                }),
                i = i.filter(function(e) {
                    for (var i = t.petInfo.skillArray,
                    r = !1,
                    a = 0,
                    o = i; a < o.length; a++) {
                        var s = o[a];
                        if (s.id == e) {
                            r = !0;
                            break
                        }
                    }
                    for (var u = 0,
                    _ = n; u < _.length; u++) {
                        var l = _[u];
                        if (l.skillId == e) {
                            r = !0;
                            break
                        }
                    }
                    return ! r
                }),
                t._arr = [];
                for (var r = 0,
                a = n; r < a.length; r++) {
                    var o = a[r],
                    s = o.skillId,
                    u = SkillXMLInfo.getSkillObj(s),
                    _ = {};
                    _.id = u.ID,
                    _.name = u.Name,
                    _.damage = u.Power || 0,
                    _.maxPP = u.MaxPP,
                    _.waitChange = !0,
                    (o.info.Rec || o.info.Tag) && (o.info.Tag ? _.tag = 2 + o.info.Tag: _.tag = 2);
                    for (var l = null,
                    h = 0,
                    g = n; h < g.length; h++) {
                        var c = g[h];
                        s == c.skillId && (l = c)
                    }
                    _.hasGot = !!l,
                    _.hasEquip = !!l && l.hasUse,
                    t._arr.push(_)
                }
                var p = [];
                t.unlockSkillArr = [];
                for (var m = 0,
                f = i; m < f.length; m++) {
                    var d = f[m],
                    v = SkillXMLInfo.getSPHideMovesInfo(d);
                    if (v && 1 != v.movetype) {
                        if (v.item > 0) {
                            var I = {};
                            I.type = "item",
                            I.id = v.item,
                            I.rarity = ItemXMLInfo.getItemRarity(v.item),
                            p.push(I)
                        }
                        var x = {},
                        b = SkillXMLInfo.getSkillObj(d);
                        x.id = b.ID,
                        x.name = b.Name,
                        x.damage = b.Power || 0,
                        x.maxPP = b.MaxPP,
                        x.waitChange = !0;
                        for (var y = null,
                        w = 0,
                        S = n; w < S.length; w++) {
                            var C = S[w];
                            d == C.skillId && (y = C)
                        }
                        x.hasGot = !!y,
                        x.hasEquip = !!y && y.hasUse,
                        x.hasGot || t.unlockSkillArr.push(x.id),
                        t._arr.push(x)
                    }
                }
                t.arrayCollection.source = t._arr,
                p.sort(e.SmallItem.compareRarity),
                t.hasUnlockItem = p.length > 0,
                t.itemGroup.visible = t.hasUnlockItem && t.unlockSkillArr.length > 0,
                t.skillScroller.height = t.hasUnlockItem && t.unlockSkillArr.length > 0 ? 235 : 350,
                t.itemArrayCollection.source = p
            })
        },
        i.prototype.onClickSkill = function(t) {
            var i, n, r, a = this,
            o = t.item.hasEquip,
            s = t.item.hasGot,
            u = t.item.id;
            if (!s) {
                var _ = SkillXMLInfo.getSPHideMovesInfo(u);
                _ && (i = _.item, n = _.itemnumber, r = _.itemname + "*" + n)
            }
            var l, h = !1;
            if (PetAdvanceXMLInfo.getIncludeAdvance(this.petInfo.id)) {
                var g = PetAdvanceXMLInfo.getAdvanceSkill(this.petInfo.id);
                g.indexOf(u) >= 0 && (h = !0, l = PetAdvanceXMLInfo.getAdvType(this.petInfo.id) > 0 ? "元素觉醒": "神谕进阶")
            }
            tipsPop.TipsPop.openSkillPop({
                id: t.item.id,
                petInfo: this.petInfo,
                onChangeFun: o ? null: function(t, r) {
                    if (s) EventManager.dispatchEventWith(e.EventConst.SKILL_VIEW_CONFIRM_CHANGE_SKILL, !1, t),
                    a.hide(),
                    GuideManager.isCompleted() || 17835 != t || EventManager.dispatchEventWith("change_skill", !1, 17835);
                    else {
                        var o = ItemManager.getNumByID(Number(i));
                        if (o >= n) SocketConnection.sendWithPromise(41833, [a.petInfo.catchTime, t]).then(function(e) {
                            a.updateView(t),
                            BubblerManager.getInstance().showText("恭喜你！成功获得技能：" + SkillXMLInfo.getName(t))
                        });
                        else {
                            if (h) return void BubblerManager.getInstance().showText("完成" + l + "后才可习得该技能哦！");
                            BubblerManager.getInstance().showText("你的道具数量不足，无法学习该技能！")
                        }
                    }
                },
                ensureWord: o ? "已携带": s ? "替换": h ? " ": "学习技能",
                additionDescWord: s ? null: h ? [{
                    text: "完成" + l + "后获得",
                    style: {
                        textColor: 16766720
                    }
                }] : [{
                    text: "可通过消耗",
                    style: {
                        textColor: 16766720
                    }
                },
                {
                    text: r,
                    style: {
                        textColor: 14811135
                    }
                },
                {
                    text: "获得",
                    style: {
                        textColor: 16766720
                    }
                }],
                caller: this
            }),
            GuideManager.isCompleted() || 17835 != t.item.id || EventManager.dispatchEventWith("select_pet_skill", !1, 17835)
        },
        i.prototype.onClickItem = function(e) {
            tipsPop.TipsPop.openItemPop({
                type: 1,
                id: e.item.id
            })
        },
        i.prototype.destroy = function() {
            ImageButtonUtil.removeAll(this),
            t.prototype.destroy.call(this)
        },
        i.prototype.addAdvancedSkill = function(e, t) {
            t(e)
        },
        i.prototype.updateView = function(e) {
            for (var t = this,
            i = 0; i < this._arr.length; i++) e == this._arr[i].id && (this._arr[i].hasGot = !0);
            this.unlockSkillArr = this.unlockSkillArr.filter(function(t) {
                return t != e
            }),
            this.itemGroup.visible = this.hasUnlockItem && this.unlockSkillArr.length > 0,
            this.skillScroller.height = this.hasUnlockItem && this.unlockSkillArr.length > 0 ? 235 : 350,
            this.arrayCollection.source = this._arr,
            TimeDelayUtils.setTimeout(function() {
                t.itemArrayCollection.refresh(),
                t.skillScroller.viewport.scrollV = t.skillScroller.viewport.contentHeight - t.skillScroller.height
            },
            200, this)
        },
        i
    } (PopView);
    e.ChangeSkillPop = t,
    __reflect(t.prototype, "petBag.ChangeSkillPop")
} (petBag || (petBag = {}));
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
petBag; !
function(e) {
    var t = function(e) {
        function t(t) {
            var i = e.call(this) || this;
            return i.arrName = [null, "hp", "attack", "defence", "s_a", "s_d", "speed"],
            i.arrType = [["学习力：", "刻印：", "战队加成：", "称号加成：", "年费加成：", null, "专属特性：", "装扮加成：", null, "神谕进阶：", "特殊加成："], [null, null, null, null, null, null, "专属特性：", "装扮加成：", null, "特殊加成："], [null, null, null, null, null, "道具加成：", "专属特性：", "装扮加成：", null, "特殊加成："]],
            i.arrOrder = [[1, 2, 3, 4, 5, 0, 7, 8, 0, 6, 9], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]],
            i.skinName = "PetBagDetailPopSkin",
            i.petInfo = t,
            i.cacheAsBitmap = !0,
            i
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            ImageButtonUtil.add(this.btnClose, this.hide, this);
            var e = new eui.RadioButtonGroup;
            this.btnHealth.group = e,
            this.btnAttack.group = e,
            this.btnDefence.group = e,
            this.btnSAttack.group = e,
            this.btnSDefence.group = e,
            this.btnSpeed.group = e,
            e.addEventListener(egret.Event.CHANGE, this.refresh, this),
            this.btnHealth.selected = !0,
            this.refresh()
        },
        t.prototype.destroy = function() {
            e.prototype.destroy.call(this),
            ImageButtonUtil.removeAll(this),
            this.btnHealth.group.removeEventListener(egret.Event.CHANGE, this.refresh, this)
        },
        t.prototype.refresh = function() {
            var e = this,
            t = +this.btnHealth.group.selectedValue || 1;
            this.txtAll1.text = "基础总值" + this.petInfo["base_" + this.arrName[t] + "_total"],
            this.txtAll2.text = "PVE总值" + this.petInfo["pve_" + this.arrName[t] + "_total"],
            this.txtAll3.text = "PVP总值" + this.petInfo["pvp_" + this.arrName[t] + "_total"],
            SocketConnection.sendWithPromise(43325, [this.petInfo.catchTime, t]).then(function(t) {
                for (var i = t.data,
                n = i.readUnsignedInt(), r = 0; n > r; r++) {
                    for (var a = "",
                    o = [], s = i.readUnsignedInt(), u = 0; s > u; u++) {
                        var _ = i.readUnsignedInt(),
                        l = i.readUnsignedInt();
                        e.arrType[r][u] && (a = e.arrType[r][u], 0 == _ && 0 == l ? a += "无": 0 == _ ? a += "+" + l + "%": 0 != _ && (a += "+" + _ + (0 == l ? "": ", +" + l + "%")), 0 == e.arrOrder[r][u] ? o.push(a) : o.splice(e.arrOrder[r][u] - 1, 0, a))
                    }
                    e["txt" + (r + 1)].text = o.join("\n")
                }
            })
        },
        t
    } (PopView);
    e.DetailPop = t,
    __reflect(t.prototype, "petBag.DetailPop")
} (petBag || (petBag = {}));
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
petBag; !
function(e) {
    var t = function(t) {
        function i(e) {
            var i = t.call(this) || this;
            return i.curQuickCompose = 0,
            i.skinName = "PetBagDreamStoneComposePopSkin",
            i.petInfo = e,
            i
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            this.init(),
            this.addEvent();
            for (var e = 1; 4 >= e; ++e) this["btnXuanzhong" + e].visible = !1
        },
        i.prototype.init = function() {
            var t = this;
            this.groupStone.removeChildren();
            var i = [1200444, 1200445, 1200446, 1707149];
            ItemManager.updateItems(i,
            function() {
                for (var n = function(i) {
                    var n = new e.SmallItem;
                    t.groupStone.addChild(n),
                    n.setItemInfo(i,
                    function() {
                        t.addItem(i)
                    },
                    !0)
                },
                r = 0, a = i; r < a.length; r++) {
                    var o = a[r];
                    n(o)
                }
            }),
            this.txtTipsCompose.textFlow = [{
                text: "合成",
                style: {
                    textColor: 8631282
                }
            },
            {
                text: "4个同级别宝石",
                style: {
                    textColor: 16514896
                }
            },
            {
                text: "，必定获得",
                style: {
                    textColor: 8631282
                }
            },
            {
                text: "1个高等级宝石",
                style: {
                    textColor: 16514896
                }
            }]
        },
        i.prototype.addEvent = function() {
            var t = this;
            ImageButtonUtil.add(this.btnReset, this.reset, this),
            ImageButtonUtil.add(this.btnCompose,
            function() {
                var i = [1200444, 1200445, 1200446, 1707149].indexOf(t.curItemId),
                n = [5e4, 1e5, 2e5, 4e5][i]; ! t.curNum || t.curNum < 2 ? BubblerManager.getInstance().showText("合成需要至少2个相同的宝石!") : MainManager.actorInfo.coins < n ? BubblerManager.getInstance().showText("你的赛尔豆不足哦!") : Alert.show("梦幻宝石合成将有几率获得更高等级的梦幻宝石，失败时梦幻宝石有一定几率损毁哦！确定要" + TextFormatUtil.getRedTxt("花费" + n + "赛尔豆") + "进行合成吗？",
                function() {
                    SocketConnection.sendByQueue(CommandID.EFFECT_STRENGTHEN_COMPOUND, [i, t.curNum],
                    function(i) {
                        0 == i.data.readUnsignedInt() && BubblerManager.getInstance().showText("合成失败，一颗" + ItemXMLInfo.getName(t.curItemId) + "被损毁了"),
                        t.init(),
                        t.reset(),
                        EventManager.dispatchEvent(new egret.Event(e.EventConst.PET_INFO_UPDATE, !1, !1, t.petInfo))
                    })
                })
            },
            this);
            for (var i = function(e) {
                ImageButtonUtil.add(n["btnDaixuan" + e],
                function() {
                    t.onSelectQuickCompose(e)
                },
                n)
            },
            n = this, r = 1; 4 >= r; ++r) i(r);
            ImageButtonUtil.add(this.btnKuaijiehecheng,
            function() {
                0 == t.curQuickCompose ? BubblerManager.getInstance().showText("请先选择需要进行快捷合成的宝石") : t.onQuickCompose()
            },
            this)
        },
        i.prototype.destroy = function() {
            t.prototype.destroy.call(this),
            ImageButtonUtil.removeAll(this)
        },
        i.prototype.reset = function() {
            this.curNum = 0,
            this.curItemId = null,
            this.txtRate.text = "";
            for (var e = 1; 4 >= e; e++) this["imgAdd" + e].source = "pet_bag_dream_stone_compose_pop_imgadd1_png",
            this["imgAddBg" + e].source = "rarity_item_1_png"
        },
        i.prototype.addItem = function(e) {
            if (this.curNum >= 4) return void BubblerManager.getInstance().showText("放入的宝石已经达到上限!");
            if (this.curItemId) {
                if (this.curItemId != e) return void BubblerManager.getInstance().showText("只有相同类型的宝石才可以合成，请放入" + ItemXMLInfo.getName(this.curItemId));
                if (this.curNum++, this.curNum > ItemManager.getNumByID(e)) return BubblerManager.getInstance().showText(ItemXMLInfo.getName(e) + "数量不足！"),
                void this.curNum--;
                this.txtRate.text = 25 * this.curNum + "%",
                this["imgAdd" + this.curNum].source = ClientConfig.getItemIcon(e),
                this["imgAddBg" + this.curNum].source = "rarity_item_" + ItemXMLInfo.getItemRarity(e) + "_png"
            } else ItemManager.getNumByID(e) <= 0 ? BubblerManager.getInstance().showText(ItemXMLInfo.getName(e) + "数量不足！") : (this.curItemId = e, this.curNum = 1, this.txtRate.text = "", this.imgAdd1.source = ClientConfig.getItemIcon(e), this.imgAddBg1.source = "rarity_item_" + ItemXMLInfo.getItemRarity(e) + "_png")
        },
        i.prototype.onSelectQuickCompose = function(e) {
            for (var t = 1; 4 >= t; ++t) t == e ? (this.curQuickCompose = t, this["btnXuanzhong" + t].visible = !0) : this["btnXuanzhong" + t].visible = !1
        },
        i.prototype.onQuickCompose = function() {
            for (var t = this,
            i = [0, 0, 0, 0], n = [ItemManager.getNumByID(1200444), ItemManager.getNumByID(1200445), ItemManager.getNumByID(1200446), ItemManager.getNumByID(1707149)], r = 1, a = 0, o = !1, s = this.curQuickCompose - 1; s >= 0; s--) {
                r /= 4;
                var u = (1 - a) / r;
                if (a += r * n[s], a >= 1) {
                    i[s] = u,
                    o = !0;
                    break
                }
                i[s] = n[s]
            }
            if (o) {
                for (var _ = [1200444, 1200445, 1200446, 1707149, 1707150], l = [5e4, 1e5, 2e5, 4e5], h = "是否消耗", g = [], s = 0; s < this.curQuickCompose; ++s) i[s] > 0 && (h += ItemXMLInfo.getName(_[s]) + "*" + i[s] + "、", g.push([s, i[s]]));
                var c = new egret.ByteArray;
                c.writeUnsignedInt(g.length);
                for (var s = 0; s < g.length; ++s) c.writeUnsignedInt(g[s][0]),
                c.writeUnsignedInt(g[s][1]);
                h += "赛尔豆*" + l[this.curQuickCompose - 1] + "合成1颗" + ItemXMLInfo.getName(_[this.curQuickCompose]) + "？",
                Alert.show(h,
                function() {
                    SocketConnection.sendByQueue(45851, [t.curQuickCompose, 1, c],
                    function() {
                        t.init(),
                        t.reset(),
                        EventManager.dispatchEvent(new egret.Event(e.EventConst.PET_INFO_UPDATE, !1, !1, t.petInfo))
                    })
                })
            } else BubblerManager.getInstance().showText("合成所需材料不足")
        },
        i
    } (PopView);
    e.DreamStoneComposePop = t,
    __reflect(t.prototype, "petBag.DreamStoneComposePop")
} (petBag || (petBag = {}));
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
petBag; !
function(e) {
    var t = function(e) {
        function t(t) {
            var i = e.call(this) || this;
            return i.skinName = "PetBagMarkAdditionPopSkin",
            i.petInfo = t,
            i
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            for (var e = [], t = 0; 12 > t; t++) e[t] = 0;
            var i = [];
            this.petInfo && (i[0] = this.petInfo.abilityMark, i[1] = this.petInfo.skillMark, i[2] = this.petInfo.commonMark);
            for (var t = 0; 3 > t; t++) if (i[t]) {
                var n = CountermarkController.getInfoTemp(i[t]);
                if (CountermarkXMLInfo.getType(n.markID) == CountermarkType.MARK_IS_COMMON_ABLITY) n.adjArray = CountermarkXMLInfo.getArg(n.markID);
                else if (CountermarkXMLInfo.getType(n.markID) == CountermarkType.MARK_IS_SKILL) continue;
                for (var r = n.hasExtraAttri && n.level == CountermarkXMLInfo.getMaxGrade(n.markID), a = 0; 6 > a; a++) e[a] += n.adjArray[a],
                r && (e[a + 6] += n.extraAttri[a])
            }
            for (var t = 0; 12 > t; t++) this["txt" + (t + 1)].text = "+" + e[t]
        },
        t
    } (PopView);
    e.MarkAdditionPop = t,
    __reflect(t.prototype, "petBag.MarkAdditionPop")
} (petBag || (petBag = {}));
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
petBag; !
function(e) {
    var t = function(t) {
        function i(e, i) {
            var n = t.call(this) || this;
            return n.skinName = "MarkDecomposeConfirmPopSkin",
            n.arrAll = e,
            n.parentPop = i,
            n.grpStatic.cacheAsBitmap = !0,
            n
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            this.init(),
            this.addEvent()
        },
        i.prototype.destroy = function() {
            for (var e = 0,
            i = this.arrAll; e < i.length; e++) {
                var n = i[e];
                n.selected = !1,
                n.inComfirmPop = !1
            }
            this.parentPop.isLock = !1,
            this.parentPop.onChangeTab(),
            EventManager.removeAll(this),
            ImageButtonUtil.removeAll(this),
            t.prototype.destroy.call(this)
        },
        i.prototype.init = function() {
            this.arrSelect = this.arrAll.filter(Boolean);
            for (var t = 0,
            i = this.arrAll; t < i.length; t++) {
                var n = i[t];
                n.selected = !0,
                n.inComfirmPop = !0
            }
            this.arrAll.length > 8 ? this.grpDynamicMarkList.cacheAsBitmap = !1 : this.grpDynamicMarkList.cacheAsBitmap = !0,
            this.list.itemRenderer = e.MarkDecomposeItem,
            this.list.dataProvider = new eui.ArrayCollection(this.arrAll),
            this.updateAcquireItemList()
        },
        i.prototype.updateAcquireItemList = function() {
            this.acquireList.itemRenderer = e.MarkDecomAcquireItem;
            for (var t = [500, 1e3, 2e3, 4e3, 8e3], i = new HashMap, n = 0, r = this.arrAll; n < r.length; n++) {
                var a = r[n];
                if (a.selected) {
                    for (var o = 0,
                    s = 0,
                    u = +CountermarkXMLInfo.getMaxGrade(a.markID), _ = +CountermarkXMLInfo.getCurrentGrade(a.markID, a.adjArray), l = CountermarkXMLInfo.getBaseAttriValue(a.markID), h = 0; 6 > h; ++h) + l[h] > 0 && o++;
                    var g = +CountermarkXMLInfo.getTotalConsume(a.markID);
                    if (0 != g) s = g;
                    else {
                        for (var c = [1521, 1517, 1521, 1517, 1822, 1510], p = [3.53, 2.53, 1.53, .53], m = CountermarkXMLInfo.getMaxAttriValue(a.markID), h = 0; 6 > h; ++h) s += +m[h] * c[h];
                        o >= 2 && 5 >= o && (s *= p[5 - o])
                    }
                    var f = Math.ceil(s * ((1 + _) * _) / ((1 + u) * u) * .2 + t[o - 1]);
                    if (0 == f && (f = 1), null == i.getValue(1400352) ? i.add(1400352, f) : i.add(1400352, i.getValue(1400352) + f), a.isBindGem && null != GemsXMLInfo.gemsMap.getValue(a.gemID)) {
                        var d = 0,
                        v = 0,
                        I = GemsXMLInfo.getCategory(a.gemID);
                        100 > I ? (d = I, v = GemsXMLInfo.getDecomposeProb(a.gemID) / 1e4 * GemsXMLInfo.getEquitLv1Cnt1(a.gemID), 0 == v && (v = 1), v = Math.ceil(v)) : (d = 1723854, v = .3 * GemsXMLInfo.getEquitLv1Cnt1(a.gemID), 0 == v && (v = 600)),
                        null == i.getValue(d) ? i.add(d, v) : i.add(d, i.getValue(d) + v)
                    }
                }
            }
            for (var x = [], b = i.getKeys(), y = i.getValues(), h = 0; h < b.length; ++h) 1400352 != b[h] && 1723854 != b[h] ? x.push([0, b[h], y[h]]) : x.push([1, b[h], y[h]]);
            x.length > 6 ? this.grpDynamicAcquireList.cacheAsBitmap = !1 : this.grpDynamicAcquireList.cacheAsBitmap = !0,
            this.acquireList.dataProvider = new eui.ArrayCollection(x)
        },
        i.prototype.addEvent = function() {
            ImageButtonUtil.add(this.btnClose, this.hide, this),
            ImageButtonUtil.add(this.btnCancel, this.hide, this),
            ImageButtonUtil.add(this.btnOK, this.deCompose, this),
            EventManager.addEventListener(e.MarkDecomposePop.EVENT_CLICK_MARK_TO_DECOMPOSE, this.onClickMark, this)
        },
        i.prototype.onClickMark = function(e) {
            var t = e.data,
            i = t.data,
            n = this.arrSelect.indexOf(i); - 1 != n ? (t.setSelected(!1), this.arrSelect.splice(n, 1)) : (t.setSelected(!0), this.arrSelect.push(i)),
            this.updateAcquireItemList()
        },
        i.prototype.deCompose = function() {
            var e = this;
            if (this.arrSelect.length) {
                for (var t = [], i = [], n = 0, r = this.arrSelect; n < r.length; n++) {
                    var a = r[n];
                    CountermarkXMLInfo.isUniversalMark(a.markID) ? i.push(a) : t.push(a)
                }
                var o = i.map(function(e) {
                    return e.obtainTime
                });
                SocketConnection.sendByQueue(41445, [o.length].concat(o),
                function() {
                    e.hide();
                    for (var t = 0,
                    n = i; t < n.length; t++) {
                        var r = n[t];
                        CountermarkController.removeFromCache(r)
                    }
                })
            } else BubblerManager.getInstance().showText("未选择需要分解的刻印")
        },
        i
    } (PopView);
    e.MarkDecomposeConfirmPop = t,
    __reflect(t.prototype, "petBag.MarkDecomposeConfirmPop")
} (petBag || (petBag = {}));
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
petBag; !
function(e) {
    var t = function(t) {
        function i(e) {
            var i = t.call(this) || this;
            return i.curSelectNum = 0,
            i.MAX_SELECT_ITEM_NUM = 20,
            i.curPage = 1,
            i.maxPage = 1,
            i.allPageArr = [],
            i.curPageArr = [],
            i.MAX_PAGE_ITEM_NUM = 27,
            i.lastPosX = 0,
            i.skinName = "MarkDecomposePopSkin",
            i.markView = e,
            i.cacheAsBitmap = !0,
            i
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            this.init(),
            this.addEvent()
        },
        i.prototype.init = function() {
            var t = new eui.RadioButtonGroup;
            this.btn2.group = t,
            this.btn3.group = t,
            this.btn4.group = t,
            this.btn5.group = t,
            this.list.itemRenderer = e.MarkDecomposeItem,
            this.ac = new eui.ArrayCollection,
            this.list.dataProvider = this.ac,
            this.btn5.selected = !0,
            t.selectedValue = 5,
            this.onChangeTab(),
            this.arrSelect = []
        },
        i.prototype.addEvent = function() {
            var e = this;
            ImageButtonUtil.add(this.btnClose, this.hide, this),
            ImageButtonUtil.add(this.btnReset, this.reset, this),
            ImageButtonUtil.add(this.btnDecompose, this.decompose, this),
            ImageButtonUtil.add(this.btnLeft, this.onArrowBtnTap, this),
            ImageButtonUtil.add(this.btnRight, this.onArrowBtnTap, this),
            this.txtSearch.addEventListener(egret.Event.CHANGE, this.onChangeTab, this),
            this.btn2.group.addEventListener(egret.Event.CHANGE,
            function() {
                e.txtSearch.text = "",
                e.onChangeTab()
            },
            this),
            EventManager.addEventListener(i.EVENT_CLICK_MARK_TO_DECOMPOSE, this.onClickMark, this),
            this.grpContent.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this)
        },
        i.prototype.onTouchBegin = function(e) {
            this.grpContent.addEventListener(egret.TouchEvent.TOUCH_END, this.onEndDrag, this),
            this.lastPosX = e.stageX
        },
        i.prototype.onEndDrag = function(e) {
            this.grpContent.removeEventListener(egret.TouchEvent.TOUCH_END, this.onEndDrag, this),
            this.lastPosX - e.stageX > 60 ? this.rightPage() : this.lastPosX - e.stageX < -60 && this.leftPage()
        },
        i.prototype.onArrowBtnTap = function(e) {
            switch (e.target) {
            case this.btnLeft:
                this.leftPage();
                break;
            case this.btnRight:
                this.rightPage()
            }
        },
        i.prototype.leftPage = function() {
            this.curPage > 1 ? --this.curPage: 1 == this.curPage && (this.curPage = 1),
            this.updatePage()
        },
        i.prototype.rightPage = function() {
            this.curPage == this.maxPage && (this.curPage = this.maxPage - 1),
            ++this.curPage,
            this.updatePage()
        },
        i.prototype.onChangeTab = function() {
            var e = this;
            this.scroller.stopAnimation(),
            this.curIndex = this.btn2.group.selectedValue || 5;
            var t = CountermarkController._generalMap.getValues().concat(CountermarkController._universalMap.getValues());
            t = t.filter(function(t) {
                var i = CountermarkXMLInfo.getType(t.markID) == CountermarkType.MARK_IS_UNIVERSAL,
                n = Number(CountermarkXMLInfo.getMintmarkQuality(t.markID)) == e.curIndex,
                r = t.catchTime <= 0 && t.markID.toString().length < 7;
                return i && n && r
            });
            var i = this.txtSearch.text.trim();
            i.length > 0 && (t = t.filter(function(e) {
                return SearchUtil.isMatch(i, e.markName)
            })),
            this.curPage = 1,
            this.maxPage = Math.ceil(t.length / this.MAX_PAGE_ITEM_NUM),
            this.allPageArr = t,
            this.updatePage(),
            this.txtSelected.textFlow = [{
                text: "已选择数量：",
                style: {
                    textColor: 8757203
                }
            },
            {
                text: this.curSelectNum + "/" + this.MAX_SELECT_ITEM_NUM,
                style: {
                    textColor: 4187130
                }
            }]
        },
        i.prototype.updatePage = function() {
            this.curPageArr.splice(0);
            for (var e = this.MAX_PAGE_ITEM_NUM * (this.curPage - 1), t = 0; t < this.MAX_PAGE_ITEM_NUM && e < this.allPageArr.length; ++e, ++t) this.curPageArr.push(this.allPageArr[e]);
            this.ac.source = this.curPageArr;
            var i = this.curPage <= this.maxPage ? this.curPage: this.maxPage;
            this.txtPage.textFlow = [{
                text: "第",
                style: {
                    textColor: 8757203
                }
            },
            {
                text: i + "/" + this.maxPage,
                style: {
                    textColor: 4187130
                }
            },
            {
                text: "页",
                style: {
                    textColor: 8757203
                }
            }]
        },
        i.prototype.destroy = function() {
            for (var e = 0,
            i = this.arrSelect; e < i.length; e++) {
                var n = i[e];
                n.selected = !1
            }
            EventManager.removeAll(this),
            ImageButtonUtil.removeAll(this),
            t.prototype.destroy.call(this),
            this.markView.updatePetInfo()
        },
        i.prototype.onClickMark = function(e) {
            if (!this.isLock) {
                var t = e.data,
                i = t.data,
                n = this.arrSelect.indexOf(i); - 1 != n ? (t.setSelected(!1), this.arrSelect.splice(n, 1), --this.curSelectNum) : this.arrSelect.length >= this.MAX_SELECT_ITEM_NUM ? BubblerManager.getInstance().showText("一次最多只能分解" + this.MAX_SELECT_ITEM_NUM + "个刻印") : (t.setSelected(!0), this.arrSelect.push(i), ++this.curSelectNum),
                this.txtSelected.textFlow = [{
                    text: "已选择数量：",
                    style: {
                        textColor: 8757203
                    }
                },
                {
                    text: this.curSelectNum + "/" + this.MAX_SELECT_ITEM_NUM,
                    style: {
                        textColor: 4187130
                    }
                }]
            }
        },
        i.prototype.reset = function() {
            for (var e = 0,
            t = this.arrSelect; e < t.length; e++) {
                var i = t[e];
                i.selected = !1
            }
            this.ac.refresh(),
            this.arrSelect.splice(0),
            this.curSelectNum = 0,
            this.txtSelected.textFlow = [{
                text: "已选择数量：",
                style: {
                    textColor: 8757203
                }
            },
            {
                text: this.curSelectNum + "/" + this.MAX_SELECT_ITEM_NUM,
                style: {
                    textColor: 4187130
                }
            }]
        },
        i.prototype.decompose = function() {
            this.arrSelect.length ? (this.isLock = !0, PopViewManager.getInstance().openView(new e.MarkDecomposeConfirmPop(this.arrSelect.filter(Boolean), this)), this.arrSelect.splice(0), this.curSelectNum = 0) : BubblerManager.getInstance().showText("未选择需要分解的刻印")
        },
        i.EVENT_CLICK_MARK_TO_DECOMPOSE = "eventClickMarkToDecompose",
        i
    } (PopView);
    e.MarkDecomposePop = t,
    __reflect(t.prototype, "petBag.MarkDecomposePop")
} (petBag || (petBag = {}));
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
petBag; !
function(e) {
    var t = function(t) {
        function i(e) {
            var i = t.call(this) || this;
            return i.data = e,
            i.skinName = "MarkFilterPopSkin",
            i
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this),
            this.initDat(),
            this.addEvents()
        },
        i.prototype.initDat = function() {
            if (this.rb1Group = this.rb_all.group, this.rb1Group.selectedValue = this.rb_all.value, this.rb2Group = this.rb_mo.group, this.rb2Group.selectedValue = this.rb_mo.value, this.data) {
                for (var e = 0; 2 > e; e++) this["rb" + (e + 1) + "Group"].selectedValue = this.data[e];
                this.data = null
            }
        },
        i.prototype.addEvents = function() {
            var t = this;
            ImageButtonUtil.add(this.btnDefault, this.initDat, this),
            ImageButtonUtil.add(this.btnConfirm,
            function() {
                for (var i = [], n = 0; 2 > n; n++) {
                    var r = t["rb" + (n + 1) + "Group"].selectedValue;
                    i.push(r)
                }
                EventManager.dispatchEventWith(e.EventConst.MARK_VIEW_FILTER_MARK, !1, i),
                t.hide()
            },
            this)
        },
        i.prototype.destroy = function() {
            t.prototype.destroy.call(this),
            ImageButtonUtil.removeAll(this)
        },
        i
    } (PopView);
    e.MarkFilterPop = t,
    __reflect(t.prototype, "petBag.MarkFilterPop")
} (petBag || (petBag = {}));
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
petBag; !
function(e) {
    var t = function(e) {
        function t(t) {
            var i = e.call(this) || this;
            return i.skinName = "PetBagRecommendMarkPopSkin",
            i.petInfo = t,
            i.cacheAsBitmap = !0,
            i
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            ImageButtonUtil.add(this.btnClose, this.hide, this);
            for (var e = PetBook.PetBookXMLInfo.getRecMinMark(PetXMLInfo.getCharacterAttrParam(this.petInfo.id)), t = function(t) {
                var n = t < e.length;
                i["imgMark" + (t + 1)].source = n ? CountermarkXMLInfo.getIconURL(e[t]) : "",
                i["txtMark" + (t + 1) + "Name"].textFlow = n ? tipsPop.getCounterMaekNameHtml(e[t]) : null,
                ImageButtonUtil.add(i["imgMark" + (t + 1)],
                function() {
                    tipsPop.TipsPop.openCounterMarkPop({
                        ins: e[t]
                    })
                },
                i)
            },
            i = this, n = 0; 3 > n; n++) t(n)
        },
        t.prototype.destroy = function() {
            ImageButtonUtil.removeAll(this),
            e.prototype.destroy.call(this)
        },
        t
    } (PopView);
    e.RecommendMarkPop = t,
    __reflect(t.prototype, "petBag.RecommendMarkPop")
} (petBag || (petBag = {}));
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
    return new(i || (i = Promise))(function(r, a) {
        function o(e) {
            try {
                u(n.next(e))
            } catch(t) {
                a(t)
            }
        }
        function s(e) {
            try {
                u(n["throw"](e))
            } catch(t) {
                a(t)
            }
        }
        function u(e) {
            e.done ? r(e.value) : new i(function(t) {
                t(e.value)
            }).then(o, s)
        }
        u((n = n.apply(e, t || [])).next())
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
        for (; u;) try {
            if (r = 1, a && (o = a[2 & i[0] ? "return": i[0] ? "throw": "next"]) && !(o = o.call(a, i[1])).done) return o;
            switch (a = 0, o && (i = [0, o.value]), i[0]) {
            case 0:
            case 1:
                o = i;
                break;
            case 4:
                return u.label++,
                {
                    value: i[1],
                    done: !1
                };
            case 5:
                u.label++,
                a = i[1],
                i = [0];
                continue;
            case 7:
                i = u.ops.pop(),
                u.trys.pop();
                continue;
            default:
                if (o = u.trys, !(o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                    u = 0;
                    continue
                }
                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                    u.label = i[1];
                    break
                }
                if (6 === i[0] && u.label < o[1]) {
                    u.label = o[1],
                    o = i;
                    break
                }
                if (o && u.label < o[2]) {
                    u.label = o[2],
                    u.ops.push(i);
                    break
                }
                o[2] && u.ops.pop(),
                u.trys.pop();
                continue
            }
            i = t.call(e, u)
        } catch(n) {
            i = [6, n],
            a = 0
        } finally {
            r = o = 0
        }
        if (5 & i[0]) throw i[1];
        return {
            value: i[0] ? i[1] : void 0,
            done: !0
        }
    }
    var r, a, o, s, u = {
        label: 0,
        sent: function() {
            if (1 & o[0]) throw o[1];
            return o[1]
        },
        trys: [],
        ops: []
    };
    return s = {
        next: i(0),
        "throw": i(1),
        "return": i(2)
    },
    "function" == typeof Symbol && (s[Symbol.iterator] = function() {
        return this
    }),
    s
},
petBag; !
function(e) {
    var t = function(t) {
        function i(e, i) {
            void 0 === i && (i = 1);
            var n = t.call(this) || this;
            return n.arrItem = [1706926, 1724952],
            n.allItemArr = [1706927, 1706928, 1706924, 1706925, 1706920, 1706921, 1706927, 1706928, 1706924, 1706919, 1706918],
            n._pageIdx = 1,
            n._itemArr = [],
            n.lastSumExCnt = 0,
            n.lastCLockArr = [0, 0, 0],
            n.lastWLockArr = [0, 0, 0],
            n.skinName = "PetBagResistanceExchangePopSkin",
            n.petInfo = e,
            n._pageIdx = i,
            n
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            this.init(),
            this.addEvent()
        },
        i.prototype.init = function() {
            var t = this;
            this.updateItem();
            var i = new eui.RadioButtonGroup;
            this.btn1.group = i,
            this.btn2.group = i,
            this.setIndex(this._pageIdx),
            this.list.itemRenderer = e.SmallItem,
            this.arrayCollection = new eui.ArrayCollection,
            this.list.dataProvider = this.arrayCollection,
            this.list.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.onClickSkill, this),
            config.xml.load("ResistanceSpecifiedItem").then(function() {
                var i = config.xml.getRes("ResistanceSpecifiedItem").root.item;
                Array.isArray(i) || (i = [i]),
                t.allItemArr = [],
                t.allItemMap = new HashMap;
                for (var n = 0,
                r = i; n < r.length; n++) {
                    var a = r[n];
                    ItemManager.getNumByID(a.ID) > 0 && (t.allItemArr.push(a.ID), t.allItemMap.add(a.ID, a))
                }
                t._itemArr = [];
                for (var o = 0,
                s = t.allItemArr; o < s.length; o++) {
                    var u = s[o],
                    _ = {};
                    _.type = "item",
                    _.id = u,
                    _.rarity = ItemXMLInfo.getItemRarity(u),
                    t._itemArr.push(_)
                }
                t._itemArr.sort(e.SmallItem.compareRarity),
                t.arrayCollection.source = t._itemArr,
                t.noItemSign.visible = 0 == t._itemArr.length
            })
        },
        i.prototype.addEvent = function() {
            var t = this;
            ImageButtonUtil.add(this.btnClose, this.hide, this),
            ImageButtonUtil.add(this.btn1,
            function() {
                t.setIndex(1)
            },
            this, !1, !1),
            ImageButtonUtil.add(this.btn2,
            function() {
                t.setIndex(2)
            },
            this, !1, !1),
            ImageButtonUtil.add(this.btnExchange,
            function() {
                if (t.petInfo.resistanceinfo.green_gem > 0) return void Alert.show("请先将异常状态重置为初始状态后再进行更换，是否前往重置？",
                function() {
                    PopViewManager.getInstance().openView(new e.ResistanceStrengthenPop(t.petInfo, 2)),
                    t.hide()
                });
                for (var i = [1, 2, 4], n = [8, 16, 32], r = [~~t.btnLock0.selected, ~~t.btnLock1.selected, ~~t.btnLock2.selected], a = [~~t.btnLock3.selected, ~~t.btnLock4.selected, ~~t.btnLock5.selected], o = 0, s = 0; 3 > s; s++) o += r[s] * i[s] + a[s] * n[s];
                var u = t.sum(r),
                _ = t.sum(a),
                l = u + _;
                if (l > 5) return void BubblerManager.getInstance().showText("每个精灵在更换抗性时最多仅可保留5种异常抗性！");
                var h = 3 - u > 0 ? 3 - u + "种控制类异常状态": "",
                g = 3 - _ > 0 ? 3 - _ + "种弱化类异常状态": "",
                c = "更换异常状态抗性将重新随机" + h + ("" != h && "" != g ? "和": "") + g + "，是否更换？";
                Alert.show(c,
                function() {
                    return ItemManager.getNumByID(t.arrItem[1]) < l ? void BubblerManager.getInstance().showText("很抱歉，当前悲悯神石数量不足！") : ItemManager.getNumByID(t.arrItem[0]) <= 0 ? void BubblerManager.getInstance().showText("很抱歉，当前轮回神石数量不足！") : void SocketConnection.sendWithPromise(41450, [t.petInfo.catchTime, 1706926, o, 100, 100, 100, 100, 100, 100]).then(function() {
                        EventManager.dispatchEventWith("UpdateExchangeResistance")
                    })
                })
            },
            this),
            this.btnLock0.addEventListener(egret.TouchEvent.TOUCH_END, this.lockTip, this),
            this.btnLock1.addEventListener(egret.TouchEvent.TOUCH_END, this.lockTip, this),
            this.btnLock2.addEventListener(egret.TouchEvent.TOUCH_END, this.lockTip, this),
            this.btnLock3.addEventListener(egret.TouchEvent.TOUCH_END, this.lockTip, this),
            this.btnLock4.addEventListener(egret.TouchEvent.TOUCH_END, this.lockTip, this),
            this.btnLock5.addEventListener(egret.TouchEvent.TOUCH_END, this.lockTip, this),
            EventManager.addEventListener("UpdateExchangeResistance", this.updatePetInfo.bind(this), this)
        },
        i.prototype.lockTip = function(e) {
            return __awaiter(this, void 0, void 0,
            function() {
                var e, t, i, n;
                return __generator(this,
                function(r) {
                    switch (r.label) {
                    case 0:
                        return [4, wait(50)];
                    case 1:
                        if (r.sent(), e = [~~this.btnLock0.selected, ~~this.btnLock1.selected, ~~this.btnLock2.selected], t = [~~this.btnLock3.selected, ~~this.btnLock4.selected, ~~this.btnLock5.selected], i = this.sum(e) + this.sum(t), 6 == i) for (BubblerManager.getInstance().showText("精灵更换抗性时最多可锁定5钟异常状态抗性！"), n = 0; 3 > n; n++) 0 == this.lastCLockArr[n] && 1 == e[n] && (this["btnLock" + n].selected = !1, e[n] = 0),
                        0 == this.lastWLockArr[n] && 1 == t[n] && (this["btnLock" + (n + 3)].selected = !1, t[n] = 0);
                        else i > this.lastSumExCnt ? BubblerManager.getInstance().showText("已锁定该抗性，精灵抗性下次成功更换时消耗1个悲悯神石") : i < this.lastSumExCnt && BubblerManager.getInstance().showText("已取消锁定该抗性");
                        return this.lastSumExCnt = i,
                        this.lastCLockArr = e,
                        this.lastWLockArr = t,
                        [2]
                    }
                })
            })
        },
        i.prototype.destroy = function() {
            EventManager.removeAll(this),
            ImageButtonUtil.removeAll(this),
            this.btnLock0.removeEventListener(egret.TouchEvent.TOUCH_END, this.lockTip, this),
            this.btnLock1.removeEventListener(egret.TouchEvent.TOUCH_END, this.lockTip, this),
            this.btnLock2.removeEventListener(egret.TouchEvent.TOUCH_END, this.lockTip, this),
            this.btnLock3.removeEventListener(egret.TouchEvent.TOUCH_END, this.lockTip, this),
            this.btnLock4.removeEventListener(egret.TouchEvent.TOUCH_END, this.lockTip, this),
            this.btnLock5.removeEventListener(egret.TouchEvent.TOUCH_END, this.lockTip, this),
            t.prototype.destroy.call(this)
        },
        i.prototype.updatePetInfo = function() {
            var t = this;
            EventManager.addEventListener(e.EventConst.MAIN_PANEL_SELECT_PET,
            function(e) {
                t.petInfo = e.data,
                t.setIndex(1),
                t.arrayCollection.refresh(),
                t.updateItem()
            },
            this),
            EventManager.dispatchEvent(new egret.Event(e.EventConst.PET_INFO_UPDATE, !1, !1, this.petInfo))
        },
        i.prototype.updateItem = function() {
            this.groupItem.removeChildren();
            for (var t = function(t) {
                var n = new e.SmallItem;
                i.groupItem.addChild(n),
                n.setItemInfo(t,
                function() {
                    tipsPop.TipsPop.openItemPop({
                        id: t
                    })
                },
                !0)
            },
            i = this, n = 0, r = this.arrItem; n < r.length; n++) {
                var a = r[n];
                t(a)
            }
            if (this.arrayCollection) {
                this._itemArr = [];
                for (var o = 0,
                s = this.allItemArr; o < s.length; o++) {
                    var u = s[o];
                    if (ItemManager.getNumByID(u) > 0) {
                        var _ = {};
                        _.type = "item",
                        _.id = u,
                        this._itemArr.push(_)
                    }
                }
                this.arrayCollection.source = this._itemArr,
                this.noItemSign.visible = 0 == this._itemArr.length
            }
        },
        i.prototype.setIndex = function(e) {
            var t = e == this.curIndex;
            if (this.curIndex = e, this.group1.visible = 1 == e, this.group2.visible = 2 == e, this.btn1.selected = 1 == e, this.btn2.selected = 2 == e, 1 == this.curIndex) for (var i = 0; 3 > i; i++) this["imgIcon" + i].source = ClientConfig.getBattleEffectIcon(this.petInfo.resistanceinfo["ctl_" + (i + 1) + "_idx"]),
            this["imgIcon" + (i + 3)].source = ClientConfig.getBattleEffectIcon(this.petInfo.resistanceinfo["weak_" + (i + 1) + "_idx"]),
            this["txtName" + i].text = "免疫" + PetStatusEffectConfig.getName(0, this.petInfo.resistanceinfo["ctl_" + (i + 1) + "_idx"]) + "：",
            this["txtName" + (i + 3)].text = "免疫" + PetStatusEffectConfig.getName(0, this.petInfo.resistanceinfo["weak_" + (i + 1) + "_idx"]) + "：",
            this["txtNum" + i].text = ResistanceSysController.getResistanceByLevel(1, this.petInfo.resistanceinfo["ctl_" + (i + 1)]).present + this.petInfo.resistanceinfo["ctl_" + (i + 1) + "_adj"] + this.petInfo.resistanceinfo.resist_all + "%",
            this["txtNum" + (i + 3)].text = ResistanceSysController.getResistanceByLevel(1, this.petInfo.resistanceinfo["weak_" + (i + 1)]).present + this.petInfo.resistanceinfo["weak_" + (i + 1) + "_adj"] + this.petInfo.resistanceinfo.resist_all + "%",
            t || (this["btnLock" + i].selected = !1, this["btnLock" + (i + 3)].selected = !1)
        },
        i.prototype.onClickSkill = function(e) {
            tipsPop.TipsPop.openItemPop({
                type: 1,
                useItemFun: this.useItem,
                id: e.item.id,
                caller: this
            })
        },
        i.prototype.useItem = function(t) {
            var i = this;
            if (this.petInfo.resistanceinfo.green_gem > 0) return void Alert.show("请先将异常状态重置为初始状态后再进行更换，是否前往重置？",
            function() {
                PopViewManager.getInstance().openView(new e.ResistanceStrengthenPop(i.petInfo, 2)),
                i.hide()
            });
            if (ItemManager.getNumByID(t) <= 0) return void BubblerManager.getInstance().showText("道具数量不足！");
            var n = this.allItemMap.getValue(t);
            0 == n.ExchangeCtrlCnt && " " == n.ExchangeCtrlSp && 0 == n.TargetCtrlCnt && " " == n.TargetCtrlSp && 0 == n.ExchangeWeakCnt && " " == n.ExchangeWeakSp && 0 == n.TargetWeakCnt && " " == n.TargetWeakSp ? Alert.show("你确定要对你的" + this.petInfo.name + "使用" + ItemXMLInfo.getName(t) + "吗？",
            function() {
                SocketConnection.sendWithPromise(41450, [i.petInfo.catchTime, t, 0, 100, 100, 100, 100, 100, 100]).then(function() {
                    EventManager.dispatchEventWith("UpdateExchangeResistance")
                })
            }) : PopViewManager.getInstance().openView(new e.ResistanceSettingPop(this.petInfo, n))
        },
        i.prototype.sum = function(e) {
            for (var t = 0,
            i = 0,
            n = e; i < n.length; i++) {
                var r = n[i];
                r > 0 && t++
            }
            return t
        },
        i
    } (PopView);
    e.ResistanceExchangePop = t,
    __reflect(t.prototype, "petBag.ResistanceExchangePop")
} (petBag || (petBag = {}));
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
    return new(i || (i = Promise))(function(r, a) {
        function o(e) {
            try {
                u(n.next(e))
            } catch(t) {
                a(t)
            }
        }
        function s(e) {
            try {
                u(n["throw"](e))
            } catch(t) {
                a(t)
            }
        }
        function u(e) {
            e.done ? r(e.value) : new i(function(t) {
                t(e.value)
            }).then(o, s)
        }
        u((n = n.apply(e, t || [])).next())
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
        for (; u;) try {
            if (r = 1, a && (o = a[2 & i[0] ? "return": i[0] ? "throw": "next"]) && !(o = o.call(a, i[1])).done) return o;
            switch (a = 0, o && (i = [0, o.value]), i[0]) {
            case 0:
            case 1:
                o = i;
                break;
            case 4:
                return u.label++,
                {
                    value: i[1],
                    done: !1
                };
            case 5:
                u.label++,
                a = i[1],
                i = [0];
                continue;
            case 7:
                i = u.ops.pop(),
                u.trys.pop();
                continue;
            default:
                if (o = u.trys, !(o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                    u = 0;
                    continue
                }
                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                    u.label = i[1];
                    break
                }
                if (6 === i[0] && u.label < o[1]) {
                    u.label = o[1],
                    o = i;
                    break
                }
                if (o && u.label < o[2]) {
                    u.label = o[2],
                    u.ops.push(i);
                    break
                }
                o[2] && u.ops.pop(),
                u.trys.pop();
                continue
            }
            i = t.call(e, u)
        } catch(n) {
            i = [6, n],
            a = 0
        } finally {
            r = o = 0
        }
        if (5 & i[0]) throw i[1];
        return {
            value: i[0] ? i[1] : void 0,
            done: !0
        }
    }
    var r, a, o, s, u = {
        label: 0,
        sent: function() {
            if (1 & o[0]) throw o[1];
            return o[1]
        },
        trys: [],
        ops: []
    };
    return s = {
        next: i(0),
        "throw": i(1),
        "return": i(2)
    },
    "function" == typeof Symbol && (s[Symbol.iterator] = function() {
        return this
    }),
    s
},
petBag; !
function(e) {
    var t = function(t) {
        function i(e, i) {
            var n = t.call(this) || this;
            return n.cArr = [0, 6, 7, 8, 9, 15, 19, 22, 23, 27],
            n.wArr = [1, 2, 5, 13, 16, 20, 28, 29, 30, 4, 10, 11, 31, 32],
            n.cOriginSelect = [0, 0, 0],
            n.wOriginSelect = [0, 0, 0],
            n.cMcSelect = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            n.wMcSelect = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            n.skinName = "PetBagResistanceSettingPopSkin",
            n.petInfo = e,
            n.itemData = i,
            n
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            this.init(),
            this.addEvent()
        },
        i.prototype.init = function() {
            this.infoTxt.text = "请在控制类异常和弱化类异常状态中分别选择" + this.itemData.TargetCtrlCnt + "个进行指定更换";
            var t = this.cArr,
            i = this.wArr;
            this.ctrlList.itemRenderer = e.ResistanceSelectItem,
            this.ctrlArray = new eui.ArrayCollection,
            this.ctrlList.dataProvider = this.ctrlArray;
            for (var n = [], r = this.itemData.ExchangeCtrlCnt, a = 1; 3 >= a; a++) {
                var o = this.petInfo.resistanceinfo["ctl_" + a + "_idx"];
                n.push([ClientConfig.getBattleEffectIcon(o), PetStatusEffectConfig.getName(0, o), r > 0]),
                r--
            }
            this.ctrlArray.source = n,
            this.ctrlListAll.itemRenderer = e.ResistanceSmallSelectItem,
            this.ctrlAllArray = new eui.ArrayCollection,
            this.ctrlListAll.dataProvider = this.ctrlAllArray;
            for (var s = [], u = 0, _ = t; u < _.length; u++) {
                var l = _[u];
                s.push([ClientConfig.getBattleEffectIcon(l), PetStatusEffectConfig.getName(0, l), !1])
            }
            this.ctrlAllArray.source = s,
            this.weakList.itemRenderer = e.ResistanceSelectItem,
            this.weakArray = new eui.ArrayCollection,
            this.weakList.dataProvider = this.weakArray;
            for (var h = [], g = this.itemData.ExchangeWeakCnt, a = 1; 3 >= a; a++) {
                var c = this.petInfo.resistanceinfo["weak_" + a + "_idx"];
                h.push([ClientConfig.getBattleEffectIcon(c), PetStatusEffectConfig.getName(0, c), g > 0]),
                g--
            }
            this.weakArray.source = h,
            this.weakListAll.itemRenderer = e.ResistanceSmallSelectItem,
            this.weakAllArray = new eui.ArrayCollection,
            this.weakListAll.dataProvider = this.weakAllArray;
            for (var p = [], m = 0, f = i; m < f.length; m++) {
                var l = f[m];
                p.push([ClientConfig.getBattleEffectIcon(l), PetStatusEffectConfig.getName(0, l), !1])
            }
            this.weakAllArray.source = p,
            this.onClickSkill(null),
            this.ctrlList.addEventListener(egret.TouchEvent.TOUCH_END, this.onClickSkill, this),
            this.weakList.addEventListener(egret.TouchEvent.TOUCH_END, this.onClickSkill, this),
            this.ctrlListAll.addEventListener(egret.TouchEvent.TOUCH_END, this.onClickSkill, this),
            this.weakListAll.addEventListener(egret.TouchEvent.TOUCH_END, this.onClickSkill, this)
        },
        i.prototype.addEvent = function() {
            var e = this;
            ImageButtonUtil.add(this.btnClose, this.hide, this),
            ImageButtonUtil.add(this.btnEnsure,
            function() {
                return e.sum(e.cOriginSelect) != e.itemData.ExchangeCtrlCnt || e.sum(e.cMcSelect) != e.itemData.TargetCtrlCnt ? void BubblerManager.getInstance().showText("请在控制类异常状态中选择" + e.itemData.ExchangeCtrlCnt + "个！") : e.sum(e.wOriginSelect) != e.itemData.ExchangeWeakCnt || e.sum(e.wMcSelect) != e.itemData.TargetWeakCnt ? void BubblerManager.getInstance().showText("请在弱化类异常状态中选择" + e.itemData.ExchangeWeakCnt + "个！") : e.checkSelectRepeat() ? void BubblerManager.getInstance().showText("很抱歉，指定的异常状态无法与当前异常状态抗性相同！") : void Alert.show("是否为" + e.petInfo.name + "指定为异常抗性：" + e.getSelectTargetNames() + "？",
                function() {
                    var t = e.getExchangeArg();
                    SocketConnection.sendWithPromise(41450, [e.petInfo.catchTime, e.itemData.ID, 0].concat(t)).then(function() {
                        EventManager.dispatchEventWith("UpdateExchangeResistance"),
                        e.hide()
                    })
                })
            },
            this)
        },
        i.prototype.destroy = function() {
            this.ctrlList.removeEventListener(egret.TouchEvent.TOUCH_END, this.onClickSkill, this),
            this.weakList.removeEventListener(egret.TouchEvent.TOUCH_END, this.onClickSkill, this),
            this.ctrlListAll.removeEventListener(egret.TouchEvent.TOUCH_END, this.onClickSkill, this),
            this.weakListAll.removeEventListener(egret.TouchEvent.TOUCH_END, this.onClickSkill, this),
            ImageButtonUtil.removeAll(this),
            t.prototype.destroy.call(this)
        },
        i.prototype.onClickSkill = function(e) {
            return __awaiter(this, void 0, void 0,
            function() {
                var e, t, i, t, n, t, r, t, i, t, a, t, o, t, i, s, t, t, u, t, i, _, t, t;
                return __generator(this,
                function(l) {
                    switch (l.label) {
                    case 0:
                        return [4, wait(50)];
                    case 1:
                        l.sent(),
                        e = [];
                        for (t in this.ctrlList.$children) i = ~~this.ctrlList.$children[t].select.selected,
                        e.push(i);
                        if (3 == this.itemData.ExchangeCtrlCnt) for (t in e) this.ctrlList.$children[t].select.selected = !0,
                        this.cOriginSelect[t] = 1;
                        else {
                            n = this.sum(e) - this.itemData.ExchangeCtrlCnt;
                            for (t in e) 1 == e[t] && 1 == this.cOriginSelect[t] && n > 0 && (this.ctrlList.$children[t].select.selected = !1, e[t] = 0, n--),
                            this.cOriginSelect[t] = e[t]
                        }
                        r = [];
                        for (t in this.weakList.$children) i = ~~this.weakList.$children[t].select.selected,
                        r.push(i);
                        if (3 == this.itemData.ExchangeWeakCnt) for (t in r) this.weakList.$children[t].select.selected = !0,
                        this.wOriginSelect[t] = 1;
                        else {
                            a = this.sum(r) - this.itemData.ExchangeWeakCnt;
                            for (t in r) 1 == r[t] && 1 == this.wOriginSelect[t] && a > 0 && (this.weakList.$children[t].select.selected = !1, r[t] = 0, a--),
                            this.wOriginSelect[t] = r[t]
                        }
                        o = [];
                        for (t in this.ctrlListAll.$children) i = ~~this.ctrlListAll.$children[t].select.selected,
                        o.push(i);
                        if (s = this.sum(o) - this.itemData.TargetCtrlCnt, s > 0) {
                            BubblerManager.getInstance().showText("很抱歉，最多选择" + this.itemData.TargetCtrlCnt + "个控制类异常抗性进行指定！"),
                            this.cMcSelect = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                            for (t in this.ctrlListAll.$children) this.ctrlListAll.$children[t].select.selected = !1
                        } else for (t in this.ctrlListAll.$children) this.cMcSelect[t] = ~~this.ctrlListAll.$children[t].select.selected;
                        u = [];
                        for (t in this.weakListAll.$children) i = ~~this.weakListAll.$children[t].select.selected,
                        u.push(i);
                        if (_ = this.sum(u) - this.itemData.TargetWeakCnt, _ > 0) {
                            BubblerManager.getInstance().showText("很抱歉，最多选择" + this.itemData.TargetWeakCnt + "个弱化类异常抗性进行指定！"),
                            this.wMcSelect = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                            for (t in this.weakListAll.$children) this.weakListAll.$children[t].select.selected = !1
                        } else for (t in this.weakListAll.$children) this.wMcSelect[t] = ~~this.weakListAll.$children[t].select.selected;
                        return [2]
                    }
                })
            })
        },
        i.prototype.checkSelectRepeat = function() {
            if (300917 == this.itemData.ID) return ! 1;
            for (var e = this.cArr,
            t = this.wArr,
            i = [this.petInfo.resistanceinfo.ctl_1_idx, this.petInfo.resistanceinfo.ctl_2_idx, this.petInfo.resistanceinfo.ctl_3_idx], n = [this.petInfo.resistanceinfo.weak_1_idx, this.petInfo.resistanceinfo.weak_2_idx, this.petInfo.resistanceinfo.weak_3_idx], r = 0; r < this.cMcSelect.length; r++) if (this.cMcSelect[r] > 0) {
                var a = e[r];
                if (this.cOriginSelect[0] > 0 && i[0] == a) continue;
                if (this.cOriginSelect[1] > 0 && i[1] == a) continue;
                if (this.cOriginSelect[2] > 0 && i[2] == a) continue;
                if (i.indexOf(a) >= 0) return ! 0
            }
            for (var r = 0; r < this.wMcSelect.length; r++) if (this.wMcSelect[r] > 0) {
                var a = t[r];
                if (this.wOriginSelect[0] > 0 && n[0] == a) continue;
                if (this.wOriginSelect[1] > 0 && n[1] == a) continue;
                if (this.wOriginSelect[2] > 0 && n[2] == a) continue;
                if (n.indexOf(a) >= 0) return ! 0
            }
            return ! 1
        },
        i.prototype.sum = function(e) {
            for (var t = 0,
            i = 0,
            n = e; i < n.length; i++) {
                var r = n[i];
                r > 0 && t++
            }
            return t
        },
        i.prototype.getSelectTargetNames = function() {
            var e = this.cArr,
            t = this.wArr,
            i = "";
            this.selectIDs = [];
            for (var n = 0; n < this.cMcSelect.length; n++) this.cMcSelect[n] > 0 && (this.selectIDs.push(e[n]), i += PetStatusEffectConfig.getName(0, e[n]) + "、");
            for (var n = 0; n < this.wMcSelect.length; n++) this.wMcSelect[n] > 0 && (this.selectIDs.push(t[n]), i += PetStatusEffectConfig.getName(0, t[n]) + "、");
            return i = i.slice(0, i.length - 1)
        },
        i.prototype.getExchangeArg = function() {
            for (var e = [100, 100, 100, 100, 100, 100], t = 0; t < this.cOriginSelect.length; t++) this.cOriginSelect[t] > 0 && (e[t] = this.selectIDs.shift());
            for (var t = 0; t < this.wOriginSelect.length; t++) this.wOriginSelect[t] > 0 && (e[t + 3] = this.selectIDs.shift());
            return e
        },
        i
    } (PopView);
    e.ResistanceSettingPop = t,
    __reflect(t.prototype, "petBag.ResistanceSettingPop")
} (petBag || (petBag = {}));
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
petBag; !
function(e) {
    var t = function(t) {
        function i(e, i) {
            void 0 === i && (i = 1);
            var n = t.call(this) || this;
            return n.arrItem = [1706927, 1706928, 1706924, 1706925],
            n.arrLevelUp = [],
            n._pageIdx = 1,
            n.skinName = "PetBagResistanceStrengthenPopSkin",
            n.petInfo = e,
            n._pageIdx = i,
            n
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            this.init(),
            this.addEvent()
        },
        i.prototype.init = function() {
            this.updateItem();
            var e = new eui.RadioButtonGroup;
            this.btn1.group = e,
            this.btn2.group = e;
            for (var t = ClientConfig.getItemIcon(1706927), i = 1; 3 >= i; i++) this["imgIcon1" + i].source = "pet_detailed_information_icon_sh_" + (i - 1) + "_png",
            this["txtName1" + i].text = ["致命", "固定", "百分比"][i - 1] + "伤害减免：",
            this["imgOneIcon1" + i].source = t,
            this["imgMaxIcon1" + i].source = t;
            this.arrLevelUp = [],
            t = ClientConfig.getItemIcon(1706928);
            for (var i = 0; 6 > i; i++) this["imgOneItem" + i].source = t,
            this["imgMaxItem" + i].source = t;
            this.setIndex(this._pageIdx)
        },
        i.prototype.updateItem = function() {
            this.groupItem.removeChildren();
            for (var t = function(t) {
                var n = new e.SmallItem;
                i.groupItem.addChild(n),
                n.setItemInfo(t,
                function() {
                    tipsPop.TipsPop.openItemPop({
                        id: t
                    })
                },
                !0)
            },
            i = this, n = 0, r = this.arrItem; n < r.length; n++) {
                var a = r[n];
                t(a)
            }
        },
        i.prototype.addEvent = function() {
            var e = this;
            ImageButtonUtil.add(this.btnClose, this.hide, this),
            ImageButtonUtil.add(this.btn1,
            function() {
                e.setIndex(1)
            },
            this, !1, !1),
            ImageButtonUtil.add(this.btn2,
            function() {
                e.setIndex(2)
            },
            this, !1, !1),
            ImageButtonUtil.add(this.btnReset1,
            function() {
                for (var t = 0,
                i = 1; 3 >= i; i++) {
                    var n = ["cirt", "regular", "precent"],
                    r = n[i - 1];
                    t += e.petInfo.resistanceinfo[r]
                }
                return 0 == t ? void BubblerManager.getInstance().showText("这只精灵伤害抗性已经是初始值了，无需重置！") : ItemManager.getNumByID(1706924) < 1 ? void BubblerManager.getInstance().showText("你的护佑神石不足，无法重置！") : void Alert.show("重置后将返还已注入红宝石的80%，并将所有伤害抗性返回初始值，是否确认重置？",
                function() {
                    SocketConnection.sendByQueue(CommandID.RESISTANCE_HERT_RESET, [e.petInfo.catchTime, 1, 0],
                    function() {
                        e.updatePetInfo()
                    })
                })
            },
            this),
            ImageButtonUtil.add(this.btnReset2,
            function() {
                for (var t = 0,
                i = 0; 6 > i; i++) t += e.petInfo.resistanceinfo[3 > i ? "ctl_" + (i + 1) : "weak_" + (i - 2)];
                return 0 == t ? void BubblerManager.getInstance().showText("这只精灵异常抗性已经是初始值了，无需重置！") : ItemManager.getNumByID(1706925) < 1 ? void BubblerManager.getInstance().showText("你的宽恕神石不足，无法重置！") : void Alert.show("重置后将返还已注入绿宝石的80%，并将所有异常状态抗性返回初始值，是否确认重置？",
                function() {
                    SocketConnection.sendByQueue(CommandID.RESISTANCE_EFF_RESET, [e.petInfo.catchTime, 1, 1, 0],
                    function() {
                        e.updatePetInfo()
                    })
                })
            },
            this),
            ImageButtonUtil.add(this.btnChange2,
            function() {
                for (var t = 0,
                i = 0; 6 > i; i++) t += e.petInfo.resistanceinfo[3 > i ? "ctl_" + (i + 1) : "weak_" + (i - 2)];
                return t > 0 ? void BubblerManager.getInstance().showText("请先重置异常状态抗性之后再进行更换！") : ItemManager.getNumByID(1706926) < 1 ? void BubblerManager.getInstance().showText("你的轮回神石不足，无法重置！") : void Alert.show("更换异常状态抗性将重新随机三种控制类异常状态抗性和三种弱化类异常状态抗性，是否立即更换？",
                function() {
                    SocketConnection.sendByQueue(CommandID.RESISTANCE_EXCHANGE, [e.petInfo.catchTime, 1, 0],
                    function() {
                        e.updatePetInfo()
                    })
                })
            },
            this);
            for (var t = function(t) {
                ImageButtonUtil.add(i["btnOne1" + t],
                function() {
                    var i = +e["txtOne1" + t].text.substring(1);
                    if (0 == i) BubblerManager.getInstance().showText("该抗性已强化至上限，无法继续强化了");
                    else if (ItemManager.getNumByID(1706927) < i) BubblerManager.getInstance().showText("你的红宝石不足，无法强化");
                    else {
                        var n = e.getCmdArgs(1, 0, t - 1);
                        SocketConnection.sendByQueue(CommandID.RESISTANCE_UPGRADE_MORE, [e.petInfo.catchTime, 1, n[0], n[1]],
                        function() {
                            BubblerManager.getInstance().showText("本次注入了" + i + "个红宝石，" + ["致命", "固定", "百分比"][t - 1] + "伤害减免抗性得到了提升！"),
                            e.updatePetInfo()
                        })
                    }
                },
                i),
                ImageButtonUtil.add(i["btnMax1" + t],
                function() {
                    var i = +e["txtMax1" + t].text.substring(1);
                    if (0 == i) BubblerManager.getInstance().showText("该抗性已强化至上限，无法继续强化了");
                    else if (ItemManager.getNumByID(1706927) < i) BubblerManager.getInstance().showText("你的红宝石不足，无法强化");
                    else {
                        var n = ["cirt", "regular", "precent"],
                        r = n[t - 1],
                        a = e.petInfo.resistanceinfo[r],
                        o = e.getCmdArgs(30 - a, 0, t - 1);
                        SocketConnection.sendByQueue(CommandID.RESISTANCE_UPGRADE_MORE, [e.petInfo.catchTime, 1, o[0], o[1]],
                        function() {
                            BubblerManager.getInstance().showText("本次注入了" + i + "个红宝石，" + ["致命", "固定", "百分比"][t - 1] + "伤害减免抗性得到了提升！"),
                            e.updatePetInfo()
                        })
                    }
                },
                i)
            },
            i = this, n = 1; 3 >= n; n++) t(n);
            for (var r = function(t) {
                ImageButtonUtil.add(a["btnOne" + t],
                function() {
                    var i = +e["txtOne" + t].text.substring(1);
                    if (0 == i) BubblerManager.getInstance().showText("该抗性已强化至上限，无法继续强化了");
                    else if (ItemManager.getNumByID(1706928) < i) BubblerManager.getInstance().showText("你的绿宝石不足，无法强化");
                    else if (e.petInfo.resistanceinfo.green_gem + i > 200) BubblerManager.getInstance().showText("最多可以注入200个绿色宝石,当前已经注入" + e.petInfo.resistanceinfo.green_gem + "个");
                    else {
                        var n = e.getCmdArgs(1, 1, t);
                        SocketConnection.sendByQueue(CommandID.RESISTANCE_UPGRADE_MORE, [e.petInfo.catchTime, 2, n[0], n[1]],
                        function() {
                            BubblerManager.getInstance().showText("本次注入了" + i + "个绿宝石，" + PetStatusEffectConfig.getName(0, e.petInfo.resistanceinfo[3 > t ? "ctl_" + (t + 1) + "_idx": "weak_" + (t - 2) + "_idx"]) + "抗性得到了提升，之后还可以注入" + (200 - e.petInfo.resistanceinfo.green_gem - i) + "个绿宝石"),
                            e.updatePetInfo()
                        })
                    }
                },
                a),
                ImageButtonUtil.add(a["btnMax" + t],
                function() {
                    var i = +e["txtMax" + t].text.substring(1);
                    if (0 == i) BubblerManager.getInstance().showText("该抗性已强化至上限，无法继续强化了");
                    else if (ItemManager.getNumByID(1706928) < i) BubblerManager.getInstance().showText("你的绿宝石不足，无法强化");
                    else if (e.petInfo.resistanceinfo.green_gem + i > 200) BubblerManager.getInstance().showText("最多可以注入200个绿色宝石,当前已经注入" + e.petInfo.resistanceinfo.green_gem + "个");
                    else {
                        var n = (e.petInfo.resistanceinfo[3 > t ? "ctl_" + (t + 1) : "weak_" + (t - 2)], e.getCmdArgs(e.arrLevelUp[t], 1, t));
                        SocketConnection.sendByQueue(CommandID.RESISTANCE_UPGRADE_MORE, [e.petInfo.catchTime, 2, n[0], n[1]],
                        function() {
                            BubblerManager.getInstance().showText("本次注入了" + i + "个绿宝石，" + PetStatusEffectConfig.getName(0, e.petInfo.resistanceinfo[3 > t ? "ctl_" + (t + 1) + "_idx": "weak_" + (t - 2) + "_idx"]) + "抗性得到了提升，之后还可以注入" + (200 - e.petInfo.resistanceinfo.green_gem - i) + "个绿宝石"),
                            e.updatePetInfo()
                        })
                    }
                },
                a)
            },
            a = this, n = 0; 6 > n; n++) r(n)
        },
        i.prototype.setIndex = function(e) {
            if (this.curIndex = e, this.group1.visible = 1 == e, this.group2.visible = 2 == e, this.btn1.selected = 1 == e, this.btn2.selected = 2 == e, 1 == e) for (var t = ["cirt", "regular", "precent"], i = 1; 3 >= i; i++) {
                var n = t[i - 1];
                this["txtNum1" + i].text = ResistanceSysController.getResistanceByLevel(0, this.petInfo.resistanceinfo[n]).present + this.petInfo.resistanceinfo[n + "_adj"] + "%";
                var r = this.petInfo.resistanceinfo[n],
                a = ResistanceSysController.getResistanceByLevel(0, r),
                o = !ResistanceSysController.getResistanceByLevel(0, r + 1);
                this["txtOne1" + i].text = "x" + (o ? "0": a.need);
                for (var s = 0,
                u = r; 30 > u; u++) {
                    var _ = ResistanceSysController.getResistanceByLevel(0, u);
                    s += ~~_.need
                }
                this["txtMax1" + i].text = "x" + (o ? "0": s)
            } else if (2 == e) for (var l = 0; 3 > l; l++) {
                this.txtProgress.text = "注入绿宝石" + this.petInfo.resistanceinfo.green_gem + "/200",
                this["imgIcon" + l].source = ClientConfig.getBattleEffectIcon(this.petInfo.resistanceinfo["ctl_" + (l + 1) + "_idx"]),
                this["imgIcon" + (l + 3)].source = ClientConfig.getBattleEffectIcon(this.petInfo.resistanceinfo["weak_" + (l + 1) + "_idx"]),
                this["txtName" + l].text = "免疫" + PetStatusEffectConfig.getName(0, this.petInfo.resistanceinfo["ctl_" + (l + 1) + "_idx"]) + "：",
                this["txtName" + (l + 3)].text = "免疫" + PetStatusEffectConfig.getName(0, this.petInfo.resistanceinfo["weak_" + (l + 1) + "_idx"]) + "：",
                this["txtNum" + l].text = ResistanceSysController.getResistanceByLevel(1, this.petInfo.resistanceinfo["ctl_" + (l + 1)]).present + this.petInfo.resistanceinfo["ctl_" + (l + 1) + "_adj"] + this.petInfo.resistanceinfo.resist_all + "%",
                this["txtNum" + (l + 3)].text = ResistanceSysController.getResistanceByLevel(1, this.petInfo.resistanceinfo["weak_" + (l + 1)]).present + this.petInfo.resistanceinfo["weak_" + (l + 1) + "_adj"] + this.petInfo.resistanceinfo.resist_all + "%";
                var r = this.petInfo.resistanceinfo["ctl_" + (l + 1)],
                a = ResistanceSysController.getResistanceByLevel(1, r),
                o = !ResistanceSysController.getResistanceByLevel(1, r + 1);
                this["txtOne" + l].text = "x" + (o ? "0": a.need),
                this["txtAdd" + l].text = "+" + (r >= 15 ? 2 : 1) + "%";
                var s = 0;
                this.arrLevelUp[l] = 0;
                for (var h = r; 30 > h; h++) {
                    var _ = ResistanceSysController.getResistanceByLevel(1, h);
                    if (s += ~~_.need, this.arrLevelUp[l]++, s + this.petInfo.resistanceinfo.green_gem > 200) {
                        s -= ~~_.need,
                        this.arrLevelUp[l]--;
                        break
                    }
                }
                this["txtMax" + l].text = "x" + (o ? "0": s),
                r = this.petInfo.resistanceinfo["weak_" + (l + 1)],
                a = ResistanceSysController.getResistanceByLevel(1, r),
                o = !ResistanceSysController.getResistanceByLevel(1, r + 1),
                this["txtOne" + (l + 3)].text = "x" + (o ? "0": a.need),
                this["txtAdd" + (l + 3)].text = "+" + (r >= 15 ? 2 : 1) + "%",
                s = 0,
                this.arrLevelUp[l + 3] = 0;
                for (var h = r; 30 > h; h++) {
                    var _ = ResistanceSysController.getResistanceByLevel(1, h);
                    if (s += ~~_.need, this.arrLevelUp[l + 3]++, s + this.petInfo.resistanceinfo.green_gem > 200) {
                        s -= ~~_.need,
                        this.arrLevelUp[l + 3]--;
                        break
                    }
                }
                this["txtMax" + (l + 3)].text = "x" + (o ? "0": s)
            }
        },
        i.prototype.getCmdArgs = function(e, t, i) {
            var n = [0, 0, 0],
            r = [0, 0, 0];
            0 === t ? n[i] = e: 3 > i ? n[i] = e: r[i - 3] = e;
            var a = [0, 0];
            return a[0] = n[0] + (n[1] << 8) + (n[2] << 16),
            a[1] = r[0] + (r[1] << 8) + (r[2] << 16),
            a
        },
        i.prototype.updatePetInfo = function() {
            var t = this;
            EventManager.addEventListener(e.EventConst.MAIN_PANEL_SELECT_PET,
            function(e) {
                t.petInfo = e.data,
                t.setIndex(t.curIndex),
                t.updateItem()
            },
            this),
            EventManager.dispatchEvent(new egret.Event(e.EventConst.PET_INFO_UPDATE, !1, !1, this.petInfo))
        },
        i
    } (PopView);
    e.ResistanceStrengthenPop = t,
    __reflect(t.prototype, "petBag.ResistanceStrengthenPop")
} (petBag || (petBag = {}));
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
petBag; !
function(e) {
    var t = function(e) {
        function t(t) {
            var i = e.call(this) || this;
            return i.skinName = "PetBagSEffectPreviewPopSkin",
            i.effectInfo = t,
            i
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            this.cacheAsBitmap = !0,
            ImageButtonUtil.add(this.btnClose, this.hide, this);
            var e = PetEffectXMLInfo.getEffect(this.effectInfo.effectID, this.effectInfo.args);
            this.txtCurSEffect.text = "当前特性：" + e + "  ";
            for (var t = PetEffectXMLInfo.getStarLevel(this.effectInfo.effectID, this.effectInfo.args), i = 1; 5 >= i; i++) {
                this["imgStar" + i].source = "pet_bag_s_effect_preview_pop_imgstar" + (t >= i ? 1 : 5) + "_png";
                var n = PetEffectXMLInfo.getIntros(e).getValue(i);
                this["txt" + i].text = n || ""
            }
        },
        t.prototype.destroy = function() {
            e.prototype.destroy.call(this),
            ImageButtonUtil.removeAll(this)
        },
        t
    } (PopView);
    e.SEffectPreviewPop = t,
    __reflect(t.prototype, "petBag.SEffectPreviewPop")
} (petBag || (petBag = {}));
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
petBag; !
function(e) {
    var t = function(t) {
        function i(e, i, n) {
            var r = t.call(this) || this;
            return r.skinName = "PetBagSkillStoneChangePopSkin",
            r.petInfo = e,
            r.stoneId = i,
            r.type = n,
            r
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            this.init(),
            this.addEvent()
        },
        i.prototype.init = function() {
            this.list.itemRenderer = e.SkillItem,
            this.list.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.onClickSkill, this);
            for (var t = this.petInfo.skillArray,
            i = 0,
            n = t; i < n.length; i++) {
                var r = n[i];
                delete r.canChange,
                delete r.waitChange
            }
            this.list.dataProvider = new eui.ArrayCollection(t)
        },
        i.prototype.addEvent = function() {
            ImageButtonUtil.add(this.btnClose, this.hide, this)
        },
        i.prototype.onClickSkill = function(t) {
            var i = this,
            n = t.item.id;
            Alert.show("确认替换吗？",
            function() {
                SocketConnection.sendByQueue(CommandID.SKILL_STONE_USE_ITEM, [i.petInfo.catchTime, i.stoneId, n, i.type],
                function() {
                    EventManager.dispatchEvent(new egret.Event(e.EventConst.PET_INFO_UPDATE, !1, !1, i.petInfo)),
                    i.hide()
                })
            })
        },
        i
    } (PopView);
    e.SkillStoneChangePop = t,
    __reflect(t.prototype, "petBag.SkillStoneChangePop")
} (petBag || (petBag = {}));
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
petBag; !
function(e) {
    var t = function(t) {
        function i(e, i) {
            var n = t.call(this) || this;
            return n.skinName = "PetBagChooseStonePopSkin",
            n.petInfo = e,
            n.stoneId = i,
            n
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            var e = this;
            ImageButtonUtil.add(this.btnAttack,
            function() {
                e.chooseType(1)
            },
            this),
            ImageButtonUtil.add(this.btnSAttack,
            function() {
                e.chooseType(2)
            },
            this)
        },
        i.prototype.chooseType = function(t) {
            for (var i = this,
            n = 0,
            r = this.petInfo.skillArray; n < r.length; n++) {
                var a = r[n];
                if (a.id > 1e5) return void Alert.show("你的精灵已经拥有了一块技能石，每个精灵最多只能拥有一块技能石，替换技能石后，原有的技能石将被摧毁，确认要替换吗？",
                function() {
                    SocketConnection.sendByQueue(CommandID.SKILL_STONE_USE_ITEM, [i.petInfo.catchTime, i.stoneId, 0, t],
                    function() {
                        EventManager.dispatchEvent(new egret.Event(e.EventConst.PET_INFO_UPDATE, !1, !1, i.petInfo)),
                        i.hide()
                    })
                })
            }
            this.petInfo.skillArray.length < 4 ? SocketConnection.sendByQueue(CommandID.SKILL_STONE_USE_ITEM, [this.petInfo.catchTime, this.stoneId, 0, t],
            function() {
                EventManager.dispatchEvent(new egret.Event(e.EventConst.PET_INFO_UPDATE, !1, !1, i.petInfo)),
                i.hide()
            }) : (PopViewManager.getInstance().openView(new e.SkillStoneChangePop(this.petInfo, this.stoneId, t)), this.hide())
        },
        i
    } (PopView);
    e.SkillStoneChoosePop = t,
    __reflect(t.prototype, "petBag.SkillStoneChoosePop")
} (petBag || (petBag = {}));
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
petBag; !
function(e) {
    var t = function(t) {
        function i() {
            var e = t.call(this) || this;
            return e.skinName = "PetBagSkillStoneComposePopSkin",
            e
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            this.addEvent(),
            this.init()
        },
        i.prototype.init = function() {
            this.hasAdd = 0,
            this.arrAdd = [0, 0, 0, 0, 0],
            this.updateRate(),
            ItemManager.getSkillStone(),
            this.list.itemRenderer = e.SmallItem,
            this.arrayCollection = new eui.ArrayCollection,
            this.list.dataProvider = this.arrayCollection,
            this.list.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.addStone, this)
        },
        i.prototype.addEvent = function() {
            var e = this;
            ItemManager.addEventListener(ItemEvent.SKILL_STONE_LIST, this.onGetSkillStone, this),
            ImageButtonUtil.add(this.btnClose, this.hide, this);
            for (var t = function(t) {
                ImageButtonUtil.add(i["btnRemove" + t],
                function() {
                    e.removeStone(t)
                },
                i)
            },
            i = this, n = 1; 4 >= n; n++) t(n);
            ImageButtonUtil.add(this.btnCompose,
            function() {
                return e.hasAdd < 4 ? void BubblerManager.getInstance().showText("需要放入四颗技能石才可以合成哦！") : void Alert.show("技能石合成将有几率获得更高等级的技能石，失败时技能石有一定几率损毁哦！确定要" + TextFormatUtil.getRedTxt("花费500赛尔豆") + "进行合成吗？",
                function() {
                    SocketConnection.sendByQueue(CommandID.SKILL_STONE_COMPOSE_ITEM, e.arrAdd.slice(1, 5).slice(),
                    function(t) {
                        for (var i = t.data,
                        n = i.readUnsignedInt(), r = (i.readUnsignedInt(), i.readUnsignedInt()), a = [], o = 0; r > o; o++) {
                            var s = i.readUnsignedInt(),
                            u = e.arrAdd[s - 1]; - 1 == a.indexOf(u) ? (a.push(1), a.push(u)) : a[a.indexOf(u) - 1]++
                        }
                        if (0 == n) if (0 == a.length) BubblerManager.getInstance().showText("很遗憾，这次合成失败了！");
                        else {
                            for (var _ = "损失了",
                            o = 0; o < a.length / 2; o++) _ += a[2 * o] + "颗" + ItemXMLInfo.getName(a[2 * o + 1]) + "；";
                            _ = _.slice(0, _.length - 1),
                            _ += "！",
                            Alarm.show("很遗憾，这次合成失败了！" + TextFormatUtil.getRedTxt(_))
                        }
                        ItemManager.getSkillStone();
                        for (var o = 1; 4 >= o; o++) e["imgAdd" + o].source = "pet_bag_dream_stone_compose_pop_imgadd1_png",
                        e["imgAddBg" + o].source = "rarity_item_1_png",
                        e["btnRemove" + o].visible = !1,
                        e.arrAdd[o] = 0;
                        e.hasAdd = 0,
                        e.updateRate()
                    })
                })
            },
            this)
        },
        i.prototype.destroy = function() {
            ItemManager.removeEventListener(ItemEvent.SKILL_STONE_LIST, this.onGetSkillStone, this),
            t.prototype.destroy.call(this)
        },
        i.prototype.onGetSkillStone = function() {
            var e = ItemManager.getSkillStoneInfos(),
            t = [];
            for (var i in e) t[i] = {},
            t[i].type = "skillStone",
            t[i].id = e[i].itemID,
            t[i].use = 0,
            t[i].isCompose = !0,
            t[i].rarity = ItemXMLInfo.getItemRarity(e[i].itemID);
            this.arrayCollection.source = t,
            this.emptySign.visible = this.arrayCollection.length <= 0
        },
        i.prototype.addStone = function(e) {
            if (! (ItemManager.getNumByID(e.item.id) - e.item.use <= 0 || this.hasAdd >= 4)) {
                for (var t = this.list.numChildren,
                i = 0; t > i; i++) {
                    var n = this.list.getChildAt(i);
                    if (n.data == e.item) {
                        if ("S" == n.stoneLevel) return;
                        e.item.use++,
                        this.list.updateRenderer(n, e.itemIndex, e.item);
                        break
                    }
                }
                this.hasAdd++;
                for (var i = 1; 4 >= i; i++) if (!this.arrAdd[i]) {
                    this["imgAdd" + i].source = ClientConfig.getItemIcon(e.item.id),
                    this["imgAddBg" + i].source = "rarity_item_" + ItemXMLInfo.getItemRarity(e.item.id) + "_png",
                    this["btnRemove" + i].visible = !0,
                    this.arrAdd[i] = e.item.id;
                    break
                }
                this.updateRate()
            }
        },
        i.prototype.removeStone = function(e) {
            for (var t = !1,
            i = this.list.numChildren,
            n = 0; i > n; n++) {
                var r = this.list.getChildAt(n);
                if (r.data.id == this.arrAdd[e]) {
                    t = !0,
                    r.data.use--,
                    this.list.updateRenderer(r, r.itemIndex, r.data);
                    break
                }
            }
            if (!t) for (var a = this.arrayCollection.length,
            n = 0; a > n; n++) {
                var o = this.arrayCollection.getItemAt(n);
                if (o.id == this.arrAdd[e]) {
                    o.use--;
                    break
                }
            }
            this["imgAdd" + e].source = "pet_bag_dream_stone_compose_pop_imgadd1_png",
            this["imgAddBg" + e].source = "rarity_item_1_png",
            this["btnRemove" + e].visible = !1,
            this.arrAdd[e] = 0,
            this.hasAdd--,
            this.updateRate()
        },
        i.prototype.updateRate = function() {
            for (var e = !1,
            t = 1; t <= this.arrAdd.length; t++) if (this.arrAdd[t] > 0) {
                e = !0;
                break
            }
            if (!e) return void(this.txtRate.text = "0%");
            for (var i = 0,
            t = 1; 4 >= t; t++) i = Math.max(i, ItemXMLInfo.getSkillStoneRank(this.arrAdd[t]) + 1);
            for (var n = 0,
            t = 1; 4 >= t; t++) n += this.getStoneProbability(ItemXMLInfo.getSkillStoneRank(this.arrAdd[t]), i);
            MainManager.actorInfo.isVip && (n += 10),
            n > 100 && (n = 100),
            this.txtRate.text = n.toFixed(2) + "%"
        },
        i.prototype.getStoneProbability = function(e, t) {
            switch (e) {
            case 1:
                switch (t) {
                case 2:
                    return 24;
                case 3:
                    return 5.8;
                case 4:
                    return 1.4;
                case 5:
                    return.3
                }
                break;
            case 2:
                switch (t) {
                case 3:
                    return 23;
                case 4:
                    return 5.5;
                case 5:
                    return 1.3
                }
                break;
            case 3:
                switch (t) {
                case 4:
                    return 22;
                case 5:
                    return 5.3
                }
                break;
            case 4:
                switch (t) {
                case 5:
                    return 21
                }
            }
            return 0
        },
        i
    } (PopView);
    e.SkillStoneComposePop = t,
    __reflect(t.prototype, "petBag.SkillStoneComposePop")
} (petBag || (petBag = {}));
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
petBag; !
function(e) {
    var t = function(t) {
        function i() {
            var e = t.call(this) || this;
            return e.arrId = [300401, 300402, 300403, 300404, 300405],
            e.skinName = "PetBagOpenStonePopSkin",
            e
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            this.init(),
            this.addEvent()
        },
        i.prototype.init = function() {
            var t = this;
            this.selectId = 0,
            this.groupStones.removeChildren();
            for (var i = function(i) {
                var r = new e.SmallItem;
                n.groupStones.addChild(r),
                r.setItemInfo(i,
                function() {
                    for (var e = t.groupStones.numChildren,
                    n = 0; e > n; n++) {
                        var r = t.groupStones.getChildAt(n);
                        r.imgSelected.visible = r.id == i,
                        t.selectId = i
                    }
                },
                !0),
                r.txtName.text = ItemXMLInfo.getName(i)
            },
            n = this, r = 0, a = this.arrId; r < a.length; r++) {
                var o = a[r];
                i(o)
            }
        },
        i.prototype.addEvent = function() {
            var e = this;
            ImageButtonUtil.add(this.btnClose, this.hide, this),
            ImageButtonUtil.add(this.btnSingleOpen,
            function() {
                e.openStone(1)
            },
            this),
            ImageButtonUtil.add(this.btnAllOpen,
            function() {
                e.openStone(ItemManager.getNumByID(e.selectId))
            },
            this)
        },
        i.prototype.destroy = function() {
            t.prototype.destroy.call(this);
            for (var e = this.groupStones.numChildren,
            i = 0; e > i; i++) {
                var n = this.groupStones.getChildAt(i);
                n.destroy()
            }
        },
        i.prototype.openStone = function(e) {
            var t = this;
            return this.selectId ? 0 == e || e > ItemManager.getNumByID(this.selectId) ? void BubblerManager.getInstance().showText("技能石数量不足") : void SocketConnection.sendByQueue(CommandID.SKILL_STONE_USE_UNKNOW_ITEM, [this.selectId, e],
            function() {
                t.init()
            }) : void BubblerManager.getInstance().showText("请先选择你要开启的技能石种类")
        },
        i
    } (PopView);
    e.SkillStoneOpenPop = t,
    __reflect(t.prototype, "petBag.SkillStoneOpenPop")
} (petBag || (petBag = {}));
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
petBag; !
function(e) {
    var t = function(t) {
        function i(e) {
            var i = t.call(this) || this;
            return i.skinName = "PetBagUseStonePopSkin",
            i.petInfo = e,
            i
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            var t = this;
            ImageButtonUtil.add(this.btnClose, this.hide, this),
            ImageButtonUtil.add(this.btnFilter,
            function() {
                var e = {
                    callBack: t.onFilter,
                    caller: t,
                    unAutoClose: !1,
                    relativeSet: {
                        srcWorldPos: t.btnFilter.localToGlobal( - 345, 40),
                        dir: "left-top",
                        rx: 0,
                        ry: 0
                    }
                };
                e.filterSkillStone = !0,
                ModuleManager.showModule("petChooseAttributePanel", ["pet_choose_attribute_panel"], e, "", AppDoStyle.NULL)
            },
            this),
            this.list.itemRenderer = e.SmallItem,
            this.arrayCollection = new eui.ArrayCollection,
            this.list.dataProvider = this.arrayCollection,
            this.list.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.onClickItem, this),
            ItemManager.addEventListener(ItemEvent.SKILL_STONE_LIST, this.onGetSkillStone, this),
            ItemManager.getSkillStone()
        },
        i.prototype.destroy = function() {
            t.prototype.destroy.call(this),
            ItemManager.removeEventListener(ItemEvent.SKILL_STONE_LIST, this.onGetSkillStone, this)
        },
        i.prototype.onGetSkillStone = function() {
            var t = ItemManager.getSkillStoneInfos(),
            i = [];
            for (var n in t) i[n] = {},
            i[n].type = "skillStone",
            i[n].id = t[n].itemID,
            i[n].use = 0,
            i[n].rarity = ItemXMLInfo.getItemRarity(t[n].itemID);
            i.sort(e.SmallItem.compareRarity),
            this.arrayCollection.source = i,
            this.emptySign.visible = this.arrayCollection.length <= 0
        },
        i.prototype.onClickItem = function(e) {
            if (e.item) {
                var t = {
                    id: e.item.id,
                    useItemFun: this.useItem,
                    caller: this
                };
                tipsPop.TipsPop.openItemPop(t)
            }
        },
        i.prototype.useItem = function(t) {
            this.petInfo.level < ItemXMLInfo.getSkillStoneNeedLV(t) ? BubblerManager.getInstance().showText("需要精灵达到" + ItemXMLInfo.getSkillStoneNeedLV(t) + "级才可以使用" + ItemXMLInfo.getName(t) + "！") : (PopViewManager.getInstance().openView(new e.SkillStoneChoosePop(this.petInfo, t)), this.hide())
        },
        i.prototype.onFilter = function(t, i) {
            var n = ItemManager.getSkillStoneInfos();
            i > 0 && (n = n.filter(function(e) {
                return ItemXMLInfo._itemDict[e.itemID].Type == i
            }));
            var r = [];
            for (var a in n) r[a] = {},
            r[a].type = "skillStone",
            r[a].id = n[a].itemID,
            r[a].use = 0,
            r[a].rarity = ItemXMLInfo.getItemRarity(n[a].itemID);
            r.sort(e.SmallItem.compareRarity),
            this.arrayCollection.source = r,
            this.emptySign.visible = this.arrayCollection.length <= 0
        },
        i
    } (PopView);
    e.SkillStoneUsePop = t,
    __reflect(t.prototype, "petBag.SkillStoneUsePop")
} (petBag || (petBag = {}));
var __reflect = this && this.__reflect ||
function(e, t, i) {
    e.__class__ = t,
    i ? i.push(t) : i = [t],
    e.__types__ = e.__types__ ? i.concat(e.__types__) : i
},
petBag; !
function(e) {
    var t = function() {
        function e() {}
        return e.MAIN_PANEL = "petBag.MainPanel",
        e
    } ();
    e.PanelConst = t,
    __reflect(t.prototype, "petBag.PanelConst");
    var i = function() {
        function e() {}
        return e.init = function() {
            this.ARR_PET_BAG = [];
            for (var e = 101768; 101817 >= e; e++) this.ARR_PET_BAG.push(e)
        },
        e
    } ();
    e.AttrConst = i,
    __reflect(i.prototype, "petBag.AttrConst");
    var n = function() {
        function e() {}
        return e.MAIN_PANEL_TOUCH_PET_ITEM_BEGIN = "petBag.MainPanelTouchPetItemBegin",
        e.MAIN_PANEL_TOUCH_PET_ITEM_End = "petBag.MainPanelTouchPetItemEnd",
        e.MAIN_PANEL_SELECT_PET = "petBag.MainPanelSelectPet",
        e.PET_INFO_UPDATE = "petBag.PetInfoUpdate",
        e.SKIN_VIEW_CHANGE_SKIN = "petBag.SkinViewChangeSkin",
        e.REMOVE_SKIN_VIEW = "petBag.RemoveSkinView",
        e.REFRESH_MARK_VIEW = "petBag.ShowMarkView",
        e.MARK_VIEW_FILTER_MARK = "petBag.MarkViewFilterMark",
        e.MARK_VIEW_SELECT_MARK = "petBag.MarkViewSelectMark",
        e.MARK_VIEW_CHANGE_MARK = "petBag.MarkViewChangeMark",
        e.SKILL_VIEW_START_CHANGE_SKILL = "petBag.SkillViewStartChangeSkill",
        e.SKILL_VIEW_CONFIRM_CHANGE_SKILL = "petBag.SkillViewConfirmChangeSkill",
        e.SKILL_VIEW_TOUCH_SKILL_ITEM_BEGIN = "petBag.SkillViewTouchSkillItemBegin",
        e.SKILL_VIEW_TOUCH_SKILL_ITEM_End = "petBag.SkillViewTouchSkillItemEnd",
        e.CLICK_CHANGE_SKILL_IN_NEW_SKILL_POP = "petBag.ClickChangeSkillInNewSkillPop",
        e.MARK_VIEW_SEARCH = "mark_view_search",
        e
    } ();
    e.EventConst = n,
    __reflect(n.prototype, "petBag.EventConst")
} (petBag || (petBag = {}));
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
petBag; !
function(e) {
    var t = function(t) {
        function i() {
            var e = t.call(this) || this;
            return e.arrType = [null, [10, 18], [19], [8, 9, 11, 12, 13, 14, 15, 16, 17, 21]],
            e.skinName = "PetBagDevelopItemViewSkin",
            e
        }
        return __extends(i, t),
        i.prototype.init = function() {
            this.initRadioButton([this.btnBall, this.btnFight, this.btnDevelop]),
            this.list.itemRenderer = e.SmallItem,
            this.arrayCollection = new eui.ArrayCollection,
            this.list.dataProvider = this.arrayCollection,
            this.list.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.onClickItem, this)
        },
        i.prototype.setIndex = function() {
            var i = this;
            t.prototype.setIndex.call(this),
            this.scroller.stopAnimation();
            var n = ItemManager.getPetItemIDs();
            n = ItemManager.filterItemIds(n),
            3 != this.curIndex && (n = ItemManager.filterItemIdsByLimitPet(n, this.petInfo.id)),
            n = n.filter(function(e) {
                for (var t = 0,
                n = i.arrType[i.curIndex]; t < n.length; t++) {
                    var r = n[t];
                    if ( - 1 != ItemXMLInfo.getItemIdsByBagItemType(r).indexOf(e)) return ! 0
                }
                return ! 1
            });
            for (var r = [], a = 0, o = n; a < o.length; a++) {
                var s = o[a],
                u = void 0;
                s && (u = {},
                u.type = "item", u.id = s, u.rarity = ItemXMLInfo.getItemRarity(s)),
                r.push(u)
            }
            r.sort(e.SmallItem.compareRarity),
            this.arrayCollection.source = r,
            this.emptySign.visible = this.arrayCollection.length <= 0
        },
        i.prototype.onClickItem = function(e) {
            if (e.item) {
                var t = {
                    id: e.item.id,
                    useItemFun: this.useItem,
                    caller: this
                };
                tipsPop.TipsPop.openItemPop(t)
            }
        },
        i.prototype.useItem = function(e) {
            EventManager.once(ItemUseManager.EVENT_USE_ITEM_SUCCESSFUL, this.updatePetInfo, this),
            ItemUseManager.getInstance().useItem(this.petInfo, e)
        },
        i.prototype.updatePetInfo = function() {
            EventManager.dispatchEvent(new egret.Event(e.EventConst.PET_INFO_UPDATE, !1, !1, this.petInfo))
        },
        i
    } (e.BaseView);
    e.ItemView = t,
    __reflect(t.prototype, "petBag.ItemView")
} (petBag || (petBag = {}));
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
petBag; !
function(e) {
    var t = function(t) {
        function i() {
            var e = t.call(this) || this;
            return e.curSearchType = 0,
            e.skinName = "PetBagDevelopMarkViewSkin",
            e
        }
        return __extends(i, t),
        i.prototype.init = function() {
            GuideManager.isCompleted() || (this.btn2.name = "btn2", ImageButtonUtil.add(this.btn2,
            function() {},
            this, !1, !1)),
            this.initRadioButton([this.btn5, this.btn4, this.btn3, this.btn2]),
            this.curFilter = ["全部", "默认"],
            this.list.itemRenderer = e.MarkItem,
            this.arrayCollection = new eui.ArrayCollection,
            this.list.dataProvider = this.arrayCollection
        },
        i.prototype.remove = function() {
            t.prototype.remove.call(this),
            this.curSearchType = 0
        },
        i.prototype.addEvent = function() {
            var t = this;
            this.txtSearch.addEventListener(egret.Event.CHANGE,
            function(e) {
                t.curSearchType = 0,
                t.setIndex()
            },
            this),
            ImageButtonUtil.add(this.img_btn_search,
            function(e) {
                t.curSearchType = 0,
                t.setIndex()
            },
            this),
            EventManager.addEventListener(e.EventConst.MARK_VIEW_SEARCH, this.onSearchMark, this),
            EventManager.addEventListener(e.EventConst.MARK_VIEW_SELECT_MARK, this.onSelectMark, this),
            EventManager.addEventListener(e.EventConst.MARK_VIEW_FILTER_MARK,
            function(e) {
                t.curFilter = e.data,
                t.curSearchType = 0,
                t.setIndex()
            },
            this),
            EventManager.addEventListener(CountermarkEvent.UPGRADE_END,
            function(e) {
                t.curSearchType = 0,
                t.setIndex()
            },
            this),
            EventManager.addEventListener(CountermarkEvent.EQUIP_ON, this.updatePetInfo, this),
            EventManager.addEventListener(CountermarkEvent.EVENT_OPEN_BIND_MASK_SKILL_PANEL, this.openBindSkillPop, this),
            ImageButtonUtil.add(this.btnFilter,
            function() {
                StatLogger.log("精灵背包", "精灵背包刻印养成", "点击筛选按钮"),
                PopViewManager.getInstance().openView(new e.MarkFilterPop([t.curFilter[0], t.curFilter[1]]))
            },
            this),
            ImageButtonUtil.add(this.btnDecompose, this.showMarkDecomposePop, this),
            EventManager.addEventListener(CountermarkEvent.EVENT_SHOW_MARK_DECOMPOSE_POP, this.showMarkDecomposePop, this),
            GuideManager.isCompleted() || EventManager.addEventListener("isContinueMark", this.checkIsContinueMark, this)
        },
        i.prototype.checkIsContinueMark = function(e) {
            4 == this.curIndex && e.preventDefault()
        },
        i.prototype.onSearchMark = function(e) {
            var t = e.data;
            this.curSearchType = t.searchType,
            this.curSearchMarkInfo = t.info,
            this.curIndex = 6 - Number(CountermarkXMLInfo.getMintmarkQuality(this.curSearchMarkInfo.markID)),
            this.curFilter = ["全部", "默认"],
            CountermarkXMLInfo.isExclusive(this.curSearchMarkInfo.markID) && "专属" == this.curFilter[0],
            this.txtSearch.text = "",
            this.refresh(this.petInfo)
        },
        i.prototype.onSelectMark = function(e) {
            this.curMarkInfo = e.data;
            for (var t = this.list.numChildren,
            i = 0; t > i; i++) {
                var n = this.list.getChildAt(i);
                n.imgSelected.visible = this.curMarkInfo && this.curMarkInfo == n.data,
                n.imgSelected.visible ? (n.imgSelected.source = "common_select_rect_png", n.imgSelected.width = n.imgSelected.height = 94) : n.data && n.data.isBindMon && (n.imgSelected.visible = !0, n.imgSelected.source = "pet_bag_mark_item_imgyellowrect_png", n.imgSelected.width = n.imgSelected.height = 80)
            }
        },
        i.prototype.refresh = function(i) {
            t.prototype.refresh.call(this, i),
            EventManager.dispatchEventWith(e.EventConst.REFRESH_MARK_VIEW)
        },
        i.prototype.setIndex = function() {
            var e = this;
            this.radioButtonGroup.selectedValue != this.curIndex && this.curSearchType > 0 && (this.curSearchType = 0),
            t.prototype.setIndex.call(this),
            this.scroller.stopAnimation(),
            CountermarkController.getPetBindMarksAndNoBindMarks(this.petInfo).then(function(t) {
                switch (e.curIndex) {
                case 4:
                    t = t.filter(function(e) {
                        var t = CountermarkXMLInfo.getType(e.markID) === CountermarkType.MARK_IS_UNIVERSAL,
                        i = 2 === Number(CountermarkXMLInfo.getMintmarkQuality(e.markID)),
                        n = CountermarkXMLInfo.getType(e.markID) === CountermarkType.MARK_IS_COMMON_ABLITY,
                        r = CountermarkXMLInfo.getType(e.markID) === CountermarkType.MARK_IS_SKILL;
                        return t && i || n || r
                    });
                    break;
                case 3:
                    t = t.filter(function(e) {
                        var t = CountermarkXMLInfo.getType(e.markID) === CountermarkType.MARK_IS_UNIVERSAL,
                        i = 3 === Number(CountermarkXMLInfo.getMintmarkQuality(e.markID));
                        return t && i
                    });
                    break;
                case 2:
                    t = t.filter(function(e) {
                        var t = CountermarkXMLInfo.getType(e.markID) === CountermarkType.MARK_IS_UNIVERSAL,
                        i = 4 === Number(CountermarkXMLInfo.getMintmarkQuality(e.markID));
                        return t && i
                    });
                    break;
                case 1:
                    t = t.filter(function(e) {
                        var t = CountermarkXMLInfo.getType(e.markID) === CountermarkType.MARK_IS_UNIVERSAL,
                        i = 5 === Number(CountermarkXMLInfo.getMintmarkQuality(e.markID));
                        return t && i
                    })
                }
                var i = e.txtSearch.text.trim();
                if (i.length > 0 && (t = t.filter(function(e) {
                    return SearchUtil.isMatch(i, e.markName) || SearchUtil.isMatch(i, e.markID + "") || SearchUtil.isMatch(i, CountermarkXMLInfo.getClassNameByMarkId(e.markID))
                })), "专属" == e.curFilter[0] ? t = t.filter(function(e) {
                    return CountermarkXMLInfo.isExclusive(e.markID)
                }) : "非专属" == e.curFilter[0] && (t = t.filter(function(e) {
                    return ! CountermarkXMLInfo.isExclusive(e.markID)
                })), 1 == e.curSearchType ? t = t.filter(function(t) {
                    var i = CountermarkXMLInfo.getDes(t.markID) == CountermarkXMLInfo.getDes(e.curSearchMarkInfo.markID);
                    return i
                }) : 2 == e.curSearchType && (t = t.filter(function(t) {
                    var i = CountermarkXMLInfo.getMintMarkClass(t.markID) == CountermarkXMLInfo.getMintMarkClass(e.curSearchMarkInfo.markID);
                    return i
                })), "攻击" == e.curFilter[1] ? t = t.sort(function(e, t) {
                    if (e.isBindMon && t.isBindMon || !e.isBindMon && !t.isBindMon) {
                        var i = Number(CountermarkXMLInfo.getMaxAttriValue(t.markID)[0]);
                        t.hasExtraAttri && (i += Number(CountermarkXMLInfo.getExtraAttriValue(t.markID)[0]));
                        var n = Number(CountermarkXMLInfo.getMaxAttriValue(e.markID)[0]);
                        return e.hasExtraAttri && (n += Number(CountermarkXMLInfo.getExtraAttriValue(e.markID)[0])),
                        i == n ? e.level == t.level ? t.markID - e.markID: t.level - e.level: i - n
                    }
                    return e.isBindMon && !t.isBindMon ? -1 : !e.isBindMon && t.isBindMon ? 1 : void 0
                }) : "特攻" == e.curFilter[1] ? t = t.sort(function(e, t) {
                    if (e.isBindMon && t.isBindMon || !e.isBindMon && !t.isBindMon) {
                        var i = Number(CountermarkXMLInfo.getMaxAttriValue(t.markID)[2]);
                        t.hasExtraAttri && (i += Number(CountermarkXMLInfo.getExtraAttriValue(t.markID)[2]));
                        var n = Number(CountermarkXMLInfo.getMaxAttriValue(e.markID)[2]);
                        return e.hasExtraAttri && (n += Number(CountermarkXMLInfo.getExtraAttriValue(e.markID)[2])),
                        i == n ? e.level == t.level ? t.markID - e.markID: t.level - e.level: i - n
                    }
                    return e.isBindMon && !t.isBindMon ? -1 : !e.isBindMon && t.isBindMon ? 1 : void 0
                }) : "双防" == e.curFilter[1] ? t = t.sort(function(e, t) {
                    if (e.isBindMon && t.isBindMon || !e.isBindMon && !t.isBindMon) {
                        var i = Number(CountermarkXMLInfo.getMaxAttriValue(t.markID)[1]) + Number(CountermarkXMLInfo.getMaxAttriValue(t.markID)[3]);
                        t.hasExtraAttri && (i = Number(CountermarkXMLInfo.getExtraAttriValue(t.markID)[1]) + Number(CountermarkXMLInfo.getExtraAttriValue(t.markID)[3]) + i);
                        var n = Number(CountermarkXMLInfo.getMaxAttriValue(e.markID)[1]) + Number(CountermarkXMLInfo.getMaxAttriValue(e.markID)[3]);
                        return e.hasExtraAttri && (n = Number(CountermarkXMLInfo.getExtraAttriValue(e.markID)[1]) + Number(CountermarkXMLInfo.getExtraAttriValue(e.markID)[3]) + n),
                        i == n ? e.level == t.level ? t.markID - e.markID: t.level - e.level: i - n
                    }
                    return e.isBindMon && !t.isBindMon ? -1 : !e.isBindMon && t.isBindMon ? 1 : void 0
                }) : "速度" == e.curFilter[1] ? t = t.sort(function(e, t) {
                    if (e.isBindMon && t.isBindMon || !e.isBindMon && !t.isBindMon) {
                        var i = Number(CountermarkXMLInfo.getMaxAttriValue(t.markID)[4]);
                        t.hasExtraAttri && (i += Number(CountermarkXMLInfo.getExtraAttriValue(t.markID)[4]));
                        var n = Number(CountermarkXMLInfo.getMaxAttriValue(e.markID)[4]);
                        return e.hasExtraAttri && (n += Number(CountermarkXMLInfo.getExtraAttriValue(e.markID)[4])),
                        i == n ? e.level == t.level ? t.markID - e.markID: t.level - e.level: i - n
                    }
                    return e.isBindMon && !t.isBindMon ? -1 : !e.isBindMon && t.isBindMon ? 1 : void 0
                }) : "体力" == e.curFilter[1] ? t = t.sort(function(e, t) {
                    if (e.isBindMon && t.isBindMon || !e.isBindMon && !t.isBindMon) {
                        var i = Number(CountermarkXMLInfo.getMaxAttriValue(t.markID)[5]);
                        t.hasExtraAttri && (i += Number(CountermarkXMLInfo.getExtraAttriValue(t.markID)[5]));
                        var n = Number(CountermarkXMLInfo.getMaxAttriValue(e.markID)[5]);
                        return e.hasExtraAttri && (n += Number(CountermarkXMLInfo.getExtraAttriValue(e.markID)[5])),
                        i == n ? e.level == t.level ? t.markID - e.markID: t.level - e.level: i - n
                    }
                    return e.isBindMon && !t.isBindMon ? -1 : !e.isBindMon && t.isBindMon ? 1 : void 0
                }) : "默认" == e.curFilter[1] && (t = t.sort(function(e, t) {
                    return e.isBindMon && t.isBindMon ? e.markID > t.markID ? -1 : e.markID < t.markID ? 1 : e.level == t.level ? t.obtainTime - e.obtainTime: t.level - e.level: e.isBindMon && !t.isBindMon ? -1 : !e.isBindMon && t.isBindMon ? 1 : e.markID == t.markID ? e.level == t.level ? t.obtainTime - e.obtainTime: t.level - e.level: t.markID - e.markID
                })), !GuideManager.isCompleted() && 2 == t.length && t[0].isBindMon && !t[1].isBindMon) {
                    var n = t[0];
                    t[0] = t[1],
                    t[1] = n,
                    EventManager.addEventListener("isSkipBind",
                    function(e) {
                        e.preventDefault()
                    },
                    e)
                }
                e.arrayCollection.source = t,
                e.emptySign.visible = e.arrayCollection.length <= 0
            })
        },
        i.prototype.updatePetInfo = function() {
            EventManager.dispatchEvent(new egret.Event(e.EventConst.PET_INFO_UPDATE, !1, !1, this.petInfo))
        },
        i.prototype.openBindSkillPop = function(t) {
            var i = t.info,
            n = new e.BindSkillPop,
            r = {
                ontouchItemcallback: this.onTouchBindSkill,
                caller: this,
                markinfo: i,
                petinfo: this.petInfo
            },
            a = PopViewManager.createDefaultStyleObject();
            a.clickMaskHandler = function() {
                PopViewManager.getInstance().hideView(n),
                EventManager.dispatchEvent(new CountermarkEvent(CountermarkEvent.SKILL_CANCEL, null))
            },
            a.caller = this,
            PopViewManager.getInstance().openView(n, a, r)
        },
        i.prototype.onTouchBindSkill = function(e) {
            EventManager.dispatchEvent(new CountermarkEvent(CountermarkEvent.SKILL_SELECT, e))
        },
        i.prototype.showMarkDecomposePop = function() {
            this.markDecomposePop = new e.MarkDecomposePop(this);
            var t = PopViewManager.createDefaultStyleObject();
            t.maskShapeStyle.maskAlpha = .7,
            PopViewManager.getInstance().openView(this.markDecomposePop, t)
        },
        i
    } (e.BaseView);
    e.MarkView = t,
    __reflect(t.prototype, "petBag.MarkView")
} (petBag || (petBag = {}));
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
petBag; !
function(e) {
    var t = function(t) {
        function i() {
            var e = t.call(this) || this;
            return e.skinName = "PetBagDevelopNatureViewSkin",
            e
        }
        return __extends(i, t),
        i.prototype.init = function() {
            GuideManager.isCompleted() || (this.btnEffect.name = "btnEffect", ImageButtonUtil.add(this.btnEffect,
            function() {},
            this, !1, !1)),
            this.initRadioButton([this.btnNature, this.btnEffect]),
            this.list.itemRenderer = e.SmallItem,
            this.arrayCollection = new eui.ArrayCollection,
            this.list.dataProvider = this.arrayCollection,
            this.list.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.onClickItem, this)
        },
        i.prototype.refresh = function(e) {
            t.prototype.refresh.call(this, e),
            this.txtNature.text = e.dv + "",
            this.progressNature.value = e.dv / 31 * 100,
            this.txtEffect.text = NatureXMLInfo.getName(e.nature) + "(" + NatureXMLInfo.getDes2(e.nature) + ")";
            var i = PetXMLInfo.getCharacterAttrParam(e.id),
            n = [1, 5, 6, 7, 8, 12, 13],
            r = NatureXMLInfo.getName(n[i]),
            a = NatureXMLInfo.getDes2(n[i]);
            this.txtRecommendEffect.text = "推荐性格：" + r + "(" + a + ")"
        },
        i.prototype.setIndex = function() {
            t.prototype.setIndex.call(this),
            this.scroller.stopAnimation();
            var i = ItemXMLInfo.getItemIdsByBagItemType(1 == this.curIndex ? ItemType.GEM_ASSIST_ITEM: ItemType.CHARACTER);
            i = i.filter(function(e) {
                return ItemManager.getNumByID(e) > 0
            },
            this),
            i = ItemManager.filterItemIds(i),
            i = ItemManager.filterItemIdsByLimitPet(i, this.petInfo.id);
            for (var n = [], r = 0, a = i; r < a.length; r++) {
                var o = a[r],
                s = void 0;
                o && (s = {},
                s.type = "item", s.id = o, s.rarity = ItemXMLInfo.getItemRarity(o)),
                n.push(s)
            }
            n.sort(e.SmallItem.compareRarityAscending),
            this.arrayCollection.source = n,
            this.emptySign.visible = this.arrayCollection.length <= 0
        },
        i.prototype.onClickItem = function(e) {
            if (e.item) {
                var t = {
                    id: e.item.id,
                    useItemFun: this.useItem,
                    caller: this
                };
                tipsPop.TipsPop.openItemPop(t),
                GuideManager.isCompleted() || (300791 == e.item.id ? EventManager.dispatchEventWith("click_item", !1, 300791) : 300082 == e.item.id && EventManager.dispatchEventWith("click_item", !1, 300082))
            }
        },
        i.prototype.useItem = function(e) {
            EventManager.once(ItemUseManager.EVENT_USE_ITEM_SUCCESSFUL, this.updatePetInfo, this),
            ItemUseManager.getInstance().useItem(this.petInfo, e)
        },
        i.prototype.updatePetInfo = function() {
            EventManager.dispatchEvent(new egret.Event(e.EventConst.PET_INFO_UPDATE, !1, !1, this.petInfo))
        },
        i
    } (e.BaseView);
    e.NatureView = t,
    __reflect(t.prototype, "petBag.NatureView")
} (petBag || (petBag = {}));
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
petBag; !
function(e) {
    var t = function(t) {
        function i() {
            var e = t.call(this) || this;
            return e.skinName = "PetBagDevelopResistanceViewSkin",
            e
        }
        return __extends(i, t),
        i.prototype.init = function() {
            this.list1.itemRenderer = e.ResistanceItem,
            this.list2.itemRenderer = e.ResistanceItem,
            this.list3.itemRenderer = e.ResistanceItem,
            this.arrayCollection1 = new eui.ArrayCollection,
            this.arrayCollection2 = new eui.ArrayCollection,
            this.arrayCollection3 = new eui.ArrayCollection,
            this.list1.dataProvider = this.arrayCollection1,
            this.list2.dataProvider = this.arrayCollection2,
            this.list3.dataProvider = this.arrayCollection3
        },
        i.prototype.addEvent = function() {
            var t = this;
            ImageButtonUtil.add(this.btnOpen,
            function() {
                ItemManager.getNumByID(1706826) <= 0 ? BubblerManager.getInstance().showText("泰坦神石数量不足！") : SocketConnection.sendByQueue(CommandID.RESISTANCE_OPEN, [t.petInfo.catchTime, 3],
                function() {
                    t.updatePetInfo()
                })
            },
            this),
            ImageButtonUtil.add(this.btnStrengthen,
            function() {
                PopViewManager.getInstance().openView(new e.ResistanceStrengthenPop(t.petInfo))
            },
            this),
            ImageButtonUtil.add(this.btnExchange,
            function() {
                PopViewManager.getInstance().openView(new e.ResistanceExchangePop(t.petInfo))
            },
            this)
        },
        i.prototype.refresh = function(e) {
            if (t.prototype.refresh.call(this, e), this.txtCannot.visible = 0 == e.resistanceinfo.resist_state, this.groupNotOpen.visible = 1 == e.resistanceinfo.resist_state, this.groupMain.visible = 2 == e.resistanceinfo.resist_state, 2 == e.resistanceinfo.resist_state) {
                var i = [[1, "pet_detailed_information_icon_sh_0_png", "致命伤害减免", ResistanceSysController.getResistanceByLevel(0, this.petInfo.resistanceinfo.cirt).present + this.petInfo.resistanceinfo.cirt_adj + "%"], [1, "pet_detailed_information_icon_sh_1_png", "固定伤害减免", ResistanceSysController.getResistanceByLevel(0, this.petInfo.resistanceinfo.regular).present + this.petInfo.resistanceinfo.regular_adj + "%"], [1, "pet_detailed_information_icon_sh_2_png", "百分比伤害减免", ResistanceSysController.getResistanceByLevel(0, this.petInfo.resistanceinfo.precent).present + this.petInfo.resistanceinfo.precent_adj + "%"]];
                this.arrayCollection1.source = i;
                for (var n = [], r = 0; 3 > r; r++) n[r] = [2, ClientConfig.getBattleEffectIcon(this.petInfo.resistanceinfo["ctl_" + (r + 1) + "_idx"]), "免疫" + PetStatusEffectConfig.getName(0, this.petInfo.resistanceinfo["ctl_" + (r + 1) + "_idx"]) + "：", ResistanceSysController.getResistanceByLevel(1, this.petInfo.resistanceinfo["ctl_" + (r + 1)]).present + this.petInfo.resistanceinfo["ctl_" + (r + 1) + "_adj"] + this.petInfo.resistanceinfo.resist_all + "%"];
                this.arrayCollection2.source = n;
                for (var a = [], r = 0; 3 > r; r++) a[r] = [2, ClientConfig.getBattleEffectIcon(this.petInfo.resistanceinfo["weak_" + (r + 1) + "_idx"]), "免疫" + PetStatusEffectConfig.getName(0, this.petInfo.resistanceinfo["weak_" + (r + 1) + "_idx"]) + "：", ResistanceSysController.getResistanceByLevel(1, this.petInfo.resistanceinfo["weak_" + (r + 1)]).present + this.petInfo.resistanceinfo["weak_" + (r + 1) + "_adj"] + this.petInfo.resistanceinfo.resist_all + "%"];
                this.arrayCollection3.source = a
            }
        },
        i.prototype.updatePetInfo = function() {
            EventManager.dispatchEvent(new egret.Event(e.EventConst.PET_INFO_UPDATE, !1, !1, this.petInfo))
        },
        i
    } (e.BaseView);
    e.ResistanceView = t,
    __reflect(t.prototype, "petBag.ResistanceView")
} (petBag || (petBag = {}));
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
petBag; !
function(e) {
    var t = function(t) {
        function i() {
            var e = t.call(this) || this;
            return e.arrExp = [1e5, 5e5, 1e6, 16e5, 23e5],
            e.arrItemId = [1200444, 1200445, 1200446, 1707149, 1707150],
            e.skinName = "PetBagDevelopSEffectViewSkin",
            e
        }
        return __extends(i, t),
        i.prototype.init = function() {
            this.initRadioButton([this.btnJustify, this.btnStrengthenMenu]),
            this.list.itemRenderer = e.SmallItem,
            this.arrayCollection = new eui.ArrayCollection,
            this.list.dataProvider = this.arrayCollection,
            this.list.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.onClickItem, this)
        },
        i.prototype.addEvent = function() {
            var t = this;
            ImageButtonUtil.add(this.btnCompose,
            function() {
                var i = PopViewManager.createDefaultStyleObject();
                i.maskShapeStyle.maskAlpha = .7,
                PopViewManager.getInstance().openView(new e.DreamStoneComposePop(t.petInfo), i)
            },
            this),
            ImageButtonUtil.add(this.btnPreview,
            function() {
                var i = PetManager.getPetEffect(t.petInfo);
                PopViewManager.getInstance().openView(new e.SEffectPreviewPop(i))
            },
            this),
            ImageButtonUtil.add(this.btnStrengthen,
            function() {
                5 == t.level ? BubblerManager.getInstance().showText("你的精灵特性已经达到巅峰了，不能再强化了！") : ItemManager.getNumByID(t.arrItemId[t.level]) < 1 || t.sumExp < t.arrExp[t.level] ? BubblerManager.getInstance().showText("你的宝石或者经验不足哦！") : Alert.show("确认要强化精灵" + t.petInfo.name + "的特性吗？本次强化需要消耗1个" + ItemXMLInfo.getName(t.arrItemId[t.level]) + "和" + t.arrExp[t.level] + "经验",
                function() {
                    SocketConnection.sendByQueue(CommandID.EFFECT_STRENGTHEN, [t.petInfo.catchTime],
                    function(e) {
                        t.updatePetInfo(),
                        1 === e.data.readUnsignedInt() ? BubblerManager.getInstance().showText("恭喜你，特性强化成功！" + t.petInfo.name + "的特性效果提升了！") : BubblerManager.getInstance().showText("很遗憾，强化失败了，请继续努力。")
                    })
                })
            },
            this)
        },
        i.prototype.refresh = function(e) {
            var i = PetManager.getPetEffect(e);
            if (i) {
                var n = PetEffectXMLInfo.getEffect(i.effectID, i.args);
                this.txtSEffect.text = n,
                this.groupStar.visible = !0,
                this.level = PetEffectXMLInfo.getStarLevel(i.effectID, i.args);
                for (var r = 1; 5 >= r; r++) this["imgStar" + r].visible = this.level >= r;
                var a = PetEffectXMLInfo.getEffectDes(i.effectID, i.args);
                this.txtSEffectDes.text = "具体效果：" + a
            } else this.txtSEffect.text = "无",
            this.groupStar.visible = !1,
            this.txtSEffectDes.text = "";
            t.prototype.refresh.call(this, e)
        },
        i.prototype.setIndex = function() {
            var i = this;
            if (t.prototype.setIndex.call(this), this.scroller.visible = 1 == this.curIndex, this.groupStrengthen.visible = 2 == this.curIndex, 1 == this.curIndex) {
                this.scroller.stopAnimation();
                var n = ItemXMLInfo.getItemIdsByBagItemType(ItemType.FEATURES);
                n = n.filter(function(e) {
                    return ItemManager.getNumByID(e) > 0
                },
                this),
                n = ItemManager.filterItemIds(n),
                n = ItemManager.filterItemIdsByLimitPet(n, this.petInfo.id);
                for (var r = [], a = 0, o = n; a < o.length; a++) {
                    var s = o[a],
                    u = void 0;
                    s && (u = {},
                    u.type = "item", u.id = s, u.rarity = ItemXMLInfo.getItemRarity(s)),
                    r.push(u)
                }
                r.sort(e.SmallItem.compareRarityAscending),
                this.arrayCollection.source = r,
                this.emptySign.visible = this.arrayCollection.length <= 0
            } else if (2 == this.curIndex) {
                this.emptySign.visible = !1;
                var _ = PetManager.getPetEffect(this.petInfo);
                if (!_) return Alarm.show("需要为精灵开启特性后才能进行特性强化！"),
                this.curIndex = 1,
                this.emptySign.visible = this.arrayCollection.length <= 0,
                this.btnJustify.selected = !0,
                this.btnStrengthenMenu.selected = !1,
                this.scroller.visible = !0,
                void(this.groupStrengthen.visible = !1);
                this.itemLine.removeChildren();
                for (var l = function(t) {
                    var i = new e.SmallItem;
                    h.itemLine.addChild(i),
                    i.setItemInfo(t,
                    function() {
                        tipsPop.TipsPop.openItemPop({
                            id: t
                        })
                    },
                    !0)
                },
                h = this, g = 0, c = this.arrItemId; g < c.length; g++) {
                    var s = c[g];
                    l(s)
                }
                if (SocketConnection.sendByQueue(CommandID.PET_GET_EXP, [],
                function(e) {
                    i.sumExp = e.data.readUnsignedInt(),
                    i.txtExp.text = i.sumExp + ""
                }), this.level < 5) {
                    var s = this.arrItemId[this.level];
                    this.imgItemNeed1.source = ClientConfig.getItemIcon(s),
                    this.imgItemNeedBg1.source = "rarity_item_" + ItemXMLInfo.getItemRarity(s) + "_png",
                    this.txtItemNeed1.text = ItemXMLInfo.getName(s) + "\nx1",
                    this.imgItemNeed2.visible = !0,
                    this.txtItemNeed2.text = "经验值\nx" + this.arrExp[this.level]
                } else this.imgItemNeed1.source = "",
                this.txtItemNeed1.text = "",
                this.imgItemNeed2.visible = !1,
                this.txtItemNeed2.text = ""
            }
        },
        i.prototype.destroy = function() {
            t.prototype.destroy.call(this);
            for (var e = this.itemLine.numChildren,
            i = 0; e > i; i++) {
                var n = this.itemLine.getChildAt(i);
                n.destroy()
            }
        },
        i.prototype.onClickItem = function(e) {
            if (e.item) {
                var t = {
                    id: e.item.id,
                    useItemFun: this.useItem,
                    caller: this
                };
                tipsPop.TipsPop.openItemPop(t)
            }
            GuideManager.isCompleted() || 300063 == e.item.id && EventManager.dispatchEventWith("click_item", !1, 300063)
        },
        i.prototype.useItem = function(e) {
            EventManager.once(ItemUseManager.EVENT_USE_ITEM_SUCCESSFUL, this.updatePetInfo, this),
            ItemUseManager.getInstance().useItem(this.petInfo, e)
        },
        i.prototype.updatePetInfo = function() {
            EventManager.dispatchEvent(new egret.Event(e.EventConst.PET_INFO_UPDATE, !1, !1, this.petInfo))
        },
        i
    } (e.BaseView);
    e.SEffectView = t,
    __reflect(t.prototype, "petBag.SEffectView")
} (petBag || (petBag = {}));
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
petBag; !
function(e) {
    var t = function(t) {
        function i() {
            var e = t.call(this) || this;
            return e.skinName = "PetBagDevelopSkillViewSkin",
            e
        }
        return __extends(i, t),
        i.prototype.init = function() {
            this.list.itemRenderer = e.SkillItem,
            this.arrayCollection = new eui.ArrayCollection,
            this.list.dataProvider = this.arrayCollection,
            this.btnChange.visible = !1
        },
        i.prototype.addEvent = function() {
            var t = this;
            EventManager.addEventListener(e.EventConst.SKILL_VIEW_START_CHANGE_SKILL, this.onStartChangeSkill, this),
            EventManager.addEventListener(e.EventConst.SKILL_VIEW_CONFIRM_CHANGE_SKILL, this.onConfirmChangeSkill, this),
            EventManager.addEventListener(e.EventConst.SKILL_VIEW_TOUCH_SKILL_ITEM_BEGIN, this.onStartMoveSkill, this),
            EventManager.addEventListener(e.EventConst.SKILL_VIEW_TOUCH_SKILL_ITEM_End, this.onEndMoveSkill, this),
            egret.lifecycle.stage.addEventListener(egret.TouchEvent.TOUCH_END, this.onMouseUp, this),
            ImageButtonUtil.add(this.btnCompose,
            function() {
                PopViewManager.getInstance().openView(new e.SkillStoneComposePop)
            },
            this),
            ImageButtonUtil.add(this.btnOpen,
            function() {
                PopViewManager.getInstance().openView(new e.SkillStoneOpenPop)
            },
            this),
            ImageButtonUtil.add(this.btnUse,
            function() {
                PopViewManager.getInstance().openView(new e.SkillStoneUsePop(t.petInfo))
            },
            this),
            ImageButtonUtil.add(this.btnChange,
            function() {
                t.skillWaitForChange = t.petInfo.hideSKill.id,
                PopViewManager.getInstance().openView(new e.ChangeFifthSkillPop(t.petInfo))
            },
            this)
        },
        i.prototype.destroy = function() {
            egret.lifecycle.stage.removeEventListener(egret.TouchEvent.TOUCH_END, this.onMouseUp, this),
            t.prototype.destroy.call(this)
        },
        i.prototype.refresh = function(e) {
            t.prototype.refresh.call(this, e);
            for (var i = 0,
            n = e.skillArray; i < n.length; i++) {
                var r = n[i];
                r.hasGot = !0,
                r.canChange = !0,
                r.petInfo = e
            }
            if (this.arrayCollection.source = e.skillArray, this.groupFifthSkill.visible = !!e.hideSKill, this.txtNoFifthSkill.visible = !e.hideSKill, e.hideSKill) {
                this.txtFifthName.text = e.hideSKill.name,
                this.txtFifthPower.text = "威力：" + e.hideSKill.damage,
                this.txtFifthPP.text = "PP：" + e.hideSKill.pp + "/" + e.hideSKill.maxPP;
                var a = void 0;
                if (4 == SkillXMLInfo.getCategory(e.hideSKill.id)) a = ClientConfig.getpettypeticon("prop");
                else {
                    var o = SkillXMLInfo.getTypeID(e.hideSKill.id);
                    a = ClientConfig.getpettypeticon(o + "")
                }
                this.imgFifthAttr.source = a,
                ImageButtonUtil.add(this.groupFifthSkill,
                function() {
                    tipsPop.TipsPop.openSkillPop({
                        id: e.hideSKill.id,
                        petInfo: e
                    })
                },
                this, !1, !1)
            } else null != SkillXMLInfo.hideMovesMap[e.id] ? this.txtNoFifthSkill.text = "暂未开启": this.txtNoFifthSkill.text = "无法开启";
            this.btnChange.visible = !1;
            var s = PetXMLInfo.getAdditionFifthSkill(this.petInfo.id);
            s.length > 0 && this.petInfo.hideSKill && (this.btnChange.visible = !0)
        },
        i.prototype.remove = function() {
            for (var e = 0,
            t = this.petInfo.skillArray; e < t.length; e++) {
                var i = t[e];
                i.canChange = !1
            }
        },
        i.prototype.onStartChangeSkill = function(t) {
            this.skillWaitForChange = t.data,
            PopViewManager.getInstance().openView(new e.ChangeSkillPop(this.petInfo))
        },
        i.prototype.onConfirmChangeSkill = function(e) {
            var t = this;
            SkillXMLInfo.isHideSkillId(this.petInfo.id, this.skillWaitForChange) || PetXMLInfo.checkIsAdditionFifthSkill(this.petInfo.id, this.skillWaitForChange) ? SocketConnection.sendByQueue(CommandID.CHANGE_FIFTH_SKILL, [this.petInfo.catchTime, this.skillWaitForChange, e.data],
            function() {
                t.updatePetInfo()
            }) : SocketConnection.sendByQueue(CommandID.PET_SKILL_SWICTH, [this.petInfo.catchTime, 1, 1, this.skillWaitForChange, e.data],
            function() {
                t.updatePetInfo()
            })
        },
        i.prototype.onStartMoveSkill = function(e) {
            var t = this;
            this.skillWaitForMove = e.data;
            for (var i, n = new eui.Image,
            r = new egret.RenderTexture,
            a = 0; a < this.list.numChildren; a++) {
                var o = this.list.getChildAt(a);
                if (o.data == this.skillWaitForMove) {
                    i = o;
                    break
                }
            }
            r.drawToTexture(i),
            n.source = r,
            LevelManager.appLevel.addChild(n),
            n.visible = !1,
            n.touchEnabled = !1;
            var s = function(e) {
                n.visible = !0,
                n.x = e.stageX - n.width / 2,
                n.y = e.stageY - n.height / 2
            };
            egret.lifecycle.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, s, this),
            egret.lifecycle.stage.once(egret.TouchEvent.TOUCH_END,
            function() {
                egret.lifecycle.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, s, t),
                LevelManager.appLevel.removeChild(n)
            },
            this)
        },
        i.prototype.onEndMoveSkill = function(e) {
            var t = this,
            i = this.arrayCollection.source;
            if (this.skillWaitForMove) for (var n in i) i[n] == this.skillWaitForMove ? i[n] = e.data: i[n] == e.data && (i[n] = this.skillWaitForMove);
            var r = new egret.ByteArray;
            r.writeUnsignedInt(this.petInfo.catchTime);
            for (var a = 0; 4 > a; a++) r.writeUnsignedInt(i[a] ? i[a].id: 0);
            SocketConnection.sendByQueue(CommandID.Skill_Sort, [r],
            function() {
                t.updatePetInfo()
            })
        },
        i.prototype.onMouseUp = function() {
            this.skillWaitForMove = null
        },
        i.prototype.updatePetInfo = function() {
            EventManager.dispatchEvent(new egret.Event(e.EventConst.PET_INFO_UPDATE, !1, !1, this.petInfo))
        },
        i
    } (e.BaseView);
    e.SkillView = t,
    __reflect(t.prototype, "petBag.SkillView")
} (petBag || (petBag = {}));
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
petBag; !
function(e) {
    var t = function(t) {
        function i() {
            var e = t.call(this) || this;
            return e.skinName = "PetBagDevelopSkinViewSkin",
            e
        }
        return __extends(i, t),
        i.prototype.init = function() {
            this.arrayCollection = new eui.ArrayCollection,
            this.component = new common.ui.CustomScroller(this.list.width, this.list.height, 199, 287, this.list.layout.gap, e.SkinItem, 150, .8, 1.2, 1, 1, this.list, this.arrayCollection, 100, null, common.ui.CustomScroller.DIR_TO_H),
            this.addChild(this.component),
            this.component.x = this.list.x,
            this.component.y = this.list.y
        },
        i.prototype.addEvent = function() {
            var t = this;
            this.component.addEventListener(common.ui.CustomScroller.EVENT_CHANGE_END,
            function() {
                t.isMove = !1,
                t.selectSkinIndex = t.component.getSelectIndex();
                for (var e = t.arrayCollection.getItemAt(t.selectSkinIndex), i = 0; i < t.list.numChildren; i++) {
                    var n = t.list.getChildAt(i);
                    n.setSelect(e === n.data)
                }
                t.onChooseSkin()
            },
            this),
            ImageButtonUtil.add(this.btnPutOn,
            function() {
                var i = t.arrayCollection.getItemAt(t.selectSkinIndex);
                t.petInfo.skinId != i.id && PetManager.equipSkin(t.petInfo.catchTime, i.id,
                function() {
                    EventManager.dispatchEvent(new egret.Event(e.EventConst.PET_INFO_UPDATE, !1, !1, t.petInfo))
                })
            },
            this)
        },
        i.prototype.refresh = function(e) {
            t.prototype.refresh.call(this, e),
            this.getSkins(),
            this.selectSkinIndex = this.getSelectSkinIndex(),
            this.component.viewport.scrollH = 0,
            this.component.goToNum(this.selectSkinIndex, 0)
        },
        i.prototype.getSkins = function() {
            this.arrayCollection.removeAll();
            for (var e = 1,
            t = PetSkinInfo.getPetDefaultSkin(this.petInfo.id), i = [t], n = PetSkinXMLInfo.getSkinInfosByPetId(this.petInfo.id), r = 0; r < n.length; r++) i.push(n[r]),
            PetSkinController.instance.haveSkin(n[r].id) && e++;
            this.txtHasSkin.text = "已获得皮肤:" + e + "/" + i.length,
            i.unshift(null),
            i.push(null),
            this.arrayCollection.replaceAll(i),
            this.arrayCollection.refresh()
        },
        i.prototype.getSelectSkinIndex = function() {
            for (var e, t = 0; t < this.arrayCollection.length; t++) if (e = this.arrayCollection.getItemAt(t)) {
                if (0 === this.petInfo.skinId && void 0 === e.id) return t;
                if (e.id == this.petInfo.skinId) return t
            }
            return 0
        },
        i.prototype.onChooseSkin = function() {
            var t = this.arrayCollection.getItemAt(this.selectSkinIndex),
            i = 0;
            t && (t.id && (i = t.id), EventManager.dispatchEventWith(e.EventConst.SKIN_VIEW_CHANGE_SKIN, !1, t.skinPetId)),
            this.btnPutOn.visible = i !== this.petInfo.skinId && PetSkinController.instance.haveSkin(i),
            this.imgHasPutOn.visible = i === this.petInfo.skinId;
            var n = PetXMLInfo.getName(t.monId),
            r = PetSkinXMLInfo.getTypeCn(t.type),
            a = t.name,
            o = 0 === t.type;
            o ? (this.txt1.text = "默认形象", this.txt2.text = "", this.txt3.text = "原型精灵:" + n) : (this.txt1.text = r + "皮肤：" + a, this.txt2.text = "原型精灵:" + n, void 0 === t.type ? this.txt3.text = "精灵经典形象": t.shopId ? this.txt3.text = "购买获得": t.go || t.goType ? this.txt3.text = "兑换获得": this.txt3.text = "通过限时活动获得")
        },
        i.prototype.remove = function() {
            EventManager.dispatchEventWith(e.EventConst.REMOVE_SKIN_VIEW)
        },
        i
    } (e.BaseView);
    e.SkinView = t,
    __reflect(t.prototype, "petBag.SkinView")
} (petBag || (petBag = {}));
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
petBag; !
function(e) {
    var t = function(t) {
        function i() {
            var e = t.call(this) || this;
            return e.skinName = "PetBagDevelopStudyViewSkin",
            e
        }
        return __extends(i, t),
        i.prototype.init = function() {
            GuideManager.isCompleted() || (this.btnConfirm.name = "btnOk"),
            this.initRadioButton([this.btnStudy, this.btnItem]),
            this.list.itemRenderer = e.SmallItem,
            this.arrayCollection = new eui.ArrayCollection,
            this.list.dataProvider = this.arrayCollection,
            this.list.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.onClickItem, this)
        },
        i.prototype.addEvent = function() {
            var e = this;
            ImageButtonUtil.add(this.btnReset, this.resetStudy, this),
            ImageButtonUtil.add(this.btnConfirm,
            function() {
                Alert.show("是否确认分配学习力",
                function() {
                    for (var t = new egret.ByteArray,
                    i = 0; 6 > i; i++) t.writeUnsignedInt( + e["txtStudy" + i].text);
                    SocketConnection.sendByQueue(45720, [e.petInfo.catchTime, t],
                    function() {
                        e.resetStudy(),
                        e.updatePetInfo()
                    })
                })
            },
            this);
            for (var t = function(t) {
                ImageButtonUtil.add(i["btnReduce" + t],
                function() {
                    e.setStudy(t, +e["txtStudy" + t].text - 1)
                },
                i),
                ImageButtonUtil.add(i["btnAdd" + t],
                function() {
                    e.setStudy(t, +e["txtStudy" + t].text + 1)
                },
                i),
                ImageButtonUtil.add(i["btnMax" + t],
                function() {
                    e.setStudy(t, 255)
                },
                i),
                i["txtStudy" + t].addEventListener(egret.Event.CHANGE,
                function() {
                    e.setStudy(t, +e["txtStudy" + t].text)
                },
                i)
            },
            i = this, n = 0; 6 > n; n++) t(n)
        },
        i.prototype.refresh = function(e) {
            t.prototype.refresh.call(this, e);
            var i = e.ev_attack + e.ev_defence + e.ev_sa + e.ev_sd + e.ev_sp + e.ev_hp;
            this.txtStudy.text = i + "/510",
            this.txtAttack.text = e.base_attack_total + "",
            this.txtAttackStudy.text = e.ev_attack + "",
            this.txtSAttack.text = e.base_s_a_total + "",
            this.txtSAttackStudy.text = e.ev_sa + "",
            this.txtSpeed.text = e.base_speed_total + "",
            this.txtSpeedStudy.text = e.ev_sp + "",
            this.txtDefence.text = e.base_defence_total + "",
            this.txtDefenceStudy.text = e.ev_defence + "",
            this.txtSDefence.text = e.base_s_d_total + "",
            this.txtSDefenceStudy.text = e.ev_sd + "",
            this.txtHealth.text = e.base_hp_total + "",
            this.txtHealthStudy.text = e.ev_hp + ""
        },
        i.prototype.setIndex = function() {
            if (t.prototype.setIndex.call(this), this.groupStudy.visible = this.btnReset.visible = this.btnConfirm.visible = 1 == this.curIndex, this.scroller.visible = 2 == this.curIndex, 1 == this.curIndex) this.resetStudy();
            else if (2 == this.curIndex) {
                this.scroller.stopAnimation();
                var i = ItemXMLInfo.getItemIdsByBagItemType(ItemType.STUDY);
                i = i.filter(function(e) {
                    return ItemManager.getNumByID(e) > 0
                },
                this),
                i = ItemManager.filterItemIds(i),
                i = ItemManager.filterItemIdsByLimitPet(i, this.petInfo.id);
                for (var n = [], r = 0, a = i; r < a.length; r++) {
                    var o = a[r],
                    s = void 0;
                    o && (s = {},
                    s.type = "item", s.id = o, s.rarity = ItemXMLInfo.getItemRarity(o)),
                    n.push(s)
                }
                n.sort(e.SmallItem.compareRarity),
                this.arrayCollection.source = n,
                this.emptySign.visible = this.arrayCollection.length <= 0
            }
        },
        i.prototype.resetStudy = function() {
            for (var e = 0; 6 > e; e++) this["txtStudy" + e].text = "0";
            this.txtSumStudy.text = "积累学习力：" + ItemManager.getNumByID(9),
            DisplayUtil.setEnabled(this.btnReset, !1, !0),
            DisplayUtil.setEnabled(this.btnConfirm, !1, !0),
            this.emptySign.visible = !1
        },
        i.prototype.onClickItem = function(e) {
            if (e.item) {
                var t = {
                    id: e.item.id,
                    useItemFun: this.useItem,
                    caller: this
                };
                tipsPop.TipsPop.openItemPop(t)
            }
        },
        i.prototype.useItem = function(e) {
            EventManager.once(ItemUseManager.EVENT_USE_ITEM_SUCCESSFUL, this.updatePetInfo, this),
            ItemUseManager.getInstance().useItem(this.petInfo, e)
        },
        i.prototype.updatePetInfo = function() {
            EventManager.dispatchEvent(new egret.Event(e.EventConst.PET_INFO_UPDATE, !1, !1, this.petInfo))
        },
        i.prototype.setStudy = function(e, t) {
            var i = [this.petInfo.evArray[5]].concat(this.petInfo.evArray);
            if (i.length = 6, 0 > t) t = 0;
            else {
                t > 255 - i[e] && (t = 255 - i[e]);
                for (var n = 0,
                r = 0; 6 > r; r++) n += i[r],
                e != r && (n += +this["txtStudy" + r].text);
                t > 510 - n && (t = 510 - n),
                n = 0;
                for (var r = 0; 6 > r; r++) e != r && (n += +this["txtStudy" + r].text);
                var a = ItemManager.getNumByID(9);
                t + n > a && (t = a - n)
            }
            this["txtStudy" + e].text = t + "";
            for (var o = 0,
            s = 0; 6 > s; s++) o += +this["txtStudy" + s].text;
            this.txtSumStudy.text = "积累学习力：" + (ItemManager.getNumByID(9) - o);
            var u = 0 >= o;
            DisplayUtil.setEnabled(this.btnReset, !u, u),
            DisplayUtil.setEnabled(this.btnConfirm, !u, u)
        },
        i
    } (e.BaseView);
    e.StudyView = t,
    __reflect(t.prototype, "petBag.StudyView")
} (petBag || (petBag = {}));
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
petBag; !
function(e) {
    var t = function(t) {
        function i() {
            var e = t.call(this) || this;
            return e.skinName = "PetBagDevelopUpLevelViewSkin",
            e
        }
        return __extends(i, t),
        i.prototype.init = function() {
            GuideManager.isCompleted() || (this.btnHealth.name = "btnHealth", ImageButtonUtil.add(this.btnHealth,
            function() {},
            this, !1, !1)),
            t.prototype.init.call(this),
            this.initRadioButton([this.btnExp, this.btnItem, this.btnHealth]),
            this.list.itemRenderer = e.SmallItem,
            this.arrayCollection = new eui.ArrayCollection,
            this.list.dataProvider = this.arrayCollection,
            this.list.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.onClickItem, this),
            this.btnUpMax.name = "btnLv100"
        },
        i.prototype.addEvent = function() {
            var t = this;
            ImageButtonUtil.add(this.btnUpOne,
            function() {
                Alert.show("确定要消耗" + TextFormatUtil.getRedTxt(t.upLevelOneNeedExp + "") + "经验为" + TextFormatUtil.getRedTxt(t.petInfo.name) + "升级吗？",
                function() {
                    SocketConnection.sendByQueue(CommandID.PET_SET_EXP, [t.petInfo.catchTime, t.upLevelOneNeedExp],
                    function() {
                        EventManager.dispatchEvent(new egret.Event(e.EventConst.PET_INFO_UPDATE, !1, !1, t.petInfo))
                    })
                })
            },
            this),
            ImageButtonUtil.add(this.btnUpMax,
            function() {
                Alert.show("确定要消耗" + TextFormatUtil.getRedTxt(t.upLevelMaxNeedExp + "") + "经验为" + TextFormatUtil.getRedTxt(t.petInfo.name) + "升级吗？",
                function() {
                    SocketConnection.sendByQueue(CommandID.PET_SET_EXP, [t.petInfo.catchTime, t.upLevelMaxNeedExp],
                    function() {
                        EventManager.dispatchEvent(new egret.Event(e.EventConst.PET_INFO_UPDATE, !1, !1, t.petInfo))
                    })
                })
            },
            this);
            var i = [400064, 400065, 400063],
            n = function(e) {
                var n = i[ + e];
                ImageButtonUtil.add(r["imgExchange" + ( + e + 1) + "Icon"],
                function() {
                    tipsPop.TipsPop.openItemPop({
                        id: n
                    })
                },
                r),
                ImageButtonUtil.add(r["btnExchange" + ( + e + 1)],
                function() {
                    var i = ItemManager.getNumByID(n);
                    if (0 >= i) return void BubblerManager.getInstance().showText(ItemXMLInfo.getName(n) + "券数量不足，无法兑换");
                    var r = Math.min([100, 100, 10][ + e], i);
                    Alert.show("你是否确认兑换" + r + "张" + ItemXMLInfo.getName(n) + "!",
                    function() {
                        SocketConnection.sendByQueue(CommandID.EXT_EXP_TICK, [n, r],
                        function(e) {
                            var i = e.data.readUnsignedInt();
                            BubblerManager.getInstance().showText(i + "点<font color='#ff0000'>积累经验</font>已存入你的经验分配器中。", !0),
                            t.updatePetInfo()
                        })
                    })
                },
                r)
            },
            r = this;
            for (var a in i) n(a)
        },
        i.prototype.refresh = function(e) {
            var i = this;
            this.txtLevel.text = "等级：" + e.level,
            this.groupNotMax.visible = e.level < 100,
            SocketConnection.sendByQueue(CommandID.JAMES_ARMOR_QUERY_ABIBLITY, [e.catchTime],
            function(e) {
                var t = e.data;
                i.txtHealth.text = "体力上限：" + t.readUnsignedInt() + "/20"
            }),
            SocketConnection.sendByQueue(CommandID.PET_GET_LEVEL_UP_EXP, [e.catchTime],
            function(n) {
                var r = n.data;
                i.upLevelOneNeedExp = r.readUnsignedInt(),
                r.readUnsignedInt(),
                r.readUnsignedInt(),
                i.upLevelMaxNeedExp = r.readUnsignedInt(),
                i.progressExp.value = e.exp / (e.exp + i.upLevelOneNeedExp) * 100,
                t.prototype.refresh.call(i, e)
            }),
            this.txtAttack1.text = "攻击：" + e.base_attack_total,
            this.txtSAttack1.text = "特攻：" + e.base_s_a_total,
            this.txtSPeed1.text = "速度：" + e.base_speed_total,
            this.txtDefence1.text = "防御：" + e.base_defence_total,
            this.txtSDefence1.text = "特防：" + e.base_s_d_total,
            this.txtHealth1.text = "体力：" + e.base_hp_total,
            e.level < 100 && SocketConnection.sendByQueue(41435, [e.catchTime, e.level + 1],
            function(e) {
                var t = e.data;
                i.txtHealth2.text = t.readUnsignedInt() + "",
                i.txtAttack2.text = t.readUnsignedInt() + "",
                i.txtDefence2.text = t.readUnsignedInt() + "",
                i.txtSAttack2.text = t.readUnsignedInt() + "",
                i.txtSDefence2.text = t.readUnsignedInt() + "",
                i.txtSpeed2.text = t.readUnsignedInt() + ""
            })
        },
        i.prototype.setIndex = function() {
            var i = this;
            t.prototype.setIndex.call(this),
            this.groupExp.visible = 1 == this.curIndex,
            this.scroller.visible = 1 != this.curIndex,
            SocketConnection.sendByQueue(CommandID.PET_GET_EXP, [],
            function(t) {
                i.sumExp = t.data.readUnsignedInt(),
                i.txtExp.text = i.sumExp + "";
                var n = i.petInfo.level < 100 && i.sumExp >= i.upLevelOneNeedExp,
                r = i.petInfo.level < 100 && i.sumExp >= i.upLevelMaxNeedExp;
                if (DisplayUtil.setEnabled(i.btnUpOne, n, !n), DisplayUtil.setEnabled(i.btnUpMax, r, !r), 1 != i.curIndex) {
                    3 == i.curIndex && StatLogger.log("精灵背包", "精灵背包升级养成", "点击体力养成页签"),
                    i.scroller.stopAnimation();
                    var a = ItemXMLInfo.getItemIdsByBagItemType(2 == i.curIndex ? ItemType.GEM_ITEM: ItemType.POWER);
                    a = a.filter(function(e) {
                        return ItemManager.getNumByID(e) > 0
                    },
                    i),
                    a = ItemManager.filterItemIds(a),
                    a = ItemManager.filterItemIdsByLimitPet(a, i.petInfo.id);
                    for (var o = [], s = 0, u = a; s < u.length; s++) {
                        var _ = u[s],
                        l = null;
                        _ && (l = {},
                        l.type = "item", l.id = _, l.rarity = ItemXMLInfo.getItemRarity(_)),
                        o.push(l)
                    }
                    o.sort(e.SmallItem.compareRarity),
                    i.arrayCollection.replaceAll(o),
                    i.emptySign.visible = i.arrayCollection.length <= 0
                } else {
                    var a = [400064, 400065, 400063];
                    for (var h in a) {
                        var g = a[ + h],
                        c = ItemManager.getNumByID(g);
                        i["imgExchange" + ( + h + 1) + "Icon"].source = ClientConfig.getItemIcon(g),
                        i["txtExchange" + ( + h + 1)].text = c + "/9999"
                    }
                    i.emptySign.visible = !1
                }
            })
        },
        i.prototype.onClickItem = function(e) {
            if (e.item) {
                var t = {
                    id: e.item.id,
                    useItemFun: this.useItem,
                    caller: this
                };
                tipsPop.TipsPop.openItemPop(t)
            }
            GuideManager.isCompleted() || 300021 == e.item.id && EventManager.dispatchEventWith("click_item", !1, 300021)
        },
        i.prototype.useItem = function(e) {
            EventManager.once(ItemUseManager.EVENT_USE_ITEM_SUCCESSFUL, this.updatePetInfo, this),
            ItemUseManager.getInstance().useItem(this.petInfo, e)
        },
        i.prototype.updatePetInfo = function() {
            EventManager.dispatchEvent(new egret.Event(e.EventConst.PET_INFO_UPDATE, !1, !1, this.petInfo))
        },
        i
    } (e.BaseView);
    e.UpLevelView = t,
    __reflect(t.prototype, "petBag.UpLevelView")
} (petBag || (petBag = {}));
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
generateEUI.paths["resource/eui_skins/item/ItemSkinRenderSkin.exml"] = window.ItemSkinRenderSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["bg", "icon_skin", "petPosition", "name_bg", "lab_name", "img_ys", "select_img", "_rect", "grp_item"],
        this.height = 287,
        this.width = 199,
        this.elementsContent = [this.grp_item_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i.grp_item_i = function() {
        var e = new eui.Group;
        return this.grp_item = e,
        e.anchorOffsetX = 100,
        e.anchorOffsetY = 145,
        e.scaleX = 1.2,
        e.scaleY = 1.2,
        e.x = 120,
        e.y = 175,
        e.elementsContent = [this.bg_i(), this.icon_skin_i(), this.petPosition_i(), this.name_bg_i(), this.lab_name_i(), this.img_ys_i(), this.select_img_i(), this._rect_i()],
        e
    },
    i.bg_i = function() {
        var e = new eui.Image;
        return this.bg = e,
        e.height = 228,
        e.source = "pet_manual_ski_render_bg_png",
        e.visible = !0,
        e.width = 155,
        e.x = 6,
        e.y = 7,
        e
    },
    i.icon_skin_i = function() {
        var e = new eui.Image;
        return this.icon_skin = e,
        e.height = 221,
        e.visible = !0,
        e.width = 147,
        e.x = 10,
        e.y = 11,
        e
    },
    i.petPosition_i = function() {
        var e = new eui.Group;
        return this.petPosition = e,
        e.x = 83,
        e.y = 200,
        e
    },
    i.name_bg_i = function() {
        var e = new eui.Image;
        return this.name_bg = e,
        e.height = 32,
        e.source = "common_avatar_bg_size_100_100_png",
        e.width = 147,
        e.x = 10,
        e.y = 200,
        e
    },
    i.lab_name_i = function() {
        var e = new eui.Label;
        return this.lab_name = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "精灵皮肤",
        e.textAlign = "center",
        e.textColor = 9025023,
        e.width = 147,
        e.x = 10,
        e.y = 207,
        e
    },
    i.img_ys_i = function() {
        var e = new eui.Image;
        return this.img_ys = e,
        e.scaleX = .6,
        e.scaleY = .6,
        e.source = "common_pet_skin_icon_0_png",
        e.visible = !0,
        e
    },
    i.select_img_i = function() {
        var e = new eui.Image;
        return this.select_img = e,
        e.height = 239,
        e.scale9Grid = new egret.Rectangle(21, 21, 2, 2),
        e.source = "pet_bag_pet_pop_xzk_png",
        e.visible = !0,
        e.width = 166,
        e.x = 0,
        e.y = 0,
        e
    },
    i._rect_i = function() {
        var e = new eui.Rect;
        return this._rect = e,
        e.alpha = .6,
        e.height = 228,
        e.visible = !0,
        e.width = 155,
        e.x = 6,
        e.y = 7,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/item/PetBagChangePopPetItemSkin.exml"] = window.PetBagChangePopPetItemSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["txtName", "imgHead", "imgTeamTag", "imgRoomTag", "txtLevel", "imgAttr"],
        this.height = 136,
        this.width = 111,
        this.elementsContent = [this._Image1_i(), this.txtName_i(), this.imgHead_i(), this.imgTeamTag_i(), this.imgRoomTag_i(), this.txtLevel_i(), this._Image2_i(), this.imgAttr_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Image1_i = function() {
        var e = new eui.Image;
        return e.height = 136,
        e.source = "pet_bag_main_panep_pet_item_imgbg_png",
        e.visible = !0,
        e.width = 111,
        e.x = 0,
        e.y = 0,
        e
    },
    i.txtName_i = function() {
        var e = new eui.Label;
        return this.txtName = e,
        e.fontFamily = "MFShangHei",
        e.horizontalCenter = 0,
        e.size = 16,
        e.textColor = 9025023,
        e.y = 110,
        e
    },
    i.imgHead_i = function() {
        var e = new eui.Image;
        return this.imgHead = e,
        e.height = 102,
        e.width = 105,
        e.x = 3,
        e.y = 3,
        e
    },
    i.imgTeamTag_i = function() {
        var e = new eui.Image;
        return this.imgTeamTag = e,
        e.source = "pet_bag_change_pop_pet_item_imgteamtag_png",
        e.visible = !1,
        e.x = 7,
        e.y = 7,
        e
    },
    i.imgRoomTag_i = function() {
        var e = new eui.Image;
        return this.imgRoomTag = e,
        e.source = "pet_bag_change_pop_pet_item_imgroomtag_png",
        e.visible = !1,
        e.x = 7,
        e.y = 7,
        e
    },
    i.txtLevel_i = function() {
        var e = new eui.Label;
        return this.txtLevel = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.stroke = 1,
        e.strokeColor = 1320013,
        e.text = "LV.",
        e.textColor = 16514896,
        e.x = 4,
        e.y = 86,
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_change_pop_pet_item_imgattrbg_png",
        e.x = 73,
        e.y = 2,
        e
    },
    i.imgAttr_i = function() {
        var e = new eui.Image;
        return this.imgAttr = e,
        e.height = 23,
        e.width = 23,
        e.x = 86,
        e.y = 2,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/item/PetBagFifthSkillItem.exml"] = window.PetBagFifthSkillItem = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["imgSelect", "imgIcon", "txt", "txtName", "imgState", "group"],
        this.height = 101,
        this.width = 333,
        this.elementsContent = [this.imgSelect_i(), this.group_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i.imgSelect_i = function() {
        var e = new eui.Image;
        return this.imgSelect = e,
        e.bottom = 0,
        e.left = 0,
        e.right = 0,
        e.scale9Grid = new egret.Rectangle(21, 21, 2, 2),
        e.source = "common_select_rect_png",
        e.top = 0,
        e
    },
    i.group_i = function() {
        var e = new eui.Group;
        return this.group = e,
        e.bottom = 11,
        e.left = 11,
        e.right = 11,
        e.top = 11,
        e.visible = !0,
        e.elementsContent = [this._Image1_i(), this.imgIcon_i(), this.txt_i(), this.txtName_i(), this.imgState_i()],
        e
    },
    i._Image1_i = function() {
        var e = new eui.Image;
        return e.bottom = 0,
        e.left = 0,
        e.right = 0,
        e.source = "pet_bag_fifth_skill_bg_png",
        e.top = 0,
        e.visible = !0,
        e
    },
    i.imgIcon_i = function() {
        var e = new eui.Image;
        return this.imgIcon = e,
        e.height = 40,
        e.width = 40,
        e.x = 22,
        e.y = 19,
        e
    },
    i.txt_i = function() {
        var e = new eui.Label;
        return this.txt = e,
        e.fontFamily = "MFShangHei",
        e.horizontalCenter = 31,
        e.size = 18,
        e.text = "威力:100       PP:10/10",
        e.textColor = 6027519,
        e.y = 52,
        e
    },
    i.txtName_i = function() {
        var e = new eui.Label;
        return this.txtName = e,
        e.fontFamily = "MFShangHei",
        e.horizontalCenter = 30,
        e.size = 18,
        e.text = "技能技能技能技",
        e.textColor = 15068927,
        e.visible = !0,
        e.y = 16,
        e
    },
    i.imgState_i = function() {
        var e = new eui.Image;
        return this.imgState = e,
        e.right = 0,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "pet_bag_fifth_skill_hasGot_png",
        e.top = 0,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/item/PetBagMainPanelPetItemSkin.exml"] = window.PetBagMainPanelPetItemSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["imgSelected", "bg", "imgHP", "imgHead", "imgAttr", "imgFirst", "txtName", "txtLevel", "groupNull", "imgVip"],
        this.height = 106,
        this.width = 86,
        this.elementsContent = [this.imgSelected_i(), this._Group1_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i.imgSelected_i = function() {
        var e = new eui.Image;
        return this.imgSelected = e,
        e.height = 116,
        e.source = "common_select_rect_png",
        e.visible = !0,
        e.width = 92,
        e.x = -3,
        e.y = -5,
        e
    },
    i._Group1_i = function() {
        var e = new eui.Group;
        return e.x = 7,
        e.y = 7,
        e.elementsContent = [this.bg_i(), this._Image1_i(), this.imgHP_i(), this.imgHead_i(), this._Image2_i(), this.imgAttr_i(), this.imgFirst_i(), this.txtName_i(), this.txtLevel_i(), this.groupNull_i(), this.imgVip_i()],
        e
    },
    i.bg_i = function() {
        var e = new eui.Image;
        return this.bg = e,
        e.source = "pet_bag_main_panep_pet_item_imgbg_png",
        e.visible = !0,
        e.x = 0,
        e.y = 0,
        e
    },
    i._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_main_panel_imghpbg_png",
        e.width = 72,
        e.x = 0,
        e.y = 68,
        e
    },
    i.imgHP_i = function() {
        var e = new eui.Image;
        return this.imgHP = e,
        e.source = "pet_bag_main_panel_imghpline_png",
        e.visible = !0,
        e.width = 72,
        e.x = 0,
        e.y = 68,
        e
    },
    i.imgHead_i = function() {
        var e = new eui.Image;
        return this.imgHead = e,
        e.height = 66,
        e.visible = !0,
        e.width = 68,
        e.x = 2,
        e.y = 2,
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.height = 18,
        e.source = "pet_bag_change_pop_pet_item_imgattrbg_png",
        e.width = 28,
        e.x = 42,
        e.y = 2,
        e
    },
    i.imgAttr_i = function() {
        var e = new eui.Image;
        return this.imgAttr = e,
        e.height = 18,
        e.width = 18,
        e.x = 52,
        e.y = 2,
        e
    },
    i.imgFirst_i = function() {
        var e = new eui.Image;
        return this.imgFirst = e,
        e.source = "pet_bag_pet_item_imgfirst_png",
        e.visible = !0,
        e.x = 2,
        e.y = 2,
        e
    },
    i.txtName_i = function() {
        var e = new eui.Label;
        return this.txtName = e,
        e.fontFamily = "MFShangHei",
        e.horizontalCenter = 0,
        e.size = 13,
        e.textColor = 9025023,
        e.y = 75,
        e
    },
    i.txtLevel_i = function() {
        var e = new eui.Label;
        return this.txtLevel = e,
        e.fontFamily = "MFShangHei",
        e.size = 14,
        e.stroke = 1,
        e.strokeColor = 1320013,
        e.text = "LV.100",
        e.textColor = 16514896,
        e.x = 2,
        e.y = 54,
        e
    },
    i.groupNull_i = function() {
        var e = new eui.Group;
        return this.groupNull = e,
        e.visible = !1,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this._Image3_i(), this._Image4_i()],
        e
    },
    i._Image3_i = function() {
        var e = new eui.Image;
        return e.height = 92,
        e.source = "common_pet_head_bg_size_110_134_png",
        e.visible = !0,
        e.width = 72,
        e
    },
    i._Image4_i = function() {
        var e = new eui.Image;
        return e.height = 92,
        e.source = "common_pet_head_bg_null_size_110_134_png",
        e.visible = !0,
        e.width = 72,
        e
    },
    i.imgVip_i = function() {
        var e = new eui.Image;
        return this.imgVip = e,
        e.source = "vipPng_5_png",
        e.visible = !0,
        e.x = 3,
        e.y = 35,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/item/PetBagMarkAcquireItemSkin.exml"] = window.petBagMarkAcquireItemSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["imgItem", "txtNum", "txtName"],
        this.width = 73,
        this.elementsContent = [this._Image1_i(), this.imgItem_i(), this.txtNum_i(), this.txtName_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_small_item_item_imgbg_png",
        e.x = 0,
        e
    },
    i.imgItem_i = function() {
        var e = new eui.Image;
        return this.imgItem = e,
        e.height = 50,
        e.width = 50,
        e.x = 11,
        e.y = 12,
        e
    },
    i.txtNum_i = function() {
        var e = new eui.Label;
        return this.txtNum = e,
        e.fontFamily = "MFShangHei",
        e.right = 5,
        e.size = 16,
        e.stroke = 1,
        e.strokeColor = 1320013,
        e.textColor = 16777215,
        e.y = 52,
        e
    },
    i.txtName_i = function() {
        var e = new eui.Label;
        return this.txtName = e,
        e.fontFamily = "MFShangHei",
        e.horizontalCenter = 0,
        e.size = 16,
        e.textColor = 12834813,
        e.y = 75,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/item/PetBagMarkItemSkin.exml"] = window.PetBagMarkItemSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["imgSelected", "imgStoneBG", "imgMark", "txtMarkLevel", "txtMarkName", "imgStone"],
        this.height = 93,
        this.width = 74,
        this.elementsContent = [this._Image1_i(), this.imgSelected_i(), this.imgStoneBG_i(), this.imgMark_i(), this.txtMarkLevel_i(), this.txtMarkName_i(), this.imgStone_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_small_item_item_imgbg_png",
        e.x = 0,
        e.y = 2,
        e
    },
    i.imgSelected_i = function() {
        var e = new eui.Image;
        return this.imgSelected = e,
        e.height = 94,
        e.horizontalCenter = -1,
        e.scale9Grid = new egret.Rectangle(27, 27, 26, 26),
        e.source = "common_select_rect_png",
        e.verticalCenter = -9,
        e.visible = !0,
        e.width = 94,
        e
    },
    i.imgStoneBG_i = function() {
        var e = new eui.Image;
        return this.imgStoneBG = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "rarity_gem_1_png",
        e.x = 51,
        e.y = -5,
        e
    },
    i.imgMark_i = function() {
        var e = new eui.Image;
        return this.imgMark = e,
        e.height = 50,
        e.width = 50,
        e.x = 11,
        e.y = 14,
        e
    },
    i.txtMarkLevel_i = function() {
        var e = new eui.Label;
        return this.txtMarkLevel = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.stroke = 1,
        e.strokeColor = 1320013,
        e.textColor = 16777215,
        e.x = 4,
        e.y = 55,
        e
    },
    i.txtMarkName_i = function() {
        var e = new eui.Label;
        return this.txtMarkName = e,
        e.fontFamily = "MFShangHei",
        e.horizontalCenter = 0,
        e.size = 16,
        e.textColor = 12834813,
        e.y = 77,
        e
    },
    i.imgStone_i = function() {
        var e = new eui.Image;
        return this.imgStone = e,
        e.height = 18,
        e.width = 18,
        e.x = 53,
        e.y = 0,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/item/PetBagResistanceBtnSkin.exml"] = window.PetBagResistanceBtnSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["select", "imgIcon", "txtName"],
        this.height = 54,
        this.width = 123,
        this.elementsContent = [this.select_i(), this.imgIcon_i(), this.txtName_i()]
    }
    __extends(t, e);
    var i = function(e) {
        function t() {
            e.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i(), this._Label1_i()],
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "pet_bag_select_resistance_btn1_png")]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.percentHeight = 100,
            e.source = "pet_bag_select_resistance_btn2_png",
            e.percentWidth = 100,
            e
        },
        i._Label1_i = function() {
            var e = new eui.Label;
            return e.fontFamily = "MFShangHei",
            e.left = 32,
            e.size = 18,
            e.text = " ",
            e.verticalCenter = 0,
            e.width = 22,
            e
        },
        t
    } (eui.Skin),
    n = t.prototype;
    return n.select_i = function() {
        var e = new eui.ToggleButton;
        return this.select = e,
        e.bottom = 0,
        e.label = "RadioButton",
        e.left = 0,
        e.right = 0,
        e.top = 0,
        e.skinName = i,
        e
    },
    n.imgIcon_i = function() {
        var e = new eui.Image;
        return this.imgIcon = e,
        e.height = 23,
        e.left = 22,
        e.touchEnabled = !1,
        e.verticalCenter = -.5,
        e.width = 23,
        e
    },
    n.txtName_i = function() {
        var e = new eui.Label;
        return this.txtName = e,
        e.fontFamily = "MFShangHei",
        e.height = 25,
        e.left = 60,
        e.size = 18,
        e.textAlign = "center",
        e.textColor = 4252667,
        e.touchEnabled = !1,
        e.verticalAlign = "middle",
        e.verticalCenter = .5,
        e.width = 49.282,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/item/PetBagResistanceItemSkin.exml"] = window.PetBagResistanceItemSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["txtName", "txtNum", "imgIcon"],
        this.height = 33,
        this.width = 390,
        this.elementsContent = [this._Image1_i(), this.txtName_i(), this.txtNum_i(), this.imgIcon_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Image1_i = function() {
        var e = new eui.Image;
        return e.bottom = 0,
        e.left = 0,
        e.right = 0,
        e.scale9Grid = new egret.Rectangle(8, 4, 2, 4),
        e.source = "pet_bag_resistance_item_imgbg_png",
        e.top = 0,
        e
    },
    i.txtName_i = function() {
        var e = new eui.Label;
        return this.txtName = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.textColor = 16777215,
        e.x = 45,
        e.y = 8,
        e
    },
    i.txtNum_i = function() {
        var e = new eui.Label;
        return this.txtNum = e,
        e.fontFamily = "MFShangHei",
        e.right = 15,
        e.size = 16,
        e.textColor = 16777215,
        e.y = 9,
        e
    },
    i.imgIcon_i = function() {
        var e = new eui.Image;
        return this.imgIcon = e,
        e.height = 28,
        e.width = 28,
        e.x = 6,
        e.y = 2,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/item/PetBagResistanceSmallBtnSkin.exml"] = window.PetBagResistanceSmallBtnSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["select", "imgIcon", "txtName"],
        this.height = 53,
        this.width = 109,
        this.elementsContent = [this.select_i(), this.imgIcon_i(), this.txtName_i()]
    }
    __extends(t, e);
    var i = function(e) {
        function t() {
            e.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i(), this._Label1_i()],
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "pet_bag_small_select_resistance_btn1_png")]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.percentHeight = 100,
            e.source = "pet_bag_small_select_resistance_btn_png",
            e.percentWidth = 100,
            e
        },
        i._Label1_i = function() {
            var e = new eui.Label;
            return e.fontFamily = "MFShangHei",
            e.left = 32,
            e.size = 18,
            e.text = " ",
            e.verticalCenter = 0,
            e.width = 22,
            e
        },
        t
    } (eui.Skin),
    n = t.prototype;
    return n.select_i = function() {
        var e = new eui.ToggleButton;
        return this.select = e,
        e.bottom = 0,
        e.label = "RadioButton",
        e.left = 0,
        e.right = 0,
        e.top = 0,
        e.skinName = i,
        e
    },
    n.imgIcon_i = function() {
        var e = new eui.Image;
        return this.imgIcon = e,
        e.height = 23,
        e.left = 18,
        e.touchEnabled = !1,
        e.verticalCenter = -.5,
        e.width = 23,
        e
    },
    n.txtName_i = function() {
        var e = new eui.Label;
        return this.txtName = e,
        e.fontFamily = "MFShangHei",
        e.height = 25,
        e.right = 12,
        e.size = 18,
        e.textAlign = "center",
        e.textColor = 4252667,
        e.touchEnabled = !1,
        e.verticalAlign = "middle",
        e.verticalCenter = 1,
        e.width = 49,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/item/PetBagSkillItem.exml"] = window.PetBagSkillItem = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["imgSelect", "imgIcon", "txt", "txtName", "imgTag", "group", "btnChange", "imgBind"],
        this.height = 101,
        this.width = 199,
        this.elementsContent = [this.imgSelect_i(), this.group_i(), this.btnChange_i(), this.imgBind_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i.imgSelect_i = function() {
        var e = new eui.Image;
        return this.imgSelect = e,
        e.bottom = 0,
        e.left = 0,
        e.right = 0,
        e.scale9Grid = new egret.Rectangle(21, 21, 2, 2),
        e.source = "pet_bag_pet_pop_xzk_png",
        e.top = 0,
        e
    },
    i.group_i = function() {
        var e = new eui.Group;
        return this.group = e,
        e.bottom = 11,
        e.left = 11,
        e.right = 11,
        e.top = 11,
        e.visible = !0,
        e.elementsContent = [this._Image1_i(), this.imgIcon_i(), this.txt_i(), this.txtName_i(), this.imgTag_i()],
        e
    },
    i._Image1_i = function() {
        var e = new eui.Image;
        return e.bottom = 0,
        e.left = 0,
        e.right = 0,
        e.source = "pet_bag_pet_pop_52_png",
        e.top = 0,
        e.visible = !0,
        e
    },
    i.imgIcon_i = function() {
        var e = new eui.Image;
        return this.imgIcon = e,
        e.height = 25,
        e.width = 25,
        e.x = 6,
        e.y = 12,
        e
    },
    i.txt_i = function() {
        var e = new eui.Label;
        return this.txt = e,
        e.fontFamily = "MFShangHei",
        e.horizontalCenter = 0,
        e.size = 18,
        e.textColor = 6027519,
        e.y = 48,
        e
    },
    i.txtName_i = function() {
        var e = new eui.Label;
        return this.txtName = e,
        e.fontFamily = "MFShangHei",
        e.horizontalCenter = 0,
        e.size = 18,
        e.textColor = 15068927,
        e.y = 16,
        e
    },
    i.imgTag_i = function() {
        var e = new eui.Image;
        return this.imgTag = e,
        e.height = 17,
        e.right = 0,
        e.visible = !0,
        e.width = 40,
        e
    },
    i.btnChange_i = function() {
        var e = new eui.Image;
        return this.btnChange = e,
        e.right = 0,
        e.source = "pet_bag_pet_pop_btnrefresh_png",
        e.y = 6,
        e
    },
    i.imgBind_i = function() {
        var e = new eui.Image;
        return this.imgBind = e,
        e.source = "common_imgbind_png",
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/item/PetBagSmallItemItemSkin.exml"] = window.PetBagSmallItemItemSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["bg", "imgIcon", "txtNum", "txtName", "imgSelected"],
        this.height = 70,
        this.width = 70,
        this.elementsContent = [this.bg_i(), this.imgIcon_i(), this.txtNum_i(), this.txtName_i(), this.imgSelected_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i.bg_i = function() {
        var e = new eui.Image;
        return this.bg = e,
        e.height = 70,
        e.source = "rarity_item_1_png",
        e.visible = !0,
        e.width = 70,
        e.x = 0,
        e.y = 0,
        e
    },
    i.imgIcon_i = function() {
        var e = new eui.Image;
        return this.imgIcon = e,
        e.height = 50,
        e.visible = !0,
        e.width = 50,
        e.x = 10,
        e.y = 10,
        e
    },
    i.txtNum_i = function() {
        var e = new eui.Label;
        return this.txtNum = e,
        e.fontFamily = "MFShangHei",
        e.right = 5,
        e.size = 16,
        e.stroke = 1,
        e.strokeColor = 1320013,
        e.text = "99",
        e.textColor = 16777215,
        e.y = 52,
        e
    },
    i.txtName_i = function() {
        var e = new eui.Label;
        return this.txtName = e,
        e.fontFamily = "MFShangHei",
        e.horizontalCenter = 0,
        e.size = 16,
        e.stroke = 1,
        e.strokeColor = 1320013,
        e.textColor = 16777215,
        e.y = 77,
        e
    },
    i.imgSelected_i = function() {
        var e = new eui.Image;
        return this.imgSelected = e,
        e.anchorOffsetX = 0,
        e.height = 92,
        e.source = "common_select_rect_png",
        e.visible = !1,
        e.width = 92,
        e.x = -11,
        e.y = -11,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/panel/PetBagMainPanelSkin.exml"] = window.PetBagMainPanelSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["petModel", "imgAttr", "txtTopLevel", "txtName", "imgEffect", "btnTopSkin", "imgAddition", "imgBallBg1", "imgBall1", "txtBall1", "groupBall1", "imgBallBg2", "imgBall2", "txtBall2", "groupBall2", "groupTag", "groupMiddleTop", "btnCure", "btnIntoStorage", "btnStorage", "btnChange", "btnDevelop", "groupBtn", "btnBestQuality", "btnAdvance", "groupMiddle", "btnLeft", "btnRight", "imgDown", "imgUp", "btnUpLevel", "btnNature", "btnStudy", "btnEffect", "btnMark", "btnSkill", "btnResistance", "btnSkin", "btnItem", "groupRightBtn", "groupView", "groupDevelop", "groupDevelopBase", "btnBag1", "btnBag2", "btnBag3", "btnBag4", "groupPet1", "groupPet2", "groupLeft", "txtLevel", "txtNature", "txtEffect", "txtStudy", "txtHP", "txtSEffect", "txtAttack1", "txtAttack2", "txtSAttack1", "txtSAttack2", "txtSpeed1", "txtSpeed2", "txtDefence1", "txtDefence2", "txtSDefence1", "txtSDefence2", "txtHealth1", "txtHealth2", "groupStar", "groupAttrNum", "imgStone1BG", "imgMark1", "imgStone1", "txtMark1Level", "txtMark1Name", "groupMark1", "imgStone2BG", "imgMark2", "imgStone2", "txtMark2Level", "txtMark2Name", "groupMark2", "imgStone3BG", "imgMark3", "imgStone3", "imgMark3Lock", "txtMark3Level", "txtMark3Name", "groupMark3", "imgSkillIcon1", "txtSkillPP1", "txtSkillPower1", "txtSkillName1", "groupSkill1", "imgSkillIcon2", "txtSkillPP2", "txtSkillPower2", "txtSkillName2", "groupSkill2", "imgSkillIcon3", "txtSkillPP3", "txtSkillPower3", "txtSkillName3", "groupSkill3", "imgSkillIcon4", "txtSkillPP4", "txtSkillPower4", "txtSkillName4", "groupSkill4", "imgSkill5BG", "imgSkill5Txt", "txtSkill5", "groupSkill5", "txtBtnAttr", "btnAttr", "btnHelp", "groupAttr", "ballTipMask", "txtBallTipName", "txtBallTipTimes", "txtBallTipInDes", "ballTip", "imgSelected4", "imgStone4BG", "imgMark4", "imgStone4", "txtMark4Level", "txtMark4Name", "groupMark4", "imgSelected5", "imgStone5BG", "imgMark5", "imgStone5", "txtMark5Level", "txtMark5Name", "groupMark5", "imgSelected6", "imgStone6BG", "imgMark6", "imgStone6", "imgMark6Lock", "txtMark6Level", "txtMark6Name", "groupMark6", "btnMarkCenter", "btnMarkRecommend", "groupMarkLeftView", "txtItem", "imgItem", "groupMarkItem", "txtOldRace", "txtAdvRace", "signUp0", "txtDelta0", "txtValue0", "txtV0", "evLine0", "signUp1", "txtDelta1", "txtValue1", "txtV1", "evLine1", "signUp2", "txtDelta2", "txtValue2", "txtV2", "evLine2", "signUp3", "txtDelta3", "txtValue3", "txtV3", "evLine3", "signUp4", "txtDelta4", "txtValue4", "txtV4", "evLine4", "signUp5", "txtDelta5", "txtValue5", "txtV5", "evLine5", "btnDetail", "grpType", "grpRace", "btn2Get", "_listSkill", "grpSkill", "groupAdvPetDesc", "groupAll"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this._Image1_i(), this.groupAll_i()]
    }
    __extends(t, e);
    var i = function(e) {
        function t() {
            e.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i(), this._Label1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "horizontalCenter", 0), new eui.SetProperty("_Image1", "verticalCenter", 0), new eui.SetProperty("_Label1", "textColor", 9427967)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "pet_bag_main_panel_develop_base_imgbtn_png")]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.horizontalCenter = 0,
            e.source = "pet_bag_main_panel_develop_base_imgbtn_up_png",
            e.verticalCenter = 0,
            e
        },
        i._Label1_i = function() {
            var e = new eui.Label;
            return this._Label1 = e,
            e.fontFamily = "MFShangHei",
            e.horizontalCenter = 0,
            e.size = 18,
            e.text = "升级",
            e.textColor = 16777215,
            e.verticalCenter = 0,
            e
        },
        t
    } (eui.Skin),
    n = function(e) {
        function t() {
            e.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i(), this._Label1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "horizontalCenter", 0), new eui.SetProperty("_Image1", "verticalCenter", 0), new eui.SetProperty("_Label1", "textColor", 9427967)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "pet_bag_main_panel_develop_base_imgbtn_png")]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.horizontalCenter = 0,
            e.source = "pet_bag_main_panel_develop_base_imgbtn_up_png",
            e.verticalCenter = 0,
            e
        },
        i._Label1_i = function() {
            var e = new eui.Label;
            return this._Label1 = e,
            e.fontFamily = "MFShangHei",
            e.horizontalCenter = 0,
            e.size = 18,
            e.text = "性格\n天赋",
            e.textColor = 16777215,
            e.verticalCenter = 0,
            e
        },
        t
    } (eui.Skin),
    r = function(e) {
        function t() {
            e.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i(), this._Label1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "horizontalCenter", 0), new eui.SetProperty("_Image1", "verticalCenter", 0), new eui.SetProperty("_Label1", "textColor", 9427967)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "pet_bag_main_panel_develop_base_imgbtn_png")]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.horizontalCenter = 0,
            e.source = "pet_bag_main_panel_develop_base_imgbtn_up_png",
            e.verticalCenter = 0,
            e
        },
        i._Label1_i = function() {
            var e = new eui.Label;
            return this._Label1 = e,
            e.fontFamily = "MFShangHei",
            e.horizontalCenter = 0,
            e.size = 18,
            e.text = "学习力",
            e.textColor = 16777215,
            e.verticalCenter = 0,
            e
        },
        t
    } (eui.Skin),
    a = function(e) {
        function t() {
            e.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i(), this._Label1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "horizontalCenter", 0), new eui.SetProperty("_Image1", "verticalCenter", 0), new eui.SetProperty("_Label1", "textColor", 9427967)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "pet_bag_main_panel_develop_base_imgbtn_png")]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.horizontalCenter = 0,
            e.source = "pet_bag_main_panel_develop_base_imgbtn_up_png",
            e.verticalCenter = 0,
            e
        },
        i._Label1_i = function() {
            var e = new eui.Label;
            return this._Label1 = e,
            e.fontFamily = "MFShangHei",
            e.horizontalCenter = 0,
            e.size = 18,
            e.text = "特性",
            e.textColor = 16777215,
            e.verticalCenter = 0,
            e
        },
        t
    } (eui.Skin),
    o = function(e) {
        function t() {
            e.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i(), this._Label1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "horizontalCenter", 0), new eui.SetProperty("_Image1", "verticalCenter", 0), new eui.SetProperty("_Label1", "textColor", 9427967)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "pet_bag_main_panel_develop_base_imgbtn_png")]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.horizontalCenter = 0,
            e.source = "pet_bag_main_panel_develop_base_imgbtn_up_png",
            e.verticalCenter = 0,
            e
        },
        i._Label1_i = function() {
            var e = new eui.Label;
            return this._Label1 = e,
            e.fontFamily = "MFShangHei",
            e.horizontalCenter = 0,
            e.size = 18,
            e.text = "刻印",
            e.textColor = 16777215,
            e.verticalCenter = 0,
            e
        },
        t
    } (eui.Skin),
    s = function(e) {
        function t() {
            e.call(this),
            this.skinParts = [],
            this.height = 63,
            this.width = 80,
            this.elementsContent = [this._Image1_i(), this._Label1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "horizontalCenter", 0), new eui.SetProperty("_Image1", "verticalCenter", 0), new eui.SetProperty("_Label1", "textColor", 9427967)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "pet_bag_main_panel_develop_base_imgbtn_png")]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.horizontalCenter = 0,
            e.source = "pet_bag_main_panel_develop_base_imgbtn_up_png",
            e.verticalCenter = 0,
            e
        },
        i._Label1_i = function() {
            var e = new eui.Label;
            return this._Label1 = e,
            e.fontFamily = "MFShangHei",
            e.horizontalCenter = 0,
            e.size = 18,
            e.text = "技能",
            e.textColor = 16777215,
            e.verticalCenter = 0,
            e
        },
        t
    } (eui.Skin),
    u = function(e) {
        function t() {
            e.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i(), this._Label1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "horizontalCenter", 0), new eui.SetProperty("_Image1", "verticalCenter", 0), new eui.SetProperty("_Label1", "textColor", 9427967)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "pet_bag_main_panel_develop_base_imgbtn_png")]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.horizontalCenter = 0,
            e.source = "pet_bag_main_panel_develop_base_imgbtn_up_png",
            e.verticalCenter = 0,
            e
        },
        i._Label1_i = function() {
            var e = new eui.Label;
            return this._Label1 = e,
            e.fontFamily = "MFShangHei",
            e.horizontalCenter = 0,
            e.size = 18,
            e.text = "抗性",
            e.textColor = 16777215,
            e.verticalCenter = 0,
            e
        },
        t
    } (eui.Skin),
    _ = function(e) {
        function t() {
            e.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i(), this._Label1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "horizontalCenter", 0), new eui.SetProperty("_Image1", "verticalCenter", 0), new eui.SetProperty("_Label1", "textColor", 9427967)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "pet_bag_main_panel_develop_base_imgbtn_png")]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.horizontalCenter = 0,
            e.source = "pet_bag_main_panel_develop_base_imgbtn_up_png",
            e.verticalCenter = 0,
            e
        },
        i._Label1_i = function() {
            var e = new eui.Label;
            return this._Label1 = e,
            e.fontFamily = "MFShangHei",
            e.horizontalCenter = 0,
            e.size = 18,
            e.text = "皮肤",
            e.textColor = 16777215,
            e.verticalCenter = 0,
            e
        },
        t
    } (eui.Skin),
    l = function(e) {
        function t() {
            e.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i(), this._Label1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "horizontalCenter", 0), new eui.SetProperty("_Image1", "verticalCenter", 0), new eui.SetProperty("_Label1", "textColor", 9427967)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "pet_bag_main_panel_develop_base_imgbtn_png")]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.horizontalCenter = 0,
            e.source = "pet_bag_main_panel_develop_base_imgbtn_up_png",
            e.verticalCenter = 0,
            e
        },
        i._Label1_i = function() {
            var e = new eui.Label;
            return this._Label1 = e,
            e.fontFamily = "MFShangHei",
            e.horizontalCenter = 0,
            e.size = 18,
            e.text = "道具",
            e.textColor = 16777215,
            e.verticalCenter = 0,
            e
        },
        t
    } (eui.Skin),
    h = function(e) {
        function t() {
            e.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i()],
            this._Image2_i(),
            this._Label1_i(),
            this._Label2_i(),
            this.states = [new eui.State("up", [new eui.AddItems("_Label1", "", 1, "")]), new eui.State("down", [new eui.AddItems("_Label2", "", 1, ""), new eui.SetProperty("_Image1", "source", "pet_bag_main_panel_imgbagdown_png")]), new eui.State("disabled", [new eui.AddItems("_Image2", "", 1, ""), new eui.SetProperty("_Image1", "source", "pet_bag_main_panel_imgbagup_png")])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.percentHeight = 100,
            e.source = "pet_bag_main_panel_imgbagup_png",
            e.percentWidth = 100,
            e
        },
        i._Image2_i = function() {
            var e = new eui.Image;
            return this._Image2 = e,
            e.source = "pet_bag_main_panel_imgbaglock_png",
            e.x = 15,
            e.y = 0,
            e
        },
        i._Label1_i = function() {
            var e = new eui.Label;
            return this._Label1 = e,
            e.fontFamily = "MFShangHei",
            e.size = 18,
            e.text = "1",
            e.textColor = 7242936,
            e.x = 26,
            e.y = 11,
            e
        },
        i._Label2_i = function() {
            var e = new eui.Label;
            return this._Label2 = e,
            e.fontFamily = "MFShangHei",
            e.size = 18,
            e.text = "1",
            e.textColor = 8759807,
            e.x = 26,
            e.y = 11,
            e
        },
        t
    } (eui.Skin),
    g = function(e) {
        function t() {
            e.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i()],
            this._Image2_i(),
            this._Label1_i(),
            this._Label2_i(),
            this.states = [new eui.State("up", [new eui.AddItems("_Label1", "", 1, "")]), new eui.State("down", [new eui.AddItems("_Label2", "", 1, ""), new eui.SetProperty("_Image1", "source", "pet_bag_main_panel_imgbagdown_png")]), new eui.State("disabled", [new eui.AddItems("_Image2", "", 1, ""), new eui.SetProperty("_Image1", "source", "pet_bag_main_panel_imgbagup_png")])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.percentHeight = 100,
            e.source = "pet_bag_main_panel_imgbagup_png",
            e.percentWidth = 100,
            e
        },
        i._Image2_i = function() {
            var e = new eui.Image;
            return this._Image2 = e,
            e.source = "pet_bag_main_panel_imgbaglock_png",
            e.x = 15,
            e.y = 0,
            e
        },
        i._Label1_i = function() {
            var e = new eui.Label;
            return this._Label1 = e,
            e.fontFamily = "MFShangHei",
            e.size = 18,
            e.text = "2",
            e.textColor = 7242936,
            e.x = 26,
            e.y = 11,
            e
        },
        i._Label2_i = function() {
            var e = new eui.Label;
            return this._Label2 = e,
            e.fontFamily = "MFShangHei",
            e.size = 18,
            e.text = "2",
            e.textColor = 8759807,
            e.x = 26,
            e.y = 11,
            e
        },
        t
    } (eui.Skin),
    c = function(e) {
        function t() {
            e.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i()],
            this._Image2_i(),
            this._Label1_i(),
            this._Label2_i(),
            this.states = [new eui.State("up", [new eui.AddItems("_Label1", "", 1, "")]), new eui.State("down", [new eui.AddItems("_Label2", "", 1, ""), new eui.SetProperty("_Image1", "source", "pet_bag_main_panel_imgbagdown_png")]), new eui.State("disabled", [new eui.AddItems("_Image2", "", 1, ""), new eui.SetProperty("_Image1", "source", "pet_bag_main_panel_imgbagup_png")])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.percentHeight = 100,
            e.source = "pet_bag_main_panel_imgbagup_png",
            e.percentWidth = 100,
            e
        },
        i._Image2_i = function() {
            var e = new eui.Image;
            return this._Image2 = e,
            e.source = "pet_bag_main_panel_imgbaglock_png",
            e.x = 15,
            e.y = 0,
            e
        },
        i._Label1_i = function() {
            var e = new eui.Label;
            return this._Label1 = e,
            e.fontFamily = "MFShangHei",
            e.size = 18,
            e.text = "3",
            e.textColor = 7242936,
            e.x = 26,
            e.y = 11,
            e
        },
        i._Label2_i = function() {
            var e = new eui.Label;
            return this._Label2 = e,
            e.fontFamily = "MFShangHei",
            e.size = 18,
            e.text = "3",
            e.textColor = 8759807,
            e.x = 26,
            e.y = 11,
            e
        },
        t
    } (eui.Skin),
    p = function(e) {
        function t() {
            e.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i()],
            this._Image2_i(),
            this._Label1_i(),
            this._Label2_i(),
            this.states = [new eui.State("up", [new eui.AddItems("_Label1", "", 1, "")]), new eui.State("down", [new eui.AddItems("_Label2", "", 1, ""), new eui.SetProperty("_Image1", "source", "pet_bag_main_panel_imgbagdown_png")]), new eui.State("disabled", [new eui.AddItems("_Image2", "", 1, ""), new eui.SetProperty("_Image1", "source", "pet_bag_main_panel_imgbagup_png")])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.percentHeight = 100,
            e.source = "pet_bag_main_panel_imgbagup_png",
            e.percentWidth = 100,
            e
        },
        i._Image2_i = function() {
            var e = new eui.Image;
            return this._Image2 = e,
            e.source = "pet_bag_main_panel_imgbaglock_png",
            e.x = 15,
            e.y = 0,
            e
        },
        i._Label1_i = function() {
            var e = new eui.Label;
            return this._Label1 = e,
            e.fontFamily = "MFShangHei",
            e.size = 18,
            e.text = "4",
            e.textColor = 7242936,
            e.x = 26,
            e.y = 11,
            e
        },
        i._Label2_i = function() {
            var e = new eui.Label;
            return this._Label2 = e,
            e.fontFamily = "MFShangHei",
            e.size = 18,
            e.text = "4",
            e.textColor = 8759807,
            e.x = 26,
            e.y = 11,
            e
        },
        t
    } (eui.Skin),
    m = t.prototype;
    return m._Image1_i = function() {
        var e = new eui.Image;
        return e.bottom = 0,
        e.left = 0,
        e.right = 0,
        e.source = "common_ui_bg_3_jpg",
        e.top = 0,
        e
    },
    m.groupAll_i = function() {
        var e = new eui.Group;
        return this.groupAll = e,
        e.horizontalCenter = 0,
        e.width = 1136,
        e.elementsContent = [this.groupMiddle_i(), this.groupDevelopBase_i(), this.groupLeft_i(), this.groupAttr_i(), this.ballTipMask_i(), this.ballTip_i(), this.groupMarkLeftView_i(), this.groupMarkItem_i(), this.groupAdvPetDesc_i()],
        e
    },
    m.groupMiddle_i = function() {
        var e = new eui.Group;
        return this.groupMiddle = e,
        e.horizontalCenter = -29,
        e.touchEnabled = !1,
        e.visible = !1,
        e.width = 444,
        e.y = 82,
        e.elementsContent = [this.petModel_i(), this.groupMiddleTop_i(), this.groupBtn_i(), this.btnBestQuality_i(), this.btnAdvance_i()],
        e
    },
    m.petModel_i = function() {
        var e = new core.component.pet.PetModel;
        return this.petModel = e,
        e.enabled = !0,
        e.horizontalCenter = 0,
        e.scaleX = 1,
        e.scaleY = 1,
        e.touchChildren = !1,
        e.touchEnabled = !1,
        e.y = -50,
        e
    },
    m.groupMiddleTop_i = function() {
        var e = new eui.Group;
        return this.groupMiddleTop = e,
        e.cacheAsBitmap = !0,
        e.horizontalCenter = 1.5,
        e.visible = !0,
        e.y = 0,
        e.elementsContent = [this._Image2_i(), this._Group3_i(), this.groupBall1_i(), this.groupBall2_i(), this.groupTag_i()],
        e
    },
    m._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_main_panel_imgtoopbg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    m._Group3_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = 15,
        e.visible = !0,
        e.y = 4,
        e.layout = this._HorizontalLayout2_i(),
        e.elementsContent = [this._Group1_i(), this._Group2_i()],
        e
    },
    m._HorizontalLayout2_i = function() {
        var e = new eui.HorizontalLayout;
        return e.gap = 25,
        e.verticalAlign = "middle",
        e
    },
    m._Group1_i = function() {
        var e = new eui.Group;
        return e.x = 0,
        e.y = 1,
        e.layout = this._HorizontalLayout1_i(),
        e.elementsContent = [this.imgAttr_i(), this.txtTopLevel_i(), this.txtName_i(), this.imgEffect_i()],
        e
    },
    m._HorizontalLayout1_i = function() {
        var e = new eui.HorizontalLayout;
        return e.gap = 10,
        e.verticalAlign = "middle",
        e
    },
    m.imgAttr_i = function() {
        var e = new eui.Image;
        return this.imgAttr = e,
        e.height = 20,
        e.width = 20,
        e.x = 0,
        e.y = 1,
        e
    },
    m.txtTopLevel_i = function() {
        var e = new eui.Label;
        return this.txtTopLevel = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "Lv.",
        e.textColor = 16770655,
        e.x = 32,
        e.y = 4,
        e
    },
    m.txtName_i = function() {
        var e = new eui.Label;
        return this.txtName = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.textColor = 13689343,
        e.x = 82,
        e.y = 3,
        e
    },
    m.imgEffect_i = function() {
        var e = new eui.Image;
        return this.imgEffect = e,
        e.source = "pet_bag_main_panel_imgeffect_png",
        e.x = 207,
        e.y = 0,
        e
    },
    m._Group2_i = function() {
        var e = new eui.Group;
        return e.elementsContent = [this.btnTopSkin_i(), this.imgAddition_i()],
        e
    },
    m.btnTopSkin_i = function() {
        var e = new eui.Image;
        return this.btnTopSkin = e,
        e.source = "pet_bag_main_panel_btnskin_png",
        e
    },
    m.imgAddition_i = function() {
        var e = new eui.Image;
        return this.imgAddition = e,
        e.source = "imgAddition_png",
        e
    },
    m.groupBall1_i = function() {
        var e = new eui.Group;
        return this.groupBall1 = e,
        e.visible = !0,
        e.x = 387,
        e.y = 54,
        e.elementsContent = [this.imgBallBg1_i(), this.imgBall1_i(), this.txtBall1_i()],
        e
    },
    m.imgBallBg1_i = function() {
        var e = new eui.Image;
        return this.imgBallBg1 = e,
        e.height = 61,
        e.source = "pet_bag_main_panel_imgball1bg_png",
        e.visible = !0,
        e.width = 54,
        e.x = 0,
        e.y = 0,
        e
    },
    m.imgBall1_i = function() {
        var e = new eui.Image;
        return this.imgBall1 = e,
        e.height = 33,
        e.visible = !0,
        e.width = 32,
        e.x = 11,
        e.y = 14,
        e
    },
    m.txtBall1_i = function() {
        var e = new eui.Label;
        return this.txtBall1 = e,
        e.fontFamily = "MFShangHei",
        e.size = 14,
        e.stroke = 1,
        e.strokeColor = 1712696,
        e.text = "99",
        e.textColor = 16776958,
        e.x = 32,
        e.y = 32,
        e
    },
    m.groupBall2_i = function() {
        var e = new eui.Group;
        return this.groupBall2 = e,
        e.visible = !0,
        e.x = 387,
        e.y = 119,
        e.elementsContent = [this.imgBallBg2_i(), this.imgBall2_i(), this.txtBall2_i()],
        e
    },
    m.imgBallBg2_i = function() {
        var e = new eui.Image;
        return this.imgBallBg2 = e,
        e.height = 61,
        e.source = "pet_bag_main_panel_imgball1bg_png",
        e.visible = !0,
        e.width = 54,
        e.x = 0,
        e.y = 0,
        e
    },
    m.imgBall2_i = function() {
        var e = new eui.Image;
        return this.imgBall2 = e,
        e.height = 33,
        e.width = 32,
        e.x = 11,
        e.y = 14,
        e
    },
    m.txtBall2_i = function() {
        var e = new eui.Label;
        return this.txtBall2 = e,
        e.fontFamily = "MFShangHei",
        e.size = 14,
        e.stroke = 1,
        e.strokeColor = 1712696,
        e.text = "99",
        e.textColor = 16776958,
        e.x = 32,
        e.y = 33,
        e
    },
    m.groupTag_i = function() {
        var e = new eui.Group;
        return this.groupTag = e,
        e.horizontalCenter = 0,
        e.visible = !0,
        e.y = 42,
        e.layout = this._HorizontalLayout3_i(),
        e
    },
    m._HorizontalLayout3_i = function() {
        var e = new eui.HorizontalLayout;
        return e
    },
    m.groupBtn_i = function() {
        var e = new eui.Group;
        return this.groupBtn = e,
        e.cacheAsBitmap = !0,
        e.horizontalCenter = 0,
        e.visible = !0,
        e.y = 444,
        e.elementsContent = [this.btnCure_i(), this.btnIntoStorage_i(), this.btnStorage_i(), this.btnChange_i(), this.btnDevelop_i()],
        e
    },
    m.btnCure_i = function() {
        var e = new eui.Group;
        return this.btnCure = e,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this._Image3_i(), this._Label1_i()],
        e
    },
    m._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_main_panel_btnBG_png",
        e.x = 0,
        e.y = 0,
        e
    },
    m._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "治疗",
        e.x = 16,
        e.y = 33,
        e
    },
    m.btnIntoStorage_i = function() {
        var e = new eui.Group;
        return this.btnIntoStorage = e,
        e.x = 86,
        e.y = 0,
        e.elementsContent = [this._Image4_i(), this._Label2_i()],
        e
    },
    m._Image4_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_main_panel_btnBG_png",
        e.x = 0,
        e.y = 0,
        e
    },
    m._Label2_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "入库",
        e.x = 16,
        e.y = 33,
        e
    },
    m.btnStorage_i = function() {
        var e = new eui.Group;
        return this.btnStorage = e,
        e.x = 171,
        e.y = 0,
        e.elementsContent = [this._Image5_i(), this._Label3_i()],
        e
    },
    m._Image5_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_main_panel_btnBG_png",
        e.x = 0,
        e.y = 0,
        e
    },
    m._Label3_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "仓库",
        e.x = 16,
        e.y = 33,
        e
    },
    m.btnChange_i = function() {
        var e = new eui.Group;
        return this.btnChange = e,
        e.x = 256,
        e.y = 0,
        e.elementsContent = [this._Image6_i(), this._Label4_i()],
        e
    },
    m._Image6_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_main_panel_btnBG_png",
        e.x = 0,
        e.y = 0,
        e
    },
    m._Label4_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "更换",
        e.x = 16,
        e.y = 33,
        e
    },
    m.btnDevelop_i = function() {
        var e = new eui.Group;
        return this.btnDevelop = e,
        e.x = 341,
        e.y = 0,
        e.elementsContent = [this._Image7_i(), this._Label5_i()],
        e
    },
    m._Image7_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_main_panel_btnBG_png",
        e.x = 0,
        e.y = 0,
        e
    },
    m._Label5_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "养成",
        e.x = 16,
        e.y = 33,
        e
    },
    m.btnBestQuality_i = function() {
        var e = new eui.Group;
        return this.btnBestQuality = e,
        e.visible = !0,
        e.x = 327,
        e.y = 53,
        e.elementsContent = [this._Image8_i(), this._Image9_i()],
        e
    },
    m._Image8_i = function() {
        var e = new eui.Image;
        return e.height = 63,
        e.source = "pet_bag_main_panel_btnBG_png",
        e.width = 53,
        e.x = 0,
        e.y = 0,
        e
    },
    m._Image9_i = function() {
        var e = new eui.Image;
        return e.source = "petbag_add_imge_btn_tx_png",
        e.x = 7,
        e.y = 11,
        e
    },
    m.btnAdvance_i = function() {
        var e = new eui.Image;
        return this.btnAdvance = e,
        e.height = 63,
        e.source = "btnAdv_png",
        e.width = 53,
        e.x = 327,
        e.y = 115,
        e
    },
    m.groupDevelopBase_i = function() {
        var e = new eui.Group;
        return this.groupDevelopBase = e,
        e.bottom = 0,
        e.left = 0,
        e.right = 0,
        e.top = 0,
        e.touchEnabled = !1,
        e.visible = !1,
        e.elementsContent = [this.btnLeft_i(), this.btnRight_i(), this.groupDevelop_i()],
        e
    },
    m.btnLeft_i = function() {
        var e = new eui.Image;
        return this.btnLeft = e,
        e.source = "pet_bag_main_panel_develop_base_btnleft_png",
        e.x = 60,
        e.y = 347,
        e
    },
    m.btnRight_i = function() {
        var e = new eui.Image;
        return this.btnRight = e,
        e.source = "pet_bag_main_panel_develop_base_btnright_png",
        e.visible = !0,
        e.x = 550,
        e.y = 347,
        e
    },
    m.groupDevelop_i = function() {
        var e = new eui.Group;
        return this.groupDevelop = e,
        e.right = 0,
        e.visible = !0,
        e.y = 47,
        e.elementsContent = [this.imgDown_i(), this.imgUp_i(), this._Scroller1_i(), this._Image10_i(), this._Image11_i(), this._Image12_i(), this.groupView_i()],
        e
    },
    m.imgDown_i = function() {
        var e = new eui.Image;
        return this.imgDown = e,
        e.source = "pet_bag_main_panel_develop_base_imgdown_png",
        e.x = 445,
        e.y = 525,
        e
    },
    m.imgUp_i = function() {
        var e = new eui.Image;
        return this.imgUp = e,
        e.source = "pet_bag_main_panel_develop_base_imgup_png",
        e.x = 445,
        e.y = 6,
        e
    },
    m._Scroller1_i = function() {
        var e = new eui.Scroller;
        return e.height = 486,
        e.width = 85,
        e.x = 429,
        e.y = 35,
        e.viewport = this.groupRightBtn_i(),
        e
    },
    m.groupRightBtn_i = function() {
        var e = new eui.Group;
        return this.groupRightBtn = e,
        e.layout = this._VerticalLayout1_i(),
        e.elementsContent = [this.btnUpLevel_i(), this.btnNature_i(), this.btnStudy_i(), this.btnEffect_i(), this.btnMark_i(), this.btnSkill_i(), this.btnResistance_i(), this.btnSkin_i(), this.btnItem_i()],
        e
    },
    m._VerticalLayout1_i = function() {
        var e = new eui.VerticalLayout;
        return e
    },
    m.btnUpLevel_i = function() {
        var e = new eui.RadioButton;
        return this.btnUpLevel = e,
        e.height = 63,
        e.label = "1",
        e.width = 80,
        e.x = 55,
        e.y = 285,
        e.skinName = i,
        e
    },
    m.btnNature_i = function() {
        var e = new eui.RadioButton;
        return this.btnNature = e,
        e.height = 63,
        e.label = "2",
        e.width = 80,
        e.x = 65,
        e.y = 295,
        e.skinName = n,
        e
    },
    m.btnStudy_i = function() {
        var e = new eui.RadioButton;
        return this.btnStudy = e,
        e.height = 63,
        e.label = "3",
        e.width = 80,
        e.x = 75,
        e.y = 305,
        e.skinName = r,
        e
    },
    m.btnEffect_i = function() {
        var e = new eui.RadioButton;
        return this.btnEffect = e,
        e.height = 63,
        e.label = "4",
        e.width = 80,
        e.x = 85,
        e.y = 315,
        e.skinName = a,
        e
    },
    m.btnMark_i = function() {
        var e = new eui.RadioButton;
        return this.btnMark = e,
        e.height = 63,
        e.label = "5",
        e.width = 80,
        e.x = 95,
        e.y = 325,
        e.skinName = o,
        e
    },
    m.btnSkill_i = function() {
        var e = new eui.RadioButton;
        return this.btnSkill = e,
        e.height = 63,
        e.label = "6",
        e.width = 80,
        e.x = 105,
        e.y = 335,
        e.skinName = s,
        e
    },
    m.btnResistance_i = function() {
        var e = new eui.RadioButton;
        return this.btnResistance = e,
        e.height = 63,
        e.label = "7",
        e.width = 80,
        e.x = 115,
        e.y = 345,
        e.skinName = u,
        e
    },
    m.btnSkin_i = function() {
        var e = new eui.RadioButton;
        return this.btnSkin = e,
        e.height = 63,
        e.label = "8",
        e.width = 80,
        e.x = 125,
        e.y = 355,
        e.skinName = _,
        e
    },
    m.btnItem_i = function() {
        var e = new eui.RadioButton;
        return this.btnItem = e,
        e.height = 63,
        e.label = "9",
        e.width = 80,
        e.x = 135,
        e.y = 365,
        e.skinName = l,
        e
    },
    m._Image10_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_develop_view_imgDevelopBG1_png",
        e
    },
    m._Image11_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_develop_view_imgDevelopBG2_png",
        e.visible = !0,
        e
    },
    m._Image12_i = function() {
        var e = new eui.Image;
        return e.height = 487,
        e.source = "pet_bag_develop_view_imgDevelopBG3_png",
        e.visible = !0,
        e.width = 415,
        e.x = 10,
        e.y = 11,
        e
    },
    m.groupView_i = function() {
        var e = new eui.Group;
        return this.groupView = e,
        e.width = 425,
        e.x = 0,
        e.y = 23,
        e
    },
    m.groupLeft_i = function() {
        var e = new eui.Group;
        return this.groupLeft = e,
        e.scaleX = 1.12,
        e.scaleY = 1.12,
        e.visible = !1,
        e.x = 0,
        e.y = 59,
        e.elementsContent = [this._Image13_i(), this._Image14_i(), this._Image15_i(), this.btnBag1_i(), this.btnBag2_i(), this.btnBag3_i(), this.btnBag4_i(), this.groupPet1_i(), this.groupPet2_i()],
        e
    },
    m._Image13_i = function() {
        var e = new eui.Image;
        return e.height = 518,
        e.source = "pet_bag_main_panel_imgleftbg_png",
        e.visible = !0,
        e.width = 255,
        e.x = 0,
        e.y = 0,
        e
    },
    m._Image14_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_main_panel_czjl_png",
        e.x = 1,
        e.y = 0,
        e
    },
    m._Image15_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_main_panel_dmjl_png",
        e.x = 1,
        e.y = 239,
        e
    },
    m.btnBag1_i = function() {
        var e = new eui.RadioButton;
        return this.btnBag1 = e,
        e.height = 39,
        e.label = "0",
        e.visible = !0,
        e.width = 63,
        e.x = 0,
        e.y = 479,
        e.skinName = h,
        e
    },
    m.btnBag2_i = function() {
        var e = new eui.RadioButton;
        return this.btnBag2 = e,
        e.height = 39,
        e.label = "1",
        e.width = 63,
        e.x = 64,
        e.y = 479,
        e.skinName = g,
        e
    },
    m.btnBag3_i = function() {
        var e = new eui.RadioButton;
        return this.btnBag3 = e,
        e.height = 39,
        e.label = "2",
        e.width = 63,
        e.x = 129,
        e.y = 479,
        e.skinName = c,
        e
    },
    m.btnBag4_i = function() {
        var e = new eui.RadioButton;
        return this.btnBag4 = e,
        e.height = 39,
        e.label = "3",
        e.width = 63,
        e.x = 193,
        e.y = 479,
        e.skinName = p,
        e
    },
    m.groupPet1_i = function() {
        var e = new eui.Group;
        return this.groupPet1 = e,
        e.y = 30,
        e.layout = this._TileLayout1_i(),
        e
    },
    m._TileLayout1_i = function() {
        var e = new eui.TileLayout;
        return e.horizontalGap = -2,
        e.requestedColumnCount = 3,
        e.requestedRowCount = 2,
        e.verticalGap = -2,
        e
    },
    m.groupPet2_i = function() {
        var e = new eui.Group;
        return this.groupPet2 = e,
        e.y = 271,
        e.layout = this._TileLayout2_i(),
        e
    },
    m._TileLayout2_i = function() {
        var e = new eui.TileLayout;
        return e.horizontalGap = -2,
        e.requestedColumnCount = 3,
        e.requestedRowCount = 2,
        e.verticalGap = -2,
        e
    },
    m.groupAttr_i = function() {
        var e = new eui.Group;
        return this.groupAttr = e,
        e.cacheAsBitmap = !0,
        e.right = 0,
        e.visible = !1,
        e.y = 28,
        e.elementsContent = [this._Group4_i(), this.groupAttrNum_i(), this.groupMark1_i(), this.groupMark2_i(), this.groupMark3_i(), this.groupSkill1_i(), this.groupSkill2_i(), this.groupSkill3_i(), this.groupSkill4_i(), this.groupSkill5_i(), this.btnAttr_i(), this.btnHelp_i()],
        e
    },
    m._Group4_i = function() {
        var e = new eui.Group;
        return e.cacheAsBitmap = !0,
        e.visible = !0,
        e.x = 0,
        e.y = 1,
        e.elementsContent = [this._Image16_i(), this._Image17_i(), this._Image18_i(), this._Image19_i(), this._Image20_i(), this._Image21_i(), this._Image22_i(), this._Image23_i(), this._Image24_i(), this._Image25_i(), this._Image26_i(), this._Image27_i(), this._Image28_i(), this._Label6_i(), this._Label7_i(), this._Label8_i(), this._Label9_i(), this._Label10_i(), this._Label11_i(), this._Label12_i(), this._Label13_i(), this._Label14_i(), this._Label15_i(), this._Label16_i(), this._Label17_i(), this._Label18_i(), this._Label19_i(), this._Label20_i(), this._Label21_i()],
        e
    },
    m._Image16_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_develop_view_imgDevelopBG1_png",
        e.visible = !0,
        e
    },
    m._Image17_i = function() {
        var e = new eui.Image;
        return e.height = 211,
        e.source = "pet_bag_develop_view_imgDevelopBG2_png",
        e.visible = !0,
        e
    },
    m._Image18_i = function() {
        var e = new eui.Image;
        return e.height = 592,
        e.source = "pet_bag_develop_view_imgDevelopBG3_png",
        e.width = 348,
        e.x = 15,
        e.y = 11,
        e
    },
    m._Image19_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_main_panel_attr_imgtitlebg_png",
        e.x = 9,
        e.y = 23,
        e
    },
    m._Image20_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_main_panel_attr_imgtitlebg_png",
        e.x = 8,
        e.y = 260,
        e
    },
    m._Image21_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_main_panel_attr_imgtitlebg_png",
        e.visible = !0,
        e.x = 8,
        e.y = 401,
        e
    },
    m._Image22_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_main_panel_attr_imgtitlebg_png",
        e.x = 9,
        e.y = 143,
        e
    },
    m._Image23_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_main_panel_attr_f_png",
        e.x = 26,
        e.y = 58,
        e
    },
    m._Image24_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_main_panel_attr_a_png",
        e.x = 24,
        e.y = 85,
        e
    },
    m._Image25_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_main_panel_attr_d_png",
        e.x = 25,
        e.y = 111,
        e
    },
    m._Image26_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_main_panel_attr_c_png",
        e.x = 195,
        e.y = 86,
        e
    },
    m._Image27_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_main_panel_attr_b_png",
        e.x = 194,
        e.y = 110,
        e
    },
    m._Image28_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_main_panel_attr_e_png",
        e.x = 193,
        e.y = 60,
        e
    },
    m._Label6_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "基础属性",
        e.textColor = 16777215,
        e.x = 31,
        e.y = 30,
        e
    },
    m._Label7_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "战斗属性",
        e.textColor = 16777215,
        e.x = 31,
        e.y = 150,
        e
    },
    m._Label8_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "装备刻印",
        e.textColor = 16777215,
        e.x = 30,
        e.y = 268,
        e
    },
    m._Label9_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "装备技能",
        e.textColor = 16777215,
        e.x = 31,
        e.y = 408,
        e
    },
    m._Label10_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "攻击：",
        e.textColor = 11520511,
        e.x = 30,
        e.y = 181,
        e
    },
    m._Label11_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "防御：",
        e.textColor = 11520511,
        e.x = 219,
        e.y = 181,
        e
    },
    m._Label12_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "特攻：",
        e.textColor = 11520511,
        e.x = 30,
        e.y = 206,
        e
    },
    m._Label13_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "特防：",
        e.textColor = 11520511,
        e.x = 218,
        e.y = 206,
        e
    },
    m._Label14_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "速度：",
        e.textColor = 11520511,
        e.x = 30,
        e.y = 231,
        e
    },
    m._Label15_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "体力：",
        e.textColor = 11520511,
        e.x = 219,
        e.y = 231,
        e
    },
    m._Label16_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "等级：",
        e.textColor = 11520511,
        e.x = 50,
        e.y = 61,
        e
    },
    m._Label17_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "学习力：   ",
        e.textColor = 11520511,
        e.x = 218,
        e.y = 61,
        e
    },
    m._Label18_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "天赋：",
        e.textColor = 11520511,
        e.x = 50,
        e.y = 86,
        e
    },
    m._Label19_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "体力上限：",
        e.textColor = 11520511,
        e.x = 219,
        e.y = 86,
        e
    },
    m._Label20_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "性格：",
        e.textColor = 11520511,
        e.x = 51,
        e.y = 111,
        e
    },
    m._Label21_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "特性：        ",
        e.textColor = 11520511,
        e.x = 218,
        e.y = 111,
        e
    },
    m.groupAttrNum_i = function() {
        var e = new eui.Group;
        return this.groupAttrNum = e,
        e.visible = !0,
        e.x = 73,
        e.y = 60,
        e.elementsContent = [this.txtLevel_i(), this.txtNature_i(), this.txtEffect_i(), this.txtStudy_i(), this.txtHP_i(), this.txtSEffect_i(), this.txtAttack1_i(), this.txtAttack2_i(), this.txtSAttack1_i(), this.txtSAttack2_i(), this.txtSpeed1_i(), this.txtSpeed2_i(), this.txtDefence1_i(), this.txtDefence2_i(), this.txtSDefence1_i(), this.txtSDefence2_i(), this.txtHealth1_i(), this.txtHealth2_i(), this.groupStar_i()],
        e
    },
    m.txtLevel_i = function() {
        var e = new eui.Label;
        return this.txtLevel = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.textColor = 6027775,
        e.x = 22,
        e.y = 2,
        e
    },
    m.txtNature_i = function() {
        var e = new eui.Label;
        return this.txtNature = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.textColor = 6027775,
        e.x = 22,
        e.y = 26,
        e
    },
    m.txtEffect_i = function() {
        var e = new eui.Label;
        return this.txtEffect = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.textColor = 6027775,
        e.x = 22,
        e.y = 53,
        e
    },
    m.txtStudy_i = function() {
        var e = new eui.Label;
        return this.txtStudy = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.textColor = 6027775,
        e.x = 222,
        e.y = 2,
        e
    },
    m.txtHP_i = function() {
        var e = new eui.Label;
        return this.txtHP = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.textColor = 6027775,
        e.x = 222,
        e.y = 26,
        e
    },
    m.txtSEffect_i = function() {
        var e = new eui.Label;
        return this.txtSEffect = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.textColor = 6027775,
        e.x = 222,
        e.y = 53,
        e
    },
    m.txtAttack1_i = function() {
        var e = new eui.Label;
        return this.txtAttack1 = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.textColor = 6027775,
        e.x = 0,
        e.y = 121,
        e
    },
    m.txtAttack2_i = function() {
        var e = new eui.Label;
        return this.txtAttack2 = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.textColor = 16514895,
        e.x = 54,
        e.y = 121,
        e
    },
    m.txtSAttack1_i = function() {
        var e = new eui.Label;
        return this.txtSAttack1 = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.textColor = 6027775,
        e.x = 0,
        e.y = 147,
        e
    },
    m.txtSAttack2_i = function() {
        var e = new eui.Label;
        return this.txtSAttack2 = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.textColor = 16514895,
        e.x = 54,
        e.y = 147,
        e
    },
    m.txtSpeed1_i = function() {
        var e = new eui.Label;
        return this.txtSpeed1 = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.textColor = 6027775,
        e.x = 0,
        e.y = 171,
        e
    },
    m.txtSpeed2_i = function() {
        var e = new eui.Label;
        return this.txtSpeed2 = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.textColor = 16514895,
        e.x = 54,
        e.y = 171,
        e
    },
    m.txtDefence1_i = function() {
        var e = new eui.Label;
        return this.txtDefence1 = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.textColor = 6027775,
        e.x = 189,
        e.y = 121,
        e
    },
    m.txtDefence2_i = function() {
        var e = new eui.Label;
        return this.txtDefence2 = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.textColor = 16514895,
        e.x = 243,
        e.y = 121,
        e
    },
    m.txtSDefence1_i = function() {
        var e = new eui.Label;
        return this.txtSDefence1 = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.textColor = 6027775,
        e.x = 189,
        e.y = 147,
        e
    },
    m.txtSDefence2_i = function() {
        var e = new eui.Label;
        return this.txtSDefence2 = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.textColor = 16514895,
        e.x = 243,
        e.y = 147,
        e
    },
    m.txtHealth1_i = function() {
        var e = new eui.Label;
        return this.txtHealth1 = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.textColor = 6027775,
        e.x = 189,
        e.y = 171,
        e
    },
    m.txtHealth2_i = function() {
        var e = new eui.Label;
        return this.txtHealth2 = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.textColor = 16514895,
        e.x = 243,
        e.y = 171,
        e
    },
    m.groupStar_i = function() {
        var e = new eui.Group;
        return this.groupStar = e,
        e.x = 33,
        e.y = 124,
        e.elementsContent = [this._Image29_i(), this._Image30_i(), this._Image31_i(), this._Image32_i(), this._Image33_i(), this._Image34_i()],
        e
    },
    m._Image29_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_main_panel_imgstar_png",
        e.x = 189,
        e.y = 0,
        e
    },
    m._Image30_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_main_panel_imgstar_png",
        e.x = 189,
        e.y = 26,
        e
    },
    m._Image31_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_main_panel_imgstar_png",
        e.x = 189,
        e.y = 50,
        e
    },
    m._Image32_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_main_panel_imgstar_png",
        e.x = 0,
        e.y = 0,
        e
    },
    m._Image33_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_main_panel_imgstar_png",
        e.x = 0,
        e.y = 50,
        e
    },
    m._Image34_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_main_panel_imgstar_png",
        e.x = 0,
        e.y = 26,
        e
    },
    m.groupMark1_i = function() {
        var e = new eui.Group;
        return this.groupMark1 = e,
        e.visible = !0,
        e.x = 57,
        e.y = 299,
        e.elementsContent = [this._Image35_i(), this.imgStone1BG_i(), this.imgMark1_i(), this.imgStone1_i(), this.txtMark1Level_i(), this.txtMark1Name_i()],
        e
    },
    m._Image35_i = function() {
        var e = new eui.Image;
        return e.source = "common_item_bg_style_73_73_png",
        e.x = 0,
        e.y = 2,
        e
    },
    m.imgStone1BG_i = function() {
        var e = new eui.Image;
        return this.imgStone1BG = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "pet_bag_main_panel_markstonebg_png",
        e.x = 51,
        e.y = -5,
        e
    },
    m.imgMark1_i = function() {
        var e = new eui.Image;
        return this.imgMark1 = e,
        e.height = 50,
        e.width = 50,
        e.x = 11,
        e.y = 14,
        e
    },
    m.imgStone1_i = function() {
        var e = new eui.Image;
        return this.imgStone1 = e,
        e.height = 18,
        e.width = 18,
        e.x = 53,
        e.y = 0,
        e
    },
    m.txtMark1Level_i = function() {
        var e = new eui.Label;
        return this.txtMark1Level = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.stroke = 1,
        e.strokeColor = 1320013,
        e.textColor = 16777215,
        e.x = 2,
        e.y = 52,
        e
    },
    m.txtMark1Name_i = function() {
        var e = new eui.Label;
        return this.txtMark1Name = e,
        e.fontFamily = "MFShangHei",
        e.horizontalCenter = -4,
        e.size = 16,
        e.textColor = 12834813,
        e.y = 77,
        e
    },
    m.groupMark2_i = function() {
        var e = new eui.Group;
        return this.groupMark2 = e,
        e.x = 157,
        e.y = 299,
        e.elementsContent = [this._Image36_i(), this.imgStone2BG_i(), this.imgMark2_i(), this.imgStone2_i(), this.txtMark2Level_i(), this.txtMark2Name_i()],
        e
    },
    m._Image36_i = function() {
        var e = new eui.Image;
        return e.source = "common_item_bg_style_73_73_png",
        e.x = 0,
        e.y = 2,
        e
    },
    m.imgStone2BG_i = function() {
        var e = new eui.Image;
        return this.imgStone2BG = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "pet_bag_main_panel_markstonebg_png",
        e.x = 51,
        e.y = -5,
        e
    },
    m.imgMark2_i = function() {
        var e = new eui.Image;
        return this.imgMark2 = e,
        e.height = 50,
        e.width = 50,
        e.x = 11,
        e.y = 14,
        e
    },
    m.imgStone2_i = function() {
        var e = new eui.Image;
        return this.imgStone2 = e,
        e.height = 18,
        e.width = 18,
        e.x = 53,
        e.y = 0,
        e
    },
    m.txtMark2Level_i = function() {
        var e = new eui.Label;
        return this.txtMark2Level = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.stroke = 1,
        e.strokeColor = 1320013,
        e.textColor = 16777215,
        e.x = 2,
        e.y = 52,
        e
    },
    m.txtMark2Name_i = function() {
        var e = new eui.Label;
        return this.txtMark2Name = e,
        e.fontFamily = "MFShangHei",
        e.horizontalCenter = -4,
        e.size = 16,
        e.textColor = 12834813,
        e.y = 77,
        e
    },
    m.groupMark3_i = function() {
        var e = new eui.Group;
        return this.groupMark3 = e,
        e.x = 257,
        e.y = 299,
        e.elementsContent = [this._Image37_i(), this.imgStone3BG_i(), this.imgMark3_i(), this.imgStone3_i(), this.imgMark3Lock_i(), this.txtMark3Level_i(), this.txtMark3Name_i()],
        e
    },
    m._Image37_i = function() {
        var e = new eui.Image;
        return e.source = "common_item_bg_style_73_73_png",
        e.x = 0,
        e.y = 2,
        e
    },
    m.imgStone3BG_i = function() {
        var e = new eui.Image;
        return this.imgStone3BG = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "pet_bag_main_panel_markstonebg_png",
        e.visible = !0,
        e.x = 51,
        e.y = -5,
        e
    },
    m.imgMark3_i = function() {
        var e = new eui.Image;
        return this.imgMark3 = e,
        e.height = 50,
        e.width = 50,
        e.x = 11,
        e.y = 14,
        e
    },
    m.imgStone3_i = function() {
        var e = new eui.Image;
        return this.imgStone3 = e,
        e.height = 18,
        e.visible = !0,
        e.width = 18,
        e.x = 53,
        e.y = 0,
        e
    },
    m.imgMark3Lock_i = function() {
        var e = new eui.Image;
        return this.imgMark3Lock = e,
        e.source = "pet_bag_main_panel_imgbaglock_png",
        e.x = 20,
        e.y = 19,
        e
    },
    m.txtMark3Level_i = function() {
        var e = new eui.Label;
        return this.txtMark3Level = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.stroke = 1,
        e.strokeColor = 1320013,
        e.textColor = 16777215,
        e.x = 2,
        e.y = 52,
        e
    },
    m.txtMark3Name_i = function() {
        var e = new eui.Label;
        return this.txtMark3Name = e,
        e.fontFamily = "MFShangHei",
        e.horizontalCenter = -4,
        e.size = 16,
        e.textColor = 12834813,
        e.y = 77,
        e
    },
    m.groupSkill1_i = function() {
        var e = new eui.Group;
        return this.groupSkill1 = e,
        e.x = 24,
        e.y = 438,
        e.elementsContent = [this._Image38_i(), this.imgSkillIcon1_i(), this.txtSkillPP1_i(), this.txtSkillPower1_i(), this.txtSkillName1_i()],
        e
    },
    m._Image38_i = function() {
        var e = new eui.Image;
        return e.height = 73,
        e.scale9Grid = new egret.Rectangle(4, 4, 4, 4),
        e.source = "pet_bag_main_panel_imgskill1_png",
        e.visible = !0,
        e.width = 162,
        e.x = 0,
        e.y = 0,
        e
    },
    m.imgSkillIcon1_i = function() {
        var e = new eui.Image;
        return this.imgSkillIcon1 = e,
        e.height = 25,
        e.width = 25,
        e.x = 132,
        e.y = 1,
        e
    },
    m.txtSkillPP1_i = function() {
        var e = new eui.Label;
        return this.txtSkillPP1 = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.textColor = 6027519,
        e.x = 5,
        e.y = 51,
        e
    },
    m.txtSkillPower1_i = function() {
        var e = new eui.Label;
        return this.txtSkillPower1 = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.textColor = 6027519,
        e.x = 5,
        e.y = 29,
        e
    },
    m.txtSkillName1_i = function() {
        var e = new eui.Label;
        return this.txtSkillName1 = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.textColor = 15068927,
        e.x = 5,
        e.y = 6,
        e
    },
    m.groupSkill2_i = function() {
        var e = new eui.Group;
        return this.groupSkill2 = e,
        e.x = 192,
        e.y = 438,
        e.elementsContent = [this._Image39_i(), this.imgSkillIcon2_i(), this.txtSkillPP2_i(), this.txtSkillPower2_i(), this.txtSkillName2_i()],
        e
    },
    m._Image39_i = function() {
        var e = new eui.Image;
        return e.height = 73,
        e.scale9Grid = new egret.Rectangle(4, 4, 4, 4),
        e.source = "pet_bag_main_panel_imgskill1_png",
        e.width = 162,
        e.x = 0,
        e.y = 0,
        e
    },
    m.imgSkillIcon2_i = function() {
        var e = new eui.Image;
        return this.imgSkillIcon2 = e,
        e.height = 25,
        e.width = 25,
        e.x = 4,
        e.y = 1,
        e
    },
    m.txtSkillPP2_i = function() {
        var e = new eui.Label;
        return this.txtSkillPP2 = e,
        e.fontFamily = "MFShangHei",
        e.right = 3,
        e.size = 16,
        e.textColor = 6027519,
        e.x = 86,
        e.y = 51,
        e
    },
    m.txtSkillPower2_i = function() {
        var e = new eui.Label;
        return this.txtSkillPower2 = e,
        e.fontFamily = "MFShangHei",
        e.right = 3,
        e.size = 16,
        e.textColor = 6027519,
        e.x = 87,
        e.y = 29,
        e
    },
    m.txtSkillName2_i = function() {
        var e = new eui.Label;
        return this.txtSkillName2 = e,
        e.fontFamily = "MFShangHei",
        e.right = 3,
        e.size = 18,
        e.textColor = 15068927,
        e.x = 42,
        e.y = 6,
        e
    },
    m.groupSkill3_i = function() {
        var e = new eui.Group;
        return this.groupSkill3 = e,
        e.x = 24,
        e.y = 517,
        e.elementsContent = [this._Image40_i(), this.imgSkillIcon3_i(), this.txtSkillPP3_i(), this.txtSkillPower3_i(), this.txtSkillName3_i()],
        e
    },
    m._Image40_i = function() {
        var e = new eui.Image;
        return e.height = 73,
        e.scale9Grid = new egret.Rectangle(4, 4, 4, 4),
        e.source = "pet_bag_main_panel_imgskill1_png",
        e.width = 162,
        e.x = 0,
        e.y = 0,
        e
    },
    m.imgSkillIcon3_i = function() {
        var e = new eui.Image;
        return this.imgSkillIcon3 = e,
        e.height = 25,
        e.width = 25,
        e.x = 132,
        e.y = 43,
        e
    },
    m.txtSkillPP3_i = function() {
        var e = new eui.Label;
        return this.txtSkillPP3 = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.textColor = 6027519,
        e.x = 5,
        e.y = 50,
        e
    },
    m.txtSkillPower3_i = function() {
        var e = new eui.Label;
        return this.txtSkillPower3 = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.textColor = 6027519,
        e.x = 5,
        e.y = 29,
        e
    },
    m.txtSkillName3_i = function() {
        var e = new eui.Label;
        return this.txtSkillName3 = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.textColor = 15068927,
        e.x = 5,
        e.y = 6,
        e
    },
    m.groupSkill4_i = function() {
        var e = new eui.Group;
        return this.groupSkill4 = e,
        e.visible = !0,
        e.x = 192,
        e.y = 517,
        e.elementsContent = [this._Image41_i(), this.imgSkillIcon4_i(), this.txtSkillPP4_i(), this.txtSkillPower4_i(), this.txtSkillName4_i()],
        e
    },
    m._Image41_i = function() {
        var e = new eui.Image;
        return e.height = 73,
        e.scale9Grid = new egret.Rectangle(4, 4, 4, 4),
        e.source = "pet_bag_main_panel_imgskill1_png",
        e.width = 162,
        e.x = 0,
        e.y = 0,
        e
    },
    m.imgSkillIcon4_i = function() {
        var e = new eui.Image;
        return this.imgSkillIcon4 = e,
        e.height = 25,
        e.width = 25,
        e.x = 4,
        e.y = 43,
        e
    },
    m.txtSkillPP4_i = function() {
        var e = new eui.Label;
        return this.txtSkillPP4 = e,
        e.fontFamily = "MFShangHei",
        e.right = 3,
        e.size = 16,
        e.textColor = 6027519,
        e.y = 51,
        e
    },
    m.txtSkillPower4_i = function() {
        var e = new eui.Label;
        return this.txtSkillPower4 = e,
        e.fontFamily = "MFShangHei",
        e.right = 3,
        e.size = 16,
        e.textColor = 6027519,
        e.x = 87,
        e.y = 29,
        e
    },
    m.txtSkillName4_i = function() {
        var e = new eui.Label;
        return this.txtSkillName4 = e,
        e.fontFamily = "MFShangHei",
        e.right = 3,
        e.size = 18,
        e.textColor = 15068927,
        e.x = 42,
        e.y = 6,
        e
    },
    m.groupSkill5_i = function() {
        var e = new eui.Group;
        return this.groupSkill5 = e,
        e.height = 99,
        e.visible = !0,
        e.width = 83,
        e.x = 148,
        e.y = 464,
        e.elementsContent = [this.imgSkill5BG_i(), this.imgSkill5Txt_i(), this.txtSkill5_i()],
        e
    },
    m.imgSkill5BG_i = function() {
        var e = new eui.Image;
        return this.imgSkill5BG = e,
        e.bottom = 0,
        e.left = 0,
        e.right = 0,
        e.top = 0,
        e.visible = !0,
        e
    },
    m.imgSkill5Txt_i = function() {
        var e = new eui.Image;
        return this.imgSkill5Txt = e,
        e.horizontalCenter = 0,
        e.verticalCenter = 0,
        e
    },
    m.txtSkill5_i = function() {
        var e = new eui.Label;
        return this.txtSkill5 = e,
        e.fontFamily = "MFShangHei",
        e.horizontalCenter = 0,
        e.size = 12,
        e.textColor = 16514895,
        e.y = 55,
        e
    },
    m.btnAttr_i = function() {
        var e = new eui.Group;
        return this.btnAttr = e,
        e.x = 305,
        e.y = 144,
        e.elementsContent = [this._Image42_i(), this.txtBtnAttr_i()],
        e
    },
    m._Image42_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_main_panel_btnattr_png",
        e.x = 0,
        e.y = 0,
        e
    },
    m.txtBtnAttr_i = function() {
        var e = new eui.Label;
        return this.txtBtnAttr = e,
        e.fontFamily = "MFShangHei",
        e.horizontalCenter = 0,
        e.size = 16,
        e.y = 6,
        e
    },
    m.btnHelp_i = function() {
        var e = new eui.Image;
        return this.btnHelp = e,
        e.source = "pet_bag_main_panel_btnhelp_png",
        e.x = 105,
        e.y = 144,
        e
    },
    m.ballTipMask_i = function() {
        var e = new eui.Group;
        return this.ballTipMask = e,
        e.height = 640,
        e.visible = !1,
        e.width = 2e3,
        e
    },
    m.ballTip_i = function() {
        var e = new eui.Group;
        return this.ballTip = e,
        e.cacheAsBitmap = !0,
        e.visible = !1,
        e.width = 256,
        e.x = 482,
        e.y = 162,
        e.elementsContent = [this._Image43_i(), this.txtBallTipName_i(), this.txtBallTipTimes_i(), this.txtBallTipInDes_i()],
        e
    },
    m._Image43_i = function() {
        var e = new eui.Image;
        return e.height = 137,
        e.scale9Grid = new egret.Rectangle(7, 7, 6, 6),
        e.source = "pet_bag_main_panel_imgballtipbg_png",
        e.width = 256,
        e.x = 0,
        e.y = 0,
        e
    },
    m.txtBallTipName_i = function() {
        var e = new eui.Label;
        return this.txtBallTipName = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.textColor = 4187130,
        e.x = 22,
        e.y = 20,
        e
    },
    m.txtBallTipTimes_i = function() {
        var e = new eui.Label;
        return this.txtBallTipTimes = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.textColor = 6153817,
        e.x = 23,
        e.y = 49,
        e
    },
    m.txtBallTipInDes_i = function() {
        var e = new eui.Label;
        return this.txtBallTipInDes = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.textColor = 8757203,
        e.width = 211,
        e.x = 22,
        e.y = 75,
        e
    },
    m.groupMarkLeftView_i = function() {
        var e = new eui.Group;
        return this.groupMarkLeftView = e,
        e.cacheAsBitmap = !0,
        e.visible = !1,
        e.x = 159,
        e.y = 453,
        e.elementsContent = [this.groupMark4_i(), this.groupMark5_i(), this.groupMark6_i(), this.btnMarkCenter_i(), this.btnMarkRecommend_i()],
        e
    },
    m.groupMark4_i = function() {
        var e = new eui.Group;
        return this.groupMark4 = e,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this._Image44_i(), this.imgSelected4_i(), this.imgStone4BG_i(), this.imgMark4_i(), this.imgStone4_i(), this.txtMark4Level_i(), this.txtMark4Name_i()],
        e
    },
    m._Image44_i = function() {
        var e = new eui.Image;
        return e.source = "common_item_bg_style_73_73_png",
        e.x = 0,
        e.y = 2,
        e
    },
    m.imgSelected4_i = function() {
        var e = new eui.Image;
        return this.imgSelected4 = e,
        e.height = 92,
        e.scale9Grid = new egret.Rectangle(27, 27, 26, 26),
        e.source = "common_select_rect_png",
        e.visible = !0,
        e.width = 92,
        e.x = -10,
        e.y = -8,
        e
    },
    m.imgStone4BG_i = function() {
        var e = new eui.Image;
        return this.imgStone4BG = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "pet_bag_main_panel_markstonebg_png",
        e.x = 51,
        e.y = -5,
        e
    },
    m.imgMark4_i = function() {
        var e = new eui.Image;
        return this.imgMark4 = e,
        e.height = 50,
        e.width = 50,
        e.x = 11,
        e.y = 14,
        e
    },
    m.imgStone4_i = function() {
        var e = new eui.Image;
        return this.imgStone4 = e,
        e.height = 18,
        e.width = 18,
        e.x = 53,
        e.y = 0,
        e
    },
    m.txtMark4Level_i = function() {
        var e = new eui.Label;
        return this.txtMark4Level = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.stroke = 1,
        e.strokeColor = 1320013,
        e.textColor = 16777215,
        e.x = 2,
        e.y = 52,
        e
    },
    m.txtMark4Name_i = function() {
        var e = new eui.Label;
        return this.txtMark4Name = e,
        e.fontFamily = "MFShangHei",
        e.horizontalCenter = -4,
        e.size = 16,
        e.textColor = 12834813,
        e.y = 77,
        e
    },
    m.groupMark5_i = function() {
        var e = new eui.Group;
        return this.groupMark5 = e,
        e.x = 130,
        e.y = 0,
        e.elementsContent = [this._Image45_i(), this.imgSelected5_i(), this.imgStone5BG_i(), this.imgMark5_i(), this.imgStone5_i(), this.txtMark5Level_i(), this.txtMark5Name_i()],
        e
    },
    m._Image45_i = function() {
        var e = new eui.Image;
        return e.source = "common_item_bg_style_73_73_png",
        e.x = 0,
        e.y = 2,
        e
    },
    m.imgSelected5_i = function() {
        var e = new eui.Image;
        return this.imgSelected5 = e,
        e.height = 92,
        e.scale9Grid = new egret.Rectangle(27, 27, 26, 26),
        e.source = "common_select_rect_png",
        e.visible = !0,
        e.width = 92,
        e.x = -10,
        e.y = -8,
        e
    },
    m.imgStone5BG_i = function() {
        var e = new eui.Image;
        return this.imgStone5BG = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "pet_bag_main_panel_markstonebg_png",
        e.visible = !0,
        e.x = 51,
        e.y = -5,
        e
    },
    m.imgMark5_i = function() {
        var e = new eui.Image;
        return this.imgMark5 = e,
        e.height = 50,
        e.width = 50,
        e.x = 11,
        e.y = 14,
        e
    },
    m.imgStone5_i = function() {
        var e = new eui.Image;
        return this.imgStone5 = e,
        e.height = 18,
        e.visible = !0,
        e.width = 18,
        e.x = 53,
        e.y = 0,
        e
    },
    m.txtMark5Level_i = function() {
        var e = new eui.Label;
        return this.txtMark5Level = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.stroke = 1,
        e.strokeColor = 1320013,
        e.textColor = 16777215,
        e.x = 2,
        e.y = 52,
        e
    },
    m.txtMark5Name_i = function() {
        var e = new eui.Label;
        return this.txtMark5Name = e,
        e.fontFamily = "MFShangHei",
        e.horizontalCenter = -4,
        e.size = 16,
        e.textColor = 12834813,
        e.y = 77,
        e
    },
    m.groupMark6_i = function() {
        var e = new eui.Group;
        return this.groupMark6 = e,
        e.visible = !0,
        e.x = 260,
        e.y = 0,
        e.elementsContent = [this._Image46_i(), this.imgSelected6_i(), this.imgStone6BG_i(), this.imgMark6_i(), this.imgStone6_i(), this.imgMark6Lock_i(), this.txtMark6Level_i(), this.txtMark6Name_i()],
        e
    },
    m._Image46_i = function() {
        var e = new eui.Image;
        return e.source = "common_item_bg_style_73_73_png",
        e.x = 0,
        e.y = 2,
        e
    },
    m.imgSelected6_i = function() {
        var e = new eui.Image;
        return this.imgSelected6 = e,
        e.height = 92,
        e.scale9Grid = new egret.Rectangle(27, 27, 26, 26),
        e.source = "common_select_rect_png",
        e.visible = !0,
        e.width = 93,
        e.x = -10,
        e.y = -8,
        e
    },
    m.imgStone6BG_i = function() {
        var e = new eui.Image;
        return this.imgStone6BG = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "pet_bag_main_panel_markstonebg_png",
        e.x = 51,
        e.y = -5,
        e
    },
    m.imgMark6_i = function() {
        var e = new eui.Image;
        return this.imgMark6 = e,
        e.height = 50,
        e.width = 50,
        e.x = 12,
        e.y = 14,
        e
    },
    m.imgStone6_i = function() {
        var e = new eui.Image;
        return this.imgStone6 = e,
        e.height = 18,
        e.width = 18,
        e.x = 53,
        e.y = 0,
        e
    },
    m.imgMark6Lock_i = function() {
        var e = new eui.Image;
        return this.imgMark6Lock = e,
        e.source = "pet_bag_main_panel_imgbaglock_png",
        e.x = 20,
        e.y = 19,
        e
    },
    m.txtMark6Level_i = function() {
        var e = new eui.Label;
        return this.txtMark6Level = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.stroke = 1,
        e.strokeColor = 1320013,
        e.textColor = 16777215,
        e.x = 2,
        e.y = 52,
        e
    },
    m.txtMark6Name_i = function() {
        var e = new eui.Label;
        return this.txtMark6Name = e,
        e.fontFamily = "MFShangHei",
        e.horizontalCenter = -4,
        e.size = 16,
        e.textColor = 12834813,
        e.y = 77,
        e
    },
    m.btnMarkCenter_i = function() {
        var e = new eui.Group;
        return this.btnMarkCenter = e,
        e.x = 201,
        e.y = 108,
        e.elementsContent = [this._Image47_i(), this._Label22_i()],
        e
    },
    m._Image47_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_main_panel_btnyellow_png",
        e.x = 0,
        e.y = 0,
        e
    },
    m._Label22_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "REEJI",
        e.size = 20,
        e.text = "刻印中心",
        e.textColor = 10246682,
        e.visible = !0,
        e.x = 27,
        e.y = 13,
        e
    },
    m.btnMarkRecommend_i = function() {
        var e = new eui.Group;
        return this.btnMarkRecommend = e,
        e.x = 1,
        e.y = 108,
        e.elementsContent = [this._Image48_i(), this._Label23_i()],
        e
    },
    m._Image48_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_main_panel_btnblue_png",
        e.x = 0,
        e.y = 0,
        e
    },
    m._Label23_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "REEJI",
        e.size = 20,
        e.text = "刻印推荐",
        e.textColor = 2976172,
        e.visible = !0,
        e.x = 27,
        e.y = 13,
        e
    },
    m.groupMarkItem_i = function() {
        var e = new eui.Group;
        return this.groupMarkItem = e,
        e.cacheAsBitmap = !0,
        e.right = 32,
        e.visible = !0,
        e.y = 10,
        e.elementsContent = [this._Image49_i(), this.txtItem_i(), this.imgItem_i()],
        e
    },
    m._Image49_i = function() {
        var e = new eui.Image;
        return e.height = 21,
        e.source = "itemWarehouse_img_di2_png",
        e.width = 133,
        e.x = 192,
        e.y = 5,
        e
    },
    m.txtItem_i = function() {
        var e = new eui.Label;
        return this.txtItem = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "99999",
        e.textColor = 12834813,
        e.x = 230,
        e.y = 6,
        e
    },
    m.imgItem_i = function() {
        var e = new eui.Image;
        return this.imgItem = e,
        e.height = 30,
        e.width = 30,
        e.x = 174,
        e.y = 0,
        e
    },
    m.groupAdvPetDesc_i = function() {
        var e = new eui.Group;
        return this.groupAdvPetDesc = e,
        e.bottom = 0,
        e.left = 0,
        e.right = 0,
        e.top = 115,
        e.visible = !1,
        e.elementsContent = [this.grpRace_i(), this.grpSkill_i()],
        e
    },
    m.grpRace_i = function() {
        var e = new eui.Group;
        return this.grpRace = e,
        e.cacheAsBitmap = !0,
        e.left = 2,
        e.visible = !0,
        e.y = 0,
        e.elementsContent = [this._Image50_i(), this._Group5_i(), this._Group6_i(), this._Group7_i(), this._Image55_i(), this.evLine0_i(), this.evLine1_i(), this.evLine2_i(), this.evLine3_i(), this.evLine4_i(), this.evLine5_i(), this._Group8_i(), this.grpType_i()],
        e
    },
    m._Image50_i = function() {
        var e = new eui.Image;
        return e.alpha = .8,
        e.height = 444.424,
        e.scale9Grid = new egret.Rectangle(27, 27, 28, 28),
        e.source = "common_item_bg_style_70_70_png",
        e.width = 300,
        e.x = 3.44,
        e.y = .77,
        e
    },
    m._Group5_i = function() {
        var e = new eui.Group;
        return e.visible = !0,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this._Image51_i(), this._Label24_i()],
        e
    },
    m._Image51_i = function() {
        var e = new eui.Image;
        return e.height = 32.939,
        e.source = "pet_bag_main_panel_attr_imgtitlebg_png",
        e.visible = !0,
        e.width = 300,
        e.x = 0,
        e.y = 0,
        e
    },
    m._Label24_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "种族值提升",
        e.textColor = 16777215,
        e.verticalCenter = .5,
        e.visible = !0,
        e.x = 22.679,
        e
    },
    m._Group6_i = function() {
        var e = new eui.Group;
        return e.x = 14,
        e.y = 36.93,
        e.elementsContent = [this._Image52_i(), this._Label25_i()],
        e
    },
    m._Image52_i = function() {
        var e = new eui.Image;
        return e.alpha = .2,
        e.height = 25.205,
        e.source = "help_mulit_pop_bg_down_png",
        e.visible = !0,
        e.width = 86.858,
        e.x = 0,
        e.y = 0,
        e
    },
    m._Label25_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.horizontalCenter = 0,
        e.size = 16,
        e.text = "总种族值：",
        e.textColor = 16777215,
        e.verticalCenter = 0,
        e.y = 18,
        e
    },
    m._Group7_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = 0,
        e.visible = !0,
        e.y = 72.28,
        e.elementsContent = [this._Image53_i(), this._Image54_i(), this.txtOldRace_i(), this.txtAdvRace_i()],
        e
    },
    m._Image53_i = function() {
        var e = new eui.Image;
        return e.source = "advpet_zebraline_png",
        e.verticalCenter = 0,
        e.visible = !0,
        e.x = 0,
        e
    },
    m._Image54_i = function() {
        var e = new eui.Image;
        return e.source = "advpet_signright_png",
        e.verticalCenter = .5,
        e.x = 110.49,
        e
    },
    m.txtOldRace_i = function() {
        var e = new eui.Label;
        return this.txtOldRace = e,
        e.fontFamily = "MFShangHei",
        e.height = 36,
        e.size = 36,
        e.text = "705",
        e.textColor = 7331832,
        e.verticalAlign = "top",
        e.verticalCenter = 0,
        e.x = 24.66,
        e
    },
    m.txtAdvRace_i = function() {
        var e = new eui.Label;
        return this.txtAdvRace = e,
        e.fontFamily = "MFShangHei",
        e.height = 36,
        e.size = 36,
        e.text = "705",
        e.textColor = 16373061,
        e.verticalAlign = "top",
        e.verticalCenter = 0,
        e.x = 156.61,
        e.y = 0,
        e
    },
    m._Image55_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = 0,
        e.scale9Grid = new egret.Rectangle(1, 0, 8, 1),
        e.source = "common_line_01_s9_png",
        e.visible = !0,
        e.width = 276,
        e.y = 119.29,
        e
    },
    m.evLine0_i = function() {
        var e = new eui.Group;
        return this.evLine0 = e,
        e.x = 39,
        e.y = 136.43,
        e.elementsContent = [this.signUp0_i(), this._Label26_i(), this.txtDelta0_i(), this.txtValue0_i(), this.txtV0_i(), this._Image58_i()],
        e
    },
    m.signUp0_i = function() {
        var e = new eui.Group;
        return this.signUp0 = e,
        e.x = 114.34,
        e.y = 5,
        e.elementsContent = [this._Image56_i(), this._Image57_i()],
        e
    },
    m._Image56_i = function() {
        var e = new eui.Image;
        return e.source = "advpet_signup_png",
        e.visible = !0,
        e.x = 78.86,
        e.y = 1,
        e
    },
    m._Image57_i = function() {
        var e = new eui.Image;
        return e.source = "advArrow_png",
        e.x = -5.271,
        e.y = 0,
        e
    },
    m._Label26_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "攻击：",
        e.textColor = 11520511,
        e.x = 23.586,
        e.y = 3,
        e
    },
    m.txtDelta0_i = function() {
        var e = new eui.Label;
        return this.txtDelta0 = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "2",
        e.textColor = 6401399,
        e.x = 213.068,
        e.y = 2.96,
        e
    },
    m.txtValue0_i = function() {
        var e = new eui.Label;
        return this.txtValue0 = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "9999",
        e.textColor = 7331832,
        e.x = 71.586,
        e.y = 3,
        e
    },
    m.txtV0_i = function() {
        var e = new eui.Label;
        return this.txtV0 = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "9999",
        e.textColor = 7331832,
        e.x = 130,
        e.y = 3,
        e
    },
    m._Image58_i = function() {
        var e = new eui.Image;
        return e.source = "common_atk_png",
        e.visible = !0,
        e.x = -13.414,
        e.y = 0,
        e
    },
    m.evLine1_i = function() {
        var e = new eui.Group;
        return this.evLine1 = e,
        e.x = 39,
        e.y = 170.39,
        e.elementsContent = [this.signUp1_i(), this._Label27_i(), this.txtDelta1_i(), this.txtValue1_i(), this.txtV1_i(), this._Image61_i()],
        e
    },
    m.signUp1_i = function() {
        var e = new eui.Group;
        return this.signUp1 = e,
        e.x = 114.34,
        e.y = 5,
        e.elementsContent = [this._Image59_i(), this._Image60_i()],
        e
    },
    m._Image59_i = function() {
        var e = new eui.Image;
        return e.source = "advpet_signup_png",
        e.visible = !0,
        e.x = 78.86,
        e.y = 1,
        e
    },
    m._Image60_i = function() {
        var e = new eui.Image;
        return e.source = "advArrow_png",
        e.x = -5.271,
        e.y = 0,
        e
    },
    m._Label27_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "特攻：",
        e.textColor = 11520511,
        e.x = 23.586,
        e.y = 3,
        e
    },
    m.txtDelta1_i = function() {
        var e = new eui.Label;
        return this.txtDelta1 = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "2",
        e.textColor = 6401399,
        e.x = 213.068,
        e.y = 2.96,
        e
    },
    m.txtValue1_i = function() {
        var e = new eui.Label;
        return this.txtValue1 = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "9999",
        e.textColor = 7331832,
        e.x = 71.586,
        e.y = 3,
        e
    },
    m.txtV1_i = function() {
        var e = new eui.Label;
        return this.txtV1 = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "9999",
        e.textColor = 7331832,
        e.x = 130,
        e.y = 3,
        e
    },
    m._Image61_i = function() {
        var e = new eui.Image;
        return e.source = "common_satk_png",
        e.x = -13.414,
        e.y = 0,
        e
    },
    m.evLine2_i = function() {
        var e = new eui.Group;
        return this.evLine2 = e,
        e.x = 39,
        e.y = 208.03,
        e.elementsContent = [this.signUp2_i(), this._Label28_i(), this.txtDelta2_i(), this.txtValue2_i(), this.txtV2_i(), this._Image64_i()],
        e
    },
    m.signUp2_i = function() {
        var e = new eui.Group;
        return this.signUp2 = e,
        e.visible = !0,
        e.x = 114.34,
        e.y = 5,
        e.elementsContent = [this._Image62_i(), this._Image63_i()],
        e
    },
    m._Image62_i = function() {
        var e = new eui.Image;
        return e.source = "advpet_signup_png",
        e.visible = !0,
        e.x = 78.86,
        e.y = 1,
        e
    },
    m._Image63_i = function() {
        var e = new eui.Image;
        return e.source = "advArrow_png",
        e.x = -5.271,
        e.y = 0,
        e
    },
    m._Label28_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "速度：",
        e.textColor = 11520511,
        e.x = 23.586,
        e.y = 3,
        e
    },
    m.txtDelta2_i = function() {
        var e = new eui.Label;
        return this.txtDelta2 = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "2",
        e.textColor = 6401399,
        e.x = 213.068,
        e.y = 2.96,
        e
    },
    m.txtValue2_i = function() {
        var e = new eui.Label;
        return this.txtValue2 = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "9999",
        e.textColor = 7331832,
        e.x = 71.586,
        e.y = 3,
        e
    },
    m.txtV2_i = function() {
        var e = new eui.Label;
        return this.txtV2 = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "9999",
        e.textColor = 7331832,
        e.x = 130,
        e.y = 3,
        e
    },
    m._Image64_i = function() {
        var e = new eui.Image;
        return e.source = "common_speed_png",
        e.x = -13.414,
        e.y = 0,
        e
    },
    m.evLine3_i = function() {
        var e = new eui.Group;
        return this.evLine3 = e,
        e.x = 39,
        e.y = 242.49,
        e.elementsContent = [this.signUp3_i(), this._Label29_i(), this.txtDelta3_i(), this.txtValue3_i(), this.txtV3_i(), this._Image67_i()],
        e
    },
    m.signUp3_i = function() {
        var e = new eui.Group;
        return this.signUp3 = e,
        e.x = 114.34,
        e.y = 5,
        e.elementsContent = [this._Image65_i(), this._Image66_i()],
        e
    },
    m._Image65_i = function() {
        var e = new eui.Image;
        return e.source = "advpet_signup_png",
        e.visible = !0,
        e.x = 78.86,
        e.y = 1,
        e
    },
    m._Image66_i = function() {
        var e = new eui.Image;
        return e.source = "advArrow_png",
        e.x = -5.271,
        e.y = 0,
        e
    },
    m._Label29_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "防御：",
        e.textColor = 11520511,
        e.x = 23.586,
        e.y = 3,
        e
    },
    m.txtDelta3_i = function() {
        var e = new eui.Label;
        return this.txtDelta3 = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "2",
        e.textColor = 6401399,
        e.x = 213.067,
        e.y = 2.96,
        e
    },
    m.txtValue3_i = function() {
        var e = new eui.Label;
        return this.txtValue3 = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "9999",
        e.textColor = 7331832,
        e.x = 71.586,
        e.y = 3,
        e
    },
    m.txtV3_i = function() {
        var e = new eui.Label;
        return this.txtV3 = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "9999",
        e.textColor = 7331832,
        e.x = 130,
        e.y = 3,
        e
    },
    m._Image67_i = function() {
        var e = new eui.Image;
        return e.source = "common_def_png",
        e.x = -13.414,
        e.y = 0,
        e
    },
    m.evLine4_i = function() {
        var e = new eui.Group;
        return this.evLine4 = e,
        e.x = 39,
        e.y = 276.07,
        e.elementsContent = [this.signUp4_i(), this._Label30_i(), this.txtDelta4_i(), this.txtValue4_i(), this.txtV4_i(), this._Image70_i()],
        e
    },
    m.signUp4_i = function() {
        var e = new eui.Group;
        return this.signUp4 = e,
        e.x = 114.34,
        e.y = 5,
        e.elementsContent = [this._Image68_i(), this._Image69_i()],
        e
    },
    m._Image68_i = function() {
        var e = new eui.Image;
        return e.source = "advpet_signup_png",
        e.visible = !0,
        e.x = 78.86,
        e.y = 1,
        e
    },
    m._Image69_i = function() {
        var e = new eui.Image;
        return e.source = "advArrow_png",
        e.x = -5.271,
        e.y = 0,
        e
    },
    m._Label30_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "特防：",
        e.textColor = 11520511,
        e.x = 23.586,
        e.y = 3,
        e
    },
    m.txtDelta4_i = function() {
        var e = new eui.Label;
        return this.txtDelta4 = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "2",
        e.textColor = 6401399,
        e.x = 213.068,
        e.y = 2.96,
        e
    },
    m.txtValue4_i = function() {
        var e = new eui.Label;
        return this.txtValue4 = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "9999",
        e.textColor = 7331832,
        e.x = 71.586,
        e.y = 3,
        e
    },
    m.txtV4_i = function() {
        var e = new eui.Label;
        return this.txtV4 = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "9999",
        e.textColor = 7331832,
        e.x = 130,
        e.y = 3,
        e
    },
    m._Image70_i = function() {
        var e = new eui.Image;
        return e.source = "common_sdef_png",
        e.x = -13.414,
        e.y = 0,
        e
    },
    m.evLine5_i = function() {
        var e = new eui.Group;
        return this.evLine5 = e,
        e.x = 39,
        e.y = 310.03,
        e.elementsContent = [this.signUp5_i(), this._Label31_i(), this.txtDelta5_i(), this.txtValue5_i(), this.txtV5_i(), this._Image73_i()],
        e
    },
    m.signUp5_i = function() {
        var e = new eui.Group;
        return this.signUp5 = e,
        e.x = 114.34,
        e.y = 5,
        e.elementsContent = [this._Image71_i(), this._Image72_i()],
        e
    },
    m._Image71_i = function() {
        var e = new eui.Image;
        return e.source = "advpet_signup_png",
        e.visible = !0,
        e.x = 78.86,
        e.y = 1,
        e
    },
    m._Image72_i = function() {
        var e = new eui.Image;
        return e.source = "advArrow_png",
        e.x = -5.271,
        e.y = 0,
        e
    },
    m._Label31_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "体力：",
        e.textColor = 11520511,
        e.x = 23.586,
        e.y = 3,
        e
    },
    m.txtDelta5_i = function() {
        var e = new eui.Label;
        return this.txtDelta5 = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "2",
        e.textColor = 6401399,
        e.x = 213.068,
        e.y = 2.96,
        e
    },
    m.txtValue5_i = function() {
        var e = new eui.Label;
        return this.txtValue5 = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "9999",
        e.textColor = 7331832,
        e.x = 71.586,
        e.y = 3,
        e
    },
    m.txtV5_i = function() {
        var e = new eui.Label;
        return this.txtV5 = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "9999",
        e.textColor = 7331832,
        e.x = 130,
        e.y = 3,
        e
    },
    m._Image73_i = function() {
        var e = new eui.Image;
        return e.source = "common_hp_png",
        e.x = -13.413,
        e.y = 0,
        e
    },
    m._Group8_i = function() {
        var e = new eui.Group;
        return e.visible = !0,
        e.x = 0,
        e.y = 358.54,
        e.elementsContent = [this._Image74_i(), this._Label32_i(), this.btnDetail_i()],
        e
    },
    m._Image74_i = function() {
        var e = new eui.Image;
        return e.height = 32.939,
        e.source = "pet_bag_main_panel_attr_imgtitlebg_png",
        e.visible = !0,
        e.width = 300,
        e.x = 0,
        e.y = 0,
        e
    },
    m._Label32_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "特性强化",
        e.textColor = 16777215,
        e.verticalCenter = .5,
        e.x = 22.679,
        e
    },
    m.btnDetail_i = function() {
        var e = new eui.Group;
        return this.btnDetail = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.verticalCenter = 0,
        e.visible = !0,
        e.x = 190.178,
        e.elementsContent = [this._Label33_i(), this._Image75_i()],
        e
    },
    m._Label33_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "查看详情",
        e.textColor = 8301284,
        e.x = 0,
        e.y = 0,
        e
    },
    m._Image75_i = function() {
        var e = new eui.Image;
        return e.source = "advpet_excham_png",
        e.x = 73.67,
        e.y = .93,
        e
    },
    m.grpType_i = function() {
        var e = new eui.Group;
        return this.grpType = e,
        e.width = 260,
        e.x = 13.62,
        e.y = 405.89,
        e.layout = this._HorizontalLayout4_i(),
        e
    },
    m._HorizontalLayout4_i = function() {
        var e = new eui.HorizontalLayout;
        return e.gap = 10,
        e.horizontalAlign = "center",
        e.verticalAlign = "middle",
        e
    },
    m.grpSkill_i = function() {
        var e = new eui.Group;
        return this.grpSkill = e,
        e.right = 30,
        e.visible = !0,
        e.y = 0,
        e.elementsContent = [this._Image76_i(), this._Group9_i(), this.btn2Get_i(), this._Scroller2_i()],
        e
    },
    m._Image76_i = function() {
        var e = new eui.Image;
        return e.alpha = .8,
        e.height = 400.057,
        e.scale9Grid = new egret.Rectangle(27, 27, 28, 28),
        e.source = "common_item_bg_style_70_70_png",
        e.visible = !0,
        e.width = 320,
        e.x = 0,
        e.y = .77,
        e
    },
    m._Group9_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = 0,
        e.visible = !0,
        e.y = 0,
        e.elementsContent = [this._Image77_i(), this._Label34_i()],
        e
    },
    m._Image77_i = function() {
        var e = new eui.Image;
        return e.height = 32.939,
        e.source = "pet_bag_main_panel_attr_imgtitlebg_png",
        e.width = 321,
        e.x = -7.686,
        e.y = 0,
        e
    },
    m._Label34_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "新增技能",
        e.textColor = 16777215,
        e.verticalCenter = .5,
        e.x = 17.561,
        e
    },
    m.btn2Get_i = function() {
        var e = new eui.Group;
        return this.btn2Get = e,
        e.x = 95,
        e.y = 419.74,
        e.elementsContent = [this._Image78_i(), this._Label35_i()],
        e
    },
    m._Image78_i = function() {
        var e = new eui.Image;
        return e.height = 40,
        e.source = "pet_bag_main_panel_btnyellow_png",
        e.width = 130,
        e.x = 0,
        e.y = 0,
        e
    },
    m._Label35_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "REEJI",
        e.horizontalCenter = 0,
        e.size = 20,
        e.text = "前往获得",
        e.textColor = 10246682,
        e.verticalCenter = 0,
        e.visible = !0,
        e
    },
    m._Scroller2_i = function() {
        var e = new eui.Scroller;
        return e.height = 360,
        e.scaleX = 1,
        e.scaleY = 1,
        e.width = 320,
        e.x = 0,
        e.y = 40,
        e.viewport = this._listSkill_i(),
        e
    },
    m._listSkill_i = function() {
        var e = new eui.List;
        return this._listSkill = e,
        e.height = 349.27,
        e.visible = !0,
        e.width = 320,
        e.x = 0,
        e.y = 40,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/pop/MarkDecomposeConfirmPopSkin.exml"] = window.MarkDecomposeConfirmPopSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["btnClose", "btnCancel", "btnOK", "jiantou", "grpStatic", "list", "grpDynamicMarkList", "acquireList", "grpDynamicAcquireList"],
        this.height = 430,
        this.width = 753,
        this.elementsContent = [this.grpStatic_i(), this.grpDynamicMarkList_i(), this.grpDynamicAcquireList_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i.grpStatic_i = function() {
        var e = new eui.Group;
        return this.grpStatic = e,
        e.elementsContent = [this._Image1_i(), this._Image2_i(), this._Image3_i(), this._Image4_i(), this.btnClose_i(), this.btnCancel_i(), this.btnOK_i(), this.jiantou_i(), this._Image7_i(), this._Label3_i(), this._Label4_i(), this._Label5_i()],
        e
    },
    i._Image1_i = function() {
        var e = new eui.Image;
        return e.bottom = 0,
        e.left = 0,
        e.right = 0,
        e.scale9Grid = new egret.Rectangle(7, 7, 6, 3),
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "pet_bag_detail_pop_imgbg_png",
        e.top = 0,
        e.visible = !0,
        e.x = 0,
        e.y = 0,
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.scaleX = 1,
        e.scaleY = 1,
        e.source = "pet_bag_open_stone_pop_imgtitlebg_png",
        e.visible = !0,
        e.x = 0,
        e.y = 0,
        e
    },
    i._Image3_i = function() {
        var e = new eui.Image;
        return e.height = 314,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "pet_bag_change_pop_imglistbg_png",
        e.visible = !0,
        e.width = 686,
        e.x = 33,
        e.y = 43.999999999999986,
        e
    },
    i._Image4_i = function() {
        var e = new eui.Image;
        return e.scaleX = 1,
        e.scaleY = 1,
        e.source = "mark_decompose_confirm_pop_imgtitle_png",
        e.x = 33,
        e.y = 2,
        e
    },
    i.btnClose_i = function() {
        var e = new eui.Image;
        return this.btnClose = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "title_pop_2022_btnclose_png",
        e.x = 712,
        e.y = 0,
        e
    },
    i.btnCancel_i = function() {
        var e = new eui.Group;
        return this.btnCancel = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.x = 236.00000000000006,
        e.y = 362.00000000000006,
        e.elementsContent = [this._Image5_i(), this._Label1_i()],
        e
    },
    i._Image5_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_main_panel_btnblue_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "REEJI",
        e.size = 20,
        e.text = "取 消",
        e.textColor = 2976172,
        e.visible = !0,
        e.x = 44,
        e.y = 13,
        e
    },
    i.btnOK_i = function() {
        var e = new eui.Group;
        return this.btnOK = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.x = 383.00000000000006,
        e.y = 362.00000000000006,
        e.elementsContent = [this._Image6_i(), this._Label2_i()],
        e
    },
    i._Image6_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_main_panel_btnyellow_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i._Label2_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "REEJI",
        e.size = 20,
        e.text = "确 定",
        e.textColor = 10246682,
        e.visible = !0,
        e.x = 44,
        e.y = 13,
        e
    },
    i.jiantou_i = function() {
        var e = new eui.Image;
        return this.jiantou = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "pet_bag_open_stone_pop_narrow_png",
        e.x = 394.99999999999994,
        e.y = 186,
        e
    },
    i._Image7_i = function() {
        var e = new eui.Image;
        return e.scaleX = 1,
        e.scaleY = 1,
        e.source = "pet_bag_open_stone_pop_tipsbg_png",
        e.x = 33,
        e.y = 334.00000000000006,
        e
    },
    i._Label3_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.scaleX = 1,
        e.scaleY = 1,
        e.size = 18,
        e.text = "刻印分解后无法恢复，请确认是否继续分解",
        e.textColor = 8631282,
        e.x = 206.00000000000006,
        e.y = 337,
        e
    },
    i._Label4_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "REEJI",
        e.scaleX = 1,
        e.scaleY = 1,
        e.size = 17,
        e.text = "分解以下刻印",
        e.textColor = 4187130,
        e.x = 158,
        e.y = 54.000000000000014,
        e
    },
    i._Label5_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "REEJI",
        e.scaleX = 1,
        e.scaleY = 1,
        e.size = 17,
        e.text = "分解获取",
        e.textColor = 4187130,
        e.x = 544,
        e.y = 54.000000000000014,
        e
    },
    i.grpDynamicMarkList_i = function() {
        var e = new eui.Group;
        return this.grpDynamicMarkList = e,
        e.x = 50,
        e.y = 81,
        e.elementsContent = [this._Scroller1_i()],
        e
    },
    i._Scroller1_i = function() {
        var e = new eui.Scroller;
        return e.height = 245,
        e.scaleX = 1,
        e.scaleY = 1,
        e.width = 321,
        e.x = 0,
        e.y = 0,
        e.viewport = this.list_i(),
        e
    },
    i.list_i = function() {
        var e = new eui.List;
        return this.list = e,
        e.layout = this._TileLayout1_i(),
        e
    },
    i._TileLayout1_i = function() {
        var e = new eui.TileLayout;
        return e.horizontalGap = 8,
        e.paddingTop = 5,
        e.verticalGap = 14,
        e
    },
    i.grpDynamicAcquireList_i = function() {
        var e = new eui.Group;
        return this.grpDynamicAcquireList = e,
        e.x = 460,
        e.y = 81,
        e.elementsContent = [this._Scroller2_i()],
        e
    },
    i._Scroller2_i = function() {
        var e = new eui.Scroller;
        return e.height = 245,
        e.scaleX = 1,
        e.scaleY = 1,
        e.width = 238,
        e.x = 0,
        e.y = 0,
        e.viewport = this.acquireList_i(),
        e
    },
    i.acquireList_i = function() {
        var e = new eui.List;
        return this.acquireList = e,
        e.layout = this._TileLayout2_i(),
        e
    },
    i._TileLayout2_i = function() {
        var e = new eui.TileLayout;
        return e.horizontalGap = 9,
        e.verticalGap = 14,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/pop/MarkDecomposePopSkin.exml"] = window.MarkDecomposePopSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["btnClose", "list", "scroller", "grpContent", "txtSearch", "btn5", "btn4", "btn3", "btn2", "btnRight", "btnLeft", "btnDecompose", "btnReset", "tipsbg", "txtSelected", "grpSelectedCount", "txtPage", "grpPage"],
        this.elementsContent = [this._Image1_i(), this._Image2_i(), this._Image3_i(), this._Image4_i(), this.btnClose_i(), this.grpContent_i(), this._Group1_i(), this._Group2_i(), this.btnRight_i(), this.btnLeft_i(), this.btnDecompose_i(), this.btnReset_i(), this.tipsbg_i(), this.grpSelectedCount_i(), this.grpPage_i()]
    }
    __extends(t, e);
    var i = function(e) {
        function t() {
            e.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i(), this._Label1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "pet_bag_main_panel_btnrbup_png")]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "pet_bag_main_panel_btnrbdown_png"), new eui.SetProperty("_Label1", "textColor", 16777215)]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.percentHeight = 100,
            e.source = "pet_bag_main_panel_btnrbup_png",
            e.percentWidth = 100,
            e
        },
        i._Label1_i = function() {
            var e = new eui.Label;
            return this._Label1 = e,
            e.fontFamily = "MFShangHei",
            e.horizontalCenter = 0,
            e.size = 18,
            e.text = "五角刻印",
            e.textColor = 7242936,
            e.verticalCenter = 0,
            e
        },
        t
    } (eui.Skin),
    n = function(e) {
        function t() {
            e.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i(), this._Label1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "pet_bag_main_panel_btnrbup_png")]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "pet_bag_main_panel_btnrbdown_png"), new eui.SetProperty("_Label1", "textColor", 16777215)]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.percentHeight = 100,
            e.source = "pet_bag_main_panel_btnrbup_png",
            e.percentWidth = 100,
            e
        },
        i._Label1_i = function() {
            var e = new eui.Label;
            return this._Label1 = e,
            e.fontFamily = "MFShangHei",
            e.horizontalCenter = 0,
            e.size = 18,
            e.text = "四角刻印",
            e.textColor = 7242936,
            e.verticalCenter = 0,
            e.visible = !0,
            e
        },
        t
    } (eui.Skin),
    r = function(e) {
        function t() {
            e.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i(), this._Label1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "pet_bag_main_panel_btnrbup_png")]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "pet_bag_main_panel_btnrbdown_png"), new eui.SetProperty("_Label1", "textColor", 16777215)]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.percentHeight = 100,
            e.source = "pet_bag_main_panel_btnrbup_png",
            e.percentWidth = 100,
            e
        },
        i._Label1_i = function() {
            var e = new eui.Label;
            return this._Label1 = e,
            e.fontFamily = "MFShangHei",
            e.horizontalCenter = 0,
            e.size = 18,
            e.text = "三角刻印",
            e.textColor = 7242936,
            e.verticalCenter = 0,
            e.visible = !0,
            e
        },
        t
    } (eui.Skin),
    a = function(e) {
        function t() {
            e.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i(), this._Label1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "pet_bag_main_panel_btnrbup_png")]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "pet_bag_main_panel_btnrbdown_png"), new eui.SetProperty("_Label1", "textColor", 16777215)]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.percentHeight = 100,
            e.source = "pet_bag_main_panel_btnrbup_png",
            e.percentWidth = 100,
            e
        },
        i._Label1_i = function() {
            var e = new eui.Label;
            return this._Label1 = e,
            e.fontFamily = "MFShangHei",
            e.horizontalCenter = 0,
            e.size = 18,
            e.text = "二角刻印",
            e.textColor = 7242936,
            e.verticalCenter = 0,
            e.visible = !0,
            e
        },
        t
    } (eui.Skin),
    o = t.prototype;
    return o._Image1_i = function() {
        var e = new eui.Image;
        return e.bottom = 0,
        e.height = 547,
        e.left = 0,
        e.right = 0,
        e.scale9Grid = new egret.Rectangle(7, 7, 6, 3),
        e.source = "pet_bag_detail_pop_imgbg_png",
        e.top = 0,
        e.width = 997,
        e
    },
    o._Image2_i = function() {
        var e = new eui.Image;
        return e.height = 379,
        e.source = "pet_bag_change_pop_imglistbg_png",
        e.visible = !0,
        e.width = 880,
        e.x = 64,
        e.y = 96,
        e
    },
    o._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_main_bgoutsideline_png",
        e.x = -6,
        e.y = -3,
        e
    },
    o._Image4_i = function() {
        var e = new eui.Image;
        return e.source = "mark_decompose_pop_imgtitle_png",
        e.x = 35,
        e.y = 2,
        e
    },
    o.btnClose_i = function() {
        var e = new eui.Image;
        return this.btnClose = e,
        e.source = "title_pop_2022_btnclose_png",
        e.x = 962,
        e.y = 0,
        e
    },
    o.grpContent_i = function() {
        var e = new eui.Group;
        return this.grpContent = e,
        e.x = 64,
        e.y = 96,
        e.elementsContent = [this.scroller_i()],
        e
    },
    o.scroller_i = function() {
        var e = new eui.Scroller;
        return this.scroller = e,
        e.height = 379,
        e.scaleX = 1,
        e.scaleY = 1,
        e.width = 880,
        e.x = 0,
        e.y = 0,
        e.viewport = this.list_i(),
        e
    },
    o.list_i = function() {
        var e = new eui.List;
        return this.list = e,
        e.layout = this._TileLayout1_i(),
        e
    },
    o._TileLayout1_i = function() {
        var e = new eui.TileLayout;
        return e.horizontalGap = 20,
        e.paddingLeft = 29,
        e.paddingTop = 15,
        e.verticalGap = 14,
        e
    },
    o._Group1_i = function() {
        var e = new eui.Group;
        return e.x = 784,
        e.y = 60,
        e.elementsContent = [this._Image5_i(), this._Image6_i(), this.txtSearch_i()],
        e
    },
    o._Image5_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_change_pop_imgsearchbg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    o._Image6_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_change_pop_btnsearch_png",
        e.x = 131,
        e.y = 0,
        e
    },
    o.txtSearch_i = function() {
        var e = new eui.EditableText;
        return this.txtSearch = e,
        e.fontFamily = "MFShangHei",
        e.height = 17,
        e.prompt = "输入刻印名称",
        e.promptColor = 4149623,
        e.size = 16,
        e.textColor = 4149623,
        e.width = 113,
        e.x = 8,
        e.y = 6,
        e
    },
    o._Group2_i = function() {
        var e = new eui.Group;
        return e.x = 64,
        e.y = 60,
        e.layout = this._HorizontalLayout1_i(),
        e.elementsContent = [this.btn5_i(), this.btn4_i(), this.btn3_i(), this.btn2_i()],
        e
    },
    o._HorizontalLayout1_i = function() {
        var e = new eui.HorizontalLayout;
        return e.gap = 0,
        e
    },
    o.btn5_i = function() {
        var e = new eui.RadioButton;
        return this.btn5 = e,
        e.height = 35,
        e.value = "5",
        e.width = 100,
        e.x = 0,
        e.y = 0,
        e.skinName = i,
        e
    },
    o.btn4_i = function() {
        var e = new eui.RadioButton;
        return this.btn4 = e,
        e.height = 35,
        e.value = "4",
        e.width = 100,
        e.x = 100,
        e.y = 0,
        e.skinName = n,
        e
    },
    o.btn3_i = function() {
        var e = new eui.RadioButton;
        return this.btn3 = e,
        e.height = 35,
        e.value = "3",
        e.width = 100,
        e.x = 110,
        e.y = 10,
        e.skinName = r,
        e
    },
    o.btn2_i = function() {
        var e = new eui.RadioButton;
        return this.btn2 = e,
        e.height = 35,
        e.value = "2",
        e.width = 100,
        e.x = 120,
        e.y = 20,
        e.skinName = a,
        e
    },
    o.btnRight_i = function() {
        var e = new eui.Image;
        return this.btnRight = e,
        e.source = "pet_bag_main_panel_btnright_png",
        e.x = 946,
        e.y = 236,
        e
    },
    o.btnLeft_i = function() {
        var e = new eui.Image;
        return this.btnLeft = e,
        e.source = "pet_bag_main_panel_btnleft_png",
        e.x = 21,
        e.y = 236,
        e
    },
    o.btnDecompose_i = function() {
        var e = new eui.Group;
        return this.btnDecompose = e,
        e.x = 520,
        e.y = 480,
        e.elementsContent = [this._Image7_i(), this._Label1_i()],
        e
    },
    o._Image7_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_main_panel_btnyellow_png",
        e.x = 0,
        e.y = 0,
        e
    },
    o._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "REEJI",
        e.size = 20,
        e.text = "全部分解",
        e.textColor = 10246682,
        e.visible = !0,
        e.x = 27,
        e.y = 13,
        e
    },
    o.btnReset_i = function() {
        var e = new eui.Group;
        return this.btnReset = e,
        e.x = 358,
        e.y = 480,
        e.elementsContent = [this._Image8_i(), this._Label2_i()],
        e
    },
    o._Image8_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_main_panel_btnblue_png",
        e.x = 0,
        e.y = 0,
        e
    },
    o._Label2_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "REEJI",
        e.size = 20,
        e.text = "重置选择",
        e.textColor = 2976172,
        e.visible = !0,
        e.x = 27,
        e.y = 13,
        e
    },
    o.tipsbg_i = function() {
        var e = new eui.Image;
        return this.tipsbg = e,
        e.source = "pet_bag_main_panel_tipsbg_png",
        e.width = 880,
        e.x = 64,
        e.y = 449,
        e
    },
    o.grpSelectedCount_i = function() {
        var e = new eui.Group;
        return this.grpSelectedCount = e,
        e.x = 87,
        e.y = 453,
        e.elementsContent = [this.txtSelected_i()],
        e
    },
    o.txtSelected_i = function() {
        var e = new eui.Label;
        return this.txtSelected = e,
        e.fontFamily = "MFShangHei",
        e.scaleX = 1,
        e.scaleY = 1,
        e.size = 20,
        e.text = "已选择数量：",
        e.textColor = 8757203,
        e.x = 0,
        e.y = 0,
        e
    },
    o.grpPage_i = function() {
        var e = new eui.Group;
        return this.grpPage = e,
        e.right = 75,
        e.y = 453,
        e.elementsContent = [this.txtPage_i()],
        e
    },
    o.txtPage_i = function() {
        var e = new eui.Label;
        return this.txtPage = e,
        e.fontFamily = "MFShangHei",
        e.scaleX = 1,
        e.scaleY = 1,
        e.size = 20,
        e.text = "第         页",
        e.textColor = 8757203,
        e.x = 0,
        e.y = 0,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/pop/PetBagBindSkillPopSkin.exml"] = window.BindSkillPopSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["list"],
        this.height = 372,
        this.width = 632,
        this.elementsContent = [this._Rect1_i(), this._Label1_i(), this.list_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Rect1_i = function() {
        var e = new eui.Rect;
        return e.bottom = 0,
        e.fillColor = 5793928,
        e.left = 0,
        e.right = 0,
        e.top = 0,
        e
    },
    i._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.horizontalCenter = 0,
        e.size = 20,
        e.text = "该刻印镶嵌了宝石，请选择绑定对应的技能",
        e.textColor = 16777215,
        e.y = 41,
        e
    },
    i.list_i = function() {
        var e = new eui.List;
        return this.list = e,
        e.horizontalCenter = 0,
        e.verticalCenter = 0,
        e.layout = this._TileLayout1_i(),
        e
    },
    i._TileLayout1_i = function() {
        var e = new eui.TileLayout;
        return e.horizontalGap = 20,
        e.orientation = "rows",
        e.requestedColumnCount = 2,
        e.verticalGap = 20,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/pop/PetBagChangeFifthSkillPopSkin.exml"] = window.PetBagChangeFifthSkillPopSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["btnClose", "itemList", "itemGroup", "list", "skillScroller"],
        this.height = 431,
        this.width = 753,
        this.elementsContent = [this._Image1_i(), this._Image2_i(), this.btnClose_i(), this._Image3_i(), this._Image4_i(), this.itemGroup_i(), this.skillScroller_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Image1_i = function() {
        var e = new eui.Image;
        return e.bottom = 0,
        e.left = 0,
        e.right = 0,
        e.scale9Grid = new egret.Rectangle(7, 7, 6, 3),
        e.source = "pet_bag_detail_pop_imgbg_png",
        e.top = 0,
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_detail_pop_imgtitlebg_png",
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
    i._Image3_i = function() {
        var e = new eui.Image;
        return e.left = 17,
        e.right = 17,
        e.source = "pet_bag_change_pop_imglistbg_png",
        e.visible = !0,
        e.y = 44,
        e
    },
    i._Image4_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_change_fifth_skill_pop_imgtitle_png",
        e.x = 35,
        e.y = 2,
        e
    },
    i.itemGroup_i = function() {
        var e = new eui.Group;
        return this.itemGroup = e,
        e.left = 17,
        e.right = 17,
        e.y = 298,
        e.elementsContent = [this._Image5_i(), this._Group1_i(), this._Scroller1_i()],
        e
    },
    i._Image5_i = function() {
        var e = new eui.Image;
        return e.height = 118,
        e.left = 0,
        e.right = 0,
        e.source = "pet_bag_change_fifth_skill_pop_bg_png",
        e.y = 0,
        e
    },
    i._Group1_i = function() {
        var e = new eui.Group;
        return e.visible = !0,
        e.x = 0,
        e.y = 1,
        e.elementsContent = [this._Image6_i(), this._Image7_i(), this._Label1_i()],
        e
    },
    i._Image6_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_develop_mark_view_imgline_png",
        e.width = 706.948,
        e.x = 0,
        e.y = 0,
        e
    },
    i._Image7_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_skill_view_img1_png",
        e.verticalCenter = 0,
        e.visible = !0,
        e.x = 10,
        e
    },
    i._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "第五技能开启道具",
        e.textColor = 12834813,
        e.verticalCenter = 0,
        e.x = 33.603,
        e
    },
    i._Scroller1_i = function() {
        var e = new eui.Scroller;
        return e.height = 70,
        e.scaleX = 1,
        e.scaleY = 1,
        e.width = 700,
        e.x = 10,
        e.y = 42,
        e.viewport = this.itemList_i(),
        e
    },
    i.itemList_i = function() {
        var e = new eui.List;
        return this.itemList = e,
        e.height = 218,
        e.y = .869,
        e.layout = this._HorizontalLayout1_i(),
        e
    },
    i._HorizontalLayout1_i = function() {
        var e = new eui.HorizontalLayout;
        return e
    },
    i.skillScroller_i = function() {
        var e = new eui.Scroller;
        return this.skillScroller = e,
        e.height = 235,
        e.width = 700,
        e.x = 27,
        e.y = 54,
        e.viewport = this.list_i(),
        e
    },
    i.list_i = function() {
        var e = new eui.List;
        return this.list = e,
        e.height = 218,
        e.layout = this._TileLayout1_i(),
        e
    },
    i._TileLayout1_i = function() {
        var e = new eui.TileLayout;
        return e.columnAlign = "left",
        e.paddingLeft = 8,
        e.paddingRight = 8,
        e.requestedColumnCount = 2,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/pop/PetBagChangePetPopSkin.exml"] = window.PetBagChangePetPopSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["btnClose", "btnFilter", "btn1", "btn2", "txtSearch", "list"],
        this.height = 431,
        this.width = 753,
        this.elementsContent = [this._Image1_i(), this._Image2_i(), this._Image3_i(), this._Image4_i(), this.btnClose_i(), this.btnFilter_i(), this._Group1_i(), this._Group2_i(), this._Scroller1_i()]
    }
    __extends(t, e);
    var i = function(e) {
        function t() {
            e.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i(), this._Label1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "pet_bag_main_panel_btnrbup_png")]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "pet_bag_main_panel_btnrbdown_png"), new eui.SetProperty("_Label1", "textColor", 16777215)]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.percentHeight = 100,
            e.source = "pet_bag_main_panel_btnrbup_png",
            e.percentWidth = 100,
            e
        },
        i._Label1_i = function() {
            var e = new eui.Label;
            return this._Label1 = e,
            e.fontFamily = "MFShangHei",
            e.horizontalCenter = 0,
            e.size = 18,
            e.text = "精灵仓库",
            e.textColor = 7242936,
            e.verticalCenter = 0,
            e
        },
        t
    } (eui.Skin),
    n = function(e) {
        function t() {
            e.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i(), this._Label1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "pet_bag_main_panel_btnrbup_png")]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "pet_bag_main_panel_btnrbdown_png"), new eui.SetProperty("_Label1", "textColor", 16777215)]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.percentHeight = 100,
            e.source = "pet_bag_main_panel_btnrbup_png",
            e.percentWidth = 100,
            e
        },
        i._Label1_i = function() {
            var e = new eui.Label;
            return this._Label1 = e,
            e.fontFamily = "MFShangHei",
            e.horizontalCenter = 0,
            e.size = 18,
            e.text = "精英收藏",
            e.textColor = 7242936,
            e.verticalCenter = 0,
            e.visible = !0,
            e
        },
        t
    } (eui.Skin),
    r = t.prototype;
    return r._Image1_i = function() {
        var e = new eui.Image;
        return e.bottom = 0,
        e.left = 0,
        e.right = 0,
        e.scale9Grid = new egret.Rectangle(7, 7, 6, 2),
        e.source = "pet_bag_detail_pop_imgbg_png",
        e.top = 0,
        e
    },
    r._Image2_i = function() {
        var e = new eui.Image;
        return e.height = 330,
        e.source = "pet_bag_change_pop_imglistbg_png",
        e.visible = !0,
        e.width = 728,
        e.x = 12,
        e.y = 79,
        e
    },
    r._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_detail_pop_imgtitlebg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    r._Image4_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_change_pop_imgtitle_png",
        e.x = 36,
        e.y = 2,
        e
    },
    r.btnClose_i = function() {
        var e = new eui.Image;
        return this.btnClose = e,
        e.source = "title_pop_2022_btnclose_png",
        e.x = 712,
        e.y = 1,
        e
    },
    r.btnFilter_i = function() {
        var e = new eui.Image;
        return this.btnFilter = e,
        e.source = "pet_bag_use_stone_pop_btnfilter_png",
        e.x = 458,
        e.y = 43,
        e
    },
    r._Group1_i = function() {
        var e = new eui.Group;
        return e.x = 12,
        e.y = 45,
        e.elementsContent = [this.btn1_i(), this.btn2_i()],
        e
    },
    r.btn1_i = function() {
        var e = new eui.RadioButton;
        return this.btn1 = e,
        e.height = 35,
        e.width = 100,
        e.x = 0,
        e.y = 0,
        e.skinName = i,
        e
    },
    r.btn2_i = function() {
        var e = new eui.RadioButton;
        return this.btn2 = e,
        e.height = 35,
        e.width = 100,
        e.x = 100,
        e.y = 0,
        e.skinName = n,
        e
    },
    r._Group2_i = function() {
        var e = new eui.Group;
        return e.x = 581,
        e.y = 45,
        e.elementsContent = [this._Image5_i(), this._Image6_i(), this.txtSearch_i()],
        e
    },
    r._Image5_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_change_pop_imgsearchbg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    r._Image6_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_change_pop_btnsearch_png",
        e.x = 131,
        e.y = 0,
        e
    },
    r.txtSearch_i = function() {
        var e = new eui.EditableText;
        return this.txtSearch = e,
        e.fontFamily = "MFShangHei",
        e.height = 17,
        e.prompt = "输入精灵名或ID",
        e.promptColor = 4149623,
        e.size = 16,
        e.textColor = 4149623,
        e.width = 113,
        e.x = 8,
        e.y = 6,
        e
    },
    r._Scroller1_i = function() {
        var e = new eui.Scroller;
        return e.height = 320,
        e.width = 716,
        e.x = 18,
        e.y = 86,
        e.viewport = this.list_i(),
        e
    },
    r.list_i = function() {
        var e = new eui.List;
        return this.list = e,
        e.layout = this._TileLayout1_i(),
        e
    },
    r._TileLayout1_i = function() {
        var e = new eui.TileLayout;
        return e.horizontalGap = 9,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/pop/PetBagChangeSkillPopSkin.exml"] = window.PetBagChangeSkillPopSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["btnClose", "itemList", "itemGroup", "list", "skillScroller"],
        this.height = 431,
        this.width = 753,
        this.elementsContent = [this._Image1_i(), this._Image2_i(), this.btnClose_i(), this._Image3_i(), this._Image4_i(), this.itemGroup_i(), this.skillScroller_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Image1_i = function() {
        var e = new eui.Image;
        return e.bottom = 0,
        e.left = 0,
        e.right = 0,
        e.scale9Grid = new egret.Rectangle(7, 7, 6, 3),
        e.source = "pet_bag_detail_pop_imgbg_png",
        e.top = 0,
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_detail_pop_imgtitlebg_png",
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
    i._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_change_skill_pop_imgtitle_png",
        e.x = 35,
        e.y = 2,
        e
    },
    i._Image4_i = function() {
        var e = new eui.Image;
        return e.left = 17,
        e.right = 17,
        e.source = "pet_bag_change_pop_imglistbg_png",
        e.visible = !0,
        e.y = 44,
        e
    },
    i.itemGroup_i = function() {
        var e = new eui.Group;
        return this.itemGroup = e,
        e.left = 17,
        e.right = 17,
        e.y = 298,
        e.elementsContent = [this._Image5_i(), this._Group1_i(), this._Scroller1_i()],
        e
    },
    i._Image5_i = function() {
        var e = new eui.Image;
        return e.height = 118,
        e.left = 0,
        e.right = 0,
        e.source = "pet_bag_change_fifth_skill_pop_bg_png",
        e.y = 0,
        e
    },
    i._Group1_i = function() {
        var e = new eui.Group;
        return e.visible = !0,
        e.x = 0,
        e.y = 1,
        e.elementsContent = [this._Image6_i(), this._Image7_i(), this._Label1_i()],
        e
    },
    i._Image6_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_develop_mark_view_imgline_png",
        e.width = 706.948,
        e.x = 0,
        e.y = 0,
        e
    },
    i._Image7_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_skill_view_img1_png",
        e.verticalCenter = 0,
        e.visible = !0,
        e.x = 10,
        e
    },
    i._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "技能开启道具",
        e.textColor = 12834813,
        e.verticalCenter = 0,
        e.x = 33.603,
        e
    },
    i._Scroller1_i = function() {
        var e = new eui.Scroller;
        return e.height = 70,
        e.scaleX = 1,
        e.scaleY = 1,
        e.width = 700,
        e.x = 10,
        e.y = 42,
        e.viewport = this.itemList_i(),
        e
    },
    i.itemList_i = function() {
        var e = new eui.List;
        return this.itemList = e,
        e.height = 218,
        e.y = .869,
        e.layout = this._HorizontalLayout1_i(),
        e
    },
    i._HorizontalLayout1_i = function() {
        var e = new eui.HorizontalLayout;
        return e
    },
    i.skillScroller_i = function() {
        var e = new eui.Scroller;
        return this.skillScroller = e,
        e.height = 235,
        e.width = 700,
        e.x = 27,
        e.y = 54,
        e.viewport = this.list_i(),
        e
    },
    i.list_i = function() {
        var e = new eui.List;
        return this.list = e,
        e.layout = this._TileLayout1_i(),
        e
    },
    i._TileLayout1_i = function() {
        var e = new eui.TileLayout;
        return e.requestedColumnCount = 3,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/pop/PetBagChooseStonePopSkin.exml"] = window.PetBagChooseStonePopSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["btnSAttack", "btnAttack"],
        this.height = 198,
        this.width = 416,
        this.elementsContent = [this._Image1_i(), this.btnSAttack_i(), this.btnAttack_i(), this._Label1_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Image1_i = function() {
        var e = new eui.Image;
        return e.bottom = 0,
        e.left = 0,
        e.right = 0,
        e.scale9Grid = new egret.Rectangle(7, 7, 6, 3),
        e.source = "pet_bag_choose_stone_pop_imgbg_png",
        e.top = 0,
        e
    },
    i.btnSAttack_i = function() {
        var e = new eui.Image;
        return this.btnSAttack = e,
        e.source = "pet_bag_choose_stone_pop_btnsattack_png",
        e.x = 237,
        e.y = 124,
        e
    },
    i.btnAttack_i = function() {
        var e = new eui.Image;
        return this.btnAttack = e,
        e.source = "pet_bag_choose_stone_pop_btnattack_png",
        e.x = 40,
        e.y = 124,
        e
    },
    i._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "选择技能石的攻击类型",
        e.textColor = 13820671,
        e.x = 115,
        e.y = 57,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/pop/PetBagDetailPopSkin.exml"] = window.PetBagDetailPopSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["btnClose", "txtAll1", "txt1", "txtAll2", "txt3", "txtAll3", "txt2", "btnHealth", "btnAttack", "btnDefence", "btnSAttack", "btnSDefence", "btnSpeed"],
        this.width = 753,
        this.elementsContent = [this._Image1_i(), this._Image2_i(), this._Image3_i(), this.btnClose_i(), this._Image4_i(), this._Image5_i(), this._Image6_i(), this._Image7_i(), this._Label1_i(), this.txtAll1_i(), this.txt1_i(), this.txtAll2_i(), this.txt3_i(), this.txtAll3_i(), this.txt2_i(), this._Group1_i()]
    }
    __extends(t, e);
    var i = function(e) {
        function t() {
            e.call(this),
            this.skinParts = [],
            this.height = 64,
            this.width = 172,
            this.elementsContent = [this._Image1_i(), this._Rect1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "x", 44), new eui.SetProperty("_Image1", "y", 22)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "pet_bag_detail_pop_btnhealthdown_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.source = "pet_bag_detail_pop_btnhealthup_png",
            e.x = 44,
            e.y = 22,
            e
        },
        i._Rect1_i = function() {
            var e = new eui.Rect;
            return e.bottom = 0,
            e.fillAlpha = 0,
            e.left = 0,
            e.right = 0,
            e.top = 0,
            e
        },
        t
    } (eui.Skin),
    n = function(e) {
        function t() {
            e.call(this),
            this.skinParts = [],
            this.height = 64,
            this.width = 172,
            this.elementsContent = [this._Image1_i(), this._Rect1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "x", 45), new eui.SetProperty("_Image1", "y", 22)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "pet_bag_detail_pop_btnattackdown_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.source = "pet_bag_detail_pop_btnattackup_png",
            e
        },
        i._Rect1_i = function() {
            var e = new eui.Rect;
            return e.bottom = 0,
            e.fillAlpha = 0,
            e.left = 0,
            e.right = 0,
            e.top = 0,
            e
        },
        t
    } (eui.Skin),
    r = function(e) {
        function t() {
            e.call(this),
            this.skinParts = [],
            this.height = 64,
            this.width = 172,
            this.elementsContent = [this._Image1_i(), this._Rect1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "x", 46), new eui.SetProperty("_Image1", "y", 21)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "pet_bag_detail_pop_btndefencedown_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.source = "pet_bag_detail_pop_btndefenceup_png",
            e
        },
        i._Rect1_i = function() {
            var e = new eui.Rect;
            return e.bottom = 0,
            e.fillAlpha = 0,
            e.left = 0,
            e.right = 0,
            e.top = 0,
            e
        },
        t
    } (eui.Skin),
    a = function(e) {
        function t() {
            e.call(this),
            this.skinParts = [],
            this.height = 64,
            this.width = 172,
            this.elementsContent = [this._Image1_i(), this._Rect1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "x", 46), new eui.SetProperty("_Image1", "y", 22), new eui.SetProperty("_Rect1", "left", 0), new eui.SetProperty("_Rect1", "right", 0), new eui.SetProperty("_Rect1", "top", 0), new eui.SetProperty("_Rect1", "bottom", 0)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "pet_bag_detail_pop_btnsattackdown_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.source = "pet_bag_detail_pop_btnsattackup_png",
            e
        },
        i._Rect1_i = function() {
            var e = new eui.Rect;
            return this._Rect1 = e,
            e.bottom = 0,
            e.fillAlpha = 0,
            e.left = 0,
            e.right = 0,
            e.top = 0,
            e
        },
        t
    } (eui.Skin),
    o = function(e) {
        function t() {
            e.call(this),
            this.skinParts = [],
            this.height = 64,
            this.width = 172,
            this.elementsContent = [this._Image1_i(), this._Rect1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "x", 46), new eui.SetProperty("_Image1", "y", 22)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "pet_bag_detail_pop_btnsdefencedown_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.source = "pet_bag_detail_pop_btnsdefenceup_png",
            e
        },
        i._Rect1_i = function() {
            var e = new eui.Rect;
            return e.bottom = 0,
            e.fillAlpha = 0,
            e.left = 0,
            e.right = 0,
            e.top = 0,
            e
        },
        t
    } (eui.Skin),
    s = function(e) {
        function t() {
            e.call(this),
            this.skinParts = [],
            this.height = 64,
            this.width = 172,
            this.elementsContent = [this._Image1_i(), this._Rect1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "x", 43), new eui.SetProperty("_Image1", "y", 22)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "pet_bag_detail_pop_btnspeeddown_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.source = "pet_bag_detail_pop_btnspeedup_png",
            e
        },
        i._Rect1_i = function() {
            var e = new eui.Rect;
            return e.bottom = 0,
            e.fillAlpha = 0,
            e.left = 0,
            e.right = 0,
            e.top = 0,
            e
        },
        t
    } (eui.Skin),
    u = t.prototype;
    return u._Image1_i = function() {
        var e = new eui.Image;
        return e.bottom = 0,
        e.left = 0,
        e.right = 0,
        e.scale9Grid = new egret.Rectangle(7, 7, 6, 3),
        e.source = "pet_bag_detail_pop_imgbg_png",
        e.top = 0,
        e
    },
    u._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_detail_pop_imgtitlebg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    u._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_detail_pop_imgtitle_png",
        e.x = 37,
        e.y = 2,
        e
    },
    u.btnClose_i = function() {
        var e = new eui.Image;
        return this.btnClose = e,
        e.source = "title_pop_2022_btnclose_png",
        e.x = 712,
        e.y = 1,
        e
    },
    u._Image4_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_detail_pop_imgleftbg_png",
        e.visible = !0,
        e.x = 0,
        e.y = 34,
        e
    },
    u._Image5_i = function() {
        var e = new eui.Image;
        return e.scale9Grid = new egret.Rectangle(12, 103, 4, 104),
        e.source = "pet_bag_detail_pop_img1_png",
        e.width = 181,
        e.x = 178,
        e.y = 46,
        e
    },
    u._Image6_i = function() {
        var e = new eui.Image;
        return e.scale9Grid = new egret.Rectangle(12, 103, 4, 104),
        e.source = "pet_bag_detail_pop_img1_png",
        e.width = 181,
        e.x = 366,
        e.y = 46,
        e
    },
    u._Image7_i = function() {
        var e = new eui.Image;
        return e.scale9Grid = new egret.Rectangle(12, 103, 4, 104),
        e.source = "pet_bag_detail_pop_img1_png",
        e.width = 181,
        e.x = 557,
        e.y = 47,
        e
    },
    u._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "基础数值是在PVE和PVP玩法下都会生效的数值，PVE值是基础值加上仅在PVE玩法下生效的加成；PVP值为基础值加上仅有的PVP玩法下生效的加成。",
        e.textColor = 6388143,
        e.width = 531,
        e.x = 199,
        e.y = 373,
        e
    },
    u.txtAll1_i = function() {
        var e = new eui.Label;
        return this.txtAll1 = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.textColor = 4187130,
        e.x = 194,
        e.y = 55,
        e
    },
    u.txt1_i = function() {
        var e = new eui.Label;
        return this.txt1 = e,
        e.fontFamily = "MFShangHei",
        e.lineSpacing = 15,
        e.size = 15,
        e.textColor = 10733565,
        e.x = 193,
        e.y = 90,
        e
    },
    u.txtAll2_i = function() {
        var e = new eui.Label;
        return this.txtAll2 = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.textColor = 4187130,
        e.x = 382,
        e.y = 56,
        e
    },
    u.txt3_i = function() {
        var e = new eui.Label;
        return this.txt3 = e,
        e.fontFamily = "MFShangHei",
        e.lineSpacing = 15,
        e.size = 15,
        e.textColor = 10733565,
        e.x = 381,
        e.y = 90,
        e
    },
    u.txtAll3_i = function() {
        var e = new eui.Label;
        return this.txtAll3 = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.textColor = 4187130,
        e.x = 571,
        e.y = 55,
        e
    },
    u.txt2_i = function() {
        var e = new eui.Label;
        return this.txt2 = e,
        e.fontFamily = "MFShangHei",
        e.lineSpacing = 15,
        e.size = 15,
        e.textColor = 10733565,
        e.x = 570,
        e.y = 90,
        e
    },
    u._Group1_i = function() {
        var e = new eui.Group;
        return e.height = 389,
        e.width = 172,
        e.x = 1,
        e.y = 39,
        e.layout = this._VerticalLayout1_i(),
        e.elementsContent = [this.btnHealth_i(), this.btnAttack_i(), this.btnDefence_i(), this.btnSAttack_i(), this.btnSDefence_i(), this.btnSpeed_i()],
        e
    },
    u._VerticalLayout1_i = function() {
        var e = new eui.VerticalLayout;
        return e.gap = 1,
        e
    },
    u.btnHealth_i = function() {
        var e = new eui.RadioButton;
        return this.btnHealth = e,
        e.label = "1",
        e.x = 107,
        e.y = 97,
        e.skinName = i,
        e
    },
    u.btnAttack_i = function() {
        var e = new eui.RadioButton;
        return this.btnAttack = e,
        e.label = "2",
        e.x = 117,
        e.y = 107,
        e.skinName = n,
        e
    },
    u.btnDefence_i = function() {
        var e = new eui.RadioButton;
        return this.btnDefence = e,
        e.label = "3",
        e.x = 127,
        e.y = 117,
        e.skinName = r,
        e
    },
    u.btnSAttack_i = function() {
        var e = new eui.RadioButton;
        return this.btnSAttack = e,
        e.label = "4",
        e.x = 137,
        e.y = 127,
        e.skinName = a,
        e
    },
    u.btnSDefence_i = function() {
        var e = new eui.RadioButton;
        return this.btnSDefence = e,
        e.label = "5",
        e.x = 147,
        e.y = 137,
        e.skinName = o,
        e
    },
    u.btnSpeed_i = function() {
        var e = new eui.RadioButton;
        return this.btnSpeed = e,
        e.label = "6",
        e.x = 157,
        e.y = 147,
        e.skinName = s,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/pop/PetBagDreamStoneComposePopSkin.exml"] = window.PetBagDreamStoneComposePopSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["cangkubg", "warehouseTitlebg", "titleWarehouse", "groupStone", "warehouse", "imgQuickBg", "imgComposeTitle", "btnDaixuan1", "btnXuanzhong1", "btnDaixuan2", "btnXuanzhong2", "btnDaixuan3", "btnXuanzhong3", "btnDaixuan4", "btnXuanzhong4", "btnKuaijiehecheng", "quickCompose", "zuoceBG", "txtRate", "title", "txtTipsBg", "txtTipsCompose", "imgAddBg1", "imgAddBg2", "imgAddBg3", "imgAddBg4", "imgAdd1", "imgAdd2", "imgAdd3", "imgAdd4", "btnCompose", "btnReset"],
        this.height = 485,
        this.width = 899,
        this.elementsContent = [this.warehouse_i(), this.quickCompose_i(), this._Group1_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i.warehouse_i = function() {
        var e = new eui.Group;
        return this.warehouse = e,
        e.right = 0,
        e.y = 63,
        e.elementsContent = [this.cangkubg_i(), this.warehouseTitlebg_i(), this.titleWarehouse_i(), this.groupStone_i(), this._Label1_i(), this._Label2_i(), this._Label3_i(), this._Label4_i()],
        e
    },
    i.cangkubg_i = function() {
        var e = new eui.Image;
        return this.cangkubg = e,
        e.height = 170,
        e.scale9Grid = new egret.Rectangle(4, 4, 4, 4),
        e.source = "pet_bag_dream_stone_compose_cangkubg_png",
        e.width = 469,
        e.x = 0,
        e.y = 0,
        e
    },
    i.warehouseTitlebg_i = function() {
        var e = new eui.Image;
        return this.warehouseTitlebg = e,
        e.height = 36,
        e.scale9Grid = new egret.Rectangle(4, 4, 4, 4),
        e.source = "pet_bag_dream_stone_compose_warehousetitlebg_png",
        e.width = 469,
        e.x = 0,
        e.y = 0,
        e
    },
    i.titleWarehouse_i = function() {
        var e = new eui.Image;
        return this.titleWarehouse = e,
        e.source = "pet_bag_dream_stone_compose_titlewarehouse_png",
        e.x = 11,
        e.y = 9,
        e
    },
    i.groupStone_i = function() {
        var e = new eui.Group;
        return this.groupStone = e,
        e.horizontalCenter = 0,
        e.y = 50,
        e.layout = this._HorizontalLayout1_i(),
        e
    },
    i._HorizontalLayout1_i = function() {
        var e = new eui.HorizontalLayout;
        return e.gap = 43,
        e
    },
    i._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "低阶梦幻宝石",
        e.textColor = 8757203,
        e.x = 21,
        e.y = 134,
        e
    },
    i._Label2_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "中阶梦幻宝石",
        e.textColor = 8757203,
        e.x = 129,
        e.y = 134,
        e
    },
    i._Label3_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "高阶梦幻宝石",
        e.textColor = 8757203,
        e.x = 240,
        e.y = 134,
        e
    },
    i._Label4_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "闪光梦幻宝石",
        e.textColor = 8757203,
        e.x = 348,
        e.y = 134,
        e
    },
    i.quickCompose_i = function() {
        var e = new eui.Group;
        return this.quickCompose = e,
        e.right = 0,
        e.visible = !0,
        e.y = 243,
        e.elementsContent = [this.imgQuickBg_i(), this.imgComposeTitle_i(), this.btnDaixuan1_i(), this.btnXuanzhong1_i(), this.btnDaixuan2_i(), this.btnXuanzhong2_i(), this.btnDaixuan3_i(), this.btnXuanzhong3_i(), this.btnDaixuan4_i(), this.btnXuanzhong4_i(), this.btnKuaijiehecheng_i()],
        e
    },
    i.imgQuickBg_i = function() {
        var e = new eui.Image;
        return this.imgQuickBg = e,
        e.height = 202,
        e.scale9Grid = new egret.Rectangle(4, 4, 4, 4),
        e.source = "pet_bag_dream_stone_compose_imgquickbg_png",
        e.width = 469,
        e.x = 0,
        e.y = 0,
        e
    },
    i.imgComposeTitle_i = function() {
        var e = new eui.Image;
        return this.imgComposeTitle = e,
        e.source = "pet_bag_dream_stone_compose_imgcomposetitle_png",
        e.x = 184,
        e.y = 9,
        e
    },
    i.btnDaixuan1_i = function() {
        var e = new eui.Image;
        return this.btnDaixuan1 = e,
        e.source = "pet_bag_dream_stone_compose_btndaixuang_png",
        e.x = 48,
        e.y = 45,
        e
    },
    i.btnXuanzhong1_i = function() {
        var e = new eui.Image;
        return this.btnXuanzhong1 = e,
        e.source = "pet_bag_dream_stone_compose_btnxuanzhongg_png",
        e.x = 38,
        e.y = 34,
        e
    },
    i.btnDaixuan2_i = function() {
        var e = new eui.Image;
        return this.btnDaixuan2 = e,
        e.source = "pet_bag_dream_stone_compose_btndaixuanb_png",
        e.x = 249,
        e.y = 45,
        e
    },
    i.btnXuanzhong2_i = function() {
        var e = new eui.Image;
        return this.btnXuanzhong2 = e,
        e.source = "pet_bag_dream_stone_compose_btnxuanzhongb_png",
        e.x = 239,
        e.y = 34,
        e
    },
    i.btnDaixuan3_i = function() {
        var e = new eui.Image;
        return this.btnDaixuan3 = e,
        e.source = "pet_bag_dream_stone_compose_btndaixuanp_png",
        e.x = 48,
        e.y = 92,
        e
    },
    i.btnXuanzhong3_i = function() {
        var e = new eui.Image;
        return this.btnXuanzhong3 = e,
        e.source = "pet_bag_dream_stone_compose_btnxuanzhongp_png",
        e.x = 38,
        e.y = 82,
        e
    },
    i.btnDaixuan4_i = function() {
        var e = new eui.Image;
        return this.btnDaixuan4 = e,
        e.source = "pet_bag_dream_stone_compose_btndaixuano_png",
        e.x = 249,
        e.y = 92,
        e
    },
    i.btnXuanzhong4_i = function() {
        var e = new eui.Image;
        return this.btnXuanzhong4 = e,
        e.source = "pet_bag_dream_stone_compose_btnxuanzhongo_png",
        e.x = 239,
        e.y = 82,
        e
    },
    i.btnKuaijiehecheng_i = function() {
        var e = new eui.Image;
        return this.btnKuaijiehecheng = e,
        e.source = "pet_bag_dream_stone_compose_btnkuaijiehecheng_png",
        e.x = 173,
        e.y = 144,
        e
    },
    i._Group1_i = function() {
        var e = new eui.Group;
        return e.cacheAsBitmap = !0,
        e.elementsContent = [this.zuoceBG_i(), this.txtRate_i(), this.title_i(), this.txtTipsBg_i(), this.txtTipsCompose_i(), this.imgAddBg1_i(), this.imgAddBg2_i(), this.imgAddBg3_i(), this.imgAddBg4_i(), this.imgAdd1_i(), this.imgAdd2_i(), this.imgAdd3_i(), this.imgAdd4_i(), this.btnCompose_i(), this.btnReset_i()],
        e
    },
    i.zuoceBG_i = function() {
        var e = new eui.Image;
        return this.zuoceBG = e,
        e.source = "pet_bag_dream_stone_compose_zuocebg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.txtRate_i = function() {
        var e = new eui.Label;
        return this.txtRate = e,
        e.fontFamily = "REEJI",
        e.size = 24,
        e.textAlign = "center",
        e.textColor = 16514896,
        e.width = 75,
        e.x = 186,
        e.y = 215,
        e
    },
    i.title_i = function() {
        var e = new eui.Image;
        return this.title = e,
        e.source = "pet_bag_dream_stone_compose_title_png",
        e.x = 165,
        e.y = 9,
        e
    },
    i.txtTipsBg_i = function() {
        var e = new eui.Image;
        return this.txtTipsBg = e,
        e.scale9Grid = new egret.Rectangle(95, 0, 51, 24),
        e.source = "pet_bag_dream_stone_compose_txttipsbg_png",
        e.width = 408,
        e.x = 17,
        e.y = 48,
        e
    },
    i.txtTipsCompose_i = function() {
        var e = new eui.Label;
        return this.txtTipsCompose = e,
        e.fontFamily = "MFShangHei",
        e.size = 17.5,
        e.text = "合成4个同级别宝石，必定获得1个高等级宝石",
        e.textColor = 8631282,
        e.x = 44,
        e.y = 51,
        e
    },
    i.imgAddBg1_i = function() {
        var e = new eui.Image;
        return this.imgAddBg1 = e,
        e.height = 72,
        e.source = "rarity_item_1_png",
        e.visible = !0,
        e.width = 72,
        e.x = 81,
        e.y = 93,
        e
    },
    i.imgAddBg2_i = function() {
        var e = new eui.Image;
        return this.imgAddBg2 = e,
        e.height = 72,
        e.source = "rarity_item_1_png",
        e.visible = !0,
        e.width = 72,
        e.x = 289,
        e.y = 93,
        e
    },
    i.imgAddBg3_i = function() {
        var e = new eui.Image;
        return this.imgAddBg3 = e,
        e.height = 72,
        e.source = "rarity_item_1_png",
        e.visible = !0,
        e.width = 72,
        e.x = 81,
        e.y = 277,
        e
    },
    i.imgAddBg4_i = function() {
        var e = new eui.Image;
        return this.imgAddBg4 = e,
        e.height = 72,
        e.source = "rarity_item_1_png",
        e.visible = !0,
        e.width = 72,
        e.x = 289,
        e.y = 277,
        e
    },
    i.imgAdd1_i = function() {
        var e = new eui.Image;
        return this.imgAdd1 = e,
        e.height = 58,
        e.source = "pet_bag_dream_stone_compose_pop_imgadd1_png",
        e.visible = !0,
        e.width = 58,
        e.x = 87,
        e.y = 99,
        e
    },
    i.imgAdd2_i = function() {
        var e = new eui.Image;
        return this.imgAdd2 = e,
        e.height = 58,
        e.source = "pet_bag_dream_stone_compose_pop_imgadd1_png",
        e.visible = !0,
        e.width = 58,
        e.x = 295,
        e.y = 99,
        e
    },
    i.imgAdd3_i = function() {
        var e = new eui.Image;
        return this.imgAdd3 = e,
        e.height = 58,
        e.source = "pet_bag_dream_stone_compose_pop_imgadd1_png",
        e.visible = !0,
        e.width = 58,
        e.x = 87,
        e.y = 283,
        e
    },
    i.imgAdd4_i = function() {
        var e = new eui.Image;
        return this.imgAdd4 = e,
        e.height = 58,
        e.source = "pet_bag_dream_stone_compose_pop_imgadd1_png",
        e.visible = !0,
        e.width = 58,
        e.x = 295,
        e.y = 283,
        e
    },
    i.btnCompose_i = function() {
        var e = new eui.Group;
        return this.btnCompose = e,
        e.cacheAsBitmap = !0,
        e.x = 82,
        e.y = 397,
        e.elementsContent = [this._Image1_i(), this._Label5_i()],
        e
    },
    i._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_main_panel_btnyellow_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i._Label5_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "REEJI",
        e.size = 20,
        e.text = "开始合成",
        e.textColor = 10246682,
        e.visible = !0,
        e.x = 27,
        e.y = 13,
        e
    },
    i.btnReset_i = function() {
        var e = new eui.Group;
        return this.btnReset = e,
        e.cacheAsBitmap = !0,
        e.x = 229,
        e.y = 397,
        e.elementsContent = [this._Image2_i(), this._Label6_i()],
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_main_panel_btnblue_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i._Label6_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "REEJI",
        e.size = 20,
        e.text = "重新选择",
        e.textColor = 2976172,
        e.visible = !0,
        e.x = 27,
        e.y = 13,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/pop/PetBagMarkAdditionPopSkin.exml"] = window.PetBagMarkAdditionPopSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["txt1", "txt3", "txt5", "txt2", "txt4", "txt6", "txt7", "txt9", "txt11", "txt8", "txt10", "txt12"],
        this.height = 271,
        this.width = 491,
        this.elementsContent = [this._Group1_i(), this._Label16_i(), this.txt1_i(), this.txt3_i(), this.txt5_i(), this.txt2_i(), this.txt4_i(), this.txt6_i(), this.txt7_i(), this.txt9_i(), this.txt11_i(), this.txt8_i(), this.txt10_i(), this.txt12_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Group1_i = function() {
        var e = new eui.Group;
        return e.cacheAsBitmap = !0,
        e.visible = !0,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this._Image1_i(), this._Image2_i(), this._Image3_i(), this._Label1_i(), this._Label2_i(), this._Label3_i(), this._Label4_i(), this._Label5_i(), this._Label6_i(), this._Label7_i(), this._Label8_i(), this._Label9_i(), this._Label10_i(), this._Label11_i(), this._Label12_i(), this._Label13_i(), this._Label14_i(), this._Label15_i()],
        e
    },
    i._Image1_i = function() {
        var e = new eui.Image;
        return e.height = 244,
        e.scale9Grid = new egret.Rectangle(15, 15, 15, 15),
        e.source = "markselectpop_popbg_png",
        e.width = 509,
        e.x = -7,
        e.y = 0,
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.scale9Grid = new egret.Rectangle(7, 11, 4, 12),
        e.source = "markselectpop_jx_17_kb_3_png",
        e.visible = !0,
        e.width = 488,
        e.x = 3,
        e.y = 2,
        e
    },
    i._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "title_pop_2022_imgline_png",
        e.x = 13,
        e.y = 127,
        e
    },
    i._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "属性加成",
        e.textColor = 12900350,
        e.x = 26,
        e.y = 11,
        e
    },
    i._Label2_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "刻印加成：",
        e.textColor = 4187130,
        e.x = 24,
        e.y = 48,
        e
    },
    i._Label3_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "攻击：",
        e.textColor = 8757203,
        e.x = 24,
        e.y = 73,
        e
    },
    i._Label4_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "特攻：",
        e.textColor = 8757203,
        e.x = 159,
        e.y = 73,
        e
    },
    i._Label5_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "速度：",
        e.textColor = 8757203,
        e.x = 294,
        e.y = 73,
        e
    },
    i._Label6_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "防御：",
        e.textColor = 8757203,
        e.x = 24,
        e.y = 97,
        e
    },
    i._Label7_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "特防：",
        e.textColor = 8757203,
        e.x = 158,
        e.y = 97,
        e
    },
    i._Label8_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "体力：",
        e.textColor = 8757203,
        e.x = 294,
        e.y = 97,
        e
    },
    i._Label9_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "隐藏加成：",
        e.textColor = 4187130,
        e.x = 24,
        e.y = 143,
        e
    },
    i._Label10_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "攻击：",
        e.textColor = 8757203,
        e.x = 24,
        e.y = 168,
        e
    },
    i._Label11_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "特攻：",
        e.textColor = 8757203,
        e.x = 158,
        e.y = 168,
        e
    },
    i._Label12_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "速度：",
        e.textColor = 8757203,
        e.x = 294,
        e.y = 168,
        e
    },
    i._Label13_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "防御：",
        e.textColor = 8757203,
        e.x = 24,
        e.y = 192,
        e
    },
    i._Label14_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "特防：",
        e.textColor = 8757203,
        e.x = 158,
        e.y = 192,
        e
    },
    i._Label15_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "体力：",
        e.textColor = 8757203,
        e.x = 294,
        e.y = 192,
        e
    },
    i._Label16_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "点击任意空白位置关闭弹窗",
        e.textColor = 8631282,
        e.x = 150,
        e.y = 255,
        e
    },
    i.txt1_i = function() {
        var e = new eui.Label;
        return this.txt1 = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.textColor = 6154073,
        e.x = 71,
        e.y = 72,
        e
    },
    i.txt3_i = function() {
        var e = new eui.Label;
        return this.txt3 = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.textColor = 6154073,
        e.x = 205,
        e.y = 72,
        e
    },
    i.txt5_i = function() {
        var e = new eui.Label;
        return this.txt5 = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.textColor = 6154073,
        e.x = 342,
        e.y = 72,
        e
    },
    i.txt2_i = function() {
        var e = new eui.Label;
        return this.txt2 = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.textColor = 6154073,
        e.x = 71,
        e.y = 97,
        e
    },
    i.txt4_i = function() {
        var e = new eui.Label;
        return this.txt4 = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.textColor = 6154073,
        e.x = 205,
        e.y = 97,
        e
    },
    i.txt6_i = function() {
        var e = new eui.Label;
        return this.txt6 = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.textColor = 6154073,
        e.x = 342,
        e.y = 97,
        e
    },
    i.txt7_i = function() {
        var e = new eui.Label;
        return this.txt7 = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.textColor = 6154073,
        e.x = 71,
        e.y = 168,
        e
    },
    i.txt9_i = function() {
        var e = new eui.Label;
        return this.txt9 = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.textColor = 6154073,
        e.x = 205,
        e.y = 168,
        e
    },
    i.txt11_i = function() {
        var e = new eui.Label;
        return this.txt11 = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.textColor = 6154073,
        e.x = 342,
        e.y = 168,
        e
    },
    i.txt8_i = function() {
        var e = new eui.Label;
        return this.txt8 = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.textColor = 6154073,
        e.x = 71,
        e.y = 192,
        e
    },
    i.txt10_i = function() {
        var e = new eui.Label;
        return this.txt10 = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.textColor = 6154073,
        e.x = 205,
        e.y = 192,
        e
    },
    i.txt12_i = function() {
        var e = new eui.Label;
        return this.txt12 = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.textColor = 6154073,
        e.x = 342,
        e.y = 192,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/pop/PetBagMarkContrastPopSkin.exml"] = window.PetBagMarkContrastPopSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["imgRect", "imge_arrowhead", "group", "imge_name_search", "imge_series_search", "gr_search_btns"],
        this.elementsContent = [this.imgRect_i(), this.imge_arrowhead_i(), this.group_i(), this.gr_search_btns_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i.imgRect_i = function() {
        var e = new eui.Group;
        return this.imgRect = e,
        e.bottom = 0,
        e.left = 0,
        e.right = 0,
        e.top = 0,
        e
    },
    i.imge_arrowhead_i = function() {
        var e = new eui.Image;
        return this.imge_arrowhead = e,
        e.horizontalCenter = 0,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "pet_bag_markcontrastpop_imge_arrowhead_png",
        e.verticalCenter = 0,
        e.x = -30,
        e.y = -45,
        e
    },
    i.group_i = function() {
        var e = new eui.Group;
        return this.group = e,
        e.horizontalCenter = 0,
        e.verticalCenter = 0,
        e.layout = this._HorizontalLayout1_i(),
        e
    },
    i._HorizontalLayout1_i = function() {
        var e = new eui.HorizontalLayout;
        return e.gap = 60,
        e
    },
    i.gr_search_btns_i = function() {
        var e = new eui.Group;
        return this.gr_search_btns = e,
        e.horizontalCenter = 0,
        e.scaleX = 1,
        e.scaleY = 1,
        e.verticalCenter = 0,
        e.elementsContent = [this.imge_name_search_i(), this.imge_series_search_i()],
        e
    },
    i.imge_name_search_i = function() {
        var e = new eui.Image;
        return this.imge_name_search = e,
        e.source = "pet_bag_markcontrastpop_imge_name_search_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.imge_series_search_i = function() {
        var e = new eui.Image;
        return this.imge_series_search = e,
        e.source = "pet_bag_markcontrastpop_imge_series_search_png",
        e.x = 156,
        e.y = 0,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/pop/PetBagMarkselectpopSkin.exml"] = window.MarkFilterPopSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["btnDefault", "btnConfirm", "rb_all", "rb_zhuan", "rb_feizhuan", "rb_mo", "rb_atk", "rb_spAtk", "rb_def", "rb_spd", "rb_hp", "grp_selcted", "markPop"],
        this.height = 303,
        this.width = 508,
        this.elementsContent = [this.markPop_i()]
    }
    __extends(t, e);
    var i = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["labelDisplay"],
            this.elementsContent = [this._Image1_i(), this._Image2_i(), this.labelDisplay_i()],
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image2", "source", "markselectpop_gou_png"), new eui.SetProperty("_Image2", "x", 5), new eui.SetProperty("_Image2", "y", 5)]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return e.percentHeight = 100,
            e.source = "markselectpop_searchbg_png",
            e.percentWidth = 100,
            e
        },
        i._Image2_i = function() {
            var e = new eui.Image;
            return this._Image2 = e,
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
    n = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["labelDisplay"],
            this.elementsContent = [this._Image1_i(), this._Image2_i(), this.labelDisplay_i()],
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image2", "source", "markselectpop_gou_png"), new eui.SetProperty("_Image2", "x", 5), new eui.SetProperty("_Image2", "y", 5)]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return e.percentHeight = 100,
            e.source = "markselectpop_searchbg_png",
            e.percentWidth = 100,
            e
        },
        i._Image2_i = function() {
            var e = new eui.Image;
            return this._Image2 = e,
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
    r = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["labelDisplay"],
            this.elementsContent = [this._Image1_i(), this._Image2_i(), this.labelDisplay_i()],
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image2", "source", "markselectpop_gou_png"), new eui.SetProperty("_Image2", "x", 5), new eui.SetProperty("_Image2", "y", 5)]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return e.percentHeight = 100,
            e.source = "markselectpop_searchbg_png",
            e.percentWidth = 100,
            e
        },
        i._Image2_i = function() {
            var e = new eui.Image;
            return this._Image2 = e,
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
    a = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["labelDisplay"],
            this.elementsContent = [this._Image1_i(), this._Image2_i(), this.labelDisplay_i()],
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image2", "source", "markselectpop_gou_png"), new eui.SetProperty("_Image2", "x", 5), new eui.SetProperty("_Image2", "y", 5)]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return e.percentHeight = 100,
            e.source = "markselectpop_searchbg_png",
            e.percentWidth = 100,
            e
        },
        i._Image2_i = function() {
            var e = new eui.Image;
            return this._Image2 = e,
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
    o = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["labelDisplay"],
            this.elementsContent = [this._Image1_i(), this._Image2_i(), this.labelDisplay_i()],
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image2", "source", "markselectpop_gou_png"), new eui.SetProperty("_Image2", "x", 5), new eui.SetProperty("_Image2", "y", 5)]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return e.percentHeight = 100,
            e.source = "markselectpop_searchbg_png",
            e.percentWidth = 100,
            e
        },
        i._Image2_i = function() {
            var e = new eui.Image;
            return this._Image2 = e,
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
            this.skinParts = ["labelDisplay"],
            this.elementsContent = [this._Image1_i(), this._Image2_i(), this.labelDisplay_i()],
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image2", "source", "markselectpop_gou_png"), new eui.SetProperty("_Image2", "x", 5), new eui.SetProperty("_Image2", "y", 5)]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return e.percentHeight = 100,
            e.source = "markselectpop_searchbg_png",
            e.percentWidth = 100,
            e
        },
        i._Image2_i = function() {
            var e = new eui.Image;
            return this._Image2 = e,
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
    u = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["labelDisplay"],
            this.elementsContent = [this._Image1_i(), this._Image2_i(), this.labelDisplay_i()],
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image2", "source", "markselectpop_gou_png"), new eui.SetProperty("_Image2", "x", 5), new eui.SetProperty("_Image2", "y", 5)]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return e.percentHeight = 100,
            e.source = "markselectpop_searchbg_png",
            e.percentWidth = 100,
            e
        },
        i._Image2_i = function() {
            var e = new eui.Image;
            return this._Image2 = e,
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
    _ = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["labelDisplay"],
            this.elementsContent = [this._Image1_i(), this._Image2_i(), this.labelDisplay_i()],
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image2", "source", "markselectpop_gou_png"), new eui.SetProperty("_Image2", "x", 5), new eui.SetProperty("_Image2", "y", 5)]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return e.percentHeight = 100,
            e.source = "markselectpop_searchbg_png",
            e.percentWidth = 100,
            e
        },
        i._Image2_i = function() {
            var e = new eui.Image;
            return this._Image2 = e,
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
    l = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["labelDisplay"],
            this.elementsContent = [this._Image1_i(), this._Image2_i(), this.labelDisplay_i()],
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image2", "source", "markselectpop_gou_png"), new eui.SetProperty("_Image2", "x", 5), new eui.SetProperty("_Image2", "y", 5)]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return e.percentHeight = 100,
            e.source = "markselectpop_searchbg_png",
            e.percentWidth = 100,
            e
        },
        i._Image2_i = function() {
            var e = new eui.Image;
            return this._Image2 = e,
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
    h = t.prototype;
    return h.markPop_i = function() {
        var e = new eui.Group;
        return this.markPop = e,
        e.cacheAsBitmap = !0,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this._Image1_i(), this._Image2_i(), this.btnDefault_i(), this.btnConfirm_i(), this._Image3_i(), this._Label1_i(), this.grp_selcted_i()],
        e
    },
    h._Image1_i = function() {
        var e = new eui.Image;
        return e.height = 303,
        e.scale9Grid = new egret.Rectangle(15, 15, 15, 15),
        e.source = "markselectpop_popbg_png",
        e.visible = !0,
        e.width = 508,
        e
    },
    h._Image2_i = function() {
        var e = new eui.Image;
        return e.scale9Grid = new egret.Rectangle(9, 11, 2, 12),
        e.source = "markselectpop_jx_17_kb_3_png",
        e.width = 488,
        e.x = 10,
        e.y = 9,
        e
    },
    h.btnDefault_i = function() {
        var e = new eui.Image;
        return this.btnDefault = e,
        e.source = "markselectpop_btndefault_png",
        e.x = 273,
        e.y = 255,
        e
    },
    h.btnConfirm_i = function() {
        var e = new eui.Image;
        return this.btnConfirm = e,
        e.source = "markselectpop_btncomfirm_png",
        e.x = 384,
        e.y = 255,
        e
    },
    h._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "markselectpop_xz_1_png",
        e.x = 33,
        e.y = 113,
        e
    },
    h._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "刻印筛选",
        e.textColor = 12900094,
        e.x = 29,
        e.y = 17,
        e
    },
    h.grp_selcted_i = function() {
        var e = new eui.Group;
        return this.grp_selcted = e,
        e.x = 40,
        e.y = 53,
        e.elementsContent = [this._Group1_i(), this._Group2_i()],
        e
    },
    h._Group1_i = function() {
        var e = new eui.Group;
        return e.visible = !0,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this.rb_all_i(), this.rb_zhuan_i(), this.rb_feizhuan_i(), this._Label2_i(), this._Label3_i(), this._Label4_i(), this._Label5_i()],
        e
    },
    h.rb_all_i = function() {
        var e = new eui.RadioButton;
        return this.rb_all = e,
        e.groupName = "a",
        e.label = "",
        e.value = "全部",
        e.x = 0,
        e.y = 25,
        e.skinName = i,
        e
    },
    h.rb_zhuan_i = function() {
        var e = new eui.RadioButton;
        return this.rb_zhuan = e,
        e.groupName = "a",
        e.label = "",
        e.value = "专属",
        e.x = 124,
        e.y = 25,
        e.skinName = n,
        e
    },
    h.rb_feizhuan_i = function() {
        var e = new eui.RadioButton;
        return this.rb_feizhuan = e,
        e.groupName = "a",
        e.label = "",
        e.value = "非专属",
        e.x = 248,
        e.y = 25,
        e.skinName = r,
        e
    },
    h._Label2_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "全部刻印",
        e.textColor = 15528703,
        e.x = 31,
        e.y = 28,
        e
    },
    h._Label3_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "专属刻印",
        e.textColor = 16777215,
        e.x = 155,
        e.y = 28,
        e
    },
    h._Label4_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "非专属刻印",
        e.textColor = 16777215,
        e.x = 284,
        e.y = 28,
        e
    },
    h._Label5_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.scaleX = 1,
        e.scaleY = 1,
        e.size = 16,
        e.text = "刻印类型",
        e.textColor = 6388143,
        e.x = 1,
        e.y = 0,
        e
    },
    h._Group2_i = function() {
        var e = new eui.Group;
        return e.visible = !0,
        e.x = 0,
        e.y = 72,
        e.elementsContent = [this.rb_mo_i(), this.rb_atk_i(), this.rb_spAtk_i(), this.rb_def_i(), this.rb_spd_i(), this.rb_hp_i(), this._Label6_i(), this._Label7_i(), this._Label8_i(), this._Label9_i(), this._Label10_i(), this._Label11_i(), this._Label12_i()],
        e
    },
    h.rb_mo_i = function() {
        var e = new eui.RadioButton;
        return this.rb_mo = e,
        e.groupName = "b",
        e.label = "",
        e.value = "默认",
        e.x = 0,
        e.y = 25,
        e.skinName = a,
        e
    },
    h.rb_atk_i = function() {
        var e = new eui.RadioButton;
        return this.rb_atk = e,
        e.groupName = "b",
        e.label = "",
        e.value = "攻击",
        e.x = 124,
        e.y = 25,
        e.skinName = o,
        e
    },
    h.rb_spAtk_i = function() {
        var e = new eui.RadioButton;
        return this.rb_spAtk = e,
        e.groupName = "b",
        e.label = "",
        e.value = "特攻",
        e.x = 248,
        e.y = 25,
        e.skinName = s,
        e
    },
    h.rb_def_i = function() {
        var e = new eui.RadioButton;
        return this.rb_def = e,
        e.groupName = "b",
        e.label = "",
        e.value = "双防",
        e.x = 0,
        e.y = 67,
        e.skinName = u,
        e
    },
    h.rb_spd_i = function() {
        var e = new eui.RadioButton;
        return this.rb_spd = e,
        e.groupName = "b",
        e.label = "",
        e.value = "速度",
        e.x = 124,
        e.y = 67,
        e.skinName = _,
        e
    },
    h.rb_hp_i = function() {
        var e = new eui.RadioButton;
        return this.rb_hp = e,
        e.groupName = "b",
        e.label = "",
        e.value = "体力",
        e.x = 248,
        e.y = 67,
        e.skinName = l,
        e
    },
    h._Label6_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "刻印属性",
        e.textColor = 6388143,
        e.x = 1,
        e.y = 0,
        e
    },
    h._Label7_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "默认",
        e.textColor = 15528703,
        e.x = 31,
        e.y = 29,
        e
    },
    h._Label8_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "攻击",
        e.textColor = 16777215,
        e.x = 155,
        e.y = 29,
        e
    },
    h._Label9_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "特攻",
        e.textColor = 16777215,
        e.x = 284,
        e.y = 29,
        e
    },
    h._Label10_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "双防",
        e.textColor = 15528703,
        e.x = 32,
        e.y = 71,
        e
    },
    h._Label11_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "速度",
        e.textColor = 16777215,
        e.x = 156,
        e.y = 70,
        e
    },
    h._Label12_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "体力",
        e.textColor = 16777215,
        e.x = 284,
        e.y = 71,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/pop/PetBagOpenStonePopSkin.exml"] = window.PetBagOpenStonePopSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["btnClose", "groupStones", "btnAllOpen", "btnSingleOpen"],
        this.height = 285,
        this.width = 482,
        this.elementsContent = [this._Image1_i(), this._Image2_i(), this._Image3_i(), this.btnClose_i(), this.groupStones_i(), this._Label1_i(), this.btnAllOpen_i(), this.btnSingleOpen_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Image1_i = function() {
        var e = new eui.Image;
        return e.bottom = 0,
        e.left = 0,
        e.right = 0,
        e.scale9Grid = new egret.Rectangle(7, 7, 6, 3),
        e.source = "pet_bag_detail_pop_imgbg_png",
        e.top = 0,
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_open_stone_pop_imgtitlebg2_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_open_stone_pop_imgtitle_png",
        e.x = 34,
        e.y = 1,
        e
    },
    i.btnClose_i = function() {
        var e = new eui.Image;
        return this.btnClose = e,
        e.source = "title_pop_2022_btnclose_png",
        e.x = 438,
        e.y = 1,
        e
    },
    i.groupStones_i = function() {
        var e = new eui.Group;
        return this.groupStones = e,
        e.height = 73,
        e.width = 433,
        e.x = 25,
        e.y = 104,
        e.layout = this._HorizontalLayout1_i(),
        e
    },
    i._HorizontalLayout1_i = function() {
        var e = new eui.HorizontalLayout;
        return e.gap = 17,
        e
    },
    i._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "选择你要开启的技能石种类：",
        e.textColor = 8757203,
        e.x = 124,
        e.y = 59,
        e
    },
    i.btnAllOpen_i = function() {
        var e = new eui.Group;
        return this.btnAllOpen = e,
        e.x = 67,
        e.y = 213,
        e.elementsContent = [this._Image4_i(), this._Label2_i()],
        e
    },
    i._Image4_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_main_panel_btnyellow_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i._Label2_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "REEJI",
        e.size = 20,
        e.text = "全部开启",
        e.textColor = 10246682,
        e.visible = !0,
        e.x = 27,
        e.y = 13,
        e
    },
    i.btnSingleOpen_i = function() {
        var e = new eui.Group;
        return this.btnSingleOpen = e,
        e.x = 274,
        e.y = 213,
        e.elementsContent = [this._Image5_i(), this._Label3_i()],
        e
    },
    i._Image5_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_main_panel_btnblue_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i._Label3_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "REEJI",
        e.size = 20,
        e.text = "单个开启",
        e.textColor = 2976172,
        e.visible = !0,
        e.x = 27,
        e.y = 13,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/pop/PetBagRecommendMarkPopSkin.exml"] = window.PetBagRecommendMarkPopSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["btnClose", "imgMark1", "txtMark1Name", "imgMark2", "txtMark2Name", "imgMark3", "txtMark3Name"],
        this.height = 285,
        this.width = 481,
        this.elementsContent = [this._Image1_i(), this._Image2_i(), this._Image3_i(), this.btnClose_i(), this._Label1_i(), this._Group1_i(), this._Group2_i(), this._Group3_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Image1_i = function() {
        var e = new eui.Image;
        return e.bottom = 0,
        e.left = 0,
        e.right = 0,
        e.scale9Grid = new egret.Rectangle(7, 7, 6, 2),
        e.source = "pet_bag_detail_pop_imgbg_png",
        e.top = 0,
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_open_stone_pop_imgtitlebg2_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_recommend_mark_pop_imgtitle_png",
        e.x = 33,
        e.y = 1,
        e
    },
    i.btnClose_i = function() {
        var e = new eui.Image;
        return this.btnClose = e,
        e.source = "title_pop_2022_btnclose_png",
        e.x = 438,
        e.y = 1,
        e
    },
    i._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "每只精灵最多同时佩戴两枚同系列刻印",
        e.textColor = 8757203,
        e.x = 88,
        e.y = 74,
        e
    },
    i._Group1_i = function() {
        var e = new eui.Group;
        return e.visible = !0,
        e.width = 73,
        e.x = 82,
        e.y = 110,
        e.elementsContent = [this._Image4_i(), this.imgMark1_i(), this.txtMark1Name_i()],
        e
    },
    i._Image4_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_small_item_item_imgbg_png",
        e.x = 0,
        e.y = 2,
        e
    },
    i.imgMark1_i = function() {
        var e = new eui.Image;
        return this.imgMark1 = e,
        e.height = 50,
        e.width = 50,
        e.x = 12,
        e.y = 14,
        e
    },
    i.txtMark1Name_i = function() {
        var e = new eui.Label;
        return this.txtMark1Name = e,
        e.fontFamily = "MFShangHei",
        e.horizontalCenter = -4,
        e.size = 16,
        e.textColor = 12834813,
        e.y = 77,
        e
    },
    i._Group2_i = function() {
        var e = new eui.Group;
        return e.width = 73,
        e.x = 204,
        e.y = 110,
        e.elementsContent = [this._Image5_i(), this.imgMark2_i(), this.txtMark2Name_i()],
        e
    },
    i._Image5_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_small_item_item_imgbg_png",
        e.x = 0,
        e.y = 2,
        e
    },
    i.imgMark2_i = function() {
        var e = new eui.Image;
        return this.imgMark2 = e,
        e.height = 50,
        e.width = 50,
        e.x = 11,
        e.y = 14,
        e
    },
    i.txtMark2Name_i = function() {
        var e = new eui.Label;
        return this.txtMark2Name = e,
        e.fontFamily = "MFShangHei",
        e.horizontalCenter = -4,
        e.size = 16,
        e.textColor = 12834813,
        e.y = 77,
        e
    },
    i._Group3_i = function() {
        var e = new eui.Group;
        return e.width = 73,
        e.x = 326,
        e.y = 110,
        e.elementsContent = [this._Image6_i(), this.imgMark3_i(), this.txtMark3Name_i()],
        e
    },
    i._Image6_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_small_item_item_imgbg_png",
        e.x = 0,
        e.y = 2,
        e
    },
    i.imgMark3_i = function() {
        var e = new eui.Image;
        return this.imgMark3 = e,
        e.height = 50,
        e.width = 50,
        e.x = 11,
        e.y = 14,
        e
    },
    i.txtMark3Name_i = function() {
        var e = new eui.Label;
        return this.txtMark3Name = e,
        e.fontFamily = "MFShangHei",
        e.horizontalCenter = -4,
        e.size = 16,
        e.textColor = 12834813,
        e.y = 77,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/pop/PetBagResistanceExchangePopSkin.exml"] = window.PetBagResistanceExchangePopSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["btnClose", "btn1", "btn2", "txtProgress", "btnExchange", "txtNum0", "txtName0", "imgIcon0", "btnLock0", "txtNum3", "txtName3", "imgIcon3", "btnLock3", "txtNum1", "txtName1", "imgIcon1", "btnLock1", "txtNum4", "txtName4", "imgIcon4", "btnLock4", "txtNum2", "txtName2", "imgIcon2", "btnLock2", "txtNum5", "txtName5", "imgIcon5", "btnLock5", "groupItem", "group1", "list", "noItemSign", "group2"],
        this.height = 390,
        this.width = 753,
        this.elementsContent = [this._Image1_i(), this._Image2_i(), this.btnClose_i(), this._Image3_i(), this._Image4_i(), this.btn1_i(), this.btn2_i(), this.group1_i(), this.group2_i()]
    }
    __extends(t, e);
    var i = function(e) {
        function t() {
            e.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i(), this._Label1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "pet_bag_main_panel_btnrbup_png")]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "pet_bag_main_panel_btnrbdown_png"), new eui.SetProperty("_Label1", "textColor", 16777215)]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.percentHeight = 100,
            e.source = "pet_bag_main_panel_btnrbup_png",
            e.percentWidth = 100,
            e
        },
        i._Label1_i = function() {
            var e = new eui.Label;
            return this._Label1 = e,
            e.fontFamily = "MFShangHei",
            e.horizontalCenter = 0,
            e.size = 18,
            e.text = "普通更换",
            e.textColor = 7242936,
            e.verticalCenter = 0,
            e
        },
        t
    } (eui.Skin),
    n = function(e) {
        function t() {
            e.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i(), this._Label1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "pet_bag_main_panel_btnrbup_png")]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "pet_bag_main_panel_btnrbdown_png"), new eui.SetProperty("_Label1", "textColor", 16777215)]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.percentHeight = 100,
            e.source = "pet_bag_main_panel_btnrbup_png",
            e.percentWidth = 100,
            e
        },
        i._Label1_i = function() {
            var e = new eui.Label;
            return this._Label1 = e,
            e.fontFamily = "MFShangHei",
            e.horizontalCenter = 0,
            e.size = 18,
            e.text = "指定更换",
            e.textColor = 7242936,
            e.verticalCenter = 0,
            e.visible = !0,
            e
        },
        t
    } (eui.Skin),
    r = function(e) {
        function t() {
            e.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i()],
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "resistance_lock_png")]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.percentHeight = 100,
            e.source = "resistance_unlock_png",
            e.percentWidth = 100,
            e
        },
        t
    } (eui.Skin),
    a = function(e) {
        function t() {
            e.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i()],
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "resistance_lock_png")]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.percentHeight = 100,
            e.source = "resistance_unlock_png",
            e.percentWidth = 100,
            e
        },
        t
    } (eui.Skin),
    o = function(e) {
        function t() {
            e.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i()],
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "resistance_lock_png")]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.percentHeight = 100,
            e.source = "resistance_unlock_png",
            e.percentWidth = 100,
            e
        },
        t
    } (eui.Skin),
    s = function(e) {
        function t() {
            e.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i()],
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "resistance_lock_png")]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.percentHeight = 100,
            e.source = "resistance_unlock_png",
            e.percentWidth = 100,
            e
        },
        t
    } (eui.Skin),
    u = function(e) {
        function t() {
            e.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i()],
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "resistance_lock_png")]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.percentHeight = 100,
            e.source = "resistance_unlock_png",
            e.percentWidth = 100,
            e
        },
        t
    } (eui.Skin),
    _ = function(e) {
        function t() {
            e.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i()],
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "resistance_lock_png")]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.percentHeight = 100,
            e.source = "resistance_unlock_png",
            e.percentWidth = 100,
            e
        },
        t
    } (eui.Skin),
    l = t.prototype;
    return l._Image1_i = function() {
        var e = new eui.Image;
        return e.bottom = 0,
        e.left = 0,
        e.right = 0,
        e.scale9Grid = new egret.Rectangle(7, 7, 6, 3),
        e.source = "pet_bag_detail_pop_imgbg_png",
        e.top = 0,
        e
    },
    l._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_detail_pop_imgtitlebg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    l.btnClose_i = function() {
        var e = new eui.Image;
        return this.btnClose = e,
        e.source = "title_pop_2022_btnclose_png",
        e.x = 712,
        e.y = 1,
        e
    },
    l._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_resistance_exchange_pop_png",
        e.x = 36,
        e.y = 3,
        e
    },
    l._Image4_i = function() {
        var e = new eui.Image;
        return e.bottom = 0,
        e.source = "pet_bag_change_pop_imglistbg_png",
        e.visible = !0,
        e.width = 728,
        e.x = 12,
        e
    },
    l.btn1_i = function() {
        var e = new eui.RadioButton;
        return this.btn1 = e,
        e.height = 35,
        e.width = 100,
        e.x = 12,
        e.y = 67,
        e.skinName = i,
        e
    },
    l.btn2_i = function() {
        var e = new eui.RadioButton;
        return this.btn2 = e,
        e.height = 35,
        e.width = 100,
        e.x = 112,
        e.y = 67,
        e.skinName = n,
        e
    },
    l.group1_i = function() {
        var e = new eui.Group;
        return this.group1 = e,
        e.visible = !0,
        e.x = 14,
        e.y = 111,
        e.elementsContent = [this.txtProgress_i(), this.btnExchange_i(), this._Group7_i(), this.groupItem_i()],
        e
    },
    l.txtProgress_i = function() {
        var e = new eui.Label;
        return this.txtProgress = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.textColor = 4187130,
        e.x = 562,
        e.y = 282,
        e
    },
    l.btnExchange_i = function() {
        var e = new eui.Group;
        return this.btnExchange = e,
        e.x = 560,
        e.y = 202,
        e.elementsContent = [this._Image5_i(), this._Label1_i()],
        e
    },
    l._Image5_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_main_panel_btnblue_png",
        e.x = 0,
        e.y = 0,
        e
    },
    l._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "REEJI",
        e.size = 20,
        e.text = "更换抗性",
        e.textColor = 2976172,
        e.visible = !0,
        e.x = 27,
        e.y = 13,
        e
    },
    l._Group7_i = function() {
        var e = new eui.Group;
        return e.cacheAsBitmap = !0,
        e.x = 0,
        e.layout = this._TileLayout1_i(),
        e.elementsContent = [this._Group1_i(), this._Group2_i(), this._Group3_i(), this._Group4_i(), this._Group5_i(), this._Group6_i()],
        e
    },
    l._TileLayout1_i = function() {
        var e = new eui.TileLayout;
        return e.requestedColumnCount = 2,
        e
    },
    l._Group1_i = function() {
        var e = new eui.Group;
        return e.scaleX = 1,
        e.scaleY = 1,
        e.elementsContent = [this._Image6_i(), this.txtNum0_i(), this.txtName0_i(), this.imgIcon0_i(), this.btnLock0_i()],
        e
    },
    l._Image6_i = function() {
        var e = new eui.Image;
        return e.height = 55,
        e.scale9Grid = new egret.Rectangle(7, 4, 1, 4),
        e.source = "pet_bag_resistance_item_imgbg_png",
        e.width = 360,
        e
    },
    l.txtNum0_i = function() {
        var e = new eui.Label;
        return this.txtNum0 = e,
        e.fontFamily = "MFShangHei",
        e.right = 227,
        e.size = 16,
        e.textColor = 4187130,
        e.y = 20,
        e
    },
    l.txtName0_i = function() {
        var e = new eui.Label;
        return this.txtName0 = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.textColor = 16777215,
        e.x = 30,
        e.y = 20,
        e
    },
    l.imgIcon0_i = function() {
        var e = new eui.Image;
        return this.imgIcon0 = e,
        e.height = 25,
        e.width = 25,
        e.x = 3,
        e.y = 15,
        e
    },
    l.btnLock0_i = function() {
        var e = new eui.ToggleButton;
        return this.btnLock0 = e,
        e.height = 38,
        e.label = "RadioButton",
        e.verticalCenter = 0,
        e.width = 38,
        e.x = 300,
        e.skinName = r,
        e
    },
    l._Group2_i = function() {
        var e = new eui.Group;
        return e.scaleX = 1,
        e.scaleY = 1,
        e.elementsContent = [this._Image7_i(), this.txtNum3_i(), this.txtName3_i(), this.imgIcon3_i(), this.btnLock3_i()],
        e
    },
    l._Image7_i = function() {
        var e = new eui.Image;
        return e.height = 55,
        e.scale9Grid = new egret.Rectangle(7, 4, 1, 4),
        e.source = "pet_bag_resistance_item_imgbg_png",
        e.visible = !0,
        e.width = 360,
        e
    },
    l.txtNum3_i = function() {
        var e = new eui.Label;
        return this.txtNum3 = e,
        e.fontFamily = "MFShangHei",
        e.right = 227,
        e.size = 16,
        e.textColor = 4187130,
        e.y = 20,
        e
    },
    l.txtName3_i = function() {
        var e = new eui.Label;
        return this.txtName3 = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.textColor = 16777215,
        e.x = 30,
        e.y = 20,
        e
    },
    l.imgIcon3_i = function() {
        var e = new eui.Image;
        return this.imgIcon3 = e,
        e.height = 25,
        e.width = 25,
        e.x = 3,
        e.y = 15,
        e
    },
    l.btnLock3_i = function() {
        var e = new eui.ToggleButton;
        return this.btnLock3 = e,
        e.height = 38,
        e.label = "RadioButton",
        e.verticalCenter = 0,
        e.width = 38,
        e.x = 300,
        e.skinName = a,
        e
    },
    l._Group3_i = function() {
        var e = new eui.Group;
        return e.scaleX = 1,
        e.scaleY = 1,
        e.elementsContent = [this._Image8_i(), this.txtNum1_i(), this.txtName1_i(), this.imgIcon1_i(), this.btnLock1_i()],
        e
    },
    l._Image8_i = function() {
        var e = new eui.Image;
        return e.height = 55,
        e.scale9Grid = new egret.Rectangle(7, 4, 1, 4),
        e.source = "pet_bag_resistance_item_imgbg_png",
        e.width = 360,
        e
    },
    l.txtNum1_i = function() {
        var e = new eui.Label;
        return this.txtNum1 = e,
        e.fontFamily = "MFShangHei",
        e.right = 227,
        e.size = 16,
        e.textColor = 4187130,
        e.visible = !0,
        e.y = 20,
        e
    },
    l.txtName1_i = function() {
        var e = new eui.Label;
        return this.txtName1 = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.textColor = 16777215,
        e.x = 30,
        e.y = 20,
        e
    },
    l.imgIcon1_i = function() {
        var e = new eui.Image;
        return this.imgIcon1 = e,
        e.height = 25,
        e.width = 25,
        e.x = 3,
        e.y = 15,
        e
    },
    l.btnLock1_i = function() {
        var e = new eui.ToggleButton;
        return this.btnLock1 = e,
        e.height = 38,
        e.label = "RadioButton",
        e.verticalCenter = 0,
        e.width = 38,
        e.x = 300,
        e.skinName = o,
        e
    },
    l._Group4_i = function() {
        var e = new eui.Group;
        return e.scaleX = 1,
        e.scaleY = 1,
        e.elementsContent = [this._Image9_i(), this.txtNum4_i(), this.txtName4_i(), this.imgIcon4_i(), this.btnLock4_i()],
        e
    },
    l._Image9_i = function() {
        var e = new eui.Image;
        return e.height = 55,
        e.scale9Grid = new egret.Rectangle(7, 4, 1, 4),
        e.source = "pet_bag_resistance_item_imgbg_png",
        e.width = 360,
        e
    },
    l.txtNum4_i = function() {
        var e = new eui.Label;
        return this.txtNum4 = e,
        e.fontFamily = "MFShangHei",
        e.right = 227,
        e.size = 16,
        e.textColor = 4187130,
        e.y = 20,
        e
    },
    l.txtName4_i = function() {
        var e = new eui.Label;
        return this.txtName4 = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.textColor = 16777215,
        e.x = 30,
        e.y = 20,
        e
    },
    l.imgIcon4_i = function() {
        var e = new eui.Image;
        return this.imgIcon4 = e,
        e.height = 25,
        e.width = 25,
        e.x = 3,
        e.y = 15,
        e
    },
    l.btnLock4_i = function() {
        var e = new eui.ToggleButton;
        return this.btnLock4 = e,
        e.height = 38,
        e.label = "RadioButton",
        e.verticalCenter = 0,
        e.width = 38,
        e.x = 300,
        e.skinName = s,
        e
    },
    l._Group5_i = function() {
        var e = new eui.Group;
        return e.scaleX = 1,
        e.scaleY = 1,
        e.elementsContent = [this._Image10_i(), this.txtNum2_i(), this.txtName2_i(), this.imgIcon2_i(), this.btnLock2_i()],
        e
    },
    l._Image10_i = function() {
        var e = new eui.Image;
        return e.height = 55,
        e.scale9Grid = new egret.Rectangle(7, 4, 1, 4),
        e.source = "pet_bag_resistance_item_imgbg_png",
        e.width = 360,
        e
    },
    l.txtNum2_i = function() {
        var e = new eui.Label;
        return this.txtNum2 = e,
        e.fontFamily = "MFShangHei",
        e.right = 227,
        e.size = 16,
        e.textColor = 4187130,
        e.y = 20,
        e
    },
    l.txtName2_i = function() {
        var e = new eui.Label;
        return this.txtName2 = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.textColor = 16777215,
        e.x = 30,
        e.y = 20,
        e
    },
    l.imgIcon2_i = function() {
        var e = new eui.Image;
        return this.imgIcon2 = e,
        e.height = 25,
        e.width = 25,
        e.x = 3,
        e.y = 15,
        e
    },
    l.btnLock2_i = function() {
        var e = new eui.ToggleButton;
        return this.btnLock2 = e,
        e.height = 38,
        e.label = "RadioButton",
        e.verticalCenter = 0,
        e.width = 38,
        e.x = 300,
        e.skinName = u,
        e
    },
    l._Group6_i = function() {
        var e = new eui.Group;
        return e.scaleX = 1,
        e.scaleY = 1,
        e.elementsContent = [this._Image11_i(), this.txtNum5_i(), this.txtName5_i(), this.imgIcon5_i(), this.btnLock5_i()],
        e
    },
    l._Image11_i = function() {
        var e = new eui.Image;
        return e.height = 55,
        e.scale9Grid = new egret.Rectangle(7, 4, 1, 4),
        e.source = "pet_bag_resistance_item_imgbg_png",
        e.width = 360,
        e
    },
    l.txtNum5_i = function() {
        var e = new eui.Label;
        return this.txtNum5 = e,
        e.fontFamily = "MFShangHei",
        e.right = 227,
        e.size = 16,
        e.textColor = 4187130,
        e.y = 20,
        e
    },
    l.txtName5_i = function() {
        var e = new eui.Label;
        return this.txtName5 = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.textColor = 16777215,
        e.x = 30,
        e.y = 20,
        e
    },
    l.imgIcon5_i = function() {
        var e = new eui.Image;
        return this.imgIcon5 = e,
        e.height = 25,
        e.width = 25,
        e.x = 3,
        e.y = 15,
        e
    },
    l.btnLock5_i = function() {
        var e = new eui.ToggleButton;
        return this.btnLock5 = e,
        e.height = 38,
        e.label = "RadioButton",
        e.verticalCenter = 0,
        e.width = 38,
        e.x = 300,
        e.skinName = _,
        e
    },
    l.groupItem_i = function() {
        var e = new eui.Group;
        return this.groupItem = e,
        e.scaleX = .8,
        e.scaleY = .8,
        e.x = 24,
        e.y = 190,
        e.layout = this._HorizontalLayout1_i(),
        e
    },
    l._HorizontalLayout1_i = function() {
        var e = new eui.HorizontalLayout;
        return e
    },
    l.group2_i = function() {
        var e = new eui.Group;
        return this.group2 = e,
        e.horizontalCenter = 0,
        e.visible = !1,
        e.y = 111,
        e.elementsContent = [this._Scroller1_i(), this.noItemSign_i()],
        e
    },
    l._Scroller1_i = function() {
        var e = new eui.Scroller;
        return e.height = 251.02,
        e.horizontalCenter = 6,
        e.width = 700,
        e.y = 0,
        e.viewport = this.list_i(),
        e
    },
    l.list_i = function() {
        var e = new eui.List;
        return this.list = e,
        e.horizontalCenter = 0,
        e.x = 0,
        e.layout = this._TileLayout2_i(),
        e
    },
    l._TileLayout2_i = function() {
        var e = new eui.TileLayout;
        return e.requestedColumnCount = 9,
        e
    },
    l.noItemSign_i = function() {
        var e = new eui.Image;
        return this.noItemSign = e,
        e.horizontalCenter = 0,
        e.scaleX = 1.05,
        e.scaleY = 1.05,
        e.source = "pet_bag_empty_sign_png",
        e.verticalCenter = -10,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/pop/PetBagResistanceSettingPopSkin.exml"] = window.PetBagResistanceSettingPopSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["btnClose", "ctrlList", "ctrlListAll", "weakList", "weakListAll", "btnEnsure", "infoTxt"],
        this.height = 540,
        this.width = 998,
        this.elementsContent = [this._Image1_i(), this._Image2_i(), this.btnClose_i(), this._Image3_i(), this._Group4_i(), this._Group8_i(), this.btnEnsure_i(), this.infoTxt_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Image1_i = function() {
        var e = new eui.Image;
        return e.bottom = 0,
        e.left = 0,
        e.right = 0,
        e.scale9Grid = new egret.Rectangle(1, 1, 3, 3),
        e.source = "pet_bag_resisetting_bg_png",
        e.top = 0,
        e.visible = !0,
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.left = 0,
        e.right = 0,
        e.scale9Grid = new egret.Rectangle(249, 11, 250, 12),
        e.source = "pet_bag_detail_pop_imgtitlebg_png",
        e.y = 0,
        e
    },
    i.btnClose_i = function() {
        var e = new eui.Image;
        return this.btnClose = e,
        e.right = 5,
        e.source = "title_pop_2022_btnclose_png",
        e.y = 1,
        e
    },
    i._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_resistance_setting_pop_png",
        e.x = 36,
        e.y = 3,
        e
    },
    i._Group4_i = function() {
        var e = new eui.Group;
        return e.height = 350,
        e.left = 25,
        e.visible = !0,
        e.width = 460,
        e.y = 60,
        e.elementsContent = [this._Image4_i(), this._Image5_i(), this._Image6_i(), this._Image7_i(), this._Label1_i(), this._Label2_i(), this._Group1_i(), this._Group3_i()],
        e
    },
    i._Image4_i = function() {
        var e = new eui.Image;
        return e.height = 28,
        e.left = 0,
        e.right = 0,
        e.scale9Grid = new egret.Rectangle(7, 7, 2, 5),
        e.source = "pet_bag_resisetting3_png",
        e.y = -7,
        e
    },
    i._Image5_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = 0,
        e.scaleX = 1.1,
        e.scaleY = 1.1,
        e.source = "pet_bag_resisetting_title1_png",
        e.y = -7,
        e
    },
    i._Image6_i = function() {
        var e = new eui.Image;
        return e.bottom = -22,
        e.left = 0,
        e.right = 0,
        e.scale9Grid = new egret.Rectangle(146, 136, 3, 4),
        e.source = "pet_bag_resisetting2_png",
        e.top = 25,
        e.visible = !0,
        e
    },
    i._Image7_i = function() {
        var e = new eui.Image;
        return e.height = 100,
        e.left = 0,
        e.right = 0,
        e.scale9Grid = new egret.Rectangle(32, 14, 32, 13),
        e.source = "pet_bag_resisetting1_png",
        e.top = 25,
        e.visible = !0,
        e
    },
    i._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "当前抗性",
        e.textColor = 12900350,
        e.width = 232.018,
        e.x = 20,
        e.y = 37,
        e
    },
    i._Label2_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "可指定抗性",
        e.textColor = 12900350,
        e.width = 232.018,
        e.x = 20,
        e.y = 134,
        e
    },
    i._Group1_i = function() {
        var e = new eui.Group;
        return e.height = 48,
        e.left = 8,
        e.right = 8,
        e.scaleX = 1,
        e.scaleY = 1,
        e.y = 67,
        e.elementsContent = [this.ctrlList_i()],
        e
    },
    i.ctrlList_i = function() {
        var e = new eui.List;
        return this.ctrlList = e,
        e.bottom = 0,
        e.left = 0,
        e.right = 0,
        e.top = 0,
        e.layout = this._HorizontalLayout1_i(),
        e
    },
    i._HorizontalLayout1_i = function() {
        var e = new eui.HorizontalLayout;
        return e.gap = 8,
        e
    },
    i._Group3_i = function() {
        var e = new eui.Group;
        return e.bottom = -19,
        e.left = 8,
        e.right = 8,
        e.scaleX = 1,
        e.scaleY = 1,
        e.top = 155,
        e.x = 18,
        e.y = 155,
        e.elementsContent = [this._Scroller1_i()],
        e
    },
    i._Scroller1_i = function() {
        var e = new eui.Scroller;
        return e.bottom = 0,
        e.left = 0,
        e.right = 0,
        e.top = 0,
        e.viewport = this._Group2_i(),
        e
    },
    i._Group2_i = function() {
        var e = new eui.Group;
        return e.elementsContent = [this.ctrlListAll_i()],
        e
    },
    i.ctrlListAll_i = function() {
        var e = new eui.List;
        return this.ctrlListAll = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.visible = !0,
        e.width = 444,
        e.x = 0,
        e.y = 0,
        e.layout = this._TileLayout1_i(),
        e
    },
    i._TileLayout1_i = function() {
        var e = new eui.TileLayout;
        return e.columnAlign = "left",
        e.horizontalGap = 3,
        e.requestedColumnCount = 4,
        e.verticalGap = 0,
        e
    },
    i._Group8_i = function() {
        var e = new eui.Group;
        return e.height = 350,
        e.right = 25,
        e.visible = !0,
        e.width = 460,
        e.y = 60,
        e.elementsContent = [this._Image8_i(), this._Image9_i(), this._Image10_i(), this._Image11_i(), this._Label3_i(), this._Label4_i(), this._Group5_i(), this._Group7_i()],
        e
    },
    i._Image8_i = function() {
        var e = new eui.Image;
        return e.height = 28,
        e.left = 0,
        e.right = 0,
        e.scale9Grid = new egret.Rectangle(7, 7, 2, 5),
        e.source = "pet_bag_resisetting3_png",
        e.y = -7,
        e
    },
    i._Image9_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = 0,
        e.scaleX = 1.1,
        e.scaleY = 1.1,
        e.source = "pet_bag_resisetting_title2_png",
        e.y = -7,
        e
    },
    i._Image10_i = function() {
        var e = new eui.Image;
        return e.bottom = -22,
        e.left = 0,
        e.right = 0,
        e.scale9Grid = new egret.Rectangle(146, 136, 3, 4),
        e.source = "pet_bag_resisetting2_png",
        e.top = 25,
        e.visible = !0,
        e
    },
    i._Image11_i = function() {
        var e = new eui.Image;
        return e.height = 100,
        e.left = 0,
        e.right = 0,
        e.scale9Grid = new egret.Rectangle(32, 14, 32, 13),
        e.source = "pet_bag_resisetting1_png",
        e.top = 25,
        e.visible = !0,
        e
    },
    i._Label3_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "当前抗性",
        e.textColor = 12900350,
        e.width = 232.018,
        e.x = 20,
        e.y = 37,
        e
    },
    i._Label4_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "可指定抗性",
        e.textColor = 12900350,
        e.width = 232.018,
        e.x = 20,
        e.y = 134,
        e
    },
    i._Group5_i = function() {
        var e = new eui.Group;
        return e.height = 48,
        e.left = 8,
        e.right = 8,
        e.scaleX = 1,
        e.scaleY = 1,
        e.y = 67,
        e.elementsContent = [this.weakList_i()],
        e
    },
    i.weakList_i = function() {
        var e = new eui.List;
        return this.weakList = e,
        e.bottom = 0,
        e.left = 0,
        e.right = 0,
        e.top = 0,
        e.layout = this._HorizontalLayout2_i(),
        e
    },
    i._HorizontalLayout2_i = function() {
        var e = new eui.HorizontalLayout;
        return e.gap = 8,
        e
    },
    i._Group7_i = function() {
        var e = new eui.Group;
        return e.bottom = -19,
        e.left = 8,
        e.right = 8,
        e.scaleX = 1,
        e.scaleY = 1,
        e.top = 155,
        e.visible = !0,
        e.x = 18,
        e.y = 155,
        e.elementsContent = [this._Scroller2_i()],
        e
    },
    i._Scroller2_i = function() {
        var e = new eui.Scroller;
        return e.bottom = 0,
        e.left = 0,
        e.right = 0,
        e.scaleX = 1,
        e.scaleY = 1,
        e.top = 0,
        e.viewport = this._Group6_i(),
        e
    },
    i._Group6_i = function() {
        var e = new eui.Group;
        return e.elementsContent = [this.weakListAll_i()],
        e
    },
    i.weakListAll_i = function() {
        var e = new eui.List;
        return this.weakListAll = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.width = 444,
        e.x = 0,
        e.y = 0,
        e.layout = this._TileLayout2_i(),
        e
    },
    i._TileLayout2_i = function() {
        var e = new eui.TileLayout;
        return e.columnAlign = "left",
        e.horizontalGap = 3,
        e.requestedColumnCount = 4,
        e.verticalGap = 0,
        e
    },
    i.btnEnsure_i = function() {
        var e = new eui.Group;
        return this.btnEnsure = e,
        e.bottom = 18,
        e.horizontalCenter = 0,
        e.elementsContent = [this._Image12_i(), this._Label5_i()],
        e
    },
    i._Image12_i = function() {
        var e = new eui.Image;
        return e.source = "title_pop_2022_imgbtn_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i._Label5_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "REEJI",
        e.horizontalCenter = 0,
        e.size = 20,
        e.text = "确定",
        e.textColor = 10246682,
        e.visible = !0,
        e.y = 13,
        e
    },
    i.infoTxt_i = function() {
        var e = new eui.Label;
        return this.infoTxt = e,
        e.fontFamily = "MFShangHei",
        e.height = 30,
        e.left = 25,
        e.right = 25,
        e.size = 17,
        e.text = "请在控制类异常和弱化类异常状态中分别选择X个进行指定更换",
        e.textAlign = "center",
        e.textColor = 8696819,
        e.y = 448,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/pop/PetBagResistanceStrengthenPopSkin.exml"] = window.PetBagResistanceStrengthenPopSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["btnClose", "btn1", "btn2", "imgMaxIcon11", "txtMax11", "btnMax11", "imgOneIcon11", "txtOne11", "btnOne11", "txtName11", "txtNum11", "imgIcon11", "imgMaxIcon12", "txtMax12", "btnMax12", "imgOneIcon12", "txtOne12", "btnOne12", "txtName12", "txtNum12", "imgIcon12", "imgMaxIcon13", "txtMax13", "btnMax13", "txtOne13", "imgOneIcon13", "btnOne13", "txtName13", "txtNum13", "imgIcon13", "btnReset1", "group1", "txtProgress", "btnReset2", "btnChange2", "imgMaxItem0", "txtMax0", "btnMax0", "imgOneItem0", "txtAdd0", "txtOne0", "btnOne0", "txtNum0", "txtName0", "imgIcon0", "imgMaxItem3", "txtMax3", "btnMax3", "imgOneItem3", "txtAdd3", "txtOne3", "btnOne3", "txtNum3", "txtName3", "imgIcon3", "imgMaxItem1", "txtMax1", "btnMax1", "imgOneItem1", "txtAdd1", "txtOne1", "btnOne1", "txtNum1", "txtName1", "imgIcon1", "imgMaxItem4", "txtMax4", "btnMax4", "imgOneItem4", "txtAdd4", "txtOne4", "btnOne4", "txtNum4", "txtName4", "imgIcon4", "imgMaxItem2", "txtMax2", "btnMax2", "imgOneItem2", "txtAdd2", "txtOne2", "btnOne2", "txtNum2", "txtName2", "imgIcon2", "imgMaxItem5", "txtMax5", "btnMax5", "imgOneItem5", "txtAdd5", "txtOne5", "btnOne5", "txtNum5", "txtName5", "imgIcon5", "group2", "groupItem"],
        this.height = 390,
        this.width = 753,
        this.elementsContent = [this._Image1_i(), this._Image2_i(), this.btnClose_i(), this._Image3_i(), this._Image4_i(), this.btn1_i(), this.btn2_i(), this.group1_i(), this.group2_i(), this.groupItem_i()]
    }
    __extends(t, e);
    var i = function(e) {
        function t() {
            e.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i(), this._Label1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "pet_bag_main_panel_btnrbup_png")]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "pet_bag_main_panel_btnrbdown_png"), new eui.SetProperty("_Label1", "textColor", 16777215)]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.percentHeight = 100,
            e.source = "pet_bag_main_panel_btnrbup_png",
            e.percentWidth = 100,
            e
        },
        i._Label1_i = function() {
            var e = new eui.Label;
            return this._Label1 = e,
            e.fontFamily = "MFShangHei",
            e.horizontalCenter = 0,
            e.size = 18,
            e.text = "伤害抗性",
            e.textColor = 7242936,
            e.verticalCenter = 0,
            e
        },
        t
    } (eui.Skin),
    n = function(e) {
        function t() {
            e.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i(), this._Label1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "pet_bag_main_panel_btnrbup_png")]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "pet_bag_main_panel_btnrbdown_png"), new eui.SetProperty("_Label1", "textColor", 16777215)]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.percentHeight = 100,
            e.source = "pet_bag_main_panel_btnrbup_png",
            e.percentWidth = 100,
            e
        },
        i._Label1_i = function() {
            var e = new eui.Label;
            return this._Label1 = e,
            e.fontFamily = "MFShangHei",
            e.horizontalCenter = 0,
            e.size = 18,
            e.text = "异常抗性",
            e.textColor = 7242936,
            e.verticalCenter = 0,
            e.visible = !0,
            e
        },
        t
    } (eui.Skin),
    r = t.prototype;
    return r._Image1_i = function() {
        var e = new eui.Image;
        return e.bottom = 0,
        e.left = 0,
        e.right = 0,
        e.scale9Grid = new egret.Rectangle(7, 7, 6, 3),
        e.source = "pet_bag_detail_pop_imgbg_png",
        e.top = 0,
        e
    },
    r._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_detail_pop_imgtitlebg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    r.btnClose_i = function() {
        var e = new eui.Image;
        return this.btnClose = e,
        e.source = "title_pop_2022_btnclose_png",
        e.x = 712,
        e.y = 1,
        e
    },
    r._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_resistance_strengthen_pop_imgtitle_png",
        e.visible = !0,
        e.x = 36,
        e.y = 3,
        e
    },
    r._Image4_i = function() {
        var e = new eui.Image;
        return e.bottom = 0,
        e.source = "pet_bag_change_pop_imglistbg_png",
        e.visible = !0,
        e.width = 728,
        e.x = 12,
        e
    },
    r.btn1_i = function() {
        var e = new eui.RadioButton;
        return this.btn1 = e,
        e.height = 35,
        e.width = 100,
        e.x = 12,
        e.y = 67,
        e.skinName = i,
        e
    },
    r.btn2_i = function() {
        var e = new eui.RadioButton;
        return this.btn2 = e,
        e.height = 35,
        e.width = 100,
        e.x = 112,
        e.y = 67,
        e.skinName = n,
        e
    },
    r.group1_i = function() {
        var e = new eui.Group;
        return this.group1 = e,
        e.visible = !1,
        e.x = 14,
        e.y = 111,
        e.elementsContent = [this._Group4_i(), this.btnReset1_i()],
        e
    },
    r._Group4_i = function() {
        var e = new eui.Group;
        return e.cacheAsBitmap = !0,
        e.layout = this._VerticalLayout1_i(),
        e.elementsContent = [this._Group1_i(), this._Group2_i(), this._Group3_i()],
        e
    },
    r._VerticalLayout1_i = function() {
        var e = new eui.VerticalLayout;
        return e
    },
    r._Group1_i = function() {
        var e = new eui.Group;
        return e.scaleX = 1,
        e.scaleY = 1,
        e.elementsContent = [this._Image5_i(), this.btnMax11_i(), this.btnOne11_i(), this.txtName11_i(), this.txtNum11_i(), this.imgIcon11_i()],
        e
    },
    r._Image5_i = function() {
        var e = new eui.Image;
        return e.height = 55,
        e.scale9Grid = new egret.Rectangle(7, 4, 1, 4),
        e.source = "pet_bag_resistance_item_imgbg_png",
        e.width = 709,
        e.x = 0,
        e.y = 0,
        e
    },
    r.btnMax11_i = function() {
        var e = new eui.Group;
        return this.btnMax11 = e,
        e.x = 549,
        e.y = 7,
        e.elementsContent = [this._Image6_i(), this._Image7_i(), this.imgMaxIcon11_i(), this._Label1_i(), this.txtMax11_i()],
        e
    },
    r._Image6_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_change_resistance_item_imgyc1_png",
        e.width = 149,
        e.x = 0,
        e.y = 0,
        e
    },
    r._Image7_i = function() {
        var e = new eui.Image;
        return e.scale9Grid = new egret.Rectangle(22, 7, 8, 7),
        e.source = "pet_bag_change_resistance_item_imgyc2_png",
        e.width = 67,
        e.x = 73,
        e.y = 10,
        e
    },
    r.imgMaxIcon11_i = function() {
        var e = new eui.Image;
        return this.imgMaxIcon11 = e,
        e.height = 25,
        e.width = 20,
        e.x = 70,
        e.y = 8,
        e
    },
    r._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "MAX",
        e.textColor = 16777215,
        e.x = 10,
        e.y = 14,
        e
    },
    r.txtMax11_i = function() {
        var e = new eui.Label;
        return this.txtMax11 = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.textColor = 4187130,
        e.x = 99,
        e.y = 14,
        e
    },
    r.btnOne11_i = function() {
        var e = new eui.Group;
        return this.btnOne11 = e,
        e.x = 389,
        e.y = 7,
        e.elementsContent = [this._Image8_i(), this._Image9_i(), this.imgOneIcon11_i(), this._Label2_i(), this.txtOne11_i()],
        e
    },
    r._Image8_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_change_resistance_item_imgyc1_png",
        e.width = 149,
        e.x = 0,
        e.y = 0,
        e
    },
    r._Image9_i = function() {
        var e = new eui.Image;
        return e.scale9Grid = new egret.Rectangle(22, 7, 8, 7),
        e.source = "pet_bag_change_resistance_item_imgyc2_png",
        e.width = 67,
        e.x = 73,
        e.y = 10,
        e
    },
    r.imgOneIcon11_i = function() {
        var e = new eui.Image;
        return this.imgOneIcon11 = e,
        e.height = 25,
        e.width = 20,
        e.x = 71,
        e.y = 8,
        e
    },
    r._Label2_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "+1%",
        e.textColor = 16777215,
        e.x = 10,
        e.y = 14,
        e
    },
    r.txtOne11_i = function() {
        var e = new eui.Label;
        return this.txtOne11 = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.textColor = 4187130,
        e.x = 99,
        e.y = 14,
        e
    },
    r.txtName11_i = function() {
        var e = new eui.Label;
        return this.txtName11 = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.textColor = 16777215,
        e.x = 50,
        e.y = 18,
        e
    },
    r.txtNum11_i = function() {
        var e = new eui.Label;
        return this.txtNum11 = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.textColor = 4187130,
        e.x = 220,
        e.y = 20,
        e
    },
    r.imgIcon11_i = function() {
        var e = new eui.Image;
        return this.imgIcon11 = e,
        e.height = 30,
        e.width = 30,
        e.x = 11,
        e.y = 13,
        e
    },
    r._Group2_i = function() {
        var e = new eui.Group;
        return e.scaleX = 1,
        e.scaleY = 1,
        e.elementsContent = [this._Image10_i(), this.btnMax12_i(), this.btnOne12_i(), this.txtName12_i(), this.txtNum12_i(), this.imgIcon12_i()],
        e
    },
    r._Image10_i = function() {
        var e = new eui.Image;
        return e.height = 55,
        e.scale9Grid = new egret.Rectangle(7, 4, 1, 4),
        e.source = "pet_bag_resistance_item_imgbg_png",
        e.width = 709,
        e.x = 0,
        e.y = 0,
        e
    },
    r.btnMax12_i = function() {
        var e = new eui.Group;
        return this.btnMax12 = e,
        e.x = 549,
        e.y = 7,
        e.elementsContent = [this._Image11_i(), this._Image12_i(), this.imgMaxIcon12_i(), this._Label3_i(), this.txtMax12_i()],
        e
    },
    r._Image11_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_change_resistance_item_imgyc1_png",
        e.width = 149,
        e
    },
    r._Image12_i = function() {
        var e = new eui.Image;
        return e.scale9Grid = new egret.Rectangle(22, 7, 8, 7),
        e.source = "pet_bag_change_resistance_item_imgyc2_png",
        e.width = 67,
        e.x = 73,
        e.y = 10,
        e
    },
    r.imgMaxIcon12_i = function() {
        var e = new eui.Image;
        return this.imgMaxIcon12 = e,
        e.height = 25,
        e.width = 20,
        e.x = 70,
        e.y = 8,
        e
    },
    r._Label3_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "MAX",
        e.textColor = 16777215,
        e.x = 10,
        e.y = 14,
        e
    },
    r.txtMax12_i = function() {
        var e = new eui.Label;
        return this.txtMax12 = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.textColor = 4187130,
        e.x = 99,
        e.y = 14,
        e
    },
    r.btnOne12_i = function() {
        var e = new eui.Group;
        return this.btnOne12 = e,
        e.x = 389,
        e.y = 7,
        e.elementsContent = [this._Image13_i(), this._Image14_i(), this.imgOneIcon12_i(), this._Label4_i(), this.txtOne12_i()],
        e
    },
    r._Image13_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_change_resistance_item_imgyc1_png",
        e.width = 149,
        e
    },
    r._Image14_i = function() {
        var e = new eui.Image;
        return e.scale9Grid = new egret.Rectangle(22, 7, 8, 7),
        e.source = "pet_bag_change_resistance_item_imgyc2_png",
        e.width = 67,
        e.x = 73,
        e.y = 10,
        e
    },
    r.imgOneIcon12_i = function() {
        var e = new eui.Image;
        return this.imgOneIcon12 = e,
        e.height = 25,
        e.width = 20,
        e.x = 71,
        e.y = 8,
        e
    },
    r._Label4_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "+1%",
        e.textColor = 16777215,
        e.x = 10,
        e.y = 14,
        e
    },
    r.txtOne12_i = function() {
        var e = new eui.Label;
        return this.txtOne12 = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.textColor = 4187130,
        e.x = 99,
        e.y = 14,
        e
    },
    r.txtName12_i = function() {
        var e = new eui.Label;
        return this.txtName12 = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.textColor = 16777215,
        e.x = 50,
        e.y = 18,
        e
    },
    r.txtNum12_i = function() {
        var e = new eui.Label;
        return this.txtNum12 = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.textColor = 4187130,
        e.x = 220,
        e.y = 20,
        e
    },
    r.imgIcon12_i = function() {
        var e = new eui.Image;
        return this.imgIcon12 = e,
        e.height = 30,
        e.width = 30,
        e.x = 11,
        e.y = 13,
        e
    },
    r._Group3_i = function() {
        var e = new eui.Group;
        return e.scaleX = 1,
        e.scaleY = 1,
        e.elementsContent = [this._Image15_i(), this.btnMax13_i(), this.btnOne13_i(), this.txtName13_i(), this.txtNum13_i(), this.imgIcon13_i()],
        e
    },
    r._Image15_i = function() {
        var e = new eui.Image;
        return e.height = 55,
        e.scale9Grid = new egret.Rectangle(7, 4, 1, 4),
        e.source = "pet_bag_resistance_item_imgbg_png",
        e.width = 709,
        e.x = 0,
        e.y = 0,
        e
    },
    r.btnMax13_i = function() {
        var e = new eui.Group;
        return this.btnMax13 = e,
        e.x = 549,
        e.y = 7,
        e.elementsContent = [this._Image16_i(), this._Image17_i(), this.imgMaxIcon13_i(), this._Label5_i(), this.txtMax13_i()],
        e
    },
    r._Image16_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_change_resistance_item_imgyc1_png",
        e.width = 149,
        e
    },
    r._Image17_i = function() {
        var e = new eui.Image;
        return e.scale9Grid = new egret.Rectangle(22, 7, 8, 7),
        e.source = "pet_bag_change_resistance_item_imgyc2_png",
        e.width = 67,
        e.x = 73,
        e.y = 10,
        e
    },
    r.imgMaxIcon13_i = function() {
        var e = new eui.Image;
        return this.imgMaxIcon13 = e,
        e.height = 25,
        e.width = 20,
        e.x = 70,
        e.y = 8,
        e
    },
    r._Label5_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "MAX",
        e.textColor = 16777215,
        e.x = 10,
        e.y = 14,
        e
    },
    r.txtMax13_i = function() {
        var e = new eui.Label;
        return this.txtMax13 = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.textColor = 4187130,
        e.x = 99,
        e.y = 14,
        e
    },
    r.btnOne13_i = function() {
        var e = new eui.Group;
        return this.btnOne13 = e,
        e.x = 389,
        e.y = 7,
        e.elementsContent = [this._Image18_i(), this._Image19_i(), this._Label6_i(), this.txtOne13_i(), this.imgOneIcon13_i()],
        e
    },
    r._Image18_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_change_resistance_item_imgyc1_png",
        e.width = 149,
        e
    },
    r._Image19_i = function() {
        var e = new eui.Image;
        return e.scale9Grid = new egret.Rectangle(22, 7, 8, 7),
        e.source = "pet_bag_change_resistance_item_imgyc2_png",
        e.width = 67,
        e.x = 73,
        e.y = 10,
        e
    },
    r._Label6_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "+1%",
        e.textColor = 16777215,
        e.x = 10,
        e.y = 14,
        e
    },
    r.txtOne13_i = function() {
        var e = new eui.Label;
        return this.txtOne13 = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.textColor = 4187130,
        e.x = 99,
        e.y = 14,
        e
    },
    r.imgOneIcon13_i = function() {
        var e = new eui.Image;
        return this.imgOneIcon13 = e,
        e.height = 25,
        e.width = 20,
        e.x = 71,
        e.y = 8,
        e
    },
    r.txtName13_i = function() {
        var e = new eui.Label;
        return this.txtName13 = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.textColor = 16777215,
        e.x = 50,
        e.y = 18,
        e
    },
    r.txtNum13_i = function() {
        var e = new eui.Label;
        return this.txtNum13 = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.textColor = 4187130,
        e.x = 220,
        e.y = 20,
        e
    },
    r.imgIcon13_i = function() {
        var e = new eui.Image;
        return this.imgIcon13 = e,
        e.height = 30,
        e.width = 30,
        e.x = 11,
        e.y = 13,
        e
    },
    r.btnReset1_i = function() {
        var e = new eui.Group;
        return this.btnReset1 = e,
        e.x = 560,
        e.y = 202,
        e.elementsContent = [this._Image20_i(), this._Label7_i()],
        e
    },
    r._Image20_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_main_panel_btnblue_png",
        e.x = 0,
        e.y = 0,
        e
    },
    r._Label7_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "REEJI",
        e.size = 20,
        e.text = "重置抗性",
        e.textColor = 2976172,
        e.visible = !0,
        e.x = 27,
        e.y = 13,
        e
    },
    r.group2_i = function() {
        var e = new eui.Group;
        return this.group2 = e,
        e.visible = !0,
        e.x = 14,
        e.y = 111,
        e.elementsContent = [this.txtProgress_i(), this.btnReset2_i(), this.btnChange2_i(), this._Group11_i()],
        e
    },
    r.txtProgress_i = function() {
        var e = new eui.Label;
        return this.txtProgress = e,
        e.fontFamily = "MFShangHei",
        e.height = 33,
        e.size = 18,
        e.textAlign = "right",
        e.textColor = 4187130,
        e.verticalAlign = "top",
        e.width = 286,
        e.x = 433,
        e.y = -36,
        e
    },
    r.btnReset2_i = function() {
        var e = new eui.Group;
        return this.btnReset2 = e,
        e.x = 560,
        e.y = 202,
        e.elementsContent = [this._Image21_i(), this._Label8_i()],
        e
    },
    r._Image21_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_main_panel_btnblue_png",
        e.x = 0,
        e.y = 0,
        e
    },
    r._Label8_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "REEJI",
        e.size = 20,
        e.text = "重置抗性",
        e.textColor = 2976172,
        e.visible = !0,
        e.x = 27,
        e.y = 13,
        e
    },
    r.btnChange2_i = function() {
        var e = new eui.Group;
        return this.btnChange2 = e,
        e.visible = !1,
        e.x = 386,
        e.y = 256,
        e.elementsContent = [this._Image22_i(), this._Label9_i()],
        e
    },
    r._Image22_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_main_panel_btnblue_png",
        e.x = 0,
        e.y = 0,
        e
    },
    r._Label9_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "REEJI",
        e.size = 20,
        e.text = "更换抗性",
        e.textColor = 2976172,
        e.visible = !0,
        e.x = 27,
        e.y = 13,
        e
    },
    r._Group11_i = function() {
        var e = new eui.Group;
        return e.cacheAsBitmap = !0,
        e.x = 0,
        e.layout = this._TileLayout1_i(),
        e.elementsContent = [this._Group5_i(), this._Group6_i(), this._Group7_i(), this._Group8_i(), this._Group9_i(), this._Group10_i()],
        e
    },
    r._TileLayout1_i = function() {
        var e = new eui.TileLayout;
        return e.requestedColumnCount = 2,
        e
    },
    r._Group5_i = function() {
        var e = new eui.Group;
        return e.scaleX = 1,
        e.scaleY = 1,
        e.elementsContent = [this._Image23_i(), this.btnMax0_i(), this.btnOne0_i(), this.txtNum0_i(), this.txtName0_i(), this.imgIcon0_i()],
        e
    },
    r._Image23_i = function() {
        var e = new eui.Image;
        return e.height = 55,
        e.scale9Grid = new egret.Rectangle(7, 4, 1, 4),
        e.source = "pet_bag_resistance_item_imgbg_png",
        e.width = 360,
        e
    },
    r.btnMax0_i = function() {
        var e = new eui.Group;
        return this.btnMax0 = e,
        e.visible = !0,
        e.x = 261,
        e.y = 7,
        e.elementsContent = [this._Image24_i(), this._Image25_i(), this.imgMaxItem0_i(), this._Label10_i(), this.txtMax0_i()],
        e
    },
    r._Image24_i = function() {
        var e = new eui.Image;
        return e.height = 41,
        e.source = "pet_bag_change_resistance_item_imgyc1_png",
        e.width = 96,
        e.x = 0,
        e.y = 0,
        e
    },
    r._Image25_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_change_resistance_item_imgyc2_png",
        e.x = 46,
        e.y = 10,
        e
    },
    r.imgMaxItem0_i = function() {
        var e = new eui.Image;
        return this.imgMaxItem0 = e,
        e.height = 25,
        e.width = 20,
        e.x = 44,
        e.y = 8,
        e
    },
    r._Label10_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "MAX",
        e.textColor = 16777215,
        e.x = 4,
        e.y = 14,
        e
    },
    r.txtMax0_i = function() {
        var e = new eui.Label;
        return this.txtMax0 = e,
        e.fontFamily = "MFShangHei",
        e.size = 14,
        e.textColor = 4187130,
        e.x = 61,
        e.y = 16,
        e
    },
    r.btnOne0_i = function() {
        var e = new eui.Group;
        return this.btnOne0 = e,
        e.visible = !0,
        e.x = 164,
        e.y = 7,
        e.elementsContent = [this._Image26_i(), this._Image27_i(), this.imgOneItem0_i(), this.txtAdd0_i(), this.txtOne0_i()],
        e
    },
    r._Image26_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_change_resistance_item_imgyc1_png",
        e.width = 95,
        e.x = 0,
        e.y = 0,
        e
    },
    r._Image27_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_change_resistance_item_imgyc2_png",
        e.x = 46,
        e.y = 10,
        e
    },
    r.imgOneItem0_i = function() {
        var e = new eui.Image;
        return this.imgOneItem0 = e,
        e.height = 25,
        e.width = 20,
        e.x = 44,
        e.y = 8,
        e
    },
    r.txtAdd0_i = function() {
        var e = new eui.Label;
        return this.txtAdd0 = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "+1%",
        e.textColor = 16777215,
        e.x = 4,
        e.y = 14,
        e
    },
    r.txtOne0_i = function() {
        var e = new eui.Label;
        return this.txtOne0 = e,
        e.fontFamily = "MFShangHei",
        e.size = 14,
        e.textColor = 4187130,
        e.x = 61,
        e.y = 16,
        e
    },
    r.txtNum0_i = function() {
        var e = new eui.Label;
        return this.txtNum0 = e,
        e.fontFamily = "MFShangHei",
        e.right = 227,
        e.size = 16,
        e.textColor = 4187130,
        e.y = 20,
        e
    },
    r.txtName0_i = function() {
        var e = new eui.Label;
        return this.txtName0 = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.textColor = 16777215,
        e.x = 30,
        e.y = 20,
        e
    },
    r.imgIcon0_i = function() {
        var e = new eui.Image;
        return this.imgIcon0 = e,
        e.height = 25,
        e.width = 25,
        e.x = 3,
        e.y = 15,
        e
    },
    r._Group6_i = function() {
        var e = new eui.Group;
        return e.scaleX = 1,
        e.scaleY = 1,
        e.elementsContent = [this._Image28_i(), this.btnMax3_i(), this.btnOne3_i(), this.txtNum3_i(), this.txtName3_i(), this.imgIcon3_i()],
        e
    },
    r._Image28_i = function() {
        var e = new eui.Image;
        return e.height = 55,
        e.scale9Grid = new egret.Rectangle(7, 4, 1, 4),
        e.source = "pet_bag_resistance_item_imgbg_png",
        e.visible = !0,
        e.width = 360,
        e
    },
    r.btnMax3_i = function() {
        var e = new eui.Group;
        return this.btnMax3 = e,
        e.visible = !0,
        e.x = 261,
        e.y = 7,
        e.elementsContent = [this._Image29_i(), this._Image30_i(), this.imgMaxItem3_i(), this._Label11_i(), this.txtMax3_i()],
        e
    },
    r._Image29_i = function() {
        var e = new eui.Image;
        return e.height = 41,
        e.source = "pet_bag_change_resistance_item_imgyc1_png",
        e.width = 96,
        e.x = 0,
        e.y = 0,
        e
    },
    r._Image30_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_change_resistance_item_imgyc2_png",
        e.x = 46,
        e.y = 10,
        e
    },
    r.imgMaxItem3_i = function() {
        var e = new eui.Image;
        return this.imgMaxItem3 = e,
        e.height = 25,
        e.width = 20,
        e.x = 44,
        e.y = 8,
        e
    },
    r._Label11_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "MAX",
        e.textColor = 16777215,
        e.x = 4,
        e.y = 14,
        e
    },
    r.txtMax3_i = function() {
        var e = new eui.Label;
        return this.txtMax3 = e,
        e.fontFamily = "MFShangHei",
        e.size = 14,
        e.textColor = 4187130,
        e.x = 61,
        e.y = 16,
        e
    },
    r.btnOne3_i = function() {
        var e = new eui.Group;
        return this.btnOne3 = e,
        e.visible = !0,
        e.x = 164,
        e.y = 7,
        e.elementsContent = [this._Image31_i(), this._Image32_i(), this.imgOneItem3_i(), this.txtAdd3_i(), this.txtOne3_i()],
        e
    },
    r._Image31_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_change_resistance_item_imgyc1_png",
        e.width = 95,
        e.x = 0,
        e.y = 0,
        e
    },
    r._Image32_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_change_resistance_item_imgyc2_png",
        e.x = 46,
        e.y = 10,
        e
    },
    r.imgOneItem3_i = function() {
        var e = new eui.Image;
        return this.imgOneItem3 = e,
        e.height = 25,
        e.width = 20,
        e.x = 44,
        e.y = 8,
        e
    },
    r.txtAdd3_i = function() {
        var e = new eui.Label;
        return this.txtAdd3 = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "+1%",
        e.textColor = 16777215,
        e.x = 4,
        e.y = 14,
        e
    },
    r.txtOne3_i = function() {
        var e = new eui.Label;
        return this.txtOne3 = e,
        e.fontFamily = "MFShangHei",
        e.size = 14,
        e.textColor = 4187130,
        e.x = 61,
        e.y = 16,
        e
    },
    r.txtNum3_i = function() {
        var e = new eui.Label;
        return this.txtNum3 = e,
        e.fontFamily = "MFShangHei",
        e.right = 227,
        e.size = 16,
        e.textColor = 4187130,
        e.y = 20,
        e
    },
    r.txtName3_i = function() {
        var e = new eui.Label;
        return this.txtName3 = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.textColor = 16777215,
        e.x = 30,
        e.y = 20,
        e
    },
    r.imgIcon3_i = function() {
        var e = new eui.Image;
        return this.imgIcon3 = e,
        e.height = 25,
        e.width = 25,
        e.x = 3,
        e.y = 15,
        e
    },
    r._Group7_i = function() {
        var e = new eui.Group;
        return e.scaleX = 1,
        e.scaleY = 1,
        e.elementsContent = [this._Image33_i(), this.btnMax1_i(), this.btnOne1_i(), this.txtNum1_i(), this.txtName1_i(), this.imgIcon1_i()],
        e
    },
    r._Image33_i = function() {
        var e = new eui.Image;
        return e.height = 55,
        e.scale9Grid = new egret.Rectangle(7, 4, 1, 4),
        e.source = "pet_bag_resistance_item_imgbg_png",
        e.width = 360,
        e
    },
    r.btnMax1_i = function() {
        var e = new eui.Group;
        return this.btnMax1 = e,
        e.visible = !0,
        e.x = 261,
        e.y = 7,
        e.elementsContent = [this._Image34_i(), this._Image35_i(), this.imgMaxItem1_i(), this._Label12_i(), this.txtMax1_i()],
        e
    },
    r._Image34_i = function() {
        var e = new eui.Image;
        return e.height = 41,
        e.source = "pet_bag_change_resistance_item_imgyc1_png",
        e.width = 96,
        e.x = 0,
        e.y = 0,
        e
    },
    r._Image35_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_change_resistance_item_imgyc2_png",
        e.x = 46,
        e.y = 10,
        e
    },
    r.imgMaxItem1_i = function() {
        var e = new eui.Image;
        return this.imgMaxItem1 = e,
        e.height = 25,
        e.width = 20,
        e.x = 44,
        e.y = 8,
        e
    },
    r._Label12_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "MAX",
        e.textColor = 16777215,
        e.x = 4,
        e.y = 14,
        e
    },
    r.txtMax1_i = function() {
        var e = new eui.Label;
        return this.txtMax1 = e,
        e.fontFamily = "MFShangHei",
        e.size = 14,
        e.textColor = 4187130,
        e.x = 61,
        e.y = 16,
        e
    },
    r.btnOne1_i = function() {
        var e = new eui.Group;
        return this.btnOne1 = e,
        e.visible = !0,
        e.x = 164,
        e.y = 7,
        e.elementsContent = [this._Image36_i(), this._Image37_i(), this.imgOneItem1_i(), this.txtAdd1_i(), this.txtOne1_i()],
        e
    },
    r._Image36_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_change_resistance_item_imgyc1_png",
        e.width = 95,
        e.x = 0,
        e.y = 0,
        e
    },
    r._Image37_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_change_resistance_item_imgyc2_png",
        e.x = 46,
        e.y = 10,
        e
    },
    r.imgOneItem1_i = function() {
        var e = new eui.Image;
        return this.imgOneItem1 = e,
        e.height = 25,
        e.width = 20,
        e.x = 44,
        e.y = 8,
        e
    },
    r.txtAdd1_i = function() {
        var e = new eui.Label;
        return this.txtAdd1 = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "+1%",
        e.textColor = 16777215,
        e.x = 4,
        e.y = 14,
        e
    },
    r.txtOne1_i = function() {
        var e = new eui.Label;
        return this.txtOne1 = e,
        e.fontFamily = "MFShangHei",
        e.size = 14,
        e.textColor = 4187130,
        e.x = 61,
        e.y = 16,
        e
    },
    r.txtNum1_i = function() {
        var e = new eui.Label;
        return this.txtNum1 = e,
        e.fontFamily = "MFShangHei",
        e.right = 227,
        e.size = 16,
        e.textColor = 4187130,
        e.y = 20,
        e
    },
    r.txtName1_i = function() {
        var e = new eui.Label;
        return this.txtName1 = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.textColor = 16777215,
        e.x = 30,
        e.y = 20,
        e
    },
    r.imgIcon1_i = function() {
        var e = new eui.Image;
        return this.imgIcon1 = e,
        e.height = 25,
        e.width = 25,
        e.x = 3,
        e.y = 15,
        e
    },
    r._Group8_i = function() {
        var e = new eui.Group;
        return e.scaleX = 1,
        e.scaleY = 1,
        e.elementsContent = [this._Image38_i(), this.btnMax4_i(), this.btnOne4_i(), this.txtNum4_i(), this.txtName4_i(), this.imgIcon4_i()],
        e
    },
    r._Image38_i = function() {
        var e = new eui.Image;
        return e.height = 55,
        e.scale9Grid = new egret.Rectangle(7, 4, 1, 4),
        e.source = "pet_bag_resistance_item_imgbg_png",
        e.width = 360,
        e
    },
    r.btnMax4_i = function() {
        var e = new eui.Group;
        return this.btnMax4 = e,
        e.visible = !0,
        e.x = 261,
        e.y = 7,
        e.elementsContent = [this._Image39_i(), this._Image40_i(), this.imgMaxItem4_i(), this._Label13_i(), this.txtMax4_i()],
        e
    },
    r._Image39_i = function() {
        var e = new eui.Image;
        return e.height = 41,
        e.source = "pet_bag_change_resistance_item_imgyc1_png",
        e.width = 96,
        e.x = 0,
        e.y = 0,
        e
    },
    r._Image40_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_change_resistance_item_imgyc2_png",
        e.x = 46,
        e.y = 10,
        e
    },
    r.imgMaxItem4_i = function() {
        var e = new eui.Image;
        return this.imgMaxItem4 = e,
        e.height = 25,
        e.width = 20,
        e.x = 44,
        e.y = 8,
        e
    },
    r._Label13_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "MAX",
        e.textColor = 16777215,
        e.x = 4,
        e.y = 14,
        e
    },
    r.txtMax4_i = function() {
        var e = new eui.Label;
        return this.txtMax4 = e,
        e.fontFamily = "MFShangHei",
        e.size = 14,
        e.textColor = 4187130,
        e.x = 61,
        e.y = 16,
        e
    },
    r.btnOne4_i = function() {
        var e = new eui.Group;
        return this.btnOne4 = e,
        e.visible = !0,
        e.x = 164,
        e.y = 7,
        e.elementsContent = [this._Image41_i(), this._Image42_i(), this.imgOneItem4_i(), this.txtAdd4_i(), this.txtOne4_i()],
        e
    },
    r._Image41_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_change_resistance_item_imgyc1_png",
        e.width = 95,
        e.x = 0,
        e.y = 0,
        e
    },
    r._Image42_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_change_resistance_item_imgyc2_png",
        e.x = 46,
        e.y = 10,
        e
    },
    r.imgOneItem4_i = function() {
        var e = new eui.Image;
        return this.imgOneItem4 = e,
        e.height = 25,
        e.width = 20,
        e.x = 44,
        e.y = 8,
        e
    },
    r.txtAdd4_i = function() {
        var e = new eui.Label;
        return this.txtAdd4 = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "+1%",
        e.textColor = 16777215,
        e.x = 4,
        e.y = 14,
        e
    },
    r.txtOne4_i = function() {
        var e = new eui.Label;
        return this.txtOne4 = e,
        e.fontFamily = "MFShangHei",
        e.size = 14,
        e.textColor = 4187130,
        e.x = 61,
        e.y = 16,
        e
    },
    r.txtNum4_i = function() {
        var e = new eui.Label;
        return this.txtNum4 = e,
        e.fontFamily = "MFShangHei",
        e.right = 227,
        e.size = 16,
        e.textColor = 4187130,
        e.y = 20,
        e
    },
    r.txtName4_i = function() {
        var e = new eui.Label;
        return this.txtName4 = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.textColor = 16777215,
        e.x = 30,
        e.y = 20,
        e
    },
    r.imgIcon4_i = function() {
        var e = new eui.Image;
        return this.imgIcon4 = e,
        e.height = 25,
        e.width = 25,
        e.x = 3,
        e.y = 15,
        e
    },
    r._Group9_i = function() {
        var e = new eui.Group;
        return e.scaleX = 1,
        e.scaleY = 1,
        e.elementsContent = [this._Image43_i(), this.btnMax2_i(), this.btnOne2_i(), this.txtNum2_i(), this.txtName2_i(), this.imgIcon2_i()],
        e
    },
    r._Image43_i = function() {
        var e = new eui.Image;
        return e.height = 55,
        e.scale9Grid = new egret.Rectangle(7, 4, 1, 4),
        e.source = "pet_bag_resistance_item_imgbg_png",
        e.width = 360,
        e
    },
    r.btnMax2_i = function() {
        var e = new eui.Group;
        return this.btnMax2 = e,
        e.visible = !0,
        e.x = 261,
        e.y = 7,
        e.elementsContent = [this._Image44_i(), this._Image45_i(), this.imgMaxItem2_i(), this._Label14_i(), this.txtMax2_i()],
        e
    },
    r._Image44_i = function() {
        var e = new eui.Image;
        return e.height = 41,
        e.source = "pet_bag_change_resistance_item_imgyc1_png",
        e.width = 96,
        e.x = 0,
        e.y = 0,
        e
    },
    r._Image45_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_change_resistance_item_imgyc2_png",
        e.x = 46,
        e.y = 10,
        e
    },
    r.imgMaxItem2_i = function() {
        var e = new eui.Image;
        return this.imgMaxItem2 = e,
        e.height = 25,
        e.width = 20,
        e.x = 44,
        e.y = 8,
        e
    },
    r._Label14_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "MAX",
        e.textColor = 16777215,
        e.x = 4,
        e.y = 14,
        e
    },
    r.txtMax2_i = function() {
        var e = new eui.Label;
        return this.txtMax2 = e,
        e.fontFamily = "MFShangHei",
        e.size = 14,
        e.textColor = 4187130,
        e.x = 61,
        e.y = 16,
        e
    },
    r.btnOne2_i = function() {
        var e = new eui.Group;
        return this.btnOne2 = e,
        e.visible = !0,
        e.x = 164,
        e.y = 7,
        e.elementsContent = [this._Image46_i(), this._Image47_i(), this.imgOneItem2_i(), this.txtAdd2_i(), this.txtOne2_i()],
        e
    },
    r._Image46_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_change_resistance_item_imgyc1_png",
        e.width = 95,
        e.x = 0,
        e.y = 0,
        e
    },
    r._Image47_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_change_resistance_item_imgyc2_png",
        e.x = 46,
        e.y = 10,
        e
    },
    r.imgOneItem2_i = function() {
        var e = new eui.Image;
        return this.imgOneItem2 = e,
        e.height = 25,
        e.width = 20,
        e.x = 44,
        e.y = 8,
        e
    },
    r.txtAdd2_i = function() {
        var e = new eui.Label;
        return this.txtAdd2 = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "+1%",
        e.textColor = 16777215,
        e.x = 4,
        e.y = 14,
        e
    },
    r.txtOne2_i = function() {
        var e = new eui.Label;
        return this.txtOne2 = e,
        e.fontFamily = "MFShangHei",
        e.size = 14,
        e.textColor = 4187130,
        e.x = 61,
        e.y = 16,
        e
    },
    r.txtNum2_i = function() {
        var e = new eui.Label;
        return this.txtNum2 = e,
        e.fontFamily = "MFShangHei",
        e.right = 227,
        e.size = 16,
        e.textColor = 4187130,
        e.y = 20,
        e
    },
    r.txtName2_i = function() {
        var e = new eui.Label;
        return this.txtName2 = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.textColor = 16777215,
        e.x = 30,
        e.y = 20,
        e
    },
    r.imgIcon2_i = function() {
        var e = new eui.Image;
        return this.imgIcon2 = e,
        e.height = 25,
        e.width = 25,
        e.x = 3,
        e.y = 15,
        e
    },
    r._Group10_i = function() {
        var e = new eui.Group;
        return e.scaleX = 1,
        e.scaleY = 1,
        e.elementsContent = [this._Image48_i(), this.btnMax5_i(), this.btnOne5_i(), this.txtNum5_i(), this.txtName5_i(), this.imgIcon5_i()],
        e
    },
    r._Image48_i = function() {
        var e = new eui.Image;
        return e.height = 55,
        e.scale9Grid = new egret.Rectangle(7, 4, 1, 4),
        e.source = "pet_bag_resistance_item_imgbg_png",
        e.width = 360,
        e
    },
    r.btnMax5_i = function() {
        var e = new eui.Group;
        return this.btnMax5 = e,
        e.visible = !0,
        e.x = 261,
        e.y = 7,
        e.elementsContent = [this._Image49_i(), this._Image50_i(), this.imgMaxItem5_i(), this._Label15_i(), this.txtMax5_i()],
        e
    },
    r._Image49_i = function() {
        var e = new eui.Image;
        return e.height = 41,
        e.source = "pet_bag_change_resistance_item_imgyc1_png",
        e.width = 96,
        e.x = 0,
        e.y = 0,
        e
    },
    r._Image50_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_change_resistance_item_imgyc2_png",
        e.x = 46,
        e.y = 10,
        e
    },
    r.imgMaxItem5_i = function() {
        var e = new eui.Image;
        return this.imgMaxItem5 = e,
        e.height = 25,
        e.width = 20,
        e.x = 44,
        e.y = 8,
        e
    },
    r._Label15_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "MAX",
        e.textColor = 16777215,
        e.x = 4,
        e.y = 14,
        e
    },
    r.txtMax5_i = function() {
        var e = new eui.Label;
        return this.txtMax5 = e,
        e.fontFamily = "MFShangHei",
        e.size = 14,
        e.textColor = 4187130,
        e.x = 61,
        e.y = 16,
        e
    },
    r.btnOne5_i = function() {
        var e = new eui.Group;
        return this.btnOne5 = e,
        e.visible = !0,
        e.x = 164,
        e.y = 7,
        e.elementsContent = [this._Image51_i(), this._Image52_i(), this.imgOneItem5_i(), this.txtAdd5_i(), this.txtOne5_i()],
        e
    },
    r._Image51_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_change_resistance_item_imgyc1_png",
        e.width = 95,
        e.x = 0,
        e.y = 0,
        e
    },
    r._Image52_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_change_resistance_item_imgyc2_png",
        e.x = 46,
        e.y = 10,
        e
    },
    r.imgOneItem5_i = function() {
        var e = new eui.Image;
        return this.imgOneItem5 = e,
        e.height = 25,
        e.width = 20,
        e.x = 44,
        e.y = 8,
        e
    },
    r.txtAdd5_i = function() {
        var e = new eui.Label;
        return this.txtAdd5 = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "+1%",
        e.textColor = 16777215,
        e.x = 4,
        e.y = 14,
        e
    },
    r.txtOne5_i = function() {
        var e = new eui.Label;
        return this.txtOne5 = e,
        e.fontFamily = "MFShangHei",
        e.size = 14,
        e.textColor = 4187130,
        e.x = 61,
        e.y = 16,
        e
    },
    r.txtNum5_i = function() {
        var e = new eui.Label;
        return this.txtNum5 = e,
        e.fontFamily = "MFShangHei",
        e.right = 227,
        e.size = 16,
        e.textColor = 4187130,
        e.y = 20,
        e
    },
    r.txtName5_i = function() {
        var e = new eui.Label;
        return this.txtName5 = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.textColor = 16777215,
        e.x = 30,
        e.y = 20,
        e
    },
    r.imgIcon5_i = function() {
        var e = new eui.Image;
        return this.imgIcon5 = e,
        e.height = 25,
        e.width = 25,
        e.x = 3,
        e.y = 15,
        e
    },
    r.groupItem_i = function() {
        var e = new eui.Group;
        return this.groupItem = e,
        e.scaleX = .8,
        e.scaleY = .8,
        e.x = 38,
        e.y = 302,
        e.layout = this._HorizontalLayout1_i(),
        e
    },
    r._HorizontalLayout1_i = function() {
        var e = new eui.HorizontalLayout;
        return e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/pop/PetBagSEffectPreviewPopSkin.exml"] = window.PetBagSEffectPreviewPopSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["btnClose", "txtCurSEffect", "imgStar1", "imgStar2", "imgStar3", "imgStar4", "imgStar5", "txt5", "txt4", "txt3", "txt2", "txt1"],
        this.height = 431,
        this.width = 753,
        this.elementsContent = [this._Image1_i(), this._Image2_i(), this._Image3_i(), this._Image4_i(), this.btnClose_i(), this._Group1_i(), this._Image5_i(), this._Image6_i(), this._Image7_i(), this._Image8_i(), this._Image9_i(), this._Group2_i(), this._Group3_i(), this._Group4_i(), this._Group5_i(), this._Group6_i(), this.txt5_i(), this.txt4_i(), this.txt3_i(), this.txt2_i(), this.txt1_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Image1_i = function() {
        var e = new eui.Image;
        return e.bottom = 0,
        e.left = 0,
        e.right = 0,
        e.scale9Grid = new egret.Rectangle(7, 7, 6, 3),
        e.source = "pet_bag_detail_pop_imgbg_png",
        e.top = 0,
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.height = 330,
        e.source = "pet_bag_change_pop_imglistbg_png",
        e.width = 723,
        e.x = 15,
        e.y = 44,
        e
    },
    i._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_detail_pop_imgtitlebg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i._Image4_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_s_effect_preview_pop_imgtitle_png",
        e.x = 36,
        e.y = 2,
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
    i._Group1_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = 0,
        e.y = 57,
        e.layout = this._HorizontalLayout1_i(),
        e.elementsContent = [this.txtCurSEffect_i(), this.imgStar1_i(), this.imgStar2_i(), this.imgStar3_i(), this.imgStar4_i(), this.imgStar5_i()],
        e
    },
    i._HorizontalLayout1_i = function() {
        var e = new eui.HorizontalLayout;
        return e.gap = 0,
        e.verticalAlign = "middle",
        e
    },
    i.txtCurSEffect_i = function() {
        var e = new eui.Label;
        return this.txtCurSEffect = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.textColor = 4187130,
        e
    },
    i.imgStar1_i = function() {
        var e = new eui.Image;
        return this.imgStar1 = e,
        e.x = 136,
        e.y = 0,
        e
    },
    i.imgStar2_i = function() {
        var e = new eui.Image;
        return this.imgStar2 = e,
        e.x = 162,
        e.y = 0,
        e
    },
    i.imgStar3_i = function() {
        var e = new eui.Image;
        return this.imgStar3 = e,
        e.x = 188,
        e.y = 0,
        e
    },
    i.imgStar4_i = function() {
        var e = new eui.Image;
        return this.imgStar4 = e,
        e.x = 214,
        e.y = 0,
        e
    },
    i.imgStar5_i = function() {
        var e = new eui.Image;
        return this.imgStar5 = e,
        e.x = 240,
        e.y = 0,
        e
    },
    i._Image5_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_s_effect_preview_pop_imgbg1_png",
        e.x = 22,
        e.y = 95,
        e
    },
    i._Image6_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_s_effect_preview_pop_imgbg1_png",
        e.x = 22,
        e.y = 290,
        e
    },
    i._Image7_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_s_effect_preview_pop_imgbg1_png",
        e.x = 22,
        e.y = 225,
        e
    },
    i._Image8_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_s_effect_preview_pop_imgbg1_png",
        e.x = 22,
        e.y = 160,
        e
    },
    i._Image9_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_s_effect_preview_pop_imgbg1_png",
        e.x = 22,
        e.y = 355,
        e
    },
    i._Group2_i = function() {
        var e = new eui.Group;
        return e.cacheAsBitmap = !0,
        e.x = 50,
        e.y = 112,
        e.elementsContent = [this._Image10_i(), this._Image11_i(), this._Image12_i(), this._Image13_i(), this._Image14_i()],
        e
    },
    i._Image10_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_s_effect_preview_pop_imgstar1_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i._Image11_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_s_effect_preview_pop_imgstar5_png",
        e.x = 27,
        e.y = 0,
        e
    },
    i._Image12_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_s_effect_preview_pop_imgstar5_png",
        e.x = 53,
        e.y = 0,
        e
    },
    i._Image13_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_s_effect_preview_pop_imgstar5_png",
        e.x = 79,
        e.y = 0,
        e
    },
    i._Image14_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_s_effect_preview_pop_imgstar5_png",
        e.x = 105,
        e.y = 0,
        e
    },
    i._Group3_i = function() {
        var e = new eui.Group;
        return e.cacheAsBitmap = !0,
        e.x = 50,
        e.y = 177,
        e.elementsContent = [this._Image15_i(), this._Image16_i(), this._Image17_i(), this._Image18_i(), this._Image19_i()],
        e
    },
    i._Image15_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_s_effect_preview_pop_imgstar1_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i._Image16_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_s_effect_preview_pop_imgstar1_png",
        e.x = 27,
        e.y = 0,
        e
    },
    i._Image17_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_s_effect_preview_pop_imgstar5_png",
        e.x = 53,
        e.y = 0,
        e
    },
    i._Image18_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_s_effect_preview_pop_imgstar5_png",
        e.x = 79,
        e.y = 0,
        e
    },
    i._Image19_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_s_effect_preview_pop_imgstar5_png",
        e.x = 105,
        e.y = 0,
        e
    },
    i._Group4_i = function() {
        var e = new eui.Group;
        return e.cacheAsBitmap = !0,
        e.x = 50,
        e.y = 242,
        e.elementsContent = [this._Image20_i(), this._Image21_i(), this._Image22_i(), this._Image23_i(), this._Image24_i()],
        e
    },
    i._Image20_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_s_effect_preview_pop_imgstar1_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i._Image21_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_s_effect_preview_pop_imgstar1_png",
        e.x = 27,
        e.y = 0,
        e
    },
    i._Image22_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_s_effect_preview_pop_imgstar1_png",
        e.x = 53,
        e.y = 0,
        e
    },
    i._Image23_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_s_effect_preview_pop_imgstar5_png",
        e.x = 79,
        e.y = 0,
        e
    },
    i._Image24_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_s_effect_preview_pop_imgstar5_png",
        e.x = 105,
        e.y = 0,
        e
    },
    i._Group5_i = function() {
        var e = new eui.Group;
        return e.cacheAsBitmap = !0,
        e.x = 50,
        e.y = 307,
        e.elementsContent = [this._Image25_i(), this._Image26_i(), this._Image27_i(), this._Image28_i(), this._Image29_i()],
        e
    },
    i._Image25_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_s_effect_preview_pop_imgstar1_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i._Image26_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_s_effect_preview_pop_imgstar1_png",
        e.x = 27,
        e.y = 0,
        e
    },
    i._Image27_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_s_effect_preview_pop_imgstar1_png",
        e.x = 53,
        e.y = 0,
        e
    },
    i._Image28_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_s_effect_preview_pop_imgstar1_png",
        e.x = 79,
        e.y = 0,
        e
    },
    i._Image29_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_s_effect_preview_pop_imgstar5_png",
        e.x = 105,
        e.y = 0,
        e
    },
    i._Group6_i = function() {
        var e = new eui.Group;
        return e.cacheAsBitmap = !0,
        e.x = 50,
        e.y = 372,
        e.elementsContent = [this._Image30_i(), this._Image31_i(), this._Image32_i(), this._Image33_i(), this._Image34_i()],
        e
    },
    i._Image30_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_s_effect_preview_pop_imgstar1_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i._Image31_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_s_effect_preview_pop_imgstar1_png",
        e.x = 27,
        e.y = 0,
        e
    },
    i._Image32_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_s_effect_preview_pop_imgstar1_png",
        e.x = 53,
        e.y = 0,
        e
    },
    i._Image33_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_s_effect_preview_pop_imgstar1_png",
        e.x = 79,
        e.y = 0,
        e
    },
    i._Image34_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_s_effect_preview_pop_imgstar1_png",
        e.x = 105,
        e.y = 0,
        e
    },
    i.txt5_i = function() {
        var e = new eui.Label;
        return this.txt5 = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.textColor = 12834813,
        e.x = 214,
        e.y = 374,
        e
    },
    i.txt4_i = function() {
        var e = new eui.Label;
        return this.txt4 = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.textColor = 12834813,
        e.x = 214,
        e.y = 309,
        e
    },
    i.txt3_i = function() {
        var e = new eui.Label;
        return this.txt3 = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.textColor = 12834813,
        e.x = 214,
        e.y = 244,
        e
    },
    i.txt2_i = function() {
        var e = new eui.Label;
        return this.txt2 = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.textColor = 12834813,
        e.x = 214,
        e.y = 179,
        e
    },
    i.txt1_i = function() {
        var e = new eui.Label;
        return this.txt1 = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.textColor = 12834813,
        e.x = 214,
        e.y = 115,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/pop/PetBagSkillStoneChangePopSkin.exml"] = window.PetBagSkillStoneChangePopSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["btnClose", "list"],
        this.height = 285,
        this.width = 481,
        this.elementsContent = [this._Image1_i(), this._Image2_i(), this._Image3_i(), this.btnClose_i(), this.list_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Image1_i = function() {
        var e = new eui.Image;
        return e.bottom = 0,
        e.left = 0,
        e.right = 0,
        e.scale9Grid = new egret.Rectangle(7, 7, 6, 4),
        e.source = "pet_bag_detail_pop_imgbg_png",
        e.top = 0,
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_open_stone_pop_imgtitlebg2_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_replace_skill_pop_imgtitle_png",
        e.x = 33,
        e.y = 2,
        e
    },
    i.btnClose_i = function() {
        var e = new eui.Image;
        return this.btnClose = e,
        e.source = "title_pop_2022_btnclose_png",
        e.x = 438,
        e.y = 1,
        e
    },
    i.list_i = function() {
        var e = new eui.List;
        return this.list = e,
        e.horizontalCenter = 0,
        e.verticalCenter = 11,
        e.layout = this._TileLayout1_i(),
        e
    },
    i._TileLayout1_i = function() {
        var e = new eui.TileLayout;
        return e.requestedColumnCount = 2,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/pop/PetBagSkillStoneComposePopSkin.exml"] = window.PetBagSkillStoneComposePopSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["btnClose", "emptySign", "list", "imgAddBg1", "imgAddBg2", "imgAddBg3", "imgAddBg4", "imgAdd1", "imgAdd2", "imgAdd3", "imgAdd4", "btnRemove1", "btnRemove2", "btnRemove3", "btnRemove4", "btnCompose", "txtRate"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this._Group1_i(), this._Group2_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Group1_i = function() {
        var e = new eui.Group;
        return e.right = 80,
        e.y = 31,
        e.elementsContent = [this.btnClose_i(), this._Image1_i(), this.emptySign_i(), this._Scroller1_i(), this._Image2_i()],
        e
    },
    i.btnClose_i = function() {
        var e = new eui.Image;
        return this.btnClose = e,
        e.source = "title_pop_2022_btnclose_png",
        e.x = 631,
        e.y = 0,
        e
    },
    i._Image1_i = function() {
        var e = new eui.Image;
        return e.height = 488,
        e.scale9Grid = new egret.Rectangle(231, 36, 230, 1),
        e.source = "pet_bag_dream_stone_compose_pop_imgrightbg_png",
        e.width = 692,
        e.y = 56,
        e
    },
    i.emptySign_i = function() {
        var e = new eui.Image;
        return this.emptySign = e,
        e.source = "pet_bag_empty_sign_png",
        e.visible = !0,
        e.x = 354,
        e.y = 237,
        e
    },
    i._Scroller1_i = function() {
        var e = new eui.Scroller;
        return e.height = 389,
        e.width = 430,
        e.x = 252,
        e.y = 119,
        e.viewport = this.list_i(),
        e
    },
    i.list_i = function() {
        var e = new eui.List;
        return this.list = e,
        e.layout = this._TileLayout1_i(),
        e
    },
    i._TileLayout1_i = function() {
        var e = new eui.TileLayout;
        return e.horizontalGap = 15,
        e.paddingLeft = 3,
        e.requestedColumnCount = 5,
        e.verticalGap = 35,
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_img2_png",
        e.x = 364,
        e.y = 58,
        e
    },
    i._Group2_i = function() {
        var e = new eui.Group;
        return e.x = 111,
        e.y = 148,
        e.elementsContent = [this._Image3_i(), this.imgAddBg1_i(), this.imgAddBg2_i(), this.imgAddBg3_i(), this.imgAddBg4_i(), this.imgAdd1_i(), this.imgAdd2_i(), this.imgAdd3_i(), this.imgAdd4_i(), this.btnRemove1_i(), this.btnRemove2_i(), this.btnRemove3_i(), this.btnRemove4_i(), this.btnCompose_i(), this.txtRate_i()],
        e
    },
    i._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_dream_stone_compose_pop_imgleftbg_png",
        e.x = 82,
        e.y = 76,
        e
    },
    i.imgAddBg1_i = function() {
        var e = new eui.Image;
        return this.imgAddBg1 = e,
        e.height = 60,
        e.scale9Grid = new egret.Rectangle(10, 10, 10, 10),
        e.source = "rarity_item_1_png",
        e.width = 60,
        e.x = 144,
        e.y = 0,
        e
    },
    i.imgAddBg2_i = function() {
        var e = new eui.Image;
        return this.imgAddBg2 = e,
        e.height = 60,
        e.scale9Grid = new egret.Rectangle(10, 10, 10, 10),
        e.source = "rarity_item_1_png",
        e.width = 60,
        e.x = 298,
        e.y = 156,
        e
    },
    i.imgAddBg3_i = function() {
        var e = new eui.Image;
        return this.imgAddBg3 = e,
        e.height = 60,
        e.scale9Grid = new egret.Rectangle(10, 10, 10, 10),
        e.source = "rarity_item_1_png",
        e.width = 60,
        e.x = 144,
        e.y = 312,
        e
    },
    i.imgAddBg4_i = function() {
        var e = new eui.Image;
        return this.imgAddBg4 = e,
        e.height = 60,
        e.scale9Grid = new egret.Rectangle(10, 10, 10, 10),
        e.source = "rarity_item_1_png",
        e.width = 60,
        e.x = 0,
        e.y = 155,
        e
    },
    i.imgAdd1_i = function() {
        var e = new eui.Image;
        return this.imgAdd1 = e,
        e.height = 48,
        e.source = "pet_bag_dream_stone_compose_pop_imgadd1_png",
        e.width = 48,
        e.x = 150,
        e.y = 5,
        e
    },
    i.imgAdd2_i = function() {
        var e = new eui.Image;
        return this.imgAdd2 = e,
        e.height = 48,
        e.source = "pet_bag_dream_stone_compose_pop_imgadd1_png",
        e.width = 48,
        e.x = 303,
        e.y = 160,
        e
    },
    i.imgAdd3_i = function() {
        var e = new eui.Image;
        return this.imgAdd3 = e,
        e.height = 48,
        e.source = "pet_bag_dream_stone_compose_pop_imgadd1_png",
        e.width = 48,
        e.x = 150,
        e.y = 317,
        e
    },
    i.imgAdd4_i = function() {
        var e = new eui.Image;
        return this.imgAdd4 = e,
        e.height = 48,
        e.source = "pet_bag_dream_stone_compose_pop_imgadd1_png",
        e.width = 48,
        e.x = 4,
        e.y = 160,
        e
    },
    i.btnRemove1_i = function() {
        var e = new eui.Image;
        return this.btnRemove1 = e,
        e.source = "pet_bag_skill_stone_compose_pop_imgremove_png",
        e.visible = !1,
        e.x = 191,
        e.y = -13,
        e
    },
    i.btnRemove2_i = function() {
        var e = new eui.Image;
        return this.btnRemove2 = e,
        e.source = "pet_bag_skill_stone_compose_pop_imgremove_png",
        e.visible = !1,
        e.x = 345,
        e.y = 143,
        e
    },
    i.btnRemove3_i = function() {
        var e = new eui.Image;
        return this.btnRemove3 = e,
        e.source = "pet_bag_skill_stone_compose_pop_imgremove_png",
        e.visible = !1,
        e.x = 191,
        e.y = 299,
        e
    },
    i.btnRemove4_i = function() {
        var e = new eui.Image;
        return this.btnRemove4 = e,
        e.source = "pet_bag_skill_stone_compose_pop_imgremove_png",
        e.visible = !1,
        e.x = 47,
        e.y = 142,
        e
    },
    i.btnCompose_i = function() {
        var e = new eui.Group;
        return this.btnCompose = e,
        e.x = 107,
        e.y = 400,
        e.elementsContent = [this._Image4_i(), this._Label1_i()],
        e
    },
    i._Image4_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_main_panel_btnyellow_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "REEJI",
        e.size = 20,
        e.text = "开始合成",
        e.textColor = 10246682,
        e.visible = !0,
        e.x = 27,
        e.y = 13,
        e
    },
    i.txtRate_i = function() {
        var e = new eui.Label;
        return this.txtRate = e,
        e.fontFamily = "REEJI",
        e.size = 18,
        e.textAlign = "center",
        e.textColor = 15463679,
        e.width = 87,
        e.x = 132,
        e.y = 189,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/pop/PetBagUseStonePopSkin.exml"] = window.PetBagUseStonePopSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["btnClose", "btnFilter", "emptySign", "list"],
        this.height = 431,
        this.width = 754,
        this.elementsContent = [this._Image1_i(), this._Image2_i(), this._Image3_i(), this.btnClose_i(), this._Image4_i(), this._Image5_i(), this.btnFilter_i(), this.emptySign_i(), this._Scroller1_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Image1_i = function() {
        var e = new eui.Image;
        return e.bottom = 0,
        e.left = 0,
        e.right = 0,
        e.scale9Grid = new egret.Rectangle(7, 7, 6, 2),
        e.source = "pet_bag_detail_pop_imgbg_png",
        e.top = 0,
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_detail_pop_imgtitlebg_png",
        e.width = 750,
        e
    },
    i._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_use_stone_pop_imgtitle_png",
        e.x = 36,
        e.y = 3,
        e
    },
    i.btnClose_i = function() {
        var e = new eui.Image;
        return this.btnClose = e,
        e.source = "title_pop_2022_btnclose_png",
        e.x = 712,
        e.y = 0,
        e
    },
    i._Image4_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_change_pop_imglistbg_png",
        e.width = 728,
        e.x = 11,
        e.y = 80,
        e
    },
    i._Image5_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_use_stone_pop_imgall_png",
        e.x = 11,
        e.y = 46,
        e
    },
    i.btnFilter_i = function() {
        var e = new eui.Image;
        return this.btnFilter = e,
        e.source = "pet_bag_use_stone_pop_btnfilter_png",
        e.x = 633,
        e.y = 47,
        e
    },
    i.emptySign_i = function() {
        var e = new eui.Image;
        return this.emptySign = e,
        e.horizontalCenter = 0,
        e.source = "pet_bag_empty_sign_png",
        e.visible = !0,
        e.y = 175,
        e
    },
    i._Scroller1_i = function() {
        var e = new eui.Scroller;
        return e.height = 326,
        e.width = 701,
        e.x = 28,
        e.y = 93,
        e.viewport = this.list_i(),
        e
    },
    i.list_i = function() {
        var e = new eui.List;
        return this.list = e,
        e.layout = this._TileLayout1_i(),
        e
    },
    i._TileLayout1_i = function() {
        var e = new eui.TileLayout;
        return e.horizontalGap = 16,
        e.paddingLeft = 3,
        e.requestedColumnCount = 8,
        e.verticalGap = 16,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/view/PetBagDevelopItemViewSkin.exml"] = window.PetBagDevelopItemViewSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["btnBall", "btnFight", "btnDevelop", "emptySign", "list", "scroller"],
        this.height = 526,
        this.width = 420,
        this.elementsContent = [this._Image1_i(), this._Image2_i(), this._Label1_i(), this.btnBall_i(), this.btnFight_i(), this.btnDevelop_i(), this.emptySign_i(), this.scroller_i()]
    }
    __extends(t, e);
    var i = function(e) {
        function t() {
            e.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i(), this._Label1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "pet_bag_main_panel_btnrbup_png")]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "pet_bag_main_panel_btnrbdown_png"), new eui.SetProperty("_Label1", "textColor", 16777215)]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.percentHeight = 100,
            e.source = "pet_bag_main_panel_btnrbup_png",
            e.percentWidth = 100,
            e
        },
        i._Label1_i = function() {
            var e = new eui.Label;
            return this._Label1 = e,
            e.fontFamily = "MFShangHei",
            e.horizontalCenter = 0,
            e.size = 18,
            e.text = "能量珠",
            e.textColor = 7242936,
            e.verticalCenter = 0,
            e
        },
        t
    } (eui.Skin),
    n = function(e) {
        function t() {
            e.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i(), this._Label1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "pet_bag_main_panel_btnrbup_png")]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "pet_bag_main_panel_btnrbdown_png"), new eui.SetProperty("_Label1", "textColor", 16777215)]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.percentHeight = 100,
            e.source = "pet_bag_main_panel_btnrbup_png",
            e.percentWidth = 100,
            e
        },
        i._Label1_i = function() {
            var e = new eui.Label;
            return this._Label1 = e,
            e.fontFamily = "MFShangHei",
            e.horizontalCenter = 0,
            e.size = 18,
            e.text = "战斗道具",
            e.textColor = 7242936,
            e.verticalCenter = 0,
            e
        },
        t
    } (eui.Skin),
    r = function(e) {
        function t() {
            e.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i(), this._Label1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "pet_bag_main_panel_btnrbup_png")]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "pet_bag_main_panel_btnrbdown_png"), new eui.SetProperty("_Label1", "textColor", 16777215)]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.percentHeight = 100,
            e.source = "pet_bag_main_panel_btnrbup_png",
            e.percentWidth = 100,
            e
        },
        i._Label1_i = function() {
            var e = new eui.Label;
            return this._Label1 = e,
            e.fontFamily = "MFShangHei",
            e.horizontalCenter = 0,
            e.size = 18,
            e.text = "养成道具",
            e.textColor = 7242936,
            e.verticalCenter = 0,
            e
        },
        t
    } (eui.Skin),
    a = t.prototype;
    return a._Image1_i = function() {
        var e = new eui.Image;
        return e.height = 449,
        e.source = "pet_bag_change_pop_imglistbg_png",
        e.width = 392,
        e.x = 14,
        e.y = 77,
        e
    },
    a._Image2_i = function() {
        var e = new eui.Image;
        return e.scale9Grid = new egret.Rectangle(23, 14, 70, 9),
        e.source = "pet_bag_main_panel_attr_imgtitlebg_png",
        e.visible = !0,
        e.width = 420,
        e
    },
    a._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "精灵道具",
        e.textColor = 16777215,
        e.x = 20,
        e.y = 8,
        e
    },
    a.btnBall_i = function() {
        var e = new eui.RadioButton;
        return this.btnBall = e,
        e.height = 35,
        e.label = "1",
        e.visible = !0,
        e.width = 100,
        e.x = 14,
        e.y = 45,
        e.skinName = i,
        e
    },
    a.btnFight_i = function() {
        var e = new eui.RadioButton;
        return this.btnFight = e,
        e.height = 35,
        e.label = "2",
        e.width = 100,
        e.x = 114,
        e.y = 45,
        e.skinName = n,
        e
    },
    a.btnDevelop_i = function() {
        var e = new eui.RadioButton;
        return this.btnDevelop = e,
        e.height = 35,
        e.label = "3",
        e.width = 100,
        e.x = 215,
        e.y = 45,
        e.skinName = r,
        e
    },
    a.emptySign_i = function() {
        var e = new eui.Image;
        return this.emptySign = e,
        e.horizontalCenter = 0,
        e.source = "pet_bag_empty_sign_png",
        e.y = 190,
        e
    },
    a.scroller_i = function() {
        var e = new eui.Scroller;
        return this.scroller = e,
        e.bottom = 65,
        e.top = 85,
        e.visible = !0,
        e.width = 389,
        e.x = 22,
        e.viewport = this.list_i(),
        e
    },
    a.list_i = function() {
        var e = new eui.List;
        return this.list = e,
        e.y = 0,
        e.layout = this._TileLayout1_i(),
        e
    },
    a._TileLayout1_i = function() {
        var e = new eui.TileLayout;
        return e.requestedColumnCount = 5,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/view/PetBagDevelopMarkViewSkin.exml"] = window.PetBagDevelopMarkViewSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["btn5", "btn4", "btn3", "btn2", "emptySign", "btnFilter", "btnDecompose", "txtSearch", "img_btn_search", "list", "scroller"],
        this.height = 515,
        this.width = 420,
        this.elementsContent = [this._Group1_i(), this.txtSearch_i(), this.img_btn_search_i(), this.scroller_i()]
    }
    __extends(t, e);
    var i = function(e) {
        function t() {
            e.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i(), this._Label1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "pet_bag_main_panel_btnrbup_png")]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "pet_bag_main_panel_btnrbdown_png"), new eui.SetProperty("_Label1", "textColor", 16777215)]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.percentHeight = 100,
            e.source = "pet_bag_main_panel_btnrbup_png",
            e.percentWidth = 100,
            e
        },
        i._Label1_i = function() {
            var e = new eui.Label;
            return this._Label1 = e,
            e.fontFamily = "MFShangHei",
            e.horizontalCenter = 0,
            e.size = 18,
            e.text = "五角刻印",
            e.textColor = 7242936,
            e.verticalCenter = 0,
            e
        },
        t
    } (eui.Skin),
    n = function(e) {
        function t() {
            e.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i(), this._Label1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "pet_bag_main_panel_btnrbup_png")]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "pet_bag_main_panel_btnrbdown_png"), new eui.SetProperty("_Label1", "textColor", 16777215)]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.percentHeight = 100,
            e.source = "pet_bag_main_panel_btnrbup_png",
            e.percentWidth = 100,
            e
        },
        i._Label1_i = function() {
            var e = new eui.Label;
            return this._Label1 = e,
            e.fontFamily = "MFShangHei",
            e.horizontalCenter = 0,
            e.size = 18,
            e.text = "四角刻印",
            e.textColor = 7242936,
            e.verticalCenter = 0,
            e
        },
        t
    } (eui.Skin),
    r = function(e) {
        function t() {
            e.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i(), this._Label1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "pet_bag_main_panel_btnrbup_png")]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "pet_bag_main_panel_btnrbdown_png"), new eui.SetProperty("_Label1", "textColor", 16777215)]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.percentHeight = 100,
            e.source = "pet_bag_main_panel_btnrbup_png",
            e.percentWidth = 100,
            e
        },
        i._Label1_i = function() {
            var e = new eui.Label;
            return this._Label1 = e,
            e.fontFamily = "MFShangHei",
            e.horizontalCenter = 0,
            e.size = 18,
            e.text = "三角刻印",
            e.textColor = 7242936,
            e.verticalCenter = 0,
            e
        },
        t
    } (eui.Skin),
    a = function(e) {
        function t() {
            e.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i(), this._Label1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "pet_bag_main_panel_btnrbup_png")]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "pet_bag_main_panel_btnrbdown_png"), new eui.SetProperty("_Label1", "textColor", 16777215)]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.percentHeight = 100,
            e.source = "pet_bag_main_panel_btnrbup_png",
            e.percentWidth = 100,
            e
        },
        i._Label1_i = function() {
            var e = new eui.Label;
            return this._Label1 = e,
            e.fontFamily = "MFShangHei",
            e.horizontalCenter = 0,
            e.size = 18,
            e.text = "二角刻印",
            e.textColor = 7242936,
            e.verticalCenter = 0,
            e
        },
        t
    } (eui.Skin),
    o = t.prototype;
    return o._Group1_i = function() {
        var e = new eui.Group;
        return e.cacheAsBitmap = !0,
        e.height = 538,
        e.width = 420,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this._Image1_i(), this.btn5_i(), this.btn4_i(), this.btn3_i(), this.btn2_i(), this.emptySign_i(), this._Image2_i(), this._Image3_i(), this.btnFilter_i(), this.btnDecompose_i()],
        e
    },
    o._Image1_i = function() {
        var e = new eui.Image;
        return e.height = 470,
        e.source = "pet_bag_change_pop_imglistbg_png",
        e.width = 420,
        e.x = 0,
        e.y = 32,
        e
    },
    o.btn5_i = function() {
        var e = new eui.RadioButton;
        return this.btn5 = e,
        e.height = 35,
        e.label = "1",
        e.visible = !0,
        e.width = 100,
        e.x = 10,
        e.y = 0,
        e.skinName = i,
        e
    },
    o.btn4_i = function() {
        var e = new eui.RadioButton;
        return this.btn4 = e,
        e.height = 35,
        e.label = "2",
        e.visible = !0,
        e.width = 100,
        e.x = 110,
        e.y = 0,
        e.skinName = n,
        e
    },
    o.btn3_i = function() {
        var e = new eui.RadioButton;
        return this.btn3 = e,
        e.height = 35,
        e.label = "3",
        e.visible = !0,
        e.width = 100,
        e.x = 210,
        e.y = 0,
        e.skinName = r,
        e
    },
    o.btn2_i = function() {
        var e = new eui.RadioButton;
        return this.btn2 = e,
        e.height = 35,
        e.label = "4",
        e.visible = !0,
        e.width = 100,
        e.x = 310,
        e.y = 0,
        e.skinName = a,
        e
    },
    o.emptySign_i = function() {
        var e = new eui.Image;
        return this.emptySign = e,
        e.source = "pet_bag_empty_sign_png",
        e.visible = !0,
        e.x = 97,
        e.y = 210,
        e
    },
    o._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_develop_mark_view_imgline_png",
        e.visible = !0,
        e.x = 10,
        e.y = 37,
        e
    },
    o._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_change_pop_imgsearchbg_png",
        e.x = 222,
        e.y = 41,
        e
    },
    o.btnFilter_i = function() {
        var e = new eui.Image;
        return this.btnFilter = e,
        e.source = "pet_bag_develop_mark_view_btnfilter_png",
        e.x = 170,
        e.y = 42,
        e
    },
    o.btnDecompose_i = function() {
        var e = new eui.Group;
        return this.btnDecompose = e,
        e.visible = !0,
        e.x = 147,
        e.y = 492,
        e.elementsContent = [this._Image4_i(), this._Label1_i()],
        e
    },
    o._Image4_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_main_panel_btnyellow_png",
        e.x = 0,
        e.y = 0,
        e
    },
    o._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "REEJI",
        e.size = 20,
        e.text = "快捷分解",
        e.textColor = 10246682,
        e.visible = !0,
        e.x = 27,
        e.y = 13,
        e
    },
    o.txtSearch_i = function() {
        var e = new eui.EditableText;
        return this.txtSearch = e,
        e.fontFamily = "MFShangHei",
        e.height = 17,
        e.prompt = "输入刻印/系列名称",
        e.promptColor = 6388143,
        e.size = 16,
        e.textColor = 6388143,
        e.width = 145,
        e.x = 230,
        e.y = 47,
        e
    },
    o.img_btn_search_i = function() {
        var e = new eui.Image;
        return this.img_btn_search = e,
        e.source = "pet_bag_change_pop_btnsearch_png",
        e.x = 370,
        e.y = 41,
        e
    },
    o.scroller_i = function() {
        var e = new eui.Scroller;
        return this.scroller = e,
        e.bottom = 54,
        e.top = 78,
        e.visible = !0,
        e.width = 420,
        e.viewport = this.list_i(),
        e
    },
    o.list_i = function() {
        var e = new eui.List;
        return this.list = e,
        e.layout = this._TileLayout1_i(),
        e
    },
    o._TileLayout1_i = function() {
        var e = new eui.TileLayout;
        return e.horizontalGap = 9,
        e.paddingLeft = 10,
        e.paddingTop = 10,
        e.requestedColumnCount = 5,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/view/PetBagDevelopNatureViewSkin.exml"] = window.PetBagDevelopNatureViewSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["txtNature", "txtEffect", "txtRecommendEffect", "btnNature", "btnEffect", "emptySign", "progressNature", "list", "scroller"],
        this.height = 538,
        this.width = 420,
        this.elementsContent = [this._Group1_i(), this.progressNature_i(), this.scroller_i()]
    }
    __extends(t, e);
    var i = function(e) {
        function t() {
            e.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i(), this._Label1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "pet_bag_main_panel_btnrbup_png")]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "pet_bag_main_panel_btnrbdown_png"), new eui.SetProperty("_Label1", "textColor", 16777215)]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.percentHeight = 100,
            e.source = "pet_bag_main_panel_btnrbup_png",
            e.percentWidth = 100,
            e
        },
        i._Label1_i = function() {
            var e = new eui.Label;
            return this._Label1 = e,
            e.fontFamily = "MFShangHei",
            e.horizontalCenter = 0,
            e.size = 18,
            e.text = "天赋养成",
            e.textColor = 7242936,
            e.verticalCenter = 0,
            e
        },
        t
    } (eui.Skin),
    n = function(e) {
        function t() {
            e.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i(), this._Label1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "pet_bag_main_panel_btnrbup_png")]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "pet_bag_main_panel_btnrbdown_png"), new eui.SetProperty("_Label1", "textColor", 16777215)]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.percentHeight = 100,
            e.source = "pet_bag_main_panel_btnrbup_png",
            e.percentWidth = 100,
            e
        },
        i._Label1_i = function() {
            var e = new eui.Label;
            return this._Label1 = e,
            e.fontFamily = "MFShangHei",
            e.horizontalCenter = 0,
            e.size = 18,
            e.text = "性格养成",
            e.textColor = 7242936,
            e.verticalCenter = 0,
            e
        },
        t
    } (eui.Skin),
    r = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["thumb"],
            this.elementsContent = [this.thumb_i()],
            this.states = [new eui.State("up", []), new eui.State("down", []), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i.thumb_i = function() {
            var e = new eui.Image;
            return this.thumb = e,
            e.source = "pet_bag_develop_up_level_view_imgprogress_png",
            e
        },
        t
    } (eui.Skin),
    a = t.prototype;
    return a._Group1_i = function() {
        var e = new eui.Group;
        return e.cacheAsBitmap = !0,
        e.height = 566,
        e.width = 420,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this._Image1_i(), this._Label1_i(), this._Image2_i(), this._Image3_i(), this._Label2_i(), this.txtNature_i(), this._Label3_i(), this.txtEffect_i(), this.txtRecommendEffect_i(), this.btnNature_i(), this.btnEffect_i(), this._Image4_i(), this.emptySign_i()],
        e
    },
    a._Image1_i = function() {
        var e = new eui.Image;
        return e.scale9Grid = new egret.Rectangle(23, 14, 70, 9),
        e.source = "pet_bag_main_panel_attr_imgtitlebg_png",
        e.visible = !0,
        e.width = 420,
        e.x = 0,
        e.y = 0,
        e
    },
    a._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "精灵性格/天赋",
        e.textColor = 16777215,
        e.visible = !0,
        e.x = 20,
        e.y = 8,
        e
    },
    a._Image2_i = function() {
        var e = new eui.Image;
        return e.height = 61,
        e.source = "pet_bag_develop_nature_view_img1_png",
        e.visible = !0,
        e.x = 7,
        e.y = 125,
        e
    },
    a._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_develop_up_level_view_imgprogressbg_png",
        e.x = 28,
        e.y = 68,
        e
    },
    a._Label2_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "当前天赋：",
        e.textColor = 12834813,
        e.x = 20,
        e.y = 41,
        e
    },
    a.txtNature_i = function() {
        var e = new eui.Label;
        return this.txtNature = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.textColor = 12834813,
        e.x = 116,
        e.y = 41,
        e
    },
    a._Label3_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "当前性格：",
        e.textColor = 12834813,
        e.x = 20,
        e.y = 102,
        e
    },
    a.txtEffect_i = function() {
        var e = new eui.Label;
        return this.txtEffect = e,
        e.fontFamily = "MFShangHei",
        e.horizontalCenter = 0,
        e.size = 18,
        e.textColor = 4187130,
        e.y = 136,
        e
    },
    a.txtRecommendEffect_i = function() {
        var e = new eui.Label;
        return this.txtRecommendEffect = e,
        e.fontFamily = "MFShangHei",
        e.horizontalCenter = 0,
        e.size = 16,
        e.text = "推荐性格：",
        e.textColor = 8757203,
        e.y = 161,
        e
    },
    a.btnNature_i = function() {
        var e = new eui.RadioButton;
        return this.btnNature = e,
        e.height = 33,
        e.label = "1",
        e.width = 101,
        e.x = 14,
        e.y = 200,
        e.skinName = i,
        e
    },
    a.btnEffect_i = function() {
        var e = new eui.RadioButton;
        return this.btnEffect = e,
        e.height = 33,
        e.label = "2",
        e.width = 101,
        e.x = 114,
        e.y = 200,
        e.skinName = n,
        e
    },
    a._Image4_i = function() {
        var e = new eui.Image;
        return e.height = 334,
        e.source = "pet_bag_change_pop_imglistbg_png",
        e.visible = !0,
        e.width = 392,
        e.x = 14,
        e.y = 232,
        e
    },
    a.emptySign_i = function() {
        var e = new eui.Image;
        return this.emptySign = e,
        e.source = "pet_bag_empty_sign_png",
        e.x = 97,
        e.y = 287,
        e
    },
    a.progressNature_i = function() {
        var e = new eui.ProgressBar;
        return this.progressNature = e,
        e.height = 15,
        e.width = 341,
        e.x = 42,
        e.y = 72,
        e.skinName = r,
        e
    },
    a.scroller_i = function() {
        var e = new eui.Scroller;
        return this.scroller = e,
        e.bottom = 77,
        e.top = 241,
        e.visible = !0,
        e.width = 389,
        e.x = 22,
        e.viewport = this.list_i(),
        e
    },
    a.list_i = function() {
        var e = new eui.List;
        return this.list = e,
        e.layout = this._TileLayout1_i(),
        e
    },
    a._TileLayout1_i = function() {
        var e = new eui.TileLayout;
        return e.requestedColumnCount = 5,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/view/PetBagDevelopResistanceViewSkin.exml"] = window.PetBagDevelopResistanceViewSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["btnStrengthen", "btnExchange", "list1", "list2", "list3", "groupMain", "btnOpen", "groupNotOpen", "txtCannot"],
        this.height = 538,
        this.width = 420,
        this.elementsContent = [this.groupMain_i(), this.groupNotOpen_i(), this.txtCannot_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i.groupMain_i = function() {
        var e = new eui.Group;
        return this.groupMain = e,
        e.visible = !0,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this._Group1_i(), this.list1_i(), this.list2_i(), this.list3_i()],
        e
    },
    i._Group1_i = function() {
        var e = new eui.Group;
        return e.cacheAsBitmap = !0,
        e.height = 538,
        e.width = 420,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this._Image1_i(), this._Image2_i(), this._Image3_i(), this._Image4_i(), this._Image5_i(), this.btnStrengthen_i(), this.btnExchange_i(), this._Label3_i(), this._Label4_i(), this._Label5_i(), this._Label6_i(), this._Label7_i()],
        e
    },
    i._Image1_i = function() {
        var e = new eui.Image;
        return e.scale9Grid = new egret.Rectangle(62, 75, 1, 75),
        e.source = "pet_bag_develop_resistance_view_img1_png",
        e.width = 198,
        e.x = 11,
        e.y = 241,
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.scale9Grid = new egret.Rectangle(62, 75, 1, 75),
        e.source = "pet_bag_develop_resistance_view_img1_png",
        e.width = 198,
        e.x = 216,
        e.y = 241,
        e
    },
    i._Image3_i = function() {
        var e = new eui.Image;
        return e.scale9Grid = new egret.Rectangle(23, 14, 70, 9),
        e.source = "pet_bag_main_panel_attr_imgtitlebg_png",
        e.visible = !0,
        e.width = 420,
        e.x = 0,
        e.y = 0,
        e
    },
    i._Image4_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_develop_study_view_img1_png",
        e.visible = !0,
        e.x = 6,
        e.y = 30,
        e
    },
    i._Image5_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_develop_study_view_img1_png",
        e.x = 6,
        e.y = 200,
        e
    },
    i.btnStrengthen_i = function() {
        var e = new eui.Group;
        return this.btnStrengthen = e,
        e.visible = !0,
        e.x = 45,
        e.y = 492,
        e.elementsContent = [this._Image6_i(), this._Label1_i()],
        e
    },
    i._Image6_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_main_panel_btnyellow_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "REEJI",
        e.size = 20,
        e.text = "强化抗性",
        e.textColor = 10246682,
        e.visible = !0,
        e.x = 27,
        e.y = 13,
        e
    },
    i.btnExchange_i = function() {
        var e = new eui.Group;
        return this.btnExchange = e,
        e.visible = !0,
        e.x = 241,
        e.y = 492,
        e.elementsContent = [this._Image7_i(), this._Label2_i()],
        e
    },
    i._Image7_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_main_panel_btnyellow_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i._Label2_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "REEJI",
        e.size = 20,
        e.text = "更改抗性",
        e.textColor = 10246682,
        e.visible = !0,
        e.x = 27,
        e.y = 13,
        e
    },
    i._Label3_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "精灵抗性",
        e.textColor = 16777215,
        e.visible = !0,
        e.x = 20,
        e.y = 8,
        e
    },
    i._Label4_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "伤害抗性",
        e.textColor = 12900350,
        e.visible = !0,
        e.x = 40,
        e.y = 41,
        e
    },
    i._Label5_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "异常抗性",
        e.textColor = 12900350,
        e.visible = !0,
        e.x = 40,
        e.y = 211,
        e
    },
    i._Label6_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "弱化类",
        e.textColor = 8631282,
        e.x = 288,
        e.y = 253,
        e
    },
    i._Label7_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "控制类",
        e.textColor = 8631282,
        e.x = 82,
        e.y = 253,
        e
    },
    i.list1_i = function() {
        var e = new eui.List;
        return this.list1 = e,
        e.height = 113,
        e.width = 390,
        e.x = 18,
        e.y = 73,
        e.layout = this._VerticalLayout1_i(),
        e
    },
    i._VerticalLayout1_i = function() {
        var e = new eui.VerticalLayout;
        return e
    },
    i.list2_i = function() {
        var e = new eui.List;
        return this.list2 = e,
        e.height = 153,
        e.width = 185,
        e.x = 18,
        e.y = 281,
        e.layout = this._VerticalLayout2_i(),
        e
    },
    i._VerticalLayout2_i = function() {
        var e = new eui.VerticalLayout;
        return e
    },
    i.list3_i = function() {
        var e = new eui.List;
        return this.list3 = e,
        e.height = 153,
        e.width = 185,
        e.x = 223,
        e.y = 281,
        e.layout = this._VerticalLayout3_i(),
        e
    },
    i._VerticalLayout3_i = function() {
        var e = new eui.VerticalLayout;
        return e
    },
    i.groupNotOpen_i = function() {
        var e = new eui.Group;
        return this.groupNotOpen = e,
        e.cacheAsBitmap = !0,
        e.visible = !0,
        e.x = 81,
        e.y = 200,
        e.elementsContent = [this.btnOpen_i(), this._Label9_i()],
        e
    },
    i.btnOpen_i = function() {
        var e = new eui.Group;
        return this.btnOpen = e,
        e.visible = !0,
        e.x = 79,
        e.y = 92,
        e.elementsContent = [this._Image8_i(), this._Label8_i()],
        e
    },
    i._Image8_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_main_panel_btnyellow_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i._Label8_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "REEJI",
        e.size = 20,
        e.text = "开 启",
        e.textColor = 10246682,
        e.visible = !0,
        e.x = 44,
        e.y = 13,
        e
    },
    i._Label9_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.lineSpacing = 15,
        e.size = 24,
        e.stroke = .2,
        e.strokeColor = 8631282,
        e.text = "该精灵抗性尚未开启\n是否使用泰坦神石x1开启？",
        e.textAlign = "center",
        e.textColor = 8631282,
        e.visible = !0,
        e.x = 0,
        e.y = 0,
        e
    },
    i.txtCannot_i = function() {
        var e = new eui.Label;
        return this.txtCannot = e,
        e.fontFamily = "MFShangHei",
        e.size = 24,
        e.stroke = .2,
        e.strokeColor = 8631282,
        e.text = "该精灵无法开启抗性",
        e.textColor = 8631282,
        e.visible = !1,
        e.x = 102,
        e.y = 257,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/view/PetBagDevelopSEffectViewSkin.exml"] = window.PetBagDevelopSEffectViewSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["btnJustify", "btnStrengthenMenu", "txtSEffectDes", "txtSEffect", "imgStar1", "imgStar2", "imgStar3", "imgStar4", "imgStar5", "groupStar", "emptySign", "list", "scroller", "btnCompose", "btnStrengthen", "itemLine", "imgExp", "txtExp", "btnPreview", "imgItemNeedBg1", "imgItemNeed1", "imgItemNeedBg2", "imgItemNeed2", "txtItemNeed1", "txtItemNeed2", "groupStrengthen"],
        this.height = 560,
        this.width = 425,
        this.elementsContent = [this._Group2_i(), this.scroller_i(), this.groupStrengthen_i()]
    }
    __extends(t, e);
    var i = function(e) {
        function t() {
            e.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i(), this._Label1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "pet_bag_main_panel_btnrbup_png")]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "pet_bag_main_panel_btnrbdown_png"), new eui.SetProperty("_Label1", "textColor", 16777215)]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.percentHeight = 100,
            e.source = "pet_bag_main_panel_btnrbup_png",
            e.percentWidth = 100,
            e
        },
        i._Label1_i = function() {
            var e = new eui.Label;
            return this._Label1 = e,
            e.fontFamily = "MFShangHei",
            e.horizontalCenter = 0,
            e.size = 18,
            e.text = "特性调整",
            e.textColor = 7242936,
            e.verticalCenter = 0,
            e
        },
        t
    } (eui.Skin),
    n = function(e) {
        function t() {
            e.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i(), this._Label1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "pet_bag_main_panel_btnrbup_png")]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "pet_bag_main_panel_btnrbdown_png"), new eui.SetProperty("_Label1", "textColor", 16777215)]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.percentHeight = 100,
            e.source = "pet_bag_main_panel_btnrbup_png",
            e.percentWidth = 100,
            e
        },
        i._Label1_i = function() {
            var e = new eui.Label;
            return this._Label1 = e,
            e.fontFamily = "MFShangHei",
            e.horizontalCenter = 0,
            e.size = 18,
            e.text = "特性强化",
            e.textColor = 7242936,
            e.verticalCenter = 0,
            e
        },
        t
    } (eui.Skin),
    r = t.prototype;
    return r._Group2_i = function() {
        var e = new eui.Group;
        return e.cacheAsBitmap = !0,
        e.height = 505,
        e.width = 420,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this._Image1_i(), this._Image2_i(), this.btnJustify_i(), this.btnStrengthenMenu_i(), this._Label1_i(), this.txtSEffectDes_i(), this._Group1_i(), this._Image4_i(), this.emptySign_i()],
        e
    },
    r._Image1_i = function() {
        var e = new eui.Image;
        return e.scale9Grid = new egret.Rectangle(23, 14, 70, 9),
        e.source = "pet_bag_main_panel_attr_imgtitlebg_png",
        e.visible = !0,
        e.width = 420,
        e.x = 0,
        e.y = 0,
        e
    },
    r._Image2_i = function() {
        var e = new eui.Image;
        return e.height = 363,
        e.source = "pet_bag_change_pop_imglistbg_png",
        e.visible = !0,
        e.width = 392,
        e.x = 14,
        e.y = 142,
        e
    },
    r.btnJustify_i = function() {
        var e = new eui.RadioButton;
        return this.btnJustify = e,
        e.height = 33,
        e.label = "1",
        e.width = 101,
        e.x = 14,
        e.y = 109,
        e.skinName = i,
        e
    },
    r.btnStrengthenMenu_i = function() {
        var e = new eui.RadioButton;
        return this.btnStrengthenMenu = e,
        e.height = 33,
        e.label = "2",
        e.width = 101,
        e.x = 114,
        e.y = 109,
        e.skinName = n,
        e
    },
    r._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "精灵特性",
        e.textColor = 16777215,
        e.x = 20,
        e.y = 8,
        e
    },
    r.txtSEffectDes_i = function() {
        var e = new eui.Label;
        return this.txtSEffectDes = e,
        e.fontFamily = "MFShangHei",
        e.horizontalCenter = 3,
        e.size = 14,
        e.textColor = 2854655,
        e.y = 72,
        e
    },
    r._Group1_i = function() {
        var e = new eui.Group;
        return e.visible = !0,
        e.x = 105,
        e.y = 46,
        e.layout = this._HorizontalLayout1_i(),
        e.elementsContent = [this._Label2_i(), this.txtSEffect_i(), this.groupStar_i()],
        e
    },
    r._HorizontalLayout1_i = function() {
        var e = new eui.HorizontalLayout;
        return e.gap = 0,
        e.verticalAlign = "middle",
        e
    },
    r._Label2_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "当前特性：",
        e.textColor = 12834813,
        e.x = 0,
        e.y = 0,
        e
    },
    r.txtSEffect_i = function() {
        var e = new eui.Label;
        return this.txtSEffect = e,
        e.fontFamily = "MFShangHei",
        e.left = 80,
        e.size = 18,
        e.textColor = 4187130,
        e.y = 0,
        e
    },
    r.groupStar_i = function() {
        var e = new eui.Group;
        return this.groupStar = e,
        e.x = 126,
        e.y = 0,
        e.elementsContent = [this._Image3_i(), this.imgStar1_i(), this.imgStar2_i(), this.imgStar3_i(), this.imgStar4_i(), this.imgStar5_i()],
        e
    },
    r._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_s_effect_view_imgstarbg_png",
        e.x = 10,
        e.y = 1,
        e
    },
    r.imgStar1_i = function() {
        var e = new eui.Image;
        return this.imgStar1 = e,
        e.source = "pet_bag_s_effect_view_imgstar1_png",
        e.x = 9,
        e.y = 0,
        e
    },
    r.imgStar2_i = function() {
        var e = new eui.Image;
        return this.imgStar2 = e,
        e.source = "pet_bag_s_effect_view_imgstar1_png",
        e.visible = !0,
        e.x = 30,
        e.y = 0,
        e
    },
    r.imgStar3_i = function() {
        var e = new eui.Image;
        return this.imgStar3 = e,
        e.source = "pet_bag_s_effect_view_imgstar1_png",
        e.x = 52,
        e.y = 0,
        e
    },
    r.imgStar4_i = function() {
        var e = new eui.Image;
        return this.imgStar4 = e,
        e.source = "pet_bag_s_effect_view_imgstar1_png",
        e.x = 74,
        e.y = 0,
        e
    },
    r.imgStar5_i = function() {
        var e = new eui.Image;
        return this.imgStar5 = e,
        e.source = "pet_bag_s_effect_view_imgstar1_png",
        e.x = 95,
        e.y = 0,
        e
    },
    r._Image4_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_s_effect_view_imgline_png",
        e.x = 19,
        e.y = 99,
        e
    },
    r.emptySign_i = function() {
        var e = new eui.Image;
        return this.emptySign = e,
        e.source = "pet_bag_empty_sign_png",
        e.visible = !0,
        e.x = 99,
        e.y = 240,
        e
    },
    r.scroller_i = function() {
        var e = new eui.Scroller;
        return this.scroller = e,
        e.bottom = 99,
        e.top = 150,
        e.visible = !0,
        e.width = 389,
        e.x = 22,
        e.viewport = this.list_i(),
        e
    },
    r.list_i = function() {
        var e = new eui.List;
        return this.list = e,
        e.layout = this._TileLayout1_i(),
        e
    },
    r._TileLayout1_i = function() {
        var e = new eui.TileLayout;
        return e.requestedColumnCount = 5,
        e
    },
    r.groupStrengthen_i = function() {
        var e = new eui.Group;
        return this.groupStrengthen = e,
        e.cacheAsBitmap = !0,
        e.visible = !0,
        e.x = 14,
        e.y = 142,
        e.elementsContent = [this._Group3_i(), this._Group5_i(), this._Group6_i()],
        e
    },
    r._Group3_i = function() {
        var e = new eui.Group;
        return e.x = 0,
        e.y = 0,
        e.elementsContent = [this._Image5_i(), this.btnCompose_i(), this.btnStrengthen_i(), this._Label4_i(), this.itemLine_i()],
        e
    },
    r._Image5_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_develop_study_view_img1_png",
        e.x = 0,
        e.y = 0,
        e
    },
    r.btnCompose_i = function() {
        var e = new eui.Image;
        return this.btnCompose = e,
        e.source = "pet_bag_s_effect_view_btncompose_png",
        e.x = 311,
        e.y = 2,
        e
    },
    r.btnStrengthen_i = function() {
        var e = new eui.Group;
        return this.btnStrengthen = e,
        e.visible = !0,
        e.x = 131,
        e.y = 350,
        e.elementsContent = [this._Image6_i(), this._Label3_i()],
        e
    },
    r._Image6_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_main_panel_btnyellow_png",
        e.x = 0,
        e.y = 0,
        e
    },
    r._Label3_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "REEJI",
        e.size = 20,
        e.text = "特性强化",
        e.textColor = 10246682,
        e.visible = !0,
        e.x = 27,
        e.y = 13,
        e
    },
    r._Label4_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "我的梦幻宝石",
        e.textColor = 12900350,
        e.visible = !0,
        e.x = 28,
        e.y = 10,
        e
    },
    r.itemLine_i = function() {
        var e = new eui.Group;
        return this.itemLine = e,
        e.height = 73,
        e.width = 386,
        e.x = 6,
        e.y = 45,
        e.layout = this._HorizontalLayout2_i(),
        e
    },
    r._HorizontalLayout2_i = function() {
        var e = new eui.HorizontalLayout;
        return e
    },
    r._Group5_i = function() {
        var e = new eui.Group;
        return e.x = 0,
        e.y = 125,
        e.elementsContent = [this._Image7_i(), this._Label5_i(), this._Group4_i()],
        e
    },
    r._Image7_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_develop_study_view_img1_png",
        e.x = 0,
        e.y = 0,
        e
    },
    r._Label5_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "我的累积经验",
        e.textColor = 12900350,
        e.visible = !0,
        e.x = 28,
        e.y = 10,
        e
    },
    r._Group4_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = 0,
        e.y = 45,
        e.elementsContent = [this.imgExp_i(), this.txtExp_i()],
        e
    },
    r.imgExp_i = function() {
        var e = new eui.Image;
        return this.imgExp = e,
        e.source = "pet_bag_s_effect_view_imgexp_png",
        e.x = 0,
        e.y = 0,
        e
    },
    r.txtExp_i = function() {
        var e = new eui.Label;
        return this.txtExp = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.textColor = 6027519,
        e.verticalCenter = 0,
        e.x = 31,
        e
    },
    r._Group6_i = function() {
        var e = new eui.Group;
        return e.x = 0,
        e.y = 205,
        e.elementsContent = [this._Image8_i(), this.btnPreview_i(), this.imgItemNeedBg1_i(), this.imgItemNeed1_i(), this.imgItemNeedBg2_i(), this.imgItemNeed2_i(), this._Label6_i(), this.txtItemNeed1_i(), this.txtItemNeed2_i()],
        e
    },
    r._Image8_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_develop_study_view_img1_png",
        e.x = 0,
        e.y = 0,
        e
    },
    r.btnPreview_i = function() {
        var e = new eui.Image;
        return this.btnPreview = e,
        e.source = "pet_bag_s_effect_view_btnpreview_png",
        e.x = 311,
        e.y = 2,
        e
    },
    r.imgItemNeedBg1_i = function() {
        var e = new eui.Image;
        return this.imgItemNeedBg1 = e,
        e.height = 70,
        e.scale9Grid = new egret.Rectangle(10, 10, 10, 10),
        e.source = "rarity_item_1_png",
        e.visible = !0,
        e.width = 70,
        e.x = 15,
        e.y = 45,
        e
    },
    r.imgItemNeed1_i = function() {
        var e = new eui.Image;
        return this.imgItemNeed1 = e,
        e.height = 49,
        e.width = 50,
        e.x = 24.831,
        e.y = 54.831,
        e
    },
    r.imgItemNeedBg2_i = function() {
        var e = new eui.Image;
        return this.imgItemNeedBg2 = e,
        e.height = 70,
        e.scale9Grid = new egret.Rectangle(10, 10, 10, 10),
        e.source = "rarity_item_1_png",
        e.width = 70,
        e.x = 209,
        e.y = 45,
        e
    },
    r.imgItemNeed2_i = function() {
        var e = new eui.Image;
        return this.imgItemNeed2 = e,
        e.height = 39,
        e.source = "pet_bag_s_effect_view_imgexp_png",
        e.width = 39,
        e.x = 223.507,
        e.y = 60.338,
        e
    },
    r._Label6_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "本次强化需要",
        e.textColor = 12900350,
        e.visible = !0,
        e.x = 28,
        e.y = 10,
        e
    },
    r.txtItemNeed1_i = function() {
        var e = new eui.Label;
        return this.txtItemNeed1 = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.textColor = 8631282,
        e.x = 92,
        e.y = 60,
        e
    },
    r.txtItemNeed2_i = function() {
        var e = new eui.Label;
        return this.txtItemNeed2 = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.textColor = 8631282,
        e.x = 286,
        e.y = 60,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/view/PetBagDevelopSkillViewSkin.exml"] = window.PetBagDevelopSkillViewSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["txtNoFifthSkill", "txtFifthName", "txtFifthPower", "txtFifthPP", "imgFifthAttr", "groupFifthSkill", "btnChange", "btnCompose", "btnOpen", "btnUse", "list"],
        this.height = 569,
        this.width = 421,
        this.elementsContent = [this._Group1_i(), this.list_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Group1_i = function() {
        var e = new eui.Group;
        return e.cacheAsBitmap = !0,
        e.height = 569,
        e.width = 421,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this._Image1_i(), this._Image2_i(), this._Image3_i(), this._Label1_i(), this._Label2_i(), this.txtNoFifthSkill_i(), this.groupFifthSkill_i(), this.btnChange_i(), this.btnCompose_i(), this.btnOpen_i(), this.btnUse_i()],
        e
    },
    i._Image1_i = function() {
        var e = new eui.Image;
        return e.scale9Grid = new egret.Rectangle(23, 14, 70, 9),
        e.source = "pet_bag_main_panel_attr_imgtitlebg_png",
        e.visible = !0,
        e.width = 420,
        e.x = 0,
        e.y = 0,
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_skill_view_img1_png",
        e.x = 21,
        e.y = 41,
        e
    },
    i._Image3_i = function() {
        var e = new eui.Image;
        return e.scale9Grid = new egret.Rectangle(105, 103, 0, 103),
        e.source = "pet_bag_skill_view_imgfifthbg_png",
        e.visible = !0,
        e.width = 398,
        e.x = 14,
        e.y = 260,
        e
    },
    i._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "装备技能：",
        e.textColor = 12834813,
        e.x = 40,
        e.y = 41,
        e
    },
    i._Label2_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "精灵技能",
        e.textColor = 16777215,
        e.x = 20,
        e.y = 8,
        e
    },
    i.txtNoFifthSkill_i = function() {
        var e = new eui.Label;
        return this.txtNoFifthSkill = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "暂未开启",
        e.textColor = 16777215,
        e.visible = !0,
        e.x = 175,
        e.y = 335,
        e
    },
    i.groupFifthSkill_i = function() {
        var e = new eui.Group;
        return this.groupFifthSkill = e,
        e.visible = !0,
        e.width = 344,
        e.x = 24,
        e.y = 305,
        e.elementsContent = [this._Image4_i(), this.txtFifthName_i(), this.txtFifthPower_i(), this.txtFifthPP_i(), this.imgFifthAttr_i()],
        e
    },
    i._Image4_i = function() {
        var e = new eui.Image;
        return e.height = 73,
        e.scale9Grid = new egret.Rectangle(10, 9, 9, 10),
        e.source = "pet_bag_dream_stone_compose_pop_imgitem1bg_png",
        e.width = 73,
        e.x = 0,
        e.y = 0,
        e
    },
    i.txtFifthName_i = function() {
        var e = new eui.Label;
        return this.txtFifthName = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.textAlign = "center",
        e.textColor = 12834813,
        e.width = 174,
        e.x = 145,
        e.y = 17,
        e
    },
    i.txtFifthPower_i = function() {
        var e = new eui.Label;
        return this.txtFifthPower = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.textColor = 4252667,
        e.x = 138,
        e.y = 45,
        e
    },
    i.txtFifthPP_i = function() {
        var e = new eui.Label;
        return this.txtFifthPP = e,
        e.fontFamily = "MFShangHei",
        e.right = 0,
        e.size = 16,
        e.textAlign = "right",
        e.textColor = 4252667,
        e.y = 45,
        e
    },
    i.imgFifthAttr_i = function() {
        var e = new eui.Image;
        return this.imgFifthAttr = e,
        e.height = 50,
        e.width = 50,
        e.x = 12,
        e.y = 13,
        e
    },
    i.btnChange_i = function() {
        var e = new eui.Image;
        return this.btnChange = e,
        e.source = "pet_bag_pet_pop_btnrefresh_png",
        e.x = 376.39,
        e.y = 302,
        e
    },
    i.btnCompose_i = function() {
        var e = new eui.Group;
        return this.btnCompose = e,
        e.visible = !0,
        e.x = 7,
        e.y = 492,
        e.elementsContent = [this._Image5_i(), this._Label3_i()],
        e
    },
    i._Image5_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_main_panel_btnyellow_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i._Label3_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "REEJI",
        e.size = 20,
        e.text = "合成技能石",
        e.textColor = 10246682,
        e.visible = !0,
        e.x = 17,
        e.y = 13,
        e
    },
    i.btnOpen_i = function() {
        var e = new eui.Group;
        return this.btnOpen = e,
        e.visible = !0,
        e.x = 147,
        e.y = 492,
        e.elementsContent = [this._Image6_i(), this._Label4_i()],
        e
    },
    i._Image6_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_main_panel_btnyellow_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i._Label4_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "REEJI",
        e.size = 20,
        e.text = "开启技能石",
        e.textColor = 10246682,
        e.visible = !0,
        e.x = 17,
        e.y = 13,
        e
    },
    i.btnUse_i = function() {
        var e = new eui.Group;
        return this.btnUse = e,
        e.visible = !0,
        e.x = 287,
        e.y = 492,
        e.elementsContent = [this._Image7_i(), this._Label5_i()],
        e
    },
    i._Image7_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_main_panel_btnyellow_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i._Label5_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "REEJI",
        e.size = 20,
        e.text = "使用技能石",
        e.textColor = 10246682,
        e.visible = !0,
        e.x = 17,
        e.y = 13,
        e
    },
    i.list_i = function() {
        var e = new eui.List;
        return this.list = e,
        e.height = 191,
        e.width = 384,
        e.x = 19,
        e.y = 65,
        e.layout = this._TileLayout1_i(),
        e
    },
    i._TileLayout1_i = function() {
        var e = new eui.TileLayout;
        return e.horizontalGap = -10,
        e.requestedColumnCount = 2,
        e.verticalGap = -5,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/view/PetBagDevelopSkinViewSkin.exml"] = window.PetBagDevelopSkinViewSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["txtHasSkin", "txt1", "txt2", "txt3", "btnPutOn", "imgHasPutOn", "list"],
        this.height = 538,
        this.width = 420,
        this.elementsContent = [this._Group1_i(), this.list_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Group1_i = function() {
        var e = new eui.Group;
        return e.cacheAsBitmap = !0,
        e.height = 538,
        e.width = 420,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this.txtHasSkin_i(), this.txt1_i(), this.txt2_i(), this.txt3_i(), this._Image1_i(), this._Label1_i(), this.btnPutOn_i(), this.imgHasPutOn_i(), this._Image3_i(), this._Image4_i(), this._Image5_i()],
        e
    },
    i.txtHasSkin_i = function() {
        var e = new eui.Label;
        return this.txtHasSkin = e,
        e.fontFamily = "MFShangHei",
        e.horizontalCenter = 6,
        e.size = 18,
        e.text = "已获得皮肤：",
        e.textColor = 16514895,
        e.y = 145,
        e
    },
    i.txt1_i = function() {
        var e = new eui.Label;
        return this.txt1 = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.textColor = 12834813,
        e.x = 41,
        e.y = 43,
        e
    },
    i.txt2_i = function() {
        var e = new eui.Label;
        return this.txt2 = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "原型精灵：",
        e.textColor = 12834813,
        e.x = 41,
        e.y = 73,
        e
    },
    i.txt3_i = function() {
        var e = new eui.Label;
        return this.txt3 = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.textColor = 12834813,
        e.x = 40,
        e.y = 103,
        e
    },
    i._Image1_i = function() {
        var e = new eui.Image;
        return e.scale9Grid = new egret.Rectangle(23, 14, 70, 9),
        e.source = "pet_bag_main_panel_attr_imgtitlebg_png",
        e.visible = !0,
        e.width = 420,
        e.x = 0,
        e.y = 0,
        e
    },
    i._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "精灵皮肤",
        e.textColor = 16777215,
        e.x = 20,
        e.y = 8,
        e
    },
    i.btnPutOn_i = function() {
        var e = new eui.Group;
        return this.btnPutOn = e,
        e.visible = !0,
        e.x = 149,
        e.y = 492,
        e.elementsContent = [this._Image2_i(), this._Label2_i()],
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_main_panel_btnyellow_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i._Label2_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "REEJI",
        e.size = 20,
        e.text = "装 备",
        e.textColor = 10246682,
        e.visible = !0,
        e.x = 44,
        e.y = 13,
        e
    },
    i.imgHasPutOn_i = function() {
        var e = new eui.Image;
        return this.imgHasPutOn = e,
        e.source = "pet_bag_develop_skin_view_imghasputon_png",
        e.visible = !1,
        e.x = 153,
        e.y = 496,
        e
    },
    i._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_skill_view_img1_png",
        e.x = 21,
        e.y = 42,
        e
    },
    i._Image4_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_skill_view_img1_png",
        e.x = 21,
        e.y = 102,
        e
    },
    i._Image5_i = function() {
        var e = new eui.Image;
        return e.source = "title_pop_2022_imgline_png",
        e.width = 382,
        e.x = 19,
        e.y = 130,
        e
    },
    i.list_i = function() {
        var e = new eui.List;
        return this.list = e,
        e.height = 316,
        e.width = 400,
        e.x = 16,
        e.y = 169,
        e.layout = this._HorizontalLayout1_i(),
        e
    },
    i._HorizontalLayout1_i = function() {
        var e = new eui.HorizontalLayout;
        return e.gap = -70,
        e.paddingTop = 10,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/view/PetBagDevelopStudyViewSkin.exml"] = window.PetBagDevelopStudyViewSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["txtStudy", "txtAttack", "txtAttackStudy", "txtDefence", "txtDefenceStudy", "txtSAttack", "txtSAttackStudy", "txtSDefence", "txtSDefenceStudy", "txtSpeed", "txtSpeedStudy", "txtHealth", "txtHealthStudy", "btnReset", "btnConfirm", "btnStudy", "btnItem", "emptySign", "btnAdd1", "btnReduce1", "btnMax1", "txtStudy1", "btnAdd2", "btnReduce2", "txtStudy2", "btnMax2", "btnAdd3", "btnReduce3", "txtStudy3", "btnMax3", "btnAdd4", "btnReduce4", "txtStudy4", "btnMax4", "btnAdd5", "btnReduce5", "txtStudy5", "btnMax5", "btnAdd0", "btnReduce0", "txtStudy0", "btnMax0", "txtSumStudy", "groupStudy", "list", "scroller"],
        this.height = 538,
        this.width = 420,
        this.elementsContent = [this._Group15_i(), this.scroller_i()]
    }
    __extends(t, e);
    var i = function(e) {
        function t() {
            e.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i(), this._Label1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "pet_bag_main_panel_btnrbup_png")]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "pet_bag_main_panel_btnrbdown_png"), new eui.SetProperty("_Label1", "textColor", 16777215)]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.percentHeight = 100,
            e.source = "pet_bag_main_panel_btnrbup_png",
            e.percentWidth = 100,
            e
        },
        i._Label1_i = function() {
            var e = new eui.Label;
            return this._Label1 = e,
            e.fontFamily = "MFShangHei",
            e.horizontalCenter = 0,
            e.size = 18,
            e.text = "学习力分配",
            e.textColor = 7242936,
            e.verticalCenter = 0,
            e
        },
        t
    } (eui.Skin),
    n = function(e) {
        function t() {
            e.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i(), this._Label1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "pet_bag_main_panel_btnrbup_png")]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "pet_bag_main_panel_btnrbdown_png"), new eui.SetProperty("_Label1", "textColor", 16777215)]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.percentHeight = 100,
            e.source = "pet_bag_main_panel_btnrbup_png",
            e.percentWidth = 100,
            e
        },
        i._Label1_i = function() {
            var e = new eui.Label;
            return this._Label1 = e,
            e.fontFamily = "MFShangHei",
            e.horizontalCenter = 0,
            e.size = 18,
            e.text = "道具分配",
            e.textColor = 7242936,
            e.verticalCenter = 0,
            e
        },
        t
    } (eui.Skin),
    r = t.prototype;
    return r._Group15_i = function() {
        var e = new eui.Group;
        return e.cacheAsBitmap = !0,
        e.height = 538,
        e.width = 420,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this._Group1_i(), this._Image1_i(), this._Image2_i(), this._Label2_i(), this._Label3_i(), this._Group8_i(), this.btnReset_i(), this.btnConfirm_i(), this._Image5_i(), this.btnStudy_i(), this.btnItem_i(), this.emptySign_i(), this.groupStudy_i()],
        e
    },
    r._Group1_i = function() {
        var e = new eui.Group;
        return e.x = 156,
        e.y = 46,
        e.layout = this._HorizontalLayout1_i(),
        e.elementsContent = [this._Label1_i(), this.txtStudy_i()],
        e
    },
    r._HorizontalLayout1_i = function() {
        var e = new eui.HorizontalLayout;
        return e.gap = 0,
        e
    },
    r._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "当前学习力：",
        e.textColor = 12834813,
        e.x = 0,
        e
    },
    r.txtStudy_i = function() {
        var e = new eui.Label;
        return this.txtStudy = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.textColor = 4187130,
        e
    },
    r._Image1_i = function() {
        var e = new eui.Image;
        return e.scale9Grid = new egret.Rectangle(23, 14, 70, 9),
        e.source = "pet_bag_main_panel_attr_imgtitlebg_png",
        e.visible = !0,
        e.width = 420,
        e.x = 0,
        e.y = 0,
        e
    },
    r._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "title_pop_2022_imgline_png",
        e.width = 388,
        e.x = 19,
        e.y = 99,
        e
    },
    r._Label2_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 14,
        e.text = "单项学习力上限255",
        e.textColor = 2854655,
        e.x = 149,
        e.y = 72,
        e
    },
    r._Label3_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "精灵学习力",
        e.textColor = 16777215,
        e.x = 20,
        e.y = 8,
        e
    },
    r._Group8_i = function() {
        var e = new eui.Group;
        return e.visible = !0,
        e.x = 15,
        e.y = 116,
        e.layout = this._TileLayout1_i(),
        e.elementsContent = [this._Group2_i(), this._Group3_i(), this._Group4_i(), this._Group5_i(), this._Group6_i(), this._Group7_i()],
        e
    },
    r._TileLayout1_i = function() {
        var e = new eui.TileLayout;
        return e.horizontalGap = 20,
        e.requestedColumnCount = 2,
        e.verticalGap = 16,
        e
    },
    r._Group2_i = function() {
        var e = new eui.Group;
        return e.width = 187,
        e.y = 0,
        e.layout = this._BasicLayout1_i(),
        e.elementsContent = [this._Label4_i(), this.txtAttack_i(), this._Label5_i(), this.txtAttackStudy_i()],
        e
    },
    r._BasicLayout1_i = function() {
        var e = new eui.BasicLayout;
        return e
    },
    r._Label4_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "攻击：",
        e.textColor = 11520511,
        e
    },
    r.txtAttack_i = function() {
        var e = new eui.Label;
        return this.txtAttack = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.textColor = 4252667,
        e.x = 48,
        e
    },
    r._Label5_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "   学习力：",
        e.textColor = 11520511,
        e.x = 78,
        e
    },
    r.txtAttackStudy_i = function() {
        var e = new eui.Label;
        return this.txtAttackStudy = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.textColor = 4252667,
        e.x = 157,
        e
    },
    r._Group3_i = function() {
        var e = new eui.Group;
        return e.width = 187,
        e.y = 10,
        e.layout = this._BasicLayout2_i(),
        e.elementsContent = [this._Label6_i(), this.txtDefence_i(), this._Label7_i(), this.txtDefenceStudy_i()],
        e
    },
    r._BasicLayout2_i = function() {
        var e = new eui.BasicLayout;
        return e
    },
    r._Label6_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "防御：",
        e.textColor = 11520511,
        e
    },
    r.txtDefence_i = function() {
        var e = new eui.Label;
        return this.txtDefence = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.textColor = 4252667,
        e.x = 48,
        e
    },
    r._Label7_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "   学习力：",
        e.textColor = 11520511,
        e.x = 78,
        e
    },
    r.txtDefenceStudy_i = function() {
        var e = new eui.Label;
        return this.txtDefenceStudy = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.textColor = 4252667,
        e.x = 157,
        e
    },
    r._Group4_i = function() {
        var e = new eui.Group;
        return e.width = 187,
        e.y = 20,
        e.layout = this._BasicLayout3_i(),
        e.elementsContent = [this._Label8_i(), this.txtSAttack_i(), this._Label9_i(), this.txtSAttackStudy_i()],
        e
    },
    r._BasicLayout3_i = function() {
        var e = new eui.BasicLayout;
        return e
    },
    r._Label8_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "特攻：",
        e.textColor = 11520511,
        e
    },
    r.txtSAttack_i = function() {
        var e = new eui.Label;
        return this.txtSAttack = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.textColor = 4252667,
        e.x = 48,
        e
    },
    r._Label9_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "   学习力：",
        e.textColor = 11520511,
        e.x = 78,
        e
    },
    r.txtSAttackStudy_i = function() {
        var e = new eui.Label;
        return this.txtSAttackStudy = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.textColor = 4252667,
        e.x = 157,
        e
    },
    r._Group5_i = function() {
        var e = new eui.Group;
        return e.width = 187,
        e.y = 30,
        e.layout = this._BasicLayout4_i(),
        e.elementsContent = [this._Label10_i(), this.txtSDefence_i(), this._Label11_i(), this.txtSDefenceStudy_i()],
        e
    },
    r._BasicLayout4_i = function() {
        var e = new eui.BasicLayout;
        return e
    },
    r._Label10_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "特防：",
        e.textColor = 11520511,
        e
    },
    r.txtSDefence_i = function() {
        var e = new eui.Label;
        return this.txtSDefence = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.textColor = 4252667,
        e.x = 48,
        e
    },
    r._Label11_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "   学习力：",
        e.textColor = 11520511,
        e.x = 78,
        e
    },
    r.txtSDefenceStudy_i = function() {
        var e = new eui.Label;
        return this.txtSDefenceStudy = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.textColor = 4252667,
        e.x = 157,
        e
    },
    r._Group6_i = function() {
        var e = new eui.Group;
        return e.width = 187,
        e.y = 40,
        e.layout = this._BasicLayout5_i(),
        e.elementsContent = [this._Label12_i(), this.txtSpeed_i(), this._Label13_i(), this.txtSpeedStudy_i()],
        e
    },
    r._BasicLayout5_i = function() {
        var e = new eui.BasicLayout;
        return e
    },
    r._Label12_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "速度：",
        e.textColor = 11520511,
        e
    },
    r.txtSpeed_i = function() {
        var e = new eui.Label;
        return this.txtSpeed = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.textColor = 4252667,
        e.x = 48,
        e
    },
    r._Label13_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "   学习力：",
        e.textColor = 11520511,
        e.x = 78,
        e
    },
    r.txtSpeedStudy_i = function() {
        var e = new eui.Label;
        return this.txtSpeedStudy = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.textColor = 4252667,
        e.x = 157,
        e
    },
    r._Group7_i = function() {
        var e = new eui.Group;
        return e.width = 187,
        e.y = 50,
        e.layout = this._BasicLayout6_i(),
        e.elementsContent = [this._Label14_i(), this.txtHealth_i(), this._Label15_i(), this.txtHealthStudy_i()],
        e
    },
    r._BasicLayout6_i = function() {
        var e = new eui.BasicLayout;
        return e
    },
    r._Label14_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "体力：",
        e.textColor = 11520511,
        e
    },
    r.txtHealth_i = function() {
        var e = new eui.Label;
        return this.txtHealth = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.textColor = 4252667,
        e.x = 48,
        e
    },
    r._Label15_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "   学习力：",
        e.textColor = 11520511,
        e.x = 78,
        e
    },
    r.txtHealthStudy_i = function() {
        var e = new eui.Label;
        return this.txtHealthStudy = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.textColor = 4252667,
        e.x = 157,
        e
    },
    r.btnReset_i = function() {
        var e = new eui.Group;
        return this.btnReset = e,
        e.visible = !0,
        e.x = 55,
        e.y = 492,
        e.elementsContent = [this._Image3_i(), this._Label16_i()],
        e
    },
    r._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_main_panel_btnyellow_png",
        e.x = 0,
        e.y = 0,
        e
    },
    r._Label16_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "REEJI",
        e.size = 20,
        e.text = "重 置",
        e.textColor = 10246682,
        e.visible = !0,
        e.x = 44,
        e.y = 13,
        e
    },
    r.btnConfirm_i = function() {
        var e = new eui.Group;
        return this.btnConfirm = e,
        e.visible = !0,
        e.x = 236,
        e.y = 492,
        e.elementsContent = [this._Image4_i(), this._Label17_i()],
        e
    },
    r._Image4_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_main_panel_btnyellow_png",
        e.x = 0,
        e.y = 0,
        e
    },
    r._Label17_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "REEJI",
        e.size = 20,
        e.text = "确认分配",
        e.textColor = 10246682,
        e.visible = !0,
        e.x = 27,
        e.y = 13,
        e
    },
    r._Image5_i = function() {
        var e = new eui.Image;
        return e.height = 245,
        e.source = "pet_bag_change_pop_imglistbg_png",
        e.width = 392,
        e.x = 14,
        e.y = 252,
        e
    },
    r.btnStudy_i = function() {
        var e = new eui.RadioButton;
        return this.btnStudy = e,
        e.height = 33,
        e.label = "1",
        e.width = 101,
        e.x = 14,
        e.y = 219,
        e.skinName = i,
        e
    },
    r.btnItem_i = function() {
        var e = new eui.RadioButton;
        return this.btnItem = e,
        e.height = 33,
        e.label = "2",
        e.width = 101,
        e.x = 114,
        e.y = 219,
        e.skinName = n,
        e
    },
    r.emptySign_i = function() {
        var e = new eui.Image;
        return this.emptySign = e,
        e.source = "pet_bag_empty_sign_png",
        e.x = 97,
        e.y = 287,
        e
    },
    r.groupStudy_i = function() {
        var e = new eui.Group;
        return this.groupStudy = e,
        e.visible = !0,
        e.x = 14,
        e.y = 252,
        e.elementsContent = [this._Group9_i(), this._Group10_i(), this._Group11_i(), this._Group12_i(), this._Group13_i(), this._Group14_i(), this._Image18_i(), this.txtSumStudy_i(), this._Label18_i()],
        e
    },
    r._Group9_i = function() {
        var e = new eui.Group;
        return e.x = 11,
        e.y = 55,
        e.elementsContent = [this.btnAdd1_i(), this.btnReduce1_i(), this._Image6_i(), this.btnMax1_i(), this._Image7_i(), this.txtStudy1_i()],
        e
    },
    r.btnAdd1_i = function() {
        var e = new eui.Image;
        return this.btnAdd1 = e,
        e.source = "pet_bag_develop_study_view_btnadd1_png",
        e.x = 103,
        e.y = 0,
        e
    },
    r.btnReduce1_i = function() {
        var e = new eui.Image;
        return this.btnReduce1 = e,
        e.source = "pet_bag_develop_study_view_btnreduce1_png",
        e.x = 27,
        e.y = 0,
        e
    },
    r._Image6_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_develop_study_view_imgbg1_png",
        e.x = 54,
        e.y = 0,
        e
    },
    r.btnMax1_i = function() {
        var e = new eui.Image;
        return this.btnMax1 = e,
        e.source = "pet_bag_develop_study_view_btnmax1_png",
        e.x = 132,
        e.y = 0,
        e
    },
    r._Image7_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_develop_study_view_imgstudy1_png",
        e.x = 0,
        e.y = 2,
        e
    },
    r.txtStudy1_i = function() {
        var e = new eui.EditableText;
        return this.txtStudy1 = e,
        e.fontFamily = "MFShangHei",
        e.horizontalCenter = "-7",
        e.restrict = '"0-9"',
        e.size = 16,
        e.textAlign = "center",
        e.textColor = 6153817,
        e.width = 40,
        e.y = 5,
        e
    },
    r._Group10_i = function() {
        var e = new eui.Group;
        return e.x = 214,
        e.y = 55,
        e.elementsContent = [this.btnAdd2_i(), this.btnReduce2_i(), this._Image8_i(), this.txtStudy2_i(), this.btnMax2_i(), this._Image9_i()],
        e
    },
    r.btnAdd2_i = function() {
        var e = new eui.Image;
        return this.btnAdd2 = e,
        e.source = "pet_bag_develop_study_view_btnadd1_png",
        e.x = 103,
        e.y = 0,
        e
    },
    r.btnReduce2_i = function() {
        var e = new eui.Image;
        return this.btnReduce2 = e,
        e.source = "pet_bag_develop_study_view_btnreduce1_png",
        e.x = 27,
        e.y = 0,
        e
    },
    r._Image8_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_develop_study_view_imgbg1_png",
        e.x = 54,
        e.y = 0,
        e
    },
    r.txtStudy2_i = function() {
        var e = new eui.EditableText;
        return this.txtStudy2 = e,
        e.fontFamily = "MFShangHei",
        e.horizontalCenter = "-7",
        e.restrict = '"0-9"',
        e.size = 16,
        e.textAlign = "center",
        e.textColor = 6153817,
        e.width = 40,
        e.y = 5,
        e
    },
    r.btnMax2_i = function() {
        var e = new eui.Image;
        return this.btnMax2 = e,
        e.source = "pet_bag_develop_study_view_btnmax1_png",
        e.x = 132,
        e.y = 0,
        e
    },
    r._Image9_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_develop_study_view_imgstudy2_png",
        e.visible = !0,
        e.x = 0,
        e.y = 2,
        e
    },
    r._Group11_i = function() {
        var e = new eui.Group;
        return e.x = 11,
        e.y = 105,
        e.elementsContent = [this.btnAdd3_i(), this.btnReduce3_i(), this._Image10_i(), this.txtStudy3_i(), this.btnMax3_i(), this._Image11_i()],
        e
    },
    r.btnAdd3_i = function() {
        var e = new eui.Image;
        return this.btnAdd3 = e,
        e.source = "pet_bag_develop_study_view_btnadd1_png",
        e.x = 103,
        e.y = 0,
        e
    },
    r.btnReduce3_i = function() {
        var e = new eui.Image;
        return this.btnReduce3 = e,
        e.source = "pet_bag_develop_study_view_btnreduce1_png",
        e.x = 27,
        e.y = 0,
        e
    },
    r._Image10_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_develop_study_view_imgbg1_png",
        e.x = 54,
        e.y = 0,
        e
    },
    r.txtStudy3_i = function() {
        var e = new eui.EditableText;
        return this.txtStudy3 = e,
        e.fontFamily = "MFShangHei",
        e.horizontalCenter = "-7",
        e.restrict = '"0-9"',
        e.size = 16,
        e.textAlign = "center",
        e.textColor = 6153817,
        e.width = 40,
        e.y = 5,
        e
    },
    r.btnMax3_i = function() {
        var e = new eui.Image;
        return this.btnMax3 = e,
        e.source = "pet_bag_develop_study_view_btnmax1_png",
        e.x = 132,
        e.y = 0,
        e
    },
    r._Image11_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_develop_study_view_imgstudy3_png",
        e.x = 0,
        e.y = 2,
        e
    },
    r._Group12_i = function() {
        var e = new eui.Group;
        return e.x = 214,
        e.y = 105,
        e.elementsContent = [this.btnAdd4_i(), this.btnReduce4_i(), this._Image12_i(), this.txtStudy4_i(), this.btnMax4_i(), this._Image13_i()],
        e
    },
    r.btnAdd4_i = function() {
        var e = new eui.Image;
        return this.btnAdd4 = e,
        e.source = "pet_bag_develop_study_view_btnadd1_png",
        e.x = 103,
        e.y = 0,
        e
    },
    r.btnReduce4_i = function() {
        var e = new eui.Image;
        return this.btnReduce4 = e,
        e.source = "pet_bag_develop_study_view_btnreduce1_png",
        e.x = 27,
        e.y = 0,
        e
    },
    r._Image12_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_develop_study_view_imgbg1_png",
        e.x = 54,
        e.y = 0,
        e
    },
    r.txtStudy4_i = function() {
        var e = new eui.EditableText;
        return this.txtStudy4 = e,
        e.fontFamily = "MFShangHei",
        e.horizontalCenter = "-7",
        e.restrict = '"0-9"',
        e.size = 16,
        e.textAlign = "center",
        e.textColor = 6153817,
        e.width = 40,
        e.y = 5,
        e
    },
    r.btnMax4_i = function() {
        var e = new eui.Image;
        return this.btnMax4 = e,
        e.source = "pet_bag_develop_study_view_btnmax1_png",
        e.x = 132,
        e.y = 0,
        e
    },
    r._Image13_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_develop_study_view_imgstudy4_png",
        e.x = 0,
        e.y = 2,
        e
    },
    r._Group13_i = function() {
        var e = new eui.Group;
        return e.x = 11,
        e.y = 155,
        e.elementsContent = [this.btnAdd5_i(), this.btnReduce5_i(), this._Image14_i(), this.txtStudy5_i(), this.btnMax5_i(), this._Image15_i()],
        e
    },
    r.btnAdd5_i = function() {
        var e = new eui.Image;
        return this.btnAdd5 = e,
        e.source = "pet_bag_develop_study_view_btnadd1_png",
        e.x = 103,
        e.y = 0,
        e
    },
    r.btnReduce5_i = function() {
        var e = new eui.Image;
        return this.btnReduce5 = e,
        e.source = "pet_bag_develop_study_view_btnreduce1_png",
        e.x = 27,
        e.y = 0,
        e
    },
    r._Image14_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_develop_study_view_imgbg1_png",
        e.x = 54,
        e.y = 0,
        e
    },
    r.txtStudy5_i = function() {
        var e = new eui.EditableText;
        return this.txtStudy5 = e,
        e.fontFamily = "MFShangHei",
        e.horizontalCenter = "-7",
        e.restrict = '"0-9"',
        e.size = 16,
        e.textAlign = "center",
        e.textColor = 6153817,
        e.width = 40,
        e.y = 5,
        e
    },
    r.btnMax5_i = function() {
        var e = new eui.Image;
        return this.btnMax5 = e,
        e.source = "pet_bag_develop_study_view_btnmax1_png",
        e.x = 132,
        e.y = 0,
        e
    },
    r._Image15_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_develop_study_view_imgstudy5_png",
        e.x = 0,
        e.y = 2,
        e
    },
    r._Group14_i = function() {
        var e = new eui.Group;
        return e.x = 214,
        e.y = 155,
        e.elementsContent = [this.btnAdd0_i(), this.btnReduce0_i(), this._Image16_i(), this.txtStudy0_i(), this.btnMax0_i(), this._Image17_i()],
        e
    },
    r.btnAdd0_i = function() {
        var e = new eui.Image;
        return this.btnAdd0 = e,
        e.source = "pet_bag_develop_study_view_btnadd1_png",
        e.x = 103,
        e.y = 0,
        e
    },
    r.btnReduce0_i = function() {
        var e = new eui.Image;
        return this.btnReduce0 = e,
        e.source = "pet_bag_develop_study_view_btnreduce1_png",
        e.x = 27,
        e.y = 0,
        e
    },
    r._Image16_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_develop_study_view_imgbg1_png",
        e.x = 54,
        e.y = 0,
        e
    },
    r.txtStudy0_i = function() {
        var e = new eui.EditableText;
        return this.txtStudy0 = e,
        e.fontFamily = "MFShangHei",
        e.horizontalCenter = "-7",
        e.restrict = '"0-9"',
        e.size = 16,
        e.textAlign = "center",
        e.textColor = 6153817,
        e.width = 40,
        e.y = 5,
        e
    },
    r.btnMax0_i = function() {
        var e = new eui.Image;
        return this.btnMax0 = e,
        e.source = "pet_bag_develop_study_view_btnmax1_png",
        e.x = 132,
        e.y = 0,
        e
    },
    r._Image17_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_develop_study_view_imgstudy6_png",
        e.x = 0,
        e.y = 2,
        e
    },
    r._Image18_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_develop_study_view_img1_png",
        e.visible = !0,
        e.x = 0,
        e.y = 0,
        e
    },
    r.txtSumStudy_i = function() {
        var e = new eui.Label;
        return this.txtSumStudy = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "积累学习力：",
        e.textColor = 12834813,
        e.x = 27,
        e.y = 10,
        e
    },
    r._Label18_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "最多累积9999",
        e.textColor = 12834813,
        e.x = 271,
        e.y = 10,
        e
    },
    r.scroller_i = function() {
        var e = new eui.Scroller;
        return this.scroller = e,
        e.bottom = 77,
        e.top = 260,
        e.visible = !0,
        e.width = 389,
        e.x = 22,
        e.viewport = this.list_i(),
        e
    },
    r.list_i = function() {
        var e = new eui.List;
        return this.list = e,
        e.layout = this._TileLayout2_i(),
        e
    },
    r._TileLayout2_i = function() {
        var e = new eui.TileLayout;
        return e.requestedColumnCount = 5,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/view/PetBagDevelopUpLevelViewSkin.exml"] = window.PetBagDevelopUpLevelViewSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["progressExp", "txtLevel", "txtHealth", "txtAttack1", "txtSAttack1", "txtSPeed1", "txtDefence1", "txtSDefence1", "txtHealth1", "txtAttack2", "txtSAttack2", "txtSpeed2", "txtDefence2", "txtSDefence2", "txtHealth2", "groupNotMax", "btnExp", "btnItem", "btnHealth", "emptySign", "list", "scroller", "txtExp", "imgExchange1Icon", "txtExchange1", "btnExchange1", "imgExchange2Icon", "txtExchange2", "btnExchange2", "imgExchange3Icon", "txtExchange3", "btnExchange3", "groupExp", "btnUpMax", "btnUpOne"],
        this.height = 538,
        this.width = 420,
        this.elementsContent = [this._Image1_i(), this._Image2_i(), this.progressExp_i(), this._Group1_i(), this.btnExp_i(), this.btnItem_i(), this.btnHealth_i(), this.emptySign_i(), this.scroller_i(), this.groupExp_i(), this.btnUpMax_i(), this.btnUpOne_i()]
    }
    __extends(t, e);
    var i = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["thumb"],
            this.elementsContent = [this.thumb_i()],
            this.states = [new eui.State("up", []), new eui.State("down", []), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i.thumb_i = function() {
            var e = new eui.Image;
            return this.thumb = e,
            e.source = "pet_bag_develop_up_level_view_imgprogress_png",
            e
        },
        t
    } (eui.Skin),
    n = function(e) {
        function t() {
            e.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i(), this._Label1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "pet_bag_main_panel_btnrbup_png")]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "pet_bag_main_panel_btnrbdown_png"), new eui.SetProperty("_Label1", "textColor", 16777215)]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.percentHeight = 100,
            e.source = "pet_bag_main_panel_btnrbup_png",
            e.percentWidth = 100,
            e
        },
        i._Label1_i = function() {
            var e = new eui.Label;
            return this._Label1 = e,
            e.fontFamily = "MFShangHei",
            e.horizontalCenter = 0,
            e.size = 18,
            e.text = "经验升级",
            e.textColor = 7242936,
            e.verticalCenter = 0,
            e
        },
        t
    } (eui.Skin),
    r = function(e) {
        function t() {
            e.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i(), this._Label1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "pet_bag_main_panel_btnrbup_png")]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "pet_bag_main_panel_btnrbdown_png"), new eui.SetProperty("_Label1", "textColor", 16777215)]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.percentHeight = 100,
            e.source = "pet_bag_main_panel_btnrbup_png",
            e.percentWidth = 100,
            e
        },
        i._Label1_i = function() {
            var e = new eui.Label;
            return this._Label1 = e,
            e.fontFamily = "MFShangHei",
            e.horizontalCenter = 0,
            e.size = 18,
            e.text = "道具升级",
            e.textColor = 7242936,
            e.verticalCenter = 0,
            e
        },
        t
    } (eui.Skin),
    a = function(e) {
        function t() {
            e.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i(), this._Label1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "pet_bag_main_panel_btnrbup_png")]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "pet_bag_main_panel_btnrbdown_png"), new eui.SetProperty("_Label1", "textColor", 16777215)]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.percentHeight = 100,
            e.source = "pet_bag_main_panel_btnrbup_png",
            e.percentWidth = 100,
            e
        },
        i._Label1_i = function() {
            var e = new eui.Label;
            return this._Label1 = e,
            e.fontFamily = "MFShangHei",
            e.horizontalCenter = 0,
            e.size = 18,
            e.text = "体力养成",
            e.textColor = 7242936,
            e.verticalCenter = 0,
            e
        },
        t
    } (eui.Skin),
    o = t.prototype;
    return o._Image1_i = function() {
        var e = new eui.Image;
        return e.scale9Grid = new egret.Rectangle(23, 14, 70, 9),
        e.source = "pet_bag_main_panel_attr_imgtitlebg_png",
        e.visible = !0,
        e.width = 420,
        e
    },
    o._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_develop_up_level_view_imgprogressbg_png",
        e.x = 28,
        e.y = 68,
        e
    },
    o.progressExp_i = function() {
        var e = new eui.ProgressBar;
        return this.progressExp = e,
        e.height = 15,
        e.width = 341,
        e.x = 42,
        e.y = 72,
        e.skinName = i,
        e
    },
    o._Group1_i = function() {
        var e = new eui.Group;
        return e.cacheAsBitmap = !0,
        e.height = 173,
        e.width = 388,
        e.x = 20,
        e.y = 8,
        e.elementsContent = [this._Label1_i(), this.txtLevel_i(), this.txtHealth_i(), this.txtAttack1_i(), this.txtSAttack1_i(), this.txtSPeed1_i(), this.txtDefence1_i(), this.txtSDefence1_i(), this.txtHealth1_i(), this.groupNotMax_i()],
        e
    },
    o._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "精灵升级",
        e.textColor = 16777215,
        e.visible = !0,
        e.x = 0,
        e.y = 0,
        e
    },
    o.txtLevel_i = function() {
        var e = new eui.Label;
        return this.txtLevel = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "等级：",
        e.textColor = 8631282,
        e.x = 0,
        e.y = 33,
        e
    },
    o.txtHealth_i = function() {
        var e = new eui.Label;
        return this.txtHealth = e,
        e.fontFamily = "MFShangHei",
        e.right = 0,
        e.size = 16,
        e.text = "体力上限：",
        e.textColor = 8631282,
        e.y = 33,
        e
    },
    o.txtAttack1_i = function() {
        var e = new eui.Label;
        return this.txtAttack1 = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "攻击：",
        e.textColor = 11520511,
        e.x = 7,
        e.y = 95,
        e
    },
    o.txtSAttack1_i = function() {
        var e = new eui.Label;
        return this.txtSAttack1 = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "特攻：",
        e.textColor = 11520511,
        e.x = 7,
        e.y = 125,
        e
    },
    o.txtSPeed1_i = function() {
        var e = new eui.Label;
        return this.txtSPeed1 = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "速度：",
        e.textColor = 11520511,
        e.x = 7,
        e.y = 155,
        e
    },
    o.txtDefence1_i = function() {
        var e = new eui.Label;
        return this.txtDefence1 = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "防御：",
        e.textColor = 11520511,
        e.x = 218,
        e.y = 95,
        e
    },
    o.txtSDefence1_i = function() {
        var e = new eui.Label;
        return this.txtSDefence1 = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "特防：",
        e.textColor = 11520511,
        e.x = 217,
        e.y = 125,
        e
    },
    o.txtHealth1_i = function() {
        var e = new eui.Label;
        return this.txtHealth1 = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "体力：",
        e.textColor = 11520511,
        e.x = 218,
        e.y = 155,
        e
    },
    o.groupNotMax_i = function() {
        var e = new eui.Group;
        return this.groupNotMax = e,
        e.visible = !0,
        e.x = 7,
        e.y = 94,
        e.elementsContent = [this.txtAttack2_i(), this.txtSAttack2_i(), this.txtSpeed2_i(), this.txtDefence2_i(), this.txtSDefence2_i(), this.txtHealth2_i(), this._Image3_i(), this._Image4_i(), this._Image5_i(), this._Image6_i(), this._Image7_i(), this._Image8_i()],
        e
    },
    o.txtAttack2_i = function() {
        var e = new eui.Label;
        return this.txtAttack2 = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.textAlign = "right",
        e.textColor = 11520511,
        e.width = 147,
        e.x = 0,
        e.y = 1,
        e
    },
    o.txtSAttack2_i = function() {
        var e = new eui.Label;
        return this.txtSAttack2 = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.textAlign = "right",
        e.textColor = 11520511,
        e.width = 147,
        e.x = 0,
        e.y = 31,
        e
    },
    o.txtSpeed2_i = function() {
        var e = new eui.Label;
        return this.txtSpeed2 = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.textAlign = "right",
        e.textColor = 11520511,
        e.width = 147,
        e.x = 0,
        e.y = 61,
        e
    },
    o.txtDefence2_i = function() {
        var e = new eui.Label;
        return this.txtDefence2 = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.textAlign = "right",
        e.textColor = 11520511,
        e.width = 147,
        e.x = 211,
        e.y = 1,
        e
    },
    o.txtSDefence2_i = function() {
        var e = new eui.Label;
        return this.txtSDefence2 = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.textAlign = "right",
        e.textColor = 11520511,
        e.width = 147,
        e.x = 210,
        e.y = 31,
        e
    },
    o.txtHealth2_i = function() {
        var e = new eui.Label;
        return this.txtHealth2 = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.textAlign = "right",
        e.textColor = 11520511,
        e.width = 147,
        e.x = 211,
        e.y = 61,
        e
    },
    o._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_develop_up_level_view_imgarrow1_png",
        e.x = 88,
        e.y = 0,
        e
    },
    o._Image4_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_develop_up_level_view_imgarrow1_png",
        e.x = 88,
        e.y = 30,
        e
    },
    o._Image5_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_develop_up_level_view_imgarrow1_png",
        e.x = 88,
        e.y = 60,
        e
    },
    o._Image6_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_develop_up_level_view_imgarrow1_png",
        e.x = 298,
        e.y = 0,
        e
    },
    o._Image7_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_develop_up_level_view_imgarrow1_png",
        e.x = 298,
        e.y = 30,
        e
    },
    o._Image8_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_develop_up_level_view_imgarrow1_png",
        e.x = 298,
        e.y = 60,
        e
    },
    o.btnExp_i = function() {
        var e = new eui.RadioButton;
        return this.btnExp = e,
        e.height = 33,
        e.label = "1",
        e.width = 101,
        e.x = 14,
        e.y = 200,
        e.skinName = n,
        e
    },
    o.btnItem_i = function() {
        var e = new eui.RadioButton;
        return this.btnItem = e,
        e.height = 33,
        e.label = "2",
        e.width = 101,
        e.x = 114,
        e.y = 200,
        e.skinName = r,
        e
    },
    o.btnHealth_i = function() {
        var e = new eui.RadioButton;
        return this.btnHealth = e,
        e.height = 33,
        e.label = "3",
        e.width = 101,
        e.x = 215,
        e.y = 200,
        e.skinName = a,
        e
    },
    o.emptySign_i = function() {
        var e = new eui.Image;
        return this.emptySign = e,
        e.horizontalCenter = 0,
        e.source = "pet_bag_empty_sign_png",
        e.y = 287,
        e
    },
    o.scroller_i = function() {
        var e = new eui.Scroller;
        return this.scroller = e,
        e.bottom = 77,
        e.top = 241,
        e.visible = !0,
        e.width = 389,
        e.x = 22,
        e.viewport = this.list_i(),
        e
    },
    o.list_i = function() {
        var e = new eui.List;
        return this.list = e,
        e.layout = this._TileLayout1_i(),
        e
    },
    o._TileLayout1_i = function() {
        var e = new eui.TileLayout;
        return e.requestedColumnCount = 5,
        e
    },
    o.groupExp_i = function() {
        var e = new eui.Group;
        return this.groupExp = e,
        e.cacheAsBitmap = !0,
        e.visible = !0,
        e.x = 14,
        e.y = 245,
        e.elementsContent = [this._Image9_i(), this._Image10_i(), this._Image11_i(), this._Label2_i(), this.txtExp_i(), this._Group2_i(), this._Group3_i(), this._Group4_i()],
        e
    },
    o._Image9_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_skill_view_img1_png",
        e.x = 7,
        e.y = 0,
        e
    },
    o._Image10_i = function() {
        var e = new eui.Image;
        return e.height = 42,
        e.source = "pet_bag_develop_up_level_view_img2_png",
        e.width = 398,
        e.x = 0,
        e.y = 27,
        e
    },
    o._Image11_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_s_effect_view_imgexp_png",
        e.x = 156,
        e.y = 34,
        e
    },
    o._Label2_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "累积经验：",
        e.textColor = 12834813,
        e.x = 27,
        e.y = 1,
        e
    },
    o.txtExp_i = function() {
        var e = new eui.Label;
        return this.txtExp = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.textColor = 6027519,
        e.x = 188,
        e.y = 41,
        e
    },
    o._Group2_i = function() {
        var e = new eui.Group;
        return e.height = 110,
        e.width = 86,
        e.x = 40,
        e.y = 86,
        e.elementsContent = [this._Image12_i(), this.imgExchange1Icon_i(), this.txtExchange1_i(), this.btnExchange1_i()],
        e
    },
    o._Image12_i = function() {
        var e = new eui.Image;
        return e.height = 70,
        e.scale9Grid = new egret.Rectangle(10, 9, 9, 10),
        e.source = "rarity_item_1_png",
        e.width = 70,
        e.x = 8,
        e
    },
    o.imgExchange1Icon_i = function() {
        var e = new eui.Image;
        return this.imgExchange1Icon = e,
        e.height = 50,
        e.width = 50,
        e.x = 18,
        e.y = 10,
        e
    },
    o.txtExchange1_i = function() {
        var e = new eui.Label;
        return this.txtExchange1 = e,
        e.fontFamily = "MFShangHei",
        e.right = 14,
        e.size = 16,
        e.stroke = 1,
        e.strokeColor = 1320013,
        e.textColor = 16777215,
        e.y = 50,
        e
    },
    o.btnExchange1_i = function() {
        var e = new eui.Image;
        return this.btnExchange1 = e,
        e.source = "pet_bag_develop_up_level_view_btnexchange1_png",
        e.x = 0,
        e.y = 76,
        e
    },
    o._Group3_i = function() {
        var e = new eui.Group;
        return e.height = 110,
        e.width = 86,
        e.x = 156,
        e.y = 86,
        e.elementsContent = [this._Image13_i(), this.imgExchange2Icon_i(), this.txtExchange2_i(), this.btnExchange2_i()],
        e
    },
    o._Image13_i = function() {
        var e = new eui.Image;
        return e.height = 70,
        e.scale9Grid = new egret.Rectangle(10, 9, 9, 10),
        e.source = "rarity_item_1_png",
        e.width = 70,
        e.x = 8,
        e
    },
    o.imgExchange2Icon_i = function() {
        var e = new eui.Image;
        return this.imgExchange2Icon = e,
        e.height = 50,
        e.width = 50,
        e.x = 18,
        e.y = 10,
        e
    },
    o.txtExchange2_i = function() {
        var e = new eui.Label;
        return this.txtExchange2 = e,
        e.fontFamily = "MFShangHei",
        e.right = 14,
        e.size = 16,
        e.stroke = 1,
        e.strokeColor = 1320013,
        e.textColor = 16777215,
        e.y = 50,
        e
    },
    o.btnExchange2_i = function() {
        var e = new eui.Image;
        return this.btnExchange2 = e,
        e.source = "pet_bag_develop_up_level_view_btnexchange1_png",
        e.x = 0,
        e.y = 76,
        e
    },
    o._Group4_i = function() {
        var e = new eui.Group;
        return e.height = 110,
        e.width = 86,
        e.x = 272,
        e.y = 86,
        e.elementsContent = [this._Image14_i(), this.imgExchange3Icon_i(), this.txtExchange3_i(), this.btnExchange3_i()],
        e
    },
    o._Image14_i = function() {
        var e = new eui.Image;
        return e.height = 70,
        e.scale9Grid = new egret.Rectangle(10, 9, 9, 10),
        e.source = "rarity_item_1_png",
        e.width = 70,
        e.x = 8,
        e
    },
    o.imgExchange3Icon_i = function() {
        var e = new eui.Image;
        return this.imgExchange3Icon = e,
        e.height = 50,
        e.width = 50,
        e.x = 18,
        e.y = 10,
        e
    },
    o.txtExchange3_i = function() {
        var e = new eui.Label;
        return this.txtExchange3 = e,
        e.fontFamily = "MFShangHei",
        e.right = 14,
        e.size = 16,
        e.stroke = 1,
        e.strokeColor = 1320013,
        e.textColor = 16777215,
        e.y = 50,
        e
    },
    o.btnExchange3_i = function() {
        var e = new eui.Image;
        return this.btnExchange3 = e,
        e.source = "pet_bag_develop_up_level_view_btnexchange1_png",
        e.x = 0,
        e.y = 76,
        e
    },
    o.btnUpMax_i = function() {
        var e = new eui.Group;
        return this.btnUpMax = e,
        e.cacheAsBitmap = !0,
        e.x = 55,
        e.y = 492,
        e.elementsContent = [this._Image15_i(), this._Label3_i()],
        e
    },
    o._Image15_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_main_panel_btnyellow_png",
        e.x = 0,
        e.y = 0,
        e
    },
    o._Label3_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "REEJI",
        e.size = 20,
        e.text = "升至满级",
        e.textColor = 10246682,
        e.visible = !0,
        e.x = 27,
        e.y = 13,
        e
    },
    o.btnUpOne_i = function() {
        var e = new eui.Group;
        return this.btnUpOne = e,
        e.cacheAsBitmap = !0,
        e.x = 236,
        e.y = 492,
        e.elementsContent = [this._Image16_i(), this._Label4_i()],
        e
    },
    o._Image16_i = function() {
        var e = new eui.Image;
        return e.source = "pet_bag_main_panel_btnblue_png",
        e.x = 0,
        e.y = 0,
        e
    },
    o._Label4_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "REEJI",
        e.size = 20,
        e.text = "提升1级",
        e.textColor = 2976172,
        e.visible = !0,
        e.x = 31,
        e.y = 13,
        e
    },
    t
} (eui.Skin);