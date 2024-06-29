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
pveStarTrek; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t.arrItem = [1400153, 1400152],
            t.skinName = "StarTrekMainPanelSkin",
            t.grpStatic.cacheAsBitmap = !0,
            t
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            this.init(),
            this.addEvent()
        },
        i.prototype.init = function() {
            var e = this;
            this.initBtnClose("pve_star_trek_title1_png", this,
            function() {
                e.service.closeModule()
            },
            this),
            this.initBtnHelpById(1),
            this.imgItem1.source = ClientConfig.getItemIcon(this.arrItem[0]),
            this.imgItem2.source = ClientConfig.getItemIcon(this.arrItem[1]),
            this.imgItem3.source = ClientConfig.getItemIcon(2500005),
            this.service.registerItemUpdateForText(this.arrItem[0], this.txtItem1, this),
            this.service.registerItemUpdateForText(this.arrItem[1], this.txtItem2, this);
            for (var i = [[1706927, 100], [1706928, 100], [1706926, 3], [1706925, 4], [1706924, 4], [1706826, 6]], n = 0, r = i; n < r.length; n++) {
                var o = r[n],
                a = new t.MainPanelAwardItem;
                this.groupAward.addChild(a),
                a.setItemInfo(o[0], o[1])
            }
        },
        i.prototype.addEvent = function() {
            var e = this;
            ImageButtonUtil.add(this.imgItem1,
            function() {
                tipsPop.TipsPop.openItemPop({
                    id: e.arrItem[0]
                })
            },
            this),
            ImageButtonUtil.add(this.imgItem2,
            function() {
                tipsPop.TipsPop.openItemPop({
                    id: e.arrItem[1]
                })
            },
            this),
            ImageButtonUtil.add(this.imgItem3,
            function() {
                tipsPop.TipsPop.openItemPop({
                    id: 2500005
                })
            },
            this),
            ImageButtonUtil.add(this.btnStart,
            function() {
                var i = e.service.getValue(121559) > 0;
                i ? Alert.show("您当前已成功通关星际迷航，是否确认消耗【记忆作战模组】*1进行扫荡，并直接获得通关奖励",
                function() {
                    SocketConnection.sendByQueue(42395, [114, 15, 0, 0],
                    function() {
                        e.updateValues()
                    })
                },
                function() {
                    SocketConnection.sendByQueue(42395, [114, 1, 0, 0],
                    function() {
                        e.service.updateValues().then(function() {
                            e.service.openPanel(t.PanelConst.PREPARE_PANEL)
                        })
                    })
                }) : SocketConnection.sendByQueue(42395, [114, 1, 0, 0],
                function() {
                    e.service.updateValues().then(function() {
                        e.service.openPanel(t.PanelConst.PREPARE_PANEL)
                    })
                })
            },
            this),
            ImageButtonUtil.add(this.btnContinue,
            function() {
                var i = e.service.getValue(20341);
                1 == i ? e.service.openPanel(t.PanelConst.PREPARE_PANEL) : e.service.openPanel(t.PanelConst.CHALLENGE_PANEL)
            },
            this),
            ImageButtonUtil.add(this.btnReset,
            function() {
                SocketConnection.sendByQueue(42129, [20230130, 0],
                function() {
                    e.updateValues(),
                    t.ChallengePanel.hasInit = !1,
                    t.ChallengePanel.arrUpCache = []
                })
            },
            this)
        },
        i.prototype.destroy = function() {
            this.service.unregisterItems(this);
            for (var t = 0; t < this.groupAward.numChildren; t++) {
                var i = this.groupAward.getChildAt(t);
                i.destroy()
            }
            e.prototype.destroy.call(this)
        },
        i.prototype.update = function() {
            this.txtItem3.text = ItemManager.getNumByID(2500005).toString(),
            this.txtTimes.text = 2 - this.service.getValue(20340) + "",
            this.btnReset.visible = this.btnContinue.visible = this.service.getValue(20341) > 0,
            this.btnStart.visible = 0 == this.service.getValue(20341) && this.service.getValue(20340) < 2,
            this.imgFinish.visible = 0 == this.service.getValue(20341) && 2 == this.service.getValue(20340);
            for (var t = 0; t < this.groupAward.numChildren; t++) {
                var e = this.groupAward.getChildAt(t);
                e.resetButton()
            }
        },
        i
    } (BasicPanel);
    t.MainPanel = e,
    __reflect(e.prototype, "pveStarTrek.MainPanel")
} (pveStarTrek || (pveStarTrek = {}));
var __reflect = this && this.__reflect ||
function(t, e, i) {
    t.__class__ = e,
    i ? i.push(e) : i = [e],
    t.__types__ = t.__types__ ? i.concat(t.__types__) : i
},
pveStarTrek; !
function(t) {
    var e = function() {
        function t() {}
        return t.MAIN_PANEL = "pveStarTrek.MainPanel",
        t.PREPARE_PANEL = "pveStarTrek.PreparePanel",
        t.CHALLENGE_PANEL = "pveStarTrek.ChallengePanel",
        t
    } ();
    t.PanelConst = e,
    __reflect(e.prototype, "pveStarTrek.PanelConst");
    var i = function() {
        function t() {}
        return t.init = function() {
            var t = this;
            this.PET_BAG_Value = [];
            for (var e = [], i = 101768; 101817 >= i; i++) e.push(i);
            KTool.getMultiValue(e,
            function(i) {
                for (var n in e) t.PET_BAG_Value[e[n]] = i[n]
            })
        },
        t
    } ();
    t.AttrConst = i,
    __reflect(i.prototype, "pveStarTrek.AttrConst");
    var n = function() {
        function t() {}
        return t.CHOOSE_PET_UP = "pveStarTrek.ChoosePetUp",
        t.CHOOSE_PET_DOWN = "pveStarTrek.ChoosePetDown",
        t.START_CHANGE_SKILL = "pveStarTrek.StartChangeSkill",
        t.END_CHANGE_SKILL = "pveStarTrek.EndChangeSkill",
        t.CLICK_BLOCK = "pveStarTrek.clickBlock",
        t.SELECT_PET = "pveStarTrek.selectPet",
        t.SELECT_BUFF = "pveStarTrek.selectBuff",
        t.AFTER_SELECT_BUFF = "pveStarTrek.afterSelectBuff",
        t.AFTER_BUY_GOOD = "pveStarTrek.afterBuyGood",
        t.UPDATE_COIN = "pveStarTrek.updateCoin",
        t
    } ();
    t.EventConst = n,
    __reflect(n.prototype, "pveStarTrek.EventConst")
} (pveStarTrek || (pveStarTrek = {}));
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
pveStarTrek; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t.skinName = "PveStarTrekAwardItemSkin",
            t.cacheAsBitmap = !0,
            t
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            this.scaleX = this.scaleY = .8,
            this.imgSelect.visible = this.btnSelect.visible = !1,
            this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this)
        },
        i.prototype.onClick = function() {
            var e = PopViewManager.createDefaultStyleObject();
            e.maskShapeStyle.maskAlpha = .8,
            PopViewManager.getInstance().openView(new t.BuffPop(this.info), e)
        },
        i.prototype.destroy = function() {
            this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this),
            e.prototype.destroy.call(this)
        },
        i.prototype.setRank = function(t) {
            1 == t ? (this.txtRank.text = "高级", this.txtRank.textColor = this.txtName.textColor = 7331839, this.imgRank.source = "pve_star_trek_award_pop_imglevel1bg_png") : 2 == t ? (this.txtRank.text = "稀有", this.txtRank.textColor = this.txtName.textColor = 16735194, this.imgRank.source = "pve_star_trek_award_pop_imglevel2bg_png") : 3 == t && (this.txtRank.text = "传奇", this.txtRank.textColor = this.txtName.textColor = 16765733, this.imgRank.source = "pve_star_trek_award_pop_imglevel3bg_png")
        },
        i.prototype.setInfo = function(t, e) {
            this.info = t,
            this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this),
            this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this),
            this.txtName.text = t.BuffName,
            this.imgIcon.source = "resource/assets/starTrek/buff/" + t.BuffId + ".png",
            this.setRank(t.BuffPondID);
            for (var i = t.BuffDesc,
            n = t.BasicValue.split("_"), r = 0, o = n; r < o.length; r++) {
                var a = o[r];
                i = i.replace("%s", +a * e + "")
            }
            this.txtDes.text = i
        },
        i
    } (BaseItemRenderer);
    t.AwardPopAwardBagItem = e,
    __reflect(e.prototype, "pveStarTrek.AwardPopAwardBagItem")
} (pveStarTrek || (pveStarTrek = {}));
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
pveStarTrek; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t.skinName = "PveStarTrekAwardItemSkin",
            t.cacheAsBitmap = !0,
            t
        }
        return __extends(i, e),
        i.prototype.setSelected = function(t) {
            this.imgSelect.visible = t,
            this.btnSelect.visible = t
        },
        i.prototype.destroy = function() {
            this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTap, this),
            e.prototype.destroy.call(this)
        },
        i.prototype.setRank = function(t) {
            1 == t ? (this.txtRank.text = "高级", this.txtRank.textColor = this.txtName.textColor = 7331839, this.imgRank.source = "pve_star_trek_award_pop_imglevel1bg_png") : 2 == t ? (this.txtRank.text = "稀有", this.txtRank.textColor = this.txtName.textColor = 16735194, this.imgRank.source = "pve_star_trek_award_pop_imglevel2bg_png") : 3 == t && (this.txtRank.text = "传奇", this.txtRank.textColor = this.txtName.textColor = 16765733, this.imgRank.source = "pve_star_trek_award_pop_imglevel3bg_png")
        },
        i.prototype.setInfo = function(e, i) {
            void 0 === i && (i = !1),
            this.buffId = e.BuffId,
            this.setSelected(i),
            this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTap, this),
            ImageButtonUtil.add(this.btnSelect,
            function() {
                EventManager.dispatchEventWith(t.EventConst.AFTER_SELECT_BUFF, !1, e.BuffId)
            },
            this),
            this.txtName.text = e.BuffName,
            this.imgIcon.source = "resource/assets/starTrek/buff/" + e.BuffId + ".png",
            this.setRank(e.BuffPondID);
            for (var n = e.BuffDesc,
            r = e.BasicValue.split("_"), o = 0, a = r; o < a.length; o++) {
                var s = a[o];
                n = n.replace("%s", s)
            }
            this.txtDes.text = n
        },
        i.prototype.onTap = function() {
            EventManager.dispatchEventWith(t.EventConst.SELECT_BUFF, !1, this.buffId)
        },
        i
    } (BaseItemRenderer);
    t.AwardPopAwardItem = e,
    __reflect(e.prototype, "pveStarTrek.AwardPopAwardItem")
} (pveStarTrek || (pveStarTrek = {}));
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
pveStarTrek; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t.skinName = "PveStarTrekBlockItemSkin",
            t
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            this.cacheAsBitmap = !0
        },
        i.prototype.setBlockInfo = function(e, i, n, r, o) {
            var a = this;
            this.index = e,
            this.state = n,
            this.isVisible = i,
            i ? 1 == n ? (this.imgIcon.visible = r, this.imgBlock.source = "pve_star_trek_block_item_imgblock2_png", r && (this.imgIcon.source = "pve_star_trek_block_item_xjgk_png")) : (this.imgIcon.visible = !0, this.imgBlock.source = "pve_star_trek_block_item_imgblock3_png", 2 == n ? this.imgIcon.source = "pve_star_trek_block_item_hfjn_png": n >= 21 && 25 >= n ? this.imgIcon.source = "pve_star_trek_block_item_xjgk_png": n > 100 && (this.imgIcon.source = "pve_star_trek_block_item_" + ["pt", "jy", "lz"][o] + "hd_png")) : (this.imgIcon.visible = !1, this.imgBlock.source = "pve_star_trek_block_item_imgblock1_png"),
            ImageButtonUtil.remove(this.imgBlock),
            ImageButtonUtil.add(this.imgBlock,
            function() {
                EventManager.dispatchEventWith(t.EventConst.CLICK_BLOCK, !1, a.index)
            },
            this, !1, !1)
        },
        i
    } (BaseItemRenderer);
    t.ChallengePanelBlockItem = e,
    __reflect(e.prototype, "pveStarTrek.ChallengePanelBlockItem")
} (pveStarTrek || (pveStarTrek = {}));
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
pveStarTrek; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t.skinName = "PveStarTrekListPetItemSkin",
            t
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            this.item = new t.PveStarTrekPetItem,
            this.addChild(this.item)
        },
        i.prototype.dataChanged = function() {
            this.item.setPetInfo(1, this.data)
        },
        i
    } (eui.ItemRenderer);
    t.ListPetItem = e,
    __reflect(e.prototype, "pveStarTrek.ListPetItem")
} (pveStarTrek || (pveStarTrek = {}));
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
pveStarTrek; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.skinName = "PveStarTrekMainPanelAwardItemSkin",
            e.cacheAsBitmap = !0,
            e
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this)
        },
        e.prototype.setItemInfo = function(t, e) {
            this.id = t,
            this.imgIcon.source = ClientConfig.getItemIcon(t),
            this.txtNum.text = e + ""
        },
        e.prototype.resetButton = function() {
            var t = this;
            ImageButtonUtil.remove(this.imgIcon),
            ImageButtonUtil.add(this.imgIcon,
            function() {
                tipsPop.TipsPop.openItemPop({
                    id: t.id
                })
            },
            this)
        },
        e
    } (BaseItemRenderer);
    t.MainPanelAwardItem = e,
    __reflect(e.prototype, "pveStarTrek.MainPanelAwardItem")
} (pveStarTrek || (pveStarTrek = {}));
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
pveStarTrek; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t.skinName = "PveStarTrekMallItemSkin",
            t.cacheAsBitmap = !0,
            t
        }
        return __extends(i, e),
        i.prototype.setInfo = function(t, e, i, n, r) {
            this.info = t,
            this.index = i,
            this.curCoin = r,
            DisplayUtil.setEnabled(this.btnBuy, !e, e),
            this.btnBuy.visible = !n,
            this.txtName.text = t.GoodsName,
            this.txtCoin.text = t.GoodsPrice + "",
            this.txtNum.text = "",
            this.imgLook.visible = 2 == t.GoodsType,
            1 == t.GoodsType ? this.imgIcon.source = "pve_star_trek_award_pop_imglevel" + t.GoodsBuffType + "_png": 2 == t.GoodsType ? this.imgIcon.source = ClientConfig.getPetHeadPath( + t.PetID) : 3 == t.GoodsType ? (this.imgIcon.source = ClientConfig.getItemIcon(t.rewardinfo.split("_")[1]), this.txtNum.text = t.rewardinfo.split("_")[2]) : 4 == t.GoodsType && (this.imgIcon.source = "pve_star_trek_mall_pop_imgcure_png"),
            this.manageEvents()
        },
        i.prototype.childrenCreated = function() {
            this.manageEvents()
        },
        i.prototype.manageEvents = function() {
            var e = this;
            ImageButtonUtil.remove(this.btnBuy),
            ImageButtonUtil.remove(this.imgIcon),
            ImageButtonUtil.add(this.btnBuy,
            function() {
                e.curCoin < e.info.GoodsPrice ? BubblerManager.getInstance().showText("道具数量不足") : SocketConnection.sendByQueue(42395, [114, 14, e.index, 0],
                function() {
                    DisplayUtil.setEnabled(e.btnBuy, !1, !0),
                    EventManager.dispatchEventWith(t.EventConst.AFTER_BUY_GOOD),
                    2 == e.info.GoodsType ? BubblerManager.getInstance().showText(e.info.PetName + "已接受雇佣") : 4 == e.info.GoodsType && BubblerManager.getInstance().showText("精灵状态已恢复")
                })
            },
            this, !1),
            ImageButtonUtil.add(this.imgIcon,
            function() {
                2 == e.info.GoodsType ? PopViewManager.getInstance().openView(new t.MallPetPop(e.info)) : 3 == e.info.GoodsType && tipsPop.TipsPop.openItemPop({
                    id: +e.info.rewardinfo.split("_")[1]
                })
            },
            this, !1, !1)
        },
        i
    } (BaseItemRenderer);
    t.MallItem = e,
    __reflect(e.prototype, "pveStarTrek.MallItem")
} (pveStarTrek || (pveStarTrek = {}));
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
pveStarTrek; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t.skinName = "PveStarTrekPetItemSkin",
            t.cacheAsBitmap = !0,
            t
        }
        return __extends(i, e),
        Object.defineProperty(i.prototype, "canClick", {
            get: function() {
                return this._canClick
            },
            set: function(t) {
                this._canClick = t,
                this.imgHasOn.visible = !t
            },
            enumerable: !0,
            configurable: !0
        }),
        i.prototype.childrenCreated = function() {
            this.canClick = !0
        },
        i.prototype.setPetInfo = function(t, e, i) {
            if (void 0 === i && (i = !1), this.isFirst = i, this.imgFirst.visible = i && !!e, this.imgSelect.visible = !1, this.type = t, 2 == t ? (this.height = this.imgBG.height = 136, this.txtName.visible = !0) : (this.height = this.imgBG.height = 111, this.txtName.visible = !1, 1 != t && (this.scaleX = this.scaleY = .8)), "number" == typeof e) if (0 == e) this.imgHead.source = "",
            this.txtName.text = "",
            this.txtLv.text = "",
            this.petInfo = null;
            else {
                if (this.petInfo = PetManager.getPetInfo(e), !this.petInfo) for (var n = 0,
                r = PetStorage2015InfoManager.allInfo; n < r.length; n++) {
                    var o = r[n];
                    if (o.catchTime == e) {
                        this.petInfo = o;
                        break
                    }
                }
                this.txtLv.text = "LV." + this.petInfo.level,
                this.txtName.text = PetXMLInfo.getName(this.petInfo.id),
                this.imgHead.source = ClientConfig.getPetHeadPath(this.petInfo.id, this.petInfo.catchTime, this.petInfo.skinId)
            } else this.petInfo = e,
            this.txtLv.text = "LV." + e.level,
            this.txtName.text = PetXMLInfo.getName(e.id),
            this.imgHead.source = ClientConfig.getPetHeadPath(e.id, e.catchTime, e.skinId);
            this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTap, this),
            this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTap, this)
        },
        i.prototype.onTap = function() {
            if (this.petInfo && this.canClick) if (this.type <= 2) {
                var e = PopViewManager.createDefaultStyleObject();
                e.maskShapeStyle.maskAlpha = .75,
                PopViewManager.getInstance().openView(new t.PetPop(this.petInfo, this.type, this), e)
            } else this.type >= 3 && EventManager.dispatchEventWith(t.EventConst.SELECT_PET, !1, {
                index: this.index,
                type: this.type
            })
        },
        i.prototype.destroy = function() {
            this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTap, this),
            e.prototype.destroy.call(this)
        },
        i
    } (BaseItemRenderer);
    t.PveStarTrekPetItem = e,
    __reflect(e.prototype, "pveStarTrek.PveStarTrekPetItem")
} (pveStarTrek || (pveStarTrek = {}));
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
pveStarTrek; !
function(t) {
    var e = function(e) {
        function i(t, i, n, r) {
            void 0 === i && (i = !1),
            void 0 === r && (r = !1);
            var o = e.call(this) || this;
            return o.skinName = "PveStarTrekPetPopSkillItem",
            o.skillInfo = t,
            o.canChange = i,
            o.skillObj = n,
            o.isFifth = r,
            o
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            var e = this;
            this.cacheAsBitmap = !0;
            var i;
            if (4 == SkillXMLInfo.getCategory(this.skillInfo.id)) i = ClientConfig.getpettypeticon("prop");
            else {
                var n = SkillXMLInfo.getTypeID(this.skillInfo.id);
                i = ClientConfig.getpettypeticon(n + "")
            }
            this.imgIcon.source = i,
            this.txtName.text = this.skillInfo.name,
            this.txt.text = "威力:" + this.skillInfo.damage + "    PP:" + this.skillInfo.pp + "/" + this.skillInfo.maxPP,
            ImageButtonUtil.add(this.group,
            function() {
                var i = {};
                i.id = e.skillInfo.id,
                i.petInfo = e.skillInfo.petInfo,
                e.skillObj && (i.onChangeFun = function() {
                    e.isFifth ? SocketConnection.sendByQueue(CommandID.CHANGE_FIFTH_SKILL, [e.skillObj.catchTime, e.skillObj.oldSkillId, e.skillInfo.id],
                    function() {
                        EventManager.dispatchEventWith(t.EventConst.END_CHANGE_SKILL, !1, e.skillInfo.id)
                    }) : SocketConnection.sendByQueue(CommandID.PET_SKILL_SWICTH, [e.skillObj.catchTime, 1, 1, e.skillObj.oldSkillId, e.skillInfo.id],
                    function() {
                        EventManager.dispatchEventWith(t.EventConst.END_CHANGE_SKILL, !1, e.skillInfo.id)
                    })
                }),
                tipsPop.TipsPop.openSkillPop(i)
            },
            this, !1, !1),
            this.skillInfo.tag ? (this.imgTag.visible = !0, this.imgTag.source = "common_petSkill_tag" + this.skillInfo.tag + "_png") : this.imgTag.visible = !1,
            this.imgSelect.visible = !1,
            this.btnChange.visible = this.canChange,
            ImageButtonUtil.add(this.btnChange,
            function() {
                e.imgSelect.visible = !0,
                EventManager.dispatchEvent(new egret.Event(t.EventConst.START_CHANGE_SKILL, !1, !1, e.skillInfo.id))
            },
            this)
        },
        i
    } (BaseItemRenderer);
    t.SkillItem = e,
    __reflect(e.prototype, "pveStarTrek.SkillItem")
} (pveStarTrek || (pveStarTrek = {}));
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
    return new(i || (i = Promise))(function(r, o) {
        function a(t) {
            try {
                _(n.next(t))
            } catch(e) {
                o(e)
            }
        }
        function s(t) {
            try {
                _(n["throw"](t))
            } catch(e) {
                o(e)
            }
        }
        function _(t) {
            t.done ? r(t.value) : new i(function(e) {
                e(t.value)
            }).then(a, s)
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
            if (r = 1, o && (a = o[2 & i[0] ? "return": i[0] ? "throw": "next"]) && !(a = a.call(o, i[1])).done) return a;
            switch (o = 0, a && (i = [0, a.value]), i[0]) {
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
                o = i[1],
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
            i = e.call(t, _)
        } catch(n) {
            i = [6, n],
            o = 0
        } finally {
            r = a = 0
        }
        if (5 & i[0]) throw i[1];
        return {
            value: i[0] ? i[1] : void 0,
            done: !0
        }
    }
    var r, o, a, s, _ = {
        label: 0,
        sent: function() {
            if (1 & a[0]) throw a[1];
            return a[1]
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
pveStarTrek; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t.skinName = "PveStarTrekChallengePanelSkin",
            t
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            var t = this;
            this.initBtnHelpById(1),
            this.initBtnClose("pve_star_trek_title1_png", this,
            function() {
                t.service.backToMainPanel()
            },
            this),
            this.addEvent()
        },
        i.prototype.destroy = function() {
            i.hasInit = !1;
            for (var t = 1; 24 >= t; ++t) this["block" + t].destroy();
            e.prototype.destroy.call(this)
        },
        i.prototype.addEvent = function() {
            var e = this;
            EventManager.addEventListener(t.EventConst.CLICK_BLOCK, this.onClickBlock, this),
            EventManager.addEventListener(t.EventConst.UPDATE_COIN,
            function() {
                e.txtCoin.text = e.service.getValue(20377) + ""
            },
            this),
            ImageButtonUtil.add(this.btnBuff,
            function() {
                for (var e = [], i = 20357; 20366 >= i; i++) e.push(i);
                KTool.getMultiValue(e,
                function(e) {
                    for (var i = 0,
                    n = [0], r = 0; 10 > r; r++) for (var o = 0; 4 > o; o++) {
                        var a = e[r] >> 8 * o & 255;
                        n.push(a),
                        i += a
                    }
                    if (i > 0) {
                        var s = PopViewManager.createDefaultStyleObject();
                        s.maskShapeStyle.maskAlpha = .8,
                        PopViewManager.getInstance().openView(new t.BagPop(n), s)
                    } else BubblerManager.getInstance().showText("暂未获得宝物")
                })
            },
            this),
            ImageButtonUtil.add(this.imgDoor,
            function() {
                SocketConnection.sendByQueue(42395, [114, 12, 0, 0],
                function() {
                    i.hasInit = !1,
                    e.service.updateValues().then(function() {
                        var t = e.service.getValue(20341);
                        0 == t ? e.service.backToMainPanel() : e.update()
                    })
                })
            },
            this, !1, !1),
            ImageButtonUtil.add(this.imgCoin,
            function() {
                tipsPop.TipsPop.openItemPop({
                    id: 1725174
                })
            },
            this)
        },
        i.prototype.update = function() {
            var t = this;
            this.initData().then(function() {
                t.updateMap(),
                t.checkPop()
            })
        },
        i.prototype.initData = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var t, e, n, r, o = this;
                return __generator(this,
                function(a) {
                    switch (a.label) {
                    case 0:
                        return i.hasInit ? [3, 3] : (this.bossConfigMap = [], [4, config.Startrekbossfight.loadAsync()]);
                    case 1:
                        return a.sent().forEach(function(t) {
                            o.bossConfigMap[t.BossfightId] = t
                        }),
                        this.nextMap = [],
                        [4, config.Startrek_route.loadAsync()];
                    case 2:
                        a.sent().forEach(function(t) {
                            o.nextMap[t.id] = t.arrive.split(",").map(Number)
                        }),
                        SocketConnection.sendByQueue(42126, [20230130]),
                        a.label = 3;
                    case 3:
                        return t = this.service.getValue(20342),
                        this.curIndex = 255 & t,
                        egret.setTimeout(function() {
                            var t = 0;
                            o.curIndex > 16 && (t = o.groupMap.contentWidth - o.groupMap.width),
                            gsap.to(o.groupMap, {
                                scrollH: t
                            })
                        },
                        this, 50),
                        this.isOnMall = (this.service.getValue(20342) >> 8 & 255) % 10 > 0,
                        i.hasInit ? (e = +this.txtCoin.text, n = this.service.getValue(20377), this.txtCoin.text = n + "", r = n - e, r > 0 && AwardManager.getItem().push({
                            type: 0,
                            id: 1725174,
                            count: r
                        })) : this.txtCoin.text = this.service.getValue(20377) + "",
                        egret.setTimeout(function() {
                            var t = o["block" + o.curIndex];
                            egret.Tween.get(o.imgHead).to({
                                x: t.x + 36,
                                y: t.y - 34
                            },
                            i.hasInit ? 200 : 0),
                            i.hasInit = !0
                        },
                        this, 0),
                        [2]
                    }
                })
            })
        },
        i.prototype.updateMap = function() {
            for (var t = [], e = 0, i = [20343, 20344, 20345, 20346, 20347, 20348]; e < i.length; e++) for (var n = i[e], r = this.service.getValue(n), o = 0; 4 > o; o++) t.push(r >> 8 * o & 255);
            for (var o = 1; 24 >= o; o++) {
                var a = this["block" + o],
                s = this.getColumn(this.curIndex),
                _ = this.getColumn(o) <= s + 2,
                u = void 0;
                t[o - 1] > 100 && (u = this.bossConfigMap[t[o - 1]].BossType - 11),
                a.setBlockInfo(o, _, t[o - 1], this.isOnMall && this.curIndex == o, u),
                a.imgNext.visible = this.checkCanClick(o, !1),
                a.imgNext.visible ? this.groupMap.setChildIndex(a, -1) : o > 1 && this["block" + (o - 1)].imgNext.visible && this.getColumn(o) == this.getColumn(o - 1) && this.groupMap.setChildIndex(a, -1)
            }
            this.groupMap.setChildIndex(this.imgHead, -1);
            var l = this.service.getValue(20341);
            this.imgDoor.visible = 5 == l || 7 == l || 9 == l,
            4 == l || 5 == l ? this.txtLevel.text = "第一关": 6 == l || 7 == l ? this.txtLevel.text = "第二关": (8 == l || 9 == l) && (this.txtLevel.text = "第三关")
        },
        i.prototype.onClickBlock = function(t) {
            var e = t.data,
            i = this.checkCanClick(e);
            1 == i ? this.tryMove(e) : 0 == i && this.lookOver(e)
        },
        i.prototype.checkCanClick = function(t, e) {
            return void 0 === e && (e = !0),
            this.isOnMall && t == this.curIndex && e ? (this.checkPop(), null) : this.nextMap[this.curIndex] && -1 != this.nextMap[this.curIndex].indexOf(t)
        },
        i.prototype.tryMove = function(e) {
            var i = this,
            n = this["block" + e];
            if (n.state > 100) {
                var r = n.state,
                o = this.bossConfigMap[r].MonsterIds.split("_").map(Number),
                a = this.bossConfigMap[r].rewardinfo.split(";").map(function(t) {
                    return t.split("_").map(Number)
                });
                this.bossConfigMap[r].WinRewardNum > 0 && a.unshift([0, 1725174, this.bossConfigMap[r].WinRewardNum]),
                this.service.openPop(new t.ChallengePop(this.bossConfigMap[r].BossType - 11, o, a, e))
            } else 2 == n.state ? this.service.openPop(new t.RecoveryPop(function() {
                i.confirmMove(e)
            })) : n.state >= 21 && n.state <= 25 && this.confirmMove(e)
        },
        i.prototype.confirmMove = function(t) {
            var e = this;
            SocketConnection.sendByQueue(42395, [114, 3, t, 0],
            function() {
                e.service.updateValues().then(function() {
                    e.update()
                })
            })
        },
        i.prototype.getColumn = function(t) {
            var e = [1, 2, 4, 7, 9, 12, 14, 17, 19, 22, 24],
            i = 0;
            for (var n in e) t >= e[n] && i++;
            return i
        },
        i.prototype.checkPop = function() {
            var e = this,
            n = (this.service.getValue(20342) >> 8 & 255) % 10;
            if (n > 0) {
                var r = PopViewManager.createDefaultStyleObject();
                r.maskShapeStyle.maskAlpha = .8,
                PopViewManager.getInstance().openView(new t.MallPop(n, this.service), r)
            }
            var o = this.service.getValue(20356);
            if (i.backFromFight) i.backFromFight = !1,
            o > 0 && (egret.lifecycle.stage.touchChildren = !1, EventManager.once(AwardEvent.CLOSE_AWARD_DIALOG,
            function() {
                egret.lifecycle.stage.touchChildren = !0;
                var i = PopViewManager.createDefaultStyleObject();
                i.maskShapeStyle.maskAlpha = .8,
                i.ignoreMaskClick = !0,
                PopViewManager.getInstance().openView(new t.AwardPop(o, e.service), i)
            },
            this));
            else if (o > 0) {
                var r = PopViewManager.createDefaultStyleObject();
                r.maskShapeStyle.maskAlpha = .8,
                r.ignoreMaskClick = !0,
                PopViewManager.getInstance().openView(new t.AwardPop(o, this.service), r)
            }
        },
        i.prototype.lookOver = function(e) {
            var i = this["block" + e];
            if (i.isVisible) if (i.state > 100) {
                var n = i.state,
                r = this.bossConfigMap[n].MonsterIds.split("_").map(Number),
                o = this.bossConfigMap[n].rewardinfo.split(";").map(function(t) {
                    return t.split("_").map(Number)
                });
                this.bossConfigMap[n].WinRewardNum > 0 && o.unshift([0, 1725174, this.bossConfigMap[n].WinRewardNum]),
                this.service.openPop(new t.ChallengePop(this.bossConfigMap[n].BossType - 11, r, o, e, !0))
            } else if (2 == i.state) this.service.openPop(new t.RecoveryPop);
            else if (i.state >= 21 && i.state <= 25) {
                var a = PopViewManager.createDefaultStyleObject();
                a.maskShapeStyle.maskAlpha = .8,
                PopViewManager.getInstance().openView(new t.MallPop(i.state - 20, this.service, !0), a)
            }
        },
        i
    } (BasicPanel);
    t.ChallengePanel = e,
    __reflect(e.prototype, "pveStarTrek.ChallengePanel")
} (pveStarTrek || (pveStarTrek = {}));
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
pveStarTrek; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return t.AttrConst.init(),
            i.service.setValues([121559], [], [], [], [20340, 20341, 20342, 20343, 20344, 20345, 20346, 20347, 20348, 20356, 20377]),
            PetStorage2015InfoManager.getTotalInfo().then(function() {
                i.init([{
                    panelName: t.PanelConst.MAIN_PANEL,
                    isMain: !0
                },
                {
                    panelName: t.PanelConst.PREPARE_PANEL
                },
                {
                    panelName: t.PanelConst.CHALLENGE_PANEL
                }])
            }),
            i
        }
        return __extends(i, e),
        i
    } (BasicMultPanelModule);
    t.PveStarTrek = e,
    __reflect(e.prototype, "pveStarTrek.PveStarTrek")
} (pveStarTrek || (pveStarTrek = {}));
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
pveStarTrek; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t.SORT_CONFIG = {
                id_down: {
                    name: "ID顺序",
                    sortImg: "pve_star_trek_img_down_png"
                },
                id_up: {
                    name: "ID顺序",
                    sortImg: "pve_star_trek_img_up_png"
                },
                lvl_down: {
                    name: "等级顺序",
                    sortImg: "pve_star_trek_img_down_png"
                },
                lvl_up: {
                    name: "等级顺序",
                    sortImg: "pve_star_trek_img_up_png"
                },
                tm_down: {
                    name: "获得顺序",
                    sortImg: "pve_star_trek_img_down_png"
                },
                tm_up: {
                    name: "获得顺序",
                    sortImg: "pve_star_trek_img_up_png"
                }
            },
            t.skinName = "StarTrekPreparePanelSkin",
            t
        }
        return __extends(i, e),
        i.prototype.update = function() {
            return this.ignoreUpdate ? void(this.ignoreUpdate = !1) : void(this.menu && (this.resetFilter(), this.oneKeyDown(void 0, !0), this.menu.updateView(1)))
        },
        i.prototype.destroy = function() {
            this.menu && this.menu.destroy(),
            this.txtSearch.removeEventListener(egret.Event.CHANGE, this.onSearchChange, this),
            this.rb1.group.removeEventListener(egret.Event.CHANGE, this.onRb1Change, this),
            this.rb_id_sort_down.group.removeEventListener(egret.Event.CHANGE, this.onRbgChange, this),
            e.prototype.destroy.call(this)
        },
        i.prototype.childrenCreated = function() {
            var e = this;
            this.initBtnClose("pve_star_trek_title2_png", this,
            function() {
                e.service.backToMainPanel()
            },
            this),
            this.addEvent(),
            this.resetFilter(),
            this.initPetBagInfo(),
            this.arrUpCatchTime = [],
            this.list.itemRenderer = t.ListPetItem,
            this.arrayCollection = new eui.ArrayCollection,
            this.list.dataProvider = this.arrayCollection;
            var i = "pveStarTrek",
            n = new MenuData;
            n.groupName = i,
            n.root = [1, 2, 3],
            n.data = {
                1 : {
                    title: "精灵背包"
                },
                2 : {
                    title: "精灵仓库"
                },
                3 : {
                    title: "精英收藏"
                }
            },
            n["default"] = 1,
            this.menu = Menu.createMenu(n, this.groupMenu),
            EventManager.addEventListener(BaseMenuEvent.BASE_MENU_SELECT_CHANGE_ + i, this.onChangeTab, this)
        },
        i.prototype.addEvent = function() {
            ImageButtonUtil.add(this.btnStart, this.start, this),
            ImageButtonUtil.add(this.btnOneKeyUp, this.oneKeyUp, this),
            ImageButtonUtil.add(this.btnOneKeyDown, this.oneKeyDown, this),
            ImageButtonUtil.add(this.btnAttr, this.showAttr, this),
            ImageButtonUtil.add(this.btnSort, this.showSort, this),
            ImageButtonUtil.add(this.sortMask, this.hideSort, this),
            EventManager.addEventListener(t.EventConst.CHOOSE_PET_UP, this.onPetUp, this),
            EventManager.addEventListener(t.EventConst.CHOOSE_PET_DOWN, this.onPetDown, this),
            this.txtSearch.addEventListener(egret.Event.CHANGE, this.onSearchChange, this),
            this.rb1.group.addEventListener(egret.Event.CHANGE, this.onRb1Change, this),
            this.rb_id_sort_down.group.addEventListener(egret.Event.CHANGE, this.onRbgChange, this)
        },
        i.prototype.onRbgChange = function() {
            egret.localStorage.setItem("warehouse_sortId_order_" + MainManager.actorID, this.rb_id_sort_down.group.selectedValue),
            this.hideSort(),
            this.updateSort(),
            this.updateList(this.menu.selectedValue)
        },
        i.prototype.onRb1Change = function() {
            var t = this.rb1.group.selectedValue;
            this.setPetBagIndex(t)
        },
        i.prototype.onSearchChange = function() {
            this.updateList(this.menu.selectedValue)
        },
        i.prototype.showAttr = function() {
            var t = this,
            e = {
                callBack: function(e, i) {
                    t.updateList(t.menu.selectedValue, i)
                },
                caller: this,
                unAutoClose: !1,
                relativeSet: {
                    srcWorldPos: this.btnAttr.localToGlobal( - 5, 40),
                    dir: "left-top",
                    rx: 0,
                    ry: 0
                }
            };
            this.ignoreUpdate = !0,
            ModuleManager.showModule("petChooseAttributePanel", ["pet_choose_attribute_panel"], e, "", AppDoStyle.NULL)
        },
        i.prototype.showSort = function() {
            this.groupSort.visible = !0,
            this.groupSort.scaleX = this.groupSort.scaleY = 1,
            gsap.from(this.groupSort, {
                scaleX: 0,
                scaleY: 0,
                ease: egret.Ease.backOut,
                duration: .3
            })
        },
        i.prototype.hideSort = function() {
            var t = this;
            gsap.to(this.groupSort, {
                scaleX: 0,
                scaleY: 0,
                duration: .2
            }).then(function() {
                t.groupSort.visible = !1,
                t.groupSort.scaleX = t.groupSort.scaleY = 1
            })
        },
        i.prototype.initPetBagInfo = function() {
            for (var e = t.AttrConst.PET_BAG_Value[101769] + 2; 4 >= e; e++) this["rb" + e].parent.removeChild(this["rb" + e]);
            for (var i = [], e = 101770; 101817 >= e; e++) i.push(t.AttrConst.PET_BAG_Value[e]);
            var n = 1,
            r = 1;
            this.bagCatchTimeMap = [void 0, [], [], [], []];
            for (var o = 0,
            a = i; o < a.length; o++) {
                var s = a[o];
                this.bagCatchTimeMap[n][r++] = s,
                r > 12 && (n++, r = 1)
            }
            for (var _ = PetManager.getBagMap(), u = PetManager.getSecondBagMap(), l = t.AttrConst.PET_BAG_Value[101768] + 1, e = 1; 6 >= e; e++) _[e - 1] ? this.bagCatchTimeMap[l][e] = _[e - 1].catchTime: this.bagCatchTimeMap[l][e] = 0,
            u[e - 1] ? this.bagCatchTimeMap[l][e + 6] = u[e - 1].catchTime: this.bagCatchTimeMap[l][e + 6] = 0;
            this.upItemMap = [],
            this.bagItemMap = [];
            for (var e = 1; 6 >= e; e++) {
                var h = new t.PveStarTrekPetItem;
                this.upItemMap[e] = h,
                this.groupUp.addChild(h),
                h.setPetInfo(2, 0),
                h = new t.PveStarTrekPetItem,
                this.bagItemMap[e] = h,
                this.groupBag1.addChild(h),
                h.setPetInfo(1, 0),
                h = new t.PveStarTrekPetItem,
                this.bagItemMap[e + 6] = h,
                this.groupBag2.addChild(h),
                h.setPetInfo(1, 0)
            }
        },
        i.prototype.setPetBagIndex = function(t) {
            this.curBagIndex != t && (this.curBagIndex = t, this.updateBag(t))
        },
        i.prototype.updateBag = function(t) {
            for (var e in this.bagCatchTimeMap[t]) {
                var i = this.bagCatchTimeMap[t][e],
                n = -1 != this.arrUpCatchTime.indexOf(i);
                this.bagItemMap[e].setPetInfo(1, n ? 0 : i)
            }
        },
        i.prototype.updateList = function(t, e) {
            var i = this;
            this.list.parent.stopAnimation();
            var n;
            switch (2 == t ? n = PetStorage2015InfoManager.storageInfo.filter(function(t) {
                return 0 == t.posi
            }) : 3 == t && (n = PetStorage2015InfoManager.eliteInfo.filter(function(t) {
                return 4 == t.posi
            })), n = n.filter(function(t) {
                return - 1 == i.arrUpCatchTime.indexOf(t.catchTime)
            }), void 0 == e ? e = this.curAttr: this.curAttr = e, e > 0 && (n = n.filter(function(t) {
                return t.type == e
            })), this.txtSearch.text && (n = n.filter(function(t) {
                return SearchUtil.isMatch(i.txtSearch.text, t.name) || t.id == +i.txtSearch.text
            })), egret.localStorage.getItem("warehouse_sortId_order_" + MainManager.actorID)) {
            case "id_down":
                n.sort(function(t, e) {
                    return e.id - t.id
                });
                break;
            case "id_up":
                n.sort(function(t, e) {
                    return t.id - e.id
                });
                break;
            case "lvl_down":
                n.sort(function(t, e) {
                    return e.level - t.level
                });
                break;
            case "lvl_up":
                n.sort(function(t, e) {
                    return t.level - e.level
                });
                break;
            case "tm_down":
                n.sort(function(t, e) {
                    return e.catchTime - t.catchTime
                });
                break;
            case "tm_up":
                n.sort(function(t, e) {
                    return t.catchTime - e.catchTime
                })
            }
            this.arrayCollection.source = n
        },
        i.prototype.onPetUp = function(t, e) {
            void 0 === e && (e = !1);
            var i = t.data;
            if (i.level < 70) return void BubblerManager.getInstance().showText("精灵等级不足");
            for (var n = !1,
            r = 1; 6 >= r; r++) if (!this.upItemMap[r].petInfo) {
                n = !0,
                this.upItemMap[r].setPetInfo(2, i),
                this.arrUpCatchTime.push(i.catchTime),
                e || this.afterChange();
                break
            }
            n || BubblerManager.getInstance().showText("上阵精灵数量已达上限")
        },
        i.prototype.onPetDown = function(t, e) {
            void 0 === e && (e = !1);
            for (var i = !1,
            n = 1; 6 >= n && this.upItemMap[n].petInfo; n++) this.upItemMap[n].petInfo.catchTime == t.data.catchTime && (i = !0),
            i && (6 > n && !e ? this.upItemMap[n].setPetInfo(2, this.upItemMap[n + 1].petInfo ? this.upItemMap[n + 1].petInfo: 0) : this.upItemMap[n].setPetInfo(2, 0));
            i && !e && (this.arrUpCatchTime.splice(this.arrUpCatchTime.indexOf(t.data.catchTime), 1), this.afterChange())
        },
        i.prototype.oneKeyDown = function(t, e) {
            void 0 === e && (e = !1);
            for (var i = 1; 6 >= i; i++) this.upItemMap[i].petInfo && this.onPetDown({
                data: this.upItemMap[i].petInfo
            },
            !0);
            this.arrUpCatchTime.splice(0),
            !e && this.afterChange()
        },
        i.prototype.oneKeyUp = function() {
            for (var t = [], e = [], i = 1; 6 >= i; i++) t.push(this.bagItemMap[i].petInfo);
            for (var n = 7; 12 >= n; n++) e.push(this.bagItemMap[n].petInfo);
            t.sort(function(t, e) {
                return t ? e ? e.level - t.level: -1 : 1
            }),
            e.sort(function(t, e) {
                return t ? e ? e.level - t.level: -1 : 1
            });
            var r, o, a = t.concat(e);
            for (r = 0, o = 0; 6 > r && 12 > o; o++) {
                var s = a.shift();
                s && s.level > 70 && (this.onPetUp({
                    data: s
                },
                !0), r++)
            }
            0 == r && 12 == o ? BubblerManager.getInstance().showText("没有符合条件的精灵") : this.afterChange()
        },
        i.prototype.start = function() {
            var e = this;
            if (!this.upItemMap[1].petInfo) return void BubblerManager.getInstance().showText("至少需要上阵1名精灵");
            var i = this.arrUpCatchTime;
            SocketConnection.sendByQueue(42127, [20230130, i.length].concat(i),
            function() {
                e.service.updateValues().then(function() {
                    e.service.openPanel(t.PanelConst.CHALLENGE_PANEL)
                })
            })
        },
        i.prototype.onChangeTab = function() {
            var e = this.menu.selectedValue;
            this.groupBag.visible = 1 == e,
            this.groupWarehouse.visible = e >= 2,
            this.btnOneKeyUp.visible = 1 == e && !this.upItemMap[1].petInfo,
            this.btnOneKeyDown.visible = !!this.upItemMap[1].petInfo,
            1 == e ? (this.curBagIndex || (this.curBagIndex = t.AttrConst.PET_BAG_Value[101768] + 1, this["rb" + this.curBagIndex].selected = !0), this.updateBag(this.curBagIndex)) : this.updateList(e)
        },
        i.prototype.afterChange = function() {
            var t = this.menu.selectedValue;
            this.btnOneKeyUp.visible = 1 == t && !this.upItemMap[1].petInfo,
            this.btnOneKeyDown.visible = !!this.upItemMap[1].petInfo,
            1 == t ? this.updateBag(this.curBagIndex) : this.updateList(t)
        },
        i.prototype.resetFilter = function() {
            this.curAttr = 0,
            this.txtSearch.text = "",
            this.groupSort.visible = !1,
            this.updateSort()
        },
        i.prototype.updateSort = function() {
            var t = egret.localStorage.getItem("warehouse_sortId_order_" + MainManager.actorID);
            t ? (this.txtSort.text = this.SORT_CONFIG[t].name, this.imgSort.source = this.SORT_CONFIG[t].sortImg) : (this.txtSort.text = "默认顺序", this.imgSort.source = null);
            for (var e = 2; 7 >= e; e++) {
                var i = this.groupSort.getChildAt(e);
                i.selected = i.value == t
            }
        },
        i
    } (BasicPanel);
    t.PreparePanel = e,
    __reflect(e.prototype, "pveStarTrek.PreparePanel")
} (pveStarTrek || (pveStarTrek = {}));
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
pveStarTrek; !
function(t) {
    var e = function(e) {
        function i(t, i) {
            var n = e.call(this) || this;
            return n.skinName = "PveStarTrekAwardPopSkin",
            n.buffValue = t,
            n.service = i,
            n
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            var e = this;
            config.Startrekbuffinfo.load(function() {
                for (var i = 0; 3 > i; i++) {
                    var n = e.buffValue >> 8 * i & 255,
                    r = config.Startrekbuffinfo.getItemsByField("BuffId", ["=="], [n])[0];
                    if (r) {
                        var o = new t.AwardPopAwardItem;
                        e.group.addChild(o),
                        o.setInfo(r, 0 == i)
                    }
                    0 == i && (e.curBuffId = n)
                }
            },
            this),
            EventManager.addEventListener(t.EventConst.SELECT_BUFF,
            function(t) {
                e.curBuffId = t.data;
                for (var i = 0; 3 > i; i++) {
                    var n = e.group.getChildAt(i);
                    n.setSelected(n.buffId == e.curBuffId)
                }
            },
            this),
            EventManager.addEventListener(t.EventConst.AFTER_SELECT_BUFF,
            function(t) {
                e.curBuffId = t.data;
                for (var i, n = 0; 3 > n; n++) {
                    var r = e.group.getChildAt(n);
                    r.destroy(),
                    r.buffId == e.curBuffId && (i = n + 1)
                }
                SocketConnection.sendByQueue(42395, [114, 13, i, 0],
                function() {
                    e.service.updateValues().then(function() {
                        e.hide()
                    })
                })
            },
            this)
        },
        i.prototype.destroy = function() {
            EventManager.removeAll(this),
            e.prototype.destroy.call(this)
        },
        i
    } (PopView);
    t.AwardPop = e,
    __reflect(e.prototype, "pveStarTrek.AwardPop")
} (pveStarTrek || (pveStarTrek = {}));
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
pveStarTrek; !
function(t) {
    var e = function(e) {
        function i(t) {
            var i = e.call(this) || this;
            return i.skinName = "PveStarTrekBagPopSkin",
            i.arrBuff = t,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            this.init(),
            this.addEvent()
        },
        i.prototype.destroy = function() {
            ImageButtonUtil.removeAll(this);
            for (var t = this.group.numChildren,
            i = 0; t > i; i++) {
                var n = this.group.getChildAt(i);
                n.destroy()
            }
            e.prototype.destroy.call(this)
        },
        i.prototype.addEvent = function() {
            ImageButtonUtil.add(this.btnClose, this.hide, this)
        },
        i.prototype.init = function() {
            var e = this;
            config.Startrekbuffinfo.load(function() {
                for (var i in e.arrBuff) for (var n = config.Startrekbuffinfo.getItemsByField("BuffId", ["=="], [i])[0], r = e.arrBuff[i], o = 0; r > o; o++) {
                    var a = new t.AwardPopAwardBagItem;
                    e.group.addChild(a),
                    a.setInfo(n, 1)
                }
            },
            this)
        },
        i
    } (PopView);
    t.BagPop = e,
    __reflect(e.prototype, "pveStarTrek.BagPop")
} (pveStarTrek || (pveStarTrek = {}));
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
pveStarTrek; !
function(t) {
    var e = function(e) {
        function i(i) {
            var n = e.call(this) || this;
            n.skinName = "";
            var r = new t.AwardPopAwardItem;
            return n.addChild(r),
            r.scaleX = r.scaleY = 1.3,
            r.setInfo(i),
            r.txtClose.visible = !0,
            n
        }
        return __extends(i, e),
        i
    } (PopView);
    t.BuffPop = e,
    __reflect(e.prototype, "pveStarTrek.BuffPop")
} (pveStarTrek || (pveStarTrek = {}));
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
pveStarTrek; !
function(t) {
    var e = function(e) {
        function i(t, i, n, r, o) {
            void 0 === o && (o = !1);
            var a = e.call(this) || this;
            return a.skinName = "PveStarTrekChallengePopSkin",
            a.cacheAsBitmap = !0,
            a.to = r,
            a.level = t,
            a.arrBoss = i,
            a.arrAward = n,
            a.isLookOver = o,
            a
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            this.init(),
            this.addEvent()
        },
        i.prototype.init = function() {
            for (var e = 0,
            i = this.arrBoss; e < i.length; e++) {
                var n = i[e],
                r = new t.PveStarTrekPetItem;
                this.groupPet.addChild(r),
                r.imgHead.source = ClientConfig.getPetHeadPath(n),
                r.imgSelect.visible = !1,
                r.height = r.imgBG.height = 111
            }
            for (var o = 0,
            a = this.arrAward; o < a.length; o++) {
                var s = a[o],
                r = new t.MainPanelAwardItem;
                this.groupAward.addChild(r),
                r.setItemInfo(s[1], s[2]),
                r.resetButton()
            }
            this.txt.text = ["普通", "精英", "领主"][this.level] + "海盗",
            this.btnChallenge.visible = !this.isLookOver
        },
        i.prototype.addEvent = function() {
            var e = this;
            ImageButtonUtil.add(this.btnClose, this.hide, this),
            ImageButtonUtil.add(this.btnChallenge,
            function() {
                e.hide(),
                PopViewManager.getInstance().openView(new t.PreparePop(e.to))
            },
            this)
        },
        i.prototype.destroy = function() {
            ImageButtonUtil.removeAll(this),
            e.prototype.destroy.call(this)
        },
        i
    } (PopView);
    t.ChallengePop = e,
    __reflect(e.prototype, "pveStarTrek.ChallengePop")
} (pveStarTrek || (pveStarTrek = {}));
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
pveStarTrek; !
function(t) {
    var e = function(t) {
        function e(e) {
            var i = t.call(this) || this;
            return i.skinName = "PveStarTrekMallPetPopSkin",
            i.info = e,
            i
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            this.init(),
            this.addEvent()
        },
        e.prototype.init = function() {
            this.imgHead.source = ClientConfig.getPetHeadPath( + this.info.PetID),
            this.txtHP.text = "HP:" + this.info.HP + "/" + this.info.HP,
            this.txtLevelName.text = "LV.100 " + PetXMLInfo.getName( + this.info.PetID) + "（援）",
            this.txtAttack.text = this.info.Atk + "",
            this.txtSpeed.text = this.info.Spd + "",
            this.txtDefence.text = this.info.Def + "",
            this.txtSAttack.text = this.info.SP_Atk + "",
            this.txtHp.text = this.info.HP + "",
            this.txtSDefence.text = this.info.SP_Def + "",
            this.txtDes1.text = this.info.title.split("_")[0] || "",
            this.txtDes2.text = this.info.title.split("_")[1] || ""
        },
        e.prototype.addEvent = function() {
            ImageButtonUtil.add(this.btnClose, this.hide, this)
        },
        e.prototype.destroy = function() {
            ImageButtonUtil.removeAll(this),
            t.prototype.destroy.call(this)
        },
        e
    } (PopView);
    t.MallPetPop = e,
    __reflect(e.prototype, "pveStarTrek.MallPetPop")
} (pveStarTrek || (pveStarTrek = {}));
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
pveStarTrek; !
function(t) {
    var e = function(e) {
        function i(t, i, n) {
            void 0 === n && (n = !1);
            var r = e.call(this) || this;
            return r.skinName = "PveStarTrekMallPopSkin",
            r.mallId = t,
            r.service = i,
            r.isLookOver = n,
            r
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            this.init(),
            this.addEvent()
        },
        i.prototype.init = function() {
            var e = this,
            i = [20365 + 2 * this.mallId, 20366 + 2 * this.mallId];
            KTool.getMultiValue(i,
            function(i) {
                for (var n = [], r = 0; 2 > r; r++) for (var o = 0; 4 > o; o++) {
                    var a = i[r] >> 8 * o & 255,
                    s = {};
                    s.id = a % 100,
                    s.has = a > 100,
                    n.push(s)
                }
                config.Startrekshopconfig.load(function() {
                    for (var i in n) {
                        var r = n[i],
                        o = config.Startrekshopconfig.getItemsByField("GoodsID", ["=="], [r.id])[0];
                        if (o) {
                            var a = new t.MallItem;
                            e.group.addChild(a),
                            a.setInfo(o, r.has, +i + 1, e.isLookOver, e.service.getValue(20377))
                        }
                    }
                },
                e)
            }),
            this.txtCoin.text = this.service.getValue(20377) + ""
        },
        i.prototype.addEvent = function() {
            var e = this;
            ImageButtonUtil.add(this.btnClose, this.hide, this),
            EventManager.addEventListener(t.EventConst.AFTER_BUY_GOOD,
            function() {
                e.service.updateValues().then(function() {
                    var i = e.service.getValue(20356);
                    if (i > 0) {
                        var n = PopViewManager.createDefaultStyleObject();
                        n.maskShapeStyle.maskAlpha = .8,
                        n.ignoreMaskClick = !0,
                        PopViewManager.getInstance().openView(new t.AwardPop(i, e.service), n)
                    }
                    e.txtCoin.text = e.service.getValue(20377) + "",
                    EventManager.dispatchEventWith(t.EventConst.UPDATE_COIN)
                })
            },
            this)
        },
        i.prototype.destroy = function() {
            EventManager.removeAll(this),
            ImageButtonUtil.removeAll(this),
            e.prototype.destroy.call(this)
        },
        i
    } (PopView);
    t.MallPop = e,
    __reflect(e.prototype, "pveStarTrek.MallPop")
} (pveStarTrek || (pveStarTrek = {}));
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
    return new(i || (i = Promise))(function(r, o) {
        function a(t) {
            try {
                _(n.next(t))
            } catch(e) {
                o(e)
            }
        }
        function s(t) {
            try {
                _(n["throw"](t))
            } catch(e) {
                o(e)
            }
        }
        function _(t) {
            t.done ? r(t.value) : new i(function(e) {
                e(t.value)
            }).then(a, s)
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
            if (r = 1, o && (a = o[2 & i[0] ? "return": i[0] ? "throw": "next"]) && !(a = a.call(o, i[1])).done) return a;
            switch (o = 0, a && (i = [0, a.value]), i[0]) {
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
                o = i[1],
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
            i = e.call(t, _)
        } catch(n) {
            i = [6, n],
            o = 0
        } finally {
            r = a = 0
        }
        if (5 & i[0]) throw i[1];
        return {
            value: i[0] ? i[1] : void 0,
            done: !0
        }
    }
    var r, o, a, s, _ = {
        label: 0,
        sent: function() {
            if (1 & a[0]) throw a[1];
            return a[1]
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
pveStarTrek; !
function(t) {
    var e = function(e) {
        function i(t, i, n) {
            var r = e.call(this) || this;
            return r.skinName = "PveStarTrekPreparePanelPetPopSkin",
            r.type = i,
            r.petInfo = t,
            r.petItem = n,
            r
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            var e = this;
            this.groupSkill.visible = !1,
            this.imgMask.visible = !1,
            this.imgMask.addEventListener(egret.TouchEvent.TOUCH_TAP,
            function() {
                EventManager.dispatchEventWith(t.EventConst.END_CHANGE_SKILL)
            },
            this),
            this.btnUp.visible = 1 == this.type,
            this.btnDown.visible = 2 == this.type,
            ImageButtonUtil.add(this.btnUp,
            function() {
                EventManager.dispatchEventWith(t.EventConst.CHOOSE_PET_UP, !1, e.petInfo),
                PopViewManager.getInstance().hideView(e)
            },
            this),
            ImageButtonUtil.add(this.btnDown,
            function() {
                EventManager.dispatchEventWith(t.EventConst.CHOOSE_PET_DOWN, !1, e.petInfo),
                PopViewManager.getInstance().hideView(e)
            },
            this),
            this.init(),
            EventManager.addEventListener(t.EventConst.END_CHANGE_SKILL,
            function() {
                e.imgMask.visible = !1,
                gsap.to(e.groupSkill, {
                    x: 500,
                    alpha: 0,
                    duration: .3,
                    onComplete: function() {
                        e.groupSkill.x = 93,
                        e.groupSkill.alpha = 1,
                        e.groupSkill.visible = !1
                    }
                }),
                PetManager.upDateBagPetInfo(e.petInfo.catchTime,
                function(i) {
                    e.petInfo = i,
                    e.petItem.petInfo = i,
                    e.groupSkillItem.removeChildren();
                    for (var n = 0,
                    r = e.petInfo.skillArray; n < r.length; n++) {
                        var o = r[n];
                        o.petInfo = e.petInfo,
                        e.groupSkillItem.addChild(new t.SkillItem(o, !0))
                    }
                    if (e.petInfo.hideSKill) {
                        var a = void 0;
                        if (4 == SkillXMLInfo.getCategory(e.petInfo.hideSKill.id)) a = ClientConfig.getpettypeticon("prop");
                        else {
                            var s = SkillXMLInfo.getTypeID(e.petInfo.hideSKill.id);
                            a = ClientConfig.getpettypeticon(s + "")
                        }
                        e.imgFifthSkillIcon.source = a,
                        e.txtFifthSkillName.text = e.petInfo.hideSKill.name,
                        e.txtFifthSkill.text = "威力:" + e.petInfo.hideSKill.damage + "    PP:" + e.petInfo.hideSKill.pp + "/" + e.petInfo.hideSKill.maxPP
                    }
                    ImageButtonUtil.remove(e.btnChange),
                    ImageButtonUtil.remove(e.groupFifthSkill),
                    ImageButtonUtil.add(e.btnChange, e.showGroupFifthSkill, e),
                    ImageButtonUtil.add(e.groupFifthSkill,
                    function() {
                        tipsPop.TipsPop.openSkillPop({
                            id: e.petInfo.hideSKill.id
                        })
                    },
                    e, !1, !1)
                })
            },
            this)
        },
        i.prototype.init = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var e, i, n, r, o, a, s, _, u, l, h, p, c, g, f, o, m, v = this;
                return __generator(this,
                function(d) {
                    switch (d.label) {
                    case 0:
                        return this.petInfo instanceof PetStorage2015PetInfo ? (e = this, [4, PetManager.UpdateBagPetInfoAsynce(this.petInfo.catchTime)]) : [3, 2];
                    case 1:
                        e.petInfo = d.sent(),
                        d.label = 2;
                    case 2:
                        for (this.txtLV.text = this.petInfo.level + "", this.txtTalent.text = this.petInfo.dv + "", this.txtNature.text = NatureXMLInfo.getName(this.petInfo.nature), i = PetManager.getPetEffect(this.petInfo), this.txtSNature.text = i ? PetEffectXMLInfo.getEffect(i.effectID, i.args) : "无", this.txtAttack1.text = this.petInfo.attack + "", this.txtSpeed1.text = this.petInfo.speed + "", this.txtDefence1.text = this.petInfo.defence + "", this.txtSAttack1.text = this.petInfo.s_a + "", this.txtHealth1.text = this.petInfo.maxHp + "", this.txtSDefence1.text = this.petInfo.s_d + "", this.txtAttack2.text = this.petInfo.ev_attack + "", this.txtSpeed2.text = this.petInfo.ev_sp + "", this.txtDefence2.text = this.petInfo.ev_defence + "", this.txtSAttack2.text = this.petInfo.ev_sa + "", this.txtHealth2.text = this.petInfo.ev_hp + "", this.txtSDefence2.text = this.petInfo.ev_sd + "", this.arrMarkId = [], this.arrMarkId[1] = CountermarkXMLInfo.getMarkId(this.petInfo.abilityMark), this.arrMarkId[2] = CountermarkXMLInfo.getMarkId(this.petInfo.skillMark), this.arrMarkId[3] = CountermarkXMLInfo.getMarkId(this.petInfo.commonMark), this.imgMark1.source = this.arrMarkId[1] ? CountermarkXMLInfo.getIconURL(this.arrMarkId[1]) : "", this.imgMark2.source = this.arrMarkId[2] ? CountermarkXMLInfo.getIconURL(this.arrMarkId[2]) : "", this.imgMark3.source = this.arrMarkId[3] ? CountermarkXMLInfo.getIconURL(this.arrMarkId[3]) : "", n = function(t) {
                            r["imgMark" + t].source = r.arrMarkId[t] ? CountermarkXMLInfo.getIconURL(r.arrMarkId[t]) : "",
                            ImageButtonUtil.add(r["imgMark" + t],
                            function() {
                                tipsPop.TipsPop.openCounterMarkPop({
                                    ins: v.arrMarkId[t]
                                })
                            },
                            r)
                        },
                        r = this, o = 1; 3 >= o; o++) n(o);
                        for (this.groupFifthSkill.visible = !!this.petInfo.hideSKill, this.petInfo.hideSKill && (a = void 0, 4 == SkillXMLInfo.getCategory(this.petInfo.hideSKill.id) ? a = ClientConfig.getpettypeticon("prop") : (s = SkillXMLInfo.getTypeID(this.petInfo.hideSKill.id), a = ClientConfig.getpettypeticon(s + "")), this.imgFifthSkillIcon.source = a, this.txtFifthSkillName.text = this.petInfo.hideSKill.name, this.txtFifthSkill.text = "威力:" + this.petInfo.hideSKill.damage + "    PP:" + this.petInfo.hideSKill.pp + "/" + this.petInfo.hideSKill.maxPP, ImageButtonUtil.add(this.groupFifthSkill,
                        function() {
                            tipsPop.TipsPop.openSkillPop({
                                id: v.petInfo.hideSKill.id
                            })
                        },
                        this, !1, !1), ImageButtonUtil.add(this.btnChange, this.showGroupFifthSkill, this)), this.btnChange.visible = !1, _ = PetXMLInfo.getAdditionFifthSkill(this.petInfo.id), _.length > 0 && this.petInfo.hideSKill && (this.btnChange.visible = !0), u = 0, l = this.petInfo.skillArray; u < l.length; u++) h = l[u],
                        h.petInfo = this.petInfo,
                        this.groupSkillItem.addChild(new t.SkillItem(h, !0));
                        if (EventManager.addEventListener(t.EventConst.START_CHANGE_SKILL, this.showGroupSkill, this), UICjsUtil.init(), UICjsUtil.start(), UICjsUtil.setContainer(this.groupPetAni), p = this.petInfo.id, this.petInfo.skinId > 0 && (p = PetSkinXMLInfo.getSkinInfo(this.petInfo.skinId).skinPetId), UICjsUtil.GetShowPetMovieClip(p).then(function(t) {
                            UICjsUtil.showAnimate(t);
                            var e = PetXMLInfo.getPetOffset(v.petInfo.id);
                            t && (t.regX = e.x, t.regY = e.y),
                            v.touchEnabled = !1
                        }), this.imgAttri.source = ClientConfig.getpettypeticon(PetXMLInfo.getType(this.petInfo.id)), this.txtName.text = this.petInfo.name, this.imgEff.width = PetManager.checkShowEffectIcon(this.petInfo.id) ? 26 : 0, PetManager.checkPetInfoEffect(this.petInfo,
                        function(t) {
                            return __awaiter(v, void 0, void 0,
                            function() {
                                var e;
                                return __generator(this,
                                function(i) {
                                    switch (i.label) {
                                    case 0:
                                        return [4, KTool.checkHasAdvanced(this.petInfo)];
                                    case 1:
                                        return e = i.sent(),
                                        this.imgEff.width = t ? e ? 28 : 26 : 0,
                                        this.imgEff.source = e ? PetAdvanceXMLInfo.getAdvSignSource(this.petInfo.id) : "pve_star_trek_prepare_panel_pet_pop_zstx_png",
                                        [2]
                                    }
                                })
                            })
                        },
                        this), ImageButtonUtil.add(this.imgEff,
                        function() {
                            ModuleManager.showModule("petEffDescPanel", ["pet_eff_desc_panel"], v.petInfo, "", AppDoStyle.NULL)
                        },
                        this), c = EffectIconControl.getAllEffctByPetId(this.petInfo.id), c && (g = c[0].kind, null != g)) for (f = g.toString().split(" ").map(Number), o = 0; o < f.length; o++) m = new eui.Image("pet_bag_tag" + (f[o] + 1) + "_png"),
                        this.groupTag.addChild(m);
                        return [2]
                    }
                })
            })
        },
        i.prototype.destroy = function() {
            e.prototype.destroy.call(this),
            EventManager.removeAll(this),
            ImageButtonUtil.removeAll(this),
            UICjsUtil.disposePetCls(this.petInfo.id)
        },
        i.prototype.showGroupSkill = function(e) {
            var i = this;
            this.groupSkill.visible = !0,
            egret.lifecycle.stage.touchChildren = !1,
            gsap.from(this.groupSkill, {
                x: 500,
                alpha: 0,
                duration: .3,
                onComplete: function() {
                    i.imgMask.visible = !0,
                    egret.lifecycle.stage.touchChildren = !0
                }
            }),
            this.groupAllSkill.removeChildren(),
            PetManager.getAllSkillCanUse(this.petInfo, [2, 5, 6]).then(function(n) {
                n = n.filter(function(t) {
                    return ! t.hasUse
                });
                for (var r = 0,
                o = n; r < o.length; r++) {
                    var a = o[r],
                    s = a.skillId,
                    _ = SkillXMLInfo.getSkillObj(s),
                    u = {};
                    u.id = _.ID,
                    u.name = _.Name,
                    u.damage = _.Power || 0,
                    u.pp = _.MaxPP,
                    u.maxPP = _.MaxPP,
                    u.petInfo = i.petInfo,
                    a.info.Rec && (a.info.Tag ? u.tag = 2 + a.info.Tag: u.tag = 2),
                    i.groupAllSkill.addChild(new t.SkillItem(u, !1, {
                        oldSkillId: e.data,
                        catchTime: i.petInfo.catchTime
                    }))
                }
            })
        },
        i.prototype.showGroupFifthSkill = function() {
            var e = this;
            this.groupSkill.visible = !0,
            egret.lifecycle.stage.touchChildren = !1,
            gsap.from(this.groupSkill, {
                x: 500,
                alpha: 0,
                duration: .3,
                onComplete: function() {
                    e.imgMask.visible = !0,
                    egret.lifecycle.stage.touchChildren = !0
                }
            }),
            this.groupAllSkill.removeChildren(),
            PetManager.getAllSkillCanUse(this.petInfo, [1, 3, 4, 6]).then(function(i) {
                i = i.filter(function(t) {
                    return ! t.hasUse
                });
                for (var n = 0,
                r = i; n < r.length; n++) {
                    var o = r[n],
                    a = o.skillId,
                    s = SkillXMLInfo.getSkillObj(a),
                    _ = {};
                    _.id = s.ID,
                    _.name = s.Name,
                    _.damage = s.Power || 0,
                    _.pp = s.MaxPP,
                    _.maxPP = s.MaxPP,
                    _.petInfo = e.petInfo,
                    o.info.Rec && (o.info.Tag ? _.tag = 2 + o.info.Tag: _.tag = 2),
                    e.groupAllSkill.addChild(new t.SkillItem(_, !1, {
                        oldSkillId: e.petInfo.hideSKill.id,
                        catchTime: e.petInfo.catchTime
                    },
                    !0))
                }
            })
        },
        i
    } (PopView);
    t.PetPop = e,
    __reflect(e.prototype, "pveStarTrek.PetPop")
} (pveStarTrek || (pveStarTrek = {}));
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
pveStarTrek; !
function(t) {
    var e = function(e) {
        function i(t) {
            var i = e.call(this) || this;
            return i.skinName = "PveStarTrekPreparePopSkin",
            i.groupRight.cacheAsBitmap = !0,
            i.grpStatic.cacheAsBitmap = !0,
            i.group1.cacheAsBitmap = !0,
            i.to = t,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            this.init(),
            this.addEvent()
        },
        i.prototype.init = function() {
            var e = this;
            this.arrPetItem = [],
            this.groupRight.visible = !1,
            config.Startrekshopconfig.load(function() {},
            this),
            SocketConnection.sendByQueue(42126, [20230130],
            function(i) {
                for (var n = i.data,
                r = n.readUnsignedInt(), o = [], a = 0; r > a; a++) {
                    var s = n.readUnsignedInt(),
                    _ = new PetInfo(n);
                    o.push({
                        index: s,
                        petInfo: _
                    })
                }
                o.sort(function(t, e) {
                    return + !!e.petInfo.hp - +!!t.petInfo.hp
                });
                for (var u = function(i) {
                    var n = new t.PveStarTrekPetItem;
                    e.group2.addChild(n);
                    var r = i.index,
                    o = i.petInfo;
                    n.index = r,
                    n.setPetInfo(4, o),
                    e.arrPetItem[r] = n,
                    o.hp <= 0 ? (n.canClick = !1, n.imgHasDie.visible = !0, DisplayUtil.setEnabled(n, !1, !0)) : t.ChallengePanel.arrUpCache && -1 != t.ChallengePanel.arrUpCache.indexOf(o.catchTime) && (0 == t.ChallengePanel.arrUpCache.indexOf(o.catchTime) ? egret.setTimeout(function() {
                        e.curPetItem = n,
                        e.onPetUp(),
                        e.onPetFirst()
                    },
                    e, 0) : e.autoPetUp(n))
                },
                l = 0, h = o; l < h.length; l++) {
                    var p = h[l];
                    u(p)
                }
            });
            for (var i = 0; 6 > i; i++) {
                var n = new t.PveStarTrekPetItem;
                this.group1.addChild(n),
                n.setPetInfo(3, 0, 0 == i)
            }
        },
        i.prototype.addEvent = function() {
            var e = this;
            EventManager.addEventListener(t.EventConst.SELECT_PET, this.onSelectPet, this),
            ImageButtonUtil.add(this.btnClose, this.hide, this),
            ImageButtonUtil.add(this.btnUp, this.onPetUp, this),
            ImageButtonUtil.add(this.btnDown, this.onPetDown, this),
            ImageButtonUtil.add(this.btnFirst, this.onPetFirst, this),
            ImageButtonUtil.add(this.btnFight, this.onFight, this),
            ImageButtonUtil.add(this.imgHead,
            function() {
                var i = e.curPetItem.petInfo,
                n = config.Startrekshopconfig.getItemsByField("PetID", ["=="], [i.id])[0];
                PopViewManager.getInstance().openView(new t.MallPetPop(n))
            },
            this, !0, !0,
            function() {
                return (2147483647 & e.curPetItem.petInfo.catchTime) <= 1e3
            })
        },
        i.prototype.destroy = function() {
            EventManager.removeAll(this),
            ImageButtonUtil.removeAll(this),
            e.prototype.destroy.call(this)
        },
        i.prototype.onSelectPet = function(e) {
            this.groupRight.visible = !0;
            var i, n = e.data.index,
            r = e.data.type;
            if (n > 0 || 0 == n && 4 == r) {
                i = this.arrPetItem[n];
                for (var o = 0,
                a = this.arrPetItem; o < a.length; o++) {
                    var s = a[o];
                    s.imgSelect.visible = s.index == n
                }
                for (var _ = 0; 6 > _; _++) {
                    var s = this.group1.getChildAt(_);
                    s.imgSelect.visible = !1
                }
            } else {
                for (var _ = 0; 6 > _; _++) {
                    var s = this.group1.getChildAt(_);
                    s.imgSelect.visible = s.index == n,
                    s.index == n && (i = s)
                }
                for (var u = 0,
                l = this.arrPetItem; u < l.length; u++) {
                    var s = l[u];
                    s.imgSelect.visible = !1
                }
            }
            var h = i.petInfo,
            p = (2147483647 & h.catchTime) <= 1e3;
            this.curPetItem = i,
            this.imgHead.source = ClientConfig.getPetHeadPath(h.id, h.catchTime, h.skinId),
            this.txtLVName.text = "LV." + h.level + " " + (h.name + (p ? "（援）": "")),
            this.txtHP.text = "HP:" + h.hp + "/" + h.maxHp,
            this.progressHP.value = h.hp / h.maxHp * 100,
            this.imgLook.visible = p,
            this.txtAttack.text = h.attack + "",
            this.txtSpeed.text = h.speed + "",
            this.txtDefence.text = h.defence + "",
            this.txtSAttack.text = h.s_a + "",
            this.txtHp.text = h.maxHp + "",
            this.txtSDefence.text = h.s_d + "",
            this.groupSkillItem.removeChildren();
            for (var c = 0,
            g = h.skillArray; c < g.length; c++) {
                var f = g[c];
                f.petInfo = h;
                var s = new t.SkillItem(f);
                this.groupSkillItem.addChild(s),
                s.group.height = 55,
                s.group.getChildAt(0).height = 55,
                s.imgIcon.y = 3,
                s.txtName.y = 5,
                s.txt.y = 33
            }
            if (this.groupFifthSkill.visible = !!h.hideSKill, h.hideSKill) {
                var m = void 0;
                if (4 == SkillXMLInfo.getCategory(h.hideSKill.id)) m = ClientConfig.getpettypeticon("prop");
                else {
                    var v = SkillXMLInfo.getTypeID(h.hideSKill.id);
                    m = ClientConfig.getpettypeticon(v + "")
                }
                this.imgFifthProp.source = m,
                this.txtFifthSkillName.text = h.hideSKill.name,
                this.txtFifthSkill.text = "威力:" + h.hideSKill.damage + "    PP:" + h.hideSKill.pp + "/" + h.hideSKill.maxPP,
                ImageButtonUtil.add(this.groupFifthSkill,
                function() {
                    tipsPop.TipsPop.openSkillPop({
                        id: h.hideSKill.id
                    })
                },
                this, !1, !1)
            }
            this.btnFirst.visible = 3 == i.type && !i.isFirst,
            this.btnDown.visible = 3 == i.type,
            this.btnUp.visible = 4 == i.type && !this.group1.getChildAt(5).petInfo
        },
        i.prototype.onPetUp = function() {
            if (this.curPetItem && void 0 != this.curPetItem.index && !(this.curPetItem.index < 0)) {
                this.curPetItem.canClick = !1,
                DisplayUtil.setEnabled(this.curPetItem, !1, !0);
                for (var t = this.curPetItem.index,
                e = 0; 6 > e; e++) {
                    var i = this.group1.getChildAt(e);
                    if (!i.petInfo) {
                        i.setPetInfo(3, this.curPetItem.petInfo, i.isFirst),
                        i.index = -t,
                        this.onSelectPet({
                            data: {
                                index: -t,
                                type: 3
                            }
                        });
                        break
                    }
                }
            }
        },
        i.prototype.autoPetUp = function(t) {
            t.canClick = !1,
            DisplayUtil.setEnabled(t, !1, !0);
            for (var e = t.index,
            i = 0; 6 > i; i++) {
                var n = this.group1.getChildAt(i);
                if (!n.petInfo) {
                    n.setPetInfo(3, t.petInfo, n.isFirst),
                    n.index = -e;
                    break
                }
            }
        },
        i.prototype.onPetDown = function() {
            if (this.curPetItem && void 0 != this.curPetItem.index && !(this.curPetItem.index > 0)) {
                this.curPetItem.setPetInfo(3, 0, this.curPetItem.isFirst);
                var t = -this.curPetItem.index;
                this.curPetItem.index = void 0;
                for (var e = 0,
                i = this.arrPetItem; e < i.length; e++) {
                    var n = i[e];
                    if (n.index == t) {
                        n.canClick = !0,
                        DisplayUtil.setEnabled(n, !0, !1),
                        this.onSelectPet({
                            data: {
                                index: t,
                                type: 4
                            }
                        });
                        break
                    }
                }
                for (var r = 0; 5 > r; r++) {
                    var o = this.group1.getChildAt(r),
                    a = this.group1.getChildAt(r + 1); ! o.petInfo && a.petInfo && (o.setPetInfo(3, a.petInfo, o.isFirst), a.setPetInfo(3, 0, !1), o.index = a.index, a.index = void 0)
                }
            }
        },
        i.prototype.onPetFirst = function() {
            if (this.curPetItem && !this.curPetItem.isFirst && void 0 != this.curPetItem.index && this.curPetItem.parent == this.group1) {
                var t = this.group1.getChildAt(0),
                e = [t.petInfo, t.index],
                i = e[0],
                n = e[1];
                t.setPetInfo(3, this.curPetItem.petInfo, !0),
                t.index = this.curPetItem.index,
                this.curPetItem.setPetInfo(3, i, !1),
                this.curPetItem.index = n,
                this.onSelectPet({
                    data: {
                        index: t.index,
                        type: 3
                    }
                })
            }
        },
        i.prototype.onFight = function() {
            var e = this,
            i = [];
            t.ChallengePanel.arrUpCache = [];
            for (var n = 0; 6 > n; n++) {
                var r = this.group1.getChildAt(n);
                r.index <= 0 && (i.push( - r.index), t.ChallengePanel.arrUpCache.push(r.petInfo.catchTime))
            }
            i.length > 0 ? SocketConnection.sendByQueue(42395, [114, 11, this.to, 0],
            function() {
                SocketConnection.sendByQueue(42128, [20230130, i.length].concat(i),
                function() {
                    e.hide(),
                    t.ChallengePanel.backFromFight = !0
                })
            }) : BubblerManager.getInstance().showText("至少需要1名出战精灵")
        },
        i
    } (PopView);
    t.PreparePop = e,
    __reflect(e.prototype, "pveStarTrek.PreparePop")
} (pveStarTrek || (pveStarTrek = {}));
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
pveStarTrek; !
function(t) {
    var e = function(t) {
        function e(e) {
            var i = t.call(this) || this;
            return i.skinName = "PveStarPopRecoveryPopSkin",
            i.callback = e,
            i
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            var t = this;
            ImageButtonUtil.add(this.btnClose, this.hide, this),
            ImageButtonUtil.add(this.btnBack, this.hide, this),
            ImageButtonUtil.add(this.btnGo,
            function() {
                t.callback(),
                t.hide()
            },
            this),
            this.btnBack.visible = this.btnGo.visible = !!this.callback
        },
        e.prototype.destroy = function() {
            ImageButtonUtil.removeAll(this),
            t.prototype.destroy.call(this)
        },
        e
    } (PopView);
    t.RecoveryPop = e,
    __reflect(e.prototype, "pveStarTrek.RecoveryPop")
} (pveStarTrek || (pveStarTrek = {}));
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
pveStarTrek; !
function(t) {
    var e = function(t) {
        function e(e) {
            var i = t.call(this) || this;
            return i.skinName = "PveStarTrekSupplyPopSkin",
            i.callback = e,
            i
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            var t = this;
            ImageButtonUtil.add(this.btnClose, this.hide, this),
            ImageButtonUtil.add(this.btnBack, this.hide, this),
            ImageButtonUtil.add(this.btnGo,
            function() {
                t.callback(),
                t.hide()
            },
            this)
        },
        e.prototype.destroy = function() {
            ImageButtonUtil.removeAll(this),
            t.prototype.destroy.call(this)
        },
        e
    } (PopView);
    t.SupplyPop = e,
    __reflect(e.prototype, "pveStarTrek.SupplyPop")
} (pveStarTrek || (pveStarTrek = {}));
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
generateEUI.paths["resource/eui_skins/item/PveStarTrekAwardItemSkin.exml"] = window.PveStarTrekAwardItemSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["imgSelect", "btnSelect", "imgRank", "imgIcon", "txtName", "txtRank", "txtDes", "txtClose"],
        this.elementsContent = [this._Image1_i(), this.imgSelect_i(), this.btnSelect_i(), this.imgRank_i(), this.imgIcon_i(), this.txtName_i(), this.txtRank_i(), this.txtDes_i(), this.txtClose_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "pve_star_trek_award_pop_imgbg_png",
        t.visible = !0,
        t.x = 0,
        t.y = 33,
        t
    },
    i.imgSelect_i = function() {
        var t = new eui.Image;
        return this.imgSelect = t,
        t.height = 387,
        t.scale9Grid = new egret.Rectangle(31, 31, 31, 32),
        t.source = "pve_star_trek_prepare_pop_imgselect_png",
        t.visible = !1,
        t.width = 199,
        t.x = 0,
        t.y = 33,
        t
    },
    i.btnSelect_i = function() {
        var t = new eui.Image;
        return this.btnSelect = t,
        t.source = "pve_star_trek_award_pop_btnselect_png",
        t.visible = !1,
        t.x = 57,
        t.y = 435,
        t
    },
    i.imgRank_i = function() {
        var t = new eui.Image;
        return this.imgRank = t,
        t.source = "pve_star_trek_award_pop_imglevel3bg_png",
        t.visible = !0,
        t.x = 18,
        t.y = 75,
        t
    },
    i.imgIcon_i = function() {
        var t = new eui.Image;
        return this.imgIcon = t,
        t.height = 153,
        t.visible = !0,
        t.width = 153,
        t.x = 23,
        t.y = 80,
        t
    },
    i.txtName_i = function() {
        var t = new eui.Label;
        return this.txtName = t,
        t.fontFamily = "REEJI",
        t.horizontalCenter = 0,
        t.size = 24,
        t.text = "死神镰刀",
        t.textColor = 16765477,
        t.visible = !0,
        t.y = 7,
        t
    },
    i.txtRank_i = function() {
        var t = new eui.Label;
        return this.txtRank = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = .5,
        t.size = 18,
        t.text = "传奇",
        t.textColor = 16765477,
        t.visible = !0,
        t.y = 53,
        t
    },
    i.txtDes_i = function() {
        var t = new eui.Label;
        return this.txtDes = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = 0,
        t.size = 18,
        t.text = "敌方精灵体力低于\n20%时，我方造成\n的所有伤害附带致\n死效果",
        t.textColor = 16777215,
        t.visible = !0,
        t.width = 160,
        t.y = 255,
        t
    },
    i.txtClose_i = function() {
        var t = new eui.Label;
        return this.txtClose = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = 0,
        t.size = 18,
        t.text = "点击任意空白位置关闭",
        t.textColor = 16777215,
        t.touchEnabled = !1,
        t.visible = !1,
        t.x = 30,
        t.y = 447,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/item/PveStarTrekBlockItemSkin.exml"] = window.PveStarTrekBlockItemSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["imgBlock", "imgIcon", "imgNext"],
        this.height = 155,
        this.width = 153,
        this.elementsContent = [this.imgBlock_i(), this.imgIcon_i(), this.imgNext_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.imgBlock_i = function() {
        var t = new eui.Image;
        return this.imgBlock = t,
        t.horizontalCenter = 0,
        t.pixelHitTest = !0,
        t.visible = !0,
        t
    },
    i.imgIcon_i = function() {
        var t = new eui.Image;
        return this.imgIcon = t,
        t.bottom = 70,
        t.horizontalCenter = 0,
        t.touchEnabled = !1,
        t.visible = !0,
        t
    },
    i.imgNext_i = function() {
        var t = new eui.Image;
        return this.imgNext = t,
        t.source = "pve_star_trek_block_item_imgnext_png",
        t.touchEnabled = !1,
        t.visible = !1,
        t.x = -20,
        t.y = 12,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/item/PveStarTrekListPetItemSkin.exml"] = window.PveStarTrekListPetItemSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = []
    }
    __extends(e, t);
    e.prototype;
    return e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/item/PveStarTrekMainPanelAwardItemSkin.exml"] = window.PveStarTrekMainPanelAwardItemSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["imgIcon", "txtNum"],
        this.height = 73,
        this.width = 73,
        this.elementsContent = [this._Image1_i(), this.imgIcon_i(), this.txtNum_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "common_item_bg_style_70_70_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.imgIcon_i = function() {
        var t = new eui.Image;
        return this.imgIcon = t,
        t.bottom = 10,
        t.left = 10,
        t.right = 10,
        t.top = 10,
        t
    },
    i.txtNum_i = function() {
        var t = new eui.Label;
        return this.txtNum = t,
        t.fontFamily = "MFShangHei",
        t.right = 6,
        t.size = 14,
        t.stroke = 1,
        t.strokeColor = 1712696,
        t.textColor = 16776958,
        t.y = 53,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/item/PveStarTrekMallItemSkin.exml"] = window.PveStarTrekMallItemSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["imgIcon", "txtCoin", "btnBuy", "txtName", "txtNum", "imgLook"],
        this.width = 120,
        this.elementsContent = [this._Image1_i(), this.imgIcon_i(), this.btnBuy_i(), this.txtName_i(), this.txtNum_i(), this.imgLook_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.horizontalCenter = 0,
        t.source = "pve_star_trek_mall_item_imgbg_png",
        t.visible = !0,
        t.y = 27,
        t
    },
    i.imgIcon_i = function() {
        var t = new eui.Image;
        return this.imgIcon = t,
        t.height = 69,
        t.horizontalCenter = 0,
        t.visible = !0,
        t.width = 69,
        t.y = 30,
        t
    },
    i.btnBuy_i = function() {
        var t = new eui.Group;
        return this.btnBuy = t,
        t.horizontalCenter = 0,
        t.y = 111,
        t.elementsContent = [this._Image2_i(), this._Group1_i()],
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "pve_star_trek_mall_item_imgbtn_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.horizontalCenter = 0,
        t.verticalCenter = 0,
        t.layout = this._HorizontalLayout1_i(),
        t.elementsContent = [this._Image3_i(), this.txtCoin_i()],
        t
    },
    i._HorizontalLayout1_i = function() {
        var t = new eui.HorizontalLayout;
        return t.verticalAlign = "middle",
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.height = 20,
        t.source = "pve_star_trek_challenge_panel_imgcoin_png",
        t.width = 20,
        t.x = 0,
        t.y = 0,
        t
    },
    i.txtCoin_i = function() {
        var t = new eui.Label;
        return this.txtCoin = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.textColor = 16777215,
        t.x = 24,
        t.y = 3,
        t
    },
    i.txtName_i = function() {
        var t = new eui.Label;
        return this.txtName = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = 0,
        t.size = 18,
        t.textColor = 4187130,
        t.y = 0,
        t
    },
    i.txtNum_i = function() {
        var t = new eui.Label;
        return this.txtNum = t,
        t.fontFamily = "MFShangHei",
        t.right = 27,
        t.size = 16,
        t.textColor = 16777215,
        t.y = 83,
        t
    },
    i.imgLook_i = function() {
        var t = new eui.Image;
        return this.imgLook = t,
        t.source = "pve_star_trek_prepare_pop_imglook_png",
        t.touchEnabled = !1,
        t.x = 67,
        t.y = 21,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/item/PveStarTrekPetItemSkin.exml"] = window.PveStarTrekPetItemSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["imgBG", "imgHead", "imgFirst", "imgSelect", "imgHasOn", "imgHasDie", "txtLv", "txtName"],
        this.width = 111,
        this.elementsContent = [this.imgBG_i(), this.imgHead_i(), this.imgFirst_i(), this.imgSelect_i(), this.imgHasOn_i(), this.imgHasDie_i(), this.txtLv_i(), this.txtName_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.imgBG_i = function() {
        var t = new eui.Image;
        return this.imgBG = t,
        t.scale9Grid = new egret.Rectangle(37, 105, 37, 25),
        t.source = "pve_star_trek_pet_item_imgbg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.imgHead_i = function() {
        var t = new eui.Image;
        return this.imgHead = t,
        t.height = 100,
        t.visible = !0,
        t.width = 100,
        t.x = 5,
        t.y = 5,
        t
    },
    i.imgFirst_i = function() {
        var t = new eui.Image;
        return this.imgFirst = t,
        t.source = "pve_star_trek_prepare_pop_imgfirst_png",
        t.visible = !1,
        t.x = 65,
        t.y = 86,
        t
    },
    i.imgSelect_i = function() {
        var t = new eui.Image;
        return this.imgSelect = t,
        t.height = 129,
        t.source = "pve_star_trek_prepare_pop_imgselect_png",
        t.visible = !1,
        t.width = 126,
        t.x = -8,
        t.y = -10,
        t
    },
    i.imgHasOn_i = function() {
        var t = new eui.Image;
        return this.imgHasOn = t,
        t.source = "pve_star_trek_event_pop_img_sz_png",
        t.visible = !1,
        t.x = 60,
        t.y = 86,
        t
    },
    i.imgHasDie_i = function() {
        var t = new eui.Image;
        return this.imgHasDie = t,
        t.source = "pve_star_trek_event_pop_img_zw_png",
        t.visible = !1,
        t.x = 60,
        t.y = 86,
        t
    },
    i.txtLv_i = function() {
        var t = new eui.Label;
        return this.txtLv = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.stroke = 1,
        t.strokeColor = 1320013,
        t.textColor = 16773477,
        t.visible = !0,
        t.x = 4,
        t.y = 4,
        t
    },
    i.txtName_i = function() {
        var t = new eui.Label;
        return this.txtName = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = 0,
        t.size = 16,
        t.textColor = 9025023,
        t.y = 110,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/item/PveStarTrekPetPopSkillItem.exml"] = window.PveStarTrekPetPopSkillItem = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["imgSelect", "imgIcon", "imgTag", "txt", "txtName", "group", "btnChange"],
        this.elementsContent = [this.imgSelect_i(), this.group_i(), this.btnChange_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.imgSelect_i = function() {
        var t = new eui.Image;
        return this.imgSelect = t,
        t.source = "pve_star_trek_prepare_panel_pet_pop_xzk_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.group_i = function() {
        var t = new eui.Group;
        return this.group = t,
        t.x = 11,
        t.y = 11,
        t.elementsContent = [this._Image1_i(), this.imgIcon_i(), this.imgTag_i(), this.txt_i(), this.txtName_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "pve_star_trek_prepare_panel_pet_pop_52_png",
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t
    },
    i.imgIcon_i = function() {
        var t = new eui.Image;
        return this.imgIcon = t,
        t.height = 25,
        t.width = 25,
        t.x = 6,
        t.y = 12,
        t
    },
    i.imgTag_i = function() {
        var t = new eui.Image;
        return this.imgTag = t,
        t.height = 17,
        t.right = 0,
        t.visible = !0,
        t.width = 40,
        t
    },
    i.txt_i = function() {
        var t = new eui.Label;
        return this.txt = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = 0,
        t.size = 18,
        t.textColor = 6027519,
        t.y = 48,
        t
    },
    i.txtName_i = function() {
        var t = new eui.Label;
        return this.txtName = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = 0,
        t.size = 18,
        t.textColor = 15068927,
        t.y = 16,
        t
    },
    i.btnChange_i = function() {
        var t = new eui.Image;
        return this.btnChange = t,
        t.source = "pve_star_trek_prepare_panel_pet_pop_btnrefresh_png",
        t.x = 170,
        t.y = 6,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/panel/PveStarTrekChallengePanelSkin.exml"] = window.PveStarTrekChallengePanelSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["block1", "block2", "block3", "block4", "block5", "block6", "block7", "block8", "block9", "block10", "block11", "block12", "block13", "block14", "block15", "block16", "block17", "block18", "block19", "block20", "block21", "block22", "block23", "block24", "imgHead", "imgDoor", "groupMap", "txtLevel", "imgCoin", "txtCoin", "btnBuff"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this._Scroller1_i(), this._Group1_i(), this._Group2_i(), this.btnBuff_i(), this._Group3_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Scroller1_i = function() {
        var t = new eui.Scroller;
        return t.bounces = !1,
        t.height = 640,
        t.left = 0,
        t.right = 0,
        t.y = 0,
        t.viewport = this.groupMap_i(),
        t
    },
    i.groupMap_i = function() {
        var t = new eui.Group;
        return this.groupMap = t,
        t.elementsContent = [this._Image1_i(), this.block1_i(), this.block2_i(), this.block3_i(), this.block4_i(), this.block5_i(), this.block6_i(), this.block7_i(), this.block8_i(), this.block9_i(), this.block10_i(), this.block11_i(), this.block12_i(), this.block13_i(), this.block14_i(), this.block15_i(), this.block16_i(), this.block17_i(), this.block18_i(), this.block19_i(), this.block20_i(), this.block21_i(), this.block22_i(), this.block23_i(), this.block24_i(), this.imgHead_i(), this.imgDoor_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "pve_star_trek_challenge_panel_bg02_jpg",
        t.visible = !0,
        t
    },
    i.block1_i = function() {
        var t = new pveStarTrek.ChallengePanelBlockItem;
        return this.block1 = t,
        t.skinName = "PveStarTrekBlockItemSkin",
        t.x = 136,
        t.y = 263,
        t
    },
    i.block2_i = function() {
        var t = new pveStarTrek.ChallengePanelBlockItem;
        return this.block2 = t,
        t.skinName = "PveStarTrekBlockItemSkin",
        t.x = 255,
        t.y = 205,
        t
    },
    i.block3_i = function() {
        var t = new pveStarTrek.ChallengePanelBlockItem;
        return this.block3 = t,
        t.skinName = "PveStarTrekBlockItemSkin",
        t.x = 255,
        t.y = 320,
        t
    },
    i.block4_i = function() {
        var t = new pveStarTrek.ChallengePanelBlockItem;
        return this.block4 = t,
        t.skinName = "PveStarTrekBlockItemSkin",
        t.x = 375,
        t.y = 146,
        t
    },
    i.block5_i = function() {
        var t = new pveStarTrek.ChallengePanelBlockItem;
        return this.block5 = t,
        t.skinName = "PveStarTrekBlockItemSkin",
        t.x = 377,
        t.y = 261,
        t
    },
    i.block6_i = function() {
        var t = new pveStarTrek.ChallengePanelBlockItem;
        return this.block6 = t,
        t.skinName = "PveStarTrekBlockItemSkin",
        t.x = 375,
        t.y = 376,
        t
    },
    i.block7_i = function() {
        var t = new pveStarTrek.ChallengePanelBlockItem;
        return this.block7 = t,
        t.skinName = "PveStarTrekBlockItemSkin",
        t.x = 497,
        t.y = 202,
        t
    },
    i.block8_i = function() {
        var t = new pveStarTrek.ChallengePanelBlockItem;
        return this.block8 = t,
        t.skinName = "PveStarTrekBlockItemSkin",
        t.x = 497,
        t.y = 317,
        t
    },
    i.block9_i = function() {
        var t = new pveStarTrek.ChallengePanelBlockItem;
        return this.block9 = t,
        t.skinName = "PveStarTrekBlockItemSkin",
        t.x = 617,
        t.y = 143,
        t
    },
    i.block10_i = function() {
        var t = new pveStarTrek.ChallengePanelBlockItem;
        return this.block10 = t,
        t.skinName = "PveStarTrekBlockItemSkin",
        t.x = 619,
        t.y = 258,
        t
    },
    i.block11_i = function() {
        var t = new pveStarTrek.ChallengePanelBlockItem;
        return this.block11 = t,
        t.skinName = "PveStarTrekBlockItemSkin",
        t.x = 617,
        t.y = 373,
        t
    },
    i.block12_i = function() {
        var t = new pveStarTrek.ChallengePanelBlockItem;
        return this.block12 = t,
        t.skinName = "PveStarTrekBlockItemSkin",
        t.x = 739,
        t.y = 201,
        t
    },
    i.block13_i = function() {
        var t = new pveStarTrek.ChallengePanelBlockItem;
        return this.block13 = t,
        t.skinName = "PveStarTrekBlockItemSkin",
        t.x = 739,
        t.y = 316,
        t
    },
    i.block14_i = function() {
        var t = new pveStarTrek.ChallengePanelBlockItem;
        return this.block14 = t,
        t.skinName = "PveStarTrekBlockItemSkin",
        t.x = 859,
        t.y = 142,
        t
    },
    i.block15_i = function() {
        var t = new pveStarTrek.ChallengePanelBlockItem;
        return this.block15 = t,
        t.skinName = "PveStarTrekBlockItemSkin",
        t.x = 861,
        t.y = 257,
        t
    },
    i.block16_i = function() {
        var t = new pveStarTrek.ChallengePanelBlockItem;
        return this.block16 = t,
        t.skinName = "PveStarTrekBlockItemSkin",
        t.x = 859,
        t.y = 372,
        t
    },
    i.block17_i = function() {
        var t = new pveStarTrek.ChallengePanelBlockItem;
        return this.block17 = t,
        t.skinName = "PveStarTrekBlockItemSkin",
        t.x = 981,
        t.y = 198,
        t
    },
    i.block18_i = function() {
        var t = new pveStarTrek.ChallengePanelBlockItem;
        return this.block18 = t,
        t.skinName = "PveStarTrekBlockItemSkin",
        t.x = 981,
        t.y = 313,
        t
    },
    i.block19_i = function() {
        var t = new pveStarTrek.ChallengePanelBlockItem;
        return this.block19 = t,
        t.skinName = "PveStarTrekBlockItemSkin",
        t.x = 1101,
        t.y = 139,
        t
    },
    i.block20_i = function() {
        var t = new pveStarTrek.ChallengePanelBlockItem;
        return this.block20 = t,
        t.skinName = "PveStarTrekBlockItemSkin",
        t.x = 1103,
        t.y = 254,
        t
    },
    i.block21_i = function() {
        var t = new pveStarTrek.ChallengePanelBlockItem;
        return this.block21 = t,
        t.skinName = "PveStarTrekBlockItemSkin",
        t.x = 1101,
        t.y = 369,
        t
    },
    i.block22_i = function() {
        var t = new pveStarTrek.ChallengePanelBlockItem;
        return this.block22 = t,
        t.skinName = "PveStarTrekBlockItemSkin",
        t.x = 1223,
        t.y = 200,
        t
    },
    i.block23_i = function() {
        var t = new pveStarTrek.ChallengePanelBlockItem;
        return this.block23 = t,
        t.skinName = "PveStarTrekBlockItemSkin",
        t.x = 1223,
        t.y = 315,
        t
    },
    i.block24_i = function() {
        var t = new pveStarTrek.ChallengePanelBlockItem;
        return this.block24 = t,
        t.skinName = "PveStarTrekBlockItemSkin",
        t.x = 1345,
        t.y = 256,
        t
    },
    i.imgHead_i = function() {
        var t = new eui.Image;
        return this.imgHead = t,
        t.source = "pve_star_trek_block_item_imgseer_png",
        t.touchEnabled = !1,
        t.x = 172,
        t.y = 229,
        t
    },
    i.imgDoor_i = function() {
        var t = new eui.Image;
        return this.imgDoor = t,
        t.source = "pve_star_trek_challenge_panel_imgdoor_imgdoor_png",
        t.x = 1588,
        t.y = 257,
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.horizontalCenter = 0,
        t.y = 49,
        t.elementsContent = [this._Image2_i(), this.txtLevel_i()],
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "pve_star_trek_challenge_panel_imglevel_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.txtLevel_i = function() {
        var t = new eui.Label;
        return this.txtLevel = t,
        t.fontFamily = "REEJI",
        t.size = 22,
        t.text = "第一关",
        t.textColor = 4183295,
        t.x = 68,
        t.y = 12,
        t
    },
    i._Group2_i = function() {
        var t = new eui.Group;
        return t.right = 27,
        t.y = 14,
        t.elementsContent = [this._Image3_i(), this.imgCoin_i(), this.txtCoin_i()],
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "pve_star_trek_challenge_panel_imgcoinbg_png",
        t.x = 0,
        t.y = 4,
        t
    },
    i.imgCoin_i = function() {
        var t = new eui.Image;
        return this.imgCoin = t,
        t.source = "pve_star_trek_challenge_panel_imgcoin_png",
        t.x = 16,
        t.y = 0,
        t
    },
    i.txtCoin_i = function() {
        var t = new eui.Label;
        return this.txtCoin = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.textColor = 12834813,
        t.x = 64,
        t.y = 5,
        t
    },
    i.btnBuff_i = function() {
        var t = new eui.Image;
        return this.btnBuff = t,
        t.source = "pve_star_trek_challenge_panel_btnpet_png",
        t.x = 51,
        t.y = 557,
        t
    },
    i._Group3_i = function() {
        var t = new eui.Group;
        return t.horizontalCenter = 0,
        t.y = 575,
        t.elementsContent = [this._Image4_i(), this._Label1_i()],
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.source = "pve_star_trek_challenge_panel_imgtips_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "点击任意前方相邻的格子，即可移动到对应位置",
        t.textColor = 16777215,
        t.x = 200,
        t.y = 10,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/panel/StarTrekMainPanelSkin.exml"] = window.StarTrekMainPanelSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["imgToggle1Off", "imgToggle1On", "imgItem1", "imgItem3", "txtItem1", "txtItem3", "imgToggle2Off", "imgToggle2On", "imgItem2", "txtItem2", "btnStart", "btnContinue", "btnReset", "imgFinish", "txtTimes", "groupAward", "grpStatic"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this._Image1_i(), this.grpStatic_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.bottom = 0,
        t.left = 0,
        t.right = 0,
        t.source = "star_trek_main_panel_bg_jpg",
        t.top = 0,
        t
    },
    i.grpStatic_i = function() {
        var t = new eui.Group;
        return this.grpStatic = t,
        t.bottom = 0,
        t.left = 0,
        t.right = 0,
        t.top = 0,
        t.elementsContent = [this._Group1_i(), this._Group2_i(), this._Image5_i(), this._Group3_i(), this._Group4_i(), this.groupAward_i()],
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.right = -26,
        t.scaleX = 1,
        t.scaleY = 1,
        t.visible = !0,
        t.x = 996,
        t.y = 11.999999999999986,
        t.elementsContent = [this._Image2_i(), this._Image3_i(), this.imgToggle1Off_i(), this.imgToggle1On_i(), this.imgItem1_i(), this.imgItem3_i(), this.txtItem1_i(), this.txtItem3_i()],
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "star_trek_main_panel_imgitem1bg_png",
        t.x = 0,
        t.y = 6,
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "star_trek_main_panel_imgitem1bg_png",
        t.x = -143,
        t.y = 6,
        t
    },
    i.imgToggle1Off_i = function() {
        var t = new eui.Image;
        return this.imgToggle1Off = t,
        t.source = "star_trek_main_panel_imgtoggle1off_png",
        t.visible = !1,
        t.x = 120,
        t.y = 7,
        t
    },
    i.imgToggle1On_i = function() {
        var t = new eui.Image;
        return this.imgToggle1On = t,
        t.source = "star_trek_main_panel_imgtoggle1on_png",
        t.visible = !1,
        t.x = 121,
        t.y = 5,
        t
    },
    i.imgItem1_i = function() {
        var t = new eui.Image;
        return this.imgItem1 = t,
        t.height = 30,
        t.width = 30,
        t.x = 14,
        t.y = 2,
        t
    },
    i.imgItem3_i = function() {
        var t = new eui.Image;
        return this.imgItem3 = t,
        t.height = 30,
        t.width = 30,
        t.x = -129,
        t.y = 2,
        t
    },
    i.txtItem1_i = function() {
        var t = new eui.Label;
        return this.txtItem1 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18.0101510119682,
        t.text = "999",
        t.textColor = 12834813,
        t.x = 58,
        t.y = 8,
        t
    },
    i.txtItem3_i = function() {
        var t = new eui.Label;
        return this.txtItem3 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18.0101510119682,
        t.text = "999",
        t.textColor = 12834813,
        t.x = -86,
        t.y = 8,
        t
    },
    i._Group2_i = function() {
        var t = new eui.Group;
        return t.right = 334,
        t.scaleX = 1,
        t.scaleY = 1,
        t.visible = !1,
        t.x = 637,
        t.y = 11.999999999999986,
        t.elementsContent = [this._Image4_i(), this.imgToggle2Off_i(), this.imgToggle2On_i(), this.imgItem2_i(), this.txtItem2_i()],
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.source = "star_trek_main_panel_imgitem1bg_png",
        t.x = 0,
        t.y = 6,
        t
    },
    i.imgToggle2Off_i = function() {
        var t = new eui.Image;
        return this.imgToggle2Off = t,
        t.source = "star_trek_main_panel_imgtoggle1off_png",
        t.x = 120,
        t.y = 7,
        t
    },
    i.imgToggle2On_i = function() {
        var t = new eui.Image;
        return this.imgToggle2On = t,
        t.source = "star_trek_main_panel_imgtoggle1on_png",
        t.visible = !0,
        t.x = 120,
        t.y = 5,
        t
    },
    i.imgItem2_i = function() {
        var t = new eui.Image;
        return this.imgItem2 = t,
        t.source = "star_trek_main_panel_imgitem2_png",
        t.x = 12,
        t.y = 0,
        t
    },
    i.txtItem2_i = function() {
        var t = new eui.Label;
        return this.txtItem2 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18.0101510119682,
        t.text = "999",
        t.textColor = 12834813,
        t.x = 64,
        t.y = 10,
        t
    },
    i._Image5_i = function() {
        var t = new eui.Image;
        return t.scaleX = 1,
        t.scaleY = 1,
        t.source = "star_trek_main_panel_imgaward_png",
        t.x = 1,
        t.y = 509.99999999999994,
        t
    },
    i._Group3_i = function() {
        var t = new eui.Group;
        return t.horizontalCenter = 0,
        t.scaleX = 1,
        t.scaleY = 1,
        t.width = 323,
        t.x = 407,
        t.y = 239.00000000000006,
        t.elementsContent = [this.btnStart_i(), this.btnContinue_i(), this.btnReset_i(), this.imgFinish_i()],
        t
    },
    i.btnStart_i = function() {
        var t = new eui.Image;
        return this.btnStart = t,
        t.source = "star_trek_main_panel_btnstart_png",
        t.verticalCenter = 0,
        t.visible = !1,
        t.x = 36,
        t
    },
    i.btnContinue_i = function() {
        var t = new eui.Image;
        return this.btnContinue = t,
        t.source = "star_trek_main_panel_btncontinue_png",
        t.visible = !1,
        t.x = 157,
        t.y = 124,
        t
    },
    i.btnReset_i = function() {
        var t = new eui.Image;
        return this.btnReset = t,
        t.source = "star_trek_main_panel_btnreset_png",
        t.visible = !1,
        t.x = 0,
        t.y = 124,
        t
    },
    i.imgFinish_i = function() {
        var t = new eui.Image;
        return this.imgFinish = t,
        t.source = "star_trek_main_panel_imgfinish_png",
        t.visible = !1,
        t.x = 43,
        t.y = 52,
        t
    },
    i._Group4_i = function() {
        var t = new eui.Group;
        return t.right = 41,
        t.scaleX = 1,
        t.scaleY = 1,
        t.x = 905,
        t.y = 591,
        t.elementsContent = [this._Label1_i(), this.txtTimes_i()],
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 20,
        t.text = "本周可探险次数：",
        t.textColor = 14278911,
        t.x = 0,
        t.y = 0,
        t
    },
    i.txtTimes_i = function() {
        var t = new eui.Label;
        return this.txtTimes = t,
        t.fontFamily = "MFShangHei",
        t.size = 20,
        t.text = "99",
        t.textColor = 4187130,
        t.width = 24,
        t.x = 166,
        t.y = 0,
        t
    },
    i.groupAward_i = function() {
        var t = new eui.Group;
        return this.groupAward = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.x = 36,
        t.y = 550,
        t.layout = this._HorizontalLayout1_i(),
        t
    },
    i._HorizontalLayout1_i = function() {
        var t = new eui.HorizontalLayout;
        return t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/panel/StarTrekPreparePanelSkin.exml"] = window.StarTrekPreparePanelSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["groupMenu", "btnStart", "btnOneKeyUp", "btnOneKeyDown", "groupUp", "rb1", "rb2", "rb3", "rb4", "groupBag1", "groupBag2", "groupBag", "txtSearch", "imgSort", "txtSort", "btnSort", "btnAttr", "list", "sortMask", "rb_id_sort_down", "rb_id_sort_up", "rb_lvl_sort_down", "rb_lvl_sort_up", "rb_tm_sort_down", "rb_tm_sort_up", "groupSort", "groupWarehouse"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this._Image1_i(), this.groupMenu_i(), this._Group4_i()]
    }
    __extends(e, t);
    var i = function(t) {
        function e() {
            t.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i()],
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "star_trek_prepare_panel_imgpage1down_png")]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t.percentHeight = 100,
            t.source = "star_trek_prepare_panel_imgpage1up_png",
            t.percentWidth = 100,
            t
        },
        e
    } (eui.Skin),
    n = function(t) {
        function e() {
            t.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i()],
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "star_trek_prepare_panel_imgpage2down_png")]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t.percentHeight = 100,
            t.source = "star_trek_prepare_panel_imgpage2up_png",
            t.percentWidth = 100,
            t
        },
        e
    } (eui.Skin),
    r = function(t) {
        function e() {
            t.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i()],
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "star_trek_prepare_panel_imgpage3down_png")]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t.percentHeight = 100,
            t.source = "star_trek_prepare_panel_imgpage3up_png",
            t.percentWidth = 100,
            t
        },
        e
    } (eui.Skin),
    o = function(t) {
        function e() {
            t.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i()],
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "star_trek_prepare_panel_imgpage4down_png")]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t.percentHeight = 100,
            t.source = "star_trek_prepare_panel_imgpage4up_png",
            t.percentWidth = 100,
            t
        },
        e
    } (eui.Skin),
    a = function(t) {
        function e() {
            t.call(this),
            this.skinParts = ["labelDisplay"],
            this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "pve_star_trek_sort_down_down_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "pve_star_trek_sort_down_up_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t
        },
        i.labelDisplay_i = function() {
            var t = new eui.Label;
            return this.labelDisplay = t,
            t.fontFamily = "MFShangHei",
            t.horizontalCenter = 0,
            t.verticalCenter = 0,
            t
        },
        e
    } (eui.Skin),
    s = function(t) {
        function e() {
            t.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "pve_star_trek_sort_up_down_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "pve_star_trek_sort_up_up_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("disabled", [])]
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
    _ = function(t) {
        function e() {
            t.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "pve_star_treklvl_sort_down_down_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "pve_star_treklvl_sort_down_up_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("disabled", [])]
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
    u = function(t) {
        function e() {
            t.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "pve_star_treklvl_sort_up_down_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "pve_star_treklvl_sort_up_up_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("disabled", [])]
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
    l = function(t) {
        function e() {
            t.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "pve_star_trektm_sort_down_down_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "pve_star_trektm_sort_down_up_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("disabled", [])]
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
    h = function(t) {
        function e() {
            t.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "pve_star_trektm_sort_up_down_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "pve_star_trektm_sort_up_up_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("disabled", [])]
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
    p = e.prototype;
    return p._Image1_i = function() {
        var t = new eui.Image;
        return t.bottom = 0,
        t.left = 0,
        t.right = 0,
        t.source = "common_ui_bg_3_jpg",
        t.top = 0,
        t.visible = !0,
        t
    },
    p.groupMenu_i = function() {
        var t = new eui.Group;
        return this.groupMenu = t,
        t.y = 48,
        t
    },
    p._Group4_i = function() {
        var t = new eui.Group;
        return t.height = 640,
        t.left = 212,
        t.right = 29,
        t.elementsContent = [this._Group3_i()],
        t
    },
    p._Group3_i = function() {
        var t = new eui.Group;
        return t.horizontalCenter = 0,
        t.scaleX = 1,
        t.scaleY = 1,
        t.width = 935,
        t.y = 62,
        t.elementsContent = [this._Image2_i(), this._Image3_i(), this.btnStart_i(), this.btnOneKeyUp_i(), this.btnOneKeyDown_i(), this._Label1_i(), this.groupUp_i(), this.groupBag_i(), this.groupWarehouse_i()],
        t
    },
    p._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "star_trek_prepare_panel_img1_png",
        t.x = 352,
        t.y = 172,
        t
    },
    p._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "star_trek_prepare_panel_img2_png",
        t.x = 506,
        t.y = 13,
        t
    },
    p.btnStart_i = function() {
        var t = new eui.Image;
        return this.btnStart = t,
        t.source = "star_trek_prepare_panel_btnstart_png",
        t.x = 662,
        t.y = 481,
        t
    },
    p.btnOneKeyUp_i = function() {
        var t = new eui.Image;
        return this.btnOneKeyUp = t,
        t.source = "star_trek_prepare_panel_btnonekeyup_png",
        t.visible = !0,
        t.x = 848,
        t.y = 16,
        t
    },
    p.btnOneKeyDown_i = function() {
        var t = new eui.Image;
        return this.btnOneKeyDown = t,
        t.source = "star_trek_prepare_panel_btnonekeydown_png",
        t.visible = !0,
        t.x = 848,
        t.y = 16,
        t
    },
    p._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "最多可选择6只70级以上的精灵",
        t.textColor = 10270182,
        t.x = 609,
        t.y = 23,
        t
    },
    p.groupUp_i = function() {
        var t = new eui.Group;
        return this.groupUp = t,
        t.x = 545,
        t.y = 118,
        t.layout = this._TileLayout1_i(),
        t
    },
    p._TileLayout1_i = function() {
        var t = new eui.TileLayout;
        return t.horizontalGap = 20,
        t.requestedColumnCount = 3,
        t.verticalGap = 40,
        t
    },
    p.groupBag_i = function() {
        var t = new eui.Group;
        return this.groupBag = t,
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image4_i(), this._Group1_i(), this.groupBag1_i(), this.groupBag2_i()],
        t
    },
    p._Image4_i = function() {
        var t = new eui.Image;
        return t.source = "star_trek_prepare_panel_imgleftbg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    p._Group1_i = function() {
        var t = new eui.Group;
        return t.width = 219,
        t.x = 96,
        t.y = 523,
        t.layout = this._HorizontalLayout1_i(),
        t.elementsContent = [this.rb1_i(), this.rb2_i(), this.rb3_i(), this.rb4_i()],
        t
    },
    p._HorizontalLayout1_i = function() {
        var t = new eui.HorizontalLayout;
        return t.gap = 25,
        t.horizontalAlign = "center",
        t
    },
    p.rb1_i = function() {
        var t = new eui.RadioButton;
        return this.rb1 = t,
        t.label = "1",
        t.scaleX = 1.5,
        t.scaleY = 1.5,
        t.x = 99,
        t.y = 47,
        t.skinName = i,
        t
    },
    p.rb2_i = function() {
        var t = new eui.RadioButton;
        return this.rb2 = t,
        t.label = "2",
        t.scaleX = 1.5,
        t.scaleY = 1.5,
        t.x = 109,
        t.y = 57,
        t.skinName = n,
        t
    },
    p.rb3_i = function() {
        var t = new eui.RadioButton;
        return this.rb3 = t,
        t.label = "3",
        t.scaleX = 1.5,
        t.scaleY = 1.5,
        t.x = 119,
        t.y = 67,
        t.skinName = r,
        t
    },
    p.rb4_i = function() {
        var t = new eui.RadioButton;
        return this.rb4 = t,
        t.label = "4",
        t.scaleX = 1.5,
        t.scaleY = 1.5,
        t.x = 129,
        t.y = 77,
        t.skinName = o,
        t
    },
    p.groupBag1_i = function() {
        var t = new eui.Group;
        return this.groupBag1 = t,
        t.x = 40,
        t.y = 13,
        t.layout = this._TileLayout2_i(),
        t
    },
    p._TileLayout2_i = function() {
        var t = new eui.TileLayout;
        return t.horizontalGap = 15,
        t.requestedColumnCount = 3,
        t.verticalGap = 10,
        t
    },
    p.groupBag2_i = function() {
        var t = new eui.Group;
        return this.groupBag2 = t,
        t.x = 40,
        t.y = 283,
        t.layout = this._TileLayout3_i(),
        t
    },
    p._TileLayout3_i = function() {
        var t = new eui.TileLayout;
        return t.horizontalGap = 15,
        t.requestedColumnCount = 3,
        t.verticalGap = 10,
        t
    },
    p.groupWarehouse_i = function() {
        var t = new eui.Group;
        return this.groupWarehouse = t,
        t.visible = !0,
        t.elementsContent = [this._Group2_i(), this.btnSort_i(), this.btnAttr_i(), this._Scroller1_i(), this.groupSort_i()],
        t
    },
    p._Group2_i = function() {
        var t = new eui.Group;
        return t.visible = !0,
        t.x = 257,
        t.elementsContent = [this._Image5_i(), this.txtSearch_i(), this._Image6_i()],
        t
    },
    p._Image5_i = function() {
        var t = new eui.Image;
        return t.height = 29,
        t.source = "common_search_bg_png",
        t.width = 160,
        t.x = 0,
        t.y = 0,
        t
    },
    p.txtSearch_i = function() {
        var t = new eui.EditableText;
        return this.txtSearch = t,
        t.fontFamily = "MFShangHei",
        t.prompt = "输入精灵名或ID",
        t.promptColor = 13097725,
        t.size = 16,
        t.textColor = 13097725,
        t.width = 120,
        t.x = 7,
        t.y = 7,
        t
    },
    p._Image6_i = function() {
        var t = new eui.Image;
        return t.source = "title_pop_2022_btnsearch_png",
        t.x = 131,
        t.y = 0,
        t
    },
    p.btnSort_i = function() {
        var t = new eui.Group;
        return this.btnSort = t,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image7_i(), this.imgSort_i(), this.txtSort_i()],
        t
    },
    p._Image7_i = function() {
        var t = new eui.Image;
        return t.source = "pve_star_trekNew_petfactor_cbg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    p.imgSort_i = function() {
        var t = new eui.Image;
        return this.imgSort = t,
        t.source = "pve_star_trek_img_down_png",
        t.visible = !0,
        t.x = 83,
        t.y = 9,
        t
    },
    p.txtSort_i = function() {
        var t = new eui.Label;
        return this.txtSort = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.textColor = 11586047,
        t.visible = !0,
        t.x = 9,
        t.y = 7,
        t
    },
    p.btnAttr_i = function() {
        var t = new eui.Image;
        return this.btnAttr = t,
        t.source = "pve_star_treknew_btnattr_png",
        t.visible = !0,
        t.x = 121,
        t.y = 0,
        t
    },
    p._Scroller1_i = function() {
        var t = new eui.Scroller;
        return t.height = 481,
        t.width = 375,
        t.x = 23,
        t.y = 64,
        t.viewport = this.list_i(),
        t
    },
    p.list_i = function() {
        var t = new eui.List;
        return this.list = t,
        t.layout = this._TileLayout4_i(),
        t
    },
    p._TileLayout4_i = function() {
        var t = new eui.TileLayout;
        return t.horizontalGap = 20,
        t.requestedColumnCount = 3,
        t.verticalGap = 12,
        t
    },
    p.groupSort_i = function() {
        var t = new eui.Group;
        return this.groupSort = t,
        t.anchorOffsetX = 295,
        t.anchorOffsetY = 75,
        t.height = 150,
        t.scaleX = 1,
        t.scaleY = 1,
        t.visible = !0,
        t.width = 590,
        t.x = 295,
        t.y = 117,
        t.elementsContent = [this.sortMask_i(), this._Image8_i(), this.rb_id_sort_down_i(), this.rb_id_sort_up_i(), this.rb_lvl_sort_down_i(), this.rb_lvl_sort_up_i(), this.rb_tm_sort_down_i(), this.rb_tm_sort_up_i()],
        t
    },
    p.sortMask_i = function() {
        var t = new eui.Group;
        return this.sortMask = t,
        t.height = 2e3,
        t.visible = !0,
        t.width = 3e3,
        t.x = -1e3,
        t.y = -1e3,
        t
    },
    p._Image8_i = function() {
        var t = new eui.Image;
        return t.height = 150,
        t.scale9Grid = new egret.Rectangle(2, 2, 16, 16),
        t.source = "new_tips_2021_11_img3_png",
        t.width = 590,
        t.x = 0,
        t.y = 0,
        t
    },
    p.rb_id_sort_down_i = function() {
        var t = new eui.RadioButton;
        return this.rb_id_sort_down = t,
        t.groupName = "pveStarTrek_sortRbg",
        t.label = "",
        t.value = "id_down",
        t.x = 29,
        t.y = 17,
        t.skinName = a,
        t
    },
    p.rb_id_sort_up_i = function() {
        var t = new eui.RadioButton;
        return this.rb_id_sort_up = t,
        t.groupName = "pveStarTrek_sortRbg",
        t.value = "id_up",
        t.x = 29,
        t.y = 83,
        t.skinName = s,
        t
    },
    p.rb_lvl_sort_down_i = function() {
        var t = new eui.RadioButton;
        return this.rb_lvl_sort_down = t,
        t.groupName = "pveStarTrek_sortRbg",
        t.value = "lvl_down",
        t.x = 179,
        t.y = 17,
        t.skinName = _,
        t
    },
    p.rb_lvl_sort_up_i = function() {
        var t = new eui.RadioButton;
        return this.rb_lvl_sort_up = t,
        t.groupName = "pveStarTrek_sortRbg",
        t.value = "lvl_up",
        t.x = 179,
        t.y = 83,
        t.skinName = u,
        t
    },
    p.rb_tm_sort_down_i = function() {
        var t = new eui.RadioButton;
        return this.rb_tm_sort_down = t,
        t.groupName = "pveStarTrek_sortRbg",
        t.value = "tm_down",
        t.x = 331,
        t.y = 17,
        t.skinName = l,
        t
    },
    p.rb_tm_sort_up_i = function() {
        var t = new eui.RadioButton;
        return this.rb_tm_sort_up = t,
        t.groupName = "pveStarTrek_sortRbg",
        t.value = "tm_up",
        t.x = 331,
        t.y = 83,
        t.skinName = h,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/pop/PveStarPopRecoveryPopSkin.exml"] = window.PveStarPopRecoveryPopSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["btnClose", "btnBack", "btnGo"],
        this.height = 286,
        this.width = 482,
        this.elementsContent = [this._Image1_i(), this._Image2_i(), this.btnClose_i(), this._Label1_i(), this._Label2_i(), this.btnBack_i(), this.btnGo_i(), this._Image3_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.bottom = 0,
        t.left = 0,
        t.right = 0,
        t.scale9Grid = new egret.Rectangle(7, 7, 6, 3),
        t.source = "pve_star_trek_challenge_pop_imgbg_png",
        t.top = 0,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "pve_star_trek_supply_pop_imgtitlebg_png",
        t.x = 1,
        t.y = 1,
        t
    },
    i.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.source = "pve_star_trek_challenge_pop_btnclose_png",
        t.x = 439,
        t.y = 1,
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "恢复全体精灵50%血量，50%PP值",
        t.textColor = 6153817,
        t.x = 42,
        t.y = 145,
        t
    },
    i._Label2_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "在航行中发现了一种神秘的胶囊，也许可以给我们精灵恢复部分力量，是否需要前往探索？",
        t.textColor = 13820671,
        t.width = 395,
        t.x = 41,
        t.y = 69,
        t
    },
    i.btnBack_i = function() {
        var t = new eui.Image;
        return this.btnBack = t,
        t.source = "pve_star_trek_supply_pop_btnback_png",
        t.x = 68,
        t.y = 214,
        t
    },
    i.btnGo_i = function() {
        var t = new eui.Image;
        return this.btnGo = t,
        t.source = "pve_star_trek_supply_pop_btngo_png",
        t.x = 275,
        t.y = 214,
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "pve_star_pop_recovery_pop_imgtitle_png",
        t.x = 37,
        t.y = 3,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/pop/PveStarTrekAwardPopSkin.exml"] = window.PveStarTrekAwardPopSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["group"],
        this.elementsContent = [this._Image1_i(), this.group_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.horizontalCenter = 0,
        t.source = "pve_star_trek_award_pop_imgtitle_png",
        t.y = 0,
        t
    },
    i.group_i = function() {
        var t = new eui.Group;
        return this.group = t,
        t.y = 70,
        t.layout = this._HorizontalLayout1_i(),
        t
    },
    i._HorizontalLayout1_i = function() {
        var t = new eui.HorizontalLayout;
        return t.gap = 60,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/pop/PveStarTrekBagPopSkin.exml"] = window.PveStarTrekBagPopSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["btnClose", "group"],
        this.height = 563,
        this.width = 1136,
        this.elementsContent = [this.btnClose_i(), this._Image1_i(), this._Scroller1_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.right = 15,
        t.source = "pve_star_trek_bag_pop_btnclose_png",
        t.y = 0,
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.horizontalCenter = 0,
        t.source = "pve_star_trek_bag_pop_imgtitle_png",
        t.y = 6,
        t
    },
    i._Scroller1_i = function() {
        var t = new eui.Scroller;
        return t.height = 472,
        t.horizontalCenter = 0,
        t.width = 1023,
        t.y = 70,
        t.viewport = this.group_i(),
        t
    },
    i.group_i = function() {
        var t = new eui.Group;
        return this.group = t,
        t.layout = this._TileLayout1_i(),
        t
    },
    i._TileLayout1_i = function() {
        var t = new eui.TileLayout;
        return t.paddingBottom = 0,
        t.paddingLeft = 10,
        t.paddingRight = 10,
        t.paddingTop = 10,
        t.requestedColumnCount = 6,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/pop/PveStarTrekChallengePopSkin.exml"] = window.PveStarTrekChallengePopSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["btnClose", "btnChallenge", "groupAward", "groupPet", "txt"],
        this.height = 431,
        this.width = 754,
        this.elementsContent = [this._Image1_i(), this._Image2_i(), this.btnClose_i(), this._Image3_i(), this.btnChallenge_i(), this._Image4_i(), this._Image5_i(), this.groupAward_i(), this.groupPet_i(), this._Label1_i(), this._Label2_i(), this.txt_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.bottom = 0,
        t.left = 0,
        t.right = 0,
        t.scale9Grid = new egret.Rectangle(7, 7, 3, 3),
        t.source = "pve_star_trek_challenge_pop_imgbg_png",
        t.top = 0,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "pve_star_trek_challenge_pop_imgtitlebg_png",
        t.x = 1,
        t.y = 0,
        t
    },
    i.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.source = "pve_star_trek_challenge_pop_btnclose_png",
        t.x = 712,
        t.y = 0,
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "pve_star_trek_challenge_pop_imgtitle_png",
        t.x = 37,
        t.y = 2,
        t
    },
    i.btnChallenge_i = function() {
        var t = new eui.Image;
        return this.btnChallenge = t,
        t.source = "pve_star_trek_challenge_pop_btnchallenge_png",
        t.x = 310,
        t.y = 360,
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.source = "pve_star_trek_challenge_pop_imgawardbg_png",
        t.x = 43,
        t.y = 257,
        t
    },
    i._Image5_i = function() {
        var t = new eui.Image;
        return t.source = "pve_star_trek_challenge_pop_imgline_png",
        t.x = 75,
        t.y = 264,
        t
    },
    i.groupAward_i = function() {
        var t = new eui.Group;
        return this.groupAward = t,
        t.horizontalCenter = 0,
        t.y = 264,
        t.layout = this._HorizontalLayout1_i(),
        t
    },
    i._HorizontalLayout1_i = function() {
        var t = new eui.HorizontalLayout;
        return t.gap = 12,
        t
    },
    i.groupPet_i = function() {
        var t = new eui.Group;
        return this.groupPet = t,
        t.horizontalCenter = 0,
        t.y = 97,
        t.layout = this._HorizontalLayout2_i(),
        t
    },
    i._HorizontalLayout2_i = function() {
        var t = new eui.HorizontalLayout;
        return t.gap = 24,
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.lineSpacing = 5.4,
        t.size = 18,
        t.text = "奖励",
        t.textColor = 8631026,
        t.width = 18,
        t.x = 50,
        t.y = 280,
        t
    },
    i._Label2_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "流浪在宇宙中的海盗团伙，击败后可获取奖励。",
        t.textColor = 8757203,
        t.x = 131,
        t.y = 58,
        t
    },
    i.txt_i = function() {
        var t = new eui.Label;
        return this.txt = t,
        t.fontFamily = "REEJI",
        t.size = 20,
        t.text = "精英海盗",
        t.textColor = 12834813,
        t.x = 42,
        t.y = 57,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/pop/PveStarTrekMallPetPopSkin.exml"] = window.PveStarTrekMallPetPopSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["btnClose", "imgHead", "txtHP", "txtLevelName", "txtAttack", "txtSpeed", "txtDefence", "txtSAttack", "txtHp", "txtSDefence", "txtDes1", "txtDes2"],
        this.height = 285,
        this.width = 481,
        this.elementsContent = [this._Image1_i(), this.btnClose_i(), this._Image2_i(), this._ProgressBar1_i(), this._Image3_i(), this._Image4_i(), this.imgHead_i(), this.txtHP_i(), this.txtLevelName_i(), this._Group1_i(), this._Group4_i()]
    }
    __extends(e, t);
    var i = function(t) {
        function e() {
            t.call(this),
            this.skinParts = ["thumb"],
            this.elementsContent = [this.thumb_i()],
            this.states = [new eui.State("up", []), new eui.State("down", []), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i.thumb_i = function() {
            var t = new eui.Image;
            return this.thumb = t,
            t.source = "pve_star_trek_prepare_pop_imgprocess_png",
            t
        },
        e
    } (eui.Skin),
    n = e.prototype;
    return n._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "title_pop_2022_img_482X286_bg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    n.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.source = "common_pop_btn_close_png",
        t.x = 439,
        t.y = 0,
        t
    },
    n._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "pve_star_trek_prepare_pop_imgprogressbg_png",
        t.x = 95.531,
        t.y = 90.104,
        t
    },
    n._ProgressBar1_i = function() {
        var t = new eui.ProgressBar;
        return t.height = 16,
        t.value = 100,
        t.width = 281,
        t.x = 107.531,
        t.y = 94.104,
        t.skinName = i,
        t
    },
    n._Image3_i = function() {
        var t = new eui.Image;
        return t.height = 87,
        t.source = "pve_star_trek_mall_pet_pop_imgdesbg_png",
        t.width = 441,
        t.x = 20,
        t.y = 180,
        t
    },
    n._Image4_i = function() {
        var t = new eui.Image;
        return t.height = 70,
        t.scale9Grid = new egret.Rectangle(37, 105, 37, 25),
        t.source = "pve_star_trek_pet_item_imgbg_png",
        t.width = 70,
        t.x = 21,
        t.y = 42,
        t
    },
    n.imgHead_i = function() {
        var t = new eui.Image;
        return this.imgHead = t,
        t.height = 62,
        t.width = 62,
        t.x = 25,
        t.y = 46,
        t
    },
    n.txtHP_i = function() {
        var t = new eui.Label;
        return this.txtHP = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "HP:999/999",
        t.textColor = 4187130,
        t.x = 100,
        t.y = 73.104,
        t
    },
    n.txtLevelName_i = function() {
        var t = new eui.Label;
        return this.txtLevelName = t,
        t.fontFamily = "MFShangHei",
        t.size = 20,
        t.text = "LV.100 精灵名精灵名",
        t.textColor = 12834813,
        t.x = 100,
        t.y = 45.104,
        t
    },
    n._Group1_i = function() {
        var t = new eui.Group;
        return t.horizontalCenter = .5,
        t.y = 128,
        t.elementsContent = [this._Label1_i(), this.txtAttack_i(), this._Label2_i(), this.txtSpeed_i(), this._Label3_i(), this.txtDefence_i(), this._Label4_i(), this.txtSAttack_i(), this._Label5_i(), this.txtHp_i(), this._Label6_i(), this.txtSDefence_i()],
        t
    },
    n._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "攻击：",
        t.textColor = 12834813,
        t
    },
    n.txtAttack_i = function() {
        var t = new eui.Label;
        return this.txtAttack = t,
        t.fontFamily = "MFShangHei",
        t.scaleX = 1,
        t.scaleY = 1,
        t.size = 16,
        t.text = "99999999",
        t.textColor = 6027519,
        t.x = 48,
        t
    },
    n._Label2_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "速度：",
        t.textColor = 12834813,
        t.x = 158,
        t
    },
    n.txtSpeed_i = function() {
        var t = new eui.Label;
        return this.txtSpeed = t,
        t.fontFamily = "MFShangHei",
        t.scaleX = 1,
        t.scaleY = 1,
        t.size = 16,
        t.text = "99999999",
        t.textColor = 6027519,
        t.x = 205,
        t
    },
    n._Label3_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "防御：",
        t.textColor = 12834813,
        t.x = 315,
        t
    },
    n.txtDefence_i = function() {
        var t = new eui.Label;
        return this.txtDefence = t,
        t.fontFamily = "MFShangHei",
        t.scaleX = 1,
        t.scaleY = 1,
        t.size = 16,
        t.text = "99999999",
        t.textColor = 6027519,
        t.width = 76,
        t.x = 363,
        t
    },
    n._Label4_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "特攻：",
        t.textColor = 12834813,
        t.x = 0,
        t.y = 24,
        t
    },
    n.txtSAttack_i = function() {
        var t = new eui.Label;
        return this.txtSAttack = t,
        t.fontFamily = "MFShangHei",
        t.scaleX = 1,
        t.scaleY = 1,
        t.size = 16,
        t.text = "99999999",
        t.textColor = 6027519,
        t.x = 48,
        t.y = 24,
        t
    },
    n._Label5_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "体力：",
        t.textColor = 12834813,
        t.x = 158,
        t.y = 24,
        t
    },
    n.txtHp_i = function() {
        var t = new eui.Label;
        return this.txtHp = t,
        t.fontFamily = "MFShangHei",
        t.scaleX = 1,
        t.scaleY = 1,
        t.size = 16,
        t.text = "99999999",
        t.textColor = 6027519,
        t.x = 205,
        t.y = 24,
        t
    },
    n._Label6_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "特防：",
        t.textColor = 12834813,
        t.x = 315,
        t.y = 24,
        t
    },
    n.txtSDefence_i = function() {
        var t = new eui.Label;
        return this.txtSDefence = t,
        t.fontFamily = "MFShangHei",
        t.scaleX = 1,
        t.scaleY = 1,
        t.size = 16,
        t.text = "99999999",
        t.textColor = 6027519,
        t.width = 76,
        t.x = 363,
        t.y = 24,
        t
    },
    n._Group4_i = function() {
        var t = new eui.Group;
        return t.x = 30,
        t.y = 188,
        t.layout = this._VerticalLayout1_i(),
        t.elementsContent = [this._Group2_i(), this._Group3_i()],
        t
    },
    n._VerticalLayout1_i = function() {
        var t = new eui.VerticalLayout;
        return t
    },
    n._Group2_i = function() {
        var t = new eui.Group;
        return t.elementsContent = [this._Image5_i(), this.txtDes1_i()],
        t
    },
    n._Image5_i = function() {
        var t = new eui.Image;
        return t.source = "pve_star_trek_mall_pet_pop_imgbluedot_png",
        t
    },
    n.txtDes1_i = function() {
        var t = new eui.Label;
        return this.txtDes1 = t,
        t.fontFamily = "MFShangHei",
        t.maxWidth = 400,
        t.scaleX = 1,
        t.scaleY = 1,
        t.size = 16,
        t.textColor = 6027519,
        t.x = 18,
        t.y = 0,
        t
    },
    n._Group3_i = function() {
        var t = new eui.Group;
        return t.elementsContent = [this._Image6_i(), this.txtDes2_i()],
        t
    },
    n._Image6_i = function() {
        var t = new eui.Image;
        return t.source = "pve_star_trek_mall_pet_pop_imgbluedot_png",
        t
    },
    n.txtDes2_i = function() {
        var t = new eui.Label;
        return this.txtDes2 = t,
        t.fontFamily = "MFShangHei",
        t.maxWidth = 400,
        t.scaleX = 1,
        t.scaleY = 1,
        t.size = 16,
        t.textColor = 6027519,
        t.x = 18,
        t.y = 0,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/pop/PveStarTrekMallPopSkin.exml"] = window.PveStarTrekMallPopSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["btnClose", "group", "txtCoin"],
        this.elementsContent = [this._Image1_i(), this._Image2_i(), this._Image3_i(), this.btnClose_i(), this.group_i(), this._Group1_i(), this._Label1_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 431,
        t.scale9Grid = new egret.Rectangle(7, 7, 6, 3),
        t.source = "pve_star_trek_challenge_pop_imgbg_png",
        t.width = 754,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.left = 1,
        t.right = 5,
        t.source = "pve_star_trek_challenge_pop_imgtitlebg_png",
        t.y = 0,
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "pve_star_trek_mall_pop_imgtitle_png",
        t.x = 37,
        t.y = 2,
        t
    },
    i.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.source = "pve_star_trek_challenge_pop_btnclose_png",
        t.x = 712,
        t.y = 0,
        t
    },
    i.group_i = function() {
        var t = new eui.Group;
        return this.group = t,
        t.horizontalCenter = 0,
        t.y = 90,
        t.layout = this._TileLayout1_i(),
        t
    },
    i._TileLayout1_i = function() {
        var t = new eui.TileLayout;
        return t.horizontalGap = 50,
        t.requestedColumnCount = 4,
        t.verticalGap = 20,
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.x = 564,
        t.y = 47,
        t.elementsContent = [this._Image4_i(), this._Image5_i(), this.txtCoin_i()],
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.source = "pve_star_trek_challenge_panel_imgcoinbg_png",
        t.x = 0,
        t.y = 4,
        t
    },
    i._Image5_i = function() {
        var t = new eui.Image;
        return t.source = "pve_star_trek_challenge_panel_imgcoin_png",
        t.x = 16,
        t.y = 0,
        t
    },
    i.txtCoin_i = function() {
        var t = new eui.Label;
        return this.txtCoin = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.textColor = 12834813,
        t.x = 64,
        t.y = 5,
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "常有商船往来的港口，也许能买到你想要的东西",
        t.textColor = 8757203,
        t.x = 126,
        t.y = 54,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/pop/PveStarTrekPreparePanelPetPopSkin.exml"] = window.PveStarTrekPreparePanelPetPopSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["btnUp", "btnDown", "txtLV", "txtTalent", "txtNature", "txtSNature", "txtAttack1", "txtAttack2", "txtSpeed1", "txtSpeed2", "txtDefence1", "txtDefence2", "txtSAttack1", "txtSAttack2", "txtHealth1", "txtHealth2", "txtSDefence1", "txtSDefence2", "imgMark1", "imgMark2", "imgMark3", "imgFifthSkillIcon", "txtFifthSkillName", "txtFifthSkill", "groupFifthSkill", "btnChange", "groupSkillItem", "groupPetAni", "imgAttri", "txtName", "imgEff", "groupTag", "groupPet", "imgMask", "groupAllSkill", "groupSkill"],
        this.height = 529,
        this.width = 911,
        this.elementsContent = [this._Group3_i(), this.groupPet_i(), this.imgMask_i(), this.groupSkill_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Group3_i = function() {
        var t = new eui.Group;
        return t.visible = !0,
        t.x = 505,
        t.y = 1,
        t.elementsContent = [this._Image1_i(), this._Image2_i(), this.btnUp_i(), this.btnDown_i(), this._Label1_i(), this._Group1_i(), this._Group2_i(), this.groupFifthSkill_i(), this.btnChange_i(), this.groupSkillItem_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 490,
        t.scale9Grid = new egret.Rectangle(133, 163, 134, 61),
        t.source = "pve_star_trek_prepare_panel_pet_pop_img1_png",
        t.visible = !0,
        t.width = 400,
        t.x = 6,
        t.y = 0,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "pve_star_trek_prepare_panel_pet_pop_img2_png",
        t.x = 0,
        t.y = 11,
        t
    },
    i.btnUp_i = function() {
        var t = new eui.Image;
        return this.btnUp = t,
        t.source = "pve_star_trek_prepare_panel_pet_pop_btnup_png",
        t.x = 142,
        t.y = 481,
        t
    },
    i.btnDown_i = function() {
        var t = new eui.Image;
        return this.btnDown = t,
        t.source = "pve_star_trek_prepare_panel_pet_pop_btndown_png",
        t.visible = !0,
        t.x = 142,
        t.y = 481,
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "精灵信息",
        t.textColor = 16777215,
        t.x = 18,
        t.y = 18,
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.x = 21,
        t.y = 52,
        t.elementsContent = [this._Image3_i(), this._Image4_i(), this._Image5_i(), this._Image6_i(), this._Image7_i(), this._Image8_i(), this._Label2_i(), this.txtLV_i(), this._Label3_i(), this.txtTalent_i(), this._Label4_i(), this.txtNature_i(), this._Label5_i(), this.txtSNature_i(), this._Label6_i(), this.txtAttack1_i(), this.txtAttack2_i(), this._Label7_i(), this.txtSpeed1_i(), this.txtSpeed2_i(), this._Label8_i(), this.txtDefence1_i(), this.txtDefence2_i(), this._Label9_i(), this.txtSAttack1_i(), this.txtSAttack2_i(), this._Label10_i(), this.txtHealth1_i(), this.txtHealth2_i(), this._Label11_i(), this.txtSDefence1_i(), this.txtSDefence2_i()],
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "pve_star_trek_prepare_panel_pet_pop_df_png",
        t.x = 75,
        t.y = 99,
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.source = "pve_star_trek_prepare_panel_pet_pop_df_png",
        t.x = 328,
        t.y = 99,
        t
    },
    i._Image5_i = function() {
        var t = new eui.Image;
        return t.source = "pve_star_trek_prepare_panel_pet_pop_df_png",
        t.x = 75,
        t.y = 131,
        t
    },
    i._Image6_i = function() {
        var t = new eui.Image;
        return t.source = "pve_star_trek_prepare_panel_pet_pop_df_png",
        t.x = 328,
        t.y = 131,
        t
    },
    i._Image7_i = function() {
        var t = new eui.Image;
        return t.source = "pve_star_trek_prepare_panel_pet_pop_df_png",
        t.x = 202,
        t.y = 99,
        t
    },
    i._Image8_i = function() {
        var t = new eui.Image;
        return t.source = "pve_star_trek_prepare_panel_pet_pop_df_png",
        t.x = 202,
        t.y = 131,
        t
    },
    i._Label2_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "等级：",
        t.textColor = 11520511,
        t.x = 1,
        t.y = 0,
        t
    },
    i.txtLV_i = function() {
        var t = new eui.Label;
        return this.txtLV = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.textColor = 6027519,
        t.x = 49,
        t.y = 0,
        t
    },
    i._Label3_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "天赋：",
        t.textColor = 11520511,
        t.x = 1,
        t.y = 23,
        t
    },
    i.txtTalent_i = function() {
        var t = new eui.Label;
        return this.txtTalent = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.textColor = 6027519,
        t.x = 49,
        t.y = 23,
        t
    },
    i._Label4_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "性格：",
        t.textColor = 11520511,
        t.x = 2,
        t.y = 46,
        t
    },
    i.txtNature_i = function() {
        var t = new eui.Label;
        return this.txtNature = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.textColor = 6027519,
        t.x = 50,
        t.y = 46,
        t
    },
    i._Label5_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "特性：",
        t.textColor = 11520511,
        t.x = 1,
        t.y = 69,
        t
    },
    i.txtSNature_i = function() {
        var t = new eui.Label;
        return this.txtSNature = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.textColor = 6027519,
        t.x = 49,
        t.y = 69,
        t
    },
    i._Label6_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "攻击：",
        t.textColor = 11520511,
        t.x = 0,
        t.y = 97,
        t
    },
    i.txtAttack1_i = function() {
        var t = new eui.Label;
        return this.txtAttack1 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.textColor = 5962239,
        t.x = 40,
        t.y = 97,
        t
    },
    i.txtAttack2_i = function() {
        var t = new eui.Label;
        return this.txtAttack2 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.textColor = 16514895,
        t.x = 90,
        t.y = 97,
        t
    },
    i._Label7_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "速度：",
        t.textColor = 11520511,
        t.x = 127,
        t.y = 97,
        t
    },
    i.txtSpeed1_i = function() {
        var t = new eui.Label;
        return this.txtSpeed1 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.textColor = 5962239,
        t.x = 167,
        t.y = 97,
        t
    },
    i.txtSpeed2_i = function() {
        var t = new eui.Label;
        return this.txtSpeed2 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.textColor = 16514895,
        t.x = 217,
        t.y = 97,
        t
    },
    i._Label8_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "防御：",
        t.textColor = 11520511,
        t.x = 255,
        t.y = 97,
        t
    },
    i.txtDefence1_i = function() {
        var t = new eui.Label;
        return this.txtDefence1 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.textColor = 5962239,
        t.x = 293,
        t.y = 97,
        t
    },
    i.txtDefence2_i = function() {
        var t = new eui.Label;
        return this.txtDefence2 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.textColor = 16514895,
        t.x = 343,
        t.y = 97,
        t
    },
    i._Label9_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "特攻：",
        t.textColor = 11520511,
        t.x = 0,
        t.y = 129,
        t
    },
    i.txtSAttack1_i = function() {
        var t = new eui.Label;
        return this.txtSAttack1 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.textColor = 5962239,
        t.x = 40,
        t.y = 129,
        t
    },
    i.txtSAttack2_i = function() {
        var t = new eui.Label;
        return this.txtSAttack2 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.textColor = 16514895,
        t.x = 90,
        t.y = 129,
        t
    },
    i._Label10_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "体力： ",
        t.textColor = 11520511,
        t.x = 128,
        t.y = 129,
        t
    },
    i.txtHealth1_i = function() {
        var t = new eui.Label;
        return this.txtHealth1 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.textColor = 5962239,
        t.x = 168,
        t.y = 129,
        t
    },
    i.txtHealth2_i = function() {
        var t = new eui.Label;
        return this.txtHealth2 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.textColor = 16514895,
        t.x = 217,
        t.y = 129,
        t
    },
    i._Label11_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "特防：",
        t.textColor = 11520511,
        t.x = 254,
        t.y = 129,
        t
    },
    i.txtSDefence1_i = function() {
        var t = new eui.Label;
        return this.txtSDefence1 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.textColor = 5962239,
        t.x = 294,
        t.y = 129,
        t
    },
    i.txtSDefence2_i = function() {
        var t = new eui.Label;
        return this.txtSDefence2 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.textColor = 16514895,
        t.x = 343,
        t.y = 129,
        t
    },
    i._Group2_i = function() {
        var t = new eui.Group;
        return t.x = 152,
        t.y = 60,
        t.elementsContent = [this._Image9_i(), this._Image10_i(), this._Image11_i(), this.imgMark1_i(), this.imgMark2_i(), this.imgMark3_i()],
        t
    },
    i._Image9_i = function() {
        var t = new eui.Image;
        return t.source = "pve_star_trek_prepare_panel_pet_pop_imgmarkbg1_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i._Image10_i = function() {
        var t = new eui.Image;
        return t.source = "pve_star_trek_prepare_panel_pet_pop_imgmarkbg1_png",
        t.x = 79,
        t.y = 0,
        t
    },
    i._Image11_i = function() {
        var t = new eui.Image;
        return t.source = "pve_star_trek_prepare_panel_pet_pop_imgmarkbg1_png",
        t.x = 158,
        t.y = 0,
        t
    },
    i.imgMark1_i = function() {
        var t = new eui.Image;
        return this.imgMark1 = t,
        t.height = 50,
        t.width = 50,
        t.x = 11,
        t.y = 12,
        t
    },
    i.imgMark2_i = function() {
        var t = new eui.Image;
        return this.imgMark2 = t,
        t.height = 50,
        t.width = 50,
        t.x = 90,
        t.y = 12,
        t
    },
    i.imgMark3_i = function() {
        var t = new eui.Image;
        return this.imgMark3 = t,
        t.height = 50,
        t.width = 50,
        t.x = 169,
        t.y = 12,
        t
    },
    i.groupFifthSkill_i = function() {
        var t = new eui.Group;
        return this.groupFifthSkill = t,
        t.x = 17,
        t.y = 405,
        t.elementsContent = [this._Image12_i(), this._Image13_i(), this.imgFifthSkillIcon_i(), this.txtFifthSkillName_i(), this.txtFifthSkill_i()],
        t
    },
    i._Image12_i = function() {
        var t = new eui.Image;
        return t.source = "pve_star_trek_prepare_panel_pet_pop_imgskillrect_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i._Image13_i = function() {
        var t = new eui.Image;
        return t.source = "pve_star_trek_prepare_panel_pet_pop_juxing_910_png",
        t.x = 64,
        t.y = 29,
        t
    },
    i.imgFifthSkillIcon_i = function() {
        var t = new eui.Image;
        return this.imgFifthSkillIcon = t,
        t.height = 25,
        t.width = 25,
        t.x = 22,
        t.y = 16,
        t
    },
    i.txtFifthSkillName_i = function() {
        var t = new eui.Label;
        return this.txtFifthSkillName = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.textAlign = "center",
        t.textColor = 15068927,
        t.width = 130,
        t.x = 144,
        t.y = 8,
        t
    },
    i.txtFifthSkill_i = function() {
        var t = new eui.Label;
        return this.txtFifthSkill = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.textAlign = "center",
        t.textColor = 6027519,
        t.width = 212,
        t.x = 100,
        t.y = 34,
        t
    },
    i.btnChange_i = function() {
        var t = new eui.Image;
        return this.btnChange = t,
        t.source = "pve_star_trek_prepare_panel_pet_pop_btnrefresh_png",
        t.x = 371,
        t.y = 399,
        t
    },
    i.groupSkillItem_i = function() {
        var t = new eui.Group;
        return this.groupSkillItem = t,
        t.x = 6,
        t.y = 204,
        t.layout = this._TileLayout1_i(),
        t
    },
    i._TileLayout1_i = function() {
        var t = new eui.TileLayout;
        return t.horizontalGap = -5,
        t.requestedColumnCount = 2,
        t.verticalGap = -8,
        t
    },
    i.groupPet_i = function() {
        var t = new eui.Group;
        return this.groupPet = t,
        t.touchEnabled = !1,
        t.visible = !0,
        t.x = 0,
        t.y = 83,
        t.elementsContent = [this.groupPetAni_i(), this._Image14_i(), this._Group4_i(), this.groupTag_i()],
        t
    },
    i.groupPetAni_i = function() {
        var t = new eui.Group;
        return this.groupPetAni = t,
        t.height = 0,
        t.horizontalCenter = 50,
        t.touchChildren = !1,
        t.touchEnabled = !1,
        t.verticalCenter = -50,
        t.width = 0,
        t
    },
    i._Image14_i = function() {
        var t = new eui.Image;
        return t.horizontalCenter = 0,
        t.source = "pve_star_trek_prepare_panel_pet_pop_img3_png",
        t.y = 382,
        t
    },
    i._Group4_i = function() {
        var t = new eui.Group;
        return t.horizontalCenter = 0,
        t.y = 388,
        t.layout = this._HorizontalLayout1_i(),
        t.elementsContent = [this.imgAttri_i(), this.txtName_i(), this.imgEff_i()],
        t
    },
    i._HorizontalLayout1_i = function() {
        var t = new eui.HorizontalLayout;
        return t.gap = 12,
        t.verticalAlign = "middle",
        t
    },
    i.imgAttri_i = function() {
        var t = new eui.Image;
        return this.imgAttri = t,
        t.height = 22,
        t.width = 22,
        t.x = 0,
        t.y = 0,
        t
    },
    i.txtName_i = function() {
        var t = new eui.Label;
        return this.txtName = t,
        t.fontFamily = "MFShangHei",
        t.size = 20,
        t.textColor = 16770655,
        t.x = 34,
        t.y = 2,
        t
    },
    i.imgEff_i = function() {
        var t = new eui.Image;
        return this.imgEff = t,
        t.x = 204,
        t.y = 1,
        t
    },
    i.groupTag_i = function() {
        var t = new eui.Group;
        return this.groupTag = t,
        t.horizontalCenter = 0,
        t.y = 424,
        t.layout = this._HorizontalLayout2_i(),
        t
    },
    i._HorizontalLayout2_i = function() {
        var t = new eui.HorizontalLayout;
        return t
    },
    i.imgMask_i = function() {
        var t = new eui.Rect;
        return this.imgMask = t,
        t.fillAlpha = 0,
        t.height = 3e3,
        t.visible = !1,
        t.width = 3e3,
        t.x = -1e3,
        t.y = -1e3,
        t
    },
    i.groupSkill_i = function() {
        var t = new eui.Group;
        return this.groupSkill = t,
        t.visible = !0,
        t.x = 93,
        t.y = 0,
        t.elementsContent = [this._Image15_i(), this._Scroller1_i()],
        t
    },
    i._Image15_i = function() {
        var t = new eui.Image;
        return t.height = 473,
        t.scale9Grid = new egret.Rectangle(7, 8, 6, 4),
        t.source = "pve_star_trek_prepare_panel_pet_pop_img4_png",
        t.width = 405,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Scroller1_i = function() {
        var t = new eui.Scroller;
        return t.height = 455,
        t.width = 405,
        t.x = 3,
        t.y = 5,
        t.viewport = this.groupAllSkill_i(),
        t
    },
    i.groupAllSkill_i = function() {
        var t = new eui.Group;
        return this.groupAllSkill = t,
        t.layout = this._TileLayout2_i(),
        t
    },
    i._TileLayout2_i = function() {
        var t = new eui.TileLayout;
        return t.horizontalGap = -8,
        t.requestedColumnCount = 2,
        t.verticalGap = -8,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/pop/PveStarTrekPreparePopSkin.exml"] = window.PveStarTrekPreparePopSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["txtAttack", "txtSpeed", "txtDefence", "txtSAttack", "txtHp", "txtSDefence", "imgFifthProp", "txtFifthSkillName", "txtFifthSkill", "groupFifthSkill", "groupSkillItem", "btnFirst", "btnDown", "btnUp", "imgHead", "imgLook", "progressHP", "txtHP", "txtLVName", "groupRight", "btnClose", "btnFight", "grpStatic", "group1", "group2"],
        this.height = 550,
        this.width = 1005,
        this.elementsContent = [this._Image1_i(), this.groupRight_i(), this.grpStatic_i(), this.group1_i(), this._Scroller1_i()]
    }
    __extends(e, t);
    var i = function(t) {
        function e() {
            t.call(this),
            this.skinParts = ["thumb"],
            this.elementsContent = [this.thumb_i()],
            this.states = [new eui.State("up", []), new eui.State("down", []), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i.thumb_i = function() {
            var t = new eui.Image;
            return this.thumb = t,
            t.source = "pve_star_trek_prepare_pop_imgprocess_png",
            t
        },
        e
    } (eui.Skin),
    n = e.prototype;
    return n._Image1_i = function() {
        var t = new eui.Image;
        return t.bottom = 0,
        t.left = 0,
        t.right = 0,
        t.scale9Grid = new egret.Rectangle(7, 7, 6, 3),
        t.source = "pve_star_trek_challenge_pop_imgbg_png",
        t.top = 0,
        t
    },
    n.groupRight_i = function() {
        var t = new eui.Group;
        return this.groupRight = t,
        t.visible = !0,
        t.x = 573,
        t.y = 82,
        t.elementsContent = [this._Group1_i(), this.groupFifthSkill_i(), this.groupSkillItem_i(), this.btnFirst_i(), this.btnDown_i(), this.btnUp_i(), this._Image4_i(), this._Image5_i(), this.imgHead_i(), this.imgLook_i(), this.progressHP_i(), this.txtHP_i(), this.txtLVName_i()],
        t
    },
    n._Group1_i = function() {
        var t = new eui.Group;
        return t.y = 84,
        t.elementsContent = [this._Label1_i(), this.txtAttack_i(), this._Label2_i(), this.txtSpeed_i(), this._Label3_i(), this.txtDefence_i(), this._Label4_i(), this.txtSAttack_i(), this._Label5_i(), this.txtHp_i(), this._Label6_i(), this.txtSDefence_i()],
        t
    },
    n._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "攻击：",
        t.textColor = 12834813,
        t
    },
    n.txtAttack_i = function() {
        var t = new eui.Label;
        return this.txtAttack = t,
        t.fontFamily = "MFShangHei",
        t.scaleX = 1,
        t.scaleY = 1,
        t.size = 16,
        t.text = "99999999",
        t.textColor = 6027519,
        t.x = 47,
        t
    },
    n._Label2_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "速度：",
        t.textColor = 12834813,
        t.x = 130,
        t
    },
    n.txtSpeed_i = function() {
        var t = new eui.Label;
        return this.txtSpeed = t,
        t.fontFamily = "MFShangHei",
        t.scaleX = 1,
        t.scaleY = 1,
        t.size = 16,
        t.text = "99999999",
        t.textColor = 6027519,
        t.x = 178,
        t
    },
    n._Label3_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "防御：",
        t.textColor = 12834813,
        t.x = 261,
        t
    },
    n.txtDefence_i = function() {
        var t = new eui.Label;
        return this.txtDefence = t,
        t.fontFamily = "MFShangHei",
        t.scaleX = 1,
        t.scaleY = 1,
        t.size = 16,
        t.text = "99999999",
        t.textColor = 6027519,
        t.x = 309,
        t
    },
    n._Label4_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "特攻：",
        t.textColor = 12834813,
        t.x = 0,
        t.y = 24,
        t
    },
    n.txtSAttack_i = function() {
        var t = new eui.Label;
        return this.txtSAttack = t,
        t.fontFamily = "MFShangHei",
        t.scaleX = 1,
        t.scaleY = 1,
        t.size = 16,
        t.text = "99999999",
        t.textColor = 6027519,
        t.x = 47,
        t.y = 24,
        t
    },
    n._Label5_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "体力：",
        t.textColor = 12834813,
        t.x = 130,
        t.y = 24,
        t
    },
    n.txtHp_i = function() {
        var t = new eui.Label;
        return this.txtHp = t,
        t.fontFamily = "MFShangHei",
        t.scaleX = 1,
        t.scaleY = 1,
        t.size = 16,
        t.text = "99999999",
        t.textColor = 6027519,
        t.x = 178,
        t.y = 24,
        t
    },
    n._Label6_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "特防：",
        t.textColor = 12834813,
        t.x = 261,
        t.y = 24,
        t
    },
    n.txtSDefence_i = function() {
        var t = new eui.Label;
        return this.txtSDefence = t,
        t.fontFamily = "MFShangHei",
        t.scaleX = 1,
        t.scaleY = 1,
        t.size = 16,
        t.text = "99999999",
        t.textColor = 6027519,
        t.x = 309,
        t.y = 24,
        t
    },
    n.groupFifthSkill_i = function() {
        var t = new eui.Group;
        return this.groupFifthSkill = t,
        t.visible = !0,
        t.x = 10,
        t.y = 285,
        t.elementsContent = [this._Image2_i(), this._Image3_i(), this.imgFifthProp_i(), this.txtFifthSkillName_i(), this.txtFifthSkill_i()],
        t
    },
    n._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "pve_star_trek_prepare_panel_pet_pop_imgskillrect_png",
        t.x = 0,
        t.y = 0,
        t
    },
    n._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "pve_star_trek_prepare_panel_pet_pop_juxing_910_png",
        t.x = 64,
        t.y = 29,
        t
    },
    n.imgFifthProp_i = function() {
        var t = new eui.Image;
        return this.imgFifthProp = t,
        t.height = 25,
        t.width = 25,
        t.x = 22,
        t.y = 16,
        t
    },
    n.txtFifthSkillName_i = function() {
        var t = new eui.Label;
        return this.txtFifthSkillName = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.textAlign = "center",
        t.textColor = 15068927,
        t.width = 130,
        t.x = 144,
        t.y = 8,
        t
    },
    n.txtFifthSkill_i = function() {
        var t = new eui.Label;
        return this.txtFifthSkill = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.textAlign = "center",
        t.textColor = 6027519,
        t.width = 212,
        t.x = 100,
        t.y = 34,
        t
    },
    n.groupSkillItem_i = function() {
        var t = new eui.Group;
        return this.groupSkillItem = t,
        t.visible = !0,
        t.y = 133,
        t.layout = this._TileLayout1_i(),
        t
    },
    n._TileLayout1_i = function() {
        var t = new eui.TileLayout;
        return t.horizontalGap = -8,
        t.requestedColumnCount = 2,
        t.verticalGap = -33,
        t
    },
    n.btnFirst_i = function() {
        var t = new eui.Image;
        return this.btnFirst = t,
        t.source = "pve_star_trek_prepare_pop_btnfirst_png",
        t.x = 187,
        t.y = 355,
        t
    },
    n.btnDown_i = function() {
        var t = new eui.Image;
        return this.btnDown = t,
        t.source = "pve_star_trek_prepare_pop_btndown_png",
        t.visible = !0,
        t.x = 292,
        t.y = 355,
        t
    },
    n.btnUp_i = function() {
        var t = new eui.Image;
        return this.btnUp = t,
        t.source = "pve_star_trek_prepare_pop_btnup_png",
        t.visible = !0,
        t.x = 292,
        t.y = 355,
        t
    },
    n._Image4_i = function() {
        var t = new eui.Image;
        return t.source = "pve_star_trek_prepare_pop_imgprogressbg_png",
        t.x = 73.744,
        t.y = 49,
        t
    },
    n._Image5_i = function() {
        var t = new eui.Image;
        return t.height = 70,
        t.scale9Grid = new egret.Rectangle(37, 105, 37, 25),
        t.source = "pve_star_trek_pet_item_imgbg_png",
        t.width = 70,
        t.x = 0,
        t.y = 0,
        t
    },
    n.imgHead_i = function() {
        var t = new eui.Image;
        return this.imgHead = t,
        t.height = 62,
        t.width = 62,
        t.x = 4,
        t.y = 4,
        t
    },
    n.imgLook_i = function() {
        var t = new eui.Image;
        return this.imgLook = t,
        t.source = "pve_star_trek_prepare_pop_imglook_png",
        t.touchEnabled = !1,
        t.x = 38,
        t.y = -5,
        t
    },
    n.progressHP_i = function() {
        var t = new eui.ProgressBar;
        return this.progressHP = t,
        t.height = 16,
        t.value = 100,
        t.width = 281,
        t.x = 85.744,
        t.y = 53,
        t.skinName = i,
        t
    },
    n.txtHP_i = function() {
        var t = new eui.Label;
        return this.txtHP = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "HP:999/999",
        t.textColor = 6027519,
        t.x = 80,
        t.y = 33,
        t
    },
    n.txtLVName_i = function() {
        var t = new eui.Label;
        return this.txtLVName = t,
        t.fontFamily = "MFShangHei",
        t.size = 20,
        t.text = "LV.100 精灵名精灵名",
        t.textColor = 12834813,
        t.x = 77,
        t.y = 1,
        t
    },
    n.grpStatic_i = function() {
        var t = new eui.Group;
        return this.grpStatic = t,
        t.height = 0,
        t.width = 0,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image6_i(), this._Image7_i(), this.btnClose_i(), this.btnFight_i(), this._Image8_i()],
        t
    },
    n._Image6_i = function() {
        var t = new eui.Image;
        return t.left = 0,
        t.right = 5,
        t.scale9Grid = new egret.Rectangle(478, 11, 21, 12),
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "pve_star_trek_challenge_pop_imgtitlebg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    n._Image7_i = function() {
        var t = new eui.Image;
        return t.scaleX = 1,
        t.scaleY = 1,
        t.source = "pve_star_trek_prepare_pop_imgtitle_png",
        t.x = 41,
        t.y = 5,
        t
    },
    n.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "pve_star_trek_challenge_pop_btnclose_png",
        t.x = 960.9999999999998,
        t.y = 0,
        t
    },
    n.btnFight_i = function() {
        var t = new eui.Image;
        return this.btnFight = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "pve_star_trek_prepare_pop_btnfight_png",
        t.x = 435.99999999999994,
        t.y = 481,
        t
    },
    n._Image8_i = function() {
        var t = new eui.Image;
        return t.scaleX = 1,
        t.scaleY = 1,
        t.source = "pve_star_trek_prepare_pop_leftbg_png",
        t.x = 41,
        t.y = 52,
        t
    },
    n.group1_i = function() {
        var t = new eui.Group;
        return this.group1 = t,
        t.x = 100,
        t.y = 60,
        t.layout = this._TileLayout2_i(),
        t
    },
    n._TileLayout2_i = function() {
        var t = new eui.TileLayout;
        return t.horizontalGap = 15,
        t.requestedColumnCount = 3,
        t.requestedRowCount = 2,
        t.verticalGap = 0,
        t
    },
    n._Scroller1_i = function() {
        var t = new eui.Scroller;
        return t.height = 199,
        t.width = 365,
        t.x = 80,
        t.y = 260,
        t.viewport = this.group2_i(),
        t
    },
    n.group2_i = function() {
        var t = new eui.Group;
        return this.group2 = t,
        t.layout = this._TileLayout3_i(),
        t
    },
    n._TileLayout3_i = function() {
        var t = new eui.TileLayout;
        return t.horizontalGap = 0,
        t.paddingLeft = 5,
        t.paddingTop = 5,
        t.requestedColumnCount = 4,
        t.verticalGap = 0,
        t
    },
    e
} (eui.Skin);