var __reflect = this && this.__reflect ||
    function (t, i, e) {
        t.__class__ = i,
            e ? e.push(i) : e = [i],
            t.__types__ = t.__types__ ? e.concat(t.__types__) : e
    },
    __extends = this && this.__extends ||
        function (t, i) {
            function e() {
                this.constructor = t
            }
            for (var n in i) i.hasOwnProperty(n) && (t[n] = i[n]);
            e.prototype = i.prototype,
                t.prototype = new e
        },
    qingMingSign2024; !
        function (t) {
            var i = function (i) {
                function e() {
                    var t = i.call(this) || this;
                    return t.skinName = QingMingSign2024Skin,
                        t
                }
                return __extends(e, i),
                    e.prototype.childrenCreated = function () {
                        i.prototype.childrenCreated.call(this),
                            this.addEvent(),
                            this.list.itemRenderer = t.QingMingSignItem,
                            this.listData = new eui.ArrayCollection,
                            this.list.dataProvider = this.listData,
                            this.updateView()
                    },
                    e.prototype.addEvent = function () {
                        var t = this;
                        ImageButtonUtil.add(this.btnClose,
                            function () {
                                t.onClose()
                            },
                            this)
                    },
                    e.prototype.updateView = function () {
                        var t = this;
                        KTool.getMultiValue([121302, 201409],
                            function (i) {
                                for (var e = [], n = 0; 3 > n; ++n) n == i[0] ? 0 == i[1] ? e.push({
                                    day: n,
                                    state: 1
                                }) : e.push({
                                    day: n,
                                    state: 0
                                }) : n < i[0] ? e.push({
                                    day: n,
                                    state: 2
                                }) : e.push({
                                    day: n,
                                    state: 0
                                });
                                t.listData.replaceAll(e),
                                    t.listData.refresh()
                            })
                    },
                    e
            }(BaseModule);
            t.QingMingSign2024 = i,
                __reflect(i.prototype, "qingMingSign2024.QingMingSign2024")
        }(qingMingSign2024 || (qingMingSign2024 = {}));
var __reflect = this && this.__reflect ||
    function (t, i, e) {
        t.__class__ = i,
            e ? e.push(i) : e = [i],
            t.__types__ = t.__types__ ? e.concat(t.__types__) : e
    },
    __extends = this && this.__extends ||
        function (t, i) {
            function e() {
                this.constructor = t
            }
            for (var n in i) i.hasOwnProperty(n) && (t[n] = i[n]);
            e.prototype = i.prototype,
                t.prototype = new e
        },
    qingMingSign2024; !
        function (t) {
            var i = function (t) {
                function i() {
                    var i = t.call(this) || this;
                    return i.skinName = QingMingSignItemSkin,
                        i
                }
                return __extends(i, t),
                    i.prototype.childrenCreated = function () {
                        t.prototype.childrenCreated.call(this)
                    },
                    i.prototype.dataChanged = function () {
                        var i = this;
                        t.prototype.dataChanged.call(this),
                            this.setCurrentState(this.data.state),
                            this.imgDay.source = "qingmingsign_imgday" + (this.data.day + 1) + "_png",
                            0 == this.itemIndex ? (this.imgItem.source = "qingmingsign_reward1_png", this.imgItem.width = 110, this.imgItem.height = 141, this.imgItem.x = 27, this.imgItem.y = 60) : (this.imgItem.source = "qingmingsign_reward2_png", this.imgItem.width = 129, this.imgItem.height = 131, this.imgItem.x = 16, this.imgItem.y = 70),
                            1 == this.data.state && (ImageButtonUtil.remove(this.grpBtnItem), ImageButtonUtil.add(this.grpBtnItem,
                                function () {
                                    SocketConnection.sendByQueue(41388, [39, i.data.day + 1],
                                        function () {
                                            i.currentState = "hasGot",
                                                StatLogger.log("运营活动2024", "20240403春日踏青", "领取第" + (i.data.day + 1) + "天签到奖励"),
                                                ImageButtonUtil.remove(i.grpBtnItem)
                                        })
                                },
                                this))
                    },
                    i.prototype.setCurrentState = function (t) {
                        switch (t) {
                            case 0:
                                this.currentState = "normal";
                                break;
                            case 1:
                                this.currentState = "canGet";
                                break;
                            case 2:
                                this.currentState = "hasGot"
                        }
                    },
                    i
            }(BaseItemRenderer);
            t.QingMingSignItem = i,
                __reflect(i.prototype, "qingMingSign2024.QingMingSignItem")
        }(qingMingSign2024 || (qingMingSign2024 = {}));
var __extends = this && this.__extends ||
    function (t, i) {
        function e() {
            this.constructor = t
        }
        for (var n in i) i.hasOwnProperty(n) && (t[n] = i[n]);
        e.prototype = i.prototype,
            t.prototype = new e
    };
window.generateEUI = window.generateEUI || {},
    generateEUI.paths = generateEUI.paths || {},
    generateEUI.styles = void 0,
    generateEUI.skins = {},
    generateEUI.paths["resource/eui_skins/item/qingMingSignItemSkin.exml"] = window.QingMingSignItemSkin = function (t) {
        function i() {
            t.call(this),
                this.skinParts = ["hasGotBg", "imgDay", "imgItem", "hasGot", "grpBtnItem"],
                this.height = 205,
                this.width = 168,
                this.elementsContent = [this.grpBtnItem_i()],
                this.states = [new eui.State("normal", [new eui.SetProperty("hasGot", "visible", !1)]), new eui.State("canGet", [new eui.SetProperty("hasGotBg", "source", "qingmingsign_cangetbg_png"), new eui.SetProperty("hasGotBg", "x", -4), new eui.SetProperty("hasGot", "visible", !1)]), new eui.State("hasGot", [])]
        }
        __extends(i, t);
        var e = i.prototype;
        return e.grpBtnItem_i = function () {
            var t = new eui.Group;
            return this.grpBtnItem = t,
                t.elementsContent = [this.hasGotBg_i(), this.imgDay_i(), this.imgItem_i(), this.hasGot_i()],
                t
        },
            e.hasGotBg_i = function () {
                var t = new eui.Image;
                return this.hasGotBg = t,
                    t.scaleX = 1,
                    t.scaleY = 1,
                    t.source = "qingmingsign_hasgotbg_png",
                    t.x = 0,
                    t.y = 0,
                    t
            },
            e.imgDay_i = function () {
                var t = new eui.Image;
                return this.imgDay = t,
                    t.scaleX = 1,
                    t.scaleY = 1,
                    t.source = "qingmingsign_imgday1_png",
                    t.x = 16,
                    t.y = 26.999999999999986,
                    t
            },
            e.imgItem_i = function () {
                var t = new eui.Image;
                return this.imgItem = t,
                    t.scaleX = 1,
                    t.scaleY = 1,
                    t.source = "qingmingsign_reward1_png",
                    t.x = 27,
                    t.y = 60,
                    t
            },
            e.hasGot_i = function () {
                var t = new eui.Image;
                return this.hasGot = t,
                    t.scaleX = 1,
                    t.scaleY = 1,
                    t.source = "qingmingsign_hasgot_png",
                    t.x = 33.00000000000003,
                    t.y = 58.000000000000014,
                    t
            },
            i
    }(eui.Skin),
    generateEUI.paths["resource/eui_skins/qingMingSign2024.exml"] = window.QingMingSign2024Skin = function (t) {
        function i() {
            t.call(this),
                this.skinParts = ["title", "list", "btnClose"],
                this.height = 599,
                this.width = 983.838,
                this.elementsContent = [this.title_i(), this._Scroller1_i(), this.btnClose_i()]
        }
        __extends(i, t);
        var e = i.prototype;
        return e.title_i = function () {
            var t = new eui.Image;
            return this.title = t,
                t.source = "qingmingsign_title_png",
                t.x = 0,
                t.y = 0,
                t
        },
            e._Scroller1_i = function () {
                var t = new eui.Scroller;
                return t.height = 215,
                    t.width = 520,
                    t.x = 377,
                    t.y = 316,
                    t.viewport = this.list_i(),
                    t
            },
            e.list_i = function () {
                var t = new eui.List;
                return this.list = t,
                    t.layout = this._HorizontalLayout1_i(),
                    t
            },
            e._HorizontalLayout1_i = function () {
                var t = new eui.HorizontalLayout;
                return t.gap = 4,
                    t
            },
            e.btnClose_i = function () {
                var t = new eui.Image;
                return this.btnClose = t,
                    t.source = "qingmingsign_btnclose_png",
                    t.x = 814,
                    t.y = 122,
                    t
            },
            i
    }(eui.Skin);