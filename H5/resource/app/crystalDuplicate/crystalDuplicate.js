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
crystalDuplicate; !
function(t) {
    var e = function(t) {
        function e() {
            return t.call(this) || this
        }
        return __extends(e, t),
        e.prototype._initEvents = function() {},
        e.prototype._removeEvents = function() {},
        e.prototype.UpdateAll = function() {},
        e.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this),
            this._initEvents()
        },
        e.prototype.destroy = function() {
            this._removeEvents()
        },
        e
    } (BaseModule);
    t.BasePanel = e,
    __reflect(e.prototype, "crystalDuplicate.BasePanel")
} (crystalDuplicate || (crystalDuplicate = {}));
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
crystalDuplicate; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.skinName = t.WarehouseSortOptSkin,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this)
        },
        i.prototype.initEvents = function() {
            this.rb_id_sort_down.group.addEventListener(egret.Event.CHANGE, this.onChangeSortType, this)
        },
        i.prototype.removeEvents = function() {
            this.rb_id_sort_down.group.removeEventListener(egret.Event.CHANGE, this.onChangeSortType, this)
        },
        i.prototype._parseData = function() {
            this._customData = this._data
        },
        i.prototype._upDateView = function() {
            var t = this._customData.currentType;
            t && (this.rb_id_sort_down.group.selectedValue = t)
        },
        i.prototype.onChangeSortType = function(t) {
            var e = this.rb_id_sort_down.group.selectedValue,
            i = this._customData.callBack,
            n = this._customData.caller;
            i.apply(n, [e]),
            this.hide()
        },
        i.prototype.destroy = function() {
            this._customData = null,
            e.prototype.destroy.call(this)
        },
        i
    } (PopView);
    t.SortPop = e,
    __reflect(e.prototype, "crystalDuplicate.SortPop")
} (crystalDuplicate || (crystalDuplicate = {}));
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
crystalDuplicate; !
function(t) {
    var e; !
    function(t) {
        t[t.GRASS = 1] = "GRASS",
        t[t.WATER = 2] = "WATER",
        t[t.FIRE = 3] = "FIRE"
    } (e = t.PROP_IDS || (t.PROP_IDS = {}));
    var i = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t._currentSelectedTeamId = 0,
            t._otherPropId = 1,
            t._otherChangeCard = 4,
            t._values_team_1 = [],
            t._values_team_2 = [],
            t._values_team_3 = [],
            t._values_team_4 = [],
            t._values_team_5 = [],
            t._values_team_6 = [],
            t._enemyTeamList = [],
            t._valuesMap = {},
            t
        }
        return __extends(i, e),
        i.GetInstance = function() {
            return this._instance || (i._instance = new i),
            i._instance
        },
        i.prototype.InitValues = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                return __generator(this,
                function(t) {
                    switch (t.label) {
                    case 0:
                        return [4, this.updateAllValues()];
                    case 1:
                        return t.sent(),
                        [4, this.UpdateTeamCache()];
                    case 2:
                        return t.sent(),
                        Promise.resolve(),
                        [2]
                    }
                })
            })
        },
        i.prototype.UpdateTeamCache = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var t, e, i, e;
                return __generator(this,
                function(n) {
                    switch (n.label) {
                    case 0:
                        for (t = [], e = 20151; 20186 >= e; e++) t.push(e);
                        return [4, KTool.getMultiValueAsync(t)];
                    case 1:
                        for (i = n.sent(), e = 0; 6 > e; e++) this._values_team_1[e] = i[e],
                        this._values_team_2[e] = i[e + 6],
                        this._values_team_3[e] = i[e + 12],
                        this._values_team_4[e] = i[e + 18],
                        this._values_team_5[e] = i[e + 24],
                        this._values_team_6[e] = i[e + 30];
                        return console.table([this._values_team_1, this._values_team_2, this._values_team_3, this._values_team_4, this._values_team_5, this._values_team_6]),
                        [2, Promise.resolve()]
                    }
                })
            })
        },
        i.prototype.updateAllValues = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var t, e, i, n;
                return __generator(this,
                function(r) {
                    switch (r.label) {
                    case 0:
                        return t = {
                            weekly: [20190, 20191, 20192, 20193, 20194, 20195, 20196, 20197]
                        },
                        [4, KTool.getMultiValueAsync(t.weekly)];
                    case 1:
                        for (e = r.sent(), i = t.weekly, n = 0; n < i.length; n++) this._valuesMap[i[n]] = e[n];
                        return console.table(this._valuesMap),
                        [2, Promise.resolve()]
                    }
                })
            })
        },
        i.prototype.GetWarehousePets = function() {
            return new Promise(function(t, e) {
                PetStorage2015InfoManager.getTotalInfo(function() {
                    return t()
                })
            })
        },
        i.prototype.GetPetBagMap = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var t, e, i, n, r;
                return __generator(this,
                function(a) {
                    switch (a.label) {
                    case 0:
                        return [4, KTool.getMultiValueAsync([101768, 101769])];
                    case 1:
                        for (t = a.sent(), this.CurrentSelectedIdx = t[0], this.OpenPetBagPageNum = t[1], e = [], i = 0; i <= this.OpenPetBagPageNum; i++) e.push(i + 1);
                        this._bagFirstInfoMap = {},
                        this._bagSecondInfoMap = {},
                        a.label = 2;
                    case 2:
                        return e.length > 0 ? (n = e.shift(), [4, this.GetBagPetInfos(n)]) : [3, 4];
                    case 3:
                        return r = a.sent(),
                        this._bagFirstInfoMap[n] = r.firstInfo,
                        this._bagSecondInfoMap[n] = r.secondInfo,
                        [3, 2];
                    case 4:
                        return [2, Promise.resolve()]
                    }
                })
            })
        },
        i.prototype.GetBagPetInfos = function(t) {
            return __awaiter(this, void 0, void 0,
            function() {
                var e, i, n, r, a, o, s, o, s;
                return __generator(this,
                function(_) {
                    switch (_.label) {
                    case 0:
                        return e = [],
                        i = [],
                        [4, SocketConnection.sendWithPromise(42411, [t])];
                    case 1:
                        for (n = _.sent(), r = n.data, a = r.readUnsignedInt(), o = 0; a > o; o++) s = new PetStorage2015PetInfo(r),
                        e.push(s);
                        for (a = r.readUnsignedInt(), o = 0; a > o; o++) s = new PetStorage2015PetInfo(r),
                        i.push(s);
                        return [2, Promise.resolve({
                            firstInfo: e,
                            secondInfo: i
                        })]
                    }
                })
            })
        },
        i.prototype.GetFirstPetInfo = function(t) {
            return this._bagFirstInfoMap[t]
        },
        i.prototype.GetSecondPetInfo = function(t) {
            return this._bagSecondInfoMap[t]
        },
        i.prototype.GetPetBagAllPets = function() {
            var t = [];
            for (var e in this._bagFirstInfoMap) t = t.concat(this._bagFirstInfoMap[e]);
            for (var e in this._bagSecondInfoMap) t = t.concat(this._bagSecondInfoMap[e]);
            return t
        },
        i.prototype.GetTeamList = function(t) {
            return this["_values_team_" + t]
        },
        i.prototype.GetPetData = function(t) {
            var e, i = function(e) {
                for (var i = 0,
                n = e; i < n.length; i++) {
                    var r = n[i];
                    if (r.catchTime === t) return r
                }
                return null
            },
            n = this.GetPetBagAllPets();
            if (e = i(n)) return e;
            var r = PetStorage2015InfoManager.getInfoByType(0, 0);
            if (e = i(r)) return e;
            var a = PetStorage2015InfoManager.getInfoByType(1, 0);
            return e = i(a),
            e ? e: null
        },
        i.prototype.TeamUp = function(t) {
            return __awaiter(this, void 0, void 0,
            function() {
                return __generator(this,
                function(e) {
                    switch (e.label) {
                    case 0:
                        return [4, SocketConnection.sendWithPromise(41394, [1, t])];
                    case 1:
                        return e.sent(),
                        [4, this.UpdateTeamCache()];
                    case 2:
                        return e.sent(),
                        [2, Promise.resolve()]
                    }
                })
            })
        },
        i.prototype.TeamDown = function(t) {
            return __awaiter(this, void 0, void 0,
            function() {
                return __generator(this,
                function(e) {
                    switch (e.label) {
                    case 0:
                        return [4, SocketConnection.sendWithPromise(41394, [2, t])];
                    case 1:
                        return e.sent(),
                        [4, this.UpdateTeamCache()];
                    case 2:
                        return e.sent(),
                        [2, Promise.resolve()]
                    }
                })
            })
        },
        i.prototype.TeamOk = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                return __generator(this,
                function(t) {
                    switch (t.label) {
                    case 0:
                        return [4, SocketConnection.sendWithPromise(41394, [3, 0])];
                    case 1:
                        return t.sent(),
                        [4, this.updateAllValues()];
                    case 2:
                        return t.sent(),
                        [2, Promise.resolve()]
                    }
                })
            })
        },
        i.prototype.TeamDownByTeam = function(t) {
            return __awaiter(this, void 0, void 0,
            function() {
                return __generator(this,
                function(e) {
                    switch (e.label) {
                    case 0:
                        return [4, SocketConnection.sendWithPromise(41394, [4, t])];
                    case 1:
                        return e.sent(),
                        [4, this.UpdateTeamCache()];
                    case 2:
                        return e.sent(),
                        [2, Promise.resolve()]
                    }
                })
            })
        },
        i.prototype.GetFlagTeamSet = function() {
            return this._valuesMap[20191] > 0
        },
        i.prototype.GetRefCount = function() {
            return this._valuesMap[20192]
        },
        i.prototype.GetWinCount = function() {
            return this._valuesMap[20193]
        },
        i.prototype.GetHistoryWinCount = function() {
            return this._valuesMap[20196]
        },
        i.prototype.GetFailedCount = function() {
            return this._valuesMap[20194]
        },
        i.prototype.GetRewardFlag = function(t) {
            var e = this._valuesMap[20195];
            return Boolean(BitUtil.getBit(e, t))
        },
        i.prototype.GetTeamLockState = function() {
            return this._valuesMap[20197] > 0
        },
        i.prototype.ChangeTeamLockState = function(t) {
            return __awaiter(this, void 0, void 0,
            function() {
                var e;
                return __generator(this,
                function(i) {
                    switch (i.label) {
                    case 0:
                        return t ? [4, SocketConnection.sendWithPromise(41394, [5, 0])] : [3, 2];
                    case 1:
                        return i.sent(),
                        [3, 4];
                    case 2:
                        return e = this.GetSelectedTeamId(),
                        [4, SocketConnection.sendWithPromise(41394, [5, e])];
                    case 3:
                        i.sent(),
                        i.label = 4;
                    case 4:
                        return [4, this.updateAllValues()];
                    case 5:
                        return i.sent(),
                        [2, Promise.resolve()]
                    }
                })
            })
        },
        i.prototype.GetSelectedTeamId = function() {
            var t = this._valuesMap[20197];
            if (t > 0) return t;
            var e;
            if (0 === this._currentSelectedTeamId) for (var i = 0; 6 > i; i++) {
                var n = this.GetTeamList(i + 1);
                if (n[0] > 0) {
                    e = i + 1;
                    break
                }
            }
            return e
        },
        i.prototype.SetTeamId = function(t) {
            this._currentSelectedTeamId = t
        },
        i.prototype.GetEnemyTeamArray = function() {
            return this._enemyTeamList
        },
        i.prototype.UpdateEnemyArray = function(e) {
            return __awaiter(this, void 0, void 0,
            function() {
                var i, n, r, a, o;
                return __generator(this,
                function(s) {
                    switch (s.label) {
                    case 0:
                        return this._enemyTeamList = [],
                        [4, SocketConnection.sendWithPromise(41395, [e])];
                    case 1:
                        for (i = s.sent(), n = i.data, r = n.readUnsignedInt(), a = 0; r > a; a++) o = new t.EnemyTeamData(n),
                        this._enemyTeamList.push(o);
                        return 2 !== e ? [3, 3] : [4, this.updateAllValues()];
                    case 2:
                        s.sent(),
                        s.label = 3;
                    case 3:
                        return [2, Promise.resolve()]
                    }
                })
            })
        },
        i.prototype.FightEnemy = function(e, i) {
            return __awaiter(this, void 0, void 0,
            function() {
                var n, r, a, o, s, _, u, c, h;
                return __generator(this,
                function(l) {
                    switch (l.label) {
                    case 0:
                        return [4, SocketConnection.sendWithPromise(41396, [e, i])];
                    case 1:
                        for (n = l.sent(), r = n.data, a = r.readUnsignedInt(), o = 2, s = [], _ = 0; o > _; _++) u = new t.EnemyTeamData(r),
                        s.push(u);
                        for (c = this.GetEnemyTeamArray(), h = 0; h < c.length; h++) if (c[h].userId === e) {
                            c[h].UpdateBattleState(a);
                            break
                        }
                        return [4, this.updateAllValues()];
                    case 2:
                        return l.sent(),
                        [2, Promise.resolve({
                            result: a,
                            resultDataArray: s
                        })]
                    }
                })
            })
        },
        i.prototype.GetWinReward = function(t) {
            return __awaiter(this, void 0, void 0,
            function() {
                return __generator(this,
                function(e) {
                    switch (e.label) {
                    case 0:
                        return [4, SocketConnection.sendWithPromise(41394, [6, t])];
                    case 1:
                        return e.sent(),
                        [4, this.updateAllValues()];
                    case 2:
                        return e.sent(),
                        [2, Promise.resolve()]
                    }
                })
            })
        },
        i.prototype.ChooseProp = function(t) {
            return __awaiter(this, void 0, void 0,
            function() {
                return __generator(this,
                function(e) {
                    return this._myPropId = t,
                    [2, Promise.resolve()]
                })
            })
        },
        i.prototype.GetMyPropId = function() {
            return this._myPropId
        },
        i.prototype.GetOtherPropId = function() {
            return this._otherPropId
        },
        i.prototype.ChangeCard = function(t) {
            return __awaiter(this, void 0, void 0,
            function() {
                return __generator(this,
                function(t) {
                    return [2, Promise.resolve()]
                })
            })
        },
        i.prototype.GetOtherChangeCardId = function() {
            return this._otherChangeCard
        },
        i
    } (egret.EventDispatcher);
    t.MgrData = i,
    __reflect(i.prototype, "crystalDuplicate.MgrData")
} (crystalDuplicate || (crystalDuplicate = {}));
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
crystalDuplicate; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.skinName = t.CompCardSkin,
            i
        }
        return __extends(i, e),
        i.prototype._initEvents = function() {},
        i.prototype._removeEvents = function() {},
        i.prototype.setData = function(t) {
            this._cardId = t
        },
        i.prototype.useBg = function() {
            this._useBg = !0,
            this._updateCardRender()
        },
        i.prototype.enableUseBg = function() {
            this._useBg = !1,
            this._updateCardRender()
        },
        i.prototype._updateCardRender = function() {
            this._cardId > 0 && this.setCard()
        },
        i.prototype.setCard = function() {
            this.card.source = this.getSource(this._cardId)
        },
        i.prototype.getSource = function(t) {
            return 0 === t || this._useBg ? "crystalDuplicate_card_0_png": 10 > t ? "crystalDuplicate_card_000" + t + "_png": "crystalDuplicate_card_00" + t + "_png"
        },
        i.prototype.GetCardId = function() {
            return this._cardId
        },
        i.prototype.UpdateCardId = function(t) {
            this._cardId = t,
            this._updateCardRender()
        },
        i.prototype.childrenCreated = function() {
            this.anchorOffsetX = this.width / 2,
            this.anchorOffsetY = this.height / 2,
            this._initEvents(),
            this.setCard(),
            this.touchChildren = !1,
            this.touchEnabled = !0,
            this.flagSelected.visible = !1
        },
        i.prototype.resetHandler = function() {
            DisplayUtil.removeForParent(this),
            this.scaleY = this.scaleX = 1,
            this._useBg = !1,
            this.flagSelected.visible = !1
        },
        i.prototype.setSelectedFlag = function(t) {
            this.flagSelected.visible = t
        },
        i.prototype.destroy = function() {
            this._removeEvents()
        },
        i
    } (BaseModule);
    t.CompCard = e,
    __reflect(e.prototype, "crystalDuplicate.CompCard")
} (crystalDuplicate || (crystalDuplicate = {}));
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
crystalDuplicate; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.skinName = t.CompChoosePropSkin,
            i
        }
        return __extends(i, e),
        i.prototype._initEvents = function() {
            ImageButtonUtil.add(this.btnSure, this.onSure, this)
        },
        i.prototype._removeEvents = function() {
            ImageButtonUtil.removeAll(this)
        },
        i.prototype.setCallBack = function(t, e, i) {
            this._callBack = t,
            this._caller = i,
            this._timeOutCallBack = e
        },
        i.prototype.childrenCreated = function() {
            this._initEvents()
        },
        i.prototype.Start = function() {
            this._timeSecond = 10,
            this.txtTm.text = this._timeSecond + "",
            this._timerFlag = egret.setInterval(this.onTime, this, 1e3)
        },
        i.prototype.onTime = function(t) {
            return 0 === this._timeSecond ? void this.onTimeOut() : (this._timeSecond--, void(this.txtTm.text = this._timeSecond + ""))
        },
        i.prototype.onTimeOut = function() {
            egret.clearInterval(this._timerFlag),
            this._timeOutCallBack.apply(this._caller, null)
        },
        i.prototype.onSure = function() {
            egret.clearInterval(this._timerFlag),
            this._callBack.apply(this._caller, null)
        },
        i.prototype.destroy = function() {
            this._callBack = null,
            this._caller = null,
            this._timeOutCallBack = null,
            this._removeEvents()
        },
        i
    } (BaseModule);
    t.CompChangeCard = e,
    __reflect(e.prototype, "crystalDuplicate.CompChangeCard")
} (crystalDuplicate || (crystalDuplicate = {}));
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
crystalDuplicate; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.skinName = t.CompChoosePropSkin,
            i
        }
        return __extends(i, e),
        i.prototype._initEvents = function() {
            ImageButtonUtil.add(this.btnSure, this.onSure, this),
            ImageButtonUtil.add(this.propItem0, this.onTouchPropItem, this, !1, !1),
            ImageButtonUtil.add(this.propItem1, this.onTouchPropItem, this, !1, !1),
            ImageButtonUtil.add(this.propItem2, this.onTouchPropItem, this, !1, !1)
        },
        i.prototype._removeEvents = function() {
            ImageButtonUtil.removeAll(this)
        },
        i.prototype.setCallBack = function(t, e, i) {
            this._callBack = t,
            this._caller = i,
            this._timeOutCallBack = e
        },
        i.prototype.childrenCreated = function() {
            this.propItem0.name = "prop_" + t.PROP_IDS.GRASS,
            this.propItem1.name = "prop_" + t.PROP_IDS.WATER,
            this.propItem2.name = "prop_" + t.PROP_IDS.FIRE,
            this._currentChooseId = 0,
            this._initEvents()
        },
        i.prototype.Start = function() {
            this._timeSecond = 5,
            this.txt_timer.text = this._timeSecond + "",
            this._timerFlag = egret.setInterval(this.onTime, this, 1e3)
        },
        i.prototype.onTime = function(t) {
            return 0 === this._timeSecond ? void this.onTimeOut() : (this._timeSecond--, void(this.txt_timer.text = this._timeSecond + ""))
        },
        i.prototype.onTimeOut = function() {
            egret.clearInterval(this._timerFlag),
            this._timeOutCallBack.apply(this._caller, null)
        },
        i.prototype.onSure = function() {
            return 0 === this._currentChooseId ? void BubblerManager.getInstance().showText("还没有选择属性") : (egret.clearInterval(this._timerFlag), void this._callBack.apply(this._caller, [this._currentChooseId]))
        },
        i.prototype.onTouchPropItem = function(t) {
            var e = t.currentTarget.name,
            i = parseInt(e.split("_")[1]);
            this._currentChooseId = i,
            this._updatePropItemRender()
        },
        i.prototype._updatePropItemRender = function() {
            for (var t = [this.propItem0, this.propItem1, this.propItem2], e = this._currentChooseId, i = 0; i < t.length; i++) {
                var n = parseInt(t[i].name.split("_")[1]);
                this["flag_selected" + i].visible = e === n
            }
        },
        i.prototype.show = function() {
            this._currentChooseId = 0,
            this._updatePropItemRender(),
            e.prototype.show.call(this)
        },
        i.prototype.destroy = function() {
            this._callBack = null,
            this._caller = null,
            this._timeOutCallBack = null,
            this._removeEvents()
        },
        i
    } (BaseModule);
    t.CompChooseProp = e,
    __reflect(e.prototype, "crystalDuplicate.CompChooseProp")
} (crystalDuplicate || (crystalDuplicate = {}));
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
crystalDuplicate; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i._initFlag = !1,
            i.skinName = t.EnemyTeamInfoSkin,
            i
        }
        return __extends(i, e),
        i.prototype._initEvents = function() {
            var e = this;
            ImageButtonUtil.add(this.fight_btn,
            function() {
                t.MgrData.GetInstance().dispatchEventWith(t.UI_EVENT.TOUCH_FIGHT_ENEMY, !1, e)
            },
            this)
        },
        i.prototype._removeEvents = function() {
            ImageButtonUtil.removeAll(this)
        },
        i.prototype.setData = function(t) {
            this._customData = t
        },
        i.prototype.UpdateInfo = function() {
            this._initFlag && this._customData && (this.setPlayerInfo(), this.setPetList(this._customData.petIds), this.setBattleState(this._customData.battle_state))
        },
        i.prototype.setPlayerInfo = function() {
            this.headIcon.setData({
                headId: this._customData.headId,
                headFrameId: this._customData.headFrame
            }),
            this.tx_nameTx.text = this._customData.nick
        },
        i.prototype.setPetList = function(t) {
            for (var e = 0; e < t.length; e++) this["imge_pet_head_" + e].source = ClientConfig.getPetHeadPath(t[e])
        },
        i.prototype.UpdateState = function() {
            this.setBattleState(this._customData.battle_state)
        },
        i.prototype.setBattleState = function(t) {
            this.img_win_flag.visible = 1 === t,
            this.fight_btn.visible = 1 !== t
        },
        i.prototype.GetCustomData = function() {
            return this._customData
        },
        i.prototype.childrenCreated = function() {
            this._initEvents(),
            this._initFlag = !0,
            this.headIcon.setScale(.65),
            this.UpdateInfo()
        },
        i.prototype.destroy = function() {
            this.headIcon.Destroy(),
            this._removeEvents()
        },
        i
    } (BaseModule);
    t.EnemyTeamInfo = e,
    __reflect(e.prototype, "crystalDuplicate.EnemyTeamInfo")
} (crystalDuplicate || (crystalDuplicate = {}));
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
crystalDuplicate; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.skinName = t.ResultPlayerInfoSkin,
            i
        }
        return __extends(i, e),
        i.prototype._initEvents = function() {},
        i.prototype._removeEvents = function() {},
        i.prototype.setData = function(t) {
            this._customData = t
        },
        i.prototype.UpdateInfo = function() {
            var t = this._customData.petIds,
            e = this._customData.scoreArray,
            i = 0;
            this.headIcon.setData({
                headId: this._customData.headId,
                headFrameId: this._customData.headFrame
            }),
            this.txt_name.text = this._customData.nick;
            for (var n = 0; n < t.length; n++) this["icon" + n].source = ClientConfig.getPetHeadPath(t[n]),
            this["txt_lab" + n].text = e[n],
            i += e[n];
            this.txt_num.text = i + ""
        },
        i.prototype.childrenCreated = function() {
            this._initEvents(),
            this.headIcon.setScale(.65)
        },
        i.prototype.destroy = function() {
            this.headIcon.Destroy(),
            this._removeEvents()
        },
        i
    } (BaseModule);
    t.ResultPlayerItem = e,
    __reflect(e.prototype, "crystalDuplicate.ResultPlayerItem")
} (crystalDuplicate || (crystalDuplicate = {}));
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
crystalDuplicate; !
function(t) {
    var e; !
    function(t) {
        t[t.INCOMPLETE = 0] = "INCOMPLETE",
        t[t.REWARD = 1] = "REWARD",
        t[t.COMPLETE = -1] = "COMPLETE"
    } (e = t.REWARD_STATE || (t.REWARD_STATE = {}));
    var i = function(i) {
        function n() {
            var e = i.call(this) || this;
            return e.skinName = t.RewardBoxSkin,
            e
        }
        return __extends(n, i),
        n.prototype._initEvents = function() {},
        n.prototype._removeEvents = function() {},
        n.prototype.SetState = function(t) {
            this._state = t,
            this.incomplete.visible = t === e.INCOMPLETE,
            this.reward.visible = t === e.REWARD,
            this.complete.visible = t === e.COMPLETE
        },
        n.prototype.GetState = function() {
            return this._state
        },
        n.prototype.childrenCreated = function() {
            this._initEvents()
        },
        n.prototype.destroy = function() {
            this._removeEvents()
        },
        n
    } (BaseModule);
    t.RewardBox = i,
    __reflect(i.prototype, "crystalDuplicate.RewardBox")
} (crystalDuplicate || (crystalDuplicate = {}));
var __reflect = this && this.__reflect ||
function(t, e, i) {
    t.__class__ = e,
    i ? i.push(e) : i = [e],
    t.__types__ = t.__types__ ? i.concat(t.__types__) : i
},
crystalDuplicate; !
function(t) {
    var e = function() {
        function t(t) {
            this._userId = t.readUnsignedInt(),
            this._nick = t.readUTFBytes(16),
            this._head_id = t.readUnsignedInt() || 1,
            this._head_frame_id = t.readUnsignedInt();
            for (var e = 6,
            i = 0; e > i; i++) this._petIds || (this._petIds = []),
            this._petIds.push(t.readUnsignedInt());
            for (var i = 0; e > i; i++) this._scoreArray || (this._scoreArray = []),
            this._scoreArray.push(t.readUnsignedInt());
            this._battle_state = t.readUnsignedInt()
        }
        return Object.defineProperty(t.prototype, "userId", {
            get: function() {
                return this._userId
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(t.prototype, "petIds", {
            get: function() {
                return this._petIds
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(t.prototype, "battle_state", {
            get: function() {
                return this._battle_state
            },
            enumerable: !0,
            configurable: !0
        }),
        t.prototype.UpdateBattleState = function(t) {
            this._battle_state = t
        },
        Object.defineProperty(t.prototype, "nick", {
            get: function() {
                return this._nick
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(t.prototype, "headId", {
            get: function() {
                return this._head_id
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(t.prototype, "headFrame", {
            get: function() {
                return this._head_frame_id
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(t.prototype, "scoreArray", {
            get: function() {
                return this._scoreArray
            },
            enumerable: !0,
            configurable: !0
        }),
        t
    } ();
    t.EnemyTeamData = e,
    __reflect(e.prototype, "crystalDuplicate.EnemyTeamData")
} (crystalDuplicate || (crystalDuplicate = {}));
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
crystalDuplicate; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.skinName = t.PageItemSkin,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this)
        },
        Object.defineProperty(i.prototype, "selected", {
            get: function() {
                return egret.superGetter(i, this, "selected")
            },
            set: function(t) {
                this.page_down.visible = t,
                egret.superSetter(i, this, "selected", t)
            },
            enumerable: !0,
            configurable: !0
        }),
        i.prototype.dataChanged = function() {
            this.txt_num.text = this.data
        },
        i
    } (eui.ItemRenderer);
    t.PageItem = e,
    __reflect(e.prototype, "crystalDuplicate.PageItem")
} (crystalDuplicate || (crystalDuplicate = {}));
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
crystalDuplicate; !
function(t) {
    var e; !
    function(t) {
        t.MAIN = "main",
        t.SET_TEAM = "set_team",
        t.level1 = "level1",
        t.level2Main = "level2"
    } (e = t.PANEL_NAMES || (t.PANEL_NAMES = {}));
    var i; !
    function(t) {
        t.CLOSE_MODULE = "close_module",
        t.CHANGE_PANEL = "change_panel",
        t.BACK_MAIN_PANEL = "back_main_panel",
        t.TOUCH_SELECTED_PET_ITEM = "selected_pet_item",
        t.TOUCH_ALL_DOWN = "touch_all_down",
        t.TOUCH_FIGHT_ENEMY = "touch_fight_enemy"
    } (i = t.UI_EVENT || (t.UI_EVENT = {}));
    var n = function(n) {
        function r() {
            var t = n.call(this) || this;
            return t._panelObj = {},
            t._changePanelAnimation = common.TweenUtil.createChangeViewFadeInOut(),
            t
        }
        return __extends(r, n),
        r.prototype.childrenCreated = function() {
            var i = this;
            n.prototype.childrenCreated.call(this),
            this._initEvents(),
            t.MgrData.GetInstance().InitValues().then(function() {
                i._openPanel(e.MAIN)
            })
        },
        r.prototype._initEvents = function() {
            t.MgrData.GetInstance().addEventListener(i.BACK_MAIN_PANEL, this.onBackMainPanelHandle, this),
            t.MgrData.GetInstance().addEventListener(i.CHANGE_PANEL, this.onChangePanel, this),
            t.MgrData.GetInstance().addEventListener(i.CLOSE_MODULE, this.closeHandle, this)
        },
        r.prototype._removeEvents = function() {
            t.MgrData.GetInstance().removeEventListener(i.BACK_MAIN_PANEL, this.onBackMainPanelHandle, this),
            t.MgrData.GetInstance().removeEventListener(i.CHANGE_PANEL, this.onChangePanel, this),
            t.MgrData.GetInstance().removeEventListener(i.CLOSE_MODULE, this.closeHandle, this)
        },
        r.prototype._openPanel = function(t, e) {
            return void 0 === e && (e = !1),
            __awaiter(this, void 0, void 0,
            function() {
                var i;
                return __generator(this,
                function(n) {
                    switch (n.label) {
                    case 0:
                        return this._panelObj[t] || (this._panelObj[t] = this._createPanel(t), this._panelObj[t]) ? e ? [4, this._changePanelAnimation.play()] : [3, 2] : [2, console.error("当前面板不存在%s", t)];
                    case 1:
                        n.sent(),
                        n.label = 2;
                    case 2:
                        return this.removeChildren(),
                        i = this._panelObj[t],
                        [4, this._getPanelData(t)["catch"](function() {
                            return console.log("数据拉去失败"),
                            Promise.reject(null)
                        })];
                    case 3:
                        return n.sent(),
                        this.addChild(this._panelObj[t]),
                        i.UpdateAll(),
                        e ? [4, this._changePanelAnimation.hide()] : [3, 5];
                    case 4:
                        n.sent(),
                        n.label = 5;
                    case 5:
                        return [2, Promise.resolve()]
                    }
                })
            })
        },
        r.prototype._getPanelData = function(i) {
            return __awaiter(this, void 0, void 0,
            function() {
                var n;
                return __generator(this,
                function(r) {
                    switch (r.label) {
                    case 0:
                        switch (n = i) {
                        case e.SET_TEAM:
                            return [3, 1];
                        case e.level1:
                            return [3, 4]
                        }
                        return [3, 8];
                    case 1:
                        return [4, t.MgrData.GetInstance().GetWarehousePets()];
                    case 2:
                        return r.sent(),
                        [4, t.MgrData.GetInstance().GetPetBagMap()];
                    case 3:
                        return r.sent(),
                        [3, 9];
                    case 4:
                        return [4, t.MgrData.GetInstance().GetWarehousePets()];
                    case 5:
                        return r.sent(),
                        [4, t.MgrData.GetInstance().GetPetBagMap()];
                    case 6:
                        return r.sent(),
                        [4, t.MgrData.GetInstance().UpdateEnemyArray(1)];
                    case 7:
                        return r.sent(),
                        [3, 9];
                    case 8:
                        return [3, 9];
                    case 9:
                        return [2, Promise.resolve()]
                    }
                })
            })
        },
        r.prototype._createPanel = function(i) {
            var n;
            switch (i) {
            case e.MAIN:
                n = new t.MainPanel;
                break;
            case e.level1:
                n = new t.GameLevel1Panel;
                break;
            case e.SET_TEAM:
                n = new t.SelectedPanel;
                break;
            case e.level2Main:
                n = new t.GameLevel2MainPanel
            }
            return n
        },
        r.prototype.onBackMainPanelHandle = function() {
            this._openPanel(e.MAIN, !0)
        },
        r.prototype.onChangePanel = function(t) {
            this._openPanel(t.data, !0)
        },
        r.prototype.closeHandle = function() {
            this.onClose()
        },
        r.prototype.show = function() {
            n.prototype.show.call(this)
        },
        r.prototype.destroy = function() {
            this._changePanelAnimation.destroy(),
            this._removeEvents();
            for (var t in this._panelObj) DisplayUtil.removeForParent(this._panelObj[t]),
            this._panelObj[t].destroy();
            n.prototype.destroy.call(this)
        },
        r
    } (BaseModule);
    t.CrystalDuplicate = n,
    __reflect(n.prototype, "crystalDuplicate.CrystalDuplicate")
} (crystalDuplicate || (crystalDuplicate = {}));
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
crystalDuplicate; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.skinName = t.PetIconStyle2Skin,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this)
        },
        Object.defineProperty(i.prototype, "selected", {
            get: function() {
                return egret.superGetter(i, this, "selected")
            },
            set: function(t) {
                egret.superSetter(i, this, "selected", t)
            },
            enumerable: !0,
            configurable: !0
        }),
        i.prototype.dataChanged = function() {
            this._info = this.data,
            this.group_info.visible = null !== this._info && void 0 !== this._info,
            this.touchEnabled = this.touchChildren = this.group_info.visible,
            this._info && (this.txtName.text = StringUtil.parseStrLimitLen(this._info.name, 6), this.icon.source = ClientConfig.getPetHeadPath(this._info.id), this.txtLv.text = "Lv." + this._info.level)
        },
        i
    } (eui.ItemRenderer);
    t.PetIconStyle2 = e,
    __reflect(e.prototype, "crystalDuplicate.PetIconStyle2")
} (crystalDuplicate || (crystalDuplicate = {}));
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
crystalDuplicate; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.skinName = t.TeamInfoSkin,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this)
        },
        i.prototype.dataChanged = function() {
            this.txt_team.text = "编队" + (this.data.idx + 1);
            for (var t = this.data.infos,
            e = 0; e < t.length; e++) {
                var i = t[e];
                this["icon" + e].source = i ? ClientConfig.getPetHeadPath(i.id) : null
            }
        },
        i
    } (eui.ItemRenderer);
    t.SelectedTeamItem = e,
    __reflect(e.prototype, "crystalDuplicate.SelectedTeamItem")
} (crystalDuplicate || (crystalDuplicate = {}));
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
crystalDuplicate; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.addEventListener(egret.Event.REMOVED_FROM_STAGE, i.destroy, i),
            i._petList = new eui.ArrayCollection([null, null, null, null, null, null]),
            i.skinName = t.TeamPetIconsItem,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this._addEvents(),
            this.list_head.itemRenderer = t.PetIconStyle1,
            this.list_head.dataProvider = this._petList
        },
        i.prototype._addEvents = function() {
            ImageButtonUtil.add(this.aKey_down, this.allDownHandler, this),
            this.list_head.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.onTouchTapPetHeadHandler, this)
        },
        i.prototype._removeEvents = function() {
            ImageButtonUtil.removeAll(this),
            this.list_head.removeEventListener(eui.ItemTapEvent.ITEM_TAP, this.onTouchTapPetHeadHandler, this)
        },
        i.prototype.dataChanged = function() {
            this.teamNameTx_0.text = "编队" + (this.data.idx + 1),
            this._petList.removeAll();
            for (var t = 0; t < this.data.petArray.length; t++) this._petList.addItem(this.data.petArray[t])
        },
        i.prototype.allDownHandler = function() {
            t.MgrData.GetInstance().dispatchEventWith(t.UI_EVENT.TOUCH_ALL_DOWN, !1, {
                idx: this.data.idx
            })
        },
        i.prototype.onTouchTapPetHeadHandler = function(e) {
            e.item && t.MgrData.GetInstance().dispatchEventWith(t.UI_EVENT.TOUCH_SELECTED_PET_ITEM, !1, {
                render: e.itemRenderer,
                data: {
                    idx: this.data.idx,
                    info: e.item
                }
            })
        },
        i.prototype.destroy = function() {
            this._removeEvents()
        },
        i
    } (eui.ItemRenderer);
    t.TeamItem = e,
    __reflect(e.prototype, "crystalDuplicate.TeamItem")
} (crystalDuplicate || (crystalDuplicate = {}));
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
crystalDuplicate; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i._itemID = 1,
            i._lockReward = !1,
            i.skinName = t.CrystalduplicateLv0ViewSkin,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this._initEvents()
        },
        i.prototype._initEvents = function() {
            var e = this;
            ImageButtonUtil.add(this.img_close_btn, this.onTouchImageButton, this),
            ImageButtonUtil.add(this.imge_buy_btn, this.onTouchImageButton, this),
            ImageButtonUtil.add(this.img_team_lock, this.onTouchImageButton, this),
            ImageButtonUtil.add(this.btnRef, this.onTouchImageButton, this),
            ImageButtonUtil.add(this.img_fangshou_btn, this.onTouchImageButton, this);
            for (var i = function(t) {
                ImageButtonUtil.add(n["reward" + t],
                function(i) {
                    e.onTouchImageButton(i, t)
                },
                n, !1, !1)
            },
            n = this, r = 0; 4 > r; r++) i(r);
            EventManager.addEventListener(GameEvent.NOTIFY_ITEM_CHANGE, this.onUpdateByItemChangeEvent, this),
            t.MgrData.GetInstance().addEventListener(t.UI_EVENT.TOUCH_FIGHT_ENEMY, this.onFight, this)
        },
        i.prototype._removeEvents = function() {
            ImageButtonUtil.removeAll(this),
            EventManager.removeEventListener(GameEvent.NOTIFY_ITEM_CHANGE, this.onUpdateByItemChangeEvent, this),
            t.MgrData.GetInstance().removeEventListener(t.UI_EVENT.TOUCH_FIGHT_ENEMY, this.onFight, this)
        },
        i.prototype.onUpdateByItemChangeEvent = function(t) {
            void 0 === t && (t = null),
            this.tx_item_num.text = ItemManager.getNumByID(this._itemID) + ""
        },
        i.prototype.onTouchImageButton = function(e, i) {
            var n = this;
            switch (e.currentTarget) {
            case this.img_close_btn:
                t.MgrData.GetInstance().dispatchEventWith(t.UI_EVENT.BACK_MAIN_PANEL);
                break;
            case this.img_team_lock:
                var r = t.MgrData.GetInstance().GetTeamLockState();
                if (r) t.MgrData.GetInstance().ChangeTeamLockState(!0).then(function() {
                    n.setTeamLockState(!0)
                })["catch"](function() {
                    console.log("锁定编队设置切换失败")
                });
                else {
                    var a = t.MgrData.GetInstance().GetSelectedTeamId(),
                    o = egret.localStorage.getItem("crystalDuplicate_first_lockTeam_flag");
                    parseInt(o) ? t.MgrData.GetInstance().ChangeTeamLockState(!1).then(function() {
                        n.setTeamLockState(!0)
                    })["catch"](function() {
                        console.log("锁定编队设置切换失败")
                    }) : (egret.localStorage.setItem("crystalDuplicate_first_lockTeam_flag", "1"), Alert.show("锁定后每次挑战将会跳过编队选择，默认直接用编队" + a + "进行挑战（之后可以解锁），确认锁定吗",
                    function() {
                        t.MgrData.GetInstance().ChangeTeamLockState(!1).then(function() {
                            n.setTeamLockState(!0)
                        })["catch"](function() {
                            console.log("锁定编队设置切换失败")
                        })
                    }))
                }
                break;
            case this.btnRef:
                this._halfRefCount > 0 ? (this.btnRef.touchEnabled = !1, this.refEnemyTeam().then(function() {
                    n.btnRef.touchEnabled = !0
                })["catch"](function() {
                    n.btnRef.touchEnabled = !0
                })) : Alarm.show("手动刷新次数不足");
                break;
            case this.img_fangshou_btn:
                break;
            case this.reward0:
            case this.reward1:
            case this.reward2:
            case this.reward3:
                var s = e.currentTarget.GetState();
                if (s != t.REWARD_STATE.REWARD) return;
                if (this._lockReward) return;
                this._lockReward = !0,
                this.getReward(i).then(function() {
                    console.log("奖励%i领取成功", i + 1),
                    n.setWinState(),
                    n._lockReward = !1
                })["catch"](function() {
                    console.log("奖励%i领取失败", i + 1),
                    n._lockReward = !1
                })
            }
        },
        i.prototype.show = function() {
            e.prototype.show.call(this)
        },
        i.prototype.UpdateAll = function() {
            this.onUpdateByItemChangeEvent(),
            this.setEnemyRender(),
            this.setRefState(),
            this.setTeamLockState(),
            this.setWinState(),
            this.setTeamId()
        },
        i.prototype.setEnemyRender = function() {
            for (var e = t.MgrData.GetInstance().GetEnemyTeamArray(), i = 0; i < e.length; i++) this["enemy" + i].setData(e[i]),
            this["enemy" + i].UpdateInfo()
        },
        i.prototype.setTeamId = function() {
            var e = t.MgrData.GetInstance().GetSelectedTeamId();
            this.tx_lock_team.text = "锁定编队" + e
        },
        i.prototype.setRefState = function() {
            var e = 3;
            this._halfRefCount = e - t.MgrData.GetInstance().GetRefCount(),
            this.tx_reSetNum.text = this._halfRefCount + "/" + e
        },
        i.prototype.setTeamLockState = function(e) {
            void 0 === e && (e = !1);
            var i = t.MgrData.GetInstance().GetTeamLockState();
            if (this.img_team_lock.source = i ? "crystalDuplicate_Lv0_view_img_lock_png": "crystalDuplicate_Lv0_view_img_unlock_png", e) {
                var n = i ? "出战编队锁定已开启": "出战编队锁定已解除";
                Alarm.show(n)
            }
        },
        i.prototype.setWinState = function() {
            var e = 12,
            i = [this.img_winPiece_0, this.img_winPiece_1, null, this.img_winPiece_2, this.img_winPiece_3, null, this.img_winPiece_4, this.img_winPiece_5, null, this.img_winPiece_6, this.img_winPiece_7, null],
            n = t.MgrData.GetInstance().GetWinCount();
            this.progress_reward.minimum = 0,
            this.progress_reward.maximum = e,
            this.progress_reward.value = Math.max(0, Math.min(n, e));
            for (var r = 0; r < i.length; r++) {
                var a = i[r];
                a && (a.source = n > r ? "crystalDuplicate_Lv0_view_img_failPiece_0_png": "crystalDuplicate_Lv0_view_img_failPiece_1_png")
            }
            for (var o = t.MgrData.GetInstance().GetFailedCount(), r = 0; 2 > r; r++) this["img_failPiece_" + r].source = o > r ? "crystalDuplicate_Lv0_view_img_failPiece_0_png": "crystalDuplicate_Lv0_view_img_failPiece_1_png";
            for (var s = t.MgrData.GetInstance().GetHistoryWinCount(), _ = [3, 6, 9, 12], r = 0; r < _.length; r++) {
                var u = this["reward" + r],
                c = t.MgrData.GetInstance().GetRewardFlag(r);
                c ? u.SetState(t.REWARD_STATE.COMPLETE) : u.SetState(s >= _[r] ? t.REWARD_STATE.REWARD: t.REWARD_STATE.INCOMPLETE)
            }
        },
        i.prototype.onFight = function(e) {
            this._selectedEnemyRender = e.data;
            var i = t.MgrData.GetInstance().GetTeamLockState();
            if (i) this.fightEnemy(t.MgrData.GetInstance().GetSelectedTeamId());
            else {
                var n = PopViewManager.createDefaultStyleObject();
                n.caller = this,
                n.clickMaskHandler = function() {};
                var r = {};
                r.caller = this,
                r.callBack = this.fightEnemy,
                r.currentIdx = t.MgrData.GetInstance().GetSelectedTeamId() - 1,
                r.teams = [t.MgrData.GetInstance().GetTeamList(1), t.MgrData.GetInstance().GetTeamList(2), t.MgrData.GetInstance().GetTeamList(3), t.MgrData.GetInstance().GetTeamList(4), t.MgrData.GetInstance().GetTeamList(5), t.MgrData.GetInstance().GetTeamList(6)],
                PopViewManager.getInstance().openView(new t.SelectedTeamPop, n, r)
            }
        },
        i.prototype.fightEnemy = function(e) {
            var i = this;
            console.log("当前选择的编队为" + e);
            var n = this._selectedEnemyRender.GetCustomData().userId;
            this._selectedEnemyRender.GetCustomData().petIds,
            this._selectedEnemyRender.GetCustomData();
            AwardManager.pause(),
            t.MgrData.GetInstance().FightEnemy(n, e).then(function(e) {
                var n = PopViewManager.createDefaultStyleObject();
                n.caller = i,
                n.clickMaskHandler = function() {};
                var r = {};
                r.caller = i,
                r.callBack = function() {
                    AwardManager.resume(),
                    i._selectedEnemyRender.UpdateState(),
                    i.setWinState(),
                    i._checkAutoUpdateEnemy()
                },
                r.result = e.result,
                r.resultData = e.resultDataArray,
                PopViewManager.getInstance().openView(new t.ResultPop, n, r)
            })
        },
        i.prototype._checkAutoUpdateEnemy = function() {
            for (var e = this,
            i = !0,
            n = t.MgrData.GetInstance().GetEnemyTeamArray(), r = 0; r < n.length; r++) if (1 != n[r].battle_state) {
                i = !1;
                break
            }
            i && (console.log("本批敌人已经全部挑战完毕自动刷新一下"), t.MgrData.GetInstance().UpdateEnemyArray(1).then(function() {
                e.setEnemyRender()
            }))
        },
        i.prototype.refEnemyTeam = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                return __generator(this,
                function(e) {
                    switch (e.label) {
                    case 0:
                        return [4, t.MgrData.GetInstance().UpdateEnemyArray(2)["catch"](function() {
                            return Promise.reject(null)
                        })];
                    case 1:
                        return e.sent(),
                        BubblerManager.getInstance().showText("刷新成功"),
                        this.setEnemyRender(),
                        this.setRefState(),
                        [2, Promise.resolve()]
                    }
                })
            })
        },
        i.prototype.getReward = function(e) {
            return __awaiter(this, void 0, void 0,
            function() {
                return __generator(this,
                function(i) {
                    switch (i.label) {
                    case 0:
                        return [4, t.MgrData.GetInstance().GetWinReward(e + 1)["catch"](function() {
                            return Promise.reject(null)
                        })];
                    case 1:
                        return i.sent(),
                        this.setWinState(),
                        [2, Promise.resolve()]
                    }
                })
            })
        },
        i.prototype.hide = function() {
            e.prototype.hide.call(this)
        },
        i.prototype.destroy = function() {
            for (var t = 0; 4 > t; t++) this["enemy" + t].destroy();
            e.prototype.destroy.call(this)
        },
        i
    } (t.BasePanel);
    t.GameLevel1Panel = e,
    __reflect(e.prototype, "crystalDuplicate.GameLevel1Panel")
} (crystalDuplicate || (crystalDuplicate = {}));
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
crystalDuplicate; !
function(t) {
    var e; !
    function(t) {
        t[t.CHOOSE_PROP = 0] = "CHOOSE_PROP",
        t[t.DEAL_CARDS = 1] = "DEAL_CARDS",
        t[t.CHANGE_CARDS = 2] = "CHANGE_CARDS",
        t[t.ROUND = 3] = "ROUND"
    } (e || (e = {}));
    var i; !
    function(t) {
        t[t.SKILL_1 = 1] = "SKILL_1",
        t[t.SKILL_2 = 2] = "SKILL_2",
        t[t.SKILL_3 = 3] = "SKILL_3",
        t[t.SKILL_4 = 4] = "SKILL_4"
    } (i || (i = {}));
    var n = function(n) {
        function r() {
            var e = n.call(this) || this;
            return e._useSkillState = 0,
            e._pool = new ObjectPool(t.CompCard, 9999, "resetHandler", "destroy"),
            e._arrayPublicCards = [],
            e._arrayMyHandsCards = [],
            e._arrayOtherHandsCards = [],
            e._arrayMyPrivateCards = [],
            e._arrayOtherPrivateCards = [],
            e._currentStep = -1,
            e.skinName = t.CardMainPanelSkin,
            e
        }
        return __extends(r, n),
        r.prototype.childrenCreated = function() {
            n.prototype.childrenCreated.call(this),
            this._initEvents()
        },
        r.prototype._initEvents = function() {
            ImageButtonUtil.add(this.btnScore, this._onTouchImageButton, this),
            ImageButtonUtil.add(this.btnClose, this._onTouchImageButton, this),
            ImageButtonUtil.add(this.btnPrivate, this._onTouchImageButton, this),
            ImageButtonUtil.add(this.btnPublic, this._onTouchImageButton, this),
            ImageButtonUtil.add(this.skill0, this._onTouchImageButton, this),
            ImageButtonUtil.add(this.skill1, this._onTouchImageButton, this),
            ImageButtonUtil.add(this.skill2, this._onTouchImageButton, this),
            ImageButtonUtil.add(this.skill3, this._onTouchImageButton, this),
            ImageButtonUtil.add(this.btnT0, this._onTouchImageButton, this),
            ImageButtonUtil.add(this.btnT1, this._onTouchImageButton, this),
            ImageButtonUtil.add(this.btnT2, this._onTouchImageButton, this),
            ImageButtonUtil.add(this.group_myHands, this.onTouchMyHandGroup, this, !1, !1),
            ImageButtonUtil.add(this.group_otherHands, this.onTouchOtherHandGroup, this, !1, !1),
            ImageButtonUtil.add(this.group_publicCards, this.onTouchPublicGroup, this, !1, !1),
            ImageButtonUtil.add(this.group_myPrivate, this.onTouchMyPrivateGroup, this, !1, !1),
            ImageButtonUtil.add(this.group_otherPrivate, this.onTouchOtherPrivateGroup, this, !1, !1)
        },
        r.prototype._removeEvents = function() {
            ImageButtonUtil.removeAll(this)
        },
        r.prototype._onTouchImageButton = function(e) {
            var n = this;
            switch (e.currentTarget) {
            case this.btnClose:
                t.MgrData.GetInstance().dispatchEventWith(t.UI_EVENT.BACK_MAIN_PANEL);
                break;
            case this.btnScore:
                this.testUseSkill();
                break;
            case this.btnT0:
                this._selectedOtherHandCard && this.synOtherCardToPrivate(this._selectedOtherHandCard).then(function() {
                    n._selectedOtherHandCard = null
                });
                break;
            case this.btnT1:
                this.testAddCardToHand().then(function() {
                    console.log("添加一张手牌成功")
                });
                break;
            case this.btnT2:
                this._selectedOtherHandCard && this.synOtherCardToPublic(this._selectedOtherHandCard).then(function() {
                    n._selectedOtherHandCard = null
                });
                break;
            case this.btnPrivate:
                this._currentSelectedMyHandCard && this.playCardToMyPrivate(this._currentSelectedMyHandCard).then(function() {
                    n._currentSelectedMyHandCard = null
                });
                break;
            case this.btnPublic:
                this._currentSelectedMyHandCard && this.playCardToPublic(this._currentSelectedMyHandCard).then(function() {
                    n._currentSelectedMyHandCard = null
                });
                break;
            case this.skill0:
                Alarm.show("请选择要交换的敌方私有牌和公共牌",
                function() {
                    n._useSkillState = i.SKILL_1
                });
                break;
            case this.skill1:
                Alarm.show("请选择要交换的我方私有牌和公共牌",
                function() {
                    n._useSkillState = i.SKILL_2
                });
                break;
            case this.skill2:
                Alarm.show("请选择要移除的敌方方私有牌",
                function() {
                    n._useSkillState = i.SKILL_3
                });
                break;
            case this.skill3:
                Alarm.show("请选择要移除的我方私有牌",
                function() {
                    n._useSkillState = i.SKILL_2
                })
            }
        },
        r.prototype.testUseSkill = function() {
            var t = this;
            switch (this._useSkillState) {
            case i.SKILL_1:
                this.useSkill0().then(function(e) {
                    e && (t._useSkillState = 0)
                });
                break;
            case i.SKILL_2:
                this.useSkill1().then(function(e) {
                    e && (t._useSkillState = 0)
                });
                break;
            case i.SKILL_3:
                this.useSkill2().then(function(e) {
                    e && (t._useSkillState = 0)
                });
                break;
            case i.SKILL_4:
                this.useSkill3().then(function(e) {
                    e && (t._useSkillState = 0)
                })
            }
        },
        r.prototype.useSkill0 = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                return __generator(this,
                function(t) {
                    return this._selectedOtherPrivateCard && this._arrayPublicCards ? (this.onChangeCardData(this._selectedOtherPrivateCard, this._selectedPublicCard), this._selectedOtherPrivateCard = null, this._selectedPublicCard = null, this.onSetSelectedCardFromArray(this._arrayOtherPrivateCards, null), this.onSetSelectedCardFromArray(this._arrayPublicCards, null), [2, Promise.resolve(!0)]) : (console.log("需要选择一张敌方私有卡牌，和公共区域的牌"), [2, Promise.resolve(!1)])
                })
            })
        },
        r.prototype.useSkill1 = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                return __generator(this,
                function(t) {
                    return this._selectedMyPrivateCard && this._arrayPublicCards ? (this.onChangeCardData(this._selectedMyPrivateCard, this._selectedPublicCard), this._selectedMyPrivateCard = null, this._selectedPublicCard = null, this.onSetSelectedCardFromArray(this._arrayMyPrivateCards, null), this.onSetSelectedCardFromArray(this._arrayPublicCards, null), [2, Promise.resolve(!0)]) : (console.log("需要选择一张我方私有卡牌，和公共区域的牌"), [2, Promise.resolve(!1)])
                })
            })
        },
        r.prototype.useSkill2 = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var t = this;
                return __generator(this,
                function(e) {
                    switch (e.label) {
                    case 0:
                        return this._selectedOtherPrivateCard ? [4, this.removeCardFromArrayAndPlaySortCardAnimation(this._arrayOtherPrivateCards, this._selectedOtherPrivateCard,
                        function(e, i) {
                            return t.group_otherPrivate.width - (e.anchorOffsetX * e.scaleX + (e.width * e.scaleX + 10) * i)
                        })] : (console.log("需要选择一张敌方私有区的牌"), [2, Promise.resolve(!1)]);
                    case 1:
                        return e.sent(),
                        this._selectedOtherPrivateCard = null,
                        this.onSetSelectedCardFromArray(this._arrayOtherPrivateCards, null),
                        [2, Promise.resolve(!0)]
                    }
                })
            })
        },
        r.prototype.useSkill3 = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                return __generator(this,
                function(t) {
                    switch (t.label) {
                    case 0:
                        return this._selectedMyPrivateCard ? [4, this.removeCardFromArrayAndPlaySortCardAnimation(this._arrayMyHandsCards, this._selectedMyPrivateCard,
                        function(t, e) {
                            return t.anchorOffsetX * t.scaleX + (t.width * t.scaleX + 10) * e
                        })] : (console.log("需要选择一张我方私有区的牌"), [2, Promise.resolve(!1)]);
                    case 1:
                        return t.sent(),
                        this._selectedMyPrivateCard = null,
                        this.onSetSelectedCardFromArray(this._arrayMyPrivateCards, null),
                        [2, Promise.resolve(!0)]
                    }
                })
            })
        },
        r.prototype.testAddCardToHand = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var t;
                return __generator(this,
                function(e) {
                    return 4 === this._arrayMyHandsCards.length ? [2] : (t = this._pool.pop(), t.setData(2), this.group_myHands.addChild(t), this._arrayMyHandsCards.push(t), t.x = t.anchorOffsetX + (t.width + 10) * (this._arrayMyHandsCards.length - 1), t.y = t.anchorOffsetY, [2, Promise.resolve()])
                })
            })
        },
        r.prototype.removeCardFromArray = function(t, e) {
            for (var i = 0; i < e.length; i++) if (e[i] === t) return e.splice(i, 1)[0];
            return null
        },
        r.prototype.onDealCard = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var t, e, i, n, r = this;
                return __generator(this,
                function(a) {
                    switch (a.label) {
                    case 0:
                        return this.createCard(2, this._arrayPublicCards, this.group_publicCards, [10, 10],
                        function(t, e) {
                            return t.anchorOffsetX + (t.width + 10) * e
                        },
                        function(t, e) {
                            return t.anchorOffsetY
                        }),
                        t = this._arrayPublicCards.length,
                        e = 0,
                        i = function() {
                            return __awaiter(r, void 0, void 0,
                            function() {
                                var i = this;
                                return __generator(this,
                                function(n) {
                                    return [2, new Promise(function(n, r) {
                                        return __awaiter(i, void 0, void 0,
                                        function() {
                                            var i;
                                            return __generator(this,
                                            function(r) {
                                                switch (r.label) {
                                                case 0:
                                                    return e === t ? [3, 2] : (i = this._arrayPublicCards[e], console.log("当前显示公共区域的第%i张排", e + 1), [4, this.showCard(200, [i])]);
                                                case 1:
                                                    return r.sent(),
                                                    e++,
                                                    [3, 0];
                                                case 2:
                                                    return [2, n()]
                                                }
                                            })
                                        })
                                    })]
                                })
                            })
                        },
                        this.createCard(3, this._arrayMyHandsCards, this.group_myHands, [1, 2, 3],
                        function(t, e) {
                            return t.anchorOffsetX + (t.width + 10) * e
                        },
                        function(t, e) {
                            return t.anchorOffsetY
                        }),
                        this.createCard(3, this._arrayOtherHandsCards, this.group_otherHands, [4, 5, 6],
                        function(t, e) {
                            return r.group_otherHands.width - (t.anchorOffsetX + (t.width + 10) * e)
                        },
                        function(t, e) {
                            return t.anchorOffsetY
                        },
                        !0),
                        [4, i()];
                    case 1:
                        return a.sent(),
                        console.log("开始发手牌"),
                        t = this._arrayMyHandsCards.length,
                        e = 0,
                        n = function() {
                            return __awaiter(r, void 0, void 0,
                            function() {
                                var i = this;
                                return __generator(this,
                                function(n) {
                                    return [2, new Promise(function(n, r) {
                                        return __awaiter(i, void 0, void 0,
                                        function() {
                                            var i, r;
                                            return __generator(this,
                                            function(a) {
                                                switch (a.label) {
                                                case 0:
                                                    return e === t ? [3, 2] : (i = this._arrayMyHandsCards[e], r = this._arrayOtherHandsCards[e], [4, this.showCard(200, [i, r])]);
                                                case 1:
                                                    return a.sent(),
                                                    e++,
                                                    [3, 0];
                                                case 2:
                                                    return [2, n()]
                                                }
                                            })
                                        })
                                    })]
                                })
                            })
                        },
                        [4, n()];
                    case 2:
                        return a.sent(),
                        [2, Promise.resolve()]
                    }
                })
            })
        },
        r.prototype.showCard = function(t, e) {
            return __awaiter(this, void 0, void 0,
            function() {
                var i = this;
                return __generator(this,
                function(n) {
                    return [2, new Promise(function(n, r) {
                        egret.setTimeout(function() {
                            return e.map(function(t) {
                                t.visible = !0
                            }),
                            n()
                        },
                        i, t)
                    })]
                })
            })
        },
        r.prototype.createCard = function(t, e, i, n, r, a, o) {
            void 0 === o && (o = !1);
            for (var s = 0; t > s; s++) {
                var _ = this._pool.pop();
                o && _.useBg(),
                _.setData(n[s]),
                i.addChild(_),
                _.visible = !1,
                _.x = r(_, s),
                _.y = a(_, s),
                e.push(_)
            }
        },
        r.prototype.show = function() {
            n.prototype.show.call(this)
        },
        r.prototype.UpdateAll = function() {
            this.reset(),
            this.gameStep()
        },
        r.prototype.gameStep = function() {
            var t = this;
            switch (this._currentStep) {
            case - 1 : this._currentStep = e.CHOOSE_PROP,
                this.onShowChooseProp();
                break;
            case e.CHOOSE_PROP:
                this._currentStep = e.DEAL_CARDS,
                this.onDealCard().then(function() {
                    console.log("发牌完成"),
                    t.gameStep()
                });
                break;
            case e.DEAL_CARDS:
                this._currentStep = e.CHANGE_CARDS,
                this.onShowChangeCard();
                break;
            case e.CHANGE_CARDS:
                this._currentStep = e.ROUND,
                console.log("正式对局开始")
            }
        },
        r.prototype.playCardToMyPrivate = function(t) {
            return __awaiter(this, void 0, void 0,
            function() {
                var e, i, n, r, a;
                return __generator(this,
                function(o) {
                    switch (o.label) {
                    case 0:
                        for (e = 0; e < this._arrayMyHandsCards.length; e++) if (this._arrayMyHandsCards[e] === t) {
                            this._arrayMyHandsCards.splice(e, 1);
                            break
                        }
                        for (this._arrayMyPrivateCards.push(t), this.group_myPrivate.addChild(t), t.scaleX = t.scaleY = .8, t.x = t.anchorOffsetX * t.scaleX + (t.width * t.scaleX + 10) * (this._arrayMyPrivateCards.length - 1), t.y = t.anchorOffsetY * t.scaleY, i = [], n = e; n < this._arrayMyHandsCards.length; n++) r = this._arrayMyHandsCards[n],
                        a = r.anchorOffsetX + (r.width + 10) * n,
                        i.push(common.TweenUtil.TweenToPromise(egret.Tween.get(r).to({
                            x: a
                        },
                        50)));
                        return [4, Promise.all(i)];
                    case 1:
                        return o.sent(),
                        [2, Promise.resolve()]
                    }
                })
            })
        },
        r.prototype.playCardToPublic = function(t) {
            return __awaiter(this, void 0, void 0,
            function() {
                var e, i, n, r, a;
                return __generator(this,
                function(o) {
                    switch (o.label) {
                    case 0:
                        for (e = 0; e < this._arrayMyHandsCards.length; e++) if (this._arrayMyHandsCards[e] === t) {
                            this._arrayMyHandsCards.splice(e, 1);
                            break
                        }
                        for (this._arrayPublicCards.push(t), this.group_publicCards.addChild(t), t.x = t.anchorOffsetX + (t.width + 10) * (this._arrayPublicCards.length - 1), t.y = t.anchorOffsetY, t.scaleX = t.scaleY = 1, i = [], n = e; n < this._arrayMyHandsCards.length; n++) r = this._arrayMyHandsCards[n],
                        a = r.anchorOffsetX + (r.width + 10) * n,
                        i.push(common.TweenUtil.TweenToPromise(egret.Tween.get(r).to({
                            x: a
                        },
                        50)));
                        return [4, Promise.all(i)];
                    case 1:
                        return o.sent(),
                        [2, Promise.resolve()]
                    }
                })
            })
        },
        r.prototype.synOtherCardToPrivate = function(t) {
            return __awaiter(this, void 0, void 0,
            function() {
                var e, i, n, r, a;
                return __generator(this,
                function(o) {
                    switch (o.label) {
                    case 0:
                        for (e = 0; e < this._arrayOtherHandsCards.length; e++) if (this._arrayOtherHandsCards[e] === t) {
                            this._arrayOtherHandsCards.splice(e, 1);
                            break
                        }
                        for (this._arrayOtherPrivateCards.push(t), this.group_otherPrivate.addChild(t), t.scaleX = t.scaleY = .8, t.x = this.group_otherPrivate.width - (t.anchorOffsetX * t.scaleX + (t.width * t.scaleX + 10) * (this._arrayOtherPrivateCards.length - 1)), t.y = t.anchorOffsetY * t.scaleY, i = [], n = e; n < this._arrayOtherHandsCards.length; n++) r = this._arrayOtherHandsCards[n],
                        a = this.group_otherHands.width - (r.anchorOffsetX + (r.width + 10) * n),
                        i.push(common.TweenUtil.TweenToPromise(egret.Tween.get(r).to({
                            x: a
                        },
                        50)));
                        return [4, Promise.all(i)];
                    case 1:
                        return o.sent(),
                        [2, Promise.resolve()]
                    }
                })
            })
        },
        r.prototype.synOtherCardToPublic = function(t) {
            return __awaiter(this, void 0, void 0,
            function() {
                var e, i, n, r, a;
                return __generator(this,
                function(o) {
                    switch (o.label) {
                    case 0:
                        for (e = 0; e < this._arrayOtherHandsCards.length; e++) if (this._arrayOtherHandsCards[e] === t) {
                            this._arrayOtherHandsCards.splice(e, 1);
                            break
                        }
                        for (this._arrayPublicCards.push(t), this.group_publicCards.addChild(t), t.x = t.anchorOffsetX + (t.width + 10) * (this._arrayPublicCards.length - 1), t.y = t.anchorOffsetY, t.scaleX = t.scaleY = 1, t.enableUseBg(), i = [], n = e; n < this._arrayOtherHandsCards.length; n++) r = this._arrayOtherHandsCards[n],
                        a = this.group_otherHands.width - (r.anchorOffsetX + (r.width + 10) * n),
                        i.push(common.TweenUtil.TweenToPromise(egret.Tween.get(r).to({
                            x: a
                        },
                        50)));
                        return [4, Promise.all(i)];
                    case 1:
                        return o.sent(),
                        [2, Promise.resolve()]
                    }
                })
            })
        },
        r.prototype.onSetSelectedCardFromArray = function(t, e) {
            for (var i = 0; i < t.length; i++) t[i].setSelectedFlag(t[i] === e)
        },
        r.prototype.removeCardFromArrayAndPlaySortCardAnimation = function(t, e, i) {
            return __awaiter(this, void 0, void 0,
            function() {
                var n, r, a, o;
                return __generator(this,
                function(s) {
                    switch (s.label) {
                    case 0:
                        for (this.removeCardFromArray(e, t), e.resetHandler(), this._pool.push(e), n = [], r = 0; r < t.length; r++) a = t[r],
                        o = i(a, r),
                        a.x !== o && n.push(common.TweenUtil.TweenToPromise(egret.Tween.get(a).to({
                            x: o
                        },
                        50)));
                        return [4, Promise.all(n)];
                    case 1:
                        return s.sent(),
                        [2, Promise.resolve()]
                    }
                })
            })
        },
        r.prototype.onChangeCardData = function(t, e) {
            var i = t.GetCardId();
            t.UpdateCardId(e.GetCardId()),
            e.UpdateCardId(i)
        },
        r.prototype.onShowChangeCard = function() {
            this.compChangeCard.setCallBack(this.onSureCard, this.onTimeOutChangeCard, this),
            this.compChangeCard.show(),
            this.compChangeCard.Start()
        },
        r.prototype.onSureCard = function() {
            var t = this;
            this.compChangeCard.hide(),
            this._changeCardFlag = !1,
            this.onMyChangeCard().then(function() {
                t._changeCardFlag = !0,
                egret.setTimeout(function() {
                    t.waitOtherChangeCard()
                },
                t, 500)
            })
        },
        r.prototype.onMyChangeCard = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var e, i, n, r, a, o, s;
                return __generator(this,
                function(_) {
                    switch (_.label) {
                    case 0:
                        return [4, t.MgrData.GetInstance().ChangeCard(this._currentSelectedMyHandCard.GetCardId())];
                    case 1:
                        for (_.sent(), e = this.myChangeCardPos.localToGlobal(), i = this.removeCardFromArray(this._currentSelectedMyHandCard, this._arrayMyHandsCards), i.scaleY = i.scaleX = 1, n = [], r = i.parent.globalToLocal(e.x, e.y), n.push(common.TweenUtil.TweenToPromise(egret.Tween.get(i).to({
                            x: r.x,
                            y: r.y
                        },
                        250))), a = 0; a < this._arrayMyHandsCards.length; a++) o = this._arrayMyHandsCards[a],
                        s = o.anchorOffsetX + (o.width + 10) * a,
                        n.push(common.TweenUtil.TweenToPromise(egret.Tween.get(o).to({
                            x: s
                        },
                        50)));
                        return [4, Promise.all(n)];
                    case 2:
                        return _.sent(),
                        this.myChangeCardPos.addChild(i),
                        i.x = i.y = 0,
                        this._currentSelectedMyHandCard = null,
                        [2, Promise.resolve()]
                    }
                })
            })
        },
        r.prototype.onTimeOutChangeCard = function() {
            var t = this;
            this.compChangeCard.hide();
            var e = this._arrayMyHandsCards,
            i = mathUtil.RandomRoundInt(0, e.length);
            this._currentSelectedMyHandCard = e[i],
            this._changeCardFlag = !1,
            this.onMyChangeCard().then(function() {
                t._changeCardFlag = !0,
                egret.setTimeout(function() {
                    t.waitOtherChangeCard()
                },
                t, 500)
            })
        },
        r.prototype.waitOtherChangeCard = function() {
            var e = this;
            if (this._changeCardFlag) {
                var i = t.MgrData.GetInstance().GetOtherChangeCardId();
                if (0 >= i) return;
                for (var n, r = 0; r < this._arrayOtherHandsCards.length; r++) {
                    var a = this._arrayOtherHandsCards[r];
                    if (a.GetCardId() === i) {
                        n = this._arrayOtherHandsCards.splice(r, 1)[0];
                        break
                    }
                }
                n.enableUseBg();
                var o = [],
                s = this.otherChangeCardPos.localToGlobal(),
                _ = n.parent.globalToLocal(s.x, s.y);
                o.push(common.TweenUtil.TweenToPromise(egret.Tween.get(n).to({
                    x: _.x,
                    y: _.y
                },
                250)));
                for (var u = 0; u < this._arrayOtherHandsCards.length; u++) {
                    var a = this._arrayOtherHandsCards[u],
                    c = this.group_otherHands.width - (a.anchorOffsetX + (a.width + 10) * u);
                    o.push(common.TweenUtil.TweenToPromise(egret.Tween.get(a).to({
                        x: c
                    },
                    50)))
                }
                Promise.all(o).then(function() {
                    e.otherChangeCardPos.addChild(n),
                    n.x = n.y = 0,
                    e.onChangeCard()
                })
            }
        },
        r.prototype.onChangeCard = function() {
            var t = this;
            egret.setTimeout(function() {
                console.log("开始交换卡牌");
                var e = [],
                i = t.otherChangeCardPos.getChildAt(0);
                t._arrayMyHandsCards.push(i);
                var n = i.anchorOffsetX + (i.width + 10) * (t._arrayMyHandsCards.length - 1),
                r = i.anchorOffsetY,
                a = t.group_myHands.localToGlobal(n, r),
                o = t.otherChangeCardPos.globalToLocal(a.x, a.y),
                s = t.myChangeCardPos.getChildAt(0);
                t._arrayOtherHandsCards.push(s),
                s.useBg();
                var _ = t.group_otherHands.width - (s.anchorOffsetX + (s.width + 10) * (t._arrayOtherHandsCards.length - 1)),
                u = s.anchorOffsetY,
                c = t.group_otherHands.localToGlobal(_, u),
                h = t.myChangeCardPos.globalToLocal(c.x, c.y);
                e.push(common.TweenUtil.TweenToPromise(egret.Tween.get(i).to({
                    x: o.x,
                    y: o.y
                },
                200))),
                e.push(common.TweenUtil.TweenToPromise(egret.Tween.get(s).to({
                    x: h.x,
                    y: h.y
                },
                200))),
                Promise.all(e).then(function() {
                    t.group_myHands.addChild(i),
                    i.x = i.anchorOffsetX + (i.width + 10) * (t._arrayMyHandsCards.length - 1),
                    i.y = i.anchorOffsetY,
                    t.group_otherHands.addChild(s),
                    s.x = t.group_otherHands.width - (s.anchorOffsetX + (s.width + 10) * (t._arrayOtherHandsCards.length - 1)),
                    s.y = s.anchorOffsetY,
                    t.gameStep()
                })
            },
            this, 2e3)
        },
        r.prototype.onShowChooseProp = function() {
            this.CompChooseProp.setCallBack(this.onSureMyProp, this.onTimeOutChooseProp, this),
            this.CompChooseProp.show(),
            this.CompChooseProp.Start()
        },
        r.prototype.onTimeOutChooseProp = function() {
            var e = this;
            console.log("选择属性超时"),
            this.CompChooseProp.hide();
            var i = [t.PROP_IDS.FIRE, t.PROP_IDS.GRASS, t.PROP_IDS.WATER],
            n = mathUtil.RandomRoundInt(0, i.length);
            t.MgrData.GetInstance().ChooseProp(i[n]).then(function() {
                e.setMyPropState(t.MgrData.GetInstance().GetMyPropId()),
                e.onCheckPropState()
            })
        },
        r.prototype.setOtherPropState = function(t) {
            this.other_iconProp.source = t > 0 ? "card_main_panel_icon_prop_" + t + "_png": null,
            this.flagDoing.source = t > 0 ? "card_main_panel_flagReday_png": "card_main_panel_flagDoing_png"
        },
        r.prototype.setMyPropState = function(t) {
            this.my_iconProp.source = t > 0 ? "card_main_panel_icon_prop_" + t + "_png": null,
            this.flagReday.source = t > 0 ? "card_main_panel_flagReday_png": "card_main_panel_flagDoing_png"
        },
        r.prototype.onSureMyProp = function(e) {
            var i = this;
            this.CompChooseProp.hide(),
            t.MgrData.GetInstance().ChooseProp(e).then(function() {
                i.setMyPropState(t.MgrData.GetInstance().GetMyPropId()),
                i.onCheckPropState()
            })
        },
        r.prototype.onCheckPropState = function() {
            var e = t.MgrData.GetInstance().GetMyPropId(),
            i = t.MgrData.GetInstance().GetOtherPropId();
            e > 0 && i > 0 && this.gameStep()
        },
        r.prototype.onTouchMyHandGroup = function(i) {
            if (this._currentStep === e.CHANGE_CARDS || this._currentStep === e.ROUND) {
                var n = i.target;
                if (n instanceof t.CompCard) {
                    if (this._currentSelectedMyHandCard === n) return this._currentSelectedMyHandCard.scaleX = this._currentSelectedMyHandCard.scaleY = 1,
                    this._currentSelectedMyHandCard.y = this._currentSelectedMyHandCard.anchorOffsetY,
                    void(this._currentSelectedMyHandCard = null);
                    this._currentSelectedMyHandCard = n;
                    var r = n.GetCardId();
                    console.log("当前点击的是%i号牌", r);
                    for (var a = this._arrayMyHandsCards,
                    o = 0; o < a.length; o++) a[o] === this._currentSelectedMyHandCard ? egret.Tween.get(a[o]).to({
                        y: a[o].y - 30
                    },
                    50).to({
                        scaleX: 1.15,
                        scaleY: 1.15
                    },
                    50) : (a[o].scaleX = a[o].scaleY = 1, a[o].y = a[o].anchorOffsetY)
                }
            }
        },
        r.prototype.onTouchOtherHandGroup = function(e) {
            var i = e.target;
            if (i instanceof t.CompCard) {
                if (this._selectedOtherHandCard === i) return this._selectedOtherHandCard.y = this._selectedOtherHandCard.anchorOffsetY,
                void(this._selectedOtherHandCard = null);
                this._selectedOtherHandCard = i,
                this.playOtherHandsCardSelectedAnimation(i)
            }
        },
        r.prototype.onTouchMyPrivateGroup = function(e) {
            if (this._useSkillState === i.SKILL_2) {
                var n = e.target;
                n instanceof t.CompCard && (this._selectedMyPrivateCard = n, this.onSetSelectedCardFromArray(this._arrayMyPrivateCards, n))
            }
        },
        r.prototype.onTouchPublicGroup = function(e) {
            if (this._useSkillState === i.SKILL_1 || this._useSkillState === i.SKILL_2) {
                var n = e.target;
                n instanceof t.CompCard && (this._selectedPublicCard = n, this.onSetSelectedCardFromArray(this._arrayPublicCards, n))
            }
        },
        r.prototype.onTouchOtherPrivateGroup = function(e) {
            if (this._useSkillState === i.SKILL_1 || this._useSkillState === i.SKILL_3) {
                var n = e.target;
                n instanceof t.CompCard && (this._selectedOtherPrivateCard = n, this.onSetSelectedCardFromArray(this._arrayOtherPrivateCards, n))
            }
        },
        r.prototype.playOtherHandsCardSelectedAnimation = function(t) {
            for (var e = this._arrayOtherHandsCards,
            i = 0; i < e.length; i++) e[i] === t ? egret.Tween.get(e[i]).to({
                y: e[i].y + 30
            },
            50) : e[i].y = e[i].anchorOffsetY
        },
        r.prototype.hide = function() {
            n.prototype.hide.call(this)
        },
        r.prototype.addPool = function(t) {
            for (; t.length > 0;) {
                var e = t.pop();
                e.resetHandler(),
                this._pool.push(e)
            }
        },
        r.prototype.reset = function() {
            this.setOtherPropState(0),
            this.setMyPropState(0),
            this._currentStep = -1,
            this.addPool(this._arrayPublicCards),
            this.addPool(this._arrayMyHandsCards),
            this.addPool(this._arrayOtherHandsCards)
        },
        r.prototype.destroy = function() {
            this._pool.destroy(),
            n.prototype.destroy.call(this)
        },
        r
    } (t.BasePanel);
    t.GameLevel2MainPanel = n,
    __reflect(n.prototype, "crystalDuplicate.GameLevel2MainPanel")
} (crystalDuplicate || (crystalDuplicate = {}));
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
crystalDuplicate; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.skinName = t.MainPanelSkin,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this._initEvents()
        },
        i.prototype._initEvents = function() {
            ImageButtonUtil.add(this.imge_fight_btn, this._onTouchImageButton, this),
            ImageButtonUtil.add(this.imge_card_btn, this._onTouchImageButton, this),
            ImageButtonUtil.add(this.imge_exchange_btn, this._onTouchImageButton, this),
            ImageButtonUtil.add(this.imge_close_btn, this._onTouchImageButton, this),
            EventManager.addEventListener(RobotEvent.SEERDOU_CHANGE_EVENT, this._onChangeCoin, this)
        },
        i.prototype._removeEvents = function() {
            EventManager.removeEventListener(RobotEvent.SEERDOU_CHANGE_EVENT, this._onChangeCoin, this),
            ImageButtonUtil.removeAll(this)
        },
        i.prototype._setResAttr = function() {},
        i.prototype._onChangeCoin = function(t) {},
        i.prototype._onTouchImageButton = function(e) {
            switch (e.currentTarget) {
            case this.imge_exchange_btn:
                Alarm.show("商店功能暂未开放");
                break;
            case this.imge_fight_btn:
                var i = t.MgrData.GetInstance().GetFlagTeamSet();
                i ? t.MgrData.GetInstance().dispatchEventWith(t.UI_EVENT.CHANGE_PANEL, !1, t.PANEL_NAMES.level1) : t.MgrData.GetInstance().dispatchEventWith(t.UI_EVENT.CHANGE_PANEL, !1, t.PANEL_NAMES.SET_TEAM);
                break;
            case this.imge_card_btn:
                t.MgrData.GetInstance().dispatchEventWith(t.UI_EVENT.CHANGE_PANEL, !1, t.PANEL_NAMES.level2Main);
                break;
            case this.imge_close_btn:
                t.MgrData.GetInstance().dispatchEventWith(t.UI_EVENT.CLOSE_MODULE)
            }
        },
        i.prototype.show = function() {
            e.prototype.show.call(this)
        },
        i.prototype.UpdateAll = function() {
            this.des_tx.text = "",
            this._setResAttr()
        },
        i.prototype.hide = function() {
            e.prototype.hide.call(this)
        },
        i.prototype.destroy = function() {
            e.prototype.destroy.call(this)
        },
        i
    } (t.BasePanel);
    t.MainPanel = e,
    __reflect(e.prototype, "crystalDuplicate.MainPanel")
} (crystalDuplicate || (crystalDuplicate = {}));
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
crystalDuplicate; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i._teamObj = {},
            i._selectedPetCount = 0,
            i.skinName = t.CrystalDuplicateSelectedPetSkin,
            i
        }
        return __extends(i, e),
        i.prototype._initEvents = function() {
            ImageButtonUtil.add(this.imgbtn_back, this.onTouchButtonHandler, this),
            ImageButtonUtil.add(this.btn_readly, this.onTouchButtonHandler, this),
            ImageButtonUtil.add(this.btnSearch, this.onTouchButtonHandler, this),
            ImageButtonUtil.add(this.group_petType, this.onTouchButtonHandler, this, !1, !1),
            ImageButtonUtil.add(this.group_sort, this.onTouchButtonHandler, this, !1, !1),
            this.editable_search.addEventListener(egret.Event.CHANGE, this.onChangeSearchHandler, this),
            this.rb_bag.group.addEventListener(egret.Event.CHANGE, this.onChangeNavBarHandler, this),
            this.list_cz.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.onTouchBagPetHandler, this),
            this.list_dm.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.onTouchBagPetHandler, this),
            this.list_page.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.onTouchPetBagPageItem, this),
            this.list_warehouse.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.onTouchWareHouseHead, this),
            t.MgrData.GetInstance().addEventListener(t.UI_EVENT.TOUCH_SELECTED_PET_ITEM, this.onTouchSelectedPetItemHandler, this),
            t.MgrData.GetInstance().addEventListener(t.UI_EVENT.TOUCH_ALL_DOWN, this.onTouchAllDown, this)
        },
        i.prototype._removeEvents = function() {
            ImageButtonUtil.removeAll(this),
            this.list_cz.removeEventListener(eui.ItemTapEvent.ITEM_TAP, this.onTouchBagPetHandler, this),
            this.list_dm.removeEventListener(eui.ItemTapEvent.ITEM_TAP, this.onTouchBagPetHandler, this),
            this.editable_search.removeEventListener(egret.Event.CHANGE, this.onChangeSearchHandler, this),
            this.rb_bag.group.removeEventListener(egret.Event.CHANGE, this.onChangeNavBarHandler, this),
            this.list_page.removeEventListener(eui.ItemTapEvent.ITEM_TAP, this.onTouchPetBagPageItem, this),
            this.list_warehouse.removeEventListener(eui.ItemTapEvent.ITEM_TAP, this.onTouchWareHouseHead, this),
            t.MgrData.GetInstance().removeEventListener(t.UI_EVENT.TOUCH_SELECTED_PET_ITEM, this.onTouchSelectedPetItemHandler, this),
            t.MgrData.GetInstance().removeEventListener(t.UI_EVENT.TOUCH_ALL_DOWN, this.onTouchAllDown, this)
        },
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.head_selected.visible = !1,
            this.list_page.itemRenderer = t.PageItem,
            this.list_page.dataProvider = new eui.ArrayCollection,
            this.teams_list.itemRenderer = t.TeamItem;
            for (var i = [], n = 0; 6 > n; n++) this._teamObj[n] = [null, null, null, null, null, null],
            i.push({
                idx: n,
                petArray: this._teamObj[n]
            });
            this.scroller_teams.viewport = this.teams_list,
            this.scroller_teams.scrollPolicyH = eui.ScrollPolicy.OFF,
            this.teams_list.dataProvider = new eui.ArrayCollection(i),
            this.list_cz.itemRenderer = this.list_dm.itemRenderer = t.PetIconStyle1,
            this.list_cz.dataProvider = new eui.ArrayCollection([]),
            this.list_dm.dataProvider = new eui.ArrayCollection([]),
            this.list_warehouse.itemRenderer = t.PetIconStyle2,
            this.list_warehouse.dataProvider = new eui.ArrayCollection([])
        },
        i.prototype.UpdateAll = function() {
            this._initHandler()
        },
        i.prototype.onTouchButtonHandler = function(e) {
            switch (e.currentTarget) {
            case this.imgbtn_back:
                t.MgrData.GetInstance().dispatchEventWith(t.UI_EVENT.BACK_MAIN_PANEL);
                break;
            case this.btn_readly:
                this.onReady();
                break;
            case this.group_petType:
                this.onOpenAttributePanel();
                break;
            case this.group_sort:
                this.onOpenChangeSortPanel();
                break;
            case this.btnSearch:
                "" != this.editable_search.text.trim() && (this.clearPetSelectedBgFlag(), this.resetWarehouseList(), this.onUpdateWarehouseOrEliteShow())
            }
        },
        i.prototype._initHandler = function() {
            var e = this;
            this._currentNavBar = this.rb_bag.value,
            egret.callLater(function() {
                e.rb_bag.selected = !0
            },
            this),
            this._currentSortType = "",
            this._currentPetTypeId = 0;
            var i = this.list_page.dataProvider;
            i.removeAll();
            for (var n = t.MgrData.GetInstance().OpenPetBagPageNum, r = 0; n >= r; r++) i.addItem(r + 1);
            this._currentPageIdx = t.MgrData.GetInstance().CurrentSelectedIdx,
            egret.callLater(function() {
                e.list_page.selectedIndex = e._currentPageIdx
            },
            this);
            var a = t.MgrData.GetInstance().GetPetBagAllPets();
            this._warehousePet = PetStorage2015InfoManager.getInfoByType(0, 0),
            this._warehousePet = this._warehousePet.filter(function(t) {
                for (var e = 0; e < a.length; e++) if (a[e].catchTime === t.id) return ! 1;
                return ! 0
            }),
            this._elitePets = PetStorage2015InfoManager.getInfoByType(1, 0),
            this._elitePets = this._elitePets.filter(function(t) {
                for (var e = 0; e < a.length; e++) if (a[e].catchTime === t.id) return ! 1;
                return ! 0
            },
            this);
            for (var o = this.teams_list.dataProvider,
            r = 1; 6 >= r; r++) {
                for (var s = t.MgrData.GetInstance().GetTeamList(r), _ = o.getItemAt(r - 1), u = 0; u < s.length; u++) {
                    var c = 0 === s[u] ? null: t.MgrData.GetInstance().GetPetData(s[u]);
                    _.petArray[u] = c,
                    c && this._selectedPetCount++
                }
                o.replaceItemAt(_, r - 1)
            }
            this._setNavBar()
        },
        i.prototype._setNavBar = function() {
            this.petBag.visible = "petBag" === this._currentNavBar,
            this.group_warehouse.visible = this.searchComp.visible = "warehouse" === this._currentNavBar || "elite" === this._currentNavBar,
            this.searchComp.visible ? (this._currentSortType = "", this.editable_search.text = "", this._currentPetTypeId = 0, this._setPetTypeUI(), this._setSortInfoUI(), this.resetWarehouseList(), this.onUpdateWarehouseOrEliteShow()) : this.onUpdatePetBagShow()
        },
        i.prototype.resetWarehouseList = function() {
            this.scroller_warehouse.stopAnimation(),
            this.scroller_warehouse.viewport.scrollV = 0,
            this.list_warehouse.dataProvider.removeAll()
        },
        i.prototype.onUpdateWarehouseOrEliteShow = function() {
            var t;
            t = "warehouse" === this._currentNavBar ? this._warehousePet: this._elitePets;
            for (var e = [], i = 0; i < t.length; i++) this._currentPetTypeId > 0 && t[i].type !== this._currentPetTypeId || ("" === this.editable_search.text || SearchUtil.isMatch(this.editable_search.text, t[i].name)) && (this.checkPetOnReadyList(t[i].catchTime) || e.push(t[i]));
            if (this._currentSortType) switch (this._currentSortType) {
            case "id_down":
                e.sort(function(t, e) {
                    return e.id - t.id
                });
                break;
            case "id_up":
                e.sort(function(t, e) {
                    return t.id - e.id
                });
                break;
            case "lvl_down":
                e.sort(function(t, e) {
                    return e.level - t.level
                });
                break;
            case "lvl_up":
                e.sort(function(t, e) {
                    return t.level - e.level
                });
                break;
            case "tm_down":
                e.sort(function(t, e) {
                    return e.catchTime - t.catchTime
                });
                break;
            case "tm_up":
                e.sort(function(t, e) {
                    return t.catchTime - e.catchTime
                })
            }
            this.list_warehouse.dataProvider.replaceAll(e);
            var n = 0 === e.length;
            this.group_warehouse.visible = this.searchComp.visible = !n,
            this.imge_pet_none.visible = n
        },
        i.prototype.onUpdatePetBagShow = function() {
            for (var e = t.MgrData.GetInstance().GetFirstPetInfo(this._currentPageIdx + 1), i = t.MgrData.GetInstance().GetSecondPetInfo(this._currentPageIdx + 1), n = this.list_cz.dataProvider, r = this.list_dm.dataProvider, a = [], o = [], s = 0; 6 > s; s++) o[s] = a[s] = null,
            e.length > s && !this.checkPetOnReadyList(e[s].catchTime) && (a[s] = e[s]),
            i.length > s && !this.checkPetOnReadyList(i[s].catchTime) && (o[s] = i[s]);
            n.replaceAll(a),
            r.replaceAll(o);
            var _ = 0 === e.length && 0 === i.length;
            this.petBag.visible = !_,
            this.imge_pet_none.visible = _
        },
        i.prototype._setPetTypeUI = function() {
            var t = "属性查找";
            this.icon_attr.source = null,
            this._currentPetTypeId > 0 && (t = SkillXMLInfo.petTypeNameCN(this._currentPetTypeId), this.icon_attr.source = ClientConfig.getpettypeticon(this._currentPetTypeId + "")),
            this.lab_find_attr.text = t
        },
        i.prototype._setSortInfoUI = function() {
            var t = {
                id_down: {
                    name: "ID顺序",
                    sortImg: "crystalduplicateSetPets_img_down_png"
                },
                id_up: {
                    name: "ID顺序",
                    sortImg: "crystalduplicateSetPets_img_up_png"
                },
                lvl_down: {
                    name: "等级顺序",
                    sortImg: "crystalduplicateSetPets_img_down_png"
                },
                lvl_up: {
                    name: "等级顺序",
                    sortImg: "crystalduplicateSetPets_img_up_png"
                },
                tm_down: {
                    name: "获得顺序",
                    sortImg: "crystalduplicateSetPets_img_down_png"
                },
                tm_up: {
                    name: "获得顺序",
                    sortImg: "crystalduplicateSetPets_img_up_png"
                }
            };
            return this._currentSortType ? (this.lab_select_sort.text = t[this._currentSortType].name, void(this.btn_sort.source = t[this._currentSortType].sortImg)) : void(this.lab_select_sort.text = "默认顺序")
        },
        i.prototype.onChangeSearchHandler = function(t) {
            "" === this.editable_search.text && (this.clearPetSelectedBgFlag(), this.resetWarehouseList(), this.onUpdateWarehouseOrEliteShow())
        },
        i.prototype.onChangeNavBarHandler = function(t) {
            var e = this.rb_bag.group.selectedValue;
            this._currentNavBar = e,
            this.clearPetSelectedBgFlag(),
            this._setNavBar()
        },
        i.prototype.onTouchPetBagPageItem = function(t) {
            var e = t.item;
            this._currentPageIdx = e - 1,
            this.clearPetSelectedBgFlag(),
            this.onUpdatePetBagShow()
        },
        i.prototype.clearPetSelectedBgFlag = function() {
            DisplayUtil.removeForParent(this.head_selected)
        },
        i.prototype.onOpenChangeSortPanel = function() {
            var e = {};
            e.callBack = this.onChangeSort,
            e.currentType = this._currentSortType,
            e.caller = this;
            var i = PopViewManager.createDefaultStyleObject();
            i.effStyle.showAniType,
            i.effStyle.relativeToPoint = {
                srcWorldPos: this.selectSortPos.localToGlobal(),
                dir: "left-top",
                rx: 0,
                ry: 20
            },
            PopViewManager.getInstance().openView(new t.SortPop, i, e)
        },
        i.prototype.onChangeSort = function(t) {
            this._currentSortType = t,
            this.clearPetSelectedBgFlag(),
            this.resetWarehouseList(),
            this.onUpdateWarehouseOrEliteShow()
        },
        i.prototype.onOpenAttributePanel = function() {
            var t = {
                callBack: this.onChangeAttributeIdHanlder,
                caller: this,
                selectId: this._currentPetTypeId,
                unAutoClose: !1,
                relativeSet: {
                    srcWorldPos: this.selectAttributePos.localToGlobal(),
                    dir: "left-top",
                    rx: 0,
                    ry: 0
                }
            };
            ModuleManager.showModule("petChooseAttributePanel", ["pet_choose_attribute_panel"], t, "", AppDoStyle.NULL)
        },
        i.prototype.onChangeAttributeIdHanlder = function(t, e) {
            console.log("当前选择的属性类型为" + e),
            this._currentPetTypeId = ~~e,
            this._setPetTypeUI(),
            this.clearPetSelectedBgFlag(),
            this.resetWarehouseList(),
            this.onUpdateWarehouseOrEliteShow()
        },
        i.prototype.setPetSelectedBgFlag = function(e) {
            var i = e.width,
            n = e.height;
            e.addChildAt(this.head_selected, 0),
            this.head_selected.scaleX = this.head_selected.scaleY = e instanceof t.PetIconStyle1 ? .85 : 1,
            this.head_selected.anchorOffsetX = this.head_selected.width / 2,
            this.head_selected.anchorOffsetY = this.head_selected.height / 2,
            this.head_selected.x = i / 2,
            this.head_selected.y = n / 2,
            this.head_selected.visible = !0
        },
        i.prototype.onTouchWareHouseHead = function(t) {
            this.setPetSelectedBgFlag(t.itemRenderer),
            this.onOpenPetInfoPop(t.item.catchTime, !0, this.onUpOnePetHandler)
        },
        i.prototype.onTouchBagPetHandler = function(t) {
            this.setPetSelectedBgFlag(t.itemRenderer),
            this.onOpenPetInfoPop(t.item.catchTime, !0, this.onUpOnePetHandler)
        },
        i.prototype.onOpenPetInfoPop = function(e, i, n) {
            var r = this;
            PetManager.upDateBagPetInfo(e,
            function(e) {
                var a = {};
                a.petInfo = e,
                a.caller = r,
                a.upFlag = i,
                a.callBack = n;
                var o = PopViewManager.createDefaultStyleObject();
                o.maskShapeStyle.maskAlpha = .7,
                PopViewManager.getInstance().openView(new t.PetInfoPop, o, a)
            })
        },
        i.prototype.onUpOnePetHandler = function(t) {
            return __awaiter(this, void 0, void 0,
            function() {
                return __generator(this,
                function(e) {
                    switch (e.label) {
                    case 0:
                        return [4, this.onTeamUp(t)["catch"](function() {
                            return console.log("服务器端上阵精灵失败", t),
                            Promise.reject(null)
                        })];
                    case 1:
                        return e.sent(),
                        [2, Promise.resolve()]
                    }
                })
            })
        },
        i.prototype.onTeamUp = function(e) {
            return __awaiter(this, void 0, void 0,
            function() {
                var i, n, r, a, o, s, _, u, c, h;
                return __generator(this,
                function(l) {
                    switch (l.label) {
                    case 0:
                        return console.log("当前上阵的精灵信息为", e),
                        36 === this._selectedPetCount ? (Alarm.show("上阵的精灵已经到达上限！"), [2, Promise.resolve()]) : [4, t.MgrData.GetInstance().TeamUp(e.catchTime)["catch"](function() {
                            return Promise.reject(null)
                        })];
                    case 1:
                        for (l.sent(), this._selectedPetCount++, n = this.teams_list.dataProvider, r = 0; r < n.length; r++) {
                            for (a = n.getItemAt(r), o = a.petArray, s = !1, _ = 0; _ < o.length; _++) if (null === o[_]) {
                                o[_] = e,
                                s = !0;
                                break
                            }
                            if (s) {
                                n.replaceItemAt(a, r),
                                i = r + 1;
                                break
                            }
                        }
                        return u = 0,
                        c = this.scroller_teams.viewport.contentHeight - this.scroller_teams.height,
                        h = Math.max(u, Math.min(c, 243 * (i - 1))),
                        this.scroller_teams.viewport.scrollV != h && egret.Tween.get(this.scroller_teams.viewport).wait(200).to({
                            scrollV: h
                        },
                        200),
                        this.clearPetSelectedBgFlag(),
                        "warehouse" === this._currentNavBar || "elite" === this._currentNavBar ? this.onUpdateWarehouseOrEliteShow() : this.onUpdatePetBagShow(),
                        BubblerManager.getInstance().showText("精灵已经成功放入编队" + i + "中"),
                        [2, Promise.resolve()]
                    }
                })
            })
        },
        i.prototype.onTouchSelectedPetItemHandler = function(t) {
            var e = this,
            i = t.data.render,
            n = t.data.data;
            this.onOpenPetInfoPop(n.info.catchTime, !1,
            function(t) {
                return __awaiter(e, void 0, void 0,
                function() {
                    return __generator(this,
                    function(e) {
                        switch (e.label) {
                        case 0:
                            return [4, this.downPet(n.idx, t.catchTime)["catch"](function() {
                                console.log("服务器端下阵精灵失败", t)
                            })];
                        case 1:
                            return e.sent(),
                            [2]
                        }
                    })
                })
            }),
            this.setPetSelectedBgFlag(i)
        },
        i.prototype.downPet = function(e, i) {
            return __awaiter(this, void 0, void 0,
            function() {
                var n, r, a, o;
                return __generator(this,
                function(s) {
                    switch (s.label) {
                    case 0:
                        return [4, t.MgrData.GetInstance().TeamDown(i)["catch"](function() {
                            return Promise.reject(null)
                        })];
                    case 1:
                        for (s.sent(), this._selectedPetCount--, n = this.teams_list.dataProvider, r = n.getItemAt(e), a = r.petArray, o = 0; o < a.length; o++) if (a[o] && a[o].catchTime === i) {
                            a[o] = null;
                            break
                        }
                        return n.replaceItemAt(r, e),
                        this.clearPetSelectedBgFlag(),
                        "warehouse" === this._currentNavBar || "elite" === this._currentNavBar ? this.onUpdateWarehouseOrEliteShow() : this.onUpdatePetBagShow(),
                        BubblerManager.getInstance().showText("精灵已从队伍中移除"),
                        [2, Promise.resolve()]
                    }
                })
            })
        },
        i.prototype.onTouchAllDown = function(t) {
            var e = t.data.idx;
            this.allDown(e)["catch"](function() {
                console.log("服务器端一键下阵精灵失败下阵队伍%i", e)
            })
        },
        i.prototype.allDown = function(e) {
            return __awaiter(this, void 0, void 0,
            function() {
                var i, n, r, a, o;
                return __generator(this,
                function(s) {
                    switch (s.label) {
                    case 0:
                        for (i = this.teams_list.dataProvider, n = i.getItemAt(e), r = n.petArray, a = 0, o = 0; o < r.length; o++) r[o] && (r[o] = null, a++);
                        return 0 === a ? [2, Promise.resolve()] : [4, t.MgrData.GetInstance().TeamDownByTeam(e + 1)["catch"](function() {
                            return Promise.reject(null)
                        })];
                    case 1:
                        return s.sent(),
                        this._selectedPetCount -= a,
                        i.replaceItemAt(n, e),
                        "warehouse" === this._currentNavBar || "elite" === this._currentNavBar ? this.onUpdateWarehouseOrEliteShow() : this.onUpdatePetBagShow(),
                        BubblerManager.getInstance().showText("队伍" + (e + 1) + "中精灵已经全部下阵"),
                        [2, Promise.resolve()]
                    }
                })
            })
        },
        i.prototype.checkPetOnReadyList = function(t) {
            for (var e = this.teams_list.dataProvider,
            i = 0; i < e.length; i++) for (var n = e.getItemAt(i), r = n.petArray, a = 0; a < r.length; a++) if (r[a] && r[a].catchTime === t) return ! 0;
            return ! 1
        },
        i.prototype.onReady = function() {
            if (this._selectedPetCount < 12) return void Alarm.show("必须至少放入12只精灵才能开启挑战！");
            for (var e = this.teams_list.dataProvider,
            i = 0; i < e.length; i++) {
                for (var n = e.getItemAt(i), r = n.petArray, a = 0, o = 0; o < r.length; o++) r[o] || a++;
                if (6 != a && a > 0) return void Alarm.show("编队都满员才能开始！")
            }
            console.log("Ok"),
            t.MgrData.GetInstance().TeamOk().then(function() {
                t.MgrData.GetInstance().dispatchEventWith(t.UI_EVENT.CHANGE_PANEL, !1, t.PANEL_NAMES.level1)
            })
        },
        i.prototype.destroy = function() {
            this.clearPetSelectedBgFlag(),
            e.prototype.destroy.call(this)
        },
        i
    } (t.BasePanel);
    t.SelectedPanel = e,
    __reflect(e.prototype, "crystalDuplicate.SelectedPanel")
} (crystalDuplicate || (crystalDuplicate = {}));
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
crystalDuplicate; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.skinName = t.CrystalduplicatepetinfopopSkin,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this._petShow = new PetStaticModel,
            this._petShow.setSize(395, 385),
            this._petShow.setPetMaxScale(1.3),
            this.grp_boss.addChild(this._petShow),
            this._closeTouchTapRect = new egret.Rectangle(0, 0, 578, 581)
        },
        i.prototype.initEvents = function() {
            ImageButtonUtil.add(this.btnDown, this._onTouchImageButton, this),
            ImageButtonUtil.add(this.btnUp, this._onTouchImageButton, this),
            this.addEventListener(egret.TouchEvent.TOUCH_TAP, this._onTouchTap, this)
        },
        i.prototype.removeEvents = function() {
            ImageButtonUtil.remove(this),
            this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this._onTouchTap, this)
        },
        i.prototype._parseData = function() {
            this._customData = this._data
        },
        i.prototype._upDateView = function() {
            this._setStyle(this._customData.petInfo)
        },
        i.prototype._setStyle = function(t) {
            this.btnDown.visible = !this._customData.upFlag,
            this.btnUp.visible = this._customData.upFlag,
            this.icon_hy.visible = PetManager.checkShowEffectIcon(t),
            this._petShow.setPetStyleByInfo(t),
            this.txt_name.text = t.name;
            var e = PetXMLInfo.getType(t.id);
            this.icon_type.source = ClientConfig.getpettypeticon(e + ""),
            this.lab_lvl.text = t.level + "",
            this.lab_genius.text = t.dv + "",
            this.lab_nature.text = NatureXMLInfo.getName(t.nature),
            this.updatExHp(t.catchTime),
            this.lab_studayValue.text = t.ev_attack + t.ev_defence + t.ev_sa + t.ev_sd + t.ev_sp + t.ev_hp + "";
            var i = PetManager.getPetEffect(t);
            if (i) {
                var n = PetEffectXMLInfo.getEffect(i.effectID, i.args);
                this.lab_texing.text = n
            } else this.lab_texing.text = "无";
            for (var r = [], a = 0; 6 > a; a++) {
                var o = (new egret.HtmlTextParser).parse(PetPropAddController.getAttributehtmlStr(t, a)); (new egret.HtmlTextParser).parse(PetPropAddController.showAddTxtTip2(t, a));
                r.push(o)
            }
            this.lab_atk.textFlow = r[0],
            this.lab_def.textFlow = r[1],
            this.lab_satk.textFlow = r[2],
            this.lab_sdef.textFlow = r[3],
            this.lab_speed.textFlow = r[4],
            this.lab_hp.textFlow = r[5],
            this.lab_atk_extra.text = t.ev_attack + "",
            this.lab_def_extra.text = t.ev_defence + "",
            this.lab_satk_extra.text = t.ev_sa + "",
            this.lab_sdef_extra.text = t.ev_sd + "",
            this.lab_speed_extra.text = t.ev_sp + "",
            this.lab_hp_extra.text = t.ev_hp + "",
            this.img_rune_0.source = t.abilityMark > 0 ? CountermarkXMLInfo.getIconURL(CountermarkXMLInfo.getMarkId(t.abilityMark)) : null,
            this.img_rune_1.source = t.skillMark > 0 ? CountermarkXMLInfo.getIconURL(CountermarkXMLInfo.getMarkId(t.skillMark)) : null,
            this.img_runelock_2.visible = !t.commonMarkActived,
            this.img_rune_2.visible = Boolean(t.commonMarkActived),
            this.img_rune_2.visible && (this.img_rune_2.source = t.commonMark > 0 ? CountermarkXMLInfo.getIconURL(CountermarkXMLInfo.getMarkId(t.commonMark)) : null)
        },
        i.prototype.updatExHp = function(t) {
            var e = this;
            SocketConnection.sendWithPromise(CommandID.JAMES_ARMOR_QUERY_ABIBLITY, [t]).then(function(t) {
                var i = t.data;
                i.position = 0;
                var n = i.readUnsignedInt();
                e.lab_power.text = n + "/20"
            })
        },
        i.prototype._onTouchImageButton = function(t) {
            var e = this;
            switch (t.currentTarget) {
            case this.btnUp:
            case this.btnDown:
                var i = this._customData.callBack,
                n = this._customData.caller,
                r = this._customData.petInfo;
                i.apply(n, [r]).then(function() {
                    e.hide()
                })
            }
        },
        i.prototype._onTouchTap = function(t) {
            var e = this.globalToLocal(t.stageX, t.stageY);
            this._closeTouchTapRect.containsPoint(e) && this.hide()
        },
        i.prototype.destroy = function() {
            this._petShow.destroy(),
            e.prototype.destroy.call(this)
        },
        i
    } (PopView);
    t.PetInfoPop = e,
    __reflect(e.prototype, "crystalDuplicate.PetInfoPop")
} (crystalDuplicate || (crystalDuplicate = {}));
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
crystalDuplicate; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.skinName = t.ResultPopSkin,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this)
        },
        i.prototype.initEvents = function() {
            var t = this;
            ImageButtonUtil.add(this.btnSure,
            function() {
                var e = t._customData.callBack,
                i = t._customData.caller;
                t.hide(),
                e.apply(i, null)
            },
            this)
        },
        i.prototype.removeEvents = function() {
            ImageButtonUtil.removeAll(this)
        },
        i.prototype._parseData = function() {
            this._customData = this._data
        },
        i.prototype._upDateView = function() {
            this.title_successful.visible = 1 === this._customData.result,
            this.title_failed.visible = 2 === this._customData.result;
            var t, e;
            this._customData.resultData[0].userId === MainManager.actorInfo.userID ? (t = this._customData.resultData[0], e = this._customData.resultData[1]) : (t = this._customData.resultData[1], e = this._customData.resultData[0]),
            this.compMyInfo.setData(t),
            this.compMyInfo.UpdateInfo(),
            this.compOtherInfo.setData(e),
            this.compOtherInfo.UpdateInfo()
        },
        i.prototype.destroy = function() {
            this._customData = null,
            this.compMyInfo.destroy(),
            this.compOtherInfo.destroy(),
            e.prototype.destroy.call(this)
        },
        i
    } (PopView);
    t.ResultPop = e,
    __reflect(e.prototype, "crystalDuplicate.ResultPop")
} (crystalDuplicate || (crystalDuplicate = {}));
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
crystalDuplicate; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.skinName = t.SelectedTeamPopSkin,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.scroller_team.scrollPolicyH = eui.ScrollPolicy.OFF,
            this.scroller_team.viewport = this.list_team,
            this.list_team.itemRenderer = t.SelectedTeamItem,
            this.list_team.dataProvider = new eui.ArrayCollection
        },
        i.prototype.initEvents = function() {
            ImageButtonUtil.add(this.btnSure, this.onTouchImageButton, this),
            ImageButtonUtil.add(this.btnCancel, this.onTouchImageButton, this),
            ImageButtonUtil.add(this.btnClose, this.onTouchImageButton, this)
        },
        i.prototype.removeEvents = function() {
            ImageButtonUtil.removeAll(this)
        },
        i.prototype._parseData = function() {
            this._customData = this._data
        },
        i.prototype._upDateView = function() {
            var e = this,
            i = this.list_team.dataProvider;
            i.removeAll();
            for (var n = this._customData.teams,
            r = 0; r < n.length; r++) {
                for (var a = n[r], o = [], s = 0; s < a.length; s++) {
                    var _ = a[s];
                    o.push(_ > 0 ? t.MgrData.GetInstance().GetPetData(_) : null)
                }
                i.addItem({
                    idx: r,
                    infos: o
                })
            }
            egret.callLater(function() {
                e.list_team.selectedIndex = e._customData.currentIdx
            },
            this)
        },
        i.prototype.onTouchImageButton = function(t) {
            switch (t.currentTarget) {
            case this.btnCancel:
            case this.btnClose:
                this.hide();
                break;
            case this.btnSure:
                if (this.checkTeamIsAllNone()) {
                    var e = this.list_team.selectedIndex,
                    i = this._customData.callBack,
                    n = this._customData.caller;
                    i.apply(n, [e + 1]),
                    this.hide()
                } else Alarm.show("当前队列中无可出战的精灵")
            }
        },
        i.prototype.checkTeamIsAllNone = function() {
            for (var t = this.list_team.selectedIndex,
            e = this.list_team.dataProvider.getItemAt(t), i = e.infos, n = 0; n < i.length; n++) if (i[n]) return ! 0;
            return ! 1
        },
        i.prototype.destroy = function() {
            this._customData = null,
            e.prototype.destroy.call(this)
        },
        i
    } (PopView);
    t.SelectedTeamPop = e,
    __reflect(e.prototype, "crystalDuplicate.SelectedTeamPop")
} (crystalDuplicate || (crystalDuplicate = {}));
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
crystalDuplicate; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.skinName = t.PetIconStyle1Skin,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this)
        },
        Object.defineProperty(i.prototype, "selected", {
            get: function() {
                return egret.superGetter(i, this, "selected")
            },
            set: function(t) {
                egret.superSetter(i, this, "selected", t)
            },
            enumerable: !0,
            configurable: !0
        }),
        i.prototype.dataChanged = function() {
            this._info = this.data,
            this.group_info.visible = null !== this._info && void 0 !== this._info,
            this.touchEnabled = this.touchChildren = this.group_info.visible,
            this._info && (this.txtName.text = StringUtil.parseStrLimitLen(this._info.name, 6), this.icon.source = ClientConfig.getPetHeadPath(this._info.id), this.txtLv.text = "Lv." + this._info.level)
        },
        i
    } (eui.ItemRenderer);
    t.PetIconStyle1 = e,
    __reflect(e.prototype, "crystalDuplicate.PetIconStyle1")
} (crystalDuplicate || (crystalDuplicate = {})),
window.crystalDuplicate = window.crystalDuplicate || {};
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
generateEUI.paths["resource/eui_skins/comp/CompCardSkin.exml"] = window.crystalDuplicate.CompCardSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["flagSelected", "card"],
        this.height = 120,
        this.width = 80,
        this.elementsContent = [this.flagSelected_i(), this.card_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.flagSelected_i = function() {
        var t = new eui.Rect;
        return this.flagSelected = t,
        t.fillAlpha = 0,
        t.fillColor = 16776960,
        t.height = 130,
        t.horizontalCenter = 0,
        t.strokeColor = 16776960,
        t.strokeWeight = 5,
        t.verticalCenter = 0,
        t.width = 90,
        t
    },
    i.card_i = function() {
        var t = new eui.Image;
        return this.card = t,
        t.source = "crystalDuplicate_card_0001_png",
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/comp/CompChangeCardsOptionSkin.exml"] = window.crystalDuplicate.CompChangeCardsOptionSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["btnSure", "texture_123masd", "txtTm"],
        this.height = 390,
        this.width = 599,
        this.elementsContent = [this._Image1_i(), this._Image2_i(), this.btnSure_i(), this.texture_123masd_i(), this._Label2_i(), this._Image4_i(), this.txtTm_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 139,
        t.source = "card_main_panel_2_png",
        t.width = 348,
        t.x = 125,
        t.y = 251,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 2,
        t.source = "card_main_panel_53_png",
        t.width = 599,
        t.x = 0,
        t.y = 248,
        t
    },
    i.btnSure_i = function() {
        var t = new eui.Group;
        return this.btnSure = t,
        t.x = 211,
        t.y = 223,
        t.elementsContent = [this._Image3_i(), this._Label1_i()],
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.height = 52,
        t.source = "common_btn_bg_style_orange_1_png",
        t.width = 176,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "HuaKangXinZongYi",
        t.size = 26,
        t.stroke = 1,
        t.strokeColor = 16642157,
        t.text = "确认",
        t.textColor = 9261339,
        t.x = 60,
        t.y = 11,
        t
    },
    i.texture_123masd_i = function() {
        var t = new eui.Image;
        return this.texture_123masd = t,
        t.height = 40,
        t.source = "card_main_panel_texture_123masd_png",
        t.width = 355,
        t.x = 124,
        t.y = 152,
        t
    },
    i._Label2_i = function() {
        var t = new eui.Label;
        return t.size = 18,
        t.text = "请选择1张手牌与对方互相交换",
        t.textColor = 4546979,
        t.x = 176,
        t.y = 163,
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.height = 150,
        t.source = "card_main_panel_timerBg_png",
        t.width = 164,
        t.x = 220,
        t.y = 0,
        t
    },
    i.txtTm_i = function() {
        var t = new eui.Label;
        return this.txtTm = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.horizontalCenter = 0,
        t.size = 55,
        t.text = "5",
        t.textColor = 16777215,
        t.y = 46,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/comp/CompChoosePropSkin.exml"] = window.crystalDuplicate.CompChoosePropSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["btnSure", "icon_prop0", "flag_selected0", "propItem0", "icon_prop1", "flag_selected1", "propItem1", "icon_prop2", "flag_selected2", "propItem2", "texture_1mazsled", "txt_timer", "Chooseprop"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.Chooseprop_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.Chooseprop_i = function() {
        var t = new eui.Group;
        return this.Chooseprop = t,
        t.visible = !0,
        t.x = 269,
        t.y = 122,
        t.elementsContent = [this._Image1_i(), this._Image2_i(), this.btnSure_i(), this.propItem0_i(), this.propItem1_i(), this.propItem2_i(), this.texture_1mazsled_i(), this._Label2_i(), this._Image7_i(), this.txt_timer_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 139,
        t.source = "card_main_panel_2_png",
        t.width = 348,
        t.x = 125,
        t.y = 275,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 2,
        t.source = "card_main_panel_53_png",
        t.width = 599,
        t.x = 0,
        t.y = 272,
        t
    },
    i.btnSure_i = function() {
        var t = new eui.Group;
        return this.btnSure = t,
        t.x = 211,
        t.y = 285,
        t.elementsContent = [this._Image3_i(), this._Label1_i()],
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.height = 52,
        t.source = "common_btn_bg_style_orange_1_png",
        t.width = 176,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "HuaKangXinZongYi",
        t.size = 26,
        t.stroke = 1,
        t.strokeColor = 16642157,
        t.text = "确认",
        t.textColor = 9261339,
        t.x = 60,
        t.y = 11,
        t
    },
    i.propItem0_i = function() {
        var t = new eui.Group;
        return this.propItem0 = t,
        t.x = 144,
        t.y = 180,
        t.elementsContent = [this._Image4_i(), this.icon_prop0_i(), this.flag_selected0_i()],
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.height = 92,
        t.source = "card_main_panel_propItem_bg_png",
        t.width = 92,
        t.x = 0,
        t.y = 0,
        t
    },
    i.icon_prop0_i = function() {
        var t = new eui.Image;
        return this.icon_prop0 = t,
        t.height = 33,
        t.source = "card_main_panel_icon_prop_1_png",
        t.visible = !0,
        t.width = 30,
        t.x = 30,
        t.y = 29,
        t
    },
    i.flag_selected0_i = function() {
        var t = new eui.Image;
        return this.flag_selected0 = t,
        t.height = 26,
        t.source = "card_main_panel_flag_selected_png",
        t.width = 26,
        t.x = 64,
        t.y = 64,
        t
    },
    i.propItem1_i = function() {
        var t = new eui.Group;
        return this.propItem1 = t,
        t.x = 254,
        t.y = 180,
        t.elementsContent = [this._Image5_i(), this.icon_prop1_i(), this.flag_selected1_i()],
        t
    },
    i._Image5_i = function() {
        var t = new eui.Image;
        return t.height = 92,
        t.source = "card_main_panel_propItem_bg_png",
        t.width = 92,
        t.x = 0,
        t.y = 0,
        t
    },
    i.icon_prop1_i = function() {
        var t = new eui.Image;
        return this.icon_prop1 = t,
        t.source = "card_main_panel_icon_prop_2_png",
        t.x = 30,
        t.y = 29,
        t
    },
    i.flag_selected1_i = function() {
        var t = new eui.Image;
        return this.flag_selected1 = t,
        t.height = 26,
        t.source = "card_main_panel_flag_selected_png",
        t.width = 26,
        t.x = 64,
        t.y = 64,
        t
    },
    i.propItem2_i = function() {
        var t = new eui.Group;
        return this.propItem2 = t,
        t.x = 364,
        t.y = 180,
        t.elementsContent = [this._Image6_i(), this.icon_prop2_i(), this.flag_selected2_i()],
        t
    },
    i._Image6_i = function() {
        var t = new eui.Image;
        return t.height = 92,
        t.source = "card_main_panel_propItem_bg_png",
        t.width = 92,
        t.x = 0,
        t.y = 0,
        t
    },
    i.icon_prop2_i = function() {
        var t = new eui.Image;
        return this.icon_prop2 = t,
        t.source = "card_main_panel_icon_prop_3_png",
        t.x = 30,
        t.y = 29,
        t
    },
    i.flag_selected2_i = function() {
        var t = new eui.Image;
        return this.flag_selected2 = t,
        t.height = 26,
        t.source = "card_main_panel_flag_selected_png",
        t.width = 26,
        t.x = 64,
        t.y = 64,
        t
    },
    i.texture_1mazsled_i = function() {
        var t = new eui.Image;
        return this.texture_1mazsled = t,
        t.height = 40,
        t.source = "card_main_panel_texture_1mazsled_png",
        t.width = 355,
        t.x = 124,
        t.y = 136,
        t
    },
    i._Label2_i = function() {
        var t = new eui.Label;
        return t.size = 18,
        t.text = "请选择你的选择身份牌属性",
        t.textColor = 4546979,
        t.x = 192,
        t.y = 147,
        t
    },
    i._Image7_i = function() {
        var t = new eui.Image;
        return t.height = 150,
        t.source = "card_main_panel_timerBg_png",
        t.width = 164,
        t.x = 220,
        t.y = 0,
        t
    },
    i.txt_timer_i = function() {
        var t = new eui.Label;
        return this.txt_timer = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.horizontalCenter = 0,
        t.size = 55,
        t.text = "5",
        t.textColor = 16777215,
        t.y = 46,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/comp/EnemyTeamInfoSkin.exml"] = window.crystalDuplicate.EnemyTeamInfoSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["img_team_bg", "imge_pet_head_0", "imge_pet_head_1", "imge_pet_head_2", "imge_pet_head_3", "imge_pet_head_4", "imge_pet_head_5", "petHead_items", "tx_fight_btn", "fight_btn", "img_win_flag", "txt_rewardNum", "img_rewardIcon", "img_playIcon", "tx_nameTx", "headIcon"],
        this.height = 95,
        this.width = 1046,
        this.elementsContent = [this.img_team_bg_i(), this.petHead_items_i(), this.fight_btn_i(), this.img_win_flag_i(), this.txt_rewardNum_i(), this.img_rewardIcon_i(), this.img_playIcon_i(), this.tx_nameTx_i(), this.headIcon_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.img_team_bg_i = function() {
        var t = new eui.Image;
        return this.img_team_bg = t,
        t.height = 95,
        t.source = "crystalDuplicate_Lv0_view_img_team_bg_png",
        t.visible = !0,
        t.width = 1049,
        t.x = 0,
        t.y = 0,
        t
    },
    i.petHead_items_i = function() {
        var t = new eui.Group;
        return this.petHead_items = t,
        t.x = 241,
        t.y = 7.67,
        t.elementsContent = [this.imge_pet_head_0_i(), this.imge_pet_head_1_i(), this.imge_pet_head_2_i(), this.imge_pet_head_3_i(), this.imge_pet_head_4_i(), this.imge_pet_head_5_i()],
        t
    },
    i.imge_pet_head_0_i = function() {
        var t = new eui.Image;
        return this.imge_pet_head_0 = t,
        t.height = 80,
        t.source = "crystalDuplicate_Lv0_view_imge_pet_head_0_png",
        t.visible = !0,
        t.width = 80,
        t.x = 0,
        t.y = 0,
        t
    },
    i.imge_pet_head_1_i = function() {
        var t = new eui.Image;
        return this.imge_pet_head_1 = t,
        t.height = 80,
        t.source = "crystalDuplicate_Lv0_view_imge_pet_head_0_png",
        t.width = 80,
        t.x = 88,
        t.y = 0,
        t
    },
    i.imge_pet_head_2_i = function() {
        var t = new eui.Image;
        return this.imge_pet_head_2 = t,
        t.height = 80,
        t.source = "crystalDuplicate_Lv0_view_imge_pet_head_0_png",
        t.width = 80,
        t.x = 176,
        t.y = 0,
        t
    },
    i.imge_pet_head_3_i = function() {
        var t = new eui.Image;
        return this.imge_pet_head_3 = t,
        t.height = 80,
        t.source = "crystalDuplicate_Lv0_view_imge_pet_head_0_png",
        t.width = 80,
        t.x = 264,
        t.y = 0,
        t
    },
    i.imge_pet_head_4_i = function() {
        var t = new eui.Image;
        return this.imge_pet_head_4 = t,
        t.height = 80,
        t.source = "crystalDuplicate_Lv0_view_imge_pet_head_0_png",
        t.width = 80,
        t.x = 352,
        t.y = 0,
        t
    },
    i.imge_pet_head_5_i = function() {
        var t = new eui.Image;
        return this.imge_pet_head_5 = t,
        t.height = 80,
        t.source = "crystalDuplicate_Lv0_view_imge_pet_head_0_png",
        t.width = 80,
        t.x = 440,
        t.y = 0,
        t
    },
    i.fight_btn_i = function() {
        var t = new eui.Group;
        return this.fight_btn = t,
        t.visible = !0,
        t.x = 908,
        t.y = 28,
        t.elementsContent = [this._Image1_i(), this.tx_fight_btn_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 40,
        t.source = "common_btn_bg_style_blue_2_png",
        t.width = 120,
        t.x = 0,
        t.y = 0,
        t
    },
    i.tx_fight_btn_i = function() {
        var t = new eui.Label;
        return this.tx_fight_btn = t,
        t.fontFamily = "黑体",
        t.size = 20,
        t.text = "突袭",
        t.textColor = 8341784,
        t.x = 40,
        t.y = 8.88,
        t
    },
    i.img_win_flag_i = function() {
        var t = new eui.Image;
        return this.img_win_flag = t,
        t.height = 46,
        t.source = "crystalDuplicate_Lv0_view_img_win_flag_png",
        t.visible = !0,
        t.width = 126,
        t.x = 905,
        t.y = 25,
        t
    },
    i.txt_rewardNum_i = function() {
        var t = new eui.Label;
        return this.txt_rewardNum = t,
        t.fontFamily = "黑体",
        t.size = 18,
        t.text = "100",
        t.textColor = 4546979,
        t.x = 855,
        t.y = 64,
        t
    },
    i.img_rewardIcon_i = function() {
        var t = new eui.Image;
        return this.img_rewardIcon = t,
        t.height = 27,
        t.source = "crystalDuplicate_Lv0_view_img_reward_item_icon_png",
        t.width = 47,
        t.x = 806,
        t.y = 35,
        t
    },
    i.img_playIcon_i = function() {
        var t = new eui.Image;
        return this.img_playIcon = t,
        t.height = 78,
        t.source = "crystalDuplicate_Lv0_view_img_playIcon_png",
        t.visible = !1,
        t.width = 76,
        t.x = 50,
        t.y = 9,
        t
    },
    i.tx_nameTx_i = function() {
        var t = new eui.Label;
        return this.tx_nameTx = t,
        t.fontFamily = "黑体",
        t.size = 18,
        t.text = "名字五个字",
        t.textColor = 4546979,
        t.x = 134,
        t.y = 29,
        t
    },
    i.headIcon_i = function() {
        var t = new core.component.AvatarIcon;
        return this.headIcon = t,
        t.x = 89,
        t.y = 49,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/comp/ProgressBarStyle1Skin.exml"] = window.crystalDuplicate.ProgressBarStyle1Skin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["thumb", "labelDisplay"],
        this.height = 16,
        this.width = 938,
        this.elementsContent = [this._Image1_i(), this.thumb_i(), this.labelDisplay_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "crystalDuplicate_Lv0_view_imge_bar_bg_png",
        t
    },
    i.thumb_i = function() {
        var t = new eui.Image;
        return this.thumb = t,
        t.height = 10,
        t.left = 2,
        t.right = 2,
        t.source = "crystalDuplicate_Lv0_view_imge_bar_png",
        t.verticalCenter = 0,
        t
    },
    i.labelDisplay_i = function() {
        var t = new eui.Label;
        return this.labelDisplay = t,
        t.horizontalCenter = 0,
        t.textColor = 16777215,
        t.verticalCenter = 0,
        t.visible = !1,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/comp/ResultPlayerInfoSkin.exml"] = window.crystalDuplicate.ResultPlayerInfoSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["tiao", "icon0", "icon1", "icon2", "icon3", "icon4", "icon5", "txt_lab0", "txt_lab1", "txt_lab2", "txt_lab3", "txt_lab4", "txt_lab5", "txt_num", "txt_name", "headIcon"],
        this.height = 104,
        this.width = 811,
        this.elementsContent = [this.tiao_i(), this.icon0_i(), this.icon1_i(), this.icon2_i(), this.icon3_i(), this.icon4_i(), this.icon5_i(), this._Image1_i(), this._Group1_i(), this.txt_num_i(), this.txt_name_i(), this.headIcon_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.tiao_i = function() {
        var t = new eui.Image;
        return this.tiao = t,
        t.height = 104,
        t.source = "result_pop_tiao_png",
        t.width = 811,
        t.x = 0,
        t.y = 0,
        t
    },
    i.icon0_i = function() {
        var t = new eui.Image;
        return this.icon0 = t,
        t.height = 80,
        t.width = 80,
        t.x = 252,
        t.y = 0,
        t
    },
    i.icon1_i = function() {
        var t = new eui.Image;
        return this.icon1 = t,
        t.height = 80,
        t.width = 80,
        t.x = 340,
        t.y = 0,
        t
    },
    i.icon2_i = function() {
        var t = new eui.Image;
        return this.icon2 = t,
        t.height = 80,
        t.width = 80,
        t.x = 428,
        t.y = 0,
        t
    },
    i.icon3_i = function() {
        var t = new eui.Image;
        return this.icon3 = t,
        t.height = 80,
        t.width = 80,
        t.x = 516,
        t.y = 0,
        t
    },
    i.icon4_i = function() {
        var t = new eui.Image;
        return this.icon4 = t,
        t.height = 80,
        t.width = 80,
        t.x = 604,
        t.y = 0,
        t
    },
    i.icon5_i = function() {
        var t = new eui.Image;
        return this.icon5 = t,
        t.height = 80,
        t.width = 80,
        t.x = 692,
        t.y = 0,
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 78,
        t.visible = !0,
        t.width = 76,
        t.x = 28,
        t.y = 10,
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.visible = !0,
        t.x = 256,
        t.y = 79,
        t.elementsContent = [this.txt_lab0_i(), this.txt_lab1_i(), this.txt_lab2_i(), this.txt_lab3_i(), this.txt_lab4_i(), this.txt_lab5_i()],
        t
    },
    i.txt_lab0_i = function() {
        var t = new eui.Label;
        return this.txt_lab0 = t,
        t.size = 18,
        t.text = "000000",
        t.textColor = 16777215,
        t.x = 0,
        t.y = 0,
        t
    },
    i.txt_lab1_i = function() {
        var t = new eui.Label;
        return this.txt_lab1 = t,
        t.size = 18,
        t.text = "000000",
        t.textColor = 16777215,
        t.x = 88,
        t.y = 0,
        t
    },
    i.txt_lab2_i = function() {
        var t = new eui.Label;
        return this.txt_lab2 = t,
        t.size = 18,
        t.text = "000000",
        t.textColor = 16777215,
        t.x = 176,
        t.y = 0,
        t
    },
    i.txt_lab3_i = function() {
        var t = new eui.Label;
        return this.txt_lab3 = t,
        t.size = 18,
        t.text = "000000",
        t.textColor = 16777215,
        t.x = 264,
        t.y = 0,
        t
    },
    i.txt_lab4_i = function() {
        var t = new eui.Label;
        return this.txt_lab4 = t,
        t.size = 18,
        t.text = "000000",
        t.textColor = 16777215,
        t.x = 352,
        t.y = 0,
        t
    },
    i.txt_lab5_i = function() {
        var t = new eui.Label;
        return this.txt_lab5 = t,
        t.size = 18,
        t.text = "000000",
        t.textColor = 16777215,
        t.x = 440,
        t.y = 0,
        t
    },
    i.txt_num_i = function() {
        var t = new eui.Label;
        return this.txt_num = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 22,
        t.text = "99999999",
        t.textColor = 4546979,
        t.visible = !0,
        t.x = 108,
        t.y = 24,
        t
    },
    i.txt_name_i = function() {
        var t = new eui.Label;
        return this.txt_name = t,
        t.size = 18,
        t.text = "名字五个字",
        t.textColor = 16777215,
        t.x = 113,
        t.y = 71,
        t
    },
    i.headIcon_i = function() {
        var t = new core.component.AvatarIcon;
        return this.headIcon = t,
        t.x = 66,
        t.y = 52,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/comp/RewardBoxSkin.exml"] = window.crystalDuplicate.RewardBoxSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["incomplete", "reward", "complete"],
        this.height = 70,
        this.width = 70,
        this.elementsContent = [this.incomplete_i(), this.reward_i(), this.complete_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.incomplete_i = function() {
        var t = new eui.Group;
        return this.incomplete = t,
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image1_i(), this._Image2_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 70,
        t.source = "crystalDuplicate_Lv0_view_imge_box_CannotOpen_bg_png",
        t.width = 70,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 50,
        t.source = "crystalDuplicate_Lv0_view_imge_box_CannotOpen_png",
        t.width = 47,
        t.x = 10.61,
        t.y = 6,
        t
    },
    i.reward_i = function() {
        var t = new eui.Group;
        return this.reward = t,
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image3_i(), this._Image4_i()],
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.height = 70,
        t.source = "crystalDuplicate_Lv0_View_imge_box_CanOpen_bg_png",
        t.width = 70,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.height = 50,
        t.source = "crystalDuplicate_Lv0_View_imge_box_CanOpen_png",
        t.width = 47,
        t.x = 10.61,
        t.y = 6,
        t
    },
    i.complete_i = function() {
        var t = new eui.Group;
        return this.complete = t,
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image5_i(), this._Image6_i()],
        t
    },
    i._Image5_i = function() {
        var t = new eui.Image;
        return t.height = 70,
        t.source = "crystalDuplicate_Lv0_View_imge_box_open_bg_png",
        t.width = 70,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Image6_i = function() {
        var t = new eui.Image;
        return t.height = 50,
        t.source = "crystalDuplicate_Lv0_View_imge_box_open_png",
        t.width = 47,
        t.x = 10.61,
        t.y = 6,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/itemrender/PageItemSkin.exml"] = window.crystalDuplicate.PageItemSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["page_up", "page_down", "txt_num", "page"],
        this.currentState = "up",
        this.height = 32,
        this.width = 32,
        this.elementsContent = [this.page_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.page_i = function() {
        var t = new eui.Group;
        return this.page = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.elementsContent = [this.page_up_i(), this.page_down_i(), this.txt_num_i()],
        t
    },
    i.page_up_i = function() {
        var t = new eui.Image;
        return this.page_up = t,
        t.height = 24,
        t.source = "crystalDuplicate_selected_page_up_png",
        t.width = 24,
        t.x = 4,
        t.y = 4,
        t
    },
    i.page_down_i = function() {
        var t = new eui.Image;
        return this.page_down = t,
        t.height = 32,
        t.source = "crystalDuplicate_selected_page_down_png",
        t.visible = !0,
        t.width = 32,
        t.x = 0,
        t.y = 0,
        t
    },
    i.txt_num_i = function() {
        var t = new eui.Label;
        return this.txt_num = t,
        t.size = 16,
        t.text = "4",
        t.textColor = 10212863,
        t.x = 11,
        t.y = 9,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/itemrender/PetIconStyle1Skin.exml"] = window.crystalDuplicate.PetIconStyle1Skin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["icon", "txtName", "txtLv", "texture_type", "group_info"],
        this.height = 114,
        this.width = 94,
        this.elementsContent = [this._Image1_i(), this._Image2_i(), this.group_info_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 114,
        t.source = "crystalDuplicate_selected_head_head_imge_head_bg_png",
        t.visible = !0,
        t.width = 94,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 84,
        t.source = "crystalDuplicate_selected_head_pet_head_bg_null_png",
        t.visible = !0,
        t.width = 84,
        t.x = 6,
        t.y = 5,
        t
    },
    i.group_info_i = function() {
        var t = new eui.Group;
        return this.group_info = t,
        t.visible = !0,
        t.x = 1,
        t.y = 2,
        t.elementsContent = [this.icon_i(), this.txtName_i(), this.txtLv_i(), this.texture_type_i()],
        t
    },
    i.icon_i = function() {
        var t = new eui.Image;
        return this.icon = t,
        t.height = 92,
        t.source = "",
        t.visible = !0,
        t.width = 92,
        t.x = 0,
        t.y = 0,
        t
    },
    i.txtName_i = function() {
        var t = new eui.Label;
        return this.txtName = t,
        t.size = 15,
        t.text = "精灵名字最多",
        t.textAlign = "center",
        t.textColor = 16777215,
        t.width = 90,
        t.x = 1,
        t.y = 94,
        t
    },
    i.txtLv_i = function() {
        var t = new eui.Label;
        return this.txtLv = t,
        t.size = 15,
        t.stroke = 1,
        t.strokeColor = 1973795,
        t.text = "Lv.100",
        t.textColor = 16773477,
        t.x = 1,
        t.y = 0,
        t
    },
    i.texture_type_i = function() {
        var t = new eui.Image;
        return this.texture_type = t,
        t.height = 23,
        t.visible = !0,
        t.width = 22,
        t.x = 3,
        t.y = 61,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/itemrender/PetIconStyle2Skin.exml"] = window.crystalDuplicate.PetIconStyle2Skin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["icon", "txtName", "txtLv", "texture_type", "group_info"],
        this.height = 134,
        this.width = 110,
        this.elementsContent = [this._Image1_i(), this._Image2_i(), this.group_info_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 134,
        t.source = "crystalDuplicate_selected_head_head_imge_head_bg_png",
        t.width = 110,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 134,
        t.source = "common_pet_head_bg_null_size_110_134_png",
        t.width = 110,
        t.x = 0,
        t.y = 0,
        t
    },
    i.group_info_i = function() {
        var t = new eui.Group;
        return this.group_info = t,
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image3_i(), this.icon_i(), this.txtName_i(), this.txtLv_i(), this.texture_type_i()],
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.height = 25,
        t.source = "common_pet_head_name_bg_110_134_png",
        t.visible = !0,
        t.width = 110,
        t.x = 0,
        t.y = 109,
        t
    },
    i.icon_i = function() {
        var t = new eui.Image;
        return this.icon = t,
        t.height = 108,
        t.source = "",
        t.visible = !0,
        t.width = 108,
        t.x = 1,
        t.y = 2,
        t
    },
    i.txtName_i = function() {
        var t = new eui.Label;
        return this.txtName = t,
        t.size = 16,
        t.text = "精灵名字最多",
        t.textAlign = "center",
        t.textColor = 16777215,
        t.width = 100,
        t.x = 5,
        t.y = 114,
        t
    },
    i.txtLv_i = function() {
        var t = new eui.Label;
        return this.txtLv = t,
        t.size = 18,
        t.stroke = 1,
        t.strokeColor = 1973795,
        t.text = "Lv.100",
        t.textAlign = "center",
        t.textColor = 16773477,
        t.x = 0,
        t.y = 0,
        t
    },
    i.texture_type_i = function() {
        var t = new eui.Image;
        return this.texture_type = t,
        t.height = 23,
        t.visible = !0,
        t.width = 22,
        t.x = 4,
        t.y = 83,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/itemrender/TeamInfoSkin.exml"] = window.crystalDuplicate.TeamInfoSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["down_bg", "up_bg", "icon0", "icon1", "icon2", "icon3", "icon4", "icon5", "txt_team"],
        this.currentState = "up",
        this.height = 101,
        this.width = 750,
        this.elementsContent = [this._Group1_i(), this.icon0_i(), this.icon1_i(), this.icon2_i(), this.icon3_i(), this.icon4_i(), this.icon5_i(), this.txt_team_i()],
        this.down_bg_i(),
        this.up_bg_i(),
        this.states = [new eui.State("up", [new eui.AddItems("up_bg", "", 2, "_Group1"), new eui.SetProperty("txt_team", "textColor", 3492469)]), new eui.State("down", [new eui.AddItems("down_bg", "", 0, ""), new eui.SetProperty("txt_team", "textColor", 16777215)])]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.down_bg_i = function() {
        var t = new eui.Image;
        return this.down_bg = t,
        t.height = 96,
        t.source = "selected_team_pop_down_bg_png",
        t.visible = !0,
        t.width = 746,
        t.x = 4,
        t.y = 4,
        t
    },
    i.up_bg_i = function() {
        var t = new eui.Image;
        return this.up_bg = t,
        t.height = 96,
        t.source = "selected_team_pop_up_bg_png",
        t.visible = !0,
        t.width = 746,
        t.x = 0,
        t.y = 5,
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return this._Group1 = t,
        t.visible = !0,
        t.x = 169,
        t.y = 0,
        t.elementsContent = [this._Image1_i(), this._Image2_i(), this._Image3_i(), this._Image4_i(), this._Image5_i(), this._Image6_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 100,
        t.source = "selected_team_pop_iconbg_png",
        t.width = 100,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 100,
        t.source = "selected_team_pop_iconbg_png",
        t.width = 100,
        t.x = 88,
        t.y = 0,
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.height = 100,
        t.source = "selected_team_pop_iconbg_png",
        t.width = 100,
        t.x = 176,
        t.y = 0,
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.height = 100,
        t.source = "selected_team_pop_iconbg_png",
        t.width = 100,
        t.x = 264,
        t.y = 0,
        t
    },
    i._Image5_i = function() {
        var t = new eui.Image;
        return t.height = 100,
        t.source = "selected_team_pop_iconbg_png",
        t.width = 100,
        t.x = 352,
        t.y = 0,
        t
    },
    i._Image6_i = function() {
        var t = new eui.Image;
        return t.height = 100,
        t.source = "selected_team_pop_iconbg_png",
        t.width = 100,
        t.x = 440,
        t.y = 0,
        t
    },
    i.icon0_i = function() {
        var t = new eui.Image;
        return this.icon0 = t,
        t.height = 80,
        t.source = "",
        t.width = 80,
        t.x = 179,
        t.y = 10,
        t
    },
    i.icon1_i = function() {
        var t = new eui.Image;
        return this.icon1 = t,
        t.height = 80,
        t.source = "",
        t.width = 80,
        t.x = 267,
        t.y = 10,
        t
    },
    i.icon2_i = function() {
        var t = new eui.Image;
        return this.icon2 = t,
        t.height = 80,
        t.source = "",
        t.width = 80,
        t.x = 355,
        t.y = 10,
        t
    },
    i.icon3_i = function() {
        var t = new eui.Image;
        return this.icon3 = t,
        t.height = 80,
        t.source = "",
        t.width = 80,
        t.x = 443,
        t.y = 10,
        t
    },
    i.icon4_i = function() {
        var t = new eui.Image;
        return this.icon4 = t,
        t.height = 80,
        t.source = "",
        t.width = 80,
        t.x = 531,
        t.y = 10,
        t
    },
    i.icon5_i = function() {
        var t = new eui.Image;
        return this.icon5 = t,
        t.height = 80,
        t.source = "",
        t.width = 80,
        t.x = 619,
        t.y = 10,
        t
    },
    i.txt_team_i = function() {
        var t = new eui.Label;
        return this.txt_team = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 20,
        t.text = "编队2",
        t.textColor = 16777215,
        t.x = 68,
        t.y = 40,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/itemrender/TeamPetIconsItem.exml"] = window.crystalDuplicate.TeamPetIconsItem = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["team_next_bg", "teamNameTx_0_bg", "teamNameTx_0", "txtLabel", "aKey_down", "list_head"],
        this.height = 243,
        this.width = 480,
        this.elementsContent = [this.team_next_bg_i(), this.teamNameTx_0_bg_i(), this.teamNameTx_0_i(), this.aKey_down_i(), this.list_head_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.team_next_bg_i = function() {
        var t = new eui.Image;
        return this.team_next_bg = t,
        t.height = 243,
        t.source = "crystalDuplicate_selected_team_next_bg_png",
        t.visible = !0,
        t.width = 480,
        t.x = 0,
        t.y = 0,
        t
    },
    i.teamNameTx_0_bg_i = function() {
        var t = new eui.Image;
        return this.teamNameTx_0_bg = t,
        t.height = 115,
        t.source = "crystalDuplicate_selected_teamNameTx_0_bg_png",
        t.width = 114,
        t.x = 29.37,
        t.y = 41.33,
        t
    },
    i.teamNameTx_0_i = function() {
        var t = new eui.Label;
        return this.teamNameTx_0 = t,
        t.fontFamily = "黑体",
        t.size = 20,
        t.text = "编队1",
        t.textColor = 16777215,
        t.x = 60.04,
        t.y = 89.33,
        t
    },
    i.aKey_down_i = function() {
        var t = new eui.Group;
        return this.aKey_down = t,
        t.x = 24.05,
        t.y = 164.02,
        t.elementsContent = [this._Image1_i(), this.txtLabel_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 43,
        t.source = "common_btn_bg_style_blue_2_png",
        t.width = 122,
        t.x = 0,
        t.y = 0,
        t
    },
    i.txtLabel_i = function() {
        var t = new eui.Label;
        return this.txtLabel = t,
        t.fontFamily = "黑体",
        t.size = 20,
        t.text = "一键下阵",
        t.textColor = 16777215,
        t.x = 17.33,
        t.y = 10.67,
        t
    },
    i.list_head_i = function() {
        var t = new eui.List;
        return this.list_head = t,
        t.height = 243,
        t.itemRendererSkinName = crystalDuplicate.PetIconStyle1Skin,
        t.width = 325,
        t.x = 150,
        t.y = 0,
        t.layout = this._TileLayout1_i(),
        t.dataProvider = this._ArrayCollection1_i(),
        t
    },
    i._TileLayout1_i = function() {
        var t = new eui.TileLayout;
        return t.horizontalGap = 12,
        t.orientation = "rows",
        t.paddingBottom = 5,
        t.paddingLeft = 12,
        t.paddingRight = 12,
        t.paddingTop = 5,
        t.requestedColumnCount = 3,
        t
    },
    i._ArrayCollection1_i = function() {
        var t = new eui.ArrayCollection;
        return t.source = [this._Object1_i(), this._Object2_i(), this._Object3_i(), this._Object4_i(), this._Object5_i(), this._Object6_i()],
        t
    },
    i._Object1_i = function() {
        var t = {};
        return t
    },
    i._Object2_i = function() {
        var t = {};
        return t
    },
    i._Object3_i = function() {
        var t = {};
        return t["null"] = "",
        t
    },
    i._Object4_i = function() {
        var t = {};
        return t["null"] = "",
        t
    },
    i._Object5_i = function() {
        var t = {};
        return t["null"] = "",
        t
    },
    i._Object6_i = function() {
        var t = {};
        return t["null"] = "",
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/MainPanelSkin.exml"] = window.crystalDuplicate.MainPanelSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["BG", "img_itemNumBg2", "img_itemNumBg", "itemIcon_0", "numTx_0", "itemIcon_1", "numTx_1", "gr_numTx", "imge_pet_png", "imge_exchange_btn", "exchangeBtnTx", "gr_exchange", "imge_title_png", "imge_card_btn", "time_tx_bg", "time_tx", "imge_fight_btn", "imge_desTxBg", "des_tx", "imge_close_btn"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.BG_i(), this.gr_numTx_i(), this._Group1_i(), this.imge_close_btn_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.BG_i = function() {
        var t = new eui.Image;
        return this.BG = t,
        t.bottom = 0,
        t.left = 0,
        t.right = 0,
        t.source = "crystalDuplicate_mainView_BG_jpg",
        t.top = 0,
        t
    },
    i.gr_numTx_i = function() {
        var t = new eui.Group;
        return this.gr_numTx = t,
        t.right = 0,
        t.top = 16,
        t.elementsContent = [this.img_itemNumBg2_i(), this.img_itemNumBg_i(), this.itemIcon_0_i(), this.numTx_0_i(), this.itemIcon_1_i(), this.numTx_1_i()],
        t
    },
    i.img_itemNumBg2_i = function() {
        var t = new eui.Image;
        return this.img_itemNumBg2 = t,
        t.height = 2,
        t.source = "crystalDuplicate_mainView_img_itemNumBg2_png",
        t.visible = !0,
        t.width = 281,
        t.x = 0,
        t.y = 30,
        t
    },
    i.img_itemNumBg_i = function() {
        var t = new eui.Image;
        return this.img_itemNumBg = t,
        t.height = 30,
        t.source = "crystalDuplicate_mainView_img_itemNumBg_png",
        t.visible = !0,
        t.width = 279,
        t.x = 1,
        t.y = 0,
        t
    },
    i.itemIcon_0_i = function() {
        var t = new eui.Image;
        return this.itemIcon_0 = t,
        t.height = 27,
        t.source = "crystalDuplicate_mainView_itemIcon_0_png",
        t.width = 47,
        t.x = 8,
        t.y = 0,
        t
    },
    i.numTx_0_i = function() {
        var t = new eui.Label;
        return this.numTx_0 = t,
        t.fontFamily = "黑体",
        t.size = 18,
        t.text = "000",
        t.textColor = 7057391,
        t.x = 71,
        t.y = 8,
        t
    },
    i.itemIcon_1_i = function() {
        var t = new eui.Image;
        return this.itemIcon_1 = t,
        t.height = 27,
        t.source = "crystalDuplicate_mainView_itemIcon_0_png",
        t.width = 47,
        t.x = 144,
        t.y = 0,
        t
    },
    i.numTx_1_i = function() {
        var t = new eui.Label;
        return this.numTx_1 = t,
        t.fontFamily = "黑体",
        t.size = 18,
        t.text = "000",
        t.textColor = 7057391,
        t.x = 208,
        t.y = 8,
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.horizontalCenter = 0,
        t.verticalCenter = 0,
        t.visible = !0,
        t.elementsContent = [this.imge_pet_png_i(), this.gr_exchange_i(), this.imge_title_png_i(), this.imge_card_btn_i(), this.time_tx_bg_i(), this.time_tx_i(), this.imge_fight_btn_i(), this.imge_desTxBg_i(), this.des_tx_i()],
        t
    },
    i.imge_pet_png_i = function() {
        var t = new eui.Image;
        return this.imge_pet_png = t,
        t.height = 640,
        t.source = "crystalDuplicate_mainView_imge_pet_png_png",
        t.visible = !0,
        t.width = 698,
        t.x = 435.81,
        t.y = 0,
        t
    },
    i.gr_exchange_i = function() {
        var t = new eui.Group;
        return this.gr_exchange = t,
        t.x = 809.51,
        t.y = 475,
        t.elementsContent = [this.imge_exchange_btn_i(), this.exchangeBtnTx_i()],
        t
    },
    i.imge_exchange_btn_i = function() {
        var t = new eui.Image;
        return this.imge_exchange_btn = t,
        t.height = 122,
        t.source = "crystalDuplicate_mainView_imge_exchange_btn_png",
        t.width = 206,
        t.x = 42.44,
        t.y = 0,
        t
    },
    i.exchangeBtnTx_i = function() {
        var t = new eui.Label;
        return this.exchangeBtnTx = t,
        t.fontFamily = "黑体",
        t.size = 26,
        t.text = "兑 换",
        t.textColor = 9261339,
        t.x = 149,
        t.y = 56.04,
        t
    },
    i.imge_title_png_i = function() {
        var t = new eui.Image;
        return this.imge_title_png = t,
        t.height = 160,
        t.source = "crystalDuplicate_mainView_imge_title_png_png",
        t.width = 433,
        t.x = 74.76,
        t.y = 94,
        t
    },
    i.imge_card_btn_i = function() {
        var t = new eui.Image;
        return this.imge_card_btn = t,
        t.height = 213,
        t.source = "crystalDuplicate_mainView_imge_card_btn_png",
        t.width = 197,
        t.x = 297,
        t.y = 297,
        t
    },
    i.time_tx_bg_i = function() {
        var t = new eui.Image;
        return this.time_tx_bg = t,
        t.height = 90,
        t.source = "crystalDuplicate_mainView_time_tx_bg_png",
        t.width = 630,
        t.x = 0,
        t.y = 474,
        t
    },
    i.time_tx_i = function() {
        var t = new eui.Label;
        return this.time_tx = t,
        t.fontFamily = "黑体",
        t.size = 18,
        t.text = "每周五/六/日\n12：00-14：00\n20：00-22：00解锁",
        t.textColor = 16777215,
        t.width = 153,
        t.x = 314,
        t.y = 486,
        t
    },
    i.imge_fight_btn_i = function() {
        var t = new eui.Image;
        return this.imge_fight_btn = t,
        t.height = 213,
        t.source = "crystalDuplicate_mainView_imge_fight_btn_png",
        t.width = 197,
        t.x = 118,
        t.y = 339,
        t
    },
    i.imge_desTxBg_i = function() {
        var t = new eui.Image;
        return this.imge_desTxBg = t,
        t.height = 58,
        t.source = "crystalDuplicate_mainView_imge_desTxBg_png",
        t.width = 552,
        t.x = 29,
        t.y = 234,
        t
    },
    i.des_tx_i = function() {
        var t = new eui.Label;
        return this.des_tx = t,
        t.fontFamily = "黑体",
        t.size = 18,
        t.text = "说明说明说明说明说明说明说明说明说明说明说明说明说明说明说明说明说明",
        t.textColor = 2048396,
        t.width = 360,
        t.x = 124,
        t.y = 242,
        t
    },
    i.imge_close_btn_i = function() {
        var t = new eui.Image;
        return this.imge_close_btn = t,
        t.height = 48,
        t.source = "crystalDuplicate_mainView_imge_close_btn_png",
        t.visible = !0,
        t.width = 96,
        t.x = 0,
        t.y = 0,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/panel/CardMainPanelSkin.exml"] = window.crystalDuplicate.CardMainPanelSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["gameBg", "group_halfCards", "group_otherPrivate", "group_otherHands", "skill0", "skill1", "skill2", "skill3", "skills", "btnScore", "group_myPrivate", "group_myHands", "btnPublic", "btnPrivate", "tmComp", "group_publicCards", "changeCard", "Chooseprop", "txt_otherName", "otherHeadIcon", "other_iconProp", "flagDoing", "otherInfo", "txt_myName", "myHeadIcon", "my_iconProp", "flagReday", "myInfo", "btnHelp", "btnClose", "line", "group_close", "btnT0", "btnT1", "btnT2", "CompChooseProp", "compChangeCard", "myChangeCardPos", "otherChangeCardPos"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.gameBg_i(), this._Group1_i(), this.changeCard_i(), this.Chooseprop_i(), this.otherInfo_i(), this.myInfo_i(), this.group_close_i(), this.btnT0_i(), this.btnT1_i(), this.btnT2_i(), this.CompChooseProp_i(), this.compChangeCard_i(), this.myChangeCardPos_i(), this.otherChangeCardPos_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.gameBg_i = function() {
        var t = new eui.Image;
        return this.gameBg = t,
        t.height = 640,
        t.left = 0,
        t.right = 0,
        t.source = "card_main_panel_gameBg_jpg",
        t.y = 0,
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.visible = !0,
        t.x = 0,
        t.y = 8,
        t.elementsContent = [this.group_halfCards_i(), this.group_otherPrivate_i(), this.group_otherHands_i(), this.skills_i(), this.btnScore_i(), this.group_myPrivate_i(), this.group_myHands_i(), this.btnPublic_i(), this.btnPrivate_i(), this.tmComp_i(), this.group_publicCards_i()],
        t
    },
    i.group_halfCards_i = function() {
        var t = new eui.Group;
        return this.group_halfCards = t,
        t.x = 0,
        t.y = 252,
        t
    },
    i.group_otherPrivate_i = function() {
        var t = new eui.Group;
        return this.group_otherPrivate = t,
        t.height = 96,
        t.width = 424,
        t.x = 688,
        t.y = 124.444,
        t
    },
    i.group_otherHands_i = function() {
        var t = new eui.Group;
        return this.group_otherHands = t,
        t.height = 120,
        t.width = 350,
        t.x = 393,
        t.y = -68,
        t
    },
    i.skills_i = function() {
        var t = new eui.Group;
        return this.skills = t,
        t.x = 763,
        t.y = 541,
        t.elementsContent = [this.skill0_i(), this.skill1_i(), this.skill2_i(), this.skill3_i()],
        t
    },
    i.skill0_i = function() {
        var t = new eui.Image;
        return this.skill0 = t,
        t.height = 87,
        t.source = "card_main_panel_skill2_png",
        t.width = 88,
        t.x = 185,
        t.y = 0,
        t
    },
    i.skill1_i = function() {
        var t = new eui.Image;
        return this.skill1 = t,
        t.height = 87,
        t.source = "card_main_panel_skill3_png",
        t.width = 88,
        t.x = 277,
        t.y = 0,
        t
    },
    i.skill2_i = function() {
        var t = new eui.Image;
        return this.skill2 = t,
        t.height = 87,
        t.source = "card_main_panel_skill1_png",
        t.width = 88,
        t.x = 92,
        t.y = 0,
        t
    },
    i.skill3_i = function() {
        var t = new eui.Image;
        return this.skill3 = t,
        t.height = 87,
        t.source = "card_main_panel_skill0_png",
        t.width = 88,
        t.x = 0,
        t.y = 0,
        t
    },
    i.btnScore_i = function() {
        var t = new eui.Group;
        return this.btnScore = t,
        t.x = 236,
        t.y = 583,
        t.elementsContent = [this._Image1_i(), this._Label1_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 42,
        t.source = "common_btn_bg_style_blue_2_png",
        t.width = 122,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "HuaKangXinZongYi",
        t.size = 20,
        t.text = "积分提示",
        t.textColor = 16777215,
        t.x = 20,
        t.y = 10,
        t
    },
    i.group_myPrivate_i = function() {
        var t = new eui.Group;
        return this.group_myPrivate = t,
        t.height = 98,
        t.width = 423,
        t.x = 24,
        t.y = 402,
        t
    },
    i.group_myHands_i = function() {
        var t = new eui.Group;
        return this.group_myHands = t,
        t.height = 134,
        t.width = 349,
        t.x = 394,
        t.y = 498,
        t
    },
    i.btnPublic_i = function() {
        var t = new eui.Group;
        return this.btnPublic = t,
        t.x = 763,
        t.y = 447,
        t.elementsContent = [this._Image2_i(), this._Label2_i()],
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 52,
        t.source = "common_btn_bg_style_orange_1_png",
        t.width = 176,
        t.x = 0,
        t.y = 8,
        t
    },
    i._Label2_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "HuaKangXinZongYi",
        t.size = 26,
        t.stroke = 1,
        t.strokeColor = 16642157,
        t.text = "出牌至公共区",
        t.textColor = 9261339,
        t.x = 8,
        t.y = 20,
        t
    },
    i.btnPrivate_i = function() {
        var t = new eui.Group;
        return this.btnPrivate = t,
        t.x = 950,
        t.y = 447,
        t.elementsContent = [this._Image3_i(), this._Label3_i()],
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.height = 52,
        t.source = "common_btn_bg_style_orange_1_png",
        t.width = 176,
        t.x = 0,
        t.y = 8,
        t
    },
    i._Label3_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "HuaKangXinZongYi",
        t.size = 26,
        t.stroke = 1,
        t.strokeColor = 16642157,
        t.text = "出牌至私有区",
        t.textColor = 9261339,
        t.x = 8,
        t.y = 19,
        t
    },
    i.tmComp_i = function() {
        var t = new eui.Group;
        return this.tmComp = t,
        t.visible = !1,
        t.x = 489,
        t.y = 114,
        t.elementsContent = [this._Image4_i(), this._Label4_i()],
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.height = 150,
        t.source = "card_main_panel_timerBg_png",
        t.width = 164,
        t.x = 0,
        t.y = 8,
        t
    },
    i._Label4_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "HuaKangXinZongYi",
        t.size = 55,
        t.text = "5",
        t.textColor = 16777215,
        t.x = 54,
        t.y = 54,
        t
    },
    i.group_publicCards_i = function() {
        var t = new eui.Group;
        return this.group_publicCards = t,
        t.height = 120,
        t.width = 890,
        t.x = 140,
        t.y = 252,
        t
    },
    i.changeCard_i = function() {
        var t = new eui.Group;
        return this.changeCard = t,
        t.visible = !0,
        t.x = 269,
        t.y = 146,
        t
    },
    i.Chooseprop_i = function() {
        var t = new eui.Group;
        return this.Chooseprop = t,
        t.visible = !0,
        t.x = 269,
        t.y = 122,
        t
    },
    i.otherInfo_i = function() {
        var t = new eui.Group;
        return this.otherInfo = t,
        t.x = 906,
        t.y = 8,
        t.elementsContent = [this._Image5_i(), this.txt_otherName_i(), this.otherHeadIcon_i(), this._Group2_i(), this.flagDoing_i()],
        t
    },
    i._Image5_i = function() {
        var t = new eui.Image;
        return t.height = 80,
        t.source = "card_main_panel_iconKuang_png",
        t.visible = !0,
        t.width = 80,
        t.x = 104,
        t.y = 16,
        t
    },
    i.txt_otherName_i = function() {
        var t = new eui.Label;
        return this.txt_otherName = t,
        t.size = 18,
        t.text = "名字五个字",
        t.textColor = 16777215,
        t.x = 0,
        t.y = 78,
        t
    },
    i.otherHeadIcon_i = function() {
        var t = new eui.Image;
        return this.otherHeadIcon = t,
        t.height = 78,
        t.source = "card_main_panel_myHeadIcon_png",
        t.width = 76,
        t.x = 105,
        t.y = 16,
        t
    },
    i._Group2_i = function() {
        var t = new eui.Group;
        return t.x = 174,
        t.y = 0,
        t.elementsContent = [this._Image6_i(), this.other_iconProp_i()],
        t
    },
    i._Image6_i = function() {
        var t = new eui.Image;
        return t.height = 32,
        t.source = "card_main_panel_propBg_png",
        t.width = 32,
        t.x = 0,
        t.y = 0,
        t
    },
    i.other_iconProp_i = function() {
        var t = new eui.Image;
        return this.other_iconProp = t,
        t.height = 27,
        t.source = "card_main_panel_icon_prop_2_png",
        t.width = 24,
        t.x = 4,
        t.y = 2,
        t
    },
    i.flagDoing_i = function() {
        var t = new eui.Image;
        return this.flagDoing = t,
        t.height = 26,
        t.source = "card_main_panel_flagDoing_png",
        t.width = 76,
        t.x = 15,
        t.y = 15,
        t
    },
    i.myInfo_i = function() {
        var t = new eui.Group;
        return this.myInfo = t,
        t.x = 24,
        t.y = 528,
        t.elementsContent = [this._Image7_i(), this.txt_myName_i(), this.myHeadIcon_i(), this._Group3_i(), this.flagReday_i()],
        t
    },
    i._Image7_i = function() {
        var t = new eui.Image;
        return t.height = 80,
        t.source = "card_main_panel_iconKuang_png",
        t.visible = !0,
        t.width = 80,
        t.x = 22,
        t.y = 16,
        t
    },
    i.txt_myName_i = function() {
        var t = new eui.Label;
        return this.txt_myName = t,
        t.size = 18,
        t.text = "名字五个字",
        t.textColor = 16777215,
        t.x = 115,
        t.y = 78,
        t
    },
    i.myHeadIcon_i = function() {
        var t = new eui.Image;
        return this.myHeadIcon = t,
        t.height = 78,
        t.source = "card_main_panel_myHeadIcon_png",
        t.width = 76,
        t.x = 23,
        t.y = 16,
        t
    },
    i._Group3_i = function() {
        var t = new eui.Group;
        return t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image8_i(), this.my_iconProp_i()],
        t
    },
    i._Image8_i = function() {
        var t = new eui.Image;
        return t.height = 32,
        t.source = "card_main_panel_propBg_png",
        t.width = 32,
        t.x = 0,
        t.y = 0,
        t
    },
    i.my_iconProp_i = function() {
        var t = new eui.Image;
        return this.my_iconProp = t,
        t.height = 27,
        t.source = "card_main_panel_icon_prop_1_png",
        t.width = 24,
        t.x = 4,
        t.y = 2,
        t
    },
    i.flagReday_i = function() {
        var t = new eui.Image;
        return this.flagReday = t,
        t.height = 24,
        t.source = "card_main_panel_flagReday_png",
        t.width = 75,
        t.x = 115,
        t.y = 16,
        t
    },
    i.group_close_i = function() {
        var t = new eui.Group;
        return this.group_close = t,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this.btnHelp_i(), this.btnClose_i(), this.line_i()],
        t
    },
    i.btnHelp_i = function() {
        var t = new eui.Image;
        return this.btnHelp = t,
        t.height = 44,
        t.source = "card_reday_panel_btnHelp_png",
        t.width = 41,
        t.x = 106,
        t.y = 2,
        t
    },
    i.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.height = 48,
        t.source = "crystalDuplicate_mainView_imge_close_btn_png",
        t.width = 96,
        t.x = 0,
        t.y = 0,
        t
    },
    i.line_i = function() {
        var t = new eui.Image;
        return this.line = t,
        t.height = 48,
        t.source = "card_reday_panel_line_png",
        t.visible = !0,
        t.width = 2,
        t.x = 94,
        t.y = 0,
        t
    },
    i.btnT0_i = function() {
        var t = new eui.Group;
        return this.btnT0 = t,
        t.x = 712,
        t.y = 403,
        t.elementsContent = [this._Image9_i(), this._Label5_i()],
        t
    },
    i._Image9_i = function() {
        var t = new eui.Image;
        return t.height = 40,
        t.source = "common_btn_bg_style_orange_1_png",
        t.width = 126,
        t.x = 0,
        t
    },
    i._Label5_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "HuaKangXinZongYi",
        t.horizontalCenter = 0,
        t.size = 15,
        t.stroke = 1,
        t.strokeColor = 16642157,
        t.text = "对手手牌到私有区",
        t.textColor = 9261339,
        t.verticalCenter = 0,
        t
    },
    i.btnT1_i = function() {
        var t = new eui.Group;
        return this.btnT1 = t,
        t.x = 986,
        t.y = 403,
        t.elementsContent = [this._Image10_i(), this._Label6_i()],
        t
    },
    i._Image10_i = function() {
        var t = new eui.Image;
        return t.height = 40,
        t.source = "common_btn_bg_style_orange_1_png",
        t.width = 126,
        t.x = 0,
        t
    },
    i._Label6_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "HuaKangXinZongYi",
        t.horizontalCenter = 0,
        t.size = 15,
        t.stroke = 1,
        t.strokeColor = 16642157,
        t.text = "手牌添加一张",
        t.textColor = 9261339,
        t.verticalCenter = 0,
        t
    },
    i.btnT2_i = function() {
        var t = new eui.Group;
        return this.btnT2 = t,
        t.x = 853,
        t.y = 403,
        t.elementsContent = [this._Image11_i(), this._Label7_i()],
        t
    },
    i._Image11_i = function() {
        var t = new eui.Image;
        return t.height = 40,
        t.source = "common_btn_bg_style_orange_1_png",
        t.width = 126,
        t.x = 0,
        t
    },
    i._Label7_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "HuaKangXinZongYi",
        t.horizontalCenter = 0,
        t.size = 15,
        t.stroke = 1,
        t.strokeColor = 16642157,
        t.text = "对手手牌到公共区",
        t.textColor = 9261339,
        t.verticalCenter = 0,
        t
    },
    i.CompChooseProp_i = function() {
        var t = new crystalDuplicate.CompChooseProp;
        return this.CompChooseProp = t,
        t.horizontalCenter = 0,
        t.skinName = "crystalDuplicate.CompChoosePropSkin",
        t.verticalCenter = 0,
        t.visible = !1,
        t
    },
    i.compChangeCard_i = function() {
        var t = new crystalDuplicate.CompChangeCard;
        return this.compChangeCard = t,
        t.horizontalCenter = 0,
        t.skinName = "crystalDuplicate.CompChangeCardsOptionSkin",
        t.verticalCenter = 0,
        t.visible = !1,
        t
    },
    i.myChangeCardPos_i = function() {
        var t = new eui.Group;
        return this.myChangeCardPos = t,
        t.horizontalCenter = -99,
        t.y = 260,
        t
    },
    i.otherChangeCardPos_i = function() {
        var t = new eui.Group;
        return this.otherChangeCardPos = t,
        t.horizontalCenter = 19,
        t.y = 260,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/panel/CardRedayPanelSkin.exml"] = window.crystalDuplicate.CardRedayPanelSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bgLine", "txt_aaa", "texture_123ka", "btnStart", "btnbg", "img_ppsj", "txt_tm", "txtLabel", "btnCancel", "start", "img_itemNumBg2", "img_itemNumBg", "itemIcon_0", "numTx_0", "itemIcon_1", "numTx_1", "gr_numTx", "btnHelp", "btnClose", "line", "group_close"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this._Image1_i(), this.bgLine_i(), this.txt_aaa_i(), this.texture_123ka_i(), this.btnStart_i(), this.start_i(), this.gr_numTx_i(), this.group_close_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.bottom = 0,
        t.left = 0,
        t.right = 0,
        t.source = "crystalDuplicate_mainView_BG_jpg",
        t.top = 0,
        t.visible = !0,
        t
    },
    i.bgLine_i = function() {
        var t = new eui.Image;
        return this.bgLine = t,
        t.height = 60,
        t.left = 11,
        t.right = 10,
        t.source = "card_reday_panel_bgLine_png",
        t.y = 574,
        t
    },
    i.txt_aaa_i = function() {
        var t = new eui.Label;
        return this.txt_aaa = t,
        t.horizontalCenter = 7,
        t.size = 18,
        t.text = "本周领取晶粹已达上限，参与挑战无法获得更多晶粹！",
        t.textColor = 16777215,
        t.y = 594,
        t
    },
    i.texture_123ka_i = function() {
        var t = new eui.Image;
        return this.texture_123ka = t,
        t.height = 60,
        t.left = 11,
        t.right = 10,
        t.source = "card_reday_panel_texture_123ka_png",
        t.y = 290,
        t
    },
    i.btnStart_i = function() {
        var t = new eui.Image;
        return this.btnStart = t,
        t.height = 213,
        t.source = "card_reday_panel_btnStart_png",
        t.visible = !0,
        t.width = 197,
        t.x = 470,
        t.y = 219,
        t
    },
    i.start_i = function() {
        var t = new eui.Group;
        return this.start = t,
        t.height = 243,
        t.visible = !0,
        t.width = 230,
        t.x = 453,
        t.y = 205,
        t.elementsContent = [this.btnbg_i(), this.img_ppsj_i(), this.txt_tm_i(), this.btnCancel_i()],
        t
    },
    i.btnbg_i = function() {
        var t = new eui.Image;
        return this.btnbg = t,
        t.height = 230,
        t.source = "card_reday_panel_btnbg_png",
        t.width = 230,
        t.x = 0,
        t.y = 0,
        t
    },
    i.img_ppsj_i = function() {
        var t = new eui.Image;
        return this.img_ppsj = t,
        t.height = 31,
        t.source = "card_reday_panel_img_ppsj_png",
        t.width = 101,
        t.x = 64,
        t.y = 89,
        t
    },
    i.txt_tm_i = function() {
        var t = new eui.Label;
        return this.txt_tm = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.horizontalCenter = 0,
        t.size = 24,
        t.text = "000",
        t.textColor = 16777215,
        t.y = 118,
        t
    },
    i.btnCancel_i = function() {
        var t = new eui.Group;
        return this.btnCancel = t,
        t.visible = !0,
        t.x = 27,
        t.y = 191,
        t.elementsContent = [this._Image2_i(), this.txtLabel_i()],
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 52,
        t.source = "common_btn_bg_style_orange_1_png",
        t.width = 176,
        t.x = 0,
        t.y = 0,
        t
    },
    i.txtLabel_i = function() {
        var t = new eui.Label;
        return this.txtLabel = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 26,
        t.stroke = 1,
        t.strokeColor = 16642157,
        t.text = "取消匹配",
        t.textColor = 9261339,
        t.x = 34,
        t.y = 12,
        t
    },
    i.gr_numTx_i = function() {
        var t = new eui.Group;
        return this.gr_numTx = t,
        t.right = 0,
        t.top = 16,
        t.visible = !0,
        t.elementsContent = [this.img_itemNumBg2_i(), this.img_itemNumBg_i(), this.itemIcon_0_i(), this.numTx_0_i(), this.itemIcon_1_i(), this.numTx_1_i()],
        t
    },
    i.img_itemNumBg2_i = function() {
        var t = new eui.Image;
        return this.img_itemNumBg2 = t,
        t.height = 2,
        t.source = "crystalDuplicate_mainView_img_itemNumBg2_png",
        t.visible = !0,
        t.width = 281,
        t.x = 0,
        t.y = 30,
        t
    },
    i.img_itemNumBg_i = function() {
        var t = new eui.Image;
        return this.img_itemNumBg = t,
        t.height = 30,
        t.source = "crystalDuplicate_mainView_img_itemNumBg_png",
        t.visible = !0,
        t.width = 279,
        t.x = 1,
        t.y = 0,
        t
    },
    i.itemIcon_0_i = function() {
        var t = new eui.Image;
        return this.itemIcon_0 = t,
        t.height = 27,
        t.source = "crystalDuplicate_mainView_itemIcon_0_png",
        t.width = 47,
        t.x = 8,
        t.y = 0,
        t
    },
    i.numTx_0_i = function() {
        var t = new eui.Label;
        return this.numTx_0 = t,
        t.fontFamily = "黑体",
        t.size = 18,
        t.text = "000",
        t.textColor = 7057391,
        t.x = 71,
        t.y = 8,
        t
    },
    i.itemIcon_1_i = function() {
        var t = new eui.Image;
        return this.itemIcon_1 = t,
        t.height = 27,
        t.source = "crystalDuplicate_mainView_itemIcon_0_png",
        t.width = 47,
        t.x = 144,
        t.y = 0,
        t
    },
    i.numTx_1_i = function() {
        var t = new eui.Label;
        return this.numTx_1 = t,
        t.fontFamily = "黑体",
        t.size = 18,
        t.text = "000",
        t.textColor = 7057391,
        t.x = 208,
        t.y = 8,
        t
    },
    i.group_close_i = function() {
        var t = new eui.Group;
        return this.group_close = t,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this.btnHelp_i(), this.btnClose_i(), this.line_i()],
        t
    },
    i.btnHelp_i = function() {
        var t = new eui.Image;
        return this.btnHelp = t,
        t.height = 44,
        t.source = "card_reday_panel_btnHelp_png",
        t.width = 41,
        t.x = 106,
        t.y = 2,
        t
    },
    i.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.height = 48,
        t.source = "crystalDuplicate_mainView_imge_close_btn_png",
        t.width = 96,
        t.x = 0,
        t.y = 0,
        t
    },
    i.line_i = function() {
        var t = new eui.Image;
        return this.line = t,
        t.height = 48,
        t.source = "card_reday_panel_line_png",
        t.visible = !0,
        t.width = 2,
        t.x = 94,
        t.y = 0,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/panel/CrystalDuplicateLv0ViewSkin.exml"] = window.crystalDuplicate.CrystalduplicateLv0ViewSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["BG", "img_down_bg", "img_addNum_bg", "tx_weeklyAddNumTx", "img_fangshou_btn", "tx_fangshoulog", "btnNotes", "img_continuityFail_bg", "tx_continuityFail", "img_failPiece_1", "img_failPiece_0", "continuityFail", "progress_reward", "img_winPiece_7", "img_winPiece_6", "img_winPiece_5", "img_winPiece_4", "img_winPiece_3", "img_winPiece_2", "img_winPiece_1", "img_winPiece_0", "tx_addWinReward_bg", "tx_addWinReward", "reward0", "reward1", "reward2", "reward3", "addWinStates", "img_fight_bg", "img_lock_team_bg", "tx_lock_team", "tx_reSetNum", "btnRef", "img_team_lock", "lock", "imge_item_bg", "tx_item_num", "imge_buy_btn", "top", "img_close_btn_bg_2", "img_close_btn_bg_1", "img_close_btn", "enemy0", "enemy1", "enemy2", "enemy3"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.BG_i(), this.img_down_bg_i(), this._Group2_i(), this.img_fight_bg_i(), this.lock_i(), this.top_i(), this.img_close_btn_bg_2_i(), this.img_close_btn_bg_1_i(), this.img_close_btn_i(), this._Group3_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.BG_i = function() {
        var t = new eui.Image;
        return this.BG = t,
        t.height = 640,
        t.left = 0,
        t.right = 0,
        t.source = "crystalDuplicate_mainView_BG_jpg",
        t.y = 0,
        t
    },
    i.img_down_bg_i = function() {
        var t = new eui.Image;
        return this.img_down_bg = t,
        t.height = 130,
        t.left = 57,
        t.right = 56,
        t.source = "crystalDuplicate_Lv0_view_img_down_bg_png",
        t.visible = !0,
        t.y = 503,
        t
    },
    i._Group2_i = function() {
        var t = new eui.Group;
        return t.horizontalCenter = .5,
        t.visible = !0,
        t.y = 503,
        t.elementsContent = [this._Group1_i(), this.btnNotes_i(), this.continuityFail_i(), this.addWinStates_i()],
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.visible = !0,
        t.x = 685,
        t.y = 85,
        t.elementsContent = [this.img_addNum_bg_i(), this.tx_weeklyAddNumTx_i()],
        t
    },
    i.img_addNum_bg_i = function() {
        var t = new eui.Image;
        return this.img_addNum_bg = t,
        t.height = 30,
        t.source = "crystalDuplicate_Lv0_view_img_addNum_bg_png",
        t.width = 280,
        t.x = 0,
        t.y = 0,
        t
    },
    i.tx_weeklyAddNumTx_i = function() {
        var t = new eui.Label;
        return this.tx_weeklyAddNumTx = t,
        t.fontFamily = "黑体",
        t.size = 18,
        t.text = "本周累积抵御：0000场突袭",
        t.textColor = 16777215,
        t.x = 16,
        t.y = 5,
        t
    },
    i.btnNotes_i = function() {
        var t = new eui.Group;
        return this.btnNotes = t,
        t.height = 42,
        t.visible = !0,
        t.width = 122,
        t.x = 935,
        t.y = 75,
        t.elementsContent = [this.img_fangshou_btn_i(), this.tx_fangshoulog_i()],
        t
    },
    i.img_fangshou_btn_i = function() {
        var t = new eui.Image;
        return this.img_fangshou_btn = t,
        t.height = 42,
        t.source = "crystalDuplicate_Lv0_view_img_fangshou_btn_png",
        t.width = 122,
        t.x = 0,
        t.y = 0,
        t
    },
    i.tx_fangshoulog_i = function() {
        var t = new eui.Label;
        return this.tx_fangshoulog = t,
        t.fontFamily = "黑体",
        t.size = 20,
        t.text = "防守记录",
        t.textColor = 16777215,
        t.touchEnabled = !1,
        t.x = 20,
        t.y = 10,
        t
    },
    i.continuityFail_i = function() {
        var t = new eui.Group;
        return this.continuityFail = t,
        t.visible = !0,
        t.x = 0,
        t.y = 71,
        t.elementsContent = [this.img_continuityFail_bg_i(), this.tx_continuityFail_i(), this.img_failPiece_1_i(), this.img_failPiece_0_i()],
        t
    },
    i.img_continuityFail_bg_i = function() {
        var t = new eui.Image;
        return this.img_continuityFail_bg = t,
        t.height = 30,
        t.source = "crystalDuplicate_Lv0_view_img_continuityFail_bg_png",
        t.width = 280,
        t.x = 0,
        t.y = 8,
        t
    },
    i.tx_continuityFail_i = function() {
        var t = new eui.Label;
        return this.tx_continuityFail = t,
        t.fontFamily = "黑体",
        t.size = 18,
        t.text = "连败2场则胜场清零",
        t.textColor = 16777215,
        t.x = 10,
        t.y = 13,
        t
    },
    i.img_failPiece_1_i = function() {
        var t = new eui.Image;
        return this.img_failPiece_1 = t,
        t.height = 46,
        t.source = "crystalDuplicate_Lv0_view_img_failPiece_1_png",
        t.visible = !0,
        t.width = 45,
        t.x = 225,
        t.y = 0,
        t
    },
    i.img_failPiece_0_i = function() {
        var t = new eui.Image;
        return this.img_failPiece_0 = t,
        t.height = 46,
        t.source = "crystalDuplicate_Lv0_view_img_failPiece_0_png",
        t.visible = !0,
        t.width = 45,
        t.x = 179,
        t.y = 0,
        t
    },
    i.addWinStates_i = function() {
        var t = new eui.Group;
        return this.addWinStates = t,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this.progress_reward_i(), this.img_winPiece_7_i(), this.img_winPiece_6_i(), this.img_winPiece_5_i(), this.img_winPiece_4_i(), this.img_winPiece_3_i(), this.img_winPiece_2_i(), this.img_winPiece_1_i(), this.img_winPiece_0_i(), this.tx_addWinReward_bg_i(), this.tx_addWinReward_i(), this.reward0_i(), this.reward1_i(), this.reward2_i(), this.reward3_i()],
        t
    },
    i.progress_reward_i = function() {
        var t = new eui.ProgressBar;
        return this.progress_reward = t,
        t.skinName = "crystalDuplicate.ProgressBarStyle1Skin",
        t.x = 107,
        t.y = 27,
        t
    },
    i.img_winPiece_7_i = function() {
        var t = new eui.Image;
        return this.img_winPiece_7 = t,
        t.height = 46,
        t.source = "crystalDuplicate_Lv0_view_img_failPiece_1_png",
        t.width = 45,
        t.x = 928,
        t.y = 12,
        t
    },
    i.img_winPiece_6_i = function() {
        var t = new eui.Image;
        return this.img_winPiece_6 = t,
        t.height = 46,
        t.source = "crystalDuplicate_Lv0_view_img_failPiece_0_png",
        t.width = 45,
        t.x = 849,
        t.y = 12,
        t
    },
    i.img_winPiece_5_i = function() {
        var t = new eui.Image;
        return this.img_winPiece_5 = t,
        t.height = 46,
        t.source = "crystalDuplicate_Lv0_view_img_failPiece_0_png",
        t.width = 45,
        t.x = 691,
        t.y = 12,
        t
    },
    i.img_winPiece_4_i = function() {
        var t = new eui.Image;
        return this.img_winPiece_4 = t,
        t.height = 46,
        t.source = "crystalDuplicate_Lv0_view_img_failPiece_0_png",
        t.width = 45,
        t.x = 612,
        t.y = 12,
        t
    },
    i.img_winPiece_3_i = function() {
        var t = new eui.Image;
        return this.img_winPiece_3 = t,
        t.height = 46,
        t.source = "crystalDuplicate_Lv0_view_img_failPiece_0_png",
        t.width = 45,
        t.x = 454,
        t.y = 12,
        t
    },
    i.img_winPiece_2_i = function() {
        var t = new eui.Image;
        return this.img_winPiece_2 = t,
        t.height = 46,
        t.source = "crystalDuplicate_Lv0_view_img_failPiece_0_png",
        t.width = 45,
        t.x = 374,
        t.y = 12,
        t
    },
    i.img_winPiece_1_i = function() {
        var t = new eui.Image;
        return this.img_winPiece_1 = t,
        t.height = 46,
        t.source = "crystalDuplicate_Lv0_view_img_failPiece_0_png",
        t.width = 45,
        t.x = 216,
        t.y = 12,
        t
    },
    i.img_winPiece_0_i = function() {
        var t = new eui.Image;
        return this.img_winPiece_0 = t,
        t.height = 46,
        t.source = "crystalDuplicate_Lv0_view_img_failPiece_0_png",
        t.width = 45,
        t.x = 137,
        t.y = 12,
        t
    },
    i.tx_addWinReward_bg_i = function() {
        var t = new eui.Image;
        return this.tx_addWinReward_bg = t,
        t.height = 30,
        t.source = "crystalDuplicate_Lv0_view_tx_addWinReward_bg_png",
        t.width = 94,
        t.x = 0,
        t.y = 21,
        t
    },
    i.tx_addWinReward_i = function() {
        var t = new eui.Label;
        return this.tx_addWinReward = t,
        t.fontFamily = "黑体",
        t.size = 18,
        t.text = "累胜奖励",
        t.textColor = 16777215,
        t.x = 10,
        t.y = 27,
        t
    },
    i.reward0_i = function() {
        var t = new crystalDuplicate.RewardBox;
        return this.reward0 = t,
        t.skinName = "crystalDuplicate.RewardBoxSkin",
        t.x = 289,
        t
    },
    i.reward1_i = function() {
        var t = new crystalDuplicate.RewardBox;
        return this.reward1 = t,
        t.skinName = "crystalDuplicate.RewardBoxSkin",
        t.x = 523,
        t.y = 0,
        t
    },
    i.reward2_i = function() {
        var t = new crystalDuplicate.RewardBox;
        return this.reward2 = t,
        t.skinName = "crystalDuplicate.RewardBoxSkin",
        t.x = 748,
        t.y = 0,
        t
    },
    i.reward3_i = function() {
        var t = new crystalDuplicate.RewardBox;
        return this.reward3 = t,
        t.skinName = "crystalDuplicate.RewardBoxSkin",
        t.x = 977,
        t.y = 0,
        t
    },
    i.img_fight_bg_i = function() {
        var t = new eui.Image;
        return this.img_fight_bg = t,
        t.height = 434,
        t.left = 0,
        t.right = 0,
        t.source = "crystalDuplicate_Lv0_view_img_fight_bg_png",
        t.visible = !0,
        t.y = 58,
        t
    },
    i.lock_i = function() {
        var t = new eui.Group;
        return this.lock = t,
        t.visible = !0,
        t.x = 865,
        t.y = 7,
        t.elementsContent = [this.img_lock_team_bg_i(), this.tx_lock_team_i(), this.tx_reSetNum_i(), this.btnRef_i(), this.img_team_lock_i()],
        t
    },
    i.img_lock_team_bg_i = function() {
        var t = new eui.Image;
        return this.img_lock_team_bg = t,
        t.height = 32,
        t.source = "crystalDuplicate_Lv0_view_img_lock_team_bg_png",
        t.visible = !0,
        t.width = 271,
        t.x = 0,
        t.y = 9,
        t
    },
    i.tx_lock_team_i = function() {
        var t = new eui.Label;
        return this.tx_lock_team = t,
        t.fontFamily = "黑体",
        t.size = 18,
        t.text = "锁定编队1",
        t.textColor = 7057391,
        t.x = 49,
        t.y = 15,
        t
    },
    i.tx_reSetNum_i = function() {
        var t = new eui.Label;
        return this.tx_reSetNum = t,
        t.fontFamily = "黑体",
        t.size = 18,
        t.text = "0/3",
        t.textColor = 7057391,
        t.x = 198,
        t.y = 16,
        t
    },
    i.btnRef_i = function() {
        var t = new eui.Image;
        return this.btnRef = t,
        t.height = 40,
        t.source = "crystalDuplicate_Lv0_view_img_reSet_btn_png",
        t.width = 41,
        t.x = 146,
        t.y = 3,
        t
    },
    i.img_team_lock_i = function() {
        var t = new eui.Image;
        return this.img_team_lock = t,
        t.height = 45,
        t.source = "crystalDuplicate_Lv0_view_img_lock_png",
        t.visible = !0,
        t.width = 38,
        t.x = 8,
        t.y = 0,
        t
    },
    i.top_i = function() {
        var t = new eui.Group;
        return this.top = t,
        t.x = 105,
        t.y = 12,
        t.elementsContent = [this.imge_item_bg_i(), this._Image1_i(), this.tx_item_num_i(), this.imge_buy_btn_i()],
        t
    },
    i.imge_item_bg_i = function() {
        var t = new eui.Image;
        return this.imge_item_bg = t,
        t.height = 30,
        t.source = "crystalDuplicate_Lv0_view_imge_item_bg_png",
        t.width = 160,
        t.x = 0,
        t.y = 4,
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 27,
        t.width = 47,
        t.x = 5,
        t.y = 4,
        t
    },
    i.tx_item_num_i = function() {
        var t = new eui.Label;
        return this.tx_item_num = t,
        t.fontFamily = "黑体",
        t.size = 18,
        t.text = "000",
        t.textColor = 7057391,
        t.x = 65,
        t.y = 12,
        t
    },
    i.imge_buy_btn_i = function() {
        var t = new eui.Image;
        return this.imge_buy_btn = t,
        t.height = 34,
        t.source = "crystalDuplicate_Lv0_view_imge_buy_btn_png",
        t.visible = !0,
        t.width = 34,
        t.x = 113,
        t.y = 0,
        t
    },
    i.img_close_btn_bg_2_i = function() {
        var t = new eui.Image;
        return this.img_close_btn_bg_2 = t,
        t.height = 48,
        t.source = "crystalDuplicate_Lv0_view_img_close_btn_bg_2_png",
        t.visible = !1,
        t.width = 96,
        t.x = 0,
        t.y = 0,
        t
    },
    i.img_close_btn_bg_1_i = function() {
        var t = new eui.Image;
        return this.img_close_btn_bg_1 = t,
        t.height = 48,
        t.source = "crystalDuplicate_Lv0_view_img_close_btn_bg_1_png",
        t.width = 2,
        t.x = 94,
        t.y = 0,
        t
    },
    i.img_close_btn_i = function() {
        var t = new eui.Image;
        return this.img_close_btn = t,
        t.source = "common_close_2_png",
        t
    },
    i._Group3_i = function() {
        var t = new eui.Group;
        return t.horizontalCenter = -8,
        t.y = 73,
        t.layout = this._VerticalLayout1_i(),
        t.elementsContent = [this.enemy0_i(), this.enemy1_i(), this.enemy2_i(), this.enemy3_i()],
        t
    },
    i._VerticalLayout1_i = function() {
        var t = new eui.VerticalLayout;
        return t.gap = 8,
        t
    },
    i.enemy0_i = function() {
        var t = new crystalDuplicate.EnemyTeamInfo;
        return this.enemy0 = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.skinName = "crystalDuplicate.EnemyTeamInfoSkin",
        t.x = 30,
        t.y = 36,
        t
    },
    i.enemy1_i = function() {
        var t = new crystalDuplicate.EnemyTeamInfo;
        return this.enemy1 = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.skinName = "crystalDuplicate.EnemyTeamInfoSkin",
        t.x = 40,
        t.y = 46,
        t
    },
    i.enemy2_i = function() {
        var t = new crystalDuplicate.EnemyTeamInfo;
        return this.enemy2 = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.skinName = "crystalDuplicate.EnemyTeamInfoSkin",
        t.x = 50,
        t.y = 56,
        t
    },
    i.enemy3_i = function() {
        var t = new crystalDuplicate.EnemyTeamInfo;
        return this.enemy3 = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.skinName = "crystalDuplicate.EnemyTeamInfoSkin",
        t.x = 60,
        t.y = 66,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/panel/CrystalDuplicateSelectedPetSkin.exml"] = window.crystalDuplicate.CrystalDuplicateSelectedPetSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["BG", "rb_bag", "rb_warehouse", "rb_jingyingshoucang", "texture_allow", "cz_bg", "dm_bg", "fenge_line_1", "list_cz", "list_dm", "list_page", "petBag", "list_warehouse", "scroller_warehouse", "group_warehouse", "imge_pet_none", "head_selected", "right_bg", "fenge_line_2", "team_next_bg", "txt_requireTx_bg", "imge_readly_btn", "txtLabel", "btn_readly", "txt_requireTx", "txt_rlue", "team_icon", "teams_list", "scroller_teams", "right_selected", "editable_search", "btnSearch", "lab_find_attr", "icon_attr", "btnSelectdAttr", "group_petType", "lab_select_sort", "btn_sort", "group_sort", "selectAttributePos", "selectSortPos", "searchComp", "grp_main", "up_bg", "title", "imgbtn_back", "top"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.BG_i(), this._Group5_i(), this.top_i()]
    }
    __extends(e, t);
    var i = function(t) {
        function e() {
            t.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i(), this._Label1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Label1", "textColor", 6991854)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "common_tab_down_bg_png"), new eui.SetProperty("_Label1", "textColor", 16777215)]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t.percentHeight = 100,
            t.source = "common_tab_up2_bg_png",
            t.percentWidth = 100,
            t
        },
        i._Label1_i = function() {
            var t = new eui.Label;
            return this._Label1 = t,
            t.fontFamily = "HuaKangXinZongYi",
            t.horizontalCenter = 0,
            t.size = 26,
            t.text = "精灵背包",
            t.verticalCenter = 0,
            t
        },
        e
    } (eui.Skin),
    n = function(t) {
        function e() {
            t.call(this),
            this.skinParts = [],
            this.height = 76,
            this.elementsContent = [this._Image1_i(), this._Label1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "common_tab_up2_bg_png"), new eui.SetProperty("_Label1", "textColor", 6991854)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "common_tab_down_bg_png"), new eui.SetProperty("_Label1", "textColor", 16777215)]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t.percentHeight = 100,
            t.source = "common_tab_down_bg_png",
            t.percentWidth = 100,
            t
        },
        i._Label1_i = function() {
            var t = new eui.Label;
            return this._Label1 = t,
            t.fontFamily = "HuaKangXinZongYi",
            t.horizontalCenter = 0,
            t.size = 26,
            t.text = "精灵仓库",
            t.verticalCenter = 0,
            t
        },
        e
    } (eui.Skin),
    r = function(t) {
        function e() {
            t.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i(), this._Label1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Label1", "textColor", 6991854)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "common_tab_down_bg_png"), new eui.SetProperty("_Label1", "textColor", 16777215)]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t.percentHeight = 100,
            t.source = "common_tab_up2_bg_png",
            t.percentWidth = 100,
            t
        },
        i._Label1_i = function() {
            var t = new eui.Label;
            return this._Label1 = t,
            t.fontFamily = "HuaKangXinZongYi",
            t.horizontalCenter = 0,
            t.size = 26,
            t.text = "精英收藏",
            t.verticalCenter = 0,
            t
        },
        e
    } (eui.Skin),
    a = e.prototype;
    return a.BG_i = function() {
        var t = new eui.Image;
        return this.BG = t,
        t.left = -1,
        t.right = -1,
        t.source = "crystalDuplicate_selected_BG_jpg",
        t.visible = !0,
        t.y = 0,
        t
    },
    a._Group5_i = function() {
        var t = new eui.Group;
        return t.visible = !0,
        t.percentWidth = 100,
        t.y = 46,
        t.layout = this._HorizontalLayout2_i(),
        t.elementsContent = [this._Group2_i(), this._Group4_i()],
        t
    },
    a._HorizontalLayout2_i = function() {
        var t = new eui.HorizontalLayout;
        return t.gap = 0,
        t
    },
    a._Group2_i = function() {
        var t = new eui.Group;
        return t.maxWidth = 159,
        t.scaleX = 1,
        t.scaleY = 1,
        t.visible = !0,
        t.percentWidth = 11.443599999999998,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image1_i(), this._Group1_i()],
        t
    },
    a._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 594,
        t.left = 0,
        t.right = 9,
        t.source = "crystalDuplicate_selected_left_bg_png",
        t.y = 0,
        t
    },
    a._Group1_i = function() {
        var t = new eui.Group;
        return t.percentWidth = 100,
        t.x = 0,
        t.y = 15,
        t.layout = this._VerticalLayout1_i(),
        t.elementsContent = [this.rb_bag_i(), this.rb_warehouse_i(), this.rb_jingyingshoucang_i()],
        t
    },
    a._VerticalLayout1_i = function() {
        var t = new eui.VerticalLayout;
        return t.gap = -10,
        t
    },
    a.rb_bag_i = function() {
        var t = new eui.RadioButton;
        return this.rb_bag = t,
        t.groupName = "navbar",
        t.label = "",
        t.value = "petBag",
        t.percentWidth = 100,
        t.x = 0,
        t.y = 0,
        t.skinName = i,
        t
    },
    a.rb_warehouse_i = function() {
        var t = new eui.RadioButton;
        return this.rb_warehouse = t,
        t.groupName = "navbar",
        t.value = "warehouse",
        t.percentWidth = 100,
        t.x = 0,
        t.y = 67,
        t.skinName = n,
        t
    },
    a.rb_jingyingshoucang_i = function() {
        var t = new eui.RadioButton;
        return this.rb_jingyingshoucang = t,
        t.groupName = "navbar",
        t.value = "elite",
        t.percentWidth = 100,
        t.x = 0,
        t.y = 86,
        t.skinName = r,
        t
    },
    a._Group4_i = function() {
        var t = new eui.Group;
        return t.height = 594,
        t.visible = !0,
        t.x = 130,
        t.elementsContent = [this.grp_main_i()],
        t
    },
    a.grp_main_i = function() {
        var t = new eui.Group;
        return this.grp_main = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.visible = !0,
        t.x = 18,
        t.y = 2,
        t.elementsContent = [this.texture_allow_i(), this.petBag_i(), this.group_warehouse_i(), this.imge_pet_none_i(), this.head_selected_i(), this.right_selected_i(), this.searchComp_i()],
        t
    },
    a.texture_allow_i = function() {
        var t = new eui.Image;
        return this.texture_allow = t,
        t.height = 191,
        t.source = "crystalDuplicate_selected_texture_allow_png",
        t.touchEnabled = !1,
        t.width = 238,
        t.x = 310,
        t.y = 165,
        t
    },
    a.petBag_i = function() {
        var t = new eui.Group;
        return this.petBag = t,
        t.visible = !0,
        t.width = 386,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this.cz_bg_i(), this.dm_bg_i(), this.fenge_line_1_i(), this.list_cz_i(), this.list_dm_i(), this.list_page_i()],
        t
    },
    a.cz_bg_i = function() {
        var t = new eui.Image;
        return this.cz_bg = t,
        t.height = 273,
        t.source = "crystalDuplicate_selected_cz_bg_png",
        t.width = 342,
        t.x = 0,
        t.y = 0,
        t
    },
    a.dm_bg_i = function() {
        var t = new eui.Image;
        return this.dm_bg = t,
        t.height = 273,
        t.source = "crystalDuplicate_selected_dm_bg_png",
        t.width = 342,
        t.x = 0,
        t.y = 286,
        t
    },
    a.fenge_line_1_i = function() {
        var t = new eui.Image;
        return this.fenge_line_1 = t,
        t.height = 566,
        t.source = "crystalDuplicate_selected_fenge_line_1_png",
        t.width = 369,
        t.x = -16.15,
        t.y = 3.99,
        t
    },
    a.list_cz_i = function() {
        var t = new eui.List;
        return this.list_cz = t,
        t.itemRendererSkinName = crystalDuplicate.PetIconStyle1Skin,
        t.width = 332,
        t.x = 3,
        t.y = 31,
        t.layout = this._TileLayout1_i(),
        t.dataProvider = this._ArrayCollection1_i(),
        t
    },
    a._TileLayout1_i = function() {
        var t = new eui.TileLayout;
        return t.horizontalGap = 12,
        t.orientation = "rows",
        t.paddingBottom = 5,
        t.paddingLeft = 12,
        t.paddingRight = 12,
        t.paddingTop = 5,
        t.requestedColumnCount = 3,
        t.verticalGap = 6,
        t
    },
    a._ArrayCollection1_i = function() {
        var t = new eui.ArrayCollection;
        return t.source = [this._Object1_i(), this._Object2_i(), this._Object3_i(), this._Object4_i(), this._Object5_i(), this._Object6_i()],
        t
    },
    a._Object1_i = function() {
        var t = {};
        return t
    },
    a._Object2_i = function() {
        var t = {};
        return t
    },
    a._Object3_i = function() {
        var t = {};
        return t["null"] = "",
        t
    },
    a._Object4_i = function() {
        var t = {};
        return t["null"] = "",
        t
    },
    a._Object5_i = function() {
        var t = {};
        return t["null"] = "",
        t
    },
    a._Object6_i = function() {
        var t = {};
        return t["null"] = "",
        t
    },
    a.list_dm_i = function() {
        var t = new eui.List;
        return this.list_dm = t,
        t.itemRendererSkinName = crystalDuplicate.PetIconStyle1Skin,
        t.visible = !0,
        t.width = 332,
        t.x = 3,
        t.y = 317.48,
        t.layout = this._TileLayout2_i(),
        t.dataProvider = this._ArrayCollection2_i(),
        t
    },
    a._TileLayout2_i = function() {
        var t = new eui.TileLayout;
        return t.horizontalGap = 12,
        t.orientation = "rows",
        t.paddingBottom = 5,
        t.paddingLeft = 12,
        t.paddingRight = 12,
        t.paddingTop = 5,
        t.requestedColumnCount = 3,
        t
    },
    a._ArrayCollection2_i = function() {
        var t = new eui.ArrayCollection;
        return t.source = [this._Object7_i(), this._Object8_i(), this._Object9_i(), this._Object10_i(), this._Object11_i(), this._Object12_i()],
        t
    },
    a._Object7_i = function() {
        var t = {};
        return t
    },
    a._Object8_i = function() {
        var t = {};
        return t
    },
    a._Object9_i = function() {
        var t = {};
        return t["null"] = "",
        t
    },
    a._Object10_i = function() {
        var t = {};
        return t["null"] = "",
        t
    },
    a._Object11_i = function() {
        var t = {};
        return t["null"] = "",
        t
    },
    a._Object12_i = function() {
        var t = {};
        return t["null"] = "",
        t
    },
    a.list_page_i = function() {
        var t = new eui.List;
        return this.list_page = t,
        t.horizontalCenter = 0,
        t.visible = !0,
        t.y = 558,
        t.layout = this._HorizontalLayout1_i(),
        t
    },
    a._HorizontalLayout1_i = function() {
        var t = new eui.HorizontalLayout;
        return t.gap = 30,
        t
    },
    a.group_warehouse_i = function() {
        var t = new eui.Group;
        return this.group_warehouse = t,
        t.visible = !0,
        t.width = 358,
        t.x = 5,
        t.y = 41,
        t.elementsContent = [this.scroller_warehouse_i()],
        t
    },
    a.scroller_warehouse_i = function() {
        var t = new eui.Scroller;
        return this.scroller_warehouse = t,
        t.height = 558,
        t.scaleX = 1,
        t.scaleY = 1,
        t.width = 374,
        t.viewport = this.list_warehouse_i(),
        t
    },
    a.list_warehouse_i = function() {
        var t = new eui.List;
        return this.list_warehouse = t,
        t.itemRendererSkinName = crystalDuplicate.PetIconStyle2Skin,
        t.layout = this._TileLayout3_i(),
        t.dataProvider = this._ArrayCollection3_i(),
        t
    },
    a._TileLayout3_i = function() {
        var t = new eui.TileLayout;
        return t.horizontalGap = 10,
        t.orientation = "rows",
        t.paddingBottom = 5,
        t.paddingLeft = 7,
        t.paddingTop = 5,
        t.requestedColumnCount = 3,
        t.verticalGap = 3,
        t
    },
    a._ArrayCollection3_i = function() {
        var t = new eui.ArrayCollection;
        return t.source = [this._Object13_i(), this._Object14_i(), this._Object15_i(), this._Object16_i(), this._Object17_i(), this._Object18_i(), this._Object19_i(), this._Object20_i(), this._Object21_i(), this._Object22_i(), this._Object23_i(), this._Object24_i()],
        t
    },
    a._Object13_i = function() {
        var t = {};
        return t.test = "",
        t
    },
    a._Object14_i = function() {
        var t = {};
        return t.test = "",
        t
    },
    a._Object15_i = function() {
        var t = {};
        return t.test = "",
        t
    },
    a._Object16_i = function() {
        var t = {};
        return t.test = "",
        t
    },
    a._Object17_i = function() {
        var t = {};
        return t.test = "",
        t
    },
    a._Object18_i = function() {
        var t = {};
        return t.test = "",
        t
    },
    a._Object19_i = function() {
        var t = {};
        return t.test = "",
        t
    },
    a._Object20_i = function() {
        var t = {};
        return t.test = "",
        t
    },
    a._Object21_i = function() {
        var t = {};
        return t.test = "",
        t
    },
    a._Object22_i = function() {
        var t = {};
        return t.test = "",
        t
    },
    a._Object23_i = function() {
        var t = {};
        return t.test = "",
        t
    },
    a._Object24_i = function() {
        var t = {};
        return t.test = "",
        t
    },
    a.imge_pet_none_i = function() {
        var t = new eui.Image;
        return this.imge_pet_none = t,
        t.source = "Duplicate_selected_pet_none_png",
        t.visible = !0,
        t.x = 105.34,
        t.y = 161.31,
        t
    },
    a.head_selected_i = function() {
        var t = new eui.Image;
        return this.head_selected = t,
        t.height = 153,
        t.scale9Grid = new egret.Rectangle(15, 15, 94, 94),
        t.source = "crystalduplicateSetPets_head_selected_png",
        t.visible = !0,
        t.width = 127,
        t.x = 126,
        t.y = 282,
        t
    },
    a.right_selected_i = function() {
        var t = new eui.Group;
        return this.right_selected = t,
        t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.height = 594,
        t.width = 502.67,
        t.x = 484.33,
        t.y = -.68,
        t.elementsContent = [this.right_bg_i(), this.fenge_line_2_i(), this.team_next_bg_i(), this.txt_requireTx_bg_i(), this.btn_readly_i(), this.txt_requireTx_i(), this.txt_rlue_i(), this.team_icon_i(), this.scroller_teams_i()],
        t
    },
    a.right_bg_i = function() {
        var t = new eui.Image;
        return this.right_bg = t,
        t.height = 518,
        t.source = "crystalDuplicate_selected_right_bg_png",
        t.visible = !0,
        t.width = 484,
        t.x = 9.34,
        t.y = 11.99,
        t
    },
    a.fenge_line_2_i = function() {
        var t = new eui.Image;
        return this.fenge_line_2 = t,
        t.height = 544,
        t.source = "crystalDuplicate_selected_fenge_line_2_png",
        t.width = 506,
        t.x = 0,
        t.y = 0,
        t
    },
    a.team_next_bg_i = function() {
        var t = new eui.Image;
        return this.team_next_bg = t,
        t.height = 243,
        t.source = "crystalDuplicate_selected_team_next_bg_png",
        t.visible = !0,
        t.width = 480,
        t.x = 10.66,
        t.y = 285.31,
        t
    },
    a.txt_requireTx_bg_i = function() {
        var t = new eui.Image;
        return this.txt_requireTx_bg = t,
        t.height = 30,
        t.source = "crystalDuplicate_selected_txt_requireTx_bg_png",
        t.width = 280,
        t.x = 132.02,
        t.y = 553.33,
        t
    },
    a.btn_readly_i = function() {
        var t = new eui.Group;
        return this.btn_readly = t,
        t.visible = !0,
        t.x = 308.01,
        t.y = 534.66,
        t.elementsContent = [this.imge_readly_btn_i(), this.txtLabel_i()],
        t
    },
    a.imge_readly_btn_i = function() {
        var t = new eui.Image;
        return this.imge_readly_btn = t,
        t.height = 52,
        t.source = "common_btn_bg_style_orange_1_png",
        t.width = 176,
        t.x = 0,
        t.y = 0,
        t
    },
    a.txtLabel_i = function() {
        var t = new eui.Label;
        return this.txtLabel = t,
        t.fontFamily = "黑体",
        t.size = 26,
        t.text = "准备好了",
        t.textColor = 9261339,
        t.x = 37.32,
        t.y = 10.66,
        t
    },
    a.txt_requireTx_i = function() {
        var t = new eui.Label;
        return this.txt_requireTx = t,
        t.fontFamily = "黑体",
        t.size = 18,
        t.text = "需要上场12只精灵",
        t.textColor = 16777215,
        t.x = 149.34,
        t.y = 559.98,
        t
    },
    a.txt_rlue_i = function() {
        var t = new eui.Label;
        return this.txt_rlue = t,
        t.fontFamily = "黑体",
        t.size = 18,
        t.text = "本周主场规则：一二三四五六七八九十一二",
        t.textColor = 4682188,
        t.x = 42,
        t.y = 19,
        t
    },
    a.team_icon_i = function() {
        var t = new eui.Image;
        return this.team_icon = t,
        t.height = 24,
        t.source = "crystalDuplicate_selected_team_icon_png",
        t.width = 24,
        t.x = 17,
        t.y = 16,
        t
    },
    a.scroller_teams_i = function() {
        var t = new eui.Scroller;
        return this.scroller_teams = t,
        t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.height = 484,
        t.width = 478,
        t.x = 13,
        t.y = 44,
        t.viewport = this._Group3_i(),
        t
    },
    a._Group3_i = function() {
        var t = new eui.Group;
        return t.elementsContent = [this.teams_list_i()],
        t
    },
    a.teams_list_i = function() {
        var t = new eui.List;
        return this.teams_list = t,
        t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.height = 483,
        t.itemRendererSkinName = crystalDuplicate.TeamPetIconsItem,
        t.visible = !0,
        t.width = 477,
        t.x = 0,
        t.y = 0,
        t.layout = this._VerticalLayout2_i(),
        t.dataProvider = this._ArrayCollection4_i(),
        t
    },
    a._VerticalLayout2_i = function() {
        var t = new eui.VerticalLayout;
        return t.gap = 0,
        t
    },
    a._ArrayCollection4_i = function() {
        var t = new eui.ArrayCollection;
        return t.source = [this._Object25_i(), this._Object26_i()],
        t
    },
    a._Object25_i = function() {
        var t = {};
        return t
    },
    a._Object26_i = function() {
        var t = {};
        return t
    },
    a.searchComp_i = function() {
        var t = new eui.Group;
        return this.searchComp = t,
        t.visible = !0,
        t.x = 12,
        t.y = 2,
        t.elementsContent = [this._Image2_i(), this.editable_search_i(), this.btnSearch_i(), this.group_petType_i(), this.group_sort_i(), this.selectAttributePos_i(), this.selectSortPos_i()],
        t
    },
    a._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 40,
        t.source = "crystalduplicate_texture_001_png",
        t.width = 115,
        t.x = 0,
        t.y = 0,
        t
    },
    a.editable_search_i = function() {
        var t = new eui.EditableText;
        return this.editable_search = t,
        t.prompt = "输入名称",
        t.size = 16,
        t.textColor = 13097725,
        t.x = 8,
        t.y = 12,
        t
    },
    a.btnSearch_i = function() {
        var t = new eui.Image;
        return this.btnSearch = t,
        t.height = 38,
        t.source = "crystalduplicateSetPets_btnSerach_png",
        t.width = 38,
        t.x = 76,
        t.y = 1,
        t
    },
    a.group_petType_i = function() {
        var t = new eui.Group;
        return this.group_petType = t,
        t.x = 237,
        t.y = 0,
        t.elementsContent = [this._Image3_i(), this.lab_find_attr_i(), this.icon_attr_i(), this.btnSelectdAttr_i()],
        t
    },
    a._Image3_i = function() {
        var t = new eui.Image;
        return t.height = 40,
        t.source = "crystalduplicate_texture_001_png",
        t.width = 115,
        t.x = 0,
        t.y = 0,
        t
    },
    a.lab_find_attr_i = function() {
        var t = new eui.Label;
        return this.lab_find_attr = t,
        t.size = 16,
        t.text = "光飞行",
        t.textAlign = "center",
        t.textColor = 13097725,
        t.width = 65,
        t.x = 27,
        t.y = 12,
        t
    },
    a.icon_attr_i = function() {
        var t = new eui.Image;
        return this.icon_attr = t,
        t.scaleX = .5,
        t.scaleY = .5,
        t.source = "crystalduplicateSetPets_icon_attr_png",
        t.x = 6,
        t.y = 10,
        t
    },
    a.btnSelectdAttr_i = function() {
        var t = new eui.Image;
        return this.btnSelectdAttr = t,
        t.height = 18,
        t.source = "crystalduplicateSetPets_btnSelectdAttr_png",
        t.width = 18,
        t.x = 92,
        t.y = 10,
        t
    },
    a.group_sort_i = function() {
        var t = new eui.Group;
        return this.group_sort = t,
        t.visible = !0,
        t.x = 118,
        t.y = 0,
        t.elementsContent = [this._Image4_i(), this.lab_select_sort_i(), this.btn_sort_i()],
        t
    },
    a._Image4_i = function() {
        var t = new eui.Image;
        return t.height = 40,
        t.source = "crystalduplicate_texture_001_png",
        t.width = 115,
        t.x = 0,
        t.y = 0,
        t
    },
    a.lab_select_sort_i = function() {
        var t = new eui.Label;
        return this.lab_select_sort = t,
        t.size = 16,
        t.text = "默认顺序",
        t.textColor = 13097725,
        t.x = 8,
        t.y = 11,
        t
    },
    a.btn_sort_i = function() {
        var t = new eui.Image;
        return this.btn_sort = t,
        t.height = 18,
        t.source = "crystalduplicateSetPets_img_down_png",
        t.visible = !0,
        t.width = 18,
        t.x = 90,
        t.y = 10,
        t
    },
    a.selectAttributePos_i = function() {
        var t = new eui.Group;
        return this.selectAttributePos = t,
        t.height = 0,
        t.width = 0,
        t.x = 352,
        t.y = 42,
        t
    },
    a.selectSortPos_i = function() {
        var t = new eui.Group;
        return this.selectSortPos = t,
        t.height = 0,
        t.width = 0,
        t.x = 122,
        t.y = 42,
        t
    },
    a.top_i = function() {
        var t = new eui.Group;
        return this.top = t,
        t.left = 0,
        t.right = 0,
        t.top = 0,
        t.visible = !0,
        t.elementsContent = [this.up_bg_i(), this.title_i(), this.imgbtn_back_i()],
        t
    },
    a.up_bg_i = function() {
        var t = new eui.Image;
        return this.up_bg = t,
        t.left = 0,
        t.right = 0,
        t.source = "common_top_bg_style1_png",
        t.visible = !0,
        t.y = 0,
        t
    },
    a.title_i = function() {
        var t = new eui.Image;
        return this.title = t,
        t.height = 35,
        t.source = "crystalDuplicate_selected_imge_title_png",
        t.visible = !0,
        t.width = 185,
        t.x = 112,
        t.y = 7,
        t
    },
    a.imgbtn_back_i = function() {
        var t = new eui.Image;
        return this.imgbtn_back = t,
        t.source = "common_close_2_png",
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/pop/CrystalduplicatePetinfoPopSkin.exml"] = window.crystalDuplicate.CrystalduplicatepetinfopopSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["titile_attribute", "titile_info", "title_maskequip", "lab_atk", "lab_atk_extra", "lab_satk", "lab_satk_extra", "lab_speed", "lab_speed_extra", "lab_def", "lab_def_extra", "lab_sdef", "lab_sdef_extra", "lab_hp", "lab_hp_extra", "lvl", "studay", "xingge", "lab_lvl", "lab_nature", "lab_studayValue", "hplimt", "texing", "tianfu", "lab_genius", "lab_texing", "lab_power", "img_runelock_2", "img_rune_0", "img_rune_1", "img_rune_2", "info", "btnUp", "btnDown", "pet_bg", "texture_1", "txt_name", "icon_hy", "icon_type", "pet", "grp_boss"],
        this.height = 596,
        this.width = 1091,
        this.elementsContent = [this.info_i(), this.btnUp_i(), this.btnDown_i(), this.pet_i(), this.grp_boss_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.info_i = function() {
        var t = new eui.Group;
        return this.info = t,
        t.x = 593,
        t.y = 0,
        t.elementsContent = [this._Image1_i(), this._Image2_i(), this._Image3_i(), this.titile_attribute_i(), this._Image4_i(), this._Image5_i(), this._Image6_i(), this._Image7_i(), this._Image8_i(), this._Image9_i(), this._Image10_i(), this._Image11_i(), this._Image12_i(), this._Image13_i(), this._Image14_i(), this._Image15_i(), this.titile_info_i(), this._Image16_i(), this._Image17_i(), this.title_maskequip_i(), this._Group1_i(), this._Group2_i(), this._Group3_i(), this._Image21_i(), this._Image22_i(), this._Image23_i(), this._Image24_i(), this._Image25_i(), this._Image26_i(), this._Group4_i(), this._Group5_i(), this.lab_atk_i(), this.lab_atk_extra_i(), this.lab_satk_i(), this.lab_satk_extra_i(), this.lab_speed_i(), this.lab_speed_extra_i(), this.lab_def_i(), this.lab_def_extra_i(), this.lab_sdef_i(), this.lab_sdef_extra_i(), this.lab_hp_i(), this.lab_hp_extra_i(), this._Group6_i(), this.lab_lvl_i(), this.lab_nature_i(), this.lab_studayValue_i(), this._Group7_i(), this.lab_genius_i(), this.lab_texing_i(), this.lab_power_i(), this.img_runelock_2_i(), this.img_rune_0_i(), this.img_rune_1_i(), this.img_rune_2_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 572,
        t.source = "crystalDuplicate_petInfo_pop_s9_texture_003_png",
        t.width = 498,
        t.x = 0,
        t.y = 3,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 34,
        t.source = "crystalduplicatePetinfoPop_pet_info_item_texture_line_png",
        t.width = 486,
        t.x = 6,
        t.y = 205,
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.height = 52,
        t.source = "crystalduplicatePetinfoPop_pet_info_item_texture_001_png",
        t.width = 36,
        t.x = 0,
        t.y = 196,
        t
    },
    i.titile_attribute_i = function() {
        var t = new eui.Image;
        return this.titile_attribute = t,
        t.height = 36,
        t.source = "crystalduplicatePetinfoPop_titile_attribute_png",
        t.width = 101,
        t.x = 25,
        t.y = 204,
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.height = 1,
        t.source = "crystalduplicatePetinfoPop_texture_line_1_png",
        t.width = 220,
        t.x = 31,
        t.y = 318,
        t
    },
    i._Image5_i = function() {
        var t = new eui.Image;
        return t.height = 1,
        t.source = "crystalduplicatePetinfoPop_texture_line_1_png",
        t.width = 220,
        t.x = 31,
        t.y = 282,
        t
    },
    i._Image6_i = function() {
        var t = new eui.Image;
        return t.height = 1,
        t.source = "crystalduplicatePetinfoPop_texture_line_1_png",
        t.width = 220,
        t.x = 261,
        t.y = 282,
        t
    },
    i._Image7_i = function() {
        var t = new eui.Image;
        return t.height = 1,
        t.source = "crystalduplicatePetinfoPop_texture_line_1_png",
        t.width = 220,
        t.x = 261,
        t.y = 318,
        t
    },
    i._Image8_i = function() {
        var t = new eui.Image;
        return t.height = 34,
        t.source = "crystalduplicatePetinfoPop_texture_001_png",
        t.width = 228,
        t.x = 17,
        t.y = 57,
        t
    },
    i._Image9_i = function() {
        var t = new eui.Image;
        return t.height = 34,
        t.source = "crystalduplicatePetinfoPop_texture_001_png",
        t.width = 228,
        t.x = 17,
        t.y = 103,
        t
    },
    i._Image10_i = function() {
        var t = new eui.Image;
        return t.height = 34,
        t.source = "crystalduplicatePetinfoPop_texture_001_png",
        t.width = 228,
        t.x = 17,
        t.y = 149,
        t
    },
    i._Image11_i = function() {
        var t = new eui.Image;
        return t.height = 34,
        t.source = "crystalduplicatePetinfoPop_texture_001_png",
        t.width = 228,
        t.x = 253,
        t.y = 57,
        t
    },
    i._Image12_i = function() {
        var t = new eui.Image;
        return t.height = 34,
        t.source = "crystalduplicatePetinfoPop_texture_001_png",
        t.width = 228,
        t.x = 253,
        t.y = 103,
        t
    },
    i._Image13_i = function() {
        var t = new eui.Image;
        return t.height = 34,
        t.source = "crystalduplicatePetinfoPop_texture_001_png",
        t.width = 228,
        t.x = 253,
        t.y = 149,
        t
    },
    i._Image14_i = function() {
        var t = new eui.Image;
        return t.height = 34,
        t.source = "crystalduplicatePetinfoPop_pet_info_item_texture_line_png",
        t.width = 486,
        t.x = 6,
        t.y = 9,
        t
    },
    i._Image15_i = function() {
        var t = new eui.Image;
        return t.height = 52,
        t.source = "crystalduplicatePetinfoPop_pet_info_item_texture_001_png",
        t.width = 36,
        t.x = 0,
        t.y = 0,
        t
    },
    i.titile_info_i = function() {
        var t = new eui.Image;
        return this.titile_info = t,
        t.height = 36,
        t.source = "crystalduplicatePetinfoPop_titile_info_png",
        t.width = 101,
        t.x = 25,
        t.y = 8,
        t
    },
    i._Image16_i = function() {
        var t = new eui.Image;
        return t.height = 190,
        t.source = "crystalduplicatePetinfoPop_pet_info_item_texture_line_png",
        t.visible = !0,
        t.width = 486,
        t.x = 6,
        t.y = 373,
        t
    },
    i._Image17_i = function() {
        var t = new eui.Image;
        return t.height = 52,
        t.source = "crystalduplicatePetinfoPop_pet_info_item_texture_001_png",
        t.width = 36,
        t.x = 0,
        t.y = 364,
        t
    },
    i.title_maskequip_i = function() {
        var t = new eui.Image;
        return this.title_maskequip = t,
        t.height = 36,
        t.source = "crystalduplicatePetinfoPop_title_maskequip_png",
        t.width = 101,
        t.x = 25,
        t.y = 372,
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.x = 85,
        t.y = 419,
        t.elementsContent = [this._Image18_i()],
        t
    },
    i._Image18_i = function() {
        var t = new eui.Image;
        return t.height = 80,
        t.source = "common_icon_bg_style_1_png",
        t.width = 81,
        t.y = 0,
        t
    },
    i._Group2_i = function() {
        var t = new eui.Group;
        return t.x = 209,
        t.y = 419,
        t.elementsContent = [this._Image19_i()],
        t
    },
    i._Image19_i = function() {
        var t = new eui.Image;
        return t.height = 80,
        t.source = "common_icon_bg_style_1_png",
        t.width = 81,
        t.y = 0,
        t
    },
    i._Group3_i = function() {
        var t = new eui.Group;
        return t.x = 333,
        t.y = 419,
        t.elementsContent = [this._Image20_i()],
        t
    },
    i._Image20_i = function() {
        var t = new eui.Image;
        return t.height = 80,
        t.source = "common_icon_bg_style_1_png",
        t.width = 81,
        t.y = 0,
        t
    },
    i._Image21_i = function() {
        var t = new eui.Image;
        return t.height = 24,
        t.source = "crystalduplicatePetinfoPop_texture_star_png",
        t.width = 25,
        t.x = 159,
        t.y = 254,
        t
    },
    i._Image22_i = function() {
        var t = new eui.Image;
        return t.height = 24,
        t.source = "crystalduplicatePetinfoPop_texture_star_png",
        t.width = 25,
        t.x = 159,
        t.y = 290,
        t
    },
    i._Image23_i = function() {
        var t = new eui.Image;
        return t.height = 24,
        t.source = "crystalduplicatePetinfoPop_texture_star_png",
        t.width = 25,
        t.x = 159,
        t.y = 326,
        t
    },
    i._Image24_i = function() {
        var t = new eui.Image;
        return t.height = 24,
        t.source = "crystalduplicatePetinfoPop_texture_star_png",
        t.width = 25,
        t.x = 395,
        t.y = 254,
        t
    },
    i._Image25_i = function() {
        var t = new eui.Image;
        return t.height = 24,
        t.source = "crystalduplicatePetinfoPop_texture_star_png",
        t.width = 25,
        t.x = 395,
        t.y = 290,
        t
    },
    i._Image26_i = function() {
        var t = new eui.Image;
        return t.height = 24,
        t.source = "crystalduplicatePetinfoPop_texture_star_png",
        t.width = 25,
        t.x = 395,
        t.y = 326,
        t
    },
    i._Group4_i = function() {
        var t = new eui.Group;
        return t.x = 26,
        t.y = 257,
        t.elementsContent = [this._Label1_i(), this._Label2_i(), this._Label3_i(), this._Image27_i(), this._Image28_i(), this._Image29_i()],
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.size = 20,
        t.text = "攻击",
        t.textColor = 16777215,
        t.x = 32,
        t.y = 0,
        t
    },
    i._Label2_i = function() {
        var t = new eui.Label;
        return t.size = 20,
        t.text = "速度",
        t.textColor = 16777215,
        t.x = 32,
        t.y = 72,
        t
    },
    i._Label3_i = function() {
        var t = new eui.Label;
        return t.size = 20,
        t.text = "特攻",
        t.textColor = 16777215,
        t.x = 31,
        t.y = 36,
        t
    },
    i._Image27_i = function() {
        var t = new eui.Image;
        return t.height = 21,
        t.source = "common_atk_png",
        t.width = 21,
        t.x = 1,
        t.y = 0,
        t
    },
    i._Image28_i = function() {
        var t = new eui.Image;
        return t.height = 23,
        t.source = "common_satk_png",
        t.width = 20,
        t.x = 1,
        t.y = 33,
        t
    },
    i._Image29_i = function() {
        var t = new eui.Image;
        return t.height = 20,
        t.source = "common_speed_png",
        t.width = 23,
        t.x = 0,
        t.y = 71,
        t
    },
    i._Group5_i = function() {
        var t = new eui.Group;
        return t.x = 262,
        t.y = 255,
        t.elementsContent = [this._Label4_i(), this._Label5_i(), this._Label6_i(), this._Image30_i(), this._Image31_i(), this._Image32_i()],
        t
    },
    i._Label4_i = function() {
        var t = new eui.Label;
        return t.size = 20,
        t.text = "防御",
        t.textColor = 16777215,
        t.x = 33,
        t.y = 2,
        t
    },
    i._Label5_i = function() {
        var t = new eui.Label;
        return t.size = 20,
        t.text = "体力",
        t.textColor = 16777215,
        t.x = 32,
        t.y = 74,
        t
    },
    i._Label6_i = function() {
        var t = new eui.Label;
        return t.size = 20,
        t.text = "特防",
        t.textColor = 16777215,
        t.x = 31,
        t.y = 38,
        t
    },
    i._Image30_i = function() {
        var t = new eui.Image;
        return t.height = 21,
        t.source = "common_def_png",
        t.width = 18,
        t.x = 2,
        t.y = 0,
        t
    },
    i._Image31_i = function() {
        var t = new eui.Image;
        return t.height = 22,
        t.source = "common_sdef_png",
        t.width = 18,
        t.x = 2,
        t.y = 35,
        t
    },
    i._Image32_i = function() {
        var t = new eui.Image;
        return t.height = 22,
        t.source = "common_hp_png",
        t.width = 22,
        t.x = 0,
        t.y = 72,
        t
    },
    i.lab_atk_i = function() {
        var t = new eui.Label;
        return this.lab_atk = t,
        t.size = 20,
        t.text = "100",
        t.textAlign = "right",
        t.textColor = 16777215,
        t.width = 54,
        t.x = 100,
        t.y = 258,
        t
    },
    i.lab_atk_extra_i = function() {
        var t = new eui.Label;
        return this.lab_atk_extra = t,
        t.size = 20,
        t.text = "255",
        t.textAlign = "right",
        t.textColor = 4173823,
        t.x = 187,
        t.y = 258,
        t
    },
    i.lab_satk_i = function() {
        var t = new eui.Label;
        return this.lab_satk = t,
        t.size = 20,
        t.text = "20",
        t.textAlign = "right",
        t.textColor = 16777215,
        t.width = 54,
        t.x = 100,
        t.y = 294,
        t
    },
    i.lab_satk_extra_i = function() {
        var t = new eui.Label;
        return this.lab_satk_extra = t,
        t.size = 20,
        t.text = "255",
        t.textAlign = "right",
        t.textColor = 4173823,
        t.x = 187,
        t.y = 294,
        t
    },
    i.lab_speed_i = function() {
        var t = new eui.Label;
        return this.lab_speed = t,
        t.size = 20,
        t.text = "20",
        t.textAlign = "right",
        t.textColor = 16777215,
        t.width = 54,
        t.x = 100,
        t.y = 330,
        t
    },
    i.lab_speed_extra_i = function() {
        var t = new eui.Label;
        return this.lab_speed_extra = t,
        t.size = 20,
        t.text = "255",
        t.textAlign = "right",
        t.textColor = 4173823,
        t.x = 187,
        t.y = 330,
        t
    },
    i.lab_def_i = function() {
        var t = new eui.Label;
        return this.lab_def = t,
        t.size = 20,
        t.text = "100",
        t.textAlign = "right",
        t.textColor = 16777215,
        t.width = 54,
        t.x = 336,
        t.y = 258,
        t
    },
    i.lab_def_extra_i = function() {
        var t = new eui.Label;
        return this.lab_def_extra = t,
        t.size = 20,
        t.text = "255",
        t.textAlign = "right",
        t.textColor = 4173823,
        t.x = 423,
        t.y = 258,
        t
    },
    i.lab_sdef_i = function() {
        var t = new eui.Label;
        return this.lab_sdef = t,
        t.size = 20,
        t.text = "20",
        t.textAlign = "right",
        t.textColor = 16777215,
        t.width = 54,
        t.x = 336,
        t.y = 294,
        t
    },
    i.lab_sdef_extra_i = function() {
        var t = new eui.Label;
        return this.lab_sdef_extra = t,
        t.size = 20,
        t.text = "255",
        t.textAlign = "right",
        t.textColor = 4173823,
        t.x = 423,
        t.y = 294,
        t
    },
    i.lab_hp_i = function() {
        var t = new eui.Label;
        return this.lab_hp = t,
        t.size = 20,
        t.text = "20",
        t.textAlign = "right",
        t.textColor = 16777215,
        t.width = 54,
        t.x = 336,
        t.y = 330,
        t
    },
    i.lab_hp_extra_i = function() {
        var t = new eui.Label;
        return this.lab_hp_extra = t,
        t.size = 20,
        t.text = "255",
        t.textAlign = "right",
        t.textColor = 4173823,
        t.x = 423,
        t.y = 330,
        t
    },
    i._Group6_i = function() {
        var t = new eui.Group;
        return t.x = 24,
        t.y = 63,
        t.elementsContent = [this.lvl_i(), this.studay_i(), this.xingge_i(), this._Label7_i(), this._Label8_i(), this._Label9_i()],
        t
    },
    i.lvl_i = function() {
        var t = new eui.Image;
        return this.lvl = t,
        t.height = 23,
        t.source = "crystalduplicatePetinfoPop_lvl_png",
        t.width = 22,
        t.x = 2,
        t.y = 0,
        t
    },
    i.studay_i = function() {
        var t = new eui.Image;
        return this.studay = t,
        t.height = 22,
        t.source = "crystalduplicatePetinfoPop_studay_png",
        t.width = 26,
        t.x = 0,
        t.y = 46,
        t
    },
    i.xingge_i = function() {
        var t = new eui.Image;
        return this.xingge = t,
        t.height = 21,
        t.source = "crystalduplicatePetinfoPop_xingge_png",
        t.width = 24,
        t.x = 2,
        t.y = 93,
        t
    },
    i._Label7_i = function() {
        var t = new eui.Label;
        return t.size = 20,
        t.text = "等级",
        t.textColor = 16777215,
        t.x = 34,
        t.y = 1,
        t
    },
    i._Label8_i = function() {
        var t = new eui.Label;
        return t.size = 20,
        t.text = "性格",
        t.textColor = 16777215,
        t.x = 34,
        t.y = 94,
        t
    },
    i._Label9_i = function() {
        var t = new eui.Label;
        return t.size = 20,
        t.text = "学习力",
        t.textColor = 16777215,
        t.x = 34,
        t.y = 48,
        t
    },
    i.lab_lvl_i = function() {
        var t = new eui.Label;
        return this.lab_lvl = t,
        t.size = 20,
        t.text = "100",
        t.textAlign = "right",
        t.textColor = 16777215,
        t.width = 54,
        t.x = 143,
        t.y = 66,
        t
    },
    i.lab_nature_i = function() {
        var t = new eui.Label;
        return this.lab_nature = t,
        t.size = 20,
        t.text = "开朗",
        t.textAlign = "right",
        t.textColor = 16777215,
        t.width = 60,
        t.x = 138,
        t.y = 157,
        t
    },
    i.lab_studayValue_i = function() {
        var t = new eui.Label;
        return this.lab_studayValue = t,
        t.size = 20,
        t.text = "510",
        t.textAlign = "right",
        t.textColor = 16777215,
        t.width = 54,
        t.x = 143,
        t.y = 112,
        t
    },
    i._Group7_i = function() {
        var t = new eui.Group;
        return t.x = 260,
        t.y = 61,
        t.elementsContent = [this._Label10_i(), this._Label11_i(), this._Label12_i(), this.hplimt_i(), this.texing_i(), this.tianfu_i()],
        t
    },
    i._Label10_i = function() {
        var t = new eui.Label;
        return t.size = 20,
        t.text = "体力上限",
        t.textColor = 16777215,
        t.x = 34,
        t.y = 50,
        t
    },
    i._Label11_i = function() {
        var t = new eui.Label;
        return t.size = 20,
        t.text = "天赋",
        t.textColor = 16777215,
        t.x = 34,
        t.y = 4,
        t
    },
    i._Label12_i = function() {
        var t = new eui.Label;
        return t.size = 20,
        t.text = "特性",
        t.textColor = 16777215,
        t.x = 33,
        t.y = 97,
        t
    },
    i.hplimt_i = function() {
        var t = new eui.Image;
        return this.hplimt = t,
        t.height = 22,
        t.source = "crystalduplicatePetinfoPop_hplimt_png",
        t.width = 24,
        t.x = 1,
        t.y = 48,
        t
    },
    i.texing_i = function() {
        var t = new eui.Image;
        return this.texing = t,
        t.height = 22,
        t.source = "crystalduplicatePetinfoPop_texing_png",
        t.width = 26,
        t.x = 0,
        t.y = 95,
        t
    },
    i.tianfu_i = function() {
        var t = new eui.Image;
        return this.tianfu = t,
        t.height = 26,
        t.source = "crystalduplicatePetinfoPop_tianfu_png",
        t.width = 26,
        t.x = 0,
        t.y = 0,
        t
    },
    i.lab_genius_i = function() {
        var t = new eui.Label;
        return this.lab_genius = t,
        t.size = 20,
        t.text = "31",
        t.textAlign = "right",
        t.textColor = 16777215,
        t.width = 43,
        t.x = 391,
        t.y = 66,
        t
    },
    i.lab_texing_i = function() {
        var t = new eui.Label;
        return this.lab_texing = t,
        t.size = 20,
        t.text = "顽强",
        t.textAlign = "right",
        t.textColor = 16777215,
        t.width = 80,
        t.x = 354,
        t.y = 158,
        t
    },
    i.lab_power_i = function() {
        var t = new eui.Label;
        return this.lab_power = t,
        t.size = 20,
        t.text = "20",
        t.textAlign = "right",
        t.textColor = 16777215,
        t.width = 43,
        t.x = 391,
        t.y = 112,
        t
    },
    i.img_runelock_2_i = function() {
        var t = new eui.Image;
        return this.img_runelock_2 = t,
        t.height = 44,
        t.source = "crystalduplicatePetinfoPop_img_runelock_2_png",
        t.width = 35,
        t.x = 356,
        t.y = 437,
        t
    },
    i.img_rune_0_i = function() {
        var t = new eui.Image;
        return this.img_rune_0 = t,
        t.height = 53,
        t.width = 55,
        t.x = 98,
        t.y = 433,
        t
    },
    i.img_rune_1_i = function() {
        var t = new eui.Image;
        return this.img_rune_1 = t,
        t.height = 53,
        t.width = 55,
        t.x = 222,
        t.y = 430,
        t
    },
    i.img_rune_2_i = function() {
        var t = new eui.Image;
        return this.img_rune_2 = t,
        t.height = 53,
        t.width = 55,
        t.x = 348,
        t.y = 430,
        t
    },
    i.btnUp_i = function() {
        var t = new eui.Image;
        return this.btnUp = t,
        t.height = 40,
        t.source = "crystalDuplicate_petInfo_pop_imgBtn_sz_png",
        t.width = 110,
        t.x = 787,
        t.y = 518,
        t
    },
    i.btnDown_i = function() {
        var t = new eui.Image;
        return this.btnDown = t,
        t.height = 40,
        t.source = "crystalDuplicate_petInfo_pop_imgBtn_xz_png",
        t.width = 110,
        t.x = 787,
        t.y = 518,
        t
    },
    i.pet_i = function() {
        var t = new eui.Group;
        return this.pet = t,
        t.visible = !0,
        t.x = 0,
        t.y = 85,
        t.elementsContent = [this.pet_bg_i(), this._Group9_i()],
        t
    },
    i.pet_bg_i = function() {
        var t = new eui.Image;
        return this.pet_bg = t,
        t.height = 511,
        t.source = "crystalduplicatePetinfoPop_pet_bg_png",
        t.visible = !0,
        t.width = 690,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Group9_i = function() {
        var t = new eui.Group;
        return t.x = 159,
        t.y = 383,
        t.elementsContent = [this.texture_1_i(), this._Group8_i()],
        t
    },
    i.texture_1_i = function() {
        var t = new eui.Image;
        return this.texture_1 = t,
        t.height = 36,
        t.source = "crystalduplicatePetinfoPop_texture_1_png",
        t.width = 376,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Group8_i = function() {
        var t = new eui.Group;
        return t.horizontalCenter = .5,
        t.y = 5,
        t.elementsContent = [this.txt_name_i(), this.icon_hy_i(), this.icon_type_i()],
        t
    },
    i.txt_name_i = function() {
        var t = new eui.Label;
        return this.txt_name = t,
        t.horizontalCenter = -2.5,
        t.size = 18,
        t.text = "精灵名字最多预留十二字符",
        t.textAlign = "center",
        t.textColor = 16773477,
        t.y = 4,
        t
    },
    i.icon_hy_i = function() {
        var t = new eui.Image;
        return this.icon_hy = t,
        t.height = 26,
        t.source = "common_pet_yin_icon_png",
        t.width = 26,
        t.x = 253,
        t.y = 0,
        t
    },
    i.icon_type_i = function() {
        var t = new eui.Image;
        return this.icon_type = t,
        t.height = 23,
        t.width = 22,
        t.x = 0,
        t.y = 2,
        t
    },
    i.grp_boss_i = function() {
        var t = new eui.Group;
        return this.grp_boss = t,
        t.x = 349,
        t.y = 434,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/pop/ResultPopSkin.exml"] = window.crystalDuplicate.ResultPopSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "btnSure", "bg_light", "title_successful", "title_failed", "compMyInfo", "compOtherInfo"],
        this.height = 470,
        this.width = 1103,
        this.elementsContent = [this.bg_i(), this.btnSure_i(), this.bg_light_i(), this.title_successful_i(), this.title_failed_i(), this.compMyInfo_i(), this.compOtherInfo_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.height = 409,
        t.source = "result_pop_bg_png",
        t.width = 1103,
        t.x = 0,
        t.y = 61,
        t
    },
    i.btnSure_i = function() {
        var t = new eui.Group;
        return this.btnSure = t,
        t.x = 491,
        t.y = 401,
        t.elementsContent = [this._Image1_i(), this._Label1_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 40,
        t.source = "common_btn_bg_style_orange_2_png",
        t.width = 120,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "HuaKangXinZongYi",
        t.size = 20,
        t.text = "确认",
        t.textColor = 8341784,
        t.x = 40,
        t.y = 10,
        t
    },
    i.bg_light_i = function() {
        var t = new eui.Image;
        return this.bg_light = t,
        t.height = 119,
        t.source = "result_pop_bg_light_png",
        t.width = 900,
        t.x = 101,
        t.y = 0,
        t
    },
    i.title_successful_i = function() {
        var t = new eui.Image;
        return this.title_successful = t,
        t.height = 92,
        t.source = "result_pop_title_successful_png",
        t.visible = !0,
        t.width = 172,
        t.x = 464,
        t.y = 13,
        t
    },
    i.title_failed_i = function() {
        var t = new eui.Image;
        return this.title_failed = t,
        t.height = 93,
        t.source = "result_pop_title_failed_png",
        t.visible = !0,
        t.width = 172,
        t.x = 465,
        t.y = 12,
        t
    },
    i.compMyInfo_i = function() {
        var t = new crystalDuplicate.ResultPlayerItem;
        return this.compMyInfo = t,
        t.skinName = "crystalDuplicate.ResultPlayerInfoSkin",
        t.x = 151,
        t.y = 132,
        t
    },
    i.compOtherInfo_i = function() {
        var t = new crystalDuplicate.ResultPlayerItem;
        return this.compOtherInfo = t,
        t.skinName = "crystalDuplicate.ResultPlayerInfoSkin",
        t.x = 151,
        t.y = 271,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/pop/SelectedTeamPopSkin.exml"] = window.crystalDuplicate.SelectedTeamPopSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["title", "btnClose", "L", "btnCancel", "btnSure", "list_team", "scroller_team"],
        this.height = 452,
        this.width = 768,
        this.elementsContent = [this.L_i(), this.btnCancel_i(), this.btnSure_i(), this.scroller_team_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.L_i = function() {
        var t = new eui.Group;
        return this.L = t,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image1_i(), this._Image2_i(), this.title_i(), this.btnClose_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 411,
        t.source = "common_pop_point_png",
        t.width = 756,
        t.x = 0,
        t.y = 41,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 42,
        t.source = "common_pop_title_medium_png",
        t.width = 748,
        t.x = 4,
        t.y = 22,
        t
    },
    i.title_i = function() {
        var t = new eui.Image;
        return this.title = t,
        t.height = 27,
        t.source = "selected_team_pop_title_png",
        t.width = 193,
        t.x = 37,
        t.y = 27,
        t
    },
    i.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.height = 56,
        t.source = "common_close_1_png",
        t.width = 54,
        t.x = 714,
        t.y = 0,
        t
    },
    i.btnCancel_i = function() {
        var t = new eui.Group;
        return this.btnCancel = t,
        t.x = 227,
        t.y = 394,
        t.elementsContent = [this._Image3_i(), this._Label1_i()],
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.height = 42,
        t.source = "common_btn_bg_style_blue_2_png",
        t.width = 122,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "HuaKangXinZongYi",
        t.size = 20,
        t.text = "取消",
        t.textColor = 16777215,
        t.x = 41,
        t.y = 10,
        t
    },
    i.btnSure_i = function() {
        var t = new eui.Group;
        return this.btnSure = t,
        t.x = 408,
        t.y = 394,
        t.elementsContent = [this._Image4_i(), this._Label2_i()],
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.height = 40,
        t.source = "common_btn_bg_style_orange_2_png",
        t.width = 120,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Label2_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "HuaKangXinZongYi",
        t.size = 20,
        t.text = "确认",
        t.textColor = 8341784,
        t.x = 40,
        t.y = 10,
        t
    },
    i.scroller_team_i = function() {
        var t = new eui.Scroller;
        return this.scroller_team = t,
        t.height = 317,
        t.width = 746,
        t.x = 5,
        t.y = 65,
        t.viewport = this._Group1_i(),
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.elementsContent = [this.list_team_i()],
        t
    },
    i.list_team_i = function() {
        var t = new eui.List;
        return this.list_team = t,
        t.itemRendererSkinName = crystalDuplicate.TeamInfoSkin,
        t.width = 746,
        t.layout = this._VerticalLayout1_i(),
        t.dataProvider = this._ArrayCollection1_i(),
        t
    },
    i._VerticalLayout1_i = function() {
        var t = new eui.VerticalLayout;
        return t.gap = -3,
        t
    },
    i._ArrayCollection1_i = function() {
        var t = new eui.ArrayCollection;
        return t.source = [this._Object1_i(), this._Object2_i(), this._Object3_i(), this._Object4_i(), this._Object5_i(), this._Object6_i()],
        t
    },
    i._Object1_i = function() {
        var t = {};
        return t.test = "",
        t
    },
    i._Object2_i = function() {
        var t = {};
        return t.test = "",
        t
    },
    i._Object3_i = function() {
        var t = {};
        return t.test = "",
        t
    },
    i._Object4_i = function() {
        var t = {};
        return t.test = "",
        t
    },
    i._Object5_i = function() {
        var t = {};
        return t.test = "",
        t
    },
    i._Object6_i = function() {
        var t = {};
        return t.test = "",
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/pop/WarehouseSortOptSkin.exml"] = window.crystalDuplicate.WarehouseSortOptSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["sort_bg", "rb_id_sort_down", "rb_id_sort_up", "rb_lvl_sort_down", "rb_lvl_sort_up", "rb_tm_sort_down", "rb_tm_sort_up", "grp_select_sort"],
        this.height = 150,
        this.width = 590,
        this.elementsContent = [this.grp_select_sort_i()]
    }
    __extends(e, t);
    var i = function(t) {
        function e() {
            t.call(this),
            this.skinParts = ["labelDisplay"],
            this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "crystalduplicateSetPets_id_sort_down_down_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "crystalduplicateSetPets_id_sort_down_up_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("disabled", [])]
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
            t.horizontalCenter = 0,
            t.verticalCenter = 0,
            t
        },
        e
    } (eui.Skin),
    n = function(t) {
        function e() {
            t.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "crystalduplicateSetPets_id_sort_up_down_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "crystalduplicateSetPets_id_sort_up_up_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("disabled", [])]
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
    r = function(t) {
        function e() {
            t.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "crystalduplicateSetPets_lvl_sort_down_down_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "crystalduplicateSetPets_lvl_sort_down_up_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("disabled", [])]
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
    a = function(t) {
        function e() {
            t.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "crystalduplicateSetPets_lvl_sort_up_down_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "crystalduplicateSetPets_lvl_sort_up_up_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("disabled", [])]
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
    o = function(t) {
        function e() {
            t.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "crystalduplicateSetPets_tm_sort_down_down_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "crystalduplicateSetPets_tm_sort_down_up_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("disabled", [])]
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
    s = function(t) {
        function e() {
            t.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "crystalduplicateSetPets_tm_sort_up_down_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "crystalduplicateSetPets_tm_sort_up_up_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("disabled", [])]
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
    _ = e.prototype;
    return _.grp_select_sort_i = function() {
        var t = new eui.Group;
        return this.grp_select_sort = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.visible = !0,
        t.elementsContent = [this.sort_bg_i(), this.rb_id_sort_down_i(), this.rb_id_sort_up_i(), this.rb_lvl_sort_down_i(), this.rb_lvl_sort_up_i(), this.rb_tm_sort_down_i(), this.rb_tm_sort_up_i()],
        t
    },
    _.sort_bg_i = function() {
        var t = new eui.Image;
        return this.sort_bg = t,
        t.height = 150,
        t.scale9Grid = new egret.Rectangle(2, 2, 16, 16),
        t.source = "crystalduplicate_sort_bg_png",
        t.width = 590,
        t.x = 0,
        t.y = 0,
        t
    },
    _.rb_id_sort_down_i = function() {
        var t = new eui.RadioButton;
        return this.rb_id_sort_down = t,
        t.groupName = "sortRbg",
        t.label = "",
        t.value = "id_down",
        t.x = 29,
        t.y = 17,
        t.skinName = i,
        t
    },
    _.rb_id_sort_up_i = function() {
        var t = new eui.RadioButton;
        return this.rb_id_sort_up = t,
        t.groupName = "sortRbg",
        t.value = "id_up",
        t.x = 29,
        t.y = 83,
        t.skinName = n,
        t
    },
    _.rb_lvl_sort_down_i = function() {
        var t = new eui.RadioButton;
        return this.rb_lvl_sort_down = t,
        t.groupName = "sortRbg",
        t.value = "lvl_down",
        t.x = 179,
        t.y = 17,
        t.skinName = r,
        t
    },
    _.rb_lvl_sort_up_i = function() {
        var t = new eui.RadioButton;
        return this.rb_lvl_sort_up = t,
        t.groupName = "sortRbg",
        t.value = "lvl_up",
        t.x = 179,
        t.y = 83,
        t.skinName = a,
        t
    },
    _.rb_tm_sort_down_i = function() {
        var t = new eui.RadioButton;
        return this.rb_tm_sort_down = t,
        t.groupName = "sortRbg",
        t.value = "tm_down",
        t.x = 331,
        t.y = 17,
        t.skinName = o,
        t
    },
    _.rb_tm_sort_up_i = function() {
        var t = new eui.RadioButton;
        return this.rb_tm_sort_up = t,
        t.groupName = "sortRbg",
        t.value = "tm_up",
        t.x = 331,
        t.y = 83,
        t.skinName = s,
        t
    },
    e
} (eui.Skin);