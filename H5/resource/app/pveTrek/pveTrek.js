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
pveTrek; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.skinName = t.DispatchSucessfulSkin,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this)
        },
        i.prototype.initEvents = function() {
            var e = this;
            ImageButtonUtil.add(this.btnSure,
            function() {
                e.hide(),
                t.DataMgr.Instance.dispatchEventWith(t.DataMgr.EVENT_ON_DISPATCH_COMPLETE, !1, e._customData),
                e._customData = null
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
            var t = ["伐木工", "挖矿工", "修理工"];
            this.txt_desc.text = "精灵圆满地完成了" + t[this._customData.type - 1] + "任务！"
        },
        i.prototype.destroy = function() {
            e.prototype.destroy.call(this)
        },
        i
    } (PopView);
    t.DispatchSucessfulPop = e,
    __reflect(e.prototype, "pveTrek.DispatchSucessfulPop")
} (pveTrek || (pveTrek = {}));
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
        function s(t) {
            try {
                _(n.next(t))
            } catch(e) {
                o(e)
            }
        }
        function a(t) {
            try {
                _(n["throw"](t))
            } catch(e) {
                o(e)
            }
        }
        function _(t) {
            t.done ? r(t.value) : new i(function(e) {
                e(t.value)
            }).then(s, a)
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
            if (r = 1, o && (s = o[2 & i[0] ? "return": i[0] ? "throw": "next"]) && !(s = s.call(o, i[1])).done) return s;
            switch (o = 0, s && (i = [0, s.value]), i[0]) {
            case 0:
            case 1:
                s = i;
                break;
            case 4:
                return _.label++,
                {
                    value: i[1],
                    done: !1
                };
            case 5:
                _.label++,
                o = i[1],
                i = [0];
                continue;
            case 7:
                i = _.ops.pop(),
                _.trys.pop();
                continue;
            default:
                if (s = _.trys, !(s = s.length > 0 && s[s.length - 1]) && (6 === i[0] || 2 === i[0])) {
                    _ = 0;
                    continue
                }
                if (3 === i[0] && (!s || i[1] > s[0] && i[1] < s[3])) {
                    _.label = i[1];
                    break
                }
                if (6 === i[0] && _.label < s[1]) {
                    _.label = s[1],
                    s = i;
                    break
                }
                if (s && _.label < s[2]) {
                    _.label = s[2],
                    _.ops.push(i);
                    break
                }
                s[2] && _.ops.pop(),
                _.trys.pop();
                continue
            }
            i = e.call(t, _)
        } catch(n) {
            i = [6, n],
            o = 0
        } finally {
            r = s = 0
        }
        if (5 & i[0]) throw i[1];
        return {
            value: i[0] ? i[1] : void 0,
            done: !0
        }
    }
    var r, o, s, a, _ = {
        label: 0,
        sent: function() {
            if (1 & s[0]) throw s[1];
            return s[1]
        },
        trys: [],
        ops: []
    };
    return a = {
        next: i(0),
        "throw": i(1),
        "return": i(2)
    },
    "function" == typeof Symbol && (a[Symbol.iterator] = function() {
        return this
    }),
    a
},
pveTrek; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t.USER_INFO_MIJING_ID = 110005,
            t.DAILY_ENTRY_MAX_CNT = 2,
            t._value_108140 = 0,
            t._value_18753 = 0,
            t._clientCfg = RES.getRes("cfg_client_json"),
            t._newStarekConfig = config.xml.getAnyRes("newstarek").root,
            t
        }
        return __extends(i, e),
        Object.defineProperty(i, "Instance", {
            get: function() {
                return i._instance || (i._instance = new i),
                i._instance
            },
            enumerable: !0,
            configurable: !0
        }),
        i.prototype.UpdateAllValue = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var t;
                return __generator(this,
                function(e) {
                    switch (e.label) {
                    case 0:
                        return this._updateValueFunc ? [4, this._updateValueFunc()] : [3, 2];
                    case 1:
                        e.sent(),
                        e.label = 2;
                    case 2:
                        return t = i.Instance.GetGameMainStep(),
                        t >= 3 ? [4, this.C2S_GetPetInfos()] : [3, 4];
                    case 3:
                        e.sent(),
                        e.label = 4;
                    case 4:
                        return [2, Promise.resolve()]
                    }
                })
            })
        },
        i.prototype.SetUpdateValueFunc = function(t) {
            this._updateValueFunc = t
        },
        i.prototype.ClearUpdateValueFunc = function() {
            this._updateValueFunc = null
        },
        i.prototype.SetValues = function(t) {
            var e = core.constant.ValueType;
            this._value_18753 = t(e.DAILY, 18753),
            this._value_108140 = t(e.FOREVER, 108140),
            this._value_108141 = t(e.FOREVER, 108141),
            this._value_108142 = t(e.FOREVER, 108142),
            this._value_108143 = t(e.FOREVER, 108143),
            this._value_108144 = t(e.FOREVER, 108144),
            this._value_108145 = t(e.FOREVER, 108145),
            this._value_108146 = t(e.FOREVER, 108146),
            this._value_108147 = t(e.FOREVER, 108147),
            this._value_108149 = t(e.FOREVER, 108149),
            this._value_108150 = t(e.FOREVER, 108150),
            this._value_108151 = t(e.FOREVER, 108151),
            this._value_108152 = t(e.FOREVER, 108152),
            this._value_108153 = t(e.FOREVER, 108153),
            this._value_108154 = t(e.FOREVER, 108154),
            this._value_108155 = t(e.FOREVER, 108155),
            this._value_108156 = t(e.FOREVER, 108156),
            this._value_108157 = t(e.FOREVER, 108157),
            this._value_108158 = t(e.FOREVER, 108158),
            this._value_108159 = t(e.FOREVER, 108159),
            this._value_108160 = t(e.FOREVER, 108160),
            this._value_108161 = t(e.FOREVER, 108161),
            this._value_108177 = t(e.FOREVER, 108177),
            this._value_108178 = t(e.FOREVER, 108178),
            this._value_108148 = t(e.FOREVER, 108148),
            this._value_110005 = t(e.FOREVER, 110005),
            this._value_660 = t(e.BITBUF, 660),
            this._setSeerInfo(),
            console.log("新版本星级迷航:所需值:");
            for (var i = [110005, 18753, 108177, 108178, 660, 108140, 108141, 108142, 108143, 108144, 108145, 108146, 108147, 108148, 108149, 108150, 108151, 108152, 108153, 108154, 108155, 108156, 108157, 108158, 108159, 108160, 108161], n = {},
            r = 0; r < i.length; r++) n[i[r]] = this["_value_" + i[r]];
            console.table(n)
        },
        i.prototype.initData = function(t) {
            return __awaiter(this, void 0, void 0,
            function() {
                return __generator(this,
                function(e) {
                    switch (e.label) {
                    case 0:
                        return this.SetValues(t),
                        this._value_108140 >= 3 ? [4, this.C2S_GetPetInfos()] : [3, 2];
                    case 1:
                        e.sent(),
                        e.label = 2;
                    case 2:
                        return [2, Promise.resolve()]
                    }
                })
            })
        },
        i.prototype.GetMiJIngCnt = function() {
            return this._value_110005
        },
        i.prototype.GetEntryCnt = function() {
            return this._value_18753
        },
        i.prototype.CheckHavePetBattleState = function() {
            if (this.GetGameMainStep() < 3) return ! 0;
            var t = this.GetPetAll();
            if (!t || 0 === t.length) return ! 1;
            for (var e = 0; e < t.length; e++) if (!this.GetPetDieState(t[e].idx) && !this.GetPetDisenableState(t[e].idx) && !this.GetPetDispatchState(t[e].idx)) return ! 0;
            return ! 1
        },
        i.prototype.GetPetAll = function() {
            return this._petsArry
        },
        i.prototype.GetPetInfoDataByIdx = function(t) {
            for (var e = 0; e < this._petsArry.length; e++) if (this._petsArry[e].idx === t) return this._petsArry[e];
            return null
        },
        i.prototype.SetCacheBattleArry = function(t) {
            if (0 === t.length) egret.localStorage.setItem("pve_trek_battle_arry_" + MainManager.actorID, "");
            else {
                var e = t.join("_");
                egret.localStorage.setItem("pve_trek_battle_arry_" + MainManager.actorID, e)
            }
        },
        i.prototype.GetCacheBattleArry = function() {
            var t = egret.localStorage.getItem("pve_trek_battle_arry_" + MainManager.actorID);
            if (!t) return [];
            for (var e = t.split("_").map(function(t) {
                return~~t
            }), i = [], n = this.GetPetAll(), r = 0; r < e.length; r++) {
                for (var o = e[r], s = !0, a = 0; a < n.length; a++) if (n[a].idx === o) {
                    if (this.GetPetDieState(n[a].idx)) {
                        s = !1;
                        break
                    }
                    if (this.GetPetDisenableState(n[a].idx)) {
                        s = !1;
                        break
                    }
                    if (this.GetPetDispatchState(n[a].idx)) {
                        s = !1;
                        break
                    }
                }
                s && i.push(o)
            }
            return i
        },
        i.prototype.GetPetDisenableState = function(t) {
            var e = this._value_108149;
            return BitUtil.getBit(e, t) > 0
        },
        i.prototype.GetPetDispatchState = function(t) {
            var e = this._value_108178;
            return BitUtil.getBit(e, t) > 0
        },
        i.prototype.GetPetDieState = function(t) {
            var e = this._value_108148;
            return BitUtil.getBit(e, t) > 0
        },
        i.prototype.GetDispatchHalfCntList = function() {
            for (var t = [0, 0, 0], e = this._value_108150, i = 0; 3 > i; i++) t[i] = e >> 8 * i & 255;
            return t
        },
        i.prototype.GetDispathEventTypes = function() {
            for (var t = [0, 0, 0], e = this._value_108177, i = 0; 3 > i; i++) t[i] = e >> 8 * i & 255;
            return t
        },
        i.prototype.GetDispachState = function() {
            for (var t = [0, 0, 0], e = this._value_108151, i = 0; 3 > i; i++) t[i] = e >> 8 * i & 255;
            return t
        },
        i.prototype.GetGameMainStep = function() {
            return this._value_108140
        },
        i.prototype.GetClientCfgByLevelData = function(t) {
            var e = this._clientCfg.taskItemsCfg["level" + t];
            return e
        },
        i.prototype.GetTaskConfigAll = function() {
            var t = this._newStarekConfig.task.item.map(function(t) {
                return t.id = +t.id,
                t.line = +t.line,
                t.end = +t.end,
                t.step = +t.step,
                t.task = +t.task,
                t.eventtype = +t.eventtype,
                t
            });
            return t
        },
        i.prototype.GetQuestionAllConfig = function() {
            var t = this._newStarekConfig.question.item.map(function(t) {
                return t.id = +t.id,
                t
            });
            return t
        },
        i.prototype.GetQuestionConfig = function(t) {
            for (var e = this.GetQuestionAllConfig(), i = 0; i < e.length; i++) if (e[i].id === t) return e[i];
            return null
        },
        i.prototype.GetAnswerAllConfig = function() {
            var t = this._newStarekConfig.answer.item.map(function(t) {
                return t.id = +t.id,
                t.result = +t.result,
                t
            });
            return t
        },
        i.prototype.GetAnswerConfig = function(t) {
            for (var e = this.GetAnswerAllConfig(), i = 0; i < e.length; i++) if (e[i].id === t) return e[i];
            return null
        },
        i.prototype.GetBuffAllConfig = function() {
            var t = this._newStarekConfig.buff.item.map(function(t) {
                return t.id = +t.id,
                t
            });
            return t
        },
        i.prototype.GetBuffConfig = function(t) {
            for (var e = this.GetBuffAllConfig(), i = 0; i < e.length; i++) if (e[i].id === t) return e[i];
            return null
        },
        i.prototype.GetDebuffAllConfig = function() {
            var t = this._newStarekConfig.debuff.item.map(function(t) {
                return t.id = +t.id,
                t
            });
            return t
        },
        i.prototype.GetDebuffConfig = function(t) {
            for (var e = this.GetDebuffAllConfig(), i = 0; i < e.length; i++) if (e[i].id === t) return e[i];
            return null
        },
        i.prototype.GetConfigTask = function(t) {
            for (var e = this.GetTaskConfigAll(), i = 0; i < e.length; i++) if (e[i].id === t) return e[i];
            return null
        },
        i.prototype.GetTasKStartIds = function(t) {
            return this._clientCfg.taskItemsCfg[t]
        },
        i.prototype.GetStartConfig = function(t) {
            var e = this._clientCfg.taskStartCfg;
            return e[t]
        },
        i.prototype.GetConfigTaskByTaskAndStep = function(t, e) {
            for (var i = this.GetTaskConfigAll(), n = 0; n < i.length; n++) if (i[n].task === t && i[n].step === e) return i[n];
            return null
        },
        i.prototype.GetCurrentTask = function() {
            var t, e = this._value_108140;
            switch (e) {
            case 4:
                t = 1;
                break;
            case 6:
                t = 2;
                break;
            case 8:
                t = 3;
                break;
            case 10:
                t = 4;
                break;
            case 12:
                t = 5
            }
            return t
        },
        i.prototype.GetCurrentCanSelctedStep = function() {
            var t, e = this._value_108140;
            switch (e) {
            case 3:
                t = 1;
                break;
            case 5:
                t = 2;
                break;
            case 7:
                t = 3;
                break;
            case 9:
                t = 4;
                break;
            case 11:
                t = 5
            }
            return t
        },
        i.prototype.GetSelcedStepState = function() {
            var t = [3, 5, 7, 9, 11];
            return t.indexOf(this._value_108140) >= 0
        },
        i.prototype.GetMaxState = function() {
            return 13 === this._value_108140
        },
        i.prototype.GetChildStep = function() {
            return this._value_108141
        },
        i.prototype.GetCompleteStepIds = function() {
            for (var t = this._value_108142,
            e = [], i = 0; 32 > i; i++) BitUtil.getBit(t, i) > 0 && e.push(i + 1);
            return e
        },
        i.prototype.GetChildStepState = function(t) {
            var e = this._value_108142;
            return 1 === BitUtil.getBit(e, t - 1)
        },
        i.prototype.GetTaskEventId = function() {
            return this._value_108143
        },
        i.prototype.GetTaskItemType = function(t) {
            if (t.eventtype && t.eventtype > 0) return t.eventtype;
            var e = t.step - 1,
            i = e > 7 ? this._value_108145: this._value_108144;
            return BitUtil.getHalfByte(i, e % 8)
        },
        i.prototype.GetBuffList = function() {
            for (var t = this._value_108146,
            e = [], i = 0; 32 > i; i++) BitUtil.getBit(t, i) > 0 && e.push(i + 1);
            return e
        },
        i.prototype.GetDebuffList = function() {
            for (var t = this._value_108147,
            e = [], i = 0; 32 > i; i++) BitUtil.getBit(t, i) > 0 && e.push(i + 1);
            return e
        },
        i.prototype.GetClientTaskConfig = function(t) {
            for (var e = [], i = 0; 4 > i; i++) e = e.concat(this.GetClientCfgByLevelData(i + 1));
            for (var i = 0; i < e.length; i++) if (e[i].id === t) return e[i];
            return null
        },
        i.prototype.TestOpenPop = function(e, i) {
            var n;
            switch (e) {
            case "shop":
                n = new t.ShopPop;
                break;
            case "answer":
                n = new t.RandomAnswerPop;
                break;
            case "dispathSucessful":
                n = new t.DispatchSucessfulPop;
                break;
            case "dispathFaild":
                n = new t.DispatchFaildPop;
                break;
            case "buff":
                n = new t.BufferStatePop;
                break;
            case "monster":
                n = new t.BattleMonsterPop;
                break;
            case "dispatch":
                n = new t.PetDispatchPop
            }
            var r = PopViewManager.createDefaultStyleObject();
            r.caller = this,
            r.clickMaskHandler = function() {},
            PopViewManager.getInstance().openView(n, r, i)
        },
        i.prototype.GetShopAllConfig = function() {
            var t = this._newStarekConfig.shop.item.map(function(t) {
                return t.id = +t.id,
                t.cost = +t.cost,
                t
            });
            return t
        },
        i.prototype.GetShopConfig = function(t) {
            for (var e = this.GetShopAllConfig(), i = 0; i < e.length; i++) if (e[i].id === t) return e[i];
            return null
        },
        i.prototype.GetDeliverRewardAllConfig = function() {
            var t = this._newStarekConfig.deliver.item.map(function(t) {
                return t.id = +t.id,
                t.succprob = +t.succprob,
                t
            });
            return t
        },
        i.prototype.GetDeliverReward = function(t) {
            for (var e = this.GetDeliverRewardAllConfig(), i = 0; i < e.length; i++) if (e[i].id === t) return e[i];
            return null
        },
        i.prototype.GetConfigAllEasyBoss = function() {
            var t = this._newStarekConfig.easyboss.item.map(function(t) {
                return t.id = +t.id,
                t
            });
            return t
        },
        i.prototype.GetConfigEasyBoss = function(t) {
            for (var e = this.GetConfigAllEasyBoss(), i = 0; i < e.length; i++) if (e[i].id === t) return e[i];
            return null
        },
        i.prototype.GetConfigAllDifficultBoss = function() {
            var t = this._newStarekConfig.difficultboss.item.map(function(t) {
                return t.id = +t.id,
                t
            });
            return t
        },
        i.prototype.GetConfigDifficultBoss = function(t) {
            for (var e = this.GetConfigAllDifficultBoss(), i = 0; i < e.length; i++) if (e[i].id === t) return e[i];
            return null
        },
        i.prototype.GetConfigAllFinalBoss = function() {
            var t = this._newStarekConfig.boss.item.map(function(t) {
                return t.id = +t.id,
                t
            });
            return t
        },
        i.prototype.GetFinalRewardState = function() {
            return Boolean(this._value_660)
        },
        i.prototype.GetConfigFinalBoss = function(t) {
            for (var e = this.GetConfigAllFinalBoss(), i = 0; i < e.length; i++) if (e[i].id === t) return e[i];
            return null
        },
        i.prototype.C2S_Start_Trek = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                return __generator(this,
                function(t) {
                    switch (t.label) {
                    case 0:
                        return [4, SocketConnection.sendWithPromise(42395, [112, 1, 0, 0])];
                    case 1:
                        return t.sent(),
                        [4, this.UpdateAllValue()];
                    case 2:
                        return t.sent(),
                        this.SetCacheBattleArry([]),
                        [2, Promise.resolve()]
                    }
                })
            })
        },
        i.prototype.C2S_GetFinalReward = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                return __generator(this,
                function(t) {
                    switch (t.label) {
                    case 0:
                        return [4, SocketConnection.sendWithPromise(42395, [112, 9, 0, 0])];
                    case 1:
                        return t.sent(),
                        [4, this.UpdateAllValue()];
                    case 2:
                        return t.sent(),
                        [2, Promise.resolve()]
                    }
                })
            })
        },
        i.prototype.C2S_GetPetInfos = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var t, e, i, n, r;
                return __generator(this,
                function(o) {
                    switch (o.label) {
                    case 0:
                        return [4, SocketConnection.sendWithPromise(42126, [20200828])];
                    case 1:
                        for (t = o.sent(), e = t.data, i = e.readUnsignedInt(), this._petsArry = [], n = 0; i > n; n++) r = {},
                        r.idx = e.readUnsignedInt(),
                        r.info = new PetInfo(e),
                        this._petsArry.push(r);
                        return [2, Promise.resolve()]
                    }
                })
            })
        },
        i.prototype.C2S_GoBattle = function(t) {
            return __awaiter(this, void 0, void 0,
            function() {
                var e, i;
                return __generator(this,
                function(n) {
                    switch (n.label) {
                    case 0:
                        for (e = new egret.ByteArray, e.writeUnsignedInt(t.length), i = 0; i < t.length; i++) e.writeUnsignedInt(t[i]);
                        return [4, SocketConnection.sendWithPromise(42128, [20200828, e])];
                    case 1:
                        return n.sent(),
                        [2, Promise.resolve()]
                    }
                })
            })
        },
        i.prototype.C2S_ResetGame = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                return __generator(this,
                function(t) {
                    switch (t.label) {
                    case 0:
                        return [4, SocketConnection.sendWithPromise(42129, [20200828, 0])];
                    case 1:
                        return t.sent(),
                        [4, this.UpdateAllValue()];
                    case 2:
                        return t.sent(),
                        this._petsArry = [],
                        [2, Promise.resolve()]
                    }
                })
            })
        },
        i.prototype.C2S_EntryTask = function(t) {
            return __awaiter(this, void 0, void 0,
            function() {
                return __generator(this,
                function(e) {
                    switch (e.label) {
                    case 0:
                        return [4, SocketConnection.sendWithPromise(42395, [112, 2, t, 0])];
                    case 1:
                        return e.sent(),
                        [4, this.UpdateAllValue()];
                    case 2:
                        return e.sent(),
                        [2, Promise.resolve()]
                    }
                })
            })
        },
        i.prototype.C2S_SelectedEventStep = function(t) {
            return __awaiter(this, void 0, void 0,
            function() {
                return __generator(this,
                function(e) {
                    switch (e.label) {
                    case 0:
                        return [4, SocketConnection.sendWithPromise(42395, [112, 3, t, 0])];
                    case 1:
                        return e.sent(),
                        [4, this.UpdateAllValue()];
                    case 2:
                        return e.sent(),
                        [2, Promise.resolve()]
                    }
                })
            })
        },
        i.prototype.C2S_Dispatch_pets = function(t) {
            return __awaiter(this, void 0, void 0,
            function() {
                var e, i, n;
                return __generator(this,
                function(r) {
                    switch (r.label) {
                    case 0:
                        for (e = 0, i = 0; i < t.length; i++) n = t[i],
                        e |= 1 << n;
                        return [4, SocketConnection.sendWithPromise(42395, [112, 4, e, 0])];
                    case 1:
                        return r.sent(),
                        [4, this.UpdateAllValue()];
                    case 2:
                        return r.sent(),
                        [2, Promise.resolve()]
                    }
                })
            })
        },
        i.prototype.C2S_Dispatch_GiveUp = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                return __generator(this,
                function(t) {
                    switch (t.label) {
                    case 0:
                        return [4, SocketConnection.sendWithPromise(42395, [112, 4, 0, 0])];
                    case 1:
                        return t.sent(),
                        [4, this.UpdateAllValue()];
                    case 2:
                        return t.sent(),
                        [2, Promise.resolve()]
                    }
                })
            })
        },
        i.prototype.C2S_Dispatch_Over = function(t) {
            return __awaiter(this, void 0, void 0,
            function() {
                return __generator(this,
                function(e) {
                    switch (e.label) {
                    case 0:
                        return [4, SocketConnection.sendWithPromise(42395, [112, 5, t, 0])];
                    case 1:
                        return e.sent(),
                        [4, this.UpdateAllValue()];
                    case 2:
                        return e.sent(),
                        [2, Promise.resolve()]
                    }
                })
            })
        },
        i.prototype.C2S_AnswerQuestion = function(t) {
            return __awaiter(this, void 0, void 0,
            function() {
                var e;
                return __generator(this,
                function(i) {
                    switch (i.label) {
                    case 0:
                        return [4, SocketConnection.sendWithPromise(42395, [112, 6, t, 0])];
                    case 1:
                        return e = i.sent(),
                        [4, this.UpdateAllValue()];
                    case 2:
                        return i.sent(),
                        [2, Promise.resolve(e)]
                    }
                })
            })
        },
        i.prototype.C2S_GetReward = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                return __generator(this,
                function(t) {
                    switch (t.label) {
                    case 0:
                        return [4, SocketConnection.sendWithPromise(42395, [112, 7, 0, 0])];
                    case 1:
                        return t.sent(),
                        [4, this.UpdateAllValue()];
                    case 2:
                        return t.sent(),
                        [2, Promise.resolve()]
                    }
                })
            })
        },
        i.prototype.C2S_Shop = function(t) {
            return __awaiter(this, void 0, void 0,
            function() {
                var e, i, n, e;
                return __generator(this,
                function(r) {
                    switch (r.label) {
                    case 0:
                        for (e = 0, i = 0; i < t.length; i++) e = BitUtil.setBit(e, t[i]);
                        return [4, SocketConnection.sendWithPromise(42395, [112, 8, e, 0])];
                    case 1:
                        return n = r.sent(),
                        e = n.data.readUnsignedInt(),
                        [4, this.UpdateAllValue()];
                    case 2:
                        return r.sent(),
                        [2, Promise.resolve(e)]
                    }
                })
            })
        },
        i.prototype.C2S_Shop_GiveUp = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                return __generator(this,
                function(t) {
                    switch (t.label) {
                    case 0:
                        return [4, SocketConnection.sendWithPromise(42395, [112, 8, 0, 0])];
                    case 1:
                        return t.sent(),
                        [4, this.UpdateAllValue()];
                    case 2:
                        return t.sent(),
                        [2, Promise.resolve()]
                    }
                })
            })
        },
        i.prototype.C2S_Set20Pets = function(t) {
            return __awaiter(this, void 0, void 0,
            function() {
                var e, i;
                return __generator(this,
                function(n) {
                    switch (n.label) {
                    case 0:
                        for (e = new egret.ByteArray, e.writeUnsignedInt(t.length), i = 0; i < t.length; i++) e.writeUnsignedInt(t[i]);
                        return [4, SocketConnection.sendWithPromise(42127, [20200828, e])];
                    case 1:
                        return n.sent(),
                        [4, this.UpdateAllValue()];
                    case 2:
                        return n.sent(),
                        [2, Promise.resolve()]
                    }
                })
            })
        },
        i.prototype.C2S_Back2Step = function(t) {
            return __awaiter(this, void 0, void 0,
            function() {
                return __generator(this,
                function(e) {
                    switch (e.label) {
                    case 0:
                        return [4, SocketConnection.sendWithPromise(42395, [112, 10, t, 0])];
                    case 1:
                        return e.sent(),
                        [4, this.UpdateAllValue()];
                    case 2:
                        return e.sent(),
                        [2, Promise.resolve()]
                    }
                })
            })
        },
        i.prototype.requestSeerInfo = function() {
            return this._setSeerInfo(),
            Promise.resolve()
        },
        i.prototype._setSeerInfo = function() {
            this._clothesIDs = [];
            for (var t = 0; 5 > t; t++) {
                var e = this["_value_" + (108155 + t)];
                e > 0 && this._clothesIDs.push(e)
            }
            0 === this._clothesIDs.length && (this._clothesIDs = MainManager.actorInfo.clothIDs),
            this._titleID = MainManager.actorInfo.curTitle,
            this._value_108161 > 0 && (this._titleID = this._value_108161)
        },
        Object.defineProperty(i.prototype, "clothesIDs", {
            get: function() {
                return this._clothesIDs
            },
            enumerable: !0,
            configurable: !0
        }),
        i.prototype.GetClohesData = function(t) {
            if (t[0] instanceof PeopleItemInfo) return t;
            for (var e = [], i = 0; i < t.length; i++) e.push(new PeopleItemInfo(t[i]));
            return e
        },
        Object.defineProperty(i.prototype, "titleID", {
            get: function() {
                return this._titleID
            },
            enumerable: !0,
            configurable: !0
        }),
        i.prototype.C2S_SaveSeerInfo = function(t, e) {
            return __awaiter(this, void 0, void 0,
            function() {
                var i, n, r;
                return __generator(this,
                function(o) {
                    switch (o.label) {
                    case 0:
                        for (this._clothesIDs = t, this._titleID = e, i = new egret.ByteArray, i.writeUnsignedInt(20200828), n = this._clothesIDs.length, i.writeUnsignedInt(n), r = 0; n > r; r++) i.writeUnsignedInt(this._clothesIDs[r]);
                        return i.writeUnsignedInt(e),
                        [4, SocketConnection.sendWithPromise(42409, [i])];
                    case 1:
                        return o.sent(),
                        [4, this.UpdateAllValue()];
                    case 2:
                        return o.sent(),
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
        i.prototype.getOnlineLastPetCid = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var t, e, i;
                return __generator(this,
                function(n) {
                    switch (n.label) {
                    case 0:
                        for (t = [], e = 0; 20 > e; e++) t.push(108179 + e);
                        return [4, KTool.getMultiValueAsync(t)];
                    case 1:
                        return i = n.sent(),
                        this._lastPidArry = i.filter(function(t) {
                            return t > 0
                        }),
                        [2, Promise.resolve()]
                    }
                })
            })
        },
        i.prototype.GetPetBagMap = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var t, e, i, n, r;
                return __generator(this,
                function(o) {
                    switch (o.label) {
                    case 0:
                        return [4, KTool.getMultiValueAsync([101768, 101769])];
                    case 1:
                        for (t = o.sent(), this.CurrentSelectedIdx = t[0], this.OpenPetBagPageNum = t[1], e = [], i = 0; i <= this.OpenPetBagPageNum; i++) e.push(i + 1);
                        this._bagFirstInfoMap = {},
                        this._bagSecondInfoMap = {},
                        o.label = 2;
                    case 2:
                        return e.length > 0 ? (n = e.shift(), [4, this.GetBagPetInfos(n)]) : [3, 4];
                    case 3:
                        return r = o.sent(),
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
                var e, i, n, r, o, s, a, s, a;
                return __generator(this,
                function(_) {
                    switch (_.label) {
                    case 0:
                        return e = [],
                        i = [],
                        [4, SocketConnection.sendWithPromise(42411, [t])];
                    case 1:
                        for (n = _.sent(), r = n.data, o = r.readUnsignedInt(), s = 0; o > s; s++) a = new PetStorage2015PetInfo(r),
                        e.push(a);
                        for (o = r.readUnsignedInt(), s = 0; o > s; s++) a = new PetStorage2015PetInfo(r),
                        i.push(a);
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
        i.prototype.getLastPetCid = function() {
            return this._lastPidArry
        },
        i._instance = null,
        i.EVENT_CLICK_EVENTITEMCOMP = "event_click_eventitemcomp",
        i.EVENT_COMPLETE_STEP = "evnet_complete_step",
        i.EVENT_ONCHANGE_VIEW = "event_onChange_view",
        i.EVENT_CLOSE_VIEW = "event_close_view",
        i.EVENT_ON_DISPATCH_COMPLETE = "event_on_dispatch_complete",
        i
    } (egret.EventDispatcher);
    t.DataMgr = e,
    __reflect(e.prototype, "pveTrek.DataMgr")
} (pveTrek || (pveTrek = {}));
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
        function s(t) {
            try {
                _(n.next(t))
            } catch(e) {
                o(e)
            }
        }
        function a(t) {
            try {
                _(n["throw"](t))
            } catch(e) {
                o(e)
            }
        }
        function _(t) {
            t.done ? r(t.value) : new i(function(e) {
                e(t.value)
            }).then(s, a)
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
            if (r = 1, o && (s = o[2 & i[0] ? "return": i[0] ? "throw": "next"]) && !(s = s.call(o, i[1])).done) return s;
            switch (o = 0, s && (i = [0, s.value]), i[0]) {
            case 0:
            case 1:
                s = i;
                break;
            case 4:
                return _.label++,
                {
                    value: i[1],
                    done: !1
                };
            case 5:
                _.label++,
                o = i[1],
                i = [0];
                continue;
            case 7:
                i = _.ops.pop(),
                _.trys.pop();
                continue;
            default:
                if (s = _.trys, !(s = s.length > 0 && s[s.length - 1]) && (6 === i[0] || 2 === i[0])) {
                    _ = 0;
                    continue
                }
                if (3 === i[0] && (!s || i[1] > s[0] && i[1] < s[3])) {
                    _.label = i[1];
                    break
                }
                if (6 === i[0] && _.label < s[1]) {
                    _.label = s[1],
                    s = i;
                    break
                }
                if (s && _.label < s[2]) {
                    _.label = s[2],
                    _.ops.push(i);
                    break
                }
                s[2] && _.ops.pop(),
                _.trys.pop();
                continue
            }
            i = e.call(t, _)
        } catch(n) {
            i = [6, n],
            o = 0
        } finally {
            r = s = 0
        }
        if (5 & i[0]) throw i[1];
        return {
            value: i[0] ? i[1] : void 0,
            done: !0
        }
    }
    var r, o, s, a, _ = {
        label: 0,
        sent: function() {
            if (1 & s[0]) throw s[1];
            return s[1]
        },
        trys: [],
        ops: []
    };
    return a = {
        next: i(0),
        "throw": i(1),
        "return": i(2)
    },
    "function" == typeof Symbol && (a[Symbol.iterator] = function() {
        return this
    }),
    a
},
pveTrek; !
function(t) {
    var e; !
    function(t) {
        t.MAIN = "main",
        t.SET_SEER_INFO = "set_seer_info",
        t.SET_PET_INFO = "set_pet_info",
        t.LEVEL = "level_view"
    } (e = t.ViewType || (t.ViewType = {}));
    var i = function(i) {
        function n(t) {
            var e = i.call(this, t) || this;
            return e._panelMap = {},
            e._changeViewAni = common.TweenUtil.createChangeViewFadeInOut(),
            e.skinName = "",
            PetManager.getLovePetList(),
            PetStorage2015InfoManager.getTotalInfo(function() {}),
            e
        }
        return __extends(n, i),
        n.prototype.childrenCreated = function() {
            var n = this;
            i.prototype.childrenCreated.call(this),
            this._currentViewType = e.MAIN,
            this._addEvents(),
            t.DataMgr.Instance.SetUpdateValueFunc(function() {
                return __awaiter(n, void 0, void 0,
                function() {
                    return __generator(this,
                    function(e) {
                        switch (e.label) {
                        case 0:
                            return [4, this.updateConfigMulitValues()];
                        case 1:
                            return e.sent(),
                            t.DataMgr.Instance.SetValues(this.getMultivalue.bind(this)),
                            [2, Promise.resolve()]
                        }
                    })
                })
            }),
            t.DataMgr.Instance.initData(this.getMultivalue.bind(this)).then(function() {
                n.openPanel(n._currentViewType, null, !1)
            })
        },
        n.prototype._addEvents = function() {
            t.DataMgr.Instance.addEventListener(t.DataMgr.EVENT_ONCHANGE_VIEW, this._onChangeView, this)
        },
        n.prototype._removeEvents = function() {
            t.DataMgr.Instance.removeEventListener(t.DataMgr.EVENT_ONCHANGE_VIEW, this._onChangeView, this)
        },
        n.prototype.openPanel = function(e, i, n) {
            return void 0 === n && (n = !0),
            __awaiter(this, void 0, void 0,
            function() {
                var r;
                return __generator(this,
                function(o) {
                    switch (o.label) {
                    case 0:
                        return n ? [4, this._changeViewAni.play()] : [3, 2];
                    case 1:
                        o.sent(),
                        o.label = 2;
                    case 2:
                        return this.removeChildren(),
                        r = this._panelMap[e],
                        r || (r = this._createPanel(e), this._panelMap[e] = r),
                        this._currentViewType = e,
                        r.once(t.DataMgr.EVENT_CLOSE_VIEW, this._onCloseView, this),
                        [4, this._setViewData(e, r, i)];
                    case 3:
                        return o.sent(),
                        n && this._changeViewAni.hide(300),
                        [2, Promise.resolve()]
                    }
                })
            })
        },
        n.prototype._setViewData = function(i, n, r) {
            return __awaiter(this, void 0, void 0,
            function() {
                var r;
                return __generator(this,
                function(o) {
                    switch (o.label) {
                    case 0:
                        switch (r = i) {
                        case e.MAIN:
                            return [3, 1];
                        case e.SET_SEER_INFO:
                            return [3, 2];
                        case e.SET_PET_INFO:
                            return [3, 4];
                        case e.LEVEL:
                            return [3, 8]
                        }
                        return [3, 9];
                    case 1:
                        return [3, 10];
                    case 2:
                        return [4, t.DataMgr.Instance.requestSeerInfo()];
                    case 3:
                        return o.sent(),
                        [3, 10];
                    case 4:
                        return [4, t.DataMgr.Instance.GetWarehousePets()];
                    case 5:
                        return o.sent(),
                        [4, t.DataMgr.Instance.GetPetBagMap()];
                    case 6:
                        return o.sent(),
                        [4, t.DataMgr.Instance.getOnlineLastPetCid()];
                    case 7:
                        return o.sent(),
                        [3, 10];
                    case 8:
                        return [3, 10];
                    case 9:
                        return [3, 10];
                    case 10:
                        return n.UpdateView(),
                        this.addChild(n),
                        [2, Promise.resolve()]
                    }
                })
            })
        },
        n.prototype._createPanel = function(i) {
            var n;
            switch (i) {
            case e.MAIN:
                n = new t.MainView;
                break;
            case e.SET_SEER_INFO:
                n = new t.SetSeerInfoView;
                break;
            case e.SET_PET_INFO:
                n = new t.SetPetInfoView;
                break;
            case e.LEVEL:
                n = new t.LevelView
            }
            return n
        },
        n.prototype._onCloseView = function(t) {
            var i = t.data;
            switch (i) {
            case e.MAIN:
                this.onClose();
                break;
            case e.SET_SEER_INFO:
                this.openPanel(e.MAIN);
                break;
            case e.SET_PET_INFO:
                this.openPanel(e.MAIN);
                break;
            case e.LEVEL:
                this.openPanel(e.MAIN)
            }
        },
        n.prototype._onChangeView = function(t) {
            var e = t.data;
            this._currentViewType !== e && this.openPanel(e)
        },
        n.prototype.show = function() {
            i.prototype.show.call(this),
            this._panelMap[this._currentViewType].show()
        },
        n.prototype.destroy = function() {
            t.DataMgr.Instance.ClearUpdateValueFunc(),
            this._changeViewAni.destroy(),
            this._removeEvents();
            for (var e in this._panelMap) {
                var n = this._panelMap[e];
                n.destroy()
            }
            i.prototype.destroy.call(this)
        },
        n
    } (BaseModule);
    t.PveTrek = i,
    __reflect(i.prototype, "pveTrek.PveTrek")
} (pveTrek || (pveTrek = {}));
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
pveTrek; !
function(t) {
    var e = function(e) {
        function i(i) {
            var n = e.call(this, i) || this;
            return n.TYPE_MAP = {
                1 : "pveTrekLevel_iconMonster_png",
                3 : "pveTrekLevel_iconTask_png",
                4 : "pveTrekLevel_iconRandom_png",
                5 : "pveTrekLevel_iconBox_png",
                6 : "pveTrekLevel_iconShop_png",
                2 : "pveTrekLevel_iconBoss_png"
            },
            n._flagInit = !1,
            n.skinName = t.EventItemCompSkinSkin,
            n
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            this._addEvent(),
            this._flagInit = !0,
            this._update(),
            this.flag_selected.visible = !1,
            this.group_animation.visible = !0,
            this.group_animation.touchEnabled = this.group_animation.touchChildren = !1,
            this._createAnimation()
        },
        i.prototype._createAnimation = function() {
            var t = DragonbonesUtil.createAnimate("guanka_ske_json", "guanka_tex_json", "guanka_tex_png", "armatureName");
            this._animation_selected = t,
            this.group_animation.addChild(t),
            t.animation.play("animation", 0)
        },
        i.prototype._addEvent = function() {
            this.addEventListener(egret.TouchEvent.TOUCH_TAP, this._onTouchItemHandler, this)
        },
        i.prototype._removeEvent = function() {
            this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this._onTouchItemHandler, this)
        },
        i.prototype.UpdateData = function(t) {
            this.data = t,
            this._update()
        },
        i.prototype._update = function() {
            if (this._flagInit) {
                var e = this.data,
                i = t.DataMgr.Instance.GetConfigTask(e.id);
                this._type = t.DataMgr.Instance.GetTaskItemType(i);
                var n = this.TYPE_MAP[this._type];
                this.icon.source = n
            }
        },
        i.prototype._onTouchItemHandler = function(e) {
            t.DataMgr.Instance.dispatchEventWith(t.DataMgr.EVENT_CLICK_EVENTITEMCOMP, !1, this)
        },
        i.prototype.SetSelectedFlag = function(t) {
            this.group_animation.visible = t
        },
        i.prototype.SetYwcFlag = function(t) {
            this.flag_ywc.visible = t
        },
        i.prototype.GetType = function() {
            return this._type
        },
        i.prototype.destroy = function() {
            this._removeEvent(),
            e.prototype.destroy.call(this)
        },
        i
    } (BaseModule);
    t.EventItemComp = e,
    __reflect(e.prototype, "pveTrek.EventItemComp")
} (pveTrek || (pveTrek = {}));
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
pveTrek; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.skinName = t.BattleMonsterPopSkin,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.list_head.itemRenderer = t.MonsterItem,
            this.list_head.dataProvider = new eui.ArrayCollection
        },
        i.prototype.initEvents = function() {
            ImageButtonUtil.add(this.btnReady, this._onTouchTapButtonHandler, this),
            ImageButtonUtil.add(this.btnClose, this._onTouchTapButtonHandler, this)
        },
        i.prototype.removeEvents = function() {
            ImageButtonUtil.removeAll(this)
        },
        i.prototype._parseData = function() {
            this._type = this._data
        },
        i.prototype._upDateView = function() {
            var e, i, n = t.DataMgr.Instance.GetTaskEventId();
            1 === this._type ? (e = t.DataMgr.Instance.GetConfigEasyBoss(n), i = "较为简单的精灵挑战，获胜后可以获得{0}个{1}", this.title.source = "pveTrekAllPop_title_pttz_png") : (e = t.DataMgr.Instance.GetConfigDifficultBoss(n), i = "战胜2个精灵，获胜后可以获得{0}个{1}", this.title.source = "pveTrekAllPop_title_jytz_png");
            var r = +e.rewardcnt.split("_")[0],
            o = +e.rewardid.split("_")[0],
            s = virtualItem.UserInfoIconManger.Instance.GetItemByType(o).desc;
            i = StringUtil.connectArgs(i, r, s),
            this.txt_answer.text = i;
            for (var a = e.monsterid.split("_"), _ = 0; _ < a.length; _++) this.list_head.dataProvider.addItem( + a[_])
        },
        i.prototype._onTouchTapButtonHandler = function(e) {
            switch (e.currentTarget) {
            case this.btnReady:
                PopViewManager.getInstance().openView(new t.ReadyBattlePop),
                this.hide();
                break;
            case this.btnClose:
                this.hide()
            }
        },
        i.prototype.destroy = function() {
            e.prototype.destroy.call(this)
        },
        i
    } (PopView);
    t.BattleMonsterPop = e,
    __reflect(e.prototype, "pveTrek.BattleMonsterPop")
} (pveTrek || (pveTrek = {}));
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
pveTrek; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.skinName = t.BufferStateSkin,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.scroller_myState.viewport = this.list_myState,
            this.list_myState.itemRenderer = t.BufferItem,
            this.list_myState.dataProvider = new eui.ArrayCollection,
            this.scroller_OtherState.viewport = this.list_otherState,
            this.list_otherState.itemRenderer = t.BufferItem,
            this.list_otherState.dataProvider = new eui.ArrayCollection
        },
        i.prototype.initEvents = function() {
            ImageButtonUtil.add(this.btnClose, this._onTouchTapButtonHandler, this),
            ImageButtonUtil.add(this.btnok, this._onTouchTapButtonHandler, this)
        },
        i.prototype.removeEvents = function() {
            ImageButtonUtil.removeAll(this)
        },
        i.prototype._parseData = function() {
            this._buff = this._data.buff,
            this._debuff = this._data.debuff
        },
        i.prototype._upDateView = function() {
            for (var e = this._buff || t.DataMgr.Instance.GetBuffList(), i = 0; i < e.length; i++) this.list_myState.dataProvider.addItem({
                type: "buff",
                buff: e[i]
            });
            for (var n = this._data.debuff || t.DataMgr.Instance.GetDebuffList(), i = 0; i < n.length; i++) this.list_otherState.dataProvider.addItem({
                type: "debuff",
                buff: n[i]
            })
        },
        i.prototype._onTouchTapButtonHandler = function(t) {
            switch (t.currentTarget) {
            case this.btnok:
                this.hide();
                break;
            case this.btnClose:
                this.hide()
            }
        },
        i.prototype.destroy = function() {
            e.prototype.destroy.call(this)
        },
        i
    } (PopView);
    t.BufferStatePop = e,
    __reflect(e.prototype, "pveTrek.BufferStatePop")
} (pveTrek || (pveTrek = {}));
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
pveTrek; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.skinName = t.DispatchFaildSkin,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this)
        },
        i.prototype.initEvents = function() {
            var e = this;
            ImageButtonUtil.add(this.btnSure,
            function() {
                e.hide(),
                t.DataMgr.Instance.dispatchEventWith(t.DataMgr.EVENT_ON_DISPATCH_COMPLETE, !1, e._customData),
                e._customData = null
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
            var t = ["伐木工", "挖矿工", "修理工"];
            this.txt_desc.text = "很可惜，没能完成" + t[this._customData.type - 1] + "任务！"
        },
        i.prototype.destroy = function() {
            e.prototype.destroy.call(this),
            EventManager
        },
        i
    } (PopView);
    t.DispatchFaildPop = e,
    __reflect(e.prototype, "pveTrek.DispatchFaildPop")
} (pveTrek || (pveTrek = {}));
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
pveTrek; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.skinName = LevelTipsPopSkin,
            e
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this),
            ImageButtonUtil.add(this.btnOk, this.hide, this)
        },
        e.prototype.destroy = function() {
            ImageButtonUtil.removeAll(this),
            t.prototype.destroy.call(this)
        },
        e
    } (PopView);
    t.LevelTipsPop = e,
    __reflect(e.prototype, "pveTrek.LevelTipsPop")
} (pveTrek || (pveTrek = {}));
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
pveTrek; !
function(t) {
    var e; !
    function(t) {
        t[t.FA_MU_GONG = 1] = "FA_MU_GONG",
        t[t.WA_KUANG_GONG = 2] = "WA_KUANG_GONG",
        t[t.XIU_LI_GONG = 3] = "XIU_LI_GONG"
    } (e = t.PetDispatchType || (t.PetDispatchType = {}));
    var i = function(i) {
        function n() {
            var e = i.call(this) || this;
            return e.MAX_DISPATCH_COUNT = 3,
            e.INIT_RATE_MAP = {
                1 : 10,
                2 : 20,
                3 : 30
            },
            e._currentSelctedList = [],
            e.skinName = t.PetDispatchSkin,
            e
        }
        return __extends(n, i),
        n.prototype.childrenCreated = function() {
            i.prototype.childrenCreated.call(this),
            this.reward_list.itemRenderer = t.RewardItem,
            this.reward_list.dataProvider = new eui.ArrayCollection,
            this.scroller_pets.viewport = this.list_pets,
            this.list_pets.itemRenderer = t.DispatchPetItem,
            this.list_pets.dataProvider = new eui.ArrayCollection,
            this.list_pets.allowMultipleSelection = !0
        },
        n.prototype.initEvents = function() {
            ImageButtonUtil.add(this.btnClose, this._onTouchTapButtonHandler, this),
            ImageButtonUtil.add(this.btnGiveUp, this._onTouchTapButtonHandler, this),
            ImageButtonUtil.add(this.btnStart, this._onTouchTapButtonHandler, this),
            this.list_pets.addEventListener(eui.ItemTapEvent.ITEM_TAP, this._onTouchTapPetItem, this),
            this.reward_list.addEventListener(eui.ItemTapEvent.ITEM_TAP, this._onTouchRewardItem, this)
        },
        n.prototype.removeEvents = function() {
            ImageButtonUtil.removeAll(this),
            this.reward_list.removeEventListener(eui.ItemTapEvent.ITEM_TAP, this._onTouchRewardItem, this),
            this.list_pets.removeEventListener(eui.ItemTapEvent.ITEM_TAP, this._onTouchTapPetItem, this)
        },
        n.prototype._parseData = function() {
            this._type = t.DataMgr.Instance.GetTaskEventId()
        },
        n.prototype._upDateView = function() {
            var t = ["1只电击兔、2只塞拉兔、3只狂暴电击兔••••••派遣1~3个精灵砍掉此处的树林，防止更多兔子精灵撞到树上！大概你再探索2~8个回合，精灵就会回来汇报成果了！", "前方有一座金光闪闪的矿堆，派遣1~3个精灵前去挖矿吧，发家致富从此刻开始！大概你再探索4~6个回合，精灵就会回来汇报成果了！", "我是勤劳修理工，派遣1~3个精灵进行设备维修就可以获得相应的报酬了！大概你再探索1-3个回合，精灵就会回来汇报成果了！"];
            this.desc.text = t[this._type - 1],
            this._setPets(),
            this._setTitle(),
            this._setReward(),
            this._setRate()
        },
        n.prototype._setPets = function() {
            var e = t.DataMgr.Instance.GetPetAll();
            e = this._sortPets(e);
            for (var i = {
                1 : {
                    1 : 30,
                    2 : 30,
                    3 : 20,
                    4 : 20,
                    other: 5
                },
                2 : {
                    1 : 25,
                    2 : 25,
                    3 : 20,
                    4 : 20,
                    other: 10
                },
                3 : {
                    1 : 25,
                    2 : 25,
                    3 : 20,
                    4 : 20,
                    other: 10
                }
            },
            n = 0; n < e.length; n++) {
                var r = i[this._type],
                o = r.other;
                r[n + 1] && (o = r[n + 1]);
                var s = {};
                s.petInfoData = e[n],
                s.rate = o,
                this.list_pets.dataProvider.addItem(s)
            }
        },
        n.prototype._sortPets = function(t) {
            var i = this,
            n = t.concat([]);
            return n.sort(function(t, n) {
                var r = t.info,
                o = n.info;
                return i._type === e.FA_MU_GONG ? o.ev_sa + o.maxHp - (r.ev_sa + r.maxHp) : i._type === e.WA_KUANG_GONG ? o.s_a + o.maxHp - (r.s_a + r.maxHp) : o.defence + o.s_d + o.maxHp - (r.defence + r.s_a + r.maxHp)
            }),
            n
        },
        n.prototype._setTitle = function() {
            var t = {
                1 : "pveTrekAllPop_title_fmg_png",
                2 : "pveTrekAllPop_title_wkg_png",
                3 : "pveTrekAllPop_title_xlg_png"
            };
            this.title.source = t[this._type]
        },
        n.prototype._setReward = function() {
            var e = t.DataMgr.Instance.GetDeliverReward(this._type),
            i = core.gameUtil.RewardDataFormat.parseRewardStyle1(e.rewardtype, e.rewardid, e.rewardcnt),
            n = i.length;
            this.reward_list.dataProvider.removeAll();
            for (var r = 0; n > r; r++) this.reward_list.dataProvider.addItem(i[r])
        },
        n.prototype._setRate = function() {
            for (var e = t.DataMgr.Instance.GetDeliverReward(this._type).succprob, i = 0; i < this._currentSelctedList.length; i++) {
                var n = this._currentSelctedList[i];
                e += n.rate
            }
            this.txt_rate.text = "成功率:" + e + "%"
        },
        n.prototype._onTouchTapButtonHandler = function(e) {
            var i = this;
            switch (e.currentTarget) {
            case this.btnClose:
                this.hide();
                break;
            case this.btnGiveUp:
                t.DataMgr.Instance.C2S_Dispatch_GiveUp().then(function() {
                    i.hide(),
                    t.DataMgr.Instance.dispatchEventWith(t.DataMgr.EVENT_COMPLETE_STEP)
                });
                break;
            case this.btnStart:
                if (console.log(this._currentSelctedList), 0 === this._currentSelctedList.length) return void BubblerManager.getInstance().showText("至少需要选择一个精灵");
                for (var n = [], r = 0; r < this._currentSelctedList.length; r++) n.push(this._currentSelctedList[r].petInfoData.idx);
                t.DataMgr.Instance.C2S_Dispatch_pets(n).then(function() {
                    i.hide();
                    for (var e = [], r = 0; r < n.length; r++) e.push(t.DataMgr.Instance.GetPetInfoDataByIdx(n[r]).info.name);
                    Alarm.show(e.join("、") + "被派遣出去，短期内无法被选中上阵！"),
                    t.DataMgr.Instance.dispatchEventWith(t.DataMgr.EVENT_COMPLETE_STEP)
                })
            }
        },
        n.prototype._onTouchRewardItem = function(t) {
            var e = {},
            i = t.item;
            e.id = i.id,
            e.type = i.type,
            tipsPop.TipsPop.openItemPop(e)
        },
        n.prototype._onTouchTapPetItem = function(t) {
            for (var e = -1,
            i = t.item,
            n = 0; n < this._currentSelctedList.length; n++) {
                var r = this._currentSelctedList[n].petInfoData.info;
                if (r.catchTime === i.petInfoData.info.catchTime) {
                    e = n;
                    break
                }
            }
            e >= 0 ? this._currentSelctedList.splice(e, 1) : (this._currentSelctedList.push(i), this._currentSelctedList.length > this.MAX_DISPATCH_COUNT && this._currentSelctedList.shift()),
            this.list_pets.selectedItems = this._currentSelctedList,
            this._onUpdateChange()
        },
        n.prototype._onUpdateChange = function() {
            this._setRate()
        },
        n.prototype.destroy = function() {
            i.prototype.destroy.call(this)
        },
        n
    } (PopView);
    t.PetDispatchPop = i,
    __reflect(i.prototype, "pveTrek.PetDispatchPop")
} (pveTrek || (pveTrek = {}));
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
        function s(t) {
            try {
                _(n.next(t))
            } catch(e) {
                o(e)
            }
        }
        function a(t) {
            try {
                _(n["throw"](t))
            } catch(e) {
                o(e)
            }
        }
        function _(t) {
            t.done ? r(t.value) : new i(function(e) {
                e(t.value)
            }).then(s, a)
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
            if (r = 1, o && (s = o[2 & i[0] ? "return": i[0] ? "throw": "next"]) && !(s = s.call(o, i[1])).done) return s;
            switch (o = 0, s && (i = [0, s.value]), i[0]) {
            case 0:
            case 1:
                s = i;
                break;
            case 4:
                return _.label++,
                {
                    value: i[1],
                    done: !1
                };
            case 5:
                _.label++,
                o = i[1],
                i = [0];
                continue;
            case 7:
                i = _.ops.pop(),
                _.trys.pop();
                continue;
            default:
                if (s = _.trys, !(s = s.length > 0 && s[s.length - 1]) && (6 === i[0] || 2 === i[0])) {
                    _ = 0;
                    continue
                }
                if (3 === i[0] && (!s || i[1] > s[0] && i[1] < s[3])) {
                    _.label = i[1];
                    break
                }
                if (6 === i[0] && _.label < s[1]) {
                    _.label = s[1],
                    s = i;
                    break
                }
                if (s && _.label < s[2]) {
                    _.label = s[2],
                    _.ops.push(i);
                    break
                }
                s[2] && _.ops.pop(),
                _.trys.pop();
                continue
            }
            i = e.call(t, _)
        } catch(n) {
            i = [6, n],
            o = 0
        } finally {
            r = s = 0
        }
        if (5 & i[0]) throw i[1];
        return {
            value: i[0] ? i[1] : void 0,
            done: !0
        }
    }
    var r, o, s, a, _ = {
        label: 0,
        sent: function() {
            if (1 & s[0]) throw s[1];
            return s[1]
        },
        trys: [],
        ops: []
    };
    return a = {
        next: i(0),
        "throw": i(1),
        "return": i(2)
    },
    "function" == typeof Symbol && (a[Symbol.iterator] = function() {
        return this
    }),
    a
},
pveTrek; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.skinName = t.PetInfoPopSkinSkin,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.list_mark.itemRenderer = t.PetMarkItem,
            this.list_mark.dataProvider = new eui.ArrayCollection,
            this.list_skill.itemRenderer = t.PetSkillItem,
            this.list_skill.dataProvider = new eui.ArrayCollection,
            this.scrolle_onChange.viewport = this.list_ChangeSkill,
            this.list_ChangeSkill.itemRenderer = t.PetSkillItem,
            this.list_ChangeSkill.dataProvider = new eui.ArrayCollection,
            this.changeSkill.visible = !1,
            this.group_allow.visible = !1,
            this._petShow = new PetStaticModel,
            this._petShow.setSize(395, 385),
            this._petShow.setPetMaxScale(1.3),
            this.grp_boss.addChild(this._petShow),
            this.group_maskPos.touchEnabled = this.group_maskPos.touchChildren = !1,
            this._closeTouchTapRect = new egret.Rectangle(0, 0, 578, 581)
        },
        i.prototype.initEvents = function() {
            ImageButtonUtil.add(this.btnCz, this._onTouchImageButton, this),
            ImageButtonUtil.add(this.btnChangeSkill, this._onTouchImageButton, this),
            ImageButtonUtil.add(this.btnCloseChange, this._onTouchImageButton, this),
            this.list_ChangeSkill.addEventListener(eui.ItemTapEvent.ITEM_TAP, this._onTouchChangeSkill, this),
            this.list_skill.addEventListener(eui.ItemTapEvent.ITEM_TAP, this._onTouchCurrentSkill, this),
            this.addEventListener(egret.TouchEvent.TOUCH_TAP, this._onTouchTap, this)
        },
        i.prototype.removeEvents = function() {
            ImageButtonUtil.remove(this),
            this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this._onTouchTap, this),
            this.list_ChangeSkill.removeEventListener(eui.ItemTapEvent.ITEM_TAP, this._onTouchChangeSkill, this),
            this.list_skill.removeEventListener(eui.ItemTapEvent.ITEM_TAP, this._onTouchCurrentSkill, this)
        },
        i.prototype._parseData = function() {
            this._customData = this._data
        },
        i.prototype._upDateView = function() {
            this._setStyle(this._customData.petInfo)
        },
        i.prototype._setStyle = function(t) {
            this.btnCz.source = this._customData.isCz ? "pveTrekSetPets_btnXz_png": "pveTrekSetPets_btnCz_png",
            this.icon_hy.visible = PetManager.checkShowEffectIcon(t),
            this._petShow.setPetStyleByInfo(t),
            this.txt_name.text = t.name;
            var e = PetXMLInfo.getType(t.id);
            this.icon_type.source = ClientConfig.getpettypeticon(e + ""),
            this.txt_dj.text = t.level + "",
            this.txt_tf.text = t.dv + "",
            this.txt_xg.text = NatureXMLInfo.getName(t.nature);
            var i = PetManager.getPetEffect(t);
            if (i) {
                var n = PetEffectXMLInfo.getEffect(i.effectID, i.args);
                this.txt_tx.text = n
            } else this.txt_tx.text = "无";
            for (var r = [], o = 0; 6 > o; o++) {
                var s = (new egret.HtmlTextParser).parse(PetPropAddController.getAttributehtmlStr(t, o)); (new egret.HtmlTextParser).parse(PetPropAddController.showAddTxtTip2(t, o));
                r.push(s)
            }
            this.txt_atk_value.textFlow = r[0],
            this.txt_def_attr.textFlow = r[1],
            this.txt_satk_value.textFlow = r[2],
            this.txt_sdef_value.textFlow = r[3],
            this.txt_speed_value.textFlow = r[4],
            this.txt_hp_value.textFlow = r[5],
            this.txt_atk_value_ext.text = t.ev_attack + "",
            this.txt_def_value_ext.text = t.ev_defence + "",
            this.txt_satk_value_ext.text = t.ev_sa + "",
            this.txt_sdef_value_ext.text = t.ev_sd + "",
            this.txt_speed_value_ext.text = t.ev_sp + "",
            this.txt_hp_value_ext.text = t.ev_hp + "";
            var a = [0, 0, 0];
            if (t.abilityMark > 0 && (a[0] = t.abilityMark), t.skillMark > 0 && (a[1] = t.skillMark), t.commonMarkActived && t.commonMark > 0 && (a[2] = t.commonMark), this.list_mark.dataProvider.replaceAll(a), this.list_mark.dataProvider.refresh(), null != t && null != SkillXMLInfo.hideMovesMap[t.id]) if (null != t.hideSKill) {
                var _ = SkillXMLInfo.hideMovesMap[t.id];
                this.txt_specSkillName.text = "第五技能：" + SkillXMLInfo.getName(_),
                this.txt_specSkillPower.text = t.hideSKill.damage.toString();
                var h = t.hideSKill.maxPP;
                this.txt_specSkill_pp.text = h + "/" + h;
                var u, l = SkillXMLInfo.getTypeID(_);
                u = 4 == SkillXMLInfo.getCategory(_) ? ClientConfig.getpettypeticon("prop") : ClientConfig.getpettypeticon(String(l)),
                this.spec_skillIcon.source = u,
                this.group_specSkill.visible = !0,
                this.grp_noskill5.visible = !1
            } else this.txt_nullSKill5.text = "尚未开启第五技能",
            this.group_specSkill.visible = !1,
            this.grp_noskill5.visible = !0;
            else null != t && null == SkillXMLInfo.hideMovesMap[t.id] && (this.txt_nullSKill5.text = "无法开启第五技能", this.group_specSkill.visible = !1, this.grp_noskill5.visible = !0);
            this.list_skill.dataProvider.replaceAll(t.skillArray),
            this.list_skill.dataProvider.refresh()
        },
        i.prototype._onTouchImageButton = function(t) {
            var e = this;
            switch (t.currentTarget) {
            case this.btnCz:
                var i = this._customData.callBack,
                n = this._customData.caller,
                r = this._customData.petInfo;
                i.apply(n, [r]).then(function() {
                    e.hide()
                });
                break;
            case this.btnChangeSkill:
                this._openShowChangePop();
                break;
            case this.btnCloseChange:
                this._hideShowChangePop()
            }
        },
        i.prototype._onTouchTap = function(t) {
            var e = this.globalToLocal(t.stageX, t.stageY);
            this._closeTouchTapRect.containsPoint(e) && this.hide()
        },
        i.prototype._openShowChangePop = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var t, e, i, n, r, o, s, a, _, n;
                return __generator(this,
                function(h) {
                    switch (h.label) {
                    case 0:
                        return t = this,
                        [4, this.checkOpenSkillWarehouseFlag()];
                    case 1:
                        for (t._petSkillTotalList = h.sent(), e = this._customData.petInfo, i = [], n = 0; n < this._petSkillTotalList.length; n++) {
                            for (r = !1, o = 0, s = e.skillArray; o < s.length; o++) if (a = s[o], a.id === this._petSkillTotalList[n]) {
                                r = !0;
                                break
                            }
                            r || i.push(this._petSkillTotalList[n])
                        }
                        if (0 == i.length) return BubblerManager.getInstance().showText("你的这只精灵没有可以唤醒的技能！"),
                        [2, Promise.resolve()];
                        for (this.scrolle_onChange.stopAnimation(), this.scrolle_onChange.viewport.scrollV = 0, _ = this.list_ChangeSkill.dataProvider, _.removeAll(), n = 0; n < i.length; n++) _.addItem(i[n]);
                        return this.changeSkill.visible = !0,
                        [2, Promise.resolve()]
                    }
                })
            })
        },
        i.prototype._updateChangePop = function() {
            var t = this.list_ChangeSkill.dataProvider;
            t.removeAll();
            for (var e = 0; e < this._petSkillTotalList.length; e++) {
                for (var i = !1,
                n = 0,
                r = this._customData.petInfo.skillArray; n < r.length; n++) {
                    var o = r[n];
                    if (o.id === this._petSkillTotalList[e]) {
                        i = !0;
                        break
                    }
                }
                i || t.addItem(this._petSkillTotalList[e])
            }
            return Promise.resolve()
        },
        i.prototype.checkOpenSkillWarehouseFlag = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var t = this;
                return __generator(this,
                function(e) {
                    return [2, new Promise(function(e, i) {
                        var n = t._customData.petInfo,
                        r = PetXMLInfo.getSkillListForLv(n.id, n.level);
                        650 == n.id || 651 == n.id || 652 == n.id ? PetManager.getBlackCanStudySkill(n.catchTime,
                        function(t) {
                            return r = t,
                            e(r)
                        }) : PetManager.getCanStudySkill(n.catchTime,
                        function(t) {
                            return r = r.concat(t),
                            e(r)
                        })
                    })]
                })
            })
        },
        i.prototype._onTouchChangeSkill = function(t) {
            var e = {
                id: t.item,
                petInfo: this._customData.petInfo,
                onChangeFun: this._onReadyChangeSkill,
                caller: this
            };
            tipsPop.TipsPop.openSkillPop(e, null)
        },
        i.prototype._removeAnimationByReplaceSkill = function() {
            this._isChange = !1,
            egret.Tween.removeTweens(this.group_allow),
            this.group_allow.visible = !1,
            this.group_allow.y = 18
        },
        i.prototype._onReadyChangeSkill = function(t, e) {
            var i = this;
            this._currentSelectedSkillId = t,
            this._isChange = !0,
            this._playReplaceSkillAnimation(),
            MaskUtil.showMask([this.group_maskPos],
            function() {
                i._removeAnimationByReplaceSkill()
            },
            this, null, .5)
        },
        i.prototype._playReplaceSkillAnimation = function() {
            this.group_allow.visible = !0,
            egret.Tween.get(this.group_allow, {
                loop: !0
            }).to({
                y: this.group_allow.y + 10
            },
            800, egret.Ease.getPowOut(3))
        },
        i.prototype._onTouchCurrentSkill = function(t) {
            var e = this;
            if (this._isChange) this._onChangeSkill(t.item.id).then(function() {
                MaskUtil.Hide(),
                e._removeAnimationByReplaceSkill(),
                Alarm.show("技能更换成功")
            });
            else {
                var i = {
                    id: t.item.id,
                    petInfo: this._customData.petInfo,
                    caller: this
                };
                tipsPop.TipsPop.openSkillPop(i, null)
            }
        },
        i.prototype._onChangeSkill = function(t) {
            return __awaiter(this, void 0, void 0,
            function() {
                var e;
                return __generator(this,
                function(i) {
                    switch (i.label) {
                    case 0:
                        return console.log("oldSkill:%s>>>>>newSkill:%s", SkillXMLInfo.getName(this._currentSelectedSkillId), SkillXMLInfo.getName(t)),
                        650 != this._customData.petInfo.id && 651 != this._customData.petInfo.id && 652 != this._customData.petInfo.id ? [3, 2] : [4, SocketConnection.sendWithPromise(CommandID.EXCHANGE_BLACKPET_SKILL, [this._customData.petInfo.catchTime, t, this._currentSelectedSkillId, 1])];
                    case 1:
                        i.sent(),
                        i.label = 2;
                    case 2:
                        return [4, SocketConnection.sendWithPromise(CommandID.PET_SKILL_SWICTH, [this._customData.petInfo.catchTime, 1, 1, t, this._currentSelectedSkillId])];
                    case 3:
                        return i.sent(),
                        e = this._customData,
                        [4, PetManager.UpdateBagPetInfoAsynce(this._customData.petInfo.catchTime)];
                    case 4:
                        return e.petInfo = i.sent(),
                        this._setStyle(this._customData.petInfo),
                        this._updateChangePop(),
                        [2, Promise.resolve()]
                    }
                })
            })
        },
        i.prototype._hideShowChangePop = function() {
            this._isChange = !1,
            this.changeSkill.visible = !1
        },
        i.prototype.destroy = function() {
            this.list_mark.removeChildren(),
            this.list_mark.dataProvider.removeAll(),
            this.list_skill.removeChildren(),
            this.list_skill.dataProvider.removeAll(),
            this._petShow.destroy(),
            e.prototype.destroy.call(this)
        },
        i
    } (PopView);
    t.PetInfoPop = e,
    __reflect(e.prototype, "pveTrek.PetInfoPop")
} (pveTrek || (pveTrek = {}));
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
        function s(t) {
            try {
                _(n.next(t))
            } catch(e) {
                o(e)
            }
        }
        function a(t) {
            try {
                _(n["throw"](t))
            } catch(e) {
                o(e)
            }
        }
        function _(t) {
            t.done ? r(t.value) : new i(function(e) {
                e(t.value)
            }).then(s, a)
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
            if (r = 1, o && (s = o[2 & i[0] ? "return": i[0] ? "throw": "next"]) && !(s = s.call(o, i[1])).done) return s;
            switch (o = 0, s && (i = [0, s.value]), i[0]) {
            case 0:
            case 1:
                s = i;
                break;
            case 4:
                return _.label++,
                {
                    value: i[1],
                    done: !1
                };
            case 5:
                _.label++,
                o = i[1],
                i = [0];
                continue;
            case 7:
                i = _.ops.pop(),
                _.trys.pop();
                continue;
            default:
                if (s = _.trys, !(s = s.length > 0 && s[s.length - 1]) && (6 === i[0] || 2 === i[0])) {
                    _ = 0;
                    continue
                }
                if (3 === i[0] && (!s || i[1] > s[0] && i[1] < s[3])) {
                    _.label = i[1];
                    break
                }
                if (6 === i[0] && _.label < s[1]) {
                    _.label = s[1],
                    s = i;
                    break
                }
                if (s && _.label < s[2]) {
                    _.label = s[2],
                    _.ops.push(i);
                    break
                }
                s[2] && _.ops.pop(),
                _.trys.pop();
                continue
            }
            i = e.call(t, _)
        } catch(n) {
            i = [6, n],
            o = 0
        } finally {
            r = s = 0
        }
        if (5 & i[0]) throw i[1];
        return {
            value: i[0] ? i[1] : void 0,
            done: !0
        }
    }
    var r, o, s, a, _ = {
        label: 0,
        sent: function() {
            if (1 & s[0]) throw s[1];
            return s[1]
        },
        trys: [],
        ops: []
    };
    return a = {
        next: i(0),
        "throw": i(1),
        "return": i(2)
    },
    "function" == typeof Symbol && (a[Symbol.iterator] = function() {
        return this
    }),
    a
},
pveTrek; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.skinName = t.RandomAnswerSkin,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.list_btn.itemRenderer = t.OptionItem,
            this.list_btn.dataProvider = new eui.ArrayCollection
        },
        i.prototype.initEvents = function() {
            var t = this;
            ImageButtonUtil.add(this.btnClose,
            function() {
                t.hide()
            },
            this),
            this.list_btn.addEventListener(eui.ItemTapEvent.ITEM_TAP, this._onTouchAnswerHandler, this)
        },
        i.prototype.removeEvents = function() {
            this.list_btn.removeEventListener(eui.ItemTapEvent.ITEM_TAP, this._onTouchAnswerHandler, this),
            ImageButtonUtil.removeAll(this)
        },
        i.prototype._parseData = function() {},
        i.prototype._upDateView = function() {
            var e = t.DataMgr.Instance.GetTaskEventId(),
            i = t.DataMgr.Instance.GetQuestionConfig(e);
            if (i) {
                this.txt_answer.text = i.ques;
                for (var n = i.ans.split("_"), r = 0; r < n.length; r++) {
                    var o = t.DataMgr.Instance.GetAnswerConfig( + n[r]);
                    this.list_btn.dataProvider.addItem(o)
                }
            }
        },
        i.prototype._onTouchAnswerHandler = function(e) {
            var i = this,
            n = e.item;
            this._onAnserQudstion(n).then(function(e) {
                i.hide(),
                e && Alarm.show(e),
                t.DataMgr.Instance.dispatchEventWith(t.DataMgr.EVENT_COMPLETE_STEP)
            })
        },
        i.prototype._findPetInfo = function(e) {
            for (var i = t.DataMgr.Instance.GetPetAll(), n = 0; n < i.length; n++) if (i[n].idx === e) return i[n].info;
            return null
        },
        i.prototype._onAnserQudstion = function(e) {
            return __awaiter(this, void 0, void 0,
            function() {
                var i, n, r, o, s, a, _, h, s, u, l;
                return __generator(this,
                function(c) {
                    switch (c.label) {
                    case 0:
                        return i = t.DataMgr.Instance.GetTaskEventId(),
                        (n = t.DataMgr.Instance.GetQuestionConfig(i)) ? (r = n.ans.split("_"), o = r.map(function(t) {
                            return + t
                        }), s = o.indexOf(e.id), [4, t.DataMgr.Instance.C2S_AnswerQuestion(s + 1)]) : [2];
                    case 1:
                        return a = c.sent(),
                        _ = a.data,
                        e.alarm ? (h = e.alarm, s = _.readUnsignedInt(), h.indexOf("$") > -1 && (u = h.split("_"), 0 === s ? h = u[1] : (l = this._findPetInfo(s - 1), h = u[0].replace("$", l.name))), [2, Promise.resolve(h)]) : [2, Promise.resolve(null)]
                    }
                })
            })
        },
        i.prototype.destroy = function() {
            e.prototype.destroy.call(this)
        },
        i
    } (PopView);
    t.RandomAnswerPop = e,
    __reflect(e.prototype, "pveTrek.RandomAnswerPop")
} (pveTrek || (pveTrek = {}));
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
pveTrek; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i._limit = 6,
            i._initPets(),
            i.skinName = t.ReadBattleSkin,
            i
        }
        return __extends(i, e),
        i.prototype._initPets = function() {
            var e = t.DataMgr.Instance.GetPetAll(),
            i = t.DataMgr.Instance.GetCacheBattleArry();
            this._yhArry = [],
            this._czArry = [];
            for (var n = [], r = 0; r < e.length; r++) {
                var o = e[r],
                s = {};
                s.petData = o,
                s.igoneTitle = !1,
                t.DataMgr.Instance.GetPetDieState(o.idx) ? s.state = -2 : i.indexOf(o.idx) >= 0 ? (s.state = 1, n.push(o)) : t.DataMgr.Instance.GetPetDisenableState(o.idx) ? s.state = -1 : t.DataMgr.Instance.GetPetDispatchState(o.idx) ? s.state = -3 : s.state = 0,
                this._yhArry.push(s)
            }
            for (var r = 0; r < this._limit; r++) if (r < i.length) {
                for (var a, _ = i[r], h = 0; h < n.length; h++) if (n[h].idx === _) {
                    a = n[h];
                    break
                }
                var u = {};
                u.petData = a,
                u.state = 1,
                u.igoneTitle = !0,
                this._czArry.push(u)
            } else this._czArry.push(null)
        },
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.list_cz.itemRenderer = t.RedayBattlePetHeadItem,
            this.list_cz.dataProvider = new eui.ArrayCollection,
            this.scroller_yh.viewport = this.list_yhl,
            this.list_yhl.itemRenderer = t.RedayBattlePetHeadItem,
            this.list_yhl.dataProvider = new eui.ArrayCollection,
            this.list_skill.itemRenderer = t.PetSkillItem,
            this.list_skill.dataProvider = new eui.ArrayCollection,
            this.grp_null.visible = !1,
            this.icon_jlxq.visible = !this.grp_null.visible
        },
        i.prototype.initEvents = function() {
            this.list_yhl.addEventListener(eui.ItemTapEvent.ITEM_TAP, this._onTouchYhJl, this),
            this.list_cz.addEventListener(eui.ItemTapEvent.ITEM_TAP, this._onTouchYhJl, this),
            ImageButtonUtil.add(this.imgBtn_close, this._onTouchButtonHandler, this),
            ImageButtonUtil.add(this.imgBtn_battle, this._onTouchButtonHandler, this),
            ImageButtonUtil.add(this.imgBtn_sf, this._onTouchButtonHandler, this),
            ImageButtonUtil.add(this.imgBtn_sz1, this._onTouchButtonHandler, this),
            ImageButtonUtil.add(this.imgBtn_xz1, this._onTouchButtonHandler, this)
        },
        i.prototype.removeEvents = function() {
            this.list_yhl.removeEventListener(eui.ItemTapEvent.ITEM_TAP, this._onTouchYhJl, this),
            this.list_cz.removeEventListener(eui.ItemTapEvent.ITEM_TAP, this._onTouchYhJl, this),
            ImageButtonUtil.removeAll(this)
        },
        i.prototype._parseData = function() {
            this._data && this._data.callBack && (this._callBack = this._data.callBack),
            this._caller && this._data.caller && (this._caller = this._data.caller)
        },
        i.prototype._upDateView = function() {
            var t = this.list_cz.dataProvider;
            t.replaceAll(this._czArry),
            t.refresh();
            for (var e = this.list_yhl.dataProvider,
            i = [], n = 0; n < this._yhArry.length; n++) i.push(this._yhArry[n]);
            i.sort(function(t, e) {
                return e.state - t.state
            });
            var r = i.length;
            r = 20 - r;
            for (var n = 0; r > n; n++) i.push(null);
            e.replaceAll(i),
            e.refresh(),
            this._setSfPos()
        },
        i.prototype._clearSelected = function(t) {
            t.selectedIndex = void 0
        },
        i.prototype._onTouchYhJl = function(t) {
            var e = t.item;
            if (this._currentSelectedData !== e) {
                switch (t.currentTarget) {
                case this.list_cz:
                    this._clearSelected(this.list_yhl);
                    break;
                case this.list_yhl:
                    this._clearSelected(this.list_cz)
                }
                this._currentSelectedData = e,
                this._updatePetInfo(e)
            }
        },
        i.prototype._updatePetInfo = function(t) {
            var e = t.petData.info,
            i = e.level,
            n = e.name;
            this.txt_spName.text = "LV." + i + " " + n,
            this.head_icon.source = ClientConfig.getPetHeadPath(e.id);
            var r = e.hp,
            o = e.maxHp;
            this.txt_hp.text = "HP:" + r + "/" + o;
            var s = 323,
            a = Math.min(s, r / o * s);
            if (this.hp_bar.width = 0, egret.Tween.get(this.hp_bar).to({
                width: a
            },
            300, egret.Ease.quadOut), null != e && null != SkillXMLInfo.hideMovesMap[e.id]) if (null != e.hideSKill) {
                var _ = SkillXMLInfo.hideMovesMap[e.id];
                this.t4.text = "第五技能：" + SkillXMLInfo.getName(_),
                this.txt_wl.text = e.hideSKill.damage.toString();
                var h = e.hideSKill.maxPP;
                this.txt_pp.text = h + "/" + h;
                var u, l = SkillXMLInfo.getTypeID(_);
                u = 4 == SkillXMLInfo.getCategory(_) ? ClientConfig.getpettypeticon("prop") : ClientConfig.getpettypeticon(String(l)),
                this.icon_skill5.source = u,
                this.grp_noskill5.visible = !1,
                this.grp_showSkill5.visible = !0
            } else this.t4.text = "尚未开启第五技能",
            this.grp_noskill5.visible = !0,
            this.grp_showSkill5.visible = !1;
            else null != e && null == SkillXMLInfo.hideMovesMap[e.id] && (this.t4.text = "无法开启第五技能", this.grp_noskill5.visible = !0, this.grp_showSkill5.visible = !1);
            this.list_skill.dataProvider.removeAll();
            for (var c = 0; c < e.skillArray.length; c++) this.list_skill.dataProvider.addItem(e.skillArray[c]);
            this.imgBtn_sz1.visible = !t.igoneTitle,
            this.imgBtn_xz1.visible = t.igoneTitle;
            var p = this.list_cz.dataProvider.getItemAt(0);
            this.imgBtn_sf.visible = t.igoneTitle && p.petData.idx != t.petData.idx,
            this.grp_null.visible = !0,
            this.icon_jlxq.visible = !this.grp_null.visible
        },
        i.prototype._onTouchButtonHandler = function(e) {
            switch (e.currentTarget) {
            case this.imgBtn_battle:
                this._setCacheBattleArry();
                var i = t.DataMgr.Instance.GetCacheBattleArry();
                if (i.length > 0) if (this._callBack && this._caller) this._callBack.apply(this._caller, [i]),
                this.hide();
                else {
                    var n = this;
                    EventManager.addEventListener(PetFightEvent.ALARM_CLICK,
                    function(e) {
                        EventManager.removeEventListener(PetFightEvent.ALARM_CLICK, arguments.callee, n),
                        t.DataMgr.Instance.UpdateAllValue().then(function() {
                            t.DataMgr.Instance.dispatchEventWith(t.DataMgr.EVENT_COMPLETE_STEP)
                        })
                    },
                    n),
                    this.hide(),
                    setTimeout(function() {
                        t.DataMgr.Instance.C2S_GoBattle(i)
                    },
                    100)
                } else BubblerManager.getInstance().showText("至少选择一只精灵出战");
                break;
            case this.imgBtn_close:
                this.hide();
                break;
            case this.imgBtn_sf:
                this._changeShoufa(),
                this._upDateView(),
                this._updatePetInfo(this._currentSelectedData);
                break;
            case this.imgBtn_sz1:
                for (var r = !1,
                o = 0; o < this._czArry.length; o++) if (!this._czArry[o]) {
                    r = !0;
                    break
                }
                r ? (this._shanzhen(), this._upDateView(), this._updatePetInfo(this._currentSelectedData)) : BubblerManager.getInstance().showText("最多可以上阵" + this._limit + "只精灵");
                break;
            case this.imgBtn_xz1:
                this._xiaZhen(),
                this._upDateView(),
                this._updatePetInfo(this._currentSelectedData)
            }
        },
        i.prototype._xiaZhen = function() {
            for (var t, e = [], i = 0; i < this._czArry.length; i++) this._czArry[i] && this._czArry[i].petData.idx === this._currentSelectedData.petData.idx ? t = this._czArry[i].petData.idx: e.push(this._czArry[i]);
            for (var i = e.length; i < this._limit; i++) e.push(null);
            this._czArry = e;
            for (var i = 0; i < this._yhArry.length; i++) if (this._yhArry[i].petData.idx === t) {
                this._yhArry[i].state = 0,
                this._currentSelectedData = this._yhArry[i];
                break
            }
        },
        i.prototype._setSfPos = function() {
            var t = this.list_cz.dataProvider.getItemAt(0);
            if (this.img_sf.visible = null !== t, this.img_sf.visible) {
                this.list_cz.validateNow();
                var e = this.list_cz.getChildAt(0),
                i = e.img_sf.localToGlobal(),
                n = this.img_sf.parent.globalToLocal(i.x, i.y);
                this.img_sf.x = n.x,
                this.img_sf.y = n.y
            }
        },
        i.prototype._shanzhen = function() {
            for (var t, e = 0; e < this._yhArry.length; e++) if (this._yhArry[e] && this._yhArry[e].petData.idx === this._currentSelectedData.petData.idx) {
                this._yhArry[e].state = 1,
                t = this._yhArry[e];
                break
            }
            var i = {};
            i.petData = t.petData,
            i.igoneTitle = !0,
            i.state = t.state;
            for (var e = 0; e < this._czArry.length; e++) if (!this._czArry[e]) {
                this._czArry[e] = i;
                break
            }
            this._currentSelectedData = i
        },
        i.prototype._changeShoufa = function() {
            for (var t, e = 0; e < this._czArry.length; e++) if (this._czArry[e].petData.idx === this._currentSelectedData.petData.idx) {
                t = e;
                break
            }
            this._czArry[t] = this._czArry[0],
            this._czArry[0] = this._currentSelectedData
        },
        i.prototype._setCacheBattleArry = function() {
            for (var e = this.list_cz.dataProvider,
            i = [], n = 0; n < e.length; n++) {
                var r = e.getItemAt(n);
                r && i.push(r.petData.idx)
            }
            t.DataMgr.Instance.SetCacheBattleArry(i)
        },
        i.prototype.destroy = function() {
            this.list_cz.removeChildren(),
            this.list_cz.dataProvider.removeAll(),
            this.list_yhl.removeChildren(),
            this.list_yhl.dataProvider.removeAll(),
            this.list_skill.removeChildren(),
            this.list_skill.dataProvider.removeAll(),
            e.prototype.destroy.call(this)
        },
        i
    } (PopView);
    t.ReadyBattlePop = e,
    __reflect(e.prototype, "pveTrek.ReadyBattlePop")
} (pveTrek || (pveTrek = {}));
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
pveTrek; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i._currentSelectedArry = [],
            i.skinName = t.PetShopSkin,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.list_item.itemRenderer = t.ShopItem,
            this.list_item.dataProvider = new eui.ArrayCollection
        },
        i.prototype.initEvents = function() {
            ImageButtonUtil.add(this.btnCancel, this._onTouchTapButtonHandler, this),
            ImageButtonUtil.add(this.btnClose, this._onTouchTapButtonHandler, this),
            ImageButtonUtil.add(this.btnOk, this._onTouchTapButtonHandler, this),
            this.list_item.addEventListener(eui.ItemTapEvent.ITEM_TAP, this._onTouchShopItemHanlder, this),
            this.list_item.allowMultipleSelection = !0
        },
        i.prototype.removeEvents = function() {
            ImageButtonUtil.removeAll(this),
            this.list_item.removeEventListener(eui.ItemTapEvent.ITEM_TAP, this._onTouchShopItemHanlder, this)
        },
        i.prototype._parseData = function() {},
        i.prototype._upDateView = function() {
            this.icon.source = ClientConfig.GetItemUserIcon(t.DataMgr.Instance.USER_INFO_MIJING_ID);
            for (var e = t.DataMgr.Instance.GetTaskEventId(), i = 0; 3 > i; i++) {
                var n = e >> 8 * i & 255;
                if (n > 0) var r = t.DataMgr.Instance.GetShopConfig(n);
                this.list_item.dataProvider.addItem(r)
            }
            this._updateSelctedComplete()
        },
        i.prototype._onTouchShopItemHanlder = function(t) {
            var e = t.item;
            e.selected && (e.selected = !1),
            this._updateSelctedComplete()
        },
        i.prototype._updateSelctedComplete = function() {
            console.log("当前选中的道具为%o", this.list_item.selectedIndices);
            for (var t = this.list_item.selectedIndices.length,
            e = 0,
            i = 0; t > i; i++) {
                var n = this.list_item.selectedIndices[i];
                e += this.list_item.dataProvider.getItemAt(n).cost
            }
            this._costNum = e,
            this.txt_itemCount.text = "需要迷晶：" + e
        },
        i.prototype._onTouchTapButtonHandler = function(e) {
            var i = this;
            switch (e.currentTarget) {
            case this.btnCancel:
            case this.btnClose:
                t.DataMgr.Instance.C2S_Shop_GiveUp().then(function() {
                    i.hide(),
                    t.DataMgr.Instance.dispatchEventWith(t.DataMgr.EVENT_COMPLETE_STEP)
                });
                break;
            case this.btnOk:
                if (0 === this.list_item.selectedIndices.length) return void BubblerManager.getInstance().showText("当前没有选择要购买的物品");
                var n = t.DataMgr.Instance.GetMiJIngCnt();
                if (n < this._costNum) return void Alarm.show("迷晶数量不足！");
                t.DataMgr.Instance.C2S_Shop(this.list_item.selectedIndices).then(function(e) {
                    for (var n = [], r = 0; r < i.list_item.selectedIndices.length; r++) {
                        var o = i.list_item.selectedIndices[r],
                        s = i.list_item.dataProvider.getItemAt(o),
                        a = e >> 8 * o & 255,
                        _ = "";
                        if (s.alarm) {
                            var h = s.alarm.split("_");
                            if (_ = h[h.length - 1], a > 0) {
                                var u = t.DataMgr.Instance.GetPetInfoDataByIdx(a - 1);
                                _ = h[0].replace("$", u.info.name)
                            }
                            n.push(_)
                        }
                    }
                    i.hide(),
                    (0 === n.length || n.length < i.list_item.selectedIndices.length) && Alarm.show("购买成功，赛尔能力得到加强！");
                    for (var r = 0; r < n.length; r++) Alarm.show(n[r]);
                    t.DataMgr.Instance.dispatchEventWith(t.DataMgr.EVENT_COMPLETE_STEP)
                })
            }
        },
        i.prototype.destroy = function() {
            e.prototype.destroy.call(this)
        },
        i
    } (PopView);
    t.ShopPop = e,
    __reflect(e.prototype, "pveTrek.ShopPop")
} (pveTrek || (pveTrek = {}));
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
pveTrek; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.skinName = t.ShowSortPopSkin,
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
    __reflect(e.prototype, "pveTrek.SortPop")
} (pveTrek || (pveTrek = {}));
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
pveTrek; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.skinName = t.BufferItemSkin,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this)
        },
        i.prototype.dataChanged = function() {
            var e, i = this.data.type,
            n = this.data.buff;
            e = "buff" === i ? t.DataMgr.Instance.GetBuffConfig(n) : t.DataMgr.Instance.GetDebuffConfig(n),
            this.txt_buffer.text = e.Des,
            this.txt_buffer.validateNow(),
            this.height = this.txt_buffer.y + this.txt_buffer.height
        },
        i
    } (eui.ItemRenderer);
    t.BufferItem = e,
    __reflect(e.prototype, "pveTrek.BufferItem")
} (pveTrek || (pveTrek = {}));
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
pveTrek; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.skinName = t.DispatchPetItemSkin,
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
                this.flag_select.visible = t,
                this.flag_selcted_head.visible = t,
                egret.superSetter(i, this, "selected", t)
            },
            enumerable: !0,
            configurable: !0
        }),
        i.prototype.dataChanged = function() {
            var e = this.data;
            this.txt_rate.text = "+" + e.rate + "%",
            this.head.source = ClientConfig.getPetHeadPath(e.petInfoData.info.id),
            this.img_jy.visible = this.img_yzw.visible = this.img_ypq.visible = !1,
            t.DataMgr.Instance.GetPetDieState(e.petInfoData.idx) ? (this.img_yzw.visible = !0, DisplayUtil.setEnabled(this, !1, !0)) : t.DataMgr.Instance.GetPetDispatchState(e.petInfoData.idx) ? (this.img_ypq.visible = !0, DisplayUtil.setEnabled(this, !1, !0)) : t.DataMgr.Instance.GetPetDisenableState(e.petInfoData.idx) ? (this.img_jy.visible = !0, DisplayUtil.setEnabled(this, !1, !0)) : DisplayUtil.setEnabled(this, !0, !1)
        },
        i
    } (eui.ItemRenderer);
    t.DispatchPetItem = e,
    __reflect(e.prototype, "pveTrek.DispatchPetItem")
} (pveTrek || (pveTrek = {}));
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
pveTrek; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.skinName = t.MonsterItemSkin,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this)
        },
        i.prototype.dataChanged = function() {
            var t = this.data,
            e = PetXMLInfo.getName(t);
            this.lab_name.text = StringUtil.parseStrLimitLen(e, 6),
            this.head.source = ClientConfig.getPetHeadPath(t)
        },
        i
    } (eui.ItemRenderer);
    t.MonsterItem = e,
    __reflect(e.prototype, "pveTrek.MonsterItem")
} (pveTrek || (pveTrek = {}));
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
pveTrek; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.skinName = t.OptionItemSkin,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this)
        },
        i.prototype.dataChanged = function() {
            var t = this.data;
            this.txt_answer.text = t.answer
        },
        i
    } (eui.ItemRenderer);
    t.OptionItem = e,
    __reflect(e.prototype, "pveTrek.OptionItem")
} (pveTrek || (pveTrek = {}));
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
pveTrek; !
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
    __reflect(e.prototype, "pveTrek.PageItem")
} (pveTrek || (pveTrek = {}));
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
pveTrek; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.skinName = t.PetHeadBigSkinSkin,
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
                this.flag_selectd.visible = t,
                egret.superSetter(i, this, "selected", t)
            },
            enumerable: !0,
            configurable: !0
        }),
        i.prototype.dataChanged = function() {
            this._info = this.data,
            this.group_info.visible = Boolean(this._info),
            this.touchEnabled = this.touchChildren = this.group_info.visible,
            this._info && (this.txtName.text = StringUtil.parseStrLimitLen(this._info.name, 6), this.head.source = ClientConfig.getPetHeadPath(this._info.id), this.txtLv.text = "Lv." + this._info.level)
        },
        i
    } (eui.ItemRenderer);
    t.PetHeadBigItem = e,
    __reflect(e.prototype, "pveTrek.PetHeadBigItem")
} (pveTrek || (pveTrek = {}));
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
pveTrek; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.skinName = t.PetHeadSmallSkin,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.flag_selectd.visible = !1
        },
        Object.defineProperty(i.prototype, "selected", {
            get: function() {
                return egret.superGetter(i, this, "selected")
            },
            set: function(t) {
                this.flag_selectd.visible = t,
                egret.superSetter(i, this, "selected", t)
            },
            enumerable: !0,
            configurable: !0
        }),
        i.prototype.dataChanged = function() {
            this._info = this.data,
            this.group_info.visible = null !== this._info && void 0 !== this._info,
            this.touchEnabled = this.touchChildren = this.group_info.visible,
            this._info && (this.txt_name.text = StringUtil.parseStrLimitLen(this._info.name, 6), this.icon.source = ClientConfig.getPetHeadPath(this._info.id), this.txt_lv.text = "Lv." + this._info.level)
        },
        i
    } (eui.ItemRenderer);
    t.PetHeadSmallItem = e,
    __reflect(e.prototype, "pveTrek.PetHeadSmallItem")
} (pveTrek || (pveTrek = {}));
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
pveTrek; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.skinName = t.PetMarkItemSkinSkin,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this)
        },
        i.prototype.dataChanged = function() {
            if (this.icon.visible = this.data > 0, this.icon.visible) {
                var t = CountermarkXMLInfo.getMarkId(this.data);
                this.icon.source = CountermarkXMLInfo.getIconURL(t)
            }
        },
        i
    } (eui.ItemRenderer);
    t.PetMarkItem = e,
    __reflect(e.prototype, "pveTrek.PetMarkItem")
} (pveTrek || (pveTrek = {}));
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
pveTrek; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.skinName = t.PetSkillItemSkinSkin,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this)
        },
        i.prototype.dataChanged = function() {
            "number" == typeof this.data ? this.update(this.data) : this.update(this.data.id, this.data.pp)
        },
        i.prototype.update = function(t, e) {
            void 0 === e && (e = -1),
            this.skill_name.text = SkillXMLInfo.getName(t);
            var i = SkillXMLInfo.getTypeID(t),
            n = "";
            n = 4 == SkillXMLInfo.getCategory(t) ? ClientConfig.getpettypeticon("prop") : ClientConfig.getpettypeticon(String(i)),
            this.skill_type.source = n,
            this.txt_wl.text = SkillXMLInfo.getDamage(t).toString();
            var r = SkillXMLInfo.getPP(t).toString(); - 1 == e ? this.txt_pp.text = r + "/" + r: this.txt_pp.text = e + "/" + r
        },
        i
    } (eui.ItemRenderer);
    t.PetSkillItem = e,
    __reflect(e.prototype, "pveTrek.PetSkillItem")
} (pveTrek || (pveTrek = {}));
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
pveTrek; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.addEventListener(egret.Event.REMOVED_FROM_STAGE, i.destroy, i),
            i.skinName = t.RedayBattlePetHeadItemSkin,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this)
        },
        i.prototype.dataChanged = function() {
            if (this.currentState = this.data ? "state_normal": "state_null", this.validateNow(), this.touchEnabled = !1, this.touchChildren = !1, this.data) {
                var t = this.data;
                this.icon.source = ClientConfig.getPetHeadPath(t.petData.info.id),
                this.icon_type.source = ClientConfig.getpettypeticon(PetXMLInfo.getType(t.petData.info.id)),
                this.txt_lvl0.text = "Lv." + t.petData.info.level,
                this.img_jy.visible = !t.igoneTitle && -1 === t.state,
                this.img_sz.visible = !t.igoneTitle && 1 === t.state,
                this.img_yzw.visible = !t.igoneTitle && -2 === t.state,
                this.img_ypq.visible = !t.igoneTitle && -3 === t.state;
                var e = 0 === t.state || t.igoneTitle;
                DisplayUtil.setEnabled(this, e, !e)
            }
        },
        Object.defineProperty(i.prototype, "selected", {
            get: function() {
                return egret.superGetter(i, this, "selected")
            },
            set: function(t) {
                this.img_selecte.visible = t,
                egret.superSetter(i, this, "selected", t)
            },
            enumerable: !0,
            configurable: !0
        }),
        i.prototype.destroy = function() {
            this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this)
        },
        i
    } (eui.ItemRenderer);
    t.RedayBattlePetHeadItem = e,
    __reflect(e.prototype, "pveTrek.RedayBattlePetHeadItem")
} (pveTrek || (pveTrek = {}));
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
pveTrek; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.skinName = t.RewardItemSkin,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this)
        },
        i.prototype.dataChanged = function() {
            var t = this.data,
            e = core.gameUtil.RewardDataFormat.GetDefaultRewardIconUrl(t);
            this.icon.source = e,
            this.icon.width = this.icon.height = 55,
            this.txt_cnt.text = t.count + ""
        },
        i
    } (eui.ItemRenderer);
    t.RewardItem = e,
    __reflect(e.prototype, "pveTrek.RewardItem")
} (pveTrek || (pveTrek = {}));
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
pveTrek; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.skinName = t.ShopItemSkin,
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
                this.flag_selcted.visible = t,
                egret.superSetter(i, this, "selected", t)
            },
            enumerable: !0,
            configurable: !0
        }),
        i.prototype.dataChanged = function() {
            var t = this.data;
            this.txt_desc.text = t.Des
        },
        i
    } (eui.ItemRenderer);
    t.ShopItem = e,
    __reflect(e.prototype, "pveTrek.ShopItem")
} (pveTrek || (pveTrek = {}));
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
pveTrek; !
function(t) {
    var e; !
    function(t) {
        t.MODE = "mode",
        t.LEVEL = "level",
        t.BOSS = "boss"
    } (e || (e = {}));
    var i = function(i) {
        function n() {
            var e = i.call(this) || this;
            return e._flagInit = !1,
            e._currentLevelItems = [],
            e.skinName = t.PvetrekmodeSkin,
            e
        }
        return __extends(n, i),
        n.prototype.childrenCreated = function() {
            i.prototype.childrenCreated.call(this),
            this._playerView = new ClothPreview,
            this.seerGroup.addChild(this._playerView),
            this._playerView.setPosition(0, 0),
            this._addEvents(),
            this._flagInit = !0,
            this._itemInfo(),
            this.updateAll()
        },
        n.prototype._addEvents = function() {
            ImageButtonUtil.add(this.btnReady, this._onTouchEventHandler, this),
            ImageButtonUtil.add(this.btnClose, this._onTouchEventHandler, this),
            ImageButtonUtil.add(this.btnState, this._onTouchEventHandler, this),
            ImageButtonUtil.add(this.helpBtn_png, this._onTouchEventHandler, this),
            ImageButtonUtil.add(this.itemIcon,
            function() {
                tipsPop.TipsPop.openItemPop({
                    type: 3,
                    id: t.DataMgr.Instance.USER_INFO_MIJING_ID
                })
            },
            this);
            for (var e = 0; 5 > e; e++) ImageButtonUtil.add(this["p" + e], this._onTouchStarHanlder.bind(this, e), this);
            t.DataMgr.Instance.addEventListener(t.DataMgr.EVENT_CLICK_EVENTITEMCOMP, this._onTouchTapEventItem, this),
            t.DataMgr.Instance.addEventListener(t.DataMgr.EVENT_COMPLETE_STEP, this._onCompleteStep, this),
            t.DataMgr.Instance.addEventListener(t.DataMgr.EVENT_ON_DISPATCH_COMPLETE, this._onDispatchComplete, this),
            EventManager.addEventListener(GameEvent.NOTIFY_ITEM_CHANGE, this._itemInfo, this)
        },
        n.prototype._removeEvents = function() {
            t.DataMgr.Instance.removeEventListener(t.DataMgr.EVENT_CLICK_EVENTITEMCOMP, this._onTouchTapEventItem, this),
            t.DataMgr.Instance.removeEventListener(t.DataMgr.EVENT_COMPLETE_STEP, this._onCompleteStep, this),
            t.DataMgr.Instance.removeEventListener(t.DataMgr.EVENT_ON_DISPATCH_COMPLETE, this._onDispatchComplete, this),
            EventManager.removeEventListener(GameEvent.NOTIFY_ITEM_CHANGE, this._itemInfo, this),
            ImageButtonUtil.removeAll(this)
        },
        n.prototype.UpdateView = function(t) {
            this.updateAll()
        },
        n.prototype.updateAll = function() {
            var e = this;
            if (this._flagInit) {
                if (t.DataMgr.Instance.GetMaxState()) return void t.DataMgr.Instance.dispatchEventWith(t.DataMgr.EVENT_ONCHANGE_VIEW, !1, t.ViewType.MAIN);
                if (this.levelGroup.visible = !1, this.bossGroup.visible = !1, this.modeGroup.visible = !1, t.DataMgr.Instance.GetSelcedStepState()) return void this._showModeGroup();
                this._currLevelStep = t.DataMgr.Instance.GetCurrentTask(),
                this._oldMainStep = t.DataMgr.Instance.GetGameMainStep();
                var i = t.DataMgr.Instance.GetTaskEventId();
                if (5 === this._currLevelStep) i > 0 ? this._showBossLevel() : t.DataMgr.Instance.C2S_SelectedEventStep(1).then(function() {
                    e._showBossLevel()
                });
                else if (this._showLevelMode(this._currLevelStep), i > 0) {
                    var n = t.DataMgr.Instance.GetChildStep(),
                    r = t.DataMgr.Instance.GetConfigTaskByTaskAndStep(this._currLevelStep, n),
                    o = t.DataMgr.Instance.GetClientTaskConfig(r.id);
                    this._onSelectedTask(o)
                }
                this._setDispatch(),
                this._itemInfo()
            }
        },
        n.prototype._itemInfo = function() {
            this.itemIcon.source = ClientConfig.GetItemUserIcon(t.DataMgr.Instance.USER_INFO_MIJING_ID);
            virtualItem.UserInfoIconManger.Instance.GetItemByType(t.DataMgr.Instance.USER_INFO_MIJING_ID).desc;
            this.txt_itemCount.text = "" + t.DataMgr.Instance.GetMiJIngCnt()
        },
        n.prototype._showModeGroup = function() {
            this._currentModeState = e.MODE,
            this.title.source = "pveTrekMode_tiile_xjmh_png",
            this.modeGroup.visible = !0;
            for (var i = t.DataMgr.Instance.GetCurrentCanSelctedStep(), n = 0; 5 > n; n++) this["lock_" + n].visible = n + 1 > i,
            this["clear_" + n].visible = i > n + 1,
            this["selcted_" + n].visible = n + 1 === i,
            this["p" + n].touchEnabled = this["p" + n].touchChildren = n + 1 === i
        },
        n.prototype._showLevelMode = function(i) {
            this._currentModeState = e.LEVEL,
            this.levelGroup.visible = !0;
            var n = ["pveTrekLevel_title_gk1_png", "pveTrekLevel_title_gk2_png", "pveTrekLevel_title_gk3_png", "pveTrekLevel_title_gk4_png"];
            this.title.source = n[i - 1];
            for (var r = 1; 4 >= r; r++) this["level_line_" + r].visible = r === i;
            this.Grp_items.removeChildren();
            for (var o = t.DataMgr.Instance.GetClientCfgByLevelData(i), r = 0; r < o.length; r++) {
                var s;
                this._currentLevelItems.length > r ? (s = this._currentLevelItems[r], s.UpdateData(o[r])) : (s = new t.EventItemComp(o[r]), this._currentLevelItems.push(s)),
                s.x = o[r].x,
                s.y = o[r].y,
                s.horizontalCenter = o[r].horizontalCenter,
                this.Grp_items.addChild(s)
            }
            this._setLevelItemSelectState()
        },
        n.prototype._setLevelItemSelectState = function() {
            var e, i = t.DataMgr.Instance.GetChildStep(),
            n = t.DataMgr.Instance.GetCompleteStepIds(),
            r = this.Grp_items.numChildren,
            o = t.DataMgr.Instance.GetTaskEventId();
            if (0 === i) e = t.DataMgr.Instance.GetStartConfig(this._currLevelStep);
            else if (o > 0) {
                var s = t.DataMgr.Instance.GetConfigTaskByTaskAndStep(this._currLevelStep, i);
                e = [s.id]
            } else {
                var a = n[n.length - 1],
                _ = t.DataMgr.Instance.GetConfigTaskByTaskAndStep(this._currLevelStep, a),
                h = t.DataMgr.Instance.GetClientTaskConfig(_.id),
                u = h.nextId.split("_");
                e = u.map(function(t) {
                    return + t
                })
            }
            this._currentSeletedIds = e;
            for (var l = 0; r > l; l++) {
                var c = this.Grp_items.getChildAt(l),
                p = c.data,
                g = t.DataMgr.Instance.GetConfigTask(p.id);
                c.SetYwcFlag(n.indexOf(g.step) > -1),
                c.SetSelectedFlag(e.indexOf(p.id) > -1)
            }
        },
        n.prototype._showBossLevel = function() {
            var i = this;
            this._currentModeState = e.BOSS,
            this.bossGroup.visible = !0,
            this.title.source = "pveTrekBoss_title_zzgk_png",
            this.txt_titleName.text = AchieveXMLInfo.getTitle(t.DataMgr.Instance.titleID),
            this._playerView.show(t.DataMgr.Instance.GetClohesData(t.DataMgr.Instance.clothesIDs)),
            this.txt_myName.text = MainManager.actorInfo.nick;
            var n = t.DataMgr.Instance.GetTaskEventId(),
            r = t.DataMgr.Instance.GetConfigFinalBoss(n),
            o = +r.monsterid;
            this.txt_Bossname.text = PetXMLInfo.getName(o);
            RES.getResByUrl(ClientConfig.getfightPetPng(PetXMLInfo.getRealId(Number(o)) + ""),
            function(t) {
                var e = t.textureWidth,
                n = t.textureHeight;
                i.icon_boss.anchorOffsetX = e / 2,
                i.icon_boss.anchorOffsetY = n,
                i.icon_boss.source = t,
                i.icon_boss.x = i.icon_boss.y = 0,
                3821 == o && (i.icon_boss.x = 10, i.icon_boss.y = 120)
            },
            this)
        },
        n.prototype.show = function() {},
        n.prototype._doCompleteTask = function() {
            var e = this;
            if (!t.DataMgr.Instance.CheckHavePetBattleState()) return void Alarm.show("可上阵精灵数量为0，挑战失败！",
            function() {
                t.DataMgr.Instance.GetEntryCnt() < t.DataMgr.Instance.DAILY_ENTRY_MAX_CNT ? t.DataMgr.Instance.C2S_ResetGame().then(function() {
                    t.DataMgr.Instance.dispatchEventWith(t.DataMgr.EVENT_ONCHANGE_VIEW, !1, t.ViewType.MAIN)
                }) : t.DataMgr.Instance.dispatchEventWith(t.DataMgr.EVENT_ONCHANGE_VIEW, !1, t.ViewType.MAIN)
            });
            if (this._oldMainStep < t.DataMgr.Instance.GetGameMainStep()) {
                var i = ["无尽长廊", "无尽大海", "无尽天空", "无尽深渊", "无尽星辰"];
                Alarm.show(i[this._currLevelStep - 1] + "探险完成！",
                function() {
                    e.updateAll()
                })
            } else this._setLevelItemSelectState(),
            this._setDispatch()
        },
        n.prototype._setDispatch = function() {
            var e = t.DataMgr.Instance.GetDispachState(),
            i = t.DataMgr.Instance.GetDispatchHalfCntList(),
            n = t.DataMgr.Instance.GetDispathEventTypes();
            this._dispatchList = [];
            for (var r = 0; r < i.length; r++) {
                var o = i[r];
                0 === o && e[r] > 0 && n[r] > 0 && this._dispatchList.push({
                    task: r + 2,
                    state: e[r],
                    type: n[r]
                })
            }
            this._next()
        },
        n.prototype._next = function() {
            for (; this._dispatchList.length > 0;) {
                var e = this._dispatchList.shift(),
                i = e.state,
                n = PopViewManager.createDefaultStyleObject();
                n.caller = this,
                n.clickMaskHandler = function() {};
                var r;
                2 === i ? (r = new t.DispatchFaildPop, PopViewManager.getInstance().openView(r, n, e)) : (r = new t.DispatchSucessfulPop, PopViewManager.getInstance().openView(r, n, e))
            }
            this._itemInfo()
        },
        n.prototype._onDispatchComplete = function(e) {
            var i = this,
            n = e.data;
            2 === n.state ? t.DataMgr.Instance.C2S_Dispatch_Over(n.task).then(function() {
                i._next()
            }) : (EventManager.addEventListener(AwardEvent.CLOSE_AWARD_DIALOG, this._onTouchRewardPop, this), t.DataMgr.Instance.C2S_Dispatch_Over(n.task))
        },
        n.prototype._onTouchRewardPop = function() {
            EventManager.removeEventListener(AwardEvent.CLOSE_AWARD_DIALOG, this._onTouchRewardPop, this),
            this._next()
        },
        n.prototype._onTouchEventHandler = function(i) {
            switch (i.currentTarget) {
            case this.btnClose:
                this.dispatchEventWith(t.DataMgr.EVENT_CLOSE_VIEW, !1, t.ViewType.LEVEL);
                break;
            case this.btnState:
                var n = t.DataMgr.Instance.GetBuffList(),
                r = t.DataMgr.Instance.GetDebuffList();
                r.length > 0 || n.length > 0 ? PopViewManager.getInstance().openView(new t.BufferStatePop, null, {
                    buff: n,
                    debuff: r
                }) : Alarm.show("还未获得任何状态！");
                break;
            case this.helpBtn_png:
                if (this.currentState == e.MODE) {
                    var o = config.Help_tips.getItem(1),
                    s = {};
                    s.str = StringUtil.TransformLineBreak(o.tips)
                } else PopViewManager.getInstance().openView(new t.LevelTipsPop);
                break;
            case this.btnReady:
                PopViewManager.getInstance().openView(new t.ReadyBattlePop)
            }
        },
        n.prototype._onTouchStarHanlder = function(e, i) {
            var n = this;
            console.log("当前选择的关卡索引为%i", e);
            var r = e + 1,
            o = t.DataMgr.Instance.GetCurrentCanSelctedStep();
            o === r && t.DataMgr.Instance.C2S_EntryTask(r).then(function() {
                n.updateAll()
            })
        },
        n.prototype._clearItemComp = function() {
            for (var t = 0; t < this._currentLevelItems.length; t++) {
                var e = this._currentLevelItems[t];
                DisplayUtil.removeForParent(e),
                e.destroy()
            }
            this._currentLevelItems = []
        },
        n.prototype._onTouchTapEventItem = function(e) {
            var i = this,
            n = e.data,
            r = n.data,
            o = t.DataMgr.Instance.GetConfigTask(r.id);
            if (this._currentSeletedIds.indexOf(r.id) >= 0) {
                var s = t.DataMgr.Instance.GetTaskEventId();
                s > 0 ? this._onSelectedTask(r) : t.DataMgr.Instance.C2S_SelectedEventStep(o.step).then(function() {
                    i._setLevelItemSelectState(),
                    i._onSelectedTask(r)
                })
            }
        },
        n.prototype._onSelectedTask = function(e) {
            var i, n = this,
            r = t.DataMgr.Instance.GetConfigTask(e.id),
            o = t.DataMgr.Instance.GetTaskItemType(r);
            if (5 === o) return void t.DataMgr.Instance.C2S_GetReward().then(function() {
                n._doCompleteTask()
            });
            var s;
            switch (o) {
            case 6:
                i = new t.ShopPop;
                break;
            case 4:
                i = new t.RandomAnswerPop;
                break;
            case 1:
                i = new t.BattleMonsterPop,
                s = 1;
                break;
            case 2:
                s = 2,
                i = new t.BattleMonsterPop;
                break;
            case 3:
                i = new t.PetDispatchPop
            }
            var a = PopViewManager.createDefaultStyleObject();
            a.caller = this,
            a.clickMaskHandler = function() {},
            PopViewManager.getInstance().openView(i, a, s)
        },
        n.prototype._onCompleteStep = function(t) {
            this._doCompleteTask(),
            this._itemInfo()
        },
        n.prototype.destroy = function() {
            this._clearItemComp(),
            this._removeEvents(),
            this._playerView.destroy(),
            this._clearItemComp(),
            i.prototype.destroy.call(this)
        },
        n
    } (BaseModule);
    t.LevelView = i,
    __reflect(i.prototype, "pveTrek.LevelView", ["pveTrek.IView"])
} (pveTrek || (pveTrek = {}));
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
pveTrek; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i._flagInit = !1,
            i.skinName = t.PvetrekmainSkin,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.flagYwc.visible = !1,
            this._addEvents(),
            this._flagInit = !0;
            var i = t.DataMgr.Instance.GetConfigFinalBoss(1),
            n = core.gameUtil.RewardDataFormat.parseRewardStyle1(i.rewardtype, i.rewardid, i.rewardcnt),
            r = this.list_reward.dataProvider;
            r.removeAll(),
            this.list_reward.itemRenderer = t.RewardItem;
            for (var o = 0; o < n.length; o++) r.addItem(n[o]);
            this._initHanlder()
        },
        i.prototype._addEvents = function() {
            ImageButtonUtil.add(this.btnClose, this._onTouchEventHandler, this),
            ImageButtonUtil.add(this.btnContinue, this._onTouchEventHandler, this),
            ImageButtonUtil.add(this.btnRest, this._onTouchEventHandler, this),
            ImageButtonUtil.add(this.btnStart, this._onTouchEventHandler, this),
            ImageButtonUtil.add(this.helpBtn, this._onTouchEventHandler, this),
            ImageButtonUtil.add(this.btnReward, this._onTouchEventHandler, this),
            this.list_reward.addEventListener(eui.ItemTapEvent.ITEM_TAP, this._onTouchTapReward, this)
        },
        i.prototype._removeEvents = function() {
            ImageButtonUtil.removeAll(this),
            this.list_reward.removeEventListener(eui.ItemTapEvent.ITEM_TAP, this._onTouchTapReward, this)
        },
        i.prototype._initHanlder = function() {
            if (this._flagInit) {
                var e = t.DataMgr.Instance.GetGameMainStep(),
                i = t.DataMgr.Instance.GetEntryCnt();
                if (this.grp_btns.visible = !1, this.btnStart.visible = !1, this.btnContinue.visible = !1, this.btnRest.visible = !1, this.flagYwc.visible = !1, 13 === e && i > 0) this.flagYwc.visible = !0,
                this.txtCount_1.text = "";
                else {
                    this.grp_btns.visible = !0;
                    var n = i < t.DataMgr.Instance.DAILY_ENTRY_MAX_CNT;
                    if (this.btnStart.visible = 0 === e || 13 === e, this.btnRest.visible = this.btnContinue.visible = !this.btnStart.visible, this.btnStart.visible && DisplayUtil.setEnabled(this.btnStart, n, !n), this.btnContinue.visible) {
                        var r = 13 > e;
                        DisplayUtil.setEnabled(this.btnContinue, r, !r)
                    }
                    this.txtCount_1.text = "今日可探险次数：" + (t.DataMgr.Instance.DAILY_ENTRY_MAX_CNT - i)
                }
                var o = 13 === e && !t.DataMgr.Instance.GetFinalRewardState();
                DisplayUtil.setEnabled(this.btnReward, o, !o)
            }
        },
        i.prototype.UpdateView = function(t) {
            this._initHanlder()
        },
        i.prototype._onTouchEventHandler = function(e) {
            var i = this;
            switch (e.currentTarget) {
            case this.btnClose:
                this.dispatchEventWith(t.DataMgr.EVENT_CLOSE_VIEW, !1, t.ViewType.MAIN);
                break;
            case this.btnContinue:
                var n = t.DataMgr.Instance.GetGameMainStep();
                2 > n ? t.DataMgr.Instance.dispatchEventWith(t.DataMgr.EVENT_ONCHANGE_VIEW, !1, t.ViewType.SET_SEER_INFO) : 3 > n ? t.DataMgr.Instance.dispatchEventWith(t.DataMgr.EVENT_ONCHANGE_VIEW, !1, t.ViewType.SET_PET_INFO) : t.DataMgr.Instance.dispatchEventWith(t.DataMgr.EVENT_ONCHANGE_VIEW, !1, t.ViewType.LEVEL);
                break;
            case this.btnRest:
                Alert.show("确定清空任务进度吗",
                function() {
                    t.DataMgr.Instance.C2S_ResetGame().then(function() {
                        i.UpdateView()
                    })
                });
                break;
            case this.btnStart:
                var r = t.DataMgr.Instance.GetGameMainStep(),
                o = t.DataMgr.Instance.GetFinalRewardState();
                13 !== r || o ? t.DataMgr.Instance.C2S_Start_Trek().then(function() {
                    t.DataMgr.Instance.dispatchEventWith(t.DataMgr.EVENT_ONCHANGE_VIEW, !1, t.ViewType.SET_SEER_INFO)
                }) : Alert.show("昨日通关奖励还未领取，确认不领奖直接重新开始远航吗？",
                function() {
                    t.DataMgr.Instance.C2S_Start_Trek().then(function() {
                        t.DataMgr.Instance.dispatchEventWith(t.DataMgr.EVENT_ONCHANGE_VIEW, !1, t.ViewType.SET_SEER_INFO)
                    })
                });
                break;
            case this.helpBtn:
                var s = config.Help_tips.getItem(1),
                a = {};
                a.str = StringUtil.TransformLineBreak(s.tips),
                tipsPop.TipsPop.openHelpPop(a);
                break;
            case this.btnReward:
                t.DataMgr.Instance.C2S_GetFinalReward().then(function() {
                    i.UpdateView()
                })
            }
        },
        i.prototype._onTouchTapReward = function(t) {
            var e = {},
            i = t.item;
            e.id = i.id,
            e.type = i.type,
            tipsPop.TipsPop.openItemPop(e)
        },
        i.prototype.destroy = function() {
            this._removeEvents(),
            e.prototype.destroy.call(this)
        },
        i
    } (BaseModule);
    t.MainView = e,
    __reflect(e.prototype, "pveTrek.MainView", ["pveTrek.IView"])
} (pveTrek || (pveTrek = {}));
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
pveTrek; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i._flagInit = !1,
            i._selectedLimist = 20,
            i._petLevelLimit = 70,
            i.skinName = t.PvetreksetpetsSkin,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this._readyList = [],
            this._petBag_czList = [],
            this._petBag_dmList = [];
            for (var i = 0; 6 > i; i++) this._petBag_czList.push(this["czHead_" + i]),
            this._petBag_dmList.push(this["dmHead_" + i]);
            this.list_page.itemRenderer = t.PageItem,
            this.list_page.dataProvider = new eui.ArrayCollection,
            this.scroller_current.viewport = this.list_selcted,
            this._cz_list = this.list_selcted.dataProvider,
            this._cz_list.removeAll(),
            this.list_selcted.itemRenderer = t.PetHeadBigItem,
            this.scroller_warehouse.viewport = this.list_warehouse,
            this._warehouseOrElite_list = this.list_warehouse.dataProvider,
            this._warehouseOrElite_list.removeAll(),
            this.list_warehouse.itemRenderer = t.PetHeadBigItem,
            this.txt_lab.textFlow = [{
                text: "最多可选择",
                style: {
                    textColor: 10270182
                }
            },
            {
                text: "20只70级以上",
                style: {
                    textColor: 16773733
                }
            },
            {
                text: "的精灵",
                style: {
                    textColor: 10270182
                }
            }],
            this._flagInit = !0,
            this._initHanlder(),
            this._addEvents()
        },
        i.prototype._addEvents = function() {
            ImageButtonUtil.add(this.btnClose, this._onTouchEventHandler, this),
            ImageButtonUtil.add(this.btnSearch, this._onTouchEventHandler, this),
            ImageButtonUtil.add(this.btnStart, this._onTouchEventHandler, this),
            ImageButtonUtil.add(this.btnBack, this._onTouchEventHandler, this),
            ImageButtonUtil.add(this.group_petType, this._onTouchEventHandler, this, !1, !1),
            ImageButtonUtil.add(this.group_sort, this._onTouchEventHandler, this, !1, !1),
            ImageButtonUtil.add(this.btnOnetap, this._onTouchEventHandler, this, !1, !1),
            this.editable_search.addEventListener(egret.Event.CHANGE, this._onChangeSearchHanlder, this),
            this.rb_bag.group.addEventListener(egret.Event.CHANGE, this._onChangeNavBarHandler, this);
            for (var t = 0; 6 > t; t++) this._petBag_czList[t].addEventListener(egret.TouchEvent.TOUCH_TAP, this._onTouchPetbagItem, this),
            this._petBag_dmList[t].addEventListener(egret.TouchEvent.TOUCH_TAP, this._onTouchPetbagItem, this);
            this.list_page.addEventListener(eui.ItemTapEvent.ITEM_TAP, this._onTouchPetBagPageItem, this),
            this.list_warehouse.addEventListener(eui.ItemTapEvent.ITEM_TAP, this._onTouchWareHouseHead, this),
            this.list_selcted.addEventListener(eui.ItemTapEvent.ITEM_TAP, this._onTouchSelectedHead, this)
        },
        i.prototype._removeEvents = function() {
            ImageButtonUtil.removeAll(this),
            this.editable_search.removeEventListener(egret.Event.CHANGE, this._onChangeSearchHanlder, this),
            this.rb_bag.group.removeEventListener(egret.Event.CHANGE, this._onChangeNavBarHandler, this),
            this.list_warehouse.removeEventListener(eui.ItemTapEvent.ITEM_TAP, this._onTouchWareHouseHead, this),
            this.list_selcted.removeEventListener(eui.ItemTapEvent.ITEM_TAP, this._onTouchSelectedHead, this),
            this.list_page.removeEventListener(eui.ItemTapEvent.ITEM_TAP, this._onTouchPetBagPageItem, this);
            for (var t = 0; 6 > t; t++) this._petBag_czList[t].addEventListener(egret.TouchEvent.TOUCH_TAP, this._onTouchPetbagItem, this),
            this._petBag_dmList[t].addEventListener(egret.TouchEvent.TOUCH_TAP, this._onTouchPetbagItem, this)
        },
        i.prototype.UpdateView = function(t) {
            this._initHanlder()
        },
        i.prototype._onOneTapHanlder = function() {
            var e = this,
            i = t.DataMgr.Instance.getLastPetCid();
            egret.lifecycle.stage.touchChildren = !1,
            PetManager.UpdatePetInfoListAsync(i).then(function(t) {
                t = t.filter(function(t) {
                    return t.hp > 0
                });
                for (var i = 0; i < e._readyList.length; i++) i < t.length ? e._readyList[i] = t[i] : e._readyList[i] = null;
                e.txtLabel.text = "一键下阵",
                e._oneTapState = "down",
                e._onUpdatePets(),
                egret.lifecycle.stage.touchChildren = !0
            })
        },
        i.prototype._onOneTapUpHanlder = function() {
            for (var t = 0; t < this._readyList.length; t++) this._readyList[t] = null;
            this.txtLabel.text = "一键上阵",
            this._oneTapState = "up",
            this._onUpdatePets()
        },
        i.prototype._initHanlder = function() {
            var e = this;
            if (this._flagInit) {
                this._oneTapState = "up",
                this.btnOnetap.visible = t.DataMgr.Instance.getLastPetCid().length > 0,
                this.btnStart.touchEnabled = !0,
                this._currentNavBar = this.rb_bag.value,
                egret.callLater(function() {
                    e.rb_bag.selected = !0
                },
                this),
                this._currentSortType = "",
                this._currentPetTypeId = 0;
                var i = this.list_page.dataProvider;
                i.removeAll();
                for (var n = t.DataMgr.Instance.OpenPetBagPageNum,
                r = 0; n >= r; r++) i.addItem(r + 1);
                egret.callLater(function() {
                    e.list_page.selectedIndex = t.DataMgr.Instance.CurrentSelectedIdx
                },
                this);
                var o = t.DataMgr.Instance.GetPetBagAllPets();
                this._warehosePet = PetStorage2015InfoManager.getInfoByType(0, 0),
                this._warehosePet = this._warehosePet.filter(function(t) {
                    for (var e = 0; e < o.length; e++) if (o[e].catchTime === t.id) return ! 1;
                    return ! 0
                }),
                this._elitePets = PetStorage2015InfoManager.getInfoByType(1, 0),
                this._elitePets = this._elitePets.filter(function(t) {
                    for (var e = 0; e < o.length; e++) if (o[e].catchTime === t.id) return ! 1;
                    return ! 0
                },
                this),
                this._cz_list.removeAll(),
                this._readyList = [];
                for (var r = 0; 20 > r; r++) this._readyList.push(null),
                this._cz_list.addItem(null);
                this._setPetTypeUI(),
                this._setSortInfoUI(),
                this._setNavBar()
            }
        },
        i.prototype._onChangeNavBarHandler = function(t) {
            var e = this.rb_bag.group.selectedValue;
            this._currentNavBar = e,
            this._setNavBar()
        },
        i.prototype._setNavBar = function() {
            this.petBag.visible = "petBag" === this._currentNavBar,
            this.warehouseGroup.visible = this.searchComp.visible = "warehouse" === this._currentNavBar || "elite" === this._currentNavBar,
            this.searchComp.visible ? (this._currentSortType = "", this.editable_search.text = "", this._currentPetTypeId = 0, this._setPetTypeUI(), this._setSortInfoUI(), this._resetWarehouseList(), this._onUpdateWarehouseOrEliteShow()) : this._onUpdatePetBagShow()
        },
        i.prototype._onUpdatePetBagShow = function() {
            for (var e = t.DataMgr.Instance.GetFirstPetInfo(t.DataMgr.Instance.CurrentSelectedIdx + 1), i = t.DataMgr.Instance.GetSecondPetInfo(t.DataMgr.Instance.CurrentSelectedIdx + 1), n = 0; 6 > n; n++) this._petBag_czList[n].data = null,
            this._petBag_dmList[n].data = null,
            e.length > n && !this._checkPetOnReadyList(e[n].catchTime) && (this._petBag_czList[n].data = e[n]),
            i.length > n && !this._checkPetOnReadyList(i[n].catchTime) && (this._petBag_dmList[n].data = i[n]);
            var r = 0 === e.length && 0 === i.length;
            this.petBag.visible = !r,
            this.img_noPet.visible = r
        },
        i.prototype._onUpdateWarehouseOrEliteShow = function() {
            var t;
            t = "warehouse" === this._currentNavBar ? this._warehosePet: this._elitePets;
            for (var e = [], i = 0; i < t.length; i++) this._currentPetTypeId > 0 && t[i].type !== this._currentPetTypeId || ("" === this.editable_search.text || SearchUtil.isMatch(this.editable_search.text, t[i].name)) && (this._checkPetOnReadyList(t[i].catchTime) || e.push(t[i]));
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
            this._warehouseOrElite_list.replaceAll(e),
            this._warehouseOrElite_list.refresh();
            var n = 0 === e.length;
            this.img_noPet.visible = n
        },
        i.prototype._checkPetOnReadyList = function(t) {
            for (var e = 0; e < this._readyList.length; e++) if (this._readyList[e] && this._readyList[e].catchTime === t) return ! 0;
            return ! 1
        },
        i.prototype._setPetTypeUI = function() {
            var t = "属性查找";
            this.icon_attr.source = null,
            this._currentPetTypeId > 0 && (t = SkillXMLInfo.petTypeNameCN(this._currentPetTypeId), this.icon_attr.source = ClientConfig.getpettypeticon(this._currentPetTypeId + "")),
            this.lab_find_attr.text = t
        },
        i.prototype._onTouchEventHandler = function(e) {
            var i = this;
            switch (e.currentTarget) {
            case this.btnOnetap:
                "down" === this._oneTapState ? this._onOneTapUpHanlder() : this._onOneTapHanlder();
                break;
            case this.btnClose:
                this.dispatchEventWith(t.DataMgr.EVENT_CLOSE_VIEW, !1, t.ViewType.SET_PET_INFO);
                break;
            case this.btnSearch:
                this._resetWarehouseList(),
                this._onUpdateWarehouseOrEliteShow();
                break;
            case this.btnStart:
                var n = this._getReadyPetCnt();
                if (0 === n) return void Alarm.show("至少需要出战一个精灵");
                var r = egret.localStorage.getItem("pveTrek_cache_01_" + MainManager.actorID); ! r && 20 > n ? (egret.localStorage.setItem("pveTrek_cache_01_" + MainManager.actorID, "ok"), Alert.show("还可以上阵更多精灵，确认直接开启远航吗？",
                function() {
                    i._onStart()
                })) : this._onStart();
                break;
            case this.group_petType:
                this._onOpenAttributePanel();
                break;
            case this.group_sort:
                this._onOpenChangeSortPanel();
                break;
            case this.btnBack:
                this._onGoBack()
            }
        },
        i.prototype._onGoBack = function() {
            t.DataMgr.Instance.C2S_Back2Step(1).then(function() {
                t.DataMgr.Instance.dispatchEventWith(t.DataMgr.EVENT_ONCHANGE_VIEW, !1, t.ViewType.SET_SEER_INFO)
            })
        },
        i.prototype._onStart = function() {
            this.btnStart.touchEnabled = !1;
            for (var e = [], i = 0; i < this._readyList.length; i++) this._readyList[i] && this._readyList[i].catchTime > 0 && e.push(this._readyList[i].catchTime);
            t.DataMgr.Instance.C2S_Set20Pets(e).then(function() {
                t.DataMgr.Instance.dispatchEventWith(t.DataMgr.EVENT_ONCHANGE_VIEW, !1, t.ViewType.LEVEL)
            })
        },
        i.prototype._onOpenChangeSortPanel = function() {
            var e = {};
            e.callBack = this._onChangeSort,
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
        i.prototype._onChangeSort = function(t) {
            this._currentSortType = t,
            this._resetWarehouseList(),
            this._onUpdateWarehouseOrEliteShow()
        },
        i.prototype._onOpenAttributePanel = function() {
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
            this._resetWarehouseList(),
            this._onUpdateWarehouseOrEliteShow()
        },
        i.prototype._onTouchPetbagItem = function(t) {
            var e = this,
            i = t.currentTarget,
            n = i.data;
            n && (this._setSelctedPetBag(n.catchTime), this._onOpenPetInfoPop(n.catchTime, !1,
            function(t) {
                return e._setSelctedPetBag(0),
                e._callBack_to_readyList(t)
            }))
        },
        i.prototype._onOpenPetInfoPop = function(e, i, n) {
            var r = this;
            PetManager.upDateBagPetInfo(e,
            function(e) {
                var o = {};
                o.petInfo = e,
                o.caller = r,
                o.isCz = i,
                o.callBack = n;
                var s = PopViewManager.createDefaultStyleObject();
                s.maskShapeStyle.maskAlpha = .7,
                PopViewManager.getInstance().openView(new t.PetInfoPop, s, o)
            })
        },
        i.prototype._setSelctedPetBag = function(t) {
            t > 0 && this._clearRedayPetsSelctedFlag();
            for (var e, i = 0; i < this._petBag_czList.length; i++) e = this._petBag_czList[i].data,
            this._petBag_czList[i].selected = e && t === e.catchTime;
            for (var i = 0; i < this._petBag_dmList.length; i++) e = this._petBag_dmList[i].data,
            this._petBag_dmList[i].selected = e && t === e.catchTime
        },
        i.prototype._clearRedayPetsSelctedFlag = function() {
            this.list_selcted.selectedItem = void 0
        },
        i.prototype._onTouchSelectedHead = function(t) {
            var e = t.item;
            this._setSelctedPetBag(0),
            this._onOpenPetInfoPop(e.catchTime, !0, this._callBack_to_alternateList)
        },
        i.prototype._onTouchWareHouseHead = function(t) {
            var e = t.item;
            this._clearRedayPetsSelctedFlag(),
            this._onOpenPetInfoPop(e.catchTime, !1, this._callBack_to_readyList)
        },
        i.prototype._onTouchPetBagPageItem = function(e) {
            var i = e.item;
            t.DataMgr.Instance.CurrentSelectedIdx = i - 1,
            this._setSelctedPetBag(0),
            this._onUpdatePetBagShow()
        },
        i.prototype._callBack_to_readyList = function(t) {
            if (t.level < this._petLevelLimit || t.hp <= 0) return Alarm.show("必须是" + this._petLevelLimit + "级满血精灵才能上场！"),
            Promise.resolve();
            var e = this._getReadyPetCnt();
            if (e >= 20) return Alarm.show("最多出战20只精灵"),
            Promise.resolve();
            for (var i = 0; i < this._readyList.length; i++) if (!this._readyList[i]) {
                this._readyList[i] = t;
                break
            }
            return this._onUpdatePets(),
            Promise.resolve()
        },
        i.prototype._getReadyPetCnt = function() {
            for (var t = this._readyList.length,
            e = 0,
            i = 0; t > i; i++) {
                var n = this._readyList[i];
                n && n.catchTime > 0 && e++
            }
            return e
        },
        i.prototype._callBack_to_alternateList = function(t) {
            for (var e = [], i = this._readyList.length, n = 0; n < this._readyList.length; n++) this._readyList[n] && this._readyList[n].catchTime !== t.catchTime && e.push(this._readyList[n]);
            i -= e.length;
            for (var n = 0; i > n; n++) e.push(null);
            return this._readyList = e,
            this._onUpdatePets(),
            Promise.resolve()
        },
        i.prototype._onUpdatePets = function() {
            "warehouse" === this._currentNavBar || "elite" === this._currentNavBar ? this._onUpdateWarehouseOrEliteShow() : this._onUpdatePetBagShow(),
            this._cz_list.removeAll();
            for (var t = 0; t < this._readyList.length; t++) this._cz_list.addItem(this._readyList[t])
        },
        i.prototype._resetWarehouseList = function() {
            this.scroller_warehouse.stopAnimation(),
            this.scroller_warehouse.viewport.scrollV = 0,
            this._warehouseOrElite_list.removeAll()
        },
        i.prototype._onChangeSearchHanlder = function(t) {
            "" === this.editable_search.text && (this._resetWarehouseList(), this._onUpdateWarehouseOrEliteShow())
        },
        i.prototype._setSortInfoUI = function() {
            var t = {
                id_down: {
                    name: "ID顺序",
                    sortImg: "pveTrekSetPets_img_down_png"
                },
                id_up: {
                    name: "ID顺序",
                    sortImg: "pveTrekSetPets_img_up_png"
                },
                lvl_down: {
                    name: "等级顺序",
                    sortImg: "pveTrekSetPets_img_down_png"
                },
                lvl_up: {
                    name: "等级顺序",
                    sortImg: "pveTrekSetPets_img_up_png"
                },
                tm_down: {
                    name: "获得顺序",
                    sortImg: "pveTrekSetPets_img_down_png"
                },
                tm_up: {
                    name: "获得顺序",
                    sortImg: "pveTrekSetPets_img_up_png"
                }
            };
            return this._currentSortType ? (this.lab_select_sort.text = t[this._currentSortType].name, void(this.btn_sort.source = t[this._currentSortType].sortImg)) : void(this.lab_select_sort.text = "默认顺序")
        },
        i.prototype.destroy = function() {
            this._removeEvents(),
            e.prototype.destroy.call(this)
        },
        i
    } (BaseModule);
    t.SetPetInfoView = e,
    __reflect(e.prototype, "pveTrek.SetPetInfoView", ["pveTrek.IView"])
} (pveTrek || (pveTrek = {}));
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
        function s(t) {
            try {
                _(n.next(t))
            } catch(e) {
                o(e)
            }
        }
        function a(t) {
            try {
                _(n["throw"](t))
            } catch(e) {
                o(e)
            }
        }
        function _(t) {
            t.done ? r(t.value) : new i(function(e) {
                e(t.value)
            }).then(s, a)
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
            if (r = 1, o && (s = o[2 & i[0] ? "return": i[0] ? "throw": "next"]) && !(s = s.call(o, i[1])).done) return s;
            switch (o = 0, s && (i = [0, s.value]), i[0]) {
            case 0:
            case 1:
                s = i;
                break;
            case 4:
                return _.label++,
                {
                    value: i[1],
                    done: !1
                };
            case 5:
                _.label++,
                o = i[1],
                i = [0];
                continue;
            case 7:
                i = _.ops.pop(),
                _.trys.pop();
                continue;
            default:
                if (s = _.trys, !(s = s.length > 0 && s[s.length - 1]) && (6 === i[0] || 2 === i[0])) {
                    _ = 0;
                    continue
                }
                if (3 === i[0] && (!s || i[1] > s[0] && i[1] < s[3])) {
                    _.label = i[1];
                    break
                }
                if (6 === i[0] && _.label < s[1]) {
                    _.label = s[1],
                    s = i;
                    break
                }
                if (s && _.label < s[2]) {
                    _.label = s[2],
                    _.ops.push(i);
                    break
                }
                s[2] && _.ops.pop(),
                _.trys.pop();
                continue
            }
            i = e.call(t, _)
        } catch(n) {
            i = [6, n],
            o = 0
        } finally {
            r = s = 0
        }
        if (5 & i[0]) throw i[1];
        return {
            value: i[0] ? i[1] : void 0,
            done: !0
        }
    }
    var r, o, s, a, _ = {
        label: 0,
        sent: function() {
            if (1 & s[0]) throw s[1];
            return s[1]
        },
        trys: [],
        ops: []
    };
    return a = {
        next: i(0),
        "throw": i(1),
        "return": i(2)
    },
    "function" == typeof Symbol && (a[Symbol.iterator] = function() {
        return this
    }),
    a
},
pveTrek; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i._CLOTHES_TYPE_LIST = ["head", "hand", "foot", "eye", "waist"],
            i._equipMap = {},
            i._flagInit = !1,
            i.skinName = t.PvetreksetseerinfoSkin,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this._playerView = new ClothPreview,
            this.group_seer.addChild(this._playerView),
            this._playerView.setPosition(0, 0),
            this._flagInit = !0,
            this._addEvents(),
            this._updateAll()
        },
        i.prototype._addEvents = function() {
            ImageButtonUtil.add(this.btnClose, this._onTouchEventHandler, this),
            ImageButtonUtil.add(this.btnDressAll, this._onTouchEventHandler, this),
            ImageButtonUtil.add(this.btnNext, this._onTouchEventHandler, this),
            ImageButtonUtil.add(this.btnTitleChange, this._onTouchEventHandler, this);
            for (var t = 0; 5 > t; t++) ImageButtonUtil.add(this["addBtn_" + t], this._onTouchAdd.bind(this, t), this, !1, !1),
            ImageButtonUtil.add(this["suitIcon_" + t], this._onTouchClothe.bind(this, t), this, !1, !1),
            this["lineIcon_" + t].touchEnabled = !1
        },
        i.prototype._removeEvents = function() {
            ImageButtonUtil.removeAll(this)
        },
        i.prototype.UpdateView = function(e) {
            this._clotesIDs = t.DataMgr.Instance.clothesIDs,
            this._titileId = t.DataMgr.Instance.titleID,
            this._updateAll()
        },
        i.prototype._updateAll = function() {
            this._flagInit && (this._updateSeerModel(), this._updateTitle())
        },
        i.prototype._updateSeerModel = function() {
            this._playerView.show(t.DataMgr.Instance.GetClohesData(this._clotesIDs));
            var e = 0;
            for (e = 0; e < this._CLOTHES_TYPE_LIST.length; e++) this["addBtn_" + e].visible = !0,
            this["suitIcon_" + e].source = null,
            this["suitIcon_" + e].visible = !1,
            this["partNameTx_" + e].text = "无",
            this._equipMap[this._CLOTHES_TYPE_LIST[e]] = 0;
            for (e = 0; e < this._clotesIDs.length; e++) {
                var i = ClothXMLInfo.getItemInfo(this._clotesIDs[e]),
                n = i.type,
                r = this._CLOTHES_TYPE_LIST.indexOf(n);
                r >= 0 && (this._equipMap[n] = i.id, this["addBtn_" + r].visible = !1, this["suitIcon_" + r].source = ItemXMLInfo.getIconURL(i.id), this["suitIcon_" + r].visible = !0, this["partNameTx_" + r].text = i.name)
            }
        },
        i.prototype._updateTitle = function() {
            this.txt_title.text = AchieveXMLInfo.getTitle(this._titileId)
        },
        i.prototype._onTouchEventHandler = function(e) {
            switch (e.currentTarget) {
            case this.btnClose:
                this.dispatchEventWith(t.DataMgr.EVENT_CLOSE_VIEW, !1, t.ViewType.SET_SEER_INFO);
                break;
            case this.btnDressAll:
                this.openSuitView();
                break;
            case this.btnNext:
                this._onNext().then(function() {
                    t.DataMgr.Instance.dispatchEventWith(t.DataMgr.EVENT_ONCHANGE_VIEW, !1, t.ViewType.SET_PET_INFO)
                });
                break;
            case this.btnTitleChange:
                this._openTitlePanel()
            }
        },
        i.prototype._onNext = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                return __generator(this,
                function(e) {
                    switch (e.label) {
                    case 0:
                        return [4, t.DataMgr.Instance.C2S_SaveSeerInfo(this._clotesIDs, this._titileId)];
                    case 1:
                        return e.sent(),
                        [2, Promise.resolve()]
                    }
                })
            })
        },
        i.prototype._onTouchAdd = function(t, e) {
            var i = this._CLOTHES_TYPE_LIST[t],
            n = ItemManager.GetHoldClothesIDs(i),
            r = {};
            r.caller = this,
            r.clothesIds = n,
            r.isEquit = !0,
            r.type = i,
            r.getClothesIDsHanlder = this._onGetClothesIDsHanlder,
            r.onDressAllClothesHanlder = this._onDressAllClothesHanlder,
            r.onDressOneClothesHanlder = this._onDressOneClothesHanlder,
            ModuleManager.showModuleByID(54, r)
        },
        i.prototype._onTouchClothe = function(t, e) {
            var i = this,
            n = this._CLOTHES_TYPE_LIST[t],
            r = this._equipMap[n],
            o = {
                clothesId: r,
                onDisboardFun: this.onDisboardCallBackHandler,
                changeFun: function() {
                    i._onTouchAdd(t)
                },
                caller: this
            };
            tipsPop.TipsPop.openClothesPop(o)
        },
        i.prototype.onDisboardCallBackHandler = function(t) {
            var e = this._equipMap[t];
            e > 0 && (this._onTakeDownClotheHandler(e), this._updateSeerModel())
        },
        i.prototype._onGetClothesIDsHanlder = function() {
            return this._clotesIDs
        },
        i.prototype._onDressAllClothesHanlder = function(t) {
            var e = this;
            return new Promise(function(i, n) {
                e._onChangeSuitHanlder(t).then(function() {
                    return i()
                })
            })
        },
        i.prototype._onDressOneClothesHanlder = function(t, e) {
            var i = this;
            return new Promise(function(n, r) {
                var o = i._equipMap[t];
                return o > 0 && i._onTakeDownClotheHandler(o),
                i._onDressClotheHanlder(e),
                i._updateSeerModel(),
                n()
            })
        },
        i.prototype.openSuitView = function() {
            var t = ItemManager.GetMySuitIds();
            if (0 === t.length) BubblerManager.getInstance().showText("你还没有获得任何套装哦！");
            else {
                var e = {};
                e.suitList = t,
                e.caller = this,
                e.onDressClothesHandler = this._onChangeSuitHanlder,
                e.onGetclothIDsHandler = this._onGetClothesIDsHanlder,
                ModuleManager.showModuleByID(52, e)
            }
        },
        i.prototype._openTitlePanel = function() {
            var t = {};
            t.caller = this,
            t.getCurrentTitleIdFunc = this._getMyTitleID,
            t.onChangeHandler = this._onChangeTitleHandler,
            ModuleManager.showModuleByID(51, t)
        },
        i.prototype._getMyTitleID = function() {
            return this._titileId
        },
        i.prototype._onChangeTitleHandler = function(t) {
            return this._titileId = t.titleId,
            this._updateTitle(),
            Promise.resolve()
        },
        i.prototype._onTakeDownClotheHandler = function(t) {
            var e = this._clotesIDs.indexOf(t);
            try {
                this._clotesIDs.splice(e, 1)
            } catch(i) {
                console.log("没有穿戴装扮id为%i的衣服", t)
            }
        },
        i.prototype._onDressClotheHanlder = function(t) {
            this._clotesIDs.push(t)
        },
        i.prototype._onChangeSuitHanlder = function(t) {
            var e = "number" == typeof t ? t: t.suitId,
            i = SuitXMLInfo.getCloths(e),
            n = i.map(function(t) {
                return + t
            });
            this._clotesIDs = [];
            for (var r = 0; r < n.length; r++) ItemManager.getClothInfo(n[r]) && this._clotesIDs.push(n[r]);
            return this._updateSeerModel(),
            Promise.resolve()
        },
        i.prototype.destroy = function() {
            this._removeEvents(),
            this._playerView.destroy(),
            e.prototype.destroy.call(this)
        },
        i
    } (BaseModule);
    t.SetSeerInfoView = e,
    __reflect(e.prototype, "pveTrek.SetSeerInfoView", ["pveTrek.IView"])
} (pveTrek || (pveTrek = {})),
window.pveTrek = window.pveTrek || {};
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
generateEUI.paths["resource/eui_skins/comp/EventItemCompSkinSkin.exml"] = window.pveTrek.EventItemCompSkinSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["icon", "flag_selected", "flag_ywc", "group_animation"],
        this.height = 90,
        this.width = 79,
        this.elementsContent = [this.icon_i(), this.flag_selected_i(), this.flag_ywc_i(), this.group_animation_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.icon_i = function() {
        var t = new eui.Image;
        return this.icon = t,
        t.source = "pveTrekLevel_iconBoss_png",
        t
    },
    i.flag_selected_i = function() {
        var t = new eui.Image;
        return this.flag_selected = t,
        t.source = "pveTrekLevel_flag_selcted_level_png",
        t.visible = !0,
        t.x = -17,
        t.y = -1,
        t
    },
    i.flag_ywc_i = function() {
        var t = new eui.Image;
        return this.flag_ywc = t,
        t.source = "pveTrekLevel_flag_ywc_level_png",
        t.x = 45.805,
        t.y = 55.59,
        t
    },
    i.group_animation_i = function() {
        var t = new eui.Group;
        return this.group_animation = t,
        t.x = 35,
        t.y = 98,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/pop/BattleMonsterPopSkin.exml"] = window.pveTrek.BattleMonsterPopSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["title", "btnClose", "txtLabel", "btnReady", "txt_answer", "list_head"],
        this.height = 374,
        this.width = 620,
        this.elementsContent = [this._Image1_i(), this._Image2_i(), this.title_i(), this.btnClose_i(), this.btnReady_i(), this.txt_answer_i(), this.list_head_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 333,
        t.source = "common_pop_point_png",
        t.width = 608,
        t.x = 0,
        t.y = 41,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 42,
        t.source = "common_pop_title_samll_png",
        t.width = 600,
        t.x = 4,
        t.y = 22,
        t
    },
    i.title_i = function() {
        var t = new eui.Image;
        return this.title = t,
        t.height = 26,
        t.source = "pveTrekAllPop_title_pttz_png",
        t.width = 112,
        t.x = 38,
        t.y = 28,
        t
    },
    i.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.height = 56,
        t.source = "common_close_1_png",
        t.width = 54,
        t.x = 566,
        t.y = 0,
        t
    },
    i.btnReady_i = function() {
        var t = new eui.Group;
        return this.btnReady = t,
        t.x = 216,
        t.y = 292,
        t.elementsContent = [this._Image3_i(), this.txtLabel_i()],
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
    i.txtLabel_i = function() {
        var t = new eui.Label;
        return this.txtLabel = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 26,
        t.stroke = 1,
        t.strokeColor = 16642157,
        t.text = "作战准备",
        t.textColor = 9261339,
        t.x = 34,
        t.y = 11,
        t
    },
    i.txt_answer_i = function() {
        var t = new eui.Label;
        return this.txt_answer = t,
        t.horizontalCenter = 0,
        t.size = 20,
        t.text = "较为简单的精灵挑战，获胜后可以获得00-00个迷晶",
        t.textColor = 2634350,
        t.y = 103,
        t
    },
    i.list_head_i = function() {
        var t = new eui.List;
        return this.list_head = t,
        t.horizontalCenter = 0,
        t.y = 150,
        t.layout = this._HorizontalLayout1_i(),
        t
    },
    i._HorizontalLayout1_i = function() {
        var t = new eui.HorizontalLayout;
        return t.gap = 40,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/pop/BufferStateSkin.exml"] = window.pveTrek.BufferStateSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["btnClose", "btnok", "list_myState", "scroller_myState", "list_otherState", "scroller_OtherState", "state_pop"],
        this.height = 452,
        this.width = 768,
        this.elementsContent = [this.state_pop_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.state_pop_i = function() {
        var t = new eui.Group;
        return this.state_pop = t,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image1_i(), this._Image2_i(), this._Image3_i(), this.btnClose_i(), this._Image4_i(), this._Image5_i(), this._Image6_i(), this._Image7_i(), this.btnok_i(), this.scroller_myState_i(), this.scroller_OtherState_i()],
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
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.height = 26,
        t.source = "pveTrekAllPop_title_zdzt_png",
        t.width = 113,
        t.x = 37,
        t.y = 28,
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
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.height = 250,
        t.source = "pveTrekAllPop_d_png",
        t.width = 717,
        t.x = 20,
        t.y = 82,
        t
    },
    i._Image5_i = function() {
        var t = new eui.Image;
        return t.height = 30,
        t.source = "pveTrekAllPop_img_wf_png",
        t.width = 359,
        t.x = 20,
        t.y = 82,
        t
    },
    i._Image6_i = function() {
        var t = new eui.Image;
        return t.height = 30,
        t.source = "pveTrekAllPop_img_df_png",
        t.width = 359,
        t.x = 378,
        t.y = 82,
        t
    },
    i._Image7_i = function() {
        var t = new eui.Image;
        return t.height = 250,
        t.source = "pveTrekAllPop_t1_png",
        t.width = 1,
        t.x = 378,
        t.y = 82,
        t
    },
    i.btnok_i = function() {
        var t = new eui.Group;
        return this.btnok = t,
        t.x = 290,
        t.y = 364,
        t.elementsContent = [this._Image8_i(), this._Label1_i()],
        t
    },
    i._Image8_i = function() {
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
    i.scroller_myState_i = function() {
        var t = new eui.Scroller;
        return this.scroller_myState = t,
        t.height = 164,
        t.width = 320,
        t.x = 33,
        t.y = 131,
        t.viewport = this._Group1_i(),
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.elementsContent = [this.list_myState_i()],
        t
    },
    i.list_myState_i = function() {
        var t = new eui.List;
        return this.list_myState = t,
        t.layout = this._VerticalLayout1_i(),
        t
    },
    i._VerticalLayout1_i = function() {
        var t = new eui.VerticalLayout;
        return t.gap = 10,
        t
    },
    i.scroller_OtherState_i = function() {
        var t = new eui.Scroller;
        return this.scroller_OtherState = t,
        t.height = 164,
        t.width = 320,
        t.x = 391,
        t.y = 131,
        t.viewport = this._Group2_i(),
        t
    },
    i._Group2_i = function() {
        var t = new eui.Group;
        return t.elementsContent = [this.list_otherState_i()],
        t
    },
    i.list_otherState_i = function() {
        var t = new eui.List;
        return this.list_otherState = t,
        t.layout = this._VerticalLayout2_i(),
        t
    },
    i._VerticalLayout2_i = function() {
        var t = new eui.VerticalLayout;
        return t.gap = 10,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/pop/DispatchFaildSkin.exml"] = window.pveTrek.DispatchFaildSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["btnSure", "txt_desc"],
        this.height = 235,
        this.width = 442,
        this.elementsContent = [this._Image1_i(), this.btnSure_i(), this.txt_desc_i(), this._Image3_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 210,
        t.source = "alert_BG_s_png",
        t.width = 442,
        t.x = 0,
        t.y = 25,
        t
    },
    i.btnSure_i = function() {
        var t = new eui.Group;
        return this.btnSure = t,
        t.x = 161,
        t.y = 169,
        t.elementsContent = [this._Image2_i(), this._Label1_i()],
        t
    },
    i._Image2_i = function() {
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
    i.txt_desc_i = function() {
        var t = new eui.Label;
        return this.txt_desc = t,
        t.size = 18,
        t.text = "很可惜，没能完成000任务！",
        t.textAlign = "center",
        t.textColor = 5991303,
        t.width = 367,
        t.x = 38,
        t.y = 86,
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.height = 27,
        t.source = "pveTrekAllPop_title_sb_png",
        t.width = 411,
        t.x = 16,
        t.y = 0,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/pop/DispatchSucessfulSkin.exml"] = window.pveTrek.DispatchSucessfulSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["btnSure", "txt_desc"],
        this.height = 239,
        this.width = 451,
        this.elementsContent = [this._Image1_i(), this.btnSure_i(), this.txt_desc_i(), this._Image3_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 210,
        t.source = "alert_BG_s_png",
        t.width = 442,
        t.x = 4,
        t.y = 29,
        t
    },
    i.btnSure_i = function() {
        var t = new eui.Group;
        return this.btnSure = t,
        t.x = 165,
        t.y = 182,
        t.elementsContent = [this._Image2_i(), this._Label1_i()],
        t
    },
    i._Image2_i = function() {
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
    i.txt_desc_i = function() {
        var t = new eui.Label;
        return this.txt_desc = t,
        t.horizontalCenter = 0,
        t.size = 18,
        t.text = "精灵圆满地完成了00任务，以下是他们带回的奖励！",
        t.textAlign = "center",
        t.textColor = 2568815,
        t.width = 367,
        t.y = 86,
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.height = 31,
        t.source = "pveTrekAllPop_title_pqcg_png",
        t.width = 451,
        t.x = 0,
        t.y = 0,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/pop/LevelTipsPopSkin.exml"] = window.LevelTipsPopSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["btnOk", "txt_1", "txt_2", "txt_3", "txt_4", "txt_5", "txt_6", "iconRandom", "iconBoss", "iconMonster", "iconTask", "iconShop", "iconBox"],
        this.height = 430,
        this.width = 756,
        this.elementsContent = [this._Image1_i(), this._Image2_i(), this._Image3_i(), this.btnOk_i(), this._Image4_i(), this.txt_1_i(), this.txt_2_i(), this.txt_3_i(), this.txt_4_i(), this.txt_5_i(), this.txt_6_i(), this._Image5_i(), this._Image6_i(), this._Image7_i(), this._Image8_i(), this._Image9_i(), this._Image10_i(), this._Image11_i(), this.iconRandom_i(), this.iconBoss_i(), this.iconMonster_i(), this.iconTask_i(), this.iconShop_i(), this.iconBox_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 411,
        t.source = "common_pop_point_png",
        t.width = 756,
        t.x = 0,
        t.y = 19,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 42,
        t.source = "common_pop_title_medium_png",
        t.width = 748,
        t.x = 4,
        t.y = 0,
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.height = 26,
        t.source = "level_tips_pop_title_zdzt_png",
        t.width = 112,
        t.x = 37,
        t.y = 6,
        t
    },
    i.btnOk_i = function() {
        var t = new eui.Image;
        return this.btnOk = t,
        t.height = 52,
        t.source = "level_tips_pop_btnOk_png",
        t.width = 176,
        t.x = 290,
        t.y = 353,
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.height = 275,
        t.source = "pveTrekAllPop_d_png",
        t.width = 717,
        t.x = 20,
        t.y = 60,
        t
    },
    i.txt_1_i = function() {
        var t = new eui.Label;
        return this.txt_1 = t,
        t.lineSpacing = 3,
        t.size = 16,
        t.text = "较为简单的精灵战斗，\n战胜后可获得少量迷晶",
        t.textColor = 16777215,
        t.touchEnabled = !1,
        t.x = 143,
        t.y = 89,
        t
    },
    i.txt_2_i = function() {
        var t = new eui.Label;
        return this.txt_2 = t,
        t.lineSpacing = 3,
        t.size = 16,
        t.text = "较为困难的精灵战斗，\n战胜后可获得大量迷晶",
        t.textColor = 16777215,
        t.touchEnabled = !1,
        t.x = 143,
        t.y = 175,
        t
    },
    i.txt_3_i = function() {
        var t = new eui.Label;
        return this.txt_3 = t,
        t.lineSpacing = 3,
        t.size = 16,
        t.text = "遇到随机事件，\n根据你的选择触发对应结局",
        t.textColor = 16777215,
        t.touchEnabled = !1,
        t.x = 143,
        t.y = 264,
        t
    },
    i.txt_4_i = function() {
        var t = new eui.Label;
        return this.txt_4 = t,
        t.lineSpacing = 3,
        t.size = 16,
        t.text = "可以用迷晶购买各种能力加成",
        t.textColor = 16777215,
        t.touchEnabled = !1,
        t.x = 490,
        t.y = 99,
        t
    },
    i.txt_5_i = function() {
        var t = new eui.Label;
        return this.txt_5 = t,
        t.lineSpacing = 3,
        t.size = 16,
        t.text = "可以直接获得奖励",
        t.textColor = 16777215,
        t.touchEnabled = !1,
        t.x = 490,
        t.y = 187,
        t
    },
    i.txt_6_i = function() {
        var t = new eui.Label;
        return this.txt_6 = t,
        t.lineSpacing = 3,
        t.size = 16,
        t.text = "派遣精灵，获得奖励",
        t.textColor = 16777215,
        t.touchEnabled = !1,
        t.x = 491,
        t.y = 276,
        t
    },
    i._Image5_i = function() {
        var t = new eui.Image;
        return t.height = 12,
        t.source = "pveTrekAllPop_p_point_png",
        t.width = 12,
        t.x = 126,
        t.y = 91,
        t
    },
    i._Image6_i = function() {
        var t = new eui.Image;
        return t.height = 12,
        t.source = "pveTrekAllPop_p_point_png",
        t.width = 12,
        t.x = 126,
        t.y = 178,
        t
    },
    i._Image7_i = function() {
        var t = new eui.Image;
        return t.height = 12,
        t.source = "pveTrekAllPop_p_point_png",
        t.width = 12,
        t.x = 126,
        t.y = 268,
        t
    },
    i._Image8_i = function() {
        var t = new eui.Image;
        return t.height = 12,
        t.source = "pveTrekAllPop_p_point_png",
        t.width = 12,
        t.x = 473,
        t.y = 101,
        t
    },
    i._Image9_i = function() {
        var t = new eui.Image;
        return t.height = 12,
        t.source = "pveTrekAllPop_p_point_png",
        t.width = 12,
        t.x = 473,
        t.y = 189,
        t
    },
    i._Image10_i = function() {
        var t = new eui.Image;
        return t.height = 12,
        t.source = "pveTrekAllPop_p_point_png",
        t.width = 12,
        t.x = 473,
        t.y = 278,
        t
    },
    i._Image11_i = function() {
        var t = new eui.Image;
        return t.height = 250,
        t.source = "pveTrekAllPop_t1_png",
        t.width = 1,
        t.x = 377,
        t.y = 73,
        t
    },
    i.iconRandom_i = function() {
        var t = new eui.Image;
        return this.iconRandom = t,
        t.height = 90,
        t.source = "pveTrekLevel_iconRandom_png",
        t.width = 79,
        t.x = 34,
        t.y = 239,
        t
    },
    i.iconBoss_i = function() {
        var t = new eui.Image;
        return this.iconBoss = t,
        t.height = 90,
        t.source = "pveTrekLevel_iconBoss_png",
        t.width = 79,
        t.x = 34,
        t.y = 150,
        t
    },
    i.iconMonster_i = function() {
        var t = new eui.Image;
        return this.iconMonster = t,
        t.height = 90,
        t.source = "pveTrekLevel_iconMonster_png",
        t.width = 79,
        t.x = 34,
        t.y = 61,
        t
    },
    i.iconTask_i = function() {
        var t = new eui.Image;
        return this.iconTask = t,
        t.height = 90,
        t.source = "pveTrekLevel_iconTask_png",
        t.width = 79,
        t.x = 391,
        t.y = 239,
        t
    },
    i.iconShop_i = function() {
        var t = new eui.Image;
        return this.iconShop = t,
        t.height = 90,
        t.source = "pveTrekLevel_iconShop_png",
        t.width = 79,
        t.x = 391,
        t.y = 61,
        t
    },
    i.iconBox_i = function() {
        var t = new eui.Image;
        return this.iconBox = t,
        t.height = 90,
        t.source = "pveTrekLevel_iconBox_png",
        t.width = 79,
        t.x = 391,
        t.y = 150,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/pop/PetDispatchSkin.exml"] = window.pveTrek.PetDispatchSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["title", "btnClose", "btnGiveUp", "btnStart", "bg2", "desc", "txt_rate", "reward_list", "list_pets", "scroller_pets"],
        this.height = 452,
        this.width = 768,
        this.elementsContent = [this._Image1_i(), this._Image2_i(), this.title_i(), this.btnClose_i(), this.btnGiveUp_i(), this.btnStart_i(), this._Group1_i(), this.scroller_pets_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
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
        t.height = 26,
        t.source = "pveTrekAllPop_title_fmg_png",
        t.width = 83,
        t.x = 39,
        t.y = 28,
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
    i.btnGiveUp_i = function() {
        var t = new eui.Group;
        return this.btnGiveUp = t,
        t.visible = !0,
        t.x = 357,
        t.y = 383,
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
        t.text = "放弃任务",
        t.textColor = 16777215,
        t.x = 22,
        t.y = 10,
        t
    },
    i.btnStart_i = function() {
        var t = new eui.Group;
        return this.btnStart = t,
        t.x = 518,
        t.y = 383,
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
        t.text = "开始任务",
        t.textColor = 8341784,
        t.x = 21,
        t.y = 10,
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.visible = !0,
        t.x = 270,
        t.y = 83,
        t.elementsContent = [this.bg2_i(), this.desc_i(), this.txt_rate_i(), this.reward_list_i()],
        t
    },
    i.bg2_i = function() {
        var t = new eui.Image;
        return this.bg2 = t,
        t.height = 280,
        t.source = "pveTrekAllPop_bg2_png",
        t.width = 456,
        t.x = 0,
        t.y = 0,
        t
    },
    i.desc_i = function() {
        var t = new eui.Label;
        return this.desc = t,
        t.lineSpacing = 9,
        t.size = 18,
        t.text = "1只电击兔、2只塞拉兔、3只狂暴电击兔••••••派遣1~3个精灵砍掉此处的树林，防止更多兔子精灵撞到树上！大概你再探索2~8个回合，精灵就会回来汇报成果了！",
        t.textColor = 13887988,
        t.width = 413,
        t.x = 14,
        t.y = 22,
        t
    },
    i.txt_rate_i = function() {
        var t = new eui.Label;
        return this.txt_rate = t,
        t.horizontalCenter = 4.5,
        t.size = 16,
        t.text = "成功率：100%",
        t.textColor = 16777215,
        t.y = 258,
        t
    },
    i.reward_list_i = function() {
        var t = new eui.List;
        return this.reward_list = t,
        t.height = 60,
        t.horizontalCenter = 0,
        t.y = 179,
        t.layout = this._HorizontalLayout1_i(),
        t
    },
    i._HorizontalLayout1_i = function() {
        var t = new eui.HorizontalLayout;
        return t
    },
    i.scroller_pets_i = function() {
        var t = new eui.Scroller;
        return this.scroller_pets = t,
        t.height = 361,
        t.width = 236,
        t.x = 37,
        t.y = 82,
        t.viewport = this._Group2_i(),
        t
    },
    i._Group2_i = function() {
        var t = new eui.Group;
        return t.elementsContent = [this.list_pets_i()],
        t
    },
    i.list_pets_i = function() {
        var t = new eui.List;
        return this.list_pets = t,
        t.height = 200,
        t.width = 200,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/pop/PetInfoPopSkinSkin.exml"] = window.pveTrek.PetInfoPopSkinSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["pet_bg", "texture_1", "txt_name", "icon_hy", "icon_type", "grp_boss", "bg", "info_title", "btnCz", "btnChangeSkill", "txt_def_value", "txt_def_value_ext", "txt_def_attr", "def", "txt_sdef_value", "txt_sdef_value_ext", "txt_sdef_attr", "sdef", "txt_hp_value", "txt_hp_value_ext", "txt_hp_attr", "hp", "txt_akt_attr", "txt_atk_value", "txt_atk_value_ext", "atk", "txt_satk_value", "txt_satk_value_ext", "txt_satk_attr", "satk", "txt_speed_value", "txt_speed_value_ext", "txt_speed_attr", "speed", "txt_specSkillName", "txt_specSkillPower", "txt_specSkill_pp", "spec_skillIcon", "group_specSkill", "txt_nullSKill5", "lock", "grp_noskill5", "txt_dj", "t4", "txt_tf", "t3", "txt_xg", "t2", "txt_tx", "t1", "list_skill", "list_mark", "info", "changeSkillBg", "texture_top", "title_unequipSkill", "btnCloseChange", "list_ChangeSkill", "scrolle_onChange", "changeSkill", "group_allow", "group_maskPos"],
        this.height = 581,
        this.width = 1066,
        this.elementsContent = [this._Group1_i(), this.info_i(), this.changeSkill_i(), this.group_maskPos_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Group1_i = function() {
        var t = new eui.Group;
        return t.height = 511,
        t.visible = !0,
        t.width = 689,
        t.x = 0,
        t.y = 70,
        t.elementsContent = [this.pet_bg_i(), this.texture_1_i(), this.txt_name_i(), this.icon_hy_i(), this.icon_type_i(), this.grp_boss_i()],
        t
    },
    i.pet_bg_i = function() {
        var t = new eui.Image;
        return this.pet_bg = t,
        t.height = 511,
        t.source = "pveTrekSetPets_pet_bg_png",
        t.visible = !0,
        t.width = 689,
        t.x = 0,
        t.y = 0,
        t
    },
    i.texture_1_i = function() {
        var t = new eui.Image;
        return this.texture_1 = t,
        t.height = 36,
        t.source = "pveTrekSetPets_texture_1_png",
        t.width = 376,
        t.x = 158,
        t.y = 383,
        t
    },
    i.txt_name_i = function() {
        var t = new eui.Label;
        return this.txt_name = t,
        t.horizontalCenter = 0,
        t.size = 18,
        t.text = "精灵名字最多预留十二字符",
        t.textAlign = "center",
        t.textColor = 16773477,
        t.width = 216,
        t.y = 392,
        t
    },
    i.icon_hy_i = function() {
        var t = new eui.Image;
        return this.icon_hy = t,
        t.height = 26,
        t.source = "common_pet_yin_icon_png",
        t.width = 26,
        t.x = 458,
        t.y = 388,
        t
    },
    i.icon_type_i = function() {
        var t = new eui.Image;
        return this.icon_type = t,
        t.height = 23,
        t.source = "pveTrekSetPets_icon_type_png",
        t.width = 22,
        t.x = 205,
        t.y = 390,
        t
    },
    i.grp_boss_i = function() {
        var t = new eui.Group;
        return this.grp_boss = t,
        t.visible = !0,
        t.x = 349,
        t.y = 361,
        t
    },
    i.info_i = function() {
        var t = new eui.Group;
        return this.info = t,
        t.visible = !0,
        t.x = 578,
        t.y = 0,
        t.elementsContent = [this.bg_i(), this.info_title_i(), this.btnCz_i(), this.btnChangeSkill_i(), this._Image1_i(), this._Image2_i(), this._Image3_i(), this._Image4_i(), this.def_i(), this.sdef_i(), this.hp_i(), this.atk_i(), this.satk_i(), this.speed_i(), this._Image17_i(), this.group_specSkill_i(), this.grp_noskill5_i(), this.txt_dj_i(), this.t4_i(), this.txt_tf_i(), this.t3_i(), this.txt_xg_i(), this.t2_i(), this.txt_tx_i(), this.t1_i(), this.list_skill_i(), this.list_mark_i()],
        t
    },
    i.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.height = 522,
        t.source = "common_texture_003_png",
        t.width = 488,
        t.x = 0,
        t.y = 31,
        t
    },
    i.info_title_i = function() {
        var t = new eui.Image;
        return this.info_title = t,
        t.height = 40,
        t.source = "pveTrekSetPets_info_title_png",
        t.width = 483,
        t.x = 3,
        t.y = 0,
        t
    },
    i.btnCz_i = function() {
        var t = new eui.Image;
        return this.btnCz = t,
        t.source = "pveTrekSetPets_btnCz_png",
        t.visible = !0,
        t.x = 264,
        t.y = 485,
        t
    },
    i.btnChangeSkill_i = function() {
        var t = new eui.Image;
        return this.btnChangeSkill = t,
        t.height = 42,
        t.source = "pveTrekSetPets_btnChangeSkill_png",
        t.width = 112,
        t.x = 113,
        t.y = 485,
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 1,
        t.source = "pveTrekSetPets_line2_png",
        t.width = 220,
        t.x = 4,
        t.y = 230,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 1,
        t.source = "pveTrekSetPets_line2_png",
        t.width = 220,
        t.x = 4,
        t.y = 201,
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.height = 1,
        t.source = "pveTrekSetPets_line2_png",
        t.width = 220,
        t.x = 234,
        t.y = 201,
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.height = 1,
        t.source = "pveTrekSetPets_line2_png",
        t.width = 220,
        t.x = 234,
        t.y = 230,
        t
    },
    i.def_i = function() {
        var t = new eui.Group;
        return this.def = t,
        t.x = 252,
        t.y = 176,
        t.elementsContent = [this.txt_def_value_i(), this.txt_def_value_ext_i(), this._Image5_i(), this.txt_def_attr_i(), this._Image6_i()],
        t
    },
    i.txt_def_value_i = function() {
        var t = new eui.Label;
        return this.txt_def_value = t,
        t.size = 18,
        t.text = "100",
        t.textAlign = "right",
        t.textColor = 16777215,
        t.width = 50,
        t.x = 73,
        t.y = 4,
        t
    },
    i.txt_def_value_ext_i = function() {
        var t = new eui.Label;
        return this.txt_def_value_ext = t,
        t.size = 18,
        t.text = "255",
        t.textColor = 4173823,
        t.x = 153,
        t.y = 4,
        t
    },
    i._Image5_i = function() {
        var t = new eui.Image;
        return t.height = 24,
        t.source = "pveTrekSetPets_xing_png",
        t.width = 25,
        t.x = 121,
        t.y = 0,
        t
    },
    i.txt_def_attr_i = function() {
        var t = new eui.Label;
        return this.txt_def_attr = t,
        t.size = 18,
        t.text = "防御",
        t.textColor = 16777215,
        t.x = 30,
        t.y = 3,
        t
    },
    i._Image6_i = function() {
        var t = new eui.Image;
        return t.height = 22,
        t.source = "common_def_png",
        t.width = 18,
        t.x = 0,
        t.y = 0,
        t
    },
    i.sdef_i = function() {
        var t = new eui.Group;
        return this.sdef = t,
        t.x = 248,
        t.y = 205,
        t.elementsContent = [this.txt_sdef_value_i(), this.txt_sdef_value_ext_i(), this._Image7_i(), this.txt_sdef_attr_i(), this._Image8_i()],
        t
    },
    i.txt_sdef_value_i = function() {
        var t = new eui.Label;
        return this.txt_sdef_value = t,
        t.size = 18,
        t.text = "20",
        t.textAlign = "right",
        t.textColor = 16777215,
        t.width = 50,
        t.x = 73,
        t.y = 4,
        t
    },
    i.txt_sdef_value_ext_i = function() {
        var t = new eui.Label;
        return this.txt_sdef_value_ext = t,
        t.size = 18,
        t.text = "255",
        t.textColor = 4173823,
        t.x = 157,
        t.y = 4,
        t
    },
    i._Image7_i = function() {
        var t = new eui.Image;
        return t.height = 24,
        t.source = "pveTrekSetPets_xing_png",
        t.width = 25,
        t.x = 125,
        t.y = 0,
        t
    },
    i.txt_sdef_attr_i = function() {
        var t = new eui.Label;
        return this.txt_sdef_attr = t,
        t.size = 18,
        t.text = "特防",
        t.textColor = 16777215,
        t.x = 33,
        t.y = 3,
        t
    },
    i._Image8_i = function() {
        var t = new eui.Image;
        return t.height = 20,
        t.source = "common_sdef_png",
        t.width = 26,
        t.x = 0,
        t.y = 2,
        t
    },
    i.hp_i = function() {
        var t = new eui.Group;
        return this.hp = t,
        t.x = 250,
        t.y = 234,
        t.elementsContent = [this.txt_hp_value_i(), this.txt_hp_value_ext_i(), this._Image9_i(), this.txt_hp_attr_i(), this._Image10_i()],
        t
    },
    i.txt_hp_value_i = function() {
        var t = new eui.Label;
        return this.txt_hp_value = t,
        t.size = 18,
        t.text = "20",
        t.textAlign = "right",
        t.textColor = 16777215,
        t.width = 50,
        t.x = 73,
        t.y = 4,
        t
    },
    i.txt_hp_value_ext_i = function() {
        var t = new eui.Label;
        return this.txt_hp_value_ext = t,
        t.size = 18,
        t.text = "255",
        t.textColor = 4173823,
        t.x = 155,
        t.y = 4,
        t
    },
    i._Image9_i = function() {
        var t = new eui.Image;
        return t.height = 24,
        t.source = "pveTrekSetPets_xing_png",
        t.width = 25,
        t.x = 123,
        t.y = 0,
        t
    },
    i.txt_hp_attr_i = function() {
        var t = new eui.Label;
        return this.txt_hp_attr = t,
        t.size = 18,
        t.text = "体力",
        t.textColor = 16777215,
        t.x = 32,
        t.y = 3,
        t
    },
    i._Image10_i = function() {
        var t = new eui.Image;
        return t.height = 22,
        t.source = "common_hp_png",
        t.width = 22,
        t.x = 0,
        t.y = 1,
        t
    },
    i.atk_i = function() {
        var t = new eui.Group;
        return this.atk = t,
        t.x = 48,
        t.y = 174,
        t.elementsContent = [this.txt_akt_attr_i(), this.txt_atk_value_i(), this.txt_atk_value_ext_i(), this._Image11_i(), this._Image12_i()],
        t
    },
    i.txt_akt_attr_i = function() {
        var t = new eui.Label;
        return this.txt_akt_attr = t,
        t.size = 18,
        t.text = "攻击",
        t.textColor = 16777215,
        t.x = 30,
        t.y = 5,
        t
    },
    i.txt_atk_value_i = function() {
        var t = new eui.Label;
        return this.txt_atk_value = t,
        t.size = 18,
        t.text = "100",
        t.textAlign = "right",
        t.textColor = 16777215,
        t.width = 50,
        t.x = 73,
        t.y = 6,
        t
    },
    i.txt_atk_value_ext_i = function() {
        var t = new eui.Label;
        return this.txt_atk_value_ext = t,
        t.size = 18,
        t.text = "255",
        t.textColor = 4173823,
        t.x = 153,
        t.y = 6,
        t
    },
    i._Image11_i = function() {
        var t = new eui.Image;
        return t.height = 24,
        t.source = "pveTrekSetPets_xing_png",
        t.width = 25,
        t.x = 121,
        t.y = 2,
        t
    },
    i._Image12_i = function() {
        var t = new eui.Image;
        return t.height = 21,
        t.source = "common_atk_png",
        t.width = 21,
        t.x = 0,
        t.y = 0,
        t
    },
    i.satk_i = function() {
        var t = new eui.Group;
        return this.satk = t,
        t.x = 47,
        t.y = 205,
        t.elementsContent = [this.txt_satk_value_i(), this.txt_satk_value_ext_i(), this._Image13_i(), this.txt_satk_attr_i(), this._Image14_i()],
        t
    },
    i.txt_satk_value_i = function() {
        var t = new eui.Label;
        return this.txt_satk_value = t,
        t.size = 18,
        t.text = "20",
        t.textAlign = "right",
        t.textColor = 16777215,
        t.width = 50,
        t.x = 73,
        t.y = 4,
        t
    },
    i.txt_satk_value_ext_i = function() {
        var t = new eui.Label;
        return this.txt_satk_value_ext = t,
        t.size = 18,
        t.text = "255",
        t.textColor = 4173823,
        t.x = 154,
        t.y = 4,
        t
    },
    i._Image13_i = function() {
        var t = new eui.Image;
        return t.height = 24,
        t.source = "pveTrekSetPets_xing_png",
        t.width = 25,
        t.x = 122,
        t.y = 0,
        t
    },
    i.txt_satk_attr_i = function() {
        var t = new eui.Label;
        return this.txt_satk_attr = t,
        t.size = 18,
        t.text = "特攻",
        t.textColor = 16777215,
        t.x = 30,
        t.y = 3,
        t
    },
    i._Image14_i = function() {
        var t = new eui.Image;
        return t.height = 20,
        t.source = "common_satk_png",
        t.width = 20,
        t.x = 0,
        t.y = 1,
        t
    },
    i.speed_i = function() {
        var t = new eui.Group;
        return this.speed = t,
        t.x = 45,
        t.y = 234,
        t.elementsContent = [this.txt_speed_value_i(), this.txt_speed_value_ext_i(), this._Image15_i(), this.txt_speed_attr_i(), this._Image16_i()],
        t
    },
    i.txt_speed_value_i = function() {
        var t = new eui.Label;
        return this.txt_speed_value = t,
        t.size = 18,
        t.text = "20",
        t.textAlign = "right",
        t.textColor = 16777215,
        t.width = 50,
        t.x = 73,
        t.y = 4,
        t
    },
    i.txt_speed_value_ext_i = function() {
        var t = new eui.Label;
        return this.txt_speed_value_ext = t,
        t.size = 18,
        t.text = "255",
        t.textColor = 4173823,
        t.x = 156,
        t.y = 4,
        t
    },
    i._Image15_i = function() {
        var t = new eui.Image;
        return t.height = 24,
        t.source = "pveTrekSetPets_xing_png",
        t.width = 25,
        t.x = 124,
        t.y = 0,
        t
    },
    i.txt_speed_attr_i = function() {
        var t = new eui.Label;
        return this.txt_speed_attr = t,
        t.size = 18,
        t.text = "速度",
        t.textColor = 16777215,
        t.x = 33,
        t.y = 2,
        t
    },
    i._Image16_i = function() {
        var t = new eui.Image;
        return t.height = 20,
        t.source = "common_speed_png",
        t.width = 23,
        t.x = 0,
        t.y = 1,
        t
    },
    i._Image17_i = function() {
        var t = new eui.Image;
        return t.height = 63,
        t.source = "pveTrekSetPets_skill_bg_png",
        t.width = 400,
        t.x = 43,
        t.y = 404,
        t
    },
    i.group_specSkill_i = function() {
        var t = new eui.Group;
        return this.group_specSkill = t,
        t.visible = !1,
        t.x = 41,
        t.y = 404,
        t.elementsContent = [this.txt_specSkillName_i(), this._Image18_i(), this._Label1_i(), this.txt_specSkillPower_i(), this._Label2_i(), this.txt_specSkill_pp_i(), this.spec_skillIcon_i()],
        t
    },
    i.txt_specSkillName_i = function() {
        var t = new eui.Label;
        return this.txt_specSkillName = t,
        t.size = 18,
        t.text = "第五技能：技能名称几个字",
        t.textColor = 15068927,
        t.x = 126,
        t.y = 12,
        t
    },
    i._Image18_i = function() {
        var t = new eui.Image;
        return t.height = 46,
        t.source = "common_icon_bg_style_1_png",
        t.width = 46,
        t.x = 59,
        t.y = 9,
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.size = 16,
        t.text = "威力:",
        t.textColor = 4173823,
        t.x = 126,
        t.y = 39,
        t
    },
    i.txt_specSkillPower_i = function() {
        var t = new eui.Label;
        return this.txt_specSkillPower = t,
        t.size = 16,
        t.text = "100",
        t.textColor = 4173823,
        t.x = 178,
        t.y = 41,
        t
    },
    i._Label2_i = function() {
        var t = new eui.Label;
        return t.size = 16,
        t.text = "PP:",
        t.textColor = 4173823,
        t.x = 250,
        t.y = 41,
        t
    },
    i.txt_specSkill_pp_i = function() {
        var t = new eui.Label;
        return this.txt_specSkill_pp = t,
        t.size = 16,
        t.text = "20/20",
        t.textColor = 4173823,
        t.x = 287,
        t.y = 39,
        t
    },
    i.spec_skillIcon_i = function() {
        var t = new eui.Image;
        return this.spec_skillIcon = t,
        t.height = 39,
        t.source = "pveTrekSetPets_skill5_typeIcon_png",
        t.visible = !0,
        t.width = 35,
        t.x = 65,
        t.y = 13,
        t
    },
    i.grp_noskill5_i = function() {
        var t = new eui.Group;
        return this.grp_noskill5 = t,
        t.visible = !0,
        t.x = 155,
        t.y = 422,
        t.elementsContent = [this.txt_nullSKill5_i(), this.lock_i()],
        t
    },
    i.txt_nullSKill5_i = function() {
        var t = new eui.Label;
        return this.txt_nullSKill5 = t,
        t.size = 18,
        t.text = "无法开启第五技能",
        t.textColor = 4217228,
        t.x = 29,
        t.y = 5,
        t
    },
    i.lock_i = function() {
        var t = new eui.Image;
        return this.lock = t,
        t.height = 27,
        t.source = "pve_star_trek_event_pop_lock_png",
        t.width = 22,
        t.x = 0,
        t.y = 0,
        t
    },
    i.txt_dj_i = function() {
        var t = new eui.Label;
        return this.txt_dj = t,
        t.size = 18,
        t.text = "100",
        t.textColor = 16777215,
        t.x = 108,
        t.y = 65,
        t
    },
    i.t4_i = function() {
        var t = new eui.Label;
        return this.t4 = t,
        t.size = 18,
        t.text = "等级:",
        t.textColor = 16777215,
        t.x = 45,
        t.y = 63,
        t
    },
    i.txt_tf_i = function() {
        var t = new eui.Label;
        return this.txt_tf = t,
        t.size = 18,
        t.text = "31",
        t.textColor = 16777215,
        t.x = 108,
        t.y = 88,
        t
    },
    i.t3_i = function() {
        var t = new eui.Label;
        return this.t3 = t,
        t.size = 18,
        t.text = "天赋:",
        t.textColor = 16777215,
        t.x = 45,
        t.y = 87,
        t
    },
    i.txt_xg_i = function() {
        var t = new eui.Label;
        return this.txt_xg = t,
        t.size = 18,
        t.text = "100",
        t.textColor = 16777215,
        t.x = 108,
        t.y = 111,
        t
    },
    i.t2_i = function() {
        var t = new eui.Label;
        return this.t2 = t,
        t.size = 18,
        t.text = "性格:",
        t.textColor = 16777215,
        t.x = 45,
        t.y = 110,
        t
    },
    i.txt_tx_i = function() {
        var t = new eui.Label;
        return this.txt_tx = t,
        t.size = 18,
        t.text = "31",
        t.textColor = 16777215,
        t.x = 108,
        t.y = 134,
        t
    },
    i.t1_i = function() {
        var t = new eui.Label;
        return this.t1 = t,
        t.size = 18,
        t.text = "特性:",
        t.textColor = 16777215,
        t.x = 45,
        t.y = 133,
        t
    },
    i.list_skill_i = function() {
        var t = new eui.List;
        return this.list_skill = t,
        t.height = 130,
        t.itemRendererSkinName = pveTrek.PetSkillItemSkinSkin,
        t.width = 400,
        t.x = 43,
        t.y = 270,
        t.layout = this._TileLayout1_i(),
        t.dataProvider = this._ArrayCollection1_i(),
        t
    },
    i._TileLayout1_i = function() {
        var t = new eui.TileLayout;
        return t.orientation = "rows",
        t.requestedColumnCount = 2,
        t
    },
    i._ArrayCollection1_i = function() {
        var t = new eui.ArrayCollection;
        return t.source = [this._Object1_i(), this._Object2_i(), this._Object3_i(), this._Object4_i()],
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
    i.list_mark_i = function() {
        var t = new eui.List;
        return this.list_mark = t,
        t.height = 80,
        t.width = 255,
        t.x = 183,
        t.y = 70,
        t.layout = this._HorizontalLayout1_i(),
        t
    },
    i._HorizontalLayout1_i = function() {
        var t = new eui.HorizontalLayout;
        return t
    },
    i.changeSkill_i = function() {
        var t = new eui.Group;
        return this.changeSkill = t,
        t.visible = !1,
        t.x = 584,
        t.y = 33,
        t.elementsContent = [this.changeSkillBg_i(), this.texture_top_i(), this.title_unequipSkill_i(), this._Image19_i(), this._Image20_i(), this.btnCloseChange_i(), this.scrolle_onChange_i()],
        t
    },
    i.changeSkillBg_i = function() {
        var t = new eui.Image;
        return this.changeSkillBg = t,
        t.height = 230,
        t.source = "pveTrekSetPets_changeSkillBg_png",
        t.width = 476,
        t.x = 0,
        t.y = 4,
        t
    },
    i.texture_top_i = function() {
        var t = new eui.Image;
        return this.texture_top = t,
        t.height = 40,
        t.source = "pveTrekSetPets_texture_top_png",
        t.width = 470,
        t.x = 3,
        t.y = 8,
        t
    },
    i.title_unequipSkill_i = function() {
        var t = new eui.Image;
        return this.title_unequipSkill = t,
        t.height = 19,
        t.source = "pveTrekSetPets_title_unequipSkill_png",
        t.width = 79,
        t.x = 199,
        t.y = 19,
        t
    },
    i._Image19_i = function() {
        var t = new eui.Image;
        return t.height = 14,
        t.source = "pveTrekSetPets_texture_point_png",
        t.width = 14,
        t.x = 175,
        t.y = 21,
        t
    },
    i._Image20_i = function() {
        var t = new eui.Image;
        return t.height = 14,
        t.source = "pveTrekSetPets_texture_point_png",
        t.width = 14,
        t.x = 287,
        t.y = 21,
        t
    },
    i.btnCloseChange_i = function() {
        var t = new eui.Image;
        return this.btnCloseChange = t,
        t.height = 56,
        t.source = "pveTrekSetPets_img_btn_close_png",
        t.width = 56,
        t.x = 425,
        t.y = 0,
        t
    },
    i.scrolle_onChange_i = function() {
        var t = new eui.Scroller;
        return this.scrolle_onChange = t,
        t.height = 167,
        t.width = 400,
        t.x = 35,
        t.y = 54,
        t.viewport = this._Group2_i(),
        t
    },
    i._Group2_i = function() {
        var t = new eui.Group;
        return t.elementsContent = [this.list_ChangeSkill_i()],
        t
    },
    i.list_ChangeSkill_i = function() {
        var t = new eui.List;
        return this.list_ChangeSkill = t,
        t.itemRendererSkinName = pveTrek.PetSkillItemSkinSkin,
        t.scaleX = 1,
        t.scaleY = 1,
        t.x = 0,
        t.y = 0,
        t.layout = this._TileLayout2_i(),
        t.dataProvider = this._ArrayCollection2_i(),
        t
    },
    i._TileLayout2_i = function() {
        var t = new eui.TileLayout;
        return t.orientation = "rows",
        t.requestedColumnCount = 2,
        t
    },
    i._ArrayCollection2_i = function() {
        var t = new eui.ArrayCollection;
        return t.source = [this._Object5_i(), this._Object6_i(), this._Object7_i(), this._Object8_i(), this._Object9_i(), this._Object10_i()],
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
    i._Object7_i = function() {
        var t = {};
        return t.test = "",
        t
    },
    i._Object8_i = function() {
        var t = {};
        return t.test = "",
        t
    },
    i._Object9_i = function() {
        var t = {};
        return t.test = "",
        t
    },
    i._Object10_i = function() {
        var t = {};
        return t.test = "",
        t
    },
    i.group_maskPos_i = function() {
        var t = new eui.Group;
        return this.group_maskPos = t,
        t.height = 137,
        t.visible = !1,
        t.width = 414,
        t.x = 616,
        t.y = 265,
        t.elementsContent = [this.group_allow_i()],
        t
    },
    i.group_allow_i = function() {
        var t = new eui.Group;
        return this.group_allow = t,
        t.x = 163,
        t.y = 0,
        t.elementsContent = [this._Image21_i(), this._Image22_i(), this._Image23_i(), this._Image24_i()],
        t
    },
    i._Image21_i = function() {
        var t = new eui.Image;
        return t.source = "pveTrek_img_allow_png",
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Image22_i = function() {
        var t = new eui.Image;
        return t.source = "pveTrek_img_allow_png",
        t.visible = !0,
        t.x = 203,
        t.y = 0,
        t
    },
    i._Image23_i = function() {
        var t = new eui.Image;
        return t.source = "pveTrek_img_allow_png",
        t.visible = !0,
        t.x = 0,
        t.y = 69,
        t
    },
    i._Image24_i = function() {
        var t = new eui.Image;
        return t.source = "pveTrek_img_allow_png",
        t.visible = !0,
        t.x = 203,
        t.y = 69,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/pop/PetShopSkin.exml"] = window.pveTrek.PetShopSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["title_shop", "btnClose", "btnOk", "txtLabel", "btnCancel", "txt_itemCount", "icon", "list_item"],
        this.height = 374,
        this.width = 620,
        this.elementsContent = [this._Image1_i(), this._Image2_i(), this.title_shop_i(), this.btnClose_i(), this.btnOk_i(), this.btnCancel_i(), this._Image5_i(), this.txt_itemCount_i(), this.icon_i(), this.list_item_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 333,
        t.source = "common_pop_point_png",
        t.width = 608,
        t.x = 0,
        t.y = 41,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 42,
        t.source = "common_pop_title_samll_png",
        t.width = 600,
        t.x = 4,
        t.y = 22,
        t
    },
    i.title_shop_i = function() {
        var t = new eui.Image;
        return this.title_shop = t,
        t.height = 27,
        t.source = "pveTrekAllPop_title_shop_png",
        t.width = 58,
        t.x = 37,
        t.y = 27,
        t
    },
    i.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.height = 56,
        t.source = "common_close_1_png",
        t.visible = !1,
        t.width = 54,
        t.x = 566,
        t.y = 0,
        t
    },
    i.btnOk_i = function() {
        var t = new eui.Group;
        return this.btnOk = t,
        t.x = 323,
        t.y = 300,
        t.elementsContent = [this._Image3_i(), this._Label1_i()],
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.height = 52,
        t.source = "common_btn_bg_style_orange_1_png",
        t.width = 176,
        t.x = 0,
        t.y = 3,
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "HuaKangXinZongYi",
        t.size = 26,
        t.stroke = 1,
        t.strokeColor = 16642157,
        t.text = "立即购买",
        t.textColor = 9261339,
        t.x = 34,
        t.y = 14,
        t
    },
    i.btnCancel_i = function() {
        var t = new eui.Group;
        return this.btnCancel = t,
        t.x = 109,
        t.y = 301,
        t.elementsContent = [this._Image4_i(), this.txtLabel_i()],
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.height = 50,
        t.source = "common_btn_bg_style_blue_1_png",
        t.width = 174,
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
        t.strokeColor = 1335436,
        t.text = "放弃购买",
        t.textColor = 16777215,
        t.x = 33,
        t.y = 9,
        t
    },
    i._Image5_i = function() {
        var t = new eui.Image;
        return t.height = 26,
        t.source = "pveTrekAllPop_texture_123asd_png",
        t.width = 427,
        t.x = 92,
        t.y = 260,
        t
    },
    i.txt_itemCount_i = function() {
        var t = new eui.Label;
        return this.txt_itemCount = t,
        t.size = 16,
        t.text = "需要迷晶：000",
        t.textColor = 16777215,
        t.x = 261,
        t.y = 265,
        t
    },
    i.icon_i = function() {
        var t = new eui.Image;
        return this.icon = t,
        t.height = 26,
        t.width = 26,
        t.x = 222,
        t.y = 259,
        t
    },
    i.list_item_i = function() {
        var t = new eui.List;
        return this.list_item = t,
        t.height = 168,
        t.width = 506,
        t.x = 49,
        t.y = 85,
        t.layout = this._VerticalLayout1_i(),
        t
    },
    i._VerticalLayout1_i = function() {
        var t = new eui.VerticalLayout;
        return t.gap = 0,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/pop/RandomAnswerSkin.exml"] = window.pveTrek.RandomAnswerSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["title_sjxz", "btnClose", "txt_answer", "list_btn"],
        this.height = 374,
        this.width = 620,
        this.elementsContent = [this._Image1_i(), this._Image2_i(), this.title_sjxz_i(), this.btnClose_i(), this.txt_answer_i(), this.list_btn_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 333,
        t.source = "common_pop_point_png",
        t.width = 608,
        t.x = 0,
        t.y = 41,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 42,
        t.source = "common_pop_title_samll_png",
        t.width = 600,
        t.x = 4,
        t.y = 22,
        t
    },
    i.title_sjxz_i = function() {
        var t = new eui.Image;
        return this.title_sjxz = t,
        t.height = 26,
        t.source = "pveTrekAllPop_title_sjxz_png",
        t.width = 113,
        t.x = 37,
        t.y = 28,
        t
    },
    i.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.height = 56,
        t.source = "common_close_1_png",
        t.width = 54,
        t.x = 566,
        t.y = 0,
        t
    },
    i.txt_answer_i = function() {
        var t = new eui.Label;
        return this.txt_answer = t,
        t.horizontalCenter = 0,
        t.size = 20,
        t.text = "动态加载，预留三行字",
        t.textColor = 2634350,
        t.y = 117,
        t
    },
    i.list_btn_i = function() {
        var t = new eui.List;
        return this.list_btn = t,
        t.horizontalCenter = 0,
        t.x = 310,
        t.y = 217,
        t.layout = this._TileLayout1_i(),
        t
    },
    i._TileLayout1_i = function() {
        var t = new eui.TileLayout;
        return t.horizontalGap = 40,
        t.orientation = "rows",
        t.requestedColumnCount = 2,
        t.verticalGap = 20,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/pop/ReadBattleSkin.exml"] = window.pveTrek.ReadBattleSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["imgBtn_close", "imgBtn_battle", "img_cz", "czt", "img_yh", "yht", "list_skill", "list_yhl", "scroller_yh", "list_cz", "icon_jlxq", "imgBtn_xz1", "hp_bar", "txt_nullSKill5", "lock", "grp_noskill5", "imgBtn_sf", "imgBtn_sz1", "txt_spName", "txt_hp", "t4", "txt_wl", "txt_pp", "icon_skill5", "grp_showSkill5", "head_icon", "head_mask", "grp_null", "img_sf"],
        this.height = 538,
        this.width = 938,
        this.elementsContent = [this._Image1_i(), this._Image2_i(), this._Image3_i(), this._Image4_i(), this._Image5_i(), this.imgBtn_close_i(), this.imgBtn_battle_i(), this.czt_i(), this.yht_i(), this.list_skill_i(), this.scroller_yh_i(), this.list_cz_i(), this.icon_jlxq_i(), this.grp_null_i(), this.img_sf_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 538,
        t.source = "common_s9_pop_bg1_png",
        t.width = 938,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 487,
        t.source = "common_pop_point_png",
        t.width = 915,
        t.x = 11,
        t.y = 32,
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.height = 358,
        t.scale9Grid = new egret.Rectangle(1, 1, 12, 12),
        t.visible = !0,
        t.width = 431,
        t.x = 468,
        t.y = 87,
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.source = "common_pop_title_big_png",
        t.x = 15,
        t.y = 13,
        t
    },
    i._Image5_i = function() {
        var t = new eui.Image;
        return t.source = "pve_star_trek_event_pop_title_zdzb_png",
        t.x = 48,
        t.y = 19,
        t
    },
    i.imgBtn_close_i = function() {
        var t = new eui.Image;
        return this.imgBtn_close = t,
        t.source = "common_close_1_png",
        t.x = 884,
        t.y = -7,
        t
    },
    i.imgBtn_battle_i = function() {
        var t = new eui.Image;
        return this.imgBtn_battle = t,
        t.height = 50,
        t.source = "pve_star_trek_event_pop_imgBtn_battle_png",
        t.width = 174,
        t.x = 369,
        t.y = 459,
        t
    },
    i.czt_i = function() {
        var t = new eui.Group;
        return this.czt = t,
        t.x = 42,
        t.y = 87,
        t.elementsContent = [this._Image6_i(), this.img_cz_i()],
        t
    },
    i._Image6_i = function() {
        var t = new eui.Image;
        return t.height = 190,
        t.source = "common_texture_002_png",
        t.width = 417,
        t.x = 0,
        t.y = 0,
        t
    },
    i.img_cz_i = function() {
        var t = new eui.Image;
        return this.img_cz = t,
        t.height = 190,
        t.source = "pve_star_trek_event_pop_img_cz_png",
        t.width = 40,
        t.x = 0,
        t.y = 0,
        t
    },
    i.yht_i = function() {
        var t = new eui.Group;
        return this.yht = t,
        t.x = 42,
        t.y = 285,
        t.elementsContent = [this._Image7_i(), this.img_yh_i()],
        t
    },
    i._Image7_i = function() {
        var t = new eui.Image;
        return t.height = 160,
        t.source = "common_texture_002_png",
        t.width = 417,
        t.x = 0,
        t.y = 0,
        t
    },
    i.img_yh_i = function() {
        var t = new eui.Image;
        return this.img_yh = t,
        t.height = 160,
        t.source = "pve_star_trek_event_pop_img_yh_png",
        t.width = 40,
        t.x = 0,
        t.y = 0,
        t
    },
    i.list_skill_i = function() {
        var t = new eui.List;
        return this.list_skill = t,
        t.height = 130,
        t.width = 403,
        t.x = 482,
        t.y = 185,
        t.layout = this._TileLayout1_i(),
        t
    },
    i._TileLayout1_i = function() {
        var t = new eui.TileLayout;
        return t.horizontalGap = 7,
        t.orientation = "rows",
        t.requestedColumnCount = 2,
        t.verticalGap = 4,
        t
    },
    i.scroller_yh_i = function() {
        var t = new eui.Scroller;
        return this.scroller_yh = t,
        t.height = 146,
        t.scrollPolicyH = "off",
        t.width = 362,
        t.x = 86,
        t.y = 292,
        t.viewport = this._Group1_i(),
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.x = -1,
        t.y = -1,
        t.elementsContent = [this.list_yhl_i()],
        t
    },
    i.list_yhl_i = function() {
        var t = new eui.List;
        return this.list_yhl = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.layout = this._TileLayout2_i(),
        t
    },
    i._TileLayout2_i = function() {
        var t = new eui.TileLayout;
        return t.horizontalGap = -12,
        t.orientation = "rows",
        t.requestedColumnCount = 4,
        t.verticalGap = -12,
        t
    },
    i.list_cz_i = function() {
        var t = new eui.List;
        return this.list_cz = t,
        t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.height = 186,
        t.width = 294,
        t.x = 114,
        t.y = 88,
        t.layout = this._TileLayout3_i(),
        t
    },
    i._TileLayout3_i = function() {
        var t = new eui.TileLayout;
        return t.horizontalGap = -12,
        t.orientation = "rows",
        t.requestedColumnCount = 3,
        t.verticalGap = -12,
        t
    },
    i.icon_jlxq_i = function() {
        var t = new eui.Image;
        return this.icon_jlxq = t,
        t.height = 197,
        t.source = "pve_star_trek_event_pop_icon_jlxq_png",
        t.width = 159,
        t.x = 604,
        t.y = 165,
        t
    },
    i.grp_null_i = function() {
        var t = new eui.Group;
        return this.grp_null = t,
        t.x = 482,
        t.y = 105,
        t.elementsContent = [this._Image8_i(), this._Image9_i(), this._Image10_i(), this.imgBtn_xz1_i(), this.hp_bar_i(), this.grp_noskill5_i(), this.imgBtn_sf_i(), this.imgBtn_sz1_i(), this.txt_spName_i(), this.txt_hp_i(), this.grp_showSkill5_i(), this._Group2_i()],
        t
    },
    i._Image8_i = function() {
        var t = new eui.Image;
        return t.height = 16,
        t.source = "pve_star_trek_event_pop_hp_bg2_png",
        t.width = 323,
        t.x = 78,
        t.y = 52,
        t
    },
    i._Image9_i = function() {
        var t = new eui.Image;
        return t.height = 68,
        t.source = "common_pet_head_bg_size_110_110_png",
        t.width = 68,
        t.x = 2,
        t.y = 0,
        t
    },
    i._Image10_i = function() {
        var t = new eui.Image;
        return t.height = 63,
        t.source = "pve_star_trek_petInfo_pop_skill_bg_png",
        t.width = 401,
        t.x = 0,
        t.y = 214,
        t
    },
    i.imgBtn_xz1_i = function() {
        var t = new eui.Image;
        return this.imgBtn_xz1 = t,
        t.height = 40,
        t.source = "pve_star_trek_event_pop_imgBtn_xz1_png",
        t.width = 90,
        t.x = 309,
        t.y = 289,
        t
    },
    i.hp_bar_i = function() {
        var t = new eui.Image;
        return this.hp_bar = t,
        t.height = 16,
        t.source = "pve_star_trek_event_pop_hp_bar2_png",
        t.width = 323,
        t.x = 78,
        t.y = 52,
        t
    },
    i.grp_noskill5_i = function() {
        var t = new eui.Group;
        return this.grp_noskill5 = t,
        t.x = 112,
        t.y = 232,
        t.elementsContent = [this.txt_nullSKill5_i(), this.lock_i()],
        t
    },
    i.txt_nullSKill5_i = function() {
        var t = new eui.Label;
        return this.txt_nullSKill5 = t,
        t.size = 18,
        t.text = "无法开启第五技能",
        t.textColor = 4217228,
        t.x = 29,
        t.y = 5,
        t
    },
    i.lock_i = function() {
        var t = new eui.Image;
        return this.lock = t,
        t.height = 27,
        t.source = "pve_star_trek_event_pop_lock_png",
        t.width = 22,
        t.x = 0,
        t.y = 0,
        t
    },
    i.imgBtn_sf_i = function() {
        var t = new eui.Image;
        return this.imgBtn_sf = t,
        t.height = 40,
        t.source = "pve_star_trek_event_pop_imgBtn_sf_png",
        t.width = 90,
        t.x = 207,
        t.y = 289,
        t
    },
    i.imgBtn_sz1_i = function() {
        var t = new eui.Image;
        return this.imgBtn_sz1 = t,
        t.height = 40,
        t.source = "pve_star_trek_event_pop_imgBtn_sz1_png",
        t.width = 90,
        t.x = 309,
        t.y = 289,
        t
    },
    i.txt_spName_i = function() {
        var t = new eui.Label;
        return this.txt_spName = t,
        t.size = 20,
        t.text = "LV.100  精灵名字精灵名",
        t.textAlign = "right",
        t.textColor = 16711422,
        t.width = 270,
        t.x = 131,
        t.y = 3,
        t
    },
    i.txt_hp_i = function() {
        var t = new eui.Label;
        return this.txt_hp = t,
        t.size = 16,
        t.text = "HP:100/1000",
        t.textAlign = "right",
        t.textColor = 4041205,
        t.width = 138,
        t.x = 258,
        t.y = 36,
        t
    },
    i.grp_showSkill5_i = function() {
        var t = new eui.Group;
        return this.grp_showSkill5 = t,
        t.x = 61,
        t.y = 223,
        t.elementsContent = [this._Image11_i(), this.t4_i(), this.txt_wl_i(), this.txt_pp_i(), this.icon_skill5_i(), this._Label1_i(), this._Label2_i()],
        t
    },
    i._Image11_i = function() {
        var t = new eui.Image;
        return t.height = 46,
        t.source = "common_icon_bg_style_1_png",
        t.width = 46,
        t.x = 0,
        t.y = 0,
        t
    },
    i.t4_i = function() {
        var t = new eui.Label;
        return this.t4 = t,
        t.size = 18,
        t.text = "第五技能：技能名称几个字",
        t.textColor = 15068927,
        t.width = 216,
        t.x = 67,
        t.y = 0,
        t
    },
    i.txt_wl_i = function() {
        var t = new eui.Label;
        return this.txt_wl = t,
        t.size = 16,
        t.text = "100",
        t.textColor = 4173823,
        t.x = 119,
        t.y = 32,
        t
    },
    i.txt_pp_i = function() {
        var t = new eui.Label;
        return this.txt_pp = t,
        t.size = 16,
        t.text = "20/20",
        t.textColor = 4173823,
        t.x = 228,
        t.y = 30,
        t
    },
    i.icon_skill5_i = function() {
        var t = new eui.Image;
        return this.icon_skill5 = t,
        t.height = 39,
        t.source = "",
        t.width = 35,
        t.x = 6,
        t.y = 4,
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.size = 16,
        t.text = "威力:",
        t.textColor = 4173823,
        t.x = 67,
        t.y = 30,
        t
    },
    i._Label2_i = function() {
        var t = new eui.Label;
        return t.size = 16,
        t.text = "PP:",
        t.textColor = 4173823,
        t.x = 191,
        t.y = 32,
        t
    },
    i._Group2_i = function() {
        var t = new eui.Group;
        return t.height = 68,
        t.width = 68,
        t.x = 2,
        t.y = 0,
        t.elementsContent = [this.head_icon_i(), this.head_mask_i()],
        t
    },
    i.head_icon_i = function() {
        var t = new eui.Image;
        return this.head_icon = t,
        t.height = 68,
        t.horizontalCenter = 0,
        t.scaleX = 1,
        t.scaleY = 1,
        t.verticalCenter = 0,
        t.width = 68,
        t
    },
    i.head_mask_i = function() {
        var t = new eui.Rect;
        return this.head_mask = t,
        t.height = 68,
        t.visible = !1,
        t.width = 68,
        t.x = 0,
        t.y = 0,
        t
    },
    i.img_sf_i = function() {
        var t = new eui.Image;
        return this.img_sf = t,
        t.source = "pve_star_trek_sf_png",
        t.x = 44,
        t.y = 75,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/pop/ShowSortPopSkin.exml"] = window.pveTrek.ShowSortPopSkin = function(t) {
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
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "pveTrekSetPets_id_sort_down_down_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "pveTrekSetPets_id_sort_down_up_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("disabled", [])]
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
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "pveTrekSetPets_id_sort_up_down_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "pveTrekSetPets_id_sort_up_up_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("disabled", [])]
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
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "pveTrekSetPets_lvl_sort_down_down_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "pveTrekSetPets_lvl_sort_down_up_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("disabled", [])]
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
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "pveTrekSetPets_lvl_sort_up_down_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "pveTrekSetPets_lvl_sort_up_up_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("disabled", [])]
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
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "pveTrekSetPets_tm_sort_down_down_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "pveTrekSetPets_tm_sort_down_up_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("disabled", [])]
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
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "pveTrekSetPets_tm_sort_up_down_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "pveTrekSetPets_tm_sort_up_up_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("disabled", [])]
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
        t.source = "pveTrek_sort_bg_png",
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
        t.skinName = o,
        t
    },
    _.rb_tm_sort_down_i = function() {
        var t = new eui.RadioButton;
        return this.rb_tm_sort_down = t,
        t.groupName = "sortRbg",
        t.value = "tm_down",
        t.x = 331,
        t.y = 17,
        t.skinName = s,
        t
    },
    _.rb_tm_sort_up_i = function() {
        var t = new eui.RadioButton;
        return this.rb_tm_sort_up = t,
        t.groupName = "sortRbg",
        t.value = "tm_up",
        t.x = 331,
        t.y = 83,
        t.skinName = a,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/render/BufferItemSkin.exml"] = window.pveTrek.BufferItemSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["txt_buffer", "p_point"],
        this.height = 16,
        this.width = 317,
        this.elementsContent = [this.txt_buffer_i(), this.p_point_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.txt_buffer_i = function() {
        var t = new eui.Label;
        return this.txt_buffer = t,
        t.lineSpacing = 6,
        t.size = 16,
        t.text = "生命上限提升10%",
        t.textColor = 16777215,
        t.width = 300,
        t.x = 17,
        t.y = 0,
        t
    },
    i.p_point_i = function() {
        var t = new eui.Image;
        return this.p_point = t,
        t.height = 12,
        t.source = "pveTrekAllPop_p_point_png",
        t.width = 12,
        t.x = 0,
        t.y = 2,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/render/DispatchPetItemSkin.exml"] = window.pveTrek.DispatchPetItemSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["dispatch_item_bg", "flag_selcted_head", "head", "txtLv", "pet_head_size_60_60", "flag_select", "txt_rate", "img_jy", "img_yzw", "img_ypq"],
        this.height = 74,
        this.width = 222,
        this.elementsContent = [this.dispatch_item_bg_i(), this.pet_head_size_60_60_i(), this.flag_select_i(), this.txt_rate_i(), this._Group1_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.dispatch_item_bg_i = function() {
        var t = new eui.Image;
        return this.dispatch_item_bg = t,
        t.height = 74,
        t.source = "pveTrekAllPop_dispatch_item_bg_png",
        t.visible = !0,
        t.width = 222,
        t.x = 0,
        t.y = 0,
        t
    },
    i.pet_head_size_60_60_i = function() {
        var t = new eui.Group;
        return this.pet_head_size_60_60 = t,
        t.x = 11,
        t.y = 3,
        t.elementsContent = [this.flag_selcted_head_i(), this._Image1_i(), this._Image2_i(), this.head_i(), this.txtLv_i()],
        t
    },
    i.flag_selcted_head_i = function() {
        var t = new eui.Image;
        return this.flag_selcted_head = t,
        t.height = 67,
        t.source = "common_pet_head_select_100_100_png",
        t.visible = !0,
        t.width = 67,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 61,
        t.source = "common_avatar_bg_size_100_100_png",
        t.visible = !0,
        t.width = 61,
        t.x = 3,
        t.y = 3,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 60,
        t.source = "common_pet_head_bg_null_size_100_100_png",
        t.visible = !0,
        t.width = 60,
        t.x = 4,
        t.y = 4,
        t
    },
    i.head_i = function() {
        var t = new eui.Image;
        return this.head = t,
        t.height = 60,
        t.width = 60,
        t.x = 4,
        t.y = 4,
        t
    },
    i.txtLv_i = function() {
        var t = new eui.Label;
        return this.txtLv = t,
        t.size = 14,
        t.stroke = 1,
        t.strokeColor = 1973795,
        t.text = "Lv.100",
        t.textColor = 16773477,
        t.x = 1,
        t.y = 2,
        t
    },
    i.flag_select_i = function() {
        var t = new eui.Image;
        return this.flag_select = t,
        t.height = 29,
        t.source = "pveTrekAllPop_flag_select_png",
        t.width = 29,
        t.x = 62,
        t.y = 41,
        t
    },
    i.txt_rate_i = function() {
        var t = new eui.Label;
        return this.txt_rate = t,
        t.size = 20,
        t.text = "+15%",
        t.textColor = 16777215,
        t.verticalCenter = 0,
        t.visible = !0,
        t.x = 147,
        t.y = 27,
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.x = 29,
        t.y = 48,
        t.elementsContent = [this.img_jy_i(), this.img_yzw_i(), this.img_ypq_i()],
        t
    },
    i.img_jy_i = function() {
        var t = new eui.Image;
        return this.img_jy = t,
        t.height = 18,
        t.source = "pve_star_trek_event_pop_img_jy_png",
        t.visible = !1,
        t.width = 45,
        t.x = 0,
        t.y = 0,
        t
    },
    i.img_yzw_i = function() {
        var t = new eui.Image;
        return this.img_yzw = t,
        t.height = 18,
        t.source = "pve_star_trek_event_pop_img_zw_png",
        t.visible = !1,
        t.width = 45,
        t.x = 0,
        t.y = 0,
        t
    },
    i.img_ypq_i = function() {
        var t = new eui.Image;
        return this.img_ypq = t,
        t.height = 18,
        t.source = "pve_star_trek_event_pop_img_pq_png",
        t.visible = !1,
        t.width = 45,
        t.x = 0,
        t.y = 0,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/render/MonsterItemSkin.exml"] = window.pveTrek.MonsterItemSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["head", "txtLv", "lab_name"],
        this.height = 122,
        this.width = 100,
        this.elementsContent = [this._Image1_i(), this._Image2_i(), this.head_i(), this.txtLv_i(), this._Group1_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 122,
        t.source = "common_pet_head_bg_size_110_134_png",
        t.visible = !0,
        t.width = 100,
        t.y = 0,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 100,
        t.source = "common_pet_head_bg_null_size_100_100_png",
        t.visible = !0,
        t.width = 100,
        t.y = 0,
        t
    },
    i.head_i = function() {
        var t = new eui.Image;
        return this.head = t,
        t.height = 100,
        t.width = 100,
        t.y = 0,
        t
    },
    i.txtLv_i = function() {
        var t = new eui.Label;
        return this.txtLv = t,
        t.size = 18,
        t.stroke = 1,
        t.strokeColor = 1973795,
        t.text = "Lv.100",
        t.textColor = 16773477,
        t.visible = !1,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.bottom = 0,
        t.x = 0,
        t.elementsContent = [this._Image3_i(), this.lab_name_i()],
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.height = 22,
        t.scale9Grid = new egret.Rectangle(17, 3, 108, 22),
        t.source = "common_s9_name_bg_png",
        t.width = 100,
        t.x = 0,
        t.y = 0,
        t
    },
    i.lab_name_i = function() {
        var t = new eui.Label;
        return this.lab_name = t,
        t.size = 16,
        t.text = "精灵名字最多",
        t.textAlign = "center",
        t.textColor = 16777215,
        t.width = 96,
        t.x = 3,
        t.y = 3,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/render/OptionItemSkin.exml"] = window.pveTrek.OptionItemSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["txt_answer", "opt"],
        this.height = 40,
        this.width = 240,
        this.elementsContent = [this.opt_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.opt_i = function() {
        var t = new eui.Group;
        return this.opt = t,
        t.elementsContent = [this._Image1_i(), this.txt_answer_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 40,
        t.source = "pve_star_trek_event_pop_imgBtn_bg_png",
        t.width = 240,
        t.x = 0,
        t.y = 0,
        t
    },
    i.txt_answer_i = function() {
        var t = new eui.Label;
        return this.txt_answer = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 20,
        t.text = "每个预留九九九个字",
        t.textAlign = "center",
        t.textColor = 8341784,
        t.visible = !0,
        t.width = 223,
        t.x = 8,
        t.y = 11,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/render/PageItemSkin.exml"] = window.pveTrek.PageItemSkin = function(t) {
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
        t.source = "pveTrekSetPets_page_up_png",
        t.width = 24,
        t.x = 4,
        t.y = 4,
        t
    },
    i.page_down_i = function() {
        var t = new eui.Image;
        return this.page_down = t,
        t.height = 32,
        t.source = "pveTrekSetPets_page_down_png",
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
generateEUI.paths["resource/eui_skins/render/PetHeadBigSkinSkin.exml"] = window.pveTrek.PetHeadBigSkinSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["head", "txtName", "txtLv", "group_info", "flag_selectd"],
        this.height = 134,
        this.width = 110,
        this.elementsContent = [this._Group1_i(), this.flag_selectd_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Group1_i = function() {
        var t = new eui.Group;
        return t.elementsContent = [this._Image1_i(), this._Image2_i(), this.group_info_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 134,
        t.source = "common_pet_head_bg_size_110_134_png",
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
        t.elementsContent = [this._Image3_i(), this.head_i(), this.txtName_i(), this.txtLv_i()],
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.height = 25,
        t.source = "common_pet_head_name_bg_110_134_png",
        t.width = 110,
        t.x = 0,
        t.y = 109,
        t
    },
    i.head_i = function() {
        var t = new eui.Image;
        return this.head = t,
        t.height = 108,
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
        t.textColor = 16777215,
        t.x = 7,
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
        t.textColor = 16773477,
        t.x = 0,
        t.y = 0,
        t
    },
    i.flag_selectd_i = function() {
        var t = new eui.Image;
        return this.flag_selectd = t,
        t.height = 150,
        t.scale9Grid = new egret.Rectangle(11, 11, 70, 70),
        t.source = "common_icon_select_style_1_png",
        t.width = 128,
        t.x = -9,
        t.y = -8,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/render/PetHeadSmallSkin.exml"] = window.pveTrek.PetHeadSmallSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["icon", "txt_name", "txt_lv", "group_info", "flag_selectd"],
        this.height = 114,
        this.width = 94,
        this.elementsContent = [this._Group1_i(), this.flag_selectd_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Group1_i = function() {
        var t = new eui.Group;
        return t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image1_i(), this._Image2_i(), this.group_info_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 114,
        t.source = "common_pet_head_bg_size_110_134_png",
        t.visible = !0,
        t.width = 94,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 114,
        t.source = "common_pet_head_bg_null_size_110_134_png",
        t.visible = !0,
        t.width = 94,
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
        t.elementsContent = [this._Image3_i(), this.icon_i(), this.txt_name_i(), this.txt_lv_i()],
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.height = 22,
        t.source = "common_pet_head_name_bg_110_134_png",
        t.visible = !0,
        t.width = 94,
        t.x = 0,
        t.y = 92,
        t
    },
    i.icon_i = function() {
        var t = new eui.Image;
        return this.icon = t,
        t.height = 92,
        t.visible = !0,
        t.width = 92,
        t.x = 1,
        t.y = 2,
        t
    },
    i.txt_name_i = function() {
        var t = new eui.Label;
        return this.txt_name = t,
        t.size = 15,
        t.text = "精灵名字最多",
        t.textColor = 16777215,
        t.x = 2,
        t.y = 96,
        t
    },
    i.txt_lv_i = function() {
        var t = new eui.Label;
        return this.txt_lv = t,
        t.size = 18,
        t.stroke = 1,
        t.strokeColor = 1973795,
        t.text = "Lv.100",
        t.textColor = 16773477,
        t.x = 0,
        t.y = 0,
        t
    },
    i.flag_selectd_i = function() {
        var t = new eui.Image;
        return this.flag_selectd = t,
        t.height = 130,
        t.scale9Grid = new egret.Rectangle(11, 11, 70, 70),
        t.source = "common_icon_select_style_1_png",
        t.width = 112,
        t.x = -9,
        t.y = -8,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/render/PetMarkItemSkinSkin.exml"] = window.pveTrek.PetMarkItemSkinSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["icon", "mark"],
        this.height = 80,
        this.width = 80,
        this.elementsContent = [this.mark_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.mark_i = function() {
        var t = new eui.Group;
        return this.mark = t,
        t.elementsContent = [this._Image1_i(), this.icon_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 80,
        t.source = "common_icon_bg_style_1_png",
        t.width = 80,
        t.x = 0,
        t.y = 0,
        t
    },
    i.icon_i = function() {
        var t = new eui.Image;
        return this.icon = t,
        t.height = 56,
        t.source = "pveTrekSetPets_icon_png",
        t.width = 58,
        t.x = 11,
        t.y = 12,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/render/PetSkillItemSkinSkin.exml"] = window.pveTrek.PetSkillItemSkinSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["skill_name", "skill_type", "txt_pp", "texture_line", "txt_wl", "skill"],
        this.height = 63,
        this.width = 197,
        this.elementsContent = [this.skill_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.skill_i = function() {
        var t = new eui.Group;
        return this.skill = t,
        t.elementsContent = [this._Image1_i(), this.skill_name_i(), this.skill_type_i(), this.txt_pp_i(), this.texture_line_i(), this.txt_wl_i(), this._Label1_i(), this._Label2_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 63,
        t.source = "pveTrekSetPets_skill_bg_png",
        t.width = 197,
        t.x = 0,
        t.y = 0,
        t
    },
    i.skill_name_i = function() {
        var t = new eui.Label;
        return this.skill_name = t,
        t.size = 18,
        t.text = "技能名几个字",
        t.textColor = 15068927,
        t.x = 58,
        t.y = 10,
        t
    },
    i.skill_type_i = function() {
        var t = new eui.Image;
        return this.skill_type = t,
        t.height = 26,
        t.width = 23,
        t.x = 14,
        t.y = 6,
        t
    },
    i.txt_pp_i = function() {
        var t = new eui.Label;
        return this.txt_pp = t,
        t.size = 16,
        t.text = "20/20",
        t.textColor = 4173823,
        t.x = 137,
        t.y = 41,
        t
    },
    i.texture_line_i = function() {
        var t = new eui.Image;
        return this.texture_line = t,
        t.height = 1,
        t.source = "pveTrekSetPets_texture_line_png",
        t.width = 179,
        t.x = 8,
        t.y = 34,
        t
    },
    i.txt_wl_i = function() {
        var t = new eui.Label;
        return this.txt_wl = t,
        t.size = 16,
        t.text = "100",
        t.textColor = 4173823,
        t.x = 60,
        t.y = 41,
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.size = 16,
        t.text = "PP:",
        t.textColor = 4173823,
        t.x = 107,
        t.y = 41,
        t
    },
    i._Label2_i = function() {
        var t = new eui.Label;
        return t.size = 16,
        t.text = "威力:",
        t.textColor = 4173823,
        t.x = 15,
        t.y = 39,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/render/RedayBattlePetHeadItemSkin.exml"] = window.pveTrek.RedayBattlePetHeadItemSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["icon", "icon_type", "txt_lvl0", "img_jy", "img_sz", "img_yzw", "img_ypq", "img_sf", "grp_head", "head_null", "img_selecte"],
        this.height = 100,
        this.width = 100,
        this.elementsContent = [this._Image1_i(), this.grp_head_i(), this.head_null_i(), this.img_selecte_i()],
        this.states = [new eui.State("state_null", [new eui.SetProperty("grp_head", "visible", !1), new eui.SetProperty("img_selecte", "visible", !1)]), new eui.State("state_normal", [new eui.SetProperty("img_sf", "visible", !1), new eui.SetProperty("head_null", "visible", !1), new eui.SetProperty("img_selecte", "visible", !1)])]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 82,
        t.source = "common_pet_head_bg_size_110_110_png",
        t.visible = !0,
        t.width = 82,
        t.x = 9,
        t.y = 9,
        t
    },
    i.grp_head_i = function() {
        var t = new eui.Group;
        return this.grp_head = t,
        t.visible = !0,
        t.x = 9,
        t.y = 9,
        t.elementsContent = [this.icon_i(), this.icon_type_i(), this.txt_lvl0_i(), this.img_jy_i(), this.img_sz_i(), this.img_yzw_i(), this.img_ypq_i(), this.img_sf_i()],
        t
    },
    i.icon_i = function() {
        var t = new eui.Image;
        return this.icon = t,
        t.height = 80,
        t.source = "",
        t.width = 80,
        t.x = 1,
        t.y = 1,
        t
    },
    i.icon_type_i = function() {
        var t = new eui.Image;
        return this.icon_type = t,
        t.height = 23,
        t.visible = !1,
        t.width = 22,
        t.x = 4,
        t.y = 56,
        t
    },
    i.txt_lvl0_i = function() {
        var t = new eui.Label;
        return this.txt_lvl0 = t,
        t.size = 18,
        t.text = "Lv.100",
        t.textColor = 4173823,
        t.visible = !1,
        t.x = 0,
        t.y = 1,
        t
    },
    i.img_jy_i = function() {
        var t = new eui.Image;
        return this.img_jy = t,
        t.height = 18,
        t.source = "pve_star_trek_event_pop_img_jy_png",
        t.visible = !0,
        t.width = 45,
        t.x = 35,
        t.y = 62,
        t
    },
    i.img_sz_i = function() {
        var t = new eui.Image;
        return this.img_sz = t,
        t.height = 18,
        t.source = "pve_star_trek_event_pop_img_sz_png",
        t.visible = !0,
        t.width = 45,
        t.x = 35,
        t.y = 62,
        t
    },
    i.img_yzw_i = function() {
        var t = new eui.Image;
        return this.img_yzw = t,
        t.height = 18,
        t.source = "pve_star_trek_event_pop_img_zw_png",
        t.visible = !0,
        t.width = 45,
        t.x = 35,
        t.y = 62,
        t
    },
    i.img_ypq_i = function() {
        var t = new eui.Image;
        return this.img_ypq = t,
        t.height = 18,
        t.source = "pve_star_trek_event_pop_img_pq_png",
        t.visible = !0,
        t.width = 45,
        t.x = 35,
        t.y = 62,
        t
    },
    i.img_sf_i = function() {
        var t = new eui.Image;
        return this.img_sf = t,
        t.source = "pve_star_trek_sf_png",
        t.visible = !0,
        t.x = 34,
        t.y = 56,
        t
    },
    i.head_null_i = function() {
        var t = new eui.Image;
        return this.head_null = t,
        t.height = 82,
        t.source = "common_pet_head_bg_null_size_100_100_png",
        t.visible = !0,
        t.width = 82,
        t.x = 9,
        t.y = 9,
        t
    },
    i.img_selecte_i = function() {
        var t = new eui.Image;
        return this.img_selecte = t,
        t.height = 100,
        t.scale9Grid = new egret.Rectangle(15, 15, 94, 94),
        t.source = "pve_star_trek_pet_head_selected_png",
        t.width = 100,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/render/RewardItemSkin.exml"] = window.pveTrek.RewardItemSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["icon", "txt_cnt"],
        this.height = 60,
        this.width = 60,
        this.elementsContent = [this._Image1_i(), this.icon_i(), this.txt_cnt_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 60,
        t.source = "common_icon_bg_style_66_66_png",
        t.width = 60,
        t.x = 0,
        t.y = 0,
        t
    },
    i.icon_i = function() {
        var t = new eui.Image;
        return this.icon = t,
        t.horizontalCenter = 0,
        t.verticalCenter = 0,
        t.x = 30,
        t.y = 30,
        t
    },
    i.txt_cnt_i = function() {
        var t = new eui.Label;
        return this.txt_cnt = t,
        t.bottom = 0,
        t.right = 0,
        t.size = 16,
        t.text = "Label",
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/render/ShopItemSkin.exml"] = window.pveTrek.ShopItemSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["txt_desc", "flag_selcted"],
        this.height = 56,
        this.width = 506,
        this.elementsContent = [this._Image1_i(), this.txt_desc_i(), this._Image2_i(), this.flag_selcted_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 56,
        t.source = "pveTrekAllPop_shop_itemBg_png",
        t.visible = !0,
        t.width = 506,
        t.x = 0,
        t.y = 0,
        t
    },
    i.txt_desc_i = function() {
        var t = new eui.Label;
        return this.txt_desc = t,
        t.size = 18,
        t.text = "随机复活1只已阵亡的精灵",
        t.textColor = 2634350,
        t.x = 65,
        t.y = 18,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 29,
        t.source = "pveTrekAllPop_flag_kong_png",
        t.visible = !0,
        t.width = 29,
        t.x = 19,
        t.y = 14,
        t
    },
    i.flag_selcted_i = function() {
        var t = new eui.Image;
        return this.flag_selcted = t,
        t.height = 24,
        t.source = "pveTrekAllPop_flag_selcted_png",
        t.visible = !0,
        t.width = 25,
        t.x = 23,
        t.y = 14,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/view/PvetrekmainSkin.exml"] = window.pveTrek.PvetrekmainSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg02", "down_mask", "texture_bg_down", "btnStart", "btnContinue", "btnRest", "grp_btns", "flagYwc", "up_bg", "btnClose", "helpBtn", "top", "tgjl", "txtLabel", "btnReward", "list_reward", "txtCount_1"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg02_i(), this.down_mask_i(), this._Image1_i(), this._Image2_i(), this.texture_bg_down_i(), this._Group1_i(), this.top_i(), this._Group2_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.bg02_i = function() {
        var t = new eui.Image;
        return this.bg02 = t,
        t.horizontalCenter = 0,
        t.source = "pveTrekMain_bg02_png",
        t.visible = !0,
        t.y = 0,
        t
    },
    i.down_mask_i = function() {
        var t = new eui.Image;
        return this.down_mask = t,
        t.height = 233,
        t.left = 0,
        t.right = 0,
        t.scale9Grid = new egret.Rectangle(379, 159, 378, 29),
        t.source = "pveTrekMain_down_mask_png",
        t.visible = !0,
        t.y = 407,
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.bottom = 0,
        t.horizontalCenter = 456.5,
        t.source = "pveTrekMain_3358_png",
        t.visible = !0,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.bottom = 0,
        t.horizontalCenter = -430.5,
        t.source = "pveTrekMain_3356_png",
        t.visible = !0,
        t
    },
    i.texture_bg_down_i = function() {
        var t = new eui.Image;
        return this.texture_bg_down = t,
        t.height = 65,
        t.left = 0,
        t.right = 0,
        t.source = "pveTrekMain_texture_bg_down_png",
        t.visible = !0,
        t.y = 575,
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.height = 472,
        t.horizontalCenter = 0,
        t.visible = !0,
        t.width = 332,
        t.y = 127,
        t.elementsContent = [this.grp_btns_i(), this.flagYwc_i()],
        t
    },
    i.grp_btns_i = function() {
        var t = new eui.Group;
        return this.grp_btns = t,
        t.height = 472,
        t.visible = !0,
        t.width = 332,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this.btnStart_i(), this.btnContinue_i(), this.btnRest_i()],
        t
    },
    i.btnStart_i = function() {
        var t = new eui.Image;
        return this.btnStart = t,
        t.height = 472,
        t.source = "pveTrekMain_btnStart_png",
        t.visible = !0,
        t.width = 252,
        t.x = 40,
        t.y = 0,
        t
    },
    i.btnContinue_i = function() {
        var t = new eui.Image;
        return this.btnContinue = t,
        t.height = 152,
        t.source = "pveTrekMain_btnContinue_png",
        t.visible = !0,
        t.width = 152,
        t.x = 180,
        t.y = 243,
        t
    },
    i.btnRest_i = function() {
        var t = new eui.Image;
        return this.btnRest = t,
        t.height = 152,
        t.source = "pveTrekMain_btnRest_png",
        t.visible = !0,
        t.width = 152,
        t.x = 0,
        t.y = 243,
        t
    },
    i.flagYwc_i = function() {
        var t = new eui.Image;
        return this.flagYwc = t,
        t.height = 167,
        t.source = "pveTrekMain_flagYwc_png",
        t.visible = !0,
        t.width = 167,
        t.x = 83,
        t.y = 129,
        t
    },
    i.top_i = function() {
        var t = new eui.Group;
        return this.top = t,
        t.left = 0,
        t.right = 0,
        t.y = 0,
        t.elementsContent = [this.up_bg_i(), this.btnClose_i(), this.helpBtn_i(), this._Image3_i()],
        t
    },
    i.up_bg_i = function() {
        var t = new eui.Image;
        return this.up_bg = t,
        t.height = 51,
        t.left = 0,
        t.right = 0,
        t.source = "pveTrekMain_up_bg_png",
        t.y = 0,
        t
    },
    i.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.source = "common_close_2_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.helpBtn_i = function() {
        var t = new eui.Image;
        return this.helpBtn = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "common_help_icon_png",
        t.x = 241.99999999999977,
        t.y = 7,
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "pveTrekMode_tiile_xjmh_png",
        t.x = 112,
        t.y = 7,
        t
    },
    i._Group2_i = function() {
        var t = new eui.Group;
        return t.horizontalCenter = -18,
        t.y = 519,
        t.elementsContent = [this.tgjl_i(), this.btnReward_i(), this.list_reward_i(), this.txtCount_1_i()],
        t
    },
    i.tgjl_i = function() {
        var t = new eui.Image;
        return this.tgjl = t,
        t.height = 29,
        t.source = "pveTrekMain_tgjl_png",
        t.width = 152,
        t.x = 0,
        t.y = 0,
        t
    },
    i.btnReward_i = function() {
        var t = new eui.Group;
        return this.btnReward = t,
        t.x = 440,
        t.y = 60,
        t.elementsContent = [this._Image4_i(), this.txtLabel_i()],
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.height = 40,
        t.source = "common_btn_bg_style_orange_2_png",
        t.width = 90,
        t.x = 0,
        t.y = 0,
        t
    },
    i.txtLabel_i = function() {
        var t = new eui.Label;
        return this.txtLabel = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 20,
        t.text = "领取奖励",
        t.textColor = 8341784,
        t.x = 6,
        t.y = 11,
        t
    },
    i.list_reward_i = function() {
        var t = new eui.List;
        return this.list_reward = t,
        t.itemRendererSkinName = pveTrek.RewardItemSkin,
        t.width = 394,
        t.x = 34,
        t.y = 40,
        t.layout = this._HorizontalLayout1_i(),
        t.dataProvider = this._ArrayCollection1_i(),
        t
    },
    i._HorizontalLayout1_i = function() {
        var t = new eui.HorizontalLayout;
        return t
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
    i.txtCount_1_i = function() {
        var t = new eui.Label;
        return this.txtCount_1 = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.size = 18,
        t.text = "今日可探险次数：0",
        t.textColor = 13887988,
        t.visible = !0,
        t.x = 941,
        t.y = 79,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/view/PvetrekmodeSkin.exml"] = window.pveTrek.PvetrekmodeSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["mode_line", "star_4", "lock_4", "clear_4", "rect_left_down4", "rect_left_top4", "rect_right_down4", "rect_right_top4", "selcted_4", "p4", "star_0", "lock_0", "clear_0", "rect_left_down0", "rect_left_top0", "rect_right_down0", "rect_right_top0", "selcted_0", "p0", "star_1", "lock_1", "clear_1", "rect_left_down1", "rect_left_top1", "rect_right_down1", "rect_right_top1", "selcted_1", "p1", "star_2", "lock_2", "clear_2", "rect_left_down2", "rect_left_top2", "rect_right_down2", "rect_right_top2", "selcted_2", "p2", "star_3", "lock_3", "clear_3", "rect_left_down3", "rect_left_top3", "rect_right_down3", "rect_right_top3", "selcted_3", "p3", "modeGroup", "level_line_1", "level_line_2", "level_line_3", "level_line_4", "Grp_items", "levelGroup", "icon_boss", "txt_Bossname", "bossName", "txt_titleName", "txt_myName", "seerGroup", "mySeerInfo", "vs", "btnReady", "bossGroup", "btnBg", "zdzt", "flag_tanhao", "btnState", "up_bg", "btnClose", "helpBtn_png", "itemIcon", "txt_itemCount", "item", "title"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this._Image1_i(), this.modeGroup_i(), this.levelGroup_i(), this.bossGroup_i(), this.btnState_i(), this._Group2_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.horizontalCenter = 0,
        t.source = "pveTrekMain_bg02_png",
        t.y = 0,
        t
    },
    i.modeGroup_i = function() {
        var t = new eui.Group;
        return this.modeGroup = t,
        t.anchorOffsetX = 0,
        t.horizontalCenter = 15,
        t.visible = !1,
        t.width = 972,
        t.y = 135,
        t.elementsContent = [this.mode_line_i(), this.p4_i(), this.p0_i(), this.p1_i(), this.p2_i(), this.p3_i()],
        t
    },
    i.mode_line_i = function() {
        var t = new eui.Image;
        return this.mode_line = t,
        t.height = 258,
        t.source = "pveTrekMode_mode_line_png",
        t.width = 744,
        t.x = 83,
        t.y = 62,
        t
    },
    i.p4_i = function() {
        var t = new eui.Group;
        return this.p4 = t,
        t.visible = !0,
        t.x = 728,
        t.y = 150,
        t.elementsContent = [this.star_4_i(), this.lock_4_i(), this.clear_4_i(), this.selcted_4_i()],
        t
    },
    i.star_4_i = function() {
        var t = new eui.Image;
        return this.star_4 = t,
        t.height = 258,
        t.source = "pveTrekMode_star_5_png",
        t.width = 309,
        t.x = 0,
        t.y = 0,
        t
    },
    i.lock_4_i = function() {
        var t = new eui.Image;
        return this.lock_4 = t,
        t.height = 208,
        t.source = "pveTrekMode_lock_5_png",
        t.visible = !0,
        t.width = 201,
        t.x = 29,
        t.y = 27,
        t
    },
    i.clear_4_i = function() {
        var t = new eui.Image;
        return this.clear_4 = t,
        t.height = 24,
        t.source = "pveTrekMode_flag_clear_png",
        t.width = 91,
        t.x = 117,
        t.y = 170,
        t
    },
    i.selcted_4_i = function() {
        var t = new eui.Group;
        return this.selcted_4 = t,
        t.x = 60,
        t.y = 46,
        t.elementsContent = [this.rect_left_down4_i(), this.rect_left_top4_i(), this.rect_right_down4_i(), this.rect_right_top4_i()],
        t
    },
    i.rect_left_down4_i = function() {
        var t = new eui.Image;
        return this.rect_left_down4 = t,
        t.height = 23,
        t.source = "pveTrekMode_rect_left_down_png",
        t.width = 25,
        t.x = 0,
        t.y = 147,
        t
    },
    i.rect_left_top4_i = function() {
        var t = new eui.Image;
        return this.rect_left_top4 = t,
        t.height = 25,
        t.source = "pveTrekMode_rect_left_top_png",
        t.width = 27,
        t.x = 0,
        t.y = 0,
        t
    },
    i.rect_right_down4_i = function() {
        var t = new eui.Image;
        return this.rect_right_down4 = t,
        t.height = 25,
        t.source = "pveTrekMode_rect_right_down_png",
        t.width = 27,
        t.x = 153,
        t.y = 145,
        t
    },
    i.rect_right_top4_i = function() {
        var t = new eui.Image;
        return this.rect_right_top4 = t,
        t.height = 23,
        t.source = "pveTrekMode_rect_right_top_png",
        t.width = 25,
        t.x = 155,
        t.y = 0,
        t
    },
    i.p0_i = function() {
        var t = new eui.Group;
        return this.p0 = t,
        t.x = 0,
        t.y = 177,
        t.elementsContent = [this.star_0_i(), this.lock_0_i(), this.clear_0_i(), this.selcted_0_i()],
        t
    },
    i.star_0_i = function() {
        var t = new eui.Image;
        return this.star_0 = t,
        t.height = 130,
        t.source = "pveTrekMode_star_1_png",
        t.visible = !0,
        t.width = 140,
        t.x = 1,
        t.y = 0,
        t
    },
    i.lock_0_i = function() {
        var t = new eui.Image;
        return this.lock_0 = t,
        t.height = 130,
        t.source = "pveTrekMode_lock_1_png",
        t.width = 140,
        t.x = 1,
        t.y = 0,
        t
    },
    i.clear_0_i = function() {
        var t = new eui.Image;
        return this.clear_0 = t,
        t.height = 24,
        t.source = "pveTrekMode_flag_clear_png",
        t.width = 91,
        t.x = 26,
        t.y = 92,
        t
    },
    i.selcted_0_i = function() {
        var t = new eui.Group;
        return this.selcted_0 = t,
        t.height = 120,
        t.width = 130,
        t.x = 0,
        t.y = 6,
        t.elementsContent = [this.rect_left_down0_i(), this.rect_left_top0_i(), this.rect_right_down0_i(), this.rect_right_top0_i()],
        t
    },
    i.rect_left_down0_i = function() {
        var t = new eui.Image;
        return this.rect_left_down0 = t,
        t.bottom = 0,
        t.height = 23,
        t.left = 0,
        t.source = "pveTrekMode_rect_left_down_png",
        t.width = 25,
        t
    },
    i.rect_left_top0_i = function() {
        var t = new eui.Image;
        return this.rect_left_top0 = t,
        t.height = 25,
        t.left = 0,
        t.source = "pveTrekMode_rect_left_top_png",
        t.top = 0,
        t.width = 27,
        t
    },
    i.rect_right_down0_i = function() {
        var t = new eui.Image;
        return this.rect_right_down0 = t,
        t.bottom = 0,
        t.height = 25,
        t.right = 0,
        t.source = "pveTrekMode_rect_right_down_png",
        t.width = 27,
        t
    },
    i.rect_right_top0_i = function() {
        var t = new eui.Image;
        return this.rect_right_top0 = t,
        t.height = 23,
        t.right = 0,
        t.source = "pveTrekMode_rect_right_top_png",
        t.top = 0,
        t.width = 25,
        t
    },
    i.p1_i = function() {
        var t = new eui.Group;
        return this.p1 = t,
        t.x = 227,
        t.y = 0,
        t.elementsContent = [this.star_1_i(), this.lock_1_i(), this.clear_1_i(), this.selcted_1_i()],
        t
    },
    i.star_1_i = function() {
        var t = new eui.Image;
        return this.star_1 = t,
        t.height = 130,
        t.source = "pveTrekMode_star_1_png",
        t.visible = !0,
        t.width = 140,
        t.x = 1,
        t.y = 0,
        t
    },
    i.lock_1_i = function() {
        var t = new eui.Image;
        return this.lock_1 = t,
        t.height = 130,
        t.source = "pveTrekMode_lock_1_png",
        t.width = 140,
        t.x = 1,
        t.y = 0,
        t
    },
    i.clear_1_i = function() {
        var t = new eui.Image;
        return this.clear_1 = t,
        t.height = 24,
        t.source = "pveTrekMode_flag_clear_png",
        t.width = 91,
        t.x = 26,
        t.y = 92,
        t
    },
    i.selcted_1_i = function() {
        var t = new eui.Group;
        return this.selcted_1 = t,
        t.height = 120,
        t.width = 130,
        t.x = 0,
        t.y = 6,
        t.elementsContent = [this.rect_left_down1_i(), this.rect_left_top1_i(), this.rect_right_down1_i(), this.rect_right_top1_i()],
        t
    },
    i.rect_left_down1_i = function() {
        var t = new eui.Image;
        return this.rect_left_down1 = t,
        t.bottom = 0,
        t.height = 23,
        t.left = 0,
        t.source = "pveTrekMode_rect_left_down_png",
        t.width = 25,
        t
    },
    i.rect_left_top1_i = function() {
        var t = new eui.Image;
        return this.rect_left_top1 = t,
        t.height = 25,
        t.left = 0,
        t.source = "pveTrekMode_rect_left_top_png",
        t.top = 0,
        t.width = 27,
        t
    },
    i.rect_right_down1_i = function() {
        var t = new eui.Image;
        return this.rect_right_down1 = t,
        t.bottom = 0,
        t.height = 25,
        t.right = 0,
        t.source = "pveTrekMode_rect_right_down_png",
        t.width = 27,
        t
    },
    i.rect_right_top1_i = function() {
        var t = new eui.Image;
        return this.rect_right_top1 = t,
        t.height = 23,
        t.right = 0,
        t.source = "pveTrekMode_rect_right_top_png",
        t.top = 0,
        t.width = 25,
        t
    },
    i.p2_i = function() {
        var t = new eui.Group;
        return this.p2 = t,
        t.x = 347,
        t.y = 236,
        t.elementsContent = [this.star_2_i(), this.lock_2_i(), this.clear_2_i(), this.selcted_2_i()],
        t
    },
    i.star_2_i = function() {
        var t = new eui.Image;
        return this.star_2 = t,
        t.height = 130,
        t.source = "pveTrekMode_star_1_png",
        t.visible = !0,
        t.width = 140,
        t.x = 1,
        t.y = 0,
        t
    },
    i.lock_2_i = function() {
        var t = new eui.Image;
        return this.lock_2 = t,
        t.height = 130,
        t.source = "pveTrekMode_lock_1_png",
        t.width = 140,
        t.x = 1,
        t.y = 0,
        t
    },
    i.clear_2_i = function() {
        var t = new eui.Image;
        return this.clear_2 = t,
        t.height = 24,
        t.source = "pveTrekMode_flag_clear_png",
        t.width = 91,
        t.x = 26,
        t.y = 92,
        t
    },
    i.selcted_2_i = function() {
        var t = new eui.Group;
        return this.selcted_2 = t,
        t.height = 120,
        t.width = 130,
        t.x = 0,
        t.y = 6,
        t.elementsContent = [this.rect_left_down2_i(), this.rect_left_top2_i(), this.rect_right_down2_i(), this.rect_right_top2_i()],
        t
    },
    i.rect_left_down2_i = function() {
        var t = new eui.Image;
        return this.rect_left_down2 = t,
        t.bottom = 0,
        t.height = 23,
        t.left = 0,
        t.source = "pveTrekMode_rect_left_down_png",
        t.width = 25,
        t
    },
    i.rect_left_top2_i = function() {
        var t = new eui.Image;
        return this.rect_left_top2 = t,
        t.height = 25,
        t.left = 0,
        t.source = "pveTrekMode_rect_left_top_png",
        t.top = 0,
        t.width = 27,
        t
    },
    i.rect_right_down2_i = function() {
        var t = new eui.Image;
        return this.rect_right_down2 = t,
        t.bottom = 0,
        t.height = 25,
        t.right = 0,
        t.source = "pveTrekMode_rect_right_down_png",
        t.width = 27,
        t
    },
    i.rect_right_top2_i = function() {
        var t = new eui.Image;
        return this.rect_right_top2 = t,
        t.height = 23,
        t.right = 0,
        t.source = "pveTrekMode_rect_right_top_png",
        t.top = 0,
        t.width = 25,
        t
    },
    i.p3_i = function() {
        var t = new eui.Group;
        return this.p3 = t,
        t.x = 568,
        t.y = 73,
        t.elementsContent = [this.star_3_i(), this.lock_3_i(), this.clear_3_i(), this.selcted_3_i()],
        t
    },
    i.star_3_i = function() {
        var t = new eui.Image;
        return this.star_3 = t,
        t.height = 130,
        t.source = "pveTrekMode_star_1_png",
        t.visible = !0,
        t.width = 140,
        t.x = 1,
        t.y = 0,
        t
    },
    i.lock_3_i = function() {
        var t = new eui.Image;
        return this.lock_3 = t,
        t.height = 130,
        t.source = "pveTrekMode_lock_1_png",
        t.width = 140,
        t.x = 1,
        t.y = 0,
        t
    },
    i.clear_3_i = function() {
        var t = new eui.Image;
        return this.clear_3 = t,
        t.height = 24,
        t.source = "pveTrekMode_flag_clear_png",
        t.width = 91,
        t.x = 26,
        t.y = 92,
        t
    },
    i.selcted_3_i = function() {
        var t = new eui.Group;
        return this.selcted_3 = t,
        t.height = 120,
        t.width = 130,
        t.x = 0,
        t.y = 6,
        t.elementsContent = [this.rect_left_down3_i(), this.rect_left_top3_i(), this.rect_right_down3_i(), this.rect_right_top3_i()],
        t
    },
    i.rect_left_down3_i = function() {
        var t = new eui.Image;
        return this.rect_left_down3 = t,
        t.bottom = 0,
        t.height = 23,
        t.left = 0,
        t.source = "pveTrekMode_rect_left_down_png",
        t.width = 25,
        t
    },
    i.rect_left_top3_i = function() {
        var t = new eui.Image;
        return this.rect_left_top3 = t,
        t.height = 25,
        t.left = 0,
        t.source = "pveTrekMode_rect_left_top_png",
        t.top = 0,
        t.width = 27,
        t
    },
    i.rect_right_down3_i = function() {
        var t = new eui.Image;
        return this.rect_right_down3 = t,
        t.bottom = 0,
        t.height = 25,
        t.right = 0,
        t.source = "pveTrekMode_rect_right_down_png",
        t.width = 27,
        t
    },
    i.rect_right_top3_i = function() {
        var t = new eui.Image;
        return this.rect_right_top3 = t,
        t.height = 23,
        t.right = 0,
        t.source = "pveTrekMode_rect_right_top_png",
        t.top = 0,
        t.width = 25,
        t
    },
    i.levelGroup_i = function() {
        var t = new eui.Group;
        return this.levelGroup = t,
        t.percentHeight = 100,
        t.visible = !1,
        t.percentWidth = 100,
        t.elementsContent = [this.level_line_1_i(), this.level_line_2_i(), this.level_line_3_i(), this.level_line_4_i(), this.Grp_items_i()],
        t
    },
    i.level_line_1_i = function() {
        var t = new eui.Image;
        return this.level_line_1 = t,
        t.height = 63,
        t.horizontalCenter = 1,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "pveTrekLevel_level_line_1_png",
        t.visible = !1,
        t.width = 530,
        t.y = 302.99999999999994,
        t
    },
    i.level_line_2_i = function() {
        var t = new eui.Image;
        return this.level_line_2 = t,
        t.height = 310,
        t.horizontalCenter = 2,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "pveTrekLevel_level_line_2_png",
        t.visible = !1,
        t.width = 730,
        t.y = 180,
        t
    },
    i.level_line_3_i = function() {
        var t = new eui.Image;
        return this.level_line_3 = t,
        t.height = 328,
        t.horizontalCenter = 12.5,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "pveTrekLevel_level_line_3_png",
        t.visible = !1,
        t.width = 761,
        t.y = 172,
        t
    },
    i.level_line_4_i = function() {
        var t = new eui.Image;
        return this.level_line_4 = t,
        t.height = 320,
        t.horizontalCenter = 11,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "pveTrekLevel_level_line_4_png",
        t.visible = !1,
        t.width = 846,
        t.y = 171,
        t
    },
    i.Grp_items_i = function() {
        var t = new eui.Group;
        return this.Grp_items = t,
        t.percentHeight = 100,
        t.visible = !0,
        t.percentWidth = 100,
        t
    },
    i.bossGroup_i = function() {
        var t = new eui.Group;
        return this.bossGroup = t,
        t.height = 584,
        t.horizontalCenter = -1,
        t.visible = !0,
        t.width = 1128,
        t.y = 56,
        t.elementsContent = [this.bossName_i(), this.mySeerInfo_i(), this.vs_i(), this.btnReady_i()],
        t
    },
    i.bossName_i = function() {
        var t = new eui.Group;
        return this.bossName = t,
        t.x = 600,
        t.y = 51,
        t.elementsContent = [this._Image2_i(), this._Group1_i(), this._Image3_i(), this._Image4_i(), this._Label1_i(), this.txt_Bossname_i()],
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 301,
        t.source = "common_hero_base_png",
        t.visible = !0,
        t.width = 479,
        t.x = 3,
        t.y = 198,
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.height = 0,
        t.width = 0,
        t.x = 237,
        t.y = 408,
        t.elementsContent = [this.icon_boss_i()],
        t
    },
    i.icon_boss_i = function() {
        var t = new eui.Image;
        return this.icon_boss = t,
        t.anchorOffsetX = 223,
        t.anchorOffsetY = 460,
        t.scaleX = 1,
        t.scaleY = 1,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.height = 37,
        t.source = "pveTrekBoss_boss_line_png",
        t.width = 183,
        t.x = 252,
        t.y = 66,
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.height = 32,
        t.source = "pveTrekBoss_namebg_png",
        t.width = 224,
        t.x = 304,
        t.y = 79,
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "HuaKangXinZongYi",
        t.size = 20,
        t.text = "BOSS",
        t.textColor = 4175861,
        t.x = 298,
        t.y = 56,
        t
    },
    i.txt_Bossname_i = function() {
        var t = new eui.Label;
        return this.txt_Bossname = t,
        t.size = 20,
        t.text = "精灵名称名称",
        t.textColor = 16777215,
        t.x = 328,
        t.y = 85,
        t
    },
    i.mySeerInfo_i = function() {
        var t = new eui.Group;
        return this.mySeerInfo = t,
        t.x = 0,
        t.y = 48,
        t.elementsContent = [this._Image5_i(), this._Image6_i(), this._Image7_i(), this.txt_titleName_i(), this.txt_myName_i(), this.seerGroup_i()],
        t
    },
    i._Image5_i = function() {
        var t = new eui.Image;
        return t.height = 301,
        t.source = "common_hero_base_png",
        t.width = 479,
        t.x = 43,
        t.y = 201,
        t
    },
    i._Image6_i = function() {
        var t = new eui.Image;
        return t.height = 37,
        t.source = "pveTrekBoss_my_line_png",
        t.width = 183,
        t.x = 113,
        t.y = 70,
        t
    },
    i._Image7_i = function() {
        var t = new eui.Image;
        return t.height = 32,
        t.source = "pveTrekBoss_namebg_png",
        t.width = 223,
        t.x = 3,
        t.y = 83,
        t
    },
    i.txt_titleName_i = function() {
        var t = new eui.Label;
        return this.txt_titleName = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 20,
        t.text = "称号九个字巴拉巴拉",
        t.textColor = 4175861,
        t.x = 65,
        t.y = 56,
        t
    },
    i.txt_myName_i = function() {
        var t = new eui.Label;
        return this.txt_myName = t,
        t.size = 19.8461494445801,
        t.text = "玩家名称九个字",
        t.textColor = 16777215,
        t.x = 65,
        t.y = 89,
        t
    },
    i.seerGroup_i = function() {
        var t = new eui.Group;
        return this.seerGroup = t,
        t.x = 280,
        t.y = 415,
        t
    },
    i.vs_i = function() {
        var t = new eui.Image;
        return this.vs = t,
        t.height = 584,
        t.source = "pveTrekBoss_vs_png",
        t.width = 559,
        t.x = 255,
        t.y = 0,
        t
    },
    i.btnReady_i = function() {
        var t = new eui.Image;
        return this.btnReady = t,
        t.height = 42,
        t.source = "pveTrekBoss_btnReady_png",
        t.width = 176,
        t.x = 942,
        t.y = 531,
        t
    },
    i.btnState_i = function() {
        var t = new eui.Group;
        return this.btnState = t,
        t.visible = !0,
        t.x = 15,
        t.y = 587,
        t.elementsContent = [this.btnBg_i(), this.zdzt_i(), this.flag_tanhao_i()],
        t
    },
    i.btnBg_i = function() {
        var t = new eui.Image;
        return this.btnBg = t,
        t.height = 42,
        t.source = "pveTrekMode_btnBg_png",
        t.width = 176,
        t.x = 0,
        t.y = 0,
        t
    },
    i.zdzt_i = function() {
        var t = new eui.Image;
        return this.zdzt = t,
        t.height = 29,
        t.source = "pveTrekMode_zdzt_png",
        t.width = 89,
        t.x = 27,
        t.y = 6,
        t
    },
    i.flag_tanhao_i = function() {
        var t = new eui.Image;
        return this.flag_tanhao = t,
        t.height = 39,
        t.source = "pveTrekMode_flag_tanhao_png",
        t.width = 39,
        t.x = 115,
        t.y = 1,
        t
    },
    i._Group2_i = function() {
        var t = new eui.Group;
        return t.left = 0,
        t.right = 0,
        t.visible = !0,
        t.y = 0,
        t.elementsContent = [this.up_bg_i(), this.btnClose_i(), this.helpBtn_png_i(), this.item_i(), this.title_i()],
        t
    },
    i.up_bg_i = function() {
        var t = new eui.Image;
        return this.up_bg = t,
        t.height = 51,
        t.left = 0,
        t.right = 0,
        t.source = "pveTrekMain_up_bg_png",
        t.y = 0,
        t
    },
    i.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.source = "common_close_2_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.helpBtn_png_i = function() {
        var t = new eui.Image;
        return this.helpBtn_png = t,
        t.source = "common_help_icon_png",
        t.x = 242,
        t.y = 7,
        t
    },
    i.item_i = function() {
        var t = new eui.Group;
        return this.item = t,
        t.right = 88,
        t.width = 142,
        t.y = 12,
        t.elementsContent = [this._Image8_i(), this.itemIcon_i(), this.txt_itemCount_i()],
        t
    },
    i._Image8_i = function() {
        var t = new eui.Image;
        return t.height = 24,
        t.source = "common_reward_progress_bg_png",
        t.width = 142,
        t.x = 0,
        t
    },
    i.itemIcon_i = function() {
        var t = new eui.Image;
        return this.itemIcon = t,
        t.height = 55,
        t.left = 0,
        t.scaleX = .7,
        t.scaleY = .7,
        t.width = 55,
        t.y = -6,
        t
    },
    i.txt_itemCount_i = function() {
        var t = new eui.Label;
        return this.txt_itemCount = t,
        t.size = 19,
        t.text = "0000",
        t.textAlign = "center",
        t.textColor = 13887988,
        t.x = 58,
        t.y = 3,
        t
    },
    i.title_i = function() {
        var t = new eui.Image;
        return this.title = t,
        t.source = "pveTrekMode_tiile_xjmh_png",
        t.x = 112,
        t.y = 7,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/view/PvetreksetpetsSkin.exml"] = window.pveTrek.PvetreksetpetsSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["rb_bag", "rb_warehouse", "rb_elite", "texture_allow", "editable_search", "btnSearch", "lab_find_attr", "icon_attr", "btnSelectdAttr", "group_petType", "lab_select_sort", "btn_sort", "group_sort", "selectAttributePos", "selectSortPos", "searchComp", "list_warehouse", "scroller_warehouse", "warehouseGroup", "list_selcted", "scroller_current", "btnBack", "btnStart", "texture_czjl", "txt_lab", "txtLabel", "btnOnetap", "czHead_0", "czHead_1", "czHead_2", "czHead_3", "czHead_4", "czHead_5", "petBagGrp_cz", "dmHead_0", "dmHead_1", "dmHead_2", "dmHead_3", "dmHead_4", "dmHead_5", "petBagGrp_dm", "list_page", "petBag", "img_noPet", "up_bg", "btnClose"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this._Image1_i(), this._Group7_i(), this._Group8_i()]
    }
    __extends(e, t);
    var i = function(t) {
        function e() {
            t.call(this),
            this.skinParts = [],
            this.height = 76,
            this.elementsContent = [this._Image1_i(), this._Label1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "common_tab_up_bg_png"), new eui.SetProperty("_Label1", "textColor", 6991854)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "common_tab_down_bg_png"), new eui.SetProperty("_Label1", "textColor", 16777215)]), new eui.State("disabled", [])]
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
            t.text = "精英收藏",
            t.verticalCenter = 0,
            t
        },
        e
    } (eui.Skin),
    o = e.prototype;
    return o._Image1_i = function() {
        var t = new eui.Image;
        return t.horizontalCenter = 0,
        t.source = "common_ui_bg_2_png",
        t.visible = !0,
        t.y = 0,
        t
    },
    o._Group7_i = function() {
        var t = new eui.Group;
        return t.visible = !0,
        t.percentWidth = 100,
        t.x = 0,
        t.y = 48,
        t.elementsContent = [this._Group2_i(), this._Group6_i()],
        t
    },
    o._Group2_i = function() {
        var t = new eui.Group;
        return t.maxWidth = 159,
        t.scaleX = 1,
        t.scaleY = 1,
        t.visible = !0,
        t.percentWidth = 11.443599999999998,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image2_i(), this._Group1_i()],
        t
    },
    o._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 592,
        t.left = 0,
        t.right = 9,
        t.source = "comon_left_bg_png",
        t.visible = !0,
        t.y = 0,
        t
    },
    o._Group1_i = function() {
        var t = new eui.Group;
        return t.percentWidth = 100,
        t.x = 0,
        t.y = 17,
        t.layout = this._VerticalLayout1_i(),
        t.elementsContent = [this.rb_bag_i(), this.rb_warehouse_i(), this.rb_elite_i()],
        t
    },
    o._VerticalLayout1_i = function() {
        var t = new eui.VerticalLayout;
        return t.gap = -10,
        t
    },
    o.rb_bag_i = function() {
        var t = new eui.RadioButton;
        return this.rb_bag = t,
        t.groupName = "navbar",
        t.label = "",
        t.value = "petBag",
        t.visible = !0,
        t.percentWidth = 100,
        t.x = 0,
        t.y = 0,
        t.skinName = i,
        t
    },
    o.rb_warehouse_i = function() {
        var t = new eui.RadioButton;
        return this.rb_warehouse = t,
        t.groupName = "navbar",
        t.value = "warehouse",
        t.percentWidth = 100,
        t.x = 0,
        t.y = 86,
        t.skinName = n,
        t
    },
    o.rb_elite_i = function() {
        var t = new eui.RadioButton;
        return this.rb_elite = t,
        t.groupName = "navbar",
        t.value = "elite",
        t.percentWidth = 100,
        t.x = 0,
        t.y = 86,
        t.skinName = r,
        t
    },
    o._Group6_i = function() {
        var t = new eui.Group;
        return t.horizontalCenter = 65.5,
        t.visible = !0,
        t.y = 14,
        t.elementsContent = [this.texture_allow_i(), this.searchComp_i(), this.warehouseGroup_i(), this._Group5_i(), this.petBag_i(), this.img_noPet_i()],
        t
    },
    o.texture_allow_i = function() {
        var t = new eui.Image;
        return this.texture_allow = t,
        t.height = 191,
        t.source = "pveTrekSetPets_texture_allow_png",
        t.visible = !0,
        t.width = 238,
        t.x = 293,
        t.y = 165,
        t
    },
    o.searchComp_i = function() {
        var t = new eui.Group;
        return this.searchComp = t,
        t.visible = !1,
        t.x = 0,
        t.y = 2,
        t.elementsContent = [this._Image3_i(), this.editable_search_i(), this.btnSearch_i(), this.group_petType_i(), this.group_sort_i(), this.selectAttributePos_i(), this.selectSortPos_i()],
        t
    },
    o._Image3_i = function() {
        var t = new eui.Image;
        return t.height = 40,
        t.source = "pveTrekSetPets_texture_001_png",
        t.width = 115,
        t.x = 0,
        t.y = 0,
        t
    },
    o.editable_search_i = function() {
        var t = new eui.EditableText;
        return this.editable_search = t,
        t.prompt = "输入名称",
        t.size = 16,
        t.textColor = 13097725,
        t.x = 8,
        t.y = 12,
        t
    },
    o.btnSearch_i = function() {
        var t = new eui.Image;
        return this.btnSearch = t,
        t.height = 38,
        t.source = "pveTrekSetPets_btnSerach_png",
        t.width = 38,
        t.x = 76,
        t.y = 1,
        t
    },
    o.group_petType_i = function() {
        var t = new eui.Group;
        return this.group_petType = t,
        t.x = 237,
        t.y = 0,
        t.elementsContent = [this._Image4_i(), this.lab_find_attr_i(), this.icon_attr_i(), this.btnSelectdAttr_i()],
        t
    },
    o._Image4_i = function() {
        var t = new eui.Image;
        return t.height = 40,
        t.source = "pveTrekSetPets_texture_001_png",
        t.width = 115,
        t.x = 0,
        t.y = 0,
        t
    },
    o.lab_find_attr_i = function() {
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
    o.icon_attr_i = function() {
        var t = new eui.Image;
        return this.icon_attr = t,
        t.scaleX = .5,
        t.scaleY = .5,
        t.source = "pveTrekSetPets_icon_attr_png",
        t.x = 6,
        t.y = 10,
        t
    },
    o.btnSelectdAttr_i = function() {
        var t = new eui.Image;
        return this.btnSelectdAttr = t,
        t.height = 18,
        t.source = "pveTrekSetPets_btnSelectdAttr_png",
        t.width = 18,
        t.x = 92,
        t.y = 10,
        t
    },
    o.group_sort_i = function() {
        var t = new eui.Group;
        return this.group_sort = t,
        t.visible = !0,
        t.x = 118,
        t.y = 0,
        t.elementsContent = [this._Image5_i(), this.lab_select_sort_i(), this.btn_sort_i()],
        t
    },
    o._Image5_i = function() {
        var t = new eui.Image;
        return t.height = 40,
        t.source = "pveTrekSetPets_texture_001_png",
        t.width = 115,
        t.x = 0,
        t.y = 0,
        t
    },
    o.lab_select_sort_i = function() {
        var t = new eui.Label;
        return this.lab_select_sort = t,
        t.size = 16,
        t.text = "默认顺序",
        t.textColor = 13097725,
        t.x = 8,
        t.y = 11,
        t
    },
    o.btn_sort_i = function() {
        var t = new eui.Image;
        return this.btn_sort = t,
        t.height = 18,
        t.source = "pveTrekSetPets_img_down_png",
        t.visible = !0,
        t.width = 18,
        t.x = 90,
        t.y = 10,
        t
    },
    o.selectAttributePos_i = function() {
        var t = new eui.Group;
        return this.selectAttributePos = t,
        t.height = 0,
        t.width = 0,
        t.x = 352,
        t.y = 42,
        t
    },
    o.selectSortPos_i = function() {
        var t = new eui.Group;
        return this.selectSortPos = t,
        t.height = 0,
        t.width = 0,
        t.x = 122,
        t.y = 42,
        t
    },
    o.warehouseGroup_i = function() {
        var t = new eui.Group;
        return this.warehouseGroup = t,
        t.visible = !0,
        t.x = 0,
        t.y = 48,
        t.elementsContent = [this.scroller_warehouse_i()],
        t
    },
    o.scroller_warehouse_i = function() {
        var t = new eui.Scroller;
        return this.scroller_warehouse = t,
        t.height = 502,
        t.width = 366,
        t.x = 0,
        t.y = 0,
        t.viewport = this._Group3_i(),
        t
    },
    o._Group3_i = function() {
        var t = new eui.Group;
        return t.elementsContent = [this.list_warehouse_i()],
        t
    },
    o.list_warehouse_i = function() {
        var t = new eui.List;
        return this.list_warehouse = t,
        t.itemRendererSkinName = pveTrek.PetHeadBigSkinSkin,
        t.layout = this._TileLayout1_i(),
        t.dataProvider = this._ArrayCollection1_i(),
        t
    },
    o._TileLayout1_i = function() {
        var t = new eui.TileLayout;
        return t.horizontalGap = 10,
        t.orientation = "rows",
        t.paddingBottom = 5,
        t.paddingLeft = 7,
        t.paddingTop = 5,
        t.requestedColumnCount = 3,
        t.verticalGap = 6,
        t
    },
    o._ArrayCollection1_i = function() {
        var t = new eui.ArrayCollection;
        return t.source = [this._Object1_i(), this._Object2_i(), this._Object3_i(), this._Object4_i(), this._Object5_i(), this._Object6_i(), this._Object7_i(), this._Object8_i(), this._Object9_i(), this._Object10_i(), this._Object11_i(), this._Object12_i(), this._Object13_i(), this._Object14_i(), this._Object15_i(), this._Object16_i()],
        t
    },
    o._Object1_i = function() {
        var t = {};
        return t.test = "",
        t
    },
    o._Object2_i = function() {
        var t = {};
        return t.test = "",
        t
    },
    o._Object3_i = function() {
        var t = {};
        return t.test = "",
        t
    },
    o._Object4_i = function() {
        var t = {};
        return t.test = "",
        t
    },
    o._Object5_i = function() {
        var t = {};
        return t.test = "",
        t
    },
    o._Object6_i = function() {
        var t = {};
        return t.test = "",
        t
    },
    o._Object7_i = function() {
        var t = {};
        return t.test = "",
        t
    },
    o._Object8_i = function() {
        var t = {};
        return t.test = "",
        t
    },
    o._Object9_i = function() {
        var t = {};
        return t.test = "",
        t
    },
    o._Object10_i = function() {
        var t = {};
        return t.test = "",
        t
    },
    o._Object11_i = function() {
        var t = {};
        return t.test = "",
        t
    },
    o._Object12_i = function() {
        var t = {};
        return t.test = "",
        t
    },
    o._Object13_i = function() {
        var t = {};
        return t.test = "",
        t
    },
    o._Object14_i = function() {
        var t = {};
        return t.test = "",
        t
    },
    o._Object15_i = function() {
        var t = {};
        return t.test = "",
        t
    },
    o._Object16_i = function() {
        var t = {};
        return t.test = "",
        t
    },
    o._Group5_i = function() {
        var t = new eui.Group;
        return t.height = 545,
        t.visible = !0,
        t.width = 484,
        t.x = 491,
        t.y = 7,
        t.elementsContent = [this.scroller_current_i(), this.btnBack_i(), this.btnStart_i(), this.texture_czjl_i(), this.txt_lab_i(), this.btnOnetap_i()],
        t
    },
    o.scroller_current_i = function() {
        var t = new eui.Scroller;
        return this.scroller_current = t,
        t.height = 450,
        t.width = 483,
        t.x = 1,
        t.y = 36,
        t.viewport = this._Group4_i(),
        t
    },
    o._Group4_i = function() {
        var t = new eui.Group;
        return t.elementsContent = [this.list_selcted_i()],
        t
    },
    o.list_selcted_i = function() {
        var t = new eui.List;
        return this.list_selcted = t,
        t.itemRendererSkinName = pveTrek.PetHeadBigSkinSkin,
        t.layout = this._TileLayout2_i(),
        t.dataProvider = this._ArrayCollection2_i(),
        t
    },
    o._TileLayout2_i = function() {
        var t = new eui.TileLayout;
        return t.horizontalGap = 10,
        t.orientation = "rows",
        t.paddingBottom = 5,
        t.paddingLeft = 5,
        t.paddingRight = 5,
        t.paddingTop = 5,
        t.requestedColumnCount = 4,
        t.verticalGap = 10,
        t
    },
    o._ArrayCollection2_i = function() {
        var t = new eui.ArrayCollection;
        return t.source = [this._Object17_i(), this._Object18_i(), this._Object19_i(), this._Object20_i(), this._Object21_i(), this._Object22_i(), this._Object23_i(), this._Object24_i(), this._Object25_i(), this._Object26_i(), this._Object27_i(), this._Object28_i(), this._Object29_i(), this._Object30_i(), this._Object31_i(), this._Object32_i()],
        t
    },
    o._Object17_i = function() {
        var t = {};
        return t.test1 = "",
        t
    },
    o._Object18_i = function() {
        var t = {};
        return t.test1 = "",
        t
    },
    o._Object19_i = function() {
        var t = {};
        return t.test1 = "",
        t
    },
    o._Object20_i = function() {
        var t = {};
        return t.test1 = "",
        t
    },
    o._Object21_i = function() {
        var t = {};
        return t.test1 = "",
        t
    },
    o._Object22_i = function() {
        var t = {};
        return t.test1 = "",
        t
    },
    o._Object23_i = function() {
        var t = {};
        return t.test1 = "",
        t
    },
    o._Object24_i = function() {
        var t = {};
        return t.test1 = "",
        t
    },
    o._Object25_i = function() {
        var t = {};
        return t.test1 = "",
        t
    },
    o._Object26_i = function() {
        var t = {};
        return t.test1 = "",
        t
    },
    o._Object27_i = function() {
        var t = {};
        return t.test1 = "",
        t
    },
    o._Object28_i = function() {
        var t = {};
        return t.test1 = "",
        t
    },
    o._Object29_i = function() {
        var t = {};
        return t.test1 = "",
        t
    },
    o._Object30_i = function() {
        var t = {};
        return t.test1 = "",
        t
    },
    o._Object31_i = function() {
        var t = {};
        return t.test1 = "",
        t
    },
    o._Object32_i = function() {
        var t = {};
        return t.test1 = "",
        t
    },
    o.btnBack_i = function() {
        var t = new eui.Image;
        return this.btnBack = t,
        t.height = 50,
        t.source = "pveTrekSetPets_btnBack_png",
        t.width = 174,
        t.x = 56,
        t.y = 495,
        t
    },
    o.btnStart_i = function() {
        var t = new eui.Image;
        return this.btnStart = t,
        t.height = 50,
        t.source = "pveTrekSetPets_btnStart_png",
        t.width = 174,
        t.x = 244,
        t.y = 495,
        t
    },
    o.texture_czjl_i = function() {
        var t = new eui.Image;
        return this.texture_czjl = t,
        t.height = 24,
        t.source = "pveTrekSetPets_texture_czjl_png",
        t.width = 103,
        t.x = 0,
        t.y = 0,
        t
    },
    o.txt_lab_i = function() {
        var t = new eui.Label;
        return this.txt_lab = t,
        t.size = 16,
        t.text = "最多可选择20只70级以上的精灵",
        t.textColor = 10270182,
        t.x = 111,
        t.y = 6,
        t
    },
    o.btnOnetap_i = function() {
        var t = new eui.Group;
        return this.btnOnetap = t,
        t.x = 722,
        t.y = -9,
        t.elementsContent = [this._Image6_i(), this.txtLabel_i()],
        t
    },
    o._Image6_i = function() {
        var t = new eui.Image;
        return t.height = 40,
        t.source = "common_btn_bg_style_orange_2_png",
        t.width = 100,
        t.x = -371,
        t.y = 0,
        t
    },
    o.txtLabel_i = function() {
        var t = new eui.Label;
        return this.txtLabel = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 20,
        t.text = "一键上阵",
        t.textColor = 8341784,
        t.x = -363,
        t.y = 11,
        t
    },
    o.petBag_i = function() {
        var t = new eui.Group;
        return this.petBag = t,
        t.visible = !0,
        t.x = 5,
        t.elementsContent = [this._Image7_i(), this._Image8_i(), this.petBagGrp_cz_i(), this.petBagGrp_dm_i(), this.list_page_i()],
        t
    },
    o._Image7_i = function() {
        var t = new eui.Image;
        return t.source = "pveTrekSetPets_cz_bg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    o._Image8_i = function() {
        var t = new eui.Image;
        return t.source = "pveTrekSetPets_dm_bg_png",
        t.x = 0,
        t.y = 268,
        t
    },
    o.petBagGrp_cz_i = function() {
        var t = new eui.Group;
        return this.petBagGrp_cz = t,
        t.height = 240,
        t.width = 310,
        t.x = 14,
        t.y = 29,
        t.layout = this._TileLayout3_i(),
        t.elementsContent = [this.czHead_0_i(), this.czHead_1_i(), this.czHead_2_i(), this.czHead_3_i(), this.czHead_4_i(), this.czHead_5_i()],
        t
    },
    o._TileLayout3_i = function() {
        var t = new eui.TileLayout;
        return t.paddingLeft = 5,
        t.paddingTop = 5,
        t.requestedColumnCount = 3,
        t.verticalGap = 3,
        t
    },
    o.czHead_0_i = function() {
        var t = new pveTrek.PetHeadSmallItem;
        return this.czHead_0 = t,
        t.skinName = "pveTrek.PetHeadSmallSkin",
        t
    },
    o.czHead_1_i = function() {
        var t = new pveTrek.PetHeadSmallItem;
        return this.czHead_1 = t,
        t.skinName = "pveTrek.PetHeadSmallSkin",
        t
    },
    o.czHead_2_i = function() {
        var t = new pveTrek.PetHeadSmallItem;
        return this.czHead_2 = t,
        t.skinName = "pveTrek.PetHeadSmallSkin",
        t
    },
    o.czHead_3_i = function() {
        var t = new pveTrek.PetHeadSmallItem;
        return this.czHead_3 = t,
        t.skinName = "pveTrek.PetHeadSmallSkin",
        t
    },
    o.czHead_4_i = function() {
        var t = new pveTrek.PetHeadSmallItem;
        return this.czHead_4 = t,
        t.skinName = "pveTrek.PetHeadSmallSkin",
        t
    },
    o.czHead_5_i = function() {
        var t = new pveTrek.PetHeadSmallItem;
        return this.czHead_5 = t,
        t.skinName = "pveTrek.PetHeadSmallSkin",
        t
    },
    o.petBagGrp_dm_i = function() {
        var t = new eui.Group;
        return this.petBagGrp_dm = t,
        t.height = 247,
        t.width = 310,
        t.x = 14,
        t.y = 296,
        t.layout = this._TileLayout4_i(),
        t.elementsContent = [this.dmHead_0_i(), this.dmHead_1_i(), this.dmHead_2_i(), this.dmHead_3_i(), this.dmHead_4_i(), this.dmHead_5_i()],
        t
    },
    o._TileLayout4_i = function() {
        var t = new eui.TileLayout;
        return t.orientation = "rows",
        t.paddingLeft = 5,
        t.paddingTop = 5,
        t
    },
    o.dmHead_0_i = function() {
        var t = new pveTrek.PetHeadSmallItem;
        return this.dmHead_0 = t,
        t.skinName = "pveTrek.PetHeadSmallSkin",
        t.x = 43,
        t.y = 50,
        t
    },
    o.dmHead_1_i = function() {
        var t = new pveTrek.PetHeadSmallItem;
        return this.dmHead_1 = t,
        t.skinName = "pveTrek.PetHeadSmallSkin",
        t.x = 53,
        t.y = 60,
        t
    },
    o.dmHead_2_i = function() {
        var t = new pveTrek.PetHeadSmallItem;
        return this.dmHead_2 = t,
        t.skinName = "pveTrek.PetHeadSmallSkin",
        t.x = 63,
        t.y = 70,
        t
    },
    o.dmHead_3_i = function() {
        var t = new pveTrek.PetHeadSmallItem;
        return this.dmHead_3 = t,
        t.skinName = "pveTrek.PetHeadSmallSkin",
        t.x = 73,
        t.y = 80,
        t
    },
    o.dmHead_4_i = function() {
        var t = new pveTrek.PetHeadSmallItem;
        return this.dmHead_4 = t,
        t.skinName = "pveTrek.PetHeadSmallSkin",
        t.x = 83,
        t.y = 90,
        t
    },
    o.dmHead_5_i = function() {
        var t = new pveTrek.PetHeadSmallItem;
        return this.dmHead_5 = t,
        t.skinName = "pveTrek.PetHeadSmallSkin",
        t.x = 93,
        t.y = 100,
        t
    },
    o.list_page_i = function() {
        var t = new eui.List;
        return this.list_page = t,
        t.horizontalCenter = 0,
        t.visible = !0,
        t.y = 542,
        t.layout = this._HorizontalLayout1_i(),
        t
    },
    o._HorizontalLayout1_i = function() {
        var t = new eui.HorizontalLayout;
        return t.gap = 30,
        t
    },
    o.img_noPet_i = function() {
        var t = new eui.Image;
        return this.img_noPet = t,
        t.source = "pveTrekSetPets_noJl_png",
        t.x = 78,
        t.y = 177,
        t
    },
    o._Group8_i = function() {
        var t = new eui.Group;
        return t.left = 0,
        t.right = 0,
        t.visible = !0,
        t.y = 0,
        t.elementsContent = [this.up_bg_i(), this.btnClose_i(), this._Image9_i()],
        t
    },
    o.up_bg_i = function() {
        var t = new eui.Image;
        return this.up_bg = t,
        t.height = 51,
        t.left = 0,
        t.right = 0,
        t.source = "common_top_bg_style1_png",
        t.y = 0,
        t
    },
    o.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.source = "common_close_2_png",
        t
    },
    o._Image9_i = function() {
        var t = new eui.Image;
        return t.source = "pveTrekSetPet_title_xzyhjl_png",
        t.x = 112,
        t.y = 7,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/view/PvetreksetseerinfoSkin.exml"] = window.pveTrek.PvetreksetseerinfoSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["group_seer", "suitIconBigBg_4", "addBtn_4", "suitIcon_4", "partNameTx_4", "parTitleTx_4", "lineIcon_4", "parts_4", "suitIconBigBg_3", "addBtn_3", "suitIcon_3", "partNameTx_3", "parTitleTx_3", "lineIcon_3", "parts_3", "suitIconBigBg_2", "addBtn_2", "suitIcon_2", "partNameTx_2", "parTitleTx_2", "lineIcon_2", "parts_2", "suitIconBigBg_1", "addBtn_1", "suitIcon_1", "partNameTx_1", "parTitleTx_1", "lineIcon_1", "parts_1", "suitIconBigBg_0", "addBtn_0", "suitIcon_0", "partNameTx_0", "parTitleTx_0", "lineIcon_0", "parts_0", "parts", "btnDressAll", "suit", "up_bg", "btnClose", "img_title", "top", "title_bg", "txt_title", "btnTitleChange", "TitleInfo", "btnNext"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this._Image1_i(), this._Image2_i(), this.group_seer_i(), this.suit_i(), this.top_i(), this.TitleInfo_i(), this.btnNext_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.horizontalCenter = 0,
        t.source = "common_ui_bg_1_png",
        t.y = 0,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 291,
        t.horizontalCenter = .5,
        t.source = "common_pet_base_png",
        t.visible = !0,
        t.width = 421,
        t.y = 256,
        t
    },
    i.group_seer_i = function() {
        var t = new eui.Group;
        return this.group_seer = t,
        t.height = 0,
        t.horizontalCenter = 8,
        t.visible = !0,
        t.width = 0,
        t.y = 461,
        t
    },
    i.suit_i = function() {
        var t = new eui.Group;
        return this.suit = t,
        t.height = 463,
        t.horizontalCenter = 0,
        t.visible = !0,
        t.width = 912,
        t.y = 118,
        t.elementsContent = [this.parts_i(), this.btnDressAll_i()],
        t
    },
    i.parts_i = function() {
        var t = new eui.Group;
        return this.parts = t,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this.parts_4_i(), this.parts_3_i(), this.parts_2_i(), this.parts_1_i(), this.parts_0_i()],
        t
    },
    i.parts_4_i = function() {
        var t = new eui.Group;
        return this.parts_4 = t,
        t.x = 659,
        t.y = 192,
        t.elementsContent = [this.suitIconBigBg_4_i(), this._Group1_i(), this.addBtn_4_i(), this.suitIcon_4_i(), this.partNameTx_4_i(), this.parTitleTx_4_i(), this.lineIcon_4_i()],
        t
    },
    i.suitIconBigBg_4_i = function() {
        var t = new eui.Image;
        return this.suitIconBigBg_4 = t,
        t.height = 95,
        t.source = "pveTrekSetSeerInfo_suitIconBigBg_0_png",
        t.width = 205,
        t.x = 48,
        t.y = 0,
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.x = 172,
        t.y = 16,
        t.elementsContent = [this._Image3_i()],
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.height = 64,
        t.source = "common_icon_bg_style_1_png",
        t.width = 65,
        t
    },
    i.addBtn_4_i = function() {
        var t = new eui.Image;
        return this.addBtn_4 = t,
        t.height = 34,
        t.source = "pveTrekSetSeerInfo_addBtn_png",
        t.width = 35,
        t.x = 187,
        t.y = 31,
        t
    },
    i.suitIcon_4_i = function() {
        var t = new eui.Image;
        return this.suitIcon_4 = t,
        t.height = 50,
        t.source = "",
        t.width = 50,
        t.x = 179,
        t.y = 23,
        t
    },
    i.partNameTx_4_i = function() {
        var t = new eui.Label;
        return this.partNameTx_4 = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 18,
        t.text = "名称处名称处",
        t.textAlign = "right",
        t.textColor = 14021375,
        t.width = 149,
        t.x = 18,
        t.y = 61,
        t
    },
    i.parTitleTx_4_i = function() {
        var t = new eui.Label;
        return this.parTitleTx_4 = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 16,
        t.text = "腰部装扮",
        t.textColor = 10343423,
        t.x = 102,
        t.y = 17,
        t
    },
    i.lineIcon_4_i = function() {
        var t = new eui.Image;
        return this.lineIcon_4 = t,
        t.height = 105,
        t.source = "pveTrekSetSeerInfo_lineIcon_4_png",
        t.width = 251,
        t.x = 0,
        t.y = 2,
        t
    },
    i.parts_3_i = function() {
        var t = new eui.Group;
        return this.parts_3 = t,
        t.visible = !0,
        t.x = 629,
        t.y = 57,
        t.elementsContent = [this.suitIconBigBg_3_i(), this._Group2_i(), this.addBtn_3_i(), this.suitIcon_3_i(), this.partNameTx_3_i(), this.parTitleTx_3_i(), this.lineIcon_3_i()],
        t
    },
    i.suitIconBigBg_3_i = function() {
        var t = new eui.Image;
        return this.suitIconBigBg_3 = t,
        t.height = 95,
        t.source = "pveTrekSetSeerInfo_suitIconBigBg_0_png",
        t.visible = !0,
        t.width = 205,
        t.x = 48,
        t.y = 0,
        t
    },
    i._Group2_i = function() {
        var t = new eui.Group;
        return t.visible = !0,
        t.x = 172,
        t.y = 16,
        t.elementsContent = [this._Image4_i()],
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.height = 64,
        t.source = "common_icon_bg_style_1_png",
        t.width = 65,
        t
    },
    i.addBtn_3_i = function() {
        var t = new eui.Image;
        return this.addBtn_3 = t,
        t.height = 34,
        t.source = "pveTrekSetSeerInfo_addBtn_png",
        t.width = 35,
        t.x = 187,
        t.y = 31,
        t
    },
    i.suitIcon_3_i = function() {
        var t = new eui.Image;
        return this.suitIcon_3 = t,
        t.height = 50,
        t.source = "",
        t.visible = !0,
        t.width = 50,
        t.x = 179,
        t.y = 23,
        t
    },
    i.partNameTx_3_i = function() {
        var t = new eui.Label;
        return this.partNameTx_3 = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 18,
        t.text = "名称处名称处名称",
        t.textAlign = "right",
        t.textColor = 14021375,
        t.width = 149,
        t.x = 18,
        t.y = 61,
        t
    },
    i.parTitleTx_3_i = function() {
        var t = new eui.Label;
        return this.parTitleTx_3 = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 16,
        t.text = "面部装扮",
        t.textColor = 10343423,
        t.x = 103,
        t.y = 17,
        t
    },
    i.lineIcon_3_i = function() {
        var t = new eui.Image;
        return this.lineIcon_3 = t,
        t.height = 105,
        t.source = "pveTrekSetSeerInfo_lineIcon_3_png",
        t.width = 251,
        t.x = 0,
        t.y = 2,
        t
    },
    i.parts_2_i = function() {
        var t = new eui.Group;
        return this.parts_2 = t,
        t.x = 30,
        t.y = 308,
        t.elementsContent = [this.suitIconBigBg_2_i(), this._Group3_i(), this.addBtn_2_i(), this.suitIcon_2_i(), this.partNameTx_2_i(), this.parTitleTx_2_i(), this.lineIcon_2_i()],
        t
    },
    i.suitIconBigBg_2_i = function() {
        var t = new eui.Image;
        return this.suitIconBigBg_2 = t,
        t.height = 95,
        t.source = "pveTrekSetSeerInfo_suitIconBigBg_0_png",
        t.width = 205,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Group3_i = function() {
        var t = new eui.Group;
        return t.x = 15,
        t.y = 16,
        t.elementsContent = [this._Image5_i()],
        t
    },
    i._Image5_i = function() {
        var t = new eui.Image;
        return t.height = 64,
        t.source = "common_icon_bg_style_1_png",
        t.width = 65,
        t
    },
    i.addBtn_2_i = function() {
        var t = new eui.Image;
        return this.addBtn_2 = t,
        t.height = 34,
        t.source = "pveTrekSetSeerInfo_addBtn_png",
        t.width = 35,
        t.x = 30,
        t.y = 30,
        t
    },
    i.suitIcon_2_i = function() {
        var t = new eui.Image;
        return this.suitIcon_2 = t,
        t.height = 50,
        t.source = "",
        t.width = 50,
        t.x = 22,
        t.y = 22,
        t
    },
    i.partNameTx_2_i = function() {
        var t = new eui.Label;
        return this.partNameTx_2 = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 18,
        t.text = "名称处名称处",
        t.textColor = 14021375,
        t.x = 85,
        t.y = 61,
        t
    },
    i.parTitleTx_2_i = function() {
        var t = new eui.Label;
        return this.parTitleTx_2 = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 16,
        t.text = "脚部装扮",
        t.textColor = 10343423,
        t.x = 85,
        t.y = 17,
        t
    },
    i.lineIcon_2_i = function() {
        var t = new eui.Image;
        return this.lineIcon_2 = t,
        t.height = 86,
        t.source = "pveTrekSetSeerInfo_lineIcon_2_png",
        t.width = 250,
        t.x = 3,
        t.y = 3,
        t
    },
    i.parts_1_i = function() {
        var t = new eui.Group;
        return this.parts_1 = t,
        t.x = 0,
        t.y = 156,
        t.elementsContent = [this.suitIconBigBg_1_i(), this._Group4_i(), this.addBtn_1_i(), this.suitIcon_1_i(), this.partNameTx_1_i(), this.parTitleTx_1_i(), this.lineIcon_1_i()],
        t
    },
    i.suitIconBigBg_1_i = function() {
        var t = new eui.Image;
        return this.suitIconBigBg_1 = t,
        t.height = 95,
        t.source = "pveTrekSetSeerInfo_suitIconBigBg_0_png",
        t.width = 205,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Group4_i = function() {
        var t = new eui.Group;
        return t.x = 16,
        t.y = 16,
        t.elementsContent = [this._Image6_i()],
        t
    },
    i._Image6_i = function() {
        var t = new eui.Image;
        return t.height = 64,
        t.source = "common_icon_bg_style_1_png",
        t.width = 65,
        t
    },
    i.addBtn_1_i = function() {
        var t = new eui.Image;
        return this.addBtn_1 = t,
        t.height = 34,
        t.source = "pveTrekSetSeerInfo_addBtn_png",
        t.width = 35,
        t.x = 31,
        t.y = 30,
        t
    },
    i.suitIcon_1_i = function() {
        var t = new eui.Image;
        return this.suitIcon_1 = t,
        t.height = 50,
        t.source = "",
        t.width = 50,
        t.x = 23,
        t.y = 22,
        t
    },
    i.partNameTx_1_i = function() {
        var t = new eui.Label;
        return this.partNameTx_1 = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 18,
        t.text = "名称处名称处",
        t.textColor = 14021375,
        t.x = 88,
        t.y = 61,
        t
    },
    i.parTitleTx_1_i = function() {
        var t = new eui.Label;
        return this.parTitleTx_1 = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 16,
        t.text = "手部装扮",
        t.textColor = 10343423,
        t.x = 88,
        t.y = 17,
        t
    },
    i.lineIcon_1_i = function() {
        var t = new eui.Image;
        return this.lineIcon_1 = t,
        t.height = 104,
        t.source = "pveTrekSetSeerInfo_lineIcon_1_png",
        t.width = 250,
        t.x = 3,
        t.y = 3,
        t
    },
    i.parts_0_i = function() {
        var t = new eui.Group;
        return this.parts_0 = t,
        t.x = 30,
        t.y = 0,
        t.elementsContent = [this.suitIconBigBg_0_i(), this._Group5_i(), this.addBtn_0_i(), this.suitIcon_0_i(), this.partNameTx_0_i(), this.parTitleTx_0_i(), this.lineIcon_0_i()],
        t
    },
    i.suitIconBigBg_0_i = function() {
        var t = new eui.Image;
        return this.suitIconBigBg_0 = t,
        t.height = 95,
        t.source = "pveTrekSetSeerInfo_suitIconBigBg_0_png",
        t.width = 205,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Group5_i = function() {
        var t = new eui.Group;
        return t.visible = !0,
        t.x = 16,
        t.y = 15,
        t.elementsContent = [this._Image7_i()],
        t
    },
    i._Image7_i = function() {
        var t = new eui.Image;
        return t.height = 64,
        t.source = "common_icon_bg_style_1_png",
        t.visible = !0,
        t.width = 65,
        t
    },
    i.addBtn_0_i = function() {
        var t = new eui.Image;
        return this.addBtn_0 = t,
        t.height = 34,
        t.source = "pveTrekSetSeerInfo_addBtn_png",
        t.visible = !0,
        t.width = 35,
        t.x = 31,
        t.y = 30,
        t
    },
    i.suitIcon_0_i = function() {
        var t = new eui.Image;
        return this.suitIcon_0 = t,
        t.height = 50,
        t.source = "",
        t.visible = !0,
        t.width = 50,
        t.x = 23,
        t.y = 22,
        t
    },
    i.partNameTx_0_i = function() {
        var t = new eui.Label;
        return this.partNameTx_0 = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 18,
        t.text = "名称处名称处",
        t.textColor = 14021375,
        t.x = 88,
        t.y = 61,
        t
    },
    i.parTitleTx_0_i = function() {
        var t = new eui.Label;
        return this.parTitleTx_0 = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 16,
        t.text = "头部装扮",
        t.textColor = 10343423,
        t.x = 88,
        t.y = 17,
        t
    },
    i.lineIcon_0_i = function() {
        var t = new eui.Image;
        return this.lineIcon_0 = t,
        t.height = 104,
        t.source = "pveTrekSetSeerInfo_lineIcon_0_png",
        t.width = 250,
        t.x = 3,
        t.y = 3,
        t
    },
    i.btnDressAll_i = function() {
        var t = new eui.Image;
        return this.btnDressAll = t,
        t.height = 50,
        t.source = "pveTrekSetSeerInfo_btnDressAll_png",
        t.width = 174,
        t.x = 369,
        t.y = 413,
        t
    },
    i.top_i = function() {
        var t = new eui.Group;
        return this.top = t,
        t.left = 0,
        t.right = 0,
        t.y = 0,
        t.elementsContent = [this.up_bg_i(), this.btnClose_i(), this.img_title_i()],
        t
    },
    i.up_bg_i = function() {
        var t = new eui.Image;
        return this.up_bg = t,
        t.height = 51,
        t.left = 0,
        t.right = 0,
        t.source = "pveTrekMain_up_bg_png",
        t.y = 0,
        t
    },
    i.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.source = "common_close_2_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.img_title_i = function() {
        var t = new eui.Image;
        return this.img_title = t,
        t.height = 36,
        t.source = "pveTrekSetSeerInfo_img_title_png",
        t.width = 185,
        t.x = 112,
        t.y = 7,
        t
    },
    i.TitleInfo_i = function() {
        var t = new eui.Group;
        return this.TitleInfo = t,
        t.height = 49,
        t.horizontalCenter = -2,
        t.width = 294,
        t.y = 78,
        t.elementsContent = [this.title_bg_i(), this.txt_title_i(), this.btnTitleChange_i()],
        t
    },
    i.title_bg_i = function() {
        var t = new eui.Image;
        return this.title_bg = t,
        t.height = 49,
        t.source = "pveTrekSetSeerInfo_title_bg_png",
        t.width = 277,
        t.x = 0,
        t.y = 0,
        t
    },
    i.txt_title_i = function() {
        var t = new eui.Label;
        return this.txt_title = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 18,
        t.text = "光明救赎者",
        t.textAlign = "center",
        t.textColor = 16777215,
        t.width = 124,
        t.x = 56,
        t.y = 16,
        t
    },
    i.btnTitleChange_i = function() {
        var t = new eui.Image;
        return this.btnTitleChange = t,
        t.height = 40,
        t.source = "pveTrekSetSeerInfo_btnTitleChange_png",
        t.width = 72,
        t.x = 222,
        t.y = 4,
        t
    },
    i.btnNext_i = function() {
        var t = new eui.Image;
        return this.btnNext = t,
        t.height = 42,
        t.horizontalCenter = 489,
        t.source = "pveTrekSetSeerInfo_btnNext_png",
        t.width = 136,
        t.y = 587,
        t
    },
    e
} (eui.Skin);