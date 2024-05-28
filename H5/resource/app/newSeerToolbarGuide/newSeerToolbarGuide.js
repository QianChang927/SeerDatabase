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
newSeerToolbarGuide; !
function(t) {
    var e = function(t) {
        function e(e) {
            var i = t.call(this) || this;
            return i.index = -1,
            i.petId = 0,
            i.typingInterval = 0,
            i.skinName = NewSeerToolbarGuideSkin,
            null != e && (i.parmamIndex = e),
            i
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            this.width = egret.lifecycle.stage.stageWidth,
            this.height = egret.lifecycle.stage.stageHeight,
            ToolBarManager.toolBar.initMainIcon(),
            this.start()
        },
        e.prototype.start = function() {
            var t = config.xml.getAnyRes("newer_guide_h5_2").root,
            e = SystemTimerManager.datestrToTime(t.timelimit),
            i = t.newer;
            1e3 * MainManager.actorInfo.regTime < e && (i = t.normal),
            null != this.parmamIndex && (i = t.newerpay),
            this.steps = i.steps,
            this.petId = i.pet.petId;
            var n = egret.lifecycle.stage;
            this.petPosition = new egret.Point(.5 * n.stageWidth - (568 - i.pet.x), i.pet.y),
            this.dialog.x = .5 * n.stageWidth - (568 - i.dialog.x),
            this.dialog.y = i.dialog.y,
            egret.lifecycle.stage.addEventListener(egret.Event.RESIZE, this.onResize, this),
            this.showPet(),
            this.next(),
            this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this)
        },
        e.prototype.onClick = function() {
            this.typingInterval > 0 ? (egret.clearInterval(this.typingInterval), this.typingInterval = 0, this.txtMsg.text = this.steps[this.index].msg) : this.next()
        },
        e.prototype.loadRes = function() {
            var t = this;
            return new Promise(function(e, i) {
                var n = 13;
                RES.getResByUrl(ClientConfig.npcModelFile(n + "/skeleton.json"),
                function(s) {
                    t.skeletonJson = s,
                    RES.getResByUrl(ClientConfig.npcModelFile(n + "/texture.png"),
                    function(s) {
                        t.texturePng = s,
                        RES.getResByUrl(ClientConfig.npcModelFile(n + "/texture.json"),
                        function(i) {
                            t.textureJson = i,
                            e()
                        },
                        t, RES.ResourceItem.TYPE_JSON)["catch"](function() {
                            Alarm.show("缺npc" + n + "的素材"),
                            i()
                        })
                    },
                    t, RES.ResourceItem.TYPE_IMAGE)["catch"](function() {
                        Alarm.show("缺npc" + n + "的素材"),
                        i()
                    })
                },
                t, RES.ResourceItem.TYPE_JSON)["catch"](function() {
                    Alarm.show("缺npc" + n + "的素材"),
                    i()
                })
            })
        },
        Object.defineProperty(e.prototype, "movieclip", {
            get: function() {
                var t = this.movieclipFactory.buildArmatureDisplay("anim");
                return t
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "movieclipFactory", {
            get: function() {
                var t = new dragonBones.EgretFactory;
                return t.parseDragonBonesData(this.skeletonJson),
                t.parseTextureAtlasData(this.textureJson, this.texturePng),
                t
            },
            enumerable: !0,
            configurable: !0
        }),
        e.prototype.showPet = function() {
            var t = this;
            this.loadRes().then(function() {
                CjsUtil.stop();
                var e = t.movieclip;
                e.scaleX = e.scaleY = 2,
                t.petContainer.addChild(e),
                e.animation.play("down", 0)
            })
        },
        e.prototype.next = function() {
            this.index++,
            this.dialog.width = 340,
            this.index < this.steps.length ? (this.drawMask(), this.showChatDialog()) : (this.onClose(), 1 != this.parmamIndex && GuideManager.mainPanelGuideComplete())
        },
        e.prototype.drawMask = function() {
            if (this.bgContainer.removeChildren(), void 0 != this.steps[this.index].position) {
                var t = this.steps[this.index].position.split("|");
                if (1 == this.steps[this.index].holeType) {
                    for (var e = [], i = t[0].split(","), n = +i[0], s = +i[0], r = +i[1], o = +i[1], a = 0; a < t.length; a++) {
                        var h = t[a].split(","),
                        l = +h[0],
                        g = +h[1];
                        e.push(new egret.Point(l, g)),
                        n = n > l ? l: n,
                        s = l > s ? l: s,
                        r = r > g ? g: r,
                        o = g > o ? g: o
                    }
                    var p = .5 * (s + n),
                    c = .5 * (o + r);
                    if (this.steps[this.index].btnName) {
                        var d = new egret.Point,
                        u = new egret.Event(GuideEvent.GET_BUTTON_CENTER, !1, !0, {
                            btnName: this.steps[this.index].btnName,
                            center: d
                        });
                        if (!EventManager.dispatchEvent(u)) {
                            d = u.data.center;
                            for (var f = d.x - p,
                            y = d.y - c,
                            x = 0,
                            v = e; x < v.length; x++) {
                                var m = v[x];
                                m.x = m.x + f,
                                m.y = m.y + y
                            }
                        }
                    } else for (var w = this.getOffX(), _ = 0, C = e; _ < C.length; _++) {
                        var m = C[_];
                        m.x = w + m.x
                    }
                    var M = core.gameUtil.DrawPolygonMask(e);
                    this.bgContainer.addChild(M),
                    this.drawFrame(e, this.steps[this.index].strokeColor)
                } else {
                    var t = this.steps[this.index].position.split(","),
                    w = this.getOffX(),
                    b = +t[0] + w,
                    I = +t[1],
                    S = +t[2],
                    M = core.gameUtil.DrawCircleMask(S, b, I);
                    this.bgContainer.addChild(M),
                    this.drawCircleFrame(b, I, S, this.steps[this.index].strokeColor)
                }
            } else {
                var E = new eui.Rect(egret.lifecycle.stage.stageWidth, egret.lifecycle.stage.stageHeight, 0);
                this.bgContainer.addChild(E),
                E.alpha = .6
            }
        },
        e.prototype.getOffX = function() {
            var t = egret.lifecycle.stage,
            e = DeviceInfoManager.adapterOffSetX;
            return "center" == this.steps[this.index].align ? e = e + .5 * t.stageWidth - 568 : "right" == this.steps[this.index].align && (e = -DeviceInfoManager.adapterOffSetX + t.stageWidth - 1136),
            e
        },
        e.prototype.showChatDialog = function() {
            this.txtMsg.bottom = 26,
            this.txtMsg.left = 10,
            this.txtMsg.right = 10,
            this.txtMsg.text = this.steps[this.index].msg,
            this.validateNow(),
            this.imgDialog.height = this.txtMsg.measuredHeight + 45,
            this.txtMsg.text = "",
            this.txtMsg.y = 200 - this.txtMsg.measuredHeight - 30,
            this.txtMsg.bottom = void 0,
            this.txtMsg.left = void 0,
            this.txtMsg.right = void 0,
            this.txtMsg.width = this.txtMsg.measuredWidth,
            egret.clearInterval(this.typingInterval),
            this.showTypeWrite(this.steps[this.index].msg)
        },
        e.prototype.showTypeWrite = function(t) {
            var e = this,
            i = 0;
            this.typingInterval = egret.setInterval(function() {
                i++,
                i <= t.length ? e.txtMsg.text = t.substring(0, i) : (egret.clearInterval(e.typingInterval), e.typingInterval = 0)
            },
            this, 80)
        },
        e.prototype.drawFrame = function(t, e) {
            var i = new egret.Sprite;
            i.graphics.lineStyle(2, e),
            i.graphics.moveTo(t[0].x, t[0].y);
            for (var n = 1; n < t.length; n++) i.graphics.lineTo(t[n].x, t[n].y);
            i.graphics.lineTo(t[0].x, t[0].y),
            this.bgContainer.addChild(i)
        },
        e.prototype.drawCircleFrame = function(t, e, i, n) {
            var s = new egret.Sprite;
            s.graphics.lineStyle(2, n),
            s.graphics.drawCircle(t, e, i),
            this.bgContainer.addChild(s)
        },
        e.prototype.updatePetPosition = function() {
            this.pet && (this.pet.x = .5 * egret.lifecycle.stage.stageWidth - (568 - this.petPosition.x), this.pet.y = this.petPosition.y)
        },
        e.prototype.onResize = function() {
            this.drawMask(),
            this.updatePetPosition()
        },
        e.prototype.destroy = function() {
            t.prototype.destroy.call(this),
            this.steps = [],
            CjsUtil.resume(),
            egret.lifecycle.stage.removeEventListener(egret.Event.RESIZE, this.onResize, this)
        },
        e
    } (BaseModule);
    t.NewSeerToolbarGuide = e,
    __reflect(e.prototype, "newSeerToolbarGuide.NewSeerToolbarGuide")
} (newSeerToolbarGuide || (newSeerToolbarGuide = {}));
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
generateEUI.paths["resource/eui_skins/NewSeerToolbarGuideSkin.exml"] = window.NewSeerToolbarGuideSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bgContainer", "petContainer", "imgDialog", "txtMsg", "dialog"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bgContainer_i(), this.petContainer_i(), this._Label1_i(), this.dialog_i()],
        this.states = [new eui.State("2", []), new eui.State("3", []), new eui.State("4", [])]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.bgContainer_i = function() {
        var t = new eui.Group;
        return this.bgContainer = t,
        t.percentHeight = 100,
        t.percentWidth = 100,
        t.x = 0,
        t.y = 0,
        t
    },
    i.petContainer_i = function() {
        var t = new eui.Group;
        return this.petContainer = t,
        t.horizontalCenter = -198,
        t.y = 380,
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.horizontalCenter = 0,
        t.size = 20,
        t.text = "点击屏幕继续",
        t.textColor = 12300721,
        t.y = 555.125,
        t
    },
    i.dialog_i = function() {
        var t = new eui.Group;
        return this.dialog = t,
        t.height = 200,
        t.horizontalCenter = -48,
        t.width = 200,
        t.y = 20,
        t.elementsContent = [this.imgDialog_i(), this.txtMsg_i()],
        t
    },
    i.imgDialog_i = function() {
        var t = new eui.Image;
        return this.imgDialog = t,
        t.bottom = 0,
        t.height = 90,
        t.left = 0,
        t.right = 0,
        t.scale9Grid = new egret.Rectangle(214, 23, 38, 22),
        t.source = "guide_qipao_png",
        t
    },
    i.txtMsg_i = function() {
        var t = new eui.Label;
        return this.txtMsg = t,
        t.bottom = 26,
        t.fontFamily = "MFShangHei",
        t.left = 14,
        t.lineSpacing = 9,
        t.multiline = !0,
        t.right = 14,
        t.size = 18,
        t.text = "小赛尔，\n这里就是你的舱室了",
        t.textColor = 12639743,
        t
    },
    e
} (eui.Skin);