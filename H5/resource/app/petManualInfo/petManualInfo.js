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
petManualInfo; !
function(t) {
    var e = function(t) {
        function e() {
            return t.call(this) || this
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this),
            this._createCustomComponent()
        },
        e.prototype._createCustomComponent = function() {},
        e.prototype.addEvents = function() {},
        e.prototype.removeEvents = function() {},
        e.prototype.updateData = function(t) {
            this._customData != t && (this._customData = KTool.clone(t)),
            this.addEvents(),
            this._updateView()
        },
        e.prototype._updateView = function() {},
        e.prototype.destroy = function() {
            this.removeEvents(),
            t.prototype.destroy.call(this)
        },
        e
    } (BaseModule);
    t.BaseView = e,
    __reflect(e.prototype, "petManualInfo.BaseView")
} (petManualInfo || (petManualInfo = {}));
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
petManualInfo; !
function(t) {
    var e = function(e) {
        function i(t) {
            var i = e.call(this, t) || this;
            if (i._isNeedShowAdv = !1, t && "pet" == t.type) if (t.isNeedShowAdv && (i._isNeedShowAdv = !0), "number" == typeof t.data) {
                i._customData = {};
                for (var n = PetBook.PetBookXMLInfo.dataList,
                r = 0; r < n.length; r++) if (~~n[r].ID === ~~t.data) {
                    i._customData.id = ~~n[r].ID,
                    i._customData.Features = n[r].Features,
                    i._customData.name = n[r].DefName,
                    i._customData.typeName = n[r].Type,
                    i._customData.mapId = n[r].mapId,
                    i._customData.Redirect = n[r].Redirect,
                    i._customData.Go = n[r].Go;
                    break
                }
            } else console.error("数据错误");
            return i.skinName = "PetInfoManual.InfoSkin",
            i.percentWidth = 100,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            GameInfo.isChecking && (this.txt_desc.visible = !1),
            this.petModel.SetInitComp(core.component.pet.PetModel.DYNAMIC_MODEL, !1, !1),
            this.petModel.SetCacheMax(10),
            this.petInfo.left = DeviceInfoManager.adapterOffSetX > 32 ? DeviceInfoManager.adapterOffSetX: 32,
            this.petInfo.right = DeviceInfoManager.adapterOffSetX > 30 ? DeviceInfoManager.adapterOffSetX: 30,
            this.initData(),
            this.checkCollectState(),
            this.addEvents(),
            this._isNeedShowAdv && this.showAdvPetInfo()
        },
        i.prototype.initData = function() {
            var t = this;
            this.txt_desc.text = this._customData.Features;
            var e = this._customData.id;
            if (config.ArchivesStory.hasLoader) {
                var i = config.ArchivesStory.getItems().filter(function(t) {
                    return t.monid == e
                });
                this.btnSave1.visible = i.length > 0
            } else config.ArchivesStory.load(function() {
                var i = config.ArchivesStory.getItems().filter(function(t) {
                    return t.monid == e
                });
                t.btnSave1.visible = i.length > 0
            },
            this);
            var n = PetSkinXMLInfo.getSkinInfosByPetId(e);
            this.btnSkin.visible = n.length > 0,
            PetAdvanceXMLInfo.getIncludeAdvance(e) ? (this.btnAdvance.visible = !0, this.btnAdvance.source = 1 == PetAdvanceXMLInfo.getAdvType(e) ? "btnJX_png": "btnAdvpet_png") : this.btnAdvance.visible = !1,
            GameInfo.isChecking && (this.imgBtn_get.visible = this.btnAdvance.visible = !1),
            IS_RELEASE || (this.btnAddPet.visible = !0, ImageButtonUtil.add(this.btnAddPet,
            function() {
                var e = new egret.ByteArray,
                i = t._customData.id,
                n = "";
                if (t._currentSkinInfo) if (t._currentSkinInfo.monId == t._currentSkinInfo.skinPetId) var n = "@addpet " + t._currentSkinInfo.monId + " 100";
                else n = "@addskin " + t._currentSkinInfo.id + " 1";
                else var n = "@addpet " + i + " 100";
                for (var r = n.length,
                a = 0; r > a && !(e.length > 131); a++) e.writeUTFBytes(n.charAt(a));
                e.writeUTFBytes("\x00"),
                window.SocketConnection.send(2102, 0, e.length, e)
            },
            this))
        },
        i.prototype.addEvents = function() {
            var t = this;
            this.petModel.addEventListener(core.component.pet.PetModel.EVENT_LOAD_COMPLETE, this._onLoadedComplete, this),
            ImageButtonUtil.add(this.imgBtn_get, this._onTouchImageButtonHandler, this),
            ImageButtonUtil.add(this.btnSkin, this._onTouchImageButtonHandler, this),
            ImageButtonUtil.add(this.btnAdvance, this._onTouchImageButtonHandler, this),
            ImageButtonUtil.add(this.imgBtn_show, this._onTouchImageButtonHandler, this),
            ImageButtonUtil.add(this.btnSave1,
            function() {
                StatLogger.log("20230602版本系统功能", "精灵档案馆", "点击了图鉴界面的【档案】按钮");
                var e = t._customData.id;
                ModuleManager.showModuleByID(226, e)
            },
            this),
            EventManager.addEventListener("updatePet", this._updatePet, this),
            EventManager.addEventListener("closeToSkin", this.closeToSkin, this),
            EventManager.addEventListener("enterAnim", this.otherEnterAnim, this),
            EventManager.addEventListener("showPetInfo", this.showPetInfo, this),
            this.initBtnClose("pet_info_manual_title_png", this.groupBtnClose,
            function() {
                t.onClose()
            },
            this)
        },
        i.prototype._onLoadedComplete = function(t) {},
        i.prototype.closeToSkin = function() {
            this._advView && this._advView.destroy(),
            this.onClose()
        },
        i.prototype._onTouchImageButtonHandler = function(t) {
            var e = this;
            switch (t.currentTarget) {
            case this.imgBtn_get:
                if ("" == PetBook.PetBookXMLInfo.getJumptarget(this._customData.id) || void 0 == PetBook.PetBookXMLInfo.getJumptarget(this._customData.id)) BubblerManager.getInstance().showText("暂未开放，敬请期待！");
                else {
                    var i = GainWayManger.setPetBookGainWayItemInfo(this._customData.id);
                    GainWayManger.setGainWayGoto(i,
                    function() {
                        e.hide(),
                        PopViewManager.getInstance().hideAll(),
                        AwardManager.hideDialog()
                    })
                }
                break;
            case this.btnSkin:
                ModuleManager.showModule("petManualInfo", [], {
                    data: this._customData,
                    num: 1
                },
                "PetinfoPanel", AppDoStyle.HIDEN);
                break;
            case this.imgBtn_show:
                this._currentSkinInfo ? AwardManager.ShowTmpPetSkinDiaolg(this._currentSkinInfo) : AwardManager.ShowTmpPetDiaolg(this._customData.id);
                break;
            case this.btnAdvance:
                this.showAdvPetInfo()
            }
        },
        i.prototype.otherEnterAnim = function(t) {
            var e = t.data;
            this.enterAnim(e)
        },
        i.prototype.showPetInfo = function(t) {
            return this._isNeedShowAdv ? (this._isNeedShowAdv = !1, void this.onClose()) : (this.grpBack.visible = !0, egret.lifecycle.stage.touchChildren = !1, egret.setTimeout(function() {
                egret.lifecycle.stage.touchChildren = !0
            },
            this, 750), this.rightInfo.visible = !0, gsap.fromTo(this.rightInfo, {
                x: 6 - this.rightInfo.width * this.rightInfo.scaleX,
                alpha: .1
            },
            {
                x: 6,
                alpha: 1,
                duration: .5
            }), this.viewStack_right.visible = !0, gsap.fromTo(this.viewStack_right, {
                x: 1136 + this.viewStack_right.width * this.viewStack_right.scaleX,
                alpha: .1
            },
            {
                x: 780,
                alpha: 1,
                duration: .5
            }), this.txt_desc.visible = !0, gsap.fromTo(this.txt_desc, {
                alpha: .01,
                y: 700
            },
            {
                alpha: 1,
                y: 471,
                duration: .5
            }), this.imgBtn_get.visible = !0, GameInfo.isChecking && (this.imgBtn_get.visible = !1), GameInfo.isChecking || gsap.fromTo(this.imgBtn_get, {
                alpha: .01,
                x: 1500
            },
            {
                alpha: 1,
                x: 928,
                duration: .5
            }), this.imgBtn_show.visible = !0, gsap.fromTo(this.imgBtn_show, {
                alpha: .01
            },
            {
                alpha: 1,
                duration: .5
            }), void(IS_RELEASE || (this.btnAddPet.visible = !0, gsap.fromTo(this.btnAddPet, {
                alpha: .01
            },
            {
                alpha: 1,
                duration: .5
            }))))
        },
        i.prototype.showAdvPetInfo = function() {
            null == this._advView ? (this._advView = new t.AdvancePetView(this._customData.id), this.addChild(this._advView), this._advView.showView()) : this._advView.showView(),
            this.hidePetInfo()
        },
        i.prototype.hidePetInfo = function() {
            var t = this;
            this.grpBack.visible = !1,
            egret.lifecycle.stage.touchChildren = !1,
            egret.setTimeout(function() {
                egret.lifecycle.stage.touchChildren = !0
            },
            this, 750),
            gsap.fromTo(this.rightInfo, {
                x: 6,
                alpha: 1
            },
            {
                x: 6 - this.rightInfo.width * this.rightInfo.scaleX,
                alpha: .1,
                duration: .5,
                onComplete: function() {
                    t.rightInfo.visible = !1
                }
            }),
            gsap.fromTo(this.viewStack_right, {
                x: 780,
                alpha: 1
            },
            {
                x: 1136 + this.viewStack_right.width * this.viewStack_right.scaleX,
                alpha: .1,
                duration: .5,
                onComplete: function() {
                    t.viewStack_right.visible = !1
                }
            }),
            gsap.fromTo(this.txt_desc, {
                alpha: 1,
                y: 471
            },
            {
                alpha: .01,
                y: 700,
                duration: .5,
                onComplete: function() {
                    t.txt_desc.visible = !1
                }
            }),
            GameInfo.isChecking || gsap.fromTo(this.imgBtn_get, {
                alpha: 1,
                x: 928
            },
            {
                alpha: .01,
                x: 1500,
                duration: .5,
                onComplete: function() {
                    t.imgBtn_get.visible = !1
                }
            }),
            gsap.fromTo(this.imgBtn_show, {
                alpha: 1
            },
            {
                alpha: .01,
                duration: .5,
                onComplete: function() {
                    t.imgBtn_show.visible = !1
                }
            }),
            IS_RELEASE || gsap.fromTo(this.btnAddPet, {
                alpha: 1
            },
            {
                alpha: .01,
                duration: .5,
                onComplete: function() {
                    t.btnAddPet.visible = !1
                }
            })
        },
        i.prototype.enterAnim = function(t) {
            var e = this,
            i = [];
            this.petInfo.touchEnabled = !1,
            this.petInfo.touchChildren = !1,
            i.push(egret.Tween.get(this.petInfo).to({
                alpha: 0
            },
            1200, egret.Ease.quadOut).call(function() {
                e.addChild(t),
                e.petInfo.touchEnabled = !0,
                e.petInfo.touchChildren = !0,
                e.petInfo.alpha = 1
            })),
            i.push(egret.Tween.get(this.petModel).to({
                x: -10
            },
            1200, egret.Ease.quadOut).call(function() {
                e.petModel.x = 172
            }));
            var n = (r = common.TweenUtil).createAllTween.apply(r, i);
            Promise.all(n);
            var r
        }, i.prototype.checkCollectState = function() {
            var t = this._customData.id;
            SeerbookCollectionController.getinstance().getHavePet([t], this._onSelectedCollectState.bind(this))
        },
        i.prototype._onSelectedCollectState = function(t) {
            var e = this._customData.id;
            SeerbookCollectionController.getinstance().havePet(e);
            this._updateShow()
        },
        i.prototype._updateShow = function() {
            this._updatePet(),
            this._updateLeftView(),
            this._updateRightView()
        },
        i.prototype._updatePet = function() {
            var t = this._customData.id;
            this._currentSkinInfo ? this.petModel.SetPetData(this._currentSkinInfo.skinPetId) : this.petModel.SetPetData(t)
        },
        i.prototype._updateLeftView = function() {
            var t = this.viewStack_left.getItemAt(0),
            e = this.viewStack_left.getChildByName(t).getChildAt(0);
            e && e.updateData(this._customData)
        },
        i.prototype._updateRightView = function() {
            var t = this.viewStack_right.getItemAt(0),
            e = this.viewStack_right.getChildByName(t).getChildAt(0);
            e && e.updateData(this._customData)
        },
        i.prototype.destroy = function() {
            e.prototype.destroy.call(this),
            EventManager.removeEventListener("updatePet", this._updatePet, this),
            EventManager.removeEventListener("closeToSkin", this.closeToSkin, this),
            EventManager.removeEventListener("showPetInfo", this.showPetInfo, this),
            this.petModel.removeEventListener(core.component.pet.PetModel.EVENT_LOAD_COMPLETE, this._onLoadedComplete, this),
            EventManager.removeEventListener("enterAnim", this.otherEnterAnim, this),
            ImageButtonUtil.removeAll(this)
        },
        i
    } (BaseModule);
    t.PetManualInfo = e,
    __reflect(e.prototype, "petManualInfo.PetManualInfo")
} (petManualInfo || (petManualInfo = {}));
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
petManualInfo; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.skinName = InfoViewItemSkin,
            e.cacheAsBitmap = !0,
            e
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this),
            this.once(egret.Event.REMOVED_FROM_STAGE, this.destroy, this)
        },
        e.prototype.dataChanged = function() {
            t.prototype.dataChanged.call(this),
            this._info = this.data,
            this.updateView()
        },
        e.prototype.updateView = function() {
            for (var t = 0; 2 > t; t++) this._info[t] ? (this["grp_" + t].visible = !0, this["icon_" + t].source = ClientConfig.getpettypeticon(String(this._info[t].id)), this["txt_" + t].text = this._info[t].pow) : this["grp_" + t].visible = !1
        },
        e.prototype.destroy = function() {
            this.removeChildren()
        },
        e
    } (eui.ItemRenderer);
    t.InfoViewItem = e,
    __reflect(e.prototype, "petManualInfo.InfoViewItem")
} (petManualInfo || (petManualInfo = {}));
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
petManualInfo; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.addEventListener(egret.Event.REMOVED_FROM_STAGE, i.destroy, i),
            DisplayUtil.cacheAsBitmapDisplayObj(i),
            i.skinName = t.skillItemSkin,
            i
        }
        return __extends(i, e),
        i.prototype.dataChanged = function() {
            var t, e;
            if ("number" == typeof this.data ? (t = this.data, e = 0) : (t = this.data.id, e = this.data.tag), t > 0) {
                var i = SkillXMLInfo.getTypeID(t),
                n = "";
                n = 4 == SkillXMLInfo.getCategory(t) ? ClientConfig.getpettypeticon("prop") : ClientConfig.getpettypeticon(String(i)),
                this.icon_attr.source = n,
                this.icon_attr.visible = !0,
                this.txt_name.text = SkillXMLInfo.getName(t),
                this.txt_hurti_value.text = SkillXMLInfo.getDamage(t).toString();
                var r = SkillXMLInfo.getPP(t).toString();
                this.txt_pp_value.text = r + "/" + r
            } else this.icon_attr.visible = !1,
            this.txt_name.text = "暂无",
            this.txt_hurti_value.text = "无",
            this.txt_pp_value.text = "无";
            e ? (this.tag.visible = !0, this.tag.source = "pet_info_manual_tag" + e + "_png") : this.tag.visible = !1
        },
        i.prototype.destroy = function() {
            this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this)
        },
        i
    } (eui.ItemRenderer);
    t.SkillItem = e,
    __reflect(e.prototype, "petManualInfo.SkillItem")
} (petManualInfo || (petManualInfo = {}));
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
petManualInfo; !
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
            this._petShow.setSize(147, 189),
            this._petShow.setPetMaxScale(1),
            this.petPosition.addChild(this._petShow),
            this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this)
        },
        i.prototype.setSelect = function(t) {
            this.select_img.visible = t,
            this._rect.visible = !t
        },
        i.prototype.dataChanged = function() {
            var t = this;
            if (!this.data) return void(this.visible = !1);
            this.visible = !0,
            this.lab_name.text = StringUtil.parseStrLimitLen(this.data.name, 8);
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
    __reflect(e.prototype, "petManualInfo.SkinItem")
} (petManualInfo || (petManualInfo = {}));
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
petManualInfo; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return DisplayUtil.cacheAsBitmapDisplayObj(i),
            i.skinName = t.SkillItemNew,
            i.addEvents(),
            i
        }
        return __extends(i, e),
        i.prototype.addEvents = function() {
            this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this)
        },
        i.prototype.dataChanged = function() {
            var t, e;
            if ("number" == typeof this.data ? (t = this.data, e = 0) : (t = this.data.id, e = this.data.tag), t > 0) {
                var i = SkillXMLInfo.getTypeID(t),
                n = "";
                n = 4 == SkillXMLInfo.getCategory(t) ? ClientConfig.getpettypeticon("prop") : ClientConfig.getpettypeticon(String(i)),
                this.icon_attr.source = n,
                this.icon_attr.visible = !0,
                this.txt_name.text = SkillXMLInfo.getName(t),
                this.txt_hurti_value.text = SkillXMLInfo.getDamage(t).toString();
                var r = SkillXMLInfo.getPP(t).toString();
                this.txt_pp_value.text = r + "/" + r
            } else this.icon_attr.visible = !1,
            this.txt_name.text = "暂无",
            this.txt_hurti_value.text = "无",
            this.txt_pp_value.text = "无";
            e && (this.tag.source = "pet_info_manual_tag" + e + "_png"),
            this.tag.visible = !!e
        },
        i.prototype.destroy = function() {
            this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this)
        },
        i
    } (eui.ItemRenderer);
    t.RecommendSkillItem = e,
    __reflect(e.prototype, "petManualInfo.RecommendSkillItem")
} (petManualInfo || (petManualInfo = {}));
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
    return new(i || (i = Promise))(function(r, a) {
        function o(t) {
            try {
                _(n.next(t))
            } catch(e) {
                a(e)
            }
        }
        function s(t) {
            try {
                _(n["throw"](t))
            } catch(e) {
                a(e)
            }
        }
        function _(t) {
            t.done ? r(t.value) : new i(function(e) {
                e(t.value)
            }).then(o, s)
        }
        _((n = n.apply(t, e || [])).next())
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
        if (r) throw new TypeError("Generator is already executing.");
        for (; _;) try {
            if (r = 1, a && (o = a[2 & i[0] ? "return": i[0] ? "throw": "next"]) && !(o = o.call(a, i[1])).done) return o;
            switch (a = 0, o && (i = [0, o.value]), i[0]) {
            case 0:
            case 1:
                o = i;
                break;
            case 4:
                return _.label++,
                {
                    value: i[1],
                    done: !1
                };
            case 5:
                _.label++,
                a = i[1],
                i = [0];
                continue;
            case 7:
                i = _.ops.pop(),
                _.trys.pop();
                continue;
            default:
                if (o = _.trys, !(o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                    _ = 0;
                    continue
                }
                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                    _.label = i[1];
                    break
                }
                if (6 === i[0] && _.label < o[1]) {
                    _.label = o[1],
                    o = i;
                    break
                }
                if (o && _.label < o[2]) {
                    _.label = o[2],
                    _.ops.push(i);
                    break
                }
                o[2] && _.ops.pop(),
                _.trys.pop();
                continue
            }
            i = e.call(t, _)
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
    var r, a, o, s, _ = {
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
petManualInfo; !
function(t) {
    var e = function(t) {
        function e(e) {
            var i = t.call(this) || this;
            return i._loadedPetCompleteFlag = !0,
            i._customData = e.data,
            i._infoNum = e.num,
            void 0 != e.backToskin && (i.backToskin = e.backToskin),
            i.skinName = "PetInfoSkin",
            i.percentWidth = 100,
            i
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            var t = this;
            this.initBtnClose("pet_info_manual_title_png", this,
            function() {
                void 0 != t.backToskin && 1 == t.backToskin ? (t.onClose(), EventManager.removeEventListener("pet_manual_change_pet", t.changePet, t), EventManager.dispatchEventWith("closeToSkin")) : (t.onClose(), EventManager.removeEventListener("pet_manual_change_pet", t.changePet, t), EventManager.dispatchEventWith("updatePet"))
            },
            this),
            this.petModel.SetInitComp(core.component.pet.PetModel.DYNAMIC_MODEL, !1, !1),
            this.petModel.SetCacheMax(10),
            this.viewStack_right.selectedIndex = this._infoNum,
            this.initDat(),
            this._updatePet(),
            this.update(),
            this.addEvents()
        },
        e.prototype.initDat = function() {
            var t = this;
            IS_RELEASE || (this.btnAddPet.visible = !0, ImageButtonUtil.add(this.btnAddPet,
            function() {
                var e = new egret.ByteArray,
                i = t._customData.id,
                n = "";
                if (t._currentSkinInfo) if (t._currentSkinInfo.monId == t._currentSkinInfo.skinPetId) var n = "@addpet " + t._currentSkinInfo.monId + " 100";
                else n = "@addskin " + t._currentSkinInfo.id + " 1";
                else var n = "@addpet " + i + " 100";
                for (var r = n.length,
                a = 0; r > a && !(e.length > 131); a++) e.writeUTFBytes(n.charAt(a));
                e.writeUTFBytes("\x00"),
                window.SocketConnection.send(2102, 0, e.length, e)
            },
            this))
        },
        e.prototype.addEvents = function() {
            var t = this;
            this.petModel.addEventListener(core.component.pet.PetModel.EVENT_LOAD_COMPLETE, this._onLoadedComplete, this),
            ImageButtonUtil.add(this.imgBtn_show,
            function() {
                t._currentSkinInfo ? AwardManager.ShowTmpPetSkinDiaolg(t._currentSkinInfo) : AwardManager.ShowTmpPetDiaolg(t._customData.id)
            },
            this),
            EventManager.addEventListener("pet_manual_change_pet", this.changePet, this)
        },
        e.prototype.changePet = function(t) {
            return __awaiter(this, void 0, void 0,
            function() {
                return __generator(this,
                function(e) {
                    switch (e.label) {
                    case 0:
                        return this._currentSkinInfo = t.data.info,
                        this.txt_name.text = this._currentSkinInfo.name,
                        [4, wait(50)];
                    case 1:
                        return e.sent(),
                        this.petModel.SetPetData(this._currentSkinInfo.skinPetId),
                        [2]
                    }
                })
            })
        },
        e.prototype._onLoadedComplete = function(t) {
            this._loadedPetCompleteFlag = !0
        },
        e.prototype.initData = function() {},
        e.prototype._updatePet = function() {
            var t = this._customData.id;
            this._loadedPetCompleteFlag = !1,
            this._currentSkinInfo ? this.petModel.SetPetData(this._currentSkinInfo.skinPetId) : this.backToskin || this.petModel.SetPetData(t)
        },
        e.prototype.update = function() {
            var t = this._customData.id;
            this.txt_petId.text = t + "",
            this.txt_name.text = this._customData.name,
            this.txt_attr.text = this._customData.typeName,
            this.attr_icon.source = ClientConfig.getpettypeticon(PetXMLInfo.getType(t) + "");
            var e = this.viewStack_right.getItemAt(this._infoNum),
            i = this.viewStack_right.getChildByName(e).getChildAt(0);
            i && i.updateData(this._customData)
        },
        e.prototype.destroy = function() {
            t.prototype.destroy.call(this),
            EventManager.removeEventListener("pet_manual_change_pet", this.changePet, this),
            this.petModel.removeEventListener(core.component.pet.PetModel.EVENT_LOAD_COMPLETE, this._onLoadedComplete, this)
        },
        e
    } (BaseModule);
    t.PetinfoPanel = e,
    __reflect(e.prototype, "petManualInfo.PetinfoPanel")
} (petManualInfo || (petManualInfo = {}));
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
petManualInfo; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i._arraryCollection = new eui.ArrayCollection,
            i.skinName = t.EducateSkin,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            var i = this;
            e.prototype.childrenCreated.call(this),
            this._singleArr = [],
            this._doubleArr = [],
            SkillXMLInfo.getAllTypes().map(function(t, e, n) {
                1 == SkillXMLInfo.getTypeKind(t) ? i._singleArr.push(t) : i._doubleArr.push(t)
            }),
            this.allId = this._singleArr.concat(this._doubleArr),
            this._list.itemRenderer = t.InfoViewItem
        },
        i.prototype._createCustomComponent = function() {
            this.scroller_skill.viewport = this.viewport_skiilist,
            this.viewport_skiilist.itemRenderer = t.SkillItem,
            this.viewport_skiilist.dataProvider = this._arraryCollection
        },
        i.prototype.addEvents = function() {
            var t = this;
            this.viewport_skiilist.addEventListener(eui.ItemTapEvent.ITEM_TAP, this._onShowSkillTipsPop, this),
            this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this),
            ImageButtonUtil.add(this.imgBtn_restrain,
            function() {
                ModuleManager.showModule("petbookAttRelationShip", ["petbookAttRelationShip"], t._customData.id, "", AppDoStyle.NULL)
            },
            this);
            for (var e = 0; 3 > e; e++) ImageButtonUtil.add(this["icon_mark_" + e],
            function(e) {
                var i = e.currentTarget.name,
                n = ~~i.split("_")[1],
                r = {};
                r.ins = n,
                r.caller = t,
                r.goCallBack = t._goGetMark,
                tipsPop.TipsPop.openCounterMarkPop(r)
            },
            this, !1, !1)
        },
        i.prototype._goGetMark = function(t) {
            BubblerManager.getInstance().showText("功能尚未开启，敬请期待！")
        },
        i.prototype.removeEvents = function() {
            this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this),
            this.viewport_skiilist.removeEventListener(eui.ItemTapEvent.ITEM_TAP, this._onShowSkillTipsPop, this),
            ImageButtonUtil.removeAll(this)
        },
        i.prototype._onShowSkillTipsPop = function(t) {
            if (0 !== t.item) {
                var e = {
                    id: t.item,
                    petInfo: null
                },
                i = {};
                i.dir = "right-top",
                i.rx = -10,
                i.ry = 10,
                i.srcWorldPos = this.parent.parent.parent.localToGlobal(),
                tipsPop.TipsPop.openSkillPop(e, i)
            }
        },
        i.prototype._updateView = function() {
            this.updateAttribute(),
            this.addinfo(),
            this.addskill(),
            this.addCounterMark()
        },
        i.prototype.updateAttribute = function() {
            var t = this._customData.id;
            this.attr_icon.source = ClientConfig.getpettypeticon(PetXMLInfo.getType(t) + ""),
            this.txt_attr.text = this._customData.typeName;
            var e = ~~PetXMLInfo.getType(t);
            this.grp_scrl.visible = 8 != e,
            this.txt_none.visible = 8 == e;
            for (var i = [], n = [], r = 0; r < this.allId.length; r++) {
                var a = this.allId[r],
                o = SkillXMLInfo.petTypeNameEN(e).split("_"),
                s = SkillXMLInfo.petTypeNameEN(a).split("_"),
                _ = TypeXMLInfo.getRelationsPow(o, s),
                u = TypeXMLInfo.getRelationsPow(s, o);
                _ >= 1.5 && i.push({
                    id: a,
                    pow: _
                }),
                u >= 1.5 && n.push({
                    id: a,
                    pow: u
                })
            }
            i.sort(function(t, e) {
                return e.pow - t.pow
            }),
            n.sort(function(t, e) {
                return e.pow - t.pow
            });
            for (var l = [], r = 0; r < Math.max(i.length, n.length); r++) l.push([i[r], n[r]]);
            this._list.dataProvider = new eui.ArrayCollection(l),
            this._scrl.stopAnimation(),
            this._scrl.viewport.scrollH = 0
        },
        i.prototype.addinfo = function() {
            var t = this._customData.id,
            e = PetXMLInfo.getCharacterAttrParam(t),
            i = [1, 5, 6, 7, 8, 12, 13],
            n = ["攻击+速度", "攻击+体力", "体力+防御", "防御+特防", "特攻+速度", "特攻+体力", "体力+特防"],
            r = NatureXMLInfo.getName(i[e]),
            a = NatureXMLInfo.getDes2(i[e]);
            this.txt_nature_value.text = r + "(" + a + ")",
            this.txt_study_value.text = n[e],
            this.txt_inborn_value.text = "31"
        },
        i.prototype.addskill = function() {
            this.grp_skill.visible = !1;
            var t = this._customData.id,
            e = PetXMLInfo.getSkillListRecommend(t);
            e && e.length > 0 && (this._arraryCollection.replaceAll(e), this.grp_skill.visible = !0)
        },
        i.prototype.addCounterMark = function() {
            for (var t = this._customData.id,
            e = PetXMLInfo.getCharacterAttrParam(t), i = PetBook.PetBookXMLInfo.getRecMinMark(e), n = 0; 3 > n; n++) {
                var r = n < i.length;
                this["txt_mark_name_" + n].visible = r,
                this["icon_mark_" + n].visible = r,
                this["icon_mark_" + n].name = "id_0",
                r && (this["icon_mark_" + n].source = CountermarkXMLInfo.getIconURL(i[n]), this["txt_mark_name_" + n].textFlow = this.getName(i[n]), this["icon_mark_" + n].name = "id_" + i[n])
            }
        },
        i.prototype.getName = function(t) {
            var e = CountermarkXMLInfo.getDes(t);
            e.length > 5 && (e = e.substr(0, 4) + "……");
            var i = CountermarkXMLInfo.getMintmarkQuality(t);
            CountermarkXMLInfo.getType(t) != CountermarkType.MARK_IS_UNIVERSAL && (i = 0);
            var n;
            switch (i) {
            case 0:
                n = "#FFFFFF";
                break;
            case 1:
                n = "#FFFFFF";
                break;
            case 2:
                n = "#66FF00";
                break;
            case 3:
                n = "#1E90FF";
                break;
            case 4:
                n = "#FF00FF";
                break;
            case 5:
                n = "#FFFF00"
            }
            var r = "<font color='" + n + "'>" + e + "</font>";
            return (new egret.HtmlTextParser).parse(r)
        },
        i
    } (t.BaseView);
    t.EducateView = e,
    __reflect(e.prototype, "petManualInfo.EducateView")
} (petManualInfo || (petManualInfo = {}));
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
petManualInfo; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.skinName = t.SkillViewSkin,
            i
        }
        return __extends(i, e),
        i.prototype._createCustomComponent = function() {
            this.radioGroup = this.rb_ori.group,
            this.radioGroup.selectedValue = this.rb_ori.value,
            this.scroller_skill.viewport = this.list_viewport,
            this.list_viewport.itemRenderer = t.SkillItem
        },
        i.prototype.addEvents = function() {
            var t = this;
            this.list_viewport.addEventListener(eui.ItemTapEvent.ITEM_TAP, this._onShowSkillTipsPop, this),
            this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this),
            this.radioGroup.addEventListener(egret.Event.CHANGE,
            function() {
                t._updateView()
            },
            this)
        },
        i.prototype.removeEvents = function() {
            this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this),
            this.list_viewport.removeEventListener(eui.ItemTapEvent.ITEM_TAP, this._onShowSkillTipsPop, this)
        },
        i.prototype._onShowSkillTipsPop = function(t) {
            if (t.item) {
                var e = {
                    id: t.item.id,
                    petInfo: null
                },
                i = {};
                i.dir = "right-top",
                i.rx = -10,
                i.ry = 10,
                i.srcWorldPos = this.parent.parent.parent.localToGlobal(),
                tipsPop.TipsPop.openSkillPop(e, i)
            }
        },
        i.prototype._updateView = function() {
            this.scroller_skill.stopAnimation(),
            this.scroller_skill.viewport.scrollV = 0;
            var t = ~~this.radioGroup.selectedValue || 1,
            e = this._customData.id;
            GameInfo.isChecking && (this.rb_add.visible = this.getAppendSkills(e).length > 0);
            var i = [],
            n = [];
            if (1 == t) {
                this.currentState = "1",
                n = PetXMLInfo.getSkillListForLv(e, 1e4);
                var r = SkillXMLInfo.getHideSkillId(e);
                r > 0 && (n = n.concat([r])),
                this.add.visible = !1,
                this.tip.visible = !1
            } else 2 == t && (this.currentState = "2", n = this.getAppendSkills(e), this.add.visible = n.length <= 0, GameInfo.isChecking ? this.tip.visible = !1 : this.tip.visible = n.length > 0);
            for (var a = PetXMLInfo.getRecSkillList(e), o = a.map(function(t) {
                return t.ID
            }), s = [], _ = 0, u = a; _ < u.length; _++) {
                var l = u[_];
                void 0 != l.Tag && s.push(l.Tag)
            }
            var h, p = PetXMLInfo.getExtraSkill(e);
            p && (h = p.ID);
            for (var c = 0; c < n.length; c++) if (o.indexOf(n[c]) > -1) s.length > 0 ? i.push({
                id: n[c],
                tag: 2 + s[o.indexOf(n[c])]
            }) : i.push({
                id: n[c],
                tag: 2
            });
            else if (n[c] == h) i.push({
                id: n[c],
                tag: 1
            });
            else {
                var g = PetXMLInfo.getShowExtra(e).concat(PetAdvanceXMLInfo.getAdvanceFifthSkill(e));
                if (g.indexOf(n[c]) > -1) i.push({
                    id: n[c],
                    tag: 1
                });
                else {
                    var f = PetXMLInfo.getAdvanceSkill(e),
                    m = PetXMLInfo.getCanLearnAdvSkillTagList(e),
                    v = f.indexOf(n[c]);
                    v > -1 ? i.push({
                        id: n[c],
                        tag: 2 + m[v]
                    }) : i.push({
                        id: n[c],
                        tag: 0
                    })
                }
            }
            this.list_viewport.dataProvider = new eui.ArrayCollection(i)
        },
        i.prototype.getAppendSkills = function(t) {
            var e = [],
            i = PetXMLInfo.getCanLearnSPSkillList(t);
            e = e.concat(i);
            var n = PetXMLInfo.getAdvanceSkill(t);
            e = e.concat(n);
            var r = SkillXMLInfo.getLearnHideSkills(t);
            e = e.concat(r);
            for (var a = SkillXMLInfo.getAllHideSkills(t), o = [], s = 0; s < a.length; s++) ! SkillXMLInfo.isOHideSkillId(t, a[s]) && e.indexOf(a[s]) < 0 && o.push(a[s]);
            e = e.concat(o);
            var _ = PetXMLInfo.getShowExtra(t);
            return e = e.concat(_)
        },
        i
    } (t.BaseView);
    t.SkillView = e,
    __reflect(e.prototype, "petManualInfo.SkillView")
} (petManualInfo || (petManualInfo = {}));
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
petManualInfo; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i._itemWidth = 199,
            i._itemHeigth = 287,
            i._isMove = !1,
            i.skinName = t.InfoViewSkin,
            i
        }
        return __extends(i, e),
        i.prototype._createCustomComponent = function() {
            this._arryCol = new eui.ArrayCollection,
            this._customScroller = new common.ui.CustomScroller(this.viewport_list.width, this.viewport_list.height, this._itemWidth, this._itemHeigth, this.viewport_list.layout.gap, t.SkinItem, 150, .8, 1.2, 1, 1, this.viewport_list, this._arryCol, 100, null, common.ui.CustomScroller.DIR_TO_H),
            this.addChild(this._customScroller),
            this._customScroller.x = this.viewport_list.x,
            this._customScroller.y = this.viewport_list.y + 25
        },
        i.prototype.addEvents = function() {
            this._customScroller.addEventListener(common.ui.CustomScroller.EVENT_CHANGE_END, this._onChangeScroller, this),
            this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this)
        },
        i.prototype.removeEvents = function() {
            this._customScroller.removeEventListener(common.ui.CustomScroller.EVENT_CHANGE_END, this._onChangeScroller, this),
            this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this),
            ImageButtonUtil.removeAll(this)
        },
        i.prototype._updateView = function() {
            this._petId = this._customData.id;
            for (var t = PetSkinInfo.getPetDefaultSkin(this._petId), e = [t], i = PetSkinXMLInfo.getSkinInfosByPetId(this._petId), n = 0; n < i.length; n++) e.push(i[n]);
            this._firstSelectedId = this._customData.first || e[0].skinPetId,
            e.unshift(null),
            e.push(null),
            this._skinList = e,
            this._arryCol.replaceAll(this._skinList);
            for (var n = 0; n < this._skinList.length; n++) if (this._skinList[n] && this._skinList[n].skinPetId === this._firstSelectedId) {
                this._currentSkinInfo = this._skinList[n];
                break
            }
            this._selectSkinIndex = this._arryCol.getItemIndex(this._currentSkinInfo),
            this._customScroller.goToNum(this._selectSkinIndex, 0)
        },
        i.prototype.setArrowStatus = function() {},
        i.prototype.updatePetShow = function() {
            this._selectSkinIndex = this._customScroller.getSelectIndex();
            var t = this._arryCol.getItemAt(this._selectSkinIndex),
            e = PetXMLInfo.getName(t.monId),
            i = PetSkinXMLInfo.getTypeCn(t.type),
            n = t.name,
            r = 0 === t.type;
            r ? (this.txt_line1.text = e + "（默认形象）", this.txt_line2.text = "", this.txt_line3.text = "原型精灵:" + e) : (this.txt_line1.text = n + "（" + i + "皮肤）", this.txt_line2.text = "", void 0 === t.type ? this.txt_line3.text = "精灵经典形象": t.shopId ? this.txt_line3.text = "购买获得": t.go || t.goType ? this.txt_line3.text = "兑换获得": this.txt_line3.text = "通过限时活动获得"),
            EventManager.dispatchEventWith("pet_manual_change_pet", !1, {
                info: t
            })
        },
        i.prototype.onChangeSkin = function(t) {
            this._isMove || ("left" === t ? this._selectSkinIndex = Math.max(1, --this._selectSkinIndex) : this._selectSkinIndex = Math.min(this._arryCol.length - 2, ++this._selectSkinIndex), this.setArrowStatus(), this._isMove = !0, this._customScroller.goToNum(this._selectSkinIndex, 150))
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
            this.updatePetShow(),
            this.setArrowStatus()
        },
        i
    } (t.BaseView);
    t.SkinView = e,
    __reflect(e.prototype, "petManualInfo.SkinView")
} (petManualInfo || (petManualInfo = {}));
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
petManualInfo; !
function(t) {
    var e = function(e) {
        function i(t) {
            var i = e.call(this) || this;
            return i.skinName = "AdvancePetViewSkin",
            i._petId = t,
            i._arraryCollection = new eui.ArrayCollection,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.addEvents(),
            this._updateView()
        },
        i.prototype._createCustomComponent = function() {
            this._listSkill.itemRenderer = t.RecommendSkillItem,
            this._listSkill.dataProvider = this._arraryCollection
        },
        i.prototype._updateView = function() {
            var t = PetAdvanceXMLInfo.getOldRace(this._petId),
            e = PetAdvanceXMLInfo.getAdvanceRace(this._petId),
            i = t.reduce(function(t, e) {
                return Number(t) + Number(e)
            }),
            n = e.reduce(function(t, e) {
                return Number(t) + Number(e)
            });
            this.txtOldRace.text = i.toString(),
            this.txtAdvRace.text = n.toString();
            for (var r = [5, 0, 3, 1, 4, 2], a = 0; 5 >= a; a++) {
                this["txtValue" + r[a]].text = t[a];
                var o = Number(t[a]),
                s = Number(e[a]);
                s > o ? (this["txtDelta" + r[a]].visible = !0, this["txtDelta" + r[a]].text = (s - o).toString(), this["signUp" + r[a]].visible = !0, this["txtV" + r[a]].visible = !0, this["txtV" + r[a]].text = s) : (this["txtDelta" + r[a]].visible = !1, this["txtV" + r[a]].visible = !1, this["signUp" + r[a]].visible = !1)
            }
            var _ = EffectIconControl.getAdvanceEffectByPetId(this._petId);
            if (_) {
                this.btnDetail.visible = !0;
                var u = _.kind;
                if (this.grpType.removeChildren(), null != u) for (var l = u.toString().split(" ").map(Number), h = 0; h < l.length; h++) {
                    var p = new eui.Image("pet_bag_tag" + (l[h] + 1) + "_png");
                    this.grpType.addChild(p),
                    p.x = 53 * h
                }
            } else this.grpType.visible = !1,
            this.btnDetail.visible = !1;
            for (var c = [], g = PetAdvanceXMLInfo.getAdvanceSkill(this._petId).concat(PetAdvanceXMLInfo.getAdvanceFifthSkill(this._petId)), f = PetXMLInfo.getCanLearnAdvSkillTagList(this._petId), m = 0; m < g.length; m++) c.push({
                id: g[m],
                tag: m < f.length ? 2 + f[m] : 1
            });
            this._arraryCollection.replaceAll(c),
            c.length < 4 ? (this._listSkill.layout.gap = 20, this._listSkill.layout["paddingTop "] = 15) : (this._listSkill.layout.gap = 0, this._listSkill.layout["paddingTop "] = 0)
        },
        i.prototype.showView = function() {
            this.grpAdv.visible = !0,
            egret.lifecycle.stage.touchChildren = !1,
            egret.setTimeout(function() {
                egret.lifecycle.stage.touchChildren = !0
            },
            this, 750),
            this.grpBack.visible = !0,
            this.grpRace.visible = !0,
            gsap.fromTo(this.grpRace, {
                x: -this.grpRace.width * this.grpRace.scaleX,
                alpha: .1
            },
            {
                x: 20,
                alpha: 1,
                duration: .5
            }),
            this.grpSkill.visible = !0,
            gsap.fromTo(this.grpSkill, {
                x: 1136 + this.grpSkill.width * this.grpSkill.scaleX,
                alpha: .1
            },
            {
                x: 800,
                alpha: 1,
                duration: .5
            })
        },
        i.prototype.hideView = function() {
            var t = this;
            egret.lifecycle.stage.touchChildren = !1,
            egret.setTimeout(function() {
                egret.lifecycle.stage.touchChildren = !0,
                t.grpBack.visible = !1,
                t.grpAdv.visible = !1
            },
            this, 750),
            gsap.fromTo(this.grpRace, {
                x: 20,
                alpha: 1
            },
            {
                x: -this.grpRace.width * this.grpRace.scaleX,
                alpha: .1,
                duration: .5,
                onComplete: function() {
                    t.grpRace.visible = !1
                }
            }),
            gsap.fromTo(this.grpSkill, {
                x: 800,
                alpha: 1
            },
            {
                x: 1136 + this.grpSkill.width * this.grpSkill.scaleX,
                alpha: .1,
                duration: .5,
                onComplete: function() {
                    t.grpSkill.visible = !1
                }
            })
        },
        i.prototype.addEvents = function() {
            var t = this;
            ImageButtonUtil.add(this.btnDetail, this._onTouchImageButtonHandler, this),
            ImageButtonUtil.add(this.btn2Get, this._onTouchImageButtonHandler, this),
            this.initBtnClose("pet_info_manual_title_png", this,
            function() {
                t.hideView(),
                EventManager.dispatchEventWith("showPetInfo")
            },
            this),
            this._listSkill.addEventListener(eui.ItemTapEvent.ITEM_TAP, this._onShowSkillTipsPop, this),
            this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this)
        },
        i.prototype.removeEvents = function() {
            this._listSkill.removeEventListener(eui.ItemTapEvent.ITEM_TAP, this._onShowSkillTipsPop, this),
            this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this),
            ImageButtonUtil.removeAll(this)
        },
        i.prototype._onTouchImageButtonHandler = function(t) {
            switch (t.currentTarget) {
            case this.btnDetail:
                var e = PetManager.checkShowEffectIcon(this._petId);
                if (e) {
                    var i = EffectIconControl.getAllEffctByPetId(this._petId);
                    i.unshift(EffectIconControl.getAdvanceEffectByPetId(this._petId)),
                    ModuleManager.showModule("petEffDescPanel", ["pet_eff_desc_panel"], i, "", AppDoStyle.NULL)
                }
                break;
            case this.btn2Get:
                PetAdvanceXMLInfo.showAdvancePanel(this._petId)
            }
        },
        i.prototype._onShowSkillTipsPop = function(t) {
            if (t.item) {
                var e = {
                    id: t.item.id,
                    petInfo: null
                },
                i = {};
                i.dir = "right-top",
                i.rx = -10,
                i.ry = 10,
                i.srcWorldPos = this.parent.parent.parent.localToGlobal(),
                tipsPop.TipsPop.openSkillPop(e, i)
            }
        },
        i
    } (t.BaseView);
    t.AdvancePetView = e,
    __reflect(e.prototype, "petManualInfo.AdvancePetView")
} (petManualInfo || (petManualInfo = {}));
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
petManualInfo; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.skinName = t.InfoViewNewSkin,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            var t = this;
            e.prototype.childrenCreated.call(this),
            this._singleArr = [],
            this._doubleArr = [],
            SkillXMLInfo.getAllTypes().map(function(e, i, n) {
                1 == SkillXMLInfo.getTypeKind(e) ? t._singleArr.push(e) : t._doubleArr.push(e)
            }),
            this.allId = this._singleArr.concat(this._doubleArr)
        },
        i.prototype._createCustomComponent = function() {},
        i.prototype.addEvents = function() {
            this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this),
            ImageButtonUtil.add(this.btnInfo, this._onTouchImageButtonHandler, this),
            ImageButtonUtil.add(this.btnDevelop, this._onTouchImageButtonHandler, this)
        },
        i.prototype.removeEvents = function() {
            this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this),
            ImageButtonUtil.removeAll(this)
        },
        i.prototype._onTouchImageButtonHandler = function(t) {
            switch (t.currentTarget) {
            case this.btnDevelop:
                ModuleManager.showModule("petManualInfo", [], {
                    data: this._customData,
                    num: 2
                },
                "PetinfoPanel", AppDoStyle.HIDEN);
                break;
            case this.btnInfo:
                var e = PetManager.checkShowEffectIcon(this._customData.id);
                if (e) {
                    var i = EffectIconControl.getAllEffctByPetId(this._customData.id);
                    ModuleManager.showModule("petEffDescPanel", ["pet_eff_desc_panel"], i, "", AppDoStyle.NULL)
                } else BubblerManager.getInstance().showText("该精灵还没有特性！")
            }
        },
        i.prototype._updateView = function() {
            var t = this._customData.id;
            this.txt_petId.text = t + "";
            for (var e = (PetXMLInfo.getEvolvingLv(t), PetXMLInfo.getAllEvById(t)), i = 0, n = ["txt_hp_value", "txt_atk_value", "tx_def_value", "txt_satk_value", "txt_sdef_value", "txt_speed_value"], r = ["pb_hp", "pb_atk", "pb_def", "pb_satk", "pb_sdef", "pb_speed"], a = 0; a < e.length; a++) this[n[a]].text = e[a] ? ~~e[a] : 0,
            this[r[a]].maximum = 200,
            this[r[a]].value = e[a] ? ~~e[a] : 0,
            i += Number(e[a]);
            this.txt_zhongzu.text = "种族值：" + i,
            this.attr_icon.source = ClientConfig.getpettypeticon(PetXMLInfo.getType(t) + ""),
            this.txt_attr.text = this._customData.typeName;
            var o = SeerbookCollectionController.getinstance().havePet(t);
            this.txt_name.textColor = o ? this.txt_name.textColor = 16773477 : 16777215,
            this.txt_name.text = this._customData.name,
            this.petHead.source = ClientConfig.getPetHeadPath(t);
            var s = EffectIconControl.getAllEffctByPetId(t);
            if (s) {
                this.grpType.visible = !0,
                this.btnInfo.visible = !0,
                this.noAtr.visible = !1;
                var _ = s[0].kind;
                if (this.grpType.removeChildren(), null != _) for (var u = _.toString().split(" ").map(Number), l = 0; l < u.length; l++) {
                    var h = new eui.Image("pet_bag_tag" + (u[l] + 1) + "_png");
                    this.grpType.addChild(h),
                    h.x = 53 * l
                }
            } else this.grpType.visible = !1,
            this.btnInfo.visible = !1,
            this.noAtr.visible = !0
        },
        i.prototype.destroy = function() {
            e.prototype.destroy.call(this)
        },
        i
    } (t.BaseView);
    t.InfoViewNew = e,
    __reflect(e.prototype, "petManualInfo.InfoViewNew")
} (petManualInfo || (petManualInfo = {}));
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
petManualInfo; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i._arraryCollection = new eui.ArrayCollection,
            i.skinName = t.SkillViewNewSkin,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this)
        },
        i.prototype._createCustomComponent = function() {
            this._listSkill.itemRenderer = t.RecommendSkillItem,
            this._listSkill.dataProvider = this._arraryCollection
        },
        i.prototype.addEvents = function() {
            var t = this;
            this._listSkill.addEventListener(eui.ItemTapEvent.ITEM_TAP, this._onShowSkillTipsPop, this),
            this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this),
            ImageButtonUtil.add(this.btnAllSkill,
            function() {
                ModuleManager.showModule("petManualInfo", [], {
                    data: t._customData,
                    num: 0
                },
                "PetinfoPanel", AppDoStyle.HIDEN)
            },
            this)
        },
        i.prototype.removeEvents = function() {
            this._listSkill.removeEventListener(eui.ItemTapEvent.ITEM_TAP, this._onShowSkillTipsPop, this),
            this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this),
            ImageButtonUtil.removeAll(this)
        },
        i.prototype._onShowSkillTipsPop = function(t) {
            if (t.item) {
                var e = {
                    id: t.item.id,
                    petInfo: null
                },
                i = {};
                i.dir = "right-top",
                i.rx = -10,
                i.ry = 10,
                i.srcWorldPos = this.parent.parent.parent.localToGlobal(),
                tipsPop.TipsPop.openSkillPop(e, i)
            }
        },
        i.prototype._updateView = function() {
            var t = this._customData.id,
            e = PetXMLInfo.getSkillListForLv(t, 1e4),
            i = SkillXMLInfo.getHideSkillId(t);
            i > 0 && (e = e.concat([i]));
            for (var n = PetXMLInfo.getRecSkillList(t), r = n.map(function(t) {
                return t.ID
            }), a = [], o = 0, s = n; o < s.length; o++) {
                var _ = s[o];
                void 0 != _.Tag && a.push(_.Tag)
            }
            var u, l = PetXMLInfo.getExtraSkill(t);
            l && (u = l.ID);
            var h = [];
            if (r.length <= 0) if (e.length < 5) for (var p = 0; p < e.length; p++) h.push({
                id: e[p],
                tag: 0
            });
            else for (var p = 0; 5 > p; p++) h.push({
                id: e[e.length - 1 - (4 - p)],
                tag: 0
            });
            else for (var p = 0; p < e.length; p++) r.indexOf(e[p]) > -1 ? a.length > 0 ? h.push({
                id: e[p],
                tag: 2 + a[r.indexOf(e[p])]
            }) : h.push({
                id: e[p],
                tag: 2
            }) : e[p] == u && h.push({
                id: e[p],
                tag: 1
            });
            this._arraryCollection.replaceAll(h)
        },
        i
    } (t.BaseView);
    t.SkillViewNew = e,
    __reflect(e.prototype, "petManualInfo.SkillViewNew")
} (petManualInfo || (petManualInfo = {})),
window.petManualInfo = window.petManualInfo || {},
window.PetInfoManual = window.PetInfoManual || {};
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
generateEUI.paths["resource/eui_skins/view/New/InfoViewNewSkin.exml"] = window.petManualInfo.InfoViewNewSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["txt_petId", "pb_atk", "pb_satk", "pb_speed", "pb_def", "pb_sdef", "pb_hp", "txt_atk_value", "tx_def_value", "txt_satk_value", "txt_sdef_value", "txt_speed_value", "txt_hp_value", "txt_name", "txt_attr", "txt_zhongzu", "petHead", "Info", "btnDevelop", "btnInfo", "attr_icon", "noAtr", "grpType"],
        this.height = 44,
        this.width = 200,
        this.elementsContent = [this._Group2_i()]
    }
    __extends(e, t);
    var i = function(t) {
        function e() {
            t.call(this),
            this.skinParts = ["thumb"],
            this.elementsContent = [this._Image1_i(), this.thumb_i()],
            this.states = [new eui.State("up", []), new eui.State("down", []), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return t.source = "ppim_info_barbg_png",
            t.x = 1,
            t.y = 1,
            t
        },
        i.thumb_i = function() {
            var t = new eui.Image;
            return this.thumb = t,
            t.source = "ppim_info_thumb_png",
            t.visible = !0,
            t.x = 0,
            t.y = 0,
            t
        },
        e
    } (eui.Skin),
    n = function(t) {
        function e() {
            t.call(this),
            this.skinParts = ["thumb"],
            this.elementsContent = [this._Image1_i(), this.thumb_i()],
            this.states = [new eui.State("up", []), new eui.State("down", []), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return t.source = "ppim_info_barbg_png",
            t.x = 1,
            t.y = 1,
            t
        },
        i.thumb_i = function() {
            var t = new eui.Image;
            return this.thumb = t,
            t.source = "ppim_info_thumb_png",
            t.visible = !0,
            t.x = 0,
            t.y = 0,
            t
        },
        e
    } (eui.Skin),
    r = function(t) {
        function e() {
            t.call(this),
            this.skinParts = ["thumb"],
            this.elementsContent = [this._Image1_i(), this.thumb_i()],
            this.states = [new eui.State("up", []), new eui.State("down", []), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return t.source = "ppim_info_barbg_png",
            t.x = 1,
            t.y = 1,
            t
        },
        i.thumb_i = function() {
            var t = new eui.Image;
            return this.thumb = t,
            t.source = "ppim_info_thumb_png",
            t.visible = !0,
            t.x = 0,
            t.y = 0,
            t
        },
        e
    } (eui.Skin),
    a = function(t) {
        function e() {
            t.call(this),
            this.skinParts = ["thumb"],
            this.elementsContent = [this._Image1_i(), this.thumb_i()],
            this.states = [new eui.State("up", []), new eui.State("down", []), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return t.source = "ppim_info_barbg_png",
            t.x = 1,
            t.y = 1,
            t
        },
        i.thumb_i = function() {
            var t = new eui.Image;
            return this.thumb = t,
            t.source = "ppim_info_thumb_png",
            t.visible = !0,
            t.x = 0,
            t.y = 0,
            t
        },
        e
    } (eui.Skin),
    o = function(t) {
        function e() {
            t.call(this),
            this.skinParts = ["thumb"],
            this.elementsContent = [this._Image1_i(), this.thumb_i()],
            this.states = [new eui.State("up", []), new eui.State("down", []), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return t.source = "ppim_info_barbg_png",
            t.x = 1,
            t.y = 1,
            t
        },
        i.thumb_i = function() {
            var t = new eui.Image;
            return this.thumb = t,
            t.source = "ppim_info_thumb_png",
            t.visible = !0,
            t.x = 0,
            t.y = 0,
            t
        },
        e
    } (eui.Skin),
    s = function(t) {
        function e() {
            t.call(this),
            this.skinParts = ["thumb"],
            this.elementsContent = [this._Image1_i(), this.thumb_i()],
            this.states = [new eui.State("up", []), new eui.State("down", []), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return t.source = "ppim_info_barbg_png",
            t.x = 1,
            t.y = 1,
            t
        },
        i.thumb_i = function() {
            var t = new eui.Image;
            return this.thumb = t,
            t.source = "ppim_info_thumb_png",
            t.visible = !0,
            t.x = 0,
            t.y = 0,
            t
        },
        e
    } (eui.Skin),
    _ = e.prototype;
    return _._Group2_i = function() {
        var t = new eui.Group;
        return t.visible = !0,
        t.x = 0,
        t.y = 1,
        t.elementsContent = [this._Image1_i(), this._Image2_i(), this._Label1_i(), this.txt_petId_i(), this.Info_i(), this.btnDevelop_i(), this.btnInfo_i(), this.attr_icon_i(), this.noAtr_i(), this.grpType_i()],
        t
    },
    _._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "ppim_info_di_2_png",
        t.visible = !0,
        t.x = 1,
        t.y = 129,
        t
    },
    _._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "ppim_info_di_1_png",
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t
    },
    _._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "NO：",
        t.textColor = 16777215,
        t.visible = !0,
        t.x = 12,
        t.y = 15,
        t
    },
    _.txt_petId_i = function() {
        var t = new eui.Label;
        return this.txt_petId = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "9999",
        t.textColor = 16777215,
        t.visible = !0,
        t.x = 55,
        t.y = 15,
        t
    },
    _.Info_i = function() {
        var t = new eui.Group;
        return this.Info = t,
        t.visible = !0,
        t.x = 4,
        t.y = 48,
        t.elementsContent = [this.pb_atk_i(), this.pb_satk_i(), this.pb_speed_i(), this.pb_def_i(), this.pb_sdef_i(), this.pb_hp_i(), this._Group1_i()],
        t
    },
    _.pb_atk_i = function() {
        var t = new eui.ProgressBar;
        return this.pb_atk = t,
        t.visible = !0,
        t.x = 145,
        t.y = 135,
        t.skinName = i,
        t
    },
    _.pb_satk_i = function() {
        var t = new eui.ProgressBar;
        return this.pb_satk = t,
        t.visible = !0,
        t.x = 145,
        t.y = 170,
        t.skinName = n,
        t
    },
    _.pb_speed_i = function() {
        var t = new eui.ProgressBar;
        return this.pb_speed = t,
        t.visible = !0,
        t.x = 145,
        t.y = 205,
        t.skinName = r,
        t
    },
    _.pb_def_i = function() {
        var t = new eui.ProgressBar;
        return this.pb_def = t,
        t.visible = !0,
        t.x = 145,
        t.y = 240,
        t.skinName = a,
        t
    },
    _.pb_sdef_i = function() {
        var t = new eui.ProgressBar;
        return this.pb_sdef = t,
        t.visible = !0,
        t.x = 145,
        t.y = 276,
        t.skinName = o,
        t
    },
    _.pb_hp_i = function() {
        var t = new eui.ProgressBar;
        return this.pb_hp = t,
        t.visible = !0,
        t.x = 145,
        t.y = 311,
        t.skinName = s,
        t
    },
    _._Group1_i = function() {
        var t = new eui.Group;
        return t.cacheAsBitmap = !0,
        t.height = 366,
        t.width = 260,
        t.x = 8,
        t.y = 3,
        t.elementsContent = [this._Label2_i(), this._Label3_i(), this._Label4_i(), this._Label5_i(), this._Label6_i(), this._Label7_i(), this.txt_atk_value_i(), this.tx_def_value_i(), this.txt_satk_value_i(), this.txt_sdef_value_i(), this.txt_speed_value_i(), this.txt_hp_value_i(), this._Image3_i(), this._Image4_i(), this._Image5_i(), this._Image6_i(), this._Image7_i(), this._Image8_i(), this.txt_name_i(), this.txt_attr_i(), this._Label8_i(), this.txt_zhongzu_i(), this.petHead_i()],
        t
    },
    _._Label2_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "攻击：",
        t.textColor = 11520511,
        t.x = 44,
        t.y = 130,
        t
    },
    _._Label3_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "防御：",
        t.textColor = 11520511,
        t.x = 44,
        t.y = 235,
        t
    },
    _._Label4_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "特攻：",
        t.textColor = 11520511,
        t.x = 44,
        t.y = 165,
        t
    },
    _._Label5_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "特防：",
        t.textColor = 11520511,
        t.x = 44,
        t.y = 270,
        t
    },
    _._Label6_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "速度：",
        t.textColor = 11520511,
        t.x = 44,
        t.y = 200,
        t
    },
    _._Label7_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "体力：",
        t.textColor = 11520511,
        t.x = 44,
        t.y = 306,
        t
    },
    _.txt_atk_value_i = function() {
        var t = new eui.Label;
        return this.txt_atk_value = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "9999",
        t.textColor = 11520511,
        t.x = 92,
        t.y = 130,
        t
    },
    _.tx_def_value_i = function() {
        var t = new eui.Label;
        return this.tx_def_value = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "9999",
        t.textColor = 11520511,
        t.x = 92,
        t.y = 235,
        t
    },
    _.txt_satk_value_i = function() {
        var t = new eui.Label;
        return this.txt_satk_value = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "9999",
        t.textColor = 11520511,
        t.x = 92,
        t.y = 165,
        t
    },
    _.txt_sdef_value_i = function() {
        var t = new eui.Label;
        return this.txt_sdef_value = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "9999",
        t.textColor = 11520511,
        t.x = 92,
        t.y = 270,
        t
    },
    _.txt_speed_value_i = function() {
        var t = new eui.Label;
        return this.txt_speed_value = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "9999",
        t.textColor = 11520511,
        t.x = 92,
        t.y = 200,
        t
    },
    _.txt_hp_value_i = function() {
        var t = new eui.Label;
        return this.txt_hp_value = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "9999",
        t.textColor = 11520511,
        t.x = 92,
        t.y = 306,
        t
    },
    _._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "common_atk_png",
        t.x = 7,
        t.y = 127,
        t
    },
    _._Image4_i = function() {
        var t = new eui.Image;
        return t.source = "common_satk_png",
        t.x = 7,
        t.y = 162,
        t
    },
    _._Image5_i = function() {
        var t = new eui.Image;
        return t.source = "common_speed_png",
        t.x = 8,
        t.y = 196,
        t
    },
    _._Image6_i = function() {
        var t = new eui.Image;
        return t.source = "common_def_png",
        t.x = 9,
        t.y = 233,
        t
    },
    _._Image7_i = function() {
        var t = new eui.Image;
        return t.source = "common_sdef_png",
        t.x = 9,
        t.y = 268,
        t
    },
    _._Image8_i = function() {
        var t = new eui.Image;
        return t.source = "common_hp_png",
        t.x = 9,
        t.y = 304,
        t
    },
    _.txt_name_i = function() {
        var t = new eui.Label;
        return this.txt_name = t,
        t.fontFamily = "MFShangHei",
        t.size = 20,
        t.text = "精灵名精灵名精灵名",
        t.textColor = 16770655,
        t.x = 80,
        t.y = 1,
        t
    },
    _.txt_attr_i = function() {
        var t = new eui.Label;
        return this.txt_attr = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "远古 火",
        t.textColor = 4173823,
        t.visible = !0,
        t.width = 100,
        t.x = 102,
        t.y = 35,
        t
    },
    _._Label8_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "专属特性",
        t.textColor = 16777215,
        t.x = 1,
        t.y = 348,
        t
    },
    _.txt_zhongzu_i = function() {
        var t = new eui.Label;
        return this.txt_zhongzu = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "种族值：9999",
        t.textColor = 16777215,
        t.x = 0,
        t.y = 87,
        t
    },
    _.petHead_i = function() {
        var t = new eui.Image;
        return this.petHead = t,
        t.height = 60,
        t.visible = !0,
        t.width = 60,
        t.x = 1,
        t.y = 0,
        t
    },
    _.btnDevelop_i = function() {
        var t = new eui.Group;
        return this.btnDevelop = t,
        t.cacheAsBitmap = !0,
        t.x = 162,
        t.y = 137,
        t.elementsContent = [this._Label9_i(), this._Image9_i()],
        t
    },
    _._Label9_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "查看养成攻略",
        t.textColor = 4173823,
        t.x = 0,
        t.y = 0,
        t
    },
    _._Image9_i = function() {
        var t = new eui.Image;
        return t.source = "ppim_info_imgalarm_png",
        t.x = 99,
        t.y = 1,
        t
    },
    _.btnInfo_i = function() {
        var t = new eui.Group;
        return this.btnInfo = t,
        t.cacheAsBitmap = !0,
        t.visible = !0,
        t.x = 162,
        t.y = 399,
        t.elementsContent = [this._Label10_i(), this._Image10_i()],
        t
    },
    _._Label10_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "查看详情",
        t.textColor = 4173823,
        t.x = 30,
        t.y = 1,
        t
    },
    _._Image10_i = function() {
        var t = new eui.Image;
        return t.source = "ppim_info_imgalarm_kb_png",
        t.x = 99,
        t.y = 1,
        t
    },
    _.attr_icon_i = function() {
        var t = new eui.Image;
        return this.attr_icon = t,
        t.height = 20,
        t.source = "ppim_info_attr_icon_png",
        t.width = 20,
        t.x = 88,
        t.y = 85,
        t
    },
    _.noAtr_i = function() {
        var t = new eui.Label;
        return this.noAtr = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "此精灵无专属特性",
        t.x = 69,
        t.y = 441,
        t
    },
    _.grpType_i = function() {
        var t = new eui.Group;
        return this.grpType = t,
        t.width = 260,
        t.x = 15,
        t.y = 441,
        t.layout = this._HorizontalLayout1_i(),
        t.elementsContent = [this._Image11_i(), this._Image12_i(), this._Image13_i()],
        t
    },
    _._HorizontalLayout1_i = function() {
        var t = new eui.HorizontalLayout;
        return t.gap = 10,
        t.horizontalAlign = "center",
        t.verticalAlign = "middle",
        t
    },
    _._Image11_i = function() {
        var t = new eui.Image;
        return t.x = 56,
        t.y = 0,
        t
    },
    _._Image12_i = function() {
        var t = new eui.Image;
        return t.x = 0,
        t.y = 1,
        t
    },
    _._Image13_i = function() {
        var t = new eui.Image;
        return t.visible = !0,
        t.x = 113,
        t.y = 0,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/view/New/SkillViewNewSkin.exml"] = window.petManualInfo.SkillViewNewSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["btnAllSkill", "title_skill", "_listSkill", "right"],
        this.height = 489,
        this.width = 299,
        this.elementsContent = [this.right_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.right_i = function() {
        var t = new eui.Group;
        return this.right = t,
        t.visible = !0,
        t.y = 0,
        t.elementsContent = [this._Image1_i(), this._Image2_i(), this.title_skill_i(), this._listSkill_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "ppim_info_liebiaobg_png",
        t.visible = !0,
        t.x = 3,
        t.y = 0,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "ppim_info_skillbg_png",
        t.x = 0,
        t.y = 2,
        t
    },
    i.title_skill_i = function() {
        var t = new eui.Group;
        return this.title_skill = t,
        t.visible = !0,
        t.x = 8,
        t.y = 4,
        t.elementsContent = [this._Image3_i(), this._Label1_i(), this.btnAllSkill_i()],
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "ppim_info_biaoti_png",
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 20,
        t.text = "推荐技能",
        t.textColor = 16777215,
        t.visible = !0,
        t.x = 26,
        t.y = 9,
        t
    },
    i.btnAllSkill_i = function() {
        var t = new eui.Group;
        return this.btnAllSkill = t,
        t.cacheAsBitmap = !0,
        t.visible = !0,
        t.x = 200,
        t.y = 1,
        t.elementsContent = [this._Label2_i(), this._Image4_i()],
        t
    },
    i._Label2_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "全部技能",
        t.textColor = 16777215,
        t.x = 0,
        t.y = 9,
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.source = "ppim_info_btndown_png",
        t.x = 56,
        t.y = 0,
        t
    },
    i._listSkill_i = function() {
        var t = new eui.List;
        return this._listSkill = t,
        t.height = 438,
        t.width = 282,
        t.x = 8,
        t.y = 40,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/InfoSkin.exml"] = window.PetInfoManual.InfoSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["petModel", "txt_desc", "comp", "viewStack_left", "btnSkin", "btnSave1", "btnAdvance", "rightInfo", "skillview", "viewStack_right", "imgBtn_get", "imgBtn_show", "btnAddPet", "petInfo", "groupBtnClose"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this._Image1_i(), this.petModel_i(), this.petInfo_i(), this.groupBtnClose_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.percentHeight = 100,
        t.scale9Grid = new egret.Rectangle(941, 0, 195, 640),
        t.source = "pet_info_manual_bg_jpg",
        t.visible = !0,
        t.percentWidth = 100,
        t.x = 0,
        t.y = 0,
        t
    },
    i.petModel_i = function() {
        var t = new core.component.pet.PetModel;
        return this.petModel = t,
        t.height = 640,
        t.horizontalCenter = -16,
        t.scaleX = 1,
        t.scaleY = 1,
        t.visible = !0,
        t.width = 760,
        t
    },
    i.petInfo_i = function() {
        var t = new eui.Group;
        return this.petInfo = t,
        t.horizontalCenter = 2.5,
        t.left = 31,
        t.right = 26,
        t.visible = !0,
        t.y = 69,
        t.elementsContent = [this.txt_desc_i(), this.rightInfo_i(), this.viewStack_right_i(), this.imgBtn_get_i(), this.imgBtn_show_i(), this.btnAddPet_i()],
        t
    },
    i.txt_desc_i = function() {
        var t = new eui.Label;
        return this.txt_desc = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = -6.5,
        t.size = 16,
        t.text = "漫长宇宙航行中收获的珍贵收藏品，记录着我们一路航行来的记忆。珍贵收藏品，记录着我们一路航行来的记忆。珍贵收藏品，记录着我们一路航行来的记忆。",
        t.textColor = 11520511,
        t.verticalCenter = 229.5,
        t.visible = !0,
        t.width = 464,
        t
    },
    i.rightInfo_i = function() {
        var t = new eui.Group;
        return this.rightInfo = t,
        t.visible = !0,
        t.x = 6,
        t.y = -10,
        t.elementsContent = [this.viewStack_left_i(), this.btnSkin_i(), this.btnSave1_i(), this.btnAdvance_i()],
        t
    },
    i.viewStack_left_i = function() {
        var t = new eui.ViewStack;
        return this.viewStack_left = t,
        t.height = 478,
        t.visible = !0,
        t.width = 287,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Group1_i()],
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.percentHeight = 100,
        t.name = "info",
        t.visible = !0,
        t.percentWidth = 100,
        t.x = -6,
        t.y = 12,
        t.elementsContent = [this.comp_i()],
        t
    },
    i.comp_i = function() {
        var t = new petManualInfo.InfoViewNew;
        return this.comp = t,
        t.skinName = "petManualInfo.InfoViewNewSkin",
        t.visible = !0,
        t
    },
    i.btnSkin_i = function() {
        var t = new eui.Image;
        return this.btnSkin = t,
        t.source = "ppim_info_btnsave0_png",
        t.x = 8,
        t.y = 500,
        t
    },
    i.btnSave1_i = function() {
        var t = new eui.Image;
        return this.btnSave1 = t,
        t.source = "ppim_info_btnsave1_png",
        t.visible = !0,
        t.x = 96.534,
        t.y = 500,
        t
    },
    i.btnAdvance_i = function() {
        var t = new eui.Image;
        return this.btnAdvance = t,
        t.source = "btnAdvpet_png",
        t.visible = !0,
        t.x = 186,
        t.y = 500,
        t
    },
    i.viewStack_right_i = function() {
        var t = new eui.ViewStack;
        return this.viewStack_right = t,
        t.height = 489,
        t.right = 0,
        t.visible = !0,
        t.width = 299,
        t.y = -10,
        t.elementsContent = [this._Group2_i()],
        t
    },
    i._Group2_i = function() {
        var t = new eui.Group;
        return t.percentHeight = 100,
        t.name = "info",
        t.right = 6,
        t.percentWidth = 100,
        t.y = 12,
        t.elementsContent = [this.skillview_i()],
        t
    },
    i.skillview_i = function() {
        var t = new petManualInfo.SkillViewNew;
        return this.skillview = t,
        t.skinName = "petManualInfo.SkillViewNewSkin",
        t.visible = !0,
        t.x = 0,
        t
    },
    i.imgBtn_get_i = function() {
        var t = new eui.Image;
        return this.imgBtn_get = t,
        t.right = 84,
        t.source = "ppim_info_imgbtn_get_png",
        t.y = 505,
        t
    },
    i.imgBtn_show_i = function() {
        var t = new eui.Image;
        return this.imgBtn_show = t,
        t.horizontalCenter = -194,
        t.source = "ppim_info_imgbtn_show_png",
        t.y = 386,
        t
    },
    i.btnAddPet_i = function() {
        var t = new eui.Image;
        return this.btnAddPet = t,
        t.source = "ppim_info_imgbtn_show_png",
        t.visible = !1,
        t.x = 716,
        t.y = 250,
        t
    },
    i.groupBtnClose_i = function() {
        var t = new eui.Group;
        return this.groupBtnClose = t,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/item/InfoViewItemSkin.exml"] = window.InfoViewItemSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["icon_0", "txt_0", "grp_0", "icon_1", "txt_1", "grp_1"],
        this.height = 132,
        this.width = 50,
        this.elementsContent = [this.grp_0_i(), this.grp_1_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.grp_0_i = function() {
        var t = new eui.Group;
        return this.grp_0 = t,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image1_i(), this.icon_0_i(), this._Image2_i(), this.txt_0_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "info_view_item_icon_bg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.icon_0_i = function() {
        var t = new eui.Image;
        return this.icon_0 = t,
        t.height = 30,
        t.width = 30,
        t.x = 10,
        t.y = 8,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 16,
        t.source = "info_view_item_img_back_png",
        t.x = 0,
        t.y = 45,
        t
    },
    i.txt_0_i = function() {
        var t = new eui.Label;
        return this.txt_0 = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = 0,
        t.lineSpacing = 3,
        t.size = 14,
        t.text = "0000",
        t.textColor = 16777215,
        t.touchEnabled = !1,
        t.y = 46,
        t
    },
    i.grp_1_i = function() {
        var t = new eui.Group;
        return this.grp_1 = t,
        t.x = 0,
        t.y = 72,
        t.elementsContent = [this._Image3_i(), this.icon_1_i(), this._Image4_i(), this.txt_1_i()],
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "info_view_item_icon_bg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.icon_1_i = function() {
        var t = new eui.Image;
        return this.icon_1 = t,
        t.height = 30,
        t.width = 30,
        t.x = 10,
        t.y = 9,
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.height = 16,
        t.source = "info_view_item_img_back_png",
        t.x = 0,
        t.y = 44,
        t
    },
    i.txt_1_i = function() {
        var t = new eui.Label;
        return this.txt_1 = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = 0,
        t.lineSpacing = 3,
        t.size = 14,
        t.text = "0000",
        t.textColor = 16777215,
        t.touchEnabled = !1,
        t.y = 45,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/item/ItemSkinRenderSkin.exml"] = window.petManualInfo.ItemSkinRenderSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "icon_skin", "petPosition", "name_bg", "lab_name", "img_ys", "select_img", "_rect", "grp_item"],
        this.height = 287,
        this.width = 199,
        this.elementsContent = [this.grp_item_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.grp_item_i = function() {
        var t = new eui.Group;
        return this.grp_item = t,
        t.anchorOffsetX = 100,
        t.anchorOffsetY = 145,
        t.scaleX = 1.2,
        t.scaleY = 1.2,
        t.x = 120,
        t.y = 175,
        t.elementsContent = [this.bg_i(), this.icon_skin_i(), this.petPosition_i(), this.name_bg_i(), this.lab_name_i(), this.img_ys_i(), this.select_img_i(), this._rect_i()],
        t
    },
    i.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.height = 228,
        t.source = "pet_manual_ski_render_bg_png",
        t.visible = !0,
        t.width = 155,
        t.x = 6,
        t.y = 7,
        t
    },
    i.icon_skin_i = function() {
        var t = new eui.Image;
        return this.icon_skin = t,
        t.height = 221,
        t.visible = !0,
        t.width = 147,
        t.x = 10,
        t.y = 11,
        t
    },
    i.petPosition_i = function() {
        var t = new eui.Group;
        return this.petPosition = t,
        t.x = 83,
        t.y = 200,
        t
    },
    i.name_bg_i = function() {
        var t = new eui.Image;
        return this.name_bg = t,
        t.height = 32,
        t.source = "pet_manual_skin_render_name_bg_png",
        t.width = 147,
        t.x = 10,
        t.y = 200,
        t
    },
    i.lab_name_i = function() {
        var t = new eui.Label;
        return this.lab_name = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "精灵皮肤",
        t.textAlign = "center",
        t.textColor = 9025023,
        t.width = 147,
        t.x = 10,
        t.y = 207,
        t
    },
    i.img_ys_i = function() {
        var t = new eui.Image;
        return this.img_ys = t,
        t.scaleX = .6,
        t.scaleY = .6,
        t.source = "common_pet_skin_icon_0_png",
        t.visible = !0,
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
    i._rect_i = function() {
        var t = new eui.Rect;
        return this._rect = t,
        t.alpha = .6,
        t.height = 228,
        t.width = 155,
        t.x = 6,
        t.y = 7,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/item/SkillItemNew.exml"] = window.petManualInfo.SkillItemNew = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["tag", "icon_attr", "txt_name", "txt_hurti_value", "txt_pp_value", "skill"],
        this.height = 89,
        this.width = 282,
        this.elementsContent = [this.skill_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.skill_i = function() {
        var t = new eui.Group;
        return this.skill = t,
        t.visible = !0,
        t.elementsContent = [this._Image1_i(), this.tag_i(), this._Image2_i(), this.icon_attr_i(), this.txt_name_i(), this._Label1_i(), this.txt_hurti_value_i(), this._Label2_i(), this.txt_pp_value_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "ppim_info_skill_item_bg1_png",
        t.visible = !0,
        t.x = 6,
        t.y = 7,
        t
    },
    i.tag_i = function() {
        var t = new eui.Image;
        return this.tag = t,
        t.visible = !0,
        t.x = 235,
        t.y = 10,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "ppim_info_skill_item_bg_png",
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t
    },
    i.icon_attr_i = function() {
        var t = new eui.Image;
        return this.icon_attr = t,
        t.height = 35,
        t.source = "ppim_info_icon_attr_png",
        t.width = 35,
        t.x = 14,
        t.y = 26,
        t
    },
    i.txt_name_i = function() {
        var t = new eui.Label;
        return this.txt_name = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "技能名称七个字",
        t.textColor = 16777215,
        t.x = 68,
        t.y = 26,
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "威力：",
        t.textColor = 11133439,
        t.x = 70,
        t.y = 57,
        t
    },
    i.txt_hurti_value_i = function() {
        var t = new eui.Label;
        return this.txt_hurti_value = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "200",
        t.textColor = 11133439,
        t.x = 115,
        t.y = 57,
        t
    },
    i._Label2_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "PP：",
        t.textColor = 11133439,
        t.x = 155,
        t.y = 57,
        t
    },
    i.txt_pp_value_i = function() {
        var t = new eui.Label;
        return this.txt_pp_value = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "20",
        t.textColor = 11133439,
        t.x = 190,
        t.y = 57,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/item/skillItemSkin.exml"] = window.petManualInfo.skillItemSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["icon_attr", "txt_name", "txt_pp_value", "txt_hurti_value", "tag"],
        this.height = 80,
        this.width = 182,
        this.elementsContent = [this._Image1_i(), this.icon_attr_i(), this.txt_name_i(), this.txt_pp_value_i(), this.txt_hurti_value_i(), this._Label1_i(), this._Label2_i(), this.tag_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "pet_info_manual_skill_item_bg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.icon_attr_i = function() {
        var t = new eui.Image;
        return this.icon_attr = t,
        t.height = 27,
        t.source = "pet_info_manual_skill_icon_attr_png",
        t.width = 27,
        t.x = 4,
        t.y = 13,
        t
    },
    i.txt_name_i = function() {
        var t = new eui.Label;
        return this.txt_name = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = 4,
        t.size = 18,
        t.text = "技能名字几个字",
        t.textColor = 15068927,
        t.y = 18,
        t
    },
    i.txt_pp_value_i = function() {
        var t = new eui.Label;
        return this.txt_pp_value = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "20/20",
        t.textAlign = "left",
        t.textColor = 6027519,
        t.x = 126,
        t.y = 49,
        t
    },
    i.txt_hurti_value_i = function() {
        var t = new eui.Label;
        return this.txt_hurti_value = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "100",
        t.textAlign = "left",
        t.textColor = 6027519,
        t.x = 54,
        t.y = 49,
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "PP:",
        t.textColor = 6027519,
        t.x = 95,
        t.y = 49,
        t
    },
    i._Label2_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "威力:",
        t.textColor = 6027519,
        t.x = 10,
        t.y = 49,
        t
    },
    i.tag_i = function() {
        var t = new eui.Image;
        return this.tag = t,
        t.height = 17,
        t.source = "",
        t.width = 40,
        t.x = 142,
        t.y = 0,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/view/InfoViewSkin.exml"] = window.petManualInfo.InfoViewSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["txt_evolution", "txt_petId", "txt_desc", "txt_atk", "txt_atk_value", "txt_satk_value", "txt_speed_value", "tx_def_value", "txt_sdef_value", "txt_hp_value", "txt_speed", "txt_def", "txt_satk", "txt_hp", "txt_sdef", "pb_atk", "pb_def", "pb_satk", "pb_sdef", "pb_speed", "pb_hp", "txt_attr", "attr_icon", "imgBtn_restrain", "_list", "_scrl", "grp_scrl", "txt_none", "imgBtn_get"],
        this.height = 542,
        this.width = 406,
        this.elementsContent = [this._Group5_i()]
    }
    __extends(e, t);
    var i = function(t) {
        function e() {
            t.call(this),
            this.skinParts = ["thumb"],
            this.elementsContent = [this._Image1_i(), this.thumb_i()],
            this.states = [new eui.State("up", []), new eui.State("down", []), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return t.height = 10,
            t.source = "pet_manual_info_view_img_barbg_png",
            t.width = 126,
            t.x = 1,
            t.y = 1,
            t
        },
        i.thumb_i = function() {
            var t = new eui.Image;
            return this.thumb = t,
            t.height = 12,
            t.source = "pet_manual_info_view_img_bar_png",
            t.width = 127,
            t.x = 0,
            t.y = 0,
            t
        },
        e
    } (eui.Skin),
    n = function(t) {
        function e() {
            t.call(this),
            this.skinParts = ["thumb"],
            this.elementsContent = [this._Image1_i(), this.thumb_i()],
            this.states = [new eui.State("up", []), new eui.State("down", []), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return t.height = 10,
            t.source = "pet_manual_info_view_img_barbg_png",
            t.width = 126,
            t.x = 1,
            t.y = 1,
            t
        },
        i.thumb_i = function() {
            var t = new eui.Image;
            return this.thumb = t,
            t.height = 12,
            t.source = "pet_manual_info_view_img_bar_png",
            t.width = 127,
            t.x = 0,
            t.y = 0,
            t
        },
        e
    } (eui.Skin),
    r = function(t) {
        function e() {
            t.call(this),
            this.skinParts = ["thumb"],
            this.elementsContent = [this._Image1_i(), this.thumb_i()],
            this.states = [new eui.State("up", []), new eui.State("down", []), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return t.height = 10,
            t.source = "pet_manual_info_view_img_barbg_png",
            t.width = 126,
            t.x = 1,
            t.y = 1,
            t
        },
        i.thumb_i = function() {
            var t = new eui.Image;
            return this.thumb = t,
            t.height = 12,
            t.source = "pet_manual_info_view_img_bar_png",
            t.width = 127,
            t.x = 0,
            t.y = 0,
            t
        },
        e
    } (eui.Skin),
    a = function(t) {
        function e() {
            t.call(this),
            this.skinParts = ["thumb"],
            this.elementsContent = [this._Image1_i(), this.thumb_i()],
            this.states = [new eui.State("up", []), new eui.State("down", []), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return t.height = 10,
            t.source = "pet_manual_info_view_img_barbg_png",
            t.width = 126,
            t.x = 1,
            t.y = 1,
            t
        },
        i.thumb_i = function() {
            var t = new eui.Image;
            return this.thumb = t,
            t.height = 12,
            t.source = "pet_manual_info_view_img_bar_png",
            t.width = 127,
            t.x = 0,
            t.y = 0,
            t
        },
        e
    } (eui.Skin),
    o = function(t) {
        function e() {
            t.call(this),
            this.skinParts = ["thumb"],
            this.elementsContent = [this._Image1_i(), this.thumb_i()],
            this.states = [new eui.State("up", []), new eui.State("down", []), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return t.height = 10,
            t.source = "pet_manual_info_view_img_barbg_png",
            t.width = 126,
            t.x = 1,
            t.y = 1,
            t
        },
        i.thumb_i = function() {
            var t = new eui.Image;
            return this.thumb = t,
            t.height = 12,
            t.source = "pet_manual_info_view_img_bar_png",
            t.width = 127,
            t.x = 0,
            t.y = 0,
            t
        },
        e
    } (eui.Skin),
    s = function(t) {
        function e() {
            t.call(this),
            this.skinParts = ["thumb"],
            this.elementsContent = [this._Image1_i(), this.thumb_i()],
            this.states = [new eui.State("up", []), new eui.State("down", []), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return t.height = 10,
            t.source = "pet_manual_info_view_img_barbg_png",
            t.width = 126,
            t.x = 1,
            t.y = 1,
            t
        },
        i.thumb_i = function() {
            var t = new eui.Image;
            return this.thumb = t,
            t.height = 12,
            t.source = "pet_manual_info_view_img_bar_png",
            t.width = 127,
            t.x = 0,
            t.y = 0,
            t
        },
        e
    } (eui.Skin),
    _ = e.prototype;
    return _._Group5_i = function() {
        var t = new eui.Group;
        return t.visible = !0,
        t.elementsContent = [this._Group2_i(), this._Group3_i(), this._Group4_i(), this._Image4_i(), this.imgBtn_get_i()],
        t
    },
    _._Group2_i = function() {
        var t = new eui.Group;
        return t.x = 1,
        t.y = 0,
        t.elementsContent = [this._Image1_i(), this.txt_evolution_i(), this._Label1_i(), this.txt_petId_i(), this._Scroller1_i()],
        t
    },
    _._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 34,
        t.source = "pet_info_manual_title_1_png",
        t.width = 405,
        t.x = 0,
        t.y = 0,
        t
    },
    _.txt_evolution_i = function() {
        var t = new eui.Label;
        return this.txt_evolution = t,
        t.fontFamily = "MFShangHei",
        t.right = 10,
        t.size = 18,
        t.text = "进化等级：99",
        t.textColor = 16777215,
        t.y = 6,
        t
    },
    _._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "精灵序号：",
        t.textColor = 16777215,
        t.x = 17,
        t.y = 6,
        t
    },
    _.txt_petId_i = function() {
        var t = new eui.Label;
        return this.txt_petId = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "2048",
        t.textColor = 16711423,
        t.x = 102,
        t.y = 6,
        t
    },
    _._Scroller1_i = function() {
        var t = new eui.Scroller;
        return t.height = 79,
        t.width = 352,
        t.x = 19,
        t.y = 38,
        t.viewport = this._Group1_i(),
        t
    },
    _._Group1_i = function() {
        var t = new eui.Group;
        return t.elementsContent = [this.txt_desc_i()],
        t
    },
    _.txt_desc_i = function() {
        var t = new eui.Label;
        return this.txt_desc = t,
        t.fontFamily = "MFShangHei",
        t.lineSpacing = 5,
        t.size = 16,
        t.text = "精灵说明精灵说明精灵说明精灵说明精灵说明精灵说明精灵说明精灵说明精灵说明精灵说明精灵说明精灵说明精灵说明",
        t.textColor = 11520511,
        t.width = 352,
        t.x = 0,
        t.y = 0,
        t
    },
    _._Group3_i = function() {
        var t = new eui.Group;
        return t.x = 0,
        t.y = 129,
        t.elementsContent = [this._Image2_i(), this._Label2_i(), this.txt_atk_i(), this.txt_atk_value_i(), this.txt_satk_value_i(), this.txt_speed_value_i(), this.tx_def_value_i(), this.txt_sdef_value_i(), this.txt_hp_value_i(), this.txt_speed_i(), this.txt_def_i(), this.txt_satk_i(), this.txt_hp_i(), this.txt_sdef_i(), this.pb_atk_i(), this.pb_def_i(), this.pb_satk_i(), this.pb_sdef_i(), this.pb_speed_i(), this.pb_hp_i()],
        t
    },
    _._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 35,
        t.source = "pet_info_manual_title_1_png",
        t.width = 406,
        t.x = 0,
        t.y = 0,
        t
    },
    _._Label2_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "种族值",
        t.textColor = 16777215,
        t.x = 19,
        t.y = 5,
        t
    },
    _.txt_atk_i = function() {
        var t = new eui.Label;
        return this.txt_atk = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "攻击：",
        t.textColor = 11520511,
        t.x = 27,
        t.y = 40,
        t
    },
    _.txt_atk_value_i = function() {
        var t = new eui.Label;
        return this.txt_atk_value = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "100",
        t.textColor = 6027775,
        t.x = 75,
        t.y = 40,
        t
    },
    _.txt_satk_value_i = function() {
        var t = new eui.Label;
        return this.txt_satk_value = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "20",
        t.textColor = 6027775,
        t.x = 75,
        t.y = 85,
        t
    },
    _.txt_speed_value_i = function() {
        var t = new eui.Label;
        return this.txt_speed_value = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "20",
        t.textColor = 6027775,
        t.x = 75,
        t.y = 130,
        t
    },
    _.tx_def_value_i = function() {
        var t = new eui.Label;
        return this.tx_def_value = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "100",
        t.textColor = 6027775,
        t.x = 264,
        t.y = 40,
        t
    },
    _.txt_sdef_value_i = function() {
        var t = new eui.Label;
        return this.txt_sdef_value = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "20",
        t.textColor = 6027775,
        t.x = 264,
        t.y = 85,
        t
    },
    _.txt_hp_value_i = function() {
        var t = new eui.Label;
        return this.txt_hp_value = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "20",
        t.textColor = 6027775,
        t.x = 264,
        t.y = 130,
        t
    },
    _.txt_speed_i = function() {
        var t = new eui.Label;
        return this.txt_speed = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "速度：",
        t.textColor = 11520511,
        t.x = 27,
        t.y = 130,
        t
    },
    _.txt_def_i = function() {
        var t = new eui.Label;
        return this.txt_def = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "防御：",
        t.textColor = 11520511,
        t.x = 216,
        t.y = 40,
        t
    },
    _.txt_satk_i = function() {
        var t = new eui.Label;
        return this.txt_satk = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "特攻：",
        t.textColor = 11520511,
        t.x = 27,
        t.y = 85,
        t
    },
    _.txt_hp_i = function() {
        var t = new eui.Label;
        return this.txt_hp = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "体力：",
        t.textColor = 11520511,
        t.x = 216,
        t.y = 130,
        t
    },
    _.txt_sdef_i = function() {
        var t = new eui.Label;
        return this.txt_sdef = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "特防：",
        t.textColor = 11520511,
        t.x = 215,
        t.y = 85,
        t
    },
    _.pb_atk_i = function() {
        var t = new eui.ProgressBar;
        return this.pb_atk = t,
        t.x = 40,
        t.y = 60,
        t.skinName = i,
        t
    },
    _.pb_def_i = function() {
        var t = new eui.ProgressBar;
        return this.pb_def = t,
        t.x = 229,
        t.y = 60,
        t.skinName = n,
        t
    },
    _.pb_satk_i = function() {
        var t = new eui.ProgressBar;
        return this.pb_satk = t,
        t.x = 40,
        t.y = 105,
        t.skinName = r,
        t
    },
    _.pb_sdef_i = function() {
        var t = new eui.ProgressBar;
        return this.pb_sdef = t,
        t.x = 229,
        t.y = 105,
        t.skinName = a,
        t
    },
    _.pb_speed_i = function() {
        var t = new eui.ProgressBar;
        return this.pb_speed = t,
        t.x = 40,
        t.y = 150,
        t.skinName = o,
        t
    },
    _.pb_hp_i = function() {
        var t = new eui.ProgressBar;
        return this.pb_hp = t,
        t.x = 229,
        t.y = 150,
        t.skinName = s,
        t
    },
    _._Group4_i = function() {
        var t = new eui.Group;
        return t.x = 0,
        t.y = 302,
        t.elementsContent = [this._Image3_i(), this._Label3_i(), this.txt_attr_i(), this.attr_icon_i(), this.imgBtn_restrain_i(), this.grp_scrl_i(), this.txt_none_i()],
        t
    },
    _._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "pet_info_manual_title_1_png",
        t.x = 0,
        t.y = 0,
        t
    },
    _._Label3_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "属性",
        t.textColor = 16777215,
        t.x = 19,
        t.y = 6,
        t
    },
    _.txt_attr_i = function() {
        var t = new eui.Label;
        return this.txt_attr = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "圣灵自然",
        t.textColor = 16777215,
        t.x = 86,
        t.y = 8,
        t
    },
    _.attr_icon_i = function() {
        var t = new eui.Image;
        return this.attr_icon = t,
        t.height = 23,
        t.source = "pet_info_manual_attr_icon_png",
        t.width = 23,
        t.x = 61,
        t.y = 4,
        t
    },
    _.imgBtn_restrain_i = function() {
        var t = new eui.Image;
        return this.imgBtn_restrain = t,
        t.height = 25,
        t.source = "pet_info_manual_imgBtn_restrain_png",
        t.width = 25,
        t.x = 369,
        t.y = 6,
        t
    },
    _.grp_scrl_i = function() {
        var t = new eui.Group;
        return this.grp_scrl = t,
        t.x = 18,
        t.y = 41,
        t.elementsContent = [this._scrl_i(), this._Label4_i(), this._Label5_i()],
        t
    },
    _._scrl_i = function() {
        var t = new eui.Scroller;
        return this._scrl = t,
        t.height = 132,
        t.scaleX = 1,
        t.scaleY = 1,
        t.width = 324,
        t.x = 45,
        t.y = 0,
        t.viewport = this._list_i(),
        t
    },
    _._list_i = function() {
        var t = new eui.List;
        return this._list = t,
        t.layout = this._HorizontalLayout1_i(),
        t
    },
    _._HorizontalLayout1_i = function() {
        var t = new eui.HorizontalLayout;
        return t.gap = 9,
        t
    },
    _._Label4_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "攻击",
        t.textColor = 11520511,
        t.touchEnabled = !1,
        t.x = 0,
        t.y = 21,
        t
    },
    _._Label5_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "受击",
        t.textColor = 11520511,
        t.touchEnabled = !1,
        t.x = 1,
        t.y = 94,
        t
    },
    _.txt_none_i = function() {
        var t = new eui.Image;
        return this.txt_none = t,
        t.height = 120,
        t.source = "pet_info_manual_txt_none_png",
        t.width = 188,
        t.x = 112,
        t.y = 37,
        t
    },
    _._Image4_i = function() {
        var t = new eui.Image;
        return t.height = 324,
        t.source = "pet_manual_info_view_dot_png",
        t.width = 20,
        t.x = 0,
        t.y = 4,
        t
    },
    _.imgBtn_get_i = function() {
        var t = new eui.Image;
        return this.imgBtn_get = t,
        t.height = 46,
        t.source = "pet_info_manual_imgBtn_get_png",
        t.width = 134,
        t.x = 139,
        t.y = 496,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/view/SkillViewSkin.exml"] = window.petManualInfo.SkillViewSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["tip", "add", "rb_ori", "rb_add", "list_viewport", "scroller_skill"],
        this.width = 382,
        this.elementsContent = [this._Image1_i(), this.tip_i(), this.add_i(), this.rb_ori_i(), this.rb_add_i(), this._Image2_i(), this._Label1_i(), this.scroller_skill_i()],
        this.states = [new eui.State("1", [new eui.SetProperty("scroller_skill", "y", 48.772), new eui.SetProperty("scroller_skill", "height", 483.154)]), new eui.State("2", [])]
    }
    __extends(e, t);
    var i = function(t) {
        function e() {
            t.call(this),
            this.skinParts = ["labelDisplay"],
            this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "pet_info_manual_skill_ori_down_png")]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t.percentHeight = 100,
            t.source = "pet_info_manual_skill_ori_up_png",
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
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "pet_info_manual_skill_add_down_png")]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t.percentHeight = 100,
            t.source = "pet_info_manual_skill_add_up_png",
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
    r = e.prototype;
    return r._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 542,
        t.scale9Grid = new egret.Rectangle(133, 104, 133, 173),
        t.source = "pet_info_manual_right_bg_png",
        t.width = 384,
        t.x = -2,
        t.y = 0,
        t
    },
    r.tip_i = function() {
        var t = new eui.Label;
        return this.tip = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = .5,
        t.size = 14,
        t.text = "—以下技能需要参与特定活动获取，无法通过升级开启—",
        t.textColor = 2854911,
        t.y = 53,
        t
    },
    r.add_i = function() {
        var t = new eui.Label;
        return this.add = t,
        t.fontFamily = "MFShangHei",
        t.size = 24,
        t.text = "该精灵暂无追加技能，敬请期待",
        t.textColor = 2854911,
        t.x = 24,
        t.y = 234.654,
        t
    },
    r.rb_ori_i = function() {
        var t = new eui.RadioButton;
        return this.rb_ori = t,
        t.groupName = "skillViewGroup",
        t.value = "1",
        t.x = 382.388,
        t.y = 3,
        t.skinName = i,
        t
    },
    r.rb_add_i = function() {
        var t = new eui.RadioButton;
        return this.rb_add = t,
        t.groupName = "skillViewGroup",
        t.value = "2",
        t.x = 382.388,
        t.y = 118,
        t.skinName = n,
        t
    },
    r._Image2_i = function() {
        var t = new eui.Image;
        return t.scale9Grid = new egret.Rectangle(94, 0, 187, 35),
        t.source = "ppim_info_biaoti_png",
        t.visible = !0,
        t.width = 390,
        t.x = -8,
        t.y = 9,
        t
    },
    r._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 20,
        t.text = "查看技能",
        t.textColor = 16777215,
        t.visible = !0,
        t.x = 17.94,
        t.y = 17.74,
        t
    },
    r.scroller_skill_i = function() {
        var t = new eui.Scroller;
        return this.scroller_skill = t,
        t.height = 466,
        t.width = 378,
        t.x = 4,
        t.y = 74,
        t.viewport = this.list_viewport_i(),
        t
    },
    r.list_viewport_i = function() {
        var t = new eui.List;
        return this.list_viewport = t,
        t.x = 0,
        t.y = -20,
        t.layout = this._TileLayout1_i(),
        t
    },
    r._TileLayout1_i = function() {
        var t = new eui.TileLayout;
        return t.horizontalGap = 10,
        t.orientation = "rows",
        t.requestedColumnCount = 2,
        t.verticalGap = 9,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/view/EducateSkin.exml"] = window.petManualInfo.EducateSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["txt_nature_value", "txt_inborn_value", "txt_study_value", "grp_info", "txt_mark_name_0", "icon_mark_0", "mark_0", "txt_mark_name_1", "icon_mark_1", "mark_1", "txt_mark_name_2", "icon_mark_2", "mark_2", "grp_countermark", "viewport_skiilist", "scroller_skill", "grp_skill", "txt_attr", "attr_icon", "imgBtn_restrain", "_list", "_scrl", "grp_scrl", "txt_none", "grp_viewport"],
        this.height = 524,
        this.width = 406,
        this.elementsContent = [this.grp_viewport_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.grp_viewport_i = function() {
        var t = new eui.Group;
        return this.grp_viewport = t,
        t.elementsContent = [this.grp_info_i(), this.grp_countermark_i(), this.grp_skill_i(), this._Group1_i()],
        t
    },
    i.grp_info_i = function() {
        var t = new eui.Group;
        return this.grp_info = t,
        t.cacheAsBitmap = !0,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image1_i(), this._Label1_i(), this._Image2_i(), this._Label2_i(), this.txt_nature_value_i(), this._Label3_i(), this.txt_inborn_value_i(), this._Label4_i(), this.txt_study_value_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 35,
        t.source = "pet_info_manual_title_1_png",
        t.width = 406,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "养成推荐",
        t.textColor = 16777215,
        t.x = 18,
        t.y = 7,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 20,
        t.source = "pet_manual_educate_view_dot_png",
        t.width = 20,
        t.x = 0,
        t.y = 5,
        t
    },
    i._Label2_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "推荐性格：",
        t.textColor = 11520511,
        t.x = 18,
        t.y = 81,
        t
    },
    i.txt_nature_value_i = function() {
        var t = new eui.Label;
        return this.txt_nature_value = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "活泼",
        t.textColor = 6027519,
        t.x = 99,
        t.y = 81,
        t
    },
    i._Label3_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "推荐天赋：",
        t.textColor = 11520511,
        t.x = 18,
        t.y = 41,
        t
    },
    i.txt_inborn_value_i = function() {
        var t = new eui.Label;
        return this.txt_inborn_value = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "31",
        t.textColor = 6027519,
        t.x = 98,
        t.y = 41,
        t
    },
    i._Label4_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "推荐学习力：",
        t.textColor = 11520511,
        t.x = 18,
        t.y = 121,
        t
    },
    i.txt_study_value_i = function() {
        var t = new eui.Label;
        return this.txt_study_value = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "120",
        t.textColor = 6027519,
        t.x = 114,
        t.y = 121,
        t
    },
    i.grp_countermark_i = function() {
        var t = new eui.Group;
        return this.grp_countermark = t,
        t.cacheAsBitmap = !0,
        t.x = 18,
        t.y = 161,
        t.elementsContent = [this._Label5_i(), this._Label6_i(), this.mark_0_i(), this.mark_1_i(), this.mark_2_i()],
        t
    },
    i._Label5_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "推荐刻印：",
        t.textColor = 11520511,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Label6_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 14,
        t.text = "每只精灵最多同时佩戴两枚同系列刻印",
        t.textColor = 5733059,
        t.x = 0,
        t.y = 21,
        t
    },
    i.mark_0_i = function() {
        var t = new eui.Group;
        return this.mark_0 = t,
        t.height = 100,
        t.width = 96,
        t.x = 21,
        t.y = 44,
        t.elementsContent = [this.txt_mark_name_0_i(), this._Image3_i(), this.icon_mark_0_i()],
        t
    },
    i.txt_mark_name_0_i = function() {
        var t = new eui.Label;
        return this.txt_mark_name_0 = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = 0,
        t.size = 16,
        t.text = "刻印名称刻印",
        t.textColor = 11520511,
        t.y = 84,
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.height = 82,
        t.source = "pet_info_manual_educate_imgBg_png",
        t.width = 82,
        t.x = 7,
        t.y = 0,
        t
    },
    i.icon_mark_0_i = function() {
        var t = new eui.Image;
        return this.icon_mark_0 = t,
        t.height = 50,
        t.source = "",
        t.width = 50,
        t.x = 23,
        t.y = 16,
        t
    },
    i.mark_1_i = function() {
        var t = new eui.Group;
        return this.mark_1 = t,
        t.height = 100,
        t.width = 96,
        t.x = 136,
        t.y = 44,
        t.elementsContent = [this.txt_mark_name_1_i(), this._Image4_i(), this.icon_mark_1_i()],
        t
    },
    i.txt_mark_name_1_i = function() {
        var t = new eui.Label;
        return this.txt_mark_name_1 = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = 0,
        t.size = 16,
        t.text = "刻印名称刻印",
        t.textColor = 11520511,
        t.y = 84,
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.height = 82,
        t.source = "pet_info_manual_educate_imgBg_png",
        t.width = 82,
        t.x = 7,
        t.y = 0,
        t
    },
    i.icon_mark_1_i = function() {
        var t = new eui.Image;
        return this.icon_mark_1 = t,
        t.height = 50,
        t.source = "",
        t.width = 50,
        t.x = 23,
        t.y = 16,
        t
    },
    i.mark_2_i = function() {
        var t = new eui.Group;
        return this.mark_2 = t,
        t.height = 100,
        t.width = 96,
        t.x = 246,
        t.y = 44,
        t.elementsContent = [this.txt_mark_name_2_i(), this._Image5_i(), this.icon_mark_2_i()],
        t
    },
    i.txt_mark_name_2_i = function() {
        var t = new eui.Label;
        return this.txt_mark_name_2 = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = 0,
        t.size = 16,
        t.text = "刻印名称刻印",
        t.textColor = 11520511,
        t.y = 84,
        t
    },
    i._Image5_i = function() {
        var t = new eui.Image;
        return t.height = 82,
        t.source = "pet_info_manual_educate_imgBg_png",
        t.width = 82,
        t.x = 7,
        t.y = 0,
        t
    },
    i.icon_mark_2_i = function() {
        var t = new eui.Image;
        return this.icon_mark_2 = t,
        t.height = 50,
        t.source = "",
        t.width = 50,
        t.x = 23,
        t.y = 16,
        t
    },
    i.grp_skill_i = function() {
        var t = new eui.Group;
        return this.grp_skill = t,
        t.visible = !1,
        t.x = 17,
        t.y = 328,
        t.elementsContent = [this._Label7_i(), this.scroller_skill_i()],
        t
    },
    i._Label7_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "推荐技能：",
        t.textColor = 11520511,
        t.x = 1,
        t.y = 0,
        t
    },
    i.scroller_skill_i = function() {
        var t = new eui.Scroller;
        return this.scroller_skill = t,
        t.height = 172,
        t.width = 378,
        t.x = 0,
        t.y = 24,
        t.viewport = this.viewport_skiilist_i(),
        t
    },
    i.viewport_skiilist_i = function() {
        var t = new eui.List;
        return this.viewport_skiilist = t,
        t.x = 0,
        t.y = 0,
        t.layout = this._TileLayout1_i(),
        t
    },
    i._TileLayout1_i = function() {
        var t = new eui.TileLayout;
        return t.horizontalGap = 12,
        t.orientation = "rows",
        t.requestedColumnCount = 2,
        t.verticalGap = 9,
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.visible = !0,
        t.x = 0,
        t.y = 320,
        t.elementsContent = [this._Image6_i(), this._Label8_i(), this.txt_attr_i(), this.attr_icon_i(), this.imgBtn_restrain_i(), this.grp_scrl_i(), this.txt_none_i()],
        t
    },
    i._Image6_i = function() {
        var t = new eui.Image;
        return t.source = "pet_info_manual_title_1_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i._Label8_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "属性",
        t.textColor = 16777215,
        t.x = 19,
        t.y = 6,
        t
    },
    i.txt_attr_i = function() {
        var t = new eui.Label;
        return this.txt_attr = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "圣灵自然",
        t.textColor = 16777215,
        t.x = 86,
        t.y = 8,
        t
    },
    i.attr_icon_i = function() {
        var t = new eui.Image;
        return this.attr_icon = t,
        t.height = 23,
        t.source = "pet_info_manual_attr_icon_png",
        t.width = 23,
        t.x = 61,
        t.y = 4,
        t
    },
    i.imgBtn_restrain_i = function() {
        var t = new eui.Image;
        return this.imgBtn_restrain = t,
        t.height = 25,
        t.source = "pet_info_manual_imgBtn_restrain_png",
        t.width = 25,
        t.x = 369,
        t.y = 6,
        t
    },
    i.grp_scrl_i = function() {
        var t = new eui.Group;
        return this.grp_scrl = t,
        t.x = 18,
        t.y = 41,
        t.elementsContent = [this._scrl_i(), this._Label9_i(), this._Label10_i()],
        t
    },
    i._scrl_i = function() {
        var t = new eui.Scroller;
        return this._scrl = t,
        t.height = 132,
        t.scaleX = 1,
        t.scaleY = 1,
        t.width = 324,
        t.x = 45,
        t.y = 0,
        t.viewport = this._list_i(),
        t
    },
    i._list_i = function() {
        var t = new eui.List;
        return this._list = t,
        t.layout = this._HorizontalLayout1_i(),
        t
    },
    i._HorizontalLayout1_i = function() {
        var t = new eui.HorizontalLayout;
        return t.gap = 9,
        t
    },
    i._Label9_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "攻击",
        t.textColor = 11520511,
        t.touchEnabled = !1,
        t.x = 0,
        t.y = 21,
        t
    },
    i._Label10_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "受击",
        t.textColor = 11520511,
        t.touchEnabled = !1,
        t.x = 1,
        t.y = 94,
        t
    },
    i.txt_none_i = function() {
        var t = new eui.Image;
        return this.txt_none = t,
        t.height = 120,
        t.source = "pet_info_manual_txt_none_png",
        t.width = 188,
        t.x = 112,
        t.y = 37,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/view/SkinViewSkin.exml"] = window.petManualInfo.SkinViewSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["txt_line1", "txt_line2", "txt_line3", "viewport_list"],
        this.height = 426,
        this.width = 406,
        this.elementsContent = [this._Image1_i(), this._Image2_i(), this._Label1_i(), this.txt_line1_i(), this.txt_line2_i(), this.txt_line3_i(), this.viewport_list_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 35,
        t.source = "pet_info_manual_title_1_png",
        t.width = 406,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 20,
        t.source = "pet_manual_educate_view_dot_png",
        t.width = 20,
        t.x = 0,
        t.y = 5,
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "精灵皮肤",
        t.textColor = 16777215,
        t.x = 18,
        t.y = 6,
        t
    },
    i.txt_line1_i = function() {
        var t = new eui.Label;
        return this.txt_line1 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "精灵名称名称（默认形象）",
        t.textColor = 11520511,
        t.x = 19,
        t.y = 39,
        t
    },
    i.txt_line2_i = function() {
        var t = new eui.Label;
        return this.txt_line2 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "获得途径：",
        t.textColor = 11520511,
        t.visible = !1,
        t.x = 19,
        t.y = 61,
        t
    },
    i.txt_line3_i = function() {
        var t = new eui.Label;
        return this.txt_line3 = t,
        t.fontFamily = "MFShangHei",
        t.lineSpacing = 5,
        t.size = 16,
        t.text = "漫长宇宙航行中收获的珍贵收藏品，记录着我们一路航行来的记忆。珍贵收藏品，记录着我们一路航行来的记忆。珍贵收藏品，记录着我们一路航行来的记忆。",
        t.textColor = 11520511,
        t.visible = !1,
        t.width = 358,
        t.x = 20,
        t.y = 82,
        t
    },
    i.viewport_list_i = function() {
        var t = new eui.List;
        return this.viewport_list = t,
        t.height = 301,
        t.width = 363,
        t.x = 25,
        t.y = 125,
        t.layout = this._HorizontalLayout1_i(),
        t
    },
    i._HorizontalLayout1_i = function() {
        var t = new eui.HorizontalLayout;
        return t.gap = -70,
        t.paddingTop = 0,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/PetInfoManualSkin.exml"] = window.PetInfoManualSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["petModel", "texture_1", "icon_hy", "txt_name", "img_collect", "group_nameInfo", "grp_name", "imgBtn_left", "imgBtn_right", "imgBtn_show", "btnAddPet", "type_2", "type_1", "type_0", "grpType", "imgBtn_skin", "pet_detailedInfo_bg", "comp_1", "comp_2", "comp_3", "comp_4", "viewStack_navbar", "rb_info", "rb_skill", "rb_course", "rb_skin"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this._Image1_i(), this._Group1_i(), this.imgBtn_skin_i(), this._Group6_i(), this._Group7_i()]
    }
    __extends(e, t);
    var i = function(t) {
        function e() {
            t.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "pet_info_manualdetail_up_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "pet_info_manualdetail_down_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t
        },
        e
    } (eui.Skin),
    n = function(t) {
        function e() {
            t.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "pet_info_manual_skill_up_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "pet_info_manual_skill_down_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t
        },
        e
    } (eui.Skin),
    r = function(t) {
        function e() {
            t.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "pet_info_manualcourse_up_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "pet_info_manualcourse_down_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t
        },
        e
    } (eui.Skin),
    a = function(t) {
        function e() {
            t.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "pet_info_manualskin_up_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "pet_info_manualskin_down_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t
        },
        e
    } (eui.Skin),
    o = e.prototype;
    return o._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 640,
        t.scale9Grid = new egret.Rectangle(941, 0, 195, 640),
        t.source = "pet_info_manual_bg_jpg",
        t.percentWidth = 100,
        t.x = 0,
        t.y = 0,
        t
    },
    o._Group1_i = function() {
        var t = new eui.Group;
        return t.bottom = 0,
        t.height = 640,
        t.horizontalCenter = -188,
        t.touchEnabled = !1,
        t.width = 760,
        t.elementsContent = [this.petModel_i(), this.grp_name_i(), this.imgBtn_left_i(), this.imgBtn_right_i(), this.imgBtn_show_i(), this.btnAddPet_i(), this.grpType_i()],
        t
    },
    o.petModel_i = function() {
        var t = new core.component.pet.PetModel;
        return this.petModel = t,
        t.height = 640,
        t.scaleX = 1,
        t.scaleY = 1,
        t.width = 760,
        t.y = 0,
        t
    },
    o.grp_name_i = function() {
        var t = new eui.Group;
        return this.grp_name = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.x = 149,
        t.y = 542,
        t.elementsContent = [this.texture_1_i(), this.group_nameInfo_i()],
        t
    },
    o.texture_1_i = function() {
        var t = new eui.Image;
        return this.texture_1 = t,
        t.source = "pet_info_manual_name_bg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    o.group_nameInfo_i = function() {
        var t = new eui.Group;
        return this.group_nameInfo = t,
        t.x = 51,
        t.y = 1,
        t.elementsContent = [this.icon_hy_i(), this.txt_name_i(), this.img_collect_i()],
        t
    },
    o.icon_hy_i = function() {
        var t = new eui.Image;
        return this.icon_hy = t,
        t.height = 21,
        t.source = "pet_info_manual_zhuanshu_icon_png",
        t.width = 26,
        t.x = 242,
        t.y = 6,
        t
    },
    o.txt_name_i = function() {
        var t = new eui.Label;
        return this.txt_name = t,
        t.fontFamily = "MFShangHei",
        t.size = 20,
        t.stroke = 1,
        t.strokeColor = 4548549,
        t.text = "精灵名称精灵名称",
        t.textColor = 16770655,
        t.x = 69,
        t.y = 6,
        t
    },
    o.img_collect_i = function() {
        var t = new eui.Image;
        return this.img_collect = t,
        t.height = 33,
        t.source = "pet_info_manual_img_collect_png",
        t.width = 28,
        t.x = 0,
        t.y = 0,
        t
    },
    o.imgBtn_left_i = function() {
        var t = new eui.Image;
        return this.imgBtn_left = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "pet_info_manual_imgBtn_left_png",
        t.x = 92,
        t.y = 357,
        t
    },
    o.imgBtn_right_i = function() {
        var t = new eui.Image;
        return this.imgBtn_right = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "pet_info_manual_imgBtn_right_png",
        t.x = 580,
        t.y = 357,
        t
    },
    o.imgBtn_show_i = function() {
        var t = new eui.Image;
        return this.imgBtn_show = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "pet_info_manual_imgBtn_show_png",
        t.x = 20,
        t.y = 564,
        t
    },
    o.btnAddPet_i = function() {
        var t = new eui.Image;
        return this.btnAddPet = t,
        t.height = 67,
        t.right = 174,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "pet_info_manual_imgBtn_show_png",
        t.visible = !1,
        t.width = 67,
        t.x = 529,
        t.y = 453,
        t
    },
    o.grpType_i = function() {
        var t = new eui.Group;
        return this.grpType = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.verticalCenter = 274,
        t.x = 277,
        t.layout = this._HorizontalLayout1_i(),
        t.elementsContent = [this.type_2_i(), this.type_1_i(), this.type_0_i()],
        t
    },
    o._HorizontalLayout1_i = function() {
        var t = new eui.HorizontalLayout;
        return t.gap = 6,
        t
    },
    o.type_2_i = function() {
        var t = new eui.Image;
        return this.type_2 = t,
        t.source = "common_pet_tag_0_png",
        t.x = 106,
        t.y = 0,
        t
    },
    o.type_1_i = function() {
        var t = new eui.Image;
        return this.type_1 = t,
        t.source = "common_pet_tag_0_png",
        t.x = 53,
        t.y = 0,
        t
    },
    o.type_0_i = function() {
        var t = new eui.Image;
        return this.type_0 = t,
        t.source = "common_pet_tag_0_png",
        t.x = 0,
        t.y = 0,
        t
    },
    o.imgBtn_skin_i = function() {
        var t = new eui.Image;
        return this.imgBtn_skin = t,
        t.bottom = 20,
        t.height = 92,
        t.left = 12,
        t.source = "pet_info_manual_imgBtn_skin_png",
        t.visible = !1,
        t.width = 83,
        t
    },
    o._Group6_i = function() {
        var t = new eui.Group;
        return t.height = 582,
        t.right = 0,
        t.scaleX = 1,
        t.scaleY = 1,
        t.width = 462,
        t.y = 58,
        t.elementsContent = [this.pet_detailedInfo_bg_i(), this.viewStack_navbar_i()],
        t
    },
    o.pet_detailedInfo_bg_i = function() {
        var t = new eui.Image;
        return this.pet_detailedInfo_bg = t,
        t.height = 489,
        t.source = "pet_info_manual_right_bg_png",
        t.visible = !0,
        t.width = 399,
        t.x = 0,
        t.y = 0,
        t
    },
    o.viewStack_navbar_i = function() {
        var t = new eui.ViewStack;
        return this.viewStack_navbar = t,
        t.selectedIndex = 1,
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Group2_i(), this._Group3_i(), this._Group4_i(), this._Group5_i()],
        t
    },
    o._Group2_i = function() {
        var t = new eui.Group;
        return t.percentHeight = 100,
        t.name = "info",
        t.percentWidth = 100,
        t.x = -6,
        t.y = 12,
        t.elementsContent = [this.comp_1_i()],
        t
    },
    o.comp_1_i = function() {
        var t = new petManualInfo.InfoView;
        return this.comp_1 = t,
        t.skinName = petManualInfo.InfoViewSkin,
        t
    },
    o._Group3_i = function() {
        var t = new eui.Group;
        return t.percentHeight = 100,
        t.name = "skill",
        t.percentWidth = 100,
        t.x = 11,
        t.y = 15,
        t.elementsContent = [this.comp_2_i()],
        t
    },
    o.comp_2_i = function() {
        var t = new petManualInfo.SkillView;
        return this.comp_2 = t,
        t.skinName = "petManualInfo.SkillViewSkin",
        t
    },
    o._Group4_i = function() {
        var t = new eui.Group;
        return t.percentHeight = 100,
        t.name = "educate",
        t.percentWidth = 100,
        t.x = -6,
        t.y = 11,
        t.elementsContent = [this.comp_3_i()],
        t
    },
    o.comp_3_i = function() {
        var t = new petManualInfo.EducateView;
        return this.comp_3 = t,
        t.skinName = "petManualInfo.EducateSkin",
        t
    },
    o._Group5_i = function() {
        var t = new eui.Group;
        return t.percentHeight = 100,
        t.name = "skin",
        t.percentWidth = 100,
        t.x = -6,
        t.y = 11,
        t.elementsContent = [this.comp_4_i()],
        t
    },
    o.comp_4_i = function() {
        var t = new petManualInfo.SkinView;
        return this.comp_4 = t,
        t.skinName = "petManualInfo.SkinViewSkin",
        t
    },
    o._Group7_i = function() {
        var t = new eui.Group;
        return t.right = 22,
        t.y = 90,
        t.elementsContent = [this.rb_info_i(), this.rb_skill_i(), this.rb_course_i(), this.rb_skin_i()],
        t
    },
    o.rb_info_i = function() {
        var t = new eui.RadioButton;
        return this.rb_info = t,
        t.value = "1",
        t.x = 0,
        t.y = 0,
        t.skinName = i,
        t
    },
    o.rb_skill_i = function() {
        var t = new eui.RadioButton;
        return this.rb_skill = t,
        t.value = "2",
        t.x = 0,
        t.y = 115,
        t.skinName = n,
        t
    },
    o.rb_course_i = function() {
        var t = new eui.RadioButton;
        return this.rb_course = t,
        t.value = "3",
        t.x = 0,
        t.y = 231,
        t.skinName = r,
        t
    },
    o.rb_skin_i = function() {
        var t = new eui.RadioButton;
        return this.rb_skin = t,
        t.value = "4",
        t.x = 0,
        t.y = 346,
        t.skinName = a,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/PetInfoSkin.exml"] = window.PetInfoSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["petModel", "skillview", "SkinView", "EducateView", "viewStack_right", "btnAddPet", "txt_name", "txt_attr", "txt_petId", "attr_icon", "zu_51", "imgBtn_show", "petIn", "petInfo"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this._Image1_i(), this.petInfo_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.percentHeight = 100,
        t.scale9Grid = new egret.Rectangle(941, 0, 195, 640),
        t.source = "pet_info_manual_bg_jpg",
        t.percentWidth = 100,
        t.x = 0,
        t.y = 0,
        t
    },
    i.petInfo_i = function() {
        var t = new eui.Group;
        return this.petInfo = t,
        t.horizontalCenter = -14,
        t.visible = !0,
        t.y = 69,
        t.elementsContent = [this.petModel_i(), this.viewStack_right_i(), this.btnAddPet_i(), this.petIn_i()],
        t
    },
    i.petModel_i = function() {
        var t = new core.component.pet.PetModel;
        return this.petModel = t,
        t.height = 640,
        t.scaleX = 1,
        t.scaleY = 1,
        t.width = 760,
        t.x = -31,
        t.y = -69,
        t
    },
    i.viewStack_right_i = function() {
        var t = new eui.ViewStack;
        return this.viewStack_right = t,
        t.selectedIndex = 1,
        t.visible = !0,
        t.x = 674,
        t.elementsContent = [this._Group1_i(), this._Group2_i(), this._Group3_i()],
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.percentHeight = 100,
        t.name = "skill",
        t.percentWidth = 100,
        t.x = -6,
        t.y = 0,
        t.elementsContent = [this.skillview_i()],
        t
    },
    i.skillview_i = function() {
        var t = new petManualInfo.SkillView;
        return this.skillview = t,
        t.skinName = "petManualInfo.SkillViewSkin",
        t.x = 0,
        t
    },
    i._Group2_i = function() {
        var t = new eui.Group;
        return t.percentHeight = 100,
        t.name = "skin",
        t.percentWidth = 100,
        t.elementsContent = [this.SkinView_i()],
        t
    },
    i.SkinView_i = function() {
        var t = new petManualInfo.SkinView;
        return this.SkinView = t,
        t.skinName = "petManualInfo.SkinViewSkin",
        t.x = 0,
        t
    },
    i._Group3_i = function() {
        var t = new eui.Group;
        return t.percentHeight = 100,
        t.name = "educate",
        t.percentWidth = 100,
        t.elementsContent = [this.EducateView_i()],
        t
    },
    i.EducateView_i = function() {
        var t = new petManualInfo.EducateView;
        return this.EducateView = t,
        t.skinName = "petManualInfo.EducateSkin",
        t.x = 0,
        t
    },
    i.btnAddPet_i = function() {
        var t = new eui.Image;
        return this.btnAddPet = t,
        t.source = "ppim_info_imgbtn_show_png",
        t.visible = !1,
        t.x = 516,
        t.y = 250,
        t
    },
    i.petIn_i = function() {
        var t = new eui.Group;
        return this.petIn = t,
        t.cacheAsBitmap = !0,
        t.scaleX = 1,
        t.scaleY = 1,
        t.x = 225,
        t.y = 468,
        t.elementsContent = [this.txt_name_i(), this._Image2_i(), this.txt_attr_i(), this.txt_petId_i(), this.attr_icon_i(), this.zu_51_i(), this.imgBtn_show_i()],
        t
    },
    i.txt_name_i = function() {
        var t = new eui.Label;
        return this.txt_name = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = -92,
        t.size = 24,
        t.stroke = 1,
        t.strokeColor = 2771877,
        t.text = "精灵名精灵名精灵名",
        t.textAlign = "center",
        t.textColor = 16770655,
        t.y = -2,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 35,
        t.source = "ppim_info_zu_png",
        t.width = 219,
        t.x = 0,
        t.y = 28,
        t
    },
    i.txt_attr_i = function() {
        var t = new eui.Label;
        return this.txt_attr = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "远古 火",
        t.textColor = 4173823,
        t.visible = !0,
        t.width = 100,
        t.x = 112,
        t.y = 37,
        t
    },
    i.txt_petId_i = function() {
        var t = new eui.Label;
        return this.txt_petId = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "No:9999",
        t.textColor = 12834813,
        t.x = 12,
        t.y = 37,
        t
    },
    i.attr_icon_i = function() {
        var t = new eui.Image;
        return this.attr_icon = t,
        t.height = 19,
        t.source = "",
        t.width = 20,
        t.x = 90,
        t.y = 36,
        t
    },
    i.zu_51_i = function() {
        var t = new eui.Image;
        return this.zu_51 = t,
        t.height = 61,
        t.source = "ppim_info_imgbtn_show_png",
        t.visible = !1,
        t.width = 51,
        t.x = 345,
        t.y = 0,
        t
    },
    i.imgBtn_show_i = function() {
        var t = new eui.Image;
        return this.imgBtn_show = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "ppim_info_imgbtn_show_png",
        t.visible = !0,
        t.x = 350,
        t.y = 0,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/view/New/AdvancePetViewSkin.exml"] = window.AdvancePetViewSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["txtOldRace", "txtAdvRace", "signUp0", "txtDelta0", "txtValue0", "txtV0", "evLine0", "signUp1", "txtDelta1", "txtValue1", "txtV1", "evLine1", "signUp2", "txtDelta2", "txtValue2", "txtV2", "evLine2", "signUp3", "txtDelta3", "txtValue3", "txtV3", "evLine3", "signUp4", "txtDelta4", "txtValue4", "txtV4", "evLine4", "signUp5", "txtDelta5", "txtValue5", "txtV5", "evLine5", "btnDetail", "grpType", "grpRace", "btn2Get", "_listSkill", "grpSkill", "grpAdv"],
        this.height = 286,
        this.width = 391,
        this.elementsContent = [this.grpAdv_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.grpAdv_i = function() {
        var t = new eui.Group;
        return this.grpAdv = t,
        t.height = 0,
        t.horizontalCenter = 0,
        t.verticalCenter = 0,
        t.elementsContent = [this.grpRace_i(), this.grpSkill_i()],
        t
    },
    i.grpRace_i = function() {
        var t = new eui.Group;
        return this.grpRace = t,
        t.verticalCenter = 0,
        t.visible = !0,
        t.x = 0,
        t.elementsContent = [this._Image1_i(), this._Group1_i(), this._Group2_i(), this._Group3_i(), this._Image6_i(), this.evLine0_i(), this.evLine1_i(), this.evLine2_i(), this.evLine3_i(), this.evLine4_i(), this.evLine5_i(), this._Group4_i(), this.grpType_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 444.424,
        t.scale9Grid = new egret.Rectangle(27, 27, 28, 28),
        t.source = "pet_info_manual_educate_imgBg_png",
        t.width = 280.329,
        t.x = 3.44,
        t.y = .77,
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.visible = !0,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image2_i(), this._Label1_i()],
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 32.939,
        t.source = "pet_info_manual_title_1_png",
        t.width = 282.402,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "种族值提升",
        t.textColor = 16777215,
        t.verticalCenter = 0,
        t.x = 13.143,
        t
    },
    i._Group2_i = function() {
        var t = new eui.Group;
        return t.x = 14,
        t.y = 36.93,
        t.elementsContent = [this._Image3_i(), this._Label2_i()],
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.alpha = .1,
        t.height = 25.205,
        t.source = "info_view_item_img_back_png",
        t.visible = !0,
        t.width = 86.858,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Label2_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.horizontalCenter = 0,
        t.size = 16,
        t.text = "总种族值：",
        t.textColor = 16777215,
        t.verticalCenter = 0,
        t.y = 18,
        t
    },
    i._Group3_i = function() {
        var t = new eui.Group;
        return t.visible = !0,
        t.x = 21.2,
        t.y = 72.28,
        t.elementsContent = [this._Image4_i(), this._Image5_i(), this.txtOldRace_i(), this.txtAdvRace_i()],
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.source = "advpet_zebraline_png",
        t.verticalCenter = 0,
        t.visible = !0,
        t.x = 0,
        t
    },
    i._Image5_i = function() {
        var t = new eui.Image;
        return t.source = "advpet_signright_png",
        t.verticalCenter = .5,
        t.x = 110.49,
        t
    },
    i.txtOldRace_i = function() {
        var t = new eui.Label;
        return this.txtOldRace = t,
        t.fontFamily = "MFShangHei",
        t.height = 36,
        t.size = 36,
        t.text = "705",
        t.textColor = 7331832,
        t.verticalAlign = "top",
        t.verticalCenter = 0,
        t.x = 24.66,
        t
    },
    i.txtAdvRace_i = function() {
        var t = new eui.Label;
        return this.txtAdvRace = t,
        t.fontFamily = "MFShangHei",
        t.height = 36,
        t.size = 36,
        t.text = "705",
        t.textColor = 16373061,
        t.verticalAlign = "top",
        t.verticalCenter = 0,
        t.x = 156.61,
        t.y = 0,
        t
    },
    i._Image6_i = function() {
        var t = new eui.Image;
        return t.scale9Grid = new egret.Rectangle(1, 0, 8, 1),
        t.source = "common_line_01_s9_png",
        t.width = 262,
        t.x = 12.21,
        t.y = 119.29,
        t
    },
    i.evLine0_i = function() {
        var t = new eui.Group;
        return this.evLine0 = t,
        t.x = 39,
        t.y = 136.43,
        t.elementsContent = [this.signUp0_i(), this._Label3_i(), this.txtDelta0_i(), this.txtValue0_i(), this.txtV0_i(), this._Image9_i()],
        t
    },
    i.signUp0_i = function() {
        var t = new eui.Group;
        return this.signUp0 = t,
        t.x = 114.34,
        t.y = 5,
        t.elementsContent = [this._Image7_i(), this._Image8_i()],
        t
    },
    i._Image7_i = function() {
        var t = new eui.Image;
        return t.source = "advpet_signup_png",
        t.visible = !0,
        t.x = 78.86,
        t.y = 1,
        t
    },
    i._Image8_i = function() {
        var t = new eui.Image;
        return t.source = "advArrow_png",
        t.x = -7.173,
        t.y = 0,
        t
    },
    i._Label3_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "攻击：",
        t.textColor = 11520511,
        t.x = 23.586,
        t.y = 3,
        t
    },
    i.txtDelta0_i = function() {
        var t = new eui.Label;
        return this.txtDelta0 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "2",
        t.textColor = 6401399,
        t.x = 213.068,
        t.y = 2.96,
        t
    },
    i.txtValue0_i = function() {
        var t = new eui.Label;
        return this.txtValue0 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "9999",
        t.textColor = 7331832,
        t.x = 71.586,
        t.y = 3,
        t
    },
    i.txtV0_i = function() {
        var t = new eui.Label;
        return this.txtV0 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "9999",
        t.textColor = 7331832,
        t.x = 130,
        t.y = 3,
        t
    },
    i._Image9_i = function() {
        var t = new eui.Image;
        return t.source = "common_atk_png",
        t.visible = !0,
        t.x = -13.414,
        t.y = 0,
        t
    },
    i.evLine1_i = function() {
        var t = new eui.Group;
        return this.evLine1 = t,
        t.x = 39,
        t.y = 170.39,
        t.elementsContent = [this.signUp1_i(), this._Label4_i(), this.txtDelta1_i(), this.txtValue1_i(), this.txtV1_i(), this._Image12_i()],
        t
    },
    i.signUp1_i = function() {
        var t = new eui.Group;
        return this.signUp1 = t,
        t.x = 114.34,
        t.y = 5,
        t.elementsContent = [this._Image10_i(), this._Image11_i()],
        t
    },
    i._Image10_i = function() {
        var t = new eui.Image;
        return t.source = "advpet_signup_png",
        t.visible = !0,
        t.x = 78.86,
        t.y = 1,
        t
    },
    i._Image11_i = function() {
        var t = new eui.Image;
        return t.source = "advArrow_png",
        t.x = -7.173,
        t.y = 0,
        t
    },
    i._Label4_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "特攻：",
        t.textColor = 11520511,
        t.x = 23.586,
        t.y = 3,
        t
    },
    i.txtDelta1_i = function() {
        var t = new eui.Label;
        return this.txtDelta1 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "2",
        t.textColor = 6401399,
        t.x = 213.068,
        t.y = 2.96,
        t
    },
    i.txtValue1_i = function() {
        var t = new eui.Label;
        return this.txtValue1 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "9999",
        t.textColor = 7331832,
        t.x = 71.586,
        t.y = 3,
        t
    },
    i.txtV1_i = function() {
        var t = new eui.Label;
        return this.txtV1 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "9999",
        t.textColor = 7331832,
        t.x = 130,
        t.y = 3,
        t
    },
    i._Image12_i = function() {
        var t = new eui.Image;
        return t.source = "common_satk_png",
        t.x = -13.414,
        t.y = 0,
        t
    },
    i.evLine2_i = function() {
        var t = new eui.Group;
        return this.evLine2 = t,
        t.x = 39,
        t.y = 208.03,
        t.elementsContent = [this.signUp2_i(), this._Label5_i(), this.txtDelta2_i(), this.txtValue2_i(), this.txtV2_i(), this._Image15_i()],
        t
    },
    i.signUp2_i = function() {
        var t = new eui.Group;
        return this.signUp2 = t,
        t.visible = !0,
        t.x = 114.34,
        t.y = 5,
        t.elementsContent = [this._Image13_i(), this._Image14_i()],
        t
    },
    i._Image13_i = function() {
        var t = new eui.Image;
        return t.source = "advpet_signup_png",
        t.visible = !0,
        t.x = 78.86,
        t.y = 1,
        t
    },
    i._Image14_i = function() {
        var t = new eui.Image;
        return t.source = "advArrow_png",
        t.x = -7.173,
        t.y = 0,
        t
    },
    i._Label5_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "速度：",
        t.textColor = 11520511,
        t.x = 23.586,
        t.y = 3,
        t
    },
    i.txtDelta2_i = function() {
        var t = new eui.Label;
        return this.txtDelta2 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "2",
        t.textColor = 6401399,
        t.x = 213.068,
        t.y = 2.96,
        t
    },
    i.txtValue2_i = function() {
        var t = new eui.Label;
        return this.txtValue2 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "9999",
        t.textColor = 7331832,
        t.x = 71.586,
        t.y = 3,
        t
    },
    i.txtV2_i = function() {
        var t = new eui.Label;
        return this.txtV2 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "9999",
        t.textColor = 7331832,
        t.x = 130,
        t.y = 3,
        t
    },
    i._Image15_i = function() {
        var t = new eui.Image;
        return t.source = "common_speed_png",
        t.x = -13.414,
        t.y = 0,
        t
    },
    i.evLine3_i = function() {
        var t = new eui.Group;
        return this.evLine3 = t,
        t.x = 39,
        t.y = 242.49,
        t.elementsContent = [this.signUp3_i(), this._Label6_i(), this.txtDelta3_i(), this.txtValue3_i(), this.txtV3_i(), this._Image18_i()],
        t
    },
    i.signUp3_i = function() {
        var t = new eui.Group;
        return this.signUp3 = t,
        t.x = 114.34,
        t.y = 5,
        t.elementsContent = [this._Image16_i(), this._Image17_i()],
        t
    },
    i._Image16_i = function() {
        var t = new eui.Image;
        return t.source = "advpet_signup_png",
        t.visible = !0,
        t.x = 78.86,
        t.y = 1,
        t
    },
    i._Image17_i = function() {
        var t = new eui.Image;
        return t.source = "advArrow_png",
        t.x = -7.173,
        t.y = 0,
        t
    },
    i._Label6_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "防御：",
        t.textColor = 11520511,
        t.x = 23.586,
        t.y = 3,
        t
    },
    i.txtDelta3_i = function() {
        var t = new eui.Label;
        return this.txtDelta3 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "2",
        t.textColor = 6401399,
        t.x = 213.067,
        t.y = 2.96,
        t
    },
    i.txtValue3_i = function() {
        var t = new eui.Label;
        return this.txtValue3 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "9999",
        t.textColor = 7331832,
        t.x = 71.586,
        t.y = 3,
        t
    },
    i.txtV3_i = function() {
        var t = new eui.Label;
        return this.txtV3 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "9999",
        t.textColor = 7331832,
        t.x = 130,
        t.y = 3,
        t
    },
    i._Image18_i = function() {
        var t = new eui.Image;
        return t.source = "common_def_png",
        t.x = -13.414,
        t.y = 0,
        t
    },
    i.evLine4_i = function() {
        var t = new eui.Group;
        return this.evLine4 = t,
        t.x = 39,
        t.y = 276.07,
        t.elementsContent = [this.signUp4_i(), this._Label7_i(), this.txtDelta4_i(), this.txtValue4_i(), this.txtV4_i(), this._Image21_i()],
        t
    },
    i.signUp4_i = function() {
        var t = new eui.Group;
        return this.signUp4 = t,
        t.x = 114.34,
        t.y = 5,
        t.elementsContent = [this._Image19_i(), this._Image20_i()],
        t
    },
    i._Image19_i = function() {
        var t = new eui.Image;
        return t.source = "advpet_signup_png",
        t.visible = !0,
        t.x = 78.86,
        t.y = 1,
        t
    },
    i._Image20_i = function() {
        var t = new eui.Image;
        return t.source = "advArrow_png",
        t.x = -7.173,
        t.y = 0,
        t
    },
    i._Label7_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "特防：",
        t.textColor = 11520511,
        t.x = 23.586,
        t.y = 3,
        t
    },
    i.txtDelta4_i = function() {
        var t = new eui.Label;
        return this.txtDelta4 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "2",
        t.textColor = 6401399,
        t.x = 213.068,
        t.y = 2.96,
        t
    },
    i.txtValue4_i = function() {
        var t = new eui.Label;
        return this.txtValue4 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "9999",
        t.textColor = 7331832,
        t.x = 71.586,
        t.y = 3,
        t
    },
    i.txtV4_i = function() {
        var t = new eui.Label;
        return this.txtV4 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "9999",
        t.textColor = 7331832,
        t.x = 130,
        t.y = 3,
        t
    },
    i._Image21_i = function() {
        var t = new eui.Image;
        return t.source = "common_sdef_png",
        t.x = -13.414,
        t.y = 0,
        t
    },
    i.evLine5_i = function() {
        var t = new eui.Group;
        return this.evLine5 = t,
        t.x = 39,
        t.y = 310.03,
        t.elementsContent = [this.signUp5_i(), this._Label8_i(), this.txtDelta5_i(), this.txtValue5_i(), this.txtV5_i(), this._Image24_i()],
        t
    },
    i.signUp5_i = function() {
        var t = new eui.Group;
        return this.signUp5 = t,
        t.x = 114.34,
        t.y = 5,
        t.elementsContent = [this._Image22_i(), this._Image23_i()],
        t
    },
    i._Image22_i = function() {
        var t = new eui.Image;
        return t.source = "advpet_signup_png",
        t.visible = !0,
        t.x = 78.86,
        t.y = 1,
        t
    },
    i._Image23_i = function() {
        var t = new eui.Image;
        return t.source = "advArrow_png",
        t.x = -7.173,
        t.y = 0,
        t
    },
    i._Label8_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "体力：",
        t.textColor = 11520511,
        t.x = 23.586,
        t.y = 3,
        t
    },
    i.txtDelta5_i = function() {
        var t = new eui.Label;
        return this.txtDelta5 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "2",
        t.textColor = 6401399,
        t.x = 213.068,
        t.y = 2.96,
        t
    },
    i.txtValue5_i = function() {
        var t = new eui.Label;
        return this.txtValue5 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "9999",
        t.textColor = 7331832,
        t.x = 71.586,
        t.y = 3,
        t
    },
    i.txtV5_i = function() {
        var t = new eui.Label;
        return this.txtV5 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "9999",
        t.textColor = 7331832,
        t.x = 130,
        t.y = 3,
        t
    },
    i._Image24_i = function() {
        var t = new eui.Image;
        return t.source = "common_hp_png",
        t.x = -13.413,
        t.y = 0,
        t
    },
    i._Group4_i = function() {
        var t = new eui.Group;
        return t.visible = !0,
        t.x = 0,
        t.y = 358.54,
        t.elementsContent = [this._Image25_i(), this._Label9_i(), this.btnDetail_i()],
        t
    },
    i._Image25_i = function() {
        var t = new eui.Image;
        return t.height = 32.939,
        t.source = "pet_info_manual_title_1_png",
        t.width = 282.402,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Label9_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "特性强化",
        t.textColor = 16777215,
        t.verticalCenter = 0,
        t.x = 13.143,
        t
    },
    i.btnDetail_i = function() {
        var t = new eui.Group;
        return this.btnDetail = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.verticalCenter = 0,
        t.x = 182.438,
        t.elementsContent = [this._Label10_i(), this._Image26_i()],
        t
    },
    i._Label10_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "查看详情",
        t.textColor = 8301284,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Image26_i = function() {
        var t = new eui.Image;
        return t.source = "advpet_excham_png",
        t.x = 73.67,
        t.y = .93,
        t
    },
    i.grpType_i = function() {
        var t = new eui.Group;
        return this.grpType = t,
        t.width = 260,
        t.x = 13.62,
        t.y = 405.89,
        t.layout = this._HorizontalLayout1_i(),
        t.elementsContent = [this._Image27_i(), this._Image28_i(), this._Image29_i()],
        t
    },
    i._HorizontalLayout1_i = function() {
        var t = new eui.HorizontalLayout;
        return t.gap = 10,
        t.horizontalAlign = "center",
        t.verticalAlign = "middle",
        t
    },
    i._Image27_i = function() {
        var t = new eui.Image;
        return t.source = "ppim_info_jg_kb_png",
        t.x = 56,
        t.y = 0,
        t
    },
    i._Image28_i = function() {
        var t = new eui.Image;
        return t.source = "ppim_info_pvp_kaobei_png",
        t.x = 0,
        t.y = 1,
        t
    },
    i._Image29_i = function() {
        var t = new eui.Image;
        return t.source = "ppim_info_rd_kb_png",
        t.visible = !0,
        t.x = 113,
        t.y = 0,
        t
    },
    i.grpSkill_i = function() {
        var t = new eui.Group;
        return this.grpSkill = t,
        t.verticalCenter = 0,
        t.x = 777,
        t.elementsContent = [this._Image30_i(), this._Group5_i(), this.btn2Get_i(), this._Scroller1_i()],
        t
    },
    i._Image30_i = function() {
        var t = new eui.Image;
        return t.height = 400,
        t.scale9Grid = new egret.Rectangle(27, 27, 28, 28),
        t.source = "pet_info_manual_educate_imgBg_png",
        t.visible = !0,
        t.width = 282,
        t.x = 0,
        t.y = .77,
        t
    },
    i._Group5_i = function() {
        var t = new eui.Group;
        return t.horizontalCenter = 0,
        t.visible = !0,
        t.y = 0,
        t.elementsContent = [this._Image31_i(), this._Label11_i()],
        t
    },
    i._Image31_i = function() {
        var t = new eui.Image;
        return t.height = 32.939,
        t.source = "ppim_info_biaoti_png",
        t.width = 282,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Label11_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "新增技能",
        t.textColor = 16777215,
        t.verticalCenter = .5,
        t.x = 34.206,
        t
    },
    i.btn2Get_i = function() {
        var t = new eui.Image;
        return this.btn2Get = t,
        t.horizontalCenter = 0,
        t.source = "pet_info_manual_imgBtn_get_png",
        t.y = 419.74,
        t
    },
    i._Scroller1_i = function() {
        var t = new eui.Scroller;
        return t.height = 360,
        t.scaleX = 1,
        t.scaleY = 1,
        t.width = 282,
        t.x = 0,
        t.y = 40,
        t.viewport = this._listSkill_i(),
        t
    },
    i._listSkill_i = function() {
        var t = new eui.List;
        return this._listSkill = t,
        t.height = 349.27,
        t.visible = !0,
        t.width = 282,
        t.x = 0,
        t.y = 40,
        t
    },
    e
} (eui.Skin);