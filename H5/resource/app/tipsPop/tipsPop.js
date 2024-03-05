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
tipsPop; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.groupName = "MulitHelpPopView_type",
            i.skinName = t.HelpMulitPopSkin,
            i
        }
        return __extends(i, e),
        i.prototype.initEvents = function() {
            ImageButtonUtil.add(this.btnClose, this.onTouchTapIamgeButtonHandler, this)
        },
        i.prototype.removeEvents = function() {
            ImageButtonUtil.removeAll(this),
            EventManager.removeAll(this)
        },
        i.prototype._parseData = function() {
            this._vo = this._data,
            this._init()
        },
        i.prototype._init = function() {
            var t = this._vo.data;
            this.title.texture = this._vo.titleSource;
            var e = new MenuData;
            e.adapter = !1,
            e.groupName = this.groupName,
            e["default"] = 1;
            for (var i = {},
            n = [], r = 0; r < t.length; r++) n.push(r + 1),
            i[r + 1] = {
                title: t[r].tabName
            };
            e.root = n,
            e.data = i,
            this.menu = Menu.createMenu(e, this.rbGrp, 0, !1, 422, 172),
            EventManager.addEventListener(BaseMenuEvent.BASE_MENU_SELECT_CHANGE_ + this.groupName, this._onChangeNavBar, this)
        },
        i.prototype._onChangeNavBar = function() {
            this._selctedValue = this.menu.selectedValue,
            this._upDateView()
        },
        i.prototype._upDateView = function() {
            var t = this._selctedValue;
            if (t) {
                var e = this._vo.data[t - 1];
                if (this.group_txt.visible = !1, this.group_img.visible = !1, this._scroller.stopAnimation(), this._scroller.viewport.scrollV = 0, e.desc) {
                    this.group_txt.visible = !0;
                    var i = StringUtil.str2Html(e.desc);
                    "string" == typeof i ? this.txtDesc.text = i: this.txtDesc.textFlow = i,
                    this.txtRule.text = e.rule ? e.rule: "规则说明"
                } else if (e.id > 0) {
                    this.group_txt.visible = !0;
                    var n = config.Help_tips.getItem(e.id);
                    if (this.txtRule.text = n.desc ? n.desc: "规则说明", n.html.trim().length > 0) {
                        var r = StringUtil.TransformLineBreak(n.html);
                        "string" == typeof r ? this.txtDesc.textFlow = (new egret.HtmlTextParser).parse(r) : this.txtDesc.textFlow = r
                    } else {
                        var r = StringUtil.TransformLineBreak(n.tips);
                        this.txtDesc.text = r + ""
                    }
                } else e.imgRule && (this.group_img.visible = !0, this.ruleImg.texture = e.imgRule)
            }
        },
        i.prototype.onTouchTapIamgeButtonHandler = function(t) {
            switch (t.target) {
            case this.btnClose:
                this.hide()
            }
        },
        i.prototype.destroy = function() {
            this.title.source = null,
            this._vo = null,
            e.prototype.destroy.call(this),
            this.menu && this.menu.destroy()
        },
        i
    } (PopView);
    t.MulitHelpPopView = e,
    __reflect(e.prototype, "tipsPop.MulitHelpPopView")
} (tipsPop || (tipsPop = {}));
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
tipsPop; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e._loadSkinCompleteFlag = !1,
            e._createCompleteFlag = !1,
            e._setDataFlag = !1,
            e.addEventListener(egret.Event.REMOVED_FROM_STAGE, e.destroy, e),
            e.addEventListener(eui.UIEvent.COMPLETE, e._loaderSkinComplete, e),
            e.addEventListener(eui.UIEvent.CREATION_COMPLETE, e._creationComplete, e),
            e._initData(),
            e
        }
        return __extends(e, t),
        e.prototype._loaderSkinComplete = function() {
            this.removeEventListener(eui.UIEvent.COMPLETE, this._loaderSkinComplete, this),
            this._loadSkinCompleteFlag = !0,
            this._initView()
        },
        e.prototype._creationComplete = function() {
            this.removeEventListener(eui.UIEvent.CREATION_COMPLETE, this._creationComplete, this),
            this._createCompleteFlag = !0,
            this._initView()
        },
        e.prototype._initView = function() {
            this._loadSkinCompleteFlag && this._createCompleteFlag && this._setDataFlag && (this._parseData(), this._initialized(), this._addEvents(), this._updateView(), this.dispatchEventWith("event_initlized"))
        },
        e.prototype._initData = function() {},
        e.prototype._initialized = function() {},
        e.prototype._addEvents = function() {},
        e.prototype._removeEvents = function() {},
        e.prototype.setData = function(t) {
            this._data = t,
            this._setDataFlag = !0,
            this._initView()
        },
        e.prototype._parseData = function() {},
        e.prototype._updateView = function() {},
        e.prototype.destroy = function() {
            this._data = null,
            this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this),
            this._removeEvents()
        },
        e
    } (eui.Component);
    t.BaseComp = e,
    __reflect(e.prototype, "tipsPop.BaseComp")
} (tipsPop || (tipsPop = {}));
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
tipsPop; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t.arrMapName = ["露姆仙境-无垠之界-无垠净界", "查理星系-枫曳镇-枫曳酒馆", "灵格星系-钟表领域-时钟藏馆", "查理星系-上野林郊-避风之穴", "查理星系-辉之极地-寒月雪峰"],
            t.skinName = "KappaTravelBubbleSkin",
            t
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            this.init(),
            this.addEvent()
        },
        i.prototype.init = function() {
            var e = this;
            this.touchEnabled = this.touchChildren = !1,
            KTool.getPlayerInfo([1383, 1384],
            function(n) {
                i.curTaskId = n[0],
                e.txtMap.text = "请前往目的地：" + e.arrMapName[n[0] - 1],
                e.startTime = n[1];
                var r = !1;
                e.updateTime = function() {
                    var i = 600 - SystemTimerManager.sysBJDate.getTime() / 1e3 + e.startTime;
                    e.txtTime.text = TimeUtil.countDownFormat(i, "剩余时间 mm:ss"),
                    0 >= i && (FightManager.isFighting ? r || (r = !0, EventManager.once(PetFightEvent.ALARM_CLICK,
                    function() {
                        SocketConnection.sendByQueue(41820, [1, 8],
                        function() {
                            t.TipsPop.hideKappaTravelBubble(),
                            BubblerManager.getInstance().showText("任务超时！请重新接取任务！")
                        })
                    },
                    e)) : SocketConnection.sendByQueue(41820, [1, 8],
                    function() {
                        t.TipsPop.hideKappaTravelBubble(),
                        BubblerManager.getInstance().showText("任务超时！请重新接取任务！")
                    }))
                },
                SystemTimerManager.addTickFun(e.updateTime)
            })
        },
        i.prototype.addEvent = function() {
            var t = this;
            EventManager.addEventListener(PetFightEvent.START_FIGHT,
            function() {
                t.visible = !1
            },
            this),
            EventManager.addEventListener(PetFightEvent.ALARM_CLICK,
            function() {
                t.visible = !0
            },
            this)
        },
        i.prototype.destroy = function() {
            EventManager.removeAll(this),
            SystemTimerManager.removeTickFun(this.updateTime),
            i.curTaskId = 0
        },
        i.curTaskId = 0,
        i
    } (eui.Component);
    t.KappaTravelBubble = e,
    __reflect(e.prototype, "tipsPop.KappaTravelBubble")
} (tipsPop || (tipsPop = {}));
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
tipsPop; !
function(t) {
    var e = function(t) {
        function e(e) {
            var i = t.call(this) || this;
            return i.skinName = "AchievePopViewSkin",
            i.data = e,
            i
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            var t = this.data.SpeNameBonus,
            e = (AchieveXMLInfo.getBranchById(this.data.branchId), AchieveXMLInfo.getRule(this.data.branchId, this.data.ruleId));
            if (!t) {
                if (!e) return this.hide(),
                void BubblerManager.getInstance().showText("配置错误");
                t = e.SpeNameBonus
            }
            this.data.branchId || (this.data.branchId = AchieveXMLInfo.titleRules[t].branchId);
            var i = AchieveXMLInfo.getTypeByBranchId(this.data.branchId);
            if (this.txt_title.text = "成就-" + AchieveXMLInfo.getBranchesByType(i).Desc, t && "无称号" != AchieveXMLInfo.getTitle(t)) {
                this.groupEff.visible = !0,
                this.txtNoTitle.visible = !1,
                this.txtAchieve.text = AchieveXMLInfo.getTitleDesc(t);
                var n = AchieveXMLInfo.getTitleEffDesc(t);
                this.txt_intro.text = ("无称号特效" == n ? "纪念": "属性") + "称号-" + AchieveXMLInfo.getTitle(t)
            } else this.txtNoTitle.visible = !0,
            this.groupEff.visible = !1,
            this.txtAchieve.text = e.Desc
        },
        e
    } (PopView);
    t.AchievePopView = e,
    __reflect(e.prototype, "tipsPop.AchievePopView")
} (tipsPop || (tipsPop = {}));
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
tipsPop; !
function(t) {
    var e = function(e) {
        function i(i, n) {
            var r = e.call(this) || this;
            return r.skinName = t.ClothesitemPopViewSkin,
            r.isShowMine = i,
            r.isHideBtns = n,
            r
        }
        return __extends(i, e),
        i.prototype.initEvents = function() {
            var t = this;
            ImageButtonUtil.add(this.img_btn_xx,
            function() {
                var e = t._vo.onDisboardFun,
                i = t._vo.caller,
                n = ClothXMLInfo.getItemInfo(t._vo.clothesId).type;
                t.hide(),
                e.apply(i, [n])
            },
            this),
            ImageButtonUtil.add(this.img_btn_th,
            function() {
                var e = t._vo.changeFun,
                i = t._vo.caller,
                n = ClothXMLInfo.getItemInfo(t._vo.clothesId).type;
                t.hide(),
                e.apply(i, [n])
            },
            this)
        },
        i.prototype.removeEvents = function() {
            ImageButtonUtil.removeAll(this)
        },
        i.prototype._parseData = function() {
            this._vo = this._data
        },
        i.prototype._upDateView = function() {
            var t = this._vo;
            this.tile_name.text = ItemXMLInfo.getName(t.clothesId),
            this.icon.source = ItemXMLInfo.getIconURL(t.clothesId);
            var e = ClothXMLInfo.getItemInfo(t.clothesId),
            i = e.type,
            n = ["head", "eye", "hand", "waist", "foot"],
            r = ["头部", "面部", "手部", "腰部", "脚部"];
            this.txt_posName.text = r[n.indexOf(i)];
            var a = ItemSeXMLInfo.getQuality(t.clothesId);
            this.imgQuality.source = "quality_tag_" + a + "_png";
            var o = ItemSeXMLInfo.getItemDes(t.clothesId, 0);
            this.txt_desc.text = "" != o ? o: "无\n";
            var s = SuitXMLInfo.getIDForItem(t.clothesId),
            _ = ItemSeXMLInfo.getSuitEff(s);
            if (this.txt_suitdesc.text = "" != _ ? _: "无", s > 0) {
                var l = SuitXMLInfo.getCloths(s);
                this.grp_clothesInfo.removeChildren();
                for (var h = 0,
                u = 0; u < l.length; u++) {
                    var c = ~~l[u],
                    g = MainManager.actorInfo.getClothesIsDress(c);
                    g && h++;
                    var p = this["txt_suit_" + u];
                    this.isShowMine ? p.textColor = g ? 6154074 : 10596817 : p.textColor = 10596817,
                    p.text = ItemXMLInfo.getName(c),
                    this.grp_clothesInfo.addChild(this["txt_suit_" + u])
                }
                this.txt_suitName.text = SuitXMLInfo.getName(s),
                this.isShowMine && (this.txt_suitName.text += "(" + h + "/" + l.length + ")")
            } else this.grp_suitInfo.visible = !1,
            this.suitdec.visible = !1; ! this._vo.changeFun && !this._vo.onDisboardFun || this.isHideBtns ? this.grp_btns.visible = !1 : this.grp_btns.visible = !0
        },
        i.prototype.destroy = function() {
            this._vo = null,
            e.prototype.destroy.call(this)
        },
        i
    } (PopView);
    t.ClothesPopView = e,
    __reflect(e.prototype, "tipsPop.ClothesPopView")
} (tipsPop || (tipsPop = {}));
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
tipsPop; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.skinName = FieldPopViewSkin,
            e
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this),
            ImageButtonUtil.add(this.btnClose, this.hide, this)
        },
        e.prototype._parseData = function() {
            this._id = this._data
        },
        e.prototype._upDateView = function() {
            var t = FieldEffectXMLInfo.getBuffXml(this._id);
            0 == t.Type ? this.txt_type.text = "双方场地": 1 == t.Type ? this.txt_type.text = "我方场地": 2 == t.Type && (this.txt_type.text = "敌方场地"),
            this.txt_desc.text = t.Desc
        },
        e.prototype.destroy = function() {
            t.prototype.destroy.call(this),
            ImageButtonUtil.removeAll(this)
        },
        e
    } (PopView);
    t.FieldPopView = e,
    __reflect(e.prototype, "tipsPop.FieldPopView")
} (tipsPop || (tipsPop = {}));
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
tipsPop; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.skinName = t.HelpPopSkin,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            var t = this;
            egret.setTimeout(function() {
                t._scorl.scrollPolicyH = "off"
            },
            this, 5e3)
        },
        i.prototype.initEvents = function() {
            ImageButtonUtil.add(this.imgBtn_close, this.onTouchTapIamgeButtonHandler, this),
            IS_RELEASE || window.addEventListener("message", this.onWebMessage.bind(this))
        },
        i.prototype.removeEvents = function() {
            ImageButtonUtil.removeAll(this)
        },
        i.prototype._parseData = function() {
            this._vo = this._data,
            1 == this._vo.type ? this.currentState = "small": this.currentState = "big",
            IS_RELEASE || window.top.postMessage(this._vo.str, "*")
        },
        i.prototype.onWebMessage = function(t) {
            if (!IS_RELEASE) try {
                var e = JSON.parse(t.data);
                "tips_content_change" == e.action && (this.txt_desc.textFlow = (new egret.HtmlTextParser).parse(StringUtil.TransformLineBreak(e.msg)))
            } catch(t) {}
        },
        i.prototype.resetStr = function() {
            function t(t, e, i, n, r) {
                return r ? t.slice(e, i) + n: t.slice(e, i) + n + t.slice(i) + "\n"
            }
            this.txt_desc.width = 675;
            for (var e = this._vo.str,
            i = [], n = 0, r = this._vo.str.length, a = 612, o = 0, s = "", _ = 0; r > _; _++)"\n" == e.charAt(_) && (i.push(e.substring(n, _)), n = _ + 1);
            i.push(e.substring(n, r));
            for (var _ = 0; _ < i.length; _++) {
                var l = !1;
                if (i[_].length < 37) s += i[_] + "\n";
                else {
                    o = 0;
                    for (var h = 0,
                    u = !1,
                    c = 0; c < i[_].length; c++) o += /[\u4e00-\u9fa5]|[\u3002\uff1b\uff0c\uff1a\u201c\u201d\uff08\uff09\u3001\uff1f\u300a\u300b\uff01\u3010\u3011\uffe5\u2018\u2019]/.test(i[_].charAt(c)) ? 16 : 10,
                    o >= a && (u = i[_].length - c >= 37 ? !0 : !1, s += t(i[_], h, c, "\n  ", u), h = c, l = !0, o = 36);
                    l || (s += i[_])
                }
            }
            return s
        },
        i.prototype._upDateView = function() {
            this._vo.title && (this.txt_title.text = this._vo.title),
            this._vo.hideClose && (this.imgBtn_close.visible = !1),
            this.txt_desc.textAlign = this._vo.align || egret.HorizontalAlign.LEFT,
            this._vo.isHtml ? "string" == typeof this._vo.str ? this.txt_desc.textFlow = (new egret.HtmlTextParser).parse(this._vo.str) : this.txt_desc.textFlow = this._vo.str: this.txt_desc.text = this._vo.str + ""
        },
        i.prototype.onTouchTapIamgeButtonHandler = function(t) {
            switch (t.target) {
            case this.imgBtn_close:
                this.hide()
            }
        },
        i.prototype.destroy = function() {
            this._vo = null,
            e.prototype.destroy.call(this),
            window.removeEventListener("message", this.onWebMessage)
        },
        i
    } (PopView);
    t.HelpPopView = e,
    __reflect(e.prototype, "tipsPop.HelpPopView")
} (tipsPop || (tipsPop = {}));
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
tipsPop; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.skinName = t.ItemUsePopViewSkin,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.imgBtn_use.name = "btnUse"
        },
        i.prototype.initEvents = function() {
            ImageButtonUtil.add(this.imgBtn_use, this.onTouchTapIamgeButtonHandler, this)
        },
        i.prototype.removeEvents = function() {
            ImageButtonUtil.removeAll(this)
        },
        i.prototype._parseData = function() {
            this._vo = this._data
        },
        i.prototype._upDateView = function() {
            var e = this,
            i = ~~this._vo.id;
            this.lab_itemId.text = "itemId:" + i,
            this.lab_itemId.visible = !IS_RELEASE;
            var n = this._vo.type || 1;
            if (this.txtCy.visible = 1 === n, 1 === n) this.txt_name.text = ItemXMLInfo.getName(i),
            1 === i ? this.txt_num.text = MainManager.actorInfo.coins + "": this.txt_num.text = ItemManager.getNumByID(i) + "",
            this.icon.source = ItemXMLInfo.getIconURL(i),
            t.getItemDescAsync(i).then(function(t) {
                e.txt_tips.text = t
            });
            else if (3 === n) {
                var r = virtualItem.UserInfoIconManger.Instance.GetItemByType(i);
                this.txt_name.text = r.desc,
                this.icon.source = ClientConfig.GetItemUserIcon(i),
                this.txt_tips.text = r.tips || "",
                this.txt_num.text = ""
            }
            var a = this.scroller_lab.y + this.scroller_lab.height;
            if (this.grp_btns.visible = Boolean(this._vo.caller), this.grp_btns.visible) {
                this.imgBtn_use.visible = Boolean(this._vo.useItemFun);
                var o = 20;
                a += o,
                this.grp_btns.y = a,
                this.grp_btns.validateNow(),
                a += this.grp_btns.height,
                o = 20,
                a += o,
                this.height = this.bg.height = a
            } else {
                var s = 35;
                a += s,
                this.height = this.bg.height = a
            }
        },
        i.prototype.onTouchTapIamgeButtonHandler = function(t) {
            switch (t.target) {
            case this.imgBtn_use:
                var e = this._vo.useItemFun,
                i = this._vo.caller,
                n = this._vo.id;
                this.hide(),
                e.apply(i, [n])
            }
        },
        i.prototype.destroy = function() {
            this._vo = null,
            e.prototype.destroy.call(this)
        },
        i
    } (PopView);
    t.ItemUsePopView = e,
    __reflect(e.prototype, "tipsPop.ItemUsePopView")
} (tipsPop || (tipsPop = {}));
var __reflect = this && this.__reflect ||
function(t, e, i) {
    t.__class__ = e,
    i ? i.push(e) : i = [e],
    t.__types__ = t.__types__ ? i.concat(t.__types__) : i
},
tipsPop; !
function(t) {
    var e = function() {
        function e() {}
        return e.openItemPop = function(e, i, n) {
            var r = PopViewManager.createDefaultStyleObject();
            if (r.effStyle.showAniType = PopEffStyle.CENTER, r.effStyle.relativeToPoint = i, "" != GemsXMLInfo.getName(e.id)) {
                var a = {
                    mark: null,
                    gem: {
                        itemID: e.id
                    },
                    isOnlyItem: !0
                };
                PopViewManager.getInstance().openView(new t.GemDetailPopview(a, null), r, a, n)
            } else PopViewManager.getInstance().openView(new t.ItemPopView(e), r, e, n)
        },
        e.openMarkGemPop = function(e, i, n) {
            var r = PopViewManager.createDefaultStyleObject();
            r.effStyle.showAniType = PopEffStyle.CENTER,
            r.effStyle.relativeToPoint = i;
            var a;
            a = null != e.markInfo ? {
                mark: e.markInfo,
                gem: {
                    itemID: e.id
                },
                isOnlyItem: !1
            }: {
                mark: null,
                gem: {
                    itemID: e.id
                },
                isOnlyItem: !0
            },
            PopViewManager.getInstance().openView(new t.GemDetailPopview(a, null), r, a, n)
        },
        e.openCounterMarkPop = function(e, i, n) {
            var r = PopViewManager.createDefaultStyleObject();
            if (r.effStyle.showAniType = PopEffStyle.CENTER, r.effStyle.relativeToPoint = i, +e.ins > 0 || +e.ins[0] > 0) PopViewManager.getInstance().openView(new t.NormalMarkPopView(e.ins), r, e, n);
            else if (e.ins instanceof CountermarkInfo) {
                var a = e.ins.markID,
                o = CountermarkXMLInfo.getType(a);
                o == CountermarkType.MARK_IS_UNIVERSAL ? PopViewManager.getInstance().openView(new t.UniversalMarkPopView(e), r, e, n) : o == CountermarkType.MARK_IS_COMMON_ABLITY ? PopViewManager.getInstance().openView(new t.AbilityMarkPopView(e), r, e, n) : o == CountermarkType.MARK_IS_SKILL ? PopViewManager.getInstance().openView(new t.SkillMarkPopView(e), r, e, n) : o == CountermarkType.MARK_IS_QUAN_XIAO ? console.error("全效类型刻印tips目前没有制作") : o == CountermarkType.MARK_IS_PIECE ? console.error("piece刻印tips目前没有制作") : console.error("没有符合的类型,请检查ID:" + a + "刻印配置是否存在")
            } else console.error("error param!", e)
        },
        e.openGetDiamondPop = function(t) {
            PopViewManager.getInstance().openView(new AwardDiamondDialog(t))
        },
        e.openSkillPop = function(e, i) {
            PopViewManager.getInstance().openView(new t.SkillPopView(e))
        },
        e.openClothesPop = function(e, i, n, r, a) {
            void 0 === n && (n = !1),
            void 0 === a && (a = !1);
            var o = PopViewManager.createDefaultStyleObject();
            o.effStyle.showAniType = PopEffStyle.CENTER,
            o.effStyle.relativeToPoint = i,
            PopViewManager.getInstance().openView(new t.ClothesPopView(n, a), o, e, r)
        },
        e.openSuitPop = function(e, i) {
            var n = PopViewManager.createDefaultStyleObject();
            n.effStyle.showAniType = PopEffStyle.CENTER,
            n.effStyle.relativeToPoint = i,
            PopViewManager.getInstance().openView(new t.SuitView, n, e)
        },
        e.openManualCarPop = function(e, i) {
            var n = PopViewManager.createDefaultStyleObject();
            n.effStyle.showAniType = PopEffStyle.CENTER,
            n.effStyle.relativeToPoint = i,
            PopViewManager.getInstance().openView(new t.CarView, n, e)
        },
        e.openManualClothesPop = function(e, i) {
            var n = PopViewManager.createDefaultStyleObject();
            n.effStyle.showAniType = PopEffStyle.CENTER,
            n.effStyle.relativeToPoint = i,
            PopViewManager.getInstance().openView(new t.ManualClothesView, n, e)
        },
        e.openHelpPop = function(e, i, n) {
            var r = PopViewManager.createDefaultStyleObject();
            r.effStyle.showAniType = PopEffStyle.CENTER,
            r.effStyle.relativeToPoint = i,
            PopViewManager.getInstance().openView(new t.HelpPopView, r, e, n)
        },
        e.openHelpPopById = function(e) {
            if (!config.Help_tips.hasLoader) return void config.Help_tips.load(function() {
                t.TipsPop.openHelpPopById(e)
            },
            this);
            var i = config.Help_tips.getItem(e),
            n = {};
            n.title = i.title || "活动说明",
            i.type && (n.type = i.type),
            i.html ? (n.str = StringUtil.TransformLineBreak(i.html), n.isHtml = !0) : n.str = StringUtil.TransformLineBreak(i.tips),
            t.TipsPop.openHelpPop(n)
        },
        e.openMulitHelpPop = function(e, i) {
            var n = PopViewManager.createDefaultStyleObject();
            n.effStyle.showAniType = PopEffStyle.CENTER,
            n.effStyle.relativeToPoint = i,
            PopViewManager.getInstance().openView(new t.MulitHelpPopView, n, e)
        },
        e.openTitlePop = function(e, i) {
            if (! (e.SpeNameBonus || e.branchId && e.ruleId)) return void BubblerManager.getInstance().showText("配置错误");
            var n = PopViewManager.createDefaultStyleObject();
            n.effStyle.showAniType = PopEffStyle.CENTER,
            n.effStyle.relativeToPoint = i,
            PopViewManager.getInstance().openView(new t.AchievePopView(e), n)
        },
        e.openTitleInfoPop = function(e) {
            PopViewManager.getInstance().openView(new t.TitlePopView(e))
        },
        e.openFieldPop = function(e, i) {
            var n = PopViewManager.createDefaultStyleObject();
            n.effStyle.showAniType = PopEffStyle.CENTER,
            n.effStyle.relativeToPoint = i,
            PopViewManager.getInstance().openView(new t.FieldPopView, n, e)
        },
        e.openMultiItemsPop = function(e, i, n) {
            PopViewManager.getInstance().hideAll();
            var r = PopViewManager.createDefaultStyleObject();
            r.effStyle.showAniType = PopEffStyle.CENTER,
            r.effStyle.relativeToPoint = n,
            PopViewManager.getInstance().openView(new t.MultiItemsPop, r, {
                reward: e,
                name: i
            })
        },
        e.hideAll = function() {
            PopViewManager.getInstance().hideAll()
        },
        e.showKappaTravelBubble = function() {
            var e = new t.KappaTravelBubble;
            e.horizontalCenter = 0,
            e.y = 50,
            LevelManager.tipLevel.addChild(e)
        },
        e.hideKappaTravelBubble = function() {
            for (var e, i = 0; i < LevelManager.tipLevel.numChildren; i++) {
                var n = LevelManager.tipLevel.getChildAt(i);
                if (n instanceof t.KappaTravelBubble) {
                    e = n;
                    break
                }
            }
            e && (e.parent.removeChild(e), e.destroy())
        },
        e
    } ();
    t.TipsPop = e,
    __reflect(e.prototype, "tipsPop.TipsPop")
} (tipsPop || (tipsPop = {}));
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
tipsPop; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.skinName = MultiItemsPopSkin,
            e
        }
        return __extends(e, t),
        e.prototype._parseData = function() {
            this.info = this._data.reward || "",
            this.gift_name = this._data.name || ""
        },
        e.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this)
        },
        e.prototype._upDateView = function() {
            if (t.prototype._upDateView.call(this), this.info) {
                var e = ItemManager.parseItem(this.info);
                this._group.removeChildren();
                for (var n = 0; n < e.length; n++) {
                    var r = new i;
                    r.setData(e[n]),
                    this._group.addChild(r)
                }
                this.name_label.text = this.gift_name
            }
        },
        e.prototype.destroy = function() {
            this.info = null,
            this._group.removeChildren(),
            t.prototype.destroy.call(this)
        },
        e
    } (PopView);
    t.MultiItemsPop = e,
    __reflect(e.prototype, "tipsPop.MultiItemsPop");
    var i = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t.skinName = MultiItemSkin,
            t
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            var i = this;
            e.prototype.childrenCreated.call(this),
            this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this),
            ImageButtonUtil.add(this.icon,
            function() {
                5 != i.info.id && t.TipsPop.openItemPop({
                    id: i.info.id
                })
            },
            this)
        },
        i.prototype.setData = function(t) {
            t && (this.info = t, this.updateView())
        },
        i.prototype.updateView = function() {
            this.txtCount.text = core.gameUtil.ConvertToTenThousand(this.info.num),
            this.icon.source = ClientConfig.getItemIcon(this.info.id),
            this.txtName.text = StringUtil.parseStrLimitLen(ItemXMLInfo.getName(this.info.id), 7),
            this.cacheAsBitmap = !0
        },
        i.prototype.destroy = function() {
            ImageButtonUtil.removeAll(this),
            this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this)
        },
        i
    } (eui.ItemRenderer);
    t.MultiItem = i,
    __reflect(i.prototype, "tipsPop.MultiItem")
} (tipsPop || (tipsPop = {}));
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
tipsPop; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.userId = 0,
            e.skinName = TeamApplyPopSkin,
            e
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            ImageButtonUtil.add(this.btnRefuse, this.onRefuse, this),
            ImageButtonUtil.add(this.btnAccept, this.onAccept, this),
            ImageButtonUtil.add(this.imaClose, this.hide, this),
            ImageButtonUtil.add(this.head, this.onUserInfo, this)
        },
        e.prototype._upDateView = function() {
            var t = this,
            e = this._data;
            this.userId = e.sender_id,
            UserInfoManager.getInfo(e.sender_id,
            function(e) {
                t.head.setData({
                    headId: e.head_id,
                    headFrameId: e.head_frame_id
                }),
                t.txtName.text = "赛尔ID：" + e.nick,
                t.txtId.text = "米米号：" + e.userID
            },
            this)
        },
        e.prototype.onRefuse = function() {
            var t = this;
            SocketConnection.sendByQueue(CommandID.TEAM_ANSWER, [this.userId, 0],
            function() {
                PopViewManager.getInstance().hideView(t)
            },
            function() {
                PopViewManager.getInstance().hideView(t)
            })
        },
        e.prototype.onAccept = function() {
            var t = this;
            SocketConnection.sendByQueue(CommandID.TEAM_ANSWER, [this.userId, 1],
            function() {
                PopViewManager.getInstance().hideView(t)
            },
            function() {
                PopViewManager.getInstance().hideView(t)
            })
        },
        e.prototype.onUserInfo = function() {
            ModuleManager.showModule("personalInformation", ["peakJihadFirstPage", "playerInfo"], this.userId, "PersonalinformationIdCardPopView", AppDoStyle.NULL)
        },
        e.prototype.destroy = function() {
            t.prototype.destroy.call(this),
            ImageButtonUtil.removeAll(this)
        },
        e
    } (PopView);
    t.TeamApplyView = e,
    __reflect(e.prototype, "tipsPop.TeamApplyView")
} (tipsPop || (tipsPop = {}));
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
tipsPop; !
function(t) {
    var e = function(t) {
        function e(e) {
            var i = t.call(this) || this;
            return i.skinName = "TitlePopViewSkin",
            i.titleId = e,
            i
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            this.txtName.text = AchieveXMLInfo.getTitle(this.titleId),
            this.txtAchieve.text = AchieveXMLInfo.getTitleDesc(this.titleId);
            var t = AchieveXMLInfo.getTitleEffDesc(this.titleId);
            t && "无称号特效" != t ? (this.txtEff.text = t, this.groupEff.visible = !0, this.txtNoEff.visible = !1, this.txtTitle.text = "属性称号") : (this.groupEff.visible = !1, this.txtNoEff.visible = !0, this.txtTitle.text = "纪念称号")
        },
        e
    } (PopView);
    t.TitlePopView = e,
    __reflect(e.prototype, "tipsPop.TitlePopView")
} (tipsPop || (tipsPop = {}));
var __awaiter = this && this.__awaiter ||
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
tipsPop; !
function(t) {
    function e(t, e) {
        var i = CountermarkXMLInfo.getMintmarkQuality(t);
        CountermarkXMLInfo.getType(t) != CountermarkType.MARK_IS_UNIVERSAL && (i = 0),
        e || (e = "");
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
        n = "#C4D7FE";
        var r = "<font color='" + n + "'>" + e + CountermarkXMLInfo.getDes(t) + "</font>";
        return (new egret.HtmlTextParser).parse(r)
    }
    function i(t) {
        var e, i = SkillXMLInfo.getCategory(t);
        return e = 1 == i ? 16711680 : 2 == i ? 16751103 : 10092288,
        {
            color: e,
            categorStr: SkillXMLInfo.getCategoryName(t)
        }
    }
    function n(t, e) {
        var i, i = SkillInfoTip.showPetInfoTip(t, e),
        n = i.split("\r");
        return n.length > 2 ? (n = n.slice(2, n.length), i = n.join("\r")) : (i = SkillXMLInfo.getCategoryName(e), i = "造成" + i + "伤害"),
        (new egret.HtmlTextParser).parse(i)
    }
    function r(t) {
        return __awaiter(this, void 0, void 0,
        function() {
            var e, i, n;
            return __generator(this,
            function(r) {
                switch (r.label) {
                case 0:
                    return e = "",
                    ItemXMLInfo.getCatID(t) !== core.constant.ItemCatID.TYPE_23 ? [3, 2] : [4, config.Boxordinary.loadAsync()];
                case 1:
                    for (i = r.sent(), n = 0; n < i.length; n++) if (i[n].itemid == t) {
                        e = i[n].tips;
                        break
                    }
                    return [3, 3];
                case 2:
                    e = ItemTipXMLInfo.getItemDes(t),
                    r.label = 3;
                case 3:
                    return e || (e = "漫长宇宙航行中收获的珍贵收藏品，记录着我们一路航行来的记忆"),
                    [2, Promise.resolve(e)]
                }
            })
        })
    }
    t.getCounterMaekNameHtml = e,
    t.getSkillCategor = i,
    t.getSkillDescHtml = n,
    t.getItemDescAsync = r
} (tipsPop || (tipsPop = {}));
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
tipsPop; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.addEventListener(egret.Event.REMOVED_FROM_STAGE, e.destroy, e),
            e.skinName = "ItemTipsGainWayItemSkin",
            e
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this),
            this._initEvents()
        },
        e.prototype._initEvents = function() {},
        e.prototype._removeEvents = function() {
            this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this)
        },
        Object.defineProperty(e.prototype, "selected", {
            get: function() {
                return egret.superSetter(e, this, "selected")
            },
            set: function(t) {
                egret.superSetter(e, this, "selected")
            },
            enumerable: !0,
            configurable: !0
        }),
        e.prototype.dataChanged = function() {
            this._curData = this.data,
            "" == this._curData["goto"] && "" == this._curData.frontGoto && "" == this._curData.text ? (this.currentState = "state1", this.tx_gainWayname_1.text = this._curData.show, this.touchEnabled = this.touchChildren = !1, this.tx_gainWayname_1.touchEnabled = !1, ImageButtonUtil.add(this.gr_gainWay_items,
            function() {
                console.log("111")
            },
            this, !1)) : (this.currentState = "state2", this.tx_gainWayname_2.text = this._curData.show, this.touchEnabled = this.touchChildren = !0, this.tx_gainWayname_2.touchEnabled = !1, ImageButtonUtil.add(this.gr_gainWay_items,
            function() {
                console.log("222")
            },
            this, !1))
        },
        e.prototype.destroy = function() {
            this._removeEvents()
        },
        e
    } (eui.ItemRenderer);
    t.ItemTipsGainWayItem = e,
    __reflect(e.prototype, "tipsPop.ItemTipsGainWayItem")
} (tipsPop || (tipsPop = {}));
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
tipsPop; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.skinName = t.MulitRBitemSkin,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this)
        },
        i.prototype.setDesc = function(t) {
            this.txt_desc.text = t
        },
        i
    } (eui.RadioButton);
    t.MulitRBitem = e,
    __reflect(e.prototype, "tipsPop.MulitRBitem")
} (tipsPop || (tipsPop = {}));
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
tipsPop; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.skinName = t.CarPopViewSkin,
            i
        }
        return __extends(i, e),
        i.prototype.initEvents = function() {
            this.car_show.addEventListener(egret.Event.COMPLETE, this._onSetTextureComplete, this),
            ImageButtonUtil.add(this.btnClose, this.hide, this)
        },
        i.prototype.removeEvents = function() {
            ImageButtonUtil.removeAll(this),
            this.car_show.removeEventListener(egret.Event.COMPLETE, this._onSetTextureComplete, this)
        },
        i.prototype._parseData = function() {
            this._customData = this._data
        },
        i.prototype._upDateView = function() {
            this.txt_name.text = ItemXMLInfo.getName(this._customData.id);
            var t = ItemTipXMLInfo.getItemDes(this._customData.id);
            this.txt_desc.text = t ? t: "无",
            this.car_show.source = ClientConfig.getMountIcon(this._customData.id)
        },
        i.prototype._onSetTextureComplete = function(t) {
            var e = t.currentTarget;
            DisplayUtil.keepEqualDis(e, 181, 135, !0),
            e.anchorOffsetX = e.width / 2,
            e.anchorOffsetY = e.height,
            e.x = e.y = 0
        },
        i.prototype.destroy = function() {
            this._customData = null,
            e.prototype.destroy.call(this)
        },
        i
    } (PopView);
    t.CarView = e,
    __reflect(e.prototype, "tipsPop.CarView")
} (tipsPop || (tipsPop = {}));
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
tipsPop; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.skinName = t.ManualclothespopviewSkin,
            i
        }
        return __extends(i, e),
        i.prototype.initEvents = function() {},
        i.prototype.removeEvents = function() {
            ImageButtonUtil.removeAll(this)
        },
        i.prototype._parseData = function() {
            this._customData = this._data
        },
        i.prototype._upDateView = function() {
            this.txtName.text = ItemXMLInfo.getName(this._customData.clothesId),
            this.icon.source = ItemXMLInfo.getIconURL(this._customData.clothesId);
            var t = ItemSeXMLInfo.getItemDes(this._customData.clothesId, 0);
            this.txt_desc.text = t ? t: "无"
        },
        i.prototype.destroy = function() {
            this._customData = null,
            e.prototype.destroy.call(this)
        },
        i
    } (PopView);
    t.ManualClothesView = e,
    __reflect(e.prototype, "tipsPop.ManualClothesView")
} (tipsPop || (tipsPop = {}));
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
tipsPop; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.addEventListener(egret.Event.REMOVED_FROM_STAGE, i.destroy, i),
            i.skinName = t.SuitIconSkin,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this)
        },
        i.prototype.dataChanged = function() {
            this.icon_item.source = ItemXMLInfo.getIconURL(this.data)
        },
        i.prototype.destroy = function() {
            this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this),
            this.parent && this.parent.removeChild(this)
        },
        i
    } (eui.ItemRenderer);
    t.SuitItemIcon = e,
    __reflect(e.prototype, "tipsPop.SuitItemIcon")
} (tipsPop || (tipsPop = {}));
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
tipsPop; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i._arry = new eui.ArrayCollection,
            i.skinName = t.SuitViewSkin,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.scroller_item.viewport = this.viewport_list,
            this.viewport_list.itemRenderer = t.SuitItemIcon,
            this.viewport_list.dataProvider = this._arry
        },
        i.prototype.initEvents = function() {
            ImageButtonUtil.add(this.btnClose, this._onTouchImageButtonHandler, this),
            this.hero_show.addEventListener(egret.Event.COMPLETE, this._onSetTextureComplete, this),
            this.viewport_list.addEventListener(eui.ItemTapEvent.ITEM_TAP, this._onTouchClothesHanlder, this)
        },
        i.prototype.removeEvents = function() {
            ImageButtonUtil.removeAll(this),
            this.hero_show.removeEventListener(egret.Event.COMPLETE, this._onSetTextureComplete, this),
            this.viewport_list.removeEventListener(eui.ItemTapEvent.ITEM_TAP, this._onTouchClothesHanlder, this)
        },
        i.prototype._onTouchClothesHanlder = function(e) {
            var i = {};
            i.clothesId = e.item,
            t.TipsPop.openClothesPop(i)
        },
        i.prototype._onSetTextureComplete = function(t) {
            var e = t.currentTarget;
            DisplayUtil.keepEqualDis(e, 181, 135, !0),
            e.anchorOffsetX = e.width / 2,
            e.anchorOffsetY = e.height,
            e.x = e.y = 0
        },
        i.prototype._parseData = function() {
            this._customData = this._data
        },
        i.prototype._upDateView = function() {
            this._arry.replaceAll(SuitXMLInfo.getCloths(this._customData.id)),
            this._arry.refresh();
            var t = ClientConfig.getResPath("assets/item/cloth/suiticon/" + this._customData.id + ".png");
            this.hero_show.source = t,
            this.txt_suit.text = SuitXMLInfo.getName(this._customData.id),
            this.txt_normal.text = SuitXMLInfo.getSuitNormalDesc(this._customData.id);
            var e = ItemSeXMLInfo.getSuitEff(this._customData.id);
            this.Grp_suitEff.visible = "" !== e,
            this.Grp_suitEff.visible && (this.txt_desc.text = e)
        },
        i.prototype._onTouchImageButtonHandler = function(t) {
            switch (t.currentTarget) {
            case this.btnClose:
                this.hide()
            }
        },
        i.prototype.destroy = function() {
            this._customData = null,
            e.prototype.destroy.call(this)
        },
        i
    } (PopView);
    t.SuitView = e,
    __reflect(e.prototype, "tipsPop.SuitView")
} (tipsPop || (tipsPop = {}));
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
tipsPop; !
function(t) {
    var e = function(e) {
        function i(t, i) {
            var n = e.call(this) || this;
            return n.GEM_GRADE_UP_ARR = [2, 4, 4, 5, 7, 8, 10, 16, 20],
            n.inlayRates = [100, 100, 100, 100, 100, 100, 100, 70, 40, 30],
            n.mixCost = [2, 4, 4, 5, 7, 8, 10, 16, 20],
            n.secMixCost = [1e4, 2e4, 3e4, 4e4],
            n._gemCriticalID = 1800201,
            n.markInfo = t.mark,
            n.gem = t.gem,
            n.itemId = n.gem.itemID,
            n.callback = i,
            n.skinName = "GemDetailSkinGianWaySkin",
            n.isOnlyItem = t.isOnlyItem,
            n
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            var i = this;
            e.prototype.childrenCreated.call(this),
            this.visible = !1,
            this._itemArry = new eui.ArrayCollection,
            this.list_gainWay.itemRenderer = t.ItemTipsGainWayItem,
            this.scoreller_gainWay.viewport = this.list_gainWay,
            this.list_gainWay.dataProvider = this._itemArry,
            this.list_gainWay.addEventListener(eui.ItemTapEvent.ITEM_TAP, this._onTouchTapItem, this),
            this.txtItemId.visible = !IS_RELEASE,
            this.txtItemId.text = "itemId: " + this.itemId,
            this.rarity = ItemXMLInfo.getItemRarity(this.itemId),
            this.imge_icon.source = ClientConfig.getItemIcon(this.itemId);
            var n = GemsXMLInfo.getLv(this.gem.itemID);
            GemsXMLInfo.getCategory(this.gem.itemID) <= 100 ? this.txtName.text = GemsXMLInfo.getName(this.gem.itemID) + " Lv" + n: this.txtName.text = GemsXMLInfo.getName(this.gem.itemID);
            var r = 0;
            ItemManager.getGemInfos().forEach(function(t) {
                t.itemID == i.gem.itemID && (r = t.itemNum)
            }),
            this.txtNum.text = r + "",
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
                var t = i.gem,
                e = GemsXMLInfo.getLv(t.itemID);
                if (e >= 10) return void Alarm.show("10级宝石无法再合成！");
                var n = i.GEM_GRADE_UP_ARR[GemsXMLInfo.getLv(t.itemID) - 1],
                r = Math.floor(t.itemNum / n);
                return 1 > r ? void Alarm.show("没有足够的宝石无法合成") : void 0
            },
            this);
            var a = GemsXMLInfo.getEffect(this.gem.itemID);
            a += "，镶嵌成功率:<font color='0x96f901'>" + this.inlayRates[n - 1] + "</font>%",
            this.gem.itemID >= this._gemCriticalID ? n >= 5 || (a += "，升级更高一级所需石之砂数量：<font color='0x96f901'>" + this.secMixCost[n - 1] + "</font>") : 10 == n || (a += "，合成更高一级所需数量:<font color='0x96f901'>" + this.mixCost[n - 1] + "</font>"),
            this.txtDes.textFlow = (new egret.HtmlTextParser).parse(a),
            this.validateNow(),
            this.isOnlyItem && (ImageButtonUtil.removeAll(this), this.imgInlay.visible = this.imgMix.visible = !1),
            GainWayManger.init().then(function() {
                i.setGainWayView()
            })
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
                }) : (BubblerManager.getInstance().showText("镶嵌成功"), t.markInfo.gemID = t.gem.itemID, EventManager.dispatchEvent(new CountermarkEvent(CountermarkEvent.UPGRADE_END, t.markInfo)), AwardManager.resume()),
                egret.setTimeout(function() {
                    ItemManager.getGem()
                },
                t, 300),
                t.callback && t.callback(),
                PopViewManager.getInstance().hideAll()
            },
            function(e) {
                t.touchChildren = !0
            })
        },
        i.prototype.setGainWayView = function() {
            var t = (config.GainWay.getItem(this.itemId), 13),
            e = this.imgInlay.height + this.imgInlay.bottom + t;
            if (GainWayManger.getIsHaveTitleById(this.itemId)) {
                var i = GainWayManger.getGainWaysById(this.itemId).length >= 3 ? 3 : GainWayManger.getGainWaysById(this.itemId).length;
                this.gr_gainWay.visible = !0,
                this.gr_gainWay.y = this.txtDes.y + this.txtDes.height + 1.5 * t;
                var n = GainWayManger.getGainWaysById(this.itemId).length >= 3 ? this.scoreller_gainWay.height: 41 * i - 6;
                this.imgInlay.visible ? this.imge_bg_addGainWay.height = this.gr_Tips.height = this.gr_gainWay.y + 27 + n + e: this.imge_bg_addGainWay.height = this.gr_Tips.height = this.gr_gainWay.y + 27 + n + this.imgInlay.bottom + t,
                this.updateRender()
            } else this.gr_gainWay.visible = !1,
            this.imgInlay.visible ? this.imge_bg_addGainWay.height = this.gr_Tips.height = this.txtDes.y + this.txtDes.height + e: this.imge_bg_addGainWay.height = this.gr_Tips.height = this.txtDes.y + this.txtDes.height + 2 * t;
            GameInfo.isChecking && (this.gr_gainWay.visible = !1),
            this.visible = !0
        },
        i.prototype._onTouchTapItem = function(t) {
            var e = this;
            this._selectVo = this._itemArry.getItemAt(this.list_gainWay.selectedIndex),
            console.log('"+msg+"' + this._selectVo.show),
            GainWayManger.setGainWayGoto(this._selectVo,
            function() {
                e.hide(),
                PopViewManager.getInstance().hideAll(),
                AwardManager.hideDialog()
            })
        },
        i.prototype.updateRender = function() {
            var t = GainWayManger.getGainWaysById(this.itemId);
            this._itemArry.replaceAll(t),
            this._itemArry.refresh(),
            this.list_gainWay.validateNow()
        },
        Object.defineProperty(i.prototype, "rarity", {
            set: function(t) {
                this._rarity = t,
                this._rarity >= 1 ? this.imge_item_bg.source = "rarity_item_" + this._rarity + "_png": this.imge_item_bg.source = "common_item_bg_style_70_70_png"
            },
            enumerable: !0,
            configurable: !0
        }),
        i.prototype.removeEvents = function() {
            ImageButtonUtil.removeAll(this)
        },
        i.prototype.destroy = function() {
            this.callback && this.callback(),
            this.callback = null
        },
        i
    } (PopView);
    t.GemDetailPopview = e,
    __reflect(e.prototype, "tipsPop.GemDetailPopview")
} (tipsPop || (tipsPop = {}));
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
tipsPop; !
function(t) {
    var e = function(e) {
        function i(t) {
            var i = e.call(this) || this;
            return i.skinName = "ItemTipsAddGianWaySkin",
            i.itemId = t.id,
            i.itemType = t.type || 1,
            i.callback = t.useItemFun,
            i.caller = t.caller,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            var e = this;
            if (this.visible = !1, this._itemArry = new eui.ArrayCollection, this.list_gainWay.itemRenderer = t.ItemTipsGainWayItem, this.scoreller_gainWay.viewport = this.list_gainWay, this.list_gainWay.dataProvider = this._itemArry, this.list_gainWay.addEventListener(eui.ItemTapEvent.ITEM_TAP, this._onTouchTapItem, this), this.txtItemId.visible = !IS_RELEASE, this.txtItemId.text = "itemId: " + this.itemId, 1 === this.itemType) {
                if (this.txtName.text = ItemXMLInfo.getName(this.itemId), 1 === this.itemId) this.txtNum.text = core.gameUtil.ConvertToTenThousand(MainManager.actorInfo.coins, 0);
                else if (3 === this.itemId) SocketConnection.sendByQueue(CommandID.PET_GET_EXP, [],
                function(t) {
                    var i = t.data,
                    n = i.readUnsignedInt();
                    e.txtNum.text = core.gameUtil.ConvertToTenThousand(n, 0)
                });
                else if (ItemXMLInfo.getItemObj(this.itemId).hideNum) this.grp_itemHave.visible = !1;
                else if (12 === this.itemId) {
                    var i = ItemManager.getNumByID(1400153) + ItemManager.getNumByID(2500005);
                    this.txtNum.text = core.gameUtil.ConvertToTenThousand(i, 0)
                } else this.txtNum.text = core.gameUtil.ConvertToTenThousand(ItemManager.getNumByID(this.itemId), 0);
                this.imge_icon.source = ClientConfig.getItemIcon(this.itemId),
                this.rarity = ItemXMLInfo.getItemRarity(this.itemId),
                t.getItemDescAsync(this.itemId).then(function(t) {
                    e.txtDescribe.text = t,
                    e.txtDescribe.height = 18 * Math.ceil(t.length / 24),
                    GainWayManger.init().then(function() {
                        e.setGainWayView()
                    })
                })
            } else if (3 === this.itemType) {
                var n = virtualItem.UserInfoIconManger.Instance.GetItemByType(this.itemId);
                this.txtName.text = n.desc,
                this.txtDescribe.text = n.tips || "",
                this.txtNum.text = ""
            }
            this.btnUse.visible = !!this.callback,
            this.btnUse.name = "btnUse",
            this.callback && ImageButtonUtil.add(this.btnUse,
            function() {
                e.callback.call(e.caller, [e.itemId]),
                e.hide()
            },
            this)
        },
        i.prototype.setGainWayView = function() {
            var t = (config.GainWay.getItem(this.itemId), 13),
            e = this.btnUse.height + this.btnUse.bottom + t;
            if (GainWayManger.getIsHaveTitleById(this.itemId)) {
                var i = GainWayManger.getGainWaysById(this.itemId).length,
                n = i >= 3 ? 3 : i;
                this.gr_gainWay.visible = !0,
                this.gr_gainWay.y = this.txtDescribe.y + this.txtDescribe.height + 1.5 * t,
                this.list_gainWay.touchEnabled = i >= 3;
                var r = i >= 3 ? this.scoreller_gainWay.height: 41 * n - 6;
                this.btnUse.visible ? this.imge_bg_addGainWay.height = this.gr_Tips.height = this.gr_gainWay.y + 27 + r + e: this.imge_bg_addGainWay.height = this.gr_Tips.height = this.gr_gainWay.y + 27 + r + this.btnUse.bottom + t,
                this.updateRender()
            } else this.gr_gainWay.visible = !1,
            this.btnUse.visible ? this.imge_bg_addGainWay.height = this.gr_Tips.height = this.txtDescribe.y + this.txtDescribe.height + e: this.imge_bg_addGainWay.height = this.gr_Tips.height = this.txtDescribe.y + this.txtDescribe.height + 2 * t;
            GameInfo.isChecking && (this.gr_gainWay.visible = !1),
            this.visible = !0
        },
        i.prototype._onTouchTapItem = function(t) {
            var e = this;
            this._selectVo = this._itemArry.getItemAt(this.list_gainWay.selectedIndex),
            console.log('"+msg+"' + this._selectVo.show),
            GainWayManger.setGainWayGoto(this._selectVo,
            function() {
                e.hide(),
                PopViewManager.getInstance().hideAll(),
                AwardManager.hideDialog()
            })
        },
        i.prototype.updateRender = function() {
            var t = GainWayManger.getGainWaysById(this.itemId);
            this._itemArry.replaceAll(t),
            this._itemArry.refresh(),
            this.list_gainWay.validateNow()
        },
        Object.defineProperty(i.prototype, "rarity", {
            set: function(t) {
                this._rarity = t,
                this._rarity >= 1 ? this.imge_item_bg.source = "rarity_item_" + this._rarity + "_png": this.imge_item_bg.source = "common_item_bg_style_70_70_png"
            },
            enumerable: !0,
            configurable: !0
        }),
        i.prototype.destroy = function() {
            ImageButtonUtil.removeAll(this),
            e.prototype.destroy.call(this)
        },
        i
    } (PopView);
    t.ItemPopView = e,
    __reflect(e.prototype, "tipsPop.ItemPopView")
} (tipsPop || (tipsPop = {}));
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
tipsPop; !
function(t) {
    var e = function(e) {
        function i(t) {
            var i = e.call(this) || this;
            return i.additionDescWord = [],
            i.skinName = "SkillTipsSkin",
            i.skillId = t.id,
            i.petInfo = t.petInfo,
            i.callback = t.onChangeFun,
            i.caller = t.caller,
            i.ensureWord = t.ensureWord,
            i.additionDescWord = t.additionDescWord,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            var e, i = this;
            if (4 == SkillXMLInfo.getCategory(this.skillId)) e = ClientConfig.getpettypeticon("prop");
            else {
                var n = SkillXMLInfo.getTypeID(this.skillId);
                e = ClientConfig.getpettypeticon(String(n))
            }
            this.imgIcon.source = e,
            this.txtSkillName.text = SkillXMLInfo.getName(this.skillId);
            var r = t.getSkillCategor(this.skillId);
            this.txtType.textColor = r.color,
            this.txtType.text = r.categorStr,
            this.txtDamage.text = "威力：" + SkillXMLInfo.getDamage(this.skillId);
            var a = SkillXMLInfo.getPP(this.skillId);
            this.txtPP.text = "PP：" + a + "/" + a,
            this.txtDescribe.textFlow = t.getSkillDescHtml(this.petInfo, this.skillId);
            var o = egret.setTimeout(function() {
                egret.clearTimeout(o),
                i.txtDescribe.y = 0,
                i.imgScrollBar.visible = i.imgScrollBarBG.visible = i.txtDescribe.height > i.scroller.height,
                i.imgScrollBar.visible && (i.scroller.addEventListener(egret.Event.CHANGE, i.onMove, i), i.imgScrollBar.height = i.imgScrollBarBG.height * i.scroller.height / i.txtDescribe.height)
            },
            this, 50);
            this.btnChange.visible = !!this.callback || !!this.caller,
            this.btnChange.name = "btnChange",
            this.callback ? ImageButtonUtil.add(this.btnChange,
            function() {
                i.callback.apply(i.caller, [i.skillId, i.petInfo]),
                i.hide()
            },
            this) : this.caller || (this.height -= 30),
            this.ensureWord && (this.txtEnsure.text = this.ensureWord),
            this.additionDescWord && (this.txtAdditonDesc.textFlow = this.additionDescWord)
        },
        i.prototype.destroy = function() {
            ImageButtonUtil.removeAll(this),
            this.scroller.removeEventListener(egret.Event.CHANGE, this.onMove, this),
            e.prototype.destroy.call(this)
        },
        i.prototype.onMove = function(t) {
            var e = this.scroller.viewport.scrollV;
            if (0 > e) this.imgScrollBar.height = this.imgScrollBarBG.height * this.scroller.height / (this.txtDescribe.height - e),
            this.imgScrollBar.y = 74;
            else if (e > this.txtDescribe.height - this.scroller.height) this.imgScrollBar.height = this.imgScrollBarBG.height * this.scroller.height / (e + this.scroller.height),
            this.imgScrollBar.y = 74 + this.imgScrollBarBG.height - this.imgScrollBar.height;
            else {
                this.imgScrollBar.height = this.imgScrollBarBG.height * this.scroller.height / this.txtDescribe.height;
                var i = e / (this.txtDescribe.height - this.scroller.height);
                this.imgScrollBar.y = 74 + (this.imgScrollBarBG.height - this.imgScrollBar.height) * i
            }
        },
        i
    } (PopView);
    t.SkillPopView = e,
    __reflect(e.prototype, "tipsPop.SkillPopView")
} (tipsPop || (tipsPop = {}));
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
tipsPop; !
function(t) {
    var e = function(e) {
        function i(t) {
            var i = e.call(this) || this;
            return i.skinName = "AbilityMarkTipsSkin",
            i.markData = t,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            var e = this,
            i = this.markData.ins.markID;
            this.txtMarkName.textFlow = t.getCounterMaekNameHtml(i),
            this.txtTypeName.text = CountermarkXMLInfo.getTypeName(i);
            var n = "限定：" + CountermarkXMLInfo.getRestrictDes(i);
            this.txtRestrict.text = n;
            var r = this.markData.ins.bindMonID;
            if (r) {
                var a = PetXMLInfo.getName(r);
                this.txtBind.text = "装备于精灵：" + a
            } else this.txtBind.text = "暂未装备";
            for (var o = CountermarkXMLInfo.getArg(i), s = 0; 6 > s; s++) this["txtBaseAttr" + (s + 1)].text = "+" + o[s];
            this.btnPutOn.visible = Boolean(this.markData.putOnCallBack),
            this.btnTakeOff.visible = Boolean(this.markData.takeOffCallBack),
            ImageButtonUtil.add(this.btnPutOn,
            function() {
                var t = e.markData.putOnCallBack,
                i = e.markData.caller,
                n = e.markData.ins;
                e.hide(),
                t.apply(i, [n])
            },
            this),
            ImageButtonUtil.add(this.btnTakeOff,
            function() {
                var t = e.markData.takeOffCallBack,
                i = e.markData.caller,
                n = e.markData.ins;
                e.hide(),
                t.apply(i, [n]),
                e.markData.ins.bindMonID = 0
            },
            this)
        },
        i.prototype.destroy = function() {
            ImageButtonUtil.removeAll(this),
            e.prototype.destroy.call(this)
        },
        i
    } (PopView);
    t.AbilityMarkPopView = e,
    __reflect(e.prototype, "tipsPop.AbilityMarkPopView")
} (tipsPop || (tipsPop = {}));
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
tipsPop; !
function(t) {
    var e = function(e) {
        function i(t) {
            var i = e.call(this) || this;
            return i.skinName = "NormalMarkTipsSkin",
            t[0] > 0 ? (i.markId = t[0], i.markLevel = t[1]) : i.markId = Number(t),
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            var e = this.markId;
            this.txtMarkName.textFlow = t.getCounterMaekNameHtml(e),
            this.txtMintMarkClassName.text = "(" + CountermarkXMLInfo.getClassNameByMarkId(e) + ")",
            this.txtTypeName.text = CountermarkXMLInfo.getTypeName(e);
            var i = CountermarkXMLInfo.getMonsterIDs(e);
            i.length > 0 ? (this.txtRestrict.visible = !0, this.txtRestrict.text = "绑定于精灵:" + PetXMLInfo.getName(i[i.length - 1])) : (this.txtRestrict.visible = !1, this.txtRestrict.text = "暂未绑定");
            var n = [],
            r = [],
            a = CountermarkXMLInfo.getType(e);
            if (a == CountermarkType.MARK_IS_COMMON_ABLITY) for (var o = CountermarkXMLInfo.getArg(e), s = 0; 6 > s; s++) n[s] = "+" + o[s];
            else if (a == CountermarkType.MARK_IS_UNIVERSAL) {
                var _ = CountermarkXMLInfo.getBaseAttriValue(e),
                o = CountermarkXMLInfo.getMaxAttriValue(e);
                this.markLevel > 0 && (_ = o);
                for (var s = 0; 6 > s; s++) n[s] = "+" + _[s] + "/" + o[s];
                var l = CountermarkXMLInfo.getExtraAttriValue(e);
                if (l && l.length > 0) for (var s = 0; 6 > s; s++) r[s] = "+" + l[s]
            } else console.error('当前刻印类型："' + CountermarkXMLInfo.getTypeName(e) + '" 不支持tips显示');
            for (var s = 0; 6 > s; s++) this["txtBaseAttr" + (s + 1)].text = n[s];
            var h = r.length > 0;
            if (this.txtNoExtraAttr.visible = !h, this.txtHasExtraAttr.visible = this.groupExtraAttr.visible = h, this.height = h ? 240 : 178, h) for (var s = 0; 6 > s; s++) this["txtExtraAttr" + (s + 1)].text = r[s]
        },
        i
    } (PopView);
    t.NormalMarkPopView = e,
    __reflect(e.prototype, "tipsPop.NormalMarkPopView")
} (tipsPop || (tipsPop = {}));
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
tipsPop; !
function(t) {
    var e = function(e) {
        function i(t) {
            var i = e.call(this) || this;
            return i.skinName = "SkillMarkTipsSkin",
            i.markData = t,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            var e = this,
            i = this.markData.ins.markID;
            this.txtMarkName.textFlow = t.getCounterMaekNameHtml(i),
            this.txtTypeName.text = CountermarkXMLInfo.getTypeName(i);
            var n = "限定：" + CountermarkXMLInfo.getRestrictDes(i);
            this.txtRestrict.text = n;
            var r = this.markData.ins.bindMonID;
            if (r) {
                var a = PetXMLInfo.getName(r);
                this.txtBind.text = "装备于精灵：" + a
            } else this.txtBind.text = "暂未装备";
            this.txtSkillDescribe.text = "刻印效果：" + CountermarkXMLInfo.getEffectDes(i),
            this.btnPutOn.visible = Boolean(this.markData.putOnCallBack),
            this.btnTakeOff.visible = Boolean(this.markData.takeOffCallBack),
            ImageButtonUtil.add(this.btnPutOn,
            function() {
                var t = e.markData.putOnCallBack,
                i = e.markData.caller,
                n = e.markData.ins;
                e.hide(),
                t.apply(i, [n])
            },
            this),
            ImageButtonUtil.add(this.btnTakeOff,
            function() {
                var t = e.markData.takeOffCallBack,
                i = e.markData.caller,
                n = e.markData.ins;
                e.hide(),
                t.apply(i, [n]),
                e.markData.ins.bindMonID = 0
            },
            this)
        },
        i.prototype.destroy = function() {
            ImageButtonUtil.removeAll(this),
            e.prototype.destroy.call(this)
        },
        i
    } (PopView);
    t.SkillMarkPopView = e,
    __reflect(e.prototype, "tipsPop.SkillMarkPopView")
} (tipsPop || (tipsPop = {}));
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
tipsPop; !
function(t) {
    var e = function(e) {
        function i(t) {
            var i = e.call(this) || this;
            return i.skinName = "UniversalMarkTipsSkin",
            i.markData = t,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            this.update(),
            this.addEvent(),
            this.btnUp.name = "btnLevelUp",
            this.btnPutOn.name = "btnPutOn"
        },
        i.prototype.destroy = function() {
            ImageButtonUtil.removeAll(this),
            e.prototype.destroy.call(this)
        },
        i.prototype.hide = function() {
            this.parent.parent && this.parent.parent.hide && this.parent.parent.hide(),
            e.prototype.hide.call(this)
        },
        i.prototype.addEvent = function() {
            var t = this,
            e = this.markData.ins;
            ImageButtonUtil.add(this.btnPutOn,
            function() {
                var e = t.markData.putOnCallBack,
                i = t.markData.caller,
                n = t.markData.ins;
                t.hide(),
                e.apply(i, [n])
            },
            this),
            ImageButtonUtil.add(this.btnTakeOff,
            function() {
                var e = t.markData.takeOffCallBack,
                i = t.markData.caller,
                n = t.markData.ins;
                t.hide(),
                e.apply(i, [n])
            },
            this),
            ImageButtonUtil.add(this.btnUp,
            function() {
                ItemManager.getNumByID(1400352) < t.needNum ? BubblerManager.getInstance().showText("你的泰坦之灵不足，无法升级刻印！") : t._checkIsMax(e) ? BubblerManager.getInstance().showText("当前刻印已经是最高等级！") : (DisplayUtil.setEnabled(t.btnUp, !1, !1), SocketConnection.sendByQueue(CommandID.LVL_UPLVL_UP_COUNTERMARK, [e.obtainTime],
                function(i) {
                    i.data.position = 0;
                    var n = [];
                    n.push(i.data.readUnsignedInt()),
                    n.push(i.data.readUnsignedInt()),
                    n.push(i.data.readUnsignedInt()),
                    n.push(i.data.readUnsignedInt()),
                    n.push(i.data.readUnsignedInt()),
                    n.push(i.data.readUnsignedInt()),
                    e.adjArray = n,
                    e.level++,
                    EventManager.dispatchEvent(new CountermarkEvent(CountermarkEvent.UPGRADE_SAVE, e)),
                    EventManager.dispatchEvent(new CountermarkEvent(CountermarkEvent.UPGRADE_END, e)),
                    5 == e.level && EventManager.dispatchEvent(new CountermarkEvent(CountermarkEvent.MARK_MAX_LEVEL, e)),
                    BubblerManager.getInstance().showText("升级成功"),
                    t.update(!0),
                    t.markData.lvUpCallBack && t.markData.lvUpCallBack.call(t.markData.caller),
                    DisplayUtil.setEnabled(t.btnUp, !0, !1)
                },
                function(e) {
                    DisplayUtil.setEnabled(t.btnUp, !0, !1)
                }))
            },
            this),
            ImageButtonUtil.add(this.btnMix,
            function() {
                t.markData.takeOffCallBack && t.markData.takeOffCallBack.call(t.markData.caller, [t.markData.ins]);
                var e = t.markData.ins;
                CountermarkXMLInfo.getType(e.markID) != CountermarkType.MARK_IS_UNIVERSAL ? Alarm.show("该刻印不可镶嵌特效宝石") : (egret.lifecycle.stage.touchChildren = !1, ModuleManager.loadres(["markCenter"]).then(function() {
                    ModuleManager.loadScript("markCenter").then(function() {
                        var t = egret.getDefinitionByName("markCenter.MarkSetPop"),
                        i = new t(e, !0);
                        PopViewManager.getInstance().openView(i),
                        egret.lifecycle.stage.touchChildren = !0
                    })
                }), PopViewManager.getInstance().hideAll())
            },
            this)
        },
        i.prototype.update = function(e) {
            var i = this;
            void 0 === e && (e = !1);
            var n = this.markData.ins,
            r = n.markID;
            this.txtMarkName.textFlow = t.getCounterMaekNameHtml(r),
            this.txtMintMarkClassName.text = "(" + CountermarkXMLInfo.getClassNameByMarkId(r) + ")",
            this.txtTypeName.text = CountermarkXMLInfo.getTypeName(r),
            this.txtLevel.text = "Lv." + n.level + "/5",
            n.bindMonID > 0 ? this.txtRestrict.text = "绑定于精灵:" + PetXMLInfo.getName(n.bindMonID) : this.txtRestrict.text = "暂未绑定";
            for (var a = CountermarkXMLInfo.getMaxAttriValue(r), o = 0; 6 > o; o++) this["txtBaseAttr" + (o + 1)].text = "+" + n.adjArray[o] + "/" + a[o];
            var s = n.hasExtraAttri;
            if (this.txtNoExtraAttr.visible = !s, this.txtHasExtraAttr.visible = this.groupExtraAttr.visible = s, s) {
                var _ = CountermarkXMLInfo.getMaxGrade(r);
                n.level == _ ? this.txtHasExtraAttr.text = "隐藏属性：": this.txtHasExtraAttr.text = "隐藏属性(未激活)：";
                for (var o = 0; 6 > o; o++) this["txtExtraAttr" + (o + 1)].text = "+" + n.extraAttri[o]
            }
            if (n.isBindGem) this.txtStone.text = GemsXMLInfo.getName(n.gemID) + "Lv." + GemsXMLInfo.getLv(n.gemID),
            this.imgStone.source = ItemXMLInfo.getIconURL(n.gemID),
            this.txtStoneDesc.text = GemsXMLInfo.getEffect(n.gemID);
            else if (CountermarkXMLInfo.getType(n.markID) != CountermarkType.MARK_IS_UNIVERSAL ? (this.txtStone.text = "不可镶嵌特效宝石", this.txtStoneDesc.text = "", this.groupUniversalMark.x = 168) : (this.txtStone.text = "可镶嵌特效宝石", this.txtStoneDesc.text = "", this.groupUniversalMark.x = 177), !e) {
                var l = 20;
                this.btnUp.y -= l,
                this.imgMax.y -= l,
                this.btnMix.y -= l,
                this.btnPutOn.y -= l,
                this.btnTakeOff.y -= l,
                this.height -= l
            }
            if (!s && !e) {
                var l = this.imgLine2.y - this.groupExtraAttr.y;
                this.imgLine2.y -= l,
                this.groupUniversalMark.y -= l,
                this.txtSkill.y -= l,
                this.txtStoneDesc.y -= l,
                this.btnMix.y -= l,
                this.btnUp.y -= l,
                this.imgMax.y -= l,
                this.btnTakeOff.y -= l,
                this.btnPutOn.y -= l,
                this.height -= l
            }
            if (this._checkIsMax(n) ? (this.needNum = 0, this.btnUp.visible = !1, this.imgMax.visible = !0) : (SocketConnection.sendByQueue(42314, [1, n.obtainTime],
            function(t) {
                var e = t.data;
                i.needNum = e.readUnsignedInt(),
                i.txtCost.text = "x" + i.needNum + " "
            }), this.btnUp.visible = !0, this.imgMax.visible = !1), this.btnPutOn.visible = Boolean(this.markData.putOnCallBack), this.btnTakeOff.visible = Boolean(this.markData.takeOffCallBack), this.txtIsCurEquip.visible = this.markData.isCurEquip, this.markData.fromPetBag && (this.btnMix.visible = !1, this.btnUp.visible = !1, this.imgMax.visible = !1, this.height -= 35), n.isBindMove && n.catchTime) {
                this.txtSkill.text = "当前附加于：" + SkillXMLInfo.getName(n.bindMoveID);
                var h = PetManager.getPetInfo(n.catchTime);
                if (null == h) return;
                for (var u = h.skillArray,
                c = !1,
                g = 0,
                p = u; g < p.length; g++) {
                    var m = p[g];
                    if (m.id == n.bindMoveID) {
                        c = !0;
                        break
                    }
                }
                this.txtSkill.textColor = c ? 8822740 : 8947848
            } else this.txtSkill.text = ""
        },
        i.prototype._checkIsMax = function(t) {
            for (var e = !0,
            i = CountermarkXMLInfo.getMaxAttriValue(t.markID), n = 0; 6 > n; n++) if (t.adjArray[n] > 0 && t.adjArray[n] < i[n]) {
                e = !1;
                break
            }
            return e
        },
        i
    } (PopView);
    t.UniversalMarkPopView = e,
    __reflect(e.prototype, "tipsPop.UniversalMarkPopView")
} (tipsPop || (tipsPop = {})),
window.tipsPop = window.tipsPop || {};
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
generateEUI.paths["resource/eui_skins/AchievePopViewSkin.exml"] = window.AchievePopViewSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["txtNoTitle", "txtAchieve", "txt_intro", "groupEff", "txt_title", "imgLine"],
        this.height = 172,
        this.width = 480,
        this.elementsContent = [this._Image1_i(), this._Image2_i(), this._Image3_i(), this._Label1_i(), this.txtNoTitle_i(), this.txtAchieve_i(), this.groupEff_i(), this.txt_title_i(), this.imgLine_i()]
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
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "成就详情：",
        t.textColor = 6154074,
        t.x = 24,
        t.y = 44.539,
        t
    },
    i.txtNoTitle_i = function() {
        var t = new eui.Label;
        return this.txtNoTitle = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "未附带称号",
        t.textColor = 6154074,
        t.visible = !0,
        t.x = 200,
        t.y = 109,
        t
    },
    i.txtAchieve_i = function() {
        var t = new eui.Label;
        return this.txtAchieve = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.textColor = 8822740,
        t.x = 56,
        t.y = 70,
        t
    },
    i.groupEff_i = function() {
        var t = new eui.Group;
        return this.groupEff = t,
        t.visible = !0,
        t.x = 24,
        t.y = 109,
        t.elementsContent = [this._Label2_i(), this.txt_intro_i()],
        t
    },
    i._Label2_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "对应称号：",
        t.textColor = 6154074,
        t.x = 0,
        t.y = 0,
        t
    },
    i.txt_intro_i = function() {
        var t = new eui.Label;
        return this.txt_intro = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.textColor = 8822740,
        t.x = 32,
        t.y = 28,
        t
    },
    i.txt_title_i = function() {
        var t = new eui.Label;
        return this.txt_title = t,
        t.fontFamily = "MFShangHei",
        t.size = 20,
        t.textColor = 12900094,
        t.x = 24,
        t.y = 10,
        t
    },
    i.imgLine_i = function() {
        var t = new eui.Image;
        return this.imgLine = t,
        t.height = -3,
        t.right = 24,
        t.source = "help_mulit_pop_line_yc_1_png",
        t.width = 432,
        t.y = 94,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/ClothesitemPopViewSkin.exml"] = window.tipsPop.ClothesitemPopViewSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "icon", "tile_name", "txt_posName", "imgQuality", "txt_desc", "txt_suitName", "txt_suit_0", "txt_suit_1", "txt_suit_2", "txt_suit_3", "txt_suit_4", "txt_suit_5", "grp_clothesInfo", "grp_suitInfo", "txt_suitdesc", "title_suitdesc", "suitdec", "img_btn_xx", "tihuan", "img_btn_th", "grp_btns"],
        this.height = 418,
        this.width = 249,
        this.elementsContent = [this.bg_i(), this._Image1_i(), this.icon_i(), this.tile_name_i(), this.txt_posName_i(), this.imgQuality_i(), this._Scroller1_i(), this.grp_btns_i(), this._Rect2_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.bottom = 0,
        t.left = 0,
        t.right = 0,
        t.scale9Grid = new egret.Rectangle(7, 7, 6, 6),
        t.source = "new_tips_2021_11_img6_png",
        t.top = 0,
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 54,
        t.source = "common_icon_bg_style_1_png",
        t.width = 54,
        t.x = 20,
        t.y = 18,
        t
    },
    i.icon_i = function() {
        var t = new eui.Image;
        return this.icon = t,
        t.height = 54,
        t.source = "",
        t.width = 54,
        t.x = 20,
        t.y = 18,
        t
    },
    i.tile_name_i = function() {
        var t = new eui.Label;
        return this.tile_name = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "装扮名称装扮名称名称",
        t.textColor = 16765733,
        t.x = 79.165,
        t.y = 18,
        t
    },
    i.txt_posName_i = function() {
        var t = new eui.Label;
        return this.txt_posName = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "头部",
        t.textColor = 10596817,
        t.x = 79.205,
        t.y = 36.3,
        t
    },
    i.imgQuality_i = function() {
        var t = new eui.Image;
        return this.imgQuality = t,
        t.x = 79.171,
        t.y = 55.782,
        t
    },
    i._Scroller1_i = function() {
        var t = new eui.Scroller;
        return t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.height = 272.099,
        t.left = 20,
        t.right = 20,
        t.y = 99.87,
        t.viewport = this._Group1_i(),
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.layout = this._VerticalLayout2_i(),
        t.elementsContent = [this._Label1_i(), this.txt_desc_i(), this.grp_suitInfo_i(), this.suitdec_i()],
        t
    },
    i._VerticalLayout2_i = function() {
        var t = new eui.VerticalLayout;
        return t.gap = 12,
        t.horizontalAlign = "justify",
        t.paddingTop = 3,
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "装扮效果:",
        t.textColor = 3854309,
        t.x = 20,
        t.y = 103.453,
        t
    },
    i.txt_desc_i = function() {
        var t = new eui.Label;
        return this.txt_desc = t,
        t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.fontFamily = "MFShangHei",
        t.left = 0,
        t.minHeight = 35,
        t.right = 0,
        t.scaleX = 1,
        t.scaleY = 1,
        t.size = 16,
        t.textAlign = "left",
        t.textColor = 10596817,
        t
    },
    i.grp_suitInfo_i = function() {
        var t = new eui.Group;
        return this.grp_suitInfo = t,
        t.elementsContent = [this.txt_suitName_i(), this.grp_clothesInfo_i()],
        t
    },
    i.txt_suitName_i = function() {
        var t = new eui.Label;
        return this.txt_suitName = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "所属套装名称（2/5）",
        t.textColor = 3854309,
        t.x = 0,
        t.y = 0,
        t
    },
    i.grp_clothesInfo_i = function() {
        var t = new eui.Group;
        return this.grp_clothesInfo = t,
        t.minHeight = 104,
        t.x = 0,
        t.y = 21.204,
        t.layout = this._VerticalLayout1_i(),
        t.elementsContent = [this.txt_suit_0_i(), this.txt_suit_1_i(), this.txt_suit_2_i(), this.txt_suit_3_i(), this.txt_suit_4_i(), this.txt_suit_5_i()],
        t
    },
    i._VerticalLayout1_i = function() {
        var t = new eui.VerticalLayout;
        return t
    },
    i.txt_suit_0_i = function() {
        var t = new eui.Label;
        return this.txt_suit_0 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "头部部件名称",
        t.textColor = 6154074,
        t.x = 0,
        t
    },
    i.txt_suit_1_i = function() {
        var t = new eui.Label;
        return this.txt_suit_1 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "面部部件名称",
        t.textColor = 10596817,
        t.x = 0,
        t
    },
    i.txt_suit_2_i = function() {
        var t = new eui.Label;
        return this.txt_suit_2 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "手部部件名称",
        t.textColor = 10596817,
        t.x = 0,
        t.y = 50,
        t
    },
    i.txt_suit_3_i = function() {
        var t = new eui.Label;
        return this.txt_suit_3 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "腰部部件名称",
        t.textColor = 6154074,
        t.x = 0,
        t.y = 75,
        t
    },
    i.txt_suit_4_i = function() {
        var t = new eui.Label;
        return this.txt_suit_4 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "脚部部件名称",
        t.textColor = 10596817,
        t.x = 0,
        t.y = 100,
        t
    },
    i.txt_suit_5_i = function() {
        var t = new eui.Label;
        return this.txt_suit_5 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "脚部部件名称",
        t.textColor = 10596817,
        t.x = 10,
        t.y = 110,
        t
    },
    i.suitdec_i = function() {
        var t = new eui.Group;
        return this.suitdec = t,
        t.anchorOffsetY = 0,
        t.left = 20,
        t.right = 20,
        t.scaleX = 1,
        t.scaleY = 1,
        t.x = 0,
        t.y = 144.201,
        t.elementsContent = [this.txt_suitdesc_i(), this.title_suitdesc_i()],
        t
    },
    i.txt_suitdesc_i = function() {
        var t = new eui.Label;
        return this.txt_suitdesc = t,
        t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.fontFamily = "MFShangHei",
        t.left = 0,
        t.right = 0,
        t.scaleX = 1,
        t.scaleY = 1,
        t.size = 16,
        t.textColor = 10596817,
        t.y = 24,
        t
    },
    i.title_suitdesc_i = function() {
        var t = new eui.Label;
        return this.title_suitdesc = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "套装效果:",
        t.textColor = 3854309,
        t.x = 0,
        t.y = 0,
        t
    },
    i.grp_btns_i = function() {
        var t = new eui.Group;
        return this.grp_btns = t,
        t.x = 24,
        t.y = 381.303,
        t.elementsContent = [this.img_btn_xx_i(), this.img_btn_th_i()],
        t
    },
    i.img_btn_xx_i = function() {
        var t = new eui.Group;
        return this.img_btn_xx = t,
        t.visible = !0,
        t.elementsContent = [this._Rect1_i(), this._Label2_i()],
        t
    },
    i._Rect1_i = function() {
        var t = new eui.Rect;
        return t.fillColor = 4150416,
        t.height = 23,
        t.width = 90,
        t
    },
    i._Label2_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.horizontalCenter = .5,
        t.size = 16,
        t.text = "卸 下",
        t.textColor = 15594495,
        t.verticalCenter = 1.5,
        t
    },
    i.img_btn_th_i = function() {
        var t = new eui.Group;
        return this.img_btn_th = t,
        t.x = 111,
        t.y = 0,
        t.elementsContent = [this._Image2_i(), this.tihuan_i()],
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "new_mark_tips_2021_11_aaa_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.tihuan_i = function() {
        var t = new eui.Label;
        return this.tihuan = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = .5,
        t.size = 16,
        t.text = "替 换",
        t.textColor = 11235623,
        t.y = 4.754,
        t
    },
    i._Rect2_i = function() {
        var t = new eui.Rect;
        return t.fillColor = 3296378,
        t.height = 2,
        t.left = 20,
        t.right = 20,
        t.y = 86.995,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/FieldPopViewSkin.exml"] = window.FieldPopViewSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["btnClose", "txt_type", "txt_desc", "grp_typeIcon", "fieldIcon"],
        this.height = 431,
        this.width = 753,
        this.elementsContent = [this._Group1_i(), this.txt_type_i(), this.txt_desc_i(), this._Label1_i(), this._Image4_i(), this.grp_typeIcon_i(), this._Image5_i(), this.fieldIcon_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Group1_i = function() {
        var t = new eui.Group;
        return t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image1_i(), this._Image2_i(), this._Image3_i(), this.btnClose_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 430,
        t.source = "common_s9_pop_bg4_png",
        t.width = 753,
        t.x = 0,
        t.y = 1,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 34,
        t.source = "common_pop_up_bg_big_png",
        t.width = 748,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.height = 32,
        t.source = "field_pop_view_title_png",
        t.width = 103,
        t.x = 36,
        t.y = 2,
        t
    },
    i.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.height = 33,
        t.source = "common_pop_btn_close_png",
        t.width = 33,
        t.x = 712,
        t.y = 1,
        t
    },
    i.txt_type_i = function() {
        var t = new eui.Label;
        return this.txt_type = t,
        t.fontFamily = "MFShangHei",
        t.size = 22,
        t.text = "我方场地",
        t.textColor = 4187130,
        t.x = 320,
        t.y = 60,
        t
    },
    i.txt_desc_i = function() {
        var t = new eui.Label;
        return this.txt_desc = t,
        t.fontFamily = "MFShangHei",
        t.lineSpacing = 2,
        t.size = 18,
        t.text = "物品介绍物品介绍物品介绍物品介绍物品介绍物品介绍物品介绍物品介绍物品介绍物品介绍物品介绍物品介绍物品介绍物品介绍物品介绍物品介绍物品介绍物品介绍物品介绍物品介绍物品介绍",
        t.textColor = 8756947,
        t.width = 492,
        t.x = 210,
        t.y = 188,
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "REEJI",
        t.size = 22,
        t.text = "场地类型：",
        t.textColor = 12900094,
        t.x = 210,
        t.y = 60,
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.height = 1,
        t.source = "common_tips_pop_clothes_line_1_png",
        t.width = 543,
        t.x = 190,
        t.y = 170,
        t
    },
    i.grp_typeIcon_i = function() {
        var t = new eui.Group;
        return this.grp_typeIcon = t,
        t.x = 211,
        t.y = 97,
        t.layout = this._HorizontalLayout1_i(),
        t
    },
    i._HorizontalLayout1_i = function() {
        var t = new eui.HorizontalLayout;
        return t.gap = 5,
        t
    },
    i._Image5_i = function() {
        var t = new eui.Image;
        return t.height = 367,
        t.scale9Grid = new egret.Rectangle(2, 2, 6, 6),
        t.source = "common_bg_tips_s9_png",
        t.width = 131,
        t.x = 40,
        t.y = 44,
        t
    },
    i.fieldIcon_i = function() {
        var t = new eui.Image;
        return this.fieldIcon = t,
        t.height = 366,
        t.width = 131,
        t.x = 40,
        t.y = 45,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/HelpMulitPopSkin.exml"] = window.tipsPop.HelpMulitPopSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["title", "btnClose", "rbGrp", "txtRule", "txtDesc", "_scroller", "group_txt", "ruleImg", "group_img"],
        this.height = 550,
        this.width = 1005,
        this.elementsContent = [this._Group1_i(), this.rbGrp_i(), this.group_txt_i(), this.group_img_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Group1_i = function() {
        var t = new eui.Group;
        return t.cacheAsBitmap = !0,
        t.height = 550,
        t.width = 1005,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image1_i(), this._Image2_i(), this._Image3_i(), this.title_i(), this.btnClose_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.fillMode = "scale",
        t.height = 547,
        t.scale9Grid = new egret.Rectangle(3, 2, 15, 14),
        t.source = "common_s9_pop_bg4_png",
        t.width = 998,
        t.x = 6,
        t.y = 3,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 509,
        t.scale9Grid = new egret.Rectangle(207, 56, 24, 183),
        t.source = "adapt_leftbg_png",
        t.width = 168,
        t.x = 5,
        t.y = 35,
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.height = 34,
        t.scale9Grid = new egret.Rectangle(468, 0, 157, 34),
        t.source = "common_pop_up_bg_big_png",
        t.width = 1005,
        t.x = 0,
        t.y = 0,
        t
    },
    i.title_i = function() {
        var t = new eui.Image;
        return this.title = t,
        t.source = "",
        t.x = 41,
        t.y = 3,
        t
    },
    i.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.source = "common_pop_btn_close_png",
        t.x = 962,
        t.y = 3,
        t
    },
    i.rbGrp_i = function() {
        var t = new eui.Group;
        return this.rbGrp = t,
        t.height = 422.898,
        t.width = 172,
        t.x = 6,
        t.y = 48,
        t.layout = this._VerticalLayout1_i(),
        t
    },
    i._VerticalLayout1_i = function() {
        var t = new eui.VerticalLayout;
        return t
    },
    i.group_txt_i = function() {
        var t = new eui.Group;
        return this.group_txt = t,
        t.height = 452,
        t.width = 787,
        t.x = 193,
        t.y = 51,
        t.elementsContent = [this._Group2_i(), this._scroller_i()],
        t
    },
    i._Group2_i = function() {
        var t = new eui.Group;
        return t.cacheAsBitmap = !0,
        t.height = 32,
        t.width = 787,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image4_i(), this.txtRule_i()],
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.height = 1,
        t.source = "help_mulit_pop_line_yc_1_png",
        t.width = 787,
        t.x = 0,
        t.y = 31,
        t
    },
    i.txtRule_i = function() {
        var t = new eui.Label;
        return this.txtRule = t,
        t.fontFamily = "MFShangHei",
        t.size = 20,
        t.text = "规则说明",
        t.textColor = 12111615,
        t.x = 354,
        t.y = 0,
        t
    },
    i._scroller_i = function() {
        var t = new eui.Scroller;
        return this._scroller = t,
        t.height = 406.31,
        t.width = 765,
        t.x = 10,
        t.y = 45,
        t.viewport = this._Group3_i(),
        t
    },
    i._Group3_i = function() {
        var t = new eui.Group;
        return t.elementsContent = [this.txtDesc_i()],
        t
    },
    i.txtDesc_i = function() {
        var t = new eui.Label;
        return this.txtDesc = t,
        t.fontFamily = "MFShangHei",
        t.lineSpacing = 16,
        t.size = 16,
        t.text = "1.每日6:00—22:00可开启1个每日任务，每位玩家最多可同时存在3个每日任务。2.单个每日任务最多可存在3天，若在活动时间内尚未完成或尚未领取奖励则时间结束后将视为自动放弃！",
        t.textColor = 6323642,
        t.width = 764,
        t.x = 0,
        t.y = 0,
        t
    },
    i.group_img_i = function() {
        var t = new eui.Group;
        return this.group_img = t,
        t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.height = 460,
        t.visible = !1,
        t.width = 695,
        t.x = 228,
        t.y = 63,
        t.elementsContent = [this.ruleImg_i()],
        t
    },
    i.ruleImg_i = function() {
        var t = new eui.Image;
        return this.ruleImg = t,
        t.horizontalCenter = 0,
        t.verticalCenter = 0,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/HelpPopSkin.exml"] = window.tipsPop.HelpPopSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["txt_title", "imgBtn_close", "txt_desc", "_scorl"],
        this.height = 431,
        this.width = 753,
        this.elementsContent = [this._Group1_i(), this.imgBtn_close_i(), this._scorl_i()],
        this.states = [new eui.State("big", [new eui.SetProperty("imgBtn_close", "x", 712), new eui.SetProperty("imgBtn_close", "y", 1), new eui.SetProperty("imgBtn_close", "horizontalCenter", 352), new eui.SetProperty("imgBtn_close", "verticalCenter", -198)]), new eui.State("small", [new eui.SetProperty("_Image1", "y", 0), new eui.SetProperty("_Image1", "width", 481), new eui.SetProperty("_Image1", "height", 285), new eui.SetProperty("_Image2", "source", "common_pop_up_bg_m_png"), new eui.SetProperty("_Image2", "width", 476), new eui.SetProperty("txt_title", "x", 39), new eui.SetProperty("txt_title", "y", 6), new eui.SetProperty("imgBtn_close", "horizontalCenter", 215), new eui.SetProperty("imgBtn_close", "verticalCenter", -126), new eui.SetProperty("txt_desc", "width", 405), new eui.SetProperty("txt_desc", "lineSpacing", 7), new eui.SetProperty("_scorl", "width", 405), new eui.SetProperty("_scorl", "x", 38), new eui.SetProperty("_scorl", "height", 206), new eui.SetProperty("_scorl", "y", 50), new eui.SetProperty("", "width", 481), new eui.SetProperty("", "height", 285)])]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Group1_i = function() {
        var t = new eui.Group;
        return t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image1_i(), this._Image2_i(), this.txt_title_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return this._Image1 = t,
        t.height = 430,
        t.source = "common_s9_pop_bg4_png",
        t.width = 753,
        t.x = 0,
        t.y = 1,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return this._Image2 = t,
        t.height = 34,
        t.source = "common_pop_up_bg_big_png",
        t.width = 748,
        t.x = 0,
        t.y = 0,
        t
    },
    i.txt_title_i = function() {
        var t = new eui.Label;
        return this.txt_title = t,
        t.fontFamily = "REEJI",
        t.size = 24,
        t.text = "攻略说明",
        t.textColor = 16771434,
        t.x = 41,
        t.y = 7,
        t
    },
    i.imgBtn_close_i = function() {
        var t = new eui.Image;
        return this.imgBtn_close = t,
        t.source = "common_pop_btn_close_png",
        t
    },
    i._scorl_i = function() {
        var t = new eui.Scroller;
        return this._scorl = t,
        t.height = 342,
        t.scrollPolicyH = "off",
        t.width = 675,
        t.x = 40,
        t.y = 51,
        t.viewport = this._Group2_i(),
        t
    },
    i._Group2_i = function() {
        var t = new eui.Group;
        return t.elementsContent = [this.txt_desc_i()],
        t
    },
    i.txt_desc_i = function() {
        var t = new eui.Label;
        return this.txt_desc = t,
        t.fontFamily = "MFShangHei",
        t.lineSpacing = 4,
        t.scaleX = 1,
        t.scaleY = 1,
        t.size = 18,
        t.text = "在泰坦矿洞中，总共会有4个阶段：\n第一阶段，击退矿洞守卫，获得泰坦之灵和刻印；\n第二阶段，在限定的回合里尽可能多的击败矿工，获得泰坦之灵和刻印；\n第三阶段，开采矿脉，获得泰坦之灵和刻印宝石；\n第四阶段，在与敌方首领的战斗中坚持10回合；只有1次机会，如果失败，则会扣除之前获得的部分奖励！\n第四阶段，在与敌方首领的战斗中坚持10回合；只有1次机会，如果失败，则会扣除之前获得的部分奖励！",
        t.textAlign = "left",
        t.textColor = 8757203,
        t.width = 675,
        t.x = 0,
        t.y = 0,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/itemRender/ItemTipsGainWayItemSkin.exml"] = window.ItemTipsGainWayItemSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["imge_gaiway_item_bg_1", "imge_gaiway_item_bg_2", "tx_gainWayname_2", "tx_gainWayname_1", "gr_gainWay_items"],
        this.currentState = "state1",
        this.height = 37,
        this.width = 433,
        this.elementsContent = [this.gr_gainWay_items_i()],
        this.imge_gaiway_item_bg_1_i(),
        this.imge_gaiway_item_bg_2_i(),
        this.tx_gainWayname_2_i(),
        this.tx_gainWayname_1_i(),
        this.states = [new eui.State("state1", [new eui.AddItems("imge_gaiway_item_bg_1", "gr_gainWay_items", 0, ""), new eui.AddItems("tx_gainWayname_1", "gr_gainWay_items", 1, "")]), new eui.State("state2", [new eui.AddItems("imge_gaiway_item_bg_2", "gr_gainWay_items", 1, ""), new eui.AddItems("tx_gainWayname_2", "gr_gainWay_items", 1, ""), new eui.SetProperty("", "height", 37)])]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.gr_gainWay_items_i = function() {
        var t = new eui.Group;
        return this.gr_gainWay_items = t,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [],
        t
    },
    i.imge_gaiway_item_bg_1_i = function() {
        var t = new eui.Image;
        return this.imge_gaiway_item_bg_1 = t,
        t.source = "new_tips_2023_imge_gaiway_item_bg_1_png",
        t.width = 433,
        t.x = 0,
        t.y = 0,
        t
    },
    i.imge_gaiway_item_bg_2_i = function() {
        var t = new eui.Image;
        return this.imge_gaiway_item_bg_2 = t,
        t.source = "new_tips_2023_imge_gaiway_item_bg_2_png",
        t.width = 433,
        t.x = 0,
        t.y = 1,
        t
    },
    i.tx_gainWayname_2_i = function() {
        var t = new eui.Label;
        return this.tx_gainWayname_2 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "能源研究站",
        t.textColor = 16777215,
        t.x = 24,
        t.y = 10,
        t
    },
    i.tx_gainWayname_1_i = function() {
        var t = new eui.Label;
        return this.tx_gainWayname_1 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "活动获得",
        t.textColor = 8757203,
        t.x = 24,
        t.y = 10,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/itemRender/MulitRBitemSkin.exml"] = window.tipsPop.MulitRBitemSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["txt_desc"],
        this.height = 63,
        this.width = 171,
        this.elementsContent = [this._Image1_i(), this.txt_desc_i()],
        this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "help_mulit_pop_bg_up_png"), new eui.SetProperty("_Image1", "visible", !1), new eui.SetProperty("txt_desc", "textColor", 8036825)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "help_mulit_pop_bg_down_png"), new eui.SetProperty("txt_desc", "textColor", 15857151)]), new eui.State("disabled", [])]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return this._Image1 = t,
        t.percentHeight = 100,
        t.source = "help_mulit_pop_bg_down_png",
        t.percentWidth = 100,
        t
    },
    i.txt_desc_i = function() {
        var t = new eui.Label;
        return this.txt_desc = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.horizontalCenter = -1.5,
        t.size = 20,
        t.text = "每日任务",
        t.verticalCenter = 0,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/itemRender/MultiItemSkin.exml"] = window.MultiItemSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["icon", "txtCount", "txtName"],
        this.height = 125,
        this.width = 100,
        this.elementsContent = [this._Group1_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Group1_i = function() {
        var t = new eui.Group;
        return t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image1_i(), this.icon_i(), this.txtCount_i(), this.txtName_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 100,
        t.horizontalCenter = 0,
        t.source = "common_item_bg_style_70_70_png",
        t.top = 0,
        t.width = 100,
        t
    },
    i.icon_i = function() {
        var t = new eui.Image;
        return this.icon = t,
        t.height = 65,
        t.horizontalCenter = .5,
        t.source = "",
        t.verticalCenter = -12.5,
        t.width = 65,
        t
    },
    i.txtCount_i = function() {
        var t = new eui.Label;
        return this.txtCount = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.stroke = 1,
        t.strokeColor = 1712696,
        t.text = "70000",
        t.textAlign = "right",
        t.textColor = 16776958,
        t.width = 89,
        t.x = 6,
        t.y = 78,
        t
    },
    i.txtName_i = function() {
        var t = new eui.Label;
        return this.txtName = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = 0,
        t.size = 18,
        t.text = "泰坦神石",
        t.textColor = 8757203,
        t.y = 108,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/ItemUsePopViewSkin.exml"] = window.tipsPop.ItemUsePopViewSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "icon", "txt_name", "txtCy", "txt_num", "lab_itemId", "imgBtn_use", "grp_btns", "txt_tips", "scroller_lab"],
        this.height = 314,
        this.width = 300,
        this.elementsContent = [this.bg_i(), this._Image1_i(), this.icon_i(), this.txt_name_i(), this.txtCy_i(), this.txt_num_i(), this.lab_itemId_i(), this.grp_btns_i(), this.scroller_lab_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.height = 314,
        t.source = "common_bg_tips_s9_png",
        t.width = 300,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 76,
        t.source = "common_icon_bg_style_1_png",
        t.width = 76,
        t.x = 18,
        t.y = 18,
        t
    },
    i.icon_i = function() {
        var t = new eui.Image;
        return this.icon = t,
        t.height = 50,
        t.source = "",
        t.width = 50,
        t.x = 31,
        t.y = 31,
        t
    },
    i.txt_name_i = function() {
        var t = new eui.Label;
        return this.txt_name = t,
        t.size = 18,
        t.text = "全面提升药剂",
        t.textAlign = "left",
        t.textColor = 16773477,
        t.x = 113,
        t.y = 24,
        t
    },
    i.txtCy_i = function() {
        var t = new eui.Label;
        return this.txtCy = t,
        t.size = 16,
        t.text = "持有数量：",
        t.textColor = 11974326,
        t.x = 113,
        t.y = 51,
        t
    },
    i.txt_num_i = function() {
        var t = new eui.Label;
        return this.txt_num = t,
        t.size = 16,
        t.text = "30",
        t.textColor = 4175861,
        t.x = 187,
        t.y = 52,
        t
    },
    i.lab_itemId_i = function() {
        var t = new eui.Label;
        return this.lab_itemId = t,
        t.size = 18,
        t.text = "itemId:10000",
        t.textAlign = "right",
        t.textColor = 16777215,
        t.width = 158,
        t.x = 136,
        t.y = 3,
        t
    },
    i.grp_btns_i = function() {
        var t = new eui.Group;
        return this.grp_btns = t,
        t.height = 40,
        t.touchEnabled = !1,
        t.width = 90,
        t.x = 105,
        t.y = 252,
        t.elementsContent = [this.imgBtn_use_i()],
        t
    },
    i.imgBtn_use_i = function() {
        var t = new eui.Image;
        return this.imgBtn_use = t,
        t.height = 40,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "common_tips_pop_imgBtn_sy_png",
        t.width = 90,
        t.x = 0,
        t.y = 0,
        t
    },
    i.scroller_lab_i = function() {
        var t = new eui.Scroller;
        return this.scroller_lab = t,
        t.height = 110,
        t.width = 268,
        t.x = 18,
        t.y = 126,
        t.viewport = this._Group1_i(),
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.elementsContent = [this.txt_tips_i()],
        t
    },
    i.txt_tips_i = function() {
        var t = new eui.Label;
        return this.txt_tips = t,
        t.anchorOffsetY = 0,
        t.lineSpacing = 9,
        t.scaleX = 1,
        t.scaleY = 1,
        t.size = 16,
        t.text = "对战时增加精灵所有属性50，使用次数1次。注意：赛尔间对战无效！\n对战时增加精灵所有属性50，使用次数1次。注意：赛尔间对战无效！\n对战时增加精灵所有属性50，使用次数1次。注意：赛尔间对战无效！",
        t.textColor = 16777215,
        t.width = 268,
        t.x = 0,
        t.y = 0,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/KappaTravelBubbleSkin.exml"] = window.KappaTravelBubbleSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["txtMap", "txtTime"],
        this.height = 66,
        this.width = 986,
        this.elementsContent = [this._Image1_i(), this.txtMap_i(), this.txtTime_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "kappa_travel_bubble_bg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.txtMap_i = function() {
        var t = new eui.Label;
        return this.txtMap = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = 0,
        t.size = 18,
        t.textColor = 12113407,
        t.y = 5,
        t
    },
    i.txtTime_i = function() {
        var t = new eui.Label;
        return this.txtTime = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = 0,
        t.size = 24,
        t.textColor = 16771487,
        t.y = 29,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/manual/CarPopViewSkin.exml"] = window.tipsPop.CarPopViewSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["btnClose", "txt_name", "txt_desc", "car_show"],
        this.height = 431,
        this.width = 753,
        this.elementsContent = [this._Image1_i(), this._Image2_i(), this._Image3_i(), this._Image4_i(), this.btnClose_i(), this._Image5_i(), this._Image6_i(), this.txt_name_i(), this._Label1_i(), this.txt_desc_i(), this._Image7_i(), this._Image8_i(), this.car_show_i(), this._Image9_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 430,
        t.source = "common_s9_pop_bg4_png",
        t.width = 753,
        t.x = 0,
        t.y = 1,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 34,
        t.source = "common_pop_up_bg_big_png",
        t.width = 748,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.height = 188,
        t.source = "car_pop_view_col_png",
        t.width = 1,
        t.x = 0,
        t.y = 236,
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.height = 1,
        t.source = "car_pop_view_line_png",
        t.width = 189,
        t.x = 0,
        t.y = 424,
        t
    },
    i.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.height = 33,
        t.source = "common_pop_btn_close_png",
        t.width = 33,
        t.x = 712,
        t.y = 1,
        t
    },
    i._Image5_i = function() {
        var t = new eui.Image;
        return t.height = 359,
        t.source = "car_pop_view_contentbg_png",
        t.width = 351,
        t.x = 384,
        t.y = 46,
        t
    },
    i._Image6_i = function() {
        var t = new eui.Image;
        return t.height = 254,
        t.source = "common_tipsPop_suit_suitBg_png",
        t.width = 302,
        t.x = 49,
        t.y = 123,
        t
    },
    i.txt_name_i = function() {
        var t = new eui.Label;
        return this.txt_name = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "套装名称名称",
        t.textAlign = "center",
        t.textColor = 12111615,
        t.width = 196,
        t.x = 109,
        t.y = 357,
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "座驾描述：",
        t.textColor = 13820671,
        t.x = 407,
        t.y = 60,
        t
    },
    i.txt_desc_i = function() {
        var t = new eui.Label;
        return this.txt_desc = t,
        t.fontFamily = "MFShangHei",
        t.lineSpacing = 8,
        t.size = 16,
        t.text = "套装部件顶部套装部件顶部套装部件顶部套装部件顶部套装部件顶部套装部件顶部套装部件顶部描述套装部件顶部套装部件顶部套装部件顶部套装部件顶部套装部件顶部套装部件顶部套装部件顶部描述套装部件顶部套装部件顶部套装部件顶部套装部件顶部套装部件顶部套装部件顶部套装部件顶部描述套装部件顶部套装部件顶部套装部件顶部套装部件顶部套装部件顶部套装部件顶部套装部件顶部描述",
        t.textColor = 8757203,
        t.width = 304,
        t.x = 408,
        t.y = 87,
        t
    },
    i._Image7_i = function() {
        var t = new eui.Image;
        return t.height = 19,
        t.source = "car_pop_view_zhuangshi_png",
        t.width = 19,
        t.x = 387,
        t.y = 59,
        t
    },
    i._Image8_i = function() {
        var t = new eui.Image;
        return t.height = 31,
        t.source = "car_pop_view_title_png",
        t.width = 103,
        t.x = 35,
        t.y = 2,
        t
    },
    i.car_show_i = function() {
        var t = new eui.Image;
        return this.car_show = t,
        t.bottom = 108,
        t.horizontalCenter = -174.5,
        t
    },
    i._Image9_i = function() {
        var t = new eui.Image;
        return t.height = 28,
        t.source = "car_pop_view_namedi_png",
        t.width = 214,
        t.x = 99,
        t.y = 350,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/manual/ManualclothespopviewSkin.exml"] = window.tipsPop.ManualclothespopviewSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["item_bg", "name_bg", "txtName", "icon", "item", "txt_desc"],
        this.height = 302,
        this.width = 500,
        this.elementsContent = [this._Group1_i(), this.item_i(), this._Scroller1_i(), this._Label1_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Group1_i = function() {
        var t = new eui.Group;
        return t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image1_i(), this._Image2_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.fillMode = "repeat",
        t.height = 302,
        t.source = "common_pop_point_png",
        t.width = 500,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 1,
        t.source = "common_s9_pop_line_png",
        t.width = 266,
        t.x = 203,
        t.y = 70,
        t
    },
    i.item_i = function() {
        var t = new eui.Group;
        return this.item = t,
        t.x = 32,
        t.y = 78,
        t.elementsContent = [this.item_bg_i(), this.name_bg_i(), this.txtName_i(), this.icon_i()],
        t
    },
    i.item_bg_i = function() {
        var t = new eui.Image;
        return this.item_bg = t,
        t.height = 144,
        t.source = "common_icon_bg_style_1_png",
        t.width = 144,
        t.x = 0,
        t.y = 0,
        t
    },
    i.name_bg_i = function() {
        var t = new eui.Image;
        return this.name_bg = t,
        t.height = 28,
        t.source = "common_s9_name_bg_png",
        t.width = 142,
        t.x = 1,
        t.y = 116,
        t
    },
    i.txtName_i = function() {
        var t = new eui.Label;
        return this.txtName = t,
        t.size = 16.459020614624,
        t.text = "部件名称",
        t.textAlign = "center",
        t.textColor = 16777215,
        t.width = 136,
        t.x = 4,
        t.y = 121,
        t
    },
    i.icon_i = function() {
        var t = new eui.Image;
        return this.icon = t,
        t.height = 70,
        t.source = "",
        t.width = 61,
        t.x = 41,
        t.y = 25,
        t
    },
    i._Scroller1_i = function() {
        var t = new eui.Scroller;
        return t.height = 184,
        t.width = 274,
        t.x = 203,
        t.y = 80,
        t.viewport = this._Group2_i(),
        t
    },
    i._Group2_i = function() {
        var t = new eui.Group;
        return t.elementsContent = [this.txt_desc_i()],
        t
    },
    i.txt_desc_i = function() {
        var t = new eui.Label;
        return this.txt_desc = t,
        t.lineSpacing = 6,
        t.scaleX = 1,
        t.scaleY = 1,
        t.size = 18,
        t.text = "套装部件顶部套装部件顶部套装部件顶部套装部件顶部套装部件顶部套装部件顶部套装部件顶部描述套装部件顶部套装部件顶部套装部件顶部套装部件顶部套装部件顶部套装部件顶部套装部件顶部描述套装部件顶部套装部件顶部套装部件顶部套装部件顶部套装部件顶部套装部件顶部套装部件顶部描述套装部件顶部套装部件顶部套部件顶部套装部件顶部套装部件顶部套装部件顶部套装部件顶部描述",
        t.textColor = 2500699,
        t.width = 274,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "HuaKangXinZongYi",
        t.size = 22,
        t.text = "部件描述：",
        t.textColor = 2500699,
        t.x = 204,
        t.y = 40,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/manual/SuitIconSkin.exml"] = window.tipsPop.SuitIconSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["icon_item"],
        this.height = 56,
        this.width = 57,
        this.elementsContent = [this._Image1_i(), this.icon_item_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 56,
        t.source = "suit_view_di1_png",
        t.width = 57,
        t.x = 0,
        t.y = 0,
        t
    },
    i.icon_item_i = function() {
        var t = new eui.Image;
        return this.icon_item = t,
        t.height = 43,
        t.source = "",
        t.width = 43,
        t.x = 7,
        t.y = 7,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/manual/SuitViewSkin.exml"] = window.tipsPop.SuitViewSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["btnClose", "txt_normal", "hero_show", "txt_suit", "viewport_list", "scroller_item", "txt_desc", "Grp_suitEff"],
        this.height = 431,
        this.width = 753,
        this.elementsContent = [this._Image1_i(), this._Image2_i(), this._Image3_i(), this._Image4_i(), this.btnClose_i(), this._Image5_i(), this._Image6_i(), this._Image7_i(), this._Label1_i(), this._Label2_i(), this.txt_normal_i(), this.hero_show_i(), this._Image8_i(), this._Image9_i(), this.txt_suit_i(), this._Image10_i(), this.scroller_item_i(), this.Grp_suitEff_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 430,
        t.source = "common_s9_pop_bg4_png",
        t.width = 753,
        t.x = 0,
        t.y = 1,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 34,
        t.source = "common_pop_up_bg_big_png",
        t.width = 748,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.height = 188,
        t.source = "car_pop_view_col_png",
        t.width = 1,
        t.x = 0,
        t.y = 236,
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.height = 1,
        t.source = "car_pop_view_line_png",
        t.width = 189,
        t.x = 0,
        t.y = 424,
        t
    },
    i.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.height = 33,
        t.source = "common_pop_btn_close_png",
        t.width = 33,
        t.x = 712,
        t.y = 1,
        t
    },
    i._Image5_i = function() {
        var t = new eui.Image;
        return t.height = 359,
        t.source = "car_pop_view_contentbg_png",
        t.width = 351,
        t.x = 384,
        t.y = 46,
        t
    },
    i._Image6_i = function() {
        var t = new eui.Image;
        return t.height = 2,
        t.source = "common_tips_pop_clothes_line_1_png",
        t.width = 328,
        t.x = 393,
        t.y = 165,
        t
    },
    i._Image7_i = function() {
        var t = new eui.Image;
        return t.height = 254,
        t.source = "common_tipsPop_suit_suitBg_png",
        t.width = 302,
        t.x = 49,
        t.y = 58,
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "套装部件：",
        t.textColor = 13754879,
        t.x = 32,
        t.y = 328,
        t
    },
    i._Label2_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "套装描述：",
        t.textColor = 13820671,
        t.x = 407,
        t.y = 59,
        t
    },
    i.txt_normal_i = function() {
        var t = new eui.Label;
        return this.txt_normal = t,
        t.fontFamily = "MFShangHei",
        t.lineSpacing = 8,
        t.size = 16,
        t.text = "赛尔们在毛线中获得套装，能驾驭狂风，借\n力上青云。赛尔们在毛线中获得套装，能驾\n驭狂风，借力上青云。",
        t.textColor = 8757203,
        t.width = 304,
        t.x = 408,
        t.y = 87,
        t
    },
    i.hero_show_i = function() {
        var t = new eui.Image;
        return this.hero_show = t,
        t.bottom = 171,
        t.horizontalCenter = -176.5,
        t
    },
    i._Image8_i = function() {
        var t = new eui.Image;
        return t.height = 32,
        t.source = "suit_view_title_png",
        t.width = 103,
        t.x = 35,
        t.y = 2,
        t
    },
    i._Image9_i = function() {
        var t = new eui.Image;
        return t.height = 28,
        t.source = "car_pop_view_namedi_png",
        t.width = 213,
        t.x = 100,
        t.y = 285,
        t
    },
    i.txt_suit_i = function() {
        var t = new eui.Label;
        return this.txt_suit = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "套装名称名称",
        t.textAlign = "center",
        t.textColor = 12111615,
        t.width = 203,
        t.x = 105,
        t.y = 292,
        t
    },
    i._Image10_i = function() {
        var t = new eui.Image;
        return t.height = 19,
        t.source = "car_pop_view_zhuangshi_png",
        t.width = 19,
        t.x = 387,
        t.y = 58,
        t
    },
    i.scroller_item_i = function() {
        var t = new eui.Scroller;
        return this.scroller_item = t,
        t.height = 56,
        t.width = 323,
        t.x = 40,
        t.y = 353,
        t.viewport = this.viewport_list_i(),
        t
    },
    i.viewport_list_i = function() {
        var t = new eui.List;
        return this.viewport_list = t,
        t.layout = this._HorizontalLayout1_i(),
        t
    },
    i._HorizontalLayout1_i = function() {
        var t = new eui.HorizontalLayout;
        return t.gap = 9.5,
        t
    },
    i.Grp_suitEff_i = function() {
        var t = new eui.Group;
        return this.Grp_suitEff = t,
        t.x = 407,
        t.y = 179,
        t.elementsContent = [this._Label3_i(), this._Scroller1_i(), this._Image11_i()],
        t
    },
    i._Label3_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "套装效果：",
        t.textColor = 13820671,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Scroller1_i = function() {
        var t = new eui.Scroller;
        return t.height = 186,
        t.width = 304,
        t.x = 0,
        t.y = 29,
        t.viewport = this._Group1_i(),
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.elementsContent = [this.txt_desc_i()],
        t
    },
    i.txt_desc_i = function() {
        var t = new eui.Label;
        return this.txt_desc = t,
        t.fontFamily = "MFShangHei",
        t.lineSpacing = 8,
        t.size = 16,
        t.text = "套装部件顶部套装部件顶部套装部件顶部套装部件顶部套装部件顶部套装部件顶部套装部件顶部描述套装部件顶部套装部件顶部套装部件顶部套装部件顶部套装部件顶部套装部件顶部套装部件顶部描述套装部件顶部套装部件顶部套装部件顶部套装部件顶部套装部件顶部套装部件顶部套装部件顶部描述套装部件顶部套装部件顶部套部件顶部套装部件顶部套装部件顶部套装部件顶部套装部件顶部描述部套装部件顶部套装部件顶部描述部套装部件顶部套装部件顶部描述",
        t.textColor = 8757203,
        t.width = 304,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Image11_i = function() {
        var t = new eui.Image;
        return t.height = 19,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "car_pop_view_zhuangshi_png",
        t.width = 19,
        t.x = -20,
        t.y = -2,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/MultiItemsPopSkin.exml"] = window.MultiItemsPopSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["name_label", "_group"],
        this.height = 200,
        this.width = 416,
        this.elementsContent = [this._Image1_i(), this.name_label_i(), this._Scroller1_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.bottom = 0,
        t.left = 0,
        t.right = 0,
        t.scale9Grid = new egret.Rectangle(3, 3, 4, 4),
        t.source = "common_bg_tips_s9_png",
        t.top = 0,
        t
    },
    i.name_label_i = function() {
        var t = new eui.Label;
        return this.name_label = t,
        t.fontFamily = "REEJI",
        t.horizontalCenter = 0,
        t.size = 20,
        t.text = "40点活跃宝箱",
        t.textColor = 8631282,
        t.y = 14,
        t
    },
    i._Scroller1_i = function() {
        var t = new eui.Scroller;
        return t.height = 110,
        t.horizontalCenter = 0,
        t.width = 370,
        t.y = 62,
        t.viewport = this._group_i(),
        t
    },
    i._group_i = function() {
        var t = new eui.Group;
        return this._group = t,
        t.scaleX = .8,
        t.scaleY = .8,
        t.layout = this._HorizontalLayout1_i(),
        t
    },
    i._HorizontalLayout1_i = function() {
        var t = new eui.HorizontalLayout;
        return t.gap = 20,
        t.horizontalAlign = "center",
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/TeamApplyPopSkin.exml"] = window.TeamApplyPopSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["head", "txtName", "txtId", "btnRefuse", "btnAccept", "imaClose"],
        this.height = 290,
        this.width = 486,
        this.elementsContent = [this._Image1_i(), this.head_i(), this.txtName_i(), this.txtId_i(), this._Label1_i(), this.btnRefuse_i(), this.btnAccept_i(), this.imaClose_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "common_join_team_infobg_png",
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t
    },
    i.head_i = function() {
        var t = new core.component.AvatarIcon;
        return this.head = t,
        t.horizontalCenter = -173,
        t.verticalCenter = -14,
        t
    },
    i.txtName_i = function() {
        var t = new eui.Label;
        return this.txtName = t,
        t.size = 20,
        t.text = "赛尔ID：小赛尔",
        t.textColor = 7461887,
        t.x = 146,
        t.y = 82,
        t
    },
    i.txtId_i = function() {
        var t = new eui.Label;
        return this.txtId = t,
        t.size = 20,
        t.text = "米米号：6068361",
        t.textColor = 7461887,
        t.x = 146,
        t.y = 108,
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.size = 20,
        t.text = "申请加入战队",
        t.textColor = 12701933,
        t.x = 146,
        t.y = 134,
        t
    },
    i.btnRefuse_i = function() {
        var t = new eui.Image;
        return this.btnRefuse = t,
        t.source = "common_join_team_btn2_png",
        t.x = 70,
        t.y = 216,
        t
    },
    i.btnAccept_i = function() {
        var t = new eui.Image;
        return this.btnAccept = t,
        t.source = "common_join_team_btn1_png",
        t.x = 277,
        t.y = 216,
        t
    },
    i.imaClose_i = function() {
        var t = new eui.Image;
        return this.imaClose = t,
        t.source = "common_pop_btn_close_png",
        t.x = 437,
        t.y = 3,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/tips/AbilityMarkTipsSkin.exml"] = window.AbilityMarkTipsSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["txtMarkName", "txtTypeName", "txtRestrict", "txtBind", "btnTakeOff", "btnPutOn", "txtBase1", "txtBaseAttr1", "txtBase3", "txtBaseAttr3", "txtBase5", "txtBaseAttr5", "txtBase2", "txtBaseAttr2", "txtBase4", "txtBaseAttr4", "txtBase6", "txtBaseAttr6", "groupBaseAttr"],
        this.height = 195,
        this.width = 480,
        this.elementsContent = [this._Image1_i(), this._Image2_i(), this._Image3_i(), this.txtMarkName_i(), this.txtTypeName_i(), this.txtRestrict_i(), this.txtBind_i(), this.btnTakeOff_i(), this.btnPutOn_i(), this.groupBaseAttr_i()]
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
        t.visible = !0,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 30,
        t.left = 5,
        t.right = 5,
        t.source = "new_tips_2021_11_img5_png",
        t.visible = !0,
        t.y = 2,
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "new_tips_2021_11_img4_png",
        t.visible = !0,
        t.x = 3.853,
        t.y = .278,
        t
    },
    i.txtMarkName_i = function() {
        var t = new eui.Label;
        return this.txtMarkName = t,
        t.fontFamily = "MFShangHei",
        t.size = 20,
        t.text = "五星刻印",
        t.textColor = 12900350,
        t.visible = !0,
        t.x = 24,
        t.y = 8,
        t
    },
    i.txtTypeName_i = function() {
        var t = new eui.Label;
        return this.txtTypeName = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "刻印刻印",
        t.textColor = 6154074,
        t.verticalAlign = "middle",
        t.visible = !0,
        t.x = 24,
        t.y = 42.18,
        t
    },
    i.txtRestrict_i = function() {
        var t = new eui.Label;
        return this.txtRestrict = t,
        t.fontFamily = "MFShangHei",
        t.right = 24,
        t.size = 20,
        t.text = "限定：XXXXXX",
        t.textColor = 4252667,
        t.verticalAlign = "middle",
        t.visible = !0,
        t.y = 8,
        t
    },
    i.txtBind_i = function() {
        var t = new eui.Label;
        return this.txtBind = t,
        t.fontFamily = "MFShangHei",
        t.right = 24,
        t.size = 18,
        t.text = "装备于精灵：XXXX",
        t.textColor = 8822740,
        t.verticalAlign = "middle",
        t.visible = !0,
        t.x = 332,
        t.y = 42.18,
        t
    },
    i.btnTakeOff_i = function() {
        var t = new eui.Image;
        return this.btnTakeOff = t,
        t.source = "new_mark_tips_2021_11_btn1_png",
        t.visible = !0,
        t.x = 188,
        t.y = 155.279,
        t
    },
    i.btnPutOn_i = function() {
        var t = new eui.Image;
        return this.btnPutOn = t,
        t.source = "img_take_off_png",
        t.visible = !0,
        t.x = 188,
        t.y = 154.279,
        t
    },
    i.groupBaseAttr_i = function() {
        var t = new eui.Group;
        return this.groupBaseAttr = t,
        t.left = 24,
        t.visible = !0,
        t.y = 69.36,
        t.layout = this._BasicLayout1_i(),
        t.elementsContent = [this.txtBase1_i(), this.txtBaseAttr1_i(), this.txtBase3_i(), this.txtBaseAttr3_i(), this.txtBase5_i(), this.txtBaseAttr5_i(), this.txtBase2_i(), this.txtBaseAttr2_i(), this.txtBase4_i(), this.txtBaseAttr4_i(), this.txtBase6_i(), this.txtBaseAttr6_i()],
        t
    },
    i._BasicLayout1_i = function() {
        var t = new eui.BasicLayout;
        return t
    },
    i.txtBase1_i = function() {
        var t = new eui.Label;
        return this.txtBase1 = t,
        t.fontFamily = "MFShangHei",
        t.height = 20,
        t.size = 16,
        t.text = "攻击：",
        t.textAlign = "left",
        t.textColor = 4252667,
        t.verticalAlign = "middle",
        t.visible = !0,
        t
    },
    i.txtBaseAttr1_i = function() {
        var t = new eui.Label;
        return this.txtBaseAttr1 = t,
        t.fontFamily = "MFShangHei",
        t.height = 20,
        t.size = 16,
        t.text = "+00",
        t.textAlign = "left",
        t.textColor = 8822740,
        t.verticalAlign = "middle",
        t.visible = !0,
        t.x = 55.836,
        t
    },
    i.txtBase3_i = function() {
        var t = new eui.Label;
        return this.txtBase3 = t,
        t.fontFamily = "MFShangHei",
        t.height = 20,
        t.size = 16,
        t.text = "特攻：",
        t.textAlign = "left",
        t.textColor = 4252667,
        t.verticalAlign = "middle",
        t.x = 127.29,
        t
    },
    i.txtBaseAttr3_i = function() {
        var t = new eui.Label;
        return this.txtBaseAttr3 = t,
        t.fontFamily = "MFShangHei",
        t.height = 20,
        t.size = 16,
        t.text = "+00",
        t.textAlign = "left",
        t.textColor = 8822740,
        t.verticalAlign = "middle",
        t.x = 183.29,
        t
    },
    i.txtBase5_i = function() {
        var t = new eui.Label;
        return this.txtBase5 = t,
        t.fontFamily = "MFShangHei",
        t.height = 20,
        t.size = 16,
        t.text = "速度：",
        t.textAlign = "left",
        t.textColor = 4252667,
        t.verticalAlign = "middle",
        t.x = 256.935,
        t
    },
    i.txtBaseAttr5_i = function() {
        var t = new eui.Label;
        return this.txtBaseAttr5 = t,
        t.fontFamily = "MFShangHei",
        t.height = 20,
        t.size = 16,
        t.text = "+00",
        t.textAlign = "left",
        t.textColor = 8822740,
        t.verticalAlign = "middle",
        t.x = 312.936,
        t
    },
    i.txtBase2_i = function() {
        var t = new eui.Label;
        return this.txtBase2 = t,
        t.fontFamily = "MFShangHei",
        t.height = 20,
        t.size = 16,
        t.text = "防御：",
        t.textAlign = "left",
        t.textColor = 4252667,
        t.verticalAlign = "middle",
        t.y = 21.434,
        t
    },
    i.txtBaseAttr2_i = function() {
        var t = new eui.Label;
        return this.txtBaseAttr2 = t,
        t.fontFamily = "MFShangHei",
        t.height = 20,
        t.size = 16,
        t.text = "+00",
        t.textAlign = "left",
        t.textColor = 8822740,
        t.verticalAlign = "middle",
        t.x = 55.836,
        t.y = 21.433,
        t
    },
    i.txtBase4_i = function() {
        var t = new eui.Label;
        return this.txtBase4 = t,
        t.fontFamily = "MFShangHei",
        t.height = 20,
        t.size = 16,
        t.text = "特防：",
        t.textAlign = "left",
        t.textColor = 4252667,
        t.verticalAlign = "middle",
        t.x = 127.289,
        t.y = 21.433,
        t
    },
    i.txtBaseAttr4_i = function() {
        var t = new eui.Label;
        return this.txtBaseAttr4 = t,
        t.fontFamily = "MFShangHei",
        t.height = 20,
        t.size = 16,
        t.text = "+00",
        t.textAlign = "left",
        t.textColor = 8822740,
        t.verticalAlign = "middle",
        t.x = 183.29,
        t.y = 21.434,
        t
    },
    i.txtBase6_i = function() {
        var t = new eui.Label;
        return this.txtBase6 = t,
        t.fontFamily = "MFShangHei",
        t.height = 20,
        t.size = 16,
        t.text = "体力：",
        t.textAlign = "left",
        t.textColor = 4252667,
        t.verticalAlign = "middle",
        t.x = 256.936,
        t.y = 21.433,
        t
    },
    i.txtBaseAttr6_i = function() {
        var t = new eui.Label;
        return this.txtBaseAttr6 = t,
        t.fontFamily = "MFShangHei",
        t.height = 20,
        t.size = 16,
        t.text = "+00",
        t.textAlign = "left",
        t.textColor = 8822740,
        t.verticalAlign = "middle",
        t.x = 312.938,
        t.y = 21.433,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/tips/GemDetailSkin.exml"] = window.GemDetailSkin = function(t) {
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
        t.x = 227.721,
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
        return t.size = 16,
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
generateEUI.paths["resource/eui_skins/tips/GemDetailSkinGianWaySkin.exml"] = window.GemDetailSkinGianWaySkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["imge_bg_addGainWay", "imge_item_bg", "imge_icon", "txtName", "txtNum", "grp_itemHave", "gr_itemName", "txtDes", "scroller", "list_gainWay", "scoreller_gainWay", "tx_title", "imge_title_icon", "gr_title", "imge_mask", "gr_gainWay", "imgMix", "imgInlay", "txtItemId", "gr_Tips"],
        this.height = 360,
        this.width = 492,
        this.elementsContent = [this.gr_Tips_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.gr_Tips_i = function() {
        var t = new eui.Group;
        return this.gr_Tips = t,
        t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.height = 360,
        t.verticalCenter = 0,
        t.width = 493,
        t.x = 0,
        t.elementsContent = [this.imge_bg_addGainWay_i(), this._Image1_i(), this.gr_itemName_i(), this.txtDes_i(), this.scroller_i(), this.gr_gainWay_i(), this.imgMix_i(), this.imgInlay_i(), this.txtItemId_i()],
        t
    },
    i.imge_bg_addGainWay_i = function() {
        var t = new eui.Image;
        return this.imge_bg_addGainWay = t,
        t.height = 360,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "new_tips_2023_imge_bg_addgainway_png",
        t.width = 492,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.scaleX = 1,
        t.scaleY = 1,
        t.source = "new_tips_2023_imge_bg_addgainway_title_png",
        t.x = 5,
        t.y = 0,
        t
    },
    i.gr_itemName_i = function() {
        var t = new eui.Group;
        return this.gr_itemName = t,
        t.x = 22,
        t.y = 7,
        t.elementsContent = [this.imge_item_bg_i(), this.imge_icon_i(), this.txtName_i(), this.grp_itemHave_i()],
        t
    },
    i.imge_item_bg_i = function() {
        var t = new eui.Image;
        return this.imge_item_bg = t,
        t.height = 54,
        t.source = "new_tips_2023_imge_item_bg_png",
        t.width = 54,
        t.x = 0,
        t.y = 0,
        t
    },
    i.imge_icon_i = function() {
        var t = new eui.Image;
        return this.imge_icon = t,
        t.height = 42,
        t.source = "new_tips_2023_imge_icon_png",
        t.width = 42,
        t.x = 6,
        t.y = 7,
        t
    },
    i.txtName_i = function() {
        var t = new eui.Label;
        return this.txtName = t,
        t.fontFamily = "MFShangHei",
        t.size = 20,
        t.text = "物品 名物品名",
        t.textColor = 12900094,
        t.x = 66,
        t.y = 7,
        t
    },
    i.grp_itemHave_i = function() {
        var t = new eui.Group;
        return this.grp_itemHave = t,
        t.anchorOffsetY = 0,
        t.height = 25,
        t.width = 200,
        t.x = 66,
        t.y = 33,
        t.elementsContent = [this._Label1_i(), this.txtNum_i()],
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.scaleX = 1,
        t.scaleY = 1,
        t.size = 18,
        t.text = "已拥有：",
        t.textColor = 4187130,
        t.x = 0,
        t.y = 0,
        t
    },
    i.txtNum_i = function() {
        var t = new eui.Label;
        return this.txtNum = t,
        t.fontFamily = "MFShangHei",
        t.scaleX = 1,
        t.scaleY = 1,
        t.size = 18,
        t.text = "9999",
        t.textColor = 4187130,
        t.x = 65,
        t.y = 0,
        t
    },
    i.txtDes_i = function() {
        var t = new eui.Label;
        return this.txtDes = t,
        t.anchorOffsetX = 0,
        t.fontFamily = "MFShangHei",
        t.left = 30,
        t.right = 30,
        t.scaleX = 1,
        t.scaleY = 1,
        t.size = 18,
        t.text = "物品介绍物品介绍物品介绍物品介绍物品介绍物品介绍物品介绍物品介绍物品介绍物品介绍物品介绍物品介绍物品介绍物品介绍物品介绍",
        t.textColor = 8756947,
        t.y = 82,
        t
    },
    i.scroller_i = function() {
        var t = new eui.Scroller;
        return this.scroller = t,
        t.anchorOffsetX = 0,
        t.height = 55,
        t.left = 47,
        t.right = 47,
        t.scaleX = 1,
        t.scaleY = 1,
        t.visible = !1,
        t.y = 81,
        t.viewport = this._Group1_i(),
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.anchorOffsetX = 0,
        t.width = 396,
        t.x = 9,
        t.y = 2,
        t
    },
    i.gr_gainWay_i = function() {
        var t = new eui.Group;
        return this.gr_gainWay = t,
        t.left = 30,
        t.right = 30,
        t.scaleX = 1,
        t.scaleY = 1,
        t.y = 150,
        t.elementsContent = [this.scoreller_gainWay_i(), this.gr_title_i(), this.imge_mask_i()],
        t
    },
    i.scoreller_gainWay_i = function() {
        var t = new eui.Scroller;
        return this.scoreller_gainWay = t,
        t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.height = 110,
        t.width = 433,
        t.x = 0,
        t.y = 27,
        t.viewport = this._Group2_i(),
        t
    },
    i._Group2_i = function() {
        var t = new eui.Group;
        return t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.height = 23,
        t.width = 291,
        t.elementsContent = [this.list_gainWay_i(), this._Image2_i()],
        t
    },
    i.list_gainWay_i = function() {
        var t = new eui.List;
        return this.list_gainWay = t,
        t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.x = 0,
        t.y = 0,
        t.layout = this._VerticalLayout1_i(),
        t
    },
    i._VerticalLayout1_i = function() {
        var t = new eui.VerticalLayout;
        return t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "new_tips_2023_imge_gaiway_item_bg_2_png",
        t.visible = !1,
        t.x = 0,
        t.y = 0,
        t
    },
    i.gr_title_i = function() {
        var t = new eui.Group;
        return this.gr_title = t,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this.tx_title_i(), this.imge_title_icon_i()],
        t
    },
    i.tx_title_i = function() {
        var t = new eui.Label;
        return this.tx_title = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "获取方式",
        t.textColor = 8362444,
        t.x = 19,
        t.y = 2,
        t
    },
    i.imge_title_icon_i = function() {
        var t = new eui.Image;
        return this.imge_title_icon = t,
        t.source = "new_tips_2023_imge_title_icon_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.imge_mask_i = function() {
        var t = new eui.Image;
        return this.imge_mask = t,
        t.bottom = 6,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "new_tips_2023_imge_mask_png",
        t.visible = !1,
        t.width = 400,
        t.x = 0,
        t
    },
    i.imgMix_i = function() {
        var t = new eui.Group;
        return this.imgMix = t,
        t.bottom = 20,
        t.visible = !1,
        t.x = 370,
        t.elementsContent = [this._Image3_i(), this._Label2_i()],
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "new_mark_tips_2021_11_aaa_png",
        t
    },
    i._Label2_i = function() {
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
        t.bottom = 15,
        t.right = 20,
        t.elementsContent = [this._Image4_i(), this._Label3_i()],
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.source = "new_mark_tips_2021_11_aaa_png",
        t
    },
    i._Label3_i = function() {
        var t = new eui.Label;
        return t.size = 16,
        t.text = "镶 嵌",
        t.textColor = 11301415,
        t.x = 27,
        t.y = 4,
        t
    },
    i.txtItemId_i = function() {
        var t = new eui.Label;
        return this.txtItemId = t,
        t.fontFamily = "MFShangHei",
        t.size = 20,
        t.text = "itemId:00000000000",
        t.x = 312,
        t.y = 43,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/tips/ItemTipsAddGianWaySkin.exml"] = window.ItemTipsAddGianWaySkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["imge_bg_addGainWay", "imge_item_bg", "imge_icon", "txtName", "txtNum", "grp_itemHave", "gr_itemName", "txtDescribe", "scroller", "list_gainWay", "scoreller_gainWay", "tx_title", "imge_title_icon", "gr_title", "imge_mask", "gr_gainWay", "btnUse", "txtItemId", "gr_Tips"],
        this.width = 492,
        this.elementsContent = [this.gr_Tips_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.gr_Tips_i = function() {
        var t = new eui.Group;
        return this.gr_Tips = t,
        t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.height = 360,
        t.verticalCenter = 0,
        t.width = 493,
        t.x = 0,
        t.elementsContent = [this.imge_bg_addGainWay_i(), this._Image1_i(), this.gr_itemName_i(), this.txtDescribe_i(), this.scroller_i(), this.gr_gainWay_i(), this.btnUse_i(), this.txtItemId_i()],
        t
    },
    i.imge_bg_addGainWay_i = function() {
        var t = new eui.Image;
        return this.imge_bg_addGainWay = t,
        t.height = 360,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "new_tips_2023_imge_bg_addgainway_png",
        t.width = 492,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.scaleX = 1,
        t.scaleY = 1,
        t.source = "new_tips_2023_imge_bg_addgainway_title_png",
        t.x = 5,
        t.y = 0,
        t
    },
    i.gr_itemName_i = function() {
        var t = new eui.Group;
        return this.gr_itemName = t,
        t.x = 22,
        t.y = 7,
        t.elementsContent = [this.imge_item_bg_i(), this.imge_icon_i(), this.txtName_i(), this.grp_itemHave_i()],
        t
    },
    i.imge_item_bg_i = function() {
        var t = new eui.Image;
        return this.imge_item_bg = t,
        t.height = 54,
        t.source = "new_tips_2023_imge_item_bg_png",
        t.width = 54,
        t.x = 0,
        t.y = 0,
        t
    },
    i.imge_icon_i = function() {
        var t = new eui.Image;
        return this.imge_icon = t,
        t.height = 42,
        t.source = "new_tips_2023_imge_icon_png",
        t.width = 42,
        t.x = 6,
        t.y = 7,
        t
    },
    i.txtName_i = function() {
        var t = new eui.Label;
        return this.txtName = t,
        t.fontFamily = "MFShangHei",
        t.size = 20,
        t.text = "物品 名物品名",
        t.textColor = 12900094,
        t.x = 66,
        t.y = 7,
        t
    },
    i.grp_itemHave_i = function() {
        var t = new eui.Group;
        return this.grp_itemHave = t,
        t.anchorOffsetY = 0,
        t.height = 25,
        t.width = 200,
        t.x = 66,
        t.y = 33,
        t.elementsContent = [this._Label1_i(), this.txtNum_i()],
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.scaleX = 1,
        t.scaleY = 1,
        t.size = 18,
        t.text = "已拥有：",
        t.textColor = 4187130,
        t.x = 0,
        t.y = 0,
        t
    },
    i.txtNum_i = function() {
        var t = new eui.Label;
        return this.txtNum = t,
        t.fontFamily = "MFShangHei",
        t.scaleX = 1,
        t.scaleY = 1,
        t.size = 18,
        t.text = "9999",
        t.textColor = 4187130,
        t.x = 65,
        t.y = 0,
        t
    },
    i.txtDescribe_i = function() {
        var t = new eui.Label;
        return this.txtDescribe = t,
        t.anchorOffsetX = 0,
        t.fontFamily = "MFShangHei",
        t.left = 30,
        t.right = 30,
        t.scaleX = 1,
        t.scaleY = 1,
        t.size = 18,
        t.text = "物品介绍物品介绍物品介绍物品介绍物品介绍物品介绍物品介绍物品介绍物品介绍物品介绍物品介绍物品介绍物品介绍物品介绍物品介绍",
        t.textColor = 8756947,
        t.y = 82,
        t
    },
    i.scroller_i = function() {
        var t = new eui.Scroller;
        return this.scroller = t,
        t.anchorOffsetX = 0,
        t.height = 55,
        t.left = 47,
        t.right = 47,
        t.scaleX = 1,
        t.scaleY = 1,
        t.visible = !1,
        t.y = 81,
        t.viewport = this._Group1_i(),
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.anchorOffsetX = 0,
        t.width = 396,
        t.x = 9,
        t.y = 2,
        t
    },
    i.gr_gainWay_i = function() {
        var t = new eui.Group;
        return this.gr_gainWay = t,
        t.left = 30,
        t.right = 30,
        t.scaleX = 1,
        t.scaleY = 1,
        t.touchEnabled = !1,
        t.y = 150,
        t.elementsContent = [this.scoreller_gainWay_i(), this.gr_title_i(), this.imge_mask_i()],
        t
    },
    i.scoreller_gainWay_i = function() {
        var t = new eui.Scroller;
        return this.scoreller_gainWay = t,
        t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.height = 110,
        t.width = 433,
        t.x = 0,
        t.y = 27,
        t.viewport = this._Group2_i(),
        t
    },
    i._Group2_i = function() {
        var t = new eui.Group;
        return t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.height = 23,
        t.width = 291,
        t.elementsContent = [this.list_gainWay_i(), this._Image2_i()],
        t
    },
    i.list_gainWay_i = function() {
        var t = new eui.List;
        return this.list_gainWay = t,
        t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.x = 0,
        t.y = 0,
        t.layout = this._VerticalLayout1_i(),
        t
    },
    i._VerticalLayout1_i = function() {
        var t = new eui.VerticalLayout;
        return t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "new_tips_2023_imge_gaiway_item_bg_2_png",
        t.visible = !1,
        t.x = 0,
        t.y = 0,
        t
    },
    i.gr_title_i = function() {
        var t = new eui.Group;
        return this.gr_title = t,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this.tx_title_i(), this.imge_title_icon_i()],
        t
    },
    i.tx_title_i = function() {
        var t = new eui.Label;
        return this.tx_title = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "获取方式",
        t.textColor = 8362444,
        t.x = 19,
        t.y = 2,
        t
    },
    i.imge_title_icon_i = function() {
        var t = new eui.Image;
        return this.imge_title_icon = t,
        t.source = "new_tips_2023_imge_title_icon_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.imge_mask_i = function() {
        var t = new eui.Image;
        return this.imge_mask = t,
        t.bottom = 6,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "new_tips_2023_imge_mask_png",
        t.visible = !1,
        t.width = 400,
        t.x = 0,
        t
    },
    i.btnUse_i = function() {
        var t = new eui.Group;
        return this.btnUse = t,
        t.bottom = 15,
        t.right = 20,
        t.scaleX = 1,
        t.scaleY = 1,
        t.elementsContent = [this._Image3_i(), this._Label2_i()],
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "new_mark_tips_2021_11_aaa_png",
        t.y = 3,
        t
    },
    i._Label2_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "使 用",
        t.textColor = 11301415,
        t.x = 27,
        t.y = 8,
        t
    },
    i.txtItemId_i = function() {
        var t = new eui.Label;
        return this.txtItemId = t,
        t.fontFamily = "MFShangHei",
        t.size = 20,
        t.text = "itemId:00000000000",
        t.x = 312,
        t.y = 43,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/tips/ItemTipsSkin.exml"] = window.ItemTipsSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["imgScrollBarBG", "imgScrollBar", "btnUse", "txtDescribe", "scroller", "txtNum", "grp_itemHave", "txtName", "txtItemId"],
        this.height = 172,
        this.width = 480,
        this.elementsContent = [this._Image1_i(), this._Image2_i(), this._Image3_i(), this.imgScrollBarBG_i(), this.imgScrollBar_i(), this.btnUse_i(), this.scroller_i(), this._Label2_i(), this.grp_itemHave_i(), this.txtName_i(), this.txtItemId_i()]
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
    i.imgScrollBarBG_i = function() {
        var t = new eui.Image;
        return this.imgScrollBarBG = t,
        t.bottom = 5,
        t.right = 5,
        t.source = "new_tips_2021_11_img2_png",
        t.top = 35,
        t
    },
    i.imgScrollBar_i = function() {
        var t = new eui.Image;
        return this.imgScrollBar = t,
        t.height = 131,
        t.right = 5,
        t.source = "new_tips_2021_11_img1_png",
        t.y = 35,
        t
    },
    i.btnUse_i = function() {
        var t = new eui.Group;
        return this.btnUse = t,
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
        return t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "使 用",
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
        return t.elementsContent = [this.txtDescribe_i()],
        t
    },
    i.txtDescribe_i = function() {
        var t = new eui.Label;
        return this.txtDescribe = t,
        t.fontFamily = "MFShangHei",
        t.left = 0,
        t.right = 0,
        t.scaleX = 1,
        t.scaleY = 1,
        t.size = 16,
        t.textColor = 8822740,
        t
    },
    i._Label2_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "物品介绍：",
        t.textColor = 6154074,
        t.x = 24,
        t.y = 44.539,
        t
    },
    i.grp_itemHave_i = function() {
        var t = new eui.Group;
        return this.grp_itemHave = t,
        t.right = 20,
        t.y = 10,
        t.layout = this._HorizontalLayout1_i(),
        t.elementsContent = [this._Label3_i(), this.txtNum_i()],
        t
    },
    i._HorizontalLayout1_i = function() {
        var t = new eui.HorizontalLayout;
        return t
    },
    i._Label3_i = function() {
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
    i.txtItemId_i = function() {
        var t = new eui.Label;
        return this.txtItemId = t,
        t.fontFamily = "MFShangHei",
        t.size = 20,
        t.text = "itemId:00000000000",
        t.x = 24,
        t.y = 136,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/tips/NormalMarkTipsSkin.exml"] = window.NormalMarkTipsSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["txtRestrict", "txtMarkName", "txtMintMarkClassName", "txtTypeName", "txtBase1", "txtBaseAttr1", "txtBase3", "txtBaseAttr3", "txtBase5", "txtBaseAttr5", "txtBase2", "txtBaseAttr2", "txtBase4", "txtBaseAttr4", "txtBase6", "txtBaseAttr6", "groupBaseAttr", "imgLine1", "txtNoExtraAttr", "txtHasExtraAttr", "txtExtraAttr1", "txtExtraAttr3", "txtExtraAttr5", "txtExtraAttr2", "txtExtraAttr4", "txtExtraAttr6", "groupExtraAttr"],
        this.height = 178,
        this.width = 480,
        this.elementsContent = [this._Image1_i(), this.txtRestrict_i(), this._Image2_i(), this._Image3_i(), this._Group1_i(), this.txtTypeName_i(), this.groupBaseAttr_i(), this.imgLine1_i(), this.txtNoExtraAttr_i(), this.txtHasExtraAttr_i(), this.groupExtraAttr_i()]
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
        t.visible = !0,
        t
    },
    i.txtRestrict_i = function() {
        var t = new eui.Label;
        return this.txtRestrict = t,
        t.fontFamily = "MFShangHei",
        t.right = 24,
        t.size = 18,
        t.text = "限定：XXXXXX",
        t.textColor = 8822740,
        t.verticalAlign = "middle",
        t.visible = !0,
        t.y = 43,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 29,
        t.left = 5,
        t.right = 5,
        t.source = "new_tips_2021_11_img5_png",
        t.visible = !0,
        t.y = 5,
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "new_tips_2021_11_img4_png",
        t.visible = !0,
        t.x = 3.82,
        t.y = 2.66,
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.height = 24,
        t.width = 420,
        t.x = 17,
        t.y = 7,
        t.layout = this._HorizontalLayout1_i(),
        t.elementsContent = [this.txtMarkName_i(), this.txtMintMarkClassName_i()],
        t
    },
    i._HorizontalLayout1_i = function() {
        var t = new eui.HorizontalLayout;
        return t.verticalAlign = "bottom",
        t
    },
    i.txtMarkName_i = function() {
        var t = new eui.Label;
        return this.txtMarkName = t,
        t.fontFamily = "MFShangHei",
        t.scaleX = 1,
        t.scaleY = 1,
        t.size = 20,
        t.text = "五星刻印五星刻印五星刻印",
        t.textColor = 12900094,
        t.visible = !0,
        t.x = 7,
        t.y = 2.8040000000000003,
        t
    },
    i.txtMintMarkClassName_i = function() {
        var t = new eui.Label;
        return this.txtMintMarkClassName = t,
        t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.fontFamily = "MFShangHei",
        t.scaleX = 1,
        t.scaleY = 1,
        t.size = 16,
        t.text = "（v8系列）",
        t.textAlign = "left",
        t.textColor = 6252402,
        t.verticalAlign = "middle",
        t.width = 136,
        t.x = 253,
        t.y = 1,
        t
    },
    i.txtTypeName_i = function() {
        var t = new eui.Label;
        return this.txtTypeName = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "刻印刻印",
        t.textColor = 6154074,
        t.verticalAlign = "middle",
        t.visible = !0,
        t.x = 24,
        t.y = 44.507,
        t
    },
    i.groupBaseAttr_i = function() {
        var t = new eui.Group;
        return this.groupBaseAttr = t,
        t.left = 24,
        t.right = 24,
        t.visible = !0,
        t.y = 72.82,
        t.layout = this._TileLayout1_i(),
        t.elementsContent = [this.txtBase1_i(), this.txtBaseAttr1_i(), this.txtBase3_i(), this.txtBaseAttr3_i(), this.txtBase5_i(), this.txtBaseAttr5_i(), this.txtBase2_i(), this.txtBaseAttr2_i(), this.txtBase4_i(), this.txtBaseAttr4_i(), this.txtBase6_i(), this.txtBaseAttr6_i()],
        t
    },
    i._TileLayout1_i = function() {
        var t = new eui.TileLayout;
        return t.columnWidth = 70,
        t.horizontalGap = 0,
        t.orientation = "rows",
        t.requestedColumnCount = 6,
        t.requestedRowCount = 2,
        t.rowHeight = 20,
        t
    },
    i.txtBase1_i = function() {
        var t = new eui.Label;
        return this.txtBase1 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "攻击：",
        t.textAlign = "left",
        t.textColor = 4252667,
        t.verticalAlign = "middle",
        t.visible = !0,
        t.x = .12,
        t.y = 0,
        t
    },
    i.txtBaseAttr1_i = function() {
        var t = new eui.Label;
        return this.txtBaseAttr1 = t,
        t.fontFamily = "MFShangHei",
        t.height = 30,
        t.size = 16,
        t.text = "+00/00",
        t.textAlign = "left",
        t.textColor = 8822740,
        t.verticalAlign = "middle",
        t.visible = !0,
        t.width = 60,
        t.x = 10.12,
        t.y = 10,
        t
    },
    i.txtBase3_i = function() {
        var t = new eui.Label;
        return this.txtBase3 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "特攻：",
        t.textAlign = "left",
        t.textColor = 4252667,
        t.verticalAlign = "middle",
        t.x = 0,
        t.y = 30.98,
        t
    },
    i.txtBaseAttr3_i = function() {
        var t = new eui.Label;
        return this.txtBaseAttr3 = t,
        t.fontFamily = "MFShangHei",
        t.height = 30,
        t.size = 16,
        t.text = "+00/00",
        t.textAlign = "left",
        t.textColor = 8822740,
        t.verticalAlign = "middle",
        t.width = 60,
        t.x = 10,
        t.y = 40.980000000000004,
        t
    },
    i.txtBase5_i = function() {
        var t = new eui.Label;
        return this.txtBase5 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "速度：",
        t.textAlign = "left",
        t.textColor = 4252667,
        t.verticalAlign = "middle",
        t.x = 10,
        t.y = 40.98,
        t
    },
    i.txtBaseAttr5_i = function() {
        var t = new eui.Label;
        return this.txtBaseAttr5 = t,
        t.fontFamily = "MFShangHei",
        t.height = 30,
        t.size = 16,
        t.text = "+00/00",
        t.textAlign = "left",
        t.textColor = 8822740,
        t.verticalAlign = "middle",
        t.width = 60,
        t.x = 20,
        t.y = 50.98,
        t
    },
    i.txtBase2_i = function() {
        var t = new eui.Label;
        return this.txtBase2 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "防御：",
        t.textAlign = "left",
        t.textColor = 4252667,
        t.verticalAlign = "middle",
        t.x = 20,
        t.y = 50.98,
        t
    },
    i.txtBaseAttr2_i = function() {
        var t = new eui.Label;
        return this.txtBaseAttr2 = t,
        t.fontFamily = "MFShangHei",
        t.height = 30,
        t.size = 16,
        t.text = "+00/00",
        t.textAlign = "left",
        t.textColor = 8822740,
        t.verticalAlign = "middle",
        t.width = 60,
        t.x = 30,
        t.y = 60.98,
        t
    },
    i.txtBase4_i = function() {
        var t = new eui.Label;
        return this.txtBase4 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "特防：",
        t.textAlign = "left",
        t.textColor = 4252667,
        t.verticalAlign = "middle",
        t.x = 30,
        t.y = 60.98,
        t
    },
    i.txtBaseAttr4_i = function() {
        var t = new eui.Label;
        return this.txtBaseAttr4 = t,
        t.fontFamily = "MFShangHei",
        t.height = 30,
        t.size = 16,
        t.text = "+00/00",
        t.textAlign = "left",
        t.textColor = 8822740,
        t.verticalAlign = "middle",
        t.width = 60,
        t.x = 40,
        t.y = 70.97999999999999,
        t
    },
    i.txtBase6_i = function() {
        var t = new eui.Label;
        return this.txtBase6 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "体力：",
        t.textAlign = "left",
        t.textColor = 4252667,
        t.verticalAlign = "middle",
        t.x = 40,
        t.y = 70.98,
        t
    },
    i.txtBaseAttr6_i = function() {
        var t = new eui.Label;
        return this.txtBaseAttr6 = t,
        t.fontFamily = "MFShangHei",
        t.height = 30,
        t.size = 16,
        t.text = "+00/00",
        t.textAlign = "left",
        t.textColor = 8822740,
        t.verticalAlign = "middle",
        t.width = 60,
        t.x = 50,
        t.y = 80.98,
        t
    },
    i.imgLine1_i = function() {
        var t = new eui.Image;
        return this.imgLine1 = t,
        t.horizontalCenter = 0,
        t.scaleY = 2,
        t.source = "new_mark_tips_2021_11_img1_png",
        t.visible = !0,
        t.y = 131.18,
        t
    },
    i.txtNoExtraAttr_i = function() {
        var t = new eui.Label;
        return this.txtNoExtraAttr = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = 0,
        t.size = 16,
        t.text = "无隐藏属性",
        t.textAlign = "center",
        t.textColor = 6154074,
        t.visible = !1,
        t.y = 145.326,
        t
    },
    i.txtHasExtraAttr_i = function() {
        var t = new eui.Label;
        return this.txtHasExtraAttr = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "隐藏属性：",
        t.textAlign = "center",
        t.textColor = 6154074,
        t.visible = !1,
        t.x = 24,
        t.y = 145.326,
        t
    },
    i.groupExtraAttr_i = function() {
        var t = new eui.Group;
        return this.groupExtraAttr = t,
        t.left = 24,
        t.right = 24,
        t.visible = !1,
        t.y = 174.311,
        t.layout = this._TileLayout2_i(),
        t.elementsContent = [this._Label1_i(), this.txtExtraAttr1_i(), this._Label2_i(), this.txtExtraAttr3_i(), this._Label3_i(), this.txtExtraAttr5_i(), this._Label4_i(), this.txtExtraAttr2_i(), this._Label5_i(), this.txtExtraAttr4_i(), this._Label6_i(), this.txtExtraAttr6_i()],
        t
    },
    i._TileLayout2_i = function() {
        var t = new eui.TileLayout;
        return t.columnWidth = 70,
        t.horizontalGap = 0,
        t.orientation = "rows",
        t.requestedRowCount = 2,
        t.rowHeight = 20,
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "攻击：",
        t.textAlign = "left",
        t.textColor = 4252667,
        t.verticalAlign = "middle",
        t.x = .12,
        t.y = 0,
        t
    },
    i.txtExtraAttr1_i = function() {
        var t = new eui.Label;
        return this.txtExtraAttr1 = t,
        t.fontFamily = "MFShangHei",
        t.height = 30,
        t.size = 16,
        t.text = "+00",
        t.textAlign = "left",
        t.textColor = 8822740,
        t.verticalAlign = "middle",
        t.width = 60,
        t.x = 10.12,
        t.y = 10,
        t
    },
    i._Label2_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "特攻：",
        t.textAlign = "left",
        t.textColor = 4252667,
        t.verticalAlign = "middle",
        t.x = 0,
        t.y = 30.98,
        t
    },
    i.txtExtraAttr3_i = function() {
        var t = new eui.Label;
        return this.txtExtraAttr3 = t,
        t.fontFamily = "MFShangHei",
        t.height = 30,
        t.size = 16,
        t.text = "+00",
        t.textAlign = "left",
        t.textColor = 8822740,
        t.verticalAlign = "middle",
        t.width = 60,
        t.x = 10,
        t.y = 40.980000000000004,
        t
    },
    i._Label3_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "速度：",
        t.textAlign = "left",
        t.textColor = 4252667,
        t.verticalAlign = "middle",
        t.x = 10,
        t.y = 40.98,
        t
    },
    i.txtExtraAttr5_i = function() {
        var t = new eui.Label;
        return this.txtExtraAttr5 = t,
        t.fontFamily = "MFShangHei",
        t.height = 30,
        t.size = 16,
        t.text = "+00",
        t.textAlign = "left",
        t.textColor = 8822740,
        t.verticalAlign = "middle",
        t.width = 60,
        t.x = 20,
        t.y = 50.98,
        t
    },
    i._Label4_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "防御：",
        t.textAlign = "left",
        t.textColor = 4252667,
        t.verticalAlign = "middle",
        t.x = 20,
        t.y = 50.98,
        t
    },
    i.txtExtraAttr2_i = function() {
        var t = new eui.Label;
        return this.txtExtraAttr2 = t,
        t.fontFamily = "MFShangHei",
        t.height = 30,
        t.size = 16,
        t.text = "+00",
        t.textAlign = "left",
        t.textColor = 8822740,
        t.verticalAlign = "middle",
        t.width = 60,
        t.x = 30,
        t.y = 60.98,
        t
    },
    i._Label5_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "特防：",
        t.textAlign = "left",
        t.textColor = 4252667,
        t.verticalAlign = "middle",
        t.x = 30,
        t.y = 60.98,
        t
    },
    i.txtExtraAttr4_i = function() {
        var t = new eui.Label;
        return this.txtExtraAttr4 = t,
        t.fontFamily = "MFShangHei",
        t.height = 30,
        t.size = 16,
        t.text = "+00",
        t.textAlign = "left",
        t.textColor = 8822740,
        t.verticalAlign = "middle",
        t.width = 60,
        t.x = 40,
        t.y = 70.97999999999999,
        t
    },
    i._Label6_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "体力：",
        t.textAlign = "left",
        t.textColor = 4252667,
        t.verticalAlign = "middle",
        t.x = 40,
        t.y = 70.98,
        t
    },
    i.txtExtraAttr6_i = function() {
        var t = new eui.Label;
        return this.txtExtraAttr6 = t,
        t.fontFamily = "MFShangHei",
        t.height = 30,
        t.size = 16,
        t.text = "+00",
        t.textAlign = "left",
        t.textColor = 8822740,
        t.verticalAlign = "middle",
        t.width = 60,
        t.x = 50,
        t.y = 80.98,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/tips/SkillMarkTipsSkin.exml"] = window.SkillMarkTipsSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["txtMarkName", "txtTypeName", "txtRestrict", "txtBind", "btnTakeOff", "btnPutOn", "txtSkillDescribe", "scroller"],
        this.height = 195,
        this.width = 480,
        this.elementsContent = [this._Image1_i(), this._Image2_i(), this._Image3_i(), this.txtMarkName_i(), this.txtTypeName_i(), this.txtRestrict_i(), this.txtBind_i(), this.btnTakeOff_i(), this.btnPutOn_i(), this.scroller_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.bottom = 5,
        t.left = 0,
        t.right = 5,
        t.scale9Grid = new egret.Rectangle(7, 7, 6, 6),
        t.source = "new_tips_2021_11_img6_png",
        t.top = 5,
        t.visible = !0,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 30,
        t.left = 5,
        t.right = 5,
        t.source = "new_tips_2021_11_img5_png",
        t.visible = !0,
        t.y = 2,
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "new_tips_2021_11_img4_png",
        t.visible = !0,
        t.x = 3.853,
        t.y = .278,
        t
    },
    i.txtMarkName_i = function() {
        var t = new eui.Label;
        return this.txtMarkName = t,
        t.fontFamily = "MFShangHei",
        t.size = 20,
        t.text = "五星刻印",
        t.textColor = 12900350,
        t.visible = !0,
        t.x = 24,
        t.y = 8,
        t
    },
    i.txtTypeName_i = function() {
        var t = new eui.Label;
        return this.txtTypeName = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "刻印刻印",
        t.textColor = 6154074,
        t.verticalAlign = "middle",
        t.visible = !0,
        t.x = 24,
        t.y = 43.148,
        t
    },
    i.txtRestrict_i = function() {
        var t = new eui.Label;
        return this.txtRestrict = t,
        t.fontFamily = "MFShangHei",
        t.right = 24,
        t.size = 20,
        t.text = "限定：XXXXXX",
        t.textColor = 4252667,
        t.verticalAlign = "middle",
        t.visible = !0,
        t.y = 8,
        t
    },
    i.txtBind_i = function() {
        var t = new eui.Label;
        return this.txtBind = t,
        t.fontFamily = "MFShangHei",
        t.right = 24,
        t.size = 18,
        t.text = "装备于精灵：XXXX",
        t.textColor = 8822740,
        t.verticalAlign = "middle",
        t.visible = !0,
        t.x = 332,
        t.y = 43.148,
        t
    },
    i.btnTakeOff_i = function() {
        var t = new eui.Image;
        return this.btnTakeOff = t,
        t.source = "new_mark_tips_2021_11_btn1_png",
        t.visible = !0,
        t.x = 188,
        t.y = 155.279,
        t
    },
    i.btnPutOn_i = function() {
        var t = new eui.Image;
        return this.btnPutOn = t,
        t.source = "img_take_off_png",
        t.visible = !0,
        t.x = 188,
        t.y = 154.279,
        t
    },
    i.scroller_i = function() {
        var t = new eui.Scroller;
        return this.scroller = t,
        t.height = 72,
        t.left = 24,
        t.right = 24,
        t.visible = !0,
        t.y = 72.222,
        t.viewport = this._Group1_i(),
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.layout = this._VerticalLayout1_i(),
        t.elementsContent = [this.txtSkillDescribe_i(), this._Image4_i(), this._Label1_i()],
        t
    },
    i._VerticalLayout1_i = function() {
        var t = new eui.VerticalLayout;
        return t.gap = 12,
        t.horizontalAlign = "justify",
        t
    },
    i.txtSkillDescribe_i = function() {
        var t = new eui.Label;
        return this.txtSkillDescribe = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.textColor = 4252667,
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.scaleY = 2,
        t.source = "new_mark_tips_2021_11_img1_png",
        t.visible = !0,
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "技能刻印无数值加成",
        t.textAlign = "center",
        t.textColor = 6388400,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/tips/SkillTipsSkin.exml"] = window.SkillTipsSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["imgScrollBarBG", "imgScrollBar", "txtEnsure", "btnChange", "txtAdditonDesc", "imgIcon", "txtDescribe", "scroller", "txtClose", "txtSkillName", "txtType", "txtPP", "txtDamage"],
        this.height = 250,
        this.width = 480,
        this.elementsContent = [this._Image1_i(), this._Image2_i(), this._Image3_i(), this.imgScrollBarBG_i(), this.imgScrollBar_i(), this.btnChange_i(), this.txtAdditonDesc_i(), this.imgIcon_i(), this.scroller_i(), this.txtClose_i(), this._Group2_i(), this.txtPP_i(), this.txtDamage_i()]
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
        return t.height = 69.097,
        t.left = 5,
        t.right = 5,
        t.source = "new_tips_2021_11_img5_png",
        t.top = 5,
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "new_tips_2021_11_img7_png",
        t.x = 24,
        t.y = 13,
        t
    },
    i.imgScrollBarBG_i = function() {
        var t = new eui.Image;
        return this.imgScrollBarBG = t,
        t.bottom = 5,
        t.right = 5,
        t.source = "new_tips_2021_11_img2_png",
        t.top = 74,
        t
    },
    i.imgScrollBar_i = function() {
        var t = new eui.Image;
        return this.imgScrollBar = t,
        t.right = 5,
        t.source = "new_tips_2021_11_img1_png",
        t.y = 74,
        t
    },
    i.btnChange_i = function() {
        var t = new eui.Group;
        return this.btnChange = t,
        t.right = 20,
        t.y = 210,
        t.elementsContent = [this._Image4_i(), this.txtEnsure_i()],
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.source = "new_mark_tips_2021_11_aaa_png",
        t.visible = !0,
        t
    },
    i.txtEnsure_i = function() {
        var t = new eui.Label;
        return this.txtEnsure = t,
        t.fontFamily = "MFShangHei",
        t.left = 5,
        t.right = 5,
        t.size = 18,
        t.text = "替 换",
        t.textAlign = "center",
        t.textColor = 11301415,
        t.y = 3.05,
        t
    },
    i.txtAdditonDesc_i = function() {
        var t = new eui.Label;
        return this.txtAdditonDesc = t,
        t.bottom = 18,
        t.fontFamily = "MFShangHei",
        t.height = 32,
        t.left = 24,
        t.scaleX = 1,
        t.scaleY = 1,
        t.size = 18,
        t.textColor = 8822740,
        t.verticalAlign = "bottom",
        t.width = 333,
        t
    },
    i.imgIcon_i = function() {
        var t = new eui.Image;
        return this.imgIcon = t,
        t.x = 28,
        t.y = 20,
        t
    },
    i.scroller_i = function() {
        var t = new eui.Scroller;
        return this.scroller = t,
        t.height = 110,
        t.left = 24,
        t.right = 24,
        t.y = 87,
        t.viewport = this._Group1_i(),
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.elementsContent = [this.txtDescribe_i()],
        t
    },
    i.txtDescribe_i = function() {
        var t = new eui.Label;
        return this.txtDescribe = t,
        t.fontFamily = "MFShangHei",
        t.left = 0,
        t.right = 0,
        t.scaleX = 1,
        t.scaleY = 1,
        t.size = 18,
        t.textColor = 8822740,
        t
    },
    i.txtClose_i = function() {
        var t = new eui.Label;
        return this.txtClose = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "——点击屏幕关闭弹窗——",
        t.textColor = 8696818,
        t.visible = !1,
        t.x = 146,
        t.y = 243.029,
        t
    },
    i._Group2_i = function() {
        var t = new eui.Group;
        return t.visible = !0,
        t.x = 87,
        t.y = 18.82,
        t.layout = this._HorizontalLayout1_i(),
        t.elementsContent = [this.txtSkillName_i(), this.txtType_i()],
        t
    },
    i._HorizontalLayout1_i = function() {
        var t = new eui.HorizontalLayout;
        return t.gap = 10,
        t.verticalAlign = "bottom",
        t
    },
    i.txtSkillName_i = function() {
        var t = new eui.Label;
        return this.txtSkillName = t,
        t.fontFamily = "MFShangHei",
        t.size = 20,
        t.text = "技能名技能名技能名",
        t.textColor = 12900350,
        t.x = 0,
        t.y = .18,
        t
    },
    i.txtType_i = function() {
        var t = new eui.Label;
        return this.txtType = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "属性技能",
        t.textColor = 6088025,
        t
    },
    i.txtPP_i = function() {
        var t = new eui.Label;
        return this.txtPP = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "PP: 000",
        t.textColor = 4252667,
        t.x = 183,
        t.y = 46,
        t
    },
    i.txtDamage_i = function() {
        var t = new eui.Label;
        return this.txtDamage = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "威力: 000",
        t.textColor = 16580432,
        t.x = 88,
        t.y = 46,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/tips/UniversalMarkTipsSkin.exml"] = window.UniversalMarkTipsSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["txtMarkName", "txtMintMarkClassName", "txtIsCurEquip", "txtLevel", "txtTypeName", "txtRestrict", "txtBase1", "txtBaseAttr1", "txtBase3", "txtBaseAttr3", "txtBase5", "txtBaseAttr5", "txtBase2", "txtBaseAttr2", "txtBase4", "txtBaseAttr4", "txtBase6", "txtBaseAttr6", "groupBaseAttr", "imgLine1", "txtNoExtraAttr", "txtHasExtraAttr", "txtExtraAttr1", "txtExtraAttr3", "txtExtraAttr5", "txtExtraAttr2", "txtExtraAttr4", "txtExtraAttr6", "groupExtraAttr", "imgLine2", "txtStone", "imgStone", "groupUniversalMark", "txtSkill", "txtStoneDesc", "txtCost", "btnUp", "btnPutOn", "btnTakeOff", "btnMix", "imgMax"],
        this.height = 331,
        this.width = 480,
        this.elementsContent = [this._Image1_i(), this._Image2_i(), this._Image3_i(), this._Group1_i(), this.txtLevel_i(), this.txtTypeName_i(), this.txtRestrict_i(), this.groupBaseAttr_i(), this.imgLine1_i(), this.txtNoExtraAttr_i(), this.txtHasExtraAttr_i(), this.groupExtraAttr_i(), this.imgLine2_i(), this.groupUniversalMark_i(), this.txtSkill_i(), this.txtStoneDesc_i(), this.btnUp_i(), this.btnPutOn_i(), this.btnTakeOff_i(), this.btnMix_i(), this.imgMax_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.bottom = 5,
        t.left = 5,
        t.right = 5,
        t.source = "new_tips_2021_11_img6_png",
        t.top = 5,
        t.visible = !0,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 33.168,
        t.left = 5,
        t.right = 5,
        t.source = "new_tips_2021_11_img5_png",
        t.visible = !0,
        t.y = 2,
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.height = 37.118,
        t.source = "new_tips_2021_11_img4_png",
        t.visible = !0,
        t.x = 3.86,
        t.y = .042,
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.x = 24,
        t.y = 9,
        t.layout = this._HorizontalLayout1_i(),
        t.elementsContent = [this.txtMarkName_i(), this.txtMintMarkClassName_i(), this.txtIsCurEquip_i()],
        t
    },
    i._HorizontalLayout1_i = function() {
        var t = new eui.HorizontalLayout;
        return t.verticalAlign = "bottom",
        t
    },
    i.txtMarkName_i = function() {
        var t = new eui.Label;
        return this.txtMarkName = t,
        t.fontFamily = "MFShangHei",
        t.size = 20,
        t.text = "五星刻印",
        t.textColor = 12900094,
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t
    },
    i.txtMintMarkClassName_i = function() {
        var t = new eui.Label;
        return this.txtMintMarkClassName = t,
        t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.fontFamily = "MFShangHei",
        t.scaleX = 1,
        t.scaleY = 1,
        t.size = 16,
        t.text = "（v8系列）",
        t.textAlign = "left",
        t.textColor = 6252402,
        t.verticalAlign = "middle",
        t.x = 253,
        t.y = 1,
        t
    },
    i.txtIsCurEquip_i = function() {
        var t = new eui.Label;
        return this.txtIsCurEquip = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "(当前装备)",
        t.textColor = 16725558,
        t
    },
    i.txtLevel_i = function() {
        var t = new eui.Label;
        return this.txtLevel = t,
        t.fontFamily = "MFShangHei",
        t.right = 24,
        t.size = 18,
        t.text = " Lv.5/5",
        t.textColor = 4252667,
        t.visible = !0,
        t.y = 10.067,
        t
    },
    i.txtTypeName_i = function() {
        var t = new eui.Label;
        return this.txtTypeName = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "刻印刻印",
        t.textColor = 6154074,
        t.verticalAlign = "middle",
        t.visible = !0,
        t.x = 24,
        t.y = 43,
        t
    },
    i.txtRestrict_i = function() {
        var t = new eui.Label;
        return this.txtRestrict = t,
        t.fontFamily = "MFShangHei",
        t.right = 24,
        t.size = 18,
        t.text = "限定：XXXXXX",
        t.textColor = 8822740,
        t.verticalAlign = "middle",
        t.visible = !0,
        t.y = 43,
        t
    },
    i.groupBaseAttr_i = function() {
        var t = new eui.Group;
        return this.groupBaseAttr = t,
        t.left = 24,
        t.right = 24,
        t.visible = !0,
        t.y = 70.322,
        t.layout = this._TileLayout1_i(),
        t.elementsContent = [this._Group2_i(), this._Group3_i(), this._Group4_i(), this._Group5_i(), this._Group6_i(), this._Group7_i()],
        t
    },
    i._TileLayout1_i = function() {
        var t = new eui.TileLayout;
        return t.columnAlign = "justifyUsingGap",
        t.horizontalGap = 10,
        t.orientation = "rows",
        t.requestedColumnCount = 3,
        t.requestedRowCount = 2,
        t.verticalGap = 10,
        t
    },
    i._Group2_i = function() {
        var t = new eui.Group;
        return t.x = 0,
        t.y = 0,
        t.layout = this._HorizontalLayout2_i(),
        t.elementsContent = [this.txtBase1_i(), this.txtBaseAttr1_i()],
        t
    },
    i._HorizontalLayout2_i = function() {
        var t = new eui.HorizontalLayout;
        return t.gap = 0,
        t
    },
    i.txtBase1_i = function() {
        var t = new eui.Label;
        return this.txtBase1 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "攻击：",
        t.textAlign = "left",
        t.textColor = 4252667,
        t.verticalAlign = "middle",
        t.visible = !0,
        t
    },
    i.txtBaseAttr1_i = function() {
        var t = new eui.Label;
        return this.txtBaseAttr1 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "+000/000",
        t.textAlign = "left",
        t.textColor = 8822740,
        t.verticalAlign = "middle",
        t.visible = !0,
        t
    },
    i._Group3_i = function() {
        var t = new eui.Group;
        return t.x = 73,
        t.y = 0,
        t.layout = this._HorizontalLayout3_i(),
        t.elementsContent = [this.txtBase3_i(), this.txtBaseAttr3_i()],
        t
    },
    i._HorizontalLayout3_i = function() {
        var t = new eui.HorizontalLayout;
        return t.gap = 0,
        t
    },
    i.txtBase3_i = function() {
        var t = new eui.Label;
        return this.txtBase3 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "特攻：",
        t.textAlign = "left",
        t.textColor = 4252667,
        t.verticalAlign = "middle",
        t
    },
    i.txtBaseAttr3_i = function() {
        var t = new eui.Label;
        return this.txtBaseAttr3 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "+000/000",
        t.textAlign = "left",
        t.textColor = 8822740,
        t.verticalAlign = "middle",
        t
    },
    i._Group4_i = function() {
        var t = new eui.Group;
        return t.x = 146,
        t.y = 0,
        t.layout = this._HorizontalLayout4_i(),
        t.elementsContent = [this.txtBase5_i(), this.txtBaseAttr5_i()],
        t
    },
    i._HorizontalLayout4_i = function() {
        var t = new eui.HorizontalLayout;
        return t.gap = 0,
        t
    },
    i.txtBase5_i = function() {
        var t = new eui.Label;
        return this.txtBase5 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "速度：",
        t.textAlign = "left",
        t.textColor = 4252667,
        t.verticalAlign = "middle",
        t
    },
    i.txtBaseAttr5_i = function() {
        var t = new eui.Label;
        return this.txtBaseAttr5 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "+000/000",
        t.textAlign = "left",
        t.textColor = 8822740,
        t.verticalAlign = "middle",
        t
    },
    i._Group5_i = function() {
        var t = new eui.Group;
        return t.x = 219,
        t.y = 0,
        t.layout = this._HorizontalLayout5_i(),
        t.elementsContent = [this.txtBase2_i(), this.txtBaseAttr2_i()],
        t
    },
    i._HorizontalLayout5_i = function() {
        var t = new eui.HorizontalLayout;
        return t.gap = 0,
        t
    },
    i.txtBase2_i = function() {
        var t = new eui.Label;
        return this.txtBase2 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "防御：",
        t.textAlign = "left",
        t.textColor = 4252667,
        t.verticalAlign = "middle",
        t
    },
    i.txtBaseAttr2_i = function() {
        var t = new eui.Label;
        return this.txtBaseAttr2 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "+000/000",
        t.textAlign = "left",
        t.textColor = 8822740,
        t.verticalAlign = "middle",
        t
    },
    i._Group6_i = function() {
        var t = new eui.Group;
        return t.x = 292,
        t.y = 0,
        t.layout = this._HorizontalLayout6_i(),
        t.elementsContent = [this.txtBase4_i(), this.txtBaseAttr4_i()],
        t
    },
    i._HorizontalLayout6_i = function() {
        var t = new eui.HorizontalLayout;
        return t.gap = 0,
        t
    },
    i.txtBase4_i = function() {
        var t = new eui.Label;
        return this.txtBase4 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "特防：",
        t.textAlign = "left",
        t.textColor = 4252667,
        t.verticalAlign = "middle",
        t
    },
    i.txtBaseAttr4_i = function() {
        var t = new eui.Label;
        return this.txtBaseAttr4 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "+000/000",
        t.textAlign = "left",
        t.textColor = 8822740,
        t.verticalAlign = "middle",
        t
    },
    i._Group7_i = function() {
        var t = new eui.Group;
        return t.x = 0,
        t.y = 0,
        t.layout = this._HorizontalLayout7_i(),
        t.elementsContent = [this.txtBase6_i(), this.txtBaseAttr6_i()],
        t
    },
    i._HorizontalLayout7_i = function() {
        var t = new eui.HorizontalLayout;
        return t.gap = 0,
        t
    },
    i.txtBase6_i = function() {
        var t = new eui.Label;
        return this.txtBase6 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "体力：",
        t.textAlign = "left",
        t.textColor = 4252667,
        t.verticalAlign = "middle",
        t
    },
    i.txtBaseAttr6_i = function() {
        var t = new eui.Label;
        return this.txtBaseAttr6 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "+000/000",
        t.textAlign = "left",
        t.textColor = 8822740,
        t.verticalAlign = "middle",
        t
    },
    i.imgLine1_i = function() {
        var t = new eui.Image;
        return this.imgLine1 = t,
        t.horizontalCenter = 0,
        t.scaleY = 2,
        t.source = "new_mark_tips_2021_11_img1_png",
        t.visible = !0,
        t.y = 126.155,
        t
    },
    i.txtNoExtraAttr_i = function() {
        var t = new eui.Label;
        return this.txtNoExtraAttr = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = 0,
        t.size = 18,
        t.text = "无隐藏属性",
        t.textAlign = "center",
        t.textColor = 6154074,
        t.visible = !0,
        t.y = 137.936,
        t
    },
    i.txtHasExtraAttr_i = function() {
        var t = new eui.Label;
        return this.txtHasExtraAttr = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "隐藏属性：",
        t.textAlign = "center",
        t.textColor = 6154074,
        t.visible = !0,
        t.x = 24,
        t.y = 137.937,
        t
    },
    i.groupExtraAttr_i = function() {
        var t = new eui.Group;
        return this.groupExtraAttr = t,
        t.left = 24,
        t.visible = !0,
        t.width = 390,
        t.y = 166.093,
        t.layout = this._TileLayout2_i(),
        t.elementsContent = [this._Label1_i(), this.txtExtraAttr1_i(), this._Label2_i(), this.txtExtraAttr3_i(), this._Label3_i(), this.txtExtraAttr5_i(), this._Label4_i(), this.txtExtraAttr2_i(), this._Label5_i(), this.txtExtraAttr4_i(), this._Label6_i(), this.txtExtraAttr6_i()],
        t
    },
    i._TileLayout2_i = function() {
        var t = new eui.TileLayout;
        return t.columnWidth = 60,
        t.requestedRowCount = 2,
        t.rowHeight = 20,
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "攻击：",
        t.textAlign = "left",
        t.textColor = 4252667,
        t.verticalAlign = "middle",
        t.x = .12,
        t.y = 0,
        t
    },
    i.txtExtraAttr1_i = function() {
        var t = new eui.Label;
        return this.txtExtraAttr1 = t,
        t.fontFamily = "MFShangHei",
        t.height = 30,
        t.size = 18,
        t.text = "+00",
        t.textAlign = "left",
        t.textColor = 8822740,
        t.verticalAlign = "middle",
        t.width = 60,
        t.x = 10.12,
        t.y = 10,
        t
    },
    i._Label2_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "特攻：",
        t.textAlign = "left",
        t.textColor = 4252667,
        t.verticalAlign = "middle",
        t.x = 0,
        t.y = 30.98,
        t
    },
    i.txtExtraAttr3_i = function() {
        var t = new eui.Label;
        return this.txtExtraAttr3 = t,
        t.fontFamily = "MFShangHei",
        t.height = 30,
        t.size = 18,
        t.text = "+00",
        t.textAlign = "left",
        t.textColor = 8822740,
        t.verticalAlign = "middle",
        t.width = 60,
        t.x = 10,
        t.y = 40.980000000000004,
        t
    },
    i._Label3_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "速度：",
        t.textAlign = "left",
        t.textColor = 4252667,
        t.verticalAlign = "middle",
        t.x = 10,
        t.y = 40.98,
        t
    },
    i.txtExtraAttr5_i = function() {
        var t = new eui.Label;
        return this.txtExtraAttr5 = t,
        t.fontFamily = "MFShangHei",
        t.height = 30,
        t.size = 18,
        t.text = "+00",
        t.textAlign = "left",
        t.textColor = 8822740,
        t.verticalAlign = "middle",
        t.width = 60,
        t.x = 20,
        t.y = 50.98,
        t
    },
    i._Label4_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "防御：",
        t.textAlign = "left",
        t.textColor = 4252667,
        t.verticalAlign = "middle",
        t.x = 20,
        t.y = 50.98,
        t
    },
    i.txtExtraAttr2_i = function() {
        var t = new eui.Label;
        return this.txtExtraAttr2 = t,
        t.fontFamily = "MFShangHei",
        t.height = 30,
        t.size = 18,
        t.text = "+00",
        t.textAlign = "left",
        t.textColor = 8822740,
        t.verticalAlign = "middle",
        t.width = 60,
        t.x = 30,
        t.y = 60.98,
        t
    },
    i._Label5_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "特防：",
        t.textAlign = "left",
        t.textColor = 4252667,
        t.verticalAlign = "middle",
        t.x = 30,
        t.y = 60.98,
        t
    },
    i.txtExtraAttr4_i = function() {
        var t = new eui.Label;
        return this.txtExtraAttr4 = t,
        t.fontFamily = "MFShangHei",
        t.height = 30,
        t.size = 18,
        t.text = "+00",
        t.textAlign = "left",
        t.textColor = 8822740,
        t.verticalAlign = "middle",
        t.width = 60,
        t.x = 40,
        t.y = 70.97999999999999,
        t
    },
    i._Label6_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "体力：",
        t.textAlign = "left",
        t.textColor = 4252667,
        t.verticalAlign = "middle",
        t.x = 40,
        t.y = 70.98,
        t
    },
    i.txtExtraAttr6_i = function() {
        var t = new eui.Label;
        return this.txtExtraAttr6 = t,
        t.fontFamily = "MFShangHei",
        t.height = 30,
        t.size = 18,
        t.text = "+00",
        t.textAlign = "left",
        t.textColor = 8822740,
        t.verticalAlign = "middle",
        t.width = 60,
        t.x = 50,
        t.y = 80.98,
        t
    },
    i.imgLine2_i = function() {
        var t = new eui.Image;
        return this.imgLine2 = t,
        t.horizontalCenter = 0,
        t.scaleY = 2,
        t.source = "new_mark_tips_2021_11_img1_png",
        t.visible = !0,
        t.x = 22,
        t.y = 221.036,
        t
    },
    i.groupUniversalMark_i = function() {
        var t = new eui.Group;
        return this.groupUniversalMark = t,
        t.visible = !0,
        t.x = 24,
        t.y = 232.291,
        t.layout = this._HorizontalLayout8_i(),
        t.elementsContent = [this.txtStone_i(), this.imgStone_i()],
        t
    },
    i._HorizontalLayout8_i = function() {
        var t = new eui.HorizontalLayout;
        return t.gap = 10,
        t.verticalAlign = "top",
        t
    },
    i.txtStone_i = function() {
        var t = new eui.Label;
        return this.txtStone = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "不可镶嵌特效宝石",
        t.textColor = 6154074,
        t.verticalAlign = "middle",
        t.visible = !0,
        t.y = 2,
        t
    },
    i.imgStone_i = function() {
        var t = new eui.Image;
        return this.imgStone = t,
        t.height = 22,
        t.width = 22,
        t
    },
    i.txtSkill_i = function() {
        var t = new eui.Label;
        return this.txtSkill = t,
        t.fontFamily = "MFShangHei",
        t.right = 24,
        t.size = 18,
        t.text = "当前附加于：技能名技技能名技",
        t.textColor = 8822740,
        t.visible = !0,
        t.y = 232.518,
        t
    },
    i.txtStoneDesc_i = function() {
        var t = new eui.Label;
        return this.txtStoneDesc = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "宝石效果描述宝石效果描述",
        t.textColor = 8822740,
        t.visible = !0,
        t.x = 24,
        t.y = 258.972,
        t
    },
    i.btnUp_i = function() {
        var t = new eui.Group;
        return this.btnUp = t,
        t.right = 24,
        t.visible = !1,
        t.y = 293,
        t.elementsContent = [this._Image4_i(), this._Group8_i()],
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.bottom = 0,
        t.left = 0,
        t.right = 0,
        t.source = "new_mark_tips_2021_11_aaa_png",
        t.top = 0,
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Group8_i = function() {
        var t = new eui.Group;
        return t.x = 0,
        t.y = 2,
        t.layout = this._HorizontalLayout9_i(),
        t.elementsContent = [this._Label7_i(), this._Image5_i(), this.txtCost_i()],
        t
    },
    i._HorizontalLayout9_i = function() {
        var t = new eui.HorizontalLayout;
        return t.gap = 5,
        t.verticalAlign = "middle",
        t
    },
    i._Label7_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = " 升级",
        t.textColor = 11301415,
        t.x = 0,
        t.y = 1.12,
        t
    },
    i._Image5_i = function() {
        var t = new eui.Image;
        return t.height = 20,
        t.source = "mark_lvlup_icon_png",
        t.width = 20,
        t.x = 35.89,
        t.y = 0,
        t
    },
    i.txtCost_i = function() {
        var t = new eui.Label;
        return this.txtCost = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "x0000000 ",
        t.textColor = 11301415,
        t.x = 10,
        t.y = 11.120000000000001,
        t
    },
    i.btnPutOn_i = function() {
        var t = new eui.Group;
        return this.btnPutOn = t,
        t.visible = !1,
        t.x = 24,
        t.y = 293,
        t.elementsContent = [this._Rect1_i(), this._Label8_i()],
        t
    },
    i._Rect1_i = function() {
        var t = new eui.Rect;
        return t.fillColor = 4150416,
        t.height = 23,
        t.width = 90,
        t
    },
    i._Label8_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.horizontalCenter = 0,
        t.size = 18,
        t.text = "装 备",
        t.textColor = 15594495,
        t.verticalCenter = 0,
        t
    },
    i.btnTakeOff_i = function() {
        var t = new eui.Group;
        return this.btnTakeOff = t,
        t.visible = !1,
        t.x = 24,
        t.y = 293,
        t.elementsContent = [this._Rect2_i(), this._Label9_i()],
        t
    },
    i._Rect2_i = function() {
        var t = new eui.Rect;
        return t.fillColor = 4150416,
        t.height = 23,
        t.width = 90,
        t
    },
    i._Label9_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.horizontalCenter = 0,
        t.size = 18,
        t.text = "卸 下",
        t.textColor = 15594495,
        t.verticalCenter = 0,
        t
    },
    i.btnMix_i = function() {
        var t = new eui.Group;
        return this.btnMix = t,
        t.x = 130,
        t.y = 293,
        t.elementsContent = [this._Rect3_i(), this._Label10_i()],
        t
    },
    i._Rect3_i = function() {
        var t = new eui.Rect;
        return t.fillColor = 4150416,
        t.height = 23,
        t.width = 90,
        t
    },
    i._Label10_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.horizontalCenter = 0,
        t.size = 18,
        t.text = "镶嵌宝石",
        t.textColor = 15594495,
        t.verticalCenter = 0,
        t
    },
    i.imgMax_i = function() {
        var t = new eui.Group;
        return this.imgMax = t,
        t.right = 24,
        t.visible = !1,
        t.y = 293,
        t.elementsContent = [this._Image6_i(), this._Label11_i()],
        t
    },
    i._Image6_i = function() {
        var t = new eui.Image;
        return t.scaleX = .5,
        t.scaleY = .5,
        t.source = "btnBG_png",
        t
    },
    i._Label11_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.horizontalCenter = 0,
        t.size = 18,
        t.text = "已满级",
        t.textColor = 8822740,
        t.verticalCenter = 0,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/TitlePopViewSkin.exml"] = window.TitlePopViewSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["txtTitle", "txtName", "txtAchieve", "txtNoEff", "txtEff", "groupEff"],
        this.height = 224,
        this.width = 480,
        this.elementsContent = [this._Image1_i(), this._Image2_i(), this._Image3_i(), this.txtTitle_i(), this.txtName_i(), this._Label1_i(), this.txtAchieve_i(), this._Image4_i(), this.txtNoEff_i(), this.groupEff_i()]
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
    i.txtTitle_i = function() {
        var t = new eui.Label;
        return this.txtTitle = t,
        t.fontFamily = "MFShangHei",
        t.size = 20,
        t.textColor = 12900094,
        t.x = 24,
        t.y = 10,
        t
    },
    i.txtName_i = function() {
        var t = new eui.Label;
        return this.txtName = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.textColor = 16580432,
        t.x = 24,
        t.y = 50,
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "对应成就：",
        t.textColor = 6154074,
        t.x = 24,
        t.y = 78,
        t
    },
    i.txtAchieve_i = function() {
        var t = new eui.Label;
        return this.txtAchieve = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.textColor = 8822740,
        t.width = 370,
        t.x = 56,
        t.y = 101,
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.height = 2,
        t.right = 24,
        t.source = "help_mulit_pop_line_yc_1_png",
        t.width = 432,
        t.y = 126,
        t
    },
    i.txtNoEff_i = function() {
        var t = new eui.Label;
        return this.txtNoEff = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = 0,
        t.size = 16,
        t.text = "纪念称号无加成",
        t.textColor = 6154074,
        t.visible = !0,
        t.y = 143,
        t
    },
    i.groupEff_i = function() {
        var t = new eui.Group;
        return this.groupEff = t,
        t.x = 24,
        t.y = 143,
        t.elementsContent = [this._Label2_i(), this.txtEff_i()],
        t
    },
    i._Label2_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "称号效果：",
        t.textColor = 6154074,
        t.x = 0,
        t.y = 0,
        t
    },
    i.txtEff_i = function() {
        var t = new eui.Label;
        return this.txtEff = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.textColor = 8822740,
        t.width = 370,
        t.x = 32,
        t.y = 28,
        t
    },
    e
} (eui.Skin);