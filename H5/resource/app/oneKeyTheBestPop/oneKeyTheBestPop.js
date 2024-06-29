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
    for (var _ in t) t.hasOwnProperty(_) && (e[_] = t[_]);
    i.prototype = t.prototype,
    e.prototype = new i
},
oneKeyTheBestPop; !
function(e) {
    var t = function(e) {
        function t(t) {
            var i = e.call(this) || this;
            return i._data = t,
            i
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            var e = this,
            t = new i,
            _ = PopViewManager.createDefaultStyleObject();
            _.caller = this,
            _.clickMaskHandler = function() {
                t.hide(),
                e.onClose()
            },
            PopViewManager.getInstance().openView(t, _, this._data)
        },
        t.prototype.destroy = function() {
            this._data = null,
            e.prototype.destroy.call(this)
        },
        t
    } (BaseModule);
    e.OneKeyTheBestPop = t,
    __reflect(t.prototype, "oneKeyTheBestPop.OneKeyTheBestPop");
    var i = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t._priceList = [60, 150, 80, 150, 150, 30],
            t._defaultList = [["固执", "攻击", "速度"], ["固执", "攻击", "体力"], ["悠闲", "体力", "防御"], ["", "防御", "特防"], ["保守", "特攻", "速度"], ["固执", "特攻", "体力"], ["狂妄", "体力", "特防"]],
            t._curZheKou = 0,
            t._sum = 0,
            t._selectIdArr = [],
            t._selecData = 31,
            t.currPetId = 0,
            t.skinName = "OnekeythebestpopSkin",
            t
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.initView()
        },
        t.prototype.initView = function() {
            StatLogger.log("0526一键极品限时折扣", "打开一键超级极品面板", "2017运营活动"),
            this._info || (this._info = PetManager.infos[0]),
            this.showPetAnimate(),
            this.tx_petName.text = PetXMLInfo.getName(this._info.id),
            this.custom.visible = !1,
            this._customStudy = [0, 0, 0, 0, 0, 0],
            this._customNature = 25;
            this._info.defence <= this._info.s_d ? this._defaultList[3][0] = "狂妄": this._defaultList[3][0] = "悠闲";
            var e = this._defaultList[PetXMLInfo.getCharacterAttrParam(this._info.id)];
            this.type0.text = e[1],
            this.type1.text = e[2],
            this.nature.text = e[0],
            this.gr_pet.touchEnabled = this.gr_pet.touchChildren = !1,
            this.price.text = "590",
            this._totalPrice = 590,
            this.updateDiamond(),
            this.checkFreeTimes(),
            this.gr_zhekou.visible = !1,
            this.upDateView(),
            2873 == this._info.id || 3311 == this._info.id ? this.maxHpTx.text = String(32) : this.maxHpTx.text = String(20)
        },
        t.prototype.initialized = function() {
            e.prototype.initialized.call(this)
        },
        t.prototype.initEvents = function() {
            ImageButtonUtil.add(this.imge_btnclose, this.onTouchIamgeButtonHandler, this),
            ImageButtonUtil.add(this.imge_btnBuy, this.onTouchIamgeButtonHandler, this),
            ImageButtonUtil.add(this.imge_btnFlash, this.onTouchIamgeButtonHandler, this),
            ImageButtonUtil.add(this.imge_btnSub_1, this.onTouchIamgeButtonHandler, this),
            ImageButtonUtil.add(this.imge_btnSub_2, this.onTouchIamgeButtonHandler, this);
            for (var e = 0; 6 > e; e++) this["bntcheck_" + e].name = "bntcheck_" + e,
            ImageButtonUtil.add(this["bntcheck_" + e], this.onTouchIamgeButtonHandler, this)
        },
        t.prototype.onTouch = function(e) {
            var t = e.target;
            BubblerManager.getInstance().showText(t.name)
        },
        t.prototype.removeEvents = function() {
            ImageButtonUtil.removeAll(this)
        },
        t.prototype.setData = function(t) {
            e.prototype.setData.call(this, t),
            this._myData = t,
            this._info = this._myData.petInfo
        },
        t.prototype.upDateView = function() {
            var e = this;
            this._totalPrice = 0;
            for (var t = 0; 6 > t; t++) BitUtil.getBit(this._selecData, t) > 0 ? (this["imge_flag_bg_" + t].source = 3 > t ? "onekeythebestpop_imge_flag_bg_selected_left_png": "onekeythebestpop_imge_flag_bg_selected_right_png", this["imge_flag_s_" + t].source = "onekeythebestpop_imge_flag_s_selected_png", this["imge_flag_" + t].visible = !0, this._totalPrice += this._priceList[t]) : (this["imge_flag_bg_" + t].source = 3 > t ? "onekeythebestpop_imge_flag_bg_noselected_left_png": "onekeythebestpop_imge_flag_bg_noselected_right_png", this["imge_flag_s_" + t].source = "onekeythebestpop_imge_flag_s_noselected_png", this["imge_flag_" + t].visible = !1);
            this.price.text = this._totalPrice.toString(),
            KTool.getMultiValue([15460],
            function(t) {
                var i = [9, 8, 7, 6, 5];
                t[0] > 0 && (e._curZheKou = i[t[0] - 1], e.gr_zhekou.visible = !0, e.tx_zhekou_num.text = e._curZheKou + "/折", e.actualPrice.text = String(e._totalPrice * e._curZheKou / 10))
            })
        },
        t.prototype.onTouchIamgeButtonHandler = function(e) {
            var t = this;
            if ("bntcheck" == e.currentTarget.name.split("_")[0]) {
                var i = e.currentTarget.name.split("_")[1];
                return void this.lightItem(i)
            }
            switch (e.target) {
            case this.imge_btnclose:
                this._myData.fun && this._myData.caller && this._myData.fun.apply(this._myData.caller, [null, !0]),
                this.hide(),
                ModuleManager.hideModule("oneKeyTheBestPop.OneKeyTheBestPop");
                break;
            case this.imge_btnBuy:
                if (PayManager.canPay()) if (BitUtil.getBit(this._selecData, 2) > 0 && this._exHp >= 20) {
                    if (2873 == this._info.id || 3311 == this._info.id) return void this.continueOneKey();
                    Alert.show("该精灵体力上限已超过20，一键极品该精灵体力上限将变为20，是否继续？",
                    function() {
                        t.continueOneKey()
                    })
                } else this.continueOneKey();
                else {
                    if (GameInfo.isChecking) return;
                    BubblerManager.getInstance().showText("暂未开放，敬请期待")
                }
                break;
            case this.imge_btnFlash:
                if (!PayManager.canPay()) {
                    if (GameInfo.isChecking) return;
                    BubblerManager.getInstance().showText("暂未开放，敬请期待")
                }
                break;
            case this.imge_btnSub_1:
                var _ = {
                    oldCustomStudy: this._customStudy,
                    fun: this.onOK,
                    caller: this
                };
                ModuleManager.showModule("learningAbilityInputPop", ["learning_ability_input_pop"], _, null, AppDoStyle.NULL);
                break;
            case this.imge_btnSub_2:
                ModuleManager.showModule("natureChoosePanel", ["nature_choose_panel"], {
                    petinfo: this._info,
                    callBack: function(e) {
                        t._customNature = e,
                        t.nature.text = NatureXMLInfo.getName(t._customNature)
                    },
                    caller: this
                },
                null, AppDoStyle.NULL)
            }
        },
        t.prototype.destroy = function() {
            ImageButtonUtil.removeAll(this),
            e.prototype.destroy.call(this)
        },
        t.prototype.onOK = function(e) {
            this._customStudy = e,
            this.custom.visible = !0
        },
        t.prototype.checkFreeTimes = function() {
            var e = this;
            ItemManager.upDateCollection(1400307,
            function() {
                e._freeTimes = ItemManager.getNumByID(1400307),
                e.tx_free.text = e._freeTimes.toString()
            }),
            PetManager.getPetExHp(this._info.catchTime,
            function(t) {
                e._exHp = t
            })
        },
        t.prototype.continueOneKey = function() {
            var e = this;
            this._sum = 0;
            var t = Number(this.price.text) / 10;
            Number(this.price.text) > 0 ? ItemManager.upDateCollection(1702426,
            function() {
                var i, _ = ItemManager.getNumByID(1702426);
                for (i = 0; 6 > i; i++) BitUtil.getBit(e._selecData, i) > 0 && (e._sum += Math.pow(2, i));
                _ >= t ? (e._sum += Math.pow(2, 7), e.doOneKey()) : e._freeTimes > 0 ? Alert.show("您拥有" + e._freeTimes + "次免费一键极品次数，点击确定本次将使用免费一键极品次数，点击取消本次将不使用。",
                function() {
                    e._freeTimes > 0 && (e._sum += Math.pow(2, 6)),
                    e.doOneKey()
                },
                function() {
                    e.notUseFreeBuy(_)
                }) : e.notUseFreeBuy(_)
            }) : Alarm.show("请点选需要变成极品的项目，支持多选！")
        },
        t.prototype.doOneKey = function() {
            var e = this;
            SocketConnection.sendByQueue(CommandID.ONE_KEY_201410, [this._info.catchTime, this._sum, this._customNature, this._customStudy[0], this._customStudy[1], this._customStudy[2], this._customStudy[3], this._customStudy[4], this._customStudy[5]],
            function() {
                PetManager.UpdateBagPetInfoAsynce(e._info.catchTime).then(function(t) {
                    e.successFun(t),
                    Alarm.show("恭喜您，" + TextFormatUtil.getRedTxt(e.tx_petName.text) + "一键极品成功！")
                }),
                e.touchEnabled = e.touchChildren = !0
            })
        },
        t.prototype.lightItem = function(e) {
            var t = this;
            BitUtil.getBit(this._selecData, e) > 0 ? Alert.show("是否要取消选择这一项！点击确认取消选择，点击取消保留！",
            function() {
                t._selecData = BitUtil.setBit0(t._selecData, e),
                t.upDateView()
            }) : (this._selecData = BitUtil.setBit(this._selecData, e), this.upDateView())
        },
        t.prototype.updateDiamond = function() {
            this.diamond.text = "0"
        },
        t.prototype.notUseFreeBuy = function(e) {
            var t = this;
            if (e > 0 || 0 == this._curZheKou) {
                this._sum += Math.pow(2, 7);
                var i = Number(this.price.text) / 10;
                Number(this.diamond.text) < Number(this.price.text) ? Alert.show("需要" + TextFormatUtil.getRedTxt(10 * (i - e) + "钻石") + "您的钻石数量不足, 是否立即兑换钻石！",
                function() {
                    BubblerManager.getInstance().showText("暂未开放，敬请期待")
                }) : (this.touchEnabled = this.touchChildren = !1, Alert.show("将使用" + TextFormatUtil.getRedTxt(10 * (i - e) + "钻石") + "将" + TextFormatUtil.getRedTxt(PetXMLInfo.getName(this._info.id)) + "升级成为至尊神宠。您现在拥有" + TextFormatUtil.getRedTxt(this.diamond.text) + "钻石。",
                function() {
                    KTool.buyProductByCallback(241554, i - e,
                    function() {
                        t.upDateView(),
                        t.doOneKey()
                    },
                    t,
                    function() {
                        t.touchEnabled = t.touchChildren = !0
                    },
                    !0)
                },
                function() {
                    t.touchEnabled = t.touchChildren = !0
                }))
            } else this.zheKouBuy()
        },
        t.prototype.zheKouBuy = function() {
            var e = this,
            t = Number(this.price.text) * this._curZheKou / 10;
            ItemManager.upDateCollection(1713519,
            function() {
                var i = ItemManager.getNumByID(1713519);
                i >= t ? e.doOneKey() : Number(e.diamond.text) < t ? Alert.show("需要" + TextFormatUtil.getRedTxt(t - i + "钻石") + "您的钻石数量不足, 是否立即兑换钻石！",
                function() {
                    BubblerManager.getInstance().showText("暂未开放，敬请期待")
                }) : (e.touchEnabled = e.touchChildren = !1, Alert.show("将使用" + TextFormatUtil.getRedTxt(t - i + "钻石") + "将" + TextFormatUtil.getRedTxt(PetXMLInfo.getName(e._info.id)) + "升级成为至尊神宠。您现在拥有" + TextFormatUtil.getRedTxt(e.diamond.text) + "钻石。",
                function() {
                    KTool.buyProductByCallback(250742, t - i,
                    function() {
                        e.upDateView(),
                        e.doOneKey()
                    },
                    e,
                    function() {
                        e.touchEnabled = e.touchChildren = !0
                    })
                },
                function() {
                    e.touchEnabled = e.touchChildren = !0
                }))
            })
        },
        t.prototype.successFun = function(e) {
            this._myData.fun && this._myData.caller && this._myData.fun.apply(this._myData.caller, [e]),
            this.hide(),
            ModuleManager.hideModule("oneKeyTheBestPop.OneKeyTheBestPop")
        },
        t.prototype.showPetAnimate = function() {
            if (this.currPetId = 0, this.pet.removeChildren(), CjsUtil.setContainer(this.pet), this._info) {
                CjsUtil.disposePetCls(this.currPetId),
                this.currPetId = this._info.id,
                CjsUtil.init(),
                CjsUtil.setContainer(this.pet);
                var e = this._info.id;
                this._info.skinId > 0 && (e = PetSkinXMLInfo.getSkinInfo(this._info.skinId).skinPetId),
                this.currPetId = e,
                CjsUtil.GetShowPetMovieClip(e).then(function(t) {
                    CjsUtil.showAnimate(t);
                    var i = PetXMLInfo.getPetOffset(e);
                    t && (t.regX = i.x, t.regY = i.y)
                })
            }
        },
        t
    } (PopView);
    e.OneKeyTheBestPopView = i,
    __reflect(i.prototype, "oneKeyTheBestPop.OneKeyTheBestPopView")
} (oneKeyTheBestPop || (oneKeyTheBestPop = {}));
var __extends = this && this.__extends ||
function(e, t) {
    function i() {
        this.constructor = e
    }
    for (var _ in t) t.hasOwnProperty(_) && (e[_] = t[_]);
    i.prototype = t.prototype,
    e.prototype = new i
};
window.generateEUI = window.generateEUI || {},
generateEUI.paths = generateEUI.paths || {},
generateEUI.styles = void 0,
generateEUI.skins = {},
generateEUI.paths["resource/eui_skins/OnekeythebestpopSkin.exml"] = window.OnekeythebestpopSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["imge_mask", "imge_bg", "pet", "gr_pet", "imge_txtbg", "imge_tx_jiang", "tx_petName", "tx_title", "img_jiantou", "imge_d342343", "txtbg", "tx_desc", "imge_btnFlash", "icon_212", "tx_glod_title", "diamond", "bg_565656", "tx_price_title", "tx_price_title0", "price", "bg_5656565656", "tx_zhekou_title_0", "tx_zhekou_num", "tx_zhekou_title_1", "actualPrice", "tx_zhekou_title_2", "gr_zhekou", "imge_item_bg_2", "imge_jiantou_2", "maxHpTx", "imge_icon_2", "imge_tx_title_2", "imge_flag_bg_2", "imge_flag_s_2", "imge_flag_2", "bntcheck_2", "item_2", "imge_item_bg_1", "imge_jiantou_1", "tx_num_1", "imge_icon_1", "imge_tx_title_1", "imge_flag_bg_1", "imge_flag_s_1", "imge_flag_1", "bntcheck_1", "item_1", "imge_item_bg_left", "imge_jiantou_left", "tx_num_0", "imge_icon_0", "imge_tx_title_0", "imge_flag_bg_0", "imge_flag_s_0", "imge_flag_0", "bntcheck_0", "item_0", "imge_item_bg_5", "imge_jiantou_right_5", "tx_randomTx", "imge_icon_5", "imge_tx_title_5", "imge_flag_bg_5", "imge_flag_s_5", "imge_flag_5", "bntcheck_5", "item_5", "imge_item_bg_4", "nature", "imge_icon_4", "imge_tx_title_4", "imge_btnSub_2", "imge_flag_bg_4", "imge_flag_s_4", "imge_flag_4", "bntcheck_4", "item_4", "imge_item_bg_right", "imge_jiantou_right_1", "imge_jiantou_right", "type1", "type0", "imge_icon_3", "imge_tx_title_3", "imge_flag_bg_3", "imge_flag_s_3", "imge_flag_3", "bntcheck_3", "imge_btnSub_1", "custom", "item_3", "tx_free_titile", "tx_free", "imge_btnBuy", "imge_btnclose", "imge_glod_cion_0", "jipin"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.imge_mask_i(), this.jipin_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i.imge_mask_i = function() {
        var e = new eui.Image;
        return this.imge_mask = e,
        e.alpha = .8,
        e.left = 0,
        e.name = "imge_mask",
        e.right = 0,
        e.source = "common_full_black_mask_png",
        e.visible = !1,
        e.y = 0,
        e
    },
    i.jipin_i = function() {
        var e = new eui.Group;
        return this.jipin = e,
        e.horizontalCenter = 56,
        e.name = "jipin",
        e.elementsContent = [this.imge_bg_i(), this.gr_pet_i(), this.imge_txtbg_i(), this.imge_tx_jiang_i(), this.tx_petName_i(), this.tx_title_i(), this.img_jiantou_i(), this.imge_d342343_i(), this.txtbg_i(), this.tx_desc_i(), this.imge_btnFlash_i(), this.icon_212_i(), this.tx_glod_title_i(), this.diamond_i(), this._Group1_i(), this.gr_zhekou_i(), this.item_2_i(), this.item_1_i(), this.item_0_i(), this.item_5_i(), this.item_4_i(), this.item_3_i(), this.tx_free_titile_i(), this.tx_free_i(), this.imge_btnBuy_i(), this.imge_btnclose_i(), this.imge_glod_cion_0_i()],
        e
    },
    i.imge_bg_i = function() {
        var e = new eui.Image;
        return this.imge_bg = e,
        e.source = "onekeythebestpop_imge_bg_png",
        e.x = 154,
        e.y = 263,
        e
    },
    i.gr_pet_i = function() {
        var e = new eui.Group;
        return this.gr_pet = e,
        e.anchorOffsetX = 0,
        e.anchorOffsetY = 0,
        e.height = 640,
        e.horizontalCenter = -43,
        e.verticalCenter = 10,
        e.width = 760,
        e.elementsContent = [this.pet_i()],
        e
    },
    i.pet_i = function() {
        var e = new eui.Group;
        return this.pet = e,
        e.anchorOffsetX = 0,
        e.anchorOffsetY = 0,
        e.height = 0,
        e.scaleX = 1,
        e.scaleY = 1,
        e.width = 0,
        e.x = 420,
        e.y = 329,
        e
    },
    i.imge_txtbg_i = function() {
        var e = new eui.Image;
        return this.imge_txtbg = e,
        e.source = "onekeythebestpop_imge_txtbg_png",
        e.x = 173,
        e.y = 104,
        e
    },
    i.imge_tx_jiang_i = function() {
        var e = new eui.Image;
        return this.imge_tx_jiang = e,
        e.source = "onekeythebestpop_imge_tx_jiang_png",
        e.x = 224,
        e.y = 101,
        e
    },
    i.tx_petName_i = function() {
        var e = new eui.Label;
        return this.tx_petName = e,
        e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "精灵精灵名字名字",
        e.textColor = 16777215,
        e.x = 267,
        e.y = 113,
        e
    },
    i.tx_title_i = function() {
        var e = new eui.Image;
        return this.tx_title = e,
        e.source = "onekeythebestpop_tx_title_png",
        e.x = 178,
        e.y = 0,
        e
    },
    i.img_jiantou_i = function() {
        var e = new eui.Image;
        return this.img_jiantou = e,
        e.source = "onekeythebestpop_img_jiantou_png",
        e.x = 181,
        e.y = 101,
        e
    },
    i.imge_d342343_i = function() {
        var e = new eui.Image;
        return this.imge_d342343 = e,
        e.source = "onekeythebestpop_imge_d342343_png",
        e.x = 437,
        e.y = 95,
        e
    },
    i.txtbg_i = function() {
        var e = new eui.Image;
        return this.txtbg = e,
        e.source = "onekeythebestpop_txtbg_png",
        e.x = 123,
        e.y = 515,
        e
    },
    i.tx_desc_i = function() {
        var e = new eui.Label;
        return this.tx_desc = e,
        e.fontFamily = "MFShangHei",
        e.size = 17,
        e.text = "点击      勾选各项极品能力，确认成为超级极品！",
        e.textColor = 16777215,
        e.x = 124,
        e.y = 519,
        e
    },
    i.imge_btnFlash_i = function() {
        var e = new eui.Image;
        return this.imge_btnFlash = e,
        e.source = "onekeythebestpop_imge_btnflash_png",
        e.x = 733,
        e.y = 513,
        e
    },
    i.icon_212_i = function() {
        var e = new eui.Image;
        return this.icon_212 = e,
        e.source = "onekeythebestpop_icon_212_png",
        e.x = 158,
        e.y = 513,
        e
    },
    i.tx_glod_title_i = function() {
        var e = new eui.Label;
        return this.tx_glod_title = e,
        e.fontFamily = "MFShangHei",
        e.size = 17,
        e.text = "您现在拥有钻石：",
        e.textColor = 16777215,
        e.x = 544,
        e.y = 519,
        e
    },
    i.diamond_i = function() {
        var e = new eui.Label;
        return this.diamond = e,
        e.fontFamily = "MFShangHei",
        e.size = 17,
        e.text = "2218999",
        e.textColor = 16774499,
        e.x = 673,
        e.y = 518,
        e
    },
    i._Group1_i = function() {
        var e = new eui.Group;
        return e.anchorOffsetX = 0,
        e.anchorOffsetY = 0,
        e.height = 28,
        e.width = 183,
        e.x = 360.5,
        e.y = 462,
        e.elementsContent = [this.bg_565656_i(), this.tx_price_title_i(), this.tx_price_title0_i(), this.price_i(), this._Image1_i()],
        e
    },
    i.bg_565656_i = function() {
        var e = new eui.Image;
        return this.bg_565656 = e,
        e.height = 30,
        e.source = "onekeythebestpop_txtbg_png",
        e.width = 180,
        e.x = 0,
        e.y = -1,
        e
    },
    i.tx_price_title_i = function() {
        var e = new eui.Label;
        return this.tx_price_title = e,
        e.fontFamily = "MFShangHei",
        e.scaleX = 1,
        e.scaleY = 1,
        e.size = 17,
        e.text = "使用",
        e.textColor = 16774499,
        e.x = 17,
        e.y = 5,
        e
    },
    i.tx_price_title0_i = function() {
        var e = new eui.Label;
        return this.tx_price_title0 = e,
        e.fontFamily = "MFShangHei",
        e.scaleX = 1,
        e.scaleY = 1,
        e.size = 17,
        e.text = "钻石",
        e.textColor = 16774499,
        e.x = 136,
        e.y = 5,
        e
    },
    i.price_i = function() {
        var e = new eui.Label;
        return this.price = e,
        e.fontFamily = "MFShangHei",
        e.scaleX = 1,
        e.scaleY = 1,
        e.size = 17,
        e.text = "9999",
        e.textColor = 16774499,
        e.x = 95.5,
        e.y = 5,
        e
    },
    i._Image1_i = function() {
        var e = new eui.Image;
        return e.height = 30,
        e.source = "onekeythebestpop_imge_icon_glod_png",
        e.width = 30,
        e.x = 57,
        e.y = -1,
        e
    },
    i.gr_zhekou_i = function() {
        var e = new eui.Group;
        return this.gr_zhekou = e,
        e.anchorOffsetX = 0,
        e.anchorOffsetY = 0,
        e.height = 30,
        e.width = 294,
        e.x = 312,
        e.y = 486,
        e.elementsContent = [this.bg_5656565656_i(), this.tx_zhekou_title_0_i(), this.tx_zhekou_num_i(), this.tx_zhekou_title_1_i(), this.actualPrice_i(), this.tx_zhekou_title_2_i()],
        e
    },
    i.bg_5656565656_i = function() {
        var e = new eui.Image;
        return this.bg_5656565656 = e,
        e.height = 30,
        e.source = "onekeythebestpop_txtbg_png",
        e.width = 300,
        e.x = 0,
        e.y = 0,
        e
    },
    i.tx_zhekou_title_0_i = function() {
        var e = new eui.Label;
        return this.tx_zhekou_title_0 = e,
        e.fontFamily = "MFShangHei",
        e.scaleX = 1,
        e.scaleY = 1,
        e.size = 17,
        e.text = "当前折扣：",
        e.textColor = 16774499,
        e.x = 17,
        e.y = 7,
        e
    },
    i.tx_zhekou_num_i = function() {
        var e = new eui.Label;
        return this.tx_zhekou_num = e,
        e.fontFamily = "MFShangHei",
        e.scaleX = 1,
        e.scaleY = 1,
        e.size = 17,
        e.text = "9折",
        e.textColor = 16774499,
        e.x = 97,
        e.y = 7,
        e
    },
    i.tx_zhekou_title_1_i = function() {
        var e = new eui.Label;
        return this.tx_zhekou_title_1 = e,
        e.fontFamily = "MFShangHei",
        e.scaleX = 1,
        e.scaleY = 1,
        e.size = 17,
        e.text = "折后价格：",
        e.textColor = 16774499,
        e.x = 134,
        e.y = 7,
        e
    },
    i.actualPrice_i = function() {
        var e = new eui.Label;
        return this.actualPrice = e,
        e.fontFamily = "MFShangHei",
        e.scaleX = 1,
        e.scaleY = 1,
        e.size = 17,
        e.text = "999",
        e.textColor = 16774499,
        e.x = 219,
        e.y = 7,
        e
    },
    i.tx_zhekou_title_2_i = function() {
        var e = new eui.Label;
        return this.tx_zhekou_title_2 = e,
        e.fontFamily = "MFShangHei",
        e.scaleX = 1,
        e.scaleY = 1,
        e.size = 17,
        e.text = "钻石",
        e.textColor = 16774499,
        e.x = 247,
        e.y = 7,
        e
    },
    i.item_2_i = function() {
        var e = new eui.Group;
        return this.item_2 = e,
        e.x = 0,
        e.y = 408,
        e.elementsContent = [this.imge_item_bg_2_i(), this.imge_jiantou_2_i(), this.maxHpTx_i(), this.imge_icon_2_i(), this.imge_tx_title_2_i(), this.bntcheck_2_i()],
        e
    },
    i.imge_item_bg_2_i = function() {
        var e = new eui.Image;
        return this.imge_item_bg_2 = e,
        e.source = "onekeythebestpop_imge_item_bg_left_png",
        e.x = 0,
        e.y = 28,
        e
    },
    i.imge_jiantou_2_i = function() {
        var e = new eui.Image;
        return this.imge_jiantou_2 = e,
        e.source = "onekeythebestpop_imge_jiantou_left_png",
        e.x = 130,
        e.y = 51,
        e
    },
    i.maxHpTx_i = function() {
        var e = new eui.Label;
        return this.maxHpTx = e,
        e.fontFamily = "REEJI",
        e.size = 20,
        e.text = "20",
        e.textColor = 16774500,
        e.x = 100,
        e.y = 52,
        e
    },
    i.imge_icon_2_i = function() {
        var e = new eui.Image;
        return this.imge_icon_2 = e,
        e.source = "onekeythebestpop_imge_icon_2_png",
        e.x = 138,
        e.y = 12,
        e
    },
    i.imge_tx_title_2_i = function() {
        var e = new eui.Image;
        return this.imge_tx_title_2 = e,
        e.source = "onekeythebestpop_imge_tx_title_2_png",
        e.x = 4,
        e.y = 20,
        e
    },
    i.bntcheck_2_i = function() {
        var e = new eui.Group;
        return this.bntcheck_2 = e,
        e.x = 135,
        e.y = -4,
        e.elementsContent = [this.imge_flag_bg_2_i(), this.imge_flag_s_2_i(), this.imge_flag_2_i()],
        e
    },
    i.imge_flag_bg_2_i = function() {
        var e = new eui.Image;
        return this.imge_flag_bg_2 = e,
        e.source = "onekeythebestpop_imge_flag_bg_noselected_left_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.imge_flag_s_2_i = function() {
        var e = new eui.Image;
        return this.imge_flag_s_2 = e,
        e.source = "onekeythebestpop_imge_flag_s_noselected_png",
        e.x = 62,
        e.y = 25,
        e
    },
    i.imge_flag_2_i = function() {
        var e = new eui.Image;
        return this.imge_flag_2 = e,
        e.source = "onekeythebestpop_imge_flag_selected_png",
        e.x = 50,
        e.y = 68,
        e
    },
    i.item_1_i = function() {
        var e = new eui.Group;
        return this.item_1 = e,
        e.x = 0,
        e.y = 292,
        e.elementsContent = [this.imge_item_bg_1_i(), this.imge_jiantou_1_i(), this.tx_num_1_i(), this.imge_icon_1_i(), this.imge_tx_title_1_i(), this.bntcheck_1_i()],
        e
    },
    i.imge_item_bg_1_i = function() {
        var e = new eui.Image;
        return this.imge_item_bg_1 = e,
        e.source = "onekeythebestpop_imge_item_bg_left_png",
        e.x = 0,
        e.y = 27,
        e
    },
    i.imge_jiantou_1_i = function() {
        var e = new eui.Image;
        return this.imge_jiantou_1 = e,
        e.source = "onekeythebestpop_imge_jiantou_left_png",
        e.x = 130,
        e.y = 50,
        e
    },
    i.tx_num_1_i = function() {
        var e = new eui.Label;
        return this.tx_num_1 = e,
        e.fontFamily = "REEJI",
        e.size = 20,
        e.text = "31",
        e.textColor = 16774500,
        e.x = 106,
        e.y = 51,
        e
    },
    i.imge_icon_1_i = function() {
        var e = new eui.Image;
        return this.imge_icon_1 = e,
        e.source = "onekeythebestpop_imge_icon_1_png",
        e.x = 139,
        e.y = 6,
        e
    },
    i.imge_tx_title_1_i = function() {
        var e = new eui.Image;
        return this.imge_tx_title_1 = e,
        e.source = "onekeythebestpop_imge_tx_title_1_png",
        e.x = 46,
        e.y = 20,
        e
    },
    i.bntcheck_1_i = function() {
        var e = new eui.Group;
        return this.bntcheck_1 = e,
        e.x = 135,
        e.y = -5,
        e.elementsContent = [this.imge_flag_bg_1_i(), this.imge_flag_s_1_i(), this.imge_flag_1_i()],
        e
    },
    i.imge_flag_bg_1_i = function() {
        var e = new eui.Image;
        return this.imge_flag_bg_1 = e,
        e.source = "onekeythebestpop_imge_flag_bg_noselected_left_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.imge_flag_s_1_i = function() {
        var e = new eui.Image;
        return this.imge_flag_s_1 = e,
        e.source = "onekeythebestpop_imge_flag_s_noselected_png",
        e.x = 62,
        e.y = 25,
        e
    },
    i.imge_flag_1_i = function() {
        var e = new eui.Image;
        return this.imge_flag_1 = e,
        e.source = "onekeythebestpop_imge_flag_selected_png",
        e.x = 48,
        e.y = 66,
        e
    },
    i.item_0_i = function() {
        var e = new eui.Group;
        return this.item_0 = e,
        e.x = 0,
        e.y = 148,
        e.elementsContent = [this.imge_item_bg_left_i(), this.imge_jiantou_left_i(), this.tx_num_0_i(), this.imge_icon_0_i(), this.imge_tx_title_0_i(), this.bntcheck_0_i()],
        e
    },
    i.imge_item_bg_left_i = function() {
        var e = new eui.Image;
        return this.imge_item_bg_left = e,
        e.source = "onekeythebestpop_imge_item_bg_left_png",
        e.x = 0,
        e.y = 54,
        e
    },
    i.imge_jiantou_left_i = function() {
        var e = new eui.Image;
        return this.imge_jiantou_left = e,
        e.source = "onekeythebestpop_imge_jiantou_left_png",
        e.x = 130,
        e.y = 77,
        e
    },
    i.tx_num_0_i = function() {
        var e = new eui.Label;
        return this.tx_num_0 = e,
        e.fontFamily = "REEJI",
        e.size = 20,
        e.text = "100",
        e.textColor = 16774500,
        e.x = 90,
        e.y = 78,
        e
    },
    i.imge_icon_0_i = function() {
        var e = new eui.Image;
        return this.imge_icon_0 = e,
        e.source = "onekeythebestpop_imge_icon_0_png",
        e.x = 137,
        e.y = 30,
        e
    },
    i.imge_tx_title_0_i = function() {
        var e = new eui.Image;
        return this.imge_tx_title_0 = e,
        e.source = "onekeythebestpop_imge_tx_title_0_png",
        e.x = 46,
        e.y = 46,
        e
    },
    i.bntcheck_0_i = function() {
        var e = new eui.Group;
        return this.bntcheck_0 = e,
        e.anchorOffsetY = 0,
        e.height = 120,
        e.name = "bntcheck_0",
        e.x = 135,
        e.y = 21,
        e.elementsContent = [this.imge_flag_bg_0_i(), this.imge_flag_s_0_i(), this.imge_flag_0_i()],
        e
    },
    i.imge_flag_bg_0_i = function() {
        var e = new eui.Image;
        return this.imge_flag_bg_0 = e,
        e.source = "onekeythebestpop_imge_flag_bg_selected_left_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.imge_flag_s_0_i = function() {
        var e = new eui.Image;
        return this.imge_flag_s_0 = e,
        e.source = "onekeythebestpop_imge_flag_s_selected_png",
        e.x = 62,
        e.y = 25,
        e
    },
    i.imge_flag_0_i = function() {
        var e = new eui.Image;
        return this.imge_flag_0 = e,
        e.source = "onekeythebestpop_imge_flag_selected_png",
        e.x = 50,
        e.y = 80,
        e
    },
    i.item_5_i = function() {
        var e = new eui.Group;
        return this.item_5 = e,
        e.x = 624,
        e.y = 408,
        e.elementsContent = [this.imge_item_bg_5_i(), this.imge_jiantou_right_5_i(), this.tx_randomTx_i(), this.imge_icon_5_i(), this.imge_tx_title_5_i(), this.bntcheck_5_i()],
        e
    },
    i.imge_item_bg_5_i = function() {
        var e = new eui.Image;
        return this.imge_item_bg_5 = e,
        e.source = "onekeythebestpop_imge_item_bg_right_1_png",
        e.x = 70,
        e.y = 28,
        e
    },
    i.imge_jiantou_right_5_i = function() {
        var e = new eui.Image;
        return this.imge_jiantou_right_5 = e,
        e.source = "onekeythebestpop_imge_jiantou_right_png",
        e.x = 120,
        e.y = 51,
        e
    },
    i.tx_randomTx_i = function() {
        var e = new eui.Label;
        return this.tx_randomTx = e,
        e.fontFamily = "REEJI",
        e.size = 20,
        e.text = "随机生成",
        e.textColor = 16774500,
        e.x = 147,
        e.y = 51,
        e
    },
    i.imge_icon_5_i = function() {
        var e = new eui.Image;
        return this.imge_icon_5 = e,
        e.source = "onekeythebestpop_imge_icon_5_png",
        e.x = 94,
        e.y = 8,
        e
    },
    i.imge_tx_title_5_i = function() {
        var e = new eui.Image;
        return this.imge_tx_title_5 = e,
        e.source = "onekeythebestpop_imge_tx_title_5_png",
        e.x = 135,
        e.y = 20,
        e
    },
    i.bntcheck_5_i = function() {
        var e = new eui.Group;
        return this.bntcheck_5 = e,
        e.x = -16,
        e.y = -2,
        e.elementsContent = [this.imge_flag_bg_5_i(), this.imge_flag_s_5_i(), this.imge_flag_5_i()],
        e
    },
    i.imge_flag_bg_5_i = function() {
        var e = new eui.Image;
        return this.imge_flag_bg_5 = e,
        e.source = "onekeythebestpop_imge_flag_bg_noselected_right_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.imge_flag_s_5_i = function() {
        var e = new eui.Image;
        return this.imge_flag_s_5 = e,
        e.source = "onekeythebestpop_imge_flag_s_noselected_png",
        e.x = 47,
        e.y = 25,
        e
    },
    i.imge_flag_5_i = function() {
        var e = new eui.Image;
        return this.imge_flag_5 = e,
        e.source = "onekeythebestpop_imge_flag_selected_png",
        e.x = 29,
        e.y = 65,
        e
    },
    i.item_4_i = function() {
        var e = new eui.Group;
        return this.item_4 = e,
        e.x = 624,
        e.y = 292,
        e.elementsContent = [this.imge_item_bg_4_i(), this.nature_i(), this.imge_icon_4_i(), this.imge_tx_title_4_i(), this.imge_btnSub_2_i(), this.bntcheck_4_i()],
        e
    },
    i.imge_item_bg_4_i = function() {
        var e = new eui.Image;
        return this.imge_item_bg_4 = e,
        e.source = "onekeythebestpop_imge_item_bg_right_1_png",
        e.x = 70,
        e.y = 27,
        e
    },
    i.nature_i = function() {
        var e = new eui.Label;
        return this.nature = e,
        e.fontFamily = "REEJI",
        e.size = 20,
        e.text = "固执",
        e.textColor = 16774500,
        e.x = 147,
        e.y = 50,
        e
    },
    i.imge_icon_4_i = function() {
        var e = new eui.Image;
        return this.imge_icon_4 = e,
        e.source = "onekeythebestpop_imge_icon_4_png",
        e.x = 94,
        e.y = 8,
        e
    },
    i.imge_tx_title_4_i = function() {
        var e = new eui.Image;
        return this.imge_tx_title_4 = e,
        e.source = "onekeythebestpop_imge_tx_title_4_png",
        e.x = 135,
        e.y = 20,
        e
    },
    i.imge_btnSub_2_i = function() {
        var e = new eui.Image;
        return this.imge_btnSub_2 = e,
        e.source = "onekeythebestpop_imge_btnsub_1_png",
        e.x = 258,
        e.y = 15,
        e
    },
    i.bntcheck_4_i = function() {
        var e = new eui.Group;
        return this.bntcheck_4 = e,
        e.x = -15,
        e.y = -2,
        e.elementsContent = [this.imge_flag_bg_4_i(), this.imge_flag_s_4_i(), this.imge_flag_4_i()],
        e
    },
    i.imge_flag_bg_4_i = function() {
        var e = new eui.Image;
        return this.imge_flag_bg_4 = e,
        e.source = "onekeythebestpop_imge_flag_bg_noselected_right_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.imge_flag_s_4_i = function() {
        var e = new eui.Image;
        return this.imge_flag_s_4 = e,
        e.source = "onekeythebestpop_imge_flag_s_noselected_png",
        e.x = 47,
        e.y = 25,
        e
    },
    i.imge_flag_4_i = function() {
        var e = new eui.Image;
        return this.imge_flag_4 = e,
        e.source = "onekeythebestpop_imge_flag_selected_png",
        e.x = 30,
        e.y = 65,
        e
    },
    i.item_3_i = function() {
        var e = new eui.Group;
        return this.item_3 = e,
        e.x = 608,
        e.y = 148,
        e.elementsContent = [this.imge_item_bg_right_i(), this.imge_jiantou_right_1_i(), this.imge_jiantou_right_i(), this.type1_i(), this._Label1_i(), this.type0_i(), this._Label2_i(), this.imge_icon_3_i(), this.imge_tx_title_3_i(), this.bntcheck_3_i(), this.imge_btnSub_1_i(), this.custom_i()],
        e
    },
    i.imge_item_bg_right_i = function() {
        var e = new eui.Image;
        return this.imge_item_bg_right = e,
        e.source = "onekeythebestpop_imge_item_bg_right_png",
        e.x = 63,
        e.y = 54,
        e
    },
    i.imge_jiantou_right_1_i = function() {
        var e = new eui.Image;
        return this.imge_jiantou_right_1 = e,
        e.source = "onekeythebestpop_imge_jiantou_right_png",
        e.x = 136,
        e.y = 76,
        e
    },
    i.imge_jiantou_right_i = function() {
        var e = new eui.Image;
        return this.imge_jiantou_right = e,
        e.source = "onekeythebestpop_imge_jiantou_right_png",
        e.x = 136,
        e.y = 93,
        e
    },
    i.type1_i = function() {
        var e = new eui.Label;
        return this.type1 = e,
        e.fontFamily = "REEJI",
        e.size = 17,
        e.text = "速度 ",
        e.textColor = 16774500,
        e.x = 161,
        e.y = 95,
        e
    },
    i._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "REEJI",
        e.size = 17,
        e.text = "255",
        e.textColor = 16774500,
        e.x = 207,
        e.y = 95,
        e
    },
    i.type0_i = function() {
        var e = new eui.Label;
        return this.type0 = e,
        e.fontFamily = "REEJI",
        e.size = 17,
        e.text = "攻击 ",
        e.textColor = 16774500,
        e.x = 161,
        e.y = 78,
        e
    },
    i._Label2_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "REEJI",
        e.size = 17,
        e.text = "255",
        e.textColor = 16774500,
        e.x = 207,
        e.y = 78,
        e
    },
    i.imge_icon_3_i = function() {
        var e = new eui.Image;
        return this.imge_icon_3 = e,
        e.source = "onekeythebestpop_imge_icon_3_png",
        e.x = 110,
        e.y = 34,
        e
    },
    i.imge_tx_title_3_i = function() {
        var e = new eui.Image;
        return this.imge_tx_title_3 = e,
        e.source = "onekeythebestpop_imge_tx_title_3_png",
        e.x = 150,
        e.y = 46,
        e
    },
    i.bntcheck_3_i = function() {
        var e = new eui.Group;
        return this.bntcheck_3 = e,
        e.x = 0,
        e.y = 22,
        e.elementsContent = [this.imge_flag_bg_3_i(), this.imge_flag_s_3_i(), this.imge_flag_3_i()],
        e
    },
    i.imge_flag_bg_3_i = function() {
        var e = new eui.Image;
        return this.imge_flag_bg_3 = e,
        e.source = "onekeythebestpop_imge_flag_bg_selected_right_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.imge_flag_s_3_i = function() {
        var e = new eui.Image;
        return this.imge_flag_s_3 = e,
        e.source = "onekeythebestpop_imge_flag_s_selected_png",
        e.x = 47,
        e.y = 25,
        e
    },
    i.imge_flag_3_i = function() {
        var e = new eui.Image;
        return this.imge_flag_3 = e,
        e.source = "onekeythebestpop_imge_flag_selected_png",
        e.x = 32,
        e.y = 77,
        e
    },
    i.imge_btnSub_1_i = function() {
        var e = new eui.Image;
        return this.imge_btnSub_1 = e,
        e.source = "onekeythebestpop_imge_btnsub_1_png",
        e.x = 274,
        e.y = 42,
        e
    },
    i.custom_i = function() {
        var e = new eui.Group;
        return this.custom = e,
        e.anchorOffsetX = 0,
        e.anchorOffsetY = 0,
        e.height = 36,
        e.width = 156,
        e.x = 109,
        e.y = 78,
        e.elementsContent = [this._Image2_i(), this._Label3_i()],
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.height = 35,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "onekeythebestpop_txtbg_png",
        e.width = 160,
        e.x = 0,
        e.y = -1,
        e
    },
    i._Label3_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "REEJI",
        e.height = 29,
        e.scaleX = 1,
        e.scaleY = 1,
        e.size = 28,
        e.text = "自定义完成",
        e.textColor = 16774500,
        e.x = 10,
        e.y = 2,
        e
    },
    i.tx_free_titile_i = function() {
        var e = new eui.Label;
        return this.tx_free_titile = e,
        e.fontFamily = "MFShangHei",
        e.size = 17,
        e.text = "拥有免费一键极品次数：",
        e.textColor = 6153561,
        e.x = 350,
        e.y = 594,
        e
    },
    i.tx_free_i = function() {
        var e = new eui.Label;
        return this.tx_free = e,
        e.fontFamily = "MFShangHei",
        e.size = 17,
        e.text = "00",
        e.textColor = 6153561,
        e.x = 533,
        e.y = 594,
        e
    },
    i.imge_btnBuy_i = function() {
        var e = new eui.Image;
        return this.imge_btnBuy = e,
        e.horizontalCenter = -41.5,
        e.source = "onekeythebestpop_imge_btnbuy_png",
        e.y = 545,
        e
    },
    i.imge_btnclose_i = function() {
        var e = new eui.Image;
        return this.imge_btnclose = e,
        e.source = "title_pop_2022_btnclose_png",
        e.x = 951,
        e.y = 10,
        e
    },
    i.imge_glod_cion_0_i = function() {
        var e = new eui.Image;
        return this.imge_glod_cion_0 = e,
        e.height = 30,
        e.source = "onekeythebestpop_imge_icon_glod_png",
        e.width = 30,
        e.x = 514,
        e.y = 512,
        e
    },
    t
} (eui.Skin);