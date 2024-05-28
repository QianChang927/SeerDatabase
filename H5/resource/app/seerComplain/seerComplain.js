var __reflect = this && this.__reflect ||
function(e, i, t) {
    e.__class__ = i,
    t ? t.push(i) : t = [i],
    e.__types__ = e.__types__ ? t.concat(e.__types__) : t
},
__extends = this && this.__extends ||
function(e, i) {
    function t() {
        this.constructor = e
    }
    for (var n in i) i.hasOwnProperty(n) && (e[n] = i[n]);
    t.prototype = i.prototype,
    e.prototype = new t
},
seerComplain; !
function(e) {
    var i = function(e) {
        function i(i) {
            var t = e.call(this) || this;
            return t.skinName = "SeerComplainSkin",
            t.userInfo = i,
            t
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            var e = this;
            this.txtUser.text = this.userInfo.nick + "(" + this.userInfo.userID + ")",
            this.setSelect(1);
            for (var i = function(i) {
                ImageButtonUtil.add(t["group" + i],
                function() {
                    e.setSelect(i)
                },
                t, !1, !1)
            },
            t = this, n = 1; 8 >= n; n++) i(n);
            this.input.addEventListener(egret.Event.CHANGE,
            function() {
                e.txtNum.text = e.input.text.length + "/60"
            },
            this),
            ImageButtonUtil.add(this.btnClose, this.onClose, this),
            ImageButtonUtil.add(this.btnCancel, this.onClose, this),
            ImageButtonUtil.add(this.btnOk,
            function() {
                var i = new egret.ByteArray;
                i.writeUTFBytes(e.userInfo.nick),
                i.length = 16;
                var t = new egret.ByteArray;
                t.writeUTFBytes(e.input.text),
                t.length = 180;
                var n = new egret.ByteArray;
                n.writeUTFBytes(e.userInfo.chatContent || ""),
                n.length = 400,
                SocketConnection.sendByQueue(41911, [e.userInfo.userID, e.curSelect, i, t, n],
                function() {
                    e.onClose(),
                    BubblerManager.getInstance().showText("举报成功，你举报的信息经过核实后将会对其做出相应处理！")
                })
            },
            this)
        },
        i.prototype.setSelect = function(e) {
            this.curSelect = e;
            for (var i = 1; 8 >= i; i++) this["imgGou" + i].visible = e == i
        },
        i
    } (BaseModule);
    e.SeerComplain = i,
    __reflect(i.prototype, "seerComplain.SeerComplain")
} (seerComplain || (seerComplain = {}));
var __extends = this && this.__extends ||
function(e, i) {
    function t() {
        this.constructor = e
    }
    for (var n in i) i.hasOwnProperty(n) && (e[n] = i[n]);
    t.prototype = i.prototype,
    e.prototype = new t
};
window.generateEUI = window.generateEUI || {},
generateEUI.paths = generateEUI.paths || {},
generateEUI.styles = void 0,
generateEUI.skins = {},
generateEUI.paths["resource/eui_skins/SeercomplainSkin.exml"] = window.SeerComplainSkin = function(e) {
    function i() {
        e.call(this),
        this.skinParts = ["btnCancel", "btnOk", "input", "txtNum", "txtUser", "imgGou1", "group1", "imgGou2", "group2", "imgGou3", "group3", "imgGou4", "group4", "imgGou5", "group5", "imgGou6", "group6", "imgGou7", "group7", "imgGou8", "group8", "btnClose"],
        this.height = 431,
        this.width = 753,
        this.elementsContent = [this._Image1_i(), this._Image2_i(), this.btnCancel_i(), this.btnOk_i(), this._Image3_i(), this.input_i(), this.txtNum_i(), this._Label1_i(), this._Label2_i(), this.txtUser_i(), this._Group1_i(), this.btnClose_i()]
    }
    __extends(i, e);
    var t = i.prototype;
    return t._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "title_pop_2022_imge_735x431_bg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    t._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "seer_complain_imgtitle_png",
        e.x = 36,
        e.y = 2,
        e
    },
    t.btnCancel_i = function() {
        var e = new eui.Image;
        return this.btnCancel = e,
        e.source = "seer_complain_btncancel_png",
        e.x = 222,
        e.y = 355,
        e
    },
    t.btnOk_i = function() {
        var e = new eui.Image;
        return this.btnOk = e,
        e.source = "seer_complain_btnok_png",
        e.x = 397,
        e.y = 355,
        e
    },
    t._Image3_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = 0,
        e.source = "seer_complain_imgtxtbg_png",
        e.y = 239,
        e
    },
    t.input_i = function() {
        var e = new eui.EditableText;
        return this.input = e,
        e.fontFamily = "MFShangHei",
        e.height = 85,
        e.maxChars = 60,
        e.multiline = !0,
        e.prompt = "请输入详细内容，您的描述有利于我们快速定位目标（非必填）",
        e.promptColor = 4149623,
        e.size = 16,
        e.width = 613,
        e.x = 70,
        e.y = 246,
        e
    },
    t.txtNum_i = function() {
        var e = new eui.Label;
        return this.txtNum = e,
        e.fontFamily = "MFShangHei",
        e.right = 54,
        e.size = 16,
        e.text = "0/60",
        e.textColor = 4149623,
        e.y = 341,
        e
    },
    t._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "REEJI",
        e.size = 20,
        e.text = "举报对象：",
        e.textColor = 12111615,
        e.x = 41,
        e.y = 65,
        e
    },
    t._Label2_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "REEJI",
        e.size = 20,
        e.text = "举报原因：",
        e.textColor = 12111615,
        e.x = 41,
        e.y = 111,
        e
    },
    t.txtUser_i = function() {
        var e = new eui.Label;
        return this.txtUser = e,
        e.fontFamily = "MFShangHei",
        e.size = 20,
        e.textColor = 16729413,
        e.x = 158,
        e.y = 65,
        e
    },
    t._Group1_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = .5,
        e.visible = !0,
        e.y = 158,
        e.layout = this._TileLayout1_i(),
        e.elementsContent = [this.group1_i(), this.group2_i(), this.group3_i(), this.group4_i(), this.group5_i(), this.group6_i(), this.group7_i(), this.group8_i()],
        e
    },
    t._TileLayout1_i = function() {
        var e = new eui.TileLayout;
        return e.horizontalGap = 66,
        e.requestedRowCount = 2,
        e.verticalGap = 20,
        e
    },
    t.group1_i = function() {
        var e = new eui.Group;
        return this.group1 = e,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this._Label3_i(), this._Image4_i(), this.imgGou1_i()],
        e
    },
    t._Label3_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "恶意谩骂",
        e.textColor = 6388143,
        e.x = 31,
        e.y = 2,
        e
    },
    t._Image4_i = function() {
        var e = new eui.Image;
        return e.source = "seer_complain_imggoubg1_png",
        e.x = 0,
        e.y = 0,
        e
    },
    t.imgGou1_i = function() {
        var e = new eui.Image;
        return this.imgGou1 = e,
        e.source = "seer_complain_imggou1_png",
        e.visible = !0,
        e.x = 3,
        e.y = 6,
        e
    },
    t.group2_i = function() {
        var e = new eui.Group;
        return this.group2 = e,
        e.x = 20,
        e.y = 20,
        e.elementsContent = [this._Label4_i(), this._Image5_i(), this.imgGou2_i()],
        e
    },
    t._Label4_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "使用外挂",
        e.textColor = 6388143,
        e.x = 31,
        e.y = 2,
        e
    },
    t._Image5_i = function() {
        var e = new eui.Image;
        return e.source = "seer_complain_imggoubg1_png",
        e.x = 0,
        e.y = 0,
        e
    },
    t.imgGou2_i = function() {
        var e = new eui.Image;
        return this.imgGou2 = e,
        e.source = "seer_complain_imggou1_png",
        e.visible = !0,
        e.x = 3,
        e.y = 6,
        e
    },
    t.group3_i = function() {
        var e = new eui.Group;
        return this.group3 = e,
        e.x = 30,
        e.y = 30,
        e.elementsContent = [this._Label5_i(), this._Image6_i(), this.imgGou3_i()],
        e
    },
    t._Label5_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "昵称违规",
        e.textColor = 6388143,
        e.x = 31,
        e.y = 2,
        e
    },
    t._Image6_i = function() {
        var e = new eui.Image;
        return e.source = "seer_complain_imggoubg1_png",
        e.x = 0,
        e.y = 0,
        e
    },
    t.imgGou3_i = function() {
        var e = new eui.Image;
        return this.imgGou3 = e,
        e.source = "seer_complain_imggou1_png",
        e.visible = !0,
        e.x = 3,
        e.y = 6,
        e
    },
    t.group4_i = function() {
        var e = new eui.Group;
        return this.group4 = e,
        e.x = 40,
        e.y = 40,
        e.elementsContent = [this._Label6_i(), this._Image7_i(), this.imgGou4_i()],
        e
    },
    t._Label6_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "广告消息",
        e.textColor = 6388143,
        e.x = 31,
        e.y = 2,
        e
    },
    t._Image7_i = function() {
        var e = new eui.Image;
        return e.source = "seer_complain_imggoubg1_png",
        e.x = 0,
        e.y = 0,
        e
    },
    t.imgGou4_i = function() {
        var e = new eui.Image;
        return this.imgGou4 = e,
        e.source = "seer_complain_imggou1_png",
        e.visible = !0,
        e.x = 3,
        e.y = 6,
        e
    },
    t.group5_i = function() {
        var e = new eui.Group;
        return this.group5 = e,
        e.x = 50,
        e.y = 50,
        e.elementsContent = [this._Label7_i(), this._Image8_i(), this.imgGou5_i()],
        e
    },
    t._Label7_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "违法消息",
        e.textColor = 6388143,
        e.x = 31,
        e.y = 2,
        e
    },
    t._Image8_i = function() {
        var e = new eui.Image;
        return e.source = "seer_complain_imggoubg1_png",
        e.x = 0,
        e.y = 0,
        e
    },
    t.imgGou5_i = function() {
        var e = new eui.Image;
        return this.imgGou5 = e,
        e.source = "seer_complain_imggou1_png",
        e.visible = !0,
        e.x = 3,
        e.y = 6,
        e
    },
    t.group6_i = function() {
        var e = new eui.Group;
        return this.group6 = e,
        e.x = 60,
        e.y = 60,
        e.elementsContent = [this._Label8_i(), this._Image9_i(), this.imgGou6_i()],
        e
    },
    t._Label8_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "账号买卖",
        e.textColor = 6388143,
        e.x = 31,
        e.y = 2,
        e
    },
    t._Image9_i = function() {
        var e = new eui.Image;
        return e.source = "seer_complain_imggoubg1_png",
        e.x = 0,
        e.y = 0,
        e
    },
    t.imgGou6_i = function() {
        var e = new eui.Image;
        return this.imgGou6 = e,
        e.source = "seer_complain_imggou1_png",
        e.visible = !0,
        e.x = 3,
        e.y = 6,
        e
    },
    t.group7_i = function() {
        var e = new eui.Group;
        return this.group7 = e,
        e.x = 70,
        e.y = 70,
        e.elementsContent = [this._Label9_i(), this._Image10_i(), this.imgGou7_i()],
        e
    },
    t._Label9_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "非法诈骗",
        e.textColor = 6388143,
        e.x = 31,
        e.y = 2,
        e
    },
    t._Image10_i = function() {
        var e = new eui.Image;
        return e.source = "seer_complain_imggoubg1_png",
        e.x = 0,
        e.y = 0,
        e
    },
    t.imgGou7_i = function() {
        var e = new eui.Image;
        return this.imgGou7 = e,
        e.source = "seer_complain_imggou1_png",
        e.visible = !0,
        e.x = 3,
        e.y = 6,
        e
    },
    t.group8_i = function() {
        var e = new eui.Group;
        return this.group8 = e,
        e.x = 80,
        e.y = 80,
        e.elementsContent = [this._Label10_i(), this._Image11_i(), this.imgGou8_i()],
        e
    },
    t._Label10_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "其他",
        e.textColor = 6388143,
        e.x = 31,
        e.y = 2,
        e
    },
    t._Image11_i = function() {
        var e = new eui.Image;
        return e.source = "seer_complain_imggoubg1_png",
        e.x = 0,
        e.y = 0,
        e
    },
    t.imgGou8_i = function() {
        var e = new eui.Image;
        return this.imgGou8 = e,
        e.source = "seer_complain_imggou1_png",
        e.visible = !0,
        e.x = 3,
        e.y = 6,
        e
    },
    t.btnClose_i = function() {
        var e = new eui.Image;
        return this.btnClose = e,
        e.source = "title_pop_2022_btnclose_png",
        e.x = 712,
        e.y = 1,
        e
    },
    i
} (eui.Skin);