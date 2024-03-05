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
                u(n.next(t))
            } catch(e) {
                a(e)
            }
        }
        function s(t) {
            try {
                u(n["throw"](t))
            } catch(e) {
                a(e)
            }
        }
        function u(t) {
            t.done ? r(t.value) : new i(function(e) {
                e(t.value)
            }).then(o, s)
        }
        u((n = n.apply(t, e || [])).next())
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
            i = e.call(t, u)
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
diamondAward; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t.skinName = "DiamondAwardSkin",
            t
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            this.init(),
            this.addEvent()
        },
        i.prototype.reShow = function() {
            this.onChangeTab()
        },
        i.prototype.destroy = function() {
            for (var t = this.list.numChildren,
            i = 0; t > i; i++) {
                var n = this.list.getChildAt(i);
                n.destroy()
            }
            e.prototype.destroy.call(this)
        },
        i.prototype.updateValue = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var t, e, i;
                return __generator(this,
                function(n) {
                    switch (n.label) {
                    case 0:
                        return LoadingManager.instance.showloading("正在加载资源，请稍候！"),
                        [4, KTool.getMultiValueAsync([6085, 5150, 121115, 121114])];
                    case 1:
                        return t = n.sent(),
                        this.sumRecharge = t[0] - t[1],
                        this.sumConsume = t[2],
                        this.hasState = t[3],
                        config.Rebate.hasLoader ? [3, 3] : [4, config.Rebate.loadAsync()];
                    case 2:
                        n.sent(),
                        n.label = 3;
                    case 3:
                        return this.configData = config.Rebate.getItems(),
                        this.strTime = this.configData.filter(function(t) {
                            return 3 == t.type
                        })[0].title,
                        this.strName = this.configData.filter(function(t) {
                            return 4 == t.type
                        })[0].title,
                        e = this.bg,
                        [4, RES.getResByUrl("resource/assets/diamondAward/bg.jpg")];
                    case 4:
                        return e.source = n.sent(),
                        i = this.imgPet,
                        [4, RES.getResByUrl("resource/assets/diamondAward/pet.png")];
                    case 5:
                        return i.source = n.sent(),
                        LoadingManager.instance.hideloading(),
                        [2]
                    }
                })
            })
        },
        i.prototype.init = function() {
            this.adaptLeftContent(this.groupLeft),
            this.list.itemRenderer = t.DiamondAwardItem;
            var e = new eui.RadioButtonGroup;
            this.rbRecharge.group = e,
            this.rbConsume.group = e,
            this.rbRecharge.selected = !0,
            this.onChangeTab()
        },
        i.prototype.addEvent = function() {
            this.rbRecharge.group.addEventListener(egret.Event.CHANGE, this.onChangeTab, this)
        },
        i.prototype.onChangeTab = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var t, e, i, n = this;
                return __generator(this,
                function(r) {
                    switch (r.label) {
                    case 0:
                        return [4, this.updateValue()];
                    case 1:
                        return r.sent(),
                        t = this.rbRecharge.group.selectedValue || 1,
                        this.imgType.source = 1 == t ? "diamond_award_imgrecharge_png": "diamond_award_imgconsume_png",
                        this.txtTime.text = "活动时间：" + this.strTime,
                        e = "已" + (1 == t ? "充值": "消费") + "：<font color='#00FF00'>" + (1 == t ? this.sumRecharge: this.sumConsume) + "</font>钻石",
                        this.txtNum.textFlow = (new egret.HtmlTextParser).parse(e),
                        this.txtName.text = this.strName,
                        i = this.configData.filter(function(e) {
                            return e.type == t
                        }),
                        i.forEach(function(e) {
                            e.hasGet = KTool.getBit(n.hasState, (1 == e.type ? 4 : -4) + e.id),
                            e.canGet = (1 == t ? n.sumRecharge: n.sumConsume) >= +e.title
                        }),
                        this.list.dataProvider = new eui.ArrayCollection(i),
                        [2]
                    }
                })
            })
        },
        i
    } (BaseModule);
    t.DiamondAward = e,
    __reflect(e.prototype, "diamondAward.DiamondAward")
} (diamondAward || (diamondAward = {}));
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
diamondAward; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.skinName = "DiamondAwardItemSkin",
            e
        }
        return __extends(e, t),
        e.prototype.dataChanged = function() {
            var t = this,
            e = this.data;
            this.txtType.text = 1 == e.type ? "充值": "消费",
            this.txtNum.text = e.title + "钻石";
            for (var i = e.rewardinfo.split(";"), n = function(t) {
                if (ImageButtonUtil.remove(r["imgItem" + t]), i[t - 1]) {
                    r["groupItem" + t].visible = !0;
                    var e = i[t - 1].split("_");
                    "1" == e[0] ? (r["txtItem" + t].text = e[2], r["imgItem" + t].source = ClientConfig.getItemIcon(e[1]), ImageButtonUtil.add(r["imgItem" + t],
                    function() {
                        tipsPop.TipsPop.openItemPop({
                            id: +e[1]
                        })
                    },
                    r)) : "6" == e[0] && (r["txtItem" + t].text = "", r["imgItem" + t].source = "resource/assets/pet/head/" + e[1] + ".png", ImageButtonUtil.add(r["imgItem" + t],
                    function() {
                        AwardManager.ShowTmpPetSkinDiaolg( + e[1])
                    },
                    r))
                } else r["groupItem" + t].visible = !1
            },
            r = this, a = 1; 4 >= a; a++) n(a);
            ImageButtonUtil.remove(this.btn),
            e.hasGet ? this.btn.source = "diamond_award_item_imghas_png": (e.canGet ? this.btn.source = "diamond_award_item_imgget_png": this.btn.source = "diamond_award_item_imggoto_png", ImageButtonUtil.add(this.btn,
            function() {
                e.canGet ? SocketConnection.sendByQueue(45797, [1 == e.type ? 2 : 1, (1 == e.type ? 0 : -4) + e.id],
                function() {
                    e.hasGet = !0,
                    t.dataChanged()
                }) : PayManager.rechargeDiamond()
            },
            this))
        },
        e.prototype.destroy = function() {
            ImageButtonUtil.removeAll(this)
        },
        e
    } (eui.ItemRenderer);
    t.DiamondAwardItem = e,
    __reflect(e.prototype, "diamondAward.DiamondAwardItem")
} (diamondAward || (diamondAward = {}));
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
generateEUI.paths["resource/eui_skins/DiamondAwardItemSkin.exml"] = window.DiamondAwardItemSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["imgItem1", "txtItem1", "groupItem1", "imgItem2", "txtItem2", "groupItem2", "imgItem3", "txtItem3", "groupItem3", "imgItem4", "txtItem4", "groupItem4", "btn", "txtType", "txtNum"],
        this.height = 95,
        this.width = 612,
        this.elementsContent = [this._Image1_i(), this.groupItem1_i(), this.groupItem2_i(), this.groupItem3_i(), this.groupItem4_i(), this.btn_i(), this.txtType_i(), this.txtNum_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "diamond_award_item_imgbg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.groupItem1_i = function() {
        var t = new eui.Group;
        return this.groupItem1 = t,
        t.x = 185,
        t.y = 13,
        t.elementsContent = [this._Image2_i(), this.imgItem1_i(), this.txtItem1_i()],
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "diamond_award_item_imgitembg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.imgItem1_i = function() {
        var t = new eui.Image;
        return this.imgItem1 = t,
        t.height = 57,
        t.width = 57,
        t.x = 7,
        t.y = 7,
        t
    },
    i.txtItem1_i = function() {
        var t = new eui.Label;
        return this.txtItem1 = t,
        t.fontFamily = "MFShangHei",
        t.right = 5,
        t.size = 16,
        t.textColor = 15857151,
        t.y = 49,
        t
    },
    i.groupItem2_i = function() {
        var t = new eui.Group;
        return this.groupItem2 = t,
        t.x = 259,
        t.y = 13,
        t.elementsContent = [this._Image3_i(), this.imgItem2_i(), this.txtItem2_i()],
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "diamond_award_item_imgitembg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.imgItem2_i = function() {
        var t = new eui.Image;
        return this.imgItem2 = t,
        t.height = 57,
        t.width = 57,
        t.x = 7,
        t.y = 7,
        t
    },
    i.txtItem2_i = function() {
        var t = new eui.Label;
        return this.txtItem2 = t,
        t.fontFamily = "MFShangHei",
        t.right = 5,
        t.size = 16,
        t.textColor = 15857151,
        t.x = 85,
        t.y = 49,
        t
    },
    i.groupItem3_i = function() {
        var t = new eui.Group;
        return this.groupItem3 = t,
        t.x = 333,
        t.y = 13,
        t.elementsContent = [this._Image4_i(), this.imgItem3_i(), this.txtItem3_i()],
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.source = "diamond_award_item_imgitembg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.imgItem3_i = function() {
        var t = new eui.Image;
        return this.imgItem3 = t,
        t.height = 57,
        t.width = 57,
        t.x = 7,
        t.y = 7,
        t
    },
    i.txtItem3_i = function() {
        var t = new eui.Label;
        return this.txtItem3 = t,
        t.fontFamily = "MFShangHei",
        t.right = 5,
        t.size = 16,
        t.textColor = 15857151,
        t.x = 95,
        t.y = 49,
        t
    },
    i.groupItem4_i = function() {
        var t = new eui.Group;
        return this.groupItem4 = t,
        t.x = 407,
        t.y = 13,
        t.elementsContent = [this._Image5_i(), this.imgItem4_i(), this.txtItem4_i()],
        t
    },
    i._Image5_i = function() {
        var t = new eui.Image;
        return t.source = "diamond_award_item_imgitembg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.imgItem4_i = function() {
        var t = new eui.Image;
        return this.imgItem4 = t,
        t.height = 57,
        t.width = 57,
        t.x = 7,
        t.y = 7,
        t
    },
    i.txtItem4_i = function() {
        var t = new eui.Label;
        return this.txtItem4 = t,
        t.fontFamily = "MFShangHei",
        t.right = 5,
        t.size = 16,
        t.textColor = 15857151,
        t.x = 105,
        t.y = 49,
        t
    },
    i.btn_i = function() {
        var t = new eui.Image;
        return this.btn = t,
        t.x = 507,
        t.y = 31,
        t
    },
    i.txtType_i = function() {
        var t = new eui.Label;
        return this.txtType = t,
        t.fontFamily = "REEJI",
        t.size = 24,
        t.textColor = 15857151,
        t.x = 13,
        t.y = 19,
        t
    },
    i.txtNum_i = function() {
        var t = new eui.Label;
        return this.txtNum = t,
        t.fontFamily = "REEJI",
        t.size = 36,
        t.textColor = 16774293,
        t.x = 12,
        t.y = 57,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/DiamondAwardSkin.exml"] = window.DiamondAwardSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "imgPet", "txtName", "rbRecharge", "rbConsume", "imgType", "txtTime", "txtNum", "list", "groupLeft"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this._Group1_i(), this.groupLeft_i()]
    }
    __extends(e, t);
    var i = function(t) {
        function e() {
            t.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i()],
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "diamond_award_rbrechargedown_png")]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t.percentHeight = 100,
            t.source = "diamond_award_rbrechargeup_png",
            t.percentWidth = 100,
            t
        },
        e
    } (eui.Skin),
    n = function(t) {
        function e() {
            t.call(this),
            this.skinParts = ["labelDisplay"],
            this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "diamond_award_rbconsumedown_png")]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t.percentHeight = 100,
            t.source = "diamond_award_rbconsumeup_png",
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
    return r.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.bottom = 0,
        t.left = 0,
        t.right = 0,
        t.top = 0,
        t
    },
    r._Group1_i = function() {
        var t = new eui.Group;
        return t.height = 640,
        t.right = 0,
        t.y = 0,
        t.elementsContent = [this.imgPet_i(), this._Image1_i(), this.txtName_i()],
        t
    },
    r.imgPet_i = function() {
        var t = new eui.Image;
        return this.imgPet = t,
        t.horizontalCenter = 0,
        t.verticalCenter = 0,
        t
    },
    r._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "diamond_award_imgnamebg_png",
        t.x = 105,
        t.y = 534,
        t
    },
    r.txtName_i = function() {
        var t = new eui.Label;
        return this.txtName = t,
        t.fontFamily = "MFShangHei",
        t.size = 20,
        t.textAlign = "center",
        t.textColor = 16770655,
        t.width = 180,
        t.x = 209,
        t.y = 541,
        t
    },
    r.groupLeft_i = function() {
        var t = new eui.Group;
        return this.groupLeft = t,
        t.width = 616,
        t.x = 169,
        t.y = 45,
        t.elementsContent = [this._Image2_i(), this.rbRecharge_i(), this.rbConsume_i(), this.imgType_i(), this.txtTime_i(), this.txtNum_i(), this.list_i()],
        t
    },
    r._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "diamond_award_img1_png",
        t.x = 4,
        t.y = 53,
        t
    },
    r.rbRecharge_i = function() {
        var t = new eui.RadioButton;
        return this.rbRecharge = t,
        t.height = 37,
        t.value = "1",
        t.width = 112,
        t.skinName = i,
        t
    },
    r.rbConsume_i = function() {
        var t = new eui.RadioButton;
        return this.rbConsume = t,
        t.height = 37,
        t.value = "2",
        t.width = 112,
        t.x = 112,
        t.skinName = n,
        t
    },
    r.imgType_i = function() {
        var t = new eui.Image;
        return this.imgType = t,
        t.height = 39,
        t.width = 163,
        t.x = 44,
        t.y = 85,
        t
    },
    r.txtTime_i = function() {
        var t = new eui.Label;
        return this.txtTime = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.textColor = 14673919,
        t.x = 254,
        t.y = 78,
        t
    },
    r.txtNum_i = function() {
        var t = new eui.Label;
        return this.txtNum = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.textColor = 14673919,
        t.x = 253,
        t.y = 112,
        t
    },
    r.list_i = function() {
        var t = new eui.List;
        return this.list = t,
        t.y = 169,
        t.layout = this._VerticalLayout1_i(),
        t
    },
    r._VerticalLayout1_i = function() {
        var t = new eui.VerticalLayout;
        return t
    },
    e
} (eui.Skin);