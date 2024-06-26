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
skillStone; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.skinName = SkillstoneitemSkin,
            e
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this),
            DisplayUtil.cacheAsBitmapDisplayObj(this),
            this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this)
        },
        Object.defineProperty(e.prototype, "selected", {
            set: function(t) {
                this.flag.visible = t && this.data,
                egret.superSetter(e, this, "selected", t)
            },
            enumerable: !0,
            configurable: !0
        }),
        e.prototype.dataChanged = function() {
            TipsManager.getInstance().removeTips(this),
            DisplayUtil.setEnabled(this, !0),
            this.data ? (this.img.visible = !0, this.img.source = ItemXMLInfo.getIconURL(this.data.itemID), this.num.text = this.data.itemNum + "", 1 == this.data.iscomp && ((5 == ItemXMLInfo.getSkillStoneRank(this.data.itemID) || 0 == this.data.itemNum) && DisplayUtil.setEnabled(this, !1), TipsManager.getInstance().addTips(this, TipsManager.TIPS_TYPE_NORMAL, ItemXMLInfo.getName(this.data.itemID)))) : (this.img.visible = !1, this.num.text = "", this.selected = !1)
        },
        e.prototype.destroy = function() {
            DisplayUtil.setEnabled(this, !0),
            TipsManager.getInstance().removeTips(this),
            this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this),
            this.num.text = ""
        },
        e
    } (eui.ItemRenderer);
    t.SkillStoneItem = e,
    __reflect(e.prototype, "skillStone.SkillStoneItem")
} (skillStone || (skillStone = {}));
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
skillStone; !
function(t) {
    var e = function(e) {
        function i(t) {
            var i = e.call(this) || this;
            return i.skinName = SkillstoneskillitemSkin,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            DisplayUtil.cacheAsBitmapDisplayObj(this),
            this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this)
        },
        Object.defineProperty(i.prototype, "selected", {
            set: function(e) {
                egret.superSetter(t.SkillStoneItem, this, "selected", e)
            },
            enumerable: !0,
            configurable: !0
        }),
        i.prototype.dataChanged = function() {
            if (this.data) {
                var t = SkillXMLInfo.getTypeID(this.data.id),
                e = "" + t;
                4 == SkillXMLInfo.getCategory(this.data.id) && (e = "prop"),
                e && (this.img.source = ClientConfig.getpettypeticon(e)),
                this.skillName.text = this.data.name,
                this.pow.text = this.data.damage.toString(),
                this.pp.text = this.data.pp + "/" + this.data.maxPP
            }
        },
        i.prototype.destroy = function() {
            this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this),
            this.img.source = null
        },
        i
    } (eui.ItemRenderer);
    t.SkillItem = e,
    __reflect(e.prototype, "skillStone.SkillItem")
} (skillStone || (skillStone = {}));
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
skillStone; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t.selectStep = 0,
            t.skinName = SkillstoneskillreplaceSkin,
            t
        }
        return __extends(i, e),
        i.prototype._parseData = function() {
            this._petinfo = this._data.petInfo,
            this.stoneId = this._data.stoneId
        },
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.list_viewport.itemRenderer = t.SkillItem,
            this._ary = new eui.ArrayCollection,
            this.list_viewport.dataProvider = this._ary,
            this.grp_selectType.visible = !0,
            this.grp_changeSkill.visible = !1
        },
        i.prototype._upDateView = function() {
            this.updateinfo()
        },
        i.prototype.initEvents = function() {
            this.list_viewport.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.onTouchTapItem, this),
            ImageButtonUtil.add(this.attackBtn, this.onTouchTapImageButton, this),
            ImageButtonUtil.add(this.spBtn, this.onTouchTapImageButton, this)
        },
        i.prototype.removeEvents = function() {
            this.list_viewport.removeEventListener(eui.ItemTapEvent.ITEM_TAP, this.onTouchTapItem, this),
            ImageButtonUtil.removeAll(this)
        },
        i.prototype.onTouchTapImageButton = function(t) {
            switch (t.target) {
            case this.attackBtn:
                this.chooseType(1);
                break;
            case this.spBtn:
                this.chooseType(2)
            }
        },
        i.prototype.chooseType = function(t) {
            var e = this;
            this.selectindex = t;
            for (var i = 0,
            n = this._petinfo.skillArray; i < n.length; i++) {
                var o = n[i];
                if (o.id > 1e5) return void Alert.show("你的精灵已经拥有了一块技能石，每个精灵最多只能拥有一块技能石，替换技能石后，原有的技能石将被摧毁，确认要替换吗？",
                function() {
                    SocketConnection.send(CommandID.SKILL_STONE_USE_ITEM, e._petinfo.catchTime, e.stoneId, 0, t),
                    e.hide()
                })
            }
            this._petinfo.skillArray.length < 4 ? SocketConnection.send(CommandID.SKILL_STONE_USE_ITEM, this._petinfo.catchTime, this.stoneId, 0, t) : this.selectStep = 1,
            this.grp_selectType.visible = !1,
            this.grp_changeSkill.visible = !0
        },
        i.prototype.onTouchTapItem = function(t) {
            var e = this;
            this.selectStep > 0 && t.item && (this.oldId = t.item.id, Alert.show("确认替换吗？",
            function() {
                SocketConnection.send(CommandID.SKILL_STONE_USE_ITEM, e._petinfo.catchTime, e.stoneId, e.oldId, e.selectindex),
                e.hide()
            }))
        },
        i.prototype.updateinfo = function() {
            var t = this._petinfo.skillArray;
            this._ary.replaceAll(t)
        },
        i.prototype.destroy = function() {
            e.prototype.destroy.call(this)
        },
        i
    } (PopView);
    t.SkillReplaceView = e,
    __reflect(e.prototype, "skillStone.SkillReplaceView")
} (skillStone || (skillStone = {}));
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
skillStone; !
function(t) {
    var e = function(t) {
        function e(e) {
            var i = t.call(this, e) || this;
            return i._petinfo = i.data,
            i
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            var e = this;
            t.prototype.childrenCreated.call(this);
            var n = new i,
            o = PopViewManager.createDefaultStyleObject();
            o.caller = this,
            o.clickMaskHandler = function() {
                n.hide(),
                e.onClose()
            },
            o.maskShapeStyle.maskAlpha = 0,
            o.effStyle.showAniType = PopEffStyle.RIGHT_TO_LEFT,
            PopViewManager.getInstance().openView(n, o, this._petinfo)
        },
        e.prototype.destroy = function() {
            t.prototype.destroy.call(this)
        },
        e
    } (BaseModule);
    t.SkillStone = e,
    __reflect(e.prototype, "skillStone.SkillStone");
    var i = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t.lastStoneid = -1,
            t.skinName = SkillstoneSkin,
            t
        }
        return __extends(i, e),
        i.prototype._parseData = function() {
            this._petinfo = this._data
        },
        i.prototype.initEvents = function() {
            ImageButtonUtil.add(this.composeBtn, this.onTouchTapImageButton, this),
            ImageButtonUtil.add(this.backBtn, this.onTouchTapImageButton, this),
            ImageButtonUtil.add(this.openBtn, this.onTouchTapImageButton, this),
            EventManager.addEventListener("SkillStoneUseItem", this.onUseItem, this),
            EventManager.addEventListener("skillStoneReplaveEvent", this.onReplace, this),
            SocketConnection.addCmdListener(CommandID.SKILL_STONE_USE_ITEM, this.onUseStoneItem, this)
        },
        i.prototype.removeEvents = function() {
            ImageButtonUtil.removeAll(this),
            EventManager.removeEventListener("SkillStoneUseItem", this.onUseItem, this),
            EventManager.removeEventListener("skillStoneReplaveEvent", this.onReplace, this),
            SocketConnection.removeCmdListener(CommandID.SKILL_STONE_USE_ITEM, this.onUseStoneItem, this)
        },
        Object.defineProperty(i.prototype, "petinfo", {
            set: function(t) {
                this._petinfo = t
            },
            enumerable: !0,
            configurable: !0
        }),
        i.prototype.onReplace = function(t) {
            SocketConnection.send(CommandID.SKILL_STONE_USE_ITEM, this._petinfo.catchTime, this.lastStoneid, 0, t.data)
        },
        i.prototype.onUseStoneItem = function(t) {
            var e = this;
            this.itempanel.updateitems();
            var i = t.data,
            n = i.readUnsignedInt();
            i.readUnsignedInt(); - 1 != this.lastStoneid && (0 == n && Alarm.show("恭喜你，你的精灵获得了" + TextFormatUtil.getRedTxt(ItemXMLInfo.getName(this.lastStoneid)) + "的力量！（可以在实验室技能唤醒仪更换技能）"), 1 == n && Alarm.show("恭喜你，你的精灵获得了" + TextFormatUtil.getRedTxt(ItemXMLInfo.getName(this.lastStoneid)) + "的力量！这竟然是一块" + TextFormatUtil.getRedTxt("完美的技能石") + "，从技能石中获得了额外的特效！（可以在实验室技能唤醒仪更换技能）")),
            this.lastStoneid = -1,
            PetManager.UpdateBagPetInfoAsynce(this._petinfo.catchTime).then(function() {
                e.petinfo = PetManager.getPetInfo(e._petinfo.catchTime)
            })
        },
        i.prototype.onUseItem = function(e) {
            var i = e.data;
            this._petinfo.level < ItemXMLInfo.getSkillStoneNeedLV(i) ? Alarm.show("需要精灵达到" + ItemXMLInfo.getSkillStoneNeedLV(i) + "级才可以使用" + ItemXMLInfo.getName(i) + "！") : (this.lastStoneid = i, PopViewManager.getInstance().openView(new t.SkillReplaceView, null, {
                petInfo: this._petinfo,
                stoneId: i
            }))
        },
        i.prototype.onTouchTapImageButton = function(e) {
            switch (e.target) {
            case this.backBtn:
                this.hide(),
                ModuleManager.hideModule("skillStone.SkillStone");
                break;
            case this.openBtn:
                PopViewManager.getInstance().openView(new t.SkillStoneOpenPanel);
                break;
            case this.composeBtn:
                PopViewManager.getInstance().openView(new t.SkillStoneComposePanel)
            }
        },
        i.prototype.destroy = function() {
            this.itempanel && (this.itempanel.destroy(), this.itempanel = null),
            e.prototype.destroy.call(this)
        },
        i
    } (PopView);
    t.SkillStonePopview = i,
    __reflect(i.prototype, "skillStone.SkillStonePopview")
} (skillStone || (skillStone = {}));
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
skillStone; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.skinName = SkillStoneComposeItemSkin,
            e
        }
        return __extends(e, t),
        e.prototype.dataChanged = function() {
            if (TipsManager.getInstance().removeTips(this), DisplayUtil.setEnabled(this, !0), this.data) {
                this.img.visible = !0,
                this.img.source = ItemXMLInfo.getIconURL(this.data.itemID),
                this.num.text = this.data.itemNum + "";
                var t = ItemXMLInfo.getName(this.data.itemID),
                e = t.length,
                i = e - 3;
                t = t.substr(0, i),
                this.sName.text = t,
                1 == this.data.iscomp && ((5 == ItemXMLInfo.getSkillStoneRank(this.data.itemID) || 0 == this.data.itemNum) && DisplayUtil.setEnabled(this, !1), TipsManager.getInstance().addTips(this, TipsManager.TIPS_TYPE_NORMAL, ItemXMLInfo.getName(this.data.itemID)))
            } else this.img.visible = !1,
            this.num.text = "",
            this.sName.text = "",
            this.selected = !1
        },
        e
    } (t.SkillStoneItem);
    t.SkillStoneComposeItem = e,
    __reflect(e.prototype, "skillStone.SkillStoneComposeItem")
} (skillStone || (skillStone = {}));
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
skillStone; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t._itemArray = [0, 0, 0, 0],
            t._currentPutIndex = 0,
            t.skinName = SkillstonecomposeSkin,
            t
        }
        return __extends(i, e),
        i.prototype.initialized = function() {
            this.scroller_item.viewport = this.list_viewport,
            this.list_viewport.itemRenderer = t.SkillStoneComposeItem,
            this._ary = new eui.ArrayCollection,
            this.list_viewport.dataProvider = this._ary,
            e.prototype.initialized.call(this),
            this.Show(),
            this.updateitems(),
            this.updateCurrentItemState()
        },
        i.prototype.initEvents = function() {
            SocketConnection.addCmdListener(CommandID.SKILL_STONE_COMPOSE_ITEM, this.onCompose, this),
            this.list_viewport.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.onTouchTapItem, this),
            ItemManager.addEventListener(ItemEvent.SKILL_STONE_LIST, this.onGetSkillStone, this),
            ImageButtonUtil.add(this.compBtn, this.onTouchTapImageButton, this),
            ImageButtonUtil.add(this.backBtn, this.onTouchTapImageButton, this);
            for (var t = 0; 4 > t; t++) ImageButtonUtil.add(this["remove_" + t], this.onTouchTapImageButton, this)
        },
        i.prototype.removeEvents = function() {
            this.list_viewport.removeEventListener(eui.ItemTapEvent.ITEM_TAP, this.onTouchTapItem, this),
            ItemManager.removeEventListener(ItemEvent.SKILL_STONE_LIST, this.onGetSkillStone, this),
            SocketConnection.removeCmdListener(CommandID.SKILL_STONE_COMPOSE_ITEM, this.onCompose, this),
            ImageButtonUtil.removeAll(this)
        },
        i.prototype.onTouchTapItem = function(t) {
            t.item && this.useItem(t.item)
        },
        i.prototype.reset = function() {
            for (var t = 0,
            e = this._itemArray; t < e.length; t++) for (var i = e[t], n = 0, o = 0, s = this.allitems; o < s.length; o++) {
                var r = s[o];
                if (r && r.itemID == i) {
                    r.itemNum++,
                    this._ary.replaceItemAt(r, n);
                    break
                }
                n++
            }
            this._currentPutIndex = 0,
            this._itemArray = [0, 0, 0, 0];
            for (var a = 0; 4 > a; a++) this["img" + a.toString()].source = null;
            this.updateCurrentItemState()
        },
        i.prototype.updateCurrentItemState = function() {
            for (var t = 0; 4 > t; t++) {
                var e = this._itemArray[t];
                e > 0 ? (this["img" + t].source = ItemXMLInfo.getIconURL(this._itemArray[t]), this["img" + t].visible = !0, this["remove_" + t].visible = !0, this["item_add_" + t].visible = !1) : (this["img" + t].visible = !1, this["item_add_" + t].visible = !0, this["remove_" + t].visible = !1)
            }
            this.updateSucceful(),
            this.checkCanCompose()
        },
        i.prototype.checkCanCompose = function() {
            DisplayUtil.setEnabled(this.compBtn, this._currentPutIndex >= 4)
        },
        i.prototype.onTouchTapImageButton = function(t) {
            switch (t.target) {
            case this.compBtn:
                this.onComposeClick();
                break;
            case this.backBtn:
                this.hide();
                break;
            case this.remove_0:
                this._removeItem(0);
                break;
            case this.remove_1:
                this._removeItem(1);
                break;
            case this.remove_2:
                this._removeItem(2);
                break;
            case this.remove_3:
                this._removeItem(3)
            }
        },
        i.prototype._removeItem = function(t) {
            var e = this._itemArray[t];
            this._itemArray[t] = 0;
            for (var i = 0,
            n = 0,
            o = this.allitems; n < o.length; n++) {
                var s = o[n];
                if (s && s.itemID == e && s.itemNum >= 0) {
                    s.itemNum++,
                    this._ary.replaceItemAt(s, i);
                    break
                }
                i++
            }
            this.updatePutIndex(),
            this.updateCurrentItemState()
        },
        i.prototype.onComposeClick = function() {
            var t = this;
            Alert.show("技能石合成将有几率获得更高等级的技能石，失败时技能石有一定几率损毁哦！确定要" + TextFormatUtil.getRedTxt("花费500赛尔豆") + "进行合成吗？",
            function() {
                SocketConnection.send(CommandID.SKILL_STONE_COMPOSE_ITEM, t._itemArray[0], t._itemArray[1], t._itemArray[2], t._itemArray[3])
            })
        },
        i.prototype.onCompose = function(t) {
            this.reset(),
            this.updateitems();
            for (var e = t.data,
            i = e.readUnsignedInt(), n = (e.readUnsignedInt(), e.readUnsignedInt()), o = [], s = 0; n > s; s++) {
                var r = e.readUnsignedInt(),
                a = this._itemArray[r - 1];
                if ( - 1 == o.indexOf(a)) o.push(1),
                o.push(a);
                else {
                    var _ = o[o.indexOf(a) - 1];
                    o[o.indexOf(a) - 1] = _ + 1
                }
            }
            if (0 == i) if (0 == o.length) BubblerManager.getInstance().showText("很遗憾，这次合成失败了！");
            else {
                for (var l = "损失了",
                h = 0; h < o.length / 2; h++) l += o[2 * h] + "颗" + ItemXMLInfo.getName(o[2 * h + 1]) + "；";
                l = l.slice(0, l.length - 1),
                l += "！",
                Alarm.show("很遗憾，这次合成失败了！" + TextFormatUtil.getRedTxt(l))
            }
        },
        i.prototype.useItem = function(t) {
            if (5 != ItemXMLInfo.getSkillStoneRank(t.itemID) && 0 != t.itemNum) {
                if (this._currentPutIndex < 4) for (var e = 0,
                i = 0,
                n = this.allitems; i < n.length; i++) {
                    var o = n[i];
                    if (o && o.itemID == t.itemID && o.itemNum > 0) {
                        this._itemArray[this._currentPutIndex] = ~~t.itemID,
                        this.updatePutIndex(),
                        o.itemNum--,
                        this._ary.replaceItemAt(o, e);
                        break
                    }
                    e++
                }
                this.updateCurrentItemState()
            }
        },
        i.prototype.updatePutIndex = function() {
            for (var t = 4,
            e = 0; e < this._itemArray.length; e++) if (this._itemArray[e] <= 0) {
                t = e;
                break
            }
            this._currentPutIndex = t
        },
        i.prototype.Show = function() {
            this.list_viewport.selectedItem = null,
            this.scroller_item.stopAnimation(),
            this.scroller_item.viewport.scrollV = 0
        },
        i.prototype.updateitems = function() {
            ItemManager.getSkillStone()
        },
        i.prototype.setItems = function() {
            var t = ItemManager.getSkillStoneInfos(),
            e = ItemManager.GetBagItemsArryCollect(t, 20);
            this.allitems = [];
            for (var i = 0,
            n = e; i < n.length; i++) {
                var o = n[i];
                if (null != o) {
                    var s = {};
                    KTool.cloneObject(s, o),
                    s.iscomp = 1,
                    this.allitems.push(s)
                } else this.allitems.push(null)
            }
            this._ary.replaceAll(this.allitems)
        },
        i.prototype.onGetSkillStone = function(t) {
            this.setItems()
        },
        i.prototype.updateSucceful = function() {
            for (var t = !1,
            e = 0; e < this._itemArray.length; e++) if (this._itemArray[e] > 0) {
                t = !0;
                break
            }
            if (!t) return void(this.lab_succesful.text = "0");
            for (var i = 0,
            e = 0; 4 > e; e++) {
                var n = this._itemArray[e];
                i = Math.max(i, ItemXMLInfo.getSkillStoneRank(n) + 1)
            }
            for (var o = 0,
            s = 0; 4 > s; s++) {
                var n = this._itemArray[s];
                o += this.getStoneProbability(ItemXMLInfo.getSkillStoneRank(n), i)
            }
            MainManager.actorInfo.isVip && (o += 10),
            o > 100 && (o = 100),
            this.lab_succesful.text = o.toFixed(2) + "%"
        },
        i.prototype.getStoneProbability = function(t, e) {
            switch (t) {
            case 1:
                switch (e) {
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
                switch (e) {
                case 3:
                    return 23;
                case 4:
                    return 5.5;
                case 5:
                    return 1.3
                }
                break;
            case 3:
                switch (e) {
                case 4:
                    return 22;
                case 5:
                    return 5.3
                }
                break;
            case 4:
                switch (e) {
                case 5:
                    return 21
                }
            }
            return 0
        },
        i.prototype.destroy = function() {
            this.allitems = null,
            this._itemArray = null,
            e.prototype.destroy.call(this)
        },
        i
    } (PopView);
    t.SkillStoneComposePanel = e,
    __reflect(e.prototype, "skillStone.SkillStoneComposePanel")
} (skillStone || (skillStone = {}));
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
skillStone; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t.skinName = SkillstonerSkin,
            t
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.scroller_item.viewport = this.list_viewport,
            this.list_viewport.itemRenderer = t.SkillStoneItem,
            this._ary = new eui.ArrayCollection,
            this.list_viewport.dataProvider = this._ary,
            this.addEvent(),
            this.Show(),
            this.updateitems()
        },
        i.prototype.addEvent = function() {
            this.list_viewport.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.onTouchTapItem, this),
            ItemManager.addEventListener(ItemEvent.SKILL_STONE_LIST, this.onGetSkillStone, this)
        },
        i.prototype.removeEvent = function() {
            this.list_viewport.removeEventListener(eui.ItemTapEvent.ITEM_TAP, this.onTouchTapItem, this),
            ItemManager.removeEventListener(ItemEvent.SKILL_STONE_LIST, this.onGetSkillStone, this)
        },
        i.prototype.onTouchTapItem = function(t) {
            if (t.item) {
                var e = {
                    id: t.item.itemID,
                    useItemFun: this.useItem,
                    caller: this
                },
                i = {
                    srcWorldPos: this.parent.localToGlobal(27),
                    dir: "right-top",
                    rx: 0,
                    ry: 0 / 0
                };
                tipsPop.TipsPop.openItemPop(e, i)
            }
        },
        i.prototype.useItem = function(t) {
            EventManager.dispatchEvent(new egret.Event("SkillStoneUseItem", !1, !1, t))
        },
        i.prototype.Show = function() {
            this.list_viewport.selectedItem = null,
            this.scroller_item.stopAnimation(),
            this.scroller_item.viewport.scrollV = 0
        },
        i.prototype.updateitems = function() {
            ItemManager.getSkillStone()
        },
        i.prototype.setItems = function() {
            for (var t = ItemManager.getSkillStoneInfos(), e = ItemManager.GetBagItemsArryCollect(t, 25), i = [], n = 0, o = e; n < o.length; n++) {
                var s = o[n];
                if (null != s) {
                    var r = {};
                    KTool.cloneObject(r, s),
                    r.iscomp = 0,
                    i.push(r)
                } else i.push(null)
            }
            this._ary.replaceAll(i)
        },
        i.prototype.onGetSkillStone = function(t) {
            this.setItems()
        },
        i.prototype.onUseItem = function(t) {
            var e = t.data;
            e.readUnsignedInt(),
            e.readUnsignedInt()
        },
        i.prototype.destroy = function() {
            this.removeEvent(),
            e.prototype.destroy.call(this)
        },
        i
    } (BaseModule);
    t.SkillStoneItemViewPanel = e,
    __reflect(e.prototype, "skillStone.SkillStoneItemViewPanel")
} (skillStone || (skillStone = {}));
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
skillStone; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.nums = [0, 0, 0, 0, 0],
            e._selectidx = -1,
            e.skinName = SkillstoneopenSkin,
            e
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this),
            this.addEvent(),
            this.selectidx = -1,
            this.updateOpenitemNum()
        },
        e.prototype.updateOpenitemNum = function() {
            var t = this;
            ItemManager.updateItems([300401, 300402, 300403, 300404, 300405],
            function() {
                t.nums = [];
                for (var e = 0; 5 > e; e++) t["img" + e.toString()].source = ItemXMLInfo.getIconURL(300401 + e),
                t["num" + e.toString()].text = ItemManager.getNumByID(300401 + e).toString(),
                t.nums.push(ItemManager.getNumByID(300401 + e)),
                t["flag" + e.toString()].visible = !1
            })
        },
        Object.defineProperty(e.prototype, "selectidx", {
            get: function() {
                return this._selectidx
            },
            set: function(t) {
                if (t > -1 && 0 == this.nums[t]) return void(this.selectidx = -1);
                for (var e = 0; 5 > e; e++) this["flag" + e.toString()].visible = !1;
                this._selectidx = t,
                t > -1 && (this["flag" + t.toString()].visible = !0),
                DisplayUtil.setEnabled(this.openBtn, this._selectidx > -1),
                DisplayUtil.setEnabled(this.optnAllBtn, this._selectidx > -1)
            },
            enumerable: !0,
            configurable: !0
        }),
        e.prototype.addEvent = function() {
            ImageButtonUtil.add(this.img0, this.onTouchTapImageButton, this),
            ImageButtonUtil.add(this.img1, this.onTouchTapImageButton, this),
            ImageButtonUtil.add(this.img2, this.onTouchTapImageButton, this),
            ImageButtonUtil.add(this.img3, this.onTouchTapImageButton, this),
            ImageButtonUtil.add(this.img4, this.onTouchTapImageButton, this),
            ImageButtonUtil.add(this.closeBtn, this.onTouchTapImageButton, this),
            ImageButtonUtil.add(this.optnAllBtn, this.onTouchTapImageButton, this),
            ImageButtonUtil.add(this.openBtn, this.onTouchTapImageButton, this)
        },
        e.prototype.removeEvent = function() {
            ImageButtonUtil.removeAll(this)
        },
        e.prototype.onTouchTapImageButton = function(t) {
            switch (t.target) {
            case this.closeBtn:
                this.hide();
                break;
            case this.openBtn:
                this.onSingle();
                break;
            case this.optnAllBtn:
                this.onAll();
                break;
            case this.img0:
                this.selectidx = 0;
                break;
            case this.img1:
                this.selectidx = 1;
                break;
            case this.img2:
                this.selectidx = 2;
                break;
            case this.img3:
                this.selectidx = 3;
                break;
            case this.img4:
                this.selectidx = 4
            }
        },
        e.prototype.onSingle = function() {
            SocketConnection.addCmdListener(CommandID.SKILL_STONE_USE_UNKNOW_ITEM, this.onUseUnknow, this),
            SocketConnection.send(CommandID.SKILL_STONE_USE_UNKNOW_ITEM, 300401 + this.selectidx, 1),
            this.selectidx = -1
        },
        e.prototype.onAll = function() {
            SocketConnection.addCmdListener(CommandID.SKILL_STONE_USE_UNKNOW_ITEM, this.onUseUnknow, this),
            SocketConnection.send(CommandID.SKILL_STONE_USE_UNKNOW_ITEM, 300401 + this.selectidx, this.nums[this.selectidx]),
            this.selectidx = -1
        },
        e.prototype.onUseUnknow = function(t) {
            SocketConnection.removeCmdListener(CommandID.SKILL_STONE_USE_UNKNOW_ITEM, this.onUseUnknow, this);
            for (var e = new HashMap,
            i = t.data,
            n = i.readUnsignedInt(), o = 0; n > o; o++) {
                var s, r = i.readUnsignedInt();
                e.containsKey(r) ? (s = e.getValue(r), s.itemNum++) : (s = new SingleItemInfo, s.itemID = r, s.itemNum = 1, e.add(r, s))
            }
            this.updateOpenitemNum()
        },
        e.prototype.destroy = function() {
            this.nums = null,
            this.removeEvent(),
            t.prototype.destroy.call(this)
        },
        e
    } (PopView);
    t.SkillStoneOpenPanel = e,
    __reflect(e.prototype, "skillStone.SkillStoneOpenPanel")
} (skillStone || (skillStone = {}));
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
generateEUI.paths["resource/eui_skins/SkillStoneComposeItemSkin.exml"] = window.SkillStoneComposeItemSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["img", "flag", "sName", "num"],
        this.height = 102,
        this.width = 80,
        this.elementsContent = [this._Image1_i(), this.img_i(), this.flag_i(), this.sName_i(), this.num_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "common_icon_bg_style_1_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.img_i = function() {
        var t = new eui.Image;
        return this.img = t,
        t.height = 50,
        t.width = 50,
        t.x = 15,
        t.y = 15,
        t
    },
    i.flag_i = function() {
        var t = new eui.Image;
        return this.flag = t,
        t.source = "common_icon_select_style_1_png",
        t.x = -6,
        t.y = -6,
        t
    },
    i.sName_i = function() {
        var t = new eui.Label;
        return this.sName = t,
        t.size = 16,
        t.text = "A级XX系",
        t.textAlign = "center",
        t.textColor = 13228017,
        t.width = 80,
        t.x = 0,
        t.y = 86,
        t
    },
    i.num_i = function() {
        var t = new eui.Label;
        return this.num = t,
        t.size = 20,
        t.text = "9999",
        t.textAlign = "right",
        t.width = 60,
        t.x = 18,
        t.y = 60,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/SkillstonecomposeSkin.exml"] = window.SkillstonecomposeSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["backBtn", "compBtn", "lab_succesful", "skill_stone_skill_replace_texture_001", "item_add_0", "item_add_1", "item_add_2", "item_add_3", "img3", "img2", "img1", "img0", "remove_0", "remove_1", "remove_2", "remove_3", "list_viewport", "scroller_item"],
        this.height = 606,
        this.width = 1100,
        this.elementsContent = [this._Image1_i(), this.backBtn_i(), this._Image2_i(), this._Image3_i(), this._Image4_i(), this._Image5_i(), this.compBtn_i(), this.lab_succesful_i(), this._Image6_i(), this._Image7_i(), this._Image8_i(), this._Image9_i(), this._Image10_i(), this.skill_stone_skill_replace_texture_001_i(), this.item_add_0_i(), this.item_add_1_i(), this.item_add_2_i(), this.item_add_3_i(), this.img3_i(), this.img2_i(), this.img1_i(), this.img0_i(), this.remove_0_i(), this.remove_1_i(), this.remove_2_i(), this.remove_3_i(), this.scroller_item_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 537,
        t.source = "skill_stone_compose_left_bg_png",
        t.width = 537,
        t.x = 0,
        t.y = 31,
        t
    },
    i.backBtn_i = function() {
        var t = new eui.Image;
        return this.backBtn = t,
        t.height = 55,
        t.source = "skill_stone_compose_backBtn_png",
        t.width = 56,
        t.x = 1044,
        t.y = 0,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 80,
        t.source = "common_icon_bg_style_1_png",
        t.width = 80,
        t.x = 231,
        t.y = 103,
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.height = 80,
        t.source = "common_icon_bg_style_1_png",
        t.width = 80,
        t.x = 386,
        t.y = 258,
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.height = 80,
        t.source = "common_icon_bg_style_1_png",
        t.width = 80,
        t.x = 76,
        t.y = 258,
        t
    },
    i._Image5_i = function() {
        var t = new eui.Image;
        return t.height = 80,
        t.source = "common_icon_bg_style_1_png",
        t.width = 80,
        t.x = 231,
        t.y = 413,
        t
    },
    i.compBtn_i = function() {
        var t = new eui.Image;
        return this.compBtn = t,
        t.height = 50,
        t.source = "skill_stone_compose_compBtn_png",
        t.width = 174,
        t.x = 184,
        t.y = 516,
        t
    },
    i.lab_succesful_i = function() {
        var t = new eui.Label;
        return this.lab_succesful = t,
        t.size = 20,
        t.text = "100.00%",
        t.textAlign = "center",
        t.textColor = 15201279,
        t.width = 79,
        t.x = 230.67,
        t.y = 309,
        t
    },
    i._Image6_i = function() {
        var t = new eui.Image;
        return t.height = 32,
        t.source = "skill_stone_compose_texture_003_png",
        t.width = 84,
        t.x = 229,
        t.y = 273,
        t
    },
    i._Image7_i = function() {
        var t = new eui.Image;
        return t.height = 550,
        t.source = "skill_stone_compose_s9_texture_001_png",
        t.width = 530,
        t.x = 521,
        t.y = 56,
        t
    },
    i._Image8_i = function() {
        var t = new eui.Image;
        return t.height = 44,
        t.source = "skill_stone_compose_texture_001_png",
        t.width = 500,
        t.x = 536,
        t.y = 71,
        t
    },
    i._Image9_i = function() {
        var t = new eui.Image;
        return t.height = 484,
        t.source = "common_texture_003_png",
        t.width = 512,
        t.x = 530,
        t.y = 113,
        t
    },
    i._Image10_i = function() {
        var t = new eui.Image;
        return t.height = 40,
        t.source = "skill_stone_compose_title_004_png",
        t.width = 143,
        t.x = 568,
        t.y = 73,
        t
    },
    i.skill_stone_skill_replace_texture_001_i = function() {
        var t = new eui.Image;
        return this.skill_stone_skill_replace_texture_001 = t,
        t.height = 52,
        t.source = "skill_stone_skill_replace_texture_001_png",
        t.width = 39,
        t.x = 537,
        t.y = 67,
        t
    },
    i.item_add_0_i = function() {
        var t = new eui.Image;
        return this.item_add_0 = t,
        t.source = "skill_stone_compose_add_png",
        t.x = 247,
        t.y = 119,
        t
    },
    i.item_add_1_i = function() {
        var t = new eui.Image;
        return this.item_add_1 = t,
        t.source = "skill_stone_compose_add_png",
        t.x = 402,
        t.y = 274,
        t
    },
    i.item_add_2_i = function() {
        var t = new eui.Image;
        return this.item_add_2 = t,
        t.source = "skill_stone_compose_add_png",
        t.x = 247,
        t.y = 429,
        t
    },
    i.item_add_3_i = function() {
        var t = new eui.Image;
        return this.item_add_3 = t,
        t.source = "skill_stone_compose_add_png",
        t.x = 92,
        t.y = 274,
        t
    },
    i.img3_i = function() {
        var t = new eui.Image;
        return this.img3 = t,
        t.height = 50,
        t.source = "",
        t.width = 50,
        t.x = 91,
        t.y = 273,
        t
    },
    i.img2_i = function() {
        var t = new eui.Image;
        return this.img2 = t,
        t.height = 50,
        t.source = "",
        t.width = 50,
        t.x = 246,
        t.y = 428,
        t
    },
    i.img1_i = function() {
        var t = new eui.Image;
        return this.img1 = t,
        t.height = 50,
        t.source = "",
        t.width = 50,
        t.x = 401,
        t.y = 273,
        t
    },
    i.img0_i = function() {
        var t = new eui.Image;
        return this.img0 = t,
        t.height = 50,
        t.source = "",
        t.width = 50,
        t.x = 246,
        t.y = 118,
        t
    },
    i.remove_0_i = function() {
        var t = new eui.Image;
        return this.remove_0 = t,
        t.height = 26,
        t.source = "skill_stone_compose_sub_png",
        t.width = 26,
        t.x = 292,
        t.y = 96,
        t
    },
    i.remove_1_i = function() {
        var t = new eui.Image;
        return this.remove_1 = t,
        t.height = 26,
        t.source = "skill_stone_compose_sub_png",
        t.width = 26,
        t.x = 447,
        t.y = 251,
        t
    },
    i.remove_2_i = function() {
        var t = new eui.Image;
        return this.remove_2 = t,
        t.height = 26,
        t.source = "skill_stone_compose_sub_png",
        t.width = 26,
        t.x = 292,
        t.y = 406,
        t
    },
    i.remove_3_i = function() {
        var t = new eui.Image;
        return this.remove_3 = t,
        t.height = 26,
        t.source = "skill_stone_compose_sub_png",
        t.width = 26,
        t.x = 137,
        t.y = 251,
        t
    },
    i.scroller_item_i = function() {
        var t = new eui.Scroller;
        return this.scroller_item = t,
        t.anchorOffsetY = 0,
        t.height = 442,
        t.scrollPolicyH = "off",
        t.width = 484,
        t.x = 544,
        t.y = 128,
        t.viewport = this._Group1_i(),
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.elementsContent = [this.list_viewport_i()],
        t
    },
    i.list_viewport_i = function() {
        var t = new eui.List;
        return this.list_viewport = t,
        t.height = 200,
        t.width = 200,
        t.x = 0,
        t.y = 0,
        t.layout = this._TileLayout1_i(),
        t
    },
    i._TileLayout1_i = function() {
        var t = new eui.TileLayout;
        return t.horizontalGap = 14,
        t.orientation = "rows",
        t.paddingLeft = 14,
        t.paddingTop = 14,
        t.requestedColumnCount = 5,
        t.verticalGap = 14,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/SkillstoneitemSkin.exml"] = window.SkillstoneitemSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["img", "flag", "num"],
        this.height = 80,
        this.width = 80,
        this.elementsContent = [this._Image1_i(), this.img_i(), this.flag_i(), this.num_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "common_icon_bg_style_1_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.img_i = function() {
        var t = new eui.Image;
        return this.img = t,
        t.height = 50,
        t.width = 50,
        t.x = 15,
        t.y = 15,
        t
    },
    i.flag_i = function() {
        var t = new eui.Image;
        return this.flag = t,
        t.source = "common_icon_select_style_1_png",
        t.x = -6,
        t.y = -6,
        t
    },
    i.num_i = function() {
        var t = new eui.Label;
        return this.num = t,
        t.size = 20,
        t.text = "9999",
        t.textAlign = "right",
        t.width = 60,
        t.x = 18,
        t.y = 60,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/SkillstoneopenSkin.exml"] = window.SkillstoneopenSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "title_003", "closeBtn", "openBtn", "optnAllBtn", "flag0", "flag1", "flag2", "flag3", "flag4", "img0", "img1", "img2", "img3", "img4", "txt1", "num0", "num1", "num2", "num3", "num4"],
        this.height = 351,
        this.width = 600,
        this.elementsContent = [this.bg_i(), this.title_003_i(), this.closeBtn_i(), this._Image4_i(), this._Image5_i(), this._Image6_i(), this._Image7_i(), this._Image8_i(), this.openBtn_i(), this.optnAllBtn_i(), this.flag0_i(), this.flag1_i(), this.flag2_i(), this.flag3_i(), this.flag4_i(), this.img0_i(), this.img1_i(), this.img2_i(), this.img3_i(), this.img4_i(), this.txt1_i(), this.num0_i(), this.num1_i(), this.num2_i(), this.num3_i(), this.num4_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.bg_i = function() {
        var t = new eui.Group;
        return this.bg = t,
        t.x = -15,
        t.y = -11,
        t.elementsContent = [this._Image1_i(), this._Image2_i(), this._Image3_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 378,
        t.source = "common_s9_pop_bg1_png",
        t.visible = !1,
        t.width = 630,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.fillMode = "repeat",
        t.height = 333,
        t.source = "common_pop_point_png",
        t.width = 608,
        t.x = 11,
        t.y = 31,
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "common_pop_title_samll_png",
        t.width = 600,
        t.x = 15,
        t.y = 12,
        t
    },
    i.title_003_i = function() {
        var t = new eui.Image;
        return this.title_003 = t,
        t.source = "skill_stone_open_title_003_png",
        t.x = 33,
        t.y = 7,
        t
    },
    i.closeBtn_i = function() {
        var t = new eui.Image;
        return this.closeBtn = t,
        t.source = "common_close_1_png",
        t.x = 562,
        t.y = -21,
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.height = 80,
        t.source = "common_icon_bg_style_1_png",
        t.width = 80,
        t.x = 480,
        t.y = 137,
        t
    },
    i._Image5_i = function() {
        var t = new eui.Image;
        return t.height = 80,
        t.source = "common_icon_bg_style_1_png",
        t.width = 80,
        t.x = 370,
        t.y = 137,
        t
    },
    i._Image6_i = function() {
        var t = new eui.Image;
        return t.height = 80,
        t.source = "common_icon_bg_style_1_png",
        t.width = 80,
        t.x = 260,
        t.y = 137,
        t
    },
    i._Image7_i = function() {
        var t = new eui.Image;
        return t.height = 80,
        t.source = "common_icon_bg_style_1_png",
        t.width = 80,
        t.x = 150,
        t.y = 137,
        t
    },
    i._Image8_i = function() {
        var t = new eui.Image;
        return t.height = 80,
        t.source = "common_icon_bg_style_1_png",
        t.width = 80,
        t.x = 40,
        t.y = 137,
        t
    },
    i.openBtn_i = function() {
        var t = new eui.Image;
        return this.openBtn = t,
        t.height = 50,
        t.source = "skill_stone_open_openBtn_png",
        t.width = 174,
        t.x = 325,
        t.y = 285,
        t
    },
    i.optnAllBtn_i = function() {
        var t = new eui.Image;
        return this.optnAllBtn = t,
        t.height = 50,
        t.source = "skill_stone_open_optnAllBtn_png",
        t.width = 174,
        t.x = 101,
        t.y = 285,
        t
    },
    i.flag0_i = function() {
        var t = new eui.Image;
        return this.flag0 = t,
        t.height = 92,
        t.scale9Grid = new egret.Rectangle(12, 12, 74, 74),
        t.source = "common_icon_select_style_1_png",
        t.width = 92,
        t.x = 33,
        t.y = 132,
        t
    },
    i.flag1_i = function() {
        var t = new eui.Image;
        return this.flag1 = t,
        t.height = 92,
        t.source = "common_icon_select_style_1_png",
        t.width = 92,
        t.x = 143,
        t.y = 132,
        t
    },
    i.flag2_i = function() {
        var t = new eui.Image;
        return this.flag2 = t,
        t.height = 92,
        t.source = "common_icon_select_style_1_png",
        t.width = 92,
        t.x = 253,
        t.y = 132,
        t
    },
    i.flag3_i = function() {
        var t = new eui.Image;
        return this.flag3 = t,
        t.height = 92,
        t.source = "common_icon_select_style_1_png",
        t.width = 92,
        t.x = 363,
        t.y = 132,
        t
    },
    i.flag4_i = function() {
        var t = new eui.Image;
        return this.flag4 = t,
        t.height = 92,
        t.source = "common_icon_select_style_1_png",
        t.width = 92,
        t.x = 473,
        t.y = 132,
        t
    },
    i.img0_i = function() {
        var t = new eui.Image;
        return this.img0 = t,
        t.height = 50,
        t.width = 50,
        t.x = 55,
        t.y = 152,
        t
    },
    i.img1_i = function() {
        var t = new eui.Image;
        return this.img1 = t,
        t.height = 50,
        t.width = 50,
        t.x = 165,
        t.y = 152,
        t
    },
    i.img2_i = function() {
        var t = new eui.Image;
        return this.img2 = t,
        t.height = 50,
        t.width = 50,
        t.x = 275,
        t.y = 152,
        t
    },
    i.img3_i = function() {
        var t = new eui.Image;
        return this.img3 = t,
        t.height = 50,
        t.width = 50,
        t.x = 385,
        t.y = 152,
        t
    },
    i.img4_i = function() {
        var t = new eui.Image;
        return this.img4 = t,
        t.height = 50,
        t.width = 50,
        t.x = 495,
        t.y = 152,
        t
    },
    i.txt1_i = function() {
        var t = new eui.Label;
        return this.txt1 = t,
        t.size = 20,
        t.text = "选择你要开启的技能石种类",
        t.textColor = 2500699,
        t.x = 181,
        t.y = 88,
        t
    },
    i.num0_i = function() {
        var t = new eui.Label;
        return this.num0 = t,
        t.size = 20,
        t.text = "99",
        t.textColor = 16777215,
        t.x = 90,
        t.y = 194,
        t
    },
    i.num1_i = function() {
        var t = new eui.Label;
        return this.num1 = t,
        t.size = 20,
        t.text = "99",
        t.textColor = 16777215,
        t.x = 201,
        t.y = 194,
        t
    },
    i.num2_i = function() {
        var t = new eui.Label;
        return this.num2 = t,
        t.size = 20,
        t.text = "99",
        t.textColor = 16777215,
        t.x = 311,
        t.y = 194,
        t
    },
    i.num3_i = function() {
        var t = new eui.Label;
        return this.num3 = t,
        t.size = 20,
        t.text = "99",
        t.textColor = 16777215,
        t.x = 420,
        t.y = 194,
        t
    },
    i.num4_i = function() {
        var t = new eui.Label;
        return this.num4 = t,
        t.size = 20,
        t.text = "99",
        t.textColor = 16777215,
        t.x = 530,
        t.y = 194,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/SkillstonerSkin.exml"] = window.SkillstonerSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["list_viewport", "scroller_item"],
        this.height = 470,
        this.width = 490,
        this.elementsContent = [this.scroller_item_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.scroller_item_i = function() {
        var t = new eui.Scroller;
        return this.scroller_item = t,
        t.anchorOffsetY = 0,
        t.height = 456,
        t.scrollPolicyH = "off",
        t.width = 490,
        t.x = 0,
        t.y = 0,
        t.viewport = this._Group1_i(),
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.elementsContent = [this.list_viewport_i()],
        t
    },
    i.list_viewport_i = function() {
        var t = new eui.List;
        return this.list_viewport = t,
        t.height = 200,
        t.width = 200,
        t.x = 0,
        t.y = 0,
        t.layout = this._TileLayout1_i(),
        t
    },
    i._TileLayout1_i = function() {
        var t = new eui.TileLayout;
        return t.horizontalGap = 14,
        t.orientation = "rows",
        t.paddingLeft = 14,
        t.paddingTop = 14,
        t.requestedColumnCount = 5,
        t.verticalGap = 14,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/SkillstoneskillitemSkin.exml"] = window.SkillstoneskillitemSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["texture_skillItem_bg", "skillName", "img", "pp", "pet_skill_info_texture_line", "pow", "ppTxt", "powTxt"],
        this.height = 98,
        this.width = 230,
        this.elementsContent = [this.texture_skillItem_bg_i(), this.skillName_i(), this.img_i(), this.pp_i(), this.pet_skill_info_texture_line_i(), this.pow_i(), this.ppTxt_i(), this.powTxt_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.texture_skillItem_bg_i = function() {
        var t = new eui.Image;
        return this.texture_skillItem_bg = t,
        t.height = 98,
        t.source = "skill_stone_skill_item_texture_skillItem_bg_png",
        t.width = 230,
        t.x = 0,
        t.y = 0,
        t
    },
    i.skillName_i = function() {
        var t = new eui.Label;
        return this.skillName = t,
        t.size = 20,
        t.text = "技能名几个字",
        t.textColor = 15068927,
        t.x = 56,
        t.y = 21,
        t
    },
    i.img_i = function() {
        var t = new eui.Image;
        return this.img = t,
        t.height = 26,
        t.source = "",
        t.width = 23,
        t.x = 18,
        t.y = 18,
        t
    },
    i.pp_i = function() {
        var t = new eui.Label;
        return this.pp = t,
        t.size = 20,
        t.text = "20/20",
        t.textColor = 15069183,
        t.x = 159,
        t.y = 66,
        t
    },
    i.pet_skill_info_texture_line_i = function() {
        var t = new eui.Image;
        return this.pet_skill_info_texture_line = t,
        t.height = 1,
        t.source = "pet_skill_info_texture_line_png",
        t.width = 197,
        t.x = 17,
        t.y = 49,
        t
    },
    i.pow_i = function() {
        var t = new eui.Label;
        return this.pow = t,
        t.size = 20,
        t.text = "100",
        t.textColor = 15069183,
        t.x = 67,
        t.y = 66,
        t
    },
    i.ppTxt_i = function() {
        var t = new eui.Label;
        return this.ppTxt = t,
        t.size = 20,
        t.text = "PP:",
        t.textColor = 15069183,
        t.x = 126,
        t.y = 66,
        t
    },
    i.powTxt_i = function() {
        var t = new eui.Label;
        return this.powTxt = t,
        t.size = 20,
        t.text = "威力:",
        t.textColor = 15069183,
        t.x = 15,
        t.y = 64,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/SkillstoneskillreplaceSkin.exml"] = window.SkillstoneskillreplaceSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["attackBtn", "spBtn", "grp_selectType", "bg", "btnClose", "list_viewport", "grp_changeSkill"],
        this.height = 378,
        this.width = 630,
        this.elementsContent = [this.grp_selectType_i(), this.grp_changeSkill_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.grp_selectType_i = function() {
        var t = new eui.Group;
        return this.grp_selectType = t,
        t.touchEnabled = !1,
        t.x = 40,
        t.y = 63,
        t.elementsContent = [this._Image1_i(), this._Image2_i(), this._Image3_i(), this._Image4_i(), this._Image5_i(), this.attackBtn_i(), this.spBtn_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 252,
        t.source = "skill_stone_compose_s9_texture_001_png",
        t.visible = !1,
        t.width = 550,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 201,
        t.source = "common_pop_point_png",
        t.width = 528,
        t.x = 11,
        t.y = 34,
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "skill_stone_skill_replace_texture_002_png",
        t.x = 15,
        t.y = 15,
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.source = "skill_stone_skill_replace_title_001_png",
        t.x = 48,
        t.y = 21,
        t
    },
    i._Image5_i = function() {
        var t = new eui.Image;
        return t.height = 52,
        t.source = "skill_stone_skill_replace_texture_001_png",
        t.visible = !1,
        t.width = 39,
        t.x = 16,
        t.y = 11,
        t
    },
    i.attackBtn_i = function() {
        var t = new eui.Image;
        return this.attackBtn = t,
        t.height = 70,
        t.source = "skill_stone_skill_replace_attackBtn_png",
        t.width = 200,
        t.x = 53,
        t.y = 111,
        t
    },
    i.spBtn_i = function() {
        var t = new eui.Image;
        return this.spBtn = t,
        t.height = 70,
        t.source = "skill_stone_skill_replace_spBtn_png",
        t.width = 200,
        t.x = 297,
        t.y = 111,
        t
    },
    i.grp_changeSkill_i = function() {
        var t = new eui.Group;
        return this.grp_changeSkill = t,
        t.height = 378,
        t.touchEnabled = !1,
        t.visible = !1,
        t.width = 630,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this.bg_i(), this._Image9_i(), this.btnClose_i(), this.list_viewport_i()],
        t
    },
    i.bg_i = function() {
        var t = new eui.Group;
        return this.bg = t,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image6_i(), this._Image7_i(), this._Image8_i()],
        t
    },
    i._Image6_i = function() {
        var t = new eui.Image;
        return t.height = 378,
        t.source = "common_s9_pop_bg1_png",
        t.visible = !1,
        t.width = 630,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Image7_i = function() {
        var t = new eui.Image;
        return t.fillMode = "repeat",
        t.height = 333,
        t.source = "common_pop_point_png",
        t.width = 608,
        t.x = 11,
        t.y = 31,
        t
    },
    i._Image8_i = function() {
        var t = new eui.Image;
        return t.source = "common_pop_title_samll_png",
        t.width = 600,
        t.x = 15,
        t.y = 12,
        t
    },
    i._Image9_i = function() {
        var t = new eui.Image;
        return t.source = "skill_stone_skill_replace_title_002_png",
        t.x = 48,
        t.y = 18,
        t
    },
    i.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.source = "common_close_1_png",
        t.visible = !1,
        t.x = 577,
        t.y = -10,
        t
    },
    i.list_viewport_i = function() {
        var t = new eui.List;
        return this.list_viewport = t,
        t.height = 208,
        t.width = 474,
        t.x = 78,
        t.y = 107,
        t.layout = this._TileLayout1_i(),
        t
    },
    i._TileLayout1_i = function() {
        var t = new eui.TileLayout;
        return t.horizontalGap = 10,
        t.orientation = "rows",
        t.requestedColumnCount = 2,
        t.verticalGap = 20,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/SkillStoneSkin.exml"] = window.SkillstoneSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["backBtn", "composeBtn", "openBtn", "itempanel"],
        this.height = 640,
        this.width = 536,
        this.elementsContent = [this._Image1_i(), this.backBtn_i(), this._Image2_i(), this.composeBtn_i(), this.openBtn_i(), this._Label1_i(), this.itempanel_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 640,
        t.source = "pet_use_item_panel_bg_png",
        t.width = 531,
        t.x = 5,
        t.y = 0,
        t
    },
    i.backBtn_i = function() {
        var t = new eui.Image;
        return this.backBtn = t,
        t.height = 101,
        t.source = "pet_use_item_panel_img_btn_back_png",
        t.width = 18,
        t.x = 0,
        t.y = 272,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 480,
        t.source = "common_texture_001_png",
        t.width = 500,
        t.x = 26,
        t.y = 75,
        t
    },
    i.composeBtn_i = function() {
        var t = new eui.Image;
        return this.composeBtn = t,
        t.height = 50,
        t.source = "skill_stoner_composeBtn_png",
        t.width = 174,
        t.x = 297,
        t.y = 564,
        t
    },
    i.openBtn_i = function() {
        var t = new eui.Image;
        return this.openBtn = t,
        t.height = 50,
        t.source = "skill_stoner_openBtn_png",
        t.width = 174,
        t.x = 79,
        t.y = 564,
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.size = 16,
        t.text = "点击下列技能石对精灵进行技能石的装备和替换",
        t.textColor = 4239359,
        t.x = 108,
        t.y = 46,
        t
    },
    i.itempanel_i = function() {
        var t = new skillStone.SkillStoneItemViewPanel;
        return this.itempanel = t,
        t.skinName = "SkillstonerSkin",
        t.x = 33,
        t.y = 80,
        t
    },
    e
} (eui.Skin);