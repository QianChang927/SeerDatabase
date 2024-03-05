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
    return new(i || (i = Promise))(function(o, r) {
        function s(t) {
            try {
                c(n.next(t))
            } catch(e) {
                r(e)
            }
        }
        function a(t) {
            try {
                c(n["throw"](t))
            } catch(e) {
                r(e)
            }
        }
        function c(t) {
            t.done ? o(t.value) : new i(function(e) {
                e(t.value)
            }).then(s, a)
        }
        c((n = n.apply(t, e || [])).next())
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
        if (o) throw new TypeError("Generator is already executing.");
        for (; c;) try {
            if (o = 1, r && (s = r[2 & i[0] ? "return": i[0] ? "throw": "next"]) && !(s = s.call(r, i[1])).done) return s;
            switch (r = 0, s && (i = [0, s.value]), i[0]) {
            case 0:
            case 1:
                s = i;
                break;
            case 4:
                return c.label++,
                {
                    value: i[1],
                    done: !1
                };
            case 5:
                c.label++,
                r = i[1],
                i = [0];
                continue;
            case 7:
                i = c.ops.pop(),
                c.trys.pop();
                continue;
            default:
                if (s = c.trys, !(s = s.length > 0 && s[s.length - 1]) && (6 === i[0] || 2 === i[0])) {
                    c = 0;
                    continue
                }
                if (3 === i[0] && (!s || i[1] > s[0] && i[1] < s[3])) {
                    c.label = i[1];
                    break
                }
                if (6 === i[0] && c.label < s[1]) {
                    c.label = s[1],
                    s = i;
                    break
                }
                if (s && c.label < s[2]) {
                    c.label = s[2],
                    c.ops.push(i);
                    break
                }
                s[2] && c.ops.pop(),
                c.trys.pop();
                continue
            }
            i = e.call(t, c)
        } catch(n) {
            i = [6, n],
            r = 0
        } finally {
            o = s = 0
        }
        if (5 & i[0]) throw i[1];
        return {
            value: i[0] ? i[1] : void 0,
            done: !0
        }
    }
    var o, r, s, a, c = {
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
npcDialog; !
function(t) {
    function e(t, e, n) {
        var o = [config.Talk, config.Npc],
        r = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var t;
                return __generator(this,
                function(e) {
                    switch (e.label) {
                    case 0:
                        return o.length ? (t = o.pop(), t.hasLoader ? [3, 2] : [4, t.loadAsync()]) : [2, Promise.resolve()];
                    case 1:
                        e.sent(),
                        e.label = 2;
                    case 2:
                        return [4, r()];
                    case 3:
                        return [2, e.sent()]
                    }
                })
            })
        };
        egret.lifecycle.stage.touchChildren = !1,
        r().then(function() {
            var o = new i({
                groupId: t,
                callBack: e,
                caller: n
            });
            LevelManager.appLevel.addChild(o)
        })
    }
    t.showDialogIds = e;
    var i = function(e) {
        function i(i) {
            var n = e.call(this, i) || this;
            return n._createTalkList(),
            n.skinName = t.NpcDialogSkin,
            n
        }
        return __extends(i, e),
        i.prototype._createTalkList = function() {
            this._talkConfigList = [],
            this._talkConfigList = this._findTalkList(this.data.groupId)
        },
        i.prototype._findTalkList = function(t) {
            for (var e = config.Talk.getItems(), i = [], n = 0; n < e.length; n++) e[n].groupId === t && i.push(e[n]);
            return i
        },
        i.prototype.childrenCreated = function() {
            var t = this;
            e.prototype.childrenCreated.call(this),
            this._canTouchFlag = !1,
            this._initEvents(),
            this._resetUi(),
            this.width = egret.lifecycle.stage.stageWidth,
            this.height = egret.lifecycle.stage.stageHeight,
            egret.setTimeout(function() {
                t._next()
            },
            this, 0)
        },
        i.prototype._initEvents = function() {
            this.addEventListener(egret.TouchEvent.TOUCH_TAP, this._onTouchHanlder, this),
            egret.lifecycle.stage.addEventListener(egret.Event.RESIZE, this._onResizeHanlder, this),
            EventManager.addEventListener("event_selected_npc_dialog_option", this._onSelectedOption, this)
        },
        i.prototype._removeEvents = function() {
            this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this._onTouchHanlder, this),
            egret.lifecycle.stage.removeEventListener(egret.Event.RESIZE, this._onResizeHanlder, this),
            EventManager.removeEventListener("event_selected_npc_dialog_option", this._onSelectedOption, this)
        },
        i.prototype._next = function() {
            var t = this;
            return 0 === this._talkConfigList.length ? void this._complete() : (this._curtTalkConfig = this._talkConfigList.shift(), void this._showDialog().then(function() {
                t._canTouchFlag = !0
            }))
        },
        i.prototype._complete = function() {
            var t = this.data.caller,
            e = this.data.callBack;
            this.destroy(),
            e.apply(t, [])
        },
        i.prototype._onSelectedOption = function(t) {
            var e = t.data,
            i = this._curtTalkConfig.answer.split("|").indexOf(e),
            n = this._curtTalkConfig.deal.split("|"),
            o = n[i].split("_"),
            r = ~~o[0],
            s = o[1],
            a = o[2];
            switch (r) {
            case 1:
                var c = "";
                c = a ? "2_" + s + "_" + a: "2_" + s,
                "198" == s ? this.checkCanFix() ? core.gameUtil.jumpTo(c) : Alarm.show("你身上没有需要修理的装备哦！") : core.gameUtil.jumpTo(c),
                this.destroy();
                break;
            case 2:
                this._talkConfigList = this._findTalkList(~~s),
                this._startNextDialog();
                break;
            case 3:
                break;
            case 4:
                EventManager.dispatchEventWith(s),
                this._startNextDialog();
                break;
            default:
                this._startNextDialog()
            }
        },
        i.prototype.checkCanFix = function() {
            for (var t = [], e = ItemManager.getClothIDs(), i = 0, n = e; i < n.length; i++) {
                var o = n[i],
                r = ItemManager.getClothInfo(o);
                0 != ItemXMLInfo.getLifeTime(r.itemID) && r.leftTime < 1 && t.push(o)
            }
            return t.length > 0
        },
        i.prototype._onSetCompPosition = function() {
            var t = this._curtTalkConfig.dir;
            this._compDialog.verticalCenter = this._compDialog.verticalCenter_show,
            this._compNpcModel.x = 0 === t ? this.pos_npc_left.x: this.pos_npc_right.x,
            this._compNpcModel.y = 0 === t ? this.pos_npc_left.y: this.pos_npc_right.y,
            this._compNpcTitle.x = 0 === t ? this.pos_npcTitle_left.x: this.pos_npcTitle_right.x,
            this._compNpcTitle.y = 0 === t ? this.pos_npcTitle_left.y: this.pos_npcTitle_right.y,
            this._curtTalkConfig.answer && (this._compOption.x = 1 === t ? this.pos_option_left.x: this.pos_option_right.x, this._compOption.y = 1 === t ? this.pos_option_left.y: this.pos_option_right.y)
        },
        i.prototype._showDialog = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                return __generator(this,
                function(t) {
                    switch (t.label) {
                    case 0:
                        return this._compNpcModel.updateData(this._curtTalkConfig),
                        [4, this._compNpcModel.updateView()];
                    case 1:
                        return t.sent(),
                        this._compNpcTitle.updateData(this._curtTalkConfig),
                        [4, this._compNpcTitle.updateView()];
                    case 2:
                        return t.sent(),
                        this._compDialog.updateData(this._curtTalkConfig),
                        [4, this._compDialog.updateView()];
                    case 3:
                        return t.sent(),
                        this._curtTalkConfig.answer ? (this._compOption.updateData(this._curtTalkConfig), [4, this._compOption.updateView()]) : [3, 5];
                    case 4:
                        t.sent(),
                        this._compOption.visible = !0,
                        t.label = 5;
                    case 5:
                        return this._compNpcModel.visible = !0,
                        this._compDialog.visible = !0,
                        this._compNpcTitle.visible = !0,
                        this._onSetCompPosition(),
                        [4, this._showAni()];
                    case 6:
                        return t.sent(),
                        EventManager.dispatchEventWith("npcDialog_showed", !1, this._curtTalkConfig),
                        egret.lifecycle.stage.touchChildren = !0,
                        [2, Promise.resolve()]
                    }
                })
            })
        },
        i.prototype._showAni = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var t, e, i, n;
                return __generator(this,
                function(o) {
                    switch (o.label) {
                    case 0:
                        return t = this._curtTalkConfig.dir,
                        e = this._compDialog.verticalCenter,
                        this._compDialog.verticalCenter = e + this._compDialog.height,
                        this._compDialog.alpha = 0,
                        i = this._compNpcModel.x,
                        this._compNpcModel.x = 0 === t ? i - this._compNpcModel.width / 2 : i + this._compNpcModel.width / 2,
                        this._compNpcModel.alpha = 0,
                        this._curtTalkConfig.answer ? this._compOption.visible = !1 : this._compDialog.imgBtn_next.visible = !1,
                        this._compNpcTitle.alpha = 0,
                        n = common.TweenUtil.createAllTween(egret.Tween.get(this._compDialog).to({
                            verticalCenter: e,
                            alpha: 1
                        },
                        150, egret.Ease.cubicOut), egret.Tween.get(this._compNpcModel).wait(200).to({
                            x: i,
                            alpha: 1
                        },
                        150, egret.Ease.cubicOut)),
                        [4, Promise.all(n)];
                    case 1:
                        return o.sent(),
                        [4, common.TweenUtil.TweenToPromise(egret.Tween.get(this._compNpcTitle).to({
                            alpha: 1
                        },
                        150, egret.Ease.cubicOut))];
                    case 2:
                        return o.sent(),
                        this._curtTalkConfig.answer ? (this._compOption.visible = !0, this._compOption.alpha = 0, [4, common.TweenUtil.TweenToPromise(egret.Tween.get(this._compOption).to({
                            alpha: 1
                        },
                        100, egret.Ease.cubicOut))]) : [3, 4];
                    case 3:
                        return o.sent(),
                        [3, 5];
                    case 4:
                        this._compDialog.imgBtn_next.alpha = .2,
                        this._compDialog.imgBtn_next.visible = !0,
                        egret.Tween.removeTweens(this._compDialog.imgBtn_next),
                        this._compDialog.imgBtn_next.y = 15,
                        egret.Tween.get(this._compDialog.imgBtn_next, {
                            loop: !0
                        }).to({
                            alpha: 1,
                            y: 30
                        },
                        975).to({
                            alpha: .2,
                            y: 15
                        },
                        625),
                        o.label = 5;
                    case 5:
                        return [2, Promise.resolve()]
                    }
                })
            })
        },
        i.prototype._hideAni = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var t, e, i, n;
                return __generator(this,
                function(o) {
                    switch (o.label) {
                    case 0:
                        return t = this._curtTalkConfig.dir,
                        e = this._compDialog.verticalCenter + this._compDialog.height,
                        i = 0 === t ? this._compNpcModel.x - this._compNpcModel.width / 2 : this._compNpcModel.x + this._compNpcModel.width / 2,
                        egret.Tween.removeTweens(this._compDialog.imgBtn_next),
                        n = common.TweenUtil.createAllTween(egret.Tween.get(this._compDialog).to({
                            verticalCenter: e,
                            alpha: 0
                        },
                        150, egret.Ease.cubicOut), egret.Tween.get(this._compNpcModel).to({
                            x: i,
                            alpha: 0
                        },
                        150, egret.Ease.cubicOut), egret.Tween.get(this._compNpcTitle).to({
                            alpha: 0
                        },
                        150, egret.Ease.cubicOut)),
                        this._compOption.visible = !1,
                        [4, Promise.all(n)];
                    case 1:
                        return o.sent(),
                        [2, Promise.resolve()]
                    }
                })
            })
        },
        i.prototype._onTouchHanlder = function(t) {
            if (this._canTouchFlag) {
                if (this._curtTalkConfig.answer) {
                    var e = this._curtTalkConfig.answer.split("|").length;
                    if (e > 1) return void BubblerManager.getInstance().showText("请先选择应答方式")
                }
                this._canTouchFlag = !1,
                this._startNextDialog()
            }
        },
        i.prototype._onResizeHanlder = function(t) {
            var e = this;
            egret.setTimeout(function() {
                e._onSetCompPosition()
            },
            this, 100)
        },
        i.prototype._startNextDialog = function() {
            var t = this;
            this._hideAni().then(function() {
                t._resetUi(),
                t._next()
            })
        },
        i.prototype._resetUi = function() {
            this._compNpcModel.visible = !1,
            this._compDialog.visible = !1,
            this._compOption.visible = !1,
            this._compNpcTitle.visible = !1
        },
        i.prototype.destroy = function() {
            this._compDialog.destroy(),
            this._compNpcModel.destroy(),
            this._compOption.destroy(),
            this._compNpcTitle.destroy(),
            this._removeEvents(),
            e.prototype.destroy.call(this)
        },
        i
    } (BaseModule);
    t.NpcDialog = i,
    __reflect(i.prototype, "npcDialog.NpcDialog")
} (npcDialog || (npcDialog = {}));
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
npcDialog; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.verticalCenter_show = 193.5,
            i.verticalCenter_ImgBtn_sure = 85.5,
            i.skinName = t.CompDialogSkin,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {},
        i.prototype.updateData = function(t) {
            this._talkConfig = t
        },
        i.prototype.updateView = function() {
            var t = this._talkConfig.msg.replace(/\${nick}/g, MainManager.actorInfo.nick);
            return this.text_desc.textFlow = (new egret.HtmlTextParser).parser(t),
            this.imgBtn_next.visible = !this._talkConfig.answer,
            Promise.resolve()
        },
        i.prototype.destroy = function() {
            e.prototype.destroy.call(this)
        },
        i
    } (BaseModule);
    t.CompDialog = e,
    __reflect(e.prototype, "npcDialog.CompDialog", ["npcDialog.IComponent"])
} (npcDialog || (npcDialog = {}));
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
    return new(i || (i = Promise))(function(o, r) {
        function s(t) {
            try {
                c(n.next(t))
            } catch(e) {
                r(e)
            }
        }
        function a(t) {
            try {
                c(n["throw"](t))
            } catch(e) {
                r(e)
            }
        }
        function c(t) {
            t.done ? o(t.value) : new i(function(e) {
                e(t.value)
            }).then(s, a)
        }
        c((n = n.apply(t, e || [])).next())
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
        if (o) throw new TypeError("Generator is already executing.");
        for (; c;) try {
            if (o = 1, r && (s = r[2 & i[0] ? "return": i[0] ? "throw": "next"]) && !(s = s.call(r, i[1])).done) return s;
            switch (r = 0, s && (i = [0, s.value]), i[0]) {
            case 0:
            case 1:
                s = i;
                break;
            case 4:
                return c.label++,
                {
                    value: i[1],
                    done: !1
                };
            case 5:
                c.label++,
                r = i[1],
                i = [0];
                continue;
            case 7:
                i = c.ops.pop(),
                c.trys.pop();
                continue;
            default:
                if (s = c.trys, !(s = s.length > 0 && s[s.length - 1]) && (6 === i[0] || 2 === i[0])) {
                    c = 0;
                    continue
                }
                if (3 === i[0] && (!s || i[1] > s[0] && i[1] < s[3])) {
                    c.label = i[1];
                    break
                }
                if (6 === i[0] && c.label < s[1]) {
                    c.label = s[1],
                    s = i;
                    break
                }
                if (s && c.label < s[2]) {
                    c.label = s[2],
                    c.ops.push(i);
                    break
                }
                s[2] && c.ops.pop(),
                c.trys.pop();
                continue
            }
            i = e.call(t, c)
        } catch(n) {
            i = [6, n],
            r = 0
        } finally {
            o = s = 0
        }
        if (5 & i[0]) throw i[1];
        return {
            value: i[0] ? i[1] : void 0,
            done: !0
        }
    }
    var o, r, s, a, c = {
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
npcDialog; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.skinName = t.CompoentNpcSkin,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {},
        i.prototype.updateData = function(t) {
            this._talkConfig = t
        },
        i.prototype.updateView = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var t, e;
                return __generator(this,
                function(i) {
                    switch (i.label) {
                    case 0:
                        return t = ClientConfig.getNpcDialogPng(this._talkConfig.npcId),
                        [4, RES.getResByUrl(t)];
                    case 1:
                        return e = i.sent(),
                        this.npc.texture = e,
                        this.width = e.textureWidth,
                        this.height = e.textureHeight,
                        this.scaleX = 1 === this._talkConfig.dir ? -1 : 1,
                        this.anchorOffsetY = this.height / 2,
                        this.anchorOffsetX = 0,
                        [2, Promise.resolve()]
                    }
                })
            })
        },
        i
    } (BaseModule);
    t.CompNpcModel = e,
    __reflect(e.prototype, "npcDialog.CompNpcModel", ["npcDialog.IComponent"])
} (npcDialog || (npcDialog = {}));
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
    return new(i || (i = Promise))(function(o, r) {
        function s(t) {
            try {
                c(n.next(t))
            } catch(e) {
                r(e)
            }
        }
        function a(t) {
            try {
                c(n["throw"](t))
            } catch(e) {
                r(e)
            }
        }
        function c(t) {
            t.done ? o(t.value) : new i(function(e) {
                e(t.value)
            }).then(s, a)
        }
        c((n = n.apply(t, e || [])).next())
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
        if (o) throw new TypeError("Generator is already executing.");
        for (; c;) try {
            if (o = 1, r && (s = r[2 & i[0] ? "return": i[0] ? "throw": "next"]) && !(s = s.call(r, i[1])).done) return s;
            switch (r = 0, s && (i = [0, s.value]), i[0]) {
            case 0:
            case 1:
                s = i;
                break;
            case 4:
                return c.label++,
                {
                    value: i[1],
                    done: !1
                };
            case 5:
                c.label++,
                r = i[1],
                i = [0];
                continue;
            case 7:
                i = c.ops.pop(),
                c.trys.pop();
                continue;
            default:
                if (s = c.trys, !(s = s.length > 0 && s[s.length - 1]) && (6 === i[0] || 2 === i[0])) {
                    c = 0;
                    continue
                }
                if (3 === i[0] && (!s || i[1] > s[0] && i[1] < s[3])) {
                    c.label = i[1];
                    break
                }
                if (6 === i[0] && c.label < s[1]) {
                    c.label = s[1],
                    s = i;
                    break
                }
                if (s && c.label < s[2]) {
                    c.label = s[2],
                    c.ops.push(i);
                    break
                }
                s[2] && c.ops.pop(),
                c.trys.pop();
                continue
            }
            i = e.call(t, c)
        } catch(n) {
            i = [6, n],
            r = 0
        } finally {
            o = s = 0
        }
        if (5 & i[0]) throw i[1];
        return {
            value: i[0] ? i[1] : void 0,
            done: !0
        }
    }
    var o, r, s, a, c = {
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
npcDialog; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.skinName = t.CompNpcTitleSkin,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {},
        i.prototype.updateData = function(t) {
            this._talkConfig = t
        },
        i.prototype.updateView = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                return __generator(this,
                function(t) {
                    return this.txt_npcName.text = config.Npc.getItem(this._talkConfig.npcId).npcDes,
                    [2, Promise.resolve()]
                })
            })
        },
        i
    } (BaseModule);
    t.CompNpcTitle = e,
    __reflect(e.prototype, "npcDialog.CompNpcTitle", ["npcDialog.IComponent"])
} (npcDialog || (npcDialog = {}));
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
npcDialog; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.skinName = t.CompOptionSkin,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {},
        i.prototype.updateData = function(t) {
            this._talkConfig = t
        },
        i.prototype.updateView = function() {
            this.currentState = 0 === this._talkConfig.dir ? "right": "left",
            this.validateNow();
            for (var e = this._talkConfig.answer.split("|"), i = 0; i < this.grp_options.numChildren; i++) {
                var n = this.grp_options.getChildAt(i);
                n.destroy()
            }
            this.grp_options.removeChildren();
            for (var i = 0; i < e.length; i++) {
                var n;
                i < this.grp_options.numChildren ? (n = this.grp_options.getChildAt(i), n.setLab(e[i]), n.visible = !0) : (n = new t.ItemOption(e[i]), this.grp_options.addChild(n))
            }
            this.grp_options.validateNow();
            var o = this.grp_options.height;
            return this.texture_001.y = o,
            this.height = o + this.texture_001.height,
            this.width = this.grp_options.width,
            0 === this._talkConfig.dir ? (this.anchorOffsetX = this.width, this.anchorOffsetY = this.height) : (this.anchorOffsetX = 0, this.anchorOffsetY = this.height),
            Promise.resolve()
        },
        i.prototype.destroy = function() {
            for (; this.grp_options.numChildren;) {
                var t = this.grp_options.getChildAt(0);
                t.destroy()
            }
            e.prototype.destroy.call(this)
        },
        i
    } (BaseModule);
    t.CompOptions = e,
    __reflect(e.prototype, "npcDialog.CompOptions", ["npcDialog.IComponent"])
} (npcDialog || (npcDialog = {}));
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
npcDialog; !
function(t) {
    var e = function(e) {
        function i(i) {
            var n = e.call(this, i) || this;
            return n._txt = i,
            n.skinName = t.ItemOptionSkin,
            n
        }
        return __extends(i, e),
        i.prototype._initEvent = function() {
            var t = this;
            ImageButtonUtil.add(this.grp_touch,
            function(e) {
                e.stopImmediatePropagation(),
                EventManager.dispatchEvent(new egret.Event("event_selected_npc_dialog_option", !1, !1, t._txt))
            },
            this)
        },
        i.prototype._removeEvent = function() {
            ImageButtonUtil.remove(this)
        },
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this._initEvent(),
            this._updateLab()
        },
        i.prototype.setLab = function(t) {
            this._txt = t,
            this._updateLab()
        },
        i.prototype._updateLab = function() {
            this.txt_option.text = this._txt
        },
        i.prototype.destroy = function() {
            this._removeEvent(),
            e.prototype.destroy.call(this)
        },
        i
    } (BaseModule);
    t.ItemOption = e,
    __reflect(e.prototype, "npcDialog.ItemOption")
} (npcDialog || (npcDialog = {})),
window.npcDialog = window.npcDialog || {};
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
generateEUI.paths["resource/eui_skins/comp/CompDialogSkin.exml"] = window.npcDialog.CompDialogSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["imgBtn_next", "imgBtn_sure", "text_desc"],
        this.height = 277,
        this.width = 1136,
        this.elementsContent = [this._Image1_i(), this._Group1_i(), this.imgBtn_sure_i(), this.text_desc_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.bottom = 0,
        t.left = 0,
        t.right = 0,
        t.scale9Grid = new egret.Rectangle(510, 92, 23, 45),
        t.source = "npc_dialog_texture_dialog_bg_png",
        t.top = 0,
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.bottom = 14,
        t.height = 70,
        t.right = 18,
        t.width = 70,
        t.elementsContent = [this.imgBtn_next_i()],
        t
    },
    i.imgBtn_next_i = function() {
        var t = new eui.Image;
        return this.imgBtn_next = t,
        t.height = 38,
        t.source = "npc_dialog_imgBtn_next_png",
        t.width = 51,
        t.x = 10,
        t.y = 16,
        t
    },
    i.imgBtn_sure_i = function() {
        var t = new eui.Image;
        return this.imgBtn_sure = t,
        t.height = 36,
        t.source = "npc_dialog_imgBtn_sure_png",
        t.visible = !1,
        t.width = 78,
        t.x = 955,
        t.y = 172,
        t
    },
    i.text_desc_i = function() {
        var t = new eui.Label;
        return this.text_desc = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = -15,
        t.lineSpacing = 10,
        t.size = 20,
        t.text = "文本框行数三行无下滑文本框行数三行无下滑文本框行数三行无下滑无文本框行数三行无下滑文本框行数三行无下滑文本框行数三行无下滑无文本框行数三行无下滑文本框行数三行无下滑",
        t.textColor = 16777215,
        t.width = 936,
        t.y = 106.148,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/comp/CompNpcTitleSkin.exml"] = window.npcDialog.CompNpcTitleSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["txt_npcName"],
        this.height = 56,
        this.width = 325,
        this.elementsContent = [this._Image1_i(), this.txt_npcName_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "npc_dialog_texture_npc_name_bg_png",
        t.width = 325,
        t.x = 0,
        t.y = 0,
        t
    },
    i.txt_npcName_i = function() {
        var t = new eui.Label;
        return this.txt_npcName = t,
        t.fontFamily = "REEJI",
        t.size = 28,
        t.text = "NPC单行名字十个字",
        t.textColor = 16777215,
        t.x = 27,
        t.y = 9,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/comp/CompoentNpcSkin.exml"] = window.npcDialog.CompoentNpcSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["npc"],
        this.height = 40,
        this.width = 40,
        this.elementsContent = [this.npc_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.npc_i = function() {
        var t = new eui.Image;
        return this.npc = t,
        t.source = "",
        t.x = 0,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/comp/CompOptionSkin.exml"] = window.npcDialog.CompOptionSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["grp_options", "texture_001"],
        this.currentState = "left",
        this.height = 45,
        this.width = 416,
        this.elementsContent = [this.grp_options_i(), this.texture_001_i()],
        this.states = [new eui.State("left", []), new eui.State("right", [new eui.SetProperty("texture_001", "scaleX", -1), new eui.SetProperty("texture_001", "x", 328.5)])]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.grp_options_i = function() {
        var t = new eui.Group;
        return this.grp_options = t,
        t.layout = this._VerticalLayout1_i(),
        t
    },
    i._VerticalLayout1_i = function() {
        var t = new eui.VerticalLayout;
        return t.gap = -24,
        t
    },
    i.texture_001_i = function() {
        var t = new eui.Image;
        return this.texture_001 = t,
        t.anchorOffsetX = 84.5,
        t.anchorOffsetY = 10.5,
        t.height = 21,
        t.source = "npc_dialog_texture_001_png",
        t.width = 169,
        t.x = 102.5,
        t.y = 24,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/item/ItemOptionSkin.exml"] = window.npcDialog.ItemOptionSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["txt_option", "grp_touch"],
        this.height = 91,
        this.width = 418,
        this.elementsContent = [this._Image1_i(), this.txt_option_i(), this.grp_touch_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "npc_dialog_texture_002_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.txt_option_i = function() {
        var t = new eui.Label;
        return this.txt_option = t,
        t.fontFamily = "MFShangHei",
        t.lineSpacing = 2,
        t.size = 18,
        t.text = "白虎大人，让我们远离城市的喧嚣，\n一起共享这宇宙的繁华吧！",
        t.textAlign = "center",
        t.textColor = 16777215,
        t.verticalCenter = 0,
        t.width = 288,
        t.x = 65,
        t
    },
    i.grp_touch_i = function() {
        var t = new eui.Group;
        return this.grp_touch = t,
        t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.height = 55,
        t.touchEnabled = !0,
        t.width = 374,
        t.x = 23,
        t.y = 18,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/NpcDialogSkin.exml"] = window.npcDialog.NpcDialogSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["BG", "pos_npc_left", "pos_npc_right", "pos_option_left", "pos_option_right", "pos_npcTitle_left", "pos_npcTitle_right", "_compNpcModel", "texture_fmask", "_compDialog", "_compNpcTitle", "_compOption"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.BG_i(), this.pos_npc_left_i(), this.pos_npc_right_i(), this.pos_option_left_i(), this.pos_option_right_i(), this.pos_npcTitle_left_i(), this.pos_npcTitle_right_i(), this._compNpcModel_i(), this.texture_fmask_i(), this._compDialog_i(), this._compNpcTitle_i(), this._compOption_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.BG_i = function() {
        var t = new eui.Image;
        return this.BG = t,
        t.alpha = .4,
        t.bottom = 0,
        t.left = 0,
        t.right = 0,
        t.source = "common_mask_bg_s9_png",
        t.top = 0,
        t
    },
    i.pos_npc_left_i = function() {
        var t = new eui.Group;
        return this.pos_npc_left = t,
        t.left = 0,
        t.y = 328,
        t
    },
    i.pos_npc_right_i = function() {
        var t = new eui.Group;
        return this.pos_npc_right = t,
        t.right = 0,
        t.y = 328,
        t
    },
    i.pos_option_left_i = function() {
        var t = new eui.Group;
        return this.pos_option_left = t,
        t.left = 19,
        t.visible = !0,
        t.y = 434,
        t
    },
    i.pos_option_right_i = function() {
        var t = new eui.Group;
        return this.pos_option_right = t,
        t.right = 43,
        t.y = 434,
        t
    },
    i.pos_npcTitle_left_i = function() {
        var t = new eui.Group;
        return this.pos_npcTitle_left = t,
        t.left = 83,
        t.y = 420,
        t
    },
    i.pos_npcTitle_right_i = function() {
        var t = new eui.Group;
        return this.pos_npcTitle_right = t,
        t.right = 362,
        t.y = 420,
        t
    },
    i._compNpcModel_i = function() {
        var t = new npcDialog.CompNpcModel;
        return this._compNpcModel = t,
        t.x = 168,
        t.y = 197,
        t
    },
    i.texture_fmask_i = function() {
        var t = new eui.Image;
        return this.texture_fmask = t,
        t.bottom = 0,
        t.left = 0,
        t.right = 0,
        t.source = "common_npc_dialog_texture_fmask_png",
        t.top = 0,
        t
    },
    i._compDialog_i = function() {
        var t = new npcDialog.CompDialog;
        return this._compDialog = t,
        t.bottom = 0,
        t.height = 277,
        t.horizontalCenter = 0,
        t.skinName = "npcDialog.CompDialogSkin",
        t.percentWidth = 100,
        t
    },
    i._compNpcTitle_i = function() {
        var t = new npcDialog.CompNpcTitle;
        return this._compNpcTitle = t,
        t.x = 114,
        t.y = 56,
        t
    },
    i._compOption_i = function() {
        var t = new npcDialog.CompOptions;
        return this._compOption = t,
        t.x = 380,
        t.y = 253,
        t
    },
    e
} (eui.Skin);