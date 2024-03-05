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
thepeakofJihadModePanel; !
function(e) {
    var t = function(e) {
        function t(t) {
            void 0 === t && (t = null);
            var i = e.call(this, t) || this;
            return i._isend = !1,
            i.onTimer = function() {
                var t = SystemTimerManager.time - i._startTime,
                n = Math.floor(i._penaltyTime - t);
                if (n > 0) {
                    var o = SystemTimerManager.getTimeClockString(Math.ceil(n), !1);
                    i.timeTx.text = o
                } else i.timeTx.text = "0",
                SystemTimerManager.removeTickFun(i.onTimer),
                i._isend || (i._isend = !0, SocketConnection.send(42285, 2), SocketConnection.sendByQueue(42285, [2],
                function(t) {
                    e.prototype.onClose.call(i)
                }))
            },
            i.skinName = Peakjihadpunishmentalarm1modeSkin,
            i
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            ImageButtonUtil.add(this.btnCLose, this.clickHandle, this),
            this.update()
        },
        t.prototype.clickHandle = function(t) {
            var i = this;
            e.prototype.clickHandle.call(this, t);
            var n = t.target;
            switch (n) {
            case this.btnCLose:
                Alert.show("关闭面板，倒计时将重新开始计算，是否确定关闭面板？",
                function() {
                    SocketConnection.sendByQueue(42285, [3],
                    function(t) {
                        i.data && i.data.callback && (i.data.callback.call(i.data.thisObj), e.prototype.onClose.call(i))
                    })
                })
            }
        },
        t.prototype.update = function() {
            var e = this;
            KTool.getMultiValue([100689],
            function(t) {
                e._penaltyTime = t[0]
            }),
            KTool.getPlayerInfo([47],
            function(t) {
                e._startTime = t[0],
                e._startTime > 0 && SystemTimerManager.addTickFun(e.onTimer)
            })
        },
        t.prototype.destroy = function() {
            ImageButtonUtil.removeAll(this),
            SystemTimerManager.removeTickFun(this.onTimer),
            e.prototype.destroy.call(this)
        },
        t
    } (BaseModule);
    e.PeakJihadPunishmentAlarm1Panel = t,
    __reflect(t.prototype, "thepeakofJihadModePanel.PeakJihadPunishmentAlarm1Panel")
} (thepeakofJihadModePanel || (thepeakofJihadModePanel = {}));
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
thepeakofJihadModePanel; !
function(e) {
    var t = function(t) {
        function i(e) {
            void 0 === e && (e = null);
            var i = t.call(this, e) || this;
            return i._isclick = !1,
            i._type = e.type,
            i.skinName = ThepeakofjihadmodepanelSkin,
            i
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            var e = this;
            t.prototype.childrenCreated.call(this),
            this.adaptLeftContent(this.grp_leftBtns),
            GameInfo.isChecking && (this.rankListBtn.visible = !1),
            this.checkpunish(),
            this.changemode(),
            ItemManager.updateItems([1717451, 1717452],
            function() {
                e.num.text = String(ItemManager.getNumByID(1717451)) + "/" + ItemXMLInfo.getMaxNum(1717451),
                e.num1.text = String(ItemManager.getNumByID(1717452)) + "/" + ItemXMLInfo.getMaxNum(1717452)
            }),
            this._initEvents(),
            this._checkHaveReward()
        },
        i.prototype._initEvents = function() {
            EventManager.addEventListener(SocketEvent.SOCKETRECONNECT, this.breaklineSynchronizedData, this),
            ImageButtonUtil.add(this.backBtn, this._onTouchTapImageButton, this),
            ImageButtonUtil.add(this.fightBtn, this._onTouchTapImageButton, this),
            ImageButtonUtil.add(this.rankListBtn, this._onTouchTapImageButton, this),
            ImageButtonUtil.add(this.btnBanwei, this._onTouchTapImageButton, this),
            ImageButtonUtil.add(this.btnZhuChang, this._onTouchTapImageButton, this),
            ImageButtonUtil.add(this.btnNewRule,
            function() {
                tipsPop.TipsPop.openHelpPopById(91)
            },
            this)
        },
        i.prototype._removeEvents = function() {
            ImageButtonUtil.removeAll(this),
            SocketConnection.removeCmdListener(43250, this.onmatch, this),
            EventManager.removeEventListener(SocketEvent.SOCKETRECONNECT, this.breaklineSynchronizedData, this)
        },
        i.prototype._onTouchTapImageButton = function(i) {
            var n = this;
            switch (i.currentTarget) {
            case this.btnZhuChang:
                PopViewManager.getInstance().openView(new e.PeakJihadHomePopView);
                break;
            case this.btnBanwei:
                PopViewManager.getInstance().openView(new e.BanweiPopView);
                break;
            case this.backBtn:
                this.checkpunish(!1),
                t.prototype.onClose.call(this);
                break;
            case this.fightBtn:
                2 === this._type ? StatLogger.log("1023版本系统功能", "巅峰圣战", "点击开始匹配【6V6竞技模式】") : StatLogger.log("1023版本系统功能", "巅峰圣战", "点击开始匹配【6V6狂野模式】"),
                PetManager.updateBagInfo(function() {
                    n.startMatch()
                });
                break;
            case this.rankListBtn:
                ModuleManager.showModuleByID(38, this._type - 1)
            }
        },
        i.prototype.breaklineSynchronizedData = function() {
            var e = this;
            KTool.getMultiValue([3307, 1046],
            function(t) {
                e._curStep = t[0],
                1 == t[0] && 1 == t[1] && (ModuleManager.hideModule("peakJihadMatchWaitModePanel"), ModuleManager.showModuleByID(43, {
                    callback: e.updatepets,
                    thisObj: e,
                    fightMod: 1 == e._type ? 3 : 2
                }))
            })
        },
        i.prototype._checkHaveReward = function() {
            if (PeakJihad2016Controller.isInAcTime()) {
                var e = PeakJihad2016Controller.curQishu;
                KTool.getMultiValue([100668, 101767, 120790],
                function(t) {
                    e >= 2 && (BitUtil.getBit(t[Math.floor((e - 1) / 32)], (e - 1) % 32) > 0 || SocketConnection.sendWithPromise(45138, [3]).then(function() {}))
                })
            }
        },
        i.prototype.changemode = function() {
            var e = this;
            this.nameTx.text = MainManager.actorInfo.nick,
            this.chenghaoTx.text = AchieveXMLInfo.getTitle(MainManager.actorInfo.curTitle);
            var t = new ClothPreview;
            t.show(MainManager.actorInfo.clothes),
            this.suitGroup.addChild(t),
            this.type = this.type,
            this.updatepets(),
            this._curModeFoverId = 1 == this.type ? PeakJihad2016Controller.curMonthStarLvId: PeakJihad2016Controller.curJJMonthStarLvId,
            this._curmaxModeFoverId = 1 == this.type ? PeakJihad2016Controller.curMonthMaxPointsId: PeakJihad2016Controller.curJJMonthMaxPointsId,
            this._banPetId = PeakJihad2016Controller.banPetId,
            this._banPetId2 = PeakJihad2016Controller.banPetId2,
            this._banPetList = PeakJihad2016Controller.banPetList,
            KTool.getMultiValue([this._curModeFoverId, this._curmaxModeFoverId, 100689],
            function(t) {
                e._score = t[0];
                var i = PeakJihadLevelRulesXMLInfo.getLadderLvByStarlv(t[0]);
                e.cstar.text = PeakJihadLevelRulesXMLInfo.getStarByStarlv(t[0]).toString(),
                e.cname.text = PeakJihadLevelRulesXMLInfo.getTitleByStarlv(t[0]);
                PeakJihadLevelRulesXMLInfo.getLadderLvByStarlv(t[1]);
                e.icon.source = ClientConfig.getPeakjihadLevelPath(21 - i),
                e._penaltyTime = t[2],
                e._penaltyTime > 0 && SocketConnection.sendByQueue(42285, [1],
                function(t) {
                    ModuleManager.showModuleByID(61, {
                        callback: e.updatepets,
                        thisObj: e
                    })
                })
            })
        },
        i.prototype.updatepets = function() {
            var e = this;
            PetManager.updateBagInfo(function() {
                e.clearPet(),
                e.petitems = [];
                for (var t = PetManager.getBagMap(!0), i = 0; 12 > i; i++) if (i < t.length) {
                    var n = new PetbagItem(t[i]);
                    e.petitems.push(n),
                    e.boxmc.addChild(n)
                }
            })
        },
        i.prototype.show = function() {
            t.prototype.show.call(this),
            this.updatepets()
        },
        i.prototype.startMatch = function() {
            var e = this;
            if (PeakJihad2016Controller.isInAcTime()) {
                if ((PeakJihadController.getBagALLPetLvIsHaveBanPick(this._banPetList[0]) || PeakJihadController.getBagALLPetLvIsHaveBanPick(this._banPetList[1]) || PeakJihadController.getBagALLPetLvIsHaveBanPick(this._banPetList[2])) && 2 == this._type) {
                    var t = "本周",
                    i = PetXMLInfo.getName(this._banPetList[0]);
                    i && (t += i + ",");
                    var n = PetXMLInfo.getName(this._banPetList[1]);
                    n && (t += n + ",");
                    var o = PetXMLInfo.getName(this._banPetList[2]);
                    return o && (t += o),
                    t += "无法在竞技模式出战，请调整阵容再开始匹配！",
                    void Alarm.show(t,
                    function() {
                        ModuleManager.showModuleByID(config.ModuleConst.PET_BAG)
                    },
                    this)
                }
                return PeakJihadController.getAllBagALLPetLvIsFull() || 1 != this.type ? PeakJihadController.getBagALLPetLvIsFullAndNotSame() || 2 != this.type ? void(this._isclick || (this._isclick = !0, KTool.getMultiValue([3307],
                function(t) {
                    e._curStep = t[0],
                    e._isclick = !1,
                    0 == e._curStep && SocketConnection.sendByQueue(45137, [1, 1 == e._type ? 2 : 3],
                    function(t) {
                        ModuleManager.showModuleByID(43, {
                            callback: e.updatepets,
                            thisObj: e,
                            fightMod: 1 == e._type ? 2 : 3
                        })
                    })
                }))) : void Alert.show("请在出战背包放入至少六只精灵，并保证背包所有精灵不重复且为满级满状态再开始对战！",
                function() {
                    ModuleManager.showModuleByID(config.ModuleConst.PET_BAG)
                }) : void Alert.show("请在出战背包放入至少六只精灵，并保证背包所有精灵为满级满状态再开始对战！",
                function() {
                    ModuleManager.showModuleByID(config.ModuleConst.PET_BAG)
                })
            }
        },
        Object.defineProperty(i.prototype, "type", {
            get: function() {
                return this._type
            },
            set: function(e) {
                this._type = e,
                this.mode1.visible = 1 == this.type,
                this.mode2.visible = 2 == this.type,
                this.btnZhuChang.visible = this.btnBanwei.visible = this.btnNewRule.visible = 2 === this.type
            },
            enumerable: !0,
            configurable: !0
        }),
        i.prototype.battleHandle = function() {
            var e = this;
            SocketConnection.sendByQueue(42352, [1, 1],
            function(i) {
                t.prototype.onClose.call(e)
            })
        },
        i.prototype.onmatch = function(e) {
            t.prototype.onClose.call(this)
        },
        i.prototype.clearPet = function() {
            if (this.petitems) {
                for (var e = 0; e < this.petitems.length; e++) this.petitems[e].destroy(),
                this.petitems[e] = null;
                this.petitems = null
            }
        },
        i.prototype.checkpunish = function(e) {
            void 0 === e && (e = !0),
            KTool.getMultiValue([100689],
            function(t) {
                var i = t[0];
                SystemTimerManager.time;
                i > 0 && (e ? SocketConnection.sendByQueue(42285, [1]) : SocketConnection.sendByQueue(42285, [3]))
            })
        },
        i.prototype.destroy = function() {
            this._removeEvents(),
            this.icon.source = null,
            this.clearPet(),
            t.prototype.destroy.call(this)
        },
        i
    } (BaseModule);
    e.ThepeakofJihadModePanel = t,
    __reflect(t.prototype, "thepeakofJihadModePanel.ThepeakofJihadModePanel")
} (thepeakofJihadModePanel || (thepeakofJihadModePanel = {}));
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
thepeakofJihadModePanel; !
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.skinName = BanweiPopViewItemSkin,
            t
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.once(egret.Event.REMOVED_FROM_STAGE, this.destroy, this)
        },
        t.prototype.dataChanged = function() {
            e.prototype.dataChanged.call(this),
            this.data && (this.icon.source = ClientConfig.getPetHeadPath(this.data), this.txt_id.text = "精灵序号：" + this.data, this.txt_name.text = PetXMLInfo.getName(this.data))
        },
        t.prototype.destroy = function() {
            this.removeChildren()
        },
        t
    } (eui.ItemRenderer);
    e.BanweiPopViewItem = t,
    __reflect(t.prototype, "thepeakofJihadModePanel.BanweiPopViewItem")
} (thepeakofJihadModePanel || (thepeakofJihadModePanel = {}));
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
thepeakofJihadModePanel; !
function(e) {
    var t = function(t) {
        function i() {
            var i = t.call(this) || this;
            return i.skinName = e.PeakjihadhomeItemSkin,
            i
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this)
        },
        i.prototype.dataChanged = function() {
            var e = this.data,
            t = e.id,
            i = e.idx;
            this.icon.source = ClientConfig.getPetHeadPath(t),
            this.pname.text = PetXMLInfo.getName(t);
            var n = PeakBigMeleeXMLInfo.getNewSeIcon(i);
            this.des.text = n
        },
        i
    } (eui.ItemRenderer);
    e.PeakjihadHomeItem = t,
    __reflect(t.prototype, "thepeakofJihadModePanel.PeakjihadHomeItem")
} (thepeakofJihadModePanel || (thepeakofJihadModePanel = {}));
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
thepeakofJihadModePanel; !
function(e) {
    var t = function(t) {
        function i() {
            var i = t.call(this) || this;
            return i.skinName = e.BanweiPopViewSkin,
            i
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this),
            this._list.itemRenderer = e.BanweiPopViewItem
        },
        i.prototype.initEvents = function() {
            var e = this;
            ImageButtonUtil.add(this.btnClose,
            function() {
                e.hide()
            },
            this)
        },
        i.prototype.removeEvents = function() {
            ImageButtonUtil.removeAll(this)
        },
        i.prototype._upDateView = function() {
            this._list.dataProvider = new eui.ArrayCollection(PeakJihad2016Controller.banPetList)
        },
        i.prototype.destroy = function() {
            t.prototype.destroy.call(this)
        },
        i
    } (PopView);
    e.BanweiPopView = t,
    __reflect(t.prototype, "thepeakofJihadModePanel.BanweiPopView")
} (thepeakofJihadModePanel || (thepeakofJihadModePanel = {}));
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
thepeakofJihadModePanel; !
function(e) {
    var t = function(t) {
        function i() {
            var i = t.call(this) || this;
            return i.skinName = e.PeakjihadhomeSkin,
            i
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this),
            this.list_viewport.itemRenderer = e.PeakjihadHomeItem;
            for (var i = [], n = 0; 4 > n; n++) {
                var o = PeakBigMeleeXMLInfo.getHomeAdditionMon(n);
                if (0 >= o) break;
                i.push({
                    id: o,
                    idx: n
                })
            }
            this.list_viewport.dataProvider = new eui.ArrayCollection(i)
        },
        i.prototype.initEvents = function() {
            ImageButtonUtil.add(this.btnClose, this.onTouchTapImageButton, this)
        },
        i.prototype.removeEvents = function() {
            ImageButtonUtil.removeAll(this)
        },
        i.prototype.onTouchTapImageButton = function(e) {
            switch (e.target) {
            case this.btnClose:
                this.hide()
            }
        },
        i.prototype.destroy = function() {
            t.prototype.destroy.call(this)
        },
        i
    } (PopView);
    e.PeakJihadHomePopView = t,
    __reflect(t.prototype, "thepeakofJihadModePanel.PeakJihadHomePopView")
} (thepeakofJihadModePanel || (thepeakofJihadModePanel = {})),
window.thepeakofJihadModePanel = window.thepeakofJihadModePanel || {};
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
generateEUI.paths["resource/eui_skins/itemRender/BanweiPopViewItemSkin.exml"] = window.BanweiPopViewItemSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["icon", "txt_id", "txt_name"],
        this.height = 72,
        this.width = 463,
        this.elementsContent = [this._Image1_i(), this.icon_i(), this.txt_id_i(), this.txt_name_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Image1_i = function() {
        var e = new eui.Image;
        return e.height = 71,
        e.source = "banwei_pop_view_item_bg_1_png",
        e.width = 463,
        e.x = 0,
        e.y = 0,
        e
    },
    i.icon_i = function() {
        var e = new eui.Image;
        return this.icon = e,
        e.height = 70,
        e.width = 70,
        e.x = 0,
        e.y = 1,
        e
    },
    i.txt_id_i = function() {
        var e = new eui.Label;
        return this.txt_id = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "精灵序号：9999",
        e.textColor = 15857151,
        e.x = 86,
        e.y = 17,
        e
    },
    i.txt_name_i = function() {
        var e = new eui.Label;
        return this.txt_name = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "精灵名字精灵名字精灵名字",
        e.textColor = 9157375,
        e.x = 86,
        e.y = 41,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/itemRender/PeakjihadhomeItemSkin.exml"] = window.thepeakofJihadModePanel.PeakjihadhomeItemSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["icon", "line", "des", "pname"],
        this.height = 70,
        this.width = 694,
        this.elementsContent = [this._Group1_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Group1_i = function() {
        var e = new eui.Group;
        return e.elementsContent = [this._Image1_i(), this.icon_i(), this.line_i(), this.des_i(), this.pname_i()],
        e
    },
    i._Image1_i = function() {
        var e = new eui.Image;
        return e.height = 70,
        e.source = "common_avatar_bg_size_100_100_png",
        e.width = 70,
        e
    },
    i.icon_i = function() {
        var e = new eui.Image;
        return this.icon = e,
        e.height = 70,
        e.source = "",
        e.width = 70,
        e.x = 0,
        e.y = 0,
        e
    },
    i.line_i = function() {
        var e = new eui.Image;
        return this.line = e,
        e.height = 1,
        e.source = "common_line_01_s9_png",
        e.width = 604,
        e.x = 82,
        e.y = 68,
        e
    },
    i.des_i = function() {
        var e = new eui.Label;
        return this.des = e,
        e.fontFamily = "黑体",
        e.height = 34,
        e.size = 16,
        e.text = "回合开始时若对手处于异常状态则当回合攻击命中后附加300点固定伤害；回合开始时若对手能力下降",
        e.textColor = 6517135,
        e.width = 611,
        e.x = 83,
        e.y = 24,
        e
    },
    i.pname_i = function() {
        var e = new eui.Label;
        return this.pname = e,
        e.fontFamily = "黑体",
        e.size = 18,
        e.text = "精灵名字预计九个字",
        e.textColor = 1646921,
        e.x = 83,
        e.y = 2,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/Peakjihadpunishmentalarm1modeSkin.exml"] = window.Peakjihadpunishmentalarm1modeSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["alert_BG_png", "tx_2", "tx_1", "tx_0", "timeTx", "btnCLose"],
        this.height = 329,
        this.width = 499,
        this.elementsContent = [this.alert_BG_png_i(), this.tx_2_i(), this.tx_1_i(), this.tx_0_i(), this.timeTx_i(), this.btnCLose_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i.alert_BG_png_i = function() {
        var e = new eui.Image;
        return this.alert_BG_png = e,
        e.anchorOffsetX = 0,
        e.height = 329,
        e.source = "alert_BG_s_png",
        e.width = 499,
        e
    },
    i.tx_2_i = function() {
        var e = new eui.Label;
        return this.tx_2 = e,
        e.anchorOffsetX = 0,
        e.anchorOffsetY = 0,
        e.fontFamily = "黑体",
        e.height = 68,
        e.size = 20,
        e.text = "由于你近期进行过违规操作，需要等待倒计时结束时才能开始匹配",
        e.textColor = 3356507,
        e.width = 421,
        e.x = 50,
        e.y = 111,
        e
    },
    i.tx_1_i = function() {
        var e = new eui.Label;
        return this.tx_1 = e,
        e.fontFamily = "黑体",
        e.size = 20,
        e.text = "等待中下线将重置等待时间",
        e.textColor = 13389865,
        e.x = 131,
        e.y = 273,
        e
    },
    i.tx_0_i = function() {
        var e = new eui.Label;
        return this.tx_0 = e,
        e.fontFamily = "黑体",
        e.size = 36,
        e.text = "警  告",
        e.textColor = 782833,
        e.x = 201,
        e.y = 37,
        e
    },
    i.timeTx_i = function() {
        var e = new eui.Label;
        return this.timeTx = e,
        e.fontFamily = "黑体",
        e.size = 50,
        e.text = "00:00",
        e.textColor = 5459333,
        e.x = 183,
        e.y = 193,
        e
    },
    i.btnCLose_i = function() {
        var e = new eui.Image;
        return this.btnCLose = e,
        e.source = "common_close_1_png",
        e.x = 417,
        e.y = 21,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/pop/BanweiPopViewSkin.exml"] = window.thepeakofJihadModePanel.BanweiPopViewSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["title_banwei", "bg", "_list", "btnClose", "pop"],
        this.height = 285,
        this.width = 481,
        this.elementsContent = [this.pop_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i.pop_i = function() {
        var e = new eui.Group;
        return this.pop = e,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this.bg_i(), this._list_i(), this.btnClose_i()],
        e
    },
    i.bg_i = function() {
        var e = new eui.Group;
        return this.bg = e,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this._Image1_i(), this._Image2_i(), this.title_banwei_i()],
        e
    },
    i._Image1_i = function() {
        var e = new eui.Image;
        return e.fillMode = "repeat",
        e.height = 285,
        e.source = "common_s9_pop_bg4_png",
        e.visible = !0,
        e.width = 481,
        e.x = 0,
        e.y = 0,
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "common_pop_up_bg_m_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.title_banwei_i = function() {
        var e = new eui.Image;
        return this.title_banwei = e,
        e.source = "banwei_pop_view_title_banwei_png",
        e.x = 38,
        e.y = 1,
        e
    },
    i._list_i = function() {
        var e = new eui.List;
        return this._list = e,
        e.height = 222,
        e.width = 463,
        e.x = 7,
        e.y = 45,
        e.layout = this._VerticalLayout1_i(),
        e
    },
    i._VerticalLayout1_i = function() {
        var e = new eui.VerticalLayout;
        return e.verticalAlign = "contentJustify",
        e
    },
    i.btnClose_i = function() {
        var e = new eui.Image;
        return this.btnClose = e,
        e.source = "common_pop_btn_close_png",
        e.x = 439,
        e.y = 0,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/pop/PeakjihadhomeSkin.exml"] = window.thepeakofJihadModePanel.PeakjihadhomeSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["title", "btnClose", "bg", "list_viewport"],
        this.height = 462,
        this.width = 778,
        this.elementsContent = [this.bg_i(), this._Scroller1_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i.bg_i = function() {
        var e = new eui.Group;
        return this.bg = e,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this._Image1_i(), this._Image2_i(), this._Image3_i(), this.title_i(), this.btnClose_i()],
        e
    },
    i._Image1_i = function() {
        var e = new eui.Image;
        return e.height = 462,
        e.source = "common_s9_pop_bg1_png",
        e.visible = !1,
        e.width = 778,
        e.x = 0,
        e.y = 0,
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.fillMode = "repeat",
        e.height = 411,
        e.source = "common_pop_point_png",
        e.width = 756,
        e.x = 12,
        e.y = 32,
        e
    },
    i._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "common_pop_title_medium_png",
        e.x = 16,
        e.y = 13,
        e
    },
    i.title_i = function() {
        var e = new eui.Image;
        return this.title = e,
        e.source = "thepeakofJihadModePanel_mode0_benyuezhuchang_png",
        e.x = 49,
        e.y = 19,
        e
    },
    i.btnClose_i = function() {
        var e = new eui.Image;
        return this.btnClose = e,
        e.source = "common_close_1_png",
        e.x = 726,
        e.y = -9,
        e
    },
    i._Scroller1_i = function() {
        var e = new eui.Scroller;
        return e.height = 338,
        e.scrollPolicyH = "off",
        e.width = 694,
        e.x = 45,
        e.y = 86,
        e.viewport = this._Group1_i(),
        e
    },
    i._Group1_i = function() {
        var e = new eui.Group;
        return e.elementsContent = [this.list_viewport_i()],
        e
    },
    i.list_viewport_i = function() {
        var e = new eui.List;
        return this.list_viewport = e,
        e.height = 200,
        e.width = 200,
        e.layout = this._VerticalLayout1_i(),
        e
    },
    i._VerticalLayout1_i = function() {
        var e = new eui.VerticalLayout;
        return e.gap = 20,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/ThepeakofJihadModePanelSkin.exml"] = window.ThepeakofjihadmodepanelSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["Bg", "nameBg", "nameTx", "chenghaoTx", "starBg", "star", "cname", "cstar", "icon", "suitGroup", "Count_bg", "icon_coin0", "num", "Count_bg0", "icon_coin1", "num1", "mode2", "mode1", "backBtn", "rankListBtn", "btnNewRule", "btnBanwei", "btnZhuChang", "grp_leftBtns", "suitIcon", "fightBtn", "boxmc"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.Bg_i(), this._Group3_i(), this._Group6_i(), this.grp_leftBtns_i(), this.suitIcon_i(), this._Group7_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i.Bg_i = function() {
        var e = new eui.Image;
        return this.Bg = e,
        e.horizontalCenter = 0,
        e.source = "common_ui_bg_1_png",
        e
    },
    i._Group3_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = -252.5,
        e.y = 156,
        e.elementsContent = [this._Image1_i(), this._Group1_i(), this._Group2_i(), this.suitGroup_i()],
        e
    },
    i._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "common_hero_base_png",
        e.x = 0,
        e.y = 117.98,
        e
    },
    i._Group1_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = 0,
        e.y = 0,
        e.elementsContent = [this.nameBg_i(), this.nameTx_i(), this.chenghaoTx_i()],
        e
    },
    i.nameBg_i = function() {
        var e = new eui.Image;
        return this.nameBg = e,
        e.source = "thepeakofJihadModePanel_nameBg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.nameTx_i = function() {
        var e = new eui.Label;
        return this.nameTx = e,
        e.fontFamily = "黑体",
        e.height = 20,
        e.size = 20,
        e.text = "昵称五个字",
        e.textAlign = "center",
        e.textColor = 15857407,
        e.width = 100,
        e.x = 89,
        e.y = 33,
        e
    },
    i.chenghaoTx_i = function() {
        var e = new eui.Label;
        return this.chenghaoTx = e,
        e.fontFamily = "黑体",
        e.height = 20,
        e.size = 20,
        e.text = "称号一二三四五六七八",
        e.textAlign = "center",
        e.textColor = 3538756,
        e.width = 200,
        e.x = 39,
        e.y = 4,
        e
    },
    i._Group2_i = function() {
        var e = new eui.Group;
        return e.x = 66,
        e.y = 392.67,
        e.elementsContent = [this.starBg_i(), this.star_i(), this.cname_i(), this.cstar_i(), this.icon_i()],
        e
    },
    i.starBg_i = function() {
        var e = new eui.Image;
        return this.starBg = e,
        e.source = "thepeakofJihadModePanel_starBg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.star_i = function() {
        var e = new eui.Image;
        return this.star = e,
        e.source = "thepeakofJihadModePanel_star_png",
        e.x = 310,
        e.y = 4,
        e
    },
    i.cname_i = function() {
        var e = new eui.Label;
        return this.cname = e,
        e.fontFamily = "黑体",
        e.size = 20,
        e.text = "段位名称",
        e.textColor = 16773477,
        e.x = 130,
        e.y = 12,
        e
    },
    i.cstar_i = function() {
        var e = new eui.Label;
        return this.cstar = e,
        e.fontFamily = "黑体",
        e.size = 20,
        e.text = "9999星",
        e.textColor = 16773477,
        e.x = 242,
        e.y = 13,
        e
    },
    i.icon_i = function() {
        var e = new eui.Image;
        return this.icon = e,
        e.height = 35,
        e.source = "thepeakofJihadModePanel_icon_png",
        e.width = 35,
        e.x = 68,
        e.y = 3,
        e
    },
    i.suitGroup_i = function() {
        var e = new eui.Group;
        return this.suitGroup = e,
        e.anchorOffsetX = 0,
        e.anchorOffsetY = 0,
        e.height = 0,
        e.width = 0,
        e.x = 261,
        e.y = 350.65,
        e
    },
    i._Group6_i = function() {
        var e = new eui.Group;
        return e.left = 0,
        e.right = 0,
        e.y = 0,
        e.elementsContent = [this._Image2_i(), this._Group4_i(), this._Group5_i(), this.mode2_i(), this.mode1_i(), this.backBtn_i()],
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.left = 0,
        e.right = 0,
        e.source = "common_top_bg_style1_png",
        e.y = 0,
        e
    },
    i._Group4_i = function() {
        var e = new eui.Group;
        return e.right = 188,
        e.y = 12,
        e.elementsContent = [this.Count_bg_i(), this.icon_coin0_i(), this.num_i()],
        e
    },
    i.Count_bg_i = function() {
        var e = new eui.Image;
        return this.Count_bg = e,
        e.source = "thepeakofJihadModePanel_Count_bg_png",
        e.x = 0,
        e.y = 1,
        e
    },
    i.icon_coin0_i = function() {
        var e = new eui.Image;
        return this.icon_coin0 = e,
        e.left = 0,
        e.source = "thepeakofJihadModePanel_icon_coin0_png",
        e.y = 0,
        e
    },
    i.num_i = function() {
        var e = new eui.Label;
        return this.num = e,
        e.fontFamily = "黑体",
        e.size = 16,
        e.text = "1500/1500",
        e.textAlign = "center",
        e.textColor = 13887988,
        e.width = 100,
        e.x = 27,
        e.y = 5,
        e
    },
    i._Group5_i = function() {
        var e = new eui.Group;
        return e.right = 27,
        e.y = 12,
        e.elementsContent = [this.Count_bg0_i(), this.icon_coin1_i(), this.num1_i()],
        e
    },
    i.Count_bg0_i = function() {
        var e = new eui.Image;
        return this.Count_bg0 = e,
        e.source = "thepeakofJihadModePanel_Count_bg_png",
        e.x = 0,
        e.y = 1,
        e
    },
    i.icon_coin1_i = function() {
        var e = new eui.Image;
        return this.icon_coin1 = e,
        e.left = 0,
        e.source = "thepeakofJihadModePanel_icon_coin1_png",
        e.y = 0,
        e
    },
    i.num1_i = function() {
        var e = new eui.Label;
        return this.num1 = e,
        e.fontFamily = "黑体",
        e.size = 16,
        e.text = "2500/2500",
        e.textAlign = "center",
        e.textColor = 13887988,
        e.width = 100,
        e.x = 27,
        e.y = 5,
        e
    },
    i.mode2_i = function() {
        var e = new eui.Image;
        return this.mode2 = e,
        e.source = "thepeakofJihadModePanel_mode0_png",
        e.x = 114,
        e.y = 7,
        e
    },
    i.mode1_i = function() {
        var e = new eui.Image;
        return this.mode1 = e,
        e.source = "thepeakofJihadModePanel_mode1_png",
        e.visible = !0,
        e.x = 114,
        e.y = 7,
        e
    },
    i.backBtn_i = function() {
        var e = new eui.Image;
        return this.backBtn = e,
        e.source = "common_close_2_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.grp_leftBtns_i = function() {
        var e = new eui.Group;
        return this.grp_leftBtns = e,
        e.x = 23,
        e.y = 83,
        e.elementsContent = [this.rankListBtn_i(), this.btnNewRule_i(), this.btnBanwei_i(), this.btnZhuChang_i()],
        e
    },
    i.rankListBtn_i = function() {
        var e = new eui.Image;
        return this.rankListBtn = e,
        e.source = "thepeakofJihadModePanel_rankListBtn_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.btnNewRule_i = function() {
        var e = new eui.Image;
        return this.btnNewRule = e,
        e.height = 81,
        e.source = "thepeakofJihadModePanel_btnNewRule_png",
        e.width = 72,
        e.x = 5,
        e.y = 243,
        e
    },
    i.btnBanwei_i = function() {
        var e = new eui.Image;
        return this.btnBanwei = e,
        e.height = 81,
        e.source = "thepeakofJihadModePanel_btnBanwei_png",
        e.width = 72,
        e.x = 5,
        e.y = 343,
        e
    },
    i.btnZhuChang_i = function() {
        var e = new eui.Image;
        return this.btnZhuChang = e,
        e.height = 81,
        e.source = "thepeakofJihadModePanel_btnZhuChang_png",
        e.width = 72,
        e.x = 5,
        e.y = 440,
        e
    },
    i.suitIcon_i = function() {
        var e = new eui.Image;
        return this.suitIcon = e,
        e.height = 317,
        e.source = "thepeakofJihadModePanel_suitIcon_png",
        e.visible = !1,
        e.width = 269,
        e.x = 168,
        e.y = 191,
        e
    },
    i._Group7_i = function() {
        var e = new eui.Group;
        return e.right = 0,
        e.y = 50,
        e.elementsContent = [this._Image3_i(), this.fightBtn_i(), this._Image4_i(), this.boxmc_i()],
        e
    },
    i._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "thepeakofJihadModePanel_right_bg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.fightBtn_i = function() {
        var e = new eui.Image;
        return this.fightBtn = e,
        e.source = "thepeakofJihadModePanel_fightBtn_png",
        e.x = 160,
        e.y = 502,
        e
    },
    i._Image4_i = function() {
        var e = new eui.Image;
        return e.source = "thepeakofJihadModePanel_titlePng_png",
        e.x = 8,
        e.y = 15,
        e
    },
    i.boxmc_i = function() {
        var e = new eui.Group;
        return this.boxmc = e,
        e.anchorOffsetX = 0,
        e.anchorOffsetY = 0,
        e.height = 405.33,
        e.width = 446.67,
        e.x = 24,
        e.y = 84,
        e.layout = this._TileLayout1_i(),
        e
    },
    i._TileLayout1_i = function() {
        var e = new eui.TileLayout;
        return e.horizontalGap = 14,
        e.requestedColumnCount = 4,
        e.verticalGap = 10,
        e
    },
    t
} (eui.Skin);