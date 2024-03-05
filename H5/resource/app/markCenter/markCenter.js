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
markCenter; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t.arrayColletion = new eui.ArrayCollection([]),
            t.gemList = [],
            t.currType = 0,
            t.skinName = "MarkcenterGemPanelSkin",
            t
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            this.initData(),
            this.showList(),
            this.addEvent(),
            this.update()
        },
        i.prototype.initData = function() {
            this.imgSearch.visible = !0,
            this.imgBack.visible = !1,
            this.rbGroup = this.rb_1.group,
            this.rbGroup.selectedValue = this.curTab = 1,
            this._scroller.viewport = this._list,
            this._list.itemRenderer = t.MarkItemRenderer,
            this._list.dataProvider = this.arrayColletion,
            this.adaptLeftContent(this.pageGemContent),
            this.adaptRightContent(this.righttop),
            this.adaptRightContent(this._right),
            this._right.visible = !1,
            this.coinIcon.source = ClientConfig.getItemIcon(1723854)
        },
        i.prototype.addEvent = function() {
            var e = this;
            this.rbGroup.addEventListener(egret.Event.CHANGE, this.onChangeTab, this),
            this._list.addEventListener(egret.Event.CHANGE, this.onSelectGem, this),
            this.txtSearch.addEventListener(egret.Event.CHANGE, this.onSearchChanged, this),
            EventManager.addEventListener("gemChange", this.update, this),
            EventManager.addEventListener("gemSelect", this.gemSelect, this),
            ImageButtonUtil.add(this.btnSelect,
            function() {
                var i = new t.GemSelectPop(e.curTab);
                PopViewManager.getInstance().openView(i)
            },
            this),
            ImageButtonUtil.add(this.coinIcon,
            function() {
                tipsPop.TipsPop.openItemPop({
                    id: 1723854
                })
            },
            this),
            ImageButtonUtil.add(this.btnUp,
            function() {
                if (e.gem) {
                    var i = GemsXMLInfo.getLv(e.gem.itemID);
                    if (i == 10 / e.curTab) {
                        var n = 1 == e.curTab ? "一": "二",
                        r = 1 == e.curTab ? "LV" + i: "V";
                        Alarm.show(r + "级的" + n + "代刻印宝石无法进行升级！")
                    } else {
                        var a = new t.GemUpPop(e.gem, 1);
                        PopViewManager.getInstance().openView(a)
                    }
                } else Alarm.show("您尚未选择任何宝石")
            },
            this),
            ImageButtonUtil.add(this.btnFen,
            function() {
                var i = GemsXMLInfo.getLv(e.gem.itemID);
                if (1 == e.curTab && 6 > i) Alarm.show("很抱歉，LV≥6级的一代刻印宝石才能进行粉碎！");
                else {
                    var n = new t.GemUpPop(e.gem, 2);
                    PopViewManager.getInstance().openView(n)
                }
            },
            this),
            ImageButtonUtil.add(this.btnRong,
            function() {
                var i = new t.GemUpPop(e.gem, 3);
                PopViewManager.getInstance().openView(i)
            },
            this),
            ImageButtonUtil.add(this.btnChong,
            function() {
                var i = new t.GemUpPop(e.gem, 4);
                PopViewManager.getInstance().openView(i)
            },
            this),
            this.getGem(),
            ImageButtonUtil.add(this.imgBack,
            function() {
                e.txtSearch.text = "",
                e.imgBack.visible = !1,
                e.imgSearch.visible = !0,
                e.showList()
            },
            this)
        },
        i.prototype.getGem = function() {
            ItemManager.addEventListener(ItemEvent.GEM_LIST, this.showList, this),
            EventManager.addEventListener("btnEvent", this.showList, this),
            ItemManager.getGem()
        },
        i.prototype.gemSelect = function(t) {
            t.data && (this.curSelect = t.data),
            this.showList()
        },
        i.prototype.onChangeTab = function() {
            this.curTab = ~~this.rbGroup.selectedValue,
            this._right.visible = !1,
            this.txtSearch.text = "",
            this.curSelect = null,
            this.showList()
        },
        i.prototype.showList = function() {
            if (this._scroller.viewport.scrollV = 0, this._scroller.stopAnimation(), this.arrayColletion.removeAll(), this.isEmpty = !0, this.curTab <= 2) {
                this.btnSelect.visible = !0,
                this.btnUp.visible = !0,
                this.btnUp.x = 2 == this.curTab ? 171.5 : 98.5,
                this.btnFen.visible = 1 == this.curTab,
                this.btnRong.visible = !1,
                this.btnChong.visible = !1,
                this.gemList = ItemManager.getGemInfos().concat().reverse();
                var t = void 0;
                this.curSelect && (t = this.curSelect.replace("宝石", "")),
                this.selectName.text = "所有宝石" == this.curSelect || null == this.curSelect ? "筛选": t;
                for (var e in this.gemList) {
                    var i = GemsXMLInfo.getCategory(this.gemList[e].itemID);
                    this.gemList[e].category = 2;
                    var n = 100 > i && i > 0 ? 1 : 2;
                    if ((i == this.currType || 0 == this.currType) && n == this.curTab) if (this.curSelect && "所有宝石" != this.curSelect) {
                        var r = GemsXMLInfo.getName(this.gemList[e].itemID);
                        r.search(t) >= 0 && (this.arrayColletion.addItem(this.gemList[e]), this.isEmpty = !1)
                    } else this.arrayColletion.addItem(this.gemList[e]),
                    this.isEmpty = !1
                }
                this.gemInfo.visible = !this.isEmpty,
                this.empty_tip.visible = this.isEmpty
            } else {
                this.btnSelect.visible = !1;
                var a = [],
                s = ItemXMLInfo.getItemInfo(1723855),
                o = ItemXMLInfo.getItemInfo(1723856);
                this.empty_tip.visible = !1,
                a.push(s),
                a.push(o);
                for (var e in a) a[e].category = 3,
                a[e].rarity = ItemXMLInfo.getItemRarity(a[e].id),
                a[e].itemID = a[e].id,
                this.arrayColletion.addItem(a[e])
            }
            this.none.visible = void 0 == this._list.selectedItem && !this.isEmpty,
            this.onSelectGem(null),
            ArrayUtil.sortOnMultParams(this.arrayColletion.source, [["rarity", ArrayUtil.DESCENDING], ["itemID", ArrayUtil.DESCENDING]]),
            this.arrayColletion.refresh()
        },
        i.prototype.onSelectGem = function(t) {
            this.gem = this._list.selectedItem,
            !this._right.visible && this.gem && (this._right.visible = !0),
            this.showCurrGem()
        },
        i.prototype.showCurrGem = function() {
            if (this.search.visible = this.curTab < 3, this.gem) if (this.gemInfo.visible = !0, this.detail.visible = !0, this.none.visible = !1, this.curTab < 3) {
                this.txtLvl.visible = !1,
                this.imgGem.source = ClientConfig.getGemPath(GemsXMLInfo.getCategory(this.gem.itemID)),
                this.txtCount.text = "拥有：" + this.gem.itemNum,
                this.t.text = GemsXMLInfo.getEffect(this.gem.itemID);
                var t = GemsXMLInfo.getCategory(this.gem.itemID),
                e = 100 > t && t > 0 ? 1 : 2,
                i = 1 == e ? GemsXMLInfo.getName(this.gem.itemID) + " Lv." + GemsXMLInfo.getLv(this.gem.itemID) : GemsXMLInfo.getName(this.gem.itemID);
                this.txtName.text = i,
                i.length > 15 && (this.txtName.text = i.substr(0, 15) + "..."),
                this.iconBg.source = ItemXMLInfo.getRarityBg(this.gem.itemID, "markcenter_mark_panel_iconbg_png")
            } else {
                this.btnUp.visible = !1,
                this.btnFen.visible = !1,
                this.txtLvl.visible = !1,
                this.btnRong.visible = 1723855 == this.gem.itemObj.ID,
                this.btnChong.visible = 1723856 == this.gem.itemObj.ID,
                this.imgGem.source = ItemXMLInfo.getIconURL(this.gem.itemObj.ID);
                var n = ItemTipXMLInfo.getItemDes(this.gem.itemObj.ID),
                r = this.gem.itemObj.Name;
                this.txtName.text = r,
                this.txtCount.text = "拥有：" + ItemManager.getNumByID(this.gem.itemObj.ID),
                this.t.text = n,
                this.iconBg.source = ItemXMLInfo.getRarityBg(this.gem.itemID, "markcenter_mark_panel_iconbg_png")
            } else this._right.visible = !0,
            this.curTab <= 2 ? (this.rightbg.visible = !this.isEmpty, this.none.visible = !this.isEmpty) : (this.rightbg.visible = !0, this.none.visible = !0),
            this.detail.visible = !1
        },
        i.prototype.onSearchChanged = function(t) {
            var e = this.txtSearch.text.trim();
            this.arrayColletion.removeAll(),
            this._scroller.viewport.scrollV = 0;
            var i = 0;
            if (this.imgBack.visible = e.length > 0, this.imgSearch.visible = !this.imgBack.visible, e.length > 0) {
                var n = !1;
                for (var r in this.gemList) if (SearchUtil.isMatch(e, GemsXMLInfo.getName(this.gemList[r].itemID))) {
                    var a = GemsXMLInfo.getCategory(this.gemList[r].itemID),
                    s = 100 > a && a > 0 ? 1 : 2;
                    a != this.currType && 0 != this.currType || s != this.curTab || (this.arrayColletion.addItem(this.gemList[r]), i++, n = !0)
                }
                if (!n && 0 == e.toLowerCase().indexOf("lv") && e.length > 2) {
                    var o = +e.substr(2);
                    for (var r in this.gemList) if (this.gemList[r].level == o) {
                        var a = GemsXMLInfo.getCategory(this.gemList[r].itemID),
                        s = 100 > a && a > 0 ? 1 : 2;
                        a != this.currType && 0 != this.currType || s != this.curTab || (this.arrayColletion.addItem(this.gemList[r]), i++)
                    }
                }
            } else {
                for (var r in this.gemList) {
                    var a = GemsXMLInfo.getCategory(this.gemList[r].itemID),
                    s = 100 > a && a > 0 ? 1 : 2;
                    a != this.currType && 0 != this.currType || s != this.curTab || this.arrayColletion.addItem(this.gemList[r])
                }
                i = this.gemList.length
            }
            this.empty_tip.visible = 0 == i,
            this.gemInfo.visible = 0 != i,
            this.none.visible = void 0 == this._list.selectedItem,
            this.detail.visible = !this.none.visible
        },
        i.prototype.update = function() {
            this.txtCoin2.text = ItemManager.getNumByID(1723854) + ""
        },
        i.prototype.destroy = function() {
            e.prototype.destroy.call(this),
            this.rbGroup.removeEventListener(egret.Event.CHANGE, this.onChangeTab, this),
            this._list.removeEventListener(egret.Event.CHANGE, this.onSelectGem, this),
            this.txtSearch.removeEventListener(egret.Event.CHANGE, this.onSearchChanged, this),
            EventManager.removeEventListener("gemChange", this.update, this),
            EventManager.removeEventListener("btnEvent", this.showList, this),
            EventManager.removeEventListener("gemSelect", this.gemSelect, this),
            ItemManager.removeEventListener(ItemEvent.GEM_LIST, this.showList, this)
        },
        i
    } (BasicPanel);
    t.GemPanel = e,
    __reflect(e.prototype, "markCenter.GemPanel")
} (markCenter || (markCenter = {}));
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
markCenter; !
function(t) {
    var e = function(e) {
        function i(t, i, n) {
            var r = e.call(this) || this;
            return r.GEM_GRADE_UP_ARR = [2, 4, 4, 5, 7, 8, 10, 16, 20],
            r.inlayRates = [100, 100, 100, 100, 100, 100, 100, 70, 40, 30],
            r.mixCost = [2, 4, 4, 5, 7, 8, 10, 16, 20],
            r.markInfo = t.mark,
            r.gem = t.gem,
            r.callback = i,
            r.caller = n,
            r.skinName = GemDetailSkin,
            r.isOnlyItem = t.isOnlyItem,
            r
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            var i = this;
            e.prototype.childrenCreated.call(this);
            var n = GemsXMLInfo.getLv(this.gem.itemID);
            GemsXMLInfo.getCategory(this.gem.itemID) <= 100 ? this.txtName.text = GemsXMLInfo.getName(this.gem.itemID) + " Lv" + n: this.txtName.text = GemsXMLInfo.getName(this.gem.itemID),
            this.txtNum.text = this.gem.itemNum + "",
            ImageButtonUtil.add(this.imgInlay,
            function() {
                if (CountermarkXMLInfo.isUniversalMark(i.markInfo.markID)) {
                    if (i.markInfo.isBindMon && i.markInfo.isInstall) return void Alarm.show("刻印使用中，需要取下刻印才能继续操作！");
                    if (null == i.gem) return void Alarm.show("请先选择你要镶嵌的宝石!");
                    i.markInfo.isBindGem ? GemsXMLInfo.getCategory(i.markInfo.gemID) !== GemsXMLInfo.getCategory(i.gem.itemID) ? Alarm.show("只能镶嵌比当前级别更高的同类型宝石") : GemsXMLInfo.getLv(i.markInfo.gemID) < GemsXMLInfo.getLv(i.gem.itemID) ? i.inlay() : Alarm.show("只能镶嵌比当前级别更高的同类型宝石") : i.inlay()
                } else Alarm.show("非全能刻印无法进行强化和镶嵌！")
            },
            this),
            ImageButtonUtil.add(this.imgMix,
            function() {
                PopViewManager.getInstance().hideAll();
                var e = i.gem,
                n = GemsXMLInfo.getLv(e.itemID);
                if (n >= 10) return void Alarm.show("10级宝石无法再合成！");
                var r = i.GEM_GRADE_UP_ARR[GemsXMLInfo.getLv(e.itemID) - 1],
                a = Math.floor(e.itemNum / r);
                if (1 > a) return void Alarm.show("没有足够的宝石无法合成");
                var s = new t.GemSynthesisDetail(e,
                function(t) {
                    console.log("=============GemSynthesisDetail===============" + t)
                });
                PopViewManager.getInstance().openView(s)
            },
            this);
            var r = GemsXMLInfo.getEffect(this.gem.itemID) + "\n\n";
            if (r += "镶嵌成功率:<font color='0x96f901'>" + this.inlayRates[n - 1] + "</font>%", this.txtDes.textFlow = (new egret.HtmlTextParser).parse(r), this.validateNow(), this.txtDes.height > 90) {
                var a = this.txtDes.height - 90;
                this.height = this.height + a,
                this.imgInlay.y = this.imgInlay.y + a,
                this.imgMix.y = this.imgMix.y + a
            }
            this.isOnlyItem && (ImageButtonUtil.removeAll(this), this.imgInlay.visible = this.imgMix.visible = !1)
        },
        i.prototype.inlay = function() {
            var t = this;
            this.touchChildren = !1,
            AwardManager.pause(),
            SocketConnection.sendByQueue(CommandID.COUNTERMARK_INLAY_GEM, [this.markInfo.obtainTime, this.gem.itemID, 0, 0],
            function(e) {
                t.touchChildren = !0;
                var i = e.data;
                i.position = 0;
                var n = i.readUnsignedInt();
                i.readUnsignedInt(),
                i.readUnsignedInt();
                0 == n ? Alarm.show("镶嵌失败了哦！再接再厉哦！",
                function() {
                    AwardManager.resume()
                }) : (BubblerManager.getInstance().showText("镶嵌成功"), t.markInfo.gemID = t.gem.itemID, EventManager.dispatchEvent(new CountermarkEvent(CountermarkEvent.UPGRADE_END, t.markInfo)), AwardManager.resume(), t.callback && t.caller && t.callback(t.caller, t.gem.itemID)),
                egret.setTimeout(function() {
                    ItemManager.getGem()
                },
                t, 300),
                PopViewManager.getInstance().hideAll()
            },
            function(e) {
                t.touchChildren = !0
            })
        },
        i.prototype.removeEvents = function() {
            ImageButtonUtil.removeAll(this)
        },
        i.prototype.destroy = function() {
            this.callback = null
        },
        i
    } (PopView);
    t.GemDetailPopview = e,
    __reflect(e.prototype, "markCenter.GemDetailPopview")
} (markCenter || (markCenter = {}));
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
markCenter; !
function(t) {
    var e = function(t) {
        function e(e, i) {
            var n = t.call(this) || this;
            return n.GEM_GRADE_UP_ARR = [2, 4, 4, 5, 7, 8, 10, 16, 20],
            n.gem = e,
            n.callback = i,
            n.skinName = GemSynthesisDetailSkin,
            n
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this)
        },
        e.prototype._upDateView = function() {
            this.updateGemInfo()
        },
        e.prototype.onUpdateGemList = function() {
            for (var t = ItemManager.getGemInfos().concat(), e = 0; e < t.length; e++) if (t[e].itemID === this.gem.itemID) {
                this.gem = t[e];
                break
            }
            this.updateGemInfo()
        },
        e.prototype.updateGemInfo = function() {
            var t = new SingleItemInfo;
            t.itemID = GemsXMLInfo.getUpgradeGemId(this.gem.itemID);
            var e = GemsXMLInfo.getName(this.gem.itemID),
            i = GemsXMLInfo.getName(t.itemID);
            this.iconGem1.source = ClientConfig.getGemPath(GemsXMLInfo.getCategory(this.gem.itemID)),
            this.iconGem2.source = ClientConfig.getGemPath(GemsXMLInfo.getCategory(t.itemID)),
            this.txtCount.text = this.gem.itemNum + "";
            var n = this.GEM_GRADE_UP_ARR[GemsXMLInfo.getLv(this.gem.itemID) - 1];
            this.txtDes.text = "" + n;
            var r = Math.floor(this.gem.itemNum / n);
            this.txtAllDesc.text = r > 1 ? "可以获得" + r + "个" + i + "Lv." + GemsXMLInfo.getLv(t.itemID) : "",
            DisplayUtil.setEnabled(this.mixAll, r > 1, 1 >= r),
            this.gemLv0.text = "Lv." + GemsXMLInfo.getLv(this.gem.itemID),
            this.gemLv1.text = "Lv." + GemsXMLInfo.getLv(t.itemID),
            e.length > 6 && (e = e.substr(0, 5) + "..."),
            i.length > 6 && (i = i.substr(0, 5) + "..."),
            this.gemName1.text = e,
            this.gemName2.text = i
        },
        e.prototype.initEvents = function() {
            var e = this;
            t.prototype.initEvents.call(this),
            ItemManager.addEventListener(ItemEvent.GEM_LIST, this.onUpdateGemList, this),
            ImageButtonUtil.add(this.mixOne,
            function() {
                var t = e.GEM_GRADE_UP_ARR[GemsXMLInfo.getLv(e.gem.itemID) - 1];
                e.gem.itemNum >= t ? e.mixGem(t, "once") : Alarm.show("没有足够的宝石无法合成")
            },
            this),
            ImageButtonUtil.add(this.btnClose,
            function() {
                PopViewManager.getInstance().hideView(e)
            },
            this),
            ImageButtonUtil.add(this.mixAll,
            function() {
                var t = new SingleItemInfo;
                t.itemID = GemsXMLInfo.getUpgradeGemId(e.gem.itemID);
                var i = GemsXMLInfo.getName(e.gem.itemID),
                n = GemsXMLInfo.getName(t.itemID),
                r = e.GEM_GRADE_UP_ARR[GemsXMLInfo.getLv(e.gem.itemID) - 1],
                a = Math.floor(e.gem.itemNum / r);
                if (a > 0) {
                    var s = "你总共拥有" + e.gem.itemNum + "个" + i + ",可以一次性消耗" + a * r + "个" + i + "全部合成获得" + a + "个" + n;
                    s += "是否要全部兑换？",
                    e.mixGem(a * r, "mix")
                } else {
                    var s = "没有足够的宝石无法合成";
                    Alarm.show(s)
                }
            },
            this)
        },
        e.prototype.mixGem = function(t, e) {
            SocketConnection.sendByQueue(CommandID.UPGRADE_GEM, [1, this.gem.itemID, t, 0, 0],
            function(t) {
                var i = t.data;
                i.position = 0;
                var n = i.readUnsignedInt();
                0 == n ? "once" !== e && PopViewManager.getInstance().hideAll() : Alarm.show("合成失败了哦！再接再厉哦！"),
                ItemManager.getGem()
            },
            function(t) {})
        },
        e.prototype.removeEvents = function() {
            ImageButtonUtil.removeAll(this),
            ItemManager.removeEventListener(ItemEvent.GEM_LIST, this.onUpdateGemList, this)
        },
        e.prototype.destroy = function() {
            this.callback && this.callback(),
            this.callback = null
        },
        e
    } (PopView);
    t.GemSynthesisDetail = e,
    __reflect(e.prototype, "markCenter.GemSynthesisDetail")
} (markCenter || (markCenter = {}));
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
markCenter; !
function(t) {
    var e = function(t) {
        function e(e) {
            var i = t.call(this) || this;
            return i.markInfo = e,
            i.skinName = "MarkuppopSkin",
            i
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            var e = this;
            t.prototype.childrenCreated.call(this),
            this.btnUpOne.name = "btnUpOne",
            ImageButtonUtil.add(this.btnUpOne,
            function() {
                e.lvlUpOne()
            },
            this),
            ImageButtonUtil.add(this.btnUpAll,
            function() {
                e.lvlUpAll()
            },
            this),
            ImageButtonUtil.add(this.btnMax,
            function() {
                e.lvlUpMax()
            },
            this),
            ImageButtonUtil.add(this.btnClose, this.touckMask, this),
            this.updateInfo()
        },
        e.prototype.setMarkInfo = function(t) {
            this.markInfo = t,
            this.updateInfo()
        },
        e.prototype.show = function() {
            this.bgMask || (this.bgMask = new eui.Rect(LevelManager.stage.stageWidth, LevelManager.stage.stageHeight, 0)),
            LevelManager.appLevel.addChild(this.bgMask),
            LevelManager.appLevel.addChild(this),
            this.scaleX = this.scaleY = .1,
            this.anchorOffsetX = .5 * this.width,
            this.anchorOffsetY = .5 * this.height,
            this.x = .5 * LevelManager.stage.stageWidth,
            this.y = .5 * LevelManager.stage.stageHeight,
            this.bgMask.alpha = .4,
            egret.Tween.get(this).to({
                scaleX: 1,
                scaleY: 1
            },
            100),
            this.bgMask.touchEnabled = !0,
            this.bgMask.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touckMask, this),
            this.btnUpOne.touchEnabled = !this._checkIsMax(this.markInfo)
        },
        e.prototype.touckMask = function() {
            this.parent && (this.parent.removeChild(this.bgMask), this.parent.removeChild(this))
        },
        e.prototype.updateInfo = function() {
            var t = this;
            this.itemNum = ItemManager.getNumByID(1400352),
            this.imgMark.source = ClientConfig.getMarkPath(this.markInfo.markID),
            this.txt_MarkName.text = this.markInfo.markName,
            this.txtLevel.text = this.markInfo.level + "",
            SocketConnection.sendByQueue(42314, [1, this.markInfo.obtainTime],
            function(e) {
                var i = e.data;
                t.oneNeedNum = i.readUnsignedInt(),
                t.txt2.text = "泰坦之灵x" + t.oneNeedNum
            }),
            SocketConnection.sendByQueue(41446, [this.markInfo.obtainTime],
            function(e) {
                var i = e.data;
                t.maxNeedNum = i.readUnsignedInt(),
                t.txt3.text = "泰坦之灵x" + t.maxNeedNum
            })
        },
        e.prototype._checkIsMax = function(t) {
            for (var e = !0,
            i = CountermarkXMLInfo.getMaxAttriValue(t.markID), n = 0; 6 > n; n++) if (t.adjArray[n] > 0 && t.adjArray[n] < i[n]) {
                e = !1;
                break
            }
            return e
        },
        e.prototype.lvlUpOne = function() {
            var t = this;
            if (this.itemNum < this.oneNeedNum) BubblerManager.getInstance().showText("很抱歉，你的泰坦之灵数量不足！");
            else {
                var e = this._checkIsMax(this.markInfo);
                if (e) return void Alarm.show("当前刻印已经是最高等级了！");
                this.btnUpOne.touchEnabled = !1,
                SocketConnection.sendByQueue(CommandID.STRENGTHEN_COUNTERMARK, [this.markInfo.obtainTime],
                function(e) {
                    e.data.position = 0;
                    var i = [];
                    i.push(e.data.readUnsignedInt()),
                    i.push(e.data.readUnsignedInt()),
                    i.push(e.data.readUnsignedInt()),
                    i.push(e.data.readUnsignedInt()),
                    i.push(e.data.readUnsignedInt()),
                    i.push(e.data.readUnsignedInt()),
                    t.markInfo.adjArray = i,
                    t.markInfo.level++,
                    EventManager.dispatchEvent(new CountermarkEvent(CountermarkEvent.UPGRADE_END, t.markInfo)),
                    SocketConnection.sendByQueue(CommandID.SAVE_COUNTERMARK_PROPERTY, [t.markInfo.obtainTime],
                    function() {
                        EventManager.dispatchEvent(new CountermarkEvent(CountermarkEvent.UPGRADE_SAVE, t.markInfo)),
                        t._checkIsMax(t.markInfo) ? (BubblerManager.getInstance().showText("当前刻印已经是最高等级了！"), t.parent.removeChild(t.bgMask), t.parent.removeChild(t)) : (BubblerManager.getInstance().showText("升级成功"), t.updateInfo(), t.btnUpOne.touchEnabled = !0)
                    },
                    function() {
                        t.btnUpOne.touchEnabled = !0
                    })
                },
                function(e) {
                    t.btnUpOne.touchEnabled = !0
                })
            }
        },
        e.prototype.lvlUpAll = function() {
            var t = this;
            PayManager.doPayFunc(function() {
                if (!VipController.isCurYearVip) return void BubblerManager.getInstance().showText("你不是至尊VIP，无法使用该功能！");
                var e = CountermarkXMLInfo.getHornNum(t.markInfo.markID),
                i = [252430, 252429, 252428, 252427],
                n = i[e - 2];
                KTool.buyProductByCallback(n, 1,
                function() {
                    SocketConnection.sendByQueue(43622, [e - 1, t.markInfo.obtainTime],
                    function() {
                        BubblerManager.getInstance().showText("当前刻印已经升到最高等级了！"),
                        t.markInfo.adjArray = CountermarkXMLInfo.getMaxAttriValue(t.markInfo.markID),
                        t.markInfo.level = 5,
                        EventManager.dispatchEvent(new CountermarkEvent(CountermarkEvent.UPGRADE_END, t.markInfo)),
                        EventManager.dispatchEvent(new CountermarkEvent(CountermarkEvent.UPGRADE_SAVE, t.markInfo)),
                        t.parent.removeChild(t.bgMask),
                        t.parent.removeChild(t)
                    })
                })
            },
            this)
        },
        e.prototype.lvlUpMax = function() {
            var t = this;
            if (this.itemNum < this.maxNeedNum) BubblerManager.getInstance().showText("很抱歉，你的泰坦之灵数量不足！");
            else {
                var e = this._checkIsMax(this.markInfo);
                if (e) return void Alarm.show("当前刻印已经是最高等级了！");
                this.btnMax.touchEnabled = !1,
                SocketConnection.sendByQueue(41447, [this.markInfo.obtainTime],
                function(e) {
                    e.data.position = 0;
                    var i = [];
                    i.push(e.data.readUnsignedInt()),
                    i.push(e.data.readUnsignedInt()),
                    i.push(e.data.readUnsignedInt()),
                    i.push(e.data.readUnsignedInt()),
                    i.push(e.data.readUnsignedInt()),
                    i.push(e.data.readUnsignedInt()),
                    t.markInfo.adjArray = i,
                    t.markInfo.level = 5,
                    t.btnMax.touchEnabled = !0,
                    EventManager.dispatchEvent(new CountermarkEvent(CountermarkEvent.UPGRADE_END, t.markInfo)),
                    EventManager.dispatchEvent(new CountermarkEvent(CountermarkEvent.UPGRADE_SAVE, t.markInfo)),
                    BubblerManager.getInstance().showText("当前刻印已经升到最高等级了！"),
                    t.parent.removeChild(t.bgMask),
                    t.parent.removeChild(t)
                },
                function() {
                    t.btnMax.touchEnabled = !0
                })
            }
        },
        e.prototype.destroy = function() {
            this.bgMask && this.bgMask.parent && this.bgMask.parent.removeChild(this.bgMask),
            this.bgMask.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.touckMask, this),
            this.parent && this.parent.removeChild(this),
            ImageButtonUtil.removeAll(this)
        },
        e
    } (eui.Component);
    t.MarkLvlUp = e,
    __reflect(e.prototype, "markCenter.MarkLvlUp")
} (markCenter || (markCenter = {}));
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
markCenter; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.init([{
                panelName: t.ModuleConst.MAIN_PANEL,
                isMain: !0
            },
            {
                panelName: t.ModuleConst.MARK_CENTER
            },
            {
                panelName: t.ModuleConst.GEM_CENTER
            }]),
            i
        }
        return __extends(i, e),
        i
    } (BasicMultPanelModule);
    t.MarkCenter = e,
    __reflect(e.prototype, "markCenter.MarkCenter")
} (markCenter || (markCenter = {}));
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
markCenter; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.thumbOffSetLeft = 6,
            e.thumbOffSetRight = 6,
            e
        }
        return __extends(e, t),
        e.prototype.getThumbRange1 = function() {
            var t = egret.$TempRectangle;
            this.track.getLayoutBounds(t);
            var e = t.width;
            return this.thumb.getLayoutBounds(t),
            e - t.width + this.thumbOffSetLeft + this.thumbOffSetRight
        },
        e.prototype.updateSkinDisplayList = function() {
            if (this.thumb && this.track) {
                var t = this.$Range,
                e = this.getThumbRange1(),
                i = t[0] - t[2],
                n = i > 0 ? (this.pendingValue - t[2]) / i * e: 0,
                r = this.track.localToGlobal(n, 0, egret.$TempPoint),
                a = r.x,
                s = r.y,
                o = this.thumb.$parent.globalToLocal(a, s, egret.$TempPoint).x,
                u = egret.$TempRectangle;
                if (this.thumb.getLayoutBounds(u), this.thumb.setLayoutBoundsPosition(Math.round(o) - this.thumbOffSetLeft, u.y), this.trackHighlight && this.trackHighlight.$parent) {
                    var h = this.trackHighlight.$parent.globalToLocal(a, s, egret.$TempPoint).x - n;
                    this.trackHighlight.x = Math.round(h),
                    this.trackHighlight.width = Math.round(n)
                }
            }
        },
        e
    } (eui.HSlider);
    t.TMHSlider = e,
    __reflect(e.prototype, "markCenter.TMHSlider")
} (markCenter || (markCenter = {}));
var __reflect = this && this.__reflect ||
function(t, e, i) {
    t.__class__ = e,
    i ? i.push(e) : i = [e],
    t.__types__ = t.__types__ ? i.concat(t.__types__) : i
},
markCenter; !
function(t) {
    var e = function() {
        function t() {}
        return t.MAIN_PANEL = "markCenter.MarkMainPanel",
        t.MARK_CENTER = "markCenter.MarkPanel",
        t.GEM_CENTER = "markCenter.GemPanel",
        t
    } ();
    t.ModuleConst = e,
    __reflect(e.prototype, "markCenter.ModuleConst")
} (markCenter || (markCenter = {}));
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
markCenter; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.skinName = GemItem2Skin,
            e
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this)
        },
        e.prototype.dataChanged = function() {
            t.prototype.dataChanged.call(this);
            var e = this.data;
            if (this.data) {
                var i = GemsXMLInfo.getName(e.itemID),
                n = GemsXMLInfo.getCategory(e.itemID),
                r = 100 > n && n > 0 ? 1 : 2;
                i = 1 == r ? i + "Lv." + GemsXMLInfo.getLv(e.itemID) : i,
                i.length > 6 && (i = i.substr(0, 5) + "..."),
                this.txtName.text = i;
                var a = ["Ⅰ", "Ⅱ", "Ⅲ", "Ⅳ", "Ⅴ"];
                if (this.txtGemLv.text = 1 == r ? " Lv." + GemsXMLInfo.getLv(e.itemID) : a[GemsXMLInfo.getLv(e.itemID) - 1], this.txtCount.text = e.itemNum + "", e.itemNum >= 1e4) {
                    var s = e.itemNum / 1e4,
                    o = e.itemNum % 1e4;
                    o > 0 ? this.txtCount.text = "" + s.toFixed(1) + "万": this.txtCount.text = "" + Math.floor(s) + "万"
                }
                this.imgGem.source = ClientConfig.getGemPath(GemsXMLInfo.getCategory(e.itemID)),
                this.imgBg.source = ItemXMLInfo.getRarityBg(e.itemID, "rarity_rect_0_png", "rarity_rect_")
            } else this.txtName.text = "",
            this.txtCount.text = "",
            this.txtGemLv.text = "",
            this.imgGem.source = null
        },
        e.prototype.destroy = function() {},
        e
    } (eui.ItemRenderer);
    t.GemRenderer = e,
    __reflect(e.prototype, "markCenter.GemRenderer")
} (markCenter || (markCenter = {}));
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
markCenter; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t.panelNames = ["MarkMainPanel", "MarkPanel", "GemPanel"],
            t.panels = {},
            t.groupName = "mark_center_tab",
            t.skinName = MarkcenterMainPanelSkin,
            t
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            var i = this;
            e.prototype.initBtnClose.call(this, "markcenter_main_panel_title_png", this,
            function() {
                i.service.closeModule()
            },
            this),
            this.initBtnHelp(function() {
                var e = new t.MarkHelpPop;
                PopViewManager.getInstance().openView(e)
            },
            this),
            this.initData(),
            this.addEvent(),
            this.openPanel(1)
        },
        i.prototype.initData = function() {
            var t = new MenuData;
            t.groupName = this.groupName,
            t["default"] = 1,
            t.root = [1, 2],
            t.data = {
                1 : {
                    title: "刻印"
                },
                2 : {
                    title: "宝石"
                }
            },
            this.menu = Menu.createMenu(t, this.menuGroup)
        },
        i.prototype.addEvent = function() {
            EventManager.addEventListener(BaseMenuEvent.BASE_MENU_SELECT_CHANGE_ + this.groupName, this.onChangeTab, this)
        },
        i.prototype.onChangeTab = function() {
            this.curTab = ~~this.menu.selectedValue,
            this.openPanel(this.curTab)
        },
        i.prototype.openPanel = function(e) {
            this.getChildByName("btnHelp").visible = 2 == e;
            var i = this.panelNames[e];
            this.panels[i] ? (this.curPanel = this.panels[i], this.curPanel.showList(), this.grp_Container.removeChildren(), this.grp_Container.addChild(this.curPanel)) : t[i] && (this.curPanel = new t[i], this.curPanel.name = i, this.grp_Container.removeChildren(), this.grp_Container.addChild(this.curPanel), this.panels[i] = this.curPanel)
        },
        i.prototype.destroy = function() {
            e.prototype.destroy.call(this);
            for (var t in this.panels) {
                var i = this.panels[t];
                DisplayUtil.removeForParent(i),
                i.destroy()
            }
            this.panels = null,
            EventManager.removeAll(this),
            this.menu && this.menu.destroy()
        },
        i
    } (BasicPanel);
    t.MarkMainPanel = e,
    __reflect(e.prototype, "markCenter.MarkMainPanel")
} (markCenter || (markCenter = {}));
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
markCenter; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t.arrayColletion = new eui.ArrayCollection([]),
            t.markList = [],
            t.BASE_COST = [500, 1e3, 2e3, 4e3, 8e3],
            t.curSelectType = ["全部", "默认"],
            t.skinName = MarkcenterMarkPanelSkin,
            t
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            this.initData(),
            this.addEvent(),
            this.showList()
        },
        i.prototype.initData = function() {
            this.imgSearch.visible = !0,
            this.imgBack.visible = !1,
            this.rbGroup = this.rb_1.group,
            this.rbGroup.selectedValue = this.curTab = 1,
            this._scroller.viewport = this._list,
            this._list.itemRenderer = t.MarkItemRenderer,
            this._list.dataProvider = this.arrayColletion,
            this.adaptLeftContent(this.pageMarkContet),
            this.adaptRightContent(this.group_right),
            this.adaptRightContent(this.righttop),
            this.coinIcon.source = ClientConfig.getItemIcon(1400352)
        },
        i.prototype.onMarkUpdate = function(t) {
            for (var e = t.info,
            i = 0; i < this.arrayColletion.length; i++) {
                var n = this.arrayColletion.getItemAt(i);
                if (n && n.markID == e.markID && n.obtainTime == e.obtainTime) {
                    this.arrayColletion.removeItemAt(i),
                    this.arrayColletion.addItemAt(e, i),
                    this._list.selectedItem = e,
                    this.currMarkInfo = e,
                    this.showCurrMark();
                    break
                }
            }
        },
        i.prototype.markSelct = function(t) {
            this.curSelectType = t.data,
            this.showList()
        },
        i.prototype.addEvent = function() {
            var e = this;
            this.rbGroup.addEventListener(egret.Event.CHANGE, this.onChangeTab, this),
            this._list.addEventListener(egret.Event.CHANGE, this.onSelectMark, this),
            this.txtSearch.addEventListener(egret.Event.CHANGE, this.onSearchChanged, this),
            EventManager.addEventListener(CountermarkEvent.UPGRADE_END, this.onMarkUpdate, this),
            EventManager.addEventListener(CountermarkEvent.INLAY_END, this.onMarkUpdate, this),
            EventManager.addEventListener("markSelect", this.markSelct, this),
            ImageButtonUtil.add(this.coinIcon,
            function() {
                tipsPop.TipsPop.openItemPop({
                    id: 1400352
                })
            },
            this),
            ImageButtonUtil.add(this.imgBack,
            function() {
                e.txtSearch.text = "",
                e.imgBack.visible = !1,
                e.imgSearch.visible = !0,
                e.showList()
            },
            this),
            ImageButtonUtil.add(this.imgSearch,
            function() {
                e.onSearchChanged(null)
            },
            this),
            ImageButtonUtil.add(this.btnSelect,
            function() {
                var i = new t.MarkSelectPop(e.curSelectType);
                PopViewManager.getInstance().openView(i)
            },
            this),
            ImageButtonUtil.add(this.imgDecompose,
            function() {
                return e.currMarkInfo ? e.currMarkInfo.isBindMon && e.currMarkInfo.isInstall ? void Alarm.show("刻印使用中，需要取下刻印才能继续操作！") : void e.disposeMark() : void Alarm.show("没有可分解的刻印！")
            },
            this),
            ImageButtonUtil.add(this.imgLvlup,
            function() {
                if (!e.currMarkInfo) return void Alarm.show("请选择需要升级的刻印！");
                if (CountermarkXMLInfo.isAbilityMark(e.currMarkInfo.markID)) Alarm.show("能力刻印无法升级");
                else {
                    if (e.currMarkInfo.isBindMon && e.currMarkInfo.isInstall) return void Alarm.show("刻印使用中，需要取下刻印才能继续操作！");
                    for (var i = !0,
                    n = CountermarkXMLInfo.getMaxAttriValue(e.currMarkInfo.markID), r = 0; 6 > r; r++) e.currMarkInfo.adjArray[r] > 0 && e.currMarkInfo.adjArray[r] < n[r] && (i = !1);
                    if (i) return void Alarm.show("当前刻印已经是最高等级了！");
                    e.markUpPanel || (e.markUpPanel = new t.MarkLvlUp(e.currMarkInfo)),
                    e.markUpPanel.setMarkInfo(e.currMarkInfo),
                    e.markUpPanel.show()
                }
            },
            this),
            ImageButtonUtil.add(this.imgGemCenter,
            function() {
                e.currMarkInfo ? CountermarkXMLInfo.getType(e.currMarkInfo.markID) != CountermarkType.MARK_IS_UNIVERSAL ? Alarm.show("该刻印不可镶嵌特效宝石") : e.showGemCenter(e.currMarkInfo) : Alarm.show("请选择要镶嵌宝石的刻印")
            },
            this)
        },
        i.prototype.onChangeTab = function() {
            this.curTab = ~~this.rbGroup.selectedValue,
            this.showList()
        },
        i.prototype.showList = function() {
            this.markList = this.markTypeSelect(),
            this.arrayColletion.removeAll();
            for (var t in this.markList) this.markList[t].category = 1,
            this.arrayColletion.addItem(this.markList[t]);
            this.empty_tip.visible = 0 == this.markList.length,
            this.markInfo.visible = 0 != this.markList.length,
            this.none.visible = void 0 == this._list.selectedItem,
            this.onSelectMark(null)
        },
        i.prototype.markTypeSelect = function() {
            for (var t = CountermarkController.getAllUniversalMark(), e = [], i = 0; i < t.length; i++)~~t[i].catchTime <= 0 && t[i].markID.toString().length < 7 && e.push(t[i]);
            switch (this._scroller.stopAnimation(), this._scroller.viewport.scrollV = 0, this.curTab) {
            case 1:
                e = e.filter(function(t) {
                    var e = CountermarkXMLInfo.getType(t.markID) === CountermarkType.MARK_IS_UNIVERSAL,
                    i = 5 === Number(CountermarkXMLInfo.getMintmarkQuality(t.markID));
                    return e && i
                });
                break;
            case 2:
                e = e.filter(function(t) {
                    var e = CountermarkXMLInfo.getType(t.markID) === CountermarkType.MARK_IS_UNIVERSAL,
                    i = 4 === Number(CountermarkXMLInfo.getMintmarkQuality(t.markID));
                    return e && i
                });
                break;
            case 3:
                e = e.filter(function(t) {
                    var e = CountermarkXMLInfo.getType(t.markID) === CountermarkType.MARK_IS_UNIVERSAL,
                    i = 3 === Number(CountermarkXMLInfo.getMintmarkQuality(t.markID));
                    return e && i
                });
                break;
            case 4:
                e = e.filter(function(t) {
                    var e = CountermarkXMLInfo.getType(t.markID) === CountermarkType.MARK_IS_UNIVERSAL,
                    i = 2 === Number(CountermarkXMLInfo.getMintmarkQuality(t.markID));
                    return e && i
                })
            }
            var n = this.txtSearch.text.trim();
            if (n.length > 0 && (e = e.filter(function(t) {
                var e = CountermarkXMLInfo.getDes(t.markID),
                i = CountermarkXMLInfo.getClassNameByMarkId(t.markID),
                r = SearchUtil.isMatch(n, e),
                a = SearchUtil.isMatch(n, i);
                return r || a
            })), this.selectName.text = "默认" == this.curSelectType[1] ? "筛选": this.curSelectType[1], "默认" != this.curSelectType[1] || "全部" != this.curSelectType[0]) {
                switch (this.curSelectType[1]) {
                case "默认":
                    break;
                case "攻击":
                    e = e.sort(function(t, e) {
                        var i = Number(CountermarkXMLInfo.getMaxAttriValue(e.markID)[0]);
                        e.hasExtraAttri && (i += Number(CountermarkXMLInfo.getExtraAttriValue(e.markID)[0]));
                        var n = Number(CountermarkXMLInfo.getMaxAttriValue(t.markID)[0]);
                        return t.hasExtraAttri && (n += Number(CountermarkXMLInfo.getExtraAttriValue(t.markID)[0])),
                        i == n ? t.level == e.level ? e.markID - t.markID: e.level - t.level: i - n
                    });
                    break;
                case "特攻":
                    e = e.sort(function(t, e) {
                        var i = Number(CountermarkXMLInfo.getMaxAttriValue(e.markID)[2]);
                        e.hasExtraAttri && (i += Number(CountermarkXMLInfo.getExtraAttriValue(e.markID)[2]));
                        var n = Number(CountermarkXMLInfo.getMaxAttriValue(t.markID)[2]);
                        return t.hasExtraAttri && (n += Number(CountermarkXMLInfo.getExtraAttriValue(t.markID)[2])),
                        i == n ? t.level == e.level ? e.markID - t.markID: e.level - t.level: i - n
                    });
                    break;
                case "双防":
                    e = e.sort(function(t, e) {
                        var i = Number(CountermarkXMLInfo.getMaxAttriValue(e.markID)[1]) + Number(CountermarkXMLInfo.getMaxAttriValue(e.markID)[3]);
                        e.hasExtraAttri && (i = Number(CountermarkXMLInfo.getExtraAttriValue(e.markID)[1]) + Number(CountermarkXMLInfo.getExtraAttriValue(e.markID)[3]) + i);
                        var n = Number(CountermarkXMLInfo.getMaxAttriValue(t.markID)[1]) + Number(CountermarkXMLInfo.getMaxAttriValue(t.markID)[3]);
                        return t.hasExtraAttri && (n = Number(CountermarkXMLInfo.getExtraAttriValue(t.markID)[1]) + Number(CountermarkXMLInfo.getExtraAttriValue(t.markID)[3]) + n),
                        i == n ? t.level == e.level ? e.markID - t.markID: e.level - t.level: i - n
                    });
                    break;
                case "速度":
                    e = e.sort(function(t, e) {
                        var i = Number(CountermarkXMLInfo.getMaxAttriValue(e.markID)[4]);
                        e.hasExtraAttri && (i += Number(CountermarkXMLInfo.getExtraAttriValue(e.markID)[4]));
                        var n = Number(CountermarkXMLInfo.getMaxAttriValue(t.markID)[4]);
                        return t.hasExtraAttri && (n += Number(CountermarkXMLInfo.getExtraAttriValue(t.markID)[4])),
                        i == n ? t.level == e.level ? e.markID - t.markID: e.level - t.level: i - n
                    });
                    break;
                case "体力":
                    e = e.sort(function(t, e) {
                        var i = Number(CountermarkXMLInfo.getMaxAttriValue(e.markID)[5]);
                        e.hasExtraAttri && (i += Number(CountermarkXMLInfo.getExtraAttriValue(e.markID)[5]));
                        var n = Number(CountermarkXMLInfo.getMaxAttriValue(t.markID)[5]);
                        return t.hasExtraAttri && (n += Number(CountermarkXMLInfo.getExtraAttriValue(t.markID)[5])),
                        i == n ? t.level == e.level ? e.markID - t.markID: e.level - t.level: i - n
                    })
                }
                switch (this.curSelectType[0]) {
                case "全部":
                    break;
                case "专属":
                    e = e.filter(function(t) {
                        return CountermarkXMLInfo.isExclusive(t.markID) ? !0 : !1
                    }),
                    "默认" == this.curSelectType[1] && (e = e.sort(function(t, e) {
                        return e.markID - t.markID
                    }), e = e.sort(function(t, e) {
                        return e.level - t.level
                    }));
                    break;
                case "非专属":
                    e = e.filter(function(t) {
                        return CountermarkXMLInfo.isExclusive(t.markID) ? !1 : !0
                    }),
                    "默认" == this.curSelectType[1] && (e = e.sort(function(t, e) {
                        return e.markID - t.markID
                    }), e = e.sort(function(t, e) {
                        return e.level - t.level
                    }))
                }
            } else e = e.sort(function(t, e) {
                return e.markID - t.markID
            }),
            e = e.sort(function(t, e) {
                return e.level - t.level
            });
            return e
        },
        i.prototype.onSearchChanged = function(t) {
            var e = this.txtSearch.text.trim();
            this.arrayColletion.removeAll(),
            this._scroller.viewport.scrollV = 0;
            var i = 0;
            if (this.imgBack.visible = e.length > 0, this.imgSearch.visible = !this.imgBack.visible, e.length > 0) {
                var n = !1;
                for (var r in this.markList) {
                    var a = CountermarkXMLInfo.getClassNameByMarkId(this.markList[r].markID); (SearchUtil.isMatch(e, this.markList[r].markName) || SearchUtil.isMatch(e, a)) && (this.arrayColletion.addItem(this.markList[r]), i++, n = !0)
                }
                if (!n && 0 == e.toLowerCase().indexOf("lv") && e.length > 2) {
                    var s = +e.substr(2);
                    for (var r in this.markList) this.markList[r].level == s && (this.arrayColletion.addItem(this.markList[r]), i++)
                }
            } else {
                for (var r in this.markList) this.arrayColletion.addItem(this.markList[r]);
                i = this.markList.length
            }
            this.empty_tip.visible = 0 == i,
            this.markInfo.visible = 0 != i,
            this.none.visible = void 0 == this._list.selectedItem,
            this.info.visible = !this.none.visible
        },
        i.prototype.disposeMark = function() {
            var t = this;
            if (this.currMarkInfo.isBindGem) {
                var e = GemsXMLInfo.getCategory(this.currMarkInfo.gemID) > 100,
                i = e ? "石之砂": GemsXMLInfo.getName(this.currMarkInfo.gemID) + "lv1",
                n = Math.ceil(.3 * GemsXMLInfo.getEquitLv1Cnt1(this.currMarkInfo.gemID));
                e && 0 == Math.ceil(.3 * GemsXMLInfo.getEquitLv1Cnt1(this.currMarkInfo.gemID)) && (n = 600),
                Alert.show("该刻印含有稀有的刻印宝石，确认要分解该刻印吗？分解后可获得" + this.getProductNum(this.currMarkInfo).toString() + "泰坦之灵," + (core.gameUtil.ConvertItemNumView(n, 0) + "个" + i),
                function() {
                    CountermarkXMLInfo.isUniversalMark(t.currMarkInfo.markID) ? t.doDecomposeUniversal(t.currMarkInfo) : t.doDecomposeCommon(t.currMarkInfo)
                })
            } else Alert.show("确认要进行分解吗？分解后可以获得" + this.getProductNum(this.currMarkInfo).toString() + "泰坦之灵。",
            function() {
                CountermarkXMLInfo.isUniversalMark(t.currMarkInfo.markID) ? t.doDecomposeUniversal(t.currMarkInfo) : t.doDecomposeCommon(t.currMarkInfo)
            })
        },
        i.prototype.doDecomposeUniversal = function(t) {
            var e = this;
            this.touchChildren = !1,
            SocketConnection.sendByQueue(CommandID.COUNTERMARK_RESOLVE, [t.obtainTime],
            function(t) {
                var i = t.data;
                i.position = 0;
                for (var n = (i.readUnsignedInt(), i.readUnsignedInt(), i.readUnsignedInt(), i.readUnsignedInt(), 0); n < e.arrayColletion.length; n++) {
                    var r = e.arrayColletion.getItemAt(n);
                    if (r.markID == e.currMarkInfo.markID && r.obtainTime == e.currMarkInfo.obtainTime) {
                        e.onDecompose(),
                        e.arrayColletion.removeItemAt(n);
                        break
                    }
                }
                if (e.arrayColletion.length > 0) {
                    var a = e.arrayColletion.getItemAt(0);
                    e._list.selectedItem = a,
                    e.currMarkInfo = a
                } else e.currMarkInfo = null;
                e.showCurrMark(),
                e.touchChildren = !0
            },
            function(t) {
                e.touchChildren = !0
            })
        },
        i.prototype.doDecomposeCommon = function(t) {
            var e = this;
            this.touchChildren = !1,
            SocketConnection.sendByQueue(CommandID.COUNTERMARK_RESOLVE_COMMON, [t.markID, t.packagePosition],
            function(t) {
                for (var i = 0; i < e.arrayColletion.length; i++) {
                    var n = e.arrayColletion.getItemAt(i);
                    if (n.markID == e.currMarkInfo.markID && n.obtainTime == e.currMarkInfo.obtainTime) {
                        e.onDecompose(),
                        e.arrayColletion.removeItemAt(i);
                        break
                    }
                }
                if (e.arrayColletion.length > 0) {
                    var r = e.arrayColletion.getItemAt(0);
                    e._list.selectedItem = r,
                    e.currMarkInfo = r
                } else e.currMarkInfo = null;
                e.showCurrMark(),
                e.touchChildren = !0
            },
            function(t) {
                e.touchChildren = !0
            })
        },
        i.prototype.onDecompose = function() {
            CountermarkController.removeFromCache(this.currMarkInfo);
            for (var t = 0; t < this.markList.length; t++) if (this.markList[t].obtainTime == this.currMarkInfo.obtainTime) {
                this.markList.splice(t, 1);
                break
            }
        },
        i.prototype.showGemCenter = function(e) {
            this.gemList = new t.MarkSetPop(e),
            PopViewManager.getInstance().openView(this.gemList)
        },
        i.prototype.getProductNum = function(t) {
            var e;
            if (CountermarkXMLInfo.getType(t.markID) == CountermarkType.MARK_IS_COMMON_ABLITY) return e = CountermarkXMLInfo.getMintmarkQuality(t.markID),
            this.BASE_COST[Math.max(e - 1, 0)];
            e = CountermarkXMLInfo.getHornNum(t.markID);
            var i = CountermarkXMLInfo.getMaxGrade(t.markID),
            n = CountermarkXMLInfo.getCurrentGrade(t.markID, t.adjArray),
            r = CountermarkXMLInfo.getTotalConsume(t.markID),
            a = Math.ceil(r * (1 + n) * n * .2 / ((1 + i) * i));
            return this.BASE_COST[Math.max(e - 1, 0)] + a
        },
        i.prototype.isPurpleIn = function(t) {
            var e;
            return t instanceof CountermarkInfo && (e = CountermarkXMLInfo.getMintmarkQuality(t.markID), e >= 4) ? !0 : !1
        },
        i.prototype.onSelectMark = function(t) {
            this.currMarkInfo = this._list.selectedItem,
            this.showCurrMark()
        },
        i.prototype.showCurrMark = function() {
            var t = this;
            if (ItemManager.updateItems([1400352],
            function() {
                t.txtCoin2.text = ItemManager.getNumByID(1400352) + ""
            }), this.info.visible = Boolean(null !== this.currMarkInfo && void 0 !== this.currMarkInfo), this.none.visible = !this.info.visible, void 0 != this.currMarkInfo) {
                this.markInfo.visible = !0;
                var e = this.currMarkInfo.markName;
                if (this.txtName.text = e, e.length > 12 && (this.txtName.text = e.substr(0, 12) + "..."), this.txtLvl.text = "Lv." + this.currMarkInfo.level, this.imgMark.source = ClientConfig.getMarkPath(this.currMarkInfo.markID), this.currMarkInfo.bindMonID > 0 ? this.txtPet.text = "绑定于精灵:" + PetXMLInfo.getName(this.currMarkInfo.bindMonID) : this.txtPet.text = "未与任何精灵绑定", this.txtMintMarkclassName.text = CountermarkXMLInfo.getClassNameByMarkId(this.currMarkInfo.markID), this.bindGemIcon.source = null, this.currMarkInfo.isBindGem) {
                    this.tx_gemstone_tile.x = 110,
                    this.tx_gemstone_tile.text = "镶嵌宝石",
                    this.tx_no_gemstone.visible = !1,
                    this.item_bg.visible = !0,
                    this.bindGemIcon.visible = !0,
                    this.tx_gemstoneDes.visible = !0,
                    this.txtGemName.visible = !0,
                    this.gr_add_gemstone.alpha = 1,
                    this.item_bg.source = ItemXMLInfo.getRarityBg(this.currMarkInfo.gemID, "markcenter_mark_panel_item_bg_png");
                    var i = GemsXMLInfo.getCategory(this.currMarkInfo.gemID),
                    n = 100 > i && i > 0 ? 1 : 2,
                    r = 1 == n ? GemsXMLInfo.getName(this.currMarkInfo.gemID) + " Lv." + GemsXMLInfo.getLv(this.currMarkInfo.gemID) : GemsXMLInfo.getName(this.currMarkInfo.gemID);
                    this.txtGemName.text = r,
                    this.bindGemIcon.source = ClientConfig.getGemPath(GemsXMLInfo.getCategory(this.currMarkInfo.gemID)),
                    this.tx_gemstoneDes.text = GemsXMLInfo.getEffect(this.currMarkInfo.gemID)
                } else CountermarkXMLInfo.getType(this.currMarkInfo.markID) != CountermarkType.MARK_IS_UNIVERSAL ? (this.tx_gemstone_tile.x = 91, this.tx_gemstone_tile.text = "镶嵌宝石(不可镶嵌)", this.tx_no_gemstone.visible = !0, this.item_bg.visible = !1, this.bindGemIcon.visible = !1, this.tx_gemstoneDes.visible = !1, this.txtGemName.visible = !1, this.gr_add_gemstone.alpha = .6) : (this.tx_gemstone_tile.x = 91, this.tx_gemstone_tile.text = "镶嵌宝石(可镶嵌)", this.tx_no_gemstone.visible = !0, this.item_bg.visible = !1, this.bindGemIcon.visible = !1, this.tx_gemstoneDes.visible = !1, this.txtGemName.visible = !1, this.gr_add_gemstone.alpha = .6);
                for (var a = CountermarkXMLInfo.getMaxAttriValue(this.currMarkInfo.markID), s = 0; 6 > s; s++) this["txtAttr_" + s].text = this.currMarkInfo.adjArray[s] + "/" + a[s];
                if (this.grp_hidenAttr.visible = !0, this.currMarkInfo.hasExtraAttri) {
                    this.grpHideAttrTxt.visible = !0,
                    this.txtNoHideAttr.visible = !1,
                    this.ycsx.x = 91,
                    this.ycsx.text = "隐藏属性（未激活）";
                    var o = CountermarkXMLInfo.getMaxGrade(this.currMarkInfo.markID),
                    u = 3143013;
                    this.currMarkInfo.level == o ? (this.grp_hidenAttr.alpha = 1, this.ycsx.text = "隐藏属性（已激活）") : (this.grp_hidenAttr.alpha = .6, u = 16777215);
                    for (var s = 0; 6 > s; s++) this["txtAttrHide_" + s].text = this.currMarkInfo.extraAttri[s],
                    this["txtAttrHide_" + s].textColor = u
                } else this.ycsx.x = 110,
                this.ycsx.text = "隐藏属性",
                this.grp_hidenAttr.alpha = .6,
                this.txtNoHideAttr.visible = !0,
                this.grpHideAttrTxt.visible = !1
            }
        },
        i.prototype.destroy = function() {
            e.prototype.destroy.call(this),
            this.rbGroup.removeEventListener(egret.Event.CHANGE, this.onChangeTab, this),
            this._list.removeEventListener(egret.Event.CHANGE, this.onSelectMark, this),
            this.txtSearch.removeEventListener(egret.Event.CHANGE, this.onSearchChanged, this),
            EventManager.removeEventListener(CountermarkEvent.UPGRADE_END, this.onMarkUpdate, this),
            EventManager.removeEventListener(CountermarkEvent.INLAY_END, this.onMarkUpdate, this),
            EventManager.removeEventListener("markSelect", this.markSelct, this)
        },
        i
    } (BasicPanel);
    t.MarkPanel = e,
    __reflect(e.prototype, "markCenter.MarkPanel")
} (markCenter || (markCenter = {}));
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
markCenter; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.skinName = MarkItemNewSkin,
            e.cacheAsBitmap = !0,
            e
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this),
            this.txtId.visible = !1
        },
        e.prototype.dataChanged = function() {
            var t = this;
            if (this.data) {
                if (1 == this.data.category) {
                    this.grp_gem.visible = 0 != this.data._gemID,
                    0 != this.data._gemID && (this.gemIcon.source = ClientConfig.getGemPath(GemsXMLInfo.getCategory(this.data._gemID)), this.imgGemBG.source = ItemXMLInfo.getRarityBg(this.data._gemID, "markcenter_dbx_773_png", "rarity_gem_")),
                    this.txtLvl.visible = !0,
                    this.txtCount.visible = !1;
                    var e = this.data;
                    this.txtName.text = e.markName,
                    this.txtLvl.text = "Lv." + e.level,
                    IS_RELEASE || (this.txtId.visible = !0, this.txtId.text = e.markID + ""),
                    this.imgMark.source = ClientConfig.getMarkPath(e.markID),
                    e.markName.length > 6 && (this.txtName.text = e.markName.substr(0, 5) + "...")
                } else if (2 == this.data.category) {
                    this.grp_gem.visible = !1,
                    this.txtLvl.visible = !0,
                    this.txtCount.visible = !0;
                    var e = this.data,
                    i = GemsXMLInfo.getCategory(e.itemID),
                    n = 100 > i && i > 0 ? 1 : 2,
                    r = 1 == n ? GemsXMLInfo.getName(e.itemID) + " Lv." + GemsXMLInfo.getLv(e.itemID) : GemsXMLInfo.getName(e.itemID),
                    a = ["Ⅰ", "Ⅱ", "Ⅲ", "Ⅳ", "Ⅴ"];
                    if (this.txtLvl.text = 1 == n ? " Lv." + GemsXMLInfo.getLv(e.itemID) : a[GemsXMLInfo.getLv(e.itemID) - 1], this.txtName.text = r, r.length > 6 && (this.txtName.text = r.substr(0, 5) + "..."), this.txtCount.text = e.itemNum + "", e.itemNum >= 1e4) {
                        var s = e.itemNum / 1e4,
                        o = e.itemNum % 1e4;
                        o > 0 ? this.txtCount.text = "" + s.toFixed(1) + "万": this.txtCount.text = "" + Math.floor(s) + "万"
                    }
                    this.imgMark.source = ClientConfig.getGemPath(GemsXMLInfo.getCategory(e.itemID)),
                    this.imgBg.source = ItemXMLInfo.getRarityBg(e.itemID, "rarity_rect_0_png", "rarity_rect_")
                } else if (3 == this.data.category) {
                    this.grp_gem.visible = !1;
                    var u = this.data;
                    ItemManager.updateItems([u.id],
                    function() {
                        t.txtCount.visible = !0;
                        var e = u.itemObj.Name;
                        t.txtName.text = e,
                        e.length > 6 && (t.txtName.text = e.substr(0, 5) + "..."),
                        t.txtLvl.visible = !1;
                        var i = ItemManager.getNumByID(u.id);
                        if (i >= 1e4) {
                            var n = i / 1e4,
                            r = i % 1e4;
                            r > 0 ? t.txtCount.text = "" + n.toFixed(1) + "万": t.txtCount.text = "" + Math.floor(n) + "万"
                        } else t.txtCount.text = ItemManager.getNumByID(u.id) + "";
                        t.imgMark.source = ItemXMLInfo.getIconURL(u.id),
                        t.imgBg.source = ItemXMLInfo.getRarityBg(u.id, "rarity_rect_0_png", "rarity_rect_")
                    })
                }
            } else this.txtName.text = "",
            this.txtLvl.text = "",
            this.imgMark.source = null,
            this.txtCount.text = ""
        },
        Object.defineProperty(e.prototype, "selected", {
            set: function(t) {
                this.imgSelect.visible = t
            },
            enumerable: !0,
            configurable: !0
        }),
        e.prototype.destroy = function() {},
        e
    } (eui.ItemRenderer);
    t.MarkItemRenderer = e,
    __reflect(e.prototype, "markCenter.MarkItemRenderer")
} (markCenter || (markCenter = {}));
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
markCenter; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.skinName = MarkTipsRenderSkin,
            e
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this)
        },
        e.prototype.dataChanged = function() {
            this.data && (this.info = this.data, this.erdai.visible = 2 == this.info.category, this.yidai.visible = 1 == this.info.category, this.info.name = this.info.name.replace("Lv1", ""), this.info.name = this.info.name.replace("Ⅰ", ""), this.txtGemName.text = this.info.name, this.txtEf.text = this.info.des)
        },
        e
    } (eui.ItemRenderer);
    t.MarkTipsRender = e,
    __reflect(e.prototype, "markCenter.MarkTipsRender")
} (markCenter || (markCenter = {}));
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
markCenter; !
function(t) {
    var e = function(t) {
        function e(e) {
            var i = t.call(this) || this;
            return i.curTab = e,
            i.skinName = "GemslectpopSkin",
            i
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this),
            this.initDat(),
            this.addEvents()
        },
        e.prototype.initDat = function() {
            this.a.visible = 1 == this.curTab,
            this.b.visible = 2 == this.curTab
        },
        e.prototype.addEvents = function() {
            for (var t = this,
            e = function(e) {
                ImageButtonUtil.add(i["btna" + e],
                function() {
                    t.hide();
                    var i = t["a" + e].text;
                    EventManager.dispatchEventWith("gemSelect", !1, i)
                },
                i)
            },
            i = this, n = 1; 14 >= n; n++) e(n);
            for (var r = function(e) {
                ImageButtonUtil.add(a["btnb" + e],
                function() {
                    t.hide();
                    var i = t["b" + e].text;
                    e >= 5 && 10 > e && (i = i.slice(0, 2)),
                    EventManager.dispatchEventWith("gemSelect", !1, i)
                },
                a)
            },
            a = this, n = 1; 14 >= n; n++) r(n)
        },
        e.prototype.destroy = function() {
            t.prototype.destroy.call(this),
            ImageButtonUtil.removeAll(this)
        },
        e
    } (PopView);
    t.GemSelectPop = e,
    __reflect(e.prototype, "markCenter.GemSelectPop")
} (markCenter || (markCenter = {}));
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
markCenter; !
function(t) {
    var e = function(t) {
        function e(e, i) {
            var n = t.call(this) || this;
            return n.canTouch = !0,
            n._currentExchangeNum = 1,
            n.skinName = MarkcenterGemUpPopSkin,
            n.gem = e,
            n.titleNum = i,
            n
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this),
            this.showTitle(),
            this.addEvents(),
            this.initDat(),
            this.update()
        },
        e.prototype.initDat = function() {
            if (this.title.source = "markcenter_gem_up_pop_title" + this.titleNum + "_png", this.iconNum.text = this.gem.itemNum + "", this.gem.itemNum >= 1e4) {
                var t = this.gem.itemNum / 1e4,
                e = this.gem.itemNum % 1e4;
                e > 0 ? this.iconNum.text = "" + t.toFixed(1) + "万": this.iconNum.text = "" + Math.floor(t) + "万"
            }
            this.buySlider.minimum = this._maxExchangeNum < 1 ? 0 : 1,
            this.buySlider.maximum = this._maxExchangeNum < 1 ? 1 : this._maxExchangeNum,
            this.buySlider.snapInterval = 1,
            this.buySlider.value = this.buySlider.minimum
        },
        e.prototype.showTitle = function() {
            switch (this.titleNum) {
            case 1:
                this.upgrade();
                break;
            case 2:
                this.smash();
                break;
            case 3:
                this.melting();
                break;
            case 4:
                this.reset()
            }
            this.buySlider.touchEnabled = this.buySlider.touchChildren = this._maxExchangeNum > 1
        },
        e.prototype.upgrade = function() {
            if (this.txtbtnName.text = "升 级", GemsXMLInfo.getCategory(this.gem.itemID) < 100) {
                var t = GemsXMLInfo.getEquitLv1Cnt1(GemsXMLInfo.getUpgradeGemId(this.gem.itemID)) / GemsXMLInfo.getEquitLv1Cnt1(this.gem.itemID);
                this.txtUpNeed.text = "需要消耗：" + GemsXMLInfo.getName(this.gem.itemID) + "lv" + GemsXMLInfo.getLv(this.gem.itemID) + "*" + t * this.buySlider.value,
                this.txtUpResult.text = "升级结果：" + GemsXMLInfo.getName(this.gem.itemID) + "lv" + GemsXMLInfo.getLv(GemsXMLInfo.getUpgradeGemId(this.gem.itemID)),
                this._maxExchangeNum = Math.floor(this.gem.itemNum / t),
                this.gem.itemNum / t < 1 && (this._currentExchangeNum = this._maxExchangeNum = 0),
                this.txtGemName.text = GemsXMLInfo.getName(this.gem.itemID) + "lv" + GemsXMLInfo.getLv(this.gem.itemID)
            } else this.txtUpNeed.text = "需要消耗：石之砂*" + 1e4 * GemsXMLInfo.getLv(this.gem.itemID) * this.buySlider.value,
            this.txtUpResult.text = "升级结果：" + GemsXMLInfo.getName(GemsXMLInfo.getUpgradeGemId(this.gem.itemID)),
            this._maxExchangeNum = Math.min(this.gem.itemNum, Math.floor(ItemManager.getNumByID(1723854) / (1e4 * GemsXMLInfo.getLv(this.gem.itemID)))),
            this.txtGemName.text = GemsXMLInfo.getName(this.gem.itemID),
            this._maxExchangeNum < 1 && (this._currentExchangeNum = this._maxExchangeNum = 0);
            this.iconBg.source = ItemXMLInfo.getRarityBg(this.gem.itemID, "common_item_bg_style_70_70_png"),
            this.icon.source = ClientConfig.getGemPath(GemsXMLInfo.getCategory(this.gem.itemID))
        },
        e.prototype.smash = function() {
            this.txtbtnName.text = "粉 碎",
            this.txtUpNeed.visible = !1,
            this.txtUpResult.text = "粉碎结果：原核碎片*" + GemsXMLInfo.getEquitLv1Cnt1(this.gem.itemID) / 10 * this._currentExchangeNum,
            this.icon.source = ClientConfig.getGemPath(GemsXMLInfo.getCategory(this.gem.itemID)),
            this.txtGemName.text = GemsXMLInfo.getName(this.gem.itemID) + "lv" + GemsXMLInfo.getLv(this.gem.itemID),
            this._maxExchangeNum = this.gem.itemNum,
            this.iconBg.source = ItemXMLInfo.getRarityBg(this.gem.itemID, "common_item_bg_style_70_70_png")
        },
        e.prototype.melting = function() {
            this.txtbtnName.text = "熔 炼",
            this.iconNum.visible = !1;
            var t = 0 == this._currentExchangeNum ? 1 : this._currentExchangeNum;
            this.txtUpNeed.text = "需要消耗：原核碎片*" + 3e6 * t,
            this.txtUpResult.text = "二代刻印宝石原核",
            this.txtGemName.text = "原核碎片",
            this.icon.source = ItemXMLInfo.getIconURL(1723855),
            this._maxExchangeNum = Math.floor(ItemManager.getNumByID(1723855) / 3e6),
            0 == this._maxExchangeNum && (this._currentExchangeNum = this._maxExchangeNum),
            this.iconBg.source = ItemXMLInfo.getRarityBg(1723855, "common_item_bg_style_70_70_png")
        },
        e.prototype.reset = function() {
            this.txtbtnName.text = "重 铸",
            this.txtUpNeed.visible = !1,
            this.iconNum.visible = !1,
            this.txtUpResult.text = "随机二代刻印宝石Ⅰ",
            this.txtGemName.text = "二代刻印宝石原核",
            this.icon.source = ItemXMLInfo.getIconURL(1723856),
            this._maxExchangeNum = ItemManager.getNumByID(1723856),
            0 == this._maxExchangeNum && (this._currentExchangeNum = this._maxExchangeNum),
            this.iconBg.source = ItemXMLInfo.getRarityBg(1723856, "common_item_bg_style_70_70_png")
        },
        e.prototype.changeHandler = function(t) {
            this.buySlider.value = t.target.value,
            this._currentExchangeNum = this.buySlider.value,
            this.update()
        },
        e.prototype.addEvents = function() {
            var t = this;
            this.buySlider.addEventListener(egret.Event.CHANGE, this.changeHandler, this),
            ImageButtonUtil.add(this.btnClose,
            function() {
                t.hide()
            },
            this),
            ImageButtonUtil.add(this.btn,
            function() {
                switch (t.titleNum) {
                case 1:
                    if (t._currentExchangeNum < 1) return void Alarm.show("很抱歉，道具数量不足！");
                    if (GemsXMLInfo.getCategory(t.gem.itemID) < 100) {
                        var e = GemsXMLInfo.getEquitLv1Cnt1(GemsXMLInfo.getUpgradeGemId(t.gem.itemID)) / GemsXMLInfo.getEquitLv1Cnt1(t.gem.itemID);
                        Alert.show("确认消耗" + t._currentExchangeNum * e + "个" + (GemsXMLInfo.getName(t.gem.itemID) + "lv" + GemsXMLInfo.getLv(t.gem.itemID)) + "升级为" + t._currentExchangeNum + "个" + (GemsXMLInfo.getName(t.gem.itemID) + "lv" + GemsXMLInfo.getLv(GemsXMLInfo.getUpgradeGemId(t.gem.itemID))) + "吗？",
                        function() {
                            SocketConnection.sendByQueue(CommandID.UPGRADE_GEM, [1, t.gem.itemID, t._currentExchangeNum * e, 0, 0],
                            function() {
                                ItemManager.getGem(),
                                EventManager.dispatchEventWith("gemSelect"),
                                t.hide()
                            },
                            function(t) {})
                        },
                        function() {})
                    } else {
                        var i = 1e4 * GemsXMLInfo.getLv(t.gem.itemID);
                        Alert.show("确认消耗" + t._currentExchangeNum * i + "个石之砂升级为" + t._currentExchangeNum + "个" + GemsXMLInfo.getName(GemsXMLInfo.getUpgradeGemId(t.gem.itemID)) + "吗？",
                        function() {
                            SocketConnection.sendByQueue(45790, [t.gem.itemID, t._currentExchangeNum],
                            function() {
                                ItemManager.getGem(),
                                EventManager.dispatchEventWith("gemChange"),
                                EventManager.dispatchEventWith("gemSelect"),
                                t.hide()
                            },
                            function(t) {})
                        },
                        function() {})
                    }
                    break;
                case 2:
                    Alert.show("确认消耗" + t._currentExchangeNum + "个" + (GemsXMLInfo.getName(t.gem.itemID) + "lv" + GemsXMLInfo.getLv(t.gem.itemID)) + "粉碎为" + GemsXMLInfo.getEquitLv1Cnt1(t.gem.itemID) / 10 * t._currentExchangeNum + "个原核碎片吗？",
                    function() {
                        SocketConnection.sendByQueue(45779, [t.gem.itemID, t._currentExchangeNum],
                        function() {
                            ItemManager.getGem(),
                            t.hide()
                        })
                    },
                    function() {});
                    break;
                case 3:
                    if (t._currentExchangeNum < 1) return void Alarm.show("很抱歉，道具数量不足！");
                    Alert.show("确认消耗" + 3e8 * t._currentExchangeNum + "个原核碎片熔炼为" + t._currentExchangeNum + "个二代刻印宝石原核吗？",
                    function() {
                        SocketConnection.sendByQueue(45791, [t._currentExchangeNum],
                        function() {
                            EventManager.dispatchEventWith("btnEvent"),
                            t.hide()
                        })
                    },
                    function() {});
                    break;
                case 4:
                    if (t._currentExchangeNum < 1) return void Alarm.show("很抱歉，道具数量不足！");
                    Alert.show("确认消耗" + t._currentExchangeNum + "个二代刻印宝石原核重铸为" + t._currentExchangeNum + "个随机二代刻印宝石Ⅰ吗？",
                    function() {
                        SocketConnection.sendByQueue(45780, [t._currentExchangeNum],
                        function() {
                            EventManager.dispatchEventWith("btnEvent"),
                            t.hide()
                        })
                    },
                    function() {})
                }
            },
            this),
            ImageButtonUtil.add(this.btnJia, this._onTouchImageButtonHandler, this),
            ImageButtonUtil.add(this.btnJian, this._onTouchImageButtonHandler, this)
        },
        e.prototype._onTouchImageButtonHandler = function(t) {
            switch (this.canTouch = !0, t.currentTarget) {
            case this.btnJia:
                if (this._currentExchangeNum >= this._maxExchangeNum) return void(this.buySlider.value = this.buySlider.maximum);
                this._currentExchangeNum++;
                break;
            case this.btnJian:
                if (this._currentExchangeNum <= 1) return this.buySlider.value = this._currentExchangeNum,
                void(this.canTouch = !1);
                this._currentExchangeNum--
            }
            this.buySlider.value = this._currentExchangeNum,
            this.update()
        },
        e.prototype.update = function() {
            if ((0 == this._currentExchangeNum || this.buySlider.minimum == this.buySlider.maximum) && (this.buySlider.minimum = 0, this.buySlider.value = this.buySlider.maximum, this.canTouch = !1), DisplayUtil.setEnabled(this.btnJian, this.canTouch, !this.canTouch), this.txtNum.text = "数量：" + this.buySlider.value, this._currentExchangeNum >= 1e4) {
                var t = this._currentExchangeNum / 1e4,
                e = this._currentExchangeNum % 1e4;
                e > 0 ? this.txtNum.text = "数量：" + t.toFixed(1) + "万": this.txtNum.text = "数量：" + Math.floor(t) + "万"
            }
            this.showTitle()
        },
        e.prototype.destroy = function() {
            t.prototype.destroy.call(this),
            this.buySlider.removeEventListener(egret.Event.CHANGE, this.changeHandler, this),
            ImageButtonUtil.removeAll(this)
        },
        e
    } (PopView);
    t.GemUpPop = e,
    __reflect(e.prototype, "markCenter.GemUpPop")
} (markCenter || (markCenter = {}));
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
markCenter; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t.skinName = MarkcenterHelpPopSkin,
            t
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            this.rbGroup = this.rb1.group,
            this.rbGroup.selectedValue = this.curTab = 1,
            this._scrol.viewport = this._list,
            this._list.itemRenderer = t.MarkTipsRender,
            this._list.layout.gap = 6,
            this.addEvent(),
            this.showGroup(1)
        },
        i.prototype.addEvent = function() {
            var t = this;
            this.rbGroup.addEventListener(egret.Event.CHANGE, this.onChangeTab, this),
            ImageButtonUtil.add(this.btnClose,
            function() {
                t.hide()
            },
            this)
        },
        i.prototype.onChangeTab = function() {
            this.curTab = ~~this.rbGroup.selectedValue,
            this.showGroup(this.curTab)
        },
        i.prototype.showGroup = function(t) {
            for (var e = 1; 3 >= e; e++) this["page" + e].visible = t == e;
            2 == t && (this._list.dataProvider = new eui.ArrayCollection(this.getData()))
        },
        i.prototype.getData = function() {
            for (var t = [], e = GemsXMLInfo.lv1Map.getValues(), i = 0; i < e.length; i++) {
                var n = {};
                n.category = e[i].Category < 100 ? 1 : 2,
                n.des = e[i].Des,
                n.name = e[i].Name,
                t.push(n)
            }
            return t
        },
        i.prototype.destroy = function() {
            e.prototype.destroy.call(this),
            ImageButtonUtil.removeAll(this),
            this.rbGroup.removeEventListener(egret.Event.CHANGE, this.onChangeTab, this)
        },
        i
    } (PopView);
    t.MarkHelpPop = e,
    __reflect(e.prototype, "markCenter.MarkHelpPop")
} (markCenter || (markCenter = {}));
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
markCenter; !
function(t) {
    var e = function(t) {
        function e(e) {
            var i = t.call(this) || this;
            return i.data = e,
            i.skinName = MarkselectpopSkin,
            i
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this),
            this.initDat(),
            this.addEvents()
        },
        e.prototype.initDat = function() {
            if (this.rb1Group = this.rb_all.group, this.rb1Group.selectedValue = this.rb_all.value, this.rb2Group = this.rb_mo.group, this.rb2Group.selectedValue = this.rb_mo.value, this.data) {
                for (var t = 0; 2 > t; t++) this["rb" + (t + 1) + "Group"].selectedValue = this.data[t];
                this.data = null
            }
        },
        e.prototype.addEvents = function() {
            var t = this;
            ImageButtonUtil.add(this.btnDefault, this.initDat, this),
            ImageButtonUtil.add(this.btnComfirm,
            function() {
                for (var e = [], i = 0; 2 > i; i++) {
                    var n = t["rb" + (i + 1) + "Group"].selectedValue;
                    e.push(n)
                }
                EventManager.dispatchEventWith("markSelect", !1, e),
                t.hide()
            },
            this)
        },
        e.prototype.destroy = function() {
            t.prototype.destroy.call(this),
            ImageButtonUtil.removeAll(this)
        },
        e
    } (PopView);
    t.MarkSelectPop = e,
    __reflect(e.prototype, "markCenter.MarkSelectPop")
} (markCenter || (markCenter = {}));
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
markCenter; !
function(t) {
    var e = function(e) {
        function i(t, i) {
            var n = e.call(this) || this;
            return n.gemList = [],
            n.arrayColletion = new eui.ArrayCollection([]),
            n.currType = 0,
            n.currMarkInfo = t,
            n._isOpenByOther = i,
            n.skinName = MarkcenterMarkSetSkin,
            n
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            this.showCurrMark(),
            this.rbGroup = this.rb_1.group,
            this.rbGroup.selectedValue = this.curTab = 1,
            this._scroller.viewport = this._list,
            this._list.itemRenderer = t.GemRenderer,
            this._list.dataProvider = this.arrayColletion,
            this.showList(),
            this.addEvents()
        },
        i.prototype.addEvents = function() {
            var e = this;
            EventManager.addEventListener(GameEvent.NOTIFY_ITEM_CHANGE, this.showList, this),
            this._list.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.onSelectGem, this),
            this.rbGroup.addEventListener(egret.Event.CHANGE, this.onChangeTab, this),
            ImageButtonUtil.add(this.btnClose,
            function() {
                e.hide()
            },
            this),
            ImageButtonUtil.add(this.btnSelect,
            function() {
                var i = new t.GemSelectPop(e.curTab);
                PopViewManager.getInstance().openView(i)
            },
            this),
            EventManager.addEventListener("gemSelect", this.gemSelect, this),
            this.getGem()
        },
        i.prototype.gemSelect = function(t) {
            t.data && (this.curSelect = t.data),
            this.showList()
        },
        i.prototype.onChangeTab = function() {
            this.curTab = ~~this.rbGroup.selectedValue,
            this.curSelect = null,
            this.showList()
        },
        i.prototype.showList = function() {
            this.gemList = ItemManager.getGemInfos().concat(),
            this._scroller.viewport.scrollV = 0,
            this._scroller.stopAnimation(),
            this.arrayColletion.removeAll();
            var t, e = !0;
            this.curSelect && (t = this.curSelect.replace("宝石", "")),
            this.selectName.text = "所有宝石" == this.curSelect || null == this.curSelect ? "筛选": t;
            for (var i in this.gemList) {
                var n = GemsXMLInfo.getCategory(this.gemList[i].itemID),
                r = 100 > n && n > 0 ? 1 : 2;
                if ((n == this.currType || 0 == this.currType) && r == this.curTab) if (this.curSelect && "所有宝石" != this.curSelect) {
                    var a = GemsXMLInfo.getName(this.gemList[i].itemID);
                    a.search(t) >= 0 && (this.arrayColletion.addItem(this.gemList[i]), e = !1)
                } else this.arrayColletion.addItem(this.gemList[i]),
                e = !1
            }
            ArrayUtil.sortOnMultParams(this.arrayColletion.source, [["rarity", ArrayUtil.DESCENDING], ["itemID", ArrayUtil.DESCENDING]]),
            this.empty_tip.visible = e
        },
        i.prototype.setMarkInfo = function(t) {
            this.currMarkInfo = t,
            this.showCurrMark()
        },
        i.prototype.onSelectGem = function(t) {
            var e = this._list.selectedItem;
            GemsXMLInfo.getLv(e.itemID);
            this.showCurrMark();
            var i = {};
            i.id = e.itemID,
            i.markInfo = this.currMarkInfo,
            tipsPop.TipsPop.openMarkGemPop(i)
        },
        i.prototype.getGem = function() {
            ItemManager.addEventListener(ItemEvent.GEM_LIST, this.showList, this),
            ItemManager.getGem()
        },
        i.prototype.showCurrMark = function() {
            if (this.currMarkInfo) if (this.txtName.text = this.currMarkInfo.markName, this.txtLvl.text = "Lv." + this.currMarkInfo.level, this.imgMark.source = ClientConfig.getMarkPath(this.currMarkInfo.markID), this.currMarkInfo.bindMonID > 0 ? this.txtPet.text = "绑定于精灵:" + PetXMLInfo.getName(this.currMarkInfo.bindMonID) : this.txtPet.text = "未与任何精灵绑定", this.bindGemIcon.source = null, this.currMarkInfo.isBindGem) {
                this.txtGemName.x = 79;
                var t = GemsXMLInfo.getCategory(this.currMarkInfo.gemID) > 100 ? "": "Lv." + GemsXMLInfo.getLv(this.currMarkInfo.gemID);
                this.txtGemName.text = GemsXMLInfo.getName(this.currMarkInfo.gemID) + t,
                this.bindGemIcon.source = ClientConfig.getGemPath(GemsXMLInfo.getCategory(this.currMarkInfo.gemID)),
                this.bindGemIcon.maxHeight = this.bindGemIcon.maxWidth = 26,
                this.txtGemContent.visible = !0,
                this.txtGemContent.text = "宝石效果：" + GemsXMLInfo.getEffect(this.currMarkInfo.gemID)
            } else CountermarkXMLInfo.getType(this.currMarkInfo.markID) != CountermarkType.MARK_IS_UNIVERSAL ? (this.txtGemName.x = 58, this.txtGemContent.visible = !1, this.txtGemName.text = "不可镶嵌特效宝石") : (this.txtGemName.x = 58, this.txtGemContent.visible = !1, this.txtGemName.text = "可镶嵌特效宝石")
        },
        i.prototype.destroy = function() {
            e.prototype.destroy.call(this),
            this._isOpenByOther && RES.destroyRes("markCenter"),
            ImageButtonUtil.removeAll(this),
            this._list.removeEventListener(eui.ItemTapEvent.ITEM_TAP, this.onSelectGem, this),
            this.rbGroup.removeEventListener(egret.Event.CHANGE, this.onChangeTab, this),
            EventManager.removeEventListener(GameEvent.NOTIFY_ITEM_CHANGE, this.showList, this),
            ItemManager.removeEventListener(ItemEvent.GEM_LIST, this.showList, this),
            EventManager.removeEventListener("gemSelect", this.gemSelect, this)
        },
        i
    } (PopView);
    t.MarkSetPop = e,
    __reflect(e.prototype, "markCenter.MarkSetPop")
} (markCenter || (markCenter = {}));
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
generateEUI.paths["resource/eui_skins/GemDetailSkin.exml"] = window.GemDetailSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["imgMix", "imgInlay", "txtDes", "scroller", "txtNum", "txtName"],
        this.height = 172,
        this.width = 480,
        this.elementsContent = [this._Image1_i(), this._Image2_i(), this._Image3_i(), this.imgMix_i(), this.imgInlay_i(), this.scroller_i(), this._Label3_i(), this._Group2_i(), this.txtName_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.bottom = 5,
        t.left = 5,
        t.right = 5,
        t.scale9Grid = new egret.Rectangle(7, 7, 6, 6),
        t.source = "new_tips_2021_11_img6_png",
        t.top = 5,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 30,
        t.left = 5,
        t.right = 5,
        t.source = "new_tips_2021_11_img5_png",
        t.y = 5,
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "new_tips_2021_11_img4_png",
        t.x = 3,
        t.y = 3,
        t
    },
    i.imgMix_i = function() {
        var t = new eui.Group;
        return this.imgMix = t,
        t.visible = !1,
        t.x = 370,
        t.y = 136,
        t.elementsContent = [this._Image4_i(), this._Label1_i()],
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.source = "new_mark_tips_2021_11_aaa_png",
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.size = 16,
        t.text = "合 成",
        t.textColor = 11301415,
        t.x = 27,
        t.y = 4,
        t
    },
    i.imgInlay_i = function() {
        var t = new eui.Group;
        return this.imgInlay = t,
        t.x = 370,
        t.y = 136,
        t.elementsContent = [this._Image5_i(), this._Label2_i()],
        t
    },
    i._Image5_i = function() {
        var t = new eui.Image;
        return t.source = "new_mark_tips_2021_11_aaa_png",
        t
    },
    i._Label2_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "镶 嵌",
        t.textColor = 11301415,
        t.x = 27,
        t.y = 4,
        t
    },
    i.scroller_i = function() {
        var t = new eui.Scroller;
        return this.scroller = t,
        t.height = 55,
        t.left = 24,
        t.right = 24,
        t.y = 70,
        t.viewport = this._Group1_i(),
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.elementsContent = [this.txtDes_i()],
        t
    },
    i.txtDes_i = function() {
        var t = new eui.Label;
        return this.txtDes = t,
        t.fontFamily = "MFShangHei",
        t.left = 0,
        t.right = 0,
        t.scaleX = 1,
        t.scaleY = 1,
        t.size = 16,
        t.textColor = 8822740,
        t
    },
    i._Label3_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "物品介绍：",
        t.textColor = 6154074,
        t.x = 24,
        t.y = 44.539,
        t
    },
    i._Group2_i = function() {
        var t = new eui.Group;
        return t.right = 20,
        t.y = 10,
        t.layout = this._HorizontalLayout1_i(),
        t.elementsContent = [this._Label4_i(), this.txtNum_i()],
        t
    },
    i._HorizontalLayout1_i = function() {
        var t = new eui.HorizontalLayout;
        return t
    },
    i._Label4_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 20,
        t.text = "拥有:",
        t.textColor = 6388143,
        t
    },
    i.txtNum_i = function() {
        var t = new eui.Label;
        return this.txtNum = t,
        t.fontFamily = "MFShangHei",
        t.size = 20,
        t.text = "210",
        t.textAlign = "right",
        t.textColor = 4186874,
        t.verticalAlign = "middle",
        t
    },
    i.txtName_i = function() {
        var t = new eui.Label;
        return this.txtName = t,
        t.fontFamily = "MFShangHei",
        t.size = 20,
        t.text = "五星刻印",
        t.textColor = 12900094,
        t.x = 24,
        t.y = 10,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/GemItem2Skin.exml"] = window.GemItem2Skin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["imgBg", "name_bg", "txtCount", "txtName", "imgGem", "txtGemLv", "imgSelect"],
        this.height = 145,
        this.width = 122,
        this.elementsContent = [this.imgBg_i(), this.name_bg_i(), this.txtCount_i(), this.txtName_i(), this.imgGem_i(), this.txtGemLv_i(), this.imgSelect_i()],
        this.states = [new eui.State("up", [new eui.SetProperty("imgSelect", "visible", !1)]), new eui.State("down", [])]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.imgBg_i = function() {
        var t = new eui.Image;
        return this.imgBg = t,
        t.source = "markcenter_mark_panel_markbg_png",
        t.visible = !0,
        t.x = 6,
        t.y = 6,
        t
    },
    i.name_bg_i = function() {
        var t = new eui.Image;
        return this.name_bg = t,
        t.height = 24,
        t.source = "mark_item_name_bg_png",
        t.visible = !1,
        t.width = 102,
        t.x = 7,
        t.y = 86,
        t
    },
    i.txtCount_i = function() {
        var t = new eui.Label;
        return this.txtCount = t,
        t.fontFamily = "MFShangHei",
        t.size = 20,
        t.text = "9999",
        t.textAlign = "right",
        t.textColor = 16777215,
        t.width = 100,
        t.x = 7,
        t.y = 90,
        t
    },
    i.txtName_i = function() {
        var t = new eui.Label;
        return this.txtName = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = 0,
        t.size = 16,
        t.text = "宝石名称lv.10",
        t.textAlign = "center",
        t.textColor = 3908073,
        t.width = 110,
        t.y = 114,
        t
    },
    i.imgGem_i = function() {
        var t = new eui.Image;
        return this.imgGem = t,
        t.height = 55,
        t.horizontalCenter = -3.5,
        t.verticalCenter = -10,
        t.width = 55,
        t
    },
    i.txtGemLv_i = function() {
        var t = new eui.Label;
        return this.txtGemLv = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.stroke = 1,
        t.strokeColor = 1320013,
        t.text = "lv.10",
        t.textColor = 16777215,
        t.x = 10,
        t.y = 90,
        t
    },
    i.imgSelect_i = function() {
        var t = new eui.Image;
        return this.imgSelect = t,
        t.height = 116,
        t.visible = !1,
        t.width = 116,
        t.x = 0,
        t.y = 0,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/GemSynthesisDetailSkin.exml"] = window.GemSynthesisDetailSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "titleReward", "btnClose", "txtCount", "txtDes", "txtAllDesc", "mixOne", "mixAll", "gemName1", "gemName2", "gemLv0", "gemLv1", "arrow", "iconGem1", "iconGem2"],
        this.height = 378,
        this.width = 630,
        this.elementsContent = [this.bg_i(), this.titleReward_i(), this.btnClose_i(), this._Label1_i(), this.txtCount_i(), this._Label2_i(), this.txtDes_i(), this.txtAllDesc_i(), this.mixOne_i(), this.mixAll_i(), this._Image4_i(), this.gemName1_i(), this._Image5_i(), this.gemName2_i(), this.gemLv0_i(), this.gemLv1_i(), this.arrow_i(), this._Group1_i(), this._Group2_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.bg_i = function() {
        var t = new eui.Group;
        return this.bg = t,
        t.x = 0,
        t.y = 0,
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
    i.titleReward_i = function() {
        var t = new eui.Image;
        return this.titleReward = t,
        t.source = "gem_mix_detail_KeYinBaoShiHeCheng_png",
        t.x = 48,
        t.y = 18,
        t
    },
    i.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.source = "common_close_1_png",
        t.x = 577,
        t.y = -10,
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.size = 18,
        t.text = "当前拥有",
        t.textColor = 2500699,
        t.x = 111,
        t.y = 201,
        t
    },
    i.txtCount_i = function() {
        var t = new eui.Label;
        return this.txtCount = t,
        t.size = 18,
        t.text = "99999999",
        t.textAlign = "center",
        t.textColor = 2500955,
        t.width = 81,
        t.x = 105,
        t.y = 223,
        t
    },
    i._Label2_i = function() {
        var t = new eui.Label;
        return t.size = 18,
        t.text = "合成1个需要",
        t.textColor = 2500699,
        t.x = 265,
        t.y = 172,
        t
    },
    i.txtDes_i = function() {
        var t = new eui.Label;
        return this.txtDes = t,
        t.size = 18,
        t.text = "99999999",
        t.textAlign = "center",
        t.textColor = 2500955,
        t.width = 81,
        t.x = 273,
        t.y = 196,
        t
    },
    i.txtAllDesc_i = function() {
        var t = new eui.Label;
        return this.txtAllDesc = t,
        t.size = 16,
        t.text = "可以获得9999个超级厉害的宝石Lv.00",
        t.textAlign = "center",
        t.textColor = 2500699,
        t.width = 266,
        t.x = 180,
        t.y = 329,
        t
    },
    i.mixOne_i = function() {
        var t = new eui.Image;
        return this.mixOne = t,
        t.height = 42,
        t.source = "gemSynthesisDetail_mixOne_png",
        t.width = 122,
        t.x = 424,
        t.y = 198,
        t
    },
    i.mixAll_i = function() {
        var t = new eui.Image;
        return this.mixAll = t,
        t.height = 50,
        t.source = "gemSynthesisDetail_mixAll_png",
        t.width = 174,
        t.x = 227,
        t.y = 264,
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.height = 104,
        t.source = "common_icon_bg_style_1_png",
        t.width = 104,
        t.x = 93,
        t.y = 88,
        t
    },
    i.gemName1_i = function() {
        var t = new eui.Label;
        return this.gemName1 = t,
        t.size = 16,
        t.text = "致命一击宝石",
        t.textAlign = "center",
        t.textColor = 16777215,
        t.width = 106,
        t.x = 93,
        t.y = 172,
        t
    },
    i._Image5_i = function() {
        var t = new eui.Image;
        return t.height = 104,
        t.source = "common_icon_bg_style_1_png",
        t.width = 104,
        t.x = 433,
        t.y = 88,
        t
    },
    i.gemName2_i = function() {
        var t = new eui.Label;
        return this.gemName2 = t,
        t.size = 16,
        t.text = "致命一击宝石",
        t.textAlign = "center",
        t.textColor = 16777215,
        t.width = 106,
        t.x = 432,
        t.y = 172,
        t
    },
    i.gemLv0_i = function() {
        var t = new eui.Label;
        return this.gemLv0 = t,
        t.size = 16,
        t.stroke = 1,
        t.strokeColor = 1973795,
        t.text = "Lv.100",
        t.textColor = 16773477,
        t.x = 97,
        t.y = 89,
        t
    },
    i.gemLv1_i = function() {
        var t = new eui.Label;
        return this.gemLv1 = t,
        t.size = 16,
        t.stroke = 1,
        t.strokeColor = 1973795,
        t.text = "Lv.100",
        t.textColor = 16773477,
        t.x = 436,
        t.y = 89,
        t
    },
    i.arrow_i = function() {
        var t = new eui.Image;
        return this.arrow = t,
        t.height = 35,
        t.source = "gemSynthesisDetail_arrow_png",
        t.width = 46,
        t.x = 292,
        t.y = 123,
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.height = 77,
        t.width = 100,
        t.x = 95,
        t.y = 90,
        t.elementsContent = [this.iconGem1_i()],
        t
    },
    i.iconGem1_i = function() {
        var t = new eui.Image;
        return this.iconGem1 = t,
        t.horizontalCenter = 0,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "",
        t.verticalCenter = 0,
        t
    },
    i._Group2_i = function() {
        var t = new eui.Group;
        return t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.height = 77,
        t.width = 100,
        t.x = 435,
        t.y = 90,
        t.elementsContent = [this.iconGem2_i()],
        t
    },
    i.iconGem2_i = function() {
        var t = new eui.Image;
        return this.iconGem2 = t,
        t.horizontalCenter = 0,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "",
        t.verticalCenter = 0,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/MarkuppopSkin.exml"] = window.MarkuppopSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["btnClose", "imgMark", "btnUpOne", "btnUpAll", "btnMax", "txt_MarkName", "txtLevel", "txt3", "txt2", "txt", "markUp"],
        this.height = 285,
        this.width = 481,
        this.elementsContent = [this.markUp_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.markUp_i = function() {
        var t = new eui.Group;
        return this.markUp = t,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image1_i(), this._Image2_i(), this.btnClose_i(), this._Image3_i(), this._Image4_i(), this.imgMark_i(), this.btnUpOne_i(), this.btnUpAll_i(), this.btnMax_i(), this.txt_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 285,
        t.source = "common_s9_pop_bg4_png",
        t.visible = !0,
        t.width = 481,
        t.x = 0,
        t.y = 1,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "common_pop_up_bg_m_png",
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t
    },
    i.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.source = "markcenter_help_pop_close_png",
        t.visible = !0,
        t.x = 438,
        t.y = 1,
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "markuppop_kysj_png",
        t.x = 33,
        t.y = 1,
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.source = "markuppop_juxing_10_png",
        t.x = 26,
        t.y = 71,
        t
    },
    i.imgMark_i = function() {
        var t = new eui.Image;
        return this.imgMark = t,
        t.height = 60,
        t.horizontalCenter = -163.5,
        t.verticalCenter = -21,
        t.width = 60,
        t
    },
    i.btnUpOne_i = function() {
        var t = new eui.Image;
        return this.btnUpOne = t,
        t.source = "markuppop_txtlabel_png",
        t.x = 68,
        t.y = 224,
        t
    },
    i.btnUpAll_i = function() {
        var t = new eui.Image;
        return this.btnUpAll = t,
        t.source = "markuppop_txtlabel1_png",
        t.x = 328,
        t.y = 224,
        t
    },
    i.btnMax_i = function() {
        var t = new eui.Image;
        return this.btnMax = t,
        t.source = "markuppop_txtlabel2_png",
        t.x = 198,
        t.y = 224,
        t
    },
    i.txt_i = function() {
        var t = new eui.Group;
        return this.txt = t,
        t.x = 150,
        t.y = 71,
        t.elementsContent = [this.txt_MarkName_i(), this._Label1_i(), this.txtLevel_i(), this._Label2_i(), this.txt3_i(), this._Label3_i(), this.txt2_i()],
        t
    },
    i.txt_MarkName_i = function() {
        var t = new eui.Label;
        return this.txt_MarkName = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "刻印名称名称名称名称名称",
        t.textColor = 4187130,
        t.x = 1,
        t.y = 0,
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "当前刻印等级：",
        t.textColor = 8757203,
        t.x = 1,
        t.y = 30,
        t
    },
    i.txtLevel_i = function() {
        var t = new eui.Label;
        return this.txtLevel = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "0级",
        t.textColor = 12834813,
        t.x = 110,
        t.y = 30,
        t
    },
    i._Label2_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "升至满级需要消耗：",
        t.textColor = 8757203,
        t.x = 0,
        t.y = 87,
        t
    },
    i.txt3_i = function() {
        var t = new eui.Label;
        return this.txt3 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "泰坦之灵*000000",
        t.textColor = 12834813,
        t.x = 140,
        t.y = 87,
        t
    },
    i._Label3_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "升至下1级需要消耗：",
        t.textColor = 8757203,
        t.x = 0,
        t.y = 58,
        t
    },
    i.txt2_i = function() {
        var t = new eui.Label;
        return this.txt2 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "泰坦之灵*000000",
        t.textColor = 12834813,
        t.x = 145,
        t.y = 58,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/MarkUpSkin.exml"] = window.MarkUpSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "btnUpOne", "btnUpAll", "txt1", "txt2"],
        this.height = 210,
        this.width = 442,
        this.elementsContent = [this.bg_i(), this.btnUpOne_i(), this.btnUpAll_i(), this.txt1_i(), this.txt2_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.height = 210,
        t.source = "alert_BG_s_png",
        t.width = 442,
        t.x = 0,
        t.y = 0,
        t
    },
    i.btnUpOne_i = function() {
        var t = new eui.Image;
        return this.btnUpOne = t,
        t.source = "mark_up_btnUpOne_png",
        t.x = 79,
        t.y = 136,
        t
    },
    i.btnUpAll_i = function() {
        var t = new eui.Image;
        return this.btnUpAll = t,
        t.source = "mark_up_btnUpAll_png",
        t.x = 242,
        t.y = 136,
        t
    },
    i.txt1_i = function() {
        var t = new eui.Label;
        return this.txt1 = t,
        t.fontFamily = "黑体",
        t.size = 20,
        t.text = "拥有泰坦之灵：",
        t.textAlign = "center",
        t.textColor = 2500699,
        t.width = 450,
        t.x = -4,
        t.y = 43,
        t
    },
    i.txt2_i = function() {
        var t = new eui.Label;
        return this.txt2 = t,
        t.fontFamily = "黑体",
        t.size = 20,
        t.text = "升级到下一级所需泰坦之灵：",
        t.textAlign = "center",
        t.textColor = 2500699,
        t.width = 450,
        t.x = -4,
        t.y = 77,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/new/GemslectpopSkin.exml"] = window.GemslectpopSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["a1", "btna1", "a2", "btna2", "a3", "btna3", "a4", "btna4", "a5", "btna5", "a6", "btna6", "a7", "btna7", "a8", "btna8", "a9", "btna9", "a10", "btna10", "a11", "btna11", "a12", "btna12", "a13", "btna13", "a14", "btna14", "b", "b1", "btnb1", "b2", "btnb2", "b3", "btnb3", "b4", "btnb4", "b5", "btnb5", "b6", "btnb6", "b7", "btnb7", "b8", "btnb8", "b9", "btnb9", "b10", "btnb10", "b11", "btnb11", "b12", "btnb12", "b13", "btnb13", "b14", "btnb14", "a", "gemrPop"],
        this.height = 278,
        this.width = 508,
        this.elementsContent = [this.gemrPop_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.gemrPop_i = function() {
        var t = new eui.Group;
        return this.gemrPop = t,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image1_i(), this.b_i(), this._Image16_i(), this._Label1_i(), this.a_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 278,
        t.scale9Grid = new egret.Rectangle(15, 15, 15, 15),
        t.source = "gemslectpop_juxing_17_png",
        t.width = 508,
        t.x = 0,
        t.y = 0,
        t
    },
    i.b_i = function() {
        var t = new eui.Scroller;
        return this.b = t,
        t.height = 200,
        t.scrollPolicyH = "off",
        t.visible = !0,
        t.width = 460,
        t.x = 20,
        t.y = 53,
        t.viewport = this._Group1_i(),
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.visible = !0,
        t.x = 41,
        t.y = 69,
        t.layout = this._TileLayout1_i(),
        t.elementsContent = [this.btna1_i(), this.btna2_i(), this.btna3_i(), this.btna4_i(), this.btna5_i(), this.btna6_i(), this.btna7_i(), this.btna8_i(), this.btna9_i(), this.btna10_i(), this.btna11_i(), this.btna12_i(), this.btna13_i(), this.btna14_i()],
        t
    },
    i._TileLayout1_i = function() {
        var t = new eui.TileLayout;
        return t.columnWidth = 146,
        t.paddingLeft = 21,
        t.paddingTop = 16,
        t.requestedColumnCount = 3,
        t.rowHeight = 44,
        t
    },
    i.btna1_i = function() {
        var t = new eui.Group;
        return this.btna1 = t,
        t.cacheAsBitmap = !0,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image2_i(), this.a1_i()],
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "gemslectpop_jx_18_kb_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.a1_i = function() {
        var t = new eui.Label;
        return this.a1 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "所有宝石",
        t.textAlign = "center",
        t.textColor = 16777215,
        t.width = 96,
        t.x = 11,
        t.y = 3,
        t
    },
    i.btna2_i = function() {
        var t = new eui.Group;
        return this.btna2 = t,
        t.cacheAsBitmap = !0,
        t.x = 152,
        t.y = 0,
        t.elementsContent = [this._Image3_i(), this.a2_i()],
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "gemslectpop_jx_18_kb_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.a2_i = function() {
        var t = new eui.Label;
        return this.a2 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "活力维持宝石",
        t.textColor = 16777215,
        t.x = 11,
        t.y = 3,
        t
    },
    i.btna3_i = function() {
        var t = new eui.Group;
        return this.btna3 = t,
        t.cacheAsBitmap = !0,
        t.x = 303,
        t.y = 0,
        t.elementsContent = [this._Image4_i(), this.a3_i()],
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.source = "gemslectpop_jx_18_kb_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.a3_i = function() {
        var t = new eui.Label;
        return this.a3 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "活力消耗宝石",
        t.textColor = 16777215,
        t.x = 11,
        t.y = 3,
        t
    },
    i.btna4_i = function() {
        var t = new eui.Group;
        return this.btna4 = t,
        t.cacheAsBitmap = !0,
        t.x = 0,
        t.y = 49,
        t.elementsContent = [this._Image5_i(), this.a4_i()],
        t
    },
    i._Image5_i = function() {
        var t = new eui.Image;
        return t.source = "gemslectpop_jx_18_kb_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.a4_i = function() {
        var t = new eui.Label;
        return this.a4 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "活力恢复宝石",
        t.textAlign = "center",
        t.textColor = 16777215,
        t.width = 96,
        t.x = 11,
        t.y = 3,
        t
    },
    i.btna5_i = function() {
        var t = new eui.Group;
        return this.btna5 = t,
        t.cacheAsBitmap = !0,
        t.x = 152,
        t.y = 49,
        t.elementsContent = [this._Image6_i(), this.a5_i()],
        t
    },
    i._Image6_i = function() {
        var t = new eui.Image;
        return t.source = "gemslectpop_jx_18_kb_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.a5_i = function() {
        var t = new eui.Label;
        return this.a5 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "追命宝石",
        t.textAlign = "center",
        t.textColor = 16777215,
        t.width = 96,
        t.x = 11,
        t.y = 3,
        t
    },
    i.btna6_i = function() {
        var t = new eui.Group;
        return this.btna6 = t,
        t.cacheAsBitmap = !0,
        t.x = 303,
        t.y = 49,
        t.elementsContent = [this._Image7_i(), this.a6_i()],
        t
    },
    i._Image7_i = function() {
        var t = new eui.Image;
        return t.source = "gemslectpop_jx_18_kb_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.a6_i = function() {
        var t = new eui.Label;
        return this.a6 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "逆命宝石",
        t.textAlign = "center",
        t.textColor = 16777215,
        t.width = 96,
        t.x = 11,
        t.y = 3,
        t
    },
    i.btna7_i = function() {
        var t = new eui.Group;
        return this.btna7 = t,
        t.cacheAsBitmap = !0,
        t.x = 0,
        t.y = 99,
        t.elementsContent = [this._Image8_i(), this.a7_i()],
        t
    },
    i._Image8_i = function() {
        var t = new eui.Image;
        return t.source = "gemslectpop_jx_18_kb_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.a7_i = function() {
        var t = new eui.Label;
        return this.a7 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "绝命宝石",
        t.textAlign = "center",
        t.textColor = 16777215,
        t.width = 96,
        t.x = 11,
        t.y = 3,
        t
    },
    i.btna8_i = function() {
        var t = new eui.Group;
        return this.btna8 = t,
        t.cacheAsBitmap = !0,
        t.x = 152,
        t.y = 99,
        t.elementsContent = [this._Image9_i(), this.a8_i()],
        t
    },
    i._Image9_i = function() {
        var t = new eui.Image;
        return t.source = "gemslectpop_jx_18_kb_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.a8_i = function() {
        var t = new eui.Label;
        return this.a8 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "失明宝石",
        t.textAlign = "center",
        t.textColor = 16777215,
        t.width = 96,
        t.x = 11,
        t.y = 3,
        t
    },
    i.btna9_i = function() {
        var t = new eui.Group;
        return this.btna9 = t,
        t.cacheAsBitmap = !0,
        t.x = 303,
        t.y = 99,
        t.elementsContent = [this._Image10_i(), this.a9_i()],
        t
    },
    i._Image10_i = function() {
        var t = new eui.Image;
        return t.source = "gemslectpop_jx_18_kb_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.a9_i = function() {
        var t = new eui.Label;
        return this.a9 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "失神宝石",
        t.textAlign = "center",
        t.textColor = 16777215,
        t.width = 96,
        t.x = 11,
        t.y = 3,
        t
    },
    i.btna10_i = function() {
        var t = new eui.Group;
        return this.btna10 = t,
        t.cacheAsBitmap = !0,
        t.x = 0,
        t.y = 148,
        t.elementsContent = [this._Image11_i(), this.a10_i()],
        t
    },
    i._Image11_i = function() {
        var t = new eui.Image;
        return t.source = "gemslectpop_jx_18_kb_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.a10_i = function() {
        var t = new eui.Label;
        return this.a10 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "冰封宝石",
        t.textAlign = "center",
        t.textColor = 16777215,
        t.width = 96,
        t.x = 11,
        t.y = 3,
        t
    },
    i.btna11_i = function() {
        var t = new eui.Group;
        return this.btna11 = t,
        t.cacheAsBitmap = !0,
        t.visible = !0,
        t.x = 152,
        t.y = 145,
        t.elementsContent = [this._Image12_i(), this.a11_i()],
        t
    },
    i._Image12_i = function() {
        var t = new eui.Image;
        return t.source = "gemslectpop_jx_18_kb_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.a11_i = function() {
        var t = new eui.Label;
        return this.a11 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "焚烬宝石",
        t.textAlign = "center",
        t.textColor = 16777215,
        t.width = 96,
        t.x = 11,
        t.y = 3,
        t
    },
    i.btna12_i = function() {
        var t = new eui.Group;
        return this.btna12 = t,
        t.cacheAsBitmap = !0,
        t.visible = !0,
        t.x = 162,
        t.y = 155,
        t.elementsContent = [this._Image13_i(), this.a12_i()],
        t
    },
    i._Image13_i = function() {
        var t = new eui.Image;
        return t.source = "gemslectpop_jx_18_kb_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.a12_i = function() {
        var t = new eui.Label;
        return this.a12 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "疾风宝石",
        t.textAlign = "center",
        t.textColor = 16777215,
        t.width = 96,
        t.x = 11,
        t.y = 3,
        t
    },
    i.btna13_i = function() {
        var t = new eui.Group;
        return this.btna13 = t,
        t.cacheAsBitmap = !0,
        t.visible = !0,
        t.x = 172,
        t.y = 165,
        t.elementsContent = [this._Image14_i(), this.a13_i()],
        t
    },
    i._Image14_i = function() {
        var t = new eui.Image;
        return t.source = "gemslectpop_jx_18_kb_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.a13_i = function() {
        var t = new eui.Label;
        return this.a13 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "迅雷宝石",
        t.textAlign = "center",
        t.textColor = 16777215,
        t.width = 96,
        t.x = 11,
        t.y = 3,
        t
    },
    i.btna14_i = function() {
        var t = new eui.Group;
        return this.btna14 = t,
        t.cacheAsBitmap = !0,
        t.visible = !0,
        t.x = 182,
        t.y = 175,
        t.elementsContent = [this._Image15_i(), this.a14_i()],
        t
    },
    i._Image15_i = function() {
        var t = new eui.Image;
        return t.source = "gemslectpop_jx_18_kb_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.a14_i = function() {
        var t = new eui.Label;
        return this.a14 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "真实伤害宝石",
        t.textAlign = "center",
        t.textColor = 16777215,
        t.width = 96,
        t.x = 11,
        t.y = 3,
        t
    },
    i._Image16_i = function() {
        var t = new eui.Image;
        return t.source = "gemslectpop_jx_17_kb_3_png",
        t.x = 9,
        t.y = 9,
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "刻印宝石筛选",
        t.textColor = 12900094,
        t.x = 29,
        t.y = 16,
        t
    },
    i.a_i = function() {
        var t = new eui.Scroller;
        return this.a = t,
        t.height = 200,
        t.scrollPolicyH = "off",
        t.visible = !1,
        t.width = 460,
        t.x = 20,
        t.y = 53,
        t.viewport = this._Group2_i(),
        t
    },
    i._Group2_i = function() {
        var t = new eui.Group;
        return t.visible = !0,
        t.x = 41,
        t.y = 69,
        t.layout = this._TileLayout2_i(),
        t.elementsContent = [this.btnb1_i(), this.btnb2_i(), this.btnb3_i(), this.btnb4_i(), this.btnb5_i(), this.btnb6_i(), this.btnb7_i(), this.btnb8_i(), this.btnb9_i(), this.btnb10_i(), this.btnb11_i(), this.btnb12_i(), this.btnb13_i(), this.btnb14_i()],
        t
    },
    i._TileLayout2_i = function() {
        var t = new eui.TileLayout;
        return t.columnWidth = 146,
        t.paddingLeft = 21,
        t.paddingTop = 16,
        t.requestedColumnCount = 3,
        t.rowHeight = 44,
        t
    },
    i.btnb1_i = function() {
        var t = new eui.Group;
        return this.btnb1 = t,
        t.cacheAsBitmap = !0,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image17_i(), this.b1_i()],
        t
    },
    i._Image17_i = function() {
        var t = new eui.Image;
        return t.source = "gemslectpop_jx_18_kb_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.b1_i = function() {
        var t = new eui.Label;
        return this.b1 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "所有宝石",
        t.textAlign = "center",
        t.textColor = 16777215,
        t.width = 96,
        t.x = 11,
        t.y = 3,
        t
    },
    i.btnb2_i = function() {
        var t = new eui.Group;
        return this.btnb2 = t,
        t.cacheAsBitmap = !0,
        t.x = 152,
        t.y = 0,
        t.elementsContent = [this._Image18_i(), this.b2_i()],
        t
    },
    i._Image18_i = function() {
        var t = new eui.Image;
        return t.source = "gemslectpop_jx_18_kb_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.b2_i = function() {
        var t = new eui.Label;
        return this.b2 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "冻伤宝石",
        t.textAlign = "center",
        t.textColor = 16777215,
        t.width = 96,
        t.x = 11,
        t.y = 3,
        t
    },
    i.btnb3_i = function() {
        var t = new eui.Group;
        return this.btnb3 = t,
        t.cacheAsBitmap = !0,
        t.x = 303,
        t.y = 0,
        t.elementsContent = [this._Image19_i(), this.b3_i()],
        t
    },
    i._Image19_i = function() {
        var t = new eui.Image;
        return t.source = "gemslectpop_jx_18_kb_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.b3_i = function() {
        var t = new eui.Label;
        return this.b3 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "烧伤宝石",
        t.textAlign = "center",
        t.textColor = 16777215,
        t.width = 96,
        t.x = 11,
        t.y = 3,
        t
    },
    i.btnb4_i = function() {
        var t = new eui.Group;
        return this.btnb4 = t,
        t.cacheAsBitmap = !0,
        t.x = 0,
        t.y = 49,
        t.elementsContent = [this._Image20_i(), this.b4_i()],
        t
    },
    i._Image20_i = function() {
        var t = new eui.Image;
        return t.source = "gemslectpop_jx_18_kb_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.b4_i = function() {
        var t = new eui.Label;
        return this.b4 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "中毒宝石",
        t.textAlign = "center",
        t.textColor = 16777215,
        t.width = 96,
        t.x = 11,
        t.y = 3,
        t
    },
    i.btnb5_i = function() {
        var t = new eui.Group;
        return this.btnb5 = t,
        t.cacheAsBitmap = !0,
        t.visible = !0,
        t.x = 152,
        t.y = 49,
        t.elementsContent = [this._Image21_i(), this.b5_i()],
        t
    },
    i._Image21_i = function() {
        var t = new eui.Image;
        return t.source = "gemslectpop_jx_18_kb_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.b5_i = function() {
        var t = new eui.Label;
        return this.b5 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "速度+1宝石",
        t.textAlign = "center",
        t.textColor = 16777215,
        t.visible = !0,
        t.width = 96,
        t.x = 11,
        t.y = 3,
        t
    },
    i.btnb6_i = function() {
        var t = new eui.Group;
        return this.btnb6 = t,
        t.cacheAsBitmap = !0,
        t.x = 303,
        t.y = 49,
        t.elementsContent = [this._Image22_i(), this.b6_i()],
        t
    },
    i._Image22_i = function() {
        var t = new eui.Image;
        return t.source = "gemslectpop_jx_18_kb_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.b6_i = function() {
        var t = new eui.Label;
        return this.b6 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "攻击+1宝石",
        t.textAlign = "center",
        t.textColor = 16777215,
        t.width = 96,
        t.x = 11,
        t.y = 3,
        t
    },
    i.btnb7_i = function() {
        var t = new eui.Group;
        return this.btnb7 = t,
        t.cacheAsBitmap = !0,
        t.x = 0,
        t.y = 99,
        t.elementsContent = [this._Image23_i(), this.b7_i()],
        t
    },
    i._Image23_i = function() {
        var t = new eui.Image;
        return t.source = "gemslectpop_jx_18_kb_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.b7_i = function() {
        var t = new eui.Label;
        return this.b7 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "特攻+1宝石",
        t.textAlign = "center",
        t.textColor = 16777215,
        t.width = 96,
        t.x = 11,
        t.y = 3,
        t
    },
    i.btnb8_i = function() {
        var t = new eui.Group;
        return this.btnb8 = t,
        t.cacheAsBitmap = !0,
        t.x = 152,
        t.y = 99,
        t.elementsContent = [this._Image24_i(), this.b8_i()],
        t
    },
    i._Image24_i = function() {
        var t = new eui.Image;
        return t.source = "gemslectpop_jx_18_kb_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.b8_i = function() {
        var t = new eui.Label;
        return this.b8 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "防御+1宝石",
        t.textAlign = "center",
        t.textColor = 16777215,
        t.width = 96,
        t.x = 11,
        t.y = 3,
        t
    },
    i.btnb9_i = function() {
        var t = new eui.Group;
        return this.btnb9 = t,
        t.cacheAsBitmap = !0,
        t.x = 303,
        t.y = 99,
        t.elementsContent = [this._Image25_i(), this.b9_i()],
        t
    },
    i._Image25_i = function() {
        var t = new eui.Image;
        return t.source = "gemslectpop_jx_18_kb_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.b9_i = function() {
        var t = new eui.Label;
        return this.b9 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "特防+1宝石",
        t.textAlign = "center",
        t.textColor = 16777215,
        t.width = 96,
        t.x = 11,
        t.y = 3,
        t
    },
    i.btnb10_i = function() {
        var t = new eui.Group;
        return this.btnb10 = t,
        t.cacheAsBitmap = !0,
        t.x = 0,
        t.y = 148,
        t.elementsContent = [this._Image26_i(), this.b10_i()],
        t
    },
    i._Image26_i = function() {
        var t = new eui.Image;
        return t.source = "gemslectpop_jx_18_kb_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.b10_i = function() {
        var t = new eui.Label;
        return this.b10 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "固定伤害宝石",
        t.textAlign = "center",
        t.textColor = 16777215,
        t.width = 96,
        t.x = 11,
        t.y = 3,
        t
    },
    i.btnb11_i = function() {
        var t = new eui.Group;
        return this.btnb11 = t,
        t.cacheAsBitmap = !0,
        t.x = 10,
        t.y = 158,
        t.elementsContent = [this._Image27_i(), this.b11_i()],
        t
    },
    i._Image27_i = function() {
        var t = new eui.Image;
        return t.source = "gemslectpop_jx_18_kb_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.b11_i = function() {
        var t = new eui.Label;
        return this.b11 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "致命一击宝石",
        t.textAlign = "center",
        t.textColor = 16777215,
        t.width = 96,
        t.x = 11,
        t.y = 3,
        t
    },
    i.btnb12_i = function() {
        var t = new eui.Group;
        return this.btnb12 = t,
        t.cacheAsBitmap = !0,
        t.x = 20,
        t.y = 168,
        t.elementsContent = [this._Image28_i(), this.b12_i()],
        t
    },
    i._Image28_i = function() {
        var t = new eui.Image;
        return t.source = "gemslectpop_jx_18_kb_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.b12_i = function() {
        var t = new eui.Label;
        return this.b12 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "疲惫宝石",
        t.textAlign = "center",
        t.textColor = 16777215,
        t.width = 96,
        t.x = 11,
        t.y = 3,
        t
    },
    i.btnb13_i = function() {
        var t = new eui.Group;
        return this.btnb13 = t,
        t.cacheAsBitmap = !0,
        t.x = 30,
        t.y = 178,
        t.elementsContent = [this._Image29_i(), this.b13_i()],
        t
    },
    i._Image29_i = function() {
        var t = new eui.Image;
        return t.source = "gemslectpop_jx_18_kb_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.b13_i = function() {
        var t = new eui.Label;
        return this.b13 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "麻痹宝石",
        t.textAlign = "center",
        t.textColor = 16777215,
        t.width = 96,
        t.x = 11,
        t.y = 3,
        t
    },
    i.btnb14_i = function() {
        var t = new eui.Group;
        return this.btnb14 = t,
        t.cacheAsBitmap = !0,
        t.x = 40,
        t.y = 188,
        t.elementsContent = [this._Image30_i(), this.b14_i()],
        t
    },
    i._Image30_i = function() {
        var t = new eui.Image;
        return t.source = "gemslectpop_jx_18_kb_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.b14_i = function() {
        var t = new eui.Label;
        return this.b14 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "威力宝石",
        t.textAlign = "center",
        t.textColor = 16777215,
        t.width = 96,
        t.x = 11,
        t.y = 3,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/new/MainPanelSkin.exml"] = window.MarkcenterMainPanelSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "grp_Container", "menuGroup"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this._Image1_i(), this.grp_Container_i(), this.menuGroup_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.percentHeight = 100,
        t.source = "markcenter_main_panel_bg_jpg",
        t.visible = !0,
        t.percentWidth = 100,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "markcenter_main_panel_top_png",
        t.visible = !1,
        t.x = 0,
        t.y = 0,
        t
    },
    i.grp_Container_i = function() {
        var t = new eui.Group;
        return this.grp_Container = t,
        t.percentHeight = 100,
        t.visible = !0,
        t.percentWidth = 100,
        t
    },
    i.menuGroup_i = function() {
        var t = new eui.Group;
        return this.menuGroup = t,
        t.x = 0,
        t.y = 48,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/new/MarkcenterGemPanelSkin.exml"] = window.MarkcenterGemPanelSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "empty_tip", "_list", "_scroller", "rb_1", "rb_2", "rb_3", "rbtop", "pageGemContent", "rightbg", "t", "btnUp", "btnRong", "btnFen", "btnChong", "iconBg", "txtCount", "txtName", "imgGem", "txtLvl", "detail", "qxzkybs", "none", "gemInfo", "txtSearch", "imgSearch", "imgBack", "search", "selectName", "btnSelect", "_right", "txtCoin2", "coinIcon", "righttop"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this.empty_tip_i(), this.pageGemContent_i(), this._right_i(), this.righttop_i()]
    }
    __extends(e, t);
    var i = function(t) {
        function e() {
            t.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i()],
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "markcenter_mark_set_btnerup_png")]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t.percentHeight = 100,
            t.source = "markcenter_mark_set_btnerdown_png",
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
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "markcenter_mark_set_btnyiup_png")]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t.percentHeight = 100,
            t.source = "markcenter_mark_set_btnyidown_png",
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
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "markcenter_gem_panel_btn3up_png")]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t.percentHeight = 100,
            t.source = "markcenter_gem_panel_btn3down_png",
            t.percentWidth = 100,
            t
        },
        e
    } (eui.Skin),
    a = function(t) {
        function e() {
            t.call(this),
            this.skinParts = ["textDisplay", "promptDisplay"],
            this.minHeight = 33,
            this.minWidth = 300,
            this.elementsContent = [this.textDisplay_i()],
            this.promptDisplay_i(),
            this.states = [new eui.State("normal", []), new eui.State("disabled", [new eui.SetProperty("textDisplay", "textColor", 16711680)]), new eui.State("normalWithPrompt", [new eui.AddItems("promptDisplay", "", 1, "")]), new eui.State("disabledWithPrompt", [new eui.AddItems("promptDisplay", "", 1, "")])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i.textDisplay_i = function() {
            var t = new eui.EditableText;
            return this.textDisplay = t,
            t.fontFamily = "MFShangHei",
            t.height = 24,
            t.left = "10",
            t.right = "10",
            t.size = 18,
            t.textColor = 16777215,
            t.verticalCenter = "0",
            t.percentWidth = 100,
            t
        },
        i.promptDisplay_i = function() {
            var t = new eui.Label;
            return this.promptDisplay = t,
            t.alpha = .8,
            t.fontFamily = "MFShangHei",
            t.height = 24,
            t.left = 10,
            t.right = 10,
            t.size = 18,
            t.textColor = 4215416,
            t.touchEnabled = !1,
            t.verticalCenter = 1,
            t.percentWidth = 100,
            t
        },
        e
    } (eui.Skin),
    s = e.prototype;
    return s.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.source = "markcenter_main_panel_bg_jpg",
        t.visible = !1,
        t.x = 0,
        t.y = 0,
        t
    },
    s.empty_tip_i = function() {
        var t = new eui.Image;
        return this.empty_tip = t,
        t.horizontalCenter = 25.5,
        t.source = "markcenter_mark_panel_empty_tip_png",
        t.visible = !0,
        t.y = 250,
        t
    },
    s.pageGemContent_i = function() {
        var t = new eui.Group;
        return this.pageGemContent = t,
        t.visible = !0,
        t.x = 171,
        t.y = 64,
        t.elementsContent = [this._scroller_i(), this.rbtop_i()],
        t
    },
    s._scroller_i = function() {
        var t = new eui.Scroller;
        return this._scroller = t,
        t.height = 500,
        t.scrollPolicyH = "off",
        t.width = 600,
        t.x = 0,
        t.y = 41,
        t.viewport = this._list_i(),
        t
    },
    s._list_i = function() {
        var t = new eui.List;
        return this._list = t,
        t.visible = !0,
        t.layout = this._TileLayout1_i(),
        t
    },
    s._TileLayout1_i = function() {
        var t = new eui.TileLayout;
        return t.horizontalGap = 0,
        t.orientation = "rows",
        t.requestedColumnCount = 5,
        t
    },
    s.rbtop_i = function() {
        var t = new eui.Group;
        return this.rbtop = t,
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this.rb_1_i(), this.rb_2_i(), this.rb_3_i()],
        t
    },
    s.rb_1_i = function() {
        var t = new eui.RadioButton;
        return this.rb_1 = t,
        t.groupName = "gem_tab",
        t.value = "1",
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t.skinName = i,
        t
    },
    s.rb_2_i = function() {
        var t = new eui.RadioButton;
        return this.rb_2 = t,
        t.groupName = "gem_tab",
        t.value = "2",
        t.visible = !0,
        t.x = 100,
        t.y = 0,
        t.skinName = n,
        t
    },
    s.rb_3_i = function() {
        var t = new eui.RadioButton;
        return this.rb_3 = t,
        t.groupName = "gem_tab",
        t.value = "3",
        t.visible = !0,
        t.x = 200,
        t.y = 0,
        t.skinName = r,
        t
    },
    s._right_i = function() {
        var t = new eui.Group;
        return this._right = t,
        t.right = 16,
        t.visible = !0,
        t.y = 108,
        t.elementsContent = [this.gemInfo_i(), this.search_i(), this.btnSelect_i()],
        t
    },
    s.gemInfo_i = function() {
        var t = new eui.Group;
        return this.gemInfo = t,
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this.rightbg_i(), this.detail_i(), this.none_i()],
        t
    },
    s.rightbg_i = function() {
        var t = new eui.Image;
        return this.rightbg = t,
        t.source = "markcenter_mark_panel_info_bg_png",
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t
    },
    s.detail_i = function() {
        var t = new eui.Group;
        return this.detail = t,
        t.visible = !0,
        t.x = 5,
        t.y = 0,
        t.elementsContent = [this.t_i(), this.btnUp_i(), this.btnRong_i(), this.btnFen_i(), this.btnChong_i(), this._Image1_i(), this._Group1_i()],
        t
    },
    s.t_i = function() {
        var t = new eui.Label;
        return this.t = t,
        t.fontFamily = "MFShangHei",
        t.height = 64,
        t.size = 16,
        t.text = "漫长宇宙航行中收获的珍贵收藏品，记录\n着我们一路航行来的记忆。漫长宇宙航行\n中收获的珍贵收藏品，记录着我们一路航\n行来的记忆。",
        t.textColor = 8757203,
        t.width = 288,
        t.x = 29,
        t.y = 116,
        t
    },
    s.btnUp_i = function() {
        var t = new eui.Image;
        return this.btnUp = t,
        t.source = "markcenter_mark_panel_imglvlup_png",
        t.x = 55,
        t.y = 455,
        t
    },
    s.btnRong_i = function() {
        var t = new eui.Image;
        return this.btnRong = t,
        t.source = "markcenter_gem_panel_btnRong_png",
        t.x = 128,
        t.y = 455,
        t
    },
    s.btnFen_i = function() {
        var t = new eui.Image;
        return this.btnFen = t,
        t.source = "markcenter_gem_panel_btnfen_png",
        t.x = 202,
        t.y = 455,
        t
    },
    s.btnChong_i = function() {
        var t = new eui.Image;
        return this.btnChong = t,
        t.source = "markcenter_gem_panel_btnChong_png",
        t.x = 128,
        t.y = 455,
        t
    },
    s._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "markcenter_mark_panel_detailline_png",
        t.x = 7,
        t.y = 104,
        t
    },
    s._Group1_i = function() {
        var t = new eui.Group;
        return t.visible = !0,
        t.width = 310,
        t.x = 29,
        t.y = 16,
        t.elementsContent = [this.iconBg_i(), this.txtCount_i(), this.txtName_i(), this.imgGem_i(), this.txtLvl_i()],
        t
    },
    s.iconBg_i = function() {
        var t = new eui.Image;
        return this.iconBg = t,
        t.source = "markcenter_mark_panel_iconbg_png",
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t
    },
    s.txtCount_i = function() {
        var t = new eui.Label;
        return this.txtCount = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "拥有：",
        t.textColor = 8164328,
        t.x = 84,
        t.y = 28,
        t
    },
    s.txtName_i = function() {
        var t = new eui.Label;
        return this.txtName = t,
        t.fontFamily = "MFShangHei",
        t.height = 20,
        t.size = 18,
        t.text = "刻印名称刻印名称名称\n",
        t.textAlign = "left",
        t.textColor = 16774548,
        t.verticalAlign = "middle",
        t.width = 225,
        t.x = 85,
        t.y = 0,
        t
    },
    s.imgGem_i = function() {
        var t = new eui.Image;
        return this.imgGem = t,
        t.height = 55,
        t.width = 55,
        t.x = 10,
        t.y = 10,
        t
    },
    s.txtLvl_i = function() {
        var t = new eui.Label;
        return this.txtLvl = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.stroke = 1,
        t.strokeColor = 1320013,
        t.text = "LV.0",
        t.textColor = 16777215,
        t.x = 2,
        t.y = 52,
        t
    },
    s.none_i = function() {
        var t = new eui.Group;
        return this.none = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.visible = !0,
        t.x = 80,
        t.y = 177,
        t.elementsContent = [this._Image2_i(), this.qxzkybs_i()],
        t
    },
    s._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "markcenter_mark_panel_baoshi_png",
        t.visible = !0,
        t.x = 55,
        t.y = 0,
        t
    },
    s.qxzkybs_i = function() {
        var t = new eui.Label;
        return this.qxzkybs = t,
        t.fontFamily = "MFShangHei",
        t.size = 22,
        t.text = "请选择宝石或材料",
        t.textAlign = "center",
        t.textColor = 9547255,
        t.width = 190,
        t.x = 0,
        t.y = 103,
        t
    },
    s.search_i = function() {
        var t = new eui.Group;
        return this.search = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.visible = !0,
        t.x = 179,
        t.y = -46,
        t.elementsContent = [this._Image3_i(), this.txtSearch_i(), this.imgSearch_i(), this.imgBack_i()],
        t
    },
    s._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "markcenter_mark_panel_searchbg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    s.txtSearch_i = function() {
        var t = new eui.TextInput;
        return this.txtSearch = t,
        t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.height = 19,
        t.maxChars = 20,
        t.prompt = "输入物品名称",
        t.width = 130,
        t.x = 0,
        t.y = 7,
        t.skinName = a,
        t
    },
    s.imgSearch_i = function() {
        var t = new eui.Image;
        return this.imgSearch = t,
        t.source = "markcenter_mark_panel_btnsearch_png",
        t.x = 132,
        t.y = 0,
        t
    },
    s.imgBack_i = function() {
        var t = new eui.Image;
        return this.imgBack = t,
        t.source = "markcenter_mark_panel_btnBack_png",
        t.x = 132,
        t.y = 0,
        t
    },
    s.btnSelect_i = function() {
        var t = new eui.Group;
        return this.btnSelect = t,
        t.width = 100,
        t.x = 70,
        t.y = -46,
        t.elementsContent = [this._Image4_i(), this.selectName_i()],
        t
    },
    s._Image4_i = function() {
        var t = new eui.Image;
        return t.left = 0,
        t.right = 0,
        t.scale9Grid = new egret.Rectangle(21, 12, 8, 5),
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "markcenter_mark_panel_btnSelect_png",
        t.visible = !0,
        t.y = 0,
        t
    },
    s.selectName_i = function() {
        var t = new eui.Label;
        return this.selectName = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = 0,
        t.left = -10,
        t.right = 0,
        t.size = 18,
        t.text = "筛选",
        t.textAlign = "center",
        t.textColor = 16777215,
        t.visible = !0,
        t.y = 5,
        t
    },
    s.righttop_i = function() {
        var t = new eui.Group;
        return this.righttop = t,
        t.right = 20,
        t.visible = !0,
        t.y = 11,
        t.elementsContent = [this._Image5_i(), this.txtCoin2_i(), this.coinIcon_i()],
        t
    },
    s._Image5_i = function() {
        var t = new eui.Image;
        return t.source = "markcenter_mark_panel_img_di2_png",
        t.x = 10,
        t.y = 5,
        t
    },
    s.txtCoin2_i = function() {
        var t = new eui.Label;
        return this.txtCoin2 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "9999999",
        t.textColor = 12834813,
        t.x = 62,
        t.y = 6,
        t
    },
    s.coinIcon_i = function() {
        var t = new eui.Image;
        return this.coinIcon = t,
        t.height = 30,
        t.width = 30,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/new/SetHSliderSkin.exml"] = window.SetHSliderSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["track", "trackHighlight", "thumb"],
        this.height = 14,
        this.width = 235,
        this.elementsContent = [this.track_i(), this.trackHighlight_i(), this.thumb_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.track_i = function() {
        var t = new eui.Image;
        return this.track = t,
        t.height = 14,
        t.source = "markcenter_gemUpPop_barbg_png",
        t.visible = !0,
        t.width = 235,
        t
    },
    i.trackHighlight_i = function() {
        var t = new eui.Image;
        return this.trackHighlight = t,
        t.height = 13,
        t.scale9Grid = new egret.Rectangle(37, 4, 37, 5),
        t.source = "markcenter_gemUpPop_progressBar_png",
        t.visible = !0,
        t.width = 111,
        t
    },
    i.thumb_i = function() {
        var t = new eui.Image;
        return this.thumb = t,
        t.height = 29,
        t.source = "markcenter_gemUpPop_Slider_png",
        t.visible = !0,
        t.width = 21,
        t.x = 106,
        t.y = -7,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/new/MarkcenterGemUpPopSkin.exml"] = window.MarkcenterGemUpPopSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["btnClose", "txtbtnName", "btn", "title", "iconBg", "icon", "iconNum", "txtUpNeed", "txtUpResult", "txtGemName", "txtNum", "btnJia", "btnJian", "slider", "buySlider", "upNum", "gemuppop"],
        this.height = 290,
        this.width = 481,
        this.elementsContent = [this.gemuppop_i()]
    }
    __extends(e, t);
    var i = function(t) {
        function e() {
            t.call(this),
            this.skinParts = ["track", "trackHighlight", "thumb"],
            this.maxWidth = 240,
            this.minHeight = 21,
            this.minWidth = 0,
            this.elementsContent = [this.track_i(), this.trackHighlight_i(), this.thumb_i()]
        }
        __extends(e, t);
        var i = e.prototype;
        return i.track_i = function() {
            var t = new eui.Image;
            return this.track = t,
            t.height = 14,
            t.source = "markcenter_gemUpPop_barbg_png",
            t.verticalCenter = -2.5,
            t.visible = !0,
            t.width = 235,
            t
        },
        i.trackHighlight_i = function() {
            var t = new eui.Image;
            return this.trackHighlight = t,
            t.anchorOffsetX = 0,
            t.anchorOffsetY = 0,
            t.scale9Grid = new egret.Rectangle(37, 4, 37, 5),
            t.source = "markcenter_gemUpPop_progressBar_png",
            t.visible = !0,
            t.width = 100,
            t.x = 0,
            t.y = 6,
            t
        },
        i.thumb_i = function() {
            var t = new eui.Image;
            return this.thumb = t,
            t.source = "markcenter_gemUpPop_Slider_png",
            t.visible = !0,
            t.x = 50,
            t.y = -2,
            t
        },
        e
    } (eui.Skin),
    n = e.prototype;
    return n.gemuppop_i = function() {
        var t = new eui.Group;
        return this.gemuppop = t,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image1_i(), this._Image2_i(), this.btnClose_i(), this.btn_i(), this.title_i(), this.iconBg_i(), this.icon_i(), this.iconNum_i(), this.txtUpNeed_i(), this.txtUpResult_i(), this.txtGemName_i(), this.upNum_i()],
        t
    },
    n._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 285,
        t.source = "common_s9_pop_bg4_png",
        t.visible = !0,
        t.width = 481,
        t.x = 0,
        t.y = 1,
        t
    },
    n._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 34,
        t.source = "common_pop_up_bg_m_png",
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t
    },
    n.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.source = "markcenter_mark_set_close_png",
        t.x = 438,
        t.y = 0,
        t
    },
    n.btn_i = function() {
        var t = new eui.Group;
        return this.btn = t,
        t.x = 173,
        t.y = 225,
        t.elementsContent = [this._Image3_i(), this.txtbtnName_i()],
        t
    },
    n._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "markcenter_gem_up_pop_txt_pethecheng_png",
        t.x = 0,
        t.y = 0,
        t
    },
    n.txtbtnName_i = function() {
        var t = new eui.Label;
        return this.txtbtnName = t,
        t.fontFamily = "MFShangHei",
        t.size = 20.0112789021868,
        t.text = "升 级",
        t.textColor = 10180889,
        t.x = 43,
        t.y = 15,
        t
    },
    n.title_i = function() {
        var t = new eui.Image;
        return this.title = t,
        t.source = "markcenter_gem_up_pop_title1_png",
        t.visible = !0,
        t.x = 27,
        t.y = 0,
        t
    },
    n.iconBg_i = function() {
        var t = new eui.Image;
        return this.iconBg = t,
        t.height = 101,
        t.source = "markcenter_mark_set_zu_38_png",
        t.visible = !0,
        t.width = 101,
        t.x = 24,
        t.y = 58,
        t
    },
    n.icon_i = function() {
        var t = new eui.Image;
        return this.icon = t,
        t.height = 55,
        t.width = 55,
        t.x = 50,
        t.y = 79,
        t
    },
    n.iconNum_i = function() {
        var t = new eui.Label;
        return this.iconNum = t,
        t.fontFamily = "MFShangHei",
        t.height = 18,
        t.size = 18,
        t.text = "45555555",
        t.textAlign = "right",
        t.textColor = 13820671,
        t.width = 80,
        t.x = 40,
        t.y = 136,
        t
    },
    n.txtUpNeed_i = function() {
        var t = new eui.Label;
        return this.txtUpNeed = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "需要消耗：冻伤宝石Lv5*5",
        t.textColor = 8757203,
        t.x = 147,
        t.y = 122,
        t
    },
    n.txtUpResult_i = function() {
        var t = new eui.Label;
        return this.txtUpResult = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "升级结果：冻伤宝石Lv5",
        t.textColor = 8757203,
        t.visible = !0,
        t.x = 147,
        t.y = 98,
        t
    },
    n.txtGemName_i = function() {
        var t = new eui.Label;
        return this.txtGemName = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "冻伤宝石Lv4",
        t.textColor = 13820671,
        t.x = 148,
        t.y = 62,
        t
    },
    n.upNum_i = function() {
        var t = new eui.Group;
        return this.upNum = t,
        t.x = 78,
        t.y = 167,
        t.elementsContent = [this.txtNum_i(), this.btnJia_i(), this.btnJian_i(), this.slider_i(), this.buySlider_i()],
        t
    },
    n.txtNum_i = function() {
        var t = new eui.Label;
        return this.txtNum = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "数量：999",
        t.textColor = 4187130,
        t.visible = !0,
        t.x = 125,
        t.y = 0,
        t
    },
    n.btnJia_i = function() {
        var t = new eui.Image;
        return this.btnJia = t,
        t.source = "markcenter_gem_up_pop_btnjia_png",
        t.x = 293,
        t.y = 19,
        t
    },
    n.btnJian_i = function() {
        var t = new eui.Image;
        return this.btnJian = t,
        t.source = "markcenter_gem_up_pop_btnjian_png",
        t.visible = !0,
        t.x = 0,
        t.y = 19,
        t
    },
    n.slider_i = function() {
        var t = new eui.HSlider;
        return this.slider = t,
        t.maxWidth = 240,
        t.minHeight = 21,
        t.minWidth = 0,
        t.visible = !1,
        t.width = 240,
        t.x = 44,
        t.y = 20,
        t.skinName = i,
        t
    },
    n.buySlider_i = function() {
        var t = new TMHSlider;
        return this.buySlider = t,
        t.height = 20,
        t.skinName = "SetHSliderSkin",
        t.width = 240,
        t.x = 44,
        t.y = 25,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/new/MarkcenterHelpPopSkin.exml"] = window.MarkcenterHelpPopSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["btnClose", "rb1", "rb2", "rb3", "left", "_list", "_scrol", "page2", "page1", "page3"],
        this.height = 434,
        this.width = 753,
        this.elementsContent = [this._Image1_i(), this._Image2_i(), this._Image3_i(), this.btnClose_i(), this._Image4_i(), this.left_i(), this.page2_i(), this.page1_i(), this.page3_i()]
    }
    __extends(e, t);
    var i = function(t) {
        function e() {
            t.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i()],
            this._Rect1_i(),
            this.states = [new eui.State("up", [new eui.AddItems("_Rect1", "", 0, ""), new eui.SetProperty("_Image1", "source", "markcenter_help_pop_rb1down_png"), new eui.SetProperty("_Image1", "visible", !0), new eui.SetProperty("_Image1", "y", 21), new eui.SetProperty("_Image1", "x", 45)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "markcenter_help_pop_rb1up_png"), new eui.SetProperty("_Image1", "x", 1)])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Rect1_i = function() {
            var t = new eui.Rect;
            return this._Rect1 = t,
            t.alpha = 0,
            t.height = 60,
            t.percentWidth = 100,
            t.percentWidth = 100,
            t
        },
        i._Image1_i = function() {
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
            this._Rect1_i(),
            this.states = [new eui.State("up", [new eui.AddItems("_Rect1", "", 0, ""), new eui.SetProperty("_Image1", "source", "markcenter_help_pop_rb2down_png"), new eui.SetProperty("_Image1", "visible", !0), new eui.SetProperty("_Image1", "y", 21), new eui.SetProperty("_Image1", "x", 45)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "markcenter_help_pop_rb2up_png")])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Rect1_i = function() {
            var t = new eui.Rect;
            return this._Rect1 = t,
            t.alpha = 0,
            t.height = 60,
            t.percentWidth = 100,
            t.percentWidth = 100,
            t
        },
        i._Image1_i = function() {
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
            this._Rect1_i(),
            this.states = [new eui.State("up", [new eui.AddItems("_Rect1", "", 0, ""), new eui.SetProperty("_Image1", "source", "markcenter_help_pop_rb3down_png"), new eui.SetProperty("_Image1", "visible", !0), new eui.SetProperty("_Image1", "y", 21), new eui.SetProperty("_Image1", "x", 45)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "markcenter_help_pop_rb3up_png"), new eui.SetProperty("_Image1", "y", -1)])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Rect1_i = function() {
            var t = new eui.Rect;
            return this._Rect1 = t,
            t.alpha = 0,
            t.height = 60,
            t.percentWidth = 100,
            t.percentWidth = 100,
            t
        },
        i._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t
        },
        e
    } (eui.Skin),
    a = e.prototype;
    return a._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 430,
        t.source = "common_s9_pop_bg4_png",
        t.visible = !0,
        t.width = 753,
        t.x = 0,
        t.y = 1,
        t
    },
    a._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 34,
        t.source = "common_pop_up_bg_big_png",
        t.visible = !0,
        t.width = 748,
        t.x = 0,
        t.y = 0,
        t
    },
    a._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "markcenter_help_pop_title_png",
        t.visible = !0,
        t.x = 31,
        t.y = -5,
        t
    },
    a.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.source = "markcenter_help_pop_close_png",
        t.visible = !0,
        t.x = 712,
        t.y = 0,
        t
    },
    a._Image4_i = function() {
        var t = new eui.Image;
        return t.scale9Grid = new egret.Rectangle(6, 130, 155, 131),
        t.source = "markcenter_help_pop_left_di_png",
        t.visible = !0,
        t.x = 0,
        t.y = 37,
        t
    },
    a.left_i = function() {
        var t = new eui.Group;
        return this.left = t,
        t.visible = !0,
        t.x = 0,
        t.y = 48,
        t.elementsContent = [this.rb1_i(), this.rb2_i(), this.rb3_i()],
        t
    },
    a.rb1_i = function() {
        var t = new eui.RadioButton;
        return this.rb1 = t,
        t.groupName = "help_tab",
        t.height = 60,
        t.value = "1",
        t.width = 170,
        t.x = 0,
        t.y = 0,
        t.skinName = i,
        t
    },
    a.rb2_i = function() {
        var t = new eui.RadioButton;
        return this.rb2 = t,
        t.groupName = "help_tab",
        t.value = "2",
        t.width = 170,
        t.x = 0,
        t.y = 64,
        t.skinName = n,
        t
    },
    a.rb3_i = function() {
        var t = new eui.RadioButton;
        return this.rb3 = t,
        t.groupName = "help_tab",
        t.value = "3",
        t.width = 170,
        t.x = 0,
        t.y = 128,
        t.skinName = r,
        t
    },
    a.page2_i = function() {
        var t = new eui.Group;
        return this.page2 = t,
        t.visible = !0,
        t.x = 176,
        t.y = 44,
        t.elementsContent = [this._Image5_i(), this._scrol_i()],
        t
    },
    a._Image5_i = function() {
        var t = new eui.Image;
        return t.height = 366,
        t.source = "markcenter_help_pop_contentbg_kb_png",
        t.visible = !0,
        t.width = 565,
        t.x = 0,
        t.y = 0,
        t
    },
    a._scrol_i = function() {
        var t = new eui.Scroller;
        return this._scrol = t,
        t.height = 366,
        t.width = 565,
        t.viewport = this._list_i(),
        t
    },
    a._list_i = function() {
        var t = new eui.List;
        return this._list = t,
        t
    },
    a.page1_i = function() {
        var t = new eui.Group;
        return this.page1 = t,
        t.visible = !1,
        t.x = 173,
        t.y = 44,
        t.elementsContent = [this._Image6_i()],
        t
    },
    a._Image6_i = function() {
        var t = new eui.Image;
        return t.source = "markcenter_help_pop_zu_28_png",
        t.x = 0,
        t.y = 0,
        t
    },
    a.page3_i = function() {
        var t = new eui.Group;
        return this.page3 = t,
        t.visible = !1,
        t.x = 173,
        t.y = 44,
        t.elementsContent = [this._Image7_i()],
        t
    },
    a._Image7_i = function() {
        var t = new eui.Image;
        return t.source = "markcenter_help_pop_page3_png",
        t.x = 0,
        t.y = 0,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/new/MarkcenterMarkPanelSkin.exml"] = window.MarkcenterMarkPanelSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["empty_tip", "_list", "_scroller", "markContent", "rb_1", "rb_2", "rb_3", "rb_4", "rbtop", "pageMarkContet", "qxzkybs", "none", "imgDecompose", "imgLvlup", "imgGemCenter", "buttons", "txtAttr_0", "txtAttr_1", "txtAttr_2", "txtAttr_3", "txtAttr_4", "txtAttr_5", "ycsx", "txtAttrHide_0", "txtAttrHide_1", "txtAttrHide_2", "txtAttrHide_3", "txtAttrHide_4", "txtAttrHide_5", "grpHideAttrTxt", "txtNoHideAttr", "grp_hidenAttr", "item_bg", "bindGemIcon", "tx_gemstone_tile", "txtGemName", "tx_gemstoneDes", "png_detailLine_2", "tx_no_gemstone", "gr_add_gemstone", "wenzi", "iconBg", "txtPet", "txtNoGem", "txtMintMarkclassName", "txtName", "imgMark", "txtLvl", "info", "markInfo", "txtSearch", "imgSearch", "imgBack", "search", "selectName", "btnSelect", "group_right", "txtCoin2", "coinIcon", "righttop"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.empty_tip_i(), this.pageMarkContet_i(), this.group_right_i(), this.righttop_i()]
    }
    __extends(e, t);
    var i = function(t) {
        function e() {
            t.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i()],
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "markcenter_mark_panel_btn1up_png")]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t.percentHeight = 100,
            t.source = "markcenter_mark_panel_btn1down_png",
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
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "markcenter_mark_panel_btn2up_png")]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t.percentHeight = 100,
            t.source = "markcenter_mark_panel_btn2down_png",
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
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "markcenter_mark_panel_btn3up_png")]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t.percentHeight = 100,
            t.source = "markcenter_mark_panel_btn3down_png",
            t.percentWidth = 100,
            t
        },
        e
    } (eui.Skin),
    a = function(t) {
        function e() {
            t.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i()],
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "markcenter_mark_panel_btn4up_png")]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t.percentHeight = 100,
            t.source = "markcenter_mark_panel_btn4down_png",
            t.percentWidth = 100,
            t
        },
        e
    } (eui.Skin),
    s = function(t) {
        function e() {
            t.call(this),
            this.skinParts = ["textDisplay", "promptDisplay"],
            this.minHeight = 33,
            this.minWidth = 300,
            this.elementsContent = [this.textDisplay_i()],
            this.promptDisplay_i(),
            this.states = [new eui.State("normal", []), new eui.State("disabled", [new eui.SetProperty("textDisplay", "textColor", 16711680)]), new eui.State("normalWithPrompt", [new eui.AddItems("promptDisplay", "", 1, "")]), new eui.State("disabledWithPrompt", [new eui.AddItems("promptDisplay", "", 1, "")])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i.textDisplay_i = function() {
            var t = new eui.EditableText;
            return this.textDisplay = t,
            t.fontFamily = "MFShangHei",
            t.height = 24,
            t.left = "10",
            t.right = "10",
            t.size = 18,
            t.textColor = 16777215,
            t.verticalCenter = "0",
            t.percentWidth = 100,
            t
        },
        i.promptDisplay_i = function() {
            var t = new eui.Label;
            return this.promptDisplay = t,
            t.alpha = .8,
            t.fontFamily = "MFShangHei",
            t.height = 24,
            t.left = 10,
            t.right = 10,
            t.size = 18,
            t.textColor = 4215416,
            t.touchEnabled = !1,
            t.verticalCenter = 1,
            t.percentWidth = 100,
            t
        },
        e
    } (eui.Skin),
    o = e.prototype;
    return o.empty_tip_i = function() {
        var t = new eui.Image;
        return this.empty_tip = t,
        t.horizontalCenter = 25.5,
        t.source = "markcenter_mark_panel_empty_tip_png",
        t.visible = !1,
        t.y = 250,
        t
    },
    o.pageMarkContet_i = function() {
        var t = new eui.Group;
        return this.pageMarkContet = t,
        t.visible = !0,
        t.x = 171,
        t.y = 64,
        t.elementsContent = [this.markContent_i(), this.rbtop_i()],
        t
    },
    o.markContent_i = function() {
        var t = new eui.Group;
        return this.markContent = t,
        t.visible = !0,
        t.x = 0,
        t.y = 41,
        t.elementsContent = [this._scroller_i()],
        t
    },
    o._scroller_i = function() {
        var t = new eui.Scroller;
        return this._scroller = t,
        t.height = 500,
        t.scrollPolicyH = "off",
        t.width = 600,
        t.x = 0,
        t.y = 0,
        t.viewport = this._list_i(),
        t
    },
    o._list_i = function() {
        var t = new eui.List;
        return this._list = t,
        t.visible = !0,
        t.layout = this._TileLayout1_i(),
        t
    },
    o._TileLayout1_i = function() {
        var t = new eui.TileLayout;
        return t.horizontalGap = 0,
        t.orientation = "rows",
        t.requestedColumnCount = 5,
        t
    },
    o.rbtop_i = function() {
        var t = new eui.Group;
        return this.rbtop = t,
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this.rb_1_i(), this.rb_2_i(), this.rb_3_i(), this.rb_4_i()],
        t
    },
    o.rb_1_i = function() {
        var t = new eui.RadioButton;
        return this.rb_1 = t,
        t.groupName = "mark_tab",
        t.value = "1",
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t.skinName = i,
        t
    },
    o.rb_2_i = function() {
        var t = new eui.RadioButton;
        return this.rb_2 = t,
        t.groupName = "mark_tab",
        t.value = "2",
        t.visible = !0,
        t.x = 102,
        t.y = 0,
        t.skinName = n,
        t
    },
    o.rb_3_i = function() {
        var t = new eui.RadioButton;
        return this.rb_3 = t,
        t.groupName = "mark_tab",
        t.value = "3",
        t.visible = !0,
        t.x = 205,
        t.y = 0,
        t.skinName = r,
        t
    },
    o.rb_4_i = function() {
        var t = new eui.RadioButton;
        return this.rb_4 = t,
        t.groupName = "mark_tab",
        t.value = "4",
        t.visible = !0,
        t.x = 308,
        t.y = 0,
        t.skinName = a,
        t
    },
    o.group_right_i = function() {
        var t = new eui.Group;
        return this.group_right = t,
        t.right = 16,
        t.visible = !0,
        t.y = 108,
        t.elementsContent = [this.markInfo_i(), this.search_i(), this.btnSelect_i()],
        t
    },
    o.markInfo_i = function() {
        var t = new eui.Group;
        return this.markInfo = t,
        t.cacheAsBitmap = !0,
        t.right = 0,
        t.visible = !0,
        t.y = 0,
        t.elementsContent = [this._Image1_i(), this.none_i(), this.info_i()],
        t
    },
    o._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "markcenter_mark_panel_info_bg_png",
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t
    },
    o.none_i = function() {
        var t = new eui.Group;
        return this.none = t,
        t.visible = !1,
        t.x = 94,
        t.y = 177,
        t.elementsContent = [this._Image2_i(), this.qxzkybs_i()],
        t
    },
    o._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "markcenter_mark_panel_keyin_png",
        t.visible = !0,
        t.x = 35,
        t.y = 0,
        t
    },
    o.qxzkybs_i = function() {
        var t = new eui.Label;
        return this.qxzkybs = t,
        t.fontFamily = "MFShangHei",
        t.size = 22,
        t.text = "请选择刻印",
        t.textAlign = "center",
        t.textColor = 9547255,
        t.width = 154,
        t.x = 0,
        t.y = 103,
        t
    },
    o.info_i = function() {
        var t = new eui.Group;
        return this.info = t,
        t.visible = !0,
        t.x = 7,
        t.y = 16,
        t.elementsContent = [this.buttons_i(), this.wenzi_i(), this._Group3_i()],
        t
    },
    o.buttons_i = function() {
        var t = new eui.Group;
        return this.buttons = t,
        t.x = 11,
        t.y = 448,
        t.elementsContent = [this.imgDecompose_i(), this.imgLvlup_i(), this.imgGemCenter_i()],
        t
    },
    o.imgDecompose_i = function() {
        var t = new eui.Image;
        return this.imgDecompose = t,
        t.source = "markcenter_mark_panel_imgdecompose_png",
        t.x = 0,
        t.y = 0,
        t
    },
    o.imgLvlup_i = function() {
        var t = new eui.Image;
        return this.imgLvlup = t,
        t.source = "markcenter_mark_panel_imglvlup_png",
        t.x = 110,
        t.y = 0,
        t
    },
    o.imgGemCenter_i = function() {
        var t = new eui.Image;
        return this.imgGemCenter = t,
        t.source = "markcenter_mark_panel_imggemcenter_png",
        t.x = 221,
        t.y = 0,
        t
    },
    o.wenzi_i = function() {
        var t = new eui.Group;
        return this.wenzi = t,
        t.x = 0,
        t.y = 88,
        t.elementsContent = [this._Label1_i(), this._Group1_i(), this._Image3_i(), this.grp_hidenAttr_i(), this.gr_add_gemstone_i()],
        t
    },
    o._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "刻印属性",
        t.textColor = 16777215,
        t.x = 110,
        t.y = 13,
        t
    },
    o._Group1_i = function() {
        var t = new eui.Group;
        return t.x = 20,
        t.y = 39,
        t.elementsContent = [this._Label2_i(), this._Label3_i(), this._Label4_i(), this._Label5_i(), this._Label6_i(), this._Label7_i(), this.txtAttr_0_i(), this.txtAttr_1_i(), this.txtAttr_2_i(), this.txtAttr_3_i(), this.txtAttr_4_i(), this.txtAttr_5_i()],
        t
    },
    o._Label2_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "攻击：",
        t.textColor = 4187130,
        t.x = 0,
        t.y = 0,
        t
    },
    o._Label3_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "特攻：",
        t.textColor = 4187130,
        t.x = 0,
        t.y = 24,
        t
    },
    o._Label4_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "速度：",
        t.textColor = 4187130,
        t.x = 0,
        t.y = 48,
        t
    },
    o._Label5_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "防御：",
        t.textColor = 4187130,
        t.x = 171,
        t.y = 0,
        t
    },
    o._Label6_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "特防：",
        t.textColor = 4187130,
        t.x = 171,
        t.y = 24,
        t
    },
    o._Label7_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "体力：",
        t.textColor = 4187130,
        t.x = 171,
        t.y = 48,
        t
    },
    o.txtAttr_0_i = function() {
        var t = new eui.Label;
        return this.txtAttr_0 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "000/000",
        t.textColor = 16777215,
        t.width = 68,
        t.x = 47,
        t.y = 0,
        t
    },
    o.txtAttr_1_i = function() {
        var t = new eui.Label;
        return this.txtAttr_1 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "000/000",
        t.textColor = 16777215,
        t.width = 68,
        t.x = 219,
        t.y = 0,
        t
    },
    o.txtAttr_2_i = function() {
        var t = new eui.Label;
        return this.txtAttr_2 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "000/000",
        t.textColor = 16777215,
        t.width = 68,
        t.x = 47,
        t.y = 24,
        t
    },
    o.txtAttr_3_i = function() {
        var t = new eui.Label;
        return this.txtAttr_3 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "000/000",
        t.textColor = 16777215,
        t.width = 68,
        t.x = 219,
        t.y = 24,
        t
    },
    o.txtAttr_4_i = function() {
        var t = new eui.Label;
        return this.txtAttr_4 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "000/000",
        t.textColor = 16777215,
        t.width = 68,
        t.x = 47,
        t.y = 48,
        t
    },
    o.txtAttr_5_i = function() {
        var t = new eui.Label;
        return this.txtAttr_5 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "000/000",
        t.textColor = 16777215,
        t.width = 68,
        t.x = 219,
        t.y = 48,
        t
    },
    o._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "markcenter_mark_panel_detailline_png",
        t.x = 1,
        t.y = 0,
        t
    },
    o.grp_hidenAttr_i = function() {
        var t = new eui.Group;
        return this.grp_hidenAttr = t,
        t.visible = !0,
        t.x = 0,
        t.y = 114,
        t.elementsContent = [this.ycsx_i(), this.grpHideAttrTxt_i(), this._Image4_i(), this.txtNoHideAttr_i()],
        t
    },
    o.ycsx_i = function() {
        var t = new eui.Label;
        return this.ycsx = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "隐藏属性（未激活）",
        t.textColor = 16777215,
        t.x = 91,
        t.y = 13,
        t
    },
    o.grpHideAttrTxt_i = function() {
        var t = new eui.Group;
        return this.grpHideAttrTxt = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.visible = !0,
        t.x = 20,
        t.y = 40,
        t.elementsContent = [this._Label8_i(), this._Label9_i(), this._Label10_i(), this._Label11_i(), this._Label12_i(), this._Label13_i(), this.txtAttrHide_0_i(), this.txtAttrHide_1_i(), this.txtAttrHide_2_i(), this.txtAttrHide_3_i(), this.txtAttrHide_4_i(), this.txtAttrHide_5_i()],
        t
    },
    o._Label8_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "攻击：",
        t.textColor = 4187130,
        t.x = 0,
        t.y = 0,
        t
    },
    o._Label9_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "特攻：",
        t.textColor = 4187130,
        t.x = 0,
        t.y = 24,
        t
    },
    o._Label10_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "速度：",
        t.textColor = 4187130,
        t.x = 0,
        t.y = 48,
        t
    },
    o._Label11_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "防御：",
        t.textColor = 4187130,
        t.x = 171,
        t.y = 0,
        t
    },
    o._Label12_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "特防：",
        t.textColor = 4187130,
        t.x = 171,
        t.y = 24,
        t
    },
    o._Label13_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "体力：",
        t.textColor = 4187130,
        t.x = 171,
        t.y = 48,
        t
    },
    o.txtAttrHide_0_i = function() {
        var t = new eui.Label;
        return this.txtAttrHide_0 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "000/000",
        t.textColor = 16777215,
        t.width = 68,
        t.x = 47,
        t.y = 0,
        t
    },
    o.txtAttrHide_1_i = function() {
        var t = new eui.Label;
        return this.txtAttrHide_1 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "000/000",
        t.textColor = 16777215,
        t.width = 68,
        t.x = 219,
        t.y = 0,
        t
    },
    o.txtAttrHide_2_i = function() {
        var t = new eui.Label;
        return this.txtAttrHide_2 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "000/000",
        t.textColor = 16777215,
        t.width = 68,
        t.x = 47,
        t.y = 24,
        t
    },
    o.txtAttrHide_3_i = function() {
        var t = new eui.Label;
        return this.txtAttrHide_3 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "000/000",
        t.textColor = 16777215,
        t.width = 68,
        t.x = 219,
        t.y = 24,
        t
    },
    o.txtAttrHide_4_i = function() {
        var t = new eui.Label;
        return this.txtAttrHide_4 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "000/000",
        t.textColor = 16777215,
        t.width = 68,
        t.x = 47,
        t.y = 48,
        t
    },
    o.txtAttrHide_5_i = function() {
        var t = new eui.Label;
        return this.txtAttrHide_5 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "000/000",
        t.textColor = 16777215,
        t.width = 68,
        t.x = 219,
        t.y = 48,
        t
    },
    o._Image4_i = function() {
        var t = new eui.Image;
        return t.source = "markcenter_mark_panel_detailline_png",
        t.x = 0,
        t.y = 0,
        t
    },
    o.txtNoHideAttr_i = function() {
        var t = new eui.Label;
        return this.txtNoHideAttr = t,
        t.fontFamily = "MFShangHei",
        t.size = 25,
        t.text = "无隐藏属性",
        t.textColor = 8757203,
        t.x = 91,
        t.y = 46,
        t
    },
    o.gr_add_gemstone_i = function() {
        var t = new eui.Group;
        return this.gr_add_gemstone = t,
        t.x = 0,
        t.y = 227,
        t.elementsContent = [this.item_bg_i(), this.bindGemIcon_i(), this.tx_gemstone_tile_i(), this.txtGemName_i(), this.tx_gemstoneDes_i(), this.png_detailLine_2_i(), this.tx_no_gemstone_i()],
        t
    },
    o.item_bg_i = function() {
        var t = new eui.Image;
        return this.item_bg = t,
        t.height = 60,
        t.source = "markcenter_mark_panel_item_bg_png",
        t.width = 60,
        t.x = 18,
        t.y = 39,
        t
    },
    o.bindGemIcon_i = function() {
        var t = new eui.Image;
        return this.bindGemIcon = t,
        t.height = 50,
        t.source = "markcenter_mark_panel_gemstoneicon_png",
        t.width = 50,
        t.x = 23,
        t.y = 44,
        t
    },
    o.tx_gemstone_tile_i = function() {
        var t = new eui.Label;
        return this.tx_gemstone_tile = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "镶嵌宝石(不可镶嵌)",
        t.textAlign = "center",
        t.textColor = 16777215,
        t.x = 91,
        t.y = 12,
        t
    },
    o.txtGemName_i = function() {
        var t = new eui.Label;
        return this.txtGemName = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "XX宝石LV.5",
        t.textColor = 4187130,
        t.x = 87,
        t.y = 39,
        t
    },
    o.tx_gemstoneDes_i = function() {
        var t = new eui.Label;
        return this.tx_gemstoneDes = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "宝石效果宝石效果宝石效果宝石\n效果宝石效果宝石效果\n",
        t.textColor = 8757203,
        t.width = 224,
        t.x = 87,
        t.y = 61,
        t
    },
    o.png_detailLine_2_i = function() {
        var t = new eui.Image;
        return this.png_detailLine_2 = t,
        t.source = "markcenter_mark_panel_png_detailline_png",
        t.x = 0,
        t.y = 0,
        t
    },
    o.tx_no_gemstone_i = function() {
        var t = new eui.Label;
        return this.tx_no_gemstone = t,
        t.fontFamily = "MFShangHei",
        t.size = 25,
        t.text = "无镶嵌宝石",
        t.textColor = 8757203,
        t.x = 91,
        t.y = 60,
        t
    },
    o._Group3_i = function() {
        var t = new eui.Group;
        return t.visible = !0,
        t.width = 310,
        t.x = 22,
        t.y = 0,
        t.elementsContent = [this.iconBg_i(), this.txtPet_i(), this.txtNoGem_i(), this._Group2_i(), this.txtName_i(), this.imgMark_i(), this.txtLvl_i()],
        t
    },
    o.iconBg_i = function() {
        var t = new eui.Image;
        return this.iconBg = t,
        t.source = "markcenter_mark_panel_iconbg_png",
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t
    },
    o.txtPet_i = function() {
        var t = new eui.Label;
        return this.txtPet = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "未与任何精灵绑定",
        t.textColor = 8164328,
        t.x = 84,
        t.y = 33,
        t
    },
    o.txtNoGem_i = function() {
        var t = new eui.Label;
        return this.txtNoGem = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "未镶嵌刻印宝石",
        t.textColor = 8098793,
        t.visible = !1,
        t.x = 84,
        t.y = 56,
        t
    },
    o._Group2_i = function() {
        var t = new eui.Group;
        return t.x = 84,
        t.y = 55,
        t.elementsContent = [this.txtMintMarkclassName_i(), this._Image5_i()],
        t
    },
    o.txtMintMarkclassName_i = function() {
        var t = new eui.Label;
        return this.txtMintMarkclassName = t,
        t.fontFamily = "MFShangHei",
        t.height = 17,
        t.size = 16,
        t.text = "什么什么宝石\n",
        t.textColor = 4119027,
        t.visible = !0,
        t.x = -1,
        t.y = 1,
        t
    },
    o._Image5_i = function() {
        var t = new eui.Image;
        return t.visible = !1,
        t.x = 0,
        t.y = 0,
        t
    },
    o.txtName_i = function() {
        var t = new eui.Label;
        return this.txtName = t,
        t.fontFamily = "MFShangHei",
        t.height = 20,
        t.size = 18,
        t.text = "刻印名称刻印名称名称\n",
        t.textAlign = "left",
        t.textColor = 16774548,
        t.verticalAlign = "middle",
        t.width = 225,
        t.x = 85,
        t.y = 9,
        t
    },
    o.imgMark_i = function() {
        var t = new eui.Image;
        return this.imgMark = t,
        t.height = 55,
        t.width = 55,
        t.x = 7,
        t.y = 8,
        t
    },
    o.txtLvl_i = function() {
        var t = new eui.Label;
        return this.txtLvl = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.stroke = 1,
        t.strokeColor = 1320013,
        t.text = "LV.0",
        t.textColor = 16777215,
        t.x = 2,
        t.y = 52,
        t
    },
    o.search_i = function() {
        var t = new eui.Group;
        return this.search = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.visible = !0,
        t.x = 149,
        t.y = -45.999999999999986,
        t.elementsContent = [this._Image6_i(), this.txtSearch_i(), this.imgSearch_i(), this.imgBack_i()],
        t
    },
    o._Image6_i = function() {
        var t = new eui.Image;
        return t.source = "markcenter_mark_panel_searchbg_png",
        t.width = 190,
        t.x = 0,
        t.y = 0,
        t
    },
    o.txtSearch_i = function() {
        var t = new eui.TextInput;
        return this.txtSearch = t,
        t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.height = 19,
        t.maxChars = 20,
        t.prompt = "输入刻印/系列名称",
        t.width = 160,
        t.x = 0,
        t.y = 7,
        t.skinName = s,
        t
    },
    o.imgSearch_i = function() {
        var t = new eui.Image;
        return this.imgSearch = t,
        t.source = "markcenter_mark_panel_btnsearch_png",
        t.x = 162,
        t.y = 0,
        t
    },
    o.imgBack_i = function() {
        var t = new eui.Image;
        return this.imgBack = t,
        t.source = "markcenter_mark_panel_btnBack_png",
        t.visible = !1,
        t.x = 162,
        t.y = 0,
        t
    },
    o.btnSelect_i = function() {
        var t = new eui.Group;
        return this.btnSelect = t,
        t.cacheAsBitmap = !0,
        t.width = 100,
        t.x = 39.5,
        t.y = -46,
        t.elementsContent = [this._Image7_i(), this.selectName_i()],
        t
    },
    o._Image7_i = function() {
        var t = new eui.Image;
        return t.scale9Grid = new egret.Rectangle(22, 12, 4, 4),
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "markcenter_mark_panel_btnSelect_png",
        t.visible = !0,
        t.width = 100,
        t.x = 0,
        t.y = 0,
        t
    },
    o.selectName_i = function() {
        var t = new eui.Label;
        return this.selectName = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = 0,
        t.left = 0,
        t.right = 0,
        t.size = 18,
        t.text = "筛选",
        t.textAlign = "center",
        t.textColor = 16777215,
        t.visible = !0,
        t.y = 5,
        t
    },
    o.righttop_i = function() {
        var t = new eui.Group;
        return this.righttop = t,
        t.cacheAsBitmap = !0,
        t.right = 20,
        t.visible = !0,
        t.y = 11,
        t.elementsContent = [this._Image8_i(), this.txtCoin2_i(), this.coinIcon_i()],
        t
    },
    o._Image8_i = function() {
        var t = new eui.Image;
        return t.source = "markcenter_mark_panel_img_di2_png",
        t.x = 10,
        t.y = 5,
        t
    },
    o.txtCoin2_i = function() {
        var t = new eui.Label;
        return this.txtCoin2 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "9999999",
        t.textColor = 12834813,
        t.x = 62,
        t.y = 6,
        t
    },
    o.coinIcon_i = function() {
        var t = new eui.Image;
        return this.coinIcon = t,
        t.height = 30,
        t.visible = !0,
        t.width = 30,
        t.y = 0,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/new/MarkcenterMarkSetSkin.exml"] = window.MarkcenterMarkSetSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["empty_tip", "_list", "_scroller", "contaner", "rb_1", "rb_2", "selectName", "btnSelect", "bindGemIcon", "txtPet", "txtGemName", "txtGemContent", "txtName", "gemInfo", "imgMark", "txtLvl", "btnClose", "gempop"],
        this.height = 547,
        this.width = 999,
        this.elementsContent = [this.gempop_i()]
    }
    __extends(e, t);
    var i = function(t) {
        function e() {
            t.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i()],
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "markcenter_mark_set_btnerup_png")]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t.percentHeight = 100,
            t.source = "markcenter_mark_set_btnerdown_png",
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
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "markcenter_mark_set_btnyiup_png")]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t.percentHeight = 100,
            t.source = "markcenter_mark_set_btnyidown_png",
            t.percentWidth = 100,
            t
        },
        e
    } (eui.Skin),
    r = e.prototype;
    return r.gempop_i = function() {
        var t = new eui.Group;
        return this.gempop = t,
        t.visible = !0,
        t.elementsContent = [this._Image1_i(), this._Image2_i(), this._Image3_i(), this.empty_tip_i(), this.contaner_i(), this._Group1_i(), this.btnSelect_i(), this.gemInfo_i(), this._Image6_i(), this.imgMark_i(), this.txtLvl_i(), this._Image7_i(), this._Image8_i(), this.btnClose_i()],
        t
    },
    r._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 547,
        t.source = "common_s9_pop_bg4_png",
        t.visible = !0,
        t.width = 999,
        t.x = 0,
        t.y = 1,
        t
    },
    r._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 34,
        t.source = "common_pop_up_bg_big_png",
        t.visible = !0,
        t.width = 999,
        t.x = 0,
        t.y = 0,
        t
    },
    r._Image3_i = function() {
        var t = new eui.Image;
        return t.scale9Grid = new egret.Rectangle(4, 153, 4, 154),
        t.source = "markcenter_mark_set_contentbg_kb_png",
        t.visible = !0,
        t.width = 265,
        t.x = 7,
        t.y = 42,
        t
    },
    r.empty_tip_i = function() {
        var t = new eui.Image;
        return this.empty_tip = t,
        t.source = "markcenter_mark_panel_empty_tip_png",
        t.visible = !0,
        t.x = 500,
        t.y = 250,
        t
    },
    r.contaner_i = function() {
        var t = new eui.Group;
        return this.contaner = t,
        t.height = 460,
        t.width = 701,
        t.x = 285,
        t.y = 80,
        t.elementsContent = [this._scroller_i()],
        t
    },
    r._scroller_i = function() {
        var t = new eui.Scroller;
        return this._scroller = t,
        t.height = 460,
        t.width = 701,
        t.x = 0,
        t.y = 0,
        t.viewport = this._list_i(),
        t
    },
    r._list_i = function() {
        var t = new eui.List;
        return this._list = t,
        t.visible = !0,
        t.layout = this._TileLayout1_i(),
        t
    },
    r._TileLayout1_i = function() {
        var t = new eui.TileLayout;
        return t.horizontalGap = 15,
        t.orientation = "rows",
        t.requestedColumnCount = 5,
        t
    },
    r._Group1_i = function() {
        var t = new eui.Group;
        return t.x = 287,
        t.y = 42,
        t.elementsContent = [this.rb_1_i(), this.rb_2_i()],
        t
    },
    r.rb_1_i = function() {
        var t = new eui.RadioButton;
        return this.rb_1 = t,
        t.groupName = "set_tab",
        t.value = "1",
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t.skinName = i,
        t
    },
    r.rb_2_i = function() {
        var t = new eui.RadioButton;
        return this.rb_2 = t,
        t.groupName = "set_tab",
        t.value = "2",
        t.visible = !0,
        t.x = 100,
        t.y = 0,
        t.skinName = n,
        t
    },
    r.btnSelect_i = function() {
        var t = new eui.Group;
        return this.btnSelect = t,
        t.width = 100,
        t.x = 830,
        t.y = 42,
        t.elementsContent = [this._Image4_i(), this.selectName_i()],
        t
    },
    r._Image4_i = function() {
        var t = new eui.Image;
        return t.horizontalCenter = 0,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "markcenter_mark_panel_btnSelect_png",
        t.visible = !0,
        t.width = 100,
        t.y = 0,
        t
    },
    r.selectName_i = function() {
        var t = new eui.Label;
        return this.selectName = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = 0,
        t.size = 18,
        t.text = "筛选",
        t.textAlign = "center",
        t.textColor = 16777215,
        t.width = 100,
        t.y = 5,
        t
    },
    r.gemInfo_i = function() {
        var t = new eui.Group;
        return this.gemInfo = t,
        t.visible = !0,
        t.x = 18,
        t.y = 167,
        t.elementsContent = [this.bindGemIcon_i(), this.txtPet_i(), this.txtGemName_i(), this.txtGemContent_i(), this._Image5_i(), this.txtName_i()],
        t
    },
    r.bindGemIcon_i = function() {
        var t = new eui.Image;
        return this.bindGemIcon = t,
        t.source = "",
        t.x = 50,
        t.y = 108,
        t
    },
    r.txtPet_i = function() {
        var t = new eui.Label;
        return this.txtPet = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "未与任何精灵绑定",
        t.textColor = 8757203,
        t.x = 58,
        t.y = 57,
        t
    },
    r.txtGemName_i = function() {
        var t = new eui.Label;
        return this.txtGemName = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "未镶嵌刻印宝石",
        t.textColor = 8757203,
        t.x = 79,
        t.y = 113,
        t
    },
    r.txtGemContent_i = function() {
        var t = new eui.Label;
        return this.txtGemContent = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "宝石效果：宝石未镶嵌刻印宝石\n未镶嵌刻印宝石",
        t.textColor = 8757203,
        t.width = 224,
        t.x = 15,
        t.y = 140,
        t
    },
    r._Image5_i = function() {
        var t = new eui.Image;
        return t.source = "markcenter_mark_set_detailline_kb_2_png",
        t.x = 0,
        t.y = 37,
        t
    },
    r.txtName_i = function() {
        var t = new eui.Label;
        return this.txtName = t,
        t.fontFamily = "MFShangHei",
        t.height = 30.582,
        t.size = 18,
        t.text = "刻印名称十个字(最多)\n",
        t.textAlign = "center",
        t.textColor = 16774548,
        t.verticalAlign = "middle",
        t.width = 185,
        t.x = 36,
        t.y = 0,
        t
    },
    r._Image6_i = function() {
        var t = new eui.Image;
        return t.source = "markcenter_mark_set_zu_38_png",
        t.visible = !0,
        t.width = 74,
        t.x = 103,
        t.y = 74,
        t
    },
    r.imgMark_i = function() {
        var t = new eui.Image;
        return this.imgMark = t,
        t.height = 55,
        t.width = 55,
        t.x = 115,
        t.y = 86,
        t
    },
    r.txtLvl_i = function() {
        var t = new eui.Label;
        return this.txtLvl = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.stroke = 1,
        t.strokeColor = 1320013,
        t.text = "LV.0",
        t.textColor = 16777215,
        t.x = 108,
        t.y = 130,
        t
    },
    r._Image7_i = function() {
        var t = new eui.Image;
        return t.source = "markcenter_mark_set_detailline_kb_2_png",
        t.x = 18,
        t.y = 260,
        t
    },
    r._Image8_i = function() {
        var t = new eui.Image;
        return t.source = "markcenter_mark_set_bsxk_png",
        t.x = 35,
        t.y = 1,
        t
    },
    r.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.source = "markcenter_mark_set_close_png",
        t.x = 957,
        t.y = 1,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/new/MarkItemNewSkin.exml"] = window.MarkItemNewSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["imgBg", "imgGemBG", "gemIcon", "grp_gem", "imgSelect", "txtName", "imgMark", "txtCount", "txtLvl", "txtId"],
        this.height = 145,
        this.width = 122,
        this.elementsContent = [this._Group1_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Group1_i = function() {
        var t = new eui.Group;
        return t.x = -5,
        t.elementsContent = [this.imgBg_i(), this.grp_gem_i(), this.imgSelect_i(), this.txtName_i(), this.imgMark_i(), this.txtCount_i(), this.txtLvl_i(), this.txtId_i()],
        t
    },
    i.imgBg_i = function() {
        var t = new eui.Image;
        return this.imgBg = t,
        t.horizontalCenter = 0,
        t.source = "rarity_rect_0_png",
        t.verticalCenter = 0,
        t.visible = !0,
        t
    },
    i.grp_gem_i = function() {
        var t = new eui.Group;
        return this.grp_gem = t,
        t.visible = !0,
        t.x = 88,
        t.y = 10,
        t.elementsContent = [this.imgGemBG_i(), this.gemIcon_i()],
        t
    },
    i.imgGemBG_i = function() {
        var t = new eui.Image;
        return this.imgGemBG = t,
        t.source = "rarity_gem_1_png",
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t
    },
    i.gemIcon_i = function() {
        var t = new eui.Image;
        return this.gemIcon = t,
        t.height = 18,
        t.source = "markcenter_tuceng_191_png",
        t.width = 18,
        t.x = 3,
        t.y = 4,
        t
    },
    i.imgSelect_i = function() {
        var t = new eui.Image;
        return this.imgSelect = t,
        t.height = 147,
        t.source = "markcenter_mark_panel_kuang_png",
        t.visible = !0,
        t.width = 123,
        t.x = 0,
        t.y = 0,
        t
    },
    i.txtName_i = function() {
        var t = new eui.Label;
        return this.txtName = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "刻印名字",
        t.textAlign = "center",
        t.textColor = 9025023,
        t.verticalAlign = "middle",
        t.width = 100,
        t.x = 12,
        t.y = 114,
        t
    },
    i.imgMark_i = function() {
        var t = new eui.Image;
        return this.imgMark = t,
        t.height = 55,
        t.width = 55,
        t.x = 35,
        t.y = 35,
        t
    },
    i.txtCount_i = function() {
        var t = new eui.Label;
        return this.txtCount = t,
        t.fontFamily = "MFShangHei",
        t.size = 20,
        t.text = "9999",
        t.textAlign = "right",
        t.textColor = 16777215,
        t.width = 100,
        t.x = 7,
        t.y = 90,
        t
    },
    i.txtLvl_i = function() {
        var t = new eui.Label;
        return this.txtLvl = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.stroke = 1,
        t.strokeColor = 1320013,
        t.text = "lv.10",
        t.textColor = 16777215,
        t.x = 12,
        t.y = 90,
        t
    },
    i.txtId_i = function() {
        var t = new eui.Label;
        return this.txtId = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.stroke = 1,
        t.strokeColor = 1327750,
        t.text = "LV.0",
        t.textColor = 7667455,
        t.x = 10,
        t.y = 12,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/new/MarkselectpopSkin.exml"] = window.MarkselectpopSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["btnDefault", "btnComfirm", "rb_all", "rb_zhuan", "rb_feizhuan", "rb_mo", "rb_atk", "rb_spAtk", "rb_def", "rb_spd", "rb_hp", "grp_selcted", "markPop"],
        this.height = 303,
        this.width = 508,
        this.elementsContent = [this.markPop_i()]
    }
    __extends(e, t);
    var i = function(t) {
        function e() {
            t.call(this),
            this.skinParts = ["labelDisplay"],
            this.elementsContent = [this._Image1_i(), this._Image2_i(), this.labelDisplay_i()],
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image2", "source", "markselectpop_gou_png"), new eui.SetProperty("_Image2", "x", 5), new eui.SetProperty("_Image2", "y", 5)]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return t.percentHeight = 100,
            t.source = "markselectpop_searchbg_png",
            t.percentWidth = 100,
            t
        },
        i._Image2_i = function() {
            var t = new eui.Image;
            return this._Image2 = t,
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
            this.elementsContent = [this._Image1_i(), this._Image2_i(), this.labelDisplay_i()],
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image2", "source", "markselectpop_gou_png"), new eui.SetProperty("_Image2", "x", 5), new eui.SetProperty("_Image2", "y", 5)]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return t.percentHeight = 100,
            t.source = "markselectpop_searchbg_png",
            t.percentWidth = 100,
            t
        },
        i._Image2_i = function() {
            var t = new eui.Image;
            return this._Image2 = t,
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
    r = function(t) {
        function e() {
            t.call(this),
            this.skinParts = ["labelDisplay"],
            this.elementsContent = [this._Image1_i(), this._Image2_i(), this.labelDisplay_i()],
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image2", "source", "markselectpop_gou_png"), new eui.SetProperty("_Image2", "x", 5), new eui.SetProperty("_Image2", "y", 5)]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return t.percentHeight = 100,
            t.source = "markselectpop_searchbg_png",
            t.percentWidth = 100,
            t
        },
        i._Image2_i = function() {
            var t = new eui.Image;
            return this._Image2 = t,
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
    a = function(t) {
        function e() {
            t.call(this),
            this.skinParts = ["labelDisplay"],
            this.elementsContent = [this._Image1_i(), this._Image2_i(), this.labelDisplay_i()],
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image2", "source", "markselectpop_gou_png"), new eui.SetProperty("_Image2", "x", 5), new eui.SetProperty("_Image2", "y", 5)]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return t.percentHeight = 100,
            t.source = "markselectpop_searchbg_png",
            t.percentWidth = 100,
            t
        },
        i._Image2_i = function() {
            var t = new eui.Image;
            return this._Image2 = t,
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
    s = function(t) {
        function e() {
            t.call(this),
            this.skinParts = ["labelDisplay"],
            this.elementsContent = [this._Image1_i(), this._Image2_i(), this.labelDisplay_i()],
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image2", "source", "markselectpop_gou_png"), new eui.SetProperty("_Image2", "x", 5), new eui.SetProperty("_Image2", "y", 5)]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return t.percentHeight = 100,
            t.source = "markselectpop_searchbg_png",
            t.percentWidth = 100,
            t
        },
        i._Image2_i = function() {
            var t = new eui.Image;
            return this._Image2 = t,
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
    o = function(t) {
        function e() {
            t.call(this),
            this.skinParts = ["labelDisplay"],
            this.elementsContent = [this._Image1_i(), this._Image2_i(), this.labelDisplay_i()],
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image2", "source", "markselectpop_gou_png"), new eui.SetProperty("_Image2", "x", 5), new eui.SetProperty("_Image2", "y", 5)]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return t.percentHeight = 100,
            t.source = "markselectpop_searchbg_png",
            t.percentWidth = 100,
            t
        },
        i._Image2_i = function() {
            var t = new eui.Image;
            return this._Image2 = t,
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
    u = function(t) {
        function e() {
            t.call(this),
            this.skinParts = ["labelDisplay"],
            this.elementsContent = [this._Image1_i(), this._Image2_i(), this.labelDisplay_i()],
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image2", "source", "markselectpop_gou_png"), new eui.SetProperty("_Image2", "x", 5), new eui.SetProperty("_Image2", "y", 5)]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return t.percentHeight = 100,
            t.source = "markselectpop_searchbg_png",
            t.percentWidth = 100,
            t
        },
        i._Image2_i = function() {
            var t = new eui.Image;
            return this._Image2 = t,
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
    h = function(t) {
        function e() {
            t.call(this),
            this.skinParts = ["labelDisplay"],
            this.elementsContent = [this._Image1_i(), this._Image2_i(), this.labelDisplay_i()],
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image2", "source", "markselectpop_gou_png"), new eui.SetProperty("_Image2", "x", 5), new eui.SetProperty("_Image2", "y", 5)]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return t.percentHeight = 100,
            t.source = "markselectpop_searchbg_png",
            t.percentWidth = 100,
            t
        },
        i._Image2_i = function() {
            var t = new eui.Image;
            return this._Image2 = t,
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
    m = function(t) {
        function e() {
            t.call(this),
            this.skinParts = ["labelDisplay"],
            this.elementsContent = [this._Image1_i(), this._Image2_i(), this.labelDisplay_i()],
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image2", "source", "markselectpop_gou_png"), new eui.SetProperty("_Image2", "x", 5), new eui.SetProperty("_Image2", "y", 5)]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return t.percentHeight = 100,
            t.source = "markselectpop_searchbg_png",
            t.percentWidth = 100,
            t
        },
        i._Image2_i = function() {
            var t = new eui.Image;
            return this._Image2 = t,
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
    _ = e.prototype;
    return _.markPop_i = function() {
        var t = new eui.Group;
        return this.markPop = t,
        t.cacheAsBitmap = !0,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image1_i(), this._Image2_i(), this.btnDefault_i(), this.btnComfirm_i(), this._Image3_i(), this._Label1_i(), this.grp_selcted_i()],
        t
    },
    _._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 303,
        t.scale9Grid = new egret.Rectangle(15, 15, 15, 15),
        t.source = "gemslectpop_juxing_17_png",
        t.width = 508,
        t.x = 0,
        t.y = 0,
        t
    },
    _._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "markselectpop_jx_17_kb_3_png",
        t.x = 9,
        t.y = 9,
        t
    },
    _.btnDefault_i = function() {
        var t = new eui.Image;
        return this.btnDefault = t,
        t.source = "markselectpop_btndefault_png",
        t.x = 273,
        t.y = 255,
        t
    },
    _.btnComfirm_i = function() {
        var t = new eui.Image;
        return this.btnComfirm = t,
        t.source = "markselectpop_btncomfirm_png",
        t.x = 384,
        t.y = 255,
        t
    },
    _._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "markselectpop_xz_1_png",
        t.x = 33,
        t.y = 113,
        t
    },
    _._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "刻印筛选",
        t.textColor = 12900094,
        t.x = 29,
        t.y = 17,
        t
    },
    _.grp_selcted_i = function() {
        var t = new eui.Group;
        return this.grp_selcted = t,
        t.x = 40,
        t.y = 53,
        t.elementsContent = [this._Group1_i(), this._Group2_i()],
        t
    },
    _._Group1_i = function() {
        var t = new eui.Group;
        return t.visible = !0,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this.rb_all_i(), this.rb_zhuan_i(), this.rb_feizhuan_i(), this._Label2_i(), this._Label3_i(), this._Label4_i(), this._Label5_i()],
        t
    },
    _.rb_all_i = function() {
        var t = new eui.RadioButton;
        return this.rb_all = t,
        t.groupName = "a",
        t.label = "",
        t.value = "全部",
        t.x = 0,
        t.y = 25,
        t.skinName = i,
        t
    },
    _.rb_zhuan_i = function() {
        var t = new eui.RadioButton;
        return this.rb_zhuan = t,
        t.groupName = "a",
        t.label = "",
        t.value = "专属",
        t.x = 124,
        t.y = 25,
        t.skinName = n,
        t
    },
    _.rb_feizhuan_i = function() {
        var t = new eui.RadioButton;
        return this.rb_feizhuan = t,
        t.groupName = "a",
        t.label = "",
        t.value = "非专属",
        t.x = 248,
        t.y = 25,
        t.skinName = r,
        t
    },
    _._Label2_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "全部刻印",
        t.textColor = 15528703,
        t.x = 31,
        t.y = 28,
        t
    },
    _._Label3_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "专属刻印",
        t.textColor = 16777215,
        t.x = 155,
        t.y = 28,
        t
    },
    _._Label4_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "非专属刻印",
        t.textColor = 16777215,
        t.x = 284,
        t.y = 28,
        t
    },
    _._Label5_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.scaleX = 1,
        t.scaleY = 1,
        t.size = 16,
        t.text = "刻印类型",
        t.textColor = 6388143,
        t.x = 1,
        t.y = 0,
        t
    },
    _._Group2_i = function() {
        var t = new eui.Group;
        return t.visible = !0,
        t.x = 0,
        t.y = 72,
        t.elementsContent = [this.rb_mo_i(), this.rb_atk_i(), this.rb_spAtk_i(), this.rb_def_i(), this.rb_spd_i(), this.rb_hp_i(), this._Label6_i(), this._Label7_i(), this._Label8_i(), this._Label9_i(), this._Label10_i(), this._Label11_i(), this._Label12_i()],
        t
    },
    _.rb_mo_i = function() {
        var t = new eui.RadioButton;
        return this.rb_mo = t,
        t.groupName = "b",
        t.label = "",
        t.value = "默认",
        t.x = 0,
        t.y = 25,
        t.skinName = a,
        t
    },
    _.rb_atk_i = function() {
        var t = new eui.RadioButton;
        return this.rb_atk = t,
        t.groupName = "b",
        t.label = "",
        t.value = "攻击",
        t.x = 124,
        t.y = 25,
        t.skinName = s,
        t
    },
    _.rb_spAtk_i = function() {
        var t = new eui.RadioButton;
        return this.rb_spAtk = t,
        t.groupName = "b",
        t.label = "",
        t.value = "特攻",
        t.x = 248,
        t.y = 25,
        t.skinName = o,
        t
    },
    _.rb_def_i = function() {
        var t = new eui.RadioButton;
        return this.rb_def = t,
        t.groupName = "b",
        t.label = "",
        t.value = "双防",
        t.x = 0,
        t.y = 67,
        t.skinName = u,
        t
    },
    _.rb_spd_i = function() {
        var t = new eui.RadioButton;
        return this.rb_spd = t,
        t.groupName = "b",
        t.label = "",
        t.value = "速度",
        t.x = 124,
        t.y = 67,
        t.skinName = h,
        t
    },
    _.rb_hp_i = function() {
        var t = new eui.RadioButton;
        return this.rb_hp = t,
        t.groupName = "b",
        t.label = "",
        t.value = "体力",
        t.x = 248,
        t.y = 67,
        t.skinName = m,
        t
    },
    _._Label6_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "刻印属性",
        t.textColor = 6388143,
        t.x = 1,
        t.y = 0,
        t
    },
    _._Label7_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "默认",
        t.textColor = 15528703,
        t.x = 31,
        t.y = 29,
        t
    },
    _._Label8_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "攻击",
        t.textColor = 16777215,
        t.x = 155,
        t.y = 29,
        t
    },
    _._Label9_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "特攻",
        t.textColor = 16777215,
        t.x = 284,
        t.y = 29,
        t
    },
    _._Label10_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "双防",
        t.textColor = 15528703,
        t.x = 32,
        t.y = 71,
        t
    },
    _._Label11_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "速度",
        t.textColor = 16777215,
        t.x = 156,
        t.y = 70,
        t
    },
    _._Label12_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "体力",
        t.textColor = 16777215,
        t.x = 284,
        t.y = 71,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/new/MarkTipsRender.exml"] = window.MarkTipsRenderSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["erdai", "yidai", "txtGemName", "txtEf"],
        this.height = 61,
        this.width = 546,
        this.elementsContent = [this._Image1_i(), this.erdai_i(), this.yidai_i(), this.txtGemName_i(), this.txtEf_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "markcenter_help_pop_page2di_png",
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t
    },
    i.erdai_i = function() {
        var t = new eui.Image;
        return this.erdai = t,
        t.source = "markcenter_help_pop_erdai_png",
        t.visible = !0,
        t.x = 150,
        t.y = 10,
        t
    },
    i.yidai_i = function() {
        var t = new eui.Image;
        return this.yidai = t,
        t.source = "markcenter_help_pop_yidai_png",
        t.visible = !1,
        t.x = 150,
        t.y = 10,
        t
    },
    i.txtGemName_i = function() {
        var t = new eui.Label;
        return this.txtGemName = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "冻伤宝石",
        t.textColor = 16777215,
        t.x = 16,
        t.y = 9,
        t
    },
    i.txtEf_i = function() {
        var t = new eui.Label;
        return this.txtEf = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "命中后3%/6%/9%/12%/15%/18%/21%/24%/27%/30%令对方冻伤",
        t.textColor = 12834813,
        t.width = 510,
        t.x = 15,
        t.y = 28,
        t
    },
    e
} (eui.Skin);