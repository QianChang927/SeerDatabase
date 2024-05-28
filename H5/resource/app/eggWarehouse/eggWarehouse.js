var __reflect = this && this.__reflect ||
function(t, e, n) {
    t.__class__ = e,
    n ? n.push(e) : n = [e],
    t.__types__ = t.__types__ ? n.concat(t.__types__) : n
},
__extends = this && this.__extends ||
function(t, e) {
    function n() {
        this.constructor = t
    }
    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
    n.prototype = e.prototype,
    t.prototype = new n
},
__awaiter = this && this.__awaiter ||
function(t, e, n, i) {
    return new(n || (n = Promise))(function(r, o) {
        function s(t) {
            try {
                _(i.next(t))
            } catch(e) {
                o(e)
            }
        }
        function a(t) {
            try {
                _(i["throw"](t))
            } catch(e) {
                o(e)
            }
        }
        function _(t) {
            t.done ? r(t.value) : new n(function(e) {
                e(t.value)
            }).then(s, a)
        }
        _((i = i.apply(t, e || [])).next())
    })
},
__generator = this && this.__generator ||
function(t, e) {
    function n(t) {
        return function(e) {
            return i([t, e])
        }
    }
    function i(n) {
        if (r) throw new TypeError("Generator is already executing.");
        for (; _;) try {
            if (r = 1, o && (s = o[2 & n[0] ? "return": n[0] ? "throw": "next"]) && !(s = s.call(o, n[1])).done) return s;
            switch (o = 0, s && (n = [0, s.value]), n[0]) {
            case 0:
            case 1:
                s = n;
                break;
            case 4:
                return _.label++,
                {
                    value: n[1],
                    done: !1
                };
            case 5:
                _.label++,
                o = n[1],
                n = [0];
                continue;
            case 7:
                n = _.ops.pop(),
                _.trys.pop();
                continue;
            default:
                if (s = _.trys, !(s = s.length > 0 && s[s.length - 1]) && (6 === n[0] || 2 === n[0])) {
                    _ = 0;
                    continue
                }
                if (3 === n[0] && (!s || n[1] > s[0] && n[1] < s[3])) {
                    _.label = n[1];
                    break
                }
                if (6 === n[0] && _.label < s[1]) {
                    _.label = s[1],
                    s = n;
                    break
                }
                if (s && _.label < s[2]) {
                    _.label = s[2],
                    _.ops.push(n);
                    break
                }
                s[2] && _.ops.pop(),
                _.trys.pop();
                continue
            }
            n = e.call(t, _)
        } catch(i) {
            n = [6, i],
            o = 0
        } finally {
            r = s = 0
        }
        if (5 & n[0]) throw n[1];
        return {
            value: n[0] ? n[1] : void 0,
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
        next: n(0),
        "throw": n(1),
        "return": n(2)
    },
    "function" == typeof Symbol && (a[Symbol.iterator] = function() {
        return this
    }),
    a
},
eggWarehouse; !
function(t) {
    var e; !
    function(t) {
        t[t.SOUL = 1] = "SOUL",
        t[t.ENLIVENER = 2] = "ENLIVENER",
        t[t.CRYSTAL_NUCLEUS = 3] = "CRYSTAL_NUCLEUS"
    } (e = t.EggType || (t.EggType = {}));
    var n = function(n) {
        function i() {
            return n.call(this) || this
        }
        return __extends(i, n),
        i.getInstance = function() {
            return this._instance || (i._instance = new i),
            i._instance
        },
        i.prototype.initOpenData = function(n) {
            return __awaiter(this, void 0, void 0,
            function() {
                var i, r, o, s, a, _, u, c, h, g, l;
                return __generator(this,
                function(p) {
                    switch (p.label) {
                    case 0:
                        switch (r = n) {
                        case e.SOUL:
                            return [3, 1];
                        case e.ENLIVENER:
                            return [3, 3];
                        case e.CRYSTAL_NUCLEUS:
                            return [3, 5]
                        }
                        return [3, 7];
                    case 1:
                        return [4, SocketConnection.sendWithPromise(42400, [])];
                    case 2:
                        return i = p.sent(),
                        [3, 8];
                    case 3:
                        return [4, SocketConnection.sendWithPromise(42401, [])];
                    case 4:
                        return i = p.sent(),
                        [3, 8];
                    case 5:
                        return [4, SocketConnection.sendWithPromise(42402, [])];
                    case 6:
                        return i = p.sent(),
                        [3, 8];
                    case 7:
                        return [3, 8];
                    case 8:
                        for (o = i.data, s = o.readUnsignedInt(), a = o.readUnsignedInt(), this._eggVoDic = new HashMap, this._enlivenerVoDic = new HashMap, this._nucleusVoDIc = new HashMap, _ = 0; 4 > _; _++) if (u = BitUtil.getBit(s, _), u > 0) switch (c = _ + 1, n) {
                        case e.SOUL:
                            h = new t.EggVo(o, c),
                            this._eggVoDic.add(c, h);
                            break;
                        case e.ENLIVENER:
                            g = new t.EnlivenerVo(o, c),
                            this._enlivenerVoDic.add(c, g);
                            break;
                        case e.CRYSTAL_NUCLEUS:
                            l = new t.CrystalNucleusVo(o, c),
                            this._nucleusVoDIc.add(c, l)
                        }
                        return [2, Promise.resolve()]
                    }
                })
            })
        },
        i.prototype.GetReward = function(t, n, i) {
            return __awaiter(this, void 0, void 0,
            function() {
                var r, o, o;
                return __generator(this,
                function(s) {
                    switch (s.label) {
                    case 0:
                        switch (r = t) {
                        case e.SOUL:
                            return [3, 1];
                        case e.ENLIVENER:
                            return [3, 3];
                        case e.CRYSTAL_NUCLEUS:
                            return [3, 5]
                        }
                        return [3, 7];
                    case 1:
                        return [4, SocketConnection.sendWithPromise(2316, [i, n])];
                    case 2:
                        return s.sent(),
                        [3, 8];
                    case 3:
                        return [4, SocketConnection.sendWithPromise(2358, [i, n])];
                    case 4:
                        return s.sent(),
                        o = new egret.Event(GameEvent.NOTIFY_SOUL_BEAD_CHANGE),
                        o.data = i,
                        EventManager.dispatchEvent(o),
                        [3, 8];
                    case 5:
                        return [4, SocketConnection.sendWithPromise(2392, [i, n])];
                    case 6:
                        return s.sent(),
                        o = new egret.Event(GameEvent.NOTIFY_NUCLEUS_CHANGE),
                        o.data = i,
                        EventManager.dispatchEvent(o),
                        [3, 8];
                    case 7:
                        return [3, 8];
                    case 8:
                        return [4, this.initOpenData(t)];
                    case 9:
                        return s.sent(),
                        [2, Promise.resolve()]
                    }
                })
            })
        },
        i.prototype.SetPutEgg = function(t, n, i) {
            return __awaiter(this, void 0, void 0,
            function() {
                var r;
                return __generator(this,
                function(o) {
                    switch (o.label) {
                    case 0:
                        switch (r = t) {
                        case e.SOUL:
                            return [3, 1];
                        case e.ENLIVENER:
                            return [3, 3];
                        case e.CRYSTAL_NUCLEUS:
                            return [3, 5]
                        }
                        return [3, 7];
                    case 1:
                        return [4, SocketConnection.sendWithPromise(2315, [i, n])];
                    case 2:
                        return o.sent(),
                        [3, 8];
                    case 3:
                        return [4, SocketConnection.sendWithPromise(2357, [i, n])];
                    case 4:
                        return o.sent(),
                        [3, 8];
                    case 5:
                        return [4, SocketConnection.sendWithPromise(2391, [i, n])];
                    case 6:
                        return o.sent(),
                        [3, 8];
                    case 7:
                        return [3, 8];
                    case 8:
                        return [4, this.initOpenData(t)];
                    case 9:
                        return o.sent(),
                        [2, Promise.resolve()]
                    }
                })
            })
        },
        i.prototype.PutOff = function(t, n, i) {
            return __awaiter(this, void 0, void 0,
            function() {
                var r;
                return __generator(this,
                function(o) {
                    switch (o.label) {
                    case 0:
                        switch (r = t) {
                        case e.SOUL:
                            return [3, 1];
                        case e.ENLIVENER:
                            return [3, 3];
                        case e.CRYSTAL_NUCLEUS:
                            return [3, 5]
                        }
                        return [3, 7];
                    case 1:
                        return [4, SocketConnection.sendWithPromise(42403, [1, i, n])];
                    case 2:
                        return o.sent(),
                        [3, 8];
                    case 3:
                        return [4, SocketConnection.sendWithPromise(42403, [2, i, n])];
                    case 4:
                        return o.sent(),
                        [3, 8];
                    case 5:
                        return [4, SocketConnection.sendWithPromise(42403, [3, i, n])];
                    case 6:
                        return o.sent(),
                        [3, 8];
                    case 7:
                        return [3, 8];
                    case 8:
                        return [4, this.initOpenData(t)];
                    case 9:
                        return o.sent(),
                        [2, Promise.resolve()]
                    }
                })
            })
        },
        i.prototype.RightNow = function(t, n, i) {
            return __awaiter(this, void 0, void 0,
            function() {
                var r;
                return __generator(this,
                function(o) {
                    switch (o.label) {
                    case 0:
                        switch (r = t) {
                        case e.SOUL:
                            return [3, 1];
                        case e.ENLIVENER:
                            return [3, 3];
                        case e.CRYSTAL_NUCLEUS:
                            return [3, 5]
                        }
                        return [3, 7];
                    case 1:
                        return [4, SocketConnection.sendWithPromise(2344, [i, n])];
                    case 2:
                        return o.sent(),
                        [3, 8];
                    case 3:
                        return [4, SocketConnection.sendWithPromise(2376, [i, n])];
                    case 4:
                        return o.sent(),
                        [3, 8];
                    case 5:
                        return [4, SocketConnection.sendWithPromise(9257, [i, n])];
                    case 6:
                        return o.sent(),
                        [3, 8];
                    case 7:
                        return [3, 8];
                    case 8:
                        return [4, this.initOpenData(t)];
                    case 9:
                        return o.sent(),
                        [2, Promise.resolve()]
                    }
                })
            })
        },
        i.prototype.CheckEggunLockState = function(t, e) {
            return ! 0
        },
        i.prototype.GetEggleftTm = function(t, n) {
            switch (t) {
            case e.SOUL:
                if (this._eggVoDic.containsKey(n)) return this._eggVoDic.getValue(n).time_left;
            case e.ENLIVENER:
                if (this._enlivenerVoDic.containsKey(n)) return this._enlivenerVoDic.getValue(n).left_tm;
            case e.CRYSTAL_NUCLEUS:
                if (this._nucleusVoDIc.containsKey(n)) return this._nucleusVoDIc.getValue(n).left_time
            }
            return 0
        },
        i.prototype.GetEggAllData = function(t) {
            for (var e = [], n = 1; 4 >= n; n++) {
                var i = {};
                i.type = t,
                i.pos = n,
                i.left_tm = this.GetEggleftTm(i.type, i.pos),
                i.eggId = this.GetEggId(i.type, i.pos),
                i.obtTm = this.GetObtm(i.type, i.pos),
                this.CheckEggunLockState(i.type, i.pos) ? (i.eggId <= 0 ? i.state = 1 : i.state = i.left_tm > 0 ? 2 : 3, e.push(i)) : (i.state = 4, e.push(i))
            }
            return e
        },
        i.prototype.GetEggId = function(t, n) {
            switch (t) {
            case e.SOUL:
                if (this._eggVoDic.containsKey(n)) return this._eggVoDic.getValue(n).id;
            case e.ENLIVENER:
                if (this._enlivenerVoDic.containsKey(n)) return this._enlivenerVoDic.getValue(n).yuanshen_id;
            case e.CRYSTAL_NUCLEUS:
                if (this._nucleusVoDIc.containsKey(n)) return this._nucleusVoDIc.getValue(n).gen_item
            }
            return 0
        },
        i.prototype.checkItemIsWork = function(t, n, i) {
            switch (void 0 === i && (i = !1), t) {
            case e.SOUL:
                for (var r = this._eggVoDic.getValues(), o = 0, s = r; o < s.length; o++) {
                    var a = s[o];
                    if (a.id === n) return i || Alarm.show("精元正在孵化中，不可重复放入"),
                    !1
                }
                break;
            case e.ENLIVENER:
                for (var _ = this._enlivenerVoDic.getValues(), u = 0, c = _; u < c.length; u++) {
                    var a = c[u];
                    if (a.obtain_tm === n) return i || Alarm.show("元神珠正在孵化中，不可重复放入"),
                    !1
                }
                break;
            case e.CRYSTAL_NUCLEUS:
                for (var h = this._nucleusVoDIc.getValues(), g = 0, l = h; g < l.length; g++) {
                    var a = l[g];
                    if (a.gentm === n) return i || Alarm.show("晶核正在孵化中，不可重复放入"),
                    !1
                }
            }
            return ! 0
        },
        i.prototype.GetObtm = function(t, n) {
            switch (t) {
            case e.SOUL:
                return 0;
            case e.ENLIVENER:
                if (this._enlivenerVoDic.containsKey(n)) return this._enlivenerVoDic.getValue(n).obtain_tm;
            case e.CRYSTAL_NUCLEUS:
                if (this._nucleusVoDIc.containsKey(n)) return this._nucleusVoDIc.getValue(n).gentm
            }
            return 0
        },
        i
    } (egret.EventDispatcher);
    t.DataMgr = n,
    __reflect(n.prototype, "eggWarehouse.DataMgr")
} (eggWarehouse || (eggWarehouse = {}));
var __reflect = this && this.__reflect ||
function(t, e, n) {
    t.__class__ = e,
    n ? n.push(e) : n = [e],
    t.__types__ = t.__types__ ? n.concat(t.__types__) : n
},
__extends = this && this.__extends ||
function(t, e) {
    function n() {
        this.constructor = t
    }
    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
    n.prototype = e.prototype,
    t.prototype = new n
},
__awaiter = this && this.__awaiter ||
function(t, e, n, i) {
    return new(n || (n = Promise))(function(r, o) {
        function s(t) {
            try {
                _(i.next(t))
            } catch(e) {
                o(e)
            }
        }
        function a(t) {
            try {
                _(i["throw"](t))
            } catch(e) {
                o(e)
            }
        }
        function _(t) {
            t.done ? r(t.value) : new n(function(e) {
                e(t.value)
            }).then(s, a)
        }
        _((i = i.apply(t, e || [])).next())
    })
},
__generator = this && this.__generator ||
function(t, e) {
    function n(t) {
        return function(e) {
            return i([t, e])
        }
    }
    function i(n) {
        if (r) throw new TypeError("Generator is already executing.");
        for (; _;) try {
            if (r = 1, o && (s = o[2 & n[0] ? "return": n[0] ? "throw": "next"]) && !(s = s.call(o, n[1])).done) return s;
            switch (o = 0, s && (n = [0, s.value]), n[0]) {
            case 0:
            case 1:
                s = n;
                break;
            case 4:
                return _.label++,
                {
                    value: n[1],
                    done: !1
                };
            case 5:
                _.label++,
                o = n[1],
                n = [0];
                continue;
            case 7:
                n = _.ops.pop(),
                _.trys.pop();
                continue;
            default:
                if (s = _.trys, !(s = s.length > 0 && s[s.length - 1]) && (6 === n[0] || 2 === n[0])) {
                    _ = 0;
                    continue
                }
                if (3 === n[0] && (!s || n[1] > s[0] && n[1] < s[3])) {
                    _.label = n[1];
                    break
                }
                if (6 === n[0] && _.label < s[1]) {
                    _.label = s[1],
                    s = n;
                    break
                }
                if (s && _.label < s[2]) {
                    _.label = s[2],
                    _.ops.push(n);
                    break
                }
                s[2] && _.ops.pop(),
                _.trys.pop();
                continue
            }
            n = e.call(t, _)
        } catch(i) {
            n = [6, i],
            o = 0
        } finally {
            r = s = 0
        }
        if (5 & n[0]) throw n[1];
        return {
            value: n[0] ? n[1] : void 0,
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
        next: n(0),
        "throw": n(1),
        "return": n(2)
    },
    "function" == typeof Symbol && (a[Symbol.iterator] = function() {
        return this
    }),
    a
},
eggWarehouse; !
function(t) {
    var e = function(e) {
        function i(t) {
            return e.call(this, t) || this
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            var i = this;
            e.prototype.childrenCreated.call(this);
            var r = new n;
            this._view_pop = r;
            var o = 1;
            this.data ? o = this.data.type: this.data = {
                type: 1
            },
            t.DataMgr.getInstance().initOpenData(o).then(function() {
                var t = PopViewManager.createDefaultStyleObject();
                t.caller = i,
                t.clickMaskHandler = function() {},
                t.maskShapeStyle.maskAlpha = .6,
                r.addEventListener(PopView.EVENT_DESTROY, i.onClose, i),
                PopViewManager.getInstance().openView(r, t, i.data)
            })
        },
        i.prototype.destroy = function() {
            this._view_pop = null,
            e.prototype.destroy.call(this)
        },
        i
    } (BaseModule);
    t.EggWarehouse = e,
    __reflect(e.prototype, "eggWarehouse.EggWarehouse");
    var n = function(e) {
        function n() {
            var n = e.call(this) || this;
            return n.openTrick = !1,
            n.skinName = t.EggWarehouseSkin,
            n
        }
        return __extends(n, e),
        n.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this)
        },
        n.prototype.initEvents = function() {
            var e = this;
            ImageButtonUtil.add(this.imgBtn_close, this._onTouchImageButtonHandler, this),
            t.DataMgr.getInstance().addEventListener(t.EventConstant.EVENT_ON_PUT_EGG, this._onPutEggHanlder, this),
            t.DataMgr.getInstance().addEventListener(t.EventConstant.EVENT_ON_RIGHT_NOW, this._onRightNow, this),
            t.DataMgr.getInstance().addEventListener(t.EventConstant.EVENT_ON_GET_REWARD, this._onGetReward, this),
            t.DataMgr.getInstance().addEventListener(t.EventConstant.EVENT_UNLOCK, this._onUnLock, this),
            t.DataMgr.getInstance().addEventListener(t.EventConstant.EVENT_PUT_OFF, this._onPutOff, this);
            var n = new eui.RadioButtonGroup;
            this.typeBtn_1.group = n,
            this.typeBtn_2.group = n,
            this.typeBtn_3.group = n,
            GameInfo.isChecking && (this.typeBtn_2.visible = !1, this.typeBtn_3.visible = !1, this.txt_desc.visible = !1),
            ImageButtonUtil.add(this.typeBtn_1,
            function() {
                e.setIndex(1)
            },
            this, !1, !1),
            ImageButtonUtil.add(this.typeBtn_2,
            function() {
                e.setIndex(2)
            },
            this, !1, !1),
            ImageButtonUtil.add(this.typeBtn_3,
            function() {
                e.setIndex(3)
            },
            this, !1, !1)
        },
        n.prototype.setIndex = function(e) {
            var n = this;
            this._type = e,
            this._openParmInfo = null,
            t.DataMgr.getInstance().initOpenData(this._type).then(function() {
                n._upDateView()
            })
        },
        n.prototype.removeEvents = function() {
            ImageButtonUtil.removeAll(this),
            t.DataMgr.getInstance().removeEventListener(t.EventConstant.EVENT_ON_PUT_EGG, this._onPutEggHanlder, this),
            t.DataMgr.getInstance().removeEventListener(t.EventConstant.EVENT_ON_RIGHT_NOW, this._onRightNow, this),
            t.DataMgr.getInstance().removeEventListener(t.EventConstant.EVENT_ON_GET_REWARD, this._onGetReward, this),
            t.DataMgr.getInstance().removeEventListener(t.EventConstant.EVENT_UNLOCK, this._onUnLock, this),
            t.DataMgr.getInstance().removeEventListener(t.EventConstant.EVENT_PUT_OFF, this._onPutOff, this)
        },
        n.prototype._parseData = function() {
            this._data && this._data.type && (this._type = this._data.type),
            this._data && this._data.info && (this._openParmInfo = this._data.info)
        },
        n.prototype._upDateView = function() {
            this.typeBtn_1.selected = 1 == this._type,
            this.typeBtn_2.selected = 2 == this._type,
            this.typeBtn_3.selected = 3 == this._type;
            var e = t.DataMgr.getInstance().GetEggAllData(this._type);
            if (this._setTitleStyle(), this._updateComps(e), this.openTrick || (this._onTrick(), this.openTrick = !0), this._openParmInfo) {
                for (var n, i = 0; i < e.length; i++) if (1 === e[i].state) {
                    n = e[i];
                    break
                }
                if (n) {
                    var r;
                    r = this._openParmInfo instanceof SoulBeadItemInfo ? this._openParmInfo.obtainTime: this._openParmInfo instanceof NucleusInfo ? this._openParmInfo.gentm: this._openParmInfo.itemID,
                    t.DataMgr.getInstance().checkItemIsWork(this._type, r) && this._onPutEgg(n.pos, r)
                } else {
                    var o;
                    switch (this._type) {
                    case 1:
                        o = "孵化仓已满";
                        break;
                    case 2:
                        o = "赋形仓已满";
                        break;
                    case 3:
                        o = "培育仓已满"
                    }
                    Alarm.show(o)
                }
            }
        },
        n.prototype._setTitleStyle = function() {
            this.title.source = "egg_warehouse_title_" + this._type + "_png";
            var t = {
                1 : "普通孵化单次孵化需消耗30分钟，VIP孵化单次孵化仅需15分钟（少数特殊精元除外）",
                2 : "普通赋形单次需消耗30分钟，VIP赋形单次仅需15分钟",
                3 : "普通培育单次需消耗30分钟，VIP培育单次仅需15分钟"
            };
            this.txt_desc.text = t[this._type]
        },
        n.prototype._updateComps = function(e) {
            e || (e = t.DataMgr.getInstance().GetEggAllData(this._type));
            for (var n = 0; n < e.length; n++) {
                var i = this["comp" + (n + 1)];
                i.setData(e[n]),
                i.UpdateAll(),
                2 === e[n].state && this._onSetEggItemCutDow(i, e[n].left_tm)
            }
        },
        n.prototype._onTrick = function() {
            var t = this;
            this._inflag = egret.setInterval(function() {
                for (var e = 1; 4 >= e; e++) {
                    var n = t["comp" + e],
                    i = n.data;
                    if (2 === i.state) {
                        if (--i.left_tm, i.left_tm <= 0) {
                            i.state = 3,
                            n.setData(i),
                            n.UpdateAll();
                            continue
                        }
                        t._onSetEggItemCutDow(n, i.left_tm)
                    }
                }
            },
            this, 1e3)
        },
        n.prototype._onSetEggItemCutDow = function(t, e) {
            var n, i = (t.data, Math.floor(e / 86400)),
            r = Math.floor(e / 3600),
            o = Math.floor(e / 60) % 60,
            s = e % 60;
            i >= 1 ? (r %= 24, n = "剩余 " + this._transtm(i) + "天" + this._transtm(r) + "小时") : n = "剩余 " + this._transtm(r) + ":" + this._transtm(o) + ":" + this._transtm(s),
            t.SetHalfTm(n)
        },
        n.prototype._transtm = function(t) {
            return t > 9 ? t.toString() : "0" + t
        },
        n.prototype._onTouchImageButtonHandler = function(t) {
            switch (t.currentTarget) {
            case this.imgBtn_close:
                this.hide()
            }
        },
        n.prototype._onPutOff = function(e) {
            var n, i = this,
            r = e.data;
            switch (this._type) {
            case 1:
                n = "是否确认取消精元孵化？";
                break;
            case 2:
                n = "是否确认取消元神珠赋形？";
                break;
            case 3:
                n = "是否确认取消晶核培育？"
            }
            Alert.show(n,
            function() {
                t.DataMgr.getInstance().PutOff(i._type, r.pos, r.obtTm ? r.obtTm: r.eggId).then(function() {
                    var t = i["comp" + r.pos];
                    r.eggId = 0,
                    r.state = 1,
                    t.setData(r),
                    t.UpdateAll()
                })
            })
        },
        n.prototype._onUnLock = function(t) {
            t.data;
            Alarm.show("敬请期待！")
        },
        n.prototype._onGetReward = function(e) {
            var n = this,
            i = e.data;
            t.DataMgr.getInstance().GetReward(this._type, i.pos, i.obtTm ? i.obtTm: i.eggId).then(function() {
                var t = n["comp" + i.pos];
                i.eggId = 0,
                i.obtTm = 0,
                i.state = 1,
                t.setData(i),
                t.UpdateAll()
            })
        },
        n.prototype._onRightNow = function(t) {
            t.data;
            Alarm.show("敬请期待！")
        },
        n.prototype._onPutEggHanlder = function(e) {
            return __awaiter(this, void 0, void 0,
            function() {
                var n, i, r, o, s, a, _ = this;
                return __generator(this,
                function(u) {
                    switch (u.label) {
                    case 0:
                        switch (n = e.data, o = this._type) {
                        case 1:
                            return [3, 1];
                        case 2:
                            return [3, 2];
                        case 3:
                            return [3, 4]
                        }
                        return [3, 6];
                    case 1:
                        return i = ItemManager.GetItemArryBySort(8),
                        r = "你的物品仓库中已经没有精元啦！",
                        [3, 7];
                    case 2:
                        return [4, ItemManager.getSoulBeadAsync()];
                    case 3:
                        return i = u.sent(),
                        r = "你的物品仓库中已经没有元神珠啦！",
                        [3, 7];
                    case 4:
                        return [4, ItemManager.getNucleusAsync()];
                    case 5:
                        return i = u.sent(),
                        r = "你的物品仓库中已经没有异能晶核啦！",
                        [3, 7];
                    case 6:
                        return [3, 7];
                    case 7:
                        return i && 0 !== i.length ? (s = PopViewManager.createDefaultStyleObject(), s.caller = this, s.clickMaskHandler = function() {},
                        a = {},
                        a.callBack = function(e) {
                            var i;
                            i = e instanceof SoulBeadItemInfo ? e.obtainTime: e instanceof NucleusInfo ? e.gentm: e.itemID,
                            t.DataMgr.getInstance().checkItemIsWork(_._type, i) && _._onPutEgg(n.pos, i)
                        },
                        a.caller = this, a.type = n.type, a.list = i, PopViewManager.getInstance().openView(new t.Warehouse, null, a), [2]) : (Alarm.show(r), [2])
                    }
                })
            })
        },
        n.prototype._onPutEgg = function(e, n) {
            var i = this;
            t.DataMgr.getInstance().SetPutEgg(this._type, e, n).then(function() {
                var n = i["comp" + e],
                r = n.data;
                r.eggId = t.DataMgr.getInstance().GetEggId(i._type, e),
                r.state = 2,
                r.left_tm = t.DataMgr.getInstance().GetEggleftTm(i._type, e),
                r.obtTm = t.DataMgr.getInstance().GetObtm(i._type, e),
                n.setData(r),
                n.UpdateAll();
                var o, s = ItemXMLInfo.getName(r.eggId);
                switch (i._type) {
                case 1:
                    o = "已将" + s + "放入孵化仓，孵化完成后记得及时领取精灵哦！";
                    break;
                case 2:
                    o = "已将" + s + "放入赋形仓，赋形完成后记得及时领取精灵哦！！";
                    break;
                case 3:
                    o = "已将" + s + "放入培育仓，培育完成后记得及时领取精灵哦！"
                }
                Alarm.show(o)
            })
        },
        n.prototype.destroy = function() {
            this.removeEvents(),
            egret.clearInterval(this._inflag),
            e.prototype.destroy.call(this)
        },
        n
    } (PopView);
    t.MainView = n,
    __reflect(n.prototype, "eggWarehouse.MainView")
} (eggWarehouse || (eggWarehouse = {}));
var __reflect = this && this.__reflect ||
function(t, e, n) {
    t.__class__ = e,
    n ? n.push(e) : n = [e],
    t.__types__ = t.__types__ ? n.concat(t.__types__) : n
},
eggWarehouse; !
function(t) {
    var e = function() {
        function t() {}
        return t.EVENT_ON_PUT_EGG = "event_on_put_egg",
        t.EVENT_ON_RIGHT_NOW = "event_on_right_now",
        t.EVENT_ON_GET_REWARD = "event_on_get_reward",
        t.EVENT_UNLOCK = "event_unlock",
        t.EVENT_PUT_OFF = "event_pet_icon",
        t
    } ();
    t.EventConstant = e,
    __reflect(e.prototype, "eggWarehouse.EventConstant")
} (eggWarehouse || (eggWarehouse = {}));
var __reflect = this && this.__reflect ||
function(t, e, n) {
    t.__class__ = e,
    n ? n.push(e) : n = [e],
    t.__types__ = t.__types__ ? n.concat(t.__types__) : n
},
__extends = this && this.__extends ||
function(t, e) {
    function n() {
        this.constructor = t
    }
    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
    n.prototype = e.prototype,
    t.prototype = new n
},
eggWarehouse; !
function(t) {
    var e = function(e) {
        function n() {
            var n = e.call(this) || this;
            return n.skinName = t.EggItemSkin,
            n
        }
        return __extends(n, e),
        n.prototype.childrenCreated = function() {
            this._initEvents()
        },
        n.prototype._initEvents = function() {
            ImageButtonUtil.add(this.imgBtn_add, this._onTouchImageButtonHanlder, this, !1, !1),
            ImageButtonUtil.add(this.imgBtn_lq, this._onTouchImageButtonHanlder, this),
            ImageButtonUtil.add(this.imgBtn_put, this._onTouchImageButtonHanlder, this),
            ImageButtonUtil.add(this.imgBtn_rightNow, this._onTouchImageButtonHanlder, this),
            ImageButtonUtil.add(this.imgBtn_unlock, this._onTouchImageButtonHanlder, this),
            this.icon.addEventListener(egret.TouchEvent.TOUCH_TAP, this._onTouchImageButtonHanlder, this)
        },
        n.prototype._removeEvents = function() {
            ImageButtonUtil.removeAll(this),
            this.icon.removeEventListener(egret.TouchEvent.TOUCH_TAP, this._onTouchImageButtonHanlder, this)
        },
        n.prototype.setData = function(t) {
            this.data = t
        },
        n.prototype.UpdateAll = function() {
            this._setState(),
            GameInfo.isChecking && (this.imgBtn_rightNow.visible = !1)
        },
        n.prototype._setState = function() {
            var t = this.data;
            switch (t.state) {
            case 1:
                this.currentState = "state_null",
                this.validateNow();
                var e = {
                    1 : "egg_warehouse_imgBtn_putjy_png",
                    2 : "egg_warehouse_imgBtn_putysz_png",
                    3 : "egg_warehouse_imgBtn_putJh_png"
                };
                this.imgBtn_put.source = e[t.type];
                var n = {
                    1 : "暂无孵化",
                    2 : "暂无赋形",
                    3 : "暂无培育"
                };
                this.txt_null.text = n[t.type],
                this.icon.visible = !1;
                break;
            case 2:
                this.currentState = "state_educating",
                this.validateNow(),
                this.icon.source = ItemXMLInfo.getIconURL(t.eggId),
                this.icon.visible = !0;
                break;
            case 3:
                this.currentState = "state_complete",
                this.validateNow(),
                this.icon.source = ItemXMLInfo.getIconURL(t.eggId);
                var n = {
                    1 : "孵化完成",
                    2 : "赋形完成",
                    3 : "培育完成"
                };
                this.txt_complete.text = n[t.type],
                this.icon.visible = !0;
                break;
            case 4:
                this.currentState = "state_viplock",
                this.validateNow(),
                this.icon.visible = !1
            }
        },
        n.prototype.SetHalfTm = function(t) {
            this.txt_educating.text = t
        },
        n.prototype._onTouchImageButtonHanlder = function(e) {
            var n = this.data;
            switch (e.currentTarget) {
            case this.imgBtn_add:
            case this.imgBtn_put:
                t.DataMgr.getInstance().dispatchEventWith(t.EventConstant.EVENT_ON_PUT_EGG, !1, this.data);
                break;
            case this.imgBtn_lq:
                t.DataMgr.getInstance().dispatchEventWith(t.EventConstant.EVENT_ON_GET_REWARD, !1, this.data);
                break;
            case this.imgBtn_rightNow:
                t.DataMgr.getInstance().dispatchEventWith(t.EventConstant.EVENT_ON_RIGHT_NOW, !1, this.data);
                break;
            case this.imgBtn_unlock:
                t.DataMgr.getInstance().dispatchEventWith(t.EventConstant.EVENT_UNLOCK, !1, this.data);
                break;
            case this.icon:
                2 === n.state && t.DataMgr.getInstance().dispatchEventWith(t.EventConstant.EVENT_PUT_OFF, !1, this.data)
            }
        },
        n.prototype.destroy = function() {
            this._removeEvents(),
            e.prototype.destroy.call(this)
        },
        n
    } (BaseModule);
    t.EggItem = e,
    __reflect(e.prototype, "eggWarehouse.EggItem")
} (eggWarehouse || (eggWarehouse = {}));
var __reflect = this && this.__reflect ||
function(t, e, n) {
    t.__class__ = e,
    n ? n.push(e) : n = [e],
    t.__types__ = t.__types__ ? n.concat(t.__types__) : n
},
__extends = this && this.__extends ||
function(t, e) {
    function n() {
        this.constructor = t
    }
    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
    n.prototype = e.prototype,
    t.prototype = new n
},
eggWarehouse; !
function(t) {
    var e = function(e) {
        function n() {
            var n = e.call(this) || this;
            return n.skinName = t.EggWarehouseSelectedPetPopSkin,
            n
        }
        return __extends(n, e),
        n.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.list_item.itemRenderer = t.WarehouseItemIcon,
            this.list_item.dataProvider = new eui.ArrayCollection
        },
        n.prototype.initEvents = function() {
            ImageButtonUtil.add(this.img_btn_close, this.hide, this),
            this.list_item.addEventListener(eui.ItemTapEvent.ITEM_TAP, this._onTouchItemTapHandler, this)
        },
        n.prototype.removeEvents = function() {
            ImageButtonUtil.removeAll(this),
            this.list_item.removeEventListener(eui.ItemTapEvent.ITEM_TAP, this._onTouchItemTapHandler, this)
        },
        n.prototype._parseData = function() {
            this._type = this._data.type,
            this._callBack = this._data.callBack,
            this._caller = this._data.caller
        },
        n.prototype._upDateView = function() {
            this._setTitleStyle(),
            this.list_item.dataProvider.replaceAll(this._data.list),
            this.list_item.dataProvider.refresh()
        },
        n.prototype._setTitleStyle = function() {
            this.title.source = "egg_warehouse_selected_pet_pop_titleTx_" + this._type + "_png";
            var t = {
                1 : "点击任意精元放入孵化仓",
                2 : "点击任意元神珠放入赋形仓",
                3 : "点击任意异能晶核放入培育仓"
            };
            this.txt_title.text = t[this._type]
        },
        n.prototype._onTouchItemTapHandler = function(t) {
            var e = t.item;
            this.hide(),
            this._callBack.apply(this._caller, [e]),
            this._callBack = null,
            this._caller = null
        },
        n.prototype.destroy = function() {
            e.prototype.destroy.call(this)
        },
        n
    } (PopView);
    t.Warehouse = e,
    __reflect(e.prototype, "eggWarehouse.Warehouse")
} (eggWarehouse || (eggWarehouse = {}));
var __reflect = this && this.__reflect ||
function(t, e, n) {
    t.__class__ = e,
    n ? n.push(e) : n = [e],
    t.__types__ = t.__types__ ? n.concat(t.__types__) : n
},
__extends = this && this.__extends ||
function(t, e) {
    function n() {
        this.constructor = t
    }
    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
    n.prototype = e.prototype,
    t.prototype = new n
},
eggWarehouse; !
function(t) {
    var e = function(e) {
        function n() {
            var n = e.call(this) || this;
            return n.addEventListener(egret.Event.REMOVED_FROM_STAGE, n.destroy, n),
            n.skinName = t.ItemIconSkin,
            n
        }
        return __extends(n, e),
        n.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this)
        },
        n.prototype.dataChanged = function() {
            var e = this.data;
            this.icon.source = ItemXMLInfo.getIconURL(e.itemID),
            this.txt_num.text = e.itemNum + "";
            var n, i;
            e instanceof SoulBeadItemInfo ? (n = e.obtainTime, i = t.EggType.ENLIVENER, this.txt_lab.text = "赋形中") : e instanceof NucleusInfo ? (n = e.gentm, i = t.EggType.CRYSTAL_NUCLEUS, this.txt_lab.text = "培育中") : (n = e.itemID, i = t.EggType.SOUL, this.txt_lab.text = "孵化中");
            var r = t.DataMgr.getInstance().checkItemIsWork(i, n, !0);
            this.fh.visible = !r,
            this.touchEnabled = r,
            this.touchChildren = r
        },
        n.prototype.destroy = function() {
            this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this)
        },
        n
    } (eui.ItemRenderer);
    t.WarehouseItemIcon = e,
    __reflect(e.prototype, "eggWarehouse.WarehouseItemIcon")
} (eggWarehouse || (eggWarehouse = {}));
var __reflect = this && this.__reflect ||
function(t, e, n) {
    t.__class__ = e,
    n ? n.push(e) : n = [e],
    t.__types__ = t.__types__ ? n.concat(t.__types__) : n
},
eggWarehouse; !
function(t) {
    var e = function() {
        function t(t, e) {
            this._location = e,
            this._gen_item = t.readUnsignedInt(),
            this._gentm = t.readUnsignedInt(),
            this._left_time = t.readUnsignedInt()
        }
        return Object.defineProperty(t.prototype, "location", {
            get: function() {
                return this._location
            },
            set: function(t) {
                this._location = t
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(t.prototype, "gentm", {
            get: function() {
                return this._gentm
            },
            set: function(t) {
                this._gentm = t
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(t.prototype, "gen_item", {
            get: function() {
                return this._gen_item
            },
            set: function(t) {
                this._gen_item = t
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(t.prototype, "left_time", {
            get: function() {
                return this._left_time
            },
            set: function(t) {
                this._left_time = t
            },
            enumerable: !0,
            configurable: !0
        }),
        t
    } ();
    t.CrystalNucleusVo = e,
    __reflect(e.prototype, "eggWarehouse.CrystalNucleusVo")
} (eggWarehouse || (eggWarehouse = {}));
var __reflect = this && this.__reflect ||
function(t, e, n) {
    t.__class__ = e,
    n ? n.push(e) : n = [e],
    t.__types__ = t.__types__ ? n.concat(t.__types__) : n
},
eggWarehouse; !
function(t) {
    var e = function() {
        function t(t, e) {
            this._location = e,
            this._id = t.readUnsignedInt(),
            this._cnt = t.readUnsignedInt(),
            this._time_left = t.readUnsignedInt(),
            this._item_lv = t.readUnsignedInt(),
            this._update_tm = t.readUnsignedInt()
        }
        return Object.defineProperty(t.prototype, "location", {
            get: function() {
                return this._location
            },
            set: function(t) {
                this._location = t
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(t.prototype, "id", {
            get: function() {
                return this._id
            },
            set: function(t) {
                this._id = t
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(t.prototype, "cnt", {
            get: function() {
                return this._cnt
            },
            set: function(t) {
                this._cnt = t
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(t.prototype, "time_left", {
            get: function() {
                return this._time_left
            },
            set: function(t) {
                this._time_left = t
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(t.prototype, "time_lv", {
            get: function() {
                return this._item_lv
            },
            set: function(t) {
                this._item_lv = t
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(t.prototype, "update_tm", {
            get: function() {
                return this._update_tm
            },
            set: function(t) {
                this._update_tm = t
            },
            enumerable: !0,
            configurable: !0
        }),
        t
    } ();
    t.EggVo = e,
    __reflect(e.prototype, "eggWarehouse.EggVo")
} (eggWarehouse || (eggWarehouse = {}));
var __reflect = this && this.__reflect ||
function(t, e, n) {
    t.__class__ = e,
    n ? n.push(e) : n = [e],
    t.__types__ = t.__types__ ? n.concat(t.__types__) : n
},
eggWarehouse; !
function(t) {
    var e = function() {
        function t(t, e) {
            this._location = e,
            this._obtain_tm = t.readUnsignedInt(),
            this._yuanshen_id = t.readUnsignedInt(),
            this._left_tm = t.readUnsignedInt()
        }
        return Object.defineProperty(t.prototype, "location", {
            get: function() {
                return this._location
            },
            set: function(t) {
                this._location = t
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(t.prototype, "obtain_tm", {
            get: function() {
                return this._obtain_tm
            },
            set: function(t) {
                this._obtain_tm = t
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(t.prototype, "yuanshen_id", {
            get: function() {
                return this._yuanshen_id
            },
            set: function(t) {
                this._yuanshen_id = t
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(t.prototype, "left_tm", {
            get: function() {
                return this._left_tm
            },
            set: function(t) {
                this._left_tm = t
            },
            enumerable: !0,
            configurable: !0
        }),
        t
    } ();
    t.EnlivenerVo = e,
    __reflect(e.prototype, "eggWarehouse.EnlivenerVo")
} (eggWarehouse || (eggWarehouse = {})),
window.eggWarehouse = window.eggWarehouse || {};
var __extends = this && this.__extends ||
function(t, e) {
    function n() {
        this.constructor = t
    }
    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
    n.prototype = e.prototype,
    t.prototype = new n
};
window.generateEUI = window.generateEUI || {},
generateEUI.paths = generateEUI.paths || {},
generateEUI.styles = void 0,
generateEUI.skins = {},
generateEUI.paths["resource/eui_skins/comp/EggItemSkin.exml"] = window.eggWarehouse.EggItemSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["imgBtn_rightNow", "imgBtn_lq", "txt_educating", "txt_complete", "imgBtn_add", "imgBtn_put", "txt_null", "imgBtn_unlock", "txt_viplock", "icon"],
        this.height = 429,
        this.width = 244,
        this.elementsContent = [this._Image1_i(), this.imgBtn_rightNow_i(), this.imgBtn_lq_i(), this.txt_educating_i(), this.txt_complete_i(), this._Group1_i(), this._Group2_i(), this._Group3_i()],
        this.states = [new eui.State("state_null", [new eui.SetProperty("_Image1", "visible", !0), new eui.SetProperty("imgBtn_rightNow", "visible", !1), new eui.SetProperty("imgBtn_lq", "visible", !1), new eui.SetProperty("imgBtn_lq", "x", 55), new eui.SetProperty("txt_educating", "visible", !1), new eui.SetProperty("txt_complete", "visible", !1), new eui.SetProperty("_Group1", "horizontalCenter", 0), new eui.SetProperty("_Group2", "visible", !1), new eui.SetProperty("_Group3", "visible", !1)]), new eui.State("state_educating", [new eui.SetProperty("imgBtn_lq", "visible", !1), new eui.SetProperty("imgBtn_lq", "x", 55), new eui.SetProperty("txt_complete", "visible", !1), new eui.SetProperty("_Group1", "visible", !1), new eui.SetProperty("_Group2", "visible", !1)]), new eui.State("state_complete", [new eui.SetProperty("imgBtn_rightNow", "visible", !1), new eui.SetProperty("imgBtn_lq", "horizontalCenter", 0), new eui.SetProperty("txt_educating", "visible", !1), new eui.SetProperty("_Group1", "visible", !1), new eui.SetProperty("_Group2", "visible", !1)]), new eui.State("state_viplock", [new eui.SetProperty("imgBtn_rightNow", "visible", !1), new eui.SetProperty("imgBtn_lq", "visible", !1), new eui.SetProperty("imgBtn_lq", "x", 55), new eui.SetProperty("txt_educating", "visible", !1), new eui.SetProperty("txt_complete", "visible", !1), new eui.SetProperty("_Group1", "visible", !1), new eui.SetProperty("_Group2", "y", 19), new eui.SetProperty("_Group3", "visible", !1)])]
    }
    __extends(e, t);
    var n = e.prototype;
    return n._Image1_i = function() {
        var t = new eui.Image;
        return this._Image1 = t,
        t.source = "egg_warehouse_texture_13_png",
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t
    },
    n.imgBtn_rightNow_i = function() {
        var t = new eui.Image;
        return this.imgBtn_rightNow = t,
        t.source = "egg_warehouse_imgBtn_rightNow_png",
        t.x = 55,
        t.y = 344,
        t
    },
    n.imgBtn_lq_i = function() {
        var t = new eui.Image;
        return this.imgBtn_lq = t,
        t.source = "egg_warehouse_imgBtn_lq_png",
        t.y = 344,
        t
    },
    n.txt_educating_i = function() {
        var t = new eui.Label;
        return this.txt_educating = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = 0,
        t.size = 18,
        t.text = "剩余00天00小时",
        t.textAlign = "center",
        t.textColor = 16777215,
        t.width = 141,
        t.y = 47,
        t
    },
    n.txt_complete_i = function() {
        var t = new eui.Label;
        return this.txt_complete = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = 0,
        t.size = 18,
        t.text = "孵化完成",
        t.textAlign = "center",
        t.textColor = 16773477,
        t.width = 141,
        t.y = 47,
        t
    },
    n._Group1_i = function() {
        var t = new eui.Group;
        return this._Group1 = t,
        t.horizontalCenter = 0,
        t.visible = !0,
        t.y = 19,
        t.elementsContent = [this.imgBtn_add_i(), this.imgBtn_put_i(), this.txt_null_i()],
        t
    },
    n.imgBtn_add_i = function() {
        var t = new eui.Image;
        return this.imgBtn_add = t,
        t.source = "egg_warehouse_texture_add_png",
        t.x = 45,
        t.y = 130.652,
        t
    },
    n.imgBtn_put_i = function() {
        var t = new eui.Image;
        return this.imgBtn_put = t,
        t.horizontalCenter = .5,
        t.source = "egg_warehouse_imgBtn_putJh_png",
        t.x = 14,
        t.y = 325,
        t
    },
    n.txt_null_i = function() {
        var t = new eui.Label;
        return this.txt_null = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = 0,
        t.size = 18,
        t.text = "暂无孵化",
        t.textAlign = "center",
        t.textColor = 4175861,
        t.width = 141,
        t.y = 27,
        t
    },
    n._Group2_i = function() {
        var t = new eui.Group;
        return this._Group2 = t,
        t.horizontalCenter = 0,
        t.visible = !0,
        t.y = 20,
        t.elementsContent = [this.imgBtn_unlock_i(), this._Image2_i(), this.txt_viplock_i()],
        t
    },
    n.imgBtn_unlock_i = function() {
        var t = new eui.Image;
        return this.imgBtn_unlock = t,
        t.source = "egg_warehouse_imgBtn_act_png",
        t.visible = !0,
        t.x = 11,
        t.y = 325,
        t
    },
    n._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 27,
        t.source = "egg_warehouse_imgBtn_vip_png",
        t.width = 59,
        t.x = 41,
        t.y = 143.812,
        t
    },
    n.txt_viplock_i = function() {
        var t = new eui.Label;
        return this.txt_viplock = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = 0,
        t.size = 18,
        t.text = "未激活",
        t.textAlign = "center",
        t.textColor = 4175861,
        t.width = 141,
        t.y = 27.474,
        t
    },
    n._Group3_i = function() {
        var t = new eui.Group;
        return this._Group3 = t,
        t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.height = 80,
        t.width = 80,
        t.x = 82,
        t.y = 135.894,
        t.elementsContent = [this.icon_i()],
        t
    },
    n.icon_i = function() {
        var t = new eui.Image;
        return this.icon = t,
        t.horizontalCenter = 0,
        t.scaleX = 1,
        t.scaleY = 1,
        t.verticalCenter = 0,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/EggWarehouseSkin.exml"] = window.eggWarehouse.EggWarehouseSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["title", "imgBtn_close", "bg", "comp1", "comp2", "comp3", "comp4", "grp_items", "txt_desc", "typeBtn_1", "typeBtn_2", "typeBtn_3"],
        this.height = 580,
        this.width = 1040,
        this.elementsContent = [this.bg_i(), this.grp_items_i(), this.txt_desc_i(), this.typeBtn_1_i(), this.typeBtn_2_i(), this.typeBtn_3_i()]
    }
    __extends(e, t);
    var n = function(t) {
        function e() {
            t.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i(), this._Label1_i()],
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "egg_warehouse_typeBtn_up_1_png")]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var n = e.prototype;
        return n._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t.percentHeight = 100,
            t.source = "egg_warehouse_typeBtn_down_1_png",
            t.percentWidth = 100,
            t
        },
        n._Label1_i = function() {
            var t = new eui.Label;
            return t.horizontalCenter = 0,
            t.touchEnabled = !0,
            t.verticalCenter = 0,
            t
        },
        e
    } (eui.Skin),
    i = function(t) {
        function e() {
            t.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i(), this._Label1_i()],
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "egg_warehouse_typeBtn_up_3_png")]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var n = e.prototype;
        return n._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t.percentHeight = 100,
            t.source = "egg_warehouse_typeBtn_down_3_png",
            t.percentWidth = 100,
            t
        },
        n._Label1_i = function() {
            var t = new eui.Label;
            return t.horizontalCenter = 0,
            t.touchEnabled = !0,
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
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "egg_warehouse_typeBtn_up_2_png")]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var n = e.prototype;
        return n._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t.percentHeight = 100,
            t.source = "egg_warehouse_typeBtn_down_2_png",
            t.percentWidth = 100,
            t
        },
        n._Label1_i = function() {
            var t = new eui.Label;
            return t.horizontalCenter = 0,
            t.touchEnabled = !0,
            t.verticalCenter = 0,
            t
        },
        e
    } (eui.Skin),
    o = e.prototype;
    return o.bg_i = function() {
        var t = new eui.Group;
        return this.bg = t,
        t.height = 580,
        t.visible = !0,
        t.width = 1040,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image1_i(), this.title_i(), this._Image2_i(), this.imgBtn_close_i()],
        t
    },
    o._Image1_i = function() {
        var t = new eui.Image;
        return t.bottom = 0,
        t.fillMode = "scale",
        t.left = 0,
        t.right = 0,
        t.source = "egg_warehouse_bg_png",
        t.top = 0,
        t
    },
    o.title_i = function() {
        var t = new eui.Image;
        return this.title = t,
        t.source = "egg_warehouse_title_1_png",
        t.x = 48,
        t.y = 4.493,
        t
    },
    o._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 463.749,
        t.scale9Grid = new egret.Rectangle(117, 0, 117, 359),
        t.source = "car_pop_view_contentbg_png",
        t.width = 998,
        t.x = 18,
        t.y = 87,
        t
    },
    o.imgBtn_close_i = function() {
        var t = new eui.Image;
        return this.imgBtn_close = t,
        t.source = "egg_warehouse_close_png",
        t.x = 995,
        t.y = 2.62,
        t
    },
    o.grp_items_i = function() {
        var t = new eui.Group;
        return this.grp_items = t,
        t.touchEnabled = !1,
        t.visible = !0,
        t.x = 27,
        t.y = 121.258,
        t.layout = this._HorizontalLayout1_i(),
        t.elementsContent = [this.comp1_i(), this.comp2_i(), this.comp3_i(), this.comp4_i()],
        t
    },
    o._HorizontalLayout1_i = function() {
        var t = new eui.HorizontalLayout;
        return t.gap = 0,
        t.horizontalAlign = "justify",
        t
    },
    o.comp1_i = function() {
        var t = new eggWarehouse.EggItem;
        return this.comp1 = t,
        t.skinName = "eggWarehouse.EggItemSkin",
        t
    },
    o.comp2_i = function() {
        var t = new eggWarehouse.EggItem;
        return this.comp2 = t,
        t.skinName = "eggWarehouse.EggItemSkin",
        t.x = 10,
        t.y = 10,
        t
    },
    o.comp3_i = function() {
        var t = new eggWarehouse.EggItem;
        return this.comp3 = t,
        t.skinName = "eggWarehouse.EggItemSkin",
        t.x = 20,
        t.y = 20,
        t
    },
    o.comp4_i = function() {
        var t = new eggWarehouse.EggItem;
        return this.comp4 = t,
        t.skinName = "eggWarehouse.EggItemSkin",
        t.x = 30,
        t.y = 30,
        t
    },
    o.txt_desc_i = function() {
        var t = new eui.Label;
        return this.txt_desc = t,
        t.fontFamily = "MFShangHei",
        t.size = 20,
        t.text = "普通孵化单次孵化需消耗30分钟，VIP孵化单次孵化仅需15分钟（少数特殊精元除外）",
        t.textColor = 13884145,
        t.visible = !0,
        t.x = 38.684,
        t.y = 99.418,
        t
    },
    o.typeBtn_1_i = function() {
        var t = new eui.RadioButton;
        return this.typeBtn_1 = t,
        t.label = "RadioButton",
        t.x = 19,
        t.y = 53,
        t.skinName = n,
        t
    },
    o.typeBtn_2_i = function() {
        var t = new eui.RadioButton;
        return this.typeBtn_2 = t,
        t.label = "RadioButton",
        t.x = 221,
        t.y = 53,
        t.skinName = i,
        t
    },
    o.typeBtn_3_i = function() {
        var t = new eui.RadioButton;
        return this.typeBtn_3 = t,
        t.label = "RadioButton",
        t.x = 120,
        t.y = 53,
        t.skinName = r,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/pop/EggWarehouseSelectedPetPopSkin.exml"] = window.eggWarehouse.EggWarehouseSelectedPetPopSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["title", "list_item", "scroller_item", "img_btn_close", "txt_title"],
        this.height = 431,
        this.width = 753,
        this.elementsContent = [this._Group1_i()]
    }
    __extends(e, t);
    var n = e.prototype;
    return n._Group1_i = function() {
        var t = new eui.Group;
        return t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image1_i(), this.title_i(), this.scroller_item_i(), this.img_btn_close_i(), this.txt_title_i()],
        t
    },
    n._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "eggwarehouse_bg2_png",
        t.x = 0,
        t.y = 0,
        t
    },
    n.title_i = function() {
        var t = new eui.Image;
        return this.title = t,
        t.source = "egg_warehouse_selected_pet_pop_titleTx_1_png",
        t.x = 36,
        t.y = 2,
        t
    },
    n.scroller_item_i = function() {
        var t = new eui.Scroller;
        return this.scroller_item = t,
        t.height = 320.499,
        t.width = 645.299,
        t.x = 53,
        t.y = 58,
        t.viewport = this.list_item_i(),
        t
    },
    n.list_item_i = function() {
        var t = new eui.List;
        return this.list_item = t,
        t.layout = this._TileLayout1_i(),
        t
    },
    n._TileLayout1_i = function() {
        var t = new eui.TileLayout;
        return t
    },
    n.img_btn_close_i = function() {
        var t = new eui.Image;
        return this.img_btn_close = t,
        t.source = "egg_warehouse_close_png",
        t.x = 712,
        t.y = 1,
        t
    },
    n.txt_title_i = function() {
        var t = new eui.Label;
        return this.txt_title = t,
        t.fontFamily = "MFShangHei",
        t.size = 20,
        t.text = "点击任意精元放入孵化仓",
        t.textColor = 12111615,
        t.x = 264,
        t.y = 398,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/render/ItemIconSkin.exml"] = window.eggWarehouse.ItemIconSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["txt_num", "icon", "bg_mask_1", "txt_lab", "fh"],
        this.height = 80,
        this.width = 80,
        this.elementsContent = [this._Image1_i(), this.txt_num_i(), this.icon_i(), this.fh_i()]
    }
    __extends(e, t);
    var n = e.prototype;
    return n._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 80,
        t.scale9Grid = new egret.Rectangle(24, 24, 24, 24),
        t.source = "egg_warehouse_selected_pet_pop_item_bg_png",
        t.width = 80,
        t.x = 0,
        t.y = 0,
        t
    },
    n.txt_num_i = function() {
        var t = new eui.Label;
        return this.txt_num = t,
        t.fontFamily = "MFShangHei",
        t.size = 20,
        t.stroke = 1,
        t.text = "99",
        t.textAlign = "right",
        t.textColor = 16777215,
        t.width = 72,
        t.x = 5.053,
        t.y = 60,
        t
    },
    n.icon_i = function() {
        var t = new eui.Image;
        return this.icon = t,
        t.height = 70,
        t.horizontalCenter = 0,
        t.verticalCenter = 0,
        t.width = 70,
        t
    },
    n.fh_i = function() {
        var t = new eui.Group;
        return this.fh = t,
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this.bg_mask_1_i(), this.txt_lab_i()],
        t
    },
    n.bg_mask_1_i = function() {
        var t = new eui.Image;
        return this.bg_mask_1 = t,
        t.height = 80,
        t.source = "egg_warehouse_selected_pet_pop_bg_mask_1_png",
        t.width = 80,
        t.x = 0,
        t.y = 0,
        t
    },
    n.txt_lab_i = function() {
        var t = new eui.Label;
        return this.txt_lab = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.stroke = 1,
        t.text = "孵化中",
        t.textColor = 16777215,
        t.x = 13,
        t.y = 31,
        t
    },
    e
} (eui.Skin);