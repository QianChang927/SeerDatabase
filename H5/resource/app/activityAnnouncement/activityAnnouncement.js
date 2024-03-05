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
ActivityAnnouncement = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e.server_url = "",
        e.skinName = ActivityAnnouncementSkin,
        e
    }
    return __extends(e, t),
    e.prototype.childrenCreated = function() {
        var t = this;
        this.scroller.viewport = this._list,
        this._list.itemRenderer = ActivityAnnouncementItemRender,
        AnnouncementManager.getServerItems().then(function(e) {
            AnnouncementManager.getLocalItems().then(function(n) {
                n.sort(function(t, e) {
                    return e.sorting - t.sorting
                });
                var i = e.concat(n);
                t.arrayCollection = new eui.ArrayCollection(i),
                t._list.dataProvider = t.arrayCollection,
                t._list.selectedItem = i[0],
                t._list.selectedIndex = 0,
                t.onClickItem(null)
            })
        }),
        this._list.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.onClickItem, this),
        ImageButtonUtil.add(this.btnClose,
        function() {
            t.hide(),
            StatLogger.log("1023版本系统功能", "登录界面", "点击活动公告弹窗【关闭】按钮")
        },
        this),
        IS_RELEASE || window.addEventListener("message", this.onWebMessage.bind(this))
    },
    e.prototype.onWebMessage = function(t) {
        if (!IS_RELEASE) try {
            var e = JSON.parse(t.data);
            "tips_content_change" == e.action && (this.txtMsg.textFlow = (new egret.HtmlTextParser).parse(StringUtil.TransformLineBreak(e.msg)), this.txtMsg.parent.scrollV = 0)
        } catch(t) {}
    },
    e.prototype.onClickItem = function(t) {
        var e = this._list.selectedItem;
        AnnouncementManager.setItemReaded(e),
        this.txt_titile.text = e.title;
        var n = e.text.replace(/\\n/g, "\n");
        this.txtMsg.textFlow = (new egret.HtmlTextParser).parser(n),
        this.txtMsg.parent.scrollV = 0,
        e && t && (t.itemRenderer.reddot.visible = !e.readed),
        IS_RELEASE || window.top.postMessage(n, "*")
    },
    e.prototype.destroy = function() {
        this._list.removeEventListener(eui.ItemTapEvent.ITEM_TAP, this.onClickItem, this),
        ImageButtonUtil.removeAll(this),
        t.prototype.destroy.call(this),
        IS_RELEASE || window.removeEventListener("message", this.onWebMessage)
    },
    e
} (PopView);
__reflect(ActivityAnnouncement.prototype, "ActivityAnnouncement");
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
ActivityAnnouncementItemRender = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e.skinName = ActivityAnnouncementItemSkin,
        e
    }
    return __extends(e, t),
    e.prototype.dataChanged = function() {
        var t = this.data;
        t && (this.txtTitle.text = t.title, this.validateNow(), t.type == ActivityAnnouncementItemData.ANNOUNCE_TYPE_ACTIVITY ? this.icon.source = "": this.icon.source = "activity_announcement_notice_icon_png", this.reddot.visible = !t.readed, this.reddot.x = this.txtTitle.measuredWidth - 2)
    },
    e
} (BaseItemRenderer);
__reflect(ActivityAnnouncementItemRender.prototype, "ActivityAnnouncementItemRender");
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
generateEUI.paths["resource/eui_skins/ActivityAnnouncementItemSkin.exml"] = window.ActivityAnnouncementItemSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["item_bg", "icon", "txtTitle", "reddot", "notice_item"],
        this.height = 60,
        this.width = 220,
        this.elementsContent = [this.notice_item_i()],
        this.states = [new eui.State("up", [new eui.SetProperty("item_bg", "alpha", 0), new eui.SetProperty("txtTitle", "textColor", 8036826), new eui.SetProperty("notice_item", "width", 272), new eui.SetProperty("", "width", 272), new eui.SetProperty("", "height", 66)]), new eui.State("down", [new eui.SetProperty("", "width", 274)])]
    }
    __extends(e, t);
    var n = e.prototype;
    return n.notice_item_i = function() {
        var t = new eui.Group;
        return this.notice_item = t,
        t.width = 272,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this.item_bg_i(), this.icon_i(), this._Group1_i()],
        t
    },
    n.item_bg_i = function() {
        var t = new eui.Image;
        return this.item_bg = t,
        t.right = -2,
        t.source = "activity_announcement_notice_item_down_png",
        t.y = 0,
        t
    },
    n.icon_i = function() {
        var t = new eui.Image;
        return this.icon = t,
        t.source = "activity_announcement_notice_icon_png",
        t.x = 0,
        t.y = 3,
        t
    },
    n._Group1_i = function() {
        var t = new eui.Group;
        return t.horizontalCenter = 11.5,
        t.y = 10,
        t.elementsContent = [this.txtTitle_i(), this.reddot_i()],
        t
    },
    n.txtTitle_i = function() {
        var t = new eui.Label;
        return this.txtTitle = t,
        t.fontFamily = "MFShangHei",
        t.size = 20,
        t.text = "防沉迷系统调整说明",
        t.textColor = 15857151,
        t.x = 0,
        t.y = 11,
        t
    },
    n.reddot_i = function() {
        var t = new eui.Image;
        return this.reddot = t,
        t.source = "activity_announcement_notice_red_png",
        t.visible = !0,
        t.x = 178,
        t.y = 0,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/ActivityAnnouncementSkin.exml"] = window.ActivityAnnouncementSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["notice_bg", "btnClose", "txtMsg", "_scroller", "txt_titile", "content", "_list", "scroller"],
        this.height = 551,
        this.width = 1e3,
        this.elementsContent = [this.notice_bg_i(), this.btnClose_i(), this.content_i(), this.scroller_i()]
    }
    __extends(e, t);
    var n = e.prototype;
    return n.notice_bg_i = function() {
        var t = new eui.Image;
        return this.notice_bg = t,
        t.source = "activity_announcement_notice_bg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    n.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.source = "activity_announcement_btnclose_png",
        t.x = 957,
        t.y = 4,
        t
    },
    n.content_i = function() {
        var t = new eui.Group;
        return this.content = t,
        t.x = 1,
        t.y = 49,
        t.elementsContent = [this._scroller_i(), this.txt_titile_i()],
        t
    },
    n._scroller_i = function() {
        var t = new eui.Scroller;
        return this._scroller = t,
        t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.height = 430,
        t.scrollPolicyH = "off",
        t.width = 660,
        t.x = 304,
        t.y = 48,
        t.viewport = this._Group1_i(),
        t
    },
    n._Group1_i = function() {
        var t = new eui.Group;
        return t.elementsContent = [this.txtMsg_i()],
        t
    },
    n.txtMsg_i = function() {
        var t = new eui.Label;
        return this.txtMsg = t,
        t.lineSpacing = 6,
        t.scaleX = 1,
        t.scaleY = 1,
        t.size = 16,
        t.text = "亲爱的玩家：\n\n1.本游戏是一款回合制精灵养成类游戏，适用于年满12周岁及以上的用户，建议未成年人在家长监护下使用游戏产品。\n\n2.本游戏基于架空的故事背景和幻想世界观，没有基于真实历史和现实事件的改编内容。玩家将作为高科技机器人“赛尔”，为人类寻找新能源和宜居地，同时与各种外星精灵一起冒险。游戏中存在与回合对战相关的对抗内容，玩家可以合理指挥精灵、使用道具与对手竞争，从而获取胜利。游戏中有基于文字的陌生人社交系统，社交系统的管理遵循相关法律法规。\n\n3.本游戏中有用户实名认证系统，认证为未成年人的用户将接受以下管理：\n游戏中部分玩法和道具需要付费。未满8周岁的用户不能付费；8周岁以上未满16周岁的未成年人用户，单次充值金额不得超过50元人民币，每月充值金额累计不得超过200元人民币；16周岁以上的未成年人用户，单次充值金额不得超过100元人民币，每月充值金额累计不得超过400元人民币。 未成年人用户每日22点到次日8点不得使用，法定节假日每天不得使用超过3小时，其他时间每天不得使用超过1.5小时。\n\n4.本游戏以太空冒险为主题。基于架空世界展开剧情，采用风格鲜明的美术风格设计，剧情丰满，玩法多样，能够带给玩家轻松愉悦的游戏氛围。",
        t.textColor = 6323642,
        t.width = 653,
        t.x = 0,
        t.y = 0,
        t
    },
    n.txt_titile_i = function() {
        var t = new eui.Label;
        return this.txt_titile = t,
        t.fontFamily = "MFShangHei",
        t.size = 20,
        t.text = "防沉迷系统调整说明",
        t.textAlign = "center",
        t.textColor = 12111615,
        t.width = 500,
        t.x = 374,
        t.y = 3,
        t
    },
    n.scroller_i = function() {
        var t = new eui.Scroller;
        return this.scroller = t,
        t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.height = 480,
        t.scrollPolicyH = "off",
        t.visible = !0,
        t.width = 274,
        t.x = -1,
        t.y = 51,
        t.viewport = this._Group2_i(),
        t
    },
    n._Group2_i = function() {
        var t = new eui.Group;
        return t.elementsContent = [this._list_i()],
        t
    },
    n._list_i = function() {
        var t = new eui.List;
        return this._list = t,
        t.anchorOffsetX = 0,
        t.height = 480,
        t.width = 274,
        t.x = 0,
        t.y = 0,
        t
    },
    e
} (eui.Skin);