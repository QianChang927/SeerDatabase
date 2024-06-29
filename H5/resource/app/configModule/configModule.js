var __awaiter = this && this.__awaiter ||
function(n, e, t, i) {
    return new(t || (t = Promise))(function(o, r) {
        function a(n) {
            try {
                c(i.next(n))
            } catch(e) {
                r(e)
            }
        }
        function l(n) {
            try {
                c(i["throw"](n))
            } catch(e) {
                r(e)
            }
        }
        function c(n) {
            n.done ? o(n.value) : new t(function(e) {
                e(n.value)
            }).then(a, l)
        }
        c((i = i.apply(n, e || [])).next())
    })
},
__generator = this && this.__generator ||
function(n, e) {
    function t(n) {
        return function(e) {
            return i([n, e])
        }
    }
    function i(t) {
        if (o) throw new TypeError("Generator is already executing.");
        for (; c;) try {
            if (o = 1, r && (a = r[2 & t[0] ? "return": t[0] ? "throw": "next"]) && !(a = a.call(r, t[1])).done) return a;
            switch (r = 0, a && (t = [0, a.value]), t[0]) {
            case 0:
            case 1:
                a = t;
                break;
            case 4:
                return c.label++,
                {
                    value: t[1],
                    done: !1
                };
            case 5:
                c.label++,
                r = t[1],
                t = [0];
                continue;
            case 7:
                t = c.ops.pop(),
                c.trys.pop();
                continue;
            default:
                if (a = c.trys, !(a = a.length > 0 && a[a.length - 1]) && (6 === t[0] || 2 === t[0])) {
                    c = 0;
                    continue
                }
                if (3 === t[0] && (!a || t[1] > a[0] && t[1] < a[3])) {
                    c.label = t[1];
                    break
                }
                if (6 === t[0] && c.label < a[1]) {
                    c.label = a[1],
                    a = t;
                    break
                }
                if (a && c.label < a[2]) {
                    c.label = a[2],
                    c.ops.push(t);
                    break
                }
                a[2] && c.ops.pop(),
                c.trys.pop();
                continue
            }
            t = e.call(n, c)
        } catch(i) {
            t = [6, i],
            r = 0
        } finally {
            o = a = 0
        }
        if (5 & t[0]) throw t[1];
        return {
            value: t[0] ? t[1] : void 0,
            done: !0
        }
    }
    var o, r, a, l, c = {
        label: 0,
        sent: function() {
            if (1 & a[0]) throw a[1];
            return a[1]
        },
        trys: [],
        ops: []
    };
    return l = {
        next: t(0),
        "throw": t(1),
        "return": t(2)
    },
    "function" == typeof Symbol && (l[Symbol.iterator] = function() {
        return this
    }),
    l
},
config; !
function(config) {
    function init(callback, caller) {
        var tables = "tables.json";
        callback || (callback = function() {}),
        caller || (caller = this),
        RES.getResByUrl("resource/config/json/" + tables,
        function(data, url) {
            if (!data) return console.error("配置总表" + url + "加载失败"),
            callback.call(caller);
            var _loop_1 = function(key) {
                ins = {
                    hasLoader: !1,
                    url: "",
                    load: function(n, e) {
                        var t = config[data[key]];
                        if (t.hasLoader) n.apply(e, [_ConfigMap[key]]);
                        else {
                            var i = "resource/config/json/" + FestivalVersionController.getExcelTableName(key + ".json");
                            RES.getResByUrl(i,
                            function(i, o) {
                                t.hasLoader = !0,
                                t.url = o,
                                _ConfigMap[key] = i.data,
                                n.apply(e, [_ConfigMap[key]])
                            },
                            this, RES.ResourceItem.TYPE_JSON)
                        }
                    },
                    unload: function() {
                        var n = config[data[key]];
                        RES.destroyRes(n.url),
                        n.url = "",
                        n.hasLoader = !1,
                        _ConfigMap[key] = null,
                        delete _ConfigMap[key]
                    },
                    loadAsync: function() {
                        return __awaiter(this, void 0, void 0,
                        function() {
                            var n = this;
                            return __generator(this,
                            function(e) {
                                return [2, new Promise(function(e, t) {
                                    var i = config[data[key]];
                                    i.load(function(n) {
                                        return e(n)
                                    },
                                    n)
                                })]
                            })
                        })
                    },
                    getItem: function(n) {
                        var e = _ConfigMap[key];
                        if (!e) return null;
                        if (e[n - 1] && n == e[n - 1].id) return e[n - 1];
                        for (var t = 0; t < e.length; t++) if (n === e[t].id) return e[t];
                        return null
                    },
                    getItemsByField: function(field, ops, values) {
                        var all = _ConfigMap[key],
                        list = [];
                        if (!all) return null;
                        for (var i = 0; i < all.length; i++) if (all[i][field]) {
                            for (var conditions = [], j = 0; j < ops.length; j++) conditions.push(all[i][field] + ops[j] + values[j]);
                            var condition = "if(" + conditions.join("&&") + "){list.push(all[i]);}";
                            eval(condition)
                        }
                        return list
                    },
                    getItems: function() {
                        return _ConfigMap[key]
                    },
                    filter: function(n) {
                        var e = _ConfigMap[key],
                        t = [];
                        return e ? (e.filter(function(e) {
                            n(e) && t.push(e)
                        }), t) : null
                    }
                },
                config[data[key]] = ins
            },
            ins;
            for (var key in data) _loop_1(key);
            callback.apply(caller)
        },
        this, RES.ResourceItem.TYPE_JSON)
    }
    function initAsync() {
        return __awaiter(this, void 0, void 0,
        function() {
            var n = this;
            return __generator(this,
            function(e) {
                return [2, new Promise(function(e, t) {
                    config.init(function() {
                        return e()
                    },
                    n)
                })]
            })
        })
    }
    var _ConfigMap = {},
    op; !
    function(n) {
        n.eq = "==",
        n.neq = "!=",
        n.gt = ">",
        n.lt = "<",
        n.gte = ">=",
        n.lte = "<="
    } (op = config.op || (config.op = {})),
    config.init = init,
    config.initAsync = initAsync
} (config || (config = {}));