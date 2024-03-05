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
    return new(i || (i = Promise))(function(a, r) {
        function o(e) {
            try {
                u(n.next(e))
            } catch(t) {
                r(t)
            }
        }
        function s(e) {
            try {
                u(n["throw"](e))
            } catch(t) {
                r(t)
            }
        }
        function u(e) {
            e.done ? a(e.value) : new i(function(t) {
                t(e.value)
            }).then(o, s)
        }
        u((n = n.apply(e, t || [])).next())
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
        if (a) throw new TypeError("Generator is already executing.");
        for (; u;) try {
            if (a = 1, r && (o = r[2 & i[0] ? "return": i[0] ? "throw": "next"]) && !(o = o.call(r, i[1])).done) return o;
            switch (r = 0, o && (i = [0, o.value]), i[0]) {
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
                r = i[1],
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
            i = t.call(e, u)
        } catch(n) {
            i = [6, n],
            r = 0
        } finally {
            a = o = 0
        }
        if (5 & i[0]) throw i[1];
        return {
            value: i[0] ? i[1] : void 0,
            done: !0
        }
    }
    var a, r, o, s, u = {
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
kappaTravel; !
function(e) {
    var t = function(t) {
        function i() {
            var e = t.call(this) || this;
            return e.skinName = "KappaTravelSkin",
            e
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            StatLogger.log("20221021版本系统功能", "凯帕的星际旅行", "进入时空旅行局-凯帕的星际旅行界面"),
            this.addEvent(),
            this.update();
            var e = egret.localStorage.getItem("KappaTravelPanelFirstOpen");
            e || npcDialog.showDialogIds(65,
            function() {
                egret.localStorage.setItem("KappaTravelPanelFirstOpen", "1")
            },
            this)
        },
        i.prototype.addEvent = function() {
            var e = this;
            ImageButtonUtil.add(this.btnInfo,
            function() {
                ModuleManager.showModule("petManualInfo", ["pet_info_manual"], {
                    data: 4431,
                    type: "pet"
                },
                "", AppDoStyle.NULL)
            },
            this),
            ImageButtonUtil.add(this.btnHelp,
            function() {
                tipsPop.TipsPop.openHelpPopById(103),
                StatLogger.log("20221021版本系统功能", "凯帕的星际旅行", "点击【查看活动说明】按钮")
            },
            this),
            ImageButtonUtil.add(this.btnGet,
            function() {
                e.canGetPet ? SocketConnection.sendByQueue(41820, [1, 9],
                function() {
                    StatLogger.log("20221021版本系统功能", "凯帕的星际旅行", "点击【领取】按钮"),
                    e.update()
                }) : BubblerManager.getInstance().showText("完成所有5个快递任务后可领取精灵！")
            },
            this)
        },
        i.prototype.update = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var t, i, n, a, r, o, s = this;
                return __generator(this,
                function(u) {
                    switch (u.label) {
                    case 0:
                        return [4, KTool.getMultiValueAsync([123141, 202280])];
                    case 1:
                        return t = u.sent(),
                        [4, KTool.getPlayerInfoValueAsync([1383, 1384, 1385])];
                    case 2:
                        for (i = u.sent(), n = 1 == KTool.getBit(t[0], 6), this.btnGet.visible = !n, this.imgHas.visible = n, this.canGetPet = !n, a = function(n) {
                            var a = i[0] == n,
                            o = KTool.getBit(t[0], n);
                            o || (r.canGetPet = !1),
                            r["imgDoing" + n].visible = a,
                            r["imgFinish" + n].visible = o,
                            ImageButtonUtil.remove(r["groupItem" + n]),
                            o || a || ImageButtonUtil.add(r["groupItem" + n],
                            function() {
                                return __awaiter(s, void 0, void 0,
                                function() {
                                    var a, r, o;
                                    return __generator(this,
                                    function(s) {
                                        return a = PopViewManager.createDefaultStyleObject(),
                                        a.maskShapeStyle.maskAlpha = .75,
                                        r = 0,
                                        i[0] ? r = 1 : t[1] && (r = 2),
                                        o = new e.KappaTravelPop({
                                            index: n,
                                            state: r
                                        }),
                                        o.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.update, this),
                                        PopViewManager.getInstance().openView(o, a),
                                        [2]
                                    })
                                })
                            },
                            r, !1, !1)
                        },
                        r = this, o = 1; 5 >= o; o++) a(o);
                        return [2]
                    }
                })
            })
        },
        i
    } (BaseModule);
    e.KappaTravel = t,
    __reflect(t.prototype, "kappaTravel.KappaTravel")
} (kappaTravel || (kappaTravel = {}));
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
kappaTravel; !
function(e) {
    var t = function(e) {
        function t(t) {
            var i = e.call(this) || this;
            return i.arrNumber = ["LMXJ4061", "CLXX4212", "LGXX4225", "CLXX4347", "CLXX4125"],
            i.arrMapName = ["露姆仙境-无垠之界-无垠净界", "查理星系-枫曳镇-枫曳酒馆", "灵格星系-钟表领域-时钟藏馆", "查理星系-上野林郊-避风之穴", "查理星系-辉之极地-寒月雪峰"],
            i.arrDes = ["寄件人是来自布瑞星系的守护者艾希丝大人，收件人的地址十分特殊，已经向总部申请了特殊通道进行前往，包裹中包含了食物，需要尽快进行派送。", "来自长夜星河的寄件，署名上写着拉伯克，包裹内只有一封信件，没有附加任何其他东西，需要寄往的地方是查理星系的枫曳镇。", "寄件人通过快递旅行车进行投递，没有署名而是画了一些奇怪的符号，可能和寄件人的身体状况有关。收件人的地址十分特殊，已经向总部申请了特殊通道进行前往。", "来自布瑞星系的包裹投递，此信件为不定地址投递，寄件人提供了一些收件人可能所在的地址，已经由总部筛查确认具体地址，此类包裹一般投递周期较长。", "没有进行署名，也没有具体来源的包裹，由时空快递局总部发出，收件人是在查理星系的精灵王，包裹似乎被某种力量保护着，需要谨慎投递。"],
            i.skinName = "KappaTravelPopSkin",
            i.index = t.index,
            i.state = t.state,
            i
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            var e = this;
            StatLogger.log("20221021版本系统功能", "凯帕的星际旅行", "打开了快递说明弹窗"),
            this.imgMap.source = "kappa_travel_pop_imgmap" + this.index + "_jpg",
            this.imgTitle.source = "kappa_travel_pop_imgtitle" + this.index + "_png",
            this.txtNumber.text = this.arrNumber[this.index - 1],
            this.txtDes.text = this.arrDes[this.index - 1],
            this.txtMap.text = this.arrMapName[this.index - 1],
            ImageButtonUtil.add(this.btnGet,
            function() {
                1 == e.state ? BubblerManager.getInstance().showText("请先完成当前接取的任务。") : 2 == e.state ? BubblerManager.getInstance().showText("今日任务已完成，请明天再来。") : SocketConnection.sendByQueue(41820, [1, e.index],
                function() {
                    StatLogger.log("20221021版本系统功能", "凯帕的星际旅行", "点击接取了1个快递派送任务"),
                    BubblerManager.getInstance().showText("接取成功！"),
                    e.hide(),
                    tipsPop.TipsPop.showKappaTravelBubble(),
                    MapManager._curMapId = void 0
                })
            },
            this)
        },
        t.prototype.destroy = function() {
            e.prototype.destroy.call(this),
            ImageButtonUtil.removeAll(this)
        },
        t
    } (PopView);
    e.KappaTravelPop = t,
    __reflect(t.prototype, "kappaTravel.KappaTravelPop")
} (kappaTravel || (kappaTravel = {}));
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
generateEUI.paths["resource/eui_skins/KappaTravelPopSkin.exml"] = window.KappaTravelPopSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["imgMap", "imgTitle", "btnGet", "txtNumber", "txtDes", "txtMap"],
        this.height = 432,
        this.width = 651,
        this.elementsContent = [this._Image1_i(), this._Image2_i(), this.imgMap_i(), this.imgTitle_i(), this.btnGet_i(), this._Label1_i(), this.txtNumber_i(), this.txtDes_i(), this.txtMap_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Image1_i = function() {
        var e = new eui.Image;
        return e.height = 362,
        e.scale9Grid = new egret.Rectangle(217, 77, 217, 1),
        e.source = "kappa_travel_pop_bg_png",
        e.width = 651,
        e.x = 0,
        e.y = 43,
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.height = 173,
        e.scale9Grid = new egret.Rectangle(14, 15, 2, 2),
        e.source = "kappa_travel_pop_img1_png",
        e.width = 183,
        e.x = 441,
        e.y = 146,
        e
    },
    i.imgMap_i = function() {
        var e = new eui.Image;
        return this.imgMap = e,
        e.height = 240,
        e.visible = !0,
        e.width = 411,
        e.x = 18,
        e.y = 126,
        e
    },
    i.imgTitle_i = function() {
        var e = new eui.Image;
        return this.imgTitle = e,
        e.x = 106,
        e.y = 0,
        e
    },
    i.btnGet_i = function() {
        var e = new eui.Image;
        return this.btnGet = e,
        e.source = "kappa_travel_pop_btnget_png",
        e.x = 231,
        e.y = 379,
        e
    },
    i._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "REEJI",
        e.size = 15,
        e.text = "莱达特快",
        e.textColor = 6915814,
        e.x = 14,
        e.y = 377,
        e
    },
    i.txtNumber_i = function() {
        var e = new eui.Label;
        return this.txtNumber = e,
        e.fontFamily = "REEJI",
        e.size = 15,
        e.textColor = 12636159,
        e.x = 81,
        e.y = 378,
        e
    },
    i.txtDes_i = function() {
        var e = new eui.Label;
        return this.txtDes = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.textColor = 16777215,
        e.width = 160,
        e.x = 453,
        e.y = 169,
        e
    },
    i.txtMap_i = function() {
        var e = new eui.Label;
        return this.txtMap = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "查理星系-辉之极地-寒月雪峰",
        e.textAlign = "center",
        e.textColor = 12834813,
        e.width = 409,
        e.x = 105,
        e.y = 84,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/KappaTravelSkin.exml"] = window.KappaTravelSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["imgDoing1", "imgFinish1", "groupItem1", "imgDoing2", "imgFinish2", "groupItem2", "imgDoing3", "imgFinish3", "groupItem3", "imgDoing4", "imgFinish4", "groupItem4", "imgDoing5", "imgFinish5", "groupItem5", "btnInfo", "btnHelp", "btnGet", "imgHas"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this._Image1_i(), this._Group1_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Image1_i = function() {
        var e = new eui.Image;
        return e.bottom = 0,
        e.left = 0,
        e.right = 0,
        e.source = "kappa_travel_bg_jpg",
        e.top = 0,
        e
    },
    i._Group1_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = 74.5,
        e.visible = !0,
        e.y = 0,
        e.elementsContent = [this._Image2_i(), this.groupItem1_i(), this.groupItem2_i(), this.groupItem3_i(), this.groupItem4_i(), this.groupItem5_i(), this.btnInfo_i(), this.btnHelp_i(), this.btnGet_i(), this.imgHas_i()],
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "kappa_travel_bg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.groupItem1_i = function() {
        var e = new eui.Group;
        return this.groupItem1 = e,
        e.x = 107,
        e.y = 232,
        e.elementsContent = [this._Image3_i(), this._Image4_i(), this.imgDoing1_i(), this.imgFinish1_i()],
        e
    },
    i._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "kappa_travel_imgitembg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i._Image4_i = function() {
        var e = new eui.Image;
        return e.source = "kappa_travel_imgitem1_png",
        e.x = 15,
        e.y = 18,
        e
    },
    i.imgDoing1_i = function() {
        var e = new eui.Image;
        return this.imgDoing1 = e,
        e.source = "kappa_travel_imgdoing_png",
        e.x = 6,
        e.y = 41,
        e
    },
    i.imgFinish1_i = function() {
        var e = new eui.Image;
        return this.imgFinish1 = e,
        e.source = "kappa_travel_imgfinish_png",
        e.x = 6,
        e.y = 8,
        e
    },
    i.groupItem2_i = function() {
        var e = new eui.Group;
        return this.groupItem2 = e,
        e.x = 261,
        e.y = 232,
        e.elementsContent = [this._Image5_i(), this._Image6_i(), this.imgDoing2_i(), this.imgFinish2_i()],
        e
    },
    i._Image5_i = function() {
        var e = new eui.Image;
        return e.source = "kappa_travel_imgitembg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i._Image6_i = function() {
        var e = new eui.Image;
        return e.source = "kappa_travel_imgitem2_png",
        e.x = 15,
        e.y = 17,
        e
    },
    i.imgDoing2_i = function() {
        var e = new eui.Image;
        return this.imgDoing2 = e,
        e.source = "kappa_travel_imgdoing_png",
        e.x = 6,
        e.y = 41,
        e
    },
    i.imgFinish2_i = function() {
        var e = new eui.Image;
        return this.imgFinish2 = e,
        e.source = "kappa_travel_imgfinish_png",
        e.x = 6,
        e.y = 8,
        e
    },
    i.groupItem3_i = function() {
        var e = new eui.Group;
        return this.groupItem3 = e,
        e.x = 420,
        e.y = 232,
        e.elementsContent = [this._Image7_i(), this._Image8_i(), this.imgDoing3_i(), this.imgFinish3_i()],
        e
    },
    i._Image7_i = function() {
        var e = new eui.Image;
        return e.source = "kappa_travel_imgitembg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i._Image8_i = function() {
        var e = new eui.Image;
        return e.source = "kappa_travel_imgitem3_png",
        e.x = 14,
        e.y = 17,
        e
    },
    i.imgDoing3_i = function() {
        var e = new eui.Image;
        return this.imgDoing3 = e,
        e.source = "kappa_travel_imgdoing_png",
        e.x = 6,
        e.y = 41,
        e
    },
    i.imgFinish3_i = function() {
        var e = new eui.Image;
        return this.imgFinish3 = e,
        e.source = "kappa_travel_imgfinish_png",
        e.x = 6,
        e.y = 8,
        e
    },
    i.groupItem4_i = function() {
        var e = new eui.Group;
        return this.groupItem4 = e,
        e.x = 186,
        e.y = 416,
        e.elementsContent = [this._Image9_i(), this._Image10_i(), this.imgDoing4_i(), this.imgFinish4_i()],
        e
    },
    i._Image9_i = function() {
        var e = new eui.Image;
        return e.source = "kappa_travel_imgitembg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i._Image10_i = function() {
        var e = new eui.Image;
        return e.source = "kappa_travel_imgitem4_png",
        e.x = 13,
        e.y = 16,
        e
    },
    i.imgDoing4_i = function() {
        var e = new eui.Image;
        return this.imgDoing4 = e,
        e.source = "kappa_travel_imgdoing_png",
        e.x = 6,
        e.y = 41,
        e
    },
    i.imgFinish4_i = function() {
        var e = new eui.Image;
        return this.imgFinish4 = e,
        e.source = "kappa_travel_imgfinish_png",
        e.x = 6,
        e.y = 8,
        e
    },
    i.groupItem5_i = function() {
        var e = new eui.Group;
        return this.groupItem5 = e,
        e.x = 340,
        e.y = 416,
        e.elementsContent = [this._Image11_i(), this._Image12_i(), this.imgDoing5_i(), this.imgFinish5_i()],
        e
    },
    i._Image11_i = function() {
        var e = new eui.Image;
        return e.source = "kappa_travel_imgitembg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i._Image12_i = function() {
        var e = new eui.Image;
        return e.source = "kappa_travel_imgitem5_png",
        e.x = 13,
        e.y = 15,
        e
    },
    i.imgDoing5_i = function() {
        var e = new eui.Image;
        return this.imgDoing5 = e,
        e.source = "kappa_travel_imgdoing_png",
        e.x = 6,
        e.y = 41,
        e
    },
    i.imgFinish5_i = function() {
        var e = new eui.Image;
        return this.imgFinish5 = e,
        e.source = "kappa_travel_imgfinish_png",
        e.x = 6,
        e.y = 8,
        e
    },
    i.btnInfo_i = function() {
        var e = new eui.Image;
        return this.btnInfo = e,
        e.source = "kappa_travel_btninfo_png",
        e.x = 838,
        e.y = 408,
        e
    },
    i.btnHelp_i = function() {
        var e = new eui.Image;
        return this.btnHelp = e,
        e.source = "kappa_travel_btnhelp_png",
        e.x = 647,
        e.y = 104,
        e
    },
    i.btnGet_i = function() {
        var e = new eui.Image;
        return this.btnGet = e,
        e.source = "kappa_travel_btnget_png",
        e.x = 650,
        e.y = 497,
        e
    },
    i.imgHas_i = function() {
        var e = new eui.Image;
        return this.imgHas = e,
        e.source = "kappa_travel_imghas_png",
        e.x = 650,
        e.y = 497,
        e
    },
    t
} (eui.Skin);