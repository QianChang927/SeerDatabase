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
petRecruit; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t.skinName = "PetRecruitDetailRecordItemSkin",
            t.cacheAsBitmap = !0,
            t
        }
        return __extends(i, e),
        i.prototype.dataChanged = function() {
            var e, i, n = this.data,
            r = t.PetRecruit.getPetInfo(n.petId);
            1 == r.rank ? (e = 16490241, i = 7) : 2 == r.rank ? (e = 11761151, i = 4) : 3 == r.rank ? (e = 6669311, i = 1) : 4 == r.rank && (e = 12834813, i = 1),
            this.txtName.textColor = this.txtReturn.textColor = e,
            this.txtPool.textColor = 1 == n.poolIndex ? 4187130 : 11761151,
            this.txtPool.text = 1 == n.poolIndex ? "星际招募": "万象招募";
            var o = 1 == n.poolIndex ? "星际密令": "万象密令";
            2 == n.itemType && (o = "限时·" + o),
            this.txtItem.text = o,
            this.txtName.text = r.petName,
            this.txtReturn.text = "已返" + (1 == n.poolIndex ? "星河长明": "万象璀璨") + "x" + i,
            this.txtReturn.visible = 2 == n.handle;
            for (var a = 1; 4 >= a; a++) this["imgIcon" + a].visible = a == r.rank;
            var s = new Date(n.time),
            u = s.getFullYear() + "/" + (s.getMonth() + 1) + "/" + s.getDate() + " ",
            l = s.getHours();
            u += (10 > l ? "0": "") + l + ":";
            var c = s.getMinutes();
            u += (10 > c ? "0": "") + c + ":";
            var h = s.getSeconds();
            u += (10 > h ? "0": "") + h,
            this.txtTime.text = u
        },
        i
    } (eui.ItemRenderer);
    t.RecordItem = e,
    __reflect(e.prototype, "petRecruit.RecordItem")
} (petRecruit || (petRecruit = {}));
var __reflect = this && this.__reflect ||
function(t, e, i) {
    t.__class__ = e,
    i ? i.push(e) : i = [e],
    t.__types__ = t.__types__ ? i.concat(t.__types__) : i
},
petRecruit; !
function(t) {
    var e = function() {
        function t() {}
        return t.MAIN_PANEL = "petRecruit.MainPanel",
        t.DETAIL_PANEL = "petRecruit.DetailPanel",
        t.RESULT_PANEL = "petRecruit.ResultPanel",
        t.MALL_PANEL = "petRecruit.MallPanel",
        t
    } ();
    t.PanelConst = e,
    __reflect(e.prototype, "petRecruit.PanelConst");
    var i = function() {
        function t() {}
        return t.numPools = 2,
        t
    } ();
    t.ConfigConst = i,
    __reflect(i.prototype, "petRecruit.ConfigConst");
    var n = function() {
        function t() {}
        return t.CMD = 45788,
        t.COMMON_SUM_RECRUIT = 120710,
        t.LIMIT_SUM_RECRUIT = 109713,
        t.ARR_USUAL_PET_ID = [109716, 109717, 109718, 109719, 109720],
        t.ARR_TIME_LIMIT_PET_ID = [109721, 109722, 109723, 109724, 109725],
        t.CUR_STATE = 109715,
        t.RETURN_STATE = 109726,
        t.GET_STATE = 109727,
        t
    } ();
    t.AttrConst = n,
    __reflect(n.prototype, "petRecruit.AttrConst");
    var r = function() {
        function t() {}
        return t.BMG = "resource/sound/pet_recruit/bgm.mp3",
        t.EFFECT_URL_1 = "resource/sound/pet_recruit/effect1.mp3",
        t.EFFECT_URL_2 = "resource/sound/pet_recruit/effect2.mp3",
        t
    } ();
    t.MusicConst = r,
    __reflect(r.prototype, "petRecruit.MusicConst")
} (petRecruit || (petRecruit = {}));
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
petRecruit; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.skinName = "PetRecruitDetailItemSkin",
            e.cacheAsBitmap = !0,
            e
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            var t = this;
            this.groupPet.addEventListener(egret.TouchEvent.TOUCH_TAP,
            function() {
                ModuleManager.showModule("petManualInfo", ["pet_info_manual"], {
                    data: t.data.monsterid,
                    type: "pet"
                },
                "", AppDoStyle.NULL)
            },
            this)
        },
        e.prototype.dataChanged = function() {
            this.imgIcon.source = ClientConfig.getPetHeadPath(this.data.monsterid),
            this.txtName.text = StringUtil.parseStrLimitLen(this.data.monstername, 6);
            var t;
            1 == this.data.kind ? t = "ss": 2 == this.data.kind ? t = "s": 3 == this.data.kind ? t = "a": 4 == this.data.kind ? t = "b": console.error("info error" + this.data),
            this.imgRect.source = "pet_recruit_detail_item_img" + t + "rect_png",
            this.imgLevel.source = "pet_recruit_result_item_img" + t + "level_png"
        },
        e
    } (eui.ItemRenderer);
    t.DetailItem = e,
    __reflect(e.prototype, "petRecruit.DetailItem")
} (petRecruit || (petRecruit = {}));
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
petRecruit; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.skinName = "MallItemItemSkin",
            e.cacheAsBitmap = !0,
            e
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            var t = this;
            this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this),
            ImageButtonUtil.add(this.btnBuy,
            function() {
                var e = {};
                e.ins = t.data,
                e.ins.coinid = 1723169,
                e.ins.price = e.ins.productPrice,
                e.caller = t,
                e.callBack = function(e, i) {
                    t.buy(i)
                },
                ModuleManager.showModuleByID(1, e, AppDoStyle.NULL)
            },
            this, !1),
            ImageButtonUtil.add(this.imgIcon,
            function() {
                tipsPop.TipsPop.openItemPop({
                    id: t.itemId
                })
            },
            this)
        },
        e.prototype.destroy = function() {
            ImageButtonUtil.removeAll(this),
            this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this)
        },
        e.prototype.dataChanged = function() {
            this.imgCoin.source = ClientConfig.getItemIcon(1723169),
            this.txtPrice.text = this.data.productPrice,
            this.itemId = +(this.data.productID + "").split("_")[0],
            this.imgIcon.source = ClientConfig.getItemIcon(this.itemId),
            1 == this.data.type ? (this.txtNum.text = "x1", this.txtName.text = StringUtil.parseStrLimitLen(this.data.productName, 9)) : 2 == this.data.type && (this.txtNum.text = "x" + this.data.productName.split("*")[1], this.txtName.text = StringUtil.parseStrLimitLen(this.data.productName.split("*")[0], 9))
        },
        e.prototype.buy = function(t) {
            var e = this;
            DisplayUtil.setEnabled(this.btnBuy, !1),
            KTool.doExchange(this.data.exchangeId, t,
            function() {
                DisplayUtil.setEnabled(e.btnBuy, !0)
            },
            function() {
                DisplayUtil.setEnabled(e.btnBuy, !0)
            })
        },
        e
    } (eui.ItemRenderer);
    t.MallItemItem = e,
    __reflect(e.prototype, "petRecruit.MallItemItem")
} (petRecruit || (petRecruit = {}));
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
petRecruit; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.skinName = "MallPetItemSkin",
            e.cacheAsBitmap = !0,
            e
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this),
            this.addEventListener(egret.Event.ADDED_TO_STAGE, this.addEvent, this)
        },
        e.prototype.destroy = function() {
            ImageButtonUtil.removeAll(this)
        },
        e.prototype.addEvent = function() {
            var t = this;
            ImageButtonUtil.removeAll(this),
            ImageButtonUtil.add(this.imgPet,
            function() {
                ModuleManager.showModule("petManualInfo", ["pet_info_manual"], {
                    data: t.petId,
                    type: "pet"
                },
                "", AppDoStyle.NULL)
            },
            this, !1, !1),
            ImageButtonUtil.add(this.btnBuy,
            function() {
                var e = {};
                e.ins = t.data,
                e.ins.coinid = 1723169,
                e.ins.price = e.ins.productPrice,
                e.caller = t,
                e.callBack = t.buy,
                ModuleManager.showModuleByID(1, e, AppDoStyle.NULL)
            },
            this, !1)
        },
        e.prototype.dataChanged = function() {
            this.petId = +(this.data.productID + "").split("_")[0],
            this.imgPet.source = ClientConfig.getPetHalfIcon(this.petId),
            this.txtName.text = this.data.productName,
            this.imgCoin.source = ClientConfig.getItemIcon(1723169),
            this.groupHas.visible = this.data.hasBuy,
            this.btnBuy.visible = !this.data.hasBuy,
            this.txtPrice.text = this.data.productPrice,
            this.txtStrict.text = "限兑：" + +this.data.hasBuy + "/1"
        },
        e.prototype.buy = function() {
            var t = this;
            DisplayUtil.setEnabled(this.btnBuy, !1),
            KTool.doExchange(this.data.exchangeId, 1,
            function() {
                DisplayUtil.setEnabled(t.btnBuy, !0),
                t.data.hasBuy = !0,
                t.dataChanged()
            },
            function() {
                DisplayUtil.setEnabled(t.btnBuy, !0)
            })
        },
        e
    } (eui.ItemRenderer);
    t.MallPetItem = e,
    __reflect(e.prototype, "petRecruit.MallPetItem")
} (petRecruit || (petRecruit = {}));
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
                u(n.next(t))
            } catch(e) {
                o(e)
            }
        }
        function s(t) {
            try {
                u(n["throw"](t))
            } catch(e) {
                o(e)
            }
        }
        function u(t) {
            t.done ? r(t.value) : new i(function(e) {
                e(t.value)
            }).then(a, s)
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
            if (r = 1, o && (a = o[2 & i[0] ? "return": i[0] ? "throw": "next"]) && !(a = a.call(o, i[1])).done) return a;
            switch (o = 0, a && (i = [0, a.value]), i[0]) {
            case 0:
            case 1:
                a = i;
                break;
            case 4:
                return u.label++,
                {
                    value: i[1],
                    done: !1
                };
            case 5:
                u.label++,
                o = i[1],
                i = [0];
                continue;
            case 7:
                i = u.ops.pop(),
                u.trys.pop();
                continue;
            default:
                if (a = u.trys, !(a = a.length > 0 && a[a.length - 1]) && (6 === i[0] || 2 === i[0])) {
                    u = 0;
                    continue
                }
                if (3 === i[0] && (!a || i[1] > a[0] && i[1] < a[3])) {
                    u.label = i[1];
                    break
                }
                if (6 === i[0] && u.label < a[1]) {
                    u.label = a[1],
                    a = i;
                    break
                }
                if (a && u.label < a[2]) {
                    u.label = a[2],
                    u.ops.push(i);
                    break
                }
                a[2] && u.ops.pop(),
                u.trys.pop();
                continue
            }
            i = e.call(t, u)
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
    var r, o, a, s, u = {
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
petRecruit; !
function(t) {
    var e = function(e) {
        function i(i) {
            var n = e.call(this) || this;
            return n.curParam = i,
            n.initPetInfos(),
            n.service.setValues([t.AttrConst.COMMON_SUM_RECRUIT, t.AttrConst.LIMIT_SUM_RECRUIT].concat(t.AttrConst.ARR_USUAL_PET_ID, t.AttrConst.ARR_TIME_LIMIT_PET_ID, [t.AttrConst.CUR_STATE, t.AttrConst.GET_STATE, t.AttrConst.RETURN_STATE])),
            n.init([{
                panelName: t.PanelConst.MAIN_PANEL,
                isMain: !0
            },
            {
                panelName: t.PanelConst.DETAIL_PANEL
            }]),
            n
        }
        return __extends(i, e),
        i.prototype.initialized = function() {
            var e = this,
            i = SpineUtil.createAnimate("chouka");
            return i = SpineUtil.createAnimate("jinglingzhaomu_lan"),
            i = SpineUtil.createAnimate("jinglingzhaomu_zi"),
            i = SpineUtil.createAnimate("jinglingzhaomu_fanpaiguodu"),
            this.curParam && "MALL" == this.curParam.panelName ? void(this.curParam.mallMenu ? this.service.openPanel(t.PanelConst.MALL_PANEL, this.curParam.mallMenu) : this.service.openPanel(t.PanelConst.MALL_PANEL)) : void this.service.updateValues().then(function() {
                var i = e.service.getValue(t.AttrConst.CUR_STATE);
                1 == (255 & i) ? e.service.openPanel(t.PanelConst.RESULT_PANEL, {
                    poolIndex: 1,
                    times: 1
                }) : 2 == (255 & i) ? e.service.openPanel(t.PanelConst.RESULT_PANEL, {
                    poolIndex: 1,
                    times: 10
                }) : 1 == (i >> 8 & 255) ? e.service.openPanel(t.PanelConst.RESULT_PANEL, {
                    poolIndex: 2,
                    times: 1
                }) : 2 == (i >> 8 & 255) ? e.service.openPanel(t.PanelConst.RESULT_PANEL, {
                    poolIndex: 2,
                    times: 10
                }) : e.service.backToMainPanel()
            })
        },
        i.getPetInfo = function(t) {
            for (var e = {},
            n = 0,
            r = i.commonPool; n < r.length; n++) {
                var o = r[n];
                if (o.monsterid == t) {
                    e.petId = o.monsterid,
                    e.petName = o.monstername,
                    e.rank = o.kind,
                    e.isJustOne = 1 == o.isjustone;
                    break
                }
            }
            return e
        },
        i.hasPet = function(t) {
            return __awaiter(this, void 0, void 0,
            function() {
                return __generator(this,
                function(e) {
                    return [2, new Promise(function(e, i) {
                        SeerbookCollectionController.getinstance().getHavePet([t],
                        function(i) {
                            e(SeerbookCollectionController.getinstance().havePet(t))
                        })
                    })]
                })
            })
        },
        i.prototype.initPetInfos = function() {
            var t = config.xml.getRes("Monsterpool").Root;
            i.commonPool = t.Pool[0].item,
            i.limitPool = t.Pool[1].item.concat(t.Pool[0].item),
            i.petKindCount = [0, 0, 0, 0];
            for (var e = 0; e < i.commonPool.length; e++) 1 == i.commonPool[e].kind ? i.petKindCount[0]++:2 == i.commonPool[e].kind ? i.petKindCount[1]++:3 == i.commonPool[e].kind ? i.petKindCount[2]++:4 == i.commonPool[e].kind && i.petKindCount[3]++
        },
        i.prototype.destroy = function() {
            e.prototype.destroy.call(this),
            SoundManager.loadSound().then(function() {
                SoundManager.playMusic()
            })
        },
        i.petKindCount = [0, 0, 0, 0],
        i
    } (BasicMultPanelModule);
    t.PetRecruit = e,
    __reflect(e.prototype, "petRecruit.PetRecruit")
} (petRecruit || (petRecruit = {}));
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
                u(n.next(t))
            } catch(e) {
                o(e)
            }
        }
        function s(t) {
            try {
                u(n["throw"](t))
            } catch(e) {
                o(e)
            }
        }
        function u(t) {
            t.done ? r(t.value) : new i(function(e) {
                e(t.value)
            }).then(a, s)
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
            if (r = 1, o && (a = o[2 & i[0] ? "return": i[0] ? "throw": "next"]) && !(a = a.call(o, i[1])).done) return a;
            switch (o = 0, a && (i = [0, a.value]), i[0]) {
            case 0:
            case 1:
                a = i;
                break;
            case 4:
                return u.label++,
                {
                    value: i[1],
                    done: !1
                };
            case 5:
                u.label++,
                o = i[1],
                i = [0];
                continue;
            case 7:
                i = u.ops.pop(),
                u.trys.pop();
                continue;
            default:
                if (a = u.trys, !(a = a.length > 0 && a[a.length - 1]) && (6 === i[0] || 2 === i[0])) {
                    u = 0;
                    continue
                }
                if (3 === i[0] && (!a || i[1] > a[0] && i[1] < a[3])) {
                    u.label = i[1];
                    break
                }
                if (6 === i[0] && u.label < a[1]) {
                    u.label = a[1],
                    a = i;
                    break
                }
                if (a && u.label < a[2]) {
                    u.label = a[2],
                    u.ops.push(i);
                    break
                }
                a[2] && u.ops.pop(),
                u.trys.pop();
                continue
            }
            i = e.call(t, u)
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
    var r, o, a, s, u = {
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
petRecruit; !
function(t) {
    var e = function(e) {
        function i(t, i, n) {
            var r = e.call(this) || this;
            return r.skinName = "PetRecruitResultItemSkin",
            r.type = t,
            r.poolIndex = i,
            r.index = n,
            r
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            this.groupHandle.visible = 2 == this.type,
            this.groupReturn.visible = this.groupGet.visible = !1,
            this.addEvent()
        },
        i.prototype.addEvent = function() {
            var e = this;
            ImageButtonUtil.add(this.btnGet,
            function() {
                var i = e.index;
                i = ((i << 8) + 1 << 8) + e.poolIndex,
                AwardManager.pause(),
                SocketConnection.sendByQueue(t.AttrConst.CMD, [4, i],
                function() {
                    e.setGetState(!0),
                    egret.setTimeout(function() {
                        AwardManager.petList.splice(0),
                        AwardManager.resume()
                    },
                    null, 200)
                })
            },
            this),
            ImageButtonUtil.add(this.btnReturn,
            function() {
                var i = e.index;
                i = ((i << 8) + 2 << 8) + e.poolIndex,
                SocketConnection.sendByQueue(t.AttrConst.CMD, [4, i],
                function() {
                    e.setReturnState(!0)
                })
            },
            this),
            this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this)
        },
        i.prototype.destroy = function() {
            ImageButtonUtil.removeAll(this),
            this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this)
        },
        i.prototype.setPet = function(e, i) {
            return __awaiter(this, void 0, void 0,
            function() {
                var i, n, r;
                return __generator(this,
                function(o) {
                    switch (o.label) {
                    case 0:
                        return this.info = t.PetRecruit.getPetInfo(e),
                        this.txtName.text = StringUtil.parseStrLimitLen(this.info.petName, 8),
                        this.imgIcon.source = ClientConfig.getPetHeadPath(e),
                        i = this.imgNew,
                        [4, t.PetRecruit.hasPet(e)];
                    case 1:
                        return i.visible = !o.sent(),
                        1 == this.info.rank ? (n = "ss", r = "jinkaxunhuan") : 2 == this.info.rank ? (n = "s", r = "zikaxunhuan") : 3 == this.info.rank ? (n = "a", r = "lankaxunhuan") : 4 == this.info.rank ? (n = "b", r = "baikaxunhuan") : console.error("info error" + this.info),
                        this.imgLevel.source = "pet_recruit_result_item_img" + n + "level_png",
                        [4, this.playAni(e)];
                    case 2:
                        return o.sent(),
                        this.ani.play(r, 0),
                        this.groupReturn.visible ? [2] : (this.groupGet.visible = !0, this.groupGet.alpha = 0, egret.Tween.get(this.groupGet).to({
                            alpha: 1
                        },
                        400), this.groupGet.parent || this.addChild(this.groupGet), [2])
                    }
                })
            })
        },
        i.prototype.setReturnState = function(t) {
            if (t) {
                this.groupReturn.visible = !0,
                this.groupReturn.parent || this.addChild(this.groupReturn),
                this.groupAni.visible = !1,
                this.groupGet.visible = !1,
                this.groupGet.parent && this.removeChild(this.groupGet);
                var e = void 0,
                i = void 0;
                1 == this.info.rank ? (e = "ss", i = 7) : 2 == this.info.rank ? (e = "s", i = 4) : 3 == this.info.rank ? (e = "a", i = 1) : 4 == this.info.rank ? (e = "b", i = 1) : console.error("info error" + this.info),
                this.imgReturnBG.source = "pet_recruit_result_item_fh" + e + "_kb_png",
                this.txtItem.text = (1 == this.poolIndex ? "星河长明": "万象璀璨") + "x" + i,
                this.imgItem.source = ClientConfig.getItemIcon(1 == this.poolIndex ? 1723169 : 1723170)
            }
        },
        i.prototype.setGetState = function(t) {
            t && (DisplayUtil.setEnabled(this.btnGet, !1, !0), DisplayUtil.setEnabled(this.btnReturn, !1, !0), this.imgNew.visible = !1)
        },
        i.prototype.playAni = function(e) {
            return __awaiter(this, void 0, void 0,
            function() {
                var i = this;
                return __generator(this,
                function(n) {
                    return this.groupAni.removeChildren(),
                    [2, new Promise(function(n, r) {
                        var o = t.PetRecruit.getPetInfo(e).rank;
                        i.ani = SpineUtil.createAnimate("chouka"),
                        i.groupAni.addChild(i.ani);
                        var a;
                        switch (o) {
                        case 1:
                            a = "jinkafanpai";
                            break;
                        case 2:
                            a = "zikafanpai";
                            break;
                        case 3:
                            a = "lankafanpai";
                            break;
                        case 4:
                            a = "baikafanpai";
                            break;
                        default:
                            console.error("error rank")
                        }
                        i.ani.play(a, 1),
                        egret.setTimeout(function() {
                            n()
                        },
                        null, 2 >= o ? 1250 : 1200)
                    })]
                })
            })
        },
        i
    } (eui.Component);
    t.ResultItem = e,
    __reflect(e.prototype, "petRecruit.ResultItem")
} (petRecruit || (petRecruit = {}));
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
petRecruit; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t.groupName = "PET_RECRUIT_DETAIL",
            t.skinName = "PetRecruitDetailPanelSkin",
            t
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            var t = this;
            this.addEvent(),
            this.init(),
            this.listPool.parent.scrollPolicyH = eui.ScrollPolicy.OFF,
            StatLogger.log("精灵招募系统", "星际招募", "点击【星际招募】详情按钮（H5）"),
            this.initBtnClose("pet_recruit_detial_panel_imgtitle_png", this,
            function() {
                t.service.backToMainPanel()
            },
            this),
            this.createMenu(),
            this.grpContent.x = this.grpContent.x + DeviceInfoManager.adapterOffSetX,
            egret.lifecycle.stage.stageWidth > 1136 + 2 * DeviceInfoManager.adapterOffSetX + 137 && (this.grpContent.width = 1071)
        },
        i.prototype.beforeAdd = function(t) {
            var e = this;
            egret.setTimeout(function() {
                e.poolIndex = t,
                e.setIndex()
            },
            this, 0)
        },
        i.prototype.createMenu = function() {
            var t = new MenuData;
            t.groupName = this.groupName,
            t["default"] = 1,
            t.root = [1, 2, 3],
            t.data = {
                1 : {
                    title: "本期奖池"
                },
                2 : {
                    title: "规则说明"
                },
                3 : {
                    title: "招募记录"
                }
            },
            this.menu = Menu.createMenu(t, this.menuGroup),
            EventManager.addEventListener(BaseMenuEvent.BASE_MENU_SELECT_CHANGE_ + this.groupName, this.setIndex, this)
        },
        i.prototype.init = function() {
            this.resize(0),
            this.listPool.itemRenderer = t.DetailItem,
            this.dataProvider = new eui.ArrayCollection,
            this.listPool.dataProvider = this.dataProvider,
            this.arrRate = [],
            this.listRecord.itemRenderer = t.RecordItem,
            this.updateRecord(),
            this.txt1.textFlow = (new egret.HtmlTextParser).parse("星际招募奖池（永久开放）：包含" + t.PetRecruit.petKindCount[0] + "个SS级精灵，" + t.PetRecruit.petKindCount[1] + "个S级精灵，" + t.PetRecruit.petKindCount[2] + "个A级精灵，" + t.PetRecruit.petKindCount[3] + "个B级精灵，招募需要道具【星际密令】，【星际密令】<font  color= 0x40E3FB>永久保留</font>；");
            var e = "1）SS/S级精灵招募概率是<font  color= 0x40E3FB>逐渐递增</font>的。\n";
            e += "基础招募概率为0.5%（<font  color= 0x40E3FB>不含任何保底</font>），之后每连续抽取20次，<font  color= 0x40E3FB>招募概率都会随之上升</font>，直到招募出SS/S级精灵，概率会重置为0.5% ，具体如下：\n",
            e += "1≤招募次数≤59时，<font  color= 0x40E3FB>SS/S级精灵平均产出概率为1.7%</font>\n",
            e += "招募次数=60时，SS/S级精灵产出<font  color= 0x40E3FB>概率为100%</font>\n",
            e += "抽到SS/S时，招募次数会重置为0\n",
            e += "SS/S精灵奖池中：SS级精灵占40%，S级精灵占60%\n",
            e += "2）A级精灵：\n",
            e += "A级精灵招募概率固定为23.5% \n",
            e += "3）B级精灵：\n",
            e += "B级精灵基础概率为76%，随着招募次数的上升，获得B级精灵的概率会随之下降。\n",
            e += "*除去限定SS级精灵，每个级别所有精灵均分招募概率",
            this.txt2.textFlow = (new egret.HtmlTextParser).parse(e),
            e = "1）十连抽保底获得一只A或A级以上精灵\n",
            e += "2）每个奖池60抽必得SS/S级精灵，两种奖池分开独立计数\n",
            e += "3）星际招募SS/S概率<font  color= 0x40E3FB>每月1号重置为基础概率</font>；",
            this.txt3.textFlow = (new egret.HtmlTextParser).parse(e),
            e = "星际招募的精灵可以返还道具【星河长明】（<font  color= 0x40E3FB>永久保留</font>）\n",
            e += "道具可以在商店中兑换绝版精灵、培养道具等。\n",
            this.txt4.textFlow = (new egret.HtmlTextParser).parse(e)
        },
        i.prototype.addEvent = function() {
            var t = this;
            ImageButtonUtil.add(this.btnBUp,
            function() {
                t.addRate(1)
            },
            this, !1, !1),
            ImageButtonUtil.add(this.btnAUp,
            function() {
                t.addRate(2)
            },
            this, !1, !1),
            ImageButtonUtil.add(this.btnSUp,
            function() {
                t.addRate(3)
            },
            this, !1, !1),
            ImageButtonUtil.add(this.btnSSUp,
            function() {
                t.addRate(4)
            },
            this, !1, !1),
            ImageButtonUtil.add(this.btnBDown,
            function() {
                t.removeRate(1)
            },
            this, !1, !1),
            ImageButtonUtil.add(this.btnADown,
            function() {
                t.removeRate(2)
            },
            this, !1, !1),
            ImageButtonUtil.add(this.btnSDown,
            function() {
                t.removeRate(3)
            },
            this, !1, !1),
            ImageButtonUtil.add(this.btnSSDown,
            function() {
                t.removeRate(4)
            },
            this, !1, !1),
            ImageButtonUtil.add(this.imgGou,
            function() {
                t.filterNotHas(!1)
            },
            this, !1, !1),
            ImageButtonUtil.add(this.imgGouBG,
            function() {
                t.filterNotHas(!0)
            },
            this, !1, !1),
            this.txtSearch.addEventListener(egret.Event.CHANGE, this.onSearch, this)
        },
        i.prototype.setIndex = function() {
            this.curIndex = this.menu.selectedValue || 1,
            this["init" + this.curIndex]()
        },
        i.prototype.init1 = function() {
            this.txtPool.text = 1 == this.poolIndex ? "星际招募": "万象招募",
            this.groupFilter.visible = this.groupRate.visible = this.scrollerPool.visible = !0,
            this.groupRule.visible = this.groupRecord.visible = !1,
            this.addRate(0),
            this.filterNotHas(!1)
        },
        i.prototype.addRate = function(t) {
            0 == t ? (this.btnBDown.visible = this.btnADown.visible = this.btnSDown.visible = this.btnSSDown.visible = !0, this.btnBUp.visible = this.btnAUp.visible = this.btnSUp.visible = this.btnSSUp.visible = !1, this.arrRate[1] = this.arrRate[2] = this.arrRate[3] = this.arrRate[4] = !0) : 1 == t ? (this.btnBDown.visible = !0, this.btnBUp.visible = !1, this.arrRate[4] = !0) : 2 == t ? (this.btnADown.visible = !0, this.btnAUp.visible = !1, this.arrRate[3] = !0) : 3 == t ? (this.btnSDown.visible = !0, this.btnSUp.visible = !1, this.arrRate[2] = !0) : 4 == t && (this.btnSSDown.visible = !0, this.btnSSUp.visible = !1, this.arrRate[1] = !0),
            this.refreshPool()
        },
        i.prototype.resize = function(t) {
            void 0 === t && (t = 50),
            egret.setTimeout(function() {},
            this, t)
        },
        i.prototype.removeRate = function(t) {
            0 == t ? (this.btnBDown.visible = this.btnADown.visible = this.btnSDown.visible = this.btnSSDown.visible = !1, this.btnBUp.visible = this.btnAUp.visible = this.btnSUp.visible = this.btnSSUp.visible = !0, this.arrRate[1] = this.arrRate[2] = this.arrRate[3] = this.arrRate[4] = !1) : 1 == t ? (this.btnBDown.visible = !1, this.btnBUp.visible = !0, this.arrRate[4] = !1) : 2 == t ? (this.btnADown.visible = !1, this.btnAUp.visible = !0, this.arrRate[3] = !1) : 3 == t ? (this.btnSDown.visible = !1, this.btnSUp.visible = !0, this.arrRate[2] = !1) : 4 == t && (this.btnSSDown.visible = !1, this.btnSSUp.visible = !0, this.arrRate[1] = !1),
            this.refreshPool()
        },
        i.prototype.refreshPool = function(e) {
            var i = this;
            void 0 === e && (e = !1);
            var n = (1 == this.poolIndex ? t.PetRecruit.commonPool: t.PetRecruit.limitPool).filter(function(t) {
                return i.arrRate[t.kind]
            },
            this);
            this.isFilterHas && (n = n.filter(function(t) {
                return ! PetManager.hasPet(t.monsterid)
            },
            this)),
            e && this.txtSearch.text ? n = n.filter(function(t) {
                return SearchUtil.isMatch(i.txtSearch.text, t.monstername + "") || SearchUtil.isMatch(i.txtSearch.text, t.monsterid + "")
            },
            this) : this.txtSearch.text = "",
            this.dataProvider.source = n
        },
        i.prototype.filterNotHas = function(t) {
            t ? this.imgGou.visible = !0 : this.imgGou.visible = !1,
            this.isFilterHas = t,
            this.refreshPool()
        },
        i.prototype.onSearch = function() {
            this.isFilterHas && this.filterNotHas(!1),
            this.btnBDown.visible = this.btnADown.visible = this.btnSDown.visible = this.btnSSDown.visible = !0,
            this.btnBUp.visible = this.btnAUp.visible = this.btnSUp.visible = this.btnSSUp.visible = !1,
            this.arrRate[1] = this.arrRate[2] = this.arrRate[3] = this.arrRate[4] = !0,
            this.refreshPool(!0)
        },
        i.prototype.init2 = function() {
            this.groupFilter.visible = this.groupRate.visible = this.scrollerPool.visible = this.groupRecord.visible = !1,
            this.groupRule.visible = !0
        },
        i.prototype.init3 = function() {
            this.groupFilter.visible = this.groupRate.visible = this.scrollerPool.visible = this.groupRule.visible = !1,
            this.groupRecord.visible = !0
        },
        i.prototype.updateRecord = function() {
            var t = this;
            SocketConnection.sendByQueue(45816, [5, 20],
            function(e) {
                for (var i = [], n = e.data, r = n.readUnsignedInt(), o = 0; r > o; o++) {
                    var a = {};
                    n.readUnsignedInt();
                    a.petId = n.readUnsignedInt();
                    var s = n.readUnsignedInt();
                    a.poolIndex = Math.floor(s / 100),
                    a.itemType = Math.floor(s % 100 / 10),
                    a.handle = s % 10,
                    a.time = 1e3 * n.readUnsignedInt(),
                    i.push(a)
                }
                t.listRecord.dataProvider = new eui.ArrayCollection(i)
            })
        },
        i.prototype.destroy = function() {
            e.prototype.destroy.call(this),
            this.menu && this.menu.destroy()
        },
        i
    } (BasicPanel);
    t.DetailPanel = e,
    __reflect(e.prototype, "petRecruit.DetailPanel")
} (petRecruit || (petRecruit = {}));
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
petRecruit; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t.isSkipAnim = !1,
            t.skinName = "PetRecruitMainPanelSkin",
            t
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            var n = this;
            this.resize(0),
            this.addEvent(),
            e.prototype.initBtnClose.call(this, "pet_recruit_main_panel_imgtitle_png", this,
            function() {
                n.service.closeModule()
            },
            this),
            SoundManager.loadSound(t.MusicConst.BMG).then(function() {
                SoundManager.playMusic()
            });
            var r = FestivalVersionController.getXmlRealTableName("JackPotShop.json");
            config.xml.load(r).then(function() {
                var t = config.xml.getRes(r).root.BlueChipShops;
                n.time.text = "本期兑换:" + t.Openday + "-" + t.Endday + "更新前"
            }),
            this.imgRedPoint.visible = !!HotRedManager.getInstance().getHotRedState(i.HOT_ID),
            HotRedManager.getInstance().registerHotEvent(i.HOT_ID,
            function() {
                n.imgRedPoint.visible = !!HotRedManager.getInstance().getHotRedState(i.HOT_ID)
            },
            this),
            StatLogger.log("精灵招募系统", "星际招募", "点击进入【精灵招募】主界面（H5）"),
            GameInfo.isChecking && (this.groupItem1.visible = !1, this.imgAddItem2.visible = !1),
            egret.localStorage.getItem("petRecruitIsSkipAnim") ? this.isSkipAnim = JSON.parse(egret.localStorage.getItem("petRecruitIsSkipAnim")) : egret.localStorage.setItem("petRecruitIsSkipAnim", "" + this.isSkipAnim),
            this.imgSkip.visible = this.isSkipAnim
        },
        i.prototype.destroy = function() {
            this.service.unregisterItems(this),
            HotRedManager.getInstance().removeRegisterHotEventAll(this),
            e.prototype.destroy.call(this)
        },
        i.prototype.resize = function(t) {
            var e = this;
            void 0 === t && (t = 50),
            egret.setTimeout(function() {
                e.groupAll.width = LevelManager.appLevel.width - 2 * DeviceInfoManager.adapterOffSetX
            },
            this, t)
        },
        i.prototype.addEvent = function() {
            var e = this;
            ImageButtonUtil.add(this.pool1,
            function() {
                e.setIndex(1)
            },
            this, !1, !1),
            ImageButtonUtil.add(this.pool2,
            function() {
                e.setIndex(2)
            },
            this, !1, !1),
            ImageButtonUtil.add(this.btnInfo,
            function() {
                e.service.openPanel(t.PanelConst.DETAIL_PANEL, e.poolIndex)
            },
            this),
            ImageButtonUtil.add(this.btnMall,
            function() {
                HotRedManager.getInstance().clickIcon(i.HOT_ID).then(function() {
                    e.service.openPanel(t.PanelConst.MALL_PANEL)
                })
            },
            this),
            ImageButtonUtil.add(this.btnOne,
            function() {
                e.recruit(1),
                StatLogger.log("精灵招募系统", "星际招募", "点击【招募一次】按钮（H5）")
            },
            this),
            ImageButtonUtil.add(this.btnTen,
            function() {
                e.recruit(10),
                StatLogger.log("精灵招募系统", "星际招募", "点击【招募十次】按钮（H5）")
            },
            this),
            ImageButtonUtil.add(this.imgAddItem2,
            function() {
                BuyProductManager.buyProductBySocket(1 == e.poolIndex ? 258504 : 258505,
                function(t) {
                    SocketConnection.sendByQueue(45788, [e.poolIndex + 10, t])
                },
                e, 1 == e.poolIndex ? 1723167 : 1723168)
            },
            this),
            ImageButtonUtil.add(this.grpSkip,
            function() {
                e.isSkipAnim = !e.isSkipAnim,
                e.imgSkip.visible = e.isSkipAnim,
                egret.localStorage.setItem("petRecruitIsSkipAnim", "" + e.isSkipAnim)
            },
            this)
        },
        i.prototype.recruit = function(e) {
            var i = this,
            n = ItemManager.getNumByID(this.arrItemId[0]),
            r = ItemManager.getNumByID(this.arrItemId[1]);
            if (n >= e || r >= e) {
                var o = 1 == e ? 1 : 2;
                o <<= 8,
                o += 1 == this.poolIndex ? 1 : 2,
                this.btnOne.touchEnabled = this.btnTen.touchEnabled = !1,
                this.btnOne.touchChildren = this.btnTen.touchChildren = !1,
                SocketConnection.sendByQueue(t.AttrConst.CMD, [3, o],
                function() {
                    i.service.updateValues().then(function() {
                        var n = {},
                        r = i.service.getValue(t.AttrConst.CUR_STATE);
                        if (1 == (255 & r)) n.poolIndex = 1,
                        n.times = 1;
                        else if (2 == (255 & r)) n.poolIndex = 1,
                        n.times = 10;
                        else if (1 == (r >> 8 & 255)) n.poolIndex = 2,
                        n.times = 1;
                        else {
                            if (2 != (r >> 8 & 255)) return void console.error("后台数据错误");
                            n.poolIndex = 2,
                            n.times = 10
                        }
                        var o = 1,
                        a = 1 == n.poolIndex ? t.AttrConst.ARR_USUAL_PET_ID: t.AttrConst.ARR_TIME_LIMIT_PET_ID;
                        if (1 == n.times) {
                            var s = i.service.getValue(a[0]);
                            t.PetRecruit.getPetInfo(s).rank <= 2 && (o = 2)
                        } else if (10 == n.times) for (var u = 0; 10 > u; u++) {
                            var s = i.service.getValue(a[Math.floor(u / 2)]) >> (u % 2 == 1 ? 16 : 0) & 65535;
                            if (t.PetRecruit.getPetInfo(s).rank <= 2) {
                                o = 2;
                                break
                            }
                        }
                        if (i.isSkipAnim) i.service.openPanel(t.PanelConst.RESULT_PANEL, {
                            poolIndex: i.poolIndex,
                            times: e,
                            skip: i.isSkipAnim
                        });
                        else {
                            var l = 1 == o ? t.MusicConst.EFFECT_URL_1: t.MusicConst.EFFECT_URL_2;
                            SoundManager.loadSound(l).then(function() {
                                SoundManager.playMusic(1)
                            });
                            var c = 1 == i.poolIndex ? "jinglingzhaomu_lan": "jinglingzhaomu_zi",
                            h = SpineUtil.createAnimate(c);
                            i.groupAni.addChild(h),
                            h.width = h.height = 0,
                            EngineHookManager.repairCanvasRenderDrawMesh();
                            var _ = h.play(c, 1);
                            _.waitLoopEnd().then(function() {
                                egret.setTimeout(function() {
                                    i.groupAni.removeChild(h)
                                },
                                null, 200),
                                i.service.openPanel(t.PanelConst.RESULT_PANEL, {
                                    poolIndex: i.poolIndex,
                                    times: e
                                })
                            })
                        }
                        i.btnOne.touchEnabled = i.btnTen.touchEnabled = !0,
                        i.btnOne.touchChildren = i.btnTen.touchChildren = !0
                    })
                })
            } else BubblerManager.getInstance().showText("道具数量不足。")
        },
        i.prototype.setIndex = function(e) {
            var i = this;
            this.poolIndex = e;
            for (var n = 1; n <= t.ConfigConst.numPools; n++) this["txtName" + n].visible = n == e,
            this["imgTimesBG" + n].visible = n == e,
            this["imgSelected" + n].visible = n == e,
            this.groupUp.visible = 2 == e;
            var r = 1 == this.poolIndex ? "jinglingzhaomu_lan": "jinglingzhaomu_zi",
            o = SpineUtil.createAnimate(r);
            this.groupBG.removeChildren(),
            this.groupBG.addChild(o),
            o.width = o.height = 0,
            o.play("jinglingzhaomu_xunhuan", 0);
            var a = egret.lifecycle.stage.stageWidth,
            s = a / 1136;
            o.scaleX = o.scaleY = s,
            1 == e ? this.arrItemId = [2500003, 1723167] : 2 == e && (this.arrItemId = [0, 1723168]),
            this.service.unregisterItems(this);
            for (var u = function(t) {
                var e = l.arrItemId[t - 1];
                e ? (l["groupItem" + t].visible = !0, l.service.registerItemUpdateForText(e, l["txtNumItem" + t], l), l["imgItemIcon" + t].source = ClientConfig.getItemIcon(e), ImageButtonUtil.remove(l["imgItemIcon" + t]), ImageButtonUtil.add(l["imgItemIcon" + t],
                function() {
                    tipsPop.TipsPop.openItemPop({
                        id: e
                    })
                },
                l)) : l["groupItem" + t].visible = !1
            },
            l = this, n = 1; n <= t.ConfigConst.numPools; n++) u(n);
            GameInfo.isChecking && (this.groupItem1.visible = !1);
            var c = ItemManager.getNumByID(this.arrItemId[0]);
            c >= 10 ? (this.imgOneCoinIcon.source = this.imgItemIcon1.source, this.imgTenCoinIcon.source = this.imgItemIcon1.source) : c >= 1 ? (this.imgOneCoinIcon.source = this.imgItemIcon1.source, this.imgTenCoinIcon.source = this.imgItemIcon2.source) : (this.imgOneCoinIcon.source = this.imgItemIcon2.source, this.imgTenCoinIcon.source = this.imgItemIcon2.source),
            this.groupEndLine.visible = 2 == e,
            this.service.updateSomeValues([t.AttrConst.COMMON_SUM_RECRUIT, t.AttrConst.LIMIT_SUM_RECRUIT]).then(function() {
                1 == e ? i.txtTimes.text = i.service.getValue(t.AttrConst.COMMON_SUM_RECRUIT) + "/60": 2 == e && (i.txtTimes.text = i.service.getValue(t.AttrConst.LIMIT_SUM_RECRUIT) + "/60")
            })
        },
        i.prototype.update = function() {
            this.setIndex(this.poolIndex || 1)
        },
        i.HOT_ID = 1001,
        i
    } (BasicPanel);
    t.MainPanel = e,
    __reflect(e.prototype, "petRecruit.MainPanel")
} (petRecruit || (petRecruit = {}));
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
                u(n.next(t))
            } catch(e) {
                o(e)
            }
        }
        function s(t) {
            try {
                u(n["throw"](t))
            } catch(e) {
                o(e)
            }
        }
        function u(t) {
            t.done ? r(t.value) : new i(function(e) {
                e(t.value)
            }).then(a, s)
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
            if (r = 1, o && (a = o[2 & i[0] ? "return": i[0] ? "throw": "next"]) && !(a = a.call(o, i[1])).done) return a;
            switch (o = 0, a && (i = [0, a.value]), i[0]) {
            case 0:
            case 1:
                a = i;
                break;
            case 4:
                return u.label++,
                {
                    value: i[1],
                    done: !1
                };
            case 5:
                u.label++,
                o = i[1],
                i = [0];
                continue;
            case 7:
                i = u.ops.pop(),
                u.trys.pop();
                continue;
            default:
                if (a = u.trys, !(a = a.length > 0 && a[a.length - 1]) && (6 === i[0] || 2 === i[0])) {
                    u = 0;
                    continue
                }
                if (3 === i[0] && (!a || i[1] > a[0] && i[1] < a[3])) {
                    u.label = i[1];
                    break
                }
                if (6 === i[0] && u.label < a[1]) {
                    u.label = a[1],
                    a = i;
                    break
                }
                if (a && u.label < a[2]) {
                    u.label = a[2],
                    u.ops.push(i);
                    break
                }
                a[2] && u.ops.pop(),
                u.trys.pop();
                continue
            }
            i = e.call(t, u)
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
    var r, o, a, s, u = {
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
petRecruit; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t.groupName = "PET_RECRUIT_MALL",
            t.defaultMenu = 1,
            t.skinName = "PetRecruitMallPanelSkin",
            t
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            var t = this;
            this.addEvent(),
            this.initData().then(function() {
                t.init(),
                t.createMenu()
            }),
            StatLogger.log("精灵招募系统", "星际招募", "点击【星河商店】页签（H5）"),
            this.grpContent.x = this.grpContent.x + DeviceInfoManager.adapterOffSetX,
            this.initBtnClose("pet_recruit_mall_panel_imgtitle_png", this,
            function() {
                t.service.backToMainPanel()
            },
            this)
        },
        i.prototype.createMenu = function() {
            var t = new MenuData;
            t.groupName = this.groupName,
            t["default"] = this.defaultMenu,
            t.root = [1, 2, 3],
            t.data = {
                1 : {
                    title: "精灵兑换"
                },
                2 : {
                    title: "物品兑换"
                },
                3 : {
                    title: "因子兑换"
                }
            },
            this.menu = Menu.createMenu(t, this.menuGroup),
            EventManager.addEventListener(BaseMenuEvent.BASE_MENU_SELECT_CHANGE_ + this.groupName, this.setIndex, this)
        },
        i.prototype.destroy = function() {
            this.service.unregisterItems(this),
            e.prototype.destroy.call(this),
            this.menu && this.menu.destroy(),
            EventManager.removeAll(this)
        },
        i.prototype.init = function() {
            this.resize(0),
            this.adaptLeftContent(this.grpContent),
            this.dataProvider = new eui.ArrayCollection,
            this.list.dataProvider = this.dataProvider,
            this.imgCoin.source = ClientConfig.getItemIcon(1723169),
            this.service.registerItemUpdateForText(1723169, this.txtCoin, this);
            var t = FestivalVersionController.getXmlRealTableName("JackPotShop.json"),
            e = config.xml.getRes(t).root.BlueChipShops.Endtime;
            this.txtEndLine.textFlow = (new egret.HtmlTextParser).parse("本期<font color= 0xd68fff>【星河长明】</font>轮换将结束于：" + e)
        },
        i.prototype.initData = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var t = this;
                return __generator(this,
                function(e) {
                    return [2, new Promise(function(e, i) {
                        var n = FestivalVersionController.getXmlRealTableName("JackPotShop.json");
                        config.xml.load(n).then(function() {
                            t.shopConfig = config.xml.getAnyRes(n).root.BlueChipShops.BulechipShop,
                            e()
                        })
                    })]
                })
            })
        },
        i.prototype.beforeAdd = function(t) {
            t && (this.defaultMenu = t),
            this.curIndex && this.setIndex()
        },
        i.prototype.resize = function(t) {
            void 0 === t && (t = 50)
        },
        i.prototype.addEvent = function() {
            ImageButtonUtil.add(this.imgCoin,
            function() {
                tipsPop.TipsPop.openItemPop({
                    id: 1723169
                })
            },
            this)
        },
        i.prototype.setIndex = function() {
            var t = this.menu.selectedValue;
            this.curIndex = t,
            1 == t ? egret.lifecycle.stage.stageWidth > 1136 + 2 * DeviceInfoManager.adapterOffSetX + 205 && (this.grpContent.width = 1113) : egret.lifecycle.stage.stageWidth > 1136 + 2 * DeviceInfoManager.adapterOffSetX + 166 && (this.grpContent.width = 1074),
            this["init" + t]()
        },
        i.prototype.filterTime = function(t) {
            return t.filter(function(t) {
                var e = t.Opentime + "";
                e = e.substring(0, 4) + "/" + e.substring(4, 6) + "/" + e.substring(6, 8);
                var i = t.Endtime + "";
                i = i.substring(0, 4) + "/" + i.substring(4, 6) + "/" + i.substring(6, 8);
                var n = SystemTimerManager.sysBJDate.getTime(),
                r = new Date(e).getTime(),
                o = new Date(i).getTime();
                return n >= r && o >= n
            })
        },
        i.prototype.init1 = function() {
            var e = this,
            i = this.shopConfig.filter(function(t) {
                return 1 == +t.shopkind
            });
            i = this.filterTime(i);
            for (var n = [], r = 0, o = i; r < o.length; r++) {
                var a = o[r],
                s = +a.forever;
                n.push(s),
                this.service.setValue(s, 0, core.constant.ValueType.FOREVER)
            }
            this.service.updateSomeValues(n).then(function() {
                for (var n = 0,
                r = i; n < r.length; n++) {
                    var o = r[n];
                    o.hasBuy = e.service.getValue(o.forever)
                }
                e.list.itemRenderer = t.MallPetItem,
                e.list.dataProvider = new eui.ArrayCollection(i)
            })
        },
        i.prototype.init2 = function() {
            for (var e = this.shopConfig.filter(function(t) {
                return 2 == +t.shopkind
            }), i = 0, n = e; i < n.length; i++) {
                var r = n[i];
                r.type = 1
            }
            this.list.itemRenderer = t.MallItemItem,
            this.list.dataProvider = new eui.ArrayCollection(e)
        },
        i.prototype.init3 = function() {
            var e = this.shopConfig.filter(function(t) {
                return 5 == +t.shopkind
            });
            e = this.filterTime(e),
            e.reverse();
            for (var i = 0,
            n = e; i < n.length; i++) {
                var r = n[i];
                r.type = 2
            }
            this.list.itemRenderer = t.MallItemItem,
            this.list.dataProvider = new eui.ArrayCollection(e)
        },
        i
    } (BasicPanel);
    t.MallPanel = e,
    __reflect(e.prototype, "petRecruit.MallPanel")
} (petRecruit || (petRecruit = {}));
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
                u(n.next(t))
            } catch(e) {
                o(e)
            }
        }
        function s(t) {
            try {
                u(n["throw"](t))
            } catch(e) {
                o(e)
            }
        }
        function u(t) {
            t.done ? r(t.value) : new i(function(e) {
                e(t.value)
            }).then(a, s)
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
            if (r = 1, o && (a = o[2 & i[0] ? "return": i[0] ? "throw": "next"]) && !(a = a.call(o, i[1])).done) return a;
            switch (o = 0, a && (i = [0, a.value]), i[0]) {
            case 0:
            case 1:
                a = i;
                break;
            case 4:
                return u.label++,
                {
                    value: i[1],
                    done: !1
                };
            case 5:
                u.label++,
                o = i[1],
                i = [0];
                continue;
            case 7:
                i = u.ops.pop(),
                u.trys.pop();
                continue;
            default:
                if (a = u.trys, !(a = a.length > 0 && a[a.length - 1]) && (6 === i[0] || 2 === i[0])) {
                    u = 0;
                    continue
                }
                if (3 === i[0] && (!a || i[1] > a[0] && i[1] < a[3])) {
                    u.label = i[1];
                    break
                }
                if (6 === i[0] && u.label < a[1]) {
                    u.label = a[1],
                    a = i;
                    break
                }
                if (a && u.label < a[2]) {
                    u.label = a[2],
                    u.ops.push(i);
                    break
                }
                a[2] && u.ops.pop(),
                u.trys.pop();
                continue
            }
            i = e.call(t, u)
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
    var r, o, a, s, u = {
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
petRecruit; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t.isSkipAnim = !1,
            t.skinName = "PetRecruitResultPanelSkin",
            t
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            GameInfo.isChecking,
            this.addEvent()
        },
        i.prototype.addEvent = function() {
            var t = this;
            ImageButtonUtil.add(this.btnGet,
            function() {
                t.handleOne(1)
            },
            this),
            ImageButtonUtil.add(this.btnReturn,
            function() {
                t.handleOne(2)
            },
            this),
            ImageButtonUtil.add(this.btnOnceGet,
            function() {
                t.handleTen(1)
            },
            this),
            ImageButtonUtil.add(this.btnOnceReturn,
            function() {
                t.handleTen(2)
            },
            this),
            EventManager.addEventListener(SocketEvent.SOCKETRECONNECT, this.addToGroup, this)
        },
        i.prototype.addToGroup = function() {
            var e = this;
            this.groupItem.removeChildren();
            var i = 1 == this.poolIndex ? t.AttrConst.ARR_USUAL_PET_ID: t.AttrConst.ARR_TIME_LIMIT_PET_ID;
            this.service.updateSomeValues(i.concat([t.AttrConst.RETURN_STATE, t.AttrConst.GET_STATE])).then(function() {
                if (1 == e.recruitTimes) {
                    var n = new t.ResultItem(1, e.poolIndex, 1);
                    e.groupItem.addChild(n),
                    e.groupItem.maxWidth = 124;
                    var r = e.service.getValue(i[0]);
                    n.setPet(r, e.isSkipAnim)
                } else if (10 == e.recruitTimes) for (var o = 0; 10 > o; o++) {
                    var n = new t.ResultItem(2, e.poolIndex, o + 1);
                    e.groupItem.addChild(n),
                    e.groupItem.maxWidth = 1e4;
                    var r = e.service.getValue(i[Math.floor(o / 2)]) >> (o % 2 == 1 ? 16 : 0) & 65535;
                    n.setPet(r, e.isSkipAnim);
                    var a = e.service.getValue(t.AttrConst.RETURN_STATE);
                    n.setReturnState(1 == KTool.getBit(a, o + 1 + (1 == e.poolIndex ? 0 : 10))),
                    a = e.service.getValue(t.AttrConst.GET_STATE),
                    n.setGetState(1 == KTool.getBit(a, o + 1 + (1 == e.poolIndex ? 0 : 10)))
                }
            })
        },
        i.prototype.handleOne = function(e) {
            var i = 1 == this.poolIndex ? 1 : 2;
            i = (256 + e << 8) + i,
            AwardManager.pause(),
            SocketConnection.sendByQueue(t.AttrConst.CMD, [4, i],
            function() {
                egret.setTimeout(function() {
                    AwardManager.petList.splice(0),
                    AwardManager.resume()
                },
                null, 200)
            }),
            this.service.backToMainPanel()
        },
        i.prototype.handleTen = function(e) {
            var i = 1 == this.poolIndex ? 1 : 2;
            i = (e << 8) + i,
            AwardManager.pause(),
            SocketConnection.sendByQueue(t.AttrConst.CMD, [5, i],
            function() {
                egret.setTimeout(function() {
                    AwardManager.petList.splice(0),
                    AwardManager.resume()
                },
                null, 200)
            }),
            this.service.backToMainPanel()
        },
        i.prototype.destroy = function() {
            e.prototype.destroy.call(this),
            this.groupItem.removeChildren(),
            EventManager.removeEventListener(SocketEvent.SOCKETRECONNECT, this.addToGroup, this)
        },
        i.prototype.beforeAdd = function(e) {
            var i = this;
            this.poolIndex = e.poolIndex,
            this.recruitTimes = e.times;
            for (var n = 1; n <= t.ConfigConst.numPools; n++) this["imgBG" + n].visible = n == e.poolIndex;
            this.isSkipAnim = e.skip,
            e.skip ? (this.btnGet.visible = this.btnReturn.visible = 1 == e.times, this.btnOnceGet.visible = this.btnOnceReturn.visible = 10 == e.times) : (this.playAni().then(function() {
                egret.setTimeout(function() {
                    SoundManager.loadSound(t.MusicConst.BMG).then(function() {
                        SoundManager.playMusic()
                    })
                },
                null, 600)
            },
            function() {
                egret.setTimeout(function() {
                    SoundManager.loadSound(t.MusicConst.BMG).then(function() {
                        SoundManager.playMusic()
                    })
                },
                null, 600)
            }), this.btnGet.visible = this.btnReturn.visible = this.btnOnceGet.visible = this.btnOnceReturn.visible = !1, egret.setTimeout(function() {
                1 == e.times ? (i.btnGet.visible = i.btnReturn.visible = !0, i.btnGet.alpha = i.btnReturn.alpha = 0, i.btnGet.touchEnabled = i.btnReturn.touchEnabled = !1, egret.Tween.get(i.btnGet).to({
                    alpha: 1
                },
                1e3).call(function() {
                    i.btnGet.touchEnabled = !0
                }), egret.Tween.get(i.btnReturn).to({
                    alpha: 1
                },
                1e3).call(function() {
                    i.btnReturn.touchEnabled = !0
                })) : 10 == e.times && (i.btnOnceGet.visible = i.btnOnceReturn.visible = !0, i.btnOnceGet.alpha = i.btnOnceReturn.alpha = 0, i.btnOnceGet.touchEnabled = i.btnOnceReturn.touchEnabled = !1, egret.Tween.get(i.btnOnceGet).to({
                    alpha: 1
                },
                1e3).call(function() {
                    i.btnOnceGet.touchEnabled = !0
                }), egret.Tween.get(i.btnOnceReturn).to({
                    alpha: 1
                },
                1e3).call(function() {
                    i.btnOnceReturn.touchEnabled = !0
                })),
                GameInfo.isChecking
            },
            null, 1e3)),
            this.addToGroup(),
            GameInfo.isChecking
        },
        i.prototype.playAni = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var t = this;
                return __generator(this,
                function(e) {
                    return [2, new Promise(function(e, i) {
                        var n = SpineUtil.createAnimate("jinglingzhaomu_fanpaiguodu");
                        t.groupAni.addChild(n),
                        n.width = n.height = 0,
                        EngineHookManager.restoreCanvasRenderDrawMesh();
                        var r = n.play("keyinzhuanchang2", 1);
                        r.waitLoopEnd().then(function() {
                            t.groupAni.removeChild(n),
                            e()
                        })
                    })]
                })
            })
        },
        i
    } (BasicPanel);
    t.ResultPanel = e,
    __reflect(e.prototype, "petRecruit.ResultPanel")
} (petRecruit || (petRecruit = {}));
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
generateEUI.paths["resource/eui_skins/item/PetRecruitDetailItemSkin.exml"] = window.PetRecruitDetailItemSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["imgRect", "imgIcon", "imgLevel", "groupPet", "txtName"],
        this.height = 136,
        this.width = 111,
        this.elementsContent = [this.imgRect_i(), this.groupPet_i(), this.txtName_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.imgRect_i = function() {
        var t = new eui.Image;
        return this.imgRect = t,
        t.height = 136,
        t.visible = !0,
        t.width = 111,
        t.y = 0,
        t
    },
    i.groupPet_i = function() {
        var t = new eui.Group;
        return this.groupPet = t,
        t.x = 3,
        t.y = 3,
        t.elementsContent = [this.imgIcon_i(), this.imgLevel_i(), this._Image1_i()],
        t
    },
    i.imgIcon_i = function() {
        var t = new eui.Image;
        return this.imgIcon = t,
        t.height = 100,
        t.width = 100,
        t.x = 3,
        t.y = 1,
        t
    },
    i.imgLevel_i = function() {
        var t = new eui.Image;
        return this.imgLevel = t,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "pet_recruit_detail_item_jx_903_kb_png",
        t.x = 72,
        t.y = 71,
        t
    },
    i.txtName_i = function() {
        var t = new eui.Label;
        return this.txtName = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = 0,
        t.size = 16,
        t.text = "精灵名字",
        t.textColor = 9025023,
        t.y = 110,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/item/PetRecruitDetailRecordItemSkin.exml"] = window.PetRecruitDetailRecordItemSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["txtPool", "txtReturn", "txtItem", "txtName", "txtTime", "imgIcon1", "imgIcon2", "imgIcon3", "imgIcon4"],
        this.width = 879,
        this.elementsContent = [this.txtPool_i(), this.txtReturn_i(), this.txtItem_i(), this.txtName_i(), this.txtTime_i(), this.imgIcon1_i(), this.imgIcon2_i(), this.imgIcon3_i(), this.imgIcon4_i(), this._Image1_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.txtPool_i = function() {
        var t = new eui.Label;
        return this.txtPool = t,
        t.fontFamily = "REEJI",
        t.size = 18,
        t.text = "星际招募",
        t.textColor = 4187130,
        t.x = 0,
        t.y = 2,
        t
    },
    i.txtReturn_i = function() {
        var t = new eui.Label;
        return this.txtReturn = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "已返万象璀璨*10",
        t.textColor = 4187130,
        t.x = 543,
        t.y = 3,
        t
    },
    i.txtItem_i = function() {
        var t = new eui.Label;
        return this.txtItem = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "限时·星际密令",
        t.textAlign = "center",
        t.textColor = 12834813,
        t.width = 113,
        t.x = 151,
        t.y = 1,
        t
    },
    i.txtName_i = function() {
        var t = new eui.Label;
        return this.txtName = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "精灵名精灵名精灵名精",
        t.textColor = 6669311,
        t.x = 351,
        t.y = 2,
        t
    },
    i.txtTime_i = function() {
        var t = new eui.Label;
        return this.txtTime = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "22/12/24  24:00:00",
        t.textAlign = "center",
        t.textColor = 8757203,
        t.width = 170,
        t.x = 709,
        t.y = 3,
        t
    },
    i.imgIcon1_i = function() {
        var t = new eui.Image;
        return this.imgIcon1 = t,
        t.source = "pet_recruit_detail_record_item_imgssicon_png",
        t.visible = !1,
        t.x = 319,
        t.y = -4,
        t
    },
    i.imgIcon2_i = function() {
        var t = new eui.Image;
        return this.imgIcon2 = t,
        t.source = "pet_recruit_detail_record_item_imgsicon_png",
        t.visible = !1,
        t.x = 326,
        t
    },
    i.imgIcon3_i = function() {
        var t = new eui.Image;
        return this.imgIcon3 = t,
        t.source = "pet_recruit_detail_record_item_imgaicon_png",
        t.visible = !1,
        t.x = 326,
        t.y = -1,
        t
    },
    i.imgIcon4_i = function() {
        var t = new eui.Image;
        return this.imgIcon4 = t,
        t.source = "pet_recruit_detail_record_item_imgbicon_png",
        t.visible = !1,
        t.x = 326,
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.horizontalCenter = 0,
        t.source = "pet_recruit_detail_record_item_imgline_png",
        t.y = 34,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/item/PetRecruitMallItemItemSkin.exml"] = window.MallItemItemSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["imgCoin", "txtPrice", "btnBuy", "imgIcon", "txtNum", "txtName"],
        this.height = 173,
        this.width = 148,
        this.elementsContent = [this._Image1_i(), this.btnBuy_i(), this.imgIcon_i(), this.txtNum_i(), this.txtName_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "mall_gift_item_img3_png",
        t.x = 2,
        t.y = 0,
        t
    },
    i.btnBuy_i = function() {
        var t = new eui.Group;
        return this.btnBuy = t,
        t.visible = !0,
        t.x = 6,
        t.y = 139,
        t.elementsContent = [this._Image2_i(), this._Group1_i()],
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "mall_gift_item_img2_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.horizontalCenter = 0,
        t.verticalCenter = 0,
        t.layout = this._HorizontalLayout1_i(),
        t.elementsContent = [this.imgCoin_i(), this.txtPrice_i()],
        t
    },
    i._HorizontalLayout1_i = function() {
        var t = new eui.HorizontalLayout;
        return t.gap = 0,
        t.verticalAlign = "middle",
        t
    },
    i.imgCoin_i = function() {
        var t = new eui.Image;
        return this.imgCoin = t,
        t.height = 25,
        t.width = 25,
        t.x = 0,
        t.y = 0,
        t
    },
    i.txtPrice_i = function() {
        var t = new eui.Label;
        return this.txtPrice = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.textColor = 10180889,
        t.x = 21,
        t.y = 1,
        t
    },
    i.imgIcon_i = function() {
        var t = new eui.Image;
        return this.imgIcon = t,
        t.height = 70,
        t.width = 70,
        t.x = 39,
        t.y = 35,
        t
    },
    i.txtNum_i = function() {
        var t = new eui.Label;
        return this.txtNum = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.stroke = 1,
        t.strokeColor = 2572916,
        t.textColor = 14543359,
        t.x = 92,
        t.y = 92,
        t
    },
    i.txtName_i = function() {
        var t = new eui.Label;
        return this.txtName = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = 0,
        t.size = 16,
        t.textColor = 14543359,
        t.x = 10,
        t.y = 8,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/item/PetRecruitMallPetItemSkin.exml"] = window.MallPetItemSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["imgPet", "imgCoin", "txtPrice", "btnBuy", "txtName", "txtStrict", "groupHas"],
        this.height = 290,
        this.width = 178,
        this.elementsContent = [this._Image1_i(), this.imgPet_i(), this._Image2_i(), this.btnBuy_i(), this.txtName_i(), this.txtStrict_i(), this.groupHas_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 290,
        t.scale9Grid = new egret.Rectangle(9, 24, 4, 9),
        t.source = "mall_skin_item_imgbg_png",
        t.width = 178,
        t
    },
    i.imgPet_i = function() {
        var t = new eui.Image;
        return this.imgPet = t,
        t.height = 250,
        t.width = 168,
        t.x = 6,
        t.y = 6,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "pet_recruit_mall_pet_item_zhezhao_png",
        t.touchEnabled = !1,
        t.x = 5,
        t.y = 164,
        t
    },
    i.btnBuy_i = function() {
        var t = new eui.Group;
        return this.btnBuy = t,
        t.visible = !0,
        t.x = 4,
        t.y = 258,
        t.elementsContent = [this._Image3_i(), this._Group1_i()],
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.height = 31.34,
        t.source = "mall_gift_item_img2_png",
        t.visible = !0,
        t.width = 170.868,
        t.x = .541,
        t.y = 0,
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.horizontalCenter = 0,
        t.verticalCenter = 0,
        t.visible = !0,
        t.layout = this._HorizontalLayout1_i(),
        t.elementsContent = [this.imgCoin_i(), this.txtPrice_i()],
        t
    },
    i._HorizontalLayout1_i = function() {
        var t = new eui.HorizontalLayout;
        return t.gap = 0,
        t.verticalAlign = "middle",
        t
    },
    i.imgCoin_i = function() {
        var t = new eui.Image;
        return this.imgCoin = t,
        t.height = 25,
        t.width = 25,
        t
    },
    i.txtPrice_i = function() {
        var t = new eui.Label;
        return this.txtPrice = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.textColor = 10180889,
        t
    },
    i.txtName_i = function() {
        var t = new eui.Label;
        return this.txtName = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = 0,
        t.size = 18,
        t.textColor = 16777215,
        t.visible = !0,
        t.y = 235,
        t
    },
    i.txtStrict_i = function() {
        var t = new eui.Label;
        return this.txtStrict = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = 0,
        t.size = 16,
        t.textColor = 10923952,
        t.visible = !0,
        t.x = 99,
        t.y = 210,
        t
    },
    i.groupHas_i = function() {
        var t = new eui.Group;
        return this.groupHas = t,
        t.visible = !1,
        t.x = 11,
        t.y = 258,
        t.elementsContent = [this._Image4_i(), this._Label1_i()],
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.source = "pet_recruit_mall_pet_item_imgline_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "已兑换",
        t.textColor = 4252667,
        t.visible = !0,
        t.x = 54,
        t.y = 9,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/item/PetRecruitResultItemSkin.exml"] = window.PetRecruitResultItemSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["groupAni", "imgReturnBG", "imgItem", "txtItem", "groupReturn", "txtName", "imgIcon", "imgLevel", "btnReturn", "btnGet", "groupHandle", "imgNew", "groupGet"],
        this.elementsContent = [this.groupAni_i(), this.groupReturn_i(), this.groupGet_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.groupAni_i = function() {
        var t = new eui.Group;
        return this.groupAni = t,
        t.horizontalCenter = 0,
        t.verticalCenter = 0,
        t.visible = !0,
        t
    },
    i.groupReturn_i = function() {
        var t = new eui.Group;
        return this.groupReturn = t,
        t.cacheAsBitmap = !0,
        t.horizontalCenter = 0,
        t.visible = !0,
        t.y = 0,
        t.elementsContent = [this.imgReturnBG_i(), this.imgItem_i(), this.txtItem_i()],
        t
    },
    i.imgReturnBG_i = function() {
        var t = new eui.Image;
        return this.imgReturnBG = t,
        t.source = "pet_recruit_result_item_fhb_kb_png",
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t
    },
    i.imgItem_i = function() {
        var t = new eui.Image;
        return this.imgItem = t,
        t.height = 69,
        t.visible = !0,
        t.width = 69,
        t.x = 27,
        t.y = 65,
        t
    },
    i.txtItem_i = function() {
        var t = new eui.Label;
        return this.txtItem = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "星河长明*99",
        t.textColor = 16448767,
        t.visible = !0,
        t.x = 17,
        t.y = 144,
        t
    },
    i.groupGet_i = function() {
        var t = new eui.Group;
        return this.groupGet = t,
        t.cacheAsBitmap = !0,
        t.horizontalCenter = 0,
        t.visible = !0,
        t.y = 2,
        t.elementsContent = [this.txtName_i(), this.imgIcon_i(), this.imgLevel_i(), this.groupHandle_i(), this.imgNew_i()],
        t
    },
    i.txtName_i = function() {
        var t = new eui.Label;
        return this.txtName = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = 0,
        t.size = 16,
        t.textAlign = "center",
        t.textColor = 16448767,
        t.visible = !0,
        t.y = 141,
        t
    },
    i.imgIcon_i = function() {
        var t = new eui.Image;
        return this.imgIcon = t,
        t.height = 98,
        t.visible = !0,
        t.width = 98,
        t.x = 8,
        t.y = 36,
        t
    },
    i.imgLevel_i = function() {
        var t = new eui.Image;
        return this.imgLevel = t,
        t.visible = !0,
        t.x = 3,
        t.y = 30,
        t
    },
    i.groupHandle_i = function() {
        var t = new eui.Group;
        return this.groupHandle = t,
        t.visible = !0,
        t.width = 106,
        t.x = 7,
        t.y = 175,
        t.elementsContent = [this.btnReturn_i(), this.btnGet_i()],
        t
    },
    i.btnReturn_i = function() {
        var t = new eui.Image;
        return this.btnReturn = t,
        t.source = "pet_recruit_result_item_btnoncereturn_png",
        t.x = 0,
        t
    },
    i.btnGet_i = function() {
        var t = new eui.Image;
        return this.btnGet = t,
        t.source = "pet_recruit_result_item_btnonceget_png",
        t.x = 58,
        t
    },
    i.imgNew_i = function() {
        var t = new eui.Image;
        return this.imgNew = t,
        t.right = -5.8,
        t.source = "pet_recruit_result_item_xinhuode_png",
        t.visible = !0,
        t.y = 22,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/panel/PetRecruitDetailPanelSkin.exml"] = window.PetRecruitDetailPanelSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["menuGroup", "btnSSUp", "btnSSDown", "btnSUp", "btnSDown", "btnAUp", "btnADown", "btnBUp", "btnBDown", "txtPool", "groupRate", "imgGouBG", "imgGou", "txtSearch", "btnSearch", "groupFilter", "txt1", "txt2", "txt3", "txt4", "groupRule", "listRecord", "groupRecord", "listPool", "scrollerPool", "grpContent"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this._Image1_i(), this.menuGroup_i(), this.grpContent_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.bottom = 0,
        t.left = 0,
        t.right = 0,
        t.source = "common_ui_bg_3_jpg",
        t.top = 0,
        t
    },
    i.menuGroup_i = function() {
        var t = new eui.Group;
        return this.menuGroup = t,
        t.x = 0,
        t.y = 48,
        t
    },
    i.grpContent_i = function() {
        var t = new eui.Group;
        return this.grpContent = t,
        t.width = 934,
        t.x = 170,
        t.y = 56,
        t.elementsContent = [this.groupRate_i(), this.groupFilter_i(), this.groupRule_i(), this.groupRecord_i(), this.scrollerPool_i()],
        t
    },
    i.groupRate_i = function() {
        var t = new eui.Group;
        return this.groupRate = t,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Group1_i(), this._Image2_i(), this.txtPool_i()],
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.visible = !0,
        t.x = 0,
        t.y = 38.17,
        t.elementsContent = [this.btnSSUp_i(), this.btnSSDown_i(), this.btnSUp_i(), this.btnSDown_i(), this.btnAUp_i(), this.btnADown_i(), this.btnBUp_i(), this.btnBDown_i()],
        t
    },
    i.btnSSUp_i = function() {
        var t = new eui.Image;
        return this.btnSSUp = t,
        t.source = "pet_recruit_detail_panel_btnssup_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.btnSSDown_i = function() {
        var t = new eui.Image;
        return this.btnSSDown = t,
        t.source = "pet_recruit_detail_panel_btnssdown_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.btnSUp_i = function() {
        var t = new eui.Image;
        return this.btnSUp = t,
        t.source = "pet_recruit_detail_panel_btnsup_png",
        t.x = 100,
        t.y = 0,
        t
    },
    i.btnSDown_i = function() {
        var t = new eui.Image;
        return this.btnSDown = t,
        t.source = "pet_recruit_detail_panel_btnsdown_png",
        t.x = 100,
        t.y = 0,
        t
    },
    i.btnAUp_i = function() {
        var t = new eui.Image;
        return this.btnAUp = t,
        t.source = "pet_recruit_detail_panel_btnaup_png",
        t.x = 201,
        t.y = 0,
        t
    },
    i.btnADown_i = function() {
        var t = new eui.Image;
        return this.btnADown = t,
        t.source = "pet_recruit_detail_panel_btnadown_png",
        t.x = 201,
        t.y = 0,
        t
    },
    i.btnBUp_i = function() {
        var t = new eui.Image;
        return this.btnBUp = t,
        t.source = "pet_recruit_detail_panel_btnbup_png",
        t.x = 301,
        t.y = 0,
        t
    },
    i.btnBDown_i = function() {
        var t = new eui.Image;
        return this.btnBDown = t,
        t.source = "pet_recruit_detail_panel_btnbdown_png",
        t.x = 301,
        t.y = 0,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.scaleX = 1,
        t.scaleY = 1,
        t.source = "pet_recruit_detail_panel_imgsubtitlebg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.txtPool_i = function() {
        var t = new eui.Label;
        return this.txtPool = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "星际招募",
        t.textColor = 10272767,
        t.x = 11,
        t.y = 6,
        t
    },
    i.groupFilter_i = function() {
        var t = new eui.Group;
        return this.groupFilter = t,
        t.right = 6,
        t.visible = !0,
        t.y = 44,
        t.elementsContent = [this._Image3_i(), this.imgGouBG_i(), this.imgGou_i(), this.txtSearch_i(), this._Label1_i(), this.btnSearch_i()],
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "pet_recruit_detail_panel_imgsearchbg_png",
        t.x = 101,
        t.y = 0,
        t
    },
    i.imgGouBG_i = function() {
        var t = new eui.Image;
        return this.imgGouBG = t,
        t.source = "pet_recruit_detail_panel_imggoubg_png",
        t.x = 58,
        t.y = 3,
        t
    },
    i.imgGou_i = function() {
        var t = new eui.Image;
        return this.imgGou = t,
        t.source = "pet_recruit_detail_panel_imggou_png",
        t.visible = !0,
        t.x = 62,
        t.y = 9,
        t
    },
    i.txtSearch_i = function() {
        var t = new eui.EditableText;
        return this.txtSearch = t,
        t.fontFamily = "MFShangHei",
        t.prompt = "输入物品名称",
        t.promptColor = 4149623,
        t.size = 16,
        t.x = 110,
        t.y = 7,
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 18.0000005618,
        t.text = "未拥有",
        t.textColor = 5008299,
        t.x = 0,
        t.y = 6,
        t
    },
    i.btnSearch_i = function() {
        var t = new eui.Image;
        return this.btnSearch = t,
        t.source = "pet_recruit_detail_panel_btnsearch_png",
        t.x = 233,
        t.y = 1,
        t
    },
    i.groupRule_i = function() {
        var t = new eui.Group;
        return this.groupRule = t,
        t.visible = !1,
        t.x = 23,
        t.y = 10,
        t.elementsContent = [this._Rect1_i(), this._Scroller1_i()],
        t
    },
    i._Rect1_i = function() {
        var t = new eui.Rect;
        return t.fillAlpha = .4,
        t.height = 547,
        t.visible = !0,
        t.width = 910,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Scroller1_i = function() {
        var t = new eui.Scroller;
        return t.height = 547,
        t.width = 910,
        t.x = 0,
        t.y = 0,
        t.viewport = this._Group3_i(),
        t
    },
    i._Group3_i = function() {
        var t = new eui.Group;
        return t.layout = this._BasicLayout1_i(),
        t.elementsContent = [this._Image4_i(), this._Label2_i(), this._Group2_i()],
        t
    },
    i._BasicLayout1_i = function() {
        var t = new eui.BasicLayout;
        return t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.source = "pet_recruit_detail_panel_line2_png",
        t.x = 36,
        t.y = 57,
        t
    },
    i._Label2_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "REEJI",
        t.size = 22,
        t.text = "招募规则",
        t.textColor = 8631026,
        t.x = 36,
        t.y = 25,
        t
    },
    i._Group2_i = function() {
        var t = new eui.Group;
        return t.x = 36,
        t.y = 67,
        t.layout = this._VerticalLayout1_i(),
        t.elementsContent = [this._Label3_i(), this.txt1_i(), this._Label4_i(), this.txt2_i(), this._Label5_i(), this.txt3_i(), this._Label6_i(), this.txt4_i()],
        t
    },
    i._VerticalLayout1_i = function() {
        var t = new eui.VerticalLayout;
        return t.gap = 15,
        t
    },
    i._Label3_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "REEJI",
        t.size = 22,
        t.text = "奖池分类：",
        t.textColor = 16777215,
        t.x = 0,
        t.y = 0,
        t
    },
    i.txt1_i = function() {
        var t = new eui.Label;
        return this.txt1 = t,
        t.fontFamily = "MFShangHei",
        t.lineSpacing = 6,
        t.size = 18,
        t.textColor = 8757203,
        t.width = 871,
        t.x = 0,
        t.y = 33,
        t
    },
    i._Label4_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "REEJI",
        t.size = 22,
        t.text = "招募规则：",
        t.textColor = 16777215,
        t.x = 0,
        t.y = 149.85,
        t
    },
    i.txt2_i = function() {
        var t = new eui.Label;
        return this.txt2 = t,
        t.fontFamily = "MFShangHei",
        t.lineSpacing = 6,
        t.size = 18,
        t.textColor = 8757203,
        t.width = 871,
        t.x = 0,
        t.y = 181.28,
        t
    },
    i._Label5_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "REEJI",
        t.size = 22,
        t.text = "保底机制：",
        t.textColor = 16777215,
        t.x = 10,
        t.y = 159.85,
        t
    },
    i.txt3_i = function() {
        var t = new eui.Label;
        return this.txt3 = t,
        t.fontFamily = "MFShangHei",
        t.lineSpacing = 6,
        t.size = 18,
        t.textColor = 8757203,
        t.width = 871,
        t.x = 10,
        t.y = 191.28,
        t
    },
    i._Label6_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "REEJI",
        t.size = 22,
        t.text = "返还材料：",
        t.textColor = 16777215,
        t.x = 20,
        t.y = 169.85,
        t
    },
    i.txt4_i = function() {
        var t = new eui.Label;
        return this.txt4 = t,
        t.fontFamily = "MFShangHei",
        t.lineSpacing = 6,
        t.size = 18,
        t.textColor = 8757203,
        t.width = 871,
        t.x = 20,
        t.y = 201.28,
        t
    },
    i.groupRecord_i = function() {
        var t = new eui.Group;
        return this.groupRecord = t,
        t.height = 557,
        t.visible = !1,
        t.x = 7,
        t.y = 10,
        t.elementsContent = [this._Rect2_i(), this._Image5_i(), this._Label7_i(), this._Scroller2_i()],
        t
    },
    i._Rect2_i = function() {
        var t = new eui.Rect;
        return t.bottom = 0,
        t.fillAlpha = .4,
        t.left = 0,
        t.right = 0,
        t.top = 0,
        t.visible = !0,
        t
    },
    i._Image5_i = function() {
        var t = new eui.Image;
        return t.source = "pet_recruit_detail_panel_imgtitle_png",
        t.y = -5,
        t
    },
    i._Label7_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.right = 12,
        t.size = 16,
        t.text = "*仅保留最近20条记录",
        t.textColor = 6388143,
        t.y = 530,
        t
    },
    i._Scroller2_i = function() {
        var t = new eui.Scroller;
        return t.height = 490,
        t.width = 943,
        t.x = 0,
        t.y = 30,
        t.viewport = this.listRecord_i(),
        t
    },
    i.listRecord_i = function() {
        var t = new eui.List;
        return this.listRecord = t,
        t.layout = this._VerticalLayout2_i(),
        t
    },
    i._VerticalLayout2_i = function() {
        var t = new eui.VerticalLayout;
        return t.gap = 15,
        t.paddingLeft = 55,
        t.paddingTop = 10,
        t
    },
    i.scrollerPool_i = function() {
        var t = new eui.Scroller;
        return this.scrollerPool = t,
        t.height = 481,
        t.left = 0,
        t.right = 0,
        t.visible = !0,
        t.y = 85,
        t.viewport = this.listPool_i(),
        t
    },
    i.listPool_i = function() {
        var t = new eui.List;
        return this.listPool = t,
        t.layout = this._TileLayout1_i(),
        t
    },
    i._TileLayout1_i = function() {
        var t = new eui.TileLayout;
        return t.horizontalGap = 26,
        t.orientation = "rows",
        t.verticalGap = 20,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/panel/PetRecruitMainPanelSkin.exml"] = window.PetRecruitMainPanelSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["groupBG", "imgUpIcon1", "imgUpIcon2", "imgUpIcon3", "imgUpIcon4", "groupUp", "txtName1", "txtName2", "imgTimesBG1", "imgTimesBG2", "txtTimes", "imgTenCoinIcon", "btnTen", "imgOneCoinIcon", "btnOne", "btnInfo", "txtEndLine", "groupEndLine", "txtNumItem2", "imgAddItem2", "imgItemIcon2", "groupItem2", "txtNumItem1", "imgAddItem1", "imgItemIcon1", "groupItem1", "imgSelected1", "pool1", "txtPool2Time", "imgSelected2", "pool2", "time", "btnMall", "imgRedPoint", "goGroup", "txtSkip", "imgCheckbox", "imgSkip", "grpSkip", "groupAll", "groupAni"],
        this.height = 640,
        this.width = 1385,
        this.elementsContent = [this.groupBG_i(), this._Image1_i(), this.groupAll_i(), this.groupAni_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.groupBG_i = function() {
        var t = new eui.Group;
        return this.groupBG = t,
        t.horizontalCenter = 0,
        t.verticalCenter = 0,
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.bottom = 0,
        t.left = 0,
        t.right = 0,
        t.source = "pet_recruit_main_panel_imgmask_png",
        t.top = 0,
        t
    },
    i.groupAll_i = function() {
        var t = new eui.Group;
        return this.groupAll = t,
        t.cacheAsBitmap = !0,
        t.horizontalCenter = 0,
        t.width = 1136,
        t.elementsContent = [this.groupUp_i(), this._Group1_i(), this._Group2_i(), this.pool1_i(), this.pool2_i(), this.goGroup_i(), this.grpSkip_i()],
        t
    },
    i.groupUp_i = function() {
        var t = new eui.Group;
        return this.groupUp = t,
        t.right = 32,
        t.visible = !1,
        t.y = 70,
        t.elementsContent = [this._Image2_i(), this.imgUpIcon1_i(), this.imgUpIcon2_i(), this.imgUpIcon3_i(), this.imgUpIcon4_i()],
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "pet_recruit_main_panel_imgupbg_png",
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t
    },
    i.imgUpIcon1_i = function() {
        var t = new eui.Image;
        return this.imgUpIcon1 = t,
        t.source = "pet_recruit_main_panel_imgupicon1_png",
        t.x = 56,
        t.y = 27,
        t
    },
    i.imgUpIcon2_i = function() {
        var t = new eui.Image;
        return this.imgUpIcon2 = t,
        t.source = "pet_recruit_main_panel_imgupicon2_png",
        t.x = 143,
        t.y = 27,
        t
    },
    i.imgUpIcon3_i = function() {
        var t = new eui.Image;
        return this.imgUpIcon3 = t,
        t.source = "pet_recruit_main_panel_imgupicon3_png",
        t.x = 230,
        t.y = 27,
        t
    },
    i.imgUpIcon4_i = function() {
        var t = new eui.Image;
        return this.imgUpIcon4 = t,
        t.source = "pet_recruit_main_panel_imgupicon4_png",
        t.x = 317,
        t.y = 27,
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.cacheAsBitmap = !0,
        t.right = 10,
        t.visible = !0,
        t.y = 314,
        t.elementsContent = [this.txtName1_i(), this.txtName2_i(), this.imgTimesBG1_i(), this.imgTimesBG2_i(), this._Image3_i(), this.txtTimes_i(), this.btnTen_i(), this.btnOne_i(), this.btnInfo_i(), this.groupEndLine_i()],
        t
    },
    i.txtName1_i = function() {
        var t = new eui.Image;
        return this.txtName1 = t,
        t.source = "pet_recruit_main_panel_txtname1_png",
        t.visible = !0,
        t.x = 382,
        t.y = 0,
        t
    },
    i.txtName2_i = function() {
        var t = new eui.Image;
        return this.txtName2 = t,
        t.source = "pet_recruit_main_panel_txtname2_png",
        t.visible = !1,
        t.x = 377,
        t.y = 7,
        t
    },
    i.imgTimesBG1_i = function() {
        var t = new eui.Image;
        return this.imgTimesBG1 = t,
        t.source = "pet_recruit_main_panel_imgtimesbg1_png",
        t.visible = !0,
        t.x = 0,
        t.y = 144,
        t
    },
    i.imgTimesBG2_i = function() {
        var t = new eui.Image;
        return this.imgTimesBG2 = t,
        t.source = "pet_recruit_main_panel_imgtimesbg2_png",
        t.visible = !1,
        t.x = 0,
        t.y = 144,
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "pet_recruit_main_panel_imgtimes_png",
        t.visible = !0,
        t.x = 188,
        t.y = 158,
        t
    },
    i.txtTimes_i = function() {
        var t = new eui.Label;
        return this.txtTimes = t,
        t.fontFamily = "MFShangHei",
        t.size = 30,
        t.text = "60/60",
        t.textAlign = "center",
        t.textColor = 16514896,
        t.width = 84,
        t.x = 486,
        t.y = 155.587,
        t
    },
    i.btnTen_i = function() {
        var t = new eui.Group;
        return this.btnTen = t,
        t.x = 359,
        t.y = 216,
        t.elementsContent = [this._Image4_i(), this._Label1_i(), this.imgTenCoinIcon_i()],
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.source = "pet_recruit_main_panel_imgbtntenbg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 24,
        t.text = "x10",
        t.textColor = 10180889,
        t.x = 115,
        t.y = 40.174,
        t
    },
    i.imgTenCoinIcon_i = function() {
        var t = new eui.Image;
        return this.imgTenCoinIcon = t,
        t.height = 24,
        t.source = "pet_recruit_main_panel_imgtencoinicon_png",
        t.width = 24,
        t.x = 79.935,
        t.y = 41,
        t
    },
    i.btnOne_i = function() {
        var t = new eui.Group;
        return this.btnOne = t,
        t.x = 105,
        t.y = 216,
        t.elementsContent = [this._Image5_i(), this._Label2_i(), this.imgOneCoinIcon_i()],
        t
    },
    i._Image5_i = function() {
        var t = new eui.Image;
        return t.source = "pet_recruit_main_panel_imgbtnonebg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i._Label2_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 24,
        t.text = "x1",
        t.textColor = 2976171,
        t.x = 119,
        t.y = 40.174,
        t
    },
    i.imgOneCoinIcon_i = function() {
        var t = new eui.Image;
        return this.imgOneCoinIcon = t,
        t.height = 24,
        t.source = "pet_recruit_main_panel_imgonecoinicon_png",
        t.width = 24,
        t.x = 83.935,
        t.y = 41,
        t
    },
    i.btnInfo_i = function() {
        var t = new eui.Image;
        return this.btnInfo = t,
        t.source = "pet_recruit_main_panel_btninfo_png",
        t.x = 491,
        t.y = 94,
        t
    },
    i.groupEndLine_i = function() {
        var t = new eui.Group;
        return this.groupEndLine = t,
        t.x = 230,
        t.y = 98,
        t.elementsContent = [this._Image6_i(), this.txtEndLine_i()],
        t
    },
    i._Image6_i = function() {
        var t = new eui.Image;
        return t.source = "pet_recruit_main_panel_imgendlinebg_png",
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t
    },
    i.txtEndLine_i = function() {
        var t = new eui.Label;
        return this.txtEndLine = t,
        t.fontFamily = "REEJI",
        t.size = 20,
        t.text = "将结束于12月12日00:00",
        t.textAlign = "center",
        t.textColor = 8467181,
        t.width = 250,
        t.x = 5,
        t.y = 5,
        t
    },
    i._Group2_i = function() {
        var t = new eui.Group;
        return t.cacheAsBitmap = !0,
        t.right = 39,
        t.y = 11,
        t.elementsContent = [this.groupItem2_i(), this.groupItem1_i()],
        t
    },
    i.groupItem2_i = function() {
        var t = new eui.Group;
        return this.groupItem2 = t,
        t.visible = !0,
        t.x = 151,
        t.y = 0,
        t.elementsContent = [this._Image7_i(), this.txtNumItem2_i(), this.imgAddItem2_i(), this.imgItemIcon2_i()],
        t
    },
    i._Image7_i = function() {
        var t = new eui.Image;
        return t.source = "pet_recruit_main_panel_imgitem2bg_png",
        t.x = 0,
        t.y = 2,
        t
    },
    i.txtNumItem2_i = function() {
        var t = new eui.Label;
        return this.txtNumItem2 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18.0101510119682,
        t.text = "0000",
        t.textColor = 8243186,
        t.x = 61,
        t.y = 3,
        t
    },
    i.imgAddItem2_i = function() {
        var t = new eui.Image;
        return this.imgAddItem2 = t,
        t.source = "pet_recruit_main_panel_imgadditem2_png",
        t.x = 116,
        t.y = 3,
        t
    },
    i.imgItemIcon2_i = function() {
        var t = new eui.Image;
        return this.imgItemIcon2 = t,
        t.height = 30,
        t.width = 30,
        t.x = 13,
        t.y = -3,
        t
    },
    i.groupItem1_i = function() {
        var t = new eui.Group;
        return this.groupItem1 = t,
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image8_i(), this.txtNumItem1_i(), this.imgAddItem1_i(), this.imgItemIcon1_i()],
        t
    },
    i._Image8_i = function() {
        var t = new eui.Image;
        return t.source = "pet_recruit_main_panel_imgitem1bg_png",
        t.x = 0,
        t.y = 2,
        t
    },
    i.txtNumItem1_i = function() {
        var t = new eui.Label;
        return this.txtNumItem1 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18.0101510119682,
        t.text = "0000",
        t.textColor = 8243186,
        t.x = 61,
        t.y = 3,
        t
    },
    i.imgAddItem1_i = function() {
        var t = new eui.Image;
        return this.imgAddItem1 = t,
        t.source = "pet_recruit_main_panel_imgadditem1_png",
        t.visible = !1,
        t.x = 116,
        t.y = 3,
        t
    },
    i.imgItemIcon1_i = function() {
        var t = new eui.Image;
        return this.imgItemIcon1 = t,
        t.height = 30,
        t.width = 30,
        t.x = 13,
        t.y = -3,
        t
    },
    i.pool1_i = function() {
        var t = new eui.Group;
        return this.pool1 = t,
        t.left = 20,
        t.visible = !1,
        t.y = 88,
        t.elementsContent = [this._Image9_i(), this.imgSelected1_i()],
        t
    },
    i._Image9_i = function() {
        var t = new eui.Image;
        return t.source = "pet_recruit_main_panel_imgpool1_png",
        t.x = 5,
        t.y = 1,
        t
    },
    i.imgSelected1_i = function() {
        var t = new eui.Image;
        return this.imgSelected1 = t,
        t.source = "pet_recruit_main_panel_imgselected_png",
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t
    },
    i.pool2_i = function() {
        var t = new eui.Group;
        return this.pool2 = t,
        t.left = 20,
        t.visible = !1,
        t.y = 164,
        t.elementsContent = [this._Image10_i(), this._Image11_i(), this.txtPool2Time_i(), this.imgSelected2_i()],
        t
    },
    i._Image10_i = function() {
        var t = new eui.Image;
        return t.source = "pet_recruit_main_panel_imgpool2_png",
        t.x = 5,
        t.y = 0,
        t
    },
    i._Image11_i = function() {
        var t = new eui.Image;
        return t.source = "pet_recruit_main_panel_imgpool2timebg_png",
        t.x = 83,
        t.y = 5,
        t
    },
    i.txtPool2Time_i = function() {
        var t = new eui.Label;
        return this.txtPool2Time = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "6天12小时",
        t.textColor = 4187130,
        t.x = 104,
        t.y = 6,
        t
    },
    i.imgSelected2_i = function() {
        var t = new eui.Image;
        return this.imgSelected2 = t,
        t.source = "pet_recruit_main_panel_imgselected_png",
        t.visible = !1,
        t.x = 0,
        t.y = 0,
        t
    },
    i.goGroup_i = function() {
        var t = new eui.Group;
        return this.goGroup = t,
        t.cacheAsBitmap = !0,
        t.x = 5,
        t.y = 497,
        t.elementsContent = [this._Image12_i(), this.time_i(), this.btnMall_i(), this.imgRedPoint_i()],
        t
    },
    i._Image12_i = function() {
        var t = new eui.Image;
        return t.scale9Grid = new egret.Rectangle(33, 0, 32, 107),
        t.source = "pet_recruit_main_panel_time_kb_png",
        t.width = 298.505,
        t.x = 0,
        t.y = 0,
        t
    },
    i.time_i = function() {
        var t = new eui.Label;
        return this.time = t,
        t.fontFamily = "REEJI",
        t.size = 18,
        t.text = "4/7-5/4",
        t.textColor = 15922687,
        t.width = 283.69,
        t.x = 18.689,
        t.y = 5,
        t
    },
    i.btnMall_i = function() {
        var t = new eui.Image;
        return this.btnMall = t,
        t.source = "pet_recruit_main_panel_btnstore_png",
        t.visible = !0,
        t.x = 15,
        t.y = 29,
        t
    },
    i.imgRedPoint_i = function() {
        var t = new eui.Image;
        return this.imgRedPoint = t,
        t.source = "pet_recruit_main_panel_imgredpoint_png",
        t.visible = !1,
        t.x = 284.203,
        t.y = 21,
        t
    },
    i.grpSkip_i = function() {
        var t = new eui.Group;
        return this.grpSkip = t,
        t.x = 986,
        t.y = 55,
        t.elementsContent = [this.txtSkip_i(), this.imgCheckbox_i(), this.imgSkip_i()],
        t
    },
    i.txtSkip_i = function() {
        var t = new eui.Label;
        return this.txtSkip = t,
        t.fontFamily = "MFShangHei",
        t.size = 20.8333358764648,
        t.text = "跳过动画",
        t.textColor = 9351416,
        t.x = 28,
        t.y = 5,
        t
    },
    i.imgCheckbox_i = function() {
        var t = new eui.Image;
        return this.imgCheckbox = t,
        t.source = "pet_recruit_main_panel_imgcheckbox_png",
        t.x = 0,
        t.y = 6,
        t
    },
    i.imgSkip_i = function() {
        var t = new eui.Image;
        return this.imgSkip = t,
        t.source = "pet_recruit_main_panel_imgSkipCheck_png",
        t.visible = !1,
        t.x = 0,
        t.y = 3,
        t
    },
    i.groupAni_i = function() {
        var t = new eui.Group;
        return this.groupAni = t,
        t.horizontalCenter = 0,
        t.verticalCenter = 0,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/panel/PetRecruitMallPanelSkin.exml"] = window.PetRecruitMallPanelSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["menuGroup", "txtEndLine", "list", "txtCoin", "imgCoin", "grpContent"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this._Image1_i(), this.menuGroup_i(), this.grpContent_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.bottom = 0,
        t.left = 0,
        t.right = 0,
        t.source = "common_ui_bg_3_jpg",
        t.top = 0,
        t
    },
    i.menuGroup_i = function() {
        var t = new eui.Group;
        return this.menuGroup = t,
        t.x = 0,
        t.y = 48,
        t
    },
    i.grpContent_i = function() {
        var t = new eui.Group;
        return this.grpContent = t,
        t.height = 595,
        t.left = 178,
        t.right = 50,
        t.y = 15,
        t.elementsContent = [this._Image2_i(), this.txtEndLine_i(), this._Scroller1_i(), this._Group1_i()],
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "pet_recruit_mall_panel_imgendlinebg_png",
        t.x = 0,
        t.y = 56,
        t
    },
    i.txtEndLine_i = function() {
        var t = new eui.Label;
        return this.txtEndLine = t,
        t.fontFamily = "REEJI",
        t.size = 18,
        t.textColor = 12834813,
        t.x = 17,
        t.y = 64,
        t
    },
    i._Scroller1_i = function() {
        var t = new eui.Scroller;
        return t.height = 492,
        t.left = 0,
        t.right = 0,
        t.visible = !0,
        t.y = 103,
        t.viewport = this.list_i(),
        t
    },
    i.list_i = function() {
        var t = new eui.List;
        return this.list = t,
        t.height = 492,
        t.width = 0,
        t.x = 0,
        t.layout = this._TileLayout1_i(),
        t
    },
    i._TileLayout1_i = function() {
        var t = new eui.TileLayout;
        return t.columnAlign = "left",
        t.horizontalAlign = "justify",
        t.horizontalGap = 26,
        t.orientation = "rows",
        t.verticalAlign = "justify",
        t.verticalGap = 20,
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.cacheAsBitmap = !0,
        t.right = 0,
        t.y = 0,
        t.elementsContent = [this._Image3_i(), this.txtCoin_i(), this.imgCoin_i()],
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "mall_recharge_item_img4_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.txtCoin_i = function() {
        var t = new eui.Label;
        return this.txtCoin = t,
        t.fontFamily = "MFShangHei",
        t.height = 21,
        t.size = 18,
        t.textAlign = "center",
        t.textColor = 12834813,
        t.width = 91,
        t.x = 27,
        t.y = 2,
        t
    },
    i.imgCoin_i = function() {
        var t = new eui.Image;
        return this.imgCoin = t,
        t.height = 30,
        t.width = 30,
        t.x = -6,
        t.y = -5,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/panel/PetRecruitResultPanelSkin.exml"] = window.PetRecruitResultPanelSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["imgBG1", "imgBG2", "groupItem", "btnReturn", "btnGet", "btnOnceReturn", "btnOnceGet", "groupAni"],
        this.height = 640,
        this.width = 1385,
        this.elementsContent = [this.imgBG1_i(), this.imgBG2_i(), this._Rect1_i(), this._Group1_i(), this.btnReturn_i(), this.btnGet_i(), this.btnOnceReturn_i(), this.btnOnceGet_i(), this.groupAni_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.imgBG1_i = function() {
        var t = new eui.Image;
        return this.imgBG1 = t,
        t.horizontalCenter = 0,
        t.source = "pet_recruit_result_panel_imgbg1_jpg",
        t.visible = !1,
        t
    },
    i.imgBG2_i = function() {
        var t = new eui.Image;
        return this.imgBG2 = t,
        t.horizontalCenter = 0,
        t.source = "pet_recruit_main_panel_imgbg2_jpg",
        t.visible = !1,
        t
    },
    i._Rect1_i = function() {
        var t = new eui.Rect;
        return t.bottom = 0,
        t.fillAlpha = .8,
        t.left = 0,
        t.right = 0,
        t.top = 0,
        t.visible = !0,
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.bottom = 0,
        t.left = 0,
        t.right = 0,
        t.top = 0,
        t.layout = this._BasicLayout1_i(),
        t.elementsContent = [this.groupItem_i()],
        t
    },
    i._BasicLayout1_i = function() {
        var t = new eui.BasicLayout;
        return t
    },
    i.groupItem_i = function() {
        var t = new eui.Group;
        return this.groupItem = t,
        t.horizontalCenter = 0,
        t.scaleX = 1,
        t.scaleY = 1,
        t.verticalCenter = -30,
        t.layout = this._TileLayout1_i(),
        t
    },
    i._TileLayout1_i = function() {
        var t = new eui.TileLayout;
        return t.horizontalGap = 30,
        t.requestedColumnCount = 5,
        t.verticalGap = 30,
        t
    },
    i.btnReturn_i = function() {
        var t = new eui.Image;
        return this.btnReturn = t,
        t.horizontalCenter = -77.5,
        t.source = "pet_recruit_result_item_btnreturn_png",
        t.visible = !1,
        t.y = 420,
        t
    },
    i.btnGet_i = function() {
        var t = new eui.Image;
        return this.btnGet = t,
        t.horizontalCenter = 77.5,
        t.source = "pet_recruit_result_item_btnget_png",
        t.visible = !1,
        t.y = 420,
        t
    },
    i.btnOnceReturn_i = function() {
        var t = new eui.Image;
        return this.btnOnceReturn = t,
        t.horizontalCenter = -77.5,
        t.source = "pet_recruit_result_panel_btnonekeyreturn_png",
        t.visible = !1,
        t.y = 540,
        t
    },
    i.btnOnceGet_i = function() {
        var t = new eui.Image;
        return this.btnOnceGet = t,
        t.horizontalCenter = 77.5,
        t.source = "pet_recruit_result_panel_btnonekeyget_png",
        t.visible = !1,
        t.y = 540,
        t
    },
    i.groupAni_i = function() {
        var t = new eui.Group;
        return this.groupAni = t,
        t.horizontalCenter = 0,
        t.verticalCenter = 0,
        t
    },
    e
} (eui.Skin);