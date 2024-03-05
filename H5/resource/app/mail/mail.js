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
        function _(e) {
            try {
                s(n.next(e))
            } catch(t) {
                a(t)
            }
        }
        function o(e) {
            try {
                s(n["throw"](e))
            } catch(t) {
                a(t)
            }
        }
        function s(e) {
            e.done ? r(e.value) : new i(function(t) {
                t(e.value)
            }).then(_, o)
        }
        s((n = n.apply(e, t || [])).next())
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
        for (; s;) try {
            if (r = 1, a && (_ = a[2 & i[0] ? "return": i[0] ? "throw": "next"]) && !(_ = _.call(a, i[1])).done) return _;
            switch (a = 0, _ && (i = [0, _.value]), i[0]) {
            case 0:
            case 1:
                _ = i;
                break;
            case 4:
                return s.label++,
                {
                    value: i[1],
                    done: !1
                };
            case 5:
                s.label++,
                a = i[1],
                i = [0];
                continue;
            case 7:
                i = s.ops.pop(),
                s.trys.pop();
                continue;
            default:
                if (_ = s.trys, !(_ = _.length > 0 && _[_.length - 1]) && (6 === i[0] || 2 === i[0])) {
                    s = 0;
                    continue
                }
                if (3 === i[0] && (!_ || i[1] > _[0] && i[1] < _[3])) {
                    s.label = i[1];
                    break
                }
                if (6 === i[0] && s.label < _[1]) {
                    s.label = _[1],
                    _ = i;
                    break
                }
                if (_ && s.label < _[2]) {
                    s.label = _[2],
                    s.ops.push(i);
                    break
                }
                _[2] && s.ops.pop(),
                s.trys.pop();
                continue
            }
            i = t.call(e, s)
        } catch(n) {
            i = [6, n],
            a = 0
        } finally {
            r = _ = 0
        }
        if (5 & i[0]) throw i[1];
        return {
            value: i[0] ? i[1] : void 0,
            done: !0
        }
    }
    var r, a, _, o, s = {
        label: 0,
        sent: function() {
            if (1 & _[0]) throw _[1];
            return _[1]
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
mail; !
function(e) {
    var t = function(t) {
        function i() {
            var e = t.call(this) || this;
            return e._lock = !1,
            e.skinName = MailmainviewnewSkin,
            e
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            this.scroller_mail.viewport = this.list_mail,
            this.list_mail.itemRenderer = e.MailRenderItem,
            this._mailArrayCollection = new eui.ArrayCollection,
            this.list_mail.dataProvider = this._mailArrayCollection,
            this.lab_desc.touchEnabled = !0,
            this.initEvents(),
            this._upDateView()
        },
        i.prototype.initEvents = function() {
            ImageButtonUtil.add(this.img_btn_close, this.onTouchImageButtonHandler, this),
            ImageButtonUtil.add(this.img_getAward, this.onTouchImageButtonHandler, this),
            ImageButtonUtil.add(this.img_ljqw, this.onTouchImageButtonHandler, this),
            ImageButtonUtil.add(this.img_all_delet, this.onTouchImageButtonHandler, this),
            ImageButtonUtil.add(this.img_all_read, this.onTouchImageButtonHandler, this),
            ImageButtonUtil.add(this.img_delet, this.onTouchImageButtonHandler, this),
            this.lab_desc.addEventListener(egret.TextEvent.LINK, this.onTouchTapHtmlLink, this),
            this.list_mail.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.onTouchItemTapHandler, this)
        },
        i.prototype._upDateView = function() {
            this.updateAll()
        },
        i.prototype.removeEvents = function() {
            ImageButtonUtil.removeAll(this),
            this.lab_desc.removeEventListener(egret.TextEvent.LINK, this.onTouchTapHtmlLink, this),
            this.list_mail.removeEventListener(eui.ItemTapEvent.ITEM_TAP, this.onTouchItemTapHandler, this)
        },
        i.prototype._parseMailListData = function(e) {
            this._mailArrayCollection.replaceAll(e),
            this.list_mail.validateNow()
        },
        i.prototype.updatePageList = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var e, t;
                return __generator(this,
                function(i) {
                    switch (i.label) {
                    case 0:
                        return [4, MailManger.getInstance().requestMailListAsync()];
                    case 1:
                        return e = i.sent(),
                        this._parseMailListData(e),
                        this.scroller_mail.viewport.scrollV = 0,
                        this.grp_mailInfo.visible = this._mailArrayCollection.length > 0,
                        this.img_noEmail.visible = !this.grp_mailInfo.visible,
                        this._currentSelectMailListInfo = null,
                        this._mailArrayCollection.length > 0 && (t = 0, this.list_mail.selectedIndex = t, this._currentSelectMailListInfo = this._mailArrayCollection.getItemAt(t)),
                        [2, Promise.resolve()]
                    }
                })
            })
        },
        i.prototype.updateMailInfo = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var e, t, i, n, r, a, _, o, s, l, u;
                return __generator(this,
                function(c) {
                    switch (c.label) {
                    case 0:
                        return e = this._currentSelectMailListInfo,
                        e ? [4, MailManger.getInstance().getMailDetailedInformationOnAsync(e.mId)] : [3, 2];
                    case 1:
                        for (t = c.sent(), this._updatePageItem(MailManger.getInstance().getCacheMailListInfo(t.mId)), this.head_icon.source = "mailmainviewnew_head_icon_png", t.headId > 0 && (1 === t.headType ? this.head_icon.source = ClientConfig.getNpcHeadIcon(t.headId) : 2 === t.headType && (this.head_icon.source = ClientConfig.getPetHeadPath(t.headId))), this.lab_title.text = t.title, "1970-1-1" == t.Isexpire_time ? this.lab_tm.text = "无": (i = t.remainingday, n = Math.floor(i / 3600 / 24), r = Math.floor(i / 3600), a = "", a = 0 != n ? "剩余" + (n + 1) + "天 ": 24 > r && r > 1 ? "剩余" + (r + 1) + "小时 ": "今天到期", this.lab_tm.text = a), _ = t.content.replace(/\t/g, "        "), o = EmailUtil.text2Html(_), this.lab_desc.textFlow = (new egret.HtmlTextParser).parse(o), s = EmailUtil.GetGotoStr(t.content), this.img_ljqw.visible = s && "0" != s && "" != s && !GameInfo.isChecking, this._goToInfo = s, l = t.reward, u = 0; 5 > u; u++) t.hasAttachment ? u >= l.length ? this["grp_item_" + u].visible = !1 : (this["grp_item_" + u].visible = !0, this["icon_" + u].source = this.getUrl(l[u].type, l[u].id), this["lab_count_" + u].text = core.gameUtil.ConvertToTenThousand(l[u].count), this["texture_ylq_" + u].visible = t.attachmentGetFlag) : this["grp_item_" + u].visible = !1;
                        return this.img_getAward.visible = t.hasAttachment && !t.attachmentGetFlag,
                        this.img_delet.visible = !this.img_getAward.visible,
                        [3, 3];
                    case 2:
                        this.grp_mailInfo.visible = !1,
                        c.label = 3;
                    case 3:
                        return this._updateMailCount(),
                        [2, Promise.resolve()]
                    }
                })
            })
        },
        i.prototype.getUrl = function(e, t) {
            switch (e) {
            case 0:
                return ItemXMLInfo.getIconURL(t);
            case 1:
                return ClientConfig.getPetHeadPath(t);
            case 2:
                return ClientConfig.getMarkPath(t);
            case 5:
                var i = config.Profilephoto.getItem(t),
                n = 1 == i.type ? ClientConfig.GetAvatarHead(i.icon) : ClientConfig.GetAvatarFrame(i.icon);
                return n;
            default:
                return ""
            }
        },
        i.prototype._updatePageItem = function(e) {
            for (var t = -1,
            i = this._mailArrayCollection.source,
            n = 0; n < i.length; n++) {
                var r = i[n];
                if (e.mId === r.mId) {
                    t = n;
                    break
                }
            }
            t >= 0 && this._mailArrayCollection.replaceItemAt(e, t)
        },
        i.prototype._updateMailCount = function() {
            var e = this._mailArrayCollection.source;
            this.lab_count.text = e.length + "/50"
        },
        i.prototype.updateAll = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                return __generator(this,
                function(e) {
                    switch (e.label) {
                    case 0:
                        return [4, this.updatePageList()];
                    case 1:
                        return e.sent(),
                        [4, this.updateMailInfo()];
                    case 2:
                        return e.sent(),
                        [2, Promise.resolve()]
                    }
                })
            })
        },
        i.prototype.onTouchItemTapHandler = function(e) {
            this._currentSelectMailListInfo = e.item,
            this.scroller_desc.stopAnimation(),
            this.scroller_desc.viewport.scrollV = 0,
            this.updateMailInfo()
        },
        i.prototype.onTouchTapHtmlLink = function(e) {},
        i.prototype.onTouchImageButtonHandler = function(e) {
            var t = this;
            if (!this._lock || e.target == this.img_btn_close) switch (e.target) {
            case this.img_btn_close:
                this.onClose();
                break;
            case this.img_getAward:
                this._lock = !0,
                MailManger.getInstance().requestGetAwardOnAsync(this._currentSelectMailListInfo.mId).then(function() {
                    t.updateMailInfo(),
                    t._lock = !1
                },
                function() {
                    t._lock = !1
                });
                break;
            case this.img_ljqw:
                EmailXmlController.Parse( + this._goToInfo);
                break;
            case this.img_delet:
                var i = "";
                i = this._currentSelectMailListInfo.hasAttachment && !this._currentSelectMailListInfo.attachmentGetFlag ? "您还有附件尚未领取，请确认是否删除？注意：被删除的邮件无法复原！": "请确认是否删除邮件？注意：被删除的邮件无法复原！",
                Alert.show(i,
                function() {
                    t._lock = !0,
                    t.removeMailItem(t._currentSelectMailListInfo.mId).then(function() {
                        t._lock = !1
                    })["catch"](function() {
                        t._lock = !1,
                        console.error("删除单封邮件出错")
                    })
                });
                break;
            case this.img_all_read:
                this._lock = !0,
                this.allReadMail().then(function() {
                    t._lock = !1
                })["catch"](function() {
                    console.error("邮件一键已读出错"),
                    t._lock = !1
                });
                break;
            case this.img_all_delet:
                Alert.show("邮件一旦删除就不能恢复了哦，你确定要删除所有邮件吗？",
                function() {
                    t._lock = !0,
                    t.allDeletMail().then(function() {
                        t._lock = !1
                    })["catch"](function() {
                        console.error("邮件一键删除出现错误"),
                        t._lock = !1
                    })
                })
            }
        },
        i.prototype.allDeletMail = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var e;
                return __generator(this,
                function(t) {
                    switch (t.label) {
                    case 0:
                        return [4, MailManger.getInstance().requestAllDelOnAsync()];
                    case 1:
                        return e = t.sent(),
                        0 === e ? (BubblerManager.getInstance().showText("当前邮件均不可一键删除"), [2]) : [2, this.updateAll()]
                    }
                })
            })
        },
        i.prototype.allReadMail = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var e;
                return __generator(this,
                function(t) {
                    switch (t.label) {
                    case 0:
                        return [4, MailManger.getInstance().requestAllReadOnAsync()];
                    case 1:
                        return t.sent(),
                        e = MailManger.getInstance().getCacheMailListAll(),
                        this._parseMailListData(e),
                        [4, this.updateMailInfo()];
                    case 2:
                        return t.sent(),
                        [2, Promise.resolve()]
                    }
                })
            })
        },
        i.prototype.removeMailItem = function(e) {
            return __awaiter(this, void 0, void 0,
            function() {
                var t, i;
                return __generator(this,
                function(n) {
                    switch (n.label) {
                    case 0:
                        return t = this.list_mail.selectedIndex,
                        [4, MailManger.getInstance().requestRemoveMailOnAsync([e])];
                    case 1:
                        return n.sent(),
                        [4, MailManger.getInstance().requestMailListAsync()];
                    case 2:
                        return i = n.sent(),
                        t > i.length - 1 && (t = i.length - 1),
                        this._parseMailListData(i),
                        this.grp_mailInfo.visible = this._mailArrayCollection.length > 0,
                        this.img_noEmail.visible = !this.grp_mailInfo.visible,
                        this._currentSelectMailListInfo = null,
                        this._mailArrayCollection.length > 0 && (this.list_mail.selectedIndex = t, this._currentSelectMailListInfo = this._mailArrayCollection.getItemAt(t)),
                        [2, this.updateMailInfo()]
                    }
                })
            })
        },
        i.prototype.destroy = function() {
            this.removeEvents(),
            t.prototype.destroy.call(this)
        },
        i
    } (BaseModule);
    e.Mail = t,
    __reflect(t.prototype, "mail.Mail")
} (mail || (mail = {}));
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
mail; !
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.skinName = MainitemnewSkin,
            t.cacheAsBitmap = !0,
            t.addEventListener(egret.Event.REMOVED_FROM_STAGE, t.destroy, t),
            t
        }
        return __extends(t, e),
        Object.defineProperty(t.prototype, "selected", {
            get: function() {
                return egret.superGetter(t, this, "selected")
            },
            set: function(e) {
                this.img_select.visible = e,
                egret.superSetter(t, this, "selected", e)
            },
            enumerable: !0,
            configurable: !0
        }),
        t.prototype.dataChanged = function() {
            this._vo = this.data,
            this.initEmailStatus(),
            this.updateItem()
        },
        t.prototype.initEmailStatus = function() {
            this.currentState = this._vo.status ? "read": "unread",
            this.validateNow()
        },
        t.prototype.updateItem = function() {
            var e = this._vo,
            t = e.title;
            t = StringUtil.parseStrLimitLen(e.title, 11),
            this.lab_title.text = t,
            this.img_starFlag.visible = e.star && "" != e.star && "s" === e.star.toLocaleLowerCase(),
            this.read.visible = !this.img_starFlag.visible && "read" == this.currentState,
            this.lab_date.text = e.date,
            this.img_select.visible = this.selected,
            this.grp_fj.visible = e.hasAttachment && !e.attachmentGetFlag,
            this.grp_unfj.visible = !(e.hasAttachment && !e.attachmentGetFlag),
            "read" == this.currentState && (e.hasAttachment && !e.attachmentGetFlag ? (this.read.visible = !1, this.grp_fj.visible = !0) : (this.read.visible = !0, this.grp_unfj.visible = this.grp_fj.visible = !1))
        },
        t.prototype.destroy = function() {
            this._vo = null,
            this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this)
        },
        t
    } (eui.ItemRenderer);
    e.MailRenderItem = t,
    __reflect(t.prototype, "mail.MailRenderItem")
} (mail || (mail = {}));
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
generateEUI.paths["resource/eui_skins/MailmainviewnewSkin.exml"] = window.MailmainviewnewSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["img_btn_close", "title", "bg", "lab_count", "img_all_delet", "img_all_read", "lab_title", "lab_tm", "head_icon", "icon_0", "lab_count_0", "texture_ylq_0", "grp_item_0", "icon_1", "lab_count_1", "texture_ylq_1", "grp_item_1", "icon_2", "lab_count_2", "texture_ylq_2", "grp_item_2", "icon_3", "lab_count_3", "texture_ylq_3", "grp_item_3", "icon_4", "lab_count_4", "texture_ylq_4", "grp_item_4", "img_ljqw", "img_getAward", "img_delet", "lab_desc", "scroller_desc", "list_mail", "scroller_mail", "grp_mailInfo", "img_noEmail"],
        this.height = 547,
        this.width = 1e3,
        this.elementsContent = [this.bg_i(), this.grp_mailInfo_i(), this.img_noEmail_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i.bg_i = function() {
        var e = new eui.Group;
        return this.bg = e,
        e.cacheAsBitmap = !0,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this._Image1_i(), this._Image2_i(), this.img_btn_close_i(), this._Image3_i(), this.title_i(), this._Image4_i()],
        e
    },
    i._Image1_i = function() {
        var e = new eui.Image;
        return e.height = 547,
        e.source = "common_s9_pop_bg4_png",
        e.visible = !0,
        e.width = 999,
        e.x = 0,
        e.y = 1,
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.height = 34,
        e.source = "common_pop_up_bg_big_png",
        e.visible = !0,
        e.width = 999,
        e.x = 0,
        e.y = 0,
        e
    },
    i.img_btn_close_i = function() {
        var e = new eui.Image;
        return this.img_btn_close = e,
        e.source = "mailmainviewnew_btnclose_png",
        e.x = 957,
        e.y = 0,
        e
    },
    i._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "mailmainviewnew_leftbg_png",
        e.visible = !0,
        e.width = 430.078,
        e.x = 0,
        e.y = 32,
        e
    },
    i.title_i = function() {
        var e = new eui.Image;
        return this.title = e,
        e.source = "mailmainviewnew_title_png",
        e.x = 36,
        e.y = 2,
        e
    },
    i._Image4_i = function() {
        var e = new eui.Image;
        return e.source = "mailmainviewnew_line_0_png",
        e.x = 308,
        e.y = 52,
        e
    },
    i.grp_mailInfo_i = function() {
        var e = new eui.Group;
        return this.grp_mailInfo = e,
        e.x = 0,
        e.y = 39,
        e.elementsContent = [this._Group1_i(), this.scroller_desc_i(), this.scroller_mail_i()],
        e
    },
    i._Group1_i = function() {
        var e = new eui.Group;
        return e.cacheAsBitmap = !0,
        e.height = 473,
        e.width = 933,
        e.x = 35,
        e.y = 0,
        e.elementsContent = [this.lab_count_i(), this.img_all_delet_i(), this.img_all_read_i(), this._Image5_i(), this._Image6_i(), this._Image7_i(), this._Label1_i(), this.lab_title_i(), this._Label2_i(), this.lab_tm_i(), this._Image8_i(), this.head_icon_i(), this.grp_item_0_i(), this.grp_item_1_i(), this.grp_item_2_i(), this.grp_item_3_i(), this.grp_item_4_i(), this.img_ljqw_i(), this.img_getAward_i(), this.img_delet_i()],
        e
    },
    i.lab_count_i = function() {
        var e = new eui.Label;
        return this.lab_count = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "50/50",
        e.textColor = 6258105,
        e.x = 201,
        e.y = 0,
        e
    },
    i.img_all_delet_i = function() {
        var e = new eui.Image;
        return this.img_all_delet = e,
        e.source = "mailmainviewnew_img_all_delet_png",
        e.x = 0,
        e.y = 438,
        e
    },
    i.img_all_read_i = function() {
        var e = new eui.Image;
        return this.img_all_read = e,
        e.source = "mailmainviewnew_img_all_read_png",
        e.x = 125,
        e.y = 438,
        e
    },
    i._Image5_i = function() {
        var e = new eui.Image;
        return e.source = "mailmainviewnew_line_0_png",
        e.x = 289,
        e.y = 369,
        e
    },
    i._Image6_i = function() {
        var e = new eui.Image;
        return e.source = "mailmainviewnew_line_0_png",
        e.x = 289,
        e.y = 97,
        e
    },
    i._Image7_i = function() {
        var e = new eui.Image;
        return e.source = "mailmainviewnew_texture_0_png",
        e.x = 642,
        e.y = 49,
        e
    },
    i._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "主题：",
        e.textColor = 12046335,
        e.x = 365,
        e.y = 34,
        e
    },
    i.lab_title_i = function() {
        var e = new eui.Label;
        return this.lab_title = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "邮件标题最多十二个字呀",
        e.textColor = 12046335,
        e.visible = !0,
        e.x = 427,
        e.y = 33,
        e
    },
    i._Label2_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "有效时间：",
        e.textColor = 12046335,
        e.x = 365,
        e.y = 62,
        e
    },
    i.lab_tm_i = function() {
        var e = new eui.Label;
        return this.lab_tm = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "00:30:00",
        e.textColor = 12046335,
        e.width = 80,
        e.x = 449,
        e.y = 62,
        e
    },
    i._Image8_i = function() {
        var e = new eui.Image;
        return e.source = "mailmainviewnew_head_bg_png",
        e.x = 289,
        e.y = 25,
        e
    },
    i.head_icon_i = function() {
        var e = new eui.Image;
        return this.head_icon = e,
        e.source = "mailmainviewnew_head_icon_png",
        e.visible = !0,
        e.x = 290,
        e.y = 25,
        e
    },
    i.grp_item_0_i = function() {
        var e = new eui.Group;
        return this.grp_item_0 = e,
        e.x = 289,
        e.y = 400,
        e.elementsContent = [this._Image9_i(), this.icon_0_i(), this.lab_count_0_i(), this.texture_ylq_0_i()],
        e
    },
    i._Image9_i = function() {
        var e = new eui.Image;
        return e.bottom = 0,
        e.height = 73,
        e.source = "common_icon_bg_style_1_png",
        e.width = 73,
        e.x = 0,
        e
    },
    i.icon_0_i = function() {
        var e = new eui.Image;
        return this.icon_0 = e,
        e.height = 50,
        e.source = "",
        e.visible = !0,
        e.width = 50,
        e.x = 11,
        e.y = 13,
        e
    },
    i.lab_count_0_i = function() {
        var e = new eui.Label;
        return this.lab_count_0 = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.stroke = 1,
        e.strokeColor = 1973795,
        e.text = "100000",
        e.textAlign = "right",
        e.textColor = 16777215,
        e.width = 60,
        e.x = 8,
        e.y = 53,
        e
    },
    i.texture_ylq_0_i = function() {
        var e = new eui.Image;
        return this.texture_ylq_0 = e,
        e.source = "mailmainviewnew_wjs_kb_png",
        e.visible = !0,
        e.x = 0,
        e.y = 0,
        e
    },
    i.grp_item_1_i = function() {
        var e = new eui.Group;
        return this.grp_item_1 = e,
        e.x = 372,
        e.y = 400,
        e.elementsContent = [this._Image10_i(), this.icon_1_i(), this.lab_count_1_i(), this.texture_ylq_1_i()],
        e
    },
    i._Image10_i = function() {
        var e = new eui.Image;
        return e.height = 73,
        e.source = "common_icon_bg_style_1_png",
        e.width = 73,
        e.x = 0,
        e.y = 0,
        e
    },
    i.icon_1_i = function() {
        var e = new eui.Image;
        return this.icon_1 = e,
        e.height = 50,
        e.source = "",
        e.width = 50,
        e.x = 11,
        e.y = 13,
        e
    },
    i.lab_count_1_i = function() {
        var e = new eui.Label;
        return this.lab_count_1 = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.stroke = 1,
        e.strokeColor = 1973795,
        e.text = "10",
        e.textAlign = "right",
        e.textColor = 16777215,
        e.width = 60,
        e.x = 8,
        e.y = 53,
        e
    },
    i.texture_ylq_1_i = function() {
        var e = new eui.Image;
        return this.texture_ylq_1 = e,
        e.source = "mailmainviewnew_wjs_kb_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.grp_item_2_i = function() {
        var e = new eui.Group;
        return this.grp_item_2 = e,
        e.x = 455,
        e.y = 400,
        e.elementsContent = [this._Image11_i(), this.icon_2_i(), this.lab_count_2_i(), this.texture_ylq_2_i()],
        e
    },
    i._Image11_i = function() {
        var e = new eui.Image;
        return e.height = 73,
        e.source = "common_icon_bg_style_1_png",
        e.width = 73,
        e.x = 0,
        e.y = 0,
        e
    },
    i.icon_2_i = function() {
        var e = new eui.Image;
        return this.icon_2 = e,
        e.height = 50,
        e.source = "",
        e.width = 50,
        e.x = 11,
        e.y = 13,
        e
    },
    i.lab_count_2_i = function() {
        var e = new eui.Label;
        return this.lab_count_2 = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.stroke = 1,
        e.strokeColor = 1973795,
        e.text = "10",
        e.textAlign = "right",
        e.textColor = 16777215,
        e.width = 60,
        e.x = 8,
        e.y = 53,
        e
    },
    i.texture_ylq_2_i = function() {
        var e = new eui.Image;
        return this.texture_ylq_2 = e,
        e.source = "mailmainviewnew_wjs_kb_png",
        e.visible = !0,
        e.x = 0,
        e.y = 0,
        e
    },
    i.grp_item_3_i = function() {
        var e = new eui.Group;
        return this.grp_item_3 = e,
        e.x = 538,
        e.y = 400,
        e.elementsContent = [this._Image12_i(), this.icon_3_i(), this.lab_count_3_i(), this.texture_ylq_3_i()],
        e
    },
    i._Image12_i = function() {
        var e = new eui.Image;
        return e.height = 73,
        e.source = "common_icon_bg_style_1_png",
        e.width = 73,
        e.x = 0,
        e.y = 0,
        e
    },
    i.icon_3_i = function() {
        var e = new eui.Image;
        return this.icon_3 = e,
        e.height = 50,
        e.source = "",
        e.width = 50,
        e.x = 11,
        e.y = 13,
        e
    },
    i.lab_count_3_i = function() {
        var e = new eui.Label;
        return this.lab_count_3 = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.stroke = 1,
        e.strokeColor = 1973795,
        e.text = "10",
        e.textAlign = "right",
        e.textColor = 16777215,
        e.width = 60,
        e.x = 8,
        e.y = 53,
        e
    },
    i.texture_ylq_3_i = function() {
        var e = new eui.Image;
        return this.texture_ylq_3 = e,
        e.source = "mailmainviewnew_wjs_kb_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.grp_item_4_i = function() {
        var e = new eui.Group;
        return this.grp_item_4 = e,
        e.x = 621,
        e.y = 400,
        e.elementsContent = [this._Image13_i(), this.icon_4_i(), this.lab_count_4_i(), this.texture_ylq_4_i()],
        e
    },
    i._Image13_i = function() {
        var e = new eui.Image;
        return e.height = 73,
        e.source = "common_icon_bg_style_1_png",
        e.width = 73,
        e.x = 0,
        e.y = 0,
        e
    },
    i.icon_4_i = function() {
        var e = new eui.Image;
        return this.icon_4 = e,
        e.height = 50,
        e.source = "",
        e.width = 50,
        e.x = 11,
        e.y = 13,
        e
    },
    i.lab_count_4_i = function() {
        var e = new eui.Label;
        return this.lab_count_4 = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.stroke = 1,
        e.strokeColor = 1973795,
        e.text = "10",
        e.textAlign = "right",
        e.textColor = 16777215,
        e.width = 60,
        e.x = 8,
        e.y = 53,
        e
    },
    i.texture_ylq_4_i = function() {
        var e = new eui.Image;
        return this.texture_ylq_4 = e,
        e.source = "mailmainviewnew_wjs_kb_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.img_ljqw_i = function() {
        var e = new eui.Image;
        return this.img_ljqw = e,
        e.source = "mailmainviewnew_img_ljqw_png",
        e.x = 810,
        e.y = 39,
        e
    },
    i.img_getAward_i = function() {
        var e = new eui.Image;
        return this.img_getAward = e,
        e.source = "mailmainviewnew_img_getaward_png",
        e.x = 810,
        e.y = 438,
        e
    },
    i.img_delet_i = function() {
        var e = new eui.Image;
        return this.img_delet = e,
        e.source = "mailmainviewnew_img_delet_png",
        e.x = 810,
        e.y = 438,
        e
    },
    i.scroller_desc_i = function() {
        var e = new eui.Scroller;
        return this.scroller_desc = e,
        e.height = 260,
        e.visible = !0,
        e.width = 640,
        e.x = 323,
        e.y = 104,
        e.viewport = this._Group2_i(),
        e
    },
    i._Group2_i = function() {
        var e = new eui.Group;
        return e.elementsContent = [this.lab_desc_i()],
        e
    },
    i.lab_desc_i = function() {
        var e = new eui.Label;
        return this.lab_desc = e,
        e.fontFamily = "MFShangHei",
        e.lineSpacing = 9,
        e.scaleX = 1,
        e.scaleY = 1,
        e.size = 16,
        e.text = "亲爱的小赛尔：\n2100年，地球不可再生资源面临枯竭，环境污染问题已经严重威胁到人类生活。为了寻找更优的生存环境，为了探索更佳能源物资，科学家们开始了赛尔机器人的研究工作。这是一个集合了全世界所有优秀科学家的科研组，联合国给他们提供了最好的研究环境、最丰富的环境资源。在全世界无数双眼睛的关注下，赛尔诞生了，带来了希望和梦想的翅膀。人们将那一年改元为赛尔元年，以此提醒所有的人，宇宙探索任重而道远。从此，带着人类的梦想和去其它星系寻找更多更优的资源，赛尔们向着宇宙深处进发。玩家通过扮演赛尔，指挥精灵与野生精灵对战，解锁剧情，以达成游戏目标。玩家通过扮演赛尔，指挥精灵与野生精灵对战，解锁剧情，以达成游戏目标。",
        e.textColor = 6258105,
        e.width = 620,
        e.x = 10,
        e.y = 2,
        e
    },
    i.scroller_mail_i = function() {
        var e = new eui.Scroller;
        return this.scroller_mail = e,
        e.height = 390,
        e.visible = !0,
        e.width = 307,
        e.x = 0,
        e.y = 16,
        e.viewport = this._Group3_i(),
        e
    },
    i._Group3_i = function() {
        var e = new eui.Group;
        return e.elementsContent = [this.list_mail_i()],
        e
    },
    i.list_mail_i = function() {
        var e = new eui.List;
        return this.list_mail = e,
        e.layout = this._VerticalLayout1_i(),
        e
    },
    i._VerticalLayout1_i = function() {
        var e = new eui.VerticalLayout;
        return e.gap = 4,
        e
    },
    i.img_noEmail_i = function() {
        var e = new eui.Image;
        return this.img_noEmail = e,
        e.source = "mailmainviewnew_img_noemail_png",
        e.visible = !0,
        e.x = 531,
        e.y = 157,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/MainitemnewSkin.exml"] = window.MainitemnewSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["lab_date", "lab_title", "grp_unfj", "grp_fj", "read", "img_starFlag", "img_select"],
        this.height = 71,
        this.width = 297,
        this.elementsContent = [this._Group1_i(), this.img_select_i()],
        this.states = [new eui.State("unread", [new eui.SetProperty("_Image1", "visible", !0), new eui.SetProperty("_Image2", "visible", !0), new eui.SetProperty("lab_title", "visible", !0), new eui.SetProperty("grp_unfj", "visible", !0), new eui.SetProperty("grp_fj", "visible", !1), new eui.SetProperty("read", "visible", !1), new eui.SetProperty("img_starFlag", "visible", !1), new eui.SetProperty("img_select", "x", 0)]), new eui.State("read", [new eui.SetProperty("_Image1", "visible", !0), new eui.SetProperty("_Image2", "visible", !1), new eui.SetProperty("_Image3", "visible", !1), new eui.SetProperty("grp_unfj", "visible", !1), new eui.SetProperty("grp_fj", "visible", !1), new eui.SetProperty("read", "visible", !0), new eui.SetProperty("img_starFlag", "visible", !1), new eui.SetProperty("_Group1", "x", 3), new eui.SetProperty("_Group1", "visible", !0), new eui.SetProperty("img_select", "visible", !0)])]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Group1_i = function() {
        var e = new eui.Group;
        return this._Group1 = e,
        e.visible = !0,
        e.x = 3,
        e.y = 5,
        e.elementsContent = [this._Image1_i(), this._Image2_i(), this._Image3_i(), this.lab_date_i(), this.lab_title_i(), this.grp_unfj_i(), this.grp_fj_i(), this.read_i(), this.img_starFlag_i()],
        e
    },
    i._Image1_i = function() {
        var e = new eui.Image;
        return this._Image1 = e,
        e.source = "mainitemnew_listbg2_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return this._Image2 = e,
        e.source = "mainitemnew_listbg0_png",
        e.x = 0,
        e.y = 1,
        e
    },
    i._Image3_i = function() {
        var e = new eui.Image;
        return this._Image3 = e,
        e.source = "mainitemnew_line_png",
        e.x = 0,
        e.y = 61,
        e
    },
    i.lab_date_i = function() {
        var e = new eui.Label;
        return this.lab_date = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "2019/12/16",
        e.textColor = 8757203,
        e.width = 100,
        e.x = 62,
        e.y = 35,
        e
    },
    i.lab_title_i = function() {
        var e = new eui.Label;
        return this.lab_title = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "邮件标题最多十二个字呀",
        e.textColor = 16777215,
        e.x = 63,
        e.y = 12,
        e
    },
    i.grp_unfj_i = function() {
        var e = new eui.Image;
        return this.grp_unfj = e,
        e.source = "mainitemnew_unfj_png",
        e.x = 13,
        e.y = 15,
        e
    },
    i.grp_fj_i = function() {
        var e = new eui.Image;
        return this.grp_fj = e,
        e.source = "mainitemnew_fj_png",
        e.x = 13,
        e.y = 15,
        e
    },
    i.read_i = function() {
        var e = new eui.Image;
        return this.read = e,
        e.source = "mainitemnew_read_png",
        e.x = 13,
        e.y = 15,
        e
    },
    i.img_starFlag_i = function() {
        var e = new eui.Image;
        return this.img_starFlag = e,
        e.source = "mainitemnew_read_star_png",
        e.x = 13,
        e.y = 15,
        e
    },
    i.img_select_i = function() {
        var e = new eui.Image;
        return this.img_select = e,
        e.source = "mainitemnew_selected_png",
        e.visible = !0,
        e.x = 5,
        e.y = 0,
        e
    },
    t
} (eui.Skin);