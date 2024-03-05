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
    for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
    i.prototype = e.prototype,
    t.prototype = new i
},
roomVisitorInfoPop; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.skinName = RoomVisitorInfoPopSkin,
            e
        }
        return __extends(e, t),
        e.prototype.createChildren = function() {
            t.prototype.createChildren.call(this),
            this._list.itemRenderer = i,
            ImageButtonUtil.add(this.close, this.onClose, this),
            this.updateView()
        },
        e.prototype.updateView = function() {
            var t = this;
            SocketConnection.sendByQueue(CommandID.CUR_MONTH_VISITOR, [],
            function(e) {
                for (var i = e.data,
                o = i.readUnsignedInt(), n = [], r = 0; o > r; r++) {
                    var s = new roomModel.RoomVisitor;
                    s.date = i.readUnsignedInt(),
                    s.id = i.readUnsignedInt(),
                    s.nick = i.readUTFBytes(16),
                    s.operate = i.readUnsignedInt(),
                    n.push(s)
                }
                t._list.dataProvider = new eui.ArrayCollection(n)
            })
        },
        e
    } (BaseModule);
    t.RoomVisitorInfoPop = e,
    __reflect(e.prototype, "roomVisitorInfoPop.RoomVisitorInfoPop");
    var i = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.info = null,
            e.userInfo = null,
            e.skinName = RoomVisitorInfoPopItemSkin,
            e
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            var e = this;
            t.prototype.childrenCreated.call(this),
            this.avatar.setScale(.62),
            this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this),
            ImageButtonUtil.add(this.visit,
            function() {
                ModuleManager.CloseAll(),
                RoomManager.changeRoom(e.info.id)
            },
            this)
        },
        e.prototype.dataChanged = function() {
            t.prototype.dataChanged.call(this),
            (this.data || 0 == this.data) && (this.info = this.data, this.updateView())
        },
        e.prototype.updateView = function() {
            var t = this,
            e = 1 == this.info.operate;
            this.currentState = e ? "like": "no",
            this.tx_name.text = this.info.nick,
            UserInfoManager.getInfo(this.info.id,
            function(e) {
                t.userInfo = e,
                t.avatar.setData({
                    headId: e.head_id,
                    headFrameId: e.head_frame_id
                }),
                t.tx_name.text = e.nick,
                t.cacheAsBitmap = !0
            },
            this)
        },
        e.prototype.onClickHead = function(t) {
            if (this.userInfo) {
                var e = this.userInfo;
                ModuleManager.showModule("personalInformation", ["peakJihadFirstPage", "playerInfo"], e.userID, "PersonalInformationOther", AppDoStyle.NULL)
            }
        },
        e.prototype.destroy = function() {
            this.info = null,
            ImageButtonUtil.removeAll(this),
            this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this)
        },
        e
    } (eui.ItemRenderer);
    t.RoomVisitorInfoPopItem = i,
    __reflect(i.prototype, "roomVisitorInfoPop.RoomVisitorInfoPopItem")
} (roomVisitorInfoPop || (roomVisitorInfoPop = {}));
var __extends = this && this.__extends ||
function(t, e) {
    function i() {
        this.constructor = t
    }
    for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
    i.prototype = e.prototype,
    t.prototype = new i
};
window.generateEUI = window.generateEUI || {},
generateEUI.paths = generateEUI.paths || {},
generateEUI.styles = void 0,
generateEUI.skins = {},
generateEUI.paths["resource/eui_skins/RoomVisitorInfoPopItemSkin.exml"] = window.RoomVisitorInfoPopItemSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["avatar", "desc", "liked", "tx_name", "visit"],
        this.height = 76,
        this.width = 706,
        this.elementsContent = [this._Group2_i()],
        this.states = [new eui.State("no", [new eui.SetProperty("desc", "text", "访问了你的基地"), new eui.SetProperty("desc", "x", 391.75), new eui.SetProperty("liked", "visible", !1)]), new eui.State("like", [])]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Group2_i = function() {
        var t = new eui.Group;
        return t.horizontalCenter = 0,
        t.verticalCenter = 0,
        t.elementsContent = [this._Image1_i(), this._Group1_i(), this.desc_i(), this.liked_i(), this.tx_name_i(), this.visit_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "room_visitor_info_pop_item_bg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.height = 69,
        t.verticalCenter = 0,
        t.width = 69,
        t.x = 9,
        t.elementsContent = [this.avatar_i()],
        t
    },
    i.avatar_i = function() {
        var t = new core.component.AvatarIcon;
        return this.avatar = t,
        t.horizontalCenter = 0,
        t.verticalCenter = 0,
        t
    },
    i.desc_i = function() {
        var t = new eui.Label;
        return this.desc = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "访问了你的基地，并点赞",
        t.textColor = 4187130,
        t.x = 348,
        t.y = 30,
        t
    },
    i.liked_i = function() {
        var t = new eui.Image;
        return this.liked = t,
        t.source = "room_visitor_info_pop_liked_png",
        t.x = 329,
        t.y = 32,
        t
    },
    i.tx_name_i = function() {
        var t = new eui.Label;
        return this.tx_name = t,
        t.fontFamily = "MFShangHei",
        t.size = 20,
        t.text = "玩家名字玩家六",
        t.textColor = 12834813,
        t.x = 93,
        t.y = 28,
        t
    },
    i.visit_i = function() {
        var t = new eui.Image;
        return this.visit = t,
        t.source = "room_visitor_info_pop_visit_png",
        t.x = 591,
        t.y = 21,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/RoomVisitorInfoPopSkin.exml"] = window.RoomVisitorInfoPopSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["_list", "close"],
        this.height = 431,
        this.width = 754,
        this.elementsContent = [this._Image1_i(), this._Scroller1_i(), this.close_i(), this._Label1_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "room_visitor_info_pop_bg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i._Scroller1_i = function() {
        var t = new eui.Scroller;
        return t.height = 334.377,
        t.width = 706,
        t.x = 24,
        t.y = 57,
        t.viewport = this._list_i(),
        t
    },
    i._list_i = function() {
        var t = new eui.List;
        return this._list = t,
        t.layout = this._VerticalLayout1_i(),
        t
    },
    i._VerticalLayout1_i = function() {
        var t = new eui.VerticalLayout;
        return t
    },
    i.close_i = function() {
        var t = new eui.Image;
        return this.close = t,
        t.source = "room_visitor_info_pop_close_png",
        t.x = 712,
        t.y = 0,
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "仅展示本月内来访的访客信息",
        t.textColor = 12111615,
        t.x = 273,
        t.y = 398,
        t
    },
    e
} (eui.Skin);