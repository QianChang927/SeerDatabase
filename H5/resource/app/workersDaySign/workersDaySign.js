var __reflect = this && this.__reflect ||
    function (e, t, i) {
        e.__class__ = t,
            i ? i.push(t) : i = [t],
            e.__types__ = e.__types__ ? i.concat(e.__types__) : i
    },
    __extends = this && this.__extends ||
        function (e, t) {
            function i() {
                this.constructor = e
            }
            for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
            i.prototype = t.prototype,
                e.prototype = new i
        },
    workersDaySign; !
        function (e) {
            var t = function (e) {
                function t() {
                    var t = e.call(this) || this;
                    return t.isActivityOpen = !1,
                        t.skinName = WorkersDaySignSkin,
                        t.grpStatic.cacheAsBitmap = !0,
                        t
                }
                return __extends(t, e),
                    t.prototype.childrenCreated = function () {
                        e.prototype.childrenCreated.call(this),
                            this.addEvent(),
                            this.initView()
                    },
                    t.prototype.addEvent = function () {
                        var e = this;
                        ImageButtonUtil.add(this.btnClose,
                            function () {
                                e.onClose()
                            },
                            this),
                            ImageButtonUtil.add(this.reward1,
                                function () {
                                    tipsPop.TipsPop.openItemPop({
                                        id: 1723167
                                    })
                                },
                                this),
                            ImageButtonUtil.add(this.reward2,
                                function () {
                                    tipsPop.TipsPop.openItemPop({
                                        id: 1723255
                                    })
                                },
                                this),
                            ImageButtonUtil.add(this.reward3,
                                function () {
                                    tipsPop.TipsPop.openItemPop({
                                        id: 1400154
                                    })
                                },
                                this),
                            ImageButtonUtil.add(this.btnGet,
                                function () {
                                    e.isActivityOpen ? SocketConnection.sendByQueue(41388, [46, e.signDay],
                                        function () {
                                            5 == e.signDay ? e.currentState = "hasGot" : e.currentState = "tomorrow"
                                        }) : BubblerManager.getInstance().showText("<font color= #fcff50>5月1日~5月5日</font>期间可以签到", !0)
                                },
                                this)
                    },
                    t.prototype.initView = function () {
                        var e = this;
                        this.reward1.source = ClientConfig.getItemIcon(1723167),
                            this.reward2.source = ClientConfig.getItemIcon(1723255),
                            this.reward3.source = ClientConfig.getItemIcon(1400154),
                            KTool.getMultiValue([121562],
                                function (t) {
                                    var i = SystemTimerManager.sysBJDate;
                                    e.signDay = i.getDate();
                                    var r = i.getMonth() + 1;
                                    5 == r && 1 <= e.signDay && e.signDay <= 5 && (e.isActivityOpen = !0),
                                        1 == KTool.getBit(t[0], e.signDay) ? 5 == e.signDay ? e.currentState = "hasGot" : e.currentState = "tomorrow" : e.currentState = "canGet"
                                })
                    },
                    t
            }(BaseModule);
            e.WorkersDaySign = t,
                __reflect(t.prototype, "workersDaySign.WorkersDaySign")
        }(workersDaySign || (workersDaySign = {}));
var __extends = this && this.__extends ||
    function (e, t) {
        function i() {
            this.constructor = e
        }
        for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
        i.prototype = t.prototype,
            e.prototype = new i
    };
window.generateEUI = window.generateEUI || {},
    generateEUI.paths = generateEUI.paths || {},
    generateEUI.styles = void 0,
    generateEUI.skins = {},
    generateEUI.paths["resource/eui_skins/WorkersDaySignSkin.exml"] = window.WorkersDaySignSkin = function (e) {
        function t() {
            e.call(this),
                this.skinParts = ["bg", "reward3", "reward2", "reward1", "grpRewards", "btnGet", "btnClose", "imgHasGot", "imgTomorrow", "grpStatic"],
                this.height = 531,
                this.width = 1036,
                this.elementsContent = [this.bg_i(), this.grpStatic_i()],
                this.states = [new eui.State("canGet", [new eui.SetProperty("imgHasGot", "visible", !1), new eui.SetProperty("imgTomorrow", "visible", !1)]), new eui.State("hasGot", [new eui.SetProperty("btnGet", "visible", !1), new eui.SetProperty("imgHasGot", "visible", !0), new eui.SetProperty("imgTomorrow", "visible", !1)]), new eui.State("tomorrow", [new eui.SetProperty("btnGet", "visible", !1), new eui.SetProperty("imgHasGot", "visible", !1), new eui.SetProperty("imgTomorrow", "visible", !0)])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i.bg_i = function () {
            var e = new eui.Image;
            return this.bg = e,
                e.source = "workersday_imgbg_png",
                e.x = 0,
                e.y = 0,
                e
        },
            i.grpStatic_i = function () {
                var e = new eui.Group;
                return this.grpStatic = e,
                    e.elementsContent = [this.grpRewards_i(), this.btnGet_i(), this.btnClose_i(), this.imgHasGot_i(), this.imgTomorrow_i()],
                    e
            },
            i.grpRewards_i = function () {
                var e = new eui.Group;
                return this.grpRewards = e,
                    e.scaleX = 1,
                    e.scaleY = 1,
                    e.x = 471.588,
                    e.y = 245.172,
                    e.elementsContent = [this._Image1_i(), this.reward3_i(), this._Image2_i(), this._Image3_i(), this.reward2_i(), this._Image4_i(), this.reward1_i()],
                    e
            },
            i._Image1_i = function () {
                var e = new eui.Image;
                return e.source = "workersday_imgitembg_png",
                    e.x = 304,
                    e.y = 0,
                    e
            },
            i.reward3_i = function () {
                var e = new eui.Image;
                return this.reward3 = e,
                    e.height = 94,
                    e.width = 97,
                    e.x = 327,
                    e.y = 9,
                    e
            },
            i._Image2_i = function () {
                var e = new eui.Image;
                return e.source = "workersday_x5_png",
                    e.touchEnabled = !1,
                    e.x = 383,
                    e.y = 60,
                    e
            },
            i._Image3_i = function () {
                var e = new eui.Image;
                return e.source = "workersday_imgitembg_png",
                    e.x = 152,
                    e.y = 0,
                    e
            },
            i.reward2_i = function () {
                var e = new eui.Image;
                return this.reward2 = e,
                    e.height = 75,
                    e.width = 77,
                    e.x = 182,
                    e.y = 21,
                    e
            },
            i._Image4_i = function () {
                var e = new eui.Image;
                return e.source = "workersday_imgitembg_png",
                    e.x = 0,
                    e.y = 0,
                    e
            },
            i.reward1_i = function () {
                var e = new eui.Image;
                return this.reward1 = e,
                    e.height = 94,
                    e.width = 94,
                    e.x = 18,
                    e.y = 13,
                    e
            },
            i.btnGet_i = function () {
                var e = new eui.Image;
                return this.btnGet = e,
                    e.scaleX = 1,
                    e.scaleY = 1,
                    e.source = "workersday_btn_png",
                    e.x = 636.588,
                    e.y = 410.172,
                    e
            },
            i.btnClose_i = function () {
                var e = new eui.Image;
                return this.btnClose = e,
                    e.scaleX = 1,
                    e.scaleY = 1,
                    e.source = "workersday_x_png",
                    e.x = 960,
                    e.y = 51.868,
                    e
            },
            i.imgHasGot_i = function () {
                var e = new eui.Image;
                return this.imgHasGot = e,
                    e.scaleX = 1,
                    e.scaleY = 1,
                    e.source = "workersday_imghasgot_png",
                    e.visible = !0,
                    e.x = 636.588,
                    e.y = 410.172,
                    e
            },
            i.imgTomorrow_i = function () {
                var e = new eui.Image;
                return this.imgTomorrow = e,
                    e.scaleX = 1,
                    e.scaleY = 1,
                    e.source = "workersday_imgtomorrow_png",
                    e.visible = !0,
                    e.x = 636.588,
                    e.y = 410.172,
                    e
            },
            t
    }(eui.Skin);