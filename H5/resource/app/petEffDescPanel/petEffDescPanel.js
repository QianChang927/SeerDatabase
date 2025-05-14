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
petEffDescPanel; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e._currentIdx = 1,
            e._pageHeight = 0,
            e.skinName = PetEffBagDescPanelSkin,
            e
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this)
        },
        e.prototype._parseData = function() {
            for (var t, e = this._data,
            i = 0; i < e.effectList.length; i++) {
                var n = e.effectList[i],
                r = n.args,
                o = EffectIconControl.getIconId(e.id, n.effectID, r),
                s = EffectIconControl.getIconId(e.id, n.effectID);
                o > 0 ? (t = !0, this._config = EffectIconControl.getConfig(e.id, n.effectID, r)) : s > 0 && (t = !0, this._config = EffectIconControl.getConfig(e.id, n.effectID))
            }
            if (!t) {
                var _ = EffectIconControl.getIconId(e.id);
                _ > 0 && (t = !0, this._config = EffectIconControl.getConfig(e.id))
            }
            this.updateNow(),
            !this._config.to || FightManager.isFighting ? (this.grp_strong.visible = !1, this.width = this.bg_now.width, this.height = this.bg_now.height) : (this.grp_strong.visible = !0, this.updateStrong(), this.width = 606)
        },
        e.prototype.updateNow = function() {
            this._config.from ? this.icon_now.source = "pet_eff_desc_panel_icon_strong_png": this.icon_now.source = "pet_eff_desc_panel_icon_now_png";
            var t = EffectDesManager.transferDesc(this._config),
            e = t[0],
            i = t[1],
            n = (new egret.HtmlTextParser).parse(e);
            "string" == typeof n ? this.txt_nowIntro.text = n: this.txt_nowIntro.textFlow = n,
            i && i.length ? (this._scrNow.visible = this.line_0.visible = !0, this.bg_now.height = 483, this.txt_nowDes.textFlow = (new egret.HtmlTextParser).parse(EffectDesManager.transferDesArr(i))) : (this._scrNow.visible = this.line_0.visible = !1, this.bg_now.height = 327),
            this.grp_nowTag.removeChildren();
            var r = this._config.kind;
            if (null != r) {
                var o = r.toString().split(" ").map(Number),
                s = 0;
                for (var _ in o) {
                    var a = RES.getRes("pet_eff_label_" + (o[_] + 1) + "_png"),
                    h = new egret.Bitmap(a);
                    h.x = s,
                    h.y = 0,
                    s += h.width,
                    this.grp_nowTag.addChild(h)
                }
            }
        },
        e.prototype.updateStrong = function() {
            var t = EffectIconControl.getConfigById(this._config.to),
            e = EffectDesManager.transferDesc(t),
            i = e[0],
            n = e[1],
            r = (new egret.HtmlTextParser).parse(i);
            "string" == typeof r ? this.txt_strongIntro.text = r: this.txt_strongIntro.textFlow = r,
            t.come ? (this._pageHeight = 76, this.grp_come.visible = !0, this.txt_act.text = t.come, this.btnGo.visible = t.ison, this.flag_end.visible = !t.ison) : (this._pageHeight = 0, this.grp_come.visible = !1),
            n && n.length ? (this._scrStrong.visible = this.line_1.visible = !0, this.bg_strong.height = 483 + this._pageHeight, this.grp_come.y = 483, this.txt_strongDes.textFlow = (new egret.HtmlTextParser).parse(EffectDesManager.transferDesArr(n))) : (this._scrStrong.visible = this.line_1.visible = !1, this.bg_strong.height = 327 + this._pageHeight, this.grp_come.y = 327),
            this.height = Math.max(this.bg_now.height, this.bg_strong.height),
            this.grp_strongTag.removeChildren();
            var o = t.kind;
            if (null != o) {
                var s = o.toString().split(" ").map(Number),
                _ = 0;
                for (var a in s) {
                    var h = RES.getRes("pet_eff_label_" + (s[a] + 1) + "_png"),
                    g = new egret.Bitmap(h);
                    g.x = _,
                    g.y = 0,
                    _ += g.width,
                    this.grp_strongTag.addChild(g)
                }
            }
        },
        e.prototype.initEvents = function() {
            ImageButtonUtil.add(this.btnGo,
            function() {
                Alarm.show("暂未开放")
            },
            this)
        },
        e.prototype.removeEvents = function() {
            ImageButtonUtil.removeAll(this)
        },
        e.prototype.clickMaskHandler = function() {
            this.dispatchEventWith("event_close_panel")
        },
        e.prototype.destroy = function() {
            t.prototype.destroy.call(this)
        },
        e
    } (PopView);
    t.BagView = e,
    __reflect(e.prototype, "petEffDescPanel.BagView")
} (petEffDescPanel || (petEffDescPanel = {}));
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
petEffDescPanel; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e._currentIdx = 1,
            e._pageHeight = 0,
            e.skinName = PetEffDescPanelSkin,
            e
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this)
        },
        e.prototype._parseData = function() {
            if ("number" == typeof this._data) this._data = EffectIconControl.getAllEffctByPetId(this._data).slice(0, 1);
            else if (this._data instanceof PetInfo) {
                for (var t, e = this._data,
                i = 0; i < e.effectList.length; i++) {
                    var n = e.effectList[i],
                    r = n.args,
                    o = EffectIconControl.getIconId(e.id, n.effectID, r),
                    s = EffectIconControl.getIconId(e.id, n.effectID);
                    o > 0 ? (t = !0, this._data = EffectIconControl.getConfig(e.id, n.effectID, r)) : s > 0 && (t = !0, this._data = EffectIconControl.getConfig(e.id, n.effectID))
                }
                if (!t) {
                    var _ = EffectIconControl.getIconId(e.id);
                    _ > 0 && (t = !0, this._data = EffectIconControl.getConfig(e.id))
                }
                this._data = [this._data]
            }
            this.updateNow(),
            1 == this._data.length ? (this.grp_strong.visible = !1, this.width = this.bg_now.width, this.height = this.bg_now.height) : (this.grp_strong.visible = !0, this._data.length > 2 ? (this.grp_page.visible = !0, this._pageHeight = 44) : (this.grp_page.visible = !1, this._pageHeight = 0), this.updateStrong(), this.width = 606, this.height = Math.max(this.bg_now.height, this.bg_strong.height))
        },
        e.prototype.updateNow = function() {
            var t = EffectDesManager.transferDesc(this._data[0]),
            e = t[0],
            i = t[1],
            n = (new egret.HtmlTextParser).parse(e);
            "string" == typeof n ? this.txt_nowIntro.text = n: this.txt_nowIntro.textFlow = n,
            i && i.length ? (this._scrNow.visible = this.line_0.visible = !0, this.bg_now.height = 456, this.txt_nowDes.textFlow = (new egret.HtmlTextParser).parse(EffectDesManager.transferDesArr(i))) : (this._scrNow.visible = this.line_0.visible = !1, this.bg_now.height = 296),
            this.grp_nowTag.removeChildren();
            var r = this._data[0].kind;
            if (null != r) {
                var o = r.toString().split(" ").map(Number),
                s = 0;
                for (var _ in o) {
                    var a = RES.getRes("pet_eff_label_" + (o[_] + 1) + "_png"),
                    h = new egret.Bitmap(a);
                    h.x = s,
                    h.y = 0,
                    s += h.width,
                    this.grp_nowTag.addChild(h)
                }
            }
        },
        e.prototype.updateStrong = function() {
            var t = this._data[this._currentIdx],
            e = EffectDesManager.transferDesc(t),
            i = e[0],
            n = e[1],
            r = (new egret.HtmlTextParser).parse(i);
            "string" == typeof r ? this.txt_strongIntro.text = r: this.txt_strongIntro.textFlow = r,
            n && n.length ? (this._scrStrong.visible = this.line_1.visible = !0, this.bg_strong.height = 456 + this._pageHeight, this.grp_page.y = 459, this.txt_strongDes.textFlow = (new egret.HtmlTextParser).parse(EffectDesManager.transferDesArr(n))) : (this._scrStrong.visible = this.line_1.visible = !1, this.bg_strong.height = 296 + this._pageHeight, this.grp_page.y = 255),
            this.txt_pageNum.text = this._currentIdx + "/" + (this._data.length - 1),
            this.grp_strongTag.removeChildren();
            var o = t.kind;
            if (null != o) {
                var s = o.toString().split(" ").map(Number),
                _ = 0;
                for (var a in s) {
                    var h = RES.getRes("pet_eff_label_" + (s[a] + 1) + "_png"),
                    g = new egret.Bitmap(h);
                    g.x = _,
                    g.y = 0,
                    _ += g.width,
                    this.grp_strongTag.addChild(g)
                }
            }
        },
        e.prototype.initEvents = function() {
            var t = this;
            ImageButtonUtil.add(this.btnLastPage,
            function() {
                t._currentIdx > 1 && (t._currentIdx--, t.updateStrong())
            },
            this),
            ImageButtonUtil.add(this.btnNextPage,
            function() {
                t._currentIdx < t._data.length - 1 && (t._currentIdx++, t.updateStrong())
            },
            this)
        },
        e.prototype.removeEvents = function() {
            ImageButtonUtil.removeAll(this)
        },
        e.prototype.clickMaskHandler = function() {
            this.dispatchEventWith("event_close_panel")
        },
        e.prototype.destroy = function() {
            t.prototype.destroy.call(this)
        },
        e
    } (PopView);
    t.NewView = e,
    __reflect(e.prototype, "petEffDescPanel.NewView")
} (petEffDescPanel || (petEffDescPanel = {}));
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
petEffDescPanel; !
function(t) {
    var e = function(t) {
        function e(e) {
            var i = t.call(this) || this;
            if (i.skinName = "NewEffTips202111Skin", i.arrEff = [], "number" == typeof e) i.arrEff = EffectIconControl.getAllEffctByPetId(e).slice(0, 1);
            else if (Array.isArray(e)) i.arrEff = e;
            else if (e instanceof PetInfo) {
                var n = !1;
                if (e.effectList.forEach(function(t) {
                    var r = EffectIconControl.getIconId(e.id, t.effectID, t.args),
                    o = EffectIconControl.getIconId(e.id, t.effectID);
                    if (r > 0) {
                        n = !0;
                        var s = EffectIconControl.getConfig(e.id, t.effectID, t.args);
                        i.arrEff.push(s)
                    } else if (o > 0) {
                        n = !0;
                        var s = EffectIconControl.getConfig(e.id, t.effectID);
                        i.arrEff.push(s)
                    }
                },
                i), !n) {
                    var r = EffectIconControl.getIconId(e.id);
                    if (r > 0) {
                        var o = EffectIconControl.getConfig(e.id);
                        i.arrEff.push(o)
                    }
                }
                if (i.arrEff[0].to && !FightManager.isFighting) {
                    var o = EffectIconControl.getConfigById(i.arrEff[0].to);
                    o.isShowCome = !0,
                    i.arrEff.push(o)
                }
            } else null != e.tips ? i.arrEff.push(e) : (console.error("wrong param!"), console.error(e));
            return i
        }
        return __extends(e, t),
        e.prototype.clickMaskHandler = function() {
            this.dispatchEventWith("event_close_panel")
        },
        e.prototype.childrenCreated = function() {
            var t = this;
            this.curIndex = 0,
            1 == this.arrEff.length ? (this.groupMult.visible = !1, this.scroller.y -= this.groupMult.height, this.scroller.height += this.groupMult.height) : (this.groupMult.visible = !0, 0 != this.arrEff.lastIndexOf(this.arrEff[0]) && (this.curIndex = this.arrEff.lastIndexOf(this.arrEff[0]) - 1, this.arrEff.shift())),
            this.update(),
            ImageButtonUtil.add(this.btnChangeType,
            function() {
                t.curIndex++,
                t.curIndex >= t.arrEff.length && (t.curIndex = 0),
                t.scroller.viewport.scrollV = 0,
                t.imgScrollBar.y = 39,
                t.update()
            },
            this),
            this.btnCome.visible = !1
        },
        e.prototype.update = function() {
            var t = this,
            e = this.arrEff[this.curIndex];
            this.curIndex > 0 ? this.imgIcon.source = "pet_eff_desc_panel_icon_strong_png": this.imgIcon.source = "pet_eff_desc_panel_icon_now_png",
            this.groupTag.removeChildren();
            var i = e.kind;
            if (null != i) {
                var n = i.toString().split(" ").map(Number);
                for (var r in n) {
                    var o = new eui.Image("tag" + (n[r] + 1) + "_png");
                    this.groupTag.addChild(o)
                }
            }
            this.groupMult.visible && (0 == this.curIndex ? this.txtType.text = "基础特性": 1 == this.curIndex ? this.txtType.text = "特性升级Ⅰ": 2 == this.curIndex ? this.txtType.text = "特性升级Ⅱ": 3 == this.curIndex ? this.txtType.text = "特性升级Ⅲ": 4 == this.curIndex ? this.txtType.text = "特性升级Ⅳ": 5 == this.curIndex && (this.txtType.text = "特性升级Ⅴ"));
            var s = EffectDesManager.transferDesc(e),
            _ = s[0],
            a = s[1],
            h = (new egret.HtmlTextParser).parse(_);
            if ("string" == typeof h ? this.txtIntro.text = h: this.txtIntro.textFlow = h, a && a.length ? (this.imgLine.visible = this.txtDescribe.visible = !0, this.txtIntro.parent.addChild(this.imgLine), this.txtIntro.parent.addChild(this.txtDescribe), this.txtDescribe.textFlow = (new egret.HtmlTextParser).parse(EffectDesManager.transferDesArr(a))) : (this.imgLine.visible = this.txtDescribe.visible = !1, 3 == this.txtIntro.parent.numChildren && (this.txtIntro.parent.removeChild(this.imgLine), this.txtIntro.parent.removeChild(this.txtDescribe))), e.come) {
                this.groupCome.visible = !0,
                this.txtCome.text = e.come;
                var g = !!e.ison;
                this.txtBtnCome.text = g ? "前 往": "已结束",
                DisplayUtil.setEnabled(this.btnCome, g, !g),
                this.btnCome.visible = !GameInfo.isChecking && !FightManager._isFighting,
                PetAdvanceXMLInfo.getIncludeAdvance(this.arrEff[0].petId) && (this.btnCome.visible = !1)
            } else this.groupCome.visible = !1;
            var c = egret.setTimeout(function() {
                egret.clearTimeout(c);
                var e = t.txtIntro.height;
                t.imgLine.visible && (e += 32 + t.txtDescribe.height),
                t.imgScrollBar.visible = t.imgScrollBarBG.visible = e > t.scroller.height,
                t.imgScrollBar.visible && (t.scroller.addEventListener(egret.Event.CHANGE, t.onMove, t), t.imgScrollBar.height = t.imgScrollBarBG.height * t.scroller.height / e)
            },
            this, 50)
        },
        e.prototype.destroy = function() {
            ImageButtonUtil.removeAll(this),
            this.scroller.removeEventListener(egret.Event.CHANGE, this.onMove, this),
            t.prototype.destroy.call(this)
        },
        e.prototype.onMove = function(t) {
            var e = this.scroller.viewport.scrollV,
            i = this.txtIntro.height;
            if (this.imgLine.visible && (i += 32 + this.txtDescribe.height), 0 > e) this.imgScrollBar.height = this.imgScrollBarBG.height * this.scroller.height / (i - e),
            this.imgScrollBar.y = 39;
            else if (e > i - this.scroller.height) this.imgScrollBar.height = this.imgScrollBarBG.height * this.scroller.height / (e + this.scroller.height),
            this.imgScrollBar.y = 39 + this.imgScrollBarBG.height - this.imgScrollBar.height;
            else {
                this.imgScrollBar.height = this.imgScrollBarBG.height * this.scroller.height / i;
                var n = e / (i - this.scroller.height);
                this.imgScrollBar.y = 39 + (this.imgScrollBarBG.height - this.imgScrollBar.height) * n
            }
        },
        e
    } (PopView);
    t.NewView2021_11 = e,
    __reflect(e.prototype, "petEffDescPanel.NewView2021_11")
} (petEffDescPanel || (petEffDescPanel = {}));
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
petEffDescPanel; !
function(t) {
    var e = function(e) {
        function i(i) {
            var n = e.call(this, i) || this,
            r = null,
            o = i;
            return "object" == typeof i && i.isFight && (r = n.data.parentCon, o = i.obj),
            n._view = new t.NewView2021_11(o),
            PopViewManager.getInstance().openView(n._view, n.getPopStyle(), null, r),
            n._view.addEventListener("event_close_panel", n._onCloseAll, n),
            n
        }
        return __extends(i, e),
        i.prototype.getPopStyle = function() {
            var t = PopViewManager.createDefaultStyleObject();
            return t.caller = this._view,
            t.maskShapeStyle.maskAlpha = 0,
            t.clickMaskHandler = this._view.clickMaskHandler,
            t
        },
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this)
        },
        i.prototype._onCloseAll = function() {
            this._view.hide(),
            this.onClose()
        },
        i.prototype.destroy = function() {
            this._view.removeEventListener("event_close_panel", this._onCloseAll, this),
            this._view && this._view.hide(),
            this._view = null,
            e.prototype.destroy.call(this)
        },
        i
    } (BaseModule);
    t.PetEffDescPanel = e,
    __reflect(e.prototype, "petEffDescPanel.PetEffDescPanel");
    var i = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e._currentIdx = 0,
            e.skinName = OldPetEffDescPanelSkin,
            e
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this),
            this.icon.source = ClientConfig.geteffecticon(0)
        },
        e.prototype._parseData = function() {
            if (this._data instanceof PetInfo) {
                for (var t, e = this._data,
                i = 0; i < e.effectList.length; i++) {
                    var n = e.effectList[i],
                    r = n.args,
                    o = EffectIconControl.getIconId(e.id, n.effectID, r),
                    s = EffectIconControl.getIconId(e.id, n.effectID);
                    o > 0 ? (t = !0, this._desc = EffectIconControl.getTips(e.id, n.effectID, r)) : s > 0 && (t = !0, this._desc = EffectIconControl.getTips(e.id, n.effectID))
                }
                if (!t) {
                    var _ = EffectIconControl.getIconId(e.id);
                    _ > 0 && (t = !0, this._desc = EffectIconControl.getTips(e.id))
                }
            } else if ("number" == typeof this._data) {
                var a = EffectIconControl.getAllEffctByPetId(this._data);
                this._desc = a[0].tips
            } else Array.isArray(this._data) && (1 === this._data.length ? this._desc = this._data[0].tips: (this._xmlList = this._data, this._desc = this._xmlList[this._currentIdx].tips))
        },
        e.prototype._upDateView = function() {
            var t = StringUtil.petEffectDesc(this._desc);
            "string" == typeof t ? this.Txt.text = t: this.Txt.textFlow = t,
            this.arrow_left.visible = this._xmlList && this._currentIdx > 0,
            this.arrow_right.visible = this._xmlList && this._currentIdx < this._xmlList.length - 1,
            this.txt_page.visible = void 0 != this._xmlList || null != this._xmlList,
            this.txt_page.visible && (this.txt_page.text = this._currentIdx + 1 + "/" + this._xmlList.length)
        },
        e.prototype.initEvents = function() {
            var t = this;
            ImageButtonUtil.add(this.imgBtn_close,
            function() {
                t.clickMaskHandler()
            },
            this),
            ImageButtonUtil.add(this.arrow_left,
            function() {
                t._currentIdx > 0 && (--t._currentIdx, t._desc = t._xmlList[t._currentIdx].tips, t._upDateView())
            },
            this),
            ImageButtonUtil.add(this.arrow_right,
            function() {
                t._currentIdx < t._xmlList.length - 1 && (++t._currentIdx, t._desc = t._xmlList[t._currentIdx].tips, t._upDateView())
            },
            this)
        },
        e.prototype.removeEvents = function() {
            ImageButtonUtil.removeAll(this)
        },
        e.prototype.clickMaskHandler = function() {
            this.dispatchEventWith("event_close_panel")
        },
        e.prototype.destroy = function() {
            t.prototype.destroy.call(this)
        },
        e
    } (PopView);
    t.View = i,
    __reflect(i.prototype, "petEffDescPanel.View")
} (petEffDescPanel || (petEffDescPanel = {}));
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
generateEUI.paths["resource/eui_skins/NewEffTips202111Skin.exml"] = window.NewEffTips202111Skin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["imgScrollBarBG", "imgScrollBar", "imgIcon", "txtIntro", "imgLine", "txtDescribe", "scroller", "txtChangeType", "btnChangeType", "txtType", "groupMult", "groupTag", "txtBtnCome", "btnCome", "txtCome", "groupCome"],
        this.height = 320,
        this.width = 480,
        this.elementsContent = [this._Image1_i(), this._Image2_i(), this.imgScrollBarBG_i(), this.imgScrollBar_i(), this.imgIcon_i(), this.scroller_i(), this.groupMult_i(), this.groupTag_i(), this._Image5_i(), this.groupCome_i()]
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
        return t.height = 34,
        t.left = 5,
        t.right = 5,
        t.source = "new_tips_2021_11_img5_png",
        t.visible = !0,
        t.y = 5,
        t
    },
    i.imgScrollBarBG_i = function() {
        var t = new eui.Image;
        return this.imgScrollBarBG = t,
        t.bottom = 5,
        t.source = "new_eff_tips_2021_11_imgscrollbarbg_png",
        t.top = 39,
        t.x = 472,
        t
    },
    i.imgScrollBar_i = function() {
        var t = new eui.Image;
        return this.imgScrollBar = t,
        t.source = "new_eff_tips_2021_11_imgscrollbar_png",
        t.x = 472,
        t.y = 39,
        t
    },
    i.imgIcon_i = function() {
        var t = new eui.Image;
        return this.imgIcon = t,
        t.height = 25,
        t.width = 23,
        t.x = 21.759,
        t.y = 9.572,
        t
    },
    i.scroller_i = function() {
        var t = new eui.Scroller;
        return this.scroller = t,
        t.height = 175,
        t.left = 24,
        t.right = 24,
        t.y = 89,
        t.viewport = this._Group1_i(),
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.layout = this._VerticalLayout1_i(),
        t.elementsContent = [this.txtIntro_i(), this.imgLine_i(), this.txtDescribe_i()],
        t
    },
    i._VerticalLayout1_i = function() {
        var t = new eui.VerticalLayout;
        return t.gap = 15,
        t.horizontalAlign = "justify",
        t
    },
    i.txtIntro_i = function() {
        var t = new eui.Label;
        return this.txtIntro = t,
        t.fontFamily = "MFShangHei",
        t.lineSpacing = 6,
        t.scaleX = 1,
        t.scaleY = 1,
        t.size = 18,
        t.textColor = 8822740,
        t
    },
    i.imgLine_i = function() {
        var t = new eui.Image;
        return this.imgLine = t,
        t.left = 0,
        t.right = 0,
        t.scale9Grid = new egret.Rectangle(122, 0, 25, 1),
        t.scaleY = 2,
        t.source = "new_mark_tips_2021_11_img1_png",
        t
    },
    i.txtDescribe_i = function() {
        var t = new eui.Label;
        return this.txtDescribe = t,
        t.fontFamily = "MFShangHei",
        t.lineSpacing = 6,
        t.scaleX = 1,
        t.scaleY = 1,
        t.size = 18,
        t.textColor = 8822740,
        t
    },
    i.groupMult_i = function() {
        var t = new eui.Group;
        return this.groupMult = t,
        t.height = 41,
        t.left = 24,
        t.right = 24,
        t.y = 48,
        t.elementsContent = [this.btnChangeType_i(), this.txtType_i(), this._Image4_i()],
        t
    },
    i.btnChangeType_i = function() {
        var t = new eui.Group;
        return this.btnChangeType = t,
        t.right = 0,
        t.elementsContent = [this._Image3_i(), this.txtChangeType_i()],
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "new_eff_tips_2021_11_imgchangetype_png",
        t
    },
    i.txtChangeType_i = function() {
        var t = new eui.Label;
        return this.txtChangeType = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = 0,
        t.size = 16,
        t.text = "切换下一个",
        t.textAlign = "center",
        t.textColor = 15528703,
        t.verticalAlign = "middle",
        t.verticalCenter = 0,
        t
    },
    i.txtType_i = function() {
        var t = new eui.Label;
        return this.txtType = t,
        t.fontFamily = "MFShangHei",
        t.size = 20,
        t.text = "基础特性",
        t.textAlign = "left",
        t.textColor = 6154074,
        t.verticalAlign = "middle",
        t.y = 2.428,
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.left = 0,
        t.right = -5,
        t.source = "new_eff_tips_2021_11_imgline_png",
        t.y = 31.105,
        t
    },
    i.groupTag_i = function() {
        var t = new eui.Group;
        return this.groupTag = t,
        t.height = 26.345,
        t.x = 56.709,
        t.y = 9.057,
        t.layout = this._HorizontalLayout1_i(),
        t
    },
    i._HorizontalLayout1_i = function() {
        var t = new eui.HorizontalLayout;
        return t.horizontalAlign = "left",
        t.verticalAlign = "middle",
        t
    },
    i._Image5_i = function() {
        var t = new eui.Image;
        return t.height = 37.745,
        t.source = "new_tips_2021_11_img4_png",
        t.x = 3.804,
        t.y = 3.171,
        t
    },
    i.groupCome_i = function() {
        var t = new eui.Group;
        return this.groupCome = t,
        t.left = 24,
        t.right = 24,
        t.y = 282,
        t.elementsContent = [this.btnCome_i(), this.txtCome_i()],
        t
    },
    i.btnCome_i = function() {
        var t = new eui.Group;
        return this.btnCome = t,
        t.right = 0,
        t.y = 0,
        t.elementsContent = [this._Image6_i(), this.txtBtnCome_i()],
        t
    },
    i._Image6_i = function() {
        var t = new eui.Image;
        return t.source = "new_eff_tips_2021_11_imgchangetype_png",
        t.width = 80,
        t.x = 0,
        t
    },
    i.txtBtnCome_i = function() {
        var t = new eui.Label;
        return this.txtBtnCome = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = 0,
        t.size = 16,
        t.text = "前 往",
        t.textAlign = "center",
        t.textColor = 15528703,
        t.verticalAlign = "middle",
        t.verticalCenter = 0,
        t
    },
    i.txtCome_i = function() {
        var t = new eui.Label;
        return this.txtCome = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.textAlign = "right",
        t.textColor = 16580432,
        t.visible = !0,
        t.y = 2.62,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/OldPetEffDescPanelSkin.exml"] = window.OldPetEffDescPanelSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "imgBtn_close", "icon", "Txt", "arrow_left", "arrow_right", "txt_page"],
        this.height = 378,
        this.width = 702,
        this.elementsContent = [this.bg_i(), this._Image4_i(), this.imgBtn_close_i(), this._Image5_i(), this.icon_i(), this._Scroller1_i(), this.arrow_left_i(), this.arrow_right_i(), this.txt_page_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.bg_i = function() {
        var t = new eui.Group;
        return this.bg = t,
        t.x = 36,
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
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.source = "pet_eff_desc_panel_title_png",
        t.x = 84,
        t.y = 18,
        t
    },
    i.imgBtn_close_i = function() {
        var t = new eui.Image;
        return this.imgBtn_close = t,
        t.source = "common_close_1_png",
        t.x = 613,
        t.y = -10,
        t
    },
    i._Image5_i = function() {
        var t = new eui.Image;
        return t.height = 74,
        t.source = "pet_eff_desc_panel_icon_bg_png",
        t.width = 122,
        t.x = 291,
        t.y = 63,
        t
    },
    i.icon_i = function() {
        var t = new eui.Image;
        return this.icon = t,
        t.height = 36,
        t.source = "",
        t.width = 38,
        t.x = 333,
        t.y = 83,
        t
    },
    i._Scroller1_i = function() {
        var t = new eui.Scroller;
        return t.height = 188,
        t.width = 516,
        t.x = 90,
        t.y = 149,
        t.viewport = this._Group1_i(),
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.elementsContent = [this.Txt_i()],
        t
    },
    i.Txt_i = function() {
        var t = new eui.Label;
        return this.Txt = t,
        t.lineSpacing = 11,
        t.scaleX = 1,
        t.scaleY = 1,
        t.size = 18,
        t.text = "专属特性文本说明，此部分可以下滑。专属特性文本说明，此部分可以下滑。专属特性文本说明，此部分可以下滑。专属特性文本说明，此部分可以下滑。专属特性文本说明，此部分可以下滑。专属特性文本说明，此部分可以下滑。专属特性文本说明，此部分可以下滑。专属特性文本说明，此部分可以下滑。专属特性文本说明，此部分可以下滑。专属特性文本说明，此部分可以下滑。专属特性文本说明，此部分可以下滑。专属特性文本说明，此部分可以下滑。专属特性文本说明，此部分可以下滑。专属特性文本说明，此部分可以下滑。专属特性文本说明，此部分可以下滑。专属特性文本说明，此部分可以下滑。专属特性文本说明，此部分可以下滑。专属特性文本说明，此部分可以下滑。专属特性文本说明，此部分可以下滑。专属特性文本说明，此部分可以下滑。",
        t.textColor = 2500699,
        t.width = 516,
        t.x = 0,
        t.y = 0,
        t
    },
    i.arrow_left_i = function() {
        var t = new eui.Image;
        return this.arrow_left = t,
        t.source = "common_arrow_style_1_png",
        t.x = 0,
        t.y = 174,
        t
    },
    i.arrow_right_i = function() {
        var t = new eui.Image;
        return this.arrow_right = t,
        t.scaleX = -1,
        t.source = "common_arrow_style_1_png",
        t.x = 702,
        t.y = 174,
        t
    },
    i.txt_page_i = function() {
        var t = new eui.Label;
        return this.txt_page = t,
        t.size = 12,
        t.text = "Label",
        t.textAlign = "center",
        t.textColor = 0,
        t.width = 80,
        t.x = 294,
        t.y = 344,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/PetEffBagDescPanelSkin.exml"] = window.PetEffBagDescPanelSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg_strong", "line_2", "btnGo", "flag_end", "txt_act", "grp_come", "txt_strongDes", "_scrStrong", "line_1", "txt_strongIntro", "grp_strongTag", "title_strong", "grp_strong", "bg_now", "txt_nowDes", "_scrNow", "line_0", "txt_nowIntro", "grp_nowTag", "title_now", "icon_now", "grp_now"],
        this.height = 559,
        this.width = 606,
        this.elementsContent = [this.grp_strong_i(), this.grp_now_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.grp_strong_i = function() {
        var t = new eui.Group;
        return this.grp_strong = t,
        t.touchThrough = !0,
        t.x = 306,
        t.y = 0,
        t.elementsContent = [this.bg_strong_i(), this.grp_come_i(), this._scrStrong_i(), this.line_1_i(), this._Scroller1_i(), this._Image1_i(), this.grp_strongTag_i(), this.title_strong_i(), this._Image2_i()],
        t
    },
    i.bg_strong_i = function() {
        var t = new eui.Image;
        return this.bg_strong = t,
        t.height = 559,
        t.scale9Grid = new egret.Rectangle(4, 4, 4, 4),
        t.source = "pet_eff_desc_panel_bg_png",
        t.width = 300,
        t.x = 0,
        t.y = 0,
        t
    },
    i.grp_come_i = function() {
        var t = new eui.Group;
        return this.grp_come = t,
        t.height = 60,
        t.x = 18,
        t.y = 483,
        t.elementsContent = [this.line_2_i(), this.btnGo_i(), this.flag_end_i(), this.txt_act_i()],
        t
    },
    i.line_2_i = function() {
        var t = new eui.Image;
        return this.line_2 = t,
        t.height = 1,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "pet_eff_desc_panel_line_png",
        t.width = 279,
        t.x = 0,
        t.y = 0,
        t
    },
    i.btnGo_i = function() {
        var t = new eui.Image;
        return this.btnGo = t,
        t.height = 42,
        t.source = "pet_eff_bag_desc_panel_btnGo_png",
        t.width = 92,
        t.x = 172,
        t.y = 18,
        t
    },
    i.flag_end_i = function() {
        var t = new eui.Image;
        return this.flag_end = t,
        t.height = 40,
        t.source = "pet_eff_bag_desc_panel_flag_end_png",
        t.width = 90,
        t.x = 173,
        t.y = 18,
        t
    },
    i.txt_act_i = function() {
        var t = new eui.Label;
        return this.txt_act = t,
        t.lineSpacing = 8,
        t.size = 16,
        t.text = "听说最多需要十个字\n特性进行活动",
        t.textColor = 16773477,
        t.touchEnabled = !1,
        t.verticalCenter = 8,
        t.width = 144,
        t.x = 4,
        t
    },
    i._scrStrong_i = function() {
        var t = new eui.Scroller;
        return this._scrStrong = t,
        t.height = 125,
        t.width = 256,
        t.x = 21,
        t.y = 341,
        t.viewport = this._Group1_i(),
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.elementsContent = [this.txt_strongDes_i()],
        t
    },
    i.txt_strongDes_i = function() {
        var t = new eui.Label;
        return this.txt_strongDes = t,
        t.lineSpacing = 3,
        t.scaleX = 1,
        t.scaleY = 1,
        t.size = 18,
        t.text = "害怕",
        t.textColor = 4175861,
        t.touchEnabled = !1,
        t.width = 256,
        t.x = 0,
        t.y = 0,
        t
    },
    i.line_1_i = function() {
        var t = new eui.Image;
        return this.line_1 = t,
        t.height = 1,
        t.source = "pet_eff_desc_panel_line_png",
        t.width = 279,
        t.x = 18,
        t.y = 326,
        t
    },
    i._Scroller1_i = function() {
        var t = new eui.Scroller;
        return t.height = 208,
        t.width = 256,
        t.x = 21,
        t.y = 104,
        t.viewport = this._Group2_i(),
        t
    },
    i._Group2_i = function() {
        var t = new eui.Group;
        return t.elementsContent = [this.txt_strongIntro_i()],
        t
    },
    i.txt_strongIntro_i = function() {
        var t = new eui.Label;
        return this.txt_strongIntro = t,
        t.lineSpacing = 8,
        t.scaleX = 1,
        t.scaleY = 1,
        t.size = 16,
        t.text = "专属特性专属特性专属特性专属特性\n专属特性专属特性专属特性专属特性\n专属特性专属特性害怕特性专属特性\n专属特性专属特性专属特性专属特性\n专属特性麻痹特性专属特性专属特性\n专属特性专属特性专属特性专属特性",
        t.textColor = 16777215,
        t.touchEnabled = !1,
        t.width = 256,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 1,
        t.source = "pet_eff_desc_panel_line_png",
        t.width = 279,
        t.x = 18,
        t.y = 88,
        t
    },
    i.grp_strongTag_i = function() {
        var t = new eui.Group;
        return this.grp_strongTag = t,
        t.x = 20,
        t.y = 56,
        t
    },
    i.title_strong_i = function() {
        var t = new eui.Image;
        return this.title_strong = t,
        t.height = 19,
        t.source = "pet_eff_bag_desc_panel_title_strong_png",
        t.width = 98,
        t.x = 64,
        t.y = 21,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 46,
        t.source = "pet_eff_desc_panel_icon_strong_png",
        t.width = 40,
        t.x = 17,
        t.y = 8,
        t
    },
    i.grp_now_i = function() {
        var t = new eui.Group;
        return this.grp_now = t,
        t.touchThrough = !0,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this.bg_now_i(), this._scrNow_i(), this.line_0_i(), this._Scroller2_i(), this._Image3_i(), this.grp_nowTag_i(), this.title_now_i(), this.icon_now_i()],
        t
    },
    i.bg_now_i = function() {
        var t = new eui.Image;
        return this.bg_now = t,
        t.height = 483,
        t.scale9Grid = new egret.Rectangle(4, 4, 4, 4),
        t.source = "pet_eff_desc_panel_bg_png",
        t.width = 300,
        t.x = 0,
        t.y = 0,
        t
    },
    i._scrNow_i = function() {
        var t = new eui.Scroller;
        return this._scrNow = t,
        t.height = 125,
        t.width = 256,
        t.x = 21,
        t.y = 342,
        t.viewport = this._Group3_i(),
        t
    },
    i._Group3_i = function() {
        var t = new eui.Group;
        return t.x = -21,
        t.y = -271,
        t.elementsContent = [this.txt_nowDes_i()],
        t
    },
    i.txt_nowDes_i = function() {
        var t = new eui.Label;
        return this.txt_nowDes = t,
        t.lineSpacing = 3,
        t.scaleX = 1,
        t.scaleY = 1,
        t.size = 18,
        t.text = "害怕",
        t.textColor = 4175861,
        t.touchEnabled = !1,
        t.width = 256,
        t.x = 0,
        t.y = 0,
        t
    },
    i.line_0_i = function() {
        var t = new eui.Image;
        return this.line_0 = t,
        t.height = 1,
        t.source = "pet_eff_desc_panel_line_png",
        t.width = 279,
        t.x = 18,
        t.y = 327,
        t
    },
    i._Scroller2_i = function() {
        var t = new eui.Scroller;
        return t.height = 208,
        t.width = 256,
        t.x = 21,
        t.y = 104,
        t.viewport = this._Group4_i(),
        t
    },
    i._Group4_i = function() {
        var t = new eui.Group;
        return t.elementsContent = [this.txt_nowIntro_i()],
        t
    },
    i.txt_nowIntro_i = function() {
        var t = new eui.Label;
        return this.txt_nowIntro = t,
        t.lineSpacing = 8,
        t.scaleX = 1,
        t.scaleY = 1,
        t.size = 16,
        t.text = "专属特性专属特性专属特性专属特性\n专属特性专属特性专属特性专属特性\n专属特性专属特性害怕特性专属特性\n专属特性专属特性专属特性专属特性\n专属特性麻痹特性专属特性专属特性\n专属特性专属特性专属特性专属特性",
        t.textColor = 16777215,
        t.touchEnabled = !1,
        t.width = 256,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.height = 1,
        t.source = "pet_eff_desc_panel_line_png",
        t.width = 279,
        t.x = 18,
        t.y = 88,
        t
    },
    i.grp_nowTag_i = function() {
        var t = new eui.Group;
        return this.grp_nowTag = t,
        t.x = 20,
        t.y = 56,
        t
    },
    i.title_now_i = function() {
        var t = new eui.Image;
        return this.title_now = t,
        t.height = 19,
        t.source = "pet_eff_bag_desc_panel_title_now_png",
        t.width = 78,
        t.x = 64,
        t.y = 21,
        t
    },
    i.icon_now_i = function() {
        var t = new eui.Image;
        return this.icon_now = t,
        t.height = 46,
        t.source = "pet_eff_desc_panel_icon_now_png",
        t.width = 40,
        t.x = 17,
        t.y = 8,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/PetEffDescPanelSkin.exml"] = window.PetEffDescPanelSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg_strong", "txt_pageNum", "btnLastPage", "btnNextPage", "grp_page", "txt_strongDes", "_scrStrong", "line_1", "txt_strongIntro", "grp_strongTag", "icon_strong", "grp_strong", "bg_now", "txt_nowDes", "_scrNow", "line_0", "txt_nowIntro", "grp_nowTag", "icon_now", "grp_now"],
        this.height = 500,
        this.width = 606,
        this.elementsContent = [this.grp_strong_i(), this.grp_now_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.grp_strong_i = function() {
        var t = new eui.Group;
        return this.grp_strong = t,
        t.touchThrough = !0,
        t.x = 306,
        t.y = 0,
        t.elementsContent = [this.bg_strong_i(), this.grp_page_i(), this._scrStrong_i(), this.line_1_i(), this._Scroller1_i(), this._Image1_i(), this.grp_strongTag_i(), this.icon_strong_i()],
        t
    },
    i.bg_strong_i = function() {
        var t = new eui.Image;
        return this.bg_strong = t,
        t.height = 500,
        t.scale9Grid = new egret.Rectangle(4, 4, 4, 4),
        t.source = "pet_eff_desc_panel_bg_png",
        t.width = 300,
        t.x = 0,
        t.y = 0,
        t
    },
    i.grp_page_i = function() {
        var t = new eui.Group;
        return this.grp_page = t,
        t.x = 96,
        t.y = 459,
        t.elementsContent = [this.txt_pageNum_i(), this.btnLastPage_i(), this.btnNextPage_i()],
        t
    },
    i.txt_pageNum_i = function() {
        var t = new eui.Label;
        return this.txt_pageNum = t,
        t.lineSpacing = 3,
        t.size = 18,
        t.text = "2/5",
        t.textColor = 16317183,
        t.touchEnabled = !1,
        t.x = 39,
        t.y = 6,
        t
    },
    i.btnLastPage_i = function() {
        var t = new eui.Image;
        return this.btnLastPage = t,
        t.height = 27,
        t.source = "pet_eff_desc_panel_btnLastPage_png",
        t.width = 18,
        t.x = 0,
        t.y = 0,
        t
    },
    i.btnNextPage_i = function() {
        var t = new eui.Image;
        return this.btnNextPage = t,
        t.height = 27,
        t.source = "pet_eff_desc_panel_btnNextPage_png",
        t.width = 18,
        t.x = 87,
        t.y = 0,
        t
    },
    i._scrStrong_i = function() {
        var t = new eui.Scroller;
        return this._scrStrong = t,
        t.height = 125,
        t.width = 256,
        t.x = 21,
        t.y = 311,
        t.viewport = this._Group1_i(),
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.elementsContent = [this.txt_strongDes_i()],
        t
    },
    i.txt_strongDes_i = function() {
        var t = new eui.Label;
        return this.txt_strongDes = t,
        t.lineSpacing = 8,
        t.scaleX = 1,
        t.scaleY = 1,
        t.size = 18,
        t.text = "害怕",
        t.textColor = 4175861,
        t.touchEnabled = !1,
        t.width = 256,
        t.x = 0,
        t.y = 0,
        t
    },
    i.line_1_i = function() {
        var t = new eui.Image;
        return this.line_1 = t,
        t.height = 1,
        t.source = "pet_eff_desc_panel_line_png",
        t.width = 279,
        t.x = 18,
        t.y = 296,
        t
    },
    i._Scroller1_i = function() {
        var t = new eui.Scroller;
        return t.height = 208,
        t.width = 256,
        t.x = 21,
        t.y = 72,
        t.viewport = this._Group2_i(),
        t
    },
    i._Group2_i = function() {
        var t = new eui.Group;
        return t.elementsContent = [this.txt_strongIntro_i()],
        t
    },
    i.txt_strongIntro_i = function() {
        var t = new eui.Label;
        return this.txt_strongIntro = t,
        t.lineSpacing = 8,
        t.scaleX = 1,
        t.scaleY = 1,
        t.size = 16,
        t.text = "专属特性专属特性专属特性专属特性\n专属特性专属特性专属特性专属特性\n专属特性专属特性害怕特性专属特性\n专属特性专属特性专属特性专属特性\n专属特性麻痹特性专属特性专属特性\n专属特性专属特性专属特性专属特性",
        t.textColor = 16777215,
        t.touchEnabled = !1,
        t.width = 256,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 1,
        t.source = "pet_eff_desc_panel_line_png",
        t.width = 279,
        t.x = 18,
        t.y = 56,
        t
    },
    i.grp_strongTag_i = function() {
        var t = new eui.Group;
        return this.grp_strongTag = t,
        t.x = 49,
        t.y = 24,
        t
    },
    i.icon_strong_i = function() {
        var t = new eui.Image;
        return this.icon_strong = t,
        t.height = 46,
        t.source = "pet_eff_desc_panel_icon_strong_png",
        t.width = 40,
        t.x = 5,
        t.y = 8,
        t
    },
    i.grp_now_i = function() {
        var t = new eui.Group;
        return this.grp_now = t,
        t.touchThrough = !0,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this.bg_now_i(), this._scrNow_i(), this.line_0_i(), this._Scroller2_i(), this._Image2_i(), this.grp_nowTag_i(), this.icon_now_i()],
        t
    },
    i.bg_now_i = function() {
        var t = new eui.Image;
        return this.bg_now = t,
        t.height = 456,
        t.scale9Grid = new egret.Rectangle(4, 4, 4, 4),
        t.source = "pet_eff_desc_panel_bg_png",
        t.width = 300,
        t.x = 0,
        t.y = 0,
        t
    },
    i._scrNow_i = function() {
        var t = new eui.Scroller;
        return this._scrNow = t,
        t.height = 125,
        t.visible = !0,
        t.width = 256,
        t.x = 21,
        t.y = 311,
        t.viewport = this._Group3_i(),
        t
    },
    i._Group3_i = function() {
        var t = new eui.Group;
        return t.elementsContent = [this.txt_nowDes_i()],
        t
    },
    i.txt_nowDes_i = function() {
        var t = new eui.Label;
        return this.txt_nowDes = t,
        t.lineSpacing = 8,
        t.scaleX = 1,
        t.scaleY = 1,
        t.size = 18,
        t.text = "害怕",
        t.textColor = 4175861,
        t.touchEnabled = !1,
        t.width = 256,
        t.x = 0,
        t.y = 0,
        t
    },
    i.line_0_i = function() {
        var t = new eui.Image;
        return this.line_0 = t,
        t.height = 1,
        t.source = "pet_eff_desc_panel_line_png",
        t.width = 279,
        t.x = 18,
        t.y = 296,
        t
    },
    i._Scroller2_i = function() {
        var t = new eui.Scroller;
        return t.height = 208,
        t.width = 256,
        t.x = 21,
        t.y = 71,
        t.viewport = this._Group4_i(),
        t
    },
    i._Group4_i = function() {
        var t = new eui.Group;
        return t.elementsContent = [this.txt_nowIntro_i()],
        t
    },
    i.txt_nowIntro_i = function() {
        var t = new eui.Label;
        return this.txt_nowIntro = t,
        t.lineSpacing = 8,
        t.scaleX = 1,
        t.scaleY = 1,
        t.size = 16,
        t.text = "专属特性专属特性专属特性专属特性\n专属特性专属特性专属特性专属特性\n专属特性专属特性害怕特性专属特性\n专属特性专属特性专属特性专属特性\n专属特性麻痹特性专属特性专属特性\n专属特性专属特性专属特性专属特性",
        t.textColor = 16777215,
        t.touchEnabled = !1,
        t.width = 256,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 1,
        t.source = "pet_eff_desc_panel_line_png",
        t.width = 279,
        t.x = 18,
        t.y = 55,
        t
    },
    i.grp_nowTag_i = function() {
        var t = new eui.Group;
        return this.grp_nowTag = t,
        t.x = 50,
        t.y = 21,
        t
    },
    i.icon_now_i = function() {
        var t = new eui.Image;
        return this.icon_now = t,
        t.height = 46,
        t.source = "pet_eff_desc_panel_icon_now_png",
        t.width = 40,
        t.x = 4,
        t.y = 8,
        t
    },
    e
} (eui.Skin);