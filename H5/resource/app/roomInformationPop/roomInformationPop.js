var __reflect = this && this.__reflect ||
function(e, t, o) {
    e.__class__ = t,
    o ? o.push(t) : o = [t],
    e.__types__ = e.__types__ ? o.concat(e.__types__) : o
},
__extends = this && this.__extends ||
function(e, t) {
    function o() {
        this.constructor = e
    }
    for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
    o.prototype = t.prototype,
    e.prototype = new o
},
roomInformationPop; !
function(e) {
    var t = function(e) {
        function t(t) {
            var o = e.call(this, t) || this;
            return o.userInfo = null,
            o.skinName = RoomInformationPopSkin,
            o
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            var t = this;
            e.prototype.childrenCreated.call(this),
            this.id = this.data.id,
            this.avatar.setScale(.92),
            ImageButtonUtil.add(this.close, this.onClose, this),
            ImageButtonUtil.add(this.open_visitor,
            function() {
                t.userInfo && t.userInfo.userID == MainManager.actorID && (t.dot.visible = !1, t.localSt(~~t.people_num.text)),
                ModuleManager.showModuleByID(156)
            },
            this),
            ImageButtonUtil.add(this.open_visitor1,
            function() {
                t.userInfo && t.userInfo.userID == MainManager.actorID && (t.dot.visible = !1, t.localSt(~~t.people_num.text)),
                ModuleManager.showModuleByID(156)
            },
            this),
            this.dot.visible = !1,
            this.updateView()
        },
        t.prototype.localSt = function(e) {
            var t = SystemTimerManager.sysDate,
            o = "roomInformationPop_" + t.getFullYear() + "_" + t.getMonth() + "_" + MainManager.actorID;
            egret.localStorage.getItem(o) ? ~~egret.localStorage.getItem(o) != e ? (this.dot.visible = !0, egret.localStorage.setItem(o, "" + e)) : this.dot.visible = !1 : (egret.localStorage.setItem(o, "" + e), this.dot.visible = 0 != e)
        },
        t.prototype.updateView = function() {
            var e = this;
            UserInfoManager.getInfo(this.id,
            function(t) {
                e.userInfo = t,
                e.avatar.setData({
                    headId: t.head_id,
                    headFrameId: t.head_frame_id
                }),
                e.tx_name.text = t.nick,
                0 != t.teamInfo.id ? TeamInfoManager.getSimpleTeamInfo(t.teamInfo.id,
                function(t) {
                    e.team_name.text = t.name
                }) : e.team_name.text = "暂未加入";
                var o = MainManager.actorInfo.clothIDs,
                i = SuitXMLInfo.getSuitIDs(o);
                if (i.length > 0) {
                    var n = i[0];
                    e.suit.text = SuitXMLInfo.getName(n) || "无"
                } else e.suit.text = "无";
                KTool.getMultiMemberRankAndScore([e.userInfo.userID], 165, 1, !0,
                function(t) {
                    e.cur_liked.text = t[0].score
                }),
                e.userInfo.userID == MainManager.actorID ? SocketConnection.sendByQueue(CommandID.CUR_MONTH_VISITOR_NUM, [],
                function(t) {
                    var o = t.data,
                    i = o.readUnsignedInt();
                    e.people_num.text = "" + i,
                    e.localSt(i)
                }) : e.people_num.text = "****",
                e.currentState = e.userInfo.userID == MainManager.actorID ? "mine": "other",
                e.showAvatar()
            },
            this)
        },
        t.prototype.onClickHead = function(e) {
            if (this.userInfo) {
                var t = this.userInfo;
                ModuleManager.showModule("personalInformation", ["peakJihadFirstPage", "playerInfo"], t.userID, "PersonalInformationOther", AppDoStyle.NULL)
            }
        },
        t.prototype.showAvatar = function() {
            this._playerView = new ClothPreview,
            this.grp_playerStyle.addChild(this._playerView),
            this._playerView.setPosition(0, 0),
            this._playerView.show(this.userInfo.clothes)
        },
        t.prototype.destroy = function() {
            e.prototype.destroy.call(this)
        },
        t
    } (BaseModule);
    e.RoomInformationPop = t,
    __reflect(t.prototype, "roomInformationPop.RoomInformationPop")
} (roomInformationPop || (roomInformationPop = {}));
var __extends = this && this.__extends ||
function(e, t) {
    function o() {
        this.constructor = e
    }
    for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
    o.prototype = t.prototype,
    e.prototype = new o
};
window.generateEUI = window.generateEUI || {},
generateEUI.paths = generateEUI.paths || {},
generateEUI.styles = void 0,
generateEUI.skins = {},
generateEUI.paths["resource/eui_skins/RoomInformationPopSkin.exml"] = window.RoomInformationPopSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["grp_playerStyle", "dot", "cur_liked", "people_num", "tx_name", "team_name", "suit", "open_visitor1", "open_visitor", "show_other", "close", "avatar"],
        this.height = 431,
        this.width = 754,
        this.elementsContent = [this._Image1_i(), this.grp_playerStyle_i(), this.dot_i(), this.cur_liked_i(), this.people_num_i(), this.tx_name_i(), this.team_name_i(), this.suit_i(), this.open_visitor1_i(), this.open_visitor_i(), this.show_other_i(), this.close_i(), this._Group1_i()],
        this.states = [new eui.State("mine", [new eui.SetProperty("show_other", "visible", !1)]), new eui.State("other", [new eui.SetProperty("open_visitor1", "visible", !1), new eui.SetProperty("open_visitor", "visible", !1), new eui.SetProperty("show_other", "visible", !1)])]
    }
    __extends(t, e);
    var o = t.prototype;
    return o._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "room_information_pop_bg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    o.grp_playerStyle_i = function() {
        var e = new eui.Group;
        return this.grp_playerStyle = e,
        e.height = 0,
        e.width = 0,
        e.x = 193.54,
        e.y = 340,
        e
    },
    o.dot_i = function() {
        var e = new eui.Image;
        return this.dot = e,
        e.source = "room_information_pop_dot_png",
        e.x = 652,
        e.y = 252.33,
        e
    },
    o.cur_liked_i = function() {
        var e = new eui.Label;
        return this.cur_liked = e,
        e.fontFamily = "MFShangHei",
        e.size = 22,
        e.text = "0",
        e.textAlign = "center",
        e.textColor = 4187130,
        e.width = 150,
        e.x = 392.733,
        e.y = 312.33,
        e
    },
    o.people_num_i = function() {
        var e = new eui.Label;
        return this.people_num = e,
        e.fontFamily = "MFShangHei",
        e.size = 22,
        e.text = "0",
        e.textAlign = "center",
        e.textColor = 4187130,
        e.width = 150,
        e.x = 554.733,
        e.y = 312.33,
        e
    },
    o.tx_name_i = function() {
        var e = new eui.Label;
        return this.tx_name = e,
        e.fontFamily = "MFShangHei",
        e.size = 20,
        e.textColor = 8757203,
        e.x = 545,
        e.y = 142.019,
        e
    },
    o.team_name_i = function() {
        var e = new eui.Label;
        return this.team_name = e,
        e.fontFamily = "MFShangHei",
        e.size = 20,
        e.textColor = 8757203,
        e.x = 545,
        e.y = 193.606,
        e
    },
    o.suit_i = function() {
        var e = new eui.Label;
        return this.suit = e,
        e.fontFamily = "MFShangHei",
        e.size = 20,
        e.textAlign = "center",
        e.textColor = 16514895,
        e.width = 200,
        e.x = 89,
        e.y = 366,
        e
    },
    o.open_visitor1_i = function() {
        var e = new eui.Rect;
        return this.open_visitor1 = e,
        e.fillAlpha = 0,
        e.height = 104.852,
        e.width = 150.403,
        e.x = 554.103,
        e.y = 251.771,
        e
    },
    o.open_visitor_i = function() {
        var e = new eui.Image;
        return this.open_visitor = e,
        e.source = "room_information_pop_open_visitor_png",
        e.x = 675,
        e.y = 253.442,
        e
    },
    o.show_other_i = function() {
        var e = new eui.Image;
        return this.show_other = e,
        e.source = "room_information_pop_show_other_png",
        e.x = 629,
        e.y = 85.454,
        e
    },
    o.close_i = function() {
        var e = new eui.Image;
        return this.close = e,
        e.source = "room_information_pop_close_png",
        e.x = 712,
        e.y = 0,
        e
    },
    o._Group1_i = function() {
        var e = new eui.Group;
        return e.height = 100,
        e.width = 100,
        e.x = 390.115,
        e.y = 127.977,
        e.elementsContent = [this.avatar_i()],
        e
    },
    o.avatar_i = function() {
        var e = new core.component.AvatarIcon;
        return this.avatar = e,
        e.horizontalCenter = 0,
        e.verticalCenter = 0,
        e
    },
    t
} (eui.Skin);